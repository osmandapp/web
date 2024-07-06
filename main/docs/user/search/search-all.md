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
- The [*Search button*](../widgets/map-buttons.md#search) on the map application screen *→ enter a search query*.
- Go to the main *Menu → Search → enter a search query*.
- When preparing to start a route, tap [*Navigation → Set destination → Search field*](../navigation/setup/route-navigation.md#set-target-point).  

*Downloaded offline vector maps are required to search with OsmAnd*.  
Initially, **the search is based on the data located on the map in the visible area of the device screen**, but if nothing is found there, OsmAnd offers to increase the search radius.  

Typical queries:
- Coordinates all formats
- Address: "Street, Housenumber", "City, Street", "Street intersections", "City", "Postcode, Housenumber", "Postcode, Street, Housenumber"
- POI by name and by category with additional filters
- Favorite/Waypoint search
- Track search
- Online (Nominatim) search
- URL search (google urls, osmand urls)
- Search history


### Search near specific location

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_all_near_location_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/search_all_near_location_andr.png)  

</TabItem>

</Tabs>


### Favorite/Waypoint/Tracks search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite search Android](@site/static/img/search/favorite_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite search iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

In this search menu (Categories) it's easy way to find your [Favorites](../map/point-layers-on-map.md#favorites) and [Waypoints](../map/point-layers-on-map.md#track-points) by searching. 

Just you need to enter your favorite/waypoint name, first results will be your favorites/waypoints.


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

The **Search POI** is a list, sorted by category, with which you can easily find places and services near your current location or a selected area on the map. Read the [Search POI](./search-poi.md) article for more information.


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
