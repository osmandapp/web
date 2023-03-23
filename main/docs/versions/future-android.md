---
sidebar_position: 4
---

# Android 4.4 (March 2023)

OsmAnd produces multiple Ready-To-Use builds every day, allowing you to track new features and participate in the OsmAnd contributions (translation process).

## Join Beta
You can participate in testing the OsmAnd beta build through Google Play. 

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>

## What's new


* Improved the ["Tracks" menu](#tracks-menu) in "Configure Map".
* Context menu now [displays localized names](#localized-poi-names) for POI.
* Added the option to share [route by link](#route-link).
* A new fixed mode was added to the [Map orientation](#map-orientation).
* Added ["Display position"](#display-position) menu.
* Simplified [start screen](#simplified-start-screen).
* Added ["Speed/Slope" graph](#speedslope-graph) for track analysis.
* Added ["Nautical miles/feet"](#nautical-miles-and-feet) unit of length.
* The [App language](#app-language-for-android-13) selection was moved to the system settings on Android 13.
* Added possibility to download online tiles used as "Overlay" or "Underlay" maps.
* Added support of imperial measurement units for "Vehicle parameters".
* New Moped profile.
* [Simulate location](#redesign-simulate-location) redesign.
* [**Bugs fixs:**](#bugs-fixs)
  * Fixed [bugs with Android Auto](#android-auto).
  * Fixed issues with [displaying Vegan places](#vegan-places-pois).
  * Fixed [map gestures](#map-gestures).
  * Fixed [Australian roads shields](#australian-roads-shields).



### Tracks menu

The "Tracks" menu has a new design and a simpler UX. It's easy to choose the needed track to display it on the map, change appearance (&#8942; more than one track) or import (&#8942;):  

_OsmAnd menu → Configure map → Tracks_

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/tracks_menu.png').default} alt="tracks"/></td>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/tracks_menu_1.png').default} alt="tracks"/></td>
    </tr>
</table> 

### Localized POI names

Added localized POI names for [Map context menu](../user/map/map-context-menu.md#alternative-names). Tap the POI name to open the full list of names.  

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/map/alternative_names_andr_1.png').default} alt="POI names"/></td>
    <td><img src={require('@site/static/img/map/alternative_names_andr.png').default} alt="POI names"/></td>
    </tr>
</table> 

### Route link

You can generate and send a link after creating a route in OsmAnd app.

_Navigation context menu → Details → Share button_

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/nav_link.png').default} alt="tracks"/></td>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/nav_link_1.png').default} alt="tracks"/></td>
    </tr>
</table> 


<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/nav_link_2.png').default} alt="tracks"/></td>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/nav_link_3.png').default} alt="tracks"/></td>
    </tr>
</table> 

Route link for example:  [https://osmand.net/map?start=50.212845%2C19.831682&end=50.141838%2C19.883652&mode=pedestrian#10/49.816523/19.846590](https://osmand.net/map?start=50.212845%2C19.831682&end=50.141838%2C19.883652&mode=pedestrian#10/49.816523/19.846590)


### Map orientation 

Added a new fixed mode for [Map orientation](../user/map/interact-with-map.md#map-orientation-modes):

- _Manually rotated (fixed)_. 

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/map-orientation.png').default} alt="map orientation"/></td>
    </tr>
</table> 

### Display position

Added the new settings for [_"Display position"_](../user/map/interact-with-map.md#map-orientation--compass):

_Menu → Configure profile → [General settings](../user/personal/profiles.md#appearance)→ Display position_

You can choose three options to display your location on the screen map here:

- _Center_: use the center position of the screen for the cursor (["My location"](../user/map/interact-with-map.md#my-location--zoom)).
- _Bottom_: use the bottom screen position for the cursor (["My location"](../user/map/interact-with-map.md#my-location--zoom)).
- _Automatic_: at the bottom for the direction of movement, in the center for everyone else.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/display_position.png').default} alt="tracks"/></td>
    </tr>
</table> 

### Simplified Start screen

We changed the structure of the Start screen. It is now available to open OsmAnd Cloud.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/start_screen.png').default} alt="start screen"/></td>
    </tr>
</table> 

### Slope/Speed graph

Added _Slope/Speed_ mode for [Analyze track on the map](../user/map/tracks-on-map.md#analyze-track-on-map).

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/tracks_graph.png').default} alt="tracks"/></td>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/track_graph_1.png').default} alt="tracks"/></td>
    </tr>
</table> 

### Nautical miles and feet

Added ["Nautical miles/feet"](../user/personal/profiles.md#units--formats) for Units & formats.

### App language for Android 13

Added support for OsmAnd language preferences (Android 13):

_App info (OsmAnd) → App languages_

### Redesign Simulate location

We redesigned ["Simulate your position"](../user/plugins/development.md#plugin-settings) by adding a new screen with settings.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/simulate_location.png').default} alt="simulate your location"/></td>
    </tr>
</table> 

### Bugs fixs

#### Android Auto

- The [issue](https://github.com/osmandapp/OsmAnd/issues/16041): "Movement direction map orientation is flipped and jiggles".
- The split-screen [issue](https://github.com/osmandapp/OsmAnd/issues/16456).
- Fixed crash with [GPX selection](https://github.com/orgs/osmandapp/projects/19/views/4?pane=issue&itemId=18983833).
- The issue with the [Navigation info panel](https://github.com/osmandapp/OsmAnd/pull/16244).
- Added support Android Auto map mode: Day, Night, Automatic.

#### Vegan places POIs

Fixed the [issue](https://github.com/osmandapp/OsmAnd/issues/15426): "Most vegan places don't show".


#### Map gestures

Fixed [map gestures](https://github.com/osmandapp/OsmAnd/issues/15931) for tilt, zoom and rotation: 

#### Australian roads shields

Fixed [Australian roads shields](https://github.com/osmandapp/OsmAnd/issues/16568).