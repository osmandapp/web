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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Overview {#overview}

The OsmAnd web map is a global map based on [OpenStreetMap (OSM)](https://www.openstreetmap.org/) data. It allows users to view their own data, such as tracks and favorites, create navigation routes for any profile, and access additional features like weather, public GPX tracks, POIs, and Wikimedia images. Explore and customize your data experience directly in your browser.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Map Context Menu {#map-context-menu}

For opening it right click anywhere on the map. This menu includes the following actions:

- **Where am I** – Quickly find your current location on the map. This feature displays the nearest addresses to the selected point on the map.
- **Open weather** – Access the [Weather menu](../web/web-weather.md) to view weather details.
- **Create new route** – Opens the [*Plan a route* tool](../web/planner.md) with the selected location as the starting or destination point.
- **Add Favorite** –  Allows you to create and save a [favorite](../web/web-favorites.md#add--edit-favorite) at any point on the map for easy access.
- **Directions from** –  Sets the selected point as the [starting location](../web/planner.md#navigation-route) for navigation.
- **Directions to** – Sets the selected point as the [destination for navigation](../web/planner.md#navigation-route).
- **Copy coordinates** – Copies the coordinates of the selected point for external use.
- **Show regions** – Displays the regions associated with the selected location.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Map Context menu](@site/static/img/web/map_context_menu_new.png)


## Configure Map Menu {#configure-map-menu}

The Configure Map menu allows you to manage the display settings for map data, such as POI layers, favorites, tracks, and terrain. This menu is available after you sign in to your OsmAnd account. To open it, click the button in the **top left corner** or access it through the **Menu**.

- [POI overlay...](#poi-overlay). Allows you to choose and show needed POI categories on the map.
- [Favorites](#favorites). Toggle the display of favorites on the map.
- [Tracks](#tracks). Contains GPX tracks visible on the map.  
- [Terrain](#terrain). Enable or disable the terrain color scheme on the map.

![POIs menu](@site/static/img/web/configure_map_web.png)


### POI overlay {#poi-overlay}

The POI overlay feature lets you display Points of Interest (POIs) on the map by selected categories. This is useful when you want to browse places directly on the map.

To open the overlay: *Configure map menu → POI overlay*...The overlay list contains 18 categories. You can enable one category or enable multiple categories in any combination. When at least one category is enabled, the overlay provides a **Deselect all** action to clear the selection at once.

**Note:** If you are looking for a specific place, you can also use the [**Search section**](web-search.md) on the map.

Once POIs are displayed, selecting a POI marker on the map opens its details panel that shows information available for that object. Depending on the POI, it can include: place name and type, address, contact fields, OSM-related identifiers and coordinates, reference links (Wikipedia, Wikidata), when present. 

For POIs that have online photos, the details panel shows an Online photos block with thumbnails. Show all opens a gallery view with the full photo list. In the photo viewer, OsmAnd Web displays photo metadata when available, including: date, author, license, and description.

In the POI details panel, quick actions are available from the action buttons:
- *Add to Favorites* — saves the POI to your Favorites.
- *Share* — generates a shareable link that opens the POI directly in OsmAnd Web. The link includes the POI name, type, and coordinates (pin).
- *Directions from* — sets the selected POI as the start point and opens the Route panel so you can choose a destination and profile.
- *Navigation* — sets the selected POI as the destination point for navigation.

![POIs menu](@site/static/img/web/poi_categories.png) ![POIs menu](@site/static/img/web/poi_photo_new.png)


### Favorites {#favorites}

With one click, you can toggle favorites on or off on the map. However, only favorites with [**Show on map enabled**](../web/web-favorites.md#manage-favorites) will be displayed.


### Tracks {#tracks}

This section contains a list of your [**GPX tracks visible on the map**](../web/web-tracks.md#visible-on-the-map) and **Recently Visible** tracks.

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


### Terrain {#terrain}

The **Terrain** section is a paid feature <ProFeature/>. To use this feature, you must first log in to your OsmAnd Pro account.

In this section, you can:

- Choose a **color scheme** for terrain:
  - **Hillshade**
  - **Slope**
  - **Height**
- Adjust the visibility of the selected terrain layer from **0% to 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


## Settings {#settings}

In the Web Planner, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. You can read about OsmAnd Cloud [here](./web-cloud.md).

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)


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


## Related Articles {#related-articles}

- [Map Context Menu](../map/map-context-menu.md)
- [OsmAnd Account](./web-cloud.md)
- [Tracks](./web-tracks.md)
- [Favorites](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)

