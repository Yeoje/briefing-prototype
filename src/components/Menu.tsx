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
  import { chatbubblesOutline, chatbubblesSharp, heartOutline, heartSharp, homeOutline, homeSharp} from 'ionicons/icons';
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
      title: 'Chat',
      url: '/chat',
      iosIcon: chatbubblesOutline,
      mdIcon: chatbubblesSharp
    },
    {
      title: 'Favorites',
      url: '/Favorites',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
      title: 'TABS',
      url: '/tabs',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    
  ];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Briefing Prototype</IonListHeader>
            <IonNote>Naam van patient</IonNote>
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