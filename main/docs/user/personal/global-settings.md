---
sidebar_position: 3
title:  Global Settings
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



## Overview

**Global settings** are general [settings](../personal/profiles.md) for all profiles in the OsmAnd application. These are the basic settings for the OsmAnd system, and any changes made will affect the entire application.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## General

This section contains the basic OsmAnd settings, such as selecting a [profile](#default-profile) when loading the application, selecting the [rendering engine](#map-rendering-engine) and the [folder](#data-storage-folder) where the data will be saved.  


### Default Profile

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd uses the default profile, *Browse map*, as the first profile for new users, and if this profile has been selected by you, it will be used each time the application is restarted. You can select any profile from the default list, including *Last used* and *Browse map*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Allows you to select the profile that was used last.
- **<Translate android="true" ids="settings_preset"/>**. You select the profile to be used when starting OsmAnd. It can be changed in the application [settings](../personal/profiles.md).  


### CarPlay Profile

:::caution iOS ONLY
This feature is available for the iOS version of the OsmAnd app.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

The [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) is used when connected to your vehicle's [CarPlay software](https://support.apple.com/en-gb/HT205634) and helps you make the most of the optimized version of the OsmAnd app using the audio and video systems to display data on your phone.


### Data Storage Folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiles Storage Settings Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Device memory** shows how much free space is left on your device. Tap a field to access the [*Maps and Resources*](../personal/maps-resources.md#maps-and-resources) menu, where you can view and manage detailed information about your OsmAnd data.

2. In the **<Translate android="true" ids="change_data_storage_folder"/>**, you can select a folder to save OsmAnd data on your device.  

    - *Internal app memory*. Only the OsmAnd app has access to its data and none of the external apps.
    - *Shared memory*. No longer available.
    - *External storage 1*. Only 1 OsmAnd app has access and Admin apps and USB.
    - *Multiuser storage*. Only 1 OsmAnd app has access, but it's shared between multiple Android users.
    - *Manually specified*. Depends on the path.

:::note Android 12+ (change storage folder)
New storage access guidelines have been implemented in Android versions 11-12. See the [**Troubleshooting**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) section for details.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *iOS device → Settings → General → iPhone storage → OsmAnd Maps*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

OsmAnd files are visible in the [*Files*](https://apps.apple.com/us/app/files/id1232058109) application. You can access all OsmAnd files: [tracks](../personal/tracks/manage-tracks.md), [favorites](../personal/favorites.md), [maps](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). To do this follow the following path:  

Go to: *iOS* *Files → On My Phone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Map Rendering Engine

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (Android only)*

![General Settings engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- In the **Android** version of the app, you can switch between Version 1 map rendering, originally implemented in the OsmAnd app, and Version 2, which uses the OpenGL (Open Graphics Library) programming interface for rendering two- and three-dimensional graphical objects.

- The **iOS** version uses only OpenGL for map rendering.


| Features | Version 1 | Version 2 (OpenGL) |
|:---|:--- |:--- |
| Cross-platform | Not used in the iOS version. | Fits both versions. |
| GPU / CPU dependent | Recommended for low-performance or outdated devices. | Powerful rendering engine. <br /> Only available for [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) and later versions, and in test mode for [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D mode | It is possible to view the map in 2D, and you can change the viewing angle to get a [3D view](../widgets/map-buttons.md#3d-mode). | You can view the map in 2D and [3D](../widgets/map-buttons.md#3d-mode). |
| Map display | The whole map is rendered as a set of tiles, and markers, lines, and text are already inside these tiles. | First, the entire tile pack is rendered, and then the available symbols are applied to the map, [layer by layer](../../technical/algorithms/map-rendering-layers.md). |
| Transparent symbols overlay / underlay | Supports all settings. | It does not support a raster layer on top of vector text. |
| [3D Terrain](../map/raster-maps.md#3d-relief) | Not supported. | This feature visualizes the terrain on the map by adding elevation information to a normal 2D map, which creates a 3D and depth effect. |
| [3D Tracks](../map/tracks/appearance.md) | Not supported. | This feature allows you to display tracks by altitude above sea level. |
| [Online map](../plugins/online-map.md) | It does not support the display of Contour lines if the map source is any online tile map. | When the map source is an online map, 3D maps are also used, and the display of Contour lines on the map is supported. |
| [Weather plugin](../plugins/weather.md) | You cannot use this plugin. | Convenient to use with the plugin. |  

The image for the 3D view of the map is loaded tile by tile, then all the symbols. The rendering speed of the map depends on the number of 2D and 3D graphical objects on it, and directly on the performance of your hardware. Therefore, Version 2 (OpenGL) cannot be used on low-performance devices.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Privacy and Security

OsmAnd allows you to choose whether to *[share your in-app activity](#analytics)* and [identifiers](#identifiers) (*Android only*) in the app, the ability to edit your *[history](#history)* and use a *[proxy](#proxy)* (*Android only*) of your choice.  

:::note
More information can be found in [*OsmAnd Privacy and Security Policy*](../../legal/privacy-policy.md)
:::

### Analytics

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Analytics Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![General Settings Send anonymous data iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="analytics_pref_title"/>** (*Android*) or **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) setting allows you the choice whether to provide anonymous data about *Downloaded Maps* and *Visited Screens* (*Android*).  

:::note
Data about your location or the places you view on the map is not collected.
:::  

### Identifiers

<InfoAndroidOnly />

*Menu → Settings → OsmAnd settings → Privacy and security → Identifiers*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

A **UUID** (*Unique User Identifier*) is generated for each installation of the OsmAnd application and sent to the servers during map loading.

- A random UUID is used to download offline maps from OsmAnd servers to control the rational use of server resources, predict traffic usage, and provide general monthly reports on map downloads.
- The UUID changes every 3 months.  
- Starting with OsmAnd version 4.3, you can disable the collection of user data when using the OsmAnd app. Then the UUID will not be sent with any download request.  
- You can read more information in the [Terms of Use (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### History

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

The application records the history of previously entered data (history) in the following categories: [Search](../search/search-history.md), [Navigation](../navigation/setup/route-navigation.md#history-of-previous-routes), [Map markers](../personal/markers.md#history). Using the switch on the appropriate tab, you can *Enable / Disable* logging for certain categories of entries. You can also [manage](#history) (view, delete, and share) previously recorded data.  

- ***Backup as file*** (*Android*) or ***Export*** (*iOS*) is used to make [a backup file](../personal/import-export.md#export) of your history.
- ***Clear all history*** (*Android*) or ***Delete all history*** (*iOS*) is used to delete all history entries recorded up to the time of deletion.

<br/>

**Share and delete history.**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- You can delete one or more items from the history list or share them as a file (to access these functions *in iOS*, tap the ***Edit*** button).  
- To delete or export multiple records simultaneously, select checkboxes next to the required records and tap the **Export** or **Delete** buttons.  


### Proxy

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

**<Translate android="true" ids="proxy_pref_title"/>** setting allows you to configure an [HTTP proxy](https://en.wikipedia.org/wiki/Proxy_server) for all network requests. You can set the *Proxy Host* and *Proxy Port*.  


## Other

In this section of the OsmAnd settings, you can configure the notifications you receive, the location service, and how your application settings are saved.

### Dialogs and notifications

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

The **<Translate android="true" ids="dialogs_and_notifications_title"/>** setting allows you to enable/disable pop-ups, dialogues, and notifications.  

- *Start-up message* includes promotions, quizzes, events, and more.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) suppresses displaying app discounts and special local event messages.
- [*Download map dialog*](../start-with/download-maps.md#download) informs you that specific maps can be downloaded.


### Location Source

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*Android only*)

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd provides you with a choice of services to determine your location. It is recommended that you read more information about [Location permission](../start-with/first-steps.md#permission-to-access-the-location) and [Troubleshooting](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) for this section.

***Android***:

- You can choose which *Google Play* or *Android API* services OsmAnd will use to determine your location. This can be useful for devices without *Google Play Services* or in case of inaccurate location or altitude data when recording tracks.
- OsmAnd receives data from the resources *Google Fused Location Providers* and *Android GPS and Network Providers*. You can switch **<Translate android="true" id="location_source" />** in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- The iOS system uses the *iOS API* to determine location.  
- All settings for OsmAnd Location can be found in iOS device settings: *Settings → OsmAnd maps → Location*  
- Privacy of Location services: *Settings → Privacy → Location Services*


### Auto-Backup

<InfoAndroidOnly />

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android or OsmAnd Cloud can save your data and app settings.

- By default, your *OsmAnd settings* and [*Favorites*](../personal/favorites.md#automatic-favorites-backup) map markers are automatically backed up by the Android system. This allows you to restore them on new devices or after reinstalling the app.

- Please note that the backup size is restricted to *25MB*.

- To find the backup files, use the Android file manager: *Android → data → net.osmand → files → backup*.  

**If you are using [*OsmAnd Cloud*](../personal/osmand-cloud.md), it's recommended to deactivate this default backup option to prevent any confusion during reinstallation.**


## Legal

OsmAnd can [warn you about speed cameras](../navigation/guidance/navigation-settings.md#screen-alerts), but only if the laws in your country permit it.


### Uninstall Speed Cameras

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

This setting allows you to activate or deactivate POI with speed cameras, you need to restart the OsmAnd application to make changes.
  
In some countries or regions, using speed camera warning applications is illegal. You must make a choice depending on the laws in your country. Select **Keep active**, and you will receive speed camera alerts and notifications. Select **Uninstall** and all data related to speed cameras, such as warnings, notifications, and POI, will be deleted until you completely reinstall OsmAnd.  

Read about alerts for speed cameras on your route in the article Navigation widgets in the *[Alert widget](../widgets/nav-widgets.md#alert-widget)* section.


## Related Articles

- [Profiles (Settings)](./profiles.md)
- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

### Troubleshooting

- **Android 12+ (change storage folder)**. New storage access guidelines have been implemented in Android versions 11-12. These changes particularly affect the storage of maps on SD cards, resulting in significantly slower file access performance and stricter access limitations to SD card folders on Android 11 and 12. For how to solve this problem, see the [**Troubleshooting**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) section.

- **Location source for altitude issues**. Google Play has changed its policy, and to comply, OsmAnd, starting with version 3.9, must use Google Play Services to get location fixes while running in the background. Read more information in [Troubleshooting](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) section.

> *This article was last updated in November 2024*
