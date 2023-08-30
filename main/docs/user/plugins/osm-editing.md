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

## Overview

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) is a global community that aims to create a detailed free geographical map of the world and provide up-to-date open-source data to every user, and the OpenStreetMap editing plugin allows you to contribute to the community.  

With OsmAnd and the OSM editing plugin, you can easily contribute your own information to OpenStreetMap.org, such as to create or modify [POIs](#create--modify-poi), add or comment [notes](#create--modify-osm-note), and upload recorded GPX [tracks](#upload-gps-track).

## Setup

To use OpenStreetMap editing plugin, you need to make the following settings:    

1. Enable [Plugin](../plugins/index.md#enable--disable).  
2. Set OpenStreetMap editing  in any [profile](../personal/profiles.md).
3. Enable the display of *OSM notes (online)* or *OSM edits* on the map in the [Configure map menu](../map/configure-map-menu.md/).


## Settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*    

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*   
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*   

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  

**Settings**  

The plugin settings are global and apply to all profiles.


**Login settings**

- Login or Sign Up to [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550).
- Use the OAuth method or your OSM username and password. OAuth is preferred.  


**Plugin settings**

- **Login to OpenStreetMap**. Login to upload new or modified changes. Use the safe OAuth method or your [OSM username and password](https://www.openstreetmap.org/login). For iOS, the button for the OAuth method is available only for users with a supported version of iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. If this setting is enabled, the changes are first saved locally (*Save* button) and uploaded on request. If it is disabled, the changes are uploaded immediately (*Upload* button).
- **<Translate android="true" ids="use_dev_url"/>** *(Android only)*. Allows you to enable [dev.openstreetmap.org](https://dev.openstreetmap.org/) instead of [openstreetmap.org](http://openstreetmap.org/) to test uploading OSM Note / POI / GPS tracks. When enabled, you are automatically logged out of OpenStreetMap.org. This setting is only available in the list when the *OsmAnd Development plugin* is enabled.
- [**<Translate android="true" ids="map_updates_for_mappers"/>**](#free-live-updates-for-mappers). 
- **<Translate android="true" ids="layer_osm_edits"/>**. Tap it to open [*Menu → My Places → OSM edits*](../personal/myplaces.md). This tab lists your unedited OSM notes. The following actions are available with the note: *Upload*, *Show on map*, *Modify OSM note*, *Delete*. Uploaded or deleted notes are no longer displayed in the list.  

:::note
If you have an [OsmAnd Pro](../purchases/android.md#pro-features) subscription, changes made to OSM will appear on your OsmAnd map within one hour. Make sure that [Live updates](../personal/maps.md#osmand-live) are enabled.
:::  


### Free map updates for mappers

The <Translate android="true" ids="map_updates_for_mappers"/> setting allows you to enable **[OsmAnd live](../personal/maps.md#free-for-osm-mappers)** if you are active OpenStreetMap contributor. So you could enjoy free hourly map updates, unlike standard monhtly map updates. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>


### OSM Editing Layer  

You can enable or disable as a separate layer the display of OSM modifications, such as OSM notes (online), OSM edits, Fixme tags, Note tags, Icons at low zooms, in the [Configure map](../map/configure-map-menu.md) section of the main menu.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>


## Create / Modify POI  

The OpenStreetMap editing plugin allows you to create new objects on the map called [points of interest or POI](../map/point-layers-on-map.md#points-of-interest-poi). You can put on a map a new store, your favorite landmark, a bench, or a shelter, so people can find them.  

1. Tap on the map where the new POI will be placed (or tap on a not uploaded POI).
2. Tap [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
3. Choose [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), and add its name and other information such as hours of operation, website, etc. When you select a not uploaded POI, *Create POI* changes to *Modify POI*. 
4. Depending on the [Offline editing](#settings) setting, you can save the data locally or [upload it](../map/map-context-menu#-upload-poi--osm-note).    

#### Add tags

You can easily add OSM [tags](https://wiki.openstreetmap.org/wiki/Tags) to the POI. Аfter entering a few characters into the search bar, the program will prompt possible tags.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add POI tag Android 1](@site/static/img/plugins/osm-editing/add_poi_tag_andr_1.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

#### Offline modifications  

You can view, upload to OSM or delete POIs in *My Places → OSM Edits*. You can also export your OSM POIs changes to an [OSC file](https://wiki.openstreetmap.org/wiki/OsmChange) and import it into [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).  

## Create / Modify OSM Note

The OSM Notes feature allows you to add notes to the map. In these notes you can describe mistakes or write about missing information in the OpenStreetMap data. You and other users can leave comments on your notes.  
You can help other users by checking their questions or issues, giving comments and then closing the resolved notes.  
Read more about the OpenStreetMap Notes [here](https://wiki.openstreetmap.org/wiki/Notes).  

To create a note, you don't need to log in to OpenStreetMap.org, you can send it anonymously.
- Tap the map where the new OSM note is to be placed (or tap a not uploaded note), and select [Actions](../map/map-context-menu.md#actions).
- If you want to add information to an existing note or not uploaded note, edit a comment, or close a note, tap the OSM note on the map and select the [required action](../map/map-context-menu.md#-comment--close-osm-note).
- You can upload changes as soon as you are available online. You can also undo changes before they are uploaded.  

:::info
The uploaded OSM Notes are not visible on OsmAnd maps in offline mode.
:::


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To edit OSM notes (you can comment or close them), enable display of OSM notes on the map in the [Configure map menu](../map/configure-map-menu.md):  
*<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

To be able to edit OSM notes, enable their display on the map in the [Configure map menu](../map/configure-map-menu.md):  
*<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*  

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>


## GPS Track

The GPS tracks you have recorded are useful for:

- **Mappers**. Tracks can be used for drawing maps of all kinds of paths.
- **Navigation**. Based on the GPX file data you uploaded, navigation applications and special devices can calculate tracks.
- **To share information** about the tracks and routes you recorded on [OpenStreetMap based maps](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).  

:::info NOTE
Your tracks will be added to [OSM traces](https://www.openstreetmap.org/traces) in an hour, where they will be available for viewing, searching, and using by you and other users.
:::  


### Upload GPS track


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To [upload the GPS track](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks):  
- Select the required track from [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*](../personal/tracks.md).  
- Tap [Options button](../map/track-context-menu.md#options) of [Track Context menu](../map/track-context-menu.md).  
- Choose *<Translate android="true" ids="upload_to_openstreetmap"/>*, or Tap the three-dot menu next to the track name and select *Export*.  

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)   

</TabItem>

<TabItem value="ios" label="iOS">

To [upload the GPS track](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks):  
- Select the required track from [*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*](../personal/tracks.md) → &#8230; → upload track icon(belowed menu).  
- Tap [Options button](../map/track-context-menu.md#options) of [Track Context menu](../map/track-context-menu.md).  
- Choose *<Translate ios="true" ids="upload_to_openstreetmap"/>*, or Tap the three-dot menu next to the track name and select *Upload*.  

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)  

</TabItem>

</Tabs>



**Settings:**
- **<Translate android="true" ids="shared_string_description"/>**. Allows you to add a description to the track. The description applies to all selected tracks. If you enter nothing in the field, the track names for each separate track are used as descriptions.  
- **<Translate android="true" ids="gpx_tags_txt"/>**. This item in the settings section allows you to add any tags to identify the track. The default tag is "osmand", the user can enter additional tags separated by commas.  
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

You can create an OBF file with [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) if you have a large GPX track database. This is a collection of tracks from osmand.net with the 'gpsies' tag, a collection of downloaded tracks from OpenStreetMap or your own collection. 
