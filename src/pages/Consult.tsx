import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Consult.css';

const Consult: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
          <IonTitle>Vraag consult aan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vraag consult aan</IonTitle>
          </IonToolbar>
        </IonHeader>
          <p>Vraag een consult aan met uw arts</p>
      </IonContent>
      
    </IonPage>
  );
};

export default Consult;
