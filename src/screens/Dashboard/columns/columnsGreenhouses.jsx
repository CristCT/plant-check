import { formatTime } from '../../../utils';

const columnsGreenhouses = [
  { field: 'idinvernadero', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 150 },
  { field: 'ubicacion', headerName: 'Ubicación', width: 200 },
  { field: 'descripcion', headerName: 'Descripción', width: 300 },
  {
    field: 'fecha_registro',
    headerName: 'Fecha Registro',
    width: 200,
    renderCell: (params) => {
      return formatTime(params.value, 'es-CL');
    },
  },
];

export default columnsGreenhouses;
