---
sidebar_position: 3
title:  Search History
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

*Search History* is a record of all searches and locations that you have entered or searched for in the app over the period of use. This tool allows you to easily find and access previously searched locations, which makes navigation easier and saves time.   

OsmAnd provides several ways to view your search history.  

- The [Search button](../widgets/map-buttons.md#search) is always displayed on the map, and tapping it will take you to the tool's [general screen](#how-to-use).
- Go to the main Android *Menu → Search → History tab*.
- When preparing to start a route, tap *Navigation → Set destination → Search field*.
- Information block in the navigation menu of [route preparation](../navigation/setup/route-navigation.md#navigation-menu) displays a list of recent destination points, which are also part of the search history.
- Search history is available in [Android Auto](../navigation/auto-car.md#search) and [CarPlay](../navigation/car-play.md#search).


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs> 

The search history serves to provide relevant information about your previous actions.

- *Re-search*. You can use the search history to search again for previously searched places or addresses without having to re-enter the query.  

- *Quick access to frequently visited places*. If you visit certain places frequently, such as your home, work, or favorite places, Search History saves those places, providing quick access to them.  

- *Track previous trips*. The search history can be useful for tracking previous trips and routes. You can track routes you have taken before or [plan your next route](../plan-route/create-route.md) based on previous ones.  

- *Search for places over a certain period of time*. For the Android app, you need to use a long press, then find the month in which you made the trip, exit the delete menu and set the name in the search field. For the iOS app, the search history list is already divided into blocks by month.

- *Delete entries*. Search History provides the ability to [delete](#delete) previous entries, which can be useful for confidentiality or to keep your history organized.


### Search query list

**Order of items** displayed in the list.  
- **Recent Items**. The most recent requests or locations are displayed at the top of the list. This allows quick access to recently used items.
- **Chronological order**. Items in the Search History list are arranged in chronological order, starting with the oldest or earliest entries and ending with the most recent or latest. Old items gradually move down the list as new entries are added, unless old items in the search history have been used, in which case they will be moved to the top of the list.

The following **types of objects** get into the Search History list:
- **Locations**. This can be an address, business name, route number, coordinates, markers, points of interest, OSM notes, or places you tapped on the map.
- **Text Queries**. These are text strings that the you types into the search box to find a specific place or address, and then taps on them to browse. For example, *Restaurants downtown* or *Nearest gas station*.
- **Tracks and Waypoints**. The list includes tracks you created, recorded, or downloaded that you used in previous routes, and waypoints if you navigated to them separately.

Each field in the Search History list contains some of the **information** available to the application.
- An icon that identifies the type or category of the found object.
- The object name, location, address, or text query. For tracks information about the distance, number of waypoints, and time is displayed.
- Distance from the user's current location to the point and direction by compass.
- In iOS the list is sorted by month.


## Actions

In the Search History tool, you can [delete](#delete) unnecessary queries, all at once or by individual items. You can use History [export](#export). Two more actions are available in the Android app: [share](#share-search-history-objects) search items as a gpx file, and *disable or enable* the entire search history without deleting it.

### Delete

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Long tap to one line from History list 
5. Privacy: It is important to protect the personal data of users, so navigation applications usually provide an option to delete all or individual records from the Search History. 

#### Share search history objects


### Export

Exporting items or the entire Search History can be useful for the following scenarios:

1. Backup: The user may want to back up their Search History to save important information or to restore it to another device.

2. Transferring to another device: If the user changes device, he/she can use Export function to transfer the Search History to the new device without having to search and enter the data again.

3. Data analysis and processing: The user may want to export the Search History for data analysis, reporting, or use in other applications for additional processing.

4. Share space with another user of the application.


