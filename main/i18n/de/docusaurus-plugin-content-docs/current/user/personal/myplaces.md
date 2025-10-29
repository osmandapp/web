---
source-hash: 3969b9e7c1d8cd95ffd81346c80a2ec879cb86431f1db86cbdc923f556504f94
sidebar_position: 6
title:  Meine Orte
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

## Übersicht {#overview}

**Meine Orte** ist die zentrale Anlaufstelle in der OsmAnd-App zur Verwaltung und Anpassung aller persönlichen Daten. In diesem Bereich können Sie [Favoritenpunkte](#favorites) organisieren, die als wichtig oder häufig besucht markiert sind. Der Tab [Tracks](#tracks) ermöglicht es Ihnen, GPX-Dateien anzuzeigen, zu importieren, aufzuzeichnen und zu erstellen, um eine detaillierte Historie Ihrer Routen und Reisen zu führen. Sie können auch Ihre [OpenStreetMap-Bearbeitungen](#openstreetmap-edits) verwalten, was es einfach macht, zu Kartenverbesserungen und -aktualisierungen beizutragen. Das [Audio-/Videonotizen](#audiovideo-notes)-Plugin und die Widgets ermöglichen es Android-Nutzern, Multimedianotizen zu erstellen und zu speichern, die sich auf bestimmte Orte beziehen und so ihren Reisen Kontext verleihen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu"/> → Meine Orte*  

![Meine Orte Android](@site/static/img/personal/my_places_android.png) ![Menü Meine Orte Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu"/> → Meine Orte*  

![Meine Orte iOS](@site/static/img/personal/my_places_ios.png)  ![Menü Meine Orte iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Daten importieren und exportieren***](../personal/import-export.md):  

    Alle im Menü *Meine Orte* gespeicherten Daten können über Anwendungen auf Ihrem Gerät in einem speziellen `.osf`-Format verschoben werden. Dieser Prozess vereinfacht das Speichern und Übertragen von Daten zwischen Geräten und ermöglicht es Ihnen, sie mit anderen OsmAnd-Nutzern zu teilen.  

    **Gehen Sie zu** *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* Abschnitt und wählen Sie, ob Sie Daten exportieren oder importieren möchten. Wenn Sie *Exportieren* wählen, müssen Sie die *Meine Orte*-Gruppe erweitern und die erforderlichen Daten markieren.

- [***Karten & Ressourcen***](../personal/maps-resources.md):  

    Der Menüpunkt *Karten & Ressourcen* im *Hauptmenü* der OsmAnd-Anwendung bietet Zugriff auf die Datenverwaltung aus dem Bereich *Meine Orte*. Der Tab [*Lokal*](../personal/maps-resources.md#local-menu) zeigt Ihnen, wie viel Speicherplatz von allen vorhandenen OsmAnd-Daten auf Ihrem Gerät belegt ist, insbesondere der Bereich *Meine Orte*. Sie können ihn verwenden, um detaillierte Informationen über Ihre Daten zu erhalten und auf deren Verwaltung zuzugreifen. Der Abschnitt kann nur Elemente enthalten, für die Daten heruntergeladen wurden.  

    **Gehen Sie zu** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Überprüfen und verwalten Sie Ihre Daten.


## Favoriten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritenmenü Android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritenmenü-Tab iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoriten** ermöglichen es Ihnen, wichtige oder häufig besuchte Orte mit einem Lesezeichen zu versehen. Diese Favoritenpunkte sind in Ordnern organisiert und können mit verschiedenen Farben, Formen und Symbolen angepasst werden. Sie können schnell zu jedem Favoritenort über das Menü **Meine Orte** navigieren, ohne wiederholt danach suchen zu müssen.


1. ***Aktionsschaltflächen***. Die *Aktionsschaltflächen* am unteren Rand des Bildschirms "Meine Orte" ermöglichen es Ihnen, die Liste der Ordner mit Ihren Favoriten zu verwalten:  

    - **Importieren** (*Hinzufügen*-Schaltfläche) — Ermöglicht den Import von *favorite.gpx*-Dateien aus dem Speicher Ihres Geräts.

    - **Exportieren** — Speichern Sie Ihre Favoritenpunkte als *favorites.gpx*-Datei zur externen Verwendung oder als Backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*nur Android*) — Sie können jeden Favoritenpunkt oder die gesamte Liste der Favoritenpunkte in einem Ordner zur [Liste der Kartenmarkierungen](../personal/markers.md) hinzufügen.

    - **Löschen** (*unter iOS befindet sich diese Option im Bearbeiten-Menü*) — Löscht Favoritenpunkte einzeln oder ausgewählte Favoritenordner und alle darin enthaltenen Punkte.

2. ***Drei-Punkte-Menü*** (*Android*) und ***langes Tippen*** (*iOS*). Verwenden Sie das *Drei-Punkte-Menü* neben jedem Ordner oder tippen Sie lange auf den Ordner, um Favoritengruppen zu verwalten. Weitere Details finden Sie unter [Aktionen für Favoritengruppen](../personal/favorites.md#favorite-group-actions).  


Detailliertere Anweisungen finden Sie im Artikel [Favoriten](../personal/favorites.md).


## Tracks {#tracks}

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

- **Tracks-Tab** — Alle jemals aufgezeichneten, erstellten oder importierten Tracks werden automatisch im Ordner *Meine Orte* im Tab *Tracks* angezeigt. Sie sind nach Ordnern geordnet oder in einer Liste darunter aufgeführt.

- **Einen Track erstellen** — Starten Sie die Aufzeichnung über den **Tracks-Tab** oder das [Plugin zur Aufzeichnung von Fahrten](../plugins/trip-recording.md).

- **Anzeigen und Bearbeiten** — Greifen Sie über *Meine Orte* auf die Liste der Tracks zu und verwalten Sie sie über das *Drei-Punkte-Menü* für [Ordner](../personal/tracks/manage-tracks.md#track-folder) oder das Menü für [einzelne Tracks](../personal/tracks/manage-tracks.md#search).

- **Verwalten** — Verwenden Sie die Werkzeuge [Filter](../personal/tracks/smart-folder.md#available-filters) und [Intelligenter Ordner](../personal/tracks/smart-folder.md#smart-folder), um Tracks nach bestimmten Parametern zu organisieren.

- **Darstellung und Analyse** — [Passen Sie den visuellen Stil](../map/tracks/appearance.md) von Tracks an und [analysieren](../map/tracks/index.md#analyze-track-on-map) Sie sie mit dem OsmAnd-Werkzeug [Route planen](../plan-route/create-route.md).

Eine umfassende Anleitung finden Sie im Artikel [Tracks verwalten](../personal/tracks/manage-tracks.md).


## OpenStreetMap-Bearbeitungen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Teilen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Teilen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

Die Funktion **OpenStreetMap-Bearbeitungen** von OsmAnd ermöglicht es Ihnen, zur globalen Kartierungs-Community beizutragen, indem Sie Kartendaten hinzufügen, ändern oder kommentieren.

1. ***Aktionsschaltflächen***. Sie können die *Aktionsschaltflächen* auf dem Bildschirm "Meine Orte" verwenden, um Ihre Liste von Notizen zu verwalten:  

    ![Teilen](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Dateien zu OSM hochladen** — Senden Sie Ihre Notizen und Daten an OpenStreetMap, um zur Community beizutragen.

    - **Exportieren** (*nur Android*) — Speichern Sie Ihre Notizen und POIs als Dateien zur externen Verwendung oder als Backup, mit Optionen zum Exportieren als OSM-Notizen, POIs oder alle Daten zusammen.

    - **Löschen** — Entfernt ausgewählte Elemente dauerhaft aus Ihrer Liste.


2. ***Drei-Punkte-Menü***. Sie können bestimmte POIs oder Notizen über das *Drei-Punkte-Menü* neben jeder Notiz verwalten:  

    ![Drei-Punkte-Menü](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Bearbeitung zu OSM hochladen** — Senden Sie Ihre Änderungen oder Bearbeitungen an OpenStreetMap, damit andere sie sehen können.

    - **Auf Karte anzeigen** — Zeigt den spezifischen Standort des POI oder der Notiz auf der Karte an.

    - **OSM-Änderung/Notiz ändern** — Nehmen Sie weitere Bearbeitungen an dem POI oder der Notiz vor, die bereits zu OpenStreetMap hinzugefügt wurden.

    - **Löschen** — Entfernt den ausgewählten POI oder die Notiz aus Ihrer Liste.

Schritt-für-Schritt-Anleitungen finden Sie im Artikel zum [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md).


## Audio-/Videonotizen {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio-Video-Plugin Menü Meine Orte Drei Aktionen](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Das **Audio-/Videonotizen-Plugin** ermöglicht es Ihnen, Multimedianotizen zu erstellen, die mit bestimmten Kartenstandorten verknüpft sind. Diese Notizen werden in **Meine Orte** unter dem **A/V-Notizen-Tab** gespeichert.

1. ***Aktionsschaltflächen***. Sie können die *Aktionsschaltflächen* am unteren Rand des Bildschirms "Meine Orte" verwenden, um Ihre Liste von Notizen zu verwalten:  

    ![Teilen](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Öffnet eine Auswahl von Sortiermethoden, *Nach Typ* oder *Nach Datum*, und sortiert die Liste bei Auswahl entsprechend.

    - **<Translate android="true" ids="shared_string_share"/>** — Zeigt eine Checkliste aller Notizen an, einschließlich derer, die GPX-Dateien als Wegpunkte hinzugefügt wurden. Zuerst werden die erforderlichen Notizen markiert, dann schlägt das *Teilen*-Symbol in der oberen rechten Ecke des Bildschirms verfügbare Freigabeoptionen vor, und schließlich werden diese Notizen gemäß der ausgewählten Option verfügbar.

    - **Mit GPX-Wegpunkten teilen** — Sie können die als Wegpunkte ausgewählten Notizen im Menü *Meine Orte* teilen, indem Sie ihnen [GPX-Daten](../plugins/audio-video-notes.md#share-with-gpx-waypoints) über die Schaltfläche **Teilen** am unteren Rand des *A/V-Notizen*-Tab-Bildschirms hinzufügen.

    - **<Translate android="true" ids="shared_string_delete"/>** — Zeigt eine Checkliste nur für Audio-, Foto- und Videonotizen an. Markieren Sie zuerst die nicht benötigten Notizen, tippen Sie dann auf das *Löschen*-Symbol in der oberen rechten Ecke des Bildschirms. Nach der Bestätigung werden die ausgewählten Notizen dauerhaft gelöscht.


2. ***Drei-Punkte-Menü***. Sie können bestimmte Audio-, Video- oder Fotonotizen über das *Drei-Punkte-Menü* neben jeder Notiz verwalten:  

    ![Drei-Punkte-Menü](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Zeigt die ausgewählte Audio-, Video- oder Fotonotiz direkt an oder hört sie an.

    - **<Translate android="true" ids="shared_string_share"/>** — Teilt die Notiz mit anderen über verschiedene Apps oder Plattformen.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Zeigt den zugehörigen Ort und das [Kontextmenü](../plugins/audio-video-notes#show-on-the-map) der Notiz auf der Karte an.

    - **<Translate android="true" ids="shared_string_rename"/>** — Ändern Sie den Namen der Notiz in etwas Beschreibenderes oder Relevanteres.

    - **<Translate android="true" ids="shared_string_delete"/>** — Ausgewählte Notizen werden dauerhaft aus Ihrer Sammlung gelöscht.

Weitere Informationen finden Sie auf der Seite des [Audio-/Videonotizen-Plugins](../plugins/audio-video-notes.md).


<!--
### Mit GPX-Wegpunkten teilen {#share-with-gpx-waypoints}

![Teilen](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

Sie können die als Wegpunkte ausgewählten Notizen im Menü *Meine Orte* teilen, indem Sie ihnen [GPX-Daten](../plugins/audio-video-notes.md#share-with-gpx-waypoints) über die Schaltfläche **Teilen** am unteren Rand des *A/V-Notizen*-Tab-Bildschirms hinzufügen.

### Einzelne Notiz verwalten {#manage-single-note}

![Drei-Punkte-Menü](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

Sie können bestimmte Audio-, Video- oder Fotonotizen über das **Drei-Punkte-Menü** neben jeder Notiz verwalten:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Zeigt die ausgewählte Audio-, Video- oder Fotonotiz direkt an oder hört sie an.
- **<Translate android="true" ids="shared_string_share"/>**. Teilt die Notiz mit anderen über verschiedene Apps oder Plattformen.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Zeigt den zugehörigen Ort und das [Kontextmenü](../plugins/audio-video-notes#actions-in-map-context-menu) der Notiz auf der Karte an.
- **<Translate android="true" ids="shared_string_rename"/>**. Ändern Sie den Namen der Notiz in etwas Beschreibenderes oder Relevanteres.
- **<Translate android="true" ids="shared_string_delete"/>**. Ausgewählte Notizen werden dauerhaft aus Ihrer Sammlung gelöscht.
-->

## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)