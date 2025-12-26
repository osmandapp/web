---
source-hash: c693b6d101a1d27afa8ef4aae2115e4338730cd7c671f000edf63199372909f6
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


## نظرة عامة {#overview}

:::info ميزة مدفوعة
ملحق مقاييس المركبة هو [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd. معلومات سرعة المركبة وسرعة المحرك متاحة مجانًا في OsmAnd.
:::

يمكّن **ملحق مقاييس المركبة** من مراقبة بيانات المركبة في الوقت الفعلي عبر [بروتوكول OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). يمكن للمستخدمين تتبع المقاييس الأساسية مثل أداء المحرك، وكفاءة استهلاك الوقود، والسرعة، مما يسمح بالصيانة الاستباقية للمركبة واستكشاف الأخطاء وإصلاحها.  

تعتبر [ماسحات OBD-II](https://en.wikipedia.org/wiki/ELM327) جزءًا لا يتجزأ من تشخيصات السيارات الحديثة. مع تدفق البيانات في الوقت الفعلي، يكتسب المستخدمون رؤى فورية حول أنظمة المركبة، مما يسهل الصيانة الوقائية ويقلل من تكاليف الإصلاح. هذه الأدوات حيوية للاستخدام الشخصي والخدمات المهنية للسيارات على حد سواء.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إعدادات OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام البيانات من ماسح OBD-II:

1. [شراء](../purchases/) **اشتراك OsmAnd Pro**. (*سرعة المركبة* و*سرعة المحرك* مجانيتان.)  
2. [تمكين](../plugins/index.md#enable--disable) ملحق مقاييس المركبة في قسم الملحقات من *القائمة الرئيسية*.
3. **تشغيل** البلوتوث على جهازك.
4. [توصيل](#pair-odb-ii-scanner) ماسح OBD-II بمنفذ مركبتك.
5. [تكوين](#scanner-settings) **إعدادات الماسح الضوئي**.
6. [إضافة](#widgets) **ودجات مقاييس المركبة** لعرض البيانات على الشاشة (اختياري).
7. [استخدام](#trip-recording) **ملحق تسجيل الرحلات** لتسجيل بيانات المركبة.


### إقران ماسح ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

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

قم بتوصيل الماسح الضوئي بمنفذ مركبتك وإقرانه من خلال التطبيق:

- انتقل إلى *القائمة ← الملحقات ← مقاييس المركبة ← الإعدادات ← اتصال* أو **+**.
- إذا كانت مقاييس المركبة في *القائمة الرئيسية*:  *القائمة ← مقاييس المركبة ← الإعدادات ← اتصال* أو **+**.

اختر جهاز OBD-II الخاص بك من القائمة وقم بإنشاء الاتصال.


## إعدادات الماسح الضوئي {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**أندرويد.** اذهب إلى: *القائمة ← الملحقات ← مقاييس المركبة ← OBD ← قائمة الثلاث نقاط*

|  |  |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings.png)|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** اذهب إلى: *القائمة ← الملحقات ← مقاييس المركبة ← OBD ← قائمة الثلاث نقاط*

|  |  |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **اتصال / قطع الاتصال**. ينشئ أو ينهي الاتصال بمستشعر OBD-II.
- **الإعدادات**. يفتح شاشة إعدادات OBD-II، مما يسمح بإدارة الاتصال والوصول إلى معلمات المركبة المتاحة.
- **إعادة تسمية**. يتيح لك تعيين اسم مخصص للمستشعر لسهولة التعرف عليه.
- **نسيان**. يزيل مستشعر OBD-II المقترن مسبقًا من القائمة، مما يتطلب إعادة الإقران إذا لزم الأمر لاحقًا.

**سلوك إعادة الاتصال** *(أندرويد فقط)***:** يحاول OsmAnd تلقائيًا إعادة الاتصال بمحول OBD-II عند بدء تشغيل التطبيق، أو عند بدء الملاحة، أو عند إطلاق Android Auto / Car Play. إذا كان الاتصال غير متاح، فإن ودجات مقاييس المركبة تعرض «–». نقرة واحدة على أي ودجت مقاييس المركبة ستحاول إعادة الاتصال بالمستشعر. إذا كان المستشعر متصلاً بالفعل، فإن النقرة تقوم بالتبديل بين أوضاع عرض الودجت كالمعتاد.


## قائمة المقاييس {#metrics-list}

يتم تصنيف المقاييس للوضوح. تتيح أدوات التشخيص المتقدمة الصيانة الوقائية من خلال تفسير هذه المعلمات:

*درجة الحرارة:*

- **درجة حرارة السحب**. يعرض درجة حرارة الهواء الداخل إلى مشعب السحب.
- **درجة الحرارة المحيطة**. يراقب الظروف الخارجية.
- **درجة حرارة سائل التبريد**. يتتبع كفاءة تبريد المحرك.
- **درجة حرارة زيت المحرك**. يعرض حالة الزيت أثناء التشغيل.

*المحرك:*

- **سرعة المحرك**. يراقب عدد دورات المحرك في الدقيقة (RPM).
- **وقت تشغيل المحرك**. يتتبع وقت تشغيل المحرك.
- **حمل المحرك المحسوب**. يشير إلى النسبة المئوية لعبء عمل المحرك.

*الوقود:*

- **ضغط الوقود**. يشير إلى ضغط نظام الوقود.
- **استهلاك الوقود**. يحسب استهلاك وقود المركبة.
- **الوقود المتبقي**. يشير إلى مستوى الوقود في المركبة.

*أخرى:*

- **مستوى البطارية**. يشير إلى مستوى جهد بطارية المركبة.
- **جهد المحول**. يعرض الجهد المقدم إلى محول OBD-II (أمر AT RV).
- **سرعة المركبة**. يعرض بيانات مستشعر سرعة المركبة (VSS).
- **موضع الخانق**. يحدد كمية الهواء الداخلة للمحرك عبر زاوية لوحة الخانق.  
  **VIN**. يعرض رقم تعريف المركبة المكون من ١٧ حرفًا.


## تسجيل الرحلة {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**أندرويد**. اذهب إلى: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![تسجيل OBD](@site/static/img/plugins/obd/obd_recording.png)| ![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. اذهب إلى: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



لتضمين بيانات OBD-II في ملف GPX، تحتاج إلى تحديد المعلمات المطلوبة للتسجيل باستخدام [ملحق تسجيل الرحلات](../plugins/trip-recording.md#recording-settings). يتيح لك هذا تحليل مقاييس المركبة إلى جانب بيانات رحلتك.

### الوسوم {#tags}

يطبق OsmAnd أسماء وسوم مخصصة لمقاييس المركبة في [ملف GPX](../plugins/trip-recording.md#recorded-gpx-file). على سبيل المثال:

- `vm_eotemp`: درجة حرارة زيت المحرك.
- `vm_fpress`: ضغط الوقود.
- `vm_espeed`: سرعة المحرك.

تسهل هذه الوسوم تحديد واستخدام بيانات مركبة معينة عند مراجعة ملف GPX المسجل.


## الودجات {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**أندرويد.** اذهب إلى: *القائمة ← تكوين الشاشة ← الودجات ← اختر لوحة ← مقاييس المركبة*

| | |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![إعدادات OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** اذهب إلى: *القائمة ← تكوين الشاشة ← الودجات ← اختر لوحة ← مقاييس المركبة*

| | |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



يتم تضمين [ودجات مقاييس المركبة](../widgets/info-widgets.md#vehicle-metrics-widgets) تلقائيًا عند تمكين الملحق. إذا لم تكن مرئية، يمكنك إضافتها يدويًا عبر قائمة [تكوين الشاشة](../widgets/configure-screen.md).

### إعدادات الودجت {#widget-settings}

تعرض الودجات البيانات الرئيسية من جهاز OBD-II المتصل في الوقت الفعلي، مثل السرعة ومقاييس المحرك واستهلاك الوقود. تأكد من أنها مرئية قبل بدء رحلتك لتتبع المقاييس بسلاسة.

تقدم بعض الودجات خيارات لوضع العرض:

- **فوري**. يعرض البيانات في الوقت الفعلي للمقياس المحدد.
- **المتوسط**. يعرض القيم المتوسطة على فترة زمنية قابلة للتكوين (من ١٥ ثانية إلى ٦٠ دقيقة).

تتكيف بعض الودجات، بما في ذلك *استهلاك الوقود*، وحدات العرض الخاصة بها وصيغ المقاييس الإقليمية بناءً على [إعدادات الملف الشخصي](https://osmand.net/docs/user/personal/profiles#units--formats). عند استخدام وحدات حجم غير اللتر، يدعم استهلاك الوقود عرض القيم كـ Miles per Gallon (MPG). يعتمد نوع MPG الدقيق على وحدة الحجم المحددة:

- US gallons → MPG (US)
- Imperial gallons → MPG (UK)

يقوم الودجت تلقائيًا باختيار الصيغة المناسبة وفقًا للوحدات <Translate android="true" ids="routing_attr_length_name"/> و <Translate android="true" ids="shared_string_volume"/> المختارة في الملف الشخصي النشط، ويتم الحفاظ على وضع العرض المختار عند تصدير واستيراد الملفات الشخصية.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)