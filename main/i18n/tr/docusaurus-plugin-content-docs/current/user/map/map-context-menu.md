---
source-hash: 3e1b165cea4cde57aec3170e4074d5cdef9d0ee2790e533d93987ac6b523addc
sidebar_position: 3
title: Harita Bağlam Menüsü
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

Harita bağlam menüsü, harita üzerinde seçilen nesne hakkında bilgi sağlar. Ayrıca seçilen konuma bir rota oluşturmak için de kullanabilirsiniz. Bağlam menüsünü açmak için önce harita üzerinde gerekli konumu bulun, ardından harita üzerinde herhangi bir hassas noktayı seçerken kısa bir dokunuşla veya uzun bir dokunuşla nesneyi seçin.


### Bir Nesne Seçin (Tek Dokunuş) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Bağlam menüsü Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Bağlam menüsü iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Bağlam menüsü**, harita üzerindeki işaretli bir nesneye **bir kez dokunduğunuzda** görünür. Bu bağlam menüsü, seçilen nesne hakkında *adı*, *simgesi* (haritada temsil edildiği gibi), *adresi, mesafesi*, *sınırları* ve mevcut konumunuzdan *yönü* dahil olmak üzere temel bilgileri görüntüler.

*İÇN'ler*, *favoriler*, *ulaşım durakları*, *işaretleyiciler*, *dağ zirveleri* veya diğer *harita nesneleri* gibi çeşitli harita nesnesi türlerini seçebilirsiniz.

