---
sidebar_position: 2
---

import Translate from '@site/src/components/Translate.js';

# Download maps
Download maps is a necessarily action for further using map and navigation in offline mode. Maps can be downloaded both by browsing through the regions list from the main menu and by clicking on the needed territory on the map

Application is not properly functional without offline maps which are not distributed within application. Even though application supports [Vector maps](/osmand/map/vector-maps) and  [Raster maps](/osmand/map/raster-maps), it is highly recommend to start with Offline Vector Maps to get all features properly functioning such as [Search](/osmand/search), [Navigation](//osmand/navigation),  [Context menu](/osmand/map/map-context-menu). 

## Download - First Screen

When the app is launched for the first time, it suggests to download the map based on your internet location. It could be not correctly detected in case you are using VPN and it's possible to select another map region.

:::info

World map. Old versions of OsmAnd (< 3.8) suggest to download World map, so you could browse the map on the planet level zoom. In new OsmAnd versions: small "Mini world overview map" is packaged inside the app. There is a large "World overview map" available to download which contains more details worldwide but it is also provided with detailed maps.

:::


![Download map](/img/settings/download_map.png)

## Download - Main menu

You can download new maps and manage already downloaded maps via Main menu:  
**Android:** <Translate android="yes" ids="shared_string_menu,welmode_download_maps" />  
**iOS:** <Translate ios="yes" ids="menu,res_mapsres" />

This screen has certain features:
* Refresh button - check available map updates on the OsmAnd servers.
* Search button - search the region by names or large cities inside it.
* Map counter (Free version) - display how many [Free map downloads](/osmand/purchases/android#free-and-paid-features) left.
* Device memory - show available memory to be used on the device.
* All downloads / Worldwide - browse and download maps split by continents / countries / regions.
* Local / Installed - manage already downloaded maps.
* Updates - check and download monthly map updates.
* OsmAnd Live - configure hourly map updates for certain regions.

![Download maps regions](/img/settings/download_maps_regions.png)

## Map Context menu

One of the option to download map is via World map and [Map Context menu](/osmand/map/map-context-menu). You can open Context menu by clicking on the Label, for example city name, or by long tap on the map, or by searching City via Search. Context menu will have a suggestion of the smallest region to download.

![Tap on the map download region](/img/settings/tap_on_the_map_download_region.png)

## Download / Manage - World Map

One way to download the map is to zoom out the World map and by short tap select the region to download. This area will be highlighted in yellow and on the bottom will appear a panel with the name of the region and an offer to download it or choose other maps.

![Short tap on the World map allows to download region map](/img/map/download_region_map_via_worldmap.png)

:::note

At low zoom level map selected to download will be highlighted in yellow and maps that already downloaded will be highlighted in green, deactivated maps will be highlighted in orange. 'Deactivated' maps allow to speed up program in case you have many downloaded maps.

:::


## Map Zoom in
It is possible to download a map of a certain area just by zooming in on the World map. A notification "Download detailed map, to view the area" will appear at the top bar.

![Zoom in to download map Android](/img/settings/zoom_in_download_map_android.png)

**Note**: This dialog can be turned off in <Translate android="yes" ids="shared_string_menu,shared_string_settings,osmand_settings,dialogs_and_notifications_title" />


## Own map (Advanced)

There is a possibility to download created by yourself (in OsmAnd Map Creator) map. [Read more](/development/map-creation/create-offline-maps-yourself)

## Type of maps

You can download several types of maps: Standard, Roads-only (lightweight maps without details i.e. buildings, Android), [Coutour lines](/osmand/map/vector-maps#contour-lines), [Hillshades](/osmand/map/raster-maps#hillshade--slope), [Slopes](/osmand/map/raster-maps#hillshade--slope), [Wikipedia](/osmand/plugins/wikipedia), [Travel guides (Wikivoyage)](/osmand/plan-route/travel-guides), [Nautical maps](/osmand/plugins/nautical-charts), [Voice packages](/osmand/navigation/voice-navigation), [Map fonts](/osmand/map/vector-maps#map-fonts-android), [Altitude correction (Android)](/osmand/widgets/info-widgets#altitude).

**[Read more](/osmand/personal/maps#type-of-maps)**.

![Download map menu Android](/img/settings/download_map_menu_android.png) ![Regionwide maps Android](/img/settings/regionwide_maps_menu.png)




