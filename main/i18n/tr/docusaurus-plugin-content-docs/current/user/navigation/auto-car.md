---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
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

[**Android Auto**](https://www.android.com/auto), Google tarafından geliştirilen ve kullanıcıların Android cihazlarını uyumlu araç multimedya sistemlerine bağlamalarına olanak tanıyan bir yazılımdır. *Android Auto*, sürüş sırasında güvenli kullanım için OsmAnd uygulamasının uyarlanmış ve optimize edilmiş bir sürümünü sunarak uygulamanın navigasyon işlevlerine erişimi daha kolay ve güvenli hale getirir.  

**Android Auto** işlevi yalnızca [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023) adresinde bulunan OsmAnd uygulaması kullanılırken desteklenir.

> **NOT**: *Android Auto, OsmAnd mobil uygulamasının doğrudan bir kopyası değildir. Güvenli sürüş sağlamak için temel navigasyon işlevlerine odaklanan basitleştirilmiş bir arayüze sahiptir. Bazı gelişmiş özellikler platform sınırlamaları nedeniyle desteklenmez.*


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

*Android Auto*, araç multimedya sistemi ekranına uyarlanmış OsmAnd arayüzünü görüntüler. Harita ile etkileşim aşağıdaki düğmelerle sınırlıdır:  

- [OsmAnd menüsü](#destination-points). Bir rota bitiş noktası veya serbest sürüş atamak için mevcut seçeneklerin bir listesini içerir.
- [Ayarlar](#voice-prompts). Bu düğme şunlardan sorumludur: 1. seçilen rotada gezinirken *sesli komutları* açma/kapatma erişimi; 2. bir sonraki durak için rota ayrıntılarını (süre ve mesafe) gösterme.
- [Arama](#search). Düğmeye dokunmak, arama işlevlerine erişim sağlayan bir ekran açar.
- [Konumum](../widgets/map-buttons.md#my-location-and-zoom). Haritanın görünür kısmını, mevcut konumunuzun ekranın ortasında olacak şekilde hareket ettirir.
- [Yakınlaştırma](../widgets/map-buttons.md#my-location-and-zoom). Haritanın görünür kısmını yakınlaştırmanıza ve uzaklaştırmanıza olanak tanır.
- [Pusula](../widgets/map-buttons.md#compass). Cihazınızın ekranında dört mevcut harita yönlendirme modundan hangisinin seçildiğini gösterir.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

### Navigasyonu Başlat {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

OsmAnd'ın *Android Auto*'da çalışabilmesi için Android cihazınızı araç multimedya sisteminize [bağlamanız](#connection-screen) gerekir. Android işletim sistemi 6.0 veya daha yüksek bir sürüme güncellenmelidir.

- Cihazınızı nasıl bağlayacağınızı ve kuracağınızı öğrenmek için [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) web sitelerini ziyaret edin.  

- Tüm araçlar cihaz bağlantı özelliğini desteklemez. *Android Auto* için [uyumluluk listesini](https://www.android.com/auto/compatibility/#compatibility-vehicles) kontrol edin.  

- Uygulamanın **ücretli sürümünü** satın almanız veya bir [abonelik](../purchases/android.md#free-and-paid-features) almanız gerekir. Mevcut aboneliğinizi buradan kontrol edin: *Menü → Ayarlar → Satın Almalar*.  

- *Android Auto*, navigasyon için Profiller listesindeki ilk [OsmAnd Sürüş profili](#profile-first)ni kullanır. Tercih edilen profili ilk sıraya koyun, ancak *Haritaya Göz At* profili hariç, *Android Auto* tarafından okunmaz. Bunu yapmak için OsmAnd *Menü → Ayarlar → Uygulama profilleri → Profil listesini düzenle* → [**Sürüş**](#profile-first) profilinizi ilk sıraya veya *Haritaya Göz At* profilinden sonra taşıyın.  

- *Android Auto*'nun mobil veri de dahil olmak üzere yoğun veri kullanan bir uygulama olduğunu ve sistemin kalitesinin bağlantınızın kalitesine ve İnternet erişim hızınıza bağlı olabileceğini unutmamak önemlidir.

### İlk Profil {#profile-first}

Araç ekranındaki *Android Auto*'da doğrudan bir profil seçemezsiniz.  
Cihazınızda zaten *Sürüş*, *Kamyon*, *Araba*, *Motosiklet*, *Moped* gibi araç tipine karşılık gelen bir profil seçiliyse, **uygulama Android Auto'ya bağlandığınızda** uygun profili otomatik olarak etkinleştirecektir. Örneğin, *Kamyon* profiliniz seçiliyse ve cihazınız **Android Auto**'ya bağlanırsa, uygulama bu profili etkinleştirecektir.

Cihazınızda araç tipinize karşılık gelen herhangi bir *Sürüş* profili seçili değilse, OsmAnd otomatik olarak *Sürüş* profiline geçecektir. Bu, temel navigasyon sağlamak ve belirli bir araç tipi için yanlış profilin kullanılmasından kaynaklanan olası sorunları önlemek için yapılır.

**Neden önemli:**

1. **Sürüş güvenliği.** Farklı ulaşım türleri, sürüş sırasında farklı bilgi ve ayarlamalar gerektirir. Örneğin, kamyon sürücüleri araçlarının yüksekliği, ağırlığı ve genişliği konusunda sınırlı olabilir, bu nedenle *Kamyon* profili onlara uygun kısıtlamaları ve yönergeleri sağlar. Bisikletçiler ve motosikletçiler ise kamyonlar için veri olmaksızın bisiklet yolları ve rotaları hakkında bilgiye ihtiyaç duyarlar.

2. **Kullanışlılık ve Verimlilik.** Navigasyon, belirli bir ulaşım modunun ihtiyaçlarını karşılamak üzere özelleştirilmelidir. Bu, kullanıcıların en uygun rotaları bulmak ve gereksiz trafik kısıtlamalarından kaçınmak için harcadıkları süreyi azaltmalarına olanak tanır.

3. **Hata önleme.** Seçilen ulaşım modu için belirli bir profil olmadığında *Sürüş* profiline geçiş, sürüş sırasında olası hataları ve yanlış anlaşılmaları önleyerek size minimum gerekli ayarlara ve bilgilere sürekli erişim sağlar.  


## Hedef Noktaları {#destination-points}

![Android Auto ekranı](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Önceden ayarlanmış ve eklenmiş [İlgi Çekici Noktaları (POI'ler)](../map/point-layers-on-map.md#points-of-interest-pois), [Favorileri](../personal/favorites.md) veya [İşaretleyicileri](../personal/markers.md) hedef noktası olarak seçebilirsiniz. Ayrıca rota için kaydedilmiş veya indirilmiş bir [İz (Track)](../personal/tracks/manage-tracks.md) seçmek, [Arama](../search/index.md) kullanmak veya rota [Geçmişi](../search/search-history.md)nden bir hedef seçmek veya *Serbest sürüş* yapmak da mümkündür.

1. Haritada belirli bir konumu bitiş noktası olarak istiyorsanız, listeden uygun nokta kategorisini seçin: [POI'ler](#poi-categories), [Favoriler](#favorites) veya [Harita İşaretleyicileri](#map-markers).  
  
    - Tüm kategoriler, araç multimedya sisteminiz tarafından sağlanan liste öğelerinden daha fazla öğe içeremez. Bu, *Android Auto*'daki listenin eksik olabileceği ve diğer tüm klasörlerin yalnızca cihazınızdaki OsmAnd uygulamasında mevcut olduğu anlamına gelir.
    - [Son değiştirilen](#folder-last-modified) klasör, eklenme veya değiştirilme tarihine göre sıralanmış son hedeflerin bir listesini içerir.
    - Diğer tüm klasörlerin listesi en son güncellemeye göre sıralanır, yeni klasörler listenin en üstündedir. Sıralamalarını manuel olarak değiştirmek mümkün değildir.
    - Klasörlerdeki noktaların listesi, en yakından başlayarak onlara olan mesafeye göre sıralanır. Her noktanın bir adı veya koordinatları, şekilli bir simgesi (varsayılan olarak veya OsmAnd uygulamasında sizin tarafınızdan ayarlanan renk ve simge) ve mevcut konumdan ona olan mesafesi vardır.  

2. Cihazın belleğinde depolanan son hedeflerden birini bulmak için [Geçmiş](#history) kategorisini seçin.  

3. Mevcut arama kategorilerinden bir hedef girmek için [Arama](#search) seçeneğini seçin.  

4. Belirtilen bir bitiş noktası olmadan bir yolculuk yapmak için **Serbest sürüş** seçeneğini seçin.

:::not
Sürüş sırasında, seçilen noktalar yaklaştığınızda veya yanlarından geçtiğinizde [duyurulabilir](#voice-prompts). Sesli bildirimleri ayarlamak için ilgili makaledeki [Sesli komutlar](../navigation/guidance/voice-navigation.md) ayarlarına bakın.
:::  


### Geçmiş {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

Geçmiş kategorisinde, bitiş noktaları listesinden bir hedef seçebilirsiniz. En yeniden başlayarak en son kullanıma göre sıralanırlar. Bu, sık kullanılan rotalara hızlı erişim için uygun olabilir. Bir hedefi nasıl kullanacağınızı veya sileceğinizi öğrenmek için [Arama Geçmişi](../search/search-history.md) makalesini okuyun.  


### POI Kategorileri {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POI'ler (İlgi Çekici Noktalar), harita üzerinde kullanıcılar için önemli veya ilgi çekici yerleri veya nesneleri tanımlayan bir nokta türüdür. [OsmAnd ayarlarında](../map/point-layers-on-map.md#poi-types) sağlanan özel simgelerle vurgulanır ve gruplara ayrılır.  

*Android Auto*'da bir POI'ye rota oluşturmak için şu adımları izleyin:

1. Mevcut kategoriler listesinden gerekli POI'yi seçin veya [Arama](#search) kullanarak POI'nin adını girin.
2. Bir kategoriye dokunmak, POI'lerin listesini içeren aşağıdaki ekranı açar.
3. Listedeki bir öğeye dokunmak navigasyon ekranını açar.
4. OsmAnd rotayı hesaplar ve *Android Auto* ekranında görüntüler. O konuma gitmeye başlamak için **Başlat** düğmesine dokunun.
5. OsmAnd uygulamanızın [ayarlarına](../navigation/guidance/navigation-settings.md) ve aracınıza bağlı olarak, bir hedefe yönlendirmek için [sesli komutlar](#voice-prompts) alabilirsiniz.  


### Favoriler {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

*Favoriler*, OsmAnd'ın harita üzerinde bir tür yer imi (not) oluşturmanıza olanak tanıyan işlevlerinden biridir. *Android Auto* kullanırken Favori ekleyemez veya değiştiremezsiniz, yalnızca mevcut olanları kullanabilirsiniz. [Favoriler](../personal/favorites.md#manage-favorites) listesi OsmAnd uygulamasında *Menü → Yerlerim → Favoriler* altında bulunabilir. Navigasyon için kullanmak istiyorsanız, cihazı araç multimedya sisteminize bağlamadan önce gerekli yerleri favorilere ekleyin.  

*Android Auto*'da favori bir noktaya rota oluşturmak için aşağıdaki adımları izleyin:  

1. Bir klasöre dokunmak, favori klasörlerin listesini içeren sonraki ekranı açar.
2. Listedeki bir öğeye dokunmak navigasyonu açar.


### Harita İşaretleyicileri {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Son varış noktanızı bir Harita İşaretleyicisi olarak tanımlamak için, cihazınızı sisteme bağlamadan önce OsmAnd uygulamasında gerekli sayıda işaretleyici oluşturmanız gerekir. İşaretleyicilerin *Menü → Harita işaretleyicisi* listesinde mevcut olması gerekir. Bu, [İşaretleyiciler](../personal/markers.md) makalesinde daha ayrıntılı olarak açıklanmıştır.


### İzler {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Bir hedefe rota oluşturmak için, OsmAnd uygulamasında mevcut olan bir izi seçebilirsiniz. İz önceden [indirilebilir](../personal/tracks/manage-tracks.md#import), [kaydedilmiş](../plugins/trip-recording.md) olarak kullanılabilir veya [Rota planla](../plan-route/create-route.md) bölümünde oluşturulabilir.  

*Menü → Yerlerim → [İzler](../personal/tracks/manage-tracks.md)* listesinden, araç multimedya sistemine bağlanmadan önce gerekli olanı seçin; rota ya iz başlangıcına kadar oluşturulacak ya da iz boyunca mevcut yönü gösterecektir.

İzler, *Android Auto*'da doğrudan araç ekranında da seçilebilir. Oluşturduğunuz klasörlerde düzenlenirler ve son açılan izlere kolay ve hızlı erişim için özel bir klasör olan [Son değiştirilenler](#folder-last-modified) bulunur.  


### Arama {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Aramaya gitmek, son [hedef geçmişi](#history) listesine hızlı erişim sağlar. Benzer şekilde, adres, POI'ler veya koordinatlar gibi tüm OsmAnd hedef yöntemlerinin toplandığı [Navigasyon menüsü](../navigation/setup/route-navigation.md#navigation-menu) ile.

Rota planlama için haritada gerekli yeri bulmak için Arama aracını kullanabilirsiniz.

- [Adres](../search/search-address.md) - arama alanına adresi yazmaya başlayın.
- [POI](../search/search-poi.md) ve [Özel POI](../search/search-poi.md) - yakındaki benzer adların listesi POI'leri veya kategorilerini de gösterecektir.
- [Koordinat araması](../search/search-address#coordinates-search) - haritadaki noktayı bulmak için koordinatları girin.  


### Son Değiştirilen Klasör {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Favoriler ve İzler kategorilerinde özel bir *Son Değiştirilenler* klasörü bulunur. Bu kategorilerdeki liste, mevcut tüm favorilerinizi veya izlerinizi içerdiğinden çok büyük olabileceğinden, bu klasör en son hedeflerinize kolay ve hızlı erişim için gereklidir.


## Navigasyon Özellikleri {#navigation-features}

*Android Auto*'daki OsmAnd uygulamasının aracınızda rahat navigasyon sağlayan temel özelliklerine ek olarak, deneyiminizi geliştiren ve navigasyonu daha kişiselleştirilmiş, konforlu ve verimli hale getiren bir dizi ek özellik bulunmaktadır.  


### Sonraki Dönüş ve Rota Bilgisi {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

**Sonraki dönüş** pencere öğesi, [sonraki dönüş manevrasının](../widgets/nav-widgets.md#next-turn) mesafesini ve türünü ve [sokak adını](../widgets/nav-widgets.md#street-name) görüntüler.

Rota bilgileri şunlardan oluşur:

- [tahmini seyahat süresi](../widgets/nav-widgets.md#time-to-destination),
- [tahmini varış süresi](../widgets/nav-widgets.md#time-to-destination),
- [seyahat mesafesi](../widgets/nav-widgets.md#distance-to-destination).

Etkinleştirildiğinde, [pencere öğesi ayarı](#eta-next-stop) (Rota bilgileri) bir sonraki durak için rota ayrıntılarını ([ara nokta](../navigation/setup/route-navigation.md#intermediate-destinations)) gösterecektir.


### Ekran Uyarı Pencere Öğesi {#screen-alert-widget}

Bu bilgi pencere öğesi, **Yaya geçitleri** ve **Hız Sınırı** gibi uyarı türlerini birleştirir.

- Uyarı türleri, **<Translate android="true" ids="driving_region"/>**'a bağlı olarak farklı görünüme sahiptir ve *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* içinde yapılandırılabilir.
- *Android Auto*'da uyarıların görüntülenmesini ayarlamak mümkün değildir, navigasyonu başlatmadan ve cihazınızı araca bağlamadan önce uygulamada pencere öğesini yapılandırmanız gerekir.
- Uyarı türlerinin ayrıntılı açıklaması için [bu makaleye](../widgets/nav-widgets.md#alert-types) bakın.
- Mevcut profiller için ekran uyarılarını ayarlamak için [Navigasyon ayarları](../navigation/guidance/navigation-settings.md#screen-alerts) makalesine bakın.  


### Hız Göstergesi {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

**Hız Göstergesi** pencere öğesi, GPS verilerini kullanarak *mevcut hızı* ve [OSM veritabanından](https://wiki.openstreetmap.org/wiki/Key:maxspeed) ve [OsmAnd ayarlarından](../navigation/guidance/voice-navigation.md#speed-limit) *hız sınırını* aracın multimedya sistemi ekranında görüntüleyen entegre bir arayüz öğesidir.

- **Hız Göstergesi pencere öğesi** [*profile bağımlıdır*](../personal/profiles.md), bu nedenle bir profil için ayarları değiştirirseniz, diğerine uygulanmaz.
- **Hız Göstergesi pencere öğesinin** görüntülenmesini doğrudan *Android Auto*'da özelleştirme seçeneği yoktur, navigasyonu başlatmadan ve cihazınızı araca bağlamadan önce OsmAnd uygulamasında yapılandırmanız gerekir.
- *Hız Göstergesi* pencere öğesini ekrana nasıl ekleyeceğiniz ve yapılandıracağınız hakkında daha fazla bilgi için lütfen [Bilgi pencere öğeleri makalesini](../widgets/info-widgets.md#speedometer) okuyun.


### Harita Görünümü (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

OsmAnd uygulaması, rotanızı ve navigasyonunuzu görüntülemek için *Android Auto* ekranında 3D harita görünümünü kullanmanıza olanak tanır.

- Bu özelliği etkinleştirmek için [Harita Oluşturma Sürüm 2'yi (OpenGL)](../personal/global-settings.md#map-rendering-engine) seçmeniz gerekir.
- Doğrudan OsmAnd uygulamasında ana *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* öğesini açın.
- Ayarları yapılandırdıktan sonra, hedefler için kategori listesi kapatıldığında *Android Auto* ekranında **3D düğmesi** görüntülenecektir.
- Bu düğmeye dokunarak 3D / 2D harita modları arasında geçiş yapabilirsiniz.


### Sesli Komutlar {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Sesli komutlar, *Android Auto* için gezinirken OsmAnd'ın en kullanışlı özelliklerinden biridir, size gerçek zamanlı rehberlik sağlar ve sürücünün yola odaklanmasını sağlar. Sesli komutlar, dönüşler, yönler ve diğer navigasyon talimatları hakkında net talimatlar sağlayarak navigasyon sisteminin daha güvenli ve konforlu bir şekilde kullanılmasını sağlar.  

Seçilen profile göre [sesli komutları](../navigation/guidance/voice-navigation.md) yapılandırmak için, cihazınızdaki OsmAnd uygulamasında bir rotaya başlamadan önce bunu yapmanız gerekir. *Android Auto*'da, tüm seçilen sesli komutları aynı anda kapatma veya açma ayarı mevcuttur (*Ayarlar düğmesi → Sesli komutlar (açık/kapalı)*).  


### ETA Sonraki Durak {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

OsmAnd uygulamasında, navigasyon rotası için bir veya daha fazla [ara nokta](../navigation/setup/route-navigation.md#intermediate-destinations) seçebilirsiniz.

Bir ara nokta (sonraki durak) için [**Rota bilgisi**](#next-turn--route-info) özelliğini etkinleştirmek veya devre dışı bırakmak için *Android Auto (OsmAnd)→ Ayarlar düğmesi → Sonraki durak için rota ayrıntılarını göster → Açık/Kapalı* yolunu izleyin. Bu seçenek, [*Rota bilgisi* pencere öğesinde](#next-turn--route-info) sonraki durağa olan süreyi ve mesafeyi görüntüler.


### Harita Modu {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* ve OsmAnd, haritayı aydınlatma koşullarına uyacak şekilde ayarlama yeteneği sunar. *Gündüz harita modunda*, renk şeması parlak ve kontrastlı kalır, bu da parlak güneş ışığında bile okunmasını kolaylaştırır. *Gece modunda*, haritalar daha koyu hale gelir, bu da sürücünün karanlıkta daha iyi gezinmesine yardımcı olur.  

OsmAnd'ın [harita modu](../map/vector-maps.md#map-mode) seçenekleri vardır, ancak uygulamayı *Android Auto*'da kullandığınızda bu seçenekler göz ardı edilir. Bunun yerine, *Android Auto* sistem ayarlarında haritalar için seçtiğiniz mod kullanılır.

- Harita ekranının değişmeden kalması için Gündüz modu veya Gece modu seçin.
- Harita ekran modunun günün saatine göre değişmesini istiyorsanız, Otomatik modu seçin.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Bölünmüş Ekran {#split-screen}

![Android Auto ekranı](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

OsmAnd uygulaması, *Android Auto*'da araç multimedya sistemi ekranında müzik, mesaj veya diğer bildirim uygulamalarıyla eş zamanlı olarak açılabilir ve navigasyon için kullanılabilir. *Android Auto*'ya bağlı bir telefonda veya aracınızdaki sistem ekranında bölünmüş ekranı ayarlama.  

1. Ana ekrandan Uygulamalar'a dokunun.
2. Ayarlar'a dokunun.
3. Çoklu pencereyi bulun ve anahtarı seçin.
4. Ana ekrana geri dönün.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


Android Auto ayarlarında, görev çubuğunun konumunu ve ana ekranın düzenini değiştirebilirsiniz:

- **Görev çubuğu konumu:**  
  *Android Auto ayarları → Uygulamalar için hızlı kontrolleri göster* bölümüne gidin ve anahtarı kapatın. Bu, görev çubuğunu ekranın altından yanına taşıyacaktır.

- **Ana ekran düzeni:**  
  Sürücü koltuğu konumuna göre düzeni ayarlamak için *Android Auto ayarları → Düzeni değiştir → Sürücü koltuğu konumunu değiştir* bölümüne gidin.


## Sık Karşılaşılan Sorunlar ve Çözümleri {#common-issues-and-solutions}

1. [Harita yönlendirme sorunu.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Ses kontrol sorunu.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Konum gecikmeleri (ANR çökmeleri).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Bağlantı ekranıyla ilgili sıkça sorulan sorular:
    - *Android Auto'ya bağlıyken neden uygulamayı telefonumdan kontrol edemiyorum?*  
        Güvenlik nedenleriyle, Android Auto'ya bağlıyken telefonunuzdaki OsmAnd uygulama ekranı kilitlenir. Uygulamayla yalnızca araç ekranı aracılığıyla etkileşim kurabilirsiniz.
    - *Kilitli ekranı devre dışı bırakıp uygulamayı telefonumda kullanabilir miyim?*  
        Hayır, Android Auto, sürüş sırasında dikkat dağıtıcı unsurları önlemek için bu kısıtlamayı uygular.
    - *Telefonum ve araç ekranım bağlantısız görünüyorsa ne yapmalıyım?*  
        Cihazınızın USB veya Bluetooth aracılığıyla doğru şekilde bağlandığından emin olun.  
        Bağlantı kararsızsa aracınızın bilgi-eğlence sistemini ve OsmAnd uygulamasını yeniden başlatın.


> *Son güncelleme: Mart 2025*