---
source-hash: cc730e8a24496682e893555771005dbb35c6dfe9f5ce92b2e7fd526bcba461b1
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

:::info Bezahlte Funktion
Das Topographie-Plugin ist eine [bezahlte Funktion](../purchases/index.md) der OsmAnd-App.
:::

Topographie ist ein wichtiger Bereich der Kartographie, der Informationen zur visuellen Beurteilung des Geländeprofils liefert.
Topographieinformationen wie [Höhenlinien](#contour-lines), [Gelände](#terrain) (*Schummerung* und *Hangneigung*) und [3D-Relief](#3d-relief) helfen bei der visuellen Beurteilung der Geländeform, indem sie Höhe, Relief, Extreme, Steilheit oder Punkte gleicher Höhe anzeigen.

Jede Funktion, die dieses Plugin bereitstellt, ist eine unabhängige Kartenebene, die, wenn sie aktiviert ist, je nach den [Einstellungen](../map/raster-maps.md#overlay-layer) über oder unter der Hauptkartenquelle angezeigt werden kann.

Das Topographie-Plugin bietet Zugriff auf die folgenden Kartentypen:

- [Höhenlinien](#contour-lines). Dies ist eine [Vektorkarte](../map/vector-maps.md), dargestellt in [**Metern** oder **Fuß**](#contour-lines-meters-or-feet). Höhenlinien zeigen Höhenniveaus und helfen, das Gelände zu visualisieren.
- [Schummerung](#hillshade-slope-and-altitude-layers). Kartentypen mit Schummerung von Hügeln und Hängen machen das Relief besser sichtbar und helfen bei der visuellen Interpretation des Geländes.
- [Hangneigung](#hillshade-slope-and-altitude-layers). [Rasterebene](../map/raster-maps.md), die Informationen über die Steilheit von Hängen liefert, was für die Routenplanung und Sicherheit wichtig sein kann.
- [3D-Relief](#3d-relief). Dies ist eine [Vektorkarte](../map/vector-maps.md), die eine dreidimensionale Darstellung des Geländes bietet und nur mit einem [OsmAnd Pro-Abonnement](../purchases/index.md) verfügbar ist.


<Tabs groupId="operating-systems" queryString="operating-systems">

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

#### Lizenz für DEM-Daten, die von OsmAnd für die Geländedetektion verwendet werden {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Die Höhendaten auf der Karte (zwischen 70 Grad nördlicher Breite und 70 Grad südlicher Breite) stammen aus Messungen, die im Rahmen der *Shuttle Radar Topography Mission (SRTM)* durchgeführt wurden. Dabei wurde das *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)* verwendet, das primäre Bildgebungswerkzeug im *Earth Observation System der NASA*.
Vollständige Informationen finden Sie in der [Lizenz](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) Daten</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Die Originaldaten, die für dieses Produkt verwendet wurden, stammen von JAXAs AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonnys LiDAR Digitale Geländemodelle von Europa</a> (DTM).

</details>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um **Höhenlinien** und **Gelände (Schummerung, Hangneigung)** Daten auf der Karte anzuzeigen:

1. **Kauf**: [OsmAnd+, OsmAnd Maps+ oder OsmAnd Pro Kaufplan](../plugins/index.md#purchase)
2. Topographie-Plugin im Abschnitt Plugins des *Hauptmenüs* [aktivieren](../plugins/index.md#enable--disable).
3. [Karten herunterladen](#download-maps): Höhenlinien, Schummerung, Hangneigung oder Geländekarten (3D).
4. Höhenlinien, Schummerung oder Hangneigung für die Kartenansicht **aktivieren und anpassen**.
5. Sie können sich auch das [YouTube-Tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg) ansehen.

Um [**3D-Relief**](#3d-relief) anzuzeigen, müssen Sie den *OsmAnd Pro*-Plan erwerben, einschließlich des Zugangs zum Topographie-Plugin.


## Karten herunterladen {#download-maps}

Um mit der Funktionalität des Plugins zu arbeiten, müssen Sie die Karten herunterladen, an denen Sie interessiert sind. Einige Karten, wie z. B. Höhenlinien für Bergregionen, können recht groß sein (über 2 GB) und werden möglicherweise auf veralteten Geräten nicht unterstützt.

Für eine stabile Arbeit und zur Schonung der Ressourcen können Sie eine Karte nicht des gesamten Landes, sondern seiner bestimmten Regionen herunterladen, wenn solche Regionen in der Anwendung angeboten werden. Informationen über die Größe jedes Kartentyps sind unter seinem Namen aufgeführt.


### 3D-Geländekarten {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Sie müssen **Geländekarten (3D)** herunterladen, um Schummerung, Hangneigung und 3D-Relief anzuzeigen. Nach dem Herunterladen der Karten können Sie **Höhenlinien** und **Gelände** über den Abschnitt [Karte konfigurieren](../map/configure-map-menu.md) im *Hauptmenü* anzeigen.

Wenn die auf dem Bildschirm angezeigte Karte nicht heruntergeladen wurde, wird im Menü *Menü → Karte konfigurieren → Topographie-Abschnitt → Gelände* am unteren Rand der Liste der Funktionen der Abschnitt *Karten herunterladen* mit vorgeschlagenen zusätzlichen Karten angezeigt.


### Höhenlinien (Meter oder Fuß) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Für [**Höhenlinien**](#contour-lines) müssen Sie festlegen, in welchen [Einheiten](../personal/profiles.md#units--formats) (Metern oder Fuß) sie auf der Karte angezeigt werden sollen, und die entsprechende Version der Karte auf Ihr Gerät herunterladen.

**Die Einheitenoptionen sind nicht austauschbar**, Wenn Sie also von Metern auf Fuß oder umgekehrt wechseln müssen, müssen Sie die vorherige Version der Höhenlinienkarte deinstallieren, um die neue Version herunterzuladen.


## Höhenlinien {#contour-lines}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Höhenlinien*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[Höhenlinien](../map/vector-maps.md#-contour-lines) sind eine grafische Darstellung von Höhen auf einer Karte und als Vektorkarten verfügbar. Sie bilden Linien, die Punkten mit gleicher Höhe entsprechen, die Konturen bilden, die es Ihnen ermöglichen, zu bestimmen, in welche Richtung und wie stark die Oberfläche abfällt.

Bei Verwendung der [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine):

- **Version 2 (OpenGL)**. Höhenlinien werden sowohl in der 3D-Ansicht als auch im 3D-Relief-Modus unterstützt.
- **Version 1**. Höhenlinien werden nicht unterstützt, wenn Tile-Karten aus dem Internet verwendet werden.

**Erscheinungseinstellungen**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Höhenlinien ein- oder ausschalten.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Definieren Sie die [Zoomstufen](../map/interact-with-map.md#my-location-and-zoom), auf denen Höhenlinien sichtbar sind.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Wählen Sie die Farbe für die Anzeige von Höhenlinien.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Passen Sie die Breite der Höhenlinien an.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Wählen Sie die Dichte der Höhenlinien (Niedrig, Mittel, Hoch). Höhere Dichten können die Ladezeit beeinflussen.
- *<Translate android="true" ids="maps_and_resources"/>*. Anzeigen und Herunterladen von Höhenlinienkarten für die aktuelle Region und nahegelegene Gebiete.


## Gelände {#terrain}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

Die Option **Gelände** ermöglicht und erlaubt die Anpassung von drei Funktionen wie *Schummerung*, *Hangneigung* und *Höhe*.
Spezifische Funktionen:

- Es kann immer nur eine Option aktiviert sein, entweder Schummerung, Hangneigung oder Höhe.
- Wenn Sie nach dem Herunterladen und Aktivieren der entsprechenden Karte keine Änderungen sehen, wird empfohlen, die Anwendung neu zu starten.

Das Menü **Gelände** enthält die Auswahl des [Farbschemas](#default-color-scheme) mit der Option, es zu [ändern](#modify-color-scheme) (für [Pro-Abonnenten](../../user/purchases/index.md)), die Möglichkeit, die Transparenz der Ebene auf der Karte zu ändern ([Sichtbarkeit](#visibility)) und die [Zoomstufe](#zoom-levels) für die Anzeige auszuwählen, Informationen über die Größe der [zwischengespeicherten Daten](#cache-size) und eine Liste der [Karten](../../user/personal/maps-resources.md), die zur Anzeige der Ebene benötigt werden.


## Schummerungs-, Hangneigungs- und Höhenebenen {#hillshade-slope-and-altitude-layers}

| Schummerung | Hangneigung | Höhe |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Schummerung** basiert auf der Simulation der Oberflächenbeleuchtung unter Verwendung von Geländedaten. Bei dieser Methode werden Schatten und Highlights basierend auf dem Winkel der Oberfläche relativ zur Lichtquelle erstellt. Als Ergebnis sehen Sie natürliche Hügel, Täler und andere Geländedetails auf der Karte.

**Hangneigung** bestimmt den Neigungswinkel der Oberfläche basierend auf den Höhendaten von Punkten auf der Karte. Die Berechnung des Neigungswinkels erfolgt unter Berücksichtigung von Höhenänderungen und Abständen zwischen Punkten, wobei diese Änderung als Neigungswinkel dargestellt wird.

**Höhe** stellt die Höhe von Punkten auf der Karte relativ zum Meeresspiegel dar. Es hilft Ihnen zu verstehen, wie sich das Gelände in der Höhe ändert. Diese Funktion ist besonders nützlich für Aktivitäten wie Wandern oder Mountainbiken, bei denen die Kenntnis der Höhe bei der Planung von Routen und der Verwaltung der körperlichen Anstrengung hilfreich sein kann. Höhendaten werden aus Höhenmodellen abgeleitet und bieten eine klare Sicht auf hohe und niedrige Punkte, was es einfacher macht, die Schwierigkeit einer Route einzuschätzen oder Gipfel und Täler entlang Ihrer Reise zu identifizieren.

**Schummerungs-, Hangneigungs- und Höhenrasterkarten** werden basierend auf Raster-Geländedaten wie Digitalen Höhenmodellen (DEM) erstellt.

**Verwendung:**

- *Navigation.* Hilft bei der Identifizierung steiler Hänge, sowohl bergab als auch bergauf, was für eine sichere Navigation entscheidend sein kann.
- *Routen planen.* Hilft bei der Auswahl der am besten geeigneten Routen unter Berücksichtigung des Geländes.
- *Geländeschätzung.* Es ist praktisch zur Visualisierung der Landschaft, insbesondere wenn Sie zu Fuß oder mit dem Fahrrad unterwegs sind.


### Standard-Farbschema {#default-color-scheme}

| Schummerung | Hangneigung | Höhe |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Schummerung* verwendet dunkle Farbtöne, um Hänge, Gipfel und Tiefebenen anzuzeigen. Die virtuelle Sonne hat einen festen Azimut (Richtung) von 315 Grad.

- *Hangneigung* verwendet Farbe, um die Steilheit des Geländes zu visualisieren. Mehr darüber können Sie [hier](https://en.wikipedia.org/wiki/Grade_(slope)) lesen. Jede Farbe entspricht einem Winkel der Abweichung von der Horizontalen. Ein zusätzliches *Hangneigungs*-Farbschema, ***Lawine***, ist im Menü **Ändern** verfügbar.

- *Höhe*. Die Höhenkarte färbt jedes Pixel entsprechend der berechneten Kartenhöhe unter Verwendung des Gradienten eines definierten Farbschemas. Normalerweise sind Höhenschemata sehr ortsabhängig. In Berggebieten würden Sie Farben gerne auf einen größeren Höhenbereich verteilen, und in flachen Gebieten würden Sie ein Farbschema mit einem kleinen Bereich zwischen minimaler/maximaler Höhe auswählen.

> *Für weitere Informationen lesen Sie bitte den Artikel [Farbschema](../personal/color-palette-schemes.md).*


### Farbschema ändern {#modify-color-scheme}

:::info Bezahlte Funktion
*Farbschema ändern* ist eine **OsmAnd Pro**-Bezahlfunktion für [iOS](../purchases/ios.md#pro-features) und [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Die Funktion *Farbschema ändern* ermöglicht die Auswahl eines Farbschemas:

- Aus einer [vordefinierten Liste](#default-color-scheme).
- Aus Farbpalettendateien, die Sie auf Ihrem Computer erstellt haben. Benutzerdefinierte Dateien können OsmAnd mit dem [Import-/Export-Tool](../personal/import-export.md) hinzugefügt werden.

Sie können [diese Paletten bearbeiten](../personal/color-palette-schemes.md#edit-palette-file), um das Aussehen von Karten und Routen zu personalisieren.


### Sichtbarkeit {#visibility}

| Sichtbarkeit 31% | Sichtbarkeit 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

Die Funktion *Sichtbarkeit* dient zur Anpassung der Transparenz der Schatten für die Schummerung und der Farben zur Darstellung des Winkels im Parameter Hangneigung.

### Zoomstufen {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

Die Funktion *Maßstabsstufen* ermöglicht es Ihnen, die minimalen und maximalen Werte der Kartenzoomstufen im Bereich von 4 bis 19 festzulegen, auf denen die Schummerungs- oder Hangneigungskartenebenen angezeigt werden.

### Cache-Größe {#cache-size}

**Cache-Größe** ist ein Informationsbereich, der die Menge des Speichers auf Ihrem Gerät anzeigt, der derzeit für *Geländedaten* verwendet wird. Jedes Mal, wenn Sie *Schummerungs*- oder *Hangneigungs*-Informationen auf einer Karte anzeigen, werden alle diese Daten vorübergehend im Cache gespeichert, um einen schnellen Zugriff und spätere Verwendung zu ermöglichen und zusätzliche Belastung des Prozessors Ihres Geräts zu vermeiden.

Das **Leeren des Caches** ist manchmal notwendig, um Speicherplatz auf Ihrem Gerät freizugeben oder potenzielle Leistungsprobleme zu beheben. Um den Cache zu leeren, müssen Sie zu den *Systemeinstellungen* des Geräts gehen, dann kann der Pfad wie folgt lauten: *Anwendungen → OsmAnd → Speicher → Cache löschen*.


### Rendering Engine (Android) {#rendering-engine-android}

**Schummerung** und **Hangneigung** werden in jeder ausgewählten [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) angezeigt und angepasst.

1. Wenn Sie die **Karten-Rendering-Engine Version 1** verwenden, müssen Sie den normalen [Download](../start-with/download-maps.md) von Schummerungs- und Hangneigungs-Rasterkarten verwenden.

2. Wenn Sie die **Karten-Rendering-Engine Version 2 (OpenGL)** verwenden:
    - Sie können weiterhin den normalen Download-Typ für Schummerungs- und Hangneigungs-Rasterkarten verwenden. Dazu müssen Sie jedoch das [OsmAnd-Entwicklungs-Plugin](../plugins/development.md) aktivieren und die Einstellung [Raster SQLite-Format für Schummerung und Hangneigung verwenden](../plugins/development.md#terrain) aktivieren.

    - Alternativ können Sie den [Geländekarten (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location)-Download verwenden. Dies spart Speicherplatz auf Ihrem Gerät, und die Schummerungs-, Hangneigungs- und 3D-Relief-Effekte werden daraus mithilfe Ihres Geräts generiert.


### Schnelle Aktionen {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Sie können die Schaltflächen für *Schnelle Aktionen* auf dem Kartenbildschirm verwenden, um die Sichtbarkeit der Ebenen [Höhenlinien](#contour-lines), [Gelände](#terrain) und des [Gelände-Farbschemas](#default-color-scheme) zu wechseln. Je nach der im Menü "Karte konfigurieren" ausgewählten Ebene zeigt die Zuweisung einer *Gelände*-Aktion zur Schaltfläche *Schummerung*, *Hangneigung* oder *Höhe* an.

Die Haupteinstellungen zum *Anzeigen oder Ausblenden von Kartentypen* finden Sie im Abschnitt Topographie des Menüs Karte konfigurieren. Im Artikel [Schnelle Aktion](../widgets/quick-action.md#configure-map) finden Sie eine Liste der zur Anzeige verfügbaren Ebenen. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Tool *Benutzerdefinierte Schaltfläche*.

- Gehen Sie zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnelle Aktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere QA-Schaltflächen hinzu, um die Sichtbarkeit einer bestimmten Topographie-Ebene zu ändern.


## 3D-Relief {#3d-relief}

:::info Pro-Funktion
3D-Relief ist eine [**OsmAnd Pro**](../purchases/index.md) Bezahlfunktion <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

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

***So zeigen Sie 3D-Relief auf der Karte an.***

- Kaufen Sie ein **OsmAnd Pro**-Abonnement für [iOS](../purchases/ios.md#pro-features) oder [Android](../purchases/android.md#pro-features).

- Gehen Sie zu [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: Scrollen Sie zum Abschnitt *<Translate android="true" ids="srtm_plugin_name"/>* → *<Translate android="true" ids="relief_3d"/>*.
    - **iOS**: Scrollen Sie zum Abschnitt *<Translate ios="true" ids="srtm_plugin_name"/>* → *<Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Laden Sie gegebenenfalls die [Geländekarte (3D)](#3d-relief-maps) der Regionen herunter.

<Tabs groupId="operating-systems" queryString="operating-systems">

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

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Vertikale Überhöhung*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Vertikale Überhöhung*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Vertikale Überhöhung* ist ein spezieller Koeffizient für das *3D-Relief*. Sie können den Maßstab (*Vertikale Überhöhung*) von x1 auf x3 ändern. Diese Funktion ermöglicht es Ihnen, glattere Geländekonturen mit erhöhter Detailgenauigkeit anzuzeigen.


### Schummerung und 3D-Relief {#hillshade-and-3d-relief}

| Schummerung | 3D-Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Schummerung** ist ein Kartentyp, der das Gelände mithilfe von Schatten darstellt und eine visuelle Darstellung der Neigung und Form der Erdoberfläche erzeugt.
**3D-Relief** ist eine Funktion, die der Karte dreidimensionale Effekte hinzufügt.

Wenn Sie *Schummerung* **deaktivieren** und *3D-Relief* **aktivieren**, sind die Reliefschatten immer noch sichtbar, da *Schummerung* und *3D-Relief* zwei verschiedene Arten der Visualisierung einer Karte sind. *Schummerung* erzeugt Schatten basierend auf dem Gelände und fügt sie der Karte hinzu, während *3D-Relief* 3D-Elemente modelliert, um die Tiefe und Form des Geländes zu zeigen, und die Schatten Teil der Visualisierung sind. Diese Funktionen können parallel arbeiten, und das Deaktivieren von *Schummerung* beeinflusst nicht, wie 3D-Effekte angezeigt werden.

Wenn **Schummerung** **aktiviert** ist, erscheint ein Bild mit Reliefschatten detaillierter, dunkler und stufiger als ein *3D-Relief*-Bild. Die Erklärung ist, dass *Schummerung* die Gradienten und Kontraste des Geländes hervorhebt und ein schärferes und detaillierteres Bild erzeugt. Die *3D-Relief*-Funktion verleiht der Karte ein flüssigeres und geglättetes Aussehen, mildert das Gelände und reduziert möglicherweise die Sichtbarkeit einiger feinerer Details.


## Ebenentypen kombinieren {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht die Kombination mehrerer Kartenebenentypen für eine visuellere Darstellung.

- Die Kombination von **Höhenlinien** und **Schummerung** ist optimal zur visuellen und numerischen Schätzung der Steilheit von Berghängen.
- Die Kombination der Ebenen **Höhenlinien** und **Hangneigung** eignet sich am besten zur Schätzung der Hangneigung und zum Finden von Punkten gleicher Höhe.
- Die Kombination der Ebenen **3D-Relief** und **Schummerung** ermöglicht eine realistischere und visuelle Darstellung des Geländes, des Reliefs und der Landschaftsdetails. Diese Kombination eignet sich besonders für bergiges und hügeliges Gelände.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. So stellen Sie den Kauf des Topographie-Plugins (ehemals Höhenlinien) wieder her. [(prüfen)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Höhenlinien, Höhendaten oder 3D-Relief werden nicht angezeigt. [(prüfen)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Die Karte wechselt während der Navigation automatisch in den 3D-Modus:
    - Stellen Sie sicher, dass die Schaltfläche **3D-Modus** in **Menü → Bildschirm konfigurieren → Schaltflächen → Standardschaltflächen** deaktiviert ist.
    - Prüfen Sie, ob im **Menü → Karte konfigurieren → Topographie** Geländefunktionen aktiviert sind, die einen 3D-Effekt auslösen können.

> *Zuletzt aktualisiert: Januar 2025*