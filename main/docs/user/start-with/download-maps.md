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



Downloading maps is a necessary action for further use of maps and offline navigation. You can download maps by viewing the list of regions in the main menu or by clicking on the desired area on the map.  

The application can not function normally without offline maps, which are not distributed in the application. Although the application supports [Vector maps](../map/vector-maps.md) and [Raster maps](../map/raster-maps.md), it is highly recommended that you start working with Offline Vector Maps so that all functions such as search, [Search](../search/index.md), [Navigation](../navigation/index.md),  [Context menu](../map/map-context-menu.md). 


## Download - First Screen

When you first launch the app, it suggests downloading a map based on your Internet location. If you are using a VPN, this may not be detected correctly, so you can select a different map region.  

**Note**: World map. Older versions of OsmAnd (< 3.8) offer a downloadable World map, so you can browse the map on a planetary scale. In newer versions of OsmAnd: a small "Mini World Overview Map" is packaged inside the app. A larger "World Overview Map," which contains more detailed information about the worldwide, can be downloaded.

**Note**: World map. Old versions of OsmAnd (< 3.8) suggest to download World map, so you could browse the map on the planet level zoom. In new OsmAnd versions: small "Mini world overview map" is packaged inside the app. You can download a large "World Overview Map" which contains more detailed information about the worldwide, but it is also provided with detailed maps.


![Download map](@site/static/img/settings/download_map.png)

## Download - Main menu

YYou can download new maps and manage already downloaded maps through the Main Menu:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres"/>

This screen has certain features:
- Refresh button - checks for available map updates on OsmAnd servers.
- Search button - search the region by names or large cities inside it.
- Map counter (Free version) - display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- Device memory - show available memory to be used on the device.
- All downloads / Worldwide - browse and download maps split by continents / countries / regions.
- Local / Installed - manage already downloaded maps.
- Updates - check and download monthly map updates.
- OsmAnd Live - configure hourly map updates for certain regions.

![Download maps regions](@site/static/img/settings/download_maps_regions.png)

## Download - Map Context menu

One of the option to download map is via World map and [Map Context menu](../map/map-context-menu.md). You can open Context menu by clicking on the Label, for example city name, or by long tap on the map, or by searching City via Search. Context menu will have a suggestion of the smallest region to download.

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region.png)

## Download / Manage - World Map

One way to download the map is to zoom out the World map and by short tap select the region to download. This area will be highlighted in yellow and on the bottom will appear a panel with the name of the region and an offer to download it or choose other maps.

![Short tap on the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

**Note**: At low zoom level map selected to download will be highlighted in yellow and maps that already downloaded will be highlighted in green, deactivated maps will be highlighted in orange. 'Deactivated' maps allow to speed up program in case you have many downloaded maps.

## Download - Map Zoom in
It is possible to download a map of a certain area just by zooming in on the World map. A notification "Download detailed map, to view the area" will appear at the top bar.

![Zoom in to download map Android](@site/static/img/settings/zoom_in_download_map_android.png)

**Note**: This dialog can be turned off  in <Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,dialogs_and_notifications_title"/>

## Download - Own map (Advanced)

There is a possibility to download created by yourself (in OsmAnd Map Creator) map. [Read more](../../technical/map-creation/create-offline-maps-yourself.md)

## Type of maps

You can download several types of maps: Standard, Roads-only (lightweight maps without details i.e. buildings, Android), [Contour lines](../map/vector-maps.md#contour-lines), [Hillshades](../map/raster-maps.md#hillshade--slope), [Slopes](../map/raster-maps.md#hillshade--slope), [Wikipedia](../plugins/wikipedia.md), [Travel guides (Wikivoyage)](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Voice packages](../navigation/voice-navigation.md), [Map fonts](../map/vector-maps.md#map-fonts-android), [Altitude correction (Android)](../widgets/info-widgets.md#altitude).

**[Read more](../personal/maps.md#type-of-maps)**.

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)
