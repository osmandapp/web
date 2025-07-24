---
source-hash: 56be876b022a30d0407570ad16f12bc16882efb9fa70f60e3ef8e9dfb7079aa7
sidebar_position: 4
title:  الملفات الشخصية (الإعدادات)
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

يقدم OsmAnd مجموعة متنوعة من الملفات الشخصية الافتراضية المصممة لأنشطة مختلفة، بما في ذلك القيادة وركوب الدراجات والمشي، والمزيد من الأنشطة المتخصصة مثل التزلج وركوب القوارب. تم تصميم هذه الملفات الشخصية لتعزيز تجربة التنقل الخاصة بك وفقًا للنشاط الذي تمارسه. يتضمن كل ملف شخصي خيارات قابلة للتكوين، مما يتيح لك ضبط الإعدادات ودمج المكونات الإضافية الإضافية لتتناسب مع تفضيلاتك.

- تتميز بعض الملفات الشخصية، مثل *التزلج* و*القارب*، بـ **ميزات إضافية** لا تتوفر إلا عند تمكين المكونات الإضافية المقابلة.

     - يمكن تفعيل المكونات الإضافية بالانتقال إلى *القائمة ← المكونات الإضافية ← عرض خريطة التزلج* أو *عرض الخريطة البحرية*.
     - يتيح تمكين المكونات الإضافية للملفات الشخصية الميزات الأساسية لتلبية المتطلبات المحددة لهذه الأنشطة.

- من المهم ملاحظة أن بعض الملفات الشخصية، مثل **الشاحنة**، **الدراجة النارية**، **الدراجة البخارية**، **القطار**، **الطائرة**، **القارب**، و**ركوب الخيل**، لا يتم تفعيلها افتراضيًا.

     - للوصول إلى هذه الملفات الشخصية واستخدامها، تحتاج إلى تمكينها يدويًا في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - تساعد هذه الطريقة في الحفاظ على قائمة منظمة وذات صلة بالملفات الشخصية عن طريق تفعيل الملفات المطلوبة فقط لأنشطة محددة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (تصفح الخريطة أو أي ملف شخصي آخر)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## تهيئة الملف الشخصي {#profile-configuration}

:::caution تطبيق الإعدادات على ملف شخصي محدد فقط
تُطبق جميع الإعدادات حصريًا على ملف تعريف التطبيق المحدد حاليًا.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

يحتوي هذا القسم على جميع الإعدادات المتعلقة بالمظهر، وخيارات التنقل، وعرض الخريطة، وقائمة الإعدادات، وشاشة الملف الشخصي.


### النسخ الاحتياطي السحابي المجاني {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

