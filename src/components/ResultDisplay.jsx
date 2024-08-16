import PropTypes from 'prop-types';
import { useState } from 'react';
import { Typography, CircularProgress, Box, Button } from '@mui/material';

const ResultDisplay = ({ loading, result, confidence, image }) => {
  const [showConfidence, setShowConfidence] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '16px', textAlign: 'center' }}
    >
      {image && (
        <div>
          <Typography variant="h6" gutterBottom>
            Imagen seleccionada:
          </Typography>
          <img
            src={image}
            alt="Hoja de Manzana"
            style={{ maxWidth: '300px', borderRadius: '4px' }}
          />
        </div>
      )}

      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          style={{ marginTop: '16px' }}
        >
          <CircularProgress />
        </Box>
      )}

      {!loading && result && (
        <div>
          <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
            Resultado del análisis:
          </Typography>
          <Typography variant="body1">{result}</Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: '16px' }}
            onClick={() => setShowConfidence(!showConfidence)}
          >
            {showConfidence ? 'Ocultar Confianza' : 'Mostrar Confianza'}
          </Button>
          {showConfidence && (
            <Typography variant="body2" style={{ marginTop: '8px' }}>
              Confianza: {(confidence * 100).toFixed(2)}%
            </Typography>
          )}
        </div>
      )}
    </Box>
  );
};

ResultDisplay.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.string,
  confidence: PropTypes.number,
  image: PropTypes.string,
};

export default ResultDisplay;
