---
sidebar_position: 8
title:  Third-party routing (Brouter)
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

:::note

BRouter routing doesn't exist for iOS version.

:::

## Overview

OsmAnd uses its own algorithm and resources for routing. There are many parameters for routing in our [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing) file. You can modify the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing) and add or modify specific details for your type of Navigation.

But there is a third-party routing "engine" that you can use for OsmAnd. This is [BRouter](http://brouter.de/). BRouter uses pre-calculated routes. This means that you can very quickly build a route offline.

You can read how to install and use BRouter in the [BRouter readme.txt](http://brouter.de/brouter/readme.txt).

## How to use

*Below you can read the tutorial on how BRouter is installed and included in OsmAnd routing.*

1. [Install BRouter.app](https://play.google.com/store/apps/details?id=btools.routingapp) in your device.
2. Open BRouter and select a routing profile. You can choose a routing profile for your method of travelling (bicycle, moped,car, etc.). To give you more info about choosing the best routing profile for you, you can find more info about each profile  [here](http://brouter.de/brouter/profiles2/). Or you can try to use a routing profile in [BRouter-online](http://brouter.de/brouter-web/).


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

3. When you select and tap the desired routing profile (in our example it is a fast bike), OsmAnd will be able to download the data needed for routing.
   
Open BRouter application and click _Download Manager_.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

Choose your area and start downloading.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19a.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof19b.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19c.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof19d.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

You have installed and downloaded all the necessary data for third-party routing. All of the following steps will be performed in the OsmAnd application.  

4. You can choose or create a navigation profile in OsmAnd application. In *[Navigation type](../personal/profiles.md#navigation-settings)*, you choose _BRouter (offline)_: *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_external,routing_profile_broutrer"/>*


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof20.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof20a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

5. Everything is now ready to use the Brouter special routing. Now we will compare the pre-calculation speed of the BRouter routing data with the internal OsmAnd routing.
   
We choose two random points in the Netherlands and start calculation of the trip. We choose Balanced Driving style without using elevation data for Base profile. The time of calculation for this trip is 14.5 sec for our internal OsmAnd routing. The time for Brouter routing Navigation profile is less than 1 sec.

> Note: You should be aware that *Brouter* routing is very fast, but cannot be changed and/or configured. For OsmAnd offline routing, you can select any parameters and restrictions offline with fresh Openstreetmap data.

> Note 2: For information about Brouter routing, you can read [this page](http://www.brouter.de/brouter/algorithm.html) on the BRouter website.  

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 
