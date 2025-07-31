---
source-hash: e005142473200bc1f9ed4e7e38e90fe7a2db323071277cbdb521ac266234d560
sidebar_position: 7
title: Haritadaki Noktalar
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Genel Bakış {#overview}

Harita, [Favoriler](#favorites), [İlgi Çekici Noktalar (POI'ler)](#points-of-interest-pois), [İşaretleyiciler](#markers), [Wikipedia](#-wikipedia--wikipedia), [Arama sonuçları](#search-results-poi), [Sesli ve Görüntülü Notlar](#-audio--video-points-android--audio--video-points-android) ve [OSM düzenleme](#-osm-edit-points--osm-edit-points) gibi noktaları görüntüleyebilir.


## Favoriler {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Favoriler](../personal/favorites.md) kullanıcılar tarafından işaretlenen özel noktalardır. Varsayılan olarak, haritada sarı yıldızlar olarak görünürler, ancak herhangi bir renk, şekil ve simgeyle özelleştirilebilirler. Yakınlaştırma seviyesi 6'dan itibaren haritada görünür hale gelirler.

:::info
OsmAnd'ın Android sürümünde, haritada ve arama sırasında yalnızca belirli grup favorilerini görüntüleyebilirsiniz. *Menü → Yerlerim → Favoriler*'e gidin, &#8942; öğesine dokunun ve *Haritada göster* veya gösterme seçeneklerinden birini seçin.
:::


## Favori ve POI Adları {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Varsayılan olarak, Favoriler ve ilgi çekici noktalar (POI) adları olmadan görüntülenir, böylece harita metinle dolmaz. Adları Haritayı Yapılandır menüsünden etkinleştirebilirsiniz.  


## İlgi Çekici Noktalar (POI'ler) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI overlay Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[İlgi çekici noktalar (POI'ler)](https://wiki.openstreetmap.org/wiki/Points_of_interest), harita üzerinde bir sembolle işaretlenmiş belirli konumlardır. İlginç veya faydalı yerleri ve nesneleri gösterirler ve [Vektör Haritaları](../map/vector-maps.md)nın bir parçasıdırlar.  

En dikkat çekici POI'ler haritada otomatik olarak görüntülenir. Ancak, belirli bir POI türünü (örn. *Restoranlar*) seçebilirsiniz ve bunların tümü haritada **turuncu bir daire** ile vurgulanacaktır (yakınlaştırma seviyesi 9'dan itibaren).  

Bir ilgi çekici nokta hakkındaki ayrıntılı bilgiye, noktaya [dokunduğunuzda](../map/map-context-menu.md#select-an-object-single-tap) görünen [Bağlam menüsünde](../map/map-context-menu.md) bulabilirsiniz.  


### POI Türleri {#poi-types}

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

Standart OsmAnd POI türlerinden birini veya birkaçını seçebilir veya kendi [POI filtrenizi](../search/search-poi.md) oluşturup haritada POI'leri görüntülemek için seçebilirsiniz.

**Android**. Bir veya daha fazla ilgi çekici nokta seçimi arasında geçiş yapmak için sol alt düğmeye dokunun.


### Harita Stili POI {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

OsmAnd'daki her POI türüne belirli bir simge ve renk atanmıştır. POI'nin [yakınlaştırma seviyesi](../map/vector-maps.md#details) ve tasarımı bazı [harita stillerinde](../map/vector-maps.md#default-map-styles) farklılık gösterebilir.  

[Daha fazla oku](../map/vector-maps.md#hide).


## İşaretleyiciler {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Harita işaretleyicileri](../personal/markers.md) harita üzerinde bayrak olarak işaretlenmiş geçici noktalardır. Görünümleri **oklar** (Haritadaki oklar) ve **mesafe göstergesi** (Yön çizgileri) kullanılarak özelleştirilebilir.  

İşaretleyicilerin görünümü hakkında daha fazla bilgiyi bu [makalede](../personal/markers#appearance-on-the-map) okuyabilirsiniz.


## İz Noktaları {#track-waypoints}

![Track on map](@site/static/img/map/track_point_on_map.png)

İz noktaları (ara noktalar) İz (GPX) dosyalarının bir parçasıdır. Bu noktalar, iz haritada ise otomatik olarak görüntülenir. [Favoriler](#favorites) gibi görünür ve yapılandırılabilirler - simge, adlar, renk, şekil. Ara nokta nasıl oluşturulur ve eklenir, [makalede](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) okuyun.  

Haritadaki izler hakkında [daha fazla bilgi edinin](../map/tracks/index.md).


## Arama Sonuçları (POI) {#search-results-poi}

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Arama sonuçları, haritada özel bir POI katmanı olarak görüntülenebilir. Arama sırasında, POI'leri haritada görüntülemek için özel bir satıra (**<Translate android="true" ids="shared_string_show_on_map"/>**) dokunun.  

POI'leri kapatmak için sağ üst köşedeki **X** tuşuna basın.  

[Arama](../search/index.md) hakkında daha fazla bilgi edinin.


## * Sokak Seviyesi Görüntüleri {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary street view](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Sokak seviyesi görüntüleri (Mapillary)](../plugins/mapillary.md) haritada yeşil noktalar olarak görüntülenir. Sokak görünümünün fotoğrafları bu noktalara eklenir. Bir [filtre](../plugins/mapillary.md#data-filtering) oluşturabilir ve haritada görüntülemek istediğiniz fotoğrafları seçebilirsiniz. Bir sokak görünümü fotoğrafını açmak için yeşil noktaya dokunun.  

[Mapillary eklentisi](../plugins/mapillary.md) gerektirir.


## * Park Noktası {#-parking-point}

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

Bir [Park noktası](../plugins/parking.md), kullanıcılar tarafından harita üzerinde aracın tam konumu hakkında bilgi depolamak için işaretlenmiş bir noktadır. Sınırsız ve sınırlı park bölgelerine ayrılabilir.  

[Park konumu eklentisi](../plugins/parking.md) gerektirir.


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd, "W" logosuyla işaretlenmiş ve Wikipedia makalelerine bağlantı veren özel ilgi çekici noktalara sahiptir. Bu noktalar, diğer POI türleri gibi, arama yoluyla veya <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/> adresine gidilerek görüntülenebilir. Ancak, Wikipedia makalelerini **mevcut dillere** göre filtrelemenin özel bir yolu vardır.  

OsmAnd'da Wikipedia özelliğini nasıl indireceğinizi ve kullanacağınızı [daha fazla okuyun](../plugins/wikipedia.md).


## * Sesli / Görüntülü Noktalar (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Sesli / Görüntülü notlar, kullanıcılar tarafından oluşturulan harita üzerindeki ses, fotoğraf ve video verilerine sahip noktalardır.  

[Sesli / Görüntülü not eklentisi](../plugins/audio-video-notes.md) gerektirir.


## * OSM Düzenleme Noktaları {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

OSM düzenleme noktaları, [OpenStreetMap projesine](https://www.openstreetmap.org/) eklenmek üzere kullanıcılar tarafından oluşturulan POI'lerdir.  

[OSM Düzenleme eklentisi](../plugins/osm-editing.md) gerektirir.


## * OSM Notları {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

OSM notları, [OpenStreetMap](https://www.openstreetmap.org/) adresindeki harita verileriyle ilgili sorunları bildirmek için kullanıcı tarafından oluşturulan POI'lerdir. Yeni notlar (henüz OpenStreetMap'e yüklenmemiş) yeşil renkte **+** ile işaretlenir, kapalı notlar yeşil renkte "V" ile işaretlenir ve açık notlar kırmızı renkte işaretlenir. Notları görüntülemek için yakınlaştırma seviyesini özelleştirebilir ve kapalı notları gösterip göstermeyeceğinizi seçebilirsiniz.  

[OSM Düzenleme eklentisi](../plugins/osm-editing.md) gerektirir.


## Rota Boyunca Noktalar {#points-along-the-route}

Ara noktalar, POI'ler, Favori noktalar ve Sesli/görüntülü notlar, konumları ve rotaları [GPX (GPS Değişim Formatı)](https://en.wikipedia.org/wiki/GPS_Exchange_Format) içinde kaydetme kavramına atıfta bulunur. Bunları açıklamak ve düzenlemek için [aynı etiketleri](../map/tracks/track-context-menu.md#display-custom-gpx-tags) kullanabilirsiniz.  

[Ara noktalar](#track-waypoints) bir harita veya rotadaki tek tek noktalardır. Seyahatlerinizi gezinmek veya kaydetmek için önemli olabilecek belirli yerleri işaretlemek için kullanılabilirler. Örneğin, önemli bir kavşağı veya yön değişikliğini belirtmek için harita üzerinde bir ara nokta oluşturabilirsiniz.  

[İlgi çekici noktalar (POI'ler)](#points-of-interest-pois) kullanıcılar için özel ilgi alanları olan yerlerdir. Bunlar, işaretler, restoranlar, oteller, benzin istasyonları ve not almak veya ziyaret etmek isteyebileceğiniz diğer ilgi çekici yerler olabilir.  

[Favori noktalar](#favorites), kullanıcıların özellikle önemli veya ilginç bulduğu ve favori yerler listelerine kaydettiği yerlerdir. Yerler, daha sonra bulmak ve geri dönmek isteyebileceğiniz herhangi bir konumu içerebilir.

[Sesli/görüntülü notlar](#-audio--video-points-android--audio--video-points-android). GPX formatında, sesli ve görüntülü kayıtları ara noktalar olarak kaydedebilirsiniz. Bu, medya dosyalarını harita veya rota üzerindeki belirli konumlarla ilişkilendirmenize olanak tanır.  

Tüm bu nokta türleri, size konum bilgisi sağlamak ve navigasyon ve rota planlamasına yardımcı olmak için GPX formatında kaydedilebilir. Farklı amaçlara hizmet ederler, ancak genel fikir, coğrafi bilgileri depolamak ve iletmek, böylece navigasyon görevlerinizde kullanabilmenizdir.


## İlgili Makaleler {#related-articles}

- [Harita menüsünü yapılandır](../map/configure-map-menu.md)
- [Vektör haritaları (Harita stilleri)](./vector-maps.md)
- [Raster Haritalar (Çevrimiçi / Çevrimdışı)](./raster-maps.md)

> *Son güncelleme: Haziran 2025*