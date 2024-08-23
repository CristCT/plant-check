import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModelOptionsProvider } from './provider/ModelOptionsProvider.jsx';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer theme="colored" />
    <ModelOptionsProvider>
      <App />
    </ModelOptionsProvider>
  </StrictMode>
);
