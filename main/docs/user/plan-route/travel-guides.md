---
sidebar_position: 2
title:  Travel Guides
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


:::tip NOTE
Travel Guides is a [paid feature](../purchases/index.md) of the OsmAnd app.  
:::

## Overview

Virtual travel guides in OsmAnd offer users valuable information, recommendations, and tips. They also allow travelers to access comprehensive navigation information about attractions in the app.

OsmAnd travel guides are based on data from [Wikivoyage](https://www.wikivoyage.org/), a community project similar to Wikipedia, where volunteer authors create up-to-date articles.  
Wikivoyage information includes the main facts about a place, transportation, attractions, shopping, and more.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png) 

</TabItem>

</Tabs>


## How to use

- [Download](#download-articles) *Travel guides*.
- Browse [articles](#browse-articles) about a country, region, city, attractions.
    - Alternatively [display travel guides articles and / or points on the map](#travel-routes) using Configure map menu.
    - Browse through attractions on the map, add them to *[Map markers](../personal/markers.md#add-marker-on-the-map)* or *[Favorites](../personal/favorites.md#add-to-map-markers)*.
    - Using *[Read full](#manage-as-gpx-track)* button go to the *[Article](#travel-article) inside *Travel guides*.
- [Bookmark](#explore-and-bookmark) articles to read them later.
- Chose [points](#points) from articles to visit and add them to the OsmAnd map.
- Get more information about places to visit from offline [wikipedia articles](#combine-with-wikipedia).
- [Build a route](../navigation/setup/route-navigation.md#set-destinations) to chosen touristic attractions or a free walk between points.

:::note
*Travel guides* articles are stored inside OsmAnd in form of GPX tracks with Waypoints.  After adding these tracks to the map (see *[Points](#points)* or *[Travel routes](#travel-routes)* sections of this article), you can manage them via *[My Places](../personal/myplaces.md)* menu.
:::

### Download articles

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Maps menu iOS](@site/static/img/guides/travel_guides_download_1_ios.png) 

</TabItem>

</Tabs>

Before you start using travel guides, you need to download them via the [Download map menu](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). The articles are grouped by regions: *Africa, Asia, Australia and Oceania, Central America, Europe, North America, Russia, and South America*, so you don't have to  download travel books for a separate city or country.  
By saving the required regions on your device, you can browse the articles with OsmAnd even when you are abroad or out of range of your mobile network. 

:::note
In addition to guides to countries, regions, or cities, you can find guides to places from movies, books, computer games, places of memory of great people, and so on.
There are also specialized guides, such as the UNESCO Global Geoparks Network list or the world's largest and most complex international airports.
:::

## Browse Articles

The *Travel guides* screen consists of two general parts: a [*search field*](#search) and a *travel guides* list with two tabs: *[<Translate android="true" ids="shared_string_explore"/> and <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. You can switch between them with a single tap a tab.    
When you open *Travel Guides* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd will show you articles about interesting places located near the geographic coordinates of the current center of the map. When you tap the item from the list the [Travel guide article](#travel-article) opens. At the bottom of the screen is a switch to the *Bookmarks tab*.  

### Explore and Bookmark

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

On the **Explore** or **<Translate android="true" ids="popular_destinations"/>** tab, the top 30 articles about destinations are listed adjacent to the center of the screen (out of location). By tapping an item from the list with a title and a brief description of the article, you can view the full text of that article.  
If you tap the *Bookmark button*, the article will be saved for later reading and will be available in the Bookmarks tab. In the *Bookmarked Articles* tab, articles are arranged as they are saved, with the newest articles at the top.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Opens [Travel article](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Moves the selected article to <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Removes the selected article from <Translate android="true" ids="saved_articles"/>.

### Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Search field is located at the top of the <Translate android="true" ids="shared_string_travel_guides"/> screen. If you start typing the first letters of a country, city, or famous place, a list of articles will appear under the search field. By touching the needed one, you can start reading.  
Next to each search result are listed the first 3 most commonly used languages in which the selected article can be read. However, popular articles are available in many more languages than the 3 listed.

**Additional features**  
- You can search for some special Cultural attractions, such us *Harry potter tourism*, *Ghost towns*, *Monarchies*, and other. 
- To delete the search history, you need to use the [<Translate android="true" ids="shared_string_options"/> button](#options).

<!-- 
- Search is complete only when you hit &#128269; or space in the end of the word. - doesn't work as it should be
-->

### Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

In this menu you can customize the appearance of articles when working offline. NOTE, that *[downloaded](#download-articles)* travel guides do not contain images. They only appear when you view articles with an active Internet connection.  
In the Options menu, you can choose whether or not to save images in the viewed articles to use them when you are offline. You can also clear existing images cash or delete the search history (only works wehen searching in *Travel guides*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Images in articles can be downloaded for offline use.  
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Clears the images cache to free up memory.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Clears [search history](#search).

## Travel Article

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides article](@site/static/img/guides/travel_guides_article.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

You can open an article from the suggested options on the *[Explore tab](#explore-and-bookmark)* or using the *[Search](#search)* option. 
If you have added touristic attractions called *[Points](#points)* to the OsmAnd map from *Travel guide article*, you can also open the article using *Read full* button in the [description section](../map/tracks/track-context-menu.md#description-and-info) of the waypoint.  

The following controls are located at the top of the screen:
- Switch to change the language of the article. The language can be selected from the available options.The system language is used by default. 
- Using the &#8942; button you can share the article with your friends. The link opens in the OsmAnd app, apropriate travel guides file should be downloaded on the recipient's device or [Wikivoyage](https://www.wikivoyage.org/) site, if recipient does not have the OsmAnd app or for iOS devices.
- Taping the navigation bar opens *[Travel guides Navigation menu](#navigation-menu)*.

At the bottom of the screen are buttons such as:
- [Contents](#table-of-contents). Opens the table of contents of the article.
- [Points](#points). Shows tourist attractions related to the article on a map.
- [Bookmark](#explore-and-bookmark). Allows you to add an article to bookmarks for later reading.  


### Navigation menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_navigation_menu.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs> 

To move one article to another in the *Travel guide articles*, use the **Navigation menu**. You can access it by tapping on the address field above the image. NOTE, that the articles in the Travel Guides are grouped as follows: *Continent → Region → Country → Province (region) → City*. 
If you tap the arrow in the upper left corner of the screen, you will go directly to the *Explore* or *Bookmarked articles* tab (depending on which tab you opened earlier).


### Table of contents

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Most *Travel guide articles* have the same content structure: *introduction* (images and description of the tourist site) and *subsequent chapters*.

- &nbsp;*Understand*. Details about local culture and habits.
- &nbsp;*Get in*. How to get to the area, places, and so on, and how much this route will cost.
- &nbsp;*See*. A list of attractions (museums, historical sites, and so on) with full descriptions: ticket prices, opening hours, useful links, and phone numbers.
- &nbsp;*Do*. Places to spend time.
- &nbsp;*Buy*. Sites to shop.
- &nbsp;*Eat*. Catering facilities (divided by budget: budget, mid-range, splurge).
- &nbsp;*Drink*. Bars and cafes.
- &nbsp;*Sleep*. Accommodations divided by budget (budget, mid-range, splurge).
- &nbsp;*Go next*. Nearest places from Wikivoyage.

### Points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides points  menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png)  ![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Travel guide articles* often contain tourist attractions grouped by topic. By tapping onece on the *Points* button at the bottom of the *[Article](#travel-article)*, all attractions related to the topic (eating places, accommodation options, airports, shops, historical monuments, and so on) will be added to the map and can be *[managed as a Track](#manage-as-gpx-track)*.  

By default, attraction groups are marked with certain icons: *Eat and Drink* categories with a knife and fork in a red circle, *Do and See* with camera in a green circle, and other. You can manage groups of points with &#8942; like a *[Waypoint folder](../map/tracks/track-context-menu.md#waypoints-folder)*.  

:::note
Points in *Travel articles* refer to waypoints on a GPX track.  
You can also *[add points to the map](#travel-routes)* in *Configure map* menu. You can display them all or select a specific category.  
:::


## Travel routes

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

An alternative way to browse *Travel guides* is to display them on the map using *Configure map* menu. This feature does not apply to the ability provided by OsmAnd to use Wikivoyage, it only applies to tracks. You can read more in our [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Travel guides points  menu](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_travel_routes_view.png) 


### Travel routes and articles on the map

![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

After you enable *Travel routes* display in the *Configure map* menu, circles of different colors will appear on the map. The orange ones represent routes tracks, route articles, and some waypoints. If you tap a specific route, article, or point and then tap *Download* button (&#9047;), you can [manage them as a track](#manage-as-gpx-track). 

### Custom Travel guides

We recommend you to add new articles or edits to [Wikivoyage](https://en.wikivoyage.org/). We update the Travel guides about every 6 months, and you can download new articles. You can also create your own *Travel book*. How to make it is described in tecnical documentation (see *[Create custom Travel guide](../../technical/map-creation/create_travel_guide.md)* article).

<!--
### Collections of tracks

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Manage as GPX Track

![Travel guides points menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Travel guides points menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)  

After you add *Travel guides* to the map, *Travel articles* can be saved as a GPX track and managed through the *[My places](../personal/myplaces.md)* menu (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). They can be displayed on the map, shared, renamed, placed in another folder, exported or deleted.  

- &nbsp;In *[Overview](../map/tracks/track-context-menu.md#overview)*, you can read brief description or open [Travel guide article](#travel-article) by taping *Read full* button. *Edit* allows you to correct the article.
- &nbsp;There is no information in the *[Track](../map/tracks/track-context-menu.md#altitude--speed-graphs)* section,  the GPX files of *Travel guides* contain only waypoints.  
- &nbsp;Under *[Points](../map/tracks/track-context-menu.md#points--waypoints)* you see folders with points grouped by name (Buy, Do, Drink, and so on).
- &nbsp;The *[Option](../map/tracks/track-context-menu.md#options)* button performs the same functions as in the regular track.

:::info
*Points* are stored in a [GPX-file](../../technical/osmand-file-formats/osmand-gpx.md) (a commonly used format for tracks) as [Waypoints](../map/point-layers-on-map.md#track-waypoints). The number of points (waypoints) in the track contains is marked next to the icon &#128681; in the track field.  
In *[track context menu](../map/tracks/track-context-menu.md)* of GPX-file you can find general information about the article to which this track belongs.  
:::

## Combine with Wikipedia

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides combine with Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Travel guides combine with Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

In the *Travel guides articles* you can find useful information about tourist attractions (contact information, web links, prices, and so on). Many articles have a *Wikipedia* button that allows to open a *[Wikipedia article](../plugins/wikipedia.md)* (online or offline) about the place of interest.  

In some cases, OsmAnd's *[Bookmarks tab](#explore-and-bookmark)* will prompt you to download [Wikipedia map layer](../plugins/wikipedia.md#download-wikipedia-packages) to browse related articles offline.

![Travel guides download Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTE
The [*Wikipedia plugin*](../plugins/wikipedia.md) is a [paid feature](../purchases/index.md) of the OsmAnd app.
:::


