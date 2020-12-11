import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Doorverwijzing.css';

const Doorverwijzing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
          <IonTitle>Vraag een doorverwijzing aan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Doorverwijzing</IonTitle>
          </IonToolbar>
        </IonHeader>
          <p>Vraag een doorverwijzing aan</p>
      </IonContent>
      
    </IonPage>
  );
};

export default Doorverwijzing;
