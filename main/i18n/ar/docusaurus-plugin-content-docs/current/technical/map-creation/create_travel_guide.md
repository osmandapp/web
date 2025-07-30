---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: إنشاء دليل سفر مخصص
versions: '*'
---
import Translate from '@site/src/components/Translate.js';

**_هذه المقالة بحاجة إلى مراجعة_**

باستخدام [MapCreator](../../versions/map-creator.md) من OsmAnd، يمكنك إنشاء [دليل سفر](../../user/plan-route/travel-guides.md) فريد من نوعه خاص بك. يمكنك استخدام نص من أي مصدر (من ويكيبيديا إلى مدونة صديقك) كأساس للدليل ومطابقته مع مسار GPX.

### إعداد الملفات {#prepare-the-files}

احفظ مسارك بامتداد *[.GPX](../osmand-file-formats/osmand-gpx.md)* والملف النصي بامتداد *.html*. لإنشاء *دليل السفر* المخصص الخاص بك بنجاح، يجب أن تكون أسماء ملف GPX وملف html متطابقة. على سبيل المثال، *Milan.gpx* و *Milan.html*.
يمكن تنزيل مسارات GPX من الإنترنت أو يمكنك إنشاء واحد [باستخدام OsmAnd](../../user/plan-route/create-route.md) أو أي أداة أخرى لإنشاء GPX (مثل Brouter أو ما شابهها).
أضف النقاط التي ترغب في زيارتها إلى مسارك ثم احفظ هذا المسار كمسار GPX.

اختيار مصدر نص دليلك يعود إليك تمامًا. يمكن أن يكون مقالًا في مدونة سفر، صفحة ويكيبيديا، إلخ. ما عليك سوى نسخ النص، ثم لصقه في محرر نصوص وحفظه بامتداد *.html*. تأكد من أن اسم مسار GPX وملف HTML متطابقان.

### تشغيل الأداة {#launch-the-tool}

قم بتنزيل أحدث إصدار من [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) واستخرج الملفات من الأرشيف.

:::note
يتم وصف كيفية استخدام هذه الأداة في مقالة [إنشاء خرائط نقطية ومتجهة غير متصلة بالإنترنت](./create-offline-maps-yourself.md#osmandmapcreator).
:::

ابدأ تشغيل وحدة التحكم وافتح مجلد MapCreator.

مثال: `cd /home/user/OsmAndMapCreator-main/`

بالنسبة لنظام *Linux*، قم بتشغيل ./utilites.sh (نظام *Windows*: ملف utilities.bat) travel-guide-creator.

عندما يُطلب منك توفير المسار، يرجى لصق المسار إلى المجلد الذي أعددت فيه ملفاتك.

مثال: `cd /home/user/MyCustomGuides/`

لا نوصي بتحديد موقع ملفاتك في مجلد *OsmAnd MapCreator* نفسه. يرجى الاطلاع على ملف *Read me* للحصول على الأوامر خطوة بخطوة.

### استيراد الملفات {#import-files}

يجب إنشاء ملفك في ثوانٍ. افتراضيًا، سيتم تسميته *travel_guide.sqlite*، ولكن يمكنك إعادة تسميته كما تريد. تأكد من حفظه بامتداد ملف *sqlite*. على سبيل المثال، *Milan_weekend_tour.sqlite*. بعد ذلك، يرجى نقله إلى جهازك. على وجه التحديد، إلى المجلد الذي يتم فيه تخزين أدلة سفر OsmAnd. يمكنك التحقق من المسار إلى هذا المجلد في *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. يرجى نسخ الملف هناك باستخدام أي مدير ملفات للهاتف المحمول أو عن طريق توصيل هاتفك بالكمبيوتر. أعد تشغيل التطبيق.

### استخدام دليلك {#use-your-guide}

بعد بدء تشغيل التطبيق، انتقل إلى قائمة *[أدلة السفر](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). استخدم البحث لعرض المقالات الجديدة.