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

## Overview {#overview}

*OsmAnd Search by Address* is based on OpenStreetMap data and allows you to find location and directions to a specific address from a ready sorted list, as well as search by postal code or coordinates. This tool allows you to find the required addresses in a few taps, which reduces the search time and helps in case you don't remember the exact address.

Address search works offline using downloaded maps. Make sure the map for the region you are searching in is installed. Results depend on the address data available in OpenStreetMap.

OsmAnd provides several ways to get to the *Search tool* where the **Search Address** section is located.

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#full-text-search), where you can find the *Address* tab.
- Go to the main Android *Menu → Search → Address tab*.
- When preparing to start a route, tap *Navigation → Set destination → Search field*.  


## Full Text Search {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

<!--
Search by Address simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  

- **To use the Search Address function,** you have to [download a map](../start-with/download-maps.md) of the required area first.
- **The search is based on the data located in the visible area of the map** on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.
- The address information in OsmAnd contains all [OSM tag keys](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Search query list:

**1.** The **order** of items in the list:

- **Ordered by name**. Selecting *First specify city/town/locality* (Android) or *Select city* (iOS) will display a list that starts with unnamed items, if any, then numeric names followed by the names by letters.
- **Ascending numerical order**. In the next search list, the house numbers are displayed in ascending order, after entering the city and street.

**2.** Each field in the Address Search list contains **information** such as:

- An icon that identifies the type of locality.
- Part of an address, postal number, or coordinate area.
- Distance from your current location or from the city center.
- Additional information, such as the city's district.
-->
OsmAnd supports full-text address search. This means you can type an address directly in the search field instead of selecting city → street → house number step by step. The search engine tries to recognise address components such as:
- city;
- street;
- house number;
- postcode;
- place name.

You do not need to enter them in a strict order. **Example queries**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

If the full address is not found, OsmAnd automatically tries simplified queries (for example by removing extra words) to improve the chances of finding the location.

**NOTE:** Address search works only within downloaded maps. Search results are based on:
- maps installed on your device;
- the visible map area;
- your current location. 

If nothing is found, OsmAnd may suggest increasing the search radius.

### US Address Search and TIGER Data {#us-address-search-and-tiger-data}

OsmAnd supports address searches using OpenStreetMap data, but in the United States, address search results may be incomplete due to the use of [TIGER data](https://wiki.openstreetmap.org/wiki/TIGER).  

- **TIGER data provides address ranges, not exact locations**, this means that some house numbers may not be recognized.
- **If an address is not found**, try searching *by street name* instead of a specific house number.
- Use *alternative location identifiers*, such as nearby landmarks or ZIP codes, to refine your search results.  

### Supported Formats {#supported-formats}

OsmAnd supports several common address formats. You can enter addresses in different orders depending on how you know the address.

| Address format | Example queries |
|---|---|
| House number + street | 221B Baker Street<br />10 Downing Street |
| Street + house number | Baker Street 221B<br />Main Street 101 |
| City + street + house number | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Street intersections | Broadway & Wall Street<br />Main Street and High Street |
| City name | Berlin<br />Vienna<br />San Francisco |
| Postal code + address | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Search Tips {#search-tips}

Address search in OsmAnd is tolerant to different input formats. You can try:
- changing the order of words;
- removing extra information;
- searching only by street name.

**Examples**: Instead of `221B Baker Street London United Kingdom` try `221B Baker Street` or `Baker Street 221B`.

OsmAnd may also ignore additional information such as country or region if the address can already be identified.

Postal addresses copied from websites may include additional information such as company names, ZIP codes, or apartment numbers. If search does not return results, try entering only the street name, house number, and city.

Search is also tolerant to minor differences in spelling, such as spaces, hyphens, or common abbreviations in street names. **For example**:

`Weberstrasse`  
`Weber strasse`  
`Weber-strasse`

House numbers with letter suffixes can also be written in different formats:

`30B`  
`30b`  
`30-B`  
`30-b`

These variations may still return the same address.


## Select City {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Nearest cities**  
    This **displays a small list of cities around your location** or the locality you specified for *Select street* or *Select city*. Each field contains an icon corresponding to the size of the city, the name of the city, the distance from you to its center, and for Android the compass direction.

This way of searching makes it easy to find specific locations within a selected locality, providing a convenient way to find addresses accurately and quickly. You can start searching for the needed address by determining the locality.

- To do this, tap **First specify city/town/locality** (Android) or **Select city** (iOS).
- In the list that opens, select the required locality. [Here](#full-text-search) describes the order in which search queries are displayed and what information is available about each item.
- On the next screen, you can either continue to refine the address or select the *Show on the map* button below the search entry field.
- To specify your search, you can enter all or only part of the name of the city, town, or village where the address you are looking for is located. This allows you to narrow your search and get a more accurate list.
- Tapping the last item in the address, house number, or intersection name, opens the [map context menu](../map/map-context-menu.md#select-an-object-single-tap) of the object.  

<!--
**Searching by city offers the following benefits:**

- *Convenience*. Allows you to quickly select the required city from the list, and specify a certain street, house or intersection in the selected city without having to enter the full address. This saves time and simplifies the process of finding the right place.
- *Precision.* You can select a city and street from the available options, avoiding errors when manually entering an address.
- *Filtering.* The ability to select a specific house from the list makes it easier to accurately navigate to the required location, especially when the exact address is unknown.
--> 

:::note Key & Value
*City / Town / Village search* by [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Result*: displaying all objects with this name.
:::


## Select Street {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

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
- In other items, the street search is the same as in [Select City](#select-city).

:::note Key & Value
*Search streets* by [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Result*: all streets with this name are shown.
:::


## Postcode Search {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**To use the *Postcode search*, you just need to enter the number**, which can consist even of a single digit, and the application offers a list of available relevant postcodes.

- Select the required code and tap it.
- You can use the *Show *postcode number* on the map* feature. This opens a [map context menu](../map/map-context-menu.md#select-an-object-single-tap) with the selected postcode without any additional information about the location.
- You can refine your search by this code by first selecting the required street from the list and then the number.

**Searching by postcode can be useful when:**

- The street name exists in several cities.
- You know the postcode but not the exact address.

:::note
For more information, read the **[United Kingdom Postcode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Coordinates Search {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Coordinate Search**](../search/search-coordinates.md) allows you to specify geographic coordinates, such as latitude and longitude, to find a specific location. It provides accurate locations on a map in different [coordinate formats](../search/search-coordinates.md#coordinate-format) and allows you to get related information. This feature can be useful when you do not have an address or exact name of a location, and can make it easier to plan travel and navigate in unknown places.  


## Related Articles {#related-articles}

- [Search All](./search-all.md)
- [Search History](./search-history.md)
- [Search POI](./search-poi.md)
- [Search Coordinates](./search-coordinates.md)


