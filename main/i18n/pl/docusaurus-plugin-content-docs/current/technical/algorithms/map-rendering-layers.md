---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Renderowanie warstw mapy {#map-layers-rendering}

Mapa OsmAnd jest renderowana warstwami od dołu do góry. Niektóre warstwy pokrywają cały ekran mapy, podczas gdy inne są renderowane z przezroczystością. Kolejność warstw jest zawsze taka sama, dlatego ważne jest, aby śledzić, co jest wyświetlane i w jakiej kolejności.

## Kolejność warstw {#order-of-layers}

OsmAnd używa trzech typów warstw: rastrowych, symboli i kontrolnych. Najpierw [renderowane są warstwy rastrowe](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) w OpenGL, a następnie [warstwy symboli](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Warstwy kontrolne są renderowane niezależnie od OpenGL w interfejsie użytkownika urządzeń z systemem Android lub iOS, na wierzchu mapy.

**Android:**
Większość warstw na Androidzie jest instancjonowana w metodzie [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) klasy `MapLayers`.

Kolejność każdej warstwy zależy od jej właściwości `zOrder` podczas instancjonowania i jest ustawiana w metodzie [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) klasy `OsmAndMapLayer`.
Inne warstwy mogą być instancjonowane w wtyczkach.

**iOS:**
Większość warstw na iOS jest instancjonowana w metodzie [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) klasy `OAMapLayers`.

Kolejność każdej warstwy jest ustawiana bezpośrednio przez właściwość `baseOrder` w `createLayers`.
Inne warstwy mogą być instancjonowane w wtyczkach.

## Tabele kolejności dla Androida {#android-order-tables}

### Android. Warstwy rastrowe {#android-raster-layers}

| Warstwa                           | Kolejność/Zakres | Typ | Opis                                     |
| :-------------------------------- | ---------------: | :-- | :--------------------------------------- |
| MapTileLayer (podkład)            | -50 000          | Mapa | Podkład z kafelków rastrowych            |
| MapTileLayer (główna warstwa)     | 5 000            | Mapa | Kafelki mapy rastrowej                   |
| ContourLinesLayer                 | 6 000            | Mapa | Nie ma własnej klasy warstwy; zarządzana przez główną warstwę MapTileLayer |
| TerrainLayer                      | 60 000           | Mapa | [Cieniowanie wzgórz i nachylenie](/docs/user/plugins/topography) |
| MapTileLayer (nakładka)           | 70 000           | Mapa | Nakładka z kafelków rastrowych           |

### Android. Warstwy symboli {#android-symbols-layers}

| Warstwa / symbole                 | Kolejność/Zakres | Typ      | Opis                                                         |
| :-------------------------------- | ---------------: | :------- | :----------------------------------------------------------- |
| DownloadedRegionsLayer            | -1 100 000       | Poligony | Pokazuje pobrane regiony                                     |
| Ikony (MapVectorLayer)            | -1 000 000       | Punkty   | Mapa wektorowa, iconOrder w stylu z [dodaniem 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (linie)                  | -500 000         | Linie    | Linie śladu                                                  |
| RouteLayer (punkt podświetlenia wykresu) | -197 900     | Punkt    | Analiza trasy nawigacji na mapie                             |
| RouteLayer (punkty osi x wykresu) | -198 000         | Punkty   | Analiza trasy nawigacji na mapie                             |
| RouteLayer (strzałki skrętu)      | -199 000         | Linie    | Trasa nawigacji                                              |
| RouteLayer                        | -200 000         | Linie    | Trasa nawigacji                                              |
| Tekst (MapVectorLayer)            | 1 - 255          | Tekst    | Mapa wektorowa, textOrder w [stylu](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), domyślnie 100 |
| Tarcze (MapVectorLayer)           | 1 - 255          | Tarcze   | Mapa wektorowa, textOrder w stylu dla tarcz, domyślnie 100   |
| Początek, koniec śladu GPX        | 90 101           | Punkty   | GPXLayer                                                     |
| Punkt trasy GPX                   | 90 300           | Punkty   | GPXLayer                                                     |
| GPXLayer (nazwa wpt)              | 90 300           | Tekst    | Nazwa punktów trasy                                          |
| Ikona wykresu śladu GPX           | 90 500           | Punkty   | GPXLayer                                                     |
| Wybrana ikona śladu GPX           | 90 600           | Punkty   | GPXLayer                                                     |
| Notatki OSM (OsmBugsLayer)        | 200 000          | Punkty   | Notatki OSM                                                  |
| Ikona Fixme (OsmBugsLayer)        | 200 000          | Punkty   | Ikony Fixme OSM                                              |
| Tekst Fixme (OsmBugsLayer)        | 200 000          | Tekst    | Tekst Fixme OSM                                              |
| POIMapLayer (ikona)               | 300 000          | Punkty   | Nakładka POI                                                 |
| POIMapLayer (nazwa)               | 300 000          | Tekst    | Nazwa nakładki POI                                           |
| AudioNotesLayer                   | 350 000          | Punkty   | Wtyczka do notatek audio/wideo                               |
| OsmEditsLayer                     | 350 000          | Punkty   | Wtyczka do edycji OSM                                        |
| FavoritesLayer                    | 400 000          | Punkty   | Nakładka Ulubione                                            |
| TransportStopsLayer               | 500 000          | Linie    | Linie transportu publicznego                                 |
| TransportStopsLayer               | 500 001          | Punkty   | Przystanki transportu publicznego                            |
| MapTextLayer                      | 595 000          | Tekst    | Tekst dla różnych warstw, renderowanie na płótnie            |
| PointLocationLayer                | 600 000          | Punkty   | Moja lokalizacja                                             |
| PointNavigationLayer              | 700 000          | Punkty   | Punkty początkowe/końcowe w nawigacji                        |
| PointNavigationLayer              | 700 600          | Punkty   | Wybrany punkt w nawigacji                                    |
| MapMarkersLayer (linia)           | 729 999          | Linie    | Linia przerywana do znaczników mapy                          |
| MapMarkersLayer (tekst)           | 730 000          | Tekst    | Tekst na linii. Renderowanie na płótnie                      |
| MapMarkersLayer (znaczniki)       | 730 000          | Punkty   | Znaczniki mapy                                               |
| ImpassableRoadsLayer              | 750 000          | Punkty   | Unikaj dróg                                                  |
| ContextMenuLayer                  | 800 000          | Punkty   | Pin menu kontekstowego                                       |
| MapillaryVectorLayer (linie)      | 1 000 000        | Linie    | Linie Mapillary między punktami                              |
| MapillaryVectorLayer (punkty)     | 1 000 000        | Punkty   | Punkty Mapillary                                             |

### Android. Warstwy kontrolne {#android-controls-layers}

| Warstwa kontrolna         | Kolejność/Zakres | Opis                      |
| :------------------------ | ---------------: | :------------------------ |
| PreviewRouteLineLayer     | 150 000          | Opcje podglądu trasy      |
| MeasurementToolLayer      | 460 000          |                           |
| RadiusRulerControlLayer   | 780 000          | Linijka promienia         |
| DistanceRulerControlLayer | 790 000          | Linijka odległości        |
| MapInfoLayer              | 900 000          | Widżety                   |
| MapControlsLayer          | 1 100 000        |                           |
| MapQuickActionLayer       | 1 200 000        |                           |

## Tabele kolejności dla iOS {#ios-order-tables}

### iOS. Warstwy rastrowe {#ios-raster-layers}

| Warstwa                           | Indeks warstwy | Opis                                     |
| :-------------------------------- | -------------: | :--------------------------------------- |
| OAUnderlayMapLayer                | -5             | Podkład z kafelków rastrowych            |
| Warstwa rastrowa (MapRasterLayerProvider) | 0      | Kafelki mapy rastrowej                   |
| OATerrainMapLayer                 | 4              | [Linie konturowe, cieniowanie wzgórz i nachylenie](/docs/user/plugins/topography) |
| OAOverlayMapLayer                 | 5              | Nakładka z kafelków rastrowych           |
| OAMapillaryLayer                  | 10             | Warstwa Mapillary                        |
| OAWeatherRasterLayer              | 20             | Pogoda                                   |
| OAWeatherRasterLayer              | 25             | Pogoda                                   |
| OAWeatherContourLayer             | 30             | Pogoda                                   |

### iOS. Warstwy symboli {#ios-symbols-layers}

| Warstwa / symbole                 | Kolejność/Zakres | Typ      | Opis                                                         |
| :-------------------------------- | ---------------: | :------- | :----------------------------------------------------------- |
| Ikony                             | -1 000 000       | Punkty   | Mapa wektorowa, iconOrder w stylu z [dodaniem 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Tekst                             | 1 - 255          | Tekst    | Mapa wektorowa, textOrder w stylu, domyślnie 100             |
| Tarcze                            | 1 - 255          | Tarcze   | Mapa wektorowa, textOrder w stylu dla tarcz, domyślnie 100   |
| OADownloadedRegionsLayer          | 10 000           | Poligony | Pokazuje pobrane zielone regiony                             |
| Ikona POI (OAPOILayer)            | 90 000           | Punkty   | Nakładka POI                                                 |
| Nazwa POI (OAPOILayer)            | 90 000           | Tekst    | Nazwa nakładki POI                                           |
| Linie śladu GPX (OAGPXLayer)      | 100 000          | Linie    | Linie śladu                                                  |
| Nazwa punktu trasy GPX            | 100 000          | Tekst    | Nazwa punktów trasy GPX                                      |
| Ikona punktu trasy GPX            | 100 003          | Punkty   | Punkty trasy GPX                                             |
| Początek, koniec śladu GPX        | 120 000          | Punkty   | OAGPXLayer                                                   |
| Notatki OSM (OAOsmBugsLayer)      | 120 000          | Tekst    | Notatki OSM                                                  |
| Tekst Fixme (OAOsmBugsLayer)      | 120 000          | Tekst    | Tekst Fixme OSM                                              |
| Ikona Fixme (OAOsmBugsLayer)      | 120 000          | Punkty   | Ikona Fixme OSM                                              |
| OAOsmEditsLayer                   | 120 000          | Punkty   | Edytuj wtyczkę OSM                                           |
| OAPreviewRouteLineLayer           | 120 000          | Linie    | Opcje podglądu trasy                                         |
| OATransportStopsLayer (linie)     | 120 000          | Linie    | Linie transportu publicznego                                 |
| OATransportStopsLayer (ikony)     | 121 000          | Punkty   | Przystanki transportu publicznego                            |
| OARouteLayer                      | 150 000          | Linie    | Trasa nawigacji                                              |
| OAFavoritesLayer                  | 160 000          | Punkty   | Nakładka Ulubione                                            |
| Unikaj dróg (OAImpassableRoadsLayer) | 205 998       | Punkty   | Unikaj dróg                                                  |
| Moja lokalizacja (OAMyPositionLayer) | 206 001      | Punkty   | Moja lokalizacja                                             |
| Znaczniki mapy (OADestinationsLayer) | 207 000      | Punkty   | Znaczniki mapy                                               |
| Znaczniki mapy (tekst na linii)   | 207 000          | Tekst    | Tekst na linii do znaczników mapy                            |
| Nawigacja (punkty)                | 207 015          | Punkty   | OARouteLayer                                                 |
| Nawigacja (moja lokalizacja)      | 207 025          | Punkty   | OARouteLayer                                                 |
| Nawigacja (strzałki na trasie)    | 208 000          | Punkty   | OARouteLayer                                                 |
| OARoutePointsLayer                | 209 000          | Punkty   | Punkty nawigacji                                             |

### iOS. Warstwy kontrolne {#ios-controls-layers}

| Warstwa kontrolna          | Kolejność/Zakres | Opis           |
| :------------------------- | ---------------: | :------------- |
| OAGPXRecLayer              | 110 000          | Edycja GPX     |
| OAMeasurementToolLayer     | 160 000          |                |
| OARulerByTapControlLayer   | 170 000          | Linijka odległości |
| OAContextMenuLayer         | 210 000          |                |
