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


## Overview

The **Import** and **Export** tools in OsmAnd allow you to manage your data. You can move your profiles, favorites, tracks and other settings using a special format through the apps on your device. This process simplifies saving and transferring data between devices and allows you to share it with other OsmAnd users.

:::note Large size
*If the size of your selected data is significant, it will take some time for the application to prepare the OSF file.*
:::


## Export / Import data

The *Import* and *Export* allows you to save data from generated **OSF files** or use [online sources](../map/raster-maps.md), making it possible to restore information after reinstallation.

**Data types** available for import/export:

- **Settings:**  
        [*Profiles*](../personal/profiles.md#actions), &nbsp;[*OsmAnd/General Settings*](../personal/global-settings.md), &nbsp;[*Colors*](../personal/color-palette-schemes.md), &nbsp;[*Quick action*](../widgets/quick-action.md), &nbsp;[*POI Type*](../map/point-layers-on-map.md#poi-types), &nbsp;[*Avoid road*](../map/map-context-menu.md#avoid-road).
- **My Places:**  
        [*Favorites*](../personal/favorites.md#export--import), &nbsp;[*Tracks*](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[*OSM notes*, *OSM edits*](../plugins/osm-editing.md#create--modify-poi), &nbsp;[*A/V notes*](../plugins/audio-video-notes.md), &nbsp;[*Map markers*](../personal/markers.md), &nbsp;[*Markers history*, *Search history*, *Navigation history*](../personal/global-settings.md#history), &nbsp;*Itinerary*.
- **Resources:**  
        [*Rendering style*](../map/vector-maps.md#custom-map-style), &nbsp;[*Routing*](../navigation/routing/osmand-routing.md), &nbsp;[*Online routing engines*](../navigation/routing/online-routing.md), &nbsp;[*Map sources*, *Standart/Offline Maps*](../map/raster-maps.md), &nbsp;[*Wikipedia and Travel maps*](../plan-route/travel-guides.md), &nbsp;[*Nautical maps*](../plugins/nautical-charts.md), &nbsp;[*Road maps*](../map/vector-maps.md#road-style), &nbsp;[*Topography maps*](../plugins/topography.md), &nbsp;[*Voice prompts (TTS)*](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [*Voice prompts (recorded)*](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[*Favorites backup*](../personal/favorites.md#automatic-favorites-backup).


### Export

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

All the data you have configured and created can be exported using the ***Export menu***. The menu consists of three groups: **Settings**, **My Places**, and **Resources**, which contain all available file folders. In each folder, you can select the files you want to export, one at a time or all at once. **All exported files are saved in OSF format**.  


### Import

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Opens and restores *OSF* files. Tap an *OSF* file in the file manager on your device or use the action button.

- *Some items already exist*. You can use this feature to save both files or replace all of them.
- *Restart*. After importing the files, the application must be restarted.


### OsmAnd Cloud

[OsmAnd Cloud](../personal/osmand-cloud.md) is the alternative resource you need to save your personal settings and app data. You can use this data on any device available to install the OsmAnd app or when using the desktop app. Any changes you make can be synchronized.


## Preventing Data Loss

In the Android and iOS versions of OsmAnd, if you completely **uninstall** the app or select **Clear Data** on your device in the Settings menu Application information, the data folder will also be deleted from the device's file manager. If you do not take precautions, this will result in the **loss of all downloaded maps for OsmAnd data, as well as all saved Favorites, GPX tracks, and other data.**

There are two ways to save your data before reinstalling the OsmAnd app:

- Use [*OsmAnd Cloud*](#osmand-cloud). You can back up your data using OsmAnd features such as [*OsmAnd Start*](../personal/osmand-cloud.md#osmand-start), as a free version, or [*OsmAnd Pro*](../purchases/index.md), a paid subscription with more features.
- [Export *OSF* file](#export) with your data. Copy the *OSF* file to a folder on your device or OsmAnd Cloud. After reinstalling OsmAnd, [import this *OSF* file](#import) to the OsmAnd app.


## Related Articles

- [Profiles (Settings)](./profiles.md)
- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in July 2024*
