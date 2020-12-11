import React from 'react';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
  } from '@ionic/react';
import { call, home, settings } from 'ionicons/icons';
import Home from '../pages/Home';
import Spoed from '../pages/Spoed';
import Instellingen from '../pages/Instellingen';
import { Redirect, Route } from 'react-router';
import Chat from '../pages/Chat';
import Consult from '../pages/Consult';
import Doorverwijzing from '../pages/Doorverwijzing';
import Bloedonderzoek from '../pages/Bloedonderzoek';
import MijnMedicijnen from '../pages/MijnMedicijnen';

const MainTabs: React.FC = () => {
    return(
    <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/spoed" component={Spoed} exact={true} />
          <Route path="/instellingen" component={Instellingen} />
          <Route path="/chat" component={Chat} />
          <Route path="/consult" component={Consult} />
          <Route path="/doorverwijzing" component={Doorverwijzing} />
          <Route path="/bloedonderzoek" component={Bloedonderzoek} />
          <Route path="/mijnmedicijnen" component={MijnMedicijnen} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="spoed" href="/spoed">
            <IonIcon icon={call} color="danger" />
            <IonLabel>Spoed</IonLabel>
          </IonTabButton>
          <IonTabButton tab="instellingen" href="/instellingen">
            <IonIcon icon={settings} />
            <IonLabel>Instelligen</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )}

export default MainTabs;