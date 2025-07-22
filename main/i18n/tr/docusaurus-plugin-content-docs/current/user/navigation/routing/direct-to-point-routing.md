---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title: Doğrudan noktaya yönlendirme (Tekne)
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

OsmAnd'daki doğrudan noktaya yönlendirme, önceden tanımlanmış bir rotayı veya yol ağını takip etmek zorunda kalmadan harita üzerindeki belirli bir noktaya doğrudan gitmenizi sağlayan kullanışlı bir özelliktir. Bu özellik tekne kaptanları, açık hava meraklıları veya kurtarma operasyonları sırasında acil servisler tarafından kullanılabilir. Genel olarak, doğrudan noktaya yönlendirme, geleneksel yönlendirme yöntemlerinin uygun veya etkili olmayabileceği çeşitli durumlarda kullanılabilecek esnek ve çok yönlü bir özelliktir.

![Doğrudan noktaya navigasyon türü Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Bir çizgi üzerindeki bir nokta, hedefe olan uzaklığı mevcut konumunuzdan olan uzaklığıyla aynı olan sanal bir noktadır, ancak mevcut konumunuzun bir çizgi üzerine izdüşümü değildir. Bu, ilerlemeyi ölçmeyi kolaylaştırır ve doğru mesafeyi elde etmek için ölçüm aracını kullanabilirsiniz.


## Rota Parametreleri - Doğrudan Noktaya {#route-parameters---direct-to-point}

*Doğrudan noktaya* yönlendirme türü herhangi bir profile bağlı değildir ve farklı profillerle kullanılabilir.
Bu yönlendirme türü, arazide bulunabilecek dağlar, nehirler veya yoğun ormanlar gibi engelleri veya bariyerleri dikkate almaz. Ayrıca arazinin kalitesi, rotanın zorluk seviyesi veya rotanın güvenliğini veya uygulanabilirliğini etkileyebilecek diğer ilgili faktörler hakkında herhangi bir bilgi sağlamaz ([Rota Detayları](../setup/route-details.md) bölümü boştur).

:::note
Doğrudan noktaya ve Tekne navigasyon türlerini kullanırken, *Haritayı yapılandır*'da etkinleştirilebilen ve ayarlanabilen [Derinlik kontur verilerine](../../plugins/nautical-charts.md#nautical-map-style) ihtiyacınız olacaktır.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → herhangi bir profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Doğrudan noktaya yönlendirme ayarları](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → herhangi bir profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Doğrudan noktaya yönlendirme ayarları iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Diğer Yönlendirme Ayarları {#other-routing-settings}

- *Rota parametreleri*'nin [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route), rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz. Varsayılan değer 0 metre sapmadır, bu da rotanın yeniden hesaplanmadığı anlamına gelir.

- *Rota parametreleri*'nin [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni yönlendirme özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabildiğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* ayarı *Navigasyon ayarları → Rota parametreleri*'nde bulunur (*Android* için *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Bu ayarlar *Doğrudan noktaya* yönlendirme için de ayarlanabilir. Tahmini Varış Süresini hesaplamak için kullanılır.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Ayarları doğru bir şekilde yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir, ayrıca seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Haziran 2024*