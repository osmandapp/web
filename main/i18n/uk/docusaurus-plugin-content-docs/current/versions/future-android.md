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



## Приєднатися до бета-тестування {#join-beta}

OsmAnd щоденно випускає декілька готових до використання збірок, що дозволяє відстежувати нові функції та брати участь у процесі перекладу OsmAnd. Ви можете взяти участь у тестуванні бета-версії OsmAnd за допомогою Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Що нового {#whats-new}

- Покращено **[Favorites](https://osmand.net/docs/user/personal/favorites)** з підтримкою медіавкладень (фото, аудіо та відео) та покращеною інтеграцією аудіо-/відеозаметок.
- Покращено **[navigation widgets](https://osmand.net/docs/user/widgets/nav-widgets)** з гнучкішим розміром та адаптацією макета для різних щільностей і орієнтацій екрана.
- Додано легенду карти до **[Configure Map](https://osmand.net/docs/user/map/configure-map-menu)** для кращого розуміння типів маршрутів та елементів карти.
- Покращено фільтрування маршрутів та візуальний контроль у **[Configure Map](https://osmand.net/docs/user/map/configure-map-menu)**, включаючи класифікації та пріоритети маршрутів.
- Покращено аналіз треків з новими типами графіків та детальнішими даними, такими як покриття, тип дороги та крутизна.
- Покращено керування треками з попереднім переглядом та кращою організацією у **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Автоматичне резервне копіювання та надійніша синхронізація даних користувача в **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, включаючи **[Smart Folders](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Початкові покращення морської навігації з удосконаленнями AIS та додатковими параметрами і віджетами навігації.
- Покращено роботу **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** завдяки вдосконаленому пошуку та елементам керування навігацією.
- Додано можливість взаємодії з картою на **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, зокрема вибір точок безпосередньо.
- Перероблено **[Elevation widget](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** з детальнішою інформацією про висоту маршруту.

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


## Виправлення помилок {#bug-fixes}

- Виправлено [проблему](https://github.com/osmandapp/OsmAnd/issues/16507), через яку властивості улюбленого місця (колір, значок, форма) не оновлювалися при зміні групи.
- Виправлено [неправильні напрямки з’їзду](https://github.com/osmandapp/OsmAnd/issues/23104) на кільцевих перехрестях в Android Auto.
- Виправлено неточні [значення підйому та спуску](https://github.com/osmandapp/OsmAnd/issues/20624) у віджетах висоти.
- Запобігано [повторній появі прихованих улюблених місць](https://github.com/osmandapp/OsmAnd/issues/24689) на карті при додаванні точок треку до папки.
- Виправлено [невідповідності між графіками](https://github.com/osmandapp/OsmAnd/issues/24712) на екрані «Подробиці».
- Виправлено [проблему](https://github.com/osmandapp/OsmAnd/issues/24791), через яку відкріплені папки «Улюблені» знову з’являлися закріпленими після перезапуску застосунку.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->