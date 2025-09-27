---
source-hash: cc4a39deaa5305aa029009f3f9baff5a545f3a163336fd6ca3c80b085166c351
sidebar_position: 4
title:  Karte konfigurieren
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Übersicht {#overview}

Das Menü **Karte konfigurieren** ist ein wichtiger Punkt im OsmAnd *Hauptmenü*, in dem Sie die Kartenanzeige an Ihre Bedürfnisse anpassen können. Sie können Favoriten, Navigationsmarkierungen oder spezielle Sonderziele auf der Karte hervorheben, bestimmte Routen oder GPX-Dateien von Drittanbietern anzeigen, Geländeinformationen, Satellitenbilder oder andere verfügbare Rasterbilder überlagern, Informationen zum öffentlichen Nahverkehr anzeigen und den Kartenstil ändern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Abschnitt **Anzeigen**:

![Karte konfigurieren Android](@site/static/img/map/configure_map_show1_andr.png) ![Karte konfigurieren Android](@site/static/img/map/configure_map_show2_andr.png)

Abschnitt **Topografie**:

![Karte konfigurieren Android](@site/static/img/map/configure_map_topography_andr.png)

Abschnitt **OpenStreetMap**:

![Karte konfigurieren Android](@site/static/img/map/configure_map_osm_andr.png)

Abschnitte **Routen und Kartenrendering**:

![Karte konfigurieren Android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte konfigurieren iOS](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Das Menü **<Translate android="true" ids="configure_map"/>** ist in zwei Kategorien unterteilt:

- [Kartenstil-Parameter](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (oder **<Translate ios="true" ids="map_widget_renderer"/>**) ist eine Gruppe von Einstellungen, mit denen Sie die Art und Weise, wie die Hauptkarte angezeigt wird, ändern können.
- [Kartenebenen](#map-layers). Diese Ebenen ermöglichen es Ihnen, Informationen über (oder unter) der Hauptkartenebene zu platzieren, ändern aber nicht die Anzeige der Karte selbst.

**Hinweise:**

- Um die Informationen auf dem Bildschirm (Widgets, Symbole) zu ändern, können Sie Einstellungen im Menü [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md) vornehmen.
- Die Einstellungen für "Karte konfigurieren" hängen von Ihrem [Profil](../personal/profiles.md) ab.
- Achtung - das Menü "Karte konfigurieren" **schließt sich**, wenn Sie auf das Kartenfeld tippen.

## Kartenebenen {#map-layers}

- [Vektorkartenebene](../map/vector-maps.md) - zeigt alle Vektorkarteninformationen an, einschließlich OpenStreetMap, Höhenlinien und nautische Daten.
- [Karten-Rasterquellen](../map/raster-maps.md#select-raster-maps) - ermöglicht die Auswahl von Untergrund- / Hauptquellen- / Überlagerungskarten mit Transparenzstufen.
- [Gelände](../plugins/topography.md#hillshade-slope-and-altitude-layers) - zeigt Hang- / Schummerungsinformationen, 3D-Relief an.
- [Grenzen der heruntergeladenen Karten](../map/vector-maps.md#show-borders) - zeigt alle Grenzen der heruntergeladenen Karten auf der Hauptkartenebene an.
- [Koordinatennetz](../map/vector-maps.md#coordinates-grid) - steuert die Sichtbarkeit des Koordinatennetzes auf der Karte.

## Kartendatenebenen {#map-data-layers}

   - [Favoriten](../map/point-layers-on-map.md) - zeigt Favoritenpunkte an.
   - [POI](../map/point-layers-on-map.md) - zeigt Sonderziele ausgewählter Kategorien an.
   - [Kartenmarkierungen](../map/point-layers-on-map.md) - zeigt Kartenmarkierungen an.
   - [Overlay-Beschriftungen](../map/point-layers-on-map.md) - zeigt Namen von Punkten und Favoriten auf der Karte an.
   - [Verkehrsmittel](../map/vector-maps.md#transport) - zeigt Haltestellen des öffentlichen Nahverkehrs an.
   - [Tracks](../map/tracks/index.md) - zeigt importierte, geplante oder aufgezeichnete Tracks über der Karte an.
   - [Bilder auf Straßenebene](../plugins/mapillary.md#map-layer) - zeigt Punkte mit verfügbaren Bildern auf Straßenebene an.
   - [Reiseführer](../plan-route/travel-guides.md) - zeigt Reiseführer auf der Karte an.
   - [Wikipedia](../plugins/wikipedia.md) - hebt Wikipedia-Artikel hervor, die mit der Karte verknüpft sind.
   - [Andere Plugin-Ebenen](../plugins/index.md#configure-plugin) - viele Plugins fügen ihre Ebenen mit zusätzlichen Informationen hinzu.

## Kartenstil-Parameter {#map-style-parameters}

Die Einstellungen für den Kartenstil hängen vom angezeigten Hauptkartenstil ab. Mehr dazu können Sie im Artikel [Kartenstile](../map/vector-maps) lesen.

   - [Kartenstil](../map/vector-maps.md#default-map-styles) - umfasst OsmAnd (Stadt), Topo, Nautisch und andere.
   - [Kartenmodus](../map/vector-maps.md#map-mode) - ermöglicht die Auswahl der Kartenansicht und Navigation je nach Tageszeit.
   - [Kartenvergrößerung](../map/vector-maps.md#map-magnifier) - ermöglicht die Änderung der Vergrößerung der Karte.
   - [Textgröße](../map/vector-maps.md#text-size) - ermöglicht das Vergrößern oder Verkleinern der Textgröße auf der Karte.
   - [Kartensprache](../map/vector-maps.md#map-language) - ermöglicht die Auswahl der bevorzugten Sprache, die auf der Karte angezeigt wird.
   - [Details](../map/vector-maps.md#details) - zeigt bestimmte Objekte an.
   - [Ausblenden](../map/vector-maps.md#hide) - blendet bestimmte Objekte aus.
   - [Routen](../map/vector-maps.md#routes) - ermöglicht das Hervorheben von Routen und deren Symbolen.


## UI-Anpassung (Android) {#ui-customization-android}

Für jedes ausgewählte Profil im Android-System können Sie die Reihenfolge der Menüpunkte von <Translate android="true" ids="configure_map"/> ändern, die Punkte ausblenden, die Standardeinstellungen zurücksetzen oder sie von einem anderen Profil kopieren. Dies hilft, Ihre Interaktion mit der OsmAnd-App zu verbessern.

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Menüpunkte Karte konfigurieren](@site/static/img/settings/configure-screen-ui-customization.png)