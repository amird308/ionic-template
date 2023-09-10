import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Router from '@infrastructure/router';
import { Provider } from "react-redux";


// TODO pack all css files together 
/* Core CSS required for Ionic components to work properly */
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

/* Theme variables */
import '@infrastructure/themes.css';
import { Suspense } from 'react';
import Initial from '@infrastructure/components/initial';

import "./App.css";
import { configureAppStore } from '@infrastructure/store';

setupIonicReact();

const App: React.FC = () =>{
  return (
    <Suspense fallback="...is loading">
    <Provider store={configureAppStore}> 
      <IonApp>
        <IonReactRouter>
          <Initial />
          <IonRouterOutlet>
            <Router />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>
    </Suspense>
  )
};

export default App;
