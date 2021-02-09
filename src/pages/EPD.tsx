import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './EPD.css';
import { Medicijn } from '../components/Medicijn';
import { AuthContext, User } from "./auth/authContext";

const EPD: React.FC = () => {
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(true);
  const { login } = React.useContext(AuthContext);
  const [user, setUser] = React.useState<Partial<User>>();
  const [loginError, setLoginError] = React.useState<boolean>(false);

  const doLogin = async () => {
    if (user?.username && user.password) {
      let result = await login({
        username: user.username,
        password: user.password
      });
      if (result) {
        setNotLoggedIn(false)
      } else {
        setNotLoggedIn(true);
        setLoginError(true);
      }
    }
  }


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
          <IonTitle><IonText color="primary">EPD</IonText></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary">Mijn Patienten Dossier</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {!notLoggedIn
          ? (
            <div>
              <Medicijn naam="Diazepam - 5mg" />
              <Medicijn naam="Omeprazol - 10mg" />
            </div>)
          :
          ( <form className="ion-padding">
          <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput required value={user?.username} onIonChange={(e) => setUser({ ...user, username: e.detail.value! })} />
          </IonItem>
          <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput required type="password" value={user?.password} onIonChange={(e) => setUser({ ...user, password: (e.detail.value!) })} />
          </IonItem>
          <IonItem lines="none">
              {loginError && (
                  <IonText color="danger">
                      <p>Gebruikersnaam en/of wachtwoord is verkeerd</p>
                      <IonButton className="ion-margin-top" color="secondary" expand="block" href="/vergeten">wachtwoord vergeten?</IonButton>
                  </IonText>
              )}
          </IonItem>
          <IonButton className="ion-margin-top" color="primary" expand="block" disabled={!user?.username || !user?.password} onClick={() => doLogin()}>
              Login
          </IonButton>
          </form>)}
      </IonContent>
    </IonPage>
  );
};

export default EPD;
