---
sidebar_position: 8
title:  OpenStreetMap editing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

Make contributions to OpenStreetMap.


{% data variables.android-values.osm_editing %} plugin allows you to make contributions to OpenStreetMap, a global community aimed at creating a comprehensive map of the world and providing up-to date open-source data to every user.

Just launch OsmAnd Maps & Navigation app and update the information about different locations.

Make OSM contributions like creating or modifying OSM POI objects, opening or commenting OSM notes, and contributing recorded GPX files in OsmAnd by supplying your username and password. [OpenStreetMap](http://openstreetmap.org/) is a community driven, global public domain mapping project.


## Enable / Disable plugin

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → {% data variables.android-values.osm_settings %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.plugins %} → {% data variables.ios-values.product_title_osm_editing %}

![OpenStretMap editing Android](@site/static/img/plugins/osm-editing/osm_plugin_android.png)  ![OpenStretMap editing](@site/static/img/plugins/osm-editing/osm_plugin_ios.png)

### Plugin settings

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → {% data variables.android-values.osm_settings %} → {% data variables.android-values.shared_string_settings %}

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android.png)

Next settings:
- {% data variables.android-values.login_account %} - [{% data variables.android-values.open_street_map_login_mode %}](https://www.openstreetmap.org/login) 
- {% data variables.android-values.offline_edition %} - enable or disable offline editing. Users can make and save OSM edits and after upload its with Internet connection.
- {% data variables.android-values.use_dev_url %} - enable or disable [dev.openstreetmap.org](https://dev.openstreetmap.org/) instead of [openstreetmap.org](http://openstreetmap.org/) to testing uploading OSM Note / POI / GPX.
- {% data variables.android-values.map_updates_for_mappers %} - allows [OsmAnd live](/docs/documentation/personal/maps#osmand-live) updating for mappers.

![OpenStretMap editing plugin Settings OsmAnd live Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_live_android.png)

- {% data variables.android-values.layer_osm_edits %} - allows to open OSM edits menu: [Menu → My Places → OSM edits](/docs/documentation/personal/myplaces)  


## How to use

The plugin lets you create new objects, so-called  [points of interest or POI](/docs/documentation/map/point-layers-on-map#points-of-interest-poi)  on the map. New shop opened next to you? Add it to the map! Your favorite monument is missing on the map? Put it there in seconds. Also, if you're the owner of a newly-opened business, adding it to the map is a great way to let people find you.

### How to add / modify POI

Tap on the map where the new POI has to be placed. Press on [{% data variables.android-values.shared_string_actions %}](/docs/documentation/map/map-context-menu#actions), then choose [{% data variables.android-values.context_menu_item_create_poi %}](/docs/documentation/map/map-context-menu#-create--modify-poi), add its name and other details like working hours, website, etc. You'll also have to register at {% data reusables.links.osm %} and then provide your OSM credentials to introduce changes.

[Actions in Map Context menu](/docs/documentation/map/map-context-menu#actions) - [Create / Modify POI](/docs/documentation/map/map-context-menu#-create--modify-poi)

**Note**: you can see your new POI on OsmAnd map after one hour after added it to OSM project if you have [OsmAnd live](/docs/documentation/personal/maps#osmand-live).

To view OSM edits layer on the map for tapping to this edits for [openning Map Context menu](/docs/documentation/map/map-context-menu#-upload-poi--osm-note):

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.layer_osm_edits %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.configure_map %} → {% data variables.ios-values.osm_edits_offline_layer %}


### How to upload GPX track (Android)

You can add the tracks you've made to {% data reusables.links.osm %}. To do that, turn the [Trip recording plugin](/docs/documentation/plugins/trip-recording) on, record a track, and then click to [Options button](/docs/documentation/map/track-context-menu#options) of [Track Context menu](/docs/documentation/map/track-context-menu) and choose {% data variables.android-values.upload_to_openstreetmap %}. 

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

At this menu:
- {% data variables.android-values.shared_string_description %} - allows to add description to the track.
- {% data variables.android-values.gpx_tags_txt %} - allows to add any tags for to identify your track. Tag "osmand" is tag by default, user can enter tags separted by comma.
- {% data variables.android-values.gpx_visibility_txt %} - track visibility for OSM users:

 {% data variables.android-values.gpx_upload_public_visibility_descr %}
 
 {% data variables.android-values.gpx_upload_identifiable_visibility_descr %}
 
 {% data variables.android-values.gpx_upload_trackable_visibility_descr %}
 
 {% data variables.android-values.gpx_upload_private_visibility_descr %}
 
- {% data variables.android-values.login_account %} - [OSM account](https://www.openstreetmap.org/login).


Kindly note, that {% data variables.android-values.osm_editing %} has to be turned on. 
In an hour, your track will be added to [https://www.openstreetmap.org/traces](https://www.openstreetmap.org/traces), so you can view it and other users can find it helpful, as well. 

You can participate in the work on the global map. Just share the tracks you've made. They become part of the {% data reusables.links.osm %} project. Make sure you tag objects and roads as well.


### How to report a mistake

You can also report about the mistakes on the map. All you have to do is tap on the location, choose [{% data variables.android-values.context_menu_item_open_note %}](/docs/documentation/map/map-context-menu#-open-osm-note) in [Map Context menu](/docs/documentation/map/map-context-menu) and then add the info about it. OSM editors would consider your comments.

To view the OSM editing layer, you can switch on  [online layer - OSM notes](/docs/documentation/map/configure-map-menu#map-layers) on the map:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.layer_osm_bugs %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.configure_map %} → {% data variables.ios-values.osm_notes_online_layer %}

You'll see all the notes in the specific area.

Short tap to a note opens [Map Context menu](/docs/documentation/map/map-context-menu#-comment--close-osm-note) with action buttons. You can click to OSM note and choose your comment or delete it.

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)