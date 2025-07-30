---
source-hash: da8767bf5368b88ca2820e7585237507258e046e1e07f73d6fe233dc66687628
sidebar_position: 1
title:  الإعداد
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## الإعداد الأولي {#initial-setup}

### كيفية استعادة البيانات {#how-to-recover-data}

لمنع فقدان البيانات، تأكد من أن بياناتك الشخصية، المسارات، والخرائط مدعومة. يوفر OsmAnd خيارات لتصدير بياناتك إلى تنسيقات مختلفة. في حالة فقدان البيانات أو تغيير الجهاز، اتبع [هذه الخطوات](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) لاستعادة بياناتك من نسخة احتياطية.

### كيفية نقل المفضلة والمسارات إلى جهاز جديد {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- الطريقة الأبسط هي تصدير ملف تعريف بالبيانات الضرورية: *القائمة ← الإعدادات ← تصدير ←* حدد البيانات التي تريد تصديرها.
- بدلاً من ذلك، يمكنك عمل نسخة احتياطية لجميع بياناتك من الجهاز السابق عن طريق نسخ المجلد الموجود في *الإعدادات ← إعدادات OsmAnd ← مجلد تخزين البيانات* (المسار الافتراضي: `Android/data/net.osmand.plus`). ثم الصق محتويات هذا المجلد في مجلد تخزين البيانات على جهازك الجديد.

## استيراد الملفات {#import-files}

### لدي ملف GPX، كيف أقوم باستيراده إلى OsmAnd؟ {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **أندرويد**
    - يمكنك [تنزيل وفتح الملف](../navigation/setup/gpx-navigation.md) باستخدام متصفح ملفات أو خدمة سحابية مثل Dropbox، واختيار OsmAnd كتطبيق مستهدف.
    - بدلاً من ذلك، ضع الملف في مجلد OsmAnd الرئيسي: `osmand/tracks/(اختياري_مجلد فرعي)/your_file.gpx`.

- **iOS**
    - لفتح [ملف GPX في OsmAnd](../navigation/setup/gpx-navigation.md)، ما عليك سوى تنزيله واختيار OsmAnd كتطبيق لفتحه. سيكون الملف متاحًا للاستخدام داخل التطبيق.

### خطوط الكنتور أو تظليل التلال لا تظهر {#contour-lines-or-hillshades-do-not-show-up}

اقرأ المزيد عن [ملحق التضاريس](../plugins/topography.md).

## كيفية تمكين خطوط النظام (أندرويد) {#how-to-enable-system-fonts-android}

بدءًا من الإصدار 4.9 من أندرويد، يدمج OsmAnd خط نظام جهازك في واجهة التطبيق، مما يحسن تصميمه عن طريق التخلص من استخدام الخطوط المختلطة. يتم تطبيق خط النظام تلقائيًا على جميع عناصر واجهة المستخدم.

- يستخدم OsmAnd خط النظام الافتراضي لجهازك في جميع عناصر واجهة المستخدم.
- التبديل إلى خط النظام تلقائي. لا تحتاج إلى تكوين أي إعدادات في التطبيق لهذه الميزة.
- هذه الميزة لا تؤثر على الخطوط المعروضة على الخريطة.

## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 لأجهزة iOS غير متاح لإصدارات iOS الأقدم من iOS 15.

هذا يعني أنه لتثبيت OsmAnd 4.4 تحتاج إلى ترقية نظام التشغيل الخاص بك إلى iOS 15 أو أحدث على الأقل.

<!--
## التخزين على بطاقة SD (أندرويد) {#storage-on-an-sd-card-android}

