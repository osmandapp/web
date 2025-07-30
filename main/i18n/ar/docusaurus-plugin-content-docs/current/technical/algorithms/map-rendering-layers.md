---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# عرض طبقات الخريطة {#map-layers-rendering}

يتم عرض خريطة OsmAnd على شكل طبقات من الأسفل إلى الأعلى. تغطي بعض الطبقات شاشة الخريطة بأكملها، بينما يتم عرض البعض الآخر بشفافية. ترتيب الطبقات ثابت دائمًا، لذا من المهم تتبع ما يتم عرضه وبأي ترتيب.

## ترتيب الطبقات {#order-of-layers}

يستخدم OsmAnd ثلاثة أنواع من الطبقات: النقطية، والرموز، وعناصر التحكم. أولاً، [يتم عرض الطبقات النقطية](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) في OpenGL، تليها [طبقات الرموز](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). يتم عرض طبقات التحكم بشكل مستقل عن OpenGL في واجهة المستخدم لأجهزة Android أو iOS، فوق الخريطة.

**Android:**
يتم إنشاء معظم الطبقات على Android في طريقة [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) من فئة `MapLayers`.

يعتمد ترتيب كل طبقة على خاصية `zOrder` الخاصة بها أثناء الإنشاء ويتم تعيينها في طريقة [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) من فئة `OsmAndMapLayer`.
قد يتم إنشاء طبقات أخرى في المكونات الإضافية.

**iOS:**
يتم إنشاء معظم الطبقات على iOS في طريقة [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) من `OAMapLayers`.

يتم تعيين ترتيب كل طبقة مباشرة بواسطة خاصية `baseOrder` في `createLayers`.
قد يتم إنشاء طبقات أخرى في المكونات الإضافية.

## جداول ترتيب Android {#android-order-tables}

### Android. الطبقات النقطية {#android-raster-layers}

| الطبقة                             | الترتيب/النطاق | النوع | الوصف                                     |
| :-------------------------------- | -------------: | :--- | :---------------------------------------- |
| MapTileLayer (طبقة سفلية)         | -50 000        | خريطة | بلاط نقطي كطبقة سفلية                     |
| MapTileLayer (الطبقة الرئيسية)     | 5 000          | خريطة | بلاط الخريطة النقطي                       |
| ContourLinesLayer                 | 6 000          | خريطة | لا تملك فئة طبقة خاصة بها؛ تُدار بواسطة MapTileLayer الرئيسية |
| TerrainLayer                      | 60 000         | خريطة | [تظليل التلال والمنحدرات](/docs/user/plugins/topography) |
| MapTileLayer (طبقة علوية)         | 70 000         | خريطة | بلاط نقطي كطبقة علوية                     |

### Android. طبقات الرموز {#android-symbols-layers}

