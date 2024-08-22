import React from 'react';
import { Pane, Button, Heading, Paragraph } from 'evergreen-ui';
import { useNavigate } from 'react-router-dom';

const FinalStep = () => {
  const navigate = useNavigate();

  return (
    <Pane>
      <Heading size={500} marginY={10}>
        Proceso finalizado
      </Heading>
      <Paragraph marginBottom={16} color="muted">
        El proceso de análisis ha finalizado.
      </Paragraph>
      <Pane display="flex" justifyContent="flex-end">
        <Button appearance="primary" onClick={() => navigate('/dashboard')}>
          Ir al Dashboard
        </Button>
      </Pane>
    </Pane>
  );
};

export default FinalStep;
