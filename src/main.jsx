import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; 

// Si más adelante usas Auth0, aquí se puede envolver con su Provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);


