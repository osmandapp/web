---
sidebar_position: 1
---
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

# First steps
Welcome to OsmAnd! Explore how to download maps, how to configure the application, how to use map and build a route, how to start navigation and how to search points of interest. Get acquainted with key points of OsmAnd Privacy policy and required Permissions.

<!-- {% default %}

![Travel maps Android](/img/settings/google_play_screen_android.png) ![Offline navigation Android](/img/settings/google_play_screen1_android.png) 

{% enddefault %}

{% android %}

![Offline navigation Android](/img/settings/google_play_screen1_android.png) 

{% endandroid %}

{% ios %}

![Offline navigationiOS](/img/settings/itunes_screen_ios.png)

{% endios %} -->

## Install OsmAnd
OsmAnd is a mobile application for Maps and Navigation available for **Android** and **iOS**. You can download it on most popular Markets.

**Android markets**:
<AndroidStore/>

**iOS**:
<AppleStore/>

[Read more](/osmand/purchases) about OsmAnd versions and Purchases.  

## Welcome to OsmAnd!

Our goal is to create a fully functional map-oriented application that could be used offline & online for various purposes. The application is full of features, so you don't need to switch between different apps and you will have everything at your fingertips:
- Browse Worldwide Map with lots of details displayed with [many map styles](/osmand/map/vector-maps).
- Display,  [search](/osmand/search/search-poi) and save various [Points of interest](/osmand/map/point-layers-on-map).
- [Plan a route](/osmand/plan-route/create-route) by car, bicycle, foot and combine into multi modal routes.
- Start [voice guided navigation](/osmand/navigation/route-navigation) with screen on and off.
- Make your tourist trip rich with offline [Wikipedia](/osmand/plugins/wikipedia) and [Wikivoyage](/osmand/plan-route/travel-guides).
- Fully customize how [the map is displayed](/osmand/map/configure-map-menu) and what [widgets](/osmand/widgets) are displayed on it.
- Navigate [by boat](/osmand/navigation/boat-navigation), [by a given track](/osmand/navigation/gpx-navigation), [by public transport](/osmand/navigation/public-transport-navigation) and [offroad](/osmand/navigation/markers-navigation).
- Everything works in **Offline Mode**!
- And don't forget to contribute to [OpenStreetMap](https://www.openstreetmap.org/) with the [OSM Editing Plugin](/osmand/plugins/osm-editing).

## Actions Guide

### How to download maps

{% data reusables.general.android-ios-switcher %}

