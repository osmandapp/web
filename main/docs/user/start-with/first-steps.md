---
sidebar_position: 1
title:  First steps
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




Welcome to OsmAnd! Explore how to download maps, how to configure the application, how to use map and build a route, how to start navigation and how to search points of interest. Get acquainted with key points of OsmAnd Privacy policy and required Permissions.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline navigation Android](@site/static/img/settings/google_play_screen1_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Offline navigationiOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>

## Install OsmAnd
OsmAnd is a mobile application for Maps and Navigation available for **Android** and **iOS**. You can download it on most popular Markets.

**Android markets**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand), [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545), [Amazon](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8/ref=sr_1_3?dchild=1&keywords=osmand&qid=1616685559&sr=8-3). 

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Read more](../purchases/index.md) about OsmAnd versions and Purchases.  

## Welcome to OsmAnd!

Our goal is to create a fully functional map-oriented application that could be used offline & online for various purposes. The application is full of features, so you don't need to switch between different apps and you will have everything at your fingertips:
- Browse Worldwide Map with lots of details displayed with [many map styles](../map/vector-maps.md).
- Display,  [search](../search/search-poi.md) and save various [Points of interest](../map/point-layers-on-map.md).
- [Plan a route](../plan-route/create-route.md) by car, bicycle, foot and combine into multi modal routes.
- Start [voice guided navigation](../navigation/route-navigation.md) with screen on and off.
- Make your tourist trip rich with offline [Wikipedia](../plugins/wikipedia.md) and [Wikivoyage](../plan-route/travel-guides.md).
- Fully customize how [the map is displayed](../map/configure-map-menu.md) and what [widgets](../widgets/index.md) are displayed on it.
- Navigate [by boat](../navigation/boat-navigation.md), [by a given track](../navigation/gpx-navigation.md), [by public transport](../navigation/public-transport-navigation.md) and [offroad](../navigation/markers-navigation.md).
- Everything works in **Offline Mode**!
- And don't forget to contribute to [OpenStreetMap](https://www.openstreetmap.org/) with the [OSM Editing Plugin](../plugins/osm-editing.md).

## Actions Guide

### How to download maps

OsmAnd is an offline map application, so after the '<Translate android="true" ids="get_started"/>' screen, you will be prompted to a [download map](../start-with/download-maps.md#download---first-screen) of your region. You can select another region or skip this step and download maps later. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Show on the map](@site/static/img/settings/download_map1_android.png) ![Map](@site/static/img/settings/map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show on the map](@site/static/img/settings/download_map1_ios.png) ![Map](@site/static/img/settings/map_ios.png)

</TabItem>

</Tabs>

:::note

Application is not properly functional without offline maps which are not distributed within the application. Even though application supports [Vector maps](../map/vector-maps.md) and  [Raster maps](../map/raster-maps.md), it is highly recommended to start with Offline Vector Maps to get all features properly functioning such as [Search](../search/index.md), [Navigation](../navigation/index.md),  [Context menu](../map/map-context-menu.md). 

:::

[Read more](../start-with/download-maps.md) about download map options.

### How to manage your settings

You could manage application settings as [Global settings](../personal/global-settings.md) or as [Profile configuration](../personal/profiles.md) via [Main menu](../start-with/main-menu.md). Application comes with a predefined list of profiles that could be modified later. Each profile could be considered as a customized map application for specific purposes. By default profiles are being served only as different navigation modes.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Manage profile Android](@site/static/img/settings/manage_profile_android.png) ![Configure profile Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage profile iOS](@site/static/img/settings/manage_profile_ios.png) ![Configure profile iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Read more](../personal/global-settings.md) about Global settings.
[Read more](../personal/profiles.md) about Profile settings.

### How to configure plugins

[Plugins](../plugins/index.md) allow greatly to extend application functionality. Plugins could be internal (provided inside OsmAnd) or external (separate installed applications). 3rd party plugins work via [OsmAnd API](../../technical/osmand-api-sdk/index.md) and could get access to OsmAnd information, you could always review / enable / disable plugins via [Main menu](../start-with/main-menu.md) → Plugins. Each plugin could have its own [Map Actions](../map/map-context-menu.md), [Map Layers](../map/configure-map-menu.md), [Map Downloads](../start-with/download-maps.md) and Settings.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

Enable / disable plugins:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plugins"/> → &#10003;

[Read more](../plugins/index.md) about OsmAnd plugins.


### How to use map

Map is a core element of OsmAnd and it's important to know [how to use it](../map/interact-with-map.md) (gestures, buttons, etc). You could [configure map](../map/configure-map-menu.md) to your needs: [change map style](../map/configure-map-menu.md#map-style-parameters), configure different [map layers](../map/configure-map-menu.md#map-layers) such as favorites, poi, public transport, tracks, contour lines, hillshade and others.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configure map Android](@site/static/img/settings/configure_map_menu_android.png) ![Configure map example Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure map iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Configure map example iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Read more](../map/configure-map-menu.md) about map configuration.

### How to сonfigure screen

[Configure screen](../widgets/configure-screen.md) allows you to enable [Informational](../widgets/info-widgets.md) (altitude, speed, current time, etc.) & [Navigational](../widgets/nav-widgets.md) (destination, bearing, arrival time, etc.) widgets, [Quick action](../widgets/quick-action.md) and other elements that will be displayed over Map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configure screen Android](@site/static/img/widgets/configure_screen_android.png) ![Configure screen example Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure screen iOS](@site/static/img/settings/configure_screen_ios.png) ![Configure screen example iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Read more](../widgets/configure-screen.md) about Screen configuration.

