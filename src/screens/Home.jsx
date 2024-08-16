import { useState } from 'react';
import { Heading, Pane, Icon } from 'evergreen-ui';
import { useImageAnalyzer } from '../hooks/useImageAnalyzer';
import {
  ImageUploader,
  ImageAnalyzer,
  ResultDisplay,
  OptionList,
} from '../components';

const Home = () => {
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
      justifyContent="center"
      height="100vh"
      padding={20}
      textAlign="center"
    >
      <Heading size={600} marginBottom={16}>
        <Icon icon="leaf" color="success" marginRight={8} />
        Analizador de Hojas de Manzana
      </Heading>

      <OptionList
        selectedOption={selectedOption}
        onChange={setSelectedOption}
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
  );
};

export default Home;
