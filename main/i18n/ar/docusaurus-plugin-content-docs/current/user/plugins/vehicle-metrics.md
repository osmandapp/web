---
source-hash: 7cce24b2cd87bfae38687f74d452a20648b7bb08c58e4e9a6b8489cb8398e2a2
sidebar_position: 16
title:  مقاييس المركبة
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


<InfoIncompleteArticle/>


## نظرة عامة {#overview}

:::info ميزة مدفوعة
تُعدّ إضافة مقاييس المركبة (Vehicle Metrics) [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd. تتوفر معلومات سرعة المركبة وسرعة المحرك مجانًا في OsmAnd.
:::

تُمكّن **إضافة مقاييس المركبة** مراقبة بيانات المركبة في الوقت الفعلي عبر [بروتوكول OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). يمكن للمستخدمين تتبع المقاييس الأساسية مثل أداء المحرك، وكفاءة استهلاك الوقود، والسرعة، مما يتيح صيانة المركبة واستكشاف الأخطاء وإصلاحها بشكل استباقي.

تُعدّ [ماسحات OBD-II](https://en.wikipedia.org/wiki/ELM327) جزءًا لا يتجزأ من تشخيصات السيارات الحديثة. مع تدفق البيانات في الوقت الفعلي، يكتسب المستخدمون رؤى فورية حول أنظمة المركبة، مما يسهل الصيانة الوقائية ويقلل من تكاليف الإصلاح. تُعدّ هذه الأدوات حيوية لكل من الاستخدام الشخصي وخدمات السيارات الاحترافية.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام البيانات من ماسح OBD-II:

1. [اشترِ](../purchases/) **اشتراك OsmAnd Pro**. (سرعة المركبة وسرعة المحرك مجانيتان.)
2. [فعّل](../plugins/index.md#enable--disable) إضافة مقاييس المركبة في قسم الإضافات من *القائمة الرئيسية*.
3. **شغّل** البلوتوث على جهازك.
4. [وصّل](#pair-odb-ii-scanner) ماسح OBD-II بمنفذ سيارتك.
5. [كوّن](#scanner-settings) **إعدادات الماسح**.
6. [أضف](#widgets) **أدوات مقاييس المركبة** لعرض البيانات على الشاشة (اختياري).
7. [استخدم](#trip-recording) **إضافة تسجيل الرحلة** لتسجيل بيانات المركبة.


### إقران ماسح ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

|  |  |
|--|--|
|![اتصال OBD](@site/static/img/plugins/obd/obd_connect.png)|![اتصال OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![اتصال OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![اتصال OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

وصّل الماسح بمنفذ سيارتك وقم بإقرانه عبر التطبيق:

- انتقل إلى *القائمة ← الإضافات ← مقاييس المركبة ← الإعدادات ← اتصال* أو **+**.
- إذا كانت مقاييس المركبة في *القائمة الرئيسية*: *القائمة ← مقاييس المركبة ← الإعدادات ← اتصال* أو **+**.

اختر جهاز OBD-II الخاص بك من القائمة وأنشئ الاتصال.


## إعدادات الماسح {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

**أندرويد.** انتقل إلى: *القائمة ← الإضافات ← مقاييس المركبة ← OBD ← قائمة النقاط الثلاث*

|  |  |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings.png)|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** انتقل إلى: *القائمة ← الإضافات ← مقاييس المركبة ← OBD ← قائمة النقاط الثلاث*

|  |  |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **اتصال / قطع اتصال**. يُنشئ أو يُنهي الاتصال بمستشعر OBD-II.
- **الإعدادات**. يفتح شاشة إعدادات OBD-II، مما يتيح إدارة الاتصال والوصول إلى معلمات المركبة المتاحة.
- **إعادة تسمية**. يتيح لك تعيين اسم مخصص للمستشعر لتسهيل التعرف عليه.
- **نسيان**. يزيل مستشعر OBD-II المقترن مسبقًا من القائمة، مما يتطلب إعادة الإقران إذا لزم الأمر لاحقًا.


## قائمة المقاييس {#metrics-list}

تُصنّف المقاييس للوضوح. تُمكّن أدوات التشخيص المتقدمة الصيانة الوقائية من خلال تفسير هذه المعلمات:

*درجة الحرارة:*

- **درجة حرارة السحب**. تُظهر درجة حرارة الهواء الداخل إلى مشعب السحب.
- **درجة الحرارة المحيطة**. تُراقب الظروف الخارجية.
- **درجة حرارة سائل التبريد**. تُتبع كفاءة تبريد المحرك.
- **درجة حرارة زيت المحرك**. تُظهر حالة الزيت أثناء التشغيل.

*المحرك:*

- **سرعة المحرك**. تُراقب دورات المحرك في الدقيقة (RPM).
- **وقت تشغيل المحرك**. تُتبع مدة تشغيل المحرك.
- **حمل المحرك المحسوب**. يُشير إلى نسبة عبء عمل المحرك.

*الوقود:*

- **ضغط الوقود**. يُشير إلى ضغط نظام الوقود.
- **استهلاك الوقود**. يحسب استهلاك المركبة للوقود.
- **الوقود المتبقي**. يُشير إلى مستوى الوقود في المركبة.

*أخرى:*

- **مستوى البطارية**. يُشير إلى مستوى الجهد لبطارية المركبة.
- **سرعة المركبة**. تُظهر بيانات مستشعر سرعة المركبة (VSS).
- **وضع الخانق**. يُحدد سحب هواء المحرك عبر زاوية لوحة الخانق.
- **VIN**. يُظهر رقم تعريف المركبة المكون من 17 حرفًا.


## تسجيل الرحلة {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

**أندرويد**. انتقل إلى: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![تسجيل OBD](@site/static/img/plugins/obd/obd_recording.png)| ![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. انتقل إلى: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



لتضمين بيانات OBD-II في ملف GPX، تحتاج إلى تحديد المعلمات المطلوبة للتسجيل باستخدام [إضافة تسجيل الرحلة](../plugins/trip-recording.md#recording-settings). يتيح لك ذلك تحليل مقاييس المركبة جنبًا إلى جنب مع بيانات رحلتك.

#### العلامات {#tags}

يُطبّق OsmAnd أسماء علامات مخصصة لمقاييس المركبة في [ملف GPX](../plugins/trip-recording.md#recorded-gpx-file). على سبيل المثال:

- `vm_eotemp`: درجة حرارة زيت المحرك.
- `vm_fpress`: ضغط الوقود.
- `vm_espeed`: سرعة المحرك.

تُسهّل هذه العلامات تحديد واستخدام بيانات المركبة المحددة عند مراجعة ملف GPX المسجل.


## الأدوات {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

**أندرويد.** انتقل إلى: *القائمة ← تكوين الشاشة ← الأدوات ← اختر لوحة ← مقاييس المركبة*

| | |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![إعدادات OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** انتقل إلى: *القائمة ← تكوين الشاشة ← الأدوات ← اختر لوحة ← مقاييس المركبة*

| | |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



تُدرج [أدوات مقاييس المركبة](../widgets/info-widgets.md#vehicle-metrics-widgets) تلقائيًا عند تفعيل الإضافة. إذا لم تكن مرئية، يمكنك إضافتها يدويًا عبر قائمة [تكوين الشاشة](../widgets/configure-screen.md).

### إعدادات الأداة {#widget-settings}

تعرض الأدوات البيانات الرئيسية من جهاز OBD-II المتصل في الوقت الفعلي، مثل السرعة ومقاييس المحرك واستهلاك الوقود. تأكد من أنها مرئية قبل بدء رحلتك لتتبع المقاييس بسلاسة.

تُقدم بعض الأدوات خيارات وضع العرض:

- **فوري**. يعرض البيانات في الوقت الفعلي للمقياس المحدد.
- **متوسط**. يعرض القيم المتوسطة على مدى فترة زمنية قابلة للتكوين (من 15 ثانية إلى 60 دقيقة).


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: أغسطس 2025*