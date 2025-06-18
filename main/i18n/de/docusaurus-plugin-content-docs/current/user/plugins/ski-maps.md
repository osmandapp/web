---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title:  Ski-Kartenansicht
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Überblick {#overview}

Das OsmAnd Ski-Kartenansicht-Plugin zeigt berühmte und beliebte Pisten, offiziell genehmigte Skigebiete und Loipenkarten der meisten Skigebiete. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) Pistenkarten sind die Datenquelle für OsmAnd Skikarten. Kombinierte Vektorkarten mit Rasterkarten, die OsmAnd Skikarte ist sehr genau und nützlich für Instruktoren, Kletterer und Wintersportler.

Die OsmAnd Skikarte ist Teil der Vektorkarten und erfordert keine zusätzlichen Downloads. Sie ist standardmäßig deaktiviert. Die OsmAnd Skikarte ist einer der [Kartenstile](../map/vector-maps.md), der zusätzliche Funktionen durch Hervorheben einiger Objekte und weniger Sichtbarkeit anderer bietet.  

Zwei Profile sind unten dargestellt: das linke ist zum Skifahren und das rechte zum Autofahren. Das Skiprofil hebt Loipen, Luftwege, Winterfarben und alle Kartenobjekte hervor, die für die Navigation im Skigebiet nützlich sind.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Skikarten in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Keine Skikarten in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Skikarten in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Keine Skikarten in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtparameter {#required-setup-parameters}

Die folgende Einstellung lässt die OsmAnd Skikarte auf dem Bildschirm erscheinen:

1. Aktivieren Sie das [Ski-Kartenansicht-Plugin](../plugins/index.md#enable--disable).  
2. Stellen Sie den [Winter- und Ski-Kartenstil](#set-winter-and-ski-map-style) für das erforderliche [Profil](../personal/profiles.md) ein.  
3. Falls erforderlich, [Karten kombinieren](#combine-maps).  
  

### Winter- und Ski-Kartenstil einstellen {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Winterstil in Android aktivieren](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Skikarten-Plugin Kartenstil Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Winterstil in iOS aktivieren](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Skikarten-Plugin Kartenstil iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Der Winter- und Ski-Kartenstil hebt Loipen, Skitourenrouten, Rodelbahnen und Informationen rund um Winter und Skifahren hervor. Um den Stil auf der Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. Wählen Sie das erforderliche [Profil](../personal/profiles.md).  
2. Öffnen Sie [Karte konfigurieren](../map/configure-map-menu.md).  
3. Scrollen Sie nach unten zu Kartenstil/Kartentyp, öffnen Sie ihn und markieren Sie **Winter und Ski**.

:::tip Konfigurationen
Das Skiprofil ist für die Verwendung in Kombination mit den Stilen Winter und Ski konzipiert. Der Navigationstyp für jedes spezifische Profil kann jedoch individuell geändert und eingestellt werden, so dass die endgültige Konfiguration des Profils, des Kartenstils und der Navigation vollständig von Ihren Einstellungen abhängt.
:::


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Keine Kartenkombination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Mit Kartenkombination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Keine Höhenlinien-Kombination in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Mit Höhenlinien-Kombination in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

Die [Vektorkarte](../map/vector-maps.md) mit dem enthaltenen [Winter- und Ski-Kartenstil](../map/vector-maps.md#winter-and-ski) kann mit [Höhenlinien](../plugins/topography.md#show-contour-linesterrain) und [Schummerung](../plugins/topography.md#hillshade-map) ergänzt werden. Unten sind zwei Beispiele. Die Spuren auf der Standard-Vektorkarte sind links dargestellt, und die Spuren auf der Vektorkarte in Kombination mit den Rasterkarten *Höhenlinien* und *Schummerung* sind rechts dargestellt. Im zweiten Fall zeigt die Karte mehr Höhendaten, um die Schwierigkeit, das Risiko und die Entfernung abzuschätzen.  


### Ski-Kartenstil deaktivieren {#disable-ski-map-style}

Wenn Sie lieber Loipen und Winterfarben von der Karte entfernen möchten oder die Skisaison vorbei ist, tun Sie eines der folgenden Dinge:

- Deaktivieren Sie den [Winter- und Ski-Kartenstil](#set-winter-and-ski-map-style) für das erforderliche Profil.  
- Ändern Sie das [Skiprofil](../personal/profiles.md) in ein beliebiges anderes Profil.
- Deaktivieren Sie das [Ski-Kartenansicht-Plugin](../plugins/index.md#enable--disable).


:::info Plugin deinstallieren
Das Ski Map Viewer Plugin ist eine separate Anwendung, und das Deaktivieren seiner Anzeige entfernt es nicht. Wenn Sie es deinstallieren müssen, gehen Sie zu den Android-Einstellungen über *Einstellungen öffnen* im Plugin-Menü.  
:::


## Skiprofil {#skiing-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Nautische Tiefenlinien in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Tiefenlinien in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Winter- und Ski-Kartenstile können in jedem Profil aktiviert werden. Am wertvollsten ist dies jedoch im [Skiprofil](../personal/profiles.md), wo es standardmäßig eingestellt ist. Das Skiprofil ist sehr komfortabel für die [Skifahr-Navigation](../navigation/routing/ski-routing.md).


## Ski-Kartenstil {#ski-map-style}

Verwenden Sie die [Ski-Kartenlegende](../../user/map-legend/ski-map.md) als Referenz. Sie hilft, die Arten von Pisten auf der Karte zu identifizieren, sowie die Arten von Luftwegen und andere Merkmale, die aus der Karte gelesen werden können.

Durch das Lesen der Karte können Sie die für Sie wichtigen Details herausfinden, wie z. B. die Schwierigkeit einer bestimmten Loipe, die Art der Loipe, ob sie präpariert wird und ob die Loipe nachts beleuchtet ist.

Die hier beschriebenen Optionen sind in der [Skifahr-Navigation](../navigation/setup/route-navigation.md) verfügbar. Bei der **Skifahr-Navigation** werden die individuellen Routenoptionen festgelegt, die nur für das Skifahren gelten.


:::info Rendering-Stil
Die OsmAnd Ski-Karte ist als einer der Rendering-Stile aufgebaut, der bestimmt, welche Objekte auf der Karte angezeigt werden und wie die Objekte aussehen. Alle Rendering-Stile sind in der Datei [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) beschrieben. Die Regeln, die die interne Struktur der XML-Datei definieren, finden Sie in der [Rendering-Dokumentation](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pisten nach Schwierigkeit {#pistes-by-difficulty}

| Farbe | Beschreibung |
| --- | --- |
| ![Anfängerpiste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Grün - Anfängerpiste |
| ![Einfache Hügel](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blau - Einfache Hügel |
| ![Mittelschwere Pisten](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rot - Mittelschwere Pisten |
| ![Fortgeschrittene Schwierigkeit](@site/static/img/plugins/ski-maps/4c_black_1.png) | Grau - Pisten mit fortgeschrittener Schwierigkeit |
| ![Experten-Schwierigkeit](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Gelb - Pisten mit Experten-Schwierigkeit |

Die Schwierigkeit der Spuren wird in der Regel durch spezifische Farben gekennzeichnet. Die Farben können in verschiedenen Ländern und Resorts unterschiedlich sein. Unten finden Sie einige praktische Richtlinien.

:::tip Anleitung
Für spezifischere Anleitungen zu jeder Schwierigkeitsstufe der Loipen siehe die [OSM Loipenschwierigkeitsreferenz](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) oder eine andere Quelle, die auch Steigungen, Hindernisse und Gefahren berücksichtigt.  
:::


### Piste nach Typen {#piste-by-types}

Pisten unterscheiden sich nach Typ. Ein Typ repräsentiert verschiedene Eigenschaften einer Piste, um die Anforderungen verschiedener Winteraktivitäten zu erfüllen: alpines Skifahren, klassisches Skaten, Snowboarden, Rodeln, Skitouren, Buckelpistenfahren, Nachtskifahren usw. Das Verständnis des [Typs der Piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) auf der Karte hilft, eine optimale Navigationsroute zu erstellen.

- **Abfahrts-/Alpinski-Piste.**  
Wird für die Skinavigation verwendet. Dieser [Pistentyp](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) hat Richtung und Schwierigkeit und ist meist von den Grenzen des Skigebiets umgeben. Wenn eine Abfahrtspiste für die Skinavigation ausgewählt wird, wird die Richtung der Piste berücksichtigt. Wenn die Start- und Zielpunkte entgegengesetzt zur Richtung der Piste liegen, erfolgt die Navigation entlang des nächstgelegenen Luftwegs.

- **Nordisch-/Backcountry-Ski-Piste.**  
Wird auch für die Skinavigation verwendet. Dieser [Pistentyp](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) hat keine Schwierigkeit, kann eine Richtung haben oder nicht und geht meist über die Grenzen des Skigebiets hinaus. Bei der Navigation entlang dieses Pistentyps können Start- und Zielpunkte oft vertauscht werden.

- **Skitouren-Piste.**  
Wird oft von Skifahrern für einen nordischen Aufstieg und eine Abfahrt verwendet. Die Schwierigkeit einer Skitourenpiste ist oft mit der entsprechenden Farbe gekennzeichnet. Die Skinavigation kann eine Route entlang dieses Pistentyps erstellen, die es Ihnen ermöglicht, die Pistentypen zu kombinieren.

- **Andere Ski-Piste.**  
Pistentypen wie *Wanderwege* oder *Rodelbahnen* können für Ski- oder Wanderprofile verwendet werden.


### Präparierte Loipen {#grooming-trails}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Präparierung in Android aktivieren](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Präparierung in Android angezeigt](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Präparierung in iOS aktivieren](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Präparierung in iOS angezeigt](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Um auf der Karte zu überprüfen, ob eine bestimmte Piste präpariert ist, müssen Sie die Option **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** in der Liste **<Translate android="true" ids="rendering_category_details"/>**, die aus dem Menü [Karte konfigurieren](../map/configure-map-menu.md) geöffnet wird, aktivieren.  
Spezielle Maschinen präparieren die Loipen, um sie für die entsprechende Aktivität vorzubereiten, wie z. B. klassisches Skaten, Eislaufen und andere. Dieselbe Piste kann in verschiedenen Gebieten unterschiedlich präpariert sein.

### Skipistenrouten {#ski-slope-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routen in Android deaktiviert](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routen in Android aktiviert](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routen in iOS deaktiviert](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routen in iOS aktiviert](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Um herauszufinden, welche Pisten außerhalb des Skigebiets Sie navigieren können, müssen Sie die Option **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** in der Liste **<Translate android="true" ids="rendering_category_routes"/>**, die aus dem Menü [Karte konfigurieren](../map/configure-map-menu.md) geöffnet wird, aktivieren.  

Mit aktiviertem Skiprofil, Skifahr-Navigation und [Winter- und Ski-Kartenstil](../map/vector-maps.md#winter-and-ski) zeigen die [Skipistenrouten](../map/vector-maps.md#routes) alle Pistentypen, die die Skifahr-Navigation verwenden kann, um Navigationsrouten entlang zu erstellen. Solche Skipistenrouten sind, wenn aktiviert, meist außerhalb der Skigebietsgrenzen violett umrandet.


### Nacht und Beleuchtung {#night-and-lighting}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nachtmodus und Beleuchtung in Android aktivieren](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Nacht und Beleuchtung in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nachtmodus und Beleuchtung in iOS aktivieren](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Nacht und Beleuchtung in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Der Stil **Winter und Ski** kann mit dem [Nacht- oder Sonnenaufgang-/Sonnenuntergangsmodus](../map/vector-maps.md#map-mode) verwendet werden. Eine komfortable Wahl für diejenigen, die dunkle Farben bevorzugen oder den Bildschirm nachts abdunkeln, sowie für diejenigen, die Nachtskifahren betreiben. Zusammen mit dem Nachtmodus können OsmAnd Skikarten auch anzeigen, welche Pisten beleuchtet sind, mit der Option [Straßenbeleuchtung](../map/vector-maps.md#details).  

Beide Optionen befinden sich im Menü [Karte konfigurieren](../map/configure-map-menu.md).  

- Um die Option ***Nachtmodus*** zu aktivieren, scrollen Sie die Liste nach unten:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- Um die Option ***Straßenbeleuchtung*** zu aktivieren, öffnen Sie die Liste **<Translate android="true" ids="rendering_category_details"/>** und schalten Sie die Option ein:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Dezember 2024*