---
source-hash: 8c47a63c8420d1c5228963331f215a7aa5c8808f6c030e2e1fc5ca817821edbb
sidebar_position: 4
title: Karte konfigurieren
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Überblick {#overview}

Das Menü **Karte konfigurieren** ist ein wichtiger Punkt im OsmAnd-*Hauptmenü*, in dem Sie die Kartenanzeige an Ihre Bedürfnisse anpassen können. Sie können Favoritenpunkte, Navigationsmarker oder spezielle Sonderziele auf der Karte hervorheben, bestimmte Routen oder GPX-Dateien von Drittanbietern anzeigen, Geländedaten, Satellitenbilder oder andere verfügbare Rasterbilder überlagern, Informationen zu öffentlichen Verkehrsmitteln anzeigen und den Kartenstil ändern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Abschnitt **Anzeigen**:

![Karte konfigurieren Android](@site/static/img/map/configure_map_show1_andr.png) ![Karte konfigurieren Android](@site/static/img/map/configure_map_show2_andr.png)

Abschnitt **Topographie**:

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

- [Kartenstil-Parameter](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (oder **<Translate ios="true" ids="map_widget_renderer"/>**) ist eine Gruppe von Einstellungen, mit denen Sie die Anzeige der Hauptkarte ändern können.
- [Kartenebenen](#map-layers). Diese Ebenen ermöglichen es Ihnen, Informationen über (oder unter) der Hauptkartenebene zu platzieren, ändern aber nicht die Anzeige der Karte selbst.

**Hinweise:**

- Um die Informationen auf dem Bildschirm (Widgets, Symbole) zu ändern, können Sie Einstellungen in der [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md) vornehmen.
- Die Einstellungen für die Kartenkonfiguration hängen von Ihrem [Profil](../personal/profiles.md) ab.
- Achtung – das Menü „Karte konfigurieren“ **schließt sich**, wenn Sie auf das Kartenfeld tippen.

## Kartenebenen {#map-layers}

- [Vektorkartenebene](../map/vector-maps.md) – zeigt alle Vektorkarteninformationen einschließlich OpenStreetMap, Höhenlinien und nautischen Daten an.
- [Kartenrasterquellen](../map/raster-maps.md#select-raster-maps) – ermöglicht die Auswahl von Unterlagen/Hauptquellen/Überlagerungskarten mit Transparenzstufen.
- [Gelände](../plugins/topography.md#hillshade-slope-and-altitude-layers) – zeigt Hang-/Schattierungsinformationen, 3D-Relief an.
- [Grenzen heruntergeladener Karten](../map/vector-maps.md#show-borders) – zeigt alle Grenzen heruntergeladener Karten auf der Hauptkartenebene an.
- [Koordinatengitter](../map/vector-maps.md#coordinates-grid) – steuert die Sichtbarkeit des Koordinatengitters auf der Karte.

## Kartendaten-Ebenen {#map-data-layers}

- [Favoriten](../map/point-layers-on-map.md) – zeigt Favoritenpunkte an.
- [POI](../map/point-layers-on-map.md) – zeigt Sonderziele ausgewählter Kategorien an.
- [Kartenmarker](../map/point-layers-on-map.md) – zeigt Kartenmarker an.
- [Überlagerungsbeschriftungen](../map/point-layers-on-map.md) – zeigt Namen von Punkten und Favoriten auf der Karte an.
- [Transport](../map/vector-maps.md#transport) – zeigt Haltestellen des öffentlichen Nahverkehrs an.
- [Tracks](../map/tracks/index.md) – zeigt importierte, geplante oder aufgezeichnete Tracks über der Karte an.
- [Street-Level-Bilder](../plugins/mapillary.md#map-layer) – zeigt Punkte mit verfügbaren Street-Level-Bildern an.
- [Reiseführer](../plan-route/travel-guides.md) – zeigt Reiseführer auf der Karte an.
- [Wikipedia](../plugins/wikipedia.md) – hebt Wikipedia-Artikel hervor, die mit der Karte verknüpft sind.
- [Andere Plugin-Ebenen](../plugins/index.md#configure-plugin) – viele Plugins fügen ihre Ebenen mit zusätzlichen Informationen hinzu.

## Kartenstil-Parameter {#map-style-parameters}

Die Einstellungen des Kartenstils hängen vom angezeigten Hauptkartenstil ab. Mehr dazu erfahren Sie im Artikel [Kartenstile](../map/vector-maps).

- [Kartenstil](../map/vector-maps.md#default-map-styles) – beinhaltet OsmAnd (Stadt), Topo, Nautisch und andere.
- [Kartenmodus](../map/vector-maps.md#map-mode) – ermöglicht die Auswahl der Kartenansicht und Navigation je nach Tageszeit.
- [Kartenlupe](../map/vector-maps.md#map-magnifier) – ermöglicht die Änderung der Vergrößerung der Karte.
- [Textgröße](../map/vector-maps.md#text-size) – ermöglicht die Vergrößerung oder Verkleinerung der Textgröße auf der Karte.
- [Kartensprache](../map/vector-maps.md#map-language) – ermöglicht die Auswahl der bevorzugten Sprache, die auf der Karte angezeigt wird.
- [Details](../map/vector-maps.md#details) – zeigt bestimmte Objekte an.
- [Ausblenden](../map/vector-maps.md#hide) – blendet bestimmte Objekte aus.
- [Routen](../map/vector-maps.md#routes) – ermöglicht das Hervorheben von Routen und deren Symbolen.

## UI-Anpassung (Android) {#ui-customization-android}

Für jedes ausgewählte Profil im Android-System können Sie die Reihenfolge der Menüpunkte <Translate android="true" ids="configure_map"/> ändern, die Elemente ausblenden, die Standardeinstellungen zurücksetzen oder sie von einem anderen Profil kopieren. Dies wird Ihre Interaktion mit der OsmAnd-App verbessern.

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Elemente der Kartenkonfiguration ](@site/static/img/settings/configure-screen-ui-customization.png)


> *Zuletzt aktualisiert: Februar 2025*