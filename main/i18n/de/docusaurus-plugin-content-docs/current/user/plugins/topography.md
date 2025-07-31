---
source-hash: 191954c813f34f798ce26abb0d68f5443817e0370f9497817d385e2fbd80105e
sidebar_position: 14
title: Topographie
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



## Überblick {#overview}

:::info Kostenpflichtige Funktion
Das Topographie-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

Topographie ist ein wichtiges Merkmal der Kartographie, das Informationen zur visuellen Beurteilung des Geländereliefs liefert.
Topographische Informationen wie [Höhenlinien](#contour-lines), [Gelände](#terrain) (*Schummerung* und *Hangneigung*) und [3D-Relief](#3d-relief) helfen, eine visuelle Einschätzung der Geländebeschaffenheit zu erhalten, indem sie Höhe, Relief, Extreme, Steilheit oder Punkte gleicher Höhe zeigen.

Jede von diesem Plugin bereitgestellte Funktion ist eine unabhängige Kartenebene, die, wenn aktiviert, je nach den [Einstellungen](../map/raster-maps.md#overlay-layer) über oder unter der Hauptkartenquelle angezeigt werden kann.

Das Topographie-Plugin bietet Zugang zu den folgenden Kartentypen:

- [Höhenlinien](#contour-lines). Dies ist eine [Vektorkarte](../map/vector-maps.md), die in [**Metern** oder **Fuß**](#contour-lines-meters-or-feet) dargestellt wird. Höhenlinien zeigen Höhenniveaus und helfen, das Gelände zu visualisieren.
- [Schummerung](#hillshade-slope-and-altitude-layers). Kartentypen mit Schattierung von Hügeln und Hängen machen das Relief sichtbarer und helfen, das Gelände visuell zu interpretieren.
- [Hangneigung](#hillshade-slope-and-altitude-layers). [Rasterebene](../map/raster-maps.md), die Informationen über die Steilheit von Hängen liefert, was für die Routenplanung und Sicherheit wichtig sein kann.
- [3D-Relief](#3d-relief). Dies ist eine [Vektorkarte](../map/vector-maps.md), die eine dreidimensionale Darstellung des Geländes bietet und nur mit einem [OsmAnd Pro Abonnement](../purchases/index.md) verfügbar ist.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Höhenlinien | Schummerung | Hangneigung |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Höhenlinien | Schummerung | Hangneigung |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Lizenz für DEM-Daten, die von OsmAnd zur Geländeerkennung verwendet werden {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Die Höhendaten auf der Karte (zwischen 70 Grad nördlicher Breite und 70 Grad südlicher Breite) wurden aus Messungen gewonnen, die im Rahmen der *Shuttle Radar Topography Mission (SRTM)* durchgeführt wurden. Dabei wurde das *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, das primäre Bildgebungsinstrument im *NASA's Earth Observation System*, verwendet.
Vollständige Informationen finden Sie in der [Lizenz](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) Daten</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Die für dieses Produkt verwendeten Originaldaten wurden von JAXA’s AW3D bereitgestellt.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um **Höhenlinien** und **Gelände (Schummerung, Hangneigung)** Daten auf der Karte anzuzeigen:

1. **Kauf**: [OsmAnd+, OsmAnd Maps+ oder OsmAnd Pro Kaufplan](../plugins/index.md#purchase)
2. [Aktivieren](../plugins/index.md#enable--disable) Sie das Topographie-Plugin im Bereich Plugins des *Hauptmenüs*.
3. [Laden Sie](#download-maps) Höhenlinien, Schummerung, Hangneigung oder Geländekarten (3D) herunter.
4. **Aktivieren und anpassen**: Höhenlinien, Schummerung oder Hangneigung für die Kartenansicht.
5. Sie können auch das [YouTube-Tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg) ansehen.

Um [**3D-Relief**](#3d-relief) anzuzeigen, müssen Sie den *OsmAnd Pro*-Plan erwerben, der den Zugang zum Topographie-Plugin beinhaltet.


## Karten herunterladen {#download-maps}

Um mit der Funktionalität des Plugins zu arbeiten, müssen Sie die Karten herunterladen, die Sie interessieren. Einige Karten, wie z.B. Höhenlinien für Bergregionen, können recht groß sein, über 2 GB, und werden möglicherweise auf veralteten Geräten nicht unterstützt.

Für eine stabile Arbeit und um Ressourcen zu sparen, können Sie eine Karte nicht des gesamten Landes, sondern seiner spezifischen Regionen herunterladen, falls solche Regionen in der Anwendung angeboten werden. Informationen über die Größe jedes Kartentyps sind unter deren Namen aufgeführt.


### 3D-Reliefkarten {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Sie müssen **Geländekarten (3D)** herunterladen, um Schummerung, Hangneigung und 3D-Relief anzuzeigen. Nach dem Herunterladen der Karten können Sie **Höhenlinien** und **Gelände** über den Bereich [Karte konfigurieren](../map/configure-map-menu.md) des *Hauptmenüs* anzeigen.

Wenn die auf dem Bildschirm angezeigte Karte nicht heruntergeladen ist, wird im *Menü → Karte konfigurieren → Topographie-Abschnitt → Gelände* am unteren Ende der Funktionsliste der Abschnitt *Karten herunterladen* mit vorgeschlagenen zusätzlichen Karten angezeigt.


### Höhenlinien (Meter oder Fuß) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Für [**Höhenlinien**](#contour-lines) müssen Sie festlegen, in welchen [Einheiten](../personal/profiles.md#units--formats) (Meter oder Fuß) sie auf der Karte angezeigt werden sollen, und die entsprechende Version der Karte auf Ihr Gerät herunterladen.

**Die Einheitenoptionen sind nicht austauschbar**, wenn Sie also von Metern zu Fuß oder umgekehrt wechseln müssen, müssen Sie die vorherige Version der Höhenlinienkarte deinstallieren, um die neue Version herunterzuladen.


## Höhenlinien {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Höhenlinien*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[Höhenlinien](../map/vector-maps.md#-contour-lines) sind eine grafische Darstellung von Höhen auf einer Karte und sind als Vektorkarten verfügbar. Sie bilden Linien, die Punkten mit gleicher Höhe entsprechen, welche Konturen bilden, die es Ihnen ermöglichen, zu bestimmen, in welche Richtung und wie stark die Oberfläche abfällt.

Bei Verwendung der [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine):

- **Version 2 (OpenGL)**. Höhenlinien werden sowohl in der 3D-Ansicht als auch im 3D-Reliefmodus unterstützt.
- **Version 1**. Höhenlinien werden bei Verwendung von Kachelkarten aus dem Internet nicht unterstützt.

**Erscheinungsbildeinstellungen**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Höhenlinien ein- oder ausschalten.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Legen Sie die [Zoomstufen](../map/interact-with-map.md#my-location-and-zoom) fest, bei denen Höhenlinien sichtbar sind.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Wählen Sie die Farbe für die Anzeige der Höhenlinien.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Passen Sie die Breite der Höhenlinien an.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Wählen Sie die Dichte der Höhenlinien (Niedrig, Mittel, Hoch). Höhere Dichten können die Ladezeit beeinflussen.
- *<Translate android="true" ids="maps_and_resources"/>*. Höhenlinienkarten für die aktuelle Region und angrenzende Gebiete anzeigen und herunterladen.


## Gelände {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

Die Option **Gelände** aktiviert und ermöglicht die Anpassung von drei Funktionen wie *Schummerung*, *Hangneigung* und *Höhe*.
Spezifische Merkmale:

- Es kann immer nur eine Option gleichzeitig aktiviert sein, entweder Schummerung, Hangneigung oder Höhe.
- Wenn Sie nach dem Herunterladen und Aktivieren der entsprechenden Karte keine Änderungen sehen, wird empfohlen, die Anwendung neu zu starten.

Das **Gelände**-Menü enthält die Auswahl des [Farbschemas](#default-color-scheme) mit der Option, es zu [ändern](#modify-color-scheme) (für [Pro-Abonnenten](../../user/purchases/index.md)), die Möglichkeit, die Transparenz der Ebene auf der Karte zu ändern ([Sichtbarkeit](#visibility)), und die [Zoomstufe](#zoom-levels) für die Anzeige auszuwählen, Informationen über die Größe der [zwischengespeicherten Daten](#cache-size) und eine Liste der [Karten](../../user/personal/maps-resources.md), die zum Anzeigen der Ebene benötigt werden.


## Schummerung, Hangneigung und Höhenschichten {#hillshade-slope-and-altitude-layers}

| Schummerung | Hangneigung | Höhe |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Schummerung** basiert auf der Simulation der Oberflächenbeleuchtung unter Verwendung von Geländedaten. Diese Methode beinhaltet die Erzeugung von Schatten und Lichtern basierend auf dem Winkel der Oberfläche relativ zur Lichtquelle. Als Ergebnis sehen Sie natürliche Hügel, Täler und andere Geländedetails auf der Karte.

**Hangneigung** bestimmt den Oberflächenneigungswinkel basierend auf den Höhendaten von Punkten auf der Karte. Hangneigungsberechnungen werden unter Berücksichtigung von Höhenänderungen und Entfernungen zwischen Punkten durchgeführt und diese Änderung als Neigungswinkel dargestellt.

**Höhe** stellt die Höhe von Punkten auf der Karte relativ zum Meeresspiegel dar. Sie hilft Ihnen zu verstehen, wie sich das Gelände in der Höhe ändert. Diese Funktion ist besonders nützlich für Aktivitäten wie Wandern oder Mountainbiken, bei denen die Kenntnis der Höhe bei der Routenplanung und der Bewältigung körperlicher Anstrengung helfen kann. Höhendaten werden aus Höhenmodellen abgeleitet und bieten eine klare Sicht auf hohe und niedrige Punkte, was es einfacher macht, die Schwierigkeit einer Route zu beurteilen oder Gipfel und Täler entlang Ihrer Reise zu identifizieren.

**Schummerung**, **Hangneigung** und **Höhe** Rasterkarten werden basierend auf Rastergeländedaten wie Digitalen Höhenmodellen (DEM) erstellt.

**Verwendung:**

- *Navigation.* Hilft, steile Hänge zu identifizieren, sowohl bergab als auch bergauf, was für eine sichere Navigation entscheidend sein kann.
- *Routen planen.* Hilft, die am besten geeigneten Routen unter Berücksichtigung des Geländes auszuwählen.
- *Geländeschätzung.* Es ist praktisch, die Landschaft zu visualisieren, besonders wenn Sie zu Fuß oder mit dem Fahrrad unterwegs sind.


### Standard-Farbschema {#default-color-scheme}

| Schummerung | Hangneigung | Höhe |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Schummerung* verwendet dunkle Farbtöne, um Hänge, Gipfel und Tiefländer darzustellen. Die virtuelle Sonne hat einen festen Azimut (Richtung) von 315 Grad.

- *Hangneigung* verwendet Farben, um die Steilheit des Geländes zu visualisieren. Mehr darüber können Sie [hier](https://en.wikipedia.org/wiki/Grade_(slope)) lesen. Jede Farbe entspricht einem Winkel der Abweichung von der Horizontalen. Ein zusätzliches *Hangneigungs*-Farbschema, ***Lawine***, ist im Menü **Ändern** verfügbar.

- *Höhe*. Die Höhenkarte färbt jedes Pixel entsprechend der berechneten Kartenhöhe unter Verwendung des Farbverlaufs eines definierten Farbschemas. Normalerweise sind Höhenschemata sehr ortsabhängig. In Berggebieten würden Sie es vorziehen, Farben auf einen breiteren Höhenbereich zu verteilen, und in flachen Gebieten würden Sie ein Farbschema mit einem kleinen Bereich zwischen minimaler/maximaler Höhe wählen.

> *Bitte lesen Sie den Artikel [Farbschema](../personal/color-palette-schemes.md) für weitere Informationen.*


### Farbschema ändern {#modify-color-scheme}

:::info Kostenpflichtige Funktion
*Farbschema ändern* ist eine **OsmAnd Pro** kostenpflichtige Funktion für [iOS](../purchases/ios.md#pro-features) und [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Die Funktion *Farbschema ändern* ermöglicht Ihnen die Auswahl eines Farbschemas:

- Aus einer [vordefinierten Liste](#default-color-scheme).
- Aus Farbpalettendateien, die Sie auf Ihrem Computer erstellt haben. Benutzerdefinierte Dateien können mit dem [Import-/Export-Tool](../personal/import-export.md) zu OsmAnd hinzugefügt werden.

Sie können [diese Paletten bearbeiten](../personal/color-palette-schemes.md#edit-palette-file), um das Aussehen von Karten und Routen zu personalisieren.


### Sichtbarkeit {#visibility}

| Sichtbarkeit 31% | Sichtbarkeit 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

Die Funktion *Sichtbarkeit* wird verwendet, um die Transparenz der Schatten für die Schummerung und der Farben, die zur Darstellung des Winkels im Hangneigungsparameter verwendet werden, anzupassen.

### Zoomstufen {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

Die Funktion *Skalierungsstufen* ermöglicht es Ihnen, die minimalen und maximalen Werte der Kartenzuordnungsstufen, von 4 bis 19, festzulegen, bei denen die Schummerungs- oder Hangneigungskartenebenen angezeigt werden.

### Cache-Größe {#cache-size}

Die **Cache-Größe** ist ein Informationsbereich, der die Menge des Speichers auf Ihrem Gerät anzeigt, die derzeit für *Gelände*-Daten verwendet wird. Jedes Mal, wenn Sie *Schummerungs*- oder *Hangneigungs*-Informationen auf einer Karte anzeigen, werden all diese Daten temporär im Cache gespeichert, um einen schnellen Zugriff und eine spätere Verwendung zu ermöglichen und zusätzliche Belastungen des Geräteprozessors zu vermeiden.

**Das Leeren des Caches** ist manchmal notwendig, um Speicherplatz auf Ihrem Gerät freizugeben oder potenzielle Leistungsprobleme zu beheben. Um den Cache zu leeren, müssen Sie zu den *Systemeinstellungen* des Geräts gehen, dann kann der Pfad wie folgt lauten: *Anwendungen → OsmAnd → Speicher → Cache leeren*.


### Rendering-Engine (Android) {#rendering-engine-android}

**Schummerung** und **Hangneigung** werden in jeder ausgewählten [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) angezeigt und angepasst.

1. Wenn Sie die **Karten-Rendering-Engine Version 1** verwenden, müssen Sie den normalen [Download](../start-with/download-maps.md) von Schummerungs- und Hangneigungs-Rasterkarten verwenden.

2. Wenn Sie die **Karten-Rendering-Engine Version 2 (OpenGL)** verwenden:
    - Sie können weiterhin den normalen Downloadtyp für Schummerungs- und Hangneigungs-Rasterkarten verwenden. Dazu müssen Sie jedoch das [OsmAnd-Entwicklungs-Plugin](../plugins/development.md) aktivieren und die Einstellung [Raster-SQLite-Format für Schummerung und Hangneigung verwenden](../plugins/development.md#terrain) aktivieren.

    - Alternativ können Sie den [Geländekarten (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location) Download verwenden. Dies spart Speicherplatz auf Ihrem Gerät, und die Schummerungs-, Hangneigungs- und 3D-Relief-Effekte werden von Ihrem Gerät daraus generiert.


### Schnellaktionen {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Sie können die Schaltflächen für *Schnellaktionen* auf dem Kartenbildschirm verwenden, um die Sichtbarkeit von [Höhenlinien](#contour-lines), [Gelände](#terrain)-Ebenen und dem [Gelände-Farbschema](#default-color-scheme) umzuschalten. Je nach der im Menü "Karte konfigurieren" ausgewählten Ebene wird das Zuweisen einer *Gelände*-Aktion zu der Schaltfläche *Schummerung*, *Hangneigung* oder *Höhe* anzeigen.

Die Haupteinstellungen für *Kartentypen anzeigen oder ausblenden* befinden sich im Abschnitt Topographie des Menüs "Karte konfigurieren". Im Artikel [Schnellaktion](../widgets/quick-action.md#configure-map) finden Sie eine Liste der zur Anzeige verfügbaren Ebenen. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Tool *Benutzerdefinierte Schaltfläche*.

- Gehen Sie zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere QA-Schaltflächen hinzu, um die Sichtbarkeit einer bestimmten Topographie-Ebene zu ändern.


## 3D-Relief {#3d-relief}

:::info Pro feature
3D-Relief ist eine [**OsmAnd Pro**](../purchases/index.md) kostenpflichtige Funktion <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

Die 3D-Relief-Funktion erzeugt ein erhöhtes Relief und bietet eine dreidimensionale Darstellung der Landschaft. 3D-Relief funktioniert offline und kann mit [OsmAnd-Vektorkarten](../map/vector-maps.md) oder beliebigen [Rasterkarten](../map/raster-maps.md#select-raster-maps) als [Kartenquelle](../map/raster-maps.md#main) oder als [Unterlage/Überlagerung](../map/raster-maps.md#overlay-layer) verwendet werden.

***Wie man 3D-Relief auf der Karte anzeigt.***

- Erwerben Sie ein **OsmAnd Pro** Abonnement für [iOS](../purchases/ios.md#pro-features) oder [Android](../purchases/android.md#pro-features).

- Gehen Sie zu [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: scrollen Sie zum Abschnitt *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: scrollen Sie zum Abschnitt *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Laden Sie die [Geländekarte (3D)](#3d-relief-maps) der Regionen herunter, falls erforderlich.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Vektorkartenebene | Rasterkartenebene |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Vektorkartenebene | Rasterkartenebene |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Vertikale Überhöhung {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Vertikale Überhöhung*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Vertikale Überhöhung*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Vertikale Überhöhung* ist ein spezieller Koeffizient für das *3D-Relief*. Sie können den Maßstab (*Vertikale Überhöhung*) von x1 bis x3 ändern. Diese Funktion ermöglicht es Ihnen, glattere Geländekonturen mit erhöhter Detailgenauigkeit zu sehen.


### Schummerung und 3D-Relief {#hillshade-and-3d-relief}

| Schummerung | 3D-Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Schummerung** ist eine Art von Karte, die das Gelände mithilfe von Schatten darstellt und eine visuelle Darstellung der Neigung und Form der Erdoberfläche erzeugt.
**3D-Relief** ist eine Funktion, die der Karte dreidimensionale Effekte hinzufügt.

Wenn Sie *Schummerung* **deaktivieren** und *3D-Relief* **aktivieren**, sind die Reliefschatten immer noch sichtbar, da *Schummerung* und *3D-Relief* zwei verschiedene Arten der Visualisierung einer Karte sind. *Schummerung* erzeugt Schatten basierend auf dem Gelände und fügt sie der Karte hinzu, während *3D-Relief* 3D-Elemente modelliert, um die Tiefe und Form des Geländes zu zeigen, und die Schatten Teil der Visualisierung sind. Diese Funktionen können parallel arbeiten, und das Deaktivieren von *Schummerung* beeinflusst nicht, wie 3D-Effekte angezeigt werden.

Wenn **Schummerung** **aktiviert** ist, erscheint ein Bild mit Reliefschatten detaillierter, dunkler und gestufter als ein *3D-Relief*-Bild. Die Erklärung ist, dass *Schummerung* die Gradienten und Kontraste des Geländes betont und ein schärferes und detaillierteres Bild erzeugt. Die *3D-Relief*-Funktion verleiht der Karte ein flüssigeres und geglättetes Aussehen, mildert das Gelände und kann die Sichtbarkeit einiger feinerer Details verringern.


## Ebenentypen kombinieren {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, mehrere Arten von Kartenebenen für eine visuellere Darstellung zu kombinieren.

- Die Kombination von **Höhenlinien** und **Schummerung** ist optimal für die visuelle und numerische Abschätzung der Steilheit von Berghängen.
- Die Kombination von **Höhenlinien** und **Hangneigung**-Ebenen ist am besten geeignet, um die Hangneigung abzuschätzen und Punkte gleicher Höhe zu finden.
- Die Kombination von **3D-Relief**- und **Schummerungs**-Ebenen ermöglicht eine realistischere und visuellere Darstellung des Geländes, des Reliefs und der Landschaftsdetails. Diese Kombination ist besonders für bergiges und hügeliges Gelände geeignet.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Wie man den Kauf des Topographie-Plugins (ehemals Höhenlinien) wiederherstellt. [(prüfen)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Höhenlinien, Höhendaten oder 3D-Relief werden nicht angezeigt. [(prüfen)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Die Karte wechselt während der Navigation automatisch in den 3D-Modus:
    - Stellen Sie sicher, dass die Schaltfläche **3D-Modus** im **Menü → Bildschirm konfigurieren → Schaltflächen → Standardschaltflächen** deaktiviert ist.
    - Überprüfen Sie, ob im **Menü → Karte konfigurieren → Topographie** Geländefunktionen aktiviert sind, die einen 3D-Effekt auslösen könnten.

> *Zuletzt aktualisiert: Januar 2025*