import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonText,
    IonFooter,
    IonAlert,
} from "@ionic/react";
import React, { useState } from "react";
// Auth
import { RouteComponentProps, useHistory } from "react-router";
import { AuthContext, User } from "./authContext";
import './Login.css';
import logo from "../../assets/logo.png"

const Login: React.FC<RouteComponentProps> = () => {
    const { login } = React.useContext(AuthContext);
    const history = useHistory();
    const [user, setUser] = React.useState<Partial<User>>();
    const [showAlertSpoed, setShowAlertSpoed] = useState(false);
    const [alert112, setAlert112] = useState(false);

    const doLogin = async () => {
        if (user?.username && user.password) {
            let result = await login({
                username: user.username,
                password: user.password
            });
            if (result) {
                history.replace("/home")
            } else {
                setLoginError(true);
            }
        }
    }

    const [loginError, setLoginError] = React.useState<boolean>(false);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><IonText color="primary">Briefing prototype</IonText></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <img src={logo} className="logo" alt="Logo" />
                <IonText color="primary" ><h1 className="login-title">Inloggen</h1></IonText>
                <form className="ion-padding">
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
                    <IonButton className="ion-margin-top" color="secondary" expand="block" href="/registratie">Registreer</IonButton>
                </form>
            </IonContent>
            <IonFooter>
                <IonButton className="ion-margin-top" style={{ padding: '5px' }} color="danger" expand="block" onClick={() => setShowAlertSpoed(true)}>SPOED</IonButton>
                <IonAlert
                    isOpen={showAlertSpoed}
                    onDidDismiss={() => setShowAlertSpoed(false)}
                    cssClass='my-custom-class'
                    header={'LET OP!!!'}
                    message={'U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie. Is uw situatie LEVENSBEDREIGEND? Klik dan BEL NU 112. Is uw situatie niet levensbedreigend maar wel spoedeisend klik dan SPOED GEEN 112.'}
                    buttons={[
                        {
                            text: 'SPOED GEEN 112',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: blah => {
                                console.log('Hallo');
                                history.replace("/spoed")
                            }
                        },
                        {
                            text: 'BEL NU 112',
                            cssClass: 'danger',
                            handler: () => {
                                setAlert112(true);
                            }
                        }
                    ]}
                />
                <IonAlert
                    isOpen={alert112}
                    onDidDismiss={() => {
                        setAlert112(false)
                        history.replace("/login")
                    }
                    }
                    cssClass='my-custom-class'
                    header={'112'}
                    subHeader={''}
                    message={'112 word gebeld..'}
                    buttons={['Ophangen']}
                />
            </IonFooter>
        </IonPage>
    );
};

export default Login;