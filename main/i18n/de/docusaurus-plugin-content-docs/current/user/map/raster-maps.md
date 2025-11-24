---
source-hash: 920207bbfa1108e21a6ec98acd47b4e83730bee1cdc303a464524ab28654175f
sidebar_position: 6
title:  Rasterkarten (Online / Offline)
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

Rasterkarten sind eine wichtige und nützliche Ergänzung zu den Vektorkarten von OsmAnd. Sie ermöglichen es Ihnen, verschiedene Kartenquellen mit Vektorkarten zu kombinieren. Zum Beispiel werden Informationen über Hügel und Hänge als Rasterebene dargestellt. Sie können eine Überlagerung von Wanderwegen, Regenkarten, Echtzeit-Verkehrsdaten und eine Überlagerung von Satellitenbildern auf einer durchscheinenden Vektor-Basiskarte anzeigen. Sie können auch die Standardkarten auf Rasterkacheln im Web umstellen.


## Anwendungsfälle {#use-cases}

Rasterkarten haben ein breites Anwendungsspektrum. Hier sind einige der beliebtesten:

- Satellitenbilder als untere Ebene.
- Echtzeit-Verkehrsinformationen.
- regenvorhersage als Überlagerung.
- Topografische Karten mit Schattierung von Hügeln und Hängen.
- Aktive Rad- und Laufstrecken als Überlagerung.
- Echtzeit-Schiffsinformationen.
- Online-OpenStreetMap-Kacheln für die OSM-Bearbeitung.

