import { useState } from 'react';
import { postDataProcessing } from '../Api/MonitoringApi';

export const useFileAnalyzer = () => {
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeImage = async (imageFile) => {
    if (!imageFile) {
      alert('Por favor, sube una imagen primero.');
      return false;
    }

    setLoading(true);
    setResult(null);
    setConfidence(null);

    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const data = await postDataProcessing(formData);
      setResult(data.result);
      setConfidence(data.confidence);
      return true;
    } catch (error) {
      console.error('Error al predecir:', error);
      setResult('Error en el análisis');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    analyzeImage,
    result,
    confidence,
    loading,
  };
};
