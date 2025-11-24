---
source-hash: d8248c5c722b00e6606d65117fa3c589fbac4e058e65a8fabb1c829d36001b28
sidebar_position: 5
title:  Vektorkarten (Kartenstile)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Übersicht {#overview}

Vektorkarten sind als Standard-Kartendatenquelle für OsmAnd vorgesehen, daher **müssen Sie sie auf Ihr Gerät herunterladen**. Vektorkarten unterstützen eine große Anzahl von Kartenstilen für verschiedene Aktivitäten wie Radfahren, Wandern, Autofahren oder Schneemobilfahren und andere.

Jeder Kartenstil kann angepasst werden, um bestimmte Objekte hervorzuheben oder auszublenden und zwischen Tag- und Nachtmodus zu wechseln. Vektorkartendaten können durch Vektordaten erweitert und im Standard-Kartenstil angezeigt werden, wie z. B. *Höhenlinien*-Informationen. Sie können *Ihren eigenen OsmAnd-Kartenstil erstellen*, um die gewünschten Informationen darzustellen.

Vektorkarten stellen räumliche Daten dar, wie Straßen, Gebäude, Punkte und Polygone, unter Verwendung mathematischer Geometrie, die in binärem Format gespeichert ist. Jedes Element (Knoten, Linie oder Polygon) wird durch Koordinaten definiert und dynamisch gerendert entsprechend dem Zoomniveau und Kartenstil.

Da Vektordaten nicht als feste Bilder gespeichert sind, kann ihr Erscheinungsbild, einschließlich Farbe, Linienbreite, Transparenz oder Muster, leicht geändert werden. Dieser Ansatz ermöglicht effizientes Rendering, geringen Speicherverbrauch und reibungsloses Skalieren auf jedem Zoomniveau ohne Qualitätsverlust.

:::info Hinweis
Sehr kleine Polygone können während der Kartendatengenerierung vereinfacht oder verzerrt werden. Objekte mit einer Fläche kleiner als etwa ein Quadratmeter werden möglicherweise nicht angezeigt. Für eine korrekte Visualisierung sollten kleine Merkmale als einzelne Knoten statt als Polygone kartiert werden.
:::


## Anwendungsfälle {#use-cases}

Anpassbare Kartenstile sind einer der Hauptvorteile von OsmAnd. Sie können die Kartenanzeige an sich und Ihre Hobbys anpassen, die Anzeige oder das Ausblenden bestimmter Kartenobjekte, die Größen und Farben dieser Objekte anpassen und den Maßstab der Anzeige bestimmter Objekte ändern.


## Standard-Kartenstile {#default-map-styles}

OsmAnd bietet Ihnen standardmäßig viele passende Kartenstile und Datenebenen. Dieser Abschnitt beschreibt die wichtigsten für den Tag- und Nachtmodus.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![OsmAnd-Kartenstil](@site/static/img/map/map-style-osmand-with-routes.png)  

Der Standard-Kartenstil von OsmAnd schafft einen Ausgleich zwischen Detailreichtum und Einfachheit und ist somit ideal für die Erkundung von Städten und der Natur. Er zeigt städtische Merkmale wie Straßen, Gebäude und Haltestellen detailliert an, während er visuelles Durcheinander reduziert, indem er die Karten übersichtlicher macht.

Zu den Hauptvorteilen gehören Routenführung, Oberflächenqualität, Zugangsbeschränkungen, Straßenschilder, Wegdarstellungen nach SAC-Skala, Sportanlagen und topografische Details wie Höhenlinien.


### Touring-Ansicht {#touring-view}

![Kartenstil Touring-Ansicht](@site/static/img/map/map-style-touring.png)

Touring-Stil mit hohem Kontrast und maximaler Detailtreue. Beinhaltet alle Optionen des Standard-OsmAnd-Stils und zeigt dabei so viele Details wie möglich an, insbesondere Straßen, Wege und andere Reisemöglichkeiten. Klare Unterscheidung der Straßentypen in einem *Tourenatlas*. Geeignet für den Tag-, Nacht- und Außeneinsatz.

### UniRS und LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Die Stile UniRS und LightRS sind Autorenstile, die die grundlegenden Karteninformationen in unterschiedlichen Farbschemata wiedergeben.

- **UniRS-Stil**. Dieser Stil ist eine modifizierte Version des Standardstils, um den Kontrast für Fuß- und Radwege zu verbessern. Er behält das klassische Mapnik-Farbschema bei.

    ![LightRS-Kartenstil](@site/static/img/map/map-style-lightrs.png)

- **LightRS-Stil**. Dies ist ein einfacher Fahrstil mit einem sanften Nachtmodus. Er hebt Straßen in einer kontrastierenden orangen Farbe hervor, dimmt sekundäre Kartenobjekte und zeigt topografische Merkmale wie Höhenlinien an.

    ![UniRS-Kartenstil](@site/static/img/map/map-style-unirs.png)

### Nautisch {#nautical}

![Nautischer Kartenstil](@site/static/img/map/map-style-nautical.png)

Dies ist ein Stil für die nautische Navigation, der Bojen, Leuchttürme, Flussrouten, Seewege, Seezeichen, Häfen, nautische Marken und Tiefenlinien darstellt. Lesen Sie mehr im Abschnitt [Nautischer Kartenstil](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Marine-Kartenstil](@site/static/img/map/map-style-marine.png)

Dies ist ein fortschrittlicher nautischer Kartenstil mit Lichtsektoren, vollständigen Leuchtturmcharakteristiken und anderen detaillierten maritimen Merkmalen für realistische und genaue marine Navigation. Weitere Details finden Sie im Abschnitt [Marine-Kartenstil](../plugins/nautical-charts.md#marine-map-style).

### Winter und Ski {#winter-and-ski}

![Winter- & Ski-Kartenstil](@site/static/img/map/map-style-winter-ski.png)

Dies ist ein Stil für den Skisport, der Pisten, Lifte und Langlaufloipen beschreibt und sekundäre Kartenobjekte ausblendet. Der **Winter- und Ski-Stil** soll Ihnen bei der Navigation im Wintersport helfen.

Sie können die Skipisten und andere Details wie den Schwierigkeitsgrad der Pisten und Liftmarkierungen sehen. Zu den Hauptvorteilen gehören die praktische Anzeige von Pisten, Liften und anderen Skifunktionen. Weniger ablenkende sekundäre Objekte der Karte. Lesen Sie mehr im Artikel [Skikarten](../plugins/ski-maps.md).

### Topo {#topo}

![Topo-Kartenstil](@site/static/img/map/map-style-topo.png)

Dieser Stil ist für Wandern, Camping und Radfahren in der Natur konzipiert. Er zeichnet sich durch kontrastreiche Straßen und natürliche Merkmale, verschiedene Arten von Wegen, erweiterte Höhenlinienoptionen und zusätzliche Details aus. Er ist im Freien gut lesbar. Die Einstellung *Oberflächenintegrität* ermöglicht es Ihnen, die Qualität der Straße zu unterscheiden.

### OSM-carto {#osm-carto}

![OSM-carto-Kartenstil](@site/static/img/map/map-style-osm-carto.png)

Dieser Stil imitiert den Standard-[OpenStreetMap-Webstil](https://www.openstreetmap.org/). Der Quellcode der Webversion ist auf [Github](https://github.com/gravitystorm/openstreetmap-carto) verfügbar, der OsmAnd-Code ist auf [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml) verfügbar.

### Wüste {#desert}

![Wüsten-Kartenstil](@site/static/img/map/map-style-desert.png)

Entwickelt für Wüsten und andere dünn besiedelte Regionen, bietet detailliertere Karteninformationen.

### Offroad {#offroad}

![Offroad-Kartenstil](@site/static/img/map/map-style-offroad.png)

Dieser Stil wurde für die Offroad-Navigation entwickelt, basiert auf dem [Topo](#topo)-Kartenlayout und funktioniert gut mit Satellitenbildern als Unterlage. Er zeichnet sich durch dünnere Hauptstraßen aus, um Pfade, Feldwege, Radrouten und andere Offroad-Wege hervorzuheben, was ihn ideal für die Erkundung unbefestigter Routen in ländlichen oder abgelegenen Gebieten macht.

### Schneemobil {#snowmobile}

![Schneemobil-Kartenstil](@site/static/img/map/map-style-snowmobile.png)

Dieser auf die Schneemobil-Navigation zugeschnittene Stil hebt schneemobiltaugliche Wege, Straßen und Spuren hervor. Er hebt spezielle Wege in schneereichen Regionen hervor und bietet eine klare Navigation durch schneebedecktes Gelände, wo Standardstraßen möglicherweise nicht verfügbar sind.


## Kartenlegende {#map-legend}

Die Kartenlegende dient als Schlüssel zum Verständnis der in OsmAnd-Karten verwendeten Symbole. Sie erklärt die Bedeutung verschiedener Kartensymbole, einschließlich Punkten, Linien und Flächen. Zum Beispiel deuten Symbole wie blaue gewundene Linien auf Flüsse hin, während verschiedene Farben und Formen Gebäude, Wege und Routen darstellen können.

Die Legende hilft Benutzern zu interpretieren, was sie auf der Karte sehen. Sie können die vollständige OsmAnd-Kartenlegende [hier](../map-legend/index.md) aufrufen.


## Kartenschriftarten (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Kartenschriftarten Android-Version](@site/static/img/map/map_fonts.png) ![Kartenschriftarten-Version](@site/static/img/map/map_fonts_1.png)

Bei Karten in vereinfachtem/traditionellem Chinesisch, Japanisch und Koreanisch können falsche Zeichen oder Symbole (wie Quadrate) erscheinen, wenn auf Ihrem Gerät die erforderlichen Schriftarten fehlen. Dieses Problem tritt beim Rendern lokaler Namen auf und kann durch das Herunterladen der erforderlichen Schriftarten über OsmAnd gelöst werden.

Einige verwandte Schriftartenprobleme wurden auf GitHub dokumentiert: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Höhenlinien {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Kartenstil Höhenlinien](@site/static/img/map/contour_lines.png)

Höhenlinien werden in OsmAnd als Höhenlinien auf Vektorkarten angezeigt. Um sie zu verwenden, müssen Sie zuerst das [Topographie-Plugin](../plugins/topography.md) aktivieren, die erforderlichen regionalen Daten herunterladen und die Anzeige konfigurieren. Diese Funktion ist nicht standardmäßig aktiviert und erfordert einen [Kauf](../purchases/index.md).

Höhenlinien sind mit allen Kartenstilen kompatibel und können über das [Höhenlinien-Menü](../plugins/topography.md#contour-lines) angepasst werden. Weitere Details finden Sie im Artikel zum [Topographie-Plugin](../plugins/topography.md).


## * Nautische Tiefe {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Nautische Tiefenlinien stellen Bereiche gleicher Tiefe dar und helfen, Veränderungen der Unterwassertopographie zu visualisieren. Diese Funktion ist in allen Kartenstilen und -modi verfügbar und kann mit oder ohne aktiviertem Nautische-Kartenansicht-Plugin angepasst werden.

Weitere Details zur nautischen Kartenansicht finden Sie auf der [Seite des Nautik-Karten-Plugins](../plugins/nautical-charts).


## Grenzen anzeigen {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Mit dieser Funktion können Sie die Sichtbarkeit der Grenzen für zuvor heruntergeladene Karten aus der Liste der verfügbaren Karten umschalten. Ihr Hauptzweck ist es, die Hauptkarte übersichtlicher zu gestalten, indem die Umrisse heruntergeladener Karten ausgeblendet werden, was besonders nützlich ist, wenn Sie viele Karten installiert haben.

Standardmäßig erscheinen die Kartengrenzen, wenn Sie auf Stufe 7 zoomen, und verschwinden bei Zoomstufe 3 und darunter.

:::tip Farbe für "Grenzen heruntergeladener Karten anzeigen"
Wenn die Funktion *Grenzen heruntergeladener Karten anzeigen* aktiviert ist, werden heruntergeladene Karten sowohl in der Android- als auch in der iOS-Version von OsmAnd **grün** eingefärbt.

Unter Android werden archivierte Karten in **Orange** angezeigt. Unter iOS werden Karten, die aktualisiert werden können, ebenfalls in **Orange** markiert.
:::


## Koordinatengitter {#coordinates-grid}


Gehe zu: *Menü → Karte konfigurieren → Anzeigen → Koordinatengitter*  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Koordinatengitter-Menü](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


Die Funktion **Koordinatengitter** überlagert die Karte mit einem Referenzgitter, mit dem Sie Breiten- und Längengrade basierend auf verschiedenen Koordinatensystemen visualisieren können. Diese Funktion ist nützlich für eine präzise Standortreferenz und geospatiale Navigation. 

Sie können die folgenden Optionen konfigurieren:
- **Zoomstufen:** Stellen Sie die minimale und maximale Zoomstufe (2 - 22) ein, bei der das Gitter sichtbar ist.
- **Beschriftungsposition:** Wählen Sie zwischen *Ränder* (Standard) oder *Mitte* für Gitterbeschriftungen.
- **Gitterfarbe:** Getrennt für Tag-/Nachtmodus verfügbar. Die Anpassung der Gitterfarbe ist eine [kostenpflichtige Funktion](https://osmand.net/docs/user/purchases/), die in Maps+ (In-App-Kauf oder Abonnement) und OsmAnd+ verfügbar ist.
- **Koordinatenformat:** Wählen Sie aus mehreren verfügbaren Formaten (siehe Liste unten).


***Verfügbare Koordinatenformate:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Grade, Minuten, Sekunden)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Dezimalgrade - WGS84-Standardformat)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Grade, Dezimalminuten)
- **UTM** (EPSG:6387, Universale Transversale Mercator - zonenbasiertes Gittersystem). Die minimale Zoomstufe ist 9, es wird immer nur eine UTM-Zone angezeigt, da die Zonen alle 6° durch Meridiane getrennt sind
- **MGRS** (Military Grid Reference System)

Standardmäßig verwendet die App das in den [Allgemeinen Einstellungen](../personal/profiles.md#units--formats) ausgewählte Koordinatenformat, aber Sie können es direkt in diesem Menü ändern.

[Schnelle Aktion](../widgets/quick-action.md#overview): Sie können auch einen schnellen Schalter *Koordinatengitter anzeigen/ausblenden* zur [Karte konfigurieren](../widgets/quick-action.md#configure-map)-Gruppe für schnellen Zugriff hinzufügen.

## Kartenstil konfigurieren {#configure-map-style}

### Kartenmodus {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Kartenmodus](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Kartenmodus](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Die Karte kann je nach ausgewähltem Modus aus einer Liste von Optionen in einem hellen oder dunklen Design angezeigt werden. Standardmäßig und für alle neuen Benutzer richtet sich der [Kartenstil](#default-map-styles) nach dem in den Systemeinstellungen Ihres Geräts gewählten Design.

- **<Translate android="true" ids="daynight_mode_day"/>**. Zeigt die Karte immer in einem hellen Design für optimale Sichtbarkeit bei Tag an.

- **<Translate android="true" ids="daynight_mode_night"/>**. Zeigt die Karte immer in einem dunklen Design an, ideal für die Nacht oder bei schlechten Lichtverhältnissen.

- **Sonnenaufgang / Sonnenuntergang**. Wechselt automatisch zwischen Tag- und Nacht-Designs entsprechend den lokalen Sonnenauf- und -untergangszeiten, die in diesem Tab in der App detailliert aufgeführt sind.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Nur Android*). Nutzt den Lichtsensor des Geräts, um je nach Umgebungslicht automatisch zwischen hellem und dunklem Design zu wechseln.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Die Kartenanzeige passt sich dem Gesamtdesign der App an und zeigt den Tagmodus im hellen Design und den Nachtmodus im dunklen Design an.


### Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Zeigt Polygone, Pfade, Punkte und Schilder auf der Karte bei niedrigem Zoom an. Das bedeutet, dass Sie bei geringer Vergrößerung mehr Details auf der Karte sehen können. Beachten Sie, dass das Rendern auf Ihrem Gerät möglicherweise nicht schnell ist.  
    ![Kartenparameter - Detaillierter](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Zeigt den Typ der Straßenoberfläche an. Die Farbe der Straße hilft Ihnen zu verstehen, was die Straßenoberfläche ist, wie z.B. Asphalt, Gras oder Sand. Siehe die [Kartenlegende](../map-legend/index.md).  
    ![Kartenparameter - Straßenoberfläche](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Gibt die Qualität der Straße an. Gibt die Glätte (Neigung) der Straße an. Wie glatt Ihre Straßen sind: gut, schlecht, möglicherweise schrecklich, etc. Schauen Sie in die [Kartenlegende](../map-legend/index.md), um die Glätte Ihrer Straße zu bestimmen.  
    ![Kartenparameter - Straßenglätte](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Zeigt die Zugänglichkeit der Straße an: privat oder erlaubt, nur für Notfälle oder mautpflichtige Straße. Sehen Sie sich die [Kartenlegende](../map-legend/index.md) an, um verfügbare Straßen zu finden.  
    ![Kartenparameter - Straßenzugang](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Die [Umweltzonen (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone)-Funktion zeigt grüne Grenzen und "LEZ"-Beschriftungen auf Karten für Bereiche in Städten an, in denen der Zugang für bestimmte umweltschädliche Fahrzeuge eingeschränkt ist. Umweltzonen zielen darauf ab, die Luftqualität zu verbessern, indem sie die Einfahrt auf Fahrzeuge beschränken, die bestimmte Emissionsstandards erfüllen. Die Verwendung dieser Funktion hilft Benutzern, Strafen zu vermeiden, indem sie diese grünen Zonen identifizieren und umfahren, um die Einhaltung der lokalen Umweltvorschriften bei Fahrten durch Stadtzentren sicherzustellen.  

    ![Kartenparameter - Umweltzonen](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Verschiedene Gebäudekategorien, wie Wohn-, Industrie- und Gewerbegebäude, sind farblich gekennzeichnet. Details finden Sie in der [Kartenlegende](../map-legend/index.md).  
    ![Kartenparameter - Farbige Gebäude](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Zeigt beleuchtete und unbeleuchtete Straßen sowie unterirdische und temporär beleuchtete Wege an. Einzelheiten finden Sie in der [Kartenlegende](../map-legend/index.md).  
    ![Kartenparameter - Straßenbeleuchtung](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Diese für Mapper entwickelte Funktion zeigt Referenzen, Anmerkungen und Kommentare von anderen Benutzern auf der Karte an.  
    ![Kartenparameter - Kartenassistent](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Zeigt Meerestiefenlinien an. Sie müssen das [Nautik-Plugin](../plugins/nautical-charts) installieren und Nautische Karten herunterladen.  
    ![Kartenparameter - Tiefenlinien](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Zeigt grüne Ränder und die Beschriftung "NR" für [Naturschutzgebiete](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Hebt Schutzgebiete mit einer grünen Grenze und der Beschriftung "NR" für Wildtierschutzzonen hervor.  

    &nbsp;&nbsp;&nbsp;![Kartenparameter - Naturschutzgebiet](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  
-->

### Routen {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Kartenrouten - Radrouten](@site/static/img/map/map-routes-cycle-routes.png)  ![Kartenrouten - Wandernetz](@site/static/img/map/map-routes-hiking-network.png)

Eine Route ist ein vorbestimmter Weg, dem gefolgt werden muss, um ein bestimmtes Ziel zu erreichen. Eine Route kann für verschiedene Reisearten optimiert werden, wie z. B. Radfahren, Wandern, Laufen, öffentliche Verkehrsmittel und andere. Mehr über Routen und ihre Typen können Sie im [Artikel Routen](../map/routes.md) lesen.


### Verkehr {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Bei der Navigation durch Städte benötigen Sie eine kontrastreichere Ansicht der öffentlichen Verkehrsmittel und Haltestellen. Sie können auf eine Haltestelle des öffentlichen Verkehrs tippen und eine der Routen oder Haltestellen aus der Liste auswählen. Auch Zugstrecken werden in dieser Einstellung angezeigt.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Zeigt Haltestellen des öffentlichen Verkehrs an.  
    ![Karten-Haltestellen](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Zeigt Bus-, Trolleybus- und Shuttle-Routen an.  
    ![Karten-Busverkehr](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Zeigt Straßenbahn- und Zugstrecken an.  
    ![Karten-Straßenbahnverkehr](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Zeigt U-Bahn-Strecken an.  
    ![Karten-U-Bahn-Verkehr](@site/static/img/map/map-transport-subway.png)

### Ausblenden {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Um die Sichtbarkeit der Karte zu verbessern, müssen Sie möglicherweise bestimmte Objekte ausblenden. Sie können beispielsweise Wasser ausblenden, wenn Sie die [Satelliten-Online-Karten mit der Unterlage-Ebene](../map/raster-maps.md#select-raster-maps) verwenden.

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Versteckt regionale Grenzen innerhalb von Ländern, aber Staatsgrenzen sind sichtbar.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Versteckt alle Polygone von natürlichen Objekten, spezielle Funktion für die [Unterlage/Überlagerung-Ebene](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Versteckt alle Polygone von Gebäuden.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Versteckt alle Polygone von Wasser (Meere, Seen, Stauseen, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Versteckt Hausnummern auf der Karte.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Versteckt vorgeschlagene Objekte - jene Objekte, die für den Bau geplant sind, aber nur ein Projekt haben (geplante Straßen, Kreuzungen, Gebäude und andere).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Versteckt die POI-Symbole auf der Karte. Die Beschriftungen dieser POIs werden jedoch weiterhin auf der Karte angezeigt.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Versteckt die POI-Beschriftungen auf der Karte. Die POI-Symbole werden jedoch weiterhin auf der Karte angezeigt.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Versteckt alle unterirdischen Objekte wie Tunnel, Gänge, Etagen usw. Speziell zum Bereinigen von Stadtkarten von unnützen Objekten.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Versteckt alle oberirdischen Objekte. Speziell, um nur unterirdische Objekte wie Tunnel, Gänge usw. zu sehen.

### Straßenstil {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Spezielle Einstellungen für Straßen, bei denen Sie die Farben an den Straßenatlas anpassen oder kontrastreiche Straßen oder fette Umrisse für Straßen hinzufügen können.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Standardstil für Autobahnen. Schauen Sie in die [Kartenlegende](../map-legend/index.md).  
![Kartenstraßenstil Standard](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Stil des deutschen Straßenatlas.  
![Kartenstraßenstil Deutsch](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Stil des amerikanischen Straßenatlas.  
![Kartenstraßenstil Amerikanisch](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Hoher Kontrast der Straßen.  
![Kartenstraßenstil hoher Kontrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Blass**. Weniger kontrastreiche Farben der Straßen.  
![Kartenstraßenstil blass](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Fette Umrandung für Straßen.  
![Kartenstraßenstil fette Umrandung](@site/static/img/map/map-road-style-bold-outline.png)


### Textgröße {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Kartentextgröße 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Kartentextgröße 200%](@site/static/img/map/map-text-size-200.png)


### Kartenlupe {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Sie können diese Einstellung durch langes Tippen auf die "+"- oder "-"Taste auf dem Bildschirm wählen oder:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Sie können diese Einstellung durch langes Tippen auf die "+"- oder "-"Taste auf dem Bildschirm wählen oder:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Diese Einstellung hilft, die Vergrößerung der Karte zu ändern. Sie ist für Raster- und Vektorkarten anwendbar. Bei Rasterkarten wendet sie einen Vergrößerungseffekt an, sodass Textbeschriftungen größer oder kleiner aussehen. Bei Vektorkarten lässt sie die Karte detaillierter oder weniger detailliert aussehen. Wenn Sie sie auf einen niedrigen Wert einstellen, sieht die Karte unruhig/langsam aus.  

- **75%**  
    ![Kartenlupe 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Kartenlupe 200%](@site/static/img/map/map-magnifier-200.png)


### Kartensprache {#map-language}

Die Option **Kartensprache** konfiguriert die Schreibweise von Namen auf der OsmAnd-Karte für die Zoomstufen 7-20 (einschließlich). Für die Zoomstufen 2-6 werden die Namen in der Sprache angezeigt, die für OsmAnd im Systemeinstellungsmenü festgelegt ist (siehe Abschnitt *[So ändern Sie die Anwendungssprache](../start-with/first-steps.md#how-to-change-app-language)*).  

Wenn die Namen auf der Karte von der OSM-Community nicht in die gewünschte Sprache übersetzt sind, können Sie [transliterierte Namen](https://en.wikipedia.org/wiki/Transliteration) verwenden: *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) oder *<Translate ios="true" ids="translit_names"/>* (iOS) Schalter.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Lokale Namen**   
    ![Kartensprache lokale Namen](@site/static/img/map/map-language-local-names_2.png)

- **Bevorzugte Sprache** (ukrainisch)   
    ![Kartensprache Ukrainisch](@site/static/img/map/map-language-urkanian_2.png)

- **Lateinische Namen verwenden, falls fehlend**   
    ![Kartensprache Transliteration](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Lokale Namen**    
    ![Kartensprache lokale Namen](@site/static/img/map/map-language-local-names_2.png)

- **Bevorzugte Sprache** (ukrainisch)  
    ![Kartensprache Ukrainisch](@site/static/img/map/map-language-urkanian_2.png)

- **Lokale Namen anzeigen**  (fügt eine 2. Beschriftung hinzu, wenn der lokale Name anders ist)  
    ![Kartensprache lokal](@site/static/img/map/map-language-show-local_2.png)

- **Namen transliterieren**    
    ![Kartensprache Transliteration](@site/static/img/map/map-language-transliterate_2.png)



</TabItem>

</Tabs>  



## Benutzerdefinierter Kartenstil {#custom-map-style}

Wenn Sie einen persönlichen oder von Dritten erstellten benutzerdefinierten Kartenstil haben, der gemäß der [Spezifikation](../../technical/osmand-file-formats/osmand-rendering-style.md) erstellt wurde, können Sie ihn auf folgende Weisen auf Ihrem Gerät installieren:

- Kopieren Sie die `.render.xml`-Datei auf Ihr Gerät und öffnen Sie sie mit OsmAnd.
- Verwenden Sie die [Standard-Import/Export-Dialoge](../personal/import-export.md), um Darstellungsstile zu exportieren oder zu importieren. Wenn Sie ein `.osf`-Paket erstellen, funktioniert es als Plugin, das Sie mit anderen teilen können.
- Nach der Installation können Sie den Kartenstil aus dem Menü auswählen.


## Verwandte Artikel {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)