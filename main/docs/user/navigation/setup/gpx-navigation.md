---
sidebar_position: 2
title:  Navigate by Track
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

The *Navigation by track* (GPX) option allows you to follow a predefined route or track on a map. It can be particularly useful for outdoor activities such as hiking, cycling, or off-road driving, where having a planned route improves safety and efficiency. If you are traveling in an organized group, this feature helps you and each member of the group have the same route information as the others.  

The *Navigation by track* option can also be used in the everyday life. You can use a previously [recorded track](../../plugins/trip-recording.md) or [create a track](../../personal/tracks/manage-tracks.md#create-a-track) and share it with your family or friends instead of explaining the route to them. You can also use the [routes on the OsmAnd map](../../../../blog/routes/) for navigation. How to highlight them on the map and what their colors mean is described in the [Routes section](../../map/vector-maps.md#routes) of the *Vector maps* article.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Select the Track

Before using the *Navigation by track* option you need to [display track on the map](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd supports track as a line (**Geometry**) and track as a route (**Route**) or combination of them (**OsmAnd** by [Plan route](../../plan-route/create-route.md)). If you have track as a collection **Waypoints**, you can use [Markers navigation](./markers-navigation.md).


- **Geometry** track will have very basic navigation by default and won't provide accurate turns, street names and turn lanes. To get missing information, you need to use [Attach to the roads](#attach-to-the-roads) tool.
- **Route** track will calculate route between route points by selected profile. Basically all route points will be considered as intermediate points. If you route consists > 50 points, it's very likely that it's misconfigured **Geometry** track.
- **OsmAnd** track consists of both geometry and route parts and it's suitable to provide exactly same guidance as navigation by default. These tracks are produced by [Plan route](../../plan-route/create-route.md) or [Web version](../../plan-route/web.md). It's possible to resave this track to **Geometry** only track as [**Simplified**](../../plan-route/create-route.md#save-route) to be used in 3rd party programs.


### Start GPX Navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Navigation on a track can be started using the quick action button in the [track context menu](../../map/tracks/track-context-menu.md#quick-actions) (opened by selecting one of the [highlighted tracks](./route-navigation.md#history-of-previous-routes) on the map or by tapping a track file in the [My Places](../../personal/myplaces.md) section of the *Main Menu*) or from the navigation menu, which is opened by tapping:

- [*Navigation button*](../../widgets/map-buttons.md#directions) on the map screen.  
- *Navigation section* in the *Main Menu* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- In the [*Navigation menu*](./route-navigation.md#navigation-menu) go to *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

### Choose Segments

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

For navigation, if the selected track consists of multiple segments or tracks, you can select either a specific segment or the entire gpx track file. When **[importing](../../personal/tracks/manage-tracks.md#import)** you can choose whether to save it in a single file or in multiple files.


### Follow Track options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- ***Edit*** (*pencil icon* next to the track name). Opens the track in the [*Plan a route*](../../plan-route/create-route.md) tool.
- ***<Translate android="true" ids="select_another_track"/>***. Allows you to select a different GPX file for navigation.
- ***<Translate android="true" ids="gpx_option_reverse_route"/>***. If this setting is enabled, the direction of movement along the track is reversed.
- ***<Translate android="true" ids="attach_to_the_roads"/>***. Allows to [Attach track to the roads](#attach-to-the-roads).
- ***<Translate android="true" ids="pass_whole_track_descr"/>*** (*Android*) / ***<Translate ios="true" ids="point_to_navigate"/>*** (*iOS*). You can select how to navigate from my location to the track:
to the *<Translate android="true" ids="start_of_the_track"/>* or to the *<Translate android="true" ids="nearest_point"/>* on the track.
- Choose **Navigation type** for the first and last segment: either build a [*straight line*](../routing/straight-line-routing.md) or use the [*routing type*](../routing/osmand-routing.md#routing-types) from the current profile.


### Attach to the Roads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

You can find the **Attach to the roads** option in the *[Follow track menu](#follow-track-options)*. If you select **Attach to the roads**, the [Plan a route](../../plan-route/create-route.md#attach-track-to-roads) tool will open and OsmAnd will match each point on the track to the nearest allowed road on the map according to the **chosen profile** and ***threshold distance***. After attaching a track to roads, you get more accurate route information in the [**route details** section](../setup/route-details.md), and [**voice instructions**](#guidance) become more detailed.

- *Threshold distance* (default is 50 meters) refers to the maximum distance between a point on a GPS track and the nearest point on a road to attach the track to the road.
- *When you change the profile*, OsmAnd automatically reattaches your track to the allowed for this profile roads. If your track consists of a big amount of points, attaching to the roads may take a long time. On the picture above, you can see the highlighted with orange status line, which indicates the progress. After the procedure of attaching to the roads is finished, the button **Apply** is active, and the track can be used for navigation.

:::note Automatic attach to the roads

For the Android version, *Attach to the roads* runs automatically once track is selected for navigation. You can change it and get more information in the [***Navigation Settings***](../guidance/navigation-settings.md#detailed-track-guidance).
:::


## Points

### Start / Finish Point

You can specify the start and finish point for a route other than the start/finish specified in the GPX file. Just change it the same as you do for [Navigation](../setup/route-navigation.md#select-starting-point).

In the [Follow track menu](#follow-track-options), you can choose whether you want to navigate from your current location to the start point of the track or to the nearest point on the GPX track.  Also, you can choose [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) that will be used for the start and end segment of your route.  

### Waypoints

If track has waypoints, you can use [Show along the road](../guidance/map-during-navigation.md#show-points-along-the-route) and [Voice guidance](../guidance/voice-navigation.md#voice-settings) to get notified about Points of Interests. You can add **Waypoints** to an existing track via **[Context menu](../../map/map-context-menu.md#-add--edit--track-waypoint)**, track need to be visible on the map.

### Intermediate Points

When preparing or navigating a GPX track, you cannot add intermediate places you plan to drive through within that track. You can only assign start and finish points in addition to the track or segment you are planning to follow.

## Guidance

*Navigation by GPX track* contains the same [voice instructions](../guidance/voice-navigation.md) as route navigation. However, some turns or traffic circles may not be interpreted correctly because there is no information about road intersections in GPX, except for GPX files created by OsmAnd. To eliminate these problems, you should use the [**Attach to the roads**](#attach-to-the-roads) feature.  

During navigation, you can use various options such as zooming in or out, panning the map, or switching to a different map style. If you deviate from the track, OsmAnd will automatically recalculate the route to bring you back on track. You can also adjust the speed of the track and set audible alerts for approaching points or deviations from the route.  


## Related Articles

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](./route-navigation.md)
- [Route details](./route-details.md)
- [Navigation by markers](./markers-navigation.md)
- [Navigation settings](../guidance/navigation-settings.md)
- [Map screen during navigation](../guidance/map-during-navigation.md)
- [Voice prompts / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *This article was last updated in August 2024*
