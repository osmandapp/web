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

*<Translate ios="true" ids="menu,sett_settings,osmand_settings"/>*  

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

Read about Android Auto [here](../navigation/auto-car.md)

</TabItem>

<TabItem value="ios" label="iOS">  

**<Translate ios="true" ids="carplay_profile"/>** - this profile will be used while it is connected to [CarPlay](https://support.apple.com/en-gb/HT205634).

*<Translate ios="true" ids="menu,sett_settings,carplay_profile"/>*

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)

</TabItem>

</Tabs> 


### Display language

Display language is the setting of the language of the entire application, pop-up prompts, internal text, messages, etc. For Android system this can be done in the application, for iOS system - through the iOS settings. You can use the language installed on your device or select any other language from the list. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,preferred_locale"/>*

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings"/> → OsmAnd maps → Language*

![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>


### Data storage folder

Read more about storage settings [here](../personal/storage.md#data-storage-folder).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Data storage folder](@site/static/img/personal/profiles/global_sett_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

For the iOS system, we can not do any manipulation of the storage folder. We can only find out how much memory OsmAnd uses.  

*iOS device → Settings → General → iPhone storage → OsmAnd Maps*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

OsmAnd files are visible in the "Files" application. To access all tracks, custom routing and rendering files, follow this path:   
*Files → On My Phone → OsmAnd Maps*

More info about data storage settings read [here](../personal/storage.md#data-storage-folder).

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Map rendering engine

The Android version of OsmAnd can use the standard first version of rendering or the second version named OpenGL. **Version 1** is recommended for low-performance or outdated devices.  
**Version 2** is a fast rendering engine and provides features such as a [2.5D](../personal/profiles.md#appearance) where you can change the angle of view to get a 3D view. Version 2 is only available for OsmAnd 4.3 and the following versions, and also as a test mode for OsmAnd 4.2.
The OsmAnd app for the iOS version only uses the OpenGL rendering engine.  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>*

![General Settings engine rendering Android](@site/static/img/personal/profiles/rendering_engine_andr.png)  


## Privacy and security

OsmAnd allows you to choose whether or not to share your activity in the app, the ability to edit your history and use the proxy of your choice. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 


#### Analytics

*<Translate android="true" ids="analytics_pref_title"/>* - this setting allows you the choice whether or not to collect anonymous data about Downloaded Maps and Visited Screens. This data allows OsmAnd to better understand. Data about your location or the places you view on the map is not collected. [OsmAnd privacy and security](https://osmand.net/help-online/privacy-policy).  
To open Analytics settings, follow these steps: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Collected data Android](@site/static/img/personal/profiles/general_settings_collected_data_android.png)  


#### Identifiers

A UUID (Unique User Identifier) is generated for each installation of the OsmAnd application and sent to the servers during map loading. A random UUID is used to download offline maps from OsmAnd servers to control rational use of server resources, predict traffic usage, and provide general monthly reports on map downloads. The UUID changes every 3 months.  

Starting with OsmAnd version 4.3, you can disable the collection of user data when using the OsmAnd app. Then the UUID will not be sent with any download request.  

You can read more information in the [Terms of use (ToS)](../../legal/terms-of-use.md).  

*Menu → Settings → OsmAnd settings → Privacy and security → Identifiers*

![UUID Android](@site/static/img/personal/profiles/uuid_android.png) 

<!--Starting with OsmAnd 4.3 it's possible to disable UUID (Unique User Identifier) as the result the traffic could be deprioritized when lots of maps are downloaded i.e. in the beginning of the month. UUID is rotated every 3 months so there is no user profile built for a longer history.-->


#### History

*<Translate android="true" ids="shared_string_history"/>* - this setting allows you to view the history log separately for each type of history: [Search History](../search/search-history.md), [Navigation history](../navigation/route-navigation.md#history) and [Map markers history](../personal/markers.md#history).  
To open History settings, follow these steps: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

Available interactions:  

Inside actions
- Enable/disable history.
- Delete some items from the history.
- Share with.  

Actions
- Create a backup as a file - in each sub-item you can select the data to be exported to a file: *Settings*, *My Places*, *Resources*.
- Clear all history.  

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)  ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)


#### Proxy

*<Translate android="true" ids="proxy_pref_title"/>* - this setting allows to configure';// an [HTTP proxy](https://www.wikiwand.com/en/Proxy_server) for all network requests. You can set the Proxy Host and Proxy Port.  
To open Proxy settings, follow these steps: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="send_anonymous_data"/>* - this setting allows you the choice whether or not to collect anonymous data about map download statistics. This data allows OsmAnd to better understand. Data about your location or the places you view on the map is not collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).  

![General Settings Collected data ios](@site/static/img/personal/profiles/general_settings_collected_data_ios.png)

</TabItem>

</Tabs> 


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
**If you are using [OsmAnd Cloud](../personal/storage.md#backup-and-restore-for-osmand-pro), it is best to disable this feature to avoid misunderstandings after reinstallation.**  

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_andr.png)


## Legal

OsmAnd can warn you about speed cameras, but only if the laws in your country permit it.


### Uninstall speed camera

<InfoAndroidOnly />

This setting allows you to activate or deactivate the speed camera POI ([speed camera alert widget](../widgets/nav-widgets.md#alert-widget)). In some countries or regions, using speed camera warning apps is illegal. You need to make a choice depending on the laws in your country. Select *Keep active* and you will receive speed camera alerts. Select *Delete* and all data related to speed cameras: alerts, notifications and POIs will be deleted until you completely reinstall OsmAnd.  
 
![General Settings Cameras Android](@site/static/img/personal/profiles/speed_cam_andr.png)

Read about Screen alert of Speed cameras: *[Alert widget](../widgets/nav-widgets.md#alert-widget)*

