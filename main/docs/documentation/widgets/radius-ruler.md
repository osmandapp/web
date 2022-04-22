---
sidebar_position: 5
title:  Radius-ruler and Ruler
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


All ruler tools help to understand [scale of the map](https://en.wikipedia.org/wiki/Scale_(map)) and measure distances. Radius-ruler tool helps to determine the radius around the selected point on the map via displaying distance-circles on the map. Distance by tap tool helps to calculate the distance between selected points or to find the distance to a specific point.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)

## Ruler

The Ruler displays a map scale and shows the number of meters / feet (other units of measure) in a segment. It can be seen at the bottom of the screen. On average map scale is a round number that could fit a size of thumb. 

The Ruler gives a visual estimate of the objects on the map and distance between them and it will change the displayed value during map zooming.

![Ruler tool](@site/static/img/widgets/ruler_tool_map.png)


| | |
|------------|------------|
| Units Format | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>  |
| | <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/> |


## Radius-ruler widget
Radius-ruler widget shows distance between your location and center point of the 'Radius-ruler'. Radius of the first circle is equal to [the map scale](#ruler).

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,radius_ruler_item"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_ruler_control"/> |
| Click | Сhanges widget state between the black scale, the grey one and non-visible modes. |
| Units Format | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/>  |

## Compass ruler for Radius-ruler widget

![Compass ruler](@site/static/img/widgets/compass_ruler.png)

By default [Map orientation](/docs/documentation/map/interact-with-map#map-orientation--compass) information is displayed on radius-ruler circles. It displays how the Map North is oriented to the Head of device. 

In addition to that, you could see **blue triangle** as a Compass direction. This option requires to have **GPS-compass** present & enabled on your device. Keep your device flat, so you could see where head of device is pointing out. 

**Hint**: if you rotate your device such as blue and red arrow pointing up, your device head will be pointing to North. If you rotate the map or device to match blue and red arrows, then you could see the map properly oriented to the physical landscape.

| | |
|------------|------------|
| Enable |<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,radius_ruler_item,hide_compass_ruler"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_ruler_control,shared_string_ellipsis,show_compass_ruler"/> / <Translate ios="true" ids="hide_compass_ruler"/> |
| Units Format | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,angular_units"/>|


### Center / Bottom position
In order to expand the visible range of the ruler radius for **Android** you need to turn off <Translate android="true" ids="always_center_position_on_map"/>: 

<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,always_center_position_on_map"/>

Then you need to enable <Translate android="true" ids="radius_ruler_item"/> in the <Translate android="true" ids="layer_map_appearance"/> when you press the location button <Translate android="true" ids="radius_ruler_item"/> will move downward.

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_android.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_android.png)

### 3D view (iOS)

In order to expand the visible range of the ruler radius for **iOS** you need to press on the location button and change the map Tilt to 3D view.

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)


### Video Guides
Video guide how to use Radius ruler for **Android**
[![Video guide how to use Radius ruler for Android](@site/static/img/widgets/radius_ruler_video_android.png)](https://www.youtube.com/watch?v=MWT20dVtkDc)


Video guide how to use Radius ruler for **iOS**
[![Video guide how to use Radius ruler for iOS](@site/static/img/widgets/radius_ruler_video_ios.png)](https://www.youtube.com/watch?v=C9QLQ52ndiA&t=10s)

## 'Distance by tap' tool

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

**Distance from your location to a point on the map**: after single tap on the map, the line from your current location and distance will be displayed. The line will be active during long touch on the screen as well.

**Distance between 2 points on the map**: touch simultaneously two spots on the map, the line between points and the distance will be displayed.

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_appearance_rem,map_widget_distance_by_tap"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_appearance_rem,map_widget_distance_by_tap"/> |
| Units Format |<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/>|
