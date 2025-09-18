---
source-hash: 912ad78d69a9d46cc8391bc3f8411dc7ce9423498430a6854908948053c3f739
sidebar_position: 3
title:  Головне меню
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Огляд {#overview}

**Головне меню** — це основний список опцій, доступних для використання в додатку. Воно забезпечує швидкий доступ до налаштувань профілю, глобальних налаштувань, пошуку, особистих даних, навігації та інших функцій.

Іконка [Головного меню](../widgets/map-buttons.md#main-menu) '&#8801;' розташована в лівому нижньому куті екрана мапи. У режимі навігації ця кнопка за замовчуванням невидима. Вона з'являється після короткого дотику до мапи.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Головне меню Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Головне меню iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Головне меню (Бічне меню) {#main-menu-side-menu}

### Функції {#features}

- [Маркери на мапі](../personal/markers.md) — це інструмент, який дозволяє позначати місця на мапі.
- [Мої місця](../personal/myplaces.md) — це меню, яке за замовчуванням містить Обрані місця та треки, а також може містити [Аудіо/відео нотатки](../plugins/audio-video-notes.md) та [Редагування OSM](../plugins/osm-editing.md) (якщо відповідні плагіни увімкнені).
- [Пошук](../search/index.md) (Android) — це інструмент, який дозволяє знаходити місця або об'єкти, що існують на мапі.
- Кнопка [Маршрути](../widgets/map-buttons.md#directions) дозволяє створити маршрут і почати навігацію.
- [Налаштувати мапу](../map/configure-map-menu.md) — це меню, яке дозволяє налаштовувати вигляд мапи.
- [Завантажити мапи](../start-with/download-maps.md) — це меню, що містить усі файли, які можна завантажити.
- [Путівники (Beta)](../plan-route/travel-guides.md) (*Android*) — це інструмент, який дозволяє використовувати путівник Wikivoyage для вашої подорожі.
- [Планувати маршрут](../plan-route/create-route.md) — це інструмент, який дозволяє вимірювати відстані на мапі, створювати GPX-треки або додавати нові сегменти до існуючих.
- [* Запис поїздки](../plugins/trip-recording.md) (*Android*) — це інструмент, який дозволяє записувати всі переміщення в трек за допомогою GPS телефону.

### Налаштування {#settings}

- [Налаштувати екран](../widgets/configure-screen.md) — це меню, яке дозволяє налаштовувати відображення віджетів на мапі.
- [Плагіни](../plugins/index.md#configure-plugin) — це список додаткових функцій та розширених налаштувань.
- [Налаштування](../personal/global-settings.md) — це меню, яке дозволяє налаштовувати основні параметри програми.
- [Довідка](./first-steps.md#offline-help) надає швидкий доступ до посібника, інформації про версію програми та дозволяє швидко зв'язатися з командою розробників.

### Активний профіль (Android) {#active-profile-android}

*Головне меню* надає швидкий доступ до перемикання та [налаштування профілю](../personal/profiles.md). Основне призначення профілів — мати різний вигляд та функціонал програми для навігації. Хоча ви можете використовувати їх для налаштування екрана та віджетів і перемикати профілі для різних цілей перегляду. Усі [налаштування](../personal/profiles.md) конфігуруються окремо для кожного профілю.

![меню профілю](@site/static/img/menu/profile_menu.png)

У цьому меню ви можете **перемкнути** активний профіль, **налаштувати** (змінити налаштування) активного профілю або **керувати** всіма профілями програми.


### Налаштування (Розширене використання Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Увімкнути*.  

![Пункти меню бічної панелі](@site/static/img/settings/drawer_menu_correct.png)  

- Це меню дозволяє змінювати порядок, приховувати або показувати елементи з [Бічного меню](../personal/profiles.md#drawer), копіювати список елементів з іншого профілю та скидати налаштування за замовчуванням.  

- Кнопка *Мінус* видаляє елемент з *Головного меню* в бічній панелі та переміщує його до розділу *Приховані*. Кнопка *Перемістити* змінює позицію вибраного елемента у списку