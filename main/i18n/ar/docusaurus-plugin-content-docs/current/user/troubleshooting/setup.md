---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
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

لمنع فقدان البيانات، تأكد من أن بياناتك الشخصية ومساراتك وخرائطك مدعومة. يقدم OsmAnd خيارات لتصدير بياناتك إلى تنسيقات مختلفة. في حالة فقدان البيانات أو تغيير الجهاز، اتبع [هذه الخطوات](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss) لاستعادة بياناتك من نسخة احتياطية.


### كيفية نقل المفضلة والمسارات إلى جهاز جديد {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- أبسط طريقة هي تصدير ملف تعريف بالبيانات الضرورية: *القائمة ← الإعدادات ← تصدير ←* حدد البيانات التي تريد تصديرها.
- بدلاً من ذلك، يمكنك عمل نسخة احتياطية لجميع بياناتك من الجهاز السابق عن طريق نسخ المجلد الموجود في *الإعدادات ← إعدادات OsmAnd ← مجلد تخزين البيانات* (المسار الافتراضي: `Android/data/net.osmand.plus`). ثم، الصق محتويات هذا المجلد في مجلد تخزين البيانات على جهازك الجديد.


## استيراد الملفات {#import-files}

### لدي ملف GPX، كيف أقوم باستيراده إلى OsmAnd؟ {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **أندرويد**
    - يمكنك [تنزيل وفتح الملف](../navigation/setup/gpx-navigation.md) باستخدام متصفح ملفات أو خدمة سحابية مثل Dropbox، واختيار OsmAnd كتطبيق مستهدف.
    - بدلاً من ذلك، ضع الملف في مجلد OsmAnd الرئيسي: `osmand/tracks/(مجلد فرعي اختياري)/your_file.gpx`.

- **iOS**
    - لفتح [ملف GPX في OsmAnd](../navigation/setup/gpx-navigation.md)، ما عليك سوى تنزيله واختيار OsmAnd كتطبيق لفتحه. سيكون الملف متاحًا للاستخدام داخل التطبيق.

### خطوط الكنتور أو تظليل التلال لا تظهر {#contour-lines-or-hillshades-do-not-show-up}

اقرأ المزيد عن [مكون الطبوغرافيا الإضافي](../plugins/topography.md).


## كيفية تمكين خطوط النظام (أندرويد) {#how-to-enable-system-fonts-android}

بدءًا من الإصدار 4.9 من أندرويد، يدمج OsmAnd خط نظام جهازك في واجهة التطبيق، مما يحسن تصميمه عن طريق التخلص من استخدام الخطوط المختلطة. يتم تطبيق خط النظام تلقائيًا على جميع عناصر واجهة المستخدم.

- يستخدم OsmAnd خط النظام الافتراضي لجهازك في جميع عناصر واجهة المستخدم.
- يتم التبديل إلى خط النظام تلقائيًا. لا تحتاج إلى تكوين أي إعدادات في التطبيق لهذه الميزة.
- لا تؤثر هذه الميزة على الخطوط المعروضة على الخريطة.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 لأجهزة iOS غير متاح لإصدارات iOS الأقدم من iOS 15.

هذا يعني أنه لتثبيت OsmAnd 4.4 تحتاج إلى ترقية نظام التشغيل الخاص بك إلى iOS 15 على الأقل أو أحدث.


<!--
## Storage on an SD card (Android) {#storage-on-an-sd-card-android}

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed before updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    for OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or on the device itself use
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). All copy operations
may also be invoked in OsmAnd itself via `Menu/Settings/General/Data
storage folder` but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).
-->


## نسخ حزمة الخرائط النقطية التي تم إنشاؤها على الكمبيوتر {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems">

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