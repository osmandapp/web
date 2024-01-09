---
sidebar_position: 8
title:  Import / Export
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

## Overview

The **Import / Export** function in OsmAnd allows you to manage your data. You can export your profiles, favorites, tracks, and other settings into a special format accessible through the apps on your device. This process makes it easy to save and transfer data between devices and allows sharing it with other users.  

***Note that if the size of your selected data is large, it will take some time for the application to prepare the OSF file.***


##  Export / Import data

The *Import / Export* feature allows you to save data from generated **OSF files** or use [online sources](../map/raster-maps.md), making it possible to restore information after reinstallation.

#### OsmAnd Cloud

[OsmAnd Cloud](../personal/osmand-cloud.md) is the alternative resource you need to save your personal settings and app data. You can use this data on any device available to install the OsmAnd app or when using the desktop app. Any changes you make can be synchronized.

### Export

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_android.png) ![Backup local Android](@site/static/img/personal/backup/backup_local_1_android.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*     

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_ios.png)

</TabItem>

</Tabs> 

All the data you have configured and created can be exported using the **Export menu**. The menu consists of three groups: *Settings*, *My Places*, and *Resources*, which contain all available file folders. In each folder, you can select the files you want to export, one at a time or all at once. *All exported files are saved in OSF format*.  

- **Settings**: *Profiles*, *OsmAnd Settings*, *Quick action*, *POI Type*, *Avoid road*
- **My Places**: *Favorites*, *Tracks*, *OSM notes*, *OSM edits*, *A/V notes*, *Map markers*, *Markers history*, *Search history*, *Navigation history*, *Itinerary*.
- **Resources**: *Rendering style*, *Routing*, *Online routing engines*, *Map sources*, *Maps*, *Voice prompts (TTS)*, *Voice prompts (recorded)*, *Favorites backup*.


### Import

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) | 

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,shared_string_import"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) | 

</TabItem>

</Tabs> 

Opens and restores OSF files. Tap an OSF file in the file manager on your device or use the action button. 
- *Some items already exist*. You can use this feature to save both files or replace all of them.
- *Restart*. After importing the files, the application must be restarted.

## Data storage folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiles Android](@site/static/img/personal/profiles/general_settings_storage_andr.png)

For Android you can find all information about OsmAnd data and change storage folder in [Global settings](../personal/global-settings.md#data-storage-folder-android).

**<Translate android="true" ids="change_data_storage_folder"/>**

Here you can change the folder for saving OsmAnd data on your device.

- **Internal app memory**. Only OsmAnd app has access to its data and none of external apps. 
- *Shared memory*. No longer available.
- **External storage 1**. Only 1 OsmAnd app has access and Admin apps and USB.
- **External storage N**. SDCard: Only 1 OsmAnd app has access and Admin apps and USB.
- **Multiuser storage**. Only 1 OsmAnd app has access but it's shared between multiple Android users.
- **Manually specified**. Depends on the path.

</TabItem>

<TabItem value="ios" label="iOS">

*Files → On My Phone → OsmAnd Maps*

![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  

OsmAnd files are visible in the _["Files"](https://apps.apple.com/us/app/files/id1232058109)_ application. You can access all OsmAnd files: [tracks](../personal/tracks.md), [favorites](../personal/favorites.md), [maps](../personal/maps.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md)

</TabItem>

</Tabs>


## OsmAnd reinstall 

In the Android version of OsmAnd, if you completely uninstall the app or select *Clear Data* in the Manager settings, the data folder will also be deleted. If you do not take precautions, this will result in the **loss of all downloaded maps for OsmAnd data, as well as all saved Favorites, GPX tracks, and other data.**   

- You can back up your data using OsmAnd features such as [OsmAnd start](../personal/osmand-cloud.md#osmand-start) as a free version or [OsmAnd Pro](../purchases/index.md) as a paid subscription with more features.
-  You can **rename the folder with your OsmAnd application data**, for example from *net.osmand.plus* to *net.osmand.plus0*.
    -  Reinstall or uninstall the OsmAnd app using the available method on your device.
    -  To return the data, rename the folder to its original name.
    -  Restart OsmAnd.
-  Go to Download Maps, Local tab, tap on the update icon.
