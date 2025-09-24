---
source-hash: 5df41c43a87389205811e1c6bcb621fc5c1e5d910a865f87aafd5f36b2c568be
sidebar_position: 5
title: Harici Sensörler
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
Harici Sensörler eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

**Harici Sensörler eklentisi**, [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) ve [BLE (Bluetooth Düşük Enerji)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) teknolojileriyle çalışan [kablosuz harici sensörlerden](https://en.wikipedia.org/wiki/Wireless_sensor_network) veri okumanıza ve kaydetmenize ve bu verileri OsmAnd uygulamasındaki [widget'ları](#widgets) kullanarak görüntülemenize olanak tanır. Bu yönetilen ağ, sensör verilerini toplayabilir, iletebilir ve depolayabilir.

> *NOT: iPhone ve iPad'ler donanım sınırlamaları nedeniyle ANT+ desteği sunmaz.*

**Harici Sensörler eklentisi** harici sensörlere erişir ve aşağıdaki verileri okuyabilir:

- *Kalp Atış Hızı*
- *Bisiklet Gücü*
- *Bisiklet Kadansı*
- *Bisiklet Hızı*
- *Bisiklet Mesafesi*
- *Sıcaklık*

Eklentiyi kullanmak için cihazınızın [uyumlu](#pair-new-sensor) olduğundan, eklentinin [etkinleştirildiğinden](../plugins/#enable--disable) ve harici sensörlerinizin Bluetooth (BLE) aracılığıyla bağlı olduğundan emin olun.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Harici sensörlerden veri kullanmaya başlamak için şu adımları izleyin:

1. Harici Sensörler eklentisinin kilidini açmak için bir **OsmAnd Pro aboneliği** [satın alın](../purchases/).
2. Eklentiyi *Menü → Eklentiler*'de [etkinleştirin](../plugins/#enable--disable).
3. **BLE sensörleriyle** bağlantıya izin vermek için cihazınızda **Bluetooth'u açın**.
4. Eklenti menüsü aracılığıyla harici sensörleri [eşleştirin ve yapılandırın](#pair-new-sensor).
5. (İsteğe bağlı) Kalp atış hızı, kadans veya pil seviyesi gibi gerçek zamanlı verileri görüntülemek için harita ekranınıza [Harici Sensörler widget'ları](#widgets) ekleyin.
6. (İsteğe bağlı) Sensör verilerini GPX izlerine kaydetmek için [Yolculuk kaydı eklentisini](../plugins/trip-recording.md) kullanın.
7. (İsteğe bağlı, yalnızca Android) Cihazınız destekliyorsa ANT+ sensörlerini bağlamak için [bu ipuçlarını](https://www.thisisant.com/consumer/ant-101/ant-in-phones) izleyin.


### Yeni Sensör Eşleştir {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) | ![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Yeni bir sensör eşleştirmek için şu adımları izleyin:

1. Cihazınızda **Bluetooth'un etkinleştirildiğinden** emin olun.
2. *Menü → Eklentiler → Harici Sensörler → Ayarlar*'a gidin.
3. **Yeni sensör eşleştir**'e dokunun.
4. OsmAnd, mevcut **Bluetooth LE** veya **ANT+** sensörlerini (platformunuza bağlı olarak) tarayacaktır.
5. Eşleştirmek istediğiniz sensörün yanındaki **+** düğmesine dokunun.
6. Bağlandıktan sonra sensör, **Bağlı cihazlar** listesinde görünecektir.

***Notlar:***

- **iOS**'ta, donanım sınırlamaları nedeniyle yalnızca **Bluetooth Düşük Enerji (BLE)** sensörleri desteklenir. ANT+ sensörleri mevcut değildir.
- **Android**'de, cihazınıza bağlı olarak hem BLE hem de ANT+ sensörleri desteklenebilir. Daha fazla ayrıntı için [ANT+ uyumluluk kılavuzuna](https://www.thisisant.com/consumer/ant-101/ant-in-phones) bakın.
- Bir sensör her bağlandığında veya bağlantısı kesildiğinde bir **açılır bildirim** görünecektir.
- **Bisiklet güç sensörleri** yalnızca Android'de ANT+ aracılığıyla kullanılabilir.


## Sensör Ayarları {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sensör ayarlarını açmak için aşağıdaki yollardan birini kullanın:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Mevcut cihaz → Ayarlar*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Mevcut cihaz → Ayarlar*

![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Sensör ayarlarını açmak için aşağıdaki yollardan birini kullanın:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

OsmAnd'de listelenen her eşleştirilmiş harici sensörün aşağıdaki seçeneklere sahip kendi yapılandırma ekranı vardır:

- **Bağlan / Bağlantıyı Kes** – bağlantı durumunu değiştirir.
- **Yeniden Adlandır** – sensöre özel bir ad atar.
- **Sensörü Unut** – sensörü listeden kaldırır (daha sonra tekrar eşleştirilebilir).
- **Ayarlar** – sensör ayrıntıları ekranını açar (sensör tipi, değerler, pil seviyesi, tekerlek çevresi ayarı).

***Notlar:***

- **iOS**'ta, bağlı BLE sensörlerinin **pil seviyesini** doğrudan bir harita [widget'ında](#widgets) görüntüleyebilirsiniz. Bunu etkinleştirmek için şuraya gidin: *Menü → Ekranı Yapılandır → Panel seç → Widget ekle → Harici sensör → Ayarlar → Göster → Pil seviyesi*
- Eşleştirilmiş bir sensörün pil **seviyesi %15'in altına düştüğünde** bir açılır bildirim görünür.


## Yolculuk Kaydı {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Harici sensörler](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png) ![Harici sensörler](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png) ![Harici sensörler eklentisi](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Yolculuğunuz sırasında [Yolculuk kaydı eklentisini](../plugins/trip-recording.md#recording-settings) kullanarak sensör verilerini kaydetmek için:

1. **Harici Sensörler eklentisinin** etkinleştirildiğinden emin olun.
2. *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*'a gidin.
3. Kaydetmek istediğiniz sensör tiplerini seçin (örn. kadans, kalp atış hızı, hız).
4. Yolculuğunuzu kaydetmeye başlayın. OsmAnd, seçilen sensör verilerini GPX izine kaydedecektir.

***Notlar:***

- Mevcut sensör tiplerinin listesi, hiçbir sensör bağlı olmasa bile gösterilir.
- Henüz hiçbir sensör eşleştirilmediyse, eklenti ayarlarındaki [Yeni sensör eşleştir](#pair-new-new-sensor) düğmesini kullanın.
- Pil seviyesi verileri GPX dosyalarına kaydedilmez ve harita üzerinde analiz için kullanılamaz.

:::note Biçim uyumluluğu
OsmAnd, sensör verilerini GPX dosyalarına gömmek için [iz kaydını](../plugins/trip-recording.md#recorded-gpx-file) kullanır. Bu biçim birçok spor ve antrenman uygulamasıyla (örn. Strava, Runkeeper) uyumludur.
:::


### Veri Analizi {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harici sensörler](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png) ![Harici sensörler](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harici sensörler](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png) ![Harici sensörler](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

[Yolculuk kaydı eklentisini](../plugins/trip-recording.md#recording-settings) kullanarak yolculuğunuzu kaydettikten sonra, sensör verilerini iz analizi arayüzünde inceleyebilirsiniz.

Verileri analiz etmek için:

1. Yolculuk kaydınızı bitirin.
2. *Yerlerim → İzler*'den kaydedilen izi açın veya harita üzerindeki ize dokunun.
3. İz bağlam menüsünden *Seçenekler → Haritada analiz et*'i seçin.

Bu, kaydedilen verileriniz için grafikler gösterecektir: *Kalp atış hızı*, *Hız*, *Kadans*, *Bisiklet gücü* ve *Sıcaklık*

> *Pil seviyesi ve Mesafe, [Haritada analiz et](../map/tracks/index.md#analyze-track-on-map) özelliğinde mevcut değildir.*


## Widget'lar {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="external_sensor_widgets"/>*

![Harici sensörler widget'ları Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png) ![Harici sensörler widget'ları Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Harici sensörler widget'ları iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png) ![Harici sensörler widget'ları iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

[Harici Sensörler widget'ı](../widgets/info-widgets.md#external-sensors-widgets), bağlı sensörlerinizden gelen canlı verileri doğrudan harita ekranında görüntülemenizi sağlar.

Yolculuğunuza başlamadan önce:

- Harici Sensörler eklentisinin etkinleştirildiğinden emin olun.
- *Ekranı Yapılandır*'ı açın ve gerekli widget'ları uygun panele ekleyin.

Desteklenen widget türleri:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – eşleştirilmiş bir monitörden gerçek zamanlı kalp atış hızını görüntüler.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (yalnızca Android) – mevcut pedal çevirme gücünü watt cinsinden gösterir.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – dakikadaki pedal devir sayısını gösterir.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – mevcut bisiklet hızı.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – sensör tarafından ölçülen toplam mesafe.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – mevcut ortam sıcaklığı.
7. **Pil Seviyesi** – bağlı bir BLE sensöründe kalan pil yüzdesi, **Sensör ayarları**'nda değiştirin.


### Widget Ayarları {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="external_sensor_widgets"/> → Bir widget seçin → <Translate android="true" ids="shared_string_settings"/>*

![Harici sensörler widget'ları Ayarları Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → Widget ekle → Harici sensör → Bir widget seçin → Ayarlar*

![Harici sensörler widget'ları Ayarları Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Varsayılan olarak, widget bu türdeki ilk bağlı sensörü gösterir. Belirli bir sensörü kullanmak istiyorsanız, **Veri kaynağı**'na dokunun ve bağlı sensörler listesinden seçim yapın.

**iOS**'ta, widget'ta hangi değeri görüntüleyeceğinizi seçebilirsiniz:

- **Sensör verileri** (örn. kadans, hız).
- **Pil seviyesi** – seçilen sensörün gerçek zamanlı pil yüzdesi.

> *Bu, bağlantı kesilmelerini önlemek için uzun yolculuklar sırasında pil şarjını izlemek istediğinizde kullanışlıdır.*


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)