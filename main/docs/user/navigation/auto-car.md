---
sidebar_position: 9
title:  Android Auto
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

## Overview

Android Auto is software developed by Google that allows users to connect their Android devices to compatible vehicle's multimedia systems. Android Auto provides a user interface optimized for safe use while driving, allowing drivers to access various features on their smartphones.  

OsmAnd is available for [*Android Auto*](https://www.android.com/auto) functions in your vehicle. You can connect your Android to the vehicle's multimedia system screen and use OsmAnd to navigate.  
Driving a car and using your phone or tablet at the same time is usually forbidden by law for safety reasons. Android Auto brings an adapted version of the OsmAnd app to the display of your car's multimedia system, making it easier and safer to access the app's navigation functions.  

To use Android Auto, you need a smartphone with an Android operating system updated to version 5.0 or higher. With the appropriate version, you will have access to a simplified user interface and a collection of compatible apps, including OsmAnd.  

It is important to remember that Android Auto is a data-intensive application, including mobile data, and the quality of the system may depend on the quality of the connection and the speed of Internet access.  


![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_overview.png)  


### Connection screen

While your device is connected to Android Auto, the map on the app screen is locked for security purposes.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)


### Interaction with the map

Android Auto displays the OsmAnd interface adapted to the vehicle's multimedia system screen. Interaction with the map is limited to buttons such as:  

