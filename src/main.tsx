import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


import './infrastructure/i18n';
const container = document.getElementById('root');
const root = createRoot(container!);

import initMsw from '@infrastructure/mock-services-msw';

initMsw();

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

defineCustomElements(window);