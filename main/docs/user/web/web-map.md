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


## Overview {#overview}

The OsmAnd web map is a global map based on [OpenStreetMap (OSM)](https://www.openstreetmap.org/) data. It allows users to view their own data, such as tracks and favorites, create navigation routes for any profile, and access additional features like weather, public GPX tracks, POIs, and Wikimedia images. Explore and customize your data experience directly in your browser.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Map Context Menu {#map-context-menu}

For opening it right click anywhere on the map. This menu includes the following actions:

- **Where am I** – Quickly find your current location on the map. This feature displays the nearest addresses to the selected point on the map.
- **Open weather** – Access the [Weather menu](#weather-on-the-web) to view weather details.
- **Create new route** – Opens the [*Plan a route* tool](../web/planner.md#create-track-and-local) with the selected location as the starting or destination point.
- **Add Favorite** –  Allows you to create and save a [favorite](../web/web-userdata.mdx#add--edit-favorite) at any point on the map for easy access.
- **Directions from** –  Sets the selected point as the [starting location](../web/planner.md#navigation-route) for navigation.
- **Directions to** – Sets the selected point as the [destination for navigation](../web/planner.md#navigation-route).
- **Copy coordinates** – Copies the coordinates of the selected point for external use.
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Show regions** – Displays the regions associated with the selected location.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Weather on the Web {#weather-on-the-web}

The OsmAnd Web provides weather information from two forecast sources:

- **GFS (default)**  
- **ECMWF**  

To switch between these forecast sources, click the **umbrella button** in the Weather menu.

***Features of the weather menu:***  

- **Current Weather Data**: Displays your coordinates along with the following data:

  - Temperature.
  - Precipitation.
  - Wind.
  - Air Pressure.
  - Cloud Cover.

- **Time Adjustment**: Modify the date and time using the **time tool** in the Weather menu to view weather for a specific moment.

***Weather layers on the map:***  

- Use the **layers button** to select and enable weather layers such as:

  - Temperature.
  - Pressure.
  - Wind.
  - Cloud Cover.
  - Precipitation.

***Viewing forecasts:***  

- Weather forecasts are available for the **7-day** forecast.
- Forecast updates are provided in **3-hour steps** for detailed insights.

To access or customize these features, use the menus on the left or right side of the interface.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***7-Day Forecast***:  

Click on the forecast data in the menu to view the **7-day forecast** for your location. The forecast is available in:

- **Graph format**  
- **List format**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Configure Map Menu {#configure-map-menu}

The Configure Map menu allows you to manage the display settings for map data, such as POI layers, Favorites, tracks, and terrain. Please log in to your OsmAnd account to use this menu section.

To open this menu, click the button in the **top left corner** or access it through the **Menu**.

- [POI overlay...](#poi-overlay-section). Allows you to choose and show needed POI categories on the map.
- [Favorites](#favorites-section). Toggle the display of favorites on the map.
- [Tracks](#tracks-section). Contains GPX tracks visible on the map.  
- [Terrain](#terrain-section). Enable or disable the terrain color scheme on the map.

![POIs menu](@site/static/img/web/configure_map_web.png)


### POI overlay section {#poi-overlay-section}

To show POIs on the map:

*Configure map menu → POI overlay...*. Here, you can choose categories to display on the map.

Alternatively, you can use the [**Search section**](web-search.md) to find the desired place.

![POIs menu](@site/static/img/web/poi_menu.png)


### Favorites Section {#favorites-section}

With one click, you can toggle favorites on or off on the map. However, only favorites with [**Show on map enabled**](../web/web-userdata.mdx##favorites-on-the-web) will be displayed.


### Tracks section {#tracks-section}

This section contains a list of your [**GPX tracks visible on the map**](../web/web-userdata.mdx#visible-on-the-map) and **Recently Visible** tracks.

- You can toggle tracks on or off directly.  
- Switch tracks on or off from the **Recently Visible** list.  

Each track has a **Context Menu** (accessible via the ⋮ button) with the following commands:

- **Hide track**: Hides the currently visible track from the map.  
- **Make track visible**: Displays a track from the Recently Visible list on the map.  
- **Rename**: Allows you to rename the track for easier identification.  
- **Duplicate**: Creates a copy of the track.  
- **Download**: Saves the track to your local device.  
- **Delete**: Removes the track permanently from the list.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Terrain section {#terrain-section}

The **Terrain** section is a paid feature <ProFeature/>. To use this feature, you must first log in to your OsmAnd Pro account.

In this section, you can:

- Choose a **color scheme** for terrain:
  - **Hillshade**
  - **Slope**
  - **Height**
- Adjust the visibility of the selected terrain layer from **0% to 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL Schemes {#url-schemes}

For easy use of the OsmAnd web service (and application), you can take advantage of direct links. These are special URLs that allow you to transfer location data and include details about pins, tracks, weather, and more.

These URLs can be copied and shared using any medium supported by your device and are compatible with both the Android and iOS versions of OsmAnd.

1. **URL with a pin on the map:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL without a pin on the map:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL with navigation:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Depending on the specified parameters, URL strings can contain:

- **latitude**: latitude value as a number.  
- **longitude**: longitude value as a number.  
- **start-finish**: coordinates for navigation.  
- **profile**: navigation profile (e.g., car, bike).  
- **zoom**: zoom level.

4. **Weather**&nbsp; – &nbsp;`osmand.net/map/weather`

***For example***, you can directly access the weather page with specified coordinates:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Account**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configure Map**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favorites**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Settings**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Plan a Route**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Direct link to the current [**Explore page**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`


> *Last updated: January 2025*
