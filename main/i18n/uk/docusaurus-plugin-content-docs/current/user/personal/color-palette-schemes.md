---
source-hash: 3e1eba0c128d1ad05a1bdb817c7e495e0e8772c3818a05fe0583ef8e6277b1c5
sidebar_position: 5
title: Колірні схеми
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



## Огляд {#overview}

:::info Платна функція

Колірні схеми використовуються як частина платних функцій [Maps+](../purchases/index.md) та Pro <ProFeature />.

:::

Колірні схеми використовуються для [колоризації маршрутів](#routes), [рельєфу мапи](#terrain) та [карти погоди](#weather) і є окремою частиною інформації, яку можна експортувати, імпортувати та редагувати для зміни колірної схеми мапи та візуалізації даних.

Дані колірної палітри доступні в меню [*Карти та ресурси*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Меню → Карти та ресурси → Локальні → Кольори*

![Палітри](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Меню → Карти та ресурси → Локальні → Кольори*

![Колірна палітра](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Типи схем {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Палітри](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Колірна палітра](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Рельєф {#terrain}

Файли рельєфу (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) визначають 3 [візуалізації рельєфу](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Відтінення рельєфу, Ухил* та *Висота*. Для кожного типу можна мати кілька палітр, наприклад, *лавинний схил* надається за замовчуванням.

### Маршрути {#routes}

Для візуалізації лінійного градієнта використовуються файли палітри (`route_<type_name>_<palette_name>.txt`) для забарвлення GPX-треків та маршрутів:

- Для [маршрутів](../navigation/guidance/map-during-navigation.md#color): *Швидкість, Ухил* та *Висота (над рівнем моря)*.
- Для [GPX-треків](../map/tracks/appearance#track-colors-in-gpx-files): *Швидкість, Ухил* та *Висота (над рівнем моря) або інформація із зовнішніх датчиків*.

### Погода {#weather}

Файли палітри погоди (`weather_<type_name>.txt`) визначають візуалізацію для [шарів погоди](../plugins/weather.md#weather-layers).

### Кольори {#colors}

Колірна палітра (`user_palette_default.txt`) використовується для попередньо визначених кольорів, які можна призначити [Обраним](./favorites.md), [Трекам](./tracks/).


## Легенда палітри {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="колір"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="колір"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="колір"/></td>
    </tr>
</table>


Легенда надає простий спосіб перегляду та розуміння різних позначень на мапі. Були додані нові колірні палітри для відображення [**швидкості** для треків](../map/tracks/appearance#track-colors-in-gpx-files), [**типу лінії** для маршрутів](../navigation/guidance/map-during-navigation.md#color), [**висоти та ухилу** для рельєфу](../plugins/topography.md#default-color-scheme) та всіх колірних палітр [**шару погоди**](../plugins/weather.md#weather-layers).


## Редагувати файл палітри {#edit-palette-file}

Ви можете редагувати палітри, щоб персоналізувати вигляд мап та маршрутів. Власні файли колірних палітр можна додати в OsmAnd за допомогою [інструменту імпорту/експорту](./import-export.md).

- *Маршрути*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Рельєф*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Погода*: `weather_<type_name>.txt`.
- *Колір*: `user_palette_default.txt`.

Кожен рядок представляє числове значення (для колірної палітри це індекс) та колір RGB. Наприклад:

```xml
# TXT-файл з назвою *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 градусів RGBA {#0---90-degree-rgba}
0,46,185,0,191
# жовтий  {#yellow-}
100,255,222,2,227
# червоний {#red}
200,255,1,1,255
# фіолетовий {#violet}
220,130,1,255,255

```

Після переміщення цього TXT-файлу до *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, нова палітра з'явиться в меню "Колірна схема".


## Читайте також {#read-more}

### Швидкі дії {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Додати дію → Топографія → Змінити колірну схему рельєфу*

![Колірна схема](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Додати дію → Топографія → Змінити колірну схему рельєфу*

![Колірна палітра](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Швидка дія** для зміни палітри рельєфу. Додано можливість перемикатися між колірними схемами рельєфу, подібно до перемикання між шарами. Це можна зробити за допомогою інструменту [Швидкі дії](../widgets/quick-action.md#configure-map).


### Імпорт / Експорт кольорів {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Експорт дій профілю Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Локальне резервне копіювання Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Експорт дій профілю iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Експорт дій профілю iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Ви можете імпортувати та експортувати всі доступні стандартні та власні колірні палітри за допомогою інструменту відновлення та резервного копіювання файлів OsmAnd.

- Відкрийте головне *Меню*, *Налаштування*, прокрутіть вниз до розділу **Імпорт/експорт** (*Android*) або **Локальне резервне копіювання** (*iOS*) та виберіть потрібну дію.
- Виберіть один або кілька елементів зі списку *Колір* або опцію *Вибрати все*.
- Усі експортовані файли зберігаються у форматі `.osf`.
- Якщо розмір вибраних даних значний, програмі знадобиться деякий час для підготовки файлу `.osf`.
- Перегляньте статтю [*Імпорт / Експорт*](../personal/import-export.md) для отримання більш детальної інформації.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)