### How to add personal data to maps

OsmAnd allows you to make various marks on the Map for your personal needs. For example, [Favorite points](../personal/favorites.md) - personal points with name & icon & category, [Markers](../personal/markers.md) - quickly added points as target, [Audio/Video notes](../plugins/audio-video-notes.md) - media notes recorded at specific point, [Tracks](../personal/tracks.md) - recorded and imported tracks & tours.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add personal data Andoroid](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add personal data iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Read more](../map/point-layers-on-map.md) about points on the map.

### How to browse & find point of interest

[Points of interest (POI)](../map/point-layers-on-map.md#points-of-interest-poi) are amenities that could be searched or highlighted on the map. They represent interesting or useful places and distributed as part of [Vector Maps](../map/vector-maps.md). You can use them to [display on the map](../map/point-layers-on-map.md#points-of-interest-poi), [navigate](../navigation/index.md) and [search](../search/search-poi.md) the points of interest on the Map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png) ![Search and display POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Multiple POI Selection](@site/static/img/settings/multiple_selection_iOS.png) ![Search and display POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Read more](../search/search-poi.md) about POI search.

### How to plan a route

[Plan route](../plan-route/create-route.md) is a powerful tool that allows to create a trip, edit an existing track and measure distance on the spot. You can quickly put intermediate points and connect them by various navigation lines (bike, pedestrian, straight line, etc). Results could be saved into a GPX file, so it could be [shared](../personal/tracks.md), [edited](../map/tracks-on-map.md) or [used by navigation](../navigation/gpx-navigation.md) later.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Plan route Android](@site/static/img/settings/plan_route_android.png) ![Plan route graph Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan route iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Read more](../plan-route/create-route.md) about plan route feature.

### How to search by address

OsmAnd provides many search capabilities including address search. By default it uses [OpenStreetMap data](https://nominatim.openstreetmap.org/ui/search.html) and should be able to find all addresses using Quick Search input. Also you can [search](../search/search-address.md) by city, street, postcode and coordinates. 

<Tabs groupId="operating-systems">

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

### How to start navigation

[Navigation](../navigation/index.md) provides you step by step guidance to your destination by displaying the route, offering turn-by-turn instructions, extra road information about surface, smoothness, etc and optional voice guidance.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Start navigation Android](@site/static/img/settings/start_navigation_android.png) ![Route graph Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Route graph iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Read more](../navigation/index.md) about navigation.

### How to record you trip

[Trip recording](../plugins/trip-recording.md) is a special tool packaged as OsmAnd plugin that allows to record all movements into track using the device's GPS.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trip recording Android](@site/static/img/settings/trip_recording_android.png) ![Overview trip recording Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start trip recording iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Trip recording menu iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Read more](../plugins/trip-recording.md) about trip recording.

### How to edit maps

OsmAnd powered by [OpenStreetMap](https://www.openstreetmap.org/) data. The maps are created by volunteer contributors, so they can have more or fewer details depending on how much work has been done at a certain part of the map. Anyone can register as a contributor and add or edit OSM maps. OsmAnd provides an editing plugin that helps to improve the OpenStreetMap. 

<Tabs groupId="operating-systems"> 

<TabItem value="android" label="Android">

![OSM note Android](@site/static/img/settings/osm_note_android.png) ![Create POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM note iOS](@site/static/img/settings/osm_note_ios.png) ![Create POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Read more](../plugins/osm-editing.md) about OSM editing.

## App shortcuts

[App shortcuts](https://support.google.com/android/answer/9450271) are available for the OsmAnd icon. Just long tap the OsmAnd icon on your device screen to open App shortcuts menu.
Here, you can click short tap for choosing next actions: _"Navigate to Home", "Navigate to Work", "Start Recording", "Search", "My places", "Navigate to"_. Long tap one of the actions allows you to add new action icon to your device screen.

Tapping to the action icon allows starting this action immediately.

![Shortcuts](@site/static/img/shortcuts/shortcuts1.png) ![Shortcuts](@site/static/img/shortcuts/shortcuts2.png)

## Privacy

It is an [open source](https://github.com/osmandapp/osmand), ads-free / tracker-free privacy focused application. In order to preserve maximum privacy, OsmAnd offers Offline maps as a first place, so no interaction, geo information is leaked from your device. We are very attentive to what data is collected and what data is transferred by network, you can read more in our [Privacy policy](https://osmand.net/help-online/privacy-policy). 

## Permissions

OsmAnd doesn't have any required permissions on iOS / Android version. 

**Essential**:
- **Internet** - initial download / update offline maps. Also could be needed to access online features such as [Street Level Imagery](../map/point-layers-on-map.md#-street-level-imagery), [Online photos](../map/map-context-menu.md#online-photos) or [Online maps](../map/raster-maps.md).
- **GPS** / **GSM Network** - determine your location, follow you in a navigation mode, record your trip (optional). This permission is asked when you click [my location button](../widgets/map-buttons.md#my-location--zoom) or when you [start navigation](../navigation/route-navigation.md).

**Optional**:
- **Camera/voice recording** (Android) - only used by [the Audio/Video notes](../plugins/audio-video-notes.md). This feature is packaged as plugin and by default disabled. It allows to quickly create location-related audio/video notes during a trip.

## Troubleshooting

If you have a specific question, please check [Troubleshooting](../troubleshooting/index.md) to have it answered.