import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Profiel.css';

const Profiel: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Profiel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profiel</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Later in the vullen</p>
      </IonContent>
    </IonPage>
  );
};

export default Profiel;
