import { useState, useEffect, useCallback } from 'react';
import { getCameraData } from '../../api/MonitoringApi';

const useGetCamera = () => {
  const [camera, setCamera] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCameraData = useCallback(async () => {
    try {
      const data = await getCameraData();
      setCamera(data);
    } catch (error) {
      console.error('Error al obtener los datos de la cámara:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCameraData();
  }, [fetchCameraData]);

  return { camera, loading, error };
};

export default useGetCamera;
