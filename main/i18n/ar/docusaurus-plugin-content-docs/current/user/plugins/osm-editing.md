---
source-hash: fb4dfa3af12638db8d07636ca58d9e23de9542afc7c2cd66d965f36e2bc93826
sidebar_position: 9
title:  تعديل OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) هي مجتمع عالمي يهدف إلى إنشاء خريطة جغرافية مفصلة مجانية للعالم وتوفير بيانات مفتوحة المصدر محدثة لكل مستخدم. يسمح لك ملحق تعديل OpenStreetMap بالمساهمة في المجتمع.

باستخدام OsmAnd وملحق تعديل OSM، يمكنك بسهولة المساهمة بمعلوماتك الخاصة في OpenStreetMap.org، مثل إنشاء أو تعديل [النقاط المهمة](#create--modify-poi)، وإضافة أو التعليق على [الملاحظات](#create--modify-osm-note)، وتحميل [مسارات GPX](#upload-gps-track) المسجلة.

## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام ملحق *تعديل OpenStreetMap*، يجب عليك إجراء الإعدادات التالية:

١. تمكين [الملحق](../plugins/index.md#enable--disable).
٢. ضبط تعديل OpenStreetMap في أي [ملف شخصي](../personal/profiles.md).
٣. تمكين عرض *ملاحظات OSM (عبر الإنترنت)* أو *تعديلات OSM* على الخريطة في [قائمة إعداد الخريطة](../map/configure-map-menu).


## الإعدادات {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![إعدادات ملحق تعديل OpenStreetMap أندرويد](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![إعدادات ملحق تعديل OpenStreetMap iOS](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  

:::note
إعدادات الملحق عامة وتنطبق على جميع الملفات الشخصية.
:::

- [تسجيل الدخول إلى OpenStreetMap](#authorization). سجل الدخول لتحميل التغييرات الجديدة أو المعدلة. استخدم طريقة *OAuth 2.0* الآمنة أو [سجل الدخول على موقع OSM](https://www.openstreetmap.org/login). بالنسبة لنظام iOS، يتوفر زر طريقة OAuth فقط للمستخدمين الذين لديهم إصدار مدعوم من iOS، وهو ١٦.٤
- **<Translate android="true" ids="offline_edition"/>**. إذا تم تمكين هذا الإعداد، يتم حفظ التغييرات أولاً محليًا (زر *حفظ*) ويتم تحميلها عند الطلب. إذا تم تعطيل الإعداد، يتم تحميل التغييرات فورًا (زر *تحميل*).
- **<Translate android="true" ids="use_dev_url"/>** *(أندرويد فقط)*. يسمح لك بتمكين [dev.openstreetmap.org](https://dev.openstreetmap.org/) بدلاً من [openstreetmap.org](http://openstreetmap.org/) لاختبار تحميل ملاحظات OSM أو النقاط المهمة أو مسارات GPS. عند التمكين، يتم تسجيل خروجك تلقائيًا من OpenStreetMap.org. هذا الإعداد متاح فقط في القائمة عند تمكين *ملحق تطوير OsmAnd*.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. انقر عليه لفتح [*القائمة ← أماكني ← تعديلات OSM*](../personal/myplaces.md). تسرد علامة التبويب هذه ملاحظات OSM غير المحررة. الإجراءات التالية متاحة مع الملاحظة: *تحميل*، *عرض على الخريطة*، *تعديل ملاحظة OSM*، *حذف*. لم تعد الملاحظات التي تم تحميلها أو حذفها معروضة في القائمة.

:::note
إذا كان لديك اشتراك [OsmAnd Pro](../purchases/android.md#pro-features)، فستظهر التغييرات التي تم إجراؤها على OSM على خريطة OsmAnd الخاصة بك في غضون ساعة واحدة. تأكد من تمكين [التحديثات المباشرة](../personal/maps-resources.md#live-updates).
:::


### التفويض {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd Live للمساهمين في الخرائط](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd Live للمساهمين في الخرائط](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

سجل الدخول للمساهمة بالتغييرات وملفات GPX.

- اذهب إلى [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) و*سجل الدخول* أو *أنشئ حسابًا*.
- انقر على حقل *تسجيل الدخول إلى OpenStreetMap* في تطبيق OsmAnd، ثم انقر على زر *تسجيل الدخول باستخدام OpenStreetMap*.


### تحديثات الخرائط المجانية للمساهمين في الخرائط {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd Live للمساهمين في الخرائط](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd Live للمساهمين في الخرائط](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd Live للمساهمين في الخرائط](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd Live للمساهمين في الخرائط](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

يسمح لك إعداد <Translate android="true" ids="map_updates_for_mappers"/> بتمكين **[التحديثات المباشرة](../personal/maps-resources.md#free-for-osm-mappers)** إذا كنت مساهمًا نشطًا في OpenStreetMap. بهذه الطريقة يمكنك الاستمتاع بتحديثات الخرائط المجانية كل ساعة، على عكس التحديثات الشهرية القياسية. قد يحق للمساهمين النشطين في OpenStreetMap.org الحصول على تحديثات خرائط غير محدودة كل ساعة. سجل الدخول إلى OpenStreetMap للتحقق من أهليتك للحصول على تحديثات خرائط شهرية وساعية غير محدودة.


### طبقة تعديل OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![طبقة تعديل OSM أندرويد](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![طبقة تعديل OSM أندرويد ٢](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![طبقة تعديل OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

يمكنك تمكين أو تعطيل عرض تعديلات OSM كطبقة منفصلة في قسم [إعداد الخريطة](../map/configure-map-menu.md) من *القائمة الرئيسية*. تشمل تعديلات OSM ما يلي:  
- **ملاحظات OSM (عبر الإنترنت)**. تعرض ملاحظات OpenStreetMap العامة التي أنشأها المستخدمون لتسليط الضوء على مشكلات الرسم أو طلب التحديثات. تُعرض الملاحظات كعلامات تفاعلية يمكن للمساهمين مراجعتها وفتحها وحلها.  
![طبقة تعديل OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_note.png)  
- **تعديلات OSM**. تعرض تعديلات OSM المحلية الخاصة بك المخزنة على الجهاز قبل تحميلها إلى خادم OpenStreetMap. تساعد هذه الطبقة في مراجعة الهندسة والسمات للكائنات التي قمت بتعديلها أو إضافتها.  
![طبقة تعديل OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_edits.png)  
- **علامات Fixme**. تسلط الضوء على الكائنات الموسومة بـ fixme=* في OSM. تحتوي هذه العناصر على تعليقات المساهمين التي تشير إلى أن المعلومات غير كاملة أو غير مؤكدة أو تحتاج إلى التحقق الميداني.  
![طبقة تعديل OSM](@site/static/img/plugins/osm-editing/osm_editing_fixme_tags.png)  
- **علامات الملاحظات**. تعرض الكائنات التي تحتوي على علامات note=* — تعليقات المساهمين المضمنة مباشرة في بيانات OSM. عادةً ما تصف هذه العلامات الظروف المؤقتة أو السياق الإضافي للتعديل المستقبلي.  
![طبقة تعديل OSM](@site/static/img/plugins/osm-editing/osm_editing_note_tags.png)  
- **الأيقونات عند مستويات التكبير المنخفضة**. يمكن تمكين تمثيلات أيقونية مبسطة لكائنات OSM باستخدام اختصارات قصيرة مستمدة من مفاتيح العلامات الأساسية. يُوصف معناها [هنا](https://osmand.net/docs/user/map-legend/osmand#icons-for-low-zooms-option-simplified-icons-). تجعل هذه الميزة المزيد من الكائنات مرئية عند مستويات التكبير المنخفضة دون تحميل الخريطة أو التسبب في تداخل الأيقونات.  
![طبقة تعديل OSM](@site/static/img/plugins/osm-editing/osm_editing_icons_zoom.png)  


## إنشاء / تعديل نقطة مهمة {#create--modify-poi}

يسمح لك ملحق تعديل OpenStreetMap بإنشاء كائنات جديدة على الخريطة تسمى [نقاط الاهتمام أو POI](../map/point-layers-on-map.md#points-of-interest-pois). يمكنك رسم خريطة لمتجر جديد أو معلم مفضل أو مقعد أو مأوى حتى يتمكن الناس من العثور عليها.

١. انقر على الخريطة لوضع نقطة مهمة جديدة، أو انقر على نقطة مهمة لم يتم تحميلها بعد.
٢. انقر على [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
٣. اختر [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi)، وأضف اسمها ومعلومات أخرى مثل ساعات العمل والموقع الإلكتروني وما إلى ذلك. عند تحديد نقطة مهمة لم يتم تحميلها، يتغير *إنشاء نقطة مهمة* إلى *تعديل نقطة مهمة*.
٤. بناءً على إعداد [التعديل دون اتصال](#settings)، يمكنك حفظ البيانات محليًا أو [تحميلها](../map/map-context-menu#-upload-poi--osm-note).


### إضافة علامات {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![إضافة علامة نقطة مهمة أندرويد](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![إضافة علامة نقطة مهمة أندرويد](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة علامة نقطة مهمة iOS](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

يمكنك بسهولة إضافة [علامات](https://wiki.openstreetmap.org/wiki/Tags) OSM إلى النقطة المهمة. عند إدخال عدة أحرف في شريط البحث، يقترح البرنامج علامات محتملة.

**التعديلات دون اتصال.**
يمكنك عرض أو تحميل إلى OSM أو حذف النقاط المهمة في *أماكني ← تعديلات OSM*. يمكنك أيضًا تصدير تغييرات نقاط OSM المهمة الخاصة بك إلى [ملف OSC](https://wiki.openstreetmap.org/wiki/OsmChange) واستيرادها إلى [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### إضافة أنواع نقاط مهمة غير مدعومة {#add-unsupported-poi-types}

في علامة التبويب *متقدم*، يمكنك إضافة أنواع نقاط مهمة غير مدعومة قد تكون مفيدة لمهمتك المحددة. يسمح لك هذا الخيار بإدخال بيانات النقطة المهمة يدويًا وبالتالي توسيع وظائف التطبيق.

أحد أمثلة أنواع النقاط المهمة غير المدعومة التي يمكنك إضافتها هو *amenity=freeshops*. يمكن أن يكون هذا النوع مفيدًا إذا كنت ترغب في تحديد المتاجر المجانية أو الأماكن التي توفر منتجات مجانية.

لإضافة أنواع نقاط مهمة غير مدعومة، اتبع الخطوات التالية:

١. افتح علامة التبويب *متقدم*.
٢. انقر على *نوع النقطة المهمة*.
٣. أدخل مفتاح *amenity* وقيمة *freeshops* في الحقول المناسبة.
٤. املأ بقية البيانات المطلوبة لهذه النقطة المهمة.
٥. انقر على *إضافة علامة* لإضافة النقطة المهمة الجديدة إلى قاعدة بياناتك.

تذكر أنه عند إضافة أنواع نقاط مهمة غير مدعومة، من المهم التأكد من إدخال البيانات بشكل صحيح لضمان الأداء الصحيح للتطبيق والمعالجة اللاحقة للمعلومات.


## إنشاء / تعديل ملاحظة OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![فتح ملاحظة OSM أندرويد](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![فتح ملاحظة OSM أندرويد](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*  

![فتح ملاحظة OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

لتعديل ملاحظات OSM أو التعليق عليها أو إغلاقها، قم بتمكين عرضها على الخريطة في [قائمة إعداد الخريطة](../map/configure-map-menu.md).

- تتيح لك ميزة ملاحظات OSM إضافة ملاحظات إلى الخريطة. في هذه الملاحظات، يمكنك وصف الأخطاء أو الكتابة عن المعلومات المفقودة في بيانات OpenStreetMap. يمكنك أنت والمستخدمون الآخرون ترك تعليقات على ملاحظاتك.
- يمكنك مساعدة المستخدمين الآخرين عن طريق التحقق من أسئلتهم أو مشكلاتهم، وتقديم التعليقات، ثم إغلاق الملاحظات التي تم حلها.
- اقرأ المزيد عن ملاحظات OpenStreetMap [هنا](https://wiki.openstreetmap.org/wiki/Notes).

لإنشاء ملاحظة، لا تحتاج إلى تسجيل الدخول إلى OpenStreetMap.org، يمكنك إرسالها بشكل مجهول.

- انقر على الخريطة حيث سيتم وضع ملاحظة OSM الجديدة (أو انقر على ملاحظة لم يتم تحميلها)، وحدد [إجراءات](../map/map-context-menu.md#actions).
- إذا كنت ترغب في إضافة معلومات إلى ملاحظة موجودة أو ملاحظة لم يتم تحميلها، أو تعديل تعليق، أو إغلاق ملاحظة، فانقر على ملاحظة OSM على الخريطة وحدد [الإجراء المطلوب](../map/map-context-menu.md#-comment--close-osm-note).
- يمكنك تحميل التغييرات بمجرد توفرك على الإنترنت. يمكنك أيضًا التراجع عن التغييرات قبل تحميلها.

:::info
ملاحظات OSM التي تم تحميلها غير مرئية على خرائط OsmAnd في وضع عدم الاتصال.
:::


## مسار GPS {#gps-track}

مسارات GPS التي قمت بتسجيلها مفيدة لـ:

- **المساهمون في الخرائط**. يمكن استخدام المسارات لرسم جميع أنواع المسارات.
- **الملاحة**. بناءً على بيانات ملف GPX التي قمت بتحميلها، يمكن لتطبيقات الملاحة والأجهزة الخاصة حساب المسارات.
- **لمشاركة المعلومات** حول المسارات والطرق التي سجلتها على [الخرائط المستندة إلى OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info ملاحظة
ستتم إضافة مساراتك إلى [آثار OSM](https://www.openstreetmap.org/traces) في غضون ساعة حيث ستكون متاحة لك وللآخرين لعرضها والبحث عنها واستخدامها.
:::


### تحميل مسار GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![ملحق تعديل OpenStreetMap GPX إلى OSM أندرويد](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ملحق تعديل OpenStreetMap GPX إلى OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)  

</TabItem>

</Tabs>

لـ [تحميل مسار GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks)، اتبع الخطوات أدناه:

- ابحث عن المسار المطلوب في [*علامة تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- انقر على *قائمة النقاط الثلاث* بجوار اسم المسار وحدد *تصدير*.

**الإعدادات:**

- **<Translate android="true" ids="shared_string_description"/>**. يسمح لك بإضافة وصف للمسار. ينطبق الوصف على جميع المسارات المحددة. إذا لم تدخل شيئًا في الحقل، فسيتم استخدام أسماء المسارات لكل مسار منفصل كأوصاف.
- **<Translate android="true" ids="gpx_tags_txt"/>**. يسمح لك هذا العنصر في قسم الإعدادات بإضافة علامات لتعريف المسار. العلامة الافتراضية هي "osmand". إذا تم تسجيل المسار بنشاط محدد بناءً على الملف الشخصي المحدد، فسيتم إضافة هذا النشاط تلقائيًا كعلامة أثناء التحميل. بالنسبة لمجموعات المسارات المحملة، يتلقى كل مسار علامة نشاطه الخاصة. بالنسبة لبعض الملفات الشخصية (مثل النقل العام)، لا تُضاف علامة النشاط. يمكنك إدخال علامات إضافية يدويًا، مفصولة بفواصل.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. رؤية المسار لمستخدمي OSM:
   - *عام* يعني أن المسار متاح للجمهور ويتم عرضه في شكل خام في مسارات GPS الخاصة بك، وقوائم مسارات GPS، وقوائم المسارات ذات الطابع الزمني. لا تتم الإشارة إلى البيانات المرسلة عبر واجهة برمجة التطبيقات (API) مع صفحة المسار الخاصة بك. لا تتوفر الطوابع الزمنية لنقاط التتبع من خلال واجهة برمجة تطبيقات GPS العامة ولا يتم ترتيب نقاط المسار ترتيبًا زمنيًا.
   - *قابل للتعريف* يعني أن المسار سيتم عرضه علنًا في نقاط مسار GPS الخاصة بك وقوائم مسارات GPS العامة، مما يعني أن المستخدمين الآخرين سيتمكنون من تنزيل المسار الخام وربطه باسم المستخدم الخاص بك. سترتبط بيانات نقاط المسار ذات الطابع الزمني العام من واجهة برمجة تطبيقات GPS التي يتم تمريرها عبر واجهة برمجة تطبيقات نقاط المسار بصفحة المسار الأصلية الخاصة بك.
   - *قابل للتتبع* يعني أن المسار لا يتم عرضه في القوائم العامة، ولكن يتم تحميل نقاط المسار المعالجة ذات الطوابع الزمنية منه (والتي لا يمكن ربطها بك مباشرة) من واجهة برمجة تطبيقات GPS العامة.
   - *خاص* يعني أن المسار لا يتم عرضه في القوائم العامة، ولكن نقاط المسار منه بترتيب غير زمني متاحة من خلال واجهة برمجة تطبيقات GPS العامة بدون طوابع زمنية.
- **<Translate android="true" ids="login_account"/>** - [حساب OSM](https://www.openstreetmap.org/login).

:::info
يمكنك تحديد أكثر من مسار واحد لتحميله إلى OSM. للقيام بذلك، انقر على أيقونة *تحميل إلى OpenStreetMap* في أسفل الشاشة، وحدد المسارات باستخدام مربع الاختيار، وانقر على *تحميل*، ثم *متابعة*.
:::

### إنشاء ملف OBF {#generate-obf-file}

يمكنك إنشاء ملف OBF باستخدام [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) إذا كان لديك قاعدة بيانات كبيرة لمسارات GPX. هذه مجموعة من المسارات من osmand.net مع علامة 'gpsies'، أو مجموعة من المسارات التي تم تنزيلها من OpenStreetMap أو مجموعتك الخاصة.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)