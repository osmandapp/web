---
source-hash: 3e1eba0c128d1ad05a1bdb817c7e495e0e8772c3818a05fe0583ef8e6277b1c5
sidebar_position: 5
title:  أنظمة الألوان
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



## نظرة عامة {#overview}

:::info ميزة مدفوعة

تُستخدم أنظمة الألوان كجزء من ميزات [الخرائط+](../purchases/index.md) المدفوعة وميزات Pro <ProFeature />.

:::

تُستخدم أنظمة الألوان في [تلوين المسار](#routes)، و[تضاريس الخريطة](#terrain)، و[خريطة الطقس](#weather)، وتُمثل كجزء منفصل من المعلومات التي يمكن تصديرها واستيرادها وتعديلها لتغيير نظام ألوان الخريطة وتصور البيانات.

تتوفر بيانات لوحة الألوان في قائمة [*الخرائط والموارد*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *القائمة ← الخرائط والموارد ← محلي ← الألوان*

![لوحات الألوان](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *القائمة ← الخرائط والموارد ← محلي ← الألوان*

![لوحة الألوان](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## أنواع الأنظمة {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لوحات الألوان](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![لوحة الألوان](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### التضاريس {#terrain}

تُعرّف ملفات التضاريس (`height_altitude_<type_name>.txt`، `hillshade_color_<type_name>.txt`، `slope_<type_name>.txt`) ثلاثة أنواع من [تصورات التضاريس](../plugins/topography.md#hillshade-slope-and-altitude-layers): *تظليل التلال، والانحدار*، و*الارتفاع*. لكل نوع، يمكنك الحصول على لوحات ألوان متعددة، على سبيل المثال، يتم توفير *انحدار الانهيار الجليدي* بشكل افتراضي.

### المسارات {#routes}

تستخدم تصورات التدرج الخطي ملفات لوحة الألوان (`route_<type_name>_<palette_name>.txt`) لتلوين مسارات GPX والمسارات:

- بالنسبة [للمسارات](../navigation/guidance/map-during-navigation.md#color): *السرعة، والانحدار،* و*الارتفاع*.
- بالنسبة [لمسارات GPX](../map/tracks/appearance#track-colors-in-gpx-files): *السرعة، والانحدار،* و*الارتفاع، أو معلومات من أجهزة استشعار خارجية*.

### الطقس {#weather}

تُعرّف ملفات لوحة ألوان الطقس (`weather_<type_name>.txt`) التصور لـ [طبقات الطقس](../plugins/weather.md#weather-layers).

### الألوان {#colors}

تُستخدم لوحة الألوان (`user_palette_default.txt`) ببساطة للألوان المحددة مسبقًا لتعيينها إلى [المفضلة](./favorites.md)، و[المسارات](./tracks/).


## مفتاح لوحة الألوان {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="لون"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="لون"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="لون"/></td>
    </tr>
</table>


يوفر مفتاح الخريطة طريقة سهلة لعرض وفهم العلامات المختلفة على الخريطة. تمت إضافة لوحات ألوان جديدة لعرض [**السرعة** للمسارات](../map/tracks/appearance#track-colors-in-gpx-files)، و[**نوع الخط** للمسارات](../navigation/guidance/map-during-navigation.md#color)، و[**الارتفاع والانحدار** للتضاريس](../plugins/topography.md#default-color-scheme)، وجميع لوحات ألوان [**طبقة الطقس**](../plugins/weather.md#weather-layers).


## تعديل ملف لوحة الألوان {#edit-palette-file}

يمكنك تعديل لوحات الألوان لتخصيص مظهر الخرائط والمسارات. يمكن إضافة ملفات لوحة الألوان الخاصة بك إلى OsmAnd باستخدام [أداة الاستيراد/التصدير](./import-export.md).

- *المسارات*: `route_speed_<type_name>.txt`، `route_slope_<type_name>.txt`، `route_elevation_<type_name>.txt`.
- *التضاريس*: `height_altitude_<type_name>.txt`، `hillshade_color_<type_name>.txt`، `slope_<type_name>.txt`.
- *الطقس*: `weather_<type_name>.txt`.
- *اللون*: `user_palette_default.txt`.

يمثل كل سطر قيمة رقمية (بالنسبة للوحة الألوان، هو فهرس) ولون RGB. على سبيل المثال:

```xml
# ملف TXT باسم *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 درجة RGBA {#0---90-degree-rgba}
0,46,185,0,191
# أصفر {#yellow-}
100,255,222,2,227
# أحمر {#red}
200,255,1,1,255
# بنفسجي {#violet}
220,130,1,255,255

```

بعد نقل ملف TXT هذا إلى *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*، ستظهر لوحة ألوان جديدة في قائمة نظام الألوان.


## اقرأ المزيد {#read-more}

### الإجراءات السريعة {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> ←*&nbsp;  "**＋**"  &nbsp;*← <Translate ios="true" ids="add_button"/>*  *← إضافة إجراء ← التضاريس ← تغيير نظام ألوان التضاريس*

![نظام الألوان](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> ←*&nbsp;  "**＋**"  &nbsp;*← <Translate ios="true" ids="add_button"/>*  *← إضافة إجراء ← التضاريس ← تغيير نظام ألوان التضاريس*

![لوحة الألوان](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**إجراء سريع** لتغيير لوحة الألوان للتضاريس. تمت إضافة القدرة على التبديل بين أنظمة ألوان التضاريس، على غرار التبديل بين الطبقات. يمكن القيام بذلك باستخدام أداة [الإجراءات السريعة](../widgets/quick-action.md#configure-map).


### استيراد / تصدير الألوان {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![تصدير إجراءات الملفات الشخصية أندرويد](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![نسخ احتياطي محلي أندرويد](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![تصدير إجراءات الملفات الشخصية iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![تصدير إجراءات الملفات الشخصية iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

يمكنك استيراد وتصدير جميع لوحات الألوان الافتراضية والمخصصة المتاحة باستخدام أداة استعادة ونسخ الملفات الاحتياطية في OsmAnd.

- افتح *القائمة* الرئيسية، *الإعدادات*، مرر لأسفل إلى قسم **استيراد/تصدير** (*أندرويد*) أو **نسخ احتياطي محلي** (*iOS*)، وحدد الإجراء المطلوب.
- حدد عنصرًا واحدًا أو أكثر من قائمة *الألوان* أو خيار *تحديد الكل*.
- يتم حفظ جميع الملفات المصدرة بتنسيق `.osf`.
- إذا كان حجم البيانات المحددة كبيرًا، فسيستغرق التطبيق بعض الوقت لإعداد ملف `.osf`.
- عرض مقال [*استيراد / تصدير*](../personal/import-export.md) لمزيد من المعلومات التفصيلية.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)