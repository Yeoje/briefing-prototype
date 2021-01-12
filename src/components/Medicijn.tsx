import { IonAlert, IonButton, IonIcon, IonItem, IonText } from "@ionic/react"
import { documentTextOutline, refreshCircleOutline, helpCircleOutline, help, informationCircleOutline } from "ionicons/icons"
import React, { useState } from "react"

export const Medicijn: React.FC<{naam: string}> = ({naam}) => {
    const [bijsluiter, setBijsluiter] = useState(false);
    const [help, setHelp] = useState(false);
    const [herhaal, setHerhaal] = useState(false);
    const [faq, setFaq] = useState(false);
    
    return ( 
        <IonItem>
        <IonText color="tertiary">{naam}</IonText>
        <div style={{ position: "absolute", right: 2 }}>
            <IonButton onClick={() => setBijsluiter(true)}><IonIcon slot="end" className="button-icon" icon={documentTextOutline} /></IonButton>
            <IonAlert
                isOpen={bijsluiter}
                onDidDismiss={() => setBijsluiter(false)}
                cssClass='my-custom-class'
                header={'Bijsluiter'}
                subHeader={''}
                message={'Hier komt de bijsluiter'}
                buttons={['OK']}
            />

            <IonButton onClick={() => setHerhaal(true)}><IonIcon slot="end" className="button-icon" icon={refreshCircleOutline} /></IonButton>
            <IonAlert
                isOpen={herhaal}
                onDidDismiss={() => setHerhaal(false)}
                cssClass='my-custom-class'
                header={'Herhaal recept'}
                subHeader={''}
                message={'Hier vraagt u een herhaal recept aan'}
                buttons={['OK']}
            />

            <IonButton onClick={() => setHelp(true)}><IonIcon slot="end" className="button-icon" icon={helpCircleOutline} /></IonButton>
            <IonAlert
                isOpen={help}
                onDidDismiss={() => setHelp(false)}
                cssClass='my-custom-class'
                header={'Help!'}
                subHeader={''}
                message={'Hier vraagt u om hulp'}
                buttons={['OK']}
            />

            <IonButton onClick={() => setFaq(true)}><IonIcon slot="end" className="button-icon" icon={informationCircleOutline} /></IonButton>
            <IonAlert
                isOpen={faq}
                onDidDismiss={() => setFaq(false)}
                cssClass='my-custom-class'
                header={'FAQ'}
                subHeader={''}
                message={'De FAQ van het medicijn'}
                buttons={['OK']}
            />
        </div>
    </IonItem>
    )
}