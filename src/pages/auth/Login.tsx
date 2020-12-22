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
    IonCheckbox,
    IonText,
    IonFooter,
} from "@ionic/react";
import React from "react";
// Auth
import { RouteComponentProps, useHistory } from "react-router";
import { AuthContext, User } from "./authContext";

const Login: React.FC<RouteComponentProps> = () => {
    const { login } = React.useContext(AuthContext);
    const history = useHistory();

    const [user, setUser] = React.useState<Partial<User>>();

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
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
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
            <IonButton className="ion-margin-top" style={{padding: '5px'}} color="danger" expand="block" href="/spoedx">SPOED</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default Login;