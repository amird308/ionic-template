import { IonHeader, IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonButtons, IonBackButton, IonImg } from '@ionic/react';
import { useGetProfileQuery } from '@services/profile';
import Card from '@components/card';

import './style.scss';
import Button from '@components/button';

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
      <IonContent>
      <Card className='p-4'>
        <div className='flex items-center gap-5'>
          <IonImg
            className='imageProfile'
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          />
          <div className='flex-1 flex flex-col'>
            <div>
              profile 
            </div>
            <div>
              profile 
            </div>
          </div>
        </div>
        <Button color='primary' fill='outline' className='mt-10 w-full'>
          edit profile
        </Button>
      </Card>
      <Card className='p-4 mt-4 flex flex-col'>
        <div className='text-gray-50'>
            description 
        </div>
        <div>
            my name is amir, please give me feedback. 
        </div>
      </Card>
      </IonContent>
      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Profile;
