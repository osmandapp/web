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

<InfoAndroidOnly />

## Overview

Virtual travel guides inside OsmAnd offer valuable insights, recommendations, and tips for users. They also allow tourists to access comprehensive navigation information to attractions directly within the app.  
OsmAndt travel guides are based on data from [Wikivoyage](https://www.wikivoyage.org/), a community project similar to Wikipedia, where volunteer writers create up-to-date articles. Wikivoyage information includes the main facts about a place, transport, landmarks, shopping spots, etc. Plan to visit London, Shanghai, or planning a visit to the Grand Canyon? Your guide is inside OsmAnd to help you!

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

:::note
Besides the country, region or city guides, you can also find guides to the sites from movies, books, computer games, as well as places of memory of great people, etc.  
There are special guides like the list of UNESCO Global Geoparks Network or the list of the world's largest and most complicated international airports.  
:::

## How to use

- [Download](#download-travel-guides) *Travel guides*.
- Browse [articles](#travel-guide-article) about a country, region, city, attractions.
- [Bookmark](#bookmarks) articles to read them later.
- Chose [points](#points) from articles to visit and add them to the OsmAnd map.
- [Build a route](../navigation/setup/route-navigation.md) to chosen touristic attractions.

### Download Travel guides

Before you start using travel guides, you need to download them via the [Download map menu](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,welmode_download_maps,shared_string_travel_guides"/>*). Articles are grouped by regions: Africa, Asia, Australia and Oceania, Central America, Europe, North America, Russia, and South America, so you don't need to download travel books for a separate city or country.  
After necessary regions are saved on your device, you can browse through articles using OsmAnd even if you're abroad or out of a mobile network area!  

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

### Main screen

The *Travel guides* main screen consists of two general parts: the [search field](#travel-guides-search) and the travel guides list (or *<Translate android="true" ids="popular_destinations"/>*).
When you open it (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd will show you articles about interesting places located near the geographic coordinates of the current center of the map. Tap on the item from the list opens the [Travel guide article](../plan-route/travel-guides.md#travel-guide-article). At the bottom of the screen is a switch to the [Bookmarks tab](#bookmarks).  

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png)

#### Travel guides search

Search field is located at the top of the <Translate android="true" ids="shared_string_travel_guides"/> main screen. If you start typing the first letters of a country, city, or famous place, a list of articles will appear under the search field. By touching the needed one, you can start reading.  

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

:::note
- Available languages are listed next to each article.
- For deleting search history you need to use [<Translate android="true" ids="shared_string_options"/> button](../plan-route/travel-guides.md#options).
:::

<!-- 
- Search is complete only when you hit &#128269; or space in the end of the word. - doesn't work as it should be
-->

#### Travel guides list

The travel guide list shows 30 first articles about destinations adjacent to the center of the screen (not the location). By touching the field with the title and a short description of the article, you can view its full text. If you tap the *[Bookmark](#bookmarks) button*, the article will be saved for reading later.  
At the bottom of the screen, there are two tabs: *<Translate android="true" ids="shared_string_explore"/>* and *<Translate android="true" ids="saved_articles"/>*. By single tap on a tab, you can switch between them.

![Travel guides explore menu](@site/static/img/guides/travel_guides_explore_android.png) ![Travel guides bookmarked](@site/static/img/guides/travel_guides_bookmarked_android.png)

- &nbsp;<Translate android="true" ids="shared_string_read"/> - opens [Travel guide article](../plan-route/travel-guides.md#travel-guide-article).
- &nbsp;<Translate android="true" ids="shared_string_bookmark"/> - moves chosen article to <Translate android="true" ids="saved_articles"/>.
- &nbsp;<Translate android="true" ids="shared_string_remove"/> - removes chosen article from <Translate android="true" ids="saved_articles"/>.

### Options

In this menu you can customize the appearance of articles when working offline. Please note, that *[downloaded](#download-travel-guides)* travel guides do not contain pictures. Images appear only when viewing articles with an active Internet connection.  
In the menu, you can choose whether or not to save pictures in the articles you've viewed so that you can use them when you offline. You can also clear images cash or delete search history (works only with search inside *Travel guides*).

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png) 

- &nbsp;<Translate android="true" ids="wikivoyage_download_pics"/> - images within articles can be downloaded for offline use.  
- &nbsp;<Translate android="true" ids="images_cache"/> - clears the images cache to free up memory.
- &nbsp;<Translate android="true" ids="delete_search_history"/> - clears [search history](#travel-guides-search).

## Travel guide article

You can open an article from the proposed variants on the Travel guides *[Main screen](#main-screen)* or using the *[Search](#travel-guides-search)* option. If you have added touristic attractions, called *[Points](#points)* from *Travel guide article* to the OsmAnd map, you can also tap *Read full* button in a waypoint [description section](../map/track-context-menu.md#description-and-info).  
As soon as you open the article, you'll see the information conveniently arranged by topic.  

![Travel guides article menu](@site/static/img/guides/travel_guides_article_android.png) 

<!-- 
Add image -->

- At the top of the screen, next to the name of the article, there is a button to change its language. The system language is used by default.
- Using &#8942; button you can share article with friends. The link opens in the OsmAnd app.
- Tap on a navigation panel opens *Travel guides Navigation menu*.

At the bottom of the screen there are buttons:
- [Contents](#table-of-contents) - opens table of contents of the article.
- [Points](#points) - shows the tourist attractions related to the article on the map.
- [Bookmark](#bookmarks) - allows you to add an article to bookmarks for later reading.  

### Table of contents

Most *Travel guide articles* have the same content structure, with an introduction (images and a description of the tourist site) and subsequent chapters:

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

- &nbsp;*Understand* - details about local culture and habits.
- &nbsp;*Get in* - how to get to this area, place, etc. and how much will this route cost.
- &nbsp;*See* - a list of attractions (museums, historical sites...) with full descriptions: how much tickets cost, when they open, links to the site, phone numbers.
- &nbsp;*Do* - places to spend time.
- &nbsp;*Buy* - sites to shop.
- &nbsp;*Eat* - catering facilities (divided by budget: budget, mid-range, splurge).
- &nbsp;*Drink* - bars and cafes.
- &nbsp;*Sleep* - accommodations divided by budget (budget, mid-range, splurge).
- &nbsp;*Go next* - closest places from Wikivoyage.

### Points

*Travel guide articles* often contain tourist attractions grouped by topic. They are available in the *Points* menu at the bottom of the article. By single tap on a *Points* button all attractions related to the article will be shown on the OsmAnd map. You'll see food locations, airports, railway stations, shops, main historical attractions, accommodation options, etc. They will also be added to the map and can be managed as a *[Track](../personal/tracks.md)*.

![Travel guides points on the map  menu](@site/static/img/guides/travel_guides_track_points_map_android.png)  
<!-- 
Add image -->

:::info
*Points* are stored in a [GPX-file](../../technical/osmand-file-formats/osmand-gpx.md) (a commonly used format for tracks) as [Waypoints](../map/point-layers-on-map.md#track-waypoints).  
:::

#### Points as a track on the map

After you have added *Points* from *Travel guide article* to the map, you can work with them as with a *[Track](../personal/tracks.md)*. In [Track Context menu](../map/track-context-menu.md) of a GPX-file, you can find general info from article to which this track belongs:

![Travel guides points overview menu](@site/static/img/guides/travel_guides_points_overview_android.png)

<!-- 
Add image -->
- &nbsp;In *[Overview](../map/track-context-menu.md#overview)*, you can read short description or open [Travel guide article](../plan-route/travel-guides.md#travel-guide-article) by tap *Read full* button. *Edit* allows you to correct article.
- &nbsp;In ["Track"](../map/track-context-menu.md#altitude--speed-graphs) there is not any info (Travel guides: GPX-tracks with [waypoints](../map/point-layers-on-map.md#track-points) only).
- &nbsp;In ["Points"](../map/track-context-menu.md#points--waypoints), you see folders with points by named [Contents (Buy, Do, Drink...)](../plan-route/travel-guides.md#travel-guide-article). Each category of Contents has own color and icon.

Here you find short description of points (places), number of points on each folder.

You can make any [actions with points](../map/track-context-menu.md#points--waypoints).

![Travel guides track points  menu](@site/static/img/guides/travel_guides_track_points_android.png)

Clicking to chosen point opens this point on the map with and [Map Context menu](../map/map-context-menu.md).

![Travel guides map context menu  menu](@site/static/img/guides/travel_guides_context_menu_android.png)

- &nbsp;In ["Options"](../map/track-context-menu.md#options), you can make any actions with your Travel guide file (GPX-track).



[<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu.md) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces.md) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks.md) → <Translate android="true" ids="icon_group_travel"/> after [downloading](../plan-route/travel-guides.md#download) it. Travel guides: GPX-tracks with [waypoints](../map/point-layers-on-map.md#track-points) only.

![Travel guides folder General](@site/static/img/guides/travel_guides_folder_android.png)


### Bookmarks

<!--
Add image
-->

## Combine with Wikipedia

In *Travel guides articles* you can find useful information about tourist attraction (contact information, web links, prices, etc.). Many articles have button *Wikipedia*, that allows to open *[Wikipedia article](../plugins/wikipedia.md)* (online or offline) about place of interest.

![Travel guides article description full menu](@site/static/img/guides/travel_guides_article_description_full_android.png) ![Travel guides article description full menu](@site/static/img/guides/travel_guides_article_description_full1_android.png) 

In some cases (for example, in bookmarks tab) OsmAnd will suggest to download Wikipedia map layer, so you can read related articles offline.

<!--
Add image
-->

:::info NOTE
Please note, that the Wikipedia plugin is a paid feature of the OsmAnd app.
:::

## Custom Travel guide

We recommend to add new articles or edit them on [Wikivoyage](https://en.wikivoyage.org/). About every 6 months we update Travel guides and you can download new articles. You can also create your own *Travel book*. How to make it is described in tecnical documentation (see *[Create custom Travel guide](../../technical/map-creation/create_travel_guide.md)* article).
