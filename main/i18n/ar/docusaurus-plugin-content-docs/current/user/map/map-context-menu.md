---
source-hash: 3e1b165cea4cde57aec3170e4074d5cdef9d0ee2790e533d93987ac6b523addc
sidebar_position: 3
title: قائمة سياق الخريطة
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

توفر قائمة سياق الخريطة معلومات حول الكائن المحدد على الخريطة. يمكنك أيضًا استخدامها لإنشاء مسار إلى الموقع المحدد. لفتح قائمة السياق، ابحث أولاً عن الموقع المطلوب على الخريطة، ثم حدد الكائن بنقرة قصيرة أو نقرة طويلة عند تحديد أي نقطة دقيقة على الخريطة.


### تحديد كائن (نقرة واحدة) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة السياق في أندرويد](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة السياق في iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

تظهر **قائمة السياق** عندما **تنقر مرة واحدة** على كائن محدد على الخريطة. تعرض قائمة السياق هذه معلومات أساسية حول الكائن المحدد، بما في ذلك *اسمه*، و*أيقونته* (كما هي ممثلة على الخريطة)، و*عنوانه، والمسافة*، و*الحدود* و*الاتجاه* من موقعك الحالي.

يمكنك تحديد أنواع مختلفة من كائنات الخريطة، مثل *نقاط الاهتمام*، و*المفضلة*، و*محطات النقل*، و*العلامات*، و*قمم الجبال*، أو *كائنات الخريطة الأخرى*.

