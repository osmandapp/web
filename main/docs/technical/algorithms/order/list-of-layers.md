---
sidebar_position: 3
---

# List of layers Android and iOS. Where are set their order

## Android
All layers in Android are instance of in the method [`createLayers` of MapLayers class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121).
Order of each layer is depend from `zOrder` property during instance and set in the method [`getBaseOrder` of OsmAndMapLayer class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95).

#### List of layers in Android, sorted from lowest to highest:
| Layer                        | Real order | Description            |
| ---------------------------- | ---------- |----------------------- |
| MapVectorLayer               | 0          | Base for vector tiles  |
| MapTileLayer                 | -5000      | Base for raster tiles  |
| DownloadedRegionsLayer       | -50000     | Show downloaded regions|
| GPXLayer                     | -90000     |                       |
| RouteLayer                   | -100000    |                       |
| PreviewRouteLineLayer        | -150000    |                       |
| POIMapLayer                  | -300000    |                       |
| FavouritesLayer              | -400000    |                       |
| MeasurementToolLayer         | -460000    |                       |
| TransportStopsLayer          | -500000    | Public transport      |
| MapTextLayer                 | -595000    |                       |
| PointLocationLayer           | -600000    | My location layer     |
| PointNavigationLayer         | -700000    | Navigation layer      |
| MapMarkersLayer              | -730000    |                       |
| ImpassableRoadsLayer         | -750000    |                       |
| RadiusRulerControlLayer      | -780000    |                       |
| DistanceRulerControlLayer    | -790000    |                       |
| ContextMenuLayer             | -800000    |                       |
| MapInfoLayer                 | -900000    |                       |
| OsmBugsLayer                 | -1000000   | OSM notes and fixme   |
| OsmEditsLayer                | -1000000   | Edit OSM plugin       |
| MapillaryVectorLayer         | -1000000   | Mapillary plugin      |
| MapControlsLayer             | -1100000   |                       |
| MapQuickActionLayer          | -1200000   |                       |


## iOS
All layers in iOS are instance of in the method [`createLayers` of OAMapLayers](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36).  
Order of each layer is set direcly by `baseOrder` property in `createLayers`.

#### List of layers in iOS sorted by order, sorted from lowest to highest:
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

#### List of layers in iOS sorted by layer index, sorted from highest to lowest:
| Layer                        | Layer index | Description          |
| ---------------------------- | ----------- |--------------------- |
| OAWeatherContourLayer	       | 30          |                      |
| OAWeatherRasterLayer	       | 25          |                      |
| OAWeatherRasterLayer	       | 20          |                      |
| OAMapillaryLayer	           | 10          |                      |
| OAOverlayMapLayer	           | 5           |                      |
| OATerrainMapLayer	           | 4           |                      |
| OAUnderlayMapLayer	       | -5          |                      |