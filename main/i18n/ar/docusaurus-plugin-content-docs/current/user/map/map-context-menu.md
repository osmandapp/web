---
source-hash: 3f3b85046b389da6c840d6ec98c139f32b2f5116b6d2eb8c376445af5e4cf4bf
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

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![قائمة السياق أندرويد](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة السياق iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

تظهر **قائمة السياق** عند **النقر مرة واحدة** على كائن معلم على الخريطة. تعرض قائمة السياق هذه معلومات أساسية حول الكائن المحدد، بما في ذلك *اسمه، ورمزه* (كما هو ممثل على الخريطة)، *وعنوانه، ومسافته*، و*اتجاهه* من موقعك الحالي.

يمكنك تحديد أنواع مختلفة من كائنات الخريطة، مثل *نقاط الاهتمام (POIs)*، *المفضلة*، *محطات النقل*، *العلامات*، *قمم الجبال*، أو *كائنات الخريطة* الأخرى.

:::note
تتوافق كائنات الخريطة المحددة مع [**العقد**](https://wiki.openstreetmap.org/wiki/Node) أو [**المسارات**](https://wiki.openstreetmap.org/wiki/Way) في OpenStreetMap.
:::

> *يتم عرض ارتفاع قمم الجبال بالمتر أو القدم حسب [وحدات الطول](../personal/profiles.md#units--formats) المختارة في إعدادات الملف الشخصي.*


### تحديد أي نقطة (نقرة طويلة) {#select-any-point-long-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![قائمة السياق نقرة طويلة أندرويد](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة السياق نقرة طويلة iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

عند **النقر طويلاً** في أي مكان على الخريطة، تظهر **قائمة سياق** توفر معلومات حول الموقع المحدد. يتضمن ذلك العنوان والمسافة والاتجاه من موقعك الحالي.

> **ملاحظة**. *النقر طويلاً على **رقم مبنى** يبرز حدوده ويفتح قائمة سياق الخريطة*


### تحديد المسار {#select-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![قائمة سياق المسار أندرويد](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![شاشة إحصائيات المسار iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

يؤدي النقر على [مسار GPX](../map/tracks/index.md) على الخريطة إلى فتح [قائمة سياق المسار](../map/tracks/track-context-menu.md)، حيث يمكنك الوصول إلى خيارات إضافية متعلقة بالمسار.


### إخفاء قائمة السياق {#hide-context-menu}

لإغلاق **قائمة السياق**:

- انقر على أي *منطقة فارغة* على الخريطة لتجنب إعادة فتح القائمة.
- اسحب القائمة *لأسفل* من الأعلى.


## التفاصيل {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![قائمة السياق أندرويد](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة السياق iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

للحصول على معلومات أكثر تفصيلاً حول كائن ما، انقر على زر **التفاصيل** في قائمة السياق أو اسحب اللوحة لأعلى لتوسيعها.


### معلومات الكائن {#object-info}

توفر لوحة **معلومات الكائن** تفاصيل إضافية حول الكائن المحدد. يمكنك النقر على أي إدخال لنسخ المعلومات إلى الحافظة.

التفاصيل المتاحة تشمل:

- [الأسماء البديلة](#alternative-names)
- [الإحداثيات](../map/map-context-menu.md#coordinates)
- [نقاط الاهتمام القريبة / ويكيبيديا](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [مسارات النقل العام](../map/map-context-menu.md#public-transport-routes) (لمحطات النقل)
- [المفضلة / نقاط المسار من نفس المجموعة](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [رابط OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [صورة / وصف المقال](../map/map-context-menu.md#article-description-article-description)
- [الصور عبر الإنترنت](../map/map-context-menu.md#online-photos)

بالإضافة إلى ذلك، قد تتضمن اللوحة [تفاصيل OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features)، مثل:

- [الموقع الإلكتروني](https://wiki.openstreetmap.org/wiki/Key:website)
- [رقم الهاتف](https://wiki.openstreetmap.org/wiki/Key:contact)
- [ساعات العمل](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [الرسوم](https://wiki.openstreetmap.org/wiki/Key:fee)
- [إمكانية الوصول](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [العرض](https://wiki.openstreetmap.org/wiki/Key:width) / [الارتفاع](https://wiki.openstreetmap.org/wiki/Key:height)


### الأسماء البديلة {#alternative-names}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![أسماء بديلة أندرويد 1](@site/static/img/map/alternative_names_andr_1.png) ![أسماء بديلة أندرويد](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أسماء بديلة أندرويد 1](@site/static/img/map/alternative_names_1_ios.png) ![أسماء بديلة أندرويد](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

يعرض OsmAnd **أسماء نقاط الاهتمام الإضافية** في *قائمة سياق الخريطة*، مع إعطاء الأولوية للاسم بلغة العرض أو قائمة اللغات المفضلة للنظام. إذا توفرت ترجمات متعددة، يتم تجميعها في علامات مصنفة مثل *الاسم، العلامة التجارية، المشغل،* أو *نقاط الاهتمام القريبة*.

ميزات عرض الأسماء البديلة:

- يمكن الوصول إلى ترجمات إضافية من خلال *قائمة منسدلة*.

- يتم تصنيف الأسماء إلى مجموعات مختلفة مثل *قائمة الأسماء بلغات أخرى*، *إقليمية*، *محلية*، *وطنية*، *دولية*، *قصيرة*، *قديمة*، *رسمية*، و*بديلة*.

- تشمل الفئات الأخرى *الترجمة الخاصة بالمنطقة*، أو *الإعدادات الافتراضية*.

- إذا لم تكن ترجمة معينة *متاحة*، فإن OsmAnd يعود إلى الاسم **المحلي** لضمان الدقة والاتساق عبر المناطق متعددة اللغات.


### معلومات المضلع {#polygon-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![معلومات المضلع أندرويد](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![معلومات المضلع أندرويد](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

توفر ميزة **معلومات المضلع** بيانات مفصلة عن **المضلعات** القريبة المعروضة على الخريطة. يتضمن ذلك الميزات الجغرافية والحدود الإدارية والمناطق الأخرى المحددة على الخريطة.

**ضمن القسم**:

- يعرض *قائمة بالمضلعات المحيطة*، مرتبة *من الأصغر إلى الأكبر* بناءً على حجم المساحة.

- يعرض كل إدخال *نوع المضلع واسمه*، مما يتيح سهولة تحديد المناطق والحدود.

**تفاصيل إضافية**:

- عند تحديد نقطة على الخريطة أو نقطة اهتمام (POI)، تعرض لوحة **معلومات المضلع** قائمة بجميع المضلعات التي تحتوي على الموقع المحدد.

- تتضمن الإدخالات في القائمة **التقسيمات الإدارية، ومناطق استخدام الأراضي، والميزات الطبيعية، والمناطق المصنفة الأخرى**.

- تتيح اللوحة للمستخدمين **نسخ اسم المضلع وتفاصيله** للرجوع إليها.

- لعرض هذه المعلومات، انتقل إلى *قائمة سياق الخريطة ← التفاصيل ← ضمن*.

تساعدك هذه الميزة على فهم *موقعك الحالي* فيما يتعلق بالتقسيمات الإدارية المحددة على الخريطة، أو المناطق الطبيعية، أو الميزات الجغرافية الهامة الأخرى.


### الإحداثيات {#coordinates}

|تنسيق الإحداثيات| |
|:------|:------|
| <ul><li>DDD.DDDDD (درجات عشرية بسيطة)</li><li>DDD.DDDDD (شمال/جنوب، شرق/غرب فاصلة)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[معيار UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[رمز الموقع المفتوح](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[الشبكة السويسرية CH1903 و CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[رابط OsmAnd Web](https://osmand.net/map)</li><li>[رابط OpenStreetMap Web](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![الإحداثيات](@site/static/img/map/map_context_menu_Coordinates.png) |

في قائمة السياق، يمكنك العثور على [الإحداثيات الجغرافية](../search/search-coordinates.md#coordinate-format) لنقطة بتنسيقات مختلفة، وأيضًا روابط OsmAnd و [OpenStreetMap القابلة للمشاركة](../map/map-context-menu.md#openstreetmap-link) (الخيار الأخير متاح فقط عند تمكين [مكون OpenStreetMap الإضافي للتحرير](../plugins/osm-editing.md)). إذا قمت بتوسيع قسم الإحداثيات ونقرت طويلاً على أي سطر من القائمة، فسيتم نسخ قيمه تلقائيًا إلى الحافظة (**أندرويد**) أو يصبح خيار *نسخ* متاحًا في الرسالة المنبثقة (**iOS**).

يمكن التعرف على رابط OsmAnd Web تلقائيًا بواسطة OsmAnd (مثال: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). يتم فتح كل من روابط OsmAnd و [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) على المواقع المقابلة مع علامة دبوس لمكان الاهتمام.


### نقاط الاهتمام القريبة / ويكيبيديا {#nearby-pois--wikipedia}

![مقالات ويكيبيديا القريبة](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![مقالات ويكيبيديا القريبة](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

تعرض هذه الأقسام [مقالات ويكيبيديا](../plugins/wikipedia.md) أو [نقاط الاهتمام](../map/point-layers-on-map.md#points-of-interest-pois) القريبة مع *<Translate android="true" ids="shared_string_show_on_map"/>* و *<Translate android="true" ids="search_more"/>* لعرض و [البحث](../search/search-poi.md) عن جميع نقاط الاهتمام ومقالات ويكيبيديا الأخرى.

يؤدي النقر على *نقاط الاهتمام القريبة / مقالات ويكيبيديا* إلى فتح قائمة نقاط (نقاط اهتمام أو ويكيبيديا). يؤدي النقر على إحدى هذه النقاط من قائمة النقاط إلى نقل الخريطة إلى هذه النقطة (نقاط اهتمام أو ويكيبيديا) مع فتح قائمة سياق خريطة النقطة.

> **ملاحظة**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) سيظهر فقط إذا قمت بتنزيل خرائط خاصة مسبقًا تحتوي على [مقالات ويكيبيديا لهذه المنطقة](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.


### مسارات النقل العام {#public-transport-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![مسارات النقل العام أندرويد](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسارات النقل العام iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

معلومات معروضة حول مسارات النقل العام لمحطة النقل المختارة. معلومات حول قائمة سياق النقل العام والإجراءات المتعلقة بها، اقرأ في [المقال](../map/public-transport.md#transport-routes-context-menu).


### المفضلة / نقاط المسار من المجموعة {#favorites--track-points-from-the-group}

![قائمة المفضلة](@site/static/img/map/favorite_list_android.png) ![قائمة المفضلة كاملة](@site/static/img/map/favorite_list_full_android.png)

هذه قائمة بجميع النقاط في مجموعة واحدة للمفضلة أو نقطة الطريق. عند النقر، تتوسع القائمة الكاملة لنقاط مجموعة واحدة، وعند النقر على نقطة من القائمة، تنتقل الخريطة إلى النقطة المحددة.


### كائن خطي {#linear-object}

![قائمة المفضلة](@site/static/img/map/linear_object_andr.png)

بالنسبة **للكائنات الخطية**، مثل *الحواجز، الدرج، البوابات، المقاعد، المنحدرات، السدود، الأعمدة، أو الفتحات*، تعرض قائمة السياق تفاصيل إضافية. تتضمن هذه التفاصيل نوع نقطة الاهتمام (POI) والعنوان المرتبط بها، أو نوع الكائن إذا لم يتم تعيين اسم.


### منطقة التسلق وتفاصيل الصخرة {#climbing-area-and-crag-details}

![قائمة المفضلة](@site/static/img/map/climbing_andr.png)

عند تحديد [منطقة تسلق أو صخرة](../map/routes.md#climbing-routes)، يوفر OsmAnd ملخصًا مفصلاً لموقع التسلق، بما في ذلك: الاسم والموقع، تصنيف صعوبة التسلق (UIAA، الفرنسية، YDS، إلخ)، نوع الصخرة، الارتفاع وطول المسار، جودة التسلق وظروف السطح.


### منحدرات التزلج، مسارات الدراجات الجبلية، ومسارات الدراجات الترابية {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![منحدرات التزلج ومسارات الدراجات الجبلية](@site/static/img/map/ski_mtb.png) ![منحدرات التزلج ومسارات الدراجات الجبلية](@site/static/img/map/ski_mtb_2.png)

يمكنك النقر على عناصر الخريطة مثل **منحدرات التزلج**، و**مسارات الدراجات الجبلية (MTB)**، و**مسارات الدراجات الترابية** لفتح قائمة السياق الخاصة بها مع معلومات مفصلة. تتضمن المعلومات المتاحة: اسم المسار أو المنحدر (إذا كان متاحًا في بيانات OSM)، معرف كائن OSM أو معرف العلاقة، مستوى الصعوبة، طول المسار، نوع التضاريس، والمزيد.

**العلامات المدعومة:** `piste:type=*` (منحدرات التزلج)، `route=mtb`، `route=atv` أو `route=dirt_bike` (مسارات الدراجات النارية الوعرة)

:::note
استخدم أنماط الخريطة [الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) أو [الوعرة](../map/vector-maps.md#offroad) لتحسين الرؤية.
:::


### وصف المقال {#article-description}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![قائمة الوصف](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة الوصف](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

يحتوي هذا الجزء على جزء من الوصف من [مقال ويكيبيديا](../plugins/wikipedia.md)، [المفضلة](../personal/favorites.md) أو وصف نقطة الطريق، بالنقر يمكنك فتح الوصف الكامل.


### رابط OpenStreetMap {#openstreetmap-link}

![رابط OSM](@site/static/img/map/context_menu_osm_link.png) ![رابط OSM](@site/static/img/map/context_menu_osm_link_1.png)

يوفر رابط OpenStreetMap رابطًا مباشرًا لكائن OpenStreetMap حيث يمكنك العثور على معلومات كاملة عنه:
[عقدة](https://wiki.openstreetmap.org/wiki/Node) أو [طريق](https://wiki.openstreetmap.org/wiki/Way).


### الصور عبر الإنترنت {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![قائمة سياق الصور عبر الإنترنت أندرويد](@site/static/img/map/images_nearby_1_andr.png)
![قائمة المعرض أندرويد](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة سياق الصور عبر الإنترنت iOS](@site/static/img/map/online_photo_ios.png)
![قائمة المعرض iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

عند النقر على مكان شهير على الخريطة، يعرض قسم **الصور عبر الإنترنت** في *قائمة سياق نقاط الاهتمام (POIs)* معاينات للصور مأخوذة من [ويكيبيديا](https://www.wikipedia.org/) و [ويكيميديا كومنز](https://www.wikimedia.org/).

يؤدي النقر على صورة إلى فتح عرض **المعرض**، حيث يمكنك:

- تصفح ما يصل إلى 100 صورة لكل مكان
- عرض بيانات تعريف الصورة (*المؤلف*، *الترخيص*، *المصدر*)
- تنفيذ الإجراءات: **مشاركة**، **فتح في المتصفح**، **تنزيل**

> *على نظام iOS، يؤدي النقر طويلاً على صورة إلى فتح قائمة سياق مع إجراءات سريعة.*

لمزيد من المعلومات، راجع: [الصور عبر الإنترنت](https://osmand.net/docs/user/map/popular_places#online-photos) و [عرض المعرض](https://osmand.net/docs/user/map/popular_places#gallery)


### صور على مستوى الشارع {#street-level-imagery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![صور على مستوى الشارع أندرويد](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![صور على مستوى الشارع iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

يدعم OsmAnd التكامل مع [Mapillary](https://www.mapillary.com/)، وهي منصة عالمية للصور على مستوى الشارع التي يتم جمعها من قبل الجمهور. تتيح لك هذه الميزة عرض واستكشاف تسلسلات الصور الواقعية مباشرة على الخريطة.

تظهر صور Mapillary كأيقونات صور اتجاهية، متوافقة مع الطريق أو المسار الذي تم التقاطها فيه. يمكن أن تساعدك هذه الصور على فهم محيطك بشكل أفضل، خاصة في المناطق غير المألوفة.

يمكنك:

- استخدام زر **استكشاف** لفتح عارض Mapillary وتصفح الصور القريبة على مستوى الشارع.
- النقر على زر **إضافة صور** للمساهمة بصورك الخاصة في منصة Mapillary.

> *تعرف على المزيد حول كيفية تفعيل واستخدام هذه الميزة في [دليل مكون Mapillary الإضافي](../plugins/mapillary.md).*


### * ملاحظة صوتية/فيديو {#-audiovideo-note}

<InfoAndroidOnly />

![قائمة الصور](@site/static/img/map/image_list_android.png) ![قائمة الفيديو](@site/static/img/map/video_list_android.png)

تتوفر معلومات [الملاحظات الصوتية / الفيديو](../plugins/audio-video-notes.md) مثل التاريخ والإحداثيات والمعاينة وغيرها في قائمة **التفاصيل**. يمكنك فتح الملاحظات في برنامج ثانوي بالنقر على زر **تشغيل / عرض** في قائمة سياق الملاحظة.


## الإجراءات {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![قائمة الإجراءات أندرويد](@site/static/img/map/actions_menu_android.png) ![قائمة الإجراءات الإضافية أندرويد](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة الإجراءات iOS](@site/static/img/map/actions_menu_ios.png) ![قائمة الإجراءات الإضافية iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

هي مجموعة من العمليات المحددة التي يمكن إجراؤها على نقطة أو كائن. تنقسم هذه القائمة إلى جزأين: يتكون القسم المرئي من 3 إجراءات كحد أقصى، ويمكن الوصول إلى الإجراءات الأخرى عن طريق زر *الإجراءات*. يمكنك تخصيص (*أندرويد*) ترتيب الإجراءات في [الإعدادات العامة](#customize).


### إضافة / تعديل المفضلة {#add--edit-favorite}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إضافة إجراء مفضل أندرويد](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إضافة إجراء مفضل iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

في قائمة السياق، توجد خيارات لـ **إضافة** أو **تعديل** النقطة/الكائن المحدد إلى [قائمة المفضلة](../personal/myplaces.md).

- لـ **الإضافة**، تحتاج إلى تحديد نقطة/كائن، ثم النقر على أيقونة *النجمة* (مع توقيع إضافة) وإدخال جميع المعلومات الضرورية.

- لـ **تعديل** معلومات نقطة المفضلة، تحتاج إلى تشغيل *إظهار على الخريطة* (*القائمة ← أماكني ← المفضلة*) ثم الضغط عليها، وفي قائمة السياق بدلاً من أيقونة *النجمة* ستظهر أيقونة *القلم* (مع توقيع تعديل).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - يضيف نقطة محددة إلى قائمة المفضلة.


### إضافة / تعديل علامة {#add--edit-marker}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إضافة إجراء علامة أندرويد](@site/static/img/map/add_marker_android.png) ![تمرير إجراء علامة أندرويد](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![إضافة إجراء علامة iOS](@site/static/img/map/add_marker_ios.png) ![استعادة إجراء علامة أندرويد](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

من الممكن وضع علامة على نقطة أو كائن لتسهيل تخطيط التنقل. ما عليك سوى النقر على أيقونة **العلم** في القائمة (*أندرويد*)، **السهم** (*iOS*) - يعرض الاتجاه والمسافة إلى النقطة المحددة من موقعك الحالي.

الإجراءات:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). يضع علامة جديدة على النقطة المحددة.
- **تحديد كـ "تم المرور"** (*أندرويد*) / *تجاهل* (*iOS*). يلغي تنشيط العلامة ويضعها في السجل.
- **تفعيل** (*أندرويد*). ينقل العلامة إلى الموضع العلوي (على اللوحة العلوية).
- **استعادة العلامة** (*أندرويد*). ينقل العلامة من السجل إلى قائمة النشطة.

اقرأ المزيد عن [العلامات هنا](../personal/markers.md).


### مشاركة {#share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

| الإصدارات حتى أندرويد 14 | أندرويد 14+ |
|:------------|:---------------|
| ![إجراء مشاركة أندرويد](@site/static/img/map/action_share_1_andr.png) | ![إجراء مشاركة أندرويد](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء مشاركة iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

يتيح لك تطبيق OsmAnd **<Translate android="true" ids="shared_string_share"/>** *موقعي* أو أي موقع محدد على الخريطة مع برامج المراسلة أو رسائل البريد الإلكتروني أو وسائل التواصل الاجتماعي.

الخيارات المتاحة لمشاركة الموقع:

- ***إرسال***. يرسل نصًا عبر التطبيقات المتاحة على جهازك. يتضمن جميع المعلومات حول الموقع: اسم موقعي أو اسم نقطة الاهتمام المحددة، العنوان، الإحداثيات، والموقع الجغرافي كرابط.
- ***نسخ***. ينسخ جميع معلومات الموقع (اسم موقعي أو اسم نقطة الاهتمام المحددة، العنوان، الإحداثيات، والموقع الجغرافي كرابط) إلى الحافظة.
- ***نسخ العنوان***. ينسخ معلومات العنوان فقط إلى الحافظة.
- ***نسخ اسم نقطة الاهتمام***. ينسخ اسم نقطة الاهتمام فقط أو العنوان إذا لم يكن هناك اسم إلى الحافظة.
- ***نسخ الإحداثيات***. ينسخ معلومات الإحداثيات فقط إلى الحافظة.
- ***جيو***. يفتح قائمة بالتطبيقات المتاحة التي تدعم المواقع الجغرافية. <!-- (معلومات حول [عناوين URL الجغرافية أندرويد](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***رمز QR*** (*أندرويد*). ينشئ رابطًا للموقع المحدد في رمز QR.

<!--
- ***حفظ الصورة*** (*iOS*) - يحفظ لقطة شاشة مع الخريطة والنقطة المحددة في معرض الصور.
- ***تعيين لجهة اتصال*** (*iOS*) - ينشئ أيقونة لجهة اتصال مختارة من لقطة شاشة الخريطة.
- ***طباعة*** (*iOS*) - يفتح خيارات الطابعة لطباعة لقطة شاشة الخريطة.
- ***حفظ في الملفات*** (*iOS*) - يحفظ لقطة شاشة الخريطة في iCloud Drive أو تخزين جهازك. -->


### الاتجاهات إلى / من {#directions-to--from}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![الاتجاهات أندرويد](@site/static/img/map/action_directions_android.png)

![اتجاهات متعددة أندرويد](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![الاتجاهات iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

لبدء التنقل أو تخطيط المسار، تحتاج إلى تحديد الوجهة أولاً باستخدام [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). في حال كان لديك نقطة وجهة بالفعل، ستقترح القائمة استبدال نقطة الوجهة أو إدراجها كنقطة وسيطة أخرى أو نقطة بداية.

من الممكن أيضًا تحديد *من* الوجهة أولاً عبر قائمة سياق الخريطة (<Translate android="true" ids="context_menu_item_directions_from"/>).

اقرأ المزيد عن [التنقل هنا](../navigation/setup/route-navigation.md).

:::note انقر على بدء التنقل
إذا نقرت على **بدء التنقل** - سيتم تجاهل نقطة *من* حيث يدخل التطبيق وضع التنقل. للحفاظ على المسار، لا تنقر على *بدء التنقل* و [**اسحب لأسفل**](#hide-context-menu) قائمة *إعداد المسار*.
:::


### البحث بالقرب {#search-nearby}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء البحث أندرويد](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء البحث iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

باستخدام هذا الإجراء في قائمة السياق، يمكن البحث حول موقع معين على الخريطة.

اقرأ المزيد عن وظيفة [البحث](../search/index.md).


### تجنب الطريق {#avoid-road}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![تجنب الطريق على الخريطة أندرويد](@site/static/img/map/action_avoid_android.png) ![تجاهل الطريق المتجنب أندرويد](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تجنب الطريق على الخريطة iOS](@site/static/img/map/avoid_route_ios_1.png) ![تجاهل الطريق المتجنب iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

باستخدام قائمة سياق الخريطة، يمكنك إضافة طريق معين إلى قائمة الطرق غير المستخدمة للتوجيه. سيؤثر ذلك على [إعداد المسار](../navigation/setup/route-navigation.md).
لحذف الطرق المحددة مسبقًا من *[قائمة تجنب الطرق](../navigation/routing/osmand-routing.md#avoid-roads-menu)*، انقر على علامة، واختر *إزالة* (**أندرويد**) أو *تجاهل* (**iOS**).

:::note
وظيفة تجنب الطرق عالمية وتؤثر على جميع *[أنواع التوجيه](../navigation/routing/osmand-routing.md#routing-types)* (باستثناء *[التوجيه عبر الإنترنت](../navigation/routing/online-routing.md)*).
:::


### تغيير موضع الكائن {#change-object-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء تغيير الموضع أندرويد](@site/static/img/map/action_change_position_android.png)

![إجراء تغيير واجهة المستخدم أندرويد](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء تغيير الموضع iOS](@site/static/img/map/action_change_position_ios.png)

![إجراء تغيير واجهة المستخدم iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

يمكن نقل كل كائن أنشأه المستخدم تقريبًا، مثل العلامة، المفضلة، نقطة الاهتمام المنشأة، ملاحظة الصوت/الفيديو، أو نقطة طريق المسار. حدد الكائن أولاً على الخريطة ثم استخدم *<Translate android="true" ids="change_markers_position"/>* القائمة لنقله إلى موقع جديد.


### تخطيط مسار {#plan-a-route}

![إجراء تخطيط مسار أندرويد](@site/static/img/map/action_plan_route_android.png)

يمكنك بدء تخطيط مسار من نقطة محددة عبر قائمة سياق الكائن.

اقرأ المزيد عن أداة [تخطيط مسار](../plan-route/create-route.md).


### تحديث / تنزيل الخرائط عبر الإنترنت {#update--download-online-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء تنزيل خريطة عبر الإنترنت أندرويد](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء تنزيل خريطة عبر الإنترنت iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

لتحديث أو تنزيل الخرائط عبر الإنترنت (البلاط) في موقع معين، يمكنك استخدام قائمة سياق الكائن:

- **أندرويد**: *<Translate android="true" ids="shared_string_download_map"/>* ولـ *التحديث*، انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* و *<Translate ios="true" ids="update_tile"/>*.

يرجى قراءة [التعليمات الكاملة](../map/raster-maps.md#download--update-tiles).


### تحديث / تنزيل خرائط المتجهات {#update--download-vector-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء تنزيل خريطة متجهات أندرويد](@site/static/img/map/action_download_vector_map_android.png)

![تحديد خريطة متجهات عالمية على أندرويد](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء تنزيل خريطة متجهات iOS](@site/static/img/map/action_download_vector_map_ios.png)

![تحديد خريطة متجهات على iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

في حال عدم وجود خريطة غير متصلة بالإنترنت في الموقع المحدد، على سبيل المثال، تم فتح قائمة كائن الخريطة عبر البحث أو عبر مفضلة معينة، فسيتم اقتراح أصغر خريطة غير متصلة بالإنترنت ممكنة [للتنزيل](../start-with/download-maps.md#select-on-the-map).

**iOS**. إذا كنت قد [قمت بتنزيل](../map/map-context-menu.md) خرائط OsmAnd (متجهة أو تضاريس) بالفعل، فمن الممكن تحديثها عبر قائمة السياق. ستحتاج إلى تحديد المنطقة على الخريطة أولاً - انقر على أي موقع على خريطة العالم بتقريب 3-7.

> **ملاحظة**. *إذا قمت بفتح قائمة السياق لمنطقة خريطة (تم تمييز المنطقة)، فستتمكن من رؤية ***<Translate android="true" ids="rendering_category_details"/>*** عنها: نوع وحجم الخريطة المتاحة، رابط إلى صفحة ويكيبيديا، اللغة، السكان وغيرها.*


### * إضافة / حذف نقطة وقوف {#-add--delete-parking-point}

:::note
لإضافة/حذف نقاط وقوف السيارات، قم بتمكين مكون OsmAnd [**مكون موقف السيارة الإضافي**](../plugins/parking.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء وقوف السيارات أندرويد](@site/static/img/map/action_parking_android.png)

![إجراء حذف وقوف السيارات أندرويد](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء وقوف السيارات iOS](@site/static/img/map/action_parking_ios.png)

![إجراء حذف وقوف السيارات iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

يمكن تحديد أي موقع على الخريطة كنقطة [موقف سيارات](../plugins/parking.md). لحذف نقطة موقف سيارات، يمكنك فتح قائمة السياق المرتبطة بموقع موقف السيارات.


### * إضافة / تعديل نقطة طريق المسار {#-add--edit-track-waypoint}

:::note
لإضافة/تعديل نقاط المسار، قم بتمكين مكون OsmAnd [**مكون تسجيل الرحلات الإضافي**](../plugins/trip-recording.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء نقطة الطريق أندرويد](@site/static/img/map/action_waypoint_android.png)

![تحديد المسار لإضافة نقطة طريق أندرويد](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء نقطة الطريق iOS](@site/static/img/map/action_waypoint_ios.png)

![تحديد المسار لإضافة نقطة طريق iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

يمكنك إضافة نقاط طريق إلى مسار مسجل أو إلى تسجيل المسار الحالي باستخدام قائمة سياق الخريطة.

- حدد موقعًا على الخريطة بـ [نقرة طويلة](../map/map-context-menu.md#select-any-point-long-tap).
- في *قائمة سياق الخريطة* التي تفتح، اختر *الإجراءات ← إضافة نقطة طريق للمسار*.
- تعرض القائمة [المسارات](../map/tracks/index.md#display-tracks-on-the-map) المسجلة والمعروضة على الخريطة، بالإضافة إلى [تسجيل المسار الحالي](../plugins/trip-recording.md)، والتي يمكنك إضافة نقطة الطريق المحددة إليها.
- يمكنك إضافة نقاط طريق إلى مسار غير نشط للتسجيل بعد، وفي هذه الحالة ينتقل المسار غير النشط من *حالة البدء* إلى *حالة الاستئناف*.
- [املأ](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) البيانات المطلوبة واحفظ نقطة الطريق.
- يمكنك تكوين [الإجراءات السريعة](../widgets/quick-action.md) عن طريق إضافة نقطة طريق إلى *إضافة نقطة طريق للمسار*.


### * إنشاء / تعديل نقطة اهتمام {#-create--modify-poi}

:::note
لإضافة/تعديل نقاط الاهتمام، قم بتمكين مكون OsmAnd [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء نقطة اهتمام أندرويد](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء نقطة اهتمام iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

باستخدام مكون تحرير OSM الإضافي، يمكنك إنشاء وتعديل معظم نقاط الاهتمام الموجودة على [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [ينشئ نقطة اهتمام جديدة](../plugins/osm-editing.md#create--modify-poi) في الموقع المحدد.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [يعدل نقطة الاهتمام المحددة](../plugins/osm-editing.md#create--modify-poi).


### * فتح ملاحظة OSM {#-open-osm-note}

:::note
لفتح ملاحظة OSM، قم بتمكين مكون OsmAnd [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

![إجراء ملاحظة أندرويد](@site/static/img/map/action_note_android.png)

![إجراء إضافة ملاحظة واجهة المستخدم أندرويد](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إجراء ملاحظة iOS](@site/static/img/map/action_note_ios.png)

![إجراء إضافة ملاحظة واجهة المستخدم iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

يمكنك **الإبلاغ** عن أخطاء بيانات الخريطة في موقع معين إلى [مجتمع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). يرجى اتباع [الإرشادات](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) وإضافة تعليقات مناسبة للمشكلة.


### * التعليق / إغلاق ملاحظة OSM {#-comment--close-osm-note}

:::note
للتعليق/إغلاق ملاحظة OSM، قم بتمكين مكون OsmAnd [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md).
:::

![التعليق على ملاحظة OSM أندرويد](@site/static/img/map/action_comment_note_android.png) ![إعادة فتح ملاحظة OSM أندرويد](@site/static/img/map/action_reopen_note_android.png)

يمكنك [التعليق](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes)، [حل](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) وإعادة فتح
ملاحظات OpenStreetMap عبر قائمة سياق الكائن.


### * تحميل نقطة اهتمام / ملاحظة OSM {#-upload-poi--osm-note}

:::note
لتحميل نقطة اهتمام / ملاحظة OSM، قم بتمكين مكون OsmAnd [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md).
:::

![تحميل نقطة اهتمام أندرويد](@site/static/img/map/action_poi_upload_android.png) ![تحميل ملاحظة OSM أندرويد](@site/static/img/map/action_note_upload_android.png)

في حال استخدام *وضع عدم الاتصال* لإضافة / تعديل نقطة اهتمام أو ملاحظة OSM، ستحتاج إلى تحميل التغييرات إلى OpenStreetMap. بشكل افتراضي، يكون *وضع عدم الاتصال* قيد التشغيل لتجنب التغييرات العرضية في قاعدة البيانات العامة. يمكنك تحميل أو حذف التغيير عبر قائمة سياق الكائن الذي تم إنشاؤه.


### * تسجيل ملاحظة صوتية/فيديو {#-record-av-note}

<InfoAndroidOnly />

:::note
لتسجيل الملاحظات الصوتية/الفيديو، قم بتمكين مكون OsmAnd [**مكون الملاحظات الصوتية/الفيديو الإضافي**](../plugins/audio-video-notes.md).
:::

![إجراء صوت-فيديو أندرويد](@site/static/img/map/action_av_note_android.png)

يسجل أو يلتقط ملاحظة وسائط في نقطة محددة على الخريطة.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - ينشئ [ملاحظة صوتية](../map/point-layers-on-map.md#-audio--video-points-android) في النقطة المحددة (ينشئ نقطة جديدة على التراكب مع أيقونة الصوت).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - ينشئ [ملاحظة فيديو](../map/point-layers-on-map.md#-audio--video-points-android) في النقطة المحددة (ينشئ نقطة جديدة على التراكب مع أيقونة الفيديو).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - ينشئ [نقطة صورة](../map/point-layers-on-map.md#-audio--video-points-android) على الخريطة.


## تخصيص {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![تخصيص قائمة سياق الخريطة](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![تخصيص قائمة سياق الخريطة](@site/static/img/map/map_context_menu_customize_2.png) --> ![تخصيص قائمة سياق الخريطة](@site/static/img/map/map_context_menu_customize_3.png)

يمكنك تغيير ترتيب العناصر أو إخفائها من قائمة *الإجراءات* في *قائمة سياق الخريطة*. يتم اقتراح ما مجموعه 16 إجراءً.

- يمكنك نقل الإجراءات الثلاثة الأكثر فائدة إلى أعلى قائمة *الإجراءات الرئيسية*.
- يمكن تخصيص بقية القائمة لكل ملف تعريف على حدة في قسمي *الإجراءات الإضافية* و *المخفية*.

أنواع الإجراءات المتاحة:

- **<Translate android="true" ids="main_actions"/>**. يحتوي هذا القسم على 4 أزرار فقط، يمكن تخصيص ثلاثة منها، بينما يبقى زر الإجراءات دون تغيير.
- **<Translate android="true" ids="additional_actions"/>**. يمكنك الوصول إلى هذه الإجراءات بالنقر على زر *الإجراءات*.
- **<Translate android="true" ids="shared_string_hidden"/>**. نقل الإجراءات إلى هذا القسم لا يوقف عملها. إنها ببساطة لا تظهر في قائمة الإجراءات.


## مقالات ذات صلة {#related-articles}

- [خرائط المتجهات (أنماط الخرائط)](./vector-maps.md)
- [خرائط الراستر (عبر الإنترنت / غير متصلة)](./raster-maps.md)
- [النقاط على الخريطة](./point-layers-on-map.md)
- [قائمة سياق المسارات](./tracks/track-context-menu.md)
- [النقل العام](./public-transport.md)
- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: يونيو 2025*