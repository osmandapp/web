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

The POI (Points of Interest) search in the navigation application allows users to find interesting places and objects around them or in a selected area. These include:

1. What: The POI search provides access to different categories of places such as restaurants, hotels, banks, pharmacies, gas stations, points of interest, etc.

2. Why: Users can use POI Finder to find landmarks in a new city, navigate unfamiliar terrain, find convenient services, or plan routes with stops at desired locations.

3. How: The POI Search function contains a search bar where the user can enter keywords or place names. The results are displayed as a list sorted by category, making it easy to navigate through them.

4. Convenience: The filtering function allows users to select desired characteristics for POIs so that only relevant items such as rating, distance from current location, hours of operation and other attributes are displayed in the list.

5. Custom Search: Users can create their own search filters by selecting POI types from various ready-made categories and subcategories and saving them for future use.

POI Search makes it easy to find places and services of interest by providing a convenient way to locate and display information about POIs in a selected area. This feature makes the navigation application a useful tool for traveling, city navigation and quick access to necessary services and facilities.  

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI overlay Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

</Tabs>

You can use the **Filter** function to select the necessary characteristics for a POI, and the result is a list containing only the relevant objects. To use the filter:  
- Select the category you are interested in from the category list.
- On the screen that opens, tap the icon that displays the filter. It is located below the input field, next to "Show on the map".
- In the filter, select the type of characteristics.   

![POI overlay Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

A filter can consist of quite a number of items, the presence of which depends on the selected category. Each category has a number of filters specific to it, organized in folders by type. There are some of them here:  

| Filter | Types | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Allows you to use streams and drains for boat navigation. Enabling this option may be useful for small boats such as canoes, kayaks, rafts, rowboats. |  [Streams](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) are naturally-forming waterways that are too narrow to be called a river. [Drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) are artificial waterways, typically lined with concrete or similar, used to carry superfluous water like storm water or grey-discharge.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Turning this option on allows you to use intermittent waterways to navigate by boat.   | Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) is used to indicate that a waterway does not permanently contain water.  |



### Rearrange categories

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI overlay Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

</Tabs>

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

