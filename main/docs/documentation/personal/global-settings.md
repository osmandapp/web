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


## Global settings

Global settings are common to all application profiles. In fact, these settings are the settings of OsmAnd system.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>

<p> </p>

![Profiles General Settings Android](@site/static/img/personal/profiles/general_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,osmand_settings"/>

<p> </p>

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_ios.png)

</TabItem>

</Tabs>

### Default profile

Choosing a profile like a default profile:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- &nbsp;<Translate android="true" ids="settings_preset"/> - select the profile, that will be used on application start (lase used or from profile list). Here you can choose "<Translate android="true" ids="shared_string_last_used"/>" profile. It means that the last chosen profile will be used for the application.

![General Settings Default profile Android](@site/static/img/personal/profiles/general_settings_default_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- &nbsp;<Translate ios="true" ids="settings_preset"/> - select the profile, that will be used on application start (lase used or from profile list). Here you can choose "<Translate ios="true" ids="last_used"/>" profile. It means that the last chosen profile will be used for the application.

![General Settings Profile iOS](@site/static/img/personal/profiles/general_settings_profile_ios.png)

</TabItem>

</Tabs>

### Display language

Setting display (application) language: 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Here you can choose system device language or another from the list:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,preferred_locale"/>

<p> </p>

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

For changing OsmAnd display language you need to make it in iOS settings. Here you can choose a language by default or from the list:

iOS device -> Settings -> OsmAnd maps -> Language

![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

### Data storage folder

Here you can change storage folder (Android) and know memorу usage by OsmAnd data.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>

<p> </p>

More info about data storage settings read [here](/docs/documentation/personal/storage#data-storage-folder-android).

</TabItem>

<TabItem value="ios" label="iOS">

For iOS system, we can't make any manipulate with the storage folder. We can know only how much memory OsmAnd uses:

iOS device -> Settings -> OsmAnd maps -> General -> iPhone storage -> OsmAnd Maps 

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

</TabItem>

</Tabs>

### Privacy and security

Here you can set parameters of your privacy and security

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Analytics**

&nbsp;<Translate android="true" ids="analytics_pref_title"/> - allows collecting or not next anonymous usage data of OsmAnd: Maps downloaded, Screens visited. No data about your position or locations you view on the map are collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).

![General Settings Collected data Android](@site/static/img/personal/profiles/general_settings_collected_data_android.png)


**Dialogs and notifications**

&nbsp;<Translate android="true" ids="dialogs_and_notifications_title"/> - allows switching on/off popups, dialogs and notifications. It's [the download map dialog](/docs/documentation/start-with/download-maps#download---map-zoom-in) and startp-up message (like promotion, quiz and etc.).

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)

**History**

&nbsp;<Translate android="true" ids="shared_string_history"/> - allows disabling history logging individually for each history type: [search history](/docs/documentation/search/search-history), [navigation history](/docs/documentation/navigation/route-navigation#history), [map markers history](/docs/documentation/personal/markers#history). Here you can export history info a file, you can clear all history or for each categories ([search history](/docs/documentation/search/search-history), [navigation history](/docs/documentation/navigation/route-navigation#history), [map markers history](/docs/documentation/personal/markers#history)).

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)


**Proxy**

&nbsp;<Translate android="true" ids="proxy_pref_title"/> - allows configuring an HTTP proxy for all network requests. You can set Proxy Host and Proxy Port.

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

**Legal**

&nbsp;<Translate android="true" ids="uninstall_speed_cameras"/> - allows activating or not Speed camera POI's ([alert widget of speed camearas](/docs/documentation/widgets/nav-widgets#alert-types)). In some countries or regions, the use of speed camera warning applications is prohibited by law. You need to make a choice depending on the law of your country.
Select "Keep active" and you will receive alerts and warnings about speed cameras.
Select "Uninstall". All data related to speed cameras: alerts, notifications, POIs will be deleted until OsmAnd is completely reinstalled.

![General Settings Cameras Android](@site/static/img/personal/profiles/general_settings_cameras_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- &nbsp;<Translate ios="true" ids="carplay_profile"/> - profile that will be used while connected to [CarPlay](https://support.apple.com/en-gb/HT205634).

- &nbsp;<Translate ios="true" ids="do_not_show_discount"/> - allows switching on/off popups, dialogs and notifications. It's [the download map dialog](/docs/documentation/start-with/download-maps#download---map-zoom-in) and startp-up message (like promotion, quiz and etc.).

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_ios.png)

- &nbsp;<Translate ios="true" ids="send_anonymous_data"/> - allows collecting or not next anonymous usage data of OsmAnd: Maps downloaded. No data about your position or locations you view on the map are collected. [Privace Policy of OsmAnd](https://osmand.net/help-online/privacy-policy).

</TabItem>

</Tabs>

