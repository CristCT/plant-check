import React from 'react';
import { Pane } from 'evergreen-ui';
import { Grid, Typography } from '@mui/material';
import { HeaderBar, LoadingSpinner, ErrorAlert } from '../../components';
import {
  SectionCamera,
  SectionMonitoring,
  SectionGreenhouses,
} from './components';
import {
  useGetMonitoring,
  useGetGreenHouse,
  useGetCamera,
} from '../../hooks/monitoring';
import { columnsGreenhouses, columnsMonitoring } from './columns';

const Dashboard = () => {
  const {
    monitoring,
    loading: loadingMonitoring,
    error: errorMonitoring,
  } = useGetMonitoring();
  const {
    greenHouse,
    loading: loadingGreenHouse,
    error: errorGreenHouse,
  } = useGetGreenHouse();
  const { camera, loading: loadingCamera, error: errorCamera } = useGetCamera();

  const isLoading = loadingMonitoring || loadingGreenHouse || loadingCamera;
  const error = errorMonitoring || errorGreenHouse || errorCamera;

  const monitoringData = Array.isArray(monitoring) ? monitoring : [];
  const cameraData = Array.isArray(camera) ? camera : [];

  const invernaderoCount = cameraData.reduce((acc, item) => {
    acc[item.idinvernadero] = (acc[item.idinvernadero] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(invernaderoCount).map((key) => ({
    id: `Invernadero ${key}`,
    value: invernaderoCount[key],
  }));

  const getArcLabel = (item) => item.value.toString() + ' cámaras';

  return (
    <Pane background="tint1" minHeight="100vh">
      <HeaderBar title="Dashboard" />
      <Pane paddingX={16}>
        {isLoading && <LoadingSpinner />}

        {error && <ErrorAlert error={error} />}

        {!isLoading && !error && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <SectionCamera
                data={pieData}
                chartHeight={400}
                getArcLabel={getArcLabel}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <SectionMonitoring
                rows={monitoringData}
                columns={columnsMonitoring}
                getRowId={(row) => row.idmonitoreo_plantas}
              />
            </Grid>

            <Grid item xs={12}>
              <SectionGreenhouses
                rows={greenHouse}
                columns={columnsGreenhouses}
                getRowId={(row) => row.idinvernadero}
              />
            </Grid>
          </Grid>
        )}

        {!isLoading &&
          !error &&
          monitoringData.length === 0 &&
          greenHouse.length === 0 &&
          cameraData.length === 0 && (
            <Typography>No se encontraron resultados.</Typography>
          )}
      </Pane>
    </Pane>
  );
};

export default Dashboard;
