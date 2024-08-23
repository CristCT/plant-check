import { useNavigate } from 'react-router-dom';
import { Pane, Heading, Button } from 'evergreen-ui';
import { Home } from '@mui/icons-material';
import PropTypes from 'prop-types';
import SettingsModal from './SettingsModal';

const HeaderBar = ({ title, buttonPosition, showOptions }) => {
  const navigate = useNavigate();

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginBottom={16}
      padding={16}
      width="100%"
      position="relative"
    >
      <Heading size={800} color="#234361">
        {title}
      </Heading>
      <Pane
        position="absolute"
        top={16}
        display="flex"
        alignItems="center"
        {...(buttonPosition === 'left' ? { left: 16 } : { right: 16 })}
      >
        {showOptions && <SettingsModal />}
        <Button
          onClick={() => navigate('/')}
          iconAfter={<Home fontSize="small" />}
          intent="success"
        >
          Ir a Inicio
        </Button>
      </Pane>
    </Pane>
  );
};

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  buttonPosition: PropTypes.oneOf(['left', 'right']),
  showOptions: PropTypes.bool,
};

HeaderBar.defaultProps = {
  buttonPosition: 'right',
  showOptions: true,
};

export default HeaderBar;
