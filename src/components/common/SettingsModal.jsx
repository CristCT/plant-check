import React, { useState } from 'react';
import { Dialog, Pane, IconButton } from 'evergreen-ui';
import { Settings } from '@mui/icons-material';
import Apple from '@mui/icons-material/Apple';
import { FaSeedling } from 'react-icons/fa';
import config from '../../config';
import { useModelOptions } from '../../provider/ModelOptionsProvider';
import OptionList from './OptionList';
import { optionsDefaultPredict, optionsModels } from '../../utils';

const SettingsModal = () => {
  const { MODEL_TRADE_OFF } = config;
  const [isShown, setIsShown] = useState(false);
  const {
    selectedModelOptions,
    setSelectedModelOptions,
    selectedModelChange,
    setSelectedModelChange,
  } = useModelOptions();

  const getIconColor = (isApple) => {
    if (selectedModelOptions === 'saludable') {
      return isApple ? 'red' : 'green';
    } else {
      return 'gray';
    }
  };

  const isAppleSelected = selectedModelChange === true;

  return (
    <Pane display="flex" alignItems="center" width={60}>
      <Pane display="flex" alignItems="center">
        <Pane
          width={24}
          height={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {isAppleSelected ? (
            <Apple style={{ color: getIconColor(true) }} />
          ) : (
            <FaSeedling
              style={{ color: getIconColor(false), fontSize: '18px' }}
            />
          )}
        </Pane>
      </Pane>
      <IconButton
        icon={<Settings />}
        onClick={() => setIsShown(true)}
        appearance="minimal"
      />
      <Dialog
        isShown={isShown}
        title="Configuración"
        onCloseComplete={() => setIsShown(false)}
        width={400}
        hasFooter={false}
      >
        <OptionList
          selectedOption={selectedModelOptions}
          onChange={setSelectedModelOptions}
          options={optionsDefaultPredict}
        />
        {MODEL_TRADE_OFF && (
          <OptionList
            selectedOption={selectedModelChange}
            onChange={setSelectedModelChange}
            options={optionsModels}
          />
        )}
      </Dialog>
    </Pane>
  );
};

export default SettingsModal;
