---
sidebar_position: 7
title:  Global settings
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


## Overview

**Global settings** are general [settings](../personal/profiles.md) for all profiles in the OsmAnd application. These are the basic settings for the OsmAnd system and all changes made will affect the entire application.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_andr_1.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_ios.png)

</TabItem>

</Tabs>


## General

This section contains the basic settings of OsmAnd, such as selecting a profile when the application loads, language selection and the folder in which the data will be saved.


### Default profile

OsmAnd uses the default profile, *Browse map*, as the first profile for new users and also if this profile has been selected by the user to be used each time the application is restarted. You can choose any profile, Last used and Browse map too, from the list as default.  

- **<Translate android="true" ids="shared_string_last_used"/>** - selects the profile that was last used.

- **<Translate android="true" ids="settings_preset"/>** - You select the profile that will be used when starting OsmAnd. Can be changed in the application [settings](../personal/profiles.md).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>


### CarPlay profile

This profile is only available for iOS. It uses your car's audio and video systems to display its data on your phone. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

:::note
This settings is not available for Android
:::

To read about the capabilities of Android Auto within the OsmAnd application, see the corresponding [article](../navigation/auto-car.md) in the Navigation section.  

</TabItem>

<TabItem value="ios" label="iOS">  

**<Translate ios="true" ids="carplay_profile"/>** - this profile will be used while it is connected to [CarPlay](https://support.apple.com/en-gb/HT205634).

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)

</TabItem>

</Tabs> 


### Display language

