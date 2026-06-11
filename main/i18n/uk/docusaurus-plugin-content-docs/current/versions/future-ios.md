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

## Приєднатися до бета-тестування {#join-beta}

Бета-збірки iOS (TestFlight) зазвичай надаються щотижня (після демонстрації Team Sprint). Вони не містять описів і можуть мати безперервне версіонування. Вважається, що вони стабільні та готові до використання.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>

<br/>


## Що нового {#whats-new}

- Пошук оновлено з новою вкладкою **[Дослідити](https://osmand.net/docs/user/map/popular_places#explore-in-search)**, що містить популярні місця поблизу.
- Новий експериментальний **[Плагін «Астрономія»](https://osmand.net/docs/user/plugins/astronomy)** з астрономічним накладенням, що показує шляхи Сонця, планет і зірок.
- Додано **[редактор палітри](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** для створення та налаштування колірних схем для маршрутів і рельєфу.
- Розумніша організація треків за допомогою **[Smart Folders](https://osmand.net/docs/user/personal/tracks/smart-folder)** і чіткішої зведеної статистики.
- Гнучкіше **[розташування віджетів і кнопок карти](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, особливо в альбомному режимі.
- Покращено **[Планування маршруту](https://osmand.net/docs/user/plan-route/create-route)** з графіком висоти, офлайн-розрахунком висоти та параметрами маршруту.
- Додано сегменти підйому, спуску та рівнин до **[аналізу треку](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

<!--
- Режим останнього підйому / останнього спуску для **[Віджети запису поїздки](https://osmand.net/docs/user/plugins/trip-recording#widgets)** з перемиканням між загальним і останнім набором/спуском.
- Оновлений **[Віджет відстані](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** з режимами для загальної відстані, останньої відстані підйому/спуску.
- **[Віджет максимальної швидкості](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)**, що показує максимальну швидкість для всієї поїздки або для найновішої ділянки підйому/спуску.
- **[Віджет середнього нахилу](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)**, що показує середній нахил останнього набору або спуску.
- Швидка дія *Показати трек на карті* додано до групи віджетів запису поїздки.
- Покращення у виборі маршруту та інтеграції графіка висоти в оновленій схемі рендерингу.
- Віджет графіка висоти для навігації, що відображає компактний профіль уздовж маршрутів або GPX-треків.
- Шар **[Популярні місця](https://osmand.net/docs/user/map/popular_places/)** оновлено з вибором джерела POI та необов'язковими попередніми переглядами зображень на карті.
- Новий розділ «Дослідити» у пошуку з «Popular places nearby» та покращеними станами офлайн/відсутності даних.
- Покращені результати пошуку POI з послідовним відображенням міста, вдосконаленим макетом та необов'язковими ескізами.
- Налаштування зовнішнього вигляду за замовчуванням для папок треків, що дозволяють новим трекам успадковувати єдиний стиль папки.
-->


## Виправлення помилок {#bug-fixes}

- Виправлено, що [Smart Folders](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) не синхронізуються з OsmAnd Cloud і не з’являються в експорті налаштувань.
- Оновлено [контекстне меню Вікіпедії](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) з новим дизайном і додано онлайн-фото.
- Виправлено відсутність [назв POI](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) у меню «Що тут».
- Виправлено відкриття [Туристичних путівників](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) з результатів пошуку для безпосереднього показу статті.
- Виправлено розташування розділу [Онлайн-фото](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) у контекстному меню регіону.

<!--
- Швидше відкриття контекстних меню при натисканні на POI, Обране, треки та будівлі.
- Правильна обробка POI на основі відносин для мультиполігонів.
- Виправлено появу «null» замість назви міста в результатах пошуку POI та покращено послідовність фону в нічному режимі.
- Відновлено натискувану поведінку для маршрутів фітнесу, бігу та каное з щитами.
-->