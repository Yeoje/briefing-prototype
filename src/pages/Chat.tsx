import React, { useState } from 'react';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Chat.css';
import boy from '../assets/boy.png';
import doctor from '../assets/doctor.png';
import { cameraOutline } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

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

async function takePicture(this: any) {
  const image = await Camera.getPhoto({
  quality: 90,
  allowEditing: false,
  resultType: CameraResultType.Uri
});
var imageUrl = image.webPath;
// Can be set to the src of an image now
this.setState({
  photo: imageUrl
  })
}


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
                <IonIcon icon={cameraOutline} onClick={takePicture} item-left style={{transform: "scale(1.5) translate(0px, 12px)"}}></IonIcon>
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
