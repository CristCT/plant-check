import PropTypes from 'prop-types';
import { Button } from 'evergreen-ui';

const ImageAnalyzer = ({ onAnalyze, disabled }) => (
  <Button
    appearance="primary"
    intent="success"
    width="300px"
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
