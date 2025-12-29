---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
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


## Panoramica {#overview}

Il Pianificatore Web ti offre un modo semplice per lavorare con i tuoi dati personali direttamente nel browser. Dopo aver effettuato l'accesso, puoi aprire le tue tracce, modificarle, crearne di nuove o caricare file dal tuo computer. 

Tutte le modifiche vengono sincronizzate automaticamente tramite [OsmAnd Cloud](../personal/osmand-cloud.md), quindi tutto ciò che aggiorni sul web appare sui tuoi dispositivi e tutto ciò che crei sul telefono appare qui. Questo rende facile passare tra le piattaforme e mantenere i tuoi dati coerenti ovunque utilizzi OsmAnd.


## Come usarlo {#how-to-use}

Si tratta di una funzionalità a pagamento <ProFeature/>. Per utilizzarla, accedi al tuo account OsmAnd Pro.

![Accesso traccia](@site/static/img/web/track_login.png) ![Accesso traccia](@site/static/img/web/track_login_2.png)

La sezione Tracce contiene tutti gli strumenti e le azioni relativi alle tracce. Sono disponibili le seguenti opzioni:

- Mostra tracce da [OsmAnd Cloud](#cloud-tracks).
- Aggiungi tracce sulla mappa (cartella **Visibile sulla mappa**).
- Visualizza tutte le informazioni sulle tracce e il grafico
- Modifica tracce e aggiungile al Cloud.
- Scarica ed elimina tracce.
- Crea nuove cartelle o eliminale.
- Scarica cartelle come collezione OSF o OBF.


## Visibile sulla mappa {#visible-on-the-map}

La vista **Visibile sulla mappa** elenca tutte le tracce attualmente visualizzate sulla mappa. Qualsiasi traccia può essere aggiunta a questa lista dal pannello principale Tracce utilizzando l'opzione **⋮ → Rendi traccia visibile**.

Le tracce visibili sulla mappa sono evidenziate in blu, mentre le tracce attualmente nascoste appaiono in grigio. Un interruttore accanto a ogni traccia ti permette di mostrarla o nasconderla rapidamente. Il pulsante **Nascondi tutto** disattiva tutte le tracce visibili contemporaneamente.

Sotto l'elenco principale, la sezione **Recentemente visibile** mostra le tracce che erano visualizzate sulla mappa in precedenza. Questo rende facile riattivare una traccia senza doverla cercare di nuovo nelle tue cartelle o in OsmAnd Cloud.

![Visibile sulla mappa](@site/static/img/web/visible_new.png) ![Visibile sulla mappa](@site/static/img/web/visible_new_2.png)


## Menu cartella traccia {#track-folder-menu}

![Menu cartella traccia](@site/static/img/web/collection_new.png)

Fai clic sul pulsante a tre punti (⋮) per aprire il menu *Cartella traccia*. Da qui, puoi:

 - Scarica come OSF.
 - Scarica come Collezione OBF. Esporta la cartella in formato binario OsmAnd, scegliendo un [file OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) o un [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **File OBF**. Puoi scaricare una mappa OBF offline e aprirla con OsmAnd sul tuo dispositivo. È adatta per visualizzare un gran numero di tracce sulla mappa.
      -  **Travel OBF**. Puoi anche importare una mappa di tracce come libro di viaggio, che ti permette di selezionare tracce individuali sulla mappa e utilizzarle come normali file GPX. Un libro di viaggio supporta anche funzionalità come la visualizzazione delle tracce come punti, il filtraggio delle tracce per tipo di attività e il filtraggio dei waypoint.
 - Rinomina. Apre una finestra di dialogo in cui puoi inserire un nuovo nome per la cartella selezionata. La modifica viene sincronizzata con OsmAnd Cloud e apparirà su tutti i dispositivi connessi.
 - Elimina. Apre una finestra di conferma. L'eliminazione di una cartella la rimuove permanentemente insieme a tutte le tracce che contiene. Questa azione viene anche sincronizzata tramite OsmAnd Cloud.

![Menu cartella traccia](@site/static/img/web/collection_rename.png) ![Menu cartella traccia](@site/static/img/web/collection_delete.png)


## Tracce Cloud {#cloud-tracks}

Le tracce GPX che hai in [OsmAnd Cloud](../personal/osmand-cloud.md) saranno disponibili per la visualizzazione e la modifica dopo l'accesso. Solo per utenti **Pro** <ProFeature/> e per utenti di [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (che possono scaricare i loro dati anche dopo la scadenza dell'abbonamento Pro).

Le seguenti funzionalità sono disponibili dopo aver selezionato una traccia cloud:

![Modifica GPX cloud OsmAnd Web](@site/static/img/web/cloud_track.png)

- Schermi informativi:
  - *Informazioni* - visualizza i dati della traccia.
  - *Elevazione* - grafico dell'elevazione.
  - *Velocità* - grafico della velocità.
  - *Pendenza* - grafico della pendenza.
  - *Impostazioni* - elenco di profili di navigazione per lo strumento *Crea percorso*.
  - *Curve* - un elenco generato di istruzioni approssimative di svolta basate sulla geometria della traccia.
  - *Tipo di strada* - divide la traccia in segmenti per classificazione stradale.
  - *Superficie* - mostra i tipi di superfici della traccia lungo il percorso.
  - *Fluidità* - visualizza la fluidità del segmento basata sui tag OSM.

![Modifica GPX cloud OsmAnd Web](@site/static/img/web/cloud_track_turns.png) ![Modifica GPX cloud OsmAnd Web](@site/static/img/web/cloud_track_details.png)

- Pulsanti di azione:
  - *Modifica traccia* - aggiungi traccia cloud al locale per la modifica (pulsante _Modifica località_ sul pannello).
  - *Scarica GPX* - scarica la traccia sul PC.
  - *Ricalcola* Elevazione (Satellite) - visualizza il grafico dell'elevazione della traccia selezionata.
  - *Elimina traccia* - elimina la traccia.
  - *Chiudi traccia* - chiudi la traccia.


## Articoli correlati {#related-articles}

- [Gestisci tracce](../personal/tracks/manage-tracks.md)
- [Analizzatore tracce](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)