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
Order of layers icons and text depends from order of layer and can be not so different than layer order.
Additionally we increase order of road [shields](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2720) for show their above.

## Tables of order in Android and iOS 

<details><summary>Android. Order by layers</summary>  

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
| PointNavigationLayer              |  700 000    | Navigation points      |
| MapMarkersLayer (lines)           |  729 999    | Each line -1           |
| ImpassableRoadsLayer              |  750 000    | Avoid roads            |
| RadiusRulerControlLayer           |  780 000    | Not used OpenGL        |
| DistanceRulerControlLayer (lines) |  790 000    | Not used OpenGL        |
| ContextMenuLayer                  |  800 000    |                        |
| PointLocationLayer                |  800 000    | My location layer      |
| MapInfoLayer                      |  900 000    |                        |
| MapillaryVectorLayer              |  1 000 000  | Mapillary points / lines|  

</details>

<details><summary> Android. Order by icons </summary>  

| Icon                          | Order/Range   | Description             |
| ----------------------------- | ------------: | ----------------------- |
| Icons - **VectorMapLayer**    |  1 - 255      | Vector map, iconOrder in style, 100 by default |
| GPX track start, finish       |  90 101       | GPXLayer                |
| GPX track waypoint            |  90 300       | GPXLayer                |
| GPX track chart icon          |  90 500       | GPXLayer                |
| GPX track selected icon       |  90 600       | GPXLayer                |
| OSM notes                     |  200 000      | OSM notes and fixme     |
| POI                           |  300 000      | POI overlay icons       |
| Audio Video notes             |  350 000      |                         |
| Favourites                    |  400 000      | Favorites overlay       |
| Transport stops               |  500 001      | Public transport        |
| My location                   |  600 000      | My location             |
| Navigation (start,via,end)    |  700 000      | Navigation points       |
| Navigation selected point     |  700 600      | Navigation points       |
| MapMarkersLayer (markers)     |  730 000      |                         |
| Avoid roads                   |  750 000      | ImpassableRoadsLayer    |

</details>

<details><summary> Android. Order by text and shields </summary>  

| Text / shield                 | Order/Range   | Description             |
| ----------------------------- | ------------: | ----------------------- |
| Text - **VectorMapLayer**     |  1 - 255      | Vector map texts, textOrder from style, 100 by default |
| GPXLayer (wpt text)           |  90 300       | Order waypoints text in GPX |
| Shields - **VectorMapLayer**  |  180 000 +    | Shields over roads, textOrder + 180 000 |
| POI (name)                    |  300 000      | POI overlay name        |
| MapMarkersLayer (text on line)|  730  000     |                         |
| DistanceRulerControlLayer (text) |   790 000  | Not used OpenGL         |
| Fixme                         | 1 000 000     | OSM fixme text          |

</details>


<details><summary> Android. Controls, rendered over OpenGL </summary>  

| Control                       | Order/Range   | Description             |
| ----------------------------- | ------------: | ----------------------- |
| MeasurementToolLayer          |  460 000      |                         |
| MapControlsLayer              |  1 100 000    |                         |
| MapQuickActionLayer           |  1 200 000    |                         |

</details>

<details><summary> iOS. Order by layers </summary>  

| Layer                        | Real order  | Description                   |
| ---------------------------- | ----------: |------------------------------ |
| OADownloadedRegionsLayer     | 10 000      | Show downloaded green regions |
| OAPOILayer                   | 90 000      | POI overlay                   |
| OAGPXLayer (lines)           | 100 000     | Order for track lines         |
| OAGPXRecLayer                | 110 000     |                       |
| OAPreviewRouteLineLayer      | 120 000     |                       |
| OATransportStopsLayer (lines)| 120 000     | Public transport      |
| OAOsmEditsLayer              | 120 000     | Edit OSM plugin       |
| OAOsmBugsLayer               | 120 000     | OSM notes and fixme   |
| OARouteLayer                 | 150 000     | Navigation route      |
| OAFavoritesLayer             | 160 000     | Favorites overlay     |
| OAMeasurementToolLayer       | 160 000     |                       |
| OARulerByTapControlLayer     | 170 000     |                       |
| OAMyPositionLayer            | 206 000     | My location           |
| OAImpassableRoadsLayer       | 206 000     | Avoid roads           |
| OADestinationsLayer          | 207 000     | Navigation points     |
| OARoutePointsLayer           | 209 000     | Navigation points     |
| OAContextMenuLayer           | 210 000     |                       |

</details>

<details><summary> iOS. Order of raster layers by layer index </summary>  

| Layer                        | Layer index | Description          |
| ---------------------------- | ----------: |--------------------- |
| OAUnderlayMapLayer	       | -5          |                      |
| OATerrainMapLayer	           | 4           |                      |
| OAOverlayMapLayer	           | 5           |                      |
| OAMapillaryLayer	           | 10          |                      |
| OAWeatherRasterLayer	       | 20          |                      |
| OAWeatherRasterLayer	       | 25          |                      |
| OAWeatherContourLayer	       | 30          |                      |

</details>

<details><summary> iOS. Order by icons </summary>  

| Icon                          | Order/Range   | Description                                   |
| ----------------------------- | ------------: | --------------------------------------------- |
| Icons                         |  1 - 255      | Vector map, iconOrder in style, 100 by default|
| POI                           |  90 000       | POI overlay icons                             |
| GPX waypoint                  |  100 003      | OAGPXLayer                                    |
| GPX track start, finish       |  120 000      | OAGPXLayer                                    |
| OSM notes                     |  120 000      | OSM notes and fixme (OAOsmBugsLayer)          |
| OSM edits                     |  120 000      | Edit OSM plugin                               |
| Transport stops               |  121 000      | Public transport                              |
| Favourites                    |  160 000      | Favorites overlay icons                       |
| Avoid roads                   |  205 998      | Avoid roads (OAImpassableRoadsLayer)          |
| My location                   |  206 001      | My location                                   |
| Navigation (start,via)        |  206 998      | Navigation points (OARoutePointsLayer)        |
| Navigation (end)              |  207 000      | Navigation end point (OADestinationsLayer)    |
| Map markers                   |  207 000      | Map markers (OADestinationsLayer)             |
| Navigation route, points      |  207 015      | (OARouteLayer)                                |
| Navigation route, my location |  207 025      | (OARouteLayer)                                |
| Navigation route, arrows      |  208 000      | (OARouteLayer)                                |

</details>

<details><summary> iOS. Order by text and shields </summary>  

| Text / shield                 | Order/Range   | Description                                   |
| ----------------------------- | ------------: | --------------------------------------------- |
| Text - **VectorMapLayer**     |  1 - 255      | Vector map texts, textOrder from style, 100 by default |
| POI (name)                    |  90 000       | POI overlay name                              |
| GPX waipoint                  |  100 000      | GPX track waypoint text                       |
| Fixme                         |  120 000      | OSM fixme text                                |
| OARulerByTapControlLayer (text) |   170 000   |                                               |
| Shields                       |  180 000 +    | Shields over roads, textOrder + 180 000       |
| Map markers (text on line)    |  207  000     |                                               |

</details>


