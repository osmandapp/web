---
source-hash: 26ecc10e593a10b425e7d1bc880124a223b29d77fca08040a2c47952e03d4203
sidebar_position: 5
title:  Vektorkarten 
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

:::info note
Sehr kleine Polygone können während der Kartendatengenerierung vereinfacht oder verzerrt werden. Objekte mit einer Fläche kleiner als etwa ein Quadratmeter werden möglicherweise nicht angezeigt. Für eine korrekte Visualisierung sollten kleine Merkmale als einzelne Knoten statt als Polygone kartiert werden.
:::


## Anwendungsfälle {#use-cases}

Anpassbare Kartenstile sind einer der Hauptvorteile von OsmAnd. Sie können die Kartenanzeige an sich und Ihre Hobbys anpassen, die Anzeige oder das Ausblenden bestimmter Kartenobjekte, die Größen und Farben dieser Objekte anpassen und den Maßstab der Anzeige bestimmter Objekte ändern.


## Karten-Rendering {#map-rendering}

### Kartenstile {#map-styles}

OsmAnd bietet mehrere integrierte Vektorkartenstile, die für verschiedene Aktivitäten optimiert sind. Zusätzlich zu den Standardstilen können Sie Ihren eigenen benutzerdefinierten Kartenstil basierend auf Rendering-Regeln erstellen und installieren.

Für eine detaillierte Beschreibung der verfügbaren Stile und Anleitungen zum Erstellen benutzerdefinierter Stile siehe den Artikel [Kartenstile](../map/map-styles.md).

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

Die Karte kann je nach ausgewähltem Modus aus einer Liste von Optionen in einem hellen oder dunklen Design angezeigt werden. Standardmäßig und für alle neuen Benutzer richtet sich der [Kartenstil](#map-styles) nach dem in den Systemeinstellungen Ihres Geräts gewählten Design.

- **<Translate android="true" ids="daynight_mode_day"/>**. Zeigt die Karte immer in einem hellen Design für optimale Sichtbarkeit bei Tag an.

- **<Translate android="true" ids="daynight_mode_night"/>**. Zeigt die Karte immer in einem dunklen Design an, ideal für die Nacht oder bei schlechten Lichtverhältnissen.

- **Sonnenaufgang / Sonnenuntergang**. Wechselt automatisch zwischen Tag- und Nacht-Designs entsprechend den lokalen Sonnenauf- und -untergangszeiten, die in diesem Tab in der App detailliert aufgeführt sind.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Nur Android*). Nutzt den Lichtsensor des Geräts, um je nach Umgebungslicht automatisch zwischen hellem und dunklem Design zu wechseln.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Die Kartenanzeige passt sich dem Gesamtdesign der App an und zeigt den Tagmodus im hellen Design und den Nachtmodus im dunklen Design an. 

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

