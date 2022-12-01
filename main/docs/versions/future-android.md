---
sidebar_position: 4
---

# Android 4.3 (November 2022)

OsmAnd produces every day multiple Ready-To-Use builds which allows keep track of new features and participate in OsmAnd contributions (translation process).

## Join Beta
You can participate in testing OsmAnd beta build thru Google Play. 

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>

## What's new

1. **New, faster Version 2 (OpenGL) map rendering engine, with 2.5D view.**
  
In the previous release OsmAnd 4.2, we added [this feature for testing](https://osmand.net/blog/osmand-android-4-2-released#25d-view-for-testing). Now, OpenGL rendering engine is available by default.

The setting for Enable/Disable 2.5D view is located in profile settings:

_Menu → Configure profile → General settings → 2.5D view_ 

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/2-5-d-view_1.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/2-5-d-view_2.png').default} alt="turn arrows hidden"/></td>
    </tr>
</table> 

When 2.5D view is enabled, you can change the view angle [by gesture _Tilt_](https://osmand.net/docs/user/map/interact-with-map#gestures) or [by _My location_ button](https://osmand.net/docs/user/map/interact-with-map#my-location--zoom).


2. **Smooth animation of location changes while in motion.**

Routing animation (icon movement during navigation) works smoothly now.


3. **New improvements for Widgets:**
   
   * **Added widget with coordinates of the map center and elevation of geolocations;** 

   _"Coordinate widget - Map center"_ was added. Users can look for coordinates info for any points on the map fast. For [Coordinates widget](https://osmand.net/docs/user/widgets/info-widgets#coordinates-widget) you can show _Map center_ and / or _Current location_ info panel on top of the screen device:

   _Menu → Configure screen → Widgets → Top panel → Coordinates widget → Coordinates:map center / Coordinates:current location_

   Where green icons are _Map center_ coordinates, blue icons are _My location_ coordinates.

   <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/coordinates_widget_1.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/coordinates_widget_2.png').default} alt="turn arrows hidden"/></td>
    </tr>
   </table> 

   * **"Distance to tap": added text size option;** 
    Now there is an opportunity to change the text size for info on [_Distance by Tap_](https://osmand.net/docs/user/widgets/radius-ruler#distance-by-tap-tool) tool:

   _Menu → Configure screen → Buttons → Distance by tap → Text size → Large / Normal_ 

   <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/distance_by_tap_1.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/distance_by_tap_2.png').default} alt="turn arrows hidden"/></td>
    </tr>
  </table> 


   * **"Map marker" widget: added option to change click behavior.**

   _Map marker widget_ can show _Estimated arrival time (ETA)_ now, not only the distance to the Map marker.

   <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_6.png').default} alt="turn arrows visible"/></td>
    </tr>
   </table> 
  
   At first, you need to add _Map marker widget_ to left or right panel: _Menu → Widgets → left / Right panel → Map markers_. Than you need check settings of these widgets by tapping on &#9881; button. 

   <table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_1.png').default} alt="turn arrows visible"/></td>
  </tr>
  </table> 

  Here you can choose what widget will show: Distance or ETA. What action will be by clicking on widget: _Switch mode_ or _Go to marker location_.

  _Switch mode_ changes mode from _Distance_ to _ETA_ and vice versa.

  _Go to marker location_ moves the center map to chosen Map marker.

    <table class="blogimage">
    <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_2.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_3.png').default} alt="turn arrows visible"/></td>
    </tr>
    </table> 

    _Estimated arrival time (ETA)_ widget you can choose the time interval: Specify the time interval for speed averaging (used for the arrival time estimate).

    <table class="blogimage">
    <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_4.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_5.png').default} alt="turn arrows visible"/></td>
    </tr>
    </table> 


4. **Reorganised "Nautical maps".**

We reorganised ["Nautical maps"](https://osmand.net/docs/user/plugins/nautical-charts) folder in [_Download maps_](https://osmand.net/docs/user/start-with/download-maps#main-menu) menu. Now, it has three section: _Wordwide maps, Depth contours, Nautical depth points_.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/nautical_folder.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


5. **Added ability to switch Mountain bike routes scheme classification.**

OsmAnd renders on the map [MTB IMBA](https://www.imba.com/) trials now. You need to switch on _Show MTB IMBA trails_ in _Menu → Configure map → Routes_.

Example of MTB IMBA icons for trails and [legend](https://docs.osmand.net/docs/user/map-legend/osmand/#routes) for these icons:

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/imba_map.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/imba_legend.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


6. **GPX added support for "link", "cmt", "desc" tags and for any custom extensions.**

- Favorites: show content of ```<cmt>``` tag similar to waypoints, phone numbers for the Waypoint, attributes
name, desc, cmt, link:

```
<wpt lat="30.297375" lon="-87.4320327">
  <name>Caf� Beignet</name>
  <cmt>Open 6:30 am to 12:00 pm. Closed Sun &amp; Wed</cmt>
</wpt>

```

- Phone numbers for the Waypoint attributes

```
<wpt lat="52" lon="5">
<extension>
<phone>My phone number</phone>
<website>https://test.website</website>
<comment>Comment</comment>
<extension>
</wpt>
```

- Tags for description: name, desc, cmt, link.


<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/gpx_tags.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 



7. **Added option to disable UUID.**

What's been done by sorted by priority:

- It's possible to disable that UUID (Unique User Identifier) sending in [Privacy Global Settings](https://test.osmand.net/docs/user/personal/global-settings#privacy-and-security) as the result the traffic could be deprioritized when lots of maps are downloaded i.e. in the beginning of the month.
- UUID is rotated every 3 months so there is no user profile built for a longer history.
- ToS with explanation has been updated [https://osmand.net/help-online/terms-of-use/](https://osmand.net/help-online/terms-of-use/).
- There is a clear indication On first screen after installation and a link to ToS.


8. **Added support for ANT+ sensors.**

At this release, we added support [external devices ANT+](https://en.wikipedia.org/wiki/ANT_(network)#ANT+) (speed, cadence, heart rate, distance, cycle power, temperature). The support external devices Bluetooth we will plan for the next release. 


9. **Add new data on the map: different clubs, filters for swimming, different types of playgrounds.**

- POI with tag [_club key_](https://wiki.openstreetmap.org/wiki/Key:club): the full list you can find [here](https://github.com/osmandapp/OsmAnd/issues/10486).
- Added more filter options for [Swimming POIs](https://wiki.openstreetmap.org/wiki/Tag:sport%3Dswimming).
- Tag [emergency=lifeguard](https://wiki.openstreetmap.org/wiki/Tag:emergency%3Dlifeguard_base).


10. **The Weather plugin**

It's the new paid feature. Read about the Weather plugin [here](https://osmand.net/docs/user/plugins/weather).

11. **Fixed "Display position" option.**

Changed [the Appearance setting](https://osmand.net/docs/user/personal/profiles#appearance) for Profile _"Display position always in centre"_ to _"Display position"_, where the user can choose two parameters: _Center_ or _Bottom_.

12. **Default-speed adjustable forecast for elevation-dependent walking/hiking/running trip times**

For an activity like hiking or running, set your respective pedestrian profile's default speed (normally 4km/h) to your individual expected value for flat terrain. Then all route calculations for that profile will forecast the corresponding trip time accounting more precisely for any actual elevation gain, if option "Use elevtion data" is set and elevation data is present on the device.

13. **Fixed audio output and volume slider behavior**

Fixed some bugs in reliably using the selected audio stream and activating the volume slider for exactly that stream.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/display_position.png').default} alt="turn arrows visible"/></td>
    </tr>
</table> 


