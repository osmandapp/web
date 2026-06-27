---
source-hash: cd1409ef4efe33692ba77c372851417a07f87fabc97da46cbce8bb317de4b410
sidebar_position: 6
title:  Mijn Plaatsen
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

## Overzicht {#overview}

**Mijn Plaatsen** is de centrale hub in de OsmAnd-app voor het beheren en aanpassen van alle persoonlijke gegevens. U kunt deze sectie gebruiken om [Favoriete punten](#favorites) te organiseren die als belangrijk of vaak bezocht zijn gemarkeerd. Het tabblad [Tracks](#tracks) stelt u in staat GPX-bestanden te bekijken, importeren, opnemen en maken om u te helpen een gedetailleerde geschiedenis van uw routes en reizen bij te houden. U kunt ook uw [OpenStreetMap-bewerkingen](#openstreetmap-edits) beheren, wat het bijdragen aan kaartverbeteringen en -updates eenvoudig maakt. De [Audio-/videonotities](#audiovideo-notes) plugin en widgets stellen Android-gebruikers in staat om multimedianotities te maken en op te slaan die gerelateerd zijn aan specifieke locaties, waardoor context aan hun reizen wordt toegevoegd. Op iOS biedt Mijn Plaatsen ook toegang tot bladwijzers van [Reisgidsen](#travel-guides), zodat u opgeslagen reisinformatie kunt organiseren en snel kunt openen.

## Mijn Plaatsen Menu {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![Mijn Plaatsen android](@site/static/img/personal/my_places_android_new.png) ![Mijn plaatsen menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![Mijn Plaatsen ios](@site/static/img/personal/my_places_ios_2.png)  ![Mijn plaatsen menu iOS](@site/static/img/personal/my_places_menu_ios_2.png)

</TabItem>

</Tabs>

Mijn Plaatsen is georganiseerd per categorieën. Selecteer een tabblad om de bijbehorende gegevens te beheren.

**Opmerking:** Alle gegevens die zijn opgeslagen in het menu *Mijn Plaatsen* kunnen worden verplaatst met behulp van een speciaal `.osf`-formaat via applicaties op uw apparaat. Dit proces vereenvoudigt het opslaan en overdragen van gegevens tussen apparaten en stelt u in staat deze te delen met andere OsmAnd-gebruikers. 

### Favorieten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorieten menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorieten menu iOS](@site/static/img/personal/favorites_menu_tab_ios_new.png)

</TabItem>

</Tabs>

**Favorieten** stellen u in staat om belangrijke of vaak bezochte locaties te markeren. Deze favoriete punten zijn georganiseerd in mappen en kunnen worden aangepast met verschillende kleuren, vormen en pictogrammen. U kunt snel naar elke favoriete plaats navigeren via het menu **Mijn Plaatsen** zonder er herhaaldelijk naar te hoeven zoeken.

Voor volledige instructies, raadpleeg het artikel [Favorieten](../personal/favorites.md).

<!--
1. ***Action buttons***. *Action buttons* at the bottom of the My Places screen allow you to manage the list of folders with your favorites:  

    - **Import** (*Add* button) — Allows you to import *favorite.gpx* files from your device storage.

    - **Export** — Save your favorite points as a *favorites.gpx* file for external use or backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android only*) — You can add any favorite point or the entire list of favorite points in a folder to the [Map markers list](../personal/markers.md).

    - **Delete** (*on iOS, this option is located in the Edit menu*) — Deletes favorite points one at a time or selected favorite folders and all points contained in them.

2. ***Three-dot menu*** (*Android*) and ***long tap*** (*iOS*). Use the *three-dot* menu next to each folder or *long tap* the folder to manage groups of favorites. See [Favorite Group Actions](../personal/favorites.md#favorite-group-actions) for details.  
-->

### Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Mijn Plaatsen met tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn Plaatsen met tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios_new.png)

</TabItem>

</Tabs>

**Tracks** bieden krachtige hulpmiddelen voor het opnemen, maken en beheren van routes binnen OsmAnd. Ze kunnen worden gebruikt voor [navigatie](../navigation/setup/gpx-navigation.md), [ritregistratie](../plugins/trip-recording.md), of het [integreren](../personal/tracks/manage-tracks.md#import) van externe GPX-bestanden.

Voor uitgebreide begeleiding, zie het artikel [Tracks beheren](../personal/tracks/manage-tracks.md).

<!--
- **Tracks tab** — All tracks ever recorded, created, or imported are automatically displayed in the *My Places* folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.

- **Create a track** — Start recording using the **Tracks Tab** or the [Trip recording plugin](../plugins/trip-recording.md).

- **View and Edit** — Access the list of tracks through *My Places* and manage them using the *three-dot menu* for [folders](../personal/tracks/manage-tracks.md#track-folder) or the [single track](../personal/tracks/manage-tracks.md#search) menu.

- **Manage** — Use the [Filter](../personal/tracks/smart-folder.md#available-filters) and [Smart folder](../personal/tracks/smart-folder.md#smart-folder) tools to organize tracks based on specific parameters.

- **Appearance and Analysis** — [Customize](../map/tracks/appearance.md) the visual style of tracks and [analyze](../map/tracks/index.md#analyze-track-on-map) them using OsmAnd's [Plan a Route](../plan-route/create-route.md) tool.
-->

### OpenStreetMap-bewerkingen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Delen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Delen](@site/static/img/plugins/osm-editing/my_places_osm_ios_new.png)

</TabItem>

</Tabs>

De functie **OpenStreetMap-bewerkingen** van OsmAnd stelt u in staat bij te dragen aan de wereldwijde kaartgemeenschap door kaartgegevens toe te voegen, te wijzigen of er commentaar op te geven.

Raadpleeg de [OSM-bewerkingsplugin](../plugins/osm-editing.md) voor stapsgewijze instructies.

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

### Audio-/videonotities {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin Mijn plaatsen menu Drie acties](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

De **Audio-/videonotities-plugin** stelt u in staat multimedianotities te maken die gekoppeld zijn aan specifieke kaartlocaties. Deze notities worden opgeslagen in **Mijn Plaatsen** onder het **Tabblad A/V-notities**.

Voor meer informatie, bezoek de pagina van de [Audio-/videonotities-plugin](../plugins/audio-video-notes.md).

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

### Reisgidsen (iOS) {#travel-guides}

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Reisgidsen iOS](@site/static/img/plan-route/my_places_ios.png)

De sectie **Reis** bevat bladwijzers van reisgidsen en artikelen die zijn opgeslagen voor offline toegang. U kunt uw opgeslagen reisinformatie vanuit Mijn Plaatsen snel openen, organiseren en beheren. De sectie Reis wordt alleen weergegeven wanneer meer dan één reisgids als bladwijzer is opgeslagen.

Voor gedetailleerde informatie, raadpleeg het artikel [Reisgidsen](../plan-route/travel-guides.md).

## Gerelateerde artikelen {#related-articles}

- [Tracks beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Favorieten](../personal/favorites.md)
- [OpenStreetMap-bewerking](../plugins/osm-editing.md)
- [Audio-/videonotities](../plugins/audio-video-notes.md)
- [Reisgidsen](../plan-route/travel-guides.md)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)