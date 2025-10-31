---
source-hash: 2f914f4ecf9df9f98177dd069c3c143806b2827059231c6238393af7c70a080d
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
Модуль Вікіпедія є [платною функцією](../purchases/index.md) застосунку OsmAnd.  
:::

Наявність Вікіпедії під час подорожі допоможе вам дізнатися більше про місця, які ви відвідуєте. Вона доступна в режимі офлайн і показує Популярні місця (Android) / Статті Вікіпедії (iOS), пов'язані з точками інтересу, безпосередньо на мапі.  

Модуль Вікіпедія — це окрема функція, яку можна вмикати/вимикати за потреби. Після ввімкнення він дозволяє завантажувати дані Вікіпедії, [завантажені](../personal/maps-resources#downloads-menu) для кожного географічного регіону. На мапі є два види завантажених знань з Вікіпедії: коротка інформація та повна стаття.  


Коротка інформація надається POI Вікіпедії (абревіатура від "[точка інтересу](../map/point-layers-on-map.md)"). Якщо в меню увімкнено опцію Вікіпедія, на мапі з'являється POI Вікіпедії. Коли ви торкаєтеся точки інтересу, вона розгортається, щоб надати коротку інформацію з Вікіпедії, а також можливість відкрити повну статтю. POI Вікіпедії, а також пов'язані з нею статті, доступні в режимі офлайн. Ви можете читати їх за потреби, перемикати мови та шукати іншу інформацію у Вікіпедії.  


[Вікіпедія](https://en.wikipedia.org/wiki/Wikipedia) — це безкоштовна, багатомовна, відкрита онлайн-енциклопедія, що створюється та підтримується спільнотою редакторів-добровольців за допомогою системи редагування на основі вікі.  

&nbsp;  
![Вікіпедія](@site/static/img/map/map-wikipedia.png)


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб відобразити дані Вікіпедії на мапі, вам потрібно виконати наступні налаштування:

1. [Придбайте](../plugins/index.md#purchase) та [увімкніть](../plugins/index.md#enable--disable) модуль Вікіпедія у розділі Модулі *Головного меню*.
2. Завантажте [пакети Вікіпедії](#download-wikipedia-packages) для потрібних регіонів.  
3. Відобразіть [POI Вікіпедії](#display-wikipedia-on-the-map) на мапі для потрібного профілю.  
4. Налаштуйте бажані [мови](#set-preferred-language) для читання статей.


## Завантаження пакетів Вікіпедії {#download-wikipedia-packages}

Дані Вікіпедії доступні для кожного географічного регіону. Якщо вони завантажені для одного регіону і не завантажені для іншого, то в першому випадку ви можете працювати з інформацією з Вікіпедії при перегляді регіону на мапі, а в іншому випадку регіон не матиме жодної інформації з Вікіпедії. Після завантаження дані Вікіпедії стають доступними як в цілому, так і в режимі офлайн.

Щоб завантажити дані Вікіпедії для регіону, перейдіть до [доступних для завантаження пакетів у *Головному меню*](../start-with/download-maps.md#downloading-maps), знайдіть потрібний регіон і відкрийте його. Дані Вікіпедії будуть серед інших пакетів.

Ви можете відкрити дані Вікіпедії для завантаження за регіонами наступним чином:

1. **Android**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Виберіть потрібний регіон. Після відкриття регіону дані Вікіпедії будуть серед інших пакетів.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Щоб побачити, які дані вже завантажено, перейдіть до *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Завантаження Вікіпедії в Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Щоб побачити, які дані вже завантажено, перейдіть до *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Завантаження Вікіпедії в iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Відображення Вікіпедії на мапі {#display-wikipedia-on-the-map}

Завантаживши дані Вікіпедії для потрібних регіонів, ви можете керувати видимістю цих даних на мапі. Видимість контролюється [Популярними місцями (Вікіпедія)](../map/point-layers-on-map.md#-wikipedia) **для Android** / [POI Вікіпедії](../map/point-layers-on-map.md#-wikipedia) **для iOS**, які можна показувати або приховувати для всіх завантажених регіонів за допомогою певного [профілю](../personal/profiles.md), наприклад, профілю для водіння, профілю для їзди на велосипеді, іншого профілю для показу громадського транспорту та інших.  

Щоб показати або приховати POI Вікіпедії, спочатку виберіть профіль, а потім увімкніть/вимкніть опцію **Вікіпедія**.

Щоб показати/приховати POI Вікіпедії, виконайте наступні дії:

1. Перейдіть до: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Виберіть профіль і знайдіть розділ налаштувань *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* у меню.  
3. Увімкніть *<Translate android="true" ids="poi_osmwiki"/>* **для Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **для iOS**.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI Вікіпедії на Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Вікіпедії на iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Пошук у Вікіпедії {#search-wikipedia}

Із завантаженими даними Вікіпедії, незалежно від режиму видимості [POI Вікіпедії](../map/point-layers-on-map.md#-wikipedia) на мапі, можна [шукати](../search/search-poi.md) будь-яку інформацію з Вікіпедії.

Коли ви натискаєте кнопку Пошук, з'являється додаткова панель, що дозволяє [шукати](../search/index.md) по всьому тексту та/або в певній категорії. У першому випадку результати пошуку покажуть POI Вікіпедії з відповідними статтями Вікіпедії серед інших типів інформації. У випадку [пошуку за категоріями Вікіпедії](../search/search-poi.md#poi-search-by-categories), результати пошуку покажуть лише інформацію з Вікіпедії, відсортовану за найближчим розташуванням до області мапи, яка зараз відображається на екрані.  

- У версії **Android** ви можете відкрити [Пошук](../search/index.md), натиснувши *іконку Пошуку* у верхньому лівому куті екрана та/або натиснувши опцію *Пошук* у меню.
- У версії **iOS** для відкриття [Пошуку](../search/index.md) іконка Пошуку знаходиться у верхньому лівому куті екрана.

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

- Щоб шукати за [категорією](../search/search-poi.md#poi-search-by-categories) Вікіпедії, виберіть: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Категорія Вікіпедії на Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Категорія Вікіпедії на iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- За потреби торкніться опції **Показати Вікіпедію на мапі** у верхній частині панелі пошуку, і результати пошуку з категорії Вікіпедії з'являться на мапі.  


## Стаття Вікіпедії {#wikipedia-article}

Щоб відкрити статтю Вікіпедії:

1. Увімкніть [шар POI Вікіпедії](../map/point-layers-on-map.md#-wikipedia) для вказаного профілю.
2. Торкніться POI на мапі.
3. У [контекстному меню](../map/map-context-menu.md) POI торкніться *Деталі* (або просто потягніть *контекстне меню* вгору), щоб переглянути анотацію обраної статті Вікіпедії.
4. Якщо ви торкнетеся цього тексту (для версії iOS), ви будете перенаправлені до офлайн-статті Вікіпедії.
5. Використовуйте кнопку *Читати статтю* або *Читати повну статтю*, щоб відкрити повну версію статті Вікіпедії.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI французької Вікіпедії англійською](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI французької Вікіпедії англійською в iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Налаштування Вікіпедії {#wikipedia-settings}

Ви можете [встановити мову(и)](#set-preferred-language), якою ви бажаєте читати [статті](#wikipedia-article), а також налаштувати [параметри завантаження зображень](#download-images) для кожного [профілю](../personal/profiles.md).

### Встановлення бажаної мови {#set-preferred-language}

У версіях застосунку OsmAnd для **Android** та **iOS** ви можете встановити бажану мову (або мови) для відображення статей Вікіпедії за допомогою меню *Налаштувати мапу*. Якщо ви виберете більше однієї мови, статті *Вікіпедії* на мапі будуть відображатися будь-якою з них. Перейдіть до:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Виберіть потрібний профіль і в розділі *<Translate android="true" ids="shared_string_show"/>* виберіть *<Translate android="true" ids="poi_osmwiki"/>* для Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* для iOS.  
3. Вимкніть опцію *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Виберіть конкретну мову(и) у списку, що відкрився.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Встановлення бажаної мови на Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Встановлення бажаної мови на iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
У версії для **iOS** ви також можете встановити бажану мову для статей Вікіпедії, використовуючи:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Перемикання мов у статті {#switch-languages-inside-the-article}

Якщо *стаття Вікіпедії* доступна різними мовами, ви можете перемкнути мову під час читання. Після натискання на відповідну іконку у верхньому правому куті екрана вам будуть запропоновані варіанти для вибору.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Перемикання мов для конкретної статті](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Перемикання мов для конкретної статті](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Завантаження зображень {#download-images}

Ви можете вибрати, чи завантажувати зображення з Вікіпедії на свій пристрій, чи ні, всередині *статті Вікіпедії*:

- **Android**. Відкрийте *[Стаття Вікіпедії](#display-wikipedia-on-the-map) → &#8942; → Опції*
- **iOS**. Відкрийте *[Стаття Вікіпедії](#display-wikipedia-on-the-map) → Іконка зображення*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Перемикання зображень](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Перемикання зображень](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

У версії застосунку для **iOS** ви також можете отримати доступ до параметрів завантаження зображень за допомогою *налаштувань модуля Вікіпедія*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Перемикання зображень](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)