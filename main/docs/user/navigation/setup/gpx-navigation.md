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

<InfoIncompleteArticle/>


## Overview

The *Navigation by track* (GPX) option allows you to follow a predefined route or track on a map. It can be particularly useful for outdoor activities such as hiking, cycling, or off-road driving, where having a planned route improves safety and efficiency. If you are traveling in an organized group, this feature helps you and each member of the group have the same route information as the others.  

The *Navigation by track* option can also be used in the everyday life. You can use a previously [recorded track](../../plugins/trip-recording.md) or share it with your family or friends instead of explaining the route to them. You can also use the [routes on the OsmAnd map](../../../../blog/routes/) for navigation. How to highlight them on the map and what their colors mean is described in the [Routes section](../../map/vector-maps.md#routes) of the *Vector maps* article.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Select the Track to Navigate

Before using the *Navigation by track* option you need to [create](#create-and-import-gpx) or [import](../../personal/tracks/manage-tracks.md#import) a [GPX file](../../../technical/osmand-file-formats/osmand-gpx.md), a common format used to store route data.  
A *GPX file* usually contains a sequence of points (waypoints) that define a route. It can be recorded or created using various tools (mostly apps and online services). You can read more about *GPX file format* used by OsmAnd in the [Trip recording plugin](../../plugins/trip-recording.md#recorded-gpx-file) article.  


### Create and Import GPX

In the OsmAnd application, you can create a GPX file using tools such as:

- *[Plan a route](../../plan-route/create-route.md)*.
- [*Create a route → Save*](./route-details.md#share--export-actions).  
- [*Trip recording plugin*](../../plugins/trip-recording.md).
- [*Web portal*](../../plan-route/web.md#tracks) (*Pro subscription required*).

Import GPX files:

- You can learn how to import GPX files to OsmAnd in the [My data / Tracks](../../personal/tracks/manage-tracks.md#import) article.
- Tracks from the OsmAnd Web portal can be downloaded on your device using [OsmAnd Cloud](../../personal/osmand-cloud.md).
- You can find many tracks without categories in OpenStreetMap and download them - [Public GPS Traces](https://www.openstreetmap.org/traces).


### Start GPX Navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

If a track has been created or imported into OsmAnd, it can be found in the track list in [My places](../../personal/myplaces). You can select the required file from the [available tracks](../../personal/tracks/manage-tracks.md), highlight it on the map, and then use it for navigation.  

Navigation on a track can be started using the quick action button in the [Track context menu](../../map/tracks/track-context-menu.md#quick-actions) (opened by selecting one of the [highlighted tracks](./route-navigation.md#history-of-previous-routes) on the map or by tapping a track file in the [My Places](../../personal/myplaces.md) section of the Main menu) or from the navigation menu, which is opened by tapping:

- [*Navigation button*](../../widgets/map-buttons.md#directions) on the map screen.  
- *Navigation section* in the Main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
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

If a track consists of more than one track, [when importing](../../personal/tracks/manage-tracks.md#import) you can choose whether to save it in a single file or in multiple files. For navigation, if the selected track consists of multiple segments or tracks, you can select either a specific segment or the entire gpx track file.  


## Follow Track Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_track_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_track_ios_3.png)

</TabItem>

</Tabs>

- ✏️ button near *track name and info* - opens it in a [*Plan route*](../../plan-route/create-route.md) tool.
- 📁 *&nbsp;<Translate android="true" ids="select_another_track"/>* - select another GPX file for navigation.
- *&nbsp;<Translate android="true" ids="gpx_option_reverse_route"/>* - if enabled, the direction of movement along the track will be reversed.
- *&nbsp;<Translate android="true" ids="attach_to_the_roads"/>* - open ["<Translate android="true" ids="attach_to_the_roads"/>"](#attach-to-the-roads) menu.
- *&nbsp;<Translate android="true" ids="pass_whole_track_descr"/>* (or *<Translate ios="true" ids="point_to_navigate"/>* in iOS) - you can choose whether you will be directed to the **<Translate android="true" ids="start_of_the_track"/>** or **<Translate android="true" ids="nearest_point"/>** of the track.
- *&nbsp;<Translate android="true" ids="nav_type_hint"/>* - you can choose weither you will be guided to the track using *[<Translate android="true" ids="routing_profile_straightline"/>](../routing/straight-line-routing.md)* or usng *[routing type](../routing/routing-types.md)* from current profile.  

### Attach to the Roads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Attach to the roads 1](@site/static/img/navigation/gpx/attach_roads_gpx_andr_1.png) ![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_roads_gpx_ios_1.png)

</TabItem>

</Tabs>

When your track selected as a *[destination point](../setup/route-navigation.md#set-destinations)*, you can find the **Attach to the roads** option in the *[Navigation menu](../setup/route-navigation.md#navigation-menu)* (only in the **Android** version of the app) or in the *[Follow track menu](#follow-track-menu)* (both Android and iOS versions). If you tap this option,  the [Plan a route](../../plan-route/create-route.md#saving-a-route) tool will open and OsmAnd will match each point on the track to the nearest allowed road on the map according to the chosen profile and threshold distance.  

- *Threshold distance* (default is 50 meters) refers to the maximum distance between a point on a GPS track and the nearest point on a road in order to attach the track to the road.
- *When you change the profile*, OsmAnd automatically reattaches your track to the allowed for this profile roads.
If your track consists of a big amount of points, attaching to the roads may take a long time. On the picture above, you can see the highlighted with orange status line, which indicates the progress. After the procedure of attaching to the roads is finished, the button **Apply** is active, and the track can be used for navigation.

:::note
After attaching your track to the roads in [Route details section](../setup/route-details.md), you will find more precise information about your route and [Voice instructions](#guidance) will be more detailed.
:::


## Custom Points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_ios_1.png)

</TabItem>

</Tabs>

### Start / Finish Point

You can specify the start and finish point for a route other than the points used in the GPX file. In the [Follow track menu](#follow-track-menu), you can choose whether you want to navigate from your current location to the start point or to the nearest point on the GPX track.  
Also, you can choose [<Translate android="true" ids="nav_type_hint"/>](../routing/routing-types.md) that will be used when moving on and along the track.  

### Add Waypoints

You can add a waypoint to any imported or created [GPX track](#create-and-import-gpx) from the [*My Places → Track List* collection](../../personal/tracks/manage-tracks.md#view-all-tracks).  

1. Using the *My Places* menu:
    - Go to the *My Places → Tracks* menu.
    - Tap the track in the list that you are interested in.
    - In the opened context menu, select *Points tab → bottom section Action → Add Waypoint*.
    - Enter the required information to the Waypoint and [save](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track).
2. *Visible tracks*:
    - Tracks must first be added to the *Visible on map* folder ([*Show on map* feature](../../personal/tracks/manage-tracks.md#single-track-menu)) in the *Tracks tab*.
    - Tap the selected track on the map, than *Points tab → bottom section Action → [Add Waypoint](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track)*.
3. *Long-tap the map*:
    - Long-tap to select a location on the map and tap [Add track waypoint](../../map/map-context-menu.md#-add--edit--track-waypoint) from the *Map context menu*.
    - Select the track to which you want to add a waypoint, enter the required information and save.

### Follow track menu

When preparing or navigating a GPX track, you cannot add intermediate places you plan to drive through within that track. You can only assign start and finish points in addition to the track or segment you are planning to follow.  

To do this, use the&nbsp;  "**+**"  &nbsp;button to add a new destination point. As a result, when recalculating, navigation will be done along the selected track in the part where it is possible. The rest of the route will follow the specified point.  

For detailed information about intermediate destination points, see the [Route Preparation](../../navigation/setup/route-navigation.md#intermediate-destinations) article.


## Guidance

*Navigation by GPX track* contains the same [voice instructions](../guidance/voice-navigation.md) as route navigation. However, some turns or traffic circles may not be interpreted correctly because there is no information about road intersections in GPX, except for GPX files created by OsmAnd. To eliminate these problems, you should use the [**Attach to the roads**](#attach-to-the-roads) feature.  

During navigation, you can use various options such as zooming in or out, panning the map, or switching to a different map style. If you deviate from the track, OsmAnd will automatically recalculate the route to bring you back on track. You can also adjust the speed of the track and set audible alerts for approaching points or deviations from the route.  


## Related Articles

- [Route parameters](../routing/routing-types.md)
- [Route preparation](./route-navigation.md)
- [Route details](./route-details.md)
- [Navigation by markers](./markers-navigation.md)
- [Navigation settings](../guidance/navigation-settings.md)
- [Map screen during navigation](../guidance/map-during-navigation.md)
- [Voice prompts / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *This article was last updated in August 2024*
