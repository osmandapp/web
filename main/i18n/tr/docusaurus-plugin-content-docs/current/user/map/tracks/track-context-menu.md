---
source-hash: 8897fb3aebb172bbef2674a2dea9f5e516873f9949d5d72db7b3e2032bea15b3
sidebar_position: 4
title:  İz Bağlam Menüsü
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

*İz bağlam menüsü*, *[İz](../../personal/tracks/index.md)* hakkında hem metin hem de [grafik](#altitude--speed-graphs) biçiminde bilgi sağlar. Bilgi eklemenize, değişiklik yapmanıza, düzenlemenize ve iz ile çeşitli diğer eylemleri gerçekleştirmenize olanak tanır. *İz bağlam menüsüne* harita üzerinde gerekli ize dokunarak veya *[Yerlerim](../../personal/myplaces.md)* menüsünü (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*) kullanarak erişebilirsiniz. İz klasörünü açmanız ve istediğiniz ize dokunarak seçmeniz gerekebilir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz bağlam menüsü genel bakış Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz bağlam menüsü genel bakış iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## İz Genel Bakışı {#track-overview}

Bir ize dokunduğunuzda, *İz bağlam menüsünün* ilk ekranı - *Genel Bakış sekmesi* açılır. Bu sekmede, seçilen iz hakkında bir özet (*[Bilgi paneli](#info-panel)*) bulabilir ve *[İz eylemleri menüsünü](#track-actions)* kullanarak iz ile en yaygın eylemleri gerçekleştirebilirsiniz. Genel Bakış sekmesini yukarı çekerseniz iziniz hakkında [açıklama ve servis bilgilerini](#description-and-info) görebilirsiniz.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### Bilgi Paneli {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bilgi paneli genel bakış Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bilgi paneli genel bakış iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Bilgi panelinin üst kısmında, izin adını ve onu işaretlemek için kullanılan sembolü (*yalnızca Android*) görebilirsiniz. İz adı, [Seçenekler menüsündeki](#options) yeniden adlandırma işlevi kullanılarak değiştirilebilir. Bazı izler (çoğunlukla *[Seyahat rehberleri](../../plan-route/travel-guides.md#manage-as-gpx-track)*) *İz adının* altında kısa bir *[açıklamaya](#description-and-info)* ve (veya) bir resme sahip olabilir. Bir ok, [Konumumdan](../../map/interact-with-map#my-location-and-zoom) *izin en yakın noktasına olan yönü* gösterir.

Bilgi paneli ayrıca aşağıdakiler hakkında bilgi sağlar:

- *<Translate android="true" ids="distance"/>*. İz uzunluğunu gösterir.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Yolculuk sırasındaki toplam tırmanış ve iniş toplamını gösterir.
- *<Translate android="true" ids="altitude_range"/>*. Bir iz üzerindeki minimum ve maksimum yüksekliği gösterir.

:::note
İziniz OsmAnd veya başka bir takip uygulamasıyla oluşturulduysa (yani noktalarında [`zaman` ve `hız`](../../plugins/trip-recording#recorded-gpx-file) etiketleri varsa), bilgi paneli ayrıca *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) veya *<Translate ios="true" ids="total_time"/>* (*iOS*) (izin başlangıç ve bitiş noktaları arasındaki süre) ve *<Translate android="true" ids="shared_string_time_moving"/>* (sürüş sırasında geçen toplam süre) hakkında bilgi içerecektir.
:::

### İz Eylemleri {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz bağlam menüsü genel bakış Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz bağlam menüsü genel bakış iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Göster / gizle** düğmeleri. İzin haritadaki görünürlüğünü değiştirir.
- [Görünüm](./appearance.md). İzinizin görünümünü özelleştirin.
- **İzi düzenle** (*Android*). İzi [Rota planla aracında](../../plan-route/create-route.md) açar.
- **Dışa Aktar** (*iOS*). [Bir izi dışa aktarmanıza](../../personal/tracks/manage-tracks.md#export) olanak tanır.
- **Yol tarifleri**. İzi *[Navigasyon](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)* modunda açar.


### Seçenekler {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz menüsü seçenekleri Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz menüsü seçenekleri Android](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

**Seçenekler** menüsü, seçilen izi çeşitli araçlar ve ayarlarla yönetmenize ve değiştirmenize olanak tanır.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – İzin haritadaki görünürlüğünü kontrol eder.
- **<Translate android="true" ids="shared_string_appearance"/>** – İzin rengini, genişliğini ve şeffaflığını özelleştirmek için [Görünüm menüsünü](../tracks/appearance.md) açar.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – [İze göre navigasyonu](../../navigation/setup/gpx-navigation.md) başlatır, rotanızı seçilen izle hizalar.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*yalnızca Android*) – Boşlukları doldurmak için iz segmentlerini birleştirir.
- **<Translate android="true" ids="analyze_on_map"/>**. İzin yükselişini, hızını ve mesafesini incelemek için [Haritada analiz et](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) aracını açar.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*yalnızca Android*) - İzi zamana veya mesafeye göre [aralıklara](./track-context-menu.md#split-interval) ayırarak analiz eder.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Seçilen izi GPX formatında dışa aktarır.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - Seçilen izi OpenStreetMap'e [yükler](../../plugins/osm-editing.md#upload-gps-track).

<br/>

- **<Translate android="true" ids="edit_track"/>** - İzi değiştirmek için [Rota planla](../../plan-route/create-route.md) aracını açar.
- **İzi çoğalt** (*yalnızca iOS*) – İzin bir kopyasını oluşturur ve kaydeder.
- **<Translate android="true" ids="rename_track"/>** – İz adını değiştirmeye olanak tanır.
- **<Translate android="true" ids="change_folder"/>** – İzi başka bir klasöre taşır veya yeni bir klasör oluşturur.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*yalnızca Android*) - Doğruluğu iyileştirmek için [izin noktalarını filtrelemeye](#gps-filter) olanak tanır.
- **<Translate android="true" ids="altitude_correction"/>** (*yalnızca Android*) - [Yükseklik verilerini almak](#calculate-missing-elevation), [izinizi yollara bağlamak](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) veya çevrimdışı hesaplamak için (gerekli [Arazi haritaları](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*yalnızca Android*) - Bir GPX izi kullanarak [konumunuzu simüle eder](../../plugins/development.md#gpx-track-simulation).

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. İzi siler.


### Açıklama ve Bilgi {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Açıklama ve Bilgi Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png) ![Açıklama ve Bilgi Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İzin açıklaması iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

*Genel Bakış* sekmesinin bu bölümü ***etiket verilerini*** ve ***tüm genel bilgileri*** gösterir.

- **Açıklama**. *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) düğmesi iz açıklamasını düzenlemek için kullanılır. `desc` etiketi.

- **Genel**. *GPX dosya boyutu*, *dosya klasörü* ve `time` etiketiyle *oluşturma tarihi* hakkında bilgi içerir.

- **Bilgi**. Etiketler: *Anahtar kelimeler* - `keywords`, &nbsp;*Bağlantı* - `link`, &nbsp;*Etkinlik* - `activities`.

- **Yazar**. Etiketler: *Yazar* - `author`, &nbsp;*Ad* - `name`, &nbsp;*E-posta adresi* - `email`, &nbsp;*Bağlantı* - `link`.

- **Telif Hakkı**. Etiketler: *Telif Hakkı* - `copyright`, &nbsp;*Yazar* - `author`, &nbsp;*Yıl* - `year`, &nbsp;*Lisans* - `license`.

- **Ek**. ***Uzantılar*** bölümündeki tüm etiketler:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>GPX dosyasının örnek XML kodu</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### İz Bilgisi Etkinliği {#track-information-activity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz Bilgisi Etkinliği](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz Bilgisi Etkinliği](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


OsmAnd'daki *Etkinlik* özelliği, kaydedilen GPX izlerini daha fazla analiz ve klasörlerde düzenleme için belirli etkinliklerle etiketlemenize olanak tanır.

- GPX izleri için [Etkinlik etiketleri](../../plugins/trip-recording.md#recording-settings). Bir GPX izi kaydederken, bir etkinlik türü atayabilirsiniz. Bu etkinlik etiketleme, izleri başlangıçta kategorize etmenize yardımcı olur.
- [Etkinlik filtresi](../../personal/tracks/smart-folder.md#search-filter). Kaydedilen GPX izlerini etkinliğe göre filtreleyebilirsiniz, bu da tüm bisiklet veya yürüyüş izleri gibi belirli kayıt türlerini bulmaya odaklanmanızı sağlar.
- [Etkinlik türlerini yönetme](../../personal/tracks/manage-tracks.md#selection-mode). Yerlerim menüsünün İzler sekmesindeki seçim modunu kullanarak seçilen klasörler veya izler için etkinlik türünü değiştirebilirsiniz.
- **Etkinlik listesi**. Etkinlik kategorileri ve grupları OsmAnd'ın kaynaklarında tanımlanmıştır. Geliştiriciler ve katkıda bulunanlar için etkinlik listesi, [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) adresinde yapılandırılmış bir biçimde tutulur ve mevcut etkinlik gruplarını ve türlerini ayrıntılarıyla belirtir.


## Rakım / Hız Grafikleri {#altitude--speed-graphs}

*<Translate android="true" ids="shared_string_gpx_track"/>* sekmesinde, iz hakkında grafik biçiminde bilgi bulabilirsiniz. Anahtarı kullanarak grafikte hangi verilerin görüntüleneceğini seçebilirsiniz: *[<Translate android="true" ids="altitude"/>](#altitude)* hakkında ayrı veriler, *[Hız](#speed)* hakkında (bu seçenek yalnızca kaydedilen izler için kullanılabilir) veya hepsini birlikte görüntüle (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Grafikle etkileşim:

- ***Grafiğe bir nokta yerleştirin***. Bir izin belirli bir noktasındaki bilgileri görmek isterseniz, grafiğin herhangi bir yerine dokunabilirsiniz ve değerlerle birlikte bir işaretçi görünecektir. Aynı zamanda, harita üzerinde o konumdaki izi işaret eden mavi bir işaretleyici görünecektir.
- ***Yakınlaştır/Uzaklaştır***. Daha ayrıntılı bir görünüm için yakınlaştırmak ve uzaklaştırmak için [iki parmak hareketlerini](../../map/interact-with-map.md#gestures) kullanabilirsiniz. Yakınlaştırdıktan sonra, rotada ileri ve geri hareket etmeye karşılık gelen grafiği sağa ve sola hareket ettirebilirsiniz.
- ***Ek bilgi***. Grafiğin sağ tarafında en düşük, en yüksek ve ortalama rakım, eğim ve hız hakkında veriler bulunur. Grafiğin altında mesafe işaretlerini görebilirsiniz.


### Genel Bakış Bilgileri {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bağlam iz menüsü Grafikler Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bağlam iz menüsü Grafikler iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

**Genel Bakış** sekmesinde, aşağıdaki gibi parametreleri görebilirsiniz:

- *<Translate android="true" ids="distance"/>*. İz üzerinde kat edilen toplam mesafenin veya izin kendisinin uzunluğunun toplamı.
- *<Translate android="true" ids="shared_string_time_span"/>*. İzin başlangıç ve bitiş noktaları arasındaki zaman aralığı.
- *<Translate android="true" ids="shared_string_start_time"/>* İzin kaydının tam olarak başladığı zaman.
- *<Translate android="true" ids="shared_string_end_time"/>*. İz kaydının bitiş zamanı.

Etkin **düğmeler** aşağıdaki gibi eylemlere erişim sağlar:

- **<Translate android="true" ids="analyze_on_map"/>** düğmesi, iz için [İzi haritada analiz et menüsünü](../tracks/index.md#analyze-track-on-map) açar.
- **<Translate android="true" ids="shared_string_options"/>** düğmesi, aşağıdaki seçenekleri içeren bir menü açar:

  - *Düzenle* izi [Rota planla aracında](../../plan-route/index.md) açar.
  - *Sil* seçilen iz öğesini kaldırmanıza olanak tanır.
  - *Aralığı böl* iz için [Aralığı böl işlevini](#split-interval) açar.


### Hız {#speed}

:::note Yalnızca kaydedilen izler
Bu sekme yalnızca kaydedilen izlerde görünür olabilir. Bu tür izlerdeki noktaların **[`speed`](../../plugins/trip-recording#recorded-gpx-file)** etiketleri bulunur.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz grafiği Hız Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz grafiği Hız iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

**Hız** grafiği aşağıdaki metrikleri gösterir:

- *<Translate android="true" ids="average_speed"/>*. Yolculuk sırasındaki ortalama hızı gösterir.
- *<Translate android="true" ids="max_speed"/>*. Yolculuk sırasındaki maksimum hızı gösterir.
- *<Translate android="true" ids="moving_time"/>*. Yolculuk sırasındaki toplam hareket süresini gösterir.
- *<Translate android="true" ids="distance_moving"/>*. Yolculuğun ayarlanmış mesafesini gösterir.


### Rakım {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz grafiği rakım Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz grafiği rakım iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

**Rakım** grafiği aşağıdaki metrikleri gösterir:

- *<Translate android="true" ids="average_altitude"/>*. Rota üzerindeki ortalama deniz seviyesinden yüksekliği gösterir.
- *<Translate android="true" ids="altitude_range"/>*. Rota üzerinde kaydedilen en yüksek ve en düşük rakım.
- *<Translate android="true" ids="altitude_ascent"/>*. Rota boyunca deniz seviyesinden kümülatif rakım kazancı.
- *<Translate android="true" ids="altitude_descent"/>*. Rota boyunca kümülatif rakım kaybı.

**Yükseklik verilerini alın.**
Rota üzerinde *yükseklik bilgisi yoksa*, aşağıdaki yollarla ekleyebilirsiniz:

- *Yükseklik hesapla düğmesi → [Yakındaki yolları kullan](../../plan-route/create-route.md#get-elevation-data)*. Yakındaki yolları ve yükseklik verilerini bulmak için çevrimdışı bir harita kullanır. İzin geometrisini özelleştirmenize olanak tanır.
- [Arazi haritalarını kullan](#calculate-missing-elevation). Yükseklik verilerini elde etmek için arazi haritalarını kullanır. İz geometrisi değişmeden kalır.


### Eksik Yüksekliği Hesapla {#calculate-missing-elevation}

:::note OsmAnd Pro aboneliği
Çevrimdışı yükseklik hesaplama özelliği yalnızca [**OsmAnd Pro aboneleri**](../../purchases/android.md#pro-features) <ProFeature /> için kullanılabilir.
:::

<InfoAndroidOnly />

Bu özellik, [Arazi harita verilerine](../../plugins/topography.md#download-maps) dayanarak 70 derece kuzey enlemi ile 70 derece güney enlemi arasındaki herhangi bir arazi için GPX izi için çevrimdışı yükseklik profilini hesaplamanıza olanak tanır. *Arazi haritaları (3D) daha önce indirilmiş olmalıdır*.

1. Gerekli bölge için [Arazi haritalarını (3D)](../../plugins/topography.md#download-maps) indirin.
2. İz herhangi bir rakım verisi içermiyorsa, iz bağlam menüsüne gidin (*İz bağlam menüsü → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), *Arazi haritalarını kullan*'ı seçin ve hesaplamadan sonra arazi verilerine dayalı bir iz grafiği elde edeceksiniz.

    ![İz grafiği rakım Android](@site/static/img/personal/tracks/calculate_elevation_2.png) ![İz grafiği rakım Android](@site/static/img/personal/tracks/calculate_elevation_10.png) <!--![İz grafiği rakım Android](@site/static/img/personal/tracks/calculate_elevation_4.png) ![İz grafiği rakım Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. [Rota planla](../../plan-route/create-route.md#graph) aracını kullanarak *Düz çizgi* yöntemiyle bir rota oluşturuyorsanız ve grafikte yükseklik verisi yoksa, şunları yapmanız gerekir:
    - *Yükseklik verilerini al*'a dokunun, ardından *Arazi haritalarını kullan*'ı seçin.
    - Hesaplamadan sonra, arazi verilerine dayalı rotanızın tam Rakım/Eğim grafiğini elde edeceksiniz.

  ![İz grafiği rakım Android](@site/static/img/personal/tracks/calculate_elevation_9.png) ![İz grafiği rakım Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Noktalar / Ara Noktalar {#points--waypoints}

Ara noktalar, harita üzerinde bulunan nokta türlerinden biridir. Genel olarak, GPX dosyalarının bir parçası olan iz noktaları olabilirler. Ayrıntılı bir açıklama [haritadaki noktalar](../../map/point-layers-on-map.md) makalesinde mevcuttur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bağlam iz menüsü Noktalar Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bağlam iz menüsü Noktalar iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

Bu *Noktalar* sekmesinde:

- [İz noktaları verilerini gösterin](#display-custom-gpx-tags) ve iz noktalarınızı (ara noktalar ve rota noktaları) değiştirin, [silin ve](#points--waypoints) ize ara noktalar ekleyin.
- [Nokta grubu (klasör) oluşturun ve değiştirin](#waypoint-groups).


### İze Ara Nokta Ekle {#add-waypoint-to-a-track}

Ara noktalar, o anda kaydedilen ize veya [*Yerlerim → İzler listesi*](../../personal/tracks/manage-tracks.md) içindeki herhangi bir ize eklenebilir:

- [Harita bağlam menüsünü](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint) kullanın.
  - Seçilen iz haritada etkinleştirilirse ara noktalar otomatik olarak görüntülenir.
  - Bir ara nokta oluşturmak için haritada herhangi bir seçilen konuma [uzun dokunun](../../map/map-context-menu.md#select-any-point-long-tap).
  - Açılan [harita bağlam menüsünde](../../map/map-context-menu.md#-add--edit-track-waypoint) ara nokta hakkında bilgi ayarlayabilirsiniz.

- İz bağlam menüsünün [Ara Nokta Ekle](#points--waypoints) düğmesini kullanın.

- Bir ara noktayı [Hızlı eylem](../../widgets/quick-action.md#my-places) düğmesi olarak ekleyin.

#### Ara Nokta Oluştur {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ara nokta ekle](@site/static/img/personal/tracks/add_waypoint_1_andr.png) ![Ara nokta ekle](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ara nokta ekle](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png) ![Ara nokta ekle](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Ara nokta oluşturma ekranını açmak için *Ara Nokta Ekle* düğmesine dokunun (bu ekran [Favori Bağlam menüsüyle](../../personal/favorites.md#create) tanıdıktır).

1. Ara noktanın *Adını*, seçilen konumun *Adresini* ve bunun için *Açıklamasını* (isteğe bağlı) **ekleyin**.
2. Grup **seçin**.

    - Daha önce oluşturulmuş grup kategorilerini seçin veya yeni bir tane oluşturun.
    - Yeni ara nokta grubu için bir ad ve görünüm oluşturun. Buna uygulamada *yeni kategori* de denir.
    - **Simge**, **simge rengi** ve **şekil**, gruba eklenen tüm yeni ara noktalar için kullanılacaktır.

3. **Görünüm** ayarı:

    - Tüm POI kategorileri simgelerinin listesinden bir [**simge**](../../personal/favorites.md#favorite-icons) seçin.
    - Simgenin **Rengini** seçin.
    - Ardından simgenin **Şeklini** seçin: *Daire, Sekizgen, Kare*.

4. Gerekirse başka bir noktayı bununla **değiştirin**.


### Gruplarla Eylemler {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz menüsü Grup menüsü Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz menüsü Grup menüsü iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

*Üç nokta menüsü* ( &#8285; ) ara nokta *Grup menüsünü* açar.

**Eylemler:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Grup ara noktalarını haritada görüntülemenize veya görüntülememenize olanak tanır. Veya grup ara noktalarını haritada görüntülemek veya atlamak için [ekran düğmesini](#points--waypoints) kullanabilirsiniz.
- **<Translate android="true" ids="shared_string_rename"/>** - Grubun adını değiştirin.
- **<Translate android="true" ids="change_default_appearance"/>** - Bir ara nokta grubu için görüntüleme seçeneklerini değiştirin.
- **<Translate android="true" ids="add_group_to_markers"/>** veya **Kaldır** (*yalnızca Android*) - Grup ara noktalarını [Harita işaretleyicileri](../../personal/markers.md) listesine taşıyın.
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*yalnızca Android*) - Grup ara noktalarını [Favorilere](../../personal/favorites.md) taşıyın.
- **<Translate android="true" ids="add_to_navigation"/>** (*yalnızca Android*) - Ara noktalar arasında bir rota oluşturur. İlk ve son noktalar rotanın başlangıcı ve bitişi olur, geri kalanlar ise ara noktalara dönüştürülür.
- **<Translate android="true" ids="shared_string_delete"/>** - Bir ara nokta grubunu silin.


### Ara Nokta Grupları {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![İz menüsü Grup haritası Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![İz menüsü Grup haritası Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz menüsü Grup haritası iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![İz menüsü Grup haritası iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Harita üzerindeki grupların görünürlüğünü yönetin: bir izi gizlerseniz, tüm grup da gizlenir.

Harita üzerindeki izin bağlam menüsünün sağ üst köşesindeki düğmeyi kullanarak grup ara noktalarını açıp kapatabilirsiniz. Ona dokunun ve gerekli eylemi seçin.

### Özel GPX Etiketlerini Görüntüle {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Noktalar](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Noktalar](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Ara nokta etiketlerinin örnek XML kodu</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Rota noktası etiketlerinin örnek XML kodu</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Etiketler:**

| Parametre | Açıklama |
| --- | --- |
| `lat` | **Enlem**, bir konumu belirleyebileceğiniz coğrafi koordinatlardan biridir. |
| `lon` | **Boylam**, bir konumu belirleyebileceğiniz diğer coğrafi koordinatlardan biridir. |
| `time` | **Zaman damgası**, noktanın kaydedildiği tarih ve saattir. |
| `name` | **Ad**, noktanın adıdır. Herhangi bir karakter kullanılabilir. |
| `desc` | **Açıklama**, nokta hakkında ek bilgi içerir. |
| `type` | **Grup seç**, bu ara noktanın kaydedildiği OsmAnd klasörünün adıdır. |
| `cmt` | **Yorum**, bir nokta hakkında kısa bir yorumdur. |
| `link` | **Bağlantı**, herhangi bir kaynağa giden bir bağlantıdır. |
| `ele` | **Yükseklik**, bir noktanın yüksekliğidir. |


**Uzantılar:**

| Uzantı | Açıklama |
| --- | --- |
| `osmand:icon` | **Simge**, seçtiğiniz simgenin adıdır. |
| `osmand:color` | **Renk**, HEX formatındaki renktir. |
| `osmand:background` | **Arka plan**, simgenin şeklidir, örneğin daire, sekizgen veya kare. |
| `osmand:country` | **Ülke**, ülkenin adıdır. |
| `osmand:address` | **Adres**, adrestir. |
| `osmand:postcode` | **Posta kodu**, posta kodudur. |
| `osmand:telephone` | **Telefon**, telefon numarasıdır. |
| `osmand:state` | **Eyalet**, eyalet adıdır. |
| `osmand:start_date` | **Başlangıç tarihi**, bir noktanın program verisidir. |

Ara noktalar, izle birlikte [GPX dosyasına](../../../technical/osmand-file-formats/osmand-gpx.md) kaydedilir. Bu ara noktaların her birinin kendi açıklama etiketleri kümesi vardır. OsmAnd uygulamasında doğrudan düzenlenebilen ara noktaların açıklamasıyla doğrudan ilgili tüm etiketler bu bölümde listelenmiştir.
Ara nokta açıklamasını değiştirmek için aşağıdaki yollardan birini kullanabilirsiniz:

1. Gerekli izi *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi* listesinde bulun.
2. İz [görünür izler listesine](../tracks/index.md#display-tracks-on-the-map) dahil edilmişse, harita üzerindeki ize dokunun.
3. Gerekli ara nokta haritada [görünürse](../../personal/tracks/manage-tracks.md#track-menu), ona dokunun.

    Ardından [İz Bağlam menüsünde](./track-context-menu.md) *noktalar*, mevcut ara noktaları içeren gerekli klasörün alanı ve aradığınız ara nokta üzerine dokunun. *Eylemler →* **GPX ara noktasını düzenle** menüsünü seçin ve değişiklikleri yapın. Uygulamada bir noktanın oluşturulma tarihini, *zaman damgasını* değiştiremezsiniz.

Çalışma saatleri veya telefon numarası gibi ek bilgileri açıklayan **Tesis etiketleri**, bu bilgileri OpenStreetMap verilerinden veya POI'yi oluştururken girdiğiniz verilerden alır. Bu tür etiketleri ve [özel etiketleri](#display-custom-gpx-tags) yalnızca cihazınızdaki herhangi bir metin düzenleyiciyle açabileceğiniz GPX dosyasının kodunda düzenleyebilirsiniz.


## Aralık Böl {#split-interval}

<InfoAndroidOnly />

İzi mesafe ve zaman gibi aralıklara bölebilir ve analiz edebilirsiniz.
İzi mesafeye veya zaman aralığına göre bölün.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![İz bölme aralığı ekranı Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![İz bölme aralığı ekranı zaman Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## GPS Filtresi {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filtre ekranı Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Bu filtre, gereksiz veya yanlış verileri hariç tutarak iz istatistiklerinizi iyileştirmenize olanak tanır. İz parametrelerinize uymayan iz noktalarını filtreleyebilir ve sonuç olarak daha doğru bir grafik ve görsel rota çizgisi elde edebilirsiniz. Yumuşatma, Hız, Rakım ve GPS Hassasiyeti gibi filtrelerle değişiklikler yapabilirsiniz, bu da filtrelenmiş noktaları mevcut izden gizler. Ayrıca, İstatistikler menüsünde, değişikliklerinizi kaydetmeden önce grafikte nasıl görüntülendiğini kontrol edebilirsiniz. Ayrıca, orijinal izi kaydetmeden bu filtrede izinizin *Orijinale sıfırla* ve *Kopyasını kaydet* seçeneklerini de kullanabilirsiniz.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Android GPS Filtre uygulaması sayfası aşağıdakileri içerir:

- Kaydedilmiş bir izi ve ekstra bir düğmeyi içeren bir harita, *İz konumum* (izi haritanın ortasına hizalar).
- Üstte *Yenile* ve *Menü* düğmeleri (*Menü*, sayfanın altındaki *Eylem* alanını açar).
- *Filtre*, *İstatistikler*, *Eylem* blokları.


### Filtre Menüsü {#filter-menu}

Bu menüde, filtreleri kullanarak izinizin *Yumuşatma*, *Hız*, *Rakım* veya *GPS hassasiyeti* gibi bazı parametrelerini değiştirebilirsiniz. Menü bir *Noktalar kısmı* ve bir *Eylemler kısmı* olarak ikiye ayrılmıştır.

| ***Noktalar*** |
|:------------|
|Bu bölüm, filtrelemeden sonraki nokta sayısını ve filtreler kullanılmadan önce seçilen iz üzerindeki toplam nokta sayısını gösterir.|
|![GPS filtre ekranı nokta sayıları Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Eylemler*** |
|*Yumuşatma*. Noktalar arasındaki eşik mesafeyi ayarlar. İz noktaları, son görünür noktadan en az bu kadar uzakta olanlar gizlenir. Birbirinden filtre tarafından seçilen mesafeden daha az mesafede olan iz üzerindeki tüm noktalar gizlenecektir. İz noktaları son görünür noktadan sayılır. Yüksek eşiklerin iz geometrisini aşırı basitleştirebileceğini unutmayın.|
|![GPS filtre yumuşatma sayıları Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Hız*. Yalnızca seçilen hız aralığına karşılık gelen iz noktaları grafikte ve haritada görüntülenir, diğerleri gizlenir.|
|![GPS filtre hız sayıları Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Rakım*. Yalnızca seçilen rakım aralığına karşılık gelen iz noktaları grafikte ve haritada görüntülenir, diğerleri gizlenir.|
|![GPS filtre rakım sayıları Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS hassasiyeti*. HDOP için izin verilen maksimum değeri ayarlar. Daha yüksek değere sahip noktalar gizlenir.|
|![GPS filtre hassasiyet sayıları Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### İstatistikler {#statistics}

![GPS filtre grafiği Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

İstatistikler sekmesi, **değiştirilmiş** iz hakkında bilgi gösterir, yani filtrelenmiş değerler olmadan iz. İstatistik bloklarında ve grafik verilerinde görüntülenir.

- *Veri* bölümü, [Filtre menüsüne](#filter-menu) benzer istatistikler gösterir.
- *Grafik* bölümü, parametrelere göre üç tür grafik gösterir: Genel Bakış, Rakım ve Hız. Bu işlevsellik, [iz Grafiğinin](#altitude--speed-graphs) bir kopyasıdır.

### Eylemler {#actions}

![GPS filtre eylemi Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Eylemler listesi **Filtre** veya **İstatistikler** sekmesinin altında mevcuttur. OsmAnd, izde yapılan tüm değişiklikleri dosyayı güncellemeden uygular, ancak değişiklikleri manuel olarak kaydedebilirsiniz.

- *<Translate android="true" ids="reset_to_original"/>*. Parametreleri orijinal durumlarına döndürmenize olanak tanır.
- *<Translate android="true" ids="save_as_copy"/>*. İzi yeni bir iz olarak kaydetmenize olanak tanır.
- *<Translate android="true" ids="save_changes_into_file"/>*. İzi yeni parametrelerle yeniden yazmanıza olanak tanır.


## İlgili Makaleler {#related-articles}

- [GPX izleri](../../personal/tracks/manage-tracks.md)
- [Haritadaki izler](./track-context-menu.md)
- [İze göre navigasyon](../../navigation/setup/gpx-navigation.md)
- [Rota planla](../../plan-route/index.md)
- [Gezi Kaydı eklentisi](../../plugins/trip-recording.md)
- [Haritada Analiz Et](../index.md#analyze-track-on-map)

> *Son güncelleme: Kasım 2024*