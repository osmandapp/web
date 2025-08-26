---
sidebar_position: 5
title:  Radius Ruler and Ruler
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

The **Ruler tools** in OsmAnd are designed to help you measure distances and understand the [map scale](https://en.wikipedia.org/wiki/Scale_(map)) with precision.

- The **Ruler** tool displays a dynamic map scale in units such as meters or feet, helping you visually assess distances between objects on the screen.
- The **Radius Ruler** allows you to set a radius from any point on the map, showing concentric circles that represent distance intervals.
- The **Distance by Tap** tool lets you measure distances by tapping on the map — either from your current location or between any two locations.

These tools are useful for planning routes, estimating proximity to landmarks, and analyzing areas — whether for outdoor activities or precise navigation.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Ruler {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

The **Ruler** displays the current map scale as a line segment labeled with its real-world length (e.g., 100 m or 500 ft), at the bottom of the screen. Characteristics:

- The scale adapts dynamically as you zoom in or out.
- It gives a visual reference for estimating real-world distances between objects on the map.
- The segment length is rounded to convenient units (e.g., 100 m), roughly matching the width of a thumb for intuitive use.

This tool is helpful when you need a quick understanding of object sizes or distances without placing markers or routes.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Radius Ruler Widget {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → Add widget → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → Add widget → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

The [Radius Ruler Widget](../widgets/info-widgets.md#radius-ruler) shows the distance between your current location (*My Location*) and the center of the map. You can also move the map to set any custom center point. Characteristics:

- Display concentric circles centered on the selected point.
- The first circle reflects the current [map scale](#ruler) for quick visual reference.
- Automatically adjusts when zooming to maintain accurate radius values.

Use this widget to estimate proximity to points of interest or plan around a defined area.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Compass for Radius Ruler {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

When the **Radius Ruler** is active, the map displays a compass overlay to help orient yourself in space. The overlay shows how the map is aligned relative to true North, and may include a blue triangle indicating the device's current direction.

- The compass ring shows the map orientation — whether North is up or rotated.
- A **blue triangle** indicates the direction your device is facing.
- To use this feature, the device must support and enable a **compass sensor** (GPS compass, magnetometer).
- Holding the device horizontally improves accuracy and visualization.
- If the **blue triangle** and the **red arrow** (North) both point upward, the device is aligned to true North.

This overlay is helpful for outdoor navigation, allowing you to match [map orientation](../map/interact-with-map.md#map-orientation--compass) with the real environment.  

| | |
|------------|------------|
| Enable | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → Add widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → Add widget → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## Center / Bottom Position {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Other → Location position on screen*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

To increase the visible radius around your location, you can change the position of the Radius Ruler by selecting the *Center* or *Bottom* option.  

For more information about *the position on the screen*, see the article [Configure Screen](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D View {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

You can switch to **3D view** to better visualize distances and surrounding terrain when using the Radius Ruler. This view tilts the map and provides a perspective effect that expands the visible radius.

- Tap [the location button](../map/interact-with-map.md#my-location-and-zoom) to focus on your position.
- Use a [two-finger swipe up](../map/interact-with-map.md#gestures) gesture to tilt the map into 3D mode.

The radius circles will appear with depth, which is particularly useful for route planning in hilly areas or urban environments where vertical context matters.


## Distance by Tap {#distance-by-tap}

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

The **Distance by Tap** tool allows you to measure distances between points on the map without using the Radius Ruler or creating a route.

There are two use cases:

- **Distance from your location to a point**  
  Tap anywhere on the map and a straight line will appear from your current location to the tapped point, along with a distance label. The line remains on screen even if you tap elsewhere.

- **Distance between any two points**  
  Tap two points on the map simultaneously (multi-touch). A line connects the two points, and the measured distance is displayed.

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Text size (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Units Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Video Guides {#video-guides}

Watch these short tutorials to learn how to use the Radius Ruler and related tools in OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Related Articles {#related-articles}

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Quick Action](./quick-action.md)
- [Marker widgets](./markers.md)


