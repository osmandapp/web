---
sidebar_position: 5
---

# iOS 4.3 (November 2022)

## Join Beta

iOS beta builds(TestFlight) usually are provided weekly (after team sprint demo). They don't have description and could have continuous versioning. They supposed to be stable and ready to use.

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>

## What's new

<!-- [Read the release article](https://osmand.net/blog/osmand-ios-4-3-released) -->

* [New purchase plans](#new-purchase-plans): "OsmAnd Pro" and "Maps+":
  * [Cloud backup](#cloud-backup) and [Offline Weather](#weather-forecast) for OsmAnd Pro;
  * New convenient ["Purchase" screen](#new-purchases-screen).
  * [New colors for Tracks](#new-colors-for-tracks).
* [Updates for Favorites](#new-updates-for-favorites).
* [Updates for CarPlay](#carplay-improvements).
* [Added smooth animation](#smooth-animation).
* [OsmAnd Live](#osmand-live-for-osmers) for OSMers.
* [OsmAnd data](#files-app-updates) for Files app.
* Added support of [GPX tags](#new-updates-for-gpx-files).
* Added mode for [the Compass button](#compass-modification).
* [More](#more):
  * Fixed an issue with UTM Coordinates format.
  * Fixed an issue with intermediate points in navigation.
  * Added Canadian road signs for Speed limit and Railway crossing.



## New purchase plans

In release we added new subscription plans, named _"OsmAnd Pro"_ and _"OsmAnd Maps+"_. OsmAnd Pro is a new subscription plan with access to all features and "Maps+" purchase with unlimited map downloads and paid plugins access.

OsmAnd Pro is a cross-platform subscription (After registration in our servers you can use it for Android and iOS version OsmAnd).

Read more about iOS purchases [here](https://osmand.net/docs/user/purchases/ios).

## New paid features

These features are available for OsmAnd Pro subscribes:
- [OsmAnd Cloud](#cloud-backup) (Backup & Restore)
- [Weather forecast](#weather-forecast)

### Cloud backup

_Menu → Settings → Backup & Restore_

Read more info [here](https://osmand.net/docs/user/personal/storage#backup-and-restore-for-osmand-pro).

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/backup_ios.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/backup_1_ios.png').default} alt="turn arrows visible"/></td>    
    </tr>
</table> 

### Weather forecast

24h hourly forecast 7 days ahead on the map.

The Weather plugin: _Menu → Plugins → Weather_

Download the weather forecast in the _Maps & Resources_ menu for offline use:  _Menu → Maps & Resources → Map Region → Weather forecast_.

Weather widgets: _Temperature, Pressure, Wind, Cloud, Precipitation_. Shows these parameters for the central point of a device screen.

Weather toolbar: _Menu → Configure screen → Weather toolbar_. Weather quick menu on a device screen.

Weather map layers: _Menu → Configure map → Weather_


<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/weather_ios.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


### New Purchases screen

_Menu → Settings → Purchases_

- "Active"  - the list with users active purchases.
- "Expires" - the list with unactive purchases.
- "Learn more" button - opens menu with puchases screen.
- "Help" menu:
    - _"Restore purchases"_ button - allows to restore user purchases.
    - _"Redeem promo code"_ button - opens iOS instruction.
    - _"New device/new account"_ button - opens OsmAnd docs.
    - _"Contact support"_ - allows to send email to OsmAnd support team.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/purchases_screen.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 

## New colors for tracks

Tracks can now [be colored by](https://osmand.net/docs/user/map/tracks-on-map#track-appearance) _Altitude, Speed, Slope, Surface, Smoothness_.

Solid, Altitude, Speed - for free use.
Slope, Surface, Smoothness - for [OsmAnd Pro](https://osmand.net/docs/user/purchases/ios#free-and-paid-features).

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/gpx_colors_ios.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/gpx_colors_1_ios.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


## New updates for Favorites

### Local backup

Added local backups generation after each change, backups accessible from the Files app.

Each saving or editing for Favorites makes a backup file.

*Files → On my iPhone → OsmAnd Maps → favourites_backup*

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/favorites_autobackup.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


### POI data

POI saved to favorites will store and show all POI data even without an offline map.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/favorites_poi_ios.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/favorites_poi_1_ios.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


## CarPlay improvements

- added lanes;
- 2.5D view;
- fixed bug with voice connect over Bluetooth.

## Smooth animation

Routing animation (icon movement during navigation) works smoothly now.

## OsmAnd Live for OSMers 

Free using [OsmAnd live feature](https://osmand.net/docs/user/personal/maps#free-for-osm-mappers) for active OSMers.

## Files app updates

Now, you can see OsmAnd maps files in _Files → On my iPhone → OsmAnd Maps → Resources_.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/resources_ios.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 

## New updates for GPX files

support of custom extensions, link, cmt, desc tags

1. Favorites: show content of ```<cmt>``` tag similar to waypoints:

```
<wpt lat="30.297375" lon="-87.4320327">
  <name>Caf� Beignet</name>
  <cmt>Open 6:30 am to 12:00 pm. Closed Sun &amp; Wed</cmt>
</wpt>
```

2. Phone numbers for the Waypoint attributes

```
<wpt lat="52" lon="5">
<extension>
<phone>My phone number</phone>
<website>https://test.website</website>
<comment>Comment</comment>
<extension>
</wpt>
```

3. Tags for description: name, desc, cmt, link.


## Compass modification

_Menu → Configure screen → Compass_:
- _Always wisible_;
- _Always hidden_;
- _Visible if map is rotated_. (hidden when north is up).

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-17-ios-4-3/compass_ios.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 

## More

- Fixed an issue with UTM Coordinates format.
- Fixed an issue with intermediate points in navigation.
- Added Canadian road signs for Speed limit and Railway crossing.

