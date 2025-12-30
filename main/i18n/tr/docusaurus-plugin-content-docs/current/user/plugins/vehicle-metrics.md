---
source-hash: c693b6d101a1d27afa8ef4aae2115e4338730cd7c671f000edf63199372909f6
sidebar_position: 16
title: Araç Metrikleri
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
Araç Metrikleri eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md). Araç hızı ve Motor devri bilgileri OsmAnd ücretsiz sürümünde mevcuttur.
:::

**Araç Metrikleri eklentisi**, [OBD-II protokolü](https://en.wikipedia.org/wiki/OBD-II_PIDs) aracılığıyla gerçek zamanlı araç verilerini izlemeyi sağlar. Kullanıcılar, motor performansı, yakıt verimliliği ve hız gibi temel metrikleri takip ederek proaktif araç bakımı ve sorun giderme yapabilirler.  

[OBD-II tarayıcıları](https://en.wikipedia.org/wiki/ELM327) modern otomotiv teşhislerinin ayrılmaz bir parçasıdır. Gerçek zamanlı veri akışı ile kullanıcılar, araç sistemleri hakkında anlık bilgiler edinerek önleyici bakımı kolaylaştırır ve onarım maliyetlerini düşürür. Bu araçlar hem kişisel kullanım hem de profesyonel otomotiv hizmetleri için hayati öneme sahiptir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD ayarları](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD ayarları](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Bir OBD-II tarayıcısından veri kullanmak için:

1. Bir **OsmAnd Pro aboneliği** [satın alın](../purchases/). (*Araç hızı* ve *Motor devri* ücretsizdir.)  
2. Ana Menü'nün Eklentiler bölümünde Araç Metrikleri eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
3. Cihazınızda Bluetooth'u **açın**.
4. OBD-II tarayıcısını aracınızın portuna [bağlayın](#pair-odb-ii-scanner).
5. **Tarayıcı ayarlarını** [yapılandırın](#scanner-settings).
6. Ekran verileri için **Araç Metrikleri widget'larını** [ekleyin](#widgets) (isteğe bağlı).
7. Araç verilerini kaydetmek için **Yolculuk kaydı eklentisini** [kullanın](#trip-recording).


### OBD-II Tarayıcısını Eşleştirin {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![OBD bağlantısı](@site/static/img/plugins/obd/obd_connect.png)|![OBD bağlantısı](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![OBD bağlantısı](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD bağlantısı](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Tarayıcıyı aracınızın portuna bağlayın ve uygulama aracılığıyla eşleştirin:

- *Menü → Eklentiler → Araç Metrikleri → Ayarlar → Bağlan* veya **+**'ya gidin.
- Araç Metrikleri *Ana Menü*'de ise: *Menü → Araç Metrikleri → Ayarlar → Bağlan* veya **+**'ya gidin.

Listeden OBD-II cihazınızı seçin ve bağlantıyı kurun.


## Tarayıcı Ayarları {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Şuraya gidin: *Menü → Eklentiler → Araç Metrikleri → OBD → üç nokta menüsü*

|  |  |
|--|--|
|![OBD ayarları](@site/static/img/plugins/obd/obd_settings.png)|![OBD ayarları](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Şuraya gidin: *Menü → Eklentiler → Araç Metrikleri → OBD → üç nokta menüsü*

|  |  |
|--|--|
|![OBD ayarları](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD ayarları](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Bağlan / Bağlantıyı Kes**. OBD-II sensörüyle bağlantıyı kurar veya sonlandırır.
- **Ayarlar**. OBD-II ayarları ekranını açar, bağlantı yönetimini ve mevcut araç parametrelerine erişimi sağlar.
- **Yeniden Adlandır**. Sensöre daha kolay tanımlama için özel bir ad atamanızı sağlar.
- **Unut**. Daha önce eşleştirilmiş OBD-II sensörünü listeden kaldırır, daha sonra gerekirse yeniden eşleştirme gerektirir.

**Yeniden bağlantı davranışı:** OsmAnd, uygulama başlatıldığında, navigasyon başlatıldığında veya Android Auto / CarPlay başlatıldığında OBD-II adaptörüne otomatik olarak yeniden bağlanmayı dener. Bağlantı kullanılamıyorsa, Araç Metrikleri widget'ları “–” görüntüler. Herhangi bir Araç Metrikleri widget'ına tek dokunma, sensöre yeniden bağlanmayı dener. Sensör zaten bağlıysa, dokunma widget görüntüleme modlarını normal şekilde değiştirir.


## Metrik Listesi {#metrics-list}

Metrikler netlik için kategorize edilmiştir. Gelişmiş teşhis araçları, bu parametreleri yorumlayarak önleyici bakımı mümkün kılar:

*Sıcaklık:*

- **Emme Sıcaklığı**. Emme manifolduna giren havanın sıcaklığını gösterir.
- **Ortam Sıcaklığı**. Dış koşulları izler.
- **Soğutma Suyu Sıcaklığı**. Motor soğutma verimliliğini takip eder.
- **Motor Yağı Sıcaklığı**. Çalışma sırasındaki yağ durumunu gösterir.

*Motor:*

- **Motor Devri**. Dakikadaki motor devirlerini (RPM) izler.
- **Motor Çalışma Süresi**. Motorun çalışma süresini takip eder.
- **Hesaplanan Motor Yükü**. Motor iş yükü yüzdesini gösterir.

*Yakıt:*

- **Yakıt Basıncı**. Yakıt sistemi basıncını gösterir.
- **Yakıt Tüketimi**. Aracın yakıt tüketimini hesaplar.
- **Kalan Yakıt**. Araçtaki yakıt seviyesini gösterir.

*Diğer:*

- **Akü Seviyesi**. Aracın aküsünün voltaj seviyesini gösterir.
- **Adaptör Voltajı**. OBD-II adaptörüne sağlanan voltajı gösterir (AT RV komutu).
- **Araç Hızı**. Araç Hız Sensörü (VSS) verilerini gösterir.
- **Gaz Kelebeği Konumu**. Gaz kelebeği plakası açısı aracılığıyla motor hava girişini belirler.  
  **VIN**. Aracın 17 karakterli kimlik numarasını gösterir.


## Yolculuk Kaydı {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD kaydı](@site/static/img/plugins/obd/obd_recording.png)| ![OBD kaydı](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![OBD kaydı](@site/static/img/plugins/obd/obd_recording_ios.png)| ![OBD kaydı](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



OBD-II verilerini bir GPX dosyasına dahil etmek için, [Yolculuk kaydı eklentisini](../plugins/trip-recording.md#recording-settings) kullanarak kaydetmek istediğiniz parametreleri seçmeniz gerekir. Bu, araç metriklerini yolculuk verilerinizle birlikte analiz etmenizi sağlar.

### Etiketler {#tags}

OsmAnd, [GPX dosyasındaki](../plugins/trip-recording.md#recorded-gpx-file) araç metrikleri için özel etiket adları uygular. Örneğin:

- `vm_eotemp`: Motor Yağı Sıcaklığı.
- `vm_fpress`: Yakıt Basıncı.
- `vm_espeed`: Motor Devri.

Bu etiketler, kaydedilen GPX dosyasını incelerken belirli araç verilerini tanımlamayı ve kullanmayı kolaylaştırır.


## Widget'lar {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Şuraya gidin: *Menü → Ekranı Yapılandır → Widget'lar → Bir panel seçin → Araç Metrikleri*

| | |
|--|--|
|![OBD ayarları](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD ayarları](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Şuraya gidin: *Menü → Ekranı Yapılandır → Widget'lar → Bir panel seçin → Araç Metrikleri*

| | |
|--|--|
|![OBD ayarları](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD ayarları](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



[Araç Metrikleri widget'ları](../widgets/info-widgets.md#vehicle-metrics-widgets) eklentiyi etkinleştirdiğinizde otomatik olarak dahil edilir. Görünmüyorlarsa, [Ekranı Yapılandır](../widgets/configure-screen.md) menüsü aracılığıyla manuel olarak ekleyebilirsiniz.

### Widget Ayarları {#widget-settings}

Widget'lar, bağlı OBD-II cihazınızdan hız, motor metrikleri ve yakıt tüketimi gibi temel verileri gerçek zamanlı olarak görüntüler. Metrikleri sorunsuz bir şekilde takip etmek için yolculuğunuza başlamadan önce görünür olduklarından emin olun.

Bazı widget'lar görüntüleme modu seçenekleri sunar:

- **Anlık**. Seçilen metrik için gerçek zamanlı verileri görüntüler.
- **Ortalama**. Yapılandırılabilir bir zaman aralığında (15 saniye ila 60 dakika) ortalama değerleri görüntüler.

Birkaç widget, *Yakıt tüketimi* dahil, görüntülenen birimleri ve bölgesel metrik formatlarını [Profil Ayarları](https://osmand.net/docs/user/personal/profiles#units--formats) temelinde uyarlar. Litre dışındaki hacim birimleri kullanıldığında, Yakıt tüketimi değerleri Mil Galon Başına (MPG) olarak gösterilmeyi destekler. Tam MPG türü, seçilen hacim birimine bağlıdır:

- ABD galonları → MPG (ABD)
- İmparatorluk galonları → MPG (BK)

Widget, aktif profildeki seçilen <Translate android="true" ids="routing_attr_length_name"/> ve <Translate android="true" ids="shared_string_volume"/> birimlerine göre uygun formatı otomatik olarak seçer ve seçtiğiniz görüntüleme modu profilleri dışa aktarırken ve içe aktarırken korunur.


## İlgili makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)