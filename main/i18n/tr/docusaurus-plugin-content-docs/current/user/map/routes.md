---
source-hash: 0e2f6c946c393607b5033a3e8d96b50750de7efd28c223841bc9d886f3ec9f2d
sidebar_position: 10
title: Rotalar
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

OsmAnd, harita üzerinde farklı [rotaları](#type-of-routes) görüntülemek için birçok güçlü özelliğe sahiptir. Varsayılan olarak, bu rotalar [vektör haritalarının](./vector-maps.md#routes) (OpenStreetMap verileri) bir parçasıdır, ancak benzer işlevsellik [Rota Planla](../plan-route/create-route.md) ile oluşturulabilen, [GPX parkurları](#save-as-a-track) olarak içe aktarılabilen, [Seyahat Kaydı eklentisi](../plugins/trip-recording.md) ile kaydedilebilen [parkurlar](./tracks/index.md) tarafından sağlanır.


## Rota Türü {#type-of-routes}

Rotalar, [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) verilerini kullanarak farklı dış mekan etkinliklerini temsil eder. Harita üzerindeki **rota numarası veya rota bayrağı bulunan kalkan simgesine** dokunmak, rota hakkında ek bilgi sağlayan ve navigasyonun bir parçası olarak kullanılmasına izin veren bir bağlam menüsü açar.

Bazı rota türlerinin filtrelenmesini [Haritayı Yapılandır](../map/configure-map-menu.md) menüsünde yapılandırabilirsiniz.

### Bisiklet rotaları {#cycle-routes}

[Bisiklet rotaları](https://wiki.openstreetmap.org/wiki/Cycle_routes) üç türde bulunur: *yerel* (`lcn`), *bölgesel* (`rcn`), *ulusal* (`ncn`), *uluslararası* (`icn`). Ayrıca, bisiklet rotaları [Düğüm ağlarının](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) bir parçası olabilir. Rota segmentlerine renk atamasını seçebilirsiniz:

- ***<Translate android="true" ids="layer_route"/>***.
![Harita rotaları - bisiklet rotaları](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![Harita rotaları - bisiklet-düğüm-ağları](@site/static/img/map/map-routes-cycle-node-networks.png)

Daha fazla bilgiyi [Harita Açıklaması](../map-legend/index.md) makalesinde bulabilirsiniz.


### Dağ bisikleti rotaları {#mountain-bike-routes}

MTB rotaları [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb)'te belirli bir eşlemeye sahiptir ve bisiklet rotalarından ayrı olarak seçilebilir.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | MTB ölçeğine göre parkurları gösterir. Daha fazla bilgi [Harita Açıklaması](../map-legend/index.md) makalesindedir. | ![Harita rotaları - MTB parkurları](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Uluslararası Dağ Bisikleti Birliği, [MTB IMBA](https://www.imba.com/) 'ya göre MTB parkurlarını gösterir. Daha fazla bilgi [Harita açıklaması](../map-legend/index.md) makalesindedir. | ![Harita rotaları - MTB parkurları](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. MTB ölçeğine göre parkurları gösterir. Daha fazla bilgi [Harita Açıklaması](../map-legend/index.md) makalesindedir.
![Harita rotaları - MTB parkurları](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***. Uluslararası Dağ Bisikleti Birliği, [MTB IMBA](https://www.imba.com/)'ya göre MTB parkurlarını gösterir. Daha fazla bilgi [Harita açıklaması](../map-legend/index.md) makalesindedir.
![Harita rotaları - MTB parkurları](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Yürüyüş / Yürüyüş rotaları {#hiking--walking-routes}

[Yürüyüş rotaları](https://wiki.openstreetmap.org/wiki/Walking_Routes) üç türde bulunur: *yerel* (`lwn`), *bölgesel* (`rwn`), *ulusal* (`nwn`), *uluslararası* (`iwn`). Ayrıca, yürüyüş rotaları [Düğüm ağlarının](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) bir parçası olabilir. OsmAnd, yürüyüş ve trekking rotalarını ayırmaz ve bunları 1 grupta birleştirir. Rota segmentlerine renk atamasını seçebilirsiniz:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Rotaları, bireysel [yerel renklerine](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (OpenStreetMap'te mevcutsa) ve turistik kalkan sembolüne göre renklendirir.
![Harita rotaları - yürüyüş osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. [Ağ bağlantısına](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) göre renklendirir.
![Harita rotaları - yürüyüş ağı](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Rotaları [düğüm ağı](https://wiki.openstreetmap.org/wiki/Node_Networks) türüne göre (uluslararası, bölgesel veya yerel) renklendirir.
![Harita rotaları - yürüyüş düğüm ağları](@site/static/img/map/map-routes-hiking-node-networks.png)


### Kir Bisikleti Parkurları {#dirt-bike-trails}

![Harita rotaları - Kir Bisikleti Parkurları](@site/static/img/map/map-routes-dirt-bike-trails.png)

**Kir Bisikleti Parkurları** özelliği, `dirtbike:scale` etiketine göre harita üzerinde kir bisikletine özel rotaları görüntülemenizi sağlar. Bu ölçek, kir bisikleti için uygun parkurları vurgular ve zorluk seviyelerini gösteren renkli bir katmanla gösterir.

Bu özelliği *Menü → Haritayı Yapılandır → Rotalar → Kir bisikleti rotaları* bölümünde etkinleştirebilirsiniz. Sistem, MTB ölçeğine benzer şekilde çalışır ve kir bisikletine özel rotaların görsel bir temsilini sunar — [`dirtbike` etiketi hakkında daha fazla bilgiyi buradan bulabilirsiniz](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Tırmanma Rotaları {#climbing-routes}

![Harita rotaları - Tırmanma Rotaları](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd, *tırmanma alanlarını* (`climbing=area`) ve *tırmanma kayalıklarını* (`climbing=crag`) destekleyerek [kaya tırmanışı](https://wiki.openstreetmap.org/wiki/Climbing) konumlarını doğrudan harita üzerinde bulmanızı sağlar.

- **Tırmanma alanları**, birden fazla tırmanma rotasının bulunduğu **daha büyük bölgeleri** temsil eder.

- **Tırmanma kayalıkları**, tırmanış için uygun **belirli kaya oluşumlarını** veya duvarları ifade eder.

- Bu konumlar, aşağıdaki gibi **ayrıntılı özellikler** içerir:

    - *Tırmanma derecesi* (örn. UIAA, Fransız, YDS).
    - *Kaya türü* (örn. kireçtaşı, granit).
    - *Rota uzunluğu* (metre cinsinden).
    - *Tırmanma kalitesi* (sağlam, gevşek, karışık).
    - *Zirve defteri kullanılabilirliği*.

Harita üzerinde tırmanma konumlarını etkinleştirmek için şu adrese gidin: *Menü → Haritayı Yapılandır → Rotalar → Tırmanma Rotaları*.


### Yürüyüş Parkurları Zorluk Derecesi {#hiking-trails-difficulty-grade}

![Harita rotaları - alp yürüyüşü](@site/static/img/map/map-routes-alpine-hiking.png)

Bazı yol segmentleri birçok rotanın parçası olabilir, ancak dağlık alanlardaki segmentin zorluğunu temsil etmek için ayrı ayrı renklendirilebilirler. Şu anda OsmAnd, İtalyan ve İsviçre sınıflandırmalarını desteklemektedir ve her birinin bu segmente erişmek için belirli ekipman gereksinimleri listesi vardır.

1. [SAC ölçeği](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI ölçeği](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)


### Kayak rotaları {#ski-routes}

![Harita rotaları - kayak pistleri](@site/static/img/map/map-routes-ski-slopes.png)

Kayak rotaları, OpenStreetMap'teki [rotaların](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) belirli bir grubudur. Genellikle, bu rotalar [Kış ve Kayak](../map/vector-maps.md#winter-and-ski) harita stiliyle tüm görünür [Pistlerle](https://wiki.openstreetmap.org/wiki/Pistes) birlikte kullanılabilir.


### At rotaları {#horse-routes}

![Harita rotaları - at rotaları](@site/static/img/map/map-routes-horse.png)

[At rotaları](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse), at biniciliği için sembollerle renkli olarak belirtilen rotalar olarak görüntülenir.


### Akarsu sporları {#whitewater-sports}

![Harita rotaları - akarsu sporu](@site/static/img/map/map-routes-whitewater-sport.png)

[Akarsu rotaları](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe), erişim simgeleri ve [akarsu turizmi](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map) için tehlike bölgeleri ile birlikte gösterilir.


### Koşu rotaları {#running-routes}

![Fitness rotaları](@site/static/img/map/fitness_1.png)

OpenStreetMap'teki [koşu rotaları](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning), öncelikli olarak atletizm için adlandırılmış, numaralandırılmış veya başka şekilde işaretlenmiş koşu rotaları için kullanılır.


### Fitness parkurları {#fitness-trails}

![Fitness rotaları](@site/static/img/map/fitness_route.png)

Bir [fitness parkuru](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail), insan vücudunu sağlığını iyileştirmek için egzersiz yapmak amacıyla uzunluğu boyunca engeller veya istasyonlarla donatılmış bir parkur veya yoldur.


### Seyahat rotaları {#travel-routes}

<InfoAndroidOnly />

![Seyahat rotaları](@site/static/img/map/travel_route_2.png) ![Seyahat rotaları](@site/static/img/map/travel_routes.png)

Seyahat rotaları, [kullanıcının rotalarından](https://osmand.net/blog/routes#generated-travel-routes) oluşturulabilen veya ek [eklentilerin](../plugins/index.md) bir parçası olabilen özel [Seyahat kitabı](../plan-route/travel-guides.md) (`travel.obf`) dosyalarının bir parçasıdır.

Belirli ***Seyahat Kitaplarının*** ve ***parkur*** türlerinin görüntülenmesini özelleştirebilir, parkurları noktalar veya ***Nokta grupları*** olarak görüntüleyebilirsiniz (örneğin Wikivoyage seyahat kitapları için). [Seyahat rehberleri hakkında daha fazla bilgiyi buradan edinin](../plan-route/travel-guides.md).


## Rotaları Haritada Görüntüle {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Harita Rotaları bölümünü yapılandırın](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Parkur menüsü iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Gerekli rotaları haritada görüntülemek için, [Haritayı Yapılandır](../map/configure-map-menu.md) menüsünün *Rotalar listesi* bölümünde etkinleştirin.
- OsmAnd, [OpenStreetMap'te bulunan rotaları](https://wiki.openstreetmap.org/wiki/Relation:route) vurgulayabilir. Bunlar, [rotadaki sembole](#save-as-a-track) dokunarak seçilebilir ve görünür rota kümesi doğru yapılandırılmışsa, rengi ve simgeleri takip edebilirsiniz.
- [Rota Planla](../plan-route/create-route.md) aracını kullanarak rotaların üzerine bir parkur oluşturabilirsiniz.

![Harita rotaları - yürüyüş osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Harita rotaları - bisiklet-düğüm-ağları](@site/static/img/map/map-routes-cycle-node-networks.png)



## Rotalarla İşlemler {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota bilgisi](@site/static/img/map/routes_osm.png) ![Rota bilgisi](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota bilgisi](@site/static/img/map/routes_osm_ios.png) ![Rota bilgisi](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Harita üzerinde, [yürüyüş, bisiklet, seyahat ve daha fazlası](#type-of-routes) için, uygun yerlerde [OSMC sembolleriyle](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) işaretlenmiş rotaları seçebilirsiniz.

Harita üzerinde bir **rota sembolüne** dokunduğunuzda:

- O konumdaki **yakındaki rotaların bir listesi** görüntülenir.
- Listeden bir rota seçtikten sonra, o rota için ayrıntılı bilgi ve mevcut eylemleri gösteren bir [bağlam menüsü](../map/tracks/track-context-menu.md) açılır.

**Bağlam menüsünde** şunları yapabilirsiniz:

- Seçilen rota hakkında [ek bilgi](#route-info-and-elevation) görüntüleyin.
- Rotayı bir **GPX parkuru** olarak [kaydedin](#save-as-a-track).
- Rota boyunca [navigasyonu başlatın](#start-navigation).


### Rota Bilgisi ve Yükseklik {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota bilgisi](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota bilgisi](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Aşağıdaki bilgiler bağlam menüsünde görünür olacaktır:

- **Rota bilgisi**: Rota adı, OSM bağlantısı (OSM Düzenleme eklentisi gereklidir), Tür, Açıklama, Mesafe, Yön, Yokuş yukarı/Yokuş aşağı, Rakım aralığı, Ağ, Operatör, Durum, Renk, Gidiş-dönüş, Başlangıç/Bitiş noktaları ve daha fazlası.
- **Genel**: Boyut, Konum, Oluşturulma tarihi.
- **Ek Bilgi**. Etkinlik türünü görüntüler.
- eylem düğmeleri: [Kaydet](#save-as-a-track) ve [Navigasyonu Başlat](#start-navigation).
- [Yükseklik bilgisi](../navigation/setup/route-details.md#elevation-info). Rota üzerindeki yükseklik verileri hakkında bilgi görüntüler.
- [Parkuru Haritada Analiz Et](../map/tracks/index.md#analyze-track-on-map). Grafikler ve haritalar kullanarak parkur verilerinin ayrıntılı analizini görüntüler.

Seçilen bir rota için yükseklik, eğim veya rakım ayrıntılarının grafiğini görüntülemek için, bağlam menüsündeki aşağıdaki değerlerden herhangi birine dokunmanız yeterlidir: **Mesafe**, **Yokuş yukarı**, **Yokuş aşağı** veya **Rakım**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### Parkur Olarak Kaydet {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/routes-4.png) ![Yerdeki rotalar](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/hiking.png) ![Yerdeki rotalar](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Rotayı bir *GPX dosyası* olarak kaydetmek için, [Bilgi paneli](../map/tracks/track-context-menu.md#info-panel) altındaki **Kaydet (İndir)** düğmesine dokunun. Bu, [Görünümünü](./tracks/appearance.md) değiştirme, [Navigasyon](../navigation/setup/route-navigation.md) veya [Rota Planla](../plan-route/create-route.md) düzenleme gibi parkur eylemlerine erişebileceğiniz [Hızlı eylemler](../map/tracks/track-context-menu.md#track-actions) düğme panelini açacaktır.


### Navigasyonu Başlat {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Seçilen OSM rotası boyunca navigasyonu başlatmak için, [**Bilgi panelindeki**](../map/tracks/track-context-menu.md#info-panel) **Navigasyonu Başlat** düğmesine dokunun.

Bu, [**Parkurla Navigasyon**](../navigation/setup/gpx-navigation.md) modunu başlatacak ve sesli rehberlik ve navigasyon özellikleriyle rotayı takip etmenizi sağlayacaktır.


### Hızlı Eylemler {#quick-actions}

[Hızlı Eylem](../widgets/quick-action.md#configure-map) widget'ını kullanarak rotaların açılıp kapanacağını özelleştirebilirsiniz.


## Rota Arama {#routes-search}

[Arama işlevini](../search/index.md) kullanarak rota adıyla veya [Kategoriler bölümünde](../search/search-poi.md#) "Rotalar"ı seçerek rota bulun.

Arama yapmak için, *<Translate android="true" ids="search_button"/>* menüsüne veya *<Translate android="true" ids="search_button,search_categories"/>* bölümüne gidin ve etkinliğinizi girin.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

İstenilen rotaları bulmak için *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* bölümüne gidin. Rotalar; ad, etkinlik türü, uzunluk, konum ve en yakın noktaya olan mesafeyi içerir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Yalnızca istenen rotaları görüntülemek için filtreler düğmesini (sağ üst köşe) kullanın.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerdeki rotalar](@site/static/img/map/route_search_2.png) ![Yerdeki rotalar](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerdeki rotalar](@site/static/img/map/route_search_2_ios.png) ![Yerdeki rotalar](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## İlgili Makaleler {#related-articles}

- [Harita Bağlam Menüsü](./map-context-menu.md)
- [Haritayı Yapılandır](./configure-map-menu.md)
- [Parkurlar](./tracks/index.md)
- [Parkurlar Bağlam Menüsü](./tracks/track-context-menu.md)
- [Toplu taşıma](./public-transport.md)
- [Navigasyon rota çizgisi görünümü](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Son güncelleme: Mayıs 2025*