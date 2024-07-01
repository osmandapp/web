---
sidebar_position: 12
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

> *This article was last updated in June 2024*

:::caution ANDROID ONLY
The third-party routing algorithm BRouter is only available for the Android version of the OsmAnd app.
:::   


## Overview

*BRouter* is a third-party routing algorithm that can be used in the OsmAnd app for [offline navigation mode](../guidance/navigation-settings.md#navigation-type). It is designed to optimize a route based on different parameters, such as time, distance, or vehicle type. 

[BRouter](http://brouter.de/) uses OpenStreetMap data to create a route and then adjusts it based on specified parameters. It uses pre-calculated routes to quickly build a route offline. It also allows the user to customize routing profiles, which are defined by a set of parameters to account for various factors in route selection. The [BRouter readme.txt](http://brouter.de/brouter/readme.txt) file explains in more detail how to install and use the program.

OsmAnd provides the user with the ability to select routes with BRouter and configure routing profiles to better define the route according to the user's needs.  

For more information you can visit official [Brouter website](http://www.brouter.de/brouter/algorithm.html).  

BRouter integration in OsmAnd changed a lot during the summer of 2019. This guide assumes you are using the BRouter Android app in version 1.5.0 or higher as well as OsmAnd in version 3.4 or higher.

:::note
The third-party routing algorithm BRouter is only available for the Android version of the OsmAnd app.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table> 


## How to configure

Follow this guide to installing and configuring the third-party *BRouter Offline Navigation* application for use in OsmAnd.  

**1.** To get started, you need to install the BRouter app on your Android device from [F-Droid](https://f-droid.org/packages/btools.routingapp) or [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) on your device.  
**2.** Then, to navigate using the OsmAnd app along pre-calculated routes with the BRouter, you need to:  


  - Open BRouter application and tap *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table> 

  - Zoom in and select the areas you want to route in. Then click "Start Download" and BRouter will start downloading the [segments](http://brouter.de/brouter/segments4/) files for the selected areas.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table> 

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table> 

**Note** that you will have to repeat this step periodically, whenever you want to have an updated version of the OSM data used for the routing.

**3.** Once this is done, start again the BRouter app and choose the "BRouter App" entry on the main menu. Choose a routing profile depending on your mode of travel. It could be biking, moped, hiking, or trekking. A list of available profiles for download in *brf* format can be found [here](http://brouter.de/brouter/profiles2/). Or you can try using the routing profile in [BRouter-online](http://brouter.de/brouter-web/). 
Click "Service-Mode". Then, tick the boxes for the routing modes you want to use this profile for. You can use two different profiles per transportation mode, which will be mapped to the "shortest" and "fastest" presets (these are just labelling) in OsmAnd. 

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** If you have already loaded any segments previously, they will be displayed on the BRouter map. The segments have four states:  
- *"Green"* square - Selected new segment to download.
- *"Blue"* square - The segment with updated data.
- *"Grey"* square - The segment is already downloaded but requires updating.
- *"Yellow"* square - The segment is being updated.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table> 

**5.** When you have loaded the required map segments with BRouter and selected a routing profile in it, all the next settings of this type of navigation are made in the OsmAnd application.   

**6.** You can create an "Application profile" in OsmAnd which will be using BRouter for offline routing. 
Use the *BRouter (offline)* routing type with any [profile](../../personal/profiles.md) in the OsmAnd app. To do this, go to the main *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>*  and create a new profile based on the base profile of your choice (cycling here, for bicycle routing), with a custom name of your choice ("BRouter" on the screenshot below) and making use of "BRouter (offline)" for navigation.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table> 

The BRouter app should be launched before OsmAnd for this specific entry to appear in OsmAnd. Therefore, if you cannot find "BRouter (offline)" navigation option, you should force quit OsmAnd and restart it.

## OsmAnd version 4.7.1

From version 4.7.1 upwards Osmand supports the profile parameter for mapping: Since Osmand version 3, many profiles can be defined in Osmand and the user can easily switch between these profiles. This allow now when using the service-interface to address different brouter-profiles in a more flexible and better comprehensive way.

- If in Osmand a profile has "BRouter" defined as navigation service
- AND the profile-name looks like "Brouter[mysting]"

==> then the profile "mystring" will be used in the Brouter-app!
(this new mapping replaces in that case the basic mapping defined above and based on the file "serviceconfig.dat)

### Examples: Osmand-profile name	Brouter-app
```
Brouter[trekking]	"trekking" profile will be used (file trekking.brf)
Brouter[racebike]	"racebike" profile will be used (file racebike.brf)
....
```
Remark:
Currently Osmand do not check the defined name (case sensitiv) for the Brouter-profile (mystring).
If no profile is found, the routing will fail with "Could not calculate route.."!

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table> 

## How to use

This section describes a comparison of BRouter with the internal routing of the OsmAnd application.  

When BRouter is configured, we can compare the pre-calculation speed of the BRouter routing data with the internal OsmAnd routing. Let's choose two random points in the Netherlands and start calculating the trip. For this, we set a balanced driving style without using altitude data for the base profile. The calculation time for this trip is 14.5 sec for our internal OsmAnd route. The route calculation time when using BRouter routing is less than 1 second.  

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 


## Route parameters

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*  

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)   

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | In most cases, the shortest route will be suggested. Often this route can take longer than if the setting was disabled |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Read about Consider temporary limitations option in this [article](../routing/osmand-routing.md#consider-temporary-limitations).   | The routing algorithm can take into account the time constraints specified in the OpenStreetMap. Note that in some cases the information from the OSM may be out of date.   |


### Other routing settings

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigation → Settings*, [image](../routing/online-routing.md#online-routing-setting)). If this option is enabled, OsmAnd adds two segments to the calculated Brouter track: one from *[My location](../../map/interact-with-map.md#my-location--zoom)* to the starting point of the track and another from the end of the track to the finish point of your route. This option is active if the distance to or from the track exceeds 60 meters.

- In the [*Recalculate route section*](../../navigation/guidance/navigation-settings.md#recalculate-route) of the *Route parameters*, you can enable and adjust route recalculation options.

- In the [*Development section*](../guidance/navigation-settings.md#development-settings) of the *Route parameters*, you can try new routing features that are currently in the testing phase. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.


