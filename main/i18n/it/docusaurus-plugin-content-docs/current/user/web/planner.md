---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
sidebar_position: 9
sidebar_label:  Pianifica Itinerario
title: Pianificare un Itinerario sul Sito Web
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## Panoramica {#overview}

Il Pianificatore di Itinerari Web di OsmAnd ti permette di creare itinerari di navigazione, pianificare tracce e gestire file locali direttamente dal tuo browser. Questo strumento web è utile per creare itinerari di viaggio dettagliati che puoi sincronizzare con la tua app o condividere con altri.


<!--
## Itinerario di Navigazione {#navigation-route}

Per creare un itinerario di navigazione, segui questi passaggi:

- **Fai clic con il pulsante destro del mouse** sulla mappa per aggiungere waypoint:

  - *Parti da*. Imposta il punto di partenza.
  - *Arriva a*. Imposta la destinazione.
  - *Passa per*. Aggiungi punti intermedi se necessario.

- Dopo aver impostato i punti di partenza e di arrivo, l'itinerario verrà visualizzato sulla mappa.

- Nel blocco **Itinerario**:

  - Sposta i punti di partenza e di arrivo se necessario.
  - Modifica i waypoint e scegli il tipo di itinerario desiderato (ad es. auto, bicicletta, a piedi).

  ![Creazione Itinerario Web OsmAnd](@site/static/img/web/navigation.png)

- Seleziona il **Profilo Itinerario** appropriato per le diverse opzioni di navigazione.

  ![Creazione Itinerario Web OsmAnd](@site/static/img/web/profile_type.png)

- Clicca sui cerchi arancioni lungo l'itinerario per visualizzare le istruzioni di navigazione dettagliate.

  ![Creazione Itinerario Web OsmAnd](@site/static/img/web/nav_instr.png)

- Per condividere l'itinerario, copia l'URL. Esempio: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Creare Tracce e File Locali {#create-track-and-local-files}

Lo strumento [**Pianifica itinerario**](../plan-route/create-route.md) di OsmAnd Web ti permette di creare e modificare tracce in modo simile all'app mobile. Ecco come puoi creare e gestire le tracce:


***Creazione di un nuovo itinerario:***

- *Fai clic con il pulsante destro del mouse* sulla mappa e seleziona **Crea Nuovo Itinerario**.
- In alternativa, usa il pulsante **Crea Traccia** nel menu *Locale* (situato sul lato destro con i pulsanti *Matita* e *Carica*).


***Gestione delle tracce:***

- **Seleziona Profilo di Navigazione**. Scegli un profilo (ad es. escursionismo, guida) per sezioni specifiche dell'itinerario (*Nuovi segmenti*) o per l'intero itinerario (*Tutti i segmenti*).
- **Aggiungi Waypoint**. Clicca sulla mappa per aggiungere nuovi punti.
- **Salva l'Itinerario**. Salva il tuo itinerario per un uso futuro.
- **Visualizza Dettagli Itinerario**. Accedi alle informazioni dettagliate della traccia, inclusi lunghezza, durata e terreno.
  ![Creazione Traccia Web OsmAnd](@site/static/img/web/create_route.png)


***Importazione e creazione di tracce:***

- **Importa Traccia**. Puoi caricare qualsiasi file GPX nella sezione **Locale** visitando [osmand.net/map](https://osmand.net/map).
- **Crea Traccia**. Crea manualmente una nuova traccia selezionando i waypoint.
  ![Creazione Traccia Web OsmAnd](@site/static/img/web/create_route_2.png)


***Azioni e informazioni sulla traccia locale:***

Il menu **Traccia Locale** fornisce tre pannelli per la modifica: **Info**, **Traccia** e **Waypoint**.

**Pannello Info**:

- *Salva su Cloud*. Salva la tua traccia su OsmAnd Cloud per accedervi da più dispositivi.
- *Aggiungi descrizione*. Aggiungi note sulla traccia.
- *Rinomina*. Cambia il nome della traccia.
- *Ricalcola*. Aggiungi o aggiorna i dati di altitudine.
- *Altitudine*. Visualizza il profilo altimetrico.
- *Grafico velocità*. Mostra i dati di velocità lungo la traccia.
- *Grafico pendenza*. Mostra le variazioni di pendenza lungo l'itinerario.  
- *Dettagli strada*. Visualizza informazioni dettagliate come tipo di strada, superficie e pendenza.
- *Scarica GPX*. Esporta la traccia come file GPX ([Funzionalità Pro](../purchases/index.md)).
- *Chiudi Traccia*. Chiudi la vista di modifica della traccia.
- *Elimina Traccia*. Elimina permanentemente la traccia.
  ![Creazione Traccia Web OsmAnd](@site/static/img/web/create_route_3.png)

**Pannello Traccia**:

- Visualizza e modifica i punti della traccia.
- Riordina o elimina i punti secondo necessità.

**Pannello Waypoint**:

- Visualizza e gestisci i waypoint della traccia.
- Attiva/disattiva la visibilità dei waypoint sulla mappa.
- Elimina i waypoint singolarmente se necessario.

**Pannello Svolte**:

- Visualizza informazioni dettagliate sulle svolte lungo la traccia.

  ![Creazione Traccia Web OsmAnd](@site/static/img/web/create_route_1.png)


***Funzionalità aggiuntive:***

- **Sincronizza con l'app**. Salva gli itinerari su OsmAnd Cloud e accedi ad essi sulla tua app mobile.
- **Profili itinerario personalizzati**. Regola i profili per adattarli a diverse attività, come ciclismo o escursionismo.
- **Itinerari condivisibili**. Copia e condividi gli URL degli itinerari per la pianificazione collaborativa.