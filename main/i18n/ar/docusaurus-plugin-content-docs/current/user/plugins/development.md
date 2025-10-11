---
source-hash: 0012b0b27dc9467a3efde4bc95e7f8d8af48788d2a65da16e21d49538ebd149b
sidebar_position: 10
title:  تطوير OsmAnd
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

يتم تجميع وظائف اختبار التطبيق في ملحق تطوير OsmAnd. استخدمها على مسؤوليتك الخاصة.

يسمح لك ملحق تطوير OsmAnd بتجربة ميزات جديدة للتطبيق أو تكوين OsmAnd للاختبار: محاكاة مسارات الملاحة، والتحقق من أداء عرض الشاشة، وما إلى ذلك. تم تصميم الملحق *للمطورين والمستخدمين ذوي الخبرة* وهو غير مطلوب للاستخدام اليومي للتطبيق.


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لتفعيل الميزات الخاصة للمطورين والمختبرين:

1. [تفعيل](../plugins/index.md#enable--disable) ملحق تطوير OsmAnd في قسم الملحقات من *القائمة الرئيسية*.
2. قم بإجراء الإعدادات اللازمة في [قائمة الإعدادات](#plugin-settings) الخاصة بالملحق.
3. قم بتمكين **أدوات المطور** إذا لزم الأمر.


## إعدادات الملحق {#plugin-settings}

:::info معلومة
إعدادات ملحق تطوير OsmAnd عالمية وتنطبق على جميع الملفات الشخصية.
:::

استخدم أحد المسارات التالية لفتح إعدادات الملحق:

- *القائمة الرئيسية ← الملحقات ← تطوير OsmAnd ← الإعدادات*.
- *القائمة الرئيسية ← [الإعدادات العامة](../personal/global-settings.md) ← الملف الشخصي ← إعدادات ملحق تطوير OsmAnd*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات التطوير أندرويد](@site/static/img/plugins/development/development_settings_1_andr.png) ![إعدادات التطوير 2 أندرويد](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات التطوير iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### التضاريس {#terrain}

- **استخدام تنسيق [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) النقطي لتظليل التلال والمنحدرات** (*أندرويد*). عند استخدام محرك العرض V2، بدلاً من حساب تظليل التلال أو المنحدرات من خريطة التضاريس ثلاثية الأبعاد، استخدم الخرائط النقطية بالتنسيق القديم لهذا الغرض. يمكن أن يسرع ذلك العرض بشكل كبير.


### استكشاف الأخطاء وإصلاحها {#troubleshooting}

- **محاكاة موقعك** (*أندرويد* / *iOS*). [محاكاة](#gpx-track-simulation) الموقع والحركة باستخدام مسار GPX.
- **وضع توفير البطارية** (*أندرويد* / *iOS*). يقلل هذا الإعداد من [معدل تحديث الشاشة](#map-rendering-fps-widget) بمقدار ٢٠ إطارًا في الثانية للمساعدة في توفير طاقة البطارية أثناء استخدام التطبيقات.
- **استخدام أيقونات موقع ثلاثية الأبعاد** (*iOS*). يسمح لك بتحديد أيقونة ثلاثية الأبعاد لـ[أيقونة موقعي](../personal/profiles.md#my-location-appearance).
- **محاكاة بيانات OBD** (*أندرويد*). يسمح بمحاكاة استخدام [ماسح OBD](./vehicle-metrics.md).
- **معلومات تصحيح أخطاء الأداء** (*أندرويد*). يعرض أداء العرض والملاحة.
- **تعطيل طبقات الخريطة** (*أندرويد*). يعطل جميع طبقات الخريطة فوق الخريطة المتجهية (يتطلب إعادة التشغيل).
- **مخزن Logcat المؤقت** (*أندرويد*). تحقق وشارك سجلات مفصلة للتطبيق.
- **إظهار رسالة منبثقة حول المفتاح المضغوط** (*أندرويد*). عرض رسالة حول المفتاح.
- **<Translate android="true" ids="write_bearing"/>** (*أندرويد*). <Translate android="true" ids="write_bearing_description"/>. الاتجاه هو اتجاه البوصلة من موقعك الحالي إلى وجهتك المقصودة. يؤثر على *[تسجيل المسار](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*أندرويد*). <Translate android="true" ids="write_heading_description"/>. التوجيه هو اتجاه البوصلة من موقعك الحالي نحو الشمال الحقيقي. هذا الخيار ممكّن افتراضيًا. يؤثر على *[تسجيل المسار](../plugins/trip-recording.md)*.


### اختبار التطبيق {#application-testing}

:::caution أندرويد فقط
:::

- **محاكاة بدء تشغيل التطبيق لأول مرة**. يضبط العلامة التي تشير إلى بدء تشغيل التطبيق لأول مرة، مع الحفاظ على جميع الإعدادات الأخرى دون تغيير.
- **اختبار التوجيهات الصوتية**. حدد صوتًا واختبره عن طريق تشغيل الإعلانات.
- **شريط الحالة الشفاف**. تصبح الخريطة مرئية تحت شريط الحالة.
- **إظهار لافتة النسخة المجانية**. عرض لافتة النسخة المجانية حتى في النسخة المدفوعة.
- **إظهار معلومات تصحيح الأخطاء**. عرض معلومات رسومية حول موضع كل نص على الخريطة.
- **السماح بالعرض في الأعلى**. يسمح بعرض نصوص الخريطة فوق بعضها البعض.


### الخوارزميات الداخلية {#internal-algorithms}

:::caution أندرويد فقط
:::

- **الوضع الآمن**. تشغيل التطبيق في الوضع الآمن (الأبطأ).


### إعدادات الذاكرة {#memory-settings}

:::caution أندرويد فقط
:::

- خيار **الذاكرة المخصصة للتوجيه** يسمح لك بتحديد مقدار الذاكرة المخصصة لحساب المسارات الطويلة. يمكنك استخدام هذا الخيار إذا تم تحديد [التوجيه القياسي A*](../navigation/guidance/navigation-settings.md#development-settings) في *إعدادات الملاحة*.

***حساب المسارات الطويلة جدًا:***

- قد يؤثر تخصيص ذاكرة أعلى على أداء التطبيقات الأخرى.
- [حساب مسارات ٥٠ كم للمشاة](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### المعلومات والإحصائيات {#info-and-statistics}

:::caution أندرويد فقط
:::

- **الذاكرة المخصصة**. يعرض ذاكرة النظام المخصصة لتطبيق OsmAnd.
- **إجمالي الذاكرة الأصلية**. يعرض إجمالي مقدار الذاكرة الأصلية المخصصة للتطبيق، بما في ذلك الذاكرة النسبية.
- **معلومات A-GPS**. يشير إلى آخر مرة تم فيها تنزيل بيانات A-GPS.
- **معلومات النهار/الليل**. يشير إلى أوقات شروق وغروب الشمس اليوم.
- **إحصائيات الطاقة (متوسط ١ / ٥ / ١٥ دقيقة)**. يعرض مستوى البطارية في الدقيقة (٪) ومتوسط استهلاك الطاقة (مللي أمبير/ساعة) على فترات ١ و ٥ و ١٥ دقيقة.
- **إحصائيات العرض (متوسط ١ / ٥ / ١٥ دقيقة)**. يعرض إحصائيات العرض، بما في ذلك معدل الإطارات في الثانية (FPS) لآخر ١٠٠٠ إطار، ومتوسطات وحدة المعالجة المركزية (البلاطات)، ووحدة المعالجة المركزية (وقت الخمول)، ووحدة المعالجة المركزية (الاستعداد) على فترات ١ و ٥ و ١٥ دقيقة.

**الزر:**

- **إعادة تعيين إعدادات الملحق إلى الوضع الافتراضي**. يعيد تعيين جميع إعدادات الملحق إلى قيمها الافتراضية.

    ![إعدادات التطوير أندرويد](@site/static/img/plugins/development/devplugin_stat_and.png)


## أداة عرض معدل الإطارات في الثانية للخريطة {#map-rendering-fps-widget}

:::info هام
يمكن إضافة أدوات مطور OsmAnd إلى الشاشة فقط عند تمكين ملحق تطوير OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![أداة التطوير fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![أداة التطوير fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![أداة التطوير iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

تُظهر [أداة FPS](../widgets/info-widgets.md#map-rendering-fps) مدى سرعة عرض وتحديث الخريطة وعناصرها. يتم الإشارة إلى القيمة الرقمية بالإطارات في الثانية (FPS).


## أدوات موضع الكاميرا {#camera-position-widgets}

:::info هام
يمكن إضافة أدوات مطور OsmAnd إلى الشاشة فقط عند تمكين ملحق تطوير OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![أدوات موضع الكاميرا 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![أدوات موضع الكاميرا 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![أدوات موضع الكاميرا 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![أدوات موضع الكاميرا 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام [أدوات موضع الكاميرا](../widgets/info-widgets.md#camera-widgets) لإعطاء خريطة OsmAnd مظهرًا واقعيًا ومطابقة صور الأرض الملتقطة من الأعلى ومن الفضاء.


### إمالة الكاميرا {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة إمالة الكاميرا أندرويد 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![أداة إمالة الكاميرا أندرويد 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة إمالة الكاميرا ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![أداة إمالة الكاميرا ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

تعرض أداة إمالة الكاميرا الميل بين متجه العرض المركزي للكاميرا (المشاهد) وأرضية مسطحة وهمية للأرض. القيمة الافتراضية هي ٩٠ درجة (بدون إمالة).

:::note
يتم تغيير إمالة الكاميرا عن طريق تحريك الكاميرا (المشاهد) بينما تظل النقطة المركزية على الخريطة (التي ننظر إليها) كما هي. المسافة إليها (في الواقع، التكبير/التصغير) لا تتغير.
في الوقت نفسه، بسبب الحركة الوهمية للمشاهد، تتغير المسافة من الكاميرا إلى السطح.
:::


### ارتفاع الكاميرا {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة ارتفاع الكاميرا أندرويد 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![أداة ارتفاع الكاميرا أندرويد 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة ارتفاع الكاميرا ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![أداة ارتفاع الكاميرا ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

تُظهر أداة ارتفاع الكاميرا ارتفاع الكاميرا فوق مستوى السطح. يُشار إلى ارتفاع الكاميرا بالأمتار / الكيلومترات.


### مستوى التكبير/التصغير {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة مستوى التكبير/التصغير أندرويد 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![أداة مستوى التكبير/التصغير أندرويد 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة مستوى التكبير/التصغير ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![أداة مستوى التكبير/التصغير ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

للأداة عرضان يتم التبديل بينهما بالنقر عليها:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. يعرض مستوى التكبير/التصغير الحالي للخريطة.
- **<Translate android="true" ids="map_widget_map_scale"/>**. يعرض النسبة الحالية بين مسافة على الخريطة والمسافة المقابلة على الأرض. أمثلة: "1 : 3 000"، "1 : 3,3 M" "1: 340 K".

:::note

- مستوى التكبير/التصغير الأولي (٠) هو المستوى الذي يتم فيه عرض سطح الأرض بالكامل (الخريطة الكاملة) على الشاشة، وحجمه ٢٥٦ × ٢٥٦ بكسل.
- كل مستوى تكبير/تصغير تالٍ يقلل المسافة الوهمية إلى الأرض بحوالي مرتين.

:::

### المسافة إلى الهدف {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة المسافة إلى الهدف 1 أندرويد](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![أداة المسافة إلى الهدف 2 أندرويد](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة المسافة إلى الهدف 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![أداة المسافة إلى الهدف 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

تُظهر أداة المسافة من الكاميرا إلى الهدف المسافة بين الكاميرا (المشاهد) ومركز الخريطة. يتم عرض هذه المسافة بالأمتار / الكيلومترات.


### مقارنة مع صور الأقمار الصناعية {#comparison-with-a-satellite-imagery}

![مقارنة](@site/static/img/plugins/development/comparison.png)

تكشف مقارنة خريطة OsmAnd وسطح الأرض عن الأنماط التالية:

- يُلاحظ أقصى تشوه عند مستويات التكبير/التصغير الكبيرة (تكبير ٦-٧ لإمالة الكاميرا ٩٠ درجة).
- مع انخفاض إمالة الكاميرا (من ٩٠ إلى ١٠ درجات)، يزداد تشوه الخريطة.
- تبدأ التشوهات في الظهور في وقت مبكر عند خطوط العرض العليا.

يحتوي الجدول أدناه على معلومات حول إمالة الكاميرا والمسافة إلى الهدف ومستوى التكبير/التصغير الذي تصبح فيه تشوهات خريطة OsmAnd مرئية. إذا استمرت الكاميرا في الابتعاد عن الهدف، سيزداد التشوه الملحوظ لخريطة OsmAnd.

|الميل (٩٠) |خط العرض |أقصى تكبير |الارتفاع، كم |التشوه|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**الميل (٦٠)** |**خط العرض** |**أقصى تكبير** |**الارتفاع، كم** |**التشوه**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**الميل (٤٥)** |**خط العرض** |**أقصى تكبير** |**الارتفاع، كم** |**التشوه**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**الميل (٢٠)** |**خط العرض** |**أقصى تكبير** |**الارتفاع، كم** |**التشوه**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## أداة ذاكرة الوصول العشوائي المتاحة {#available-ram-widget}

تم تصميم هذه الأداة خصيصًا لك عند استخدام OsmAnd لتوفير تفاعل أكثر ملاءمة وغنى بالمعلومات مع ذاكرة الوصول العشوائي المتاحة على جهازك. تتيح لك مراقبة ذاكرة الوصول العشوائي المتاحة بسهولة وسرعة، وهو أمر مفيد بشكل خاص عند استخدام OsmAnd للملاحة. اقرأ المزيد عن الأداة في مقالة [أدوات المعلومات](../widgets/info-widgets.md#available-ram).


## محاكاة مسار GPX {#gpx-track-simulation}

يوفر OsmAnd فرصة لمحاكاة موقع وحركة جهازك باستخدام مسار GPX. لهذه الأغراض، استخدم خيار *<Translate android="true" ids="simulate_location_by_gpx"/>* في [إعدادات](#plugin-settings) ملحق تطوير OsmAnd:

- انقر على *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- حدد مسارًا لمحاكاة موقع وحركة الجهاز.
- حدد سرعة محاكاة الحركة.
- انقر على زر البدء.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات التطوير أندرويد](@site/static/img/plugins/development/simulate_position_andr_1.png) ![إعدادات التطوير أندرويد](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات التطوير iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![إعدادات التطوير iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

بعد تشغيل المحاكاة، سترى على الشاشة الرئيسية للتطبيق أن علامة الملاحة تتحرك وفقًا لمسار GPX. انقر على [زر موقعي](../map/interact-with-map.md#my-location-and-zoom) لمزامنة *موقعي* (الموقع الجغرافي المحاكى للجهاز) مع مركز الخريطة.
لإيقاف محاكاة حركة جهازك، ارجع إلى [إعدادات](#plugin-settings) تطوير OsmAnd وانقر على **إيقاف** في خيار **محاكاة موقعك**.

- يمكن أيضًا الوصول إلى *<Translate android="true" ids="simulate_location_by_gpx"/>* من خلال **[قائمة الإجراءات السريعة](../widgets/quick-action.md#navigation)**.
- يمكن ضبط سرعة حركة الموقع أثناء المحاكاة لتكون مساوية للسرعة المسجلة (1)، أو أسرع (x2، x3، x4).
- يمكنك أيضًا محاكاة الحركة على طول مسار GPX من [قائمة الملاحة](../navigation/setup/route-navigation.md#simulated-navigation) دون تمكين ملحق تطوير OsmAnd. في هذه الحالة، لن تتم مزامنة موقعك مع المسار.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)