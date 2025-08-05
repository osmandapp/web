---
source-hash: 608b9213c4fcb3c823354f8437ecb5956cf9ff48ee8a5806aa35db217a835164
sidebar_position: 6
title: Atlı rota oluşturma
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

*Atlı rota oluşturma*, atlar için güvenli ve uygun patikalarda ve yollarda sürüşlerini planlamak isteyen biniciler için faydalı olabilir. Bu rota oluşturma türünün yardımıyla, aksi takdirde bilinmeyen yeni rotaları da keşfedebilirsiniz.

*Atlı rota oluşturma*, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Rota Parametreleri - At {#route-parameters---horse}

:::note
Varsayılan olarak, *Atlı sürüş profili* devre dışıdır. Bu profili rota oluşturma için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde açmanız gerekir.
:::

Atlı rota oluşturma, binicilere at dostu patikalar, at yolları ve sürüş parkurları hakkında bilgi sağlamak üzere tasarlanmıştır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. Harita üzerinde bir yol seçebilir veya listeden yol türlerini seçebilirsiniz. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir tür su taşımacılığı)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Atlar için rotaları tercih edip etmeyeceğinizi seçebilirsiniz. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Biniciler (öncelikli olarak) ve yayalar (ülkeye özgü düzenlemelere bağlı olarak) tarafından kullanılmak üzere tasarlanmış bir yol. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Bir [kapı](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate), hareketi engelleyen bir tür [bariyerdir](https://wiki.openstreetmap.org/wiki/Key:barrier). Genellikle bir duvar veya çit içinde, erişimi sağlamak veya kısıtlamak için açılıp kapatılabilen bir bölümdür. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | Bazı ülkelerde, [at arabaları](https://wiki.openstreetmap.org/wiki/Key:carriage) otoyollarda izinli değildir, sadece çok az sayıda başka yolda izinlidir. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi OSM'de otoyolların ve diğer ulaşım yollarının, ayrıca binaların, girişlerin, olanakların ve eğlence tesislerinin kullanımındaki kısıtlamaları tanımlamak için kullanılır. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Rota oluşturma için yalnızca atlar için özel olarak belirlenmiş caddeler kullanılacaktır. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Rota oluşturma için yalnızca atlar için özel olarak belirlenmiş yollar kullanılacaktır. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Tahmini seyahat süresi yükseklik etkisini yansıtacaktır. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Bu tercih, dik yokuşlardan kaçınmaya yardımcı olabilir. Yükseklik verileri olmadan, düz arazideki en hızlı rota hesaplanacaktır. |


## Diğer Rota Ayarları {#other-routing-settings}

- Rota algoritması, OpenStreetMap'te belirtilen geçici kısıtlamaları da dikkate alabilir. Bu, [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations) seçeneği kullanılarak yapılabilir. Bazı durumlarda, OSM'den gelen bilgilerin güncel olmayabileceğini unutmayın.

- *Rota parametreleri* bölümündeki [Rotayı yeniden hesapla bölümünde](../../navigation/guidance/navigation-settings.md#recalculate-route), rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz.

- *Rota parametreleri* bölümündeki [Geliştirme bölümünde](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni rota oluşturma özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabileceğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) ayarı *Navigasyon ayarları → Rota parametreleri* bölümünde bulunur (*Android* için, *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* bölümünde). Bu ayar, hız sınırı olmayan bilinmeyen yollarda kullanılır. Bu durum genellikle bir parkurda veya çevrimiçi rotada gezinirken ortaya çıkar. Aracınızın parametrelerine göre ayarlanmalıdır.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). Ayarları doğru bir şekilde yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir, ayrıca seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Haziran 2024*