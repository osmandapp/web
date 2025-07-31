---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
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

[Harita işaretleyicileri](../../personal/markers.md) harita üzerinde bayraklarla işaretlenmiş noktalardır. Ziyaret etmek istediğiniz bir konumu, hatırlamak istediğiniz bir ilgi çekici noktayı veya özel bir rota oluşturmak gibi çeşitli amaçlar için kullanılabilirler.

Özellikle yürüyüşçüler, bisikletçiler veya yeni bir alanı keşfeden ve harita üzerinde ilginç konumları veya referans noktalarını işaretlemek isteyen herkes için faydalı olabilirler. [Favori noktalarından](../../personal/favorites.md) temel farkı, İşaretleyicilerin bir ad gerektirmemesi nedeniyle daha hızlı oluşturulabilmesidir.

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

 ![Fark işaretleyicisi navigasyon Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Fark işaretleyicisi navigasyon Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fark işaretleyicisi navigasyon iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Fark işaretleyicisi navigasyon iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Harita işaretleyicileri*, bir rota oluştururken [varış noktaları](./route-navigation#set-destinations) olarak hizmet edebilir. Ara noktalarla bir rota belirlemeniz gerektiğinde özellikle kullanışlıdırlar.

Ancak *Harita işaretleyicileri* ayrıca [widget'lar](../../widgets/markers.md), hareket yönü, harita üzerindeki çizgiler gibi çeşitli işlevler de sağlar, böylece bir rota çizgisi oluşturmadan ve tam sesli rehberli navigasyona girmeden bu araçları navigasyon için kullanabilirsiniz.

Düz çizgiler olarak görüntülenen basit bir noktadan noktaya navigasyona ihtiyacınız varsa, ara noktalar olarak işaretleyicilerden oluşan bir ***Güzergah listesi*** oluşturabilir ve sıralayabilir ve basit navigasyon için widget'ları kullanabilirsiniz.


#### Öneriler {#recommendations}

İşte *İşaretleyicilerle Gezinme* için basit öneri adımları:

1. İşaretleyiciler oluşturun. Harita üzerinde istediğiniz nesne(leri) bulun, üzerine dokunun ve *[harita bağlam menüsünde](../../map/map-context-menu.md#add--edit-marker)* *[İşaretleyici düğmesini](../../personal/markers.md#add--edit-markers)* seçin. Ayrıca [favorilerden](#add-group-of-favorite) veya [GPX izlerinden](#add-group-of-track-waypoints) de işaretleyiciler oluşturabilirsiniz.
2. Onları geçmek istediğiniz tercih edilen şekilde [*İşaretleyicileri sıralayın*](#sort-markers).
3. Navigasyonu başlatmadan İşaretleyicileri kullanmak isterseniz *Harita işaretleyicileri görünümünü* özelleştirin. *[Harita işaretleyicileri menüsünün](../../personal/markers.md#actions)* *[Görünüm](../../personal/markers.md#appearance-on-the-map)* bölümünde **Harita üzerindeki oklar** ve **Yön çizgisi** seçeneklerini etkinleştirin.
4. *[Ekranı yapılandır menüsünde](../../widgets/configure-screen.md)* *[İşaretleyiciler widget'ları](../../personal/markers.md#markers)* ekleyin (isteğe bağlı).
5. Zaten ziyaret edilen işaretleyicileri [*Geçildi olarak işaretle*](#pass-markers) veya tekrar geçmek isterseniz geçmişten geri yükleyin.

:::note
**Harita üzerindeki oklar** ve **Yön çizgisi** seçenekleri [Harita işaretleyicileri menüsünün](../../personal/markers.md#appearance-on-the-map) *Görünüm* bölümünde etkinleştirildiğinde, harita üzerinde bir ok veya kesikli çizgi göreceksiniz. Ok, geçerli harita ekranının dışındayken etkin işaretleyiciye yönü gösterir. Coğrafi konumunuz ve işaretleyici aynı ekranda olduğunda yön çizgisi çizilir.
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


Güzergah listesi, haritada görünen *geçilebilir* işaretleyicilerin sıralı bir listesini temsil eder. Tek tek noktalar ekleyebilir ve silebilir veya önceden hazırlanmış [GPX dosyası](#add-group-of-track-waypoints) veya [Favori grubu](#add-group-of-favorite) kullanarak toplu olarak yapabilirsiniz. Yerel yarışmalar veya maceralar için, [Koordinat giriş aracı](../../plan-route/coordinate-input.md) kullanarak koordinatlardan bir liste noktası oluşturmak faydalı olabilir.


### Tek İşaretleyiciler Ekle {#add-single-markers}

*İşaretleyiciler*, istenen konumda ekrana tek dokunuşla haritadan eklenebilir veya silinebilir. Ardından *[harita bağlam menüsü](../../map/map-context-menu.md#add--edit-marker)* makalesindeki talimatları izlemeniz gerekir.


### Favori Grubu Ekle {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorilerden işaretleyicilere 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorilerden işaretleyicilere 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

*[Favorilerden](../../personal/favorites.md)* *Harita işaretleyicileri* oluşturabilirsiniz:

- *[Favori grupları menüsü](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Favorilerim)*.
- Favoriler sayfa içi menüsündeki &#128681; simgesi *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Favorilerim→&#128681;)*.
- Harita işaretleyicileri menüsündeki *[Gruplar sekmesinde](../../personal/markers.md#marker-groups)* **'+'** (ekle) seçeneği *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### İz Noktaları Grubu Ekle {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX'ten işaretleyicilere 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

İz noktaları içeren GPX izleri *Harita işaretleyicileri* olarak kullanılabilir ve hızlıca kapatılabilir:

- Harita işaretleyicileri menüsündeki *[Gruplar sekmesinde](../../personal/markers.md#marker-groups)* **'+'** (ekle) seçeneğini kullanın *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Harita işaretleyicileri menüsündeki *[Gruplar sekmesinde](../../personal/markers.md#marker-groups)* izin yanındaki anahtarı açın *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Sadece iz noktaları içeren izler *Harita işaretleyicileri listesine* eklenebilir. Eklemek istediğiniz iz de haritada görünür (aktif) olmalıdır.
:::

![GPX'ten işaretleyicilere 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX'ten işaretleyicilere 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Ayrıca, iz noktaları içeren bir izden *İşaretleyiciler* oluşturmak için *[iz bağlam menüsünü](../../map/tracks/track-context-menu.md#points--waypoints)* kullanabilirsiniz: *Haritada görünür bir ize dokunun → iz bağlam menüsünde Noktalar → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/> seçeneğini seçin*


## İşaretleyicileri Sırala {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![İşaretleyicileri bir listede sırala Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İşaretleyicileri bir listede sırala iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

*[Harita işaretleyicileri listesindeki](../../personal/markers.md#itinerary-list)* bir *Harita işaretleyicisi* sekmesinin sol köşesine (*Android*) veya sağ köşesine (*iOS*) basarak ve yukarı veya aşağı hareket ettirerek, *Navigasyon listesindeki* sırasını değiştirebilirsiniz (bir işaretleyici kartını hareket ettirirken, işaretleyicinin yerleştirileceği yeri gösteren bir çizgi göreceksiniz).

OsmAnd uygulamasının Android sürümünde, *Harita işaretleyicileri* için başka sıralama seçenekleri de vardır (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sıralama ölçütü* veya *Rota planla*).


### Özelliklere Göre Sırala {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatif İşaretleyicileri sıralama Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternatif İşaretleyicileri sıralama Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

*İşaretleyicileri* şunlara göre sıralayabilirsiniz:

- **Ad** (*alfabetik olarak*) — İşaretleyicilerin açıklayıcı adları varsa, bu, aradığınız işaretleyiciyi hızlıca bulmak için kullanışlı bir yol olabilir.
- **Mesafe** (*en yakın veya en uzak önce*) - Bu seçenek, işaretleyicileri mevcut konumunuzdan uzaklıklarına göre sıralayacaktır.
- **Tarih** (*yakın zamanda veya uzun zaman önce*) - Bu, işaretleyicileri eklendikleri tarihe göre sıralayacaktır. Zamanla birçok işaretleyici eklediyseniz, bu, en yenilerini görmek için kullanışlı bir yol olabilir.


### Rota Planlama Aracıyla Yeniden Sırala {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternatif İşaretleyicileri sıralama Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternatif İşaretleyicileri sıralama Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

İşaretleyiciler listesi aracındaki Rota planlama işlevini kullanarak *İşaretleyicileri* *Kapıdan kapıya* sıralayabilir, ters sıraya koyabilir veya bir *Dairesel gezi* oluşturabilirsiniz. Bir *Navigasyon* seçeneğine dokunursanız, *İşaretleyiciler* [ara varış noktaları](../setup/route-navigation.md#intermediate-destinations) olarak kullanılacaktır.


## İşaretleyicileri Geç {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![İşaretleyiciyi Geç Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![İşaretleyiciyi Geç Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İşaretleyiciyi Geç iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![İşaretleyiciyi Geç iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Bir *İşaretleyici* geçildi olarak işaretlenebilir (*Android*) veya göz ardı edilebilir (*iOS*).

- *[Harita bağlam menüsü](../../map/map-context-menu.md#add--edit-marker)* aracılığıyla.
- Bir *İşaretleyiciye* 40 metreden (*Android*) veya 50 metreden (*iOS*) daha yakın bir mesafeye yaklaştığınızda, *[İşaretleyiciler widget'ları](../../widgets/markers.md#top-bar-widget)* çubuğundaki bir anahtar etkinleşir.

Bir *İşaretleyiciyi* geçtikten sonra, [Geçmiş](../../personal/markers.md#history) klasörüne taşınır ve buradan gerektiğinde geri yüklenebilir. [Listedeki](#itinerary-list) bir sonraki işaretleyici etkin hale gelir. [Ayarlarınıza](#use-markers-in-navigation) bağlı olarak, bir ok veya kesikli çizgi ile ona yönlendirilebilirsiniz.


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