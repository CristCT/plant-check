import React from 'react';
import PropTypes from 'prop-types';
import { Combobox } from 'evergreen-ui';

const OptionList = ({ selectedOption, onChange, options }) => {
  return (
    <Combobox
      items={options}
      itemToString={(item) => (item ? item.name : '')}
      onChange={(selected) => onChange(selected.id)}
      placeholder="Selecciona una opción"
      marginBottom={16}
      selectedItem={options.find((option) => option.id === selectedOption)}
    />
  );
};

OptionList.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OptionList;
