---
sidebar_position: 10
title:  CarPlay
android: false
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


<InfoIncompleteArticle/>  


## Overview

Driving a vehicle and using your phone or tablet at the same time is usually forbidden by law for safety reasons. [CarPlay](https://www.apple.com/ios/carplay/) is software that provides an adapted and optimized version of the OsmAnd app for safe use while driving, making it easier and more secure to access the app's navigation functions.

To use CarPlay on your vehicle screen, follow these steps:

1. CarPlay is not available in all countries. Make sure it is supported in your [country or region](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) and that CarPlay is supported in your [vehicle model](https://www.apple.com/ios/carplay/available-models/).
2. [Connect your device](https://support.apple.com/en-gb/HT203412) to your vehicle multimedia system using a USB port or wirelessly with Wi-Fi or Bluetooth. When connecting for the first time, you may need permission to use CarPlay on your device. 
3. Once connected, the CarPlay interface will automatically appear on your vehicle screen with all available apps. If the CarPlay home screen does not appear, select the CarPlay logo on the vehicle display.  


### Connection screen

While your device is connected to CarPlay, the map on the app screen is locked for security purposes.  

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)


### Interaction with the map

CarPlay displays the OsmAnd interface adapted to the vehicle multimedia system screen. Interaction with the map is limited to:  

- [*My Location*](../widgets/map-buttons.md#my-location--zoom) - moves the visible part of the map so that your current location is in the center of the screen.
- *Zoom* - allows you to zoom in and out of the visible part of the map.   

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)


### CarPlay profile

The CarPlay profile uses your car's audio and video systems to display its data on your phone.  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)


## Setup

First, you need to select and configure the profile to be used when connecting to CarPlay. You can read how to configure a profile in the article [Profiles (Settings)](../personal/profiles). A convenient profile for using CarPlay can be *Driving*, and the type of routing can be [Car routing](../navigation/routing/car-based-routing.md). For quick access to the list of profiles available for connecting to CarPlay OsmAnd has a separate item *Menu → Settings → OsmAnd Settings → CarPlay Profile*. Also.  

- For OsmAnd to work, [connect your iOS device](#overview) to the vehicle multimedia system. To find out more about how to connect and set up your device, you can visit the [**CarPlay**](https://support.apple.com/en-us/HT205634) website. 
- You need to have one of [OsmAnd paid or subscription](../purchases/ios#free-and-paid-features). Check it here *Menu → Settings → Purchases*. 
- Once connected, you can set a destination and start OsmAnd navigation in CarPlay.  

Note, you may need an Internet connection to use OsmAnd in CarPlay. If your device has limited Internet access, you can [preload or create routes](../personal/tracks.md) and use them without the Internet. 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point-1.png)


## Start navigation

To use the iOS version of the OsmAnd app in CarPlay, you have to purchase a [paid version of the app or to subscribe](../purchases/ios#free-and-paid-features).  

1. To create a route, you need to choose the [route endpoint](#select-a-route-endpoint) on the CarPlay screen or in the [OsmAnd app](../navigation/setup/route-navigation.md).
2. You can use [voice prompts](#voice-prompts) to listen for directions or messages about issues on the road.  
3. After you select a location, press **Start** to follow the route.
4. As you drive, the vehicle screen will display OsmAnd information about your current location on the map, driving directions, distance to the next turn, and arrival time at your destination.
5. If you want to change your route or select a different location, you can press the appropriate button on the screen.
6. Once you have completed your route, you can deactivate CarPlay by disconnecting the device from your vehicle multimedia system.

:::note
All categories for **route endpoint** selection, *[History](#history), [POIs](#poi-categories), [Markers](#map-markers), [Search](#search), [Favourites](#favorites), and [Tracks](#tracks)* may contain no more list items than your vehicle multimedia system provides. Typically in most vehicles, lists are dynamically limited to 12 or 24 items. This means that the list in CarPlay may not be complete. The total number of items and the actual number of items displayed is indicated under the folder name.
:::  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start(1).png)  
<!-- ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start-2(1).png)  -->


## Select a route endpoint 

You can select previously preset and added [POIs](../map/point-layers-on-map.md#points-of-interest-poi), or [Favorites](../personal/favorites.md), or [Markers](../personal/markers.md) as a destination point. It is also possible to select a recorded or downloaded [Track](../personal/tracks.md) for the route, use the [Search](../search/index.md), or select a destination from the route [History](../search/search-history.md).   

1. If you want a particular location on the map as an endpoint, select the appropriate category of points from the list, [POIs](#poi-categories), [Favorites](#favorites), or [Map Markers](#map-markers).  
  
    - All categories can contain no more list items than are provided by your vehicle multimedia system. This means that the list in CarPlay could be incomplete and all other folders are only available in the OsmAnd app on your device.    
    -  The [Last modified](#folder-last-modified) folder contains a list of recent destinations, sorted by date added or changed.
    -  The list of all other folders is sorted by the most recent update, new folders are at the top of the list. It is not possible to change their order manually.
    - The list of points within folders is sorted by the distance to them, starting with the nearest. Each point has a name or coordinates, a shaped icon (color and icon set by default or chosen by you in the OsmAnd application), and the distance from the point of the current location to it.  

2. Select the [History](#history) category to find one of the recent destinations that are stored in the device's memory.  

3. Select [Search](#search) to enter a destination from the available search categories.  

:::note
While driving, selected points can be [*announced*](#voice-prompts) when you approach or pass them. See the [*Voice prompts*](../navigation/guidance/voice-navigation.md) settings in the appropriate article to set up voice notifications.
:::

<!-- **Note**
Through the **Navigation** menu in Car Play, you can select the end point of the route, *without any ability to add intermediate destinations*.  -->


### History

In the History category, you can select a destination from a list of endpoints. They are sorted by most recent use, starting with the newest. This can be convenient for quick access to frequently used routes. To learn how to use or delete a destination, read the [Search History](../search/search-history.md) article.      

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_history.png)  


### POI categories

POIs (Points of Interest) are a type of points that identify places or objects on the map that are important or of interest to users. They are highlighted by special icons provided in the [OsmAnd settings](../map/point-layers-on-map.md#poi-types) and sorted into groups.  

To build a route to a POI in CarPlay, follow these steps:

1. Select the needed POI from the list of available categories, or enter the name of the POI using [Search](#search). 
2. OsmAnd calculates the route and displays it on the CarPlay screen. Tap **Start** button to start navigating to that location. 
3. Depending on your OsmAnd app settings and your vehicle<!-- или настроек в профиле который используется для кп?-->, you may receive [voice prompts](#voice-prompts) to guide you to your destination.
4. When you arrive at the location, the app will notify you that you have reached the POI.

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table> 

<!-- ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-poi(1).png)  -->


### Favorites

Favorites is one of the functions of OsmAnd that allows the user to make a kind of bookmarks (notes) on the map. While using CarPlay you cannot add or modify Favorites, only use existing ones. The list of [Favorites](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, configure everything you need before connecting the device to your vehicle multimedia system.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites(1).png)  


### Map markers

To define your final destination as a Map Marker, you first need to create the required number of markers in the OsmAnd app on your device before connecting it to the system. Markers need to be available in the *Menu → Map marker* list. This is described in more detail in the [*Markers*](../personal/markers.md) article.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers(1).png)  


### Tracks

To build a route to a destination, you can select an existing track available in the OsmAnd app. The track can be [*downloaded*](../personal/tracks.md#import-track) in advance, used as [*recorded*](../plugins/trip-recording.md) or created in [*Plan a route*](../plan-route/create-route.md).  

From the list of tracks in *Menu → My Places → [Tracks](../personal/tracks.md)*, select the required one before connecting to the vehicle multimedia system, and the route will either build up to the start of the track or display the current direction along the track.   

Tracks can also be selected directly on the vehicle screen in CarPlay. They are organized in folders you have created, and for easy and quick access to recently opened tracks, there is a special folder [*Last modified*](#folder-last-modified). 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks(1).png)  


### Search

Going to Search gives you quick access to a list of recent [destination history](#history). Similarly with the [Navigation menu](../navigation/setup/route-navigation.md#navigation-menu), where all OsmAnd destination methods such as an address, POI, or coordinates are collected.

You can use the Search tool to find the required place on the map for route planning from any available search category.

- [Address](../search/search-address.md) - start typing the address in the search field.
- [POI](../search/search-poi.md) and [Custom POI](../search/search-poi.md)- the list of nearby similar names will also display POIs or their categories.
- [Coordinates search](../search/search-address#coordinates-search) - enter the coordinates to find the point on the map.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search(1).png)  


### Folder Last modified

The Favorites and Tracks categories have a special *Last Modified* folder. Since the list in these categories can be very large as it contains all your existing favorites or tracks, this folder is necessary for easy and quick access to your most recent destinations.   

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_last_modified.png)


## Additional features

In addition to the basic features of the OsmAnd app in CarPlay that provide convenient navigation in your vehicle, there are a number of additional features that enhance the user experience and make navigation more personalized, comfortable, and efficient.  


### Voice prompts

Voice prompts are one of the most useful features of OsmAnd while navigating for CarPlay, giving you real-time guidance and allowing the driver to stay focused on the road. Voice prompts provide clear instructions on turns, directions, and other navigation instructions, providing a safer and more comfortable use of the navigation system.  

To configure voice prompts according to the selected profile, you have to do this before starting a route in the OsmAnd app on your device. To see recommended settings for CarPlay, click [here](../navigation/guidance/voice-navigation.md).  


### Announce incoming text messages

You can change the notification settings for the OsmAnd app in the system settings of your device. Tap CarPlay, then select one of the following items:

- *Announce New Messages*.
- *Silence New Messages*.
- *Remember Previous Setting*.

You can also enable or disable Announce messages directly in CarPlay. Read about how notification management is implemented on [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) and [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios). 


### Screen Alert widget

This information widget combines alert types such as **Pedestrian crosswalks** and **Speed Limit**. The types of alerts have different appearance, which depends on the **<Translate android="true" ids="driving_region"/>**  and can be configured in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*. In Car Play it is not possible to set the display of alerts, you need to configure the widget in the application before starting the navigation and connecting your device to the vehicle. For a detailed description of the alert types, see [this article](../widgets/nav-widgets.md#alert-types). To set up screen alerts for available profiles, see the article [Navigation settings](../navigation/guidance/navigation-settings.md#screen-alerts).   

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)  

### Speedometer

In CarPlay it is not possible to set the display of Speedometer, you need to configure Speedometer in the application before starting the navigation and connecting your device to the vehicle for your navigation Profile. Read more [here](../widgets/info-widgets.md#speedometer) on how to add Speedometer to the screen.

![CarPlay screen](@site/static/img/navigation/auto-car/speedometer_carplay_ios.png)  

### Map appearance (3D)

The OsmAnd app allows you to use the 3D map view on the CarPlay screen to display your route and navigation.
- the **3D / 2D button** is displayed on the CarPlay screen. 
- You can switch between 3D / 2D map modes by tapping this button.

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

### Multifunction dashboard

The OsmAnd app can be opened and used to navigate in CarPlay on the vehicle multimedia system screen simultaneously with music, message or other notification apps. Setting up the multifunction dashboard on a phone connected to CarPlay or on the screen in your vehicle system:
- Find Multi window button and switch it.

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png) 

## Volume control issue

Sometimes CarPlay doesn't connect, or you just can't hear anything even though it's connected. Other times the OsmAnd app doesn't open properly in CarPlay. Possible solutions:  

1. In most cases, all **signals** remain at constant full volume, separate from the audio playback settings at the same time. To change the volume of the OsmAnd navigation prompts when using CarPlay, go to *Setup → Voice → Voice volume* on the vehicle multimedia system screen.  
2. Restart the device.
3. Make sure CarPlay is enabled on your iPhone. To do this:  
   - Go to your phone's settings and then to *General*.
   - Go to CarPlay in General Settings and select *My Cars*. Here you can customize your car by forgetting it or reconnecting to it. 
4. Make sure your Bluetooth is connected.
5. Check the USB cable.
6. Update your operating system regularly.
7. Check that CarPlay is supported in your [region](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay). 
8. If you use a VPN on your iPhone, it may prevent CarPlay from working. Try disabling the VPN and see if this will help CarPlay to work.   

