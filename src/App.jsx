import { useState } from 'react';
import { Select, MenuItem, Typography } from '@mui/material';
import { useImageAnalyzer } from './hooks/useImageAnalyzer';
import ImageUploader from './components/ImageUploader';
import ImageAnalyzer from './components/ImageAnalyzer';
import ResultDisplay from './components/ResultDisplay';

const options = [
  { id: 'saludable', name: '¿La hoja está saludable?' },
  { id: 'problemas', name: 'Ver posibles problemas' },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const {
    image,
    handleImageUpload,
    analyzeImage,
    result,
    confidence,
    loading,
  } = useImageAnalyzer();

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Analizador de Hojas de Manzana
      </Typography>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ marginBottom: '16px' }}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>

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
    </div>
  );
};

export default App;
