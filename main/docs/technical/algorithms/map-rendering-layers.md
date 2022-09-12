---
sidebar_position: 5
---

# Map Layers rendering

OsmAnd Map is rendered by layers from bottom to top. Some layers cover full map screen, some are rendered with transperancy but the order of layers is consistent, so it's important to keep track of what and in which order is rendered.


## Order of layers

**Android**. Most layers in Android are instance of in the method [`createLayers` of MapLayers class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121).
Order of each layer is depend from `zOrder` property during instance and set in the method [`getBaseOrder` of OsmAndMapLayer class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95).
Other layers are instance in the plugins.

**iOS**. Most layers in iOS are instance of in the method [`createLayers` of OAMapLayers](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36).  
Order of each layer is set direcly by `baseOrder` property in `createLayers`.
Other layers are instance in the plugins.


## Order of icons and text

Order of vector map icons (iconOrder) and text (textorder) are mainly set in the style, for example [Default OsmAnd style](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L5154).  
Order of layers icons and text depends from order of layer and can be different than layer order in range 0 - 1000.  
Additionally we increase order for [icons](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2869) and road [shields](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2720) for show their above.

### Android. Order by layers
| Layer                             | Order/Range | Description            |
| --------------------------------- | ----------: |----------------------- |
| MapTileLayer (underlay)           | -50 000     | Rasnter tiles underlay |
| **MapVectorLayer**                |       0     | Base for vector tiles  |
| MapTileLayer (main layer)         |   5 000     | Base for raster tiles  |
| MapTileLayer (overlay)            |  70 000     | Raster tiles overlay   |
| DownloadedRegionsLayer            |  50 000     | Show downloaded green regions|
| TerrainLayer                      |  60 000     | Base for raster tiles  |
| GPXLayer (lines)                  |  90 000     | Order for track lines  |
| RouteLayer                        |  100 000    | Navigation route       |
| PreviewRouteLineLayer             |  150 000    | Not used OpenGL        |
| OsmBugsLayer                      |  200 000    | OSM notes and fixme    |
| POIMapLayer                       |  300 000    | POI overlay            |
| Audio Video Layer                 |  350 000    |                        |
| OsmEditsLayer                     |  350 000    | Edit OSM plugin        |
| FavouritesLayer                   |  400 000    | Favorites overlay      |
| TransportStopsLayer               |  500 000    | Public transport       |
| MapTextLayer                      |  595 000    | Not used OpenGL        |
| PointLocationLayer                |  600 000    | My location layer      |
| PointNavigationLayer              |  700 000    | Navigation points      |
| MapMarkersLayer (lines)           |  729 999    | Each line -1           |
| ImpassableRoadsLayer              |  750 000    | Avoid roads            |
| RadiusRulerControlLayer           |  780 000    | Not used OpenGL        |
| DistanceRulerControlLayer (lines) |  790 000    | Not used OpenGL        |
| ContextMenuLayer                  |  800 000    |                        |
| MapInfoLayer                      |  900 000    |                        |
| MapillaryVectorLayer              |  1 000 000  | Mapillary points / lines|

### Android. Order by icons
| Icon                          | Order/Range   | Description             |
| ----------------------------- | ------------- | ----------------------- |
| GPXLayer (start,finish)       |  90 101       |                         |
| GPXLayer (wpt icon)           |  90 300       |                         |
| GPXLayer (chart icon)         |  90 500       |                         |
| GPXLayer (selected icon)      |  90 600       |                         |
| OSM notes                     |  200 000      | OSM notes and fixme     |
| POI                           |  300 000      | POI overlay icons       |
| Audio Video notes             |  350 000      |                         |
| Favourites                    |  400 000      | Favorites overlay icons |
| Public transport              |  500 001      | Public transport icons  |
| My location                   |  600 000      | My location             |
| Navigation (start,via,end)    |  700 000      | Navigation points       |
| Navigation selected point     |  700 600      | Navigation points       |
| MapMarkersLayer (markers)     |  730 000      |                         |
| Avoid roads                   |  750 000      | ImpassableRoadsLayer    |
| Icons - **VectorMapLayer**    |  1 000 000 +  | Vector map icons 1 000 000 + iconOrder from style |

### Android. Order by text and shields
| Text / shield                 | Order/Range   | Description             |
| ----------------------------- | ------------- | ----------------------- |
| Text - **VectorMapLayer**     |  1 - 255      | Vector map texts, textOrder from style, 100 by default |
| GPXLayer (wpt text)           |  90 300       | Order waypoints text in GPX |
| POIMapLayer (name)            |  300 000      | POI overlay name        |
| MapMarkersLayer (text on line)|  730  000     |                         |
| DistanceRulerControlLayer (text) |   790 000  | Not used OpenGL         |
| Fixme text                    | 1 000 000    | OSM fixme text          |
| Shields - **VectorMapLayer**  |  1 000 000 +  | Shields over roads, textOrder + 1 000 000 |

### Android. Controls, rendered over OpenGL
| Control                       | Order/Range   | Description             |
| ----------------------------- | ------------- | ----------------------- |
| MeasurementToolLayer          |  460 000      |                         |
| MapControlsLayer              |  1 100 000    |                         |
| MapQuickActionLayer           |  1 200 000    | One tap on map          |


### iOS

| Layer                        | Real order | Description           |
| ---------------------------- | ---------- |---------------------- |
| OADownloadedRegionsLayer     | -10000     |                       |
| OAPOILayer                   | -90000     |                       |
| OAGPXLayer                   | -100000    |                       |
| OAGPXRecLayer                | -110000    |                       |
| OAPreviewRouteLineLayer      | -120000    |                       |
| OATransportStopsLayer        | -120000    | Public transport      |
| OAOsmEditsLayer              | -120000    | Edit OSM plugin       |
| OAOsmBugsLayer               | -120000    | OSM notes and fixme   |
| OARouteLayer                 | -150000    |                       |
| OAFavoritesLayer             | -160000    |                       |
| OAMeasurementToolLayer       | -160000    |                       |
| OARulerByTapControlLayer     | -170000    |                       |
| OAMyPositionLayer            | -206000    | My location layer     |
| OAImpassableRoadsLayer       | -206000    |                       |
| OADestinationsLayer          | -207000    | Navigation layer      |
| OARoutePointsLayer           | -209000    | Navigation layer      |
| OAContextMenuLayer           | -210000    |                       |

| Layer                        | Layer index | Description          |
| ---------------------------- | ----------- |--------------------- |
| OAWeatherContourLayer	       | 30          |                      |
| OAWeatherRasterLayer	       | 25          |                      |
| OAWeatherRasterLayer	       | 20          |                      |
| OAMapillaryLayer	           | 10          |                      |
| OAOverlayMapLayer	           | 5           |                      |
| OATerrainMapLayer	           | 4           |                      |
| OAUnderlayMapLayer	       | -5          |                      |