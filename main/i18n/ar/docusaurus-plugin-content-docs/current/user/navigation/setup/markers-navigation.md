---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
sidebar_position: 3
title:  التنقل باستخدام العلامات
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

[علامات الخريطة](../../personal/markers.md) هي نقاط على الخريطة مميزة بالأعلام. يمكن استخدامها لمجموعة متنوعة من الأغراض، مثل الإشارة إلى موقع تريد زيارته، أو نقطة اهتمام تريد تذكرها، أو لإنشاء مسار مخصص.

يمكن أن تكون مفيدة بشكل خاص للمتنزهين، راكبي الدراجات، أو أي شخص يستكشف منطقة جديدة ويرغب في وضع علامات على مواقع أو نقاط مرجعية مثيرة للاهتمام على الخريطة. الفرق الرئيسي عن [نقاط المفضلة](../../personal/favorites.md)، العلامات أسرع في الإنشاء لأنها لا تتطلب اسمًا.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## استخدام العلامات في التنقل {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Difference marker navigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Difference marker navigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

يمكن أن تعمل *علامات الخريطة* كـ [وجهات](./route-navigation#set-destinations) أثناء بناء المسار. وهي مريحة بشكل خاص عندما تحتاج إلى تعيين مسار بنقاط وسيطة.

ومع ذلك، توفر *علامات الخريطة* أيضًا وظائف متنوعة مثل [الأدوات](../../widgets/markers.md)، واتجاهات الحركة، والخطوط على الخريطة، بحيث يمكنك استخدام هذه الأدوات للتنقل دون بناء خط مسار ودخول التنقل الصوتي الكامل.

في حال كنت بحاجة إلى تنقل بسيط من نقطة إلى نقطة معروض كخطوط مستقيمة، يمكنك بناء وفرز ***قائمة المسار*** المكونة من علامات كنقاط وسيطة واستخدام الأدوات للتنقل البسيط.


#### التوصيات {#recommendations}

فيما يلي خطوات توصية بسيطة لـ *التنقل باستخدام العلامات*:

1. إنشاء علامات. ابحث عن الكائن (الكائنات) المطلوب على الخريطة، انقر عليه، واختر *[زر العلامة](../../personal/markers.md#add--edit-markers)* في *[قائمة سياق الخريطة](../../map/map-context-menu.md#add--edit-marker)*. يمكنك أيضًا إنشاء علامات من [المفضلة](#add-group-of-favorite) أو [مسارات GPX](#add-group-of-track-waypoints).
2. [*فرز العلامات*](#sort-markers) بالطريقة المفضلة التي تريد أن تمر بها
3. تخصيص *عرض علامات الخريطة* إذا كنت ترغب في استخدام العلامات دون بدء التنقل. قم بتمكين خياري **الأسهم على الخريطة** و **خط الاتجاه** في قسم *[المظهر](../../personal/markers.md#appearance-on-the-map)* من *[قائمة علامات الخريطة](../../personal/markers.md#actions)*.
4. أضف *[أدوات العلامات](../../personal/markers.md#markers)* في *[قائمة تكوين الشاشة](../../widgets/configure-screen.md)* (اختياري).
5. [*وضع علامة "تم المرور"*](#pass-markers) على العلامات التي تمت زيارتها بالفعل أو استعادتها من السجل إذا كنت ترغب في المرور بها مرة أخرى.

:::note
عند تمكين خياري **الأسهم على الخريطة** و **خط الاتجاه** في قسم *المظهر* من [قائمة علامات الخريطة](../../personal/markers.md#appearance-on-the-map)، سترى سهمًا أو خطًا متقطعًا على الخريطة. يشير السهم إلى الاتجاه إلى العلامة النشطة عندما تكون خارج شاشة الخريطة الحالية. يتم رسم خط الاتجاه عندما تكون موقعك الجغرافي والعلامة كلاهما على نفس الشاشة.
:::


## قائمة المسار {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


تمثل قائمة المسار قائمة مرتبة من العلامات *القابلة للمرور* المرئية على الخريطة. يمكنك إضافة وحذف النقاط واحدة تلو الأخرى أو القيام بذلك دفعة واحدة باستخدام [ملف GPX](#add-group-of-track-waypoints) أو [مجموعة المفضلة](#add-group-of-favorite) المعدة مسبقًا. بالنسبة للمسابقات المحلية أو المغامرات، قد يكون من المفيد إنشاء قائمة نقاط من الإحداثيات باستخدام [أداة إدخال الإحداثيات](../../plan-route/coordinate-input.md).


### إضافة علامات فردية {#add-single-markers}

يمكن إضافة أو حذف *العلامات* من الخريطة بنقرة واحدة على الشاشة في الموقع المطلوب. ثم تحتاج إلى اتباع التعليمات من مقالة *[قائمة سياق الخريطة](../../map/map-context-menu.md#add--edit-marker)*.


### إضافة مجموعة من المفضلة {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

يمكنك إنشاء *علامات الخريطة* من *[المفضلة](../../personal/favorites.md)* باستخدام:

- *[قائمة مجموعات المفضلة](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→المفضلة الخاصة بي)*.
- أيقونة &#128681; في قائمة المفضلة داخل الصفحة *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→المفضلة الخاصة بي→&#128681;)*.
- خيار **'+'** (إضافة) في *[علامات التبويب للمجموعات](../../personal/markers.md#marker-groups)* في قائمة علامات الخريطة *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### إضافة مجموعة من نقاط مسار التتبع {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

يمكن استخدام مسارات GPX مع نقاط الطريق كـ *علامات خريطة* وإيقاف تشغيلها بسرعة:

- استخدم خيار **'+'** (إضافة) في *[علامات التبويب للمجموعات](../../personal/markers.md#marker-groups)* في قائمة علامات الخريطة *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- قم بتشغيل المفتاح بالقرب من المسار في *[علامات التبويب للمجموعات](../../personal/markers.md#marker-groups)* في قائمة علامات الخريطة *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
يمكن إضافة المسارات التي تحتوي على نقاط طريق فقط إلى *قائمة علامات الخريطة*. يجب أن يكون المسار الذي تنوي إضافته مرئيًا (نشطًا) على الخريطة أيضًا.
:::

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- يمكنك أيضًا إنشاء *علامات* من مسار يحتوي على نقاط طريق باستخدام *[قائمة سياق المسار](../../map/tracks/track-context-menu.md#points--waypoints)*: *انقر على مسار مرئي على الخريطة ← في قائمة سياق المسار اختر نقاط ← '&#8942;' ← <Translate android="true" ids="add_group_to_markers"/>*


## فرز العلامات {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Sort Markers in a list Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sort Markers in a list iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

بالضغط على الزاوية اليسرى (*أندرويد*) أو الزاوية اليمنى (*iOS*) من علامة تبويب *علامة الخريطة* في *[قائمة علامات الخريطة](../../personal/markers.md#itinerary-list)* وتحريكها لأعلى أو لأسفل، يمكنك تغيير ترتيبها في *قائمة التنقل* (أثناء تحريك بطاقة العلامة سترى خطًا يشير إلى مكان وضع العلامة).

في إصدار أندرويد من تطبيق OsmAnd، توجد خيارات فرز أخرى لـ *علامات الخريطة* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> ←* *الفرز حسب* أو *تخطيط مسار*).


### الفرز حسب السمات {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Alternative Markers sorting Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markers sorting Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

يمكنك فرز *العلامات* حسب:

- **الاسم** (*أبجديًا*) — إذا كانت العلامات تحمل أسماء وصفية، يمكن أن تكون هذه طريقة مفيدة للعثور بسرعة على العلامة التي تبحث عنها.
- **المسافة** (*الأقرب أو الأبعد أولاً*) - سيقوم هذا الخيار بفرز العلامات حسب المسافة من موقعك الحالي.
- **التاريخ** (*مؤخرًا أو منذ فترة طويلة*) - سيقوم هذا بفرز العلامات حسب تاريخ إضافتها. إذا قمت بإضافة العديد من العلامات بمرور الوقت، يمكن أن تكون هذه طريقة مفيدة لمعرفة أي منها هو الأحدث.


### إعادة الترتيب باستخدام أداة تخطيط المسار {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

باستخدام وظيفة "تخطيط مسار" في أداة قائمة العلامات، يمكنك فرز *العلامات* "من الباب إلى الباب"، أو وضعها بترتيب عكسي، أو إنشاء "رحلة ذهاب وعودة". إذا نقرت على خيار "التنقل"، فسيتم استخدام *العلامات* كـ [وجهات وسيطة](../setup/route-navigation.md#intermediate-destinations).


## تجاوز العلامات {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

يمكن وضع علامة على *علامة* على أنها تم المرور بها (*أندرويد*) أو تم تجاهلها (*iOS*).

- من خلال *[قائمة سياق الخريطة](../../map/map-context-menu.md#add--edit-marker)*.
- عندما تقترب من *علامة* على مسافة أقرب من 40 مترًا (*أندرويد*) أو 50 مترًا (*iOS*)، يصبح مفتاح في شريط *[أدوات العلامات](../../widgets/markers.md#top-bar-widget)* نشطًا.

بعد تجاوز *علامة*، تنتقل إلى مجلد [السجل](../../personal/markers.md#history)، حيث يمكن استعادتها إذا لزم الأمر. تصبح العلامة التالية في [القائمة](#itinerary-list) نشطة. اعتمادًا على [إعداداتك](#use-markers-in-navigation)، قد يتم توجيهك إليها بسهم أو خط متقطع.


## مقالات ذات صلة {#related-articles}

- [حول علامات الخريطة](../../personal/markers.md).
- [أداة العلامة](../../widgets/markers.md).
__
- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](./route-navigation.md)
- [تفاصيل المسار](./route-details.md)
- [التنقل بالمسار](./gpx-navigation.md)
- [إعدادات التنقل](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء التنقل](../guidance/map-during-navigation.md)
- [المطالبات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: يونيو 2025*