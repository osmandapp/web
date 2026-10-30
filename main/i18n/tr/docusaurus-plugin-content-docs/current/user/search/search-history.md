---
source-hash: e750c3ad7de0205a9500f893c56be0ee9d096f570987bbd67c2ad004df8b1816
sidebar_position: 3
title:  Keşfet Ara
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Arama aracındaki **Keşfet** sekmesi, çevrenizdeki popüler yerleri keşfetmenize ve daha önce aradığınız veya gezindiğiniz yerlere hızlıca geri dönmenize yardımcı olur. İki bölüm içerir: [Yakındaki Popüler Yerler](#popular-places-nearby) ve [Geçmiş](#history-items).

*Geçmiş*, uygulama içinde belirli bir süre boyunca girdiğiniz veya aradığınız tüm aramaların ve navigasyon hedeflerinin bir kaydıdır. Bu araç, daha önce aranan konumlara kolayca erişmenizi ve bunları bulmanızı sağlayarak navigasyonu kolaylaştırır ve zamandan tasarruf etmenizi sağlar.

OsmAnd, geçmişinizi görüntülemek için çeşitli yollar sunar.

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve üzerine dokunmak sizi aracın [genel ekranına](#how-to-use) götürür.
- Ana *Menü → Ara → Keşfet sekmesine* gidin.
- Bir rota başlatmaya hazırlanırken *Navigasyon → Hedef belirle → Arama alanı*'na dokunun.
- [Rota hazırlama](../navigation/setup/route-navigation.md#navigation-menu) navigasyon menüsündeki bilgi bloğu, aynı zamanda arama geçmişinin bir parçası olan son hedef noktalarının bir listesini görüntüler.
- Arama geçmişi [Android Auto](../navigation/auto-car.md#search) içinde mevcuttur.

</TabItem>

<TabItem value="ios" label="iOS">

*Arama Geçmişi*, uygulama içinde belirli bir süre boyunca girdiğiniz veya aradığınız tüm aramaların ve konumların bir kaydıdır. Bu araç, daha önce aranan konumlara kolayca erişmenizi ve bunları bulmanızı sağlayarak navigasyonu kolaylaştırır ve zamandan tasarruf etmenizi sağlar.

OsmAnd, arama geçmişinizi görüntülemek için çeşitli yollar sunar.  

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir. Aracın [genel ekranını](#how-to-use) açmak için üzerine dokunun, ardından *Geçmiş* sekmesini seçin.
- Bir rota başlatmaya hazırlanırken *Navigasyon → Hedef belirle → Arama alanı*'na dokunun.
- [Rota hazırlama](../navigation/setup/route-navigation.md#navigation-menu) navigasyon menüsündeki bilgi bloğu, aynı zamanda arama geçmişinin bir parçası olan son hedef noktalarının bir listesini görüntüler.
- Arama geçmişi [CarPlay](../navigation/car-play.md#search) içinde mevcuttur.

</TabItem>

</Tabs>


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Keşfet araması](@site/static/img/search/explore_search_android.webp)

**Keşfet** sekmesi, Arama aracını açtığınızda açılır. Keşfet sekmesi, çevrenizdeki yerler ve önceki eylemleriniz hakkında ilgili bilgileri sağlamaya hizmet eder.

- *Yakındaki yerleri keşfetme*. [Yakındaki Popüler Yerler](#popular-places-nearby) bölümü, çevrenizdeki tanınmış simge yapıları ve çekim noktalarını gösterir, böylece sorgu girmeden ilginç yerler bulabilirsiniz.
- *Yeniden arama*. Arama geçmişini, sorguyu yeniden girmek zorunda kalmadan daha önce aranan yerleri veya adresleri tekrar aramak için kullanabilirsiniz.
- *Sık ziyaret edilen yerlere hızlı erişim*. Eviniz, işiniz veya favori yerleriniz gibi belirli yerleri sık sık ziyaret ediyorsanız, Arama Geçmişi bu yerleri kaydederek onlara hızlı erişim sağlar.
- *Önceki seyahatleri takip etme*. Arama geçmişi, önceki seyahatleri ve rotaları takip etmek için faydalı olabilir. Daha önce gittiğiniz rotaları takip edebilir veya önceki rotalara dayanarak [bir sonraki rotanızı planlayabilirsiniz](../plan-route/create-route.md).
- *Belirli bir zaman dilimindeki yerleri arama*. Geçmiş ekranında, *Son* olarak sıralanan öğeler döneme göre gruplanır: *Bugün*, *Dün*, *Geçen hafta* ve ardından aylara göre. Belirli bir öğeyi bulmak için ekranın üstündeki *Geçmiş* başlığına dokunun ve adını girin.
- *Girdileri silme*. Arama Geçmişi, gizlilik için veya geçmişinizi düzenli tutmak için faydalı olabilecek önceki girdileri [silme](#delete) olanağı sağlar.

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

Arama geçmişi, önceki eylemleriniz hakkında ilgili bilgileri sağlamaya hizmet eder.

- *Yeniden arama*. Arama geçmişini, sorguyu yeniden girmek zorunda kalmadan daha önce aranan yerleri veya adresleri tekrar aramak için kullanabilirsiniz.
- *Sık ziyaret edilen yerlere hızlı erişim*. Eviniz, işiniz veya favori yerleriniz gibi belirli yerleri sık sık ziyaret ediyorsanız, Arama Geçmişi bu yerleri kaydederek onlara hızlı erişim sağlar.  
- *Önceki seyahatleri takip etme*. Arama geçmişi, önceki seyahatleri ve rotaları takip etmek için faydalı olabilir. Daha önce gittiğiniz rotaları takip edebilir veya önceki rotalara dayanarak [bir sonraki rotanızı planlayabilirsiniz](../plan-route/create-route.md).  
- *Belirli bir zaman dilimindeki yerleri arama*. Arama geçmişi listesi zaten aya göre bloklara ayrılmıştır.
- *Girdileri silme*. Arama Geçmişi, gizlilik için veya geçmişinizi düzenli tutmak için faydalı olabilecek önceki girdileri [silme](#delete) olanağı sağlar.

</TabItem>

</Tabs>


## Yakındaki Popüler Yerler {#popular-places-nearby}

<InfoAndroidOnly/>

![Yakındaki Popüler Yerler](@site/static/img/search/popular_places_nearby.webp)

**Yakındaki popüler yerler** bölümü, konumunuzun yakınındaki tanınmış simge yapıların ve çekim noktalarının kaydırılabilir bir listesini görüntüler. Her öğe yerin adını, kategorisini, mesafesini ve yönünü ve varsa bir önizleme görselini içerebilir. Tam listeyi açmak için *Tümünü göster*'e, bu yerleri haritada görüntülemek için *Haritada göster*'e dokunun.

Daha fazla ayrıntı için [Popüler Yerler](../map/popular_places.md#explore-in-search) makalesine bakın.


## Geçmiş Öğeleri {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş bölümü](@site/static/img/search/history_section_list.webp)

Keşfet sekmesinin **Geçmiş** bölümü en son 25 öğeye kadarını görüntüler. Bölümü daraltmak veya genişletmek için bölüm başlığına dokunun. Tam *Geçmiş* ekranını açmak için *Tümünü görüntüle*'ye dokunun.

*Arama geçmişi* ve *Navigasyon geçmişi* kapalıysa, bölüm *Geçmiş kapalı* kartını görüntüler. Bunları etkinleştirmek için *Geçmiş ayarlarını aç*'a dokunun.

Geçmiş listesindeki her alan, uygulamada bulunan **bilgilerin** bir kısmını içerir.

- Bulunan nesnenin türünü veya kategorisini tanımlayan bir simge.
- Nesne adı, konumu, adresi veya tür sorgusu. İzler için mesafe, ara nokta sayısı ve zaman bilgileri görüntülenir.

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

Arama Geçmişi listesindeki her alan, uygulamada bulunan **bilgilerin** bir kısmını içerir.

- Bulunan nesnenin türünü veya kategorisini tanımlayan bir simge.
- Nesne adı, konumu, adresi veya tür sorgusu. İzler için mesafe, ara nokta sayısı ve zaman bilgileri görüntülenir.
- Mevcut konumunuzdan noktaya olan mesafe ve pusula ile yön.

</TabItem>

</Tabs>


### Sırala ve Filtrele {#sort-and-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş bölümü](@site/static/img/search/history_section_android.webp) ![Geçmiş bölümü](@site/static/img/search/history_section_2_android.webp)

Tam *Geçmiş* ekranında, geçmiş öğelerini aşağıdaki seçenekleri kullanarak sıralayabilir ve filtreleyebilirsiniz:

1. **Sıralama ölçütü**:
    - *Son* — en son eklenen öğeleri önce görüntüler. Bu seçenek seçildiğinde öğeler Bugün, Dün, Geçen hafta ve daha eski dönemler gibi zamana göre gruplanır.
    - *En yakın* — öğeleri mevcut konumunuza olan mesafelerine göre sıralar.
    - *Harita merkezine en yakın* — öğeleri haritanın mevcut merkezine olan mesafelerine göre sıralar. Mesafeye dayalı sıralama seçeneklerinden biri seçildiğinde zamana dayalı gruplar görüntülenmez.

2. **Tür** — geçmiş öğelerini şuna göre filtreler:
    - *Tümü* — mevcut tüm geçmiş öğelerini görüntüler.
    - *Arama* — arama geçmişinizdeki öğeleri görüntüler.
    - *Navigasyon* — navigasyon geçmişinizdeki öğeleri görüntüler.

Geçmiş ayarlarında *Arama geçmişi* veya *Navigasyon geçmişi* kapalıysa, *Tür* filtresi kullanılamaz.

3. **Kategori filtreleri** — geçmiş öğelerini kategoriye göre filtreler. Mevcut kategori filtreleri, Geçmişinizdeki öğe türlerine bağlıdır. Örneğin POI, İz, Konum, Favori veya Adres gibi kategoriler görebilirsiniz. Aynı anda birden fazla kategori seçebilirsiniz.

4. **Ayarlar** — *Arama geçmişi*, *Navigasyon geçmişi* ve *Harita işaretleyicileri geçmişi*'ni etkinleştirebileceğiniz veya devre dışı bırakabileceğiniz, geçmişi dosya olarak yedekleyebileceğiniz veya tüm geçmişi temizleyebileceğiniz Geçmiş ayarlarını açmak için sağ üst köşedeki dişli simgesine dokunun.

</TabItem>

<TabItem value="ios" label="iOS">

- **Son Öğeler**. En son istekler veya konumlar listenin en üstünde görüntülenir. Bu, yakın zamanda kullanılan öğelere hızlı erişim sağlar.
- **Kronolojik sıra**. Arama Geçmişi listesindeki öğeler, en eski veya en erken girişlerden başlayarak en yeni veya en son girişlerle biten kronolojik sıraya göre düzenlenir. Yeni girişler eklendikçe eski öğeler listede yavaş yavaş aşağı doğru hareket eder, ancak arama geçmişindeki eski öğeler kullanılmışsa, listenin en üstüne taşınırlar.
- Liste aya göre sıralanır.

</TabItem>

</Tabs>

### Nesne Türü {#type-of-objects}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Arama Geçmişi listesine aşağıdaki **nesne türleri** girer:

- **Konumlar**. Bu bir adres, işletme adı, rota numarası, koordinatlar, işaretleyiciler, ilgi çekici noktalar, OSM notları veya haritada dokunduğunuz yerler olabilir.
- **İzler ve Ara Noktalar**. Liste, daha önceki rotalarda kullandığınız oluşturduğunuz, kaydettiğiniz veya indirdiğiniz izleri ve ayrı ayrı gezindiyseniz ara noktaları içerir.
- **Favoriler ve Fotoğraflar**. Açtığınız favori noktalar ve fotoğraf notları.
- **Hedefler**. Gezindiğiniz noktalar.

</TabItem>

<TabItem value="ios" label="iOS">

Arama Geçmişi listesine aşağıdaki **nesne türleri** girer:

- **Konumlar**. Bu bir adres, işletme adı, rota numarası, koordinatlar, işaretleyiciler, ilgi çekici noktalar, OSM notları veya haritada dokunduğunuz yerler olabilir.
- **İzler ve Ara Noktalar**. Liste, daha önceki rotalarda kullandığınız oluşturduğunuz, kaydettiğiniz veya indirdiğiniz izleri ve ayrı ayrı gezindiyseniz ara noktaları içerir.

</TabItem>

</Tabs>


## Eylemler {#actions}

Arama Geçmişi aracında, gereksiz sorguları, hepsini bir kerede veya tek tek öğeleri [silebilirsiniz](#delete). Geçmişi [dışa aktarabilirsiniz](#export-and-share). Android uygulaması, arama öğelerini bir [GPX](../../technical/osmand-file-formats/osmand-gpx.md) dosyası olarak [paylaşmak](#share-android) için ek bir eylem sağlar.

Tüm arama geçmişinin görüntülenmesini **devre dışı bırakabilir veya etkinleştirebilirsiniz**. Bu durumda, sorgular cihazdan silinmez. Android'de, anahtar [Sil](#delete) ekranının üst kısmında ve [Geçmiş](#sort-and-filter) ekranındaki dişli simgesiyle açabileceğiniz Geçmiş ayarlarında bulunur. iOS'ta ise *Menü → Ayarlar → OsmAnd Ayarları → Geçmiş → Arama Geçmişi*'nde bulunur.


### Sil {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

OsmAnd'ı uzun süre kullandıktan sonra, *Arama Geçmişi* listesi çok uzun hale gelebilir, bu nedenle arama sorgularını silmek listeyi temizlemeye yardımcı olur. Artık alakalı olmayan veya gelecekte kullanmayı düşünmediğiniz sorguları silebilirsiniz, bu da özellikle belirli arama sorgularını hızlı bir şekilde bulmanız gerektiğinde listede arama yapmayı kolaylaştırır.

Silme ekranını açmak için **listedeki herhangi bir sorgu öğesine uzun dokunmanız** gerekir.

- *Rastgele öğeleri seçin veya seçimini kaldırın* - listedeki gerekli öğeye dokunun.
- *Gün, son 7 gün veya ay gibi silinebilecek dönemi seçin* - listedeki alt başlığı olan kutuyu işaretleyin.
- Ekranın altındaki *Tümünü Seç* düğmesine dokunarak *tüm geçmişi* bir kerede silebilirsiniz.
- *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler*. Bu bölümde **Tüm geçmişi sil** düğmesi bulunur.


### Dışa Aktar ve Paylaş {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Genel Ayarlar Geçmiş Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Genel Ayarlar Geçmiş iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Arama geçmişini dışa aktarmak için birkaç seçenek mevcuttur. Tüm dosyalar `.osf` (OsmAnd ayarları Dosyası) formatında dışa aktarılır.

1. *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Arama geçmişi*.
    Dışa aktarma, OsmAnd ayarları menüsü kullanılarak yapılabilir. Android için bu yolu takip etmek sizi silme ekranına götürür, burada [Geçmişi paylaş](#share-android) mevcuttur. iOS durumunda, ekranda tek tek öğeleri veya tüm geçmişi seçebilir ve *Dışa Aktar* düğmesine dokunduktan sonra *Yerel Yedekleme* menüsüne gidebilirsiniz.

2. *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler → Dosya olarak yedekle* (Android).
    *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler → Dışa Aktar* (iOS).
    Bu öğelere dokunmak sizi *İçe/Dışa Aktar* (Android) veya *Yerel Yedekleme* (iOS) menüsüne götürür. *Yerlerim* listesini genişletin ve *Arama Geçmişi*'ni bulun. Tüm sorgular tek bir dosyada bir kerede dışa aktarılır.

3. *Menü → Ayarlar → İçe/Dışa Aktar → Dosyaya aktar* (Android).
    *Menü → Ayarlar → Yerel Yedekleme → Dosya olarak yedekle* (iOS).
    Daha fazla ayrıntıyı [İçe/Dışa Aktar](../personal/import-export.md#export) makalesinde okuyabilirsiniz.

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Arama geçmişinizi yedeklemek için Cloud'u kullanabilirsiniz. *Yerel Değişiklikler* menüsünde veya *Ayarlar → Verileri yedekle → Yerlerim → Arama Geçmişi*.

![Ayarlar Geçmişi](@site/static/img/search/history_search_share_andr.png)

Öğeleri veya tüm arama geçmişini dışa aktarmak aşağıdaki durumlarda faydalı olabilir:

- *Yedekleme*. Bilgileri silmeden önce kaydetmek ve gerekirse geri yüklemek için arama geçmişinizi yedekleyebilirsiniz.
- *Başka bir cihaza aktarma*. Cihaz değiştirdiğinizde, arama geçmişinizi yeni bir cihaza aktarmak için dışa aktarma işlevini veya Cloud'u kullanabilirsiniz, böylece verileri tekrar aramak ve girmek zorunda kalmazsınız.
- *Verileri analiz etme ve işleme*. Veri analizi için arama geçmişinizi dışa aktarabilir veya diğer uygulamalarda kullanabilirsiniz.
- Arama geçmişini diğer OsmAnd kullanıcılarıyla [paylaşın](#share-android).


### Paylaş (Android) {#share-android}

![Ayarlar Geçmişi](@site/static/img/search/history_search_share_andr.png)

Arama geçmişi öğelerini paylaşma adımları [dışa aktarmaya](#export-and-share) benzer, farkı ise tüm geçmişi bir kerede bir [osf](../../technical/osmand-file-formats/osmand-osf.md) dosyası olarak dışa aktarırken, tek tek seçilen dosyaları gpx formatında paylaşabilmenizdir.

[Silme](#delete) ekranında, Arama Geçmişi listesinden gerekli öğeleri seçin. Ekranın sağ üst köşesinde paylaşımı gösteren bir simge bulunur. Paylaşmak için listeden mevcut bir uygulamayı veya eylemi seçin.


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Adres Ara](./search-address.md)
- [İÇN Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)