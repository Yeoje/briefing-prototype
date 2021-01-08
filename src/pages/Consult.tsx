import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonText, IonTitle, IonToolbar } from '@ionic/react';
import 'react-calendar/dist/Calendar.css';
import './Consult.css';
import Calendar from 'react-calendar';
import { tijdenkort } from '../mock/tabeltijdenkort';
import { tijdenlang } from '../mock/tabeltijdenlang';

const Consult: React.FC = () => {
  const [value, setValue] = useState<Date | Date[]>(new Date());
  const [selected, setSelected] = useState<string>('biff');

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
          <IonTitle>Vraag consult aan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary">Vraag consult aan</IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <Calendar
            value={value}
            onChange={setValue}
          />
        </div>

        <p>Maak een afspraak voor: {value.toString()}</p>
        <IonText color="tertiary"><h3>Selecteer een tijdvak</h3></IonText>

        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
          <IonItem>
            <IonLabel>Korte afspraak</IonLabel>
            <IonRadio slot="start" value="biff" />
          </IonItem>

          <IonItem>
            <IonLabel>Lange afspraak</IonLabel>
            <IonRadio slot="start" value="griff" />
          </IonItem>
        </IonRadioGroup>

        {
          selected === "biff" && (
            <div className="tables">
              <table className="tabelafspraak">
                <thead>
                  <tr>
                    <th colSpan={4}>Korte afspraak</th>
                  </tr>
                </thead>
                <tbody>
                  {tijdenkort.map(obj => {
                    return (
                      <tr>
                        <td>{obj.tijdkort1}</td>
                        <td>{obj.tijdkort2}</td>
                        <td>{obj.tijdkort3}</td>
                        <td>{obj.tijdkort4}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        {selected !== "biff" && (
          <div className="tables">
            <table className="tabelafspraak">
              <thead>
                <tr>
                  <th colSpan={4}>Lange afspraak</th>
                </tr>
              </thead>
              <tbody>
                {tijdenlang.map(obj2 => {
                  return (
                    <tr>
                      <td colSpan={2}>{obj2.tijdlang1}</td>
                      <td colSpan={2}>{obj2.tijdlang2}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </IonContent>

    </IonPage>
  );
};

export default Consult;