- [*OsmAnd menu*](#destination-points) - contains a list of available options to assign an endpoint to the route.
- *Settings* - this button is responsible for access to turn [voice promts](#voice-prompts) on or off while you are navigating a selected route.
- [*Search*](#search) - tapping the button opens a screen with access to the search functions. 
- [*My Location*](../widgets/map-buttons.md#my-location--zoom) - moves the visible part of the map so that your current location is in the center of the screen.
- *Zoom* - allows you to zoom in and out of the visible part of the map.
- *[Compass](../widgets/map-buttons.md#compass)* - shows which of the four available map orientation modes on your device screen is selected.

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction.png)


## Start navigation

![Android Auto](@site/static/img/navigation/auto-car/android_auto_first_screen.png)  

To use the OsmAnd app in Android Auto, you have to purchase the **paid version** of the app or [subscribe](../purchases/android.md#free-and-paid-features).    

<!-- 
First, you need to select and configure the profile to be used when connecting to Android Auto. You can read how to configure a profile in the article [Profiles (Settings)](../personal/profiles).   
-->

Android Auto uses the first [OsmAnd profile](../personal/profiles) in the Profiles list for navigation. Set the preferred profile to the first place, the "Browse map" profile is not read by Android Auto. To do this, go to OsmAnd *Menu → Settings → App profiles → Edit profile list* → move your profile to the first place or after the *Browse map* profile.  

For OsmAnd to work, you need to connect your Android device to the vehicle's multimedia system.  
- Not all vehicles support device connection capability. Check the [list for Android Auto](https://www.android.com/auto/compatibility/).
- You need to have an "OsmAnd Pro", "OsmAnd+" or "Maps+" subscription. Check it here *Menu → Settings → [Purchases](../purchases/android.md#free-and-paid-features)*.
- To find out how to connect and set up your device, please visit the [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) websites. 

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-setup.png)

<!-- 
### Setup Android Auto

Setup block, Add proper links for Apple and Google documentation
 Apple https://support.apple.com/en-us/HT205634
 Google https://support.google.com/androidauto/answer/6348029?hl=en

All categories for route endpoint selection, [History](#history), [POIs](#poi-categories),[Markers](#map-markers), [Search](#address-search), [Favourites](#favorites), and [Tracks](#tracks) may contain no more list items than your vehicle's multimedia system provides.

<!--
А это разве касается АА?
 Typically in most vehicles, lists are dynamically limited to 12 or 24 items. This means that the list in CarPlay may not be complete. The total number of items and the actual number of items displayed is indicated under the folder name.
-->
<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-start.png)  ![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-stop.png)  
-->
<!--
Второй скриншот с виджетом ограничения скорости? в 31 км?
Если так, то такого не бывает. есть знаки ограничения с целыми числами или кратных 5.
-->


## Destination Points

You can select previously preset and added [POIs](../map/point-layers-on-map.md#points-of-interest-poi), or [Favorites](../personal/favorites.md), or [Markers](../personal/markers.md) as a destination point. It is also possible to select a recorded or downloaded [Track](../personal/tracks.md) for the route, use the [Search](../search/index.md), or select a destination from the route [History](../search/search-history.md).   

1. If you want a particular location on the map as an endpoint, select the appropriate category of points from the list, [POIs](#poi-categories), [Favorites](#favorites), or [Map Markers](#map-markers).  
  
    - All categories can contain no more list items than are provided by your vehicle's multimedia system. This means that the list in Android Auto could be incomplete and all other folders are only available in the OsmAnd app on your device.    
    -  The [Last modified](#folder-last-modified) folder contains a list of recent destinations, sorted by date added or changed.
    -  The list of all other folders is sorted by the most recent update, new folders are at the top of the list. It is not possible to change their order manually.
    - The list of points within folders is sorted by the distance to them, starting with the nearest. Each point has a name or coordinates, a shaped icon (color and icon set by default or chosen by you in the OsmAnd application), and the distance from the point of the current location to it.  

2. Select the [History](#history) category to find one of the recent destinations that are stored in the device's memory.  

3. Select [Search](#search) to enter a destination from the available search categories.  

:::note
While driving, selected points can be [*announced*](#voice-prompts) when you approach or pass them. See the [*Voice prompts*](../navigation/guidance/voice-navigation.md) settings in the appropriate article to set up voice notifications.
:::


### History

In the History category, you can select a destination from a list of endpoints. They are sorted by most recent use, starting with the newest. This can be convenient for quick access to frequently used routes. To learn how to use or delete a destination, read the [*Search History*](../search/search-history.md) article.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)


### POI Categories

POIs (Points of Interest) are a type of points that identify places or objects on the map that are important or of interest to users. They are highlighted by special icons provided in the [OsmAnd settings](../map/point-layers-on-map.md#poi-types) and sorted into groups.  

To build a route to a POI in Android Auto, follow these steps:

1. Select the needed POI from the list of available categories, or enter the name of the POI using [Search](#search). 
2. OsmAnd calculates the route and displays it on the Android Auto screen. Tap **Start** button to start navigating to that location. 
3. Depending on your OsmAnd app [settings](../navigation/guidance/navigation-settings.md) and your vehicle, you may receive [voice prompts](#voice-prompts) to guide you to a destination.  

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table> 


### Favorites

*Favorites* is one of the functions of OsmAnd that allows the user to make a kind of bookmarks (notes) on the map. While using Android Auto you cannot add or modify Favorites, only use existing ones. The list of [*Favorites*](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, add the necessary places in the favorites before connecting the device to your vehicle's multimedia system.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_favorites.png)


### Map markers

To define your final destination as a Map Marker, you first need to create the required number of markers in the OsmAnd app on your device before connecting it to the system. Markers need to be available in the *Menu → Map marker* list. This is described in more detail in the [*Markers*](../personal/markers.md) article. 

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)


### Tracks

To build a route to a destination, you can select an existing track available in the OsmAnd app. The track can be [*downloaded*](../personal/tracks.md#import-track) in advance, used as [*recorded*](../plugins/trip-recording.md) or created in [*Plan a route*](../plan-route/create-route.md).  

From the list of tracks in *Menu → My Places → [Tracks](../personal/tracks.md)*, select the required one before connecting to the vehicle's multimedia system, and the route will either build up to the start of the track or display the current direction along the track.   

Tracks can also be selected directly on the vehicle screen in Android Auto. They are organized in folders you have created, and for easy and quick access to recently opened tracks, there is a special folder [*Last modified*](#folder-last-modified).  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  


### Search 

Going to Search gives you quick access to a list of recent [destination history](#history). Similarly with the [Navigation menu](../navigation/setup/route-navigation.md#navigation-menu), where all OsmAnd destination methods such as an address, POI, or coordinates are collected.

You can use the Search tool to find the required place on the map for route planning from any available search category.

- [Address](../search/search-address.md) - start typing the address in the search field.
- [POI](../search/search-poi.md) and [Custom POI](../search/custom-poi-search.md)- the list of nearby similar names will also display POIs or their categories.
- [Coordinates search](../search/search-address#coordinates-search) - enter the coordinates to find the point on the map.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)   


### Folder Last modified

The Favorites and Tracks categories have a special *Last Modified* folder. Since the list in these categories can be very large as it contains all your existing favorites or tracks, this folder is necessary for easy and quick access to your most recent destinations.   

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


## Additional features

In addition to the basic features of the OsmAnd app in Android Auto that provide convenient navigation in your vehicle, there are a number of additional features that enhance the user experience and make navigation more personalized, comfortable, and efficient.  


### Voice prompts

Voice prompts are one of the most useful features of OsmAnd while navigating for Android Auto, giving you real-time guidance and allowing the driver to stay focused on the road. Voice prompts provide clear instructions on turns, directions, and other navigation instructions, providing a safer and more comfortable use of the navigation system.  

To configure [voice prompts](../navigation/guidance/voice-navigation.md) according to the selected profile, you have to do this before starting a route in the OsmAnd app on your device. In Android Auto, only the setting to turn all selected voice prompts off or on at the same time is available.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)


### Map mode

Android Auto and OsmAnd offer the ability to adjust the map to match lighting conditions. In *Day map mode*, the color scheme remains bright and contrasting, making it easier to read even in bright sunlight. In *Night mode*, the maps become darker, which helps the driver navigate better in the dark.  

OsmAnd has [map mode](../map/vector-maps.md#map-mode) options, but when you use the app in Android Auto, these options are ignored. Instead, the mode you selected in the Android Auto system settings for maps is used. 

- You can choose to always display the map in Day mode.
- You can select Night mode.
- If you want the map display mode to switch depending on the time of day, select Automatic mode.  

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table> 

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Screen Alert widget

This information widget combines alert types such as **Pedestrian crosswalks** and **Speed Limit**. The types of alerts have different appearance, which depends on the **<Translate android="true" ids="driving_region"/>**  and can be configured in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*. In Android Auto it is not possible to set the display of alerts, you need to configure the widget in the application before starting the navigation and connecting your device to the vehicle. For a detailed description of the alert types, see [this article](../widgets/nav-widgets.md#alert-types). To set up screen alerts for available profiles, see the article [Navigation settings](../navigation/guidance/navigation-settings.md#screen-alerts).  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)


### Map appearance  

On the screen of your vehicle's multimedia system, you can use both the 2D and 3D views of OsmAnd maps to display your route and navigation. For your map to have a 3D view, you need to open the main *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_3d_mode_action"/>* in the application directly. This has to be done before connecting to Android Auto. Read more about the setup 3D-view in the article *[Map Buttons](../widgets/map-buttons.md#3d-mode)*.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance.png)


### Split-screen

The OsmAnd app can be opened and used to navigate in Android Auto on the vehicle's multimedia system screen simultaneously with music, message or other notification apps. Setting up the split-screen display on a phone connected to Android Auto or on the screen in your vehicle's system.  

1. From Home screen, tap Apps.
2. Tap Settings.
3. Find Multi window and choose switch.
4. Return to the home screen.  

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)


## Issues

### Map orientation issue

Movement direction map orientation is [flipped and jiggles](https://github.com/osmandapp/OsmAnd/issues/16041). Resolved by switching on ["Approximate bearing"](../navigation/guidance/map-during-navigation.md#map-during-navigation) option:

- Visible only if [OsmAnd Development](../plugins/development.md) is enabled.
- Placed in *Menu → Settings → Profile → Navigation settings → [Map during navigation](../navigation/guidance/map-during-navigation.md) → Approximate bearing*.


### Volume control issue

In most cases, all types of **signals** remain at constant full volume, which is not affected by the simultaneous audio playback settings. To change the volume of the OsmAnd navigation prompts when using Android Auto, go to *Setup → Voice → Voice volume* on the vehicle's multimedia system screen.  

If this method does not work, there is another option. To adjust the notification volume, you need to turn on Google Assistant during a call. Hold down the button on the steering wheel that turns on Google Assistant, and during the call, adjust the volume using the dashboard or steering wheel.  

