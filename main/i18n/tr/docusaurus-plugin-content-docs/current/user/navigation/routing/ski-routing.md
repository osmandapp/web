---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
sidebar_position: 6
title: Kayak rotası
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

:::note
Kayak rotası ve kayak profili yalnızca [Kayak haritası görünümü eklentisi](../../plugins/ski-maps.md) etkinleştirildiğinde kullanılabilir.
:::

*Kayak rotası*, yeni alanları keşfetmek ve gezilerini önceden planlamak isteyen arazi kayakçıları, dağ kayakçıları ve diğer kış sporları meraklıları için özellikle yararlı olabilir. *Kayak rotası* ile OsmAnd kullanıcıları, kış manzaralarının güzelliğinin tadını çıkarırken rotaları planlayabilir ve güvenli bir şekilde gezinebilir.

*Kayak rotası*, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

![Harita rotaları - kayak pistleri](@site/static/img/navigation/routing/ski_routing_overview.png)


## Rota Parametreleri - Kayak {#route-parameters---ski}

:::note
Varsayılan olarak, *Kayak profili* devre dışıdır. Bu profili rota belirleme için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde açmanız gerekir.
:::

*Kayak rotası* ayarları, kullanıcıların istedikleri zorluk seviyesini ve keşfetmek istedikleri arazi türünü seçerek rotalarını planlamalarına olanak tanır. Pistlerde veya serbest sürüş sırasında güvenli, konforlu ve keyifli hareket için çeşitli seçenekler mevcuttur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kayak rotası ayarları Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Kayak rotası ayarları Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kayak rotası ayarları iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parametre | Rota belirleme için kullanılmasına izin verir | Not |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Birçok kayakçı tarafından bir sezon boyunca Kuzey tırmanışı ve arazi inişi amacıyla kullanılan önerilen bir [kayak turu yolu](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) veya alanı. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Rota belirleme için daha [zorlu rotalara](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) izin verilecektir. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Serbest sürüş kayağı için seçeneklerden birini seçin. </summary>![Pist dışı Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | [Kayak asansörlerinin](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) kullanılması açılacaktır |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Kızaklar](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type), bir insan tarafından çekilen veya yalnızca yerçekimi ile hareket eden daha küçük araçlardır. Etkinleştirildiğinde, [kızak pistleri](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) kayak rotası için kullanılacaktır |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Pist dışı Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |