import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Pane,
  Heading,
  Text,
  Spinner,
  Image,
  Icon,
  Checkbox,
} from 'evergreen-ui';

const ResultDisplay = ({ loading, result, confidence, image }) => {
  const [showConfidence, setShowConfidence] = useState(false);

  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.8) return 'green';
    if (confidence >= 0.5) return 'yellow';
    return 'red';
  };

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Checkbox
        label="Mostrar confianza"
        checked={showConfidence}
        onChange={(e) => setShowConfidence(e.target.checked)}
      />

      {image && (
        <Pane>
          <Heading size={500} marginBottom={16}>
            <Icon icon="media" color="info" marginRight={8} />
            Imagen seleccionada:
          </Heading>
          <Image
            src={image}
            alt="Hoja de Manzana"
            maxWidth={300}
            borderRadius={4}
          />
        </Pane>
      )}

      {loading && (
        <Pane display="flex" justifyContent="center" marginTop={16}>
          <Spinner />
        </Pane>
      )}

      {!loading && result && (
        <Pane>
          <Heading size={500} marginTop={16} marginBottom={16}>
            Resultado del análisis:
          </Heading>

          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text>{result}</Text>
            {showConfidence && (
              <Text marginTop={8} color={getConfidenceColor(confidence)}>
                Confianza: {(confidence * 100).toFixed(2)}%
              </Text>
            )}
          </Pane>
        </Pane>
      )}
    </Pane>
  );
};

ResultDisplay.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.string,
  confidence: PropTypes.number,
  image: PropTypes.string,
};

export default ResultDisplay;
