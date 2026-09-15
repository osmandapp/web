---
sidebar_position: 10
sidebar_label:  Search
title: Search on the Website
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


## Overview {#overview}

The **Search menu** can be accessed from the side panel or from the Search icon 🔍 on the map. It contains:

- [Search Bar](#search-bar). Enter keywords to search for specific locations, points of interest, favorites, or tracks. 
- [Categories Section](#categories). Browse through categorized options for easier POI searches.  
- [Explore Section](#explore). View popular POI for the current map center and explore places with photos on the map.

![Search menu](@site/static/img/web/search.png)

## Search Options {#search-options}

### Search Bar {#search-bar}

Use the **Search Bar** to find specific places, points of interest, [favorites](../web/web-favorites.md), and [tracks](../web/web-tracks.md) by name. Click the Search icon, enter your query, and select a result from the list. Selecting a POI opens the [POI Context Menu](#poi-context-menu), while selecting a favorite or track opens its details, where you can view information and use quick actions.

If you search by a category name, the first result may show the corresponding POI category. Click the category to open the [Categories search](#categories) view.

![Search Options](@site/static/img/web/search_bar.png)

### Categories {#categories}

Use **Categories** to browse POI by type and display them on the map. The menu shows six popular categories for quick access. If you need more options, click Show all to open the full list of 18 available categories. Selecting a category displays matching POI on the map; selecting a POI opens the [POI Context Menu](#poi-context-menu).

![Search Options](@site/static/img/web/search_categories.png)

### Explore {#explore}

The **Explore** section shows [popular places](https://osmand.net/docs/user/map/popular_places) with photos directly on the map. It builds a list of POI for the current map center (sorted by popularity) and displays the same places as photo markers on the map. Preview images and POI information are based on Wikidata/Wikimedia and related sources when available.

Open the Search tab to access Explore — the Explore results are displayed on the map automatically. Use Show all to open the full Explore categories list. You can refine what appears in the list and on the map using Filter, which opens the Explore categories menu. Selecting a POI from the list or on the map opens the [POI Context Menu](#poi-context-menu).

![Search Options](@site/static/img/web/search_explore.png) ![Search Options](@site/static/img/web/explore_filters.png)

## POI Context Menu {#poi-context-menu}

No matter which search option you use (Search Bar, Categories, or Explore), selecting a POI on the map or in the results list opens the POI Context Menu. The context menu is the main place to view POI information and perform common actions. It combines POI details (such as location and related data) with quick actions (for example, saving, sharing, or starting navigation).

### POI Details {#poi-details}

The **POI Context Menu** displays key information about the selected place and provides links based on the available OSM and Wikimedia/Wikidata data:
- **Name and icon** — shows the POI name and its icon.
- **Distance and direction** — shows the distance and direction to the POI.
- **Location** — displays the POI coordinates.
- **Opening hours** — shows the parsed opening hours from [OSM data](https://wiki.openstreetmap.org/wiki/Key:opening_hours). The current status is displayed dynamically depending on the current time (for example, *Open now*, *Closed*, or *Opens at 10:00*), and the full schedule is shown below.
- **Description** — provides additional information about the POI when available (for example, from Wikipedia).
- **Online photos** — shows Wikimedia photos related to the POI when available. Select Show all to open the Photo Gallery. Select a photo to open it in the gallery (Open photo mode).
- **Object data** — additional POI information, including OSM tags and other details such as contacts, social links, Wikipedia and Wikivoyage links, descriptions, and inscriptions (when available).
- **OSM ID** — the OpenStreetMap identifier of the POI.
- **Coordinates** — select the coordinates to copy them.

![POI Context Menu](@site/static/img/web/poi_context_menu_new.png)

### POI Actions {#poi-actions}

The **POI Context Menu** includes action buttons for common tasks. Use these quick actions to save a place, share it, or start route planning and navigation:
- **Add to Favorites** — saves the POI to your [Favorites](../web/web-favorites.md#favorites-actions).
- **Share** — generates a shareable link that opens the POI directly in OsmAnd Web. The link includes the POI name, type, and coordinates (pin).
- **Directions from** — sets the selected POI as the start point and opens the route panel so you can choose a destination and profile.
- **Navigation** — sets the selected POI as the destination point for [navigation](../web/web-navigation.md#start-a-route).

### Photo Gallery {#photo-gallery}

Click ***Show all*** in the **Online photos** section of the POI Context Menu to open the *Photo Gallery* for the selected POI. The gallery lets you browse all available photos. Click a photo to open it in a larger view (Open photo mode). Use Back to return to the POI Context Menu.

Photo details include:
- **Date**. The date the photo was taken or uploaded.  
- **Author**. The name of the photo's author.  
- **License Information**. Details about the photo's usage rights.  
- **Description**. Additional information about the photo.

![Photo Gallery](@site/static/img/web/poi_photo.png)


## Related Articles {#related-articles}

- [Search All](../search/search-all.md)
- [Search POI](../search/search-poi.md)
- [Map](../web/web-map.md)




