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

*OsmAnd Search by Address* is based on OpenStreetMap data and allows you to find location and directions to a specific address from a ready sorted list, as well as search by postal code or coordinates. This tool allows you to find the required addresses in a few taps, which reduces the search time and helps in case you don't remember the exact address.  

OsmAnd provides several ways to get to the *Search tool* where the **Search Address** section is located.

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#how-to-use), where you can find the *Address* tab.
- Go to the main Android *Menu → Search → Address tab*.
- When preparing to start a route, tap *Navigation → Set destination → Search field*.  


## How to Use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

Search by Address simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  

- **To use the Search Address function,** you have to [download a map](../start-with/download-maps.md) of the required area first.

- **The search is based on the data located in the visible area of the map** on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.

- The address information in OsmAnd contains all [OSM tag keys](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

You can perform an **Address Search** using 5 options such as:

- [Select street](#select-street)
- [Select city](#select-city)
- [Postcode search](#postcode-search)
- [Coordinates search](#coordinates-search)
- **Nearest cities**  
    This **displays a small list of cities around your location** or the locality you specified for *Select street* or *Select city*. Each field contains an icon corresponding to the size of the city, the name of the city, the distance from you to its center, and for Android the compass direction.


### Search Query List

**1.** The **order** of items in the list:
- **Alphabetical order**. The list starts with unnamed items, if any, then numeric names followed by the names by letters.
- **Ascending numerical order**. In the next search list, after entering the city and street, the house numbers are displayed in ascending order.

**2.** Each field in the Address Search list contains **information** such as:
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

This way of searching makes it easy to find specific locations within a selected locality, providing a convenient way to find addresses accurately and quickly. You can start searching for the needed address by determining the locality.   

- To do this, tap **First specify city/town/locality** (Android) or **Select city** (iOS). 
- In the list that opens, select the required locality. [Here](#search-query-list) describes the order in which search queries are displayed and what information is available about each item.
- On the next screen, you can either continue to refine the address or select the *Show on the map* button below the search entry field.
- To specify your search, you can enter all or only part of the name of the city, town, or village where the address you are looking for is located. This allows you to narrow your search and get a more accurate list.
- Tapping the last item in the address, house number, or intersection name, opens the [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.  

**Searching by city offers the following benefits:**
- *Convenience*. Allows you to quickly select the required city from the list, and specify a certain street, house or intersection in the selected city without having to enter the full address. This saves time and simplifies the process of finding the right place.
- *Precision.* You can select a city and street from the available options, avoiding errors when manually entering an address.
- *Filtering.* The ability to select a specific house from the list makes it easier to accurately navigate to the required location, especially when the exact address is unknown.  

:::note Key & Value
*City / Town / Village search* by [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Result*: displaying all objects with this name.
:::


## Select Street

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_3_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Street search is performed in the locality where you are, or where you searched before, or which is in the center of the visible map on the application screen. 

- To use this type of search, tap **Search Street** (*Android*) or **Select Street** (*iOS*).
- In the search field next to the city name, you can start typing the street name and the list will refine, giving you the most appropriate results.
- In other items, the street search is the same as in [*Select City*](#select-city).

:::note Key & Value
*Search streets* by [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Result*: all streets with this name are shown.
:::


## Postcode Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**To use the *Postcode search*, you just need to enter the number**, which can consist even of a single digit, and the application offers a list of available relevant postcodes.
- Select the required code and tap it.
- You can use the *Show *postcode number* on the map* feature. This opens a [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) with the selected postcode without any additional information about the location.
- You can refine your search by this code by first selecting the required street from the list and then the number.

**Searching by postcode can be useful in the following cases:**  
- *Find addresses*. When you enter a postcode, OsmAnd identifies the corresponding area and suggests addresses in that area. This is especially useful if you know the postcode but do not know the exact address.
- *Navigation precision*. In cases where the address is not certain, or where the street name may be repeated in different areas, using a postal code can provide the best route to a given address.
- *Convenience and speed*. Searching by postcode allows you to find information quickly, especially if you know the postcode but are unsure of the address. Instead of entering the full address, you can enter just the code and get relevant results.  

:::note
For more information, read the **[United Kingdom Poscode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.    
:::


## Coordinates Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Coordinate Search**](../search/search-coordinates.md) allows you to specify geographic coordinates, such as latitude and longitude, to find a specific location. It provides accurate locations on a map in different [coordinate formats](../search/search-coordinates.md#coordinates-search) and allows you to get related information. This feature can be useful when you do not have an address or exact name of a location and can make it easier to plan travel and navigate in unknown places.  


## Related Articles

- [Search All](./search-all.md)
- [Search History](./search-history.md)
- [Search POI](./search-poi.md)
- [Search Coordinates](./search-coordinates.md)

> *This article was last updated in July 2024*
