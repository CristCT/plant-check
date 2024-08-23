import { useState } from 'react';
import { postDataProcessing } from '../api/MonitoringApi';
import { toast } from 'react-toastify';

const useFileAnalyzer = () => {
  const [outputType] = useState('saludable');
  const [loading, setLoading] = useState(false);

  const analyzeImage = async (imageFile) => {
    if (!imageFile) {
      toast.error('Por favor, sube una imagen primero.');
      return false;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('output_type', outputType);

    try {
      const data = await postDataProcessing(formData);
      if (data && data.result !== undefined) {
        return data;
      } else {
        throw new Error(
          'La respuesta del servidor no contiene un resultado válido'
        );
      }
    } catch (error) {
      console.error('Error al predecir:', error);
      toast.error('Error al predecir');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    analyzeImage,
    loading,
  };
};

export default useFileAnalyzer;
