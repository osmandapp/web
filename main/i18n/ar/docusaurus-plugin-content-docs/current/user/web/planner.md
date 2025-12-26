---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
sidebar_position: 9
sidebar_label:  تخطيط المسار
title: تخطيط المسار على موقع الويب
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

يسمح لك مخطط المسارات على الويب في OsmAnd بإنشاء مسارات ملاحة، وتخطيط المسارات، وإدارة الملفات المحلية مباشرة من متصفحك. هذه الأداة على الويب مفيدة لإنشاء مسارات سفر مفصلة يمكنك مزامنتها مع تطبيقك أو مشاركتها مع الآخرين.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## إنشاء مسار وملفات محلية {#create-track-and-local-files}

تتيح لك أداة [**تخطيط المسار**](../plan-route/create-route.md) في OsmAnd Web إنشاء المسارات وتعديلها بشكل مشابه لتطبيق الهاتف المحمول. إليك كيفية إنشاء وإدارة المسارات:


***إنشاء مسار جديد:***

- *انقر بزر الماوس الأيمن* على الخريطة وحدد **إنشاء مسار جديد**.
- بدلاً من ذلك، استخدم زر **إنشاء مسار** في قائمة *المحلية* (الموجودة على الجانب الأيمن مع أزرار *القلم* و*الرفع*).


***إدارة المسارات:***

- **حدد ملف تعريف الملاحة**. اختر ملف تعريف (على سبيل المثال، التنزه، القيادة) لأقسام مسار محددة (*مقاطع جديدة*) أو للمسار بأكمله (*كل المقاطع*).
- **أضف نقاط الطريق**. انقر على الخريطة لإضافة نقاط جديدة.
- **احفظ المسار**. احفظ مسارك للاستخدام في المستقبل.
- **عرض تفاصيل المسار**. يمكنك الوصول إلى معلومات المسار التفصيلية، بما في ذلك الطول والمدة والتضاريس.
  ![إنشاء مسار على الويب في OsmAnd](@site/static/img/web/create_route.png)


***استيراد وإنشاء المسارات:***

- **استيراد مسار**. يمكنك رفع أي ملف GPX إلى قسم **المحلية** عن طريق زيارة [osmand.net/map](https://osmand.net/map).
- **إنشاء مسار**. قم بإنشاء مسار جديد يدويًا عن طريق تحديد نقاط الطريق.
  ![إنشاء مسار على الويب في OsmAnd](@site/static/img/web/create_route_2.png)


***إجراءات ومعلومات المسار المحلي:***

توفر قائمة **المسار المحلي** ثلاث لوحات للتحرير: **المعلومات**، و**المسار**، و**نقاط الطريق**.

**لوحة المعلومات**:

- *حفظ في السحابة*. احفظ مسارك في سحابة OsmAnd للوصول إليه عبر الأجهزة.
- *إضافة وصف*. أضف ملاحظات حول المسار.
- *إعادة تسمية*. قم بتغيير اسم المسار.
- *إعادة الحساب*. أضف أو حدث بيانات الارتفاع.
- *الارتفاع*. عرض ملف تعريف الارتفاع.
- *الرسم البياني للسرعة*. عرض بيانات السرعة عبر المسار.
- *الرسم البياني للانحدار*. عرض تغيرات الانحدار على طول المسار.  
- *تفاصيل الطريق*. عرض معلومات مفصلة مثل نوع الطريق والسطح والانحدار.
- *تنزيل GPX*. قم بتصدير المسار كملف GPX ([ميزة Pro](../purchases/index.md)).
- *إغلاق المسار*. أغلق عرض تحرير المسار.
- *حذف المسار*. احذف المسار بشكل دائم.
  ![إنشاء مسار على الويب في OsmAnd](@site/static/img/web/create_route_3.png)

**لوحة المسار**:

- عرض وتحرير نقاط المسار.
- إعادة ترتيب النقاط أو حذفها حسب الحاجة.

**لوحة نقاط الطريق**:

- عرض وإدارة نقاط الطريق الخاصة بالمسار.
- تبديل رؤية نقاط الطريق على الخريطة.
- حذف نقاط الطريق بشكل فردي إذا لزم الأمر.

**لوحة المنعطفات**:

- عرض معلومات مفصلة حول المنعطفات على طول المسار.

  ![إنشاء مسار على الويب في OsmAnd](@site/static/img/web/create_route_1.png)


***ميزات إضافية:***

- **المزامنة مع التطبيق**. احفظ المسارات في سحابة OsmAnd وقم بالوصول إليها على تطبيق هاتفك المحمول.
- **ملفات تعريف المسار المخصصة**. اضبط ملفات التعريف لتناسب الأنشطة المختلفة، مثل ركوب الدراجات أو التنزه.
- **مسارات قابلة للمشاركة**. انسخ وشارك عناوين URL للمسارات للتخطيط التعاوني.