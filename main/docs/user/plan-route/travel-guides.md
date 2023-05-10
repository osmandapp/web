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

Travel guides help you in your trips, you can see interesting places on the map and read info about it.

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

## Travel Guides data

The guides are based on [Wikivoyage](https://www.wikivoyage.org/), a community project similar to Wikipedia, where volunteer writers create articles with real and up-to-date information. Such information includes the main facts about a place, transport, landmarks, shopping spots, etc. Going to London, Shanghai or planning a visit to the Grand Canyon? Your guide is there to help you.

Wikivoyage data has GPX format in OsmAnd and keep in [<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu.md) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces.md) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks.md) → <Translate android="true" ids="icon_group_travel"/> after [downloading](../plan-route/travel-guides.md#download) it. Travel guides: GPX-tracks with [waypoints](../map/point-layers-on-map.md#track-points) only.

![Travel guides folder General](@site/static/img/guides/travel_guides_folder_android.png)

GPX-files (Travel guides) have info about points number of Travel guide file. 

About actions of this GPX-files (Travel guides) read [here](../personal/tracks.md#my-places-android).

Orange color - visible on the map. Or <Translate android="true" ids="shared_string_visible"/> folder.

## How to use

To start using the feature, please go to:

<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_travel_guides"/>
 
Make sure [to download the travel guide file](../plan-route/travel-guides.md#download) to be able to use the feature.
  
Now all your guides are saved on device and you can look up any information, even if you're abroad or out of a mobile network area.

As soon as the file is downloaded, you can start using the guides. Just go to [Travel guides list](../plan-route/travel-guides.md#search-field-and-travel-guides-list): <Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_travel_guides"/>, and enter the name of the city into [the search field](../plan-route/travel-guides.md#search-field-and-travel-guides-list). 

**Note:** 

As soon as you open the article, you'll see the information conveniently arranged by topic. The information often includes topics like 'Understand' with the details about local culture and habits, 'Talk', 'Get in', 'Get Around', 'See' that covers main places of interest, 'Buy' with the recommended shopping spots, 'Sleep', 'Drink', and 'Go next' suggesting the locations you may be interested in after visiting the current one. You can also press 'Bookmark' to have a quick access to this article later. All such articles will be saved in your 'Bookmarked articles' list.

The articles are sharable. Just press Share button in the upper-right corner and send it to your friend. That person will be able to open your link in OsmAnd directly if they have the app on their device.

### Download 

<Translate android="true" ids="shared_string_menu,welmode_download_maps,shared_string_travel_guides"/>

<p> </p>

![Travel guides download menu](@site/static/img/guides/travel_guides_download_android.png)

**Note:** Wikivoyage is divided by regions - Africa, Asia, Australia and Oceania, Central America, Europe, North America, Russia, South America.

### Search field and travel guides list

In <Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_travel_guides"/> there are two general part: the search field and travel guides list (<Translate android="true" ids="popular_destinations"/>).

![Travel guides menu](@site/static/img/guides/travel_guides_menu_android.png)

In the top of <Translate android="true" ids="shared_string_travel_guides"/> menu there is the search field. You fill it by needed city name:

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

In Result field:
- &nbsp;Travel guides with info about article languages.

Clicking to chosen Travel guide name opens [Travel guide article menu](../plan-route/travel-guides.md#travel-guide-article).

**Note:** for deleting search history you need to use [<Translate android="true" ids="shared_string_options"/> button](../plan-route/travel-guides.md#options)

Below the seacrh field there is Travel guides list - <Translate android="true" ids="popular_destinations"/>. It shows the first 30 nearest travel guides article on the area of your screen device (not location) or <Translate android="true" ids="saved_articles"/>. For open <Translate android="true" ids="saved_articles"/> or <Translate android="true" ids="popular_destinations"/> you need to use <Translate android="true" ids="shared_string_explore"/> and <Translate android="true" ids="saved_articles"/> buttons below.

![Travel guides explore menu](@site/static/img/guides/travel_guides_explore_android.png) ![Travel guides bookmarked](@site/static/img/guides/travel_guides_bookmarked_android.png)

Article buttons:
- &nbsp;<Translate android="true" ids="shared_string_read"/> - opens [Travel guide article](../plan-route/travel-guides.md#travel-guide-article).
- &nbsp;<Translate android="true" ids="shared_string_bookmark"/> - moves chosen article to <Translate android="true" ids="saved_articles"/>.
- &nbsp;<Translate android="true" ids="shared_string_bookmark"/> - removes chosen article from <Translate android="true" ids="saved_articles"/>.

### Options

You can also choose if you'd like to download the images or not, clear image cache or delete the search history. To do that, please press the <Translate android="true" ids="shared_string_options"/> button in the upper-right corner of the screen.

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png) 

- &nbsp;<Translate android="true" ids="wikivoyage_download_pics"/> - article images can be downloaded for offline use. 
- &nbsp;<Translate android="true" ids="images_cache"/> - allows to clear image cache.
- &nbsp;<Translate android="true" ids="delete_search_history"/> - allows to clear [search history](../plan-route/travel-guides.md#search-field-and-travel-guides-list).

### Travel guide article

Clicking to <Translate android="true" ids="shared_string_read"/> button in [travel guides list](../plan-route/travel-guides.md#search-field-and-travel-guides-list) or <Translate android="true" ids="context_menu_read_full"/> button in [Description menu](../map/track-context-menu.md#description) opens Travel guide article.

![Travel guides article menu](@site/static/img/guides/travel_guides_article_android.png) 

The articles are available in different languages. By default, the language you're using in OsmAnd will be also picked for Travel guides. But if you'd like, you can view your article in a different one. To do that, press the translation button next to the name of the article, you can choose available languages for this article:

![Travel guides article translation menu](@site/static/img/guides/travel_guides_article_translation_android.png) 

Each article in [Wikivoyage](https://en.wikipedia.org/wiki/Wikivoyage) has the same structure of content, where there are introduction part (images and description of turist object) and next chapters:
- &nbsp;"Understand" - full description.
- &nbsp;"Get in" - how to get in to this area, place and etc and how much to cost this route.
- &nbsp;"See" - list of seesight places (museums, historical places...) with full description: how much to cost tickets, when to open, links to website, phones.
- &nbsp;"Do" - descrption any places for pastime.
- &nbsp;"Buy" - descrption any places for shoping.
- &nbsp;"Eat" - descrption any places for eating (divided by budget: budget, mid-range, splurge).
- &nbsp;"Drink" - descrption any bars and cafes.
- &nbsp;"Sleep" - descrption any hotels (divided by budget: budget, mid-range, splurge). 
- &nbsp;"Go next" - proposal the next nearest places from Wikivoyage.

For opening a chapter you need to use "&#8744;" button.

In Wikivoyage articles there are info about prices, contacts info, web links and etc. Almost each part has next buttons: button "Wikipedia" allows to open [Wikipedia POI (online or offline)](../plugins/wikipedia.md), button "Open on map" allows to show [the Point of the object on the map](../plan-route/travel-guides.md#points).

![Travel guides article description full menu](@site/static/img/guides/travel_guides_article_description_full_android.png) ![Travel guides article description full menu](@site/static/img/guides/travel_guides_article_description_full1_android.png) 

Below the screen next buttons:
- &nbsp;"Contents" - allows to opens Contents menu of an Wikivoyage article. Clicking to a name content moves to chosen an article part.

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

- &nbsp;"Points" - allows to add on the map article [Points](../plan-route/travel-guides.md#points) and to open [Track Context menu](../map/track-context-menu.md) of chosen article.

![Travel guides points menu](@site/static/img/guides/travel_guides_points_android.png)

### Points


Articles often contain points grouped by topic. They are available in the 'Points' menu at the bottom of the article. You'll see food locations, airports, railway stations, places to shop, main historical attractions, accommodation options, etc.

![Travel guides points on the map  menu](@site/static/img/guides/travel_guides_track_points_map_android.png)

Wikivoyage guide file is [GPX-file with waypoints](../map/point-layers-on-map.md#track-points). Waypoints are Points (places) from Wikivoyage article on the map. 

When you click to "Points" button on the [Travel guide article](../plan-route/travel-guides.md#travel-guide-article) or you show your [GPX-file of Wikivoyage on the map](../personal/tracks.md#my-places-android).

When you open [Track Context menu](../map/track-context-menu.md) of GPX-file (Travel guide article), you find next general info of Travel guide article:
- &nbsp;In ["Overview"](../map/track-context-menu.md#overview), you can read short description or open [Travel guide article](../plan-route/travel-guides.md#travel-guide-article) by clicking "Read full" button. Button "Edit"allows you to correct article.

![Travel guides points overview menu](@site/static/img/guides/travel_guides_points_overview_android.png)

- &nbsp;In ["Track"](../map/track-context-menu.md#altitude--speed-graphs) there is not any info (Travel guides: GPX-tracks with [waypoints](../map/point-layers-on-map.md#track-points) only).

- &nbsp;In ["Points"](../map/track-context-menu.md#points--waypoints), you see folders with points by named [Contents (Buy, Do, Drink...)](../plan-route/travel-guides.md#travel-guide-article). Each category of Contents has own color and icon.

Here you find short description of points (places), number of points on each folder.

You can make any [actions with points](../map/track-context-menu.md#points--waypoints).

![Travel guides track points  menu](@site/static/img/guides/travel_guides_track_points_android.png)

Clicking to chosen point opens this point on the map with and [Map Context menu](../map/map-context-menu.md).

![Travel guides map context menu  menu](@site/static/img/guides/travel_guides_context_menu_android.png)

- &nbsp;In ["Options"](../map/track-context-menu.md#options), you can make any actions with your Travel guide file (GPX-track).


## Other guides

Besides the city guides, you can read about regions or countries, and even scroll through special guides like the list of UNESCO Global Geoparks Network or even a phrasebook of a country you're visiting. To see more exciting articles, please see the 'Explore' tab of the travel guides menu.

## Building Travel book 





## Useful links

[Wikipedia plugin](../plugins/wikipedia.md)
