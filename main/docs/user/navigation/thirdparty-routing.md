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

## What's in

OsmAnd uses its own algorithm and resources for routing. There are many parameters for routing in our [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing) file. You can modify the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing) and add/modify specific details for a/your Navigation type.

But there is also a Third-party routing "engine" which you can use for OsmAnd. It's [BRouter](http://brouter.de/). BRouter uses precalculation routes. It means that you can build your route very quickly offline.

How to install and use BRouter can be read in [BRouter readme.txt](http://brouter.de/brouter/readme.txt).

## How to use

_Below you can read the tutorial on how BRouter is installed and included into OsmAnd routing._

1. You should [install BRouter.apk](https://play.google.com/store/apps/details?id=btools.routingapp) in your device.
2. You should open BRouter and select a routing profile. You can choose a routing profile for your method of travelling (bicycle, moped,car, etc.). To give you more info about choosing the best routing profile for you, you can find more info about each profile  [here](http://brouter.de/brouter/profiles2/). Or you can try to use a routing profile in [BRouter-online](http://brouter.de/brouter-web/).


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

3. When you choose and tap the wanted routing profile (in our example, it is _fastbike_), we can download the data necessary for routing.
   
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

Now we have installed and downloaded all needed data for Third-party routing. All of our next steps will be in the OsmAnd application.

4. You can choose or create a navigation profile in OsmAnd application. In _[Navigation type](../personal/profiles.md#navigation-settings)_, you choose _BRouter (offline)_: _General menu → Choose (create) Navigation profile → Configure profile → Navigation settings → Navigation type_.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof20.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof20a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

5. Everything is now ready for using the special Brouter routing. Now we compare the speed of the routing precalculation data of BRouter with OsmAnd's internal routing.
   
We choose two random points in the Netherlands and start calculation of the trip. We choose Balanced Driving style without using elevation data for Base profile. The time of calculation for this trip is 14.5 sec for our internal OsmAnd routing. The time for Brouter routing Navigation profile is less than 1 sec.

> Note: You must understand that Brouter routing is very fast, but it is not modifyable and/or configurable. For OsmAnd offline routing you can choose any parameters and restrictions offline with fresh map data from Openstreetmap.

> Note 2: For some background info on the Brouter routing you can read [this page](http://www.brouter.de/brouter/algorithm.html) on the BRouter website.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 
