---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
android: false
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



## Genel Bakış {#overview}

Araç kullanırken aynı anda telefon veya tablet kullanmak, güvenlik nedeniyle genellikle yasalarca yasaklanmıştır. [***CarPlay***](https://www.apple.com/ios/carplay/), OsmAnd uygulamasının sürüş sırasında güvenli kullanım için uyarlanmış ve optimize edilmiş bir sürümünü sağlayan, uygulamanın navigasyon işlevlerine erişimi daha kolay ve güvenli hale getiren bir yazılımdır.

Araç ekranınızda *CarPlay* kullanmak için şu adımları izleyin:

1. *CarPlay* tüm ülkelerde mevcut değildir. [Ülkenizde veya bölgenizde](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) desteklendiğinden ve *CarPlay*'in [araç modelinizde](https://www.apple.com/ios/carplay/available-models/) desteklendiğinden emin olun.
2. Cihazınızı bir USB bağlantı noktası kullanarak veya Wi-Fi veya Bluetooth ile kablosuz olarak araç multimedya sisteminize [bağlayın](https://support.apple.com/en-gb/HT203412). İlk kez bağlanırken, cihazınızda *CarPlay* kullanmak için izin vermeniz gerekebilir.
3. Bağlandıktan sonra, *CarPlay arayüzü* tüm mevcut uygulamalarla birlikte araç ekranınızda otomatik olarak görünecektir. *CarPlay ana ekranı* görünmezse, araç ekranındaki *CarPlay logosunu* seçin.

#### CarPlay Arayüzü {#carplay-interface}

*CarPlay*, OsmAnd mobil uygulamasının **doğrudan bir kopyası değildir**. Güvenli sürüş sağlamak için temel navigasyon işlevlerine odaklanan basitleştirilmiş bir arayüze sahiptir. Bazı gelişmiş özellikler platform sınırlamaları nedeniyle desteklenmemektedir.

### Bağlantı Ekranı {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Cihazınız *CarPlay*'e bağlıyken, uygulama ekranındaki harita kilitlenir. Bu, navigasyonun yalnızca araç ekranından kontrol edilmesini sağlayarak sürüş sırasında dikkat dağınıklığını en aza indiren kasıtlı bir güvenlik özelliğidir. Bağlantı ekranıyla ilgili [sıkça sorulan soruları](#common-issues-and-solutions) kontrol edin.

### CarPlay'de Konum Pozisyonu {#location-position-in-carplay}

*CarPlay* için OsmAnd uygulaması, rota ve diğer önemli harita ayrıntılarıyla çakışmayı önlemek için mevcut konum göstergesinin ekrandaki konumunu ayarlamanıza olanak tanır.

**Gösterge konumunu değiştirme:**

- *Menü → Ekranı Yapılandır → Diğer → [Ekrandaki Konum Pozisyonu](../widgets/configure-screen.md#display-position-location-position-on-screen)*'na gidin.
- Tercih ettiğiniz yerleşimi seçin:
    - **Otomatik (varsayılan)**. Uygulama, navigasyon modu veya serbest hareket için göstergenin konumunu otomatik olarak kaydırır.
    - **Merkez**. Gösterge ekranın ortasına yerleştirilir, standart navigasyon için uygundur.
    - **Alt**. Gösterge ekranın altına daha yakın konumlandırılır, çevredeki nesneleri ve karmaşık kavşakları gözlemlemeyi kolaylaştırır.

### Harita ile Etkileşim {#interaction-with-the-map}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay*, araç multimedya sistemi ekranına uyarlanmış OsmAnd arayüzünü görüntüler. Harita ile etkileşim şunlarla sınırlıdır:

- [Konumum](../widgets/map-buttons.md#my-location-and-zoom). Haritanın görünür kısmını, mevcut konumunuzun ekranın merkezinde olacağı şekilde hareket ettirir.
- [Yakınlaştırma](../widgets/map-buttons.md#my-location-and-zoom). Haritanın görünür kısmını yakınlaştırmanıza ve uzaklaştırmanıza olanak tanır.

## Gerekli Kurulum Parametreleri {#required-setup-parameters}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- İlk olarak, *CarPlay*'e bağlanırken kullanılacak profili seçmeniz ve yapılandırmanız gerekir. Bir profilin nasıl yapılandırılacağını [Profiller (Ayarlar)](../personal/profiles) makalesinde okuyabilirsiniz.
    - *CarPlay* kullanmak için uygun bir profil *Sürüş* olabilir ve rota türü [Araç rotası](../navigation/routing/car-based-routing.md) olabilir.
    - OsmAnd, *CarPlay*'e bağlanmak için mevcut profillerin listesine hızlı erişim için ayrı bir [CarPlay Profili](#carplay-profile) öğesine sahiptir.
- OsmAnd'ın çalışması için [iOS cihazınızı](#overview) araç multimedya sistemine bağlamanız gerekir. Cihazınızı nasıl bağlayacağınız ve kuracağınız hakkında daha fazla bilgi edinmek için [**CarPlay**](https://support.apple.com/en-us/HT205634) web sitesini ziyaret edebilirsiniz.
- [OsmAnd ücretli veya abonelik](../purchases/ios#free-and-paid-features) sürümüne sahip olmanız gerekir. Bunu *Menü → Ayarlar → Satın Almalar* bölümünden kontrol edin.
- Bağlandıktan sonra, bir hedef belirleyebilir ve *CarPlay*'de OsmAnd navigasyonunu başlatabilirsiniz.

:::note
*CarPlay*'de OsmAnd'ı kullanmak için İnternet bağlantısı gerekebilir. Cihazınızın İnternet erişimi sınırlıysa, [*önceden yükleyebilir veya rotalar oluşturabilir*](../personal/tracks/manage-tracks.md) ve bunları İnternet olmadan kullanabilirsiniz.
:::

### Navigasyonu Başlat {#start-navigation}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-start(1).png)

OsmAnd uygulamasının iOS sürümünü *CarPlay*'de kullanmak için, uygulamanın [ücretli sürümünü satın almanız veya abone olmanız](../purchases/ios#free-and-paid-features) gerekir.

1. Bir rota oluşturmak için, *CarPlay ekranında* veya [OsmAnd uygulamasında](../navigation/setup/route-navigation.md) [rota bitiş noktasını](#select-a-route-endpoint) seçmeniz gerekir.
2. Yol üzerindeki sorunlar hakkında talimatları veya mesajları dinlemek için [sesli komutları](#voice-prompts) kullanabilirsiniz.
3. Bir konum seçtikten sonra, rotayı takip etmek için **Başlat**'a basın.
4. Siz sürerken, araç ekranı mevcut konumunuz, sürüş talimatları, bir sonraki dönüşe olan mesafe, hatlar, varış zamanı ve hedefinize olan mesafe hakkında OsmAnd bilgilerini gösterecektir.
    ![CarPlay ekranı](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Rotanızı değiştirmek veya farklı bir konum seçmek isterseniz, ekrandaki uygun düğmeye basabilirsiniz.
6. Rotanızı tamamladıktan sonra, cihazı araç multimedya sisteminizden ayırarak *CarPlay*'i devre dışı bırakabilirsiniz.

:::note
**Rota bitiş noktası** seçimi için tüm kategoriler, *[Geçmiş](#history), [İlgi Çekici Noktalar](#poi-categories), [İşaretleyiciler](#map-markers), [Arama](#search), [Favoriler](#favorites) ve [İzler](#tracks)*, araç multimedya sisteminizin sağladığından daha fazla liste öğesi içeremez. Tipik olarak, çoğu araçta listeler dinamik olarak 12 veya 24 öğe ile sınırlıdır. Bu, *CarPlay*'deki listenin tam olmayabileceği anlamına gelir. Toplam öğe sayısı ve görüntülenen gerçek öğe sayısı klasör adının altında belirtilmiştir.
:::

### CarPlay Profili {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Genel Ayarlar Varsayılan profil Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**CarPlay profili**, OsmAnd uygulamasında aracınızın ses ve video sistemini, bu verilerin telefonunuzda daha fazla görüntülenmesi için uygun şekilde kullanmak üzere özel bir profildir.

Bu profil, cihazınız *CarPlay*'e bağlı olduğu sürece kullanılır. *OsmAnd ayarları* menüsündeki *CarPlay profili* alanına dokunun ve [kullanım için etkinleştirilmiş profiller](../personal/profiles.md) listesinden *CarPlay*'in etkinleştirileceği profili seçin.

Doğrudan *CarPlay*'de araç ekranından bir profil seçemezsiniz. Önce cihazınızda gerekli profili seçin ve *CarPlay profilini* ona ekleyin. *Sürüş*, *Kamyon*, *Araba*, *Motosiklet* veya *Moped* gibi araç tipine uygun bir profil seçmelisiniz. **Uygulama, bir araca bağlandığında** *CarPlay profilini* otomatik olarak etkinleştirecektir.

**Aracınızın tipine uygun profili seçmek neden önemlidir?**

- **Sürüş güvenliği.** Farklı ulaşım türleri, sürüş sırasında farklı bilgi ve ayarlara ihtiyaç duyar. Örneğin, kamyon sürücüleri araçlarının yüksekliği, ağırlığı ve genişliği konusunda sınırlı olabilir, bu nedenle *Kamyon* profili onlara uygun kısıtlamalar ve yönergeler sağlar. Bisikletçiler ve motosikletçiler ise bisiklet yolları ve rotaları hakkında bilgiye ihtiyaç duyarken, kamyonlar için veri gerekmez.
- **Kullanışlılık ve Verimlilik.** Navigasyon, belirli bir ulaşım modunun ihtiyaçlarını karşılayacak şekilde özelleştirilmelidir. Bu, kullanıcıların optimum rotaları bulmak için harcadıkları süreyi azaltmalarına ve gereksiz trafik kısıtlamalarından kaçınmalarına olanak tanır.

## Rota Bitiş Noktası Seç {#select-a-route-endpoint}

Daha önce ayarlanmış ve eklenmiş [İlgi Çekici Noktaları (POI'ler)](../map/point-layers-on-map.md#points-of-interest-pois) veya [Favorileri](../personal/favorites.md) veya [İşaretleyicileri](../personal/markers.md) hedef noktası olarak seçebilirsiniz. Ayrıca, rota için kaydedilmiş veya indirilmiş bir [İz](../personal/tracks/index.md) seçmek, [Arama](../search/index.md) kullanmak veya rota [Geçmişinden](../search/search-history.md) bir hedef seçmek de mümkündür.

1. Harita üzerinde belirli bir konumu bitiş noktası olarak istiyorsanız, listeden uygun nokta kategorisini, [POI'ler](#poi-categories), [Favoriler](#favorites) veya [Harita İşaretleyicileri](#map-markers) seçin.

    - Tüm kategoriler, araç multimedya sisteminizin sağladığından daha fazla liste öğesi içeremez. Bu, *CarPlay*'deki listenin eksik olabileceği ve diğer tüm klasörlerin yalnızca cihazınızdaki OsmAnd uygulamasında mevcut olduğu anlamına gelir.
    - [Son Değiştirilen](#folder-last-modified) klasörü, eklenme veya değiştirilme tarihine göre sıralanmış son hedeflerin bir listesini içerir.
    - Diğer tüm klasörlerin listesi, en son güncellemeye göre sıralanır, yeni klasörler listenin en üstündedir. Sıralamalarını manuel olarak değiştirmek mümkün değildir.
    - Klasörlerdeki noktaların listesi, en yakından başlayarak onlara olan mesafeye göre sıralanır. Her noktanın bir adı veya koordinatları, şekilli bir simgesi (varsayılan olarak veya OsmAnd uygulamasında sizin tarafınızdan seçilen renk ve simge) ve mevcut konumdan ona olan mesafesi vardır.
2. Cihazın hafızasında depolanan son hedeflerden birini bulmak için [Geçmiş](#history) kategorisini seçin.
3. Mevcut arama kategorilerinden bir hedef girmek için [Arama](#search) seçeneğini seçin.

:::note
Sürüş sırasında, seçilen noktalar yaklaştığınızda veya geçtiğinizde [duyurulabilir](#voice-prompts). Sesli bildirimleri ayarlamak için ilgili makaledeki [Sesli komutlar](../navigation/guidance/voice-navigation.md) ayarlarına bakın.
:::

### Geçmiş {#history}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car_play_history.png)

**Geçmiş kategorisinde**, bitiş noktaları listesinden bir hedef seçebilirsiniz.

- En yenilerden başlayarak en son kullanıma göre sıralanırlar.
- Bu, sık kullanılan rotalara hızlı erişim için uygun olabilir.
- Bir hedefin nasıl kullanılacağını veya silineceğini öğrenmek için [Arama Geçmişi](../search/search-history.md) makalesini okuyun.

### İlgi Çekici Nokta Kategorileri {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*İlgi Çekici Noktalar (POI'ler)*, harita üzerinde kullanıcılar için önemli veya ilgi çekici yerleri veya nesneleri tanımlayan bir nokta türüdür. [OsmAnd ayarlarında](../map/point-layers-on-map.md#poi-types) sağlanan özel simgelerle vurgulanır ve gruplara ayrılır.

*CarPlay*'de bir *POI*'ye rota oluşturmak için şu adımları izleyin:

1. Mevcut kategoriler listesinden gerekli *POI*'yi seçin veya [Arama](#search) kullanarak POI'nin adını girin.
2. OsmAnd rotayı hesaplar ve *CarPlay ekranında* görüntüler. O konuma gitmeye başlamak için **Başlat** düğmesine dokunun.
3. OsmAnd uygulama ayarlarınıza ve aracınıza bağlı olarak, hedefinize yönlendirmek için [sesli komutlar](#voice-prompts) alabilirsiniz.
4. Konuma vardığınızda, uygulama *POI*'ye ulaştığınızı bildirecektir.

### Favoriler {#favorites}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoriler**, OsmAnd'ın harita üzerinde bir tür not almanızı sağlayan özelliklerinden biridir.

- **CarPlay** kullanırken, *Favori* ekleyemez veya değiştiremezsiniz, yalnızca mevcut olanları kullanabilirsiniz.
- [Favoriler](../personal/favorites.md#manage-favorites) listesi OsmAnd uygulamasında *Menü → Yerlerim → Favoriler* bölümünde bulunabilir.
- Navigasyon için kullanmak istiyorsanız, cihazı araç multimedya sisteminize bağlamadan önce ihtiyacınız olan her şeyi yapılandırın.

### Harita İşaretleyicileri {#map-markers}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Son hedefinizi bir *Harita işaretleyicisi* olarak tanımlamak için, cihazı araç multimedya sistemine bağlamadan önce OsmAnd uygulamasında gerekli sayıda işaretleyici oluşturmanız gerekir.
- *İşaretleyiciler* *Menü → Harita işaretleyici* listesinde mevcut olmalıdır.
- Bu, [İşaretleyiciler](../personal/markers.md) makalesinde daha ayrıntılı olarak açıklanmıştır.

### İzler {#tracks}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Bir hedefe rota oluşturmak için, OsmAnd uygulamasında mevcut bir izi seçebilirsiniz. İz önceden [indirilebilir](../personal/tracks/manage-tracks.md#import), [kaydedilmiş](../plugins/trip-recording.md) olarak kullanılabilir veya [Rota Planla](../plan-route/create-route.md) bölümünde oluşturulabilir.

*Menü → Yerlerim → [İzler](../personal/tracks/manage-tracks.md)* listesinden, araç multimedya sistemine bağlanmadan önce gerekli olanı seçin ve rota ya izin başlangıcına kadar oluşturulacak ya da iz boyunca mevcut yönü gösterecektir.

İzler, *CarPlay*'de araç ekranında doğrudan da seçilebilir. Oluşturduğunuz klasörlerde düzenlenirler ve yakın zamanda açılan izlere kolay ve hızlı erişim için özel bir [Son Değiştirilen](#folder-last-modified) klasörü bulunur.

### Arama {#search}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-search(1).png)

**Arama**'ya gitmek, son [hedef geçmişi](#history) listesine hızlı erişim sağlar. Benzer şekilde, adres, POI'ler veya koordinatlar gibi tüm OsmAnd hedef yöntemlerinin toplandığı [Navigasyon menüsü](../navigation/setup/route-navigation.md#navigation-menu) ile.

Rota planlaması için harita üzerinde gerekli yeri bulmak için *Arama aracını* mevcut herhangi bir arama kategorisinden kullanabilirsiniz.

- [Adres](../search/search-address.md). Arama alanına adresi yazmaya başlayın.
- [POI](../search/search-poi.md) ve [Özel POI](../search/search-poi.md). Yakındaki benzer adların listesi POI'leri veya kategorilerini de gösterecektir.
- [Koordinat araması](../search/search-address#coordinates-search). Harita üzerindeki noktayı bulmak için koordinatları girin.

#### Adres Arama Öncelikleri {#address-search-priorities}

CarPlay arama özelliği, **adres ararken** sokaklara ve bina numaralarına öncelik verir.

- Bir adres aradığınızda sokaklar ve bina numaraları ilk olarak görüntülenir. Bu, ilgili adres bilgilerinin yollar veya istasyonlar gibi diğer konumlardan önce görüntülenmesini sağlar.
- Bir şehir aradığınızda, önce şehirdeki sokaklar, ardından bu sokaklardaki bina numaraları görüntülenir.

### Son Değiştirilen Klasörü {#folder-last-modified}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car_play_last_modified.png)

*Favoriler* ve *İzler* kategorilerinde özel bir **Son Değiştirilen** klasörü bulunur. Bu kategorilerdeki liste, mevcut tüm favorilerinizi veya izlerinizi içerdiğinden çok büyük olabileceğinden, bu klasör en son hedeflerinize kolay ve hızlı erişim için gereklidir.

## Ek Özellikler {#additional-features}

*CarPlay*'deki OsmAnd uygulamasının aracınızda rahat navigasyon sağlayan temel özelliklerine ek olarak, deneyiminizi geliştiren ve navigasyonu daha kişiselleştirilmiş, konforlu ve verimli hale getiren bir dizi ek özellik bulunmaktadır.

### Sesli Komutlar {#voice-prompts}

*CarPlay* için sesli rehberlik, OsmAnd'ın en kullanışlı navigasyon özelliklerinden biridir, gerçek zamanlı rehberlik sağlar ve sürücünün yola odaklanmasını sağlar. Sesli komutlar, dönüşleri, yönleri ve diğer navigasyon talimatlarını açıkça belirtir, navigasyon sisteminin daha güvenli ve rahat kullanılmasını sağlar.

Seçilen profile göre sesli komutları yapılandırmak için, bunu cihazınızdaki OsmAnd uygulamasında bir rota başlatmadan önce yapmanız gerekir. *CarPlay* için önerilen ayarlara bakmak için [Sesli komutlar / Bildirimler](../navigation/guidance/voice-navigation.md) makalesine gidin.

### Gelen Metin Mesajlarını Duyur {#announce-incoming-text-messages}

OsmAnd uygulaması için bildirim ayarlarını cihazınızın sistem ayarlarında değiştirebilirsiniz. *CarPlay*'e dokunun, ardından aşağıdaki öğelerden birini seçin:

- *Yeni Mesajları Duyur*
- *Yeni Mesajları Sessize Al*
- *Önceki Ayarı Hatırla*

Mesajları doğrudan *CarPlay*'de de etkinleştirebilir veya devre dışı bırakabilirsiniz. Bildirim yönetiminin [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) ve [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios) üzerinde nasıl uygulandığını okuyun.

### Ekran Uyarısı Widget'ı {#screen-alert-widget}

![CarPlay ekranı](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Bu bilgi widget'ı, **Yaya geçitleri** ve **Hız Sınırı** gibi uyarı türlerini birleştirir.

- Uyarı türlerinin farklı görünümleri vardır, bu **<Translate android="true" ids="driving_region"/>**'a bağlıdır ve *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* bölümünde yapılandırılabilir.
- *CarPlay*'de uyarıların görüntülenmesini ayarlamak mümkün değildir, navigasyonu başlatmadan ve cihazınızı araca bağlamadan önce widget'ı uygulamada yapılandırmanız gerekir.
- Uyarı türlerinin ayrıntılı açıklaması için [bu makaleye](../widgets/nav-widgets.md#alert-types) bakın.
- Mevcut profiller için ekran uyarılarını ayarlamak için [Navigasyon ayarları](../navigation/guidance/navigation-settings.md#screen-alerts) makalesine bakın.

### Hız Göstergesi {#speedometer}

![CarPlay ekranı](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

**Hız Göstergesi** widget'ı, GPS verilerini kullanarak *mevcut hızı* ve [OSM veritabanından](https://wiki.openstreetmap.org/wiki/Key:maxspeed) ve [OsmAnd ayarlarından](../navigation/guidance/voice-navigation.md#speed-limit) *hız sınırını* araç multimedya sistemi ekranında görüntüleyen entegre bir arayüz öğesidir.

- **Hız Göstergesi widget'ı** [*profile bağımlıdır*](../personal/profiles.md), bu nedenle bir profil için ayarları değiştirirseniz, diğerine uygulanmazlar.
- Doğrudan *CarPlay*'de *Hız Göstergesi* görüntülemesini ayarlama seçeneği yoktur. Navigasyonu başlatmadan ve cihazınızı araca bağlamadan önce OsmAnd uygulamasında seçilen [navigasyon profili](#carplay-profile) için yapılandırmanız gerekir.
- *Hız Göstergesi* widget'ını ekrana nasıl ekleyeceğiniz ve yapılandıracağınız hakkında daha fazla bilgi için lütfen [Bilgi widget'ları makalesini](../widgets/info-widgets.md#speedometer) okuyun.

### Harita Görünümü (3D) {#map-appearance-3d}

![CarPlay](@site/static/img/navigation/auto-car/car_play_3.png)

OsmAnd uygulaması, rotanızı ve navigasyonunuzu görüntülemek için *CarPlay ekranında* 3D harita görünümünü kullanmanıza olanak tanır.

- **3D / 2D düğmesi** *CarPlay ekranında* görüntülenir.
- Bu düğmeye dokunarak 3D / 2D harita modları arasında geçiş yapabilirsiniz.

### Çok Fonksiyonlu Gösterge Paneli {#multifunction-dashboard}

![CarPlay](@site/static/img/navigation/auto-car/car_play_4.png)

OsmAnd uygulaması, araç multimedya sistemi ekranında müzik, mesaj veya diğer bildirim uygulamalarıyla eş zamanlı olarak *CarPlay*'de açılabilir ve navigasyon için kullanılabilir.

- *CarPlay*'e bağlı bir telefonda veya araç sisteminizdeki ekranda çok fonksiyonlu gösterge panelini ayarlama.
- Çoklu pencere düğmesini bulun ve açın.

## Ses Kontrol Sorunu {#volume-control-issue}

Bazen *CarPlay* bağlanmaz veya bağlı olmasına rağmen hiçbir şey duyamazsınız. Diğer zamanlarda, OsmAnd uygulaması *CarPlay*'de düzgün açılmaz. Olası çözümler:

1. Çoğu durumda, tüm **sinyaller** aynı anda ses çalma ayarlarından ayrı olarak sabit tam ses seviyesinde kalır. *CarPlay* kullanırken OsmAnd navigasyon komutlarının ses seviyesini değiştirmek için, araç multimedya sistemi ekranında *Kurulum → Ses → Ses seviyesi* bölümüne gidin.
2. Cihazı yeniden başlatın.
3. *CarPlay*'in iPhone'unuzda etkinleştirildiğinden emin olun. Bunu yapmak için:
   - Telefonunuzun ayarlarına ve ardından *Genel*'e gidin.
   - Genel Ayarlar'da *CarPlay*'e gidin ve *Arabalarım*'ı seçin. Burada arabanızı unutarak veya yeniden bağlanarak özelleştirebilirsiniz.
4. Bluetooth'unuzun bağlı olduğundan emin olun.
5. USB kablosunu kontrol edin.
6. İşletim sisteminizi düzenli olarak güncelleyin.
7. *CarPlay*'in [bölgenizde](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) desteklendiğinden emin olun.
8. iPhone'unuzda bir VPN kullanıyorsanız, *CarPlay*'in çalışmasını engelleyebilir. VPN'i devre dışı bırakmayı deneyin ve bunun *CarPlay*'in çalışmasına yardımcı olup olmayacağını görün.

## İlgili Makaleler {#related-articles}

- [Profiller (Ayarlar)](../personal/profiles.md)
- [İçe/Dışa Aktar](../personal/import-export.md)

### Sıkça Sorulan Sorunlar ve Çözümleri {#common-issues-and-solutions}

1. Bağlantı ekranıyla ilgili sıkça sorulan sorular:
    - *CarPlay'e bağlıyken uygulamayı neden telefonumdan kontrol edemiyorum?*
        Güvenlik nedenleriyle, CarPlay'e bağlıyken telefonunuzdaki OsmAnd uygulama ekranı kilitlenir. Uygulamayla yalnızca araç ekranı aracılığıyla etkileşim kurabilirsiniz.
    - *Kilitli ekranı devre dışı bırakıp uygulamayı telefonumda kullanabilir miyim?*
        Hayır, CarPlay sürüş sırasında dikkat dağınıklığını önlemek için bu kısıtlamayı uygular.
    - *Telefonum ve araç ekranım bağlantısız görünüyorsa ne yapmalıyım?*
        Cihazınızın USB veya Bluetooth aracılığıyla düzgün şekilde bağlandığından emin olun.
        Bağlantı kararsızsa aracınızın bilgi-eğlence sistemini ve OsmAnd uygulamasını yeniden başlatın.

> *Son güncelleme: Ocak 2025*