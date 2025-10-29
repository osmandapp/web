---
source-hash: a7c6f8f7442c4b7f13e5c2dddf666b3c3746573001eeed8e01301d994f46a1d5
sidebar_position: 9
title:  Android Auto
ios: false
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

![Android Auto ekranı](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto), Google tarafından geliştirilen ve kullanıcıların Android cihazlarını uyumlu araç multimedya sistemlerine bağlamasına olanak tanıyan bir yazılımdır. *Android Auto*, sürüş sırasında güvenli kullanım için OsmAnd uygulamasının uyarlanmış ve optimize edilmiş bir sürümünü sunarak uygulamanın navigasyon işlevlerine erişimi daha kolay ve güvenli hale getirir.

**Android Auto** işlevi yalnızca [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023) adresinde bulunan OsmAnd uygulaması kullanıldığında desteklenir.

> **NOT**: *Android Auto, OsmAnd mobil uygulamasının doğrudan bir kopyası değildir. Güvenli sürüş sağlamak için temel navigasyon işlevlerine odaklanan basitleştirilmiş bir arayüze sahiptir. Bazı gelişmiş özellikler platform sınırlamaları nedeniyle desteklenmemektedir.*


### Bağlantı Ekranı {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

Cihazınız *Android Auto*'ya bağlıyken, uygulama ekranındaki harita kilitlenir. Bu, navigasyonun yalnızca araç ekranından kontrol edilmesini sağlayarak sürüş sırasında dikkat dağıtıcı unsurları en aza indiren kasıtlı bir güvenlik özelliğidir. Bağlantı ekranıyla ilgili [sıkça sorulan soruları](#common-issues-and-solutions) kontrol edin.


### Açılış Ekranı {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Uygulamayı açtığınızda, bir kategori listesi görüntülenir. Kolay gezinme için, ekranın sağ üst köşesindeki düğmeye dokunarak gizleyebilirsiniz.

- Kategori listesini gizlemek için menü düğmesine dokunun.
- Listeye geri dönmek isterseniz, ekranın sağ üst köşesindeki işlev düğmelerinin yanındaki düğmeye dokunun.


### Harita ile Etkileşim {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto*, OsmAnd arayüzünü araç multimedya sistemi ekranına uyarlanmış olarak görüntüler. Harita ile etkileşim aşağıdaki düğmelerle sınırlıdır:

