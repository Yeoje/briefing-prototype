import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './MijnMedicijnen.css';

const MijnMedicijnen: React.FC = () => {
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
          <IonTitle>Mijn Medicijnen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mijn medicijnen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Een overzicht van uw medicijnen</p>
      </IonContent>

    </IonPage>
  );
};

export default MijnMedicijnen;
