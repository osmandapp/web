---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
sidebar_position: 5
sidebar_label: المسارات
title: المسارات
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

يوفر خطّاط الويب طريقة بسيطة للعمل مع بياناتك الشخصية مباشرة في المتصفح. بعد تسجيل الدخول، يمكنك فتح مساراتك، تعديلها، إنشاء مسارات جديدة، أو تحميل ملفات من جهاز الكمبيوتر الخاص بك.

يتم مزامنة جميع التغييرات تلقائيًا عبر [OsmAnd Cloud](../personal/osmand-cloud.md)، لذا يظهر أي شيء تقوم بتحديثه على الويب على أجهزتك، ويظهر أي شيء تقوم بإنشائه على هاتفك هنا أيضًا. هذا يجعل من السهل التنقل بين المنصات والحفاظ على اتساق بياناتك أينما تستخدم OsmAnd.


## كيفية الاستخدام {#how-to-use}

إنها ميزة مدفوعة <ProFeature/>. لاستخدامها، قم بتسجيل الدخول إلى حساب OsmAnd Pro الخاص بك.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

تحتوي قسم المسارات على جميع الأدوات والإجراءات المتعلقة بالمسارات. الخيارات التالية متاحة:

- عرض المسارات من [OsmAnd Cloud](#cloud-tracks).
- إضافة المسارات على الخريطة (مجلد **مرئي على الخريطة**).
- عرض معلومات جميع المسارات والرسم البياني
- تعديل المسارات وإضافتها إلى السحابة.
- تنزيل وحذف المسارات.
- إنشاء مجلدات جديدة أو حذفها.
- تنزيل المجلدات كمجموعة OSF أو OBF.


## مرئي على الخريطة {#visible-on-the-map}

يُسرد عرض **مرئي على الخريطة** جميع المسارات التي تُعرض حاليًا على الخريطة. يمكن إضافة أي مسار إلى هذه القائمة من لوحة المسارات الرئيسية باستخدام الخيار **⋮ → جعل المسار مرئيًا**.

تُبرز المسارات المرئية على الخريطة باللون الأزرق، بينما تظهر المسارات المخفية حاليًا باللون الرمادي. يتيح مفتاح بجانب كل مسار إظهارها أو إخفاءها بسرعة. يقوم زر **إخفاء الكل** بإيقاف جميع المسارات المرئية دفعة واحدة.

تحت القائمة الرئيسية، يعرض قسم **المرئي مؤخرًا** المسارات التي تم عرضها على الخريطة سابقًا. هذا يجعل من السهل إعادة تشغيل مسار دون البحث عنه مرة أخرى في مجلداتك أو في OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## قائمة مجلد المسار {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

انقر على زر النقاط الثلاث (⋮) لفتح قائمة *مجلد المسار*. من هنا، يمكنك:

 - تنزيل كـ OSF.
 - تنزيل كمجموعة OBF. تصدير المجلد بتنسيق OsmAnd الثنائي، مع اختيار [ملف OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) أو [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **ملف OBF**. يمكنك تنزيل خريطة OBF غير متصلة بالإنترنت وفتحها باستخدام OsmAnd على جهازك. إنها مناسبة لعرض عدد كبير من المسارات على الخريطة.
      -  **Travel OBF**. يمكنك أيضًا استيراد خريطة المسارات ككتاب سفر، مما يتيح لك اختيار مسارات فردية على الخريطة واستخدامها مثل ملفات GPX العادية. يدعم كتاب السفر أيضًا ميزات مثل عرض المسارات كنقاط، وتصفية المسارات حسب نوع النشاط، وتصفية نقاط الطريق.
 - إعادة التسمية. يفتح حوارًا حيث يمكنك إدخال اسم جديد للمجلد المحدد. يتم مزامنة التغيير إلى OsmAnd Cloud وسيظهر على جميع الأجهزة المتصلة.
 - الحذف. يفتح حوار تأكيد. حذف مجلد يزيله نهائيًا مع جميع المسارات التي يحتويها. يتم مزامنة هذا الإجراء أيضًا عبر OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)


## مسارات السحابة {#cloud-tracks}

ستكون مسارات GPX التي لديك في [OsmAnd Cloud](../personal/osmand-cloud.md) متاحة للعرض والتحرير بعد تسجيل الدخول. فقط لمستخدمي **Pro** <ProFeature/> وللمستخدمين في [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (الذين يمكنهم تنزيل بياناتهم حتى بعد انتهاء اشتراكهم في Pro).

الميزات التالية متاحة بعد اختيار مسار سحابي:

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)

- شاشات المعلومات:
  - *المعلومات* - عرض بيانات المسار.
  - *الارتفاع* - رسم بياني للارتفاع.
  - *السرعة* - رسم بياني للسرعة.
  - *المنحدر* - رسم بياني للمنحدر.
  - *الإعدادات* - قائمة بملفات التنقل لأداة *إنشاء الطريق*.
  - *المنعطفات* - قائمة مولدة لتعليمات المنعطف التقريبية بناءً على هندسة المسار.
  - *نوع الطريق* - تقسيم المسار إلى شرائح حسب تصنيف الطريق.
  - *السطح* - عرض أنواع أسطح المسار على طول الطريق.
  - *السلاسة* - عرض سلاسة الشريحة بناءً على علامات OSM.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_turns.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details.png)

- أزرار الإجراء:
  - *تحرير المسار* - إضافة مسار سحابي إلى المحلي للتحرير (زر _تحرير المحلي_ على اللوحة).
  - *تنزيل GPX* - تنزيل المسار إلى الحاسوب.
  - *إعادة حساب* الارتفاع (الأقمار الصناعية) - عرض رسم بياني للارتفاع للمسار المحدد.
  - *حذف المسار* - حذف المسار.
  - *إغلاق المسار* - إغلاق المسار.


## المقالات ذات الصلة {#related-articles}

- [إدارة المسارات](../personal/tracks/manage-tracks.md)
- [محلل المسارات](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)