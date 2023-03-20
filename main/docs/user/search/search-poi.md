---
sidebar_position: 2
title:  Search POI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>

Point of interesting (POI) seaching is one the general function of OsmAnd. [POI](https://wiki.openstreetmap.org/wiki/Points_of_interest) is any object on the map. How you know OsmAnd uses data from [OpenStreetMap](http://openstreetmap.org/).

**Please note:** to accomplish some of these tasks (locate addresses, POI, etc.) you will need to have the offline vector map file. Initially, the search is based on data located on the map in the visible area of the device screen. If you don't find nothing, OsmAnd propose to increase search radius.

## How to use

For starting search points you need to click to [Search button on the screen](../widgets/map-buttons.md#search) -> <Translate android="true" ids="search_categories"/>

Categories screen is list of POI categories and additional actions buttons below of the list:

![Search POI list Android](@site/static/img/search/poi_list_android.png) ![Search POI list iOS](@site/static/img/search/poi_list_ios.png)

Actions button:

- &nbsp;<Translate android="true" ids="search_online_address"/> (Android) - allows to use [online POI search](../search/search-poi.md#online-search-android).
- &nbsp;<Translate android="true" ids="custom_search"/> / <Translate ios="true" ids="add_custom_category"/> - allow to create [custom POI search and custom POI filter](../search/custom-poi-search.md).
- &nbsp;<Translate android="true" ids="rearrange_categories"/> - allows to change the list order and hide categories. [Import or export all changes as profiles](../personal/import-export.md).
- &nbsp;<Translate ios="true" ids="delete_custom_categories"/> - allows to delete [custom categories](../search/custom-poi-search.md).


### POI search

In Categories menu user can start searching by typping line.

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info (full name, categorie name, direction and distance to POI, work time). Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of POI.

![Search POI Android](@site/static/img/search/poi_search_android.png) ![Search POI iOS](@site/static/img/search/poi_search_ios.png)

Tapping to "<Translate android="true" ids="shared_string_show_on_map"/>" button allows [to show search results on the map like POI-overlay](../map/point-layers-on-map.md#points-of-interest-poi). It will be easy to find your places on the map, you can write search word on searching field or click to "x" for stopping your search and switch off POI-overlay. 

Enable / disable POI layer on the map:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>

<p> </p>

![POI overlay Android](@site/static/img/search/poi_overlay_android.png) ![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)


### Favorite/Waypoint search

In this search menu (Categories) it's easy way to find your [Favorites](../map/point-layers-on-map.md#favorites) and [Waypoints](../map/point-layers-on-map.md#track-points) by searching. 

Just you need to enter your favorite/waypoint name, first results will be your favorites/waypoints.

![Favorite search Android](@site/static/img/search/favorite_search_android.png) ![Favorite search iOS](@site/static/img/search/favorite_search_ios.png)

### Online search (Android)

In [Categories menu](../search/search-poi.md#how-to-use) there is the button "Online search". Pressing to this button opens online search menu.

![Online search Android](@site/static/img/search/online_search_android.png)

If OsmAnd can not find something you can increase search radius by tapping to "Increase search radius" button.

Or if you don't have any result you can provide feedback by clicking to "Send" button below device screen.

![Online search feedback Android](@site/static/img/search/online_search_feedback_android.png)