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

The OsmAnd allows you to find the best route and explore all of its details. The app provides detailed information about the entire route, including distance, travel time, surface type, elevation differences, and turn information. You can also analyze the route on the map, find out information about track segments, print the route plan, save the route, and share it with others. With this functionality, you will always be aware of the route details and can plan your trip more efficiently.  


### How to open

The route information from the Details section of the navigation menu of the app is only available when the track has already been calculated. You can use them before you start your trip, to improve your planning, and during your trip.  
There are three ways to access the Route Details menu.   

1. Go to the main *Menu → Navigation*, set the route, and tap the *Details* button.
2. Tap the Navigation icon on the map screen, set the route, and tap the Details button.
3. Go to the My Places menu, tap any available track in the list *Menu → My Places → Tracks*, select the Navigation icon in the track context menu in the Overview, and tap Details.  

<!-- ? -->
Depending on the selected [profile settings](../../personal/profiles.md) and the selected [routing type](../routing/#routing-types), route details may not be fully displayed. The display of a number of details is also affected by the availability of map section information, GPS data, terrain and road information, and your [subscription](../../purchases/index.md).  

? [Main information](../../map/track-context-menu.md#altitude--speed-graphs)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_main-info.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png)

</TabItem>

</Tabs>


## Distance / time / CO2

CO2 - https://osmand.net/docs/user/navigation/guidance/navigation-settings#fuel-used-by-motor

*Estimated travel time* and *Estimated arrival time*. These values are calculated from the average speed based on the previously selected [settings](../setup/route-navigation.md) and the actual time of day.

The information block with *Average altitude*, *Altitude range*, *Uphill* (or *Ascent* in iOS), *Downhill* (or *Descent* in iOS).  

- *Average altitude*
- *Altitude range*
- *Uphill*
- *Downhill*

![Route details](@site/static/img/navigation/route/route_details_distance.png)  


## Elevation info

<!-- ? -->
The main block with the graph contains the following information:

1. The total distance of your route in the selected [units](../../personal/profiles.md#units--formats).
2. *Estimated travel time* and *Estimated arrival time*. These values are calculated from the average speed based on the previously selected [settings](../setup/route-navigation.md) and the actual time of day.  
3. [The graph](#the-graph).
4. The information block with *Average altitude*, *Altitude range*, *Uphill* (or *Ascent* in iOS), *Downhill* (or *Descent* in iOS).
5. [*Analyse on map*](#analyse-on-map) (*Analyse* in iOS) button.


#### Elevation info

The details shows a graph with the elevation and slope of your navigation route and your current location on this graph with current altitude and slope. The graph is plotted on two axes. The X-axis is the distance of your route. The Y-axis is the altitude, the value depends on the relief, and the slope displayed as a percentage.  

All values are indicated either for the whole route or only for the selected interval by scaling the graph.

- ***Location Pin***. The data on the graph of your ***Current location*** contains the location icon, altitude, and percent slope value. The right side of the widget contains data about the highest altitude and slope, the average value for both and the lowest altitude and slope on the selected route section visible on the graph.  
- ***Additional information***. The right side of the widget contains data about the highest altitude and slope, the average value for both and the lowest altitude and slope on the selected route section visible on the graph.  
- ***Grade*** is is the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope. *Grade* shows the maximum road slope in percent from your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen.  


### The graph

The graphs which are built while recording the current track, show visually the information about the track. All values on the graph are indicated either for the whole route or only for the selected interval (when scaling). The right(Android)/left(iOS) side of the graphs contains data about the highest, average and lowest values. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.  


#### The graph can be scaled.

- *Zoom in/out*. By default, the graph shows the route from the current location to your destination point. You can use [two-finger movement](../../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right, forward on the route, and backward to the current location.  
- *Place a point on the graph*. If you want to see the information at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with the values will appear.  

[Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*.   


## Analyse on map

A graph with altitude / slope info on distance, additional track data.

[Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map.  

This option allows you to interactively review track information using graphs and the map. To get access to this menu shortly tap on the *track → [<Translate android="true" ids="shared_string_options"/>](../../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

- **Graph data Y-axis**: Altitude / Slope / Speed (if data is available in the track).
- **Graph dimension X-axis**: Distance / Time / Time of day.
- **Tap/Slide**: tap to Graph for showing info about track point and moving along Graph highlights point location on the map and displays info about point on the bar.
- **Scale**: scale Graph by [two fingers gesture](../../map/interact-with-map.md#gestures). 
- **Follow My location**: click button [My Location](../../map/interact-with-map.md#my-location--zoom), so map view and graph is synchronized with your location. In that case **graph scale** will stay constant and **bar information** will be fixed to 1/4 from the left. As you move, **graph will slide** from left to right displaying information Ahead of your Track. This functionality is useful for hiking & cycling during navigation, though this screen doesn't have other widgets displayed.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_analiz.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png)

</TabItem>

</Tabs>


## Road attributes

To find out how particular road attributes are displayed on the map, see [this section](../../map-legend/osmand.md#routes) of the documentation.    

- [**Road type**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads) - The type of road is determined based on its functional purpose and characteristics, such as the number of lanes, speed limits, load capacity, the presence of pedestrian and bicycle paths, roadsides, and other parameters. Different types of roads may have different restrictions and traffic rules. For example, main [highways](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) usually have a high speed limit and can be divided into lanes, and [local roads](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) can have a low speed limit and one lane in each direction.
- [**Surface**](https://wiki.openstreetmap.org/wiki/Key:surface) - Road surfaces are the top layer of pavement that comes into contact with the wheels of vehicles. They can be of different types depending on their properties and functional purpose. For example, [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) pavement provides good traction and noise insulation, and [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) pavement is more durable and has greater load capacity. Other materials such as gravel, crushed stone, wood boards, and others can also be used to create a road surface. 
- [**Steepness**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines) - This is a measurement of the angle of the slope of the road, expressed as a percentage. It indicates how steeply the road is sloped up or down in relation to the horizon and is calculated by measuring the vertical change in road elevation by the horizontal distance and multiplying the resulting value by 100%. For example, if the steepness of the road is 10%, that means for every 100 meters of horizontal distance along the road, you are going up or down 10 meters. The steepness of the road can affect your vehicle's speed, braking, fuel consumption, and driving safety, especially on slippery roads in the winter.
- [**Surface firmness**](https://wiki.openstreetmap.org/wiki/Key:tracktype) - It is the ability of the road surface to recover from deformation or load. The higher the surface firmness, the less chance of damage to the vehicle and the more comfortable the road will be. Surface firmness can also affect vehicle speed and fuel consumption.
- [**Slope**](https://wiki.openstreetmap.org/wiki/Key:incline) 
- [**Smoothness**](https://wiki.openstreetmap.org/wiki/Key:smoothness) 
- [**Winter and ice roads**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads) - Color scheme of the route according to the classification of [winter roads](../../map/vector-maps.md#winter-and-ski).
- [**Difficulty of horse trails**](https://wiki.openstreetmap.org/wiki/Riding)
- **Speed and Altitude** 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png)

</TabItem>

</Tabs>


## Turn-by-turn information

Turn-by-turn information provides brief instructions for navigating your route, including the next turn, the distance to the turn, the direction of the turn, and the name of the street or trail. Turn information is usually displayed in widgets (links), provides safe and effective real-time navigation, and allows the driver to navigate the road.  

Turn-by-turn information - You can view the details of separate sections of the route by tapping the needed one.

The setting shows information about your next turn with a picture of maneuver and distance to it. There are 2 variants of **next turn** widget (small and big) and **2nd next turn** which is enabled if turn within approaching distance.  


Trigger display time, color is related to the voice navigation prompts and related to the time left to reach maneuvre. So color indication, distance & turn visualization could be used instead of voice navigation.

| Distance |  Prompt type | Color | Approximate Trigger Time | 
|-----|----|-------|------| 
| Close by | [Turn now](../../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Green | 5 seconds | 
| Approaching| [Turn in X m](../../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Yellow | 20 seconds |
| Distant | [Prepare to turn](../../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Grey | > 100 seconds |   

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)


## Actions

The route details navigation section has options that allow you to perform certain actions with the route information.  

- [**Print**](#print) button is only available in the Android version of the OsmAnd app. It allows you to print or save turn-by-turn route information.
- **Save** button allows you to save the route information [as a new track](#save-as-a-new-track) for later use.
- [**Export**](#export-button-for-ios) button combines several actions for the iOS version of the OsmAnd app. The main one is to export route information in [GPX format](../../../technical/osmand-file-formats/osmand-gpx.md), for use in other applications or on other devices.
- **Share** button gives you the opportunity to share information about your route with other users using social networks, messengers, or other applications.


### Print (for Android)

<infoAndroidOnly />

The **Print** button feature of a turn-by-turn route description can be useful if you prefer to have a physical copy of your route description instead of using electronic devices, or if you do not have access to navigation apps or GPS navigators, no Internet access, or if you need information for other people traveling with you.

A printed route description provides detailed turn-by-turn instructions on how to navigate your route, including the distance to the next turn, driving direction, and street or trail names, as well as distance and travel time information. This information can be useful when you are planning a trip and want to estimate the time and distance between different points on the route and determine the expected time of arrival.

The ability **to print** or **save** turn-by-turn information **in pdf format** is especially useful when traveling long distances or in unfamiliar places when you need to have a more detailed idea of the route and the time it takes to get there.

![route details](@site/static/img/navigation/route/route_details_print-2.png)


### Save / Export / Share

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>

#### Export button for iOS

Tapping the **Export** button opens a screen with possible actions.

1. Information about what you are exporting. The name of the route for export is created automatically, it is *current date*, the format is *GPS Exchange Format (GPX)* and the *expected file size* is specified.
2. You can [*share a route*](#share-as-file) with your contacts or share with programs that are installed and support this feature.
3. Сopy the route file.
4. *Save to OsmAnd Tracks* opens the [*Save as a new track*](#save-as-a-new-track) menu.
5. *Save to files* the current route on your device for later use.

#### Save as a new track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_save.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_save.png)

</TabItem>

</Tabs>


#### Share as file

in gpx https://www.osmand.net/docs/user/plugins/trip-recording#recorded-gpx-file

OsmAnd records tracks in a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) according to the following structure: *file > track > segments > points*.

- One point has a number of attributes: coordinates, speed, altitude, heading.
- Points are grouped into tracks.
- The next point after the gap makes up a new segment.
- Both segments and tracks are shown with the Start and Finish icons on the map.

OsmAnd GPX
The OsmAnd's GPX file format conforms to the GPX 1.1 specification with additional data written as extensions. There are several sections of such data https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx/

#### Share link (for Android)

You can share a route link using the apps installed on your device. Or copy the link and use the route in the [OsmAnd web portal](../../plan-route/web.md).   

*Use this link as an example:*  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.  

Each link consists of parts containing specific information.  
- *start=52.310331,4.863615*- coordinates of the start point.
- If the coordinates are not specified, My Location is used.
- *end=52.327645,4.863272* - coordinates of the end point.
- *mode=pedestrian* - type of [routing](../../navigation/routing/index.md), which depends on the selected profile.
- *#15/52.3161/4.8658* - zoom level and map center coordinates.  

