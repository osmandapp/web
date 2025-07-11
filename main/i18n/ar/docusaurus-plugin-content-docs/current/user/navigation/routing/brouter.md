---
source-hash: 7669ebc684d82d59a895a98d5dc83c05fad8cf9113b076ddb5dd9660c461ce5e
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

:::caution ANDROID ONLY
خوارزمية التوجيه BRouter التابعة لجهة خارجية متاحة فقط لإصدار Android من تطبيق OsmAnd.
:::

*BRouter* هي خوارزمية توجيه تابعة لجهة خارجية يمكن استخدامها في تطبيق OsmAnd [لوضع التنقل دون اتصال بالإنترنت](../guidance/navigation-settings.md#navigation-type). وهي مصممة لتحسين المسار بناءً على معايير مختلفة، مثل الوقت أو المسافة أو نوع المركبة.

يستخدم [BRouter](http://brouter.de/) بيانات OpenStreetMap لإنشاء مسار ثم يقوم بتعديله بناءً على المعلمات المحددة. ويستخدم مسارات محسوبة مسبقًا لإنشاء مسار بسرعة دون اتصال بالإنترنت. كما يتيح لك تخصيص ملفات تعريف التوجيه، والتي يتم تعريفها بواسطة مجموعة من المعلمات لمراعاة العوامل المختلفة في اختيار المسار. يشرح ملف [BRouter readme.txt](http://brouter.de/brouter/readme.txt) بمزيد من التفصيل كيفية تثبيت البرنامج واستخدامه.

يوفر لك OsmAnd القدرة على تحديد المسارات باستخدام BRouter وتكوين ملفات تعريف التوجيه لتحديد المسار بشكل أفضل وفقًا لاحتياجاتك.

لمزيد من المعلومات، يمكنك زيارة [الموقع الرسمي لـ BRouter](http://www.brouter.de/brouter/algorithm.html).

تغير تكامل BRouter في OsmAnd كثيرًا خلال صيف 2019. يفترض هذا الدليل أنك تستخدم تطبيق BRouter Android في الإصدار 1.5.0 أو أعلى بالإضافة إلى OsmAnd في الإصدار 3.4 أو أعلى.

:::note
خوارزمية التوجيه BRouter التابعة لجهة خارجية متاحة فقط لإصدار Android من تطبيق OsmAnd.
:::


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## كيفية التكوين {#how-to-configure}

اتبع هذا الدليل لتثبيت وتكوين تطبيق *BRouter Offline Navigation* التابع لجهة خارجية للاستخدام في OsmAnd.

**1.** للبدء، تحتاج إلى تثبيت تطبيق BRouter على جهاز Android الخاص بك من [F-Droid](https://f-droid.org/packages/btools.routingapp) أو [متجر Google Play](https://play.google.com/store/apps/details?id=btools.routingapp) على جهازك.
**2.** ثم، للتنقل باستخدام تطبيق OsmAnd على طول المسارات المحسوبة مسبقًا باستخدام BRouter، تحتاج إلى:


  - افتح تطبيق BRouter وانقر على *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - قم بالتكبير وتحديد المناطق التي تريد التوجيه فيها. ثم انقر على "Start Download" وسيبدأ BRouter في تنزيل ملفات [القطاعات](http://brouter.de/brouter/segments4/) للمناطق المحددة.

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

**ملاحظة** أنه سيتعين عليك تكرار هذه الخطوة بشكل دوري، كلما أردت الحصول على نسخة محدثة من بيانات OSM المستخدمة للتوجيه.

**3.** بمجرد الانتهاء من ذلك، ابدأ تطبيق BRouter مرة أخرى واختر إدخال "BRouter App" في *القائمة الرئيسية*. اختر ملف تعريف توجيهي حسب وضع سفرك. يمكن أن يكون ركوب الدراجات، الدراجات النارية، المشي لمسافات طويلة، أو الرحلات. يمكن العثور على قائمة بالملفات التعريفية المتاحة للتنزيل بتنسيق *brf* [هنا](http://brouter.de/brouter/profiles2/). أو يمكنك محاولة استخدام ملف تعريف التوجيه في [BRouter-online](http://brouter.de/brouter-web/).
انقر على "Service-Mode". ثم، ضع علامة في المربعات لوضعيات التوجيه التي تريد استخدام هذا الملف التعريفي لها. يمكنك استخدام ملفين تعريفيين مختلفين لكل وضع نقل، والتي سيتم تعيينها إلى الإعدادات المسبقة "الأقصر" و "الأسرع" (هذه مجرد تسميات) في OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** إذا كنت قد قمت بتحميل أي قطاعات مسبقًا، فسيتم عرضها على خريطة BRouter. تحتوي القطاعات على أربع حالات:

- مربع *"أخضر"* - قطاع جديد محدد للتنزيل.
- مربع *"أزرق"* - القطاع ببيانات محدثة.
- مربع *"رمادي"* - القطاع تم تنزيله بالفعل ولكنه يتطلب تحديثًا.
- مربع *"أصفر"* - القطاع قيد التحديث.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** عندما تقوم بتحميل قطاعات الخريطة المطلوبة باستخدام BRouter وتحديد ملف تعريف توجيهي فيه، يتم إجراء جميع الإعدادات التالية لهذا النوع من التنقل في تطبيق OsmAnd.

**6.** يمكنك إنشاء "ملف تعريف تطبيق" في OsmAnd والذي سيستخدم BRouter للتوجيه دون اتصال بالإنترنت.
استخدم نوع التوجيه *BRouter (دون اتصال)* مع أي [ملف تعريف](../../personal/profiles.md) في تطبيق OsmAnd. للقيام بذلك، انتقل إلى *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* الرئيسي وقم بإنشاء ملف تعريف جديد بناءً على الملف التعريفي الأساسي الذي تختاره (ركوب الدراجات هنا، لتوجيه الدراجات)، باسم مخصص من اختيارك ("BRouter" في لقطة الشاشة أدناه) واستخدام "BRouter (دون اتصال)" للتنقل.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

يجب تشغيل تطبيق BRouter قبل OsmAnd لكي يظهر هذا الإدخال المحدد في OsmAnd. لذلك، إذا لم تتمكن من العثور على خيار التنقل "BRouter (دون اتصال)"، فيجب عليك إغلاق OsmAnd بالقوة وإعادة تشغيله.

## إصدار OsmAnd 4.7.1 {#osmand-version-471}

من الإصدار 4.7.1 فصاعدًا، يدعم Osmand معلمة الملف الشخصي للتعيين: منذ الإصدار 3 من Osmand، يمكن تعريف العديد من الملفات الشخصية في Osmand ويمكنك التبديل بسهولة بين هذه الملفات الشخصية. يجب إنشاء ملف شخصي جديد، على سبيل المثال عن طريق نسخ ملف تعريف *Cycling* الحالي وإعطائه اسمًا جديدًا بتنسيق Brouter[fastbike]. يمكنك استخدام أي من ملفات تعريف BRouter الموجودة في الاسم المثبتة على جهازك. جميع ملفات التعريف لها تنسيق تسمية 'xxxxxxx.brf'. أو يمكنك إنشاء ملف شخصي جديد خاص بك، مثل 'myprofile.brf'.

تعد اتفاقية التسمية في ملف تعريف OsmAnd مهمة حيث أن ملف تعريف BRouter المضمن في هذا الملف الشخصي ينشئ الجسر الفعلي بين OsmAnd و BRouter.

- إذا كان في Osmand ملف تعريف "BRouter" معرفًا كخدمة تنقل
- وكان اسم الملف الشخصي يبدو كـ "Brouter[mystring]"

فإن الملف الشخصي "mystring" سيتم استخدامه في تطبيق Brouter. هذا التعيين الجديد يحل محل في هذه الحالة التعيين الأساسي المحدد أعلاه والمبني على ملف "serviceconfig.dat".

### أمثلة: اسم ملف تعريف Osmand - تطبيق Brouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] سيتم استخدام ملف تعريف "trekking": trekking.brf
Brouter[fastbike] سيتم استخدام ملف تعريف "fastbike": fastbike.brf
....
```

ملاحظة:
حاليًا، لا يتحقق Osmand من الاسم المحدد (حساس لحالة الأحرف) لملف تعريف Brouter (mystring).
إذا لم يتم العثور على ملف تعريف، فسيفشل التوجيه مع "تعذر حساب المسار..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## كيفية الاستخدام {#how-to-use}

يصف هذا القسم مقارنة بين BRouter والتوجيه الداخلي لتطبيق OsmAnd.

عند تكوين BRouter، يمكننا مقارنة سرعة الحساب المسبق لبيانات توجيه BRouter مع التوجيه الداخلي لـ OsmAnd. دعنا نختار نقطتين عشوائيتين في هولندا ونبدأ في حساب الرحلة. لهذا، قمنا بتعيين أسلوب قيادة متوازن دون استخدام بيانات الارتفاع للملف الشخصي الأساسي. وقت الحساب لهذه الرحلة هو 14.5 ثانية لمسار OsmAnd الداخلي الخاص بنا. وقت حساب المسار عند استخدام توجيه BRouter أقل من ثانية واحدة.

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
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | في معظم الحالات، سيتم اقتراح أقصر مسار. غالبًا ما يستغرق هذا المسار وقتًا أطول مما لو تم تعطيل الإعداد |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | اقرأ عن خيار "القيود المؤقتة" في هذه [المقالة](../routing/osmand-routing.md#consider-temporary-limitations). | تأخذ خوارزمية التوجيه في الاعتبار القيود الزمنية المحددة في OpenStreetMap. لاحظ أنه في بعض الحالات قد تكون المعلومات من OSM قديمة. |


### إعدادات التوجيه الأخرى {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*التنقل ← الإعدادات*، [صورة](../routing/online-routing.md#online-routing-setting)). إذا تم تمكين هذا الخيار، يضيف OsmAnd قطعتين إلى مسار Brouter المحسوب: واحدة من *[موقعي](../../map/interact-with-map.md#my-location-and-zoom)* إلى نقطة بداية المسار والأخرى من نهاية المسار إلى نقطة نهاية مسارك. يكون هذا الخيار نشطًا إذا تجاوزت المسافة إلى أو من المسار 60 مترًا.

- في قسم [*إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في قسم [*التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [المكون الإضافي لتطوير OsmAnd](../../plugins/development.md).

> *آخر تحديث: يونيو 2024*