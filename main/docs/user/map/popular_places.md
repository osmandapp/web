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

The **Popular Places** tool in OsmAnd provides a curated selection of globally notable locations, helping users explore famous landmarks and points of interest. This feature is entirely powered by [Wikidata](https://www.wikidata.org) and [Wikipedia](https://www.wikipedia.org/), which are structured open knowledge bases containing data about millions of geographic objects — including articles, coordinates, images, and multilingual descriptions.

Each place listed in the Popular Places tool is linked to a **Wikidata ID**, enabling OsmAnd to display detailed information and relevant images for the selected location. The presence of a Wikidata ID is essential for accurate identification and visualization of each place.

Currently, the tool features a focused subset of approximately **50,000 to 150,000 top-rated locations**, selected from around **1 million** Wikidata objects that also exist in [OpenStreetMap](https://www.openstreetmap.org). Although Wikidata includes over **10 million** geotagged objects globally, OsmAnd highlights only the most prominent ones—resulting in a small but high-quality selection.

> *This is the first iteration of the Popular Places tool in OsmAnd. We welcome your feedback on any issues or missing locations.*

You can continue reading this guide to learn how to use the feature, or [submit feedback on GitHub](https://github.com/osmandapp/OsmAnd).

![Popular places](@site/static/img/map/popular_places/popular_places.png) ![Popular places](@site/static/img/map/popular_places/popular_places_1.png)

## How to Use

<InfoAndroidOnly/>

The **Popular Places** feature — which includes POIs on the map and a curated list of notable locations — can be accessed from two different sections of the app:

- **Free version**  
  Via [**Search**](#explore-mode-by-search):  
  Go to **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>* to explore nearby landmarks and attractions.

- **Paid versions** *([Maps+ and OsmAnd Pro](../purchases/android.md))*  
  Via [**Configure Map**](#popular-places-wikipedia-menu):  
  Enable the overlay via **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>* → Points of interest will appear on the map, including thumbnail images from Wikidata (if available).  
  You can switch between offline Wikipedia data and online data by adjusting the **POI Source** in the [Popular Places menu](#popular-places-wikipedia-menu).

### Explore Mode by Search

![Explore Mode](@site/static/img/map/popular_places/popular_places_search.png) ![Explore Mode](@site/static/img/map/popular_places/popular_places_search_2.png)

**<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

The *<Translate android="true" ids="popular_places_nearby"/>* section displays the most popular tourist destinations nearby. You can scroll left or right to browse highlighted locations around you, or tap the *<Translate android="true" ids="shared_string_show_all"/>* button to open the full list of popular places.

Each item includes an image, a short description, a POI category tag, as well as the distance and direction to the location.

At the top of the list, you’ll find the *<Translate android="true" ids="shared_string_show_on_map"/>* button, which displays all listed POIs directly on the map.

Tapping any location opens the [POI’s context menu](./map-context-menu.md) on the map, where you can access the [Online Photos](#online-photos-menu) menu and view the Wikipedia article linked to the selected place.

:::tip
This feature works **online only** in the free version.  
To use it **offline**, you need to purchase a [Maps+ or OsmAnd Pro](../purchases/android.md) subscription and download the [Wikipedia maps](../plugins/wikipedia.md) for your selected region.
:::

### Popular Places (Wikipedia) Menu

<InfoAndroidOnly/>

The **Wikipedia POIs** feature is integrated under the new **Popular places (Wikipedia)** setting in the [Configure map menu](./configure-map-menu.md). This update provides expanded settings for Wikipedia content, giving you more control over your experience.

At first, you can make sure the [Wikipedia Plugin](../plugins/wikipedia.md) is enabled, next go to: 

**<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png) 

Key features:

- **<Translate android="true" ids="poi_osmwiki"/>** - Toggle the display of POIs with Wikipedia content directly on the map.
- **<Translate android="true" ids="shared_string_language"/>** - Choose the language of Wikipedia articles and POI descriptions.
- **POI Source** - Select whether to use offline Wikipedia data (requires article download) or online content.
→ With _“Online only”_ you can view Wikipedia POIs and images without downloading map data.
- **<Translate android="true" ids="show_image_previews"/>** - Enable this setting to display image thumbnails for POIs directly on the map, enhancing visual navigation.



## Online Photos Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

### Actions With Photos

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