import { IonHeader, IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';
import './style.scss';
import { useGetProfileQuery } from '@services/profile';

const Profile: React.FC = () => {
  const { data } = useGetProfileQuery(undefined, {});
  
  return (
    <IonPage id="profile-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>

      </IonContent>
      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Profile;
