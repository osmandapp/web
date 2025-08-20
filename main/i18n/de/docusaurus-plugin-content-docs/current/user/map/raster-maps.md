---
source-hash: 8656c688a740924ceba6f990dbce2cb596b8d6da1d84627c6aa7082b084dadaf
sidebar_position: 6
title: Rasterkarten (Online / Offline)
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

Rasterkarten sind wichtige und nützliche Ergänzungen zu OsmAnd Vektorkarten. Sie ermöglichen es Ihnen, verschiedene Kartenquellen mit Vektorkarten zu kombinieren. Zum Beispiel werden Informationen über Hügel und Hänge als Rasterebene angezeigt. Sie können eine Überlagerung von Wanderwegen, Regenkarten, Echtzeit-Verkehrsdaten und eine Überlagerung von Satellitenbildern auf einer durchscheinenden Basis-Vektorkarte anzeigen. Sie können auch die Standardkarten auf Rasterkacheln im Web umstellen.


## Anwendungsfälle {#use-cases}

Rasterkarten haben ein breites Anwendungsspektrum. Hier sind einige der beliebtesten:

- Satellitenbilder als Unterlage.
- Echtzeit-Verkehrsinformationen.
- Regenprognose als Überlagerung.
- Topografische Karten mit Schattierung von Hügeln und Hängen.
- Aktive Rad- und Laufrouten als Überlagerung.
- Echtzeit-Schiffsinformationen.
- Online OpenStreetMap-Kacheln für die OSM-Bearbeitung.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Sie können die Hauptkartenquelle auch von Vektorkarten auf Online-Kacheln umstellen.
:::


## Rasterkarten {#raster-maps}

Online-Karten in OsmAnd bestehen aus Rasterdaten, die aus Pixeln (auch als Gitterzellen bezeichnet) bestehen – im Wesentlichen eine Reihe kleiner Bilder, die als Kacheln bekannt sind. Im Gegensatz zu Vektorkarten, die Daten wie Straßen, Punkte und Polygone mithilfe von Binärinformationen darstellen, sind Rasterkartenkacheln in einem Gitter angeordnet und können bei hohen Zoomstufen pixelig erscheinen, da jedes Pixel einen festen Wert oder eine feste Klasse hat.

#### Vergleich mit Standard-Vektorkarten {#comparison-to-default-vector-maps}

**Vorteile:**

- Da Rasterkarten vorgerendert sind, laden sie schneller, wodurch das Gerät keine Daten in Echtzeit verarbeiten und rendern muss.
- Rasterkarten können dynamisch während des Browsens geladen werden.
- Sie können einen Offline-Cache erstellen und nur fehlende Kacheln bei Bedarf herunterladen.
- Sie können eine unbegrenzte Anzahl externer Webquellen für Rasterkarten verwenden, was eine flexible Nutzung für verschiedene Kartentypen, wie Satellitenansichten oder spezialisierte Karten, ermöglicht.
- Rasterdaten, wie Verkehrsinformationen, können nach Ablauf regelmäßig aktualisiert werden (z. B. alle 20-30 Minuten, je nach Konfiguration).

**Nachteile:**

- Rasterkarten benötigen deutlich mehr Speicherplatz als Vektorkarten. Zum Beispiel könnte eine Stadtkarte als Vektorkarte 15 MB groß sein, aber bei Zoomstufe 15 auf 50 MB, bei Zoomstufe 16 auf 200 MB und bei Zoomstufe 17 auf bis zu 800 MB anwachsen.
- Sie können auf Rasterkarten keine bestimmten Orte oder Objekte antippen, um weitere Informationen zu erhalten.
- Rasterkarten können nicht gestaltet oder geändert werden, um bestimmte Objekte auszuschließen.
- Zu starkes Zoomen kann dazu führen, dass das Bild pixelig erscheint, insbesondere wenn keine hochauflösenden Kacheln verfügbar sind.
- Es ist nicht möglich, die Karte zu drehen, ohne den Text zu drehen, was das Lesen von Beschriftungen erschweren kann.


