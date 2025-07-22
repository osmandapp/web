---
source-hash: 3285f0c719a8255c35a044a6bccdc05206d01216a9c0d4f8c30f58b3a9122f36
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

<InfoAndroidOnly/>

## نظرة عامة {#overview}

:::info ميزة مدفوعة
مكون مقاييس المركبة الإضافي هو [ميزة مدفوعة](../purchases/index.md) لتطبيق OsmAnd.
:::

يتيح **مكون مقاييس المركبة الإضافي** مراقبة بيانات المركبة في الوقت الفعلي عبر بروتوكول OBD-II. يمكن للمستخدمين تتبع المقاييس الأساسية مثل أداء المحرك، وكفاءة استهلاك الوقود، والسرعة، مما يتيح صيانة المركبة واستكشاف الأخطاء وإصلاحها بشكل استباقي.

تُعد ماسحات OBD-II جزءًا لا يتجزأ من تشخيصات السيارات الحديثة. مع تدفق البيانات في الوقت الفعلي، يكتسب المستخدمون رؤى فورية في أنظمة المركبة، مما يسهل الصيانة الوقائية ويقلل تكاليف الإصلاح. هذه الأدوات حيوية للاستخدام الشخصي وخدمات السيارات الاحترافية.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام البيانات من ماسح OBD-II:

