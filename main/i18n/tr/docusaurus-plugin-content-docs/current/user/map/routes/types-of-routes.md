---
source-hash: 97cbadd50fbc4e3456c25be84373804b63617bf768394b167c130bfa44b414f0
sidebar_position: 12
title: Rota Türleri
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

Rotalar, [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) verilerini kullanarak farklı açık hava etkinliklerini temsil eder. Haritada **rota numarası veya rota bayrağı içeren kalkan simgesine** dokunmak, rota hakkında ek bilgi sağlayan ve rotayı navigasyonun bir parçası olarak kullanmanıza olanak tanıyan bir bağlam menüsü açar.

Bazı rota türlerinin filtrelenmesini [Haritayı Yapılandır](../../map/configure-map-menu.md) menüsünden yapılandırabilirsiniz.

## Bisiklet {#cycle}

[Bisiklet rotaları](https://wiki.openstreetmap.org/wiki/Cycle_routes) üç türde bulunur: *yerel* (`lcn`), *bölgesel* (`rcn`), *ulusal* (`ncn`), *uluslararası* (`icn`). Ayrıca bisiklet rotaları [Düğüm ağlarının](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) parçası olabilir. Rota segmentlerine renk atamasını nasıl yapacağınızı seçebilirsiniz:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Daha fazla bilgiyi [Harita Göstergesi](../../map-legend/index.md) makalesinde bulabilirsiniz.


## Dağ bisikleti {#mountain-bike}

MTB rotaları [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) içinde özel bir eşlemeye sahiptir ve bisiklet rotalarından ayrı olarak seçilebilir.

- ***<Translate android="true" ids="mtb_scale"/>***.  Patikaları MTB ölçeğine göre gösterir. Daha fazla bilgi [Harita Göstergesi](../../map-legend/index.md) makalesindedir.  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  MTB patikalarını Uluslararası Dağ Bisikleti Derneği'ne göre gösterir, [MTB IMBA](https://www.imba.com/). Daha fazla bilgi [Harita göstergesi](../../map-legend/index.md) makalesindedir.  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Yürüyüş / Yürüyüş {#hiking--walking}

[Yürüyüş rotaları](https://wiki.openstreetmap.org/wiki/Walking_Routes) üç türde bulunur: *yerel* (`lwn`), *bölgesel* (`rwn`), *ulusal* (`nwn`), *uluslararası* (`iwn`). Ayrıca yürüyüş rotaları [Düğüm ağlarının](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) parçası olabilir. OsmAnd yürüyüş ve hiking rotalarını ayırmaz ve bunları 1 grupta birleştirir. Rota segmentlerine renk atamasını nasıl yapacağınızı seçebilirsiniz:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Rotaları kendi [yerel renklerine](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (OpenStreetMap'te mevcutsa) ve turist kalkanı sembolüne göre renklendirir.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  [Ağ üyeliğine](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) göre renklendirir.  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Rotaları [düğüm ağı](https://wiki.openstreetmap.org/wiki/Node_Networks) türüne göre renklendirir (uluslararası, bölgesel veya yerel).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Kir Bisiklet Patikaları {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

**Kir Bisiklet Patikaları** özelliği, `dirtbike:scale` etiketine dayalı olarak haritada kir bisikletine özgü rotaları görüntülemenizi sağlar. Bu ölçek, zorluk seviyelerini gösteren renkli bir kaplama ile kir bisikleti için uygun patikaları vurgular ([Harita Göstergesi](../../map-legend/osmand.md#routes)).  

Bu özelliği *Menü → Haritayı yapılandır → Rotalar → Kir bisiklet rotaları* bölümünden etkinleştirebilirsiniz. Sistem MTB ölçeğine benzer şekilde çalışır ve kir bisikletine özel rotaların görsel temsilini sunar — [`dirtbike` etiketi hakkında daha fazla bilgi burada](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale) bulunabilir.


## Tırmanış Rotaları {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd *tırmanış alanlarını* (`climbing=area`) ve *tırmanış kayalıklarını* (`climbing=crag`) destekler, böylece [kaya tırmanışı](https://wiki.openstreetmap.org/wiki/Climbing) konumlarını doğrudan haritada bulmanızı sağlar.

- **Tırmanış alanları**, birden fazla tırmanış rotasının bulunduğu **daha büyük bölgeleri** temsil eder.

- **Tırmanış kayalıkları**, tırmanış için uygun **belirli kaya oluşumlarını** veya duvarları ifade eder.

- Bu konumlar aşağıdaki **ayrıntılı öznitelikleri** içerir:

    - *Tırmanış derecesi* (ör. UIAA, Fransız, YDS).
    - *Kaya türü* (ör. kireçtaşı, granit).
    - *Rota uzunluğu* (metre cinsinden).
    - *Tırmanış kalitesi* (sağlam, gevşek, karışık).
    - *Zirve günlüğü kullanılabilirliği*.

Haritada tırmanış konumlarını etkinleştirmek için şuraya gidin: *Menü → Haritayı Yapılandır → Rotalar → Tırmanış Rotaları*.


## Yürüyüş Patikaları Zorluk Derecesi {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Bazı yol segmentleri birçok rotanın parçası olabilir, ancak dağlık alanlarda segmentin zorluğunu temsil etmek için ayrı ayrı renklendirilebilirler. Şu anda OsmAnd İtalyan ve İsviçre sınıflandırmalarını desteklemektedir ve her birinin bu segmente erişim için özel ekipman gereksinimleri listesi vardır.  

1. [SAC ölçeği](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI ölçeği](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Kayak pistleri ve rotaları {#ski-slopes-and-routes}

- _Kış ve Kayak_ harita stilinde _Kayak pistleri ve rotaları_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _OsmAnd varsayılan_ harita stilinde _Kayak pistleri ve rotaları_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Kayak pistleri ve rotaları, OpenStreetMap'teki [rotaların](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) özel bir grubudur. Tipik olarak bu rotalar, tüm görünür [Pistlerin](https://wiki.openstreetmap.org/wiki/Pistes) bulunduğu [Kış ve Kayak](../../map/map-styles.md#winter-and-ski) harita stiliyle kullanılabilir. Başka bir harita stili etkinse, [Kış ve Kayak](../../map/map-styles.md#winter-and-ski) stiline geçilmesini öneren bir banner gösterilir (*yalnızca Android*) ve yalnızca Eğimler gösterilir. Mevcut ekrandan çıkmadan harita stilini değiştirmek için ***Değiştir*** veya banner'ı gizlemek için ***Sonra*** öğesine dokunun.


## Kar motosikleti patikaları {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Kar motosikleti patikaları [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) içinde `route=snowmobile` olarak haritalanır. Kış rekreasyonu için ve kar mevsiminde uzak bölgeleri bağlamak için kullanılırlar. OsmAnd'da kar motosikleti patikaları tıklanabilir, bkz. [Rotalarla Eylemler](./index.md#actions-with-routes) bölümü.


## At rotaları {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[At rotaları](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) at binme için sembollerle renk belirtilmiş rotalar olarak görüntülenir.  


## Akarsu sporları {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Akarsu rotaları](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) erişim simgeleri, tehlike alanları ve [akarsu turizmi](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map) için yakın akıntılarla birlikte gösterilir. Akıntı dereceleri, nehir kesim dereceleri ve ilgili semboller için Harita Göstergesinde [Akarsu özellikleri](../../map-legend/osmand.md#whitewater-features) bölümüne bakın.


## Koşu {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

OpenStreetMap'teki [Koşu rotaları](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) öncelikle atletizm için adlandırılmış, numaralandırılmış veya başka şekilde işaretlenmiş koşu rotaları için kullanılır.


## Fitness patikaları {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[Fitness patikası](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail), insan vücudunu egzersiz yaparak sağlığı iyileştirmek için uzunluğu boyunca engeller veya istasyonlarla donatılmış bir patika veya yoldur.  


## Seyahat {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Seyahat rotaları, [kullanıcının rotalarından](https://osmand.net/blog/routes#generated-travel-routes) oluşturulabilen veya ek [eklentilerin](../../plugins/index.md) parçası olabilen özel [Seyahat kitabı](../../plan-route/travel-guides.md) (`travel.obf`) dosyalarının parçasıdır.  

Belirli ***Seyahat kitapları*** ve ***iz*** türlerinin görüntülenmesini özelleştirebilir, izleri nokta olarak görüntüleyebilir veya ***Nokta gruplarını*** görüntüleyebilirsiniz (örneğin Wikivoyage seyahat kitapları için). [Seyahat rehberleri hakkında daha fazla bilgiyi burada](../../plan-route/travel-guides.md) bulabilirsiniz.


## İlgili Makaleler {#related-articles}

- [Haritayı Yapılandır](../../map/configure-map-menu.md)
- [Harita Göstergesi](../../map-legend/osmand.md)
- [Rotalar](./index.md)