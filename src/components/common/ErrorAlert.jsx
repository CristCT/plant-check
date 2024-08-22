import React from 'react';
import { Alert } from 'evergreen-ui';
import PropTypes from 'prop-types';

const ErrorAlert = ({ error }) => (
  <Alert intent="danger" title="Ha ocurrido un error">
    {error}
  </Alert>
);

ErrorAlert.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorAlert;
