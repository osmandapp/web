---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**محلل المسارات** هو أداة ويب تساعد في تحليل المقاطع المتكررة من المسارات بين النقاط المحددة على الخريطة. يقوم بفحص مساراتك ويجد جميع المقاطع التي تمر عبر الموقع(ات) المختار(ة)، مما يتيح لك مقارنة السرعة، والارتفاع، والمسافة، والوقت عبر أنشطة متعددة.

## كيفية الاستخدام {#how-to-use}

بعد فتح محلل المسارات (يظهر كمفتاح ربط)، تفتح الأداة بعرض خريطة وحالة فارغة. من هنا، يمكنك اختيار المسارات التي سيتم تضمينها في التحليل باستخدام لوحة **اختيار المسارات**. يسمح المحلل بالعمل مع جميع المسارات المتاحة أو تقييد التحليل على مجلدات محددة.

لبدء التحليل، قم بتعيين نقطة واحدة أو نقطتين مباشرة على الخريطة. انقر بزر الماوس الأيمن في الموقع المرغوب واختر **النقطة أ / النقطة ب** من القائمة السياقية. ثم يبحث المحلل عن مقاطع المسارات التي تمر عبر النقطة المحددة أو بين النقطتين.

![Track Analyzer](@site/static/img/web/web_analyzer_select.png) ![Track Analyzer](@site/static/img/web/web_analyzer_points.png)

## الترتيب والمعلمات المرئية {#sorting-and-visible-parameters}
بعد أن يجد المحلل المقاطع المتطابقة، يتم عرض النتائج كقائمة. يمكن إعادة ترتيب القائمة باستخدام خيار **الترتيب**، الذي يغير كيفية سرد المقاطع. بالإضافة إلى ذلك، يفتح زر **الحقول** لوحة المعلمات المرئية، حيث يمكنك التحكم في المعلمات التحليلية التي يتم عرضها لكل مقطع. يمكنك عرض جميع المعلمات المتاحة أو اختيار تلك المتعلقة فقط بتحليلك.

تُجمع المعلمات المتاحة حسب النوع:

**السرعة**
- أقصى سرعة
- متوسط السرعة
- أدنى سرعة

**الارتفاع**
- أقصى ارتفاع
- متوسط الارتفاع
- أدنى ارتفاع

**الصعود / الهبوط**

**التاريخ والوقت**
- التاريخ
- وقت البدء
- وقت الانتهاء
- فترة الوقت
- المدة
- الوقت في الحركة

**الطول**

![Track Analyzer](@site/static/img/web/web_analyzer_sort.png) ![Track Analyzer](@site/static/img/web/web_analyzer_fields.png)

## تحليل البيانات {#data-analysis}

يتم عرض كل مقطع متطابق في قائمة النتائج على اليسار. لكل مقطع، يتم عرض مجموعة من المعلمات المحسوبة، اعتمادًا على المعلمات المرئية المفعلة.

لكل مقطع أيضًا قائمة بنقاط ثلاث (⋮) مع الإجراءات التالية:
- فتح المسار — يفتح المسار الكامل المتعلق بالمقطع المحدد.
- إخفاء المسار / إظهار المسار — يتحكم في ما إذا كان المسار يظهر على الخريطة.
- استبعاد — يزيل المقطع من نتائج التحليل الحالية.

![Track Analyzer](@site/static/img/web/web_analyzer_menu.png)

### الرسوم البيانية {#graphs}

أسفل الخريطة، يعرض المحلل رسمًا بيانيًا يُصور المقاطع المحددة. يمثل الرسم البياني البيانات فقط للمقاطع الموجودة بين النقاط المحددة، وليس المسارات بأكملها.

يدعم الرسم البياني التبديل بين أنواع بيانات مختلفة:
- الارتفاع.
- المنحدر.
- السرعة.
يتم عرض نوع بيانات واحد فقط في كل مرة، وتغييره يحدث الرسم البياني فورًا.

عند وجود مقاطع متعددة، يعرض الرسم البياني بيانات لعدة مقاطع في وقت واحد. يسمح محدد أعلى الرسم البياني لك باختيار عدد الرسوم البيانية للمقاطع التي يتم عرضها مرة واحدة وللتبديل بينها.

![Track Analyzer](@site/static/img/web/web_analyzer_altitude.png) ![Track Analyzer](@site/static/img/web/web_analyzer_tracks.png)

## المقالات ذات الصلة {#related-articles}

- [المسارات](../web/web-tracks.md)
- [إدارة المسارات](../personal/tracks/manage-tracks.md)
- [سحابة OsmAnd](../personal/osmand-cloud.md)