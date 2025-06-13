---
source-hash: 27a4297a5019f248c9db5c74a4569bcd2b0de8e623b0c0ff1053a5740868f8b2
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



## Überblick {#overview}

Vektorkarten sind als Standard Datenquelle für OsmAnd gedacht, daher **müssen Sie sie auf Ihr Gerät herunterladen**. Vektorkarten unterstützen eine riesige Anzahl von Kartenstilen für verschiedene Aktivitäten wie Radfahren, Wandern, Autofahren oder Schneemobilfahren und andere.

Jeder Kartenstil kann angepasst werden, um bestimmte Objekte hervorzuheben oder auszublenden und zwischen Tag- und Nachtmodus zu wechseln. Vektorkartendaten können durch Vektordaten erweitert und im Standard-Kartenstil angezeigt werden, z. B. Informationen zu *Höhenlinien*. Sie können *Ihren eigenen OsmAnd-Kartenstil erstellen*, um die erforderlichen Informationen anzuzeigen.


## Anwendungsfälle {#use-cases}

Anpassbare Kartenstile sind einer der Hauptvorteile von OsmAnd. Sie können die Kartenanzeige an sich und Ihre Hobbys anpassen, die Anzeige oder das Ausblenden bestimmter Kartenobjekte, die Größen und Farben dieser Objekte sowie den Maßstab der Anzeige bestimmter Objekte ändern.


## Standard-Kartenstile {#default-map-styles}

OsmAnd bietet Ihnen viele Kartenstile und Datenebenen, die standardmäßig passen. Dieser Abschnitt beschreibt die wichtigsten für Tag- und Nachtmodi.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)

Der Standard-Kartenstil von OsmAnd bietet ein ausgewogenes Verhältnis zwischen Detailreichtum und Einfachheit und ist somit ideal für die Erkundung von Städten und der Natur. Er zeigt städtische Merkmale wie Straßen, Gebäude und Haltestellen des öffentlichen Nahverkehrs detailliert an, während er visuelle Unordnung reduziert, indem er Karten klarer gestaltet.

Zu den wichtigsten Vorteilen gehören Routenplanung, Oberflächenqualität, Zugangsbeschränkungen, Straßenbeschilderung, SAC-Skala-Pfad-Darstellungen, Sportanlagen und topografische Details wie Höhenlinien.


### Touring View {#touring-view}

![Touring view map style](@site/static/img/map/map-style-touring.png)

Touring-Stil mit hohem Kontrast und maximalem Detail. Enthält alle Optionen des Standard-OsmAnd-Stils und zeigt gleichzeitig so viele Details wie möglich an, insbesondere Straßen, Wege und andere Reisewege. Klare Unterscheidung der Straßentypen in einem *Touring-Atlas*. Geeignet für Tag, Nacht und den Einsatz im Freien.

### UniRS und LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Die Stile UniRS und LightRS sind Autorenstile, die die grundlegenden Karteninformationen in verschiedenen Farbschemata darstellen.

- **UniRS-Stil**. Dieser Stil ist eine modifizierte Version des Standards, um den Kontrast für Fuß- und Radwege zu verbessern. Er behält das klassische Mapnik-Farbschema bei.

    ![LightRS map style](@site/static/img/map/map-style-lightrs.png)

- **LightRS-Stil**. Dies ist ein einfacher Fahrstil mit einem sanften Nachtmodus. Er hebt Straßen in einer kontrastreichen orangefarbenen Farbe hervor, dimmt sekundäre Kartenobjekte und zeigt topografische Merkmale wie Höhenlinien an.

    ![UniRS map style](@site/static/img/map/map-style-unirs.png)

### Nautisch {#nautical}

![Nautical map style](@site/static/img/map/map-style-nautical.png)

Dies ist ein Stil für die nautische Navigation mit Bojen, Leuchttürmen, Flussrouten, Seewegen, Markierungen, Häfen, nautischen Markierungen und Tiefenlinien. Lesen Sie mehr im Artikel [Nautische Kartenansicht](../plugins/nautical-charts.md).

### Winter und Ski {#winter-and-ski}

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

Dies ist ein Stil für den Skisport, der Pisten, Lifte und Langlaufloipen beschreibt und sekundäre Kartenobjekte ausblendet. Der **Winter- und Ski-Stil** wurde entwickelt, um Ihnen bei der Navigation im Wintersport zu helfen.