![Übersicht Online-Karten](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Sie können auch die Hauptquelle der Karten von Vektorkarten auf Online-Kacheln ändern.
:::


## Rasterkarten {#raster-maps}

Online-Karten in OsmAnd bestehen aus Rasterdaten, die aus Pixeln (auch als Gitterzellen bezeichnet) bestehen - im Wesentlichen eine Reihe kleiner Bilder, die als Kacheln bekannt sind. Im Gegensatz zu Vektorkarten, die Daten wie Straßen, Punkte und Polygone mit binären Informationen darstellen, sind Rasterkartenkacheln in einem Gitter angeordnet und können bei hohen Zoomstufen verpixelt erscheinen, da jedes Pixel einen festen Wert oder eine feste Klasse hat.

### Vergleich mit Standard-Vektorkarten {#comparison-to-default-vector-maps}

**Vorteile:**

- Da Rasterkarten vorgerendert sind, laden sie schneller, sodass das Gerät keine Daten in Echtzeit verarbeiten und rendern muss.
- Rasterkarten können während des Surfens dynamisch geladen werden.
- Sie können einen Offline-Cache erstellen und bei Bedarf nur fehlende Kacheln herunterladen.
- Sie können eine unbegrenzte Anzahl externer Webquellen für Rasterkarten verwenden, was es flexibel für verschiedene Kartentypen wie Satellitenansichten oder spezialisierte Karten macht.
- Rasterdaten, wie z. B. Verkehrsinformationen, können nach Ablauf regelmäßig aktualisiert werden (z. B. alle 20-30 Minuten, je nach Konfiguration).

**Nachteile:**

- Rasterkarten benötigen deutlich mehr Speicherplatz als Vektorkarten. Zum Beispiel kann eine Stadtkarte als Vektorkarte 15 MB groß sein, aber bei Zoomstufe 15 auf 50 MB, bei Zoomstufe 16 auf 200 MB und bei Zoomstufe 17 auf bis zu 800 MB anwachsen.
- Sie können nicht auf bestimmte Orte oder Objekte auf Rasterkarten tippen, um weitere Informationen zu erhalten.
- Rasterkarten können nicht gestaltet oder geändert werden, um bestimmte Objekte auszuschließen.
- Zu starkes Hineinzoomen kann dazu führen, dass das Bild verpixelt erscheint, insbesondere wenn keine hochauflösenden Kacheln verfügbar sind.
- Es ist nicht möglich, die Karte zu drehen, ohne den Text zu drehen, was das Lesen von Beschriftungen erschweren kann.


## Wie man Rasterkarten verwendet {#how-to-use-raster-maps}

**Plugin aktivieren**.

- **iOS**. Bei *iOS* funktioniert diese Funktion standardmäßig.
- **Android**. Um Rasterkarten in OsmAnd für *Android* zu verwenden, müssen Sie das [Online-Karten-Plugin](../plugins/online-map.md) aktivieren. Führen Sie die folgenden Schritte aus: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Ebenenparameter ändern**. Um die Sichtbarkeit und Mischung von Rasterkartenebenen zu verbessern, können Sie die Ebenentransparenz mit dem Schieberegler auf dem Bildschirm anpassen. Zusätzlich können Sie den Stil der Vektorkarte ändern, indem Sie Polygone ausblenden, wodurch die unteren Ebenen besser sichtbar werden. Dies ist besonders nützlich beim Betrachten von Satellitenbildern.


## Rasterkarten auswählen {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Karten anzeigen](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Karten anzeigen](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

In OsmAnd können Rasterkarten als zusätzliche Kartenquelle neben den standardmäßigen Vektorkarten dienen, die für die Offline-Nutzung optimiert sind.  

Sie haben die Flexibilität, eine oder zwei Online-Kachelebenen hinzuzufügen, um Ihre Basiskarte zu ergänzen. Dies ermöglicht es Ihnen, bis zu drei Kartenebenen gleichzeitig auf Ihrem Bildschirm anzuzeigen. Zum Beispiel können Sie die Offline-Vektorkarte von OsmAnd als Basis haben, sie mit einer Satellitenansicht überlagern und eine Radwegkarte als untere Ebene für zusätzliche Details platzieren.  

Sie können auch die Transparenz der Basiskarte anpassen, um sie mit Ihren Ebenen zu mischen. Bei Bedarf können Sie einen Transparenzregler auf dem Hauptbildschirm für schnelle Anpassungen aktivieren.


### Hauptkarte {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Karten anzeigen](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Karten anzeigen](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Sie können einen Kartenstil aus der Liste auswählen oder [Ihren eigenen hinzufügen](#add-new-online-raster-map-source).


### Überlagerungsebene {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Untere/Obere Ebene konfigurieren Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Untere/Obere Ebene konfigurieren iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Ein-/Ausschalten* der Überlagerungskarte.
2. *Transparenz der Überlagerung* (*Android*)/ *Transparenz* der Überlagerungskarte (*iOS*).
3. *Transparenzregler anzeigen* (*Android*) / *Regler auf der Karte anzeigen* (*iOS*). Schneller Zugriff auf die Transparenzeinstellung.
4. *Quelle der Überlagerungskarte* (*Android*) / *Verfügbare Ebenen* (*iOS*). Sie können eine Kachelkarte zum Installieren oder Aktualisieren auswählen.
5. *Kartensymbole anzeigen* - wie Text, Straßenschilder und andere.  
6. *Online-Quelle hinzufügen* (*iOS*).
7. *Aus Dokumenten importieren* (*iOS*).


### Untere Ebene {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Untere/Obere Ebene konfigurieren Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Untere/Obere Ebene konfigurieren iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Ein-/Ausschalten* der unteren Kartenebene.
2. *Transparenz der Basiskarte*.
3. *Transparenzregler anzeigen* (*Android*) / *Regler auf der Karte anzeigen* (*iOS*). Schneller Zugriff auf die Transparenzeinstellung.
4. *Quelle der unteren Kartenebene* (*Android*) / *Verfügbare Ebenen* (*iOS*). Sie können eine Kachelkarte zum Installieren oder Aktualisieren auswählen.
5. *Polygone anzeigen/ausblenden*.
6. *Online-Quelle hinzufügen* (*iOS*).
7. *Aus Dokumenten importieren* (*iOS*).


## Höhenschattierung / Neigung {#hillshade--slope}

![Geländeebenen](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Höhenschattierung** und **Neigung** sind Offline-Rasterkarten, die das Geländerelief zeigen. Sie werden als spezielle Kartenebene angezeigt, eine zweite Überlagerung auf der Basiskarte. Die Karten enthalten zusätzliche Höheninformationen, um Ihnen zu helfen, die Neigung und die Schatten der Landschaft genauer zu verstehen. Die Informationen zu *Höhenschattierung* und *Neigung* basieren auf Daten aus einer einzigen Quelle, der *Global Planet File*, und sind in Regionen unterteilt.  

Sie müssen nicht zwischen den Ebenen Höhenschattierung und Neigung wechseln, da sie automatisch zusammengeführt werden. Sie können nur eine dieser Ebenen zur Anzeige auf der Karte auswählen, haben aber auch die Möglichkeit, beide [als untere Ebene oder Überlagerung](#select-raster-maps) auf anderen Ebenen zu kombinieren, um eine visuellere Darstellung des Geländes zu erhalten.

Um mit Höhenschattierung und Neigung zu beginnen, müssen Sie:

1. Das Topography-Plugin erwerben:
    - [Android-Käufe](../purchases/android.md)
    - [iOS-Käufe](../purchases/ios.md)
2. Das [Topography-Plugin](../plugins/topography.md) aktivieren:  
    *Menü → Plugins → ︙ → Aktivieren*
3. Wählen Sie Ihre gewünschte Region aus und laden Sie **Geländekarte (3D)** herunter.
4. Der Download-Vorgang kann je nach Größe der ausgewählten Region und der Geschwindigkeit Ihrer Internetverbindung einige Zeit dauern.


### Höhenschattierung und 3D-Relief {#hillshade-and-3d-relief}

| Höhenschattierung | 3D-Relief |
|--------|---------|
| ![Geländeebenen](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Geländeebenen](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Der Unterschied in der Reliefdarstellung auf der Karte bei Anwendung dieser Einstellungen wird im Artikel **Topographie** im entsprechenden Abschnitt [Höhenschattierung und 3D-Relief](../plugins/topography.md#hillshade-and-3d-relief) beschrieben.


### Anzeigeoptionen konfigurieren {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Geländeebenen](@site/static/img/plugins/online-maps/terrain_layers.png)

Sie können die Zoomstufe für die Anzeige und die Transparenz für Höhenschattierung und Neigung anpassen. Mehr dazu können Sie im [Topographie-Artikel](../plugins/topography.md#hillshade-slope-and-altitude-layers) lesen.


## 3D-Relief {#3d-relief}

:::note
[3D-Relief](../plugins/topography.md#3d-relief) ist eine kostenpflichtige Funktion von [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Geländeebenen](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Die Funktion [**3D-Relief**](../plugins/topography.md#3d-relief) ist eine Kartentechnologie, die die Visualisierung von Gelände auf einer Karte mithilfe von dreidimensionalen Modellen ermöglicht. Diese Funktion fügt einer normalen zweidimensionalen Karte Höheninformationen hinzu, was einen 3D- und Tiefeneffekt erzeugt und es Ihnen ermöglicht, das Gelände besser zu visualisieren.  

*Um 3D-Relief zu verwenden*:  
Sie müssen den [OsmAnd Pro-Kaufplan](../plugins/index.md#purchase) erwerben, das [Topography-Plugin](../plugins/topography.md) aktivieren und den Punkt [3D-Relief](../plugins/topography.md#3d-relief) im *Menü → Karte konfigurieren* einschalten.


*Wie die 3D-Relief-Funktion funktioniert*:  
*1.* Um ein 3D-Relief zu erstellen, empfängt OsmAnd Informationen über die Geländehöhe.  
*2.* Basierend auf den Höhendaten wird ein 3D-Modell erstellt, um Berge, Hügel, Täler und andere Geländeelemente auf der Karte darzustellen.  
*3.* OsmAnd zeigt diese dreidimensionalen Modelle dann auf einer flachen Karte an. Die Karte kann vergrößert, verkleinert und gedreht werden, um das Gelände aus verschiedenen Winkeln und Perspektiven zu betrachten.  
*4.* Die Anzeige von Höhenlinien auf der Karte hängt nicht davon ab, ob die Kartenquelle online oder offline ist.


## Rasterkarten vorbereiten/auf das Gerät kopieren {#preparecopy-raster-maps-to-device}

Es gibt mehrere Möglichkeiten, eine neue Rasterkarte hinzuzufügen, sie von einem anderen Gerät zu kopieren, sie auf einem PC vorzubereiten und Kacheln für die Offline-Nutzung vorab herunterzuladen. Sie können zum Beispiel Ihr eigenes Kartenpaket auf einem PC mit spezieller Software wie [MOBAC, OsmAndMapCreator usw.](../../technical/map-creation/index.md) erstellen. Typischerweise werden Rasterkarten als Dateien mit der Erweiterung `.sqlitedb` verteilt.

Hier sind die wichtigsten Methoden, um eine neue Rasterkartenquelle hinzuzufügen, die noch nicht in OsmAnd definiert ist:

- Öffnen Sie eine fertige `.sqlitedb`-Datei mit OsmAnd.
- Importieren Sie ein Paket mit vorbereiteten Online-Karten aus einer anderen OsmAnd-Anwendung als spezielles `.osf` **Paket** über die [Import-/Export-Funktionalität](../personal/import-export.md).
- Erstellen Sie eine neue Online-Kartenquelle direkt auf dem mobilen Gerät.
- Bereiten Sie eine Magic-URL mit den Parametern der Online-Kartenquelle vor und öffnen Sie sie mit OsmAnd.


### Neue Online-Rasterkartenquelle hinzufügen {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Online-Quelle hinzufügen](@site/static/img/plugins/online-maps/add-online-source-2.png)

Um eine Rasterkartenquelle zu erstellen, müssen Sie die **URL einer Kachel** kennen, eine spezifische URL, die Kartenkacheln in der Mercator-Projektion verteilt. Zum Beispiel könnte eine Kachel-URL so aussehen: `https://tile.osmand.net/hd/6/55/25.png`, wobei `tile.osmand.net/hd/` die Basis-URL ist.

Hier sind die wichtigsten Parameter, die beim Einrichten einer neuen Online-Kartenquelle konfiguriert werden müssen:

| Parameter | Beschreibung |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Geben Sie einen Namen für die neue Online-Kartenquelle an. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Geben Sie die URL für die Online-Kachelquelle ein oder fügen Sie sie ein. Stellen Sie sicher, dass sie dem Kachel-URL-Format entspricht. Die URL kann bestimmte Platzhalter enthalten, die OsmAnd automatisch basierend auf der spezifischen benötigten Kachel ersetzt. Die am häufigsten verwendeten Platzhalter basieren auf der [OpenStreetMap slippy map tilenames convention](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames): <ul><li>`{z}` oder `{0}`: Zoomstufe</li><li>`{x}` oder `{1}`: Kachel-X-Index</li><li>`{y}` oder `{2}`: Kachel-Y-Index</li></ul> Für Beispiele weniger häufig verwendeter Platzhalter siehe die [vordefinierten Online-Rasterkartenquellen](https://github.com/osmandapp/web/blob/main/main/static/tile_sources.xml). |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Dieser Parameter beeinflusst, wie die Karte angezeigt wird. <br/><ul><li>Als *Kartentyp* wird die Karte auf die ausgewählten Zoomstufen beschränkt.</li><li>Als *Überlagerung/untere Ebene* erscheint die Karte auf den ausgewählten Zoomstufen, wobei außerhalb dieser Stufen eine Hoch- oder Herunterskalierung angewendet wird.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Legen Sie die Dauer (in Minuten) fest, nach der zwischengespeicherte Kacheln aktualisiert werden. Sie können dieses Feld leer lassen, wenn Sie nicht möchten, dass Kacheln automatisch neu geladen werden. <br/><ul><li>1 Tag = 1440 Minuten</li><li>1 Woche = 10.080 Minuten</li><li>30 Tage = 43.200 Minuten</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Wählen Sie je nach Quelle zwischen *Pseudo-Mercator-Projektion* und *Elliptischer Mercator-Projektion*. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Wählen Sie aus, wie Kacheln gespeichert werden sollen: entweder in einer *SQLiteDB-Datei* oder als *eine Bilddatei pro Kachel*. |


### Magic-URL zur Installation einer Kartenquelle {#magic-url-to-install-map-source}

Online-Karten können mit einem speziellen Link zur OsmAnd-Rasterkartenliste hinzugefügt werden. Klicken Sie auf diesen Link und wählen Sie OsmAnd zum Öffnen:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parameter des Links|Beispiel|
|:--------|:---------------|
| [Konstanter Teil]| `http://osmand.net/add-tile-source` |
|[Trennzeichen]| ?   & |
|[Name]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoomstufen]|min_zoom=9 / max_zoom=15|

Sie finden eine hinzugefügte Online-Karte in der Liste des Menüs [Hauptkarte / Untere Ebene / Überlagerungsebene](#select-raster-maps).


## Rasterkarten verwalten {#manage-raster-maps}

Rasterkarten können eine erhebliche Menge an Speicherplatz beanspruchen, daher müssen Sie dies möglicherweise regelmäßig überprüfen. Für große Datensätze wird empfohlen, eine *SQLite-Rasterquelle* zu verwenden, da diese alle Kacheln in einer großen Datei (SQLite-Datenbank) speichert.

- [**SQ Lite-Format**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo-Format**](../../technical/osmand-file-formats/osmand-metainfo.md)

Um das Kachelformat zu ändern, können Sie <Translate android="true" ids="storage_format"/> im Bearbeitungsmenü der Online-Karten auswählen:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karte auswählen →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Rasterkarten-Cache leeren {#clear-raster-map-cache}

![Liste der Online-Quellen](@site/static/img/plugins/online-maps/online-sources-list.png)

Kacheln werden im Cache gespeichert, wenn Online-Rasterkarten als Haupt-, Überlagerungs- oder untere Ebene verwendet werden. Sie können die Größe Ihrer SQ Lite-Datei unter dem Namen Ihrer Online-Karte in der Liste sehen. Manchmal ist eine regelmäßige Reinigung erforderlich, um die Anzeige der Kacheln zu beschleunigen oder die Daten zu aktualisieren.  

Um den Kartenkachel-Cache zu leeren, müssen Sie Folgendes tun:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karte auswählen →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Kacheln herunterladen / aktualisieren {#download--update-tiles}

Wenn Sie offline auf Rasterkarten zugreifen möchten, müssen Sie möglicherweise Kacheln vorladen. Dies kann auf Ihrem mobilen Gerät erfolgen, aber beachten Sie, dass einige Dienste große Paket-Downloads blockieren können. Sie können dieselbe Funktion auch verwenden, um bereits heruntergeladene Kacheln für ausgewählte Bereiche zu aktualisieren, andernfalls zeigt OsmAnd weiterhin Kacheln an, die bereits im Cache gespeichert sind.  

Damit die Karten die Kacheln nach einer Weile automatisch aktualisieren, können Sie eine [Ablaufzeit](#add-new-online-raster-map-source) festlegen, dann lädt OsmAnd die Kacheln neu, sobald sie angezeigt werden.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="Rasterkarten"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="Rasterkarten"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="Rasterkarten"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="Rasterkarten"/></td>
    </tr>
</table>  

<!--

![Kacheln herunterladen Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Kacheln herunterladen Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Kacheln herunterladen Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Kacheln herunterladen Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Kacheln herunterladen iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Um Rasterkacheln herunterzuladen oder zu aktualisieren, müssen Sie die Quelle der Online-Karte als [Hauptkartenquelle](#select-raster-maps) auswählen (**Android / iOS**). Sie können Online-Kacheln auch separat für die [Überlagerungskarte](#overlay-layer) oder für die [untere Ebene](#underlay-layer) auswählen (nur für **Android**).

- Für die **Android**-Version der OsmAnd-App müssen Sie einen Bereich entsprechend der Bildschirmgröße Ihres Geräts auswählen und einen langen Druck auf die Karte machen. Wählen Sie dann [*Aktionen*](../map/map-context-menu.md#update--download-online-maps) im Kartenkontextmenü und die Option *Karte herunterladen* oder *Karte aktualisieren*. Auf dem Bildschirm "Karte herunterladen" nehmen Sie Änderungen an den erforderlichen Einstellungen vor und tippen auf "Herunterladen".  

- In der **iOS**-Version der OsmAnd-App müssen Sie lange auf die Karte tippen, dann [*Aktionen*](../map/map-context-menu.md#update--download-online-maps) und die Option *Karte herunterladen* oder *Karte aktualisieren* aus dem Kartenkontextmenü auswählen. Auf dem Bildschirm "Karte herunterladen" können Sie den gewünschten Bereich auswählen und die erforderlichen Einstellungen ändern. Nachdem Sie alle Parameter eingestellt haben, können Sie die Anzahl der Kacheln und die Downloadgröße sehen.


### Rasterkartenparameter ändern {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → Online-Karte auswählen →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Rasterkarten können so verwendet werden, wie sie bereits existieren, wenn die Kacheln bereits zugeordnet sind. Wenn die Rasterkarten online bereitgestellt werden, gibt es immer eine Basis-URL, die konfiguriert werden muss. Es gibt noch einige weitere grundlegende Parameter, die für Rasterkarten geändert werden können, darüber können Sie in [diesem Abschnitt](#add-new-online-raster-map-source) des Artikels lesen. Komplexere Parameter sind in den internen Komponenten des [SQ Lite-Formats](../../technical/osmand-file-formats/osmand-sqlite.md) kodiert.


## Verwandte Artikel {#related-articles}

- [Importieren / Exportieren](../personal/import-export.md)
- [Farbschemata](../personal/color-palette-schemes.md)