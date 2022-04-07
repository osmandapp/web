---
sidebar_position: 1
title:  Configure Screen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

Configure screen is a menu that allows to configure what widgets will be displayed over the map. It allows you to enable and configure Quick action, Informational & Navigational widgets and other elements.

![Configure screen menu](@site/static/img/widgets/configure_screen_menu.png)

In order to customize widgets visibility you need to access **Configure screen** menu via [Main menu](/docs/documentation/start-with/main-menu).

Most of the widgets could be configured as:
* Show – widget is visible on the map screen
* Hide – widget is hidden from the map screen
* Collapse – creates a group of "collapsible" widgets and a button to quickly expand / collapse them on the maps screen.

![Collapsible widget states](@site/static/img/widgets/collapsible_widget_states.png)

**Note**: all widgets are [profile dependent](/docs/documentation/personal/profiles), so in case you change the order, visibility or state for 1 profile, it won't be applied to other profiles. Each profile has its own predefined list of widgets based on the design of the navigation screen. It can be customized and used with or without navigation.

## Configure screen menu

### Quick action
- [Quick action](/docs/documentation/widgets/quick-action) - is a button that gives quick access to frequently used actions.

### Right panel widgets
 - [Relative or Magnetic bearing](/docs/documentation/widgets/nav-widgets#bearing) - shows relative or magnetic bearing.
 - [Destination](/docs/documentation/widgets/nav-widgets#destination) - shows current distance to the finish point.
 - [Intermediate destination](/docs/documentation/widgets/nav-widgets#intermediate-destination) - shows current distance to the first intermediate navigation point (if present).
 - [Arrival time](/docs/documentation/widgets/nav-widgets#arrival-time-or-time-to-go) - shows arrival time or time left to complete navigation i.e. reach the final destination point.
 - [Intermediate arrival time](/docs/documentation/widgets/nav-widgets#intermediate-arrival-time) - shows arrival time or the time left to reach first intermediate navigation point (if present). 
 - [Speed](/docs/documentation/widgets/info-widgets#speed) - shows your current speed detected by GPS-sensor.
 - [Speed limit](/docs/documentation/widgets/nav-widgets#speed-limit) - shows speed limit for the current following road.
 - [Altitude](/docs/documentation/widgets/info-widgets#altitude) - shows the height above sea level of current geolocation. 
 - [GPS info](/docs/documentation/widgets/info-widgets#gps-info-android) (Android) - shows a number of satellites that device detects and uses at that moment.
 - [Current time](/docs/documentation/widgets/info-widgets#current-time) - shows current time from your device.
 - [Battery level](/docs/documentation/widgets/info-widgets#battery-level) - shows battery level of your device.
 - [Radius ruler](/docs/documentation/widgets/radius-ruler) - shows distance between users location and inner point of the 'Radius-ruler' tool distance-circles on the map. 
 - [* Parking](/docs/documentation/widgets/info-widgets#-parking-widget) - shows distance from the current position to the parking place.
 - [* Trip recording](/docs/documentation/widgets/info-widgets#-trip-recording-widget) - provides quick access to start / stop track recording.
 - [* Mapillary](/docs/documentation/widgets/info-widgets#-mapillary-widget) - provides quick access to Mapillary app to add Street-Level-Imagery.
 - [* FPS debug info](/docs/documentation/widgets/info-widgets#-fps-info-android) (Android) - investigate how fast map & map elements are showed & refreshed.

### Left panel widgets
 - [Next turns](/docs/documentation/widgets/nav-widgets#next-turns) - shows info about next maneuvers and distance to it.
 - [Alert info](/docs/documentation/widgets/nav-widgets#alert-widget) - shows traffic alerts during navigation.
 - [Compass](/docs/documentation/widgets/map-buttons#compass) - indicates how the map is oriented on the device screen.

### Remaining elements
- [Street name](/docs/documentation/widgets/nav-widgets#street-name) combined with [Approach POI](/docs/documentation/widgets/nav-widgets#approach-poisfavorites) - displays street name of the current or next following road, displays information about approaching POI / favourites along the road.
- [Coordinates widget](/docs/documentation/widgets/info-widgets#coordinates-widget) -  shows the geographic coordinates of current geolocation (appears on the top bar).
- [Distance by tap](/docs/documentation/widgets/radius-ruler#distance-by-tap-tool) - gives options to measure the distance from your position to the selected point.
- [Map markers](/docs/documentation/widgets/markers) - shows a directional line from your position to the active marker locations (could be on the top bar or on the right widget panel).
- Transparent widgets - makes transparent the background of the navigation and information widgets.  
- [Lanes](/docs/documentation/widgets/nav-widgets#lanes) - shows the lanes you have to drive during a navigation with distance to a maneuver.

## Read more
  [Read more information about each widget individually](/docs/documentation/widgets).
