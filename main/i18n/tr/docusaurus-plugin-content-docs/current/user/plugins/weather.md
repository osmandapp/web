---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
sidebar_position: 17
title: Hava Durumu
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

:::info Ücretli özellik
 <ProFeature/> Hava Durumu eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).  
:::

OsmAnd uygulamasındaki etkileşimli hava durumu harita katmanları, şehrinizdeki veya etkileşimli bir küresel harita üzerindeki herhangi bir konumdaki sıcaklığı, atmosfer basıncını, bulutluluğu, rüzgar hızını ve yağışı izlemenizi sağlar. Hava Durumu eklentisi, doğrudan OsmAnd haritası üzerinde 7 gün öncesine kadar saatlik hava durumu tahminleri sunar. Hava durumu bilgileri çevrimdışı kullanım için de indirilebilir.  

Hava Durumu eklentisinin veri kaynağı, Amerika Birleşik Devletleri Ulusal Hava Servisi (NWS) tarafından işletilen [Küresel Tahmin Sistemi](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) ve Avrupa Orta Vadeli Hava Tahminleri Merkezi ([ECMWF](https://www.ecmwf.int/))'dir.  


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

OsmAnd haritasında Hava Durumu'nu görüntülemek için aşağıdaki ayarlar *gereklidir*:

**1.** [**OsmAnd Pro aboneliği** satın alın](../purchases/).

**2.** *Ana Menü*'nün *Eklentiler* bölümünde Hava Durumu eklentisini [etkinleştirin](../plugins/#enable--disable).

**3.** Hava durumu olayları için [**ölçü birimlerini** seçin](#weather-settings).

**4.** Harita Yapılandırma menüsündeki Hava Durumu menü öğesini kullanarak harita üzerinde [**Hava Durumu katmanlarını** görüntüleyin](#customize-weather-layers) (uzaklaştırmayı unutmayın).

**5.** Seçilen alan için [**Hava Durumu tahminini** görüntüleyin](#weather-forecast-screen) (bu menü, OsmAnd haritasının ana ekranının hava durumu katmanlarıyla dağınık olmamasını sağlar).

**6.** Çevrimdışı kullanmayı planlıyorsanız hava durumu tahminini [indirin](#offline-forecast).

**7.** Güncel hava durumu bilgilerini günlük olarak görmek istiyorsanız [**Hava Durumu widget'larını** etkinleştirin](#weather-widgets).  

:::caution Gerekli oluşturma
Hava Durumu eklentisi yalnızca Harita oluşturma motoru [Sürüm 2](../personal/global-settings/#map-rendering-engine) (OpenGL) ile kullanılabilir.  
:::


## Haritada Hava Durumunu Görüntüleme {#display-weather-on-the-map}

### Hava Durumu Tahmin Ekranı {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Şuraya git: *Etkin eklenti → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Şuraya git: *Etkin eklenti → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

Ana yan menüde, tüm hava durumu araçlarına hızlı erişim sağlayan özel bir **Hava Durumu** menü öğesi bulunur. *Hava Durumu tahmin ekranı*, *sıcaklık*, *atmosfer basıncı*, *rüzgar hızı*, *bulutluluk* ve *yağış* hakkında bilgi görüntüler.  

Ekranın altında *hava durumu araç çubuğu* bulunur. Hava durumu tahmininin görüntüleneceği tam zamanı ayarlamak için gün düğmelerini ve zaman kaydırıcısını kullanabilirsiniz.

### Veri Kaynağı {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Data Source Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Data Source iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

Hava Durumu ekranında verileri görüntülemek için OsmAnd'ın hangi hava durumu tahmin sağlayıcısını kullanacağını seçebilirsiniz:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Veri Kaynağını Seç*

İki hava durumu tahmin sağlayıcısı desteklenir:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Küresel Tahmin Sistemi)** – NOAA/NWS tarafından işletilen varsayılan kaynak. Sıcaklık, basınç, nem, rüzgar ve bulut katmanları dahil tam hava durumu verileri sağlar.

[**ECMWF**](https://www.ecmwf.int/) **(Avrupa Orta Vadeli Hava Tahminleri Merkezi)** – alternatif tahmin kaynağı. Yüksek kaliteli sıcaklık, yağış ve basınç verileri sunar ancak rüzgar veya bulut bilgisi sağlamaz. ECMWF kullanıldığında, mevcut olmayan parametreler “–” olarak görüntülenir ve ilgili hava durumu katmanları devre dışı görünür.

Veri Kaynağının Hava Durumu Görüntülemeyi Etkileme Şekli:
- Harita, grafikler, zaman çizelgesi ve ekrandaki hava durumu değerleri kaynak değiştirildikten hemen sonra güncellenir.
- Yalnızca seçilen sağlayıcı için mevcut parametreler gösterilir.
- Hava durumu widget'ları otomatik olarak seçilen kaynağı kullanmak üzere yenilenir.
- Daha önce bir hava durumu tahmini indirdiyseniz, OsmAnd seçilen sağlayıcıya karşılık gelen veriyi kullanır.
- GFS ve ECMWF ayrı önbellekler kullanır. Kaynağı değiştirmek, ilgili hava durumu karo yüklerini yükler veya günceller.


### Hava Durumu Katmanlarını Özelleştirme {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Şuraya git: *Etkin eklenti → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Şuraya git: *Etkin eklenti → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

OsmAnd harita ekranında hava durumu katmanlarını görüntülemek için *Haritayı Yapılandır menüsünü* kullanmanız gerekir. Menüye gidin, listede *Hava Durumu* öğesini bulun (yalnızca eklenti etkinleştirildiğinde kullanılabilir) ve üzerine dokunun.  

Bu menüde, her katman için **görünürlüğü** ve [ayarları](#weather-settings) değiştirebilir, kontur çizgilerinin türünü seçebilir ve [çevrimdışı 7 günlük hava durumu tahminini](#offline-forecast) indirebilirsiniz (*yalnızca Android için burada mevcuttur*).


### Hava Durumu Ayarları {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Ana Menü → Eklentiler → Hava Durumu → Ayarlar*
- *Ana Menü → Ayarlar → Profil → Eklenti ayarları → Hava Durumu*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Ana Menü → Ayarlar → Profil → Eklentiler → Hava Durumu*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Harita üzerindeki [Hava Durumu verilerini](#weather-layers) ve ekranın [Hava Durumu widget'ları](#weather-widgets) bölümünü hangi ölçü birimlerinde görmenin sizin için uygun olduğuna karar vermek önemlidir. Her parametre için uygun ölçü birimlerini seçebilir veya varsayılan değerleri kullanabilirsiniz (*yalnızca iOS*). OsmAnd uygulamasının iOS sürümünde, seyahat ederken mobil trafiği kullanmaktan kaçınmak için çevrimdışı tahmin seçeneğini de etkinleştirebilirsiniz.  

:::note
OsmAnd'ın iOS sürümünde, gerekli harita katmanının simgesine uzun dokunuşla açılan menüde ölçü birimlerini ve şeffaflık seviyesini değiştirebilirsiniz.  
:::

### Hava Durumu Katmanları {#weather-layers}

Tüm hava durumu verileri ayrı harita katmanları olarak sunulur. Harita üzerinde hava durumu katmanlarını görmek için uzaklaştırmanız gerekir, bunlar yalnızca 2-12 yakınlaştırma ölçeklerinde mevcuttur. Hava durumu katmanları, haritayı renklendirmek için [hava durumu paletlerini](../personal/color-palette-schemes.md#weather) kullanır, bu paletler gerekirse [değiştirilebilir](../personal/color-palette-schemes.md#edit-palette-file).

| |  
|------------|  
| **Yağış katmanı**, suyun farklı hallerde gökyüzünden yere düştüğü hava olayları hakkında bilgi görüntüler. Yağış, yağmur, kar, sulu kar veya dolu olabilir. Yağış ölçeği, 24 saatte 1 metrekareye düşen milimetre (veya inç) su cinsinden derecelendirilmiştir. 1 mm yağmur, 1 metrekareye 1 litre suya karşılık gelir. |  
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|  
| **Sıcaklık**, sıcak ve soğuk algısının nicel ifadesidir. Derece cinsinden ölçülür. OsmAnd'da Celsius ve Fahrenheit ölçeği arasında seçim yapabilirsiniz. |  
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|  
| **Rüzgar**, Dünya'nın güneş tarafından düzensiz ısınması ve kendi dönüşü nedeniyle havanın hareketidir. Rüzgarlar hafif esintilerden kasırga ve hortum gibi doğal afetlere kadar değişebilir. OsmAnd'da rüzgar hızı metre/saniye (m/s), kilometre/saat (km/sa), mil/saat (mph) ve knot (kt) olarak görüntülenebilir. |  
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|  
| **Bulutluluk**, belirli bir konumdan gözlemlendiğinde gökyüzünün bulutlarla kaplı ortalama oranıdır. % cinsinden ölçülür. |  
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|  
| **Atmosfer basıncı**, ölçüm noktasının üzerindeki havanın ağırlığından kaynaklanır. Yükseklik arttıkça azalır. Atmosfer basıncı hektopaskal (hPa), milimetre cıva (mmHg) ve inç cıva (inHg) olarak görüntülenebilir. |  
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |  
| **Rüzgar animasyonu**, bölge genelinde rüzgar yönünü ve hızını gösteren dinamik temsilleri içerir. |  
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Haritaları Birleştirme {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Kapsamlı hava durumu bilgileri almak için harita katmanlarını ayrı ayrı kullanabilir veya kolayca birleştirebilirsiniz. Belirli bir türdeki izolinler de Hava Durumu katmanına eklenebilir. Sadece ekrandaki *Katmanlar* veya *İzolinler* düğmesine dokunun.


### Katmanlar için Hızlı Eylemler {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Hava durumu katmanlarının görünürlüğünü değiştirmek için harita ekranındaki *Hızlı Eylem* düğmelerini kullanabilirsiniz. Katmanları gösterme veya gizleme genel ayarları, *Ana Menü*'nün ayrı [Hava Durumu bölümünde](#weather-forecast-screen) bulunabilir. [Hızlı Eylem](../widgets/quick-action.md#configure-map) makalesinde, görüntülenebilecek katmanların bir listesini bulacaksınız. Bu harita yapılandırmasına hızlı erişime ihtiyacınız varsa, *Özel Düğme* aracını kullanın.

- [Eylem ekle](../widgets/quick-action.md#custom-buttons) bölümüne gidin: *Menü → Ekranı yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → Haritayı yapılandır*.
- Belirli bir hava durumu katmanının görünürlüğünü değiştirmek için bir veya daha fazla QA düğmesi ekleyin.


## Çevrimdışı Tahmin {#offline-forecast}

### Önbellek {#cache}

Hava Durumu sekmesi açıkken, aksi belirtilmedikçe, gerekli hava durumu bilgileri ağdan indirilir. Cihazlarınızda önceden yüklenmiş [Hava Durumu tahminini](#download-forecast) kullanabilirsiniz. Hava durumu bilgileri indirildikten sonra otomatik olarak önbelleğe alınır ve tahmin süresi dolana kadar çevrimdışı kullanılabilir.  

:::tip
Android cihazlarda, *Hava durumu widget'ına* dokunarak hava durumu verilerinin ne zaman indirildiğini kontrol edebilirsiniz. OsmAnd Geliştirme eklentisi etkinleştirilmelidir.  
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Tahmini İndir {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Her ülke için **Çevrimdışı Tahmin** (7 güne kadar) indirebilirsiniz. Mevcut tarihe ne kadar yakınsa, o kadar doğru olacaktır. Hava durumu tahminini çevrimdışı kullanmak istiyorsanız, hava durumu verilerini önceden indirmeniz gerekir.  

Tahmin indirme menüsünde, hava durumu verilerini güncel tutmak için bilgi alabilir ve parametreleri ayarlayabilirsiniz.  
  
- **Oluşturuldu** (*Android*) / **Güncellendi** (*iOS*). Son güncellemenin ne zaman yapıldığını gösterir.  
- **Sonraki güncelleme** (*iOS*). Bir sonraki güncellemenin ne zaman kullanılabilir olacağını gösterir.  
- **Boyut** (*Android*) / **Güncelleme boyutu** (*iOS*). Tüm güncellemelerin boyutunu gösterir.  
- **Güncelle** düğmesi (*Android*) / **Şimdi güncelle** (*iOS*). Etkin olduğunda, otomatik bir güncellemeyi beklemeden hava durumu verilerini manuel olarak güncellemenizi sağlar.  
- **Güncelleme sıklığı** (*iOS*). 12 saatlik, 24 saatlik veya haftalık olarak ayarlanabilir.  
- *Yalnızca Wi-Fi üzerinden güncelle* (*iOS*). İndirmeler için mobil veri kullanmak istemiyorsanız bu seçeneği etkinleştirin.  
- **Kaldır** *çöp kutusu* düğmesi (*Android*) / **Tahmini kaldır** (*iOS*). Bu bölge için tüm tahmin verilerini silmenizi sağlar.
- **Düzenle** *kalem* düğmesi (*Android*). Hava durumu dosyasını yeniden adlandırmanızı sağlar.

**Not:** ABD ve Kanada gibi bazı ülkeler, tüm ülke için tek bir Çevrimdışı Tahmin dosyası kullanır. Bu, indirme sayısını azaltır ve hava durumu veri yönetimini basitleştirir.

:::info  
Hava durumu verileri her 6 saatte bir güncellenir ([GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast)'den 4 ve [ECMWF](https://www.ecmwf.int/)'den 3 güncelleme) ve yayınlanmadan önce hesaplama süreci birkaç saat sürdüğü için (genellikle UTC 07:00 civarında) kısa bir gecikmeyle OsmAnd'da kullanılabilir hale gelir.  
:::


## Hava Durumu Widget'ları {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

Sıcaklık, Hava Basıncı, Rüzgar, Bulut ve Yağış gibi [Hava Durumu widget'ları](../widgets/info-widgets.md#weather-widgets), **haritadaki merkez nokta** için mevcut hava durumu verilerini gösterir.

- Hava durumu widget'ları yalnızca [Hava Durumu ekranı](#weather-forecast-screen) açıkken görüntülenir.
- Hava durumu widget'larını etkinleştirmek için *Ekranı Yapılandır* Ana Menü öğesini, bunları yerleştireceğiniz paneli ve listeden gerekli widget'ları seçin.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)