---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
sidebar_position: 8
title:  İşaretleyiciler
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Genel Bakış {#overview}

İşaretleyiciler, harita üzerinde bayraklar olarak işaretlenmiş, isim ve diğer bilgileri belirtmeden tek bir dokunuşla hızlıca oluşturulabilen özel noktalardır. [Favori noktaların](./favorites.md) aksine, işaretleyiciler [widget'lar](../widgets/markers.md), **oklar** (<Translate android="true" ids="show_arrows_on_the_map"/>) ve **mesafe göstergesi** (<Translate android="true" ids="show_direction"/>) ile ek işlevsellik sağlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita işaretleyicileri Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita işaretleyicileri iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## İşaretleyiciler {#markers}

### İşaretleyici Ekle / Düzenle {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Haritaya kısa veya uzun dokunun ve [harita bağlam menüsünden](../map/map-context-menu.md#add--edit-marker) gerekli eylemi seçin.

![İşaretleyici ekle düzenle eylemi Android](@site/static/img/map/add_marker_android.png) ![İşaretleyici geçirme eylemi Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Haritaya kısa veya uzun dokunun ve [harita bağlam menüsünde](../map/map-context-menu.md#add--edit-marker) gerekli eylemi seçin.

![İşaretleyici ekle düzenle eylemi iOS](@site/static/img/map/add_marker_ios.png) ![İşaretleyici geri yükleme eylemi Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Navigasyonu planlamayı kolaylaştırmak için bir noktayı veya nesneyi işaretlemek mümkündür. Menüdeki *bayrak* (*Android*) veya *ok* (*iOS*) simgesine dokunmanız yeterlidir; böylece mevcut konumunuzdan (veya Konum kapalıyken harita merkez noktasından / başlangıçtaki harita dokunma noktasından) seçilen noktaya olan yön ve mesafe görüntülenir.

***Eylemler***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Seçilen noktaya yeni bir işaretleyici yerleştirir.
- **Geçildi olarak işaretle** (*Android*) / Kapat (iOS). İşaretleyiciyi devre dışı bırakır ve Geçmiş'e taşır.
- **Aktif yap** (*Android*). İşaretleyiciyi en üst konuma (üst panele) taşır.
- **İşaretleyiciyi geri yükle** (*Android*). İşaretleyiciyi Geçmiş'ten aktif listeye taşır.

:::note
İşaretleyiciyi hemen silemezsiniz, önce devre dışı bırakmanız (geçildi olarak işaretlemeniz) gerekir, böylece [Geçmiş'e](#history) taşınır ve ardından geçmişten kalıcı olarak silebilirsiniz. İşaretleyici devre dışı bırakıldığında haritadan ve güzergah listesinden kaldırılacaktır.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Güzergah Listesi {#itinerary-list}

Güzergah listesi, widget'larda navigasyon için kullanılan ilk işaretleyicinin sıralı bir listesini temsil eder. Daha fazla bilgiyi [İşaretleyicilerle gezinme](../navigation/setup/markers-navigation.md#itinerary-list) makalesinde bulabilirsiniz.

### İşaretleyici Grupları {#marker-groups}

<InfoAndroidOnly />

![Harita işaretleyicileri Gruplar Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

İşaretleyiciler, Favori grubundan veya ara noktaları olan GPX dosyasından bir bütün grup olarak eklenebilir ve silinebilir. Bu, özel bir navigasyon modunda kullanılmasını çok uygun hale getirir - [İşaretleyicilerle gezinme](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Geçmiş {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita işaretleyicileri Geçmiş Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita işaretleyicileri Geçmiş iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Geçmiş, devre dışı bırakılmış (geçilmiş) tüm işaretleyicilerin bir listesidir. Bu listeden bir işaretleyiciyi kalıcı olarak silmek veya geri yüklemek mümkündür.


## Haritada Görünüm {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![harita_üzerinde_görünüm](@site/static/img/widgets/appearence_on_the_map-01.png) ![harita_üzerinde_görünüm](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Harita işaretleyicileri Görünüm iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Harita işaretleyicileri Görünüm iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

*Haritada Görünüm* menüsü, işaretleyicileri ve bunlara ek işaretçileri görüntülemek için genel bir ayardır.
OsmAnd'ın iOS sürümünde, *Haritada Görünüm* aynı zamanda widget'ları görüntülemek için de bir ayardır. [İşaretleyicili widget'ları yapılandırmak](../widgets/markers.md#configure-marker-widgets) için ek ayarlar da mevcuttur.

- **Aktif işaretleyiciler**. Harita işaretleyici listesindeki ilk bir veya iki işaretleyici hakkında bilgi gösterir.
- **Mesafe göstergesi** *(iOS için)*. Widget'ların görüntülenip görüntülenmeyeceğini ve nasıl görüneceklerini seçmenizi sağlar: haritanın üstünde (Üst çubuk) veya ekranın sağ tarafında (Widget'lar).
- **Haritadaki oklar**. İzlenen işaretleyiciye (bir veya iki) doğru yönü haritada bir ok olarak gösterir. İşaretleyici haritanın görünür kısmındaysa, ok görüntülenmez.
- **Yön çizgisi**. Haritadaki belirli bir noktadan izlenen işaretleyiciye doğru düz bir çizgi olarak kesikli bir çizgiyle yönü gösterir.
- ***Tek dokunuşla*** aktif (*Android için*). Haritadaki gerekli işaretleyiciye tek dokunuşla, bu işaretleyici Bağlam menüsünü açmadan aktif Harita işaretleyicileri listesinin en üstüne taşınır.
- **Geçilen işaretleyicileri haritada tut** *(Android için)*. Favori veya GPX ara noktaları grubu olarak eklenen ve Geçildi olarak işaretlenen işaretleyiciler haritada kalacaktır. Grup aktif değilse, işaretleyiciler haritadan kaybolacaktır.


## İşaretleyiciler için Rota Planla {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Harita işaretleyicileri Rota Planla noktaları Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Harita işaretleyicileri Rota Planla Seçenekleri Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

İşaretleyiciler listesindeki Rota Planla aracının işlevselliğini kullanarak *İşaretleyicileri* *Kapıdan kapıya* sıralayabilir, ters sıraya koyabilir veya bir *Gidiş-dönüş* oluşturabilirsiniz. Bir *Navigasyon* seçeneğine dokunursanız, *İşaretleyiciler* [ara duraklar](../navigation/setup/route-navigation.md#intermediate-destinations) olarak kullanılacaktır.


## Eylemler {#actions}

<InfoAndroidOnly />

![Harita işaretleyicileri Daha Fazla Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. İşaretleyiciler listede isme, yakınlığa, eklenme zamanına göre sıralanabilir.
- **<Translate android="true" ids="appearance_on_the_map"/>** veya **<Translate ios="true" ids="shared_string_appearance"/>**. [Harita işaretleyicileri için ayarlar](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. [Koordinat girişi](../plan-route/coordinate-input.md) ile İşaretleyiciler ekler.
- **<Translate android="true" ids="plan_route"/>**. Seçilen işaretleyicileri kullanarak [navigasyon için](../navigation/setup/markers-navigation.md) rota oluşturur.
- **<Translate android="true" ids="marker_save_as_track"/>**. Aktif işaretleyicileri bir GPX dosyasına kaydeder.
- **<Translate android="true" ids="move_all_to_history"/>**. Tüm işaretleyicileri devre dışı bırakır ve [Geçmiş'e](#history) taşır.


## İlgili Makaleler {#related-articles}

- [İşaretleyicilerle gezinme](../navigation/setup/markers-navigation.md)
- [İşaretleyici widget'ları](../widgets/markers.md)

> *Son güncelleme: Ağustos 2024*