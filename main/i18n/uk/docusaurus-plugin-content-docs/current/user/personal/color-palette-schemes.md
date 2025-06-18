---
source-hash: 3c0537caba10d048fc41eb1aafbf2fad61dfc855cb8b7c403db89f081990b44f
sidebar_position: 5
title:  Кольорові схеми
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

Кольорові схеми використовуються як частина платних функцій [Maps+](../purchases/index.md) та Pro <ProFeature />.

:::

Кольорові схеми використовуються для [розфарбовування маршрутів](#routes), [ландшафту карти](#terrain) та [погодної карти](#weather). Вони представлені як окрема частина інформації, яку можна експортувати, імпортувати та редагувати для зміни колірної схеми карти та візуалізації даних.

Дані колірної палітри доступні в меню [*Карти та ресурси*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *Меню → Карти та ресурси → Локальні → Кольори*

![Palettes](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Меню → Карти та ресурси → Локальні → Кольори*

![Color palette](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Типи схем {#scheme-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Color palette](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Ландшафт {#terrain}

Файли ландшафту (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) визначають 3 [візуалізації ландшафту](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Відтінення схилів, Ухил* та *Висота*. Для кожного типу можна мати кілька палітр, наприклад, за замовчуванням надається *ухил лавин*.

### Маршрути {#routes}

Візуалізації лінійного градієнта використовують файли палітр (`route_<type_name>_<palette_name>.txt`) для розфарбовування GPX треків та Маршрутів:

- Для [Маршрутів](../navigation/guidance/map-during-navigation.md#color): *Швидкість, Ухил* та *Висота*.
- Для [GPX треків](../map/tracks/appearance#track-colors-in-gpx-files): *Швидкість, Ухил* та *Висота, або інформація із зовнішніх датчиків*.

### Погода {#weather}

Файли погодних палітр (`weather_<type_name>.txt`) визначають візуалізацію для [погодних шарів](../plugins/weather.md#weather-layers).

### Кольори {#colors}

Колірна палітра (`user_palette_default.txt`) просто використовується для попередньо визначених кольорів, які можна призначати [Вибраним](./favorites.md), [Трекам](./tracks/).


## Легенда палітри {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="color"/></td>
    </tr>
</table>


Легенда надає простий спосіб перегляду та розуміння різних позначок на карті. Додано нові колірні палітри для відображення [**швидкості** для треків](../map/tracks/appearance#track-colors-in-gpx-files), [**типу лінії** для маршрутів](../navigation/guidance/map-during-navigation.md#color), [**висоти та ухилу** для ландшафту](../plugins/topography.md#default-color-scheme) та всіх колірних палітр [**погодних шарів**](../plugins/weather.md#weather-layers).


## Редагувати файл палітри {#edit-palette-file}

Ви можете редагувати палітри, щоб персоналізувати вигляд карт та маршрутів. Власні файли колірних палітр можна додати до OsmAnd за допомогою інструменту [імпорту/експорту](./import-export.md).

- *Маршрути*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Ландшафт*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Погода*: `weather_<type_name>.txt`.
- *Колір*: `user_palette_default.txt`.

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

Після переміщення цього TXT файлу до *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, у меню Колірні схеми з'явиться нова палітра.


## Читати далі {#read-more}

### Швидкі дії {#quick-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Додати дію → Топографія → Змінити колірну схему ландшафту*

![Color Scheme](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Додати дію → Топографія → Змінити колірну схему ландшафту*

![Color palette](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Швидка дія** для зміни палітри ландшафту. Додано можливість перемикатися між колірними схемами ландшафту, подібно до перемикання між шарами. Це можна зробити за допомогою інструменту [Швидкі дії](../widgets/quick-action.md#configure-map).


### Імпорт / Експорт кольорів {#import--export-colors}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Ви можете імпортувати та експортувати всі доступні стандартні та власні колірні палітри за допомогою інструменту відновлення та резервного копіювання файлів OsmAnd.

- Відкрийте головне *Меню*, *Налаштування*, прокрутіть до розділу **Імпорт/експорт** (*Android*) або **Локальне резервне копіювання** (*iOS*) та виберіть потрібну дію.
- Виберіть один або кілька пунктів зі списку *Кольори* або опцію *Вибрати все*.
- Усі експортовані файли зберігаються у форматі `.osf`.
- Якщо розмір вибраних даних значний, додатку знадобиться деякий час для підготовки файлу `.osf`.
- Перегляньте статтю [*Імпорт / Експорт*](../personal/import-export.md) для отримання більш детальної інформації.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: січень 2025*