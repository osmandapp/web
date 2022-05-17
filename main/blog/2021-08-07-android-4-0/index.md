---
slug: osmand-android-4-0-released
title: OsmAnd 4.0 (Android)
authors: eugene
tags: [release, cloud, srtm, track appearance, android]
---
import AndroidStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js'

Great news for Android users!

We're happy to announce the new 4.0 OsmAnd release for Android devices. At this release, we changed our monetization and added new functions. [Update your OsmAnd](https://play.google.com/store/apps/details?id=net.osmand), check out all the new features and let us know if you like everything!

![OsmAnd Androie 4.0](./banner.png)

<!--truncate-->

This is a short list of many changes happened in 4.0 release:
* New type of subscriptions
* Cloud backup and restore
* Moved 'OsmAnd Live' updates menu
* Added night mode for Topo\Offroad rendering styles
* Added option to download Contour lines in feet
* Updated 'Trip recording' dialog
* Tracks can now be colored by altitude, speed, or slope
* Added option to change the route line appearance
* Added online routing for navigation type
* 'Distance by tap' moved from 'Radius ruler' tool into a separate option
* 'Plan Route' improvements
* New Purchases screen
* New Language dialogue for Voice prompts
* New POI types
* My places: last opened tab is now remembered and will be open next time
* What else is in this release?

## New type of subscriptions

At this release we made two purchase plans for OsmAnd:
* **'Maps+'** plan has one-time payment and annual subscription. It's light paid version with all needed features: monthly map updates, unlimited map downloads, offline Wikipedia and Wikivoyage, terrain maps, nautical depth.
* **'OsmAnd Pro'** plan has monthly and annual subscriptions. It's a full version with all paid features: OsmAnd Cloud, Pro features, hourly map updates, monthly map updates, unlimited map downloads, offline Wikipedia and Wikivoyage, terrain maps, nautical depth.

