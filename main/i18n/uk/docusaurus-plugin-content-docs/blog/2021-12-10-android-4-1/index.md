---
slug: osmand-android-4-1-released
title: OsmAnd 4.1 (Android)
authors: eugene
tags: [release]
---
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


Great news for Android users! OsmAnd 4.1 is here! Here are some of the most important updates. [Update your OsmAnd](https://play.google.com/store/apps/details?id=net.osmand), check out all the new features and let us know if you like everything!

:::tip Note

This release of OsmAnd 4.1 is **not available** for Android below 6.0.

:::

![OsmAnd Androie 4.1](./banner.png)

<!--truncate-->

This is a short list of many changes happened in 4.1 release:


* Added initial support for Android Auto
* Elevation widget
* GPS filter
* User interface update for UTM coordinate search
* Favorites: added ability to view recently used icons
* Route planning: will use the selected profile after launch
* Fixed Mapillary layer, the plugin is now disabled by default
* Added screen to manage all the history in the app
* App shortcuts
* What else is in this release?



## Added initial support for Android Auto

OsmAnd is available for <a href="https://www.android.com/auto/">Android Auto</a> function in your vehicle. Now, you can use your media screen for navigation by OsmAnd.

**Note:**Paid feature is available for <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Paid users (Maps+ and subscribers)</a>.

<table class="blogimage">
  <tr>
    <td><img src={require('./osmand_android_auto.png').default} alt="Image"/></td>
  </tr>
</table>

## Added Elevation widget for trip

At this release, you find the new Pro Feature for your active trips * "Elevation widget". Now, you see the elevation profile of your trip on the bottom side of the screen. You can see downhills and uphills on your trip. Just switch on "Elevation widget" for your profile, start navigation mode, and see current elevation info on your screen:

Menu → choose your profile → Configure screen → Elevation profile

:::note

Pro feature is available for <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::

<table class="blogimage">
  <tr>
    <td><img src={require('./elevation_widget.png').default} alt="Image"/></td>
  </tr>
</table>



## GPS filter

We added new <a href="https://osmand.net/docs/user/map/track-context-menu#options">Options</a> for GPX tracks * "GPS filter". Now, you can filter points of your GPX track by Smoothing, Speed, Altitude, Min GPS Precision:

Open <a href="https://osmand.net/docs/user/map/track-context-menu">Tracks Context menu</a> → Options → GPS filter

<table class="blogimage">
  <tr>
    <td><img src={require('./gps_filter.png').default} alt="Image"/></td>
  </tr>
</table>



## User interface update for UTM coordinate search

Adding <a href="https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system">UTM format</a> for Adding <a href="https://osmand.net/docs/user/search/search-address#coordinates-search">Coordinates searching function</a>.

Search menu → Address → <a href="https://osmand.net/docs/user/search/search-address#coordinates-search">Coordinates search</a> 

<table class="blogimage">
  <tr>
    <td><img src={require('./UTM.png').default} alt="Image"/></td>
  </tr>
</table>



## Favorites: added ability to view recently used icons

Adding <a href="https://osmand.net/docs/user/personal/favorites#create">recently used category</a> for Favorite icon.

<table class="blogimage">
  <tr>
    <td><img src={require('./favorite.png').default} alt="Image"/></td>
  </tr>
</table>

## Route planning: will use the selected profile after launch

Improving of <a href="https://osmand.net/docs/user/plan-route/create-route">Plan route tool</a>. Now, you can start planning your route with <a href="https://osmand.net/docs/user/widgets/map-buttons#configure-map">the current app profile</a> (for Browse map profile  *  navigation type "Straight line").


<table class="blogimage">
  <tr>
    <td><img src={require('./planroute.png').default} alt="Image"/></td>
  </tr>
</table>


## Fixed Mapillary layer, the plugin is now disabled by default

In this release we fixed Mapillary layer, the plugin is now disabled by default. Enable / Disable the plugin:

Menu → Plugins → Mapillary

Read more about Mapillary plugin <a href="https://osmand.net/docs/user/plugins/mapillary">here</a>.


## Added screen to manage all the history in the app

Now, you can disable history logging individually for each history type. One more option, you can export history into a file (Back up as file).

Menu → Settings → OsmAnd settings → Privacy and security: History

<table class="blogimage">
  <tr>
    <td><img src={require('./history.png').default} alt="Image"/></td>
  </tr>
</table> 


## App shortcuts

<a href="https://support.google.com/android/answer/9450271">App shortcuts</a> are available for the OsmAnd icon. Just long-tap the OsmAnd icon on your device screen to open App shortcuts menu.

Here, you can click short tap for choosing next actions: Navigate to Home, Navigate to Work, Start Recording, Search, My places, Navigate to. Long-tap one of the actions allows you to add new action icon to your device screen.

Tapping to the action icon allows starting this action immediately.

<table class="blogimage">
  <tr>
    <td><img src={require('./shortcuts1.png').default} alt="Image"/></td>
    <td><img src={require('./shortcuts2.png').default} alt="Image"/></td>
  </tr>
</table> 

## What else is in this release?

* Now, this release OsmAnd 4.1 is not available for Android below 6.0
* Improved SRTM height marker rendering
* Fixed Arabic display on the map
* Fixed different routing issues
* Map orientation is not reset after restarting the app


_________________________________________________
<LinksTelegram/>
<AndroidStore/>