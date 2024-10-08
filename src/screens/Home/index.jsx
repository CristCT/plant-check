import React from 'react';
import { Pane, Card, Heading, Text } from 'evergreen-ui';
import { LocalFlorist, CameraAlt, Dashboard } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const cardStyle = {
    width: 280,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const iconStyle = {
    marginBottom: 16,
    fontSize: 40,
  };

  return (
    <Pane
      display="flex"
      flexDirection="column"
      margin="auto"
      padding={32}
      textAlign="center"
      background="tint1"
      height="100vh"
    >
      <Heading size={900} marginBottom={48} color="#234361">
        ¡Bienvenido! 🌱
      </Heading>

      <Text size={500} marginBottom={48} color="#52606D">
        Explore nuestras herramientas para el análisis y gestión de plantas
      </Text>

      <Pane display="flex" gap={32} flexWrap="wrap" justifyContent="center">
        <Card
          {...cardStyle}
          elevation={1}
          hoverElevation={3}
          background="#F9FAFC"
          onClick={() => navigate('/analyzer')}
          hoverBackground="#E4E7EB"
        >
          <LocalFlorist style={iconStyle} color="primary" />
          <Heading size={600} marginBottom={8}>
            Analizador de Imagen
          </Heading>
          <Text>Analice el estado de sus plantas</Text>
        </Card>

        <Card
          {...cardStyle}
          elevation={1}
          hoverElevation={3}
          background="#F9FAFC"
          onClick={() => navigate('/image-processing-manager')}
          hoverBackground="#E4E7EB"
        >
          <CameraAlt style={iconStyle} color="secondary" />
          <Heading size={600} marginBottom={8}>
            Procesamiento de Imágenes
          </Heading>
          <Text>Gestione y procese imágenes de plantas</Text>
        </Card>

        <Card
          {...cardStyle}
          elevation={1}
          hoverElevation={3}
          background="#F9FAFC"
          onClick={() => navigate('/dashboard')}
          hoverBackground="#E4E7EB"
        >
          <Dashboard style={iconStyle} color="error" />
          <Heading size={600} marginBottom={8}>
            Dashboard
          </Heading>
          <Text>Visualice datos y estadísticas</Text>
        </Card>
      </Pane>
    </Pane>
  );
};

export default Home;
