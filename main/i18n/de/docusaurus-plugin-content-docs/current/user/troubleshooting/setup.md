---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title:  Einrichtung
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Erstmalige Einrichtung {#initial-setup}

### Wie Sie Daten wiederherstellen {#how-to-recover-data}

Um Datenverlust zu vermeiden, stellen Sie sicher, dass Ihre persönlichen Daten, Routen und Karten gesichert sind. OsmAnd bietet Optionen zum Exportieren Ihrer Daten in verschiedene Formate. Im Falle von Datenverlust oder Geräteänderung befolgen Sie [diese Schritte](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss), um Ihre Daten aus einem Backup wiederherzustellen.


### Wie Sie Favoriten und Tracks auf ein neues Gerät übertragen {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- Die einfachste Methode ist der Export eines Profils mit den notwendigen Daten: *Menü → Einstellungen → Exportieren →* wählen Sie die Daten aus, die Sie exportieren möchten.
- Alternativ können Sie alle Ihre Daten vom vorherigen Gerät sichern, indem Sie den Ordner kopieren, der sich in *Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner* befindet (Standardpfad: `Android/data/net.osmand.plus`). Fügen Sie dann den Inhalt dieses Ordners in den Datenspeicherordner auf Ihrem neuen Gerät ein.


## Dateien importieren {#import-files}

### Ich habe eine GPX-Datei, wie importiere ich sie in OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Sie können [die Datei herunterladen und öffnen](../navigation/setup/gpx-navigation.md) mit einem Dateibrowser oder einem Cloud-Dienst wie Dropbox und OsmAnd als Zielanwendung auswählen.
    - Alternativ legen Sie die Datei in den OsmAnd-Home-Ordner: `osmand/tracks/(optional_sub-folder)/your_file.gpx`.

- **iOS**
    - Um [eine GPX-Datei in OsmAnd zu öffnen](../navigation/setup/gpx-navigation.md), laden Sie sie einfach herunter und wählen Sie OsmAnd als App zum Öffnen aus. Die Datei steht dann in der App zur Verfügung.

### Höhenlinien oder Schummerungen werden nicht angezeigt {#contour-lines-or-hillshades-do-not-show-up}

Lesen Sie mehr über das [Topographie-Plugin](../plugins/topography.md).


## Wie Sie Systemschriften aktivieren (Android) {#how-to-enable-system-fonts-android}

Ab Android Version 4.9 integriert OsmAnd die Systemschrift Ihres Geräts in die Anwendungsoberfläche, optimiert so das Design und vermeidet die Verwendung gemischter Schriften. Die Systemschrift wird automatisch auf alle UI-Elemente angewendet.

- OsmAnd verwendet die Standard-Systemschrift Ihres Geräts in allen Elementen der Benutzeroberfläche.
- Die Umstellung auf die Systemschrift erfolgt automatisch. Sie müssen in der Anwendung keine Einstellungen für diese Funktion konfigurieren.
- Diese Funktion beeinflusst nicht die auf der Karte angezeigten Schriften.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 für iOS-Geräte ist nicht für iOS-Versionen älter als iOS 15 verfügbar.

Das bedeutet, dass Sie zum Installieren von OsmAnd 4.4 Ihr Betriebssystem auf mindestens iOS 15 oder neuer aktualisieren müssen.


<!--
## Storage on an SD card (Android) {#storage-on-an-sd-card-android}

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed before updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    for OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or on the device itself use
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). All copy operations
may also be invoked in OsmAnd itself via `Menu/Settings/General/Data
storage folder` but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).
-->


## Rasterkartenpaket vom PC kopieren {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Kartenpakete können in zwei Formaten gespeichert werden: [SQLite und Metainfo](https://osmand.net/docs/user/map/raster-maps). Nachdem Sie Ihr Kartenpaket erstellt haben, befolgen Sie diese Schritte, um es nach OsmAnd zu verschieben:

- **Für Android**. Greifen Sie auf den Speicher Ihres Geräts zu und kopieren Sie die Datei(en) von Ihrem PC in den Ordner `BASE_OSMAND_STORAGE/tiles_`. Alternativ können Sie die Datei von Ihrer E-Mail, Cloud oder Messenger herunterladen und mit der OsmAnd-App öffnen. Das Kartenpaket wird automatisch zu Ihrer Online-Kartenliste hinzugefügt.

- **Für iOS**. Laden Sie die Datei von iTunes oder einem Messenger herunter und öffnen Sie sie dann mit der OsmAnd-App. Das Kartenpaket wird automatisch zu Ihrer Online-Kartenliste hinzugefügt.