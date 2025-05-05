---
sidebar_position: 8
title: Popular Places
unlisted: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## Overview

<InfoAndroidOnly/>

The **Popular Places** tool in OsmAnd provides a curated selection of globally notable locations, helping users explore famous landmarks and points of interest. This feature is entirely powered by [Wikidata](https://www.wikidata.org), a structured open knowledge base that contains data about millions of geographic objects, including coordinates, images, and multilingual descriptions.

Each place listed in the Popular Places tool is linked to a **Wikidata ID**, which allows OsmAnd to display rich information and related images for that object. This linkage makes the Wikidata ID essential for identifying and visualizing each place accurately.

Currently, the feature includes a focused subset of approximately **50,000 to 150,000 top-rated locations**, selected from about **1 million** Wikidata objects that are also present in [OpenStreetMap](https://www.openstreetmap.org). While Wikidata contains over **10 million** objects with geographic coordinates, this tool deliberately highlights only the most notable ones, making it a small but high-quality selection.

> *This is the first iteration of the Popular Places tool in OsmAnd. We are open to feedback regarding specific location issues or suggestions for future improvements.*

You can learn more about how to use this feature in the rest of this guide or share your feedback through the [OsmAnd GitHub repository](https://github.com/osmandapp/OsmAnd).


## How to Use

The Popular Places feature can be activated in two different sections of the app:

Via Search:
Go to Search → Categories → Popular Places to explore nearby landmarks and attractions.

Via Configure Map:
Enable the overlay via **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*
→ POIs will appear on the map with thumbnails from Wikidata (if available). You can choose between offline Wikipedia data and online data by adjusting the POI Source in the [Popular Places menu](#popular-places-wikipedia-menu).

ß



### Popular Places (Wikipedia) Menu

<InfoAndroidOnly/>

Make sure the [Wikipedia Plugin](../plugins/wikipedia.md) is enabled: 

**<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png) 

The **Wikipedia POIs** feature is integrated under the new **Popular places (Wikipedia)** setting in the Configure map menu. This update provides expanded settings for Wikipedia content, giving you more control over your experience.

Key features:

- **Image previews** - You can now *view photos* for POIs directly on the map with the *Show image previews* setting.
- **Offline and Online Mode** - View *Wikipedia POIs* without downloading the map data by using the online mode.

How to use:

- Enable the **Wikipedia plugin** to access wikidata on the map and its settings in the Configure map menu.
- Go to *Menu → Configure map → Popular places (Wikipedia)* to adjust settings for image previews, language preferences, and data sources.



### Explore Mode by Search

<InfoAndroidOnly/>

![Explore Mode](../../../blog/2025-04-18-android-5-0/img/explore_search.png)

The **Explore** mode has been introduced, replacing the *History* tab, making it easier than ever to discover *top-ranked points of interest (POIs)*. Now, you can explore nearby POIs, view their *photos* on the map, and easily access your *Recently visited* locations — all within the new **Explore** tab. This update makes finding interesting places faster and more convenient.

Key features:

- **Explore nearby POIs** — Discover *popular places* and *top-ranked POIs* based on *popularity*, with helpful *photos* displayed on the map and in the search results.
- **Recently visited** - Access your *recently visited (history) places* within the **Explore** tab for quick navigation back to previously explored locations.
- **Wikipedia integration** - *Wikipedia entries* are combined with POI details, allowing you to view detailed information, including photos and descriptions for each location.

How to use:  
Go to *Menu → Search → Explore* to start discovering nearby POIs and view your recently visited places.


## Online Photos

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

## Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap. <!-- Here we need to write about Popula places (WIkipedia) -->

<!--
Images nearby

Details:

- Mapillary offers nearby street-level images, while Wikimedia provides media tagged with `image` or `wikimedia`from OpenStreetMap.

- You can contribute your photos using the *Add Photos* button.

*Images nearby* (*iOS*) section provides access to photos of points of interest from sources such as [Wikimedia](https://www.wikimedia.org/) and [Mapillary](../plugins/mapillary.md).
-->

### Gallery Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:  
- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.