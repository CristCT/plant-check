import { useState } from 'react';
import { postDataProcessing } from '../api/MonitoringApi';
import { toast } from 'react-toastify';

export const useImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (eventOrFiles) => {
    let file;

    if (eventOrFiles.target && eventOrFiles.target.files) {
      file = eventOrFiles.target.files[0];
    } else if (eventOrFiles && eventOrFiles.length > 0) {
      file = eventOrFiles[0];
    }

    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const analyzeImage = async (outputType, selectedModelChange) => {
    if (!imageFile) {
      toast.error('Por favor, suba una imagen primero.');
      return;
    }

    setLoading(true);
    setResult(null);
    setConfidence(null);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('output_type', outputType);
    formData.append('model_trade_off', selectedModelChange);

    try {
      const data = await postDataProcessing(formData);
      setResult(data.result);
      setConfidence(data.confidence);
    } catch (error) {
      console.error('Error al predecir:', error);
      setResult('Error en el análisis');
    } finally {
      setLoading(false);
    }
  };

  return {
    image,
    handleImageUpload,
    analyzeImage,
    result,
    confidence,
    loading,
  };
};
