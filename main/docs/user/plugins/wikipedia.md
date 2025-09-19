---
sidebar_position: 18
title:  Wikipedia
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';


## Overview {#overview}

:::info Paid feature
The Wikipedia plugin is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

Having Wikipedia on your trip helps you learn more about the places you visit. It is available offline and shows Popular Places (Android) / Wikipedia articles (iOS) related to the points of interest directly on the map.  

The Wikipedia plugin is a separate feature that can be enabled/disabled as needed. Once enabled, it allows you to upload Wikipedia data [downloaded](../personal/maps-resources#downloads-menu) for each geographical region. The map has two kinds of uploaded knowledge from Wikipedia: brief information and a full article.  


Brief information is provided by Wikipedia POIs (an abbreviation for "[point of interest](../map/point-layers-on-map.md)"). If the Wikipedia option is toggled on in the menu, a Wikipedia POI appears on the map. When you tap a point of interest, it expands to provide brief information from Wikipedia, as well as the ability to open a full article. The Wikipedia POI, as well as related articles, are available offline. You can read them as needed, switch languages, and search for other information on Wikipedia.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) is a free, multilingual open-collaborative online encyclopedia created and maintained by a community of volunteer editors using a wiki-based editing system.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Required Setup Parameters {#required-setup-parameters}

To display Wikipedia data on the map, you need to make the following settings:

1. [Purchase](../plugins/index.md#purchase) and [Enable](../plugins/index.md#enable--disable) Wikipedia plugin in the Plugins section of the *Main Menu*.
2. Download the [Wikipedia packages](#download-wikipedia-packages) for the required regions.  
3. Display the [Wikipedia POIs](#display-wikipedia-on-the-map) on the map for the required profile.  
4. Configure preferred [languages](#set-preferred-language) to read articles.


## Download Wikipedia Packages {#download-wikipedia-packages}

Wikipedia data is available for each geographic region. If it is loaded for one region and not loaded for another, in the first case you can work with Wikipedia information when viewing the region on a map, and in the other case, the region will not have any Wikipedia information. Once loaded, Wikipedia data becomes available in general, as well as offline.

To download the Wikipedia data for a region, go to the [available packages for download in the *Main Menu*](../start-with/download-maps.md#downloading-maps), find the needed region, and open it. The Wikipedia data will be among other packages.

You can open Wikipedia data to download by region as follows:

1. **Android**. Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Select the required region. Once the region is opened, the Wikipedia data will be among other packages.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

To see what data has already been uploaded, go to *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

To see what data has already been uploaded, go to *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Display Wikipedia on the Map {#display-wikipedia-on-the-map}

By loading Wikipedia data for the required regions, you can control the visibility of that data on the map. Visibility is controlled by [Popular Places (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **for Android** / [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia) **for iOS**, which can be shown or hidden for all uploaded regions by a certain [profile](../personal/profiles.md), for example, a profile for driving, a profile for cycling, another profile to show public transport, and others.  

To show or hide Wikipedia POIs, first select a profile and then on/off **Wikipedia** option.

To show/hide Wikipedia POIs, do the following:

1. Go to: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Select a Profile, and look for the *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* section of settings in the menu.  
3. Toggle  *<Translate android="true" ids="poi_osmwiki"/>* **for Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **for iOS** on.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia POIs on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Search Wikipedia {#search-wikipedia}

With uploaded Wikipedia data, regardless of the visibility mode of the [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia) on the map, it is possible to [search](../search/search-poi.md) for any information from Wikipedia.

When you tap the Search button, an additional panel appears allowing you to [search](../search/index.md) the entire text and/or a specific category. In the former case, the search results will show Wikipedia POIs with corresponding Wikipedia articles among other types of information. In the case of a [Wikipedia category search](../search/search-poi.md#poi-search-by-categories), the search results will only show Wikipedia information, sorted by the closest location to the area of the map that is currently displayed on the screen.  

- In the **Android** version, you can open [Search](../search/index.md) by tapping the *Search icon* in the upper left corner of the screen and/or tapping the *Search option* in the menu.
- In the **iOS** version, to open [Search](../search/index.md), the Search icon is in the upper left corner of the screen.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- To search by the Wikipedia [category](../search/search-poi.md#poi-search-by-categories), select: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- If necessary, tap the **Show Wikipedia on the map** option at the top of the search panel and search results from the Wikipedia category will appear on the map.  


## Wikipedia Article {#wikipedia-article}

To open the Wikipedia article:

1. Enable [Wikipedia POI layer](../map/point-layers-on-map.md#-wikipedia) for a specified profile.
2. Tap POI on the map.
3. In the [context menu](../map/map-context-menu.md) of a POI tap *Details* (or simply pull the *context menu* up) to view an abstract of the chosen Wikipedia article.
4. If you tap that text (for iOS version), you will be redirected to the offline Wikipedia article.
5. Use the *Read article* or *Read full article* button to open the full version of the Wikipedia article.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia Settings {#wikipedia-settings}

You can [set the language(-s)](#set-preferred-language) in which you prefer to read [articles](#wikipedia-article) and also configure [images download options](#download-images) for each [profile](../personal/profiles.md).

### Set Preferred Language {#set-preferred-language}

In the **Android** and **iOS** versions of the OsmAnd app, you can set your preferred language (or languages) for displaying Wikipedia articles using the *Configure map menu*. If you select more than one language, the *Wikipedia* articles on the map will be shown in any of them. Go to:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Select needed profile and in the *<Translate android="true" ids="shared_string_show"/>* section choose *<Translate android="true" ids="poi_osmwiki"/>* for Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* for iOS.  
3. Disable *<Translate android="true" ids="shared_string_all_languages"/>* option.  
4. Select specific language(-s) in the opened list.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
In the **iOS** version, you can also set the preferred language for Wikipedia articles using:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Switch Languages Inside the Article {#switch-languages-inside-the-article}

In case the *Wikipedia article* is available in different languages, you can switch the language while reading. After tapping the corresponding icon in the upper right corner of the screen you will be offered options to choose from.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Download Images {#download-images}

You can choose whether to download images from Wikipedia on your device or not inside *Wikipedia article*:

- **Android**. Open *[Wikipedia article](#display-wikipedia-on-the-map) → &#8942; → Options*
- **iOS**. Open *[Wikipedia article](#display-wikipedia-on-the-map) → Image icon*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

In the **iOS** version of the app, you can also access the image download options using *Wikipedia plugin settings*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)


