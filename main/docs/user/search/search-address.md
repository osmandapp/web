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

![Search Street Android](@site/static/img/search/street_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/street_search_ios.png)  

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

<!--
Address - for searching by an [address tags](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) and [coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system).  

Coordinates Searching by [Geographical coordingates](https://en.wikipedia.org/wiki/Geographic_coordinate_system). Result: showing a point on the map.

- Search result shows direction, distance to a point on the map.
- Tap to the result opens [Map Context menu](../map/map-context-menu.md#select-any-point-long-tap) of a point on the map with additional info.  
-->

**Scope of the coordinate search function**:
- *Precise location*. Coordinate search provides an accurate location. You can enter precise coordinates obtained, for example, from other sources such as a map, GPS device, or online services. 
- *Places without an address*. Coordinates are particularly useful when it comes to places that do not have an exact address, or when the address is unknown. For example, it may be a remote area, a point on the sea, or a mountain peak. By entering coordinates, you can find and navigate to such locations without having to know the address.
- *Location sharing*. Searching by coordinates provides a convenient way to enter information. You can enter coordinates manually or copy them from other sources. This can be useful when sharing locations with others or using previously obtained coordinates.


### Coordinate format

There are several ways to enter coordinates for the search. To use each of them, it is very important to follow the input rules, otherwise the application will not be able to find the location.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  
    **Decimal coordinates (degrees)**. In this format, latitude and longitude coordinates are written in decimal format, for example, 52.37022° latitude and 4.89517° longitude for Amsterdam. This input method is easy to use and is the most common.  
    - *Input rules*. Latitude and longitude coordinates are written in decimal format, where latitude ranges from -90 to 90 and longitude ranges from -180 to 180.
    - *Most commonly used*. Decimal coordinates are widely used in navigation applications, GPS devices, web maps, and other geopositioning services.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  
    **Degrees, Minutes, and Seconds (GMS)**. In this format, latitude and longitude coordinates are recorded using degrees, minutes, and seconds. For example, 37:46.29 latitude and -122:25.10 longitude for San Francisco. This format may be less accurate and may take longer to enter.
    - *Input rules*. Latitude and longitude coordinates are written in a format that uses degrees (:), minutes (.), and seconds ( ).
    - *Most commonly used*. The HMS format is often found in marine navigation, aviation, astronomy, and topographic mapping systems.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>** (50:7:23.59200  19:55:56.38800)
4. **<Translate android="true" ids="navigate_point_format_utm"/>** 
    **UTM (Universal Transversal Mercator System)**. In this format, coordinates are specified using UTM zone, East and North directions. For example, for Amsterdam, the coordinates might be approximately as follows: zone 31, East direction 581000, North direction 5809000. Entering coordinates in UTM format may require some familiarity with the system and be more complex than other formats, but it provides good accuracy and meets global geopositioning standards. You can read more about the UTM format [here](https://www.wikiwand.com/en/Universal_Transverse_Mercator_coordinate_system).
    - *Input Rules*. Coordinates are recorded in a format that uses the UTM zone and Easting and Northing offsets.
    - *Most commonly used*. UTM format is often used in surveying, mapping, and geographic information systems for measurement and navigation.

5. **<Translate android="true" ids="navigate_point_format_olc"/>**(Android)  ((OLC) - 9F2X4WFJ+7W (Open Location Code represents area 9m x 14m))

6. **<Translate android="true" ids="navigate_point_mgrs"/>**(Android) (34U DA 23678 52873)  
    **MGRS (Military Grid Reference System)**.  

    You can read more about the MGRS format [here](https://www.wikiwand.com/en/Military_Grid_Reference_System).
    - *Input rules*. The coordinates consist of an MGRS zone, a square, and two more digits indicating east and north offsets.
    - *Most commonly used*. The MGRS format is widely used in military navigation and communications, and can also be useful for outdoor enthusiasts and hikers.

7. Swiss Grid (CH1903)

8. Swiss Grid (CH1903+)

You can set a different coordinate format for each profile. To do this, go to *General settings → [Coordinate format](../personal/profiles.md#units--formats)*.

