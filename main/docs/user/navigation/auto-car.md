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

:::tip NOTE
To use the Android version of the OsmAnd app in Android Auto, you have to purchase a [paid subscription](../purchases/ios#free-and-paid-features).
:::

OsmAnd is available for [*Android Auto*](https://www.android.com/auto) functions in your vehicle. You can connect your Android or iOS device to the vehicle's multimedia system screen and use OsmAnd to navigate.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-overview.png)  


## Setup

First, you need to select and configure the profile to be used when connecting to Android Auto or CarPlay. You can read how to configure a profile in the article [Profiles (Settings)](../personal/profiles).   

For OsmAnd to work, you need to connect your Android device to the vehicle's multimedia system.  
- Not all vehicles support device connection capability. Check the [list for Android Auto](https://www.android.com/auto/compatibility/).
- You need to have an OsmAnd Pro, OsmAnd+ or Maps+ subscription. Check it here *Menu → Settings → Purchases*.
- To find out how to connect and set up your device, please visit the [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) websites. 
- Once connected, an icon with the OsmAnd logo and name will appear among the available programs in the menu on the selected platform.
- You will then be able to start the navigation or use the OsmAnd search function in Android Auto.   

![CarPlay screen](@site/static/img/navigation/auto-car/android-auto-setup.png)


## Start navigation

1. [Setup](#setup)
2. Settings in the app
3. Navigation Menu. 
4. Selecting an end point  

:::note
All categories for route endpoint selection, [History](#history), [POIs](#poi-categories), [Markers](#map-markers), [Search](#address-search), [Favourites](#favorites), and [Tracks](#tracks) may contain no more list items than your vehicle's multimedia system provides. Typically in most vehicles, lists are dynamically limited to 12 or 24 items. This means that the list in CarPlay may not be complete. The total number of items and the actual number of items displayed is indicated under the folder name.
:::

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-start.png)  ![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-stop.png)


## Select a route endpoint


### Interaction with the map

Most OsmAnd settings directly related to navigation are available in Android Auto. Interaction with the map is limited to *My Location* and *Zoom*. Android Auto also has the *[Compass](../widgets/map-buttons.md#compass)* widget. The rest of the settings are focused on getting the end point for the route on the map.

## User points group 

You can select previously preset and added [Markers](../personal/markers.md#settings), [Favorites](../personal/favorites.md) or [POIs](../map/point-layers-on-map.md#points-of-interest-poi) as a destination point.  
- Select the necessary category from the list: [*POI categories*](#poi-categories), [*Map markers*](#map-markers) or [*Favorites*](#favorites).  
- In the folder list that opens, select the needed one. A list of just 12 or 24 folders is available, the number depends on your vehicle's multimedia system. All other folders are only available in the app on your phone or tablet.  
    -  The *Last modified* folder contains a list of recent destinations.
    -  The list of all other folders is sorted by the most recent update, new folders are at the top of the list. It is not possible to change their order manually.
- The list of points within folders is also sorted by date of addition or change. Each point has: a name or coordinates, an icon, whose shape, color and icon are set by default or chosen by you, as well as the distance from the point of the current location to it.  

:::note
While driving, selected points can be announced when you approach or pass them. See the [*Voice prompts*](../navigation/voice-navigation) settings in the appropriate article to set up voice notifications.
:::


### POI

You can select one needed [POI](../map/point-layers-on-map.md#points-of-interest-poi) from the list of available categories.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-7.png)


### Markers

To use [markers](../personal/markers.md#overview) in Android Auto for navigation, they need to be added in advance in the OsmAnd app on your device, tablet or phone, and they need to be available in the *Menu → Map marker* list.     

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-10.png)


### Favorites

Favorites is one of the functions of OsmAnd that allows the user to make a kind of bookmark (note) on the map. While using Android Auto you cannot add or modify Favourites, only use existing ones. The list of [Favorites](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, configure everything you need before connecting the device to your vehicle's multimedia system.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-favrites.png)


### Tracks

:::tip
Do not choose tracks that are obviously far away from your current location. It can take a long time to get to the starting point of the track.
:::

From the list of tracks available in *Menu → My Places → [Tracks](../personal/tracks.md)*, you can select the necessary one in Android Auto or on the device connected to the vehicle's multimedia system and the route will either build up to the start of the track or display the current direction along the track.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-6.png)


### History

Ability to select a navigation point from the history. Tapping opens a screen with the search history and the last route, sorted by the last use of the destination endpoints.   
[Search History](../search/search-history.md)  


### Search

With this option you can search for the necessary places on the map to navigate. For convenience, you can search by different categories.  
- [Address search](../search/search-address.md) - enter the needed address in the search field.
- [POI search](../search/search-poi.md) - search by Point of Interest names.
- [Custom search](../search/custom-poi-search.md) - search by the categories you created.
- [History search](../search/search-history.md) - displays your whole search history.
- Coordinate search - suggests different formats of coordinates.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-12.png)   ![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-13.png)


## Additional features

### Menu navigation

Through the *Settings* menu in Android Auto you can select the end point of the route, without any ability to add intermediate destinations.


### Voice prompts

In OsmAnd, you can set up [voice prompts](../navigation/voice-navigation) separately for one selected profile or for all profiles at once. Do this before starting a route on your device, tablet or phone. In Android Auto, the only setting available is to disable or enable all selected voice prompts at the same time.   

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-voice.png)


### Announce incoming text messages

You can change the notification settings for the OsmAnd app in the system settings of your device. Tap CarPlay, then select one of the following items:

- *Announce New Messages*.
- *Silence New Messages*.
- *Remember Previous Setting*.

You can also enable or disable Announce messages directly in CarPlay. Read about how notification management is implemented on [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) and [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios). 


### Screen Alert widget

This [widget](../widgets/nav-widgets.md#alert-widget) combines alert types such as **Pedestrian crosswalks** and **Speed Limit**.  
You can set them up by going to *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>*.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-speed-limits.png)


### Map appearance

You can change the viewing angle for the 2.5D view of the map on your vehicle's multimedia system screen.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-D(1).png)  


### Split-screen

The OsmAnd app can be opened and used to navigate in Android Auto on the screen of your vehicle's multimedia system at the same time as the music, message or other notification apps.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-split-screen.png)


## Fixes issues with voice control

Choose which speakers to use.
- On your phone or tablet, turn on Bluetooth.
- Pair your phone or tablet to your car.
- Set the source for your car's audio system to Bluetooth.
    - On your Android phone or tablet, open the Google Maps app Maps.
    - Tap your profile picture or initial Account Circle and then Settings Settings and then Navigation settings.
    - Choose an option:
       - To hear navigation from your car speakers, turn on Play voice over Bluetooth.
       - To hear navigation from your phone or tablet’s speaker, turn off Play voice over Bluetooth.

### Volume control

In most cases, all signals remain at constant full volume, separate from the audio playback settings at the same time. To change the volume of the OsmAnd navigation prompts when using Android Auto, go to *Setup → Voice → Voice volume* on the vehicle's multimedia system screen.  
If this method does not work, there is another option. To adjust the notification volume, you need to turn on Google Assistant during a call. Hold down the button on the steering wheel that turns on Google Assistant, and during the call, adjust the volume using the dashboard or steering wheel.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-2.png)
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-3.png)
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-8.png)
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-9.png)
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-11.png)
-->

