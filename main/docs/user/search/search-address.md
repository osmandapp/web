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

The search address helps you to find your needed address from OpenStreetMap data.

You may want to find the nearest location of a certain type, view your own location or search for a place by zip code. Just use the guide below.

**Please note:** to accomplish some of these tasks (locate addresses, POI, etc.) you will need to have the offline vector map file.

## How to use

Address - for searching by an [address tags](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) and [coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system).

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

Clicking to [Search button on the screen](../widgets/map-buttons.md#search) -> <Translate android="true" ids="shared_string_address"/>

![Search Street Android](@site/static/img/search/street_search_android.png) ![Search Street iOS](@site/static/img/search/street_search_ios.png)

- [<Translate android="true" ids="search_street"/>](../search/search-address.md#search-street)
- [<Translate android="true" ids="start_search_from_city"/>](../search/search-address.md#search-citytownlocality)
- [<Translate android="true" ids="select_postcode"/>](../search/search-address.md#postcode-search)
- [<Translate android="true" ids="coords_search"/>](../search/search-address.md#coordinates-search)
- <Translate android="true" ids="nearest_cities"/>


</TabItem>

<TabItem value="android" label="Android">


Clicking to [Search button on the screen](../widgets/map-buttons.md#search) -> <Translate android="true" ids="shared_string_address"/>

![Search Street Android](@site/static/img/search/street_search_android.png) 

- [<Translate android="true" ids="search_street"/>](../search/search-address.md#search-street)
- [<Translate android="true" ids="start_search_from_city"/>](../search/search-address.md#search-citytownlocality)
- [<Translate android="true" ids="select_postcode"/>](../search/search-address.md#postcode-search)
- [<Translate android="true" ids="coords_search"/>](../search/search-address.md#coordinates-search)
- <Translate android="true" ids="nearest_cities"/>

</TabItem>

<TabItem value="ios" label="iOS">

Clicking to [Search button on the screen](../widgets/map-buttons.md#search) -> <Translate ios="true" ids="shared_string_address"/>

![Search Street iOS](@site/static/img/search/street_search_ios.png)

- [<Translate ios="true" ids="select_street"/>](../search/search-address.md#search-street)
- [<Translate ios="true" ids="select_city"/>](../search/search-address.md#search-citytownlocality)
- [<Translate ios="true" ids="select_postcode"/>](../search/search-address.md#postcode-search)
- [<Translate ios="true" ids="coords_search"/>](../search/search-address.md#coordinates-search)
- <Translate ios="true" ids="nearest_cities"/>

</TabItem>

</Tabs>

### Search street

Street Searching by ["addr:street=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all streets with this name.

Clicking to chosen variant opens building list and crossroads.

Shown direction, distance to objects, categories of objects.

Tap to chosen address in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street iOS](@site/static/img/search/address_street_search_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_1_ios.png)


</TabItem>

</Tabs>

### Search City/Town/Locality


City/Town/Locality Searching by ["addr:city/hamlet/town/village/suburb=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all objects with this name.

Clicking to chosen variant opens building list and crossroads.

Shown direction, distance to objects, categories of objects.

Tap to a object in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object.


<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Search Street Android](@site/static/img/search/town_search_android.png)  ![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>


### Postcode search

Postcode Searching by ["addr:city/hamlet/town/village/suburb=*"](https://wiki.openstreetmap.org/w/index.php?title=Key:addr). Result: showing all objects with postcode tag.

Clicking to chosen postcode opens objects list which have this postcode in tags.

Shown direction, distance to objects, categories of objects.

Tap to a object in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of the object with additional info about chosen postcode below the object name.

**Note:** [United Kingdom Poscode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases).

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Search Postcode Android](@site/static/img/search/postcode_android.png)  ![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>


### Coordinates search

Coordinates Searching by [Geographical coordingates](https://en.wikipedia.org/wiki/Geographic_coordinate_system). Result: showing a point on the map.

Search result shows direction, distance to a point on the map.

Tap to the result opens [Map Context menu](../map/map-context-menu.md#select-any-point-long-tap) of a point on the map with additional info.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)  ![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

<TabItem value="android" label="Android">

<Translate android="true" ids="coordinates_format"/> - choose needed format for input or transform your coordinates:

- <Translate android="true" ids="navigate_point_format_D"/> - 50.12333  19.93233 (Lat Long).
- <Translate android="true" ids="navigate_point_format_DM"/> - 50:7.39320  19:55.93980 (Lat Long).
- <Translate android="true" ids="navigate_point_format_DMS"/> - 50:7:23.59200  19:55:56.38800 (Lat Long).
- <Translate android="true" ids="navigate_point_format_utm"/> - 34N 5552876  423678 (Zone Northing Easting).
- <Translate android="true" ids="navigate_point_format_olc"/> (OLC) - 9F2X4WFJ+7W (Open Location Code represents area 9m x 14m).
- <Translate android="true" ids="navigate_point_mgrs"/> - 34U DA 23678 52873.

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate android="true" ids="coordinates_format"/> - choose needed format for input or transform your coordinates:

- <Translate android="true" ids="navigate_point_format_D"/> - 50.12333  19.93233 (Lat Long).
- <Translate android="true" ids="navigate_point_format_DM"/> - 50:7.39320  19:55.93980 (Lat Long).
- <Translate android="true" ids="navigate_point_format_DMS"/> - 50:7:23.59200  19:55:56.38800 (Lat Long).
- <Translate android="true" ids="navigate_point_format_utm"/> - 34N 5552876  423678 (Zone Northing Easting).

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>
