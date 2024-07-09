---
sidebar_position: 1
title:  Search All
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Overview

**Search** is a useful tool for quickly finding locations. You can use search to find a location by address, coordinates, points of interest (POIs), or previous searches. Search [*Address*](#search-address) allows you to enter the address you are looking for to get an exact location. [*Сoordinates*](#search-coordinates) search allows you to enter geographic coordinates such as latitude and longitude. Search [*POI*](#search-poi) allows you to search for nearby places in specific categories, such as cafes, hotels, or filling stations. And search [*History*](#search-history) saves past searches for quick access to previously found places. The search feature makes it easy to plan trips, navigate unknown terrain, and find places of interest nearby.


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI list Android](@site/static/img/search/poi_list_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI list iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

You need to follow one of the steps to start your search: 
- Tap the [*Search button*](../widgets/map-buttons.md#search) on the map application screen and enter your query.
- Go to the main *Menu → Search → enter your search query*.
- When preparing to start a route, tap [*Navigation → Set destination → Search field*](../navigation/setup/route-navigation.md#set-target-point) *→ search query*.  


Important information:
- *Downloaded offline vector maps are required to search with OsmAnd*.
- Initially, **the search is based on the data located on the map in the visible area of the device screen**, but if nothing is found there, OsmAnd offers to increase the search radius.  

### Basic queries

*Query list*:

- Coordinates all available formats.
- Address:
    - Street, House Number;
    - City, Street;
    - Street Intersections;
    - City;
    - Postal Code, House Number;
    - Postal Code, Street, House Number.
- Search POIs by name and by category with additional filters.
- Search by Favorites and Waypoints.
- Search by track.
- Online search (Nominatim).
- URL search (Google and OsmAnd).
- Search History.

*Supported formats*:  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:   
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.


### Search by list

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite search Android](@site/static/img/search/favorite_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite search iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

You can find the required location on the map from the list of points that appear as you enter a query.
- Start typing the name or address in the search bar.
- As you type, the list displays the points closest to the query, in roughly this order:
    - POIs Categories;
    - Favorites, POIs, and Waypoints;
    - Tracks;
    - Addresses;
    - Maps to download.


### Search on the map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd allows you to search for points displayed on a map on your device's screen. To do this:
- Use [one of the ways](#how-to-use) to get to the Search tool.
- Start typing the name or address into the search box.
- A box with the *Show on map* button will appear below the search input field.
- Tap this button to go to the map.
- At the top of the screen, you can continue typing your query.


### Search nearby

![Search Android](@site/static/img/search/search_all_near_location_andr.png) 

You can use the search in the vicinity of a specific location. To do this, select the required point [from the list in the search menu](#search-by-list) or select it directly on the map. In the [Map Context Menu](../map/map-context-menu.md#actions), select *Actions → Search nearby*.


## Search Address

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Search Address** uses OpenStreetMap data. This type of search allows you to find the location and direction to a specific address from a ready sorted list. Read more in the [Search Address](./search-address.md) article.


## Search History

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs> 

You can use the **Search History** to search again for previously found places or addresses or frequently visited places without having to re-enter the query.More details can be found in the [Search History](./search-history.md) article.


## Search POI

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

The **Search POI** is a list, sorted by category, with which you can easily find places and services near your current location or a selected area on the map. 

- [**Custom POI search**](./search-poi.md#custom-poi-search) allows you to combine different POI categories to simplify and personalize your search, for example, if you need to find several types of services in a certain area or on a certain section of a route.
- OsmAnd provides an [**Online search**](./search-poi.md#online-search) that works in real time, giving you quick access to search results. It is convenient to use when maps of the region are not available, but a constant and stable Internet connection is required.
- Read the [Search POI](./search-poi.md) article for more information.

<!--
### Custom POI Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) 

</TabItem>

</Tabs>

*Custom search* allows you to combine different POI categories to simplify and personalize your search, for example, if you need to find several types of services in a certain area or on a certain section of a route. For more details, see [Search POI](./search-poi.md#custom-poi-search) article.


### Online search (Android)

![Online search Android](@site/static/img/search/search_online_2_andr.png)  

OsmAnd provides an **online search** that works in real time, giving you quick access to search results. It is convenient to use when maps of the region are not available, but a constant and stable Internet connection is required. More details can be found in the [Search POI](./search-poi.md#online-search) article.
-->

## Search Coordinates

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Coordinate search provides an accurate location. You can enter precise coordinates obtained, for example, from other sources such as a map, GPS device or online services, which is particularly useful when it comes to places that do not have an exact address. For more information, see the [Search Coordinates](./search-coordinates.md) article.


## Related Articles

- [Search Address](./search-address.md)
- [Search History](./search-history.md)
- [Search POI](./search-poi.md)
- [Search Coordinates](./search-coordinates.md)


> *This article was last updated in July 2024*
