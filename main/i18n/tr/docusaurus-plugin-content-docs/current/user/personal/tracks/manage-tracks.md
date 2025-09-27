---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
sidebar_position: 2
title:  İzleri Yönet
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

OsmAnd'deki tüm izler *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>* içindeki bir sekmede saklanır. OsmAnd, iz dosyasını [GPX formatında](https://en.wikipedia.org/wiki/GPS_Exchange_Format) işler, ancak [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) ve [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) içe aktarılabilir ve GPX'e dönüştürülebilir. [Haritadaki İzler](../../map/tracks/index.md#types-of-tracks) makalesinde farklı iz türleri hakkında daha fazla bilgi edinin.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz Yönetimine Genel Bakış Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz Yönetimine Genel Bakış iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## İz Oluşturma {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bir rota planla izi değiştir android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bir rota planla izi değiştir ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

OsmAnd'e aşağıdaki yollarla iz ekleyebilirsiniz:

1. Harici bir kaynaktan bir izi **[İçe Aktar](./manage-tracks.md#import--export-track)**.
2. Uygulamada **[Rota planla](../../plan-route/create-route.md)** aracını kullanarak yeni bir iz oluşturun.
3. Uygulamada **[Yolculuk kaydı](../../plugins/trip-recording.md)** eklentisini kullanarak iz kaydedin.
4. Koordinatları kullanarak birden fazla nokta girin ve **[Koordinat girişi](../../plan-route/coordinate-input.md)** aracını kullanarak bunları bir iz olarak kaydedin.
5. Ayrıca **[Bağlam menüsü](../../map/map-context-menu.md#-add--edit-track-waypoint)** aracılığıyla yeni bir ize **Yol Noktaları** ekleyebilirsiniz.


## İzleri Yönet {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi*

![Android'de izleri olan Yerlerim](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta izleri olan Yerlerim](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Kaydedilen, oluşturulan veya içe aktarılan tüm izler, *İzler* sekmesindeki [Yerlerim](../../personal/myplaces.md) klasöründe otomatik olarak görüntülenir. Bunlar klasöre göre düzenlenir veya altlarında bir listede görüntülenir.


### İz Menüsü {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![Android'de izleri olan Yerlerim](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta bir izin bağlam menüsü](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Her iz, klasörler gibi, izleri verimli bir şekilde yönetmenizi sağlayan bir menüye sahiptir. İşte ona nasıl erişeceğiniz:

- *Android* - iz alanındaki *üç nokta menüsüne* dokunun.
- *iOS* - listedeki gerekli ize uzun dokunun.

Menü aşağıdaki eylemleri sağlar:

- **Haritada Göster/Gizle** — Seçilen izleri haritada görüntüler veya gizler, konumlarını görsel olarak temsil eder.

- [Aç](../../map/tracks/index.md#configure-map) (*iOS*) — Bu ayar Haritayı Yapılandır menüsünde mevcuttur. *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>* içinde bulunur ve dokunulduğunda [seçilen izin bağlam menüsüne](../../map/tracks/track-context-menu.md) erişmenizi sağlar.

- **Görünüm** (*iOS*) — [İzlerin görünümünü](../../map/tracks/appearance.md) tercihlerinize göre özelleştirin.

- **Navigasyon** (*iOS*) — Seçilen iz boyunca [navigasyonu](../../navigation/setup/gpx-navigation.md) başlatır.

- **Haritada Analiz Et** (*Android*) / **Analiz Et** (*iOS*) — Daha fazla analiz için Rota Detayları içindeki [Haritada Analiz Et](../../navigation/setup/route-details.md#analyze-on-map) aracını açar.

- **Paylaş** — Seçilen izi başkalarıyla paylaşmayı sağlar.

- **Değişiklikleri OSM'ye Yükle** (*iOS*) — İzde yaptığınız [değişiklikleri](../../plugins/osm-editing.md#gps-track) doğrudan *OpenStreetMap*'e yükleyin.

- **Düzenle** (*iOS*) — İzleri değiştirmek için [Rota planla](../../plan-route/create-route.md#modify-existing-gpx-track) aracını kullanın.

- **Çoğalt** (*iOS*) — Seçilen izin bir kopyasını oluşturur.

- **Yeniden Adlandır** — Daha iyi düzenleme için seçilen izin adını değiştirin.

- **Taşı** — Seçilen izi farklı bir klasöre taşımanıza olanak tanır.

- **Dışa Aktar** (*Android*) — Bir klasördeki tüm izleri dışa aktarmak için *Menü → Ayarlar → Eylemler* sekmesine gidin.

- **Sil** — Artık ihtiyaç duyulmayan seçilen izi kalıcı olarak kaldırın.


### Ara {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim izleri arama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim izleri arama fonksiyonu iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Cihaz ekranının üst kısmındaki &#x1F50D; düğmesine dokunarak iz listesi sıralama menüsünü açın.  

Mevcut:

- İz adına göre ara.
- Başlığı hatırlayamıyorsanız daha iyi arama için [Sırala](#sort-by).
- İzin belirli özelliklerine ihtiyacınız varsa [Filtrele](./smart-folder.md#search-filter) (*Yalnızca Android*).


### Seçim Modu {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim izleri sıralama fonksiyonu Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim izleri iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

**Seç** menü öğesi, klasörleri ve izleri yönetmek için seçenekler sunar. Bu özellik, birden fazla iz veya iz klasörü seçmenize olanak tanır. Özel **Tümünü Seç** düğmesine dokunarak tüm izleri ve klasörleri de seçebilirsiniz.

Seçiminizi yaptıktan sonra aşağıdaki adımlar sağlanır:  

- **Haritada göster** — Bu özellik sayesinde, seçilen izleri haritada görüntüleyerek konumlarını ve birbirleriyle olan ilişkilerini daha iyi anlayabilirsiniz.

- **Paylaş** (*Android*) / **Dışa Aktar** (*iOS*) — Seçilen verileri diğer kullanıcılarla paylaşmak veya bir bulut hizmetine kaydetmek isterseniz, *Paylaş/Dışa Aktar* özelliği, izleri ve klasörleri farklı paylaşım yöntemleri kullanarak göndermenizi sağlar.

- **OpenStreetMap'e yükle** — Seçilen izleri OpenStreetMap'e göndererek verilerin geliştirilmesine ve iyileştirilmesine katkıda bulunabilirsiniz.

- **Taşı** — Seçilen izleri ve klasörleri diğer klasörlere taşıyarak verilerinizi düzenleyebilirsiniz.

- [Etkinliği değiştir](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Bu eylem, seçilen iz için etkinlik türünü, örneğin *Araba*, *Macera Motor Sporları*, *Sırt Çantasıyla Gezme* veya diğerlerine değiştirmenize olanak tanır.

- [Görünümü değiştir](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Bu seçenek, seçilen izlerin görünümünü özelleştirmenize olanak tanır, böylece haritada daha görünür ve tanınabilir olurlar.

- **Sil** — Seçilen izler veya klasörler artık gerekli değilse, Sil işlevi bunları silmenize olanak tanır ve uygulama yanlışlıkla silmeyi önlemek için onay seçenekleri sunar.


### İzleri Sırala {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim izleri sıralama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim izleri sıralama fonksiyonu iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd, izlerinizi sıralamanın kolay bir yolunu sunarak, geniş bir koleksiyonu yönetmenize veya belirli özellikleri hızla bulmanıza yardımcı olur. Sıralama menüsüne erişmek için izler listesinin üst kısmındaki **Sırala**'ya dokunun.

***Sıralama seçenekleri:***

- **En Yakın** — Mevcut konumunuza en yakın izleri gösterir.
- **Son Değiştirilen** — İzleri en son değiştirilme tarihlerine göre sıralar.
- **Ad: A - Z** — İzleri A'dan Z'ye alfabetik olarak düzenler.
- **Ad: Z - A** — İzleri Z'den A'ya alfabetik olarak düzenler.
- **En Yeni Tarih Önce** — İzleri oluşturulma tarihlerine göre listeler, en yenisi en üstte.
- **En Eski Tarih Önce** — İzleri oluşturulma tarihlerine göre listeler, en eskisi en üstte.
- **En Uzun Mesafe Önce** — İzleri uzunluklarına göre sıralar, en uzunu en üstte.
- **En Kısa Mesafe Önce** — İzleri uzunluklarına göre sıralar, en kısası en üstte.
- **En Uzun Süre Önce** — İzleri sürelerine göre sıralar, en uzunu en üstte.
- **En Kısa Süre Önce** — İzleri sürelerine göre sıralar, en kısası en üstte.

### Alt Klasörleri Sıralama {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yerlerim izleri sıralama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Yerlerim izleri sıralama fonksiyonu iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

[Alt klasörleri](#folder-actions) sıralamak isterseniz, seçilen klasördeki üç nokta menüsüne gidin ve gerekli [seçenekleri](#sort-by) seçin.  

Seçilen sıralama seçeneği yalnızca mevcut alt klasöre değil, aynı zamanda tüm iç içe klasörlere ve tüm seviyelerdeki izlere de uygulanır. Bu, kaydedilen verilerinizde tutarlı bir yapı sağlar.


## İz Klasörü {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Klasör menüsünü **açmak** için klasör alanındaki *üç nokta menüsüne* dokunun.

![çoklu izi içe aktar](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Klasör menüsünü **açmak** için klasör alanına uzun dokunun.

![iOS'ta bir izin bağlam menüsü](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

İz klasörü menüsü, klasörleri görüntülemenize, yeniden adlandırmanıza, dışa aktarmanıza ve yönetmenize olanak tanır.


***Bir klasörle eylemler:***

- **Ad** — Klasör adını, oluşturulma tarihini ve içerdiği iz sayısını görüntüler.
- **Tüm izleri haritada göster** (*Yalnızca Android*) — Klasördeki tüm izleri haritada görüntüler. Çok sayıda iz varsa, bu cihazın donmasına neden olabilir.
- **Adı düzenle** (*Android*) / **Yeniden Adlandır** (*iOS*) — Klasörü yeniden adlandırmanıza olanak tanır.
- [Varsayılan görünümü değiştir](../../map/tracks/appearance.md) (*Android*) / **Görünüm** (*iOS*) — Klasördeki tüm izlerin görüntü görünümünü değiştirir.
- [Dışa Aktar](../../personal/import-export.md) — Klasördeki tüm izleri bir [`.osf` dosyası](../../personal/import-export.md#export) olarak dışa aktarmak için *Menü → Ayarlar → Eylemler* sekmesini açar.
- [Taşı](#track-folder) — Klasörü başka bir mevcut klasöre taşımanıza veya yeni bir klasör oluşturmanıza olanak tanır.
- [Klasörü Sil](#delete-folder) — Onaydan sonra klasörü siler. ***Bu eylem geri alınamaz.***


### Klasör İstatistikleri {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> sekmesi*

![Android'de izleri olan Yerlerim](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta izleri olan Yerlerim](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

*İzler* sekmesindeki listenin altında ve **her bir klasörünüzdeki** izler listesinin altında, seçilen klasördeki izler için genel özet istatistiklerini görüntülemenizi sağlayan bir bilgi bölümü bulunur. Tüm değerler seçtiğiniz [birimlerde](../../personal/profiles.md#units--formats) görüntülenir.

- Klasördeki **İz** sayısı — Seçilen klasörde bulunan iz sayısını görüntüler.
- Toplam **Mesafeler** toplamı — Seçilen klasördeki tüm izlerin toplam uzunluğu, seçtiğiniz birimlerde ölçülerek görüntülenir.
- **Yokuşlar** toplamı — Veriler, seçilen klasördeki tüm izlerdeki toplam dikey yükselişi gösterir.
- **Yokuş aşağılar** toplamı — Bu parametre, seçilen klasördeki tüm izlerdeki dikey inişlerin toplamıdır.
- **Süre** zamanı toplamı — Bu, seçilen klasördeki tüm izleri tamamlamak için geçen toplam süreyi görüntüler.
- İndirilen dosyaların toplam **Boyutu** MB cinsinden — Megabayt cinsinden toplam indirilen dosya boyutu, seçilen klasördeki tüm izlerin cihazınızda ne kadar yer kapladığını gösterir.


### Klasör Eylemleri {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Yerlerim izleri sıralama fonksiyonu Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Yerlerim izleri iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Klasördeki eylemler, navigasyon verilerinizi yapılandırmak için izleri düzenlemenize, sıralamanıza ve içe aktarmanıza yardımcı olur.  

Klasör eylemleri nasıl açılır:

- Yerlerim'deki İzler sekmesini açın.
- Yönetmek istediğiniz klasöre gidin.
- Klasör eylemleri menüsünü açmak için sağ üst köşedeki *üç nokta menüsüne* dokunun.

***Klasör menüsündeki eylemler:***

- [Seç](#selection-mode) — *Seçim modunda* menüden eylemleri uygulamak için gerekli klasörlere ve izlere dokunun.
- [Alt klasörleri sırala](#sort-by) — Tüm alt klasörlere ve her seviyedeki izlere bir sıralama düzeni (örn. ada, tarihe göre) uygulayın.
- [Akıllı klasör ekle](../tracks/smart-folder.md#how-to-create-smart-folder) — Belirlediğiniz kriterlere göre rotaları ve izleri otomatik olarak sıralayın.
- [İçe Aktar](#import) — Çevrimdışı kullanım ve analiz için GPX veya diğer iz dosyalarını cihazınızdan OsmAnd'e yükleyin.
- **Yeni klasör ekle** — Rotalarınızı ve izlerinizi mantıksal kategorilere ayırmak için bunları farklı klasörlere koyun. Bu, navigasyon bilgilerinizi yapılandırmaya yardımcı olur.


### Klasörü Sil {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![Android'de izleri olan Yerlerim](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> sekmesi*

![iOS'ta bir izin bağlam menüsü](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Bir klasörü içerdiği tüm izlerle birlikte silebilirsiniz. Bunu yapmak için:

- Silmek için klasör alanındaki *üç nokta menüsüne* dokunun.
- Menünün altında **Klasörü Sil** seçeneğini bulun.
- ***NOT: Bu eylem geri alınamaz.***


## İzi İçe / Dışa Aktar {#import--export-track}

### İçe Aktar {#import}

İçe aktarma aracı, çevrimdışı navigasyon ve analiz için harici dosyalardan izler eklemenizi sağlar. İzleri içe aktarma yöntemleri:

1. **Doğrudan dosya içe aktarma:**

    - Mesajlaşma uygulamalarından, e-postadan, Google Drive'dan veya dosya yöneticilerinden bir GPX, KML veya KMZ dosyasına dokunun.
    - İstendiğinde OsmAnd'de Aç'ı seçin.
    - İçe aktarılan iz, *Yerlerim*'deki **İçe Aktar** klasörüne kaydedilir.
    - Adımlar: GPX dosyasına dokunun → OsmAnd'de Aç.

2. ***Yerlerim* menüsünü kullanarak içe aktarma:**

    - *Yerlerim menüsü → İzler*'i açın.
    - İçe aktarılacak GPX dosyasını seçin.

    *Ek seçenekler:*

    - **Tek izli GPX dosyaları** - tüm izi doğrudan içe aktarın.
    - **Çok izli GPX dosyaları** - tek GPX dosyasını içe aktarmayı veya belirli izleri seçmeyi seçin.

***NOT:*** *Cihazınızdaki OsmAnd klasörüne manuel olarak eklenen izler, uygulamayı yeniden başlatmaya gerek kalmadan otomatik olarak içe aktarılır.*  


### Dışa Aktar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![çoklu izi içe aktar](@site/static/img/personal/tracks/import_multitrack.png) ![çoklu izi içe aktar](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Dışa Aktar | İçe Aktar |
|:------------|:---------------|
| ![çoklu izi içe aktar](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Dışa Aktar </summary> ![çoklu izi içe aktar](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![çoklu izi içe aktar](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Dışa Aktar </summary> ![çoklu izi içe aktar](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Bir veya daha fazla iz dosyasını herhangi bir mesajlaşma uygulamasına, e-postaya, dosya yöneticisine veya uygulamaya dışa aktarmanın birkaç yolu vardır.  

1. [*İz bağlam menüsü → Paylaş*](../../map/tracks/track-context-menu.md#options) aracılığıyla.

2. *Yerlerim menüsü → İzler → Klasör / İz menüsü* aracılığıyla:

    - [**Tek bir izi dışa aktarmak**](#track-menu) için izin menüsünü seçin.
    - [**Çoklu iz dışa aktarmak**](#track-folder) için gerekli klasörün menüsünü seçin.

3. [Yerel yedekleme dosyası](../../personal/import-export.md#export) aracılığıyla. GPX izlerini `.osf` dosyaları olarak dışa aktarma.


## İlgili Makaleler {#related-articles}

- [Haritada izi göster](../../map/tracks/index.md)
- [Haritada analiz et](../../map/tracks/index.md#analyze-track-on-map)
- [İz Bağlam menüsü](../../map/tracks/track-context-menu.md)
- [İze göre navigasyon](../../navigation/setup/gpx-navigation.md)
- [Yolculuk kaydı](../../plugins/trip-recording.md)