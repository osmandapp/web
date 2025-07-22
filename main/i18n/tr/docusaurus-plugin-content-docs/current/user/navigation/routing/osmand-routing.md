---
source-hash: 7021923c986f2cd60c51183c1396e4c59265f7a68edc042e4249ee005d069bf9
sidebar_position: 0
title: OsmAnd yönlendirme hakkında
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

Çevrimdışı OsmAnd yönlendirmesi OpenStreetMap verilerine dayanır ve farklı amaçlar için çeşitli rotalar sunar. Bu, genişletilebilecek önceden tanımlanmış yönlendirme türlerinin bir listesidir. Navigasyon kuralları [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) dosyasında bulunur ve çevrimdışı yönlendirme için kullanılır. Profilinizi değiştirdiğinizde rota türü otomatik olarak değişir.


## Yönlendirme Türleri {#routing-types}

Aşağıdaki profiller, yönlendirme türleriyle birlikte OsmAnd'de önceden ayarlanmıştır: *Araba, Bisiklet, Yürüme, Kamyon, Motosiklet, Moped, Toplu taşıma, Tekne, Uçak, Kayak, Tren, At binme*. Bunların yanı sıra, belirli yönlendirme kurallarına sahip kendi profillerinizi oluşturabilir veya [OsmAnd yönlendirme algoritmasını değiştirebilirsiniz](../routing/osmand-routing.md#customize-offline-routing).

:::note

- [**Kamyon, Motosiklet, Moped, Tren, Uçak, Tekne ve At binme**](./osmand-routing.md) profilleri varsayılan olarak kapalıdır. Bu profilleri kullanmak için *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.

- [**Noktadan noktaya**](./direct-to-point-routing.md) navigasyon türünün kendi profili yoktur ve etkinleştirilmiş herhangi biriyle kullanılabilir.

