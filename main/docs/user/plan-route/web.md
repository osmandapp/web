---
sidebar_position: 4
title:  Web portal
draft: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


:::info
The web [_'osmand/map'_](https://osmand.net/map/) is developed and tested now. 

**The layout and operation of some functions may have changed from those described in this article.**
:::

As we wrote in our ["2023 New Year resolutions"](https://osmand.net/blog/ny-resolutions-2023#web) we are developing OsmAnd Web. 

At this moment each user can test this service:  [osmand.net/map](https://osmand.net/map/).

What functions will be available except the map view for Free and for [Pro users](../purchases/android.md#osmand-pro):

1. [OsmAnd Pro sync](#osmand-pro-sync) (Pro)
2. [Weather](#weather) (Free)
3. [Tracks](#weather) (Free and Pro)
4. [Favorites](#farorites-pro) (Pro)
5. [Map style](#map-style) (Free)
6. [Navigation Route](#navigation-route) (Free)
7. The ["Create track"](#create-track-pro) tool (Pro)

![View OsmAnd Web](@site/static/img/web/web.png)


## OsmAnd Pro sync

OsmAnd Pro is a [cross-platform](../troubleshooting/setup.md#cross-platform) subscription. 
If you have [OsmAnd Pro](../purchases/index.md) subscription you can make [activation](../troubleshooting/setup.md#cross-platform) for the web platform. Just input your _email_ and _password_ for [osmand.net/map](https://osmand.net/map/):

:::tip
Read how to register your email for OsmAnd Pro service [here](../troubleshooting/setup.md#cross-platform).
:::

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)

Your data (Tracks and Favorites) will be appeared on the menu. You can show its on the map:

![View OsmAnd Web data](@site/static/img/web/web_data.png)


Click to the login pole for _Logout_ or _Download backup data_:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)

## Weather

Weather is a [Pro feature](../purchases/index.md) for OsmAnd application. But for the Web is a free feature. 

Users can switch on Weather layers on the map: Temperature, Pressure, Wind, Cloud and Precipitation by left or right menus.

Showing the Weather forecast: Day, Week. (Forecast step is 3 hours)

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

## Tracks

At this section you can:
- loading tracks from your device (Local),
- showing tracks from OsmAnd Cloud (Pro),
- editing tracks.

### Local

Each user can upload any GPX file to _osmand.net/map_:
![OsmAnd Web local GPX](@site/static/img/web/web_local_gpx.png)

Edit loading tracks:

![OsmAnd Web local GPX edit](@site/static/img/web/web_local_gpx_edit.png)

Actions and screens:
- Info: track data,
- Track: start profile point ("Create route"),
- Waypoints: the list of track waypoints,
- Settings: list of Navigation Profiles for "Create route" tool,
- Elevation: elevation graph,
- Speed: speed graph,
- Edit Name: change track name,
- Edit: edit a track by "Create route" tool,
- Elevation: elevation graph,
- Download: downloading track,
- Save to OsmAnd Cloud (Pro),
- Get SRTM: added elevation data for chosen track.

### User's tracks (Pro)

After registration OsmAnd Pro. You can see your GPX tracks from OsmAnd Cloud.

Tracks from user's OsmAnd Cloud. It's only for **Pro users**.

![OsmAnd Web cloud GPX edit](@site/static/img/web/web_cloud_gpx_edit.png)

What it contains:
- Track folders: tracks folders from OsmAnd Cloud ("My Places > Tracks"),
- Track info: showing track data,
- Get SRTM: showing elevation graph of a chosen track,
- Edit: changing name and other data for a chosen track.

## Farorites (Pro)

After registration OsmAnd Pro account user Favorites are showed on Favorites menu.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/web_cloud_favorites_edit.png)

Allowed next actions:
- Show Favorites on the map,
- Delete Favorites,
- Add new Favorites,
- Edit Favorites.
  
### Add / Edit Favorite

Tap by the right mouse button for add a new favorite point.

Click to a favorite point for start it editing.

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)


## Map style

Here you can change [Map style](../map/vector-maps.md) like it works in OsmAnd app.

**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)

## Navigation route

Please, tap by the right mouse button for adding _Start_ and _End_ points:

![OsmAnd Web Create Route](@site/static/img/web/web_create_route.png)

After adding _Start_ and _End_ points we receive the route.

![OsmAnd Web Create Route](@site/static/img/web/web_create_route_1.png)

Here you can move start-end points, edit its by menu, change routings type:

![OsmAnd Web Create Route](@site/static/img/web/web_create_route_2.png)

## Create track (Pro)

We are developing Web version of our ["Plan route"](../plan-route/create-route.md) tool for OsmAnd application. Now you can try it for the Web.

Tap by the right mouse button > Create Track.

Here you can choose Navigation Profile for a building track segment, add waypoints and save a track and view track info:

![OsmAnd Web Create Track](@site/static/img/web/web_create_track.png)

Any actions and showing Track Info you can read at [Track section](#tracks) of this article:

![OsmAnd Web Create Track](@site/static/img/web/web_create_track_info.png)
