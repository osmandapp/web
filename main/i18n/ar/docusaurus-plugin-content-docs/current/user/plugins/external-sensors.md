---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
sidebar_position: 5
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

:::info ميزة مدفوعة
تُعدّ إضافة المستشعرات الخارجية [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

تتيح لك **إضافة المستشعرات الخارجية** قراءة وتسجيل البيانات من [المستشعرات اللاسلكية الخارجية](https://en.wikipedia.org/wiki/Wireless_sensor_network) التي تعمل بتقنيتي [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) و [BLE (بلوتوث منخفض الطاقة)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) وعرض هذه البيانات باستخدام [الودجات](#widgets) في تطبيق OsmAnd. هذه الشبكة المدارة قادرة على جمع بيانات المستشعرات ونقلها وتخزينها.

> *ملاحظة: لا تدعم أجهزة iPhone و iPad تقنية ANT+ بسبب قيود الأجهزة.*

تصل **إضافة المستشعرات الخارجية** إلى المستشعرات الخارجية ويمكنها قراءة بيانات مثل:

- *معدل ضربات القلب*
- *قوة الدراجة*
- *إيقاع الدراجة*
- *سرعة الدراجة*
- *مسافة الدراجة*
- *درجة الحرارة*

لاستخدام الإضافة، تأكد من أن جهازك [متوافق](#pair-new-sensor)، وأن الإضافة [مُمكّنة](../plugins/#enable--disable)، وأن مستشعراتك الخارجية متصلة عبر البلوتوث (BLE).


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لبدء استخدام البيانات من المستشعرات الخارجية، اتبع الخطوات التالية:

1. [اشترِ](../purchases/) **اشتراك OsmAnd Pro** لفتح إضافة المستشعرات الخارجية.
2. [مكّن](../plugins/#enable--disable) الإضافة في *القائمة ← الإضافات*.
3. **شغّل البلوتوث** على جهازك للسماح بالاتصال بـ **مستشعرات BLE**.
4. [قم بإقران وتكوين](#pair-new-sensor) المستشعرات الخارجية من خلال قائمة الإضافة.
5. (اختياري) [أضف](#widgets) **ودجات المستشعرات الخارجية** إلى شاشة الخريطة لعرض البيانات في الوقت الفعلي مثل معدل ضربات القلب أو الإيقاع أو مستوى البطارية.
6. (اختياري) استخدم [إضافة تسجيل الرحلة](../plugins/trip-recording.md) لتسجيل بيانات المستشعرات في مسارات GPX.
7. (اختياري، أندرويد فقط) اتبع [هذه النصائح](https://www.thisisant.com/consumer/ant-101/ant-in-phones) لتوصيل مستشعرات ANT+ إذا كان جهازك يدعمها.


### إقران مستشعر جديد {#pair-new-sensor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

| | |
| --- | --- |
| ![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

لإقران مستشعر جديد، اتبع الخطوات التالية:

1. تأكد من **تمكين البلوتوث** على جهازك.
2. انتقل إلى *القائمة ← الإضافات ← المستشعرات الخارجية ← الإعدادات*.
3. اضغط على **إقران مستشعر جديد**.
4. سيبحث OsmAnd عن مستشعرات **Bluetooth LE** أو **ANT+** المتاحة (حسب نظامك الأساسي).
5. اضغط على زر **+** بجوار المستشعر الذي تريد إقرانه.
6. بمجرد الاتصال، سيظهر المستشعر في قائمة **الأجهزة المتصلة**.

***ملاحظات:***

- على **iOS**، يتم دعم مستشعرات **Bluetooth Low Energy (BLE)** فقط بسبب قيود الأجهزة. مستشعرات ANT+ غير متاحة.
- على **أندرويد**، قد يتم دعم كل من مستشعرات BLE و ANT+ حسب جهازك. راجع [دليل توافق ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) لمزيد من التفاصيل.
- ستظهر **إشعار منبثق** في كل مرة يتصل فيها مستشعر أو ينفصل.
- **مستشعرات قوة الدراجة** متاحة فقط على أندرويد عبر ANT+.


## إعدادات المستشعر {#sensor-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

استخدم أحد المسارات التالية لفتح إعدادات المستشعر:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> ← جهاز متاح ← الإعدادات*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> ← جهاز متاح ← الإعدادات*

![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

استخدم أحد المسارات التالية لفتح إعدادات المستشعر:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

يحتوي كل مستشعر خارجي مقترن مدرج في OsmAnd على شاشة تكوين خاصة به مع الخيارات التالية:

- **اتصال / قطع اتصال** – تبديل حالة الاتصال.
- **إعادة تسمية** – تعيين اسم مخصص للمستشعر.
- **نسيان المستشعر** – إزالة المستشعر من القائمة (يمكن إعادة إقرانه لاحقًا).
- **الإعدادات** – فتح شاشة تفاصيل المستشعر (نوع المستشعر، القيم، مستوى البطارية، إعداد محيط العجلة).

***ملاحظات:***

- على **iOS**، يمكنك عرض **مستوى البطارية** لمستشعرات BLE المتصلة مباشرة في [ودجة](#widgets) الخريطة. لتمكين ذلك، انتقل إلى: *القائمة ← تكوين الشاشة ← اختيار لوحة ← إضافة ودجة ← مستشعر خارجي ← الإعدادات ← إظهار ← مستوى البطارية*
- يظهر إشعار منبثق عندما ينخفض مستوى بطارية المستشعر المقترن **إلى أقل من 15%**.


## تسجيل الرحلة {#trip-recording}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![إضافة المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

لتسجيل بيانات المستشعر باستخدام [إضافة تسجيل الرحلة](../plugins/trip-recording.md#recording-settings) أثناء رحلتك:

1. تأكد من تمكين **إضافة المستشعرات الخارجية**.
2. انتقل إلى *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. حدد أنواع المستشعرات التي تريد تسجيلها (مثل الإيقاع، معدل ضربات القلب، السرعة).
4. ابدأ تسجيل رحلتك. سيحفظ OsmAnd بيانات المستشعر المحددة في مسار GPX.

***ملاحظات:***

- يتم عرض قائمة أنواع المستشعرات المتاحة حتى لو لم يتم توصيل أي مستشعرات.
- إذا لم يتم إقران أي مستشعرات بعد، استخدم زر [إقران مستشعر جديد](#pair-new-sensor) في إعدادات الإضافات.
- لا يتم تسجيل بيانات مستوى البطارية في ملفات GPX ولا تتوفر للتحليل على الخريطة.

:::note توافق التنسيق
يستخدم OsmAnd [تسجيل المسار](../plugins/trip-recording.md#recorded-gpx-file) لتضمين بيانات المستشعر في ملفات GPX. هذا التنسيق متوافق مع العديد من تطبيقات الرياضة والتدريب (مثل Strava، Runkeeper).
:::


### تحليل البيانات {#data-analyze}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![المستشعرات الخارجية](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

بعد تسجيل رحلتك باستخدام [إضافة تسجيل الرحلة](../plugins/trip-recording.md#recording-settings)، يمكنك مراجعة بيانات المستشعر في واجهة تحليل المسار.

لتحليل البيانات:

1. أنهِ تسجيل رحلتك.
2. افتح المسار المسجل من *أماكني ← المسارات* أو اضغط على المسار على الخريطة.
3. حدد *الخيارات ← تحليل على الخريطة* من قائمة سياق المسار.

سيؤدي ذلك إلى عرض رسوم بيانية لبياناتك المسجلة: *معدل ضربات القلب*، *السرعة*، *الإيقاع*، *قوة الدراجة*، و *درجة الحرارة*

> *مستوى البطارية والمسافة غير متاحين في ميزة [تحليل المسار على الخريطة](../map/tracks/index.md#analyze-track-on-map).*


## الودجات {#widgets}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="external_sensor_widgets"/>*

![ودجات المستشعرات الخارجية أندرويد](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![ودجات المستشعرات الخارجية أندروild](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="external_sensors_plugin_name"/>*

![ودجات المستشعرات الخارجية iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![ودجات المستشعرات الخارجية iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

تسمح لك [ودجة المستشعرات الخارجية](../widgets/info-widgets.md#external-sensors-widgets) بعرض البيانات الحية من مستشعراتك المتصلة مباشرة على شاشة الخريطة.

قبل بدء رحلتك:

- تأكد من تمكين إضافة المستشعرات الخارجية.
- افتح *تكوين الشاشة* وأضف الودجات الضرورية إلى اللوحة المناسبة.

أنواع الودجات المدعومة:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – تعرض معدل ضربات القلب في الوقت الفعلي من جهاز مراقبة مقترن.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*أندرويد فقط*) – تعرض قوة الدواسة الحالية بالواط.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – تعرض عدد دورات الدواسة في الدقيقة.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – سرعة ركوب الدراجة الحالية.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – المسافة الإجمالية التي يقيسها المستشعر.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – درجة الحرارة المحيطة الحالية.
7. **مستوى البطارية** (*iOS فقط*) – نسبة البطارية المتبقية في مستشعر BLE متصل.


### إعدادات الودجة {#widget-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="external_sensor_widgets"/> ← اختر ودجة ← <Translate android="true" ids="shared_string_settings"/>*

![إعدادات ودجات المستشعرات الخارجية أندرويد](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← إضافة ودجة ← مستشعر خارجي ← اختر ودجة ← الإعدادات*

![إعدادات ودجات المستشعرات الخارجية أندرويد](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

بشكل افتراضي، تعرض الودجة أول مستشعر متصل حاليًا من هذا النوع. إذا كنت ترغب في استخدام مستشعر معين، اضغط على **مصدر البيانات** واختر من قائمة المستشعرات المتصلة.

على **iOS**، يمكنك اختيار القيمة التي تريد عرضها في الودجة:

- **بيانات المستشعر** (مثل الإيقاع، السرعة).
- **مستوى البطارية** – نسبة البطارية في الوقت الفعلي للمستشعر المحدد.

> *هذا مفيد عندما تريد مراقبة شحن البطارية أثناء الرحلات الطويلة لتجنب الانقطاعات.*


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: مايو 2025*