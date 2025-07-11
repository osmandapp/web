---
source-hash: 44618d2a28205f83a5a0d07741bf7f6948d9ca1354f8bc8546bcb8ce70d1114e
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) هو مجتمع عالمي يهدف إلى إنشاء خريطة جغرافية مجانية ومفصلة للعالم وتوفير بيانات مفتوحة المصدر ومحدثة لكل مستخدم. يتيح لك المكون الإضافي لتعديل OpenStreetMap المساهمة في المجتمع.

باستخدام OsmAnd والمكون الإضافي لتعديل OSM، يمكنك بسهولة المساهمة بمعلوماتك الخاصة في OpenStreetMap.org، مثل إنشاء أو تعديل [نقاط الاهتمام (POIs)](#create--modify-poi)، أو إضافة أو التعليق على [الملاحظات](#create--modify-osm-note)، وتحميل مسارات GPX المسجلة [tracks](#upload-gps-track).

## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام المكون الإضافي *تعديل OpenStreetMap*، يجب عليك إجراء الإعدادات التالية:

1. تمكين [المكون الإضافي](../plugins/index.md#enable--disable).
2. تعيين تعديل OpenStreetMap في أي [ملف تعريف](../personal/profiles.md).
3. تمكين عرض *ملاحظات OSM (عبر الإنترنت)* أو *تعديلات OSM* على الخريطة في [قائمة تكوين الخريطة](../map/configure-map-menu).


## الإعدادات {#settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![إعدادات المكون الإضافي لتعديل OpenStretMap أندرويد](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![إعدادات المكون الإضافي لتعديل OpenStretMap أندرويد](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
إعدادات المكون الإضافي عالمية وتنطبق على جميع ملفات التعريف.
:::

- [تسجيل الدخول إلى OpenStreetMap](#authorization). تسجيل الدخول لتحميل التغييرات الجديدة أو المعدلة. استخدم طريقة *OAuth 2.0* الآمنة أو [سجل الدخول على موقع OSM](https://www.openstreetmap.org/login). بالنسبة لنظام iOS، زر طريقة OAuth متاح فقط للمستخدمين الذين لديهم إصدار مدعوم من iOS، 16.4
- **<Translate android="true" ids="offline_edition"/>**. إذا تم تمكين هذا الإعداد، يتم حفظ التغييرات أولاً محليًا (زر *حفظ*) وتحميلها عند الطلب. إذا تم تعطيل الإعداد، يتم تحميل التغييرات على الفور (زر *تحميل*).
- **<Translate android="true" ids="use_dev_url"/>** *(أندرويد فقط)*. يسمح لك بتمكين [dev.openstreetmap.org](https://dev.openstreetmap.org/) بدلاً من [openstreetmap.org](http://openstreetmap.org/) لاختبار تحميل ملاحظات OSM أو نقاط الاهتمام أو مسارات GPS. عند التمكين، يتم تسجيل خروجك تلقائيًا من OpenStreetMap.org. هذا الإعداد متاح فقط في القائمة عند تمكين *المكون الإضافي لتطوير OsmAnd*.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. انقر عليه لفتح [*القائمة ← أماكني ← تعديلات OSM*](../personal/myplaces.md). تعرض هذه علامة التبويب ملاحظات OSM غير المحررة. الإجراءات التالية متاحة مع الملاحظة: *تحميل*، *عرض على الخريطة*، *تعديل ملاحظة OSM*، *حذف*. الملاحظات التي تم تحميلها أو حذفها لم تعد معروضة في القائمة.

:::note
إذا كان لديك اشتراك [OsmAnd Pro](../purchases/android.md#pro-features)، فستظهر التغييرات التي تم إجراؤها على OSM على خريطة OsmAnd الخاصة بك في غضون ساعة واحدة. تأكد من تمكين [التحديثات المباشرة](../personal/maps-resources.md#osmand-live).
:::


### الترخيص {#authorization}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![OsmAnd مباشر للرسامين](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd مباشر للرسامين](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

سجل الدخول للمساهمة بالتغييرات وملفات GPX.

- انتقل إلى [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) و*سجل الدخول* أو *سجل*.
- انقر على حقل *تسجيل الدخول إلى OpenStreetMap* في تطبيق OsmAnd، ثم انقر على زر *تسجيل الدخول باستخدام OpenStreetMap*.


### تحديثات الخريطة المجانية للرسامين {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![OsmAnd مباشر للرسامين](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd مباشر للرسامين](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd مباشر للرسامين](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd مباشر للرسامين](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

يتيح لك إعداد <Translate android="true" ids="map_updates_for_mappers"/> تمكين **[OsmAnd مباشر](../personal/maps-resources.md#free-for-osm-mappers)** إذا كنت مساهمًا نشطًا في OpenStreetMap. وبهذه الطريقة يمكنك الاستمتاع بتحديثات الخريطة المجانية كل ساعة، على عكس التحديثات الشهرية القياسية. قد يحق للمساهمين النشطين في OpenStreetMap.org الحصول على تحديثات خريطة غير محدودة كل ساعة. سجل الدخول إلى OpenStreetMap للتحقق من أهليتك للحصول على تحديثات خريطة شهرية وساعية غير محدودة.


### طبقة تعديل OSM {#osm-editing-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![طبقة تعديل OSM أندرويد](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![طبقة تعديل OSM أندرويد 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![طبقة تعديل OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

يمكنك تمكين أو تعطيل عرض تعديلات OSM كطبقة منفصلة مثل *ملاحظات OSM* (عبر الإنترنت)، *تعديلات OSM*، *علامات Fixme*، *علامات الملاحظات*، *أيقونات عند التكبير المنخفض*، في قسم [تكوين الخريطة](../map/configure-map-menu.md) من *القائمة الرئيسية*.


## إنشاء / تعديل نقطة اهتمام (POI) {#create--modify-poi}

يتيح لك المكون الإضافي لتعديل OpenStreetMap إنشاء كائنات جديدة على الخريطة تسمى [نقاط الاهتمام أو POI](../map/point-layers-on-map.md#points-of-interest-pois). يمكنك رسم خريطة لمتجر جديد، أو معلم مفضل، أو مقعد، أو مأوى حتى يتمكن الناس من العثور عليها.

1. انقر على الخريطة لوضع نقطة اهتمام جديدة، أو انقر على نقطة اهتمام لم يتم تحميلها بعد. 2. انقر على [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. اختر [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi)، وأضف اسمها ومعلومات أخرى مثل ساعات العمل، والموقع الإلكتروني، وما إلى ذلك. عند تحديد نقطة اهتمام لم يتم تحميلها، يتغير *إنشاء نقطة اهتمام* إلى *تعديل نقطة اهتمام*.
3. اعتمادًا على إعداد [التحرير دون اتصال](#settings)، يمكنك حفظ البيانات محليًا أو [تحميلها](../map/map-context-menu#-upload-poi--osm-note).


### إضافة علامات {#add-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![إضافة علامة نقطة اهتمام أندرويد](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![إضافة علامة نقطة اهتمام أندرويد](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة علامة نقطة اهتمام iOS](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

يمكنك بسهولة إضافة [علامات](https://wiki.openstreetmap.org/wiki/Tags) OSM إلى نقطة الاهتمام. عند إدخال عدة أحرف في شريط البحث، يقترح البرنامج علامات محتملة.

**تعديلات دون اتصال.**
يمكنك عرض أو تحميل إلى OSM أو حذف نقاط الاهتمام في *أماكني ← تعديلات OSM*. يمكنك أيضًا تصدير تغييرات نقاط الاهتمام الخاصة بك إلى [ملف OSC](https://wiki.openstreetmap.org/wiki/OsmChange) واستيرادها إلى [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### إضافة أنواع نقاط اهتمام غير مدعومة {#add-unsupported-poi-types}

في علامة التبويب *متقدم*، يمكنك إضافة أنواع نقاط اهتمام غير مدعومة قد تكون مفيدة لمهمتك المحددة. يتيح لك هذا الخيار إدخال بيانات نقطة الاهتمام يدويًا وبالتالي توسيع وظائف التطبيق.

أحد الأمثلة على أنواع نقاط الاهتمام غير المدعومة التي يمكنك إضافتها هو *amenity=freeshops*. يمكن أن يكون هذا النوع مفيدًا إذا كنت ترغب في تحديد المتاجر المجانية أو الأماكن التي توفر منتجات مجانية.

لإضافة أنواع نقاط اهتمام غير مدعومة، اتبع الخطوات التالية:

1. افتح علامة التبويب *متقدم*.
2. انقر على *نوع نقطة الاهتمام*.
3. أدخل مفتاح *amenity* والقيمة *freeshops* في الحقول المناسبة.
4. املأ بقية البيانات المطلوبة لنقطة الاهتمام هذه.
5. انقر على *إضافة علامة* لإضافة نقطة الاهتمام الجديدة إلى قاعدة بياناتك.

تذكر أنه عند إضافة أنواع نقاط اهتمام غير مدعومة، من المهم التأكد من إدخال البيانات بشكل صحيح لضمان الأداء الصحيح للتطبيق والمعالجة اللاحقة للمعلومات.


## إنشاء / تعديل ملاحظة OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![فتح ملاحظة OSM أندرويد](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![فتح ملاحظة OSM أندرويد](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![فتح ملاحظة OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

لتحرير أو التعليق على أو إغلاق ملاحظات OSM، قم بتمكين عرضها على الخريطة في [قائمة تكوين الخريطة](../map/configure-map-menu.md).

- تتيح لك ميزة ملاحظات OSM إضافة ملاحظات إلى الخريطة. في هذه الملاحظات، يمكنك وصف الأخطاء أو الكتابة عن المعلومات المفقودة في بيانات OpenStreetMap. يمكنك أنت والمستخدمون الآخرون ترك تعليقات على ملاحظاتك.
- يمكنك مساعدة المستخدمين الآخرين عن طريق التحقق من أسئلتهم أو مشكلاتهم، وتقديم التعليقات، ثم إغلاق الملاحظات التي تم حلها.
- اقرأ المزيد عن ملاحظات OpenStreetMap [هنا](https://wiki.openstreetmap.org/wiki/Notes).

لإنشاء ملاحظة، لا تحتاج إلى تسجيل الدخول إلى OpenStreetMap.org، يمكنك إرسالها بشكل مجهول.

- انقر على الخريطة حيث سيتم وضع ملاحظة OSM الجديدة (أو انقر على ملاحظة لم يتم تحميلها)، وحدد [الإجراءات](../map/map-context-menu.md#actions).
- إذا كنت ترغب في إضافة معلومات إلى ملاحظة موجودة أو ملاحظة لم يتم تحميلها، أو تعديل تعليق، أو إغلاق ملاحظة، فانقر على ملاحظة OSM على الخريطة وحدد [الإجراء المطلوب](../map/map-context-menu.md#-comment--close-osm-note).
- يمكنك تحميل التغييرات بمجرد أن تكون متصلاً بالإنترنت. يمكنك أيضًا التراجع عن التغييرات قبل تحميلها.

:::info
ملاحظات OSM التي تم تحميلها غير مرئية على خرائط OsmAnd في وضع عدم الاتصال.
:::


## مسار GPS {#gps-track}

تعد مسارات GPS التي سجلتها مفيدة لـ:

- **الرسامين**. يمكن استخدام المسارات لرسم خرائط لجميع أنواع المسارات.
- **التنقل**. بناءً على بيانات ملف GPX التي قمت بتحميلها، يمكن لتطبيقات التنقل والأجهزة الخاصة حساب المسارات.
- **لمشاركة المعلومات** حول المسارات والطرق التي سجلتها على [الخرائط المستندة إلى OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTE
ستتم إضافة مساراتك إلى [آثار OSM](https://www.openstreetmap.org/traces) في غضون ساعة حيث ستكون متاحة لك وللآخرين لعرضها والبحث عنها واستخدامها.
:::


### تحميل مسار GPS {#upload-gps-track}


<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![المكون الإضافي لتعديل OpenStretMap GPX إلى OSM أندرويد](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المكون الإضافي لتعديل OpenStretMap GPX إلى OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

لـ [تحميل مسار GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks)، اتبع الخطوات التالية:

- ابحث عن المسار المطلوب في علامة التبويب [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- انقر على *قائمة النقاط الثلاث* بجوار اسم المسار وحدد *تصدير*.

**الإعدادات:**

- **<Translate android="true" ids="shared_string_description"/>**. يسمح لك بإضافة وصف للمسار. ينطبق الوصف على جميع المسارات المحددة. إذا لم تدخل شيئًا في الحقل، يتم استخدام أسماء المسارات لكل مسار منفصل كأوصاف.
- **<Translate android="true" ids="gpx_tags_txt"/>**. يسمح لك هذا العنصر في قسم الإعدادات بإضافة علامات لتحديد المسار. العلامة الافتراضية هي "osmand"، يمكنك إدخال علامات إضافية مفصولة بفواصل.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. رؤية المسار لمستخدمي OSM:
   - *عام* يعني أن المسار متاح للجمهور ويتم عرضه في شكله الخام في مسارات GPS الخاصة بك، وقوائم مسارات GPS، وقوائم المسارات ذات الطابع الزمني. البيانات المرسلة عبر API لا يتم الإشارة إليها بصفحة المسار الخاصة بك. الطوابع الزمنية لنقاط التتبع غير متاحة عبر واجهة برمجة تطبيقات GPS العامة ونقاط التتبع ليست مرتبة زمنيًا.
   - *قابل للتحديد* يعني أن المسار سيتم عرضه للجمهور في نقاط مسار GPS الخاصة بك وقوائم مسارات GPS العامة، مما يعني أن المستخدمين الآخرين سيكونون قادرين على تنزيل المسار الخام وربطه باسم المستخدم الخاص بك. بيانات نقاط المسار ذات الطابع الزمني العامة من واجهة برمجة تطبيقات GPS التي تم تمريرها عبر واجهة برمجة تطبيقات نقاط المسار سترتبط بصفحة المسار الأصلية الخاصة بك.
   - *قابل للتتبع* يعني أن المسار لا يتم عرضه في القوائم العامة، ولكن نقاط المسار المعالجة ذات الطوابع الزمنية منه (التي لا يمكن ربطها بك مباشرة) يتم تحميلها من واجهة برمجة تطبيقات GPS العامة.
   - *خاص* يعني أن المسار لا يتم عرضه في القوائم العامة، ولكن نقاط المسار منه بترتيب غير زمني متاحة عبر واجهة برمجة تطبيقات GPS العامة بدون طوابع زمنية.
- **<Translate android="true" ids="login_account"/>** - [حساب OSM](https://www.openstreetmap.org/login).

:::info
يمكنك تحديد أكثر من مسار واحد لتحميله إلى OSM. للقيام بذلك، انقر على أيقونة *تحميل إلى OpenStreetMap* في أسفل الشاشة، وحدد المسارات باستخدام مربع الاختيار، وانقر على *تحميل*، ثم *متابعة*.
:::

### إنشاء ملف OBF {#generate-obf-file}

يمكنك إنشاء ملف OBF باستخدام [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) إذا كان لديك قاعدة بيانات كبيرة لمسارات GPX. هذه مجموعة من المسارات من osmand.net مع علامة 'gpsies'، أو مجموعة من المسارات التي تم تنزيلها من OpenStreetMap أو مجموعتك الخاصة.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخريطة)](../../user/map/vector-maps.md)

> *آخر تحديث: مايو 2024*