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

Make contributions to OpenStreetMap.


<Translate android="true" ids="osm_editing"/> plugin allows you to make contributions to OpenStreetMap, a global community aimed at creating a comprehensive map of the world and providing up-to date open-source data to every user.

Just launch OsmAnd Maps & Navigation app and update the information about different locations.

Make OSM contributions like creating or modifying OSM POI objects, opening or commenting OSM notes, and contributing recorded GPX files in OsmAnd by supplying your username and password. [OpenStreetMap](http://openstreetmap.org/) is a community driven, global public domain mapping project.


## Enable / Disable plugin

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/> 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,plugins,product_title_osm_editing"/>

![OpenStretMap editing Android](@site/static/img/plugins/osm-editing/osm_plugin_android.png)  ![OpenStretMap editing](@site/static/img/plugins/osm-editing/osm_plugin_ios.png)

### Plugin settings

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android.png)

Next settings:
- &nbsp;<Translate android="true" ids="login_account"/> - [<Translate android="true" ids="open_street_map_login_mode"/>](https://www.openstreetmap.org/login) 
- &nbsp;<Translate android="true" ids="offline_edition"/> - enable or disable offline editing. Users can make and save OSM edits and after upload its with Internet connection.
- &nbsp;<Translate android="true" ids="use_dev_url"/> - enable or disable [dev.openstreetmap.org](https://dev.openstreetmap.org/) instead of [openstreetmap.org](http://openstreetmap.org/) to testing uploading OSM Note / POI / GPX.
- &nbsp;<Translate android="true" ids="map_updates_for_mappers"/> - allows [OsmAnd live](../personal/maps.md#osmand-live) updating for mappers.

![OpenStretMap editing plugin Settings OsmAnd live Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_live_android.png)

- &nbsp;<Translate android="true" ids="layer_osm_edits"/> - allows to open OSM edits menu: [Menu → My Places → OSM edits](../personal/myplaces.md)  


## How to use

The plugin lets you create new objects, so-called  [points of interest or POI](../map/point-layers-on-map.md#points-of-interest-poi)  on the map. New shop opened next to you? Add it to the map! Your favorite monument is missing on the map? Put it there in seconds. Also, if you're the owner of a newly-opened business, adding it to the map is a great way to let people find you.

### How to add / modify POI

Tap on the map where the new POI has to be placed. Press on [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions), then choose [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), add its name and other details like working hours, website, etc. You'll also have to register at [OpenStreetMap](http://openstreetmap.org/) and then provide your OSM credentials to introduce changes.

[Actions in Map Context menu](../map/map-context-menu.md#actions) - [Create / Modify POI](../map/map-context-menu.md#-create--modify-poi)

**Note**: you can see your new POI on OsmAnd map after one hour after added it to OSM project if you have [OsmAnd live](../personal/maps.md#osmand-live).

To view OSM edits layer on the map for tapping to this edits for [openning Map Context menu](../map/map-context-menu.md#-upload-poi--osm-note):

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,osm_edits_offline_layer"/>


### How to upload GPX track (Android)

You can add the tracks you've made to [OpenStreetMap](http://openstreetmap.org/). To do that, turn the [Trip recording plugin](../plugins/trip-recording.md) on, record a track, and then click to [Options button](../map/track-context-menu.md#options) of [Track Context menu](../map/track-context-menu.md) and choose <Translate android="true" ids="upload_to_openstreetmap"/>. 

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

At this menu:
- &nbsp;<Translate android="true" ids="shared_string_description"/> - allows to add description to the track.
- &nbsp;<Translate android="true" ids="gpx_tags_txt"/> - allows to add any tags for to identify your track. Tag "osmand" is tag by default, user can enter tags separted by comma.
- &nbsp;<Translate android="true" ids="gpx_visibility_txt"/> - track visibility for OSM users:

 &nbsp;<Translate android="true" ids="gpx_upload_public_visibility_descr"/>
 
 &nbsp;<Translate android="true" ids="gpx_upload_identifiable_visibility_descr"/>
 
 &nbsp;<Translate android="true" ids="gpx_upload_trackable_visibility_descr"/>
 
 &nbsp;<Translate android="true" ids="gpx_upload_private_visibility_descr"/>
 
- &nbsp;<Translate android="true" ids="login_account"/> - [OSM account](https://www.openstreetmap.org/login).


Kindly note, that <Translate android="true" ids="osm_editing"/> has to be turned on. 
In an hour, your track will be added to [https://www.openstreetmap.org/traces](https://www.openstreetmap.org/traces), so you can view it and other users can find it helpful, as well. 

You can participate in the work on the global map. Just share the tracks you've made. They become part of the [OpenStreetMap](http://openstreetmap.org/) project. Make sure you tag objects and roads as well.


### How to report a mistake

You can also report about the mistakes on the map. All you have to do is tap on the location, choose [<Translate android="true" ids="context_menu_item_open_note"/>](../map/map-context-menu.md#-open-osm-note) in [Map Context menu](../map/map-context-menu.md) and then add the info about it. OSM editors would consider your comments.

To view the OSM editing layer, you can switch on  [online layer - OSM notes](../map/configure-map-menu.md#map-layers) on the map:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/> 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,osm_notes_online_layer"/>

You'll see all the notes in the specific area.

Short tap to a note opens [Map Context menu](../map/map-context-menu.md#-comment--close-osm-note) with action buttons. You can click to OSM note and choose your comment or delete it.

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)