---
source-hash: 128d77aba82249d6c7c6f4680929168a77c9a1b7b68d147ef9ee216321970557
sidebar_position: 4
title:  Navigasyon Widget'ları
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Genel Bakış {#overview}

Navigasyon widget'ları, mesafe, varış veya kalan süre, sonraki dönüşler, kerteriz, mevcut sokak adı, şerit bilgileri, maksimum hız, yaklaşan uyarılar, POI'ler ve ara noktalar gibi bilgileri görüntülemek için navigasyon sırasında etkinleştirilir.

![Navigasyon widget'ları hepsi](@site/static/img/widgets/navigational_widgets_all.png)


## Aktif ve Pasif Navigasyon {#active-and-passive-navigation}

OsmAnd'daki navigasyon widget'ları hem **aktif** hem de **pasif** navigasyon modlarını geliştirmek için tasarlanmıştır. Bu widget'lar, seçilen **navigasyon profiline** bağlı olarak rota yönleri, yol detayları ve hız limitleri gibi değerli bilgiler sağlar.

#### Aktif Navigasyon {#active-navigation}

- **Gereksinimler:**
  - Bir **hedef** belirleyin.
  - *Yönler* özelliğini kullanarak **rotayı** hesaplayın.
  - Navigasyonu **başlatın** (sesli rehberlik isteğe bağlıdır).
  - Yalnızca rota boyunca hareket ederken kullanılabilir.

- **Desteklenen widget'lar:**
  - Tüm **navigasyon widget'ları** mevcuttur.

- **Temel Faydaları:**
  - **Adım adım talimatlar**, **şerit rehberliği** ve **tahmini varış süresi** sağlar.
  - Yolculuk sırasında doğru ve dinamik güncellemeler sağlar.

#### Pasif Navigasyon {#passive-navigation}

- **Nasıl çalışır:**
  - Hedef gerekmez.
  - Bir **navigasyon profili** (örn. *Sürüş*, *Bisiklet*) seçtiğinizde otomatik olarak çalışır.

- **İşlevsellik:**
  - GPS verilerini kullanarak takip ettiğiniz yolu belirlemeye çalışır.
  - [Sokak adı](#street-name), [şerit bilgisi](#lanes), [maksimum hız](#speed-limit) gibi **temel yol bilgilerini** görüntüler.

- **Sınırlamalar:**
  - Bazı gelişmiş özellikler, belirlenmiş bir hedef olmadan düzgün çalışmayabilir.
  - Sağlanan bilgiler, özellikle karmaşık yol ağlarında her zaman **kesin** olmayabilir.

> **NOT.** *Unutmayın ki **Harita Tarama** profili, her iki modda da navigasyon widget'larını desteklemez. Bu özellikleri etkinleştirmek için ilgili bir **navigasyon profiline** geçin.*


<!--
Navigasyon widget'ları çoğunlukla navigasyon profilleriyle **aktif** veya **pasif** navigasyonla kullanılır, bu nedenle **Harita Tarama** profilinde kullanılamazlar.

**Aktif** navigasyon, bir hedef belirlemeyi, rotayı hesaplamayı (Yönler) ve navigasyonu başlatmayı (Git) gerektirir, sesli rehberlik zorunlu değildir. Tüm navigasyon widget'ları bu tür navigasyonu destekler.

**Pasif** navigasyon, bir hedef noktasının ayarlanmasını gerektirmez ve herhangi bir navigasyon profiline, örneğin 'Sürüş'e geçtiğinizde otomatik olarak çalışır. Bu durumda, uygulama hangi yolu takip ettiğinizi belirlemeye çalışacak ve adı, şerit bilgisi, mevcut maksimum hız gibi ek bilgileri gösterecektir. Lütfen bu yaklaşımın güvenilir olmadığını ve tüm özellikleri desteklemediğini unutmayın.
-->

## Yükseklik Widget'ı {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Bu widget'ı yalnızca Pro özelliği olan <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro aboneleri</a> kullanabilir.

:::

Yükseklik widget'ı, navigasyon rotanızın yüksekliğini ve eğimini gösteren bir grafik ile bu grafikteki mevcut konumunuzu, mevcut rakım ve eğimle birlikte gösterir. Grafik iki eksen üzerinde çizilir. X ekseni rotanızın mesafesidir. Y ekseni rakımdır, değeri araziye bağlıdır ve eğim yüzde olarak gösterilir.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Yükseklik widget'ı](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Grafikle Etkileşimler {#interactions-with-the-graph}

- *Yakınlaştır/Uzaklaştır*. Varsayılan olarak, grafik mevcut konumdan 10 km ilerisine kadar olan rotayı gösterir. Rotanızdaki rakım değişikliklerini daha ayrıntılı görmek için yakınlaştırmak ve uzaklaştırmak için [iki parmak hareketi](../map/interact-with-map#gestures) kullanabilirsiniz. Ayrıca grafiği sağa, rotada ileri ve mevcut konuma geri hareket ettirebilirsiniz.
- *Grafiğe bir nokta yerleştirin*. Rotanızda ileride belirli bir noktadaki rakım ve derece değerini görmek isterseniz, grafiğin herhangi bir yerine dokunabilirsiniz ve değerleri gösteren bir işaretçi belirecektir.


#### İçindekiler {#whats-in}

Bir rota seçip **Başlat** düğmesine bastığınızda, harita mevcut konumunuz, rota ve ekranın altındaki widget ile açılır. Widget'ta grafik ve *Yokuş Yukarı*, *Yokuş Aşağı*, *Eğim*, mesafe, rakım ve eğim açısı hakkında bilgiler bulunur. *Optimal ölçeği* seçebilir ve rotanızdaki tüm olası engelleri görebilirsiniz.

- Tüm değerler, ya tüm rota için ya da yalnızca grafiği ölçeklendirerek seçilen aralık için belirtilir.
- OsmAnd tarafından arazi tespiti için kullanılan [DEM verileri için lisans](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) hakkında okuyun.

| |
|:------------|
| ***Konum Pimi*** |
| Grafikteki ***Mevcut Konumunuz***, bir konum simgesi, yükseklik ve eğim yüzdesi değeri içerir. Widget'ın sağ tarafında en yüksek yükseklik ve eğim, bunların ortalama değeri ve grafikte görünen rotanın seçilen bölümündeki en düşük değer bulunur. |
| ![nokta](@site/static/img/widgets/sch_1-1.png)|
| ***Ek bilgi*** |
| Widget'ın sağ tarafında, en yüksek rakım ve eğim, her ikisinin ortalama değeri ve grafikte görünen seçilen rota bölümündeki en düşük rakım ve eğim hakkında veriler bulunur. |
| ![veri](@site/static/img/widgets/sch_1-2.png)|
|***Yokuş Yukarı*** ve ***Yokuş Aşağı*** değerleri, konum noktanızdan görünür grafiğin sonuna kadar olan mesafelerin toplamıdır. Grafikte konum noktası yoksa, ekran üzerinde görünen tüm grafiğin toplamıdır (bu, ölçeği değiştirdiğinizde ve konum grafiğin dışına çıktığında olabilir).|
| **Yokuş Yukarı** – konum noktanızdan görünür grafiğin sonuna kadar veya ekran üzerinde görünen konum noktası olmayan rotanın seçilen bölümü için artan rakımlı tüm mesafelerin toplamını gösterir. |
| ![yokuş yukarı şeması](@site/static/img/widgets/sch_uphill_1.png) ![yokuş yukarı şeması](@site/static/img/widgets/sch_uphill_2.png)|
| **Yokuş Aşağı** – konum noktanızdan görünür grafiğin sonuna kadar veya ekran üzerinde görünen konum noktası olmayan rotanın seçilen bölümü için azalan rakımlı tüm mesafelerin toplamını gösterir. |
| ![yokuş aşağı şeması](@site/static/img/widgets/sch_downhill_1.png) ![yokuş aşağı şeması](@site/static/img/widgets/sch_downhill_2.png)|
|***Eğim***, yolun yataya oranıdır; sıfır yataylığı, derece sayısı ise daha yüksek veya daha dik bir eğim derecesini gösterir.|
| **Eğim** – konum noktanızdan görünür grafiğin sonuna kadar veya ekran üzerinde görünen konum noktası olmayan rotanın seçilen bölümü için maksimum yol eğimini yüzde olarak gösterir. |
|![eğim şeması](@site/static/img/widgets/sch_grade_1.png) ![eğim şeması](@site/static/img/widgets/sch_grade_2.png)|


## Kerteriz Widget'ı {#bearing-widget}

Kerteriz, aracınızın dışındaki bir hedefe, örneğin bir varış noktasına veya başlangıç noktasına olan yöndür. Bir kerteriz *Göreceli* (seyir yönünüze göre) veya *Manyetik* (pusulaya göre) olabilir. Örneğin, 180°'lik bir manyetik kerteriz güney yönünü gösterirken, 180°'lik bir göreceli kerteriz doğrudan arkanızı gösterir. Ana yönler, pusulanın dört ana yönüdür. Bunlar Kuzey (*K* - 0° veya 360°), Doğu (*D* - 90°), Güney (*G* - 180°) ve Batı (*B* - 270°)'dir.

![Seyahat kaydı widget'ı](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seyahat kaydı widget'ı](@site/static/img/widgets/bearing_widget.png) ![Seyahat kaydı widget'ı](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat kaydı widget'ı](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="shared_string_bearing"/>* |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | **Android:** Açısal birimler için veri görüntüleme biçimini değiştirebilirsiniz: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** Açısal birimler için veri görüntüleme biçimini değiştirebilirsiniz: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Nasıl Çalışır {#how-it-works}

Kerterizi görüntülemek için bir **hedef nokta** seçilmelidir. Navigasyon için bir **varış** noktası (veya varsa **ilk ara nokta**) seçilirse, bu hedef nokta olarak kullanılacaktır. Aksi takdirde, **en üstteki seçili işaretçi** kullanılacaktır.

- [Göreceli kerteriz](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative), ileri hareket yönünüz ile hedef nokta arasındaki açıdır. **İleri hareket yönü**, GPS sensörlerinden alınan **hareket yönünüz** veya ayakta duruyorsanız **cihazınızı işaret ettiğiniz yerdir** (yani cihazınızın manyetik pusulaya göre yönü). Örnek: Göreceli kerterizi 0° olan bir nesne doğrudan önünüzde, göreceli kerterizi 180° olan bir nesne ise doğrudan arkanızdadır. **Göreceli kerteriz**, ileri yönünüz ile hedef nokta arasındaki açıdır.

- [Manyetik kerteriz](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute), manyetik kuzey ile konumunuzdan gözlemlenen hedef nokta arasındaki saat yönündeki (yatay) açıdır. Hedefinize ulaşmak için bu manyetik pusula değerini takip etmeniz gerekir. Örnek: **Manyetik kerteriz** 0° M olarak gösteriliyorsa, hedef noktaya ulaşmak için kesinlikle manyetik kuzeye doğru hareket etmeniz gerekir.

- [Gerçek kerteriz](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages), coğrafi meridyen ile Dünya üzerindeki bir çizgi arasındaki yatay açı olarak ifade edilir. Özellikle, **gerçek nokta kerterizi**, Gerçek Kuzey çizgisinden saat yönünde derece cinsinden ölçülen açıdır. OsmAnd yazılımı, kullanıcı dostu arayüzümüzde size gerçek kerterizi ve başlığı gösterecek, böylece doğru kararı erken vermenizi kolaylaştıracaktır.

### Kerte Hattı Boyunca Navigasyon {#navigation-along-the-rhumb-line}

- **Göreceli kerteriz**. Göreceli kerterizi 0 dereceye ayarlayıp ileri doğru hareket ederseniz, varış noktasına ulaşırsınız, ancak en kısa rotadan değil ( [Kerte hattı](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Manyetik kerteriz**. Teknenizdeki/aracınızdaki pusulayı widget değeriyle hizalayıp ileri doğru giderseniz, varış noktanıza ulaşırsınız, ancak en kısa rotadan değil ( [Kerte hattı](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Göreceli Manyetik kerteriz widget'ı](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- Dokunarak: Göreceli kerteriz veya Manyetik kerteriz ("M" ile) arasında geçiş yapar -->


## Navigasyon Noktaları {#navigation-points}

<!--
*Navigasyon noktası* widget grubu, navigasyon sırasında mesafe, varış veya kalan süre, sonraki dönüşler, kerteriz, mevcut sokak adı, şerit bilgileri, maksimum hız, yaklaşan uyarılar, POI'ler, ara noktalar gibi bilgileri görüntülemek için etkinleştirilir.
-->

*Navigasyon noktası* widget grubu, varış noktanıza, ara noktaya kalan mesafeyi, ara noktaya varış süresini veya hesaplanan rota için seyahat süresini ve tahmini varış süresini gösterir.

### Rota Bilgileri {#route-information}


![Hedef widget'ı](@site/static/img/widgets/route_information_widget.png)

*Rota Bilgileri* widget'ı, devam eden navigasyon rotası hakkında gerçek zamanlı veriler ve aktif bir rotayı yönetmek için hızlı bir yol sağlar [rotayı yönetme](../navigation/setup/route-navigation.md#start--stop-navigation). Ana rota ayrıntılarını takip etmenize ve mevcut navigasyon oturumunu minimum etkileşimle durdurmanıza veya devam ettirmenize yardımcı olur.

**Görüntülenen bilgiler:**

- **Tahmini varış süresi (ETA)**. Son varış noktasına tahmini varış süresini gösterir.
- **Kalan seyahat süresi**. Varış noktasına ulaşmak için kalan tahmini süreyi gösterir.
- **Hedefe olan mesafe**. Son varış noktasına ve ara noktalara kalan toplam mesafeyi gösterir.

**Ayarlar menüsü**:

- Aşağıdaki değerlerden birini önceliklendirmek için bir **Varsayılan Görünüm** seçin: *Tahmini varış süresi*, *Kalan süre*, *Mesafe*.
- **Görüntüleme Önceliği**'nde, en alakalı rota bilgilerini önceliklendirmek için *Önce hedef (varsayılan)* veya *Önce ara nokta* arasında seçim yapın.

> NOT: Widget yalnızca navigasyon sırasında görünür.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget ekle →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Widget ekle →Rota bilgileri* |
| Dokunarak | [Navigasyonu Başlat/Durdur panelini](../navigation/setup/route-navigation.md#start--stop-navigation) açmak için ok düğmesine dokunun |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Hedefe Kalan Mesafe {#distance-to-destination}

![Hedef widget'ı](@site/static/img/widgets/destination_widget.png)

Widget, hesaplanan bir rotayı takip ederken son varış noktasına kalan mesafeyi gösterir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Dokunarak | Haritayı varış noktasına taşır. |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |

### Ara Noktaya Kalan Mesafe {#distance-to-intermediate}

![Ara hedef widget'ı](@site/static/img/widgets/intermediate_destination_widget.png)

Widget, hesaplanan rota boyunca ilk ara noktaya olan mesafeyi gösterir. Ara noktalar geçildikten sonra, boşluk bir sonraki ara noktaya güncellenecektir. Ara nokta yoksa, widget görüntülenmez.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Dokunarak | **Tek ara nokta** - haritayı ara noktaya taşı. <br /> **İki veya daha fazla ara nokta** - Hedefler listesi menüsünü açar. |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |

### Ara Noktaya Kalan Süre {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Varış zamanı Kalan süre widget'ı](@site/static/img/widgets/arrival_time_widget_android.png) ![Varış zamanı Kalan süre widget'ı](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Varış zamanı Kalan süre widget'ı](@site/static/img/widgets/arrival_time_widget_ios.png) ![Varış zamanı Kalan süre widget'ı](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Widget, ilk ara noktaya *Varış zamanı* veya *Kalan süre* gösterir. Navigasyon sırasında zaman sürekli güncellenir ve bir ara nokta geçilir geçilmez zaman bir sonraki ara noktaya güncellenecektir. Örneğin, navigasyonu durdurursanız, *Kalan süre* değişmeden kalacak ve *Varış Zamanı*, *Kalan süre* artı *Mevcut Zaman*a eşit olacaktır.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Dokunarak | *Varış zamanı* ile *Kalan süre* arasında ve tersi yönde geçiş yapar. |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Hedefe Kalan Süre {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ara Varış zamanı Süre widget'ı](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ara Varış zamanı Süre widget'ı](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Widget, son varış noktasına *Varış zamanı* veya *Kalan süre* gösterir. Zaman, navigasyon sırasında sürekli güncellenir ve mevcut konumunuzdan rota süresine eşittir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Dokunarak | *Varış zamanı* ile *Kalan süre* arasında ve tersi yönde geçiş yapar. |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## Hız Limiti {#speed-limit}

![Hız limiti widget'ı](@site/static/img/widgets/speed_limit_widget_2.png)

*Hız Limiti* widget'ı, rotanız için harita verilerine göre mevcut hız limitini gösterir.

- Veriler [OpenStreetMap projesinden](https://wiki.openstreetmap.org/wiki/Key:maxspeed) alınmıştır.
- Widget pasif ve aktif navigasyon modlarında çalışır.
- Belirli bir yol veya alan için hız limiti verileri mevcut değilse, *widget görünmeyecektir*.

> NOT: En son hız limiti bilgilerine erişmek için [haritalarınızın güncel](../personal/maps-resources.md#updates) olduğundan ve gerekli tüm bölgesel verileri indirdiğinizden emin olun.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## Rota Manevraları {#route-maneuvers}

![Sonraki dönüşler widget'ı](@site/static/img/widgets/next_turns_widget.png)

Bu navigasyon widget'ları seti, navigasyon sırasında etkinleştirilir ve bir sonraki manevraya olan mesafe hakkında bilgi gösterir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *Menü → Ekranı yapılandır → Sol / Sağ panel → Widget ekle → Rota Manevraları → Sonraki dönüş, Sonraki dönüş (küçük), İkinci sonraki dönüş* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Sol / Sağ panel → Widget ekle → Rota Manevraları → Sonraki dönüş, Sonraki dönüş (küçük), İkinci sonraki dönüş* |
| Dokunarak | [Sesli komutlar](../navigation/guidance/voice-navigation.md) etkinse, bir sonraki manevra ve ona olan mesafe okunur. |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Sonraki Dönüş {#next-turn}

![Sonraki dönüşler widget'ı](@site/static/img/widgets/next_turns_widgets_andr.png)

*Rota Manevraları* widget'ları şunlar hakkında bilgi içerir:

- **Sonraki dönüş** - manevrayı temsil eden büyük bir ok ve ona olan mesafe verileriyle bir sonraki dönüş.
- **Sonraki dönüş (küçük)** - manevrayı temsil eden küçük bir ok ve okun yanında mesafe verileriyle bir sonraki dönüş.
- **İkinci sonraki dönüş** - ilk dönüşten sonraki bir sonraki dönüş, yaklaşma mesafesi içindeyse etkinleştirilir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *Menü → Ekranı Yapılandır → Sol / Sağ panel → Widget ekle → Sonraki dönüş, Sonraki dönüş (küçük), İkinci sonraki dönüş* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Sol / Sağ panel → Widget ekle → Sonraki dönüş, Sonraki dönüş (küçük), İkinci sonraki dönüş* |
| Dokunarak | [Sesli komutlar](../navigation/guidance/voice-navigation.md) etkinse, bir sonraki manevra ve ona olan mesafe okunur. |
| Uzun dokunuş | [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Sonraki Dönüş İçin Renkli Uyarılar {#color-prompts-for-next-turn}

Bu tablo, uyarıların etkinleştirilmesine kadar geçen yaklaşık süreyi ve manevrayı gerçekleştirmek için okların karşılık gelen renk göstergesini göstermektedir. Daha fazla bilgi için [teknik belgelere](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) veya [Sesli uyarılar](../navigation/guidance/voice-navigation.md) makalesine bakın.

| Renk | ~ Tetikleme Süresi | Mesafe | Uyarı türü |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Yeşil | 5 saniye | Yakın | Şimdi dön |
| 🟡 Sarı | 20 saniye | Yaklaşıyor | `x` m içinde dön |
| ⚪ Gri | > 100 saniye | Uzak | Dönmeye hazırlan |


## Şeritler {#lanes}

![Şeritler widget'ları](@site/static/img/widgets/lanes_widget.png)

**Şeritler** widget'ı, navigasyon aktifken mevcut şeridi vurgular ve navigasyon pasifken mevcut yol için şerit düzenini gösterir. Veriler [OpenStreetMap projesinden](https://wiki.openstreetmap.org/wiki/Key:turn) alınmıştır.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Widget ekle → <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget ekle → <Translate android="true" ids="show_lanes"/>* |
| Dokunarak | Değişiklik yok |

### Şeritler İçin Renkli Uyarılar {#color-prompts-for-lanes}

Yaklaşma süresi ayarlarına göre bir widget görüntüler. Şeridin rengi, [sesli uyarılar](../navigation/guidance/voice-navigation.md) ve manevrayı gerçekleştirmek için kalan süre ile ilişkilidir.

| Renk | ~ Tetikleme Süresi | Mesafe | Uyarı türü |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Yeşil | 5 saniye | Yakın | [Şimdi dön](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Sarı | 20 saniye | Yaklaşıyor | [X m içinde dön](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Rota Rehberliği {#route-guidance}

<InfoAndroidOnly />

![rota rehberliği widget'ları](@site/static/img/widgets/route_guidence_widgets_andr.png)

Bir sonraki dönüşe olan mesafe, yol adı, mevcut sokak adı ve şerit bilgileri dahil olmak üzere gerçek zamanlı rota rehberliği sağlar. Widget'lar navigasyon sırasında aktiftir.

*Rota Rehberliği* widget'ları şunlar hakkında bilgi içerir:

- [Şeritler](#lanes) - yol şeritlerinin mevcut konumunu gösterir ve üzerinde sürmeniz gerekenleri vurgular.
- **Sonraki dönüş** - manevrayı temsil eden büyük bir ok ve ona olan mesafe verileriyle bir sonraki dönüş.
- **İkinci sonraki dönüş** - ilk dönüşten sonraki bir sonraki dönüş, yaklaşma mesafesi içindeyse etkinleştirilir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *Menü → Ekranı Yapılandır → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget ekle → Şerit, Sonraki dönüş, İkinci sonraki dönüş* |
| Dokunarak | **Sonraki dönüş**: [Sesli komutlar](../navigation/guidance/voice-navigation.md) etkinse, bir sonraki manevra ve ona olan mesafe okunur. <br/> **Şerit**: Değişiklik yok. |
| Uzun dokunuş | **Sonraki dönüş**: [Widget'ın bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar <br/> **Şerit**: Değişiklik yok. |


## Uyarı Widget'ı {#alert-widget}

![Uyarı bilgileri widget'ları](@site/static/img/widgets/alert_information_widget.png)

**Uyarı widget'ı**, navigasyon sırasında sol alt köşede görüntülenen çeşitli uyarı türlerini birleştirir.

- *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* ve *<Translate android="true" ids="show_tunnels"/>* gibi uyarıları açıp kapatma yeteneğiniz vardır. Widget etkinse diğer uyarılar varsayılan olarak aktiftir.

- *Hız Limiti* uyarı türü için, araç hızına ve GPS hızına daha iyi uyum sağlamak için sesli uyarı ayarlarında <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) değerini ayarlayabilirsiniz.

- Çoğu uyarı ekranda görüntülenir ve 15 saniye boyunca sesli uyarı ile duyurulur, ayrıca bir Ara Nokta, Favori Nokta veya POI'yi geçmek için tetikleme süresi de duyurulur. Daha fazla bilgiyi [burada](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) okuyun.

| | |
|:------------|:------------|
| Etkinleştir | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Uyarı Türleri {#alert-types}

Uyarı türleri, **<Translate android="true" ids="driving_region"/>**'a bağlı olarak farklı bir görsel tasarıma sahiptir ve *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>* aracılığıyla yapılandırılabilir. OsmAnd, yol işaretlerini %100 aynı şekilde temsil etmeyi hedeflemez, ancak bazı benzerliklere işaret eder.

| | | |
|:------------|:------------|:------------|
| Ad | Açıklama | Simge |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Trafik sakinleştirme](https://en.wikipedia.org/wiki/Traffic_calming), motorlu taşıt sürücüleri, yayalar ve bisikletliler için güvenliği artırmak amacıyla fiziksel tasarım ve diğer önlemleri kullanır. | ![Uyarı trafik sakinleştirme widget'ları](@site/static/img/widgets/warnings_traffic_calming.png) ![Uyarı trafik sakinleştirme ABD widget'ları](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Yaya geçidi](https://en.wikipedia.org/wiki/Pedestrian_crossing) (öncelikli olarak İngiliz İngilizcesi) veya yaya geçidi, yayaların bir yolu, sokağı veya caddeyi geçmeleri için belirlenmiş bir yerdir. OsmAnd, kontrolsüz yaya geçidi uyarısını gösterir. | ![Uyarı trafik sakinleştirme widget'ları](@site/static/img/widgets/warnings_pedestrian.png) ![Uyarı trafik sakinleştirme ABD widget'ları](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | Çoğu ülkede, [Yol hız limitleri](https://en.wikipedia.org/wiki/Speed_limit), bir yolun belirli bir bölümünde motorlu taşıtların seyahat edebileceği yasal maksimum, orta veya minimum hızı belirler. OsmAnd'da, hızı aştığınızda uyarı gösterilir. Hız aşımı parametrelerini (0, 5, 10.. km/s) ayarlayabilirsiniz. ![Uyarı aşırı hız widget'ları](@site/static/img/widgets/ex_warning_speed.png) | ![Uyarı hız limiti widget'ları](@site/static/img/widgets/warnings_limit.png) ![Uyarı hız limiti Kanada widget'ları](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Uyarı hız limiti ABD widget'ları](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Tünel, bir dağın, nehrin veya yoğun bir kentsel alanın altından geçen bir yeraltı geçididir. OsmAnd'da, *Tüneller* uyarısı tünel uzunluğu hakkında bilgiye sahiptir. Bir tüneldeyseniz, tünelin sonuna olan mesafeyi gösterir. ![Uyarı aşırı tünel widget'ları](@site/static/img/widgets/ex_warning_tunnel.png) | ![Uyarı tünel widget'ları](@site/static/img/widgets/warnings_tunnel.png) ![Uyarı tünel ABD widget'ları](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Trafik denetim kameraları](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) ve [hız kameraları](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera), hız ihlalleri, kırmızı ışık ihlalleri ve diğer yasa dışı davranış türlerini kaydeder. <br />**NOT:** Hız kamerası uyarıları bazı ülkelerde yasaktır veya yasa dışıdır. Hız kameralarını OsmAnd'dan tamamen [kaldırmak](../personal/global-settings.md#legal) için ana *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* bölümüne gidin. | ![Uyarı trafik sakinleştirme widget'ları](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Dur işareti](https://en.wikipedia.org/wiki/Stop_sign), sürücüleri tam durmaya ve kavşağın araçlardan ve yayalardan güvenli bir şekilde temiz olduğundan emin olmaya zorlamak için tasarlanmış bir trafik işaretidir. | ![Uyarı dur widget'ları](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Bu uyarı, ileride bir [demiryolu geçidi](https://en.wikipedia.org/wiki/Crossbuck) olduğunu gösterir. | ![Uyarı demiryolları widget'ları](@site/static/img/widgets/warnings_railways.png) ![Uyarı demiryolları Kanada widget'ları](@site/static/img/widgets/warnings_railways_ca.png) ![Uyarı demiryolları ABD widget'ları](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Bu uyarı, ileride sınır kontrolü olduğunu gösterir.| ![Uyarı sınır kontrol widget'ları](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Tehlike sembolleri veya uyarı sembolleri](https://en.wikipedia.org/wiki/Hazard_symbol), elektrik akımları, zehirler ve radyoaktivite dahil olmak üzere tehlikeli maddeler, konumlar veya nesneler hakkında uyarmak için tasarlanmış tanınabilir sembollerdir. | ![Uyarı tehlike widget'ları](@site/static/img/widgets/warnings_hazard.png) ![Uyarı tehlike ABD widget'ları](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Bu uyarı, ileride bir ücretli yol gişesi olduğunu gösterir. ![Uyarı gişe widget'ları](@site/static/img/widgets/ex_toll_booth.png) | ![Uyarı hız limiti widget'ları](@site/static/img/widgets/warnings_limit.png) |


## Sokak Adı {#street-name}

Sokak adı widget'ı, düz bir okla **mevcut sokak adını** veya yapılacak manevrayla birlikte **bir sonraki sokak adını** gösterir. Sokak adı genellikle bir otoyol kalkanı, bir [ad](https://wiki.openstreetmap.org/wiki/Key:name), bir [referans](https://wiki.openstreetmap.org/wiki/Key:ref), bir [uluslararası referans](https://wiki.openstreetmap.org/wiki/Key:int_ref) ve bir [hedef](https://wiki.openstreetmap.org/wiki/Key:destination) içerir. Mevcut sokak adı ile bir sonraki sokak adı arasındaki geçiş, manevrayı gerçekleştirmek istediğiniz yere yaklaştığınızda (~20 saniye) gerçekleşir, bu durum sesli uyarı [X m içinde dön](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) ile benzerdir.

- Bir cadde veya otoyol boyunca sürerken, widget mevcut cadde (yol) adını veya tanımını mavi bir okla gösterir.

  ![Sokak adı POI'ler widget_2](@site/static/img/widgets/street_name_widget_2.png)

- Yön değiştirdiğinizde, widget manevra şemasını ve dönmeniz gereken caddenin (yolun) adını (tanımını) gösterir.

  ![Sokak adı POI'ler widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget ekle → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget ekle → <Translate android="true" ids="map_widget_top_text"/>* |
| Dokunarak | Değişiklik yok |


## Yaklaşan POI'ler / Favoriler {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yaklaşan POI'ler/Favoriler android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yaklaşan POI'ler/Favoriler ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

**Yaklaşan POI'ler/Favoriler/Ara Noktalar** widget'ı [Sokak adı](#street-name) ile birleştirilmiştir ve rota boyunca yaklaşan ve geçen İlgi Çekici Noktaları, takip edilen parkurun Ara Noktalarını ve Favorileri gösterir.

**Adı**, **noktanın simgesini** ve 2 **mesafeyi** gösterir:

- **Rota mesafesi** (üstte) rotayı takip ederek ne kadar mesafe kat edilmesi gerektiğini gösterir.
- **Sapma mesafesi**, en yakın rota noktasından noktanın kendisine olan düz mesafedir.

**iOS** - En yakın ara noktaya olan mesafeye ek olarak, ara noktanın rotanın hangi tarafında (sol veya sağ) olduğu da gösterilir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Navigasyonu başlat → kalem düğmesi* |
| Dokunarak | Değişiklik yok |


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Harita düğmeleri](./map-buttons.md)
- [Bilgi widget'ları](./info-widgets.md)
- [Navigasyon widget'ları](./nav-widgets.md)
- [Yarıçap-cetvel ve Cetvel](./radius-ruler.md)
- [İşaretçi widget'ları](./markers.md)
- [Hızlı Eylem](./quick-action.md)

> *Son güncelleme: Nisan 2025*