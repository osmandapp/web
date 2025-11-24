---
source-hash: f47abfa20a1e2094476033fa2ea73c6c94bc39f2fc7f0a5024cacdd02d47d391
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


## Übersicht {#overview}

Das Plugin Ski-Kartenansicht von OsmAnd zeigt berühmte und beliebte Pisten, offiziell anerkannte Skigebiete und Loipenkarten der meisten Skigebiete. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) Pistenkarten sind die Datenquelle für die OsmAnd-Skikarten. Durch die Kombination von Vektorkarten mit Rasterkarten ist die OsmAnd-Skikarte sehr genau und nützlich für Skilehrer, Bergsteiger und Wintersportler.

Die OsmAnd-Skikarte ist Teil der Vektorkarten und erfordert keine zusätzlichen Downloads. Sie ist standardmäßig deaktiviert. Die OsmAnd Ski-Karte ist einer der [Kartenstile](../map/vector-maps.md), der zusätzliche Funktionen bietet, indem er einige Objekte hervorhebt und andere weniger sichtbar macht.  

Unten sind zwei Profile abgebildet: das linke ist für das Skifahren und das rechte für das Autofahren. Das Ski-Profil hebt Loipen, Seilbahnen, Winterfarben und alle Kartenobjekte hervor, die für die Navigation im Skigebiet nützlich sind.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Skikarten in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Keine Skikarten in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Skikarten in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Keine Skikarten in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgende Einstellung sorgt dafür, dass die OsmAnd Ski-Karte auf dem Bildschirm erscheint:

