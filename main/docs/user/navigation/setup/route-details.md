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


## Overview {#overview}

OsmAnd allows you to find the best route and explore its details. The app provides detailed information about the route such as distance, [travel time](#distance--time--co2), [surface type](#road-attributes), [elevation differences](#elevation-info), [CO2 footprint data](#distance--time--co2),and [turn information](#turn-by-turn-information). You can also [analyze](#analyze-on-map) the route on the map, find out information about track segments, [print](#print) the route plan, [save](#share--export-actions) the route, and share it with others. With this functionality, you will always know the route details and can plan your trip more efficiently.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### How to Access {#how-to-access}

After calculating a route in the [Navigation menu](./route-navigation.md#start--stop-navigation), you have access to "Details" about that route. This information is useful to use before starting a trip to improve route planning or to check information about the road ahead while driving.  
There are three ways to access the *Route Details menu*.  

1. Go to the main *Menu → Navigation*, set the route, and tap the *Details* button.
2. Tap the *Navigation* icon on the map screen, set the route, and tap the *Details* button.
3. Go to the *My Places* menu, tap any available track in the list *Menu → My Places → Tracks*, select the *Navigation* icon in the track context menu in the *Overview* and tap *Details*.  

Depending on the selected [profile settings](../../personal/profiles.md) and the selected [routing type](../../navigation/routing/osmand-routing.md#routing-types), some route details may not be displayed. In addition, the route details depend highly on the *OpenStreetMap data coverage*.


## Distance / Time / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Total distance*** is calculated between all route segments, including intermediate points in the selected [units](../../personal/profiles.md#units--formats).

- ***Estimated travel time*** is calculated as the total of times on each segment and time penalties on specific points. Each navigation profile has different rules for calculating speed on a segment and which penalties should be included (configured in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). For example, car and bicycle profiles take average speed per segment from OpenStreetMap data, but pedestrian, boat, and aircraft profiles use *default* speed from [Navigation Settings](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Estimated arrival time*** is calculated as a time from now in Local time of the origin using *Estimated travel time*.

- ***CO2 footprint data*** estimates roughly how much CO2 will be produced while following the route. You need to configure the [Fuel engine type](../guidance/navigation-settings.md#fuel-used-by-motor) in Vehicle parameters to get a more accurate approximation.


## Elevation Info {#elevation-info}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Elevation information** is provided in all OsmAnd offline route profiles, except for profiles that use [Straight line navigation](../routing/straight-line-routing.md). The elevation data is part of the OsmAnd Offline Maps and is calculated based on [Public SRTM sources](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Altitude range*. Displays minimum / maximum elevation on the route.
- *Average altitude*. Displays weighted average elevation on the route.
- *Uphill / downhill*. Displays the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope. The grade shows the maximum road slope in percent from your location point to the end of the visible graph, or for the selected section of the route without the location point visible on the screen.


***A license for DEM data used by OsmAnd for terrain detection***  
The altitude data on the map (between 70 degrees north latitude and 70 degrees south latitude) were obtained from measurements made as a part of the *Shuttle Radar Topography Mission (SRTM)*. It utilized the *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, the primary imaging tool in *NASA's Earth Observation System*. For complete information, see the [License](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) data</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. The original data used for this product was supplied by JAXA’s AW3D.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


### Elevation Graph {#elevation-graph}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

The [graphs](../../map/tracks/track-context-menu.md#altitude--speed-graphs) visually display information about the altitude and slope of your navigation route and your current position on this graph with the current altitude and slope. The graph is plotted on two axes. The X-axis is the distance on your route. The first Y-axis is the altitude above sea level, the value of which depends on the terrain, and the second Y-axis is the approximated [slope](https://en.wikipedia.org/wiki/Grade_(slope)). You can view the elevation graph for the entire route or only for a selected interval by scaling the graph.  

- ***Zoom in/out***. By default, the graph shows the route from the current location to your destination point. You can use [two-finger movements](../../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right, forward on the route, and backward to the current location. *Such manipulations also refer to the visual block of information in the [Road Attributes](#road-attributes) block.*  

- ***Location Pin***. If you want to see the information at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with altitude and slope percent will appear.  


## Analyze on Map {#analyze-on-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>  

**Analyze on map** tool is similar to the tool for viewing [track details](../../map/tracks/index.md#analyze-track-on-map) on the map. It allows you to view and visually interact with various graphs and see the selected point on the map.

If data is present, you can select one of the following types:

- *Y-axis*:
   - [*Altitude*](../../map/tracks/track-context-menu.md#altitude). This is the [process](https://wiki.openstreetmap.org/wiki/Altitude) of obtaining height above a fixed level.
   - [*Slope*](https://wiki.openstreetmap.org/wiki/Key:incline). The [slope of the landform](https://en.wikipedia.org/wiki/Grade_(slope)) means the tangent of the angle of inclination of the surface to the horizontal.
   - [*Speed*](../../map/tracks/track-context-menu.md#speed). Speed values when driving on a track.
   - Graphs with two types of data: &nbsp;*Altitude/Slope*, &nbsp;*Altitude/Speed*, &nbsp;*Slope/Speed*, &nbsp;*Animated zoom/Speed*.
- *X-axis*:
   - *Distance*. You can view route data that relates to the length of the route.
   - *Time*. You can view route data that relates to the time calculated for that route
   - *Time of day*. You can view route data at certain times of the day.


### Type of Interactions {#type-of-interactions}

- *Tap and Slide*. Tap the graph to display information about the track point and the movement along it. The graph highlights the location of the point on the map and displays information about it on the ruler.
- *Scale*. Scale graph by [two fingers gesture](../../map/interact-with-map.md#gestures).
- *Follow My location* (*Android only*). You can tap [My Location](../../map/interact-with-map.md#my-location-and-zoom) to synchronize the map view and graph with your location. As you move, the graph will shift from left to right, displaying information ahead of your path.  


## Road Attributes {#road-attributes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigation route Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Navigation route iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Road attributes are accessible in the [Route Details](#how-to-access) and display segment-related information from OpenStreetMap and Elevation data. The color indication is related to how specific attributes are rendered on the map (see [Map legend](../../map-legend/osmand.md#surface-smoothness)). The bar graphs are also interactive, and it's possible to see information at a specific location by tapping on the graph.

- [**Road type**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). The type of road is determined based on its functional purpose and characteristics, such as the number of lanes, speed limits, load capacity, the presence of pedestrian and bicycle paths, roadsides, and other parameters. Different types of roads may have different restrictions and traffic rules.  

   For example, main [highways](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) usually have a high-speed limit and can be divided into lanes, and [local roads](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) can have a low-speed limit and one lane in each direction.  

- [**Surface**](https://wiki.openstreetmap.org/wiki/Key:surface). Road surfaces are the top layer of pavement that comes into contact with the wheels of vehicles. They can be of different types depending on their properties and functional purpose.  

   For example, [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) pavement provides good traction and noise insulation, and [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) pavement is more durable and has a greater load capacity. Other materials such as gravel, crushed stone, wood boards, and others can also be utilized to create a road surface.  

- [**Steepness**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). This is a measurement of the angle of the slope of the road, expressed as a percentage. It indicates how steeply the road is sloped up or down relative to the horizon, and it is calculated by measuring the vertical change in road elevation by the horizontal distance and multiplying the resulting value by 100%.  

   For example, if the steepness of the road is 10%, that means for every 100 meters of horizontal distance along the road, you are going up or down 10 meters. The steepness of the road can affect your vehicle's speed, braking, fuel consumption, and driving safety, especially on slippery roads in the winter.  

- [**Surface firmness**](https://wiki.openstreetmap.org/wiki/Key:tracktype). The road surface can recover from deformation or load. The higher the surface firmness, the less chance of damage to the vehicle and the more comfortable the road will be. Surface firmness can also affect vehicle speed and fuel consumption.  

- [**Slope**](https://wiki.openstreetmap.org/wiki/Key:incline).  Indicates what percentage of slopes there are on your route.

- [**Smoothness**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Applicable for all types of paths and areas, such as highways, parking lots, beaches, and trails, and indicates the usability of the route. It gives you information that you can drive without significant risk of damage, such as vehicle undercarriage, or injury, such as a fall.  

- [**Winter and ice roads**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Shows the color scheme of the route according to the classification of [winter roads](../../map/vector-maps.md#winter-and-ski).  

- [**Difficulty of horse trails**](https://wiki.openstreetmap.org/wiki/Riding). This road attribute indicates the difficulty of the route while riding a horse. Suitable for [Horseback routing](../../navigation/routing/horse-routing.md).  


## Turn-by-Turn Information {#turn-by-turn-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Turn-by-turn information provides detailed [instructions](#instructions) on how to navigate a route. In addition to the *Details* menu, it is also displayed in the [*Route maneuvers*](../../widgets/nav-widgets.md#route-maneuvers) and [*Lanes*](../../widgets/nav-widgets.md#lanes) widgets. This information helps you to better navigate your route and allows you to plan ahead.

Tap a specific section of the route in the list to view detailed information or make changes as required. The map enlarges and a [Context menu](../../map/map-context-menu.md) opens.


### Instructions {#instructions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Instructions include information about moving along the route, such as:

- The [*next turn arrow*](../../widgets/nav-widgets.md#next-turn) and *its direction*.
- *Distance to maneuver*.
- A description of *what to do*, which includes the *name of the street or trail*.
- *Total distance* and *time of the route*.
- *[Lanes](../../widgets/nav-widgets.md#lanes) layout* for the current road.
- [*Road side indicator*](#roadside-indicator) (*iOS only*).


### Roadside Indicator {#roadside-indicator}

:::caution iOS only
This type of instruction is currently *not available for the Android* version of the OsmAnd app.
:::

![Side indication](@site/static/img/navigation/route/side_indication.png)

In the instruction list, the **roadside indicator** shows which direction from your current location and direction of movement to your final point is your destination, this can be left, right, and straight ahead.  

The angle between your destination (*[Bearing](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) from the latest point*) and the last segment (*Bearing to the latest 2 points of the route*) is measured, divided into 3 sectors of 120 degrees, and the result is that you can see in which direction your destination is.

- `-60 °`&nbsp; &nbsp; &nbsp; to &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - marked as **straight ahead**.
- `-180 °`&nbsp; &nbsp; to &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - marked as **left** side.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; to &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - marked as **right** side.


### Print {#print}

<InfoAndroidOnly/>

![route details](@site/static/img/navigation/route/route_details_print-2.png)  

The **Print** feature of a turn-by-turn route description can be useful if you prefer to have a physical copy of your route description instead of using electronic devices, or if you do not have access to navigation apps or GPS navigators, no Internet access, or if you need information for other people traveling with you.

A printed route description provides detailed *turn-by-turn instructions* on how to navigate your route, including the distance to the next turn, driving direction, and street or trail names, as well as distance and travel time information.  

This information can be useful when you are planning a trip and want to estimate the time and distance between different points on the route and determine the expected time of arrival.

The ability **to print** or **save** turn-by-turn information **in PDF format** is especially useful when traveling long distances or in unfamiliar places when you need to have a more detailed idea of the route and the time it takes to get there.


## Share / Export (Actions) {#share--export-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>  

The Route Details navigation section has options that allow you to perform certain actions with the route information.  

- [**Print**](#print). Allows you to print or save turn-by-turn route information.
- **Export/Save**. Allows you to save the route information **as a new track** for later offline use. The exported track contains all information about road attributes and turn instructions. So, [navigation by this track](./gpx-navigation.md) should provide all features as navigation by the route.
- **Share**. Shares an exported track or a link to the route which could be opened on another device with OsmAnd.


## Related Articles {#related-articles}

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](./route-navigation.md)
- [Navigation by track](./gpx-navigation.md)
- [Navigation by markers](./markers-navigation.md)
- [Navigation settings](../guidance/navigation-settings.md)
- [Map screen during navigation](../guidance/map-during-navigation.md)
- [Voice prompts / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Last updated: November 2024*
