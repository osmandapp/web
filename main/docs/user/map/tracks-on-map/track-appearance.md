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


#### <Translate ios="true" ids="gpx_split_interval"/>

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

select the interval at which distance or time stamps are displayed on the track.  
 
#### <Translate ios="true" ids="gpx_direction_arrows"/>

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png) 

select the interval at which distance or time stamps are displayed on the track.  
 
#### <Translate ios="true" ids="track_show_start_finish_icons"/>

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

allows you to select whether or not to show the start and end icons of track segments.  

#### <Translate ios="true" ids="shared_string_color"/>

![Appearance](@site/static/img/map/appearance_color_andr.png) 

allows to display the track line in any color and transparency, or select coloring according to the map legend. If necessary data on the track sections are missing, such sections are displayed in gray color. 

- *<Translate ios="true" ids="shared_string_color"/>:* *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* and *<Translate android="true" ids="altitude"/>* are free color settings. If *Speed* and *Altitude* are not active, it means that the track does not contain this data.  

- *<Translate android="true" ids="shared_string_color"/>: ([Maps+ / Pro feature](../../purchases/index.md))* *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the [*Map screen during navigation*](../../navigation/guidance/map-during-navigation.md#color) page, specifically in the [Route line appearance](../../navigation/guidance/map-during-navigation.md#route-line-appearance) section.  

![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

#### <Translate ios="true" ids="shared_string_width"/>

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png) 

allows you to select the line width depending on the width of the road or if you want to strongly emphasize the route line on the map, *<Translate android="true" ids="rendering_value_thin_name"/>, <Translate android="true" ids="rendering_value_medium_name"/>* and *<Translate android="true" ids="rendering_value_bold_name"/>*. In *<Translate android="true" ids="shared_string_custom"/>*, you can select the preferred line width using the slider.  

#### 3D Track

![Track menu Appearance 3D visualisation](@site/static/img/map/track_appearance_menu_3d_android.png)

This feature enables the display of tracks by altitude. [Paid feature](../../purchases/index.md). You have the ability to use 3D Track visualization if the Map rendering engine [Version 2 (OpenGl)](../../personal/global-settings.md#map-rendering-engine) is enabled.  

- *Visualized by*: None , Altitude, Fixed Height - Choose to display the 3D track by altitude ([altitude data](../../plugins/trip-recording.md#recorded-gpx-file) from GPX track file), at a fixed height, or not at all. 
- *Wall color*: None, Solid, Downward gradient, Upward gradient - Select whether to color the 3D track and choose the type of coloration. 
- *Track line*: Top, Bottom, Top and bottom - Decide where to add a line to the 3D track for better visibility. 
- *Vertical exaggeration*: None to x3.0 - Adjust the level of vertical exaggeration for the 3D track.  

#### <Translate ios="true" ids="gpx_join_gaps"/>

the gaps between segments will be connected. 

#### <Translate ios="true" ids="reset_to_original"/>

resets all settings to default values. 


## Read more

- [*Routes on the map* blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../../map/track-context-menu.md)  
- [Configure map](../../map/configure-map-menu.md)  
- [Navigation by track](../../navigation/setup/gpx-navigation.md)  
- [GPX tracks](../../personal/tracks/index.md)  
- [Plan route](../../plan-route/index.md)  
- [Trip Recording](../../plugins/trip-recording.md)    