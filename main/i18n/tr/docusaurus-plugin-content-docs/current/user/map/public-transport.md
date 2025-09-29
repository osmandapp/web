---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title: Toplu Taşıma
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Genel Bakış {#overview}

Toplu taşıma, harita üzerinde ulaşım rotalarını ve duraklarını görüntülemenizi, bunlar hakkında detaylı bilgi almanızı ve navigasyon yapmanızı sağlayan ek bir katmandır.

## Toplu Taşıma Durakları (Katman) {#transport-stops-layer}

Toplu taşıma katmanını etkinleştir/devre dışı bırak:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Toplu taşıma katmanı Android](@site/static/img/map/pt_layer_android.png) ![Toplu taşıma katmanı iOS](@site/static/img/map/pt_layer_ios.png)

Görüntülemek için 1 veya daha fazla ulaşım kategorisi seçin:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

Ulaşımın haritada nasıl görüntülendiği hakkında [daha fazla bilgi edinin](../map/vector-maps.md#transport).


## Toplu Taşıma Rotaları (Bağlam Menüsü) {#transport-routes-context-menu}

![Toplu taşıma Rotası menüsü Android](@site/static/img/map/pt_routemenu_android.png) ![Toplu taşıma Rotası menüsü iOS](@site/static/img/map/pt_routemenu_ios.png)

Toplu taşıma menüsünü açmak için toplu taşıma simgesine dokunabilirsiniz. Şunları görüntüler:

- Toplu taşıma renkli Kalkanları (**tıklanabilir**)
- O durakta veya yakınında (150 m içinde) duran [rotaların listesi](#routes)
- Durağın adı ve diğer [detaylar](#transport-stop-details)

### Toplu Taşıma Durağı Detayları {#transport-stop-details}

![Toplu taşıma Rotası menüsü detayları Android](@site/static/img/map/pt_routemenu_details_android.png) ![Toplu taşıma Rotası menüsü iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Toplu taşıma durağı, standart OpenStreetMap nesne [menüsüne](../map/map-context-menu.md#details) kıyasla ek detaylar sunar:

- Bank varlığı
- Kapalı alan varlığı
- Tekerlekli sandalye erişilebilirliği
- İşletmeci adı

**Not**: Durakları belirli kriterlere göre filtreleyebilirsiniz. Örneğin, "Bank" / "Evet" seçeneğini genişletip dokunarak banklı durakların listesini görebilirsiniz. Ayrıca bunlar [haritada da gösterilebilir](../map/point-layers-on-map.md#points-of-interest-pois).


### Rotalar {#routes}

![Toplu taşıma Rotaları Android](@site/static/img/map/pt_routes_android.png) ![Toplu taşıma Rotaları iOS](@site/static/img/map/pt_routes_ios.png)

Toplu Taşıma Rotaları, seçilen duraktan ve yakındaki rotalardan (150m içinde) geçen tüm toplu taşıma rotalarıdır. Rota bilgileri, ref, ad, renk ve tür gibi [OpenStreetMap verilerinden](https://wiki.openstreetmap.org/wiki/Public_transport) alınır.

**Kalkan rengi**:

- Metro - kendi hat rengi
- Demiryolu - kahverengi
- Otobüs ve diğerleri - kırmızı
- Tramvay - mavi
- Troleybüs - mor

### Rotaya Göz At {#browse-route}

![Toplu taşıma Rota listesi Android](@site/static/img/map/pt_route_list_android.png) ![Toplu taşıma Rota listesi Android](@site/static/img/map/pt_route_list_ios.png)

Rotaya Göz At menüsüne **bir kalkana tıklayarak** veya rotalar listesinden **bir rota seçerek** girebilirsiniz. Bundan sonra '<Translate android="true" ids="shared_string_previous"/>' ve '<Translate android="true" ids="shared_string_next"/>' düğmelerine tıklayarak duraklar arasında gezinebilirsiniz. Durak bilgisi menüde güncellenecek ve durak haritada konumlandırılacaktır.

<Translate android="true" ids="rendering_category_details"/> düğmesine tıklayarak durakların tam listesini görebilirsiniz. Şu anda seçili durak, Rotalar listesinde 'konum' simgesiyle işaretlenmiştir.

> **NOT**: *<Translate android="true" ids="get_directions"/> düğmesine dokunursanız, mevcut konumunuzdan seçilen Toplu Taşıma İstasyonuna bir rota alırsınız.*


## İlgili Makaleler {#related-articles}

- [Vektör haritalar](../map/vector-maps.md)
- [Toplu taşıma navigasyonu](../navigation/routing/public-transport-navigation.md)