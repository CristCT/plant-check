import { useNavigate } from 'react-router-dom';
import { Pane, Heading, Button } from 'evergreen-ui';
import { Home } from '@mui/icons-material';
import PropTypes from 'prop-types';

const HeaderBar = ({ title, buttonPosition = 'right' }) => {
  const navigate = useNavigate();

  const buttonElement = (
    <Button
      onClick={() => navigate('/')}
      iconAfter={<Home fontSize="small" />}
      intent="success"
      position="absolute"
      top={16}
      {...(buttonPosition === 'left' ? { left: 16 } : { right: 16 })}
    >
      Ir a Inicio
    </Button>
  );

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
      {buttonElement}
    </Pane>
  );
};

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  buttonPosition: PropTypes.oneOf(['left', 'right']),
};

export default HeaderBar;
