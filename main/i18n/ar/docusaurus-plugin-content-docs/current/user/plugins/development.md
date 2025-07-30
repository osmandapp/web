---
source-hash: 32e4659b9165cb30c26907433bd60d7e450043c64b5dd1d074dd139baf41e938
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

يتم جمع وظائف اختبار التطبيق في مكون OsmAnd الإضافي للتطوير. استخدمها على مسؤوليتك الخاصة.

يتيح لك مكون OsmAnd الإضافي للتطوير تجربة ميزات جديدة للتطبيق أو تكوين OsmAnd للاختبار: محاكاة مسارات التنقل، والتحقق من أداء عرض الشاشة، وما إلى ذلك. تم تصميم المكون الإضافي *للمطورين والمستخدمين ذوي الخبرة* ولا يتطلب الاستخدام اليومي للتطبيق.

## معلمات الإعداد المطلوبة {#required-setup-parameters}

لتنشيط الميزات الخاصة للمطورين والمختبرين:

1. [قم بتمكين](../plugins/index.md#enable--disable) مكون OsmAnd الإضافي للتطوير في قسم المكونات الإضافية في *القائمة الرئيسية*.
2. قم بإجراء الإعدادات اللازمة في [قائمة إعدادات المكون الإضافي](#plugin-settings).
3. قم بتمكين **أدوات المطور** إذا لزم الأمر.

## إعدادات المكون الإضافي {#plugin-settings}

:::info info
إعدادات مكون OsmAnd الإضافي للتطوير عالمية وتنطبق على جميع الملفات الشخصية.
:::

استخدم أحد المسارات التالية لفتح إعدادات المكون الإضافي:

- *القائمة الرئيسية ← المكونات الإضافية ← تطوير OsmAnd ← الإعدادات*.
- *القائمة الرئيسية ← [الإعدادات العامة](../personal/global-settings.md) ← الملف الشخصي ← إعدادات مكون OsmAnd الإضافي للتطوير*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>

### التضاريس {#terrain}

- **استخدام تنسيق [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) النقطي للتظليل والتدرج** (*أندرويد*). تحميل خرائط نقطية بتنسيق قديم.

### استكشاف الأخطاء وإصلاحها {#troubleshotting}

- **محاكاة موقعك** (*أندرويد* / *iOS*). [محاكاة](#gpx-track-simulation) الموقع والحركة باستخدام مسار GPX.
- **وضع توفير البطارية** (*أندرويد* / *iOS*). يقلل هذا الإعداد [معدل تحديث الشاشة](#map-rendering-fps-widget) بمقدار 20 إطارًا في الثانية للمساعدة في توفير طاقة البطارية أثناء استخدام التطبيقات.
- **استخدام أيقونات تحديد الموقع ثلاثية الأبعاد** (*iOS*). يسمح لك بتحديد أيقونة ثلاثية الأبعاد [لأيقونة موقعي](../personal/profiles.md#my-location-appearance).
- **محاكاة بيانات OBD** (*أندرويد*). يسمح بمحاكاة استخدام [ماسح OBD](./vehicle-metrics.md).
- **معلومات تصحيح الأداء** (*أندرويد*). يعرض أداء العرض والتنقل.
- **تعطيل طبقات الخريطة** (*أندرويد*). يعطل جميع طبقات الخريطة فوق الخريطة المتجهة (يتطلب إعادة التشغيل).
- **مخزن Logcat المؤقت** (*أندرويد*). تحقق وشارك سجلات مفصلة للتطبيق.
- **إظهار إشعار حول المفتاح المضغوط** (*أندرويد*). عرض رسالة حول المفتاح.
- **<Translate android="true" ids="write_bearing"/>** (*أندرويد*). <Translate android="true" ids="write_bearing_description"/>. الاتجاه هو اتجاه البوصلة من موقعك الحالي إلى وجهتك المقصودة. يؤثر على *[تسجيل المسار](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*أندرويد*). <Translate android="true" ids="write_heading_description"/>. الاتجاه هو اتجاه البوصلة من موقعك الحالي نحو الشمال الحقيقي. يتم تمكين هذا الخيار افتراضيًا. يؤثر على *[تسجيل المسار](../plugins/trip-recording.md)*.

### اختبار التطبيق {#application-testing}

:::caution أندرويد فقط
:::

- **محاكاة بدء تشغيل التطبيق لأول مرة**. يقوم بتعيين العلامة التي تشير إلى بدء تشغيل التطبيق لأول مرة، ويحتفظ بجميع الإعدادات الأخرى دون تغيير.
- **اختبار المطالبات الصوتية**. حدد صوتًا واختبره عن طريق تشغيل الإعلانات.
- **شريط الحالة الشفاف**. تصبح الخريطة مرئية تحت شريط الحالة.
- **إظهار لافتة الإصدار المجاني**. عرض لافتة الإصدار المجاني حتى في الإصدار المدفوع.
- **إظهار معلومات تصحيح الأخطاء**. عرض معلومات رسومية حول موضع كل نص على الخريطة.
- **السماح بالعرض في الأعلى**. يسمح بعرض نصوص الخريطة فوق بعضها البعض.

### الخوارزميات الداخلية {#internal-algorithms}

:::caution أندرويد فقط
:::

- **الوضع الآمن**. تشغيل التطبيق في الوضع الآمن (أبطأ).

### إعدادات الذاكرة {#memory-settings}

:::caution أندرويد فقط
:::

- يسمح لك خيار **الذاكرة المخصصة للتوجيه** بتحديد مقدار الذاكرة المخصصة لحساب المسارات الطويلة. يمكنك استخدام هذا الخيار إذا تم تحديد [التوجيه القياسي A*](../navigation/guidance/navigation-settings.md#development-settings) في *إعدادات التنقل*.

***حساب المسارات الطويلة جدًا:***

- قد يؤثر تخصيص الذاكرة الأعلى على أداء التطبيقات الأخرى.
- [حساب مسارات 50 كم للمشاة](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)

### معلومات وإحصائيات {#info-and-statistics}

:::caution أندرويد فقط
:::

- **الذاكرة المخصصة**. يعرض الذاكرة المخصصة للنظام لتطبيق OsmAnd.
- **إجمالي الذاكرة الأصلية**. يعرض إجمالي مقدار الذاكرة الأصلية المخصصة للتطبيق، بما في ذلك الذاكرة النسبية.
- **معلومات A-GPS**. يشير إلى آخر مرة تم فيها تنزيل بيانات A-GPS.
- **معلومات النهار/الليل**. يشير إلى أوقات شروق الشمس وغروبها اليوم.
- **إحصائيات الطاقة (متوسط 1 / 5 / 15 دقيقة)**. يعرض مستوى البطارية لكل دقيقة (٪) ومتوسط استهلاك الطاقة (مللي أمبير ساعة) على فترات 1 و 5 و 15 دقيقة.
- **إحصائيات العرض (متوسط 1 / 5 / 15 دقيقة)**. يعرض إحصائيات العرض، بما في ذلك FPS على آخر 1k إطار، ووحدة المعالجة المركزية (البلاط)، ووحدة المعالجة المركزية (وقت الخمول)، ووحدة المعالجة المركزية (الاستعداد) بمتوسطات على فترات 1 و 5 و 15 دقيقة.

**زر:**

- **إعادة تعيين إعدادات المكون الإضافي إلى الافتراضي**. يعيد تعيين جميع إعدادات المكون الإضافي إلى قيمها الافتراضية.

![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)

## أداة FPS لعرض الخريطة {#map-rendering-fps-widget}

:::info هام
يمكن إضافة أدوات مطور OsmAnd إلى الشاشة فقط عند تمكين مكون OsmAnd الإضافي للتطوير.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

تعرض [أداة FPS](../widgets/info-widgets.md#map-rendering-fps) مدى سرعة عرض وتحديث الخريطة وعناصر الخريطة. يتم الإشارة إلى القيمة الرقمية بالإطارات في الثانية (FPS).

## أدوات موضع الكاميرا {#camera-position-widgets}

:::info هام
يمكن إضافة أدوات مطور OsmAnd إلى الشاشة فقط عند تمكين مكون OsmAnd الإضافي للتطوير.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام [أدوات موضع الكاميرا](../widgets/info-widgets.md#camera-widgets) لإعطاء خريطة OsmAnd مظهرًا واقعيًا ومطابقة صور الأرض الملتقطة من الأعلى ومن الفضاء.

### إمالة الكاميرا {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

تعرض أداة إمالة الكاميرا الميل بين متجه العرض المركزي للكاميرا (المشاهد) وأرض مسطحة وهمية للأرض. القيمة الافتراضية هي 90 درجة (لا يوجد ميل).

:::note
يتم تغيير إمالة الكاميرا عن طريق تحريك الكاميرا (المشاهد) بينما تظل النقطة المركزية على الخريطة (التي ننظر إليها) كما هي. لا تتغير المسافة إليها (في الواقع، التكبير).
في الوقت نفسه، بسبب الحركة الوهمية للمشاهد، تتغير المسافة من الكاميرا إلى السطح.
:::

### ارتفاع الكاميرا {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

تعرض أداة ارتفاع الكاميرا ارتفاع الكاميرا فوق مستوى السطح. يتم الإشارة إلى ارتفاع الكاميرا بالأمتار / الكيلومترات.

### مستوى التكبير {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

تحتوي الأداة على عرضين يتم التبديل بينهما بالنقر عليها:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. يعرض مستوى تكبير الخريطة الحالي.
- **<Translate android="true" ids="map_widget_map_scale"/>**. يعرض النسبة الحالية بين المسافة على الخريطة والمسافة المقابلة على الأرض. أمثلة: "1 : 3 000"، "1 : 3,3 M" "1: 340 K".

:::note

- مستوى التكبير الأولي (0) هو المستوى الذي يتم فيه عرض سطح الأرض بأكمله (الخريطة الكاملة) على الشاشة، وحجمه 256 × 256 بكسل.
- كل مستوى تكبير تالٍ يقلل المسافة الوهمية إلى الأرض بحوالي 2 مرة.

:::

### المسافة إلى الهدف {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

تعرض أداة المسافة من الكاميرا إلى الهدف المسافة بين الكاميرا (المشاهد) ومركز الخريطة. يتم عرض هذه المسافة بالأمتار / الكيلومترات.

### مقارنة مع صور الأقمار الصناعية {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

تكشف مقارنة خريطة OsmAnd وصور سطح الأرض عن الأنماط التالية:

- يتم ملاحظة أقصى تشويه عند التكبير الكبير (تكبير 6-7 لإمالة الكاميرا 90 درجة).
- مع انخفاض إمالة الكاميرا (من 90 إلى 10 درجات)، يزداد تشويه الخريطة.
- تبدأ التشوهات في الظهور مبكرًا في خطوط العرض العالية.

يحتوي الجدول أدناه على معلومات حول إمالة الكاميرا والمسافة إلى الهدف ومستوى التكبير الذي تصبح فيه تشوهات خريطة OsmAnd مرئية. إذا استمرت الكاميرا في الابتعاد عن الهدف، سيزداد التشويه الملاحظ لخريطة OsmAnd.

| الميل (90) | خط العرض | أقصى تكبير | الارتفاع، كم | التشويه |
| ----- | ----- | ----- | ----- | ----- |
| 90 | 26 | 6 | 5500 | 5% |
| 90 | 50 | 6 | 2500 | 5% |
| 90 | 66 | 7 | 1300 | 5% |
| **الميل (60)** | **خط العرض** | **أقصى تكبير** | **الارتفاع، كم** | **التشويه** |
| 65 | 26 | 8 | 1100 | 6.5% |
| 65 | 50 | 8 | 800 | 6.5% |
| 65 | 66 | 9 | 630 | 6.5% |
| **الميل (45)** | **خط العرض** | **أقصى تكبير** | **الارتفاع، كم** | **التشويه** |
| 45 | 26 | 9 | 350 | 7.5% |
| 45 | 50 | 9 | 320 | 7.5% |
| 45 | 66 | 8 | 210 | 7.5% |
| **الميل (20)** | **خط العرض** | **أقصى تكبير** | **الارتفاع، كم** | **التشويه** |
| 20 | 26 | 12 | 30 | 10% |
| 20 | 50 | 11 | 30 | 10% |
| 20 | 66 | 11 | 30 | 10% |

## أداة ذاكرة الوصول العشوائي المتاحة {#available-ram-widget}

تم تصميم هذه الأداة خصيصًا لك عند استخدام OsmAnd لتوفير تفاعل أكثر ملاءمة وغنية بالمعلومات مع ذاكرة الوصول العشوائي المتاحة على جهازك. تتيح لك مراقبة ذاكرة الوصول العشوائي المتاحة بسهولة وسرعة، وهو أمر مفيد بشكل خاص عند استخدام OsmAnd للتنقل. اقرأ المزيد عن الأداة في مقال [أدوات المعلومات](../widgets/info-widgets.md#available-ram).

## محاكاة مسار GPX {#gpx-track-simulation}

يوفر OsmAnd فرصة لمحاكاة موقع جهازك وحركته باستخدام مسار GPX. لهذه الأغراض، استخدم خيار *<Translate android="true" ids="simulate_location_by_gpx"/>* في [إعدادات](#plugin-settings) مكون OsmAnd الإضافي للتطوير:

- انقر على *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- حدد مسارًا لمحاكاة موقع الجهاز وحركته.
- حدد سرعة محاكاة الحركة.
- انقر على زر البدء.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

بعد تشغيل المحاكاة، سترى على الشاشة الرئيسية للتطبيق أن علامة التنقل تتحرك وفقًا لمسار GPX. انقر على [زر موقعي](../map/interact-with-map#my-location-and-zoom) لمزامنة *موقعي* (الموقع الجغرافي المحاكى للجهاز) مع مركز الخريطة.
لإيقاف محاكاة حركة جهازك، ارجع إلى [إعدادات](#plugin-settings) مكون OsmAnd الإضافي للتطوير وانقر على **إيقاف** في خيار **محاكاة موقعك**.

- يمكن الوصول إلى *<Translate android="true" ids="simulate_location_by_gpx"/>* أيضًا من خلال **[قائمة الإجراءات السريعة](../widgets/quick-action.md#navigation)**.
- يمكن تعيين سرعة حركة الموقع أثناء المحاكاة مساوية للسرعة المسجلة (1)، أو أسرع (x2، x3، x4).
- يمكنك أيضًا محاكاة الحركة على طول مسار GPX من [قائمة التنقل](../navigation/setup/route-navigation.md#simulated-navigation) دون تمكين مكون OsmAnd الإضافي للتطوير. في هذه الحالة، لن يتم مزامنة موقعك مع المسار.

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخريطة)](../../user/map/vector-maps.md)

> *آخر تحديث: مايو 2023*