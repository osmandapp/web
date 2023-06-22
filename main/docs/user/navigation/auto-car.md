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

![Android Auto](@site/static/img/navigation/auto-car/android-auto-osmand_screen.png)


## Start navigation

1. To use the OsmAnd app in Android Auto, you have to purchase the **paid version** of the app or [subscribe](../purchases/android.md#free-and-paid-features).    

<!-- 
First, you need to select and configure the profile to be used when connecting to Android Auto. You can read how to configure a profile in the article [Profiles (Settings)](../personal/profiles).   
-->

:::caution
Now, Android Auto uses the first [OsmAnd profile](../personal/profiles) on the Profile list for navigation. Please, set your prefered Profile at the first place ("Browse map" Profile is not readed by Android Auto):
_OsmAnd menu → Settings → App Profiles → Edit profile list → move your profile on the top or after "Browse map" profile_ 

:::

For OsmAnd to work, you need to connect your Android device to the vehicle's multimedia system.  
- Not all vehicles support device connection capability. Check the [list for Android Auto](https://www.android.com/auto/compatibility/).
- You need to have an "OsmAnd Pro", "OsmAnd+" or "Maps+" subscription. Check it here *Menu → Settings → [Purchases](../purchases/android.md#free-and-paid-features)*.
- To find out how to connect and set up your device, please visit the [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) websites. 

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-setup.png)


### Setup Android Auto

Setup block, Add proper links for Apple and Google documentation
 Apple https://support.apple.com/en-us/HT205634
 Google https://support.google.com/androidauto/answer/6348029?hl=en

All categories for route endpoint selection, [History](#history), [POIs](#poi-categories),<!--[Markers](#map-markers), --> [Search](#address-search), [Favourites](#favorites), and [Tracks](#tracks) may contain no more list items than your vehicle's multimedia system provides.

<!--
А это разве касается АА?
 Typically in most vehicles, lists are dynamically limited to 12 or 24 items. This means that the list in CarPlay may not be complete. The total number of items and the actual number of items displayed is indicated under the folder name.
-->

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-start.png)  ![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-stop.png)  

<!--
Второй скриншот с виджетом ограничения скорости? в 31 км?
Если так, то такого не бывает. есть знаки ограничения с целыми числами или кратных 5.
-->

### Interaction with the map

Most OsmAnd settings directly related to navigation are available in Android Auto. Interaction with the map is limited to *My Location* and *Zoom*. Android Auto also has the *[Compass](../widgets/map-buttons.md#compass)* widget. The rest of the settings are focused on getting the end point for the route on the map. <!-- что тут за последнее предложение? если rest - то ОК, но компасс тогда не в тему.-->

- **OsmAnd menu**
- **Settings** are responsible for turning [voice promts](#voice-prompts) on/off.
- **Search**
- **My Location**
- **Zoom**
- **Map orientatin**

![Android Auto](@site/static/img/navigation/auto-car/android_auto_first_screen.png)


## Destination Points

**!**
You can select previously preset and added [Markers](../personal/markers.md#settings), [Favorites](../personal/favorites.md), or [POIs](../map/point-layers-on-map.md#points-of-interest-poi) as a destination point. It is also possible to select a recorded or downloaded [Track](../personal/tracks.md) for the route, use the search, or select a destination from the route history.   
1. Select the necessary category from the list: [*POI categories*](#poi-categories), [*Map markers*](#map-markers) or [*Favorites*](#favorites) and [Tracks](#tracks).  
- In the folder list that opens, select the needed one. A list of just 12 or 24 folders is available, the number depends on your vehicle's multimedia system. All other folders are only available in the app on your phone or tablet.  
    -  The *Last modified* folder contains a list of recent destinations, sorted by date added or changed.
    -  The list of all other folders is sorted by the most recent update, new folders are at the top of the list. It is not possible to change their order manually.
- The list of points within folders is sorted by the distance to them, starting with the nearest. Each point has a name or coordinates, a shaped icon (color and icon set by default or chosen by you in the OsmAnd application), as well as the distance from the point of the current location to it.
2. Select the [History](#history) category to find one of the recent destinations that are stored in the device's memory.
3. Select [Address Search](#search) to enter a destination from the available search categories. 

-->

**Note**  
While driving, selected points can be announced when you approach or pass them. See the [*Voice prompts*](../navigation/guidance/voice-navigation.md) settings in the appropriate article to set up voice notifications.


<!-- Тут два ноута подряд, так себе. и нет вступления по выбору точек назначения с последующими ссылками - История, ПОИ... -->


**Note**  
Through the **Settings** menu in Android Auto you can select the end point of the route, *without any ability to add intermediate destinations*.


### History


In the History category, you can select a destination from a list of endpoints. They are sorted by most recent use, starting with the newest. This can be convenient for quick access to frequently used routes. To learn how to use or delete a destination, read the [Search History](../search/search-history.md) article.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)


### POI

![Android Auto](@site/static/img/navigation/auto-car/android_auto_poi_1.png)  
![Android Auto](@site/static/img/navigation/auto-car/android_auto_poi_2.png)

POIs (points of interest) are a type of points that are highlighted on the map by special icons provided in the [OsmAnd settings](../map/point-layers-on-map.md#points-of-interest-poi) and sorted into groups. 

To build a route to a POI in Android Auto, follow these steps:

1. Select the needed POI from the list of available categories or enter the name of the POI using [Search](#search). 
2. OsmAnd calculates the route and displays it on the Android Auto screen. Tap **Start** button to start navigating to that location. 
3. Depending on your OsmAnd app settings and your vehicle, you may receive [voice prompts](#voice-prompts) to guide you to your destination.

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-7.png)

<!-- 
Маркеры не отображаются в АА (Баг или не сделали)
## Markers

To use [markers](../personal/markers.md#overview) in Android Auto for navigation, they need to be added in advance in the OsmAnd app on your device, tablet or phone, and they need to be available in the *Menu → Map marker* list.     

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-10.png)
-->

### Favorites

![Android Auto](@site/static/img/navigation/auto-car/android_auto_favorites.png)

Favorites is one of the functions of OsmAnd that allows the user to make a kind of bookmark (note) on the map. While using Android Auto you cannot add or modify Favourites, only use existing ones. The list of [Favorites](../personal/favorites.md#manage-favorites) can be found in the OsmAnd app *Menu → My Places → Favorites*. If you want to use them for navigation, configure everything you need before connecting the device to your vehicle's multimedia system.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-favrites.png)


### Map markers

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers.png)


### Tracks

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

:::tip
Do not choose tracks that are obviously far away from your current location. It can take a long time to get to the starting point of the track.
:::

From the list of tracks available in *Menu → My Places → [Tracks](../personal/tracks.md)*, you can select the necessary one in Android Auto or on the device connected to the vehicle's multimedia system and the route will either build up to the start of the track or display the current direction along the track.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-tracks.png)


### Search

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)  

Going to Search gives you quick access to a list of recent [destination history](#history). Similarly with the [Navigation menu](../navigation/setup/route-navigation.md#navigation-menu), where all OsmAnd destination methods such as an address, POI, or coordinates are collected.

You can use the Search tool to find the required place on the map for route planning from any available search category.

- [Address](../search/search-address.md) - start typing the address in the search field.
- [POI](../search/search-poi.md) and [Custom POI](../search/custom-poi-search.md)- the list of nearby similar names will also display POIs or their categories.
- [Coordinates search](../search/search-address#coordinates-search) - enter the coordinates to find the point on the map.  


### Folder Last modified

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)


## Additional features

In addition to the basic features of the OsmAnd app in Android Auto that provide convenient navigation in your vehicle, there are a number of additional features that enhance the user experience and make navigation more personalized, comfortable, and efficient.  

### Voice prompts

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

In OsmAnd, you can set up [voice prompts](../navigation/guidance/voice-navigation.md) separately for one selected profile or for all profiles at once. Do this before starting a route on your device, tablet or phone. In Android Auto, the only setting available is to disable or enable all selected voice prompts at the same time.   


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

This information widget combines alert types such as **Pedestrian crosswalks** and **Speed Limit**. The types of alerts have different visual appearance, which depends on the **<Translate android="true" ids="driving_region"/>**  and can be configured in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* in the app, not in Android Auto. For a detailed description of the types of alerts, see [this article](../widgets/nav-widgets.md#alert-types).    

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)


### Map appearance

The screen of your vehicle's multimedia system can display 2D and 3D views of the OsmAnd map.  You can activate, deactivate and set up *[3D view](../widgets/map-buttons.md#3d-mode)* in the application *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*. Do this before connecting to Android Auto.  

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance.png)  


### Split-screen

The OsmAnd app can be opened and used to navigate in Android Auto on the screen of your vehicle's multimedia system at the same time as the music, message or other notification apps. Set up the display on the phone connected to Android Auto.  

**!**
The Multi window display feature can also be enabled and disabled from the Window Shade.
1. From a Home screen, tap Apps
2. Tap Settings.
3. Tap Multi window.
4. Tap the Multi window switch
5. Return to the home screen. 

https://support.google.com/androidauto/answer/6348063?hl=en&ref_topic=6106969 

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)


## Issues

### Map orientation issue

Movement direction map orientation is [flipped and jiggles](https://github.com/osmandapp/OsmAnd/issues/16041). Resolved by switching on ["Approximate bearing"](../navigation/guidance/map-during-navigation.md#map-during-navigation) option:

- Visible only if [OsmAnd Development](../plugins/development.md) is enabled.
- Placed in *Menu → Settings → Profile → Navigation settings → [Map during navigation](../navigation/guidance/map-during-navigation.md) → Approximate bearing*.


### Volume control issue

In most cases, all types of **signals** remain at constant full volume, which is not affected by the simultaneous audio playback settings. To change the volume of the OsmAnd navigation prompts when using Android Auto, go to *Setup → Voice → Voice volume* on the vehicle's multimedia system screen.  

If this method does not work, there is another option. To adjust the notification volume, you need to turn on Google Assistant during a call. Hold down the button on the steering wheel that turns on Google Assistant, and during the call, adjust the volume using the dashboard or steering wheel.  

