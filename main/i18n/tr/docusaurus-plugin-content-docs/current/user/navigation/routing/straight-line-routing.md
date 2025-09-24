---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Düz hat rotası (Uçak)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Genel Bakış {#overview}

Yolları, patikaları veya önceden tanımlanmış rotaları kullanan geleneksel rota algoritmalarının aksine, düz hat rotası, harita üzerindeki iki nokta arasındaki en kısa mesafeyi düz bir çizgi olarak hesaplar. Bu özellik, patikalardan uzaklaşmak veya geleneksel rotaların bulunmadığı uzak bölgeleri keşfetmek isteyen aktif yürüyüşçüler için faydalı olabilir. Hafif uçak pilotları ve gemi kaptanları için *Düz hat rotası türünü* kullanmak navigasyonda çok faydalı olabilir.

<!-- ![Düz hat Navigasyon örneği Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Düz hat Navigasyon örneği Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- *Düz hat* rotası, arazide bulunabilecek dağlar, nehirler veya yoğun ormanlar gibi engelleri dikkate almaz.
- Arazinin kalitesi, rotanın zorluk seviyesi veya rotanın güvenliğini veya uygulanabilirliğini etkileyebilecek diğer ilgili faktörler hakkında herhangi bir bilgi sağlamaz ([Rota Detayları](../setup/route-details.md) bölümü boştur).

![Düz hat Navigasyon türü Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Rota Parametreleri - Düz Hat {#route-parameters---straight-line}

:::note
Düz hat rotası *Uçak profiline* bağlıdır. Varsayılan olarak, bu profil devre dışıdır. Bu profili rota için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.
:::

*Düz hat* rotası, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Düz hat rotası ayarları Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Düz hat rotası ayarları iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Düz hat yeniden hesaplama Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Hesaplanan rota ile gerçek coğrafi konum arasındaki açı sizin tarafınızdan ayarlanan açıdan daha yüksek olduğunda, mevcut konumunuzdan hesaplanan rotaya en kısa yol oluşturulacaktır. Başka bir deyişle, OsmAnd daha önce hesaplanan rotaya ek bir rota segmenti hesaplayacaktır. |