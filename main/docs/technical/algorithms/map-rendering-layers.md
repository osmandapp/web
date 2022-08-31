---
sidebar_position: 5
---

# Map Layers rendering

OsmAnd Map is rendered by layers from bottom to top. Some layers cover full map screen, some are rendered with transperancy but the order of layers is consistent, so it's important to keep track of what and in which order is rendered.



## Order of layers

In OsmAnd using `order` property (`order` in the style and `baseOrder` in the code) for set on what level object will render.
 Is mean that a name of street is showing over the road, some icon is covering the building, shield is showing over the road.  
 Lower number of the order mean that object will show above. Therefore e.g. text with order 200 will be lower of icon with order 5.  

Also OsmAnd is using negative number of the order in main for layers. Range orders for layes can be from -1200000 to 0.
 Therefore objects from map data are lower than objects from layers. But here present small exclude for icons and road shields. 
 We decrease order for [icons](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2869) and road [shields](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2720) for show their above.  

There are are 2 main source of order for any objects: from style and from layer order/index.  
[Default OsmAnd style](https://github.com/osmandapp/OsmAnd-resources/blob/652b38e6d5d291f8932eb7946ded9ce787cff579/rendering_styles/default.render.xml#L3166) contains section `<order>` for set order for text, icons, line etc. from map data.  


**Android**. All layers in Android are instance of in the method [`createLayers` of MapLayers class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121).
Order of each layer is depend from `zOrder` property during instance and set in the method [`getBaseOrder` of OsmAndMapLayer class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95).

**iOS**. All layers in iOS are instance of in the method [`createLayers` of OAMapLayers](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36).  
Order of each layer is set direcly by `baseOrder` property in `createLayers`.

### Android
| Layer                         | Order/Range | Description            |
| ----------------------------  | ----------: |----------------------- |
| MapTileLayer (underlay)       | -50 000     | Rasnter tiles underlay |
| **MapVectorLayer**            |       0     | Base for vector tiles  |
| MapTileLayer (main layer)     |   5 000     | Base for raster tiles  |
| MapTileLayer (overlay)        |  70 000     | Raster tiles overlay   |
| DownloadedRegionsLayer        |  50 000     | Show downloaded green regions|
| TerrainLayer                  |  60 000     | Base for raster tiles  |
| GPXLayer (lines)              |  90 000     | Order for lines       |
| RouteLayer                    |  100 000    |                       |
| PreviewRouteLineLayer         |  150 000    |                       |
| POIMapLayer                   |  300 000     |                       |
| Audio Video Layer             |  350 000     |                       |
| FavouritesLayer               |  400 000     |                       |
| TransportStopsLayer           |  500 000     | Public transport      |
| MapTextLayer                  |  595 000     | POI labels / Audio Video ? |
| PointLocationLayer            |  600 000     | My location layer     |
| PointNavigationLayer          |  700 000     | Navigation layer      |
| MapMarkersLayer (lines)       |  730 000     |                       |
| MapMarkersLayer (markers)     |  730 000     |                       |
| ImpassableRoadsLayer          |  750 000     |                       |
| RadiusRulerControlLayer       |  780 000     |                       |
| DistanceRulerControlLayer (text)  |  790 000     |                       |
| DistanceRulerControlLayer (lines) |  790 000     |                       |
| ContextMenuLayer              |  800 000     |                       |
| MapInfoLayer                  |  900 000     |                       |
| OsmBugsLayer                  |  1 000 000    | OSM notes and fixme   |
| OsmEditsLayer                 |  1 000 000    | Edit OSM plugin       |
| MapillaryVectorLayer          |  1 000 000    | Mapillary points / lines|
|  **Icons**                    | -             |   |
| Icons - **VectorMapLayer**    |  100 000 + ?| Icons from Vector map = ```iconOrder``` + 100 000  |
| GPXLayer (wpt icon)           |  90 000   ? | Order for GPX         |
|  **Text / Shields**           | -             |   |
| Text - **VectorMapLayer**     |  100 000 + ?| Text from Vector map = ```textOrder``` + 100 000  |
| GPXLayer (wpt text)           |  90 000   ? | Order for lines       |
|  **Controls**                 | -             | Rendered over OpenGL  |
| MeasurementToolLayer          |  460 000      |                       |
| MapMarkersLayer (text on line)|  730  000     |                       |
| MapControlsLayer              |  1 100 000    | Rendered over OpenGL  |
| MapQuickActionLayer           |  1 200 000    | Rendered over OpenGL  |


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