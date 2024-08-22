import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { saveResults } from '../../Api/MonitoringApi';

const useSaveResults = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveResultsData = useCallback(async (data) => {
    setLoading(true);
    try {
      await saveResults(data);
      toast.success('Resultados guardados exitosamente');
      setError(null);
      return true;
    } catch (error) {
      console.error('Error al guardar los resultados:', error);
      toast.error('Error al guardar los resultados');
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { saveResultsData, loading, error };
};

export default useSaveResults;
