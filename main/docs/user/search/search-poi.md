---
sidebar_position: 4
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

## Overview 

*OsmAnd Categories Search*  

Point of interesting (POI) seaching is one the general function of OsmAnd. [POI](https://wiki.openstreetmap.org/wiki/Points_of_interest) is any object on the map. How you know OsmAnd uses data from [OpenStreetMap](http://openstreetmap.org/).

**Please note:** to accomplish some of these tasks (locate addresses, POI, etc.) you will need to have the offline vector map file. Initially, the search is based on data located on the map in the visible area of the device screen. If you don't find nothing, OsmAnd propose to increase search radius.


## How to use

All POI types in OsmAnd:  
[gitHub link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml)  

### Search query list


## Categories POI search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/poi_search_ios.png)

</TabItem>

</Tabs>

In Categories menu user can start searching by typping line.

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info (full name, categorie name, direction and distance to POI, work time). Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of POI.

Tapping to "<Translate android="true" ids="shared_string_show_on_map"/>" button allows [to show search results on the map like POI-overlay](../map/point-layers-on-map.md#points-of-interest-poi). It will be easy to find your places on the map, you can write search word on searching field or click to "x" for stopping your search and switch off POI-overlay. 

Enable / disable POI layer on the map:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI overlay Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*  

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>


### Filters

### Rearrange categories

### Online Search


## Custom POI search

### Custom POI filter

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Search button on the screen](../widgets/map-buttons.md#search) -> <Translate android="true" ids="search_categories"/> -> <Translate android="true" ids="custom_search"/>

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

[Search button on the screen](../widgets/map-buttons.md#search) -> <Translate android="true" ids="search_categories"/> -> <Translate ios="true" ids="add_custom_category"/>

![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)

</TabItem>

</Tabs>

OsmAnd allows you to create your Custom POI filters where you can collect needed POI from one/other categories.

Combine POI types from different categories. Tap switch to select all, tap left side to category selection. 

Below screen there is info panel about number of selected categories. Below selected category name you find names/number of selected POI types.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_second_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)

</TabItem>

</Tabs>


SAVE it:
 
**iOS**: Save button - enter name

![Custom POI save iOS](@site/static/img/search/custom_poi_save_ios.png)


**Android**: can add filter , next blue "SAVE" button below of the screen -> enter name

![Custom POI save Android](@site/static/img/search/custom_poi_save_android.png) ![Custom POI save Android](@site/static/img/search/custom_poi_save_1_android.png)


### Edit an existing filter

From the main screen:
1. Tap on the agnifying glass to open the Search screen
2. Select the Categories tab
3. Choose the custom category : screen with search results will open
4. Tap on filter icon and then on Filter screen
5. Tap on the 3-dot icon
6. In the drop-down menu, select "Edit categories"


### Delete Custom POI filter

**iOS**: button "<Translate ios="true" ids="delete_custom_categories"/>" in [Actions buttons](../search/search-poi#how-to-use)

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_ios.png)

**Android**: you need to tap on Custom POI filter in the Categories list -> click to Filter button -> click to &#8285; -> Delete filter

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_android.png) ![Custom POI delete Android](@site/static/img/search/custom_poi_delete_1_android.png)

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_2_android.png)