### Ausblenden {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Um die Sichtbarkeit der Karte zu verbessern, müssen Sie möglicherweise bestimmte Objekte ausblenden. Sie können beispielsweise Wasser ausblenden, wenn Sie die [Satelliten-Online-Karten mit der Unterlage-Ebene](../map/raster-maps.md#layers) verwenden.

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Versteckt regionale Grenzen innerhalb von Ländern, aber Staatsgrenzen sind sichtbar.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Versteckt alle Polygone von natürlichen Objekten, spezielle Funktion für die [Unterlage/Überlagerung-Ebene](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Versteckt alle Polygone von Gebäuden.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Versteckt alle Polygone von Wasser (Meere, Seen, Stauseen, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Versteckt Hausnummern auf der Karte.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Versteckt vorgeschlagene Objekte - jene Objekte, die für den Bau geplant sind, aber nur ein Projekt haben (geplante Straßen, Kreuzungen, Gebäude und andere).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Versteckt die POI-Symbole auf der Karte. Die Beschriftungen dieser POIs werden jedoch weiterhin auf der Karte angezeigt.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Versteckt die POI-Beschriftungen auf der Karte. Die POI-Symbole werden jedoch weiterhin auf der Karte angezeigt.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Versteckt alle unterirdischen Objekte wie Tunnel, Gänge, Etagen usw. Speziell zum Bereinigen von Stadtkarten von unnützen Objekten.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Versteckt alle oberirdischen Objekte. Speziell, um nur unterirdische Objekte wie Tunnel, Gänge usw. zu sehen.

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


## Text-Rendering {#text-rendering}

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

### Kartenschriftarten (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Kartenschriftarten Android-Version](@site/static/img/map/map_fonts.png) ![Kartenschriftarten-Version](@site/static/img/map/map_fonts_1.png)

Bei Karten in vereinfachtem/traditionellem Chinesisch, Japanisch und Koreanisch können falsche Zeichen oder Symbole (wie Quadrate) erscheinen, wenn auf Ihrem Gerät die erforderlichen Schriftarten fehlen. Dieses Problem tritt beim Rendern lokaler Namen auf und kann durch das Herunterladen der erforderlichen Schriftarten über OsmAnd gelöst werden.  

Einige verwandte Schriftartenprobleme wurden auf GitHub dokumentiert: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Topographie-Rendering {#topography-rendering}

### * Höhenlinien {#-contour-lines}

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

### * Nautische Tiefe {#-nautical-depth}

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

### 3D-Gebäude {#3d-buildings}

<InfoAndroidOnly/> 

![3D-Gebäude](@site/static/img/map/3d_buildings_1_new.png) ![3D-Gebäude](@site/static/img/map/3d_buildings_2.png) 

Die **3D-Gebäude**-Funktion zeigt Gebäude als volumetrische 3D-Modelle statt als flache Formen an. Gebäude werden aus [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings) generiert, unter Verwendung von Höheninformationen aus Tags wie `height` und `building:levels`, wenn verfügbar. 3D-Gebäude werden nur bei höheren Zoomstufen (Stadt-/Straßensicht) angezeigt, wo einzelne Gebäude dargestellt werden können.  
Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D-Gebäude*  
Verwenden Sie den Hauptschalter, um das 3D-Rendering von Gebäuden zu aktivieren oder zu deaktivieren. Um Gebäude in 3D zu sehen, neigen Sie die Karte, indem Sie zwei Finger auf den Bildschirm legen und nach oben wischen.

Diese Option ist derzeit nur verfügbar, wenn das [OsmAnd-Entwicklungs-Plugin](../plugins/development.md) aktiviert ist.  
Gehe zu: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

Die Einstellungen für 3D-Gebäude sind in zwei Gruppen unterteilt: **Darstellung** und **Leistung**.

**Darstellung: Farbe**. Sie steuert die Farbe der 3D-Gebäude. Wenn Sie auf Farbe tippen, öffnet OsmAnd einen separaten Vorschau-Bildschirm, auf dem Sie die Karte sehen können, während Sie die Einstellung anpassen.
- **Kartenstil** — verwendet die Standard-Gebäude-Farbe aus dem derzeit ausgewählten Kartenstil.
- **Benutzerdefiniert** — ermöglicht es Ihnen, eine benutzerdefinierte Gebäude-Farbe separat für Tag-/Nachtmodus festzulegen.

:::tip Kauf
Die Farbanpassung von 3D-Gebäuden ist eine [kostenpflichtige Funktion](../purchases/index.md).  
:::

Wenn benutzerdefinierte Farben nicht gekauft wurden, sehen Sie einen leeren Zustand mit einer kurzen Beschreibung und einem Button „Erhalten“. Wenn Benutzerdefiniert verfügbar ist, können Sie zwischen Tag und Nacht wechseln, eine Farbe aus der Palette wählen (oder Alle Farben öffnen) und dann auf Anwenden tippen.

**Darstellung: Sichtbarkeit**. Sie steuert die Opazität (Transparenz) der 3D-Gebäude. Verwenden Sie den Schieberegler, um die Sichtbarkeit als Prozentsatz einzustellen. Niedrigere Werte machen Gebäude transparenter und helfen, Straßen/Beschriftungen lesbar zu halten. Höhere Werte machen Gebäude solider und visuell dominanter. Das Tippen auf Sichtbarkeit öffnet ebenfalls einen separaten Vorschau-Bildschirm mit dem Schieberegler.

Auf den Vorschau-Bildschirmen (Farbe / Sichtbarkeit) können Sie Zurücksetzen auf Standard aus der App-Leiste verwenden, um den Standardwert wiederherzustellen.

**Leistung: Detailgrad**. Sie steuert, wie detailliert die 3D-Gebäudengeometrie ist:
- Niedrig (Standard) — einfachere Geometrie.
- Hoch — detailliertere Geometrie.

**Leistung: Sichtweite**. Sie steuert, wie weit von der Kamera aus 3D-Gebäude gerendert werden:
- Nah (Standard) — rendert Gebäude näher bei Ihnen.
- Fern — rendert Gebäude aus größerer Entfernung.

Beide Leistungsoptionen verwenden einen Zweipositionsschalter direkt auf dem 3D-Gebäude-Einstellungsbildschirm.


## Weitere Einstellungen {#additional-settings}

### Grenzen anzeigen {#show-borders}

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

### Koordinatengitter {#coordinates-grid}

:::tip Kauf
Die Farbanpassung des Koordinatengitters ist eine [kostenpflichtige Funktion](../purchases/index.md).  
:::

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
- **Gitterfarbe:** Getrennt für Tag-/Nachtmodus verfügbar. 
- **Koordinatenformat:** Wählen Sie aus mehreren verfügbaren Formaten (siehe Liste unten).

***Verfügbare Koordinatenformate:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Grade, Minuten, Sekunden)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Dezimalgrade - WGS84-Standardformat)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Grade, Dezimalminuten)
- **UTM** (EPSG:6387, Universale Transversale Mercator - zonenbasiertes Gittersystem). Die minimale Zoomstufe ist 9, es wird immer nur eine UTM-Zone angezeigt, da die Zonen alle 6° durch Meridiane getrennt sind
- **MGRS** (Military Grid Reference System)

Standardmäßig verwendet die App das in den [Allgemeinen Einstellungen](../personal/profiles.md#units--formats) ausgewählte Koordinatenformat, aber Sie können es direkt in diesem Menü ändern.

[Schnelle Aktion](../widgets/quick-action.md#overview): Sie können auch einen schnellen Schalter *Koordinatengitter anzeigen/ausblenden* zur [Karte konfigurieren](../widgets/quick-action.md#configure-map)-Gruppe für schnellen Zugriff hinzufügen.


## Routen {#routes}

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


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../map/interact-with-map.md)
- [Karte konfigurieren](../map/configure-map-menu.md)
- [Kartenstile](../map/map-styles.md)
- [Routen](../map/routes.md)
- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)