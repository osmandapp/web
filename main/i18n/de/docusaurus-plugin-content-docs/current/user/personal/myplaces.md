---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: Meine Orte
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

## Überblick {#overview}

**Meine Orte** ist die zentrale Anlaufstelle in der OsmAnd-App zum Verwalten und Anpassen aller persönlichen Daten. In diesem Bereich können Sie [Favoriten](#favorites) organisieren, die als wichtig oder häufig besucht markiert sind. Die Registerkarte [Tracks](#tracks) ermöglicht es Ihnen, GPX-Dateien anzuzeigen, zu importieren, aufzuzeichnen und zu erstellen, um eine detaillierte Historie Ihrer Routen und Reisen zu führen. Sie können auch Ihre [OpenStreetMap-Bearbeitungen](#openstreetmap-edits) verwalten, was die Beteiligung an Kartenverbesserungen und -aktualisierungen erleichtert. Das [Audio-/Video-Notizen-Plugin](#audiovideo-notes) und die Widgets ermöglichen Android-Nutzern das Erstellen und Speichern von Multimedia-Notizen zu bestimmten Orten, wodurch ihren Reisen Kontext hinzugefügt wird.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu"/> → Meine Orte*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_menu"/> → Meine Orte*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Daten importieren und exportieren***](../personal/import-export.md):

    Alle im Menü *Meine Orte* gespeicherten Daten können über eine spezielle `.osf`-Formatierung mittels Anwendungen auf Ihrem Gerät verschoben werden. Dieser Prozess vereinfacht das Speichern und Übertragen von Daten zwischen Geräten und ermöglicht es Ihnen, diese mit anderen OsmAnd-Benutzern zu teilen.

    **Gehen Sie zu** dem Abschnitt *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* und wählen Sie, ob Sie Daten exportieren oder importieren möchten. Wenn Sie *exportieren* wählen, müssen Sie die *Meine Orte Gruppe* erweitern und die erforderlichen Daten auswählen.

- [***Karten & Ressourcen***](../personal/maps-resources.md):

    Der Menüpunkt *Karten & Ressourcen* im *Hauptmenü* der OsmAnd-Anwendung bietet Zugriff auf die Datenverwaltung aus dem Bereich *Meine Orte*. Die Registerkarte [*Lokal*](../personal/maps-resources.md#local) zeigt Ihnen, wie viel Speicherplatz alle vorhandenen OsmAnd-Daten auf Ihrem Gerät belegen, insbesondere der Abschnitt *Meine Orte*. Sie können ihn verwenden, um detaillierte Informationen über Ihre Daten zu erhalten und auf deren Verwaltung zuzugreifen. Der Abschnitt kann nur Elemente enthalten, für die Daten heruntergeladen wurden.

    **Gehen Sie zu** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Überprüfen und verwalten Sie Ihre Daten.


## Favoriten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

Mit **Favoriten** können Sie wichtige oder häufig besuchte Orte mit einem Lesezeichen versehen. Diese Favoritenpunkte sind in Ordnern organisiert und können mit verschiedenen Farben, Formen und Symbolen angepasst werden. Sie können schnell zu jedem Favoritenort über das Menü **Meine Orte** navigieren, ohne ihn wiederholt suchen zu müssen.


1. ***Aktionsschaltflächen***. Die *Aktionsschaltflächen* am unteren Rand des Bildschirms "Meine Orte" ermöglichen es Ihnen, die Ordnerliste mit Ihren Favoriten zu verwalten:

    - **Importieren** (*Hinzufügen*-Schaltfläche) – Ermöglicht den Import von *favorite.gpx*-Dateien aus dem Gerätespeicher.

    - **Exportieren** – Speichern Sie Ihre Favoritenpunkte als *favorites.gpx*-Datei zur externen Verwendung oder Sicherung.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (nur Android) – Sie können jeden Favoritenpunkt oder die gesamte Liste der Favoritenpunkte in einem Ordner zur [Kartenmarkierungsliste](../personal/markers.md) hinzufügen.

    - **Löschen** (unter iOS befindet sich diese Option im Menü "Bearbeiten") – Löscht Favoritenpunkte einzeln oder ausgewählte Favoritenordner und alle darin enthaltenen Punkte.

2. ***Drei-Punkte-Menü*** (Android) und ***langes Tippen*** (iOS). Verwenden Sie das *Drei-Punkte-Menü* neben jedem Ordner oder *tippen Sie lange* auf den Ordner, um Gruppen von Favoriten zu verwalten:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** – Verwenden Sie diese Option, um den Namen des ausgewählten Ordners zu ändern.

    - **<Translate android="true" ids="change_default_appearance"/>** – Passen Sie an, wie die Favoritenpunkte im Ordner auf der Karte angezeigt werden, indem Sie deren Symbole, Farben oder Beschriftungen ändern.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** oder **Auf Karte ausblenden** – Schalten Sie diese Option um, um die Favoritenpunkte aus dem Ordner auf der Karte anzuzeigen oder auszublenden.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** oder **Von Kartenmarkierungen entfernen** (nur Android) – Fügen Sie alle Favoritenpunkte aus dem Ordner zur *Kartenmarkierungsliste* hinzu oder entfernen Sie sie bei Bedarf zur einfachen Referenz.

    - **<Translate android="true" ids="shared_string_share"/>** – Teilen Sie die Favoritenpunkte im Ordner, indem Sie sie als *Favorites.gpx*-Datei exportieren, was das Übertragen oder Sichern Ihrer Daten erleichtert.

    - **<Translate android="true" ids="shared_string_delete"/>** – Löschen Sie den ausgewählten Favoritenordner und alle darin enthaltenen Punkte dauerhaft.

Für detailliertere Anweisungen lesen Sie den Artikel [Favoriten](../personal/favorites.md).


## Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> Registerkarte*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> Registerkarte*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Tracks** bieten leistungsstarke Werkzeuge zum Aufzeichnen, Erstellen und Verwalten von Routen innerhalb von OsmAnd. Sie können für die [Navigation](../navigation/setup/gpx-navigation.md), die [Reiseaufzeichnung](../plugins/trip-recording.md) oder die [Integration](../personal/tracks/manage-tracks.md#import) externer GPX-Dateien verwendet werden.

- **Tracks-Tab** – Alle jemals aufgezeichneten, erstellten oder importierten Tracks werden automatisch im Ordner *Meine Orte* auf der Registerkarte *Tracks* angezeigt. Sie sind nach Ordnern organisiert oder werden in einer Liste darunter angezeigt.

- **Track erstellen** – Starten Sie die Aufzeichnung über die **Tracks-Registerkarte** oder das [Reiseaufzeichnungs-Plugin](../plugins/trip-recording.md).

- **Anzeigen und Bearbeiten** – Greifen Sie über *Meine Orte* auf die Liste der Tracks zu und verwalten Sie diese über das *Drei-Punkte-Menü* für [Ordner](../personal/tracks/manage-tracks.md#track-folder) oder das Menü für [einzelne Tracks](../personal/tracks/manage-tracks.md#single-track-menu).

- **Verwalten** – Verwenden Sie die Tools [Filter](../personal/tracks/smart-folder.md#filter) und [Smart Folder](../personal/tracks/smart-folder.md#smart-folder), um Tracks basierend auf bestimmten Parametern zu organisieren.

- **Aussehen und Analyse** – [Passen Sie](../map/tracks/appearance.md) den visuellen Stil von Tracks an und [analysieren Sie](../map/tracks/index.md#analyze-track-on-map) sie mit dem OsmAnd-Tool [Route planen](../plan-route/create-route.md).

Für eine umfassende Anleitung siehe den Artikel [Tracks verwalten](../personal/tracks/manage-tracks.md).


## OpenStreetMap-Bearbeitungen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

Die Funktion **OpenStreetMap-Bearbeitungen** von OsmAnd ermöglicht es Ihnen, durch Hinzufügen, Ändern oder Kommentieren von Kartendaten zur globalen Kartengemeinschaft beizutragen.

1. ***Aktionsschaltflächen***. Sie können die *Aktionsschaltflächen* auf dem Bildschirm "Meine Orte" verwenden, um Ihre Notizenliste zu verwalten:

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Dateien auf OSM hochladen** – Senden Sie Ihre Notizen und Daten an OpenStreetMap, um einen Beitrag zur Community zu leisten.

    - **Exportieren** (nur Android) – Speichern Sie Ihre Notizen und POIs als Dateien zur externen Verwendung oder Sicherung, mit Optionen zum Exportieren als OSM-Notizen, POIs oder alle Daten kombiniert.

    - **Löschen** – Entfernen Sie ausgewählte Elemente dauerhaft aus Ihrer Liste.


2. ***Drei-Punkte-Menü***. Sie können bestimmte POIs oder Notizen über das *Drei-Punkte-Menü* neben jeder Notiz verwalten:

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Bearbeitung auf OSM hochladen** – Senden Sie Ihre Änderungen oder Bearbeitungen an OpenStreetMap, damit andere sie sehen können.

    - **Auf Karte anzeigen** – Zeigen Sie den spezifischen Standort des POI oder der Notiz auf der Karte an.

    - **OSM-Änderung/Notiz ändern** – Nehmen Sie weitere Bearbeitungen an dem POI oder der Notiz vor, die bereits zu OpenStreetMap hinzugefügt wurden.

    - **Löschen** – Entfernen Sie den ausgewählten POI oder die Notiz aus Ihrer Liste.

Für Schritt-für-Schritt-Anleitungen siehe das [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md).


## Audio-/Video-Notizen {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

Das **Audio-/Video-Notizen-Plugin** ermöglicht es Ihnen, Multimedia-Notizen zu erstellen, die mit bestimmten Kartenstandorten verknüpft sind. Diese Notizen werden in **Meine Orte** unter der Registerkarte **A/V-Notizen** gespeichert.

1. ***Aktionsschaltflächen***. Sie können die *Aktionsschaltflächen* am unteren Rand des Bildschirms "Meine Orte" verwenden, um Ihre Notizenliste zu verwalten:

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** – Öffnet eine Auswahl von Sortiermethoden, *Nach Typ* oder *Nach Datum*, und sortiert die Liste entsprechend, wenn ausgewählt.

    - **<Translate android="true" ids="shared_string_share"/>** – Zeigt eine Checkliste aller Notizen an, einschließlich derer, die als Wegpunkte zu GPX-Dateien hinzugefügt wurden. Zuerst werden die erforderlichen Notizen überprüft, dann schlägt das *Teilen*-Symbol in der oberen rechten Ecke des Bildschirms verfügbare Freigabeoptionen vor, und schließlich werden diese Notizen gemäß der ausgewählten Option verfügbar.

    - **Mit GPX-Wegpunkten teilen** – Sie können die als Wegpunkte im Menü *Meine Orte* ausgewählten Notizen teilen, indem Sie ihnen [GPX-Daten](../plugins/audio-video-notes.md#share-with-gpx-waypoints) über die Schaltfläche **Teilen** am unteren Rand des Bildschirms der Registerkarte *A/V-Notizen* hinzufügen.

    - **<Translate android="true" ids="shared_string_delete"/>** – Zeigt eine Checkliste nur für Audio-, Foto- und Video-Notizen an. Zuerst überprüfen Sie die unnötigen Notizen, tippen dann auf das *Löschen*-Symbol in der oberen rechten Ecke des Bildschirms, und nach Bestätigung werden die ausgewählten Notizen dauerhaft gelöscht.


2. ***Drei-Punkte-Menü***. Sie können bestimmte Audio-, Video- oder Foto-Notizen über das *Drei-Punkte-Menü* neben jeder Notiz verwalten:

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** – Zeigt oder hört die ausgewählte Audio-, Video- oder Foto-Notiz direkt an.

    - **<Translate android="true" ids="shared_string_share"/>** – Teilt die Notiz mit anderen über verschiedene Apps oder Plattformen.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** – Zeigt den zugehörigen Standort und das [Kontextmenü](../plugins/audio-video-notes#actions-in-map-context-menu) der Notiz auf der Karte an.

    - **<Translate android="true" ids="shared_string_rename"/>** – Ändert den Namen der Notiz in etwas Beschreibenderes oder Relevanteres.

    - **<Translate android="true" ids="shared_string_delete"/>** – Ausgewählte Notizen werden dauerhaft aus Ihrer Sammlung gelöscht.

Weitere Informationen finden Sie auf der Seite [Audio-/Video-Notizen-Plugin](../plugins/audio-video-notes.md).


<!--
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

## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbschema-Paletten](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: März 2025*