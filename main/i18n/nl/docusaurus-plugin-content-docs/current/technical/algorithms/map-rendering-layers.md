---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Renderen van kaartlagen {#map-layers-rendering}

De OsmAnd-kaart wordt laag voor laag van onder naar boven gerenderd. Sommige lagen bedekken het hele kaartscherm, terwijl andere met transparantie worden gerenderd. De volgorde van de lagen is altijd hetzelfde, dus het is belangrijk om bij te houden wat er wordt weergegeven en in welke volgorde.

## Volgorde van lagen {#order-of-layers}

OsmAnd gebruikt drie soorten lagen: raster, symbolen en besturingselementen. Eerst worden [rasterlagen gerenderd](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) in OpenGL, gevolgd door [symboollagen](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Besturingslagen worden onafhankelijk van OpenGL gerenderd in de gebruikersinterface van Android- of iOS-apparaten, bovenop de kaart.

**Android:**
De meeste lagen op Android worden geïnstantieerd in de [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121)-methode van de `MapLayers`-klasse.

De volgorde van elke laag hangt af van de `zOrder`-eigenschap tijdens de instantiatie en wordt ingesteld in de [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95)-methode van de `OsmAndMapLayer`-klasse.
Andere lagen kunnen in plug-ins worden geïnstantieerd.

**iOS:**
De meeste lagen op iOS worden geïnstantieerd in de [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36)-methode van `OAMapLayers`.

De volgorde van elke laag wordt direct ingesteld door de `baseOrder`-eigenschap in `createLayers`.
Andere lagen kunnen in plug-ins worden geïnstantieerd.

## Android-ordertabellen {#android-order-tables}

### Android. Rasterlagen {#android-raster-layers}

| Laag                              | Volgorde/Bereik | Type | Beschrijving                               |
| :-------------------------------- | --------------: | :--- | :----------------------------------------- |
| MapTileLayer (onderlaag)          | -50 000         | Kaart | Rastertegels onderlaag                     |
| MapTileLayer (hoofdlaag)          | 5 000           | Kaart | Kaartrastertegels                          |
| ContourLinesLayer                 | 6 000           | Kaart | Heeft geen eigen laagklasse; beheerd door hoofd-MapTileLayer |
| TerrainLayer                      | 60 000          | Kaart | [Heuvelschaduw en helling](/docs/user/plugins/topography) |
| MapTileLayer (overlay)            | 70 000          | Kaart | Rastertegels overlay                       |

### Android. Symboollagen {#android-symbols-layers}

| Laag / symbolen                   | Volgorde/Bereik | Type     | Beschrijving                                                                               |
| :-------------------------------- | --------------: | :------- | :----------------------------------------------------------------------------------------- |
| DownloadedRegionsLayer            | -1 100 000      | Polygonen | Toont gedownloade regio's                                                                  |
| Pictogrammen (MapVectorLayer)     | -1 000 000      | Punten   | Vectorkaart, iconOrder in stijl met [toevoeging van 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (lijnen)                 | -500 000        | Lijnen   | Tracklijnen                                                                                |
| RouteLayer (grafiek highlight punt)| -197 900       | Punt     | Navigatierouteanalyse op kaart                                                             |
| RouteLayer (grafiek x-as punten)  | -198 000        | Punten   | Navigatierouteanalyse op kaart                                                             |
| RouteLayer (afslagpijlen)         | -199 000        | Lijnen   | Navigatieroute                                                                             |
| RouteLayer                        | -200 000        | Lijnen   | Navigatieroute                                                                             |
| Tekst (MapVectorLayer)            | 1 - 255         | Tekst    | Vectorkaart, textOrder in [stijl](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), standaard 100 |
| Schildjes (MapVectorLayer)        | 1 - 255         | Schildjes | Vectorkaart, textOrder in stijl voor schildjes, standaard 100                             |
| GPX-track start, finish           | 90 101          | Punten   | GPXLayer                                                                                   |
| GPX-track waypoint                | 90 300          | Punten   | GPXLayer                                                                                   |
| GPXLayer (wpt naam)               | 90 300          | Tekst    | Waypoints naam                                                                             |
| GPX-track grafiekpictogram        | 90 500          | Punten   | GPXLayer                                                                                   |
| GPX-track geselecteerd pictogram  | 90 600          | Punten   | GPXLayer                                                                                   |
| OSM-notities (OsmBugsLayer)       | 200 000         | Punten   | OSM-notities                                                                               |
| Fixme-pictogram (OsmBugsLayer)    | 200 000         | Punten   | OSM fixme-pictogrammen                                                                     |
| Fixme-tekst (OsmBugsLayer)        | 200 000         | Tekst    | OSM fixme-tekst                                                                            |
| POIMapLayer (pictogram)           | 300 000         | Punten   | POI-overlay                                                                                |
| POIMapLayer (naam)                | 300 000         | Tekst    | POI-overlay naam                                                                           |
| AudioNotesLayer                   | 350 000         | Punten   | Audio/video-notities plug-in                                                               |
| OsmEditsLayer                     | 350 000         | Punten   | OSM-bewerkingsplug-in                                                                      |
| FavoritesLayer                    | 400 000         | Punten   | Favorieten-overlay                                                                         |
| TransportStopsLayer               | 500 000         | Lijnen   | Openbaarvervoerlijnen                                                                      |
| TransportStopsLayer               | 500 001         | Punten   | Openbaarvervoerhaltes                                                                      |
| MapTextLayer                      | 595 000         | Tekst    | Tekst voor verschillende lagen, canvas rendering                                           |
| PointLocationLayer                | 600 000         | Punten   | Mijn locatie                                                                               |
| PointNavigationLayer              | 700 000         | Punten   | Start/eindpunten in navigatie                                                              |
| PointNavigationLayer              | 700 600         | Punten   | Geselecteerd punt in navigatie                                                             |
| MapMarkersLayer (lijn)            | 729 999         | Lijnen   | Gestippelde lijn naar kaartmarkeringen                                                     |
| MapMarkersLayer (tekst)           | 730 000         | Tekst    | Tekst op lijn. Canvas rendering                                                            |
| MapMarkersLayer (markeringen)     | 730 000         | Punten   | Kaartmarkeringen                                                                           |
| ImpassableRoadsLayer              | 750 000         | Punten   | Vermijd wegen                                                                              |
| ContextMenuLayer                  | 800 000         | Punten   | Pin van contextmenu                                                                        |
| MapillaryVectorLayer (lijnen)     | 1 000 000       | Lijnen   | Mapillary-lijnen tussen punten                                                             |
| MapillaryVectorLayer (punten)     | 1 000 000       | Punten   | Mapillary-punten                                                                           |

### Android. Besturingslagen {#android-controls-layers}

| Besturingslaag            | Volgorde/Bereik | Beschrijving              |
| :------------------------ | --------------: | :------------------------ |
| PreviewRouteLineLayer     | 150 000         | Opties voor routevoorbeeld |
| MeasurementToolLayer      | 460 000         |                           |
| RadiusRulerControlLayer   | 780 000         | Straalmeter               |
| DistanceRulerControlLayer | 790 000         | Afstandsmeter             |
| MapInfoLayer              | 900 000         | Widgets                   |
| MapControlsLayer          | 1 100 000       |                           |
| MapQuickActionLayer       | 1 200 000       |                           |

## iOS-ordertabellen {#ios-order-tables}

### iOS. Rasterlagen {#ios-raster-layers}

| Laag                            | Laagindex | Beschrijving                               |
| :------------------------------ | --------: | :----------------------------------------- |
| OAUnderlayMapLayer              | -5        | Rastertegels onderlaag                     |
| Rasterlaag (MapRasterLayerProvider) | 0       | Kaartrastertegels                          |
| OATerrainMapLayer               | 4         | [Contourlijnen, heuvelschaduw en helling](/docs/user/plugins/topography) |
| OAOverlayMapLayer               | 5         | Rastertegels overlay                       |
| OAMapillaryLayer                | 10        | Mapillary-laag                             |
| OAWeatherRasterLayer            | 20        | Weer                                       |
| OAWeatherRasterLayer            | 25        | Weer                                       |
| OAWeatherContourLayer           | 30        | Weer                                       |

### iOS. Symboollagen {#ios-symbols-layers}

| Laag / symbolen              | Volgorde/Bereik | Type     | Beschrijving                                                                               |
| :--------------------------- | --------------: | :------- | :----------------------------------------------------------------------------------------- |
| Pictogrammen                 | -1 000 000      | Punten   | Vectorkaart, iconOrder in stijl met [toevoeging van 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Tekst                        | 1 - 255         | Tekst    | Vectorkaart, textOrder in stijl, standaard 100                                            |
| Schildjes                    | 1 - 255         | Schildjes | Vectorkaart, textOrder in stijl voor schildjes, standaard 100                             |
| OADownloadedRegionsLayer     | 10 000          | Polygonen | Toont gedownloade groene regio's                                                           |
| POI-pictogram (OAPOILayer)   | 90 000          | Punten   | POI-overlay                                                                                |
| POI-naam (OAPOILayer)        | 90 000          | Tekst    | POI-overlay naam                                                                           |
| GPX-tracklijnen (OAGPXLayer) | 100 000         | Lijnen   | Tracklijnen                                                                                |
| GPX-waypointnaam             | 100 000         | Tekst    | GPX-waypoints naam                                                                         |
| GPX-waypointpictogram        | 100 003         | Punten   | GPX-waypoints                                                                              |
| GPX-track start, finish      | 120 000         | Punten   | OAGPXLayer                                                                                 |
| OSM-notities (OAOsmBugsLayer)| 120 000         | Tekst    | OSM-notities                                                                               |
| Fixme-tekst (OAOsmBugsLayer) | 120 000         | Tekst    | OSM fixme-tekst                                                                            |
| Fixme-pictogram (OAOsmBugsLayer)| 120 000      | Punten   | OSM fixme-pictogram                                                                        |
| OAOsmEditsLayer              | 120 000         | Punten   | Bewerk OSM-plug-in                                                                         |
| OAPreviewRouteLineLayer      | 120 000         | Lijnen   | Opties voor routevoorbeeld                                                                 |
| OATransportStopsLayer (lijnen)| 120 000       | Lijnen   | Openbaar vervoerlijnen                                                                     |
| OATransportStopsLayer (pictogrammen)| 121 000    | Punten   | Openbaar vervoerhaltes                                                                     |
| OARouteLayer                 | 150 000         | Lijnen   | Navigatieroute                                                                             |
| OAFavoritesLayer             | 160 000         | Punten   | Favorieten-overlay                                                                         |
| Vermijd wegen (OAImpassableRoadsLayer)| 205 998 | Punten   | Vermijd wegen                                                                              |
| Mijn locatie (OAMyPositionLayer)| 206 001      | Punten   | Mijn locatie                                                                               |
| Kaartmarkeringen (OADestinationsLayer)| 207 000 | Punten   | Kaartmarkeringen                                                                           |
| Kaartmarkeringen (tekst op lijn)| 207 000      | Tekst    | Tekst op lijn naar kaartmarkeringen                                                        |
| Navigatie (punten)           | 207 015         | Punten   | OARouteLayer                                                                               |
| Navigatie (mijn locatie)     | 207 025         | Punten   | OARouteLayer                                                                               |
| Navigatie (pijlen op route)  | 208 000         | Punten   | OARouteLayer                                                                               |
| OARoutePointsLayer           | 209 000         | Punten   | Navigatiepunten                                                                            |

### iOS. Besturingslagen {#ios-controls-layers}

| Besturingslaag           | Volgorde/Bereik | Beschrijving    |
| :----------------------- | --------------: | :-------------- |
| OAGPXRecLayer            | 110 000         | GPX bewerken    |
| OAMeasurementToolLayer   | 160 000         |                 |
| OARulerByTapControlLayer | 170 000         | Afstandsmeter   |
| OAContextMenuLayer       | 210 000         |                 |