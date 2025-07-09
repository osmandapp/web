---
source-hash: 4861815642f39190c1d87fb62206d4b05c6eea3b5d2af97e4dcef2e6834f466c
sidebar_position: 5
sidebar_label: Plan Route
title: Pianifica un percorso sul sito web
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

Il pianificatore di percorsi web di OsmAnd ti consente di creare percorsi di navigazione, pianificare tracce e gestire file locali direttamente dal tuo browser. Questo strumento web è utile per creare percorsi di viaggio dettagliati che puoi sincronizzare con la tua app o condividere con altri.


## Percorso di navigazione {#navigation-route}

Per creare un percorso di navigazione, segui questi passaggi:

- **Fai clic con il tasto destro** sulla mappa per aggiungere waypoint:

  - *Naviga da*. Imposta il punto di partenza.
  - *Naviga verso*. Imposta la destinazione.
  - *Naviga via*. Aggiungi punti intermedi se necessario.

- Dopo aver impostato i punti di inizio e fine, il percorso verrà visualizzato sulla mappa.

- Nel blocco **Percorso**:

  - Sposta i punti di inizio e fine se necessario.
  - Modifica i waypoint e scegli il tipo di percorso desiderato (ad esempio, auto, bicicletta, a piedi).

  ![OsmAnd Web Crea percorso](@site/static/img/web/navigation.png)

- Seleziona il **Profilo di percorso** appropriato per le diverse opzioni di navigazione.

  ![OsmAnd Web Crea percorso](@site/static/img/web/profile_type.png)

- Fai clic sui cerchi arancioni lungo il percorso per visualizzare le istruzioni di navigazione dettagliate.

  ![OsmAnd Web Crea percorso](@site/static/img/web/nav_instr.png)

- Per condividere il percorso, copia l'URL. Esempio: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Crea traccia e file locali {#create-track-and-local-files}

Lo strumento [**Pianifica percorso**](../plan-route/create-route.md) di OsmAnd Web ti consente di creare e modificare tracce in modo simile all'app mobile. Ecco come puoi creare e gestire le tracce:


***Creazione di un nuovo percorso:***

- *Fai clic con il tasto destro* sulla mappa e seleziona **Crea nuovo percorso**.
- In alternativa, usa il pulsante **Crea traccia** nel menu *Locale* (situato sul lato destro con i pulsanti *Matita* e *Carica*).


***Gestione delle tracce:***

- **Seleziona profilo di navigazione**. Scegli un profilo (ad esempio, escursionismo, guida) per sezioni di percorso specifiche (*Nuovi segmenti*) o per l'intero percorso (*Tutti i segmenti*).
- **Aggiungi waypoint**. Fai clic sulla mappa per aggiungere nuovi punti.
- **Salva il percorso**. Salva il tuo percorso per un uso futuro.
- **Visualizza dettagli percorso**. Accedi a informazioni dettagliate sulla traccia, inclusi lunghezza, durata e terreno.
  ![OsmAnd Web Crea traccia](@site/static/img/web/create_route.png)


***Importazione e creazione di tracce:***

- **Importa traccia**. Puoi caricare qualsiasi file GPX nella sezione **Locale** visitando [osmand.net/map](https://osmand.net/map).
- **Crea traccia**. Crea manualmente una nuova traccia selezionando i waypoint.
  ![OsmAnd Web Crea traccia](@site/static/img/web/create_route_2.png)


***Azioni e informazioni sulle tracce locali:***

Il menu **Traccia locale** fornisce tre pannelli per la modifica: **Info**, **Traccia** e **Waypoint**.

**Pannello Info**:

- *Salva su Cloud*. Salva la tua traccia su OsmAnd Cloud per l'accesso tra dispositivi.
- *Aggiungi descrizione*. Aggiungi note sulla traccia.
- *Rinomina*. Cambia il nome della traccia.
- *Ricalcola*. Aggiungi o aggiorna i dati di elevazione.
- *Elevazione*. Visualizza il profilo di elevazione.
- *Grafico velocità*. Visualizza i dati di velocità lungo la traccia.
- *Grafico pendenza*. Mostra i cambiamenti di pendenza lungo il percorso.
- *Dettagli strada*. Visualizza informazioni dettagliate come tipo di strada, superficie e pendenza.
- *Scarica GPX*. Esporta la traccia come file GPX ([funzione Pro](../purchases/index.md)).
- *Chiudi traccia*. Chiudi la visualizzazione di modifica della traccia.
- *Elimina traccia*. Elimina definitivamente la traccia.
  ![OsmAnd Web Crea traccia](@site/static/img/web/create_route_3.png)

**Pannello Traccia**:

- Visualizza e modifica i punti della traccia.
- Riordina o elimina i punti secondo necessità.

**Pannello Waypoint**:

- Visualizza e gestisci i waypoint della traccia.
- Attiva/disattiva la visibilità dei waypoint sulla mappa.
- Elimina i waypoint individualmente se necessario.

**Pannello Svolte**:

- Visualizza informazioni dettagliate sulle svolte lungo la traccia.

  ![OsmAnd Web Crea traccia](@site/static/img/web/create_route_1.png)


***Funzionalità aggiuntive:***

- **Sincronizza con l'app**. Salva i percorsi su OsmAnd Cloud e accedi ad essi sulla tua app mobile.
- **Profili di percorso personalizzati**. Regola i profili per adattarli a diverse attività, come il ciclismo o l'escursionismo.
- **Percorsi condivisibili**. Copia e condividi gli URL dei percorsi per la pianificazione collaborativa.

> *Ultimo aggiornamento: Gennaio 2025*