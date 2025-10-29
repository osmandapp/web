---
source-hash: 32ef17e9ab14ee378a3b47d0088c5f7a17b9d5af0af457980c95c99a7fa61a14
sidebar_position: 4
title:  Rota Bağlam Menüsü
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

*Rota bağlam menüsü*, *[Rota](../../personal/tracks/index.md)* hakkında hem metin hem de [grafik](#altitude--speed-graphs) biçiminde bilgi sağlar. Rota ile ilgili bilgi eklemenize, değişiklik yapmanıza, düzenlemenize ve çeşitli başka eylemler gerçekleştirmenize olanak tanır. *Rota bağlam menüsüne* harita üzerinde gerekli rotaya dokunarak veya *[Yerlerim](../../personal/myplaces.md)* menüsünü (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*) kullanarak erişebilirsiniz. Rota klasörünü açmanız ve istediğiniz rotayı üzerine dokunarak seçmeniz gerekebilir.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Rota Genel Bakışı {#track-overview}

Bir rotaya dokunduğunuzda, *Rota bağlam menüsünün* ilk ekranı olan *Genel Bakış sekmesi* açılır. Bu sekmede, seçilen rota hakkında bir özet (*[Bilgi paneli](#info-panel)*) bulabilir ve *[Rota eylemleri menüsünü](#track-actions)* kullanarak rotayla ilgili en yaygın eylemleri gerçekleştirebilirsiniz. Genel Bakış sekmesini yukarı çekerseniz rotanız hakkında [açıklama ve hizmet bilgilerini](#description-and-info) görebilirsiniz.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Bilgi Paneli {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Bilgi panelinin üst kısmında, rotanın adını ve onu işaretlemek için kullanılan sembolü (*yalnızca Android*) görebilirsiniz. Rota adı, [Seçenekler menüsündeki](#options) yeniden adlandırma işlevi kullanılarak değiştirilebilir. Bazı rotalar (çoğunlukla *[Seyahat rehberleri](../../plan-route/travel-guides.md#manage-as-gpx-track)*), *Rota adı* altında kısa bir *[açıklamaya](#description-and-info)* ve (veya) bir resme sahip olabilir. Bir ok, [Konumumdan](../../map/interact-with-map.md#my-location-and-zoom) *rotanın en yakın noktasına olan yönü* gösterir.  

Bilgi paneli ayrıca aşağıdakiler hakkında bilgi sağlar:

- *<Translate android="true" ids="distance"/>*. Rota uzunluğunu gösterir.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Yolculuk sırasındaki toplam tırmanış ve iniş toplamını gösterir.
- *<Translate android="true" ids="altitude_range"/>*. Bir rotadaki minimum ve maksimum yüksekliği gösterir.  

:::note
Rotanız OsmAnd veya başka bir takip uygulamasıyla oluşturulduysa (yani noktalarında [`zaman` ve `hız`](../../plugins/trip-recording#recorded-gpx-file) etiketleri varsa), bilgi paneli ayrıca *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) veya *<Translate ios="true" ids="total_time"/>* (*iOS*) (rotanın başlangıç ve bitiş noktaları arasındaki süre), *<Translate android="true" ids="shared_string_time_moving"/>* (sürüş sırasındaki toplam süre) hakkında bilgi içerecektir.
:::  

### Rota Eylemleri {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Göster / gizle** düğmeleri. Rotanın harita üzerindeki görünürlüğünü değiştirir.
- [Görünüm](./appearance.md). Rotanızın görünümünü özelleştirin.
- **Rotayı düzenle** (*Android*). Rotayı [Rota planlama aracında](../../plan-route/create-route.md) açar.
- **Dışa Aktar** (*iOS*). [Bir rotayı dışa aktarmanıza](../../personal/tracks/manage-tracks.md#export) olanak tanır.
- **Yol tarifleri**. Rotayı *[Navigasyon](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)* modunda açar.


### Seçenekler {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

**Seçenekler** menüsü, seçilen rotayı çeşitli araçlar ve ayarlar ile yönetmenize ve değiştirmenize olanak tanır.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Rotanın harita üzerindeki görünürlüğünü kontrol eder.
- **<Translate android="true" ids="shared_string_appearance"/>** – Rotanın rengini, genişliğini ve şeffaflığını özelleştirmek için [Görünüm menüsünü](../tracks/appearance.md) açar.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – [Rota ile navigasyonu](../../navigation/setup/gpx-navigation.md) başlatır, rotanızı seçilen rotayla hizalar.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Yalnızca Android*) – Boşlukları doldurmak için rota segmentlerini birleştirir.
- **<Translate android="true" ids="analyze_on_map"/>**. Rotanın yüksekliğini, hızını ve mesafesini incelemek için [Haritada analiz et](../tracks/index.md#analyze-track-on-map) aracını açar.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Yalnızca Android*) - Rotayı zaman veya mesafe [aralıklarına](./track-context-menu.md#analyze-by-intervals) göre analiz eder.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Seçilen rotayı GPX formatında dışa aktarır.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - Seçilen rotayı OpenStreetMap'e [yükler](../../plugins/osm-editing.md#upload-gps-track).

<br/>

- **<Translate android="true" ids="edit_track"/>** - Rotayı değiştirmek için [Rota planla](../../plan-route/create-route.md) aracını açar.
- **Rotayı çoğalt** (*Yalnızca iOS*) – Rotanın bir kopyasını oluşturur ve kaydeder.
- **<Translate android="true" ids="rename_track"/>** – Rota adını değiştirmeye olanak tanır.
- **<Translate android="true" ids="change_folder"/>** – Rotayı başka bir klasöre taşır veya yeni bir klasör oluşturur.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Yalnızca Android*) - Doğruluğu iyileştirmek için [rotanın noktalarını filtrelemeye](#gps-filter) olanak tanır.
- **<Translate android="true" ids="altitude_correction"/>** (*Yalnızca Android*) - [Yükseklik verilerini almak](#calculate-missing-elevation), [rotanızı yollara bağlamak](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) veya çevrimdışı hesaplamak için (gerekli [Arazi haritaları](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Yalnızca Android*) - Bir GPX rotası kullanarak [konumunuzu simüle eder](../../plugins/development.md#gpx-track-simulation).

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Rotayı siler.


### Açıklama ve Bilgi {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

*Genel Bakış* sekmesinin bu bölümü ***etiket verilerini*** ve ***tüm genel bilgileri*** görüntüler.

- **Açıklama**.  *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) düğmesi kullanılır. `desc` etiketi.

- **Genel**. *GPX dosya boyutu*, *dosya klasörü* ve `time` etiketiyle *oluşturma tarihi* hakkında bilgi içerir.

- **Bilgi**. Etiketler: *Anahtar Kelimeler* - `keywords`, &nbsp;*Bağlantı* - `link`, &nbsp;*Etkinlik* - `activities`.

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


### Rota Etkinlik Türü {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track Activity Type](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track Activity Type](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


OsmAnd'daki *Etkinlik* özelliği, daha fazla analiz ve klasörlerde düzenleme için kaydedilen GPX rotalarını belirli etkinliklerle etiketlemenize olanak tanır.

- [GPX rotaları için etkinlik etiketleri](../../plugins/trip-recording.md#recording-settings). Bir GPX rotası kaydederken, bir etkinlik türü atayabilirsiniz. Bu etkinlik etiketleme, rotaları başlangıçta kategorize etmenize yardımcı olur.
- [Etkinlik filtresi](../../personal/tracks/smart-folder.md#search-filter). Kaydedilen GPX rotalarını etkinliğe göre filtreleyebilirsiniz, bu da bisiklet veya yürüyüş rotaları gibi belirli kayıt türlerini bulmaya odaklanmanızı sağlar.
- [Etkinlik türlerini yönetin](../../personal/tracks/manage-tracks.md#selection-mode). Yerlerim menüsünün Rotalar sekmesindeki seçim modunu kullanarak seçilen klasörler veya rotalar için etkinlik türünü değiştirebilirsiniz.
- **Etkinlik listesi**. Etkinlik kategorileri ve grupları OsmAnd'ın kaynaklarında tanımlanmıştır. Geliştiriciler ve katkıda bulunanlar için etkinlik listesi, mevcut etkinlik gruplarını ve türlerini detaylandıran [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) adresinde yapılandırılmış bir formatta tutulur.


## Yükseklik / Hız Grafikleri {#altitude--speed-graphs}

*<Translate android="true" ids="shared_string_gpx_track"/>* sekmesinde, rota hakkında grafik biçiminde bilgi bulabilirsiniz. Anahtarı kullanarak grafikte hangi verilerin görüntüleneceğini seçebilirsiniz: *[<Translate android="true" ids="altitude"/>](#altitude)* hakkındaki ayrı veriler, *[Hız](#speed)* hakkındaki veriler (bu seçenek yalnızca kaydedilmiş rotalar için kullanılabilir) veya hepsini birlikte görüntüleme (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Grafikle etkileşim:

- ***Grafiğe bir nokta yerleştirin***. Bir rotanın belirli bir noktasındaki bilgileri görmek isterseniz, grafiğin herhangi bir yerine dokunabilirsiniz ve değerlerle birlikte bir işaretçi görünecektir. Aynı zamanda, harita üzerinde o rotadaki konumu gösteren mavi bir işaretçi belirecektir.
- ***Yakınlaştır / Uzaklaştır***. Daha ayrıntılı bir görünüm için yakınlaştırmak ve uzaklaştırmak için [iki parmak hareketlerini](../../map/interact-with-map.md#gestures) kullanabilirsiniz. Yakınlaştırdıktan sonra, rotada ileri ve geri hareket etmeye karşılık gelen grafiği sağa ve sola hareket ettirebilirsiniz.
- ***Ek bilgi***. Grafiğin sağ tarafında en düşük, en yüksek ve ortalama yükseklik, eğim ve hız hakkında veriler bulunur. Grafiğin altında mesafe işaretlerini görebilirsiniz.


### Genel Bakış Bilgileri {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

**Genel Bakış** sekmesinde aşağıdaki parametreleri görebilirsiniz:

- *<Translate android="true" ids="distance"/>*. Rotada kat edilen toplam mesafenin toplamı veya rotanın kendi uzunluğu.
- *<Translate android="true" ids="shared_string_time_span"/>*. Rotanın başlangıç ve bitiş noktaları arasındaki zaman aralığı.
- *<Translate android="true" ids="shared_string_start_time"/>* Rotanın kaydının başladığı tam zaman.
- *<Translate android="true" ids="shared_string_end_time"/>*. Rota kaydının bitiş zamanı.

Aktif **düğmeler** aşağıdaki eylemlere erişim sağlar:

- **<Translate android="true" ids="analyze_on_map"/>** düğmesi, rota için [Rotayı analiz et menüsünü](../tracks/index.md#analyze-track-on-map) açar.
- **<Translate android="true" ids="shared_string_options"/>** düğmesi, aşağıdaki seçenekleri içeren bir menü açar:

  - *Düzenle* rotayı [Rota planlama aracında](../../plan-route/index.md) açar.
  - *Sil* seçilen rota öğesini kaldırmanıza olanak tanır.
  - *Aralığı böl* rota için [Aralığı böl işlevini](#analyze-by-intervals) açar.


### Hız {#speed}

:::note Yalnızca kaydedilmiş rotalar
Bu sekme yalnızca kaydedilmiş rotalarda görünür olabilir. Bu tür rotalardaki noktalar **[`hız`](../../plugins/trip-recording#recorded-gpx-file)** etiketlerine sahiptir.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

**Hız** grafiği aşağıdaki metrikleri görüntüler:

- *<Translate android="true" ids="average_speed"/>*. Yolculuk sırasındaki ortalama hızı gösterir.
- *<Translate android="true" ids="max_speed"/>*. Yolculuk sırasındaki maksimum hızı gösterir.
- *<Translate android="true" ids="moving_time"/>*. Yolculuk sırasındaki toplam hareket süresini gösterir.
- *<Translate android="true" ids="distance_moving"/>*. Yolculuğun ayarlanmış mesafesini gösterir.


### Yükseklik {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

**Yükseklik** grafiği aşağıdaki metrikleri görüntüler:

- *<Translate android="true" ids="average_altitude"/>*. Rota üzerindeki ortalama deniz seviyesinden yüksekliği gösterir.
- *<Translate android="true" ids="altitude_range"/>*. Rota üzerinde kaydedilen en yüksek ve en düşük yükseklik.
- *<Translate android="true" ids="altitude_ascent"/>*. Rota boyunca deniz seviyesinden kümülatif yükseklik artışı.
- *<Translate android="true" ids="altitude_descent"/>*. Rota boyunca kümülatif yükseklik kaybı.

**Yükseklik verilerini al.**  
Rota üzerinde *yükseklik bilgisi yoksa*, aşağıdaki yollarla ekleyebilirsiniz:

- *Yükseklik hesapla düğmesi → [Yakındaki yolları kullan](../../plan-route/create-route.md#get-elevation-data)*. Yakındaki yolları ve yükseklik verilerini bulmak için çevrimdışı bir harita kullanır. Rotanın geometrisini özelleştirmenize olanak tanır.
- [Arazi haritalarını kullan](#calculate-missing-elevation). Yükseklik verilerini elde etmek için arazi haritalarını kullanır. Rota geometrisi değişmeden kalır.


### Eksik Yüksekliği Hesapla {#calculate-missing-elevation}

:::note OsmAnd Pro aboneliği
Çevrimdışı yükseklik hesaplama özelliği yalnızca [**OsmAnd Pro aboneleri**](../../purchases/android.md#pro-features) <ProFeature /> için kullanılabilir.
:::

<InfoAndroidOnly />

Bu özellik, 70 derece kuzey enlemi ile 70 derece güney enlemi arasındaki herhangi bir arazi için GPX rotasının yükseklik profilini çevrimdışı olarak hesaplamanıza olanak tanır, [Arazi haritası verilerine](../../plugins/topography.md#download-maps) dayanarak. *Arazi haritaları (3D) daha önce indirilmiş olmalıdır*.

1. Gerekli bölge için [Arazi haritalarını (3D)](../../plugins/topography.md#download-maps) indirin.
2. Rota herhangi bir yükseklik verisi içermiyorsa, rota bağlam menüsüne gidin (*Rota bağlam menüsü → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), *Arazi haritalarını kullan*'ı seçin ve hesaplamadan sonra arazi verilerine dayalı bir rota grafiği elde edeceksiniz.  

    ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. *Düz çizgi* yöntemini kullanarak [Rota planla](../../plan-route/create-route.md#graph) aracıyla bir rota oluşturuyorsanız ve grafikte yükseklik verisi yoksa, şunları yapmanız gerekir:
    - *Yükseklik verilerini al*'a dokunun, ardından *Arazi haritalarını kullan*'ı seçin.
    - Hesaplamadan sonra, arazi verilerine dayalı rotanızın tam Yükseklik/Eğim grafiğini elde edeceksiniz.  

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Noktalar / Yol Noktaları {#points--waypoints}

Yol noktaları, haritada bulunan nokta türlerinden biridir. Genel olarak, GPX dosyalarının bir parçası olan rota noktaları olabilirler. Ayrıntılı bir açıklama [haritadaki noktalar](../../map/point-layers-on-map.md) makalesinde mevcuttur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

Bu *Noktalar* sekmesinde:

- [Rota noktaları verilerini göster](#display-custom-gpx-tags) ve rota noktalarınızı (yol noktaları ve rota noktaları) değiştirin, [silin ve](#points--waypoints) rotaya yol noktaları ekleyin.
- [Nokta grubu (klasörü)](#waypoint-groups) oluşturun ve değiştirin.


### Rotaya Yol Noktası Ekle {#add-waypoint-to-a-track}

Yol noktaları, o anda kaydedilen rotaya veya [*Yerlerim → Rotalar listesi*](../../personal/tracks/manage-tracks.md) içindeki herhangi bir rotaya eklenebilir:

- [Harita bağlam menüsünü](../../map/map-context-menu.md#-add--edit-track-waypoint) kullanın.
  - Seçilen rota haritada etkinleştirilmişse yol noktaları otomatik olarak görüntülenir.
  - Bir yol noktası oluşturmak için haritada herhangi bir seçilen konuma [uzun dokunun](../../map/map-context-menu.md#select-any-point-long-tap).
  - Açılan [harita bağlam menüsünde](../../map/map-context-menu.md#-add--edit-track-waypoint) yol noktası hakkında bilgi ayarlayabilirsiniz.

- Rota bağlam menüsünün [Yol Noktası Ekle](#points--waypoints) düğmesini kullanın.

- Bir yol noktasını [Hızlı eylem](../../widgets/quick-action.md#my-places) düğmesi olarak ekleyin.

### Yol Noktası Oluştur {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Yol noktası oluşturma ekranını açmak için *Yol Noktası Ekle* düğmesine dokunun (bu ekran [Favori Bağlam menüsüyle](../../personal/favorites.md#create) tanıdıktır).

1. Yol noktasının *Adını*, seçilen konumun *Adresini* ve *Açıklamasını* (isteğe bağlı) **ekleyin**.
2. Grup **seçin**.

    - Daha önce oluşturulmuş grup kategorilerini seçin veya yeni bir tane oluşturun.
    - Yeni yol noktası grubu için bir ad ve görünüm oluşturun. Buna uygulamada *yeni kategori* de denir.
    - **Simge**, **simge rengi** ve **şekil**, gruba eklenen tüm yeni yol noktaları için kullanılacaktır.

3. **Görünüm** ayarı:

    - Tüm POI kategorileri simgeleri listesinden bir [**simge**](../../personal/favorites.md#favorite-icons) seçin.
    - Simgenin **Rengini** seçin.
    - Ardından simgenin **Şeklini** seçin: *Daire, Sekizgen, Kare*.

4. Gerekirse başka bir noktayı bununla **değiştirin**.  


### Gruplarla Eylemler {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

*Üç nokta menüsü* ( &#8285; ) yol noktası *Grup menüsünü* açar.

**Eylemler:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Grup yol noktalarını haritada görüntülemenize veya görüntülememenize olanak tanır. Veya grup yol noktalarını haritada görüntülemek veya atlamak için [ekran düğmesini](#points--waypoints) kullanabilirsiniz.
- **<Translate android="true" ids="shared_string_rename"/>** - Grubun adını değiştirin.
- **<Translate android="true" ids="change_default_appearance"/>** - Bir yol noktası grubunun görüntüleme seçeneklerini değiştirin.
- **<Translate android="true" ids="add_group_to_markers"/>** veya **Kaldır** (*Yalnızca Android*) - Grup yol noktalarını [Harita işaretçileri](../../personal/markers.md) listesine taşıyın.
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Yalnızca Android*) - Grup yol noktalarını [Favorilere](../../personal/favorites.md) taşıyın.
- **<Translate android="true" ids="add_to_navigation"/>**  (*Yalnızca Android*) - Yol noktaları arasında bir rota oluşturur. İlk ve son noktalar rotanın başlangıcı ve bitişi olur, diğerleri ara noktalara dönüştürülür.
- **<Translate android="true" ids="shared_string_delete"/>** - Bir yol noktası grubunu silin.


### Yol Noktası Grupları {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Grupların harita üzerindeki görünürlüğünü yönetin: bir rotayı gizlerseniz, tüm grup da gizlenecektir.  

Harita üzerindeki rotanın bağlam menüsünün sağ üst köşesindeki düğmeyi kullanarak grup yol noktalarını haritada açıp kapatabilirsiniz. Üzerine dokunun ve gerekli eylemi seçin.

### Özel GPX Etiketlerini Görüntüle {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Yol Noktası etiketlerinin örnek XML kodu</summary>

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
| `lon` | **Boylam**, bir konumu belirleyebileceğiniz coğrafi koordinatlardan bir diğeridir. |
| `time` | **Zaman damgası**, noktanın kaydedildiği tarih ve saattir. |
| `name` | **Ad**, noktanın adıdır. Herhangi bir karakter kullanılabilir.  |
| `desc` | **Açıklama**, nokta hakkında ek bilgi içerir. |
| `type` | **Grup seç**, bu yol noktasının kaydedildiği OsmAnd klasörünün adıdır. |
| `cmt` | **Yorum**, bir nokta hakkında kısa bir yorumdur. |
| `link` | **Bağlantı**, herhangi bir kaynağa bağlantıdır. |
| `ele` | **Yükseklik**, bir noktanın yüksekliğidir. |


**Uzantılar:**  

| Uzantı | Açıklama |
| --- | --- |
| `osmand:icon` | **Simge**, seçtiğiniz simgenin adıdır. |
| `osmand:color` | **Renk**, HEX formatındaki renktir.  |
| `osmand:background` | **Arka plan**, simgenin şeklidir, örneğin daire, sekizgen veya kare. |
| `osmand:country` | **Ülke**, ülkenin adıdır.  |
| `osmand:address` | **Adres**, adrestir.  |
| `osmand:postcode` | **Posta kodu**, posta kodudur.  |
| `osmand:telephone` | **Telefon**, telefon numarasıdır.  |
| `osmand:state` | **Eyalet**, eyalet adıdır.  |
| `osmand:start_date` | **Başlangıç tarihi**, bir noktanın program verisidir.  |

Yol noktaları, [GPX dosyasına](../../../technical/osmand-file-formats/osmand-gpx.md) rota ile birlikte kaydedilir. Bu yol noktalarının her birinin kendi açıklama etiketleri kümesi vardır. OsmAnd uygulamasında doğrudan düzenlenebilen yol noktalarının açıklamasıyla doğrudan ilgili tüm etiketler bu bölümde listelenmiştir.  
Yol noktası açıklamasını değiştirmek için aşağıdaki yollardan birini kullanabilirsiniz:
  
1. Gerekli rotayı *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesi* listesinde bulun.
2. Haritada görünür [rotalar listesine](../tracks/index.md#display-tracks-on-the-map) dahil edilmişse, harita üzerindeki rotaya dokunun.
3. Haritada [görünürse](../../personal/tracks/manage-tracks.md#track-menu) gerekli yol noktasına dokunun.  

    Ardından [Rotalar Bağlam menüsünde](./track-context-menu.md) *noktalar*, mevcut yol noktalarıyla gerekli klasörün alanı ve aradığınız yol noktası üzerine dokunun. *Eylemler →* **GPX yol noktasını düzenle** menüsünü seçin ve değişiklikleri yapın. Uygulamada bir noktanın oluşturulma tarihini, *zaman damgasını* değiştiremezsiniz.  

**Tesis etiketleri**, çalışma saatleri veya telefon numarası gibi ek bilgileri açıklayan, POI'ye özgü bu bilgileri OpenStreetMap verilerinden veya POI'yi oluştururken girdiğiniz verilerden alır. Bu tür etiketleri ve [özel etiketleri](#display-custom-gpx-tags) yalnızca cihazınızdaki herhangi bir metin düzenleyiciyle açabileceğiniz GPX dosyasının kodunda düzenleyebilirsiniz.


## Aralıklara Göre Analiz {#analyze-by-intervals}

<InfoAndroidOnly />

![Track split by Android](@site/static/img/personal/tracks/split_by_1.png) 

**Aralıklara Göre Analiz** seçeneği, bir rotayı bölümlere ayırmanıza ve rotanın her parçası için ayrıntılı istatistikleri görüntülemenize olanak tanır. Rotalar ***mesafe***, ***zaman*** veya ***yokuş yukarı/yokuş aşağı*** parametrelerine göre bölünebilir. 

Bu seçeneği açmak için:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → istenen bölme modunu seçin 


### Mesafeye Göre Böl {#split-by-distance}

![Track split by distance tab](@site/static/img/personal/tracks/split_by_2_tab.png) ![Track split by distance map](@site/static/img/personal/tracks/split_by_2_map.png)  

Bu seçenek, bir rotayı sabit mesafe aralıklarına bölmenize ve her segment için ayrıntılı istatistikleri analiz etmenize olanak tanır. Mevcut mesafe aralıkları ***20 m***, ***50 m***, ***100 m***, ***200 m***, ***500 m***, ***1 km***, ***2 km***, ***5 km*** ve ***10 km***'dir. Bir mesafe aralığı seçtikten sonra, rota segment listesi olarak görüntülenir. 

Her segment için görüntüleyebilirsiniz:
- kat edilen mesafe.
- zaman aralığı.
- ortalama, minimum ve maksimum yükseklik.
- tırmanış ve iniş.
- hareket süresi.
- ortalama ve maksimum hız.

Listede herhangi bir segmente dokunduğunuzda, harita görünümü rotanın aralıklarıyla tam rotayı gösterir ve ekranın alt kısmında rota için bağlam menüsünü açar.


### Zamana Göre Böl {#split-by-time}

![Track split by time tab](@site/static/img/personal/tracks/split_by_3_tab.png) ![Track split by time map](@site/static/img/personal/tracks/split_by_3_map.png) 

**Zamana Göre Böl** seçeneği, bir rotayı eşit süre aralıklarına böler. ***1 dk***, ***2 dk***, ***2,5 dk***, ***5 dk***, ***10 dk***, ***15 dk***, ***30 dk*** ve ***60 dk*** arasında seçim yapabilirsiniz. Aralıkların görüntülenme şekli, her segment için sağlanan istatistikler ve haritada görünme şekli [Mesafeye Göre Böl](#split-by-distance) bölümündeki gibidir.


### Yokuş Yukarı/Yokuş Aşağıya Göre Böl {#split-by-uphill-downhill}

![Track split by uphill/downhill tab](@site/static/img/personal/tracks/split_by_4_tab.png) ![Track split by uphill/downhill map](@site/static/img/personal/tracks/split_by_4_map.png) 

Bu seçenek, bir rotayı yükseklik değişikliklerine göre segmentlere böler. Her aralık ***yokuş yukarı***, ***yokuş aşağı*** veya ***düz*** olarak sınıflandırılır. Aralıkların görüntülenme şekli, her segment için sağlanan istatistikler ve haritada görünme şekli de [Mesafeye Göre Böl](#split-by-distance) bölümündeki gibidir.


### Kalp Atış Hızı Metrikleri {#heart-rate-metrics}

![Heart Rate Metrics](@site/static/img/personal/tracks/heart_rate.png)

Bu seçenek, rotanızın her aralığı için ortalama, minimum ve maksimum kalp atış hızı değerlerini (dakikada atış, bpm) görüntülemenize olanak tanır. Kalp atış hızı verileri, rota GPX dosyasından alınır veya bağlı [dış kalp atış hızı sensöründen](https://osmand.net/docs/user/plugins/external-sensors) (BLE) doğrudan kaydedilir. Kalp atış hızı verisi mevcut değilse, bu satır aralık tablosunda gizlenir.

**Not:** Kalp atış hızı verilerini doğrudan OsmAnd'da kaydetmek için *<Translate android="true" ids="shared_string_plugin,external_sensors_plugin_name"/>* aracılığıyla bir BLE kalp atış hızı monitörünü bağlayabilirsiniz.


## GPS Filtresi {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Bu filtre, gereksiz veya yanlış verileri hariç tutarak rota istatistiklerinizi iyileştirmenize olanak tanır. Rota parametrelerinize uymayan rota noktalarını filtreleyebilir ve sonuç olarak bozulma veya kayıt gürültüsü olmadan daha doğru bir grafik ve görsel rota çizgisi elde edebilirsiniz. *Düzeltme*, *Hız*, *Yükseklik* ve *GPS Hassasiyeti* gibi filtrelerle değişiklikler yapabilirsiniz, bu filtreler filtrelenmiş noktaları mevcut rotadan gizler. Ayrıca, *İstatistikler* menüsünde, değişikliklerinizin grafikte nasıl görüntülendiğini kaydetmeden önce kontrol edebilirsiniz. Ayrıca, orijinalini kaydetmeden bu filtrede rotanızın *Orijinale sıfırla* ve *Kopya olarak kaydet* seçeneklerini de kullanabilirsiniz.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Android GPS Filtre uygulaması sayfası aşağıdakileri içerir:  

- Kaydedilmiş bir rota ve ek bir düğme olan *Rotamın konumu* (rotayı haritanın merkezine hizalar) içeren bir harita.
- Üstte *Yenile* ve *Menü* düğmeleri (*Menü*, sayfanın altındaki *Eylem* alanını açar).
- *Filtre*, *İstatistikler*, *Eylem* blokları.  


### Filtre Menüsü {#filter-menu}

Bu menüde, filtreleri kullanarak *Düzeltme*, *Hız*, *Yükseklik* veya *GPS hassasiyeti* gibi rotanızın bazı parametrelerini değiştirebilirsiniz. Menü bir *Noktalar kısmı* ve bir *Eylemler kısmı* olarak ikiye ayrılmıştır.

| ***Noktalar*** |
|:------------|
|Bu kısım, filtrelemeden sonraki nokta sayısını ve filtreler kullanılmadan önce seçilen rotadaki toplam nokta sayısını gösterir.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Eylemler*** |
|*Düzeltme*. Noktalar arasındaki eşik mesafeyi ayarlar. Rota noktaları, son görünür noktadan en az bu mesafede olanlar gizlenir. Filtre tarafından seçilen mesafeden daha az mesafede olan rotadaki tüm noktalar gizlenecektir. Rota noktaları son görünür noktadan sayılır. Yüksek eşiklerin rota geometrisini aşırı basitleştirebileceğini unutmayın.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Hız*. Yalnızca seçilen hız aralığına karşılık gelen rota noktaları grafikte ve haritada görüntülenir, diğerleri gizlenir.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Yükseklik*. Yalnızca seçilen yükseklik aralığına karşılık gelen rota noktaları grafikte ve haritada görüntülenir, diğerleri gizlenir.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS hassasiyeti*. HDOP için izin verilen maksimum değeri ayarlar. Daha yüksek değere sahip noktalar gizlenir.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### İstatistikler {#statistics}

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

İstatistikler sekmesi, **değiştirilmiş** rota hakkındaki bilgileri, yani filtrelenmiş değerler olmadan rotayı görüntüler. İstatistik bloklarında ve grafik verilerinde görüntülenir.
  
- *Veri* kısmı, [Filtre menüsüne](#filter-menu) benzer istatistikleri gösterir.  
- *Grafik* kısmı, parametrelere göre üç tür grafik görüntüler: Genel Bakış, Yükseklik ve Hız. Bu işlev, [rota Grafiğinin](#altitude--speed-graphs) bir kopyasıdır.

### Eylemler {#actions}

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Eylemler listesi **Filtre** veya **İstatistikler** sekmesinin altında mevcuttur. OsmAnd, dosyayı güncellemeden rotada yapılan tüm değişiklikleri uygular, ancak değişiklikleri manuel olarak kaydedebilirsiniz.

- *<Translate android="true" ids="reset_to_original"/>*. Parametreleri orijinal durumlarına döndürmenize olanak tanır.  
- *<Translate android="true" ids="save_as_copy"/>*. Rotayı yeni bir rota olarak kaydetmenize olanak tanır.
- *<Translate android="true" ids="save_changes_into_file"/>*. Rotayı yeni parametrelerle yeniden yazmanıza olanak tanır.  


## İlgili Makaleler {#related-articles}

- [GPX rotaları](../../personal/tracks/manage-tracks.md)
- [Haritadaki rotalar](./track-context-menu.md)
- [Rotaya göre navigasyon](../../navigation/setup/gpx-navigation.md)
- [Rota planla](../../plan-route/index.md)
- [Yolculuk Kayıt eklentisi](../../plugins/trip-recording.md)
- [Haritada analiz et](../tracks/index.md#analyze-track-on-map)