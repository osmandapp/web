---
source-hash: 822817a60d43552808de6f3ba701ff373fc32cdd07367b0d49b825e58a1bdb4e
sidebar_position: 6
title:  My Places
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

## Übersicht {#overview}

**Meine Orte** ist die zentrale Anlaufstelle in der OsmAnd-App zur Verwaltung und Anpassung aller persönlichen Daten. In diesem Bereich können Sie [Favoritenpunkte](#favorites) organisieren, die als wichtig oder häufig besucht markiert sind. Der Tab [Tracks](#tracks) ermöglicht es Ihnen, GPX-Dateien anzuzeigen, zu importieren, aufzuzeichnen und zu erstellen, um eine detaillierte Historie Ihrer Routen und Reisen zu führen. Sie können auch Ihre [OpenStreetMap-Bearbeitungen](#openstreetmap-edits) verwalten, was es einfach macht, zu Kartenverbesserungen und -aktualisierungen beizutragen. Das [Audio-/Videonotizen](#audiovideo-notes)-Plugin und die Widgets ermöglichen es Android-Nutzern, Multimedianotizen zu erstellen und zu speichern, die sich auf bestimmte Orte beziehen und so ihren Reisen Kontext verleihen.

## Meine Orte Menü {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu"/> → Meine Orte*  

![Meine Orte Android](@site/static/img/personal/my_places_android_new.png) ![Meine Orte Menü Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu"/> → Meine Orte*  

![Meine Orte iOS](@site/static/img/personal/my_places_ios_new.png)  ![Meine Orte Menü iOS](@site/static/img/personal/my_places_menu_ios_new.png)

</TabItem>

</Tabs>

Meine Orte ist nach Kategorien organisiert. Wählen Sie einen Tab aus, um die entsprechenden Daten zu verwalten.

**Hinweis:** Alle im Menü *Meine Orte* gespeicherten Daten können über Anwendungen auf Ihrem Gerät in einem speziellen `.osf`-Format verschoben werden. Dieser Prozess vereinfacht das Speichern und Übertragen von Daten zwischen Geräten und ermöglicht es Ihnen, sie mit anderen OsmAnd-Nutzern zu teilen. 

### Favoriten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritenmenü Android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritenmenü iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoriten** ermöglichen es Ihnen, wichtige oder häufig besuchte Orte mit einem Lesezeichen zu versehen. Diese Favoritenpunkte sind in Ordnern organisiert und können mit verschiedenen Farben, Formen und Symbolen angepasst werden. Sie können schnell zu jedem Favoritenort über das Menü **Meine Orte** navigieren, ohne wiederholt danach suchen zu müssen.

Detailliertere Anweisungen finden Sie im Artikel [Favoriten](../personal/favorites.md).

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

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> Tab*

![Meine Orte mit Tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Tab*

![Meine Orte mit Tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Tracks** bieten leistungsstarke Werkzeuge zum Aufzeichnen, Erstellen und Verwalten von Routen in OsmAnd. Sie können für die [Navigation](../navigation/setup/gpx-navigation.md), die [Aufzeichnung von Fahrten](../plugins/trip-recording.md) oder die [Integration](../personal/tracks/manage-tracks.md#import) externer GPX-Dateien verwendet werden.

Eine umfassende Anleitung finden Sie im Artikel [Tracks verwalten](../personal/tracks/manage-tracks.md).

<!--
- **Tracks tab** — All tracks ever recorded, created, or imported are automatically displayed in the *My Places* folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.

- **Create a track** — Start recording using the **Tracks Tab** or the [Trip recording plugin](../plugins/trip-recording.md).

- **View and Edit** — Access the list of tracks through *My Places* and manage them using the *three-dot menu* for [folders](../personal/tracks/manage-tracks.md#track-folder) or the [single track](../personal/tracks/manage-tracks.md#search) menu.

- **Manage** — Use the [Filter](../personal/tracks/smart-folder.md#available-filters) and [Smart folder](../personal/tracks/smart-folder.md#smart-folder) tools to organize tracks based on specific parameters.

- **Appearance and Analysis** — [Customize](../map/tracks/appearance.md) the visual style of tracks and [analyze](../map/tracks/index.md#analyze-track-on-map) them using OsmAnd's [Plan a Route](../plan-route/create-route.md) tool.
-->

### OpenStreetMap-Bearbeitungen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Teilen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Teilen](@site/static/img/plugins/osm-editing/my_places_osm_ios.png)

</TabItem>

</Tabs>

Die Funktion **OpenStreetMap-Bearbeitungen** von OsmAnd ermöglicht es Ihnen, zur globalen Kartierungs-Community beizutragen, indem Sie Kartendaten hinzufügen, ändern oder kommentieren.

Schritt-für-Schritt-Anleitungen finden Sie im Artikel zum [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md).

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

### Audio-/Videonotizen {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio-Video-Plugin Menü Meine Orte Drei Aktionen](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Das **Audio-/Videonotizen-Plugin** ermöglicht es Ihnen, Multimedianotizen zu erstellen, die mit bestimmten Kartenstandorten verknüpft sind. Diese Notizen werden in **Meine Orte** unter dem **A/V-Notizen-Tab** gespeichert.

Weitere Informationen finden Sie auf der Seite des [Audio-/Videonotizen-Plugins](../plugins/audio-video-notes.md).

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

### Speicher verwalten {#manage-storage}

Der Menüpunkt *Karten & Ressourcen* im *Hauptmenü* der OsmAnd-Anwendung bietet Zugriff auf die Datenverwaltung aus dem Bereich *Meine Orte*. Der Tab [*Lokal*](../personal/maps-resources.md#local-menu) zeigt Ihnen, wie viel Speicherplatz von allen vorhandenen OsmAnd-Daten auf Ihrem Gerät belegt ist, insbesondere der Bereich *Meine Orte*. Sie können ihn verwenden, um detaillierte Informationen über Ihre Daten zu erhalten und auf deren Verwaltung zuzugreifen. Der Abschnitt kann nur Elemente enthalten, für die Daten heruntergeladen wurden.  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Überprüfen und verwalten Sie Ihre Daten. Für detaillierte Informationen siehe den Artikel [Karten & Ressourcen](../personal/maps-resources.md).  


## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoriten](../personal/favorites.md)
- [OpenStreetMap-Bearbeitung](../plugins/osm-editing.md)
- [Audio-/Videonotizen](../plugins/audio-video-notes.md)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)