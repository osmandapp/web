---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title: Android Auto
ios: false
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

![شاشة Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) هو برنامج طورته Google يسمح للمستخدمين بتوصيل أجهزة Android الخاصة بهم بأنظمة الوسائط المتعددة المتوافقة مع المركبات. يوفر *Android Auto* إصدارًا معدلاً ومحسنًا من تطبيق OsmAnd للاستخدام الآمن أثناء القيادة، مما يسهل ويزيد من أمان الوصول إلى وظائف الملاحة في التطبيق.

وظيفة **Android Auto** مدعومة فقط عند استخدام تطبيق OsmAnd المتاح في [متجر Google Play](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **ملاحظة**: *Android Auto ليس نسخة طبق الأصل من تطبيق OsmAnd للجوال. إنه يتميز بواجهة مبسطة، تركز على وظائف الملاحة الأساسية لضمان القيادة الآمنة. بعض الميزات المتقدمة غير مدعومة بسبب قيود المنصة.*

### شاشة الاتصال {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

أثناء توصيل جهازك بـ *Android Auto*، يتم قفل الخريطة على شاشة التطبيق. هذه ميزة أمان مقصودة لضمان التحكم في الملاحة حصريًا من شاشة السيارة، مما يقلل من التشتت أثناء القيادة. تحقق من [الأسئلة الشائعة](#common-issues-and-solutions) حول شاشة الاتصال.

### الشاشة الرئيسية {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

عند فتح التطبيق، يتم عرض قائمة بالفئات. لسهولة التنقل، يمكنك إخفائها بالنقر على الزر في الزاوية العلوية اليمنى من الشاشة.

- انقر على زر القائمة لإخفاء قائمة الفئات.
- في الزاوية العلوية اليمنى من الشاشة، انقر على الزر بجانب أزرار الوظائف إذا كنت ترغب في العودة إلى القائمة.

### التفاعل مع الخريطة {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

يعرض *Android Auto* واجهة OsmAnd المعدلة لشاشة نظام الوسائط المتعددة في السيارة. يقتصر التفاعل مع الخريطة على أزرار مثل:

- [قائمة OsmAnd](#destination-points). تحتوي على قائمة بالخيارات المتاحة لتعيين نقطة نهاية المسار أو رحلة حرة.
- [الإعدادات](#voice-prompts). هذا الزر مسؤول عن: 1. الوصول إلى تشغيل/إيقاف *التوجيهات الصوتية* عند التنقل في المسار المحدد؛ 2. إظهار تفاصيل المسار (الوقت والمسافة) للمحطة التالية.
- [البحث](#search). يؤدي النقر على الزر إلى فتح شاشة مع إمكانية الوصول إلى وظائف البحث.
- [موقعي](../widgets/map-buttons.md#my-location-and-zoom). ينقل الجزء المرئي من الخريطة بحيث يكون موقعك الحالي في منتصف الشاشة.
- [التكبير/التصغير](../widgets/map-buttons.md#my-location-and-zoom). يسمح لك بتكبير وتصغير الجزء المرئي من الخريطة.
- [البوصلة](../widgets/map-buttons.md#compass). يوضح أي من أوضاع اتجاه الخريطة الأربعة المتاحة على شاشة جهازك تم تحديده.

## معلمات الإعداد المطلوبة {#required-setup-parameters}

### بدء الملاحة {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

لكي يعمل OsmAnd في *Android Auto*، يجب عليك [توصيل](#connection-screen) جهاز Android الخاص بك بنظام الوسائط المتعددة في سيارتك. يجب تحديث نظام تشغيل Android إلى الإصدار 6.0 أو أعلى.

- لمعرفة كيفية توصيل جهازك وإعداده، قم بزيارة مواقع [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).

- لا تدعم جميع المركبات إمكانية توصيل الجهاز. تحقق من [القائمة الخاصة بـ *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- تحتاج إلى شراء **نسخة مدفوعة** من التطبيق أو الاشتراك [اشتراكًا](../purchases/android.md#free-and-paid-features). تحقق من اشتراكك الحالي هنا *القائمة ← الإعدادات ← المشتريات*.

- يستخدم *Android Auto* [ملف تعريف القيادة الأول](#profile-first) في قائمة الملفات الشخصية للملاحة. قم بتعيين الملف الشخصي المفضل ليكون الأول، باستثناء ملف تعريف *تصفح الخريطة*، فهو لا يتم قراءته بواسطة *Android Auto*. للقيام بذلك، انتقل إلى OsmAnd *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← تحرير قائمة الملفات الشخصية* ← انقل ملف تعريف [**القيادة**](#profile-first) الخاص بك إلى المركز الأول أو بعد ملف تعريف *تصفح الخريطة*.

- من المهم أن تتذكر أن *Android Auto* هو تطبيق كثيف البيانات، بما في ذلك بيانات الهاتف المحمول، وقد تعتمد جودة النظام على جودة اتصالك وسرعة الوصول إلى الإنترنت.

### ملف التعريف الأول {#profile-first}

لا يمكنك تحديد ملف تعريف مباشرة في *Android Auto* على شاشة السيارة.
إذا كان لديك بالفعل ملف تعريف محدد على جهازك يتوافق مع نوع السيارة، مثل *القيادة*، *الشاحنة*، *السيارة*، *الدراجة النارية*، *الدراجة البخارية*، **سيقوم التطبيق تلقائيًا بتنشيط** الملف الشخصي المناسب عند الاتصال بـ Android Auto. على سبيل المثال، إذا كان لديك ملف تعريف *شاحنة* محددًا، وقام جهازك بالاتصال بـ **Android Auto**، فسيقوم التطبيق بتنشيط هذا الملف الشخصي.

إذا لم يكن لديك أي ملف تعريف *قيادة* محدد على جهازك يتوافق مع نوع سيارتك، فسيقوم OsmAnd بالتبديل تلقائيًا إلى ملف تعريف *القيادة*. يتم ذلك لتوفير الملاحة الأساسية ومنع المشاكل المحتملة التي يسببها استخدام ملف تعريف خاطئ لنوع معين من المركبات.

**لماذا هو مهم:**

1. **سلامة القيادة.** تتطلب أنواع النقل المختلفة معلومات وإعدادات مختلفة عند القيادة. على سبيل المثال، قد يكون سائقو الشاحنات مقيدين بارتفاع ووزن وعرض مركباتهم، لذا يوفر لهم ملف تعريف *الشاحنة* قيودًا وإرشادات مناسبة. بينما يحتاج راكبو الدراجات والدراجات النارية إلى معلومات حول مسارات الدراجات والطرق، بدون بيانات للشاحنات.

2. **المنفعة والكفاءة.** يجب تخصيص الملاحة لتلبية احتياجات وسيلة نقل معينة. يتيح ذلك للمستخدمين تقليل الوقت المستغرق للعثور على أفضل الطرق وتجنب قيود المرور غير الضرورية.

3. **تجنب الأخطاء.** يوفر لك التبديل إلى ملف تعريف *القيادة* عندما لا يوجد ملف تعريف محدد لوضع النقل المحدد وصولاً ثابتًا إلى الحد الأدنى من الإعدادات والمعلومات الضرورية، وبالتالي تجنب الأخطاء وسوء الفهم المحتمل أثناء القيادة.

## نقاط الوجهة {#destination-points}

![شاشة Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

يمكنك تحديد [نقاط الاهتمام (POIs)](../map/point-layers-on-map.md#points-of-interest-pois) أو [المفضلة](../personal/favorites.md) أو [العلامات](../personal/markers.md) التي تم تعيينها وإضافتها مسبقًا كنقطة وجهة. من الممكن أيضًا تحديد [مسار](../personal/tracks/manage-tracks.md) مسجل أو تم تنزيله للمسار، أو استخدام [البحث](../search/index.md)، أو تحديد وجهة من [سجل](../search/search-history.md) المسار أو القيام بـ *رحلة حرة*.

1. إذا كنت تريد موقعًا معينًا على الخريطة كنقطة نهاية، فحدد الفئة المناسبة من النقاط من القائمة، [نقاط الاهتمام (POIs)](#poi-categories)، [المفضلة](#favorites)، أو [علامات الخريطة](#map-markers).

    - يمكن أن تحتوي جميع الفئات على عدد من العناصر في القائمة لا يتجاوز ما يوفره نظام الوسائط المتعددة في سيارتك. هذا يعني أن القائمة في *Android Auto* قد تكون غير مكتملة، وجميع المجلدات الأخرى متاحة فقط في تطبيق OsmAnd على جهازك.
    - يحتوي مجلد [آخر تعديل](#folder-last-modified) على قائمة بالوجهات الأخيرة، مرتبة حسب تاريخ الإضافة أو التغيير.
    - يتم فرز قائمة جميع المجلدات الأخرى حسب أحدث تحديث، المجلدات الجديدة في أعلى القائمة. لا يمكن تغيير ترتيبها يدويًا.
    - يتم فرز قائمة النقاط داخل المجلدات حسب المسافة إليها، بدءًا من الأقرب. تحتوي كل نقطة على اسم أو إحداثيات، وأيقونة على شكل (لون وأيقونة محددة افتراضيًا أو مختارة من قبلك في تطبيق OsmAnd)، والمسافة من نقطة الموقع الحالي إليها.

2. حدد فئة [السجل](#history) للعثور على إحدى الوجهات الأخيرة المخزنة في ذاكرة الجهاز.

3. حدد [البحث](#search) لإدخال وجهة من فئات البحث المتاحة.

4. اختر **رحلة حرة** للقيام برحلة بدون نقطة نهاية محددة.

:::note
أثناء القيادة، يمكن [الإعلان](#voice-prompts) عن النقاط المحددة عند الاقتراب منها أو المرور بها. راجع إعدادات [التوجيهات الصوتية](../navigation/guidance/voice-navigation.md) في المقالة المناسبة لإعداد إشعارات صوتية.
:::

### السجل {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

في فئة السجل، يمكنك تحديد وجهة من قائمة نقاط النهاية. يتم فرزها حسب أحدث استخدام، بدءًا من الأحدث. يمكن أن يكون هذا مناسبًا للوصول السريع إلى المسارات المستخدمة بشكل متكرر. لمعرفة كيفية استخدام أو حذف وجهة، اقرأ مقالة [سجل البحث](../search/search-history.md).

### فئات نقاط الاهتمام (POI) {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

نقاط الاهتمام (POIs) هي نوع من النقاط التي تحدد الأماكن أو الأشياء على الخريطة التي تهم المستخدمين أو ذات أهمية لهم. يتم تمييزها بأيقونات خاصة متوفرة في [إعدادات OsmAnd](../map/point-layers-on-map.md#poi-types) ويتم فرزها في مجموعات.

لبناء مسار إلى نقطة اهتمام (POI) في *Android Auto*، اتبع هذه الخطوات:

1. حدد نقطة الاهتمام (POI) المطلوبة من قائمة الفئات المتاحة، أو أدخل اسم نقطة الاهتمام (POI) باستخدام [البحث](#search).
2. يؤدي النقر على فئة إلى فتح الشاشة التالية مع قائمة بنقاط الاهتمام (POIs).
3. يؤدي النقر على عنصر في القائمة إلى فتح شاشة الملاحة.
4. يقوم OsmAnd بحساب المسار وعرضه على شاشة *Android Auto*. انقر على زر **ابدأ** لبدء التنقل إلى هذا الموقع.
5. اعتمادًا على [إعدادات](../navigation/guidance/navigation-settings.md) تطبيق OsmAnd الخاص بك وسيارتك، قد تتلقى [توجيهات صوتية](#voice-prompts) لإرشادك إلى وجهتك.

### المفضلة {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*المفضلة* هي إحدى وظائف OsmAnd التي تسمح لك بإنشاء نوع من الإشارات المرجعية (الملاحظات) على الخريطة. أثناء استخدام *Android Auto*، لا يمكنك إضافة أو تعديل المفضلة، بل يمكنك فقط استخدام المفضلة الموجودة. يمكن العثور على قائمة [المفضلة](../personal/favorites.md#manage-favorites) في تطبيق OsmAnd *القائمة ← أماكني ← المفضلة*. إذا كنت ترغب في استخدامها للملاحة، أضف الأماكن الضرورية إلى المفضلة قبل توصيل الجهاز بنظام الوسائط المتعددة في سيارتك.

لإنشاء مسار إلى نقطة مفضلة في *Android Auto*، اتبع الخطوات التالية:

1. يؤدي النقر على مجلد إلى فتح الشاشة التالية مع قائمة بمجلدات المفضلة.
2. يؤدي النقر على عنصر في القائمة إلى فتح الملاحة.

### علامات الخريطة {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

لتحديد وجهتك النهائية كعلامة خريطة، تحتاج أولاً إلى إنشاء العدد المطلوب من العلامات في تطبيق OsmAnd على جهازك قبل توصيله بالنظام. يجب أن تكون العلامات متاحة في قائمة *القائمة ← علامة الخريطة*. تم وصف هذا بمزيد من التفصيل في مقالة [العلامات](../personal/markers.md).

### المسارات {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

لبناء مسار إلى وجهة، يمكنك تحديد مسار موجود متاح في تطبيق OsmAnd. يمكن [تنزيل](../personal/tracks/manage-tracks.md#import) المسار مسبقًا، أو استخدامه [مسجلًا](../plugins/trip-recording.md) أو إنشاؤه في [تخطيط مسار](../plan-route/create-route.md).

من قائمة المسارات في *القائمة ← أماكني ← [المسارات](../personal/tracks/manage-tracks.md)*، حدد المسار المطلوب قبل الاتصال بنظام الوسائط المتعددة في السيارة، وسيتم بناء المسار إما حتى بداية المسار أو عرض الاتجاه الحالي على طول المسار.

يمكن أيضًا تحديد المسارات مباشرة على شاشة السيارة في *Android Auto*. يتم تنظيمها في مجلدات قمت بإنشائها، وللوصول السهل والسريع إلى المسارات التي تم فتحها مؤخرًا، يوجد مجلد خاص [آخر تعديل](#folder-last-modified).

### البحث {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

يمنحك الانتقال إلى البحث وصولاً سريعًا إلى قائمة [سجل الوجهات](#history) الأخير. وبالمثل مع [قائمة الملاحة](../navigation/setup/route-navigation.md#navigation-menu)، حيث يتم جمع جميع طرق وجهات OsmAnd مثل العنوان أو نقاط الاهتمام (POIs) أو الإحداثيات.

يمكنك استخدام أداة البحث للعثور على المكان المطلوب على الخريطة لتخطيط المسار من أي فئة بحث متاحة.

- [العنوان](../search/search-address.md) - ابدأ بكتابة العنوان في حقل البحث.
- [نقطة الاهتمام (POI)](../search/search-poi.md) و [نقطة الاهتمام المخصصة (Custom POI)](../search/search-poi.md) - ستعرض قائمة الأسماء المتشابهة القريبة أيضًا نقاط الاهتمام (POIs) أو فئاتها.
- [البحث بالإحداثيات](../search/search-address#coordinates-search) - أدخل الإحداثيات للعثور على النقطة على الخريطة.

### مجلد آخر تعديل {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)

تحتوي فئتا المفضلة والمسارات على مجلد خاص باسم *آخر تعديل*. نظرًا لأن القائمة في هذه الفئات يمكن أن تكون كبيرة جدًا لأنها تحتوي على جميع مفضلاتك أو مساراتك الموجودة، فإن هذا المجلد ضروري للوصول السهل والسريع إلى وجهاتك الأخيرة.

## ميزات الملاحة {#navigation-features}

بالإضافة إلى الميزات الأساسية لتطبيق OsmAnd في *Android Auto* التي توفر ملاحة مريحة في سيارتك، هناك عدد من الميزات الإضافية التي تعزز تجربتك وتجعل الملاحة أكثر تخصيصًا وراحة وكفاءة.

### المنعطف التالي ومعلومات المسار {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

تعرض أداة **المنعطف التالي** المسافة ونوع [مناورة المنعطف التالي](../widgets/nav-widgets.md#next-turn) و [اسم الشارع](../widgets/nav-widgets.md#street-name).

تتكون معلومات المسار من:

- [الوقت المقدر للسفر](../widgets/nav-widgets.md#time-to-destination)،
- [الوقت المقدر للوصول](../widgets/nav-widgets.md#time-to-destination)،
- [مسافة السفر](../widgets/nav-widgets.md#distance-to-destination).

عند التمكين، ستعرض [إعدادات الأداة](#eta-next-stop) (معلومات المسار) تفاصيل المسار للمحطة التالية ([النقطة الوسيطة](../navigation/setup/route-navigation.md#intermediate-destinations)).

### أداة تنبيه الشاشة {#screen-alert-widget}

تجمع أداة المعلومات هذه أنواع التنبيهات مثل **معابر المشاة** و **حد السرعة**.

- تختلف أنواع التنبيهات في المظهر، والذي يعتمد على **<Translate android="true" ids="driving_region"/>** ويمكن تهيئته في *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- في *Android Auto* لا يمكن تعيين عرض التنبيهات، تحتاج إلى تهيئة الأداة في التطبيق قبل بدء الملاحة وتوصيل جهازك بالمركبة.
- للحصول على وصف مفصل لأنواع التنبيهات، راجع [هذه المقالة](../widgets/nav-widgets.md#alert-types).
- لإعداد تنبيهات الشاشة للملفات الشخصية المتاحة، راجع مقالة [إعدادات الملاحة](../navigation/guidance/navigation-settings.md#screen-alerts).

### عداد السرعة {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

أداة **عداد السرعة** هي عنصر واجهة مدمج يعرض *السرعة الحالية* باستخدام بيانات GPS و *حد السرعة* من [قاعدة بيانات OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) و [إعدادات OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) على شاشة نظام الوسائط المتعددة في السيارة.

- أداة **عداد السرعة** [*تعتمد على الملف الشخصي*](../personal/profiles.md)، لذلك إذا قمت بتغيير الإعدادات لملف شخصي واحد، فلن يتم تطبيقها على ملف شخصي آخر.
- لا يوجد خيار لتخصيص عرض أداة **عداد السرعة** مباشرة في *Android Auto*، تحتاج إلى تهيئتها في تطبيق OsmAnd قبل بدء الملاحة وتوصيل جهازك بالمركبة.
- لمزيد من المعلومات حول كيفية إضافة وتهيئة أداة *عداد السرعة* إلى الشاشة، يرجى قراءة مقالة [أدوات المعلومات](../widgets/info-widgets.md#speedometer).

### مظهر الخريطة (ثلاثي الأبعاد) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

يتيح لك تطبيق OsmAnd استخدام عرض الخريطة ثلاثي الأبعاد على شاشة *Android Auto* لعرض مسارك والملاحة.

- لتمكين هذه الميزة، تحتاج إلى تحديد [إصدار عرض الخريطة 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- افتح *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* الرئيسي مباشرة في تطبيق OsmAnd.
- بعد تهيئة الإعدادات، سيتم عرض **زر ثلاثي الأبعاد** على شاشة *Android Auto* عند إغلاق قائمة الفئات للوجهات.
- يمكنك التبديل بين أوضاع الخريطة ثلاثية الأبعاد / ثنائية الأبعاد بالنقر على هذا الزر.

### التوجيهات الصوتية {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

التوجيهات الصوتية هي إحدى أكثر الميزات فائدة في OsmAnd أثناء التنقل لـ *Android Auto*، حيث تمنحك إرشادات في الوقت الفعلي وتسمح للسائق بالتركيز على الطريق. توفر التوجيهات الصوتية تعليمات واضحة حول المنعطفات والاتجاهات وتعليمات الملاحة الأخرى، مما يوفر استخدامًا أكثر أمانًا وراحة لنظام الملاحة.

لتهيئة [التوجيهات الصوتية](../navigation/guidance/voice-navigation.md) وفقًا للملف الشخصي المحدد، يجب عليك القيام بذلك قبل بدء مسار في تطبيق OsmAnd على جهازك. في *Android Auto*، يتوفر فقط إعداد إيقاف أو تشغيل جميع التوجيهات الصوتية المحددة في نفس الوقت (*زر الإعداد ← التوجيهات الصوتية (تشغيل/إيقاف)*).

### الوقت المقدر للوصول للمحطة التالية {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

في تطبيق OsmAnd، يمكنك تحديد نقطة أو أكثر [نقاط وسيطة](../navigation/setup/route-navigation.md#intermediate-destinations) لمسار الملاحة.

لتمكين أو تعطيل [**معلومات المسار** لنقطة وسيطة (المحطة التالية)](#next-turn--route-info)، انتقل إلى *Android Auto (OsmAnd) ← زر الإعداد ← إظهار تفاصيل المسار للمحطة التالية ← تشغيل/إيقاف*. يعرض هذا الخيار الوقت والمسافة إلى المحطة التالية على [أداة *معلومات المسار*](#next-turn--route-info).

### وضع الخريطة {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

يوفر *Android Auto* و OsmAnd القدرة على ضبط الخريطة لتتناسب مع ظروف الإضاءة. في *وضع الخريطة النهاري*، يظل نظام الألوان ساطعًا ومتناقضًا، مما يسهل القراءة حتى في ضوء الشمس الساطع. في *الوضع الليلي*، تصبح الخرائط أغمق، مما يساعد السائق على التنقل بشكل أفضل في الظلام.

يحتوي OsmAnd على خيارات [وضع الخريطة](../map/vector-maps.md#map-mode)، ولكن عند استخدام التطبيق في *Android Auto*، يتم تجاهل هذه الخيارات. بدلاً من ذلك، يتم استخدام الوضع الذي حددته في إعدادات نظام *Android Auto* للخرائط.

- حدد الوضع النهاري أو الوضع الليلي للحفاظ على عرض الخريطة دون تغيير.
- إذا كنت تريد أن يتغير وضع عرض الخريطة اعتمادًا على الوقت من اليوم، فحدد الوضع التلقائي.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->

### تقسيم الشاشة {#split-screen}

![شاشة Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

يمكن فتح تطبيق OsmAnd واستخدامه للتنقل في *Android Auto* على شاشة نظام الوسائط المتعددة في السيارة في وقت واحد مع تطبيقات الموسيقى أو الرسائل أو تطبيقات الإشعارات الأخرى. إعداد عرض تقسيم الشاشة على هاتف متصل بـ *Android Auto* أو على الشاشة في نظام سيارتك.

1. من الشاشة الرئيسية، انقر على التطبيقات.
2. انقر على الإعدادات.
3. ابحث عن Multi window واختر التبديل.
4. العودة إلى الشاشة الرئيسية.

<!--
![شاشة Android Auto](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->

في إعدادات Android Auto، يمكنك تغيير موضع شريط المهام وتخطيط الشاشة الرئيسية:

- **موضع شريط المهام:**
  انتقل إلى *إعدادات Android Auto ← إظهار عناصر التحكم السريعة للتطبيقات* وقم بتبديل المفتاح إلى وضع الإيقاف. سيؤدي ذلك إلى نقل شريط المهام من أسفل الشاشة إلى جانبها.

- **تخطيط الشاشة الرئيسية:**
  انتقل إلى *إعدادات Android Auto ← تغيير التخطيط ← تغيير موقع مقعد السائق* لضبط التخطيط بناءً على موضع مقعد السائق.

## المشاكل الشائعة والحلول {#common-issues-and-solutions}

1. [مشكلة اتجاه الخريطة.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [مشكلة التحكم في مستوى الصوت.](../troubleshooting/android_auto.md#volume-control-issue)
3. [تأخيرات الموقع (أعطال ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. أسئلة شائعة حول شاشة الاتصال:
    - *لماذا لا يمكنني التحكم في التطبيق من هاتفي عند الاتصال بـ Android Auto؟*
        لأسباب تتعلق بالسلامة، يتم قفل شاشة تطبيق OsmAnd على هاتفك أثناء الاتصال بـ Android Auto. يمكنك التفاعل مع التطبيق فقط من خلال شاشة السيارة.
    - *هل يمكنني تعطيل الشاشة المقفلة واستخدام التطبيق على هاتفي؟*
        لا، يفرض Android Auto هذا التقييد لمنع التشتت أثناء القيادة.
    - *ماذا أفعل إذا بدا أن هاتفي وشاشة السيارة غير متصلين؟*
        تأكد من توصيل جهازك بشكل صحيح عبر USB أو Bluetooth.
        أعد تشغيل نظام معلومات وترفيه سيارتك وتطبيق OsmAnd إذا كان الاتصال غير مستقر.

> *آخر تحديث: مارس 2025*