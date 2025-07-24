---
source-hash: 46f8bd9f97c636e1d4eed0afa1bdf6ebb5963b97004fdc01d9e05197cf654281
sidebar_position: 9
title: OpenStreetMap Editing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Overview {#overview}

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) is a global community that aims to create a detailed free geographical map of the world and provide up-to-date open-source data to every user. The OpenStreetMap editing plugin allows you to contribute to the community.

With OsmAnd and the OSM editing plugin, you can easily contribute your own information to OpenStreetMap.org, such as to create or modify [POIs](#create--modify-poi), add or comment [notes](#create--modify-osm-note), and upload recorded GPX [tracks](#upload-gps-track).

## Required Setup Parameters {#required-setup-parameters}

To use the *OpenStreetMap editing* plugin, you have to make the following settings:

1. Enable [Plugin](../plugins/index.md#enable--disable).
2. Set OpenStreetMap editing in any [profile](../personal/profiles.md).
3. Enable the display of *OSM notes (online)* or *OSM edits* on the map in the [Configure map menu](../map/configure-map-menu).


## Settings {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Menu, Plugins, OSM Editing, Settings*
- *Menu, Configure profile, Plugins settings, OSM Editing*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu, Plugins, OSM Editing*
- *Menu, Settings, Application profiles, OSM Editing*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
The plugin settings are global and apply to all profiles.
:::

- [Login to OpenStreetMap](#authorization). Login to upload new or modified changes. Use the secure *OAuth 2.0 method* or [log in on the OSM site](https://www.openstreetmap.org/login). For iOS, the button for the OAuth method is available only for users with a supported version of iOS, 16.4
- **Offline editing**. If this setting is enabled, the changes are first saved locally (*Save* button) and uploaded on request. If the setting is disabled, the changes are uploaded immediately (*Upload* button).
- **Use dev URL** *(Android only)*. Allows you to enable [dev.openstreetmap.org](https://dev.openstreetmap.org/) instead of [openstreetmap.org](http://openstreetmap.org/) to test uploading OSM Note, POI, or GPS tracks. When enabled, you are automatically logged out of OpenStreetMap.org. This setting is only available in the list when the *OsmAnd development plugin* is enabled.
- [Map updates for mappers](#free-map-updates-for-mappers).
- **OSM Edits layer**. Tap it to open [*Menu → My Places → OSM edits*](../personal/myplaces.md). This tab lists your unedited OSM notes. The following actions are available with the note: *Upload*, *Show on map*, *Modify OSM note*, *Delete*. Uploaded or deleted notes are no longer displayed in the list.

:::note
If you have an [OsmAnd Pro](../purchases/android.md#pro-features) subscription, changes made to OSM will appear on your OsmAnd map within one hour. Make sure that [Live updates](../personal/maps-resources.md#osmand-live) are enabled.
:::


### Authorization {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Login to contribute changes and GPX files.

- Go to [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) and *log in* or *sign up*.
- Tap the *Login to OpenStreetMap* field in the OsmAnd app, then tap the *Sign in with OpenStreetMap* button.


### Free map updates for mappers {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

The Map updates for mappers setting allows you to enable **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** if you are active OpenStreetMap contributor. This way you can enjoy free hourly map updates, unlike the standard monthly updates. Active contributors to OpenStreetMap.org may be entitled to unlimited hourly map updates. Sign in to OpenStreetMap to check your eligibility for unlimited monthly and hourly map updates.


### OSM Editing Layer {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *Menu, Configure map, OSM Edits layer*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Menu, Configure map, OSM Edits (offline) layer*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

You can enable or disable as a separate layer the display of OSM modifications such as *OSM notes* (online), *OSM edits*, *Fixme tags*, *Note tags*, *Icons at low zooms*, in the [Configure map](../map/configure-map-menu.md) section of the *Main Menu*.


## Create / Modify POI {#create--modify-poi}

The OpenStreetMap editing plugin allows you to create new objects on the map called [points of interest or POI](../map/point-layers-on-map.md#points-of-interest-pois). You can map a new store, favorite landmark, bench, or shelter so people can find them.

1. Tap the map to place a new POI, or tap a POI not yet loaded.2. Tap [Actions](../map/map-context-menu.md#actions).
2. Choose [Create POI](../map/map-context-menu.md#-create--modify-poi), and add its name and other information such as hours of operation, website, etc. When you select a not uploaded POI, *Create POI* changes to *Modify POI*.
3. Depending on the [Offline editing](#settings) setting, you can save the data locally or [upload it](../map/map-context-menu#-upload-poi--osm-note).


### Add tags {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

You can easily add OSM [tags](https://wiki.openstreetmap.org/wiki/Tags) to the POI. When you enter several characters in the search bar, the program suggests possible tags.

**Offline modifications.**
You can view, upload to OSM, or delete POIs in *My Places → OSM Edits*. You can also export your OSM POIs changes to an [OSC file](https://wiki.openstreetmap.org/wiki/OsmChange) and import it into [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Add unsupported POI types {#add-unsupported-poi-types}

In the *Advanced* tab, you can add unsupported POI types that may be useful for your specific task. This option allows you to enter POI data manually thus extending the functionality of the application.

One example of unsupported POI types that you can add is *amenity=freeshops*. This type can be useful if you want to mark free stores or places that provide free products.

To add unsupported POI types, follow these steps:

1. Open the *Advanced* tab.
2. Tap the *POI Type*.
3. Enter the *amenity* key and the *freeshops* value in the appropriate fields.
4. Fill in the rest of the required data for this POI.
5. Tap *Add Tag* to add the new POI to your database.

Remember that when adding unsupported POI types, it is important to make sure that the data is entered correctly to ensure the correct functioning of the application and subsequent processing of the information.


## Create / Modify OSM Note {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *Menu, Configure map, OSM Notes layer*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Menu, Configure map, OSM Notes (online) layer*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

To edit, comment, or close OSM notes, enable their display on the map in the [Configure map menu](../map/configure-map-menu.md).

- The OSM Notes feature allows you to add notes to the map. In these notes, you can describe mistakes or write about missing information in the OpenStreetMap data. You and other users can leave comments on your notes.
- You can help other users by checking their questions or issues, giving comments, and then closing the resolved notes.
- Read more about the OpenStreetMap Notes [here](https://wiki.openstreetmap.org/wiki/Notes).

To create a note, you don't need to log in to OpenStreetMap.org, you can send it anonymously.

- Tap the map where the new OSM note is to be placed (or tap a not uploaded note), and select [Actions](../map/map-context-menu.md#actions).
- If you want to add information to an existing note or not uploaded note, edit a comment, or close a note, tap the OSM note on the map and select the [required action](../map/map-context-menu.md#-comment--close-osm-note).
- You can upload changes as soon as you are available online. You can also undo changes before they are uploaded.

:::info
The uploaded OSM Notes are not visible on OsmAnd maps in offline mode.
:::


## GPS Track {#gps-track}

The GPS tracks you have recorded are useful for:

- **Mappers**. Tracks can be used to map all kinds of paths.
- **Navigation**. Based on the GPX file data you uploaded, navigation applications and special devices can calculate tracks.
- **To share information** about the tracks and routes you recorded on [OpenStreetMap based maps](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTE
Your tracks will be added to [OSM traces](https://www.openstreetmap.org/traces) within an hour where they will be available for you and others to view, search, and use.
:::


### Upload GPS track {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

To [upload the GPS track](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), follow the steps below:

- Find the required track in [*Menu, My Places, GPX Tracks tab*](../personal/tracks/manage-tracks.md).
- Tap the *three-dot menu* next to the track name and select *Export*.

**Settings:**

- **Description**. Allows you to add a description to the track. The description applies to all selected tracks. If you enter nothing in the field, the track names for each separate track are used as descriptions.
- **Tags**. This item in the settings section allows you to add tags to identify the track. The default tag is "osmand", you can enter additional tags separated by commas.
- **Visibility**. Track visibility for OSM users:
   - *Public* means that the track is publicly available and displayed in raw form in your GPS tracks, GPS track lists, and timestamped track lists. The data transmitted through the API is not referenced with your track page. Trace point timestamps are unavailable through the public GPS API and track points are not ordered chronologically.
   - *Identifiable* means that the track will be publicly displayed in your GPS track points and public GPS track lists, which means other users will be able to download the raw track and associate it with your username. Public timestamped track points data from the GPS API passed through the track points API will link to your original track page.
   - *Traceable* means that the track is not displayed in public lists, but the processed track points with timestamps from it (which cannot be linked to you directly) are loaded from the public GPS API.
   - *Private* means that the track is not displayed in public lists, but the track points from it in non-chronological order are available through the public GPS API without timestamps.
- **Login account** - [OSM account](https://www.openstreetmap.org/login).

:::info
You can select more than one track to upload to OSM. To do this, tap the *Upload to OpenStreetMap* icon at the bottom of the screen, select tracks using the checkbox, tap *Upload*, and then *Continue*.
:::

### Generate OBF file {#generate-obf-file}

You can create an OBF file with [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) if you have a large GPX track database. This is a collection of tracks from osmand.net with the 'gpsies' tag, a collection of downloaded tracks from OpenStreetMap or your own collection.


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *Last updated: May 2024*