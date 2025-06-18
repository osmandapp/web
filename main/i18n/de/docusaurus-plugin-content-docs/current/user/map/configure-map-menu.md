---
source-hash: afd8d811e22a04d300b6aceb6838f774b297758d02f07d66e5b085e41519527d
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

Das Menü **Karte konfigurieren** ist ein wichtiger Punkt im *Hauptmenü* von OsmAnd, wo Sie die Kartenanzeige an Ihre Bedürfnisse anpassen können. Sie können bevorzugte Orte, Navigationsmarker oder spezielle Points of Interest (POIs) auf der Karte hervorheben, bestimmte Routen oder GPX-Dateien von Drittanbietern anzeigen, Geländedaten, Satellitenbilder oder andere verfügbare Rasterbilder überlagern, Informationen zu öffentlichen Verkehrsmitteln anzeigen und den Kartenstil ändern.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Abschnitt **Anzeigen**:

![Karte konfigurieren android](@site/static/img/map/configure_map_show1_andr.png) ![Karte konfigurieren android](@site/static/img/map/configure_map_show2_andr.png)

Abschnitt **Topografie**:

![Karte konfigurieren android](@site/static/img/map/configure_map_topography_andr.png)

Abschnitt **OpenStreetMap**:

![Karte konfigurieren android](@site/static/img/map/configure_map_osm_andr.png)

Abschnitte **Routen und Kartenrendering**:

![Karte konfigurieren android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte konfigurieren ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Das Menü **<Translate android="true" ids="configure_map"/>** ist in zwei Kategorien unterteilt:

- [Kartenstil-Parameter](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (oder **<Translate ios="true" ids="map_widget_renderer"/>**) ist eine Gruppe von Einstellungen, mit denen Sie die Anzeige der Hauptkarte ändern können.
- [Kartenebenen](#map-layers). Diese Ebenen ermöglichen es Ihnen, Informationen über (oder unter) der Hauptkartenebene zu platzieren, ändern aber nicht die Anzeige der Karte selbst.

**Hinweise:**

- Um die Informationen auf dem Bildschirm (Widgets, Symbole) zu ändern, können Sie Einstellungen im [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md) vornehmen.
- Die Einstellungen unter "Karte konfigurieren" hängen von Ihrem [Profil](../personal/profiles.md) ab.
- Achtung: Das Menü "Karte konfigurieren" **schließt sich**, wenn Sie auf die Karte tippen.

## Kartenebenen {#map-layers}

- [Vektorkartenebene](../map/vector-maps.md) – Zeigt alle Vektorkarteninformationen an, einschließlich OpenStreetMap-, Höhenlinien- und Nautikdaten.
- [Rasterkartenquellen](../map/raster-maps.md#select-raster-maps) – Ermöglicht die Auswahl einer Unterlage/Hauptquelle/Überlagerungskarte mit Transparenzstufen.
- [Gelände](../plugins/topography.md#hillshade-slope-and-altitude-layers) – Zeigt Informationen zu Steigung/Schattierung, 3D-Relief an.
- [Grenzen heruntergeladener Karten](../map/vector-maps.md#show-borders) – Zeigt alle Grenzen heruntergeladener Karten auf der Hauptkartenebene an.
- [Koordinatengitter](../map/vector-maps.md#coordinates-grid) – Steuert die Sichtbarkeit des Koordinatengitters auf der Karte.

## Kartendatenebenen {#map-data-layers}

- [Favoriten](../map/point-layers-on-map.md) - Zeigt Favoritenpunkte an.
- [POI](../map/point-layers-on-map.md) - Zeigt Points of Interest ausgewählter Kategorien an.
- [Kartenmarker](../map/point-layers-on-map.md) - Zeigt Kartenmarker an.
- [Überlagerungsbeschriftungen](../map/point-layers-on-map.md) - Zeigt Namen von Punkten und Favoriten auf der Karte an.
- [Transport](../map/vector-maps.md#transport) - Zeigt Haltestellen des öffentlichen Nahverkehrs an.
- [Tracks](../map/tracks/index.md) - Zeigt importierte, geplante oder aufgezeichnete Tracks über der Karte an.
- [Street-Level-Bilder](../plugins/mapillary.md#map-layer) - Zeigt Punkte mit verfügbaren Street-Level-Bildern an.
- [Reiseführer](../plan-route/travel-guides.md) - Zeigt Reiseführer auf der Karte an.
- [Wikipedia](../plugins/wikipedia.md) - Hebt Wikipedia-Artikel hervor, die mit der Karte verknüpft sind.
- [Andere Plugin-Ebenen](../plugins/index.md#configure-plugin) - Viele Plugins fügen ihre Ebenen mit zusätzlichen Informationen hinzu.

## Kartenstil-Parameter {#map-style-parameters}

Die Einstellungen für den Kartenstil hängen vom angezeigten Hauptkartenstil ab. Mehr dazu erfahren Sie im Artikel [Kartenstile](../map/vector-maps).

- [Kartenstil](../map/vector-maps.md#default-map-styles) - beinhaltet OsmAnd (Stadt), Topo, Nautik und andere.
- [Kartenmodus](../map/vector-maps.md#map-mode) - ermöglicht die Auswahl der Kartenansicht und Navigation je nach Tageszeit.
- [Kartenlupe](../map/vector-maps.md#map-magnifier) - ermöglicht die Änderung der Vergrößerung der Karte.
- [Textgröße](../map/vector-maps.md#text-size) - ermöglicht die Vergrößerung oder Verkleinerung der Textgröße auf der Karte.
- [Kartensprache](../map/vector-maps.md#map-language) - ermöglicht die Auswahl der bevorzugten Sprache, die auf der Karte angezeigt wird.
- [Details](../map/vector-maps.md#details) - zeigt bestimmte Objekte an.
- [Ausblenden](../map/vector-maps.md#hide) - blendet bestimmte Objekte aus.
- [Routen](../map/vector-maps.md#routes) - ermöglicht das Hervorheben von Routen und deren Symbolen.

## UI-Anpassung (Android) {#ui-customization-android}

Für jedes ausgewählte Profil im Android-System können Sie die Reihenfolge der Menüeinträge unter <Translate android="true" ids="configure_map"/> ändern, Einträge ausblenden, die Standardeinstellungen zurücksetzen oder sie aus einem anderen Profil kopieren. Dies hilft Ihnen, die Interaktion mit der OsmAnd-App zu verbessern.

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Karte konfigurieren Elemente](@site/static/img/settings/configure-screen-ui-customization.png)


> *Zuletzt aktualisiert: Februar 2025*