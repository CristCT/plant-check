import { useState } from 'react';
import { Pane } from 'evergreen-ui';
import { useImageAnalyzer } from '../../hooks/useImageAnalyzer';
import {
  HeaderBar,
  ImageUploader,
  ImageAnalyzer,
  ResultDisplay,
  OptionList,
} from '../../components';
import { optionsDefaultPredict } from '../../utils';

const Analyzer = () => {
  const [selectedOption, setSelectedOption] = useState('saludable');
  const {
    image,
    handleImageUpload,
    analyzeImage,
    result,
    confidence,
    loading,
  } = useImageAnalyzer();

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      textAlign="center"
      background="tint1"
      height="100vh"
    >
      <HeaderBar title="Analizador de Plantas" />

      <Pane
        width={500}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={8}
        elevation={1}
        padding={20}
        textAlign="center"
        background="white"
      >
        <OptionList
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          options={optionsDefaultPredict}
        />

        <ImageUploader onUpload={handleImageUpload} />
        <ImageAnalyzer
          onAnalyze={() => analyzeImage(selectedOption)}
          disabled={!image}
        />
        <ResultDisplay
          loading={loading}
          result={result}
          confidence={confidence}
          image={image}
        />
      </Pane>
    </Pane>
  );
};

export default Analyzer;
