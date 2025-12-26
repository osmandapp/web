---
source-hash: eb8c4b71007a1c4cfc8c26176511dd3bfc888cd65317d684c37297ecbb8d4fc3
sidebar_position: 5
title: أنظمة الألوان
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

تُستخدم أنظمة الألوان في [تلوين المسار](#tracks-routes)، و[تضاريس الخريطة](#terrain)، و[خريطة الطقس](#weather)، وتُمثل كجزء منفصل من المعلومات التي يمكن تصديرها واستيرادها وتعديلها لتغيير نظام ألوان الخريطة وتصور البيانات.

تتوفر بيانات لوحة الألوان في قائمة [*الخرائط والموارد*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *القائمة → الخرائط والموارد → محلي → الألوان*

![لوحات الألوان](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *القائمة → الخرائط والموارد → محلي → الألوان*

![لوحة الألوان](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## أنواع الأنظمة {#scheme-types}

### التضاريس {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لوحات الألوان](@site/static/img/personal/color-schemes/palette_new.png) ![لوحات الألوان](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![لوحة الألوان](@site/static/img/personal/color-schemes/palette_ios.png) ![لوحة الألوان](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

تُعرّف ملفات التضاريس (`height_altitude_<type_name>.txt`، `hillshade_color_<type_name>.txt`، `slope_<type_name>.txt`) ثلاثة أنواع من [تصورات التضاريس](../plugins/topography.md#hillshade-slope-and-altitude-layers): *تظليل التلال، والانحدار*، و*الارتفاع*. لكل نوع، يمكنك الحصول على لوحات ألوان متعددة، على سبيل المثال، *انحدار الانهيار الجليدي* يتم توفيره بشكل افتراضي. انظر مقالة [التضاريس](../plugins/topography.md#default-color-scheme) للحصول على مزيد من التفاصيل.

### المسارات والطرق {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لوحات الألوان](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![لوحة الألوان](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

تستخدم تصورات التدرج الخطي ملفات لوحة الألوان (`route_<type_name>_<palette_name>.txt`) لتلوين مسارات GPX والطرق:

- بالنسبة [للطرق](../navigation/guidance/map-during-navigation.md#color): *السرعة (`route_speed_default.txt`)، والانحدار (`route_slope_default.txt`)*، و*الارتفاع (`route_elevation_default.txt`)*.
- بالنسبة [لمسارات GPX](../map/tracks/appearance#track-colors-in-gpx-files): *السرعة، والانحدار، والسرعة القصوى (`route_maxspeed_default.txt`)*، و*الارتفاع*، أو معلومات من *أجهزة استشعار خارجية*.

### المفضلات ونقاط الطريق {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لوحات الألوان](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![لوحات الألوان](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![لوحة الألوان](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

تُستخدم لوحة الألوان `user_palette_default.txt` للألوان المحددة مسبقًا المعينة إلى [المفضلات](./favorites.md#edit--replace--delete) و[نقاط الطريق](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints).

### الطقس {#weather}

تُعرّف ملفات لوحة ألوان الطقس (`weather_cloud.txt`، `weather_precip.txt`، `weather_pressure.txt`، `weather_temperature.txt`، `weather_wind.txt`) التصور لـ [طبقات الطقس](../plugins/weather.md#weather-layers).


## الإعدادات {#settings}

### تعديل لوحة الألوان {#palette-modify}

يمكنك تعديل لوحات الألوان لتخصيص مظهر الخرائط والطرق. يمكن إضافة ملفات لوحة الألوان الخاصة بك إلى OsmAnd باستخدام [أداة الاستيراد/التصدير](./import-export.md).

- *المسارات والطرق*: `route_speed_<type_name>.txt`، `route_slope_<type_name>.txt`، `route_maxspeed_default.txt`، `route_elevation_default.txt`.
- *التضاريس*: `height_altitude_<type_name>.txt`، `hillshade_color_<type_name>.txt`، `slope_<type_name>.txt`.
- *الطقس*: `weather_<type_name>.txt`.
- *المفضلات ونقاط الطريق*: `user_palette_default.txt`.

يمثل كل سطر قيمة رقمية (بالنسبة للوحة الألوان، هو فهرس) ولون RGB. على سبيل المثال:

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

بعد نقل ملف TXT هذا إلى *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt*، ستظهر لوحة ألوان جديدة في قائمة نظام الألوان.

### الاستيراد / التصدير {#import--export}

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

### المفتاح {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="لون"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="لون"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="لون"/></td>
    </tr>
</table>


يوفر المفتاح طريقة سهلة لعرض وفهم العلامات المختلفة على الخريطة. تمت إضافة لوحات ألوان جديدة لعرض [**السرعة** للمسارات](../map/tracks/appearance#track-colors-in-gpx-files)، و[**نوع الخط** للطرق](../navigation/guidance/map-during-navigation.md#color)، و[**الارتفاع والانحدار** للتضاريس](../plugins/topography.md#default-color-scheme)، وجميع لوحات ألوان [**طبقة الطقس**](../plugins/weather.md#weather-layers).

يتم إنشاء المفتاح تلقائيًا بناءً على لوحة الألوان المحددة ويعرض خطوات التدرج مع الوحدات المناسبة (على سبيل المثال، كم/ساعة للسرعة، % للانحدار، أو أمتار للارتفاع).

### الإجراءات السريعة {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ إضافة إجراء → <Translate ios="true" ids="configure_map"/> → تغيير نظام ألوان التضاريس*

![نظام الألوان](@site/static/img/personal/color-schemes/color_scheme_new.png) ![نظام الألوان](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → إضافة إجراء → <Translate ios="true" ids="configure_map"/> → تغيير نظام ألوان التضاريس*

![لوحة الألوان](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![لوحة الألوان](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

**إجراء سريع** لتغيير لوحة الألوان لـ [التضاريس](../../user/plugins/topography.md#modify-color-scheme). تمت إضافة القدرة على التبديل بين أنظمة ألوان التضاريس، على غرار التبديل بين الطبقات. يمكن القيام بذلك باستخدام أداة [الإجراءات السريعة](../widgets/quick-action.md#configure-map).  

عند تكوين هذا الإجراء، يمكنك تحديد لوحة ألوان تضاريس واحدة أو متعددة. إذا تم تحديد لوحات متعددة، فسيقوم كل نقر على الزر بالتنقل عبر اللوحات المختارة. يمكنك أيضًا تمكين أو تعطيل نافذة الحوار الوسيطة لإظهار القائمة الكاملة للوحات أو التبديل بينها بصمت بترتيب محدد مسبقًا.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)