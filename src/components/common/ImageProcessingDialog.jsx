import React from 'react';
import { Dialog, Paragraph } from 'evergreen-ui';
import { ProgressBar } from 'primereact/progressbar';
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
    <ProgressBar value={progress} />
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
