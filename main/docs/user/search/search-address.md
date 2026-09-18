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

Search results are automatically ordered by relevance and distance, so nearby and more relevant results appear higher in the list.

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

When a query may refer to both an address and a POI, OsmAnd automatically prioritizes the most relevant interpretation based on context, distance, and object importance.

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
| Dual house number + street | 243/11 Husova |
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

However, very short or general queries (for example, “Apple”) may return a mix of addresses and POIs, including a brand, street name, or locality with the same name. To improve accuracy, try adding more details such as city name, street, or POI name.

The search engine also tolerates common variations in address formatting such as different word order, spelling differences, abbreviations, or house number formats. The table below shows typical search variations that may still return the same address.

| Search variation | Example queries | Related discussion |
|---|---|---|
| Street name variations | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Discussion](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignoring spaces in names | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Discussion](https://github.com/osmandapp/OsmAnd/issues/13783) |
| House numbers with letter suffixes | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Discussion](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Street abbreviations | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Discussion](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Full address vs simplified address | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Discussion](https://github.com/osmandapp/OsmAnd/issues/19004) |
| US address format | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Discussion](https://github.com/osmandapp/OsmAnd/issues/6824) |
| US state abbreviations | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Discussion](https://github.com/osmandapp/OsmAnd/issues/6824) |


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


