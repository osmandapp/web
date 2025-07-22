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



## Overview {#overview}

Public transport navigation in the OsmAnd app allows you to work out the routes using public transport, which will certainly help you get around the "concrete jungle" faster.

Data on public transport routes is taken from the [OpenStreetMap](http://openstreetmap.org/) project. OsmAnd uses the [PTv2 scheme](https://wiki.openstreetmap.org/wiki/Public_transport) for navigation.  OsmAnd supports following OpenStreetMap routes for navigation  *bus*, *trolleybus*, *share_taxi*, *funicular*, *subway*, *light_rail*, *monorail*, *train*, *tram*, *ferry*. Default speed for each type of vehicle is configured in [Routing xml](../../../technical/build-osmand/routing.md) and it used to find the fastest routes.

:::note
Public transport routing is in the testing phase. For now, you can build and view your route without the full navigation function.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![avigation public transport iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## How to Use {#how-to-use}

To start navigating around the city by public transport, use [the navigation button](../../widgets/map-buttons.md#directions) on the map screen or select the navigation option in the *Main Menu*.  

**1.** You need to choose *Public transport navigation profile*, start and destination points.  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport routes Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd offers route options with walking times and public transport routes with route information: time, distance, transfer, and public routes. You need to scroll through the navigation screen to select the required option.  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport way Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport way iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** You can view all possible route suggestions on the map using the *Show on map* button. Swipe through the screens to view the next route option.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Tap the "Details" button to open a description of the selected route with all stops and transfers.  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport stops list Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport stops list iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Data and Guideline {#data-and-guideline}

OsmAnd uses a new public transport scheme, also called Public Transport Version 2 (PTv2) for the OsmAnd Public Transport navigation algorithm.

- You can check your public transportation [here](http://tools.geofabrik.de/osmi/).
- A guide to building or adjusting public transport routes is available on our [blog](https://osmand.net/blog/guideline-pt).
- The presentation [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Last updated: June 2024.*
