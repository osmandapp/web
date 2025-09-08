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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## Overview {#overview}

[OsmAnd Point of Interest](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI) functionality in OsmAnd provides accuracy, visibility, and convenience in finding interesting places, routes and services near your current location or a selected area on the map.  

The search bar allows you to enter keywords related to the places you are interested in. The POI search also presents a convenient list sorted by [category](#poi-search-by-categories) to help you quickly find what you are looking for, and the [filter](#save-new-custom-filters) allows you to select specific POI characteristics to display only relevant results.  

[Custom Search](#custom-poi-search) enhances search functionality by allowing multiple category and subcategory choices. You can save created filters for future use, making it easier to quickly locate POIs that meet specific criteria or preferences. For more details, refer to the section on saving custom filters [here](#save-new-custom-filters).  

OsmAnd provides several ways to get to the Search tool where the **Categories search** section is located.

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#how-to-use), where you can find the *Categories* tab.
- Go to the main *Menu → Search → Categories tab*.
- When preparing to start a route, tap [*Navigation → Set destination → Search field → Categories tab*](../navigation/setup/route-navigation.md#set-target-point).  
- Go to the main [*Menu → Configure map → POI overlay → Search*](../map/point-layers-on-map.md#points-of-interest-pois).


## How to Use {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*All POI types in OsmAnd you can find here:* [github link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Point of Interest (POI) search by type and name**:
    - Allows you to search:
       - For nearby points of interest (POI) or specific categories of POI.
       - For [OSM routes](../map/routes.md) by name and by ref number.
       - For [Popular places (Wikipedia)](../map/map-context-menu.md#details).
    - Filters and sorting results by category, distance, or rating are possible.
    
- **Search POIs on the map** - Show on map:
    1. You can select the required categories from the [**list**](../map/point-layers-on-map.md#points-of-interest-pois) in *Configure map → Show POI overlay...* and search by icons in the expected location.
    2. You can enter a search query first or can start searching for POIs in *Menu → Search → Categories* and then click **Show on map** .

- **Brand search**:
    - Searching a business venue by brand name (such as Audi, Starbucks, or Aldi) is very similar to search different POIs by type the main difference is that brand list is provided inside the map and subject to changed during each updates. 
    - Brand is defined by OSM tag [***brand*** *name*](https://wiki.openstreetmap.org/wiki/Key:brand) and OsmAnd collects limited types of brands per map with a maximum 1000 brands per map, however it makes sure that list of brands is aligned across the neighbor maps.

![Search POI Android](@site/static/img/search/brand_search_andr.png)


:::note
To accomplish some of these tasks (locate addresses, POI) you will need to have the offline vector map file. Initially, the search is based on data located on the map in the visible area of the device screen. If you find nothing, OsmAnd proposes to increase the search radius.
:::  


## POI Search by Categories {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

The **Search by Categories** tool allows you to quickly find objects, places, and routes classified into different categories. Each category has a unique set of characteristics, and this tool has filters that allow you to refine the search results by selecting different values for additional characteristics.

How it works:

- *Category Selection* - You select the category you are interested in, such as restaurants, hotels, stores, OSM routes, popular Wikipedia places and others, from a suggested list of categories.
- *Characteristic Filters* - After selecting a category, the application shows additional characteristics that can be used to refine the search. For example, for the Restaurants category, you can select filters such as cuisine type (Italian, Chinese, etc.), price range, rating, and parking availability.
- *Applying Filters* - You select the required values in the filters, and then the application applies these filters to the search results to show only those properties that match the specified characteristics.
- *Displaying results* - After applying filters, the OsmAnd displays a list with brief information matching the category and characteristics set.

Benefits:

- *User Customization* - Feature filters allow you to customize searches to meet their specific needs and preferences.
- *Refined results* - Filters help refine search results, making them more relevant and accurate.
- *Multiple Categories* - The OpenStreetMap database has an extensive set of POI categories, allowing you to find sites of different types and categories.

<!--
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-single-tap) of POI.   
-->

### Types of Filters {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

With the **Filter** function, you can select the necessary characteristics and as a result get a list containing only relevant objects. To use the filter:

- Select the category you are interested in from the category list.
- On the screen that opens, tap the icon that displays the filter. It is located below the input field, next to *Show on the map*.
- In the filter, select the type of characteristics.

![Search POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

A filter can consist of quite a number of items, the presence of which depends on the selected category. Each category has a number of filters specific to it, organized in folders by type. There are a total of *22 default categories*. Some of them are listed here:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Accommodation](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) includes facilities that provide temporary lodging such as hotels, motels, hostels, guesthouses, and campgrounds. These places provide amenities and services for a comfortable stay while traveling.  
        Includes *9* types of filters: **Fridge** (has *2* values), **Heating** (has *7* values), **Internet access type** (has *3* values), **Mattress** (has *2* values), **Payment type** (more than *10* values), **Shower** (has *1* value), **Smoking** (has *6* values), **Star rating** (has *10* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.

 2. **Cafe and restaurant**. [Cafe](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) and [restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) represent places of food service.  
        Includes *16* types of filters: **Changing table** (has *3* values), **Coffee** (has *2* values), **Cuisine** (more than *10* values), **Delivery** (has *1* value), **Diet** (has *8* values), **Dish** (more than *10* values), **Drinking water refill** (has *1* value), **Drive-in** (has *1* values), **Internet access type** (has *3* values), **Microbrewery** (has *1* value), **Organic products** (has *2* values), **Outdoor seating** (has *1* value), **Payment type** (more than *10* values), **Smoking** (has *6* values), **Takeaway** (has *1* value), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.

 3. **Charging station**. A [charging station](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) is an infrastructure facility where owners of electric vehicles can recharge their cars, motorcycles or other electric vehicles. These points provide chargers and appropriate connections to provide energy to vehicle batteries.
        Includes *35* types of filters: **Bicycle access** (has *1* value), **Bus access** (has *1* value), **HGV access** (has *5* values), **Motorcar access** (has *1* value), **Scooter access** (has *1* value), **Auth by app** (has *1* value), **Auth by chip card** (has *1* value), **Contactless auth** (has *1* value), **Auth by key** (has *1* value), **Auth by required** (has *1* value), **Auth by phone call** (has *1* value) **Auth by short message** (has *1* value), **Fee** (has *2* values), **Internet access type** (has *3* values), **Internet access type** (has *3* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7, and other.  

 4. **Convenience store and supermarket**. [Convenience store](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) and [supermarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) represent retail facilities.
        Includes *13* types of filters: **Bulk purchase** (has *2* values), **Cash withdrawal** (has *5* values), **Changing table** (has *3* values), **Coffee** (has *2* values), **Delivery** (has *1* value), **Diet** (has *8* values), **Ice cream** (has *1* value), **Organic products** (has *2* values), **Payment type** (more than *10* values), **Second Hand Filter** (has *2* values), **Self checkout** (has *2* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergency](https://wiki.openstreetmap.org/wiki/Key:emergency) includes facilities and locations associated with emergency services such as hospitals, police stations, fire stations, and first aid medical centers.  
        Does not contain any filters.

 6. **Filling station**. A [fuel station](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), also known as a filling station, petrol station, gas station and petrol garage. It is the retail-type facility where motor vehicles can be refueled.  
        Includes *13* types of filters: **Car wash** (has *2* values), **Cash withdrawal** (has *5* values), **Compressed air** (has *1* values), **Fuel type (avia)** (has more than *20* values), **Fuel cards** (has *5* value), **Payment type** (has more than *20* values), **Self checkout** (has *2* value), **Snowmobile access** (has *3* values), **Rest room** (more than *1* values), **Vacuum cleaner** (has *1* values), **Automatic fuel dispenser** (has *1* values), **Wheelchair accessibility** (has *4* values), Open now / Open 24/7.  

 7. **Finance**. [Finance](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) used for offices of companies in the financial sector.  
        Includes *5* types of filters.  

 8. **Food**. [Food](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) includes all places delivering food and beverages.  
        Includes *24* types of filters.

 9. **Healthcare**. [Healthcare](https://wiki.openstreetmap.org/wiki/Healthcare)  include services provided by different professionals in different types of facilities.  
        Includes *13* types of filters.

 10. **Leisure**. [Leisure](https://wiki.openstreetmap.org/wiki/Category:Leisure) includes various types of places and facilities for entertainment.  
        Includes *15* types of filters.

 11. **Nautical**. Includes POIs related to Nautical types.  
        Does not contain any filters.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Includes POIs that are close to you.  
        Includes *216* types of filters.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parking](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) includes facilities used by the public, customers, or other authorized users to park vehicles such as cars and trucks, commonly known as a car park (British English) or parking lot (American English).  
        Includes *34* types of filters.

 14. **Personal transport**. All [types of vehicles](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) may be in the possession of you.  
        Includes *38* types of filters.

 15. **Popular places (Wikipedia)**. To search in this category, you need to download the [Wikipedia map](../plugins/wikipedia.md#overview) of the region you are interested in.  
        Does not contain any filters.

 16. **Private access**.  
        Includes *6* types of filters.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. It is a transportation system designed to carry people for public purposes, accessible to all residents and visitors to a city or region.  
        Includes *9* types of filters.

 18. **Routes**. Includes [OSM routes](../map/routes.md) for various types of activities.  
        Includes *14* types of filters: **Checkpoint**, **Cycling network node**, **Hiking network node**, **Routes network (cycling)**, **Routes network (hiking)**, **Route point category**, **Air Sports**, **Cycling**, **Driving**, **Foot**, **Motorcycling**, **Other routes**, **Water sports**, **Winter sports**.

 19. **Sightseeing**. It is an activity in which people visit interesting places or sites to familiarize themselves with them and enjoy their beauty, history or significance.  
        Includes *8* types of filters.

 20. **Sport**. Includes areas for sports activities.  
        Includes *11* types of filters.

 21. **Store**. [Store](https://wiki.openstreetmap.org/wiki/Key:shop) refers to a variety of establishments and businesses that offer various goods or services for sale, such as grocery stores, clothing stores, electronics stores, and others.  
        Includes *36* types of filters.

 22. **Tourism**. [Tourism](https://wiki.openstreetmap.org/wiki/Key:tourism) includes places and things of specific interest to tourists including places to see, places to stay, and things and places providing information and support to tourists.  
        Includes *32* types of filters.

 23. **Water**. Sources of [drinking water](https://wiki.openstreetmap.org/wiki/Key:drinking_water) created or arranged by man.  
        Does not contain any filters.


### Rearrange Categories {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

The Rearrange Categories feature allows you to list only the categories you need and arrange them in the order you are most comfortable using them.

Description and how to use:

- Initially, *the list is sorted alphabetically.* Created categories are also added in alphabetical order.
- Changes in the list of categories are made for each profile separately.
- Move categories by dragging and dropping them to the right position in the list.
- *To hide* unnecessary categories, tap the **minus** icon.
- **Available**. Previously *Hidden* categories can be returned to the displayed list by tapping the **plus** icon.
- Use the **Reset** to default button to return the list to the preset state.
- Categories created with [Custom Search](#custom-poi-search) or [Filters](#save-new-custom-filters) can be deleted using the **Delete** icon.  

![Search POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Online Search {#online-search}

<InfoAndroidOnly />

![Search POI Android](@site/static/img/search/search_online_2_andr.png)  

**Online Search** allows finding locations, addresses, and points of interest in real time. OsmAnd uses [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), an online geocoder developed by OpenStreetMap that translates users' text queries into geographic coordinates and back.  

Online Search includes the following features:

1. **Search by location** - You can enter the name of a city, street, neighborhood, or other location and OsmAnd will provide results matching the query.
2. **Geocoding** - Online search converts your text queries into geographic coordinates, allowing precise location.
3. **Reverse geocoding** - You can enter geographic coordinates and Search will return the corresponding location as a city name, street name, or place on the map.
4. **Search by Points of Interest** - Allows you to search for different points by name or category.

Use of Online Search:

- Online search ensures that data is up-to-date and updates are available, as the service is constantly updated and uses open data sources.
- It provides a wide coverage of places and objects, allowing you to find places of interest in different regions of the world.
- Online searches are real-time, providing quick access to search results.
- Useful in cities and on highways with good Internet coverage.
- Online search is convenient to use if there are no maps of the region and if it is impossible to download them.
- *Requires a constant and stable Internet connection.*  

![Search POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)  

To improve results, before using the Search tool, zoom in on the map to get closer to where you need to find a specific location. And while searching, you can **increase the search radius** to find places that are farther away from your location. When searching offline, if the required results are not available, OsmAnd suggests using the online search.  

You can find out information about Online Navigation in [Online routing](../navigation/routing/online-routing.md) article.



## Customize POI Search {#custom-poi-search}

POI Search Customization is an advanced search feature that allows you to find POIs from different categories and combine them for a more accurate and personalized search. Unlike the standard POI search, which is limited to some predefined categories, the Custom POI search provides the flexibility to select and combine different types of POIs.  

For example, you can search restaurants and pharmacies simultaneously to find the nearest place to dine and then take your medicine. Or search for the nearest gas station and car service when you have a problem with your car.  

This functionality is especially useful in various cases:  

- *Travel*. When traveling, using custom search you can quickly find different places of interest and combine them to create an optimal route.
- *Emergencies*. If you need to find several types of services quickly, you can use a custom POI search to get all the information you need.
- *Search for nearby services*. Custom Search allows you to combine different POI categories for easy search if you need to find several types of services in a certain neighborhood or on a certain section of the route.

### Custom POI Filter {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png)   ![Custom search Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Custom POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>  

*Custom POI filter* includes sets of amenity categories consisting of relevant values. OsmAnd allows you to collect and combine the required POI types from one or more suggested categories.  

To create custom filters for finding places on the map, select relevant categories and subcategories of interest. You can [save](#save-new-custom-filters) these filters for later use or [edit](#edit-an-existing-filter) them if needed. Alternatively, you can view the filtered data without saving by tapping the *Show* button. However, note that if you don't save the filters, all selections will be canceled once you switch searches or exit the search tool.

- Each amenity category contains a list of available generic values for POI types.
- You have the option to select or deselect them individually by tapping the field of the type you are interested in.
- *Select all* - To do this, select the toggle button.
- Refine the list by excluding unnecessary ones - Start typing the suggested name in the *Search for POI types* field.  

#### Categories and their Filters {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Includes 25 types: *Allotments, Atoll, Borough, City, City block, Country, Courthouse, Customs, Diplomatic office, Farm, Government, Hamlet, Island, Islet, Isolated dwelling, Locality, Neighbourhood, Police, Prison, Quarter, Residential area, Suburb, Town, Townhall, Village*.  

2. **Сhristmas**. Includes 5 types types of filters:  
    *Christmas event, Christmas market, Christmas pyramid, Christmas shop, Christmas tree*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Includes 16 types: *Allotments, Atoll, Borough, City, City block, Country, Courthouse, Customs, Diplomatic office, Farm, Government, Hamlet, Island, Islet, Isolated dwelling, Locality, Neighbourhood, Police, Prison, Quarter, Residential area, Suburb, Town, Townhall, Village*.  

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Includes 14 types of filters.  

5. **Emergency infrastructure**. Includes 12 types of filters.  

6. **<Translate android="true" ids="amenity_type_finance"/>**. Includes 12 types of filters.

7. **Food**. Includes 12 types of filters.  

8. **Hazard**. Includes 5 types: *Avalanche hazard, Erosion hazard, Flood hazard, Nuclear hazard, Slippery road*.  

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Includes 31 types of filters.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Includes 148 types of filters.  

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Includes 121 types of filters.  

12. **<Translate android="true" ids="amenity_type_military"/>**. Includes 7 types: *Danger area, Military bunker, Military naval base, Military office, Military range, Military zone, Nuclear explosion site*.  

13. **<Translate android="true" ids="amenity_type_natural"/>**. Includes 50 types of filters.  

14. **Nautical**. Includes 41 types of filters.  

15. **<Translate android="true" ids="amenity_type_office"/>**. Includes 39 types of filters.

16. **Popular places (Wikipedia)**. Includes 1 type: *Wikipedia*.

17. **Private access**. Does not include any filters.

18. **Routes**. Includes 15 types of filters.  

19. **Service**. Includes 111 types of filters.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Includes 119 types of filters.  

21. **Store**. Includes 156 types of filters.  

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Includes 103 types of filters.

23. **Transportation**. Includes 97 types of filters.  

24. **User defined**. Includes 1 type: *User Defined Other Postcode*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Save New Custom Filters {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Custom POI save Android](@site/static/img/search/custom_poi_save_android.png) ![Custom POI save Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI save iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

To **save** a custom filter, select filter types, and then:

- Tap the *Show* button and select the *Save* button for iOS or the button with the *icon indicating the save action* for Android.
- Enter a name for the new category.
- Your filter will appear in the *Categories tab* list in the Search tool.  

Another way to **save**:

- Select *[category](#poi-search-by-categories) → [filter icon](#types-of-filters) →* select *types* of characteristics *→ three-dot menu → Save filter*.


### Edit an Existing Filter {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

From the main screen:

- Tap the *Magnifying Glass* button in the upper left corner of the device screen to open the *Search* menu.
- Select the *Categories* tab.
- Select a saved custom category, and the search results screen appears.
- Tap the *Filter* icon next to *Show on Map* to open the *Filters* screen.
- Tap the *three-dot menu*.
- In the drop-down menu, select **Edit filter**.
- To save a custom POI search after editing:  
    - Select POI categories and filter types for them *→* tap *Show → three-dot menu → Save As →* enter a new filter name or *save* changes to the current one.


### Delete Custom POI Filter {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

You can only delete categories that were created using filters or custom search.

- Go to the [Categories](#poi-search-by-categories) tab and select the required one.
- In the field next to *Show on Map*, tap the icon representing the *filter*.
- In the *Filters* menu, tap the *three-dot menu* ( &#8285; ) located in the upper right corner of the screen.
- Select **Delete Filter**.
- ***You cannot undo the deletion.***


#### Delete Custom Categories (iOS) {#delete-custom-categories-ios}

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_3_ios.png)  

An additional option only for the iOS app is **Delete Custom Categories**.

- This item is at the end of the *Categories* tab list.
- Select the unneeded categories by item one by one or *Select all*.
- Tap **Delete** button.  


## Related Articles {#related-articles}

- [Search All](./search-all.md)
- [Search Address](./search-address.md)
- [Search History](./search-history.md)
- [Search Coordinates](./search-coordinates.md)



