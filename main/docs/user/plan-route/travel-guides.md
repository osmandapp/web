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

<InfoIncompleteArticle/>

:::tip NOTE
Travel Guides is a paid feature of the OsmAnd app.  
:::

## Overview

Virtual travel guides inside OsmAnd offer valuable insights, recommendations, and tips for users. They also allow tourists to access comprehensive navigation information to attractions directly within the app.  

OsmAnd travel guides are based on data from [Wikivoyage](https://www.wikivoyage.org/), a community project similar to Wikipedia, where volunteer writers create up-to-date articles.  
Wikivoyage information includes the main facts about a place, transport, landmarks, shopping spots, etc.  

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

## How to use

- [Download](#download-articles) *Travel guides*.
- Browse [articles](#travel-guide-article) about a country, region, city, attractions.
    - Alternatively [display travel guides articles and / or points on the map](#travel-routes) using Configure map menu.
    - Browse through attractions on the map, add them to *[Map markers](../personal/markers.md#add-marker-on-the-map)* or *[Favorites](../personal/favorites.md#add-to-map-markers)*.
    - Using *[Read full](#manage-as-gpx-track)* button go to the *[Article](#travel-article) inside *Travel guides*.
- [Bookmark](#explore-and-bookmarks-tabs) articles to read them later.
- Chose [points](#points) from articles to visit and add them to the OsmAnd map.
- Get more information about places to visit from offline [wikipedia articles](#combine-with-wikipedia).
- [Build a route](../navigation/setup/route-navigation.md#set-destinations) to chosen touristic attractions.

:::note
*Travel guides* articles are stored inside OsmAnd in form of GPX tracks with Waypoints.  After adding these tracks to the map (see *[Points](#points)* or *[Travel routes](#travel-routes)* sections of this article), you can manage them via *[My Places](../personal/myplaces.md)* menu.
:::

### Download articles

Before you start using travel guides, you need to download them via the [Download map menu](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,welmode_download_maps,shared_string_travel_guides"/>*). Articles are grouped by regions: Africa, Asia, Australia and Oceania, Central America, Europe, North America, Russia, and South America, so you don't need to download travel books for a separate city or country.  
After the necessary regions are saved on your device, you can browse through articles using OsmAnd, even if you're abroad or out of a mobile network area!  

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

:::note
Besides the country, region or city guides, you can also find guides to the sites from movies, books, computer games, as well as places of memory of great people, etc.  
There are special guides like the list of UNESCO Global Geoparks Network or the list of the world's largest and most complicated international airports.  
:::

## Browse Articles

The *Travel guides* screen consists of two general parts: the [search field](#travel-guides-search) and the travel guides list with two tabs: *[<Translate android="true" ids="shared_string_explore"/> and <Translate android="true" ids="saved_articles"/>](#explore-and-bookmarks-tabs)*. By single tap on a tab, you can switch between them.  
When you open *Travel Guides* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd will show you articles about interesting places located near the geographic coordinates of the current center of the map. Tap on the item from the list opens the [Travel guide article](../plan-route/travel-guides.md#travel-guide-article). At the bottom of the screen is a switch to the [Bookmarks tab](#bookmarks).  

### Explore and Bookmark

On the *Explore tab (or <Translate android="true" ids="popular_destinations"/>)* are listed 30 first articles about destinations adjacent to the center of the screen (not the location). By touching the field with the title and a short description of the article, you can view its full text.  
If you tap the *Bookmark button*, the article will be saved for reading later and can be accessed in the Bookmarks tab. In the *Bookmarked Articles* tab, articles are arranged as they are saved. The newest ones are at the top.  

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2.png)

- &nbsp;<Translate android="true" ids="shared_string_read"/> - opens [Travel guide article](../plan-route/travel-guides.md#travel-guide-article).
- &nbsp;<Translate android="true" ids="shared_string_bookmark"/> - moves chosen article to <Translate android="true" ids="saved_articles"/>.
- &nbsp;<Translate android="true" ids="shared_string_remove"/> - removes chosen article from <Translate android="true" ids="saved_articles"/>.

### Search

Search field is located at the top of the <Translate android="true" ids="shared_string_travel_guides"/> screen. If you start typing the first letters of a country, city, or famous place, a list of articles will appear under the search field. By touching the needed one, you can start reading.  
Next to each search result are listed the first 3 most commonly used languages in which the selected article can be read. However, popular articles are available in many more languages than the 3 listed.

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

:::note
- You can search for some Cultural attractions (for example *Harry potter tourism*, *Ghost towns*, *Monarchies*, etc.). 
- To delete the search history you need to use [<Translate android="true" ids="shared_string_options"/> button](#options).
:::

<!-- 
- Search is complete only when you hit &#128269; or space in the end of the word. - doesn't work as it should be
-->

### Options

In this menu you can customize the appearance of articles when working offline. Note, that *[downloaded](#download-articles)* travel guides do not contain images. They appear only when viewing articles with an active Internet connection.  
In the Options menu, you can choose whether or not to save pictures in the articles you've viewed so that you can use them when you are offline. You can also clear images cash or delete search history (works only with search inside *Travel guides*).

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png) 

- &nbsp;<Translate android="true" ids="wikivoyage_download_pics"/> - images within articles can be downloaded for offline use.  
- &nbsp;<Translate android="true" ids="images_cache"/> - clears the images cache to free up memory.
- &nbsp;<Translate android="true" ids="delete_search_history"/> - clears [search history](#travel-guides-search).

## Travel Article

You can open an article from the proposed variants on the *[Explore tab](#explore-and-bookmarks-tabs)* or using the *[Search](#search)* option. 
If you have added touristic attractions, called *[Points](#points)* from *Travel guide article* to the OsmAnd map, you can also open an article using *Read full* button in a waypoint [description section](../map/track-context-menu.md#description-and-info).  

![Travel guides article](@site/static/img/guides/travel_guides_article.png) 

<!-- 
Add image -->

The following controls are located at the top of the screen:
- A switch to change language of an article. The language can be selected from the available options.The system language is used by default. 
- Using &#8942; button you can share article with friends. The link opens in the OsmAnd app (apropriate travel guides file should be downloaded on the recipient device) or [Wikivoyage](https://www.wikivoyage.org/) site (if recipient doesn't have the OsmAnd app or for iOS devices).
- Tap on a navigation panel opens *[Travel guides Navigation menu](#navigation-menu)*.

At the bottom of the screen there are buttons:
- [Contents](#table-of-contents) - opens table of contents of the article.
- [Points](#points) - shows the tourist attractions related to the article on the map.
- [Bookmark](#explore-and-bookmarks-tabs) - allows you to add an article to bookmarks for later reading.  

### Navigation menu

To move between *Travel guide articles*, use the *Navigation menu*. You can access it by clicking on the address field above the image. Note, that articles in the Travel Guides are grouped as follows: Continent - Region - Country - Province (region) - City. 
If you tap the arrow in the left top corner of the screen, you will go straight to the *Explore* or *Bookmarked articles* tab (depending on which tab was opened earlier).

![Travel guides contents menu](@site/static/img/guides/travel_guides_navigation_menu.png)

### Table of contents

Most *Travel guide articles* have the same content structure, with an introduction (images and a description of the tourist site) and subsequent chapters:

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

- &nbsp;*Understand* - details about local culture and habits.
- &nbsp;*Get in* - how to get to the area, places, etc., and how much will this route cost.
- &nbsp;*See* - a list of attractions (museums, historical sites...) with full descriptions: ticket prices, working hours, useful links, phone numbers.
- &nbsp;*Do* - places to spend time.
- &nbsp;*Buy* - sites to shop.
- &nbsp;*Eat* - catering facilities (divided by budget: budget, mid-range, splurge).
- &nbsp;*Drink* - bars and cafes.
- &nbsp;*Sleep* - accommodations divided by budget (budget, mid-range, splurge).
- &nbsp;*Go next* - closest places from Wikivoyage.

### Points

*Travel guide articles* often contain tourist attractions grouped by topic. By single tap on a *Points* button at the bottom of the *[Article](#article)*, all attractions related to the topic (eating places, accommodation options, airports, shops, historical monuments, etc.) will be added to the map and can be *[managed as a Track](#manage-as-gpx-track)*.  

![Travel guides points  menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

Attraction groups are marked by default with a certain icons: Eat and Drink categories with knife and fork in a red circle, Do and See with photocamera in a green circle, etc. You can manage points groups using &#8942; like a *[Waypoint folder](../map/track-context-menu.md#waypoints-folder)*.  

:::note
*Travel articles* points refer to waypoints of a GPX track.  
You can also *[add points to the map](#travel-routes)* in *Configure map* menu. You can either show them all or select a specific category to display.  
:::

## Travel routes

The alternative vay to browse *Travel guides* is to display them on the map using *Configure map* menu (<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>).

![Travel guides points  menu](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_travel_routes_view.png) 

### Travel routes and articles on the map

After you turn on displaying *Travel routes* in the *Configure map* menu, you will see multicolor circles on the map. Orange ones are for route tracks, route articles, and some of their waypoints. If you tap on a specific route, article, or point and then press *Download* button (&#9047;), you will be able to [manage it as a track](#manage-as-gpx-track).  

![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

<!--
### Collections of tracks


https://osmand.net/blog/routes/#generated-travel-routes

-->
## Manage as GPX Track

After you have added *Travel guides* to the map, *Travel articles* can be saved as GPX track and managed via *[My places](../personal/myplaces.md)* menu (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>): they can be displayed on the map, shared, renamed, put into another folder, exported or deleted.  

![Travel guides points menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Travel guides points menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)

- &nbsp;In *[Overview](../map/track-context-menu.md#overview)*, you can read short description or open [Travel guide article](../plan-route/travel-guides.md#travel-guide-article) by tap *Read full* button. *Edit* allows you to correct article.
- &nbsp;There is no information in *[Track](../map/track-context-menu.md#altitude--speed-graphs)* section (*Travel guides* GPX files contain only waypoints).  
- &nbsp;Under *[Points](../map/track-context-menu.md#points--waypoints)* you see folders with points grouped by name (Buy, Do, Drink, etc.).
- &nbsp;The *[Option](../map/track-context-menu.md#options)* button performs the same functions as in the regular track.

:::info
*Points* are stored in a [GPX-file](../../technical/osmand-file-formats/osmand-gpx.md) (a commonly used format for tracks) as [Waypoints](../map/point-layers-on-map.md#track-waypoints). The number of points (waypoints) that the track contains is marked next to the icon &#128681; in the track field.  
In *[Track Context menu](../map/track-context-menu.md)* of a GPX-file, you can find general information from article to which this track belongs.  
:::

## Combine with Wikipedia

In *Travel guides articles* you can find useful information about tourist attractions (contact information, web links, prices, etc.). Many articles have button *Wikipedia*, that allows to open *[Wikipedia article](../plugins/wikipedia.md)* (online or offline) about place of interest.

![Travel guides combine with Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Travel guides combine with Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png) 

In some cases in *[Bookmarks tab](#explore-and-bookmarks-tabs)* OsmAnd will suggest to download [Wikipedia map layer](../plugins/wikipedia.md#download-wikipedia-packages), so you can browse related articles offline.

![Travel guides download Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTE
Please note, that the [Wikipedia plugin](../plugins/wikipedia.md) is a paid feature of the OsmAnd app.
:::

## Custom Travel guides

We recommend to add new articles or edit them on [Wikivoyage](https://en.wikivoyage.org/). About every 6 months we update Travel guides and you can download new articles. You can also create your own *Travel book*. How to make it is described in tecnical documentation (see *[Create custom Travel guide](../../technical/map-creation/create_travel_guide.md)* article).
