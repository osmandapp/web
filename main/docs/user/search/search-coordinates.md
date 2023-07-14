---
sidebar_position: 6
title:  Search Coordinates
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

**OsmAnd Coordinate search** allows you to find a specific location by latitude and longitude. This type of search helps to identify a location accurately. It is especially useful for areas that do not have precise addresses, or for specific geographic tasks such as creating geofences or precise positioning in open space.   

OsmAnd provides several ways to get to the *Search tool → [Address search tab](../search/search-address.md)* where the **Coordinates search** is located.

- The [Search button](../widgets/map-buttons.md#search) on the map application screen.
- Go to the main Android *Menu → Search → Address tab → Coordinates Search*.
- When preparing to start a route, tap *Navigation → Set destination → Search field → Address tab → Coordinates Search*.  


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs> 

You can set coordinates in any available format, but the found location is displayed in the format you set in *Configure profile → General settings → Units & formats*.  

- To use the coordinate search, you can type, or just start typing, or paste an already prepared coordinate format into the search field. The application prompts you to select a suitable location.
- 
- Tap the suggested location and [Map Context menu](../map/map-context-menu.md#select-any-point-long-tap) opens.
- More information can be found here [Geographical coordingates](https://en.wikipedia.org/wiki/Geographic_coordinate_system).

**Scope of the coordinate search function**:
- *Precise location*. Coordinate search provides an accurate location. You can enter precise coordinates obtained, for example, from other sources such as a map, GPS device, or online services. 
- *Places without an address*. Coordinates are particularly useful when it comes to places that do not have an exact address, or when the address is unknown. For example, it may be a remote area, a point on the sea, or a mountain peak. By entering coordinates, you can find and navigate to such locations without having to know the address.
- *Location sharing*. Searching by coordinates provides a convenient way to enter information. You can enter coordinates manually or copy them from other sources. This can be useful when sharing locations with others or using previously obtained coordinates.


## Coordinate format

There are several ways to enter coordinates for the search. To use each of them, it is very important to follow the input rules, otherwise the application will not be able to find the location.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  
    **Decimal coordinates (degrees)**. In this format, latitude and longitude coordinates are written in decimal format, for example, 52.37022° latitude and 4.89517° longitude for Amsterdam. This input method is easy to use and is the most common.  
    - *Input rules*. Latitude and longitude coordinates are written in decimal format, where latitude ranges from -90 to 90 and longitude ranges from -180 to 180.
    - *Most commonly used*. Decimal coordinates are widely used in navigation applications, GPS devices, web maps, and other geopositioning services.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  
    **Degrees and Minutes(DM)**. In this format, latitude and longitude coordinates are recorded using degrees and minutes. For example, 37:46.29 latitude and -122:25.10 longitude for San Francisco. This format may be less accurate and may take longer to enter.
    - *Input rules*. Latitude and longitude coordinates are written in a format that uses degrees (:) and minutes (:).
    - *Most commonly used*. The DM format is often found in marine navigation, aviation, astronomy, and topographic mapping systems.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**  
    **Degrees, Minutes and Seconds (DMS)**. The DMS coordinate format records geographic coordinates where values are given in degrees, minutes, and seconds. Degrees (DDD) can take values from 0 to 180 for longitude and 0 to 90 for latitude. Positive values indicate east longitude and north latitude, and negative values indicate west longitude and south latitude. Minutes (MM) can take values from 0 to 59. Seconds (SS.S) represent the decimal fraction of a second and can also range from 0 to 59.9.
    - *Input rules*. Latitude and longitude coordinates are written in a format that uses degrees (:), minutes (:) andseconds (.).
    - *Most commonly used*. The DMS format is widely used in geodesy, navigation applications, cartography, astronomy, and other fields where a more detailed expression of location coordinates is required.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**  
    **UTM (Universal Transversal Mercator System)**. In this format, coordinates are specified using UTM zone, East and North directions. For example, for Amsterdam, the coordinates might be approximately as follows: zone 31, East direction 581000, North direction 5809000. Entering coordinates in UTM format may require some familiarity with the system and be more complex than other formats, but it provides good accuracy and meets global geopositioning standards. You can read more about the UTM format [here](https://www.wikiwand.com/en/Universal_Transverse_Mercator_coordinate_system).
    - *Input Rules*. Coordinates are recorded in a format that uses the UTM zone and Easting and Northing offsets.
    - *Most commonly used*. UTM format is often used in surveying, mapping, and geographic information systems for measurement and navigation.

5. **<Translate android="true" ids="navigate_point_format_olc"/>**  ((OLC) - 9F2X4WFJ+7W (Open Location Code represents area 9m x 14m))

6. **<Translate android="true" ids="navigate_point_mgrs"/>**(Android) (34U DA 23678 52873)  
    **MGRS (Military Grid Reference System)**. This is a coordinate system often used in military applications. It is based on the UTM system and is supplemented with an additional grid of squares. An example of coordinates in MGRS format for a location in Australia can be as follows: 55HBE1234567890. In this example, "55H" represents the MGRS zone and "BE" represents the square in which the location is located. "123456" represents the eastward offset and "7890" represents the northward offset within that square. MGRS are widely used in areas requiring high accuracy and geo-referencing. They are particularly useful in environments where addresses may not be clear or available, such as military operations or expeditions in remote areas. You can read more about the MGRS format [here](https://www.wikiwand.com/en/Military_Grid_Reference_System).  
    - *Input rules*. The coordinates consist of an MGRS zone, a square, and two more digits indicating east and north offsets.
    - *Most commonly used*. The MGRS format is widely used in military navigation and communications, and can also be useful for outdoor enthusiasts and hikers.

7. **Swiss Grid** (CH1903)

8. **Swiss Grid** (CH1903+)

> You can set a different coordinate format for each profile. To do this, go to *General settings → [Coordinate format](../personal/profiles.md#units--formats)*.


## Troubleshooting

