---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
sidebar_position: 6
title: Rasterkarten (Online/Offline)
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


<InfoIncompleteArticle/>

## Übersicht {#overview}

Rasterkarten sind wichtige und nützliche Ergänzungen zu den Vektorkarten von OsmAnd. Sie ermöglichen die Kombination verschiedener Kartenquellen mit Vektorkarten. Informationen über Hügel und Hänge werden zum Beispiel als Raster-Layer angezeigt. Sie können eine Überlagerung von Wanderwegen, Regenradarkarten, Echtzeit-Verkehrsdaten und eine Überlagerung von Satellitenbildern auf einer durchscheinenden Basis-Vektorkarte anzeigen. Sie können die Standardkarten auch auf Rasterkacheln im Internet umstellen.


## Anwendungsfälle {#use-cases}

Rasterkarten haben ein breites Anwendungsspektrum. Hier sind einige der beliebtesten:

- Satellitenbilder als Unterlage.
- Echtzeit-Verkehrsinformationen.
- Regenprognose als Überlagerung.
- Topographische Karten mit Schattierung von Hügeln und Hängen.
- Aktive Rad- und Laufrouten als Überlagerung.
- Echtzeit-Schiffsinformationen.
- Online-OpenStreetMap-Kacheln für die OSM-Bearbeitung.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Sie können auch die Hauptkartenquelle von Vektorkarten auf Online-Kacheln ändern.
:::


## Rasterkarten {#raster-maps}

Online-Karten in OsmAnd bestehen aus Rasterdaten, die aus Pixeln (auch als Gitterzellen bezeichnet) bestehen – im Wesentlichen ein Satz kleiner Bilder, die als Kacheln bekannt sind. Im Gegensatz zu Vektorkarten, die Daten wie Straßen, Punkte und Polygone mithilfe binärer Informationen darstellen, sind Rasterkartenkacheln in einem Gitter angeordnet und können bei hohen Zoomstufen verpixelt erscheinen, da jedes Pixel einen festen Wert oder eine feste Klasse hat.

#### Vergleich mit Standard-Vektorkarten {#comparison-to-default-vector-maps}

**Vorteile:**

- Da Rasterkarten vorgerendert sind, werden sie schneller geladen, sodass das Gerät die Daten nicht in Echtzeit verarbeiten und rendern muss.
- Rasterkarten können beim Durchsuchen dynamisch geladen werden.
- Sie können einen Offline-Cache erstellen und nur fehlende Kacheln bei Bedarf herunterladen.
- Sie können eine unbegrenzte Anzahl externer Webquellen für Rasterkarten verwenden, was sie für verschiedene Kartentypen, wie Satellitenansichten oder spezialisierte Karten, flexibel macht.
- Rasterdaten, wie z. B. Verkehrsinformationen, können nach Ablauf regelmäßig aktualisiert werden (z. B. alle 20-30 Minuten, je nach Konfiguration).

**Nachteile:**

- Rasterkarten benötigen deutlich mehr Speicherplatz als Vektorkarten. Eine Stadtkarte kann beispielsweise als Vektorkarte 15 MB groß sein, bei Zoomstufe 15 auf 50 MB, bei Zoomstufe 16 auf 200 MB und bei Zoomstufe 17 auf bis zu 800 MB anwachsen.
- Sie können auf Rasterkarten keine bestimmten Orte oder Objekte antippen, um weitere Informationen zu erhalten.
- Rasterkarten können nicht gestaltet oder modifiziert werden, um bestimmte Objekte auszuschließen.
- Zu starkes Heranzoomen kann dazu führen, dass das Bild verpixelt erscheint, insbesondere wenn keine hochauflösenden Kacheln verfügbar sind.
- Es ist nicht möglich, die Karte zu drehen, ohne den Text zu drehen, was das Lesen von Beschriftungen erschweren kann.


## Wie man Rasterkarten verwendet {#how-to-use-raster-maps}

**Plugin aktivieren**.

