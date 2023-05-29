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

The OsmAnd allows you to find the best route and explore all of its details. The app provides detailed information about the whole route, including distance, [travel time](#distance--time--co2), [surface type](#road-attributes), [elevation differences](#elevation-info), and [turn information](#turn-by-turn-information). You can also [analyze](#analyse-on-map) the route on the map, find out information about track segments, [print](#print-for-android) the route plan, [save](#save--export--share) the route, and share it with others. With this functionality, you will always be aware of the route details and can plan your trip more efficiently.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_main-info.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png)

</TabItem>

</Tabs>


### How to open

The route information from the Details section of the navigation menu of the app is only available when the track has already been calculated. You can use them before you start your trip, to improve your planning, and during your trip.  
There are three ways to access the Route Details menu.   

1. Go to the main *Menu → Navigation*, set the route, and tap the *Details* button.
2. Tap the *Navigation* icon on the map screen, set the route, and tap the *Details* button.
3. Go to the *My Places* menu, tap any available track in the list *Menu → My Places → Tracks*, select the *Navigation* icon in the track context menu in the *Overview* and tap *Details*.  

Depending on the selected [profile settings](../../personal/profiles.md) and the selected [routing type](../routing/#routing-types), route details may not be fully displayed. The availability of map section information, GPS data, terrain, and road information also affects the display of a number of details.    


## Distance / time / CO2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_andr.png)    ![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_andr2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_ios.png)

</TabItem>

</Tabs>

- The *Total distance* of your route in the selected [units](../../personal/profiles.md#units--formats). The distance is calculated taking into account all intermediate sections of the course. 

- *Estimated travel time* and *Estimated arrival time* values are calculated from the average speed based on the previously selected [settings](../setup/route-navigation.md) and the actual time of day.  

- In order to see information about [*CO2 footprint data*](../../navigation/guidance/navigation-settings.md#fuel-used-by-motor), you need to select the engine type in the vehicle parameters.  


## Elevation info

The main block with the graph contains the following information:

1. [Total distance, time and CO2 information](#distance--time--co2). 
2. [The graph](#the-graph).
4. [The information block](#information-block) with *Average altitude*, *Altitude range*, *Uphill* (or *Ascent* for iOS), *Downhill* (or *Descent* for iOS).
5. [*Analyse on map*](#analyse-on-map) button for Android or *Analyse* button for iOS.


#### Information block

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_info-block_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>


### The graph

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_graph_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_graph_ios.png)

</TabItem>

</Tabs>

The [graphs](../../map/track-context-menu.md#altitude--speed-graphs) visually displays information about the altitude and slope of your navigation route and your current position on this graph with the current altitude and slope. The graph is plotted on two axes. The X-axis is the distance of your route. The Y-axis is the altitude above sea level, the value of which depends on the terrain.  

All values are specified either for the entire route or only for the selected interval by scaling the graph.  

- ***Location Pin***. The data on the graph of your ***Current location*** contains the location icon, altitude, and percent slope value.  
- ***Additional information***. The right (for Android) or left (for iOS) side of the graph contains data about the highest altitude and slope, the average value for both, and the lowest altitude and slope on the selected section of the route visible on the graph.  
- ***Grade*** is the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope. The grade shows the maximum road slope in percent from your location point to the end of the visible graph or for the selected section of the route without the location point visible on the screen.  


#### The graph can be scaled

- *Zoom in/out*. By default, the graph shows the route from the current location to your destination point. You can use [two-finger movements](../../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right, forward on the route, and backward to the current location. *Such manipulations also refer to the visual block of information in the [Road Attributes](#road-attributes) block.*   
- *Place a point on the graph*. If you want to see the information at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with the values will appear.  


## Analyse on map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_analiz.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png)

</TabItem>

</Tabs>  

This [tool](../../map/tracks-on-map.md#analyze-track-on-map) allows you to view track information with additional graph and map data.  

- *Graph data on the Y-axis*. Displays the different types of data, if any in the track information. 
   - *Altitude*
   - *Slope*
   - *Speed*
   - *Altitude/Slope*
   - *Altitude/Speed*
   - *Slope/Speed*
- *X-axis graph dimension*. Shows Distance, or Time, or Time of day.
- *Tap and Slide*. Tap the Graph to display information about the track point and the movement along it. The graph highlights the location of the point on the map and displays information about it on the ruler.
- *Scale*. Scale Graph by [two fingers gesture](../../map/interact-with-map.md#gestures). 
- *Follow My location*. Tap [My Location](../../map/interact-with-map.md#my-location--zoom) to synchronize the map view and graph with your location. The *scale of the graph* remains unchanged, and the *information on the bars* is fixed at the 1/4 mark on the left. As you move, the graph will shift from left to right, displaying information ahead of your path.  


## Road attributes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/route_details_attributes_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

To find out how particular road attributes are displayed on the map, see [this section](../../map-legend/osmand.md#routes) of the documentation.    

- [**Road type**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads) - The type of road is determined based on its functional purpose and characteristics, such as the number of lanes, speed limits, load capacity, the presence of pedestrian and bicycle paths, roadsides, and other parameters. Different types of roads may have different restrictions and traffic rules. For example, main [highways](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) usually have a high speed limit and can be divided into lanes, and [local roads](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) can have a low speed limit and one lane in each direction.  

- [**Surface**](https://wiki.openstreetmap.org/wiki/Key:surface) - Road surfaces are the top layer of pavement that comes into contact with the wheels of vehicles. They can be of different types depending on their properties and functional purpose. For example, [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) pavement provides good traction and noise insulation, and [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) pavement is more durable and has greater load capacity. Other materials such as gravel, crushed stone, wood boards, and others can also be used to create a road surface.  

- [**Steepness**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines) - This is a measurement of the angle of the slope of the road, expressed as a percentage. It indicates how steeply the road is sloped up or down in relation to the horizon and is calculated by measuring the vertical change in road elevation by the horizontal distance and multiplying the resulting value by 100%. For example, if the steepness of the road is 10%, that means for every 100 meters of horizontal distance along the road, you are going up or down 10 meters. The steepness of the road can affect your vehicle's speed, braking, fuel consumption, and driving safety, especially on slippery roads in the winter.  

- [**Surface firmness**](https://wiki.openstreetmap.org/wiki/Key:tracktype) - It is the ability of the road surface to recover from deformation or load. The higher the surface firmness, the less chance of damage to the vehicle and the more comfortable the road will be. Surface firmness can also affect vehicle speed and fuel consumption.  

- [**Slope**](https://wiki.openstreetmap.org/wiki/Key:incline) - Shows what percentage of slopes there are on your route.   

- [**Smoothness**](https://wiki.openstreetmap.org/wiki/Key:smoothness) - Applies to all types of paths and areas, such as highways, parking lots, beaches, trails, and indicates the usability of the route. Gives information that you can drive without significant risk of damage, such as vehicle undercarriage, or injury, such as by falling.  

- [**Winter and ice roads**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads) - Shows the color scheme of the route according to the classification of [winter roads](../../map/vector-maps.md#winter-and-ski).  

- [**Difficulty of horse trails**](https://wiki.openstreetmap.org/wiki/Riding) - This road attribute indicates the difficulty of the route while riding a horse. Suitable for [Horseback routing](../../navigation/routing/horse-routing.md).  

- **Speed and Altitude** 


## Turn-by-turn information

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)  

Turn-by-turn information provides brief instructions for navigating your route, including the next turn, the distance to the turn, the direction of the turn, and the name of the street or trail. Turn information is best displayed in the [Next turns](../../widgets/nav-widgets.md#next-turns) and [Lanes](../../widgets/nav-widgets.md#lanes) widgets, and it provides safe and efficient real-time navigation, and allows the driver to better navigate the road.

To view detailed information about specific sections of the route or to make necessary changes, you need to tap this section in the list. The map will zoom in to it and a [Context menu](../../map/map-context-menu.md) will open.  


## Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>  

The Route Details navigation section has options that allow you to perform certain actions with the route information.  

- [**Print**](#print) button is only available in the Android version of the OsmAnd app. It allows you to print or save turn-by-turn route information.
- [**Save**](#save-as-a-new-track) button allows you to save the route information **as a new track** for later use.
- [**Export**](#export-button-for-ios) button combines several actions for the iOS version of the OsmAnd app. The main one is to export route information in [GPX format](../../../technical/osmand-file-formats/osmand-gpx.md), for use in other applications or on other devices.
- [**Share**](#share-as-file) button gives you the opportunity to share information about your route with other users using social networks, messengers, or other applications.


### Print (for Android)

![route details](@site/static/img/navigation/route/route_details_print-2.png)  

The **Print** button feature of a turn-by-turn route description can be useful if you prefer to have a physical copy of your route description instead of using electronic devices, or if you do not have access to navigation apps or GPS navigators, no Internet access, or if you need information for other people traveling with you.

A printed route description provides detailed turn-by-turn instructions on how to navigate your route, including the distance to the next turn, driving direction, and street or trail names, as well as distance and travel time information. This information can be useful when you are planning a trip and want to estimate the time and distance between different points on the route and determine the expected time of arrival.

The ability **to print** or **save** turn-by-turn information **in pdf format** is especially useful when traveling long distances or in unfamiliar places when you need to have a more detailed idea of the route and the time it takes to get there.


### Save / Export / Share

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)    ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>

In the Android and iOS versions of the OsmAnd app, you can do such actions as save and share with the created route. These functions are very useful if the route you set is frequently used, may be useful to you or someone else in the future, you want to use it on another device, for example with [OsmAnd Cloud](../../personal/osmand-cloud.md).


#### Export button (for iOS)

Tapping the **Export** button opens a screen with possible actions.

1. Information about what you are exporting. The name of the route for export is created automatically, it is *current date*, the format is *GPS Exchange Format (GPX)* and the *expected file size* is specified.
2. You can [*share a route*](#share-as-file) with your contacts or share with programs that are installed and support this feature.
3. Сopy the route file.
4. *Save to OsmAnd Tracks* opens the [*Save as a new track*](#save-as-a-new-track) menu.
5. *Save to files* the current route on your device for later use.


#### Save as a new track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_save2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_save.png)

</TabItem>

</Tabs>

Use this function to save your current route. 
- Set a name for your track.
- Select a folder or create a new one where you want to put your track.
- You can turn on the display of your track on the map right away. 
- You can change the parameters of your track after you save it in the [*My Places*](../../personal/tracks.md#manage-tracks) menu.


#### Share as file

You have the ability to share your current track using the apps installed on your device. By default, the track is named "route". The track is recorded in [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) according to the following structure: ***file > track > segments > points***.

- One point has a number of attributes: *coordinates, speed, altitude, heading*.
- Points are grouped into tracks.
- The next point after the gap makes up a new segment.
- Both segments and tracks are shown with the Start and Finish icons on the map.

You can read more in the [OsmAnd File GPX Format](../../../technical/osmand-file-formats/osmand-gpx.md) article.


#### Share link (for Android)

You can share a route link using the apps installed on your device. Or copy the link and use the route in the [OsmAnd web portal](../../plan-route/web.md).   

- *Use this link as an example:*  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.  

   Each link consists of parts containing specific information.  
   - *start=52.310331,4.863615*- coordinates of the *Start point*.
   - If the coordinates are not specified, *My Location* is used.
   - *end=52.327645,4.863272* - coordinates of the *End point*.
   - *mode=pedestrian* - type of [routing](../../navigation/routing/index.md), which depends on the selected profile.
   - *#15/52.3161/4.8658* - zoom level and map center coordinates.  

