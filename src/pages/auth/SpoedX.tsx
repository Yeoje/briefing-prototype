import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SpoedX: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonBackButton defaultHref="login" />
          </IonButtons>
          <IonTitle>Spoed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Spoed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Spoed</p>
      </IonContent>
    </IonPage>
  );
};

export default SpoedX;
