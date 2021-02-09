import React, { useState } from 'react';
import {
  IonAlert,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { call, helpCircleOutline, homeOutline, logOutOutline, personOutline } from 'ionicons/icons';
import Home from '../pages/Home';
import Spoed from '../pages/Spoed';
import { Redirect, Route, useHistory } from 'react-router';
import Chat from '../pages/Chat';
import Consult from '../pages/Consult';
import Doorverwijzing from '../pages/Doorverwijzing';
import Bloedonderzoek from '../pages/Bloedonderzoek';
import { AuthContext } from '../pages/auth/authContext'
import Help from '../pages/Help';
import Profiel from '../pages/Profiel';
import EPD from '../pages/EPD';

const MainTabs: React.FC = () => {
  const { logout } = React.useContext(AuthContext);
  const [showAlertSpoed, setShowAlertSpoed] = useState(false);
  const history = useHistory();
  const [alert112, setAlert112] = useState(false);
  return (

    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} />
        <Route path="/profiel" component={Profiel} />
        <Route path="/spoed" component={Spoed} />
        <Route path="/help" component={Help} />
        <Route path="/chat" component={Chat} />
        <Route path="/consult" component={Consult} />
        <Route path="/doorverwijzing" component={Doorverwijzing} />
        <Route path="/bloedonderzoek" component={Bloedonderzoek} />
        <Route path="/epd" component={EPD} />
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profiel" href="/profiel">
          <IonIcon icon={personOutline} />
          <IonLabel>Profiel</IonLabel>
        </IonTabButton>
        <IonTabButton tab="spoed" href="/home">
          <IonIcon icon={call} color="danger" onClick={() => setShowAlertSpoed(true)} />
          <span onClick={() => setShowAlertSpoed(true)}>
            <IonLabel>Spoed</IonLabel>
          </span>
          <IonAlert
            isOpen={showAlertSpoed}
            onDidDismiss={() => setShowAlertSpoed(false)}
            cssClass='my-custom-class'
            header={'LET OP!!!'}
            message={'U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie. Is uw situatie LEVENSBEDREIGEND? Klik dan BEL NU 112. Is uw situatie niet levensbedreigend maar wel spoedeisend klik dan SPOED GEEN 112.'}
            buttons={[
              {
                text: 'SPOED GEEN 112',
                role: 'cancel',
                cssClass: 'secondary',
                handler: blah => {
                  console.log('Hallo');
                  history.replace("/spoed")
                }
              },
              {
                text: 'BEL NU 112',
                cssClass: 'danger',
                handler: () => {
                  setAlert112(true);
                }
              }
            ]}
          />
          <IonAlert
            isOpen={alert112}
            onDidDismiss={() => {
              setAlert112(false)
              history.replace("/home")
            }
            }
            cssClass='my-custom-class'
            header={'112'}
            subHeader={''}
            message={'112 word gebeld..'}
            buttons={['Ophangen']}
          />
        </IonTabButton>
        <IonTabButton tab="help" href="/help">
          <IonIcon icon={helpCircleOutline} />
          <IonLabel>Help</IonLabel>
        </IonTabButton>
        <IonTabButton tab="login" href="/login">
          <IonIcon onClick={logout} icon={logOutOutline} />
          <span onClick={logout}>
            <IonLabel>Logout</IonLabel>
          </span>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>

  )
}

export default MainTabs;