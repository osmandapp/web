---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Відображення шарів карти {#map-layers-rendering}

Карта OsmAnd відображається шарами знизу вгору. Деякі шари покривають весь екран карти, тоді як інші відображаються з прозорістю. Порядок шарів завжди однаковий, тому важливо стежити за тим, що відображається і в якому порядку.

## Порядок шарів {#order-of-layers}

OsmAnd використовує три типи шарів: растрові, символьні та контрольні. Спочатку [растрові шари відображаються](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) в OpenGL, потім [символьні шари](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Контрольні шари відображаються незалежно від OpenGL в інтерфейсі користувача пристроїв Android або iOS, поверх карти.

**Android:**  
Більшість шарів на Android створюються в методі [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) класу `MapLayers`.

Порядок кожного шару залежить від його властивості `zOrder` під час створення і встановлюється в методі [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) класу `OsmAndMapLayer`.  
Інші шари можуть створюватися в плагінах.

**iOS:**  
Більшість шарів на iOS створюються в методі [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) класу `OAMapLayers`.

Порядок кожного шару встановлюється безпосередньо властивістю `baseOrder` в `createLayers`.  
Інші шари можуть створюватися в плагінах.


## Таблиці порядку шарів Android {#android-order-tables}

### Android. Растрові шари {#android-raster-layers}

| Шар                             | Порядок/Діапазон | Тип  | Опис                                  |
| --------------------------------- | -------------: | ---- | ------------------------------------- |
| MapTileLayer (підкладка)           | -50 000        | Карта  | Растрові тайли підкладки                 |
| MapTileLayer (основний шар)         | 5 000          | Карта  | Растрові тайли карти                      |
| ContourLinesLayer                 | 6 000          | Карта  | Не має власного класу шару; керується основним MapTileLayer |
| TerrainLayer                      | 60 000         | Карта  | [Затінення рельєфу та схили](/docs/user/plugins/topography)           |
| MapTileLayer (накладка)            | 70 000         | Карта  | Растрові тайли накладки                  |

### Android. Символьні шари {#android-symbols-layers}

| Шар / символи                   | Порядок/Діапазон | Тип     | Опис                                                        |
| --------------------------------- | -----------: | -------- | ------------------------------------------------------------------ |
| DownloadedRegionsLayer            | -1 100 000   | Полігони | Показує завантажені регіони          |
| Іконки (MapVectorLayer)            | -1 000 000   | Точки   | Векторна карта, iconOrder у стилі з [додаванням 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (лінії)                  | -500 000     | Лінії    | Лінії треку             |
| RouteLayer (точка виділення на графіку)| -197 900     | Точка    | Аналіз навігаційного маршруту на карті  |
| RouteLayer (точки осі x на графіку)  | -198 000     | Точки   | Аналіз навігаційного маршруту на карті  |
| RouteLayer (стрілки поворотів)          | -199 000     | Лінії    | Навігаційний маршрут                  |
| RouteLayer                        | -200 000     | Лінії    | Навігаційний маршрут                  |
| Текст (MapVectorLayer)             | 1 - 255      | Текст     | Векторна карта, textOrder у [стилі](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), за замовчуванням 100                 |
| Щити (MapVectorLayer)             | 1 - 255       | Щити  | Векторна карта, textOrder у стилі для щитів, за замовчуванням 100 |
| Початок, кінець GPX треку           | 90 101       | Точки   | GPXLayer                          |
| Точка маршруту GPX                | 90 300       | Точки   | GPXLayer                          |
| GPXLayer (назва точки маршруту)               | 90 300       | Текст     | Назва точок маршруту                    |
| Іконка графіка GPX треку              | 90 500       | Точки   | GPXLayer                          |
| Вибрана іконка GPX треку           | 90 600       | Точки   | GPXLayer                          |
| Примітки OSM (OsmBugsLayer)          | 200 000      | Точки   | Примітки OSM                         |
| Іконка Fixme (OsmBugsLayer)         | 200 000      | Точки   | Іконки OSM fixme                   |
| Текст Fixme (OsmBugsLayer)         | 200 000      | Текст     | Текст OSM fixme                    |
| POIMapLayer (іконка)                | 300 000      | Точки   | Накладка POI                       |
| POIMapLayer (назва)                | 300 000      | Текст     | Назва накладки POI                  |
| AudioNotesLayer                   | 350 000      | Точки   | Плагін аудіо/відео нотаток          |
| OsmEditsLayer                     | 350 000      | Точки   | Плагін редагування OSM                   |
| FavoritesLayer                    | 400 000      | Точки   | Накладка обраного                 |
| TransportStopsLayer               | 500 000      | Лінії    | Лінії громадського транспорту            |
| TransportStopsLayer               | 500 001      | Точки   | Зупинки громадського транспорту            |
| MapTextLayer                      | 595 000      | Текст     | Текст для різних шарів, відображення на полотні |
| PointLocationLayer                | 600 000      | Точки   | Моє місцезнаходження                       |
| PointNavigationLayer              | 700 000      | Точки   | Точки початку/кінця в навігації |
| PointNavigationLayer              | 700 600      | Точки   | Вибрана точка в навігації      |
| MapMarkersLayer (лінія)            | 729 999      | Лінії    | Пунктирна лінія до маркерів карти        |
| MapMarkersLayer (текст)            | 730 000      | Текст     | Текст на лінії. Відображення на полотні    |
| MapMarkersLayer (маркери)         | 730 000      | Точки   | Маркери карти                       |
| ImpassableRoadsLayer              | 750 000      | Точки   | Уникати доріг                       |
| ContextMenuLayer                  | 800 000      | Точки   | Шпиль контекстного меню               |
| MapillaryVectorLayer (лінії)      | 1 000 000    | Лінії    | Лінії Mapillary між точками    |
| MapillaryVectorLayer (точки)      | 1 000 000    | Точки   | Точки Mapillary                  |

### Android. Контрольні шари {#android-controls-layers}

| Контрольний шар             | Порядок/Діапазон | Опис           |
| ------------------------- | ----------: | --------------------- |
| PreviewRouteLineLayer     | 150 000     | Параметри попереднього перегляду маршруту |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Лінійка радіуса          |
| DistanceRulerControlLayer | 790 000     | Лінійка відстані        |
| MapInfoLayer              | 900 000     | Віджети               |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |


## Таблиці порядку шарів iOS {#ios-order-tables}

### iOS. Растрові шари {#ios-raster-layers}

| Шар                           | Індекс шару | Опис                                  |
| ------------------------------- | ----------: | ------------------------------------- |
| OAUnderlayMapLayer              | -5          | Растрові тайли підкладки                 |
| Растровий шар (MapRasterLayerProvider) | 0     | Растрові тайли карти                      |
| OATerrainMapLayer                | 4          | [Контурні лінії, затінення рельєфу та схили](/docs/user/plugins/topography) |
| OAOverlayMapLayer                | 5          | Растрові тайли накладки                  |
| OAMapillaryLayer                 | 10         | Шар Mapillary                       |
| OAWeatherRasterLayer             | 20         | Погода                               |
| OAWeatherRasterLayer             | 25         | Погода                               |
| OAWeatherContourLayer            | 30         | Погода                               |

### iOS. Символьні шари {#ios-symbols-layers}

| Шар / символи              | Порядок/Діапазон | Тип     | Опис                                                                                |
| ---------------------------- | -----------: | -------- | ------------------------------------------------------------------------------------------ |
| Іконки                        | -1 000 000   | Точки   | Векторна карта, iconOrder у стилі з [додаванням 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Текст                         | 1 - 255      | Текст     | Векторна карта, textOrder у стилі, за замовчуванням 100             |
| Щити                      | 1 - 255      | Щити  | Векторна карта, textOrder у стилі для щитів, за замовчуванням 100 |
| OADownloadedRegionsLayer     | 10 000       | Полігони | Показує завантажені зелені регіони |
| Іконка POI (OAPOILayer)        | 90 000       | Точки   | Накладка POI                 |
| Назва POI (OAPOILayer)        | 90 000       | Текст     | Назва накладки POI            |
| Лінії GPX треку (OAGPXLayer) | 100 000      | Лінії    | Лінії треку                 |
| Назва точки маршруту GPX            | 100 000      | Текст     | Назва точок маршруту GPX          |
| Іконка точки маршруту GPX            | 100 003      | Точки   | Точки маршруту GPX               |
| Початок, кінець GPX треку      | 120 000      | Точки   | OAGPXLayer                  |
| Примітки OSM (OAOsmBugsLayer)   | 120 000      | Текст     | Примітки OSM                   |
| Текст Fixme (OAOsmBugsLayer)  | 120 000      | Текст     | Текст OSM fixme              |
| Іконка Fixme (OAOsmBugsLayer)  | 120 000      | Точки   | Іконка OSM fixme              |
| OAOsmEditsLayer              | 120 000      | Точки   | Плагін редагування OSM             |
| OAPreviewRouteLineLayer      | 120 000      | Лінії    | Параметри попереднього перегляду маршруту       |
| OATransportStopsLayer (лінії)| 120 000      | Лінії    | Лінії громадського транспорту       |
| OATransportStopsLayer (іконки)| 121 000      | Точки   | Зупинки громадського транспорту      |
| OARouteLayer                 | 150 000      | Лінії    | Навігаційний маршрут            |
| OAFavoritesLayer             | 160 000      | Точки   | Накладка обраного           |
| Уникати доріг (OAImpassableRoadsLayer) | 205 998 | Точки | Уникати доріг                |
| Моє місцезнаходження (OAMyPositionLayer)      | 206 001 | Точки | Моє місцезнаходження                |
| Маркери карти (OADestinationsLayer)    | 207 000 | Точки | Маркери карти                |
| Маркери карти (текст на лінії)   | 207 000      | Текст     | Текст на лінії до маркерів карти |
| Навігація (точки)          | 207 015      | Точки   | OARouteLayer                |
| Навігація (моє місцезнаходження)     | 207 025      | Точки   | OARouteLayer                |
| Навігація (стрілки на маршруті) | 208 000      | Точки   | OARouteLayer                |
| OARoutePointsLayer           | 209 000      | Точки   | Точки навігації           |

### iOS. Контрольні шари {#ios-controls-layers}

| Контрольний шар            | Порядок/Діапазон | Опис    |
| ------------------------ | ----------: | -------------  |
| OAGPXRecLayer            | 110 000     | Редагування GPX    |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Лінійка відстані |
| OAContextMenuLayer       | 210 000     |                |