1. Aktivieren Sie das [Plugin Ski-Kartenansicht](../plugins/index.md#enable--disable).  
2. Stellen Sie den Kartenstil [Winter und Ski](#set-winter-and-ski-map-style) für das gewünschte [Profil](../personal/profiles.md) ein.  
3. Falls erforderlich, [kombinieren Sie Karten](#combine-maps).  
  

### Winter- und Ski-Kartenstil festlegen {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Winter-Stil in Android aktivieren](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Kartenstil des Skikarten-Plugins Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Winter-Stil in iOS aktivieren](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Kartenstil des Skikarten-Plugins iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Der Kartenstil Winter und Ski hebt Loipen, Skitourenrouten, Rodelbahnen und Informationen rund um Winter und Skifahren hervor. Um den Stil auf der Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. Wählen Sie das gewünschte [Profil](../personal/profiles.md).  
2. Öffnen Sie [Karte konfigurieren](../map/configure-map-menu.md).  
3. Scrollen Sie nach unten zu Kartenstil/Kartentyp, öffnen Sie es und aktivieren Sie **Winter und Ski**.

:::tip Konfigurationen
Das Ski-Profil ist für die Verwendung in Kombination mit den Stilen Winter und Ski konzipiert. Der Navigationstyp für jedes spezifische Profil kann jedoch geändert und individuell eingestellt werden, sodass die endgültige Konfiguration von Profil, Kartenstil und Navigation vollständig von Ihren Einstellungen abhängt.
:::


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Keine Kartenkombination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Mit Kartenkombination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Keine Kartenkombination in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Mit Kartenkombination in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

Die [Vektorkarte](../map/vector-maps.md) mit dem enthaltenen [Kartenstil Winter und Ski](../map/vector-maps.md#winter-and-ski) kann mit [Höhenlinien](../plugins/topography.md#contour-lines) und [Schummerung](../plugins/topography.md#hillshade-slope-and-altitude-layers) ergänzt werden. Unten sind zwei Beispiele abgebildet. Links sind die Spuren auf der Standard-Vektorkarte dargestellt, und rechts die Spuren auf der Vektorkarte, die mit der Rasterkarte *Höhenlinien* und *Schummerung* kombiniert ist. Im zweiten Fall zeigt die Karte mehr Höhendaten, um Schwierigkeit, Risiko und Entfernung besser einschätzen zu können.  


### Ski-Kartenstil deaktivieren {#disable-ski-map-style}

Wenn Sie Loipen und Winterfarben von der Karte entfernen möchten oder die Skisaison vorbei ist, führen Sie einen der folgenden Schritte aus:

- Deaktivieren Sie den Kartenstil [Winter und Ski](#set-winter-and-ski-map-style) für das gewünschte Profil.  
- Wechseln Sie vom [Ski-Profil](../personal/profiles.md) zu einem anderen Profil.
- Deaktivieren Sie das [Plugin Ski-Kartenansicht](../plugins/index.md#enable--disable).


:::info Plugin deinstallieren
Das Plugin Ski-Kartenansicht ist eine separate Anwendung, und das Deaktivieren der Anzeige entfernt es nicht. Wenn Sie es deinstallieren müssen, gehen Sie zu den Android-Einstellungen über *Einstellungen öffnen* im Plugin-Menü.  
:::


## Ski-Profil {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Ski-Profil in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Ski-Profil in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Die Kartenstile Winter und Ski können in jedem Profil aktiviert werden. Am wertvollsten ist er jedoch im [Ski-Profil](../personal/profiles.md), wo er standardmäßig eingestellt ist. Das Ski-Profil ist sehr komfortabel für die [Ski-Navigation](../navigation/routing/ski-routing.md).


## Ski-Kartenstil {#ski-map-style}

Verwenden Sie die [Legende der Skikarte](../../user/map-legend/ski-map.md) als Referenz. Sie hilft bei der Identifizierung der Pistenarten auf der Karte sowie der Arten von Seilbahnen und anderer Merkmale, die von der Karte abgelesen werden können.

Durch das Lesen der Karte können Sie für Sie wichtige Details herausfinden, wie z.B. den Schwierigkeitsgrad einer bestimmten Loipe, die Art der Loipe, ob eine Präparierung stattfindet und ob die Loipe nachts beleuchtet ist.

Die hier beschriebenen Optionen sind in der [Ski-Navigation](../navigation/setup/route-navigation.md) verfügbar. Die **Ski-Navigation** legt die individuellen Routenoptionen fest, die nur für das Skifahren gelten.


:::info Darstellungsstil
Die OsmAnd Ski-Karte ist als einer der Darstellungsstile aufgebaut, der bestimmt, welche Objekte auf der Karte angezeigt werden und wie diese aussehen. Alle Darstellungsstile sind in der Datei [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) beschrieben. Die Regeln, die die interne Struktur der XML-Datei definieren, finden Sie in der [Dokumentation zur Darstellung](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pisten nach Schwierigkeitsgrad {#pistes-by-difficulty}

| Farbe | Beschreibung |
| --- | --- |
| ![Anfängerpiste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Grün - Anfängerpiste |
| ![Einfache Hänge](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blau - Einfache Hänge |
| ![Mittelschwere Pisten](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rot - Mittelschwere Pisten |
| ![Fortgeschrittener Schwierigkeitsgrad](@site/static/img/plugins/ski-maps/4c_black_1.png) | Grau - Pisten fortgeschrittenen Schwierigkeitsgrads |
| ![Experten-Schwierigkeitsgrad](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Gelb - Pisten expertenhaften Schwierigkeitsgrads |

Der Schwierigkeitsgrad von Spuren wird in der Regel durch bestimmte Farben angegeben. Die Farben können in verschiedenen Ländern und Skigebieten unterschiedlich sein. Nachfolgend finden Sie einige praktische Richtlinien.

:::tip Anleitung
Für spezifischere Anleitungen zu den einzelnen Pistenschwierigkeitsgraden siehe die [OSM-Referenz zur Pistenschwierigkeit](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) oder eine andere Quelle, die auch Hänge, Hindernisse und Gefahren berücksichtigt. Im Winter- und Ski-Kartenstil können bestimmte kartierte Gefahren (z. B. lawinengefährdete Gebiete, die als hazard=avalanche markiert sind) als Gefahren-POI auf der Karte angezeigt werden und sollten zusammen mit dem Pistenschwierigkeitsgrad berücksichtigt werden.  
:::


### Pisten nach Typen {#piste-by-types}

Pisten unterscheiden sich nach ihrem Typ. Ein Typ repräsentiert unterschiedliche Eigenschaften einer Piste, um den Anforderungen verschiedener winterbezogener Aktivitäten gerecht zu werden: alpines Skifahren, klassisches Skaten, Snowboarden, Rodeln, Skitourengehen, Buckelpistenfahren, Nachtskifahren usw. Das Verständnis des [Pistentyps](https://wiki.openstreetmap.org/wiki/Key:piste:type) auf der Karte hilft, eine optimale Navigationsroute zu erstellen.

- **Abfahrts-/Alpin-Skipiste.**  
Wird für die Ski-Navigation verwendet. Dieser [Pistentyp](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) hat eine Richtung und einen Schwierigkeitsgrad und ist meist von den Grenzen des Skigebiets umgeben. Wenn eine Abfahrtspiste für die Ski-Navigation ausgewählt wird, wird die Richtung der Piste berücksichtigt. Wenn der Start- und der Zielpunkt entgegen der Pistenrichtung festgelegt werden, verläuft die Navigation entlang der nächstgelegenen Seilbahn.

- **Nordische/Hinter-dem-Skigebiet-Skipiste.**  
Wird ebenfalls für die Ski-Navigation verwendet. Dieser [Pistentyp](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) hat keinen Schwierigkeitsgrad, kann eine Richtung haben oder auch nicht und verläuft meist außerhalb der Grenzen des Skigebiets. Bei der Navigation auf diesem Pistentyp können Start- und Zielpunkt oft vertauscht werden.

- **Skitourenpiste.**  
Wird oft von Skifahrern für einen nordischen Aufstieg und eine Abfahrt genutzt. Der Schwierigkeitsgrad einer Skitourenpiste ist oft mit der entsprechenden Farbe gekennzeichnet. Die Ski-Navigation kann eine Route entlang dieses Pistentyps erstellen, was es ermöglicht, die Pistentypen zu kombinieren.

- **Andere Skipisten.**  
Pistentypen wie *Wanderwege* oder *Rodelbahnen* können für Ski- oder Wanderprofile verwendet werden.


### Pistenpräparierung {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Präparierung in Android aktivieren](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Präparierung in Android angezeigt](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Präparierung in iOS aktivieren](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Präparierung in iOS angezeigt](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Um auf der Karte zu überprüfen, ob eine bestimmte Piste präpariert ist, müssen Sie die Option **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** in der Liste **<Translate android="true" ids="rendering_category_details"/>** aktivieren, die über das Menü [Karte konfigurieren](../map/configure-map-menu.md) geöffnet wird.  
Spezielle Maschinen präparieren die Spuren, um sie für die entsprechende Aktivität wie klassisches Skaten, Eislaufen und andere vorzubereiten. Dieselbe Piste kann in verschiedenen Bereichen unterschiedlich präpariert sein.

### Skipistenrouten {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Skipisten und Routen*

![Routen in Android deaktiviert](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routen in Android aktiviert](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Skipisten und Routen*

![Routen in iOS deaktiviert](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routen in iOS aktiviert](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Um herauszufinden, auf welchen Pisten außerhalb des Skigebiets Sie navigieren können, müssen Sie die Option **Skipisten und Routen** in der Liste **[<Translate android="true" ids="rendering_category_routes"/>](../map/routes.md)** aktivieren, die über das Menü [Karte konfigurieren](../map/configure-map-menu.md) geöffnet wird.  

Mit aktiviertem Ski-Profil, Ski-Navigation und dem [Kartenstil Winter und Ski](../map/vector-maps.md#winter-and-ski) zeigen die [Skipisten und Routen](../map/vector-maps.md#ski-slopes-and-routes) alle Pistenarten an, die die Ski-Navigation zum Erstellen von Navigationsrouten verwenden kann. Solche Skipistenrouten sind, wenn sie aktiviert sind, meist außerhalb der Skigebietsgrenzen violett umrandet.  
Wenn Sie die Option [Skipisten und Routen](../map/vector-maps.md#ski-slopes-and-routes) für einen Kartenstil außerhalb von Winter und Ski aktivieren, werden nur die Pisten angezeigt. Andere ski-bezogene Funktionen werden in dieser Darstellungsebene möglicherweise nicht angezeigt.  
_Skipisten und Routen_ [sind anklickbar](../map/routes.md#actions-with-routes).


### Nacht und Beleuchtung {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nachtmodus und Beleuchtung in Android aktivieren](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Nacht und Beleuchtung in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nachtmodus und Beleuchtung in iOS aktivieren](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Nacht und Beleuchtung in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Der Stil **Winter und Ski** kann mit dem [Nacht- oder Sonnenaufgangs-/Sonnenuntergangsmodus](../map/vector-maps.md#map-mode) verwendet werden. Eine komfortable Wahl für diejenigen, die dunkle Farben bevorzugen oder den Bildschirm nachts abdunkeln, sowie für diejenigen, die Nachtskifahren praktizieren. Zusammen mit dem Nachtmodus können die OsmAnd Ski-Karten mit der Option [Straßenbeleuchtung](../map/vector-maps.md#details) auch anzeigen, welche Pisten beleuchtet sind.  

Beide Optionen befinden sich im Menü [Karte konfigurieren](../map/configure-map-menu.md).  

- Um die Option ***Nachtmodus*** zu aktivieren, scrollen Sie in der Liste nach unten:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- Um die Option ***Straßenbeleuchtung*** zu aktivieren, öffnen Sie die Liste **<Translate android="true" ids="rendering_category_details"/>** und schalten Sie die Option ein:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)