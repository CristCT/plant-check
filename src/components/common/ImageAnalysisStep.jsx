import React from 'react';
import { Pane, Button, Heading, Paragraph } from 'evergreen-ui';
import { ArrowBack, PlayArrow } from '@mui/icons-material';
import PropTypes from 'prop-types';

const ImageAnalysisStep = ({ handleNextStep, handlePrevStep, images }) => (
  <Pane>
    <Heading size={500} marginY={10}>
      Confirmar Imágenes
    </Heading>
    <Paragraph size={400}>
      Preparado para enviar {images.length} imágenes al modelo de análisis.
      {images.length === 0 && (
        <Paragraph color="red" size={400}>
          No hay imágenes para analizar.
        </Paragraph>
      )}
    </Paragraph>
    <Pane display="flex" justifyContent="space-between" marginTop={24}>
      <Button
        appearance="minimal"
        onClick={handlePrevStep}
        iconBefore={<ArrowBack fontSize="small" />}
      >
        Volver
      </Button>
      <Button
        appearance="primary"
        onClick={handleNextStep}
        disabled={images.length === 0}
        iconAfter={<PlayArrow fontSize="small" />}
      >
        Iniciar Análisis
      </Button>
    </Pane>
  </Pane>
);

ImageAnalysisStep.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageAnalysisStep;