:::note
- Seçilen harita nesneleri ve sınırları OpenStreetMap [**düğümleri**](https://wiki.openstreetmap.org/wiki/Node) veya [**yolları**](https://wiki.openstreetmap.org/wiki/Way) ile eşleşir.
- *Dağ zirvelerinin yüksekliği, profil ayarlarında seçilen [uzunluk birimlerine](../personal/profiles.md#units--formats) bağlı olarak metre veya fit cinsinden görüntülenir.*
:::



### Herhangi Bir Noktayı Seçin (Uzun Dokunuş) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bağlam menüsü uzun dokunuş Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Bağlam menüsü uzun dokunuş iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Harita üzerinde herhangi bir yere **uzun dokunduğunuzda**, seçilen konum hakkında bilgi sağlayan bir **bağlam menüsü** görünür. Bu, mevcut konumunuzdan adres, mesafe ve yönü içerir.


### GPX Rotasını Seçin {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Bağlam izleme menüsü Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![İstatistik ekranı izleme iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Harita üzerinde bir [GPX izine](../map/tracks/index.md) dokunmak, ek izle ilgili seçeneklere erişebileceğiniz [iz bağlam menüsünü](../map/tracks/track-context-menu.md) açar.



### Rotalar, Kayak Pistleri ve Patikalar {#routes-and-trails}

![Kayak Pistleri ve MTB Patikaları](@site/static/img/map/ski_mtb.png) ![Kayak Pistleri ve MTB Patikaları](@site/static/img/map/ski_mtb_2.png)

**Kayak pistleri**, **dağ bisikleti (MTB) rotaları** ve **kir bisikleti patikaları** gibi harita öğelerine dokunarak ayrıntılı bilgi içeren bağlam menülerini açabilirsiniz. Daha fazla bilgi için [Rotalar makalesine](../map/routes.md#actions-with-routes) bakın.



### Bağlam Menüsünü Gizle {#hide-context-menu}

**Bağlam menüsünü** kapatmak için:

- Menüyü yeniden açmamak için harita üzerindeki herhangi bir *boş alana* dokunun.
- Menüyü yukarıdan *aşağı* sürükleyin.


## Detaylar {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Bağlam menüsü Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Bağlam menüsü iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Bir nesne hakkında daha ayrıntılı bilgi için, bağlam menüsündeki **Detaylar** düğmesine dokunun veya paneli genişletmek için yukarı kaydırın.


### Nesne Bilgisi {#object-info}

**Nesne Bilgisi** paneli, seçilen nesne hakkında ek ayrıntılar sağlar. Bilgiyi panoya kopyalamak için herhangi bir girişe dokunabilirsiniz.

Mevcut ayrıntılar şunları içerir:

- [Alternatif adlar](#alternative-names)
- [Koordinatlar](#coordinates)
- [Alanlar içinde](#polygon-information)
- [Yakındaki İÇN'ler / Wikipedia](#nearby-pois--wikipedia)
- [Duraklar için Toplu Taşıma rotaları](#public-transport-routes)
- [Aynı gruptan Favoriler / İz Noktaları](#favorites--track-points-from-the-group)
- [OpenStreetMap bağlantısı](#openstreetmap-link)
- [Çevrimiçi fotoğraflar](#online-photos)

Ek olarak, panel [OpenStreetMap Detaylarını](https://wiki.openstreetmap.org/wiki/Map_features) içerebilir, örneğin:

- [Web sitesi](https://wiki.openstreetmap.org/wiki/Key:website)
- [Telefon numarası](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Çalışma saatleri](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Ücret](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Erişilebilirlik](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Genişlik](https://wiki.openstreetmap.org/wiki/Key:width) / [Yükseklik](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternatif Adlar {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatif adlar Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternatif adlar Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternatif adlar Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternatif adlar Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd, *harita bağlam menüsünde* **ek İÇN adlarını** görüntüler ve *görüntüleme dilindeki* veya sistemin tercih edilen dil listesindeki adı önceliklendirir. Birden fazla çeviri mevcutsa, bunlar *ad, marka, operatör* veya *yakındaki İÇN'ler* gibi kategorize edilmiş etiketler halinde gruplandırılır.

Alternatif adların görüntülenme özellikleri:

- Ek çevirilere bir *açılır listeden* erişilebilir.

- Adlar, *diğer dillerdeki adların listesi*, *Bölgesel*, *Yerel*, *Ulusal*, *Uluslararası*, *Kısa*, *Eski*, *Resmi* ve *Alternatif* adlar gibi farklı gruplara ayrılır.

- Diğer kategoriler arasında *bölgeye özgü çeviri* veya *varsayılan ayarlar* bulunur.

- Belirli bir çeviri *mevcut değilse*, OsmAnd, çok dilli bölgelerde doğruluk ve tutarlılık sağlamak için varsayılan olarak **yerel** adı kullanır.


### Alan İçinde {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Çokgen Bilgisi Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Çokgen Bilgisi Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

**Alan İçinde** özelliği, bir nesnenin içinde bulunduğu **alanları** listeler. Bu, coğrafi özellikleri, idari sınırları, arazi kullanım alanlarını, doğal özellikleri ve diğer kategorize edilmiş alanları içerir. Alan boyutuna göre *en küçükten en büyüğe* sıralanmış bir *çevreleyen çokgenler listesi*.

### Koordinatlar {#coordinates}

|Koordinat formatı| |
|:------|:------|
| <ul><li>DDD.DDDDD (Düz Ondalık Dereceler)</li><li>DDD.DDDDD (K/G, D/B virgül)</li><li>DDD DD.DDD</li><li> DDD DD SS.S</li><li>[UTM Standardı](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Açık Konum Kodu](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[İsviçre Izgarası CH1903 ve CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Web Bağlantısı](https://osmand.net/map)</li><li>[OpenStreetMap Web Bağlantısı](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Koordinatlar](@site/static/img/map/map_context_menu_Coordinates.png) |

Bağlam menüsünde, bir noktanın çeşitli formatlardaki [coğrafi koordinatlarını](../search/search-coordinates.md#coordinate-format) ve ayrıca paylaşılabilir OsmAnd ve [OpenStreetMap Bağlantılarını](../map/map-context-menu.md#openstreetmap-link) bulabilirsiniz (son seçenek yalnızca [OpenStreetMap düzenleme eklentisi](../plugins/osm-editing.md) etkinleştirildiğinde kullanılabilir). Koordinatlar bölümünü genişletir ve listeden herhangi bir satıra uzun dokunursanız, değerleri otomatik olarak panoya kopyalanır (**Android**) veya açılır mesajda *Kopyala* seçeneği kullanılabilir hale gelir (**iOS**).

OsmAnd Web Bağlantısı OsmAnd tarafından otomatik olarak tanınabilir (örnek: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Hem OsmAnd hem de [OpenStreetMap bağlantıları](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) ilgili sitelerde ilgi çekici yere bir işaretleyici ile açılır.


### Yakındaki İÇN'ler / Wikipedia {#nearby-pois--wikipedia}

![Yakındaki Wikipedia makaleleri](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Yakındaki Wikipedia makaleleri](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Bu bölümler, yakındaki [Wikipedia makalelerini](../plugins/wikipedia.md) veya [İlgi Çekici Noktaları](../map/point-layers-on-map.md#points-of-interest-pois) *<Translate android="true" ids="shared_string_show_on_map"/>* ve *<Translate android="true" ids="search_more"/>* ile görüntülemek ve diğer tüm İÇN'leri ve Wikipedia makalelerini [aramak](../search/search-poi.md) için gösterir.

*Yakındaki İÇN'ler / Wikipedia makaleleri*'ne dokunmak bir noktalar listesi (İÇN'ler veya Wikipedia) açar. Bu noktalar listesinden birine dokunmak, haritayı bu noktaya (İÇN'ler veya Wikipedia) taşır ve nokta harita bağlam menüsünü açar.

> **NOT**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) yalnızca bu alan için [Wikipedia makaleleri içeren özel haritaları](../plugins/wikipedia.md#download-wikipedia-packages) daha önce indirdiyseniz görünür*.


### Toplu Taşıma Rotaları {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Toplu taşıma Rotaları Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Toplu taşıma Rotaları iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Seçilen ulaşım durağı için Toplu taşıma rotaları hakkında bilgi gösterilir. Toplu taşıma bağlam menüsü ve onunla yapılan işlemler hakkında bilgi için [makaleye](../map/public-transport.md#transport-routes-context-menu) bakın.


### Favoriler / Gruptan İz Noktaları {#favorites--track-points-from-the-group}

![Favori listesi](@site/static/img/map/favorite_list_android.png) ![Favori listesi tam](@site/static/img/map/favorite_list_full_android.png)

Bu, bir Favori veya Yol Noktası için bir gruptaki tüm noktaların bir listesidir. Dokunulduğunda, bir grubun tüm noktalarının listesi genişler, listeden bir noktaya dokunulduğunda harita seçilen noktaya hareket eder.


### Makale Açıklaması {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Açıklama listesi](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Açıklama listesi](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Bu bölüm, [Wikipedia makalesinden](../plugins/wikipedia.md), [Favori](../personal/favorites.md) veya Yol Noktası açıklamasından bir açıklama bölümü içerir, dokunarak tam açıklamayı açabilirsiniz.


### OpenStreetMap Bağlantısı {#openstreetmap-link}

![OSM bağlantısı](@site/static/img/map/context_menu_osm_link.png) ![OSM bağlantısı](@site/static/img/map/context_menu_osm_link_1.png)

OpenStreetMap bağlantısı, hakkında tam bilgi bulabileceğiniz OpenStreetMap nesnesine doğrudan bağlantı sağlar:
[düğüm](https://wiki.openstreetmap.org/wiki/Node) veya [yol](https://wiki.openstreetmap.org/wiki/Way).


### Çevrimiçi Fotoğraflar {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Çevrimiçi Fotoğraflar bağlam menüsü Android](@site/static/img/map/images_nearby_1_andr.png)
![Galeri menüsü Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Çevrimiçi Fotoğraflar bağlam menüsü iOS](@site/static/img/map/online_photo_ios.png)
![Galeri menüsü 2 iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Harita üzerinde Popüler bir Yere dokunduğunuzda, *İÇN bağlam menüsündeki* **Çevrimiçi Fotoğraflar** bölümü, [Wikipedia](https://www.wikipedia.org/) ve [Wikimedia Commons](https://www.wikimedia.org/) kaynaklı görüntü önizlemelerini görüntüler.

Bir fotoğrafa dokunmak, şunları yapabileceğiniz **Galeri** görünümünü açar:

- Yer başına 100'e kadar görüntüye göz atın
- Görüntü meta verilerini (*yazar*, *lisans*, *kaynak*) görüntüleyin
- Eylemler gerçekleştirin: **Paylaş**, **Tarayıcıda Aç**, **İndir**

> *iOS'ta, bir görüntüye uzun dokunmak, hızlı eylemler içeren bir bağlam menüsü açar.*

Daha fazla bilgi için bkz: [Çevrimiçi Fotoğraflar](https://osmand.net/docs/user/map/popular_places#online-photos) ve [Galeri görünümü](https://osmand.net/docs/user/map/popular_places#gallery)


### Sokak Seviyesi Görüntüleri {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Sokak Seviyesi Görüntüleri Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Sokak Seviyesi Görüntüleri iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd, kitle kaynaklı sokak seviyesi görüntüleri için küresel bir platform olan [Mapillary](https://www.mapillary.com/) ile entegrasyonu destekler. Bu özellik, gerçek dünya fotoğraf dizilerini doğrudan harita üzerinde görüntülemenizi ve keşfetmenizi sağlar.

Mapillary görüntüleri, çekildikleri yol veya patika ile hizalanmış yönlü fotoğraf simgeleri olarak görünür. Bunlar, özellikle bilmediğiniz bölgelerde çevrenizi daha iyi anlamanıza yardımcı olabilir.

Şunları yapabilirsiniz:

- Mapillary'nin görüntüleyicisini açmak ve yakındaki sokak seviyesi görüntülerine göz atmak için **Keşfet** düğmesini kullanın.
- Mapillary platformuna kendi fotoğraflarınızı katkıda bulunmak için **Fotoğraf Ekle** düğmesine dokunun.

> *Bu özelliği nasıl etkinleştireceğinizi ve kullanacağınızı [Mapillary eklenti kılavuzunda](../plugins/mapillary.md) daha fazla bilgi edinin.*


### * Ses/Video Notu {#-audiovideo-note}

<InfoAndroidOnly />

![Görüntü listesi](@site/static/img/map/image_list_android.png) ![Video listesi](@site/static/img/map/video_list_android.png)

[Ses / Video notları](../plugins/audio-video-notes.md) bilgileri (tarih, koordinatlar, önizleme ve diğerleri) **Detaylar** menüsünde mevcuttur. Notun bağlam menüsündeki **Oynat / Göster** düğmesine dokunarak notları ikincil yazılımda açabilirsiniz.


## Eylemler {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylemler menüsü Android](@site/static/img/map/actions_menu_android.png) ![Ek eylemler menüsü Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylemler menüsü iOS](@site/static/img/map/actions_menu_ios.png) ![Ek eylemler menüsü iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Bir nokta veya nesne üzerinde gerçekleştirilebilecek belirli manipülasyonlar kümesidir. Bu menü iki bölüme ayrılmıştır: görünür bölüm maksimum 3 eylemden oluşur ve diğer eylemlere *Eylemler* düğmesiyle erişilebilir. [Genel ayarlarda](#customize) eylemlerin sırasını özelleştirebilirsiniz (*Android*).


### Favori Ekle / Düzenle {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Favori eylemi ekle düzenle Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Favori eylemi ekle düzenle iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Bağlam menüsünde, seçilen noktayı / nesneyi [favoriler listesine](../personal/myplaces.md) **ekleme** veya **düzenleme** seçenekleri bulunur.

- **Ekle**mek için bir nokta / nesne seçmeniz, *Yıldız* simgesine (Ekle imzasıyla) dokunmanız ve gerekli tüm bilgileri girmeniz gerekir.

- Favori nokta hakkındaki bilgileri **Düzenle**mek için, *Haritada Göster* (*Menü → Yerlerim → Favoriler*) seçeneğini açmanız, ardından üzerine basmanız ve Bağlam menüsünde *Yıldız* simgesi yerine *Kalem simgesi* (Düzenle imzasıyla) görünecektir.

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - seçilen noktayı favoriler listesine ekler.


### İşaretleyici Ekle / Düzenle {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![İşaretleyici eylemi ekle düzenle Android](@site/static/img/map/add_marker_android.png) ![İşaretleyici eylemini geç Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![İşaretleyici eylemi ekle düzenle iOS](@site/static/img/map/add_marker_ios.png) ![İşaretleyici eylemini geri yükle Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Navigasyonu planlamayı kolaylaştırmak için bir nokta veya nesneyi işaretlemek mümkündür. Menüdeki **bayrak** simgesine (*Android*), **ok** (*iOS*) - mevcut konumunuzdan seçilen noktaya olan yönü ve mesafeyi gösterir - dokunmanız yeterlidir.

Eylemler:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Seçilen noktaya yeni bir işaretleyici koyar.
- **Geçildi olarak işaretle** (*Android*) / *Kapat* (*iOS*). İşaretleyiciyi devre dışı bırakır ve Geçmişe koyar.
- **Etkin yap** (*Android*). İşaretleyiciyi en üst konuma (üst panelde) taşır.
- **İşaretleyiciyi geri yükle** (*Android*). İşaretleyiciyi Geçmişten etkin listeye taşır.

[İşaretleyiciler hakkında daha fazla bilgi için buraya bakın](../personal/markers.md).


### Paylaş {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Android 14'e kadar olan sürümler | 14+ Android |
|:------------|:---------------|
| ![Paylaş eylemi Android](@site/static/img/map/action_share_1_andr.png) | ![Paylaş eylemi Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Paylaş eylemi iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

OsmAnd uygulaması, *Konumum*'u veya harita üzerindeki herhangi bir seçili konumu mesajlaşma, e-postalar veya sosyal medya ile **<Translate android="true" ids="shared_string_share"/>** etmenizi sağlar.

Konumu paylaşmak için mevcut seçenekler:

- ***Gönder***. Cihazınızda bulunan uygulamalar aracılığıyla metin gönderir. Konum hakkındaki tüm bilgileri içerir: Konumum adı veya seçilen İÇN'nin adı, adres, koordinatlar ve bir bağlantı olarak coğrafi konum.
- ***Kopyala***. Tüm konum bilgilerini (Konumum adı veya seçilen İÇN'nin adı, adres, koordinatlar ve bir bağlantı olarak coğrafi konum) panoya kopyalar.
- ***Adresi kopyala***. Yalnızca adres bilgilerini panoya kopyalar.
- ***İÇN adını kopyala***. Yalnızca İÇN adını veya adı yoksa adresi panoya kopyalar.
- ***Koordinatları kopyala***. Yalnızca koordinat bilgilerini panoya kopyalar.
- ***geo***. Coğrafi konumları destekleyen mevcut uygulamaların bir listesini açar. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR kodu*** (*Android*). Seçilen konuma bir QR kodunda bir bağlantı oluşturur.

<!--
- ***Görüntüyü Kaydet*** (*iOS*) - harita ve seçilen noktayı görüntü galerisine kaydeder.
- ***Kişiye Ata*** (*iOS*) - harita ekran görüntüsünden seçilen kişi için bir simge oluşturur.
- ***Yazdır*** (*iOS*) - harita ekran görüntüsünü yazdırmak için Yazıcı Seçeneklerini açar.
- ***Dosyalara Kaydet*** (*iOS*) - harita ekran görüntüsünü iCloud Drive'a veya cihazınızın depolama alanına kaydeder. -->


### Yol Tarifi Al / Ver {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Yol Tarifi Android](@site/static/img/map/action_directions_android.png)

![Çoklu Yol Tarifi Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Yol Tarifi iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Navigasyonu veya rota planlamayı başlatmak için önce [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions) ile hedefi seçmeniz gerekir. Zaten bir hedef noktanız varsa, menü size hedef noktayı değiştirmeyi veya başka bir ara veya başlangıç noktası olarak eklemeyi önerecektir.

Harita bağlam menüsü aracılığıyla önce *Hedeften* seçeneğini seçmek de mümkündür (<Translate android="true" ids="context_menu_item_directions_from"/>).

[Navigasyon hakkında daha fazla bilgi için buraya bakın](../navigation/setup/route-navigation.md).

:::note Navigasyonu Başlat'a dokunun
**Navigasyonu Başlat**'a dokunursanız - uygulama Navigasyon moduna girdiğinde *Başlangıç* noktası atılacaktır. Bir rotayı korumak için *Navigasyonu Başlat*'a dokunmayın ve *Rota hazırlığı* menüsünü [**aşağı kaydırın**](#hide-context-menu).
:::


### Yakınlarda Ara {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Arama eylemi Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Arama eylemi iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Bu bağlam menüsü eylemiyle, harita üzerinde belirli bir konumun etrafında arama yapmak mümkündür.

[Arama](../search/index.md) işlevselliği hakkında daha fazla bilgi edinin.


### Yoldan Kaçın {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Haritada yoldan kaçın Android](@site/static/img/map/action_avoid_android.png) ![Kaçınılan yolu kapat Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritada yoldan kaçın iOS](@site/static/img/map/avoid_route_ios_1.png) ![Kaçınılan yolu kapat iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Harita bağlam menüsünü kullanarak, belirli bir yolu yönlendirme için kullanılmayan yollar listesine ekleyebilirsiniz. Bu, [rota hazırlığını](../navigation/setup/route-navigation.md) etkileyecektir.
Daha önce seçilen yolları *[Yollardan kaçın listesinden](../navigation/routing/osmand-routing.md#avoid-roads-menu)* silmek için bir işarete dokunun, *Kaldır* (**Android**) veya *Kapat* (**iOS**) seçeneğini seçin.

:::note
Yollardan kaçınma işlevi globaldir ve tüm *[yönlendirme türlerini](../navigation/routing/osmand-routing.md#routing-types)* ( *[Çevrimiçi yönlendirme](../navigation/routing/online-routing.md)* hariç) etkiler.
:::


### Nesne Konumunu Değiştir {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem Konumu Değiştir Android](@site/static/img/map/action_change_position_android.png)

![Eylem Konumu Değiştir Kullanıcı Arayüzü Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem Konumu Değiştir iOS](@site/static/img/map/action_change_position_ios.png)

![Eylem Konumu Değiştir Kullanıcı Arayüzü iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Kullanıcı tarafından oluşturulan hemen hemen her nesne taşınabilir, yani İşaretleyici, Favori, Oluşturulan İÇN, Ses/Video Notu veya İz Yol Noktası. Önce harita üzerinde bir nesne seçin ve ardından yeni bir konuma taşımak için *<Translate android="true" ids="change_markers_position"/>* menüsünü kullanın.


### Rota Planla {#plan-a-route}

![Eylem Rota Planla Android](@site/static/img/map/action_plan_route_android.png)

Nesne bağlam menüsü aracılığıyla seçilen bir noktadan rota planlamaya başlayabilirsiniz.

[Rota planla](../plan-route/create-route.md) aracı hakkında daha fazla bilgi edinin.


### Çevrimiçi Haritaları Güncelle / İndir {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem Çevrimiçi harita indir Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem Çevrimiçi harita indir iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Belirli bir konumdaki çevrimiçi haritaları (döşemeleri) güncellemek veya indirmek için nesnenin bağlam menüsünü kullanabilirsiniz:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* ve *Güncelleme* için şuraya gidin: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* ve *<Translate ios="true" ids="update_tile"/>*.

Lütfen [tam talimatı](../map/raster-maps.md#download--update-tiles) okuyun.


### Vektör Haritaları Güncelle / İndir {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem Vektör harita indir Android](@site/static/img/map/action_download_vector_map_android.png)

![Android'de dünya haritası üzerinden vektör haritası seç](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem Vektör harita indir iOS](@site/static/img/map/action_download_vector_map_ios.png)

![iOS'ta vektör haritası seç](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Seçilen konumda çevrimdışı harita yoksa, örneğin harita nesnesi menüsü Arama veya belirli bir Favori aracılığıyla açıldıysa, [indirmek](../start-with/download-maps.md#select-on-the-map) için mümkün olan en küçük çevrimdışı harita önerilecektir.

**iOS**. Zaten [indirilmiş](../map/map-context-menu.md) OsmAnd haritalarınız (vektör veya arazi) varsa, bunları bağlam menüsü aracılığıyla güncelleyebilirsiniz. Önce harita üzerinde bölgeyi seçmeniz gerekecektir - dünya çapında 3-7 yakınlaştırma düzeyinde herhangi bir konuma dokunun.

> **NOT**. *Harita bölgesi için bağlam menüsünü açtıysanız (bölge vurgulanır), hakkında ***<Translate android="true" ids="rendering_category_details"/>*** görebileceksiniz: mevcut haritanın türü ve boyutu, bir Wikipedia sayfasına bağlantı, dil, nüfus ve diğerleri.*


### * Park noktası Ekle / Sil {#-add--delete-parking-point}

:::note
Park noktaları eklemek/silmek için OsmAnd [**Park konumu eklentisini**](../plugins/parking.md) etkinleştirin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem Park Android](@site/static/img/map/action_parking_android.png)

![Eylem Park Sil Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem Park iOS](@site/static/img/map/action_parking_ios.png)

![Eylem Park Sil iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Harita üzerinde seçilen herhangi bir konum [park konumu](../plugins/parking.md) olarak işaretlenebilir. Park konumunu silmek için, park konumuyla ilişkili bağlam menüsünü açabilirsiniz.


### * İz yol noktası Ekle / Düzenle {#-add--edit-track-waypoint}

:::note
İz noktaları eklemek/düzenlemek için OsmAnd [**Yolculuk kaydı eklentisini**](../plugins/trip-recording.md) etkinleştirin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem Yol Noktası Android](@site/static/img/map/action_waypoint_android.png)

![Yol Noktası eklemek için İz Seç Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem Yol Noktası iOS](@site/static/img/map/action_waypoint_ios.png)

![Yol Noktası eklemek için İz Seç iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Harita bağlam menüsünü kullanarak kaydedilmiş bir iz'e veya mevcut iz kaydına yol noktaları ekleyebilirsiniz.

- Harita üzerinde bir konumu [uzun dokunuşla](../map/map-context-menu.md#select-any-point-long-tap) seçin.
- Açılan *harita bağlam menüsünde*, *Eylemler → İz yol noktası ekle*'yi seçin.
- Liste, haritada kaydedilen ve gösterilen [izleri](../map/tracks/index.md#display-tracks-on-the-map) ve seçilen yol noktasını ekleyebileceğiniz [mevcut iz kaydını](../plugins/trip-recording.md) görüntüler.
- Henüz kayıt için etkin olmayan bir iz'e yol noktaları ekleyebilirsiniz, bu durumda etkin olmayan iz *Başlangıç durumu*'ndan *Devam durumu*'na geçer.
- Gerekli verileri [doldurun](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) ve yol noktasını kaydedin.
- *İz yol noktası ekle*'ye bir yol noktası ekleyerek [Hızlı Eylemleri](../widgets/quick-action.md) yapılandırabilirsiniz.


### * İÇN Oluştur / Değiştir {#-create--modify-poi}

:::note
İÇN'ler oluşturmak/değiştirmek için OsmAnd [**OSM Düzenleme eklentisini**](../plugins/osm-editing.md) etkinleştirin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem İÇN Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem İÇN iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

OSM Düzenleme eklentisi ile [OpenStreetMap](https://www.openstreetmap.org/) üzerindeki İÇN'lerin çoğunu oluşturabilir ve değiştirebilirsiniz.

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - seçilen konumda [yeni bir İÇN oluşturur](../plugins/osm-editing.md#create--modify-poi).
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [seçilen İÇN'yi değiştirir](../plugins/osm-editing.md#create--modify-poi).


### * OSM Notu Aç {#-open-osm-note}

:::note
OSM notu açmak için OsmAnd [**OSM Düzenleme eklentisini**](../plugins/osm-editing.md) etkinleştirin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Eylem Not Android](@site/static/img/map/action_note_android.png)

![Eylem Not Ekle Kullanıcı Arayüzü Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylem Not iOS](@site/static/img/map/action_note_ios.png)

![Eylem Not Ekle Kullanıcı Arayüzü iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Belirli bir konumdaki harita veri hatalarını [OpenStreetMap topluluğuna](https://wiki.openstreetmap.org/wiki/Join_the_community) **bildirebilirsiniz**. Lütfen [yönergeleri](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) takip edin ve bir soruna uygun yorumlar ekleyin.


### * OSM Notu Yorumla / Kapat {#-comment--close-osm-note}

:::note
OSM notunu yorumlamak/kapatmak için OsmAnd [**OSM Düzenleme eklentisini**](../plugins/osm-editing.md) etkinleştirin.
:::

![OSM Notu Yorumla Android](@site/static/img/map/action_comment_note_android.png) ![OSM Notunu Yeniden Aç Android](@site/static/img/map/action_reopen_note_android.png)

Nesnenin bağlam menüsü aracılığıyla OpenStreetMap Notlarını [yorumlayabilir](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [çözebilir](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) ve yeniden açabilirsiniz.


### * İÇN / OSM Notu Yükle {#-upload-poi--osm-note}

:::note
İÇN / OSM notu yüklemek için OsmAnd [**OSM Düzenleme eklentisini**](../plugins/osm-editing.md) etkinleştirin.
:::

![İÇN Yükle Android](@site/static/img/map/action_poi_upload_android.png) ![OSM Notu Yükle Android](@site/static/img/map/action_note_upload_android.png)

İÇN veya OSM Notu eklemek/düzenlemek için *Çevrimdışı mod* kullanıyorsanız, değişiklikleri OpenStreetMap'e yüklemeniz gerekecektir. Varsayılan olarak, genel veritabanında yanlışlıkla değişiklikleri önlemek için *Çevrimdışı mod* açıktır. Oluşturulan nesne bağlam menüsü aracılığıyla değişikliği yükleyebilir veya silebilirsiniz.


### * AV Notu Kaydet {#-record-av-note}

<InfoAndroidOnly />

:::note
Ses/video notları kaydetmek için OsmAnd [**Ses/Video Notları eklentisini**](../plugins/audio-video-notes.md) etkinleştirin.
:::

![Eylem Ses-Video Android](@site/static/img/map/action_av_note_android.png)

Harita üzerinde seçilen bir noktada bir medya notu kaydeder veya çeker.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - seçilen noktada bir [sesli not](../map/point-layers-on-map.md#-audio--video-points-android) oluşturur (ses simgesiyle kaplama üzerinde yeni bir nokta oluşturur).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - seçilen noktada bir [video notu](../map/point-layers-on-map.md#-audio--video-points-android) oluşturur (video simgesiyle kaplama üzerinde yeni bir nokta oluşturur).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - harita üzerinde bir [fotoğraf noktası](../map/point-layers-on-map.md#-audio--video-points-android) oluşturur.


## Özelleştir {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Harita bağlam menüsü Özelleştir](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![Harita bağlam menüsü Özelleştir](@site/static/img/map/map_context_menu_customize_2.png) --> ![Harita bağlam menüsü Özelleştir](@site/static/img/map/map_context_menu_customize_3.png)

*Harita bağlam menüsündeki* *Eylemler* menüsünden öğelerin sırasını değiştirebilir veya gizleyebilirsiniz. Toplam 16 eylem önerilir.

- En kullanışlı üç eylemi *Ana eylemler* listesinin en üstüne taşıyabilirsiniz.
- Menünün geri kalanı, *Ek eylemler* ve *Gizli* bölümlerinde her profil için ayrı ayrı özelleştirilebilir.

Mevcut eylem türleri:

- **<Translate android="true" ids="main_actions"/>**. Bölümde yalnızca 4 düğme bulunur, bunlardan üçü özelleştirilebilir ve Eylemler değişmeden kalır.
- **<Translate android="true" ids="additional_actions"/>**. Bu eylemlere *Eylemler* düğmesine dokunarak erişebilirsiniz.
- **<Translate android="true" ids="shared_string_hidden"/>**. Eylemleri bu bölüme taşımak, çalışmalarını durdurmaz. Sadece Eylemler menüsünde görünmezler.


## İlgili Makaleler {#related-articles}

- [Vektör haritaları (Harita stilleri)](./vector-maps.md)
- [Raster Haritalar (Çevrimiçi / Çevrimdışı)](./raster-maps.md)
- [Harita üzerindeki noktalar](./point-layers-on-map.md)
- [İz Bağlam menüsü](./tracks/track-context-menu.md)
- [Toplu taşıma](./public-transport.md)
- [İçe / Dışa Aktar](../personal/import-export.md)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)