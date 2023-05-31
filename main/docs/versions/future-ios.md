---
sidebar_position: 5
---

# iOS 4.4.5 (June 2023)

 Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after the team sprint demo). They don't contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>


**What's new**

* Added widget ["Elevation: map center"](#elevation-map-center).
* Added widgets ["Track recording"](#new-track-recording-widgets).
* Added new ["Train" profile](#train-profile).
* [External keyboard](#external-keyboard-updates): added support for new keys.
* Added option [to disable announcing for deviation](#disable-announcing) from the route.
* [Added search](#search-updates) for Favorites, Tracks, and OSM Edits.
* [CarPlay](#carplay-updates): history includes points that were used in navigation.
* [Emoji](#emoji-for-names) can now be used as favorites or waypoint name.
* [Track appearance](#custom-color-for-tracks): added ability to set any custom color.
* **[Bugs fixs](#bugs-fixs):**
  * Fixed issues with the import of custom routing and rendering files.
  * Fixed transition between offline Wikipedia articles.

:::info
The previous release notes for OsmAnd 4.4 you can read [here](https://osmand.net/blog/osmand-ios-4-4-released).
:::

### Elevation: map center

With [Elevation Widget](https://osmand.net/docs/user/widgets/info-widgets#-elevation-map-center) you can find out the elevation above sea level of the current map center. 

You need to subscribe [OsmAnd Pro](https://osmand.net/docs/user/purchases) and download [Heightmaps](https://osmand.net/blog/Elevation#3d-heightmap) of the desired area.

Put on _"Elevation: map center widget"_ on the screen: _Menu → Configure screen →  Right panel → Elevation: map center_

![Elevation - Map center](@site/blog/2023-05-25-ios-4-45/elevation.png)


### New Track recording widgets

Added new [trip recording widgets](https://osmand.net/docs/user/plugins/trip-recording#widgets) to _Track recording - Distance_: 

_Track recording - Duration, Uphill, Downhill_

_Menu → Configure screen → Right panel → Track recording_

![Track recording widgets](@site/blog/2023-05-25-ios-4-45/track-recording-widgets.png) ![Track recording widgets](@site/blog/2023-05-25-ios-4-45/track-recording-widgets_1.png)



### Train profile

Added the new [base Train profile](https://osmand.net/docs/user/personal/profiles). Enable it by: 

_Menu → Settings → App Profiles (Train) → Enable_

After than you can make routing by using train roads.

![Train profile](@site/blog/2023-05-25-ios-4-45/train.png)

### External keyboard updates

We added more buttons for [External keyboards](https://osmand.net/docs/user/map/interact-with-map#external-input-device-buttons):

_Menu → Settings → App Profile → General settings → External input devices → Generic Keyboard_.
-  Zoom in, bind to two keys, `+` and `=`. _(- make '=' equals '+')_
-  Bind `Esc` to back _(to close **Context menu** and **Modal views**)_
-  Bind `N` to open **Navigation** view 
-  Bind `S` to open **Search** view
-  Bind `P` to switch to the next app profile. Show toast like message _**App profile: Name**_. 
-  Bind `O` to switch to the previous app profile.

### Disable announcing

Added [option to disable announcing](https://osmand.net/docs/user/navigation/guidance/voice-navigation/) for deviation from the route:

_OsmAnd Menu → Settings → App profile → Navigation settings → Vioce prompts → Other (Announce deviation from the route)_

### Search updates

Added the search line for _My Places menu_: Favorites, Tracks, OSM Edits

Added allowing to use Emoji in user points name.

![Search for My Places](@site/blog/2023-05-25-ios-4-45/search.png)

### CarPlay updates

Added the [option for CarPlay](https://osmand.net/docs/user/navigation/car-play#history): history includes points that were used in navigation.

### Emoji for names

Added allowing to use Emoji in user points name.

![Emoji](@site/blog/2023-05-25-ios-4-45/emoji.png)


### Custom color for tracks

Added extended palette for coloring [GPX tracks](https://osmand.net/docs/user/map/track-context-menu), [Favorites](https://osmand.net/docs/user/personal/favorites) and [Waypoints](https://osmand.net/docs/user/personal/tracks#add-waypoint).

![Colors GPX](@site/blog/2023-05-25-ios-4-45/colors.png) ![Colors GPX](@site/blog/2023-05-25-ios-4-45/colors_1.png)


### Bugs fixs

  * Fixed issues with the import of custom routing and rendering files.
  * Fixed transition between offline Wikipedia articles.