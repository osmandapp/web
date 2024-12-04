---
sidebar_position: 3
sidebar_label: Map
title: Global Map on the Website
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

:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::


## Overview

The OsmAnd web map is a global map based on [OpenStreetMap (OSM)](https://www.openstreetmap.org/) data. It allows users to view their own data, such as tracks and favorites, create navigation routes for any profile, and access additional features like weather, public GPX tracks, POIs, and Wikimedia images. Explore and customize your data experience directly in your browser.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Map Context Menu

For opening it right click anywhere on the map. This menu includes the following actions:

- **Where am I** – Quickly find your current location on the map. This feature displays the nearest addresses to the selected point on the map.
- **Open weather** – Access the [Weather menu](#weather) to view weather details.
- **Create new route** – Opens the ["Plan a route" tool](../web/planner.md#create-track-and-local) with the selected location as the starting or destination point.
- **Add Favorite** –  Allows you to create and save a [favorite](../web/web-userdata.mdx#add--edit-favorite) at any point on the map for easy access.
- **Directions from** –  Sets the selected point as the [starting location](../web/planner.md#navigation-route) for navigation.
- **Directions to** – Sets the selected point as the [destination for navigation](../web/planner.md#navigation-route).
- **Copy coordinates** – Copies the coordinates of the selected point for external use.
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Show regions** – Displays the regions associated with the selected location.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Weather

Weather on the OsmAnd web is available from two forecast sources: GFS (default) and ECMWF. To switch the forecast source, click the umbrella button in the weather menu.

- View weather forecasts for the day or week, with a 3-hour forecast step.


The Weather menu displays your coordinates, current weather data (temperature, precipitation, wind, air pressure, and cloud cover) for the current time and date or a selected time. You can adjust the date and time using the time tool in the weather menu.

To view weather layers on the map, use the layers button to select which layers (Temperature, Pressure, Wind, Cloud Cover, or Precipitation) to display on the map:
- Enable weather layers on the map, including *Temperature, Pressure, Wind, Cloud cover and Precipitation* using the menu on the left or right.

![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

Click on the forecast data in the menu to view the 7-day forecast (in both graph and list format) for your location.

![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Configure map

The Configure Map menu allows you to manage the display settings for map data, such as POI layers, Favorites, tracks, and terrain.

To open this menu, click the button in the top left corner or access it through the Menu. The menu has settings:
- [POI overlay...](#poi-overlay-section) - allows to choose and show needed POI categories on the map.
- [Favorites](#favorites-section) - switch on/off favorites on the map.
- [Tracks](#tracks-section) - contains GPX tracks visible on the map.
- [Terrain](#terrain-section) - allow to switch on/off terrain color scheme on the map.

![POIs menu](@site/static/img/web/configure_map_web.png)

### POI overlay section

To show POIs on the map:

*Configure map menu → POI overlay...*. Here you can choose catergories for showing its on the map.

Or you can use the ["Search" section](web-search.md) for finding needed place.

![POIs menu](@site/static/img/web/poi_menu.png)

### Favorites section

By one click you can switch on/off favorites on the map, but only favorites which have ["Show on map" enabled](../web/web-userdata.mdx##favorites-on-the-web).


### Tracks section

Contains list of user's [GPX tracks visible on the map](../web/web-userdata.mdx#visible-on-the-map).

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)

### Terrain section

It's a paid feature <ProFeature/>. At first you need to loggin your OsmAnd Pro:

Here you can choose color scheme for terrain: Hillshade, Slope and Height. Set visibility of chosen terrain layer from 0% to 100%.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)



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
