import { formatTime } from '../../../utils';

const columnsMonitoring = [
  { field: 'idmonitoreo_plantas', headerName: 'ID', width: 50 },
  { field: 'planta', headerName: 'Nombre', width: 120 },
  {
    field: 'healthy',
    headerName: 'Saludable',
    width: 100,
    renderCell: (params) => {
      return params.row.healthy === 'Yes' ? 'Sí' : 'No';
    },
  },
  {
    field: 'resultado_modelo',
    headerName: 'Resultado Modelo',
    width: 150,
  },
  {
    field: 'fecha_registro',
    headerName: 'Fecha Registro',
    width: 200,
    renderCell: (params) => {
      return formatTime(params.value, 'es-CL');
    },
  },
];

export default columnsMonitoring;
