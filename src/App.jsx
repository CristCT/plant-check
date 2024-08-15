import { useState } from 'react';
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setTimeout(() => {
        setResult('La hoja es saludable');
      }, 1000);
    }
  };

  return (
    <div className="App">
      <div className="Body">
        <h1>Analizador de Hojas de Manzana</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <div>
            <h2>Imagen seleccionada:</h2>
            <img
              src={image}
              alt="Hoja de Manzana"
              style={{ maxWidth: '300px' }}
            />
          </div>
        )}
        {result && (
          <div>
            <h2>Resultado del análisis:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
