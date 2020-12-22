import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// Auth
import { useHistory } from "react-router";
import { User } from "./authContext";
const Registratie: React.FC = () => {

    const [user, setUser] = React.useState<Partial<User>>();
    const history = useHistory();

    const doRegister = async () => {
        const users: User[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
        if (user?.username && user.password) {
            users.push({
                username: user.username,
                password: user.password
            })
            localStorage.setItem("users", JSON.stringify(users));
            history.replace("/login");
        }
    }

return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="login" />
                </IonButtons>
                <IonTitle>Registreer</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Registreer</IonTitle>
                </IonToolbar>
            </IonHeader>
            <form className="ion-padding" onSubmit={() => doRegister()}>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput required min="4" value={user?.username} onIonChange={(e) => setUser({ ...user, username: e.detail.value! })} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput required min="6" type="password" value={user?.password} onIonChange={(e) => setUser({ ...user, password: (e.detail.value!) })} />
                </IonItem>
                <IonButton className="ion-margin-top" type="submit" expand="block" disabled={!user?.username || !user?.password}>
                    Registreer
                    </IonButton>
            </form>
        </IonContent>

    </IonPage>
);
};

export default Registratie;
