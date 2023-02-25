import React from 'react';
import ReactDOM from 'react-dom/client';

import { CountriesProvider } from './contexts/CountriesContext';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
