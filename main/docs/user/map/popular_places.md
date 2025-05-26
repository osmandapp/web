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


## Overview {#overview}

<InfoAndroidOnly/>

The **Popular Places** tool in OsmAnd provides a curated selection of globally notable locations, helping users explore famous landmarks and points of interest. This feature is entirely powered by [Wikidata](https://www.wikidata.org) and [Wikipedia](https://www.wikipedia.org/), which are structured open knowledge bases containing data about millions of geographic objects — including articles, coordinates, images, and multilingual descriptions.

Each place listed in the Popular Places tool is linked to a **Wikidata ID**, enabling OsmAnd to display detailed information and relevant images for the selected location. The presence of a Wikidata ID is essential for accurate identification and visualization of each place.

Currently, the tool features a focused subset of approximately **50,000 to 150,000 top-rated locations**, selected from around **1 million** Wikidata objects that also exist in [OpenStreetMap](https://www.openstreetmap.org). Although Wikidata includes over **10 million** geotagged objects globally, OsmAnd highlights only the most prominent ones—resulting in a small but high-quality selection.

> *This is the first iteration of the Popular Places tool in OsmAnd. We welcome your feedback on any issues or missing locations.*

You can continue reading this guide to learn how to use the feature, or [submit feedback on GitHub](https://github.com/osmandapp/OsmAnd).

![Popular places](@site/static/img/map/popular_places/popular_places.png) ![Popular places](@site/static/img/map/popular_places/popular_places_1.png)

## How to Use {#how-to-use}

<InfoAndroidOnly/>

The **Popular Places** feature — which includes POIs on the map and a curated list of notable locations — can be accessed from two different sections of the app:

- **Free version**  
  Via [**Search**](#explore-in-search):  
  Go to **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>* to explore nearby landmarks and attractions.

- **Paid versions** *([Maps+ and OsmAnd Pro](../purchases/android.md))*  
  Via [**Configure Map**](#enable-layer):  
  Enable the overlay via **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>* → Points of interest will appear on the map, including thumbnail images from Wikidata (if available).  
  You can switch between offline Wikipedia data and online data by adjusting the **POI Source** in the [Popular Places menu](#enable-layer).

### Explore in Search {#explore-in-search}

![Explore Mode](@site/static/img/map/popular_places/popular_places_search.png) ![Explore Mode](@site/static/img/map/popular_places/popular_places_search_2.png)

**<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

The *<Translate android="true" ids="popular_places_nearby"/>* section displays the most popular tourist destinations nearby. You can scroll left or right to browse highlighted locations around you, or tap the *<Translate android="true" ids="shared_string_show_all"/>* button to open the full list of popular places.

Each item includes an image, a short description, a POI category tag, as well as the distance and direction to the location.

At the top of the list, you’ll find the *<Translate android="true" ids="shared_string_show_on_map"/>* button, which displays all listed POIs directly on the map.

Tapping any location opens the [POI context menu](./map-context-menu.md) on the map, where you can access the [Online Photos](#online-photos) section and view the linked [Wikipedia article](../plugins/wikipedia.md)  for the selected place.

:::tip
This feature works **online only** in the free version.  
To use it **offline**, you need to purchase a [Maps+ or OsmAnd Pro](../purchases/android.md) subscription and download the [Wikipedia maps](../plugins/wikipedia.md) for your selected region.
:::

### Enable Layer {#enable-layer}

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png)

**<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

The **<Translate android="true" ids="poi_osmwiki"/>** feature is available under the [Configure Map menu](./configure-map-menu.md). It offers extended settings for displaying Wikipedia-based content on the map using Wikidata images.

Before using this feature, ensure the [Wikipedia Plugin](../plugins/wikipedia.md) is enabled. Then, download the required Wikipedia map for your selected region if you want to use it offline.

This feature overlays Wikipedia POIs on the map, often with associated images from Wikidata.

Key options in this menu include:

- **<Translate android="true" ids="poi_osmwiki"/>** – Toggle the visibility of POIs with Wikipedia content on the map.
- **<Translate android="true" ids="shared_string_language"/>** – Choose the language for Wikipedia articles and POI descriptions.
- **POI Source** – Choose between:
  - **Offline** mode (requires downloaded Wikipedia articles), or
  - **Online only** mode (no article download required).  
    In Online mode, POIs and their images are displayed dynamically — similar to the [Explore Mode by Search](#explore-in-search).
- **<Translate android="true" ids="show_image_previews"/>** – Enable this to show thumbnail previews of images for POIs directly on the map.

Tapping any image-based POI on the map opens the [POI context menu](./map-context-menu.md), where you can access the [Online Photos](#online-photos) section and open the linked [Wikipedia article](../plugins/wikipedia.md) for the selected place.


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

### Data Sources {#data-sources}

The image data in Popular Places comes from [Wikidata](https://en.wikipedia.org/wiki/Wikidata), a collaboratively edited, multilingual knowledge graph.  
As noted in the [Overview](#overview), each location featured in the Popular Places tool is linked to a [**Wikidata ID**](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID), which allows OsmAnd to display detailed descriptions and relevant images.

In the [Map Context Menu](../map/map-context-menu.md), each Popular Place includes a clickable Wikidata tag.  
Tapping this tag opens the corresponding object's page on the Wikidata website.



### Actions {#actions}

In the Map Context menu How to access:

- Tap the **Show All** (Android) / **View All** (iOS) button to open the [gallery](#gallery) in full screen mode, where you can swipe through all available photos for the selected location.

- Tap any photo to view it in [full screen](#gallery) and access the available actions:  
  **Share**, **Details**, **Open in browser**, and **Download**.


### Gallery {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Gallery Menu – Android](@site/static/img/map/gallery_menu_android.png) ![Gallery Menu – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios.png) ![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios_1.png)

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
