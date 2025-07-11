---
source-hash: 61247292af1aa1532bdbb133f67761a221b4967bdccb328e710358ccdfd2084c
sidebar_position: 2
title:  Parçaları Yönet
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

OsmAnd'deki tüm parçalar *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>* içindeki bir sekmede saklanır. OsmAnd, parça dosyasını [GPX formatında](https://en.wikipedia.org/wiki/GPS_Exchange_Format) işler, ancak [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) ve [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) içe aktarılabilir ve GPX'e dönüştürülebilir. Farklı parça türleri hakkında daha fazla bilgiyi [Haritadaki Parçalar](../../map/tracks/index.md#types-of-tracks) makalesinde okuyun.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parçayı Yönet Genel Bakış Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parçayı Yönet Genel Bakış iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Parça Oluştur {#create-a-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Bir rotayı planla rotayı değiştir-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bir rotayı planla rotayı değiştir-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

OsmAnd'de aşağıdaki yollarla parça ekleyebilirsiniz:

1. Harici bir kaynaktan bir parçayı **[İçe Aktar](./manage-tracks.md#import--export-track)**.
2. Uygulamada **[Rota Planla](../../plan-route/create-route.md)** aracını kullanarak yeni bir parça oluşturun.
3. Uygulamada **[Seyahat kaydı](../../plugins/trip-recording.md)** eklentisini kullanarak parça kaydedin.
4. Koordinatlarla birden fazla nokta girin ve **[Koordinat girişi](../../plan-route/coordinate-input.md)** aracını kullanarak bunları bir parça olarak kaydedin.
5. Ayrıca **Ara Noktaları** yeni bir parçaya **[Bağlam menüsü](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)** aracılığıyla ekleyebilirsiniz.


## Parçaları Yönet {#manage-tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi*

![Android'de parçaları olan Yerlerim](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta parçaları olan Yerlerim](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Şimdiye kadar kaydedilen, oluşturulan veya içe aktarılan tüm parçalar, [Yerlerim](../../personal/myplaces.md) klasöründeki *Parçalar* sekmesinde otomatik olarak görüntülenir. Bunlar klasöre göre düzenlenir veya altlarında bir listede görüntülenir.


### Parça Menüsü {#track-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![Android'de parçaları olan Yerlerim](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta bir parçanın bağlam menüsü](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Her parça, klasörler gibi, parçaları verimli bir şekilde yönetmenizi sağlayan bir menüye sahiptir. Buradan erişebilirsiniz:

- *Android* - parça alanındaki *üç nokta menüsüne* dokunun.
- *iOS* - listedeki gerekli parçaya uzun dokunun.

Menü aşağıdaki eylemleri sağlar:

- **Haritada Göster/Gizle** — Seçilen parçaları haritada görüntüler veya gizler, konumlarını görsel olarak temsil eder.

- [Aç](../../map/tracks/index.md#configure-map) (*iOS*) — Bu ayar Haritayı Yapılandır menüsünde mevcuttur. *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>* içinde yer alır, dokunulduğunda [seçilen parçanın bağlam menüsüne](../../map/tracks/track-context-menu.md) erişmenizi sağlar.

- **Görünüm** (*iOS*) — [Parçaların görünümünü](../../map/tracks/appearance.md) tercihlerinize göre özelleştirin.

- **Navigasyon** (*iOS*) — Seçilen parça boyunca [navigasyonu](../../navigation/setup/gpx-navigation.md) başlatır.

- **Haritada Analiz Et** (*Android*) / **Analiz Et** (*iOS*) — Daha fazla analiz için Rota Detayları içindeki [Haritada Analiz Et](../../navigation/setup/route-details.md#analyze-on-map) aracını açar.

- **Paylaş** — Seçilen parçayı başkalarıyla paylaşmayı sağlar.

- **Değişiklikleri OSM'ye Yükle** (*iOS*) — Parçada yaptığınız [değişiklikleri](../../plugins/osm-editing.md#gps-track) doğrudan *OpenStreetMap*'e yükleyin.

- **Düzenle** (*iOS*) — Parçaları değiştirmek için [Rota Planla](../../plan-route/create-route.md#modify-gpx-track) aracını kullanın.

- **Çoğalt** (*iOS*) — Seçilen parçanın bir kopyasını oluşturur.

- **Yeniden Adlandır** — Daha iyi düzenleme için seçilen parçanın adını değiştirin.

- **Taşı** — Seçilen parçayı farklı bir klasöre taşımanıza olanak tanır.

- **Dışa Aktar** (*Android*) — Bir klasördeki tüm parçaları dışa aktarmak için *Menü → Ayarlar → Eylemler* sekmesine gidin.

- **Sil** — Artık ihtiyaç duyulmayan seçilen parçayı kalıcı olarak kaldırın.


### Ara {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Yerlerim parçaları arama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parçaları arama fonksiyonu iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Parça listesi sıralama menüsünü açmak için cihaz ekranının üst kısmındaki &#x1F50D; düğmesine dokunun.  

Mevcut:

- Parça adına göre ara.
- Başlığı hatırlayamıyorsanız daha iyi arama için [Şuna göre sırala](#sort-by).
- Parçanın belirli özelliklerine ihtiyacınız varsa [Filtrele](./smart-folder.md#search-filter) (*yalnızca Android*).


### Seçim Modu {#selection-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Yerlerim parçaları sıralama fonksiyonu Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parçaları iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

**Seç** menü öğesi, klasörleri ve parçaları yönetmek için seçenekler sunar. Bu özellik, birden fazla parça veya parça klasörü seçmenize olanak tanır. Ayrıca özel **Tümünü Seç** düğmesine dokunarak tüm parçaları ve klasörleri seçebilirsiniz.

Seçiminizi yaptıktan sonra aşağıdaki adımlar sağlanır:  

- **Haritada göster** — Bu özellik ile, seçilen parçaları haritada görüntüleyerek konumlarını ve birbirleriyle olan ilişkilerini daha iyi anlayabilirsiniz.

- **Paylaş** (*Android*) / **Dışa Aktar** (*iOS*) — Seçilen verileri diğer kullanıcılarla paylaşmak veya bir bulut hizmetine kaydetmek isterseniz, *Paylaş/Dışa Aktar* özelliği, farklı paylaşım yöntemlerini kullanarak parçaları ve klasörleri göndermenizi sağlar.

- **OpenStreetMap'e yükle** — Seçilen parçaları OpenStreetMap'e göndererek verilerin geliştirilmesine ve iyileştirilmesine katkıda bulunabilirsiniz.

- **Taşı** — Seçilen parçaları ve klasörleri başka klasörlere taşıyarak verilerinizi düzenleyebilirsiniz.

- [Etkinliği değiştir](../../map/tracks/track-context-menu.md#track-information-activity) — Bu eylem, seçilen parça için etkinlik türünü, örneğin *Araba*, *Macera Motorsporları*, *Sırt Çantasıyla Seyahat* veya diğerleri olarak değiştirmenize olanak tanır.

- [Görünümü değiştir](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Bu seçenek, seçilen parçaların görünümünü özelleştirmenize olanak tanır, böylece haritada daha görünür ve tanınabilir hale gelirler.

- **Sil** — Seçilen parçalar veya klasörler artık gerekli değilse, Sil işlevi bunları silmenize olanak tanır ve uygulama, yanlışlıkla silmeyi önlemek için onay seçenekleri sunar.


### Şuna Göre Sırala {#sort-by}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Yerlerim parçaları sıralama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parçaları sıralama fonksiyonu iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd, parçalarınızı sıralamanın kolay bir yolunu sunar, bu da büyük bir koleksiyonu yönetmenize veya belirli özellikleri hızlı bir şekilde bulmanıza yardımcı olur. Sıralama menüsüne erişmek için, parçalar listesinin üst kısmındaki **Şuna göre sırala**'ya dokunun.

***Sıralama seçenekleri:***

- **En Yakın** — Mevcut konumunuza en yakın parçaları gösterir.

- **Son Değiştirilen** — Parçaları en son değiştirme tarihlerine göre sıralanmış olarak görüntüler.

- **Ad: A - Z** — Parçaları A'dan Z'ye alfabetik olarak düzenler.

- **Ad: Z - A** — Parçaları Z'den A'ya alfabetik olarak düzenler.

- **En Yeni Tarih İlk** — Parçaları oluşturma tarihine göre listeler, en yenisi en üstte.

- **En Eski Tarih İlk** — Parçaları oluşturma tarihine göre listeler, en eskisi en üstte.

- **En Uzun Mesafe İlk** — Parçaları uzunluğa göre sıralanmış olarak görüntüler, en uzunu en üstte.

- **En Kısa Mesafe İlk** — Parçaları uzunluğa göre sıralanmış olarak görüntüler, en kısası en üstte.

- **En Uzun Süre İlk** — Parçaları süreye göre sıralar, en uzunu en üstte.

- **En Kısa Süre İlk** — Parçaları süreye göre sıralar, en kısası en üstte.

#### Alt Klasörleri Sıralama {#sorting-subfolders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Yerlerim parçaları sıralama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim parçaları sıralama fonksiyonu iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

[Alt klasörleri](#folder-actions) sıralamak isterseniz, seçilen klasördeki üç nokta menüsüne gidin ve gerekli [seçenekleri](#sort-by) seçin.  

Seçilen sıralama seçeneği yalnızca mevcut alt klasöre değil, aynı zamanda tüm iç içe klasörlere ve tüm seviyelerdeki parçalara da uygulanır. Bu, kaydedilen verilerinizde tutarlı bir yapı sağlar.


## Parça Klasörü {#track-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![çoklu parça içe aktar](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta bir parçanın bağlam menüsü](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Parça klasörü menüsü, klasörleri görüntülemenize, yeniden adlandırmanıza, dışa aktarmanıza ve yönetmenize olanak tanır.

Klasör menüsü nasıl açılır:

- *Android* - klasör alanındaki *üç nokta menüsüne* dokunun.
- *iOS* - klasör alanına uzun dokunun.

***Bir klasörle yapılan eylemler:***

- **Ad** — Klasör adını, oluşturma tarihini ve içerdiği parça sayısını görüntüler.

- **Tüm parçaları haritada göster** (*yalnızca Android*) — Klasördeki tüm parçaları haritada görüntüler —  
    *NOT: Çok sayıda parça varsa, bu cihazın donmasına neden olabilir.*

- **Adı düzenle** (*Android*) / **Yeniden adlandır** (*iOS*) — Klasörü yeniden adlandırmanıza olanak tanır.

- [Varsayılan görünümü değiştir](../../map/tracks/appearance.md) (*Android*) / **Görünüm** (*iOS*) — Klasördeki tüm parçaların görüntü görünümünü değiştirir.

- [Dışa Aktar](../../personal/import-export.md) — Klasördeki tüm parçaları bir [`.osf` dosyası](../../personal/import-export.md#export) olarak dışa aktarmak için *Menü → Ayarlar → Eylemler* sekmesini açar.

- [Taşı](#track-folder) — Klasörü başka bir mevcut klasöre taşımaya veya yeni bir tane oluşturmaya olanak tanır.

- [Klasörü sil](#delete-folder) — Onaydan sonra klasörü siler.  
    ***NOT: Bu eylem geri alınamaz.***


### Klasör İstatistikleri {#folder-statistics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> sekmesi*

![Android'de parçaları olan Yerlerim](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta parçaları olan Yerlerim](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

*Parçalar* sekmesindeki listenin altında ve **her klasörünüzdeki** parça listesinin altında, seçilen klasördeki parçalar için genel özet istatistiklerini görüntülemenizi sağlayan bir bilgi bölümü bulunur. Tüm değerler seçtiğiniz [birimlerde](../../personal/profiles.md#units--formats) görüntülenir.

- Klasördeki **Parça** sayısı — Seçilen klasörde bulunan parça sayısını görüntüler.

- Toplam **Mesafeler** toplamı — Seçilen klasördeki tüm parçaların toplam uzunluğu, seçtiğiniz birimlerde ölçülerek görüntülenir.

- **Yokuşlar** toplamı — Veriler, seçilen klasördeki tüm parçalardaki toplam dikey yükselişi gösterir.

- **Yokuş Aşağılar** toplamı — Bu parametre, seçilen klasördeki tüm parçalardaki dikey inişlerin toplamıdır.

- **Süre** zamanının toplamı — Bu, seçilen klasördeki tüm parçaları tamamlamak için geçen toplam süreyi görüntüler.

- İndirilen dosyaların toplam **Boyutu** MB cinsinden — Megabayt cinsinden toplam indirilen dosya boyutu, seçilen klasördeki tüm parçaların cihazınızda ne kadar yer kapladığını gösterir.


### Klasör Eylemleri {#folder-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Yerlerim parçaları sıralama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Yerlerim parçaları iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Klasördeki eylemler, navigasyon verilerinizi yapılandırmak için parçaları düzenlemenize, sıralamanıza ve içe aktarmanıza yardımcı olur.  

Klasör eylemleri nasıl açılır:

- Yerlerim'deki Parçalar sekmesini açın.
- Yönetmek istediğiniz klasöre gidin.
- Klasör eylemleri menüsünü açmak için sağ üst köşedeki *üç nokta menüsüne* dokunun.

***Klasör menüsündeki eylemler:***

- [Seç](#selection-mode) — *Seçim modunda* menüden eylemleri uygulamak için gerekli klasörlere ve parçalara dokunun.

- [Alt klasörleri sırala](#sort-by) — Tüm alt klasörlere ve her seviyedeki parçalara bir sıralama düzeni (örneğin, ada, tarihe göre) uygulayın.

- [Akıllı klasör ekle](../tracks/smart-folder.md#how-to-create-smart-folder) — Belirlediğiniz kriterlere göre rotaları ve parçaları otomatik olarak sıralayın.

- [İçe Aktar](#import) — Çevrimdışı kullanım için GPX veya diğer parça dosyalarını cihazınızdan OsmAnd'e yükleyin.

- **Yeni klasör ekle** — Rotalarınızı ve parçalarınızı mantıksal kategorilere ayırmak için farklı klasörlere koyun. Bu, navigasyon bilgilerini yapılandırmaya yardımcı olur.


### Klasörü Sil {#delete-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![Android'de parçaları olan Yerlerim](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta bir parçanın bağlam menüsü](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Bir klasörü içerdiği tüm parçalarla birlikte silebilirsiniz. Bunu yapmak için:

- Silmek istediğiniz klasör alanındaki *üç nokta menüsüne* dokunun.
- Menünün alt kısmında **Klasörü Sil** seçeneğini bulun.
- ***NOT: Bu eylem geri alınamaz.***


## Parça İçe Aktar / Dışa Aktar {#import--export-track}

### İçe Aktar {#import}

İçe aktarma aracı, çevrimdışı navigasyon ve analiz için harici dosyalardan parça eklemenizi sağlar. Parçaları içe aktarma yöntemleri:

1. **Doğrudan dosya içe aktarma:**

    - Mesajlaşma uygulamalarından, e-postadan, Google Drive'dan veya dosya yöneticilerinden bir GPX, KML veya KMZ dosyasına dokunun.
    - İstendiğinde OsmAnd'de Aç'ı seçin.
    - İçe aktarılan parça, *Yerlerim*'deki **İçe Aktar** klasörüne kaydedilir.
    - Adımlar: GPX dosyasına dokunun → OsmAnd'de Aç.

2. ***Yerlerim* menüsünü kullanarak içe aktarma:**

    - *Yerlerim menüsü → Parçalar*'ı açın.
    - İçe aktarılacak GPX dosyasını seçin.

    *Ek seçenekler:*

    - **Tek parçalı GPX dosyaları** - tüm parçayı doğrudan içe aktarın.
    - **Çok parçalı GPX dosyaları** - tek GPX dosyasını içe aktarmayı veya belirli parçaları seçmeyi seçin.

***NOT:*** *Cihazınızdaki OsmAnd klasörüne manuel olarak eklenen parçalar, uygulamayı yeniden başlatmaya gerek kalmadan otomatik olarak içe aktarılır.*  


### Dışa Aktar {#export}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![çoklu parça içe aktar](@site/static/img/personal/tracks/import_multitrack.png) ![çoklu parça içe aktar](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Dışa Aktar | İçe Aktar |
|:------------|:---------------|
| ![çoklu parça içe aktar](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Dışa Aktar </summary> ![çoklu parça içe aktar](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![çoklu parça içe aktar](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Dışa Aktar </summary> ![çoklu parça içe aktar](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Bir veya daha fazla parça dosyasını herhangi bir mesajlaşma uygulamasına, e-postaya, dosya yöneticisine veya uygulamaya dışa aktarmanın birkaç yolu vardır.  

1. [*Parça bağlam menüsü → Paylaş*](../../map/tracks/track-context-menu.md#options) ile.

2. *Yerlerim menüsü → Parçalar → Klasör / Parça menüsü* ile:

    - [**Tek bir parçayı dışa aktarmak**](#track-menu) için, parçanın menüsünü seçin.
    - [**Çoklu parça dışa aktarmak**](#track-folder) için, gerekli klasörün menüsünü seçin.

3. [Yerel yedekleme dosyası](../../personal/import-export.md#export-to-file) ile. GPX parçalarını `.osf` dosyaları olarak dışa aktarma.


## İlgili Makaleler {#related-articles}

- [Haritada parça göster](../../map/tracks/index.md)
- [Haritada analiz et](../../map/tracks/index.md#analyze-track-on-map)
- [Parça Bağlam menüsü](../../map/tracks/track-context-menu.md)
- [Parça ile navigasyon](../../navigation/setup/gpx-navigation.md)
- [Seyahat kaydı](../../plugins/trip-recording.md)

> *Son güncelleme: Nisan 2025*