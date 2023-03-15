---
sidebar_position: 11
title:  BRouter
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
Third-party routing is availible only for Android version of the OsmAnd app.
:::

## Overview

OsmAnd uses its own routing algorithm and resources (see the [Online routing](./online-routing.md) article for details), as well as the third-party routing "engine" BRouter.  
[BRouter](http://brouter.de/) uses pre-calculated routes, which allows you to build a route very quickly in offline mode. You can read how to install and use it in the BRouter [readme.txt](http://brouter.de/brouter/readme.txt).


## How to use

A guide to installing BRouter and including it in OsmAnd routing.

**1.** [Install BRouter.app](https://play.google.com/store/apps/details?id=btools.routingapp) in your device.  
**2.** Open BRouter and select a routing profile. You can choose a routing profile for your method of travelling (bicycle, moped,car, etc.). To give you more info about choosing the best routing profile for you, you can find more info about each profile  [here](http://brouter.de/brouter/profiles2/). Or you can try to use a routing profile in [BRouter-online](http://brouter.de/brouter-web/).


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

**3.** When you select and tap the desired routing profile (in our example it is a fast bike), OsmAnd will be able to download the data needed for routing.
   
  - Open BRouter application and click _Download Manager_.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

  - Choose your area and start downloading.

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

   - You have installed and downloaded all the necessary data for third-party routing. All of the following steps will be performed in the OsmAnd application.  

**4.** You can choose or create a navigation profile in OsmAnd application. In *[Navigation type](../../personal/profiles.md#navigation-settings)*, you choose _BRouter (offline)_: *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_external,routing_profile_broutrer"/>*


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof20.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof20a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

### Sample

By configuring the Brouter we can compare the speed of the pre-calculation of the BRouter routing data with the internal OsmAnd routing.

We choose two random points in the Netherlands and start the calculation of the trip. To do this, we set a balanced driving style without using altitude data for the base profile. The calculation time for this trip is 14.5 sec for our internal OsmAnd route. The time for the Brouter navigation routing profile is less than 1 second.

:::note Note 1
You should be aware that *Brouter* routing is very fast, but cannot be changed and/or configured. For OsmAnd offline routing, you can select any parameters and restrictions offline with fresh Openstreetmap data.
:::

:::note Note 2
For information about Brouter routing, you can read [this page](http://www.brouter.de/brouter/algorithm.html) on the BRouter website.  
:::

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 
