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


Downloading maps is a necessary action for further use of maps and offline navigation. You can download maps by viewing the list of regions in the main menu or by clicking on the desired area on the map.  

The application can not function normally without offline maps, which are not distributed within the application. Although the application supports [Vector maps](../map/vector-maps.md) and [Raster maps](../map/raster-maps.md), it is highly recommended that you start working with Offline Vector Maps so that all functions such as [Search](../search/index.md), [Navigation](../navigation/index.md), [Context menu](../map/map-context-menu.md) work properlly.  

## First Screen

When you first launch the app, it suggests downloading a map based on your Internet location. In the case of VPN usage, the app can propose a different (not your geolocation) map region.  
You can skip this step and restore your data from [OsmAnd Cloud](../personal/osmand-cloud.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/settings/start_screen_white_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map Ios](@site/static/img/settings/start_screen_white_ios.png)

</TabItem>

</Tabs>


:::tip Note
**World overview map**. Versions of OsmAnd prior to 3.8 suggest downloading World map so you can browse the map on the planet-level zoom. In new OsmAnd versions small *Mini world overview map* is packaged inside the app. However afterward, you can download a larger *World Overview map* which contains more detailed information about the world.  
:::

## Main menu

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

## Map Context menu


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

## Manage - World Map


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


## Search


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




## Own map (Advanced)

There is a possibility to download created by yourself (in OsmAnd Map Creator) map. [Read more](../../technical/map-creation/create-offline-maps-yourself.md)

## Type of maps

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

## Local - Downloaded Maps

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

The Local tab *(<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>)* shows how much space OsmAnd uses in a form of linear diagram and a list with splitting by each data type. All data is grouped into three sections, sorted by largest section on top. The diagram's colors and slice size correspond to the section and amount of memory it uses:  

- ***Resources*** (blue): [Standard Maps](../map/vector-maps.md), [Wikipedia](../plugins/wikipedia.md) and [Travel maps](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Terrain maps](../plugins/contour-lines.md), [Weather maps](../plugins/weather.md),  [Map sources](../map/raster-maps.md), [Rendering styles](../map/vector-maps.md#default-map-styles), Map fonts, Voice prompts (recorded and TTS), Cache.  
- ***My Places*** (yellow): [Favorites](../personal/favorites.md), [Tracks](../personal/tracks.md), [OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), [OSM Edits](../plugins/osm-editing.md#osm-editing-layer), [A/V Notes](../plugins/audio-video-notes.md), [Map markers](../personal/markers.md), [History](../personal/global-settings.md#history), Itinerary.
- ***Settings*** (green): [Profiles](../personal/profiles.md), Other.

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

### Data type overview and toolbar

If you choose a category from the Local tab and tap it, you will see a diagram, that shows how much space the chosen category uses from the total amount of section space.

![Local category overview Android 1](@site/static/img/settings/local_category_sorting_options_andr_1.png) ![Local category options Android 2](@site/static/img/settings/local_category_sorting_options_andr_2.png)  

Above the graph, there is a toolbar with options available for this type of data. In most cases (except standard maps) there are only two options available:

- **Search** (magnifying glass) - allows searching by name for a specific data only in selected folder
- **Three dots menu**  
 
After tapping on the three dots in the right corner of the toolbar, you can access additional actions:
- **Select** - allows selecting items and perform further actions only with them
- **Import** - redirects to internal storage where you can select a file to import

You can also perform some actions with an item from the list using the tree dots menu, located at the right corner of an every single entry.

![Local category item actions](@site/static/img/settings/local_category_actions.png) ![Local category item actions 2](@site/static/img/settings/local_category_actions_2.png)  

For most data categories, only the *Info* option available. If you tap this option, you will be redirected to the *[Local data item overview](#local-data-item-overview)* screen. For maps there are [additional actions](#local-maps-overview-and-actions).

#### Local data item overview

On the Local data item overview screen you can find information about data type, size, and creation date of a single entry stored by OsmAnd.

![Local data item overview](@site/static/img/settings/local_category_overview_2.png)

### Local maps Overview and actions

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)


</TabItem>

<TabItem value="ios" label="iOS">  


* Tap on a map folder in the your maps list.
* Delete.

![Download map menu iOS](@site/static/img/settings/download_map_menu_ios.png)

</TabItem>

</Tabs> 


> NOTE. Deactivated maps
