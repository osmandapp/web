---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Map Layers Rendering {#map-layers-rendering}

The OsmAnd map is rendered by layers from bottom to top. Some layers cover the entire map screen, while others are rendered with transparency. The order of the layers is always the same, so it is important to keep track of what is displayed and in which order.

## Order of Layers {#order-of-layers}

OsmAnd uses three types of layers: raster, symbols, and controls. First, [raster layers are rendered](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) in OpenGL, followed by [symbol layers](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Control layers are rendered independently from OpenGL in the UI of Android or iOS devices, on top of the map.

**Android:**  
Most layers on Android are instantiated in the [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) method of the `MapLayers` class.

The order of each layer depends on its `zOrder` property during instantiation and is set in the [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) method of the `OsmAndMapLayer` class.  
Other layers may be instantiated in plugins.

**iOS:**  
Most layers on iOS are instantiated in the [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) method of `OAMapLayers`.

The order of each layer is set directly by the `baseOrder` property in `createLayers`.  
Other layers may be instantiated in plugins.


## Android Order Tables {#android-order-tables}

### Android. Raster layers {#android-raster-layers}

| Layer                             | Order/Range    | Type | Description                           |
| --------------------------------- | -------------: | ---- | ------------------------------------- |
| MapTileLayer (underlay)           | -50 000        | Map  | Raster tiles underlay                 |
| MapTileLayer (main layer)         | 5 000          | Map  | Map raster tiles                      |
| ContourLinesLayer                 | 6 000          | Map  | Doesn't have its own layer class; managed by main MapTileLayer |
| TerrainLayer                      | 60 000         | Map  | [Hillshade and slope](/docs/user/plugins/topography)           |
| MapTileLayer (overlay)            | 70 000         | Map  | Raster tiles overlay                  |

### Android. Symbols layers {#android-symbols-layers}

| Layer / symbols                   | Order/Range  | Type     | Description                                                        |
| --------------------------------- | -----------: | -------- | ------------------------------------------------------------------ |
| DownloadedRegionsLayer            | -1 100 000   | Polygons | Shows downloaded regions          |
| Icons (MapVectorLayer)            | -1 000 000   | Points   | Vector map, iconOrder in style with [adding 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (lines)                  | -500 000     | Lines    | Track lines             |
| RouteLayer (chart highlight point)| -197 900     | Point    | Navigation route analysis on map  |
| RouteLayer (chart x-axis points)  | -198 000     | Points   | Navigation route analysis on map  |
| RouteLayer (turn arrows)          | -199 000     | Lines    | Navigation route                  |
| RouteLayer                        | -200 000     | Lines    | Navigation route                  |
| Text (MapVectorLayer)             | 1 - 255      | Text     | Vector map, textOrder in [style](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), 100 by default                 |
| Shields (MapVectorLayer)          | 1 - 255       | Shields  | Vector map, textOrder in style for shields, 100 by default |
| GPX track start, finish           | 90 101       | Points   | GPXLayer                          |
| GPX track waypoint                | 90 300       | Points   | GPXLayer                          |
| GPXLayer (wpt name)               | 90 300       | Text     | Waypoints name                    |
| GPX track chart icon              | 90 500       | Points   | GPXLayer                          |
| GPX track selected icon           | 90 600       | Points   | GPXLayer                          |
| OSM notes (OsmBugsLayer)          | 200 000      | Points   | OSM notes                         |
| Fixme icon (OsmBugsLayer)         | 200 000      | Points   | OSM fixme icons                   |
| Fixme text (OsmBugsLayer)         | 200 000      | Text     | OSM fixme text                    |
| POIMapLayer (icon)                | 300 000      | Points   | POI overlay                       |
| POIMapLayer (name)                | 300 000      | Text     | POI overlay name                  |
| AudioNotesLayer                   | 350 000      | Points   | Audio/video notes plugin          |
| OsmEditsLayer                     | 350 000      | Points   | OSM edit plugin                   |
| FavoritesLayer                    | 400 000      | Points   | Favorites overlay                 |
| TransportStopsLayer               | 500 000      | Lines    | Public transport lines            |
| TransportStopsLayer               | 500 001      | Points   | Public transport stops            |
| MapTextLayer                      | 595 000      | Text     | Text for different layers, canvas rendering |
| PointLocationLayer                | 600 000      | Points   | My location                       |
| PointNavigationLayer              | 700 000      | Points   | Start/finish points in navigation |
| PointNavigationLayer              | 700 600      | Points   | Selected point in navigation      |
| MapMarkersLayer (line)            | 729 999      | Lines    | Dashed line to map markers        |
| MapMarkersLayer (text)            | 730 000      | Text     | Text on line. Canvas rendering    |
| MapMarkersLayer (markers)         | 730 000      | Points   | Map markers                       |
| ImpassableRoadsLayer              | 750 000      | Points   | Avoid roads                       |
| ContextMenuLayer                  | 800 000      | Points   | Pin of context menu               |
| MapillaryVectorLayer (lines)      | 1 000 000    | Lines    | Mapillary lines between points    |
| MapillaryVectorLayer (points)     | 1 000 000    | Points   | Mapillary points                  |

### Android. Controls layers {#android-controls-layers}

| Control layer             | Order/Range | Description           |
| ------------------------- | ----------: | --------------------- |
| PreviewRouteLineLayer     | 150 000     | Preview route options |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Radius ruler          |
| DistanceRulerControlLayer | 790 000     | Distance ruler        |
| MapInfoLayer              | 900 000     | Widgets               |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |


## iOS Order Tables {#ios-order-tables}

### iOS. Raster layers {#ios-raster-layers}

| Layer                           | Layer index | Description                           |
| ------------------------------- | ----------: | ------------------------------------- |
| OAUnderlayMapLayer              | -5          | Raster tiles underlay                 |
| Raster layer (MapRasterLayerProvider) | 0     | Map raster tiles                      |
| OATerrainMapLayer                | 4          | [Contour lines, hillshade and slope](/docs/user/plugins/topography) |
| OAOverlayMapLayer                | 5          | Raster tiles overlay                  |
| OAMapillaryLayer                 | 10         | Mapillary layer                       |
| OAWeatherRasterLayer             | 20         | Weather                               |
| OAWeatherRasterLayer             | 25         | Weather                               |
| OAWeatherContourLayer            | 30         | Weather                               |

### iOS. Symbols layers {#ios-symbols-layers}

| Layer / symbols              | Order/Range  | Type     | Description                                                                                |
| ---------------------------- | -----------: | -------- | ------------------------------------------------------------------------------------------ |
| Icons                        | -1 000 000   | Points   | Vector map, iconOrder in style with [adding 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Text                         | 1 - 255      | Text     | Vector map, textOrder in style, 100 by default             |
| Shields                      | 1 - 255      | Shields  | Vector map, textOrder in style for shields, 100 by default |
| OADownloadedRegionsLayer     | 10 000       | Polygons | Shows downloaded green regions |
| POI icon (OAPOILayer)        | 90 000       | Points   | POI overlay                 |
| POI name (OAPOILayer)        | 90 000       | Text     | POI overlay name            |
| GPX track lines (OAGPXLayer) | 100 000      | Lines    | Track lines                 |
| GPX waypoint name            | 100 000      | Text     | GPX waypoints name          |
| GPX waypoint icon            | 100 003      | Points   | GPX waypoints               |
| GPX track start, finish      | 120 000      | Points   | OAGPXLayer                  |
| OSM notes (OAOsmBugsLayer)   | 120 000      | Text     | OSM notes                   |
| Fixme text (OAOsmBugsLayer)  | 120 000      | Text     | OSM fixme text              |
| Fixme icon (OAOsmBugsLayer)  | 120 000      | Points   | OSM fixme icon              |
| OAOsmEditsLayer              | 120 000      | Points   | Edit OSM plugin             |
| OAPreviewRouteLineLayer      | 120 000      | Lines    | Preview route options       |
| OATransportStopsLayer (lines)| 120 000      | Lines    | Public transport ines       |
| OATransportStopsLayer (icons)| 121 000      | Points   | Public transport stops      |
| OARouteLayer                 | 150 000      | Lines    | Navigation route            |
| OAFavoritesLayer             | 160 000      | Points   | Favorites overlay           |
| Avoid roads (OAImpassableRoadsLayer) | 205 998 | Points | Avoid roads                |
| My location (OAMyPositionLayer)      | 206 001 | Points | My location                |
| Map markers (OADestinationsLayer)    | 207 000 | Points | Map markers                |
| Map markers (text on line)   | 207 000      | Text     | Text on line to map markers |
| Navigation (points)          | 207 015      | Points   | OARouteLayer                |
| Navigation (my location)     | 207 025      | Points   | OARouteLayer                |
| Navigation (arrows on route) | 208 000      | Points   | OARouteLayer                |
| OARoutePointsLayer           | 209 000      | Points   | Navigation points           |

### iOS. Controls layers {#ios-controls-layers}

| Control layer            | Order/Range | Description    |
| ------------------------ | ----------: | -------------  |
| OAGPXRecLayer            | 110 000     | Editing GPX    |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Distance ruler |
| OAContextMenuLayer       | 210 000     |                |