OsmAnd is an offline map application, so after the '{% data variables.android-values.get_started %}' screen, you will be prompted to a [download map](/osmand/start-with/download-maps#download---first-screen) of your region. You can select another region or skip this step and download maps later. 

{% default %}
<img src={require('/img/settings/download_map1_ios.png').default} alt="First download screen iOS"/>
<img src={require('/img/settings/download_map_android.png').default} alt="Map"/>

{% enddefault %}

{% android %}

![Show on the map](/img/settings/download_map1_android.png) ![Map](/img/settings/map_android.png)

{% endandroid %}

{% ios %}

![Show on the map](/img/settings/download_map1_ios.png) ![Map](/img/settings/map_ios.png)

{% endios %}

**Note**: Application is not properly functional without offline maps which are not distributed within the application. Even though application supports [Vector maps](/osmand/map/vector-maps) and  [Raster maps](/osmand/map/raster-maps), it is highly recommended to start with Offline Vector Maps to get all features properly functioning such as [Search](/osmand/search), [Navigation](//osmand/navigation),  [Context menu](/osmand/map/map-context-menu). 

[Read more](/osmand/start-with/download-maps) about download map options.

### How to manage your settings

{% data reusables.general.android-ios-switcher %}

You could manage application settings as [Global settings](/osmand/personal/global-settings) or as [Profile configuration](/osmand/personal/profiles) via [Main menu](/osmand/start-with/main-menu). Application comes with a predefined list of profiles that could be modified later. Each profile could be considered as a customized map application for specific purposes. By default profiles are being served only as different navigation modes.

{% default %}

![Manage profile iOS](/img/settings/manage_profile_ios.png) ![Configure profile Android](/img/settings/configure_profile_android.png)

{% enddefault %}

{% android %}

![Manage profile Android](/img/settings/manage_profile_android.png) ![Configure profile Android](/img/settings/configure_profile_android.png)

{% endandroid %}

{% ios %}

![Manage profile iOS](/img/settings/manage_profile_ios.png) ![Configure profile iOS](/img/settings/configure_profile_ios.png)

{% endios %}

[Read more](/osmand/personal/global-settings) about Global settings.
[Read more](/osmand/personal/profiles) about Profile settings.

### How to configure plugins

{% data reusables.general.android-ios-switcher %}

[Plugins](/osmand/plugins) allow greatly to extend application functionality. Plugins could be internal (provided inside OsmAnd) or external (separate installed applications). 3rd party plugins work via [OsmAnd API](/development/build-osmand/osmand-api) and could get access to OsmAnd information, you could always review / enable / disable plugins via [Main menu](/osmand/start-with/main-menu) → Plugins. Each plugin could have its own [Map Actions](/osmand/map/map-context-menu), [Map Layers](/osmand/map/configure-map-menu), [Map Downloads](/osmand/start-with/download-maps) and Settings.

{% default %}

![Enable plugins Android](/img/settings/plugins_enable_android.png) ![Plugin example Android](/img/settings/plugin_example_android.png)

{% enddefault %}

{% android %}

![Enable plugins Android](/img/settings/plugins_enable_android.png) ![Plugin example Android](/img/settings/plugin_example_android.png)

{% endandroid %}

{% ios %}

![Enable plugins iOS](/img/settings/plugins_enable_ios.png) ![Plugin example iOS](/img/settings/plugin_example_ios.png)

{% endios %}

Enable / disable plugins:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugin_settings %} →  &#65049; → Enable

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.plugins %} → &#10003; .

[Read more](/osmand/plugins) about OsmAnd plugins.


### How to use map

{% data reusables.general.android-ios-switcher %}

Map is a core element of OsmAnd and it's important to know [how to use it](/osmand/map/interact-with-map) (gestures, buttons, etc). You could [configure map](/osmand/map/configure-map-menu) to your needs: [change map style](/osmand/map/configure-map-menu#map-style-parameters), configure different [map layers](/osmand/map/configure-map-menu#map-layers) such as favorites, poi, public transport, tracks, contour lines, hillshade and others.

{% default %}

![Configure map Android](/img/settings/configure_map_menu_android.png) ![Configure map example iOS](/img/settings/configure_map_example_ios.png)

{% enddefault %}

{% android %}

![Configure map Android](/img/settings/configure_map_menu_android.png) ![Configure map example Android](/img/settings/configure_map_example_android.png)

{% endandroid %}

{% ios %}

![Configure map iOS](/img/settings/configure_map_menu_ios.png) ![Configure map example iOS](/img/settings/configure_map_example_ios.png)

{% endios %}

[Read more](osmand/map/configure-map-menu) about map configuration.

### How to сonfigure screen

{% data reusables.general.android-ios-switcher %}

[Configure screen](/osmand/widgets/configure-screen) allows you to enable [Informational](/osmand/widgets/info-widgets) (altitude, speed, current time, etc.) & [Navigational](/osmand/widgets/nav-widgets) (destination, bearing, arrival time, etc.) widgets, [Quick action](/osmand/widgets/quick-action) and other elements that will be displayed over Map.

{% default %}

![Configure screen Android](/img/widgets/configure_screen_android.png) ![Configure screen example iOS](/img/settings/configure_screen_example_ios.png)

{% enddefault %}

{% android %}

![Configure screen Android](/img/widgets/configure_screen_android.png) ![Configure screen example Android](/img/settings/configure_screen_example_android.png)

{% endandroid %}

{% ios %}

![Configure screen iOS](/img/settings/configure_screen_ios.png) ![Configure screen example iOS](/img/settings/configure_screen_example_ios.png)

{% endios %}

