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
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



All ruler tools help to understand [scale of the map](https://en.wikipedia.org/wiki/Scale_(map)) and measure distances. Radius-ruler tool helps to determine the radius around the selected point on the map via displaying distance-circles on the map. Distance by tap tool helps to calculate the distance between selected points or to find the distance to a specific point.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)

## Ruler

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

The Ruler displays a map scale and shows the number of meters / feet (other units of measure) in a segment. It can be seen at the bottom of the screen. On average map scale is a round number that could fit a size of thumb. 

The Ruler gives a visual estimate of the objects on the map and distance between them and it will change the displayed value during map zooming.

![Ruler tool](@site/static/img/widgets/ruler_tool_map.png)


| | |
|------------|------------|
| Units Format | _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>_  |

</TabItem>

<TabItem value="ios" label="iOS">

The Ruler displays a map scale and shows the number of meters / feet (other units of measure) in a segment. It can be seen at the bottom of the screen. On average map scale is a round number that could fit a size of thumb. 

The Ruler gives a visual estimate of the objects on the map and distance between them and it will change the displayed value during map zooming.

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)


| | |
|------------|------------|
| Units Format  | _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>_ |

</TabItem>

</Tabs>


## Radius-ruler widget


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Radius-ruler widget shows distance between your location and center point of the 'Radius-ruler'. Radius of the first circle is equal to [the map scale](#ruler).

| | |
|------------|------------|
| Enable | _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets,radius_ruler_item"/>_  |
| Click | Сhanges widget state between the black scale, the grey one and non-visible modes. |
| Units Format | _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>_  |

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Radius-ruler widget shows distance between your location and center point of the 'Radius-ruler'. Radius of the first circle is equal to [the map scale](#ruler).

| | |
|------------|------------|
| Enable | _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_ruler_control"/>_ |
| Click | Сhanges widget state between the black scale, the grey one and non-visible modes. |
| Units Format | _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>_  |

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget_ios.png) ![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget_ios_1.png) ![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget_ios_2.png)

</TabItem>

</Tabs>


## Compass for Radius-ruler

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Compass ruler](@site/static/img/widgets/compass_ruler.png)

By default [Map orientation](../map/interact-with-map.md#map-orientation--compass) information is displayed on radius-ruler circles. It displays how the Map North is oriented to the Head of device. 

In addition to that, you could see **blue triangle** as a Compass direction. This option requires to have **GPS-compass** present & enabled on your device. Keep your device flat, so you could see where head of device is pointing out. 

**Hint**: if you rotate your device such as blue and red arrow pointing up, your device head will be pointing to North. If you rotate the map or device to match blue and red arrows, then you could see the map properly oriented to the physical landscape.

| | |
|------------|------------|
| Enable | _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,radius_ruler_item,hide_compass_ruler"/>_ |
| Units Format | _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>_ |

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

By default [Map orientation](../map/interact-with-map.md#map-orientation--compass) information is displayed on radius-ruler circles. It displays how the Map North is oriented to the Head of device. 

In addition to that, you could see **blue triangle** as a Compass direction. This option requires to have **GPS-compass** present & enabled on your device. Keep your device flat, so you could see where head of device is pointing out. 

**Hint**: if you rotate your device such as blue and red arrow pointing up, your device head will be pointing to North. If you rotate the map or device to match blue and red arrows, then you could see the map properly oriented to the physical landscape.

| | |
|------------|------------|
| Enable | _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_ruler_control,shared_string_ellipsis,show_compass_ruler"/> / <Translate ios="true" ids="hide_compass_ruler"/>_ |
| Units Format | _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>_|

</TabItem>

</Tabs>


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

## 'Distance by tap' tool


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

**Distance from your location to a point on the map**: after single tap on the map, the line from your current location and distance will be displayed. The line will be active during long touch on the screen as well.

**Distance between 2 points on the map**: touch simultaneously two spots on the map, the line between points and the distance will be displayed.

| | |
|------------|------------|
| Enable |  <Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap"/>|
| Text size | <Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,map_widget_distance_by_tap,text_size"/>|
| Units Format |<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>|

</TabItem>

<TabItem value="ios" label="iOS">

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

**Distance from your location to a point on the map**: after single tap on the map, the line from your current location and distance will be displayed. The line will be active during long touch on the screen as well.

**Distance between 2 points on the map**: touch simultaneously two spots on the map, the line between points and the distance will be displayed.

| | |
|------------|------------|
| Enable |  <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_appearance_rem,map_widget_distance_by_tap"/> |
| Units Format |<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>|

</TabItem>

</Tabs>

