---
source-hash: 9b16ea12c0c7101ef5114041d96220299980dab0bb8a9a0697c20ff869c09d8b
sidebar_position: 4
title:  Карти та дані
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Maps {#maps}

### Why does OsmAnd not offer access to Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd is designed to support OpenStreetMap (OSM) and prioritizes this path as much as possible. Additionally, there are licensing restrictions that do not allow OsmAnd to be distributed with Google Maps data.

### Maps slowly loading on Android 11, 12 (SD card) {#maps-slowly-loading-on-android-11-12-sd-card}

Due to the new [storage access rules introduced in Android 11 and 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), users may experience slower performance when accessing maps stored on SD cards. These changes can also cause visibility and access restrictions for files in SD card folders. More discussions and technical insights can be found on the following links: [Reddit discussion](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

At this moment, the following solutions are available:

#### 1. Migrate the OsmAnd data storage folder to “Internal app memory” {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- You can change the storage folder by selecting the ***Internal app memory*** option in *Menu → Settings → OsmAnd settings → Data storage folder*.

- However, be aware that internal memory is often limited. As a workaround, you can move important files to internal memory while keeping rarely used maps on the SD card. Use a file manager to manually transfer these files when necessary.

The development team is actively looking for more efficient solutions to improve SD card performance under the new Android storage policies.

#### 2. Use the SD card's “Download” Folder {#2-use-the-sd-cards-download-folder}

You can try resolving the slow map loading issue by specifying the SD card’s **Download** folder for OsmAnd storage under *Menu → Settings → OsmAnd settings → Data storage folder → Manually specified*. The following paths are possible:

- ***/storage/XXXX-XXXX/Download/osmand***  
   This path might cause errors when accessing multiple files. For example, you may be able to download the World Overview map, but other regions might not appear.

- ***/storage/XXXX-XXXX/Download***  
   This path should work consistently for downloading maps and other data. However, note that OsmAnd will not recognize files written to this folder by other apps or programs (e.g., SasPlanet). For more details, see [this guide](../../technical/map-creation/create-offline-maps-yourself.md).

The "XXXX-XXXX" represents your SD card’s unique identification number, which can sometimes be found in the folder path under *External storage 2* options or located using other methods. More research and details on this solution are available [here](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. "Media" storage option {#3-media-storage-option}

If previous solutions don’t work or seem limited, you can try using the "Media" storage option to resolve slow map loading or storage access issues. This method allows selecting a folder that is accessible for OsmAnd and other apps, particularly useful for external or removable storage.

### Picking a "Generally Accessible" OsmAnd data storage folder using the "Media" Storage {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android has become stricter with storage permissions, often limiting access to app-specific folders, especially with new installations or system upgrades. OsmAnd’s default data storage may be restricted, making it invisible to other apps or even file managers. Many users want to store maps and data in accessible external storage for backup, syncing, or manual file management.

However, OsmAnd doesn’t have the *All files access* permission (due to Google’s restrictions), limiting the choice of folders. One workaround is using the "Media" storage folder, which Android typically grants broader read/write access. To do this:

- Go to *OsmAnd’s Settings → OsmAnd settings → Data storage folder* and review the available storage areas. Use the free space indicator to identify the target storage, often labeled *External storage 2*.
- Note the current folder path, which might look like */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Switch to the *Manually specified* option, and modify the path to a media-accessible folder. On many systems, changing */Android/data/* to */media/* (e.g., ***/storage/xxxx-xxxx/media***) works. Some systems may require different path modifications.

A correct path will not prompt OsmAnd with any write permission errors. Before making these changes, ensure that OsmAnd has the appropriate storage permissions, including "Media" storage permission, under Android’s **Apps** settings. In newer Android versions, these permissions may be located in advanced or hidden menus.

### Deleting map data after the app update (if “Multiuser Storage 1” is selected) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

In OsmAnd’s Android version, selecting *Multiuser Storage 1* as the storage location can lead to the deletion of all [local maps](../personal/maps-resources.md#local-menu) whenever the app is automatically updated, such as from version 4.1.9 to 4.1.10, 4.1.11, or later (**Android 11, 12**). This issue is documented on [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

To avoid losing your map data during updates, consider these solutions:

1. *Backup Your Files*. Before updating OsmAnd, make a [backup](../personal/import-export.md) of the maps stored in *..Android/obb/net.osmand*. After updating, restore the files before launching the updated OsmAnd app.

2. *Change the Storage Path*. Move the OsmAnd folder to a location writable by all apps (e.g., Wi-Fi FTP server, X-plore, or via a USB cable to a PC). Change the folder path from:
   - /storage/emulated/0/Android/**obb**/net.osmand
   to
   - /storage/emulated/0/Android/**media**/net.osmand.


### No maps rendering for Google Pixel devices {#no-maps-rendering-for-google-pixel-devices}

For the OsmAnd 4.2 Android versions, [map rendering may fail](https://github.com/osmandapp/OsmAnd/issues/15045) on Google Pixel devices, leaving users with a blank white screen instead of a map.

To resolve this issue, switch to OpenGL rendering:

- Navigate to *OsmAnd menu → Settings → OsmAnd settings → Map rendering engine → Version 2 (OpenGL)*.
- Restart OsmAnd to apply the changes.


### Resolving slow map rendering in OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

To resolve the issue of slow map rendering, especially when using offline vector maps, the following steps should be taken:

1. **Disable unnecessary map features.** Turn off 3D relief, contour lines, hillshades, and slopes, which can significantly increase the processing power needed to render maps. You can do this in *Menu → Configure map*.

2. **Simplify map details.** Hide less critical elements like boundaries, POIs, OSM notes, weather layers, additional details (*Menu → Configure map → Map rendering*) to streamline map display and improve speed.

3. **Limit the number of displayed POIs.** Display only the main POIs or limit categories displayed during navigation, which can help speed up map rendering. Access these settings in *Menu → Navigation → Settings*.

4. **Adjust map magnifier.** The map magnifier setting could be a key factor in slowing down the map. Set the magnifier to 100% by long-pressing the **"+"** or **"-"** button on the map screen to optimize the display.

5. **Disable auto-zoom.** Auto-zoom can result in frequent redrawing of the map during navigation, causing delays. Disable auto-zoom in *Menu → Settings → Profile → Navigation settings → [Map during navigation](../navigation/guidance/map-during-navigation.md)*.

6. **Use offline maps only.** Online maps, especially when not downloaded in advance, can slow down map loading. Switch to using only offline maps for smoother performance.

These changes should reduce the time it takes to render maps, especially during navigation. For more detailed configuration options, refer to the [Map Settings Guide](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Contour Lines {#contour-lines}

### Is there a way to display contour lines in feet instead of meters? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Yes, contour lines can be displayed in feet instead of meters. Before downloading the Contour line data, choose between Feet or Meters: [read more about it here](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Contour Lines, Elevation data or 3D Relief are not displayed {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Verify if the correct region's data has been downloaded. Go to ***Menu → Maps & Resources → Downloads → Your Region***. [How to download maps](../start-with/first-steps.md#how-to-download-maps).
- Check that the [plugin](../plugins/topography.md#required-setup-parameters) is enabled and visible in ***Menu → Plugins → Topography***.
- Check that the items in the Topography section are enabled in ***Menu → Configure Map → Topography → Contour lines / Terrain / 3D Relief***.
- Check your purchases: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Update the app to the latest version.
- Delete and redownload the required maps to ensure no corrupted files.
- Restart OsmAnd to refresh settings and data.


## Search {#search}

### Structured (city *→* street *→* house) address search doesn't find the house {#structured-city--street--house-address-search-doesnt-find-the-house}

If you're trying to search for a location using the structure *City → Street → House Number* and no results are returned, consider the following tips and potential causes:

> **Tip**: Try a full-text search without specifying the city, as the address may be listed under a different city.

**Potential Issues:**

- **House Missing**. The house might not be listed on OpenStreetMap, or it could be present but without assigned numbers. You can verify this with an example [here](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Incorrect Street Name**. The street name associated with the house might be incorrect in OpenStreetMap. Check the `addr:street` tag to ensure the street name exactly matches the one in the street's tagging information.

- **Issue with Nominatim**. The house may be present in OpenStreetMap but not found via Nominatim (the search engine used by OpenStreetMap). You can learn more about how to fix address-related issues [here](https://wiki.openstreetmap.org/wiki/Addresses).

- **Possible Issue in OsmAnd**. If the house is present in Nominatim but still not found in OsmAnd, the problem might be specific to OsmAnd. You can contribute to solving this by investigating further. More details can be found in this [technical article](../../technical/algorithms/trace-address-search-issues.md).


## Tracks and Points {#tracks-and-points}

### How to mark different places on the map {#how-to-mark-different-places-on-the-map}

You can leave notes and mark locations on the map in various forms, each serving different purposes:

- *[Favorites](../personal/favorites.md)*. These are permanent points on the map where you can add descriptions. To create a Favorite, make a *long tap → tap Add*. Favorites are great for marking places you visit frequently or want to save for future reference.

- *[Markers](../personal/markers.md)*. Markers are temporary points, often used for navigation or planning. They can show the distance from your current location or another point, and can be removed quickly when no longer needed. To add a Marker, make a *long tap → tap Marker*.

- *[Waypoints](../map/tracks/index.md#types-of-tracks)*. Waypoints are placed along routes you create, helping you mark specific stops or locations along your journey. You can add descriptions to these points as well. To add a waypoint, make a *long tap on the map → Directions → add as intermediate waypoint*.

- *[Audio/Video Notes](../plugins/audio-video-notes.md)*. These notes allow you to attach audio, video, or photo files to specific locations on the map. To enable, activate the Audio/Video Notes plugin in *OsmAnd menu → Plugins*. To add one, make a *long tap → Actions → choose the required file to attach*.

- *[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note)*. These are reports you can create to highlight errors or missing information on OpenStreetMap. Enable the OSM editing plugin in the *OsmAnd menu → Plugins*. To add an OSM Note, make a *long tap → Actions → Add OSM note*.

- *[POIs (Points of Interest)](../map/point-layers-on-map.md#points-of-interest-pois)*. These are predefined points from OpenStreetMap's data source, such as restaurants, parks, or landmarks. You can view POIs by enabling the POI overlay in the *Configure Map* menu or by selecting a category.

- *[Search](../search/index.md)*. You can also use the search function to find and mark places on the map.