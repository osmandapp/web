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
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

How to configure, access and change data storage for maps, tracks and other personal data


## Storage info in Download maps menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

There is toolbar about storage information in [Download maps menu](../personal/maps.md#download-maps-maps). Here you see Device memory and free space in device storage. 

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads"/>

![Storage info Android](@site/static/img/personal/maps/maps_menu_local_vector_android.png)

___________________________

- Favorite backups
- Folder structure (iOS / Android)

</TabItem>

<TabItem value="ios" label="iOS">

There is toolbar about storage information in [Download maps menu](../personal/maps.md#download-maps-maps). Here you see Device memory and free space in device storage. 
For **iOS**, you can estimate how much memory spacing of OsmAnd data is in the device storage (orange color).

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres"/>

![Storage info iOS](@site/static/img/personal/maps/maps_menu_local_vector_ios.png)

___________________________

- Favorite backups
- Folder structure (iOS / Android)

</TabItem>

</Tabs>


## Data storage folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

For Android you can find all information about OsmAnd data and change storage folder in [Global settings](../personal/global-settings.md#data-storage-folder-android).

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>_

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

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd files are visible in the _["Files"](https://apps.apple.com/us/app/files/id1232058109)_ application. You can access all OsmAnd files: [tracks](../personal/tracks.md), [favorites](../personal/favorites.md), [maps](../personal/maps.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md):

_Files → On My Phone → OsmAnd Maps_

![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)

</TabItem>

</Tabs>


## Storage on SD card

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


### In order to move the OsmAnd home (maps) folder to an external SD card:

-   Go to `Settings (on the start screen) --> OsmAnd Settings --> Data
    storage folder`
-   Change the value to a path pointing to the external SD card, on many
    Android systems it may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
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

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>


## Backup & Restore

:::note cross-platform
This is a cross-platform feature (Android <-> iOS OsmAnd versions).
:::

This feature helps to keep and restore your OsmAnd data. There are two variants of backing up in OsmAnd: [OsmAnd Cloud](../personal/storage.md#backup-and-restore-for-osmand-pro) and [Local](../personal/storage.md#local-backup).


### Backup and Restore for OsmAnd Pro

:::tip subscribe
&nbsp;<ProFeature/> You need to subscribe to [OsmAnd Pro](../purchases/android#osmand-pro).  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Allows to keep your OsmAnd data in OsmAnd Cloud and restore your data from OsmAnd Cloud. It's a cross platform feature.

When you subscrebed to [OsmAnd Pro](../purchases/android.md#free-and-paid-features), you need to make registration for _Backup & Restore_ function or enter your registrated e-mail:

*<Translate android="true" ids="shared_string_menu,shared_string_settings,backup_and_restore,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Backup registration Android](@site/static/img/personal/backup/backup_registration_android.png) ![Backup registration Android](@site/static/img/personal/backup/backup_registration_1_android.png)

A one-time password for the next step will be sent to it. 

![Backup registration Android](@site/static/img/personal/backup/backup_registration_2_android.png) ![Backup registration Android](@site/static/img/personal/backup/backup_registration_3_android.png)

Afer registration your _<Translate android="true" ids="backup_and_restore"/>_ menu has two screens: _<Translate android="true" ids="shared_string_status"/>_ and _<Translate android="true" ids="shared_string_settings"/>_


#### <Translate android="true" ids="shared_string_status"/>

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

Here you can start to make a backup and restore data online and local:
- "_<Translate android="true" ids="backup_now"/>_" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_1_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_2_android.png)

- "_<Translate android="true" ids="backup_restore_data"/>_" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_3_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_4_android.png)

- "_<Translate android="true" ids="local_backup"/>_" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).


#### <Translate android="true" ids="shared_string_settings"/>

At this screen you can set your login and backup data.

![Backup settings screen Android](@site/static/img/personal/backup/backup_settings_screen_android.png)

- _<Translate android="true" ids="backup_data"/>_ - select data and folders to back up.

![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_android.png)

- _<Translate android="true" ids="backup_version_history"/>_ - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.
  
![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_1_android.png)

- _<Translate android="true" ids="login_account"/>_ - allows to log out from your account.
  
- _<Translate android="true" ids="backup_danger_zone"/>_:
  
  - "_<Translate android="true" ids="backup_delete_all_data"/>_" button - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

  - "_<Translate android="true" ids="backup_delete_old_data"/>_" button - Current versions of your data will be preserved on OsmAnd Cloud.

</TabItem>

<TabItem value="ios" label="iOS">  

Allows to keep your OsmAnd data in OsmAnd Cloud and restore your data from OsmAnd Cloud. It's a cross platform feature.

When you subscrebed to [OsmAnd Pro](../purchases/ios.md#free-and-paid-features), you need to make registration for _Backup & Restore_ function or enter your registrated e-mail:

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,shared_string_settings,backup_and_restore,register_opr_create_new_account"/> / <Translate ios="true" ids="cloud_existing_account"/> / <Translate ios="true" ids="purchase_get"/>_

You need to enter the e-mail address you registered with.

![Backup registration iOS](@site/static/img/personal/backup/backup_registration_ios.png) ![Backup registration iOS](@site/static/img/personal/backup/backup_registration_1_ios.png)

A one-time password for the next step will be sent to it. 

![Backup registration iOS](@site/static/img/personal/backup/backup_registration_2_ios.png) ![Backup registration iOS](@site/static/img/personal/backup/backup_registration_3_ios.png)

Afer registration your _<Translate ios="true" ids="backup_and_restore"/>_ menu has _Backup_ section and _"<Translate ios="true" ids="shared_string_settings"/>"_ button ⚙️.


#### <Translate ios="true" ids="shared_string_status"/>

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

Here you can start to make a backup and restore data online and local:
- "_<Translate android="true" ids="backup_now"/>_" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_1_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_2_android.png)

- "_<Translate android="true" ids="backup_restore_data"/>_" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_3_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_4_android.png)

- "_<Translate android="true" ids="local_backup"/>_" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).


#### Settings

Click on the _"<Translate ios="true" ids="shared_string_settings"/>"_ button ⚙️ on the screen top.

At this screen you can set your login and backup data.

![Backup settings screen ios](@site/static/img/personal/backup/backup_settings_screen_ios.png)

- _<Translate ios="true" ids="osmand_cloud"/>_ - opens the screen where you can select data and folders to back up by clicklig on _<Translate ios="true" ids="backup_data"/>_. Here there is info about using memory by clicking _<Translate ios="true" ids="manage_storage"/>_.

![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_ios.png) ![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_1_ios.png)

- _<Translate android="true" ids="backup_version_history"/>_ - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.
  
![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_1_android.png)

- _<Translate android="true" ids="login_account"/>_ - allows to log out from your account.
  
- _<Translate android="true" ids="backup_danger_zone"/>_:
  
  - "_<Translate android="true" ids="backup_delete_all_data"/>_" button - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

  - "_<Translate android="true" ids="backup_delete_old_data"/>_" button - Current versions of your data will be preserved on OsmAnd Cloud.

</TabItem>

</Tabs>


### Local backup

Back up or restore data (it has restrictions for unpaid users. you can't back up and restore Favorites, map markers..) from a local file:

1. *<Translate android="true" ids="backup_into_file"/>* - creating and saving OSF-file in your device.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Backup local Android](@site/static/img/personal/backup/backup_local_android.png) ![Backup local Android](@site/static/img/personal/backup/backup_local_1_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,shared_string_settings,local_backup,backup_into_file"/>*  

![Backup local iOS](@site/static/img/personal/backup/backup_local_ios.png) ![Backup local iOS](@site/static/img/personal/backup/backup_local_1_ios.png)

</TabItem>

</Tabs>

2. *<Translate android="true" ids="restore_from_file"/>* - opening and restoring OSF-file (you backup).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,backup_and_restore,local_backup,restore_from_file"/>*  

![Backup local Android](@site/static/img/personal/backup/backup_local_2_android.png) ![Backup local Android](@site/static/img/personal/backup/backup_local_3_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,shared_string_settings,backup_and_restore,local_backup,restore_from_file"/>*

![Backup local iOS](@site/static/img/personal/backup/backup_local_2_ios.png) ![Backup local iOS](@site/static/img/personal/backup/backup_local_3_ios.png)  

</TabItem>

</Tabs>


## Copy raster map package created on PC 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Map package can be saved in two formats: [SQ Lite and Metainfo](https://osmand.net/docs/user/map/raster-maps).
Next, you need to move your map package file(s) to OsmAnd-tiles directory:

For **Android** OsmAnd - you need to access storage to copy file(s) from PC to the device folder BASE_OSMAND_STORAGE/tiles_ or you can click the file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

![Import sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Map package can be saved in two formats: [SQ Lite and Metainfo](https://osmand.net/docs/user/map/raster-maps).
Next, you need to move your map package file(s) to OsmAnd-tiles directory:

For **iOS** OsmAnd - you need to click the file on your iTunes or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

![Import sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>
