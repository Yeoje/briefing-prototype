import React, { useContext } from 'react';
import {
  IonAlert,
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput,
  IonItem, IonLabel,
  IonMenuButton,
  IonPage, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Profiel.css';
import { Userextra } from "./auth/authContext";
import { AuthContext } from "./auth/authContext";
import { useHistory } from "react-router";

const Profiel: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const [user, setUser] = React.useState<Partial<Userextra>>();
  const [alert, setAlert] = React.useState<boolean>(false);
  const history = useHistory();


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
            <IonTitle size="large"><IonText color="primary">Profiel</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Verander naam</IonLabel>
            <IonInput required min="4" value={user?.naam} onIonChange={(e) => setUser({ ...user, naam: e.detail.value! })} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Wijzig uw email</IonLabel>
            <IonInput required min="4" type="email" value={user?.email} onIonChange={(e) => setUser({ ...user, email: e.detail.value! })} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput required min="4" value={authValues.user?.username} disabled />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Wijzig uw wachtwoord</IonLabel>
            <IonInput required min="6" type="password" value={user?.password} onIonChange={(e) => setUser({ ...user, password: e.detail.value! })} />
          </IonItem>
          <IonButton className="ion-margin-top" expand="block" onClick={() => setAlert(true)}>
            Wijzigen
                </IonButton>
          <IonAlert
            isOpen={alert}
            onDidDismiss={() => {
              setAlert(false)
              history.replace("/home")
            }
            }
            cssClass='my-custom-class'
            header={'Profiel Wijzigen'}
            subHeader={''}
            message={'Uw profiel is gewijzigd'}
            buttons={['Ok']}
          />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Profiel;
