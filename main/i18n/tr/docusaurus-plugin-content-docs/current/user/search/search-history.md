---
source-hash: 7a908eb0d049f610343ddbeb81ac84c7f787f549729ffd82f824c9c2f9bd25d6
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

*Arama Geçmişi*, uygulama kullanım süresi boyunca girdiğiniz veya aradığınız tüm aramaların ve konumların bir kaydıdır. Bu araç, daha önce aranan konumları kolayca bulmanızı ve erişmenizi sağlayarak navigasyonu kolaylaştırır ve zamandan tasarruf etmenizi sağlar.

OsmAnd, arama geçmişinizi görüntülemek için çeşitli yollar sunar.

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve üzerine dokunmak sizi aracın [genel ekranına](#how-to-use) götürür.
- Ana Android *Menü → Ara → Geçmiş sekmesine* gidin.
- Bir rota başlatmaya hazırlanırken *Navigasyon → Hedef belirle → Arama alanı* üzerine dokunun.
- [Rota hazırlama](../navigation/setup/route-navigation.md#navigation-menu) navigasyon menüsündeki bilgi bloğu, arama geçmişinin bir parçası olan son hedef noktalarının bir listesini görüntüler.
- Arama geçmişi [Android Auto](../navigation/auto-car.md#search) ve [CarPlay](../navigation/car-play.md#search) içinde mevcuttur.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Arama geçmişi, önceki eylemleriniz hakkında ilgili bilgileri sağlamaya hizmet eder.

- *Tekrar arama*. Daha önce aranan yerleri veya adresleri sorguyu yeniden girmek zorunda kalmadan tekrar aramak için arama geçmişini kullanabilirsiniz.

- *Sık ziyaret edilen yerlere hızlı erişim*. Eviniz, işiniz veya favori yerleriniz gibi belirli yerleri sık sık ziyaret ediyorsanız, Arama Geçmişi bu yerleri kaydeder ve onlara hızlı erişim sağlar.

- *Önceki gezileri takip etme*. Arama geçmişi, önceki gezileri ve rotaları takip etmek için faydalı olabilir. Daha önce gittiğiniz rotaları takip edebilir veya önceki rotalara dayanarak [bir sonraki rotanızı planlayabilirsiniz](../plan-route/create-route.md).

- *Belirli bir zaman dilimindeki yerleri arama*. Android uygulaması için uzun dokunmanız, ardından gezinizi yaptığınız ayı bulmanız, silme menüsünden çıkmanız ve arama alanına adı ayarlamanız gerekir. iOS uygulaması için, arama geçmişi listesi zaten aya göre bloklara ayrılmıştır.

- *Girdileri silme*. Arama Geçmişi, önceki girdileri [silme](#delete) yeteneği sağlar, bu da gizlilik için veya geçmişinizi düzenli tutmak için faydalı olabilir.


## Geçmiş Öğeleri {#history-items}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Arama Geçmişi listesindeki her alan, uygulamada bulunan **bilgilerin** bir kısmını içerir.

- Bulunan nesnenin türünü veya kategorisini tanımlayan bir simge.
- Nesne adı, konumu, adresi veya tür sorgusu. İzler için, mesafe, ara nokta sayısı ve zaman bilgileri görüntülenir.
- Mevcut konumunuzdan noktaya olan mesafe ve pusula ile yön.


### Öğelerin Sırası {#order-of-items}

- **Son Öğeler**. En son istekler veya konumlar listenin en üstünde görüntülenir. Bu, yakın zamanda kullanılan öğelere hızlı erişim sağlar.
- **Kronolojik sıra**. Arama Geçmişi listesindeki öğeler, en eski veya en erken girdilerden başlayarak en yeni veya en son girdilerle biten kronolojik sıraya göre düzenlenir. Yeni girdiler eklendikçe eski öğeler listede yavaş yavaş aşağı doğru hareket eder, ancak arama geçmişindeki eski öğeler kullanılmışsa, listenin en üstüne taşınırlar.
- iOS'ta liste aya göre sıralanır.

### Nesne Türü {#type-of-objects}

Arama Geçmişi listesine aşağıdaki **nesne türleri** girer:

- **Konumlar**. Bu bir adres, işletme adı, rota numarası, koordinatlar, işaretleyiciler, ilgi çekici noktalar, OSM notları veya haritada dokunduğunuz yerler olabilir.
- **İzler ve Ara Noktalar**. Liste, oluşturduğunuz, kaydettiğiniz veya indirdiğiniz ve önceki rotalarda kullandığınız izleri ve ayrı ayrı gezindiyseniz ara noktaları içerir.


## Eylemler {#actions}

Arama Geçmişi aracında, gereksiz sorguları, hepsini bir kerede veya tek tek öğeler halinde [silebilirsiniz](#delete). Geçmişi [dışa aktarabilir](#export-and-share) veya [paylaşabilirsiniz](#share-android). Android uygulaması, arama öğelerini bir [GPX](../../technical/osmand-file-formats/osmand-gpx.md) dosyası olarak [paylaşma](#share-android) ek bir eylem sağlar.

Tüm arama geçmişinin görüntülenmesini **devre dışı bırakabilir veya etkinleştirebilirsiniz**. Bu durumda, sorgular cihazdan silinmez. Android'de, ana ekranda aracın [Geçmiş sekmesinde](#overview) bulunur. iOS'ta ise *Menü → Ayarlar → OsmAnd Ayarları → Geçmiş → Arama Geçmişi* bölümünde bulunur.


### Sil {#delete}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Geçmiş araması](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geçmiş araması](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

OsmAnd'ı uzun süre kullandıktan sonra, *Arama Geçmişi* listesi çok uzun hale gelebilir, bu nedenle arama sorgularını silmek listeyi temizlemeye yardımcı olur. Artık ilgili olmayan veya gelecekte kullanmayı düşünmediğiniz sorguları silebilirsiniz, bu da listede arama yapmayı kolaylaştırır, özellikle belirli arama sorgularını hızlı bir şekilde bulmanız gerektiğinde.

Silme ekranını açmak için **listedeki herhangi bir sorgu öğesine uzun dokunmanız** gerekir.

- *Rastgele öğeleri seçin veya seçimi kaldırın* - listedeki gerekli öğeye dokunun.
- *Silinebilecek dönemi seçin*, örneğin gün, son 7 gün veya ay - listedeki alt başlığı olan kutuyu işaretleyin.
- Ekranın altındaki *Tümünü Seç* düğmesine dokunarak *tüm geçmişi* bir kerede silebilirsiniz.
- *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Eylemler*. Bu bölümde **Tüm geçmişi sil** düğmesi bulunur.


### Dışa Aktar ve Paylaş {#export-and-share}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Genel Ayarlar Geçmişi Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Genel Ayarlar Geçmişi iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Arama geçmişini dışa aktarmak için çeşitli seçenekler mevcuttur. Tüm dosyalar `.osf` (OsmAnd ayar dosyası) formatında dışa aktarılır.

1. *Menü → Ayarlar → OsmAnd ayarları → Geçmiş → Arama geçmişi*.
    Dışa aktarma, OsmAnd ayarlar menüsü kullanılarak yapılabilir. Android için, bu yolu takip etmek sizi silme ekranına götürür, burada [Geçmişi Paylaş](#share-android) mevcuttur. iOS durumunda, ekranda tek tek öğeleri veya tüm geçmişi seçebilir ve *Dışa Aktar* düğmesine dokunduktan sonra *Yerel Yedekleme* menüsüne gidebilirsiniz.

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

- *Yedekleme*. Arama geçmişinizi, silmeden önce bilgileri kaydetmek ve gerekirse geri yüklemek için yedekleyebilirsiniz.
- *Başka bir cihaza aktarma*. Cihaz değiştirdiğinizde, arama geçmişinizi yeni bir cihaza aktarmak için dışa aktarma işlevini veya Cloud'u kullanabilirsiniz, böylece verileri tekrar aramak ve girmek zorunda kalmazsınız.
- *Verileri analiz etme ve işleme*. Arama geçmişinizi veri analizi için dışa aktarabilir veya diğer uygulamalarda kullanabilirsiniz.
- Arama geçmişini diğer OsmAnd kullanıcılarıyla [paylaşın](#share-android).


#### Paylaş (Android) {#share-android}

![Ayarlar Geçmişi](@site/static/img/search/history_search_share_andr.png)

Arama geçmişi öğelerini paylaşma adımları [dışa aktarmaya](#export-and-share) benzer, fark şudur ki, tüm geçmişi bir kerede bir [osf](../../technical/osmand-file-formats/osmand-osf.md) dosyası olarak dışa aktarırsınız, ancak tek tek seçilen dosyaları gpx formatında paylaşabilirsiniz.

[Silme](#delete) ekranında, Arama Geçmişi listesinden gerekli öğeleri seçin. Ekranın sağ üst köşesinde paylaşımı gösteren bir simge bulunur. Paylaşmak için listeden mevcut bir uygulamayı veya eylemi seçin.


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Adres Ara](./search-address.md)
- [İÇN Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)


> *Son güncelleme: Temmuz 2024*