[Read more](/osmand/widgets/configure-screen) about Screen configuration.

### How to add personal data to maps

{% data reusables.general.android-ios-switcher %}

OsmAnd allows you to make various marks on the Map for your personal needs. For example, [Favorite points](/osmand/personal/favorites) - personal points with name & icon & category, [Markers](/osmand/personal/markers) - quickly added points as target, [Audio/Video notes](/osmand/plugins/audio-video-notes) - media notes recorded at specific point, [Tracks](/osmand/personal/tracks) - recorded and imported tracks & tours.

{% default %}

![Add personal data Andoroid](/img/settings/personal_data_android.png) ![Add personal data iOS](/img/settings/personal_data_ios.png)

{% enddefault %}

{% android %}

![Add personal data Andoroid](/img/settings/personal_data_android.png)

{% endandroid %}

{% ios %}

![Add personal data iOS](/img/settings/personal_data_ios.png)

{% endios %}

[Read more](/osmand/map/point-layers-on-map) about points on the map.

### How to browse & find point of interest

{% data reusables.general.android-ios-switcher %}

[Points of interest (POI)](/osmand/map/point-layers-on-map#points-of-interest-poi) are amenities that could be searched or highlighted on the map. They represent interesting or useful places and distributed as part of [Vector Maps](/osmand/map/vector-maps). You can use them to [display on the map](/osmand/map/point-layers-on-map#points-of-interest-poi), [navigate](/osmand/navigation) and [search](/osmand/search/search-poi) the points of interest on the Map.

{% default %}

![Multiple POI Selection](/img/map/multiple_selection_android.png) ![POI on the map](/img/settings/poi_on_the_map.png)

{% enddefault %}

{% android %}

![Multiple POI Selection](/img/map/multiple_selection_android.png) ![Search and display POI Android](/img/map/search_display_poi_android.png)

{% endandroid %}

{% ios %}

![Multiple POI Selection](/img/settings/multiple_selection_iOS.png) ![Search and display POI iOS](/img/settings/search_display_poi_iOS.png)

{% endios %}

[Read more](/osmand/search/search-poi) about POI search.

### How to plan a route

{% data reusables.general.android-ios-switcher %}

[Plan route](/osmand/plan-route/create-route) is a powerful tool that allows to create a trip, edit an existing track and measure distance on the spot. You can quickly put intermediate points and connect them by various navigation lines (bike, pedestrian, straight line, etc). Results could be saved into a GPX file, so it could be [shared](/osmand/personal/tracks), [edited](/osmand/map/tracks-on-map) or [used by navigation](/osmand/navigation/gpx-navigation) later.

{% default %}

![Plan route iOS](/img/settings/plan_route_ios.png) ![Plan route graph Android](/img/settings/plan_route_graph_android.png)

{% enddefault %}

{% android %}

![Plan route Android](/img/settings/plan_route_android.png) ![Plan route graph Android](/img/settings/plan_route_graph_android.png)

{% endandroid %}

{% ios %}

![Plan route iOS](/img/settings/plan_route_ios.png)

{% endios %}

[Read more](/osmand/plan-route/create-route) about plan route feature.

### How to search by address

{% data reusables.general.android-ios-switcher %}

OsmAnd provides many search capabilities including address search. By default it uses [OpenStreetMap data](https://nominatim.openstreetmap.org/ui/search.html) and should be able to find all addresses using Quick Search input. Also you can [search](/osmand/search/search-address) by city, street, postcode and coordinates. 

{% default %}

![Address search Android](/img/settings/address_search_android.png) ![Address search example](/img/settings/address_search_example_android.png) 

{% enddefault %}

{% android %}

![Address search Android](/img/settings/address_search_android.png) ![Search result Android](/img/settings/address_search_result_android.png)

{% endandroid %}

{% ios %}

![Address search iOS](/img/settings/address_search_ios.png) ![Search result iOS](/img/settings/address_search_result_ios.png)

{% endios %}

**Note:** You need to download the map before searching for an address there. Also, if your current location is too far from your searching address you might need to increase the searching radius. 

[Read more](/osmand/search/search-address) about address search.

### How to start navigation

{% data reusables.general.android-ios-switcher %}

[Navigation](/osmand/navigation) provides you step by step guidance to your destination by displaying the route, offering turn-by-turn instructions, extra road information about surface, smoothness, etc and optional voice guidance.

{% default %}

![Start navigation iOS](/img/settings/start_navigation_ios.png) ![Route graph Android](/img/settings/route_graph_android.png)

{% enddefault %}

{% android %}

![Start navigation Android](/img/settings/start_navigation_android.png) ![Route graph Android](/img/settings/route_graph_android.png)

{% endandroid %}

{% ios %}

![Start navigation iOS](/img/settings/start_navigation_ios.png) ![Route graph iOS](/img/settings/route_graph_ios.png)

{% endios %}

[Read more](/osmand/navigation) about navigation.

### How to record you trip

{% data reusables.general.android-ios-switcher %}

[Trip recording](/osmand/plugins/trip-recording) is a special tool packaged as OsmAnd plugin that allows to record all movements into track using the device's GPS.

{% default %}

![Trip recording menu iOS](/img/settings/trip_recording_ios.png) ![Overview trip recording Android](/img/settings/trip_recording_overview_android.png)

{% enddefault %}

{% android %}

![Trip recording Android](/img/settings/trip_recording_android.png) ![Overview trip recording Android](/img/settings/trip_recording_overview_android.png)

{% endandroid %}

{% ios %}

![Start trip recording iOS](/img/settings/trip_recording_start_ios.png) ![Trip recording menu iOS](/img/settings/trip_recording_ios.png)

{% endios %}

[Read more](/osmand/plugins/trip-recording) about trip recording.

### How to edit maps

{% data reusables.general.android-ios-switcher %}

OsmAnd powered by [OpenStreetMap](https://www.openstreetmap.org/) data. The maps are created by volunteer contributors, so they can have more or fewer details depending on how much work has been done at a certain part of the map. Anyone can register as a contributor and add or edit OSM maps. OsmAnd provides an editing plugin that helps to improve the OpenStreetMap. 

{% default %}

![OSM note iOS](/img/settings/osm_note_ios.png) ![Create POI Android](/img/settings/create_poi_menu_android.png)

{% enddefault %}


{% android %}

![OSM note Android](/img/settings/osm_note_android.png) ![Create POI Android](/img/settings/create_poi_menu_android.png)

{% endandroid %}

{% ios %}

![OSM note iOS](/img/settings/osm_note_ios.png) ![Create POI iOS](/img/settings/create_poi_ios.png)

{% endios %}

[Read more](/osmand/plugins/osm-editing) about OSM editing. 

## Privacy

It is an [open source](https://github.com/osmandapp/osmand), ads-free / tracker-free privacy focused application. In order to preserve maximum privacy, OsmAnd offers Offline maps as a first place, so no interaction, geo information is leaked from your device. We are very attentive to what data is collected and what data is transferred by network, you can read more in our [Privacy policy](https://osmand.net/help-online/privacy-policy). 

## Permissions

OsmAnd doesn't have any required permissions on iOS / Android version. 

**Essential**:
- **Internet** - initial download / update offline maps. Also could be needed to access online features such as [Street Level Imagery](/osmand/map/point-layers-on-map#-street-level-imagery), [Online photos](/osmand/map/map-context-menu#online-photos) or [Online maps](/osmand/map/raster-maps).
- **GPS** / **GSM Network** - determine your location, follow you in a navigation mode, record your trip (optional). This permission is asked when you click [my location button](/osmand/widgets/map-buttons#my-location--zoom) or when you [start navigation](/osmand/navigation/route-navigation).

**Optional**:
- **Camera/voice recording** (Android) - only used by [the Audio/Video notes](/osmand/plugins/audio-video-notes). This feature is packaged as plugin and by default disabled. It allows to quickly create location-related audio/video notes during a trip.

## Troubleshooting

If you have a specific question, please check [Troubleshooting](/osmand/troubleshooting) to have it answered.

