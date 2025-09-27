---
source-hash: a6e0323cbd4db8c2fd02e4930fceccaef76a54dd4ddb8b27261785baf14b6d7c
sidebar_position: 7
title:  Punkte auf der Karte
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Übersicht {#overview}

Die Karte kann Punkte wie [Favoriten](#favorites), [Sonderziele (POIs)](#points-of-interest-pois), [Markierungen](#markers), [Wikipedia](#-wikipedia), [Suchergebnisse](#search-results-poi), [Audio- und Videonotizen](#-audio--video-points-android) und [OSM-Bearbeitungen](#-osm-edit-points) anzeigen.


## Favoriten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favoriten-Ebene Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favoriten-Ebene iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

[Favoriten](../personal/favorites.md) sind spezielle, von Benutzern markierte Punkte. Standardmäßig erscheinen sie als gelbe Sterne auf der Karte, können aber mit beliebigen Farben, Formen und Symbolen angepasst werden. Sie werden auf der Karte ab Zoomstufe 6 sichtbar.

:::info
In der Android-Version von OsmAnd können Sie nur bestimmte Gruppen von Favoriten auf der Karte und während der Suche anzeigen. Gehen Sie zu *Menü → Meine Orte → Favoriten*, tippen Sie auf &#8942; und wählen Sie entweder *Auf der Karte anzeigen* oder nicht.
:::


## Namen von Favoriten und POIs {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Ebene für Favoritenbeschriftungen](@site/static/img/map/favorite_labels_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Ebene für Favoritenbeschriftungen](@site/static/img/map/favorite_labels_layer.png)

</TabItem>

</Tabs>

Standardmäßig werden Favoriten und Sonderziele (POIs) ohne Namen angezeigt, um die Karte nicht mit Text zu überladen. Sie können die Namen im Menü "Karte konfigurieren" aktivieren.


## Sonderziele (POIs) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI-Overlay Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![POI-Overlay iOS](@site/static/img/map/poi_overlay_ios.png)

</TabItem>

</Tabs>

[Sonderziele (POIs)](https://wiki.openstreetmap.org/wiki/Points_of_interest) sind bestimmte Orte, die mit einem Symbol auf der Karte markiert sind. Sie weisen auf interessante oder nützliche Orte und Objekte hin und sind Teil der [Vektorkarten](../map/vector-maps.md).

Die wichtigsten POIs werden automatisch auf der Karte angezeigt. Sie können jedoch einen bestimmten Typ von POIs (z. B. *Restaurants*) auswählen, und alle werden auf der Karte mit einem **orangen Kreis** hervorgehoben (ab Zoomstufe 9).

Detaillierte Informationen zu einem Sonderziel finden Sie im [Kontextmenü](../map/map-context-menu.md), das erscheint, wenn Sie auf den Punkt [tippen](../map/map-context-menu.md#select-an-object-single-tap).


### POI-Typen {#poi-types}

![Einzelne POI-Auswahl](@site/static/img/map/single_selection_android.png) ![Mehrfache POI-Auswahl](@site/static/img/map/multiple_selection_android.png)

Sie können einen oder mehrere der Standard-POI-Typen von OsmAnd auswählen oder Ihren eigenen [POI-Filter](../search/search-poi.md) erstellen und ihn auswählen, um POIs auf der Karte anzuzeigen.

**Android**. Tippen Sie auf die Schaltfläche unten links, um zwischen der Auswahl eines oder mehrerer Sonderziele zu wechseln.


### POIs im Kartenstil {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI im Kartenstil](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI im Topo-Stil](@site/static/img/map/poi_layer_topo_style.png)

</TabItem>

</Tabs>

Jedem POI-Typ in OsmAnd ist ein spezifisches Symbol und eine Farbe zugewiesen. Die [Zoomstufe](../map/vector-maps.md#details) und das Design von POIs können in einigen [Kartenstilen](../map/vector-maps.md#default-map-styles) unterschiedlich sein.

[Lesen Sie mehr](../map/vector-maps.md#hide).


## Markierungen {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Kartenmarkierungen Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Kartenmarkierungen iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

[Kartenmarkierungen](../personal/markers.md) sind temporäre Punkte, die auf der Karte als Flaggen markiert werden. Ihr Aussehen kann mit **Pfeilen** (Pfeile auf der Karte) und **Entfernungsanzeige** (Richtungslinien) angepasst werden.

Mehr über das Aussehen der Markierungen können Sie in diesem [Artikel](../personal/markers#appearance-on-the-map) lesen.


## Strecken-Wegpunkte {#track-waypoints}

![Track auf der Karte](@site/static/img/map/track_point_on_map.png)

Streckenpunkte (Wegpunkte) sind Teil von Trackdateien (GPX). Diese Punkte werden automatisch angezeigt, wenn der Track auf der Karte ist. Sie sehen ähnlich aus wie [Favoriten](#favorites) und können ähnlich konfiguriert werden - Symbol, Namen, Farbe, Form. Wie man einen Wegpunkt erstellt und hinzufügt, lesen Sie im [Artikel](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).

[Lesen Sie mehr](../map/tracks/index.md) über Tracks auf der Karte.


## Suchergebnisse (POI) {#search-results-poi}

![POI-Suche](@site/static/img/map/poi_search.png) ![POI-Suchergebnis](@site/static/img/map/poi_search_result.png)

Suchergebnisse können als spezielle POI-Ebene auf der Karte angezeigt werden. Tippen Sie während der Suche auf eine spezielle Zeile (**<Translate android="true" ids="shared_string_show_on_map"/>**), um POIs auf der Karte anzuzeigen.

Um die POIs auszuschalten, klicken Sie auf das **X** in der oberen rechten Ecke.

Lesen Sie mehr über die [Suche](../search/index.md).


## * Bilder auf Straßenebene {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary-Filter](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary Straßenansicht](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Bilder auf Straßenebene (Mapillary)](../plugins/mapillary.md) werden als grüne Punkte auf der Karte angezeigt. An diese Punkte sind Fotos der Straßenansicht angehängt. Sie können einen [Filter](../plugins/mapillary.md#data-filtering) erstellen und die Fotos auswählen, die Sie auf der Karte anzeigen möchten. Um ein Foto der Straßenansicht zu öffnen, tippen Sie auf den grünen Punkt.

Erfordert das [Mapillary-Plugin](../plugins/mapillary.md).


## * Parkplatzpunkt {#-parking-point}

![Begrenztes Parken](@site/static/img/map/context_menu_limited_parking.png) ![Unbegrenztes Parken](@site/static/img/map/context_menu_unlimited_parking.png)

Ein [Parkplatzpunkt](../plugins/parking.md) ist ein von Benutzern auf der Karte markierter Punkt, um Informationen über den genauen Standort des Fahrzeugs zu speichern. Er kann in unbeschränkte und beschränkte Parkzonen unterteilt werden.

Erfordert das [Parkposition-Plugin](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia auf der Karte](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Wikipedia-Sprache - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd verfügt über spezielle Sonderziele, die mit einem „W“-Logo gekennzeichnet und mit Wikipedia-Artikeln verknüpft sind. Diese Punkte können wie jeder andere POI-Typ angezeigt werden, über die Suche oder indem Sie zu <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/> gehen. Es gibt jedoch eine spezielle Möglichkeit, Wikipedia-Artikel nach **verfügbaren Sprachen** zu filtern.

[Lesen Sie mehr](../plugins/wikipedia.md) darüber, wie Sie die Wikipedia-Funktion in OsmAnd herunterladen und verwenden.


## * Audio-/Videonotizen (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Audio-/Videonotizen sind Punkte mit Audio-, Foto- und Videodaten auf der Karte, die von Benutzern erstellt wurden.

Erfordert das [Audio-/Videonotizen-Plugin](../plugins/audio-video-notes.md).


## * OSM-Bearbeitungspunkte {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM-Bearbeitungs-POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM-Bearbeitungs-POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

OSM-Bearbeitungspunkte sind von Benutzern erstellte POIs, die dem [OpenStreetMap-Projekt](https://www.openstreetmap.org/) hinzugefügt werden sollen.

Erfordert das [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md).


## * OSM-Notizen {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM-Notizen](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM-Notizen](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

OSM-Notizen sind von Benutzern erstellte POIs zur Meldung von Problemen mit Kartendaten in [OpenStreetMap](https://www.openstreetmap.org/). Neue Notizen (noch nicht auf OpenStreetMap hochgeladen) sind grün mit einem **+** markiert, geschlossene Notizen sind grün mit einem „V“ markiert und offene Notizen sind rot markiert. Sie können die Zoomstufe für die Anzeige von Notizen anpassen und wählen, ob geschlossene Notizen angezeigt oder ausgeblendet werden sollen.

Erfordert das [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md).


## Punkte entlang der Route {#points-along-the-route}

Wegpunkte, POIs, Favoritenpunkte und Audio-/Videonotizen beziehen sich alle auf das Konzept des Speicherns von Standorten und Routen im [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Sie können [dieselben Tags](../map/tracks/track-context-menu.md#display-custom-gpx-tags) verwenden, um sie zu beschreiben und zu bearbeiten.

[Wegpunkte](#track-waypoints) sind einzelne Punkte auf einer Karte oder Route. Sie können verwendet werden, um bestimmte Orte zu markieren, die für die Navigation oder die Aufzeichnung Ihrer Reisen wichtig sein können. Sie können beispielsweise einen Wegpunkt auf der Karte erstellen, um eine wichtige Kreuzung oder eine Richtungsänderung anzuzeigen.

[Sonderziele (POIs)](#points-of-interest-pois) sind Orte von besonderem Interesse für Benutzer. Dies können Sehenswürdigkeiten, Restaurants, Hotels, Tankstellen und andere interessante Orte sein, die Sie möglicherweise notieren oder besuchen möchten.

[Favoritenpunkte](#favorites) sind Orte, die Benutzer als besonders wichtig oder interessant empfinden und in ihrer Liste der Lieblingsorte speichern. Orte können jeden Standort umfassen, den Sie später finden und wieder besuchen möchten.

[Audio-/Videonotizen](#-audio--video-points-android). Im GPX-Format können Sie Audio- und Videoaufnahmen als Wegpunkte speichern. Dies ermöglicht es Ihnen, Mediendateien mit bestimmten Orten auf der Karte oder Route zu verknüpfen.

Alle diese Punkttypen können im GPX-Format gespeichert werden, um Ihnen Standortinformationen zu liefern und bei der Navigation und Routenplanung zu helfen. Sie dienen unterschiedlichen Zwecken, aber die allgemeine Idee ist, geografische Informationen zu speichern und zu übertragen, damit Sie sie bei Ihren Navigationsaufgaben verwenden können.


## Verwandte Artikel {#related-articles}

- [Menü "Karte konfigurieren"](../map/configure-map-menu.md)
- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)