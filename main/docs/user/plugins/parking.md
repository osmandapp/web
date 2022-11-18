---
sidebar_position: 8
title:  Parking position
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

With the plugin, you can set a spot on the map where your car will be left on the street and notify the calendar of the beginning of the parking time. This way, it will be easier for you to keep track of the time and location of your car.

## Overview 

Parking spot on the map and notification in the calendar is provided by the Parking plugin. It's free and works well with downloaded OsmAnd maps. Parking spot helps you know exactly where your car is parked and how far away you are from the parking spot. For example, it can be very useful to get back on time and avoid unnecessary expenses. The plugin also allows you to share the location with the people you want. The parking spot is easy to set up, with or without time tracking, and delete after successful use. 


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Setup

To use a parking spot on the map, you need to make the following settings:    
1. Enable the [Parking position plugin](../plugins/index.md#enable--disable) in the Plugins section of the Main menu.  
2. Add a [parking spot](#set-a-spot) on the map.
3. If needed, add the [Parking widget](#parking-widget) to the screen.  


## Parking spot on the map

When a parking spot appears on the map, it acquires the latitude and longitude of the selected geolocation, as well as a timestamp of exactly when it was created. This helps you visually identify the parking spot both when you set the spot and when you later track it and use it to navigate when needed.  


###  Set a spot

To set a Parking spot on the map, zoom-in to the required level, then long-tap on the place on the map and in the [Context menu](../map/map-context-menu.md) that opens, do the settings.       

   
<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">


1. Tap [Actions](../map/map-context-menu#actions).  
2. Tap **Mark as parking location**.  
3. Select the time limit from the <Translate android="true" ids="parking_options"/> dialog: *Time-unlimited* or *Time-limited parking*.    

- **<Translate android="true" ids="osmand_parking_no_lim_text"/>** option - if there is no time limit, select this option and a spot with no time limit appears on the map.  
- **<Translate android="true" ids="osmand_parking_time_limit"/>** option - if a time limit is required, select this option, and then:

    - Select the end time of parking.
    - Add or not a reminder for the Calendar app.
    - Tap **OK**, and the spot with the time limit you set will be placed on the map.  

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

1. Tap [Actions](../map/map-context-menu#actions).  
2. Tap **<Translate ios="true" ids="add_parking_short"/>**.  
3. Select the time limit from the **Parking marker** dialog.  

- If a time limit is required, enable **<Translate ios="true" ids="time_limited"/>** option, and then:

    - Select the end time of parking.
    - Add or not a reminder for the Calendar app.
    - Tap **Save**, and the spot with the time limit you set will be placed on the map.  
 

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>


:::info NOTE
The start time is always automatically set for the parking spot. The end time, if a time limit is selected, can only be re-added by recreating the parking space, but not edited. Parking time end notifications can only be placed in the calendar app on your device if you specified Add notification in the Calendar app when you created the parking space.  
:::


### Stay informed

To be aware of the parking location and time of parking after setting up a parking spot, you can use the [Parking widget](../widgets/info-widgets.md#-parking-widget) or use the context menu of the place on the map.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

**Location**. You can zoom out of the map to see a parking spot or use the [Parking widget](../widgets/info-widgets.md#-parking-widget). When you close and reopen the app, the Parking Widget helps you find your parking spot on the map. Just tap the widget and the parking spot appears on the map.  

In addition, the widget shows the distance from your current location or the center of the screen to the Parking spot.  

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

**Start Time** is always displayed in the parking spot details. To view details, tap <Translate android="true" ids="parking_place"/> and the parking spot context menu will show the start time.  

![Parking info in Android](@site/static/img/plugins/parking/and_parking_info.png) 

**Time Left** or **Time Overdue** in the time-limited Parking spot information will show the total amount of time: either the time left before the estimated end of parking or the time overdue since then.  

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png) 

**<Translate android="true" ids="osmand_parking_add_event"/>** option, if checked on the Set parking time limit pop-up screen, allows you to create a reminder about the end of parking time in the default Calendar app on your device.  


</TabItem>

<TabItem value="ios" label="iOS">

**Location** You can zoom out of the map to see a parking spot or use the [Parking widget](../widgets/info-widgets.md#-parking-widget). When you close and reopen the app, the Parking Widget helps you find your parking spot on the map. Just tap the widget and the parking spot appears on the map.  

In addition, the widget shows the distance from your current location or the center of the screen to the Parking spot.  
 

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

**Start Time** is always displayed in the parking spot details. To view details, tap Parking marker and the parking spot context menu will show the start time.  

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png) 


**Time Left** or **Time Overdue** in the time-limited Parking spot information will show the total amount of time: either the time left before the estimated end of parking or the time overdue since then.  

![Time left in iOS](@site/static/img/plugins/parking/ios_parking_info_left.png)

**<Translate ios="true" ids="add_notification_calendar"/>** option, if checked on the Set parking time limit pop-up screen, allows you to create a reminder about the end of parking time in the default Calendar app on your device.
 

</TabItem>

</Tabs>



### Navigating to a Waypoint

The Parking spot can be used for navigation when the geolocation is unknown and/or simply to find the best course when navigating to your vehicle's parking location. To connect a Parking spot to the [Navigation](../navigation/route-navigation) function, do one of the following:  
- To show the route from your current position to the Parking spot, tap Navigation icon menu, select the profile, tap Set destination, and among the available options look for **Parking**.  
- To show the route from your current position to the Parking spot with using widget, tap **Parking widget**, tap Parking spot, select **Navigation**, select the profile. 
   
<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">


![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">


![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>



### Remove a spot

To remove a parking spot from the map, follow these steps:

- Сlick on the [widget](#parking-widget) or zoom out on the map to see the parking spot better.
- Tap the **parking spot**, and then select **delete/dismiss** in the [context menu](../map/map-context-menu.md#-add--delete-parking-point) that opens.  
If there are any reminders, they will also be deleted from the calendar application.


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">


![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">
  

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png) 

</TabItem>

</Tabs>

## Parking widget

The [Parking widget](../widgets/info-widgets.md#-parking-widget) is added automatically to widgets list when you enable the Parking plugin. Before setting up a parking spot, make sure the widget is on the screen, and if not, add it in the [Configure Screen](../widgets/configure-screen.md) menu. The Parking widget will help you quickly find a parking spot on the map.


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

You can add or delete the **<Translate android="true" ids="map_widget_parking"/> widget** by following this path:  
*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left,map_widget_right,map_widget_parking"/>*.  

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

You can add or delete the **<Translate ios="true" ids="product_title_parking"/> widget** by following this path:  
*<Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,product_title_parking"/>*


![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>


