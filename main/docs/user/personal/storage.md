---
sidebar_position: 9
title:  Storage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

How to configure, access and change data storage for maps, tracks and other personal data

## Storage info in Download maps menu

There is toolbar about storage information in [Download maps menu](../personal/maps.md#download-maps-maps). Here you see Device memory and free space in device storage. 
For **iOS**, you can estimate how much memory spacing of OsmAnd data is in the device storage (orange color).

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres"/>

<p> </p>

![Storage info Android](@site/static/img/personal/maps/maps_menu_local_vector_android.png) ![Storage info iOS](@site/static/img/personal/maps/maps_menu_local_vector_ios.png)

___________________________

- Favorite backups
- Folder structure (iOS / Android)


## Data storage folder (Android)

For Android you can find all information about OsmAnd data and change storage folder in [Global settings](../personal/global-settings.md#data-storage-folder-android).

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>

<p> </p>

![Profiles Storage Settings Android](@site/static/img/personal/profiles/general_settings_storage_android.png) ![Profiles Storage Settings 1 Android](@site/static/img/personal/profiles/general_settings_storage_1_android.png)

**<Translate android="true" ids="shared_string_osmand_usage"/>**:

Here you can find all information about data size for each categories of data: maps, travel guides, hillshade / slope / contour lines, tracks, audio / video notes, tiles, other.

**<Translate android="true" ids="change_data_storage_folder"/>**

Here you can change forlder for keeping your OsmAnd data in your device

Memory name | Permission access
|-----------|------------------|
| Internal app memory | Only OsmAnd app has access to its data and none of external apps / pc has access| 
| Shared memory | Multiple OsmAnd apps could have access and multiple external apps |
| External storage 1 | Only 1 OsmAnd app has access and Admin apps and USB |
| External storage N | SDCard: Only 1 OsmAnd app has access and Admin apps and USB |
| Multiuser storage | Only 1 OsmAnd app has access but it's shared between multiple Android users |
| Manually specified | Depends on the path |


## Storage on SD card (Android)

### In order to move the OsmAnd home (maps) folder to an external SD card:

-   &nbsp;Go to `Settings (on the start screen) --> OsmAnd Settings --> Data
    storage folder`
-   &nbsp;Change the value to a path pointing to the external SD card, on many
    Android systems it may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   &nbsp;You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device, or via
    connecting the device to a computer as external storage and performing the move from there.

### How do I use my SD card with OsmAnd under Android 4.4+ and 5?

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed prior to updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   &nbsp;Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   &nbsp;Move OsmAnd's data folder osmand into its standard SD folder, \
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


## Backup & Restore (Android)

### Backup and Restore for OsmAnd Pro

You need to subscribe to [OsmAnd Pro](../purchases/android.md#free-and-paid-features).

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,backup_and_restore"/>

<p> </p>

Two screens:

**<Translate android="true" ids="shared_string_status"/>**

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

- &nbsp;"Backup now" button - make a backup of your data. Info: time of last backup and wich data added after that on your device.

- &nbsp;"Restore" button - restore data on your device, using online backups.

- &nbsp;"Local backup" - read [here](../personal/storage.md#local-backup).

**<Translate android="true" ids="shared_string_settings"/>**

![Backup settings screen Android](@site/static/img/personal/backup/backup_settings_screen_android.png)

- &nbsp;Back up data - select data and folders to back up.

![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_android.png)

- &nbsp;<Translate android="true" ids="backup_version_history"/>

<Translate android="true" ids="backup_storage_taken"/>

- &nbsp;<Translate android="true" ids="login_account"/>

- &nbsp;<Translate android="true" ids="backup_danger_zone"/>

&nbsp;<Translate android="true" ids="backup_delete_all_data"/> - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

&nbsp;<Translate android="true" ids="backup_delete_old_data"/> - Current versions of your data will be preserved on OsmAnd Cloud.


### Local backup

Back up or restore data (it has restrictions for unpaid users. you can't back up and restore Favorites, map markers..) from a local file:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,backup_and_restore,local_backup"/>

<p> </p>

- &nbsp;<Translate android="true" ids="backup_into_file"/> - creating and saving OSF-file in your device.

![Backup local Android](@site/static/img/personal/backup/backup_local_android.png) ![Backup local Android](@site/static/img/personal/backup/backup_local_1_android.png)

![Backup local Android](@site/static/img/personal/backup/backup_local_2_android.png) ![Backup local Android](@site/static/img/personal/backup/backup_local_3_android.png)

- &nbsp;<Translate android="true" ids="restore_from_file"/> - opening and restoring OSF-file (you backup).


## Copy raster map package created on PC 

Map package can be saved in two formats: [SQ Lite and Metainfo](../map/raster-maps.md#sqlite-vs-metainfo-sources).
Next, you need to move your map package file(s) to OsmAnd-tiles directory:

For **Android** OsmAnd - you need to access storage to copy file(s) from PC to the device folder BASE_OSMAND_STORAGE/tiles_ or you can click the file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

For **iOS** OsmAnd - you need to click the file on your iTunes or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)