Display language option is used to change the language of the entire app, including pop-up prompts, internal text, messages, etc. Up to Android 12, OsmAnd allows you to customize the display language according to your preferences directly within the app. Starting from Android 13 and for iOS devices, display language can be only changed in the system settings (see how to change per-app language preferences in [Android](https://developer.android.com/guide/topics/resources/app-languages) and [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,preferred_locale"/>*

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings"/> → OsmAnd maps → Language*

![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note
On some Android devices (Xiaomi with Muiu 14), there is no way to set app languages individually in the system settings, so the language of OsmAnd can only be changed together with the language of the whole system. You may consider referring to the [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) for additional information.
:::


### Data storage folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

| |
| -- | --|
|![Data storage folder](@site/static/img/personal/profiles/global_sett_andr_1.png) | ![Profiles Android](@site/static/img/personal/profiles/general_settings_storage_andr.png) |

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

For the iOS system, we can not do any manipulation of the storage folder. We can only find out how much memory OsmAnd uses.  

*iOS device → Settings → General → iPhone storage → OsmAnd Maps*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

OsmAnd files are visible in the "Files" application. To access all tracks, custom routing and rendering files, follow this path:   
*Files → On My Phone → OsmAnd Maps*

*Files → On My Phone → OsmAnd Maps*

![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  

OsmAnd files are visible in the _["Files"](https://apps.apple.com/us/app/files/id1232058109)_ application. You can access all OsmAnd files: [tracks](../personal/tracks.md), [favorites](../personal/favorites.md), [maps](../personal/maps.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md)


![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Map rendering engine

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>*

![General Settings engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

In the **Android** version of the app, you can switch between map rendering Version 1, originally implemented in the OsmAnd app, and Version 2, which uses the OpenGL (Open Graphics Library) programming interface for rendering two- and three-dimensional graphical objects.
The **iOS** version uses only OpenGL for map rendering.


| Features | Version 1 | Version 2 (OpenGl) |
|:---|:--- |:--- |
| Cross-platform | Not used in iOS version. | Fits both versions. |
| GPU / CPU dependent | Recommended for low-performance or outdated devices. | Powerful rendering engine. <br /> Only available for OsmAnd 4.3 and later versions, and in test mode for OsmAnd 4.2. |
| 3D mode | It is possible to view the map in 2D, and you can change the viewing angle to get a [3D view](../widgets/map-buttons.md#3d-mode). | You can view the map in 2D and [3D](../widgets/map-buttons.md#3d-mode). |
| Map display | The whole map is rendered as a set of tiles, and markers, lines and text are already inside these tiles. | First, the entire tile pack is rendered, and then the available symbols are applied to the map, [layer by layer](../../technical/algorithms/map-rendering-layers.md). |
| Transparent symbols overlay / underlay | Supports all settings. | Does not support raster layer on top of vector text. |
| [Online map](../plugins/online-map.md) | It does not support the display of Сontour lines if the map source is any online tile map. | When the map source is an online map, 3D maps are also used, and the display of Сontour lines on the map is supported. |
| [Weather plugin](../plugins/weather.md) | You cannot use this plugin. | Convenient to use with the plugin. |  

The image for the 3D view of the map is loaded tile by tile, then all the symbols. The rendering speed of the map depends on the number of 2D and 3D graphical objects on it, and directly on the performance of your hardware.  Therefore, Version 2 (OpenGL) cannot be used on low-performance devices.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table> 


## Privacy and security

OsmAnd allows you to choose whether or not to *[share your activity](#analytics)* in the app, the ability to edit your *[history](#history)* and use the *[proxy](#proxy)* (Android only) of your choice.  

:::note
For more information see [OsmAnd privacy and security policy](https://osmand.net/help-online/privacy-policy).
:::

### Analytics

*<Translate android="true" ids="analytics_pref_title"/>* (Android) or *<Translate ios="true" ids="send_anonymous_data"/>* (iOS) - this setting allows you the choice whether or not to provide anonymous data about *Downloaded Maps* and *Visited Screens* (Android).  

:::info
Data about your location or the places you view on the map is not collected.
:::

<!-- This data allows OsmAnd to better understand...
-->

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Collected data Android](@site/static/img/personal/profiles/general_settings_collected_data_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings Collected data ios](@site/static/img/personal/profiles/general_settings_collected_data_ios.png)

</TabItem>

</Tabs>

#### Identifiers

<InfoAndroidOnly />

A UUID (Unique User Identifier) is generated for each installation of the OsmAnd application and sent to the servers during map loading. A random UUID is used to download offline maps from OsmAnd servers to control rational use of server resources, predict traffic usage, and provide general monthly reports on map downloads. The UUID changes every 3 months.  

Starting with OsmAnd version 4.3, you can disable the collection of user data when using the OsmAnd app. Then the UUID will not be sent with any download request.  

You can read more information in the [Terms of use (ToS)](../../legal/terms-of-use.md).  

*Menu → Settings → OsmAnd settings → Privacy and security → Identifiers*

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)

<!--Starting with OsmAnd 4.3 it's possible to disable UUID (Unique User Identifier) as the result the traffic could be deprioritized when lots of maps are downloaded i.e. in the beginning of the month. UUID is rotated every 3 months so there is no user profile built for a longer history.-->

### History

The application records the history of previously entered data (history) in the following categories: [Search](../search/search-history.md), [Navigation](../navigation/setup/route-navigation.md#previous-route--history), [Map markers](../personal/markers.md#history). Using the switch on the appropriate tab (*Search history, Navigation history, Map markers history*), you can enable/disable logging for this category of entries. You can also [manage](#history-options) (view, delete, and share) previously recorded data.  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>

- ***Backup as file*** (*Android*) or ***Export*** (*iOS*) - is used to make [a backup file](../personal/import-export.md#export) of your Search / Navigation / Map markers history.
- ***Clear all history*** (*Android*) or ***Delete all history*** (*iOS*) - is used to delete all history entries recorded untill now.  

#### History options

You can delete one or more items from the history list or share them as a file (to access these functions *in iOS*, tap ***Edit*** button).  
To delete or export multiple records at once, mark checkboxes in front of the desired records and then tap **Export** or **Delete** buttons.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

### Proxy

<InfoAndroidOnly />

*<Translate android="true" ids="proxy_pref_title"/>* - this setting allows you to configure a [HTTP proxy](https://www.wikiwand.com/en/Proxy_server) for all network requests. You can set the Proxy Host and Proxy Port.  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)  

## Other

In this section of the OsmAnd settings, you can configure the notifications you receive, the location service, and how your application settings are saved.

### Dialogs and notifications

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="dialogs_and_notifications_title"/>* - this setting allows you to turn on/off pop-ups, dialogs and notifications. This is the Start-up message and the [Download map dialog](../start-with/download-maps.md#download---own-map-advanced) (for example, a promotion, a quiz, an event, etc.).

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="do_not_show_discount"/>* - this setting allows you to turn on/off pop-ups, dialogs and notifications. This is the Start-up message and the [Download map dialog](../start-with/download-maps.md#download---own-map-advanced) (for example, a promotion, a quiz, an event, etc.).

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_ios.png)

</TabItem>

</Tabs>


### Location source

OsmAnd provides you with a choice of services to determine your location. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can choose which Google Play or "Android API" services OsmAnd will use to determine your location. This can be useful for devices without Google Play services or in case of inaccurate location or altitude data when recording tracks.  
OsmAnd receives data from the resources *Google Fused Location Providers* and *Android GPS and Network Providers*.  
You can switch **<Translate android="true" id="location_source" />** in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

The iOS system uses the iOS API to determine location.  
All settings for OsmAnd Location can be found in iOS Settings: *Settings → OsmAnd maps → Location*  

Privacy of Location services: *Settings → Privacy → Location Services*

</TabItem>

</Tabs>


### Auto-backup

<InfoAndroidOnly />

Android or OsmAnd Cloud can save your data and app settings.   

By default, the Android system backs up your OsmAnd settings and [Favorites](../personal/favorites.md) map markers so you can restore them on new devices or after reinstalling. The size of this backup is limited to 25MB.  
**If you are using [OsmAnd Cloud](../personal/osmand-cloud.md), it is best to disable this feature to avoid misunderstandings after reinstallation.**  

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_andr.png)


## Legal

OsmAnd can warn you about speed cameras, but only if the laws in your country permit it.


### Uninstall speed camera

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

This setting allow you to activate or deactivate the speed cameras' POI. You will need to restart the OsmAnd application to apply the changes.   
  
In some countries or regions, using speed camera warning applications is illegal. You must make a choice depending on the laws in your country. Select *Keep active*, and you will receive speed camera alerts and notifications. Select *Uninstall* and all data related to speed cameras, such as warnings, notifications, and POIs, will be deleted until you completely reinstall OsmAnd.  
 
Read about alerts for speed cameras on your route in the article Navigation widgets in the *[Alert widget](../widgets/nav-widgets.md#alert-widget)* section.


### Build own Map (advanced)

![Build your own Map](@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png)

It is possible to upload a self-created map.
[OsmAndMapCreator]((../../technical/map-creation/create-offline-maps-yourself.md)) can be used to create any maps supported by OsmAnd. To create a vector map you will need an OSM file (*.pbf, *.osm.gz, *.osm.bz2) and to create an online sqlite map you will need the url of the base tile.  

It is possible to upload a self-created map. [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md). More info section *My data* article [Maps](../personal/maps.md#build-your-own-map-advanced)


### Local Resources

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Local tab menu iOS](@site/static/img/settings/Local_tab_ios_1.png)

</TabItem>

</Tabs> 

The Local tab *(<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>)*  shows how much space OsmAnd takes up, in the form of a line chart and a list with a breakdown of each data type. All data is grouped into three sections, sorted by the largest section at the top. The data categories within the sections are also arranged according to the space available.
The colors and size of the chart fragments correspond to the corresponding partition and the amount of memory used.

- ***Resources*** (*blue*). [Standard Maps](../map/vector-maps.md), [Wikipedia](../plugins/wikipedia.md) and [Travel maps](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Terrain maps](../plugins/contour-lines.md), [Live updates](../personal/maps.md#osmand-live), [Weather maps](../plugins/weather.md),  [Map sources](../map/raster-maps.md), [Rendering styles](../map/vector-maps.md#default-map-styles), Map fonts, Voice prompts (recorded and TTS), Cache.  
- ***My Places*** (*yellow*). [Favorites](../personal/favorites.md), [Tracks](../personal/tracks.md), [OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), [OSM Edits](../plugins/osm-editing.md#osm-editing-layer), [A/V Notes](../plugins/audio-video-notes.md), [Map markers](../personal/markers.md), [History](../personal/global-settings.md#history), Itinerary.
- ***Settings*** (*green*). [Profiles](../personal/profiles.md), Other.


#### Data type overview and toolbar 

If you select a category on the Local tab and tap it, a graph appears showing how much space the selected category occupies in the total space of the partition.

![Local category overview Android 1](@site/static/img/settings/local_category_sorting_options_andr_1.png) ![Local category options Android 2](@site/static/img/settings/local_category_sorting_options_andr_2.png)  

Above the graph is a toolbar with the options available for that data type. In most cases (except for standard graphs), only two options are available.

- **Search** (*magnifying glass*). Allows you to search for specific data by name only in the selected folder.
- **Three dots menu** (*Android only*)
 
After tapping on the three dots in the right corner of the toolbar, you can access additional actions (*Android only*):
- **Select**. Allows you to select items and perform further actions only on them.
- **Import**. Redirects to internal storage where you can select a file to import.

You can also perform some actions on list items using the three-dot menu located in the right corner of each entry.  

![Local category item actions 2](@site/static/img/settings/local_category_actions_2.png) ![Local category item actions](@site/static/img/settings/local_category_actions.png)  

For most data categories, only the *Information* option is available. If you click this option, you will be redirected to the *[Local data item overview](#local-data-item-overview)* screen. Additional actions are available for maps.

- **Deactivate**/**Activate**. Hides/shows the map for traversal/use in settlements.
- **Update**. Loads the latest version of the map. 
- **Rename**. The name of the card can be changed to make it more recognizable.
- **Remove**. Deleting a card from the device memory.

#### Local data item overview 

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

The Local Data item overview screen provides information about:
- **Data type**
- **Size** 
- **Creation date of a single entry stored by OsmAnd**
- **Delete**

#### Standard maps additional option

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

For *Standard maps*, there is an additional option to sort them.
- **Map name** (ascending or descending) - is useful if you want to find a specific map quickly.  
- **Country name** - allows arranging your maps geographically.
- **Newest or oldest date of modification** - this option may be useful if you would like to see recently updated maps or if you're looking for older versions.
- **Large or small size** - may help to identify large maps if you are concerned about storage space.

