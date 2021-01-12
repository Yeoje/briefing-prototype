import React, { useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Doorverwijzing.css';
import { useHistory } from 'react-router';

const Doorverwijzing: React.FC = () => {
  const [arts, setArts] = useState<string>();
  const [selectedKlacht, setSelectedKlacht] = useState<string>('kja');
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>('sja');
  const [selectedArts, setSelectedArts] = useState<string>('aja');
  const [alert, setAlert] = useState(false);
  const [klacht, setKlacht] = useState<boolean>(false);
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
          <IonTitle><IonText color="primary">Vraag een doorverwijzing aan</IonText></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary">Doorverwijzing</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonText color="tertiary"><h3>Vul het formulier in</h3></IonText>
        <IonItem>
          <IonLabel><h6>Wat zijn uw klachten?</h6></IonLabel>
          <IonInput required onIonChange={(e) => setKlacht(true)} />
        </IonItem>

        <IonItem>
          <IonLabel><h6>Selecteer een specialist</h6></IonLabel>
          <IonSelect value={arts} placeholder="Kies" onIonChange={e => setArts(e.detail.value)}>
            <IonSelectOption >Dr. A Staart - MDL</IonSelectOption>
            <IonSelectOption >Dr. Poezenman - Tandheelkunde</IonSelectOption>
            <IonSelectOption >Dr. Raijd - Psychologie</IonSelectOption>
            <IonSelectOption >Dr. C Appel - Oncologie</IonSelectOption>
            <IonSelectOption >Dr. Herenveen - Orthopedie</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonList>
          <IonRadioGroup value={selectedKlacht} onIonChange={e => setSelectedKlacht(e.detail.value)}>
            <IonListHeader>
              <IonLabel><h6>Bent u al eerder voor deze klacht behandeld:</h6></IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Ja</IonLabel>
              <IonRadio slot="start" value="kja" />
            </IonItem>

            <IonItem>
              <IonLabel>Nee</IonLabel>
              <IonRadio slot="start" value="knee" />
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonList>
          <IonRadioGroup value={selectedSpecialist} onIonChange={e => setSelectedSpecialist(e.detail.value)}>
            <IonListHeader>
              <IonLabel><h6>Bent u al eerder bij deze specialist geweest:</h6></IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Ja</IonLabel>
              <IonRadio slot="start" value="sja" />
            </IonItem>

            <IonItem>
              <IonLabel>Nee</IonLabel>
              <IonRadio slot="start" value="snee" />
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonList>
          <IonRadioGroup value={selectedArts} onIonChange={e => setSelectedArts(e.detail.value)}>
            <IonListHeader>
              <IonLabel><h6>Wilt u vooraf contact met uw arts hierover:</h6></IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Ja</IonLabel>
              <IonRadio slot="start" value="aja" />
            </IonItem>

            <IonItem>
              <IonLabel>Nee</IonLabel>
              <IonRadio slot="start" value="anee" />
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonButton className="ion-margin-top" color="primary" expand="block" disabled={!arts && !klacht} onClick={() => setAlert(true)} style={{ padding: 5 }}>
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
          message={`Uw aanvraag voor een doorverwijzing naar specialist: ${arts} is verstuurd.`}
          buttons={['OK']}
        />

      </IonContent>

    </IonPage>
  );
};

export default Doorverwijzing;
