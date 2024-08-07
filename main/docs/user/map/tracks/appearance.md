---
sidebar_position: 5
title:  Track Appearance
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

## Track Appearance

:::tip note

<ProFeature/> Some parameters you can use only with Maps+ or Pro feature: <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">free and paid features</a>.

:::

In the OsmAnd application, you can apply some settings by changing the appearance of the tracks, to better identify them on the map.  

There are three ways to access the Track Appearance menu:
- Go to the *My Places* menu and tap any available track in the list (*Menu → My Places → Tracks*), select the Appearance icon in the [Track Context menu](../../map/tracks/track-context-menu.md#overview) in the Overview section.
- Tap the needed track on the map and select the Appearance icon in the Overview section.
- Select Appearance from the [track recording context menu](../../plugins/trip-recording.md#сurrent-track-recording).  
- Go to *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> → &#8942; → <Translate android="true" ids="change_appearance"/>* for the tracks you have selected to be displayed on the map. 


### Split Interval

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

select the interval at which distance or time stamps are displayed on the track.  

### Direction Arrows

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png) 

select the interval at which distance or time stamps are displayed on the track.  

### Show Start and Finish Icons

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

allows you to select whether or not to show the start and end icons of track segments.  

### Color

![Appearance](@site/static/img/map/appearance_color_andr.png) 

allows to display the track line in any color and transparency, or select coloring according to the map legend. If necessary data on the track sections are missing, such sections are displayed in gray color. 

- *<Translate ios="true" ids="shared_string_color"/>:* *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* and *<Translate android="true" ids="altitude"/>* are free color settings. If *Speed* and *Altitude* are not active, it means that the track does not contain this data.  

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- *<Translate android="true" ids="shared_string_color"/>: ([Maps+ / Pro feature](../../purchases/index.md))* *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the [*Map screen during navigation*](../../navigation/guidance/map-during-navigation.md#color) page, specifically in the [Route line appearance](../../navigation/guidance/map-during-navigation.md#route-line-appearance) section.  


### Width

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

You can customize the appearance of the track in several menus of the application:
- [*Track → Appearance*](../../personal/tracks/manage-tracks.md#folder-menu).
- [*Navigation settings → Customize route line*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*My Places → Tracks tab → any folder → Default appearance*](../../personal/tracks/manage-tracks.md#folder-menu).

With the *Width setting* you can choose the thickness of the track line based on the width of the road or intersection with other tracks, or for example, if you want to highlight a track on the map by importance.  

- **Thin, Medium,** and **Bold** are lines whose width is fixed and preset by the OsmAnd application.
- In the **Custom** setting you can set the required line width with a slider, from 1 to 24.
- In the [*Tracks tab*](../../personal/tracks/manage-tracks.md#folder-menu) with the **Original** setting, different original width parameters can be retained for each track of the selected folder.
- In the [*Configure Profile*](../../navigation/guidance/navigation-settings.md#customize-route-line) the route line can be set to the **Map Style** width, this is the default width for map specified by the OsmAnd application.



### 3D Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

This [paid feature](../../purchases/android.md) allows you to display tracks by elevation. 

You have the option to use 3D track visualization if the map rendering engine, [Version 2 (OpenGl)](../../personal/global-settings.md#map-rendering-engine), is enabled.

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

This [paid feature](../../purchases/ios.md) allows you to display tracks by elevation. 

</TabItem>

</Tabs>

3D track settings are responsible for the visualization of the track on the map:
- *<Translate android="true" ids="visualized_by"/>*: "None", "Altitude", "Speed", "Fixed Height" (additional options for Android: "Heart Rate", "Bicycle Cadence", "Bicycle Power", "Temperature", "Bicycle Speed") - Choose to display the 3D track by altitude (using [altitude data](../../plugins/trip-recording.md#recorded-gpx-file) from GPX track file), at a fixed height, or not at all. 
- *<Translate android="true" ids="wall_color"/>*: "None", "Solid", "Downward Gradient", "Upward Gradient" (additional options for Android: "Altitude", "Slope", "Speed") - Select whether to color the 3D track and choose the type of coloration. 
- *<Translate android="true" ids="track_line"/>*: "Top", "Bottom", "Top and bottom" - Decide where to add a line to the 3D track for better visibility. 
- *<Translate android="true" ids="vertical_exaggeration"/>* :"None" to "x3.0" - Adjust the level of vertical exaggeration for the 3D track.  
- *<Translate android="true" ids="wall_height"/>* (if you choose _<Translate android="true" ids="visualized_by,fixed_height"/>_) : "None" to "2000 m" - by changing the scale value, you can change 3D track height.

### Join Gaps

Gaps in a GPX track can occur during recording, for example. This function (Android: "_<Translate android="true" ids="join_segments"/>_", iOS: "_<Translate ios="true" ids="gpx_join_gaps"/>_") allows you to seamlessly connect all gaps in the chosen GPX track. Segments will be joined with a straight line to form a continuous track.

### Reset to Original

Resets all settings to default values. 