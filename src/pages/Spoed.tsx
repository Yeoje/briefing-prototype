import React, { useContext, useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Spoed.css';
import { navigateOutline } from 'ionicons/icons';
import kaartje from '../assets/img/kaart.png';
import { AuthContext } from "./auth/authContext";

const Spoed: React.FC = () => {
  const {authValues} = useContext(AuthContext);
  const [letsel, setLetsel] = useState<string>();
  const [drugs, setDrugs] = useState<string>('ja');
  const [slachtofferOk, setSlachtofferOk] = useState<boolean>(false);
  const [slachtofferNietOk, setSlachtofferNietOk] = useState<boolean>(false);
  const [kaart, setKaart] = useState<boolean>(false);
  const [adres, setAdres] = useState<Partial<Adres>>();
  const [klaar, setKlaar] = useState<boolean>(false);


  interface Adres {
    postcode: string,
    woonplaats: string,
    straat: string,
    huisnummer: number
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonBackButton defaultHref={authValues.authenticated ? "home" : "login"} />
          </IonButtons>
          <IonTitle>Spoed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="danger">Spoed</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        {!klaar && (
          <div className="main">
            <div className="sub-content" style={{ padding: '20px' }}>
              <IonLabel><IonText color="tertiary" style={{ fontWeight: 700, fontSize: 22 }}>Vermoedelijk letsel:</IonText></IonLabel>
              <IonSelect value={letsel} placeholder="Maak een keuze..." onIonChange={e => setLetsel(e.detail.value)}>
                <IonSelectOption >Botbreuk of ernstige verstuiking/kneuzing</IonSelectOption>
                <IonSelectOption >Bloeding</IonSelectOption>
                <IonSelectOption >Ernstige val</IonSelectOption>
                <IonSelectOption >Hoofdletsel</IonSelectOption>
                <IonSelectOption >Verbranding</IonSelectOption>
                <IonSelectOption >Overdosis of vergiftiging</IonSelectOption>
                <IonSelectOption >Bewusteloosheid</IonSelectOption>
                <IonSelectOption >Hersenletsel</IonSelectOption>
                <IonSelectOption >Onbekend of niet te achterhalen</IonSelectOption>
              </IonSelect>
            </div>
            <IonList>
              <IonRadioGroup value={drugs} onIonChange={e => setDrugs(e.detail.value)}>
                <IonListHeader>
                  <IonLabel><IonText color="tertiary">Slachtoffer heeft alcohol en/of drugs gebruikt:</IonText></IonLabel>
                </IonListHeader>

                <IonItem>
                  <IonLabel>Ja</IonLabel>
                  <IonRadio slot="start" value="ja" />
                </IonItem>

                <IonItem>
                  <IonLabel>Nee</IonLabel>
                  <IonRadio slot="start" value="nee" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
            <div className="sub-content" style={{ padding: '20px' }}>
              <IonText color="tertiary" style={{ fontWeight: 700, fontSize: 22 }}>Het slachtoffer is mobiel en/of kan vervoer regelen:</IonText>
              <IonButton className="ion-margin-top" color="primary" disabled={!letsel} expand="block" onClick={() => {
                setSlachtofferOk(true)
                setSlachtofferNietOk(false)
                setKlaar(true)
              }
              } style={{ padding: 5 }}>
                Ja
              </IonButton>
              <IonButton className="ion-margin-top" color="primary" disabled={!letsel} expand="block" onClick={() => {
                setSlachtofferNietOk(true)
                setSlachtofferOk(false)
              }
              } style={{ padding: 5 }}>
                Nee
              </IonButton>
              {slachtofferNietOk && !slachtofferOk && (
                <div className="adres-form">
                  <IonText color="tertiary">Vul uw adres in:</IonText>
                  <IonItem>
                    <IonLabel position="floating">Postcode</IonLabel>
                    <IonInput required value={adres?.postcode} onIonChange={(e) => setAdres({ ...adres, postcode: e.detail.value! })} />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Huisnummer</IonLabel>
                    <IonInput type="number" required value={adres?.huisnummer} onIonChange={(e) => setAdres({ ...adres, huisnummer: Number(e.detail.value) })} />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Woonplaats</IonLabel>
                    <IonInput required value={adres?.woonplaats} onIonChange={(e) => setAdres({ ...adres, woonplaats: e.detail.value! })} />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Straat</IonLabel>
                    <IonInput required value={adres?.straat} onIonChange={(e) => setAdres({ ...adres, straat: e.detail.value! })} />
                  </IonItem>
                  <IonButton className="ion-margin-top" color="primary" disabled={!adres?.postcode && !adres?.huisnummer} onClick={() => {
                    setKaart(true)
                    setKlaar(true)
                  }
                  }>Verzend adres</IonButton>
                  <IonButton className="ion-margin-top" color="danger" onClick={() => {
                    setKaart(true)
                    setKlaar(true)
                  }
                  }>
                    Huidige locatie
              <IonIcon icon={navigateOutline}></IonIcon>
                  </IonButton>
                </div>
              )}
            </div>
          </div>
        )}
        {kaart && (
          <div style={{ padding: '20px' }}>
            <IonText color="danger" style={{ fontWeight: 700, fontSize: 22 }}>Hulp is onderweg, blijf op uw locatie!</IonText>
            <img src={kaartje} alt="kaart" />
          </div>
        )}
        {slachtofferOk && !slachtofferNietOk && (
          <div style={{ padding: '20px' }}>
            <IonText color="danger"><h1>De bunkeldreef 26, 8231BE Almere</h1>Ga z.s.m. naar deze medische post. Men is op de hoogte van uw komst.</IonText>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Spoed;
