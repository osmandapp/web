---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title: Bisiklet rotası (MTB)
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

Bisiklet rotası, bisikletçiler için güvenli ve yasal olan bisiklet yollarının, patikaların ve yolların mevcudiyeti gibi faktörleri dikkate alır. OsmAnd, tahmini varış süresini (mesafeyi kat etme süresi) hesaplarken [Naismith kuralına](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb) göre her zaman yükseklik verilerini kullanır. Varsayılan olarak en hızlı rota sağlanır.
Bisiklet rotası [dağ bisikleti](#mtb-routing-particularities) için de faydalı olabilir.

*Bisiklet rotasını* Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings#route-parameters) yapılandırabilirsiniz.


## Rota Parametreleri - Bisiklet {#route-parameters---bicycle}

OsmAnd'ın bisiklet rotası özellikleri, bisikletçilerin bir başlangıç ve bitiş noktası girmesine ve ardından tercihlerini ve yerel coğrafyayı dikkate alan bir rota oluşturmasına olanak tanır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bisiklet rotası ayarları](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bisiklet rotası ayarları iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Rota mekanizması daha doğrudan ve buna göre daha hızlı yolları seçecektir. | Hareket hızındaki artışa rağmen, kat edilen mesafe de aynı anda artar. Bu, kas eforunda artışa yol açar. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Sürüş&nbsp;stili* (iOS) | <details><summary> Daha iyi bir rota için sürüş stilinizi seçebilirsiniz. </summary> ![Sürüş stili bisiklet Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* ([ikincil](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) ve [yerleşim](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) etiketli daha az yoğun yollar tercih edilecektir) </li><li> *[Asfaltlanmamış yolları](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved) tercih et* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (bu seçenek *patikaları tercih et* ve *en kısa rota* arasında bir yerdedir) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (rota için daha geniş ve genellikle daha yoğun yollar tercih edilecek, daha hızlı rotalar sağlanacaktır) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. </summary>![Yollardan kaçın Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Haritada bir yol seçebilir veya listeden yol türlerini seçebilirsiniz: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Başka bir ülkeye sınırı geçmekten kaçının)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (su kütleleri üzerinden araç taşıyan bir su taşımacılığı türü)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Arnavut kaldırımı yolundan kaçının](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (bir su yolunun üzerinden geçtiği otoyolun kısımları) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Kaldırım taşı yok](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi, OSM'de otoyolların ve diğer ulaşım yollarının, binaların, girişlerin, olanakların ve eğlence varlıklarının kullanımındaki kısıtlamaları tanımlamak için kullanılır. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Tercih edilen&nbsp;arazi* (iOS) | <details><summary> Rota hesaplamasında yükseklik verileri kullanılacaktır: farklı yükseklik profiline sahip yollar için [cezalar](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) belirlenecektir. </summary> ![Yükseklik verilerini kullan Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Bu tercih, dik tepelerden kaçınmaya veya tam tersi, onları tercih etmeye yardımcı olabilir. *Engebeli* rota seçerseniz, tepeler ve dağlar tercih edilecektir. *Düz* ise, düzlükler tercih edilecek, tepelerden kaçınılacaktır. Daha az engebeli tercih, bu iki seçenek arasında bir yerdedir. Yükseklik verileri olmadan, düz arazideki en hızlı rota hesaplanacaktır. |


## MTB rotası özellikleri {#mtb-routing-particularities}

MTB (dağ bisikleti) rota mekanizması bisiklet rotası ile aynıdır. [MTB rotalarını](../../map/vector-maps.md#routes) kullanmak için bazı cezalar olduğunu ve bu nedenle eve veya işe bisiklet sürmek için daha az olası olduğunu unutmayın.