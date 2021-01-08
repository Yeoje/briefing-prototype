import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><IonText color="primary"><h1>Nieuws van uw Huisarts</h1></IonText></IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: '15px' }}>

          <IonText color="tertiary"><h2>Vervangers</h2></IonText>
          <h5>De volgende artsen worden tijdelijk vervangen:</h5>
          <p>Dr. A Wimmel - vervangen door - Dr. C Stompe</p>
          <p>Dr. R van Hooijdonck - vervangen door - Dr. A de Leven</p>

          <IonText color="tertiary"><h2>Praktijk Nieuws</h2></IonText>
          <h5>Alleen op afspraak</h5>
          <p>Door de corona maatregelen zijn wij tijdelijk alleen op afspraak fysiek te bereiken.
              Dit geldt ook voor het ophalen van recepten en doorverwijzingen</p>

          <h5>Richtlijnen bezoek</h5>
          <p>U wordt tijdens uw bezoek verzocht de volgende maatregelen te nemen:</p>

          <ul>- doe een mondkapje op</ul>
          <ul>- houdt 1.5m afstand</ul>
          <ul>- ontsmet uw handen bij aankomst en vertrek</ul>
          <ul>- blijf niet 'rondhangen'</ul>


          <IonText color="tertiary"><h2>Weekdiensten</h2></IonText>
          <table>
            <thead>
              <tr>
                <th>Dokter</th>
                <th>Dagen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C. Stompe</td>
                <td>Ma t/m Vr</td>
              </tr>
              <tr>
                <td>A. de Leven</td>
                <td>Ma t/m Vr</td>
              </tr>
              <tr>
                <td>J. de Vries</td>
                <td>Ma t/m Di - Do t/m Vr</td>
              </tr>
            </tbody>
          </table>
          <IonText color="tertiary"><h2>Griepprik en Gezondheidstips</h2></IonText>
          <h5>Griepprik</h5>
          <p>Vanaf oktober is er weer een griepprik mogelijkheid.
             De griepprik wordt gratis aangeboden aan kinderen en volwassenen die extra risico lopen om ernstig ziek te worden door griep.</p>

          <h5>Vermijd droogte</h5>
          <p>Blijf drinken en vermijd droge plekken. Deze herfst is het klimaat droger dan normaal wat huid irritaties kan
          opleveren. Smeer hiervoor bijvoorbeeld wat zalf op de geirriteerde plek.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
