---
sidebar_position: 11
title:  Route line appearance
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

The Navigation by route option provides you with simple step-by-step instructions, that help you easily reach your destination. No matter whether you drive a car, ride a horse, or go by foot.  

## Route appearance

...

### Navigation route

If you have selected the engine type in the [vehicle parameters](../personal/profiles/#vehicle-parameters), the CO2 footprint data will be displayed above the graph.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,routing_settings"/>*

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios-2.png)

</TabItem>

</Tabs>




### Route line appearance

This menu allows you to adapt the route line appearance. If there are some changes to your route, you can customize them using this menu. Its could be like, changes in elevation while driving, next significant uphill or downhill, ice, unpaved roads, autobahns, etc.  In the items of this menu you will be able to change all these parameters by colour or just apply any colour and transparency to the line. Besides, if necessary, you can change the width of the line and the display of the angle at turns.  

:::note
  
<ProFeature/> Some parameters you can use only with Pro feature <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation route Android](@site/static/img/navigation/route/RLApp.png)  


#### Colour

Select a route line's colour by types.  

|  |
|------------|
|&nbsp;*"<Translate android="true" id="map_widget_renderer"/>"* – Map style is used with default colours. You can see a full description of the colours by clicking here [Map style](../map/vector-maps.md#default-map-styles) |  
![map stule](@site/static/img/navigation/route/map_st_2.png) |
| &nbsp;*"Custom"* – It allows you to show the line in any preferred colour and transparency. You can select different settings for the day map and separately for the night map. |  
![custom](@site/static/img/navigation/route/custom.png) |
| &nbsp;*"<Translate android="true" id="altitude"/>"* – It shows the height on the route point as **green**-**yellow**-**red** gradient. Where **green** represents lowest point of the route, **yellow** - median height points and **red** the highest points. If the route altitude difference is < 100 m, gradient is applied partially or not applied i.e. for a simple uphill route from 100 m to 150 m - the gradient will be **green**-**yellow**. Please note that the colour doesn't represent the absolute height value.    |  
![Altitude](@site/static/img/navigation/route/Altitude_rl.png) |
|*<ProFeature/> &nbsp;"<Translate android="true" id="shared_string_slope"/>"* – The route line will be colored differently depending on the elevation profile of the route. [Slope](../plugins/contour-lines.md#slope-map)|
![Altitude](@site/static/img/navigation/route/Slope.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_roadClass_name"/>"* – Colour the route or the track line according to the road classification. [Road style](../map/vector-maps.md#road-style)|
![Altitude](@site/static/img/navigation/route/Roud_type.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_surface_name" />"* – Provides information about the physical surface of the road/footpath. [Surface](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Surface.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_smoothness_name"/>"* – Classification of maneuverability of roads/footpaths for wheeled vehicles, particularly with regard to surface regularity/flatness. [Smoothness](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Smoothness.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_winter_ice_road_name" />"* – Colouring the route or track line according to the winter road classification. [Winter and ice roads](../map/vector-maps.md#winter-and-ski)|
![Altitude](@site/static/img/navigation/route/Winter.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_tracktype_name" />"* – Colouring the route or track line by surface composition. Typically used when the road network is largely unpaved. [Surface firmness](../map-legend/osmand.md#surface-smoothness)| 
![Altitude](@site/static/img/navigation/route/firmness.png)  |
| *<ProFeature/> &nbsp;"Difficulty of horse trails"* – Render paths according to difficulty of horse trails.  |
![Altitude](@site/static/img/navigation/route/firmness.png)  |  


#### Width  

Select a route line's width.

|  |
|------------|
|*"<Translate ios="true" id="map_settings_style"/>"* – It's used with default width. You can see a full description of the map style by clicking there [Map style](../map/vector-maps.md#default-map-styles)  |
![map style](@site/static/img/navigation/route/map_st.png)   ![map stule](@site/static/img/navigation/route/map_st_2.png) |
|*"Thin width / Medium width / Bold width"* – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly. |
![width](@site/static/img/navigation/route/width.png)   ![width](@site/static/img/navigation/route/width_med.png)|
|*"Custom"* – It allows you to show the line in some preferred width. Select the width using the slider.|
![custom](@site/static/img/navigation/route/custom_1.png)  ![custom](@site/static/img/navigation/route/custom_2.png)|  



&nbsp;  
#### Turn Arrows  
Select whether turn arrows are indicated on the route line or not. 

|  |
|------------|
|![Altitude](@site/static/img/navigation/route/turn_arr.png) ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)|
|![Altitude](@site/static/img/navigation/route/turn_arr_off_and.png) ![Altitude](@site/static/img/navigation/route/turn_arr_off_map_and.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

_<Translate ios="true" ids="menu,shared_string_settings,app_profiles,routing_settings_2,customize_route_line"/>_

&nbsp;  
![Navigation route Android](@site/static/img/navigation/route/RLApp_iOS.png)

<!--Customize route line menu items-->
&nbsp;  


#### Colour
Select a route line's colour by types.  

|  |
|------------|
|&nbsp;*"<Translate android="true" id="map_widget_renderer"/>"* – Map style is used with default colours. You can see a full description of the colours by clicking here [Map style](../map/vector-maps.md#default-map-styles) |  
![map stule](@site/static/img/navigation/route/map_st_2.png) |
| &nbsp;*"Custom"* – It allows you to show the line in any preferred colour and transparency. You can select different settings for the day map and separately for the night map. |  
![custom](@site/static/img/navigation/route/custom_ios.png) |
| &nbsp;*"<Translate android="true" id="altitude"/>"* –  It shows the height on the route point as **green**-**yellow**-**red** gradient. Where **green** represents lowest point of the route, **yellow* - median height points and **red** the highest points. If the route altitude difference is < 50 m, gradient is not applied i.e. for a simple uphill route from 100 m to 120 m. Please note that the colour doesn't represent the absolute height value. |  
![Altitude](@site/static/img/navigation/route/Altitude_rl.png) |
<!--
|*<ProFeature/> &nbsp;"<Translate android="true" id="shared_string_slope"/>"* – The route line will be colored differently depending on the elevation profile of the route. [Slope](../plugins/contour-lines.md#slope-map)|
![Altitude](@site/static/img/navigation/route/Slope.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_roadClass_name"/>"* – Colour the route or the track line according to the road classification. [Road style](../map/vector-maps.md#road-style)|
![Altitude](@site/static/img/navigation/route/Roud_type.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_surface_name" />"* – Provides information about the physical surface of the road/footpath. [Surface](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Surface.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_smoothness_name"/>"* – Classification of maneuverability of roads/footpaths for wheeled vehicles, particularly with regard to surface regularity/flatness. [Smoothness](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Smoothness.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_winter_ice_road_name" />"* – Colouring the route or track line according to the winter road classification. [Winter and ice roads](../map/vector-maps.md#winter-and-ski)|
![Altitude](@site/static/img/navigation/route/Winter.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_tracktype_name" />"* – Colouring the route or track line by surface composition. Typically used when the road network is largely unpaved. [Surface firmness](../map-legend/osmand.md#surface-smoothness)| 
![Altitude](@site/static/img/navigation/route/firmness.png)  |
| *<ProFeature/> &nbsp;"Difficulty of horse trails"* – Render paths according to difficulty of horse trails.  |
![Altitude](@site/static/img/navigation/route/firmness.png)  | -->



&nbsp;  
#### Width
Select a route line's width.

|  |
|------------|
|*"<Translate ios="true" id="map_settings_style"/>"* – It's used with default width. You can see a full description of the map style by clicking there [Map style](../map/vector-maps.md#default-map-styles)  |
![map style](@site/static/img/navigation/route/width_ms_ios.png)   ![map stule](@site/static/img/navigation/route/map_st_2.png) |
|*"Thin width / Medium width / Bold width"* – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly. |
![width](@site/static/img/navigation/route/width_ios.png)   ![width](@site/static/img/navigation/route/width_med.png)|
|*"Custom"* – It allows you to show the line in some preferred width. Select the width using the slider.|
![custom](@site/static/img/navigation/route/width_cus_ios.png)  ![custom](@site/static/img/navigation/route/custom_2.png)|  


&nbsp;  
#### Turn Arrows
Select whether turn arrows are indicated on the route line or not. 

|  |
|------------|
|![turn_arr_ios](@site/static/img/navigation/route/turn_arr_ios.png) ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_map.png)|
|![turn_arr_on_ios](@site/static/img/navigation/route/turn_arr_on_ios.png) ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png)|
___

<!-- ![customise route line 1](@site/static/img/navigation/route/customise_route_line-1.png) -->

</TabItem>

</Tabs>  

