---
sidebar_position: 8
title: Popular Places
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


## Overview {#overview}

The **Popular Places** feature in OsmAnd highlights notable landmarks and attractions using open structured data from [Wikidata](https://www.wikidata.org) and [Wikipedia](https://www.wikipedia.org/). It helps users explore well-known destinations with multilingual descriptions and photos.

Each place included in this feature is linked to a **Wikidata ID**, which enables OsmAnd to display verified names, preview images, and links to Wikipedia articles. This tool does **not** show all OpenStreetMap (OSM) points. It is limited to POIs with Wikidata references.

Currently, the curated database includes approximately **50,000 to 150,000 top-rated places** globally, selected from over **1 million** Wikidata + OSM objects.

:::note
*This is the first version of the Popular Places feature. Feedback is welcome on [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Popular places](@site/static/img/map/popular_places/popular_places.png) ![Popular places](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Data Sources

**Popular Places** are based on structured content from [Wikidata](https://www.wikidata.org) and [Wikipedia](https://www.wikipedia.org/).

Only POIs with a linked **Wikidata ID** are displayed. These IDs connect map objects to verified names, descriptions, and images.

You can view the Wikidata link directly in the [Map Context Menu](../map/map-context-menu.md). Tapping the Wikidata tag opens the full object page on the Wikidata website.

Learn how to find a Wikidata ID: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## How to Use {#how-to-use}

<InfoAndroidOnly/>

The **Popular Places** feature includes both a curated list of nearby landmarks and a layer of Wikipedia-based POIs on the map.

There are two main ways to access this feature:

- **Free version**  
  Access via [Search](#explore-in-search) to explore nearby places in list view.  
  *<Translate android="true" ids="android_button_seq"/>*. Go to: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Paid versions** *(Maps+ and OsmAnd Pro)*  
  Enable the visual overlay in the [Configure Map](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Go to: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  In this mode, popular POIs appear directly on the map with thumbnail previews and Wikipedia content.

You can switch between **online** and **offline** Wikipedia sources in the overlay settings. Learn more in [Enable Layer](#enable-layer).


## Explore in Search {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Explore Mode](@site/static/img/map/popular_places/popular_places_search.png)  
![Explore Mode](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

The **<Translate android="true" ids="popular_places_nearby"/>** section displays a scrollable list of top-rated landmarks near your current location. Each item includes:

- Name of the place.
- Short description.
- POI category tag.
- Distance and direction.
- Thumbnail image (if available).

Tap **Show All** to view the full list, or **Show on Map** to display all listed POIs on the map.

Tapping any place opens the [POI context menu](./map-context-menu.md), where you can preview photos and access related [Wikipedia content](../plugins/wikipedia.md).

:::tip
The search-based Explore Mode works **online only** in the free version.  
To use it **offline**, you need a [Maps+ or OsmAnd Pro](../purchases/android.md) subscription and downloaded [Wikipedia maps](../plugins/wikipedia.md).
:::


## Enable Layer {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Go to: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

The **Popular Places (Wikipedia)** feature is available in the [Configure Map menu](./configure-map-menu.md). To display popular places directly on the map, enable the POI layer with data from Wikipedia using Wikidata images.

Before using this feature:

- Make sure the [Wikipedia Plugin](../plugins/wikipedia.md) is enabled.
- Download Wikipedia data for your region if you want to use it offline.

### Layer Options

Once enabled, the following options become available:

- **<Translate android="true" ids="poi_osmwiki"/>** – Toggle Wikipedia POIs on the map.

- **POI Source** – Switch between:
  - *Offline mode* (Wikipedia articles must be downloaded).
  - *Online only* mode (uses live data and images).

- **<Translate android="true" ids="shared_string_language"/>** – Select the language for Wikipedia descriptions.

- **<Translate android="true" ids="show_image_previews"/>** – Show image thumbnails from Wikidata next to POIs.

Tapping a POI on the map opens the [POI context menu](./map-context-menu.md), where you can view [online photos](#online-photos) and access linked [Wikipedia articles](../plugins/wikipedia.md).


## Online Photos {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

This is a section within the [POI context menu](./map-context-menu.md) that displays a photo preview of the selected Popular Place (Wikipedia). You can scroll horizontally to browse through the available photos, or tap any image to open it in [full screen mode](#gallery).

Learn more about additional options in the [Actions](#actions) section and [Gallery](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Actions {#actions}

In the Map Context menu How to access:

- Tap the **Show All** (Android) / **View All** (iOS) button to open the [gallery](#gallery) in full screen mode, where you can swipe through all available photos for the selected location.

- Tap any photo to view it in [full screen](#gallery) and access the available actions:  
  **Share**, **Details**, **Open in browser**, and **Download**.


### Gallery {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Gallery Menu – Android](@site/static/img/map/gallery_menu_android.png)
![Gallery Menu – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios.png)
![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The **Gallery Menu** can display up to **100 images** related to the selected point of interest. You can swipe through all available photos. Tapping a photo briefly opens a detailed view showing: *Name*, *Date added*, *Author*, *License*  

You can also perform the following actions on each photo:

- **Share**  
  Share the selected image using any compatible app installed on your device (e.g., messaging, email, or social media). The shared content includes the image and its source link (if available).

- **Details**  
  Open a detailed view showing metadata about the image, including: *Name*, *Date added*, *Author*, *License*, *Source*, and *Direct link*

- **Open in browser**  
  Launch the image’s source page (usually on [Wikimedia Commons](https://commons.wikimedia.org/)) in your default browser. This allows you to view the full image, licensing information, and related content.

- **Download**  
  Save the image to your device’s storage. The downloaded image can be found in your device’s default Downloads folder and accessed offline.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

The Android version does not include an additional menu for photo actions.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Context Menu Options](@site/static/img/map/gallery_menu_ios_3.png)

On **iOS**, long-pressing a photo opens a context menu with additional actions:

- **Details**  
- **Open in browser**  
- **Download**

**Buttons**:

- The **Share** button lets you quickly share the selected image.  
- The **three-dot menu** provides access to extra actions, including viewing details, opening the source in a browser, or downloading the image.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Android – Details View](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Details View](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

The **Details** screen provides full metadata for the selected photo, including: *Name*, *Date added*, *Author*, *License*, *Source*, and *Direct link*


## Related Articles

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Search POI](../search/search-poi.md)
- [Wikipedia plugin](../plugins/wikipedia.md)


> *This article was last updated in June 2025*



### Online Photos 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

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

#### Gallery Menu 2

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

