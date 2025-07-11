---
source-hash: 580c8fbd0c79564b0976cee07d1bc9d431e8f4533df5daa052bc1202ccd84564
sidebar_position: 10
title: OsmAnd Geliştirme
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

1. Ana Menü'nün Eklentiler bölümünde OsmAnd geliştirme eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
2. Eklentinin [Ayarlar menüsünde](#plugin-settings) gerekli ayarları yapın.
3. Gerekirse **geliştirici widget'larını** etkinleştirin.


## Eklenti Ayarları {#plugin-settings}

:::info bilgi
OsmAnd geliştirme eklentisi ayarları geneldir ve tüm profiller için geçerlidir.
:::

Eklenti ayarlarını açmak için aşağıdaki yollardan birini kullanın:

- *Ana Menü → Eklentiler → OsmAnd geliştirme → Ayarlar*.
- *Ana Menü → [Genel Ayarlar](../personal/global-settings.md) → Profil → OsmAnd geliştirme eklentisi ayarları*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Geliştirme Ayarları Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Geliştirme Ayarları 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geliştirme Ayarları iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Arazi {#terrain}

- **Tepe gölgelendirme ve eğim için raster [SQLIte formatını](../../technical/osmand-file-formats/osmand-sqlite) kullanın** (*Android*). Eski format raster haritaları yükleyin.


### Sorun Giderme {#troubleshotting}

- **Konumunuzu simüle edin** (*Android* / *iOS*). Bir GPX parkuru kullanarak konumu ve hareketi [simüle edin](#gpx-track-simulation).
- **Pil tasarruf modu** (*Android* / *iOS*). Bu ayar, uygulamaları kullanırken pil gücünden tasarruf etmeye yardımcı olmak için [ekran yenileme hızını](#map-rendering-fps-widget) saniyede 20 kare azaltır.
- **3B konum konum simgelerini kullanın** (*iOS*). [Konumum simgesi](../personal/profiles.md#my-location-appearance) için bir 3B simge seçmenize olanak tanır.
- **Obd verilerini simüle edin** (*Android*). [OBD tarayıcı](./vehicle-metrics.md) kullanımının simülasyonuna olanak tanır.
- **Performans hata ayıklama bilgisi** (*Android*). Oluşturma ve navigasyon performansını görüntüler.
- **Harita katmanlarını devre dışı bırak** (*Android*). Vektör haritası üzerindeki tüm harita katmanlarını devre dışı bırakır (yeniden başlatma gereklidir).
- **Logcat arabelleği** (*Android*). Uygulamanın ayrıntılı günlüklerini kontrol edin ve paylaşın.
- **Basılan tuş hakkında bildirim göster** (*Android*). Tuş hakkında bir mesaj görüntüler.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Kerteriz, mevcut konumunuzdan hedeflenen varış noktanıza olan pusula yönüdür. *[Parkur kaydını](../plugins/trip-recording.md)* etkiler.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Başlık, mevcut konumunuzdan gerçek kuzeye doğru olan pusula yönüdür. Bu seçenek varsayılan olarak etkindir. *[Parkur kaydını](../plugins/trip-recording.md)* etkiler.


### Uygulama Testi {#application-testing}

:::caution Yalnızca Android
:::

- **İlk uygulama başlangıcını simüle et**. İlk uygulama başlangıcını gösteren bayrağı ayarlar, diğer tüm ayarları değişmeden bırakır.
- **Sesli komutları test et**. Bir ses seçin ve duyuruları oynatarak test edin.
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

- **Yönlendirme için ayrılan bellek** seçeneği, uzun rotaları hesaplamak için ayrılan bellek miktarını belirlemenizi sağlar. Bu seçeneği, *Navigasyon ayarlarında* [Standart yönlendirme A*](../navigation/guidance/navigation-settings.md#development-settings) seçiliyse kullanabilirsiniz.

***Ekstra uzun rotaların hesaplanması:***

- Daha yüksek bellek tahsisi, diğer uygulamaların performansını etkileyebilir.
- [Yayalar için 50 km'lik rotaların hesaplanması](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Bilgi ve İstatistikler {#info-and-statistics}

:::caution Yalnızca Android
:::

- **Ayrılan bellek**. OsmAnd uygulaması için ayrılan sistem belleğini görüntüler.
- **Toplam yerel bellek**. Orantılı bellek dahil olmak üzere uygulamaya ayrılan toplam yerel bellek miktarını görüntüler.
- **A-GPS bilgisi**. A-GPS verilerinin en son ne zaman indirildiğini gösterir.
- **Gündüz/gece bilgisi**. Bugünün gün doğumu ve gün batımı saatlerini gösterir.
- **Enerji istatistikleri (ortalama 1 / 5 / 15 dakika)**. Pil seviyesini dakika başına (%) ve 1, 5 ve 15 dakikalık aralıklarla ortalama enerji tüketimini (mAh) görüntüler.
- **Oluşturma istatistikleri (ortalama 1 / 5 / 15 dakika)**. Son 1k karedeki FPS, CPU (döşemeler), CPU (boşta kalma süresi) ve CPU (bekleme) ortalamalarını 1, 5 ve 15 dakikalık aralıklarla içeren oluşturma istatistiklerini gösterir.

**Düğme:**

- **Eklenti ayarlarını varsayılana sıfırla**. Tüm eklenti ayarlarını varsayılan değerlerine sıfırlar.

    ![Geliştirme Ayarları Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Harita Oluşturma FPS Widget'ı {#map-rendering-fps-widget}

:::info Önemli
OsmAnd geliştirici Widget'ları yalnızca OsmAnd geliştirme eklentisi etkinleştirildiğinde ekrana eklenebilir.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Geliştirme widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Geliştirme widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Geliştirme widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

[FPS Widget'ı](../widgets/info-widgets.md#map-rendering-fps), haritanın ve harita öğelerinin ne kadar hızlı görüntülendiğini ve yenilendiğini gösterir. Sayısal değer saniyedeki kare cinsinden (FPS) belirtilir.


## Kamera Konumu Widget'ları {#camera-position-widgets}

:::info Önemli
OsmAnd geliştirici Widget'ları yalnızca OsmAnd geliştirme eklentisi etkinleştirildiğinde ekrana eklenebilir.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Kamera konumu Widget'ları 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Kamera konumu Widget'ları 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Kamera konumu Widget'ları 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Kamera konumu Widget'ları 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

OsmAnd haritasına gerçekçi bir görünüm kazandırmak ve hem yukarıdan hem de uzaydan çekilen Dünya fotoğraflarıyla eşleştirmek için [Kamera konumu widget'larını](../widgets/info-widgets.md#camera-widgets) kullanabilirsiniz.


### Kamera Eğimi {#camera-tilt}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Kamera eğimi widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Kamera eğimi widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kamera eğimi widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Kamera eğimi widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Kamera eğimi widget'ı, kameranın (izleyici) merkezi görüş vektörü ile Dünya'nın hayali düz zemini arasındaki eğimi gösterir. Varsayılan değer 90 derecedir (eğim yok).

:::note
Kamera eğimi, kamera (izleyici) hareket ettirilerek değiştirilirken, haritadaki merkez noktası (baktığımız yer) aynı kalır. Ona olan mesafe (aslında yakınlaştırma) değişmez.
Aynı zamanda, izleyicinin hayali hareketi nedeniyle, kameradan yüzeye olan mesafe değişir.
:::


### Kamera Yüksekliği {#camera-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Kamera yüksekliği widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Kamera yüksekliği widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kamera yüksekliği widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Kamera yüksekliği widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Kamera Yüksekliği widget'ı, kameranın yüzey seviyesinin üzerindeki yüksekliğini gösterir. Kamera yüksekliği metre / kilometre cinsinden belirtilir.


### Yakınlaştırma Seviyesi {#zoom-level}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Yakınlaştırma seviyesi widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Yakınlaştırma seviyesi widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yakınlaştırma seviyesi widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Yakınlaştırma seviyesi widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Widget'ın üzerine dokunarak değiştirilen iki görünümü vardır:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Geçerli harita yakınlaştırma seviyesini gösterir.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Bir haritadaki mesafe ile Dünya'daki karşılık gelen mesafe arasındaki geçerli oranı gösterir. Örnekler: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- Başlangıç yakınlaştırma seviyesi (0), Dünya'nın tüm yüzeyinin (tam harita) ekranda görüntülendiği ve boyutunun 256'ya 256 piksel olduğu seviyedir.
- Her bir sonraki yakınlaştırma seviyesi, yere olan hayali mesafeyi yaklaşık 2 kat azaltır.

:::

### Hedefe Uzaklık {#distance-to-target}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Hedefe uzaklık widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Hedefe uzaklık widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hedefe uzaklık widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Hedefe uzaklık widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Kameradan hedefe uzaklık widget'ı, kamera (izleyici) ile haritanın merkezi arasındaki mesafeyi gösterir. Bu mesafe metre / kilometre cinsinden görüntülenir.


### Uydu Görüntüsü ile Karşılaştırma {#comparison-with-a-satellite-imagery}

![Karşılaştırma](@site/static/img/plugins/development/comparison.png)

OsmAnd haritası ile Dünya yüzeyinin karşılaştırılması aşağıdaki modelleri ortaya koymaktadır:

- Maksimum bozulma, büyük yakınlaştırmalarda (kamera eğimi 90 derece için 6-7 yakınlaştırma) gözlenir.
- Kamera eğimi azaldıkça (90 dereceden 10 dereceye), haritanın bozulması artar.
- Bozulmalar yüksek enlemlerde daha erken gözlenmeye başlar.

Aşağıdaki tablo, OsmAnd haritası bozulmalarının görünür hale geldiği kamera eğimi ve hedefe olan mesafe ve yakınlaştırma seviyesi hakkında bilgi içermektedir. Kamera hedeften uzaklaşmaya devam ederse, gözlemlenen OsmAnd haritası bozulması artacaktır.

|Eğim (90) |Enlem |Maks. Yakınlaştırma |Yükseklik, km |Bozulma|
|-----|-----|-----|-----|-----|
|90|26|6|5500|%5|
|90|50|6|2500|%5|
|90|66|7|1300|%5|
|**Eğim (60)** |**Enlem** |**Maks. Yakınlaştırma** |**Yükseklik, km** |**Bozulma**|
|65|26|8|1100|%6.5|
|65|50|8|800|%6.5|
|65|66|9|630|%6.5|
|**Eğim (45)** |**Enlem** |**Maks. Yakınlaştırma** |**Yükseklik, km** |**Bozulma**|
|45|26|9|350|%7.5|
|45|50|9|320|%7.5|
|45|66|8|210|%7.5|
|**Eğim (20)** |**Enlem** |**Maks. Yakınlaştırma** |**Yükseklik, km** |**Bozulma**|
|20| 26|12|30|%10|
|20| 50|11|30|%10|
|20| 66|11|30|%10|


## Kullanılabilir RAM Widget'ı {#available-ram-widget}

Bu widget, OsmAnd'ı kullanırken cihazınızdaki kullanılabilir RAM ile daha rahat ve bilgilendirici bir etkileşim sağlamak için özel olarak tasarlanmıştır. Kullanılabilir RAM'i kolayca ve hızlı bir şekilde izlemenizi sağlar, bu da OsmAnd'ı navigasyon için kullanırken özellikle kullanışlıdır. Widget hakkında daha fazla bilgiyi [Bilgi widget'ları](../widgets/info-widgets.md#available-ram) makalesinde okuyun.


## GPX-Parkur Simülasyonu {#gpx-track-simulation}

OsmAnd, GPX parkuru kullanarak cihazınızın konumunu ve hareketini simüle etme olanağı sunar. Bu amaçlar için, OsmAnd geliştirme eklentisi [ayarlarında](#plugin-settings) *<Translate android="true" ids="simulate_location_by_gpx"/>* seçeneğini kullanın:

- *<Translate android="true" ids="simulate_location_by_gpx"/>* üzerine dokunun.
- Cihazın konumunu ve hareketini simüle etmek için bir parkur seçin.
- Hareket simülasyon hızını seçin.
- Başlat düğmesine dokunun.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Geliştirme Ayarları Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Geliştirme Ayarları Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geliştirme Ayarları iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Geliştirme Ayarları iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Simülasyonu çalıştırdıktan sonra, uygulamanın ana ekranında navigasyon işaretinin GPX parkuruna göre hareket ettiğini göreceksiniz. *Konumum*u (cihazın simüle edilmiş coğrafi konumu) haritanın merkeziyle senkronize etmek için [konumum düğmesine](../map/interact-with-map#my-location-and-zoom) dokunun.
Cihazınızın hareket simülasyonunu durdurmak için OsmAnd geliştirme [ayarlarına](#plugin-settings) geri dönün ve **konumunuzu simüle et** seçeneğinde **durdur**'a dokunun.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* seçeneğine **[Hızlı eylem menüsü](../widgets/quick-action.md#navigation)** aracılığıyla da erişilebilir.
- Simülasyon sırasındaki konum hareket hızı, kaydedilen hıza (1) veya daha hızlıya (x2, x3, x4) ayarlanabilir.
- OsmAnd geliştirme eklentisini etkinleştirmeden de [navigasyon menüsünden](../navigation/setup/route-navigation.md#simulated-navigation) bir GPX parkuru boyunca hareketi simüle edebilirsiniz. Bu durumda, konumunuz parkurla senkronize edilmeyecektir.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2023*