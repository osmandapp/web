---
source-hash: 822817a60d43552808de6f3ba701ff373fc32cdd07367b0d49b825e58a1bdb4e
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

<!--
<InfoIncompleteArticle/>
-->

## Panoramica {#overview}

**I miei luoghi** è l'hub centrale dell'app OsmAnd per la gestione e la personalizzazione di tutti i dati personali. È possibile utilizzare questa sezione per organizzare i [Punti preferiti](#favorites) contrassegnati come importanti o visitati di frequente. La scheda [Tracce](#tracks) consente di visualizzare, importare, registrare e creare file GPX per tenere una cronologia dettagliata dei propri percorsi e viaggi. È inoltre possibile gestire le [Modifiche OpenStreetMap](#openstreetmap-edits), facilitando il contributo ai miglioramenti e agli aggiornamenti delle mappe. Il [plugin Note audio/video](#audiovideo-notes) e i widget consentono agli utenti Android di creare e salvare note multimediali relative a luoghi specifici, aggiungendo contesto ai loro viaggi.

## Menu I miei luoghi {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu"/> → I miei luoghi*  

![I miei luoghi android](@site/static/img/personal/my_places_android_new.png) ![Menu I miei luoghi Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu"/> → I miei luoghi*  

![I miei luoghi ios](@site/static/img/personal/my_places_ios_new.png)  ![Menu I miei luoghi iOS](@site/static/img/personal/my_places_menu_ios_new.png)

</TabItem>

</Tabs>

I miei luoghi è organizzato per categorie. Seleziona una scheda per gestire i dati corrispondenti.

**Nota:** Tutti i dati memorizzati nel menu *I miei luoghi* possono essere spostati utilizzando un formato speciale `.osf` attraverso le applicazioni del dispositivo. Questo processo semplifica il salvataggio e il trasferimento dei dati tra i dispositivi e consente di condividerli con altri utenti di OsmAnd. 

### Preferiti {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Preferiti android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Preferiti iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

I **Preferiti** consentono di aggiungere ai segnalibri luoghi importanti o visitati di frequente. Questi punti preferiti sono organizzati in cartelle e possono essere personalizzati con colori, forme e icone diverse. È possibile navigare rapidamente verso qualsiasi luogo preferito attraverso il menu **I miei luoghi** senza doverlo cercare ripetutamente.

Per istruzioni complete, consultare l'articolo [Preferiti](../personal/favorites.md).

<!--
1. ***Action buttons***. *Action buttons* at the bottom of the My Places screen allow you to manage the list of folders with your favorites:  

    - **Import** (*Add* button) — Allows you to import *favorite.gpx* files from your device storage.

    - **Export** — Save your favorite points as a *favorites.gpx* file for external use or backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android only*) — You can add any favorite point or the entire list of favorite points in a folder to the [Map markers list](../personal/markers.md).

    - **Delete** (*on iOS, this option is located in the Edit menu*) — Deletes favorite points one at a time or selected favorite folders and all points contained in them.

2. ***Three-dot menu*** (*Android*) and ***long tap*** (*iOS*). Use the *three-dot* menu next to each folder or *long tap* the folder to manage groups of favorites. See [Favorite Group Actions](../personal/favorites.md#favorite-group-actions) for details.  
-->

### Tracce {#tracks}

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

Per una guida completa, consultare l'articolo [Gestisci Tracce](../personal/tracks/manage-tracks.md).

<!--
- **Tracks tab** — All tracks ever recorded, created, or imported are automatically displayed in the *My Places* folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.

- **Create a track** — Start recording using the **Tracks Tab** or the [Trip recording plugin](../plugins/trip-recording.md).

- **View and Edit** — Access the list of tracks through *My Places* and manage them using the *three-dot menu* for [folders](../personal/tracks/manage-tracks.md#track-folder) or the [single track](../personal/tracks/manage-tracks.md#search) menu.

- **Manage** — Use the [Filter](../personal/tracks/smart-folder.md#available-filters) and [Smart folder](../personal/tracks/smart-folder.md#smart-folder) tools to organize tracks based on specific parameters.

- **Appearance and Analysis** — [Customize](../map/tracks/appearance.md) the visual style of tracks and [analyze](../map/tracks/index.md#analyze-track-on-map) them using OsmAnd's [Plan a Route](../plan-route/create-route.md) tool.
-->

### Modifiche OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Condividi](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Condividi](@site/static/img/plugins/osm-editing/my_places_osm_ios.png)

</TabItem>

</Tabs>

La funzione **Modifiche OpenStreetMap** di OsmAnd consente di contribuire alla comunità cartografica globale aggiungendo, modificando o commentando i dati della mappa.

Consultare il [plugin Modifica OSM](../plugins/osm-editing.md) per istruzioni passo-passo.

<!--
1. ***Action buttons***. You can use the *action buttons* on the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Upload files to OSM** — Send your notes and data to OpenStreetMap to contribute to the community.

    - **Export** (*Android only*) — Save your notes and POIs as files for external use or backup, with options to export as OSM notes, POIs, or all data combined.

    - **Delete** — Remove selected items from your list permanently.


2. ***Three-dot menu***. You can manage specific POIs or notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Upload edit to OSM** — Submit your changes or edits to OpenStreetMap for others to see.

    - **Show on map** — Display the specific location of the POI or note on the map.

    - **Modify OSM change/note** — Make further edits to the POI or note that have already been added to OpenStreetMap.

    - **Delete** — Remove the selected POI or note from your list.
    -->

### Note Audio/Video {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Plugin Note Audio/Video Menu I miei luoghi Tre azioni](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Il **plugin Note Audio/Video** consente di creare note multimediali collegate a posizioni specifiche della mappa. Queste note sono memorizzate in **I miei luoghi** nella **Scheda Note A/V**.

Per ulteriori informazioni, visitare la pagina del [plugin Note Audio/Video](../plugins/audio-video-notes.md).

<!--
1. ***Action buttons***. You can use the *action buttons* at the bottom of the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Opens a selection of sorting methods, *By type* or *By date*, and when selected, sorts the list accordingly.

    - **<Translate android="true" ids="shared_string_share"/>** — Displays a checklist of all notes, including those added to GPX files as waypoints. First, the required notes are checked, then the *Share* icon in the upper right corner of the screen suggests available sharing options, and finally, these notes become available according to the selected option.

    - **Share with GPX waypoints** — You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

    - **<Translate android="true" ids="shared_string_delete"/>** — Displays a checklist of audio, photo, and video notes only. First, check the unnecessary notes, then tap the *Delete* icon in the upper right corner of the screen, after confirming, the selected notes will be deleted permanently.


2. ***Three-dot menu***. You can manage specific audio, video, or photo notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Views or listens to the selected audio, video, or photo note directly.

    - **<Translate android="true" ids="shared_string_share"/>** — Shares the note with others through various apps or platforms.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Displays the related location and [Context menu](../plugins/audio-video-notes#show-on-the-map) of the note on the map.

    - **<Translate android="true" ids="shared_string_rename"/>** — Change the name of the note to something more descriptive or relevant.

    - **<Translate android="true" ids="shared_string_delete"/>** — Selected notes are permanently deleted from your collection.


### Manage Storage {#manage-storage}

*Maps & Resources* *Main Menu* item of the OsmAnd application provides access to data management from the *My Places* section. The [*Local*](../personal/maps-resources.md#local-menu) tab shows you how much space is occupied by all existing OsmAnd data on your device, and the *My Places* section is in particular. You can use it to get detailed information about your data and access to manage it. The section can only contain items for which data has been downloaded.  

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Check and manage your data. For detailed information, see the [Maps & Resources](../personal/maps-resources.md) article.  


### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

### Gestione Archiviazione {#manage-storage}

L'elemento *Mappe e Risorse* del *Menu principale* dell'applicazione OsmAnd fornisce l'accesso alla gestione dei dati dalla sezione *I miei luoghi*. La scheda [*Locale*](../personal/maps-resources.md#local-menu) mostra quanto spazio è occupato da tutti i dati OsmAnd esistenti sul dispositivo, e in particolare dalla sezione *I miei luoghi*. È possibile utilizzarla per ottenere informazioni dettagliate sui dati e per accedervi per gestirli. La sezione può contenere solo elementi per i quali sono stati scaricati i dati.  

**Vai a** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Controlla e gestisci i tuoi dati. Per informazioni dettagliate, consultare l'articolo [Mappe e Risorse](../personal/maps-resources.md).  


## Articoli correlati {#related-articles}

- [Gestisci Tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Preferiti](../personal/favorites.md)
- [Modifica OpenStreetMap](../plugins/osm-editing.md)
- [Note Audio/Video](../plugins/audio-video-notes.md)
- [Cronologia di ricerca](../search/search-history.md#export-and-share)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)