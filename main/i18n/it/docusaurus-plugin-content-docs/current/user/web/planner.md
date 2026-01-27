---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
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

<!--
<InfoIncompleteArticle/>
-->


## Panoramica {#overview}

Il Pianificatore di Itinerari Web di OsmAnd ti permette di creare itinerari di navigazione, pianificare tracce e gestire file locali direttamente dal tuo browser. Questo strumento web è utile per creare itinerari di viaggio dettagliati che puoi sincronizzare con la tua app o condividere con altri.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Creare Nuovo Itinerario {#create-new-route}

Esistono due modi per iniziare un nuovo itinerario in Pianifica itinerario. La prima opzione è direttamente dalla mappa: fai clic con il pulsante destro del mouse in qualsiasi punto della mappa e seleziona **Crea nuovo itinerario**. La seconda opzione è dal pannello sinistro: fai clic sul pulsante **Crea traccia**.

Una volta creato l'itinerario, aggiungi punti direttamente sulla mappa. Ogni clic posiziona il punto successivo e il pianificatore costruisce l'itinerario tra i punti.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route.png)

### Importa Traccia {#import-track}

Se hai già un file di traccia, puoi importarlo in Pianifica itinerario e continuare a lavorare con esso nel Pianificatore Web. Fai clic sul pulsante **Importa traccia** e seleziona un file GPX dal tuo computer. Dopo il caricamento, la traccia appare nella tua lista locale e si apre nel pianificatore, in modo da poterla rivedere sulla mappa e procedere con la modifica e la gestione nei pannelli della traccia.

### File Locali {#local-files}

Tutti gli itinerari e le tracce che crei o importi in Pianifica itinerario vengono aggiunti alla lista Locale nel pannello sinistro. Questo rende più facile mantenere più file GPX in un unico posto e passare da uno all'altro durante la pianificazione.

Ogni elemento nella lista ha un interruttore che ti permette di mostrare o nascondere rapidamente la traccia sulla mappa. Seleziona una traccia dalla lista per aprirla nel pianificatore e continuare a lavorare con essa. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## Gestire Traccia {#manage-track}

Quando crei o importi un itinerario in Pianifica itinerario, si apre un pannello verticale della traccia. Usa questo pannello per cambiare il profilo di instradamento e gestire l'itinerario. Fai clic sul controllo del profilo per aprire la finestra di dialogo **Cambia profilo**, seleziona il profilo di cui hai bisogno (ad esempio, Auto, Bicicletta o Pedone) e scegli come applicarlo: *Segmenti successivi* applica il profilo solo alle nuove parti aggiunte da questo punto in poi, mentre *Tutti i segmenti* ricalcola l'intero itinerario con il profilo selezionato.

Dal pannello della traccia puoi anche eseguire azioni comuni sui file. Puoi **Salva su Cloud** per mantenere l'itinerario per un uso successivo, **Scarica GPX** per esportarlo come file, **Chiudi traccia** per interrompere la modifica o **Elimina traccia** per rimuoverla dalla tua lista locale. Queste azioni sono disponibili anche dai controlli corrispondenti nel [pannello Info](#info-panel).

![OsmAnd Web Manage Track](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## Pannelli Dettagli Traccia {#track-details-panels}

Il menu della traccia locale include tre pannelli: **Info**, **Traccia** e **Waypoint**. Usali per visualizzare le informazioni sulla traccia e gestire i punti dell'itinerario e i waypoint.

### Pannello Info {#info-panel}

Il pannello Info riassume la traccia selezionata e mostra i dati chiave sull'itinerario e sull'elevazione. Include una panoramica rapida delle statistiche dell'itinerario, più grafici e analisi aggiuntive della traccia basate sui dati della mappa disponibili.

La sezione di riepilogo mostra:

- Punti — il numero di punti dell'itinerario utilizzati per costruire l'itinerario.
- Distanza — la lunghezza totale dell'itinerario.
- Salita / discesa — ascesa totale e discesa totale lungo l'itinerario.
- Elevazione (min/media/max) — statistiche di elevazione per l'itinerario.
- Se i dati di elevazione sono mancanti o devono essere aggiornati, usa Elevazione (Satellite) → ricalcola per ricostruire l'elevazione utilizzando dati satellitari (quando disponibili).

Sotto il riepilogo, il pannello fornisce grafici:

- Elevazione — un profilo di elevazione dell'itinerario.
- Pendenza — un grafico della pendenza che mostra le variazioni di gradiente lungo la traccia.

Per dettagli aggiuntivi sulla traccia, apri le sezioni di analisi:

- Superficie — mostra i tipi di superficie lungo l'itinerario basati sui dati OSM.
- Fluidità — mostra la fluidità dei segmenti basata sui tag OSM.

Azioni comuni sulla traccia come salvare, scaricare, chiudere ed eliminare sono disponibili anche in questo pannello.

![OsmAnd Web Info Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Manage Track](@site/static/img/web/info_panel_2.png)

### Pannello Traccia {#track-panel}

Il pannello Traccia mostra l'elenco dei punti dell'itinerario utilizzati per costruire la traccia. Usalo per rivedere e modificare la struttura dell'itinerario: trascina i punti per riordinarli, rimuovi i punti usando l'icona di eliminazione o usa Cancella punti per rimuovere tutti i punti e ricominciare.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel.png)

### Pannello Waypoint {#waypoints-panel}

Il pannello Waypoint viene utilizzato per visualizzare e gestire i waypoint per la traccia selezionata. I waypoint possono essere aggiunti dal menu contestuale della mappa — fai clic con il pulsante destro del mouse sulla mappa e scegli l'opzione per **Aggiungi waypoint**, quindi compila i dettagli del waypoint (come nome, icona e colore) e salvalo.

Nell'elenco dei Waypoint, puoi controllare se i waypoint sono mostrati sulla mappa e rimuovere waypoint individuali quando necessario. Per rimuovere tutti i waypoint dalla traccia in una volta, usa *Cancella tutti i waypoint*.

![OsmAnd Web Waypoints Panel](@site/static/img/web/waypoints_panel.png)


## Articoli Correlati {#related-articles}

- [Pianifica un Itinerario](../plan-route/create-route.md)
- [Guide di Viaggio](../plan-route/travel-guides.md)
- [Navigazione](../web/web-navigation.md)