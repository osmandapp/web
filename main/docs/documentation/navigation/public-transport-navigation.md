---
sidebar_position: 5
title:  Public Transport navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

Public Transport navigation allows our users to work out their routes using public transport, which will certainly help one to move through the concrete jungle faster. 

Data of Public route lines is from [OpenStreetMap project](http://openstreetmap.org/), OsmAnd uses [PTv2 scheme](https://wiki.openstreetmap.org/wiki/Public_transport) for Public transport navigation.

![Navigation public transport Android](@site/static/img/navigation/public/navigation_android.png) ![avigation public transport iOS](@site/static/img/navigation/public/navigation_ios.png)

## How to use

To start the navigation in your city by public transport, you need to use [the navigation button](/docs/documentation/widgets/map-buttons#directions) on the map screen. Or choose navigation option in the main menu:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings"/>

<p> </p>

- You need to choose Public transport navigation profile, start an destination points.

![Navigation public transport routes Android](@site/static/img/navigation/public/navigation_public_android.png) ![avigation public transport routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

OsmAnd proposes route variants with walking time and publict transport routes with route info: time, distance, transfer, public routes. You need to swap the navigation screen for choosing your variant.

![Navigation public transport way Android](@site/static/img/navigation/public/navigation_way_android.png) ![avigation public transport way iOS](@site/static/img/navigation/public/navigation_way_ios.png)

- "Show on map" button allow to view all chosen route on the map (swap menu to view the next route variant). Swap the screen for viewing the next variant.

![Navigation public transport Details Android](@site/static/img/navigation/public/navigation_details_android.png) ![avigation public transport Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

- Click to "Details" button for open Description menu of choosing route. 
Here you can open all stops list by clicking to "" button.

![Navigation public transport stops list Android](@site/static/img/navigation/public/navigation_stops_list_android.png) ![avigation public transport stops list iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

**Note**: Public transport navigaiton in OsmAnd has testing variant. While you can build and view your route without full navigation function.

## Data for public transport

OsmAnd use New Public Transport Schema that is also called Public Transport Version 2 (PTv2) for OsmAnd Public Transport navigation algorithm. You can check your public transport [here](http://tools.geofabrik.de/osmi/). Guidelines on how to build or correct public transport routes is provided in [our blog](/blog/guideline-pt).

## Read more

- [Guideline for public transport](/blog/guideline-pt).
- [Presentation in SotM-2019](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).