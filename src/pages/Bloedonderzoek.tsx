import React, { useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonListHeader, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Bloedonderzoek.css';
import { useHistory } from 'react-router';

const Bloedonderzoek: React.FC = () => {
  
const [onderzoek, setOnderzoek] = useState<boolean>(false);
const [doelOnderzoek, setDoelOnderzoek] = useState<string>();
const [selectedOnderzocht, setSelectedOnderzocht] = useState<string>('oja');
const [selectedHuisarts, setSelectedHuisarts] = useState<string>('hja');
const [selectedVooraf, setSelectedVooraf] = useState<string>('vja');
const [alert, setAlert] = useState(false);
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
          <IonTitle>Vraag bloedonderzoek aan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary">Bloedonderzoek</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText color="tertiary"><h3>Vul het formulier in</h3></IonText>
        <IonItem>
          <IonLabel><h6>Doel onderzoek</h6></IonLabel>
          <IonInput required onIonChange={(e) => setOnderzoek(true)} />
        </IonItem>

      <IonItem>
        <IonLabel><h6>Onderzoeken op:</h6></IonLabel>
        <IonSelect value={doelOnderzoek} placeholder="Kies" onIonChange={e => setDoelOnderzoek(e.detail.value)}>
          <IonSelectOption >Algemeen</IonSelectOption>
          <IonSelectOption >Allergie</IonSelectOption>
          <IonSelectOption >Glucose</IonSelectOption>
          <IonSelectOption >BSE - Bezinking</IonSelectOption>
          <IonSelectOption >CRP - Ontsteking</IonSelectOption>
          <IonSelectOption >T4 - Schildklier</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonRadioGroup value={selectedOnderzocht} onIonChange={e => setSelectedOnderzocht(e.detail.value)}>
        <IonListHeader>
          <IonLabel><h6>Bent u hier al eerder op onderzocht:</h6></IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Ja</IonLabel>
          <IonRadio slot="start" value="oja" />
        </IonItem>

        <IonItem>
          <IonLabel>Nee</IonLabel>
          <IonRadio slot="start" value="onee" />
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value={selectedHuisarts} onIonChange={e => setSelectedHuisarts(e.detail.value)}>
        <IonListHeader>
          <IonLabel><h6>Bent u hier al eerder voor bij de huisarts geweest:</h6></IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Ja</IonLabel>
          <IonRadio slot="start" value="hja" />
        </IonItem>

        <IonItem>
          <IonLabel>Nee</IonLabel>
          <IonRadio slot="start" value="hnee" />
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value={selectedVooraf} onIonChange={e => setSelectedVooraf(e.detail.value)}>
        <IonListHeader>
          <IonLabel><h6>Wilt u vooraf contact met de huisarts:</h6></IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Ja</IonLabel>
          <IonRadio slot="start" value="vja" />
        </IonItem>

        <IonItem>
          <IonLabel>Nee</IonLabel>
          <IonRadio slot="start" value="vnee" />
        </IonItem>
      </IonRadioGroup>

      <IonButton className="ion-margin-top" color="primary" expand="block" disabled={!onderzoek} onClick={() => setAlert(true)} style={{ padding: 5 }}>
          Verstuur
      </IonButton>
        <IonAlert
          isOpen={alert}
          onDidDismiss={() => {
            setAlert(false)
            history.replace("/home")
            }
          }
          cssClass='my-custom-class'
          header={'Verstuurd'}
          subHeader={''}
          message={`Uw aanvraag voor een bloedonderzoek betreft: ${doelOnderzoek} is verstuurd.`}
          buttons={['OK']}
        />

      </IonContent>
    </IonPage>
  );
};

export default Bloedonderzoek;
