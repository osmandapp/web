---
source-hash: 3285f0c719a8255c35a044a6bccdc05206d01216a9c0d4f8c30f58b3a9122f36
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


<InfoIncompleteArticle/>

<InfoAndroidOnly/>

## Genel Bakış {#overview}

:::info Ücretli özellik
Araç Metrikleri eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

**Araç Metrikleri eklentisi**, OBD-II protokolü aracılığıyla gerçek zamanlı araç verisi izlemeyi sağlar. Kullanıcılar motor performansı, yakıt verimliliği ve hız gibi temel metrikleri takip ederek proaktif araç bakımı ve sorun giderme yapabilirler.

OBD-II tarayıcıları, modern otomotiv teşhislerinin ayrılmaz bir parçasıdır. Gerçek zamanlı veri akışı ile kullanıcılar, araç sistemleri hakkında anlık bilgiler edinerek önleyici bakımı kolaylaştırır ve onarım maliyetlerini düşürür. Bu araçlar hem kişisel kullanım hem de profesyonel otomotiv hizmetleri için hayati öneme sahiptir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD ayarları](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Bir OBD-II tarayıcısından veri kullanmak için:

1. Bir **OsmAnd Pro aboneliği** [satın alın](../purchases/). (*Araç hızı* ve *Motor devri* ücretsizdir.)
2. *Ana Menü*'nün Eklentiler bölümünde Araç Metrikleri eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
3. Cihazınızda Bluetooth'u **açın**.
4. OBD-II tarayıcısını aracınızın portuna [bağlayın](#pair-odb-ii-scanner).
5. **Tarayıcı ayarlarını** [yapılandırın](#scanner-settings).
6. Ekran verileri için [Araç Metrikleri widget'larını](#widgets) **ekleyin** (isteğe bağlı).
7. Araç verilerini kaydetmek için [Yolculuk kaydı eklentisini](#trip-recording) kullanın.


### ODB-II Tarayıcısını Eşleştirme {#pair-odb-ii-scanner}

| | |
|--|--|
|![OBD bağlantısı](@site/static/img/plugins/obd/obd_connect.png)|![OBD bağlantısı](@site/static/img/plugins/obd/obd_connect_2.png)|

Tarayıcıyı aracınızın portuna bağlayın ve uygulama üzerinden eşleştirin:

- *Menü → Eklentiler → Araç Metrikleri → Ayarlar → Bağlan* veya **+**'ya gidin.
- Araç Metrikleri *Ana Menü*'de ise: *Menü → Araç Metrikleri → Ayarlar → Bağlan* veya **+**.

Listeden OBD-II cihazınızı seçin ve bağlantıyı kurun.


## Tarayıcı Ayarları {#scanner-settings}

**Android.** Şuraya gidin: *Menü → Eklentiler → Araç Metrikleri → OBD → üç nokta menüsü*

| | |
|--|--|
|![OBD ayarları](@site/static/img/plugins/obd/obd_settings.png)|![OBD ayarları](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Bağlan / Bağlantıyı Kes**. OBD-II sensörüyle bağlantıyı kurar veya sonlandırır.
- **Ayarlar**. OBD-II ayarları ekranını açar, bağlantı yönetimini ve mevcut araç parametrelerine erişimi sağlar.
- **Yeniden Adlandır**. Daha kolay tanımlama için sensöre özel bir ad atamanızı sağlar.
- **Unut**. Daha önce eşleştirilmiş OBD-II sensörünü listeden kaldırır, daha sonra ihtiyaç duyulursa yeniden eşleştirme gerektirir.


## Metrik Listesi {#metrics-list}

Metrikler netlik için kategorize edilmiştir. Gelişmiş teşhis araçları, bu parametreleri yorumlayarak önleyici bakımı sağlar:

*Sıcaklık:*

- **Emme Sıcaklığı**. Emme manifolduna giren havanın sıcaklığını gösterir.
- **Ortam Sıcaklığı**. Dış koşulları izler.
- **Soğutma Suyu Sıcaklığı**. Motor soğutma verimliliğini takip eder.
- **Motor Yağı Sıcaklığı**. Çalışma sırasındaki yağ durumunu gösterir.

*Motor:*

- **Motor Devri**. Dakikadaki motor devrini (RPM) izler.
- **Motor Çalışma Süresi**. Motorun çalışma süresini takip eder.
- **Hesaplanan Motor Yükü**. Motor iş yükü yüzdesini gösterir.

*Yakıt:*

- **Yakıt Basıncı**. Yakıt sistemi basıncını gösterir.
- **Yakıt Tüketimi**. Aracın yakıt tüketimini hesaplar.
- **Kalan Yakıt**. Araçtaki yakıt seviyesini gösterir.

*Diğer:*

- **Akü Seviyesi**. Aracın aküsünün voltaj seviyesini gösterir.
- **Araç Hızı**. Araç Hız Sensörü (VSS) verilerini gösterir.
- **Gaz Kelebeği Konumu**. Gaz kelebeği plakası açısı aracılığıyla motor hava girişini belirler.
  **VIN**. Aracın 17 karakterli kimlik numarasını gösterir.


## Yolculuk Kaydı {#trip-recording}

**Android**. Şuraya gidin: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD kaydı](@site/static/img/plugins/obd/obd_recording.png)| ![OBD kaydı](@site/static/img/plugins/obd/obd_recording_1.png)|

OBD-II verilerini bir GPX dosyasına dahil etmek için, [Yolculuk kaydı eklentisini](../plugins/trip-recording.md#recording-settings) kullanarak kaydetmek istediğiniz parametreleri seçmeniz gerekir. Bu, araç metriklerini yolculuk verilerinizle birlikte analiz etmenizi sağlar.

#### Etiketler {#tags}

OsmAnd, [GPX dosyasındaki](../plugins/trip-recording.md#recorded-gpx-file) araç metrikleri için özel etiket adları uygular. Örneğin:

- `vm_eotemp`: Motor Yağı Sıcaklığı.
- `vm_fpress`: Yakıt Basıncı.
- `vm_espeed`: Motor Devri.

Bu etiketler, kaydedilen GPX dosyasını incelerken belirli araç verilerini tanımlamayı ve kullanmayı kolaylaştırır.


## Widget'lar {#widgets}

**Android.** Şuraya gidin: *Menü → Ekranı Yapılandır → Widget'lar → Bir panel seçin → Araç Metrikleri*

| | |
|--|--|
|![OBD ayarları](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD ayarları](@site/static/img/plugins/obd/obd_widget.png)|

[Araç Metrikleri widget'ları](../widgets/info-widgets.md#vehicle-metrics-widgets) eklentiyi etkinleştirdiğinizde otomatik olarak dahil edilir. Görünmüyorlarsa, bunları [Ekranı Yapılandır](../widgets/configure-screen.md) menüsü aracılığıyla manuel olarak ekleyebilirsiniz.

### Widget Ayarları {#widget-settings}

Widget'lar, bağlı OBD-II cihazınızdan hız, motor metrikleri ve yakıt tüketimi gibi temel verileri gerçek zamanlı olarak görüntüler. Metrikleri sorunsuz bir şekilde takip etmek için yolculuğunuza başlamadan önce görünür olduklarından emin olun.

Bazı widget'lar görüntüleme modu seçenekleri sunar:

- **Anlık**. Seçilen metrik için gerçek zamanlı verileri görüntüler.
- **Ortalama**. Yapılandırılabilir bir zaman aralığında (15 saniye ila 60 dakika) ortalama değerleri görüntüler.


## İlgili makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Aralık 2024*