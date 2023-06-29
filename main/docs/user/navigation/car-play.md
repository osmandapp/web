---
sidebar_position: 10
title:  CarPlay
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

Driving a vehicle and using your phone or tablet at the same time is usually forbidden by law for safety reasons. [CarPlay](https://www.apple.com/ios/carplay/) is software that puts an adapted version of the OsmAnd application on the display of your vehicle's multimedia system, making it easier and safer to access the navigation functions of the application without using your hands.  

To use CarPlay on your vehicle's screen, follow these steps:

1. CarPlay is not available in all countries. Make sure it is supported in your [country or region](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) and that CarPlay is supported in your [vehicle model](https://www.apple.com/ios/carplay/available-models/).
2. [Connect your device](https://support.apple.com/en-gb/HT203412) to your vehicle's multimedia system using a USB port or wirelessly with Wi-Fi or Bluetooth. When connecting for the first time, you may need permission to use CarPlay on your device. 
3. Once connected, the CarPlay interface will automatically appear on your vehicle screen with all available apps. If the CarPlay home screen does not appear, select the CarPlay logo on the vehicle display.  


### Connection screen

While your device is connected to Android Auto, the map on the app screen is locked for security purposes.  

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)


### Interaction with the map

CarPlay displays the OsmAnd interface adapted to the vehicle's multimedia system screen. Interaction with the map is limited to:  

- [*My Location*](../widgets/map-buttons.md#my-location--zoom) - moves the visible part of the map so that your current location is in the center of the screen.
- *Zoom* - allows you to zoom in and out of the visible part of the map.   

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)


### CarPlay profile

[CarPlay profile](../personal/global-settings.md#carplay-profile)


## Setup

First, you need to select and configure the profile to be used when connecting to CarPlay. You can read how to configure a profile in the article [Profiles (Settings)](../personal/profiles). A convenient profile for using CarPlay can be *Driving*, and the type of routing can be [Car routing](../navigation/routing/car-based-routing.md). For quick access to the list of profiles available for connecting to CarPlay OsmAnd has a separate item *Menu → Settings → OsmAnd Settings → CarPlay Profile*. Also.  

- For OsmAnd to work, [connect your iOS device](#overview) to the vehicle's multimedia system. To find out more about how to connect and set up your device, you can visit the [**CarPlay**](https://support.apple.com/en-us/HT205634) website. 
- You need to have one of [OsmAnd paid or subscription](../purchases/ios#free-and-paid-features). Check it here *Menu → Settings → Purchases*. 
- Once connected, you can set a destination and start OsmAnd navigation in CarPlay.  

<!-- Note, you may need an Internet connection to use OsmAnd in CarPlay. If your device has limited Internet access, you can [preload or create routes](../personal/tracks.md) and use them without the Internet.  -->
<!--
Setup block, Add proper links for Apple and Google documentation
 Apple https://support.apple.com/en-us/HT205634
 Google https://support.google.com/androidauto/answer/6348029?hl=en

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point-1.png)
-->

## Start navigation

To use the iOS version of the OsmAnd app in CarPlay, you have to purchase a [paid version of the app or to subscribe](../purchases/ios#free-and-paid-features).  

1. To create a route, you need to choose the [route endpoint](#select-a-route-endpoint) on the CarPlay screen or in the [OsmAnd app](../navigation/setup/route-navigation.md).
2. You can use [voice prompts](#voice-prompts) to listen for directions or messages about issues on the road.  
3. After you select a location, press **Start** to follow the route.
4. As you drive, the vehicle screen will display OsmAnd information about your current location on the map, driving directions, distance to the next turn, and arrival time at your destination.
5. If you want to change your route or select a different location, you can press the appropriate button on the screen.
6. Once you have completed your route, you can deactivate CarPlay by disconnecting the device from your vehicle's multimedia system.

:::note
All categories for **route endpoint** selection, *[History](#history), [POIs](#poi-categories), [Markers](#map-markers), [Search](#search), [Favourites](#favorites), and [Tracks](#tracks)* may contain no more list items than your vehicle's multimedia system provides. Typically in most vehicles, lists are dynamically limited to 12 or 24 items. This means that the list in CarPlay may not be complete. The total number of items and the actual number of items displayed is indicated under the folder name.
:::  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start(1).png)  
<!-- ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start-2(1).png)  -->


## Select a route endpoint 

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

**Note**
Through the **Navigation** menu in Car Play, you can select the end point of the route, *without any ability to add intermediate destinations*.  


### History

In the History category, you can select a destination from a list of endpoints. They are sorted by most recent use, starting with the newest. This can be convenient for quick access to frequently used routes. To learn how to use or delete a destination, read the [Search History](../search/search-history.md) article.      

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-history(1).png)  


### POI categories

POIs (points of interest) are a type of points that are highlighted on the map by special icons provided in the [OsmAnd settings](../map/point-layers-on-map.md#points-of-interest-poi) and sorted into groups. 

To build a route to a POI in CarPlay, follow these steps:

1. Select the needed POI from the list of available categories or enter the name of the POI using [Search](#search). 
2. OsmAnd calculates the route and displays it on the CarPlay screen. Tap **Start** button to start navigating to that location. 
3. Depending on your OsmAnd app settings and your vehicle<!-- или настроек в профиле который используется для кп?-->, you may receive [voice prompts](#voice-prompts) to guide you to your destination.
6. When you arrive at the location, the app will notify you that you have reached the POI.

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-poi(1).png)  


### Map markers

<!-- To define your final destination as a Map Marker, you first need to create the required number of markers in the OsmAnd app on your device before connecting it to the system. Markers need to be available in the *Menu → Map marker* list. This is described in more detail in the [*Markers*](../personal/markers.md) article. -->

To use [markers](../personal/markers.md#overview) in CarPlay for navigation, they need to be added in advance in the OsmAnd app on your device, tablet or phone, and they need to be available in the *Menu → Map marker* list.   

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers(1).png)  


### Favorites

Favorites is one of the functions of OsmAnd that allows the user to make a kind of bookmarks (notes) on the map. While using CarPlay you cannot add or modify Favorites, only use existing ones. The list of [Favorites](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, configure everything you need before connecting the device to your vehicle's multimedia system.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites(1).png)  


### Tracks

To build a route to a destination, you can select an existing track available in the OsmAnd app. The track can be [*downloaded*](../personal/tracks.md#import-track) in advance, used as [*recorded*](../plugins/trip-recording.md) or created in [*Plan a route*](../plan-route/create-route.md).  

From the list of tracks in *Menu → My Places → [Tracks](../personal/tracks.md)*, select the required one before connecting to the vehicle's multimedia system, and the route will either build up to the start of the track or display the current direction along the track.   

Tracks can also be selected directly on the vehicle screen in CarPlay. They are organized in folders you have created, and for easy and quick access to recently opened tracks, there is a special folder [*Last modified*](#folder-last-modified). 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks(1).png)  


### Search

Going to Search gives you quick access to a list of recent [destination history](#history). Similarly with the [Navigation menu](../navigation/setup/route-navigation.md#navigation-menu), where all OsmAnd destination methods such as an address, POI, or coordinates are collected.

You can use the Search tool to find the required place on the map for route planning from any available search category.

- [Address](../search/search-address.md) - start typing the address in the search field.
- [POI](../search/search-poi.md) and [Custom POI](../search/custom-poi-search.md)- the list of nearby similar names will also display POIs or their categories.
- [Coordinates search](../search/search-address#coordinates-search) - enter the coordinates to find the point on the map.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search(1).png)


## Additional features

In addition to the basic features of the OsmAnd app in CarPlay that provide convenient navigation in your vehicle, there are a number of additional features that enhance the user experience and make navigation more personalized, comfortable, and efficient.  


### Voice prompts

Voice prompts are one of the most useful features of OsmAnd while navigating for CarPlay, giving you real-time guidance and allowing the driver to stay focused on the road. Voice prompts provide clear instructions on turns, directions, and other navigation instructions, providing a safer and more comfortable use of the navigation system.  

To configure [Voice prompts](../navigation/guidance/voice-navigation.md) according to the selected profile, you have to do this before starting a route in the OsmAnd app on your device. To see recommended settings for CarPlay, click here.  


### Announce incoming text messages

You can change the notification settings for the OsmAnd app in the system settings of your device. Tap CarPlay, then select one of the following items:

- *Announce New Messages*.
- *Silence New Messages*.
- *Remember Previous Setting*.

You can also enable or disable Announce messages directly in CarPlay. Read about how notification management is implemented on [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) and [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios). 


### Screen Alert widget

<!-- This [widget](../widgets/nav-widgets.md#alert-widget) combines alert types such as **Pedestrian crosswalks** and **Speed Limit**.  
You can set them up by going to *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>*.  -->

This information widget combines alert types such as **Pedestrian crosswalks** and **Speed Limit**. The types of alerts have different appearance, which depends on the **<Translate android="true" ids="driving_region"/>**  and can be configured in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*. In Car Play it is not possible to set the display of alerts, you need to configure the widget in the application before starting the navigation and connecting your device to the vehicle. For a detailed description of the alert types, see [this article](../widgets/nav-widgets.md#alert-types). To set up screen alerts for available profiles, see the article [Navigation settings](../navigation/guidance/navigation-settings.md#screen-alerts).   

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)  


### Map appearance

You can change the viewing angle for the 3D view of the map on your vehicle's multimedia system screen.  

On the screen of your vehicle's multimedia system, you can use both the 2D and 3D views of OsmAnd maps to display your route and navigation. For your map to have a 3D view, you need to open the main *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_3d_mode_action"/>* in the application directly. This has to be done before connecting to Car Play. Read more about the setup 3D-view in the article.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-D(1).png)    


### Multifunction dashboard

The Car Play dashboard will soon be able to display and use the OsmAnd navigation app at the same time as music, messages or other notification apps.  

<!-- 
Most common issues 
-->
## Troubleshooting

### Fixes issues with voice control

Sometimes CarPlay won't connect, or you just can't hear anything even though it's connected. Other times, the OsmAnd app doesn't open properly in CarPlay. Here are some of the factors that affect CarPlay's performance and possible solutions.  

1. Restart Your Phone
We'll start with the most obvious remedy for many smartphone-related issues: a restart. Restarting your phone can tackle various issues, including connection, in-app, and operating system errors. So, the easiest initial step to take when your Apple CarPlay isn't working is to reboot your device.
2. Make Sure CarPlay Is Enabled on Your iPhone
If you can't get Apple CarPlay started in your vehicle, it might be because the feature has not yet been enabled on your iPhone. To do this:  
   - First, head to your phone's settings, and then head to General.
   - Then, go to the CarPlay section in your General Settings, and head to My Cars. Here, you can configure or re-configure your vehicle by forgetting it and connecting to it again.
3. Make Sure Your Bluetooth Is Connected
4. Check Your USB Cable
5. Regularly Update Your Operating System
6. Check with Apple to be sure CarPlay is supported in your area. 
    - Make sure that your car supports CarPlay, as well! If your car isn't on Apple's list, check with the manufacturer to be sure.
    - Update the software on your iPhone to the latest version of iOS. 
    - Restart your car and reboot your iPhone.
    - If you have a wired CarPlay connection, check your owner's manual to be sure you're using the correct port. You can also try replacing the USB cable with a new one to see if the issue is a faulty cable. 
    - If you use a VPN on your iPhone, it may interfere with CarPlay. Try turning your VPN off to see if that gets CarPlay working for you. 


Choose which speakers to use.
- On your phone or tablet, turn on Bluetooth.
- Pair your phone or tablet to your car.
- Set the source for your car's audio system to Bluetooth.
    - On your phone or tablet, open the OsmAnd.
    - Tap your profile picture or initial Account Circle and then Settings Settings and then Navigation settings.
    - Choose an option:
       - To hear navigation from your car speakers, turn on Play voice over Bluetooth.
       - To hear navigation from your phone or tablet’s speaker, turn off Play voice over Bluetooth.  


### Volume control issue

In most cases, all **signals** remain at constant full volume, separate from the audio playback settings at the same time. To change the volume of the OsmAnd navigation prompts when using CarPlay, go to *Setup → Voice → Voice volume* on the vehicle's multimedia system screen.  

If this method does not work, there is another option. To adjust the notification volume, you need to turn on Siri during a call. Hold down the button on the steering wheel that turns on Siri, and during the call, adjust the volume using the dashboard or steering wheel.  


