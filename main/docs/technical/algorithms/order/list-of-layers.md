---
sidebar_position: 3
---

# List of layers Android and iOS. Where are set their order

## Android
All layers in Android are instance of in the method [`createLayers` of MapLayers class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121).   
Order of each layer is depend from `zOrder` property during instance and set in the method [`getBaseOrder` of OsmAndMapLayer class](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95).  

#### List of layers in Android, order from lowest to highest:  
| Layer                        | Real order | Description           |
| ---------------------------- | ---------- |---------------------- |
| MapVectorLayer               | 0          | Base for vector tiles |
| MapTileLayer                 | -5000      | Base for raster tiles |
| DownloadedRegionsLayer       | -50000     |                       |
| GPXLayer                     | -90000     |                       |
| RouteLayer                   | -100000    |                       |
| PreviewRouteLineLayer        | -150000    |                       |
| POIMapLayer                  | -300000    |                       |
| FavouritesLayer              | -400000    |                       |
| MeasurementToolLayer         | -460000    |                       |
| TransportStopsLayer          | -500000    |                       |
| MapTextLayer                 | -595000    |                       |
| PointLocationLayer           | -600000    | My location layer     |
| PointNavigationLayer         | -700000    |                       |
| MapMarkersLayer              | -730000    |                       |
| ImpassableRoadsLayer         | -750000    |                       |
| RadiusRulerControlLayer      | -780000    |                       |
| DistanceRulerControlLayer    | -790000    |                       |
| ContextMenuLayer             | -800000    |                       |
| MapInfoLayer                 | -900000    |                       |
| MapControlsLayer             | -1100000   |                       |
| MapQuickActionLayer          | -1200000   |                       |


## iOS
All layers in iOS are instance of in the method [`createLayers` of OAMapLayers](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36).  
Order of each layer is set direcly by `baseOrder` property in `createLayers`.  

#### List of layers in Android, order from lowest to highest:
| Layer                        | Real order | Description           |
| ---------------------------- | ---------- |---------------------- |
| MapVectorLayer               | 0          | Base for vector tiles |
| MapTileLayer                 | -5000      | Base for raster tiles |
| DownloadedRegionsLayer       | -50000     |                       |
| GPXLayer                     | -90000     |                       |
| RouteLayer                   | -100000    |                       |
| PreviewRouteLineLayer        | -150000    |                       |
| OAPOILayer                   | -90000     |                       |
| OAFavoritesLayer             | -160000    |                       |
| MeasurementToolLayer         | -460000    |                       |
| TransportStopsLayer          | -500000    |                       |
| MapTextLayer                 | -595000    |                       |
| PointLocationLayer           | -600000    |                       |
| PointNavigationLayer         | -700000    |                       |
| MapMarkersLayer              | -730000    |                       |
| ImpassableRoadsLayer         | -750000    |                       |
| RadiusRulerControlLayer      | -780000    |                       |
| DistanceRulerControlLayer    | -790000    |                       |
| OAContextMenuLayer           | -210000    |                       |
| MapInfoLayer                 | -900000    |                       |
| MapControlsLayer             | -1100000   |                       |
| MapQuickActionLayer          | -1200000   |                       |
