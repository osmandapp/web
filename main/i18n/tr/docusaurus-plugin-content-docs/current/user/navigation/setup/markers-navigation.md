---
source-hash: 840895be86a2bc170c5cc62b0abac17afda6a3dcd33c15c2d2b335a1a52fa27e
sidebar_position: 3
title: İşaretleyicilerle Gezinme
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

[Harita işaretleyicileri](../../personal/markers.md) harita üzerinde bayraklarla işaretlenmiş noktalardır. Ziyaret etmek istediğiniz bir konumu, hatırlamak istediğiniz bir ilgi noktasını belirtmek veya özel bir rota oluşturmak gibi çeşitli amaçlar için kullanılabilirler.

Özellikle yürüyüşçüler, bisikletçiler veya yeni bir alanı keşfeden ve harita üzerinde ilginç yerleri veya referans noktalarını işaretlemek isteyen herkes için faydalı olabilirler. [Favori noktalardan](../../personal/favorites.md) temel farkı, İşaretleyicilerin ad gerektirmemesi nedeniyle daha hızlı oluşturulabilmesidir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigasyon işaretleyicisi Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon işaretleyicisi iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Navigasyonda İşaretleyicileri Kullanma {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Fark işaretleyici navigasyon Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Fark işaretleyici navigasyon Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fark işaretleyici navigasyon iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Fark işaretleyici navigasyon iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Harita işaretleyicileri* bir rota oluştururken [varış noktası](./route-navigation#set-destinations) olarak kullanılabilir. Özellikle ara noktalarla bir rota ayarlamanız gerektiğinde kullanışlıdırlar.

Ancak *Harita işaretleyicileri* ayrıca [widget'lar](../../widgets/markers.md), hareket yönü, harita üzerindeki çizgiler gibi çeşitli işlevler de sağlar, böylece bir rota çizgisi oluşturmadan ve tam sesli rehberli navigasyona girmeden bu araçları navigasyon için kullanabilirsiniz.

Düz çizgiler olarak görüntülenen basit bir noktadan noktaya navigasyona ihtiyacınız varsa, ara noktalar olarak işaretleyicilerden oluşan bir ***Güzergah listesi*** oluşturabilir ve sıralayabilir ve basit navigasyon için widget'ları kullanabilirsiniz.


#### Öneriler {#recommendations}

İşte *İşaretleyicilerle Gezinme* için basit öneri adımları:

1. İşaretleyiciler oluşturun. Harita üzerinde istediğiniz nesne(ler)i bulun, üzerine dokunun ve *[harita bağlam menüsündeki](../../map/map-context-menu.md#add--edit-marker)* *[İşaretleyici düğmesini](../../personal/markers.md#add--edit-markers)* seçin. Ayrıca [favorilerden](#add-group-of-favorite) veya [GPX izlerinden](#add-group-of-track-waypoints) de işaretleyiciler oluşturabilirsiniz.
2. İşaretleyicileri geçmek istediğiniz şekilde [*sıralayın*](#sort-markers)
3. Navigasyonu başlatmadan İşaretleyicileri kullanmak isterseniz *Harita işaretleyicileri görünümünü* özelleştirin. *[Harita işaretleyicileri menüsünün](../../personal/markers.md#actions)* *[Görünüm](../../personal/markers.md#appearance-on-the-map)* bölümünde **Harita üzerindeki Oklar** ve **Yön çizgisi** seçeneklerini etkinleştirin.
4. *[Ekranı yapılandır menüsüne](../../widgets/configure-screen.md)* *[İşaretleyiciler widget'ları](../../personal/markers.md#markers)* ekleyin (isteğe bağlı).
5. Zaten ziyaret edilen işaretleyicileri [*geçmiş olarak işaretleyin*](#pass-markers) veya tekrar geçmek isterseniz geçmişten geri yükleyin.

:::note
[Harita işaretleyicileri menüsünün](../../personal/markers.md#appearance-on-the-map) *Görünüm* bölümünde **Harita üzerindeki Oklar** ve **Yön çizgisi** seçenekleri etkinleştirildiğinde, harita üzerinde bir ok veya kesikli çizgi göreceksiniz. Ok, geçerli harita ekranının dışındaysa etkin işaretleyiciye giden yönü gösterir. Coğrafi konumunuz ve işaretleyici aynı ekranda olduğunda yön çizgisi çizilir.
:::


## Güzergah Listesi {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![İşaretleyiciler listesi Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İşaretleyiciler listesi iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Güzergah listesi, haritada görünen *geçilebilir* işaretleyicilerin sıralı bir listesini temsil eder. Noktaları tek tek ekleyebilir veya silebilir ya da önceden hazırlanmış [GPX dosyası](#add-group-of-track-waypoints) veya [Favori grubu](#add-group-of-favorite) kullanarak toplu olarak yapabilirsiniz. Yerel yarışmalar veya maceralar için [Koordinat giriş aracı](../../plan-route/coordinate-input.md) kullanarak koordinatlardan bir nokta listesi oluşturmak faydalı olabilir.


### Tek İşaretleyiciler Ekleme {#add-single-markers}

*İşaretleyiciler* haritaya istenen konuma tek dokunuşla eklenebilir veya silinebilir. Ardından *[harita bağlam menüsü](../../map/map-context-menu.md#add--edit-marker)* makalesindeki talimatları izlemeniz gerekir.


### Favori Grubu Ekleme {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorileri işaretleyicilere 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorileri işaretleyicilere 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

*Harita işaretleyicilerini* *[Favorilerden](../../personal/favorites.md)* aşağıdaki yöntemleri kullanarak oluşturabilirsiniz:

- *[Favori grupları menüsü](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Favorilerim)*.
- Favoriler sayfa içi menüsündeki &#128681; simgesi *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Favorilerim→&#128681;)*.
- Harita işaretleyicileri menüsündeki *[Gruplar sekmesinde](../../personal/markers.md#marker-groups)* **'+'** (ekle) seçeneği *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### İz Noktaları Grubu Ekleme {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX'i işaretleyicilere 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Ara noktaları olan GPX izleri *Harita işaretleyicileri* olarak kullanılabilir ve hızlıca kapatılabilir:

- Harita işaretleyicileri menüsündeki *[Gruplar sekmesinde](../../personal/markers.md#marker-groups)* **'+'** (ekle) seçeneği *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Harita işaretleyicileri menüsündeki *[Gruplar sekmesinde](../../personal/markers.md#marker-groups)* iz yakınındaki anahtarı açın *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Yalnızca ara noktaları olan izler *Harita işaretleyicileri listesine* eklenebilir. Eklemek istediğiniz iz, haritada da görünür (etkin) olmalıdır.
:::

![GPX'i işaretleyicilere 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX'i işaretleyicilere 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Ayrıca, *[iz bağlam menüsünü](../../map/tracks/track-context-menu.md#points--waypoints)* kullanarak ara noktaları olan bir izden *İşaretleyiciler* oluşturabilirsiniz: *Haritada görünür bir ize dokunun → iz bağlam menüsünde Noktalar'ı seçin → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## İşaretleyicileri Sırala {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Listede İşaretleyicileri Sırala Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Listede İşaretleyicileri Sırala iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

*[Harita işaretleyicileri listesindeki](../../personal/markers.md#itinerary-list)* bir *Harita işaretleyicisi* sekmesinin sol köşesine (*Android*) veya sağ köşesine (*iOS*) basıp yukarı veya aşağı hareket ettirerek, *Navigasyon listesindeki* sırasını değiştirebilirsiniz (bir işaretleyici kartını hareket ettirirken, işaretleyicinin nereye yerleştirileceğini gösteren bir çizgi göreceksiniz).

OsmAnd uygulamasının Android sürümünde, *Harita işaretleyicileri* için başka sıralama seçenekleri de vardır (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sıralama ölçütü* veya *Rota planla*).


### Niteliklere Göre Sırala {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatif İşaretleyicileri sıralama Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternatif İşaretleyicileri sıralama Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

*İşaretleyicileri* şu şekilde sıralayabilirsiniz:

- **Ad** (*alfabetik olarak*) — İşaretleyicilerin açıklayıcı adları varsa, bu, aradığınız işaretleyiciyi hızlıca bulmak için faydalı bir yol olabilir.
- **Mesafe** (*en yakın veya en uzak önce*) - Bu seçenek, işaretleyicileri mevcut konumunuzdan uzaklıklarına göre sıralar.
- **Tarih** (*yakın zamanda veya uzun zaman önce*) - Bu, işaretleyicileri eklendikleri tarihe göre sıralar. Zamanla çok sayıda işaretleyici eklediyseniz, bu, en yenilerini görmek için faydalı bir yol olabilir.


### Rota Planlama Aracıyla Yeniden Sırala {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternatif İşaretleyicileri sıralama Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternatif İşaretleyicileri sıralama Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

İşaretleyiciler listesi aracındaki Rota Planla işlevini kullanarak *İşaretleyicileri* *Kapıdan kapıya* sıralayabilir, ters sıraya koyabilir veya bir *Gidiş-dönüş* rotası oluşturabilirsiniz. Bir *Navigasyon* seçeneğine dokunursanız, *İşaretleyiciler* [ara varış noktaları](../setup/route-navigation.md#intermediate-destinations) olarak kullanılacaktır.


## İşaretleyicileri Geç {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![İşaretleyiciyi Geç Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![İşaretleyiciyi Geç Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İşaretleyiciyi Geç iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![İşaretleyiciyi Geç iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Bir *İşaretleyici* geçildi olarak işaretlenebilir (*Android*) veya kapatılabilir (*iOS*).

- *[Harita bağlam menüsü](../../map/map-context-menu.md#add--edit-marker)* aracılığıyla.
- Bir *İşaretleyiciye* 40 metreden (*Android*) veya 50 metreden (*iOS*) daha yakın bir mesafeye yaklaştığınızda, *[İşaretleyiciler widget'ları](../../widgets/markers.md#top-bar-widget)* çubuğundaki bir anahtar etkinleşir.

Bir *İşaretleyici* geçildikten sonra, [Geçmiş](../../personal/markers.md#history) klasörüne taşınır ve gerekirse oradan geri yüklenebilir. [Listede](#itinerary-list) bir sonraki işaretleyici etkin hale gelir. [Ayarlarınıza](#use-markers-in-navigation) bağlı olarak, bir ok veya kesikli çizgi ile ona yönlendirilebilirsiniz.


## İlgili Makaleler {#related-articles}

- [Harita işaretleyicileri hakkında](../../personal/markers.md).
- [İşaretleyici widget'ı](../../widgets/markers.md).
__
- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](./route-navigation.md)
- [Rota detayları](./route-details.md)
- [İz ile navigasyon](./gpx-navigation.md)
- [Navigasyon ayarları](../guidance/navigation-settings.md)
- [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md)
- [Sesli komutlar / Bildirimler](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Son güncelleme: Haziran 2025*