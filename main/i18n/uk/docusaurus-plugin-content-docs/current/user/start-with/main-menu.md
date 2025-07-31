---
source-hash: e35d8bb8c463024a373522c4e8114cf2ea9c85d3dca5ea142e9e2507d2330c58
sidebar_position: 3
title: Головне меню
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Огляд {#overview}

**Головне меню** — це основний список опцій, доступних для використання в застосунку. Воно надає швидкий доступ до налаштування профілю, глобальних налаштувань, пошуку, особистих даних, навігації та інших функцій.

Іконка [Головного меню](../widgets/map-buttons.md#main-menu) '&#8801;' розташована в лівому нижньому куті екрана Мапи. У режимі навігації ця кнопка за замовчуванням невидима. Вона з'являється після короткого натискання на мапу.

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

- [Маркери мапи](../personal/markers.md) — це інструмент, який дозволяє відмічати місце на мапі.
- [Мої місця](../personal/myplaces.md) — це меню, яке за замовчуванням включає Вибране та треки, а також може включати [Аудіо/Відео нотатки](../plugins/audio-video-notes.md) та [Редагування OSM](../plugins/osm-editing.md) (якщо ці плагіни увімкнені).
- [Пошук](../search/index.md) (Android) — це інструмент, який дозволяє знайти місце або об'єкт, що існує на мапі.
- Кнопка [Напрямки](../widgets/map-buttons.md#directions) дозволяє створити маршрут та розпочати навігацію.
- [Налаштувати мапу](../map/configure-map-menu.md) — це меню, яке дозволяє налаштувати вигляд мапи.
- [Завантажити мапи](../start-with/download-maps.md) — це меню, яке містить усі файли, які можна завантажити.
- [Путівники (Бета)](../plan-route/travel-guides.md) (*Android*) — це інструмент, який дозволяє використовувати путівник Wikivoyage для вашої подорожі.
- [Планування маршруту](../plan-route/create-route.md) — це інструмент, який дозволяє вимірювати відстані на мапі, створювати GPX-треки або додавати нові сегменти до існуючих.
- [* Запис поїздки](../plugins/trip-recording.md) (*Android*) — це інструмент, який дозволяє записувати всі переміщення в трек за допомогою GPS телефону.

### Налаштування {#settings}

- [Налаштувати екран](../widgets/configure-screen.md) — це меню, яке дозволяє налаштувати відображення віджетів на мапі.
- [Плагіни](../plugins/index.md#configure-plugin) — це список додаткових функцій та розширених налаштувань.
- [Налаштування](../personal/global-settings.md) — це меню, яке дозволяє налаштувати основні параметри застосунку.
- [Допомога](./first-steps.md#offline-help) надає швидкий доступ до вашого посібника, інформації про версію застосунку та дозволяє швидко зв'язатися з командою розробників.

### Активний профіль (Android) {#active-profile-android}

*Головне меню* надає швидкий доступ для перемикання та [налаштування профілю](../personal/profiles.md). Основне призначення профілів — мати різний вигляд та відчуття застосунку для навігації. Хоча ви можете використовувати його для налаштування екрана та віджетів і перемикати профілі для різних цілей перегляду. Усі [налаштування](../personal/profiles.md) налаштовуються окремо для кожного профілю.

![profile_menu](@site/static/img/menu/profile_menu.png)

У цьому меню ви можете **перемкнути** активний профіль, **налаштувати** (змінити налаштування) для активного профілю або **керувати** всіма профілями застосунку.


### Налаштування (Розширене використання Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Увімкнути*.  

![Елементи меню ящика ](@site/static/img/settings/drawer_menu_correct.png)  

- Це меню дозволяє змінювати порядок, приховувати або показувати елементи з [Ящика](../personal/profiles.md#drawer), копіювати список елементів з іншого профілю та скидати налаштування за замовчуванням.  

- Кнопка *Мінус* видаляє елемент з *Головного меню* в ящику та переміщує його до розділу *Приховані*. Кнопка *Перемістити* змінює позицію вибраного елемента у списку.  

- Елементи, переміщені до розділу *Приховані*, не відображаються в меню Ящика, але всі опції, налаштування або плагіни з цього списку продовжують працювати. Ви можете відновити елементи, натиснувши зелену кнопку ліворуч від їхніх назв.  
    ![Приховані елементи меню ящика ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Останнє оновлення: липень 2022*