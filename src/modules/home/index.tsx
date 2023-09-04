import { IonHeader, IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonButtons, IonBackButton, useIonRouter } from '@ionic/react';
import LINKS from '../../shared/constants/links';
import useTheme from '@hooks/theme';
import Button, { IButtonRef } from '@components/button';
import { useTranslation } from 'react-i18next';

import './style.scss';
import { useRef } from 'react';

const Home: React.FC = () => {
  const router = useIonRouter();
  const theme = useTheme();
  const { t } = useTranslation(['translation']);
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
        <Button onClick={()=> {
            router.push(LINKS.PROFILE);
        }}>
          navigate
        </Button>
        <Button
        className="m-12"
        onClick={()=> {
          theme.toggleTheme();
        }}>
          theme
        </Button>
        <Button  onClick={ ()=> ref?.current?.click()}>
          theme
        </Button>
        <Button ref={ref} onClick={()=> {
          console.log("hi man");
        }}>
          hi  
        </Button>
        <h2>{t('headerTitle')}</h2>
      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
