---
source-hash: afe72063425498b71bb1dd721322f8785efd87d15a05cdd773b5036abe42e09b
sidebar_position: 0
title:  OsmAnd yönlendirmesi hakkında
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

Çevrimdışı OsmAnd yönlendirmesi OpenStreetMap verilerine dayanır ve farklı amaçlar için çeşitli rotalar sağlar. Bu, genişletilebilecek önceden tanımlanmış yönlendirme türlerinin bir listesidir. Navigasyon kuralları [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) dosyasında bulunur ve çevrimdışı yönlendirme için kullanılır. Profilinizi değiştirdiğinizde rota türü otomatik olarak değişir.


## Yönlendirme Türleri {#routing-types}

OsmAnd'da aşağıdaki profiller ve yönlendirme türleri önceden ayarlanmıştır: *Araba, Bisiklet, Yürüme, Kamyon, Motosiklet, Moped, Toplu taşıma, Tekne, Uçak, Kayak, Tren, Atlı gezinti*. Bunların yanı sıra, belirli yönlendirme kurallarına sahip kendi profillerinizi oluşturabilir veya [OsmAnd yönlendirme algoritmasını değiştirebilirsiniz](../routing/osmand-routing.md#customize-offline-routing).

:::note

- [**Kamyon, Motosiklet, Moped, Tren, Uçak, Tekne ve Atlı gezinti**](./osmand-routing.md) profilleri varsayılan olarak kapalıdır. Bu profilleri kullanmak için *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.

- [**Doğrudan noktaya**](./direct-to-point-routing.md) navigasyon türünün kendi profili yoktur ve etkinleştirilmiş herhangi biriyle kullanılabilir.

