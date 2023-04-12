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

<InfoIncompleteArticle/>

## Overview

*The Navigation by track* (GPX) option allows you to follow a pre-defined route (or track) on the map. It can be particularly helpful for outdoor activities such as hiking, cycling, or off-road driving, where having a planned route can enhance safety and efficiency of movement. If you are moving in an organized group, this feature can help each member of the group have the same information about the route as the others.  
*Navigation by track* option can also be used in the everyday life. You can reuse previously [recorded track](../../plugins/trip-recording.md) or share it with your relatives or frends instead of explaining to them the route. You can also use for navigation [routes on the OsmAnd map](../../../../blog/routes/). How to highlight them on the map and what their colors mean is described in the [Routes section](../../map/vector-maps.md#routes) of the vector maps article.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>

## Select track to navigate

Before using *The Navigation by track* option you need to [create](#create-or-import-gpx) or [import](../../personal/tracks.md#import-track) a [GPX](../../../technical/osmand-file-formats/osmand-gpx.md) file, which is a common format used to store data about a route. GPX usually contains a sequence of points (waypoints) that define a route. It can be recorded or created using various tools (mostly apps and online services). More about GPX file format used by OsmAnd you can read in the [Trip recording plugin](../../plugins/trip-recording.md#recorded-gpx-file) article.  

:::note
Lots of uncategorized tracks can be found on [OpenStreetMap](https://www.openstreetmap.org/traces).
:::

#### Create or import GPX 

In OsmAnd, GPX file can be created using:

- ["Plan route"](../../plan-route/create-route.md) tool.
- [Create a route -> Save](./route-details.md).  
- [Trip (track) recording](../../plugins/trip-recording.md) plugin.
- [Web portal](../../plan-route/web.md#tracks).

Once the track is created or imported inside OsmAnd, it can be found in the track list in [My places](../../personal/myplaces). After that, you can select required from [available tracks](../../personal/tracks.md#actions), highlight it on the map and afterward use for navigation.  

### Start GPX navigation

You can start navigation by track using Track context menu or from navigation menu. There are 3 ways to reach the navigation menu:

- [The navigation button](../../widgets/map-buttons.md#directions) on the map screen.  
- *Direction to/from* in a [map context menu](../../map/map-context-menu#directions-to--from).  
- Navigation section in the Main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

To start the navigation to a track, you need to use [the navigation button](../../widgets/map-buttons.md#directions) in the track context menu or by choosing one of [displayed track](./route-navigation.md#displayed-tracks) in Navigation menu. [Follow track](#follow-track-menu) menu in navigation settings can also be used for GPX navigation.

### Choose segments

If you track consists of multiple segments or tracks, you can select specific segment to navigate or whole gpx-track file. As of now you can select a full track if it consists of multiple segments, so you need to modify the original file.

## User Start / finish  points

You can specify start and finish points that are different from your GPX track. Using [Follow track menu](#follow-track-menu) you can choose whether to navigate from your current geolocation to a start or nearest GPX track point. 
Also you can choose <Translate android="true" ids="nav_type_hint"/> that will be used while moving to the track and on it. 

## Follow track menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_follow_track_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_follow_track_ios.png)

</TabItem>

</Tabs>

- &nbsp;Track name and track info - tap it opens the track in a [*Plan route*](../../plan-route/create-route.md) tool.
- &nbsp;<Translate android="true" ids="select_another_track"/> - start navigation on another route.
- &nbsp;<Translate android="true" ids="gpx_option_reverse_route"/> - change the direction of movement along the track in the opposite direction.
- &nbsp;<Translate android="true" ids="pass_whole_track_descr"/> - <Translate android="true" ids="start_of_the_track"/> or <Translate android="true" ids="nearest_point"/> of the track.
- &nbsp;<Translate android="true" ids="nav_type_hint"/> - <Translate android="true" ids="routing_profile_straightline"/> or chosen [navigation profile](../../personal/profiles.md#navigation-settings).

### Attach to roads

- Route details
- Full Voice instructions

In future link to Plan Route.

## Guidance

Navigation by GPX track provides the same [voice instructions](../guidance/voice-navigation.md) as navigation by route in OsmAnd. Though few turns or roundabouts might be misinterpreted cause there is no information about road intersections inside GPX except the OsmAnd created GPX files. In order to fix those issues, you need to use [**Attach to roads**](#attach-to-roads) function.  

During navigation, you can use various options such as zooming in or out, panning the map, or switching to a different map style. If you deviate from the track, OsmAnd will automatically recalculate the route to bring you back on track. You can also adjust the speed of the track, and set audible alerts for approaching waypoints or deviations from the route.


### Recalculate (Off track)

Additional settings compare to navigation by route.
