---
source-hash: cf566fbf4725e593ede70401c18b9dd79befb8e6c4e2a8f1fb000487ef2f0277
sidebar_position: 18
title: Eklentiler
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

Eklentiler, OsmAnd'ın işlevselliğini önemli ölçüde genişletir. Her biri, bir gezi kaydetme, çevrimdışı Wikipedia makalelerine erişme, arazi verilerini görselleştirme veya sokak düzeyinde bir görünüm sağlama gibi belirli bir görevi veya kullanım durumunu ele almak üzere tasarlanmıştır.

Eklentiler, OsmAnd uygulamasında etkinleştirilen dahili veya ayrı olarak yüklenen harici programlar olabilir. Üçüncü taraf eklentiler, OsmAnd API aracılığıyla çalışır ve OsmAnd verilerine erişebilir.


## Eklentiyi Yapılandır {#configure-plugin}

Bir eklentinin işlevselliğine erişmek için öncelikle [etkinleştirilmesi](#enable--disable) gerekir ve bazı eklentiler kullanılmadan önce [satın alma](#purchase) gerektirir. Daha sonra, bazı durumlarda belirli bir harita katmanının etkinleştirilmesi veya bir kullanıcı profilinin [yapılandırılması](#plugin-settings) gerekir.


### Etkinleştir / Devre Dışı Bırak {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Etkinleştir*

![Eklentileri etkinleştir Android](@site/static/img/settings/plugins_enable_android.png) ![Eklenti örneği Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Eklentileri etkinleştir iOS](@site/static/img/settings/plugins_enable_ios.png) ![Eklenti örneği iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Satın Alma {#purchase}

Çoğu eklenti ücretsiz olarak mevcuttur, yalnızca aşağıdaki listedeki eklentiler, kullanmak için bir [OsmAnd+ veya OsmAnd Pro](../purchases/index.md) lisansı satın almayı gerektirir:

- [Topografya](../plugins/topography.md)
- [3D Rölyef](../plugins/topography.md#3d-relief) (Topografya eklentisinin bir özelliği)
- [Wikipedia](../plugins/wikipedia.md)
- [Deniz haritası görünümü](../plugins/nautical-charts.md)
- [Hava Durumu](../plugins/weather.md)

Uygulama satın alma hakkında ayrıntılı bilgi [Satın Alma](../purchases/) bölümünde bulunabilir.

### Eklenti Özellikleri {#plugin-features}

OsmAnd Eklentileri şu Özellik gruplarını artırabilir: **Katmanlar**, **Widget'lar**, **Bağlam Menüsü eylemleri**, **Çekmece eylemleri**, **Harita Stili**, **Harita Kaynağı**, **Profil**.

🤖 *- yalnızca OsmAnd'ın Android sürümü için.*

| Eklenti adı | Özellikler |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Harita katmanı](../plugins/wikipedia.md#download-wikipedia-packages), [Bağlam menüsü](../plugins/wikipedia.md#wikipedia-settings) |
| [Çevrimiçi haritalar](#online-maps) |[Harita katmanı](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Gezi kaydı](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#recording-settings) |
| [Topografya](#topography) | [Harita katmanı](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D Rölyef](#topography) 🤖 | [Harita katmanı](../plugins/topography.md#3d-relief) |
| [Hava Durumu](../plugins/weather.md) | [Harita katmanı](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Ekran](../plugins/weather.md#weather-forecast-screen) |
| [Deniz haritası görünümü](#nautical-map-view) | [Harita stili](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-profile) |
| [Kayak haritası görünümü](#ski-map-view) | [Harita stili](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Ses/video notları](#audiovideo-notes) 🤖 | [Harita katmanı](../plugins/audio-video-notes.md#show-all-on-the-map), [Bağlam menüsü](../plugins/audio-video-notes.md#create-a-single-note), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap düzenleme](#openstreetmap-editing)| [Harita katmanı](../plugins/osm-editing.md#authorization) |
|[Park konumu](#parking-position) | [Bağlam menüsü](../plugins/parking.md#set-a-spot), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Harita katmanı](../plugins/mapillary.md#map-layer), [Bağlam menüsü](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Harici Sensörler](#external-sensors) 🤖 | [Widget](../plugins/external-sensors.md#widgets) |
|[Erişilebilirlik](#accessibility) 🤖 | [Özel Ayarlar](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd geliştirme](#osmand-development) | [Özel Ayarlar](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | [Harita Katmanı](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#tracker-widget), [Bağlam Menüsü](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [AIS gemi takipçisi](#ais-vessel-tracker) 🤖 | [Özel Ayarlar](../plugins/ais-tracker.md#plugin-settings) |


### Eklenti Ayarları {#plugin-settings}

:::caution NOT
Yalnızca OsmAnd geliştirme eklentisi ve OSM düzenleme eklentisi tüm profillerin ayarlarını değiştirir. Kalan eklentiler her profil için ayrı ayrı yapılandırılır.
:::

Çoğu eklenti, şu yollarla erişilebilen belirli profil veya genel ayarlar sağlar:

- *Ana Menü → Eklentiler → Eklenti adı → Ayarlar (iOS için &#x2699)* veya
- *Ana Menü → Ayarlar → Profil → [Eklenti ayarları](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ayarlar eklentisi Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Ayarlar eklentisi Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ayarlar eklentisi iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Ayarlar eklentisi iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Aşağıdaki eklentiler kendi ayarlarını sağlar:

🤖 *- yalnızca OsmAnd'ın Android sürümü için.*

| Eklenti adı | Ayarlar |
|:------------|:-------|
| [Gezi kaydı](#trip-recording) | Gezi kaydı [çalışma modlarını](../plugins/trip-recording.md#required-setup-parameters) yapılandırın |
| [Hava Durumu](#weather) | Hava olaylarını görüntülemek için ölçü birimlerini yapılandırın |
|[Ses/video notları](#audiovideo-notes) 🤖 | [Video formatını, ne kadar süreyle saklanacağını vb.](../plugins/audio-video-notes.md#plugin-settings) seçin |
|[OpenStreetMap düzenleme](#openstreetmap-editing)| Kullanıcı [girişini](../plugins/osm-editing.md#settings) belirtin |
| [Harici Sensörler](#external-sensors) 🤖 | Harici cihaza bağlanın [Ayarlar](../plugins/external-sensors.md#required-setup-parameters) |
| [Erişilebilirlik](#accessibility) 🤖 | [Ayarlar](../plugins/accessibility.md#plugin-settings) OsmAnd içinde Erişilebilirlik [Android özelliklerini](https://www.android.com/accessibility/) kullanmanıza olanak tanır. |
| [OsmAnd geliştirme](#osmand-development) | [Eklenti ayarları](../plugins/development.md#plugin-settings) geliştiriciler veya deneyimli kullanıcılar için özel özellikleri etkinleştirmenize olanak tanır |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | Tüm ayarlar ayrı bir uygulamada yapılandırılabilir |
| [AIS gemi takipçisi](#ais-vessel-tracker) | [Eklenti ayarları](../plugins/ais-tracker.md#plugin-settings) özel ayarları etkinleştirmenize olanak tanır |

### Eklenti Eylemleri {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *bu seçeneği kullanarak eklenti ayarları varsayılan değerlere sıfırlanabilir*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *eklenti ayarları başka bir profilden kopyalanabilir*.


## Eklentiler listesi {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Seyahatinizde Wikipedia'ya sahip olmak, ziyaret ettiğiniz yerler hakkında daha fazla bilgi edinmenize yardımcı olur. Çevrimdışı olarak kullanılabilir ve ilgi çekici noktalarla ilgili Wikipedia makalelerini doğrudan harita üzerinde gösterir.

### [Çevrimiçi Haritalar](./online-map.md) {#online-maps}

OsmAnd Çevrimiçi haritalar, uygulamada zaten bulunan OpenStreetMap veritabanına kapsamlı bir ektir. Bu eklentiyle, haritanıza çeşitli kaynaklardan gelen bilgilerle katmanlar ekleyebilirsiniz.

### [Gezi Kaydı](./trip-recording.md) {#trip-recording}

Nereye gittiğinizi anlatmak için, konumunuzun enlem ve boylamı gibi GPS verileri kaydedilip bir dosyada saklanabilir ve daha sonra yeniden kullanılabilir, geliştirilebilir, ara noktalarla zenginleştirilebilir, navigasyon için sağlanabilir, arkadaşlarla paylaşılabilir vb.

### [Topografya](./topography.md) {#topography}

Kontur çizgileri, Tepe Gölgesi, Eğim, 3D Rölyef gibi topografya bilgileri, yükseklik, rölyef, aşırılıklar, diklik, eşit yükseklikteki noktalar vb. görerek arazinin görsel bir değerlendirmesini yapmaya yardımcı olur.

### [Deniz Haritası Görünümü](./nautical-charts.md) {#nautical-map-view}

Deniz haritası görünümü, su üzerinde gezinmenize, popüler trafik rotalarını, su yolundaki engelleri, limanları, demirleme yerlerini ve diğer önemli referansları görmenize yardımcı olmak için okyanusların, denizlerin, kıyı bölgelerinin ve nehirlerin ayrıntılı grafiksel temsilini sağlar.

### [Kayak Haritası Görünümü](./ski-maps.md) {#ski-map-view}

Kayak Haritası Görünümü, kış renklerini ve yokuş aşağı veya kros pistlerini, ayrıca teleferikleri, telesiyejleri, yakındaki tesisleri ve hizmetleri gösterir; bu, rekreasyon alanları, kayak merkezleri ve arazi parkları gibi destinasyonlarda gezinmek için kullanışlıdır.

### [Ses/Video Notları](./audio-video-notes.md) {#audiovideo-notes}

Gelecekteki referans için ses/video notları oluşturun, örneğin bir olayı, sahneyi veya etkileşimi hatırlamak için. Oluşturulan ses/video notları *Yerlerim*'den ve harita üzerinde coğrafi konuma bağlı kullanıcı yapımı hikayelerin ve düşüncelerin ayrı bir katmanı olarak mevcuttur. Yalnızca Android için.

### [Park Konumu](./parking.md) {#parking-position}

Aracınızın sokakta bırakıldığı harita üzerinde bir nokta belirleyin ve park süresi sona erdiğinde takviminizi bilgilendirin. Bu, aracınızın zamanını ve konumunu takip etmenizi kolaylaştıracaktır.

### [OpenStreetMap Düzenleme](./osm-editing.md) {#openstreetmap-editing}

OpenStreetMap düzenleme eklentisi, dünyanın kapsamlı bir haritasını oluşturan ve halka açık güncel, açık kaynaklı veriler sağlayan küresel bir topluluk olan OpenStreetMap'e katkıda bulunmanızı sağlar.

### [Mapillary](./mapillary.md) {#mapillary}

[Mapillary](https://www.mapillary.com/) tarafından sağlanan rotalarınızın veya ilgi çekici yerlerinizin sokak düzeyindeki görünümlerini görün (internet bağlantısı gereklidir).

### [Erişilebilirlik](./accessibility.md) {#accessibility}

Erişilebilirlik eklentisi, cihazın erişilebilirlik özelliklerini doğrudan OsmAnd'da kullanılabilir hale getirir. Yalnızca Android için.

### [Harici Sensörler](./external-sensors.md) {#external-sensors}

Verilerini OsmAnd'da görüntülemek ve bilgileri iz kayıtlarda saklamak için harici sensörleri bağlayın.

### [Araç Metrikleri](./vehicle-metrics.md) {#vehicle-metrics}

Araç verilerini OsmAnd'da görüntülemek ve bilgileri iz kayıtlarda saklamak için OBD-II tarayıcıyı bağlayın.

### [Hava Durumu](./weather.md) {#weather}

Mevcut gün ve sonraki 7 gün için saatlik tahmini gösterir.

### [OsmAnd Geliştirme](./development.md) {#osmand-development}

OsmAnd geliştirme eklentisi, geliştiricileri ve deneyimli kullanıcıları hedefler. Navigasyon rotalarını simüle etmenize, ekran oluşturma performansını kontrol etmenize vb. olanak tanır.

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker, kişilerinizi OsmAnd'daki harita üzerinde nerede olduklarını görmenize yardımcı olur. Yalnızca Android için.

### [AIS Gemi Takipçisi](./ais-tracker.md) {#ais-vessel-tracker}

AIS konumlarını ve çevredeki gemiler hakkındaki bilgileri görüntüleyin. AIS verileri, harici bir AIS alıcısından ağ üzerinden alınır.

## [Özel Eklenti Oluşturma](./custom.md) {#create-a-custom-plugin}

*Özel Paket* makalesini takip ederek kendi eklentinizi oluşturabilirsiniz.


_______