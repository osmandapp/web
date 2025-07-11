---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title: Düz hat yönlendirme (Uçak)
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

Geleneksel yönlendirme algoritmalarının yolları, patikaları veya önceden tanımlanmış rotaları kullanmasının aksine, düz hat yönlendirme, harita üzerindeki iki nokta arasındaki en kısa mesafeyi düz bir çizgi olarak hesaplar. Bu özellik, patikalardan uzaklaşmak veya geleneksel rotaların mevcut olmadığı uzak bölgeleri keşfetmek isteyen aktif yürüyüşçüler için faydalı olabilir. Hafif uçak pilotları ve gemi kaptanları için *Düz hat yönlendirme türünü* kullanmak navigasyonda çok faydalı olabilir.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- *Düz hat* yönlendirme, arazide bulunabilecek dağlar, nehirler veya yoğun ormanlar gibi engelleri dikkate almaz.
- Arazi kalitesi, rotanın zorluk seviyesi veya rotanın güvenliğini veya uygulanabilirliğini etkileyebilecek diğer ilgili faktörler hakkında herhangi bir bilgi sağlamaz ([Rota Detayları](../setup/route-details.md) bölümü boştur).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Rota Parametreleri - Düz Hat {#route-parameters---straight-line}

:::note
Düz hat yönlendirme, *Uçak profili* ile bağlantılıdır. Varsayılan olarak, bu profil devre dışıdır. Bu profili yönlendirme için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde açmanız gerekir.
:::

*Düz hat* yönlendirme, Navigasyon ayarlarının [Rota parametreleri bölümünde](../guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Hesaplanan rota ile gerçek coğrafi konum arasındaki açı sizin belirlediğinizden yüksek olduğunda, mevcut konumunuzdan hesaplanan rotaya en kısa yol oluşturulacaktır. Başka bir deyişle, OsmAnd daha önce hesaplanan rotaya ek bir rota segmenti hesaplayacaktır. |


## Diğer Yönlendirme Ayarları {#other-routing-settings}

- *Rota parametrelerinin* [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route), *Düz hat yönlendirme* için rotanın yeniden hesaplanacağı mesafe varsayılan olarak 500 metre olarak ayarlanmıştır.

- *Rota parametrelerinin* [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni yönlendirme özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabildiğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* ayarı *Navigasyon ayarları → Rota parametreleri* bölümünde bulunur (*Android* için, *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* bölümünde). Bu ayarlar *Noktadan noktaya* yönlendirme için de ayarlanabilir. Tahmini Varış Süresi'ni hesaplamak için kullanılır.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Ayarları doğru bir şekilde yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir ve seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Haziran 2024*