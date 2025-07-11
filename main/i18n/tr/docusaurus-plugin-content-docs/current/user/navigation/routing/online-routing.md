---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title: Çevrimiçi yönlendirme
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Genel Bakış {#overview}

<InfoAndroidOnly />

Çevrimiçi yönlendirme, kullanıcıların zamandan tasarruf etmelerine ve daha verimli gezinmelerine yardımcı olabilecek güçlü bir araçtır. Ancak, çevrimiçi yönlendirmenin internet bağlantısına dayandığını ve ağ kapsama alanının zayıf olduğu bölgelerde kullanılamayabileceğini unutmamak önemlidir. Ayrıca, kullanıcılar her zaman dikkatli olmalı ve çevrimiçi bir yönlendirme hizmeti tarafından önerilen herhangi bir rotayı takip ederken kendi muhakemelerini kullanmalıdır.

![Çevrimiçi yönlendirme Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Rota Parametreleri - Çevrimiçi Yönlendirme {#route-parameters---online-routing}

*Çevrimiçi yönlendirme*, seçilen *Profilin* Navigasyon ayarlarının [Navigasyon türü](../guidance/navigation-settings.md#overview) bölümünde etkinleştirilebilir. OsmAnd'da, üç *Çevrimiçi yönlendirme* türü sağlayan iki önceden tanımlanmış *çevrimiçi yönlendirme motoru* ([ZLZK](https://zlzk.biz/) ve [OSM DE](https://routing.openstreetmap.de)) vardır: *Bisiklet, Araba ve Yaya*.

:::not
Çevrimiçi yönlendirme türleri *Sürüş, Bisiklet ve Yürüyüş* profilleri için tasarlanmıştır, ancak diğer OsmAnd profilleriyle (Kamyon, Motosiklet, Kayak, At Binme) de kullanılabilirler. Bunlar "olduğu gibi" sağlanır, bu nedenle farklı navigasyon seçeneklerini kullanarak bunları ihtiyaçlarınıza göre özelleştiremezsiniz.
:::

### Özel Çevrimiçi Yönlendirme {#custom-online-routing}

Önceden ayarlanmış çevrimiçi yönlendirme türlerine ek olarak, başka çevrimiçi yönlendirme mekanizmalarını da yapılandırabilirsiniz.
**+ Çevrimiçi yönlendirme motoru ekle** düğmesine dokunun ve önerilen çevrimiçi yönlendirme türlerinden birini seçin ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Uygun aracı seçin ve değişikliklerinizi kaydetmeden önce *yönlendirmeyi test et* seçeneğine dokunun.

![Özel çevrimiçi yönlendirme Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Özel çevrimiçi yönlendirme Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::bilgi
Çevrimiçi yönlendirme motorları arasındaki farkları [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers) adresinden okuyabilirsiniz.
:::

### Özel Çevrimiçi GPX Yönlendirme {#custom-online-gpx-routing}

Çevrimiçi sunucu, başlangıç noktanızı ve hedefinizi kullanarak bir rota oluşturur. Sunucudan izi aldıktan sonra, OsmAnd *[Yollara bağla](../setup/gpx-navigation.md#attach-to-the-roads)* özelliğini kullanarak bir rota oluşturur. Böylece gerekli tüm yönlendirme bilgileri çevrimdışı haritalarımızdan alınacak ve rota boyunca daha hassas rehberlik sağlanacaktır.

![Özel GPX yönlendirme Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Özel GPX yönlendirme Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Çevrimiçi Yönlendirme Ayarı {#online-routing-setting}

Navigasyon için çevrimiçi yönlendirme seçildiğinde, ayarlarda ek bir seçenek görünür.

![Ayarlar Çevrimiçi yönlendirme Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Navigasyon ayarlarında çevrimiçi yönlendirme seçildiğinde OsmAnd çevrimdışı yönlendirmeyi kullanmaya izin verir. Bu seçenek, bir rota çevrimiçi olarak zaten oluşturulmuşsa, ancak daha sonra rotadan bir sapma olmuşsa ve aynı zamanda internet bağlantısı kesilmişse yardımcı olabilir. Bu durumda, daha önce çevrimiçi olarak hesaplanan rotaya geri dönmek için çevrimdışı yönlendirme kullanılacaktır.

> *Son güncelleme: Haziran 2024*