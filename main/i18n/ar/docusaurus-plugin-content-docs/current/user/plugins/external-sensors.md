---
source-hash: 863d3df7ebcb8f1a0a362a1a56c188f42daa47139cbfa9d9825346e82b510df5
sidebar_position: 6
title:  المستشعرات الخارجية
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

:::tip الشراء
ملحق المستشعرات الخارجية هو [ميزة مدفوعة](../purchases/index.md).  
:::

يسمح لك **ملحق المستشعرات الخارجية** بقراءة وتسجيل البيانات من [المستشعرات الخارجية اللاسلكية](https://en.wikipedia.org/wiki/Wireless_sensor_network) التي تعمل بتقنيات [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) و [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) وعرض هذه البيانات باستخدام [الودجات](#widgets) في تطبيق OsmAnd. هذه الشبكة المُدارة قادرة على جمع بيانات المستشعرات ونقلها وتخزينها.

> *ملاحظة: لا تدعم أجهزة iPhone و iPad تقنية ANT+ بسبب قيود في العتاد.*

يصل **ملحق المستشعرات الخارجية** إلى المستشعرات الخارجية ويمكنه قراءة بيانات مثل:

- *معدل ضربات القلب*
- *طاقة الدراجة*
- *إيقاع الدراجة*
- *سرعة الدراجة*
- *مسافة الدراجة*
- *درجة الحرارة*

لاستخدام الملحق، تأكد من أن جهازك [متوافق](#pair-new-sensor)، وأن الملحق [مُمكّن](../plugins/#enable--disable)، وأن مستشعراتك الخارجية متصلة عبر البلوتوث (BLE).


## إعدادات التهيئة المطلوبة {#required-setup-parameters}

لبدء استخدام البيانات من المستشعرات الخارجية، اتبع الخطوات التالية:

1. [شراء](../purchases/) **اشتراك OsmAnd Pro** لفتح ملحق المستشعرات الخارجية.
2. [تمكين](../plugins/#enable--disable) الملحق في *القائمة → الملحقات*.
3. **قم بتشغيل البلوتوث** على جهازك للسماح بالاتصال بـ **مستشعرات BLE**.
4. [إقران وتهيئة](#pair-new-sensor) المستشعرات الخارجية من خلال قائمة الملحق.
5. (اختياري) [إضافة](#widgets) **ودجات المستشعرات الخارجية** إلى شاشة الخريطة لعرض البيانات في الوقت الفعلي مثل معدل ضربات القلب أو الإيقاع أو مستوى البطارية.
6. (اختياري) استخدم [ملحق تسجيل الرحلات](../plugins/trip-recording.md) لتسجيل بيانات المستشعرات في مسارات GPX.
7. (اختياري، لأندرويد فقط) اتبع [هذه النصائح](https://www.thisisant.com/consumer/ant-101/ant-in-phones) لتوصيل مستشعرات ANT+ إذا كان جهازك يدعمها.


### إقران مستشعر جديد {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

لإقران مستشعر جديد، اتبع الخطوات التالية:

1. تأكد من **تمكين البلوتوث** على جهازك.  
2. اذهب إلى *القائمة → الملحقات → المستشعرات الخارجية → الإعدادات*.  
3. انقر على **إقران مستشعر جديد**.
4. سيقوم OsmAnd بالبحث عن مستشعرات **Bluetooth LE** أو **ANT+** المتاحة (حسب منصتك).
5. انقر على زر **+** بجوار المستشعر الذي تريد إقرانه.
6. بمجرد الاتصال، سيظهر المستشعر في قائمة **الأجهزة المتصلة**.

***ملاحظات:***

- على **iOS**، يتم دعم مستشعرات **Bluetooth Low Energy (BLE)** فقط بسبب قيود العتاد. مستشعرات ANT+ غير متاحة.
- على **أندرويد**، قد يتم دعم كل من مستشعرات BLE و ANT+ حسب جهازك. راجع [دليل توافق ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) لمزيد من التفاصيل.
- سيظهر **إشعار منبثق** في كل مرة يتصل فيها مستشعر أو ينفصل.
- **مستشعرات طاقة الدراجة** متاحة فقط على أندرويد عبر ANT+ و BLE.
- على **أندرويد**، يظهر المستشعر الذي يرسل عدة أنواع من البيانات (على سبيل المثال، جهاز قياس معدل ضربات القلب الذي يقيس أيضًا سرعة الجري والإيقاع، أو سماعات الأذن مع معدل ضربات القلب ودرجة الحرارة) في القائمة كجهاز واحد. يقرأ OsmAnd جميع أنواع البيانات المدعومة منه.


## إعدادات المستشعر {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

استخدم أحد المسارات التالية لفتح إعدادات المستشعر:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → الجهاز المتاح → الإعدادات*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → الجهاز المتاح → الإعدادات*

![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

استخدم أحد المسارات التالية لفتح إعدادات المستشعر:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

لكل مستشعر خارجي مقترن مدرج في OsmAnd شاشة تهيئة خاصة به مع الخيارات التالية:

- **اتصال / قطع الاتصال** – تبديل حالة الاتصال.
- **إعادة تسمية** – تعيين اسم مخصص للمستشعر.
- **نسيان المستشعر** – إزالة المستشعر من القائمة (يمكن إعادة إقرانه لاحقًا).
- **الإعدادات** – فتح شاشة تفاصيل المستشعر (نوع المستشعر، القيم، مستوى البطارية، إعداد محيط العجلة). على **أندرويد**، بالنسبة للمستشعر الذي يرسل عدة أنواع من البيانات، تعرض الشاشة جميع قيمه.

***ملاحظات:***

- على **iOS**، يمكنك عرض **مستوى البطارية** لمستشعرات BLE المتصلة مباشرة في [ودجت](#widgets) الخريطة. لتمكين ذلك، اذهب إلى: *القائمة → تهيئة الشاشة → اختر لوحة → إضافة ودجت → مستشعر خارجي → الإعدادات → عرض → مستوى البطارية*
- يظهر إشعار منبثق عندما ينخفض **مستوى بطارية مستشعر مقترن إلى أقل من 15٪**.


## تسجيل الرحلة {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.webp)  ![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.webp)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.webp)  ![ملحق المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.webp)  

</TabItem>

</Tabs>

لتسجيل بيانات المستشعر باستخدام [ملحق تسجيل الرحلات](../plugins/trip-recording.md#recording-settings) أثناء رحلتك:

1. تأكد من تمكين **ملحق المستشعرات الخارجية**.
2. اذهب إلى *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. لكل نوع بيانات تريد تسجيله (مثل الإيقاع، معدل ضربات القلب، السرعة)، حدد المستشعر الذي سيُستخدم كمصدر للبيانات.
4. ابدأ تسجيل رحلتك. سيقوم OsmAnd بحفظ بيانات المستشعر المحددة في مسار GPX.

***ملاحظات:***

- تُعرض قائمة أنواع المستشعرات المتاحة حتى لو لم تكن هناك مستشعرات متصلة.
- إذا لم يتم إقران أي مستشعرات بعد، فاستخدم زر [إقران مستشعر جديد](#pair-new-sensor) في إعدادات الملحقات.
- بيانات مستوى البطارية **لا** يتم تسجيلها في ملفات GPX وليست متاحة للتحليل على الخريطة.
- على **أندرويد**، يمكن تحديد مستشعر واحد يرسل عدة أنواع من البيانات كمصدر لكل نوع منها.
- المصدر الافتراضي لكل نوع بيانات هو *أي مستشعر متصل*. يسجل OsmAnd البيانات من مستشعر متصل من هذا النوع. لإيقاف تسجيل نوع بيانات، حدد *لا شيء*.
- على **أندرويد**، يظهر اسم المستشعر المقترن المطابق بجانب *أي مستشعر متصل*. إذا نسيت مستشعرًا محددًا، يعود المصدر إلى *أي مستشعر متصل*.

:::note توافق التنسيق
يستخدم OsmAnd [تسجيل المسار](../plugins/trip-recording.md#recorded-gpx-file) لتضمين بيانات المستشعر في ملفات GPX. هذا التنسيق متوافق مع العديد من تطبيقات الرياضة والتدريب (مثل Strava، Runkeeper).
:::


### تحليل البيانات {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

بعد تسجيل رحلتك باستخدام [ملحق تسجيل الرحلات](../plugins/trip-recording.md#recording-settings)، يمكنك مراجعة بيانات المستشعر في واجهة تحليل المسار.

لتحليل البيانات:

1. أنهِ تسجيل رحلتك.
2. افتح المسار المسجل من *أماكني → المسارات* أو انقر على المسار على الخريطة.
3. حدد *خيارات → تحليل على الخريطة* من قائمة سياق المسار.

سيعرض هذا رسومًا بيانية لبياناتك المسجلة: *معدل ضربات القلب*، *السرعة*، *الإيقاع*، *طاقة الدراجة*، و *درجة الحرارة*

> *مستوى البطارية والمسافة غير متاحين في ميزة [التحليل على الخريطة](../map/tracks/index.md#analyze-track-on-map).*


## الودجات {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → اختر لوحة → إضافة ودجت → <Translate android="true" ids="external_sensor_widgets"/>*

![ودجات المستشعرات الخارجية لأندرويد](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![ودجات المستشعرات الخارجية لأندرويد](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → اختر لوحة → إضافة ودجت → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![ودجات المستشعرات الخارجية لـ iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![ودجات المستشعرات الخارجية لـ iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

يسمح لك [ودجت المستشعرات الخارجية](../widgets/info-widgets.md#external-sensors-widgets) بعرض البيانات الحية من مستشعراتك المتصلة مباشرة على شاشة الخريطة.

قبل بدء رحلتك:

- تأكد من تمكين ملحق المستشعرات الخارجية.
- افتح *تهيئة الشاشة* وأضف الودجات اللازمة إلى اللوحة المناسبة.

أنواع الودجات المدعومة:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – يعرض معدل ضربات القلب في الوقت الفعلي من جهاز مراقبة مقترن.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*لأندرويد فقط*) – يعرض طاقة الدواسة الحالية بالواط.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – يعرض عدد دورات الدواسة في الدقيقة. يمكن أن تأتي بيانات الإيقاع من مستشعر إيقاع أو من مستشعر طاقة الدراجة الذي يرسل الإيقاع.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – سرعة ركوب الدراجة الحالية.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – المسافة الإجمالية التي قاسها المستشعر.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – درجة الحرارة المحيطة الحالية.
7. **مستوى البطارية** – النسبة المئوية للبطارية المتبقية في مستشعر BLE متصل، قم بتبديله في **إعدادات المستشعر**.

**ملاحظة:** إذا انقطع مستشعر مؤقتًا، انقر على ودجته على الخريطة لمحاولة إعادة الاتصال فورًا — لا حاجة لفتح قائمة المستشعرات الخارجية.


### إعدادات الودجت {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → اختر لوحة → إضافة ودجت → <Translate android="true" ids="external_sensor_widgets"/> → اختر ودجت → <Translate android="true" ids="shared_string_settings"/>*

![إعدادات ودجات المستشعرات الخارجية لأندرويد](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → اختر لوحة → إضافة ودجت → مستشعر خارجي → اختر ودجت → الإعدادات*

![إعدادات ودجات المستشعرات الخارجية لـ iOS](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

بشكل افتراضي، يعرض الودجت أول مستشعر متصل حاليًا من هذا النوع. إذا كنت ترغب في استخدام مستشعر معين، فانقر على **مصدر البيانات** واختر من قائمة المستشعرات المتصلة. على **أندرويد**، يتوفر المستشعر الذي يرسل عدة أنواع من البيانات كمصدر في كل ودجت مطابق، على سبيل المثال، *معدل ضربات القلب* و*سرعة الدراجة* و*إيقاع الدراجة*.

على **iOS**، يمكنك اختيار القيمة التي سيتم عرضها في الودجت:  

- **بيانات المستشعر** (مثل الإيقاع، السرعة).
- **مستوى البطارية** – النسبة المئوية للبطارية في الوقت الفعلي للمستشعر المحدد.

> *هذا مفيد عندما تريد مراقبة شحن البطارية أثناء الرحلات الطويلة لتجنب انقطاع الاتصال.*


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)