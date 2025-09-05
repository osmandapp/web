---
source-hash: 13f229400445a81db544afbadce1fb85746267eecddcd8299384d384de2a58b5
sidebar_position: 3
title: Arama Geçmişi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Genel Bakış {#overview}

*Arama Geçmişi*, uygulama içinde kullandığınız süre boyunca girdiğiniz veya aradığınız tüm aramaların ve konumların bir kaydıdır. Bu araç, daha önce aradığınız konumları kolayca bulmanızı ve bunlara erişmenizi sağlayarak navigasyonu kolaylaştırır ve zamandan tasarruf etmenizi sağlar.

OsmAnd, arama geçmişinizi görüntülemek için çeşitli yollar sunar.

- [Ara düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve üzerine dokunmak sizi aracın [genel ekranına](#how-to-use) götürür.
- Ana Android *Menü → Ara → Geçmiş sekmesine* gidin.
- Bir rota başlatmaya hazırlanırken, *Navigasyon → Hedef belirle → Arama alanı* üzerine dokunun.
- [Rota hazırlığı](../navigation/setup/route-navigation.md#navigation-menu) navigasyon menüsündeki bilgi bloğu, aynı zamanda arama geçmişinin bir parçası olan son hedef noktalarının bir listesini görüntüler.
- Arama geçmişi [Android Auto](../navigation/auto-car.md#search) ve [CarPlay](../navigation/car-play.md#search) içinde mevcuttur.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Arama geçmişi, önceki eylemlerinizle ilgili bilgileri sağlamaya yarar.

- *Tekrar ara*. Arama geçmişini, sorguyu yeniden girmek zorunda kalmadan daha önce aranan yerleri veya adresleri tekrar aramak için kullanabilirsiniz.

- *Sık ziyaret edilen yerlere hızlı erişim*. Eviniz, işiniz veya favori yerleriniz gibi belirli yerleri sık sık ziyaret ediyorsanız, Arama Geçmişi bu yerleri kaydederek onlara hızlı erişim sağlar.

- *Önceki seyahatleri takip et*. Arama geçmişi, önceki seyahatleri ve rotaları takip etmek için faydalı olabilir. Daha önce gittiğiniz rotaları takip edebilir veya önceki rotalara göre [bir sonraki rotanızı planlayabilirsiniz](../plan-route/create-route.md).

- *Belirli bir zaman dilimindeki yerleri ara*. Android uygulaması için uzun dokunmanız, ardından seyahat ettiğiniz ayı bulmanız, silme menüsünden çıkmanız ve arama alanına adı ayarlamanız gerekir. iOS uygulaması için, arama geçmişi listesi zaten aya göre bloklara ayrılmıştır.

- *Girdileri sil*. Arama Geçmişi, önceki girdileri [silme](#delete) yeteneği sağlar, bu da gizlilik için veya geçmişinizi düzenli tutmak için faydalı olabilir.


## Geçmiş Öğeleri {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Arama Geçmişi listesindeki her alan, uygulamaya sunulan **bilgilerin** bir kısmını içerir.

- Bulunan nesnenin türünü veya kategorisini tanımlayan bir simge.
- Nesne adı, konumu, adresi veya tür sorgusu. İzler için mesafe, yol noktası sayısı ve zaman bilgisi görüntülenir.
- Mevcut konumunuzdan noktaya olan mesafe ve pusula ile yön.


### Öğelerin Sırası {#order-of-items}

- **Son Öğeler**. En son istekler veya konumlar listenin en üstünde görüntülenir. Bu, yakın zamanda kullanılan öğelere hızlı erişim sağlar.
- **Kronolojik sıra**. Arama Geçmişi listesindeki öğeler, en eski veya en erken girişlerden başlayarak en yeni veya en son girişlerle biten kronolojik sıraya göre düzenlenir. Eski öğeler, arama geçmişindeki eski öğeler kullanılmadıkça, yeni girişler eklendikçe listede yavaş yavaş aşağı doğru hareket eder, bu durumda listenin en üstüne taşınırlar.
- iOS'ta liste aya göre sıralanır.

### Nesne Türü {#type-of-objects}

Arama Geçmişi listesine aşağıdaki **nesne türleri** girer:

- **Konumlar**. Bu bir adres, işletme adı, rota numarası, koordinatlar, işaretleyiciler, ilgi noktaları, OSM notları veya haritada dokunduğunuz yerler olabilir.
- **İzler ve Yol Noktaları**. Liste, daha önceki rotalarda kullandığınız, oluşturduğunuz, kaydettiğiniz veya indirdiğiniz izleri ve ayrı ayrı gezindiyseniz yol noktalarını içerir.


## Eylemler {#actions}

Arama Geçmişi aracında, gereksiz sorguları, hepsini bir kerede veya tek tek öğeler halinde [silebilirsiniz](#delete). Geçmişi [dışa aktarabilir](#export-and-share) ve kullanabilirsiniz. Android uygulaması, arama öğelerini bir [GPX](../../technical/osmand-file-formats/osmand-gpx.md) dosyası olarak [paylaşma](#share-android) ek bir eylem sağlar.

Tüm arama geçmişinin görüntülenmesini **devre dışı bırakabilir veya etkinleştirebilirsiniz**. Bu durumda, sorgular cihazdan silinmez. Android'de, ana ekranda aracın [Geçmiş sekmesinde](#overview) anahtar bulunur. iOS'ta, *Menü → Ayarlar → OsmAnd Ayarları → Geçmiş → Arama Geçmişi* içinde bulunur.


### Sil {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

OsmAnd'ı uzun süre kullandıktan sonra, *Arama Geçmişi* listesi çok uzun hale gelebilir, bu nedenle arama sorgularını silmek listeyi temizlemeye yardımcı olur. Artık ilgili olmayan veya gelecekte kullanmayı düşünmediğiniz sorguları silebilirsiniz, bu da özellikle belirli arama sorgularını hızlı bir şekilde bulmanız gerektiğinde listeyi aramayı kolaylaştırır.

Silme ekranını açmak için **listedeki herhangi bir sorgu öğesine uzun dokunmanız** gerekir.

- *Rastgele öğeleri seçin veya seçimi kaldırın* - listedeki gerekli öğeye dokunun.
- *Silmek için mevcut süreyi seçin*, örneğin gün, son 7 gün veya ay - listedeki alt başlığı olan kutuyu işaretleyin.
- Ekranın altındaki *Tümünü Seç* düğmesine dokunarak *tüm geçmişi* bir kerede silebilirsiniz.
- *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler*. Bu bölüm **Tüm geçmişi sil** düğmesini içerir.


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

Arama geçmişini dışa aktarmak için birkaç seçenek mevcuttur. Tüm dosyalar `.osf` (OsmAnd ayarları Dosyası) biçiminde dışa aktarılır.

1. *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Arama geçmişi*.
    Dışa aktarma, OsmAnd ayarları menüsü kullanılarak yapılabilir. Android için, bu yolu takip etmek sizi silme ekranına götürür, burada [Geçmişi Paylaş](#share-android) mevcuttur. iOS durumunda, ekranda tek tek öğeleri veya tüm geçmişi seçebilir ve *Dışa Aktar* düğmesine dokunduktan sonra *Yerel Yedekleme* menüsüne gidebilirsiniz.

2. *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler → Dosya olarak yedekle* (Android).
    *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler → Dışa Aktar* (iOS).
    Bu öğelere dokunmak sizi *İçe Aktar/Dışa Aktar* (Android) veya *Yerel Yedekleme* (iOS) menüsüne götürür. *Yerlerim* listesini genişletin ve *Arama Geçmişi*'ni bulun. Tüm sorgular tek bir dosyada bir kerede dışa aktarılır.

3. *Menü → Ayarlar → İçe Aktar/Dışa Aktar → Dosyaya aktar* (Android).
    *Menü → Ayarlar → Yerel Yedekleme → Dosya olarak yedekle* (iOS).
    Daha fazla ayrıntıyı [İçe Aktar/Dışa Aktar](../personal/import-export.md#export) makalesinde okuyabilirsiniz.

4. [OsmAnd Bulut](../personal/osmand-cloud.md#select-data-to-back-up)
    Arama geçmişinizi yedeklemek için Bulut'u kullanabilirsiniz. *Yerel Değişiklikler* menüsünde veya *Ayarlar → Verileri yedekle → Yerlerim → Arama Geçmişi*.

![Ayarlar Geçmişi](@site/static/img/search/history_search_share_andr.png)

Öğeleri veya tüm arama geçmişini dışa aktarmak aşağıdaki durumlarda faydalı olabilir:

- *Yedekleme*. Bilgileri silmeden önce kaydetmek ve gerekirse geri yüklemek için arama geçmişinizi yedekleyebilirsiniz.
- *Başka bir cihaza aktarma*. Cihaz değiştirdiğinizde, arama geçmişinizi yeni bir cihaza aktarmak için dışa aktarma işlevini veya Bulut'u kullanabilirsiniz, böylece verileri tekrar aramak ve girmek zorunda kalmazsınız.
- *Verileri analiz etme ve işleme*. Arama geçmişinizi veri analizi için dışa aktarabilir veya diğer uygulamalarda kullanabilirsiniz.
- Arama geçmişini diğer OsmAnd kullanıcılarıyla [paylaşın](#share-android).


#### Paylaş (Android) {#share-android}

![Ayarlar Geçmişi](@site/static/img/search/history_search_share_andr.png)

Arama geçmişi öğelerini paylaşma adımları [dışa aktarmaya](#export-and-share) benzer, fark şudur ki tüm geçmişi bir kerede bir [osf](../../technical/osmand-file-formats/osmand-osf.md) dosyası olarak dışa aktarırsınız, oysa tek tek seçilen dosyaları gpx formatında paylaşabilirsiniz.

[Silme](#delete) ekranında, Arama Geçmişi listesinden gerekli öğeleri seçin. Ekranın sağ üst köşesinde paylaşımı gösteren bir simge bulunur. Paylaşmak için listeden mevcut bir uygulamayı veya eylemi seçin.


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Adres Ara](./search-address.md)
- [İÇN Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)


> *Son güncelleme: Temmuz 2024*