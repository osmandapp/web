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


## Overview {#overview}

The **Track Appearance** feature allows users to customize how tracks are displayed on the map. This includes adjusting color, width, direction indicators, and other visual elements. Customizing track appearance helps differentiate multiple tracks, highlight specific routes, and improve map readability.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Access to the menu {#access-to-the-menu}

You can modify track appearance using one of the following methods:

- **From My Places**. Open *Menu → My Places → Tracks*, select a track, tap the *Appearance icon* in the [track context menu](../../map/tracks/track-context-menu.md#overview).
- **From the map**. Tap a track directly on the map, then tap the *Appearance icon* in the *Overview section*.
- **From track recording**. Modify the appearance of the currently recorded track via the [track recording context menu](../../plugins/trip-recording.md#сurrent-track-recording).  
- **From the Configure Map menu**. Go to *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* for the displayed tracks.


## Track Appearance Settings {#track-appearance-settings}

### Color {#color}

:::tip purchases
Some settings you can use only with *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> and <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Free and Paid features.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

You can set the track color manually or use **color-based data visualization** (e.g., speed, altitude, slope). If a track lacks certain data, OsmAnd displays missing sections in gray.

**Available Color Options:**

- **Free settings**: *<Translate android="true" ids="track_coloring_solid"/> color*, *<Translate android="true" ids="shared_string_speed"/>* (if recorded) and *<Translate android="true" ids="altitude"/>* (if recorded).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro feature](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

For more details on route line appearance customization, see [Map screen during navigation](../../navigation/guidance/map-during-navigation.md#color)and on selecting and creating a custom color, see [Color schemes](../../personal/color-palette-schemes.md#routes).


### Width {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

You can customize the appearance of the track in several menus of the application:

- [*Track → Appearance*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigation settings → Customize route line*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*My Places → Tracks tab → any folder → Default appearance*](../../personal/tracks/manage-tracks.md#track-folder).

Adjust track width to improve visibility on the map.

- **Preset options**: **Thin, Medium,** and **Bold**.

- **Custom width**: Adjustable from 1 to 24 px using a slider.

- **Profile-based width**: Can be set via *Navigation settings → [Customize Route Line](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Split Interval {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Select whether to split the interval on the track **by distance or by time**.

### Direction Arrows {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Adds **arrow markers** along the track to indicate movement direction.

### Start and Finish Icons {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Allows you to select whether to show the **start and finish icons** for track segments.

### Join Gaps {#join-gaps}

Connects **track segments** that were interrupted due to GPS loss or a pause in recording. The **<Translate android="true" ids="join_segments"/>** (*Android*) or **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) feature allows you to connect these gaps in the selected GPX track using straight lines.

### Reset to Original {#reset-to-original}

Restores all **track appearance settings** to their default values.


## 3D Track {#3d-track}

:::info Paid feature
**3D Track** is an **OsmAnd Pro** paid feature for [iOS](../../purchases/ios.md#pro-features) and [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

The **3D Track** feature generates a three-dimensional visualization by integrating elevation data into standard 2D tracks. This functionality creates a depth-enhanced representation, enabling precise analysis of the track concerning the terrain. By incorporating elevation details, the 3D track offers a more comprehensive view of the route's topography and geographical context.

### 3D Track Settings {#3d-track-settings}

**Wall height**  
You can visualize a 3D track by altitude and other available data within the track, or by fixed altitude.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Altitude*, &nbsp;*Speed*, &nbsp;*Fixed Height*. 3D Sensor data: &nbsp;*Heart Rate*, &nbsp;*Bicycle Cadence*, &nbsp;*Bicycle Power*, &nbsp;*Temperature*, &nbsp;*Bicycle Speed*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. If visualized by *Altitude* or *Speed*, you can scale 3D data to get a more prominent visualization for the 3D track in the range of *None* to *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. If visualized by *Fixed Height*, set the fixed height for the 3D track by defining its elevation on the map in the range of *None* to *2000 m*.

- You can combine it with [3D Relief](../../plugins/topography.md#3d-relief). If the source of the 3D data is not altitude, the 3D representation will be a combination of relief altitude and the selected data, such as speed or heart rate.

**<Translate android="true" ids="wall_color"/>**  
Customizes the **3D track color** using gradients or data-based visualization.  
Options include: *None*, &nbsp;*Solid*, &nbsp;*Downward Gradient*, &nbsp;*Upward Gradient*, &nbsp;*Altitude*, &nbsp;*Slope*, &nbsp;*Speed*.

**<Translate android="true" ids="track_line"/>**  
Adds a [highlighted lineline](#color) to the top or bottom of the 3D track.  
Options include: *Top*, &nbsp;*Bottom*, &nbsp;*Top and bottom*.

> **NOTE**: *The **Android version** of the app requires the map rendering engine [Version 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) to be enabled to use 3D track visualization.*


### Use Cases {#use-cases}

The 3D track feature is highly beneficial for activities like paragliding, where visualizing your flight path can offer deeper insights. By rendering the track in 3D, you can leverage features such as **Wall Height** and **Wall Color** to extract valuable visual information for analysis.

1. **Visualize by Speed with 3D**.  
    One common use case is utilizing 3D tracks to visualize speed variations. This allows you to pinpoint specific sections of the track where you slowed down or sped up.  

    With Wall Color based on the Slope, you can observe how the terrain, particularly hills and inclines, impacted your speed. This combination of speed and slope visualization provides a detailed understanding of performance throughout the activity.

2. **Visualize by Heart sensor with 3D Relief**.  
    Another insightful application is combining heart rate sensor data with 3D relief maps. This allows you to map heart rate fluctuations directly onto the terrain, giving you a comprehensive view of how altitude changes may have influenced your physical effort.  

    The 3D relief feature, which exaggerates the altitude, works independently of the 3D track view. Two vertical exaggeration parameters can be adjusted to better understand the correlation between heart rate and terrain elevation.

3. **Visualize Track height and Slope color line on a flat earth view.**  
    When visualizing altitude data, using a flat earth view is recommended to avoid issues like GPS errors, which might cause sections of the track to appear underground.  

    In this scenario, slope changes can be visualized separately along the track line, while Wall Color utilized to represent altitude. This method ensures that even with potential data inaccuracies, you still receive a clear and accurate visualization of slope and elevation.

## Change Appearance for Multiple Tracks {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

The [Tracks](../../personal/tracks/manage-tracks.md) tab automatically displays all tracks ever recorded, created, or imported. They are organized by folder or displayed as a list below them.  

Modify multiple track appearances in *My Places → Tracks*:

- **Change default appearance** - Applies settings to all tracks in a [folder](../../personal/tracks/manage-tracks.md#track-folder).
- **Reset to original** - Restores individual track settings.

- [Selection mode](../../personal/tracks/manage-tracks.md#selection-mode) - Changes the appearance of specific tracks in the selected folder or the entire list in the Tracks tab.
    - Select the *three-dot menu* in the upper right corner of the Tracks tab and tap *Select*.
    - Then tap the *three-dot menu* at the top of the screen and select *Change Appearance*.  

Bulk appearance customization options:

- **Direction arrows** - Adds [movement indicators](#direction-arrows).  
    States: *Unchanged*, &nbsp;*Original*, &nbsp;*On*, &nbsp;*Off*.

- **Show start and finish icons** - [Displays markers](#start-and-finish-icons) for track start and end points.  
    States: *Unchanged*, &nbsp;*Original*, &nbsp;*On*, &nbsp;*Off*.

- **Color** – Apply manual or data-based [coloring](#color).

- **Width** – Adjust the [track line width](#width) using presets or manually.

- **Split interval** – [Set interval](#split-interval) for distance / time markers.  
    States: *Unchanged*, &nbsp;*Original*, &nbsp;*Select*: *Time* or *Distance*.

Original and unchanged:

- **Original** - Restores the original parameters from the track file.

- **Unchanged** - Keeps current settings during the editing session.


## Track Colors in GPX Files {#track-colors-in-gpx-files}

OsmAnd supports **custom track colors** in GPX files using the `<osmand:color>` tag within the `<extensions>` section of a `<trk>` element. This allows users to define colors for individual tracks, enhancing visual differentiation when multiple tracks are displayed on the map.

To specify a color for a track, use the following format:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- The `<osmand:color>` tag accepts **hexadecimal color codes** (e.g., `#FF0000` for red).
- If multiple tracks exist in a GPX file, each track can have its own `<osmand:color>` tag.


**Behavior in OsmAnd:**

1. **Default color assignment**:  

    - When a **GPX track is imported as a single track** (***Import as one track*** option), the entire track is assigned the **default GPX color** (red).  
    - In OsmAnd **4.9.10 and later**, this issue has been resolved—individual track colors are now preserved upon import.

2. **Single-color display for merged tracks:**  

    - If tracks are **merged** using ***Join Segments***, the resulting track is treated as **one continuous track with a single segment**.
    - Multi-color representation is **not supported** for merged tracks.
    - The merged track will be displayed using the **main GPX color** (default: red), even if individual track segments originally had different colors.

3. **Priority of appearance settings:**  

    - OsmAnd currently supports **color and width settings only for the entire track**.
    - These appearance settings are stored in the **top-level GPX extensions**.
    - If a color or width is **set at the top level** (either in the GPX file or manually in OsmAnd), this setting will take precedence over colors assigned to individual track segments.

**Workaround for Multi-Color Tracks:**

- To preserve **individual colors for multiple tracks**, **import tracks separately** instead of merging them.

- Adjust track colors manually in **Track Appearance Settings**:

  - Open the track in OsmAnd.
  - Tap the track to open the **Context Menu**.
  - Select **Appearance**.
  - Choose the preferred color.

- This ensures that each track retains its **intended color representation**, even if the GPX file originally contained multiple segments with different colors.


## Related Articles {#related-articles}

- [Map Context menu](../map-context-menu.md)
- [Configure Map](../configure-map-menu.md)
- [Points on the map](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Tracks Context menu](../tracks/track-context-menu.md)
- [Trip Recording](../../plugins/trip-recording.md)

> *Last updated: February 2025*
