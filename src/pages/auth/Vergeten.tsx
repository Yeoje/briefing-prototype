import React, { useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export const Alert: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="end">
                        <IonBackButton defaultHref="login" />
                    </IonButtons>
                    <IonTitle>Wachtwoord Vergeten</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <form className="ion-padding" onSubmit={() => setShowAlert(true)}>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput required min="4" type="email" />
                </IonItem>
                <IonButton expand="block" type="submit" style={{ padding: '5px' }}>Verstuur wachtwoord</IonButton>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    cssClass='my-custom-class'
                    header={'Wachtwoord Verstuurd'}
                    subHeader={''}
                    message={'Een e-mail met uw wachtwoord is verstuurd naar uw e-mail.'}
                    buttons={['OK']}
                />
                </form>
            </IonContent>
        </IonPage>
    );
}

export default Alert;