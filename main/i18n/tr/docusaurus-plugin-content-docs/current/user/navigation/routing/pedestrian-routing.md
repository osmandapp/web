---
source-hash: c9cc4966613ed52d676e5a31b688413d05a80561124ece1be768467357788ff3
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

Yaya rotası, bir yayanın bir yerden başka bir yere seyahat etmesi için en iyi rotayı bulma sürecini ifade eder; bu süreçte yalnızca yayalara ayrılmış alanlar, kaldırımlar, yaya geçitleri ve yayalar için uygun kavşaklar gibi faktörler dikkate alınır. Ayrıca, tekerlekli sandalye erişilebilirliği için faydalı olabilecek *merdivenler* gibi diğer faktörleri de göz önünde bulundurabilir. OsmAnd, tahmini varış süresini (mesafeyi kat etme süresi) hesaplarken [Naismith kuralına](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb) göre her zaman yükseklik verilerini kullanır.

*Yaya rotasını* yapılandırmak için Navigasyon ayarlarının [Rota parametreleri bölümüne](../guidance/navigation-settings#route-parameters) gidin.

### Rota Parametreleri - Yürüme {#route-parameters---walking}

Yaya rotası sadece kentsel alanlarda değil, yayaların bir yerden başka bir yere gitmeye çalışırken çeşitli engellerle karşılaşabileceği yerlerde de faydalı olabilir. Bu rota türünü şehir dışında veya dağlarda koşu, yürüyüş ve İskandinav yürüyüşü yaparken de kullanabilirsiniz. İhtiyaçlarınıza göre rota parametrelerini ayarlamanız yeterlidir.

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
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. Harita üzerinde bir yol [seçebilir](../../map/map-context-menu/#avoid-road) veya listeden yol türlerini seçebilirsiniz. </summary>![Yollardan kaçın Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir su taşımacılığı türü)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Rota oluştururken hangi yüzey türünü tercih edeceğinizi seçebilirsiniz. </summary> ![Yükseklik yaya Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | İki seçenek arasından seçim yapabilirsiniz:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Bu rotalar genellikle ormanlar, dağlar ve parklar gibi doğal ortamlarda bulunur. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Bu dokulu zemin yüzey gösterge sistemi, kör veya görme engelli yayaların hareket etmesine yardımcı olmak için yaya yollarına, merdivenlere ve toplu taşıma platformlarına monte edilebilir. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi OSM'de otoyollar ve diğer ulaşım yolları ile binalar, girişler, olanaklar ve eğlence varlıklarının kullanımındaki kısıtlamaları tanımlamak için kullanılır. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Rota hesaplamasında yükseklik verileri kullanılacaktır: seçilen türden farklı olan yollar için [cezalar](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) belirlenecektir. </summary> ![Yükseklik verilerini kullan Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Bu tercih, dik tepelerden kaçınmaya veya tam tersi, onları tercih etmeye yardımcı olabilir. Bu seçeneği kullanmak yaya rotasında çok faydalı olabilir. Yükseklik verileri olmadan, düz arazideki en hızlı rota hesaplanacaktır. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| *Via ferrata* rotaları, bu seçenek ve *Yükseklik verilerini kullan* etkinleştirildiğinde rota için kullanılacaktır. | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata), sabit kablolar, basamaklar, merdivenler ve köprülerle donatılmış bir dağ rotasıdır. |

## Diğer Rota Ayarları {#other-routing-settings}

- Rota algoritması, OpenStreetMap'te belirtilen geçici kısıtlamaları da dikkate alabilir. Bu, *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* seçeneği kullanılarak yapılabilir. Bazı durumlarda OSM'den gelen bilgilerin güncel olmayabileceğini unutmayın.

- *Rota parametrelerinin* [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route), rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz.

- *Rota parametrelerinin* [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni rota özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabildiğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* ayarı *Navigasyon ayarları → Rota parametreleri* altında bulunur (*Android* için *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* altında). Bu ayar, hız sınırı olmayan bilinmeyen yollarda kullanılır. Bu durum genellikle bir parkurda veya çevrimiçi rotada gezinirken ortaya çıkar. Aracınızın parametrelerine göre ayarlanmalıdır.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Ayarları doğru şekilde yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir ve seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Haziran 2024*