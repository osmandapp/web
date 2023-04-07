---
sidebar_position: 5
---

# iOS 4.4 (March 2023)

 Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after the team sprint demo). They don't contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>


**What's new**

- [iOS 4.4 (March 2023)](#ios-44-march-2023)
    - [Minimum iOS version](#minimum-ios-version)
    - [Wikipedia updates](#wikipedia-updates)
    - [Search for Favorites](#search-for-favorites)
    - [CarPlay updates](#carplay-updates)
    - [Hiking routes](#hiking-routes)
    - [Update OpenStreetMap Plugin](#update-openstreetmap-plugin)
    - [Improved privacy](#improved-privacy)
    - [Map orientation update](#map-orientation-update)
    - [Map ruler update](#map-ruler-update)
    - [Widgets updates](#widgets-updates)
    - [More](#more)
      - [Dynamic type fot text](#dynamic-type-fot-text)
      - [Speed camera alerts](#speed-camera-alerts)
      - [Voice prompts](#voice-prompts)
      - [UI improvements](#ui-improvements)
      - [Accessibility](#accessibility)
      - [New Profile](#new-profile)
      - [Tracks](#tracks)
      - [Moped profile](#moped-profile)
      - [External keyboards](#external-keyboards)
      - [OsmAnd Cloud updates](#osmand-cloud-updates)


### Minimum iOS version

Minimum iOS version is increased to 15.0. Please, upgrade your iOS to 15.0 version before OsmAnd installation.

### Wikipedia updates

 - The [Plugin Wikipedia](../user/plugins/wikipedia.md) settings is profile dependent:

  _Menu → Settings → App Profiles → Plugins → Wikipedia_

  Here you can choose languages in which Wikipedia articles will appear on the map. Choose download or not images and set cache size for images.

- Added Wikipedia article images for the Context menu.
  
 <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/wiki_ios.png').default} alt="Wiki"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/wiki_ios_1.png').default} alt="Wiki"/></td>
    </tr>
 </table> 
 
- Added Download images menu and Change language menu.

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/wiki_ios_2.png').default} alt="Wiki"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/wiki_ios_3.png').default} alt="Wiki"/></td>
    </tr>
 </table> 

### Search for Favorites

Added the search bar for [Favorites menu](../user/personal/favorites.md): _Menu → My Places → Favorites → Pull down_

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/favorites_search.png').default} alt="Favorites"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/favorites_search_1.png').default} alt="Favorites"/></td>
    </tr>
 </table> 


### CarPlay updates

- added search history and the recent route in [the menu](../user/navigation/car-play.md):

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/car_play.png').default} alt="CarPlay"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/car_play_1.png').default} alt="CarPlay"/></td>
    </tr>
 </table> 

- reorganized tracks and favorites list (items visible in the list - 24 items by order newest):

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/car_play_2.png').default} alt="CarPlay"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/car_play_3.png').default} alt="CarPlay"/></td>
    </tr>
 </table> 

- device display with navigation info:

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/car_play_4.png').default} alt="CarPlay"/></td>
    </tr>
 </table> 


- showing the map on CarPlay Dashboard.


### Hiking routes

Added ability to [select routes on the map](../user/map/vector-maps.md#routes) for viewing additional information or starting navigation by the chosen route. Just tap on hiking routes on the map to open the Track Context menu:

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/hiking.png').default} alt="Hiking"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/hiking_1.png').default} alt="Hiking"/></td>
    </tr>
  </table> 

Available to start [navigation by a track](../user/navigation/setup/gpx-navigation.md) or download it.

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/hiking_2.png').default} alt="Hiking"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/hiking_3.png').default} alt="Hiking"/></td>
    </tr>
  </table> 


### Update OpenStreetMap Plugin

Added ability to upload GPS tracks to [OpenStreetMap project](https://www.openstreetmap.org/traces):

Track Context menu → Actions → [Upload to OpenStreetMap](../user/map/track-context-menu.md#options)

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/openstreetmap.png').default} alt="OSM"/></td>
    </tr>
  </table> 

### Improved privacy

Added options to [disable history](../user/personal/global-settings.md#history) logging:

_Menu → Settings → OsmAnd settings → History_


  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/history.png').default} alt="History"/></td>
    </tr>
  </table> 


### Map orientation update

Added [manually rotated mode](../user/map/interact-with-map.md#map-orientation-modes):

_Menu → Settings → App Profile → General settings → Map orientation → Manually rotated (fixed)_

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/map_orient.png').default} alt="Map orientation"/></td>
    </tr>
  </table> 


### Map ruler update

Improved visibility of [the map ruler](../user/widgets/radius-ruler.md#ruler):

 - Decrease top/bottom padding for text label.
 - Added Stroke for the ruler.

  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/map_ruler.png').default} alt="Map Ruler"/></td>
    </tr>
  </table> 


### Widgets updates

Added [_Coordinates: map center_](../user/widgets/info-widgets.md#coordinates-widget) widget, [_Developer widgets_](../user/widgets/info-widgets.md#-developer-widgets), and [_Sunset and sunrise_](../user/widgets/info-widgets.md#sunset-and-sunrise-widgets) widgets:

_Menu → Configure screen_


  <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/widget_cc.png').default} alt="Coordinate widgets"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/widget_d.png').default} alt="Developer widgets"/></td>
    <td><img src={require('@site/blog/2023-04-05-ios-4-4/widget_ss.png').default} alt="sunset and sunrise widgets"/></td>
    </tr>
  </table> 


### More

#### Dynamic type fot text

Added "Dynamic type" support, text size in OsmAnd will change accordingly to text size in iOS.

#### Speed camera alerts

Added legal warning about using [speed camera alerts](../user/navigation/guidance/voice-navigation.md#speed-cameras).

#### Voice prompts

Added [support for new languages](../user/navigation/guidance/voice-navigation.md): Catalan, Ukrainian, Bulgarian, Indonesian, Slovenian.

#### UI improvements

UI improvements for RTL languages.

#### Accessibility

Added [content labelling](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html) for map buttons.

#### New Profile

Added the ["Moped"](../user/navigation/routing/moped-routing.md) profile.

#### Tracks

- Tracks start to [be visible on the map](https://github.com/osmandapp/OsmAnd-Issues/issues/1167) from 200 km zoom, even if they more then 3000 km long.
- [Currently recorded track](https://github.com/osmandapp/OsmAnd-Issues/issues/1601) appear in the menu after recording stops.
- Import of [Garmin GPX Tracks](https://github.com/osmandapp/OsmAnd-iOS/issues/2640): Track Extensions are attributed to the wrong Track.

#### Moped profile

Added new Moped profile.

#### External keyboards

Improved support of external keyboards, added support for basic actions.
#### OsmAnd Cloud updates

OsmAnd Cloud bug fixes and UI improvements.


