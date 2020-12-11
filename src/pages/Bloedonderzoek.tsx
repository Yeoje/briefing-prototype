import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Bloedonderzoek.css';

const Bloedonderzoek: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
          <IonTitle>Vraag bloedonderzoek aan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bloedonderzoek</IonTitle>
          </IonToolbar>
        </IonHeader>
          <p>Vraag een bloed onderzoek aan</p>
      </IonContent>
      
    </IonPage>
  );
};

export default Bloedonderzoek;
