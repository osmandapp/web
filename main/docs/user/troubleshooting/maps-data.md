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


## Maps

### Why does OsmAnd not offer access to Google Maps?

Firstly, OsmAnd is meant to support OpenStreetMap and tries to go that path as far as possible. Secondly, there are licensing issues, so OsmAnd cannot be distributed with Google Maps data.

### Is there a way to have contour lines displayed in feet also, instead of meters?

Yes. You need to choose Feet or Meters data before downloading Contour line data: [read here about it](../../user/plugins/topography.md#choose-meters-or-feet).

### Maps slowly loading on Android 11, 12 (SD card)

[Android 11 and 12's new storage access rules](https://www.androidauthority.com/android-12-privacy-features-1225859/) may result in slow SD card file (map) access performance and other visibility or access restrictions with SD card folders. See also these details on the topic: [Reddit discussion](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

At this moment we can propose these solutions:

#### 1. Migrate the OsmAnd data storage folder to 'Internal app memory':

- This is done by selection an **_Internal app memory_** target option under _Menu → Settings → OsmAnd settings → Data storage folder_.

- But please note that often _Internal app memory_ space is limited. For the moment, the manual workaround may be to set the OsmAnd data storage folder to Internal app memory storage, but migrate the data manually via a file manager, and keep rarely used larger maps stored on the SD card until you need to use them. We will be working towards providing a better solution as we can think of one.

#### 2. Use the SD card's 'Download' Folder:

Try this solution by specifying under (***Menu → Settings → OsmAnd settings → Data storage folder → Manually specified***):

   - **_/storage/XXXX-XXXX/Download/osmand_**   (in some cases this version caused errors with multiple file access, you could e.g. download the World Overview map, but no other regions are shown.)
   - **_/storage/XXXX-XXXX/Download_** this version should always work, you can download maps, etc. Note that OsmAnd does not see files written to the folder by other apps or programs (e.g SasPlanet etc., see [here](../../technical/map-creation/create-offline-maps-yourself.md)).

Here XXXX-XXXX is the SD card's identification number, sometimes visible in the folder path displayed under the _External staroage 2_ options, or has to be found out independently. Research of this solution is originally supplied [here](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. 'Media' Storage Option:

Plesae see below.

### Picking a 'Generally Accessible' OsmAnd Data storage folder Using the 'Media' Storage

Android versions have become increasingly restrictive in terms of which apps and processes can access which storage folders. (In addition, things may even behave different for a fresh app install vs. an app upgrade install vs. an Android system upgrade.) As a result, an app's storage folder may be invisible to other apps, even to file manager apps or from a PC.

For OsmAnd, many users want to use a storage location on external or even removable storage (often having more storage space) which is readily accessible for other proccesses, e.g. if you use manual file copy or sync/backup mechanisms (via a separate app or even a PC).

Our OsmAnd builds do not have the 'All files access' permission (because google heavily restricts its use) to chose any arbitrary storage folder. One possibility I am aware to try is using the 'Media' storage mechanism. The art is to identify a ‘Media’ type folder on your system which will accordingly become read/write available. You can try this:

- Go to _OsmAnd’s Settings → OsmAnd settings → Data storage folder_, and identify the general storage location (area) you are trying to target, e.g. by deriving from the reported free space (often this may be the _External storage 2_ location.)
- Note down the folder path reported under the option, e.g. something like _/storage/xxxx-xxxx/Android/data/net.osmand.plus/files_
- Change to the _Manually specified_ option. There specify this folder path **but with a modification to point to a folder recognized as Media**. On some systems, replacing everything behind _/Android/_ by just _/media_ (e.g. **_/storage/xxxx-xxxx/Android/media_**) works. Other systems may need a different modification.

You have found a good path if after selecting it OsmAnd does NOT complain about not being able to write to the target folder. Before trying this, make sure under Android’s '_Apps_' settings the OsmAnd app has been granted the highest storage permission possible, which usually (explicitly or not) contains the 'Media' storage permission. In new versions of android, the '_Storage_' permission seems a little hidden in advanced menus.

### Deleting map data after the app update (if selected Multiuser storage 1)

About this issue of OsmAnd Android version: [Github](https://github.com/osmandapp/OsmAnd/issues/13404)

If _Multiuser Storage 1_ is selected as the storage location, then all [local maps](../personal/maps-resources.md#local-maps) are deleted  all the time when the application is automatically updated 4.1.9 → 4.1.10 → 4.1.11 → 4.2.4 → 4.2.6 **(Android version: 11, 12, )**.

While you need to choose the next ways for saving your map data during the application updates:

1. make [a backup](../personal/import-export.md) of these files before updating OsmAnd (_..Android/obb/net.osmand_) and restore these files before opening the OsmAnd update.

2. Change the path of OsmAnd folder (This path is also writable by all apps: Wifi FTP server, X-plore, USB cable connected to Linux PC):

/storage/emulated/0/Android/**obb**/net.osmand → /storage/emulated/0/Android/**media**/net.osmand

### No maps rendering for Google Pixel device

For the last versions of OsmAnd 4.2 (Android), [map rendering doesn't work](https://github.com/osmandapp/OsmAnd/issues/15045) for Google Pixel device. You can see the white OsmAnd screen without the map.
The resolution of this problem is to switch on OpenGL rendering:
_[OsmAnd menu → Settings → OsmAnd settings → Map rendering engine → Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine)_ and restart OsmAnd.



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

- [Favorites](../personal/favorites.md): they are constant points on the map. You can add a description to every Favorite. To add it, make a *long tap  →  tap Add*.
- [Markers](../personal/markers.md): the temporary points with the directions settings. You can see the distance from the selected point or your current location to the Marker and remove it fast. To add it, make a *long tap  →  tap Marker*.
- [Waypoints](../map/tracks/index.md#types-of-tracks): the points along your route. You can add a description to this point. To add a waypoint, make a *long tap the map  →  Directions  →  rst intermediate waypoint*.
- [Audio/Video notes](../plugins/audio-video-notes.md): these are points with your audio-, video-, and photo files added to the selected point on the map. Please enable the Audio/video notes plugin in OsmAnd menu  →  Plugins. To add it, make a *long tap  →  Actions  →  select the required file to add*.
- [OSM Notes](https://www.facebook.com/watch/?v=673312246195291): your reports on the mistakes in the OpenStreetMap source. Please enable the OSM editing plugin in OsmAnd menu  →  Plugins. To add it, make a *l*ong-tap  →  Actions  →  Add OSM note*.
- [POIs](../search/index.md): these are the points of interest from the OSM map source. Enable the POI overlay in Configure map menu or select a certain category.
- [Search](../search/index.md).

