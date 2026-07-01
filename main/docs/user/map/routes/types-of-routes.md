---
sidebar_position: 12
title:  Types of Routes
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


## Overview {#overview}

Routes represent different outdoor activities using data from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Tapping **the shield icon with a route number or route flag** on the map will open a context menu that provides additional information about the route and allows using it as part of navigation.

You can configure the filtering of some route types in the [Configure Map](../../map/configure-map-menu.md) menu.

## Cycle {#cycle}

[Cycle routes](https://wiki.openstreetmap.org/wiki/Cycle_routes) are present in three types: *local* (`lcn`), *regional* (`rcn`), *national* (`ncn`), *international* (`icn`). Also, cycle routes could be part of [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). You can choose how to assign color to the route segments:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

You can find more information in the [Map Legend](../../map-legend/osmand.md#cycling) article.


## Mountain bike {#mountain-bike}

MTB routes have a specific mapping in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) and could be selected separately from cycling routes.

- ***<Translate android="true" ids="mtb_scale"/>***.  Shows trails according to the MTB scale. More information is in the [Map Legend](../../map-legend/osmand.md#mtb) article.  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Hiking / Walking {#hiking--walking}

[Hiking routes](https://wiki.openstreetmap.org/wiki/Walking_Routes) are present in four types: *local* (`lwn`), *regional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Also, walking routes could be part of [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd doesn't separate walking and hiking routes and combines them into 1 group. You can choose how to assign color to the route segments:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colors routes according to their individual [local color](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (if available in OpenStreetMap) and the tourist shield symbol.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colors by [network affiliation](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colors routes according to the type of [node network](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional, or local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Dirt Bike Trails {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

The **Dirt Bike Trails** feature allows you to display dirt bike-specific routes on the map based on the `dirtbike:scale` tag. This scale highlights trails suitable for dirt biking, with a colored overlay showing difficulty levels ([Map Legend](../../map-legend/osmand.md#dirtbike-scale)).  

You can activate this feature in *Menu → Configure map → Routes → Dirt bike routes*. The system functions similarly to the MTB scale, offering a visual representation of routes tailored to dirt biking — more about the [`dirtbike` tag can be found here](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Climbing Routes {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd supports *climbing areas* (`climbing=area`) and *climbing crags* (`climbing=crag`), allowing you to find [rock climbing](https://wiki.openstreetmap.org/wiki/Climbing) locations directly on the map.

- **Climbing areas** represent **larger zones** where multiple climbing routes exist.

- **Climbing crags** refer to **specific rock formations** or walls suitable for climbing.

- These locations include **detailed attributes** such as:

    - *Climbing grade* (e.g., UIAA, French, YDS).
    - *Rock type* (e.g., limestone, granite).
    - *Route length* (in meters).
    - *Climbing quality* (solid, loose, mixed).
    - *Summit log availability*.

To enable climbing locations on the map, go to: *Menu → Configure Map → Routes → Climbing Routes*.


## Hiking Trails Difficulty Grade {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Some road segments could be part of many routes, but they could be individually colored to represent the difficulty of the segment in mountainous areas. Currently, OsmAnd supports Italian and Swiss classifications, and each has a specific list of equipment requirements to access this segment.  

1. [SAC scale](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI scale](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Ski slopes and routes {#ski-slopes-and-routes}

- _Ski slopes and routes_ in _Winter and Ski_ map style.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Ski slopes and routes_ in _OsmAnd default_ map style.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Ski slopes and routes are a specific group of [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typically, these routes could be used with [Winter and Ski](../../map/map-styles.md#winter-and-ski) map style with all visible [Pistes](https://wiki.openstreetmap.org/wiki/Pistes). If another map style is active, a banner is shown suggesting a switch to [Winter and Ski](../../map/map-styles.md#winter-and-ski) (*Android only*) and only Slopes are shown. Tap ***Switch*** to change the map style without leaving the current screen, or ***Later*** to hide the banner.


## Snowmobile trails {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Snowmobile trails are mapped in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) as `route=snowmobile`. They are used for winter recreation and to connect remote areas during the snow season. In OsmAnd, snowmobile trails are clickable, see [Actions with Routes](./index.md#actions-with-routes) section.


## Horse routes {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Horse routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) are displayed as color-indicated routes with symbols for horseback riding.  


## Whitewater sports {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Whitewater routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) are shown together with access icons, hazard areas, and nearby rapids for [whitewater tourism](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). See [Whitewater features](../../map-legend/osmand.md#whitewater-features) in the Map Legend for rapid grades, river section grades, and related symbols.


## Running {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Running routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap are used for named, numbered, or otherwise marked running routes, primarily for athletics.


## Fitness trails {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

A [fitness trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) is a trail or path equipped with obstacles or stations along its length to exercise the human body to improve health.  


## Travel {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Travel routes are part of custom [Travel book](../../plan-route/travel-guides.md) (`travel.obf`) files, which can be generated from the [user's routes](https://osmand.net/blog/routes#generated-travel-routes) or be part of additional [plugins](../../plugins/index.md).  

You can customize the display of certain ***Travelbooks*** and types of ***tracks***, display tracks as points, or ***Point groups*** (for example for Wikivoyage travel books). Learn more about [Travel guides here](../../plan-route/travel-guides.md).


## Related Articles {#related-articles}

- [Configure Map](../../map/configure-map-menu.md)
- [Map Legend](../../map-legend/osmand.md)
- [Routes](./index.md)