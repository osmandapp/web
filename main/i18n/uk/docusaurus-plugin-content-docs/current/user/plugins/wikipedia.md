---
source-hash: 9e8ffc4e9ad66f08b7e397dce821b6b3045def307beb315cd2a5eb994c70479b
sidebar_position: 18
title:  Вікіпедія
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




## Огляд {#overview}

:::info Платна функція
Плагін Вікіпедія є [платною функцією](../purchases/index.md) застосунку OsmAnd.
:::

Наявність Вікіпедії під час подорожі допоможе вам дізнатися більше про місця, які ви відвідуєте. Вона доступна в автономному режимі та показує Популярні місця (Android) / статті Вікіпедії (iOS), пов'язані з визначними місцями, безпосередньо на мапі.

Плагін Вікіпедія є окремою функцією, яку можна вмикати/вимикати за потреби. Після ввімкнення він дозволяє завантажувати дані Вікіпедії, [завантажені](../personal/maps-resources.md#download-maps-maps) для кожного географічного регіону. Мапа містить два види завантажених знань з Вікіпедії: коротку інформацію та повну статтю.


Коротка інформація надається POI Вікіпедії (скорочення від "[точки інтересу](../map/point-layers-on-map.md)"). Якщо опція Вікіпедії увімкнена в меню, на мапі з'являється POI Вікіпедії. Коли ви торкаєтеся точки інтересу, вона розгортається, надаючи коротку інформацію з Вікіпедії, а також можливість відкрити повну статтю. POI Вікіпедії, а також пов'язані статті, доступні в автономному режимі. Ви можете читати їх за потреби, перемикати мови та шукати іншу інформацію у Вікіпедії.


[Вікіпедія](https://en.wikipedia.org/wiki/Wikipedia) — це безкоштовна, багатомовна, відкрита онлайн-енциклопедія, створена та підтримувана спільнотою редакторів-волонтерів за допомогою системи редагування на основі вікі.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб відобразити дані Вікіпедії на мапі, потрібно зробити наступні налаштування:

1. [Придбайте](../plugins/index.md#purchase) та [увімкніть](../plugins/index.md#enable--disable) плагін Вікіпедія у розділі Плагіни *Головного меню*.
2. Завантажте [пакети Вікіпедії](#download-wikipedia-packages) для потрібних регіонів.
3. Відобразіть [POI Вікіпедії](#display-wikipedia-on-the-map) на мапі для потрібного профілю.
4. Налаштуйте бажані [мови](#set-preferred-language) для читання статей.


## Завантажити пакети Вікіпедії {#download-wikipedia-packages}

Дані Вікіпедії доступні для кожного географічного регіону. Якщо вони завантажені для одного регіону, але не завантажені для іншого, у першому випадку ви можете працювати з інформацією Вікіпедії під час перегляду регіону на мапі, а в іншому випадку регіон не матиме жодної інформації Вікіпедії. Після завантаження дані Вікіпедії стають доступними загалом, а також в автономному режимі.

Щоб завантажити дані Вікіпедії для регіону, перейдіть до [доступних пакетів для завантаження в *Головному меню*](../start-with/download-maps.md#download---main-menu), знайдіть потрібний регіон та відкрийте його. Дані Вікіпедії будуть серед інших пакетів.

Ви можете відкрити дані Вікіпедії для завантаження за регіонами наступним чином:

1. **Android**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Виберіть потрібний регіон. Після відкриття регіону дані Вікіпедії будуть серед інших пакетів.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Щоб побачити, які дані вже завантажено, перейдіть до *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Щоб побачити, які дані вже завантажено, перейдіть до *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Відображення Вікіпедії на мапі {#display-wikipedia-on-the-map}

Завантаживши дані Вікіпедії для потрібних регіонів, ви можете контролювати видимість цих даних на мапі. Видимість контролюється [Популярними місцями (Вікіпедія)](../map/point-layers-on-map.md#-wikipedia) **для Android** / [POI Вікіпедії](../map/point-layers-on-map.md#-wikipedia) **для iOS**, які можна показувати або приховувати для всіх завантажених регіонів певним [профілем](../personal/profiles.md), наприклад, профілем для водіння, профілем для їзди на велосипеді, іншим профілем для відображення громадського транспорту та іншими.

Щоб показати або приховати POI Вікіпедії, спочатку виберіть профіль, а потім увімкніть/вимкніть опцію **Вікіпедія**.

Щоб показати/приховати POI Вікіпедії, зробіть наступне:

1. Перейдіть до:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Виберіть Профіль та знайдіть розділ налаштувань *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* у меню.
3. Увімкніть *<Translate android="true" ids="poi_osmwiki"/>* **для Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **для iOS**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia POIs on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Пошук у Вікіпедії {#search-wikipedia}

За наявності завантажених даних Вікіпедії, незалежно від режиму видимості [POI Вікіпедії](../map/point-layers-on-map.md#-wikipedia) на мапі, можна [шукати](../search/search-poi.md) будь-яку інформацію з Вікіпедії.

Коли ви натискаєте кнопку Пошук, з'являється додаткова панель, що дозволяє [шукати](../search/index.md) у всьому тексті та/або в певній категорії. У першому випадку результати пошуку покажуть POI Вікіпедії з відповідними статтями Вікіпедії серед інших типів інформації. У випадку [пошуку за категорією Вікіпедії](../search/search-poi.md#poi-search), результати пошуку покажуть лише інформацію Вікіпедії, відсортовану за найближчим розташуванням до області мапи, яка зараз відображається на екрані.

- У версії **Android** ви можете відкрити [Пошук](../search/index.md), натиснувши *іконку Пошуку* у верхньому лівому куті екрана та/або натиснувши *опцію Пошук* у меню.
- У версії **iOS**, щоб відкрити [Пошук](../search/index.md), іконка Пошуку знаходиться у верхньому лівому куті екрана.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Щоб шукати за [категорією](../search/search-poi.md#poi-search) Вікіпедії, виберіть: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- За необхідності натисніть опцію **Показати Вікіпедію на мапі** у верхній частині панелі пошуку, і результати пошуку з категорії Вікіпедії з'являться на мапі.


## Стаття Вікіпедії {#wikipedia-article}

Щоб відкрити статтю Вікіпедії:

1. Увімкніть [шар POI Вікіпедії](../map/point-layers-on-map.md#-wikipedia) для вказаного профілю.
2. Натисніть POI на мапі.
3. У [контекстному меню](../map/map-context-menu.md) POI натисніть *Деталі* (або просто потягніть *контекстне меню* вгору), щоб переглянути анотацію обраної статті Вікіпедії.
4. Якщо ви натиснете на цей текст (для версії iOS), ви будете перенаправлені до офлайн-статті Вікіпедії.
5. Використовуйте кнопку *Читати статтю* або *Читати повну статтю*, щоб відкрити повну версію статті Вікіпедії.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Налаштування Вікіпедії {#wikipedia-settings}

Ви можете [встановити мову(-и)](#set-preferred-language), якою ви віддаєте перевагу читати [статті](#wikipedia-article), а також налаштувати [параметри завантаження зображень](#download-images) для кожного [профілю](../personal/profiles.md).

### Встановити бажану мову {#set-preferred-language}

У версіях застосунку OsmAnd для **Android** та **iOS** ви можете встановити бажану мову (або мови) для відображення статей Вікіпедії за допомогою меню *Налаштувати мапу*. Якщо ви виберете більше однієї мови, статті *Вікіпедії* на мапі будуть відображатися будь-якою з них. Перейдіть до:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Виберіть потрібний профіль та у розділі *<Translate android="true" ids="shared_string_show"/>* виберіть *<Translate android="true" ids="poi_osmwiki"/>* для Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* для iOS.
3. Вимкніть опцію *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Виберіть конкретну мову(-и) у списку, що відкрився.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
У версії **iOS** ви також можете встановити бажану мову для статей Вікіпедії за допомогою:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Перемикання мов у статті {#switch-languages-inside-the-article}

Якщо *стаття Вікіпедії* доступна різними мовами, ви можете перемикати мову під час читання. Після натискання відповідної іконки у верхньому правому куті екрана вам будуть запропоновані варіанти на вибір.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Завантажити зображення {#download-images}

Ви можете вибрати, чи завантажувати зображення з Вікіпедії на свій пристрій, чи ні, у *статті Вікіпедії*:

- **Android**. Відкрийте *[статтю Вікіпедії](#display-wikipedia-on-the-map) → &#8942; → Опції*
- **iOS**. Відкрийте *[статтю Вікіпедії](#display-wikipedia-on-the-map) → Іконка зображення*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

У версії застосунку **iOS** ви також можете отримати доступ до параметрів завантаження зображень за допомогою *налаштувань плагіна Вікіпедії*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мап)](../../user/map/vector-maps.md)

> *Останнє оновлення: Травень 2025*