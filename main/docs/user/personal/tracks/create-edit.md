---
sidebar_position: 1
title:  Create / Edit
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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>
 
</Tabs>

Features **Tracks** functionality lets you create and save routes so you can easily return to them later or share them with others. A trip planning feature lets you customize your routes based on your preferences and interests. You also get access to preloaded routes to popular destinations and attractions.

1. **Main Features**. 
- All tracks in OsmAnd are stored in the folder:    
*<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*.   
- The **Tracks** tab in the OsmAnd app provides a convenient way to manage and interact with your saved tracks. This feature allows you to record and save tracks completed during travel or outdoor activities. 
- A track on a map is Trip recording or Plan a route with or without marked points on it. OsmAnd track file is in [GPX format](../../plugins/trip-recording.md#recorded-gpx-file).

2. **You can add or create tracks in OsmAnd in the following ways**.  
- [Import](#import) from an external source.
- Create in the application using [Plan a route](../../plan-route/create-route.md) tool.
- Recording in the application using [Trip recording](../../plugins/trip-recording.md) plugin. 

3. **Tracks management special features in OsmAnd**.
- Enabling and disabling [tracks on the map](#show-tracks-on-map).
- Customizing [the appearance](../../map/tracks-on-map/track-appearance.md), [edit](#create--edit-track) and [analyze tracks](../../map/tracks-on-map/tracks-types.md#analyze-track-on-map).
- Use for navigation.

4. **OsmAnd has no limit on the number of tracks to store and display.**

5. **There are three options to display Tracks on the map**.
- [Configure map](../../map/configure-map-menu.md) menu.
- [My places](../../personal/myplaces.md) menu.
- [Track Context menu](../../map/track-context-menu.md).  

**Formats**: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.  
**Import**: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.


## Create / Edit Track

Tracks is a powerful tool for tracking journeys, recording routes and Points of Interest (POIs) in real-time, and for later analyzing and sharing data.  

### Track recording

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/tracks_recording_3_andr.png)  ![Track on the map](@site/static/img/personal/tracks/tracks_recording_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/tracks_recording_1_1_ios.png)  ![Track on the map iOS](@site/static/img/personal/tracks/tracks_recording_2_ios.png)

</TabItem>
 
</Tabs>

You can create a new track by starting a record in the Tracks tab or using the OsmAnd [Trip recording Plugin](../../plugins/trip-recording.md) and [Widgets](../../widgets/info-widgets.md#trip-recording-widgets). Trip plugin is a special tool designed to record your journeys, walks, and other activities.   

- **New track**. In this field you can tap the *Start Recording* button to record a new track. You may need to confirm your [battery settings](#baterry-optimization) (for Android) before you start.
- **Currently recording track** (*Android*) / **Recorded track** (*iOS*). 
- [**Menu**](#folder-menu). Tapping the three dot menu (for Android) or long press (for iOS) opens the [track menu](#single-track-menu). During track recording, in this field you can see how many kilometers have already been recorded and how long the recording is in progress. The **Stop** button allows you to pause the recording, and to finish it, press the **Save** button.

#### Baterry optimization (Android only)

![Track on the map iOS](@site/static/img/personal/tracks/battery_andr.png)

Select an optimisation setting. To prevent the app from asking you the next time you make a selection, tap the Don't ask anymore button. You can additionally read the section in the article [Trip recording plugin](../../plugins/trip-recording.md#baterry-optimization).  
**NOTE**. Optimizing battery usage in Android can cause gaps and inaccuracies in recorded tracks. If you encounter such problems, try changing the battery usage mode to *Unrestricted*.


### Coordinate input

<InfoAndroidOnly /> 

- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Earth button at the bottom of the screen*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*  

![Coordinate input Options menu Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)  

In the **Options** menu using the **Save as track** item, you can save the created points as a GPX track and also change its name.
For more details, read the article [Coordinates input](../../plan-route/coordinate-input.md#options).


### Plan route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>  

The **Plan a route** tool allows you to create *new routes as GPX tracks*, modify *existing tracks*, and *import* new ones.  
Read more in the article [**Plan a route** tool](../../plan-route/create-route.md#types-of-save). 


## Related Articles

- [Show track on Map](../../map/tracks-on-map/tracks-types.md)
- [Analyze on Map](../../map/tracks-on-map/tracks-types.md#analyze-track-on-map)
- [Track Context menu](../../map/track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Trip recording](../../plugins/trip-recording.md)

> *This article was last updated in July 2024*
