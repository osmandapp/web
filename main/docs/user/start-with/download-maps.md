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



Download maps is a necessarily action for further using map and navigation in offline mode. Maps can be downloaded both by browsing through the regions list from the main menu and by clicking on the needed territory on the map

Application is not properly functional without offline maps which are not distributed within application. Even though application supports [Vector maps](../map/vector-maps) and  [Raster maps](../map/raster-maps), it is highly recommend to start with Offline Vector Maps to get all features properly functioning such as [Search](../search), [Navigation](../navigation),  [Context menu](../map/map-context-menu). 

## Download - First Screen

When the app is launched for the first time, it suggests to download the map based on your internet location. It could be not correctly detected in case you are using VPN and it's possible to select another map region.

**Note**: World map. Old versions of OsmAnd (< 3.8) suggest to download World map, so you could browse the map on the planet level zoom. In new OsmAnd versions: small "Mini world overview map" is packaged inside the app. There is a large "World overview map" available to download which contains more details worldwide but it is also provided with detailed maps.

![Download map](@site/static/img/settings/download_map.png)

## Download - Main menu

You can download new maps and manage already downloaded maps via Main menu:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres"/>

This screen has certain features:
- Refresh button - check available map updates on the OsmAnd servers.
- Search button - search the region by names or large cities inside it.
- Map counter (Free version) - display how many [Free map downloads](../purchases/android#free-and-paid-features) left.
- Device memory - show available memory to be used on the device.
- All downloads / Worldwide - browse and download maps split by continents / countries / regions.
- Local / Installed - manage already downloaded maps.
- Updates - check and download monthly map updates.
- OsmAnd Live - configure hourly map updates for certain regions.

![Download maps regions](@site/static/img/settings/download_maps_regions.png)

## Download - Map Context menu

One of the option to download map is via World map and [Map Context menu](../map/map-context-menu). You can open Context menu by clicking on the Label, for example city name, or by long tap on the map, or by searching City via Search. Context menu will have a suggestion of the smallest region to download.

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

There is a possibility to download created by yourself (in OsmAnd Map Creator) map. [Read more](/docs/technical/map-creation/create-offline-maps-yourself)

## Type of maps

You can download several types of maps: Standard, Roads-only (lightweight maps without details i.e. buildings, Android), [Coutour lines](../map/vector-maps#contour-lines), [Hillshades](../map/raster-maps#hillshade--slope), [Slopes](../map/raster-maps#hillshade--slope), [Wikipedia](../plugins/wikipedia), [Travel guides (Wikivoyage)](../plan-route/travel-guides), [Nautical maps](../plugins/nautical-charts), [Voice packages](../navigation/voice-navigation), [Map fonts](../map/vector-maps#map-fonts-android), [Altitude correction (Android)](../widgets/info-widgets#altitude).

**[Read more](../personal/maps#type-of-maps)**.

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)