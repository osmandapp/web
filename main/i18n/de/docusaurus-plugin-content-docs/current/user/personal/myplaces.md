---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
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


## Übersicht {#overview}

**My Places** ist die zentrale Anlaufstelle in der OsmAnd-App zur Verwaltung und Anpassung aller persönlichen Daten. In diesem Bereich können Sie [Favoritenpunkte](#favorites) organisieren, die als wichtig oder häufig besucht markiert sind. Der Tab [Tracks](#tracks) ermöglicht es Ihnen, GPX-Dateien anzuzeigen, zu importieren, aufzuzeichnen und zu erstellen, um eine detaillierte Historie Ihrer Routen und Reisen zu führen. Sie können auch Ihre [OpenStreetMap-Bearbeitungen](#openstreetmap-edits) verwalten, was es einfach macht, zu Kartenverbesserungen und -aktualisierungen beizutragen. Das [Audio-/Videonotizen](#audiovideo-notes)-Plugin und die Widgets ermöglichen es Android-Nutzern, Multimedianotizen zu erstellen und zu speichern, die sich auf bestimmte Orte beziehen und so ihren Reisen Kontext verleihen. Auf iOS bietet My Places außerdem Zugriff auf gespeicherte [Reiseführer](#travel-guides), mit denen Sie gespeicherte Reiseinhalte organisieren und schnell öffnen können.

## Meine Orte Menü {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Meine Orte ist nach Kategorien organisiert. Wählen Sie einen Tab aus, um die entsprechenden Daten zu verwalten.

**Hinweis:** Alle im Menü *Meine Orte* gespeicherten Daten können über Anwendungen auf Ihrem Gerät in einem speziellen `.osf`-Format verschoben werden. Dieser Prozess vereinfacht das Speichern und Übertragen von Daten zwischen Geräten und ermöglicht es Ihnen, sie mit anderen OsmAnd-Nutzern zu teilen. 

### Favoriten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Favoriten** ermöglichen es Ihnen, wichtige oder häufig besuchte Orte mit einem Lesezeichen zu versehen. Diese Favoritenpunkte sind in Ordnern organisiert und können mit verschiedenen Farben, Formen und Symbolen angepasst werden. Sie können schnell zu jedem Favoritenort über das Menü **Meine Orte** navigieren, ohne wiederholt danach suchen zu müssen.

Detailliertere Anweisungen finden Sie im Artikel [Favoriten](../personal/favorites.md).

### Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Tracks** bieten leistungsstarke Werkzeuge zum Aufzeichnen, Erstellen und Verwalten von Routen in OsmAnd. Sie können für die [Navigation](../navigation/setup/gpx-navigation.md), die [Aufzeichnung von Fahrten](../plugins/trip-recording.md) oder die [Integration](../personal/tracks/manage-tracks.md#import) externer GPX-Dateien verwendet werden.

Eine umfassende Anleitung finden Sie im Artikel [Tracks verwalten](../personal/tracks/manage-tracks.md).

### OpenStreetMap-Bearbeitungen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

Die Funktion **OpenStreetMap-Bearbeitungen** von OsmAnd ermöglicht es Ihnen, zur globalen Kartierungs-Community beizutragen, indem Sie Kartendaten hinzufügen, ändern oder kommentieren.

Schritt-für-Schritt-Anleitungen finden Sie im Artikel zum [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md).

### Audio-/Videonotizen {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio-Video-Plugin Menü Meine Orte Drei Aktionen](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Das **Audio-/Videonotizen-Plugin** ermöglicht es Ihnen, Multimedianotizen zu erstellen, die mit bestimmten Kartenstandorten verknüpft sind. Diese Notizen werden in **Meine Orte** unter dem **A/V-Notizen-Tab** gespeichert.

Weitere Informationen finden Sie auf der Seite des [Audio-/Videonotizen-Plugins](../plugins/audio-video-notes.md).

### Reiseführer (iOS) {#travel-guides}

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

Der Abschnitt **Reiseführer** enthält gespeicherte Reiseführer und Artikel, die für den Offline-Zugriff gespeichert wurden. Sie können Ihre gespeicherten Reiseinhalte über Meine Orte schnell öffnen, organisieren und verwalten. Der Abschnitt Reiseführer wird nur angezeigt, wenn mehr als ein Reiseführer gespeichert wurde.

Detaillierte Informationen finden Sie im Artikel [Reiseführer](../plan-route/travel-guides.md).

## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoriten](../personal/favorites.md)
- [OpenStreetMap-Bearbeitung](../plugins/osm-editing.md)
- [Audio-/Videonotizen](../plugins/audio-video-notes.md)
- [Reiseführer](../plan-route/travel-guides.md)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)