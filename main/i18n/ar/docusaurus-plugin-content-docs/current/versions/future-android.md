---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
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


# أندرويد 5.4 {#android-54}



## انضم إلى النسخة التجريبية {#join-beta}

يُصدر OsmAnd العديد من الإصدارات الجاهزة للاستخدام يوميًا، مما يتيح لك تتبع الميزات الجديدة والمشاركة في عملية ترجمة OsmAnd. يمكنك المشاركة في اختبار النسخة التجريبية من OsmAnd باستخدام Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## ما الجديد {#whats-new}

- تحسين **[المفضلات](https://osmand.net/docs/user/personal/favorites)** مع دعم مرفقات الوسائط (الصور والصوت والفيديو) وتحسين دمج ملاحظات الصوت/الفيديو.
- تحسين **[أدوات الملاحة](https://osmand.net/docs/user/widgets/nav-widgets)** مع مرونة أكبر في الحجم والتكيف مع التخطيط عبر كثافات واتجاهات الشاشات المختلفة.
- إضافة مفتاح الخريطة إلى **[تهيئة الخريطة](https://osmand.net/docs/user/map/configure-map-menu)** لفهم أفضل لأنواع المسارات وعناصر الخريطة.
- تحسين تصفية المسارات والتحكم البصري في **[تهيئة الخريطة](https://osmand.net/docs/user/map/configure-map-menu)**، بما في ذلك تصنيفات المسارات وأولوياتها.
- تحسين تحليل المسارات مع أنواع رسوم بيانية جديدة وبيانات أكثر تفصيلاً مثل السطح ونوع الطريق والانحدار.
- تحسين إدارة المسارات مع معاينات وتنظيم أفضل في **[أماكني](https://osmand.net/docs/user/personal/myplaces)**.
- النسخ الاحتياطي التلقائي ومزامنة أكثر موثوقية لبيانات المستخدم في **[سحابة OsmAnd](https://osmand.net/docs/user/personal/osmand-cloud)**، بما في ذلك **[المجلدات الذكية](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- تحسينات أولية للملاحة البحرية مع تحسينات AIS ومعلمات وأدوات ملاحة إضافية.
- تحسين تجربة **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** مع تحسين عناصر البحث والملاحة.
- إضافة إمكانية التفاعل مع الخريطة على **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**، بما في ذلك تحديد النقاط مباشرة.
- إعادة تصميم **[أداة الارتفاع](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** مع معلومات ارتفاع المسار الأكثر تفصيلاً.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## إصلاحات الأخطاء {#bug-fixes}

- إصلاح [مشكلة](https://github.com/osmandapp/OsmAnd/issues/16507) حيث لم يتم تحديث خصائص المفضلة (اللون والرمز والشكل) عند تغيير مجموعتها.
- إصلاح [اتجاهات الخروج غير الصحيحة](https://github.com/osmandapp/OsmAnd/issues/23104) المعروضة على الدوارات في Android Auto.
- تصحيح [قيم الصعود والهبوط غير الدقيقة](https://github.com/osmandapp/OsmAnd/issues/20624) في أدوات الارتفاع.
- منع [المفضلات المخفية](https://github.com/osmandapp/OsmAnd/issues/24689) من الظهور مجددًا على الخريطة عند إضافة نقاط مسار إلى مجلد.
- حل [التناقضات بين الرسوم البيانية](https://github.com/osmandapp/OsmAnd/issues/24712) في شاشة التفاصيل.
- حل [مشكلة](https://github.com/osmandapp/OsmAnd/issues/24791) حيث تظهر مجلدات المفضلات غير المثبتة مثبتة مرة أخرى بعد إعادة تشغيل التطبيق.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->