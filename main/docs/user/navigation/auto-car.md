---
sidebar_position: 7
title:  Android Auto / CarPlay
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
Android Auto and CarPlay are [paid features](../purchases/index.md).
:::

OsmAnd is available for *Android Auto* and *CarPlay* functions in your vehicle. You can connect your Android or iPhone device to the vehicle's multimedia system screen and use OsmAnd to navigate.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/osmand_android_auto.png)  

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/ios-carplay.png)

</TabItem>

</Tabs>


## Setup

For OsmAnd to work, you need to connect your Android or iOS device to the vehicle's multimedia system. To find out how to do this, please visit the relevant websites: [**Android Auto**](https://www.android.com/auto) and [**CarPlay**](https://www.apple.com/ios/carplay/). Once connected, an icon with the logo and the title OsmAnd will appear in the application menu on the selected platform. You will then be able to start the navigation or use the OsmAnd search function in Android Auto or CarPlay.  

:::note
You need to select the profile that will be used when connecting to Android Auto or CarPlay. To do this, follow the steps here:  
*Menu → Settings → OsmAnd Settings → CarPlay profile*
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![CarPlay screen](@site/static/img/navigation/auto-car/android-auto-1.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-1.png)

</TabItem>

</Tabs>  


## Settings

All OsmAnd options directly related to navigation are available in Android Auto and CarPlay. Interaction with the map is limited to *My Location* and *Zoom*. Android Auto also has the *[Compass](../widgets/map-buttons.md#compass)* widget. The rest of the settings are focused to getting the end point for the route on the map.


### Search

With this option you can search for the necessary places on the map to navigate. For convenience, you can search by different categories.  
- [Address search](../search/search-address.md) - enter the needed address in the search field.
- [POI search](../search/search-poi.md) - search by Point of Interest names.
- [Custom search](../search/custom-poi-search.md) - search by the categories you created.
- [History search](../search/search-history.md) - displays your whole search history.
- Coordinate search - suggests different formats of coordinates.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-12.png)   ![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-13.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-4.png)  ![CarPlay screen](@site/static/img/navigation/auto-car/car-play-6.png)

</TabItem>

</Tabs>  


### POI

You can select one needed [POI](../map/point-layers-on-map.md#points-of-interest-poi) from the list of available categories. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-7.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-5.png)

</TabItem>

</Tabs>  


### Favorites

Favorites is one of the OsmAnd's features, that allows the user to make a kind of bookmarks (notes) on the map.
You cannot add or modify Favourites, only use the existing ones in OsmAnd *Menu → My Places → Favourites*. If you want to use them for navigation, configure everything you need before connecting your device to the vehicle's multimedia system.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-5.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-7.png)

</TabItem>

</Tabs>  


### Markers

To use [markers](../personal/markers.md#overview) in Android Auto or CarPlay for navigation, they need to be available in the *Menu → Map marker* list.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-10.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-3.png)

</TabItem>

</Tabs>  


### Tracks

:::tip
Do not choose tracks that are obviously far away from your current location. It can take a long time to get to the starting point of the track.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-6.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-11.png)

</TabItem>

</Tabs>  


## Navigation

Through the *Settings* menu in Android Auto or the *Navigation* menu in Car Play, you can select the end point of the route, without any ability to add intermediate destinations.


### Voice prompts

<InfoAndroidOnly />

In the OsmAnd app, you can set up [voice prompts](../navigation/voice-navigation) individually for one selected profile or for all profiles at once. Do this before you start your route. In Android Auto, you can choose to only disable or enable all selected prompts at once.  

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-4.png)

### Screen Alert widget

This [widget](../widgets/nav-widgets.md#alert-widget) combines alert types such as **Pedestrian crosswalks** and **Speed Limit**. You can set them up by going to *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-speed-limits.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-13.png)

</TabItem>

</Tabs>  

<!--
____

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android Auto">

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-2.png)
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-3.png)


![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-8.png)
![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-9.png)

![Android Auto screen](@site/static/img/navigation/auto-car/android-auto-11.png)

</TabItem>

<TabItem value="ios" label="CarPlay"> 

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-2.png)
![CarPlay screen](@site/static/img/navigation/auto-car/car-play-8.png)
![CarPlay screen](@site/static/img/navigation/auto-car/car-play-9.png)
![CarPlay screen](@site/static/img/navigation/auto-car/car-play-10.png)

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-12.png)


</TabItem>

</Tabs>
-->