- OsmAnd çevrimdışı yönlendirmesi **[.xml dosyasını](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) değiştirerek yapılandırılabilir**. Daha fazla bilgi için [*Çevrimdışı yönlendirmeyi özelleştir*](../routing/osmand-routing.md#customize-offline-routing) makalesine bakın.

:::

| Kategori | Açıklama | Not |
|:------------|:---------------|:---------------|
| *OsmAnd çevrimdışı yönlendirme* | OsmAnd çevrimdışı yönlendirme mekanizması, rota hesaplaması için önceden indirilmiş haritaları veri kaynağı olarak kullanır. | Navigasyon türleri: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motosiklet](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Kamyon](car-based-routing#route-parameters---truck), [Tren](./train-routing.md). |
| *Doğrudan noktaya yönlendirme* | Ayrıca çevrimdışı haritaları kullanır ve düz bir çizgi yönlendirmesi (veya *noktadan noktaya* navigasyon) sağlar. | Navigasyon türleri: *[Düz çizgi](./straight-line-routing.md)*, *[Doğrudan noktaya](./direct-to-point-routing.md)*. |
| [*BRouter* *(çevrimdışı)*](./brouter.md) | [BRouter uygulaması](https://brouter.de/) tarafından sağlanan çevrimdışı yönlendirme. | Yalnızca **Android için** kullanılabilir. Tam açıklamayı [burada](./brouter.md) okuyun. |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Çevrimiçi yönlendirme, İnternet bağlantısı aracılığıyla sunucuların kaynaklarını çevrimiçi olarak rotayı oluşturur. | Yalnızca **Android için** kullanılabilir. [Çevrimiçi yönlendirmeyi](./online-routing.md) [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX gibi çeşitli çevrimiçi yönlendirme motorlarından bir rota oluşturacak şekilde yapılandırabilirsiniz. |

- *[Araba yönlendirmesi (Kamyon, Motosiklet)](./car-based-routing.md)* - OsmAnd, Araba, Kamyon ve Motosiklet sürücüleri için sürüş talimatları sağlar.
- *[Bisiklet yönlendirmesi (MTB)](./bicycle-based-routing.md)* - Bisiklet yönlendirmesi, özellikle bisikletçiler ve MTB meraklıları için navigasyon istemleri sağlar. Moped (scooter) sürücüleri tarafından da kullanılabilir.
- *[Yaya yönlendirmesi](./pedestrian-routing.md)* - sadece şehirde yürümek için değil, aynı zamanda yürüyüş gezileri sırasında da kullanılabilir.
- *[Moped yönlendirmesi](./moped-routing.md)* - bisiklet yönlendirmesine dayanır, ancak kendine özgü özellikleri vardır.
- *[Toplu Taşıma yönlendirmesi](./public-transport-navigation.md)* - şehirde seyahat ederken size yardımcı olabilir.
- *[Atlı gezinti yönlendirmesi](./horse-routing.md)* - binicilere atlı gezinti aktivitelerini planlamak ve keyfini çıkarmak için ihtiyaç duydukları araçları sağlar.
- *[Kayak yönlendirmesi](./ski-routing.md)* - kullanıcıların OsmAnd mobil uygulamasını kullanarak kayak turlarını ve diğer kış sporları aktivitelerini planlamasına ve gezinmesine olanak tanır.
- *[Tren yönlendirmesi](./train-routing.md)* - navigasyon için demiryolu hatlarını kullanma fırsatı sağlar.
- *[Tekne yönlendirmesi](./boat-navigation.md)* - nehirlerde, kanallarda, küçük göllerde ve açık denizde rota oluşturmak için kullanılabilir, ancak yalnızca OpenStreetMap'te suyolları işaretlenmişse.
- *[Düz çizgi yönlendirmesi](./straight-line-routing.md)* - düz bir çizgi yönlendirmesi (veya "noktadan noktaya" navigasyon) sağlar ve konumunuz değiştiğinde yeniden hesaplanır.
- *[Doğrudan noktaya yönlendirme](./direct-to-point-routing.md)* - düz bir çizgi yönlendirmesi (veya "noktadan noktaya" navigasyon) sağlar ve **Düz çizgi** yönlendirmesinin aksine navigasyon boyunca sabit kalır (rota yeniden hesaplaması devre dışıdır).


## Çevrimdışı Yönlendirmeyi Özelleştirme {#customize-offline-routing}

Kendi **routing.xml dosyanızı** oluşturabilir veya varsayılan **routing.xml** dosyasını değiştirebilir ve navigasyon için kullanabilirsiniz (yalnızca gelişmiş OsmAnd kullanıcıları için).

- [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) dosyasını cihazınıza kopyalayın. [Yardım bilgilerini](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) dikkatlice okuyun. Örnek olarak, OsmAnd kullanıcısının [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) dosyasını görüntüleyin.
- Değişiklikleri yaptıktan sonra, yeni *routing.xml* dosyası, üzerine dokunarak ve OsmAnd uygulamasında açmayı seçerek OsmAnd'a eklenebilir.
- Profiliniz için değiştirilmiş [Navigasyon türünü](../../navigation/guidance/navigation-settings.md#navigation-type) seçin.

Bu özellik hakkında daha fazla bilgi [*Teknik belgelerde*](../../../technical/osmand-file-formats/osmand-routing-xml.md) ve [*OsmAnd'ın GitHub sayfasında*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) bulunabilir.


## Belirli Yollardan Kaçınma {#avoid-specific-roads}

:::caution
Yollardan kaçınma özelliği geneldir ve *[Çevrimiçi yönlendirme](../routing/online-routing.md)* ve *[BRouter](../routing/brouter.md)* hariç tüm **[Yönlendirme türlerini](#routing-types)** etkiler.
:::

Rota hesaplarken hangi yollardan kaçınılacağını seçmenin iki olası yolu vardır:

- [Navigasyon ayarları](../guidance/navigation-settings.md) bölümündeki [Rota parametreleri](../guidance/navigation-settings.md#route-parameters) bölümünde yol tipini seçin. Bu ayarın açıklaması [Yönlendirme türleri](#routing-types) ayarları hakkındaki makalelerde verilmiştir. Örnek olarak, [Araba / Kamyon / Motosiklet](../routing/car-based-routing.md#route-parameters---car) yönlendirme türü açıklamasına bakın.
- Ayrıca, *harita bağlam menüsü* aracılığıyla *[Yollardan kaçın](../../map/map-context-menu.md#avoid-road)* seçeneğini kullanarak veya *[Yollardan kaçınma menüsü](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*) kullanarak yönlendirme için kullanılmayacak belirli yolları seçebilirsiniz.

:::note

- Yol maksimum yakınlaştırmada işaretlenmelidir, çünkü OsmAnd dokunuşu yanlış yorumlayabilir ve örneğin iki şeritli bir yolun veya kaldırımın yanlış tarafını engelleyebilir.
- Belirli yollardan kaçınma işlevi, [İzleme ile navigasyon](../setup/gpx-navigation.md) seçeneğiyle yanlış çalışır ve basitleştirilmiş [İşaretçi navigasyonu](../setup/markers-navigation.md#use-markers-in-navigation) üzerinde etkisi yoktur.

:::

### Yollardan Kaçınma Menüsü {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *Navigasyon düğmesi → Ayarlar → Yollardan kaçın...*

![Yollardan kaçınma menüsü Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *Navigasyon düğmesi → Ayarlar → Yollardan kaçın*

![Yollardan kaçınma menüsü iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

Bu menüde, rota hesaplaması için kullanmayı düşündüğünüz yolun önceki seçimini iptal edebilirsiniz. Bunu yapmak için, yolun karşısındaki çarpıya (Android) veya kırmızı **"-"** işaretine dokunun.

*Haritada seç* seçeneğini kullanarak, OsmAnd haritasında yolları yönlendirme için geçersiz olarak işaretlemeye devam edebilirsiniz.

*Harita bağlam menüsü* veya *Yollardan kaçınma menüsü* kullanarak kaçınılacak bir yol seçtiğinizde, yolların listesi harita ekranının üstünde gösterilecektir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita listesinde yoldan kaçın Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita listesinde yoldan kaçın iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Dışa Aktar / İçe Aktar {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Harita dışa aktarma Android 1'de yoldan kaçın](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Harita dışa aktarma Android 2'de yoldan kaçın](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Harita dışa aktarma iOS 1'de yoldan kaçın](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Harita dışa aktarma iOS 2'de yoldan kaçın](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Cihaz ayarlarınıza ve mevcut uygulamalara bağlı olarak, kaçınılacak yolların tüm listesi veya sadece biri, farklı konumlara bir `.osf` dosyası olarak [dışa aktarılabilir](../../personal/import-export.md#export). Önerilen listeden dışa aktarmak istediğiniz yolları seçin.

Rota hesaplaması sırasında kaçınılacak yolları diğer kaynaklardan `.osf` dosya biçiminde [içe aktarabilirsiniz](../../personal/import-export.md#import). Ayrıca, *İçe Aktar seçeneği* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*) kullanılarak da yapılabilir. Tüm verileri veya sadece birkaç kaçınılacak yolu (listede bir yolu bir tik ile işaretleyerek) içe aktarmayı seçebilirsiniz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita içe aktarma Android'de yoldan kaçın](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita içe aktarma iOS'ta yoldan kaçın](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Cihazlarınız arasında kaçınılacak yolları senkronize etmenin en uygun yolu [OsmAnd Cloud](../../personal/osmand-cloud.md) kullanmaktır (Pro aboneliği gereklidir).
:::


## Geçici Kısıtlamaları Dikkate Alın {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

*Geçici kısıtlamaları dikkate al* seçeneği, rota hesaplarken geçici yol kısıtlamalarını dikkate almayı sağlar. Bunlar yol yapımı veya bazı nedenlerden dolayı yol kapanmaları (kaza, yol onarımları, doğal afetler) gibi şeyleri içerebilir. Bu seçeneği etkinleştirmek, beklenmedik sapmalardan veya gecikmelerden kaçınmanıza yardımcı olabilir. Bazen bu bilgilerin güncel olmayabileceğini lütfen unutmayın.
OpenStreetMap'te bu bilgiler genellikle [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions) etiketiyle işaretlenir.


## Geliştirme Bölümü {#development-section}

*Rota parametreleri* ayarlarının (*Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Geliştirme*) **Geliştirme bölümü** yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde görünür. *Yönlendirme türü (Android) / Yönlendirme algoritması (iOS), GPX yaklaşımı (yalnızca Android), Otomatik yakınlaştırma ve OsmAnd Canlı verileri (yalnızca Android)* gibi ayarları içerir. Ayrıntılı açıklama için [Navigasyon Ayarları](../../navigation/guidance/navigation-settings.md#development-settings) makalesini okuyun.


> *Son güncelleme: Temmuz 2024*