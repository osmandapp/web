---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title: Doğrudan noktaya rota oluşturma (Tekne)
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

OsmAnd'deki doğrudan noktaya rota oluşturma, önceden tanımlanmış bir rotayı veya yol ağını takip etmek zorunda kalmadan harita üzerindeki belirli bir noktaya doğrudan gitmenizi sağlayan kullanışlı bir özelliktir. Bu özellik tekne kaptanları, açık hava meraklıları veya kurtarma operasyonları sırasında acil servisler tarafından kullanılabilir. Genel olarak, doğrudan noktaya rota oluşturma, geleneksel rota oluşturma yöntemlerinin uygun veya etkili olmayabileceği çeşitli durumlarda kullanılabilecek esnek ve çok yönlü bir özelliktir.

![Doğrudan noktaya navigasyon türü Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Bir çizgi üzerindeki bir nokta, varış noktasına olan mesafesi mevcut konumunuzdan olan mesafeyle aynı olan sanal bir noktadır, ancak mevcut konumunuzun bir çizgi üzerine izdüşümü değildir. Bu, ilerlemeyi ölçmeyi kolaylaştırır ve doğru mesafeyi elde etmek için ölçüm aracını kullanabilirsiniz.

## Rota Parametreleri - Doğrudan Noktaya {#route-parameters---direct-to-point}

*Doğrudan noktaya* rota oluşturma türü herhangi bir profile bağlı değildir ve farklı profillerle kullanılabilir.
Bu rota oluşturma türü, arazide bulunabilecek dağlar, nehirler veya yoğun ormanlar gibi engelleri veya bariyerleri dikkate almaz. Ayrıca arazinin kalitesi, rotanın zorluk seviyesi veya rotanın güvenliğini veya uygulanabilirliğini etkileyebilecek diğer ilgili faktörler hakkında herhangi bir bilgi sağlamaz ([Rota Detayları](../setup/route-details.md) bölümü boştur).

:::note
Doğrudan noktaya ve Tekne navigasyon türlerini kullanırken, *Haritayı yapılandır* bölümünde etkinleştirilebilen ve ayarlanabilen [Derinlik konturları verilerine](../../plugins/nautical-charts.md#nautical-map-style) ihtiyacınız olacaktır.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → herhangi bir profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Doğrudan noktaya rota oluşturma ayarları](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → herhangi bir profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Doğrudan noktaya rota oluşturma ayarları iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>