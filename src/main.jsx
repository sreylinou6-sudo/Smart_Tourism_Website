import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import logoImg from './assets/logoApp.png'
import App from './App.jsx'
import './index.css';

// Framework 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Icon setup
const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
link.rel = 'icon';
link.href = logoImg;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