Sie können die Skipisten und andere Details wie den Schwierigkeitsgrad der Pisten und Liftmarkierungen sehen. Zu den wichtigsten Vorteilen gehören die bequeme Anzeige von Pisten, Liften und anderen Skifunktionen. Weniger ablenkende sekundäre Objekte der Karte. Lesen Sie mehr im Artikel [Skikarten](../plugins/ski-maps.md).

### Topo {#topo}

![Topo map style](@site/static/img/map/map-style-topo.png)

Dieser Stil wurde für Wanderungen, Camping und Radtouren in der Natur entwickelt. Er zeichnet sich durch kontrastreiche Straßen und natürliche Merkmale, verschiedene Arten von Wegen, erweiterte Höhenlinienoptionen und zusätzliche Details aus. Er ist im Freien gut lesbar. Die Einstellung *Oberflächenintegrität* ermöglicht es Ihnen, die Qualität der Straße zu unterscheiden.

### OSM-carto {#osm-carto}

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

Dieser Stil imitiert den Standard-[OpenStreetMap-Webstil](https://www.openstreetmap.org/). Der Quellcode der Webversion ist auf [Github](https://github.com/gravitystorm/openstreetmap-carto) verfügbar, der OsmAnd-Code ist auf [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml) verfügbar.

### Wüste {#desert}

![Desert map style](@site/static/img/map/map-style-desert.png)

Entwickelt für Wüsten und andere dünn besiedelte Regionen, bietet detailliertere Karteninformationen.

### Offroad {#offroad}

![Offroad map style](@site/static/img/map/map-style-offroad.png)

Dieser Stil wurde für die Offroad-Navigation entwickelt, basiert auf dem [Topo](#topo)-Kartenlayout und funktioniert gut mit Satellitenbildern als Unterlage. Er zeichnet sich durch dünnere Hauptstraßen aus, um Pfade, Wege, Radwege und andere Offroad-Strecken hervorzuheben, was ihn ideal für die Erkundung unbefestigter Routen in ländlichen oder abgelegenen Gebieten macht.

### Schneemobil {#snowmobile}

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

Dieser Stil ist auf die Schneemobil-Navigation zugeschnitten und hebt schneemobilfreundliche Pfade, Straßen und Strecken hervor. Er hebt spezielle Pfade in schneereichen Regionen hervor und bietet eine klare Navigation über schneebedeckte Gelände, wo Standardstraßen möglicherweise nicht verfügbar sind.


## Kartenlegende {#map-legend}

Die Kartenlegende dient als Schlüssel zum Verständnis der in OsmAnd-Karten verwendeten Symbole. Sie erklärt die Bedeutung verschiedener Kartensymbole, einschließlich Punkte, Linien und Flächen. Zum Beispiel zeigen blaue gewundene Linien Flüsse an, während verschiedene Farben und Formen Gebäude, Pfade und Routen darstellen können.

Die Legende hilft Benutzern, das zu interpretieren, was sie auf der Karte sehen. Sie können die vollständige OsmAnd-Kartenlegende [hier](../map-legend/index.md) aufrufen.


## Karten-Schriftarten (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

Bei Karten in vereinfachtem/traditionellem Chinesisch, Japanisch und Koreanisch können falsche Zeichen oder Symbole (wie Quadrate) erscheinen, wenn auf Ihrem Gerät die erforderlichen Schriftarten fehlen. Dieses Problem tritt beim Rendern lokaler Namen auf und kann durch Herunterladen der erforderlichen Schriftarten über OsmAnd gelöst werden.

Einige verwandte Schriftartenprobleme wurden auf GitHub dokumentiert: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Höhenlinien {#-contour-lines}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Contour lines map style](@site/static/img/map/contour_lines.png)

Höhenlinien in OsmAnd werden als Höhenlinien auf Vektorkarten angezeigt. Um sie zu verwenden, müssen Sie zuerst das [Topografie-Plugin](../plugins/topography.md) aktivieren, die notwendigen regionalen Daten herunterladen und die Anzeige konfigurieren. Diese Funktion ist standardmäßig nicht aktiviert und erfordert einen [Kauf](../purchases/index.md).

Höhenlinien sind mit allen Kartenstilen kompatibel und können über das Menü [Höhenlinien](../plugins/topography.md#contour-lines) angepasst werden. Weitere Details finden Sie im Artikel [Topografie-Plugin](../plugins/topography.md).


## * Nautische Tiefe {#-nautical-depth}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Nautische Tiefenlinien stellen Bereiche gleicher Tiefe dar und helfen, Veränderungen der Unterwassertopografie zu visualisieren. Diese Funktion ist in allen Kartenstilen und -modi verfügbar und kann mit oder ohne aktiviertem nautischem Kartenansichts-Plugin angepasst werden.

Weitere Details zur nautischen Kartenansicht finden Sie auf der Seite [Nautisches Karten-Plugin](../plugins/nautical-charts).


## Grenzen anzeigen {#show-borders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Mit dieser Funktion können Sie die Sichtbarkeit der Grenzen für zuvor heruntergeladene Karten aus der Liste der verfügbaren Karten umschalten. Der Hauptzweck besteht darin, die Hauptkarte übersichtlicher zu gestalten, indem die Umrisse heruntergeladener Karten ausgeblendet werden, was besonders nützlich ist, wenn Sie viele Karten installiert haben.

Standardmäßig werden Kartenränder angezeigt, wenn Sie auf Zoomstufe 7 heranzoomen, und verschwinden auf Zoomstufe 3 und darunter.

:::tip Farbe Grenzen heruntergeladener Karten anzeigen
Wenn die Funktion *Grenzen heruntergeladener Karten anzeigen* aktiviert ist, werden heruntergeladene Karten in beiden Versionen von OsmAnd (Android und iOS) **Grün** eingefärbt.

Auf Android werden archivierte Karten in **Orange** angezeigt. Auf iOS werden Karten, die aktualisiert werden können, ebenfalls in **Orange** markiert.
:::


## Koordinatengitter {#coordinates-grid}

<InfoAndroidOnly />

Gehen Sie zu: *Menü → Karte konfigurieren → Anzeigen → Koordinatengitter*

![Coordinates grid menu](@site/static/img/map/coordinates_grid_settings_andr.png)

Die Funktion **Koordinatengitter** überlagert ein Referenzgitter auf der Karte, sodass Sie Breiten- und Längengrade basierend auf verschiedenen Koordinatensystemen visualisieren können. Diese Funktion ist nützlich für präzise Standortreferenzen und georäumliche Navigation.

***Verfügbare Koordinatenformate:***

- **DD°MM′SS″** (Grad, Minuten, Sekunden)
- **DD.DDDDD°** (Dezimalgrad - WGS84 Standardformat)
- **DD°MM.MMM′** (Grad, Dezimalminuten)
- **MGRS** (Military Grid Reference System)
- **UTM** (Universal Transverse Mercator - zonenbasiertes Gittersystem)

:::note

1. *Einschränkungen des UTM-Gitters:*
    - Die minimale Zoomstufe für die Anzeige des UTM-Gitters ist 9.
    - Es wird nur eine UTM-Zone gleichzeitig angezeigt, da die Zonen alle 6° durch Meridiane getrennt sind.

2. *Das WGS84-Gitter unterstützt drei verschiedene Modi:* Dezimalgrad, Grad+Minuten und Grad+Minuten+Sekunden.

:::

***Unterstützte Koordinatensysteme:***

OsmAnd unterstützt mehrere **Basisprojektionen** zur Anzeige geografischer Gitterlinien:

| **Projektion** | **EPSG-Code** | **Beschreibung** |
|----------------|-------------|----------------|
| **WGS84**      | EPSG:4326   | Standard-Breiten-/Längengrad-Referenzsystem, weltweit verwendet. |
| **Mercator**   | EPSG:3857   | Wird für webbasierte Kartierung verwendet (Google Maps, OpenStreetMap usw.). |
| **UTM**        | EPSG:6387   | Teilt die Welt in **60 Zonen** für genaue lokale Positionierung. |
| **MGRS**       | -           | Military Grid Reference System (Erweiterung von UTM). |



***Zoomstufen Einstellungen:***

- Die Gitterlinien erscheinen basierend auf der Zoomstufe, zwischen **2 – 22**.
- Die Linien passen die Koordinatenteilungen dynamisch an die Zoomstufe an.

**Standardmäßig verwendet die App das in den** [Allgemeinen Einstellungen](../personal/profiles.md#units--formats) **ausgewählte Koordinatenformat.**


## Kartenstil konfigurieren {#configure-map-style}

### Kartenmodus {#map-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Die Karte kann in einem hellen oder dunklen Thema angezeigt werden, basierend auf dem aus einer Liste von Optionen ausgewählten Modus. Standardmäßig und für alle neuen Benutzer richtet sich der [Kartenstil](#default-map-styles) nach dem in den Systemeinstellungen Ihres Geräts gewählten Thema.

- **<Translate android="true" ids="daynight_mode_day"/>**. Zeigt die Karte immer in einem hellen Thema an, um optimale Sichtbarkeit bei Tageslicht zu gewährleisten.

- **<Translate android="true" ids="daynight_mode_night"/>**. Zeigt die Karte immer in einem dunklen Thema an, ideal für Nacht oder schlechte Lichtverhältnisse.

- **Sonnenaufgang / Sonnenuntergang**. Wechselt automatisch zwischen Tag- und Nachtthemen entsprechend den lokalen Sonnenauf- und -untergangszeiten, die in dieser Registerkarte in der App detailliert aufgeführt sind.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*nur Android*). Verwendet den Lichtsensor des Geräts, um automatisch zwischen hellen und dunklen Themen entsprechend den Umgebungslichtverhältnissen zu wechseln.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Die Kartenanzeige passt sich dem Gesamtthema der App an und zeigt den Tagmodus im hellen Thema und den Nachtmodus im dunklen Thema an.


### Details {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Zeigt Polygone, Wege, Punkte und Schilder auf der Karte bei geringem Zoom an. Das bedeutet, dass Sie bei geringer Vergrößerung mehr Details auf der Karte sehen können. Beachten Sie, dass das Rendern auf Ihrem Gerät möglicherweise nicht schnell ist.
    ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Zeigt den Typ der Straßenoberfläche an. Die Farbe der Straße hilft Ihnen zu verstehen, wie die Straßenoberfläche beschaffen ist, z. B. Asphalt, Gras oder Sand. Siehe die [Kartenlegende](../map-legend/index.md).
    ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Zeigt die Qualität der Straße an. Zeigt die Glätte (Steigung) der Straße an. Wie glatt Ihre Straßen sind: gut, schlecht, möglicherweise schrecklich usw. Sehen Sie sich die [Kartenlegende](../map-legend/index.md) an, um die Glätte Ihrer Straße zu bestimmen.
    ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Zeigt die Zugänglichkeit der Straße an: privat oder erlaubt, nur für Notfälle oder Mautstraße. Sehen Sie sich die [Kartenlegende](../map-legend/index.md) an, um verfügbare Straßen zu finden.
    ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Die Funktion [Niedrigemissionszonen (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) zeigt grüne Grenzen und "LEZ"-Beschriftungen auf Karten für Bereiche in Städten an, in denen der Zugang für bestimmte umweltschädliche Fahrzeuge eingeschränkt ist. LEZs zielen darauf ab, die Luftqualität zu verbessern, indem sie den Zugang für Fahrzeuge, die bestimmte Emissionsstandards erfüllen, einschränken. Die Verwendung dieser Funktion hilft Benutzern, Strafen zu vermeiden, indem sie diese grünen Zonen identifizieren und umfahren, um die Einhaltung lokaler Umweltvorschriften bei Fahrten durch Stadtzentren sicherzustellen.

    ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Verschiedene Gebäudekategorien wie Wohn-, Industrie- und Gewerbegebäude sind farblich gekennzeichnet. Details finden Sie in der [Kartenlegende](../map-legend/index.md).
    ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Zeigt beleuchtete und unbeleuchtete Straßen sowie unterirdische und temporär beleuchtete Wege an. Spezifische Details finden Sie in der [Kartenlegende](../map-legend/index.md).
    ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Diese Funktion wurde für Kartographen entwickelt und zeigt Referenzen, Bemerkungen und Kommentare anderer Benutzer auf der Karte an.
    ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Zeigt Meerestiefenlinien an. Sie müssen das [Nautische Plugin](../plugins/nautical-charts) installieren und nautische Karten herunterladen.
    ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Zeigt grüne Grenzen und "NR"-Beschriftungen für [Naturschutzgebiete](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve) an. Hebt Schutzgebiete mit einer grünen Grenze und der Beschriftung "NR" für Wildschutzgebiete hervor.

    &nbsp;&nbsp;&nbsp;![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Zeigt Polygone, Wege, Punkte und Schilder auf der Karte bei geringem Zoom an. Das bedeutet, dass Sie bei geringer Vergrößerung mehr Details auf der Karte sehen können. Beachten Sie, dass das Rendern auf Ihrem Gerät möglicherweise nicht schnell ist.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Zeigt den Typ der Straßenoberfläche an. Die Farbe der Straße hilft Ihnen zu verstehen, wie die Straßenoberfläche beschaffen ist, z. B. Asphalt, Gras oder Sand. Siehe die [Kartenlegende](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Zeigt die Qualität der Straße an. Zeigt die Glätte (Steigung) der Straße an. Wie glatt Ihre Straßen sind: gut, schlecht, möglicherweise schrecklich usw. Sehen Sie sich die [Kartenlegende](../map-legend/index.md) an, um die Glätte Ihrer Straße zu bestimmen.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Zeigt die Zugänglichkeit der Straße an: privat oder erlaubt, nur für Notfälle oder Mautstraße. Sehen Sie sich die [Kartenlegende](../map-legend/index.md) an, um verfügbare Straßen zu finden. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Die [Niedrigemissionszonen (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) Funktion zeigt grüne Grenzen und "LEZ"-Beschriftungen auf Karten für Bereiche in Städten an, in denen der Zugang für bestimmte umweltschädliche Fahrzeuge eingeschränkt ist. LEZs zielen darauf ab, die Luftqualität zu verbessern, indem sie den Zugang für Fahrzeuge, die bestimmte Emissionsstandards erfüllen, einschränken. Die Verwendung dieser Funktion hilft Benutzern, Strafen zu vermeiden, indem sie diese grünen Zonen identifizieren und umfahren, um die Einhaltung lokaler Umweltvorschriften bei Fahrten durch Stadtzentren sicherzustellen.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Verschiedene Gebäudekategorien wie Wohn-, Industrie- und Gewerbegebäude sind farblich gekennzeichnet. Details finden Sie in der [Kartenlegende](../map-legend/index.md). | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Zeigt beleuchtete und unbeleuchtete Straßen sowie unterirdische und temporär beleuchtete Wege an. Spezifische Details finden Sie in der [Kartenlegende](../map-legend/index.md). | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Diese Funktion wurde für Kartographen entwickelt und zeigt Referenzen, Bemerkungen und Kommentare anderer Benutzer auf der Karte an. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Zeigt Meerestiefenlinien an. Sie müssen das [Nautische Plugin](../plugins/nautical-charts) installieren und nautische Karten herunterladen.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Zeigt grüne Grenzen und "NR"-Beschriftungen für [Naturschutzgebiete](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve) an. Hebt Schutzgebiete mit einer grünen Grenze und der Beschriftung "NR" für Wildschutzgebiete hervor.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Routen {#routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png) ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

Eine Route ist ein vorgegebener Pfad, dem gefolgt werden muss, um ein bestimmtes Ziel zu erreichen. Eine Route kann für verschiedene Reisearten optimiert werden, z. B. Radfahren, Wandern, Laufen, öffentliche Verkehrsmittel und andere. Mehr über Routen und ihre Typen können Sie im Artikel [Routen](../map/routes.md) lesen.


### Transport {#transport}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Bei der Navigation durch Städte benötigen Sie eine kontrastreichere Ansicht des öffentlichen Nahverkehrs und der Haltestellen. Sie können auf eine Haltestelle des öffentlichen Nahverkehrs tippen und eine der Routen oder Haltestellen aus der Liste auswählen. Zugstrecken werden in dieser Einstellung ebenfalls angezeigt.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Zeigt Haltestellen des öffentlichen Nahverkehrs an.
    ![Map transport stops](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Zeigt Bus-, Oberleitungsbus- und Shuttle-Routen an.
    ![Map transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Zeigt Straßenbahn- und Zugstrecken an.
    ![Map transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Zeigt U-Bahn-Strecken an.
    ![Map transport subway](@site/static/img/map/map-transport-subway.png)

### Ausblenden {#hide}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Um die Sichtbarkeit der Karte zu verbessern, müssen Sie möglicherweise bestimmte Objekte ausblenden. Zum Beispiel können Sie Wasser ausblenden, wenn Sie [Online-Satellitenkarten mit der Unterlage-Ebene](../map/raster-maps.md#select-raster-maps) verwenden.

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Blendet regionale Grenzen innerhalb von Ländern aus, aber Staatsgrenzen sind sichtbar.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Blendet alle Polygone natürlicher Objekte aus, spezielle Funktion für [Unterlage-/Überlagerungsebene](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Blendet alle Polygone von Gebäuden aus.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Blendet alle Polygone von Wasser (Meere, Seen, Stauseen usw.) aus.
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Blendet Hausnummern auf der Karte aus.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Blendet vorgeschlagene Objekte aus - jene Objekte, die für den Bau geplant sind, aber nur ein Projekt haben (geplante Straßen, Kreuzungen, Gebäude und andere).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Blendet die POI-Symbole von der Karte aus. Die Beschriftungen dieser POIs werden jedoch weiterhin auf der Karte angezeigt.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Blendet die POI-Beschriftungen von der Karte aus. Die POI-Symbole werden jedoch weiterhin auf der Karte angezeigt.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Blendet alle unterirdischen Objekte aus, wie Tunnel, Passagen, Stockwerke usw. Speziell zum Bereinigen von Karten in Städten von nicht nützlichen Objekten.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Blendet alle oberirdischen Objekte aus. Speziell, um nur unterirdische Objekte wie Tunnel, Passagen usw. zu sehen.

### Straßenstil {#road-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Spezielle Einstellungen für Straßen, bei denen Sie die Farben an den Straßenatlas anpassen oder kontrastreiche Straßen oder fette Umrisse für Straßen hinzufügen können.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Standardstil für Autobahnen. Siehe [Kartenlegende](../map-legend/index.md).
![Map road style default](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Stil des deutschen Straßenatlas.
![Map road style german](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Stil des amerikanischen Straßenatlas.
![Map road style american](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Hoher Kontrast der Straßen.
![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Blass**. Weniger kontrastreiche Farben der Straßen.
![Map road style bold outline](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Fetter Umriss für Straßen.
![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)


### Textgröße {#text-size}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)


### Kartenlupe {#map-magnifier}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Sie können diese Einstellung durch langes Tippen auf die Schaltfläche "+" oder "-" auf dem Bildschirm oder über:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Sie können diese Einstellung durch langes Tippen auf die Schaltfläche "+" oder "-" auf dem Bildschirm oder über:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Diese Einstellung hilft, die Vergrößerung der Karte zu ändern. Sie ist für Raster- und Vektorkarten anwendbar. Bei Rasterkarten wird ein Vergrößerungseffekt angewendet, sodass Textbeschriftungen größer oder kleiner aussehen. Bei Vektorkarten lässt sie die Karte detaillierter oder weniger detailliert aussehen. Wenn Sie einen niedrigen Wert einstellen, sieht die Karte verrauscht/langsam aus.

- **75%**
    ![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)


### Kartensprache {#map-language}

Die Option **Kartensprache** konfiguriert die Schreibweise von Namen auf der OsmAnd-Karte für die Zoomstufen 7-20, einschließlich. Für die Zoomstufen 2-6 werden die Namen in der Sprache angezeigt, die für OsmAnd im Menü der Systemeinstellungen festgelegt ist (siehe Abschnitt *[Wie ändere ich die Anwendungssprache](../start-with/first-steps.md#how-to-change-app-language)*).

Wenn die Namen auf der Karte von der OSM-Community nicht in die gewünschte Sprache übersetzt wurden, können Sie [transliterierte Namen](https://en.wikipedia.org/wiki/Transliteration) verwenden: *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) oder *<Translate ios="true" ids="translit_names"/>* (iOS) Schalter.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Lokale Namen**
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Ukrainische Namen**
    ![Map language ukranian](@site/static/img/map/map-language-urkanian_2.png)

- **Lokale Namen anzeigen**
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Namen transliterieren**
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)


## Benutzerdefinierter Kartenstil {#custom-map-style}

Wenn Sie einen persönlichen oder benutzerdefinierten Kartenstil eines Drittanbieters haben, der gemäß der [Spezifikation](../../technical/osmand-file-formats/osmand-rendering-style.md) erstellt wurde, können Sie ihn auf folgende Weise auf Ihrem Gerät installieren:

- Kopieren Sie die Datei `.render.xml` auf Ihr Gerät und öffnen Sie sie mit OsmAnd.
- Verwenden Sie die [Standard-Import-/Exportdialoge](../personal/import-export.md), um Rendering-Stile zu exportieren oder zu importieren. Wenn Sie ein `.osf`-Paket erstellen, funktioniert es wie ein Plugin, das Sie mit anderen teilen können.
- Nach der Installation können Sie den Kartenstil aus dem Menü auswählen.


## Verwandte Artikel {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: März 2025*