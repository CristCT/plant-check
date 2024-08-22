import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const SectionMonitoring = ({ rows, columns, getRowId }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Monitoreo de Plantas
      </Typography>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={getRowId}
        />
      </Box>
    </CardContent>
  </Card>
);

SectionMonitoring.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowId: PropTypes.func.isRequired,
};

export default SectionMonitoring;
