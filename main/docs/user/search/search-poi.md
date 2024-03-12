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

[OsmAnd Point of Interest](../map/point-layers-on-map.md#points-of-interest-poi) (POI) functionality in OsmAnd provides accuracy, visibility, and convenience in finding interesting places and services near your current location or a selected area on the map.  

The search bar allows you to enter keywords related to the places you are interested in. The POI search also presents a convenient list sorted by [category](#categories-poi-search) to help you quickly find what you are looking for, and the [filter](#filters) allows you to select specific POI characteristics to display only relevant results.  

[Custom Search](#custom-poi-search) complements the functionality by providing the ability to select categories and subcategories of POIs and save the [filters](#save-new-custom-filters) created for later use. This makes it easier to find POIs that match specific needs and preferences.   

OsmAnd provides several ways to get to the Search tool where the **Categories search** section is located.

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#how-to-use), where you can find the *Categories* tab.
- Go to the main *Menu → Search → Categories tab* (Android version).
- When preparing to start a route, tap [*Navigation → Set destination → Search field → Categories tab*](../navigation/setup/route-navigation.md#set-target-point).  
- Go to the main Android [*Menu → Configure map → POI overlay → Search*](../map/point-layers-on-map.md#points-of-interest-poi). 


## How to use

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

Point of Interest (POI) Search:

- Allows users to search for nearby or specific categories of points of interest (POI) such as restaurants, hotels, gas stations, points of interest, and other.
- Filters and sorting results by category, distance or rating are possible.
- Search results show the location of the POI, its contact information, ratings and reviews.

All POI types in OsmAnd: [gitHub link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).   

To search for POIs by categories directly on the map, you need to select the required categories from the [list](../map/point-layers-on-map.md#points-of-interest-poi) in *Configure map → Show POI overlay...* and search by icons in the expected location.  

**Please note:** to accomplish some of these tasks (locate addresses, POI) you will need to have the offline vector map file. Initially, the search is based on data located on the map in the visible area of the device screen. If you don't find nothing, OsmAnd propose to increase search radius.  


### Search query list

The order of the elements in the list:
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


The **Search by POI Categories** tool provides you with the ability to quickly find locations of interest and objects classified into different categories. Each POI category has a unique set of characteristics, and this tool has filters that allow you to refine the search results by selecting different values for additional characteristics.

How it works:
- *Category Selection.* You selects a POI category of interest, such as restaurants, hotels, stores, etc., from the provided list of categories.
- *Characteristic Filters.* After selecting a POI category, the application shows additional characteristics that can be used to refine the search. For example, for the Restaurants category, the user can select filters such as cuisine type (Italian, Chinese, etc.), price range, rating, and parking availability.
- *Applying Filters.* You selects the required values in the filters, then the application applies these filters to the search results to show only those properties that match the specified characteristics.
- *Displaying results.* After applying filters, the application displays a list of POIs matching the category and characteristics set. The results are presented as a list with some information about each POI.

Benefits:
- User Customization. Feature filters allow users to customize searches to meet their specific needs and preferences.
- Refined results. Filters help refine search results, making them more relevant and accurate.
- Multiple Categories. The OpenStreetMap database has an extensive set of POI categories, allowing users to find sites of different types and categories.

<!--
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-short-tap) of POI.   
-->

### Types of Filters

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

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Accommodation](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) includes facilities that provide temporary lodging such as hotels, motels, hostels, guesthouses, and campgrounds. These places provide amenities and services for a comfortable stay while traveling.  
        Includes 9 types of filters: **Fridge** (has *2* values), **Heating** (has *7* values), **Internet access type** (has *3* values), **Mattress** (has *2* values), **Payment type** (more than *10* values), **Shower** (has *1* value), **Smoking** (has *6* values), **Star rating** (has *10* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.     

 2. **Cafe and restaurant**. [Cafe](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) and [restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) represent places of food service.  
        Includes 16 types of filters: **Changing table** (has *3* values), **Coffee** (has *2* values), **Cuisine** (more than *10* values), **Delivery** (has *1* value), **Diet** (has *8* values), **Dish** (more than *10* values), **Drinking water refill** (has *1* value), **Drive-in** (has *1* values), **Internet access type** (has *3* values), **Microbrewery** (has *1* value), **Organic products** (has *2* values), **Outdoor seating** (has *1* value), **Payment type** (more than *10* values), **Smoking** (has *6* values), **Takeaway** (has *1* value), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.    

 3. **Charging station**. A [charging station](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) is an infrastructure facility where owners of electric vehicles can recharge their cars, motorcycles or other electric vehicles. These points provide chargers and appropriate connections to provide energy to vehicle batteries.   
        Includes 35 types of filters: **Bicycle access** (has *1* value), **Bus access** (has *1* value), **HGV access** (has *5* values), **Motorcar access** (has *1* value), **Scooter access** (has *1* value), **Auth by app** (has *1* value), **Auth by chip card** (has *1* value), **Contactless auth** (has *1* value), **Auth by key** (has *1* value), **Auth by required** (has *1* value), **Auth by phone call** (has *1* value) **Auth by short message** (has *1* value), **Fee** (has *2* values), **Internet access type** (has *3* values), **Internet access type** (has *3* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7, and other.  

 4. **Convenience store and supermarket**. [Convenience store](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) and [supermarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) represent retail facilities.   
        Includes 13 types of filters: **Bulk purchase** (has *2* values), **Cash withdrawal** (has *5* values), **Changing table** (has *3* values), **Coffee** (has *2* values), **Delivery** (has *1* value), **Diet** (has *8* values), **Ice cream** (has *1* value), **Organic products** (has *2* values), **Payment type** (more than *10* values), **Second Hand Filter** (has *2* values), **Self checkout** (has *2* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.   

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergency](https://wiki.openstreetmap.org/wiki/Key:emergency) includes facilities and locations associated with emergency services such as hospitals, police stations, fire stations, and first aid medical centers.  
        Filters are not available. 

 6. **Filling station**. A [fuel station](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), also known as a filling station, petrol station, gas station and petrol garage. It is the retail-type facility where motor vehicles can be refueled.  
        Includes 13 types of filters: **Car wash** (has *2* values), **Cash withdrawal** (has *5* values), **Compressed air** (has *1* values), **Fuel type (avia)** (has more than *20* values), **Fuel cards** (has *5* value), **Payment type** (has more than *20* values), **Self checkout** (has *2* value), **Snowmobile access** (has *3* values), **Rest room** (more than *1* values), **Vacuum cleaner** (has *1* values), **Automatic fuel dispenser** (has *1* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.  

 7. **Finance**. [Finance](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) used for offices of companies in the financial sector.  
        Includes 5 types of filters.  

 8. **Food**. [Food](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) includes all places delivering food and beverages.  
        Includes 24 types of filters. 

 9. **Healthcare**. [Healthcare](https://wiki.openstreetmap.org/wiki/Healthcare)  include services provided by different professionals in different types of facilities.  
        Includes 13 types of filters.

 10. **Leisure**. [Leisure](https://wiki.openstreetmap.org/wiki/Category:Leisure) includes various types of places and facilities for entertainment.  
        Includes 15 types of filters.

 11. **Nautical**. Includes POIs related to Nautical types.   
        Does not contain any filters.


 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Includes POIs that are close to you.
        Includes 216 types of filters.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parking](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) includes facilities used by the public, customers, or other authorized users to park vehicles such as cars and trucks, commonly known as a car park (British English) or parking lot (American English).  
        Includes 34 types of filters.

 14. **Personal transport**. All [types of vehicles](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) that may be in the possession of the user.  
        Includes 38 types of filters.

 15. **<Translate android="true" ids="poi_filter_public_transport"/>**. It is a transportation system designed to carry people for public purposes, accessible to all residents and visitors to a city or region.  
        Includes 9 types of filters.

 16. **Routes**. These are defined paths or directions along which a vehicle or pedestrian travels, usually with precise instructions on how to follow them.  
        Includes 2 types of filters.

 17. **Sightseeing**. It is an activity in which people visit interesting places or sites to familiarize themselves with them and enjoy their beauty, history or significance.  
        Includes 8 types of filters.

 18. **Sport**. Includes areas for sports activities.  
        Includes 11 types of filters.

 19. **Store**. [Store](https://wiki.openstreetmap.org/wiki/Key:shop) refers to a variety of establishments and businesses that offer various goods or services for sale, such as grocery stores, clothing stores, electronics stores, and others.  
        Includes 36 types of filters.

 20. **Tourism**. [Tourism](https://wiki.openstreetmap.org/wiki/Key:tourism) includes places and things of specific interest to tourists including places to see, places to stay, and things and places providing information and support to tourists.  
        Includes 32 types of filters.

 21. **Water**. Sources of [drinking water](https://wiki.openstreetmap.org/wiki/Key:drinking_water) created or arranged by man.  
        Does not contain any filters.

 22. **Wikipedia**. To search in this category, you need to download the [Wikipedia map](../plugins/wikipedia.md#overview) of the region you are interested in.  
        Does not contain any filters.


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

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Includes 25 types: *Allotments, Atoll, Borough, City, City block, Country, Courthouse, Customs, Diplomatic office, Farm, Government, Hamlet, Island, Islet, Isolated dwelling, Locality, Neighbourhood, Police, Prison, Quarter, Residential area, Suburb, Town, Town hall, Village*.  

2. **Сhristmas**. Includes 5 types: *Christmas event, Christmas market, Christmas pyramid, Christmas shop, Christmas tree*.     

3. **<Translate android="true" ids="amenity_type_education"/>**. Includes 16 types: *Allotments, Atoll, Borough, City, City block, Country, Courthouse, Customs, Diplomatic office, Farm, Government, Hamlet, Island,Islet, Isolated dwelling, Locality, Neighbourhood, Police, Prison, Quarter, Residential area, Suburb, Town, Town hall, Village*.  

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Includes 14 types.  

5. **Emergency infrastructure**. 12 types of filters.  

6. **<Translate android="true" ids="amenity_type_finance"/>**. Includes 12 types.   

7. **Food**. Includes 12 types.  

8. **Hazard**. Includes 5 types: *Avalanche hazard, Erosion hazard, Flood hazard, Nuclear hazard, Slippery road*.  

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Includes 31 types. 

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Includes 148 types.  

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Includes 121 types.  

12. **<Translate android="true" ids="amenity_type_military"/>**. Includes 7 types: *Danger area, Military bunker, Military naval base, Military office, Military range, Military zone, Nuclear explosion site*.  
13. **<Translate android="true" ids="amenity_type_natural"/>**. Includes 50 types.  

14. **Nautical**. Includes 41 types.  

15. **<Translate android="true" ids="amenity_type_office"/>**. Includes 39 types.

16. **Routes**. Includes 4 types: *Route Article, Route Article Point, Route track, Route Track Point*.  
17. **Service**. Includes 111 types.   


18. **<Translate android="true" ids="amenity_type_sport"/>**. Includes 119 types.  

19. **Store**. Includes 156 types.  

20. **<Translate android="true" ids="amenity_type_tourism"/>**. Includes 103 types.

21. **<Translate android="true" ids="amenity_type_transportation"/>**. Includes 97 types.  

22. **User defined**. Includes 1 types: *User Defined Other Postcode*.   

23. **Wikipedia**. Includes 1 types: *Wikipedia*.  


### Save new custom filters

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
1. Tap on the agnifying glass to open the Search screen.
2. Select the Categories tab.
3. Choose the custom category: screen with search results will open.
4. Tap on filter icon and then on Filter screen.
5. Tap on the 3-dot icon.
6. In the drop-down menu, select "Edit categories".


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

