---
sidebar_position: 2
title:  Maps & Data
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

## Maps
### Why does OsmAnd not offer access to Google Maps?

Firstly, OsmAnd is meant to support OpenStreetMap and tries to go that path as far as possible. Secondly, there are licensing issues, so OsmAnd cannot be distributed with Google Maps data.

### Is there a way to have contour lines displayed in feet also, instead of meters?

Yes. You need to choose Feet or Meters data before downloading Contour line data: [read here about it](../../user/plugins/contour-lines.md#choose-meters-or-feet).

### Maps slowly loading on Android 11, 12 (SD-card)

There are new storage access rules in [Android 11-12](https://www.androidauthority.com/android-12-privacy-features-1225859/). The problem is related to storing maps on SD-cards. On Android 11 and 12 very slow file access performance and access restrictions to folders on SD-card.

About this issue on our pages: [Reddit discussion](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

At this moment we can propose next solutions:

1. _Migrate maps and other OsmAnd data from SD-card._ It's possible to fix if you migrate maps (OsmAnd data) from SD-card. We're thinking to provide an alternative solution but as of today you can keep some maps (OsmAnd data) on SD-card and copy them manually via File Manager when you need to use them. Sorry for inconvenience but there is no good solution yet.
If this is your case, please try **to Migrate your files to Internal app memory (External or Multiuser storage of app memory)** and check how it would work for you. 
Menu → Settings → OsmAnd settings → Data storage folder.

1. _Setting the storage location manually for SD-card._ The second decisions it's to set the storage location manually (Menu → Settings → OsmAnd settings → Data storage folder → Manually specified) to :
  
   - _/storage/XXXX-XXXX/Download/osmand_   (in this version, there was an error opening some file when loading, then you can download the World Overview map, but no other regions are shown.)
   - _**/storage/XXXX-XXXX/Download**_ (in this version it works, you can download maps, etc., but OsmAnd does not see everything that is written to folders by other programs ([SasPlanet and etc.](../../technical/map-creation/create-offline-maps-yourself.md)))

where XXXX-XXXX is the name of a SD-Card: Menu → Settings → OsmAnd settings → Data storage folder → "Manually specified" option. ([The example](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744)).

### Deleting map data after the app update (if selected Multiuser storage 1)

About this issue of OsmAnd Android version: [Github](https://github.com/osmandapp/OsmAnd/issues/13404)

If _Multiuser Storage 1_ is selected as the storage location, then all [local maps](../personal/maps.md#local-maps) are deleted  all the time when the application is automatically updated 4.1.9 → 4.1.10 → 4.1.11 → 4.2.4 → 4.2.6 **(Android version: 11, 12, )**. 

While you need to choose the next ways for saving your map data during the application updates:

1. make [a backup](../personal/import-export.md) of these files before updating OsmAnd (_..Android/obb/net.osmand_) and restore these files before opening the OsmAnd update.

2. Change the path of OsmAnd folder (This path is also writable by all apps: Wifi FTP server, X-plore, USB cable connected to Linux PC):

/storage/emulated/0/Android/**obb**/net.osmand → /storage/emulated/0/Android/**media**/net.osmand

### No maps rendering for Google Pixel device

For the last versions of OsmAnd 4.2 (Android), [map rendering doesn't work](https://github.com/osmandapp/OsmAnd/issues/15045) for Google Pixel device. You can see the white OsmAnd screen without the map.
The resolution of this problem is to switch on OpenGL rendering:
_[OsmAnd menu → Settings → OsmAnd settings → Map rendering engine → Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine)_ and restart OsmAnd.


### Hard lock the North map orientation mode

*Menu → Configure profile → General settings → Other → [Enable Fixed North Up](../personal/profiles.md#other)*  

For Android version OsmAnd 4.7 and later, you can hard lock the map position [*North is up*](../map/interact-with-map.md#map-orientation-modes) (classic north position for maps) using the *Enable Fixed North Up* feature in the *General profile settings*, if you do not need to rotate the map with a gesture.


## Search
### Structured (city &#8594; street &#8594; house) address search doesn't find the house

I tried to search CITY - STREET - HOUSE NUMBER and there was no result. 
>Tip: check the full-text search without the city, it may be in another city.

- **No house**. The house isn’t present or house without numbers on OpenStreetMap. Example [here](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).
- **Street name incorrect**. The street name on the house is incorrectly signed in OpenStreetMap. Check the tag addr: street. The street name must exactly match the street name tag.
- **Problem in** [Nominatim](https://www.openstreetmap.org/#map=19/33.91937/-118.24357). The house is present on the OpenStreetMap, but not found in Nominatim. [How to fix addresses](https://wiki.openstreetmap.org/wiki/Addresses).
- **Perhaps a problem in OsmAnd**. The house is present in Nominatim, so this problem in OsmAnd. You can help us to solve it by studying in more detail. [Technical article](../../technical/algorithms/trace-address-search-issues.md).


## Tracks and Points
### How to mark different places on the map
*It looks like duplicated content for Personal Data category*
You can leave notes for future usage in several forms:

-   [Favorites](../personal/favorites.md): they are constant points on the map. You can add a description to every Favorite. To add it, make a *long-tap  →  tap Add*.
-   [Markers](../personal/markers.md): the temporary points with the directions settings. You can see the distance from the selected point or your current location to the Marker and remove it fast. To add it, make a *long-tap  →  tap Marker*.
-   [Waypoints](../personal/tracks/index.md): the points along your route. You can add a description to this point. To add a waypoint, make a *long-tap the map  →  Directions  →  rst intermediate waypoint*.
-   [Audio/Video notes](../plugins/audio-video-notes.md): these are points with your audio-, video-, and photo files added to the selected point on the map. Please enable the Audio/video notes plugin in OsmAnd menu  →  Plugins. To add it, make a *long-tap  →  Actions  →  select the required file to add*.
-   [OSM Notes](https://www.facebook.com/watch/?v=673312246195291): your reports on the mistakes in the OpenStreetMap source. Please enable the OSM editing plugin in OsmAnd menu  →  Plugins. To add it, make a *l*ong-tap  →  Actions  →  Add OSM note*.
-   [POIs](../search/index.md): these are the points of interest from the OSM map source. Enable the POI overlay in Configure map menu or select a certain category.
-   [Search](../search/index.md).

