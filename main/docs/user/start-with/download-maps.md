---
sidebar_position: 2
title:  Download maps
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

Downloading maps is a necessary action for further use of maps and offline navigation. You can download maps by viewing the list of regions in the main menu or by clicking on the desired area on the map.  

The application can not function normally without offline maps, which are not distributed within the application. Although the application supports [Vector maps](../map/vector-maps.md) and [Raster maps](../map/raster-maps.md), it is highly recommended that you start working with Offline Vector Maps so that all functions such as [Search](../search/index.md), [Navigation](../navigation/index.md), [Context menu](../map/map-context-menu.md) work properlly.  


## First Screen

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/settings/start_screen_white_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map Ios](@site/static/img/settings/start_screen_white_ios.png)

</TabItem>

</Tabs>

When you first launch the app, it suggests downloading a map based on your Internet location. In the case of VPN usage, the app can propose a different (not your geolocation) map region.  
You can skip this step and restore your data from [OsmAnd Cloud](../personal/osmand-cloud.md).

:::tip Note
**World overview map**. Versions of OsmAnd prior to 3.8 suggest downloading World map so you can browse the map on the planet-level zoom. In new OsmAnd versions small *Mini world overview map* is packaged inside the app. However afterward, you can download a larger *World Overview map* which contains more detailed information about the world.  
:::


## Download 

### Type of Maps (world) 

сюда можно и список перенести с хорошим описанием

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

