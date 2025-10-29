---
source-hash: 3969b9e7c1d8cd95ffd81346c80a2ec879cb86431f1db86cbdc923f556504f94
sidebar_position: 6
title:  I miei luoghi
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

## Panoramica {#overview}

**I miei luoghi** è l'hub centrale dell'app OsmAnd per la gestione e la personalizzazione di tutti i dati personali. È possibile utilizzare questa sezione per organizzare i [Punti preferiti](#favorites) contrassegnati come importanti o visitati di frequente. La scheda [Tracce](#tracks) consente di visualizzare, importare, registrare e creare file GPX per tenere una cronologia dettagliata dei propri percorsi e viaggi. È inoltre possibile gestire le [Modifiche OpenStreetMap](#openstreetmap-edits), facilitando il contributo ai miglioramenti e agli aggiornamenti delle mappe. Il plugin [Note audio/video](#audiovideo-notes) e i widget consentono agli utenti Android di creare e salvare note multimediali relative a luoghi specifici, aggiungendo contesto ai loro viaggi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu"/> → I miei luoghi*  

![I miei luoghi android](@site/static/img/personal/my_places_android.png) ![Menu I miei luoghi Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu"/> → I miei luoghi*  

![I miei luoghi ios](@site/static/img/personal/my_places_ios.png)  ![Menu I miei luoghi iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Import and export data***](../personal/import-export.md):  

    Tutti i dati memorizzati nel menu *I miei luoghi* possono essere spostati utilizzando un formato speciale `.osf` attraverso le applicazioni del dispositivo. Questo processo semplifica il salvataggio e il trasferimento dei dati tra i dispositivi e consente di condividerli con altri utenti di OsmAnd.  

    **Vai a** sezione *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* e seleziona se esportare o importare i dati. Se si seleziona *export*, è necessario espandere il gruppo *I miei luoghi* e spuntare i dati richiesti.

- [***Maps & Resources***](../personal/maps-resources.md):  

    L'elemento *Mappe e Risorse* del *Menu principale* dell'applicazione OsmAnd fornisce l'accesso alla gestione dei dati dalla sezione *I miei luoghi*. La scheda [*Locale*](../personal/maps-resources.md#local-menu) mostra quanto spazio è occupato da tutti i dati OsmAnd esistenti sul dispositivo, e in particolare dalla sezione *I miei luoghi*. È possibile utilizzarla per ottenere informazioni dettagliate sui dati e per accedervi per gestirli. La sezione può contenere solo elementi per i quali sono stati scaricati i dati.  

    **Vai a** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Controlla e gestisci i tuoi dati.


## Favorites {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Preferiti android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Preferiti iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

I **Preferiti** consentono di aggiungere ai segnalibri luoghi importanti o visitati di frequente. Questi punti preferiti sono organizzati in cartelle e possono essere personalizzati con colori, forme e icone diverse. È possibile navigare rapidamente verso qualsiasi luogo preferito attraverso il menu **I miei luoghi** senza doverlo cercare ripetutamente.


1. ***Action buttons***. I *Pulsanti di azione* nella parte inferiore della schermata I miei luoghi consentono di gestire l'elenco delle cartelle con i preferiti:  

    - **Import** (pulsante *Aggiungi*) — Consente di importare file *favorite.gpx* dalla memoria del dispositivo.

    - **Export** — Salva i tuoi punti preferiti come file *favorites.gpx* per uso esterno o per backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*solo Android*) — È possibile aggiungere qualsiasi punto preferito o l'intero elenco di punti preferiti di una cartella all'[elenco dei segnaposto sulla mappa](../personal/markers.md).

    - **Delete** (*su iOS, questa opzione si trova nel menu Modifica*) — Elimina i punti preferiti uno alla volta o le cartelle di preferiti selezionate e tutti i punti in esse contenuti.

2. ***Three-dot menu*** (*Android*) and ***long tap*** (*iOS*). Utilizzare il menu a *tre punti* accanto a ciascuna cartella o *tocco lungo* sulla cartella per gestire i gruppi di preferiti. Vedere [Favorite Group Actions](../personal/favorites.md#favorite-group-actions) per i dettagli.  


Per istruzioni complete, consultare l'articolo [Preferiti](../personal/favorites.md).


## Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> scheda*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> scheda*

![I miei luoghi con tracce in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Le **Tracce** offrono potenti strumenti per registrare, creare e gestire percorsi all'interno di OsmAnd. Possono essere utilizzate per la [navigazione](../navigation/setup/gpx-navigation.md), la [registrazione di viaggi](../plugins/trip-recording.md) o l'[integrazione](../personal/tracks/manage-tracks.md#import) di file GPX esterni.

- **Tracks tab** — Tutte le tracce mai registrate, create o importate vengono visualizzate automaticamente nella cartella *I miei luoghi* nella scheda *Tracce*. Sono organizzate per cartella o visualizzate in un elenco sottostante.

- **Create a track** — Avvia la registrazione utilizzando la **Scheda Tracce** o il [plugin Registrazione viaggio](../plugins/trip-recording.md).

- **View and Edit** — Accedi all'elenco delle tracce tramite *I miei luoghi* e gestiscile utilizzando il *menu a tre punti* per le [cartelle](../personal/tracks/manage-tracks.md#track-folder) o il menu della [singola traccia](../personal/tracks/manage-tracks.md#search).

- **Manage** — Utilizza gli strumenti [Filtro](../personal/tracks/smart-folder.md#available-filters) e [Cartella smart](../personal/tracks/smart-folder.md#smart-folder) per organizzare le tracce in base a parametri specifici.

- **Appearance and Analysis** — [Personalizza](../map/tracks/appearance.md) lo stile visivo delle tracce e [analizzale](../map/tracks/index.md#analyze-track-on-map) utilizzando lo strumento [Pianifica un percorso](../plan-route/create-route.md) di OsmAnd.

Per una guida completa, consultare l'articolo [Gestisci Tracce](../personal/tracks/manage-tracks.md).


## OpenStreetMap Edits {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Condividi](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Condividi](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

La funzione **Modifiche OpenStreetMap** di OsmAnd consente di contribuire alla comunità cartografica globale aggiungendo, modificando o commentando i dati della mappa.

1. ***Action buttons***. È possibile utilizzare i *pulsanti di azione* nella schermata I miei luoghi per gestire l'elenco delle note:  

    ![Condividi](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Upload files to OSM** — Invia le tue note e i tuoi dati a OpenStreetMap per contribuire alla comunità.

    - **Export** (*solo Android*) — Salva le tue note e i tuoi POI come file per uso esterno o per backup, con opzioni per esportare come note OSM, POI o tutti i dati combinati.

    - **Delete** — Rimuove permanentemente gli elementi selezionati dall'elenco.


2. ***Three-dot menu***. È possibile gestire specifici POI o note utilizzando il *menu a tre punti* accanto a ciascuna nota:  

    ![Menu a tre punti](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Upload edit to OSM** — Invia le tue modifiche o le tue modifiche a OpenStreetMap affinché altri possano vederle.

    - **Show on map** — Visualizza la posizione specifica del POI o della nota sulla mappa.

    - **Modify OSM change/note** — Apporta ulteriori modifiche al POI o alla nota che sono già stati aggiunti a OpenStreetMap.

    - **Delete** — Rimuove il POI o la nota selezionati dall'elenco.

Consultare il [plugin Modifica OSM](../plugins/osm-editing.md) per istruzioni passo-passo.


## Audio/Video Notes {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Plugin Note Audio/Video Menu I miei luoghi Tre azioni](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Il **plugin Note Audio/Video** consente di creare note multimediali collegate a posizioni specifiche della mappa. Queste note sono memorizzate in **I miei luoghi** nella **Scheda Note A/V**.

1. ***Action buttons***. È possibile utilizzare i *pulsanti di azione* nella parte inferiore della schermata I miei luoghi per gestire l'elenco delle note:  

    ![Condividi](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Apre una selezione di metodi di ordinamento, *Per tipo* o *Per data*, e una volta selezionato, ordina l'elenco di conseguenza.

    - **<Translate android="true" ids="shared_string_share"/>** — Visualizza un elenco di controllo di tutte le note, comprese quelle aggiunte ai file GPX come waypoint. Innanzitutto, si spuntano le note richieste, quindi l'icona *Condividi* nell'angolo in alto a destra dello schermo suggerisce le opzioni di condivisione disponibili e, infine, queste note diventano disponibili in base all'opzione selezionata.

    - **Share with GPX waypoints** — È possibile condividere le note selezionate come waypoint nel menu *I miei luoghi* aggiungendo i [dati GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) ad esse tramite il pulsante **Condividi** nella parte inferiore della schermata della scheda *Note A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Visualizza un elenco di controllo solo per le note audio, foto e video. Innanzitutto, spunta le note non necessarie, quindi tocca l'icona *Elimina* nell'angolo in alto a destra dello schermo; dopo la conferma, le note selezionate verranno eliminate in modo permanente.


2. ***Three-dot menu***. È possibile gestire specifiche note audio, video o fotografiche utilizzando il *menu a tre punti* accanto a ciascuna nota:  

    ![Menu a tre punti](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Visualizza o ascolta direttamente la nota audio, video o fotografica selezionata.

    - **<Translate android="true" ids="shared_string_share"/>** — Condivide la nota con altri tramite varie app o piattaforme.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Visualizza la posizione correlata e il [Menu contestuale](../plugins/audio-video-notes#show-on-the-map) della nota sulla mappa.

    - **<Translate android="true" ids="shared_string_rename"/>** — Modifica il nome della nota in qualcosa di più descrittivo o pertinente.

    - **<Translate android="true" ids="shared_string_delete"/>** — Le note selezionate vengono eliminate in modo permanente dalla raccolta.

Per ulteriori informazioni, visitare la pagina del [plugin Note Audio/Video](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Condividi](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

È possibile condividere le note selezionate come waypoint nel menu *I miei luoghi* aggiungendo i [dati GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) ad esse tramite il pulsante **Condividi** nella parte inferiore della schermata della scheda *Note A/V*.

### Manage Single Note {#manage-single-note}

![Menu a tre punti](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

È possibile gestire specifiche note audio, video o fotografiche utilizzando il **menu a tre punti** accanto a ciascuna nota:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Visualizza o ascolta direttamente la nota audio, video o fotografica selezionata.
- **<Translate android="true" ids="shared_string_share"/>**. Condivide la nota con altri tramite varie app o piattaforme.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Visualizza la posizione correlata e il [Menu contestuale](../plugins/audio-video-notes#actions-in-map-context-menu) della nota sulla mappa.
- **<Translate android="true" ids="shared_string_rename"/>**. Modifica il nome della nota in qualcosa di più descrittivo o pertinente.
- **<Translate android="true" ids="shared_string_delete"/>**. Le note selezionate vengono eliminate in modo permanente dalla raccolta.
-->

## Articoli correlati {#related-articles}

- [Gestisci Tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia di ricerca](../search/search-history.md#export-and-share)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)