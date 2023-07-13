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

Point of interesting (POI) seaching is one the general function of OsmAnd. [POI](https://wiki.openstreetmap.org/wiki/Points_of_interest) is any object on the map. How you know OsmAnd uses data from [OpenStreetMap](http://openstreetmap.org/).

**Please note:** to accomplish some of these tasks (locate addresses, POI, etc.) you will need to have the offline vector map file. Initially, the search is based on data located on the map in the visible area of the device screen. If you don't find nothing, OsmAnd propose to increase search radius.


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI list Android](@site/static/img/search/poi_list_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI list iOS](@site/static/img/search/poi_list_ios.png)  

</TabItem>

</Tabs>

For starting search points you need to click to [Search button on the screen](../widgets/map-buttons.md#search) -> <Translate android="true" ids="search_categories"/>

Categories screen is list of POI categories and additional actions buttons below of the list.  

Actions button:

- &nbsp;<Translate android="true" ids="search_online_address"/> (Android) - allows to use [online POI search](../search/search-poi.md#online-search-android).
- &nbsp;<Translate android="true" ids="custom_search"/> / <Translate ios="true" ids="add_custom_category"/> - allow to create [custom POI search and custom POI filter](../search/search-poi.md).
- &nbsp;<Translate android="true" ids="rearrange_categories"/> - allows to change the list order and hide categories. [Import or export all changes as profiles](../personal/import-export.md).
- &nbsp;<Translate ios="true" ids="delete_custom_categories"/> - allows to delete [custom categories](../search/search-poi.md).

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


## Address Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

*OsmAnd Address Search* is based on OpenStreetMap data and allows you to find location and directions to a specific address from a ready sorted list, as well as search by postal code or coordinates. This tool allows you to find the required addresses in a few taps, which reduces the search time and helps in case you don't remember the exact address. 


### Coordinates Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

*OsmAnd Coordinates Search*


## History Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs> 

*Search History* is a record of all searches and locations that you have entered or searched for in the app over the period of use. This tool allows you to easily find and access previously searched locations, which makes navigation easier and saves your time. 


## POI search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/poi_search_ios.png)  

</TabItem>

</Tabs>

In Categories menu user can start searching by typping line.

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info (full name, categorie name, direction and distance to POI, work time). Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of POI.


### Online search (Android)

![Online search Android](@site/static/img/search/search_online_andr.png)  

In [Categories menu](../search/search-poi.md#how-to-use) there is the button "Online search". Pressing to this button opens online search menu.

![Online search Android](@site/static/img/search/online_search_android.png)

If OsmAnd can not find something you can increase search radius by tapping to "Increase search radius" button.

Or if you don't have any result you can provide feedback by clicking to "Send" button below device screen.

![Online search feedback Android](@site/static/img/search/online_search_feedback_android.png)


### Custom Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)

</TabItem>

</Tabs>



## Favorite/Waypoint search

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

