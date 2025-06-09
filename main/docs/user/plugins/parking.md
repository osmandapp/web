---
sidebar_position: 12
title:  Parking Position
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Overview {#overview}

The **Parking Position** plugin helps you save and manage the location where you parked your car. It allows you to place a marker on the map, track the parking duration, and optionally set a calendar reminder for when your parking time ends.

This plugin is free and works offline with downloaded OsmAnd maps. You can quickly locate your parked vehicle, estimate walking distance back to it, and share the parking location if needed.

- You can add a parking spot manually via the context menu.
- If time-limited, the plugin records both the start and end time.
- The end time can trigger a reminder in your device’s calendar.
- Parking details can be viewed later or used for navigation.

The marker is temporary and easy to remove once no longer needed.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Required Setup Parameters {#required-setup-parameters}

To use a parking spot on the map, you need to make the following settings:

1. Enable the [Parking position plugin](../plugins/index.md#enable--disable) from the *Main Menu → Plugins*.  
2. Set a [parking spot](#set-a-spot) on the map via the context menu.
3. (Optional) Add the [Parking widget](#parking-widget) to the screen for quicker access.  


## Parking Spot on the Map {#parking-spot-on-the-map}

When you mark a parking spot, OsmAnd saves its geographic coordinates along with a timestamp. If needed, a time limit and calendar reminder can also be added.


### Set a Spot {#set-a-spot}

To set a Parking spot on the map, zoom-in to the required level, then long tap the place on the map and in the [Context menu](../map/map-context-menu.md) that opens, do the settings.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

To place a parking marker, zoom in on the map, long-tap the required location, and open the [context menu](../map/map-context-menu.md). Then:

1. Tap [Actions](../map/map-context-menu#actions).
2. Select **Mark as parking location** (*Android*) or **Add parking location** (*iOS*).
3. Choose one of the available options:
   - **Time-unlimited** – adds a basic marker without a countdown.
   - **Time-limited parking** – allows you to set an end time and optionally create a reminder in your device’s calendar.
4. Confirm to place the marker. The start time is saved automatically.

:::info Start Time
The start time is always set automatically. If you need to change the end time, you must delete and recreate the parking spot. Reminders are only added to your calendar if you selected this option during setup.
:::


### Stay Informed {#stay-informed}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Once a parking spot is saved, OsmAnd helps you monitor its location and timing through the context menu or the optional [Parking widget](#parking-widget).

You can view the parking marker by zooming out on the map or by tapping the **Parking widget**, which centers the map on your saved spot. The widget also shows the distance from your current position (or map center) to the parking location.

Additional details are shown when tapping the parking marker:

- **Start time** – the moment the marker was placed.
- **Time left** or **Time overdue** – if a time limit was set, this shows how much time remains or has passed since expiration.
- If you enabled the calendar reminder, it will appear in your device’s calendar app.


### Navigating to a Waypoint {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

You can use the parking spot as a navigation target to easily return to your vehicle. OsmAnd offers two main ways to start navigation to the saved parking location:

**Via Navigation menu**:

  1. Tap the **Navigation** button.  
  2. Choose a profile.  
  3. Tap **Set destination** and select **Parking** from the list of saved points.

**Via Parking widget**:

  1. Tap the **Parking widget**.  
  2. Tap the parking spot marker.  
  3. Select **Navigation** and choose the profile you want to use.


### Remove a Spot {#remove-a-spot}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

To delete a parking marker:

1. Locate the parking spot on the map or tap the **Parking widget**.
2. Tap the marker to open the context menu.
3. Select **Delete** or **Dismiss**.

If a calendar reminder was set, it will also be removed automatically.


## Parking Widget {#parking-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_parking"/>*  

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="parking_place"/>*  

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

The [Parking widget](../widgets/info-widgets.md#parking-widget) shows the distance from the center of the screen to the saved parking location and allows you to quickly center the map on that spot.

- The widget is visible only after a parking position has been set.
- If not already on screen, you can add it via the [Configure Screen](../widgets/configure-screen.md) menu.

To learn more, see: [Informational Widgets – Parking Widget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *Last updated: May 2025*
