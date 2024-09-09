---
sidebar_position: 3
title:  Plan a route / Navigation
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

## Navigation route

- To start building a navigation route, right-click to add the *Navigate from*,  *Navigate to* and *Navigate via* points.

- After adding the start and end points, we get the route.

- In the Route block you can move the start and end points, edit them and change the type of route.

![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- choose _Route profile_ for changing navigation routing type:

![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- click to Orange circles on Navigation route for look at instructions:

![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- copy URL for sending the navigation route. Example: [https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

## Create track and Local

A web version of the ["Plan route"](../plan-route/create-route.md) tool, similar to the OsmAnd app, is currently being developed. To go to create a route, *Right-click → Create new Route*.  Or you can use the *Create track* button on the _Local_ menu(right side: *Pencil* and *Upload* buttons).

Here you can select a navigation profile to build a section of the route (New segments) or for all route (All segments), add waypoints, save the route and view information about it.  

![OsmAnd Web Create Track](@site/static/img/web/create_route.png)

You can view any actions and display track information in the [Track section](#tracks) of this article.

Actions for Local:
- _Import Track_ - any user can download any GPX file at [*osmand.net/map*](https://osmand.net/map) to _Local_ section.  
- Create track.

![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)

Local track menu and Edit has 3 panels: Info, Track, Waypoints, Turns.

_Info_ actions and data:
  - _Save to Cloud_.
  - _Add description_.
  - _Rename_ a track.
  - *recalculate* - Add elevation data for the selected track.
  - *Elevation*: elevation graph.
  - *Speed*: speed graph.  
  - *Slope*: slope graph.  
  - *Road details* - Road type, Surface, Steepness, Surface firmness, Piste.
  - *Download GPX* button (Pro feature).
  - *Close Track* the track.
  - *Delete Track* - Delete the track. 

![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)


_Track section_ contains track points. Here you can delete it or change order.
_Waypoints_ menu contains track waypoints. Here you can show or not it on the map, and delete waypoints.

_Turns_ menu contains info about segments turns.

![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)

> *This article was last updated in September 2024*