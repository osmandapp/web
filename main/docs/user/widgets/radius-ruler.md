---
sidebar_position: 5
title:  Radius ruler and Ruler
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


> *This article was last updated in March 2023.*

## Overview

All ruler tools help you understand the current [map scale](https://en.wikipedia.org/wiki/Scale_(map)) and measure distances. The Ruler's Radius tool allows you to set a radius around a selected point on the map, displaying distance circles on the map. The Tangent Distance tool allows you to calculate the distance between selected points or find the distance to a specific point.  

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Ruler

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

The Ruler displays a map scale and shows the number of meters / feet (other units of measure) in a segment. It can be seen at the bottom of the screen. On average map scale is a round number that could fit a size of thumb. 

The Ruler allows you to visually assess objects on the map and the distance between them and changes the displayed value as you zoom in on the map.   

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Radius ruler widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="radius_ruler_item"/>*

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="radius_ruler_item"/>*

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table> 

</TabItem>

</Tabs>

[Radius ruler widget](../widgets/info-widgets.md#radius-ruler) shows distance between your location and center point of the *Radius-ruler*. Radius of the first circle is equal to [the map scale](#ruler).


## Compass for Radius ruler

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

By default, [Map orientation](../map/interact-with-map.md#map-orientation--compass) information is displayed as circles with a radius ruler. It displays how North of the map is oriented in relation top of the device.  

You may also see a **blue triangle** as the compass direction. This option requires the **GPS compass** on the device to be present and enabled. Hold the device horizontally to see where the device head is pointing.  

**Hint**. 
If you rotate the device so that the blue and red arrows are pointing up, the head of the device is pointing north. If you rotate the map or device so that the blue and red arrows are aligned, you can see that the map is correctly oriented to the physical landscape.  

| | |
|------------|------------|
| Enable | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_ruler_control"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_ruler_control"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


### Center / Bottom position

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

In order to expand the visible range of the ruler radius you need to turn off _<Translate android="true" ids="always_center_position_on_map"/>_: 

_<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,always_center_position_on_map"/>_

Then you need to enable _<Translate android="true" ids="radius_ruler_item"/>_ in the _<Translate android="true" ids="layer_map_appearance"/>_ when you press the location button _<Translate android="true" ids="radius_ruler_item"/>_ will move downward.

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_android.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

In order to expand the visible range of the ruler radius you need to turn off _<Translate ios="true" ids="always_center_position_on_map"/>_: 

_<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,general_settings_2,always_center_position_on_map"/>_

Then you need to enable _<Translate ios="true" ids="map_widget_ruler_control"/>_ in the _<Translate ios="true" ids="layer_map_appearance"/>_ when you press the location button _<Translate ios="true" ids="map_widget_ruler_control"/>_ will move downward.

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>


### 3D view

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

In order to expand the visible range of the ruler radius for you need to press on [the location button](../map/interact-with-map.md#my-location--zoom) and [change the map Tilt to 3D view](../map/interact-with-map.md#gestures).

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

In order to expand the visible range of the ruler radius for you need to press on [the location button](../map/interact-with-map.md#my-location--zoom) and [change the map Tilt to 3D view](../map/interact-with-map.md#gestures).

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

### Video Guides

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Video guide how to use Radius ruler:

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

Video guide how to use Radius ruler:

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Distance by tap tool

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)  

**Distance from your location to a point on the map**  
If you tap the map once, a line from your current location and the distance to it will be displayed. The line will also be active if you tap the screen repeatedly.  

**Distance between 2 points on the map**  
If you touch two points at the same time, the map will show the line between them and the distance.  

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

