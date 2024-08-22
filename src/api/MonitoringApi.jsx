import axios from 'axios';
import config from '../config';

const postDataProcessing = async (data) => {
  return axios
    .post(`${config.API_BASE_URL}/predict`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al guardar los resultados:', error);
      throw new Error('Error al guardar los resultados');
    });
};

const getDataMonitoring = async () => {
  return axios
    .get(`${config.API_BASE_URL}/monitoreo_plantas/monitoreo`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al obtener los datos de monitoreo:', error);
      throw new Error('Error al obtener los datos de monitoreo');
    });
};

const getCameraData = async () => {
  return axios
    .get(`${config.API_BASE_URL}/monitoreo_plantas/camara`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al obtener los datos de la cámara:', error);
      throw new Error('Error al obtener los datos de la cámara');
    });
};

const getGreenHouseData = async () => {
  return axios
    .get(`${config.API_BASE_URL}/monitoreo_plantas/invernadero`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al obtener los datos del invernadero:', error);
      throw new Error('Error al obtener los datos del invernadero');
    });
};

const saveResults = async (data) => {
  return axios
    .post(`${config.API_BASE_URL}/monitoreo_plantas/guardarResultados`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al guardar los resultados:', error);
      throw new Error('Error al guardar los resultados');
    });
};

export {
  postDataProcessing,
  getDataMonitoring,
  getCameraData,
  getGreenHouseData,
  saveResults,
};
