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

:::tip NOTE
To use the iOS version of the OsmAnd app in CarPlay, you have to purchase a [paid subscription](../purchases/ios#free-and-paid-features).
:::

Driving a vehicle and using your phone or tablet at the same time is usually forbidden by law for safety reasons. [*CarPlay*](https://www.apple.com/ios/carplay/) is software that puts an adapted version of the OsmAnd application on the display of your vehicle's multimedia system, making it easier and safer to access the navigation functions of the application without using your hands.  

To use CarPlay and the OsmAnd app on your vehicle's screen, follow these steps:

1. Make sure your iOS device is compatible with CarPlay and your car supports this technology, usually if the car was released after 2014, it probably does. Check the [list](https://www.apple.com/ios/carplay/available-models/) of car models with CarPlay support.  
2. Connect your device to your vehicle's multimedia system using a Lightning cable or wirelessly with Wi-Fi or Bluetooth. When connecting for the first time, you may need permission to use CarPlay on your device. 
3. Once connected, the CarPlay interface will automatically appear on your car screen with all available apps.
4. To use OsmAnd, select it on the CarPlay screen.   


<!--
5. To create a route, you must enter a destination on the CarPlay screen or in the app.
6. The navigation app provides information about your current position on the map, driving directions, distance to the next turn, and arrival time at your destination.
7. You can use voice prompts to listen to route guidance, report problems on the road, and find the nearest gas station.  


4. Once you've selected a location, press Start or Go to start your route.
5. As you drive, the vehicle screen will display detailed route instructions, including turns, distances, and arrival times.
6. If you want to change your route or select a different location, you can use Siri voice commands or press the appropriate buttons on the screen.
7. After completing a route, you can disconnect CarPlay by disconnecting your iPhone from the vehicle's multimedia system.   -->


## Setup

First, you need to select and configure the profile to be used when connecting to CarPlay. You can read how to configure a profile in the article [Profiles (Settings)](../personal/profiles). A convenient profile for using CarPlay can be *Driving*, and the type of routing can be [Car routing](../navigation/routing/car-based-routing.md).    

:::note
For quick access to the list of profiles available for connecting to CarPlay, the iOS version of the OsmAnd app has a separate item *Menu → Settings → OsmAnd Settings → CarPlay Profile*.  
:::  

For OsmAnd to work, you need to connect your iOS device to the vehicle's multimedia system.  
- Not all vehicles support device connection capability. Check the [list for CarPlay](https://www.apple.com/ios/carplay/available-models/).
- You need to have an OsmAnd paid subscription. Check it here *Menu → Settings → Purchases*.
- To find out how to connect and set up your device, please visit the [**CarPlay**](https://support.apple.com/en-us/HT205634) websites. 
- Once connected, an icon with the OsmAnd logo and name will appear among the available programs in the menu on the selected platform.
- You will then be able to start the navigation or use the OsmAnd search function in CarPlay.  



Note that you may need an Internet connection to use OsmAnd in CarPlay. If your device has limited Internet access, you can preload or create routes and use them without the Internet.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen.png)  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point.png)


## Start navigation

1. [Setup](#setup)
2. Settings in the app
3. Navigation Menu. 
4. Selecting an end point  

:::note
All categories for route endpoint selection, [History](#history), [POIs](#poi-categories), [Markers](#map-markers), [Search](#address-search), [Favourites](#favorites), and [Tracks](#tracks) may contain no more list items than your vehicle's multimedia system provides. Typically in most vehicles, lists are dynamically limited to 12 or 24 items. This means that the list in CarPlay may not be complete. The total number of items and the actual number of items displayed is indicated under the folder name.
:::


![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start.png)  ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start-2.png)  


### Interaction with the map

Most OsmAnd settings directly related to navigation are available in CarPlay. Interaction with the map is limited to *My Location* and *Zoom*.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction.png)


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

### POI categories

You can select one needed [POI](../map/point-layers-on-map.md#points-of-interest-poi) from the list of available categories. POI is a type of points that are highlighted on the map by special icons provided in the application settings, and sorted into groups.  

To navigate to a POI (point of interest) in CarPlay, follow these simple steps:

1. Enter the name of the POI you want to find using *Search* or *POI categories*.
2. When the app finds the POI you're looking for, select it on the map or in the list of search results.
3. Tap the button to start navigating to that location.
4. The app will begin calculating the route and showing directions on the screen. Depending on the settings of OsmAnd app and your vehicle, you may receive voice instructions to guide you to your destination.
5. If you want to change your route or navigation settings, you can use the on-screen buttons or voice search to make changes.
6. When you approach your POI, the app can suggest a parking spot, if there is one.
7. When you arrive at the location, the app will notify you that you have reached your POI. 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-poi.png)  ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-poi-rest.png)    


### Map markers

To use [markers](../personal/markers.md#overview) in CarPlay for navigation, they need to be added in advance in the OsmAnd app on your device, tablet or phone, and they need to be available in the *Menu → Map marker* list.   

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers.png)  


### Favorites

Favorites is one of the functions of OsmAnd that allows the user to make a kind of bookmark (note) on the map. While using CarPlay you cannot add or modify Favourites, only use existing ones. The list of [Favorites](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, configure everything you need before connecting the device to your vehicle's multimedia system.  

Open folder with the list of included favourites.  


![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites.png)  ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites-last-modified.png)  


## Tracks

:::tip
Do not choose tracks that are obviously far away from your current location. It can take a long time to get to the starting point of the track.
:::

From the list of tracks available in *Menu → My Places → [Tracks](../personal/tracks.md)*, you can select the necessary one in CarPlay or on the device connected to the vehicle's multimedia system and the route will either build up to the start of the track or display the current direction along the track.   


Show folders list
 Taping on folder > open folder with the list of included tracks

 We need to show folders first, so we can show first 12 or 24 folders and the same amount on favourites points or tracks in each folder.



![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks.png)  ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks-mod.png)   ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks-rec.png) 



