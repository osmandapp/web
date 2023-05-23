---
sidebar_position: 5
---

# Map Layers rendering

OsmAnd Map is rendered by layers from bottom to top. Some layers cover full map screen, some are rendered with transperancy but the order of layers is consistent, so it's important to keep track of what and in which order is rendered.


## Order of layers

In the OsmAnd present three types of layers: raster, symbols, controls. First in OpenGL are [rendering raster layers](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162), after are [rendering symbols layers](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Contrlos layers are rendering independed from OpenGL in UI of Android or iOS devices over the map.

**Android**. Most layers in Android are instance of in the method [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) of MapLayers class.
Order of each layer is depend from `zOrder` property during instance and set in the method [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95)of OsmAndMapLayer class.
Other layers are instance in the plugins.

**iOS**. Most layers in iOS are instance of in the method [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) of OAMapLayers.  
Order of each layer is set direcly by `baseOrder` property in `createLayers`.
Other layers are instance in the plugins.

## Android. Order tables

### Android. Raster layers
| Layer                             | Order/Range      | Type | Description           |
| --------------------------------- | ---------------: |------|-----------------------|
| MapTileLayer (underlay)           | -50 000          | Map  | Raster tiles underlay |
| MapTileLayer (main layer)         |   5 000          | Map  | Map raster tiles |
| CountourLinesLayer                |   6 000          | Map  | Doesn't have own layer class. Managed by main MapTileLayer |
| TerrainLayer                      |  60 000          | Map  | [Hillshades and slopes](/docs/user/plugins/contour-lines) |
| MapTileLayer (overlay)            |  70 000          | Map  | Raster tiles overlay  |

### Android. Symbols layers
| Layer / symbols                   | Order/Range | Type     | Description             |
| --------------------------------- | ----------: |----------|-------------------------|
| DownloadedRegionsLayer            |  -1 100 000 | Polygons | Show downloaded regions |
| Icons (MapVectorLayer)            |  -1 000 000 | Points   | Vector map, iconOrder in style with [adding 1000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (lines)                  |  -500 000   | Lines    | Track lines             |
| RouteLayer (chart highlight point)|  -197 900   | Point    | Navigation route analysis on map |
| RouteLayer (chart x-axis points)  |  -198 000   | Points   | Navigation route analysis on map |
| RouteLayer (turn arrows)          |  -199 000   | Lines    | Navigation route        |
| RouteLayer                        |  -200 000   | Lines    | Navigation route        |
| Text (MapVectorLayer)             |  1 - 255    | Text     | Vector map, textOrder in [style](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), 100 by default |
| Shileds (MapVectorLayer)          |  1 - 255    | Shields  | Vector map, textOrder in style for shields, 100 by default |
| GPX track start, finish           |  90 101     | Points   | GPXLayer                |
| GPX track waypoint                |  90 300     | Points   | GPXLayer                |
| GPXLayer (wpt name)               |  90 300     | Text     | Waypoints name          |
| GPX track chart icon              |  90 500     | Points   | GPXLayer                |
| GPX track selected icon           |  90 600     | Points   | GPXLayer                |
| OSM notes (OsmBugsLayer)          |  200 000    | Points   | OSM notes               |
| Fixme icon (OsmBugsLayer)         |  200 000    | Points   | OSM fixme icons         |
| Fixme text (OsmBugsLayer)         |  200 000    | Text     | OSM fixme text          |
| POIMapLayer (icon)                |  300 000    | Points   | POI overlay             |
| POIMapLayer (name)                |  300 000    | Text     | POI overlay name        |
| AudioNotesLayer                   |  350 000    | Points   | Audio/video notes plugin|
| OsmEditsLayer                     |  350 000    | Points   | OSM edit plugin         |
| FavouritesLayer                   |  400 000    | Points   | Favorites overlay       |
| TransportStopsLayer               |  500 000    | Lines    | Public transport lines  |
| TransportStopsLayer               |  500 001    | Points   | Public transport stops  |
| MapTextLayer                      |  595 000    | Text     | Text for different layers. Canvas rendering |
| PointLocationLayer                |  600 000    | Points   | My location             |
| PointNavigationLayer              |  700 000    | Points   | Start / finish points in navigation |
| PointNavigationLayer              |  700 600    | Points   | Selected point in navigation        |
| MapMarkersLayer (line)            |  729 999    | Lines    | Dashed line to map markers          |
| MapMarkersLayer (text)            |  730  000   | Text     | Text on line. Canvas rendering      |
| MapMarkersLayer (markers)         |  730 000    | Points   | Map markers             |
| ImpassableRoadsLayer              |  750 000    | Points   | Avoid roads             |
| ContextMenuLayer                  |  800 000    | Points   | Pin of context menu     |
| MapillaryVectorLayer (lines)      |  1 000 000  | Lines    | Mapillary lines between points      |
| MapillaryVectorLayer (points)     |  1 000 000  | Points   | Mapillary points        |



### Android. Controls layers
| Control layer                 | Order/Range   | Description           |
| ----------------------------- | ------------: | --------------------- |
| PreviewRouteLineLayer         |  150 000      | Preview route options |
| MeasurementToolLayer          |  460 000      |                       |
| RadiusRulerControlLayer       |  780 000      | Radius ruller         |
| DistanceRulerControlLayer     |  790 000      | Distance ruller       |
| MapInfoLayer                  |  900 000      | Widgets               |
| MapControlsLayer              |  1 100 000    |                       |
| MapQuickActionLayer           |  1 200 000    |                       |


## iOS. Order tables

### iOS. Raster layers
| Layer                        | Layer index | Description           |
| ---------------------------- | ----------: |---------------------- |
| OAUnderlayMapLayer	       | -5          | Raster tiles underlay |
| Raster layer (MapRasterLayerProvider) | 0  | Map raster tiles      |
| OATerrainMapLayer	           | 4           | [Contour lines, hillshades and slopes](/docs/user/plugins/contour-lines) |
| OAOverlayMapLayer	           | 5           | Raster tiles overlay  |
| OAMapillaryLayer	           | 10          | Mapillary layer       |
| OAWeatherRasterLayer	       | 20          | Weather               |
| OAWeatherRasterLayer	       | 25          | Weather               |
| OAWeatherContourLayer	       | 30          | Weather               |

### iOS. Symbols layers
| Layer / symbols              | Order/Range | Type     | Description                   |
| ---------------------------- | ----------: |----------|------------------------------ |
| Icons                        |  -1 000 000 | Points   | Vector map, iconOrder in style with [adding 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Text                         |  1 - 255    | Text     | Vector map, textOrder in style, 100 by default |
| Shileds                      |  1 - 255    | Shields  | Vector map, textOrder in style for shields, 100 by default |
| OADownloadedRegionsLayer     | 10 000      | Polygons | Show downloaded green regions |
| POI icon (OAPOILayer)        | 90 000      | Points   | POI overlay                   |
| POI name (OAPOILayer)        | 90 000      | Text     | POI overlay name              |
| GPX track lines (OAGPXLayer) | 100 000     | Lines    | Track lines                   |
| GPX waipoint name            | 100 000     | Text     | GPX waypoints name            |
| GPX waypoint icon            | 100 003     | Points   | GPX waypoints                 |
| GPX track start, finish      | 120 000     | Points   | OAGPXLayer                    |
| OSM notes (OAOsmBugsLayer)   | 120 000     | Text     | OSM notes                     |
| Fixme text (OAOsmBugsLayer)  | 120 000     | Text     | OSM fixme text                |
| Fixme icon (OAOsmBugsLayer)  | 120 000     | Points   | OSM fixme icon                |
| OAOsmEditsLayer              | 120 000     | Points   | Edit OSM plugin               |
| OAPreviewRouteLineLayer      | 120 000     | Lines    | Preview route options         |
| OATransportStopsLayer (lines) | 120 000    | Lines    | Public transport lines        |
| OATransportStopsLayer (icons) | 121 000    | Points   | Public transport stops        |
| OARouteLayer                 | 150 000     | Lines    | Navigation route              |
| OAFavoritesLayer             | 160 000     | Points   | Favorites overlay             |
| Avoid roads (OAImpassableRoadsLayer) | 205 998 | Points   | Avoid roads               |
| My location (OAMyPositionLayer)      | 206 001 | Points   | My location               |
| Map markers (OADestinationsLayer)    | 207 000 | Points   | Map markers               |
| Map markers (text on line)   | 207 000     | Text     | Text on line to map markers   |
| Navigation (points)          | 207 015     | Points   | OARouteLayer                  |
| Navigation (my location)     | 207 025     | Points   | OARouteLayer                  |
| Navigation (arrows on route) | 208 000     | Points   | OARouteLayer                  |
| OARoutePointsLayer           | 209 000     | Points   | Navigation points             |


### iOS. Controls layers
| Control layer                 | Order/Range   | Description           |
| ----------------------------- | ------------: | --------------------- |
| OAGPXRecLayer                 | 110 000       | Editing GPX           |
| OAMeasurementToolLayer        | 160 000       |                       |
| OARulerByTapControlLayer      | 170 000       | Distance ruler        |
| OAContextMenuLayer            | 210 000       |                       |
