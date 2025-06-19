---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Rendering dei livelli della mappa {#map-layers-rendering}

La mappa di OsmAnd viene renderizzata per livelli dal basso verso l'alto. Alcuni livelli coprono l'intero schermo della mappa, mentre altri vengono renderizzati con trasparenza. L'ordine dei livelli è sempre lo stesso, quindi è importante tenere traccia di ciò che viene visualizzato e in quale ordine.

## Ordine dei livelli {#order-of-layers}

OsmAnd utilizza tre tipi di livelli: raster, simboli e controlli. Innanzitutto, i [livelli raster vengono renderizzati](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) in OpenGL, seguiti dai [livelli simbolo](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). I livelli di controllo vengono renderizzati indipendentemente da OpenGL nell'interfaccia utente dei dispositivi Android o iOS, sopra la mappa.

**Android:**
La maggior parte dei livelli su Android viene istanziata nel metodo [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) della classe `MapLayers`.

L'ordine di ogni livello dipende dalla sua proprietà `zOrder` durante l'istanza ed è impostato nel metodo [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) della classe `OsmAndMapLayer`.
Altri livelli possono essere istanziati nei plugin.

**iOS:**
La maggior parte dei livelli su iOS viene istanziata nel metodo [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) di `OAMapLayers`.

L'ordine di ogni livello è impostato direttamente dalla proprietà `baseOrder` in `createLayers`.
Altri livelli possono essere istanziati nei plugin.


## Tabelle dell'ordine per Android {#android-order-tables}

### Android. Livelli raster {#android-raster-layers}

| Livello                           | Ordine/Intervallo | Tipo | Descrizione                           |
| --------------------------------- | -------------: | ---- | ------------------------------------- |
| MapTileLayer (sottolivello)       | -50 000        | Mappa | Sottolivello di tessere raster                 |
| MapTileLayer (livello principale) | 5 000          | Mappa | Tessere raster della mappa                      |
| ContourLinesLayer                 | 6 000          | Mappa | Non ha una propria classe di livello; gestito dal MapTileLayer principale |
| TerrainLayer                      | 60 000         | Mappa | [Ombreggiatura e pendenza](/docs/user/plugins/topography)           |
| MapTileLayer (sovralivello)       | 70 000         | Mappa | Sovralivello di tessere raster                  |

### Android. Livelli simbolo {#android-symbols-layers}

| Livello / simboli                 | Ordine/Intervallo | Tipo     | Descrizione                                                        |
| --------------------------------- | -----------: | -------- | ------------------------------------------------------------------ |
| DownloadedRegionsLayer            | -1 100 000   | Poligoni | Mostra le regioni scaricate          |
| Icone (MapVectorLayer)            | -1 000 000   | Punti   | Mappa vettoriale, iconOrder nello stile con [aggiunta di 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (linee)                  | -500 000     | Linee    | Linee del percorso             |
| RouteLayer (punto di evidenziazione grafico)| -197 900     | Punto    | Analisi del percorso di navigazione sulla mappa  |
| RouteLayer (punti asse x grafico)  | -198 000     | Punti   | Analisi del percorso di navigazione sulla mappa  |
| RouteLayer (frecce di svolta)          | -199 000     | Linee    | Percorso di navigazione                  |
| RouteLayer                        | -200 000     | Linee    | Percorso di navigazione                  |
| Testo (MapVectorLayer)             | 1 - 255      | Testo     | Mappa vettoriale, textOrder nello [stile](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), 100 per impostazione predefinita                 |
| Scudi (MapVectorLayer)          | 1 - 255       | Scudi  | Mappa vettoriale, textOrder nello stile per gli scudi, 100 per impostazione predefinita |
| Inizio, fine percorso GPX           | 90 101       | Punti   | GPXLayer                          |
| Waypoint percorso GPX                | 90 300       | Punti   | GPXLayer                          |
| GPXLayer (nome wpt)               | 90 300       | Testo     | Nome waypoint                    |
| Icona grafico percorso GPX              | 90 500       | Punti   | GPXLayer                          |
| Icona selezionata percorso GPX           | 90 600       | Punti   | GPXLayer                          |
| Note OSM (OsmBugsLayer)          | 200 000      | Punti   | Note OSM                         |
| Icona Fixme (OsmBugsLayer)         | 200 000      | Punti   | Icone fixme OSM                   |
| Testo Fixme (OsmBugsLayer)         | 200 000      | Testo     | Testo fixme OSM                    |
| POIMapLayer (icona)                | 300 000      | Punti   | Sovralivello POI                       |
| POIMapLayer (nome)                | 300 000      | Testo     | Nome sovralivello POI                  |
| AudioNotesLayer                   | 350 000      | Punti   | Plugin note audio/video          |
| OsmEditsLayer                     | 350 000      | Punti   | Plugin modifica OSM                   |
| FavoritesLayer                    | 400 000      | Punti   | Sovralivello preferiti                 |
| TransportStopsLayer               | 500 000      | Linee    | Linee trasporto pubblico            |
| TransportStopsLayer               | 500 001      | Punti   | Fermate trasporto pubblico            |
| MapTextLayer                      | 595 000      | Testo     | Testo per diversi livelli, rendering canvas |
| PointLocationLayer                | 600 000      | Punti   | La mia posizione                       |
| PointNavigationLayer              | 700 000      | Punti   | Punti di inizio/fine nella navigazione |
| PointNavigationLayer              | 700 600      | Punti   | Punto selezionato nella navigazione      |
| MapMarkersLayer (linea)            | 729 999      | Linee    | Linea tratteggiata ai marcatori mappa        |
| MapMarkersLayer (testo)            | 730 000      | Testo     | Testo sulla linea. Rendering canvas    |
| MapMarkersLayer (marcatori)         | 730 000      | Punti   | Marcatori mappa                       |
| ImpassableRoadsLayer              | 750 000      | Punti   | Evita strade                       |
| ContextMenuLayer                  | 800 000      | Punti   | Pin del menu contestuale               |
| MapillaryVectorLayer (linee)      | 1 000 000    | Linee    | Linee Mapillary tra punti    |
| MapillaryVectorLayer (punti)     | 1 000 000    | Punti   | Punti Mapillary                  |

### Android. Livelli di controllo {#android-controls-layers}

| Livello di controllo             | Ordine/Intervallo | Descrizione           |
| ------------------------- | ----------: | --------------------- |
| PreviewRouteLineLayer     | 150 000     | Opzioni percorso anteprima |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Righello raggio          |
| DistanceRulerControlLayer | 790 000     | Righello distanza        |
| MapInfoLayer              | 900 000     | Widget               |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |


## Tabelle dell'ordine per iOS {#ios-order-tables}

### iOS. Livelli raster {#ios-raster-layers}

| Livello                           | Indice livello | Descrizione                           |
| ------------------------------- | ----------: | ------------------------------------- |
| OAUnderlayMapLayer              | -5          | Sottolivello di tessere raster                 |
| Livello raster (MapRasterLayerProvider) | 0     | Tessere raster della mappa                      |
| OATerrainMapLayer                | 4          | [Linee di contorno, ombreggiatura e pendenza](/docs/user/plugins/topography) |
| OAOverlayMapLayer                | 5          | Sovralivello di tessere raster                  |
| OAMapillaryLayer                 | 10         | Livello Mapillary                       |
| OAWeatherRasterLayer             | 20         | Meteo                               |
| OAWeatherRasterLayer             | 25         | Meteo                               |
| OAWeatherContourLayer            | 30         | Meteo                               |

### iOS. Livelli simbolo {#ios-symbols-layers}

| Livello / simboli              | Ordine/Intervallo | Tipo     | Descrizione                                                                                |
| ---------------------------- | -----------: | -------- | ------------------------------------------------------------------------------------------ |
| Icone                        | -1 000 000   | Punti   | Mappa vettoriale, iconOrder nello stile con [aggiunta di 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Testo                         | 1 - 255      | Testo     | Mappa vettoriale, textOrder nello stile, 100 per impostazione predefinita             |
| Scudi                      | 1 - 255      | Scudi  | Mappa vettoriale, textOrder nello stile per gli scudi, 100 per impostazione predefinita |
| OADownloadedRegionsLayer     | 10 000       | Poligoni | Mostra le regioni verdi scaricate |
| Icona POI (OAPOILayer)        | 90 000       | Punti   | Sovralivello POI                 |
| Nome POI (OAPOILayer)        | 90 000       | Testo     | Nome sovralivello POI            |
| Linee percorso GPX (OAGPXLayer) | 100 000      | Linee    | Linee del percorso                 |
| Nome waypoint GPX            | 100 000      | Testo     | Nome waypoint GPX          |
| Icona waypoint GPX            | 100 003      | Punti   | Waypoint GPX               |
| Inizio, fine percorso GPX      | 120 000      | Punti   | OAGPXLayer                  |
| Note OSM (OAOsmBugsLayer)   | 120 000      | Testo     | Note OSM                   |
| Testo Fixme (OAOsmBugsLayer)  | 120 000      | Testo     | Testo fixme OSM              |
| Icona Fixme (OAOsmBugsLayer)  | 120 000      | Punti   | Icona fixme OSM              |
| OAOsmEditsLayer              | 120 000      | Punti   | Plugin modifica OSM             |
| OAPreviewRouteLineLayer      | 120 000      | Linee    | Opzioni percorso anteprima       |
| OATransportStopsLayer (linee)| 120 000      | Linee    | Linee trasporto pubblico       |
| OATransportStopsLayer (icone)| 121 000      | Punti   | Fermate trasporto pubblico      |
| OARouteLayer                 | 150 000      | Linee    | Percorso di navigazione            |
| OAFavoritesLayer             | 160 000      | Punti   | Sovralivello preferiti           |
| Evita strade (OAImpassableRoadsLayer) | 205 998 | Punti | Evita strade                |
| La mia posizione (OAMyPositionLayer)      | 206 001 | Punti | La mia posizione                |
| Marcatori mappa (OADestinationsLayer)    | 207 000 | Punti | Marcatori mappa                |
| Marcatori mappa (testo sulla linea)   | 207 000      | Testo     | Testo sulla linea ai marcatori mappa |
| Navigazione (punti)          | 207 015      | Punti   | OARouteLayer                |
| Navigazione (la mia posizione)     | 207 025      | Punti   | OARouteLayer                |
| Navigazione (frecce sul percorso) | 208 000      | Punti   | OARouteLayer                |
| OARoutePointsLayer           | 209 000      | Punti   | Punti di navigazione           |

### iOS. Livelli di controllo {#ios-controls-layers}

| Livello di controllo            | Ordine/Intervallo | Descrizione    |
| ------------------------ | ----------: | -------------  |
| OAGPXRecLayer            | 110 000     | Modifica GPX    |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Righello distanza |
| OAContextMenuLayer       | 210 000     |                |