You can download several types of maps: Standard, Roads-only (lightweight maps without details i.e. buildings), [Contour lines](../map/vector-maps.md#contour-lines), [Hillshade](../map/raster-maps.md#hillshade--slope), [Slope](../map/raster-maps.md#hillshade--slope), [Wikipedia](../plugins/wikipedia.md), [Travel guides (Wikivoyage)](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Voice packages](../navigation/guidance/voice-navigation.md), [Map fonts](../map/vector-maps.md#map-fonts-android), [Altitude correction](../widgets/info-widgets.md#altitude).

**[Read more about types of maps](../personal/maps.md#type-of-maps)**.

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)

</TabItem>
<TabItem value="ios" label="iOS">

You can download several types of maps: Standard, Roads-only (lightweight maps without details i.e. buildings), [Contour lines](../map/vector-maps.md#contour-lines), [Hillshade](../map/raster-maps.md#hillshade--slope), [Slope](../map/raster-maps.md#hillshade--slope), [Wikipedia](../plugins/wikipedia.md), [Nautical maps](../plugins/nautical-charts.md).

**[Read more about types of maps](../personal/maps.md#type-of-maps)**.

![Download map menu iOS](@site/static/img/settings/download_map_menu_ios.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu_ios.png)  

</TabItem>

</Tabs>

### Map types

There are several map types available to download and manage:
- Standard - a fully packaged OsmAnd map based on [OpenStreetMap](https://www.openstreetmap.org/) source, they provide map, routing, address, POI, public transport information, . 
- Roads-only (Android) - a smaller by size map comparing to Standard due to removed map details such as buildings & points on the map.
- [Coutour lines](../map/vector-maps.md#contour-lines) - a map that contains the elevation contour lines.
- [Hillshades](../map/raster-maps.md#hillshade--slope) - a raster map with hillshade information.
- [Slopes](../map/raster-maps.md#hillshade--slope) - a raster map with slopes information. 
- [Online and cached tile maps](../map/raster-maps.md) - a custom map source for online maps, could be installed as 3rd party map or as OsmAnd Tiles. 
- [Wikipedia](../plugins/wikipedia.md) - a vector map that provides Geo located Articles as POIs from [Wikipedia](https://wikipedia.org/).
- [Travel guides / Wikivoyage](../plan-route/travel-guides.md) - a vector map that has a collection of Articles (Text as HTML + GPX file) for example [Wikivoyage](https://www.wikivoyage.org/).
- [Nautical maps](../plugins/nautical-charts.md) - a vector map that provide sea depth elevation as points or as lines.
- [Voice packages](../navigation/guidance/voice-navigation.md) - a voice package that provides sounds and configuration how to guide you in the navigation mode.
- [Map fonts (Android)](../map/vector-maps.md#map-fonts-android) - additional fonts files used to render text on the map.
- [Altitude correction (Android)](../widgets/info-widgets.md#altitude) - a special map file that provides correction for geoid on Android devices (optional).
- Other maps - maps that couldn't be attached to current maps hierarchy, typically represents deprecated and not supported maps or maps that will be available next release.

:::note
For regions like Germany consisted of many maps, you can use bulk map downloads, it is depicted as double download arrows next to the map type.
:::

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)


### Download Maps

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

You can download new maps and manage already downloaded maps through the Main Menu:

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps"/>_

**This screen has certain features**

Top screen buttons:
- _Refresh button_ &#10227; - checks for available map updates on OsmAnd servers.
- _Search button_ &#x1F50D; - search the region by names or large cities inside it.

Memory info and map counter:
- Map counter (Free version) - display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- [Device memory](../personal/storage.md#storage-info-in-download-maps-menu) - show available memory to be used on the device.

Map search:
- &#x1F50D; - search the region by names or large cities inside it.

Screens:
- _All downloads / Worldwide_ - browse and download maps split by continents / countries / regions / types.
- _Local / Installed_ - manage already downloaded maps.
- _Updates_ - check and download monthly map updates.
  - _[OsmAnd Live](../personal/maps.md#osmand-live)_ - configure hourly map updates for certain regions.

![Download maps regions](@site/static/img/settings/download_maps_regions.png)

</TabItem>

<TabItem value="ios" label="iOS">

You can download new maps and manage already downloaded maps through the Main Menu:

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,res_mapsres"/>_

**This screen has certain features**

Top screen buttons:
- _Refresh button_ &#10227; - checks for available map updates on OsmAnd servers.
- _Search button_ &#x1F50D; - search the region by names or large cities inside it.

Memory info and map counter:  
- _Map counter (Free version)_ - display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- _[Device memory](../personal/storage.md#storage-info-in-download-maps-menu)_ - show available memory to be used on the device.

Maps part:
- _All downloads / Worldwide_ - browse and download maps split by continents / countries / regions.
- _Local / Installed_ - manage already downloaded maps.
- _Updates_ - check and download monthly map updates.
  - _[Live updates](../personal/maps.md#osmand-live)_ - configure hourly map updates for certain regions.

![Download maps regions](@site/static/img/settings/download_maps_regions_ios.png)

</TabItem>
</Tabs>


### Select on World Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

One way to download the map is to zoom out the World map and by short tap select the region to download. This area will be highlighted in yellow and on the bottom will appear a panel with the name of the region and an offer to download it or choose other maps.

![Short tap on the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

One way to download the map is to zoom out the World map and by short tap select the region to download. This area will be highlighted in yellow and on the bottom will appear a panel with the name of the region and an offer to download it or choose other maps.

![Short tap on the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

**Note**: At low zoom level map selected to download will be highlighted in yellow and maps that already downloaded will be highlighted in green, deactivated maps will be highlighted in orange. 'Deactivated' maps allow to speed up program in case you have many downloaded maps.


### Search

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

It is possible to find and to download a map from the [search function](../search/index.md).

Just write a country or region name, and you see a map file on the finding list. Click on a country name to start downloading.

![Search function to download map Android](@site/static/img/settings/search_2_download_map_android.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

It is possible to find and to download a map from the [search function](../search/index.md).

Just write a country or region name, and you see a map file on the finding list. Click on a country name and start downloading process from [Map Context menu](#map-context-menu).

![Search function to download map iOS](@site/static/img/settings/search_download_map_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_2_download_map_ios.png) 

</TabItem>

</Tabs>


### Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

One of the option to download map is via World map and [Map Context menu](../map/map-context-menu.md). You can open Context menu by clicking on the Label, for example city name, or by long tap on the map, or by searching City via Search. Context menu will have a suggestion of the smallest region to download.

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region.png) 

</TabItem>

<TabItem value="ios" label="iOS">

One of the option to download map is via World map and [Map Context menu](../map/map-context-menu.md). You can open Context menu by clicking on the Label, for example city name, or by long tap on the map, or by searching City via Search. Context menu will have a suggestion of the smallest region to download.

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region_ios.png) 

</TabItem>

</Tabs>


## Manage 

### Local Resources

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Local tab *(<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>)* contains all the information about storage usage, split by data type into 3 large sections:  

- ***Resources***: [Standard Maps](../map/vector-maps.md), [Wikipedia](../plugins/wikipedia.md) and [Travel maps](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Terrain maps](../plugins/contour-lines.md), [Weather maps](../plugins/weather.md),  [Map sources](../map/raster-maps.md), [Rendering styles](../map/vector-maps.md#default-map-styles), Routing, Cache.
- ***My Places***: [Favorites](../personal/favorites.md), [Tracks](../personal/tracks.md), [OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), [OSM Edits](../plugins/osm-editing.md#osm-editing-layer), [A/V Notes](../plugins/audio-video-notes.md), [Map markers](../personal/markers.md), [History](../personal/global-settings.md#history), Itinerary.
- ***Settings***: [Profiles](../personal/profiles.md), Other.

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

:::note
The sections are arranged as the amount of memory they take decreases.
:::

</TabItem>

<TabItem value="ios" label="iOS">  

* Tap on a map folder in the your maps list.
* Delete.

![Download map menu iOS](@site/static/img/settings/download_map_menu_ios.png)

</TabItem>

</Tabs> 

> NOTE. Deactivated maps


### Build your own Map (advanced)

There is a possibility to download created by yourself (in OsmAnd Map Creator) map. [Read more](../../technical/map-creation/create-offline-maps-yourself.md)