1. [اشترِ](../purchases/) **اشتراك OsmAnd Pro**. (*سرعة المركبة* و*سرعة المحرك* مجانيتان.)
2. [فعّل](../plugins/index.md#enable--disable) مكون مقاييس المركبة الإضافي في قسم المكونات الإضافية في *القائمة الرئيسية*.
3. **شغّل** البلوتوث على جهازك.
4. [وصّل](#pair-odb-ii-scanner) ماسح OBD-II بمنفذ سيارتك.
5. [كوّن](#scanner-settings) **إعدادات الماسح**.
6. [أضف](#widgets) **عناصر واجهة مستخدم مقاييس المركبة** لعرض البيانات على الشاشة (اختياري).
7. [استخدم](#trip-recording) **مكون تسجيل الرحلة الإضافي** لتسجيل بيانات المركبة.


### إقران ماسح ODB-II {#pair-odb-ii-scanner}

| | |
|--|--|
|![اتصال OBD](@site/static/img/plugins/obd/obd_connect.png)|![اتصال OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

وصّل الماسح بمنفذ سيارتك وقم بإقرانه عبر التطبيق:

- انتقل إلى *القائمة ← المكونات الإضافية ← مقاييس المركبة ← الإعدادات ← اتصال* أو **+**.
- إذا كانت مقاييس المركبة في *القائمة الرئيسية*: *القائمة ← مقاييس المركبة ← الإعدادات ← اتصال* أو **+**.

اختر جهاز OBD-II الخاص بك من القائمة وأنشئ الاتصال.


## إعدادات الماسح {#scanner-settings}

**أندرويد.** انتقل إلى: *القائمة ← المكونات الإضافية ← مقاييس المركبة ← OBD ← قائمة ثلاث نقاط*

| | |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings.png)|![إعدادات OBD](@site/static/img/plugins/obd/obd_settings_1.png)|

- **اتصال / قطع الاتصال**. ينشئ أو ينهي الاتصال بمستشعر OBD-II.
- **الإعدادات**. يفتح شاشة إعدادات OBD-II، مما يتيح إدارة الاتصال والوصول إلى معلمات المركبة المتاحة.
- **إعادة التسمية**. يتيح لك تعيين اسم مخصص للمستشعر لتسهيل التعرف عليه.
- **نسيان**. يزيل مستشعر OBD-II المقترن سابقًا من القائمة، مما يتطلب إعادة الإقران إذا لزم الأمر لاحقًا.


## قائمة المقاييس {#metrics-list}

تُصنف المقاييس للوضوح. تتيح أدوات التشخيص المتقدمة الصيانة الوقائية من خلال تفسير هذه المعلمات:

*درجة الحرارة:*

- **درجة حرارة السحب**. تعرض درجة حرارة الهواء الداخل إلى مشعب السحب.
- **درجة الحرارة المحيطة**. تراقب الظروف الخارجية.
- **درجة حرارة سائل التبريد**. تتتبع كفاءة تبريد المحرك.
- **درجة حرارة زيت المحرك**. تعرض حالة الزيت أثناء التشغيل.

*المحرك:*

- **سرعة المحرك**. تراقب دورات المحرك في الدقيقة (RPM).
- **وقت تشغيل المحرك**. تتتبع وقت تشغيل المحرك.
- **حمل المحرك المحسوب**. يشير إلى نسبة حمل المحرك.

*الوقود:*

- **ضغط الوقود**. يشير إلى ضغط نظام الوقود.
- **استهلاك الوقود**. يحسب استهلاك المركبة للوقود.
- **الوقود المتبقي**. يشير إلى مستوى الوقود في المركبة.

*أخرى:*

- **مستوى البطارية**. يشير إلى مستوى جهد بطارية المركبة.
- **سرعة المركبة**. تعرض بيانات مستشعر سرعة المركبة (VSS).
- **موضع الخانق**. يحدد كمية الهواء الداخل للمحرك عبر زاوية لوحة الخانق.
  **VIN**. يعرض رقم تعريف المركبة المكون من 17 حرفًا.


## تسجيل الرحلة {#trip-recording}

**أندرويد**. انتقل إلى: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![تسجيل OBD](@site/static/img/plugins/obd/obd_recording.png)| ![تسجيل OBD](@site/static/img/plugins/obd/obd_recording_1.png)|

لتضمين بيانات OBD-II في ملف GPX، تحتاج إلى تحديد المعلمات المطلوبة للتسجيل باستخدام [مكون تسجيل الرحلة الإضافي](../plugins/trip-recording.md#recording-settings). يتيح لك هذا تحليل مقاييس المركبة جنبًا إلى جنب مع بيانات رحلتك.

#### العلامات {#tags}

يطبق OsmAnd أسماء علامات مخصصة لمقاييس المركبة في [ملف GPX](../plugins/trip-recording.md#recorded-gpx-file). على سبيل المثال:

- `vm_eotemp`: درجة حرارة زيت المحرك.
- `vm_fpress`: ضغط الوقود.
- `vm_espeed`: سرعة المحرك.

تسهل هذه العلامات تحديد واستخدام بيانات المركبة المحددة عند مراجعة ملف GPX المسجل.


## عناصر واجهة المستخدم {#widgets}

**أندرويد.** انتقل إلى: *القائمة ← تكوين الشاشة ← عناصر واجهة المستخدم ← اختر لوحة ← مقاييس المركبة*

| | |
|--|--|
|![إعدادات OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![إعدادات OBD](@site/static/img/plugins/obd/obd_widget.png)|

تُدرج [عناصر واجهة مستخدم مقاييس المركبة](../widgets/info-widgets.md#vehicle-metrics-widgets) تلقائيًا عند تمكين المكون الإضافي. إذا لم تكن مرئية، يمكنك إضافتها يدويًا عبر قائمة [تكوين الشاشة](../widgets/configure-screen.md).

### إعدادات عنصر واجهة المستخدم {#widget-settings}

تعرض عناصر واجهة المستخدم البيانات الرئيسية من جهاز OBD-II المتصل في الوقت الفعلي، مثل السرعة ومقاييس المحرك واستهلاك الوقود. تأكد من أنها مرئية قبل بدء رحلتك لتتبع المقاييس بسلاسة.

توفر بعض عناصر واجهة المستخدم خيارات وضع العرض:

- **فوري**. يعرض البيانات في الوقت الفعلي للمقياس المحدد.
- **متوسط**. يعرض القيم المتوسطة على مدى فترة زمنية قابلة للتكوين (من 15 ثانية إلى 60 دقيقة).


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: ديسمبر 2024*