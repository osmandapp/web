---
source-hash: 4cb7c9084c7789ea96d9afde0dedc4fd456fd2ec20405b46d983a36f733ea01e
sidebar_position: 8
title:  Online-Karten
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

OsmAnd Online-Karten sind eine umfangreiche Ergänzung zur bereits in der Anwendung vorhandenen OpenStreetMap-Datenbank. Mit diesem Plugin können Sie Ihrer Karte Ebenen mit Informationen aus einer anderen Quelle hinzufügen, angefangen bei der Satelliten- oder Wanderroutenansicht bis hin zu sehr spezifischen Daten, wie z. B. dem Standort von Hydranten. Sie können auch die Hauptquelle der Karte von Vektorkarten auf Online-Kacheln ändern.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Möglichkeit, Online-Karten zu verwenden, ist in der iOS-Version von OsmAnd automatisch aktiviert. Um Online-Karten in Android anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das **Online-Karten**-Plugin im *Hauptmenü → Plugins → Online-Karten*.
2. Nehmen Sie die erforderlichen Einstellungen im Abschnitt [Kartenquelle](../map/raster-maps.md#select-raster-maps) des Menüs "Karte konfigurieren" vor.
3. Stellen Sie die Karten *Kartenquelle*, *Überlagerung* und *Untergrundkarte* ein. Wählen Sie Ihren bevorzugten Satellitenkartenanbieter.
4. Laden Sie bei Bedarf die ausgewählte [Online-Karte](#how-to-prepare-raster-maps) herunter.


## Rasterkarten auf dem Gerät verwenden {#use-raster-maps-on-device}

Detaillierte Informationen zur Visualisierung und Anpassung von Rasterkarten finden Sie im Artikel [Rasterkarten](../map/raster-maps.md). Wie zu verwenden:

1. [Wählen](../map/raster-maps.md#select-raster-maps) Sie die Rasterkarte als *Haupt*-, *Untergrund*- oder *Überlagerungs*-Ebene aus.
    - [Ändern](../map/raster-maps.md#how-to-use-raster-maps) Sie die Ebenenparameter (Transparenz).

2. [Bereiten Sie Rasterkarten vor / kopieren](../map/raster-maps.md#preparecopy-raster-maps-to-device) Sie sie auf das Gerät.
    - [Neue Online-Rasterkartenquelle hinzufügen](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Magic-URL hinzufügen](../map/raster-maps.md#magic-url-to-install-map-source), um eine Kartenquelle zu installieren.

3. [Verwalten](../map/raster-maps.md#manage-raster-maps) Sie Rasterkarten.
    - [Kacheln herunterladen / aktualisieren](../map/raster-maps.md#download--update-tiles).
    - [Parameter der Rasterkarte ändern](../map/raster-maps.md#change-raster-map-parameters).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Untergrund / Überlagerung konfigurieren Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Untergrund / Überlagerung konfigurieren iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Wie man Rasterkarten vorbereitet {#how-to-prepare-raster-maps}

:::info
Den Hauptartikel zur Vorbereitung von Karten [lesen Sie hier](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Obwohl das Plugin *Online-Karten* heißt, können Sie die Karten auch ohne Internetverbindung verwenden. Sie müssen nur die Teile der Karten (oft Kacheln genannt) speichern, um sie später zu verwenden. Laden Sie dazu ein spezielles [Map Creator Tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) herunter, das vom OsmAnd-Team entwickelt wurde.

Wählen Sie den Bereich aus, den Sie herunterladen möchten, klicken Sie auf "Preload area", stellen Sie dann die kleinsten und größten Zoomstufen ein, die Sie anzeigen möchten, und laden Sie die Kacheln herunter.
Für die <b>Android-Version</b> können Sie sie in den Ordner <i>osmand/tiles/*tile type*</i> Ihres Telefons kopieren. Sie müssen auch <i>Karte konfigurieren → Überlagerungskarte</i> öffnen und OsmAnd-Online-Kacheln auswählen.

Für die <b>iOS-Version</b> können Sie eine SQ-Lite-Datei auf Ihrem Telefon auswählen (jeder Messenger oder Dropbox), OsmAnd wird vorschlagen, sie hinzuzufügen. Sie müssen auch <i>Karte → Überlagerung / Untergrundkarte oder Kartentyp</i> öffnen und die neue Kartenquelle auswählen.

Wie Sie eine SQ-Lite-Datei in der Android- und iOS-Version von OsmAnd hinzufügen, können Sie im <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis-Projekt</b></a> nachlesen.


Online-Kacheln können hilfreich sein, wenn Sie nur einen kleinen Ausschnitt der Karte oder einen bestimmten Kartentyp für einen begrenzten Bereich benötigen, aber nicht die ganze Region herunterladen möchten. Sie können in unzähligen Situationen nützlich sein.

![Online-Karten](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online-Karten](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. Online-Karten erscheinen nicht im Menü "Kartenquelle":  
  
    - Überprüfen Sie, ob das Plugin "Online-Karten" aktiviert ist: *Menü → Plugins → Online-Karten*.  
    - Stellen Sie sicher, dass Sie eine aktive Internetverbindung haben, um auf Satellitenbilder zugreifen zu können.  
    - Prüfen Sie, ob die ausgewählte Online-Karte heruntergeladen ist oder [zusätzliche Einstellungen](../map/raster-maps.md#select-raster-maps) erfordert.