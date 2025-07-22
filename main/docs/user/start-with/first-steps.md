---
sidebar_position: 1
title:  First Steps
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overview {#overview}

Welcome to OsmAnd (OpenStreetMap Automated Navigation Directions)!  

Explore how to download maps, how to configure the application, how to use the map and build a route, how to start navigation, and how to search points of interest. Get acquainted with key points of OsmAnd Privacy policy and required Permissions.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline navigation Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Offline navigationiOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Install OsmAnd {#install-osmand}

OsmAnd is a mobile application for Maps and Navigation available for **Android** and **iOS**. You can download it from the most popular markets.

**Android markets**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand) and [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Read more](../purchases/index.md) about OsmAnd versions and Purchases.  


## Welcome to OsmAnd {#welcome-to-osmand}

We aim to create a fully functional map-oriented application that can be used for various purposes offline and online. The application has many features, so you won't have to switch between different apps, and everything will be at your fingertips.

- View a Worldwide Map with a lot of detail displayed in [different map styles](../map/vector-maps.md).
- Display, [search](../search/search-poi.md) and save various [Points of interest](../map/point-layers-on-map.md).
- [Plan a route](../plan-route/create-route.md) by car, bicycle, foot and combine into multimodal routes.
- Start [voice guided navigation](../navigation/guidance/voice-navigation.md) when you turn the screen on and off.
- Make your tourist trip rich with offline [Wikipedia](../plugins/wikipedia.md) and [Wikivoyage](../plan-route/travel-guides.md).
- Fully customize how [the map is displayed](../map/configure-map-menu.md) and what [widgets](../widgets/index.md) are displayed on it.
- Navigate [by route](../navigation/setup/route-navigation.md), [by a given track](../navigation/setup/gpx-navigation.md), [by public transport](../navigation/routing/public-transport-navigation.md) and [off-road](../navigation/setup/markers-navigation.md).
- Everything works **Offline**.
- And don't forget to contribute to [OpenStreetMap](https://www.openstreetmap.org/) with the [OSM Editing Plugin](../plugins/osm-editing.md).


## Actions Guide {#actions-guide}

### Permission to Access the Location {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Precise location android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Precise location iOS](@site/static/img/steps/first_start_ios.png) ![Precise location iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

We recommend that you grant OsmAnd permission to receive information about the precise location of your device. We do not collect, use, or share your private information, so access to precise geolocation is needed for correct offline work of search, navigation, and other OsmAnd functions.  


### How to download maps {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Show on the map](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show on the map](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

The OsmAnd app works with different types of maps, but it can only function fully with downloaded offline maps, so after the *<Translate android="true" ids="get_started"/>* screen you are prompted to [*download map*](../start-with/download-maps.md#initial-setup-screen) of your region. You can choose a different region, restore from [OsmAnd Cloud](../personal/osmand-cloud.md), or skip this step and download maps later.  
For other map download options available, see the [article Download maps](../start-with/download-maps.md).

:::note Start working with offline maps
OsmAnd cannot work correctly without downloaded offline maps. Although the application supports [Vector](../map/vector-maps.md) and [Raster](../map/raster-maps.md) maps, it is strongly recommended to start working with vector offline maps to make all functions such as [Search](../search/index.md), [Navigation](../navigation/index.md), and [Context menu](../map/map-context-menu.md) work properly.
:::


### How download maps for the whole world {#how-download-maps-for-the-whole-world}

While OsmAnd allows you to download maps for all available regions, there is no single package to download the entire world at once. Instead, you can download individual country or region maps based on your needs.

***Key points:***

- **OsmAnd Pro** and **Maps+** provide **unlimited map downloads**, but you still need to download maps one region at a time.
- **Storage limitations.** Ensure your device has enough space before downloading multiple regions.
- **Automatic updates.** Once downloaded, maps can be updated via *Menu → Maps & Resources → Updates.*


### How to change app language {#how-to-change-app-language}

The *Display language option* is used to change the language of the entire app, including pop-up prompts, internal text, messages, and more. Up to Android 12, OsmAnd allows you to customize the display language according to your preferences directly in the app. Starting from Android 13 and on iOS devices, the display language can only be changed in the system settings (see how to change per-app language preferences in [Android](https://developer.android.com/guide/topics/resources/app-languages) and [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Go to: *Settings → Apps → OsmAnd → Language*

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Settings → OsmAnd Maps → Language*

![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note No option to set app languages
On some Android devices (Xiaomi with Muiu 14), there is no option to set app languages individually in system settings, so the language of OsmAnd can only be changed with the language of the whole system. You can check out the discussion on [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) for additional information.
:::


### How to manage your settings {#how-to-manage-your-settings}

You could manage application settings as [Global settings](../personal/global-settings.md) or as [Profile configuration](../personal/profiles.md) via [Main Menu](../start-with/main-menu.md). The application comes with a predefined list of profiles that could be modified later. Each profile could be considered as a customized map application for specific purposes. By default, profiles are being served only as different navigation modes.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Manage profile Android](@site/static/img/settings/manage_profile_android.png) ![Configure profile Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage profile iOS](@site/static/img/settings/manage_profile_ios.png) ![Configure profile iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Read more](../personal/global-settings.md) about Global settings.
[Read more](../personal/profiles.md) about Profile settings.


### How to configure plugins {#how-to-configure-plugins}

[Plugins](../plugins/index.md#configure-plugin) greatly extend application functionality. Almost all plugins have their own [Map Actions](../map/map-context-menu.md), [Map Layers](../map/configure-map-menu.md), [Map Downloads](../start-with/download-maps.md) and [Settings](../plugins/#plugin-settings).  

You can enable / disable plugins via [Main Menu](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

To enable / disable plugins, go to:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable

</TabItem>

<TabItem value="ios" label="iOS">

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

To enable / disable plugins, go to:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Read more](../plugins/index.md#configure-plugin) about OsmAnd plugins.


### How to use a map {#how-to-use-a-map}

Map is a core element of OsmAnd, and it's important to know [how to use it](../map/interact-with-map.md) (gestures, buttons, etc.). You could [configure map](../map/configure-map-menu.md) to your needs: [change map style](../map/configure-map-menu.md#map-style-parameters), configure different [map layers](../map/configure-map-menu.md#map-layers) such as favorites, POI, public transport, tracks, contour lines, hillshade and others.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configure map Android](@site/static/img/settings/configure_map_menu_android.png) ![Configure map example Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure map iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Configure map example iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Read more](../map/configure-map-menu.md) about map configuration.


### How to configure screen {#how-to-configure-screen}

[Configure screen](../widgets/configure-screen.md) allows you to enable [Informational](../widgets/info-widgets.md) (altitude, speed, current time, etc.) & [Navigational](../widgets/nav-widgets.md) (destination, bearing, arrival time, etc.) widgets, [Quick action](../widgets/quick-action.md) and other elements that will be displayed over Map.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configure screen Android](@site/static/img/widgets/configure_screen_android.png) ![Configure screen example Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure screen iOS](@site/static/img/settings/configure_screen_ios.png) ![Configure screen example iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Read more](../widgets/configure-screen.md) about Screen configuration.


### How to add personal data to maps {#how-to-add-personal-data-to-maps}

OsmAnd allows you to make various marks on the Map for your personal needs. For example, [Favorite points](../personal/favorites.md) - personal points with name & icon & category, [Markers](../personal/markers.md) - quickly added points as a target, [Audio/Video notes](../plugins/audio-video-notes.md) - media notes recorded at a specific point, [Tracks](../personal/tracks/manage-tracks.md) - recorded and imported tracks & tours.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Add personal data Andoroid](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add personal data iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Read more](../map/point-layers-on-map.md) about points on the map.


### How to browse & find point of interest {#how-to-browse--find-point-of-interest}

[Points of interest (POI)](../map/point-layers-on-map.md#points-of-interest-pois) are amenities that could be searched or highlighted on the map. They represent interesting or useful places and are distributed as part of [Vector Maps](../map/vector-maps.md). You can use them to [display on the map](../map/point-layers-on-map.md#points-of-interest-pois), [navigate](../navigation/index.md) and [search](../search/search-poi.md) the points of interest on the Map.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png) ![Search and display POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Multiple POI Selection](@site/static/img/settings/multiple_selection_iOS.png) ![Search and display POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Read more](../search/search-poi.md) about POI search.


### How to plan a route {#how-to-plan-a-route}

[Plan route](../plan-route/create-route.md) is a powerful tool that allows you to create a trip, edit an existing track, and measure distance on the spot. You can quickly put intermediate points and connect them by various navigation lines (bike, pedestrian, straight line, etc.). Results could be saved into a GPX file, so it could be [shared](../personal/tracks/index.md) or [used by navigation](../navigation/setup/gpx-navigation.md) later.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Plan route Android](@site/static/img/settings/plan_route_android.png) ![Plan route graph Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan route iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Read more](../plan-route/create-route.md) about the plan route feature.


### How to search by address {#how-to-search-by-address}

OsmAnd provides many search capabilities, including address search. By default, it uses [OpenStreetMap data](https://nominatim.openstreetmap.org/ui/search.html) and should be able to find all addresses using Quick Search input. Also, you can [search](../search/search-address.md) by city, street, postcode, and coordinates.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Address search Android](@site/static/img/settings/address_search_android.png) ![Search result Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Address search iOS](@site/static/img/settings/address_search_ios.png) ![Search result iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
You need to download the map before searching for an address there. Also, if your current location is too far from your searching address you might need to increase the searching radius.
:::

[Read more](../search/search-address.md) about address search.


### How to start navigation {#how-to-start-navigation}

[Navigation](../navigation/index.md) provides you with step-by-step guidance to your destination by displaying the route, offering turn-by-turn instructions, extra road information about surface, smoothness, etc., and optional voice guidance.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Start navigation Android](@site/static/img/settings/start_navigation_android.png) ![Route graph Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Route graph iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Read more](../navigation/index.md) about navigation.


### How to record your trip {#how-to-record-your-trip}

[Trip recording](../plugins/trip-recording.md) is a special tool packaged as an OsmAnd plugin that allows you to record all movements on track using the device's GPS.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Trip recording Android](@site/static/img/settings/trip_recording_android.png) ![Overview trip recording Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start trip recording iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Trip recording menu iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Read more](../plugins/trip-recording.md) about trip recording.


### How to edit maps {#how-to-edit-maps}

OsmAnd is powered by [OpenStreetMap](https://www.openstreetmap.org/) data. The maps are created by volunteer contributors, so they can have more or fewer details depending on how much work has been done at a certain part of the map. Anyone can register as a contributor and add or edit OSM maps. OsmAnd provides an editing plugin that helps to improve the OpenStreetMap.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![OSM note Android](@site/static/img/settings/osm_note_android.png) ![Create POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM note iOS](@site/static/img/settings/osm_note_ios.png) ![Create POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Read more](../plugins/osm-editing.md) about OSM editing.


### How to close the app {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

There are two available variants of how to close OsmAnd.

1. Close an app by swiping up and off the screen. For a vertical list of apps, swipe left or right.  

2. You may need to perform the following steps before doing so, otherwise OsmAnd will run in the background:
    - [Dismiss navigation](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Stop map downloading and updating](../start-with/download-maps.md)
    - [Stop trip recording](../plugins/trip-recording.md#create-new-track)
    - [Stop audio/video note recording](../plugins/audio-video-notes.md)

3. *Force stop* function:
    - Long tap *OsmAnd icon → **i** button → Force stop*.
    - Open the settings and tap *Apps & notifications → OsmAnd → Force stop*.

</TabItem>

<TabItem value="ios" label="iOS">

Close an app by swiping up and off the screen. For a vertical list of apps, swipe left or right.  

You may need to perform the following steps before doing so, otherwise, OsmAnd will run in the background:

- [Cancel navigation](../navigation/setup/route-navigation.md)
- [Stop map downloading and updating](../start-with/download-maps.md)
- [Stop trip recording](../plugins/trip-recording.md#create-new-track)
- [Stop audio/video note recording](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## App Shortcuts {#app-shortcuts}

<InfoAndroidOnly/>

[Application shortcuts](https://support.google.com/android/answer/9450271) are available for the OsmAnd icon. Just long tap the OsmAnd icon on your device screen to open the application shortcuts menu. Here, you can short press to select the following actions: *Navigate to Home*, *Navigate to Work*, *Start Recording*, *Search*, *My places*, *Navigate to*. Long tap an action allows you to add a new action icon to your device screen.

Tap an action icon to immediately start the application with the selected action.

![Shortcuts](@site/static/img/steps/shortcuts_3_andr.png) ![Shortcuts](@site/static/img/steps/shortcuts_4_andr.png)


## Offline Help {#offline-help}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

In the *Help menu* you can find articles from our site [www.osmand.net/docs](https://osmand.net/docs/intro/). After initial download (Internet connection required), help articles are available offline.  
The first subsection, *Offline Help* contains the **Most viewed** (or popular) articles among our users. **User guide** and **Troubleshooting** sections have the same structure as on the website.  
In the *Help menu*, you can also find useful links to OsmAnd social networks, version information about your application, release notes, and support contacts. Through Help, you can also send [logcat and crash logs](../troubleshooting/crash-logs.md#crash-and-logcat-logs).  

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Send crash log** (*for Android*). Allows users to send reports of app crashes to developers, aiding in the identification and resolution of issues.
- **Send logcat log** (*for Android*). Provides users with the ability to send detailed logs of app crashes to developers, facilitating deeper analysis and troubleshooting.
- **Send log** (*for iOS*). Performs a similar function to the *Send crash log* feature for Android, enabling users on iOS devices to report app crashes to developers for debugging purposes.
- **Copy build version**. Enables users to quickly and accurately communicate the current version of the app to developers when reporting issues, simplifying the diagnostic and resolution process.


### Most Viewed {#most-viewed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

The Most viewed articles among our users refer to the articles in the app or on the site that have garnered the most views or user interactions. This metric helps identify content that is particularly interesting or useful to your users. It can provide valuable insights into user preferences and interests, allowing developers and content creators to tailor future content to better meet audience needs. Additionally, highlighting popular articles can help new users find valuable resources within the app.


### User Guide {#user-guide}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

The **User Guide** section of the Help menu is a complete manual that follows the structure of the OsmAnd website, ensuring consistency of information and ease of navigation across platforms. Using Help, you can easily navigate from app to the website, finding the same content organized familiarly. This consistency enhances usability by providing a single support resource to find answers to questions and troubleshoot issues quickly.


### Troubleshooting {#troubleshooting}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Solutions and tips for solving common problems. If you have a specific question, please check [Troubleshooting](../troubleshooting/index.md) to have it answered.

- [Setup](../troubleshooting/setup.md). When setting up an application, these are the issues that most often arise.
- [Maps & data](../troubleshooting/maps-data.md). Issues related to maps, search, and the rest of the data.
- [Navigation](../troubleshooting/navigation.md). The most common issues that occur in navigation mode.
- [Track recording](../troubleshooting/track-recording-issues.md). Common issues related to track recording such as noises, gaps, and inaccuracies.
- [General](../troubleshooting/general.md). Common issues associated with various OsmAnd features.
- [Crash logs](../troubleshooting/crash-logs.md). How to send crash logs to the OsmAnd team.
- [Android Auto](../troubleshooting/android_auto.md) (*only for Android*). Auto navigation problems.

### Contact Us {#contact-us}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Allows you to ask questions or make suggestions.

### Report Issues {#report-issues}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Open issue on GitHub**. [Android version GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [iOS version GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): ask questions, write about bugs and propose features.
- **Send crash log** (*for Android*). Contains only information about crashes.
- [Send logcat log](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Send log](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Detailed log file.

### About OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

You can learn about our team, see the current version of the app and what's new, and download the beta version of the app.


## Privacy {#privacy}

It is an [open source](https://github.com/osmandapp/osmand), ads-free / tracker-free privacy-focused application. To preserve maximum privacy, OsmAnd offers Offline maps as a first place, so no interaction or geo information is leaked from your device. We are very attentive to what data is collected and what data is transferred by the network, you can read more in our [Privacy policy](https://osmand.net/help-online/privacy-policy).  


## Permissions {#permissions}

OsmAnd doesn't have any required permissions on the iOS / Android version.

**Essential**:

- **Internet**. Initial download / update offline maps. Also, it could be needed to access online features such as [Street Level Imagery](../map/point-layers-on-map.md#-street-level-imagery), [Online photos](../map/map-context-menu.md#online-photos) or [Online maps](../map/raster-maps.md).
- **GPS** / **GSM Network**. Determine your location, follow you in a navigation mode, and record your trip (optional). This permission is asked when you click [my location button](../widgets/map-buttons.md#my-location-and-zoom) or when you [start navigation](../navigation/setup/route-navigation.md#start--stop-navigation).

**Optional**:

- **Camera/voice recording** (*Android*). Only used by [the Audio/Video notes](../plugins/audio-video-notes.md). This feature is packaged as a plugin and by default disabled. It allows you to quickly create location-related audio/video notes during a trip.


> *Last updated: January 2025*
