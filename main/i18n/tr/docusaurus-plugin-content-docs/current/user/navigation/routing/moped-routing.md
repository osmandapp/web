---
source-hash: 75f7c0d57899f1fdc282afb4724e5f3f76160e359fd1c402d5453ff85ce761c8
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

*Moped rotası*, sürücülerin moped veya scooter gibi bir aracı sürmenin özelliklerini dikkate alarak en uygun (en hızlı) rotayı oluşturmasına olanak tanır. Rota belirleme süreci, yollarda veya bisiklet yollarında güvenli, konforlu ve yasal hareket için çeşitli faktörleri dikkate alır. Moped profili, yüksek hızlı yollardan kaçınır: özellikle, rota hesaplanırken otoyollardan ve hız sınırı 80 km/s'den yüksek olan yollardan kullanmaz.

:::note
Varsayılan olarak, *Moped profili* devre dışıdır. Bu profili rota belirleme için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde açmanız gerekir.
:::

## Rota Parametreleri - Moped {#route-parameters---moped}

*Moped rotası*, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

Moped'in rota ayarları çok basittir ve sadece birkaç seçenekten oluşur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moped routing settings Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moped routing settings iOS](@site/static/img/navigation/routing/moped_routing_new_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Harita üzerinde bir yol [seçebilirsiniz](../../map/map-context-menu/#avoid-road) veya listeden yol türü/türlerini seçebilirsiniz:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir su taşımacılığı türü)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir.  | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi, OSM'de otoyolların ve diğer ulaşım yollarının yanı sıra binaların, girişlerin, olanakların ve eğlence tesislerinin kullanımındaki kısıtlamaları tanımlamak için kullanılır.   |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Rota hesaplanırken OpenStreetMap'ten geçici kısıtlamaları dikkate alır (örneğin, mevsimsel kapanmalar veya inşaat çalışmaları).  | OSM verileri güncel olmayabilir, bu nedenle bazı geçici kısıtlamalar navigasyon sırasında artık geçerli olmayabilir.   |