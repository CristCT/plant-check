import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Pane,
  Heading,
  Text,
  Spinner,
  Button,
  Image,
  Icon,
} from 'evergreen-ui';

const ResultDisplay = ({ loading, result, confidence, image }) => {
  const [showConfidence, setShowConfidence] = useState(false);

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={16}
      textAlign="center"
    >
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
          <Text>{result}</Text>
          <Button
            appearance="primary"
            intent="none"
            marginTop={16}
            onClick={() => setShowConfidence(!showConfidence)}
          >
            {showConfidence ? 'Ocultar Confianza' : 'Mostrar Confianza'}
          </Button>
          {showConfidence && (
            <Text marginTop={8}>
              Confianza: {(confidence * 100).toFixed(2)}%
            </Text>
          )}
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
