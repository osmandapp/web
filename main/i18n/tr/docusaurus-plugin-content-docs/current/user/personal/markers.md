---
source-hash: 0353071eeb4cc978c117068bf19a65442825b1d24cf586249b32ac62e28c929f
sidebar_position: 8
title: İşaretleyiciler
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

İşaretleyiciler, harita üzerinde bayrak olarak işaretlenmiş özel noktalardır ve [Favori noktaların](./favorites.md) aksine isim ve diğer bilgiler belirtilmeden hızlı bir şekilde tek dokunuşla oluşturulabilirler. İşaretleyiciler ayrıca [widget'lar](../widgets/markers.md), **oklar** (<Translate android="true" ids="show_arrows_on_the_map"/>) ve **mesafe göstergesi** (<Translate android="true" ids="show_direction"/>) ile ek işlevsellik sağlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita işaretleyicileri Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita işaretleyicileri iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## İşaretleyiciler {#markers}

### İşaretleyicileri Ekle / Düzenle {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Haritaya kısa veya uzun dokunun ve [harita bağlam menüsünden](../map/map-context-menu.md#add--edit-marker) gerekli eylemi seçin.

![İşaretleyici ekleme düzenleme eylemi Android](@site/static/img/map/add_marker_android.png) ![İşaretleyici geçirme eylemi Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Haritaya kısa veya uzun dokunun ve [harita bağlam menüsünden](../map/map-context-menu.md#add--edit-marker) gerekli eylemi seçin.

![İşaretleyici ekleme düzenleme eylemi iOS](@site/static/img/map/add_marker_ios.png) ![İşaretleyiciyi geri yükleme eylemi Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Navigasyonu planlamayı kolaylaştırmak için bir noktayı veya nesneyi işaretlemek mümkündür. Seçilen noktaya mevcut konumunuzdan (veya Konum kapalıyken harita merkez noktasından / başlangıçtaki harita dokunma noktasından) yönü ve mesafeyi görüntülemek için menüdeki *bayrak* (*Android*) veya *ok* (*iOS*) simgesine dokunmanız yeterlidir.

***Eylemler***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Seçilen noktaya yeni bir işaretleyici koyar.
- **Geçildi olarak işaretle** (*Android*) / Kapat (iOS). İşaretleyiciyi devre dışı bırakır ve Geçmiş'e taşır.
- **Aktif yap** (*Android*). İşaretleyiciyi en üst konuma (üst panelde) taşır.
- **İşaretleyiciyi geri yükle** (*Android*). İşaretleyiciyi Geçmiş'ten aktif listeye taşır.

:::note
İşaretleyiciyi hemen silemezsiniz, önce devre dışı bırakmanız (geçildi olarak işaretlemeniz) gerekir, böylece [Geçmiş'e](#history) taşınır ve ardından geçmişten kalıcı olarak silebilirsiniz. İşaretleyici devre dışı bırakıldığında haritadan ve güzergah listesinden kaldırılacaktır.
:::


<!--
### Harita İşaretleyicilerine Favorileri Ekle {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favoriler klasör fonksiyonları android](@site/static/img/personal/favorites_folder_functions_android.png)

Favorilerinizi [Harita işaretleyicileri listesine](../personal/markers.md) ekleyebilir veya kaldırabilirsiniz.
&#8942; düğmesine (**Android**) dokunmak, seçilen bir Favori klasörü (grubu) için özel işlevleri açar.

**Favori klasörü için işlevler:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/> veya <Translate android="true" ids="remove_from_map_markers"/>.
- Bir klasördeki tüm Favori noktaları [Harita işaretleyicileri listesine](../personal/markers.md) ekle veya kaldır.
-->


### Güzergah Listesi {#itinerary-list}

Güzergah listesi, widget'larda navigasyon için kullanılan ilk 1. işaretleyicinin bulunduğu sıralı bir işaretleyici listesini temsil eder. Bununla ilgili daha fazla bilgiyi [İşaretleyicilere göre navigasyon](../navigation/setup/markers-navigation.md#itinerary-list) makalesinde okuyun.

### İşaretleyici Grupları {#marker-groups}

<InfoAndroidOnly />

![Harita işaretleyicileri Grupları Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

İşaretleyiciler, Favori grubundan veya GPX dosyasından ara noktalarla birlikte bir bütün grup olarak eklenebilir ve silinebilir. Bu, özel bir navigasyon modunda kullanılmasını çok uygun hale getirir - [İşaretleyicilere göre navigasyon](../navigation/setup/markers-navigation.md#add-group-of-favorite).

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

Git: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![harita_üzerinde_görünüm](@site/static/img/widgets/appearence_on_the_map-01.png) ![harita_üzerinde_görünüm](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Git: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Harita işaretleyicileri Görünüm iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Harita işaretleyicileri Görünüm iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

*Haritada Görünüm* menüsü, işaretleyicileri ve bunlara ek işaretçileri görüntülemek için genel bir ayardır.
OsmAnd'ın iOS sürümünde, *Haritada Görünüm* aynı zamanda widget'ları görüntülemek için bir ayardır. [İşaretleyicili widget'ları yapılandırmak](../widgets/markers.md#configure-marker-widgets) için ek ayarlar da vardır.

- **Aktif işaretleyiciler**. Harita işaretleyici listesindeki ilk bir veya iki işaretleyici hakkında bilgi gösterir.
- **Mesafe göstergesi** *(iOS için)*. Widget'ların görüntülenip görüntülenmeyeceğini ve nasıl görüneceklerini seçmenize olanak tanır: haritanın üstünde (Üst çubuk) veya ekranın sağ tarafında (Widget'lar).
- **Haritadaki oklar**. Takip edilen işaretleyiciye (bir veya iki) haritada bir ok olarak yönü gösterir. İşaretleyici haritanın görünür kısmındaysa, ok görüntülenmez.
- **Yön çizgisi**. Haritadaki belirli bir noktadan takip edilen işaretleyiciye düz bir çizgi olarak yönü kesikli bir çizgi olarak gösterir.
- ***Tek dokunuşla*** aktif (*Android için*). Haritadaki gerekli işaretleyiciye tek dokunuşla, bu işaretleyici Bağlam menüsünü açmadan aktif Harita işaretleyicileri listesinin en üstüne taşınır.
- **Geçilen işaretleyicileri haritada tut** *(Android için)*. Favori veya GPX ara noktaları grubu olarak eklenen Geçilen olarak işaretlenmiş işaretleyiciler haritada kalacaktır. Grup aktif değilse, işaretleyiciler haritadan kaybolacaktır.


## İşaretleyiciler için Rota Planla {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Harita işaretleyicileri Rota Planla noktaları Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Harita işaretleyicileri Rota Planla Seçenekleri Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

İşaretleyiciler listesi aracındaki Rota planla işlevini kullanarak *İşaretleyicileri* *Kapıdan kapıya* sıralayabilir, ters sıraya koyabilir veya bir *Gidiş-dönüş* rotası oluşturabilirsiniz. Bir *Navigasyon* seçeneğine dokunursanız, *İşaretleyiciler* [ara hedefler](../navigation/setup/route-navigation.md#intermediate-destinations) olarak kullanılacaktır.


## Eylemler {#actions}

<InfoAndroidOnly />

![Harita işaretleyicileri Daha Fazla Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. İşaretleyiciler listede isme, yakınlığa, ekleme zamanına göre sıralanabilir.
- **<Translate android="true" ids="appearance_on_the_map"/>** veya **<Translate ios="true" ids="shared_string_appearance"/>**. [Harita işaretleyicileri için ayarlar](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. [Koordinat girişi](../plan-route/coordinate-input.md) ile İşaretleyiciler ekler.
- **<Translate android="true" ids="plan_route"/>**. Seçilen işaretleyicileri kullanarak [navigasyon için](../navigation/setup/markers-navigation.md) rota oluşturur.
- **<Translate android="true" ids="marker_save_as_track"/>**. Aktif işaretleyicileri bir GPX dosyasına kaydeder.
- **<Translate android="true" ids="move_all_to_history"/>**. Tüm işaretleyicileri devre dışı bırakır ve [Geçmiş'e](#history) taşır.


## İlgili Makaleler {#related-articles}

- [İşaretleyicilere göre navigasyon](../navigation/setup/markers-navigation.md)
- [İşaretleyici widget'ları](../widgets/markers.md)

> *Son güncelleme: Ağustos 2024*