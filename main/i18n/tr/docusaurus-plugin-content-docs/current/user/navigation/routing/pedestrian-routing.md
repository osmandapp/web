---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title: Yaya rotası
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Genel Bakış {#overview}

Yaya rotası, bir yayanın bir konumdan diğerine seyahat etmesi için en iyi rotayı bulma sürecini ifade eder; bu süreçte sadece yayalara ayrılmış alanlar, kaldırımlar, yaya geçitleri ve yaya dostu kavşaklar gibi faktörler dikkate alınır. Ayrıca, tekerlekli sandalye erişimi için faydalı olabilecek *merdivenler* gibi diğer faktörler de göz önünde bulundurulabilir. OsmAnd, tahmini varış süresini (mesafeyi kat etme süresi) hesaplarken her zaman [Naismith kuralına](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb) göre yükseklik verilerini kullanır.

*Yaya rotasını* yapılandırmak için Navigasyon ayarlarının [Rota parametreleri bölümüne](../guidance/navigation-settings#route-parameters) gidin.

### Rota Parametreleri - Yürüme {#route-parameters---walking}

Yaya rotası, sadece şehir içinde bir yerden bir yere gitmeye çalışırken çeşitli engellerle karşılaşabilecek yayalar için değil, aynı zamanda şehir dışında veya dağlarda koşu, yürüyüş ve İskandinav yürüyüşü yaparken de faydalı olabilir. İhtiyaçlarınıza göre rota parametrelerini ayarlamanız yeterlidir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yaya rotası ayarları Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yaya rotası ayarları iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. Harita üzerinde bir yol seçebilir veya listeden yol türlerini seçebilirsiniz. </summary>![Yollardan kaçın Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir su taşımacılığı türü)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Rota oluştururken hangi yüzey türünü tercih edeceğinizi seçebilirsiniz. </summary> ![Yükseklik yaya Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | İki seçenek arasından seçim yapabilirsiniz:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Bu rotalar genellikle ormanlar, dağlar ve parklar gibi doğal ortamlarda bulunur. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Bu dokulu zemin yüzey gösterge sistemi, kör veya görme engelli yayaların hareket etmesine yardımcı olmak için kaldırımlara, merdivenlere ve toplu taşıma platformlarına monte edilebilir. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi OSM'de otoyolların ve diğer ulaşım yollarının yanı sıra binaların, girişlerin, olanakların ve eğlence varlıklarının kullanımındaki kısıtlamaları tanımlamak için kullanılır. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Rota hesaplamasında yükseklik verileri kullanılacaktır: seçilen türden farklı yollar için [cezalar](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) belirlenecektir. </summary> ![Yükseklik verilerini kullan Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Bu tercih, dik tepelerden kaçınmaya veya tam tersi, onları tercih etmeye yardımcı olabilir. Bu seçeneği kullanmak yaya rotasında çok faydalı olabilir. Yükseklik verileri olmadan, düz arazideki en hızlı rota hesaplanacaktır. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Bu seçenek *Yükseklik verilerini kullan* ile birlikte etkinleştirildiğinde *Via ferrata* rotaları yönlendirme için kullanılacaktır. | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata), sabit kablolar, basamaklar, merdivenler ve köprülerle donatılmış bir dağ rotasıdır. |