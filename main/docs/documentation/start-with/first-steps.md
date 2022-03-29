---
sidebar_position: 1
title:  First steps
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

Welcome to OsmAnd! Explore how to download maps, how to configure the application, how to use map and build a route, how to start navigation and how to search points of interest. Get acquainted with key points of OsmAnd Privacy policy and required Permissions.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Travel maps Android](@site/static/img/settings/google_play_screen_android.png) ![Offline navigation Android](@site/static/img/settings/google_play_screen1_android.png) 

</TabItem>

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

[![Google play](@site/static/img/steps/en-play-badge.png)](https://play.google.com/store/apps/details?id=net.osmand) [![Huawei](@site/static/img/steps/huawei-app-gallery-badge.png)](https://appgallery.huawei.com/#/app/C101486545) [![Amazon](@site/static/img/steps/amazon-apps-store.png)](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8/ref=sr_1_3?dchild=1&keywords=osmand&qid=1616685559&sr=8-3)

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

[![iOS](@site/static/img/steps/app-store-badge.png)](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257)

[Read more](/docs/documentation/purchases) about OsmAnd versions and Purchases.  

## Welcome to OsmAnd!

Our goal is to create a fully functional map-oriented application that could be used offline & online for various purposes. The application is full of features, so you don't need to switch between different apps and you will have everything at your fingertips:
- Browse Worldwide Map with lots of details displayed with [many map styles](/docs/documentation/map/vector-maps).
- Display,  [search](/docs/documentation/search/search-poi) and save various [Points of interest](/docs/documentation/map/point-layers-on-map).
- [Plan a route](/docs/documentation/plan-route/create-route) by car, bicycle, foot and combine into multi modal routes.
- Start [voice guided navigation](/docs/documentation/navigation/route-navigation) with screen on and off.
- Make your tourist trip rich with offline [Wikipedia](/docs/documentation/plugins/wikipedia) and [Wikivoyage](/docs/documentation/plan-route/travel-guides).
- Fully customize how [the map is displayed](/docs/documentation/map/configure-map-menu) and what [widgets](/docs/documentation/widgets) are displayed on it.
- Navigate [by boat](/docs/documentation/navigation/boat-navigation), [by a given track](/docs/documentation/navigation/gpx-navigation), [by public transport](/docs/documentation/navigation/public-transport-navigation) and [offroad](/docs/documentation/navigation/markers-navigation).
- Everything works in **Offline Mode**!
- And don't forget to contribute to [OpenStreetMap](https://www.openstreetmap.org/) with the [OSM Editing Plugin](/docs/documentation/plugins/osm-editing).

## Actions Guide

### How to download maps

OsmAnd is an offline map application, so after the '{% data variables.android-values.get_started %}' screen, you will be prompted to a [download map](/docs/documentation/start-with/download-maps#download---first-screen) of your region. You can select another region or skip this step and download maps later. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![First download screen iOS](@site/static/img/settings/download_map1_ios.png) ![Map](@site/static/img/settings/map_android.png) 

</TabItem>

<TabItem value="android" label="Android">

![Show on the map](@site/static/img/settings/download_map1_android.png) ![Map](@site/static/img/settings/map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show on the map](@site/static/img/settings/download_map1_ios.png) ![Map](@site/static/img/settings/map_ios.png)

</TabItem>

</Tabs>

**Note**: Application is not properly functional without offline maps which are not distributed within the application. Even though application supports [Vector maps](/docs/documentation/map/vector-maps) and  [Raster maps](/docs/documentation/map/raster-maps), it is highly recommended to start with Offline Vector Maps to get all features properly functioning such as [Search](/docs/documentation/search), [Navigation](/docs/documentation/navigation),  [Context menu](/docs/documentation/map/map-context-menu). 

[Read more](/docs/documentation/start-with/download-maps) about download map options.

### How to manage your settings

You could manage application settings as [Global settings](/docs/documentation/personal/global-settings) or as [Profile configuration](/docs/documentation/personal/profiles) via [Main menu](/docs/documentation/start-with/main-menu). Application comes with a predefined list of profiles that could be modified later. Each profile could be considered as a customized map application for specific purposes. By default profiles are being served only as different navigation modes.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Manage profile iOS](@site/static/img/settings/manage_profile_ios.png) ![Configure profile Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="android" label="Android">

![Manage profile Android](@site/static/img/settings/manage_profile_android.png) ![Configure profile Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage profile iOS](@site/static/img/settings/manage_profile_ios.png) ![Configure profile iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/personal/global-settings) about Global settings.
[Read more](/docs/documentation/personal/profiles) about Profile settings.

### How to configure plugins

[Plugins](/docs/documentation/plugins) allow greatly to extend application functionality. Plugins could be internal (provided inside OsmAnd) or external (separate installed applications). 3rd party plugins work via [OsmAnd API](/docs/technical-documentation/build-osmand/osmand-api) and could get access to OsmAnd information, you could always review / enable / disable plugins via [Main menu](/docs/documentation/start-with/main-menu) → Plugins. Each plugin could have its own [Map Actions](/docs/documentation/map/map-context-menu), [Map Layers](/docs/documentation/map/configure-map-menu), [Map Downloads](/docs/documentation/start-with/download-maps) and Settings.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="android" label="Android">

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

Enable / disable plugins:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugin_settings %} →  &#65049; → Enable

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.plugins %} → &#10003; .

