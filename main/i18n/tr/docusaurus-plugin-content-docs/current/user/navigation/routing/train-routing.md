---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title:  Tren rotası
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




## Genel bakış {#overview}

:::note
Varsayılan olarak, *Tren profili* devre dışıdır. Bu profili yönlendirme için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde açmanız gerekir.
:::

OsmAnd'daki *Tren rotası*, kullanıcılara bir treni araba gibi sürüyormuş gibi demiryolu hatlarını navigasyon için kullanma imkanı sunar. Bu seçenek, örneğin başka yol bulunmadığında yürüyüş yaparken faydalı olabilir. Diğer durumlarda, *[Toplu taşıma rotası](./public-transport-navigation.md)* kullanmak daha iyidir.

![Harita taşıma tramvayı](@site/static/img/navigation/routing/train_routing_overview.png)


## Rota Parametreleri - Tren {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tren rotası ayarları Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tren rotası ayarları iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

*Tren rotası*, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.


## Diğer Rota Ayarları {#other-routing-settings}

- Rota algoritması, OpenStreetMap'te belirtilen geçici kısıtlamaları da dikkate alabilir. Bu, *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* seçeneği kullanılarak yapılabilir. Bazı durumlarda, OSM'den gelen bilgilerin güncel olmayabileceğini unutmayın.

- *Rota parametreleri* bölümünün [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route), rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz.

- *Rota parametreleri* bölümünün [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni rota özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabileceğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* ayarı *Navigasyon ayarları → Rota parametreleri* bölümünde bulunur (*Android* için, *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* bölümünde). Bu ayarlar *Noktaya doğrudan* rotası için de ayarlanabilir. Tahmini Varış Süresi'ni hesaplamak için kullanılır.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Ayarları doğru şekilde yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir, ayrıca seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Haziran 2024*