import React, { useState } from 'react';
import { Pane } from 'evergreen-ui';
import { toast } from 'react-toastify';
import { useModelOptions } from '../../provider/ModelOptionsProvider';
import useFileAnalyzer from '../../hooks/useFileAnalyzer';
import useSaveResults from '../../hooks/monitoring/useSaveResults';
import {
  HeaderBar,
  StepperNavigation,
  ImageAnalysisStep,
  SaveResultsStep,
  FinalStep,
  ImageProcessingDialog,
} from '../../components';
import UploaderSection from './components/UploaderSection';

const ImageProcessingManager = () => {
  const { selectedModelOptions, selectedModelChange } = useModelOptions();
  const [currentStep, setCurrentStep] = useState(0);
  const [images, setImages] = useState([]);
  const [analysisResults, setAnalysisResults] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const { analyzeImage } = useFileAnalyzer();
  const { saveResultsData, loading, error } = useSaveResults();

  const steps = ['Subir Imágenes', 'Analizar Imágenes', 'Guardar Resultados'];

  const handleNextStep = () => {
    if (currentStep === 1 && images.length > 0) {
      setIsDialogShown(true);
      handleImageAnalysis();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleImageAnalysis = async () => {
    if (images.length === 0) {
      toast.error('No hay imágenes para analizar.');
      return;
    }

    const totalImages = images.length;
    let allSuccess = true;
    let analysisResults = [];

    for (let i = 0; i < totalImages; i++) {
      try {
        const analysisResult = await analyzeImage(
          images[i],
          selectedModelOptions,
          selectedModelChange
        );
        if (analysisResult) {
          analysisResults.push({
            idcamara: 1,
            resultado_modelo: analysisResult.result,
            planta: `Planta ${i + 1}`,
            healthy: analysisResult.confidence >= 0.5 ? 'Yes' : 'No',
            time: new Date().toISOString(),
            fecha_registro: new Date().toISOString(),
            valido: true,
          });
        } else {
          throw new Error('No se pudo obtener el resultado del análisis');
        }
      } catch (error) {
        console.error(`Error al analizar la imagen ${i + 1}:`, error);
        allSuccess = false;
        break;
      }
      setProgress(((i + 1) / totalImages) * 100);
    }

    setIsDialogShown(false);

    if (allSuccess) {
      toast.success('Todas las imágenes fueron analizadas exitosamente.');
      setCurrentStep(2);
      setAnalysisResults(analysisResults);
    } else {
      toast.error(
        'Error al analizar las imágenes. Revisa los archivos e intenta de nuevo.'
      );
    }
  };

  const handleImageUploadWrapper = (files) => {
    const newImages = Array.from(files);
    setImages((prevImages) => [...prevImages, ...newImages]);

    const newPreviews = newImages.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const confirmImagesUpload = () => {
    setCurrentStep(1);
  };

  const saveResults = async (data) => {
    await saveResultsData(data);
    if (error === null) {
      setCurrentStep(3);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <UploaderSection
            handleImageUploadWrapper={handleImageUploadWrapper}
            imagePreviews={imagePreviews}
            confirmImagesUpload={confirmImagesUpload}
            images={images}
          />
        );
      case 1:
        return (
          <ImageAnalysisStep
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            images={images}
          />
        );
      case 2:
        return (
          <SaveResultsStep
            saveResults={saveResults}
            analysisResults={analysisResults}
            handlePrevStep={handlePrevStep}
            images={images}
            loading={loading}
          />
        );
      case 3:
        return <FinalStep setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="tint1"
      height="100vh"
    >
      <HeaderBar title="Procesamiento de Imágenes" />

      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={50}
        elevation={1}
        background="white"
        borderRadius={8}
        width={500}
      >
        <StepperNavigation
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <Pane
          display="flex"
          flexDirection="column"
          width="100%"
          maxWidth={400}
          gap={16}
        >
          {renderStepContent()}
        </Pane>

        <ImageProcessingDialog
          isDialogShown={isDialogShown}
          progress={progress}
          images={images}
          setIsDialogShown={setIsDialogShown}
        />
      </Pane>
    </Pane>
  );
};

export default ImageProcessingManager;
