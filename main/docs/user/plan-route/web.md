---
sidebar_position: 4
title: Web Route Planner
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
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::

The following features are available for users of the Free version of OsmAnd and for users with the [Pro](../purchases/android.md#osmand-pro) version <ProFeature/>:  

| Features | Versions |
|--- |--- |
| [OsmAnd Pro sync](#osmand-pro-sync) | <ProFeature/> |
| [Weather](#weather) | Free |
| [Tracks](#weather) | <ProFeature/> |
| [Favorites](#farorites-pro) | [Osmand Start](https://osmand.net/blog/start) or <ProFeature/> | 
| [Navigation Route](#navigation-route) | Free |
| [Create track](#create-track-pro) | Free |


![View OsmAnd Web](@site/static/img/web/web.png)


## OsmAnd Pro and OsmAnd Start sync

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#cross-platform) paid subscription.
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to *OsmAnd Pro*. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create *OsmAnd Start* account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](../troubleshooting/setup.md#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).  

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  

## Weather

The [Weather plugin](../plugins/weather.md) is a paid feature of the OsmAnd app. For the web version, Weather is a free feature with such capabilities as:

- Enable weather layers on the map: *Temperature, Pressure, Wind, Cloud cover and Precipitation* using the menu on the left or right.
- Enable the display of the weather forecast for the day or week (the forecast step is 3 hours).  

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)


## Tracks

It's a paid feature <ProFeature/>. At first you need to loggin your OsmAnd Pro:

![Track loggin](@site/static/img/web/track_loggin.png)

For Track section:

- Show tracks from [OsmAnd Cloud](#users-tracks-pro).
- Adding tracks on the map (*Visible on map* folder).
- Looking all tracks info and graph
- Modify tracks and add it to Cloud.
- Download and delete tracks.
- Create new folders or delete it.
- Download folders as `.osf` or `.obf` collection.


### Visible on the map

Here there is a list of visible tracks on the map.

Switch on / off tracks for showing or not its on the map.

![Visible on the map](@site/static/img/web/visible.png)


### Track folder menu

Click to the *Tree points* ⋮ button for open *Track Folder* menu. Here you can Download all tracks from chosen folder as:

- Download as OSF
- Download as OBF Collection:
  You can get OBF map from this data: [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) or [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).

    [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/):

You can download offline map OBF (OsmAnd Binary Format) and open it with OsmAnd on device, it's suitable to display large quantity of tracks will be visible on the map.

  [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes):

Also You can import map of tracks as Travel book which will allow you also to select a specific track on the map and use it as normal GPX. Travel book also supports features such as displaying tracks as points, filtering tracks by activity type and filtering waypoints.

- Rename chosen folder.
- Delete chosen folder.

![Track folder menu](@site/static/img/web/collection.png)

### Cloud tracks

GPX tracks that you have in OsmAnd Cloud will be available for display and editing after login. Only for **Pro users** <ProFeature/>.

The following features are available after choosin cloud track:

- Information screens:
  - *Information* - displaying track data.
  - *Elevation* - graph of elevation.
  - *Speed* - speed graph.
  - *Slope* - slope graph.
  - *Settings* - list of navigation profiles for the *Create route* tool.  

- Action buttons:
  - *Edit track* - adding cloud track to local for editing (*Edit locality* button on the panel).
  - *Download GPX* - downloads the track to the PC.
  - *Recalculate* Elevation (Satellite) - displays the elevation graph of the selected track.
  - *Delete Track* - deletes the track.
  - *Close track* - close the track.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)


## Favorites

After registering an OsmAnd Pro or OsmAnd Start, your Favorites are displayed in the Favorites menu.  
The following actions are available:

- *Show on map* - show favorites points from the chosen folder on the map.
- *Rename* - name and description of favorite folder.
- *Download* - download the chosen favorite folder.
- *Delete* - delete the chosen favorite folder.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites.png)

### Add / Edit Favorite

[To add](../personal/favorites.md#edit) a new favorite point, right-click on the screen. To start editing, click on the favorite point, the edit menu screen looks the same as [the menu in OsmAnd app](../personal/favorites.md#create).  

![OsmAnd Web Favorites add](@site/static/img/web/web_favorites_add.png)


<!--
## Map style

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

## Navigation route

- To start building a navigation route, right-click to add the *Navigate from*,  *Navigate to* and *Navigate via* points.

- After adding the start and end points, we get the route.

- In the Route block you can move the start and end points, edit them and change the type of route.

![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- choose *Route profile* for changing navigation routing type:

![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- click to Orange circles on Navigation route for look at instructions:

![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- copy URL for sending the navigation route. Example: [https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://test.osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

## Create track and Local

A web version of the ["Plan route"](../plan-route/create-route.md) tool, similar to the OsmAnd app, is currently being developed. To go to create a route, *Right-click → Create new Route*.  Or you can use the *Create track* button on the *Local* menu(right side: *Pencil* and *Upload* buttons).

Here you can select a navigation profile to build a section of the route (New segments) or for all route (All segments), add waypoints, save the route and view information about it.  

![OsmAnd Web Create Track](@site/static/img/web/create_route.png)

You can view any actions and display track information in the [Track section](#tracks) of this article.

Actions for Local:

- *Import Track* - any user can download any GPX file at [*osmand.net/map*](https://osmand.net/map) to *Local* section.  
- Create track.

![OsmAnd Web Create Track](@site/static/img/web/create_route_2.png)

Local track menu and Edit has 3 panels: Info, Track, Waypoints, Turns.

*Info* actions and data:

  - *Save to Cloud*.
  - *Add description*.
  - *Rename* a track.
  - *recalculate* - Add elevation data for the selected track.
  - *Elevation*: elevation graph.
  - *Speed*: speed graph.  
  - *Slope*: slope graph.  
  - *Road details* - Road type, Surface, Steepness, Surface firmness, Piste.
  - *Download GPX* button (Pro feature).
  - *Close Track* the track.
  - *Delete Track* - Delete the track.

![OsmAnd Web Create Track](@site/static/img/web/create_route_3.png)


*Track section* contains track points. Here you can delete it or change order.
*Waypoints* menu contains track waypoints. Here you can show or not it on the map, and delete waypoints.

*Turns* menu contains info about segments turns.

![OsmAnd Web Create Track](@site/static/img/web/create_route_1.png)

## POIs on the map

Click to *POI* button on the side panel. *Show POI* menu: here you can choose POIs or search POI category for showing its on the map

![POIs menu](@site/static/img/web/poi_menu.png)

## Search function

Write your request for searching and showing on the map. Click to circle for open POI's name.

![Search menu](@site/static/img/web/search.png)

## URL scheme

For easy use of the OsmAnd application you can take advantage of direct links. These are special URLs that allow you to transfer location and contain detailed data about pins and tracks.  

These address strings can be copied and transferred using any data transfer medium supported by your device and used in the Android or iOS versions of OsmAnd.  

1. **URL with a pin on the map:**

    https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

    ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL without a pin on the map:**

    https://osmand.net/map/#9/52.3924/6.3116

    ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL with navigation:**

    https://osmand.net/map/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

    ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Depending on the specified parameters, URL strings may contain:

- **latitude:** latitude value as a number.  
- **longitude:** longitude value as a number.  
- **start-finish:** for navigation.
- **profile:** for navigation.
- **zoom:** zoom level.


## Related Articles

- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in January 2025*
