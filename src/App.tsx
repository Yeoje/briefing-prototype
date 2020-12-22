import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MainTabs from '../src/components/MainTabs'
import { AuthContext } from '../src/pages/auth/authContext'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Menu from './components/Menu';
import Login from './pages/auth/Login';
import Registratie from './pages/auth/Registratie';
import SpoedX from './pages/auth/SpoedX';

const App: React.FC = () => {
  return (
    <IonApp>
      <AuthContext.Consumer>
      {(authState) => !authState.authValues.authenticated ? (
        <IonReactRouter>
          <Route path="/login" component={Login} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
          <Route path="/registratie" component={Registratie} />
          <Route path="/spoedx" component={SpoedX} />
        </IonReactRouter>
      ) : (
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route path="/" component={MainTabs} />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        )}
      </AuthContext.Consumer>
      
    </IonApp>
    )};

  export default App;
