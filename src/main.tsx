import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


import './infrastructure/i18n';
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

defineCustomElements(window);