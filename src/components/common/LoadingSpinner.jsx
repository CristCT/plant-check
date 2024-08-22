import React from 'react';
import { Pane, Spinner, Text } from 'evergreen-ui';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ message = 'Cargando...', size = 'medium' }) => {
  const spinnerSizes = {
    small: { spinner: 16, height: 50, fontSize: 300 },
    medium: { spinner: 24, height: 80, fontSize: 400 },
    large: { spinner: 40, height: 120, fontSize: 500 },
  };

  const { spinner, height, fontSize } = spinnerSizes[size];

  return (
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={height}
      background="transparent"
    >
      <Spinner size={spinner} />
      {message && (
        <Text size={fontSize} marginTop={8} color="#234361">
          {message}
        </Text>
      )}
    </Pane>
  );
};

LoadingSpinner.propTypes = {
  message: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default LoadingSpinner;