- [OsmAnd menüsü](#destination-points). Bir rota bitiş noktası veya serbest sürüş atamak için mevcut seçeneklerin bir listesini içerir.
- [Ayarlar](#voice-prompts). Bu düğme şunlardan sorumludur: 1. seçilen rotada gezinirken *sesli komutları* açma/kapama erişimi; 2. bir sonraki durak için rota ayrıntılarını (süre ve mesafe) gösterme.
- [Ara](#search). Düğmeye dokunmak, arama işlevlerine erişim sağlayan bir ekran açar.
- [Konumum](../widgets/map-buttons.md#my-location-and-zoom). Haritanın görünür kısmını, mevcut konumunuzun ekranın merkezinde olacak şekilde hareket ettirir.
- [Yakınlaştır](../widgets/map-buttons.md#my-location-and-zoom). Haritanın görünür kısmını yakınlaştırmanıza ve uzaklaştırmanıza olanak tanır. Harita ölçeklendirme için yakınlaştırma jesti kullanılabilir. Baş ünite tarafından desteklenmiyorsa, yakınlaştırma ayarı çift dokunma ve kaydırma jesti ile gerçekleştirilir.
- [Pusula](../widgets/map-buttons.md#compass). Cihazınızın ekranında dört mevcut harita yönlendirme modundan hangisinin seçildiğini gösterir.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

### Navigasyonu Başlat {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

OsmAnd'ın *Android Auto*'da çalışması için Android cihazınızı araç multimedya sisteminize [bağlamanız](#connection-screen) gerekir. Android işletim sistemi 6.0 veya daha yüksek bir sürüme güncellenmelidir.

- Cihazınızı nasıl bağlayacağınızı ve kuracağınızı öğrenmek için [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) web sitelerini ziyaret edin.

- Tüm araçlar cihaz bağlantı özelliğini desteklemez. *Android Auto* için [uyumluluk listesini](https://www.android.com/auto/compatibility/#compatibility-vehicles) kontrol edin.

- Uygulamanın **ücretli sürümünü** satın almanız veya bir [abonelik](../purchases/android.md#free-and-paid-features) almanız gerekir. Mevcut aboneliğinizi buradan kontrol edin *Menü → Ayarlar → Satın Almalar*.

- *Android Auto*, navigasyon için Profiller listesindeki ilk [OsmAnd Sürüş profili](#profile-first) kullanır. Tercih edilen profili ilk sıraya ayarlayın, *Haritaya Göz At* profili hariç, *Android Auto* tarafından okunmaz. Bunu yapmak için OsmAnd *Menü → Ayarlar → Uygulama profilleri → Profil listesini düzenle* → [**Sürüş**](#profile-first) profilinizi ilk sıraya veya *Haritaya Göz At* profilinden sonra taşıyın.

- *Android Auto*'nun mobil veri de dahil olmak üzere veri yoğun bir uygulama olduğunu ve sistemin kalitesinin bağlantınızın kalitesine ve İnternet erişim hızınıza bağlı olabileceğini unutmamak önemlidir.

### İlk Profil {#profile-first}

Araç ekranındaki *Android Auto*'da doğrudan bir profil seçemezsiniz.  
Cihazınızda zaten araç tipine karşılık gelen bir profil seçiliyse, örneğin *Sürüş*, *Kamyon*, *Araba*, *Motosiklet*, *Moped*, **uygulama otomatik olarak** Android Auto'ya bağlandığınızda uygun profili etkinleştirecektir. Örneğin, *Kamyon* profiliniz seçiliyse ve cihazınız **Android Auto**'ya bağlanırsa, uygulama bu profili etkinleştirecektir.

Cihazınızda araç tipinize karşılık gelen herhangi bir *Sürüş* profili seçili değilse, OsmAnd otomatik olarak *Sürüş* profiline geçecektir. Bu, temel navigasyon sağlamak ve belirli bir araç tipi için yanlış profil kullanmaktan kaynaklanan olası sorunları önlemek için yapılır.

**Neden önemli:**

1. **Sürüş güvenliği.** Farklı ulaşım türleri, sürüş sırasında farklı bilgiler ve ayarlar gerektirir. Örneğin, kamyon sürücüleri araçlarının yüksekliği, ağırlığı ve genişliği konusunda sınırlı olabilir, bu nedenle *Kamyon* profili onlara uygun kısıtlamalar ve yönergeler sağlar. Bisikletçiler ve motosikletçiler ise kamyonlar için veri olmadan bisiklet yolları ve rotaları hakkında bilgiye ihtiyaç duyarlar.

2. **Fayda ve Verimlilik.** Navigasyon, belirli bir ulaşım modunun ihtiyaçlarını karşılamak üzere özelleştirilmelidir. Bu, kullanıcıların optimum rotaları bulmak için harcadıkları süreyi azaltmalarına ve gereksiz trafik kısıtlamalarından kaçınmalarına olanak tanır.

3. **Hata önleme.** Seçilen ulaşım modu için belirli bir profil olmadığında *Sürüş* profiline geçmek, sürüş sırasında olası hataları ve yanlış anlaşılmaları önleyerek size minimum gerekli ayarlara ve bilgilere sürekli erişim sağlar.


## Hedef Noktaları {#destination-points}

![Android Auto ekranı](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Önceden ayarlanmış ve eklenmiş [İlgi Çekici Noktaları (POI'ler)](../map/point-layers-on-map.md#points-of-interest-pois), [Favorileri](../personal/favorites.md) veya [İşaretleyicileri](../personal/markers.md) hedef noktası olarak seçebilirsiniz. Ayrıca rota için kaydedilmiş veya indirilmiş bir [İz](../personal/tracks/manage-tracks.md) seçmek, [Ara'yı](../search/index.md) kullanmak veya rota [Geçmişi'nden](../search/search-history.md) bir hedef seçmek veya *Serbest sürüş* yapmak da mümkündür.

1. Haritada belirli bir konumu bitiş noktası olarak istiyorsanız, listeden uygun nokta kategorisini, [POI'ler](#poi-categories), [Favoriler](#favorites) veya [Harita İşaretleyicileri](#map-markers) öğesini seçin.
  
    - Tüm kategoriler, araç multimedya sisteminiz tarafından sağlanan liste öğelerinden daha fazla öğe içeremez. Bu, *Android Auto*'daki listenin eksik olabileceği ve diğer tüm klasörlerin yalnızca cihazınızdaki OsmAnd uygulamasında mevcut olduğu anlamına gelir.
    - [Son değiştirilen](#folder-last-modified) klasörü, eklenme veya değiştirilme tarihine göre sıralanmış son hedeflerin bir listesini içerir.
    - Diğer tüm klasörlerin listesi en son güncellemeye göre sıralanır, yeni klasörler listenin en üstündedir. Sıralarını manuel olarak değiştirmek mümkün değildir.
    - Klasörlerdeki noktaların listesi, en yakın olandan başlayarak onlara olan mesafeye göre sıralanır. Her noktanın bir adı veya koordinatları, şekilli bir simgesi (varsayılan olarak veya OsmAnd uygulamasında sizin tarafınızdan seçilen renk ve simge seti) ve mevcut konumdan ona olan mesafesi vardır.

2. Cihazın belleğinde depolanan son hedeflerden birini bulmak için [Geçmiş](#history) kategorisini seçin.

3. Mevcut arama kategorilerinden bir hedef girmek için [Ara](#search) öğesini seçin.

4. Belirli bir bitiş noktası olmadan bir yolculuk yapmak için **Serbest sürüş** öğesini seçin.

:::note
Sürüş sırasında, seçilen noktalar yaklaştığınızda veya geçtiğinizde [duyurulabilir](#voice-prompts). Sesli bildirimleri ayarlamak için ilgili makaledeki [Sesli komutlar](../navigation/guidance/voice-navigation.md) ayarlarına bakın.
:::


### Geçmiş {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

Geçmiş kategorisinde, bitiş noktaları listesinden bir hedef seçebilirsiniz. En yeni olandan başlayarak en son kullanıma göre sıralanırlar. Bu, sık kullanılan rotalara hızlı erişim için uygun olabilir. Bir hedefi nasıl kullanacağınızı veya sileceğinizi öğrenmek için [Arama Geçmişi](../search/search-history.md) makalesini okuyun.


### POI Kategorileri {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POI'ler (İlgi Çekici Noktalar), haritada kullanıcılar için önemli veya ilgi çekici yerleri veya nesneleri tanımlayan bir nokta türüdür. [OsmAnd ayarlarında](../map/point-layers-on-map.md#poi-types) sağlanan özel simgelerle vurgulanır ve gruplara ayrılır.

*Android Auto*'da bir POI'ye rota oluşturmak için şu adımları izleyin:

1. Mevcut kategoriler listesinden gerekli POI'yi seçin veya [Ara](#search) kullanarak POI'nin adını girin.
2. Bir kategoriye dokunmak, POI'lerin bir listesini içeren aşağıdaki ekranı açar.
3. Listedeki bir öğeye dokunmak navigasyonu açar.
4. OsmAnd rotayı hesaplar ve *Android Auto* ekranında görüntüler. O konuma gitmeye başlamak için **Başlat** düğmesine dokunun.
5. OsmAnd uygulamanızın [ayarlarına](../navigation/guidance/navigation-settings.md) ve aracınıza bağlı olarak, bir hedefe yönlendirmek için [sesli komutlar](#voice-prompts) alabilirsiniz.


### Favoriler {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Favoriler*, OsmAnd'ın haritada bir tür yer imi (not) oluşturmanıza olanak tanıyan işlevlerinden biridir. *Android Auto* kullanırken Favori ekleyemez veya değiştiremezsiniz, yalnızca mevcut olanları kullanabilirsiniz. [Favoriler](../personal/favorites.md#manage-favorites) listesi OsmAnd uygulamasında *Menü → Yerlerim → Favoriler* altında bulunabilir. Bunları navigasyon için kullanmak istiyorsanız, cihazı araç multimedya sisteminize bağlamadan önce gerekli yerleri favorilere ekleyin.

*Android Auto*'da favori bir noktaya rota oluşturmak için aşağıdaki adımları izleyin:

1. Bir klasöre dokunmak, favori klasörlerin bir listesini içeren sonraki ekranı açar.
2. Listedeki bir öğeye dokunmak navigasyonu açar.


### Harita İşaretleyicileri {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Son hedefinizi bir Harita İşaretleyicisi olarak tanımlamak için, cihazınızı sisteme bağlamadan önce OsmAnd uygulamasında gerekli sayıda işaretleyici oluşturmanız gerekir. İşaretleyicilerin *Menü → Harita işaretleyicisi* listesinde mevcut olması gerekir. Bu, [İşaretleyiciler](../personal/markers.md) makalesinde daha ayrıntılı olarak açıklanmıştır.


### İzler {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

Bir hedefe rota oluşturmak için OsmAnd uygulamasında mevcut bir izi seçebilirsiniz. İz önceden [indirilebilir](../personal/tracks/manage-tracks.md#import), [kaydedilmiş](../plugins/trip-recording.md) olarak kullanılabilir veya [Rota planla](../plan-route/create-route.md) bölümünde oluşturulabilir.

*Menü → Yerlerim → [İzler](../personal/tracks/manage-tracks.md)* listesindeki izlerden, araç multimedya sistemine bağlanmadan önce gerekli olanı seçin ve rota ya izin başlangıcına kadar oluşturulacak ya da iz boyunca mevcut yönü gösterecektir.

İzler doğrudan araç ekranında *Android Auto*'da da seçilebilir. Oluşturduğunuz klasörlerde düzenlenirler ve yakın zamanda açılan izlere kolay ve hızlı erişim için özel bir klasör olan [Son değiştirilen](#folder-last-modified) bulunur.


### Ara {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Ara'ya gitmek, son [hedef geçmişi](#history) listesine hızlı erişim sağlar. [Navigasyon menüsü](../navigation/setup/route-navigation.md#navigation-menu) ile benzer şekilde, bir adres, POI'ler veya koordinatlar gibi tüm OsmAnd hedef yöntemleri toplanır.

Rota planlaması için haritada gerekli yeri bulmak için mevcut herhangi bir arama kategorisinden Arama aracını kullanabilirsiniz.

- [Adres](../search/search-address.md) - arama alanına adresi yazmaya başlayın.
- [POI](../search/search-poi.md) ve [Özel POI](../search/search-poi.md) - yakındaki benzer adların listesi ayrıca POI'leri veya kategorilerini de gösterecektir.
- [Koordinat araması](../search/search-address#coordinates-search) - haritadaki noktayı bulmak için koordinatları girin.


### Son Değiştirilen Klasör {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)


Favoriler ve İzler kategorilerinde özel bir *Son Değiştirilen* klasörü bulunur. Bu kategorilerdeki liste, mevcut tüm favorilerinizi veya izlerinizi içerdiğinden çok büyük olabileceğinden, bu klasör en son hedeflerinize kolay ve hızlı erişim için gereklidir.


## Navigasyon Özellikleri {#navigation-features}

*Android Auto*'daki OsmAnd uygulamasının aracınızda rahat navigasyon sağlayan temel özelliklerine ek olarak, deneyiminizi geliştiren ve navigasyonu daha kişiselleştirilmiş, konforlu ve verimli hale getiren bir dizi ek özellik bulunmaktadır.


### Sonraki Dönüş {#next-turn}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

**Sonraki dönüş** widget'ı, [sonraki dönüş manevrasının](../widgets/nav-widgets.md#next-turn) mesafesini ve türünü ve [sokak adını](../widgets/nav-widgets.md#street-name) görüntüler.

### Rota Bilgisi {#route-info}

Rota bilgileri şunlardan oluşur:

- [Tahmini seyahat süresi](../widgets/nav-widgets.md#time-to-destination),
- [Tahmini varış zamanı](../widgets/nav-widgets.md#time-to-destination),
- [Seyahat mesafesi](../widgets/nav-widgets.md#distance-to-destination).

Etkinleştirildiğinde, **[widget ayarı](#eta-next-stop)** (Rota bilgileri) bir sonraki durak ([ara nokta](../navigation/setup/route-navigation.md#intermediate-destinations)) için rota ayrıntılarını gösterecektir.


### Ekran Uyarı Widget'ı {#screen-alert-widget}

Bu bilgi widget'ı, **Yaya geçitleri** ve **Hız Sınırı** gibi uyarı türlerini birleştirir.

- Uyarı türleri, **<Translate android="true" ids="driving_region"/>**'a bağlı olarak farklı görünümlere sahiptir ve *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* içinde yapılandırılabilir.
- *Android Auto*'da uyarıların görüntülenmesini ayarlamak mümkün değildir, navigasyonu başlatmadan ve cihazınızı araca bağlamadan önce uygulamada widget'ı yapılandırmanız gerekir.
- Uyarı türlerinin ayrıntılı açıklaması için [bu makaleye](../widgets/nav-widgets.md#alert-types) bakın.
- Mevcut profiller için ekran uyarılarını ayarlamak için [Navigasyon ayarları](../navigation/guidance/navigation-settings.md#screen-alerts) makalesine bakın.


### Hız Göstergesi {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

**Hız göstergesi** widget'ı, GPS verilerini kullanarak *mevcut hızı* ve [OSM veritabanından](https://wiki.openstreetmap.org/wiki/Key:maxspeed) ve [OsmAnd ayarlarından](../navigation/guidance/voice-navigation.md#speed-limit) *hız sınırını* aracın multimedya sistemi ekranında görüntüleyen entegre bir arayüz öğesidir.

- **Hız göstergesi widget'ı** [*profil bağımlıdır*](../personal/profiles.md), bu nedenle bir profil için ayarları değiştirirseniz, bunlar başka bir profile uygulanmaz.
- Doğrudan *Android Auto*'da **Hız göstergesi widget'ının** görüntülenmesini özelleştirme seçeneği yoktur, navigasyonu başlatmadan ve cihazınızı araca bağlamadan önce OsmAnd uygulamasında yapılandırmanız gerekir.
- *Hız göstergesi* widget'ını ekrana nasıl ekleyeceğiniz ve yapılandıracağınız hakkında daha fazla bilgi için lütfen [Bilgi widget'ları makalesini](../widgets/info-widgets.md#speedometer) okuyun.


### Harita Görünümü (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

OsmAnd uygulaması, rotanızı ve navigasyonunuzu görüntülemek için *Android Auto* ekranında 3D harita görünümünü kullanmanıza olanak tanır.

- Bu özelliği etkinleştirmek için [Harita oluşturma Sürüm 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) öğesini seçmeniz gerekir.
- Ana *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* öğesini doğrudan OsmAnd uygulamasında açın.
- Ayarları yapılandırdıktan sonra, hedefler için kategori listesi kapatıldığında **3D düğmesi** *Android Auto* ekranında görüntülenecektir.
- Bu düğmeye dokunarak 3D / 2D harita modları arasında geçiş yapabilirsiniz.


## Ayarlar {#settings}

### Sesli Komutlar {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Sesli komutlar, *Android Auto* için navigasyon yaparken OsmAnd'ın en kullanışlı özelliklerinden biridir, size gerçek zamanlı rehberlik sağlar ve sürücünün yola odaklanmasını sağlar. Sesli komutlar, dönüşler, yönler ve diğer navigasyon talimatları hakkında net talimatlar sağlayarak navigasyon sisteminin daha güvenli ve daha rahat kullanılmasını sağlar.

Seçilen profile göre [sesli komutları](../navigation/guidance/voice-navigation.md) yapılandırmak için, cihazınızdaki OsmAnd uygulamasında bir rota başlatmadan önce bunu yapmanız gerekir. *Android Auto*'da, tüm seçilen sesli komutları aynı anda kapatma veya açma ayarı mevcuttur (*Ayarlar düğmesi → Sesli komutlar (açık/kapalı)*).


### ETA Sonraki Durak {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

OsmAnd uygulamasında, navigasyon rotası için bir veya daha fazla [ara nokta](../navigation/setup/route-navigation.md#intermediate-destinations) seçebilirsiniz.

Bir ara nokta (sonraki durak) için [**Rota bilgisi**](#next-turn) öğesini etkinleştirmek veya devre dışı bırakmak için *Android Auto (OsmAnd)→ Ayarlar düğmesi → Sonraki durak için rota ayrıntılarını göster → Açık/Kapalı* öğesine gidin. Bu seçenek, [*Rota bilgisi* widget'ında](#route-info) bir sonraki durağa olan süreyi ve mesafeyi görüntüler.


### Harita Modu {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* ve OsmAnd, haritayı aydınlatma koşullarına uyacak şekilde ayarlama yeteneği sunar. *Gündüz harita modunda*, renk şeması parlak ve kontrastlı kalır, bu da parlak güneş ışığında bile okunmasını kolaylaştırır. *Gece modunda*, haritalar kararır, bu da sürücünün karanlıkta daha iyi gezinmesine yardımcı olur.

OsmAnd'ın [harita modu](../map/vector-maps.md#map-mode) seçenekleri vardır, ancak uygulamayı *Android Auto*'da kullandığınızda bu seçenekler göz ardı edilir. Bunun yerine, *Android Auto* sistem ayarlarında haritalar için seçtiğiniz mod kullanılır.

- Harita görüntüsünü değiştirmeden tutmak için Gündüz modunu veya Gece modunu seçin.
- Harita görüntüleme modunun günün saatine bağlı olarak değişmesini istiyorsanız, Otomatik modu seçin.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Bölünmüş Ekran {#split-screen}

![Android Auto ekranı](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

OsmAnd uygulaması, araç multimedya sistemi ekranında müzik, mesaj veya diğer bildirim uygulamalarıyla eş zamanlı olarak *Android Auto*'da açılabilir ve navigasyon için kullanılabilir. Bölünmüş ekran görüntüsünü *Android Auto*'ya bağlı bir telefonda veya araç sisteminizdeki ekranda ayarlama.

1. Ana ekrandan Uygulamalar'a dokunun.
2. Ayarlar'a dokunun.
3. Çoklu pencereyi bulun ve anahtarı seçin.
4. Ana ekrana geri dönün.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


Android Auto ayarlarında, görev çubuğunun konumunu ve ana ekranın düzenini değiştirebilirsiniz:

- **Görev çubuğu konumu:**  
  *Android Auto ayarları → Uygulamalar için hızlı kontrolleri göster* öğesine gidin ve anahtarı kapatın. Bu, görev çubuğunu alttan ekranın yanına taşıyacaktır.

- **Ana ekran düzeni:**  
  Düzeni sürücü koltuğu konumuna göre ayarlamak için *Android Auto ayarları → Düzeni değiştir → Sürücü koltuğu konumunu değiştir* öğesine gidin.


## Sık Karşılaşılan Sorunlar ve Çözümler {#common-issues-and-solutions}

1. [Harita yönlendirme sorunu.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Ses kontrol sorunu.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Konum gecikmeleri (ANR çökmeleri).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Bağlantı ekranıyla ilgili sıkça sorulan sorular:
    - *Android Auto'ya bağlıyken uygulamayı telefonumdan neden kontrol edemiyorum?*  
        Güvenlik nedenleriyle, Android Auto'ya bağlıyken telefonunuzdaki OsmAnd uygulama ekranı kilitlenir. Uygulama ile yalnızca araç ekranı aracılığıyla etkileşim kurabilirsiniz.
    - *Kilitli ekranı devre dışı bırakıp uygulamayı telefonumda kullanabilir miyim?*  
        Hayır, Android Auto, sürüş sırasında dikkat dağıtıcı unsurları önlemek için bu kısıtlamayı uygular.
    - *Telefonum ve araç ekranım bağlantısı kesilmiş gibi görünüyorsa ne yapmalıyım?*  
        Cihazınızın USB veya Bluetooth aracılığıyla düzgün şekilde bağlandığından emin olun.  
        Bağlantı kararsızsa aracınızın bilgi-eğlence sistemini ve OsmAnd uygulamasını yeniden başlatın.