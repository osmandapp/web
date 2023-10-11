---
sidebar_position: 5
---

# iOS 4.5 (September 2023)

## Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after a Team Sprint demo). They do not contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>


## What's new

* [Free account for favorites Backup – OsmAnd Cloud](#osmand-start)
* [New Relief format](#new-relief-format)
  * Contour lines plugin renamed to Topography
  * Added support for the new Terrain map format
  * Added 3D Relief 
  * Added separate button to switch 2D/3D Mode
* Difficulty classification - Configure Map
* Redesigned Configure Screen
* Added OpenStreetMap authorization through OAuth 

### OsmAnd Start

For OsmAnd 4.5 was added OsmAnd Start plan. A user should register an email for the [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud) and then activate _OsmAnd Start_.

*OsmAnd Menu → Settings → OsmAnd Cloud*

After that, you can [backup](https://osmand.net/docs/user/personal/osmand-cloud#select-data-to-back-up) your [favorites](https://osmand.net/docs/user/personal/favorites), [OSM Edits and Notes](https://osmand.net/docs/user/plugins/osm-editing#create--modify-osm-note), and [OsmAnd settings](https://osmand.net/docs/user/personal/profiles) for free. 

![OsmAnd Start](@site/blog/2023-09-25-ios-4-5/img/start.png)

Read more about OsmAnd Start in [our article](https://osmand.net/blog/start) for OsmAnd Start in OsmAnd for Android.


### New Relief format

We have added _Terrain map_ for countries in [Download maps](https://osmand.net/docs/user/start-with/download-maps) menu. This data type can be used to generate [Slopes, Hillshades (paid)](https://osmand.net/docs/user/purchases/android#free-and-paid-features), and 3D maps ([OsmAnd Pro](https://osmand.net/docs/user/purchases/android#pro-features)).

_OsmAnd menu → Download maps_

Our updates:
- [Slope](https://osmand.net/docs/user/plugins/contour-lines#slope-map) and [Hillshades](https://osmand.net/docs/user/plugins/contour-lines#hillshade-map) can be generated from _Terrain map_ data

- Redesigned [_Terrain menu_](https://osmand.net/docs/user/map/configure-map-menu): _OsmAnd menu → Configure map → Terrain_

- Added ["3D Relief"](https://osmand.net/docs/user/plugins/contour-lines#3d-relief) button ([OsmAnd Pro](https://osmand.net/docs/user/purchases/android#pro-features)) for Terrain menu. It allows you to activate 3D view for relief (offline): _OsmAnd menu → Configure map → Terrain → 3D Relief_

- The new "3D/2D Mode" button for the map screen was added. Now you can make a map tilt not only with [two fingers](https://osmand.net/docs/user/map/interact-with-map#gestures). "3D/2D Mode" button acts differently with menus and on map screens if _3D Mode_ in Configure Screen is set to Visible in 3D Mode.
_OsmAnd Menu → Configure Screen → Buttons → 3D Mode_:
  - Hidden
  - Visible
  - VIsible in 3D mode

  ** **map tilt angle by button is the last tilt angle by two-finger gestures**

Read more about Terrain maps in our [Blog article](https://osmand.net/blog/terrain).

| Slope | 3D relief|
|------|------|
|![Slope](@site/blog/2023-09-25-ios-4-5/img/slope.png)|![3D](@site/blog/2023-09-25-ios-4-5/img/3d_ref.png)|

### Updates for Configure Map 

Added [CAI (Club Alpino Italiano)](https://www.cai.it/) scale for routes [difficulty classification](https://montanarilife.com/2016/07/03/hiking-trail-rating-systems-italy/):

_OsmAnd Menu → Configure map → Routes → Difficulty classification_

![Class](@site/blog/2023-09-25-ios-4-5/img/class.png)

### New Configure Screen

![Configure Screen](@site/blog/2023-09-25-ios-4-5/img/screen.png)

### OSM authorization through OAuth

Read more about Login settings [here](https://osmand.net/docs/user/plugins/osm-editing#settings).