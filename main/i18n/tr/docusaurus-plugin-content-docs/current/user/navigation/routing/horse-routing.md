---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
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

*Atlı rota oluşturma*, atlar için güvenli ve uygun patikalar ve yollar üzerinde sürüşlerini planlamak isteyen biniciler için faydalı olabilir. Bu rota oluşturma türünün yardımıyla, aksi takdirde bilinmeyen yeni rotaları da keşfedebilirsiniz.

*Atlı rota oluşturma*, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

![Atlı](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Rota Parametreleri - At {#route-parameters---horse}

:::note
Varsayılan olarak, *Atlı sürüş profili* devre dışıdır. Bu profili rota oluşturma için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde açmanız gerekir.
:::

Atlı rota oluşturma, binicilere at dostu patikalar, at yolları ve binicilik parkurları hakkında bilgi sağlamak için tasarlanmıştır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Atlı rota ayarları Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Atlı rota ayarları iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. Harita üzerinde bir yol seçebilir veya listeden yol türlerini seçebilirsiniz. </summary> ![Yollardan kaçın Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir su taşımacılığı türü)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Atlar için rotaları tercih edip etmeyeceğinizi seçebilirsiniz. </summary> ![Atlı rotaları tercih et Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). At binicileri (öncelikli olarak) ve yayalar (ülkeye özgü düzenlemelere bağlı olarak) tarafından kullanılmak üzere tasarlanmış bir yol. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Bir [kapı](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate), hareketi engelleyen bir tür [bariyerdir](https://wiki.openstreetmap.org/wiki/Key:barrier). Genellikle bir duvar veya çitin, erişimi sağlamak veya kısıtlamak için açılıp kapanabilen bir bölümüdür. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | Bazı ülkelerde, [at arabaları](https://wiki.openstreetmap.org/wiki/Key:carriage) otoyollarda izin verilmez, sadece çok az sayıda başka yolda izin verilir. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi OSM'de otoyolların ve diğer ulaşım yollarının yanı sıra binaların, girişlerin, olanakların ve eğlence varlıklarının kullanımındaki kısıtlamaları tanımlamak için kullanılır. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Rota oluşturma için sadece atlar için özel olarak belirlenmiş caddeler kullanılacaktır. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Rota oluşturma için sadece atlar için özel olarak belirlenmiş yollar kullanılacaktır. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Tahmini seyahat süresi yükseklik etkisini yansıtacaktır. </summary> ![Yükseklik verilerini kullan Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Bu tercih, dik yokuşlardan kaçınmaya yardımcı olabilir. Yükseklik verileri olmadan, düz arazideki en hızlı rota hesaplanacaktır. |