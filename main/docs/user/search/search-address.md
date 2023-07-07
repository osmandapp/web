---
sidebar_position: 1
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

*Address search OsmAnd* is based on OpenStreetMap data and allows you to find a location and get directions to a specific address, postcode, or coordinates.  


**Please note:** to accomplish some of these tasks (locate addresses, POI, etc.) you will need to have the offline vector map file. 

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

You can search by address using five options, such as:

- [Search street](#search-street)
- [First Specify(Select city)](#first-specifyselect-city) 
- [Postcode search](#postcode-search)
- [Coordinates search](#coordinates-search)
- **Nearest cities** - Shows a small list of cities around your location. Each field contains an icon corresponding to the size of the city, the name of the city, the distance from you to its center, and the compass direction.

Address - for searching by an [address tags](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) and [coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


### Search street

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_1_ios.png)

</TabItem>

</Tabs>

Street Searching by ["addr:street=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all streets with this name.

Clicking to chosen variant opens building list and crossroads.

Shown direction, distance to objects, categories of objects.

Tap to chosen address in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.


### First Specify(Select city)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

City/Town/Locality Searching by ["addr:city/hamlet/town/village/suburb=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all objects with this name.

Clicking to chosen variant opens building list and crossroads.

Shown direction, distance to objects, categories of objects.

Tap to a object in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.


### Postcode search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

Postcode Searching by ["addr:city/hamlet/town/village/suburb=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all objects with postcode tag.

Clicking to chosen postcode opens objects list which have this postcode in tags.

Shown direction, distance to objects, categories of objects.

Tap to a object in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object with additional info about chosen postcode below the object name.

**Note:** [United Kingdom Poscode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases).  


### Coordinates search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Coordinates Searching by [Geographical coordingates](https://en.wikipedia.org/wiki/Geographic_coordinate_system). Result: showing a point on the map.

Search result shows direction, distance to a point on the map.

Tap to the result opens [Map Context menu](../map/map-context-menu.md#select-any-point-long-tap) of a point on the map with additional info.  

<Translate android="true" ids="coordinates_format"/> - choose needed format for input or transform your coordinates:

- <Translate android="true" ids="navigate_point_format_D"/> - 50.12333  19.93233 (Lat Long).
- <Translate android="true" ids="navigate_point_format_DM"/> - 50:7.39320  19:55.93980 (Lat Long).
- <Translate android="true" ids="navigate_point_format_DMS"/> - 50:7:23.59200  19:55:56.38800 (Lat Long).
- <Translate android="true" ids="navigate_point_format_utm"/> - 34N 5552876  423678 (Zone Northing Easting).
- (Android) <Translate android="true" ids="navigate_point_format_olc"/> (OLC) - 9F2X4WFJ+7W (Open Location Code represents area 9m x 14m).
- (Android) <Translate android="true" ids="navigate_point_mgrs"/> - 34U DA 23678 52873.  


