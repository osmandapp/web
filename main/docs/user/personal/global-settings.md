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

<InfoIncompleteArticle/>


## General

**Global settings** are general [settings](../personal/profiles.md) for all profiles in the OsmAnd application. These are the basic settings for the OsmAnd system.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Go to:** *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_andr_1.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

**Go to:** *<Translate ios="true" ids="menu,sett_settings,osmand_settings"/>*

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_ios.png)

</TabItem>

</Tabs>

### Default profile


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- **<Translate android="true" ids="shared_string_last_used"/>** - selects the profile that was last used.

- **<Translate android="true" ids="settings_preset"/>** - You select the profile that will be used when starting OsmAnd. Can be changed in the application [settings](../personal/profiles.md).

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  


</TabItem>

<TabItem value="ios" label="iOS">

- **<Translate android="true" ids="shared_string_last_used"/>** - selects the profile that was last used.

- **<Translate android="true" ids="settings_preset"/>** - You select the profile that will be used when starting OsmAnd. Can be changed in the application [settings](../personal/profiles.md).

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)



</TabItem>

</Tabs>

### CarPlay profile


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

:::note

This settings is not available for Android

:::


</TabItem>

<TabItem value="ios" label="iOS">  

**<Translate ios="true" ids="carplay_profile"/>** - this profile will be used while it is connected to [CarPlay](https://support.apple.com/en-gb/HT205634).

**Go to:** *<Translate ios="true" ids="menu,sett_settings,carplay_profile"/>*


![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)



</TabItem>

</Tabs> 


### Display language

You can use the language installed on your device or select any other language from the list. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


**Go to:** *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,preferred_locale"/>*

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

To change the display language of OsmAnd, you need to do this in the iOS settings.

**Go to:** *<Translate ios="true" ids="menu,sett_settings,language"/>*


![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

### Data storage folder

You can change the storage folder and check the memory usage with OsmAnd data. Read more about storage settings [here](../personal/storage.md#data-storage-folder).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Go to:** *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Data storage folder](@site/static/img/personal/profiles/global_sett_andr_1.png)


</TabItem>

<TabItem value="ios" label="iOS">

For the iOS system, we can not do any manipulation of the storage folder. We can only find out how much memory OsmAnd uses.

**Go to:** *Device → Settings → OsmAnd maps → General → iPhone storage → OsmAnd Maps*

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

OsmAnd files are visible in the "Files" application. To access all tracks, custom routing and rendering files, follow this path:   
*Files → On My Phone → OsmAnd Maps*

More info about data storage settings read [here](../personal/storage.md#data-storage-folder).

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


## Privacy and security

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

#### Analytics

*<Translate android="true" ids="analytics_pref_title"/>* - this setting allows you the choice whether or not to collect anonymous data about Downloaded Maps and Visited Screens. This data allows OsmAnd to better understand. Data about your location or the places you view on the map is not collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).

![General Settings Collected data Android](@site/static/img/personal/profiles/general_settings_collected_data_android.png)  

#### History

*<Translate android="true" ids="shared_string_history"/>* - this setting allows you to view the history log separately for each type of history: [Search History](../search/search-history.md), [Navigation history](../navigation/route-navigation.md#history) and [Map markers history](../personal/markers.md#history).  

Available interactions:  
- Enable/disable history.
- Delete some items from the history.
- Share with.
- Create a backup as a file.
- Clear all history.  

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)

#### Proxy

*<Translate android="true" ids="proxy_pref_title"/>* - this setting allows to configuring an HTTP proxy for all network requests. You can set the Proxy Host and Proxy Port.

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)


</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="send_anonymous_data"/>* - this setting allows you the choice whether or not to collect anonymous data about map download statistics. This data allows OsmAnd to better understand. Data about your location or the places you view on the map is not collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).  

![General Settings Collected data ios](@site/static/img/personal/profiles/general_settings_collected_data_ios.png)

</TabItem>

</Tabs> 


## Other 

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can choose which Google Play or "Android API" services OsmAnd will use to determine your location. This can be useful for devices without Google Play services or in case of inaccurate location or altitude data when recording tracks.  
OsmAnd receives data from the resources *Google Fused Location Providers* and *Android GPS and Network Providers*.  
You can switch **<Translate android="true" id="location_source" />** in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings" />*.

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)


</TabItem>

<TabItem value="ios" label="iOS">


The iOS system uses the iOS API to determine location.  
All settings for OsmAnd Location can be found in iOS Settings: *iOS device → Settings → OsmAnd maps → Location*  

Privacy of Location services: *iOS device → Settings → Privacy → Location Services*

</TabItem>

</Tabs>

### Auto-backup


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

By default, the Android system backs up your OsmAnd settings and map markers so you can restore them on new devices or after reinstalling. The size of this backup is limited to 25MB.  
If you are using [OsmAnd Cloud](../personal/storage.md#backup-and-restore-for-osmand-pro), it is best to disable this feature to avoid misunderstandings after reinstallation.  

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_andr.png)


</TabItem>

<TabItem value="ios" label="iOS">  

:::note

This settings is not available for iOS version at this moment.

:::  


</TabItem>

</Tabs> 



## Legal

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


**<Translate android="true" ids="uninstall_speed_cameras"/>**  

This setting allows you to activate or deactivate the speed camera POI ([speed camera alert widget](../widgets/nav-widgets.md#alert-widget)). In some countries or regions, using speed camera warning apps is illegal. You need to make a choice depending on the laws in your country. Select *Keep active* and you will receive speed camera alerts. Select *Delete* and all data related to speed cameras: alerts, notifications and POIs will be deleted until you completely reinstall OsmAnd.  
 

![General Settings Cameras Android](@site/static/img/personal/profiles/speed_cam_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">


:::note

This settings is not available for iOS version at this moment.

:::  



Read about Screen alert of Speed cameras: *[Alert widget](../widgets/nav-widgets.md#alert-widget)*

</TabItem>

</Tabs>