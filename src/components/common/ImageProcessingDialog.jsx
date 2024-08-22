import React from 'react';
import { Dialog, Paragraph } from 'evergreen-ui';
import { LinearProgress, Box } from '@mui/material';
// import { ProgressBar } from 'primereact/progressbar';
import PropTypes from 'prop-types';

const ImageProcessingDialog = ({
  isDialogShown,
  progress,
  images,
  setIsDialogShown,
}) => (
  <Dialog
    isShown={isDialogShown}
    title="Analizando Imágenes"
    hasFooter={false}
    onCloseComplete={() => setIsDialogShown(false)}
  >
    <Box sx={{ width: '100%', mb: 2 }}>
      <LinearProgress
        color="success"
        variant="determinate"
        value={progress}
        sx={{ borderRadius: 1 }}
      />
    </Box>
    <Paragraph>
      Procesando imagen {Math.ceil((progress / 100) * images.length)} de{' '}
      {images.length}
    </Paragraph>
  </Dialog>
);

ImageProcessingDialog.propTypes = {
  isDialogShown: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  setIsDialogShown: PropTypes.func.isRequired,
};

export default ImageProcessingDialog;
