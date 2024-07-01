---
sidebar_position: 2
title:  Appearance
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

> *This article was last updated in May 2024*


## Overview

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Track menu options Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu iOS](@site/static/img/map/track_appearence_1_ios.png) ![Configure color iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs> 


## Track Appearance

:::tip note

<ProFeature/> Some parameters you can use only with Maps+ or Pro feature: <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">free and paid features</a>.

:::

In the OsmAnd application, you can apply some settings by changing the appearance of the tracks, to better identify them on the map.  

There are three ways to access the Track Appearance menu:
- Go to the *My Places* menu and tap any available track in the list (*Menu → My Places → Tracks*), select the Appearance icon in the [Track Context menu](../../map/track-context-menu.md#overview) in the Overview section.
- Tap the needed track on the map and select the Appearance icon in the Overview section.
- Select Appearance from the [track recording context menu](../../plugins/trip-recording.md#сurrent-track-recording).  
- Go to *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> → &#8942; → <Translate android="true" ids="change_appearance"/>* for the tracks you have selected to be displayed on the map. 


### Split interval

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

select the interval at which distance or time stamps are displayed on the track.  
 
### Direction arrows

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png) 

select the interval at which distance or time stamps are displayed on the track.  
 
### Show start and finish icons

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


<!-- Width  

You can adjust the width of the displayed line of your route to match the width of the road or path on the map. For better visual identification, you can make the line width wider or narrower by adjusting it manually.

- ***<Translate android="true" id="map_widget_renderer"/>*** – It's used with default width. You can see a full description of the map style by clicking there [Map style](../../map/vector-maps.md#default-map-styles)  
    ![map stule](@site/static/img/navigation/route/map_st_2.png)  ![map stule](@site/static/img/navigation/route/map_st.png)  ![map stule](@site/static/img/navigation/route/width_ms_ios.png)

- ***Thin width / Medium width / Bold width*** – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly.  
    ![width](@site/static/img/navigation/route/width.png)  ![width](@site/static/img/navigation/route/width_ios.png)  ![width](@site/static/img/navigation/route/width_med.png)

- ***Custom*** – It allows you to show the line in some preferred width. Select the width using the slider.  
    ![custom](@site/static/img/navigation/route/custom_1.png)  ![custom](@site/static/img/navigation/route/width_cus_ios.png)  ![custom](@site/static/img/navigation/route/custom_2.png)  
-->


### 3D Track

![Track menu Appearance 3D visualisation](@site/static/img/map/track_appearance_menu_3d_android.png)

This [Paid feature](../../purchases/index.md) allows you to display tracks by elevation.  You have the option to use 3D track visualization if the map rendering engine [Version 2 (OpenGl)](../../personal/global-settings.md#map-rendering-engine) is enabled.

- *Visualized by*: None , Altitude, Fixed Height - Choose to display the 3D track by altitude ([altitude data](../../plugins/trip-recording.md#recorded-gpx-file) from GPX track file), at a fixed height, or not at all. 
- *Wall color*: None, Solid, Downward gradient, Upward gradient - Select whether to color the 3D track and choose the type of coloration. 
- *Track line*: Top, Bottom, Top and bottom - Decide where to add a line to the 3D track for better visibility. 
- *Vertical exaggeration*: None to x3.0 - Adjust the level of vertical exaggeration for the 3D track.  

### Join gaps

the gaps between segments will be connected. 

### Reset to original

resets all settings to default values. 


## Related Articles

- [*Routes on the map* blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../../map/track-context-menu.md)  
- [Configure map](../../map/configure-map-menu.md)  
- [Navigation by track](../../navigation/setup/gpx-navigation.md)  
- [GPX tracks](../../personal/tracks/index.md)  
- [Plan route](../../plan-route/index.md)  
- [Trip Recording](../../plugins/trip-recording.md)    