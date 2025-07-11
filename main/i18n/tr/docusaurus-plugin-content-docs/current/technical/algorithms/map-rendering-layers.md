---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Harita Katmanları Oluşturma {#map-layers-rendering}

OsmAnd haritası, katmanlar halinde alttan üste doğru oluşturulur. Bazı katmanlar tüm harita ekranını kaplarken, diğerleri şeffaflıkla oluşturulur. Katmanların sırası her zaman aynıdır, bu nedenle neyin ve hangi sırayla görüntülendiğini takip etmek önemlidir.

## Katmanların Sırası {#order-of-layers}

OsmAnd üç tür katman kullanır: raster, semboller ve kontroller. İlk olarak, [raster katmanlar](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) OpenGL'de oluşturulur, ardından [sembol katmanları](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200) gelir. Kontrol katmanları, Android veya iOS cihazlarının kullanıcı arayüzünde, haritanın üzerinde, OpenGL'den bağımsız olarak oluşturulur.

**Android:**
Android'deki çoğu katman, `MapLayers` sınıfının [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) yönteminde örneklendirilir.

Her katmanın sırası, örneklendirme sırasındaki `zOrder` özelliğine bağlıdır ve `OsmAndMapLayer` sınıfının [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) yönteminde ayarlanır.
Diğer katmanlar eklentilerde örneklendirilebilir.

**iOS:**
iOS'taki çoğu katman, `OAMapLayers`'ın [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) yönteminde örneklendirilir.

Her katmanın sırası, `createLayers` içindeki `baseOrder` özelliği tarafından doğrudan ayarlanır.
Diğer katmanlar eklentilerde örneklendirilebilir.

## Android Sıra Tabloları {#android-order-tables}

### Android. Raster katmanları {#android-raster-layers}

| Katman                            | Sıra/Aralık   | Tür  | Açıklama                              |
| --------------------------------- | ------------: | ---- | ------------------------------------- |
| MapTileLayer (alt katman)         | -50 000       | Harita | Raster döşemeler alt katmanı          |
| MapTileLayer (ana katman)         | 5 000         | Harita | Harita raster döşemeleri              |
| ContourLinesLayer                 | 6 000         | Harita | Kendi katman sınıfı yok; ana MapTileLayer tarafından yönetilir |
| TerrainLayer                      | 60 000        | Harita | [Tepe gölgelendirme ve eğim](/docs/user/plugins/topography) |
| MapTileLayer (üst katman)         | 70 000        | Harita | Raster döşemeler üst katmanı          |

### Android. Sembol katmanları {#android-symbols-layers}

| Katman / semboller                | Sıra/Aralık  | Tür      | Açıklama                                                                                                   |
| --------------------------------- | -----------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| DownloadedRegionsLayer            | -1 100 000   | Poligonlar | İndirilen bölgeleri gösterir        |
| Simgeler (MapVectorLayer)         | -1 000 000   | Noktalar | Vektör harita, [1 000 000 eklenmiş](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) stilindeki iconOrder |
| GPXLayer (çizgiler)               | -500 000     | Çizgiler | İz çizgileri                      |
| RouteLayer (grafik vurgulama noktası)| -197 900     | Nokta    | Haritada navigasyon rotası analizi  |
| RouteLayer (grafik x-ekseni noktaları)| -198 000     | Noktalar | Haritada navigasyon rotası analizi  |
| RouteLayer (dönüş okları)         | -199 000     | Çizgiler | Navigasyon rotası                   |
| RouteLayer                        | -200 000     | Çizgiler | Navigasyon rotası                   |
| Metin (MapVectorLayer)            | 1 - 255      | Metin    | Vektör harita, [stildeki](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml) textOrder, varsayılan olarak 100 |
| Kalkanlar (MapVectorLayer)        | 1 - 255      | Kalkanlar | Vektör harita, kalkanlar için stildeki textOrder, varsayılan olarak 100 |
| GPX iz başlangıcı, bitişi         | 90 101       | Noktalar | GPXLayer                          |
| GPX iz ara noktası                | 90 300       | Noktalar | GPXLayer                          |
| GPXLayer (wpt adı)                | 90 300       | Metin    | Ara noktalar adı                  |
| GPX iz grafik simgesi             | 90 500       | Noktalar | GPXLayer                          |
| GPX iz seçili simge               | 90 600       | Noktalar | GPXLayer                          |
| OSM notları (OsmBugsLayer)        | 200 000      | Noktalar | OSM notları                       |
| Düzeltme simgesi (OsmBugsLayer)   | 200 000      | Noktalar | OSM düzeltme simgeleri            |
| Düzeltme metni (OsmBugsLayer)     | 200 000      | Metin    | OSM düzeltme metni                |
| POIMapLayer (simge)               | 300 000      | Noktalar | POI üst katmanı                   |
| POIMapLayer (adı)                 | 300 000      | Metin    | POI üst katmanı adı               |
| AudioNotesLayer                   | 350 000      | Noktalar | Ses/video notları eklentisi       |
| OsmEditsLayer                     | 350 000      | Noktalar | OSM düzenleme eklentisi           |
| FavoritesLayer                    | 400 000      | Noktalar | Favoriler üst katmanı             |
| TransportStopsLayer               | 500 000      | Çizgiler | Toplu taşıma hatları              |
| TransportStopsLayer               | 500 001      | Noktalar | Toplu taşıma durakları            |
| MapTextLayer                      | 595 000      | Metin    | Farklı katmanlar için metin, tuval oluşturma |
| PointLocationLayer                | 600 000      | Noktalar | Konumum                         |
| PointNavigationLayer              | 700 000      | Noktalar | Navigasyonda başlangıç/bitiş noktaları |
| PointNavigationLayer              | 700 600      | Noktalar | Navigasyonda seçilen nokta        |
| MapMarkersLayer (çizgi)           | 729 999      | Çizgiler | Harita işaretleyicilerine kesikli çizgi |
| MapMarkersLayer (metin)           | 730 000      | Metin    | Çizgi üzerindeki metin. Tuval oluşturma |
| MapMarkersLayer (işaretleyiciler) | 730 000      | Noktalar | Harita işaretleyicileri           |
| ImpassableRoadsLayer              | 750 000      | Noktalar | Yollardan kaçınma                 |
| ContextMenuLayer                  | 800 000      | Noktalar | Bağlam menüsü pimi                |
| MapillaryVectorLayer (çizgiler)   | 1 000 000    | Çizgiler | Noktalar arası Mapillary çizgileri |
| MapillaryVectorLayer (noktalar)   | 1 000 000    | Noktalar | Mapillary noktaları               |

### Android. Kontrol katmanları {#android-controls-layers}

| Kontrol katmanı           | Sıra/Aralık | Açıklama              |
| ------------------------- | ----------: | --------------------- |
| PreviewRouteLineLayer     | 150 000     | Rota önizleme seçenekleri |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Yarıçap cetveli       |
| DistanceRulerControlLayer | 790 000     | Mesafe cetveli        |
| MapInfoLayer              | 900 000     | Widget'lar            |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |

## iOS Sıra Tabloları {#ios-order-tables}

### iOS. Raster katmanları {#ios-raster-layers}

| Katman                            | Katman dizini | Açıklama                              |
| ------------------------------- | ----------: | ------------------------------------- |
| OAUnderlayMapLayer              | -5          | Raster döşemeler alt katmanı          |
| Raster katman (MapRasterLayerProvider) | 0     | Harita raster döşemeleri              |
| OATerrainMapLayer                | 4           | [Kontur çizgileri, tepe gölgelendirme ve eğim](/docs/user/plugins/topography) |
| OAOverlayMapLayer                | 5           | Raster döşemeler üst katmanı          |
| OAMapillaryLayer                 | 10          | Mapillary katmanı                     |
| OAWeatherRasterLayer             | 20          | Hava durumu                           |
| OAWeatherRasterLayer             | 25          | Hava durumu                           |
| OAWeatherContourLayer            | 30          | Hava durumu                           |

### iOS. Sembol katmanları {#ios-symbols-layers}

| Katman / semboller               | Sıra/Aralık  | Tür      | Açıklama                                                                                                   |
| ---------------------------- | -----------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| Simgeler                     | -1 000 000   | Noktalar | Vektör harita, [1 000 000 eklenmiş](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) stilindeki iconOrder |
| Metin                        | 1 - 255      | Metin    | Vektör harita, stildeki textOrder, varsayılan olarak 100             |
| Kalkanlar                    | 1 - 255      | Kalkanlar | Vektör harita, kalkanlar için stildeki textOrder, varsayılan olarak 100 |
| OADownloadedRegionsLayer     | 10 000       | Poligonlar | İndirilen yeşil bölgeleri gösterir |
| POI simgesi (OAPOILayer)     | 90 000       | Noktalar | POI üst katmanı                 |
| POI adı (OAPOILayer)         | 90 000       | Metin    | POI üst katmanı adı             |
| GPX iz çizgileri (OAGPXLayer)| 100 000      | Çizgiler | İz çizgileri                  |
| GPX ara nokta adı            | 100 000      | Metin    | GPX ara noktalar adı          |
| GPX ara nokta simgesi        | 100 003      | Noktalar | GPX ara noktalar              |
| GPX iz başlangıcı, bitişi    | 120 000      | Noktalar | OAGPXLayer                  |
| OSM notları (OAOsmBugsLayer) | 120 000      | Metin    | OSM notları                   |
| Düzeltme metni (OAOsmBugsLayer)| 120 000      | Metin    | OSM düzeltme metni            |
| Düzeltme simgesi (OAOsmBugsLayer)| 120 000      | Noktalar | OSM düzeltme simgesi          |
| OAOsmEditsLayer              | 120 000      | Noktalar | OSM düzenleme eklentisi       |
| OAPreviewRouteLineLayer      | 120 000      | Çizgiler | Rota önizleme seçenekleri     |
| OATransportStopsLayer (çizgiler)| 120 000      | Çizgiler | Toplu taşıma hatları          |
| OATransportStopsLayer (simgeler)| 121 000      | Noktalar | Toplu taşıma durakları        |
| OARouteLayer                 | 150 000      | Çizgiler | Navigasyon rotası             |
| OAFavoritesLayer             | 160 000      | Noktalar | Favoriler üst katmanı         |
| Yollardan kaçınma (OAImpassableRoadsLayer) | 205 998 | Noktalar | Yollardan kaçınma            |
| Konumum (OAMyPositionLayer)  | 206 001      | Noktalar | Konumum                     |
| Harita işaretleyicileri (OADestinationsLayer) | 207 000 | Noktalar | Harita işaretleyicileri      |
| Harita işaretleyicileri (çizgi üzerindeki metin) | 207 000 | Metin    | Harita işaretleyicilerine çizgi üzerindeki metin |
| Navigasyon (noktalar)        | 207 015      | Noktalar | OARouteLayer                |
| Navigasyon (konumum)         | 207 025      | Noktalar | OARouteLayer                |
| Navigasyon (rota üzerindeki oklar) | 208 000 | Noktalar | OARouteLayer                |
| OARoutePointsLayer           | 209 000      | Noktalar | Navigasyon noktaları        |

### iOS. Kontrol katmanları {#ios-controls-layers}

| Kontrol katmanı          | Sıra/Aralık | Açıklama       |
| ------------------------ | ----------: | -------------  |
| OAGPXRecLayer            | 110 000     | GPX düzenleme  |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Mesafe cetveli |
| OAContextMenuLayer       | 210 000     |                |