Full information you can find [here](https://osmand.net/docs/user/purchases/).

<table class="blogimage">
  <tr>
    <td><img src={require('./purchases_plan.png').default} alt="Image"/></td>
  </tr>
</table> 

## Cloud backup and restore

New paid function for <a href="https://osmand.net/blog/osmand-android-4-0-released#monetization">'OsmAnd Pro'</a> subscription.

This function allows to make backup and restore all your OsmAnd data: settings, my places, resources. The size of storage is 3 * 50 * 1000 Gb.

Go to **<Translate android="yes" id="shared_string_menu" /> → Settings → Backup & Restore**. Select the data to be exported to backup storage.

<table class="blogimage">
  <tr>
    <td><img src={require('./backup_1.png').default} alt="Image"/></td>
    <td><img src={require('./backup_2.png').default} alt="Image"/></td>
  </tr>
</table> 


## Moved 'OsmAnd Live' updates menu

'OsmAnd Live' updates (function of hourly map updates) moved to **"<Translate android="yes" id="shared_string_menu" /> → Downloads maps → Updates"**.

<table class="blogimage">
  <tr>
    <td><img src={require('./live_1.png').default} alt="Image"/></td>
    <td><img src={require('./live_2.png').default} alt="Image"/></td>
  </tr>
</table>

## Added night mode for Topo / Offroad rendering styles

We added <a href="https://osmand.net/docs/user/map/vector-maps#map-mode">night mode</a> for <a href="https://osmand.net/docs/user/map/vector-maps#topo">Topo</a> and <a href="https://osmand.net/docs/user/map/vector-maps#offroad">Offroad</a> rendering styles.

<table class="blogimage">
  <tr>
    <td><img src={require('./topo.png').default} alt="Image"/></td>
  </tr>
</table>


## Added option to download Contour lines in feet

Now, there is an opportunity to download <a href="https://osmand.net/docs/user/plugins/contour-lines#downloading-files">Contour lines</a> data in <a href="https://en.wikipedia.org/wiki/United_States_customary_units">feet</a>.

<table class="blogimage">
  <tr>
    <td><img src={require('./feet_cl_1.png').default} alt="Image"/></td>
    <td><img src={require('./feet_cl_2.png').default} alt="Image"/></td>
  </tr>
</table>


## Updated "Trip recording" dialog

We improved and updated "Trip recording" dialog.
Now you can see more detailed information and graphs (Overview, Altitude, Speed) of your trip.
You can set needed parameters for recording and start record of your trip with one tap.

<table class="blogimage">
  <tr>
    <td><img src={require('./record_1.png').default} alt="Image"/></td>
    <td><img src={require('./record_2.png').default} alt="Image"/></td>
  </tr>
</table>


## Tracks can now be colored by altitude, speed, or slope

Now, any track can be colored by altitude, speed, or slope.
Choose track on the map or in 'My places → Tracks', tap to 'Appearance' button.

<table class="blogimage">
  <tr>
    <td><img src={require('./speed.png').default} alt="Image"/></td>
    <td><img src={require('./altitude.png').default} alt="Image"/></td>
  </tr>
</table>

## Added option to change the route line appearance

Users can choose an appearance for route line:

**<Translate android="yes" id="shared_string_menu" /> → <Translate android="yes" id="configure_profile" /> (choose app profile) → Profile appearance → Customize route line**

<table class="blogimage">
  <tr>
    <td><img src={require('./route_line.png').default} alt="Image"/></td>
  </tr>
</table>


## Added online routing for navigation type

Users can choose online routing engines for navigation type:
**<Translate android="yes" id="shared_string_menu" /> → <Translate android="yes" id="configure_profile" /> (choose app profile) → Navigation settings → Navigation type → 'Offline/Online' button**

Here you can use predefined templates, or add OSRM, GraphHopper, OpenRouteService, or GPX online routing.

<table class="blogimage">
  <tr>
    <td><img src={require('./online_routing.png').default} alt="Image"/></td>
  </tr>
</table>


## 'Distance by tap' moved from 'Radius ruler' into a separate option

We separated 'Distance by tap' option from 'Radius ruler' tool.
Now, you can find it in **<Translate android="yes" id="shared_string_menu" /> → Configure screen → Remaining elements → Distance by tap**.

<table class="blogimage">
  <tr>
    <td><img src={require('./distance_by_tap_1.png').default} alt="Image"/></td>
    <td><img src={require('./distance_by_tap_2.png').default} alt="Image"/></td>
  </tr>
</table>


## 'Plan Route' improvements

At this release, we continued to improve our <a href="https://osmand.net/docs/user/plan-route">'Plan Route'</a> tool.
Now, you can see a landscape of your trip planning by switching between points and graphs (Overview, Altitude, Slope, Road type, Surface, Steepness) tabs.

<table class="blogimage">
  <tr>
    <td><img src={require('./plan_route_1.png').default} alt="Image"/></td>
    <td><img src={require('.//plan_route_2.png').default} alt="Image"/></td>
  </tr>
</table>



We added the ability to change navigation options, accessing configure map and search without leaving 'Plan route' tool. Just, you need to click buttons on the screen.

<table class="blogimage">
  <tr>
    <td><img src={require('./plan_route_3.png').default} alt="Image"/></td>
    <td><img src={require('./plan_route_4.png').default} alt="Image"/></td>
  </tr>
</table>


## New Purchases screen

Now, there is a new 'Purchases' screen with detailed information about purchasing and 'Restore purchases' button.

<table class="blogimage">
  <tr>
    <td><img src={require('./purchases_menu.png').default} alt="Image"/></td>
  </tr>
</table>


## New Language dialogue for Voice prompts

Redesigned dialog for selecting the language for navigation instructions. Now it's easier to choose and download the needed language and type of voice guidance:
**<Translate android="yes" id="shared_string_menu" /> → <Translate android="yes" id="configure_profile" /> → <Translate android="yes" id="routing_settings_2" /> → <Translate android="yes" id="voice_announces" /> → <Translate android="yes" id="shared_string_language" />**.

<table class="blogimage">
  <tr>
    <td><img src={require('./voice_prompts_1.png').default} alt="Image"/></td>
    <td><img src={require('./voice_prompts_2.png').default} alt="Image"/></td>
  </tr>
</table>


## New POI types

Added new POI types: clubs, music, social, scout, freemasonry.


## My places: last opened tab is now remembered and will be open next time

Your last opened tab in 'My places' menu is remembered. And this tab will be open next time.


## What else is in this release?

* Various fixes for RTL
* Fixed issue with units of measurement
* Fixed issue with sharing more than one hundred favorite points
* Fixed crashes with Public transport navigation
* Improved search algorithm 

And remember that only together we can achieve the best results!
New features are coming SOON!

____________________________ 
<LinksSocial/>
<LinksTelegram/>
<AndroidStore/>
