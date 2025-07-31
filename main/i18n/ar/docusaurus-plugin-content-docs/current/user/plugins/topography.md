---
source-hash: 191954c813f34f798ce26abb0d68f5443817e0370f9497817d385e2fbd80105e
sidebar_position: 14
title: التضاريس
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

:::info ميزة مدفوعة
مكون التضاريس الإضافي هو [ميزة مدفوعة](../purchases/index.md) لتطبيق OsmAnd.
:::

التضاريس هي ميزة مهمة في علم الخرائط توفر معلومات لتقييم تضاريس الأرض بصريًا.
تساعد معلومات التضاريس مثل [خطوط الكنتور](#contour-lines) و[التضاريس](#terrain) (*تظليل التلال* و*المنحدر*) و[الإغاثة ثلاثية الأبعاد](#3d-relief) في إجراء تقييم بصري لتضاريس الأرض من خلال رؤية الارتفاع، والتضاريس، والحدود القصوى، والانحدار، أو نقاط الارتفاع المتساوي.

كل ميزة يوفرها هذا المكون الإضافي هي طبقة خريطة مستقلة، عند تمكينها، يمكن عرضها فوق أو تحت مصدر الخريطة الرئيسي اعتمادًا على [الإعدادات](../map/raster-maps.md#overlay-layer).

يوفر مكون التضاريس الإضافي الوصول إلى أنواع الخرائط التالية:

- [خطوط الكنتور](#contour-lines). هذه [خريطة متجهة](../map/vector-maps.md) ممثلة بـ [**الأمتار** أو **الأقدام**](#contour-lines-meters-or-feet). تُظهر خطوط الكنتور مستويات الارتفاع وتساعد في تصور التضاريس.
- [تظليل التلال](#hillshade-slope-and-altitude-layers). أنواع الخرائط ذات تظليل التلال والمنحدرات تجعل التضاريس أكثر وضوحًا وتساعد على تفسير التضاريس بصريًا.
- [المنحدر](#hillshade-slope-and-altitude-layers). طبقة [نقطية](../map/raster-maps.md) توفر معلومات حول انحدار المنحدرات، والتي يمكن أن تكون مهمة لتخطيط المسار والسلامة.
- [الإغاثة ثلاثية الأبعاد](#3d-relief). هي [خريطة متجهة](../map/vector-maps.md) توفر تمثيلًا ثلاثي الأبعاد للتضاريس، وهي متاحة فقط باشتراك [OsmAnd Pro](../purchases/index.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| خطوط الكنتور | تظليل التلال | المنحدر |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| خطوط الكنتور | تظليل التلال | المنحدر |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### ترخيص بيانات DEM المستخدمة بواسطة OsmAnd لاكتشاف التضاريس {#license-for-dem-data-used-by-osmand-for-terrain-detection}

تم الحصول على بيانات الارتفاع على الخريطة (بين 70 درجة شمال خط العرض و 70 درجة جنوب خط العرض) من القياسات التي أجريت كجزء من *مهمة مكوك الرادار الطبوغرافية (SRTM)*. وقد استخدمت *مقياس الإشعاع الحراري والانعكاس الفضائي المتقدم (ASTER)*، وهو أداة التصوير الأساسية في *نظام مراقبة الأرض التابع لناسا*.
للحصول على معلومات كاملة، راجع [الترخيص](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).

<details>
<summary>بيانات DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. البيانات الأصلية المستخدمة لهذا المنتج تم توفيرها بواسطة JAXA’s AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>

## معلمات الإعداد المطلوبة {#required-setup-parameters}

لعرض بيانات **خطوط الكنتور** و**التضاريس (تظليل التلال، المنحدر)** على الخريطة:

1. **الشراء**: [خطة شراء OsmAnd+، أو OsmAnd Maps+، أو OsmAnd Pro](../plugins/index.md#purchase)
2. [تمكين](../plugins/index.md#enable--disable) مكون التضاريس الإضافي في قسم المكونات الإضافية من *القائمة الرئيسية*.
3. [تنزيل](#download-maps): خطوط الكنتور، تظليل التلال، المنحدر، أو خرائط التضاريس (ثلاثية الأبعاد).
4. **تمكين وتعديل**: خطوط الكنتور، تظليل التلال، أو المنحدر لعرض الخريطة.
5. يمكنك أيضًا مشاهدة [البرنامج التعليمي على YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

لعرض [**الإغاثة ثلاثية الأبعاد**](#3d-relief) تحتاج إلى شراء خطة *OsmAnd Pro*، بما في ذلك الوصول إلى مكون التضاريس الإضافي.

## تنزيل الخرائط {#download-maps}

للبدء في استخدام وظائف المكون الإضافي، تحتاج إلى تنزيل الخرائط التي تهتم بها. قد تكون بعض الخرائط، مثل خطوط الكنتور للمناطق الجبلية، كبيرة جدًا، وتتجاوز 2 جيجابايت، وقد لا تكون مدعومة على الأجهزة القديمة.

للعمل المستقر ولتوفير الموارد، يمكنك تنزيل خريطة ليست للبلد بأكمله، ولكن لمناطق محددة منه، إذا كانت هذه المناطق معروضة في التطبيق. يتم سرد معلومات حول حجم كل نوع خريطة تحت اسمها.

### خرائط الإغاثة ثلاثية الأبعاد {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

تحتاج إلى تنزيل خرائط **التضاريس (ثلاثية الأبعاد)** لعرض تظليل التلال، والمنحدر، والإغاثة ثلاثية الأبعاد. بعد تنزيل الخرائط، يمكنك عرض **خطوط الكنتور** و**التضاريس** باستخدام قسم [تكوين الخريطة](../map/configure-map-menu.md) من *القائمة الرئيسية*.

إذا لم يتم تنزيل الخريطة المعروضة على الشاشة، فسيتم عرض قسم *تنزيل الخرائط* مع خرائط إضافية مقترحة في *القائمة ← تكوين الخريطة ← قسم التضاريس ← التضاريس* في أسفل قائمة الميزات.

### خطوط الكنتور (أمتار أو أقدام) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

بالنسبة [**لخطوط الكنتور**](#contour-lines)، تحتاج إلى تحديد الوحدات [units](../personal/profiles.md#units--formats) (أمتار أو أقدام) التي ستُعرض بها على الخريطة وتنزيل الإصدار المناسب من الخريطة على جهازك.

**خيارات الوحدة غير قابلة للتبديل**، لذا إذا كنت بحاجة إلى التبديل من الأمتار إلى الأقدام أو العكس، فإنه يلزمك إلغاء تثبيت الإصدار السابق من خريطة خطوط الكنتور لتنزيل الإصدار الجديد.

## خطوط الكنتور {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> ← خطوط الكنتور*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[خطوط الكنتور](../map/vector-maps.md#-contour-lines) هي تمثيل رسومي للارتفاعات على الخريطة وهي متاحة كخرائط متجهة. تشكل خطوطًا تتوافق مع نقاط لها نفس الارتفاع، والتي تشكل خطوطًا كنتورية تسمح لك بتحديد الاتجاه ومقدار انحدار السطح.

عند استخدام [محرك عرض الخرائط](../personal/global-settings.md#map-rendering-engine):

- **الإصدار 2 (OpenGL)**. يتم دعم خطوط الكنتور في كل من العرض ثلاثي الأبعاد ووضع الإغاثة ثلاثية الأبعاد.
- **الإصدار 1**. لا يتم دعم خطوط الكنتور عند استخدام خرائط البلاط المستمدة من الإنترنت.

**إعدادات المظهر**:

- *<Translate android="true" ids="download_srtm_maps"/>*. تشغيل أو إيقاف خطوط الكنتور.
- *<Translate android="true" ids="show_from_zoom_level"/>*. تحديد [مستويات التكبير/التصغير](../map/interact-with-map.md#my-location-and-zoom) التي تكون عندها خطوط الكنتور مرئية.
- *<Translate android="true" ids="srtm_color_scheme"/>*. اختيار لون عرض خطوط الكنتور.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. ضبط عرض خطوط الكنتور.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. اختيار كثافة خطوط الكنتور (منخفضة، متوسطة، عالية). قد تؤثر الكثافات الأعلى على سرعة التحميل.
- *<Translate android="true" ids="maps_and_resources"/>*. عرض وتنزيل خرائط خطوط الكنتور للمنطقة الحالية والمناطق المجاورة.

## التضاريس {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

يتيح خيار **التضاريس** تمكين وتخصيص ثلاث ميزات مثل *تظليل التلال* و*المنحدر* و*الارتفاع*.
ميزات محددة:

- يمكن تمكين خيار واحد فقط في نفس الوقت، إما تظليل التلال، أو المنحدر، أو الارتفاع.
- إذا لم ترَ أي تغييرات بعد تنزيل الخريطة المقابلة وتمكينها، يوصى بإعادة تشغيل التطبيق.

تتضمن قائمة **التضاريس** اختيار [نظام الألوان](#default-color-scheme) مع خيار [تعديله](#modify-color-scheme) (للمشتركين في [Pro](../../user/purchases/index.md))، والقدرة على تغيير شفافية الطبقة على الخريطة ([الرؤية](#visibility))، وتحديد [مستوى التكبير/التصغير](#zoom-levels) لعرضها، ومعلومات حول حجم [البيانات المخزنة مؤقتًا](#cache-size)، وقائمة [الخرائط](../../user/personal/maps-resources.md) اللازمة لعرض الطبقة.

## طبقات تظليل التلال والمنحدر والارتفاع {#hillshade-slope-and-altitude-layers}

| تظليل التلال | المنحدر | الارتفاع |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**تظليل التلال** يعتمد على محاكاة إضاءة السطح باستخدام بيانات التضاريس. تتضمن هذه الطريقة إنشاء الظلال والإبرازات بناءً على زاوية السطح بالنسبة لمصدر الضوء. ونتيجة لذلك، ترى تلالًا طبيعية، ووديانًا، وتفاصيل تضاريس أخرى على الخريطة.

يحدد **المنحدر** زاوية ميل السطح بناءً على بيانات الارتفاع للنقاط على الخريطة. يتم إجراء حسابات زاوية الميل مع الأخذ في الاعتبار التغيرات في الارتفاع والمسافات بين النقاط، وتمثيل هذا التغيير كزاوية ميل.

يمثل **الارتفاع** ارتفاع النقاط على الخريطة بالنسبة لمستوى سطح البحر. يساعدك على فهم كيفية تغير التضاريس في الارتفاع. هذه الميزة مفيدة بشكل خاص للأنشطة مثل المشي لمسافات طويلة أو ركوب الدراجات الجبلية، حيث يمكن أن يساعد معرفة الارتفاع في تخطيط المسارات وإدارة الجهد البدني. تُشتق بيانات الارتفاع من نماذج الارتفاع وتوفر رؤية واضحة للنقاط العالية والمنخفضة، مما يسهل تقييم صعوبة المسار أو تحديد القمم والوديان على طول رحلتك.

يتم إنشاء خرائط **تظليل التلال** و**المنحدر** و**الارتفاع** النقطية بناءً على بيانات التضاريس النقطية مثل نماذج الارتفاع الرقمية (DEM).

**الاستخدام:**

- *التنقل.* يساعد في تحديد المنحدرات شديدة الانحدار، سواء نزولًا أو صعودًا، وهو أمر بالغ الأهمية للملاحة الآمنة.
- *تخطيط المسارات.* يساعد في اختيار المسارات الأنسب، مع الأخذ في الاعتبار التضاريس.
- *تقدير التضاريس.* إنه مناسب لتصور المناظر الطبيعية، خاصة إذا كنت تمشي أو تركب الدراجة.

### نظام الألوان الافتراضي {#default-color-scheme}

| تظليل التلال | المنحدر | الارتفاع |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- يستخدم *تظليل التلال* ظلالًا داكنة لإظهار المنحدرات والقمم والمنخفضات. الشمس الافتراضية لها سمت ثابت (اتجاه) يبلغ 315 درجة.

- يستخدم *المنحدر* الألوان لتصوير انحدار التضاريس. يمكنك قراءة المزيد عنه [هنا](https://en.wikipedia.org/wiki/Grade_(slope)). يتوافق كل لون مع زاوية انحراف عن الأفقي. يتوفر نظام ألوان *المنحدر* الإضافي، ***الانهيار الجليدي***، في قائمة **التعديل**.

- *الارتفاع*. خرائط الارتفاع تلون كل بكسل وفقًا لارتفاع الخريطة المحسوب باستخدام التدرج اللوني من نظام ألوان محدد. عادةً ما تعتمد أنظمة الارتفاع بشكل كبير على الموقع. في المناطق الجبلية، قد تفضل توزيع الألوان على نطاق ارتفاع أوسع، وفي المناطق المسطحة، قد تختار نظام ألوان بنطاق صغير بين الحد الأدنى/الأقصى للارتفاع.

> *يرجى قراءة مقال [نظام الألوان](../personal/color-palette-schemes.md) لمزيد من المعلومات.*

### تعديل نظام الألوان {#modify-color-scheme}

:::info ميزة مدفوعة
*تعديل نظام الألوان* هي ميزة مدفوعة من **OsmAnd Pro** [لنظام iOS](../purchases/ios.md#pro-features) و[Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

تتيح لك ميزة *تعديل نظام الألوان* تحديد نظام ألوان:

- من [قائمة محددة مسبقًا](#default-color-scheme).
- من ملفات لوحة الألوان التي أنشأتها على جهاز الكمبيوتر الخاص بك. يمكن إضافة الملفات المخصصة إلى OsmAnd باستخدام [أداة الاستيراد/التصدير](../personal/import-export.md).

يمكنك [تعديل هذه اللوحات](../personal/color-palette-schemes.md#edit-palette-file) لتخصيص مظهر الخرائط والمسارات.

### الرؤية {#visibility}

| الرؤية 31% | الرؤية 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

تُستخدم وظيفة *الرؤية* لضبط شفافية الظلال لتظليل التلال والألوان المستخدمة لتمثيل الزاوية في معلمة المنحدر.

### مستويات التكبير/التصغير {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

تسمح لك وظيفة *مستويات المقياس* بتعيين القيم الدنيا والقصوى لمستويات تكبير الخريطة، والتي تتراوح من 4 إلى 19، والتي ستعرض طبقات خريطة تظليل التلال أو المنحدر.

### حجم الذاكرة المؤقتة {#cache-size}

**حجم الذاكرة المؤقتة** هو قسم معلوماتي يعرض مقدار الذاكرة على جهازك المستخدم حاليًا لبيانات *التضاريس*. في كل مرة تعرض فيها معلومات *تظليل التلال* أو *المنحدر* على الخريطة، يتم تخزين جميع هذه البيانات مؤقتًا في الذاكرة المؤقتة للوصول السريع والاستخدام اللاحق، مما يتجنب تحميلًا إضافيًا على معالج جهازك.

**مسح الذاكرة المؤقتة** ضروري أحيانًا لتحرير مساحة على جهازك أو لحل مشكلات الأداء المحتملة. لمسح الذاكرة المؤقتة، تحتاج إلى الانتقال إلى *إعدادات النظام* للجهاز، ثم يمكن أن يكون المسار كالتالي: *التطبيقات ← OsmAnd ← التخزين ← مسح الذاكرة المؤقتة*.

### محرك العرض (أندرويد) {#rendering-engine-android}

يتم عرض وتعديل **تظليل التلال** و**المنحدر** في أي [محرك عرض خرائط](../personal/global-settings.md#map-rendering-engine) محدد.

1. إذا كنت تستخدم **محرك عرض الخرائط الإصدار 1**، فستحتاج إلى استخدام [التنزيل](../start-with/download-maps.md) العادي لخرائط تظليل التلال والمنحدر النقطية.

2. إذا كنت تستخدم **محرك عرض الخرائط الإصدار 2 (OpenGL)**:
    - يمكنك الاستمرار في استخدام نوع تنزيل خرائط تظليل التلال والمنحدر النقطية العادي. ومع ذلك، للقيام بذلك، ستحتاج إلى تنشيط [مكون OsmAnd الإضافي للتطوير](../plugins/development.md) وتمكين إعداد [استخدام تنسيق SQLite النقطي لتظليل التلال والمنحدر](../plugins/development.md#terrain).

    - بدلاً من ذلك، يمكنك استخدام تنزيل [خريطة التضاريس (ثلاثية الأبعاد)](../personal/maps-resources.md#paid-features-for-the-selected-location). يوفر هذا مساحة ذاكرة على جهازك، وسيتم إنشاء تأثيرات تظليل التلال والمنحدر والإغاثة ثلاثية الأبعاد منها باستخدام جهازك.

### الإجراءات السريعة {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

يمكنك استخدام أزرار *الإجراء السريع* على شاشة الخريطة لتبديل رؤية [خطوط الكنتور](#contour-lines)، وطبقات [التضاريس](#terrain)، و[نظام ألوان التضاريس](#default-color-scheme). اعتمادًا على الطبقة المحددة في قائمة تكوين الخريطة، سيؤدي تعيين إجراء *التضاريس* للزر إلى عرض *تظليل التلال*، أو *المنحدر*، أو *الارتفاع*.

توجد الإعدادات الرئيسية لـ *إظهار أو إخفاء أنواع الخرائط* في قسم التضاريس من قائمة تكوين الخريطة. في مقال [الإجراء السريع](../widgets/quick-action.md#configure-map)، يمكنك العثور على قائمة بالطبقات المتاحة للعرض. إذا كنت بحاجة إلى وصول سريع إلى تكوين الخريطة هذا، فاستخدم أداة *الزر المخصص*.

- انتقل إلى [إضافة إجراء](../widgets/quick-action.md#custom-buttons): *القائمة ← تكوين الشاشة ← الأزرار المخصصة ← الإجراء السريع ← إضافة إجراء ← تكوين الخريطة*.
- أضف زر QA واحدًا أو أكثر لتغيير رؤية طبقة تضاريس معينة.

## الإغاثة ثلاثية الأبعاد {#3d-relief}

:::info ميزة احترافية
الإغاثة ثلاثية الأبعاد هي ميزة مدفوعة من [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

تنتج ميزة الإغاثة ثلاثية الأبعاد إغاثة مرتفعة وتوفر تمثيلًا ثلاثي الأبعاد للمناظر الطبيعية. تعمل الإغاثة ثلاثية الأبعاد دون اتصال بالإنترنت ويمكن استخدامها مع [خرائط OsmAnd المتجهة](../map/vector-maps.md) أو أي [خرائط نقطية](../map/raster-maps.md#select-raster-maps) كمصدر [للخريطة](../map/raster-maps.md#main) أو كطبقة [سفلية/علوية](../map/raster-maps.md#overlay-layer).

***كيفية عرض الإغاثة ثلاثية الأبعاد على الخريطة.***

- اشترِ اشتراك **OsmAnd Pro** [لنظام iOS](../purchases/ios.md#pro-features) أو [Android](../purchases/android.md#pro-features).

- انتقل إلى [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: انتقل إلى *<Translate android="true" ids="srtm_plugin_name"/> قسم ← <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: انتقل إلى *<Translate ios="true" ids="srtm_plugin_name"/> قسم ← <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- قم بتنزيل [خريطة التضاريس (ثلاثية الأبعاد)](#3d-relief-maps) للمناطق، إذا لزم الأمر.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| طبقة الخريطة المتجهة | طبقة الخريطة النقطية |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| طبقة الخريطة المتجهة | طبقة الخريطة النقطية |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>

### المبالغة الرأسية {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> ← المبالغة الرأسية*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> ← المبالغة الرأسية*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*المبالغة الرأسية* هي معامل خاص لـ *الإغاثة ثلاثية الأبعاد*. يمكنك تغيير المقياس (*المبالغة الرأسية*) من x1 إلى x3. تتيح لك هذه الميزة عرض خطوط كنتورية أكثر سلاسة مع تفاصيل متزايدة.

### تظليل التلال والإغاثة ثلاثية الأبعاد {#hillshade-and-3d-relief}

| تظليل التلال | الإغاثة ثلاثية الأبعاد |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**تظليل التلال** هو نوع من الخرائط يعرض التضاريس باستخدام الظلال، مما يخلق تمثيلًا بصريًا لانحدار وشكل سطح الأرض.
**الإغاثة ثلاثية الأبعاد** هي ميزة تضيف تأثيرات ثلاثية الأبعاد إلى الخريطة.

إذا قمت **بتعطيل** *تظليل التلال* و**تمكين** *الإغاثة ثلاثية الأبعاد*، فستظل ظلال الإغاثة مرئية لأن *تظليل التلال* و*الإغاثة ثلاثية الأبعاد* هما طريقتان مختلفتان لتصور الخريطة. ينشئ *تظليل التلال* ظلالًا بناءً على التضاريس ويضيفها إلى الخريطة، بينما تقوم *الإغاثة ثلاثية الأبعاد* بنمذجة عناصر ثلاثية الأبعاد لإظهار عمق وشكل التضاريس، وتعد الظلال جزءًا من التصور. يمكن أن تعمل هذه الميزات بالتوازي، ولا يؤثر تعطيل *تظليل التلال* على كيفية عرض التأثيرات ثلاثية الأبعاد.

عندما يتم **تمكين** **تظليل التلال**، تظهر الصورة ذات ظلال الإغاثة أكثر تفصيلاً وأغمق وأكثر تدرجًا من صورة *الإغاثة ثلاثية الأبعاد*. التفسير هو أن *تظليل التلال* يؤكد على تدرجات وتباينات التضاريس، مما يخلق صورة أكثر وضوحًا وتفصيلاً. تمنح ميزة *الإغاثة ثلاثية الأبعاد* الخريطة مظهرًا أكثر سلاسة وتنعيمًا، مما يخفف من التضاريس ويقلل من وضوح بعض التفاصيل الدقيقة.

## دمج أنواع الطبقات {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

يسمح OsmAnd بدمج أنواع متعددة من طبقات الخرائط لعرض بصري أكثر.

- يعد الجمع بين **خطوط الكنتور** و**تظليل التلال** مثاليًا لتقدير انحدار المنحدرات الجبلية بصريًا ورقميًا.
- يعد الجمع بين طبقات **خطوط الكنتور** و**المنحدر** هو الأفضل لتقدير انحدار المنحدرات وإيجاد النقاط ذات الارتفاع نفسه.
- يتيح لك الجمع بين طبقات **الإغاثة ثلاثية الأبعاد** و**تظليل التلال** الحصول على تمثيل أكثر واقعية وبصرية للتضاريس والإغاثة وتفاصيل المناظر الطبيعية. هذا المزيج مناسب بشكل خاص للمناطق الجبلية والتلال.

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. كيفية استعادة شراء مكون التضاريس (خطوط الكنتور سابقًا) الإضافي. [(تحقق)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. خطوط الكنتور، بيانات الارتفاع أو الإغاثة ثلاثية الأبعاد لا تظهر. [(تحقق)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. تتحول الخريطة تلقائيًا إلى وضع ثلاثي الأبعاد أثناء التنقل:
    - تأكد من تعطيل زر **الوضع ثلاثي الأبعاد** في **القائمة ← تكوين الشاشة ← الأزرار ← الأزرار الافتراضية**.
    - تحقق مما إذا كانت أي ميزات تضاريس ممكّنة في **القائمة ← تكوين الخريطة ← التضاريس** قد تؤدي إلى تأثير ثلاثي الأبعاد.

> *آخر تحديث: يناير 2025*