---
sidebar_position: 2
title:  Navigate by track
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

*The Navigation by track* (GPX) option allows you to follow a predefined route (or track) on the map. It can be particularly helpful for outdoor activities such as hiking, cycling, or off-road driving, where having a planned route can enhance safety and efficiency of movement. If you are moving in an organized group, this feature can help each member of the group have the same information about the route as the others.  
*Navigation by track* option can also be used in the everyday life. You can reuse previously [recorded track](../../plugins/trip-recording.md) or share it with your relatives or friends instead of explaining to them the route. You can also use for navigation [routes on the OsmAnd map](../../../../blog/routes/). How to highlight them on the map and what their colors mean is described in the [Routes section](../../map/vector-maps.md#routes) of the vector maps article.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>

## Select track to navigate

Before using *The Navigation by track* option you need to [create](#create-or-import-gpx) or [import](../../personal/tracks.md#import-track) a [GPX](../../../technical/osmand-file-formats/osmand-gpx.md) file, which is a common format used to store data about a route.  
GPX usually contains a sequence of points (waypoints) that define a route. It can be recorded or created using various tools (mostly apps and online services). More about GPX file format used by OsmAnd you can read in the [Trip recording plugin](../../plugins/trip-recording.md#recorded-gpx-file) article.  

#### Create or import GPX 

In OsmAnd, GPX file can be created using:

- *[Plan a route](../../plan-route/create-route.md)* tool.
- [Create a route -> Save](./route-details.md#share--export-actions).  
- [Trip (track) recording](../../plugins/trip-recording.md) plugin.
- [Web portal](../../plan-route/web.md#tracks) (Pro subscription required).

You can learn how to import GPX files to OsmAnd in the [My data / Tracks](../../personal/tracks.md#import-track) article. Tracks from the OsmAnd Web portal can be downloaded on your device using [OsmAnd Cloud](../../personal/osmand-cloud.md).

:::note
Lots of uncategorized tracks can be found on [OpenStreetMap](https://www.openstreetmap.org/traces).
:::

### Start GPX navigation

Once the track is created or imported inside OsmAnd, it can be found in the track list in [My places](../../personal/myplaces). After that, you can select required file from [available tracks](../../personal/tracks.md#actions), highlight it on the map and afterward use for navigation. From now you can start navigation by track using quick action button in [Track context menu](../../map/track-context-menu.md#quick-actions) (opens by choosing one of [highlighted tracks](./route-navigation.md#previous-route--history) on the map, or by tap on the track file im [My Places](../../personal/myplaces.md) section of the Main menu) or from navigation menu, that can be reached by tap:

- [The navigation button](../../widgets/map-buttons.md#directions) on the map screen.  
- Navigation section in the Main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

In the [Navigation menu](./route-navigation.md#navigation-menu) go to *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

### Choose segments

If your track consists of multiple segments or tracks, you can select either specific segment  or whole gpx-track file for navigation.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

:::note
If your track consists of more than one track, [while importing](../../personal/tracks.md#import-track) you can decide either to save it as one file or more.
:::

## User Start / finish  points

You can specify the start and end points of your route that differ from the GPX file you are using. In [Follow track menu](#follow-track-menu) you can choose whether to navigate from your current geolocation to a start or nearest GPX track point. 
Also you can choose [<Translate android="true" ids="nav_type_hint"/>](../routing/index.md) that will be used while moving to the track and on it. 

## Follow track menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_track_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_track_ios_3.png)

</TabItem>

</Tabs>

- &#128393; button near *track name and info* - opens it in a [*Plan route*](../../plan-route/create-route.md) tool.
- &#128448; *&nbsp;<Translate android="true" ids="select_another_track"/>* - select another GPX file for navigation.
- *&nbsp;<Translate android="true" ids="gpx_option_reverse_route"/>* - if enabled, the direction of movement along the track will be reversed.
- *&nbsp;<Translate android="true" ids="pass_whole_track_descr"/>* - <Translate android="true" ids="start_of_the_track"/> or <Translate android="true" ids="nearest_point"/> of the track.
- *&nbsp;<Translate android="true" ids="nav_type_hint"/>* - <Translate android="true" ids="routing_profile_straightline"/> or chosen [routing type](../routing/index.md).

### Attach to roads

When your track selected as a *[destination point](../setup/route-navigation.md#set-destinations)*, you can find the **Attach to the roads** option in the *[Navigation menu](../setup/route-navigation.md#navigation-menu)* (only in the **Android** version of the app) or in the *[Follow track menu](#follow-track-menu)* (both Android and iOs versions). If you tap this option,  the [Plan a route](../../plan-route/create-route.md#saving-a-route) tool will open and OsmAnd will match each point on the track to the nearest allowed road on the map according to the chosen profile and threshold distance.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Attach to the roads 1](@site/static/img/navigation/gpx/attach_roads_gpx_andr_1.png) ![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_roads_gpx_ios_1.png)

</TabItem>

</Tabs>

- Threshold distance (default is 50 meters) refers to the maximum distance between a point on a GPS track and the nearest point on a road in order to attach the track to the road.
- When you change the profile, OsmAnd automatically reattaches your track to the allowed for this profile roads.
If your track consists of a big amount of points, attaching to the roads may take a long time. On the picture above, you can see the highlighted with orange status line, which indicates the progress. After the procedure of attaching to the roads is finished, the button **Apply** is active, and the track can be used for navigation.

:::note
After attaching your track to the roads in [Route details section](../setup/route-details.md), you will find more precise information about your route and [Voice instructions](#guidance) will be more detailed.
:::

## Guidance

Navigation by GPX track provides the same [voice instructions](../guidance/voice-navigation.md) as navigation by route in OsmAnd. Though few turns or roundabouts might be misinterpreted cause there is no information about road intersections inside GPX except the OsmAnd created GPX files. To fix those issues, you need to use [**Attach to roads**](#attach-to-roads) function.  

During navigation, you can use various options such as zooming in or out, panning the map, or switching to a different map style. If you deviate from the track, OsmAnd will automatically recalculate the route to bring you back on track. You can also adjust the speed of the track and set audible alerts for approaching points or deviations from the route.  
