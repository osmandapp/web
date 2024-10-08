---
sidebar_position: 7
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


## Initial Setup

### How to recover data

To prevent data loss, ensure that your personal data, routes, and maps are backed up. OsmAnd offers options for exporting your data to various formats. In case of data loss or device change, follow [these steps](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) to restore your data from a backup.


### How to transfer Favorites and Tracks to a new device

- The simplest method is to export a profile with the necessary data: *Menu → Settings → Export →* select the data that you want to export.
- Alternatively, you can backup all your data from the previous device by copying the folder located in *Settings → OsmAnd Settings → Data storage folder* (default path: `Android/data/net.osmand.plus`). Then, paste the contents of this folder into the Data storage folder on your new device.


## Purchases

### How to Restore Purchases

- **For iOS**. Open OsmAnd and navigate to *Menu → Settings → Troubleshooting →* tap *Restore purchases* and enter your Apple ID. For more details, refer to [this article](../purchases/ios.md#restore-purchases).
- **For Android**. Log in to the same app store account used for purchasing OsmAnd. Search for *OsmAnd+* or *OsmAnd Free* (for restoring *Maps+*, *OsmAnd Live*, or *OsmAnd Pro*) and install the app.
No additional payment is required. If the paid features are not restored, go to your device's *Settings → Apps →* select the app store, clear the cache, restart your device, and try again. For further details, refer to [this article](../purchases/android.md#restore-purchases).


### How to Buy and Restore OsmAnd in the Huawei AppGallery without Huawei Mobile Services

1. **Buy OsmAnd**:
   - First, enable *Install from Unknown Sources* in your device's settings. You can usually find this option in **Settings → Security**.
   - Install the [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), which is essential for app compatibility.
   - Next, open *Huawei AppGallery* on the [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) page and download the app.
   - Only the free version is available for download initially. To make a purchase, go to OsmAnd *Menu → Settings → Purchases* and select the required type.
   - For further details, visit [this page](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restore purchase**:
   - To restore your purchase, log in to *Huawei AppGallery* using the same account associated with your OsmAnd purchase.
   - Check your transaction history in the [Huawei App Gallery order history](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - You may need to update *Huawei AppGallery* and clear the cache to avoid issues.
   - To restore your purchases, follow *Menu → Settings → Purchases → Restore Purchases* in OsmAnd.
   - For more information, see the article [Android Purchases](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).


### How to restore the Topography (formerly Contour lines) plugin purchase

To restore the [Topography plugin](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Log into the same Google Play account used to purchase the Topography plugin, and install [the app](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. If the *Install* button is inactive, ensure that both the Google Play and OsmAnd apps are up to date. Clear their cache, restart your device, and try installing the plugin again.
3. After installation, enable the Topography plugin in the *[OsmAnd menu → Plugins](../plugins/topography.md)*, download the required files in the *[Maps and Resources](../start-with/download-maps.md#maps-and-resources)*, and activate it through the *[Configure map menu](../map/configure-map-menu.md)*.


### How to identify if OsmAnd Unlimited is active

Navigate to *Menu → Download maps* and tap the map counter (the field labeled *Free version. X downloads left*). If OsmAnd Unlimited is active, the display will show the remaining device storage instead of the number of free downloads.


### Can I get the full version of OsmAnd as a separate app for iOS?

For iOS, there is only one version of OsmAnd available. To access the full version, you need to unlock additional functions through in-app purchases.


### What do 5 or 7 free downloads mean?

You are allowed 5 free downloads on iOS or 7 on Android. Each download, whether it's a map, an update (map updates count as downloads), voice packs, or other items, reduces the available count. Please note, that removing items from your downloads does not restore the free download count.


### How can I get additional map downloads in OsmAnd Free?

If you have used all 5 (iOS) or 7 (Android) free downloads, you can receive 3 extra downloads by *subscribing to the mailing list*. A banner with the subscription option will appear once all free downloads have been used.


## Cross-Platform Purchases

**OsmAnd Pro** is a subscription that allows you to purchase OsmAnd on one platform and use **paid features** on other platforms simultaneously. For example, if you purchase it through one of the [Android](../purchases/android.md) stores (Google Play, Amazon, Huawei AppGallery), you can also use it on [iOS](../purchases/ios.md) and [Web](https://www.osmand.net/map).

Please note that other purchases, such as Maps+, cannot be transferred between billing platforms, including between Google Play and Amazon on Android.

**Steps to transfer license**:

**1. Purchase**. After purchasing an OsmAnd Pro subscription, register your email on [OsmAnd Cloud](../personal/osmand-cloud.md#backup-and-restore-for-osmand-pro).

- Navigate to *OsmAnd Menu → Settings → OsmAnd Cloud → Create new account*

:::note
***Registration must be done on the platform where the subscription was purchased.***
:::

**2. Link**. Link your purchase to another device.

- Navigate to *OsmAnd Menu → Settings → OsmAnd Cloud → I already have an account*

**3. Activation**. Finally, activate the paid features.

- Navigate to *OsmAnd Menu → Settings → Purchases → Restore purchases*


## Import Files

### I have a GPX file, how do I import it into OsmAnd?

- **Android**
    - You can [download and open the file](../navigation/setup/gpx-navigation.md) using a file browser or cloud service like Dropbox, and select OsmAnd as the target application.
    - Alternatively, place the file in the OsmAnd home folder: `osmand/tracks/(optional_sub-folder)/your_file.gpx`.

- **iOS**
    - To open [a GPX file in OsmAnd](../navigation/setup/gpx-navigation.md), simply download it and choose OsmAnd as the app to open it. The file will then be available for use within the app.

### Contour lines or hillshades do not show up

Read more about the [Topography plugin](../plugins/topography.md).


## OsmAnd 4.4 (iOS)

OsmAnd 4.4 for iOS devices is not available for iOS versions older than iOS 15.

This means that to install OsmAnd 4.4 you need to upgrade your OS to at least iOS 15 or newer.


<!--
## Storage on an SD card (Android)

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card:

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5

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


## Copy Raster Map Package Created on PC

<Tabs groupId="operating-systems">

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

