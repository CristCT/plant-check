import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const ImageAnalyzer = ({ onAnalyze, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    style={{ marginBottom: '16px' }}
    onClick={onAnalyze}
    disabled={disabled}
  >
    Analizar Imagen
  </Button>
);

ImageAnalyzer.propTypes = {
  onAnalyze: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ImageAnalyzer;