يتيح لك OsmAnd [نسخ إعدادات ملف تعريف التطبيق احتياطيًا](../personal/osmand-cloud.md#osmand-start) إلى OsmAnd Cloud، مما يضمن تخزين تكويناتك بشكل آمن واستعادتها بسهولة عبر إصدارات Android و iOS والويب. تحمي ميزة النسخ الاحتياطي هذه إعداداتك في حالة فشل الجهاز أو إعادة تثبيت التطبيق. يمكنك الاستفادة من هذه الخطة الخاصة باستخدام [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).

يجب أن يكون لديك حساب [OsmAnd Cloud](../personal/osmand-cloud.md#login) لاستخدام *النسخ الاحتياطي المجاني للإعدادات*. إذا كان لديك اشتراك *OsmAnd Pro* أو حساب *OsmAnd Cloud* نشط، فلن يتم عرض لافتة الترويج.


## الإعدادات العامة {#general-settings}

يحتوي هذا القسم على إعدادات سمة التطبيق وزر البوصلة، ووحدات وتنسيقات بيانات الخريطة والملف الشخصي، وأجهزة الإدخال الخارجية، والعديد من الإعدادات الأخرى لإنشاء التكوين الأمثل للملف الشخصي الذي اخترته.

### المظهر {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. يتيح لك تعيين سمة نهارية وليلية للتطبيق، والتي يمكن تطبيقها على ملف شخصي واحد أو على جميع الملفات الشخصية في وقت واحد. لا يغير هذا الخيار إعدادات [وضع الخريطة](../map/vector-maps.md#map-mode).
  - *سمة <Translate android="true" ids="dark_theme"/>*
  - *سمة <Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*
      يطبق سمة النظام. افتراضيًا، ولجميع المستخدمين الجدد، يتوافق نمط الخريطة مع السمة الفاتحة أو الداكنة المحددة في إعدادات نظام جهازك.
- **<Translate android="true" ids="rotate_map_to"/>**. يتيح لك اختيار [وضع اتجاه الخريطة](../map/interact-with-map.md#map-orientation-modes) للملف الشخصي المحدد.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. يحدد ويقفل موضع الشاشة في تطبيق OsmAnd. هذه الميزة غير مدعومة على iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*أندرويد فقط*). يفتح قائمة التحكم في الشاشة، حيث يمكنك تحديد خيارات لشاشة الجهاز أثناء التنقل لتوفير استهلاك بطارية الجهاز.


### الوحدات والتنسيقات {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

في قسم **الوحدات والتنسيقات**، يمكنك ضبط وحدات القياس والتنسيقات لتتوافق مع تفضيلاتك الشخصية والمعايير الإقليمية، مما يضمن عرض جميع البيانات بشكل مريح ومألوف.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>وفقًا لموقع الجهاز</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 كم / 1000 م |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ميل / 3281 قدم (1000 م) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ميل / 1000 م |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ياردة / 0.62 ميل (1000 م) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 ميل بحري / 3280.84 قدم / 1000 م |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | مثال: 50.12333° 19.93233° (خط عرض وخط طول) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | مثال: 50°7.393′ 19°55.941′ (خط عرض وخط طول)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | مثال: 50°7′23.6″ 19°55′56.4″ (خط عرض وخط طول) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (منطقة شمال شرق) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | مثال: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | مثال:  9F2X4WFJ+7W ([رمز الموقع المفتوح](https://en.wikipedia.org/wiki/Open_Location_Code) يمثل مساحة 9م × 14م)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (إصدار أندرويد فقط) | مثال: 2 215 227.87, 830 915.9 ([نظام الإحداثيات السويسري](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (إصدار أندرويد فقط) | مثال: 4 215 227.87, 1 830 915.9 ([نظام الإحداثيات السويسري](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*أندرويد*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| درجات 180° | جميع القيم الزاوية لها قراءات من 0° إلى 180° ومن 0° إلى -180°.  |
|          | درجات 360° | جميع القيم الزاوية لها قراءات من 0° إلى 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | جميع القيم الزاوية لها [قيمة ميليراديان](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*أندرويد*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 كم/ساعة  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 ميل/ساعة  |
|          | <Translate android="true" ids="si_m_s"/> | 30 م/ث |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 دقيقة/م |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 دقيقة/كم |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 عقدة |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | أوروبا، آسيا، أمريكا اللاتينية، كندا، اليابان، الهند، أستراليا |
|  | <Translate android="true" ids="imperial_gallons"/> | المملكة المتحدة وما شابهها |
|  | <Translate android="true" ids="us_gallons"/> | الولايات المتحدة |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>** (*أندرويد فقط*)| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *للقياسات الدقيقة*، اختر كيفية عرض معلومات المسافة في أدوات التنقل، مثل المسافة إلى نقطة، أو المنعطف التالي، أو مسار معين. |
|          | <Translate android="true" ids="round_up"/> | *لتحسين سهولة القراءة*، سيتم تقريب الأرقام المعروضة في أدوات التنقل (المسافة إلى نقطة، المنعطف التالي، أو المسار) لأسفل للحصول على عدد أقل من الأرقام. <br/> على سبيل المثال: 3672 م *←* 3.6 كم،&nbsp; 462 م *←* 400 م،&nbsp; 184 م *←* 150 م،&nbsp; 47 م *←* 40 م،&nbsp; 18 م *←* 15 م. |


### أخرى {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

يوفر قسم **أخرى** إعدادات ملف تعريف إضافية لتخصيص واجهة OsmAnd وعناصر التحكم في الإدخال. تتيح لك هذه الإعدادات تكوين الأجهزة الخارجية، وضبط تفضيلات الرسوم المتحركة، وتبديل وضع ملء الشاشة.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – قم بتوصيل وحدات تحكم خارجية مثل *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*، *<Translate ios="true" ids="sett_generic_ext_input"/>*، أو *<Translate android="true" ids="sett_parrot_ext_input"/>* لتشغيل OsmAnd باستخدام الأزرار المادية.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*أندرويد فقط*) – تمكين أو تعطيل القدرة على استخدام أزرار الصوت بجهازك [للتكبير والتصغير](../map/interact-with-map.md#my-location-and-zoom) على الخريطة.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*أندرويد فقط*) – ينعم دوران الخريطة بـ [حركة تدريجية](https://en.wikipedia.org/wiki/Kalman_filter)، مما يقلل من التحولات المفاجئة في الموضع. هذا يقدم تأخيرًا صغيرًا (*أقل من ثانية واحدة*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*أندرويد فقط*) – يستخدم [المستشعر المغناطيسي](https://en.wikipedia.org/wiki/Kalman_filter) بجهازك لتثبيت دوران الخريطة، مما يقلل من التغييرات المفاجئة. هذا أيضًا يقدم تأخيرًا طفيفًا.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*أندرويد فقط*) – انقر على مساحة فارغة على الخريطة لإخفاء أزرار التحكم والأدوات، مما يزيد من رؤية الخريطة.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*أندرويد فقط*) – تعطيل الرسوم المتحركة في وضع التنقل لانتقالات الشاشة الأسرع.

- **<Translate android="true" ids="position_animation"/>** (*أندرويد فقط*) – يتم تحريك أيقونة [الموضع](../map/interact-with-map.md#my-location-and-zoom) مع كل نقطة GPS يتم تلقيها (مرة واحدة في الثانية). قد يلاحظ تأخير طفيف في حركتها، خاصة أثناء الحركة السريعة أو تقلبات إشارة GPS. يمكنك ضبط هذا التأثير باستخدام إعداد *وقت التنبؤ*: تزيد القيم الأعلى من السلاسة ولكنها تضيف تأخيرًا، وتقلل القيم الأقل من التأخير ولكنها قد تجعل الحركة أقل سلاسة.


## إعدادات التنقل {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

للحصول على نظرة عامة مفصلة عن خيارات التنقل، ارجع إلى مقال [إعدادات التنقل](../navigation/guidance/navigation-settings.md)، الذي يشرح كيفية تكوين OsmAnd للحصول على تجربة تنقل مثالية.

- [نوع التنقل](../navigation/guidance/navigation-settings.md#navigation-type) - اختر وضع التنقل المناسب بناءً على طريقة سفرك وتوفر الإنترنت.

- [معلمات المسار](../navigation/guidance/navigation-settings.md#route-parameters) - حدد كيفية حساب OsmAnd للمسارات، بما في ذلك التفضيلات لتجنب طرق معينة أو تحديد أنواع المسارات.

- [تنبيهات الشاشة](../navigation/guidance/navigation-settings.md#screen-alerts) - قم بتمكين *أداة التنبيهات* لعرض الإشعارات في الوقت الفعلي لحدود السرعة، والمنعطفات، وغيرها من ظروف الطريق الهامة.

- [تنبيهات صوتية](../navigation/guidance/navigation-settings.md#voice-prompts) - قم بتمكين التوجيه الصوتي لتلقي تعليمات التنقل المنطوقة أثناء القيادة أو المشي على طول مسار محدد.

- [معلمات المركبة](../navigation/guidance/navigation-settings.md#vehicle-parameters) – قم بتكوين إعدادات خاصة بالمركبة مثل السرعة القصوى وارتفاع المركبة لضمان توجيه دقيق وتجنب الطرق المحظورة.

- [تخصيص خط المسار](../navigation/guidance/navigation-settings.md#customize-route-line) – اضبط لون وسمك ونمط خط المسار المعروض على الخريطة لتحسين الرؤية أثناء التنقل.

- [الخريطة أثناء التنقل](../navigation/guidance/navigation-settings.md#map-during-navigation) – عرض تحديد الموقع في الوقت الفعلي على الخريطة، وتتبع التقدم على طول المسار، وتحسين التوجيه باستخدام المعالم.

- [توجيه المسار المفصل](../navigation/guidance/navigation-settings.md) – تحسين التنقل خطوة بخطوة عن طريق محاذاة مسارك مع الطرق المحددة على الخريطة. الإعدادات المتاحة: *اسأل في كل مرة* أو *دائمًا*.

:::info
لا توجد إعدادات تنقل في ملف تعريف *تصفح الخريطة*.
:::


## تهيئة الخريطة {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *← تهيئة الخريطة*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

تتيح لك قائمة [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) تخصيص إعدادات عرض الخريطة للملف الشخصي المحدد، مما يتيح تصورًا أفضل لعناصر الخريطة الرئيسية.

باستخدام هذه القائمة، يمكنك:

- **تمييز عناصر الخريطة الهامة**، بما في ذلك [النقاط المفضلة](../personal/favorites.md)، [علامات التنقل](../personal/markers.md)، أو [نقاط الاهتمام](../map/point-layers-on-map.md#points-of-interest-pois) الخاصة على الخريطة.

- **عرض مسارات وملفات GPX محددة**، بما في ذلك مسارات الطرف الثالث للتنقل أو التحليل.

- **تراكب طبقات خريطة إضافية**، مثل [معلومات التضاريس](../plugins/topography.md)، **صور الأقمار الصناعية**، أو [خرائط الرسوم](../map/raster-maps.md) الأخرى المتاحة.

- **تمكين عرض النقل العام**، لعرض [المسارات والمحطات](../map/public-transport.md) لتخطيط أفضل للرحلات.

- **ضبط مظهر الخريطة** عن طريق اختيار [نمط خريطة](../map/vector-maps.md#default-map-styles) مختلف ليناسب احتياجاتك.


## تهيئة الشاشة {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

- اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- اذهب إلى: *القائمة ← الإعدادات ← ملف تعريف التطبيق ← تهيئة الشاشة*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

[<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) هي قائمة تتيح لك تهيئة الأدوات للملف الشخصي المحدد ليتم عرضها على الخريطة. في هذه الشاشة، يمكنك تمكين وتهيئة الأدوات [المعلوماتية](../widgets/info-widgets.md) و[التنقلية](../widgets/nav-widgets.md)، بالإضافة إلى عناصر أخرى.


## مظهر الملف الشخصي {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

تتيح لك إعدادات **مظهر الملف الشخصي** تخصيص اسم ملفك الشخصي وتمثيله المرئي. يمكنك أيضًا تعديل مظهر [موقعي](#my-location-appearance) هنا. بينما يجب أن يكون *اسم الملف الشخصي* فريدًا، يمكن أن تكون *الأيقونات* و*الألوان* متطابقة عبر ملفات شخصية مختلفة. سيتم تطبيق هذه التغييرات عبر أجزاء مختلفة من التطبيق، مثل قائمة [إعداد المسار](../navigation/setup/route-navigation.md).


### مظهر موقعي {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

تتيح لك إعدادات **مظهر موقعي** تخصيص كيفية عرض موقعك على الخريطة، سواء كنت ثابتًا أو متحركًا. يتم اكتشاف الحركة بواسطة نظام التشغيل عندما تكون سرعة الجهاز **أكبر من صفر**.

#### 1. زاوية الرؤية ونصف قطر الموقع {#1-view-angle-and-location-radius}

يمكنك تخصيص العناصر المرئية المتعلقة بموقعك وتطبيقها بشكل منفصل أو معًا لمواقع **الراحة** و**التنقل**. لكل من وضعي ثنائي الأبعاد وثلاثي الأبعاد، يتم عرض *زاوية الرؤية* و*نصف قطر الموقع* بنفس اللون المحدد [لملف تعريف التنقل](#profile-appearance)، مباشرة أسفل أيقونة [موقعي](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – يعرض منطقة **مخروطية الشكل** تشير إلى الاتجاه الذي تواجهه حاليًا.
- **<Translate android="true" ids="location_radius"/>** – يعرض **منطقة دائرية** حول أيقونتك، تمثل دقة موقعك الحالي.


#### 2. أيقونات ثلاثية الأبعاد مخصصة {#2-custom-3d-icons}

لتجربة أكثر تخصيصًا، يمكنك إنشاء وإضافة **أيقونات ثلاثية الأبعاد مخصصة** إلى OsmAnd.

***كيفية إضافة أيقونة موقع ثلاثية الأبعاد مخصصة:***

1. **إنشاء نموذج ثلاثي الأبعاد**. صمم أيقونتك بتنسيقات [MTL و OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **دمج النموذج في OsmAnd:**
   - قم بتطوير [مكون إضافي مخصص](../plugins/custom.md) باستخدام [مثال المكون الإضافي](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) المتوفر.
   - ضع ملفات أيقونتك ثلاثية الأبعاد في المسارات التالية:

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - بدلاً من ذلك، انسخ **ملفات MTL و OBJ** مباشرة إلى مجلد OsmAnd باستخدام نفس هيكل الدليل.

#### 3. أوضاع اتجاه الخريطة {#3-map-orientation-modes}

يمكنك التحكم في سلوك أيقونة **موقعي** باستخدام [أوضاع اتجاه الخريطة](../widgets/map-buttons.md#compass) المختلفة.

- إذا كانت أيقونة الموقع **تهتز أو تدور** أثناء الثبات، قم بالتبديل من **وضع اتجاه الحركة** ([تدوير الخريطة حسب الاتجاه](../map/interact-with-map.md#rotate-map-by-bearing)) إلى وضع آخر.
- اضبط إعدادات إضافية في *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← مظهر الملف الشخصي ← الخيارات*.
- تعرف على المزيد حول الاتجاه وتتبع الاتجاه في قسم [أداة الاتجاه](../widgets/nav-widgets#bearing-widget).


## تخصيص واجهة المستخدم {#ui-customization}

<InfoAndroidOnly />

:::note للمكونات الإضافية غير المستخدمة
لإخفاء جميع معلمات التحكم للمكونات الإضافية غير المستخدمة [plugins](../plugins/index.md#configure-plugin)، قم بتعطيلها.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

باستخدام ميزة تخصيص واجهة المستخدم، يمكنك ضبط عدد العناصر في الإجراءات مثل [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android)، [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) و [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). يمكن العثور على معلومات حول عدد العناصر المضافة من جميع العناصر الممكنة تحت عنوان كل ميزة.


### الدرج {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **العناصر الرئيسية المرئية** - في قسم *تخصيص واجهة المستخدم*، يمكنك *إعادة ترتيب وإخفاء واستعادة* العناصر من [الدرج](../start-with/main-menu.md#customize-advanced-use-of-android) لتناسب تفضيلاتك.

- **<Translate android="true" ids="reset_to_default"/>** - يعيد *القائمة الأصلية للعناصر* في الدرج، ويلغي على الفور أي تخصيصات.

- **<Translate android="true" ids="copy_from_other_profile"/>** - يسمح لك بنسخ *تخطيط الدرج* من ملف تعريف OsmAnd آخر للحفاظ على إعداد متسق عبر الملفات الشخصية.

### تهيئة الخريطة {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **قائمة تهيئة الخريطة** - في قسم *تخصيص واجهة المستخدم*، يمكنك *إعادة ترتيب أو إخفاء العناصر* من [تهيئة الخريطة](../map/configure-map-menu.md)، مما يتيح الوصول السريع إلى الإعدادات المستخدمة بشكل متكرر.

- **<Translate android="true" ids="reset_to_default"/>** - يعيد *قائمة العناصر الأصلية* في قائمة تهيئة الخريطة، ويزيل أي تغييرات.

- **<Translate android="true" ids="copy_from_other_profile"/>** - ينسخ *تخطيط قائمة تهيئة الخريطة* من ملف تعريف OsmAnd آخر.


### إجراءات قائمة السياق {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **قائمة سياق الخريطة** - في قسم تخصيص واجهة المستخدم، يمكنك إعادة ترتيب أو إخفاء العناصر في [قائمة سياق الخريطة](../map/map-context-menu.md) لتحسين الوصول إلى الميزات المستخدمة بشكل متكرر.

- **<Translate android="true" ids="reset_to_default"/>** – يعيد *قائمة العناصر الافتراضية* في قائمة سياق الخريطة، ويلغي على الفور أي تعديلات.

- **<Translate android="true" ids="copy_from_other_profile"/>** – ينسخ *ترتيب قائمة السياق* من ملف تعريف OsmAnd آخر للحفاظ على الاتساق عبر ملفات التعريف المختلفة.


## إعدادات المكونات الإضافية {#plugin-settings}

:::caution الوصول إلى إعدادات المكون الإضافي
للوصول إلى إعدادات المكون الإضافي، يجب عليك أولاً [**تمكين المكون الإضافي**](../plugins/index.md#enable--disable) في *قسم المكونات الإضافية من القائمة الرئيسية*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

تفتح المكونات الإضافية ميزات إضافية للتطبيق ويمكن أن تكون [مدفوعة أو مجانية](../plugins/index.md#purchase). بعض المكونات الإضافية لها [إعداداتها الخاصة](../plugins/index.md#plugin-settings)، والبعض الآخر لا. يمنحك OsmAnd إمكانية تهيئة المكونات الإضافية لكل ملف شخصي على حدة.


- **تسجيل الرحلة**. يفتح هذا العنصر [إعدادات تسجيل الرحلة](../plugins/trip-recording.md#recording-settings) للملف الشخصي المحدد، حيث يمكنك اختيار أي معلمات لتسجيل رحلاتك.

- **الطقس**. تتيح لك طبقات خريطة [الطقس](../plugins/weather.md#weather-settings) التفاعلية مراقبة درجة الحرارة وضغط الهواء وتغطية السحب وسرعة الرياح وهطول الأمطار في مدينتك أو أي موقع آخر على خريطة عالمية.

- **ملاحظات صوتية / فيديو** (*أندرويد فقط*). يفتح هذا العنصر [إعدادات المكون الإضافي الصوتي المرئي](../plugins/audio-video-notes.md#plugin-settings) للملف الشخصي المحدد. يوسع المكون الإضافي *ملاحظات صوتية/فيديو* وظائف OsmAnd من خلال السماح لك بإنشاء ملاحظاتك بتنسيقات مختلفة مثل الصور أو الفيديو أو الصوت وربطها بالموقع الجغرافي أو الموقع الحالي.

- **تحرير OpenStreetMap**. يفتح هذا العنصر [إعدادات المكون الإضافي لتحرير OpenStreetMap](../plugins/osm-editing.md#settings) للملف الشخصي المحدد. باستخدام OsmAnd والمكون الإضافي لتحرير OSM، يمكنك المساهمة في OpenStreetMap.org عن طريق إنشاء أو تعديل نقاط الاهتمام، أو إضافة أو التعليق على الملاحظات، وتحميل مسارات GPX المسجلة.

- **المستشعرات الخارجية**. عند النقر على عنصر في قسم *إعدادات المكون الإضافي*، يتم فتح [إعدادات المستشعرات الخارجية](../plugins/external-sensors.md#sensors-settings) للملف الشخصي المحدد. يتيح لك المكون الإضافي للمستشعرات الخارجية قراءة وتسجيل البيانات من المستشعرات الخارجية اللاسلكية وعرضها باستخدام الأدوات في تطبيق OsmAnd.

- **إمكانية الوصول** (*أندرويد فقط*). يفتح هذا العنصر [إعدادات المكون الإضافي لإمكانية الوصول](../plugins/accessibility.md#plugin-settings) للملف الشخصي المحدد. تتيح لك إعدادات المكون الإضافي لإمكانية الوصول تخصيص التطبيق وفقًا لاحتياجاتك. تتعلق جميع الإعدادات بعملية التنقل ويتم تعيينها بشكل فردي لكل ملف شخصي.

- **تطوير OsmAnd**. تفتح هذه القائمة [إعدادات المكون الإضافي لتطوير OsmAnd](../plugins/development.md#plugin-settings)، حيث يمكنك تهيئة تطبيق OsmAnd لأغراض الاختبار أو استكشاف الميزات القادمة. هذه الإعدادات مخصصة للمطورين وليست مطلوبة للاستخدام العادي للتطبيق.

  > ***تغيير إعدادات المكون الإضافي لتطوير OsmAnd يؤثر على جميع الملفات الشخصية.***

- **ويكيبيديا**. تفتح هذه القائمة *[إعدادات المكون الإضافي لويكيبيديا](../plugins/wikipedia.md#wikipedia-settings)*. يمكنك تحديد اللغة التي ستعرض بها المقالات واختيار ما إذا كنت تريد تنزيل الصور من ويكيبيديا. وجود ويكيبيديا في رحلتك يعزز تجربتك من خلال توفير معلومات حول الأماكن التي تزورها. تعمل دون اتصال بالإنترنت وتعرض مقالات ويكيبيديا ذات الصلة مباشرة على الخريطة المتعلقة بنقاط الاهتمام.


## الإجراءات {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

الإجراءات مع الملف الشخصي المحدد:

- [تصدير الملف الشخصي](https://osmand.net/docs/user/personal/import-export#export) - تصدير جميع إعدادات الملف الشخصي المحدد بتنسيق OSF.

- **نسخ من ملف شخصي آخر** - ينسخ جميع الإعدادات من ملف شخصي آخر موجود في تطبيق OsmAnd الخاص بك.

- **إعادة تعيين إلى الافتراضي** - يعيد جميع الإعدادات إلى حالتها الأولية.

- **حذف الملف الشخصي**:
    - هذا الإجراء متاح فقط [لأندرويد] وفقط [لملف شخصي مخصص].
    - لا يمكن حذف الملفات الشخصية الافتراضية.
    - لإضافة ملف شخصي، اذهب إلى *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← + ملف شخصي جديد*.


## مقالات ذات صلة {#related-articles}

- [إدارة المسارات](../personal/tracks/manage-tracks.md#import--export-track)
- [سجل البحث](../search/search-history.md#export-and-share)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: فبراير 2025*