---
sidebar_position: 6
---

# Web 1.01

Web 1.01 is the latest web version of OsmAnd, which includes new useful features and improvements. This article describes all the main updates of the [Web Route Planner](../user/plan-route/web.md). 

**What's new**

- Default [system language](#system-language) (under development).
- New [context menu](#map-context-menu) for map settings.
- New options for [map search](#explore-map-menu).
    - Update for [POIs context menu](#poi-context-menu).
    - POIs [Photo gallery](#photo-gallery).
- Display of [Wikimedia images](#wikimedia-images) on the map (in testing).
- Added ability to provide [URLs for different web sections](#more-urls).
- Updated icons for Favorites (expected in 4.8).
- Added a special banner with information about the OsmAnd mobile version and a link (expected in 4.8).
- Fixed incorrect precipitation data.
- Fixed user data lag when there is a huge amount of data.


## System Language

- The Web version of OsmAnd uses the language from the browser settings.  
- For Chrome, the priority is `chrome://settings/languages`.  
- You can change the system (menu) language manually by selecting  
    *Menu →* ⚙ *→ Turn off language*.


## Map Context menu

![Map Context menu](../../blog/2024-07-01-web-1-01/img/map_context_menu.png)

In this release a new context menu for the map has been added, to open it right click anywhere on the map. This menu includes the following actions:

- **Where am I**
- **Show weather**
- **Create new route**
- **Add Favorite**
- **Directions from**
- **Directions to**
- **Cope coordinates**
- **Add pin**
- **Show regions**


## Explore Map Menu

![Explore menu](../../blog/2024-07-01-web-1-01/img/explore.png)

A new feature in OsmAnd Web with map places search by POI categories, which displays photos of a specific point of interest on the map.

- Click on 🔍 to open a tab with popular POIs on the map screen. 
- Then select and click on one of the POIs to open the context menu for it.
- To start searching by category, open the Categories menu and select the required items.

![Explore menu](../../blog/2024-07-01-web-1-01/img/explore_cat.png)

### POI Context Menu

![Explore menu](../../blog/2024-07-01-web-1-01/img/poi_context.png)

Clicking on a POI opens a new context menu that includes:

- Name (Сategory).
- Direction and distance.
- Description.
- [Online photos](#photo-gallery).

### Photo Gallery

![Explore menu](../../blog/2024-07-01-web-1-01/img/poi_photo.png)

Clicking on the online photos opens the photo gallery. Here you can scroll through all POI photos.


## Wikimedia Images

![Explore menu](../../blog/2024-07-01-web-1-01/img/wiki_photos.png)

:::note
This is a test version for developers.
:::

Added the feature to display Wikimedia images on the map.


## More URLs

-  **Weather**&nbsp; – &nbsp;`osmand.net/map/weather`

-  **Account**&nbsp; – &nbsp;`osmand.net/map/account`

-  **Configure Map**&nbsp; – &nbsp;`osmand.net/map/configure/`

-  **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

-  **Favorites**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

-  **Navigation**&nbsp; – &nbsp;`osmand.net/map/navigate`

-  **Settings**&nbsp; – &nbsp;`osmand.net/map/settings`

-  **Plan a Route**&nbsp; - &nbsp;`osmand.net/map/plan`

-  For the current [**Explore page**](#explore-map-menu)&nbsp; - &nbsp;`osmand.net/map/search`


***Example***:  
    `https://osmand.net/map/mydata/favorites/#12/40.7452/-74.0326`


## Optional Updates

- Added a special [banner](https://github.com/osmandapp/OsmAnd/issues/18825) with information about the OsmAnd mobile version and a link.
- Fixed [incorrect precipitation data](https://github.com/osmandapp/OsmAnd-Issues/issues/2578).
- Fixed user data lag when there is a [huge amount of data](https://github.com/osmandapp/web/issues/384).
- Fixed [zooming](https://github.com/osmandapp/web/issues/246) when enabling favorites or tracks.

