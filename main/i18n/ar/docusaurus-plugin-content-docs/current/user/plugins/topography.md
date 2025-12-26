---
source-hash: 6d26b1681e1931a3479eb74332a2f7f850665d9897e0adf66e0c9b317a16b9f3
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
إضافة التضاريس هي [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

التضاريس هي ميزة هامة في رسم الخرائط توفر معلومات لتقييم تضاريس الأرض بصريًا.
تساعد معلومات التضاريس مثل [خطوط الكونتور](#contour-lines)، و[التضاريس](#terrain) (*تظليل التلال* و*الميل*)، و[التضاريس ثلاثية الأبعاد](#3d-relief) على إجراء تقييم بصري لتضاريس الأرض من خلال رؤية الارتفاع، والنقوش، والنقاط القصوى، والانحدار، أو النقاط ذات الارتفاع المتساوي.

كل ميزة تقدمها هذه الإضافة هي طبقة خريطة مستقلة، عند تفعيلها، يمكن عرضها فوق أو تحت مصدر الخريطة الرئيسي اعتمادًا على [الإعدادات](../map/raster-maps.md#overlay-layer).  

توفر إضافة التضاريس الوصول إلى أنواع الخرائط التالية:  

- [خطوط الكونتور](#contour-lines). هذه [خريطة متجهة](../map/vector-maps.md) ممثلة بـ [**الأمتار** أو **الأقدام**](#contour-lines-meters-or-feet). تظهر خطوط الكونتور مستويات الارتفاع وتساعد على تصور التضاريس.
- [تظليل التلال](#hillshade-slope-and-altitude-layers). أنواع من الخرائط مع تظليل للتلال والمنحدرات تجعل التضاريس أكثر وضوحًا وتساعد على تفسير التضاريس بصريًا.
- [الميل](#hillshade-slope-and-altitude-layers). طبقة [نقطية](../map/raster-maps.md) توفر معلومات حول شدة انحدار المنحدرات، والتي يمكن أن تكون مهمة لتخطيط المسار والسلامة.
- [التضاريس ثلاثية الأبعاد](#3d-relief). هي [خريطة متجهة](../map/vector-maps.md) توفر تمثيلًا ثلاثي الأبعاد للتضاريس، متاحة فقط مع [اشتراك OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

| خطوط الكونتور | تظليل التلال | الميل |
|:---|:---|:---|
| ![خطوط الكونتور على أندرويد](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![تظليل التلال على أندرويد](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![المنحدرات على أندرويد](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="آي أو إس">

| خطوط الكونتور | تظليل التلال | الميل |
|:---|:---|:---|
| ![خطوط الكونتور على آي أو إس](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![تظليل التلال على آي أو إس](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![المنحدرات على آي أو إس](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

### ترخيص بيانات DEM التي يستخدمها OsmAnd للكشف عن التضاريس {#license-for-dem-data-used-by-osmand-for-terrain-detection}

تم الحصول على بيانات الارتفاع على الخريطة (بين خط عرض ٧٠ درجة شمالًا وخط عرض ٧٠ درجة جنوبًا) من قياسات أُجريت كجزء من *مهمة المكوك الفضائي لرسم التضاريس الرادارية (SRTM)*. وقد استخدمت *مقياس الإشعاع الحراري والانعكاس المتقدم المحمول في الفضاء (ASTER)*، وهو أداة التصوير الرئيسية في *نظام مراقبة الأرض التابع لناسا*.
للحصول على معلومات كاملة، راجع [الترخيص](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>بيانات DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. البيانات الأصلية المستخدمة لهذا المنتج تم توفيرها بواسطة AW3D التابع لـ JAXA.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لعرض بيانات **خطوط الكونتور** و**التضاريس (تظليل التلال، الميل)** على الخريطة:

١. **الشراء**: [خطة شراء OsmAnd+ أو OsmAnd Maps+ أو OsmAnd Pro](../plugins/index.md#purchase)
٢. [تفعيل](../plugins/index.md#enable--disable) إضافة التضاريس في قسم الإضافات من *القائمة الرئيسية*.
٣. [تنزيل](#download-maps): خرائط خطوط الكونتور، تظليل التلال، الميل، أو خريطة التضاريس (ثلاثية الأبعاد).
٤. **تفعيل وتعديل**: خطوط الكونتور، تظليل التلال، أو الميل لعرض الخريطة.
٥. يمكنك أيضًا مشاهدة [الدرس التعليمي على يوتيوب](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).  

لعرض [**التضاريس ثلاثية الأبعاد**](#3d-relief)، تحتاج إلى شراء خطة *OsmAnd Pro*، والتي تشمل الوصول إلى إضافة التضاريس.


## تنزيل الخرائط {#download-maps}

لبدء العمل بوظائف الإضافة، تحتاج إلى تنزيل الخرائط التي تهمك. بعض الخرائط، مثل خطوط الكونتور للمناطق الجبلية، يمكن أن تكون كبيرة جدًا، تتجاوز ٢ غيغابايت، وقد لا تكون مدعومة على الأجهزة القديمة.

للحصول على عمل مستقر وتوفير الموارد، يمكنك تنزيل خريطة لمنطقة معينة من البلد بدلاً من البلد بأكمله، إذا كانت هذه المناطق متوفرة في التطبيق. يتم سرد معلومات حول حجم كل نوع من الخرائط تحت اسمها.


### خرائط التضاريس ثلاثية الأبعاد {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![تنزيل خطوط الكونتور أندرويد](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![تنزيل خطوط الكونتور أندرويد](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>  

<TabItem value="ios" label="آي أو إس">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![تنزيل خطوط الكونتور آي أو إس](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![تنزيل خطوط الكونتور آي أو إس](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

تحتاج إلى تنزيل خرائط **خريطة التضاريس (ثلاثية الأبعاد)** لعرض تظليل التلال والميل والتضاريس ثلاثية الأبعاد. بعد تنزيل الخرائط، يمكنك عرض **خطوط الكونتور** و**التضاريس** باستخدام قسم [تخصيص الخريطة](../map/configure-map-menu.md) من *القائمة الرئيسية*.

إذا لم يتم تنزيل الخريطة المعروضة على الشاشة، ففي *القائمة ← تخصيص الخريطة ← قسم التضاريس ← التضاريس* في أسفل قائمة الميزات، سيتم عرض قسم *تنزيل الخرائط* مع الخرائط الإضافية المقترحة.


### خطوط الكونتور (أمتار أو أقدام) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![حوار تنزيل خطوط الكونتور أندرويد](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">  

![حوار تنزيل خطوط الكونتور آي أو إس](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>  

بالنسبة لـ [**خطوط الكونتور**](#contour-lines)، تحتاج إلى تحديد [الوحدات](../personal/profiles.md#units--formats) (أمتار أو أقدام) التي سيتم عرضها بها على الخريطة وتنزيل الإصدار المناسب من الخريطة على جهازك.

**خيارات الوحدة غير قابلة للتبديل**، لذا إذا كنت بحاجة إلى التبديل من الأمتار إلى الأقدام أو العكس، فيجب عليك إلغاء تثبيت الإصدار السابق من خريطة خطوط الكونتور لتنزيل الإصدار الجديد.


## خطوط الكونتور {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![قائمة خطوط الكونتور أندرويد](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> ← خطوط الكونتور*

![قائمة خطوط الكونتور آي أو إس](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>  

[خطوط الكونتور](../map/vector-maps.md#-contour-lines) هي تمثيل رسومي للارتفاعات على الخريطة وهي متاحة كخرائط متجهة. تشكل خطوطًا تتوافق مع النقاط ذات الارتفاع نفسه، والتي تشكل بدورها معالم تسمح لك بتحديد اتجاه ومقدار ميل السطح.

عند استخدام [محرك عرض الخرائط](../personal/global-settings.md#map-rendering-engine):

- **الإصدار ٢ (OpenGL)**. يتم دعم خطوط الكونتور في كل من العرض ثلاثي الأبعاد ووضع التضاريس ثلاثية الأبعاد.
- **الإصدار ١**. لا يتم دعم خطوط الكونتور عند استخدام خرائط البلاط المأخوذة من الإنترنت.

**إعدادات المظهر**:

- *<Translate android="true" ids="download_srtm_maps"/>*. تبديل تشغيل أو إيقاف خطوط الكونتور.
- *<Translate android="true" ids="show_from_zoom_level"/>*. تحديد [مستويات التقريب](../map/interact-with-map.md#my-location-and-zoom) التي تكون فيها خطوط الكونتور مرئية.
- *<Translate android="true" ids="srtm_color_scheme"/>*. اختيار لون عرض خطوط الكونتور.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. ضبط عرض خطوط الكونتور.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. تحديد كثافة خطوط الكونتور (منخفضة، متوسطة، عالية). قد تؤثر الكثافات الأعلى على سرعة التحميل.
- *<Translate android="true" ids="maps_and_resources"/>*. عرض وتنزيل خرائط خطوط الكونتور للمنطقة الحالية والمناطق المجاورة.


## التضاريس {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![قائمة التضاريس أندرويد](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![قائمة التضاريس أندرويد](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![قائمة التضاريس آي أو إس](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![قائمة التضاريس آي أو إس](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>  

خيار **التضاريس** يُمكّن ويسمح لك بتخصيص ثلاث ميزات مثل *تظليل التلال*، و*الميل*، و*الارتفاع*.
ميزات محددة:  

- يمكن تمكين خيار واحد فقط في نفس الوقت، إما تظليل التلال أو الميل أو الارتفاع.
- إذا لم تلاحظ أي تغييرات بعد تنزيل وتمكين الخريطة المقابلة، فمن المستحسن إعادة تشغيل التطبيق.

تتضمن قائمة **التضاريس** اختيار [نظام الألوان](#default-color-scheme) مع خيار [تعديله](#modify-color-scheme) (لـ [مشتركي Pro](../../user/purchases/index.md))، والقدرة على تغيير شفافية الطبقة على الخريطة ([الرؤية](#visibility))، واختيار [مستوى التقريب](#zoom-levels) لعرضها، ومعلومات حول حجم [البيانات المخزنة مؤقتًا](#cache-size)، وقائمة بـ [الخرائط](../../user/personal/maps-resources.md) اللازمة لعرض الطبقة.


## طبقات تظليل التلال والميل والارتفاع {#hillshade-slope-and-altitude-layers}

| تظليل التلال | الميل | الارتفاع |
| ------ | ------- | ------- |
| ![تظليل التلال](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![الميل](../../../blog/2023-08-28-terrain/img/slope.png) | ![الميل](../../../blog/2023-08-28-terrain/img/slope.png) |

**تظليل التلال** يعتمد على محاكاة إضاءة السطح باستخدام بيانات التضاريس. تتضمن هذه الطريقة إنشاء ظلال وإضاءات بناءً على زاوية السطح بالنسبة لمصدر الضوء. نتيجة لذلك، ترى تلالًا ووديانًا وتفاصيل تضاريس أخرى طبيعية على الخريطة.  

**الميل** يحدد زاوية ميل السطح بناءً على بيانات ارتفاع النقاط على الخريطة. يتم إجراء حسابات زاوية الميل مع مراعاة التغيرات في الارتفاع والمسافات بين النقاط، وتمثيل هذا التغيير كزاوية ميل.  

**الارتفاع** يمثل ارتفاع النقاط على الخريطة بالنسبة لمستوى سطح البحر. يساعدك على فهم كيفية تغير التضاريس في الارتفاع. هذه الميزة مفيدة بشكل خاص للأنشطة مثل المشي لمسافات طويلة أو ركوب الدراجات الجبلية، حيث يمكن أن يساعد معرفة الارتفاع في تخطيط المسارات وإدارة الجهد البدني. يتم اشتقاق بيانات الارتفاع من نماذج الارتفاع وتوفر رؤية واضحة للنقاط المرتفعة والمنخفضة، مما يسهل تقييم صعوبة المسار أو تحديد القمم والوديان على طول رحلتك.

يتم إنشاء خرائط **تظليل التلال** و**الميل** و**الارتفاع** النقطية بناءً على بيانات التضاريس النقطية مثل نماذج الارتفاع الرقمية (DEM).

**الاستخدام:**

- *الملاحة.* يساعد في تحديد المنحدرات الشديدة، سواء كانت نزولًا أو صعودًا، والتي يمكن أن تكون حاسمة للملاحة الآمنة.
- *تخطيط المسارات.* يساعد على اختيار أنسب المسارات، مع مراعاة التضاريس.
- *تقدير التضاريس.* من الملائم تصور المناظر الطبيعية، خاصة إذا كنت تمشي أو تركب دراجة.


### نظام الألوان الافتراضي {#default-color-scheme}

| تظليل التلال | الميل | الارتفاع |
| ------ | ------- | ------- |
|![تظليل التلال](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![الميل](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![القائمة](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- يستخدم *تظليل التلال* ظلالاً داكنة لإظهار المنحدرات والقمم والأراضي المنخفضة. للشمس الافتراضية سمت (اتجاه) ثابت يبلغ ٣١٥ درجة.

- يستخدم *الميل* الألوان لتصور شدة انحدار التضاريس. يمكنك قراءة المزيد عنها [هنا](https://en.wikipedia.org/wiki/Grade_(slope)). يتوافق كل لون مع زاوية انحراف عن المستوى الأفقي. يتوفر نظام ألوان إضافي لـ *الميل*، ***انهيار ثلجي***، في قائمة **تعديل**.

- *الارتفاع*. تلون خريطة الارتفاع كل بكسل وفقًا لارتفاع الخريطة المحسوب باستخدام التدرج من نظام ألوان محدد. عادةً ما تعتمد أنظمة الارتفاع بشكل كبير على الموقع. في المناطق الجبلية، قد تفضل توزيع الألوان على نطاق ارتفاع أوسع، وفي المناطق المسطحة، ستختار نظام ألوان بنطاق صغير بين الحد الأدنى/الأقصى للارتفاع.


### تعديل نظام الألوان {#modify-color-scheme}

:::info ميزة مدفوعة
*[تعديل نظام الألوان](../../user/personal/color-palette-schemes.md#terrain)* هي ميزة مدفوعة في **OsmAnd Pro** لـ [iOS](../purchases/ios.md#pro-features) و [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تعديل نظام الألوان](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![تعديل نظام الألوان](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">  

![تعديل نظام الألوان](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![تعديل نظام الألوان](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

تسمح لك ميزة *تعديل نظام الألوان* باختيار نظام ألوان:

- من [قائمة محددة مسبقًا](#default-color-scheme).
- من ملفات لوحات الألوان التي أنشأتها على جهاز الكمبيوتر الخاص بك. يمكن إضافة الملفات المخصصة إلى OsmAnd باستخدام [أداة الاستيراد/التصدير](../personal/import-export.md).

يمكنك [تعديل هذه اللوحات](../personal/color-palette-schemes.md#palette-modify) لتخصيص مظهر الخرائط والمسارات.


### الرؤية {#visibility}

| رؤية ٣١٪ | رؤية ٧٤٪ |
| ------ | ------- |
| ![الرؤية ](../../../blog/2023-08-28-terrain/img/31.png) | ![الرؤية ](../../../blog/2023-08-28-terrain/img/74.png) |

تُستخدم وظيفة *الرؤية* لضبط شفافية الظلال لتظليل التلال والألوان المستخدمة لتمثيل الزاوية في معلمة الميل.

### مستويات التقريب {#zoom-levels}

![تقريب](../../../blog/2023-08-28-terrain/img/zoom.png)  

تسمح لك وظيفة *مستويات المقياس* بتعيين القيم الدنيا والقصوى لمستويات تقريب الخريطة، والتي تتراوح من ٤ إلى ١٩، والتي سيتم عندها عرض طبقات خريطة تظليل التلال أو الميل.

### حجم ذاكرة التخزين المؤقت {#cache-size}

**حجم ذاكرة التخزين المؤقت** هو قسم معلوماتي يعرض مقدار الذاكرة المستخدمة حاليًا على جهازك لبيانات *التضاريس*. في كل مرة تعرض فيها معلومات *تظليل التلال* أو *الميل* على الخريطة، يتم تخزين كل هذه البيانات مؤقتًا في ذاكرة التخزين المؤقت للوصول السريع والاستخدام لاحقًا، مما يجنب التحميل الإضافي على معالج جهازك.  

**مسح ذاكرة التخزين المؤقت** ضروري أحيانًا لتحرير مساحة على جهازك أو لحل مشكلات الأداء المحتملة. لمسح ذاكرة التخزين المؤقت، تحتاج إلى الانتقال إلى *إعدادات النظام* بالجهاز، ثم قد يكون المسار كما يلي: *التطبيقات ← OsmAnd ← التخزين ← مسح ذاكرة التخزين المؤقت*.


### محرك العرض (أندرويد) {#rendering-engine-android}

يتم عرض وتعديل **تظليل التلال** و**الميل** في أي [محرك عرض خرائط](../personal/global-settings.md#map-rendering-engine) محدد.

١. إذا كنت تستخدم **محرك عرض الخرائط الإصدار ١**، فأنت بحاجة إلى استخدام [التنزيل](../start-with/download-maps.md) العادي لخرائط تظليل التلال والميل النقطية.

٢. إذا كنت تستخدم **محرك عرض الخرائط الإصدار ٢ (OpenGL)**:
    - يمكنك الاستمرار في استخدام نوع تنزيل خرائط تظليل التلال والميل النقطية العادي. ومع ذلك، للقيام بذلك، ستحتاج إلى تفعيل [إضافة تطوير OsmAnd](../plugins/development.md) وتمكين إعداد [استخدام تنسيق SQLite النقطي لتظليل التلال والميل](../plugins/development.md#terrain).

    - بدلاً من ذلك، يمكنك استخدام تنزيل [خريطة التضاريس (ثلاثية الأبعاد)](../personal/maps-resources.md#paid-map-content). هذا يوفر مساحة ذاكرة على جهازك، وسيتم إنشاء تأثيرات تظليل التلال والميل والتضاريس ثلاثية الأبعاد منها باستخدام جهازك.


### الإجراءات السريعة {#quick-actions}

![إجراءات سريعة للتضاريس](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

يمكنك استخدام أزرار *الإجراء السريع* على شاشة الخريطة لتبديل رؤية طبقات [خطوط الكونتور](#contour-lines) و[التضاريس](#terrain) و[نظام ألوان التضاريس](../../user/personal/color-palette-schemes.md#quick-actions). اعتمادًا على الطبقة المحددة في قائمة تخصيص الخريطة، سيؤدي تعيين إجراء *التضاريس* إلى الزر إلى عرض *تظليل التلال* أو *الميل* أو *الارتفاع*.  

توجد الإعدادات الرئيسية لـ *إظهار أو إخفاء أنواع الخرائط* في قسم التضاريس من قائمة تخصيص الخريطة. في مقال [الإجراء السريع](../widgets/quick-action.md#configure-map)، يمكنك العثور على قائمة بالطبقات المتاحة للعرض. إذا كنت بحاجة إلى وصول سريع إلى تكوين الخريطة هذا، فاستخدم أداة *الزر المخصص*.

- اذهب إلى [إضافة إجراء](../widgets/quick-action.md#custom-buttons): *القائمة ← تخصيص الشاشة ← الأزرار المخصصة ← الإجراء السريع ← إضافة إجراء ← تخصيص الخريطة*.
- أضف زرًا واحدًا أو أكثر من أزرار الإجراءات السريعة لتغيير رؤية طبقة تضاريس معينة.


## التضاريس ثلاثية الأبعاد {#3d-relief}

:::info ميزة Pro
التضاريس ثلاثية الأبعاد هي ميزة مدفوعة في [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![التضاريس ثلاثية الأبعاد](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![التضاريس ثلاثية الأبعاد](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>  

تنتج ميزة التضاريس ثلاثية الأبعاد نقشًا بارزًا وتوفر تمثيلًا ثلاثي الأبعاد للمناظر الطبيعية. تعمل التضاريس ثلاثية الأبعاد دون اتصال بالإنترنت ويمكن استخدامها مع [خرائط OsmAnd المتجهة](../map/vector-maps.md) أو أي [خرائط نقطية](../map/raster-maps.md#select-raster-maps) كـ [مصدر خريطة](../map/raster-maps.md#main) أو كـ [طبقة سفلية/علوية](../map/raster-maps.md#overlay-layer).

***كيفية عرض التضاريس ثلاثية الأبعاد على الخريطة.***

- اشترِ اشتراك **OsmAnd Pro** لـ [iOS](../purchases/ios.md#pro-features) أو [Android](../purchases/android.md#pro-features).

- اذهب إلى [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **أندرويد**: مرر إلى قسم *<Translate android="true" ids="srtm_plugin_name"/> ← <Translate android="true" ids="relief_3d"/>*.
    - **آي أو إس**: مرر إلى قسم *<Translate ios="true" ids="srtm_plugin_name"/> ← <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- قم بتنزيل [خريطة التضاريس (ثلاثية الأبعاد)](#3d-relief-maps) للمناطق، إذا لزم الأمر.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

| طبقة الخريطة المتجهة | طبقة الخريطة النقطية |
| ------ | ------- |
| ![التضاريس ثلاثية الأبعاد](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![التضاريس ثلاثية الأبعاد](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>  

<TabItem value="ios" label="آي أو إس">

| طبقة الخريطة المتجهة | طبقة الخريطة النقطية |
| ------ | ------- |
| ![التضاريس ثلاثية الأبعاد](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![التضاريس ثلاثية الأبعاد](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### المبالغة الرأسية {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> ← المبالغة الرأسية*

![المبالغة الرأسية أندرويد](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>  

<TabItem value="ios" label="آي أو إس">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> ← المبالغة الرأسية*

![المبالغة الرأسية آي أو إس](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*المبالغة الرأسية* هي معامل خاص لـ *التضاريس ثلاثية الأبعاد*. يمكنك تغيير المقياس (*المبالغة الرأسية*) من x1 إلى x3. تتيح لك هذه الميزة عرض معالم تضاريس أكثر سلاسة مع تفاصيل متزايدة.


### تظليل التلال والتضاريس ثلاثية الأبعاد {#hillshade-and-3d-relief}

| تظليل التلال | التضاريس ثلاثية الأبعاد |
|--------|---------|
| ![طبقات التضاريس](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![طبقات التضاريس](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**تظليل التلال** هو نوع من الخرائط يعرض التضاريس باستخدام الظلال، مما يخلق تمثيلًا مرئيًا لميل وشكل سطح الأرض.
**التضاريس ثلاثية الأبعاد** هي ميزة تضيف تأثيرات ثلاثية الأبعاد إلى الخريطة.  

إذا قمت **بتعطيل** *تظليل التلال* و**تمكين** *التضاريس ثلاثية الأبعاد*، فستظل ظلال التضاريس مرئية لأن *تظليل التلال* و*التضاريس ثلاثية الأبعاد* طريقتان مختلفتان لتصور الخريطة. ينشئ *تظليل التلال* ظلالًا بناءً على التضاريس ويضيفها إلى الخريطة، بينما تقوم *التضاريس ثلاثية الأبعاد* بنمذجة عناصر ثلاثية الأبعاد لإظهار عمق وشكل التضاريس، وتكون الظلال جزءًا من التصور. يمكن أن تعمل هذه الميزات بالتوازي، وتعطيل *تظليل التلال* لا يؤثر على كيفية عرض التأثيرات ثلاثية الأبعاد.  

عند **تمكين** **تظليل التلال**، تظهر صورة بظلال التضاريس أكثر تفصيلاً وأكثر قتامة وأكثر تدرجًا من صورة *التضاريس ثلاثية الأبعاد*. التفسير هو أن *تظليل التلال* يؤكد على تدرجات وتباينات التضاريس، مما يخلق صورة أكثر حدة وتفصيلاً. تمنح ميزة *التضاريس ثلاثية الأبعاد* الخريطة مظهرًا أكثر سلاسة ونعومة، مما يخفف من حدة التضاريس وقد يقلل من رؤية بعض التفاصيل الدقيقة.


## دمج أنواع الطبقات {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خطوط الكونتور مدمجة مع تظليل التلال](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![خطوط الكونتور مدمجة مع الميل](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>  

<TabItem value="ios" label="آي أو إس">

![خطوط الكونتور مدمجة مع تظليل التلال في آي أو إس](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![خطوط الكونتور مدمجة مع الميل في آي أو إس](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

يسمح لك OsmAnd بدمج أنواع متعددة من طبقات الخرائط للحصول على عرض أكثر وضوحًا.

- يعد الجمع بين **خطوط الكونتور** و**تظليل التلال** مثاليًا لتقدير انحدار المنحدرات الجبلية بصريًا ورقميًا.
- يعد الجمع بين طبقتي **خطوط الكونتور** و**الميل** هو الأفضل لتقدير انحدار المنحدرات والعثور على نقاط بنفس الارتفاع.
- يسمح الجمع بين طبقتي **التضاريس ثلاثية الأبعاد** و**تظليل التلال** بالحصول على تمثيل أكثر واقعية ومرئية للتضاريس والنقوش وتفاصيل المناظر الطبيعية. هذا المزيج مناسب بشكل خاص للتضاريس الجبلية والتلية.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)

### المشاكل والحلول الشائعة {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

١. كيفية استعادة شراء إضافة التضاريس (خطوط الكونتور سابقًا). [(تحقق)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
٢. خطوط الكونتور أو بيانات الارتفاع أو التضاريس ثلاثية الأبعاد لا تظهر. [(تحقق)](../troubleshooting/maps-data#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
٣. تتحول الخريطة تلقائيًا إلى الوضع ثلاثي الأبعاد أثناء الملاحة:  
    - تأكد من تعطيل زر **الوضع ثلاثي الأبعاد** في **القائمة ← تخصيص الشاشة ← الأزرار ← الأزرار الافتراضية**.  
    - تحقق مما إذا كانت أي من ميزات التضاريس ممكّنة في **القائمة ← تخصيص الخريطة ← التضاريس** والتي قد تؤدي إلى تفعيل تأثير ثلاثي الأبعاد.