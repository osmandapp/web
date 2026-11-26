---
source-hash: 2da53a8aa242bb195e58636b6ecf74b3bda942f80025c592da823faa4061ce50
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


# أندرويد 5.5 {#android-55}



## انضم إلى النسخة التجريبية {#join-beta}

يُصدر OsmAnd العديد من الإصدارات الجاهزة للاستخدام يوميًا، مما يتيح لك تتبع الميزات الجديدة والمشاركة في عملية ترجمة OsmAnd. يمكنك المشاركة في اختبار النسخة التجريبية من OsmAnd باستخدام Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## ما الجديد {#whats-new}

- **[البحث المكاني](https://osmand.net/blog/offline-search-video)** مفعّل افتراضيًا، مع ترتيب أدق للنتائج ومرادفات واقتراحات لتصحيح الكلمات المكتوبة بشكل خاطئ.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** مجاني لجميع المستخدمين ويدعم [اقتراحات من الوجهات الأخيرة](https://osmand.net/docs/user/navigation/auto-car#dashboard-suggestions)، و[التجوال الحر](https://osmand.net/docs/user/navigation/auto-car#destination-points) التلقائي أثناء القيادة، ودعم [مساعد Google وGemini](https://osmand.net/docs/user/navigation/auto-car#voice-control).
- تتضمن **[النسخة المجانية](https://osmand.net/docs/user/purchases/android#free-and-paid-features)** جميع خرائط منطقة واحدة.
- **إضافة Panoramax** الجديدة مع صور على مستوى الشارع كطبقة خريطة، مع التصفية حسب المساهم والتاريخ والنوع.
- **[ظلال الشمس](https://osmand.net/docs/user/plugins/topography#sun-position)** الواقعية التي تلقيها المباني ثلاثية الأبعاد والتضاريس، و**[ظلال التضاريس](https://osmand.net/docs/user/plugins/topography#terrain-shadows-android)** القابلة للتعديل للتضاريس ثلاثية الأبعاد.
- مكتبة وسائط في **[أماكني](https://osmand.net/docs/user/personal/myplaces)** تجمع صورك ومقاطع الفيديو والملاحظات الصوتية في مكان واحد.
- خطوط متقطعة ومنقطة في **[مظهر المسار](https://osmand.net/docs/user/map/tracks/appearance#track-appearance-settings)**، ومتاحة أيضًا كمظهر افتراضي للمجلد.
- إعدادات جديدة لسرعة السفر مع نطاق سرعة لحساب المسار ووقت وصول يعتمد على سرعتك الفعلية في **[معلمات المركبة](https://osmand.net/docs/user/navigation/guidance/vehicle-parameters#default-speed)**.
- **[إجراء سريع](https://osmand.net/docs/user/widgets/quick-action#my-places)** جديد لإظهار مسار واحد أو عدة مسارات أو إخفائها بنقرة واحدة.
- يمكن لتسميات **[خطوط الكنتور](https://osmand.net/docs/user/plugins/topography#contour-lines)** أن تتجه نحو الأعلى، كما في الخرائط الطبوغرافية الورقية.
- دعم مقاييس القدرة BLE في **[المستشعرات الخارجية](https://osmand.net/docs/user/plugins/external-sensors#pair-new-sensor)**.

<!--
- Navigation settings included in route links.
- The trip recording "Notification" option is renamed to "Start from notification" to make clear it only adds a start button.
-->


## إصلاحات الأخطاء {#bug-fixes}

- إصلاح [مشكلة](https://github.com/osmandapp/OsmAnd/issues/24228) حيث كان إفراغ سلة محذوفات OsmAnd Cloud يستعيد البيانات المحذوفة.
- تصحيح [إعلانات إعادة حساب المسار](https://github.com/osmandapp/OsmAnd/issues/25544) التي لم تكن تتطابق مع الانحراف الفعلي عن المسار.
- إصلاح [البوصلة التي كانت تشير بزاوية خاطئة قدرها 180°](https://github.com/osmandapp/OsmAnd/issues/26147) في الاتجاه الرأسي المقلوب.
- استعادة [حالات التوقف بسرعة صفر](https://github.com/osmandapp/OsmAnd/issues/26351) في مخططات السرعة.
- حل مشكلة [اختفاء زر البدء](https://github.com/osmandapp/OsmAnd/issues/26305) في تسجيل الرحلة مع الخط الكبير أو حجم العرض الكبير.
- منع بقاء [مظهر المسار](https://github.com/osmandapp/OsmAnd/issues/25686) غير مطبق بعد مزامنة Cloud.
- إعادة [رموز OSMC](https://github.com/osmandapp/OsmAnd/issues/26148) في قائمة «ما هنا» التي تُفتح عند النقر على دروع المسارات المتداخلة.
- تحديث [أوقات الكسوف الشمسي](https://github.com/osmandapp/OsmAnd/issues/25830) لعرض الأوقات المحلية بدلًا من الأوقات العالمية.

<!--
- Fixed the parking position marker not showing when Favorites are hidden.
- Fixed imported Favorites going to the wrong folder.
-->
