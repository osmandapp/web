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

OsmAnd provides several ways to get to the Search tool where the **Categories search** section is located.

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#how-to-use), where you can find the *Categories* tab.
- Go to the main *Menu → Search → Categories tab*.
- When preparing to start a route, tap *Navigation → Set destination → Search field*.  
- Go to the main Android *Menu → Configure map → Show POI overlay... → Search*. 


## How to use

Point of Interest (POI) Search:

- Allows users to search for nearby or specific categories of points of interest (POI) such as restaurants, hotels, gas stations, points of interest, and other.
- Filters and sorting results by category, distance or rating are possible.
- Search results show the location of the POI, its contact information, ratings and reviews.

All POI types in OsmAnd: [gitHub link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).   

To search for POIs by categories directly on the map, you need to select the required categories from the [list](../map/point-layers-on-map.md#points-of-interest-poi) in *Configure map → Show POI overlay...* and search by icons in the expected location.  

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


### Search query list

1. The order of the elements in the list:
- **Alphabet order**. The list of categories in the main tab of the search tool, as well as the list of categories of amenities in the сustom search and their inner values, are arranged in alphabetical order.
- **Distance**. Elements in the internal list of the Category tab are arranged in order of distance from the given location.
- **By importance**. Filter types are ordered from the most important or most used for a given category of POI.


## Categories POI search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/poi_search_ios.png)

</TabItem>

</Tabs>

<!--
The **Search by POI Categories** tool in the OpenStreetMap-based navigation application provides the user with the ability to quickly find locations of interest and objects classified into different categories. Each POI category has a unique set of characteristics, and this tool has filters that allow the user to refine the search results by selecting different values for additional characteristics.

How it works:
- Category Selection. You selects a POI category of interest, such as restaurants, hotels, stores, etc., from the provided list of categories.
- Characteristic Filters. After selecting a POI category, the application shows additional characteristics that can be used to refine the search. For example, for the Restaurants category, the user can select filters such as cuisine type (Italian, Chinese, etc.), price range, rating, and parking availability.
- Applying Filters. You selects the required values in the filters, then the application applies these filters to the search results to show only those properties that match the specified characteristics.
- Displaying results. After applying filters, the application displays a list of POIs matching the category and characteristics set. The results are presented as a list with some information about each POI.

Benefits:
- User Customization: Feature filters allow users to customize searches to meet their specific needs and preferences.
- Refined results: Filters help refine search results, making them more relevant and accurate.
- Multiple Categories: The OpenStreetMap database has an extensive set of POI categories, allowing users to find sites of different types and categories.

The "Search by POI Category" tool in the OpenStreetMap-based navigation application provides convenience and flexibility in finding locations of interest, providing users with accurate results and many options to customize their search.


______
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of POI.   
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


| Categories | Types | Note |
|:------------|:---------------|:---------------|
| 1. **<Translate android="true" ids="poi_filter_accomodation"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge (2 values) </li><li> Heating (7 values) </li><li> Internet access type (3 values) </li><li> Mattress (2 values) </li><li> Payment type (more than 10 values) </li><li> Shower (1 values) </li><li> Smoking (6 values) </li><li> Star rating (10 values) </li><li> Wheelchair accessibility (4 values) </li></ul></details> |  |  
| 2. **Cafe and restaurant** | <details><summary> 16 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Changing table (3 values) </li><li> Coffee (2 values) </li><li> Cuisine (more than 10 values) </li><li> Delivery (1 values) </li><li> Diet (8 values) </li><li> Dish (more than 10 values) </li><li> Drinking water refill (1 values) </li><li> Drive-in (1 values) </li><li> Internet access type (3 values) </li><li> Microbrewery (1 values) </li><li> Organic products (2 values) </li><li> Outdoor seating (1 values) </li><li> Payment type (more than 10 values) </li><li> Smoking (6 values) </li><li> Takeaway (1 values) </li><li> Wheelchair accessibility (4 values) </li></ul></details> |  | 
| 3. **Charging station** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Internet access type (3 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 4. **Convenience store and supermarket** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 5. **<Translate android="true" ids="poi_filter_emergency"/>** | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 6. Filling station | <details><summary> 15 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  | 
| 7. Finance | <details><summary> 6 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 8. Food | <details><summary> 24 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 9. Healthcare | <details><summary> 11 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |  |
| 10. Leisure | <details><summary> 16 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 11. Nautical | Filters are not available  | Includes various [administrative places](https://wiki.openstreetmap.org/wiki/Key:place). |
| 12. <Translate android="true" ids="poi_filter_closest_poi"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 13. <Translate android="true" ids="poi_filter_parking"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 14. Personal transport | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 15. <Translate android="true" ids="poi_filter_public_transport"/> | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 16. Routes | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 17. Sightseeing | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 18. Sport | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 19. Store | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 20. Tourism | <details><summary> 9 types of filters </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> Wheelchair accessibility(4 values) </li></ul></details> |  |
| 21. Water | Does not contain any filters. | Sources of [drinking water](https://wiki.openstreetmap.org/wiki/Key:drinking_water) created or arranged by man. |
| 22. Wikipedia | Does not contain any filters. | To search in this category, you need to download the [Wikipedia map](../plugins/wikipedia.md#overview) of the region you are interested in. |


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

Custom POI Search is an advanced search feature that allows you to find POIs from different categories and combine them for a more accurate and personalized search. Unlike the standard POI search, which is limited to some predefined categories, Custom POI search provides the flexibility to select and combine different types of POIs.  

For example, a user can simultaneously search for restaurants and pharmacies to find the nearest place to have lunch and then take medicine. Or search for the nearest gas station and car service when there is a problem with the car.  

This functionality is especially useful in various cases:  

- *Travel*. When traveling, using custom search you can quickly find different places of interest and combine them to create an optimal route.
- *Emergencies*. If you need to find several types of services quickly, you can use a custom POI search to get all the information you need.
- *Search for nearby services*. Custom Search allows you to combine different POI categories for easy search if you need to find several types of services in a certain neighborhood or on a certain section of the route.


### Custom POI filter

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png)   ![Custom search Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)

</TabItem>

</Tabs>

*Custom POI filter* includes sets of amenity categories consisting of relevant values. OsmAnd allows you to collect and combine the required POI types from one or more suggested categories.  

In order to create your own filters to find the places you are looking for on the map, you need to select all the categories and subcategories of interest, [save](#save-custom-filters), and then [edit](#edit-an-existing-filter) if necessary. You may not save the filtered data, but only view it by tapping the *Show* button. But then all your actions will be canceled when you switch to other searches or exit the search tool.  

- Each amenity category contains a list of available generic values for POI types. 
- You have the option to select or deselect them individually by tapping the field of the type you are interested in. 
- *Select all* - to do this, select the toggle button. 
- And refine the list by excluding unnecessary ones - start typing the suggested name in the *Search for POI types* field.  


| Amenity categories | Values for POI types | Description |
|:------------|:---------------|:---------------|
| 1. **<Translate android="true" ids="amenity_type_administrative"/>** | <details><summary> 25 types </summary> <ul><li> Allotments </li><li> Atoll </li><li> Borough </li><li> City </li><li> City block </li><li> Country </li><li> Courthouse </li><li> Customs </li><li> Diplomatic office </li><li> Farm </li><li> Government </li><li> Hamlet </li><li> Island </li><li> Islet </li><li> Isolated dwelling </li><li> Locality </li><li> Neighbourhood </li><li> Police </li><li> Prison </li><li> Quarter </li><li> Residential area </li><li> Suburb </li><li> Town </li><li> Town hall </li><li> Village </li></ul></details> | Includes various [administrative places](https://wiki.openstreetmap.org/wiki/Key:place). |   
| 2. **Сhristmas** | <details><summary> 5 types </summary> <ul><li> Christmas event </li><li> Christmas market </li><li> Christmas pyramid </li><li> Christmas shop </li><li> Christmas tree </li></ul></details> |  | 
| 3. **<Translate android="true" ids="amenity_type_education"/>** | <details><summary> 16 types </summary> <ul><li> Allotments </li><li> Atoll </li><li> Borough </li><li> City </li><li> City block </li><li> Country </li><li> Courthouse </li><li> Customs </li><li> Diplomatic office </li><li> Farm </li><li> Government </li><li> Hamlet </li><li> Island </li><li> Islet </li><li> Isolated dwelling </li><li> Locality </li><li> Neighbourhood </li><li> Police </li><li> Prison </li><li> Quarter </li><li> Residential area </li><li> Suburb </li><li> Town </li><li> Town hall </li><li> Village </li></ul></details> |  |
| 4. **<Translate android="true" ids="amenity_type_emergency"/>** | <details><summary> 14 types </summary> _ </details> |  |
| 5. **Emergency infrastructure** | <details><summary> 12 types </summary> _ </details> |  |
| 6. **<Translate android="true" ids="amenity_type_finance"/>** | <details><summary> 12 types </summary> _ </details> |  | 
| 7. **Food** | <details><summary> 12 types </summary> _ </details> |  |
| 8. **Hazard** | <details><summary> 5 types </summary> <ul><li> Avalanche hazard </li><li> Erosion hazard </li><li> Flood hazard </li><li> Nuclear hazard </li><li> Slippery road </li></ul></details> |  |
| 9. **<Translate android="true" ids="amenity_type_healthcare"/>** | <details><summary> 31 types </summary> _ </details> |  | 
| 10. **<Translate android="true" ids="amenity_type_leisure"/>** | <details><summary> 148 types </summary> _ </details> |  |
| 11.**<Translate android="true" ids="amenity_type_man_made"/>** | <details><summary> 121 types </summary> _ </details> |  |
| 12. **m<Translate android="true" ids="amenity_type_military"/>** | <details><summary> 7 types </summary> <ul><li> Danger area </li><li> Military bunker </li><li> Military naval base </li><li> Military office </li><li> Military range </li><li> Military zone </li><li> Nuclear explosion site </li></ul></details> |  |
| 13. **<Translate android="true" ids="amenity_type_natural"/>** | <details><summary> 50 types </summary> _ </details> |  |
| 14. **Nautical** | <details><summary> 41 types </summary> _ </details> |  |
| 15. **<Translate android="true" ids="amenity_type_office"/>** | <details><summary> 39 types </summary> _ </details> |  |
| 16. **Routes** | <details><summary> 4 types </summary><ul><li> Route Article </li><li> Route Article Point </li><li> Route track </li><li> Route Track Point </li></ul></details> |  |
| 17. **Service** | <details><summary> 111 types </summary> _ </details> |  |
| 18. **<Translate android="true" ids="amenity_type_sport"/>** | <details><summary> 119 types </summary> _ </details> |  |
| 19. **Store** | <details><summary> 156 types </summary> _ </details> |  |
| 20. **<Translate android="true" ids="amenity_type_tourism"/>** | <details><summary> 103 types </summary><ul><li> [Alpine hut](https://wiki.openstreetmap.org/wiki/Tag:tourism%3Dalpine_hut) </li><li> Amusement ride </li><li> Animal (attraction) </li><li> Beach </li><li> Camp pitch </li><li> Castle </li><li> Guest house </li><li> Hostel </li><li> Memorial </li><li> Park </li><li> And other... </li></ul></details> | [Tourism](https://wiki.openstreetmap.org/wiki/Key:tourism). Places and objects of special interest to tourists, including places to see, places to stay, facilities and places providing information and support to tourists. |
| 21. **<Translate android="true" ids="amenity_type_transportation"/>** | <details><summary> 97 types </summary> <ul><li> Open now / Open 24/7 </li><li> Fridge(2 values) </li><li> Heating(7 values) </li><li> Internet access type(3 values) </li><li> Mattress(2 values) </li><li> Payment type(more than 10 values) </li><li> Shower(1 values) </li><li> Smoking(6 values) </li><li> Star rating(10 values) </li><li> And other... </li></ul> </details> | Points of interest related to different modes of transportation and related services. View the list [here](https://wiki.openstreetmap.org/wiki/Key:amenity#Transportation). |
| 22. **User defined** | <details><summary> 1 types </summary> User Defined Other Postcode </details> |  |
| 23. **Wikipedia** | <details><summary> 1 types </summary> Wikipedia </details> | You need to download the [Wikipedia map](../plugins/wikipedia.md#overview) of the region you are interested in. |


#### Save custom filters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom POI save Android](@site/static/img/search/custom_poi_save_android.png) ![Custom POI save Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI save iOS](@site/static/img/search/custom_poi_save_ios.png)

</TabItem>

</Tabs>
 
To save a custom filter, select everything you need, then:  

- Tap the *Show* button and select the *Save* button for iOS, or the button with the *icon indicating the save action* for Android. 
- Enter a name for the new category.
- Your filter will appear in the *Categories tab* list in the Search tool.  


### Edit an existing filter

From the main screen:
1. Tap on the agnifying glass to open the Search screen
2. Select the Categories tab
3. Choose the custom category : screen with search results will open
4. Tap on filter icon and then on Filter screen
5. Tap on the 3-dot icon
6. In the drop-down menu, select "Edit categories"


### Delete Custom POI filter

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_2_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_ios.png)

</TabItem>

</Tabs>

You can only delete categories that were created using filters or custom search.

- Go to the [Categories tab](#categories-poi-search) and select the required one.
- In the field next to *Show on Map*, tap the icon representing the *filter*.
- In the Filters menu, tap the *three dots* &#8285; located in the upper right corner of the screen.
- Select **Delete Filter**.
- You cannot undo the deletion. 

An additional option for the iOS app is **Delete Custom Categories**. The item is at the end of the *Categories* tab list. Select the unneeded categories by item or *Select all* and delete.  

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_ios.png)  