[Read more](/docs/documentation/plugins) about OsmAnd plugins.


### How to use map

Map is a core element of OsmAnd and it's important to know [how to use it](/docs/documentation/map/interact-with-map) (gestures, buttons, etc). You could [configure map](/docs/documentation/map/configure-map-menu) to your needs: [change map style](/docs/documentation/map/configure-map-menu#map-style-parameters), configure different [map layers](/docs/documentation/map/configure-map-menu#map-layers) such as favorites, poi, public transport, tracks, contour lines, hillshade and others.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Configure map Android](@site/static/img/settings/configure_map_menu_android.png) ![Configure map example iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Configure map Android](@site/static/img/settings/configure_map_menu_android.png) ![Configure map example Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure map iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Configure map example iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/map/configure-map-menu) about map configuration.

### How to сonfigure screen

[Configure screen](/docs/documentation/widgets/configure-screen) allows you to enable [Informational](/docs/documentation/widgets/info-widgets) (altitude, speed, current time, etc.) & [Navigational](/docs/documentation/widgets/nav-widgets) (destination, bearing, arrival time, etc.) widgets, [Quick action](/docs/documentation/widgets/quick-action) and other elements that will be displayed over Map.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Configure screen Android](@site/static/img/widgets/configure_screen_android.png) ![Configure screen example iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Configure screen Android](@site/static/img/widgets/configure_screen_android.png) ![Configure screen example Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure screen iOS](@site/static/img/settings/configure_screen_ios.png) ![Configure screen example iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/widgets/configure-screen) about Screen configuration.

### How to add personal data to maps

OsmAnd allows you to make various marks on the Map for your personal needs. For example, [Favorite points](/docs/documentation/personal/favorites) - personal points with name & icon & category, [Markers](/docs/documentation/personal/markers) - quickly added points as target, [Audio/Video notes](/docs/documentation/plugins/audio-video-notes) - media notes recorded at specific point, [Tracks](/docs/documentation/personal/tracks) - recorded and imported tracks & tours.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Add personal data Andoroid](@site/static/img/settings/personal_data_android.png) ![Add personal data iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Add personal data Andoroid](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add personal data iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/map/point-layers-on-map) about points on the map.

### How to browse & find point of interest