## History

Option to choose navigation point from History  
 Tap open screen with search history and last route sorted by last used  

[Search History](../search/search-history.md)  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-history.png)  


## Address search

With this option you can search for the necessary places on the map to navigate. For convenience, you can search by different categories.  
- [Address search](../search/search-address.md) - enter the needed address in the search field.
- [POI search](../search/search-poi.md) - search by Point of Interest names.
- [Custom search](../search/custom-poi-search.md) - search by the categories you created.
- [History search](../search/search-history.md) - displays your whole search history.
- Coordinate search - suggests different formats of coordinates.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search.png)


## Additional features

### Menu Navigation

Through the *Navigation* menu in Car Play, you can select the end point of the route, without any ability to add intermediate destinations.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point.png)


### Voice prompts

In OsmAnd, you can set up [voice prompts](../navigation/voice-navigation) separately for one selected profile or for all profiles at once. Do this before starting a route on your device, tablet or phone. CarPlay does not have a function to set up voice prompts.  


### Announce incoming text messages

You can change the notification settings for the OsmAnd app in the system settings of your device. Tap CarPlay, then select one of the following items:

- *Announce New Messages*.
- *Silence New Messages*.
- *Remember Previous Setting*.

You can also enable or disable Announce messages directly in CarPlay. Read about how notification management is implemented on [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) and [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios). 


### Screen Alert widget

This [widget](../widgets/nav-widgets.md#alert-widget) combines alert types such as **Pedestrian crosswalks** and **Speed Limit**.  
You can set them up by going to *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>*.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert.png)  


### Map appearance

You can change the viewing angle for the 2.5D view of the map on your vehicle's multimedia system screen.  

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-D.png)    


### Multifunction dashboard

The Car Play dashboard will soon be able to display and use the OsmAnd navigation app at the same time as music, messages or other notification apps.  


## Fixes issues with voice control

Sometimes CarPlay won't connect, or you just can't hear anything even though it's connected. Other times, the OsmAnd app doesn't open properly in CarPlay. Here are some of the factors that affect CarPlay's performance and possible solutions.  

Choose which speakers to use.
- On your phone or tablet, turn on Bluetooth.
- Pair your phone or tablet to your car.
- Set the source for your car's audio system to Bluetooth.
    - On your Android phone or tablet, open the OsmAnd.
    - Tap your profile picture or initial Account Circle and then Settings Settings and then Navigation settings.
    - Choose an option:
       - To hear navigation from your car speakers, turn on Play voice over Bluetooth.
       - To hear navigation from your phone or tablet’s speaker, turn off Play voice over Bluetooth.  


### Volume control

In most cases, all signals remain at constant full volume, separate from the audio playback settings at the same time. To change the volume of the OsmAnd navigation prompts when using CarPlay, go to *Setup → Voice → Voice volume* on the vehicle's multimedia system screen.  
If this method does not work, there is another option. To adjust the notification volume, you need to turn on Siri during a call. Hold down the button on the steering wheel that turns on Siri, and during the call, adjust the volume using the dashboard or steering wheel.  


