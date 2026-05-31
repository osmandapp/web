---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
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


# Android 5.4 {#android-54}



## Beta'ya Katılın {#join-beta}

OsmAnd her gün çeşitli Kullanıma Hazır yapılar yayınlayarak yeni özellikleri takip etmenize ve OsmAnd çeviri sürecine katılmanıza olanak tanır. Google Play'i kullanarak OsmAnd'ın beta sürümünü test etmeye katılabilirsiniz.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Yenilikler {#whats-new}

- Medya ekleri (fotoğraf, ses ve video) desteği ve geliştirilmiş ses/video not entegrasyonu ile **[Favoriler](https://osmand.net/docs/user/personal/favorites)** iyileştirildi.
- Farklı ekran yoğunlukları ve yönlerinde daha esnek boyut ve düzen uyarlaması ile **[navigasyon widget'ları](https://osmand.net/docs/user/widgets/nav-widgets)** iyileştirildi.
- Rota türleri ve harita öğelerinin daha iyi anlaşılması için **[Haritayı Yapılandır](https://osmand.net/docs/user/map/configure-map-menu)** bölümüne harita legend eklendi.
- Rota sınıflandırmaları ve öncelikleri dahil olmak üzere **[Haritayı Yapılandır](https://osmand.net/docs/user/map/configure-map-menu)** bölümünde rota filtreleme ve görsel kontrol iyileştirildi.
- Yüzey, yol türü ve eğim gibi yeni grafik türleri ve daha ayrıntılı verilerle iz analizi iyileştirildi.
- **[Yerlerim](https://osmand.net/docs/user/personal/myplaces)** içindeki önizlemeler ve geliştirilmiş organizasyon ile iz yönetimi iyileştirildi.
- **[Akıllı Klasörler](https://osmand.net/docs/user/personal/tracks/smart-folder)** dahil olmak üzere kullanıcı verilerinin **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** içindeki otomatik yedeklemesi ve daha güvenilir senkronizasyonu.
- AIS geliştirmeleri ve ek navigasyon parametreleri ile widget'larla ilk deniz navigasyonu iyileştirmeleri.
- Geliştirilmiş arama ve navigasyon kontrolleri ile **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** deneyimi iyileştirildi.
- Doğrudan nokta seçimi dahil olmak üzere **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** üzerinde haritayla etkileşim kurma özelliği eklendi.
- Daha ayrıntılı rota yükseklik bilgisi ile yeniden tasarlanmış **[Yükseklik widget'ı](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)**.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Hata düzeltmeleri {#bug-fixes}

- Favori grubu değiştirildiğinde favori özelliklerinin (renk, simge, şekil) güncellenmediği [sorun](https://github.com/osmandapp/OsmAnd/issues/16507) düzeltildi.
- Android Auto'da yuvarlak kavşaklarda gösterilen [yanlış çıkış yönleri](https://github.com/osmandapp/OsmAnd/issues/23104) düzeltildi.
- Yükseklik widget'larındaki yanlış [yokuş yukarı ve yokuş aşağı değerleri](https://github.com/osmandapp/OsmAnd/issues/20624) düzeltildi.
- İz ara noktaları bir klasöre eklendiğinde [gizli favorilerin](https://github.com/osmandapp/OsmAnd/issues/24689) haritada yeniden görünmesi engellendi.
- Ayrıntılar ekranındaki [grafikler arasındaki tutarsızlıklar](https://github.com/osmandapp/OsmAnd/issues/24712) çözüldü.
- Sabitlenmemiş Favoriler klasörlerinin uygulama yeniden başlatıldıktan sonra tekrar sabitlenmiş görünmesine neden olan [sorun](https://github.com/osmandapp/OsmAnd/issues/24791) çözüldü.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->