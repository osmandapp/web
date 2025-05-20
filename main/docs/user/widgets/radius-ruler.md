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



## Overview

Ruler tools are designed to help you accurately assess the current [map scale](https://en.wikipedia.org/wiki/Scale_(map)) and measure distances. The *Ruler's Radius* tool lets you set a radius around any selected point on the map, displaying concentric distance circles for easy reference. The *Tangent Distance* tool allows you to calculate the distance between selected points or determine the distance to a specific point on the map, providing precise measurements for navigation and planning.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Ruler

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

The **Ruler** tool provides a visual representation of the map scale, showing the distance in meters, feet, or other units of measurement for a segment on the map. You can find the scale displayed at the bottom of the screen, allowing for quick reference as you navigate. Typically, the map scale is rounded to a convenient number that roughly corresponds to the width of a thumb, making it easy to estimate distances.

As you zoom in or out, the *Ruler* dynamically adjusts, allowing you to visually assess the size of objects on the map and the distance between them with greater accuracy. Whether you are measuring the distance between landmarks or islands, the *Ruler* adapts to provide real-time distance feedback, ensuring you always have an accurate sense of scale at your fingertips.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Radius Ruler Widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="radius_ruler_item"/>*

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="radius_ruler_item"/>*

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

The **[Radius Ruler Widget](../widgets/info-widgets.md#radius-ruler)** displays the distance between your current location (*My Location*) and the center of the map or a point you select on the map, marked as the center of the *Radius Ruler*. This tool is useful for quickly measuring distances from your position to a specific point, helping you gauge proximity to landmarks or other locations.

The first circle drawn by the *Radius Ruler* corresponds to the current [map scale](#ruler), providing an easy visual reference for understanding the area surrounding your location. As you adjust the zoom level, the map scale and radius dynamically adapt, offering accurate distance measurements from your location to the center point on the map


## Compass for Radius Ruler

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

By default, [Map orientation](../map/interact-with-map.md#map-orientation--compass) is displayed as circles alongside the Radius Ruler, showing how the map's North is aligned with the top of your device screen. This allows for easy navigation and and orient yourself in space.

You may also notice a **blue triangle** that indicates the compass direction. This feature requires that the **GPS compass** on your device is present and enabled. When enabled, this feature helps you align your device with the map. To utilize this, hold your device horizontally to see the direction it is facing.


**Hint**. If you rotate the device so that the *blue triangle* and the *red arrow* are pointing upwards, the top of the device will be oriented towards true North. Additionally, by rotating the map or device until the *blue triangle* and *red arrow* are aligned, you can confirm that the map is accurately oriented to match the physical landscape around you.

| | |
|------------|------------|
| Enable | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_ruler_control"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_ruler_control"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


### Center / Bottom Position

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,always_center_position_on_map"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_android.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,general_settings_2,always_center_position_on_map"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

To extend the visible range of the Radius Ruler, you need to disable the *<Translate android="true" ids="always_center_position_on_map"/>* option.
Next, activate the *<Translate android="true" ids="radius_ruler_item"/>* setting in the *<Translate android="true" ids="layer_map_appearance"/>* menu. Once enabled, tapping the location button will shift the *<Translate android="true" ids="radius_ruler_item"/>* downwards, allowing you to see more of the surrounding area on the map.

### 3D View

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>


To enhance the visible range of the *Radius Ruler*, tap on [the location button](../map/interact-with-map.md#my-location-and-zoom) and then [adjust the map's tilt to switch to 3D view](../map/interact-with-map.md#gestures). This perspective allows you to better visualize distances and relationships between points on the map.


### Video Guides

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>

Watch this video guide for a step-by-step walkthrough on how to effectively use the *Radius Ruler* tool.


## Distance by Tap Tool

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)  

**Distance from your location to a point on the map**  
Tap a point on the map and a line appears showing the distance from your current location to the selected point. This line remains visible even if you keep tapping the screen to check other points.

**Distance between two points on the map**  
To measure the distance between two points, tap both points simultaneously. The map will display a line connecting the points along with the measured distance between them.

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap"/>* |
| Text size (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap,text_size"/>* |
| Units Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Related Articles

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Quick Action](./quick-action.md)
- [Marker widgets](./markers.md)

> *This article was last updated in September 2024*
