---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  İşaretleyicilerle Gezinme
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

[Harita işaretleyicileri](../../personal/markers.md), harita üzerinde bayraklarla işaretlenmiş noktalardır. Ziyaret etmek istediğiniz bir konumu, hatırlamak istediğiniz bir ilgi çekici noktayı belirtmek veya özel bir rota oluşturmak gibi çeşitli amaçlar için kullanılabilirler.

Özellikle yürüyüşçüler, bisikletçiler veya harita üzerinde ilginç yerleri veya referans noktalarını işaretlemek isteyen yeni bir bölgeyi keşfeden herkes için faydalı olabilirler. [Favori noktalarından](../../personal/favorites.md) temel farkı, İşaretleyicilerin ad gerektirmemesi nedeniyle daha hızlı oluşturulmasıdır.

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

*Harita işaretleyicileri*, bir rota oluştururken [varış noktaları](./route-navigation#set-destinations) olarak hizmet edebilir. Ara noktalarla bir rota belirlemeniz gerektiğinde özellikle kullanışlıdırlar.

Ancak *Harita işaretleyicileri* aynı zamanda [widget'lar](../../widgets/markers.md), hareket yönü, harita üzerindeki çizgiler gibi çeşitli işlevler de sağlar, böylece bir rota çizgisi oluşturmadan ve tam sesli yönlendirme navigasyonuna girmeden bu araçları navigasyon için kullanabilirsiniz.

Basit bir noktadan noktaya navigasyonun düz çizgiler olarak görüntülenmesi gerekiyorsa, ara noktalar olarak işaretleyicilerden oluşan bir ***Güzergah listesi*** oluşturabilir ve sıralayabilir ve basit navigasyon için widget'ları kullanabilirsiniz.


### Öneriler {#recommendations}

İşte *işaretleyicilerle gezinmek* için basit öneri adımları:

1. İşaretleyiciler oluşturun. Harita üzerinde istediğiniz nesne(leri) bulun, üzerine dokunun ve *[harita bağlam menüsündeki](../../map/map-context-menu.md#add--edit-marker)* *[İşaretleyici düğmesini](../../personal/markers.md#add--edit-markers)* seçin. Ayrıca [favorilerden](#add-group-of-favorite) veya [GPX izlerinden](#add-group-of-track-waypoints) işaretleyiciler de oluşturabilirsiniz.
2. İşaretleyicileri geçmek istediğiniz şekilde [*sıralayın*](#sort-markers).
3. Navigasyonu başlatmadan İşaretleyicileri kullanmak isterseniz *Harita işaretleyicileri görünümünü* özelleştirin. *[Harita işaretleyicileri menüsünün](../../personal/markers.md#actions)* *[Görünüm](../../personal/markers.md#appearance-on-the-map)* bölümünde **Harita üzerinde Oklar** ve **Yön çizgisi** seçeneklerini etkinleştirin.
4. *[Ekranı yapılandır menüsüne](../../widgets/configure-screen.md)* *[İşaretleyici widget'ları](../../personal/markers.md#markers)* ekleyin (isteğe bağlı).
5. Zaten ziyaret edilen işaretleyicileri [*geçildi olarak işaretleyin*](#pass-markers) veya tekrar geçmek isterseniz geçmişten geri yükleyin.

:::note
*Harita işaretleyicileri menüsünün* [Görünüm](../../personal/markers.md#appearance-on-the-map) bölümünde **Harita üzerinde Oklar** ve **Yön çizgisi** seçenekleri etkinleştirildiğinde, harita üzerinde bir ok veya kesikli çizgi göreceksiniz. Ok, etkin işaretleyici mevcut harita ekranının dışındayken ona doğru yönü gösterir. Yön çizgisi, coğrafi konumunuz ve işaretleyici aynı ekranda olduğunda çizilir.
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


Güzergah listesi, haritada görünen *geçilebilir* işaretleyicilerin sıralı bir listesini temsil eder. Noktaları tek tek ekleyebilir ve silebilir veya önceden hazırlanmış [GPX dosyası](#add-group-of-track-waypoints) veya [Favori grubu](#add-group-of-favorite) kullanarak toplu olarak yapabilirsiniz. Yerel yarışmalar veya maceralar için, [Koordinat giriş aracı](../../plan-route/coordinate-input.md) kullanarak koordinatlardan bir nokta listesi oluşturmak faydalı olabilir.


### Tek İşaretleyiciler Ekle {#add-single-markers}

*İşaretleyiciler*, istenen konumda ekrana tek dokunuşla haritadan eklenebilir veya silinebilir. Ardından *[harita bağlam menüsü](../../map/map-context-menu.md#add--edit-marker)* makalesindeki talimatları izlemeniz gerekir.


### Favori Grubu Ekle {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorileri işaretleyicilere 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorileri işaretleyicilere 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

*[Favorilerden](../../personal/favorites.md)* *Harita işaretleyicileri* oluşturabilirsiniz:

- *[Favori grupları menüsü](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Favorilerim)*.
- Favoriler sayfa içi menüsündeki &#128681; simgesi *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Favorilerim→&#128681;)*.
- Harita işaretleyicileri menüsündeki *[Gruplar sekmesindeki](../../personal/markers.md#marker-groups)* **'+'** (ekle) seçeneği *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### İz Noktaları Grubu Ekle {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX'i işaretleyicilere 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Yol noktaları içeren GPX izleri *Harita işaretleyicileri* olarak kullanılabilir ve hızlıca kapatılabilir:

- Harita işaretleyicileri menüsündeki *[Gruplar sekmesindeki](../../personal/markers.md#marker-groups)* **'+'** (ekle) seçeneğini kullanın *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Harita işaretleyicileri menüsündeki *[Gruplar sekmesindeki](../../personal/markers.md#marker-groups)* iz yanındaki anahtarı açın *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Yalnızca yol noktaları içeren izler *Harita işaretleyicileri listesine* eklenebilir. Eklemek istediğiniz izin haritada görünür (aktif) olması gerekir.
:::

![GPX'i işaretleyicilere 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX'i işaretleyicilere 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Ayrıca yol noktaları içeren bir izden *İşaretleyiciler* oluşturmak için *[iz bağlam menüsünü](../../map/tracks/track-context-menu.md#points--waypoints)* kullanabilirsiniz: *Harita üzerinde görünür bir ize dokunun → iz bağlam menüsünde Noktalar → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/> seçeneğini seçin*


## İşaretleyicileri Sırala {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Bir listedeki işaretleyicileri sırala Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bir listedeki işaretleyicileri sırala iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

*[Harita işaretleyicileri listesindeki](../../personal/markers.md#itinerary-list)* bir *Harita işaretleyicisi* sekmesinin sol köşesine (*Android*) veya sağ köşesine (*iOS*) basarak ve yukarı veya aşağı hareket ettirerek, *Navigasyon listesindeki* sırasını değiştirebilirsiniz (bir işaretleyici kartını hareket ettirirken, işaretleyicinin nereye yerleştirileceğini gösteren bir çizgi göreceksiniz).

OsmAnd uygulamasının Android sürümünde, *Harita işaretleyicileri* için başka sıralama seçenekleri de vardır (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sırala* veya *Rota planla*).


### Niteliklere Göre Sırala {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatif İşaretleyicileri sıralama Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternatif İşaretleyicileri sıralama Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

*İşaretleyicileri* şunlara göre sıralayabilirsiniz:

- **Ad** (*alfabetik olarak*) — İşaretleyicilerin açıklayıcı adları varsa, bu, aradığınız işaretleyiciyi hızlıca bulmak için faydalı bir yol olabilir.
- **Mesafe** (*en yakın veya en uzak önce*) - Bu seçenek, işaretleyicileri mevcut konumunuzdan uzaklıklarına göre sıralar.
- **Tarih** (*yakın zamanda veya uzun zaman önce*) - Bu, işaretleyicileri eklendikleri tarihe göre sıralar. Zamanla birçok işaretleyici eklediyseniz, bu, en yenilerini görmek için faydalı bir yol olabilir.


### Rota Planlama Aracıyla Yeniden Sırala {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternatif İşaretleyicileri sıralama Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternatif İşaretleyicileri sıralama Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

İşaretleyiciler listesindeki Rota planla aracının işlevselliğini kullanarak *İşaretleyicileri* *Kapıdan kapıya* sıralayabilir, ters sıraya koyabilir veya bir *Gidiş-dönüş* oluşturabilirsiniz. Bir *Navigasyon* seçeneğine dokunursanız, *İşaretleyiciler* [ara varış noktaları](../setup/route-navigation.md#intermediate-destinations) olarak kullanılacaktır.


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
- Bir *İşaretleyiciye* 40 metreden (*Android*) veya 50 metreden (*iOS*) daha yakın bir mesafeye yaklaştığınızda, *[İşaretleyici widget'ları](../../widgets/markers.md#top-bar-widget)* çubuğundaki bir anahtar etkinleşir.

Bir *İşaretleyiciyi* geçtikten sonra, [Geçmiş](../../personal/markers.md#history) klasörüne taşınır ve gerektiğinde oradan geri yüklenebilir. [Listedeki](#itinerary-list) bir sonraki işaretleyici aktif hale gelir. [Ayarlarınıza](#use-markers-in-navigation) bağlı olarak, bir ok veya kesikli çizgi ile ona yönlendirilebilirsiniz.


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