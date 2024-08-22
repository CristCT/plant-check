import React from 'react';
import { Pane, Button, Heading, Paragraph } from 'evergreen-ui';
import { ArrowBack, Save } from '@mui/icons-material';
import PropTypes from 'prop-types';

const SaveResultsStep = ({
  saveResults,
  analysisResults,
  handlePrevStep,
  images,
  loading,
}) => (
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
        iconBefore={<ArrowBack fontSize="small" />}
      >
        Volver al análisis
      </Button>
      <Button
        appearance="primary"
        intent="success"
        onClick={() => saveResults(analysisResults)}
        disabled={images.length === 0 || analysisResults.length === 0}
        iconAfter={<Save fontSize="small" />}
        isLoading={loading}
      >
        Guardar Resultados
      </Button>
    </Pane>
  </Pane>
);

SaveResultsStep.propTypes = {
  saveResults: PropTypes.func.isRequired,
  analysisResults: PropTypes.array.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SaveResultsStep;
