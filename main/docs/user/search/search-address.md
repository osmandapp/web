---
sidebar_position: 2
title:  Search Address
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

*OsmAnd Address Search* is based on OpenStreetMap data and allows you to find location and directions to a specific address from a ready sorted list, as well as search by postal code or coordinates. This tool allows you to find the required addresses in a few taps, which reduces the search time and helps in case you don't remember the exact address.  

OsmAnd provides several ways to get to the *Search tool* where the **Address search** section is located.

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#how-to-use), where you can find the *Address* tab.
- Go to the main Android *Menu → Search → Address tab*.
- When preparing to start a route, tap *Navigation → Set destination → Search field*.  


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

Address search simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  
- To use the Address Search function, you have to [download a map](../start-with/download-maps.md) of the required area first . 
- The search is based on the data located in the visible area of the map on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.

You can perform an **Address Search** using 5 options such as:

- [Select street](#select-street)
- [Select city](#select-city)
- [Postcode search](#postcode-search)
- [Coordinates search](#coordinates-search)
- **Nearest cities**  
    This displays a small list of cities around your location or the locality you specified for *Select street* or *Select city*. Each field contains an icon corresponding to the size of the city, the name of the city, the distance from you to its center, and for Android the compass direction.


### Search query list

The **order** of items in the list.
- **Alphabetical order**. The list starts with unnamed items, if any, then numeric names followed by the names by letters.
- **In ascending numerical order**, the house numbers in the next search list are displayed after you specify the city and street.

Each field in the Address Search list contains **information** such as:
- An icon that identifies the type of locality.
- Part of an address, postal number, or coordinate area.
- Distance from your current location or from the city center.
- Additional information, such as the city's district.


## Select city

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

<!--
City/City/Village Search by *[addr:city/hamlet/town/village/suburb=*](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)*. Result: displaying all objects with this name.

- When you tap the selected option, a list of buildings and intersections opens.
- The direction, distance to the objects, and object categories are shown.
- Tapping an object in the list opens the [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.
-->

<!--
City/Town/Locality Searching by ["addr:city/hamlet/town/village/suburb=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all objects with this name.

Clicking to chosen variant opens building list and crossroads.

Shown direction, distance to objects, categories of objects.

Tap to a object in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.  


To specify your search, you can enter the name of the city, town, or village where the address you are looking for is located. This helps to narrow your search and get a more accurate list.
-->


## Select street

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_1_ios.png)

</TabItem>

</Tabs>

<!--
Select street (iOS) or Search street (Android).  

Address - for searching by an [address tags](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) and [coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system).  

Search for streets by *[addr:street=*](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)*. Result: all streets with this name are shown.
- When you tap the selected option, a list of buildings and intersections is opened.
- Direction, distance to objects, and object categories are shown.
- If you choose the selected address in the list, the [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object opens.

You can enter a street name in the search box and it will display relevant results related to the specified street. These can be exact addresses, buildings, intersections, and other objects related to the street.
-->

<!--
Street Searching by ["addr:street=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all streets with this name.

Clicking to chosen variant opens building list and crossroads.

Shown direction, distance to objects, categories of objects.

Tap to chosen address in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.
-->


## Postcode search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

To use the *Postcode search*, you just need to enter the number, which can consist even of a single digit, and the application offers a list of available relevant postcodes.
- Select the required code and tap on it.
- You can use the *Show *postcode number* on the map* feature. This opens a [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) with the selected postcode without any additional information about the location.
- You can refine your search by this code by first selecting the required street from the list and then the number.

Searching by postcode can be useful in the following cases:  
- *Find addresses*. When you enter a postcode, OsmAnd identifies the corresponding area and suggests addresses in that area. This is especially useful if you know the postcode but do not know the exact address.
- *Navigation precision*. In cases where the address is not certain, or where the street name may be repeated in different areas, using a postal code can provide the best route to a given address.
- *Convenience and speed*. Searching by postcode allows you to find information quickly, especially if you know the postcode but are unsure of the address. Instead of entering the full address, you can enter just the code and get relevant results.


For more information about [United Kingdom Poscode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases), read the link.    


## Coordinates search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

**Coordinate search** allows you to find a specific location by latitude and longitude. This type of search helps to identify a location accurately. It is especially useful for areas that do not have precise addresses, or for specific geographic tasks such as creating geofences or precise positioning in open space.  
