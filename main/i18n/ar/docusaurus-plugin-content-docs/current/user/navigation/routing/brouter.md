---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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




## نظرة عامة {#overview}

:::caution للأندرويد فقط
خوارزمية التوجيه BRouter التابعة لجهة خارجية متاحة فقط لإصدار أندرويد من تطبيق OsmAnd.
:::

*BRouter* هي خوارزمية توجيه تابعة لجهة خارجية يمكن استخدامها في تطبيق OsmAnd لوضع [الملاحة دون اتصال بالإنترنت](../guidance/navigation-settings.md#navigation-type). وهي مصممة لتحسين المسار بناءً على معلمات مختلفة، مثل الوقت أو المسافة أو نوع المركبة.

يستخدم [BRouter](http://brouter.de/) بيانات OpenStreetMap لإنشاء مسار ثم يقوم بتعديله بناءً على المعلمات المحددة. يستخدم مسارات محسوبة مسبقًا لإنشاء مسار بسرعة دون اتصال بالإنترنت. كما يسمح لك بتخصيص ملفات تعريف التوجيه، والتي يتم تحديدها بواسطة مجموعة من المعلمات لمراعاة العوامل المختلفة في اختيار المسار. يشرح ملف [BRouter readme.txt](http://brouter.de/brouter/readme.txt) بمزيد من التفصيل كيفية تثبيت البرنامج واستخدامه.

يوفر لك OsmAnd القدرة على تحديد المسارات باستخدام BRouter وتكوين ملفات تعريف التوجيه لتحديد المسار بشكل أفضل وفقًا لاحتياجاتك.

لمزيد من المعلومات، يمكنك زيارة [موقع Brouter الرسمي](http://www.brouter.de/brouter/algorithm.html).

تغير تكامل BRouter في OsmAnd كثيرًا خلال صيف عام ٢٠١٩. يفترض هذا الدليل أنك تستخدم تطبيق BRouter لنظام أندرويد في الإصدار ١.٥.٠ أو أعلى بالإضافة إلى OsmAnd في الإصدار ٣.٤ أو أعلى.

:::note
خوارزمية التوجيه BRouter التابعة لجهة خارجية متاحة فقط لإصدار أندرويد من تطبيق OsmAnd.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## كيفية الإعداد {#how-to-configure}

اتبع هذا الدليل لتثبيت وتكوين تطبيق *BRouter Offline Navigation* التابع لجهة خارجية للاستخدام في OsmAnd.

**١.** للبدء، تحتاج إلى تثبيت تطبيق BRouter على جهاز أندرويد الخاص بك من [F-Droid](https://f-droid.org/packages/btools.routingapp) أو [متجر Google Play](https://play.google.com/store/apps/details?id=btools.routingapp) على جهازك.
**٢.** بعد ذلك، للتنقل باستخدام تطبيق OsmAnd على طول المسارات المحسوبة مسبقًا باستخدام BRouter، تحتاج إلى:


  - افتح تطبيق BRouter وانقر على *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - قم بالتكبير وحدد المناطق التي تريد التوجيه فيها. ثم انقر فوق "Start Download" وسيبدأ BRouter في تنزيل ملفات [القطاعات](http://brouter.de/brouter/segments4/) للمناطق المحددة.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**ملاحظة** أنه سيتعين عليك تكرار هذه الخطوة بشكل دوري، كلما أردت الحصول على نسخة محدثة من بيانات OSM المستخدمة في التوجيه.

**٣.** بمجرد الانتهاء من ذلك، ابدأ تشغيل تطبيق BRouter مرة أخرى واختر إدخال "BRouter App" في *القائمة الرئيسية*. اختر ملف تعريف توجيه حسب وضع سفرك. يمكن أن يكون ركوب الدراجات أو الدراجة البخارية أو المشي لمسافات طويلة أو الرحلات. يمكن العثور على قائمة بالملفات الشخصية المتاحة للتنزيل بتنسيق *brf* [هنا](http://brouter.de/brouter/profiles2/). أو يمكنك محاولة استخدام ملف تعريف التوجيه في [BRouter-online](http://brouter.de/brouter-web/).
انقر فوق "Service-Mode". بعد ذلك، حدد مربعات أوضاع التوجيه التي تريد استخدام هذا الملف الشخصي لها. يمكنك استخدام ملفين شخصيين مختلفين لكل وضع نقل، والتي سيتم تعيينها إلى الإعدادات المسبقة "الأقصر" و "الأسرع" (هذه مجرد تسميات) في OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**٤.** إذا كنت قد قمت بالفعل بتحميل أي قطاعات مسبقًا، فسيتم عرضها على خريطة BRouter. للقطاعات أربع حالات:

- مربع *"أخضر"* - تم تحديد قطاع جديد للتنزيل.
- مربع *"أزرق"* - القطاع ببيانات محدثة.
- مربع *"رمادي"* - تم تنزيل القطاع بالفعل ولكنه يتطلب تحديثًا.
- مربع *"أصفر"* - يتم تحديث القطاع.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**٥.** عندما تقوم بتحميل قطاعات الخريطة المطلوبة باستخدام BRouter وتحديد ملف تعريف توجيه فيه، يتم إجراء جميع الإعدادات التالية لهذا النوع من الملاحة في تطبيق OsmAnd.

**٦.** يمكنك إنشاء "ملف تعريف تطبيق" في OsmAnd والذي سيستخدم BRouter للتوجيه دون اتصال بالإنترنت.
استخدم نوع التوجيه *BRouter (offline)* مع أي [ملف تعريف](../../personal/profiles.md) في تطبيق OsmAnd. للقيام بذلك، انتقل إلى *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* وقم بإنشاء ملف تعريف جديد بناءً على ملف التعريف الأساسي الذي تختاره (ركوب الدراجات هنا، لتوجيه الدراجات)، باسم مخصص من اختيارك ("BRouter" في لقطة الشاشة أدناه) واستخدام "BRouter (offline)" للملاحة.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

يجب تشغيل تطبيق BRouter قبل OsmAnd حتى يظهر هذا الإدخال المحدد في OsmAnd. لذلك، إذا لم تتمكن من العثور على خيار الملاحة "BRouter (offline)"، فيجب عليك فرض إغلاق OsmAnd وإعادة تشغيله.

## إصدار OsmAnd 4.7.1 {#osmand-version-471}

بدءًا من الإصدار ٤.٧.١ وما فوق، يدعم OsmAnd معلمة ملف التعريف للتعيين: منذ إصدار OsmAnd ٣، يمكن تحديد العديد من ملفات التعريف في OsmAnd ويمكنك التبديل بسهولة بين هذه الملفات. يجب إنشاء ملف تعريف جديد، على سبيل المثال عن طريق نسخ ملف تعريف *ركوب الدراجات* الحالي وإعطائه اسمًا جديدًا بالتنسيق Brouter[fastbike]. يمكنك استخدام أي من ملفات تعريف BRouter الموجودة في الاسم والمثبتة على جهازك. جميع ملفات التعريف لها تنسيق تسمية 'xxxxxxx.brf'. أو يمكنك إنشاء ملف تعريف جديد خاص بك، مثل 'myprofile.brf'.

تعد اتفاقية التسمية في ملف تعريف OsmAnd مهمة لأن ملف تعريف BRouter المضمن في هذا الملف ينشئ الجسر الفعلي بين OsmAnd و BRouter.

- إذا تم تحديد *BRouter* في OsmAnd كخدمة ملاحة لملف تعريف
- وكان اسم ملف التعريف يبدو مثل "Brouter[mystring]"

عندها سيتم استخدام ملف التعريف "mystring" في تطبيق Brouter. يحل هذا التعيين الجديد في هذه الحالة محل التعيين الأساسي المحدد أعلاه والمستند إلى الملف "serviceconfig.dat".

### أمثلة: اسم ملف تعريف Osmand - تطبيق Brouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] "trekking" profile will be used file: trekking.brf
Brouter[fastbike] "fastbike" profile will be used file: fastbike.brf
....
```

ملاحظة:
حاليًا لا يتحقق Osmand من الاسم المحدد (حساس لحالة الأحرف) لملف تعريف Brouter (mystring).
إذا لم يتم العثور على ملف تعريف، فسيفشل التوجيه مع رسالة "تعذر حساب المسار..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## كيفية الاستخدام {#how-to-use}

يصف هذا القسم مقارنة بين BRouter والتوجيه الداخلي لتطبيق OsmAnd.

عند تكوين BRouter، يمكننا مقارنة سرعة الحساب المسبق لبيانات توجيه BRouter مع التوجيه الداخلي لـ OsmAnd. لنختر نقطتين عشوائيتين في هولندا ونبدأ في حساب الرحلة. لهذا، قمنا بتعيين أسلوب قيادة متوازن دون استخدام بيانات الارتفاع لملف التعريف الأساسي. وقت حساب هذه الرحلة هو ١٤.٥ ثانية لمسار OsmAnd الداخلي الخاص بنا. وقت حساب المسار عند استخدام توجيه BRouter أقل من ثانية واحدة.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## معلمات المسار {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*  

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | في معظم الحالات، سيتم اقتراح أقصر طريق. غالبًا ما يستغرق هذا الطريق وقتًا أطول مما لو تم تعطيل الإعداد |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  اقرأ عن خيار مراعاة القيود المؤقتة في هذا [المقال](../routing/osmand-routing.md#consider-temporary-limitations).   | تأخذ خوارزمية التوجيه في الاعتبار القيود الزمنية المحددة في OpenStreetMap. لاحظ أنه في بعض الحالات قد تكون المعلومات من OSM قديمة.   |


### إعدادات التوجيه الأخرى {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*الملاحة ← الإعدادات*، [صورة](../routing/online-routing.md#online-routing-setting)). إذا تم تمكين هذا الخيار، يضيف OsmAnd جزأين إلى مسار Brouter المحسوب: أحدهما من *[موقعي](../../map/interact-with-map.md#my-location-and-zoom)* إلى نقطة بداية المسار والآخر من نهاية المسار إلى نقطة نهاية مسارك. يكون هذا الخيار نشطًا إذا تجاوزت المسافة إلى المسار أو منه ٦٠ مترًا.

- في قسم [*إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وضبط خيارات إعادة حساب المسار.

- في [*قسم التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة لا تزال في مرحلة الاختبار. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [ملحق تطوير OsmAnd](../../plugins/development.md).