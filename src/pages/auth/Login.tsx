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
            }
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <form className="ion-padding" onSubmit={() => doLogin()}>
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput value={user?.username} onIonChange={(e) => setUser({ ...user, username: e.detail.value! })} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" value={user?.password} onIonChange={(e) => setUser({ ...user, password: (e.detail.value!) })} />
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>Remember me</IonLabel>
                        <IonCheckbox defaultChecked={true} slot="start" />
                    </IonItem>
                    <IonButton className="ion-margin-top" color="primary" type="submit" expand="block" disabled={!user?.username || !user?.password}>
                        Login
                    </IonButton>
                    <IonButton className="ion-margin-top" color="secondary" expand="block" href="/registratie">Registreer</IonButton>
                </form>
                
            </IonContent>
        </IonPage>
    );
};

export default Login;