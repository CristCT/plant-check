import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ModelOptionsContext = createContext();

export const useModelOptions = () => {
  return useContext(ModelOptionsContext);
};

export const ModelOptionsProvider = ({ children }) => {
  const [selectedModelOptions, setSelectedModelOptions] = useState('saludable');
  const [selectedModelChange, setSelectedModelChange] = useState(true);

  return (
    <ModelOptionsContext.Provider
      value={{
        selectedModelOptions,
        setSelectedModelOptions,
        selectedModelChange,
        setSelectedModelChange,
      }}
    >
      {children}
    </ModelOptionsContext.Provider>
  );
};

ModelOptionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
