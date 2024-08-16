import { useState } from 'react';
import config from '../config';

export const useImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const analyzeImage = async (outputType) => {
    if (!imageFile) {
      alert('Por favor, sube una imagen primero.');
      return;
    }

    setLoading(true);
    setResult(null);
    setConfidence(null);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('output_type', outputType);

    try {
      const response = await fetch(`${config.API_BASE_URL}/predict`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
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
