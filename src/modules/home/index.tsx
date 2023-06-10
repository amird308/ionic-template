import { IonHeader, IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, useIonRouter } from '@ionic/react';
import LINKS from '../../shared/constants/links';
import useTheme from '@hooks/useTheme';
import Button, { IButtonRef } from '@components/button';

import './style.scss';
import { useRef } from 'react';

const Home: React.FC = () => {
  const router = useIonRouter();
  const theme = useTheme();

  const ref = useRef<IButtonRef | null>(null);
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonButton onClick={()=> {
            router.push(LINKS.PROFILE);
        }}>
          navigate
        </IonButton>
        <IonButton onClick={()=> {
          theme.toggleTheme();
        }}>
          theme
        </IonButton>
        <IonButton  onClick={ ()=> ref?.current?.click()}>
          theme
        </IonButton>
        <Button ref={ref} onClick={()=> {
          console.log("hi man");
        }}>
          hi  
        </Button>
      </IonContent>
      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Home;
