---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
sidebar_position: 1
sidebar_label: مقدمة
title: مقدمة عن مخطط الويب
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

<!--
<InfoIncompleteArticle/>
-->

## نظرة عامة {#overview}

**مخطط الويب**، والمعروف أيضًا باسم [**بوابة خرائط OsmAnd**](https://osmand.net/map)، هو امتداد قائم على المتصفح لتطبيق OsmAnd للهواتف المحمولة. يتيح للمستخدمين عرض الخرائط العالمية، وتخطيط المسارات، ومحاكاة الملاحة، وإدارة البيانات الشخصية، والوصول إلى المحتوى المتزامن من أجهزتهم عبر السحابة.

صُمم كرفيق متعدد المنصات لـ OsmAnd على أندرويد و iOS، يساعد بوابة الويب المستخدمين على تخطيط الرحلات، وتحليل المسارات، وعرض التضاريس، وإدارة الملفات باستخدام أي متصفح على سطح المكتب أو الجهاز اللوحي — دون الحاجة إلى تثبيت تطبيق.

يتكامل OsmAnd Web بشكل وثيق مع خدمة **OsmAnd Cloud**، التي تتيح مزامنة المفضلة والمسارات والنسخ الاحتياطية عبر الأجهزة والمنصات. يمكن للمستخدمين الذين لديهم حسابات **OsmAnd Start** (مجاني) أو **OsmAnd Pro** (مدفوع) الاستفادة الكاملة من هذا النظام البيئي عن طريق مزامنة البيانات بين الهاتف المحمول والويب. يمكنك العثور على مقارنة مفصلة بين ميزات *Start* و *Pro* في قسم [الوصول حسب الاشتراك](#subscription-access) أدناه.

> **ملاحظة:** حتى بدون تسجيل الدخول أو التحقق من حسابك، يمكنك لا تزال استخدام العديد من الميزات الأساسية لبوابة خرائط الويب، بما في ذلك: [مسار الملاحة](./planner.md)، [مخطط المسارات](./planner.md)، [طبقات الطقس](./web-map.md#weather-on-the-web)، و [الإعدادات](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## الميزات الرئيسية {#key-features}

تقدم بوابة الويب القدرات الرئيسية التالية للعمل مع الخرائط والبيانات الشخصية في المتصفح: 

- [الخريطة](./web-map.md) بتغطية عالمية وبيانات متجهة عالية الجودة.
- [تخطيط المسارات](./planner.md) باستخدام ملفات تعريف المشي والسيارة والدراجة وغيرها.
- [معاينة الملاحة](./planner.md) مع تعليمات منعطف بمنعطف.
- [البحث](./web-search.md) و [استكشاف](./web-search.md#explore) الأماكن الشهيرة القريبة.
- عرض [المفضلة](./web-map.md#favorites)، [المسارات](./web-map.md#tracks)، و [النقاط المهمة](./web-map.md#poi-overlay) على الخريطة.
- [طبقات الطقس](./web-weather.md): الرياح ودرجة الحرارة والضغط.
- [طبقات التضاريس](./web-map.md#terrain): تظليل التلال والمنحدرات وعرض الارتفاعات.
- [محلل المسارات](./web-tracks-analyzer.md) لملفات الارتفاع والسرعة.
- وصول كامل إلى البيانات المتزامنة عبر [OsmAnd Cloud](./web-cloud#cloud-sync).
- دعم استيراد/تصدير الملفات (GPX: المسارات، المفضلة).
- تكامل سلس مع **OsmAnd Pro** و **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### الوصول حسب الاشتراك {#subscription-accesses}

![حساب الويب](@site/static/img/web/web_start.png) ![حساب الويب](@site/static/img/web/web_pro.png)

تدعم بوابة خرائط الويب عدة مستويات وصول: بدون تسجيل الدخول، مع OsmAnd Start، ومع OsmAnd Pro. يلخص الجدول أدناه أي الميزات متاحة في كل مستوى حتى تتمكن من رؤية ما لديك بالفعل بسرعة وما يصبح متاحًا مع حساب أو ترقية. تهدف هذه النظرة العامة إلى مساعدتك على اتخاذ قرار بشأن ما إذا كنت بحاجة إلى حساب على الإطلاق و، إذا كنت بحاجة، أي خيار يتناسب بشكل أفضل مع كيفية استخدامك لـ OsmAnd.

| الميزة | متوفرة في |
|--------|--------------|
| [مسار الملاحة](./planner.md) | بدون تسجيل الدخول |
| [مخطط المسارات](./planner.md) | بدون تسجيل الدخول |
| [طبقات الطقس](./web-weather.md) | بدون تسجيل الدخول |
| [الإعدادات](./web-map.md#settings) | بدون تسجيل الدخول |
| [تكوين قائمة الخريطة](./web-map.md#configure-map-menu) ([النقاط المهمة](./web-map.md#poi-overlay)، [المفضلة](./web-map.md#favorites)، [المسارات](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) أو <ProFeature/> |
| [تكوين قائمة الخريطة](./web-map.md#configure-map-menu) ([التضاريس](./web-map.md#terrain))| <ProFeature/> |
| [مزامنة OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) أو <ProFeature/> |
| [بحث الويب، الأماكن الشهيرة](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) أو <ProFeature/> |
| [مجلدات المسارات وطبقتها](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## كيف تبدأ {#how-to-start}

للوصول إلى الميزات الكاملة لبوابة خرائط OsmAnd الويب، تحتاج إلى تسجيل الدخول باستخدام حساب OsmAnd Cloud.

- إذا كان لديك بالفعل اشتراك [**OsmAnd Pro**](../personal/osmand-cloud.md#login) أو ترغب في إنشاء حساب [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) مجاني، فاتبع هذه الخطوات:

١. اذهب إلى [**بوابة خرائط OsmAnd**](https://osmand.net/map).
٢. افتح قائمة **الحساب**:
   - **تسجيل الدخول**: أدخل عنوان البريد الإلكتروني المرتبط باشتراكك في Pro أو Start، أو
   - **إنشاء حساب**: سجل للحصول على حساب OsmAnd Start مجاني. للحصول على دليل خطوة بخطوة مفصل لإنشاء حساب جديد، انظر مقالة [حساب OsmAnd](./web-cloud).

![حساب الويب](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## المقالات ذات الصلة {#related-articles}

- [الخطوات الأولى](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [مشتريات الويب](../purchases/web.md)
- [المشتريات عبر المنصات](../purchases/cross.md)