:::note
عندما *تقوم بتشغيل محرك أقراص USB لمشاركة الملفات* مع جهاز كمبيوتر أو فصل بطاقة SD من خلال إعدادات النظام، يتم فصل محرك الأقراص الخارجي عن الجهاز ويتم **إنهاء** جميع التطبيقات التي تعمل على محرك الأقراص الخارجي على الفور. يمكنك [قراءة المزيد هنا](https://developer.android.com/guide/topics/data/install-location).
:::

### لنقل مجلد OsmAnd الرئيسي (الخرائط) إلى بطاقة SD خارجية: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   انتقل إلى *الإعدادات (على الشاشة الرئيسية) ← إعدادات OsmAnd ← مجلد تخزين البيانات*
-   غيّر القيمة إلى مسار يشير إلى بطاقة SD الخارجية، في العديد من
    أنظمة أندرويد قد تحتوي على `/storage/extSdCard` أو ما شابه ذلك.
    يرجى ملاحظة أن بعض إصدارات أندرويد تحد بشكل صارم من اختيارك
    للمسار الذي سيكون قابلًا للكتابة للتطبيقات.
-   سيُطلب منك بعد ذلك ما إذا كان يجب نقل محتويات مجلد بيانات OsmAnd من
    الذاكرة الداخلية إلى بطاقة SD الخارجية.
    يمكنك أيضًا القيام بذلك يدويًا باستخدام تطبيق مدير الملفات المدمج في الجهاز أو عبر
    توصيل الجهاز بجهاز كمبيوتر كوحدة تخزين خارجية وإجراء النقل من هناك.

### كيف أستخدم بطاقة SD الخاصة بي مع OsmAnd تحت أندرويد 4.4+ و 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

إذا قمت بتحديث جهاز أندرويد الخاص بك إلى الإصدار 4.4.x، فسوف تواجه
مشكلة أندرويد معروفة تتعلق بإذن `WRITE_EXTERNAL_STORAGE`: لقد غير أندرويد
القواعد بحيث لا يمكن لأي تطبيق من الآن فصاعدًا الكتابة إلى
بطاقة SD الخارجية في أي مكان خارج مجلدها القياسي الجديد
`Android/data/[PACKAGE-NAME]`. إذا تم تثبيت OsmAnd قبل تحديث
جهازك إلى أندرويد 4.4.x، فسيستمر في العمل (للقراءة فقط) مع
مجلد osmand القديم غير القياسي، ولكنه لن يتمكن من تحديث أي خريطة
وملفات أخرى هناك.

الحلول:

-   نقل مجلد بيانات OsmAnd osmand إلى التخزين الداخلي. \
     **العيب:** يمكن أن يكون التخزين الداخلي صغيرًا جدًا.
-   نقل مجلد بيانات OsmAnd osmand إلى مجلد SD القياسي الخاص به، \
    لـ OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    لـ OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **تحذير:** كلما قمت بإلغاء تثبيت OsmAnd الآن، سيتم مسح جميع بياناتك
    أيضًا! (ما لم تقم بإلغاء تحميل بطاقة SD الخاصة بك، أو إعادة تسمية
    مجلد net.osmand(.plus) قبل إلغاء التثبيت.)

إذا كنت ترغب في إجراء النسخ/النقل الضروري يدويًا، فاستخدم إما
جهاز كمبيوتر لإجراء هذا الإجراء على بطاقة SD، أو على الجهاز نفسه استخدم
أداة مدير الملفات **التي جاءت مثبتة مسبقًا مع جهاز أندرويد الخاص بك**
(فقط هذه الطرق ستحصل على إذن الكتابة الضروري). يمكن أيضًا استدعاء جميع عمليات النسخ
في OsmAnd نفسه عبر `القائمة/الإعدادات/عام/مجلد تخزين البيانات`
ولكن عمليات النسخ قد تستغرق وقتًا طويلاً أو تؤدي إلى
أخطاء (على سبيل المثال، إذا كانت بطاقة SD ممتلئة جدًا).
-->

## نسخ حزمة خرائط Raster التي تم إنشاؤها على جهاز الكمبيوتر {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![استيراد sqlitedb أندرويد](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![استيراد sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)

</TabItem>

</Tabs>

يمكن حفظ حزم الخرائط بتنسيقين: [SQLite و Metainfo](https://osmand.net/docs/user/map/raster-maps). بعد إنشاء حزمة الخرائط الخاصة بك، اتبع هذه الخطوات لنقلها إلى OsmAnd:

- **لأندرويد**. قم بالوصول إلى التخزين على جهازك وانسخ الملف (الملفات) من جهاز الكمبيوتر الخاص بك إلى المجلد `BASE_OSMAND_STORAGE/tiles_`. بدلاً من ذلك، يمكنك تنزيل الملف من بريدك الإلكتروني، أو السحابة، أو برنامج المراسلة، وفتحه باستخدام تطبيق OsmAnd. ستتم إضافة حزمة الخرائط تلقائيًا إلى قائمة خرائطك عبر الإنترنت.

- **لـ iOS**. قم بتنزيل الملف من iTunes أو برنامج مراسلة، ثم افتحه باستخدام تطبيق OsmAnd. ستتم إضافة حزمة الخرائط تلقائيًا إلى قائمة خرائطك عبر الإنترنت.