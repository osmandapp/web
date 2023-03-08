---
sidebar_position: 4
title: OsmAnd Web portal
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


## Overview

:::info
The *[osmand.net](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**   

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::

The following features are available for users of the Free version of OsmAnd and for users with the [Pro](../purchases/android.md#osmand-pro) version <ProFeature/>:  

Features | Versions
|--- |--- |
| [OsmAnd Pro sync](#osmand-pro-sync) | <ProFeature/> |
| [Weather](#weather) | Free |
| [Tracks](#weather) | Free and <ProFeature/> |
| [Favorites](#farorites-pro) | <ProFeature/> | 
| [Map style](#map-style) | Free |
| [Navigation Route](#navigation-route) | Free |
| [Create track](#create-track-pro) | <ProFeature/> |   


![View OsmAnd Web](@site/static/img/web/web.png)


## OsmAnd Pro sync

OsmAnd Pro is a [cross-platform](../troubleshooting/setup.md#cross-platform) subscription.  
The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to OsmAnd Pro. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. Register your [account](../troubleshooting/setup.md#cross-platform) on the OsmAnd server inside OsmAnd app.
3. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).   

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks and favorites, will appear in the menu after you log in. They are available for display on the map.  

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *download backup data* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. There is also a button to *logout* of the account.  

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  


## Weather

The [Weather plugin](../plugins/weather.md) is a paid feature of the OsmAnd app. For the web version, Weather is a free feature with such capabilities as:
- Enable weather layers on the map: *Temperature, Pressure, Wind, Cloud cover and Precipitation* using the menu on the left or right.
- Enable the display of the weather forecast for the day or week (the forecast step is 3 hours).  

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)


## Tracks

In this section, you can:

- Download tracks from your device - [Locally](#local).
- Show tracks from [OsmAnd Cloud](#users-tracks-pro).
- Edit tracks.

### Local

- Any user can download any GPX file at [*osmand.net/map*](https://osmand.net/map).    

![OsmAnd Web local GPX](@site/static/img/web/web_local_gpx.png)

- Edit uploaded tracks.  

  Information screens:
  - *Info*: track data.
  - *Track*: list of points.
  - *Settings*: Opening the ["Create track"](#create-track-pro) tool.
  - *Elevation*: elevation graph.
  - *Speed*: speed graph.  

  Actions &#8942; button on the *Info* screen:
  - *Save to Cloud* button (Pro feature).
  - *Download* the track.
  - *Add Waypoints* - List of waypoints on the track.
  - *Recalculate Elevation (SRTM)* - Add elevation data for the selected track.
  - *Edit Name* - Change the name of the track.
  - *Clear* - Delete the track.  

![OsmAnd Web local GPX edit](@site/static/img/web/web_local_gpx_edit.png)

### User's tracks (Pro)

GPX tracks that you have in OsmAnd Cloud will be available for display and editing after login. Only for **Pro users** <ProFeature/>.
The following features are available:

- View track folders - Track folders from OsmAnd Cloud (*My Places → Tracks*).

- Information screens:
  - *Information* - displaying track data.
  - *Elevation* - graph of elevation.
  - *Speed* - speed graph.
  - *Settings* - list of navigation profiles for the *Create route* tool.  

- Actions &#8942; button on the *Information* screen:
  - *Download* - downloads the track to the PC.
  - *Get SRTM* - displays the elevation graph of the selected track.
  - *Edit* - change the name and other data for the selected track.
  - Editing a track with the *Create route* tool.
  - *Add to collection* - creating a collection of tracks to create an OBF file.
  - *Recalculate Elevation (SRTM)* - add elevation data for the selected track.
  - *Delete* - deletes the track.

![OsmAnd Web cloud GPX edit](@site/static/img/web/web_cloud_gpx_edit.png)


## Farorites (Pro)

After registering an OsmAnd Pro account, the user's Favorites are displayed in the Favorites menu.  
The following actions are available:

- Show favorites on map.
- Information - name and description of the favorite.
- Delete a favorite.
- [Add new favorites](#add--edit-favorite) - right click on the map.
- [Edit favorites](#add--edit-favorite).  

![OsmAnd Web cloud Favorites edit](@site/static/img/web/web_cloud_favorites_edit.png)

### Add / Edit Favorite

[To add](../personal/favorites.md#edit) a new favorite point, right-click on the screen. To start editing, click on the favorite point, the edit menu screen looks the same as [the menu in OsmAnd app](../personal/favorites.md#create).  

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)


## Map style

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)


## Navigation route

- To start building a navigation route, right-click to add the *Start* and *End* points.

![OsmAnd Web Create Route](@site/static/img/web/web_create_route.png)

- After adding the start and end points, we get the route.

![OsmAnd Web Create Route](@site/static/img/web/web_create_route_1-1.png)

- In the Route block you can move the start and end points, edit them and change the type of route.

![OsmAnd Web Create Route](@site/static/img/web/web_create_route_2-1.png)


## Create track (Pro)

A web version of the ["Plan route"](../plan-route/create-route.md) tool, similar to the OsmAnd app, is currently being developed. To go to create a route, *Right-click → Create Route*.  
Here you can select a navigation profile to build a section of the route, add waypoints, save the route and view information about it.  

![OsmAnd Web Create Track](@site/static/img/web/web_create_track.png)

You can view any actions and display track information in the [Track section](#tracks) of this article.

![OsmAnd Web Create Track](@site/static/img/web/web_create_track_info.png)

