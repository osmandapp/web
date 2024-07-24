---
sidebar_position: 6
---

# Web 1.01

Web 1.01 is the latest web version of OsmAnd, which includes new useful features and improvements. This article describes all the main updates of the [Web Route Planner](../user/plan-route/web.md). 

**What's new**

- Default [system language](#system-language) (under development).
- New [context menu](map-context-menu) for map settings.
- New options for [map search](#explore-map-menu).
    - Update for [POIs context menu](#poi-context-menu).
    - POIs [Photo gallery](#photo-gallery).
- Display of [Wikimedia images](#wikimedia-images) on the map (in testing).
- Added ability to provide [URLs for different web sections](#more-urls).
- Updated icons for Favorites (expected in 4.8).
- Added a special banner with information about the OsmAnd mobile version and a link (expected in 4.8).
- Fixed incorrect precipitation data.
- Fixed user data lag when there is a huge amount of data.


## System language

The Web uses language from browser settings. For Chrome priority `chrome://settings/languages`.

User can change system (menu) language manually by _Menu → ⚙ → Dislay language_.

## Map Context menu

For this release the new Map Context menu was added. For opening the menu to click the right button of mouse to any place of the map. At this menu next actions have been added:
 - _Where am I_
 - _Show weather_
 - _Create new route_
 - _Add Favorite_
 - _Directions from_
 - _Directions to_
 - _Cope coordinates_
 - _Add pin_
 - _Show regions_


![Map Context menu](../../blog/2024-07-01-web-1-01/img/map_context_menu.png)


## Explore map menu

New feature for the web with finding places by POIs categories on the map. Show photos for POI on the map.

Click to 🔍 button and open tab with Popular POI on the screen. Tap to one of it for opening POI context menu.

![Explore menu](../../blog/2024-07-01-web-1-01/img/explore.png)

For starting search by categories you need to open the Categories menu and choose needed items:

![Explore menu](../../blog/2024-07-01-web-1-01/img/explore_cat.png)

### POI Context menu

By clicking to POI the new Context menu:
- name (category)
- direction and Distance
- Description
- [Online photos](#photo-gallery)


![Explore menu](../../blog/2024-07-01-web-1-01/img/poi_context.png)


### Photo gallery

Clicking to Online photos to open Photo gallery. Here you can list all photos of a POI.

![Explore menu](../../blog/2024-07-01-web-1-01/img/poi_photo.png)


## Wikimedia images

Note: test version for developers

Added the feature to show Wikimedia images on the map.

![Explore menu](../../blog/2024-07-01-web-1-01/img/wiki_photos.png)


## More URLs

| | |
| --- | --- |
| **Weather** | `osmand.net/map/weather` |
| **Account** | `osmand.net/map/account` |
| **Configure Map** | `osmand.net/map/configure/` |
| **Tracks** | `osmand.net/map/mydata/tracks` |
| **Favorites** | `osmand.net/map/mydata/favorites` |
| **Navigation** | `osmand.net/map/navigate` |
| **Settings** | `osmand.net/map/settings` |
| **Plan a Route** | `osmand.net/map/plan` |
| For current [Explore page](#explore-map-menu) | `osmand.net/map/search` |


Example - `https://osmand.net/map/mydata/favorites/#12/40.7452/-74.0326`


## Optional Updates

- Added a special [banner](https://github.com/osmandapp/OsmAnd/issues/18825) with information about the OsmAnd mobile version and a link.
- Fixed [incorrect precipitation data](https://github.com/osmandapp/OsmAnd-Issues/issues/2578).
- Fixed user data lag when there is a [huge amount of data](https://github.com/osmandapp/web/issues/384).
- Fixed [zooming](https://github.com/osmandapp/web/issues/246) when enabling favorites or tracks.

