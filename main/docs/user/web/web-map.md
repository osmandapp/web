---
sidebar_position: 1
sidebar_label: Map
title: Map on the Website
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

:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::

## Map Context Menu

For opening it right click anywhere on the map. This menu includes the following actions:

- **Where am I** – Quickly find your current location on the map
- **Open weather** – Open the Weather menu.
- **Create new route** – Plan a route from the selected location.
- **Add Favorite** – Mark a point of interest as a favorite for easy access.
- **Directions from** – Start navigation from the selected point.
- **Directions to** – Get directions to the selected point.
- **Cope coordinates** – Copy the coordinates for external use.
- **Add pin** – Place a pin to mark a location on the map.
- **Show regions** – Display the regions associated with the selected point.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Weather

The [Weather plugin](../plugins/weather.md) is a paid feature of the OsmAnd app. For the web version, Weather is a free feature with such capabilities as:

- Enable weather layers on the map: *Temperature, Pressure, Wind, Cloud cover and Precipitation* using the menu on the left or right.
- Enable the display of the weather forecast for the day or week (the forecast step is 3 hours).  

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)


## POIs on the Map

To show POIs on the map:

*Configure map menu or 🔍 Search icon to open the search tab → choose categories*. Read more about this feature on the ["Search" section](web-search.md).

![POIs menu](@site/static/img/web/poi_menu.png)


## Tracks

It's a paid feature <ProFeature/>. At first you need to loggin your OsmAnd Pro:

![Track loggin](@site/static/img/web/track_loggin.png)

For Track section:

- Show tracks from [OsmAnd Cloud](#users-tracks-pro).
- Adding tracks on the map (**Visible on map** folder).
- Looking all tracks info and graph
- Modify tracks and add it to Cloud.
- Download and delete tracks.
- Create new folders or delete it.
- Download folders as OSF or OBF collection.


### Visible on the Map

Here there is a list of visible tracks on the map.

_Switch on/off_ tracks for showing or not its on the map.

![Visible on the map](@site/static/img/web/visible.png)


### Track folder menu

Click to the *Tree points* **⋮** button for open *Track Folder* menu. Here you can Download all tracks from chosen folder as:

 - Download as OSF.
 - Download as OBF Collection:
  You can get OBF map from this data: [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) or [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).

    -  [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/):

  You can download offline map OBF (OsmAnd Binary Format) and open it with OsmAnd on device, it's suitable to display large quantity of tracks will be visible on the map.

    -  [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes):

  Also You can import map of tracks as Travel book which will allow you also to select a specific track on the map and use it as normal GPX. Travel book also supports features such as displaying tracks as points, filtering tracks by activity type and filtering waypoints.

- _Rename_ chosen folder.
- _Delete_ chosen folder.

![Track folder menu](@site/static/img/web/collection.png)


### Cloud Tracks

GPX tracks that you have in [OsmAnd Cloud](../personal/osmand-cloud.md) will be available for display and editing after login. Only for **Pro users** <ProFeature/> and for [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) users (who can download their data even after their Pro subscription has expired).

The following features are available after choosin cloud track:

- Information screens:
  - *Information* - displaying track data.
  - *Elevation* - graph of elevation.
  - *Speed* - speed graph.
  - *Slope* - slope graph.
  - *Settings* - list of navigation profiles for the *Create route* tool.  

- Action buttons:
  - *Edit track* - adding cloud track to local for editing (_Edit locality_ button on the panel).
  - *Download GPX* - downloads the track to the PC.
  - *Recalculate* Elevation (Satellite) - displays the elevation graph of the selected track.
  - *Delete Track* - deletes the track.
  - *Close track* - close the track.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)


## Favorites

After registering an [**OsmAnd Pro**](../personal/osmand-cloud.md#login) and for [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), the user's Favorites are displayed in the Favorites menu.  
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


## URL Schemes

For easy use of the OsmAnd application you can take advantage of direct links. These are special URLs that allow you to transfer location and contain detailed data about pins and tracks.  

These address strings can be copied and transferred using any data transfer medium supported by your device and used in the Android or iOS versions of OsmAnd.  

1. **URL with a pin on the map:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL without a pin on the map:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL with navigation:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Depending on the specified parameters, URL strings may contain:

- **latitude:** latitude value as a number.  
- **longitude:** longitude value as a number.  
- **start-finish:** for navigation.
- **profile:** for navigation.
- **zoom:** zoom level.

4.  **Weather**&nbsp; – &nbsp;`osmand.net/map/weather`

***For example***, you can directly access the Favorites page via:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5.  **Account**&nbsp; – &nbsp;`osmand.net/map/account`

6.  **Configure Map**&nbsp; – &nbsp;`osmand.net/map/configure/`

7.  **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8.  **Favorites**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9.  **Settings**&nbsp; – &nbsp;`osmand.net/map/settings`

10.  **Plan a Route**&nbsp; - &nbsp;`osmand.net/map/plan`

11.  For the current [**Explore page**](#explore-map-menu)&nbsp; - &nbsp;`osmand.net/map/search`


> *This article was last updated in September 2024*
