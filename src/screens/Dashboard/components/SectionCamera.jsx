import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import PropTypes from 'prop-types';

const SectionCamera = ({ data, chartHeight, getArcLabel }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Distribución de Cámaras por Invernadero
      </Typography>
      {data.length > 0 ? (
        <PieChart
          height={chartHeight}
          series={[
            {
              outerRadius: 120,
              data: data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: 14,
            },
          }}
          tooltip={false}
        />
      ) : (
        <Typography variant="body2">
          No hay datos de cámaras disponibles.
        </Typography>
      )}
    </CardContent>
  </Card>
);

SectionCamera.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  chartHeight: PropTypes.number.isRequired,
  getArcLabel: PropTypes.func.isRequired,
};

export default SectionCamera;
