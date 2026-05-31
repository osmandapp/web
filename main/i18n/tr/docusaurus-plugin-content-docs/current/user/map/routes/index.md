---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: Rotalar
sidebar_position: 11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Genel Bakış {#overview}

OsmAnd'ın haritada farklı [rotaları](./types-of-routes.md) görüntülemek için birçok güçlü özelliği vardır. Varsayılan olarak, bu rotalar [vektör haritalarının](../../map/vector-maps.md#routes) bir parçasıdır (OpenStreetMap verisi), ancak benzer işlevsellik [izler](../../map/tracks/index.md) tarafından sağlanır; bunlar [Rota Planla](../../plan-route/create-route.md) ile oluşturulabilir, [GPX izleri](#save-as-a-track) olarak içe aktarılabilir, [Seyahat Kaydı eklentisi](../../plugins/trip-recording.md) ile kaydedilebilir. Rotalar Harita Efsanesi [burada](../../map-legend/osmand.md#routes).


## Rotaları Haritada Görüntüleme {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Haritayı Yapılandır Rotalar bölümü](@site/static/img/map/configure_map_routes_android.png) ![Rota Sınıfları](@site/static/img/map/routes_classes_android.png)

- Haritada gerekli rotaları görüntülemek için bunları [Haritayı Yapılandır](../../map/configure-map-menu.md) menüsündeki *Rotalar listesi*nden etkinleştirin.
- OsmAnd, [OpenStreetMap'te bulunan rotaları](https://wiki.openstreetmap.org/wiki/Relation:route) vurgulayabilir. Bunlar [rotadaki sembole](#save-as-a-track) dokunularak seçilebilir ve görünür rota kümesi doğru yapılandırılmışsa renk ve simgeleri takip edebilirsiniz.
- Ana rota türleri ayrıca sınıflara ve alt sınıflara göre filtrelenebilir, böylece her tür içinde yalnızca belirli grupları görüntüleyebilirsiniz. Örneğin, yürüyüş rotalarını **OSMC sembolleri** ile sınıflar olarak ve *uluslararası, ulusal, bölgesel* veya *yerel ağlar* olarak alt sınıflar halinde gösterebilirsiniz; bunlar şu anda [OsmAnd Geliştirme](../../plugins/development.md) eklentisi etkinleştirildiğinde kullanılabilir.
- [Rota Planla](../../plan-route/create-route.md) aracıyla rotaların üzerine bir iz oluşturabilirsiniz.
- Birden fazla rota aynı yol boyunca ilerlediğinde, her rota diğerlerinin üzerine yerleştirilmiş ayrı yarı saydam bir çizgi olarak görüntülenir.
- Birden fazla rotanın çakıştığı bir konuma dokunulduğunda, bu noktadan geçen tüm rotaları içeren bir bağlam menüsü gösterilir.
- Yeni rota oluşturma şemasının tüm öğelerini görüntülemek için güncellenmiş vektör haritaları gereklidir.

![Harita rotaları - yürüyüş osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Harita rotaları - bisiklet düğüm ağları](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![İz menüsü iOS](@site/static/img/map/configure_map_routes_ios.png)

- Haritada gerekli rotaları görüntülemek için bunları [Haritayı Yapılandır](../../map/configure-map-menu.md) menüsündeki *Rotalar listesi*nden etkinleştirin.
- OsmAnd, [OpenStreetMap'te bulunan rotaları](https://wiki.openstreetmap.org/wiki/Relation:route) vurgulayabilir. Bunlar [rotadaki sembole](#save-as-a-track) dokunularak seçilebilir ve görünür rota kümesi doğru yapılandırılmışsa renk ve simgeleri takip edebilirsiniz.
- [Rota Planla](../../plan-route/create-route.md) aracıyla rotaların üzerine bir iz oluşturabilirsiniz.
- Birden fazla rota aynı yol boyunca ilerlediğinde, her rota diğerlerinin üzerine yerleştirilmiş ayrı yarı saydam bir çizgi olarak görüntülenir.

![Harita rotaları - yürüyüş osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Harita rotaları - bisiklet düğüm ağları](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Rotalarla İşlemler {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota bilgisi](@site/static/img/map/routes_osm.png) ![Rota bilgisi](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota bilgisi](@site/static/img/map/routes_osm_ios_new.png) ![Rota bilgisi](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Haritada [yürüyüş, bisiklet, kayak, MTB, kir bisikleti, seyahat ve daha fazlası](./types-of-routes.md) için rotaları seçebilirsiniz. Mevcut olduğunda, yürüyüş rotaları [OSMC sembollerini](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) kullanarak yol işaretlerini gösterir; diğer rota türleri kendi işaretlerini kullanır.

Haritada bir **rota sembolüne** dokunduğunuzda:

- O konumdaki **yakındaki rotaların listesi** görüntülenir.
- Listeden bir rota seçtikten sonra, o rota için ayrıntılı bilgi ve mevcut eylemleri gösteren bir [bağlam menüsü](../../map/tracks/track-context-menu.md) açılır.
- Seçilen rota, bir GPX iziyle aynı şekilde etkileşim kurabileceğiniz bir iz görünümünde açılır.

**Bağlam menüsünde** şunları yapabilirsiniz:

- Seçilen rota hakkında [ek bilgi](#route-info-and-elevation) görüntüleyin.
- Rotayı **GPX izi** olarak [kaydedin](#save-as-a-track).
- Rota boyunca [navigasyonu başlatın](#start-navigation).

### Tırmanış Alanı ve Kaya Detayları {#climbing-area-and-crag-details}

![Tırmanış detayları](@site/static/img/map/climbing_andr.png)

Bir [tırmanış alanı veya kaya](./types-of-routes.md#climbing-routes) seçtiğinizde OsmAnd, konumun adı ve yeri, tırmanış zorluk derecesi (UIAA, Fransızca, YDS vb.), kaya türü, yükseklik ve rota uzunluğu, tırmanış kalitesi ve yüzey koşulları dahil olmak üzere ayrıntılı bir özet sağlar.

### Rota Bilgisi ve Yükselti {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota bilgisi](@site/static/img/map/route_info_1_andr_new.png) ![Rota bilgisi](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota bilgisi](@site/static/img/map/route_info_1_ios_new.png) ![Rota bilgisi](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

Bağlam menüsünde aşağıdaki bilgiler görünür:

- **Rota bilgisi**: Rota adı, OSM bağlantısı (OSM Düzenleme eklentisi gerekli), Tür, Açıklama, Mesafe, Yön, Yokuş yukarı/aşağı, Yükseklik aralığı, Ağ, Operatör, Durum, Renk, Gidiş-dönüş, Başlangıç/Bitiş noktaları ve daha fazlası.
- **Genel**: Boyut, Konum, Oluşturulma tarihi.
- **Ek Bilgi**. Etkinlik türünü görüntüler.
- eylem düğmeleri: [İz olarak kaydet](#save-as-a-track) ve [Navigasyonu Başlat](#start-navigation).
- [Yükselti bilgisi](../../navigation/setup/route-details.md#elevation-info). Rota üzerindeki yükselti verileri hakkında bilgi görüntüler.
- [Haritada İzi Analiz Et](../../map/tracks/index.md#analyze-track-on-map). Grafikler ve haritalar kullanarak iz verilerinin ayrıntılı analizini görüntüler.

Seçilen bir rota için yükselti, eğim veya yükseklik ayrıntılarının grafiğini görüntülemek için bağlam menüsündeki şu değerlerden herhangi birine dokunmanız yeterlidir: **Mesafe**, **Yokuş yukarı**, **Yokuş aşağı** veya **Yükseklik**.

Ayrıca *İz sekmesini* açıp *Yükseklik görünümüne* geçerek rotanın tam yükselti grafiğini görebilirsiniz.

**Not:** Yükselti verileri otomatik olarak oluşturulur ve mevcut verilere bağlı olarak biraz farklılık gösterebilir.

### İz Olarak Kaydet {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/routes-4.png)   ![Yerdeki rotalar](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/hiking.png)   ![Yerdeki rotalar](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Rotayı *GPX dosyası* olarak kaydetmek için [Bilgi paneli](../../map/tracks/track-context-menu.md#info-panel) altındaki **Kaydet (İndir)** düğmesine dokunun. Bu, [Hızlı eylemler](../../map/tracks/track-context-menu.md#track-actions) düğme panelini açar; burada [Görünüm](../../map/tracks/appearance.md) değiştirme, [Navigasyon](../../navigation/setup/route-navigation.md) veya [Rota planla](../../plan-route/create-route.md) düzenleme gibi iz eylemlerine erişebilirsiniz. Kaydedilen rotalar diğer izlerle aynı şekilde davranır ve iz koleksiyonunuzda bulunur.

### Navigasyonu Başlat {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Seçilen OSM rotası boyunca navigasyonu başlatmak için [**Bilgi paneli**](../../map/tracks/track-context-menu.md#info-panel) içindeki **Navigasyonu Başlat** düğmesine dokunun.

Bu, sesli yönlendirme ve navigasyon özellikleriyle rotayı takip etmenizi sağlayan [**İz ile navigasyon**](../../navigation/setup/gpx-navigation.md) modunu başlatır.

### Hızlı Eylemler {#quick-actions}

Rotaların açık veya kapalı olmasını [Hızlı Eylem](../../widgets/quick-action.md#configure-map) widget'ını kullanarak özelleştirebilirsiniz.


## Rota Arama {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/route_search.png) ![Yerdeki rotalar](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/route_search_ios.png) ![Yerdeki rotalar](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

[Rota Arama](../../search/index.md) işlevini kullanarak adıyla veya [Kategoriler bölümünde](../../search/search-poi.md#) "Rotalar" seçerek rotaları bulun.

Aramak için *<Translate android="true" ids="search_button"/>* menüsüne veya *<Translate android="true" ids="search_button,search_categories"/>* bölümüne gidin ve etkinliğinizi girin.

İstediğiniz rotaları bulmak için *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* bölümüne gidin. Rota arama sonuçları rota adını, etkinlik türünü, uzunluğu, konumu, yokuş yukarı/aşağı (Android'de) ve en yakın noktaya olan mesafeyi gösterir.

### Rota Filtreleri {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/route_search_2_new.png) ![Yerdeki rotalar](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/route_search_2_ios.png) ![Yerdeki rotalar](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

Rota arama sonuçlarında listeyi daraltmak için sağ üst köşedeki **Filtreler** düğmesine dokunun. Filtreler ekranında bir **Ada göre filtrele** alanı; *Büro*, *Posta şubesi* ve *Posta ortağı* içeren bir **Tür** bloğu; ve seçilen rota kategorisine veya etkinliğine bağlı **ek ölçütler** bulunur, çünkü her kategori kendi özelliklerini ve filtre değerlerini gösterebilir.

Anahtarları kullanarak filtreleri etkinleştirebilir veya devre dışı bırakabilirsiniz ve bazı bölümler ek değerleri görüntülemek için *Tümünü göster* içerir.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](../../map/map-context-menu.md)
- [Haritayı Yapılandır](../../map/configure-map-menu.md)
- [İzler](../../map/tracks/index.md)
- [İzler Bağlam menüsü](../../map/tracks/track-context-menu.md)
- [Toplu taşıma](../public-transport.md)
- [Navigasyon rota çizgisi görünümü](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [POI Ara](../../search/search-poi.md#)
- [Rota Türleri](./types-of-routes.md)