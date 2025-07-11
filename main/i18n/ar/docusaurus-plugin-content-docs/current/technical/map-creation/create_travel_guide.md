---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: إنشاء دليل سفر مخصص
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_هذه المقالة تحتاج إلى مراجعة_**

باستخدام [MapCreator](../../versions/map-creator.md) من OsmAnd، يمكنك إنشاء [دليل سفر](../../user/plan-route/travel-guides.md) مخصص وفريد من نوعه. يمكنك استخدام نص من أي مصدر (من ويكيبيديا إلى مدونة صديقك) كأساس للدليل ومطابقته مع مسار GPX.

### إعداد الملفات {#prepare-the-files}

احفظ مسارك بامتداد *[.GPX](../osmand-file-formats/osmand-gpx.md)* والملف النصي كـ *.html*. لإنشاء *دليل السفر* المخصص بنجاح، يجب أن تكون أسماء ملف GPX وملف html متطابقة. على سبيل المثال، *Milan.gpx* و *Milan.html*.
يمكن تنزيل مسارات GPX من الإنترنت أو يمكنك إنشاء واحد [باستخدام OsmAnd](../../user/plan-route/create-route.md) أو أي أداة أخرى لإنشاء GPX (مثل Brouter أو ما شابهها).
أضف النقاط التي ترغب في زيارتها إلى مسارك ثم احفظ هذا المسار كمسار GPX.

اختيار المصدر لنص دليلك يعود إليك بالكامل. يمكن أن يكون مقالًا في مدونة سفر، صفحة ويكيبيديا، إلخ. ما عليك سوى نسخ النص، ثم لصقه في محرر نصوص وحفظه بامتداد *.html*. تأكد من جعل اسم مسار GPX وملف HTML متطابقين.

### تشغيل الأداة {#launch-the-tool}

قم بتنزيل أحدث إصدار من [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) واستخرج الملفات من الأرشيف.

:::note
كيفية استخدام هذه الأداة موصوفة في مقالة [إنشاء خرائط نقطية ومتجهة غير متصلة بالإنترنت](./create-offline-maps-yourself.md#osmandmapcreator).
:::

ابدأ وحدة التحكم وافتح مجلد MapCreator.

مثال: `cd /home/user/OsmAndMapCreator-main/`

بالنسبة لنظام *Linux*، قم بتشغيل ./utilites.sh (ملف *Windows*: utilities.bat) travel-guide-creator.

عندما يُطلب منك توفير المسار، يرجى لصق المسار إلى المجلد الذي أعددت فيه ملفاتك.

مثال: `cd /home/user/MyCustomGuides/`

لا نوصي بوضع ملفاتك في مجلد *OsmAnd MapCreator* نفسه. يرجى الاطلاع على ملف *Read me* للحصول على أوامر خطوة بخطوة.

### استيراد الملفات {#import-files}

يجب إنشاء ملفك في ثوانٍ. بشكل افتراضي، سيتم تسميته *travel_guide.sqlite*، ولكن يمكنك إعادة تسميته كما تريد. تأكد من حفظه بامتداد ملف *sqlite*. على سبيل المثال، *Milan_weekend_tour.sqlite*. بعد ذلك، يرجى نقله إلى جهازك. على وجه التحديد، إلى المجلد الذي يتم فيه تخزين أدلة سفر OsmAnd. يمكنك التحقق من المسار إلى هذا المجلد في *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. يرجى نسخ الملف هناك باستخدام أي مدير ملفات محمول أو عن طريق توصيل هاتفك بالكمبيوتر. أعد تشغيل التطبيق.

### استخدم دليلك {#use-your-guide}

بعد بدء التطبيق، انتقل إلى قائمة *[أدلة السفر](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). استخدم البحث لعرض المقالات الجديدة.