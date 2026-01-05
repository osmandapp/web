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

<!--
<InfoIncompleteArticle/>
-->


## Overview {#overview}

The **Search menu** can be accessed from the side panel or from the Search icon 🔍 on the map. It contains:

- [Search Bar](#search-bar). Enter keywords to search for specific locations or points of interest.  
- [Categories Section](#categories). Browse through categorized options for easier POI searches.  
- [Explore Section](#explore). View popular POI for the current map center and explore places with photos on the map.

![Search menu](@site/static/img/web/search.png)

## Search Options {#search-options}

### Search Bar {#search-bar}

Use the **Search Bar** to find specific places or points of interest by name. Click the Search icon, enter your query, and select a result from the list. Selecting a POI opens the [POI Context Menu](#poi-context-menu), where you can view details and use quick actions.

If you search by a category name, the first result may show the corresponding POI category. Click the category to open the [Categories search](#categories) view.

![Search Options](@site/static/img/web/search_bar.png)

### Categories {#categories}

Use **Categories** to browse POI by type and display them on the map. The menu shows six popular categories for quick access. If you need more options, click Show all to open the full list of 18 available categories. Selecting a category displays matching POI on the map; selecting a POI opens the [POI Context Menu](#poi-context-menu).

![Search Options](@site/static/img/web/search_categories.png)

### Explore {#explore}

The **Explore** section shows popular places with photos directly on the map. It builds a list of POI for the current map center (sorted by popularity) and displays the same places as photo markers on the map. Preview images and POI information are based on Wikidata/Wikimedia and related sources when available.

Open the Search tab to access Explore — the Explore results are displayed on the map automatically. Use Show all to open the full Explore categories list. You can refine what appears in the list and on the map using Filter, which opens the Explore categories menu. Selecting a POI from the list or on the map opens the [POI Context Menu](#poi-context-menu).

![Search Options](@site/static/img/web/search_explore.png) ![Search Options](@site/static/img/web/explore_filters.png)

## POI Context Menu {#poi-context-menu}

No matter which search option you use (Search Bar, Categories, or Explore), selecting a POI on the map or in the results list opens the POI Context Menu. The context menu is the main place to view POI information and perform common actions. It combines POI details (such as location and related data) with quick actions (for example, saving, sharing, or starting navigation).

### POI Details {#poi-details}

The **POI Context Menu** displays key information about the selected place and provides links based on the available OSM and Wikimedia/Wikidata data:
- **Name and icon** — shows the POI name and its icon.
- **Distance and direction** — shows the distance and direction to the POI.
- **Location** — displays the POI coordinates.
- **Description** — provides additional information about the POI when available (for example, from Wikipedia).
- **Online photos** — shows Wikimedia photos related to the POI when available. Select Show all to open the Photo Gallery. Select a photo to open it in the gallery (Open photo mode).
- **Object data** — additional POI information, including OSM tags and other details such as contacts, social links, Wikipedia and Wikivoyage links, descriptions, and inscriptions (when available).
- **OSM ID** — the OpenStreetMap identifier of the POI.
- **Coordinates** — select the coordinates to copy them.

![POI Context Menu](@site/static/img/web/poi_context_menu.png)

### POI Actions {#poi-actions}

The **POI Context Menu** includes action buttons for common tasks. Use these quick actions to save a place, share it, or start route planning and navigation:
- **Add to Favorites** — saves the POI to your [Favorites](../web/web-favorites.md#add--edit-favorite).
- **Share** — generates a shareable link that opens the POI directly in OsmAnd Web. The link includes the POI name, type, and coordinates (pin).
- **Directions from** — sets the selected POI as the start point and opens the route panel so you can choose a destination and profile.
- **Navigation** — sets the selected POI as the destination point for [navigation](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

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




