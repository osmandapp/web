---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Renderização de Camadas de Mapa {#map-layers-rendering}

O mapa do OsmAnd é renderizado por camadas de baixo para cima. Algumas camadas cobrem a tela inteira do mapa, enquanto outras são renderizadas com transparência. A ordem das camadas é sempre a mesma, por isso é importante acompanhar o que é exibido e em que ordem.

## Ordem das Camadas {#order-of-layers}

O OsmAnd usa três tipos de camadas: raster, símbolos e controles. Primeiro, [as camadas raster são renderizadas](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) em OpenGL, seguidas pelas [camadas de símbolos](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). As camadas de controle são renderizadas independentemente do OpenGL na interface do usuário de dispositivos Android ou iOS, sobre o mapa.

**Android:**
A maioria das camadas no Android são instanciadas no método [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) da classe `MapLayers`.

A ordem de cada camada depende de sua propriedade `zOrder` durante a instanciação e é definida no método [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) da classe `OsmAndMapLayer`.
Outras camadas podem ser instanciadas em plugins.

**iOS:**
A maioria das camadas no iOS são instanciadas no método [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) de `OAMapLayers`.

A ordem de cada camada é definida diretamente pela propriedade `baseOrder` em `createLayers`.
Outras camadas podem ser instanciadas em plugins.

## Tabelas de Ordem do Android {#android-order-tables}

### Android. Camadas raster {#android-raster-layers}

| Camada | Ordem/Intervalo | Tipo | Descrição |
| :-------------------------------- | -------------: | :--- | :---------------------------------------- |
| MapTileLayer (camada inferior) | -50 000 | Mapa | Camadas raster inferiores |
| MapTileLayer (camada principal) | 5 000 | Mapa | Camadas raster do mapa |
| ContourLinesLayer | 6 000 | Mapa | Não possui sua própria classe de camada; gerenciada pela MapTileLayer principal |
| TerrainLayer | 60 000 | Mapa | [Hillshade e declive](/docs/user/plugins/topography) |
| MapTileLayer (camada superior) | 70 000 | Mapa | Camadas raster superiores |

### Android. Camadas de símbolos {#android-symbols-layers}

| Camada / símbolos | Ordem/Intervalo | Tipo | Descrição |
| :-------------------------------- | -----------: | :------- | :----------------------------------------------------------------------------------------- |
| DownloadedRegionsLayer | -1 100 000 | Polígonos | Mostra regiões baixadas |
| Ícones (MapVectorLayer) | -1 000 000 | Pontos | Mapa vetorial, iconOrder no estilo com [adição de 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (linhas) | -500 000 | Linhas | Linhas de trilha |
| RouteLayer (ponto de destaque do gráfico) | -197 900 | Ponto | Análise de rota de navegação no mapa |
| RouteLayer (pontos do eixo x do gráfico) | -198 000 | Pontos | Análise de rota de navegação no mapa |
| RouteLayer (setas de curva) | -199 000 | Linhas | Rota de navegação |
| RouteLayer | -200 000 | Linhas | Rota de navegação |
| Texto (MapVectorLayer) | 1 - 255 | Texto | Mapa vetorial, textOrder no [estilo](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), 100 por padrão |
| Escudos (MapVectorLayer) | 1 - 255 | Escudos | Mapa vetorial, textOrder no estilo para escudos, 100 por padrão |
| Início e fim da trilha GPX | 90 101 | Pontos | GPXLayer |
| Ponto de passagem da trilha GPX | 90 300 | Pontos | GPXLayer |
| GPXLayer (nome do wpt) | 90 300 | Texto | Nome dos pontos de passagem |
| Ícone do gráfico da trilha GPX | 90 500 | Pontos | GPXLayer |
| Ícone selecionado da trilha GPX | 90 600 | Pontos | GPXLayer |
| Notas OSM (OsmBugsLayer) | 200 000 | Pontos | Notas OSM |
| Ícone de correção (OsmBugsLayer) | 200 000 | Pontos | Ícones de correção OSM |
| Texto de correção (OsmBugsLayer) | 200 000 | Texto | Texto de correção OSM |
| POIMapLayer (ícone) | 300 000 | Pontos | Sobreposição de POI |
| POIMapLayer (nome) | 300 000 | Texto | Nome da sobreposição de POI |
| AudioNotesLayer | 350 000 | Pontos | Plugin de notas de áudio/vídeo |
| OsmEditsLayer | 350 000 | Pontos | Plugin de edição OSM |
| FavoritesLayer | 400 000 | Pontos | Sobreposição de favoritos |
| TransportStopsLayer | 500 000 | Linhas | Linhas de transporte público |
| TransportStopsLayer | 500 001 | Pontos | Paradas de transporte público |
| MapTextLayer | 595 000 | Texto | Texto para diferentes camadas, renderização de tela |
| PointLocationLayer | 600 000 | Pontos | Minha localização |
| PointNavigationLayer | 700 000 | Pontos | Pontos de início/fim na navegação |
| PointNavigationLayer | 700 600 | Pontos | Ponto selecionado na navegação |
| MapMarkersLayer (linha) | 729 999 | Linhas | Linha tracejada para marcadores de mapa |
| MapMarkersLayer (texto) | 730 000 | Texto | Texto na linha. Renderização de tela |
| MapMarkersLayer (marcadores) | 730 000 | Pontos | Marcadores de mapa |
| ImpassableRoadsLayer | 750 000 | Pontos | Evitar estradas |
| ContextMenuLayer | 800 000 | Pontos | Pino do menu de contexto |
| MapillaryVectorLayer (linhas) | 1 000 000 | Linhas | Linhas Mapillary entre pontos |
| MapillaryVectorLayer (pontos) | 1 000 000 | Pontos | Pontos Mapillary |

### Android. Camadas de controle {#android-controls-layers}

| Camada de controle | Ordem/Intervalo | Descrição |
| :------------------------ | ----------: | :-------------------- |
| PreviewRouteLineLayer | 150 000 | Opções de rota de visualização |
| MeasurementToolLayer | 460 000 | |
| RadiusRulerControlLayer | 780 000 | Régua de raio |
| DistanceRulerControlLayer | 790 000 | Régua de distância |
| MapInfoLayer | 900 000 | Widgets |
| MapControlsLayer | 1 100 000 | |
| MapQuickActionLayer | 1 200 000 | |

## Tabelas de Ordem do iOS {#ios-order-tables}

### iOS. Camadas raster {#ios-raster-layers}

| Camada | Índice da camada | Descrição |
| :------------------------------ | ----------: | :---------------------------------------- |
| OAUnderlayMapLayer | -5 | Camadas raster inferiores |
| Camada raster (MapRasterLayerProvider) | 0 | Camadas raster do mapa |
| OATerrainMapLayer | 4 | [Linhas de contorno, hillshade e declive](/docs/user/plugins/topography) |
| OAOverlayMapLayer | 5 | Camadas raster superiores |
| OAMapillaryLayer | 10 | Camada Mapillary |
| OAWeatherRasterLayer | 20 | Clima |
| OAWeatherRasterLayer | 25 | Clima |
| OAWeatherContourLayer | 30 | Clima |

### iOS. Camadas de símbolos {#ios-symbols-layers}

| Camada / símbolos | Ordem/Intervalo | Tipo | Descrição |
| :--------------------------- | -----------: | :------- | :----------------------------------------------------------------------------------------- |
| Ícones | -1 000 000 | Pontos | Mapa vetorial, iconOrder no estilo com [adição de 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Texto | 1 - 255 | Texto | Mapa vetorial, textOrder no estilo, 100 por padrão |
| Escudos | 1 - 255 | Escudos | Mapa vetorial, textOrder no estilo para escudos, 100 por padrão |
| OADownloadedRegionsLayer | 10 000 | Polígonos | Mostra regiões verdes baixadas |
| Ícone POI (OAPOILayer) | 90 000 | Pontos | Sobreposição de POI |
| Nome POI (OAPOILayer) | 90 000 | Texto | Nome da sobreposição de POI |
| Linhas de trilha GPX (OAGPXLayer) | 100 000 | Linhas | Linhas de trilha |
| Nome do ponto de passagem GPX | 100 000 | Texto | Nome dos pontos de passagem GPX |
| Ícone do ponto de passagem GPX | 100 003 | Pontos | Pontos de passagem GPX |
| Início e fim da trilha GPX | 120 000 | Pontos | OAGPXLayer |
| Notas OSM (OAOsmBugsLayer) | 120 000 | Texto | Notas OSM |
| Texto de correção (OAOsmBugsLayer) | 120 000 | Texto | Texto de correção OSM |
| Ícone de correção (OAOsmBugsLayer) | 120 000 | Pontos | Ícone de correção OSM |
| OAOsmEditsLayer | 120 000 | Pontos | Plugin de edição OSM |
| OAPreviewRouteLineLayer | 120 000 | Linhas | Opções de rota de visualização |
| OATransportStopsLayer (linhas) | 120 000 | Linhas | Linhas de transporte público |
| OATransportStopsLayer (ícones) | 121 000 | Pontos | Paradas de transporte público |
| OARouteLayer | 150 000 | Linhas | Rota de navegação |
| OAFavoritesLayer | 160 000 | Pontos | Sobreposição de favoritos |
| Evitar estradas (OAImpassableRoadsLayer) | 205 998 | Pontos | Evitar estradas |
| Minha localização (OAMyPositionLayer) | 206 001 | Pontos | Minha localização |
| Marcadores de mapa (OADestinationsLayer) | 207 000 | Pontos | Marcadores de mapa |
| Marcadores de mapa (texto na linha) | 207 000 | Texto | Texto na linha para marcadores de mapa |
| Navegação (pontos) | 207 015 | Pontos | OARouteLayer |
| Navegação (minha localização) | 207 025 | Pontos | OARouteLayer |
| Navegação (setas na rota) | 208 000 | Pontos | OARouteLayer |
| OARoutePointsLayer | 209 000 | Pontos | Pontos de navegação |

### iOS. Camadas de controle {#ios-controls-layers}

| Camada de controle | Ordem/Intervalo | Descrição |
| :------------------------ | ----------: | :-------------- |
| OAGPXRecLayer | 110 000 | Editando GPX |
| OAMeasurementToolLayer | 160 000 | |
| OARulerByTapControlLayer | 170 000 | Régua de distância |
| OAContextMenuLayer | 210 000 | |