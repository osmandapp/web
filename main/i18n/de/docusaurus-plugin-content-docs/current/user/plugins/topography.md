---
source-hash: 9c31a0e4b56a15ce32014f004b8aa04a2f3dc8f40a876c929c1589350317a6ad
sidebar_position: 14
title: Topografie
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Übersicht {#overview}

:::info Kostenpflichtige Funktion
Das Topografie-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

Topografie ist eine wichtige Funktion der Kartografie, die Informationen zur visuellen Beurteilung des Geländereliefs liefert.
Topografische Informationen wie [Höhenlinien](#contour-lines), [Gelände](#terrain) (*Schummerung* und *Neigung*) und [3D-Relief](#3d-relief) helfen bei der visuellen Einschätzung der Geländebeschaffenheit, indem sie Höhe, Relief, Extreme, Steilheit oder Punkte gleicher Höhe anzeigen.

Jede von diesem Plugin bereitgestellte Funktion ist eine unabhängige Kartenebene, die, wenn sie aktiviert ist, je nach den [Einstellungen](../map/raster-maps.md#overlay-layer) über oder unter der Hauptkartenquelle angezeigt werden kann.

Das Topografie-Plugin bietet Zugriff auf die folgenden Kartentypen:

- [Höhenlinien](#contour-lines). Dies ist eine [Vektorkarte](../map/vector-maps.md), die in [**Metern** oder **Fuß**](#contour-lines-meters-or-feet) dargestellt wird. Höhenlinien zeigen Höhenstufen an und helfen, das Gelände zu visualisieren.
- [Schummerung](#hillshade-slope-and-altitude-layers). Kartentypen mit Schattierung von Hügeln und Hängen machen das Relief besser sichtbar und helfen bei der visuellen Interpretation des Geländes.
- [Neigung](#hillshade-slope-and-altitude-layers). [Rasterebene](../map/raster-maps.md), die Informationen über die Steilheit von Hängen liefert, was für die Routenplanung und Sicherheit wichtig sein kann.
- [3D-Relief](#3d-relief). Dies ist eine [Vektorkarte](../map/vector-maps.md), die eine dreidimensionale Darstellung des Geländes bietet und nur mit dem [OsmAnd Pro-Abonnement](../purchases/index.md) verfügbar ist.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Höhenlinien | Schummerung | Neigung |
|:---|:---|:---|
| ![Höhenlinien_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Schummerung_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Neigungen_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Höhenlinien | Schummerung | Neigung |
|:---|:---|:---|
| ![Höhenlinien_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Schummerungen_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Neigungen_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

### Lizenz für DEM-Daten, die von OsmAnd zur Geländeerkennung verwendet werden {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Die Höhendaten auf der Karte (zwischen 70 Grad nördlicher Breite und 70 Grad südlicher Breite) wurden aus Messungen im Rahmen der *Shuttle Radar Topography Mission (SRTM)* gewonnen. Dabei wurde der *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, das primäre Bildgebungsinstrument im *Earth Observation System der NASA*, verwendet.
Für vollständige Informationen siehe die [Lizenz](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) Daten</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Die für dieses Produkt verwendeten Originaldaten wurden von JAXAs AW3D geliefert.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digitale Geländemodelle von Europa</a> (DTM).

</details>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um **Höhenlinien** und **Gelände (Schummerung, Neigung)** auf der Karte anzuzeigen:

1. **Kauf**: [OsmAnd+, OsmAnd Maps+ oder OsmAnd Pro Kaufplan](../plugins/index.md#purchase)
2. [Aktivieren](../plugins/index.md#enable--disable) Sie das Topografie-Plugin im Bereich Plugins des *Hauptmenüs*.
3. [Herunterladen](#download-maps): Höhenlinien-, Schummerungs-, Neigungs- oder Geländekarten (3D).
4. **Aktivieren und anpassen**: Höhenlinien, Schummerung oder Neigung für die Kartenansicht.
5. Sie können sich auch das [YouTube-Tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg) ansehen.

Um [**3D-Relief**](#3d-relief) anzuzeigen, müssen Sie den *OsmAnd Pro*-Plan erwerben, der den Zugang zum Topografie-Plugin beinhaltet.


## Karten herunterladen {#download-maps}

Um mit der Funktionalität des Plugins zu arbeiten, müssen Sie die Karten herunterladen, die Sie interessieren. Einige Karten, wie z. B. Höhenlinien für Gebirgsregionen, können recht groß sein, mehr als 2 GB, und werden möglicherweise auf veralteten Geräten nicht unterstützt.

Für eine stabile Arbeit und um Ressourcen zu sparen, können Sie eine Karte nicht des gesamten Landes, sondern seiner spezifischen Regionen herunterladen, wenn solche Regionen in der Anwendung angeboten werden. Informationen über die Größe jedes Kartentyps sind unter deren Namen aufgeführt.


### 3D-Reliefkarten {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Höhenlinien herunterladen Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Höhenlinien herunterladen Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Höhenlinien herunterladen iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Höhenlinien herunterladen iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Sie müssen **Geländekarten (3D)** herunterladen, um Schummerung, Neigung und 3D-Relief anzuzeigen. Nach dem Herunterladen der Karten können Sie **Höhenlinien** und **Gelände** über den Abschnitt [Karte konfigurieren](../map/configure-map-menu.md) im *Hauptmenü* anzeigen.

Wenn die auf dem Bildschirm angezeigte Karte nicht heruntergeladen ist, wird im Menü *→ Karte konfigurieren → Topografie → Gelände* am Ende der Liste der Funktionen der Abschnitt *Karten herunterladen* mit vorgeschlagenen zusätzlichen Karten angezeigt.


### Höhenlinien (Meter oder Fuß) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dialog zum Herunterladen von Höhenlinien Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Dialog zum Herunterladen von Höhenlinien iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>  

Für [**Höhenlinien**](#contour-lines) müssen Sie festlegen, in welchen [Einheiten](../personal/profiles.md#units--formats) (Meter oder Fuß) sie auf der Karte angezeigt werden sollen, und die entsprechende Version der Karte auf Ihr Gerät herunterladen.

**Die Einheitenoptionen sind nicht austauschbar**. Wenn Sie also von Metern auf Fuß oder umgekehrt wechseln müssen, müssen Sie die vorherige Version der Höhenlinienkarte deinstallieren, um die neue Version herunterzuladen.


## Höhenlinien {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Höhenlinien-Menü Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Höhenlinien*

![Höhenlinien-Menü iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>  

[Höhenlinien](../map/vector-maps.md#-contour-lines) sind eine grafische Darstellung von Höhen auf einer Karte und sind als Vektorkarten verfügbar. Sie bilden Linien, die Punkten mit derselben Höhe entsprechen und Konturen bilden, die es Ihnen ermöglichen zu bestimmen, in welche Richtung und wie stark die Oberfläche abfällt.

Bei Verwendung der [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine):

- **Version 2 (OpenGL)**. Höhenlinien werden sowohl in der 3D-Ansicht als auch im 3D-Relief-Modus unterstützt.
- **Version 1**. Höhenlinien werden bei der Verwendung von Kachelkarten aus dem Internet nicht unterstützt.

**Darstellungseinstellungen**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Höhenlinien ein- oder ausschalten.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Definieren Sie die [Zoomstufen](../map/interact-with-map.md#my-location-and-zoom), bei denen Höhenlinien sichtbar sind.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Wählen Sie die Farbe für die Anzeige der Höhenlinien.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Passen Sie die Breite der Höhenlinien an.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Wählen Sie die Dichte der Höhenlinien (Niedrig, Mittel, Hoch). Höhere Dichten können die Ladegeschwindigkeit beeinträchtigen.
- *<Translate android="true" ids="maps_and_resources"/>*. Anzeigen und Herunterladen von Höhenlinienkarten für die aktuelle Region und nahegelegene Gebiete.


## Gelände {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Gelände-Menü Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Gelände-Menü Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Gelände-Menü iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Gelände-Menü iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>  

Die Option **Gelände** aktiviert und ermöglicht die Anpassung von drei Funktionen wie *Schummerung*, *Neigung* und *Höhe*.
Spezifische Merkmale:

- Es kann immer nur eine Option gleichzeitig aktiviert sein, entweder Schummerung, Neigung oder Höhe.
- Wenn Sie nach dem Herunterladen und Aktivieren der entsprechenden Karte keine Änderungen sehen, wird empfohlen, die Anwendung neu zu starten.

Das **Gelände**-Menü umfasst die Auswahl eines [Farbschemas](#default-color-scheme) mit der Option, es zu [ändern](#modify-color-scheme) (für [Pro-Abonnenten](../../user/purchases/index.md)), die Möglichkeit, die Transparenz der Ebene auf der Karte zu ändern ([Sichtbarkeit](#visibility)), und die Auswahl der [Zoomstufe](#zoom-levels) für ihre Anzeige, Informationen über die Größe der [zwischengespeicherten Daten](#cache-size) und eine Liste der [Karten](../../user/personal/maps-resources.md), die zur Anzeige der Ebene benötigt werden.


## Schummerungs-, Neigungs- und Höhenschichten {#hillshade-slope-and-altitude-layers}

| Schummerung | Neigung | Höhe |
| ------ | ------- | ------- |
| ![Schummerung](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Neigung](../../../blog/2023-08-28-terrain/img/slope.png) | ![Neigung](../../../blog/2023-08-28-terrain/img/slope.png) |

**Schummerung** basiert auf der Simulation der Oberflächenbeleuchtung unter Verwendung von Geländedaten. Diese Methode beinhaltet die Erzeugung von Schatten und Lichtern basierend auf dem Winkel der Oberfläche zur Lichtquelle. Als Ergebnis sehen Sie natürliche Hügel, Täler und andere Geländedetails auf der Karte.

**Neigung** bestimmt den Neigungswinkel der Oberfläche basierend auf den Höhendaten von Punkten auf der Karte. Die Berechnungen des Neigungswinkels werden unter Berücksichtigung von Höhenänderungen und Abständen zwischen den Punkten durchgeführt und diese Änderung als Neigungswinkel dargestellt.

**Höhe** stellt die Höhe von Punkten auf der Karte relativ zum Meeresspiegel dar. Sie hilft Ihnen zu verstehen, wie sich das Gelände in der Höhe verändert. Diese Funktion ist besonders nützlich für Aktivitäten wie Wandern oder Mountainbiken, bei denen das Wissen um die Höhe bei der Planung von Routen und der Steuerung der körperlichen Anstrengung helfen kann. Höhendaten werden aus Höhenmodellen abgeleitet und bieten eine klare Sicht auf hohe und tiefe Punkte, was es einfacher macht, die Schwierigkeit einer Route zu beurteilen oder Gipfel und Täler entlang Ihrer Reise zu identifizieren.

**Schummerungs**-, **Neigungs**- und **Höhen**-Rasterkarten werden auf der Grundlage von Raster-Geländedaten wie Digitalen Höhenmodellen (DEM) erstellt.

**Verwendung:**

- *Navigation.* Hilft bei der Identifizierung steiler Hänge, sowohl bergab als auch bergauf, was für eine sichere Navigation entscheidend sein kann.
- *Routen planen.* Hilft bei der Auswahl der am besten geeigneten Routen unter Berücksichtigung des Geländes.
- *Geländeeinschätzung.* Es ist praktisch, um die Landschaft zu visualisieren, besonders wenn Sie zu Fuß oder mit dem Fahrrad unterwegs sind.


### Standard-Farbschema {#default-color-scheme}

| Schummerung | Neigung | Höhe |
| ------ | ------- | ------- |
|![Schummerung](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Neigung](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menü](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Schummerung* verwendet dunkle Farbtöne, um Hänge, Gipfel und Tiefebenen darzustellen. Die virtuelle Sonne hat einen festen Azimut (Richtung) von 315 Grad.

- *Neigung* verwendet Farben, um die Steilheit des Geländes zu visualisieren. Mehr darüber können Sie [hier](https://de.wikipedia.org/wiki/Steigung) lesen. Jede Farbe entspricht einem Winkel der Abweichung von der Horizontalen. Ein zusätzliches *Neigungs*-Farbschema, ***Lawine***, ist im Menü **Ändern** verfügbar.

- *Höhe*. Die Höhenkarte färbt jedes Pixel entsprechend der berechneten Kartenhöhe unter Verwendung des Gradienten aus einem definierten Farbschema. Normalerweise sind Höhenschemata sehr ortsabhängig. In Berggebieten würden Sie es vorziehen, Farben auf einen breiteren Höhenbereich zu verteilen, und in flachen Gebieten würden Sie ein Farbschema mit einem kleinen Bereich zwischen minimaler/maximaler Höhe wählen.

> *Bitte lesen Sie den Artikel [Farbschema](../personal/color-palette-schemes.md) für weitere Informationen.*


### Farbschema ändern {#modify-color-scheme}

:::info Kostenpflichtige Funktion
*Farbschema ändern* ist eine kostenpflichtige **OsmAnd Pro**-Funktion für [iOS](../purchases/ios.md#pro-features) und [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Farbschema ändern](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Farbschema ändern](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Farbschema ändern](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Farbschema ändern](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Die Funktion *Farbschema ändern* ermöglicht es Ihnen, ein Farbschema auszuwählen:

- Aus einer [vordefinierten Liste](#default-color-scheme).
- Aus Farbpalettendateien, die Sie auf Ihrem Computer erstellt haben. Benutzerdefinierte Dateien können mit dem [Import/Export-Werkzeug](../personal/import-export.md) zu OsmAnd hinzugefügt werden.

Sie können [diese Paletten bearbeiten](../personal/color-palette-schemes.md#edit-palette-file), um das Aussehen von Karten und Routen zu personalisieren.


### Sichtbarkeit {#visibility}

| Sichtbarkeit 31% | Sichtbarkeit 74% |
| ------ | ------- |
| ![Sichtbarkeit ](../../../blog/2023-08-28-terrain/img/31.png) | ![Sichtbarkeit ](../../../blog/2023-08-28-terrain/img/74.png) |

Die Funktion *Sichtbarkeit* wird verwendet, um die Transparenz der Schatten für die Schummerung und der Farben, die zur Darstellung des Winkels im Neigungsparameter verwendet werden, anzupassen.

### Zoomstufen {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)  

Die Funktion *Skalierungsstufen* ermöglicht es Ihnen, die minimalen und maximalen Werte der Kartenzoomstufen von 4 bis 19 festzulegen, bei denen die Schummerungs- oder Neigungskartenebenen angezeigt werden.

### Cache-Größe {#cache-size}

**Cache-Größe** ist ein Informationsbereich, der die Menge an Speicher auf Ihrem Gerät anzeigt, die derzeit für *Gelände*-Daten verwendet wird. Jedes Mal, wenn Sie *Schummerungs*- oder *Neigungs*-Informationen auf einer Karte anzeigen, werden all diese Daten vorübergehend im Cache gespeichert, um einen schnellen Zugriff und eine spätere Verwendung zu ermöglichen und zusätzliche Belastungen für den Prozessor Ihres Geräts zu vermeiden.

**Das Leeren des Caches** ist manchmal notwendig, um Speicherplatz auf Ihrem Gerät freizugeben oder um potenzielle Leistungsprobleme zu beheben. Um den Cache zu leeren, müssen Sie zu den *Systemeinstellungen* des Geräts gehen, der Pfad kann dann wie folgt lauten: *Anwendungen → OsmAnd → Speicher → Cache leeren*.


### Rendering-Engine (Android) {#rendering-engine-android}

**Schummerung** und **Neigung** werden in jeder ausgewählten [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) angezeigt und angepasst.

1. Wenn Sie die **Karten-Rendering-Engine Version 1** verwenden, müssen Sie das normale [Herunterladen](../start-with/download-maps.md) von Schummerungs- und Neigungs-Rasterkarten verwenden.

2. Wenn Sie die **Karten-Rendering-Engine Version 2 (OpenGL)** verwenden:
    - Sie können weiterhin den normalen Download-Typ für Schummerungs- und Neigungs-Rasterkarten verwenden. Dazu müssen Sie jedoch das [OsmAnd-Entwickler-Plugin](../plugins/development.md) aktivieren und die Einstellung [Raster-SQLite-Format für Schummerung und Neigung verwenden](../plugins/development.md#terrain) aktivieren.

    - Alternativ können Sie den Download [Geländekarte (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location) verwenden. Dies spart Speicherplatz auf Ihrem Gerät, und die Effekte für Schummerung, Neigung und 3D-Relief werden daraus mit Ihrem Gerät generiert.


### Schnellaktionen {#quick-actions}

![QA für Gelände](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Sie können die *Schnellaktions*-Schaltflächen auf dem Kartenbildschirm verwenden, um die Sichtbarkeit der Ebenen [Höhenlinien](#contour-lines), [Gelände](#terrain) und des [Gelände-Farbschemas](#default-color-scheme) umzuschalten. Abhängig von der im Menü "Karte konfigurieren" ausgewählten Ebene wird durch Zuweisen einer *Gelände*-Aktion zur Schaltfläche *Schummerung*, *Neigung* oder *Höhe* angezeigt.

Die Haupteinstellungen für *Kartentypen anzeigen oder ausblenden* befinden sich im Abschnitt Topografie des Menüs "Karte konfigurieren". Im Artikel [Schnellaktion](../widgets/quick-action.md#configure-map) finden Sie eine Liste der zur Anzeige verfügbaren Ebenen. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Werkzeug *Benutzerdefinierte Schaltfläche*.

- Gehen Sie zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere QA-Schaltflächen hinzu, um die Sichtbarkeit einer bestimmten Topografieebene zu ändern.


## 3D-Relief {#3d-relief}

:::info Pro-Funktion
3D-Relief ist eine kostenpflichtige [**OsmAnd Pro**](../purchases/index.md)-Funktion <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D-Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D-Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>  

Die 3D-Relief-Funktion erzeugt ein erhabenes Relief und bietet eine dreidimensionale Darstellung der Landschaft. 3D-Relief funktioniert offline und kann mit [OsmAnd-Vektorkarten](../map/vector-maps.md) oder beliebigen [Rasterkarten](../map/raster-maps.md#select-raster-maps) als [Kartenquelle](../map/raster-maps.md#main) oder als [Unterlage/Überlagerung](../map/raster-maps.md#overlay-layer) verwendet werden.

***Wie man 3D-Relief auf der Karte anzeigt.***

- Erwerben Sie ein **OsmAnd Pro**-Abonnement für [iOS](../purchases/ios.md#pro-features) oder [Android](../purchases/android.md#pro-features).

- Gehen Sie zu [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: scrollen Sie zum Abschnitt *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: scrollen Sie zum Abschnitt *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Laden Sie bei Bedarf die [Geländekarte (3D)](#3d-relief-maps) der Regionen herunter.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Vektorkartenebene | Rasterkartenebene |
| ------ | ------- |
| ![3D-Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D-Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>  

<TabItem value="ios" label="iOS">

| Vektorkartenebene | Rasterkartenebene |
| ------ | ------- |
| ![3D-Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![3D-Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Vertikale Überhöhung {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Vertikale Überhöhung*

![Vertikale Überhöhung Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Vertikale Überhöhung*

![Vertikale Überhöhung iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Vertikale Überhöhung* ist ein spezieller Koeffizient für das *3D-Relief*. Sie können den Maßstab (*Vertikale Überhöhung*) von x1 bis x3 ändern. Diese Funktion ermöglicht es Ihnen, glattere Geländekonturen mit erhöhter Detailgenauigkeit anzuzeigen.


### Schummerung und 3D-Relief {#hillshade-and-3d-relief}

| Schummerung | 3D-Relief |
|--------|---------|
| ![Geländeebenen](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Geländeebenen](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Schummerung** ist ein Kartentyp, der das Gelände mithilfe von Schatten darstellt und so eine visuelle Darstellung der Neigung und Form der Erdoberfläche erzeugt.
**3D-Relief** ist eine Funktion, die der Karte dreidimensionale Effekte hinzufügt.

Wenn Sie *Schummerung* **deaktivieren** und *3D-Relief* **aktivieren**, sind Reliefschatten weiterhin sichtbar, da *Schummerung* und *3D-Relief* zwei verschiedene Arten der Visualisierung einer Karte sind. *Schummerung* erzeugt Schatten basierend auf dem Gelände und fügt sie der Karte hinzu, während *3D-Relief* 3D-Elemente modelliert, um die Tiefe und Form des Geländes zu zeigen, und die Schatten Teil der Visualisierung sind. Diese Funktionen können parallel arbeiten, und das Deaktivieren von *Schummerung* hat keinen Einfluss darauf, wie 3D-Effekte angezeigt werden.

Wenn **Schummerung** **aktiviert** ist, erscheint ein Bild mit Reliefschatten detaillierter, dunkler und stufiger als ein *3D-Relief*-Bild. Die Erklärung ist, dass *Schummerung* die Gradienten und Kontraste des Geländes hervorhebt und ein schärferes und detaillierteres Bild erzeugt. Die *3D-Relief*-Funktion verleiht der Karte ein flüssigeres und geglättetes Aussehen, was das Gelände weicher macht und möglicherweise die Sichtbarkeit einiger feinerer Details reduziert.


## Ebenentypen kombinieren {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Höhenlinien kombiniert mit Schummerung](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Höhenlinien kombiniert mit Neigung](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Höhenlinien kombiniert mit Schummerung in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Höhenlinien kombiniert mit Neigung in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, mehrere Arten von Kartenebenen für eine visuellere Darstellung zu kombinieren.

- Die Kombination von **Höhenlinien** und **Schummerung** ist optimal für die visuelle und numerische Einschätzung der Steilheit von Berghängen.
- Die Kombination von **Höhenlinien** und **Neigungs**-Ebenen ist am besten geeignet, um die Steilheit von Hängen abzuschätzen und Punkte mit gleicher Höhe zu finden.
- Die Kombination von **3D-Relief** und **Schummerungs**-Ebenen ermöglicht eine realistischere und visuellere Darstellung des Geländes, des Reliefs und der Landschaftsdetails. Diese Kombination eignet sich besonders für gebirgiges und hügeliges Gelände.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Wie man den Kauf des Topografie-Plugins (ehemals Höhenlinien) wiederherstellt. [(prüfen)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Höhenlinien, Höhendaten oder 3D-Relief werden nicht angezeigt. [(prüfen)](../troubleshooting/maps-data#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Die Karte schaltet während der Navigation automatisch in den 3D-Modus:
    - Stellen Sie sicher, dass die Schaltfläche **3D-Modus** in **Menü → Bildschirm konfigurieren → Schaltflächen → Standard-Schaltflächen** deaktiviert ist.
    - Überprüfen Sie, ob in **Menü → Karte konfigurieren → Topografie** Geländefunktionen aktiviert sind, die einen 3D-Effekt auslösen können.