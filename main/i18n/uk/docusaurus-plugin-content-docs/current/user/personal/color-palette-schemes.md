---
source-hash: eb8c4b71007a1c4cfc8c26176511dd3bfc888cd65317d684c37297ecbb8d4fc3
sidebar_position: 5
title:  Колірні схеми
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

Колірні схеми використовуються як частина платних [функцій Maps+](../purchases/index.md) та Pro <ProFeature />.  

:::

Колірні схеми використовуються для [колоризації маршрутів](#tracks-routes), [рельєфу мапи](#terrain) та [карти погоди](#weather) і є окремою частиною інформації, яку можна експортувати, імпортувати та редагувати для зміни колірної схеми мапи та візуалізації даних.

Дані колірної палітри доступні в меню [*Maps & Resources*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Меню → Maps & Resources → Локальні → Кольори*

![Палітри](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Меню → Maps & Resources → Локальні → Кольори*

![Колірна палітра](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Типи схем {#scheme-types}

### Рельєф {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Палітри](@site/static/img/personal/color-schemes/palette_new.png) ![Палітри](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Колірна палітра](@site/static/img/personal/color-schemes/palette_ios.png) ![Колірна палітра](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

Файли рельєфу (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) визначають 3 [візуалізації рельєфу](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Відтінення рельєфу, Ухил* та *Висота*. Для кожного типу можна мати кілька палітр, наприклад, *лавинний схил* надається за замовчуванням. Докладніше дивіться в статті [Топографія](../plugins/topography.md#default-color-scheme).

### Треки та маршрути {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Палітри](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Колірна палітра](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

Для візуалізації лінійного градієнта використовуються файли палітри (`route_<type_name>_<palette_name>.txt`) для забарвлення GPX-треків та маршрутів:

- Для [маршрутів](../navigation/guidance/map-during-navigation.md#color): *Швидкість (`route_speed_default.txt`), Ухил (`route_slope_default.txt`)* та *Висота (`route_elevation_default.txt`)*.
- Для [GPX-треків](../map/tracks/appearance#track-colors-in-gpx-files): *Швидкість, Ухил, Максимальна швидкість (`route_maxspeed_default.txt`)* та *Висота*, або інформація із *зовнішніх датчиків*.

### Обрані та контрольні точки {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Палітри](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![Палітри](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Колірна палітра](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

Палітра `user_palette_default.txt` використовується для попередньо визначених кольорів, які можна призначити [Обраним](./favorites.md#edit--replace--delete) та [Контрольним точкам](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints).

### Погода {#weather}

Файли палітри погоди (`weather_cloud.txt`, `weather_precip.txt`, `weather_pressure.txt`, `weather_temperature.txt`, `weather_wind.txt`) визначають візуалізацію для [шарів погоди](../plugins/weather.md#weather-layers).


## Налаштування {#settings}

### Редагування палітри {#palette-modify}

Ви можете редагувати палітри, щоб персоналізувати вигляд мап та маршрутів. Власні файли колірних палітр можна додати в OsmAnd за допомогою [інструменту імпорту/експорту](./import-export.md).

- *Треки та маршрути*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_maxspeed_default.txt`, `route_elevation_default.txt`.
- *Рельєф*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Погода*: `weather_<type_name>.txt`.
- *Обрані та контрольні точки*: `user_palette_default.txt`.

Кожен рядок представляє числове значення (для колірної палітри це індекс) та колір RGB. Наприклад:

```xml
# TXT file named *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 degree RGBA {#0---90-degree-rgba}
0,46,185,0,191
# yellow  {#yellow-}
100,255,222,2,227
# red {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

Після переміщення цього TXT-файлу до *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt*, нова палітра з'явиться в меню "Колірна схема".

### Імпорт / Експорт {#import--export}

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

### Легенда {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="колір"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="колір"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="колір"/></td>
    </tr>
</table>


Легенда надає простий спосіб перегляду та розуміння різних позначень на мапі. Додані нові колірні палітри для відображення [**швидкості** для треків](../map/tracks/appearance#track-colors-in-gpx-files), [**типу лінії** для маршрутів](../navigation/guidance/map-during-navigation.md#color), [**висоти та ухилу** для рельєфу](../plugins/topography.md#default-color-scheme) та всіх колірних палітр [**шару погоди**](../plugins/weather.md#weather-layers).

Легенда генерується автоматично на основі вибраної палітри та показує кроки градієнта з відповідними одиницями вимірювання (наприклад, км/год для швидкості, % для ухилу або метри для висоти).

### Швидкі дії {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Додати дію → <Translate ios="true" ids="configure_map"/> → Змінити колірну схему рельєфу*

![Колірна схема](@site/static/img/personal/color-schemes/color_scheme_new.png) ![Колірна схема](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → Додати дію → <Translate ios="true" ids="configure_map"/> → Змінити колірну схему рельєфу*

![Колірна палітра](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![Колірна палітра](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

**Швидка дія** для зміни палітри для [Рельєфу](../../user/plugins/topography.md#modify-color-scheme). Додано можливість перемикатися між колірними схемами рельєфу, подібно до перемикання між шарами. Це можна зробити за допомогою інструменту [Швидкі дії](../widgets/quick-action.md#configure-map).  

Під час налаштування цієї дії ви можете вибрати одну або кілька колірних палітр рельєфу. Якщо вибрано кілька палітр, кожне натискання кнопки буде перемикати між вибраними палітрами. Ви також можете увімкнути або вимкнути проміжний діалог, щоб показати повний список палітр або перемикатися між ними безмовно в заданий порядок.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)