---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title:  التنقل حسب المسار
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

يتيح لك خيار *التنقل حسب المسار* (GPX) تتبع مسار أو طريق محدد مسبقًا على الخريطة. يمكن أن يكون مفيدًا بشكل خاص للأنشطة الخارجية مثل المشي لمسافات طويلة، وركوب الدراجات، أو القيادة على الطرق الوعرة، حيث يحسن وجود مسار مخطط له السلامة والكفاءة. إذا كنت تسافر في مجموعة منظمة، فإن هذه الميزة تساعدك أنت وكل عضو في المجموعة على الحصول على نفس معلومات المسار مثل الآخرين.

يمكن استخدام خيار *التنقل حسب المسار* أيضًا في الحياة اليومية. يمكنك استخدام [مسار مسجل](../../plugins/trip-recording.md) مسبقًا أو [إنشاء مسار](../../personal/tracks/manage-tracks.md#create-a-track) ومشاركته مع عائلتك أو أصدقائك بدلاً من شرح المسار لهم. يمكنك أيضًا استخدام [المسارات على خريطة OsmAnd](../../../../blog/routes/) للتنقل. كيفية تمييزها على الخريطة وما تعنيه ألوانها موضح في قسم [المسارات](../../map/vector-maps.md#routes) من مقال *خرائط المتجهات*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![شاشة التنقل حسب المسار أندرويد](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة التنقل حسب المسار iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## تحديد المسار {#select-the-track}

قبل استخدام خيار *التنقل حسب المسار*، تحتاج إلى [عرض المسار على الخريطة](../../map/tracks/index.md#display-tracks-on-the-map). يدعم OsmAnd المسار كخط (**Geometry**) والمسار كطريق (**Route**) أو مزيج منهما (**OsmAnd** بواسطة [تخطيط المسار](../../plan-route/create-route.md)). إذا كان لديك مسار كمجموعة **نقاط طريق**، يمكنك استخدام [التنقل بالعلامات](./markers-navigation.md).


- سيكون للمسار **Geometry** تنقل أساسي جدًا افتراضيًا ولن يوفر منعطفات دقيقة، أسماء شوارع ومسارات انعطاف. للحصول على المعلومات المفقودة، تحتاج إلى استخدام أداة [إرفاق بالطرق](#attach-to-the-roads).

- سيقوم المسار **Route** بحساب المسار بين نقاط المسار حسب الملف الشخصي المحدد. بشكل أساسي، ستعتبر جميع نقاط المسار نقاطًا وسيطة. إذا كان مسارك يتكون من > 50 نقطة، فمن المحتمل جدًا أنه مسار **Geometry** غير مهيأ بشكل صحيح.

- يتكون مسار **OsmAnd** من أجزاء هندسية ومسارية، وهو مناسب لتوفير نفس التوجيه تمامًا مثل التنقل افتراضيًا. يتم إنتاج هذه المسارات بواسطة [تخطيط المسار](../../plan-route/create-route.md) أو [إصدار الويب](../../web/index.md). من الممكن إعادة حفظ هذا المسار إلى مسار **Geometry** فقط كـ [**مبسط**](../../plan-route/create-route.md#save-route) لاستخدامه في برامج الطرف الثالث.


### بدء التنقل بملف GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![تحديد المسار للتنقل أندرويد 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![تحديد المسار للتنقل أندرويد 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحديد المسار للتنقل iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![تحديد المسار للتنقل iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

يمكن بدء التنقل على مسار باستخدام زر الإجراء السريع في [قائمة سياق المسار](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (التي تفتح عن طريق تحديد أحد [المسارات المميزة](./route-navigation.md#history-of-previous-routes) على الخريطة، أو عن طريق النقر على ملف مسار في قسم [أماكني](../../personal/myplaces.md) من *القائمة الرئيسية*) أو من قائمة التنقل، التي تفتح عن طريق النقر على:

- [*زر التنقل*](../../widgets/map-buttons.md#directions) على شاشة الخريطة.
- *قسم التنقل* في *القائمة الرئيسية* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- في [*قائمة التنقل*](./route-navigation.md#navigation-menu) انتقل إلى *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### اختيار المقاطع {#choose-segments}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![مقاطع أندرويد](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مقاطع iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

للتنقل، إذا كان المسار المحدد يتكون من مقاطع أو مسارات متعددة، يمكنك تحديد مقطع معين أو ملف مسار GPX بالكامل. عند **[الاستيراد](../../personal/tracks/manage-tracks.md#import)**، يمكنك اختيار ما إذا كنت تريد حفظه في ملف واحد أو في ملفات متعددة.


### خيارات تتبع المسار {#follow-track-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![شاشة التنقل حسب المسار أندرويد](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![شاشة التنقل حسب المسار iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **تعديل** (*أيقونة القلم الرصاص* بجانب اسم المسار) — يفتح المسار في أداة [*تخطيط مسار*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — حدد ملف GPX مختلفًا للتنقل.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — إذا تم تمكين هذا الإعداد، يتم عكس اتجاه الحركة على طول المسار.
- **<Translate android="true" ids="attach_to_the_roads"/>** — يقوم بتكوين [إرفاق مسار بالطرق](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*أندرويد*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — يمكنك تحديد كيفية التنقل من موقعي إلى المسار:
إلى *<Translate android="true" ids="start_of_the_track"/>* أو إلى *<Translate android="true" ids="nearest_point"/>* على المسار.
- اختر **نوع التنقل** للمقطع الأول والأخير: إما بناء [*خط مستقيم*](../routing/straight-line-routing.md) أو استخدام [*نوع التوجيه*](../routing/osmand-routing.md#routing-types) من الملف الشخصي الحالي.


### الإرفاق بالطرق {#attach-to-the-roads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![الإرفاق بالطرق 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الإرفاق بالطرق 1 iOS](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

تقوم ميزة **الإرفاق بالطرق** بمحاذاة مسارك مع أقرب طريق لتجربة تنقل أكثر دقة. تتوفر هذه الميزة في قائمة [تتبع المسار](#follow-track-options)، وتضمن أن مسارك يتبع شبكة الطرق المناسبة بناءً على *ملف التنقل* المحدد و**مسافة العتبة**. يعزز هذا كلاً من [تفاصيل المسار](../setup/route-details.md) و[التعليمات الصوتية](#guidance) أثناء التنقل.

***كيف تعمل:***

- يطابق OsmAnd كل نقطة مسار مع **أقرب طريق** ضمن **مسافة العتبة** المحددة (الافتراضي: **50 مترًا**).
- تحدد **مسافة العتبة** أقصى مسافة مسموح بها بين نقطة مسار GPS وطريق للارتباط.
- **إعادة الارتباط التلقائي** — عند تبديل **ملفات التنقل**، يقوم OsmAnd تلقائيًا بإعادة ربط المسار بالطرق المناسبة للملف الشخصي الجديد.
- بالنسبة للمسارات الكبيرة التي تحتوي على العديد من النقاط، قد تستغرق عملية الارتباط وقتًا أطول قليلاً. سترى **مؤشر تقدم** (*خط حالة برتقالي*) يوضح حالة الارتباط.
- بعد اكتمال الارتباط، انقر على **تطبيق** لاستخدام المسار المعدل للتنقل.

#### الإرفاق التلقائي بالطرق {#automatic-attachment-to-the-roads}

يقوم OsmAnd تلقائيًا بربط المسارات بالطرق عند استخدام أداة **تخطيط مسار**:

- تتوافق **نقاط الطريق** تلقائيًا مع أقرب طريق متاح (*باستثناء [التوجيه بالخط المستقيم](../../navigation/routing/straight-line-routing.md) و[التوجيه المباشر إلى نقطة](../../navigation/routing/direct-to-point-routing.md)*).
- إذا لم يتم اكتشاف طرق (على سبيل المثال، في بيئات الطرق الوعرة)، فسيتبع المسار **مقاطع خط مستقيم**.
- يمكنك **تعديل** المسار يدويًا عن طريق سحب نقاط الطريق إلى مواقع مختلفة.

بشكل افتراضي، تعمل ميزة **الإرفاق بالطرق** **تلقائيًا** عند تحديد مسار للتنقل. يمكنك تغيير هذا الإعداد حسب الحاجة. لمزيد من التفاصيل، راجع [إرشادات المسار التفصيلية](../guidance/navigation-settings.md#detailed-track-guidance) في مقال *إعدادات التنقل*.


## النقاط {#points}

### نقطة البداية / النهاية {#start--finish-point}

يمكنك تحديد نقطة البداية والنهاية لمسار بخلاف نقطة البداية/النهاية المحددة في ملف GPX. ما عليك سوى تغييرها بنفس الطريقة التي تفعلها [للتنقل](../setup/route-navigation.md#select-starting-point).

في [قائمة تتبع المسار](#follow-track-options)، يمكنك اختيار ما إذا كنت تريد التنقل من موقعك الحالي إلى نقطة بداية المسار أو إلى أقرب نقطة على مسار GPX. كما يمكنك اختيار [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) الذي سيتم استخدامه للمقطع الأول والأخير من مسارك.

### نقاط الطريق {#waypoints}

إذا كان المسار يحتوي على نقاط طريق، يمكنك استخدام [إظهار على طول المسار](../guidance/map-during-navigation.md#show-points-along-the-route) و[التوجيه الصوتي](../guidance/voice-navigation.md#voice-settings) لتلقي إشعارات حول نقاط الاهتمام. يمكنك إضافة **نقاط طريق** إلى مسار موجود عبر [قائمة السياق](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)، يجب أن يكون المسار مرئيًا على الخريطة.

### النقاط الوسيطة {#intermediate-points}

عند إعداد أو التنقل في مسار GPX، لا يمكنك إضافة أماكن وسيطة تخطط للقيادة عبرها ضمن هذا المسار. يمكنك فقط تعيين نقاط بداية ونهاية بالإضافة إلى المسار أو المقطع الذي تخطط لتتبعه.

## التوجيه {#guidance}

يحتوي *التنقل بمسار GPX* على نفس [التعليمات الصوتية](../guidance/voice-navigation.md) مثل التنقل بالمسار. ومع ذلك، قد لا يتم تفسير بعض المنعطفات أو الدوارات بشكل صحيح لأنه لا توجد معلومات حول تقاطعات الطرق في GPX، باستثناء ملفات GPX التي أنشأها OsmAnd. للتخلص من هذه المشاكل، يجب استخدام ميزة [الإرفاق بالطرق](#attach-to-the-roads).

أثناء التنقل، يمكنك استخدام خيارات متنوعة مثل التكبير أو التصغير، أو تحريك الخريطة، أو التبديل إلى نمط خريطة مختلف. إذا انحرفت عن المسار، سيقوم OsmAnd تلقائيًا بإعادة حساب المسار لإعادتك إلى المسار الصحيح. يمكنك أيضًا ضبط سرعة المسار وتعيين تنبيهات مسموعة لنقاط الاقتراب أو الانحرافات عن المسار.


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](./route-navigation.md)
- [تفاصيل المسار](./route-details.md)
- [التنقل بالعلامات](./markers-navigation.md)
- [إعدادات التنقل](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء التنقل](../guidance/map-during-navigation.md)
- [التوجيهات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: أبريل 2025*