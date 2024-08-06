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

<InfoIncompleteArticle/>


## Overview

Map Context menu provides information about selected object on the map. It can also be used to build a route to a selected location.  

In order to open Context menu you should tap the object on the Map. There are two types of map contet menu: selecting an object - by short tap, selecting any precise point on the map - by long-tap.


### Select an object (short tap)

Context menu will appear when you **short tap** on the marked object on the Map. In this case context menu provides you the information of the object name & icon (how it is marked on the map),  address, distance and direction from your current position. By this method you can select POI, Favorite, Transport stop, Marker or Map Object.

**NOTE**. Selectable map objects are OpenStreetMap [node](https://wiki.openstreetmap.org/wiki/Node) or [way](https://wiki.openstreetmap.org/wiki/Way).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs> 


### Select any point (long-tap)
Context menu will appear when you hold at any point on the Map with **long-tap**. In this case context menu provides you the information of geographical point address, distance and direction from your current position. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 
 
![Context menu long_tap_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu long_tap_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs> 


### Select route

Short tap a [GPX-track](../map/tracks/index.md) on the map  opens [Context track menu](../map/tracks/track-context-menu.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs> 


### Hide context menu

To hide the context menu:
- Click on any empty place (to not open menu once again) on the map
- Drag down by the top of menu 


## Details

In order to gain more details about object you need to click on the "Details" button in the Context menu or move the panel up. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/context_menu_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>


### Object info

This panel includes additional information about the object. This info could be copied to the buffer by tap it. Additional information about object includes:

- [Alternative names](#alternative-names)
- [Coordinates](../map/map-context-menu.md#coordinates)
- [Nearby Wikipedia articles](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Nearby POI](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Public Transport routes (on transport stops)](../map/map-context-menu.md#public-transport-routes)
- [Favorites / Track Points from the same group](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [OpenStreetMap link](../map/map-context-menu.md#openstreetmap-link)
- [Article image / description](../map/map-context-menu.md#article-image--description)
- [Online photos](../map/map-context-menu.md#online-photos)
- [OpenStreetMap Details](https://wiki.openstreetmap.org/wiki/Map_features)
    - [Website](https://wiki.openstreetmap.org/wiki/Key:website)
    - [Phone number](https://wiki.openstreetmap.org/wiki/Key:contact)
    - [Working hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
    - [Fee](https://wiki.openstreetmap.org/wiki/Key:fee)
    - [Accessibility](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
    - [Width](https://wiki.openstreetmap.org/wiki/Key:width) / [Height](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternative names  

<InfoAndroidOnly />

OsmAnd displays additional names of POIs in Map context menu. First is shown the name in the [display language](../personal/global-settings.md#display-language) or from system list of preferred languages, alternative names are displayed in the drop-down menu.   

![Alternative names Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternative names Android](@site/static/img/map/alternative_names_andr.png)  


### Coordinates

In the Context menu, you can find [geographical coordinates](../search/search-coordinates.md#coordinate-format) of a point in various formats and also shareable OsmAnd and [OpenStreetMap Links](../map/map-context-menu.md#openstreetmap-link) (the last option is available only when the [OpenStreetMap editing plugin](../plugins/osm-editing.md) is enabled). If you expand coordinates section and long-tap any line from the list, its values will be automatically copied to the clipboard (**Android**) or the *Copy* option becomes available in the pop-up message (**iOS**).  

|Coordinates format||
|:------|:------|
|DDD.DDDDD (Plain Decimal Degress)   <br /> DDD.DDDDD (N/S, E/W comma)   <br /> DDD MM.MMM   <br /> DDD MM SS.S   <br /> [UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)    <br /> [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)   <br /> [MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)   <br /> [Swiss Grid CH1903 and CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)   <br /> [OsmAnd Web Link](https://osmand.net/map)   <br /> [OpenStreetMap Web Link](../map/map-context-menu.md#openstreetmap-link)| ![Coordinates](@site/static/img/map/map_context_menu_Coordinates.png) |

OsmAnd Web Link can be automatically recognized by OsmAnd (example: https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771). Both OsmAnd and [Openstreetmap links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) are opened on corresponding sites with a pin mark to the place of interest.  

### Nearby POIs/ Wikipedia

These sections displays nearby [Wikipedia articles](../plugins/wikipedia.md) or [Points of Interest](../map/point-layers-on-map.md#points-of-interest-pois-on-the-map) with '<Translate android="true" ids="shared_string_show_on_map"/>' and '<Translate android="true" ids="search_more"/>' to display and [search](../search/search-poi.md) all other POI & Wikipedia articles.

Clicking to 'Nearby POIs/ Wikipedia articles' opens a points list (Wikipedia and POIs). A tap to one of these points from a point list moves the map to this point (POI or Wikipedia) with the opening point Map Context menu.

**NOTE**. [<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) will appear only if you previously downloaded special maps with [Wikipedia articles for this area](../plugins/wikipedia.md#download-wikipedia).

![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)


### Public Transport Routes

Shown info about Public transport routes for chosen Transport stop. Information about Public transport Context menu and actions with it read [here](../map/public-transport.md#transport-routes-context-menu).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs> 


### Favorites / Track Points from the group

This is a list of all points in one group for a [Favorite](../map/point-layers-on-map.md#favorites-on-the-map) or Waypoint. By clicking, the entire list of points of one group expands, when clicking on a point from the list, the map moves to the selected point.

![Favorite list](@site/static/img/map/favorite_list_android.png) ![Favorite list full](@site/static/img/map/favorite_list_full_android.png) 


### Article description

This part contains a part of the description from [Wikipedia article](../plugins/wikipedia.md), [Favorite](../personal/favorites.md) or Waypoint description, by clicking you can open full description.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Description list](@site/static/img/map/description_list_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Description list](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs> 


### OpenStreetMap link

OpenStreetMap link provides direct link to the OpenStreetMap object where you can find complete information about it (https://www.openstreetmap.org/node or https://www.openstreetmap.org/way).

![OSM link](@site/static/img/map/context_menu_osm_link.png) ![OSM link](@site/static/img/map/context_menu_osm_link_1.png)

### Online photos

In *Online photos* (iOS *Images nearby*) section of map context menu, you can view POI photos from various web sources. Such as [Mapillary](../plugins/mapillary.md) - provides the best and the closest photos from Street-Level view, [Wikimedia](https://www.wikimedia.org/) - displays images from OpenStreetMap with tags **image**, **wikimedia**.  
You can swipe photos to the left to see more items. Tap the image to open it in full size or [browse](../map/point-layers-on-map.md#street-level-imagery) street level photos on the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Images nearby context menu Android](@site/static/img/map/images_nearby_andr_1.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Images nearby context menu iOS](@site/static/img/map/images_nearby_ios_1.png)

</TabItem>

</Tabs>

### * Audio/Video Note

<InfoAndroidOnly />

You can find additional information about [Audio / Video notes](../plugins/audio-video-notes.md) in Details Menu and buttons (Delete, Play, Show) in Context menu. 

For Image notes in the Details Menu an image is displayed; when you click on the image it opens in the editor. There is information about the date and the time when note was made. In the Context menu, there are 'Show' and 'Delete' buttons to open an image in the editor or delete it.
 
![Image list](@site/static/img/map/image_list_android.png) ![Video list](@site/static/img/map/video_list_android.png)


## Actions

It is a set of specific manipulations that can be performed on a point or object. This menu is split into two parts: visible section consists of maximum 3 actions and other actions are accessible by 'Actions' button. You can customize (Android) the order of actions in [General settings](#customize-android-advanced).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Actions menu Android](@site/static/img/map/actions_menu_android.png) ![Actions additional menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions menu iOS](@site/static/img/map/actions_menu_ios.png)  ![Actions additional menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs> 


### Add / Edit Favorite

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit favorite action Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit favorite action iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs> 

In the context menu there are options to **add** or to **edit** the selected point / object to the [favorites list](../personal/myplaces.md). 

- In order to **add**, you need to select a point / object, click on the 'Star' icon (with signature Add) and enter all the necessary information.  

- In order to **edit** information about favorite point you need to turn on 'Show on the map' (Menu → Me places → Favorites) then press on it and in the Context menu instead of 'Star' icon will appear 'Pancil icon' (with signature Edit).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - adds a selected point to the favorites list.


### Add / Edit Marker

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs> 

It is possible to mark a point or an object in order to make it easier to plan navigation. You just need to click on the 'flag' icon in the menu (Android), 'arrow' (iOS) - displays direction and distance to the selected point from your current location.

Actions:
- [*<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>*](../personal/markers.md) - puts a new marker on the selected point.
- *Mark passed* (Android) / *Dismiss* (iOS) - deactivates marker and puts it to the History.
- *Make active* (Android) - moves marker to the top position (on the top panel).
- *Restore marker* (Android) - moves marker from History to active list.

Read more about [markers](../personal/markers.md).


### Share

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

- ***Send***. Sends text through apps available on your device. Includes all information about the location: My location name or the name of the selected POI, address, coordinates, and geo location as a link. 
- ***Copy***. Copies all location information (My location name or name of the selected POI, address, coordinates, and geo location as a link) to the clipboard.  
- ***Copy address***. Copies only address information to the clipboard.
- ***Copy POI name***. Copies only POI name or address if there is no name to the clipboard. 
- ***Copy coordinates***. Copies only coordinates information to the clipboard. 
- ***geo***. Opens a list of available applications that support geo-locations. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). --> 
- ***QR-code*** (*Android*). Generates a link to the selected location in a QR code.

<!--
- ***Save Image*** (iOS) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (iOS) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (iOS) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (iOS) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Directions To / From 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Directions Android](@site/static/img/map/action_directions_android.png)

![Multiple Directions Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Directions iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs> 

In order to start navigation or route planning, you need to select destination first with [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). In case you already have a destination point, the menu will suggest you to replace the destnation point or to insert as another intermediate or start point. 

It is also possible to select 'From' Destination first via Map context menu (<Translate android="true" ids="context_menu_item_directions_from"/>).

**NOTE**. If you tap **Start navigation** - *From* point will be discarded as application enters in Navigation mode. In order to preserve a route, don't click "Start navigation" and [swipe down](#hide-context-menu)  "Route preparation" menu.

Read more about [navigation](../navigation/setup/route-navigation.md).


### Search nearby

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Search action Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search action iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs> 

With this context menu action it is possible to search around specific location on the map. 
Read more about [search](../search/index.md) functionality.


### Avoid road

Using Map context menu, you can add a specific road to the list of non-used for routing roads. That will affect [Route preparation](../navigation/setup/route-navigation.md).  
To delete previosly selected roads from *[Avoid roads list](../navigation/routing/osmand-routing.md#avoid-roads-menu)* tap a sign, choose *Remove* (**Android**) or *Dismiss* (**iOS**).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road on the map Android](@site/static/img/map/action_avoid_android.png) ![Dismiss avoided road Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map iOS](@site/static/img/map/avoid_route_ios_1.png) ![Dismiss avoided road iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

:::note
Avoid roads function is global and affects all *[Routing types](../navigation/routing/routing-types.md)* (except *[Online routing](../navigation/routing/online-routing.md)*).  
:::


### Change object position

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

Almost every created object by user is moveable i.e. Marker, Favorite, Created POI, Audio/Video Note or Track Waypoint. First select an object on the map and then use *<Translate android="true" ids="change_markers_position"/>* menu to move it to a new location.


### Plan a route

![Action Plan a route Android](@site/static/img/map/action_plan_route_android.png)

You can start a route planning from a selected point via object context menu.

Read more about ['Plan a route'](../plan-route/create-route.md) tool.


### Update / Download Online Maps

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

To update or download online maps (tiles) at specific location, you can use object context menu:  
**Android**: *<Translate android="true" ids="shared_string_download_map"/>* and for *Update* go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
Please refer to [full instruction](../map/raster-maps.md#download--update-tiles).   

![Action Download online map Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

To update or download online maps (tiles) at specific location, you can use object context menu:  
**iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* and *<Translate ios="true" ids="update_tile"/>*.   
Please refer to [full instruction](../map/raster-maps.md#download--update-tiles).  

![Action Download online map iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs> 


### Update / Download Vector Maps

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

In case there is no offline map present at selected location, for example map object menu was opened via Search or via specific Favorite, then the smallest possible offline map will be suggested to [download](../start-with/download-maps.md#download---map-context-menu).  

**iOS**: If you already have [downloaded](../start-with/download-maps.md) OsmAnd maps (vector or terrain), it is possible to updated them via context 
menu. You will need to select the region on the map first - click on any location on worldwide zoom 3-7. 

**NOTE**: if you have opened context menu for map region (region is higlighted), you will be able to see *<Translate android="true" ids="rendering_category_details"/>* about it: type and size of a available map, link to a wikipedia page, language, population and other.


### * Add / Delete Parking point

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

Any selected location on the map could be marked as [a parking position](../plugins/parking.md). In order to delete parking position, you can open context menu associated with parking location.

Requires [Parking position plugin](../plugins/parking.md).


### * Add / Edit  Track waypoint

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

You can add waypoints to a recorded track or to the current track recording using the Map Context Menu.  

- Select a location on the map with a [long-tap](../map/map-context-menu.md#select-any-point-long-tap). 
- In the *Map Context Menu* that opens, choose *Actions → Add track waypoint*.
- The list displays the [tracks](../map/tracks/index.md#display-tracks-on-the-map) recorded and shown on the map, as well as the [current track recording](../plugins/trip-recording.md#from-widget), to which you can add the selected waypoint.
- You can add waypoints to a track that is not yet active for recording, in which case the inactive track switches from the *Start state* to the *Resume state*.
- [Fill in](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) the required data and save the waypoint. 
- You can configure the [Quick Actions](../widgets/quick-action.md) by adding a waypoint to the *Add track waypoint*. 

Requires [Trip recording plugin](../plugins/trip-recording.md).


### * Create / Modify POI

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs> 

With OSM Editing plugin, you can create and modify most of the POIs present on [OpenStreetMap](https://www.openstreetmap.org/).

&nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [creates a new POI](../plugins/osm-editing.md#how-to-add-poi) at selected location.

&nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifies selected POI](../plugins/osm-editing.md#how-to-modify-poi).

Requires [OSM Editing plugin](../plugins/osm-editing.md).


### * Open OSM Note

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

Requires [OSM Editing plugin](../plugins/osm-editing.md).


### * Comment / Close OSM Note

![Comment OSM Note Android](@site/static/img/map/action_comment_note_android.png) ![Reopen OSM Note Android](@site/static/img/map/action_reopen_note_android.png)

You can [comment](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [resolve](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) and reopen
OpenStreetMap Notes via objects context menu.

Requires [OSM Editing plugin](../plugins/osm-editing.md).


### * Upload POI / OSM Note

![Upload POI Android](@site/static/img/map/action_poi_upload_android.png) ![Upload OSM Note Android](@site/static/img/map/action_note_upload_android.png)

In case you use 'Offline mode' to add / edit POI or OSM Note, you will need to upload the changes to OpenStreetMap. By default 'Offline mode' is on to avoid accidental changes of public database. You can upload or delete change via created object context menu.

Requires [OSM Editing plugin](../plugins/osm-editing.md).


### * Record AV Note

<InfoAndroidOnly />

![Action Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Records or takes a media note at selected point on the map.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - makes a [audio note](../map/point-layers-on-map.md#-audio--video-points-android) on selected point (creates new point on the overlay with audio icon).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - makes a [video note](../map/point-layers-on-map.md#-audio--video-points-android) on selected point (creates new point on the overlay with video icon).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - makes a [photo point](../map/point-layers-on-map.md#-audio--video-points-android) on the map.

Requires [Audio / Video note plugin](../plugins/audio-video-notes.md).


## Customize

<InfoAndroidOnly/>  

You can change the order or hide items from the *Actions* menu in the *Map context menu*. A total of 16 actions are suggested.  
- You can move the three most useful actions to the top of the *Main actions* list.
- The rest of the menu can be customized for each profile separately in the *Additional actions* and *Hidden* sections.  

Available types of actions:  
- **<Translate android="true" ids="main_actions"/>** - The section has only 4 buttons, three of which can be customized, and Actions, which remains unchanged.  
- **<Translate android="true" ids="additional_actions"/>** - You can access these actions by tapping the *Actions* button.  
- **<Translate android="true" ids="shared_string_hidden"/>** - Moving actions to this section does not stop them from working. They just don't appear in the Actions menu.  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*  

![Map context menu Customize](@site/static/img/map/map_context_menu_customize_1.png)   ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_2.png)   ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_3.png)


## Related Articles

- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)
- [Points on the map](./point-layers-on-map.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)
- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in January 2023*
