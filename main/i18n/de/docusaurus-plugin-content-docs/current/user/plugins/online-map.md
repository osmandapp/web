---
source-hash: e0f816c2ee06112779d7dbcf8e23176de7256a523ebca82309dd4e8a0dd894d4
sidebar_position: 8
title: Online-Karten
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

OsmAnd Online-Karten sind eine umfassende Ergänzung der bereits in der Anwendung vorhandenen OpenStreetMap-Datenbank. Mit diesem Plugin können Sie Ihrer Karte Ebenen mit Informationen aus verschiedenen Quellen hinzufügen, angefangen bei der Satelliten- oder Wanderroutenansicht bis hin zu sehr spezifischen Daten, wie dem Standort von Hydranten. Sie können auch die Hauptquelle der Karte von Vektorkarten auf Online-Kacheln umstellen.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Möglichkeit, Online-Karten zu verwenden, ist in der iOS-Version von OsmAnd automatisch aktiviert. Um Online-Karten in Android anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das Plugin **Online-Karten** im *Hauptmenü → Plugins → Online-Karten*.
2. Nehmen Sie die notwendigen Einstellungen im Abschnitt [Kartenquelle](../map/raster-maps.md#select-raster-maps) des Menüs "Karte konfigurieren" vor.
3. Legen Sie die *Kartenquelle*, *Überlagerung* und *Unterlagerung* fest. Wählen Sie Ihren bevorzugten Satellitenkartenanbieter.
4. Laden Sie die ausgewählte [Online-Karte](#how-to-prepare-raster-maps) bei Bedarf herunter.


## Rasterkarten auf dem Gerät verwenden {#use-raster-maps-on-device}

Detaillierte Informationen zur Visualisierung und Anpassung von Rasterkarten finden Sie im Artikel [Rasterkarten](../map/raster-maps.md). Verwendung:

1. Wählen Sie die Rasterkarte als *Haupt-*-, *Unterlagerungs-* oder *Überlagerungsebene* [aus](../map/raster-maps.md#select-raster-maps).
    - [Ändern](../map/raster-maps.md#how-to-use-raster-maps) Sie die Ebenenparameter (Transparenz).

2. [Bereiten Sie Rasterkarten vor / kopieren Sie sie](../map/raster-maps.md#prepare--copy-raster-maps-to-device) auf das Gerät.
    - [Neue Online-Rasterkartenquelle hinzufügen](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Magic URL hinzufügen](../map/raster-maps.md#magic-url-to-install-map-source), um die Kartenquelle zu installieren.

3. [Verwalten](../map/raster-maps.md#manage-raster-maps) Sie Rasterkarten.
    - [Kacheln herunterladen / aktualisieren](../map/raster-maps.md#download--update-tiles).
    - [Rasterkartenparameter ändern](../map/raster-maps.md#change-raster-map-parameters).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Wie man Rasterkarten vorbereitet {#how-to-prepare-raster-maps}

:::info
Hauptartikel zur Kartenvorbereitung [hier lesen](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Obwohl das Plugin *Online-Karten* genannt wird, können Sie die Karten auch ohne Internetverbindung verwenden. Sie müssen nur die Kartenteile (oft Kacheln genannt) speichern, um sie später zu verwenden. Laden Sie dazu ein spezielles [Map Creator Tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) herunter, das vom OsmAnd-Team entwickelt wurde.

Wählen Sie den Bereich aus, den Sie herunterladen möchten, klicken Sie auf "Preload area", stellen Sie dann die kleinste und größte Zoomstufe ein, die Sie anzeigen möchten, und laden Sie die Kacheln herunter.
Für die <b>Android-Version</b> können Sie sie in den Ordner <i>osmand/tiles/*Kacheltyp*</i> Ihres Telefons kopieren. Sie müssen auch <i>Karte konfigurieren -> Überlagerungskarte</i> öffnen und OsmAnd Online-Kacheln auswählen.

Für die <b>iOS-Version</b> können Sie eine SQ Lite-Datei auf Ihrem Telefon auswählen (jeder Messenger oder Dropbox), OsmAnd schlägt vor, sie hinzuzufügen. Sie müssen auch <i>Karte → Überlagerung / Unterlagerung oder Kartentyp</i> öffnen und eine neue Kartenquelle auswählen.

Wie man SQ Lite-Dateien in der Android- und iOS-Version von OsmAnd hinzufügt, können Sie im <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis-Projekt</b></a> nachlesen.


Online-Kacheln können hilfreich sein, wenn Sie nur einen kleinen Kartenausschnitt oder einen bestimmten Kartentyp in einem begrenzten Bereich verwenden möchten, aber nicht die gesamte Region herunterladen möchten. Sie können in unzähligen Situationen nützlich sein.

![Online Maps](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online Maps](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. Online-Karten werden im Menü "Kartenquelle" nicht angezeigt:

    - Überprüfen Sie, ob das Online-Karten-Plugin aktiviert ist: *Menü → Plugins → Online-Karten*.
    - Stellen Sie sicher, dass Sie eine aktive Internetverbindung haben, um auf Satellitenbilder zugreifen zu können.
    - Prüfen Sie, ob die ausgewählte Online-Karte heruntergeladen wurde oder [zusätzliche Einstellungen](../map/raster-maps.md#select-raster-maps) erfordert.

> *Zuletzt aktualisiert: Januar 2025*