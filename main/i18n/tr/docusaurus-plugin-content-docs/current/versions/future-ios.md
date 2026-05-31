---
source-hash: 229c58068a74b06d3fc63b8f92df8a4ca008fa25b9819b9b8d8243b8790942ed
sidebar_position: 5
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

# iOS 5.4 {#ios-54}

## Beta'ya Katılın {#join-beta}

iOS beta sürümleri (TestFlight) genellikle haftalık olarak (Ekip Sprint demosundan sonra) sağlanır. Açıklama içermezler ve sürekli sürümlere sahip olabilirler. Kararlı ve kullanıma hazır oldukları varsayılır.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">TestFlight'a Katılın</a>
</div>

<br/>


## Yenilikler {#whats-new}

- Yakındaki popüler yerleri içeren yeni bir **[Keşfet](https://osmand.net/docs/user/map/popular_places#explore-in-search)** sekmesiyle güncellenmiş Arama.
- Güneş, gezegenler ve yıldızların yollarını gösteren astronomik bir katman içeren yeni deneysel **[Astronomi eklentisi](https://osmand.net/docs/user/plugins/astronomy)**.
- Rotalar ve arazi için renk düzenleri oluşturmak ve özelleştirmek üzere eklenen bir **[palet düzenleyici](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)**.
- **[Akıllı Klasörler](https://osmand.net/docs/user/personal/tracks/smart-folder)** ile daha akıllı iz organizasyonu ve daha net özet istatistikleri.
- Özellikle yatay modda daha esnek **[widget ve harita düğmesi düzeni](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**.
- Yükseklik grafiği, çevrimdışı yükseklik hesaplama ve rota parametreleriyle geliştirilmiş **[Rota planla](https://osmand.net/docs/user/plan-route/create-route)**.
- **[İz analizi](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)** öğesine yokuş yukarı, yokuş aşağı ve düz bölümler eklendi.

<!--
- Last Uphill / Last Downhill mode for **[Trip recording widgets](https://osmand.net/docs/user/plugins/trip-recording#widgets)**, with switching between total and last ascent/descent.
- Updated **[Distance widget](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** with modes for total distance, last uphill/downhill distance.
- **[Max Speed widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing maximum speed for the whole trip or for the most recent uphill/downhill section.
- **[Average Slope widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing the average slope of the latest ascent or descent.
- *Show track on map* quick action added to the Trip recording widget group.
- Improvements in route selection and altitude graph integration under the updated rendering scheme.
- Elevation graph widget for navigation, displaying a compact profile along routes or GPX tracks.
- **[Popular places](https://osmand.net/docs/user/map/popular_places/)** layer updated with POI source selection and optional image previews on the map.
- New Explore section in Search with “Popular places nearby” and improved offline/no-data states.
- Enhanced POI search results with consistent city display, refined layout, and optional thumbnails.
- Default appearance settings for track folders, allowing new tracks to inherit a unified folder style.
-->


## Hata düzeltmeleri {#bug-fixes}

- OsmAnd Cloud'a eşitlenmeyen veya Ayarlar dışa aktarmasında görünmeyen [Akıllı Klasörler](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) düzeltildi.
- Yeni tasarım ve eklenen çevrimiçi fotoğraflarla [Vikipedi bağlam menüsü](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) güncellendi.
- “Burada ne var” menüsünde eksik [POI adları](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) düzeltildi.
- Makaleyi doğrudan göstermek için arama sonuçlarından [Seyahat Rehberleri](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) açılması düzeltildi.
- Bölge bağlam menüsündeki [Çevrimiçi Fotoğraflar](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) bölümünün konumu ayarlandı.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->