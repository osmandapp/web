---
source-hash: 0012b0b27dc9467a3efde4bc95e7f8d8af48788d2a65da16e21d49538ebd149b
sidebar_position: 10
title:  OsmAnd Development
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

Uygulamanın test fonksiyonları OsmAnd geliştirme eklentisinde toplanmıştır. Bunları kendi sorumluluğunuzda kullanın.

OsmAnd geliştirme eklentisi, uygulamanın yeni özelliklerini denemenize veya OsmAnd'ı test için yapılandırmanıza olanak tanır: navigasyon rotalarını simüle etme, ekran oluşturma performansını kontrol etme vb. Eklenti *geliştiriciler ve deneyimli kullanıcılar* için tasarlanmıştır ve uygulamanın günlük kullanımı için gerekli değildir.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Geliştiriciler ve test kullanıcıları için özel özellikleri etkinleştirmek için:

1. *Ana Menü*'nün Eklentiler bölümünde OsmAnd geliştirme eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
2. Eklentinin [Ayarlar menüsünde](#plugin-settings) gerekli ayarları yapın.
3. Gerekirse **geliştirici widget'larını** etkinleştirin.


## Eklenti Ayarları {#plugin-settings}

:::info bilgi
OsmAnd geliştirme eklentisi ayarları geneldir ve tüm profiller için geçerlidir.
:::

Eklenti ayarlarını açmak için aşağıdaki yollardan birini kullanın:

- *Ana Menü → Eklentiler → OsmAnd geliştirme → Ayarlar*.
- *Ana Menü → [Genel Ayarlar](../personal/global-settings.md) → Profil → OsmAnd geliştirme eklentisi ayarları*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Arazi {#terrain}

- **Gölgelendirme ve eğim için raster [SQLIte formatını](../../technical/osmand-file-formats/osmand-sqlite) kullan** (*Android*). V2 oluşturma motoru kullanıldığında, 3B Arazi haritasından gölgelendirme veya eğimleri hesaplamak yerine, bu amaçla eski format raster haritalarını kullanın. Oluşturmayı önemli ölçüde hızlandırabilir.


### Sorun Giderme {#troubleshooting}

- **Konumunuzu simüle edin** (*Android* / *iOS*). Bir GPX parkuru kullanarak konumu ve hareketi [simüle edin](#gpx-track-simulation).
- **Pil tasarrufu modu** (*Android* / *iOS*). Bu ayar, uygulamaları kullanırken pil gücünden tasarruf etmeye yardımcı olmak için [ekran yenileme hızını](#map-rendering-fps-widget) saniyede 20 kare azaltır.
- **3B konum konum simgelerini kullan** (*iOS*). [Konumum simgesi](../personal/profiles.md#my-location-appearance) için 3B bir simge seçmenize olanak tanır.
- **OBD verilerini simüle et** (*Android*). [OBD tarayıcı](./vehicle-metrics.md) kullanımının simülasyonuna olanak tanır.
- **Performans hata ayıklama bilgisi** (*Android*). Oluşturma ve navigasyon performansını görüntüler.
- **Harita katmanlarını devre dışı bırak** (*Android*). Vektör haritası üzerindeki tüm harita katmanlarını devre dışı bırakır (yeniden başlatma gereklidir).
- **Logcat arabelleği** (*Android*). Uygulamanın ayrıntılı günlüklerini kontrol edin ve paylaşın.
- **Basılan tuş hakkında bildirim göster** (*Android*). Tuş hakkında bir mesaj görüntüler.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Kerteriz, mevcut konumunuzdan hedefinize olan pusula yönüdür. *[Parkur kaydını](../plugins/trip-recording.md)* etkiler.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Başlık, mevcut konumunuzdan gerçek kuzeye doğru olan pusula yönüdür. Bu seçenek varsayılan olarak etkindir. *[Parkur kaydını](../plugins/trip-recording.md)* etkiler.


### Uygulama Testi {#application-testing}

:::caution Yalnızca Android
:::

- **Uygulamanın ilk başlangıcını simüle et**. Uygulamanın ilk başlangıcını gösteren bayrağı ayarlar, diğer tüm ayarları değişmeden bırakır.
- **Sesli komutları test et**. Bir ses seçin ve anonsları çalarak test edin.
- **Şeffaf durum çubuğu**. Harita durum çubuğunun altında görünür hale gelir.
- **Ücretsiz sürüm banner'ını göster**. Ücretli sürümde bile ücretsiz sürüm banner'ını göster.
- **Hata ayıklama bilgilerini göster**. Haritadaki her metnin yerleşimi hakkında grafiksel bilgi görüntüler.
- **Üstte görüntülemeye izin ver**. Harita metinlerinin üst üste görüntülenmesine izin verir.


### Dahili Algoritmalar {#internal-algorithms}

:::caution Yalnızca Android
:::

- **Güvenli mod**. Uygulamayı (daha yavaş) güvenli modda çalıştırın.


### Bellek Ayarları {#memory-settings}

:::caution Yalnızca Android
:::

- **Yönlendirme için ayrılan bellek** seçeneği, uzun rotaları hesaplamak için ayrılan bellek miktarını belirlemenize olanak tanır. Bu seçeneği, *Navigasyon ayarlarında* [Standart yönlendirme A*](../navigation/guidance/navigation-settings.md#development-settings) seçiliyse kullanabilirsiniz.

***Çok uzun rotaların hesaplanması:***

- Daha yüksek bellek tahsisi, diğer uygulamaların performansını etkileyebilir.
- [Yayalar için 50 km'lik rotaların hesaplanması](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Bilgi ve İstatistikler {#info-and-statistics}

:::caution Yalnızca Android
:::

- **Ayrılan bellek**. OsmAnd uygulaması için ayrılan sistem belleğini görüntüler.
- **Toplam yerel bellek**. Orantılı bellek dahil olmak üzere uygulamaya ayrılan toplam yerel bellek miktarını görüntüler.
- **A-GPS bilgisi**. A-GPS verilerinin en son ne zaman indirildiğini gösterir.
- **Gündüz/gece bilgisi**. Bugünün gün doğumu ve gün batımı saatlerini gösterir.
- **Enerji istatistikleri (ortalama 1 / 5 / 15 dakika)**. Dakika başına pil seviyesini (%) ve 1, 5 ve 15 dakikalık aralıklarla ortalama enerji tüketimini (mAh) görüntüler.
- **Oluşturma istatistikleri (ortalama 1 / 5 / 15 dakika)**. Son 1k karedeki FPS, CPU (döşemeler), CPU (boşta kalma süresi) ve CPU (bekleme) ortalamalarını 1, 5 ve 15 dakikalık aralıklarla içeren oluşturma istatistiklerini gösterir.

**Düğme:**

- **Eklenti ayarlarını varsayılana sıfırla**. Tüm eklenti ayarlarını varsayılan değerlerine sıfırlar.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Harita Oluşturma FPS Widget'ı {#map-rendering-fps-widget}

:::info Önemli
OsmAnd geliştirici Widget'ları yalnızca OsmAnd geliştirme eklentisi etkinleştirildiğinde ekrana eklenebilir.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

[FPS Widget'ı](../widgets/info-widgets.md#map-rendering-fps), haritanın ve harita öğelerinin ne kadar hızlı görüntülendiğini ve yenilendiğini gösterir. Sayısal değer saniyedeki kare cinsinden (FPS) belirtilir.


## Kamera Konumu Widget'ları {#camera-position-widgets}

:::info Önemli
OsmAnd geliştirici Widget'ları yalnızca OsmAnd geliştirme eklentisi etkinleştirildiğinde ekrana eklenebilir.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

OsmAnd haritasına gerçekçi bir görünüm kazandırmak ve hem yukarıdan hem de uzaydan çekilen Dünya fotoğraflarıyla eşleştirmek için [Kamera konumu widget'larını](../widgets/info-widgets.md#camera-widgets) kullanabilirsiniz.


### Kamera Eğimi {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Kamera eğimi widget'ı, kameranın (izleyicinin) merkezi görüş vektörü ile Dünya'nın hayali düz zemini arasındaki eğimi gösterir. Varsayılan değer 90 derecedir (eğim yok).

:::note
Kamera eğimi, kamera (izleyici) hareket ettirilerek değiştirilirken, haritadaki merkez nokta (baktığımız yer) aynı kalır. Ona olan mesafe (aslında yakınlaştırma) değişmez.
Aynı zamanda, izleyicinin hayali hareketi nedeniyle, kameradan yüzeye olan mesafe değişir.
:::


### Kamera Yüksekliği {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Kamera Yüksekliği widget'ı, kameranın yüzey seviyesinin üzerindeki yüksekliğini gösterir. Kamera yüksekliği metre / kilometre cinsinden belirtilir.


### Yakınlaştırma Seviyesi {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Widget'ın, üzerine dokunarak değiştirilen iki görünümü vardır:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Mevcut harita yakınlaştırma seviyesini gösterir.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Bir haritadaki mesafe ile Dünya üzerindeki karşılık gelen mesafe arasındaki mevcut oranı gösterir. Örnekler: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- Başlangıç yakınlaştırma seviyesi (0), Dünya'nın tüm yüzeyinin (tam harita) ekranda görüntülendiği ve boyutunun 256'ya 256 piksel olduğu seviyedir.
- Her bir sonraki yakınlaştırma seviyesi, yere olan hayali mesafeyi yaklaşık 2 kat azaltır.

:::

### Hedefe Uzaklık {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Kameradan hedefe uzaklık widget'ı, kamera (izleyici) ile haritanın merkezi arasındaki mesafeyi gösterir. Bu mesafe metre / kilometre cinsinden görüntülenir.


### Uydu Görüntüleri ile Karşılaştırma {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

OsmAnd haritası ile Dünya yüzeyinin karşılaştırılması aşağıdaki desenleri ortaya koymaktadır:

- Maksimum bozulma büyük yakınlaştırmalarda (kamera eğimi 90 derece için 6-7 yakınlaştırma) gözlenir.
- Kamera eğimi azaldıkça (90'dan 10 dereceye), haritanın bozulması artar.
- Bozulmalar yüksek enlemlerde daha erken gözlenmeye başlar.

Aşağıdaki tablo, kamera eğimi ve hedefe olan mesafe ile OsmAnd harita bozulmalarının görünür hale geldiği yakınlaştırma seviyesi hakkında bilgi içermektedir. Kamera hedeften uzaklaşmaya devam ederse, gözlemlenen OsmAnd harita bozulması artacaktır.

|Incline (90) |Latitude |Max Zoom |Height, km |Distortion|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Incline (60)** |**Latitude** |**Max Zoom** |**Height, km** |**Distortion**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Incline (45)** |**Latitude** |**Max Zoom** |**Height, km** |**Distortion**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Incline (20)** |**Latitude** |**Max Zoom** |**Height, km** |**Distortion**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Kullanılabilir RAM Widget'ı {#available-ram-widget}

Bu widget, OsmAnd'ı kullanırken cihazınızdaki kullanılabilir RAM ile daha rahat ve bilgilendirici bir etkileşim sağlamak için özel olarak tasarlanmıştır. Özellikle OsmAnd'ı navigasyon için kullanırken, kullanılabilir RAM'i kolayca ve hızlı bir şekilde izlemenizi sağlar. Widget hakkında daha fazla bilgiyi [Bilgi widget'ları](../widgets/info-widgets.md#available-ram) makalesinde okuyun.


## GPX-Parkur Simülasyonu {#gpx-track-simulation}

OsmAnd, bir GPX parkuru kullanarak cihazınızın konumunu ve hareketini simüle etme fırsatı sunar. Bu amaçlar için, OsmAnd geliştirme eklentisi [ayarlarında](#plugin-settings) *<Translate android="true" ids="simulate_location_by_gpx"/>* seçeneğini kullanın:

- *<Translate android="true" ids="simulate_location_by_gpx"/>* öğesine dokunun.
- Cihazın konumunu ve hareketini simüle etmek için bir parkur seçin.
- Hareket simülasyon hızını seçin.
- Başlat düğmesine dokunun.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Simülasyonu çalıştırdıktan sonra, uygulamanın ana ekranında navigasyon işaretinin GPX parkuruna göre hareket ettiğini göreceksiniz. [Konumum düğmesine](../map/interact-with-map.md#my-location-and-zoom) dokunarak *Konumum*'u (cihazın simüle edilmiş coğrafi konumu) haritanın merkeziyle senkronize edin.
Cihazınızın hareket simülasyonunu durdurmak için OsmAnd geliştirme [ayarlarına](#plugin-settings) geri dönün ve **konumunuzu simüle et** seçeneğinde **durdur**'a dokunun.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* ayrıca **[Hızlı eylem menüsü](../widgets/quick-action.md#navigation)** aracılığıyla da erişilebilir.
- Simülasyon sırasında konum hareket hızı, kaydedilen hıza (1) veya daha hızlıya (x2, x3, x4) eşit olarak ayarlanabilir.
- OsmAnd geliştirme eklentisini etkinleştirmeden [navigasyon menüsünden](../navigation/setup/route-navigation.md#simulated-navigation) bir GPX parkuru boyunca hareketi de simüle edebilirsiniz. Bu durumda, konumunuz parkurla senkronize edilmeyecektir.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)