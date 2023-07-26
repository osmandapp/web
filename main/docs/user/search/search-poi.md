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

OsmAnd Point of Interest (POI) search allows you to quickly and conveniently find places of interest such as restaurants, hotels, gas stations, and other objects near your current location or a selected area on the map.  

The search bar allows you to enter keywords related to the places you are interested in. The POI search also presents a convenient list sorted by category to help you quickly find what you are looking for, and the filter allows you to select certain POI characteristics to display only relevant results.  

Custom Search complements the functionality by providing the ability to select categories and subcategories of POIs and save the filters created for later use. This makes it easier to find POIs that match specific needs and preferences.  

The overall functionality of POI search provides accuracy, visibility and convenience in finding places of interest and services nearby. It allows you to plan trips, find nearby facilities and get additional information about them such as ratings, reviews and contact details.   

<!--
Point of interesting (POI) seaching is one the general function of OsmAnd. [POI](https://wiki.openstreetmap.org/wiki/Points_of_interest) is any object on the map. How you know OsmAnd uses data from [OpenStreetMap](http://openstreetmap.org/).

**Please note:** to accomplish some of these tasks (locate addresses, POI, etc.) you will need to have the offline vector map file. Initially, the search is based on data located on the map in the visible area of the device screen. If you don't find nothing, OsmAnd propose to increase search radius.
-->

OsmAnd provides several ways to get to the *Search tool → [Address search tab](../search/search-address.md)* where the **Coordinates search** is located.

- The [Search button](../widgets/map-buttons.md#search) on the map application screen.
- Go to the main Android *Menu → Search → Address tab → Coordinates Search*.
- When preparing to start a route, tap *Navigation → Set destination → Search field → Address tab → Coordinates Search*.  
- *Configure map → Show poi overlay → Search* 


## How to use

<!--
Point of Interest (POI) Search:

- Allows users to search for nearby or specific categories of points of interest (POI) such as restaurants, hotels, gas stations, points of interest, etc.
- Filters and sorting results by category, distance or rating are possible.
- Search results show the location of the POI, its contact information, ratings and reviews.
-->
All POI types in OsmAnd:  
[gitHub link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml)  

### Search query list


## Categories POI search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/poi_search_ios.png)

</TabItem>

</Tabs>

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

<!--
Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of POI.

Tapping to "<Translate android="true" ids="shared_string_show_on_map"/>" button allows [to show search results on the map like POI-overlay](../map/point-layers-on-map.md#points-of-interest-poi). It will be easy to find your places on the map, you can write search word on searching field or click to "x" for stopping your search and switch off POI-overlay. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*  

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

-->

### Filters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

</Tabs>

You can use the **Filter** function to select the necessary characteristics for a POI, and the result is a list containing only the relevant objects. To use the filter:  
- Select the category you are interested in from the category list.
- On the screen that opens, tap the icon that displays the filter. It is located below the input field, next to "Show on the map".
- In the filter, select the type of characteristics.   

![Search POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

A filter can consist of quite a number of items, the presence of which depends on the selected category. Each category has a number of filters specific to it, organized in folders by type. There are a total of 21 default categories. Some of them are listed here:    

<!--

| Categories | Types | Note |
|:------------|:---------------|:---------------|
| 1. **<Translate android="true" ids="poi_filter_accomodation"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge (2 values) </li><li> Heating (7 values) </li><li> Internet access type (3 values) </li><li> Mattress (2 values) </li><li> Payment type (more than 10 values) </li><li> Shower (1 values) </li><li> Smoking (6 values) </li><li> Star rating (10 values) </li><li> Wheelchair accessibility (4 values) </li></ul></details> |  |  
| 2. **Cafe and restaurant** | <details><summary> 16 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Changing table (3 values) </li><li> Coffee (2 values) </li><li> Cuisine (more than 10 values) </li><li> Delivery (1 values) </li><li> Diet (8 values) </li><li> Dish (more than 10 values) </li><li> Drinking water refill (1 values) </li><li> Drive-in (1 values) </li><li> Internet access type (3 values) </li><li> Microbrewery (1 values) </li><li> Organic products (2 values) </li><li> Outdoor seating (1 values) </li><li> Payment type (more than 10 values) </li><li> Smoking (6 values) </li><li> Takeaway (1 values) </li><li> Wheelchair accessibility (4 values) </li></ul></details> |  | 
| 3. **Charging station** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Internet access type (3 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 4. **Convenience store and supermarket** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 5. **<Translate android="true" ids="poi_filter_emergency"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 6. Filling station | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  | 
| 7. Finance | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 8. Food | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 9. Healthcare | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |  |
| 10. Leisure | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 11. Nautical | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 12. <Translate android="true" ids="poi_filter_closest_poi"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 13. <Translate android="true" ids="poi_filter_parking"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 14. Personal transport | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 15. <Translate android="true" ids="poi_filter_public_transport"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 16. Routes | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 17. Sightseeing | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 18. Sport | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 19. Store | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 20. Tourism | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 21. Water | Does not contain any filters. |  |
| 22. Wikipedia | Does not contain any filters. | To search in this category, you need to download the Wikipedia map of the region you are interested in. |

-->

### Rearrange categories

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

</Tabs>

The Rearrange Categories feature allows you to list only the categories you need and arrange them in the order you are most comfortable using them.   

Description and how to use:
- Initially, the list is sorted alphabetically. Created categories are also added in alphabetical order.
- Changes in the list of categories are made for each profile separately.
- Move categories by dragging and dropping them to the right position in the list.
- To hide unnecessary categories, tap the *minus* icon. 
- Available, previously Hidden categories can be returned to the displayed list by tapping the *plus* icon.
- Use the Reset to default button to return the list to the preset state.
- Categories created with [Custom Search](#custom-poi-search) or [Filters](#filters) can be deleted using the Delete icon.  

![Search POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Online Search

![Search POI Android](@site/static/img/search/search_poi_online_andr.png)  

**Online Search** allows finding locations,, addresses and points of interest in real-time. OsmAnd uses [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), an online geocoder developed by OpenStreetMap that translates users' text queries into geographic coordinates and back.  

Online Search includes the following features:  
1. **Search by location**. You can enter the name of a city, street, neighbourhood, or other location and OsmAnd will provide results matching the query.
2. **Geocoding**. Online search converts your text queries into geographic coordinates, allowing precise location.
3. **Reverse geocoding**. You can enter geographic coordinates and Search will return the corresponding location as a city name, street name, or place on the map.
4. **Search by Points of Interest**. Allows you to search for different points by name or category.

Use of Online Search:
- Online search ensures that data is up-to-date and updates are available, as the service is constantly updated and uses open data sources.
- It provides a wide coverage of places and objects, allowing the user to find places of interest in different regions of the world.
- Online searches are real-time, providing quick access to search results.
- Useful in cities and on highways with good Internet coverage.
- Online search is convenient to use if there are no maps of the region and if it is impossible to download them.
- *Requires a constant and stable Internet connection.*  

![Search POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)  

To improve results, before using the Search tool, zoom in on the map to get closer to where you need to find a specific location. And while searching, you can **increase the search radius** to find places that are farther away from your location. When searching offline, if the required results are not available, OsmAnd suggests using the online search.  

You can find out information about Online Navigation in [Online routing](../navigation/routing/online-routing.md) article.


## Custom POI search

### Custom POI filter

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)

</TabItem>

</Tabs>

OsmAnd allows you to create your Custom POI filters where you can collect needed POI from one/other categories.

Combine POI types from different categories. Tap switch to select all, tap left side to category selection. 

Below screen there is info panel about number of selected categories. Below selected category name you find names/number of selected POI types.

<!--
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
-->

### Edit an existing filter

<!--
From the main screen:
1. Tap on the agnifying glass to open the Search screen
2. Select the Categories tab
3. Choose the custom category : screen with search results will open
4. Tap on filter icon and then on Filter screen
5. Tap on the 3-dot icon
6. In the drop-down menu, select "Edit categories"
-->

### Delete Custom POI filter

<!--
**iOS**: button "<Translate ios="true" ids="delete_custom_categories"/>" in [Actions buttons](../search/search-poi#how-to-use)

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_ios.png)

**Android**: you need to tap on Custom POI filter in the Categories list -> click to Filter button -> click to &#8285; -> Delete filter

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_android.png) ![Custom POI delete Android](@site/static/img/search/custom_poi_delete_1_android.png)

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_2_android.png)  



| Amenity categories | Values for POI types | Description |
|:------------|:---------------|:---------------|
| 1. **<Translate android="true" ids="amenity_type_administrative"/>** | <details><summary> 25 types </summary> <ul><li> Allotments </li><li> Fridge (2 values) </li><li> Heating (7 values) </li><li> Internet access type (3 values) </li><li> Mattress (2 values) </li><li> Payment type (more than 10 values) </li><li> Shower (1 values) </li><li> Smoking (6 values) </li><li> Star rating (10 values) </li><li> Wheelchair accessibility (4 values) </li></ul></details> |  |   
| 2. **<Translate android="true" ids="christmas_poi"/>** | <ul><li> 5 types </li><li> Christmas event </li><li> Christmas market </li><li> Christmas pyramid </li><li> Christmas shop </li><li> Christmas tree </li></ul> |  | 
| 3. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 16 types </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Internet access type (3 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 4. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 5. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 6. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  | 
| 7. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 8. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 9. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |  |
| 10. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 11.**<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 12. <Translate android="true" ids="poi_filter_closest_poi"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 13. <Translate android="true" ids="poi_filter_parking"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 14. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 15. <Translate android="true" ids="poi_filter_public_transport"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 16. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 17. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 18. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 19. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 20. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 21. **<Translate android="true" ids="amenity_type_education"/>** | Does not contain any filters. |  |
| 22. **<Translate android="true" ids="amenity_type_education"/>** | Does not contain any filters. | To search in this category, you need to download the Wikipedia map of the region you are interested in. |
| 23. **<Translate android="true" ids="amenity_type_education"/>** | Does not contain any filters. | To search in this category, you need to download the Wikipedia map of the region you are interested in. |

Each amenity category contains a list of available generic values for POI types. You have the option to select or deselect them individually by tapping the field of the type you are interested in. *Select all* - to do this, select the toggle button.  And refine the list by excluding unnecessary ones - start typing the suggested name in the *Search for POI types* field.

-->