:::note
- تتوافق كائنات الخريطة المحددة وحدودها مع [**عُقد**](https://wiki.openstreetmap.org/wiki/Node) أو [**طرق**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
- *يتم عرض ارتفاع قمم الجبال بالأمتار أو الأقدام اعتمادًا على [وحدات الطول](../personal/profiles.md#units--formats) المحددة في إعدادات الملف الشخصي.*
:::



### تحديد أي نقطة (نقرة طويلة) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة السياق بنقرة طويلة في أندرويد](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة السياق بنقرة طويلة في iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

عندما **تنقر نقرة طويلة** في أي مكان على الخريطة، تظهر **قائمة سياق** توفر معلومات حول الموقع المحدد. يتضمن ذلك العنوان والمسافة والاتجاه من موقعك الحالي.


### تحديد مسار GPX {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة سياق المسار في أندرويد](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![شاشة إحصائيات المسار في iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

يؤدي النقر على [مسار GPX](../map/tracks/index.md) على الخريطة إلى فتح [قائمة سياق المسار](../map/tracks/track-context-menu.md)، حيث يمكنك الوصول إلى خيارات إضافية متعلقة بالمسار.



### المسارات ومنحدرات التزلج والممرات {#routes-and-trails}

![منحدرات التزلج ومسارات الدراجات الجبلية](@site/static/img/map/ski_mtb.png)  ![منحدرات التزلج ومسارات الدراجات الجبلية](@site/static/img/map/ski_mtb_2.png)

يمكنك النقر على عناصر الخريطة مثل **منحدرات التزلج**، و**مسارات الدراجات الجبلية (MTB)**، و**ممرات الدراجات الترابية** لفتح قائمة السياق الخاصة بها مع معلومات مفصلة. تحقق من [مقالة المسارات](../map/routes.md#actions-with-routes) لمزيد من المعلومات.



### إخفاء قائمة السياق {#hide-context-menu}

لإغلاق **قائمة السياق**:

- انقر على أي *منطقة فارغة* على الخريطة لتجنب إعادة فتح القائمة.
- اسحب القائمة *لأسفل* من الأعلى.


## التفاصيل {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة السياق في أندرويد](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة السياق في iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

لمزيد من المعلومات التفصيلية حول كائن ما، انقر على زر **التفاصيل** في قائمة السياق أو اسحب اللوحة لأعلى لتوسيعها.


### معلومات الكائن {#object-info}

توفر لوحة **معلومات الكائن** تفاصيل إضافية حول الكائن المحدد. يمكنك النقر على أي إدخال لنسخ المعلومات إلى الحافظة.

تشمل التفاصيل المتاحة:

- [الأسماء البديلة](#alternative-names)
- [الإحداثيات](#coordinates)
- [ضمن مناطق](#polygon-information)
- [نقاط الاهتمام القريبة / ويكيبيديا](#nearby-pois--wikipedia)
- [مسارات النقل العام للمحطات](#public-transport-routes)
- [المفضلة / نقاط المسار من نفس المجموعة](#favorites--track-points-from-the-group)
- [رابط OpenStreetMap](#openstreetmap-link)
- [الصور عبر الإنترنت](#online-photos)

بالإضافة إلى ذلك، قد تتضمن اللوحة [تفاصيل OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features)، مثل:

- [الموقع الإلكتروني](https://wiki.openstreetmap.org/wiki/Key:website)
- [رقم الهاتف](https://wiki.openstreetmap.org/wiki/Key:contact)
- [ساعات العمل](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [الرسوم](https://wiki.openstreetmap.org/wiki/Key:fee)
- [إمكانية الوصول](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [العرض](https://wiki.openstreetmap.org/wiki/Key:width) / [الارتفاع](https://wiki.openstreetmap.org/wiki/Key:height)


### الأسماء البديلة {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![الأسماء البديلة في أندرويد 1](@site/static/img/map/alternative_names_andr_1.png) ![الأسماء البديلة في أندرويد](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الأسماء البديلة في iOS 1](@site/static/img/map/alternative_names_1_ios.png) ![الأسماء البديلة في iOS 2](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

يعرض OsmAnd **أسماء نقاط الاهتمام الإضافية** في *قائمة سياق الخريطة*، مع إعطاء الأولوية للاسم بلغة *العرض* أو قائمة اللغات المفضلة في النظام. إذا كانت هناك ترجمات متعددة متاحة، يتم تجميعها في علامات مصنفة مثل *الاسم، العلامة التجارية، المشغل،* أو *نقاط الاهتمام القريبة*.

ميزات عرض الأسماء البديلة:

- يمكن الوصول إلى الترجمات الإضافية من خلال *قائمة منسدلة*.

- يتم تصنيف الأسماء في مجموعات مختلفة مثل *قائمة الأسماء بلغات أخرى*، و*إقليمي*، و*محلي*، و*وطني*، و*دولي*، و*قصير*، و*قديم*، و*رسمي*، و*بديل*.

- تشمل الفئات الأخرى *الترجمة الخاصة بالمنطقة*، أو *الإعدادات الافتراضية*.

- إذا لم تكن ترجمة معينة *متاحة*، فإن OsmAnd يعود إلى الاسم **المحلي** لضمان الدقة والاتساق عبر المناطق متعددة اللغات.


### ضمن منطقة {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![معلومات المضلع في أندرويد](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![معلومات المضلع في iOS](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

تسرد ميزة **ضمن منطقة** **المناطق** التي يقع فيها الكائن. يشمل ذلك المعالم الجغرافية، والحدود الإدارية، ومناطق استخدام الأراضي، والمعالم الطبيعية، والمناطق المصنفة الأخرى. *قائمة بالمضلعات المحيطة*، مرتبة *من الأصغر إلى الأكبر* بناءً على حجم المنطقة.

### الإحداثيات {#coordinates}

|تنسيق الإحداثيات| |
|:------|:------|
| <ul><li>DDD.DDDDD (درجات عشرية بسيطة)</li><li>DDD.DDDDD (شمال/جنوب، شرق/غرب بفاصلة)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[معيار UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[رمز الموقع المفتوح](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[الشبكة السويسرية CH1903 و CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[رابط ويب OsmAnd](https://osmand.net/map)</li><li>[رابط ويب OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![الإحداثيات](@site/static/img/map/map_context_menu_Coordinates.png) |

في قائمة السياق، يمكنك العثور على [الإحداثيات الجغرافية](../search/search-coordinates.md#coordinate-format) لنقطة بتنسيقات مختلفة وأيضًا روابط OsmAnd و [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) القابلة للمشاركة (الخيار الأخير متاح فقط عند تمكين [ملحق تحرير OpenStreetMap](../plugins/osm-editing.md)). إذا قمت بتوسيع قسم الإحداثيات ونقرت نقرة طويلة على أي سطر من القائمة، فسيتم نسخ قيمه تلقائيًا إلى الحافظة (**أندرويد**) أو يصبح خيار *النسخ* متاحًا في الرسالة المنبثقة (**iOS**).

يمكن لـ OsmAnd التعرف تلقائيًا على رابط ويب OsmAnd (مثال: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). يتم فتح كل من روابط OsmAnd و [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) على المواقع المقابلة مع علامة دبوس لمكان الاهتمام.


### نقاط الاهتمام القريبة / ويكيبيديا {#nearby-pois--wikipedia}

![مقالات ويكيبيديا القريبة](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![مقالات ويكيبيديا القريبة](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

تعرض هذه الأقسام [مقالات ويكيبيديا](../plugins/wikipedia.md) القريبة أو [نقاط الاهتمام](../map/point-layers-on-map.md#points-of-interest-pois) مع *<Translate android="true" ids="shared_string_show_on_map"/>* و *<Translate android="true" ids="search_more"/>* لعرض و[البحث](../search/search-poi.md) عن جميع نقاط الاهتمام ومقالات ويكيبيديا الأخرى.

يؤدي النقر على *نقاط الاهتمام القريبة / مقالات ويكيبيديا* إلى فتح قائمة نقاط (نقاط اهتمام أو ويكيبيديا). يؤدي النقر على إحدى هذه النقاط من قائمة النقاط إلى نقل الخريطة إلى هذه النقطة (نقاط اهتمام أو ويكيبيديا) مع فتح قائمة سياق الخريطة للنقطة.

> **ملاحظة**. *سيظهر [<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) فقط إذا قمت مسبقًا بتنزيل خرائط خاصة مع [مقالات ويكيبيديا لهذه المنطقة](../plugins/wikipedia.md#download-wikipedia-packages)*.


### مسارات النقل العام {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![مسارات النقل العام في أندرويد](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسارات النقل العام في iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

معلومات معروضة حول مسارات النقل العام لمحطة النقل المختارة. للحصول على معلومات حول قائمة سياق النقل العام والإجراءات المتعلقة بها، اقرأ [المقالة](../map/public-transport.md#transport-routes-context-menu).


### المفضلة / نقاط المسار من المجموعة {#favorites--track-points-from-the-group}

![قائمة المفضلة](@site/static/img/map/favorite_list_android.png) ![قائمة المفضلة الكاملة](@site/static/img/map/favorite_list_full_android.png)

هذه قائمة بجميع النقاط في مجموعة واحدة لمفضلة أو نقطة طريق. بالنقر، تتوسع القائمة الكاملة لنقاط مجموعة واحدة، وعند النقر على نقطة من القائمة، تنتقل الخريطة إلى النقطة المحددة.




### وصف المقال {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة الوصف](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة الوصف](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

يحتوي هذا الجزء على جزء من الوصف من [مقالة ويكيبيديا](../plugins/wikipedia.md)، أو وصف [المفضلة](../personal/favorites.md) أو نقطة الطريق، وبالنقر يمكنك فتح الوصف الكامل.


### رابط OpenStreetMap {#openstreetmap-link}

![رابط OSM](@site/static/img/map/context_menu_osm_link.png) ![رابط OSM](@site/static/img/map/context_menu_osm_link_1.png)

يوفر رابط OpenStreetMap رابطًا مباشرًا إلى كائن OpenStreetMap حيث يمكنك العثور على معلومات كاملة عنه:
[عقدة](https://wiki.openstreetmap.org/wiki/Node) أو [طريق](https://wiki.openstreetmap.org/wiki/Way).


### الصور عبر الإنترنت {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة سياق الصور عبر الإنترنت في أندرويد](@site/static/img/map/images_nearby_1_andr.png)
![قائمة سياق الصور عبر الإنترنت في أندرويد](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة سياق الصور عبر الإنترنت في iOS](@site/static/img/map/online_photo_ios.png)
![قائمة سياق الصور عبر الإنترنت في iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

عندما تنقر على مكان شهير على الخريطة، يعرض قسم **الصور عبر الإنترنت** في *قائمة سياق نقاط الاهتمام* معاينات للصور مأخوذة من [ويكيبيديا](https://www.wikipedia.org/) و [ويكيميديا كومنز](https://www.wikimedia.org/).

يؤدي النقر على صورة إلى فتح عرض **المعرض**، حيث يمكنك:

- تصفح ما يصل إلى 100 صورة لكل مكان
- عرض البيانات الوصفية للصورة (*المؤلف*، *الترخيص*، *المصدر*)
- تنفيذ الإجراءات: **مشاركة**، **فتح في المتصفح**، **تنزيل**

> *في iOS، يؤدي النقر المطول على صورة إلى فتح قائمة سياق مع إجراءات سريعة.*

لمزيد من المعلومات، انظر: [الصور عبر الإنترنت](https://osmand.net/docs/user/map/popular_places#online-photos) و [عرض المعرض](https://osmand.net/docs/user/map/popular_places#gallery)


### صور على مستوى الشارع {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![صور على مستوى الشارع في أندرويد](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![صور على مستوى الشارع في iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

يدعم OsmAnd التكامل مع [Mapillary](https://www.mapillary.com/)، وهي منصة عالمية للصور على مستوى الشارع من مصادر جماعية. تتيح لك هذه الميزة عرض واستكشاف تسلسلات الصور الواقعية مباشرة على الخريطة.

تظهر صور Mapillary كأيقونات صور اتجاهية، متوافقة مع الطريق أو المسار الذي تم التقاطها فيه. يمكن أن تساعدك هذه الصور على فهم محيطك بشكل أفضل، خاصة في المناطق غير المألوفة.

يمكنك:

- استخدام زر **استكشاف** لفتح عارض Mapillary وتصفح الصور القريبة على مستوى الشارع.
- النقر على زر **إضافة صور** للمساهمة بصورك الخاصة في منصة Mapillary.

> *تعرف على المزيد حول كيفية تنشيط واستخدام هذه الميزة في [دليل ملحق Mapillary](../plugins/mapillary.md).*


### * ملاحظة صوتية/فيديو {#-audiovideo-note}

<InfoAndroidOnly />

![قائمة الصور](@site/static/img/map/image_list_android.png) ![قائمة الفيديو](@site/static/img/map/video_list_android.png)

تتوفر معلومات [ملاحظات الصوت / الفيديو](../plugins/audio-video-notes.md) مثل التاريخ والإحداثيات والمعاينة وغيرها في قائمة **التفاصيل**. يمكنك فتح الملاحظات في برنامج ثانوي عن طريق النقر على زر **تشغيل / عرض** في قائمة سياق الملاحظة.


## الإجراءات {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة الإجراءات في أندرويد](@site/static/img/map/actions_menu_android.png) ![قائمة الإجراءات الإضافية في أندرويد](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة الإجراءات في iOS](@site/static/img/map/actions_menu_ios.png)  ![قائمة الإجراءات الإضافية في iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

إنها مجموعة من المعالجات المحددة التي يمكن إجراؤها على نقطة أو كائن. تنقسم هذه القائمة إلى جزأين: يتكون القسم المرئي من 3 إجراءات كحد أقصى ويمكن الوصول إلى الإجراءات الأخرى عن طريق زر *الإجراءات*. يمكنك تخصيص (*أندرويد*) ترتيب الإجراءات في [الإعدادات العامة](#customize).


### إضافة / تحرير المفضلة {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء إضافة/تحرير المفضلة في أندرويد](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء إضافة/تحرير المفضلة في iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

في قائمة السياق، توجد خيارات **لإضافة** أو **لتحرير** النقطة / الكائن المحدد إلى [قائمة المفضلة](../personal/myplaces.md).

- **للإضافة**، تحتاج إلى تحديد نقطة / كائن، والنقر على أيقونة *النجمة* (مع توقيع إضافة) وإدخال جميع المعلومات اللازمة.

- **لتحرير** معلومات حول نقطة مفضلة، تحتاج إلى تشغيل *عرض على الخريطة* (*القائمة ← أماكني ← المفضلة*) ثم الضغط عليها وفي قائمة السياق بدلاً من أيقونة *النجمة* ستظهر *أيقونة قلم رصاص* (مع توقيع تحرير).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - يضيف نقطة محددة إلى قائمة المفضلة.


### إضافة / تحرير علامة {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء إضافة/تحرير علامة في أندرويد](@site/static/img/map/add_marker_android.png) ![إجراء تمرير علامة في أندرويد](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء إضافة/تحرير علامة في iOS](@site/static/img/map/add_marker_ios.png)  ![إجراء استعادة علامة في أندرويد](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

من الممكن تحديد نقطة أو كائن لتسهيل تخطيط الملاحة. ما عليك سوى النقر على أيقونة **العلم** في القائمة (*أندرويد*)، **السهم** (*iOS*) - يعرض الاتجاه والمسافة إلى النقطة المحددة من موقعك الحالي.

الإجراءات:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). يضع علامة جديدة على النقطة المحددة.
- **وضع علامة "تم المرور بها"** (*أندرويد*) / *تجاهل* (*iOS*). يعطل العلامة ويضعها في السجل.
- **جعلها نشطة** (*أندرويد*). ينقل العلامة إلى الموضع العلوي (في اللوحة العلوية).
- **استعادة العلامة** (*أندرويد*). ينقل العلامة من السجل إلى القائمة النشطة.

اقرأ المزيد عن [العلامات هنا](../personal/markers.md).


### مشاركة {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

| إصدارات حتى أندرويد 14 | أندرويد 14+ |
|:------------|:---------------|
| ![إجراء المشاركة في أندرويد](@site/static/img/map/action_share_1_andr.png) | ![إجراء المشاركة في أندرويد](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء المشاركة في iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

يسمح لك تطبيق OsmAnd بـ **<Translate android="true" ids="shared_string_share"/>** *موقعي* أو أي موقع محدد على الخريطة مع برامج المراسلة أو رسائل البريد الإلكتروني أو وسائل التواصل الاجتماعي.

الخيارات المتاحة لمشاركة الموقع:

- ***إرسال***. يرسل نصًا عبر التطبيقات المتاحة على جهازك. يتضمن جميع المعلومات حول الموقع: اسم موقعي أو اسم نقطة الاهتمام المحددة، والعنوان، والإحداثيات، والموقع الجغرافي كرابط.
- ***نسخ***. ينسخ جميع معلومات الموقع (اسم موقعي أو اسم نقطة الاهتمام المحددة، والعنوان، والإحداثيات، والموقع الجغرافي كرابط) إلى الحافظة.
- ***نسخ العنوان***. ينسخ معلومات العنوان فقط إلى الحافظة.
- ***نسخ اسم نقطة الاهتمام***. ينسخ اسم نقطة الاهتمام فقط أو العنوان إذا لم يكن هناك اسم إلى الحافظة.
- ***نسخ الإحداثيات***. ينسخ معلومات الإحداثيات فقط إلى الحافظة.
- ***geo***. يفتح قائمة بالتطبيقات المتاحة التي تدعم المواقع الجغرافية. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***رمز الاستجابة السريعة (QR-code)*** (*أندرويد*). ينشئ رابطًا للموقع المحدد في رمز استجابة سريعة.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### الاتجاهات إلى / من {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![الاتجاهات في أندرويد](@site/static/img/map/action_directions_android.png)

![اتجاهات متعددة في أندرويد](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![الاتجاهات في iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

لبدء الملاحة أو تخطيط المسار، تحتاج إلى تحديد الوجهة أولاً باستخدام [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). في حال كان لديك بالفعل نقطة وجهة، ستقترح عليك القائمة استبدال نقطة الوجهة أو إدراجها كنقطة انطلاق أو نقطة وسيطة أخرى.

من الممكن أيضًا تحديد وجهة *من* أولاً عبر قائمة سياق الخريطة (<Translate android="true" ids="context_menu_item_directions_from"/>).

اقرأ المزيد عن [الملاحة هنا](../navigation/setup/route-navigation.md).

:::note انقر على بدء الملاحة
إذا نقرت على **بدء الملاحة** - سيتم تجاهل نقطة *من* حيث يدخل التطبيق في وضع الملاحة. للحفاظ على المسار، لا تنقر على *بدء الملاحة* و [**اسحب لأسفل**](#hide-context-menu) قائمة *إعداد المسار*.
:::


### البحث في الجوار {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء البحث في أندرويد](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء البحث في iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

باستخدام هذا الإجراء في قائمة السياق، من الممكن البحث حول موقع معين على الخريطة.

اقرأ المزيد عن وظيفة [البحث](../search/index.md).


### تجنب الطريق {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![تجنب الطريق على الخريطة في أندرويد](@site/static/img/map/action_avoid_android.png) ![تجاهل الطريق المتجنب في أندرويد](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تجنب الطريق على الخريطة في iOS](@site/static/img/map/avoid_route_ios_1.png) ![تجاهل الطريق المتجنب في iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

باستخدام قائمة سياق الخريطة، يمكنك إضافة طريق معين إلى قائمة الطرق غير المستخدمة للتوجيه. سيؤثر ذلك على [إعداد المسار](../navigation/setup/route-navigation.md).
لحذف الطرق المحددة مسبقًا من *[قائمة تجنب الطرق](../navigation/routing/osmand-routing.md#avoid-roads-menu)*، انقر على علامة، واختر *إزالة* (**أندرويد**) أو *تجاهل* (**iOS**).

:::note
وظيفة تجنب الطرق عالمية وتؤثر على جميع *[أنواع التوجيه](../navigation/routing/osmand-routing.md#routing-types)* (باستثناء *[التوجيه عبر الإنترنت](../navigation/routing/online-routing.md)*).
:::


### تغيير موضع الكائن {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء تغيير الموضع في أندرويد](@site/static/img/map/action_change_position_android.png)

![واجهة مستخدم إجراء تغيير الموضع في أندرويد](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء تغيير الموضع في iOS](@site/static/img/map/action_change_position_ios.png)

![واجهة مستخدم إجراء تغيير الموضع في iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

تقريبًا كل كائن أنشأه المستخدم قابل للنقل، أي العلامة، المفضلة، نقطة الاهتمام المنشأة، ملاحظة الصوت/الفيديو أو نقطة طريق المسار. حدد أولاً كائنًا على الخريطة ثم استخدم قائمة *<Translate android="true" ids="change_markers_position"/>* لنقله إلى موقع جديد.


### تخطيط مسار {#plan-a-route}

![إجراء تخطيط مسار في أندرويد](@site/static/img/map/action_plan_route_android.png)

يمكنك بدء تخطيط مسار من نقطة محددة عبر قائمة سياق الكائن.

اقرأ المزيد عن أداة [تخطيط مسار](../plan-route/create-route.md).


### تحديث / تنزيل الخرائط عبر الإنترنت {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء تنزيل خريطة عبر الإنترنت في أندرويد](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء تنزيل خريطة عبر الإنترنت في iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

لتحديث أو تنزيل الخرائط عبر الإنترنت (البلاطات) في موقع معين، يمكنك استخدام قائمة سياق الكائن:

- **أندرويد**: *<Translate android="true" ids="shared_string_download_map"/>* ولـ *التحديث*، اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* و *<Translate ios="true" ids="update_tile"/>*.

يرجى قراءة [التعليمات الكاملة](../map/raster-maps.md#download--update-tiles).


### تحديث / تنزيل الخرائط المتجهة {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء تنزيل خريطة متجهة في أندرويد](@site/static/img/map/action_download_vector_map_android.png)

![تحديد خريطة متجهة عالمية على أندرويد](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء تنزيل خريطة متجهة في iOS](@site/static/img/map/action_download_vector_map_ios.png)

![تحديد خريطة متجهة على iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

في حال عدم وجود خريطة غير متصلة بالإنترنت في الموقع المحدد، على سبيل المثال تم فتح قائمة كائن الخريطة عبر البحث أو عبر مفضلة معينة، فسيتم اقتراح أصغر خريطة غير متصلة بالإنترنت ممكنة [للتنزيل](../start-with/download-maps.md#select-on-the-map).

**iOS**. إذا كنت قد [قمت بتنزيل](../map/map-context-menu.md) خرائط OsmAnd (متجهة أو تضاريس)، فمن الممكن تحديثها عبر قائمة السياق. ستحتاج إلى تحديد المنطقة على الخريطة أولاً - انقر على أي موقع على تكبير عالمي 3-7.

> **ملاحظة**. *إذا فتحت قائمة السياق لمنطقة خريطة (المنطقة مظللة)، فستتمكن من رؤية ***<Translate android="true" ids="rendering_category_details"/>*** عنها: نوع وحجم الخريطة المتاحة، ورابط إلى صفحة ويكيبيديا، واللغة، والسكان وغيرها.*


### * إضافة / حذف نقطة وقوف السيارات {#-add--delete-parking-point}

:::note
لإضافة/حذف نقاط وقوف السيارات، قم بتمكين [**ملحق موقع وقوف السيارات**](../plugins/parking.md) في OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء وقوف السيارات في أندرويد](@site/static/img/map/action_parking_android.png)

![إجراء حذف وقوف السيارات في أندرويد](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء وقوف السيارات في iOS](@site/static/img/map/action_parking_ios.png)

![إجراء حذف وقوف السيارات في iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

يمكن تمييز أي موقع محدد على الخريطة [كموقع لوقوف السيارات](../plugins/parking.md). لحذف موقع وقوف السيارات، يمكنك فتح قائمة السياق المرتبطة بموقع وقوف السيارات.


### * إضافة / تحرير نقطة طريق المسار {#-add--edit-track-waypoint}

:::note
لإضافة/تحرير نقاط المسار، قم بتمكين [**ملحق تسجيل الرحلات**](../plugins/trip-recording.md) في OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء نقطة الطريق في أندرويد](@site/static/img/map/action_waypoint_android.png)

![تحديد مسار لإضافة نقطة طريق في أندرويد](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء نقطة الطريق في iOS](@site/static/img/map/action_waypoint_ios.png)

![تحديد مسار لإضافة نقطة طريق في iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

يمكنك إضافة نقاط طريق إلى مسار مسجل أو إلى تسجيل المسار الحالي باستخدام قائمة سياق الخريطة.

- حدد موقعًا على الخريطة [بنقرة طويلة](../map/map-context-menu.md#select-any-point-long-tap).
- في *قائمة سياق الخريطة* التي تفتح، اختر *الإجراءات ← إضافة نقطة طريق للمسار*.
- تعرض القائمة [المسارات](../map/tracks/index.md#display-tracks-on-the-map) المسجلة والمعروضة على الخريطة، بالإضافة إلى [تسجيل المسار الحالي](../plugins/trip-recording.md)، الذي يمكنك إضافة نقطة الطريق المحددة إليه.
- يمكنك إضافة نقاط طريق إلى مسار لم يتم تنشيطه بعد للتسجيل، وفي هذه الحالة ينتقل المسار غير النشط من *حالة البدء* إلى *حالة الاستئناف*.
- [املأ](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) البيانات المطلوبة واحفظ نقطة الطريق.
- يمكنك تكوين [الإجراءات السريعة](../widgets/quick-action.md) عن طريق إضافة نقطة طريق إلى *إضافة نقطة طريق للمسار*.


### * إنشاء / تعديل نقطة اهتمام {#-create--modify-poi}

:::note
لإنشاء/تعديل نقاط الاهتمام، قم بتمكين [**ملحق تحرير OSM**](../plugins/osm-editing.md) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء نقطة الاهتمام في أندرويد](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء نقطة الاهتمام في iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

باستخدام ملحق تحرير OSM، يمكنك إنشاء وتعديل معظم نقاط الاهتمام الموجودة على [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [ينشئ نقطة اهتمام جديدة](../plugins/osm-editing.md#create--modify-poi) في الموقع المحدد.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [يعدل نقطة الاهتمام المحددة](../plugins/osm-editing.md#create--modify-poi).


### * فتح ملاحظة OSM {#-open-osm-note}

:::note
لفتح ملاحظة OSM، قم بتمكين [**ملحق تحرير OSM**](../plugins/osm-editing.md) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إجراء الملاحظة في أندرويد](@site/static/img/map/action_note_android.png)

![إجراء إضافة ملاحظة في أندرويد](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء الملاحظة في iOS](@site/static/img/map/action_note_ios.png)

![إجراء إضافة ملاحظة في iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

يمكنك **الإبلاغ** عن أخطاء بيانات الخريطة في موقع معين إلى [مجتمع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). يرجى اتباع [الإرشادات](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) وإضافة تعليقات مناسبة على المشكلة.


### * التعليق / إغلاق ملاحظة OSM {#-comment--close-osm-note}

:::note
للتعليق/إغلاق ملاحظة OSM، قم بتمكين [**ملحق تحرير OSM**](../plugins/osm-editing.md) في OsmAnd.
:::

![التعليق على ملاحظة OSM في أندرويد](@site/static/img/map/action_comment_note_android.png) ![إعادة فتح ملاحظة OSM في أندرويد](@site/static/img/map/action_reopen_note_android.png)

يمكنك [التعليق](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes)، و[حل](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) وإعادة فتح
ملاحظات OpenStreetMap عبر قائمة سياق الكائن.


### * رفع نقطة اهتمام / ملاحظة OSM {#-upload-poi--osm-note}

:::note
لرفع نقطة اهتمام / ملاحظة OSM، قم بتمكين [**ملحق تحرير OSM**](../plugins/osm-editing.md) في OsmAnd.
:::

![رفع نقطة اهتمام في أندرويد](@site/static/img/map/action_poi_upload_android.png) ![رفع ملاحظة OSM في أندرويد](@site/static/img/map/action_note_upload_android.png)

في حال استخدامك *الوضع غير المتصل* لإضافة / تحرير نقطة اهتمام أو ملاحظة OSM، ستحتاج إلى رفع التغييرات إلى OpenStreetMap. بشكل افتراضي، يكون *الوضع غير المتصل* قيد التشغيل لتجنب التغييرات العرضية في قاعدة البيانات العامة. يمكنك رفع أو حذف التغيير عبر قائمة سياق الكائن الذي تم إنشاؤه.


### * تسجيل ملاحظة صوتية/مرئية {#-record-av-note}

<InfoAndroidOnly />

:::note
لتسجيل ملاحظات صوتية/مرئية، قم بتمكين [**ملحق ملاحظات الصوت/الفيديو**](../plugins/audio-video-notes.md) في OsmAnd.
:::

![إجراء الصوت والفيديو في أندرويد](@site/static/img/map/action_av_note_android.png)

يسجل أو يلتقط ملاحظة وسائط في نقطة محددة على الخريطة.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - يقوم بعمل [ملاحظة صوتية](../map/point-layers-on-map.md#-audio--video-points-android) عند النقطة المحددة (ينشئ نقطة جديدة على الطبقة مع أيقونة صوت).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - يقوم بعمل [ملاحظة فيديو](../map/point-layers-on-map.md#-audio--video-points-android) عند النقطة المحددة (ينشئ نقطة جديدة على الطبقة مع أيقونة فيديو).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - يقوم بعمل [نقطة صورة](../map/point-layers-on-map.md#-audio--video-points-android) على الخريطة.


## تخصيص {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![تخصيص قائمة سياق الخريطة](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![تخصيص قائمة سياق الخريطة](@site/static/img/map/map_context_menu_customize_2.png) -->  ![تخصيص قائمة سياق الخريطة](@site/static/img/map/map_context_menu_customize_3.png)

يمكنك تغيير الترتيب أو إخفاء العناصر من قائمة *الإجراءات* في *قائمة سياق الخريطة*. يُقترح ما مجموعه 16 إجراءً.

- يمكنك نقل الإجراءات الثلاثة الأكثر فائدة إلى أعلى قائمة *الإجراءات الرئيسية*.
- يمكن تخصيص بقية القائمة لكل ملف شخصي على حدة في قسمي *الإجراءات الإضافية* و*المخفية*.

أنواع الإجراءات المتاحة:

- **<Translate android="true" ids="main_actions"/>**. يحتوي القسم على 4 أزرار فقط، يمكن تخصيص ثلاثة منها، ويبقى زر الإجراءات دون تغيير.
- **<Translate android="true" ids="additional_actions"/>**. يمكنك الوصول إلى هذه الإجراءات عن طريق النقر على زر *الإجراءات*.
- **<Translate android="true" ids="shared_string_hidden"/>**. نقل الإجراءات إلى هذا القسم لا يوقف عملها. إنها فقط لا تظهر في قائمة الإجراءات.


## مقالات ذات صلة {#related-articles}

- [الخرائط المتجهة (أنماط الخريطة)](./vector-maps.md)
- [الخرائط النقطية (عبر الإنترنت / دون اتصال)](./raster-maps.md)
- [النقاط على الخريطة](./point-layers-on-map.md)
- [قائمة سياق المسارات](./tracks/track-context-menu.md)
- [النقل العام](./public-transport.md)
- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)