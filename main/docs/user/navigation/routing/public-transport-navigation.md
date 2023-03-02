---
sidebar_position: 5
title:  Public Transport routing
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

## Overview

Public transport navigation in the OsmAnd app allows you to work out the routes using public transport, which will certainly help you get around the "concrete jungle" faster.

Data on public transport routes are taken from the [OpenStreetMap](http://openstreetmap.org/) project, OsmAnd uses the [PTv2 scheme](https://wiki.openstreetmap.org/wiki/Public_transport) for navigation.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![Navigation public transport Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![avigation public transport iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs> 


## How to use

To start navigating around the city by public transport, use [the navigation button](../../widgets/map-buttons.md#directions) on the map screen. Or select the navigation option in the main menu.  

- *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*
- *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings"/>*

**1.** You need to choose Public transport navigation profile, start an destination points.

![Navigation public transport routes Android](@site/static/img/navigation/public/navigation_public_android.png) ![avigation public transport routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

   - OsmAnd offers route options with walking times and public transport routes with route information: time, distance, transfer, public routes. You need to scroll through the navigation screen to select an option.

![Navigation public transport way Android](@site/static/img/navigation/public/navigation_way_android.png) ![avigation public transport way iOS](@site/static/img/navigation/public/navigation_way_ios.png)

**2.** "Show on map" button allow to view all chosen route on the map (swap menu to view the next route variant). Swap the screen for viewing the next variant.

![Navigation public transport Details Android](@site/static/img/navigation/public/navigation_details_android.png) ![avigation public transport Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

**3.** Tap the "Details" button to open the description menu for route selection. Here you can open the list of stops by tapping the "" button.  

![Navigation public transport stops list Android](@site/static/img/navigation/public/navigation_stops_list_android.png) ![avigation public transport stops list iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

:::note
Public transport navigaiton in OsmAnd has testing variant. While you can build and view your route without full navigation function.
:::

## Data and Guideline for public transport routing

OsmAnd uses a new public transport scheme, also called Public Transport Version 2 (PTv2) for the OsmAnd Public Transport navigation algorithm. 
- You can check your public transportation [here](http://tools.geofabrik.de/osmi/).
- A guide to building or adjusting public transport routes is available on our [blog](https://osmand.net/blog/guideline-pt).
- The presentation [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).
