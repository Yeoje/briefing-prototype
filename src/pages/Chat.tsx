import React, { useState } from 'react';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Chat.css';

interface Bericht {
  mine: boolean,
  text: string
}

const initialMessage: Bericht[] = [
  {
    mine: false,
    text: "Goedemorgen, waarmee kan ik u helpen?"
  }
];

const Chat: React.FC = () => {
  const [berichten, setBerichten] = useState<Bericht[]>(initialMessage)
  const [text, setText] = useState<string>("")

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
          <IonTitle><IonText color="primary">Chat</IonText></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary">Chat</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="chat">
        <ul>
          {berichten?.map(bericht => (
            <li className={bericht.mine ? "patient" : "dokter"}>
                <IonAvatar slot="start" className="dokter">
                  <img src="https://www.flaticon.com/svg/vstatic/svg/3011/3011270.svg?token=exp=1611334590~hmac=cc1e8edbad5578dedb44fcb6d4e58392" alt="" />
                </IonAvatar>
              <p>{bericht.text}</p>
            </li>
          ))}
        </ul>
          <form onSubmit={e => {
            e.preventDefault();
            const bericht: Bericht = {
              mine: true,
              text
            };
            setBerichten([...berichten, bericht])
            setText("");
          }}>
            <IonList>
            <IonItem>
            <input type="text" required value={text} onChange={e => {
              setText(e.target.value);
            }} />
            <IonButton type="submit" item-right>Verzenden</IonButton>
            </IonItem>
            </IonList>
          </form>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Chat;
