---
sidebar_position: 6
title:  My Places
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


## Overview {#overview}

**My Places** is the central hub in the OsmAnd app for managing and customizing all personal data. You can use this section to organize [Favorite points](#favorites) marked as important or frequently visited. The [Tracks](#tracks) tab allows you to view, import, record, and create GPX files to help you keep a detailed history of your routes and travels. You can also manage your [OpenStreetMap Edits](#openstreetmap-edits), making contributing to map improvements and updates easy. The [Audio / Video Notes](#audiovideo-notes) plugin and widgets allow Android users to create and save multimedia notes related to specific locations, adding context to their travels. On iOS, My Places also provides access to bookmarked [Travel Guides](#travel-guides), allowing you to organize and quickly open saved travel content.

## My Places Menu {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

My Places is organized by categories. Select a tab to manage the corresponding data.

**Note:** All data stored in the *My Places* menu can be moved using a special `.osf` format through applications on your device. This process simplifies saving and transferring data between devices and allows you to share it with other OsmAnd users. 

### Favorites {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Favorites** allow you to bookmark important or frequently visited locations. These favorite points are organized in folders and can be customized with different colors, shapes, and icons. You can quickly navigate to any favorite place through the **My Places** menu without needing to search for it repeatedly.

For full instructions, refer to the [Favorites](../personal/favorites.md) article.

### Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Tracks** offer powerful tools for recording, creating, and managing routes within OsmAnd. They can be used for [navigation](../navigation/setup/gpx-navigation.md), [trip recording](../plugins/trip-recording.md), or [integrating](../personal/tracks/manage-tracks.md#import) external GPX files.

For comprehensive guidance, see the [Manage Tracks](../personal/tracks/manage-tracks.md) article.

### OpenStreetMap Edits {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

OsmAnd's **OpenStreetMap Edits** feature enables you to contribute to the global mapping community by adding, modifying, or commenting on map data.

Refer to the [OSM Editing plugin](../plugins/osm-editing.md) for step-by-step instructions.

### Audio/Video Notes {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

The **Audio/Video Notes plugin** allows you to create multimedia notes linked to specific map locations. These notes are stored in **My Places** under the **A/V Notes Tab**.

For more information, visit the [Audio/Video Notes plugin](../plugins/audio-video-notes.md) page.

### Travel Guides (iOS) {#travel-guides}

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

The **Travel** section contains bookmarked travel guides and articles saved for offline access. You can quickly open, organize, and manage your saved travel content from My Places. The Travel section is displayed only when more than one travel guide has been bookmarked.

For detailed information, refer to the [Travel Guides](../plan-route/travel-guides.md) article.

## Related Articles {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Favorites](../personal/favorites.md)
- [OpenStreetMap Editing](../plugins/osm-editing.md)
- [Audio/Video Notes](../plugins/audio-video-notes.md)
- [Travel Guides](../plan-route/travel-guides.md)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)


