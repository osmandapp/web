---
sidebar_position: 3
title: Map Context Menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

The map context menu provides information about the selected object on the map. You can also use it to create a route to the selected location. To open the context menu, first, find the required location on the map, then select the object with a short tap or long tap when selecting any precise point on the map.


### Select an Object (Single Tap) {#select-an-object-single-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

The **context menu** appears when you **tap once** a marked object on the map. This context menu displays essential information about the selected object, including its *name, icon* (as represented on the map), *address, distance*, and *direction* from your current position.  

You can select various types of map objects, such as *POIs*, *favorites*, *transportation stops*, *markers*, *mountain peaks*, or other *map objects*.

:::note
Selected map objects correspond to OpenStreetMap [**nodes**](https://wiki.openstreetmap.org/wiki/Node) or [**ways**](https://wiki.openstreetmap.org/wiki/Way).
:::

> *The height of mountain peaks is displayed in meters or feet depending on the [units of length](../personal/profiles.md#units--formats) selected in the profile settings.*


### Select Any Point (Long Tap) {#select-any-point-long-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu long_tap_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu long_tap_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

When you **long tap** anywhere on the map, a **context menu** appears, providing information about the selected location. This includes the address, distance, and direction from your current position.

> **NOTE**. *Long tapping a **building number** highlights its outline and opens the map context menu*


### Select Route {#select-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Tapping a [GPX-track](../map/tracks/index.md) on the map opens the [track context menu](../map/tracks/track-context-menu.md), where you can access additional track-related options.


### Hide Context Menu {#hide-context-menu}

To close the **context menu**:

- Tap any *empty area* on the map to avoid reopening the menu.
- Drag the menu *down* from the top.


## Details {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

For more detailed information about an object, tap the **Details** button in the context menu or swipe the panel up to expand it.


### Object Info {#object-info}

The **Object Info** panel provides additional details about the selected object. You can tap on any entry to copy the information to the clipboard.  

Available details include:

- [Alternative names](#alternative-names)
- [Coordinates](../map/map-context-menu.md#coordinates)
- [Nearby Wikipedia articles](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Nearby POIs](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Public Transport routes](../map/map-context-menu.md#public-transport-routes) (for transport stops)
- [Favorites / Track Points from the same group](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [OpenStreetMap link](../map/map-context-menu.md#openstreetmap-link)
- [Article image / description](../map/map-context-menu.md#article-image--description)
- [Online photos](../map/map-context-menu.md#online-photos)

Additionally, the panel may include [OpenStreetMap Details](https://wiki.openstreetmap.org/wiki/Map_features), such as:

- [Website](https://wiki.openstreetmap.org/wiki/Key:website)
- [Phone number](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Working hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Fee](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Accessibility](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Width](https://wiki.openstreetmap.org/wiki/Key:width) / [Height](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternative Names {#alternative-names}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Alternative names Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternative names Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternative names Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternative names Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd displays **additional POI names** in the *map context menu*, prioritizing the name in the [display language](../personal/global-settings.md#display-language) or the system's preferred language list. If multiple translations are available, they are grouped into categorized tags such as *name, brand, operator,* or *nearby POIs*.  

Features of alternative names display:

- Additional translations can be accessed through a *drop-down list*.

- Names are categorized into different groups such as the *list of names in other languages*, *Regional*, *Local*, *National*, *International*, *Short*, *Old*, *Official*, and *Alternative* names.

- Other categories include *region-specific translation*, or *default settings*.

- If a specific translation is *not available*, OsmAnd defaults to the **local** name to ensure accuracy and consistency across multilingual regions.


### Polygon Information {#polygon-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Polygon Information Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygon Information Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

The **Polygon information** feature provides detailed data on nearby **polygons** displayed on the map. This includes geographic features, administrative boundaries, and other mapped areas.  

**Within section**:

- Displays a *list of surrounding polygons*, sorted *from smallest to largest* based on area size.

- Each entry shows the *polygon type and name*, allowing for easy identification of regions and boundaries.

**Additional details**:

- When selecting a point on the map or a POI, the **polygon information** panel displays a list of all polygons that contain the selected location.

- Entries in the list include **administrative divisions, land use areas, natural features, and other categorized regions**.

- The panel allows users to **copy the polygon's name and details** for reference.

- To view this information, go to *Map Context Menu → Details → Within*.

This feature helps you understand your *current location* in relation to mapped administrative divisions, natural areas, or other important geographic features.


### Coordinates {#coordinates}

|Coordinates format| |
|:------|:------|
| <ul><li>DDD.DDDDD (Plain Decimal Degrees)</li><li>DDD.DDDDD (N/S, E/W comma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 and CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Web Link](https://osmand.net/map)</li><li>[OpenStreetMap Web Link](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordinates](@site/static/img/map/map_context_menu_Coordinates.png) |

In the context menu, you can find [geographical coordinates](../search/search-coordinates.md#coordinate-format) of a point in various formats and also shareable OsmAnd and [OpenStreetMap Links](../map/map-context-menu.md#openstreetmap-link) (the last option is available only when the [OpenStreetMap editing plugin](../plugins/osm-editing.md) is enabled). If you expand coordinates section and long tap any line from the list, its values will be automatically copied to the clipboard (**Android**) or the *Copy* option becomes available in the pop-up message (**iOS**).  

OsmAnd Web Link can be automatically recognized by OsmAnd (example: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Both OsmAnd and [OpenStreetMap links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) are opened on corresponding sites with a pin mark to the place of interest.  


### Nearby POIs / Wikipedia {#nearby-pois--wikipedia}

![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

These sections display nearby [Wikipedia articles](../plugins/wikipedia.md) or [Points of Interest](../map/point-layers-on-map.md#points-of-interest-pois-on-the-map) with *<Translate android="true" ids="shared_string_show_on_map"/>* and *<Translate android="true" ids="search_more"/>* to display and [search](../search/search-poi.md) all other POIs & Wikipedia articles.

Tap *Nearby POIs / Wikipedia articles* opens a points list (POIs or Wikipedia). A tap to one of these points from a point list moves the map to this point (POIs or Wikipedia) with the opening point map context menu.

> **NOTE**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) will appear only if you previously downloaded special maps with [Wikipedia articles for this area](../plugins/wikipedia.md#download-wikipedia)*.


### Public Transport Routes {#public-transport-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Shown info about Public transport routes for chosen transport stop. Information about Public transport context menu and actions with it, read [here](../map/public-transport.md#transport-routes-context-menu).


### Favorites / Track Points from the Group {#favorites--track-points-from-the-group}

![Favorite list](@site/static/img/map/favorite_list_android.png) ![Favorite list full](@site/static/img/map/favorite_list_full_android.png)

This is a list of all points in one group for a [Favorite](../map/point-layers-on-map.md#favorites-on-the-map) or Waypoint. By tapping, the entire list of points of one group expands, when tapping a point from the list, the map moves to the selected point.


### Linear Object {#linear-object}

![Favorite list](@site/static/img/map/linear_object_andr.png)

For **linear objects**, such as *barriers, steps, gates, benches, slipways, weirs, bollard, or coupures*, the context menu displays additional details. These include the POI type and address associated with them, or the object type if no name is assigned.


### Climbing Area and Crag Details {#climbing-area-and-crag-details}

![Favorite list](@site/static/img/map/climbing_andr.png)

When selecting a [climbing area or crag](../map/routes.md#climbing-routes), OsmAnd provides a detailed summary of the climbing location, including: name and location, climbing difficulty rating (UIAA, French, YDS, etc.), rock type, height and route length, climbing quality and surface conditions.


### Ski Slopes, MTB Routes, and Dirt Bike Trails {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb.png)  ![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb_2.png)

You can tap map elements such as **ski slopes**, **mountain bike (MTB) routes**, and **dirt bike trails** to open their context menu with detailed information. Available information includes: route or slope name (if available in OSM data), OSM object ID or relation ID, difficulty level, trail length, terrain type, and more.

**Supported Tags:** `piste:type=*` (ski slopes), `route=mtb`, `route=atv` or `route=dirt_bike` (motorbike off-road trails)

:::note
Use the [Winter and Ski](../map/vector-maps.md#winter-and-ski) or [Offroad](../map/vector-maps.md#offroad) map styles for better visibility.
:::


### Article Description {#article-description}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Description list](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Description list](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

This part contains a part of the description from [Wikipedia article](../plugins/wikipedia.md), [Favorite](../personal/favorites.md) or Waypoint description, by tapping you can open the full description.


### OpenStreetMap Link {#openstreetmap-link}

![OSM link](@site/static/img/map/context_menu_osm_link.png) ![OSM link](@site/static/img/map/context_menu_osm_link_1.png)

OpenStreetMap link provides direct link to the OpenStreetMap object where you can find complete information about it:  
[node](https://wiki.openstreetmap.org/wiki/Node) or [way](https://wiki.openstreetmap.org/wiki/Way).


### Online Photos {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos {#actions-with-photos}

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap. <!-- Here we need to write about Popula places (WIkipedia) -->

<!--
Images nearby

Details:

- Mapillary offers nearby street-level images, while Wikimedia provides media tagged with `image` or `wikimedia`from OpenStreetMap.

- You can contribute your photos using the *Add Photos* button.

*Images nearby* (*iOS*) section provides access to photos of points of interest from sources such as [Wikimedia](https://www.wikimedia.org/) and [Mapillary](../plugins/mapillary.md).
-->

#### Gallery Menu {#gallery-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:  
- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

#### Street-level Imagery {#street-level-imagery}

Details:

- With *Add photos* button, you can share your own street-level imagery via Mapillary.

- Use *Explore* button to open Mapillary view with photos.

*Street-level imagery* integrates Mapillary’s extensive collection of real-world street views. You can access nearby, sequentially captured images of streets and paths. Also, Mapillary provides street-level images directly on the map view. You can read more in the article [Mapillary plugin](../plugins/mapillary.md).




### * Audio/Video Note {#-audiovideo-note}

<InfoAndroidOnly />

![Image list](@site/static/img/map/image_list_android.png) ![Video list](@site/static/img/map/video_list_android.png)

[Audio / Video notes](../plugins/audio-video-notes.md) information such as date, coordinates, preview and others are available in the **Details** menu. You can open the notes in secondary software by tapping the **Play / Show** button in the context menu of the note.


## Actions {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Actions menu Android](@site/static/img/map/actions_menu_android.png) ![Actions additional menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions menu iOS](@site/static/img/map/actions_menu_ios.png)  ![Actions additional menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

It is a set of specific manipulations that can be performed on a point or object. This menu is split into two parts: visible section consists of maximum 3 actions and other actions are accessible by *Actions* button. You can customize (*Android*) the order of actions in [General settings](#customize).


### Add / Edit Favorite {#add--edit-favorite}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit favorite action Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit favorite action iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

In the context menu, there are options to **add** or to **edit** the selected point / object to the [favorites list](../personal/myplaces.md).

- To **Add**, you need to select a point / object, tap the *Star* icon (with signature Add) and enter all the necessary information.  

- To **Edit** information about favorite point, you need to turn on *Show on the map* (*Menu → Me places → Favorites*) then press on it and in the Context menu instead of *Star* icon will appear *Pencil icon* (with signature Edit).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - adds a selected point to the favorites list.


### Add / Edit Marker {#add--edit-marker}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

It is possible to mark a point or an object to make it easier to plan navigation. You just need to tap the **flag** icon in the menu (*Android*), **arrow** (*iOS*) - displays direction and distance to the selected point from your current location.

Actions:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Puts a new marker on the selected point.
- **Mark passed** (*Android*) / *Dismiss* (*iOS*). Deactivates marker and puts it to the History.
- **Make active** (*Android*). Moves marker to the top position (on the top panel).
- **Restore marker** (*Android*). Moves marker from History to active list.

Read more about [markers here](../personal/markers.md).


### Share {#share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

| Versions up to Android 14 | 14+ Android |
|:------------|:---------------|
| ![Share action Android](@site/static/img/map/action_share_1_andr.png) | ![Share action Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Share action iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

The OsmAnd app allows you to **<Translate android="true" ids="shared_string_share"/>** *My Location* or any selected location on the map with messenger, emails, or social media.  

Available options to share the location:

- ***Send***. Sends text through apps available on your device. Includes all information about the location: My location name or the name of the selected POI, address, coordinates, and geolocation as a link.
- ***Copy***. Copies all location information (My location name or name of the selected POI, address, coordinates, and geolocation as a link) to the clipboard.  
- ***Copy address***. Copies only address information to the clipboard.
- ***Copy POI name***. Copies only POI name or address if there is no name to the clipboard.
- ***Copy coordinates***. Copies only coordinates information to the clipboard.
- ***geo***. Opens a list of available applications that support geolocations. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-code*** (*Android*). Generates a link to the selected location in a QR code.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Directions To / From {#directions-to--from}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Directions Android](@site/static/img/map/action_directions_android.png)

![Multiple Directions Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Directions iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

To start navigation or route planning, you need to select destination first with [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). In case you already have a destination point, the menu will suggest you to replace the destination point or to insert as another intermediate or start point.

It is also possible to select *From* Destination first via map context menu (<Translate android="true" ids="context_menu_item_directions_from"/>).

Read more about [navigation here](../navigation/setup/route-navigation.md).

:::note Tap Start navigation
If you tap **Start navigation** - *From* point will be discarded as application enters in Navigation mode. To preserve a route, don't tap *Start navigation* and [**swipe down**](#hide-context-menu) *Route preparation* menu.
:::


### Search Nearby {#search-nearby}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Search action Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search action iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

With this context menu action, it is possible to search around a specific location on the map.  

Read more about [search](../search/index.md) functionality.


### Avoid Road {#avoid-road}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road on the map Android](@site/static/img/map/action_avoid_android.png) ![Dismiss avoided road Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map iOS](@site/static/img/map/avoid_route_ios_1.png) ![Dismiss avoided road iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Using map context menu, you can add a specific road to the list of non-used for routing roads. That will affect [route preparation](../navigation/setup/route-navigation.md).  
To delete previously selected roads from *[Avoid roads list](../navigation/routing/osmand-routing.md#avoid-roads-menu)* tap a sign, choose *Remove* (**Android**) or *Dismiss* (**iOS**).

:::note
Avoid roads function is global and affects all *[routing types](../navigation/routing/osmand-routing.md#routing-types)* (except *[Online routing](../navigation/routing/online-routing.md)*).  
:::


### Change Object Position {#change-object-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Change position Android](@site/static/img/map/action_change_position_android.png)

![Action Change position UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Change position iOS](@site/static/img/map/action_change_position_ios.png)

![Action Change position UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Almost every created object by user is moveable i.e. Marker, Favorite, Created POI, Audio/Video Note or Track Waypoint. First select an object on the map and then use *<Translate android="true" ids="change_markers_position"/>* the menu to move it to a new location.


### Plan a Route {#plan-a-route}

![Action Plan a route Android](@site/static/img/map/action_plan_route_android.png)

You can start a route planning from a selected point via object context menu.

Read more about [Plan a route](../plan-route/create-route.md) tool.


### Update / Download Online Maps {#update--download-online-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Download online map Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download online map iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

To update or download online maps (tiles) at a specific location, you can use the context menu of the object:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* and for *Update*, go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* and *<Translate ios="true" ids="update_tile"/>*.  

Please read the [full instruction](../map/raster-maps.md#download--update-tiles).  


### Update / Download Vector Maps {#update--download-vector-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Download vector map Android](@site/static/img/map/action_download_vector_map_android.png)

![Select vector map worldwide on Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download vector map iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Select vector map on iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

In case there is no offline map present at the selected location, for example map object menu was opened via Search or via specific Favorite, then the smallest possible offline map will be suggested to [download](../start-with/download-maps.md#download---map-context-menu).  

**iOS**. If you already have [downloaded](../map/map-context-menu.md) OsmAnd maps (vector or terrain), it is possible to updated them via context menu. You will need to select the region on the map first - tap any location on worldwide zoom 3-7.  

> **NOTE**. *If you have opened context menu for map region (region is highlighted), you will be able to see ***<Translate android="true" ids="rendering_category_details"/>*** about it: type and size of an available map, link to a Wikipedia page, language, population and other.*


### * Add / Delete Parking point {#-add--delete-parking-point}

:::note
To add add/delete parking points, enable the OsmAnd [**Parking position plugin**](../plugins/parking.md).
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Parking Android](@site/static/img/map/action_parking_android.png)

![Action Delete Parking Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Parking iOS](@site/static/img/map/action_parking_ios.png)

![Action Delete Parking iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Any selected location on the map could be marked as [a parking position](../plugins/parking.md). To delete parking position, you can open the context menu associated with parking location.


### * Add / Edit Track waypoint {#-add--edit-track-waypoint}

:::note
To add add/edit track points, enable the OsmAnd [**Trip recording plugin**](../plugins/trip-recording.md).
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Select Track to add Waypoint Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Select Track to add Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

You can add waypoints to a recorded track or to the current track recording using the map context menu.  

- Select a location on the map with a [long tap](../map/map-context-menu.md#select-any-point-long-tap).
- In the *map context menu* that opens, choose *Actions → Add track waypoint*.
- The list displays the [tracks](../map/tracks/index.md#display-tracks-on-the-map) recorded and shown on the map, as well as the [current track recording](../plugins/trip-recording.md#from-widget), to which you can add the selected waypoint.
- You can add waypoints to a track that is not yet active for recording, in which case the inactive track switches from the *Start state* to the *Resume state*.
- [Fill in](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) the required data and save the waypoint.
- You can configure the [Quick Actions](../widgets/quick-action.md) by adding a waypoint to the *Add track waypoint*.


### * Create / Modify POI {#-create--modify-poi}

:::note
To add create/modify POIs, enable the OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

With OSM Editing plugin, you can create and modify most of the POIs present on [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [creates a new POI](../plugins/osm-editing.md#how-to-add-poi) at selected location.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifies selected POI](../plugins/osm-editing.md#how-to-modify-poi).


### * Open OSM Note {#-open-osm-note}

:::note
To add open OSM note, enable the OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Note Android](@site/static/img/map/action_note_android.png)

![Action Add Note Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Note iOS](@site/static/img/map/action_note_ios.png)

![Action Add Note iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

You can [report](../plugins/osm-editing.md#how-to-report-a-mistake) map data errors at specific location to [OpenStreetMap community](https://wiki.openstreetmap.org/wiki/Join_the_community). Please follow [guidelines](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) and add proper comments to an issue.


### * Comment / Close OSM Note {#-comment--close-osm-note}

:::note
To comment/close OSM note, enable the OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md).
:::

![Comment OSM Note Android](@site/static/img/map/action_comment_note_android.png) ![Reopen OSM Note Android](@site/static/img/map/action_reopen_note_android.png)

You can [comment](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [resolve](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) and reopen
OpenStreetMap Notes via object's context menu.


### * Upload POI / OSM Note {#-upload-poi--osm-note}

:::note
To upload POI / OSM note, enable the OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md).
:::

![Upload POI Android](@site/static/img/map/action_poi_upload_android.png) ![Upload OSM Note Android](@site/static/img/map/action_note_upload_android.png)

In case you use *Offline mode* to add / edit POI or OSM Note, you will need to upload the changes to OpenStreetMap. By default, *Offline mode* is on to avoid accidental changes of public database. You can upload or delete change via created object context menu.


### * Record AV Note {#-record-av-note}

<InfoAndroidOnly />

:::note
To record audio/video notes, enable the OsmAnd [**Audio/Video Notes plugin**](../plugins/audio-video-notes.md).
:::

![Action Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Records or takes a media note at a selected point on the map.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - makes a [audio note](../map/point-layers-on-map.md#-audio--video-points-android) on selected point (creates new point on the overlay with audio icon).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - makes a [video note](../map/point-layers-on-map.md#-audio--video-points-android) on selected point (creates new point on the overlay with video icon).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - makes a [photo point](../map/point-layers-on-map.md#-audio--video-points-android) on the map.


## Customize {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Map context menu Customize](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_3.png)

You can change the order or hide items from the menu *Actions* in the *map context menu*. A total of 16 actions are suggested.  

- You can move the three most useful actions to the top of the *Main actions* list.
- The rest of the menu can be customized for each profile separately in the *Additional actions* and *Hidden* sections.  

Available types of actions:

- **<Translate android="true" ids="main_actions"/>**. The section has only 4 buttons, three of which can be customized, and Actions, which remains unchanged.  
- **<Translate android="true" ids="additional_actions"/>**. You can access these actions by tapping the *Actions* button.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Moving actions to this section does not stop them from working. They just don't appear in the Actions menu.  


## Related Articles {#related-articles}

- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)
- [Points on the map](./point-layers-on-map.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)
- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in April 2025*