## So verwenden Sie Rasterkarten {#how-to-use-raster-maps}

**Plugin aktivieren**.

- **iOS**. Für *iOS* funktioniert diese Funktion standardmäßig.
- **Android**. Für *Android* müssen Sie, um Rasterkarten in OsmAnd zu verwenden, das [Online-Karten-Plugin](../plugins/online-map.md) aktivieren. Gehen Sie wie folgt vor: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Ebenenparameter ändern**. Um die Sichtbarkeit und Mischung von Rasterkartenebenen zu verbessern, können Sie die Transparenz der Ebene mit dem Bildschirmregler anpassen. Zusätzlich können Sie den Vektorkartenstil ändern, indem Sie Polygone ausblenden, wodurch die darunterliegenden Ebenen besser sichtbar werden. Dies ist besonders nützlich beim Betrachten von Satellitenbildern.


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

Sie haben die Flexibilität, ein oder zwei Online-Kachelebenen hinzuzufügen, um Ihre Basiskarte zu ergänzen. So können Sie bis zu drei Kartenebenen gleichzeitig auf Ihrem Bildschirm anzeigen. Zum Beispiel können Sie die Offline-Vektorkarte von OsmAnd als Basis verwenden, diese mit einer Satellitenansicht überlagern und eine Fahrradwegkarte als Unterlage für zusätzliche Details platzieren.

Sie können auch die Transparenz der Basiskarte anpassen, um sie mit Ihren Ebenen zu mischen. Bei Bedarf können Sie einen Transparenzregler auf dem Hauptbildschirm aktivieren, um schnelle Anpassungen vorzunehmen.


### Haupt {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Sie können einen Kartenstil aus der Liste auswählen oder Ihren eigenen [hinzufügen](#add-new-online-raster-map-source).


### Überlagerungsebene {#overlay-layer}

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

1. *Unterlagerungskarte ein-/ausschalten*.
2. *Überlagerungstransparenz* (*Android*)/ *Transparenz* der Überlagerungskarte (*iOS*).
3. *Transparenzregler anzeigen* (*Android*) / *Regler auf der Karte anzeigen* (*iOS*). Schneller Zugriff auf die Transparenzeinstellung.
4. *Überlagerungskartenquelle* (*Android*) / *Verfügbare Ebenen* (*iOS*). Sie können eine Kachelkarte zum Installieren oder Aktualisieren auswählen.
5. *Kartensymbole anzeigen* - wie Text, Verkehrszeichen und andere.
6. *Online-Quelle hinzufügen* (*iOS*).
7. *Aus Dokumenten importieren* (*iOS*).


### Unterlagerungsebene {#underlay-layer}

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

1. *Unterlagerungskarte ein-/ausschalten*.
2. *Basiskartentransparenz*.
3. *Transparenzregler anzeigen* (*Android*) / *Regler auf der Karte anzeigen* (*iOS*). Schneller Zugriff auf die Transparenzeinstellung.
4. *Unterlagerungskartenquelle* (*Android*) / *Verfügbare Ebenen* (*iOS*). Sie können eine Kachelkarte zum Installieren oder Aktualisieren auswählen.
5. *Polygone anzeigen/ausblenden*.
6. *Online-Quelle hinzufügen* (*iOS*).
7. *Aus Dokumenten importieren* (*iOS*).


## Geländeschattierung / Hangneigung {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Geländeschattierung** und **Hangneigung** sind Offline-Rasterkarten, die das Geländerelief anzeigen. Sie werden als spezielle Kartenebene, eine zweite Überlagerung auf der Basiskarte, dargestellt. Die Karten enthalten zusätzliche Höheninformationen, um die Steigung und die Schatten der Landschaft genauer zu verstehen. Informationen zur *Geländeschattierung* und *Hangneigung* basieren auf Daten aus einer einzigen Quelle, der *Global planet file*, und sind in Regionen unterteilt.

