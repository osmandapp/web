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

:::note

Global settings are common to all application profiles. In fact, these settings are the settings of OsmAnd system.

:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>_

![Profiles General Settings Android](@site/static/img/personal/profiles/general_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,osmand_settings"/>_

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_ios.png)

</TabItem>

</Tabs>

## General

### Default profile

Choosing a profile like a default profile:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- &nbsp;_<Translate android="true" ids="settings_preset"/>_ - select the profile, that will be used on application start (last used or from profile list). Here you can choose "_<Translate android="true" ids="shared_string_last_used"/>_" profile. It means that the last chosen profile will be used for the application.

![General Settings Default profile Android](@site/static/img/personal/profiles/general_settings_default_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- &nbsp;_<Translate ios="true" ids="settings_preset"/>_ - select the profile, that will be used on application start (last used or from profile list). Here you can choose "_<Translate ios="true" ids="last_used"/>_" profile. It means that the last chosen profile will be used for the application.

![General Settings Profile iOS](@site/static/img/personal/profiles/general_settings_profile_ios.png)

- &nbsp;_<Translate ios="true" ids="carplay_profile"/>_ - profile that will be used while connected to [CarPlay](https://support.apple.com/en-gb/HT205634).

_iOS device → Settings → General → CarPlay

</TabItem>

</Tabs>

### Display language

Setting display (application) language: 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Here you can choose system device language or another from the list:

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,preferred_locale"/>_

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

For changing OsmAnd display language you need to make it in iOS settings. Here you can choose a language by default or from the list:

_iOS device → Settings → OsmAnd maps → Language_

![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

### Data storage folder

Here you can change storage folder (Android) and know memorу usage by OsmAnd data.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>_

More info about data storage settings read [here](../personal/storage.md#data-storage-folder).

</TabItem>

<TabItem value="ios" label="iOS">

For iOS system, we can't make any manipulate with the storage folder. We can know only how much memory OsmAnd uses:

_iOS device → Settings → OsmAnd maps → General → iPhone storage → OsmAnd Maps_

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

&nbsp;<Translate android="true" ids="uninstall_speed_cameras"/> - allows activating or not Speed camera POI's ([alert widget of speed camearas](../widgets/nav-widgets.md#alert-types)). In some countries or regions, the use of speed camera warning applications is prohibited by law. You need to make a choice depending on the law of your country.
Select "Keep active" and you will receive alerts and warnings about speed cameras.
Select "Uninstall". All data related to speed cameras: alerts, notifications, POIs will be deleted until OsmAnd is completely reinstalled.

![General Settings Cameras Android](@site/static/img/personal/profiles/general_settings_cameras_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

> ```This screen doesn't exist for iOS version at this moment.```

Read about Screen alert of Speed cameras:

_[Screen alerts → Speed cameras](../widgets/nav-widgets.md#alert-widget)_

</TabItem>

</Tabs>