[Points of interest (POI)](/docs/documentation/map/point-layers-on-map#points-of-interest-poi) are amenities that could be searched or highlighted on the map. They represent interesting or useful places and distributed as part of [Vector Maps](/docs/documentation/map/vector-maps). You can use them to [display on the map](/docs/documentation/map/point-layers-on-map#points-of-interest-poi), [navigate](/docs/documentation/navigation) and [search](/docs/documentation/search/search-poi) the points of interest on the Map.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png) ![POI on the map](@site/static/img/settings/poi_on_the_map.png)

</TabItem>

<TabItem value="android" label="Android">

![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png) ![Search and display POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Multiple POI Selection](@site/static/img/settings/multiple_selection_iOS.png) ![Search and display POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/search/search-poi) about POI search.

### How to plan a route

[Plan route](/docs/documentation/plan-route/create-route) is a powerful tool that allows to create a trip, edit an existing track and measure distance on the spot. You can quickly put intermediate points and connect them by various navigation lines (bike, pedestrian, straight line, etc). Results could be saved into a GPX file, so it could be [shared](/docs/documentation/personal/tracks), [edited](/docs/documentation/map/tracks-on-map) or [used by navigation](/docs/documentation/navigation/gpx-navigation) later.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Plan route iOS](@site/static/img/settings/plan_route_ios.png) ![Plan route graph Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="android" label="Android">

![Plan route Android](@site/static/img/settings/plan_route_android.png) ![Plan route graph Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan route iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/plan-route/create-route) about plan route feature.

### How to search by address

OsmAnd provides many search capabilities including address search. By default it uses [OpenStreetMap data](https://nominatim.openstreetmap.org/ui/search.html) and should be able to find all addresses using Quick Search input. Also you can [search](/docs/documentation/search/search-address) by city, street, postcode and coordinates. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Address search Android](@site/static/img/settings/address_search_android.png) ![Address search example](@site/static/img/settings/address_search_example_android.png) 

</TabItem>

<TabItem value="android" label="Android">

![Address search Android](@site/static/img/settings/address_search_android.png) ![Search result Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Address search iOS](@site/static/img/settings/address_search_ios.png) ![Search result iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

**Note:** You need to download the map before searching for an address there. Also, if your current location is too far from your searching address you might need to increase the searching radius. 

[Read more](/docs/documentation/search/search-address) about address search.

### How to start navigation

[Navigation](/docs/documentation/navigation) provides you step by step guidance to your destination by displaying the route, offering turn-by-turn instructions, extra road information about surface, smoothness, etc and optional voice guidance.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Start navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Route graph Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="android" label="Android">

![Start navigation Android](@site/static/img/settings/start_navigation_android.png) ![Route graph Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Route graph iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/navigation) about navigation.

### How to record you trip

[Trip recording](/docs/documentation/plugins/trip-recording) is a special tool packaged as OsmAnd plugin that allows to record all movements into track using the device's GPS.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Trip recording menu iOS](@site/static/img/settings/trip_recording_ios.png) ![Overview trip recording Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="android" label="Android">

![Trip recording Android](@site/static/img/settings/trip_recording_android.png) ![Overview trip recording Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start trip recording iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Trip recording menu iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/plugins/trip-recording) about trip recording.

### How to edit maps

OsmAnd powered by [OpenStreetMap](https://www.openstreetmap.org/) data. The maps are created by volunteer contributors, so they can have more or fewer details depending on how much work has been done at a certain part of the map. Anyone can register as a contributor and add or edit OSM maps. OsmAnd provides an editing plugin that helps to improve the OpenStreetMap. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![OSM note iOS](@site/static/img/settings/osm_note_ios.png) ![Create POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="android" label="Android">

![OSM note Android](@site/static/img/settings/osm_note_android.png) ![Create POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM note iOS](@site/static/img/settings/osm_note_ios.png) ![Create POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Read more](/docs/documentation/plugins/osm-editing) about OSM editing. 

## Privacy

It is an [open source](https://github.com/osmandapp/osmand), ads-free / tracker-free privacy focused application. In order to preserve maximum privacy, OsmAnd offers Offline maps as a first place, so no interaction, geo information is leaked from your device. We are very attentive to what data is collected and what data is transferred by network, you can read more in our [Privacy policy](https://osmand.net/help-online/privacy-policy). 

## Permissions

OsmAnd doesn't have any required permissions on iOS / Android version. 

**Essential**:
- **Internet** - initial download / update offline maps. Also could be needed to access online features such as [Street Level Imagery](/docs/documentation/map/point-layers-on-map#-street-level-imagery), [Online photos](/docs/documentation/map/map-context-menu#online-photos) or [Online maps](/docs/documentation/map/raster-maps).
- **GPS** / **GSM Network** - determine your location, follow you in a navigation mode, record your trip (optional). This permission is asked when you click [my location button](/docs/documentation/widgets/map-buttons#my-location--zoom) or when you [start navigation](/docs/documentation/navigation/route-navigation).

**Optional**:
- **Camera/voice recording** (Android) - only used by [the Audio/Video notes](/docs/documentation/plugins/audio-video-notes). This feature is packaged as plugin and by default disabled. It allows to quickly create location-related audio/video notes during a trip.

## Troubleshooting

If you have a specific question, please check [Troubleshooting](/docs/documentation/troubleshooting) to have it answered.