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

This option is not available for Android

:::


</TabItem>

<TabItem value="ios" label="iOS">  

**Go to:** *<Translate ios="true" ids="menu,sett_settings,carplay_profile"/>*

**<Translate ios="true" ids="carplay_profile"/>** - this profile will be used while it is connected to [CarPlay](https://support.apple.com/en-gb/HT205634).

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

Here you can change storage folder (Android) and know memorу usage by OsmAnd data. More info about data storage settings read [here](../personal/storage.md#data-storage-folder).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Go to:** *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Data storage folder](@site/static/img/personal/profiles/global_sett_andr_1.png)


</TabItem>

<TabItem value="ios" label="iOS">

For the iOS system, we can not do any manipulation of the storage folder. We can only find out how much memory OsmAnd uses.

**Go to:** *Device → Settings → OsmAnd maps → General → iPhone storage → OsmAnd Maps*

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

OsmAnd files are visible in the "Files" application. You can access all tracks, custom routing and rendering files through it:
_Files → On My Phone → OsmAnd Maps_

More info about data storage settings read [here](../personal/storage.md#data-storage-folder).

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>

## Privacy and security

Here you can set parameters of your privacy and security.

### Analytics

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

&nbsp;_<Translate android="true" ids="analytics_pref_title"/>_ - allows collecting or not next anonymous usage data of OsmAnd: Maps downloaded, Screens visited. No data about your position or locations you view on the map are collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).

![General Settings Collected data Android](@site/static/img/personal/profiles/general_settings_collected_data_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

&nbsp;_<Translate ios="true" ids="send_anonymous_data"/>_ - allows collecting or not next anonymous usage data of OsmAnd: map download statistics. No data about your position or locations you view on the map are collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).

![General Settings Collected data ios](@site/static/img/personal/profiles/general_settings_collected_data_ios.png)

</TabItem>

</Tabs>

### History

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

&nbsp;<Translate android="true" ids="shared_string_history"/> - allows disabling history logging individually for each history type: [search history](../search/search-history.md), [navigation history](../navigation/route-navigation.md#history), [map markers history](../personal/markers.md#history). Here you can export history info a file, you can clear all history or for each categories ([search history](../search/search-history.md), [navigation history](../navigation/route-navigation.md#history), [map markers history](../personal/markers.md#history)).

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

> ```This screen doesn't exist for iOS version at this moment.```

</TabItem>

</Tabs>

### Proxy

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

&nbsp;_<Translate android="true" ids="proxy_pref_title"/>_ - allows configuring an HTTP proxy for all network requests. You can set Proxy Host and Proxy Port.

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

> ```This screen doesn't exist for iOS version at this moment.```

</TabItem>

</Tabs>

## Other 

### Dialogs and notifications

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

&nbsp;<Translate android="true" ids="dialogs_and_notifications_title"/> - allows switching on/off popups, dialogs and notifications. It's [the download map dialog](../start-with/download-maps.md#download---map-zoom-in) and startp-up message (like promotion, quiz and etc.).

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- &nbsp;_<Translate ios="true" ids="do_not_show_discount"/>_ - allows switching on/off popups, dialogs and notifications. It's [the download map dialog](../start-with/download-maps.md#download---map-zoom-in) and startp-up message (like promotion, quiz and etc.).

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_ios.png)

</TabItem>

</Tabs>

### Location source

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can choose which Google Play or "Android API" services OsmAnd will use to determine your location. This can be useful for devices without Google Play services or in case of inaccurate location or altitude data when recording tracks.  
OsmAnd takes data from the resources *Google's Fused Location Providers* and *Android GPS and Network Providers*.  
You can switch **<Translate android="true" id="location_source" />** in: _<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings" />_.

![General Settings notifications Android](@site/static/img/personal/profiles/osmand-settings_location-source_google-play.png)

</TabItem>

<TabItem value="ios" label="iOS">

> ```This screen doesn't exist for iOS version at this moment.```

iOS system uses iOS API for location.

You can find all settings for OsmAnd Location in iOS Settings:

_iOS device → Settings → OsmAnd maps → Location_

Privacy of Location services:

_iOS device → Settings → Privacy → Location Services_

</TabItem>

</Tabs>

## Legal

### Uninstall speed cameras

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


&nbsp;<Translate android="true" ids="uninstall_speed_cameras"/> - allows you to activate or deactivate the Speed camera POI's ([alert widget of speed camearas](../widgets/nav-widgets.md#alert-types)). In some countries or regions, using speed camera warning applications is illegal. You need to make a choice depending on the law in your country. Select "Keep active" and you will receive speed camera warnings and alerts. Select "Uninstall" and all data related to speed cameras: alerts, notifications and POI's will be deleted until you completely reinstall OsmAnd.
 

![General Settings Cameras Android](@site/static/img/personal/profiles/general_settings_cameras_android.png)

</TabItem>

<TabItem value="ios" label="iOS">


:::note

This screen doesn't exist for iOS version at this moment.

:::


Read about Screen alert of Speed cameras: _[Screen alerts → Speed cameras](../widgets/nav-widgets.md#alert-widget)_

</TabItem>

</Tabs>