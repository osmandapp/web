---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Rendering von Kartenebenen {#map-layers-rendering}

Die OsmAnd-Karte wird schichtweise von unten nach oben gerendert. Einige Ebenen bedecken den gesamten Kartenbildschirm, während andere mit Transparenz gerendert werden. Die Reihenfolge der Ebenen ist immer gleich, daher ist es wichtig, den Überblick darüber zu behalten, was in welcher Reihenfolge angezeigt wird.

## Reihenfolge der Ebenen {#order-of-layers}

OsmAnd verwendet drei Arten von Ebenen: Raster, Symbole und Steuerelemente. Zuerst werden [Rasterebenen in OpenGL gerendert](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162), gefolgt von [Symbolebenen](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Steuerebenen werden unabhängig von OpenGL in der Benutzeroberfläche von Android- oder iOS-Geräten über der Karte gerendert.

**Android:**
Die meisten Ebenen auf Android werden in der Methode [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) der Klasse `MapLayers` instanziiert.

Die Reihenfolge jeder Ebene hängt von ihrer `zOrder`-Eigenschaft während der Instanziierung ab und wird in der Methode [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) der Klasse `OsmAndMapLayer` festgelegt.
Andere Ebenen können in Plugins instanziiert werden.

**iOS:**
Die meisten Ebenen auf iOS werden in der Methode [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) von `OAMapLayers` instanziiert.

Die Reihenfolge jeder Ebene wird direkt durch die Eigenschaft `baseOrder` in `createLayers` festgelegt.
Andere Ebenen können in Plugins instanziiert werden.

## Android-Reihenfolgetabellen {#android-order-tables}

### Android. Rasterebenen {#android-raster-layers}

| Ebene                             | Reihenfolge/Bereich | Typ | Beschreibung                           |
| --------------------------------- | ------------------: | ---- | ------------------------------------- |
| MapTileLayer (Unterlage)           | -50 000        | Karte  | Rasterkacheln Unterlage                 |
| MapTileLayer (Hauptebene)         | 5 000          | Karte  | Karten-Rasterkacheln                      |
| ContourLinesLayer                 | 6 000          | Karte  | Hat keine eigene Ebenenklasse; wird von der Haupt-MapTileLayer verwaltet |
| TerrainLayer                      | 60 000         | Karte  | [Schummerung und Hangneigung](/docs/user/plugins/topography)           |
| MapTileLayer (Überlagerung)            | 70 000         | Karte  | Rasterkacheln Überlagerung                  |

### Android. Symbolebenen {#android-symbols-layers}

| Ebene / Symbole                   | Reihenfolge/Bereich | Typ     | Beschreibung                                                        |
| --------------------------------- | ------------------: | -------- | ------------------------------------------------------------------ |
| DownloadedRegionsLayer            | -1 100 000   | Polygone | Zeigt heruntergeladene Regionen an          |
| Icons (MapVectorLayer)            | -1 000 000   | Punkte   | Vektorkarte, iconOrder im Stil mit [Hinzufügen von 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (Linien)                  | -500 000     | Linien    | Track-Linien             |
| RouteLayer (Diagramm-Highlight-Punkt)| -197 900     | Punkt    | Navigationsroutenanalyse auf der Karte  |
| RouteLayer (Diagramm-X-Achsen-Punkte)  | -198 000     | Punkte   | Navigationsroutenanalyse auf der Karte  |
| RouteLayer (Abbiegepfeile)          | -199 000     | Linien    | Navigationsroute                  |
| RouteLayer                        | -200 000     | Linien    | Navigationsroute                  |
| Text (MapVectorLayer)             | 1 - 255      | Text     | Vektorkarte, textOrder im [Stil](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), standardmäßig 100                 |
| Shields (MapVectorLayer)          | 1 - 255       | Schilde  | Vektorkarte, textOrder im Stil für Schilde, standardmäßig 100 |
| GPX Track Start, Ende           | 90 101       | Punkte   | GPXLayer                          |
| GPX Track Wegpunkt                | 90 300       | Punkte   | GPXLayer                          |
| GPXLayer (Wegpunktname)               | 90 300       | Text     | Wegpunktname                    |
| GPX Track Diagramm-Symbol              | 90 500       | Punkte   | GPXLayer                          |
| GPX Track ausgewähltes Symbol           | 90 600       | Punkte   | GPXLayer                          |
| OSM Notizen (OsmBugsLayer)          | 200 000      | Punkte   | OSM Notizen                         |
| Fixme Symbol (OsmBugsLayer)         | 200 000      | Punkte   | OSM Fixme Symbole                   |
| Fixme Text (OsmBugsLayer)         | 200 000      | Text     | OSM Fixme Text                    |
| POIMapLayer (Symbol)                | 300 000      | Punkte   | POI Überlagerung                       |
| POIMapLayer (Name)                | 300 000      | Text     | POI Überlagerungsname                  |
| AudioNotesLayer                   | 350 000      | Punkte   | Audio-/Video-Notizen-Plugin          |
| OsmEditsLayer                     | 350 000      | Punkte   | OSM Bearbeitungs-Plugin                   |
| FavoritesLayer                    | 400 000      | Punkte   | Favoriten-Überlagerung                 |
| TransportStopsLayer               | 500 000      | Linien    | Linien des öffentlichen Nahverkehrs            |
| TransportStopsLayer               | 500 001      | Punkte   | Haltestellen des öffentlichen Nahverkehrs            |
| MapTextLayer                      | 595 000      | Text     | Text für verschiedene Ebenen, Canvas-Rendering |
| PointLocationLayer                | 600 000      | Punkte   | Mein Standort                       |
| PointNavigationLayer              | 700 000      | Punkte   | Start-/Endpunkte in der Navigation |
| PointNavigationLayer              | 700 600      | Punkte   | Ausgewählter Punkt in der Navigation      |
| MapMarkersLayer (Linie)            | 729 999      | Linien    | Gestrichelte Linie zu Kartenmarkierungen        |
| MapMarkersLayer (Text)            | 730 000      | Text     | Text auf Linie. Canvas-Rendering    |
| MapMarkersLayer (Markierungen)         | 730 000      | Punkte   | Kartenmarkierungen                       |
| ImpassableRoadsLayer              | 750 000      | Punkte   | Straßen vermeiden                       |
| ContextMenuLayer                  | 800 000      | Punkte   | Pin des Kontextmenüs               |
| MapillaryVectorLayer (Linien)      | 1 000 000    | Linien    | Mapillary-Linien zwischen Punkten    |
| MapillaryVectorLayer (Punkte)     | 1 000 000    | Punkte   | Mapillary-Punkte                  |

### Android. Steuerebenen {#android-controls-layers}

| Steuerebene             | Reihenfolge/Bereich | Beschreibung           |
| ------------------------- | ------------------: | --------------------- |
| PreviewRouteLineLayer     | 150 000     | Vorschau-Routenoptionen |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Radiuslineal          |
| DistanceRulerControlLayer | 790 000     | Distanzlineal        |
| MapInfoLayer              | 900 000     | Widgets               |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |

## iOS-Reihenfolgetabellen {#ios-order-tables}

### iOS. Rasterebenen {#ios-raster-layers}

| Ebene                           | Ebenenindex | Beschreibung                           |
| ------------------------------- | ----------: | ------------------------------------- |
| OAUnderlayMapLayer              | -5          | Rasterkacheln Unterlage                 |
| Rasterebene (MapRasterLayerProvider) | 0     | Karten-Rasterkacheln                      |
| OATerrainMapLayer                | 4          | [Höhenlinien, Schummerung und Hangneigung](/docs/user/plugins/topography) |
| OAOverlayMapLayer                | 5          | Rasterkacheln Überlagerung                  |
| OAMapillaryLayer                 | 10         | Mapillary-Ebene                       |
| OAWeatherRasterLayer             | 20         | Wetter                               |
| OAWeatherRasterLayer             | 25         | Wetter                               |
| OAWeatherContourLayer            | 30         | Wetter                               |

### iOS. Symbolebenen {#ios-symbols-layers}

| Ebene / Symbole              | Reihenfolge/Bereich | Typ     | Beschreibung                                                                                |
| ---------------------------- | ------------------: | -------- | ------------------------------------------------------------------------------------------ |
| Icons                        | -1 000 000   | Punkte   | Vektorkarte, iconOrder im Stil mit [Hinzufügen von 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Text                         | 1 - 255      | Text     | Vektorkarte, textOrder im Stil, standardmäßig 100             |
| Shields                      | 1 - 255      | Schilde  | Vektorkarte, textOrder im Stil für Schilde, standardmäßig 100 |
| OADownloadedRegionsLayer     | 10 000       | Polygone | Zeigt heruntergeladene grüne Regionen an |
| POI Symbol (OAPOILayer)        | 90 000       | Punkte   | POI Überlagerung                 |
| POI Name (OAPOILayer)        | 90 000       | Text     | POI Überlagerungsname            |
| GPX Track Linien (OAGPXLayer) | 100 000      | Linien    | Track-Linien                 |
| GPX Wegpunktname            | 100 000      | Text     | GPX Wegpunktname          |
| GPX Wegpunkt Symbol            | 100 003      | Punkte   | GPX Wegpunkte               |
| GPX Track Start, Ende      | 120 000      | Punkte   | OAGPXLayer                  |
| OSM Notizen (OAOsmBugsLayer)   | 120 000      | Text     | OSM Notizen                   |
| Fixme Text (OAOsmBugsLayer)  | 120 000      | Text     | OSM Fixme Text              |
| Fixme Symbol (OAOsmBugsLayer)  | 120 000      | Punkte   | OSM Fixme Symbol              |
| OAOsmEditsLayer              | 120 000      | Punkte   | OSM Bearbeitungs-Plugin             |
| OAPreviewRouteLineLayer      | 120 000      | Linien    | Vorschau-Routenoptionen       |
| OATransportStopsLayer (Linien)| 120 000      | Linien    | Linien des öffentlichen Nahverkehrs       |
| OATransportStopsLayer (Symbole)| 121 000      | Punkte   | Haltestellen des öffentlichen Nahverkehrs      |
| OARouteLayer                 | 150 000      | Linien    | Navigationsroute            |
| OAFavoritesLayer             | 160 000      | Punkte   | Favoriten-Überlagerung           |
| Straßen vermeiden (OAImpassableRoadsLayer) | 205 998 | Punkte | Straßen vermeiden                |
| Mein Standort (OAMyPositionLayer)      | 206 001 | Punkte | Mein Standort                |
| Kartenmarkierungen (OADestinationsLayer)    | 207 000 | Punkte | Kartenmarkierungen                |
| Kartenmarkierungen (Text auf Linie)   | 207 000      | Text     | Text auf Linie zu Kartenmarkierungen |
| Navigation (Punkte)          | 207 015      | Punkte   | OARouteLayer                |
| Navigation (mein Standort)     | 207 025      | Punkte   | OARouteLayer                |
| Navigation (Pfeile auf Route) | 208 000      | Punkte   | OARouteLayer                |
| OARoutePointsLayer           | 209 000      | Punkte   | Navigationspunkte           |

### iOS. Steuerebenen {#ios-controls-layers}

| Steuerebene            | Reihenfolge/Bereich | Beschreibung    |
| ------------------------ | ------------------: | -------------  |
| OAGPXRecLayer            | 110 000     | GPX bearbeiten    |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Distanzlineal |
| OAContextMenuLayer       | 210 000     |                |