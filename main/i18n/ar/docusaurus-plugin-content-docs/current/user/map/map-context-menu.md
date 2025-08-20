---
source-hash: c406b4c0fcaa397722ffd39164023525d4248abb42fb6a6add45bac6f360f5b8
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

![قائمة السياق أندرويد](/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة السياق iOS](/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

تظهر **قائمة السياق** عند **النقر مرة واحدة** على كائن معلم على الخريطة. تعرض قائمة السياق هذه معلومات أساسية حول الكائن المحدد، بما في ذلك *اسمه، أيقونته* (كما هو ممثل على الخريطة)، *عنوانه، المسافة*، و*الاتجاه* من موقعك الحالي.

يمكنك تحديد أنواع مختلفة من كائنات الخريطة، مثل *نقاط الاهتمام (POIs)*، *المفضلة*، *محطات النقل*، *العلامات*، *قمم الجبال*، أو *كائنات الخريطة* الأخرى.

:::note
تتوافق كائنات الخريطة المحددة مع [**العقد**](https://wiki.openstreetmap.org/wiki/Node) أو [**المسارات**](https://wiki.openstreetmap.org/wiki/Way) في OpenStreetMap.
:::

> *يتم عرض ارتفاع قمم الجبال بالمتر أو القدم حسب [وحدات الطول](../personal/profiles.md#units--formats) المحددة في إعدادات الملف الشخصي.*

### تحديد أي نقطة (نقرة طويلة) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة السياق نقرة طويلة أندرويد](/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة السياق نقرة طويلة iOS](/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

عند **النقر طويلاً** في أي مكان على الخريطة، تظهر **قائمة سياق** توفر معلومات حول الموقع المحدد. يتضمن ذلك العنوان والمسافة والاتجاه من موقعك الحالي.

> **ملاحظة**. *النقر طويلاً على **رقم مبنى** يبرز حدوده ويفتح قائمة سياق الخريطة.*

### تحديد مسار {#select-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق المسار أندرويد](/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة إحصائيات المسار iOS](/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

يؤدي النقر على [مسار GPX](../map/tracks/index.md) على الخريطة إلى فتح [قائمة سياق المسار](../map/tracks/track-context-menu.md)، حيث يمكنك الوصول إلى خيارات إضافية متعلقة بالمسار.

### إخفاء قائمة السياق {#hide-context-menu}

لإغلاق **قائمة السياق**:

- انقر على أي *منطقة فارغة* على الخريطة لتجنب إعادة فتح القائمة.
- اسحب القائمة *لأسفل* من الأعلى.

## التفاصيل {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة السياق أندرويد](/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة السياق iOS](/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

للحصول على معلومات أكثر تفصيلاً حول كائن ما، انقر على زر **التفاصيل** في قائمة السياق أو اسحب اللوحة لأعلى لتوسيعها.

### معلومات الكائن {#object-info}

توفر لوحة **معلومات الكائن** تفاصيل إضافية حول الكائن المحدد. يمكنك النقر على أي إدخال لنسخ المعلومات إلى الحافظة.

التفاصيل المتاحة تشمل:

- [أسماء بديلة](#alternative-names)
- [الإحداثيات](../map/map-context-menu.md#coordinates)
- [نقاط الاهتمام القريبة / ويكيبيديا](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [مسارات النقل العام](../map/map-context-menu.md#public-transport-routes) (لمحطات النقل)
- [المفضلة / نقاط المسار من نفس المجموعة](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [رابط OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [صورة / وصف المقال](../map/map-context-menu.md#article-description-article-description)
- [صور عبر الإنترنت](../map/map-context-menu.md#online-photos)

بالإضافة إلى ذلك، قد تتضمن اللوحة [تفاصيل OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features)، مثل:

- [الموقع الإلكتروني](https://wiki.openstreetmap.org/wiki/Key:website)
- [رقم الهاتف](https://wiki.openstreetmap.org/wiki/Key:contact)
- [ساعات العمل](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [الرسوم](https://wiki.openstreetmap.org/wiki/Key:fee)
- [إمكانية الوصول](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [العرض](https://wiki.openstreetmap.org/wiki/Key:width) / [الارتفاع](https://wiki.openstreetmap.org/wiki/Key:height)

### أسماء بديلة {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أسماء بديلة أندرويد 1](/img/map/alternative_names_andr_1.png) ![أسماء بديلة أندرويد](/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أسماء بديلة أندرويد 1](/img/map/alternative_names_1_ios.png) ![أسماء بديلة أندرويد](/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

يعرض OsmAnd **أسماء نقاط اهتمام إضافية** في *قائمة سياق الخريطة*، مع إعطاء الأولوية للاسم باللغة *المعروضة* أو قائمة اللغات المفضلة للنظام. إذا كانت هناك ترجمات متعددة متاحة، يتم تجميعها في علامات مصنفة مثل *الاسم، العلامة التجارية، المشغل،* أو *نقاط الاهتمام القريبة*.

ميزات عرض الأسماء البديلة:

- يمكن الوصول إلى الترجمات الإضافية من خلال *قائمة منسدلة*.

- يتم تصنيف الأسماء إلى مجموعات مختلفة مثل *قائمة الأسماء بلغات أخرى*، *إقليمي*، *محلي*، *وطني*، *دولي*، *قصير*، *قديم*، *رسمي*، و*أسماء بديلة*.

- تشمل الفئات الأخرى *الترجمة الخاصة بالمنطقة*، أو *الإعدادات الافتراضية*.

- إذا كانت ترجمة معينة *غير متاحة*، فإن OsmAnd يعود إلى الاسم **المحلي** لضمان الدقة والاتساق عبر المناطق متعددة اللغات.

### معلومات المضلع {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![معلومات المضلع أندرويد](/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![معلومات المضلع أندرويد](/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

توفر ميزة **معلومات المضلع** بيانات مفصلة حول **المضلعات** القريبة المعروضة على الخريطة. يتضمن ذلك الميزات الجغرافية والحدود الإدارية والمناطق الأخرى المعينة على الخريطة.

**ضمن القسم**:

- يعرض *قائمة بالمضلعات المحيطة*، مرتبة *من الأصغر إلى الأكبر* بناءً على حجم المنطقة.

- يعرض كل إدخال *نوع المضلع واسمه*، مما يتيح سهولة تحديد المناطق والحدود.

**تفاصيل إضافية**:

- عند تحديد نقطة على الخريطة أو نقطة اهتمام (POI)، تعرض لوحة **معلومات المضلع** قائمة بجميع المضلعات التي تحتوي على الموقع المحدد.

- تتضمن الإدخالات في القائمة **التقسيمات الإدارية، ومناطق استخدام الأراضي، والميزات الطبيعية، والمناطق المصنفة الأخرى**.

- تتيح اللوحة للمستخدمين **نسخ اسم المضلع وتفاصيله** للرجوع إليها.

- لعرض هذه المعلومات، انتقل إلى *قائمة سياق الخريطة ← التفاصيل ← ضمن*.

تساعدك هذه الميزة على فهم *موقعك الحالي* فيما يتعلق بالتقسيمات الإدارية المعينة، أو المناطق الطبيعية، أو الميزات الجغرافية الهامة الأخرى.

### الإحداثيات {#coordinates}

| تنسيق الإحداثيات | |
|:------|:------|
| <ul><li>DDD.DDDDD (درجات عشرية بسيطة)</li><li>DDD.DDDDD (N/S, E/W فاصلة)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[معيار UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[رمز الموقع المفتوح](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[الشبكة السويسرية CH1903 و CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[رابط OsmAnd Web](https://osmand.net/map)</li><li>[رابط OpenStreetMap Web](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![الإحداثيات](/img/map/map_context_menu_Coordinates.png) |

في قائمة السياق، يمكنك العثور على [الإحداثيات الجغرافية](../search/search-coordinates.md#coordinate-format) لنقطة بتنسيقات مختلفة وأيضًا روابط OsmAnd القابلة للمشاركة و[روابط OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (الخيار الأخير متاح فقط عند تمكين [مكون تحرير OpenStreetMap الإضافي](../plugins/osm-editing.md)). إذا قمت بتوسيع قسم الإحداثيات ونقرت طويلاً على أي سطر من القائمة، فسيتم نسخ قيمه تلقائيًا إلى الحافظة (**أندرويد**) أو يصبح خيار *نسخ* متاحًا في الرسالة المنبثقة (**iOS**).

يمكن التعرف على رابط OsmAnd Web تلقائيًا بواسطة OsmAnd (مثال: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). يتم فتح كل من OsmAnd و[روابط OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) على المواقع المقابلة مع علامة دبوس إلى المكان المهم.

### نقاط الاهتمام القريبة / ويكيبيديا {#nearby-pois--wikipedia}

![مقالات ويكيبيديا القريبة](/img/map/map_context_menu_nearby_wikipedia.png) ![مقالات ويكيبيديا القريبة](/img/map/map_context_menu_nearby_wikipedia_1.png)

تعرض هذه الأقسام [مقالات ويكيبيديا](../plugins/wikipedia.md) أو [نقاط الاهتمام (POIs)](../map/point-layers-on-map.md#points-of-interest-pois) القريبة مع *<Translate android="true" ids="shared_string_show_on_map"/>* و *<Translate android="true" ids="search_more"/>* لعرض و[البحث](../search/search-poi.md) عن جميع نقاط الاهتمام ومقالات ويكيبيديا الأخرى.

يؤدي النقر على *نقاط الاهتمام القريبة / مقالات ويكيبيديا* إلى فتح قائمة نقاط (نقاط اهتمام أو ويكيبيديا). يؤدي النقر على إحدى هذه النقاط من قائمة النقاط إلى نقل الخريطة إلى هذه النقطة (نقاط اهتمام أو ويكيبيديا) مع فتح قائمة سياق خريطة النقطة.

> **ملاحظة**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) ستظهر فقط إذا قمت بتنزيل خرائط خاصة مسبقًا مع [مقالات ويكيبيديا لهذه المنطقة](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.

### مسارات النقل العام {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسارات النقل العام أندرويد](/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسارات النقل العام iOS](/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

يتم عرض معلومات حول مسارات النقل العام لمحطة النقل المختارة. للحصول على معلومات حول قائمة سياق النقل العام والإجراءات المتعلقة بها، اقرأ في [المقال](../map/public-transport.md#transport-routes-context-menu).

### المفضلة / نقاط المسار من المجموعة {#favorites--track-points-from-the-group}

![قائمة المفضلة](/img/map/favorite_list_android.png) ![قائمة المفضلة كاملة](/img/map/favorite_list_full_android.png)

هذه قائمة بجميع النقاط في مجموعة واحدة للمفضلة أو نقطة الطريق. عند النقر، تتوسع القائمة بأكملها لنقاط مجموعة واحدة، وعند النقر على نقطة من القائمة، تنتقل الخريطة إلى النقطة المحددة.

### كائن خطي {#linear-object}

![قائمة المفضلة](/img/map/linear_object_andr.png)

بالنسبة **للكائنات الخطية**، مثل *الحواجز، والدرجات، والبوابات، والمقاعد، والمنحدرات، والسدود، والأعمدة، أو الفواصل*، تعرض قائمة السياق تفاصيل إضافية. تتضمن هذه التفاصيل نوع نقطة الاهتمام والعنوان المرتبط بها، أو نوع الكائن إذا لم يتم تعيين اسم.

### منطقة التسلق وتفاصيل الصخرة {#climbing-area-and-crag-details}

![قائمة المفضلة](/img/map/climbing_andr.png)

عند تحديد [منطقة تسلق أو صخرة](../map/routes.md#climbing-routes)، يوفر OsmAnd ملخصًا مفصلاً لموقع التسلق، بما في ذلك: الاسم والموقع، وتقييم صعوبة التسلق (UIAA، الفرنسية، YDS، إلخ)، ونوع الصخرة، والارتفاع وطول المسار، وجودة التسلق وظروف السطح.

### منحدرات التزلج، مسارات الدراجات الجبلية، ومسارات الدراجات الترابية {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![منحدرات التزلج ومسارات الدراجات الجبلية](/img/map/ski_mtb.png) ![منحدرات التزلج ومسارات الدراجات الجبلية](/img/map/ski_mtb_2.png)

يمكنك النقر على عناصر الخريطة مثل **منحدرات التزلج**، **مسارات الدراجات الجبلية (MTB)**، و**مسارات الدراجات الترابية** لفتح قائمة السياق الخاصة بها مع معلومات مفصلة. تتضمن المعلومات المتاحة: اسم المسار أو المنحدر (إذا كان متاحًا في بيانات OSM)، معرف كائن OSM أو معرف العلاقة، مستوى الصعوبة، طول المسار، نوع التضاريس، والمزيد.

**العلامات المدعومة:** `piste:type=*` (منحدرات التزلج)، `route=mtb`، `route=atv` أو `route=dirt_bike` (مسارات الدراجات النارية الوعرة)

:::note
استخدم أنماط الخريطة [الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) أو [الوعرة](../map/vector-maps.md#offroad) لتحسين الرؤية.
:::

### وصف المقال {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة الوصف](/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الوصف](/img/map/description_list_ios.png)

</TabItem>

</Tabs>

يحتوي هذا الجزء على جزء من الوصف من [مقالة ويكيبيديا](../plugins/wikipedia.md)، [المفضلة](../personal/favorites.md) أو وصف نقطة الطريق، بالنقر يمكنك فتح الوصف الكامل.

### رابط OpenStreetMap {#openstreetmap-link}

![رابط OSM](/img/map/context_menu_osm_link.png) ![رابط OSM](/img/map/context_menu_osm_link_1.png)

يوفر رابط OpenStreetMap رابطًا مباشرًا لكائن OpenStreetMap حيث يمكنك العثور على معلومات كاملة عنه:
[عقدة](https://wiki.openstreetmap.org/wiki/Node) أو [مسار](https://wiki.openstreetmap.org/wiki/Way).

### صور عبر الإنترنت {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![صور عبر الإنترنت قائمة السياق أندرويد](/img/map/images_nearby_1_andr.png)
![قائمة المعرض أندرويد](/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![صور عبر الإنترنت قائمة السياق iOS](/img/map/online_photo_ios.png)
![قائمة المعرض 2 iOS](/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

عند النقر على مكان شهير على الخريطة، يعرض قسم **الصور عبر الإنترنت** في *قائمة سياق نقاط الاهتمام* معاينات للصور مأخوذة من [ويكيبيديا](https://www.wikipedia.org/) و[ويكيميديا كومنز](https://www.wikimedia.org/).

يؤدي النقر على صورة إلى فتح عرض **المعرض**، حيث يمكنك:

- تصفح ما يصل إلى 100 صورة لكل مكان
- عرض بيانات الصورة الوصفية (*المؤلف*، *الترخيص*، *المصدر*)
- تنفيذ الإجراءات: **مشاركة**، **فتح في المتصفح**، **تنزيل**

> *على iOS، يؤدي النقر طويلاً على صورة إلى فتح قائمة سياق مع إجراءات سريعة.*

لمزيد من المعلومات، انظر: [الصور عبر الإنترنت](https://osmand.net/docs/user/map/popular_places#online-photos) و[عرض المعرض](https://osmand.net/docs/user/map/popular_places#gallery)

### صور مستوى الشارع {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![صور مستوى الشارع أندرويد](/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![صور مستوى الشارع iOS](/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

يدعم OsmAnd التكامل مع [Mapillary](https://www.mapillary.com/)، وهي منصة عالمية لصور مستوى الشارع المجمعة من الجمهور. تتيح لك هذه الميزة عرض واستكشاف تسلسلات الصور الواقعية مباشرة على الخريطة.

تظهر صور Mapillary كأيقونات صور اتجاهية، متوافقة مع الطريق أو المسار الذي تم التقاطها فيه. يمكن أن تساعدك هذه الصور على فهم محيطك بشكل أفضل، خاصة في المناطق غير المألوفة.

يمكنك:

- استخدام زر **استكشاف** لفتح عارض Mapillary وتصفح صور مستوى الشارع القريبة.
- النقر على زر **إضافة صور** للمساهمة بصورك الخاصة في منصة Mapillary.

> *تعرف على المزيد حول كيفية تفعيل واستخدام هذه الميزة في [دليل مكون Mapillary الإضافي](../plugins/mapillary.md).*

### * ملاحظة صوتية/فيديو {#-audiovideo-note}

<InfoAndroidOnly />

![قائمة الصور](/img/map/image_list_android.png) ![قائمة الفيديو](/img/map/video_list_android.png)

معلومات [الملاحظات الصوتية/الفيديو](../plugins/audio-video-notes.md) مثل التاريخ، الإحداثيات، المعاينة وغيرها متاحة في قائمة **التفاصيل**. يمكنك فتح الملاحظات في برنامج ثانوي بالنقر على زر **تشغيل / عرض** في قائمة سياق الملاحظة.

## الإجراءات {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة الإجراءات أندرويد](/img/map/actions_menu_android.png) ![قائمة الإجراءات الإضافية أندرويد](/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الإجراءات iOS](/img/map/actions_menu_ios.png) ![قائمة الإجراءات الإضافية iOS](/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

إنها مجموعة من التلاعبات المحددة التي يمكن إجراؤها على نقطة أو كائن. تنقسم هذه القائمة إلى جزأين: القسم المرئي يتكون من 3 إجراءات كحد أقصى، ويمكن الوصول إلى الإجراءات الأخرى من خلال زر *الإجراءات*. يمكنك تخصيص (*أندرويد*) ترتيب الإجراءات في [الإعدادات العامة](#customize).

### إضافة / تعديل مفضلة {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة تعديل إجراء مفضل أندرويد](/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة تعديل إجراء مفضل iOS](/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

في قائمة السياق، توجد خيارات **لإضافة** أو **تعديل** النقطة / الكائن المحدد إلى [قائمة المفضلة](../personal/myplaces.md).

- **للإضافة**، تحتاج إلى تحديد نقطة / كائن، والنقر على أيقونة *النجمة* (مع توقيع إضافة) وإدخال جميع المعلومات الضرورية.

- **لتعديل** معلومات حول نقطة مفضلة، تحتاج إلى تشغيل *إظهار على الخريطة* (*القائمة ← أماكني ← المفضلة*) ثم الضغط عليها، وفي قائمة السياق بدلاً من أيقونة *النجمة* ستظهر أيقونة *القلم الرصاص* (مع توقيع تعديل).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - يضيف نقطة محددة إلى قائمة المفضلة.

### إضافة / تعديل علامة {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة تعديل إجراء علامة أندرويد](/img/map/add_marker_android.png) ![إجراء تمرير علامة أندرويد](/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![إضافة تعديل إجراء علامة iOS](/img/map/add_marker_ios.png) ![استعادة إجراء علامة أندرويد](/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

من الممكن وضع علامة على نقطة أو كائن لتسهيل تخطيط الملاحة. ما عليك سوى النقر على أيقونة **العلم** في القائمة (*أندرويد*)، **السهم** (*iOS*) - يعرض الاتجاه والمسافة إلى النقطة المحددة من موقعك الحالي.

الإجراءات:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). يضع علامة جديدة على النقطة المحددة.
- **وضع علامة تم المرور بها** (*أندرويد*) / *تجاهل* (*iOS*). يلغي تنشيط العلامة ويضعها في السجل.
- **جعل نشطة** (*أندرويد*). ينقل العلامة إلى الموضع العلوي (على اللوحة العلوية).
- **استعادة العلامة** (*أندرويد*). ينقل العلامة من السجل إلى قائمة النشطة.

اقرأ المزيد عن [العلامات هنا](../personal/markers.md).

### مشاركة {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

| الإصدارات حتى أندرويد 14 | أندرويد 14+ |
|:------------|:---------------|
| ![إجراء المشاركة أندرويد](/img/map/action_share_1_andr.png) | ![إجراء المشاركة أندرويد](/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء المشاركة iOS](/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

يتيح لك تطبيق OsmAnd **<Translate android="true" ids="shared_string_share"/>** *موقعي* أو أي موقع محدد على الخريطة مع تطبيقات المراسلة أو رسائل البريد الإلكتروني أو وسائل التواصل الاجتماعي.

الخيارات المتاحة لمشاركة الموقع:

- ***إرسال***. يرسل النص عبر التطبيقات المتاحة على جهازك. يتضمن جميع المعلومات حول الموقع: اسم موقعي أو اسم نقطة الاهتمام المحددة، العنوان، الإحداثيات، والموقع الجغرافي كرابط.
- ***نسخ***. ينسخ جميع معلومات الموقع (اسم موقعي أو اسم نقطة الاهتمام المحددة، العنوان، الإحداثيات، والموقع الجغرافي كرابط) إلى الحافظة.
- ***نسخ العنوان***. ينسخ معلومات العنوان فقط إلى الحافظة.
- ***نسخ اسم نقطة الاهتمام***. ينسخ اسم نقطة الاهتمام فقط أو العنوان إذا لم يكن هناك اسم إلى الحافظة.
- ***نسخ الإحداثيات***. ينسخ معلومات الإحداثيات فقط إلى الحافظة.
- ***geo***. يفتح قائمة بالتطبيقات المتاحة التي تدعم المواقع الجغرافية. <!-- (معلومات حول [روابط geo Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***رمز QR*** (*أندرويد*). ينشئ رابطًا للموقع المحدد في رمز QR.

<!--
- ***حفظ الصورة*** (*iOS*) - يحفظ لقطة شاشة مع الخريطة والنقطة المحددة في معرض الصور.
- ***تعيين لجهة اتصال*** (*iOS*) - ينشئ أيقونة لجهة اتصال مختارة من لقطة شاشة الخريطة.
- ***طباعة*** (*iOS*) - يفتح خيارات الطابعة لطباعة لقطة شاشة الخريطة.
- ***حفظ في الملفات*** (*iOS*) - يحفظ لقطة شاشة الخريطة في iCloud Drive أو تخزين جهازك. -->

### الاتجاهات إلى / من {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الاتجاهات أندرويد](/img/map/action_directions_android.png)

![اتجاهات متعددة أندرويد](/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الاتجاهات iOS](/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

لبدء الملاحة أو تخطيط المسار، تحتاج أولاً إلى تحديد الوجهة باستخدام [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). في حال كان لديك نقطة وجهة بالفعل، ستقترح القائمة استبدال نقطة الوجهة أو إدراجها كنقطة وسيطة أخرى أو نقطة بداية.

من الممكن أيضًا تحديد *من* الوجهة أولاً عبر قائمة سياق الخريطة (<Translate android="true" ids="context_menu_item_directions_from"/>).

اقرأ المزيد عن [الملاحة هنا](../navigation/setup/route-navigation.md).

:::note انقر على بدء الملاحة
إذا نقرت على **بدء الملاحة** - سيتم تجاهل نقطة *من* حيث يدخل التطبيق في وضع الملاحة. للحفاظ على المسار، لا تنقر على *بدء الملاحة* و[**اسحب لأسفل**](#hide-context-menu) قائمة *إعداد المسار*.
:::

### البحث في الجوار {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء البحث أندرويد](/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء البحث iOS](/img/map/action_search_ios.png)

</TabItem>

</Tabs>

باستخدام إجراء قائمة السياق هذا، من الممكن البحث حول موقع معين على الخريطة.

اقرأ المزيد عن وظيفة [البحث](../search/index.md).

### تجنب الطريق {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تجنب الطريق على الخريطة أندرويد](/img/map/action_avoid_android.png) ![تجاهل الطريق المتجنب أندرويد](/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تجنب الطريق على الخريطة iOS](/img/map/avoid_route_ios_1.png) ![تجاهل الطريق المتجنب iOS](/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

باستخدام قائمة سياق الخريطة، يمكنك إضافة طريق معين إلى قائمة الطرق غير المستخدمة للتوجيه. سيؤثر ذلك على [إعداد المسار](../navigation/setup/route-navigation.md).
لحذف الطرق المحددة مسبقًا من *[قائمة تجنب الطرق](../navigation/routing/osmand-routing.md#avoid-roads-menu)*، انقر على العلامة، اختر *إزالة* (**أندرويد**) أو *تجاهل* (**iOS**).

:::note
وظيفة تجنب الطرق عالمية وتؤثر على جميع *[أنواع التوجيه](../navigation/routing/osmand-routing.md#routing-types)* (باستثناء *[التوجيه عبر الإنترنت](../navigation/routing/online-routing.md)*).
:::

### تغيير موضع الكائن {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء تغيير الموضع أندرويد](/img/map/action_change_position_android.png)

![إجراء تغيير واجهة المستخدم أندرويد](/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء تغيير الموضع iOS](/img/map/action_change_position_ios.png)

![إجراء تغيير واجهة المستخدم iOS](/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>

يمكن تحريك كل كائن أنشأه المستخدم تقريبًا، مثل العلامة، المفضلة، نقطة الاهتمام التي تم إنشاؤها، ملاحظة الصوت/الفيديو، أو نقطة طريق المسار. أولاً، حدد كائنًا على الخريطة ثم استخدم *<Translate android="true" ids="change_markers_position"/>* في القائمة لنقله إلى موقع جديد.

### تخطيط مسار {#plan-a-route}

![إجراء تخطيط مسار أندرويد](/img/map/action_plan_route_android.png)

يمكنك بدء تخطيط مسار من نقطة محددة عبر قائمة سياق الكائن.

اقرأ المزيد عن أداة [تخطيط مسار](../plan-route/create-route.md).

### تحديث / تنزيل الخرائط عبر الإنترنت {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء تنزيل خريطة عبر الإنترنت أندرويد](/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء تنزيل خريطة عبر الإنترنت iOS](/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

لتحديث أو تنزيل الخرائط عبر الإنترنت (البلاط) في موقع معين، يمكنك استخدام قائمة سياق الكائن:

- **أندرويد**: *<Translate android="true" ids="shared_string_download_map"/>* وللتحديث، انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* و *<Translate ios="true" ids="update_tile"/>*.

يرجى قراءة [التعليمات الكاملة](../map/raster-maps.md#download--update-tiles).

### تحديث / تنزيل خرائط المتجهات {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء تنزيل خريطة المتجهات أندرويد](/img/map/action_download_vector_map_android.png)

![تحديد خريطة المتجهات العالمية على أندرويد](/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء تنزيل خريطة المتجهات iOS](/img/map/action_download_vector_map_ios.png)

![تحديد خريطة المتجهات على iOS](/img/map/download_map_ios.png)

</TabItem>

</Tabs>

في حال عدم وجود خريطة غير متصلة بالإنترنت في الموقع المحدد، على سبيل المثال، تم فتح قائمة كائن الخريطة عبر البحث أو عبر مفضلة معينة، فسيتم اقتراح أصغر خريطة غير متصلة بالإنترنت ممكنة [للتنزيل](../start-with/download-maps.md#select-on-the-map).

**iOS**. إذا كنت قد قمت بالفعل [بتنزيل](../map/map-context-menu.md) خرائط OsmAnd (متجه أو تضاريس)، فمن الممكن تحديثها عبر قائمة السياق. ستحتاج إلى تحديد المنطقة على الخريطة أولاً - انقر على أي موقع على خريطة العالم من مستوى التكبير 3-7.

> **ملاحظة**. *إذا قمت بفتح قائمة السياق لمنطقة الخريطة (المنطقة مظللة)، فستتمكن من رؤية ***<Translate android="true" ids="rendering_category_details"/>*** عنها: نوع وحجم الخريطة المتاحة، رابط إلى صفحة ويكيبيديا، اللغة، السكان وغيرها.*

### * إضافة / حذف نقطة وقوف السيارات {#-add--delete-parking-point}

:::note
لإضافة / حذف نقاط وقوف السيارات، قم بتمكين [**مكون موقف السيارات الإضافي**](../plugins/parking.md) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء وقوف السيارات أندرويد](/img/map/action_parking_android.png)

![إجراء حذف وقوف السيارات أندرويد](/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء وقوف السيارات iOS](/img/map/action_parking_ios.png)

![إجراء حذف وقوف السيارات iOS](/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

يمكن تحديد أي موقع محدد على الخريطة كنقطة [وقوف سيارات](../plugins/parking.md). لحذف نقطة وقوف السيارات، يمكنك فتح قائمة السياق المرتبطة بموقع وقوف السيارات.

### * إضافة / تعديل نقطة طريق المسار {#-add--edit-track-waypoint}

:::note
لإضافة / تعديل نقاط المسار، قم بتمكين [**مكون تسجيل الرحلة الإضافي**](../plugins/trip-recording.md) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء نقطة الطريق أندرويد](/img/map/action_waypoint_android.png)

![تحديد المسار لإضافة نقطة طريق أندرويد](/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء نقطة الطريق iOS](/img/map/action_waypoint_ios.png)

![تحديد المسار لإضافة نقطة طريق iOS](/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

يمكنك إضافة نقاط طريق إلى مسار مسجل أو إلى تسجيل المسار الحالي باستخدام قائمة سياق الخريطة.

- حدد موقعًا على الخريطة [بنقرة طويلة](../map/map-context-menu.md#select-any-point-long-tap).
- في *قائمة سياق الخريطة* التي تفتح، اختر *الإجراءات ← إضافة نقطة طريق المسار*.
- تعرض القائمة [المسارات](../map/tracks/index.md#display-tracks-on-the-map) المسجلة والمعروضة على الخريطة، بالإضافة إلى [تسجيل المسار الحالي](../plugins/trip-recording.md)، الذي يمكنك إضافة نقطة الطريق المحددة إليه.
- يمكنك إضافة نقاط طريق إلى مسار غير نشط بعد للتسجيل، وفي هذه الحالة يتحول المسار غير النشط من *حالة البدء* إلى *حالة الاستئناف*.
- [املأ](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) البيانات المطلوبة واحفظ نقطة الطريق.
- يمكنك تهيئة [الإجراءات السريعة](../widgets/quick-action.md) عن طريق إضافة نقطة طريق إلى *إضافة نقطة طريق المسار*.

### * إنشاء / تعديل نقطة اهتمام (POI) {#-create--modify-poi}

:::note
لإضافة / تعديل نقاط الاهتمام، قم بتمكين [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء نقطة اهتمام أندرويد](/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء نقطة اهتمام iOS](/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

باستخدام مكون تحرير OSM الإضافي، يمكنك إنشاء وتعديل معظم نقاط الاهتمام الموجودة على [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [ينشئ نقطة اهتمام جديدة](../plugins/osm-editing.md#create--modify-poi) في الموقع المحدد.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [يعدل نقطة الاهتمام المحددة](../plugins/osm-editing.md#create--modify-poi).

### * فتح ملاحظة OSM {#-open-osm-note}

:::note
لإضافة فتح ملاحظة OSM، قم بتمكين [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء ملاحظة أندرويد](/img/map/action_note_android.png)

![إجراء إضافة ملاحظة أندرويد](/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراء ملاحظة iOS](/img/map/action_note_ios.png)

![إجراء إضافة ملاحظة iOS](/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

يمكنك **الإبلاغ** عن أخطاء بيانات الخريطة في موقع معين إلى [مجتمع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). يرجى اتباع [الإرشادات](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) وإضافة تعليقات مناسبة إلى المشكلة.

### * تعليق / إغلاق ملاحظة OSM {#-comment--close-osm-note}

:::note
لتعليق/إغلاق ملاحظة OSM، قم بتمكين [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md) في OsmAnd.
:::

![تعليق ملاحظة OSM أندرويد](/img/map/action_comment_note_android.png) ![إعادة فتح ملاحظة OSM أندرويد](/img/map/action_reopen_note_android.png)

يمكنك [التعليق](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes)، [حل](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) وإعادة فتح
ملاحظات OpenStreetMap عبر قائمة سياق الكائن.

### * تحميل نقطة اهتمام (POI) / ملاحظة OSM {#-upload-poi--osm-note}

:::note
لتحميل نقطة اهتمام (POI) / ملاحظة OSM، قم بتمكين [**مكون تحرير OSM الإضافي**](../plugins/osm-editing.md) في OsmAnd.
:::

![تحميل نقطة اهتمام أندرويد](/img/map/action_poi_upload_android.png) ![تحميل ملاحظة OSM أندرويد](/img/map/action_note_upload_android.png)

في حال استخدامك *وضع عدم الاتصال* لإضافة / تعديل نقطة اهتمام (POI) أو ملاحظة OSM، ستحتاج إلى تحميل التغييرات إلى OpenStreetMap. بشكل افتراضي، يكون *وضع عدم الاتصال* قيد التشغيل لتجنب التغييرات العرضية لقاعدة البيانات العامة. يمكنك تحميل أو حذف التغيير عبر قائمة سياق الكائن الذي تم إنشاؤه.

### * تسجيل ملاحظة صوتية/فيديو {#-record-av-note}

<InfoAndroidOnly />

:::note
لتسجيل الملاحظات الصوتية/الفيديو، قم بتمكين [**مكون الملاحظات الصوتية/الفيديو الإضافي**](../plugins/audio-video-notes.md) في OsmAnd.
:::

![إجراء صوت-فيديو أندرويد](/img/map/action_av_note_android.png)

يسجل أو يلتقط ملاحظة وسائط في نقطة محددة على الخريطة.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - ينشئ [ملاحظة صوتية](../map/point-layers-on-map.md#-audio--video-points-android) في النقطة المحددة (ينشئ نقطة جديدة على التراكب مع أيقونة الصوت).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - ينشئ [ملاحظة فيديو](../map/point-layers-on-map.md#-audio--video-points-android) في النقطة المحددة (ينشئ نقطة جديدة على التراكب مع أيقونة الفيديو).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - ينشئ [نقطة صورة](../map/point-layers-on-map.md#-audio--video-points-android) على الخريطة.

## تخصيص {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![قائمة سياق الخريطة تخصيص](/img/map/map_context_menu_customize_1.png) <!-- ![قائمة سياق الخريطة تخصيص](/img/map/map_context_menu_customize_2.png) --> ![قائمة سياق الخريطة تخصيص](/img/map/map_context_menu_customize_3.png)

يمكنك تغيير ترتيب أو إخفاء العناصر من قائمة *الإجراءات* في *قائمة سياق الخريطة*. يتم اقتراح ما مجموعه 16 إجراءً.

- يمكنك نقل الإجراءات الثلاثة الأكثر فائدة إلى أعلى قائمة *الإجراءات الرئيسية*.
- يمكن تخصيص بقية القائمة لكل ملف تعريف على حدة في أقسام *الإجراءات الإضافية* و*المخفية*.

الأنواع المتاحة من الإجراءات:

- **<Translate android="true" ids="main_actions"/>**. يحتوي هذا القسم على 4 أزرار فقط، ثلاثة منها يمكن تخصيصها، و"الإجراءات" التي تظل دون تغيير.
- **<Translate android="true" ids="additional_actions"/>**. يمكنك الوصول إلى هذه الإجراءات بالنقر على زر *الإجراءات*.
- **<Translate android="true" ids="shared_string_hidden"/>**. نقل الإجراءات إلى هذا القسم لا يمنعها من العمل. إنها فقط لا تظهر في قائمة الإجراءات.

## مقالات ذات صلة {#related-articles}

- [خرائط المتجهات (أنماط الخرائط)](./vector-maps.md)
- [خرائط الراستر (عبر الإنترنت / غير متصل)](./raster-maps.md)
- [النقاط على الخريطة](./point-layers-on-map.md)
- [قائمة سياق المسارات](./tracks/track-context-menu.md)
- [النقل العام](./public-transport.md)
- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: يونيو 2025*