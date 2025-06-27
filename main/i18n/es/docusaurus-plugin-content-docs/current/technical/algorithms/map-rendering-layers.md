---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Renderizado de capas de mapa {#map-layers-rendering}

El mapa de OsmAnd se renderiza por capas de abajo hacia arriba. Algunas capas cubren toda la pantalla del mapa, mientras que otras se renderizan con transparencia. El orden de las capas es siempre el mismo, por lo que es importante saber qué se muestra y en qué orden.

## Orden de las capas {#order-of-layers}

OsmAnd utiliza tres tipos de capas: ráster, símbolos y controles. Primero, las [capas ráster se renderizan](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) en OpenGL, seguidas de las [capas de símbolos](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Las capas de control se renderizan independientemente de OpenGL en la interfaz de usuario de los dispositivos Android o iOS, encima del mapa.

**Android:**
La mayoría de las capas en Android se instancian en el método [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) de la clase `MapLayers`.

El orden de cada capa depende de su propiedad `zOrder` durante la instanciación y se establece en el método [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) de la clase `OsmAndMapLayer`.
Otras capas pueden instanciarse en complementos.

**iOS:**
La mayoría de las capas en iOS se instancian en el método [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) de `OAMapLayers`.

El orden de cada capa se establece directamente mediante la propiedad `baseOrder` en `createLayers`.
Otras capas pueden instanciarse en complementos.

## Tablas de órdenes de Android {#android-order-tables}

### Android. Capas ráster {#android-raster-layers}

| Capa                      | Orden/Rango | Tipo | Descripción |
| :------------------------ | ----------: | :--- | :---------- |
| MapTileLayer (subyacente) | -50 000     | Mapa | Capas ráster subyacentes |
| MapTileLayer (capa principal) | 5 000   | Mapa | Capas ráster del mapa |
| ContourLinesLayer         | 6 000       | Mapa | No tiene su propia clase de capa; gestionada por la capa principal MapTileLayer |
| TerrainLayer              | 60 000      | Mapa | [Sombreado de relieve y pendiente](/docs/user/plugins/topography) |
| MapTileLayer (superpuesta) | 70 000     | Mapa | Capas ráster superpuestas |

### Android. Capas de símbolos {#android-symbols-layers}

| Capa / símbolos                   | Orden/Rango  | Tipo     | Descripción                                                                                |
| :-------------------------------- | -----------: | :------- | :----------------------------------------------------------------------------------------- |
| DownloadedRegionsLayer            | -1 100 000   | Polígonos | Muestra las regiones descargadas |
| Iconos (MapVectorLayer)           | -1 000 000   | Puntos   | Mapa vectorial, iconOrder en estilo con [adición de 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (líneas)                 | -500 000     | Líneas   | Líneas de seguimiento |
| RouteLayer (punto de resaltado del gráfico) | -197 900 | Punto    | Análisis de ruta de navegación en el mapa |
| RouteLayer (puntos del eje x del gráfico) | -198 000 | Puntos   | Análisis de ruta de navegación en el mapa |
| RouteLayer (flechas de giro)      | -199 000     | Líneas   | Ruta de navegación |
| RouteLayer                        | -200 000     | Líneas   | Ruta de navegación |
| Texto (MapVectorLayer)            | 1 - 255      | Texto    | Mapa vectorial, textOrder en [estilo](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), 100 por defecto |
| Escudos (MapVectorLayer)          | 1 - 255      | Escudos  | Mapa vectorial, textOrder en estilo para escudos, 100 por defecto |
| Inicio, fin de la pista GPX       | 90 101       | Puntos   | GPXLayer |
| Punto de ruta de la pista GPX     | 90 300       | Puntos   | GPXLayer |
| GPXLayer (nombre del punto de ruta) | 90 300     | Texto    | Nombre de los puntos de ruta |
| Icono del gráfico de la pista GPX | 90 500       | Puntos   | GPXLayer |
| Icono seleccionado de la pista GPX | 90 600     | Puntos   | GPXLayer |
| Notas OSM (OsmBugsLayer)          | 200 000      | Puntos   | Notas OSM |
| Icono Fixme (OsmBugsLayer)        | 200 000      | Puntos   | Iconos fixme de OSM |
| Texto Fixme (OsmBugsLayer)        | 200 000      | Texto    | Texto fixme de OSM |
| POIMapLayer (icono)               | 300 000      | Puntos   | Superposición de POI |
| POIMapLayer (nombre)              | 300 000      | Texto    | Nombre de la superposición de POI |
| AudioNotesLayer                   | 350 000      | Puntos   | Complemento de notas de audio/video |
| OsmEditsLayer                     | 350 000      | Puntos   | Complemento de edición de OSM |
| FavoritesLayer                    | 400 000      | Puntos   | Superposición de favoritos |
| TransportStopsLayer               | 500 000      | Líneas   | Líneas de transporte público |
| TransportStopsLayer               | 500 001      | Puntos   | Paradas de transporte público |
| MapTextLayer                      | 595 000      | Texto    | Texto para diferentes capas, renderizado de lienzo |
| PointLocationLayer                | 600 000      | Puntos   | Mi ubicación |
| PointNavigationLayer              | 700 000      | Puntos   | Puntos de inicio/fin en la navegación |
| PointNavigationLayer              | 700 600      | Puntos   | Punto seleccionado en la navegación |
| MapMarkersLayer (línea)           | 729 999      | Líneas   | Línea discontinua a los marcadores del mapa |
| MapMarkersLayer (texto)           | 730 000      | Texto    | Texto en línea. Renderizado de lienzo |
| MapMarkersLayer (marcadores)      | 730 000      | Puntos   | Marcadores de mapa |
| ImpassableRoadsLayer              | 750 000      | Puntos   | Evitar carreteras |
| ContextMenuLayer                  | 800 000      | Puntos   | Pin del menú contextual |
| MapillaryVectorLayer (líneas)     | 1 000 000    | Líneas   | Líneas de Mapillary entre puntos |
| MapillaryVectorLayer (puntos)     | 1 000 000    | Puntos   | Puntos de Mapillary |

### Android. Capas de controles {#android-controls-layers}

| Capa de control           | Orden/Rango | Descripción           |
| :------------------------ | ----------: | :-------------------- |
| PreviewRouteLineLayer     | 150 000     | Opciones de ruta de vista previa |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Regla de radio        |
| DistanceRulerControlLayer | 790 000     | Regla de distancia    |
| MapInfoLayer              | 900 000     | Widgets               |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |

## Tablas de órdenes de iOS {#ios-order-tables}

### iOS. Capas ráster {#ios-raster-layers}

| Capa                            | Índice de capa | Descripción                               |
| :------------------------------ | -----------: | :---------------------------------------- |
| OAUnderlayMapLayer              | -5           | Capas ráster subyacentes                  |
| Capa ráster (MapRasterLayerProvider) | 0        | Capas ráster del mapa                     |
| OATerrainMapLayer               | 4            | [Líneas de contorno, sombreado de relieve y pendiente](/docs/user/plugins/topography) |
| OAOverlayMapLayer               | 5            | Capas ráster superpuestas                 |
| OAMapillaryLayer                | 10           | Capa de Mapillary                         |
| OAWeatherRasterLayer            | 20           | Clima                                     |
| OAWeatherRasterLayer            | 25           | Clima                                     |
| OAWeatherContourLayer           | 30           | Clima                                     |

### iOS. Capas de símbolos {#ios-symbols-layers}

| Capa / símbolos              | Orden/Rango  | Tipo     | Descripción                                                                                |
| :--------------------------- | -----------: | :------- | :----------------------------------------------------------------------------------------- |
| Iconos                       | -1 000 000   | Puntos   | Mapa vectorial, iconOrder en estilo con [adición de 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Texto                        | 1 - 255      | Texto    | Mapa vectorial, textOrder en estilo, 100 por defecto |
| Escudos                      | 1 - 255      | Escudos  | Mapa vectorial, textOrder en estilo para escudos, 100 por defecto |
| OADownloadedRegionsLayer     | 10 000       | Polígonos | Muestra las regiones verdes descargadas |
| Icono POI (OAPOILayer)       | 90 000       | Puntos   | Superposición de POI |
| Nombre POI (OAPOILayer)      | 90 000       | Texto    | Nombre de la superposición de POI |
| Líneas de pista GPX (OAGPXLayer) | 100 000    | Líneas   | Líneas de seguimiento |
| Nombre del punto de ruta GPX | 100 000      | Texto    | Nombre de los puntos de ruta GPX |
| Icono del punto de ruta GPX  | 100 003      | Puntos   | Puntos de ruta GPX |
| Inicio, fin de la pista GPX  | 120 000      | Puntos   | OAGPXLayer |
| Notas OSM (OAOsmBugsLayer)   | 120 000      | Texto    | Notas OSM |
| Texto Fixme (OAOsmBugsLayer) | 120 000      | Texto    | Texto fixme de OSM |
| Icono Fixme (OAOsmBugsLayer) | 120 000      | Puntos   | Icono fixme de OSM |
| OAOsmEditsLayer              | 120 000      | Puntos   | Complemento de edición de OSM |
| OAPreviewRouteLineLayer      | 120 000      | Líneas   | Opciones de ruta de vista previa |
| OATransportStopsLayer (líneas) | 120 000    | Líneas   | Líneas de transporte público |
| OATransportStopsLayer (iconos) | 121 000    | Puntos   | Paradas de transporte público |
| OARouteLayer                 | 150 000      | Líneas   | Ruta de navegación |
| OAFavoritesLayer             | 160 000      | Puntos   | Superposición de favoritos |
| Evitar carreteras (OAImpassableRoadsLayer) | 205 998 | Puntos | Evitar carreteras |
| Mi ubicación (OAMyPositionLayer) | 206 001 | Puntos | Mi ubicación |
| Marcadores de mapa (OADestinationsLayer) | 207 000 | Puntos | Marcadores de mapa |
| Marcadores de mapa (texto en línea) | 207 000 | Texto    | Texto en línea a los marcadores del mapa |
| Navegación (puntos)          | 207 015      | Puntos   | OARouteLayer |
| Navegación (mi ubicación)    | 207 025      | Puntos   | OARouteLayer |
| Navegación (flechas en ruta) | 208 000      | Puntos   | OARouteLayer |
| OARoutePointsLayer           | 209 000      | Puntos   | Puntos de navegación |

### iOS. Capas de controles {#ios-controls-layers}

| Capa de control            | Orden/Rango | Descripción    |
| :------------------------- | ----------: | :------------- |
| OAGPXRecLayer            | 110 000     | Edición GPX    |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Regla de distancia |
| OAContextMenuLayer       | 210 000     |                |