| الطبقة / الرموز                    | الترتيب/النطاق | النوع     | الوصف                                                                                                    |
| :-------------------------------- | -----------: | :------- | :------------------------------------------------------------------------------------------------------- |
| DownloadedRegionsLayer            | -1 100 000   | مضلعات   | تُظهر المناطق التي تم تنزيلها                                                                            |
| الأيقونات (MapVectorLayer)        | -1 000 000   | نقاط     | خريطة متجهة، ترتيب الأيقونات في النمط مع [إضافة 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (خطوط)                   | -500 000     | خطوط     | خطوط المسار                                                                                             |
| RouteLayer (نقطة تمييز المخطط)    | -197 900     | نقطة     | تحليل مسار الملاحة على الخريطة                                                                           |
| RouteLayer (نقاط محور س المخطط)   | -198 000     | نقاط     | تحليل مسار الملاحة على الخريطة                                                                           |
| RouteLayer (أسهم الانعطاف)        | -199 000     | خطوط     | مسار الملاحة                                                                                             |
| RouteLayer                        | -200 000     | خطوط     | مسار الملاحة                                                                                             |
| النص (MapVectorLayer)             | 1 - 255      | نص       | خريطة متجهة، ترتيب النص في [النمط](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml)، 100 افتراضيًا |
| الدروع (MapVectorLayer)           | 1 - 255      | دروع     | خريطة متجهة، ترتيب النص في النمط للدروع، 100 افتراضيًا                                                   |
| بداية ونهاية مسار GPX             | 90 101       | نقاط     | GPXLayer                                                                                                |
| نقطة طريق GPX                     | 90 300       | نقاط     | GPXLayer                                                                                                |
| GPXLayer (اسم نقطة الطريق)        | 90 300       | نص       | اسم نقاط الطريق                                                                                         |
| أيقونة مخطط مسار GPX              | 90 500       | نقاط     | GPXLayer                                                                                                |
| أيقونة مسار GPX المحددة           | 90 600       | نقاط     | GPXLayer                                                                                                |
| ملاحظات OSM (OsmBugsLayer)        | 200 000      | نقاط     | ملاحظات OSM                                                                                             |
| أيقونة Fixme (OsmBugsLayer)       | 200 000      | نقاط     | أيقونات Fixme في OSM                                                                                    |
| نص Fixme (OsmBugsLayer)           | 200 000      | نص       | نص Fixme في OSM                                                                                          |
| POIMapLayer (أيقونة)              | 300 000      | نقاط     | تراكب POI                                                                                               |
| POIMapLayer (اسم)                | 300 000      | نص       | اسم تراكب POI                                                                                           |
| AudioNotesLayer                   | 350 000      | نقاط     | مكون إضافي للملاحظات الصوتية/المرئية                                                                     |
| OsmEditsLayer                     | 350 000      | نقاط     | مكون إضافي لتحرير OSM                                                                                   |
| FavoritesLayer                    | 400 000      | نقاط     | تراكب المفضلة                                                                                           |
| TransportStopsLayer               | 500 000      | خطوط     | خطوط النقل العام                                                                                         |
| TransportStopsLayer               | 500 001      | نقاط     | محطات النقل العام                                                                                       |
| MapTextLayer                      | 595 000      | نص       | نص لطبقات مختلفة، عرض لوحة الرسم                                                                         |
| PointLocationLayer                | 600 000      | نقاط     | موقعي                                                                                                   |
| PointNavigationLayer              | 700 000      | نقاط     | نقاط البداية/النهاية في الملاحة                                                                          |
| PointNavigationLayer              | 700 600      | نقاط     | النقطة المحددة في الملاحة                                                                                |
| MapMarkersLayer (خط)              | 729 999      | خطوط     | خط متقطع إلى علامات الخريطة                                                                              |
| MapMarkersLayer (نص)              | 730 000      | نص       | نص على الخط. عرض لوحة الرسم                                                                              |
| MapMarkersLayer (علامات)          | 730 000      | نقاط     | علامات الخريطة                                                                                           |
| ImpassableRoadsLayer              | 750 000      | نقاط     | تجنب الطرق                                                                                              |
| ContextMenuLayer                  | 800 000      | نقاط     | دبوس قائمة السياق                                                                                       |
| MapillaryVectorLayer (خطوط)       | 1 000 000    | خطوط     | خطوط Mapillary بين النقاط                                                                               |
| MapillaryVectorLayer (نقاط)       | 1 000 000    | نقاط     | نقاط Mapillary                                                                                          |

### Android. طبقات التحكم {#android-controls-layers}

| طبقة التحكم                | الترتيب/النطاق | الوصف                 |
| :------------------------- | -----------: | :-------------------- |
| PreviewRouteLineLayer      | 150 000      | خيارات معاينة المسار  |
| MeasurementToolLayer       | 460 000      |                       |
| RadiusRulerControlLayer    | 780 000      | مسطرة نصف القطر       |
| DistanceRulerControlLayer  | 790 000      | مسطرة المسافة         |
| MapInfoLayer               | 900 000      | الأدوات المصغرة       |
| MapControlsLayer           | 1 100 000    |                       |
| MapQuickActionLayer        | 1 200 000    |                       |

## جداول ترتيب iOS {#ios-order-tables}

### iOS. الطبقات النقطية {#ios-raster-layers}

| الطبقة                            | فهرس الطبقة | الوصف                                     |
| :-------------------------------- | ----------: | :---------------------------------------- |
| OAUnderlayMapLayer                | -5          | بلاط نقطي كطبقة سفلية                     |
| طبقة نقطية (MapRasterLayerProvider) | 0         | بلاط الخريطة النقطي                       |
| OATerrainMapLayer                 | 4           | [خطوط الكنتور، تظليل التلال والمنحدرات](/docs/user/plugins/topography) |
| OAOverlayMapLayer                 | 5           | بلاط نقطي كطبقة علوية                     |
| OAMapillaryLayer                  | 10          | طبقة Mapillary                            |
| OAWeatherRasterLayer              | 20          | الطقس                                     |
| OAWeatherRasterLayer              | 25          | الطقس                                     |
| OAWeatherContourLayer             | 30          | الطقس                                     |

### iOS. طبقات الرموز {#ios-symbols-layers}

| الطبقة / الرموز                   | الترتيب/النطاق | النوع     | الوصف                                                                                                    |
| :------------------------------- | -----------: | :------- | :------------------------------------------------------------------------------------------------------- |
| الأيقونات                         | -1 000 000   | نقاط     | خريطة متجهة، ترتيب الأيقونات في النمط مع [إضافة 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| النص                             | 1 - 255      | نص       | خريطة متجهة، ترتيب النص في النمط، 100 افتراضيًا                                                          |
| الدروع                           | 1 - 255      | دروع     | خريطة متجهة، ترتيب النص في النمط للدروع، 100 افتراضيًا                                                   |
| OADownloadedRegionsLayer         | 10 000       | مضلعات   | تُظهر المناطق الخضراء التي تم تنزيلها                                                                    |
| أيقونة POI (OAPOILayer)          | 90 000       | نقاط     | تراكب POI                                                                                               |
| اسم POI (OAPOILayer)             | 90 000       | نص       | اسم تراكب POI                                                                                           |
| خطوط مسار GPX (OAGPXLayer)       | 100 000      | خطوط     | خطوط المسار                                                                                             |
| اسم نقطة طريق GPX                | 100 000      | نص       | اسم نقاط طريق GPX                                                                                       |
| أيقونة نقطة طريق GPX              | 100 003      | نقاط     | نقاط طريق GPX                                                                                           |
| بداية ونهاية مسار GPX             | 120 000      | نقاط     | OAGPXLayer                                                                                              |
| ملاحظات OSM (OAOsmBugsLayer)     | 120 000      | نص       | ملاحظات OSM                                                                                             |
| نص Fixme (OAOsmBugsLayer)        | 120 000      | نص       | نص Fixme في OSM                                                                                          |
| أيقونة Fixme (OAOsmBugsLayer)     | 120 000      | نقاط     | أيقونة Fixme في OSM                                                                                      |
| OAOsmEditsLayer                  | 120 000      | نقاط     | مكون إضافي لتحرير OSM                                                                                   |
| OAPreviewRouteLineLayer          | 120 000      | خطوط     | خيارات معاينة المسار                                                                                     |
| OATransportStopsLayer (خطوط)     | 120 000      | خطوط     | خطوط النقل العام                                                                                         |
| OATransportStopsLayer (أيقونات)  | 121 000      | نقاط     | محطات النقل العام                                                                                       |
| OARouteLayer                     | 150 000      | خطوط     | مسار الملاحة                                                                                             |
| OAFavoritesLayer                 | 160 000      | نقاط     | تراكب المفضلة                                                                                           |
| تجنب الطرق (OAImpassableRoadsLayer) | 205 998    | نقاط     | تجنب الطرق                                                                                              |
| موقعي (OAMyPositionLayer)         | 206 001      | نقاط     | موقعي                                                                                                   |
| علامات الخريطة (OADestinationsLayer) | 207 000    | نقاط     | علامات الخريطة                                                                                           |
| علامات الخريطة (نص على الخط)     | 207 000      | نص       | نص على الخط إلى علامات الخريطة                                                                           |
| الملاحة (نقاط)                   | 207 015      | نقاط     | OARouteLayer                                                                                             |
| الملاحة (موقعي)                  | 207 025      | نقاط     | OARouteLayer                                                                                             |
| الملاحة (أسهم على المسار)        | 208 000      | نقاط     | OARouteLayer                                                                                             |
| OARoutePointsLayer               | 209 000      | نقاط     | نقاط الملاحة                                                                                             |

### iOS. طبقات التحكم {#ios-controls-layers}

| طبقة التحكم               | الترتيب/النطاق | الوصف            |
| :------------------------ | -----------: | :--------------- |
| OAGPXRecLayer             | 110 000      | تحرير GPX         |
| OAMeasurementToolLayer    | 160 000      |                  |
| OARulerByTapControlLayer  | 170 000      | مسطرة المسافة     |
| OAContextMenuLayer        | 210 000      |                  |