import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { saveResults } from '../../Api/MonitoringApi';

export const useSaveResults = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveResultsData = useCallback(async (data) => {
    try {
      setLoading(true);
      await saveResults(data);
      toast.success('Resultados guardados exitosamente');
    } catch (error) {
      console.error('Error al guardar los resultados:', error);
      toast.error('Error al guardar los resultados');
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { saveResultsData, loading, error };
};
