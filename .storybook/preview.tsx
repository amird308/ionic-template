import type { Preview } from "@storybook/react";

import { setupIonicReact, IonApp, IonContent, IonPage } from '@ionic/react';

setupIonicReact();

import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import "../src/themes.css";
import "./style.css";
import React from "react";

const preview: Preview = {
  parameters: {
    //actions: { argTypesRegex: "^on[A-Z].*" },
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
};

export default preview;
