---
source-hash: 52ded05518745579095a24f9a900f0796f5fbe819edde8236e9a6024572bbbdf
sidebar_position: 5
sidebar_label: Pianifica Percorso
title: Pianifica Percorso sul Sito Web
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

OsmAnd Web Route Planner ti consente di creare percorsi di navigazione, pianificare tracce e gestire file locali direttamente dal tuo browser. Questo strumento web è utile per creare percorsi di viaggio dettagliati che puoi sincronizzare con la tua app o condividere con altri.


## Percorso di navigazione {#navigation-route}

Per creare un percorso di navigazione, segui questi passaggi:

- **Fai clic con il pulsante destro del mouse** sulla mappa per aggiungere waypoint:

  - *Naviga da*. Imposta il punto di partenza.
  - *Naviga verso*. Imposta la destinazione.
  - *Naviga via*. Aggiungi punti intermedi se necessario.

- Dopo aver impostato i punti di inizio e fine, il percorso verrà visualizzato sulla mappa.

- Nel blocco **Percorso**:

  - Sposta i punti di inizio e fine se necessario.
  - Modifica i waypoint e scegli il tipo di percorso desiderato (ad esempio, auto, bicicletta, a piedi).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Seleziona il **Profilo di percorso** appropriato per diverse opzioni di navigazione.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Fai clic sui cerchi arancioni lungo il percorso per visualizzare le istruzioni di navigazione dettagliate.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- Per condividere il percorso, copia l'URL. Esempio: [https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Crea Traccia e File Locali {#create-track-and-local-files}

Lo strumento [**Pianifica percorso**](../plan-route/create-route.md) di OsmAnd Web ti consente di creare e modificare tracce in modo simile all'app mobile. Ecco come puoi creare e gestire le tracce:


***Creazione di un nuovo percorso:***

- *Fai clic con il pulsante destro del mouse* sulla mappa e seleziona **Crea Nuovo Percorso**.
- In alternativa, utilizza il pulsante **Crea Traccia** nel menu *Locale* (situato sul lato destro con i pulsanti *Matita* e *Carica*).


***Gestione delle tracce:***

- **Seleziona Profilo di Navigazione**. Scegli un profilo (ad esempio, escursionismo, guida) per sezioni specifiche del percorso (*Nuovi segmenti*) o per l'intero percorso (*Tutti i segmenti*).
- **Aggiungi Waypoint**. Fai clic sulla mappa per aggiungere nuovi punti.
- **Salva il Percorso**. Salva il tuo percorso per un uso futuro.
- **Visualizza Dettagli Percorso**. Accedi a informazioni dettagliate sulla traccia, inclusa lunghezza, durata e terreno.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route.png)


***Importazione e creazione di tracce:***

- **Importa Traccia**. Puoi caricare qualsiasi file GPX nella sezione **Locale** visitando [osmand.net/map](https://osmand.net/map).
- **Crea Traccia**. Crea manualmente una nuova traccia selezionando i waypoint.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)


***Azioni e informazioni sulla traccia locale:***

Il menu **Traccia Locale** fornisce tre pannelli per la modifica: **Info**, **Traccia** e **Waypoint**.

**Pannello Info**:

- *Salva su Cloud*. Salva la tua traccia su OsmAnd Cloud per l'accesso tra dispositivi.
- *Aggiungi descrizione*. Aggiungi note sulla traccia.
- *Rinomina*. Cambia il nome della traccia.
- *Ricalcola*. Aggiungi o aggiorna i dati di elevazione.
- *Elevazione*. Visualizza il profilo di elevazione.
- *Grafico velocità*. Visualizza i dati di velocità lungo la traccia.
- *Grafico pendenza*. Mostra le variazioni di pendenza lungo il percorso.
- *Dettagli strada*. Visualizza informazioni dettagliate come tipo di strada, superficie e pendenza.
- *Scarica GPX*. Esporta la traccia come file GPX ([Funzione Pro](../purchases/index.md)).
- *Chiudi Traccia*. Chiudi la visualizzazione di modifica della traccia.
- *Elimina Traccia*. Elimina definitivamente la traccia.
  ![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)

**Pannello Traccia**:

- Visualizza e modifica i punti della traccia.
- Riordina o elimina i punti secondo necessità.

**Pannello Waypoint**:

- Visualizza e gestisci i waypoint della traccia.
- Attiva/disattiva la visibilità dei waypoint sulla mappa.
- Elimina i waypoint singolarmente se necessario.

**Pannello Svolte**:

- Visualizza informazioni dettagliate sulle svolte lungo la traccia.

  ![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)


***Funzionalità aggiuntive:***

- **Sincronizza con l'app**. Salva i percorsi su OsmAnd Cloud e accedi ad essi sulla tua app mobile.
- **Profili di percorso personalizzati**. Regola i profili per adattarli a diverse attività, come ciclismo o escursionismo.
- **Percorsi condivisibili**. Copia e condividi gli URL dei percorsi per la pianificazione collaborativa.

> *Ultimo aggiornamento: Gennaio 2025*