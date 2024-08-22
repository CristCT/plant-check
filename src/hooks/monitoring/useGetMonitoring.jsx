import { useState, useEffect, useCallback } from 'react';
import { getDataMonitoring } from '../../Api/MonitoringApi';

const useGetMonitoring = () => {
  const [monitoring, setMonitoring] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMonitoring = useCallback(async () => {
    try {
      const data = await getDataMonitoring();
      setMonitoring(data);
    } catch (error) {
      console.error('Error al obtener los datos de monitoreo:', error);
      setError('Error al obtener los datos de monitoreo');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMonitoring();
  }, [getMonitoring]);

  return { monitoring, loading, error };
};

export default useGetMonitoring;
