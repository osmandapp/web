---
sidebar_position: 10
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


## Overview {#overview}

The **Import** and **Export** tools in OsmAnd allow you to manage your data. You can move your profiles, favorites, tracks, and other settings using a special format through the apps on your device. This process simplifies saving and transferring data between devices and allows you to share it with other OsmAnd users.

:::note Large size
*If the size of your selected data is significant, it will take time for the application to prepare the `.osf` file.*
:::


## Export / Import data {#export--import-data}

The *Import* and *Export* allow you to save data from generated `.osf` **files** or use [online sources](../map/raster-maps.md), making it possible to restore information after reinstallation.

**Data types** available for import/export:

- **Settings:**  
        [Profiles](../personal/profiles.md#actions), &nbsp;[OsmAnd/General Settings](../personal/global-settings.md), &nbsp;[Colors](../personal/color-palette-schemes.md), &nbsp;[Quick action](../widgets/quick-action.md), &nbsp;[POI Type](../map/point-layers-on-map.md#poi-types), &nbsp;[Avoid road](../map/map-context-menu.md#avoid-road).
- **My Places:**  
        [Favorites](../personal/favorites.md#export--import), &nbsp;[Tracks](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[OSM notes*, *OSM edits](../plugins/osm-editing.md#create--modify-poi), &nbsp;[A/V notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[Markers history*, *Search history*, *Navigation history](../personal/global-settings.md#history), &nbsp;*Itinerary*.
- **Resources:**  
        [Rendering style](../map/vector-maps.md#custom-map-style), &nbsp;[Routing](../navigation/routing/osmand-routing.md), &nbsp;[Online routing engines](../navigation/routing/online-routing.md), &nbsp;[Map sources*, *Standard/Offline Maps](../map/raster-maps.md), &nbsp;[Wikipedia and Travel maps](../plan-route/travel-guides.md), &nbsp;[Nautical maps](../plugins/nautical-charts.md), &nbsp;[Road maps](../map/vector-maps.md#road-style), &nbsp;[Topography maps](../plugins/topography.md), &nbsp;[Voice prompts (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Voice prompts (recorded)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Favorites backup](../personal/favorites.md#automatic-favorites-backup).


### Export {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

All the data you have configured and created can be exported using the ***Export menu***. The menu consists of three groups: **Settings**, **My Places**, and **Resources**, which contain all available file folders. For example, in the Resources section, maps are grouped by type into *<Translate android="true" ids="standard_maps"/>, <Translate android="true" ids="wikipedia_and_travel_maps"/>, <Translate android="true" ids="nautical_maps"/>*, and *<Translate android="true" ids="topography_maps"/>* for easier navigation and selective export. You can select the files you want to export in each folder, one at a time or all at once. **All exported files are saved in `.osf` format**.  


### Import {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

Opens and restores `.osf` files. Tap the file in the device's file manager or use the action button.

- *Some items already exist*. You can use this feature to save both files or replace all of them.
- *Restart*. After importing the files, the application must be restarted.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) is the alternative resource you need to save your personal settings and app data. You can use this data on any device available to install the OsmAnd app or when using the desktop app. Any changes you make can be synchronized.


## Preventing Data Loss {#preventing-data-loss}

In the *Android* and *iOS* versions of OsmAnd, if you completely **uninstall** the app or select **Clear Data** on your device in the Settings menu Application information, the data folder will also be deleted from the device's file manager. If you do not take precautions, this will result in **losing all downloaded maps for OsmAnd data, all saved Favorites, GPX tracks, Voice prompts (TTS), and [other data](#export--import-data).**

There are two ways to save your data before reinstalling the OsmAnd app:

- Use [OsmAnd Cloud](#osmand-cloud). You can back up your data using OsmAnd features such as [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), as a free version, or [OsmAnd Pro](../purchases/index.md), a paid subscription with more features.
- [Export OSF file](#export) with your data. Copy the `.osf` file to a folder on your device or OsmAnd Cloud. After reinstalling OsmAnd, [import this `.osf` file](#import) to the OsmAnd app.


## Related Articles {#related-articles}

- [Profiles (Settings)](./profiles.md)
- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

### Common Issues and Solutions {#common-issues-and-solutions}

1. How to transfer Favorites and Tracks to a new device. [(check)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. I have a GPX file, how do I import it into OsmAnd? [(check)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Deleting map data after the app update (if “Multiuser Storage 1” is selected). [(check)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)


