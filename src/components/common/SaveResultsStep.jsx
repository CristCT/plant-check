import React from 'react';
import { Pane, Button, Heading, Paragraph } from 'evergreen-ui';
import PropTypes from 'prop-types';

const SaveResultsStep = ({ saveResults, handlePrevStep, images }) => (
  <Pane>
    <Heading size={500} marginY={10}>
      Finalizar y Guardar Resultados
    </Heading>
    <Paragraph marginBottom={32} color="muted">
      Esta acción guardará permanentemente los resultados del análisis.
      Asegúrese de revisar la información antes de continuar.
    </Paragraph>
    <Pane display="flex" justifyContent="space-between" alignItems="center">
      <Button
        appearance="minimal"
        onClick={handlePrevStep}
        iconBefore="arrow-left"
      >
        Volver al análisis
      </Button>
      <Button
        appearance="primary"
        intent="success"
        onClick={saveResults}
        disabled={images.length === 0}
        iconAfter="floppy-disk"
      >
        Guardar Resultados
      </Button>
    </Pane>
  </Pane>
);

SaveResultsStep.propTypes = {
  saveResults: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default SaveResultsStep;
