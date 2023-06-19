---
sidebar_position: 4
title:  Route Details
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

<InfoIncompleteArticle/>


## Overview

OsmAnd allows you to find the best route and explore all of its details. The app provides detailed information about the route such as distance, [travel time](#distance--time--co2), [surface type](#road-attributes), [elevation differences](#elevation-info), and [turn information](#turn-by-turn-information). You can also [analyze](#analyse-on-map) the route on the map, find out information about track segments, [print](#print-for-android) the route plan, [save](#save--export--share) the route, and share it with others. With this functionality, you will always be aware of the route details and can plan your trip more efficiently.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_main-info.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png)

</TabItem>

</Tabs>


### How to access

You can access Route Details from the [Navigation menu](./route-navigation.md#start--stop-navigation) once route  is calculaetd. You can use them before you start your trip, to improve your planning, and during your trip.  
There are three ways to access the Route Details menu.   

1. Go to the main *Menu → Navigation*, set the route, and tap the *Details* button.
2. Tap the *Navigation* icon on the map screen, set the route, and tap the *Details* button.
3. Go to the *My Places* menu, tap any available track in the list *Menu → My Places → Tracks*, select the *Navigation* icon in the track context menu in the *Overview* and tap *Details*.  

Depending on the selected [profile settings](../../personal/profiles.md) and the selected [routing type](../routing/#routing-types), some route details may not be displayed. Also route details is highly dependent on the OpenStreetMap data coverage.


## Distance / time / CO2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_andr.png)    ![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_andr2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_ios.png)

</TabItem>

</Tabs>

- The *Total distance* is calculated between all route segments including intermediate points in the selected [units](../../personal/profiles.md#units--formats). 

- *Estimated travel time* is calculated as the total of times on each segment and time penalties on specific points. Each navigation profile has different rules for calculating speed on a segment and which penalties should be included (configured in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). For example, car and bicycle profiles take average speed per segment from OpenStreetMap data, but pedestrian, boat, and aircraft profiles use Default speed from [Navigation Settings](../guidance/navigation-settings.md#default-speed--road-speeds).

- *Estimated arrival time* is calculated as a time from now in Local time of the origin using *Estimated travel time*.

- *CO2 footprint data* provides a rough estimation of how much CO2 will be produced while following the route. You need to configure the [Fuel engine type](../guidance/navigation-settings.md#fuel-used-by-motor) in Vehicle parameters to get a more accurate approximation.


## Elevation info

Elevation information is provided in all OsmAnd offline route profiles, with the exception of profiles that use Straight line navigation. The elevation data is part of the OsmAnd Offline Maps and is calculated based on [Public SRTM sources](https://www.wikiwand.com/en/Shuttle_Radar_Topography_Mission).

- *Altitude range* - displays minimum / maximum elevation on the route.
- *Average altitude* - displays weighted average elevation on the route.
- *Uphill / downhill* - displays the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope. The grade shows the maximum road slope in percent from your location point to the end of the visible graph or for the selected section of the route without the location point visible on the screen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_info-block_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>


### Elevation graph

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_graph_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_graph_ios.png)

</TabItem>

</Tabs>

The [graphs](../../map/track-context-menu.md#altitude--speed-graphs) visually displays information about the altitude and slope of your navigation route and your current position on this graph with the current altitude and slope. The graph is plotted on two axes. The X-axis is the distance on your route. The first Y-axis is the altitude above sea level, the value of which depends on the terrain and second Y-axis is the approimxated [slope](https://www.wikiwand.com/en/Grade_(slope)). You can view elevation graph for the entire route or only for a selected interval by scaling the graph.  

- ***Zoom in/out***. By default, the graph shows the route from the current location to your destination point. You can use [two-finger movements](../../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right, forward on the route, and backward to the current location. *Such manipulations also refer to the visual block of information in the [Road Attributes](#road-attributes) block.*   

- ***Location Pin***. If you want to see the information at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with  altitude and slope percent will appear.  


## Analyse on map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_analiz.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png)

</TabItem>

</Tabs>  

This tool is similar to a tool to view [track details](../../map/tracks-on-map.md#analyze-track-on-map) on the map. It allows you to view and visually interact with different graphs and see select point on the map.

If data is present you can select one of the following types:
- *Y-axis*. 
   - *Altitude*
   - *Slope*
   - *Speed*
   - *Altitude/Slope*
   - *Altitude/Speed*
   - *Slope/Speed*
- *X-axis*. 
   - *Distance*
   - *Time*
   - *Time of day*

### Type of interactions

- *Tap and Slide*. Tap the Graph to display information about the track point and the movement along it. The graph highlights the location of the point on the map and displays information about it on the ruler.
- *Scale*. Scale Graph by [two fingers gesture](../../map/interact-with-map.md#gestures). 
- *Follow My location*. You can tap [My Location](../../map/interact-with-map.md#my-location--zoom) to synchronize the map view and graph with your location. As you move, the graph will shift from left to right, displaying information ahead of your path.  


## Road attributes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/route_details_attributes_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Road attributes are accessible in the Route Details and display segments related information from OpenStreetMap and Elevation data. The color indication is related to how specific attributes are rendered on the map (see [Map legend](../../map-legend/osmand.md#surface-smoothness)). The bar graphs are also interactive and it's possible to see information at specific location by taping on the graph.

- [**Road type**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads) - The type of road is determined based on its functional purpose and characteristics, such as the number of lanes, speed limits, load capacity, the presence of pedestrian and bicycle paths, roadsides, and other parameters. Different types of roads may have different restrictions and traffic rules. For example, main [highways](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) usually have a high speed limit and can be divided into lanes, and [local roads](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) can have a low speed limit and one lane in each direction.  

- [**Surface**](https://wiki.openstreetmap.org/wiki/Key:surface) - Road surfaces are the top layer of pavement that comes into contact with the wheels of vehicles. They can be of different types depending on their properties and functional purpose. For example, [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) pavement provides good traction and noise insulation, and [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) pavement is more durable and has greater load capacity. Other materials such as gravel, crushed stone, wood boards, and others can also be used to create a road surface.  

- [**Steepness**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines) - This is a measurement of the angle of the slope of the road, expressed as a percentage. It indicates how steeply the road is sloped up or down in relation to the horizon and is calculated by measuring the vertical change in road elevation by the horizontal distance and multiplying the resulting value by 100%. For example, if the steepness of the road is 10%, that means for every 100 meters of horizontal distance along the road, you are going up or down 10 meters. The steepness of the road can affect your vehicle's speed, braking, fuel consumption, and driving safety, especially on slippery roads in the winter.  

- [**Surface firmness**](https://wiki.openstreetmap.org/wiki/Key:tracktype) - It is the ability of the road surface to recover from deformation or load. The higher the surface firmness, the less chance of damage to the vehicle and the more comfortable the road will be. Surface firmness can also affect vehicle speed and fuel consumption.  

- [**Slope**](https://wiki.openstreetmap.org/wiki/Key:incline) - Shows what percentage of slopes there are on your route.   

- [**Smoothness**](https://wiki.openstreetmap.org/wiki/Key:smoothness) - Applies to all types of paths and areas, such as highways, parking lots, beaches, trails, and indicates the usability of the route. Gives information that you can drive without significant risk of damage, such as vehicle undercarriage, or injury, such as by falling.  

- [**Winter and ice roads**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads) - Shows the color scheme of the route according to the classification of [winter roads](../../map/vector-maps.md#winter-and-ski).  

- [**Difficulty of horse trails**](https://wiki.openstreetmap.org/wiki/Riding) - This road attribute indicates the difficulty of the route while riding a horse. Suitable for [Horseback routing](../../navigation/routing/horse-routing.md).  


## Turn-by-turn information (Android)

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)  

Turn-by-turn information provides brief instructions for navigating your route, including the next turn, the distance to the turn, the direction of the turn, and the name of the street or trail. Turn information is displayed in the [Next turns](../../widgets/nav-widgets.md#next-turns) and [Lanes](../../widgets/nav-widgets.md#lanes) widgets, and it provides safe and efficient real-time navigation, and allows the driver to better navigate the road.

To view detailed information about specific sections of the route or to make necessary changes, you need to tap this section in the list. The map will zoom in to it and a [Context menu](../../map/map-context-menu.md) will open.  


### Print

![route details](@site/static/img/navigation/route/route_details_print-2.png)  

The **Print** feature of a turn-by-turn route description can be useful if you prefer to have a physical copy of your route description instead of using electronic devices, or if you do not have access to navigation apps or GPS navigators, no Internet access, or if you need information for other people traveling with you.

A printed route description provides detailed turn-by-turn instructions on how to navigate your route, including the distance to the next turn, driving direction, and street or trail names, as well as distance and travel time information. This information can be useful when you are planning a trip and want to estimate the time and distance between different points on the route and determine the expected time of arrival.

The ability **to print** or **save** turn-by-turn information **in pdf format** is especially useful when traveling long distances or in unfamiliar places when you need to have a more detailed idea of the route and the time it takes to get there.


## Share / Export (Actions)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>  

The Route Details navigation section has options that allow you to perform certain actions with the route information.  

- [**Print**](#print) - allows you to print or save turn-by-turn route information.
- **Export/Save** - allows you to save the route information **as a new track** for later offline use. The exported track contains all information about road attributes, turn instructions. So [navigation by this track](./gpx-navigation.md)  should provide all features as navigation by the route.
- **Share** - shares an exported track or a link to the route which could be opened on another device with OsmAnd.