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

This plugin will help you participate in the OpenStreetMap project to create a detailed free geographical map of the world.


## Overview
 
[OpenStreetMap](http://openstreetmap.org/) is a global community that aims to create a comprehensive map of the world and provide up-to-date open-source data to every user, and the **OpenStreetMap (OSM) editing plugin** allows you to contribute to the community.  
With **OsmAnd** and the **OSM editing plugin**, you can easily contribute your own information to OpenStreetMap.org, such as creating or modifying POIs, adding or commenting notes, and uploading recorded GPX tracks.  


## Setup

To use OpenStreetMap editing plugin, you need to make the following settings:    

1. Enable [Plugin](../plugins/index.md#enable--disable).  
2. Set OpenStreetMap editing for the required [profile](../personal/profiles.md).
3. Enable the display of *OSM notes (online)* and/or *OSM edits* on the map in the [Configure map menu](https://docs.osmand.net/docs/user/map/configure-map-menu/).


## Settings

**Login settings**

- Login or Sign Up [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550).
- Login in OsmAnd (OAuth / password) - preferred OAuth.


**Plugin settings**

- **Login to OpenStreetMap** *(Android)* / **<Translate ios="true" ids="shared_string_account"/>** *(iOS)*. Log in to upload new or modified changes. Use the OAuth method or your [OSM username and password](https://www.openstreetmap.org/login). 
- **<Translate android="true" ids="offline_edition"/>** *(Android & iOS)*. If this setting is enabled, the changes are first saved locally (*Save* button) and uploaded upon request, If the setting is disabled, the changes are uploaded immediately (*Upload* button).
- **<Translate android="true" ids="use_dev_url"/>** *(Android only)*. Allows you to enable [dev.openstreetmap.org](https://dev.openstreetmap.org/) instead of [openstreetmap.org](http://openstreetmap.org/) to test uploading OSM Note / POI / GPS tracks. When enabled, you are automatically logged out of OpenStreetMap.org. This setting is only available in the list when the *OsmAnd Development plugin* is enabled.
- **<Translate android="true" ids="map_updates_for_mappers"/>** *(Android & iOS)*. This setting allows you to check if [OsmAnd live](../personal/maps.md#free-for-osm-mappers) is available to you as an active mapper. If you actively contribute to OpenStreetMap.org (at least 30 changes in the last two months), you may be eligible for hourly, monthly and unlimited map updates.  
- **<Translate android="true" ids="layer_osm_edits"/>** *(Android & iOS)*. Press it to open [Menu → My Places → OSM edits](../personal/myplaces.md). This tab lists your unedited OSM notes. The available actions with the note: *Upload*, *Show on map*, *Modify OSM note*, *Delete*. Uploaded or deleted notes are no longer displayed in the list. 

:::info info
The plugin settings are global and apply to all profiles.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*    

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,shared_string_settings,app_profiles,plugins,product_title_osm_editing"/>*   

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  


## POI 

### Create / Modify POI 

The OpenStreetMap editing plugin allows you to create new objects on the map, they are called [points of interest or POI](../map/point-layers-on-map.md#points-of-interest-poi). You can add to the map, for example, a new store, or a favorite landmark, if you own a recently opened business, you can also add it to the map to allow people to find you.  

1. Tap on the map where the new POI will be placed (or tap on a not uploaded POI).
2. Tap [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
3. Choose [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), and add its name and other information such as hours of operation, website, etc. When you select a not uploaded POI, *Create POI* changes to *Modify POI*. 
4. Depending on the [Offline editing](#plugin-settings) setting, you can save the data locally or [upload it](../map/map-context-menu#-upload-poi--osm-note).    

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

To view an OSM editing layer on a map, enable its display on the map in the [Map Context menu](../map/map-context-menu.md#-upload-poi--osm-note):  
*<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

</TabItem>

<TabItem value="ios" label="iOS">

o view an OSM editing layer on a map, enable its display on the map in the [Map Context menu](../map/map-context-menu.md#-upload-poi--osm-note):  
*<Translate ios="true" ids="menu,configure_map,osm_edits_offline_layer"/>*

</TabItem>

</Tabs>

:::info NOTE
You will be able to see the new POI on the OsmAnd map for one hour after adding it to your OSM project if you have [OsmAnd live](../personal/maps.md#osmand-live).
:::  

### Offline modifications 

You can view, upload or delete OSM in My Places - OSM POIs. You can also switch on / off the layer with offline modifications. You also can export OSM POIs changes as [OSC file](https://wiki.openstreetmap.org/wiki/OsmChange) and import into JOSM.


## GPS Track

The GPS tracks you have recorded are useful for:

- **For mappers**. Tracks can be used for drawing maps of all kinds of paths.
- **For navigation**. Based on the GPX file data you uploaded, navigation applications and special devices can calculate tracks.
- **To share information** about the tracks and routes you recorded on [OpenStreetMap based maps](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).  

:::caution Android only
This plugin is available only for the **Android version** of OsmAnd app.
:::

:::info NOTE
Your tracks will be added to [OSM traces](https://www.openstreetmap.org/traces) in an hour, where they will be available for viewing, searching, and using by you and other users.
:::  

### Upload GPS track

To [upload the GPS track](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks):  
- Select the required track from [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*](../personal/tracks.md).  
- Tap [Options button](../map/track-context-menu.md#options) of [Track Context menu](../map/track-context-menu.md).  
- Choose *<Translate android="true" ids="upload_to_openstreetmap"/>*, or Tap the three-dot menu next to the track name and select *Export*.  

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)   

**Settings:**
- **<Translate android="true" ids="shared_string_description"/>**. Allows you to add a description to the track. The description applies to all selected tracks. If you enter nothing in the field, the track names for each separate track are used as descriptions.  
- **<Translate android="true" ids="gpx_tags_txt"/>**. Allows you to add any tags to identify the track. The default tag is "osmand", the user can enter additional tags separated by commas.  
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Track visibility for OSM users:  
   - *Public* means that the track is publicly available and displayed in raw form in your GPS tracks, GPS track lists, and timestamped track lists. The data transmitted through the API is not referenced with your track page. Trace point timestamps are not available through the public GPS API and track points are not ordered chronologically.
   - *Identifiable* means that the track will be publicly displayed in your GPS track points and public GPS track lists, which means other users will be able to download the raw track and associate it with your username. Public timestamped track points data from the GPS API passed through the track points API will link to your original track page.
   - *Traceable* means that the track is not displayed in public lists, but the processed track points with timestamps from it (which cannot be linked to you directly) are loaded from the public GPS API.
   - *Private* means that the track is not displayed in public lists, but the track points from it in non-chronological order are available through the public GPS API without timestamps.
- **<Translate android="true" ids="login_account"/>** - [OSM account](https://www.openstreetmap.org/login).

:::info
You can select more than one track to upload to OSM. To do this, tap the *Upload to OpenStreetMap* icon at the bottom of the screen, select tracks using the checkbox, tap *Upload* and then *Continue*.
:::

### Generate OBF file

You can create an OBF file with [OsmAndMapCreator](../versions/map-creator/) if you have a large GPX track database. This is a collection of tracks from osmand.net with the 'gpsies' tag, a collection of downloaded tracks from OpenStreetMap or your own collection. 

## OSM Notes

The OSM Notes feature allows you to add notes to the map. In these notes you can describe mistakes or write about missing information in the OpenStreetMap data. You and other users can leave comments on your notes.  
You can help other users by checking their questions or issues, giving comments and then closing the resolved notes.  
Read more about the OpenStreetMap Notes [here](https://wiki.openstreetmap.org/wiki/Notes).

### Display OSM Notes  

To be able to edit OSM notes, enable their display on the map in the [Configure map menu](../map/configure-map-menu.md)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,configure_map,osm_notes_online_layer"/>*  

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>


### Create / Modify OSM Note

To create a note, you don't need to log in to OpenStreetMap.org, you can send it anonymously.
- Tap the map where the new OSM note is to be placed (or tap a not uploaded note), and select [Actions](../map/map-context-menu.md#actions).
- If you want to add information to an existing note or not uploaded note, edit a comment, or close a note, tap the OSM note on the map and select the [required action](../map/map-context-menu.md#-comment--close-osm-note).
- You can upload changes as soon as you are available online. You can also undo changes before they are uploaded.  

:::info
The uploaded OSM Notes are not visible on OsmAnd maps in offline mode.
:::
