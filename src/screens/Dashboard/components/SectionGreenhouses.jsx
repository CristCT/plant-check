import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const SectionGreenhouses = ({ rows, columns, getRowId }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Invernaderos
      </Typography>
      <Box sx={{ height: '100%', width: '100%' }}>
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

SectionGreenhouses.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowId: PropTypes.func.isRequired,
};

export default SectionGreenhouses;
