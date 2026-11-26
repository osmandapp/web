---
source-hash: 767578704635d01030c776c1a29804d758e70785b56523fd818befdf7a58df10
sidebar_position: 5
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

# iOS 5.5 {#ios-55}

## انضم إلى الإصدار التجريبي {#join-beta}

يتم توفير بنى iOS التجريبية (TestFlight) عادةً أسبوعيًا (بعد عرض توضيحي لـ Team Sprint). لا تحتوي على أوصاف وقد يكون لها ترقيم إصدار مستمر. يُفترض أنها مستقرة وجاهزة للاستخدام.

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">انضم إلى TestFlight</a>
</div>

<br/>


## ما الجديد {#whats-new}

- **[CarPlay](https://osmand.net/docs/user/navigation/car-play)** مجاني لجميع المستخدمين ويحصل على [إعدادات](https://osmand.net/docs/user/navigation/car-play#settings) جديدة لاتجاه الخريطة ومعدل الإطارات، مع إمكانية الوصول إلى الصفحة الرئيسية بنقرة واحدة من قائمة التنقل.
- تتضمن **[النسخة المجانية](https://osmand.net/docs/user/purchases/ios#free-and-paid-features)** جميع خرائط منطقة واحدة.
- **[تنسيقات إحداثيات](https://osmand.net/docs/user/search/search-coordinates#customize-coordinate-format)** جديدة، بما في ذلك أنظمة EPSG ومحدد Maidenhead وشبكة Swiss Grid، مع تنسيق أساسي وقائمة بالتنسيقات المفضلة.
- **[تخطيطات أدوات](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** منفصلة للوضع الرأسي والأفقي، بالإضافة إلى لوحات علوية وسفلية **[عريضة أو مدمجة](https://osmand.net/docs/user/widgets/configure-screen#panels-layout)**.
- **[مظهر لوحة الأدوات](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** القابل للتخصيص مع حجم الأداة والرموز وألوان النص والخلفية.
- إعداد **[إبقاء الشاشة قيد التشغيل](https://osmand.net/docs/user/personal/profiles#appearance)** الجديد لكل ملف تعريف: اتباع مهلة النظام، أو إبقاء الشاشة قيد التشغيل أثناء الملاحة فقط، أو إبقاؤها قيد التشغيل دائمًا.
- يمكن لتسميات **[خطوط الكنتور](https://osmand.net/docs/user/plugins/topography#contour-lines)** أن تتجه نحو الأعلى، كما في الخرائط الطبوغرافية الورقية.
- إعدادات مظهر كاملة عند **[تغيير عدة مفضلات](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)** دفعة واحدة.
- تظهر **[الوجهات الوسيطة](https://osmand.net/docs/user/navigation/setup/route-details#turn-by-turn-information)** في تفاصيل المسار مع رقمها واسمها والمسافة والوقت من نقطة البداية.

## إصلاحات الأخطاء {#bug-fixes}

- إصلاح [مشكلة](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) حيث كان إفراغ سلة محذوفات OsmAnd Cloud يستعيد الخرائط والمفضلات المحذوفة.
- تصحيح [انخفاض الارتفاع إلى 0](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) في المسارات المسجلة في الخلفية.
- حل [تعارضات مزامنة OsmAnd Cloud](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) بعد تحديث الخرائط على عدة أجهزة.
- منع ظهور [المفضلات من المجلدات المخفية](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) في نتائج البحث.
- إصلاح [إغلاق تخطيط المسار](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) عند النقر على مسار على الخريطة.
- تصحيح [وقت السفر للمشاة](https://github.com/osmandapp/OsmAnd-iOS/issues/5787) المعروض لمسارات السيارة بعد الإرفاق بالطرق.
- إصلاح [عدم استجابة نقاط الطريق المضافة إلى المسار المسجل](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) للنقرات.
- إيقاف [وميض رمز نقطة الطريق](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) أثناء تسجيل المسار.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->
