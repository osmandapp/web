---
sidebar_position: 4
---

# Android 4.4 (March 2023)

OsmAnd produces every day multiple Ready-To-Use builds which allows keep track of new features and participate in OsmAnd contributions (translation process).

## Join Beta
You can participate in testing OsmAnd beta build thru Google Play. 

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>

## What's new


* Improved ["Tracks" menu](#tracks-menu) in "Configure Map",
* Context menu now [displays localized names](#localized-poi-names) for POI,
* Added option to share [route by link](#route-link),
* [Map orientation](#map-orientation) added new fixed mode,
* Added ["Display position"](#display-position) menu,
* Simplified [start screen](#simplified-start-screen),
* Added ["Speed/Slope" graph](#speedslope-graph) for track analysis,
* Added ["Nautical miles/feet"](#nautical-miles-and-feet) unit of length,
* [App language](#app-language-for-android-13) selection moved to system settings on Android 13,
* [Simulate location](#redesign-simulate-location) redesign,
* [**Bugs fixs:**](#bugs-fixs)
  * Fixed [bugs with Android Auto](#android-auto),
  * Fixed issues with [displaying Vegan places](#vegan-places-pois).



### Tracks menu

"Tracks" menu has a new design and more simple UX. It's easy to choose a needed track for showing it on the map, change appearance (&#8942; more than one track) or make an import (&#8942;):

_OsmAnd menu > Configure map > Tracks_

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/tracks_menu.png').default} alt="tracks"/></td>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/tracks_menu_1.png').default} alt="tracks"/></td>
    </tr>
</table> 

### Localized POI names

Added localized POI names for [Map context menu](../user/map/map-context-menu.md#alternative-names). Click on the POI name to open the full name list.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/map/alternative_names_andr_1.png').default} alt="POI names"/></td>
    <td><img src={require('@site/static/img/map/alternative_names_andr.png').default} alt="POI names"/></td>
    </tr>
</table> 

### Route link

After route creation in OsmAnd you can generate and send a link.

_Navigation context menu > Details > Share button_

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

Added new fixed mode for [Map orientation](../user/map/interact-with-map.md#map-orientation-modes):

- _Manually rotated (fixed)_ 

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/map-orientation.png').default} alt="map orientation"/></td>
    </tr>
</table> 

### Display position

Added the new settings for [_"Display position"_](../user/map/interact-with-map.md#map-orientation--compass):

_Menu → Configure profile → [General settings](../user/personal/profiles.md#appearance)→ Display position_

Here you can choose three variants of your location on the screen map:

- _Center_: use center screen position for the cursor (["My location"](../user/map/interact-with-map.md#my-location--zoom)),
- _Bottom_: use bottom screen position for the cursor (["My location"](../user/map/interact-with-map.md#my-location--zoom)),
- _Automatic_: bottom for movement direction, center for all others.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/display_position.png').default} alt="tracks"/></td>
    </tr>
</table> 

### Simplified Start screen

Restructure the Start screen. Now there is an opportunity to open OsmAnd Cloud.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/start_screen.png').default} alt="start screen"/></td>
    </tr>
</table> 

### Speed/Slope graph

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

_App info (OsmAnd) > App languages_

### Redesign Simulate location

We redesigned ["Simulate your position"](../user/plugins/development.md#plugin-settings) by adding a new screen with settings.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2023-03-01-android-4-4/simulate_location.png').default} alt="simulate your location"/></td>
    </tr>
</table> 

### Bugs fixs

#### Android Auto

- the [issue](https://github.com/osmandapp/OsmAnd/issues/16041): movement direction map orientation is flipped and jiggles,
- the split-screen [issue](https://github.com/osmandapp/OsmAnd/issues/16456),
- fixed crash with [GPX selection](https://github.com/orgs/osmandapp/projects/19/views/4?pane=issue&itemId=18983833),
- the issue with the [Navigation info panel](https://github.com/osmandapp/OsmAnd/pull/16244),
- added support Android Auto map mode: Day, Night, Automatic.

#### Vegan places POIs

Fixed the [issue](https://github.com/osmandapp/OsmAnd/issues/15426): "Most vegan places don't show".