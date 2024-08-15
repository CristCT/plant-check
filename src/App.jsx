import { useState } from 'react';
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        setResult(
          `Resultado: ${data.result} (Confianza: ${(data.confidence * 100).toFixed(2)}%)`
        );
      } catch (error) {
        console.error('Error al predecir:', error);
        setResult('Error en el análisis');
      }
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
