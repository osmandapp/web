---
sidebar_position: 4
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

<!--This article is incomplete and needs improvement. You can help by creating a revision request.-->

Set a point on the map where your car is left on the street and notify your calendar when parking time starts. This will make it easier for you to track the time and location of your car.

## Overview 

A parking point on the map and notification in the calendar is provided by the Parking plugin. It's free and works well with downloaded OsmAnd Maps and Navigation. A parking spot helps you remember the exact location where your car is left, as well as be aware of how far it is already from the parking spot and, if necessary, return on time, avoid extra unnecessary expenses, and share the location with your relatives. The parking spot is easy to set up, with or without time tracking, and delete after successful use. 


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>

## Setup

To use a parking point on the map, you need to make the following settings:    
1. Enable the [Parking position plugin](../start-with/first-steps.md#how-to-configure-plugins) in the Plugins section of the Main menu.  
2. If needed, add the [Parking widget](#stay-informed) to the screen.  
  
:::note Mapillary widget
The Parking widget becomes available only when the Parking plugin is enabled.
:::

## Parking point on the map

When a parking spot appears on the map, it acquires the latitude and longitude of the selected geolocation, as well as a timestamp of when it was created. This helps you visually identify the parking spot both when you set the spot and when you later track it and use it to navigate when needed. There are several ways to store parking information and use it to verify time and/or location.


###  Set a point

To set a Parking point on the map, zoom in to the required level, then long-tap on the point on the map and in the [Context menu](../map/map-context-menu.md) that opens do the following:   

1. Tap [**Actions**](../map/map-context-menu.md#-add--delete-parking-point).
2. Tap **Parking**.
3. If needed, set time, and add a reminder to the Calendar app. 
4. **Save** the point. 
   
<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, to set a Parking point, long-tap a spot on the map and in the opened [Context menu](../map/map-context-menu.md), do the following:

1. Tap **<Translate android="true" ids="shared_string_actions"/>**, and then tap **<Translate android="true" ids="context_menu_item_add_parking_point"/>**.
2. Consider time limits in the opened <Translate android="true" ids="parking_options"/> dialog: 

    - If there is no time limit, select the **<Translate android="true" ids="osmand_parking_no_lim_text"/>** option, and the point without time constraints will be set on the map. 

    - If a time limit is required, select **<Translate android="true" ids="osmand_parking_time_limit"/>** parking option, and then:

       - Select the end time of parking.
       - Add a reminder for the Calendar app.
       - Tap **OK**, and the point with the time limit you set is placed on the map.  

![Set Parking point in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to set a Parking point, long-tap a spot on the map and in the opened [Context menu](../map/map-context-menu.md), do the following:

1. Tap **<Translate ios="true" ids="actions"/>**, and then tap **<Translate ios="true" ids="add_parking_short"/>**.
2. Consider time limits in the opened <Translate ios="true" ids="parking_marker"/> dialog. If a time limit is needed, enable the **<Translate ios="true" ids="time_limited"/>** option, and establish the following:

    - time when to end parking;
    - reminder for the Calendar app.

3. Tap **Save**, and the point will be set on the map. 

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_.png)

</TabItem>

</Tabs>

>**NOTE**: The start time is always automatically set for the Parking Point. The end time, if selected to be set for a parking point, can only be re-added but not edited. The expected end time of the parking reminder in the Calendar app can be updated as needed. 


&nbsp;&nbsp;&nbsp;&nbsp;

### Stay informed

To be aware of the parking location and time of parking after setting a parking point, you can use the [Parking widget](../widgets/info-widgets.md#-parking-widget) and the context menu of the point on the map.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

The **Location** is displayed using [Parking widget](../widgets/info-widgets.md#-parking-widget). When you close and reopen the app, the Parking Widget helps you find your parking spot on the map. Just tap the widget and the parking spot appears on the map.  


In addition, the widget shows the distance from your current location or the center of the screen to the Parking spot.  

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

The **Start Time** is always displayed in the parking point details. To view details, tap <Translate android="true" ids="parking_place"/> and the parking point context menu will show the start time.  

![Parking info in Android](@site/static/img/plugins/parking/and_parking_info.png) 

**Time Left** or **Time Overdue** in the details of the parking point with limited time, opened with the <Translate android="true" ids="pick_up_till"/>, will show the total amount of time: either the remaining time before the expected end of parking or the overdue time since then.  

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png) 

The **<Translate android="true" ids="osmand_parking_add_event"/>** to Calendar app option, if checked on **<Translate android="true" ids="osmand_parking_time_limit_title"/>** pop-up screen when you set a parking time limit, creates a reminder of the end of parking time in the Calendar app by default on your device.  


</TabItem>

<TabItem value="ios" label="iOS">

The **Location** is displayed using [Parking widget](../widgets/info-widgets.md#-parking-widget). When you close and reopen the app, the Parking Widget helps you find your parking spot on the map. Just tap the widget and the parking spot appears on the map.  


In addition, the widget shows the distance from your current location or the center of the screen to the Parking spot.  
 

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

**Start Time** is always visible in the details of the Parking point. To see the details, tap the Parking point, and the opened <Translate ios="true" ids="parking_marker"/> context menu will show you when Parking started. 

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png) 


**Time Left** or **Time Overdue** in the details of a time-limited Parking point, opened with the <Translate ios="true" ids="parking_marker"/> context menu, will show the overall amount of time: either left up to the expected end of the parking, or overdue since then. 

![Time left in iOS](@site/static/img/plugins/parking/ios_parking_info_left.png)

**<Translate ios="true" ids="add_notification_calendar"/>** is the option that if enabled during setting a time-limited Parking point, creates a reminder about the end of Parking time in the default Calendar app on your device. 

![Parking reminder in Calendar](@site/static/img/plugins/parking/ios_parking_in_calendar.png) 

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

### Navigating to a Waypoint

The Parking point can be used for navigation when the geolocation is unknown and/or simply to find the best course when navigating to your vehicle's parking location. To connect a Parking point to the navigation function, do the following:  
* Tap the navigation icon on your map. 
* Select the profile. 
* Tap the From field, and select an option of your current position.  
* Tap the To fiels, and select the Parking option. 
   
<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

To show the route from your current position to the Parking point, tap the navigation icon on the map, select the profile (i.e. on foot, public transport, etc.), and then tap the **To** field and among the available options look for **<Translate android="true" ids="osmand_parking_position_name"/>**.

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

To show the route from your current position to the Parking point, tap the navigation icon on the map, select the profile (i.e. on foot, public transport, etc.), and then tap the **To** field and among the available options look for **<Translate ios="true" ids="parking"/>**.

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

### Remove the point

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

To delete a Parking spot from the map, long-tap it and select **<Translate android="true" ids="poi_action_delete"/>** in the [context menu](../map/map-context-menu.md#-add--delete-parking-point) that opens. If there are any reminders, they will also be deleted in the calendar app.  

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

To delete a Parking spot from the map, long-tap it and select **<Translate ios="true" ids="shared_string_dismiss"/>** in the [context menu](../map/map-context-menu.md#-add--delete-parking-point) that opens. If there are any reminders, they will also be deleted in the calendar app.  

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png) 

</TabItem>

</Tabs>

## Parking widget

The [Parking widget](../widgets/info-widgets.md#-parking-widget) is added to the screen automatically as soon as the Parking plugin is enabled. However, before installing a parking spot, make sure that the plugin is on the screen, and if not, add it by enabling the appropriate option in the [Configure Screen](../widgets/configure-screen.md) menu. The Parking widget will help you quickly find a parking spot on the map.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, toggle on the <Translate android="true" ids="map_widget_parking"/> widget in: 

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_parking"/> 

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, toggle on the <Translate ios="true" ids="product_title_parking"/> widget in: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,layer_map_appearance,product_title_parking"/>


![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget.png)

</TabItem>

</Tabs>


