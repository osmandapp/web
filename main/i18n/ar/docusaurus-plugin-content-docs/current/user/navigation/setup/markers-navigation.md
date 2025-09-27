---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  الملاحة باستخدام العلامات
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

[علامات الخريطة](../../personal/markers.md) هي نقاط على الخريطة معلمة بأعلام. يمكن استخدامها لأغراض متنوعة، مثل الإشارة إلى موقع تريد زيارته، أو نقطة اهتمام تريد تذكرها، أو لإنشاء مسار مخصص.

يمكن أن تكون مفيدة بشكل خاص للمتنزهين أو راكبي الدراجات أو أي شخص يستكشف منطقة جديدة ويريد تحديد مواقع مثيرة للاهتمام أو نقاط مرجعية على الخريطة. الفرق الرئيسي عن [النقاط المفضلة](../../personal/favorites.md)، هو أن العلامات أسرع في الإنشاء لأنها لا تتطلب اسمًا.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![علامة الملاحة أندرويد](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![علامة الملاحة iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## استخدام العلامات في الملاحة {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![الفرق في ملاحة العلامات أندرويد](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![الفرق في ملاحة العلامات أندرويد](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الفرق في ملاحة العلامات iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![الفرق في ملاحة العلامات iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

يمكن أن تعمل *علامات الخريطة* كـ [وجهات](./route-navigation#set-destinations) أثناء بناء المسار. وهي ملائمة بشكل خاص عندما تحتاج إلى تعيين مسار بنقاط وسيطة.

ومع ذلك، توفر *علامات الخريطة* أيضًا وظائف متنوعة مثل [الودجات](../../widgets/markers.md)، واتجاه الحركة، والخطوط على الخريطة، لذا يمكنك استخدام هذه الأدوات للملاحة دون بناء خط مسار والدخول في ملاحة التوجيه الصوتي الكاملة.

في حال احتجت إلى ملاحة بسيطة من نقطة إلى نقطة معروضة كخطوط مستقيمة، يمكنك بناء وفرز ***قائمة خط السير*** المكونة من علامات كنقاط وسيطة واستخدام الودجات للملاحة البسيطة.


### توصيات {#recommendations}

فيما يلي خطوات توصية بسيطة لـ *الملاحة باستخدام العلامات*:

1. إنشاء علامات. ابحث عن الكائن (الكائنات) المطلوب على الخريطة، انقر عليه، واختر *[زر العلامة](../../personal/markers.md#add--edit-markers)* في *[قائمة سياق الخريطة](../../map/map-context-menu.md#add--edit-marker)*. يمكنك أيضًا إنشاء علامات من [المفضلة](#add-group-of-favorite) أو [مسارات GPX](#add-group-of-track-waypoints).
2. [*فرز العلامات*](#sort-markers) بالطريقة المفضلة التي تريد المرور بها.
3. تخصيص *عرض علامات الخريطة* إذا كنت ترغب في استخدام العلامات دون بدء الملاحة. قم بتمكين خياري **الأسهم على الخريطة** و **خط الاتجاه** في قسم *[المظهر](../../personal/markers.md#appearance-on-the-map)* من *[قائمة علامات الخريطة](../../personal/markers.md#actions)*.
4. أضف *[ودجات العلامات](../../personal/markers.md#markers)* في *[قائمة تكوين الشاشة](../../widgets/configure-screen.md)* (اختياري).
5. [*وضع علامة "تم المرور بها"*](#pass-markers) على العلامات التي تمت زيارتها بالفعل أو استعادتها من السجل إذا كنت تريد المرور بها مرة أخرى.

:::note
عند تمكين خياري **الأسهم على الخريطة** و **خط الاتجاه** في قسم *المظهر* من [قائمة علامات الخريطة](../../personal/markers.md#appearance-on-the-map)، سترى سهمًا أو خطًا متقطعًا على الخريطة. يظهر السهم اتجاه العلامة النشطة عندما تكون خارج شاشة الخريطة الحالية. يتم رسم خط الاتجاه عندما يكون موقعك الجغرافي والعلامة كلاهما على نفس الشاشة.
:::


## قائمة خط السير {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![قائمة العلامات أندرويد](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة العلامات iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


تمثل قائمة خط السير قائمة مرتبة من العلامات *القابلة للمرور* والتي تكون مرئية على الخريطة. يمكنك إضافة وحذف النقاط واحدة تلو الأخرى أو القيام بذلك دفعة واحدة باستخدام [ملف GPX](#add-group-of-track-waypoints) مُعد مسبقًا أو [مجموعة مفضلة](#add-group-of-favorite). بالنسبة للمسابقات المحلية أو المغامرات، قد يكون من المفيد إنشاء قائمة نقاط من الإحداثيات باستخدام [أداة إدخال الإحداثيات](../../plan-route/coordinate-input.md).


### إضافة علامات فردية {#add-single-markers}

يمكن إضافة *العلامات* أو حذفها من الخريطة بنقرة واحدة على الشاشة في الموقع المطلوب. ثم تحتاج إلى اتباع التعليمات من مقال *[قائمة سياق الخريطة](../../map/map-context-menu.md#add--edit-marker)*.


### إضافة مجموعة من المفضلة {#add-group-of-favorite}

<InfoAndroidOnly />

![المفضلة إلى علامات 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![المفضلة إلى علامات 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

يمكنك إنشاء *علامات الخريطة* من *[المفضلة](../../personal/favorites.md)* باستخدام:

- *[قائمة مجموعات المفضلة](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→مفضلاتي)*.
- أيقونة &#128681; في قائمة المفضلة داخل الصفحة *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→مفضلاتي→&#128681;)*.
- خيار **'+'** (إضافة) في *[علامة تبويب المجموعات](../../personal/markers.md#marker-groups)* في قائمة علامات الخريطة *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### إضافة مجموعة من نقاط مسار GPX {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX إلى علامات 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

يمكن استخدام مسارات GPX مع نقاط الطريق كـ *علامات خريطة* وإيقاف تشغيلها بسرعة:

- استخدم خيار **'+'** (إضافة) في *[علامة تبويب المجموعات](../../personal/markers.md#marker-groups)* في قائمة علامات الخريطة *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- قم بتشغيل المفتاح بجوار المسار في *[علامة تبويب المجموعات](../../personal/markers.md#marker-groups)* في قائمة علامات الخريطة *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
يمكن فقط إضافة المسارات التي تحتوي على نقاط طريق إلى *قائمة علامات الخريطة*. يجب أن يكون المسار الذي تنوي إضافته مرئيًا (نشطًا) على الخريطة أيضًا.
:::

![GPX إلى علامات 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX إلى علامات 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- يمكنك أيضًا إنشاء *علامات* من مسار به نقاط طريق باستخدام *[قائمة سياق المسار](../../map/tracks/track-context-menu.md#points--waypoints)*: *انقر على مسار مرئي على الخريطة ← في قائمة سياق المسار اختر النقاط ← '&#8942;' ← <Translate android="true" ids="add_group_to_markers"/>*


## فرز العلامات {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![فرز العلامات في قائمة أندرويد](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![فرز العلامات في قائمة iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

بالضغط على الزاوية اليسرى (أندرويد) أو الزاوية اليمنى (iOS) لعلامة تبويب *علامة الخريطة* في *[قائمة علامات الخريطة](../../personal/markers.md#itinerary-list)* وتحريكها لأعلى أو لأسفل، يمكنك تغيير ترتيبها في *قائمة الملاحة* (أثناء تحريك بطاقة العلامة سترى خطًا يشير إلى المكان الذي سيتم وضع العلامة فيه).

في إصدار أندرويد من تطبيق OsmAnd، توجد خيارات فرز أخرى لـ *علامات الخريطة* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *فرز حسب* أو *تخطيط مسار*).


### الفرز حسب السمات {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![فرز العلامات البديل أندرويد 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![فرز العلامات البديل أندرويد 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

يمكنك فرز *العلامات* حسب:

- **الاسم** (*أبجديًا*) — إذا كانت العلامات لها أسماء وصفية، فقد تكون هذه طريقة مفيدة للعثور بسرعة على العلامة التي تبحث عنها.
- **المسافة** (*الأقرب أو الأبعد أولاً*) - سيقوم هذا الخيار بفرز العلامات حسب بعدها عن موقعك الحالي.
- **التاريخ** (*حديثًا أو منذ وقت طويل*) - سيقوم هذا بفرز العلامات حسب تاريخ إضافتها. إذا كنت قد أضفت الكثير من العلامات بمرور الوقت، فقد تكون هذه طريقة مفيدة لمعرفة أيها الأحدث.


### إعادة الترتيب باستخدام أداة تخطيط المسار {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![فرز العلامات البديل أندرويد 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![فرز العلامات البديل أندرويد 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

باستخدام وظيفة تخطيط المسار في أداة قائمة العلامات، يمكنك فرز *العلامات* *من الباب إلى الباب*، أو وضعها بترتيب عكسي أو إنشاء *رحلة ذهاب وعودة*. إذا نقرت على خيار *الملاحة*، فسيتم استخدام *العلامات* كـ [وجهات وسيطة](../setup/route-navigation.md#intermediate-destinations).


## المرور بالعلامات {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![المرور بعلامة أندرويد 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![المرور بعلامة أندرويد 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المرور بعلامة iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![المرور بعلامة iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

يمكن وضع علامة على *العلامة* على أنها تم المرور بها (أندرويد) أو تم تجاهلها (iOS).

- من خلال *[قائمة سياق الخريطة](../../map/map-context-menu.md#add--edit-marker)*.
- عندما تقترب من *علامة* على مسافة أقرب من ٤٠ مترًا (أندرويد) أو ٥٠ مترًا (iOS)، يصبح المفتاح في شريط *[ودجات العلامات](../../widgets/markers.md#top-bar-widget)* نشطًا.

بعد المرور بـ *علامة*، تنتقل إلى مجلد [السجل](../../personal/markers.md#history)، حيث يمكن استعادتها إذا لزم الأمر. تصبح العلامة التالية في [القائمة](#itinerary-list) نشطة. اعتمادًا على [إعداداتك](#use-markers-in-navigation)، قد يتم توجيهك إليها بسهم أو خط متقطع.


## مقالات ذات صلة {#related-articles}

- [حول علامات الخريطة](../../personal/markers.md).
- [ودجت العلامات](../../widgets/markers.md).
__
- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](./route-navigation.md)
- [تفاصيل المسار](./route-details.md)
- [الملاحة حسب المسار](./gpx-navigation.md)
- [إعدادات الملاحة](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md)
- [التوجيهات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)