import { IonHeader, IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, useIonRouter } from '@ionic/react';
import './style.css';
import LINKS from '../../shared/constants/links';

const Home: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
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
      </IonContent>
      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Home;
