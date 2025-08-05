---
source-hash: 3633198fddb7fe35a05678692319490fc58e0d27eeeb3150a2ae252eba8bd136
sidebar_position: 4
title: Moped rotası
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

*Moped rotası*, sürücülerin moped veya scooter gibi bir aracı sürmenin özelliklerini dikkate alarak en uygun (en hızlı) rotayı oluşturmasına olanak tanır. Rota oluşturma süreci, yollarda veya bisiklet yollarında güvenli, konforlu ve yasal hareket için çeşitli faktörleri dikkate alır.

:::not
Varsayılan olarak, *Moped profili* devre dışıdır. Bu profili rota oluşturmak için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.
:::


## Rota Parametreleri - Moped {#route-parameters---moped}

*Moped rotası*, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

Mopedin rota ayarları çok basittir ve sadece birkaç seçenekten oluşur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moped rota ayarları Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moped rota ayarları iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | Navigasyon sırasında kaçınmak istediğiniz yolları seçin. | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. </summary>![Yollardan kaçın Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Harita üzerinde bir yol [seçebilir](../../map/map-context-menu/#avoid-road) veya listeden yol türlerini seçebilirsiniz: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir su taşımacılığı türü)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi OSM'de otoyolların ve diğer ulaşım yollarının yanı sıra binaların, girişlerin, olanakların ve eğlence tesislerinin kullanımındaki kısıtlamaları tanımlamak için kullanılır. |


## Diğer Rota Ayarları {#other-routing-settings}

- Rota algoritması, OpenStreetMap'te belirtilen geçici kısıtlamaları da dikkate alabilir. Bu, *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* seçeneği kullanılarak yapılabilir. Bazı durumlarda OSM'den gelen bilgilerin güncel olmayabileceğini unutmayın.

- *Rota parametreleri* bölümündeki [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route) rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz.

- *Rota parametreleri* bölümündeki [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni rota özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabileceğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* ayarı *Navigasyon ayarları → Rota parametreleri* bölümünde bulunur (*Android* için *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* bölümünde). Bu ayar, hız sınırı olmayan bilinmeyen yollarda kullanılır. Bu durum genellikle bir parkuru veya çevrimiçi rotayı takip ederken ortaya çıkar. Aracınızın parametrelerine göre ayarlanmalıdır.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Ayarları doğru yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir ve seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Haziran 2024*