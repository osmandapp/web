---
sidebar_position: 8
title:  OpenStreetMap editing
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

The plugin helps you contribute to the development of OpenStreetMap. It is a community driven, global public domain mapping project.

## Overview
 

[OpenStreetMap](http://openstreetmap.org/) is a global community that aims to create a comprehensive map of the world and provide up-to-date open-source data to every user, and the **<Translate android="true" ids="osm_editing"/> plugin** allows you to contribute to the community.

Just launch the **OsmAnd Maps app** and update information about different locations.   
Make OpenStreetMap contributions like creating or modifying OSM POI objects, opening or commenting OSM notes, and contributing recorded GPX files in OsmAnd by supplying your username and password. 


## Setup

To use OpenStreetMap editing, you need to make the following settings:    

1. Enable [Plugin](../plugins/index.md#enable--disable).  
2. Set OpenStreetMap editing for the required [profile](../personal/profiles.md).

### Login

- Login and register on openstreetmap.org.
- Login in OsmAnd (OAuth / password) - preferred OAuth.


## How to Contribute 

For what reason ? 

The OpenStreetMap editing plugin allows you to create new objects on the map, they are called [points of interest or POI](../map/point-layers-on-map.md#points-of-interest-poi). You can add to the map, for example, a new store, or a favorite landmark, if you own a recently opened business, you can also add it to the map to allow people to find you.   


### Add / Modify POI 

For what reason ? 

1. Tap the map where the new POI is to be placed.
2. Tap [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
3. Choose [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), and add its name and other information such as hours of operation, website, etc.
4. Register at [OpenStreetMap](http://openstreetmap.org/).
5. Provide your OSM account information to make changes.  

:::info NOTE
You will be able to see the new POI on the OsmAnd map for one hour after adding it to your OSM project if you have [OsmAnd live](../personal/maps.md#osmand-live).
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

To view an OSM editing layer on a map, tapping that editing layer opens a [Map Context menu](../map/map-context-menu.md#-upload-poi--osm-note):  
*<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

</TabItem>

<TabItem value="ios" label="iOS">


To view an OSM editing layer on a map, tapping that editing layer opens a [Map Context menu](../map/map-context-menu.md#-upload-poi--osm-note):  
*<Translate ios="true" ids="menu,configure_map,osm_edits_offline_layer"/>*

</TabItem>

</Tabs>

### Upload GPX track

For what reason ? 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

1. Enable [Trip recording plugin](../plugins/trip-recording.md).
2. Record a track.
3. Tap [Options button](../map/track-context-menu.md#options) of [Track Context menu](../map/track-context-menu.md) and choose <Translate android="true" ids="upload_to_openstreetmap"/>.  

Available settings:  

- **<Translate android="true" ids="shared_string_description"/>** - allows to add description to the track.  
- **<Translate android="true" ids="gpx_tags_txt"/>** - allows you to add any tags to identify the track. The default tag is "osmand", the user can enter additional tags separated by commas.  
- **<Translate android="true" ids="gpx_visibility_txt"/>** - track visibility for OSM users:  

 &nbsp;*Public* means that the track is public and displayed in raw form in your GPS tracks, GPS track lists, and timestamped track lists. The data transmitted through the API is not associated with your track page. Trace point timestamps are not available through the public GPS API and track points are not ordered chronologically.
 
 &nbsp;*Identifiable* means that the track will be a public display in your GPS track points and public GPS track lists, which means other users will be able to download the raw track and associate it with your username. Public timestamped track points data from the GPS API passed through the track points API will link to your original track page.
 
 &nbsp;*Traceable* means that the track is not displayed in public lists, but the processed track points with timestamps from it (which cannot be linked to you directly) are loaded from the public GPS API.
 
 &nbsp;*Private* means that the track is not displayed in public lists, but the track points from it in non-chronological order are available through the public GPS API without timestamps.
 
- **<Translate android="true" ids="login_account"/>** - [OSM account](https://www.openstreetmap.org/login).



:::info NOTE
OSM editing must be enabled. In one hour, your track will be added to [OSM traces](https://www.openstreetmap.org/traces) for you to view and for other users to find and use.  
You can take part in the work on the global map. Just share the tracks you've made. They become part of the [OpenStreetMap](http://openstreetmap.org/) project. Be sure to mark objects and roads.
:::  


![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">


:::info NOTE
This option is not available for iOS version of OsmAnd app.
:::  

</TabItem>

</Tabs>

### Create / Close OSM Note

For what reason ? 

The OpenStreetMap editing plugin allows you to report errors on the map.

1. Tap the map where the new OSM note is to be placed or tap an existing note.
2. Tap [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions) or [Comment](../map/map-context-menu#-comment--close-osm-note) if you want to add an error report to an existing note.
3. Choose [<Translate android="true" ids="context_menu_item_open_note"/>](../map/map-context-menu#-open-osm-note) and add the necessary information. 
5. For a new error report to appear on the map, tap the Upload button.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To view the OSM editing layer, you can switch on  [online layer - OSM notes](../map/configure-map-menu.md#map-layers) on the map:  
*<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

To view the OSM editing layer, you can switch on  [online layer - OSM notes](../map/configure-map-menu.md#map-layers) on the map:  
*<Translate ios="true" ids="menu,configure_map,osm_notes_online_layer"/>*  

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>


## Plugin settings

:::caution NOTE
The plugin settings are global and apply to all profiles.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Use the following path to open the plugin's settings:  
*<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  

- &nbsp;**Login to OpenStreetMap** - Log in to upload changes. Use the OAuth method or your [OSM username and password](https://www.openstreetmap.org/login). 
- &nbsp;**<Translate android="true" ids="offline_edition"/>** - enable or disable offline editing. Users can make and save OSM edits and after upload its with Internet connection.
- &nbsp;**<Translate android="true" ids="use_dev_url"/>** - enable or disable [dev.openstreetmap.org](https://dev.openstreetmap.org/) instead of [openstreetmap.org](http://openstreetmap.org/) to testing uploading OSM Note / POI / GPX.
- &nbsp;**<Translate android="true" ids="map_updates_for_mappers"/>** - allows [OsmAnd live](../personal/maps.md#osmand-live) updating for mappers.
- &nbsp;**<Translate android="true" ids="layer_osm_edits"/>** - allows to open OSM edits menu: [Menu → My Places → OSM edits](../personal/myplaces.md)   

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Use the following path to open the plugin's settings:  
*<Translate ios="true" ids="menu,shared_string_settings,app_profiles,plugins,product_title_osm_editing"/>*  

- &nbsp;**<Translate ios="true" ids="shared_string_account"/>** - [Log in to upload new or modified changes first. Use your OSM username and password.](https://www.openstreetmap.org/login) 
- &nbsp;**<Translate ios="true" ids="osm_offline_editing"/>** - enable or disable offline editing. Users can make and save OSM edits and after upload its with Internet connection.
- &nbsp;**<Translate ios="true" ids="osm_edits_title"/>** - allows to open OSM edits menu: [Menu → My Places → OSM edits](../personal/myplaces.md)  

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios.png)

</TabItem>

</Tabs>  
