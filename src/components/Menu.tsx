import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { chatbubblesOutline, chatbubblesSharp, helpCircleOutline, helpSharp, homeOutline, homeSharp, medicalOutline, medicalSharp, medkitOutline, medkitSharp, peopleOutline, peopleSharp, personOutline, personSharp, waterOutline, waterSharp} from 'ionicons/icons';
  import './Menu.css';


  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/home',
      iosIcon: homeOutline,
      mdIcon: homeSharp
    },
    {
      title: 'Profiel',
      url: '/profiel',
      iosIcon: personOutline,
      mdIcon: personSharp
    },
    {
      title: 'Chat',
      url: '/chat',
      iosIcon: chatbubblesOutline,
      mdIcon: chatbubblesSharp
    },
    {
      title: 'Consultaanvraag',
      url: '/consult',
      iosIcon: peopleOutline,
      mdIcon: peopleSharp
    },
    {
      title: 'Doorverwijzing',
      url: '/doorverwijzing',
      iosIcon: medicalOutline,
      mdIcon: medicalSharp
    },
    {
        title: 'Bloedonderzoek',
        url: '/bloedonderzoek',
        iosIcon: waterOutline,
        mdIcon: waterSharp
    },
    {
        title: 'Mijn Medicijnen',
        url: '/mijnmedicijnen',
        iosIcon: medkitOutline,
        mdIcon: medkitSharp
    },
    {
        title: 'Help',
        url: '/help',
        iosIcon: helpCircleOutline,
        mdIcon: helpSharp
    }
  ];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Briefing Prototype</IonListHeader>
            <IonNote>TODO:Voeg naam value toe</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" icon={appPage.iosIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;