- **iOS**. Für *iOS* funktioniert diese Funktion standardmäßig.
- **Android**. Für *Android* müssen Sie das Plugin [Online-Karten](../plugins/online-map.md) aktivieren, um Rasterkarten in OsmAnd zu verwenden. Gehen Sie wie folgt vor: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Layer-Parameter ändern**. Um die Sichtbarkeit und die Mischung der Rasterkarten-Layer zu verbessern, können Sie die Transparenz des Layers mit dem Bildschirmregler anpassen. Zusätzlich können Sie den Vektorkartenstil ändern, indem Sie Polygone ausblenden, wodurch die unterliegenden Layer besser sichtbar werden. Dies ist besonders nützlich bei der Anzeige von Satellitenbildern.


## Rasterkarten auswählen {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)

</TabItem>

</Tabs>

In OsmAnd können Rasterkarten als zusätzliche Kartenquelle neben den Standard-Vektorkarten dienen, die für die Offline-Nutzung optimiert sind.

Sie haben die Flexibilität, ein oder zwei Online-Kachel-Layer hinzuzufügen, um Ihre Basiskarte zu ergänzen. Dadurch können Sie bis zu drei Karten-Layer gleichzeitig auf Ihrem Bildschirm anzeigen. Sie können beispielsweise die Offline-Vektorkarte von OsmAnd als Basis verwenden, diese mit einer Satellitenansicht überlagern und eine Fahrradwegenkarte als Unterlage für zusätzliche Details platzieren.

Sie können auch die Transparenz der Basiskarte anpassen, um sie mit Ihren Layern zu mischen. Bei Bedarf können Sie einen Transparenzregler auf dem Hauptbildschirm aktivieren, um schnelle Anpassungen vorzunehmen.


### Haupt {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Sie können einen Kartenstil aus der Liste auswählen oder einen eigenen [hinzufügen](#add-new-online-raster-map-source).


### Überlagerungs-Layer {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)

</TabItem>

</Tabs>

1. *Ein-/Ausschalten* der Unterlagenkarte.
2. *Überlagerungstransparenz* (*Android*)/ *Transparenz* der Überlagerungskarte (*iOS*).
3. *Transparenzregler anzeigen* (*Android*) / *Regler auf der Karte anzeigen* (*iOS*). Schneller Zugriff auf die Transparenzeinstellung.
4. *Überlagerungskartenquelle* (*Android*) / *Verfügbare Layer* (*iOS*). Sie können eine Kachelkarte zur Installation oder Aktualisierung auswählen.
5. *Kartensymbole anzeigen* - wie Text, Verkehrsschilder und andere.
6. *Online-Quelle hinzufügen* (*iOS*).
7. *Aus Dokumenten importieren* (*iOS*).


### Unterlagen-Layer {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)

</TabItem>

</Tabs>

1. *Ein-/Ausschalten* der Unterlagenkarte.
2. *Transparenz der Basiskarte*.
3. *Transparenzregler anzeigen* (*Android*) / *Regler auf der Karte anzeigen* (*iOS*). Schneller Zugriff auf die Transparenzeinstellung.
4. *Unterlagenkartenquelle* (*Android*) / *Verfügbare Layer* (*iOS*). Sie können eine Kachelkarte zur Installation oder Aktualisierung auswählen.
5. *Polygone anzeigen/ausblenden*.
6. *Online-Quelle hinzufügen* (*iOS*).
7. *Aus Dokumenten importieren* (*iOS*).


## Geländeschattierung / Hang {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Geländeschattierung** und **Hang** sind Offline-Rasterkarten, die das Geländerelief zeigen. Sie werden als spezielle Kartenebene angezeigt, eine zweite Überlagerung auf der Basiskarte. Die Karten enthalten zusätzliche Höheninformationen, um Ihnen zu helfen, den Hang und die Schatten der Landschaft genauer zu verstehen. *Geländeschattierung* und *Hang*-Informationen basieren auf Daten aus einer einzigen Quelle, der *Global planet file*, und sind in Regionen unterteilt.

