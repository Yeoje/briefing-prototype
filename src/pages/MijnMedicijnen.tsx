import React from 'react';
import { IonBackButton,  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './MijnMedicijnen.css';
import { Medicijn } from '../components/Medicijn';

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
          <IonTitle><IonText color="primary">Mijn Medicijnen</IonText></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary">Mijn medicijnen</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        <Medicijn naam="Diazepam - 5mg" />
        <Medicijn naam="Omeprazol - 10mg" />
      </IonContent>
    </IonPage>
  );
};

export default MijnMedicijnen;
