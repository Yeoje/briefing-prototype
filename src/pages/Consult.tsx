import React, { useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonText, IonTitle, IonToolbar } from '@ionic/react';
import 'react-calendar/dist/Calendar.css';
import './Consult.css';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { tijdenkort } from '../mock/tabeltijdenkort';
import { tijdenlang } from '../mock/tabeltijdenlang';
import { useHistory } from 'react-router';

const Consult: React.FC = () => {
  const [value, setValue] = useState<Date | Date[]>(new Date());
  const [selected, setSelected] = useState<string>('biff');
  const [klacht, setKlacht] = useState<boolean>(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [tijd, setTijd] = useState<string | undefined>();
  const history = useHistory();

  const tileDisabled = ({ date }: CalendarTileProperties & { activeStartDate: Date }) => {
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      return false;
    }

    return true;
  }


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
            tileDisabled={tileDisabled}
            minDate={new Date()}
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
                        <td className="tijdvol">{obj.tijdkort1}</td>
                        <td onClick={(e) => setTijd(obj.tijdkort2)}>{obj.tijdkort2}</td>
                        <td onClick={(e) => setTijd(obj.tijdkort3)}>{obj.tijdkort3}</td>
                        <td onClick={(e) => setTijd(obj.tijdkort4)}>{obj.tijdkort4}</td>
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
                      <td colSpan={2} className="tijdvol">{obj2.tijdlang1}</td>
                      <td colSpan={2} onClick={(e) => setTijd(obj2.tijdlang2)}>{obj2.tijdlang2}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        )}
        <IonText hidden={!tijd} color="dark"><p>U heeft geselecteerd als tijd: {tijd}</p></IonText>

        <IonText color="tertiary"><h3>Voer uw klachten in:</h3></IonText>
        <IonItem disabled={!tijd} style={{ padding: 5 }}>
          <IonInput required onIonChange={() => setKlacht(true)} />
        </IonItem>

        <IonButton className="ion-margin-top" color="primary" expand="block" disabled={!klacht} onClick={() => setShowAlert1(true)} style={{ padding: 5 }}>
          Maak afspraak
        </IonButton>
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => {
            setShowAlert1(false)
            history.replace("/home")
          }
          }
          cssClass='my-custom-class'
          header={'Verstuurd'}
          subHeader={''}
          message={`Uw afspraak voor ${tijd} is gemaakt`}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Consult;
