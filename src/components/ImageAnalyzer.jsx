import PropTypes from 'prop-types';
import { Button } from 'evergreen-ui';

const ImageAnalyzer = ({ onAnalyze, disabled }) => (
  <Button
    appearance="primary"
    intent="success"
    width="100%"
    marginBottom={16}
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
