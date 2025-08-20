---
sidebar_position: 1
title:  Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Initial Setup {#initial-setup}

### How to recover data {#how-to-recover-data}

To prevent data loss, ensure that your personal data, routes, and maps are backed up. OsmAnd offers options for exporting your data to various formats. In case of data loss or device change, follow [these steps](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) to restore your data from a backup.


### How to transfer Favorites and Tracks to a new device {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- The simplest method is to export a profile with the necessary data: *Menu → Settings → Export →* select the data that you want to export.
- Alternatively, you can backup all your data from the previous device by copying the folder located in *Settings → OsmAnd Settings → Data storage folder* (default path: `Android/data/net.osmand.plus`). Then, paste the contents of this folder into the Data storage folder on your new device.


### I can't install the application 
Please check the following things:
- Version of Android and application version
- Check that app is not yet installed


## Import Files {#import-files}

### I have a GPX file, how do I import it into OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - You can [download and open the file](../navigation/setup/gpx-navigation.md) using a file browser or cloud service like Dropbox, and select OsmAnd as the target application.
    - Alternatively, place the file in the OsmAnd home folder: `osmand/tracks/(optional_sub-folder)/your_file.gpx`.

- **iOS**
    - To open [a GPX file in OsmAnd](../navigation/setup/gpx-navigation.md), simply download it and choose OsmAnd as the app to open it. The file will then be available for use within the app.

### Contour lines or hillshades do not show up {#contour-lines-or-hillshades-do-not-show-up}

Read more about the [Topography plugin](../plugins/topography.md).


## How to enable system fonts (Android) {#how-to-enable-system-fonts-android}

Starting with the Android 4.9 version, OsmAnd integrates your device's system font into the application interface, optimizing its design by eliminating mixed font usage. The system font is automatically applied to all UI elements.

- OsmAnd uses your device's default system font in all user interface elements.
- Switching to the system font is automatic. You do not need to configure any settings in the application for this feature.
- This feature does not affect the fonts displayed on the map.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 for iOS devices is not available for iOS versions older than iOS 15.

This means that to install OsmAnd 4.4 you need to upgrade your OS to at least iOS 15 or newer.


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


## Copy Raster Map Package Created on PC {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Map packages can be saved in two formats: [SQLite and Metainfo](https://osmand.net/docs/user/map/raster-maps). After creating your map package, follow these steps to move it to OsmAnd:

- **For Android**. Access storage on your device and copy the file(s) from your PC to the folder `BASE_OSMAND_STORAGE/tiles_`. Alternatively, you can download the file from your email, cloud, or messenger, and open it with the OsmAnd app. The map package will be automatically added to your online maps list.

- **For iOS**. Download the file from iTunes or a messenger, then open it with the OsmAnd app. The map package will be automatically added to your online maps list.

