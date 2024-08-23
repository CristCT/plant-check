import { useState, useEffect, useCallback } from 'react';
import { getGreenHouseData } from '../../api/MonitoringApi';

const useGetGreenHouse = () => {
  const [greenHouse, setGreenHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGreenHouseData = useCallback(async () => {
    try {
      const data = await getGreenHouseData();
      setGreenHouse(data);
    } catch (error) {
      console.error('Error al obtener los datos del invernadero:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGreenHouseData();
  }, [fetchGreenHouseData]);

  return { greenHouse, loading, error };
};

export default useGetGreenHouse;
