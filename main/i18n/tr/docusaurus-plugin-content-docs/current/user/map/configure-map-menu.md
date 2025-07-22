---
source-hash: afd8d811e22a04d300b6aceb6838f774b297758d02f07d66e5b085e41519527d
sidebar_position: 4
title: Haritayı Yapılandır
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Genel Bakış {#overview}

**Haritayı Yapılandır** menüsü, OsmAnd *Ana Menüsünde* önemli bir öğedir ve harita görünümünü ihtiyaçlarınıza göre özelleştirmenizi sağlar. Favori noktaları, navigasyon işaretlerini veya özel ilgi çekici noktaları haritada vurgulayabilir, belirli rotaları veya üçüncü taraf GPX dosyalarını görüntüleyebilir, arazi bilgilerini, uydu görüntülerini veya mevcut diğer raster görüntüleri üst üste bindirebilir, toplu taşıma bilgilerini görüntüleyebilir ve harita stilini değiştirebilirsiniz.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

**Göster** bölümü:

![Haritayı yapılandır android](@site/static/img/map/configure_map_show1_andr.png) ![Haritayı yapılandır android](@site/static/img/map/configure_map_show2_andr.png)

**Topografya** bölümü:

![Haritayı yapılandır android](@site/static/img/map/configure_map_topography_andr.png)

**OpenStreetMap** bölümü:

![Haritayı yapılandır android](@site/static/img/map/configure_map_osm_andr.png)

**Rotalar ve Harita oluşturma** bölümleri:

![Haritayı yapılandır android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritayı yapılandır ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


**<Translate android="true" ids="configure_map"/>** menüsü iki kategoriye ayrılmıştır:

- [Harita stili parametreleri](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (veya **<Translate ios="true" ids="map_widget_renderer"/>**) ana haritanın görüntülenme şeklini değiştirmenizi sağlayan bir ayarlar grubudur.
- [Harita katmanları](#map-layers). Bu katmanlar, bilgileri ana harita katmanının üzerine (veya altına) yerleştirmenize olanak tanır, ancak haritanın kendisinin görünümünü değiştirmez.

**Notlar:**

- Ekrandaki bilgileri (widget'lar, simgeler) değiştirmek için [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md) bölümünde ayarları yapabilirsiniz.
- Haritayı Yapılandır ayarları [profilinize](../personal/profiles.md) bağlıdır.
- Dikkat edin - Haritayı Yapılandır menüsü harita alanına dokunduğunuzda **kapanır**.

## Harita Katmanları {#map-layers}

- [Vektör Harita Katmanı](../map/vector-maps.md) - OpenStreetMap, Kontur çizgileri ve Denizcilik verileri dahil tüm vektör harita bilgilerini görüntüler.
- [Harita Raster kaynakları](../map/raster-maps.md#select-raster-maps) - şeffaflık seviyeleri ile altlık / ana kaynak / bindirme haritası seçimine izin verir.
- [Arazi](../plugins/topography.md#hillshade-slope-and-altitude-layers) - eğim / tepe gölgelendirme bilgilerini, 3D Rölyefi görüntüler.
- [İndirilen haritaların sınırları](../map/vector-maps.md#show-borders) - indirilen tüm haritaların sınırlarını ana harita katmanında görüntüler.
- [Koordinat ızgarası](../map/vector-maps.md#coordinates-grid) - harita üzerindeki koordinat ızgarasının görünürlüğünü kontrol eder.

## Harita Veri Katmanları {#map-data-layers}

- [Favoriler](../map/point-layers-on-map.md) - favori noktaları görüntüler.
- [İÇN](../map/point-layers-on-map.md) - seçilen kategorilerdeki ilgi çekici noktaları görüntüler.
- [Harita işaretleri](../map/point-layers-on-map.md) - harita işaretlerini görüntüler.
- [Bindirme etiketleri](../map/point-layers-on-map.md) - harita üzerindeki noktaların ve favorilerin adlarını gösterir.
- [Ulaşım](../map/vector-maps.md#transport) - toplu taşıma duraklarını gösterir.
- [İzler](../map/tracks/index.md) - içe aktarılan, planlanan veya kaydedilen izleri harita üzerinde görüntüler.
- [Sokak seviyesi görüntüleri](../plugins/mapillary.md#map-layer) - mevcut sokak seviyesi görüntüleri olan noktaları görüntüler.
- [Seyahat rehberleri](../plan-route/travel-guides.md) - harita üzerinde seyahat rehberlerini görüntüler.
- [Wikipedia](../plugins/wikipedia.md) - haritaya bağlı Wikipedia makalelerini vurgular.
- [Diğer eklenti katmanları](../plugins/index.md#configure-plugin) - birçok eklenti, ek bilgilerle kendi katmanlarını ekler.

## Harita stili parametreleri {#map-style-parameters}

Harita stili ayarları, görüntülenen ana harita stiline bağlıdır. Bu konuda daha fazla bilgiyi [Harita Stilleri makalesinde](../map/vector-maps) okuyabilirsiniz.

- [Harita stili](../map/vector-maps.md#default-map-styles) - OsmAnd (Şehir), Topo, Denizcilik ve diğerlerini içerir.
- [Harita modu](../map/vector-maps.md#map-mode) - günün saatine bağlı olarak harita görünümünü ve navigasyonu seçmenizi sağlar.
- [Harita büyüteci](../map/vector-maps.md#map-magnifier) - haritanın büyütmesini değiştirmenizi sağlar.
- [Metin boyutu](../map/vector-maps.md#text-size) - haritadaki metin boyutunu artırmanıza veya azaltmanıza olanak tanır.
- [Harita dili](../map/vector-maps.md#map-language) - haritada görüntülenen tercih edilen dili seçmenizi sağlar.
- [Detaylar](../map/vector-maps.md#details) - belirli nesneleri gösterir.
- [Gizle](../map/vector-maps.md#hide) - belirli nesneleri gizler.
- [Rotalar](../map/vector-maps.md#routes) - rotaları ve sembollerini vurgulamanızı sağlar.

## Kullanıcı Arayüzü Özelleştirme (Android) {#ui-customization-android}

Android sisteminde seçilen her profil için, <Translate android="true" ids="configure_map"/> menü öğelerinin sırasını değiştirebilir, öğeleri gizleyebilir, varsayılan ayarları sıfırlayabilir veya başka bir profilden kopyalayabilirsiniz. Bu, OsmAnd uygulamasıyla etkileşiminizi geliştirmeye yardımcı olacaktır.

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Harita öğelerini yapılandır ](@site/static/img/settings/configure-screen-ui-customization.png)


> *Son güncelleme: Şubat 2025*