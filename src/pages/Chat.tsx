import React, { useState } from 'react';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Chat.css';
import boy from '../assets/boy.png';
import doctor from '../assets/doctor.png';

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
          <IonTitle><IonText color="primary">Chat met uw arts</IonText></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>
              <IonText color="primary">Dr. A. Wimmel</IonText>
              </IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="chat">
          <ul>
            {berichten?.map(bericht => (
              <li className={bericht.mine ? "patient" : "dokter"}>
                {bericht.mine ? undefined : <IonAvatar>
                <img src={doctor} alt="" />
              </IonAvatar>}
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
              <div className="patient">
                <IonAvatar style={{ paddingRight: 3 }}>
                  <img src={boy} alt="" />
                </IonAvatar>
                <input type="text" required value={text} onChange={e => {
                  setText(e.target.value);
                }} />
                <IonButton type="submit" item-right>Verzend</IonButton>
              </div>
            </IonList>
          </form>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Chat;
