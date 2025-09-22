---
source-hash: 1cb08bcd8ee7ef526cb41a67a59668e7c8cf614ee888f222e7e39337a0e136c1
sidebar_position: 8
title:  توجيه القوارب
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## نظرة عامة {#overview}

يمكن أن يكون توجيه القوارب أداة قيمة لأي شخص يستمتع بركوب القوارب أو الإبحار عبر القنوات أو الأنهار أو الممرات الملاحية. نظرًا لعدم وجود معظم الممرات الملاحية في بيانات OpenStreeetMap، فإن توجيه القوارب *غير موصى به* **للملاحة في المياه المفتوحة**، ويُقترح استخدام **[التوجيه المباشر إلى نقطة](#direct-to-point-routing-for-boat)** بدلاً من ذلك. مع تمكين خطوط الأعماق، يمكن أن يساعدك ذلك على البقاء آمنًا على الماء عن طريق تجنب المخاطر مثل المياه الضحلة أو الصخور أو العوائق الأخرى.
يأخذ محرك توجيه القوارب في OsmAnd أيضًا في الاعتبار خصائص الممرات المائية والقوارب نفسها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![شاشة ملاحة القوارب على أندرويد](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![شاشة ملاحة القوارب على iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## معلمات المسار - القارب {#route-parameters---boat}

:::note
بشكل افتراضي، يكون *ملف تعريف القارب* غير نشط. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

يمكن تكوين توجيه القوارب وفقًا لاحتياجاتك في قسم [معلمات المسار](../../navigation/guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة.

عادةً، يُستخدم *توجيه القوارب* مع ملف تعريف القارب (آخر ملف تم تمكينه مع [ملحق الخرائط البحرية](../../plugins/nautical-charts.md)). ومع ذلك، من الممكن استخدام توجيه القوارب مع ملفات تعريف أخرى أيضًا، ويمكن أيضًا استخدام [أنواع توجيه مختلفة](#other-routing-types-for-boat) في ملف تعريف القارب.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">


![إعدادات توجيه القوارب على أندرويد](@site/static/img/navigation/routing/boat_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه القوارب على iOS](@site/static/img/navigation/routing/boat_routing_ios.png)  

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | يسمح لك باستخدام الجداول والمصارف لملاحة القوارب. قد يكون تمكين هذا الخيار مفيدًا للقوارب الصغيرة مثل الزوارق، الكاياك، الطوافات، وقوارب التجديف. | [الجداول](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) هي مجاري مائية طبيعية التكوين وضيقة جدًا بحيث لا يمكن تسميتها نهرًا. [المصارف](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) هي مجاري مائية اصطناعية، عادة ما تكون مبطنة بالخرسانة أو ما شابه، وتستخدم لنقل المياه الزائدة مثل مياه الأمطار أو الصرف الرمادي. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | يتيح لك تشغيل هذا الخيار استخدام الممرات المائية المتقطعة للملاحة بالقارب. | تُستخدم علامة [متقطع](https://wiki.openstreetmap.org/wiki/Key:intermittent) للإشارة إلى أن الممر المائي لا يحتوي على ماء بشكل دائم. |


:::note الملاحة المائية والقيود

١. تم تصميم ملف تعريف القارب للتوجيه على طول الأنهار والبحيرات والممرات المائية الأخرى. وهو يدعم علامات OSM مثل:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`، إلخ.

٢. ملف تعريف القارب **لا يدعم مسارات العبّارات (`route=ferry`)**. هذا يعني أن مسارات العبّارات، حتى لو كانت موجودة على الخريطة، **لن تُستخدم** عند حساب مسارات القوارب.

٣. لاتباع خط عبّارة يدويًا:

    - استخدم أداة [تخطيط مسار](../../plan-route/create-route.md) وضع نقاط الطريق يدويًا.
    - استخدم ملف تعريف السيارة، الذي يدعم مسارات العبّارات.

:::

## أنواع التوجيه الأخرى للقارب {#other-routing-types-for-boat}

نوع [توجيه القوارب](#route-parameters---boat) هو خوارزمية التوجيه الافتراضية لملف تعريف القارب. على الرغم من أنه يمكنك اختيار نوع توجيه آخر، والذي يكون مناسبًا أيضًا لملاحة القوارب:

 - [التوجيه المباشر إلى نقطة للقارب](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [التوجيه في خط مستقيم للقارب](./boat-navigation.md#straight-line-routing-for-boat)

من المهم ملاحظة أن أنواع التوجيه *المباشر إلى نقطة* و*الخط المستقيم* يجب استخدامها فقط في المياه المفتوحة حيث لا توجد عوائق أو مخاطر للملاحة. إذا كنت تبحر في ممر مائي بقناة أو مسار محدد، فيجب عليك استخدام نوع توجيه القوارب في OsmAnd، والذي سيرشدك عبر القنوات الملاحية الصحيحة ويتجنب المناطق الضحلة أو المخاطر الأخرى.

يمكن تفعيل أنواع التوجيه هذه لملف تعريف القارب باستخدام المسار التالي: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> أو ملف آخر) ← <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### التوجيه المباشر إلى نقطة للقارب {#direct-to-point-routing-for-boat}

:::note
عند استخدام أنواع الملاحة "مباشر إلى نقطة" و"القارب"، ستحتاج إلى [بيانات خطوط الأعماق](../../plugins/nautical-charts.md#nautical-map-style)، والتي يمكن تمكينها وتعيينها في *تكوين الخريطة*.
:::

يمكن استخدام [نوع التوجيه المباشر إلى نقطة](./direct-to-point-routing.md) مع ملف تعريف القارب عندما تريد الإبحار بقاربك في المياه المفتوحة دون اتباع أي مسار أو ممر مائي محدد. يتيح لك نوع التوجيه هذا تعيين نقطة وجهة وسيقوم OsmAnd بحساب مسار مباشر إلى تلك النقطة من موقعك الحالي. لا يأخذ هذا النوع من التوجيه في الاعتبار خصائص قاربك مثل السرعات الدنيا والقصوى والارتفاع والعرض. لن يتم إعادة حساب مسارك في حالة الانحراف.

![نوع الملاحة المباشر إلى نقطة على أندرويد](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### التوجيه في خط مستقيم للقارب {#straight-line-routing-for-boat}

يمكن استخدام [نوع التوجيه في خط مستقيم](./straight-line-routing) مع ملف تعريف القارب عندما تريد الإبحار بقاربك في المياه المفتوحة ولكنك تفضل اتباع خط مستقيم بدلاً من مسار منحني إلى نقطة وجهتك. يمكن أن يكون هذا مفيدًا عند الإبحار إلى نقطة بعيدة، تكون مرئية في الأفق، على سبيل المثال.

![نوع الملاحة في خط مستقيم على أندرويد](@site/static/img/navigation/boat/straight_navigation_type_android.png)