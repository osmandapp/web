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
The web portal is a test function at this moment.
:::

As we wrote in our ["2023 New Year resolutions"](https://osmand.net/blog/ny-resolutions-2023#web) we are developing OsmAnd Web. 

Now each user can test this service:  [osmand.net/map](https://osmand.net/map/).

What functions will be available except the map view:

1. OsmAnd Pro sync
2. Weather
3. Tracks
4. Favorites
5. Map style
6. Navigation Route
7. The "Plan route" tool (Track creation)

![View OsmAnd Web](@site/static/img/web/web.png)


## OsmAnd Pro sync

OsmAnd Pro is a [cross-platform](../troubleshooting/setup.md#cross-platform) subscription. 
If you have [OsmAnd Pro](../purchases/index.md) subscription you can make [activation](../troubleshooting/setup.md#cross-platform) for the web platform. Just input your email and password for [osmand.net/map](https://osmand.net/map/):

:::tip
Read how to register your email for OsmAnd Pro service [here](../troubleshooting/setup.md#cross-platform).
:::

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)

Your data (Tracks and Favorites) will be appeared on the menu. You can show its on the map.:

![View OsmAnd Web data](@site/static/img/web/web_data.png)


Click to your login for Logout or Download backup data:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)

## Weather

Weather is a [Pro feature](../purchases/index.md) for OsmAnd application. But for the Web is a free feature. 

Users can switch on Weather layers on the map: Temperature, Pressure, Wind, Cloud and Precipitation by left or right menus.

Showing Weather forecast: Day, Week. (Forecast step is 3 hours)

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

## Tracks

At this section you can load tracks from your device (Local) and see your tracks from OsmAnd Cloud (Pro).

### Local

Each user can upload any GPX file to osmand.net/map

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
- Download
- Save to cloud (Pro)
- Get SRTM

### User's tracks (Pro)

After registration OsmAnd Pro. You can see your GPX tracks from OsmAnd Cloud.

Tracks from user's OsmAnd cloud. It's only for Pro users.

![OsmAnd Web cloud GPX edit](@site/static/img/web/web_cloud_gpx_edit.png)

- track folders
- Track info
- Get SRTM
- Edit

## Farorites (Pro)

Favorites from user backup.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/web_cloud_favorites_edit.png)

Allowed next actions:
- Show Favorites on the map,
- Delete,
- Add Favorite,
  
### Add / Edit Favorite

Tap by the right mouse button for add a new favorite point.

Click to a favorite point for start it editing.

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)


## Map style

Here you can change [Map style](../map/vector-maps.md) like it works in OsmAnd app.

Nautical:

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)


Topo:

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)

## Navigation route

Tap by the right mouse button for add Start and End points:

![OsmAnd Web Create Route](@site/static/img/web/web_create_route.png)

After adding Start and End points we receive the route.

![OsmAnd Web Create Route](@site/static/img/web/web_create_route_1.png)

Here you can move start-end points, edit its by menu, change routings type:

![OsmAnd Web Create Route](@site/static/img/web/web_create_route_2.png)

## Create track (Pro)

Tap by the right mouse button > Create Track.

Here you can choose Navigation Profile for a building track segment, add waypoints and save a track and view track info:

![OsmAnd Web Create Track](@site/static/img/web/web_create_track.png)

Track Info:

![OsmAnd Web Create Track](@site/static/img/web/web_create_track_info.png)