Sie müssen nicht zwischen den Layern Geländeschattierung und Hang wechseln, da diese automatisch zusammengeführt werden. Sie können nur einen dieser Layer auswählen, der auf der Karte angezeigt werden soll, aber Sie haben auch die Möglichkeit, beide [als Unterlage oder Überlagerung](#select-raster-maps) auf anderen Layern zu kombinieren, um eine visuellere Darstellung des Geländes zu erhalten.

Um mit Geländeschattierung und Hang zu beginnen, müssen Sie:

1. Das Topographie-Plugin kaufen:
    - [Android-Käufe](../purchases/android.md)
    - [iOS-Käufe](../purchases/ios.md)
2. Das [Topographie-Plugin](../plugins/topography.md) aktivieren:
    *Menü → Plugins → ︙ → Aktivieren*
3. Wählen Sie Ihre gewünschte Region aus und laden Sie die **Geländekarte (3D)** herunter.
4. Der Downloadvorgang kann je nach Größe der ausgewählten Region und der Geschwindigkeit Ihrer Internetverbindung einige Zeit dauern.


### Geländeschattierung und 3D-Relief {#hillshade-and-3d-relief}

| Geländeschattierung | 3D-Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Der Unterschied der Reliefdarstellung auf der Karte bei Anwendung dieser Einstellungen wird im Artikel **Topographie** im entsprechenden Abschnitt [Geländeschattierung und 3D-Relief](../plugins/topography.md#hillshade-and-3d-relief) beschrieben.


### Anzeigeeinstellungen konfigurieren {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

Sie können die Zoomstufe für die Anzeige und die Transparenz für Geländeschattierung und Hang anpassen. Weitere Informationen finden Sie im Artikel [Topographie](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D-Relief {#3d-relief}

:::note
[3D-Relief](../plugins/topography.md#3d-relief) ist eine kostenpflichtige Funktion von [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Die Funktion [**3D-Relief**](../plugins/topography.md#3d-relief) ist eine Kartentechnologie, die die Visualisierung von Gelände auf einer Karte mithilfe von dreidimensionalen Modellen ermöglicht. Diese Funktion fügt einer normalen zweidimensionalen Karte Höheninformationen hinzu, wodurch ein 3D- und Tiefeneffekt entsteht und Sie das Gelände besser visualisieren können.

*So verwenden Sie 3D-Relief*:
Sie müssen das [OsmAnd Pro-Kaufpaket](../plugins/index.md#purchase) erwerben, das [Topographie-Plugin](../plugins/topography.md) aktivieren und das Element [3D-Relief](../plugins/topography.md#3d-relief) in *Menü → Karte konfigurieren* einschalten.


*Wie die 3D-Relief-Funktion funktioniert*:
*1.* Um ein 3D-Relief zu erstellen, erhält OsmAnd Informationen über die Geländehöhe.
*2.* Basierend auf den Höhendaten wird ein 3D-Modell erstellt, um Berge, Hügel, Täler und andere Geländeelemente auf der Karte anzuzeigen.
*3.* OsmAnd zeigt diese dreidimensionalen Modelle dann auf einer flachen Karte an. Die Karte kann vergrößert, verkleinert und gedreht werden, um das Gelände aus verschiedenen Winkeln und Perspektiven zu betrachten.
*4.* Die Anzeige von Höhenlinien auf der Karte hängt nicht davon ab, ob die Kartenquelle online oder offline ist.


## Rasterkarten vorbereiten/auf Gerät kopieren {#preparecopy-raster-maps-to-device}

Es gibt mehrere Möglichkeiten, eine neue Rasterkarte hinzuzufügen, von einem anderen Gerät zu kopieren, auf einem PC vorzubereiten und Kacheln vorab herunterzuladen, um sie offline verwenden zu können. Sie können beispielsweise Ihr Kartenpaket auf einem PC mit spezieller Software wie [MOBAC, OsmAndMapCreator usw](../../technical/map-creation/index.md) erstellen. Typischerweise werden Rasterkarten als Dateien mit der Erweiterung `.sqlitedb` verteilt.

Hier sind die wichtigsten Methoden zum Hinzufügen einer neuen Rasterkartenquelle, die noch nicht in OsmAnd definiert ist:

- Öffnen Sie eine gebrauchsfertige `.sqlitedb`-Datei mit OsmAnd.
- Importieren Sie ein Paket mit vorbereiteten Online-Karten von einer anderen OsmAnd-Anwendung als spezielles `.osf`-**Paket** über die [Import/Export-Funktion](../personal/import-export.md).
- Erstellen Sie eine neue Online-Kartenquelle direkt auf einem mobilen Gerät.
- Bereiten Sie eine magische URL mit Parametern für die Online-Kartenquelle vor und öffnen Sie sie mit OsmAnd.


### Neue Online-Rasterkartenquelle hinzufügen {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

Um eine Rasterkartenquelle zu erstellen, benötigen Sie die **URL einer Kachel**, d. h. eine spezifische URL, die Kartenkacheln in der Mercator-Projektion verteilt. Eine Kachel-URL könnte beispielsweise so aussehen: `https://tile.osmand.net/hd/6/55/25.png`, wobei `tile.osmand.net/hd/` die Basis-URL ist.

Hier sind die wichtigsten Parameter, die Sie beim Einrichten einer neuen Online-Kartenquelle konfigurieren müssen:

| Parameter | Beschreibung |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Geben Sie einen Namen für die neue Online-Kartenquelle an. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Geben Sie die URL für die Online-Kachelquelle ein oder fügen Sie sie ein. Stellen Sie sicher, dass sie dem Kachel-URL-Format folgt. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Dieser Parameter beeinflusst die Anzeige der Karte. <br/><ul><li>Als *Kartentyp* ist die Karte auf die ausgewählten Zoomstufen beschränkt.</li><li>Als *Überlagerung/Unterlage* wird die Karte auf den ausgewählten Zoomstufen angezeigt, wobei außerhalb dieser Stufen eine Auf- oder Abwärtsskalierung angewendet wird.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Legen Sie die Dauer (in Minuten) fest, nach der der Cache von Kacheln aktualisiert wird. Sie können dieses Feld leer lassen, wenn Sie nicht möchten, dass Kacheln automatisch neu geladen werden. <br/><ul><li>1 Tag = 1440 Minuten</li><li>1 Woche = 10.080 Minuten</li><li>30 Tage = 43.200 Minuten</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Wählen Sie zwischen *Pseudo-Mercator-Projektion* und *Elliptischer Mercator-Projektion*, je nach Quelle. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Wählen Sie, wie Kacheln gespeichert werden sollen: entweder in einer *SQLiteDB-Datei* oder als *eine Bilddatei pro Kachel*. |


### Magische URL zur Installation der Kartenquelle {#magic-url-to-install-map-source}

Online-Karten können mit einem speziellen Link zur OsmAnd-Rasterkartenliste hinzugefügt werden. Klicken Sie auf diesen Link und wählen Sie OsmAnd zum Öffnen:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parameter des Links|Beispiel|
|:--------|:---------------|
| [Konstanter Teil]| `http://osmand.net/add-tile-source` |
|[Trennzeichen]| ?   & |
|[Name]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoomstufen]|min_zoom=9 / max_zoom=15|

Sie finden eine hinzugefügte Online-Karte in der Liste des Menüs [Haupt-/Unterlagen-/Überlagerungs-Layer](#select-raster-maps).


## Rasterkarten verwalten {#manage-raster-maps}

Rasterkarten können eine beträchtliche Menge an Speicherplatz beanspruchen, daher müssen Sie dies möglicherweise regelmäßig überprüfen. Für große Datensätze wird empfohlen, *SQLite Raster Source* zu verwenden, da alle Kacheln in einer großen Datei (SQLite-Datenbank) gespeichert werden.

- [**SQ Lite-Format**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo-Format**](../../technical/osmand-file-formats/osmand-metainfo.md)

Um das Kachelformat zu ändern, können Sie <Translate android="true" ids="storage_format"/> im Bearbeitungsmenü der Online-Karten auswählen:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karten auswählen →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Rasterkarten-Cache leeren {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Kacheln werden im Cache gespeichert, wenn Online-Rasterkarten als Haupt-/Überlagerungs-/Unterlagen-Layer verwendet werden. Sie können die Größe Ihrer SQ Lite-Datei unter dem Namen Ihrer Online-Karte in der Liste sehen. Manchmal ist eine regelmäßige Bereinigung erforderlich, um die Anzeige der Kacheln zu beschleunigen oder die Daten zu aktualisieren.

Um den Kartencache zu leeren, müssen Sie Folgendes tun:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karten auswählen →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Kacheln herunterladen / aktualisieren {#download--update-tiles}

Wenn Sie offline auf Rasterkarten zugreifen möchten, müssen Sie möglicherweise Kacheln vorab laden. Dies kann auf Ihrem mobilen Gerät erfolgen, aber beachten Sie, dass einige Dienste große Paket-Downloads blockieren können. Sie können dieselbe Funktion auch verwenden, um bereits heruntergeladene Kacheln für ausgewählte Bereiche zu aktualisieren, andernfalls zeigt OsmAnd weiterhin Kacheln an, die bereits im Cache gespeichert sind.

Damit die Karten die Kacheln nach einer Weile automatisch aktualisieren, können Sie eine [Ablaufzeit](#add-new-online-raster-map-source) festlegen. Dann lädt OsmAnd die Kacheln neu, sobald sie angezeigt werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Um Rasterkacheln herunterzuladen oder zu aktualisieren, müssen Sie die Quelle der Online-Karte als [Hauptkartenquelle](#select-raster-maps) auswählen. Sie können auch Online-Kacheln separat für die [Überlagerungskarte](#overlay-layer) oder für die [Unterlagenkarte](#underlay-layer) auswählen.

- Für die **Android**-Version der OsmAnd-App müssen Sie einen Bereich entsprechend der Bildschirmgröße Ihres Geräts auswählen und lange auf die Karte tippen. Wählen Sie dann [Aktionen](../map/map-context-menu.md#customize) im Kartenkontextmenü und die Option *Karte herunterladen* oder *Karte aktualisieren*. Ändern Sie auf dem Bildschirm Karte herunterladen die erforderlichen Einstellungen und tippen Sie auf Herunterladen.

- In der iOS-Version der OsmAnd-App müssen Sie lange auf die Karte tippen, dann *Aktionen* und die Option *Karte herunterladen* oder *Karte aktualisieren* aus dem Kartenkontextmenü auswählen. Auf dem Bildschirm Karte herunterladen können Sie den erforderlichen Bereich auswählen und die notwendigen Einstellungen ändern. Nachdem Sie alle Parameter festgelegt haben, können Sie die Anzahl der Kacheln und die Downloadgröße sehen.


### Rasterkartenparameter ändern {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karten auswählen → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Rasterkarten können so verwendet werden, wie sie bereits existieren, wenn die Kacheln bereits kartiert sind. Wenn die Rasterkarten online bereitgestellt werden, gibt es immer eine Basis-URL, die konfiguriert werden muss. Es gibt noch ein paar weitere grundlegende Parameter, die für Rasterkarten geändert werden können. Mehr dazu können Sie in [diesem Abschnitt](#add-new-online-raster-map-source) des Artikels lesen. Komplexere Parameter sind in den internen Komponenten des [SQ Lite-Formats](../../technical/osmand-file-formats/osmand-sqlite.md) kodiert.


## Verwandte Artikel {#related-articles}

- [Import/Export](../personal/import-export.md)
- [Farbpalettenschemata](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: Oktober 2024*