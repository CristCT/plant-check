import React, { useState } from 'react';
import { Dialog, Pane, IconButton } from 'evergreen-ui';
import { Settings } from '@mui/icons-material';
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

  return (
    <Pane width={50}>
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
