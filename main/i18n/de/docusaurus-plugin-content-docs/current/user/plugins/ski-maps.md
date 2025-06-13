---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title:  Ski Kartenansicht
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

Das OsmAnd Ski Kartenansicht-Plugin zeigt berühmte und beliebte Pisten, offiziell genehmigte Skigebiete und Loipenkarten der meisten Skigebiete. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) Pistenkarten sind die Datenquelle für OsmAnd Ski Karten. Durch die Kombination von Vektor- und Rasterkarten ist die OsmAnd Ski Karte sehr genau und nützlich für Instruktoren, Kletterer und Wintersportler.

Die OsmAnd Ski Karte ist Teil der Vektorkarten und erfordert keine zusätzlichen Downloads. Sie ist standardmäßig deaktiviert. Die OsmAnd Ski Karte ist einer der [Kartenstile](../map/vector-maps.md), der zusätzliche Funktionen bietet, indem er einige Objekte hervorhebt und andere weniger sichtbar macht.

Unten sind zwei Profile dargestellt: das linke ist zum Skifahren und das rechte zum Autofahren. Das Skiprofil hebt Loipen, Luftwege, Winterfarben und alle Kartenobjekte hervor, die für die Navigation im Skigebiet nützlich sind.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ski maps in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![No Ski maps in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![No Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgende Einstellung lässt die OsmAnd Ski Karte auf dem Bildschirm erscheinen:

1. Aktivieren Sie das [Ski Kartenansicht-Plugin](../plugins/index.md#enable--disable).
2. Stellen Sie den [Winter- und Ski Kartenstil](#set-winter-and-ski-map-style) für das gewünschte [Profil](../personal/profiles.md) ein.
3. Falls erforderlich, [Karten kombinieren](#combine-maps).


### Winter- und Ski Kartenstil einstellen {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Enable Winter style in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Ski maps plugin map style Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Enable Winter style in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Ski maps plugin map style iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Der Winter- und Ski Kartenstil hebt Loipen, Skitourenrouten, Rodelbahnen und Informationen hervor, die mit Winter und Skifahren zusammenhängen. Um den Stil auf der Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. Wählen Sie das gewünschte [Profil](../personal/profiles.md) aus.
2. Öffnen Sie [Karte konfigurieren](../map/configure-map-menu.md).
3. Scrollen Sie nach unten zu Kartenstil/Kartentyp, öffnen Sie es und aktivieren Sie **Winter und Ski**.

:::tip Konfigurationen
Das Skiprofil ist für die Verwendung in Kombination mit den Winter- und Skistilen konzipiert. Der Navigationstyp für jedes spezifische Profil kann jedoch individuell geändert und eingestellt werden, sodass die endgültige Konfiguration von Profil, Kartenstil und Navigation vollständig von Ihren Einstellungen abhängt.
:::


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![No map combination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![With map combination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![No map combination in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![With map combination in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

Die [Vektorkarte](../map/vector-maps.md) mit dem enthaltenen [Winter- und Ski Kartenstil](../map/vector-maps.md#winter-and-ski) kann mit [Höhenlinien](../plugins/topography.md#show-contour-linesterrain) und [Schummerung](../plugins/topography.md#hillshade-map) ergänzt werden. Unten sind zwei Beispiele. Die Spuren auf der Standard-Vektorkarte sind links dargestellt, und die Spuren auf der Vektorkarte in Kombination mit der Rasterkarte *Höhenlinien* und *Schummerung* sind rechts dargestellt. Im zweiten Fall zeigt die Karte mehr Höhendaten, um die Schwierigkeit, das Risiko und die Entfernung besser einschätzen zu können.


### Ski Kartenstil deaktivieren {#disable-ski-map-style}

Wenn Sie es vorziehen, Loipen und Winterfarben von der Karte zu entfernen, oder die Skisaison vorbei ist, tun Sie eines der folgenden Dinge:

- Deaktivieren Sie den [Winter- und Ski Kartenstil](#set-winter-and-ski-map-style) für das gewünschte Profil.
- Ändern Sie das [Skiprofil](../personal/profiles.md) in ein anderes Profil.
- Deaktivieren Sie das [Ski Kartenansicht-Plugin](../plugins/index.md#enable--disable).


:::info Plugin deinstallieren
Das Ski Kartenansicht-Plugin ist eine separate Anwendung, und das Deaktivieren der Anzeige entfernt es nicht. Wenn Sie es deinstallieren müssen, gehen Sie zu den Android Einstellungen über *Einstellungen öffnen* im Plugin Menü.
:::


## Skiprofil {#skiing-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Nautical depth contours in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Depth contours in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Winter- und Ski Kartenstile können in jedem Profil aktiviert werden. Am wertvollsten ist es jedoch im [Skiprofil](../personal/profiles.md), wo es standardmäßig eingestellt ist. Das Skiprofil ist sehr komfortabel für die [Ski-Navigation](../navigation/routing/ski-routing.md).


## Ski Kartenstil {#ski-map-style}

Verwenden Sie die [Ski Kartenlegende](../../user/map-legend/ski-map.md) als Referenz. Sie hilft, die Arten von Pisten auf der Karte zu identifizieren, sowie die Arten von Luftwegen und andere Eigenschaften, die aus der Karte gelesen werden können.

Durch das Lesen der Karte können Sie die für Sie wichtigen Details herausfinden, wie z. B. die Schwierigkeit einer bestimmten Loipe, die Art der Loipe, ob sie präpariert ist und ob die Loipe nachts beleuchtet ist.

Die hier beschriebenen Optionen sind in der [Ski-Navigation](../navigation/setup/route-navigation.md) verfügbar. Die **Ski-Navigation** legt die individuellen Routenoptionen fest, die nur für das Skifahren gelten.


:::info Rendering-Stil
Die OsmAnd Ski Karte ist als einer der Rendering-Stile aufgebaut, der bestimmt, welche Objekte auf der Karte angezeigt werden und wie die Objekte aussehen. Alle Rendering-Stile sind in der Datei [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) beschrieben. Die Regeln, die die interne Struktur der XML-Datei definieren, finden Sie in der [Rendering-Dokumentation](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pisten nach Schwierigkeit {#pistes-by-difficulty}

| Farbe | Beschreibung |
| --- | --- |
| ![Beginner piste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Grün - Anfängerpiste |
| ![ Easy hills](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blau - Leichte Hügel |
| ![Intermediate slopes](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rot - Mittelschwere Pisten |
| ![Advanced difficulty](@site/static/img/plugins/ski-maps/4c_black_1.png) | Grau - Pisten mit fortgeschrittenem Schwierigkeitsgrad |
| ![Expert difficulty](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Gelb - Pisten mit Experten-Schwierigkeitsgrad |

Die Schwierigkeit der Spuren wird in der Regel durch bestimmte Farben gekennzeichnet. Die Farben können in verschiedenen Ländern und Resorts unterschiedlich sein. Im Folgenden finden Sie einige praktische Richtlinien.

:::tip Anleitung
Spezifischere Anleitungen für jeden Schwierigkeitsgrad der Loipe finden Sie in der [OSM-Pistenschwierigkeitsreferenz](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) oder einer anderen Quelle, die auch Hänge, Hindernisse und Gefahren berücksichtigt.
:::


### Piste nach Typen {#piste-by-types}

Pisten unterscheiden sich nach Typ. Ein Typ repräsentiert verschiedene Eigenschaften für eine Piste, um die Anforderungen verschiedener winterbezogener Aktivitäten zu erfüllen: alpines Skifahren, klassisches Skating, Snowboarden, Rodeln, Backcountry-Skifahren, Skitouren, Buckelpistenfahren, Nachtskifahren usw. Das Verständnis des [Typs der Piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) auf der Karte hilft, eine optimale Navigationsroute zu erstellen.

- **Abfahrts-/Alpinski-Piste.**
Wird für die Ski-Navigation verwendet. Dieser [Pistentyp](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) hat Richtung und Schwierigkeit und ist meist von den Grenzen des Skigebiets umgeben. Wenn eine Abfahrtspiste für die Ski-Navigation ausgewählt wird, wird die Richtung der Piste berücksichtigt. Wenn die Start- und Zielpunkte entgegengesetzt zur Richtung der Piste festgelegt sind, erfolgt die Navigation entlang des nächstgelegenen Luftwegs.

- **Nordic-/Backcountry-Ski-Piste.**
Wird auch für die Ski-Navigation verwendet. Dieser [Pistentyp](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) hat keine Schwierigkeit, kann eine Richtung haben oder auch nicht, und verläuft meist außerhalb der Grenzen des Skigebiets. Bei der Navigation entlang dieses Pistentyps können die Start- und Zielpunkte oft vertauscht werden.

- **Skitouren-Piste.**
Wird oft von Skifahrern für einen nordischen Aufstieg und eine Abfahrtsabfahrt genutzt. Die Schwierigkeit einer Skitourenpiste ist oft mit der entsprechenden Farbe gekennzeichnet. Die Ski-Navigation kann eine Route entlang dieses Pistentyps erstellen, wodurch Sie die Pistentypen kombinieren können.

- **Andere Ski-Piste.**
Pistentypen wie *Wanderwege* oder *Rodelbahnen* können für Ski- oder Wanderprofile verwendet werden.


### Loipenpräparierung {#grooming-trails}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Enable grooming in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Grooming displayed in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Enable grooming in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Grooming displayed in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Um auf der Karte zu überprüfen, ob eine bestimmte Piste präpariert ist, müssen Sie die Option **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** in der Liste **<Translate android="true" ids="rendering_category_details"/>** aktivieren, die Sie über das Menü [Karte konfigurieren](../map/configure-map-menu.md) öffnen.
Spezielle Maschinen präparieren die Loipen, um sie für die entsprechende Aktivität vorzubereiten, wie z. B. klassisches Skating, Eislaufen und andere. Dieselbe Piste kann in verschiedenen Bereichen unterschiedlich präpariert sein.

### Skipistenrouten {#ski-slope-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routes disabled in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routes enabled in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routes disabled in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routes enabled in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Um herauszufinden, welche Pisten außerhalb des Skigebiets Sie navigieren können, müssen Sie die Option **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** in der Liste **<Translate android="true" ids="rendering_category_routes"/>** aktivieren, die Sie über das Menü [Karte konfigurieren](../map/configure-map-menu.md) öffnen.

Mit aktiviertem Skiprofil, Ski-Navigation und [Winter- und Ski Kartenstil](../map/vector-maps.md#winter-and-ski) zeigen die [Skipistenrouten](../map/vector-maps.md#routes) alle Pistentypen an, die die Ski-Navigation zum Erstellen von Navigationsrouten verwenden kann. Solche Skipistenrouten sind, wenn aktiviert, meist außerhalb der Skigebietsgrenzen violett umrandet.


### Nacht und Beleuchtung {#night-and-lighting}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Enable Night mode and Lighting in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Night and lighting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Enabling Night mode and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Night and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Der Stil **Winter und Ski** kann mit dem [Nacht- oder Sonnenaufgang-/Sonnenuntergangsmodus](../map/vector-maps.md#map-mode) verwendet werden. Eine komfortable Wahl für diejenigen, die dunkle Farben bevorzugen oder den Bildschirm nachts abdunkeln, sowie für diejenigen, die Nachtskifahren praktizieren. Zusammen mit dem Nachtmodus kann OsmAnd Ski Maps auch anzeigen, welche Pisten mit der Option [Straßenbeleuchtung](../map/vector-maps.md#details) beleuchtet sind.

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