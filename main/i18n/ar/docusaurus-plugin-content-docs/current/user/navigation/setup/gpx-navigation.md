---
source-hash: 41206f7aa105ab8fa59a5f824c1e0374750b7232835e5fadfb76637ff0469e77
sidebar_position: 2
title:  الملاحة حسب المسار
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## نظرة عامة {#overview}

يسمح لك خيار *الملاحة حسب المسار* (GPX) باتباع طريق أو مسار محدد مسبقًا على الخريطة. يمكن أن يكون مفيدًا بشكل خاص للأنشطة الخارجية مثل المشي لمسافات طويلة، أو ركوب الدراجات، أو القيادة على الطرق الوعرة، حيث يؤدي وجود مسار مخطط إلى تحسين السلامة والكفاءة. إذا كنت تسافر في مجموعة منظمة، فإن هذه الميزة تساعدك أنت وكل فرد في المجموعة على الحصول على نفس معلومات المسار مثل الآخرين.

يمكن أيضًا استخدام خيار *الملاحة حسب المسار* في الحياة اليومية. يمكنك استخدام [مسار مسجل](../../plugins/trip-recording.md) مسبقًا أو [إنشاء مسار](../../personal/tracks/manage-tracks.md#create-a-track) ومشاركته مع عائلتك أو أصدقائك بدلاً من شرح الطريق لهم. يمكنك أيضًا استخدام [المسارات على خريطة OsmAnd](../../../../blog/routes/) للملاحة. كيفية تمييزها على الخريطة وما تعنيه ألوانها موصوف في قسم [المسارات](../../map/vector-maps.md#routes) من مقالة *الخرائط المتجهة*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![شاشة الملاحة حسب المسار على أندرويد](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة الملاحة حسب المسار على iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## حدد المسار {#select-the-track}

قبل استخدام خيار *الملاحة حسب المسار*، تحتاج إلى [عرض المسار على الخريطة](../../map/tracks/index.md#display-tracks-on-the-map). يدعم OsmAnd المسار كخط (**هندسة**) والمسار كطريق (**طريق**) أو مزيج منهما (**OsmAnd** بواسطة [تخطيط المسار](../../plan-route/create-route.md)). إذا كان لديك مسار كمجموعة **نقاط الطريق**، فيمكنك استخدام [ملاحة العلامات](./markers-navigation.md).


- **مسار الهندسة (Geometry)** سيحتوي على ملاحة أساسية جدًا بشكل افتراضي ولن يوفر انعطافات دقيقة أو أسماء شوارع أو ممرات انعطاف. للحصول على المعلومات المفقودة، تحتاج إلى استخدام أداة [الربط بالطرق](#attach-to-the-roads).

- **مسار الطريق (Route)** سيحسب المسار بين نقاط المسار حسب الملف الشخصي المحدد. بشكل أساسي، سيتم اعتبار جميع نقاط المسار كنقاط وسيطة. إذا كان مسارك يتكون من أكثر من ٥٠ نقطة، فمن المحتمل جدًا أنه مسار **هندسي** تم تكوينه بشكل خاطئ.

- **مسار OsmAnd** يتكون من أجزاء هندسية ومسار، وهو مناسب لتقديم نفس الإرشادات تمامًا مثل الملاحة الافتراضية. يتم إنتاج هذه المسارات بواسطة [تخطيط المسار](../../plan-route/create-route.md) أو [إصدار الويب](../../web/index.md). من الممكن إعادة حفظ هذا المسار إلى مسار **هندسي** فقط كـ [**مبسط**](../../plan-route/create-route.md#save-route) ليتم استخدامه في برامج الجهات الخارجية.


### بدء ملاحة GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![تحديد مسار للملاحة على أندرويد 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![تحديد مسار للملاحة على أندرويد 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحديد مسار للملاحة على iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![تحديد مسار للملاحة على iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

يمكن بدء الملاحة على مسار باستخدام زر الإجراء السريع في [قائمة سياق المسار](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (يتم فتحها عن طريق تحديد أحد [المسارات المميزة](./route-navigation.md#history-of-previous-routes) على الخريطة، أو عن طريق النقر على ملف مسار في قسم [أماكني](../../personal/myplaces.md) من *القائمة الرئيسية*) أو من قائمة الملاحة، التي يتم فتحها عن طريق النقر على:

- [*زر الملاحة*](../../widgets/map-buttons.md#directions) على شاشة الخريطة.
- *قسم الملاحة* في *القائمة الرئيسية* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- في [*قائمة الملاحة*](./route-navigation.md#navigation-menu) انتقل إلى *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### اختر المقاطع {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![المقاطع على أندرويد](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المقاطع على iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

للملاحة، إذا كان المسار المحدد يتكون من عدة مقاطع أو مسارات، يمكنك تحديد إما مقطع معين أو ملف مسار GPX بأكمله. عند **[الاستيراد](../../personal/tracks/manage-tracks.md#import)** يمكنك اختيار ما إذا كنت تريد حفظه في ملف واحد أو في ملفات متعددة.


### خيارات تتبع المسار {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![شاشة الملاحة حسب المسار على أندرويد](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![شاشة الملاحة حسب المسار على iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **تعديل** (*أيقونة القلم* بجوار اسم المسار) — يفتح المسار في أداة [*تخطيط مسار*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — حدد ملف GPX مختلفًا للملاحة.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — إذا تم تمكين هذا الإعداد، يتم عكس اتجاه الحركة على طول المسار.
- **<Translate android="true" ids="attach_to_the_roads"/>** — يكوّن [ربط المسار بالطرق](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*أندرويد*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — يمكنك تحديد كيفية الملاحة من موقعي إلى المسار:
إلى *<Translate android="true" ids="start_of_the_track"/>* أو إلى *<Translate android="true" ids="nearest_point"/>* على المسار.
- اختر **نوع الملاحة** للمقطع الأول والأخير: إما بناء [*خط مستقيم*](../routing/straight-line-routing.md) أو استخدام [*نوع التوجيه*](../routing/osmand-routing.md#routing-types) من الملف الشخصي الحالي.


### الربط بالطرق {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![الربط بالطرق 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الربط بالطرق 1 على iOS](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

تعمل ميزة **الربط بالطرق** على محاذاة مسارك مع أقرب طريق لتجربة ملاحة أكثر دقة. تتوفر هذه الميزة في قائمة [تتبع المسار](#follow-track-options)، وتضمن أن يتبع مسارك شبكة الطرق المناسبة بناءً على *ملف تعريف الملاحة* المحدد و**مسافة العتبة**. وهذا يعزز كلاً من [تفاصيل المسار](../setup/route-details.md) و[التعليمات الصوتية](#guidance) أثناء الملاحة.

***كيف تعمل:***

- يطابق OsmAnd كل نقطة مسار مع **أقرب طريق** ضمن **مسافة العتبة** المحددة (الافتراضي: **٥٠ مترًا**).
- تحدد **مسافة العتبة** أقصى مسافة مسموح بها بين نقطة مسار GPS والطريق للربط.
- **إعادة الربط التلقائي** — عند تبديل **ملفات تعريف الملاحة**، يقوم OsmAnd تلقائيًا بإعادة ربط المسار بالطرق المناسبة للملف الشخصي الجديد.
- بالنسبة للمسارات الكبيرة التي تحتوي على العديد من النقاط، قد تستغرق عملية الربط وقتًا أطول قليلاً. سترى **مؤشر تقدم** (*شريط حالة برتقالي*) يوضح حالة الربط.
- بعد اكتمال الربط، انقر على **تطبيق** لاستخدام المسار المعدل للملاحة.

### الربط التلقائي بالطرق {#automatic-attachment-to-the-roads}

يقوم OsmAnd تلقائيًا بربط المسارات بالطرق عند استخدام أداة **تخطيط مسار**:

- تتم محاذاة **نقاط الطريق** تلقائيًا مع أقرب طريق متاح (*باستثناء [التوجيه بخط مستقيم](../../navigation/routing/straight-line-routing.md) و[التوجيه المباشر إلى النقطة](../../navigation/routing/direct-to-point-routing.md)*).
- إذا لم يتم الكشف عن أي طرق (على سبيل المثال، في بيئات الطرق الوعرة)، فسيتبع المسار **مقاطع خط مستقيم**.
- يمكنك **ضبط** المسار يدويًا عن طريق سحب نقاط الطريق إلى مواقع مختلفة.

بشكل افتراضي، تعمل ميزة **الربط بالطرق** **تلقائيًا** عند تحديد مسار للملاحة. يمكنك تغيير هذا الإعداد حسب الحاجة. لمزيد من التفاصيل، راجع [إرشادات المسار التفصيلية](../guidance/navigation-settings.md#detailed-track-guidance) في مقالة *إعدادات الملاحة*.


## النقاط {#points}

### نقطة البداية / النهاية {#start--finish-point}

يمكنك تحديد نقطة بداية ونهاية للمسار تختلف عن البداية/النهاية المحددة في ملف GPX. فقط قم بتغييرها بنفس الطريقة التي تفعلها في [الملاحة](../setup/route-navigation.md#select-start-point).

في [قائمة تتبع المسار](#follow-track-options)، يمكنك اختيار ما إذا كنت تريد الملاحة من موقعك الحالي إلى نقطة بداية المسار أو إلى أقرب نقطة على مسار GPX. أيضًا، يمكنك اختيار [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) الذي سيتم استخدامه لمقطع البداية والنهاية من مسارك.

### نقاط الطريق {#waypoints}

إذا كان المسار يحتوي على نقاط طريق، يمكنك استخدام [إظهار على طول المسار](../guidance/map-during-navigation.md#show-points-along-the-route) و[التوجيه الصوتي](../guidance/voice-navigation.md#voice-settings) للحصول على إشعارات حول نقاط الاهتمام. يمكنك إضافة **نقاط الطريق** إلى مسار موجود عبر [قائمة السياق](../../map/map-context-menu.md#-add--edit-track-waypoint)، ويجب أن يكون المسار مرئيًا على الخريطة.

### النقاط الوسيطة {#intermediate-points}

عند إعداد مسار GPX أو الملاحة به، لا يمكنك إضافة أماكن وسيطة تخطط للمرور بها داخل ذلك المسار. يمكنك فقط تعيين نقاط بداية ونهاية بالإضافة إلى المسار أو المقطع الذي تخطط لاتباعه.

## الإرشاد {#guidance}

تحتوي *الملاحة حسب مسار GPX* على نفس [التعليمات الصوتية](../guidance/voice-navigation.md) مثل ملاحة المسار. ومع ذلك، قد لا يتم تفسير بعض المنعطفات أو الدوارات بشكل صحيح لأنه لا توجد معلومات حول تقاطعات الطرق في GPX، باستثناء ملفات GPX التي تم إنشاؤها بواسطة OsmAnd. للتخلص من هذه المشاكل، يجب عليك استخدام ميزة [الربط بالطرق](#attach-to-the-roads).

أثناء الملاحة، يمكنك استخدام خيارات متنوعة مثل تكبير الخريطة أو تصغيرها، أو تحريكها، أو التبديل إلى نمط خريطة مختلف. إذا انحرفت عن المسار، سيقوم OsmAnd تلقائيًا بإعادة حساب المسار لإعادتك إلى المسار. يمكنك أيضًا ضبط سرعة المسار وتعيين تنبيهات صوتية للاقتراب من النقاط أو الانحرافات عن المسار.


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](./route-navigation.md)
- [تفاصيل المسار](./route-details.md)
- [الملاحة حسب العلامات](./markers-navigation.md)
- [إعدادات الملاحة](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md)
- [التوجيهات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)