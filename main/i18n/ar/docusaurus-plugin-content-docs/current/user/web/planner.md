---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
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

<!--
<InfoIncompleteArticle/>
-->


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


## إنشاء مسار جديد {#create-new-route}

هناك طريقتان لبدء مسار جديد في تخطيط المسار. الخيار الأول مباشرة من الخريطة: انقر بزر الماوس الأيمن في أي مكان على الخريطة وحدد **إنشاء مسار جديد**. الخيار الثاني من اللوحة اليسرى: انقر على زر **إنشاء مسار**.

بمجرد إنشاء المسار، أضف النقاط مباشرة على الخريطة. يضع كل نقرة النقطة التالية، ويبني المخطط المسار بين النقاط.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route.png)

### استيراد مسار {#import-track}

إذا كان لديك ملف مسار بالفعل، يمكنك استيراده إلى تخطيط المسار ومواصلة العمل معه في مخطط الويب. انقر على زر **استيراد مسار** وحدد ملف GPX من جهاز الكمبيوتر الخاص بك. بعد الرفع، يظهر المسار في قائمة المحلية الخاصة بك ويفتح في المخطط، حتى تتمكن من مراجعته على الخريطة ومواصلة التحرير والإدارة في لوحات المسار.

### الملفات المحلية {#local-files}

جميع المسارات والمسارات التي تنشئها أو تستوردها في تخطيط المسار تُضاف إلى قائمة المحلية في اللوحة اليسرى. هذا يجعل من الأسهل الحفاظ على ملفات GPX متعددة في مكان واحد والتبديل بينها أثناء التخطيط.

لكل عنصر في القائمة مفتاح تبديل يسمح لك بإظهار أو إخفاء المسار على الخريطة بسرعة. حدد مسارًا من القائمة لفتحه في المخطط ومواصلة العمل معه. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## إدارة المسار {#manage-track}

عندما تنشئ أو تستورد مسارًا في تخطيط المسار، تفتح لوحة مسار رأسية. استخدم هذه اللوحة لتغيير ملف تعريف التوجيه وإدارة المسار. انقر على تحكم الملف الشخصي لفتح حوار **تغيير الملف الشخصي**، حدد الملف الشخصي الذي تحتاجه (على سبيل المثال، السيارة، الدراجة، أو المشي)، واختر كيفية تطبيقه: *المقاطع التالية* يطبق الملف الشخصي فقط على الأجزاء الجديدة المضافة من هذه النقطة فصاعدًا، بينما *جميع المقاطع* يعيد حساب المسار بأكمله بالملف الشخصي المحدد.

من لوحة المسار يمكنك أيضًا تنفيذ إجراءات الملفات الشائعة. يمكنك **الحفظ في السحابة** للحفاظ على المسار للاستخدام لاحقًا، **تنزيل GPX** لتصديره كملف، **إغلاق المسار** لإيقاف تحريره، أو **حذف المسار** لإزالته من قائمة المحلية الخاصة بك. هذه الإجراءات متاحة أيضًا من التحكمات المقابلة في [لوحة المعلومات](#info-panel).

![OsmAnd Web Manage Track](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## لوحات تفاصيل المسار {#track-details-panels}

تشمل قائمة المسار المحلي ثلاث لوحات: **المعلومات**، و**المسار**، و**نقاط الطريق**. استخدمها لعرض معلومات المسار وإدارة نقاط المسار ونقاط الطريق.

### لوحة المعلومات {#info-panel}

تلخص لوحة المعلومات المسار المحدد وتعرض بيانات المسار والارتفاع الرئيسية. وتشمل نظرة عامة سريعة على إحصاءات المسار، بالإضافة إلى الرسوم البيانية وتحليل المسار الإضافي بناءً على بيانات الخريطة المتاحة.

يظهر قسم الملخص:

- النقاط — عدد نقاط المسار المستخدمة لبناء المسار.
- المسافة — الطول الإجمالي للمسار.
- الصعود / الهبوط — الارتفاع الإجمالي والنزول الإجمالي على طول المسار.
- الارتفاع (الحد الأدنى/المتوسط/الأقصى) — إحصاءات الارتفاع للمسار.
- إذا كانت بيانات الارتفاع مفقودة أو تحتاج إلى التحديث، استخدم الارتفاع (الأقمار الصناعية) → إعادة الحساب لإعادة بناء الارتفاع باستخدام بيانات الأقمار الصناعية (عند التوفر).

تحت الملخص، توفر اللوحة رسومًا بيانية:

- الارتفاع — ملف تعريف الارتفاع للمسار.
- الانحدار — رسم بياني للانحدار يظهر تغييرات التدرج على طول المسار.

للحصول على تفاصيل إضافية للمسار، افتح أقسام التحليل:

- السطح — يظهر أنواع السطح على طول المسار بناءً على بيانات OSM.
- السلاسة — يظهر سلاسة المقاطع بناءً على علامات OSM.

إجراءات المسار الشائعة مثل الحفظ والتنزيل والإغلاق والحذف متاحة أيضًا في هذه اللوحة.

![OsmAnd Web Info Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Manage Track](@site/static/img/web/info_panel_2.png)

### لوحة المسار {#track-panel}

تعرض لوحة المسار قائمة بنقاط المسار المستخدمة لبناء المسار. استخدمها لمراجعة وتحرير هيكل المسار: اسحب النقاط لإعادة ترتيبها، أزل النقاط باستخدام أيقونة الحذف، أو استخدم مسح النقاط لإزالة جميع النقاط والبدء من جديد.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel.png)

### لوحة نقاط الطريق {#waypoints-panel}

تُستخدم لوحة نقاط الطريق لعرض وإدارة نقاط الطريق للمسار المحدد. يمكن إضافة نقاط الطريق من قائمة السياق للخريطة — انقر بزر الماوس الأيمن على الخريطة واختر الخيار لـ **إضافة نقطة طريق**، ثم املأ تفاصيل نقطة الطريق (مثل الاسم والأيقونة واللون) واحفظها.

في قائمة نقاط الطريق، يمكنك التحكم في ما إذا كانت نقاط الطريق تُظهر على الخريطة وإزالة نقاط الطريق الفردية عند الحاجة. لإزالة جميع نقاط الطريق من المسار دفعة واحدة، استخدم *مسح جميع نقاط الطريق*.

![OsmAnd Web Waypoints Panel](@site/static/img/web/waypoints_panel.png)


## المقالات ذات الصلة {#related-articles}

- [تخطيط مسار](../plan-route/create-route.md)
- [أدلة السفر](../plan-route/travel-guides.md)
- [الملاحة](../web/web-navigation.md)