- OsmAnd çevrimdışı yönlendirme, **[.xml dosyasını](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) değiştirerek yapılandırılabilir**. Daha fazla bilgi için [*Çevrimdışı yönlendirmeyi özelleştirme*](../routing/osmand-routing.md#customize-offline-routing) makalesine bakın.

:::

| Kategori | Açıklama | Not |
|:------------|:---------------|:---------------|
| *OsmAnd çevrimdışı yönlendirme* | OsmAnd çevrimdışı yönlendirme mekanizması, rota hesaplaması için önceden indirilmiş haritaları veri kaynağı olarak kullanır. | Navigasyon türleri: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motosiklet](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Kamyon](car-based-routing#route-parameters---truck), [Tren](./train-routing.md). |
| *Noktadan noktaya yönlendirme* | Çevrimdışı haritaları da kullanır ve düz bir çizgi yönlendirmesi (veya *noktadan noktaya* navigasyon) sağlar. | Navigasyon türleri: *[Düz çizgi](./straight-line-routing.md)*, *[Noktadan noktaya](./direct-to-point-routing.md)*. |
| [*BRouter* *(çevrimdışı)*](./brouter.md) | [BRouter uygulaması](https://brouter.de/) tarafından sağlanan çevrimdışı yönlendirme. | Yalnızca **Android** için kullanılabilir. Tam açıklamayı [buradan](./brouter.md) okuyun. |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Çevrimiçi yönlendirme, sunucuların kaynaklarını internet bağlantısı üzerinden çevrimiçi olarak rotayı oluşturur. | Yalnızca **Android** için kullanılabilir. [Çevrimiçi yönlendirmeyi](./online-routing.md) [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX gibi çeşitli çevrimiçi yönlendirme motorlarından bir rota oluşturacak şekilde yapılandırabilirsiniz. |

- *[Araba yönlendirme (Kamyon, Motosiklet)](./car-based-routing.md)* - OsmAnd, Araba, Kamyon ve Motosiklet sürücüleri için sürüş talimatları sağlar.
- *[Bisiklet yönlendirme (MTB)](./bicycle-based-routing.md)* - Bisiklet yönlendirme, bisikletçiler ve MTB meraklıları için özel olarak navigasyon istemleri sağlar. Moped (scooter) sürücüleri tarafından da kullanılabilir.
- *[Yaya yönlendirme](./pedestrian-routing.md)* - sadece şehirde yürüyüş için değil, aynı zamanda yürüyüş gezileri sırasında da kullanılabilir.
- *[Moped yönlendirme](./moped-routing.md)* - bisiklet yönlendirmeye dayanır, ancak kendine özgü özellikleri vardır.
- *[Toplu Taşıma yönlendirme](./public-transport-navigation.md)* - şehirde seyahat ederken size yardımcı olabilir.
- *[At binme yönlendirme](./horse-routing.md)* - binicilere at binme aktivitelerini planlamak ve keyfini çıkarmak için ihtiyaç duydukları araçları sağlar.
- *[Kayak yönlendirme](./ski-routing.md)* - kullanıcıların OsmAnd mobil uygulamasını kullanarak kayak turlarını ve diğer kış sporları aktivitelerini planlamasına ve gezinmesine olanak tanır.
- *[Tren yönlendirme](./train-routing.md)* - navigasyon için demiryolu hatlarını kullanma fırsatı sunar.
- *[Tekne yönlendirme](./boat-navigation.md)* - nehirler, kanallar, küçük göller ve açık denizde rota oluşturmak için kullanılabilir, ancak yalnızca OpenStreetMap'te suyolları işaretlendiğinde.
- *[Düz çizgi yönlendirme](./straight-line-routing.md)* - konumunuz değiştiğinde yeniden hesaplanan düz bir çizgi yönlendirmesi (veya "noktadan noktaya" navigasyon) sağlar.
- *[Noktadan noktaya yönlendirme](./direct-to-point-routing.md)* - **Düz çizgi** yönlendirmesinin aksine (rota yeniden hesaplaması devre dışıdır) tüm navigasyon boyunca sabit kalan düz bir çizgi yönlendirmesi (veya "noktadan noktaya" navigasyon) sağlar.


## Çevrimdışı Yönlendirmeyi Özelleştirme {#customize-offline-routing}

Kendi **routing.xml dosyanızı** oluşturabilir veya varsayılan **routing.xml** dosyasını değiştirebilir ve navigasyon için kullanabilirsiniz (yalnızca ileri düzey OsmAnd kullanıcıları için).

- [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) dosyasını cihazınıza kopyalayın. [Yardım bilgilerini](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) dikkatlice okuyun. Örnek olarak, OsmAnd kullanıcısının [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) dosyasını görüntüleyin.
- Değişiklikleri yaptıktan sonra, yeni *routing.xml* dosyası, üzerine dokunarak ve OsmAnd uygulamasında açmayı seçerek OsmAnd'e eklenebilir.
- Profiliniz için değiştirilmiş [Navigasyon türünü](../../navigation/guidance/navigation-settings.md#navigation-type) seçin.

Bu özellik hakkında daha fazla bilgi [*Teknik dokümantasyonda*](../../../technical/osmand-file-formats/osmand-routing-xml.md) ve [*OsmAnd'in GitHub sayfasında*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) bulunabilir.


## Belirli Yollardan Kaçınma {#avoid-specific-roads}

:::caution
Yollardan kaçınma özelliği geneldir ve *[Çevrimiçi yönlendirme](../routing/online-routing.md)* ve *[BRouter](../routing/brouter.md)* hariç tüm **[Yönlendirme türlerini](#routing-types)** etkiler.
:::

Rota hesaplarken hangi yollardan kaçınılacağını seçmenin iki olası yolu vardır:

- [Navigasyon ayarlarının](../guidance/navigation-settings.md) [Rota parametreleri](../guidance/navigation-settings.md#route-parameters) bölümünde yol türünü seçin. Bu ayarın açıklaması [Yönlendirme türleri](#routing-types) ayarları hakkındaki makalelerde verilmiştir. Örnek olarak, [Araba / Kamyon / Motosiklet](../routing/car-based-routing.md#route-parameters---car) yönlendirme türü açıklamasına bakın.
- Ayrıca, *harita bağlam menüsü* aracılığıyla *[Yollardan kaçınma](../../map/map-context-menu.md#avoid-road)* seçeneğini kullanarak veya *[Yollardan kaçınma menüsünü](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*) kullanarak yönlendirme için kullanılmayacak belirli yolları seçebilirsiniz.

:::note

- Yol maksimum yakınlaştırmada işaretlenmelidir, çünkü OsmAnd dokunuşu yanlış yorumlayabilir ve örneğin iki şeritli bir yolun veya kaldırımın yanlış tarafını engelleyebilir.
- Belirli yollardan kaçınma işlevi, [İz ile navigasyon](../setup/gpx-navigation.md) seçeneğiyle yanlış çalışır ve basitleştirilmiş [İşaretçi navigasyonunu](../setup/markers-navigation.md#use-markers-in-navigation) etkilemez.

:::

### Yollardan Kaçınma Menüsü {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *Navigasyon düğmesi → Ayarlar → Yollardan kaçın...*

![Yollardan kaçınma menüsü Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *Navigasyon düğmesi → Ayarlar → Yollardan kaçın*

![Yollardan kaçınma menüsü iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

Bu menüde, kaçınılması gereken yolun önceki seçimini iptal edebilirsiniz. Bunu yapmak için, rota hesaplaması için kullanmayı düşündüğünüz yolun karşısındaki çarpıya (Android) veya kırmızı **"-"** işaretine dokunun.

*Haritada seç* seçeneğini kullanarak, OsmAnd haritasında yolları yönlendirme için geçersiz olarak işaretlemeye devam edebilirsiniz.

*Harita bağlam menüsü* veya *Yollardan kaçınma menüsü* kullanarak kaçınılacak bir yol seçtiğinizde, yolların listesi harita ekranının üstünde gösterilecektir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita listesinde yoldan kaçınma Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita listesinde yoldan kaçınma iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Dışa Aktar / İçe Aktar {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Harita dışa aktarma Android 1'de yoldan kaçınma](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Harita dışa aktarma Android 2'de yoldan kaçınma](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Harita dışa aktarma iOS 1'de yoldan kaçınma](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Harita dışa aktarma iOS 2'de yoldan kaçınma](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Cihaz ayarlarınıza ve mevcut uygulamalarınıza bağlı olarak, kaçınılacak yolların tüm listesi veya sadece bir tanesi `.osf` dosyası olarak farklı konumlara [dışa aktarılabilir](../../personal/import-export.md#export). Önerilen listeden dışa aktarmak istediğiniz yolları seçin.

Rota hesaplaması sırasında kaçınılacak yolları diğer kaynaklardan `.osf` dosya biçiminde [içe aktarabilirsiniz](../../personal/import-export.md#import). Ayrıca, *İçe aktarma seçeneği* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*) kullanılarak da yapılabilir. Tüm verileri veya yalnızca birkaç kaçınılacak yolu (listede bir yolu işaretleyerek) içe aktarmayı seçebilirsiniz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita içe aktarma Android'de yoldan kaçınma](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita içe aktarma iOS'ta yoldan kaçınma](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Cihazlarınız arasında kaçınılacak yolları senkronize etmenin en uygun yolu [OsmAnd Cloud](../../personal/osmand-cloud.md) kullanmaktır (Pro aboneliği gereklidir).
:::


## Geçici Kısıtlamaları Dikkate Alın {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

*Geçici kısıtlamaları dikkate al* seçeneği, rota hesaplarken geçici yol kısıtlamalarını dikkate almayı sağlar. Bunlar, yol yapımı veya bazı nedenlerle (kaza, yol onarımları, doğal afetler) yol kapanmaları gibi şeyleri içerebilir. Bu seçeneği etkinleştirmek, beklenmedik sapmaları veya gecikmeleri önlemenize yardımcı olabilir. Bazen bu bilgilerin güncel olmayabileceğini lütfen unutmayın.
OpenStreetMap'te bu bilgi genellikle [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions) etiketiyle işaretlenir.


## Geliştirme Bölümü {#development-section}

*Rota parametreleri* ayarlarının (*Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Geliştirme*) **Geliştirme bölümü**, yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde görünür. *Yönlendirme türü (Android) / Yönlendirme algoritması (iOS), GPX yaklaştırma (yalnızca Android), Otomatik yakınlaştırma ve OsmAnd Canlı verileri (yalnızca Android)* gibi ayarları içerir. Ayrıntılı açıklama için [Navigasyon Ayarları](../../navigation/guidance/navigation-settings.md#development-settings) makalesini okuyun.


> *Son güncelleme: Temmuz 2024*