Sie müssen nicht zwischen den Ebenen für Geländeschattierung und Hangneigung wechseln, da sie automatisch zusammengeführt werden. Sie können nur eine dieser Ebenen zur Anzeige auf der Karte auswählen, haben aber auch die Möglichkeit, beide [als Unterlage oder Überlagerung](#select-raster-maps) auf anderen Ebenen zu kombinieren, um eine visuellere Darstellung des Geländes zu erhalten.

Um mit Geländeschattierung und Hangneigung zu beginnen, müssen Sie:

1. Das Topografie-Plugin erwerben:
    - [Android-Käufe](../purchases/android.md)
    - [iOS-Käufe](../purchases/ios.md)
2. Das [Topografie-Plugin](../plugins/topography.md) aktivieren:
    *Menü → Plugins → ︙ → Aktivieren*
3. Ihre gewünschte Region auswählen und die **Geländekarte (3D)** herunterladen.
4. Der Download-Vorgang kann je nach Größe der ausgewählten Region und Geschwindigkeit Ihrer Internetverbindung einige Zeit in Anspruch nehmen.


### Geländeschattierung und 3D-Relief {#hillshade-and-3d-relief}

| Geländeschattierung | 3D-Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Der Unterschied der Reliefdarstellung auf der Karte bei Anwendung dieser Einstellungen wird im Artikel **Topografie** im entsprechenden Abschnitt [Geländeschattierung und 3D-Relief](../plugins/topography.md#hillshade-and-3d-relief) beschrieben.


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

Sie können den Zoomlevel für die Anzeige und die Transparenz für Geländeschattierung und Hangneigung anpassen. Weitere Informationen finden Sie im Artikel [Topografie](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D-Relief {#3d-relief}

:::note
[3D-Relief](../plugins/topography.md#3d-relief) ist eine kostenpflichtige Funktion von [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Die Funktion [**3D-Relief**](../plugins/topography.md#3d-relief) ist eine Kartentechnologie, die die Visualisierung von Gelände auf einer Karte mithilfe von dreidimensionalen Modellen ermöglicht. Diese Funktion fügt einer normalen zweidimensionalen Karte Höheninformationen hinzu, wodurch ein 3D- und Tiefeneffekt entsteht und Sie das Gelände besser visualisieren können.

*Um 3D-Relief zu verwenden*:
Sie müssen den [OsmAnd Pro Kaufplan](../plugins/index.md#purchase) erwerben, das [Topografie-Plugin](../plugins/topography.md) aktivieren und den Punkt [3D-Relief](../plugins/topography.md#3d-relief) in *Menü → Karte konfigurieren* einschalten.


*Wie die 3D-Relief-Funktion funktioniert*:
*1.* Um ein 3D-Relief zu erstellen, erhält OsmAnd Informationen über die Geländeerhebung.
*2.* Basierend auf den Höhendaten wird ein 3D-Modell erstellt, um Berge, Hügel, Täler und andere Geländeelemente auf der Karte anzuzeigen.
*3.* OsmAnd zeigt diese dreidimensionalen Modelle dann auf einer flachen Karte an. Die Karte kann vergrößert, verkleinert und gedreht werden, um das Gelände aus verschiedenen Blickwinkeln und Perspektiven zu betrachten.
*4.* Die Anzeige von Höhenlinien auf der Karte hängt nicht davon ab, ob die Kartenquelle online oder offline ist.


## Rasterkarten vorbereiten/auf Gerät kopieren {#preparecopy-raster-maps-to-device}

Es gibt mehrere Möglichkeiten, eine neue Rasterkarte hinzuzufügen, sie von einem anderen Gerät zu kopieren, auf einem PC vorzubereiten und Kacheln vorab herunterzuladen, um sie offline zu verwenden. Zum Beispiel können Sie Ihr Kartenpaket auf einem PC mit spezieller Software wie [MOBAC, OsmAndMapCreator usw.](../../technical/map-creation/index.md) erstellen. Typischerweise werden Rasterkarten als Dateien mit der Erweiterung `.sqlitedb` verteilt.

Hier sind die wichtigsten Methoden zum Hinzufügen einer neuen Rasterkartenquelle, die noch nicht in OsmAnd definiert ist:

- Öffnen Sie eine gebrauchsfertige `.sqlitedb`-Datei mit OsmAnd.
- Importieren Sie ein Paket mit vorbereiteten Online-Karten von einer anderen OsmAnd-Anwendung als spezielles `.osf`-**Paket** über die [Import-/Exportfunktion](../personal/import-export.md).
- Erstellen Sie eine neue Online-Kartenquelle direkt auf einem mobilen Gerät.
- Bereiten Sie eine Magic-URL mit Online-Kartenquellenparametern vor und öffnen Sie sie mit OsmAnd.


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

Um eine Rasterkartenquelle zu erstellen, benötigen Sie die **URL einer Kachel**, die eine spezifische URL ist, die Kartenkacheln in der Mercator-Projektion verteilt. Zum Beispiel könnte eine Kachel-URL so aussehen: `https://tile.osmand.net/hd/6/55/25.png`, wobei `tile.osmand.net/hd/` die Basis-URL ist.

Hier sind die wichtigsten Parameter, die beim Einrichten einer neuen Online-Kartenquelle konfiguriert werden müssen:

| Parameter | Beschreibung |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Geben Sie einen Namen für die neue Online-Kartenquelle an. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Geben Sie die URL für die Online-Kachelquelle ein oder fügen Sie sie ein. Stellen Sie sicher, dass sie dem Kachel-URL-Format entspricht. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Dieser Parameter beeinflusst, wie die Karte angezeigt wird. <br/><ul><li>Als *Kartentyp* wird die Karte auf die ausgewählten Zoomstufen begrenzt.</li><li>Als *Überlagerung/Unterlage* erscheint die Karte auf den ausgewählten Zoomstufen, wobei außerhalb dieser Stufen eine Hoch- oder Herunterskalierung angewendet wird.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Legen Sie die Dauer (in Minuten) fest, nach der zwischengespeicherte Kacheln aktualisiert werden. Sie können dieses Feld leer lassen, wenn Kacheln nicht automatisch neu geladen werden sollen. <br/><ul><li>1 Tag = 1440 Minuten</li><li>1 Woche = 10.080 Minuten</li><li>30 Tage = 43.200 Minuten</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Wählen Sie zwischen *Pseudo-Mercator-Projektion* und *Elliptischer Mercator-Projektion*, je nach Quelle. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Wählen Sie, wie Kacheln gespeichert werden sollen: entweder in einer *SQLiteDB-Datei* oder als *eine Bilddatei pro Kachel*. |


### Magic-URL zum Installieren der Kartenquelle {#magic-url-to-install-map-source}

Online-Karten können mit einem speziellen Link zur OsmAnd-Rasterkartenliste hinzugefügt werden. Klicken Sie auf diesen Link und wählen Sie OsmAnd zum Öffnen:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parameter des Links|Beispiel|
|:--------|:---------------|
| [Konstanter Teil]| `http://osmand.net/add-tile-source` |
|[Trennzeichen]| ? & |
|[Name]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoomstufen]|min_zoom=9 / max_zoom=15|

Eine hinzugefügte Online-Karte finden Sie in der Liste des Menüs [Haupt / Unterlage / Überlagerungsebene](#select-raster-maps).


## Rasterkarten verwalten {#manage-raster-maps}

Rasterkarten können einen erheblichen Teil des Speicherplatzes beanspruchen, daher müssen Sie dies möglicherweise regelmäßig überprüfen. Für große Datensätze wird die Verwendung von *SQLite-Rasterquellen* empfohlen, da diese alle Kacheln in einer großen Datei (SQLite-Datenbank) speichern.

- [**SQ Lite-Format**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo-Format**](../../technical/osmand-file-formats/osmand-metainfo.md)

Um das Kachelformat zu ändern, können Sie <Translate android="true" ids="storage_format"/> im Bearbeitungsmenü der Online-Karten auswählen:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karten auswählen →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Rasterkarten-Cache leeren {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Kacheln werden im Cache gespeichert, wenn Online-Rasterkarten als Haupt-/Überlagerungs-/Unterlagerungsebene verwendet werden. Die Größe Ihrer SQ Lite-Datei wird unter dem Namen Ihrer Online-Karte in der Liste angezeigt. Manchmal ist eine regelmäßige Bereinigung erforderlich, um die Anzeige der Kacheln zu beschleunigen oder die Daten zu aktualisieren.

Um den Kartenkachel-Cache zu leeren, müssen Sie Folgendes tun:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karten auswählen →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Kacheln herunterladen / aktualisieren {#download--update-tiles}

Wenn Sie Rasterkarten offline nutzen möchten, müssen Sie möglicherweise Kacheln vorab laden. Dies kann auf Ihrem Mobilgerät erfolgen, beachten Sie jedoch, dass einige Dienste große Paket-Downloads blockieren können. Sie können dieselbe Funktion auch verwenden, um bereits heruntergeladene Kacheln für ausgewählte Bereiche zu aktualisieren, andernfalls zeigt OsmAnd weiterhin Kacheln an, die bereits im Cache gespeichert sind.

Damit die Karten die Kacheln nach einer Weile automatisch aktualisieren, können Sie eine [Ablaufzeit](#add-new-online-raster-map-source) festlegen, dann lädt OsmAnd die Kacheln neu, sobald sie angezeigt werden.

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

- Um Rasterkacheln herunterzuladen oder zu aktualisieren, müssen Sie die Quelle der Online-Karte als [Hauptkartenquelle](#select-raster-maps) (**Android / iOS**) auswählen. Sie können auch Online-Kacheln separat für die [Überlagerung](#overlay-layer) oder für die [Unterlage](#underlay-layer) (nur für **Android**) auswählen.

- Für die **Android**-Version der OsmAnd-App müssen Sie einen Bereich entsprechend der Bildschirmgröße Ihres Geräts auswählen und lange auf die Karte tippen. Wählen Sie dann [*Aktionen*](../map/map-context-menu.md#update--download-online-maps) im Kartenkontextmenü und die Option *Karte herunterladen* oder *Karte aktualisieren*. Auf dem Bildschirm "Karte herunterladen" nehmen Sie die erforderlichen Einstellungen vor und tippen auf "Herunterladen".

- In der **iOS**-Version der OsmAnd-App müssen Sie lange auf die Karte tippen, dann [*Aktionen*](../map/map-context-menu.md#update--download-online-maps) und die Option *Karte herunterladen* oder *Karte aktualisieren* aus dem Kartenkontextmenü auswählen. Auf dem Bildschirm "Karte herunterladen" können Sie den gewünschten Bereich auswählen und die erforderlichen Einstellungen ändern. Nachdem Sie alle Parameter festgelegt haben, können Sie die Anzahl der Kacheln und die Downloadgröße sehen.


### Rasterkartenparameter ändern {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karten auswählen → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Rasterkarten können so verwendet werden, wie sie bereits existieren, wenn die Kacheln bereits kartiert sind. Wenn die Rasterkarten online bereitgestellt werden, gibt es immer eine Basis-URL, die konfiguriert werden muss. Es gibt noch einige weitere grundlegende Parameter, die für Rasterkarten geändert werden können, darüber können Sie in [diesem Abschnitt](#add-new-online-raster-map-source) des Artikels lesen. Komplexere Parameter sind in den internen Komponenten des [SQ Lite-Formats](../../technical/osmand-file-formats/osmand-sqlite.md) kodiert.


## Verwandte Artikel {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: Oktober 2024*