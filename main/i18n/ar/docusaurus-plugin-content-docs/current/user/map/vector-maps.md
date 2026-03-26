---
source-hash: 617808bd04a50ca91f92e993b7f4f4a78194978298793ff703a4b1e3c412ff5e
sidebar_position: 5
title:  الخرائط المتجهة
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## نظرة عامة {#overview}

تهدف الخرائط المتجهة إلى استخدامها كمصدر بيانات الخرائط الافتراضي لـ OsmAnd، لذا **تحتاج إلى تنزيلها على جهازك**. تدعم الخرائط المتجهة عددًا هائلًا من أنماط الخرائط لأنشطة مختلفة مثل ركوب الدراجات، والمشي لمسافات طويلة، والقيادة بالسيارة أو عربة الثلوج، وغيرها.  

يمكن تخصيص كل نمط خريطة لإبراز أو إخفاء كائنات محددة، وللتبديل بين الوضعين النهاري والليلي. يمكن تعزيز بيانات الخرائط المتجهة ببيانات متجهة وعرضها في نمط الخريطة الافتراضي، مثل معلومات *خطوط الكفاف*. يمكنك *إنشاء نمط خريطة OsmAnd الخاص بك* لعرض المعلومات المطلوبة.

تمثل الخرائط المتجهة البيانات المكانية، مثل الطرق والمباني والنقاط والمضلعات، باستخدام الهندسة الرياضية المخزنة بتنسيق ثنائي. يتم تعريف كل عنصر (عقدة أو خط أو مضلع) بواسطة إحداثيات وتم عرضه ديناميكيًا وفقًا لمستوى التكبير ونمط الخريطة.

بما أن البيانات المتجهة لا تُخزن كصور ثابتة، فإن مظهرها، بما في ذلك اللون وعرض الخط والشفافية أو النمط، يمكن تعديله بسهولة. يمكن لهذا النهج تمكين العرض الفعال، واستخدام الذاكرة المنخفض، والتوسع السلس عند أي مستوى تكبير دون فقدان الجودة.

:::info note
قد يتم تبسيط المضلعات الصغيرة جدًا أو تشويهها أثناء إنشاء بيانات الخريطة. قد لا تُعرض الكائنات ذات المساحة الأصغر من متر مربع تقريبًا. للتصور الصحيح، يجب رسم الميزات الصغيرة كنقاط فردية بدلاً من المضلعات.
:::


## حالات الاستخدام {#use-cases}

تعد أنماط الخرائط القابلة للتخصيص إحدى المزايا الرئيسية لـ OsmAnd. يمكنك تخصيص عرض الخريطة ليناسبك وهواياتك، وضبط عرض أو إخفاء كائنات معينة على الخريطة، وأحجام وألوان هذه الكائنات، وتغيير مقياس عرض كائنات معينة.


## عرض الخرائط {#map-rendering}

### أنماط الخرائط {#map-styles}

يقدم لك OsmAnd عدة أنماط خرائط متجهة مدمجة مُحسَّنة لأنشطة مختلفة. بالإضافة إلى الأنماط الافتراضية، يمكنك إنشاء وتثبيت نمط خريطة مخصص خاص بك بناءً على قواعد العرض.

للحصول على وصف مفصل للأنماط المتاحة وتعليمات إنشاء أنماط مخصصة، انظر مقالة [أنماط الخرائط](../map/map-styles.md).

### وضع الخريطة {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![وضع الخريطة](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![وضع الخريطة](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

يمكن عرض الخريطة بمظهر فاتح أو داكن بناءً على الوضع المحدد من قائمة الخيارات. افتراضيًا ولجميع المستخدمين الجدد، يتوافق [نمط الخريطة](#map-styles) مع المظهر المختار في إعدادات نظام جهازك.

- **<Translate android="true" ids="daynight_mode_day"/>**. يعرض الخريطة دائمًا بمظهر فاتح للحصول على رؤية مثالية أثناء النهار.

- **<Translate android="true" ids="daynight_mode_night"/>**. يعرض الخريطة دائمًا بمظهر داكن، وهو مثالي للظروف الليلية أو الإضاءة المنخفضة.

- **شروق / غروب الشمس**. ينتقل تلقائيًا بين المظهرين النهاري والليلي وفقًا لأوقات شروق وغروب الشمس المحلية، والتي يتم تفصيلها في هذا التبويب في التطبيق.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Android فقط*). يستخدم مستشعر الضوء في الجهاز للتبديل تلقائيًا بين المظهرين الفاتح والداكن وفقًا لمستويات الإضاءة المحيطة.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. يتكيف عرض الخريطة مع المظهر العام للتطبيق، حيث يعرض الوضع النهاري في المظهر الفاتح والوضع الليلي في المظهر الداكن. 

### نمط الطريق {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

إعدادات خاصة للطرق، حيث يمكنك تغيير الألوان لتتناسب مع أطلس الطرق أو إضافة طرق عالية التباين أو خطوط عريضة للطرق.

- **<Translate android="true" ids="rendering_value_default_name"/>**. النمط الافتراضي للطرق السريعة. انظر [مفتاح الخريطة](../map-legend/index.md).  
![نمط طريق الخريطة الافتراضي](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. نمط أطلس الطرق الألماني.  
![نمط طريق الخريطة الألماني](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. نمط أطلس الطرق الأمريكي.  
![نمط طريق الخريطة الأمريكي](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. التباين العالي للطرق.  
![نمط طريق الخريطة عالي التباين](@site/static/img/map/map-road-style-high-contrast.png)
- **باهت**. ألوان أقل تباينًا للطرق.  
![خطوط عريضة لنمط طريق الخريطة](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. مخطط عريض للطرق.  
![خطوط عريضة لنمط طريق الخريطة](@site/static/img/map/map-road-style-bold-outline.png)

### التفاصيل {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. يعرض المضلعات والمسارات والنقاط والعلامات على الخريطة عند التكبير المنخفض. هذا يعني أنه يمكنك رؤية المزيد من التفاصيل على الخريطة عند التكبير المنخفض. لاحظ أن العرض على جهازك قد لا يكون سريعًا.  
    ![معامل الخريطة - أكثر تفصيلاً](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. يعرض نوع سطح الطريق. يساعدك لون الطريق على فهم طبيعة سطح الطريق، مثل الأسفلت أو العشب أو الرمل. انظر [مفتاح الخريطة](../map-legend/index.md).  
    ![معامل الخريطة - سطح الطريق](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. يشير إلى جودة الطريق. يشير إلى نعومة (ميل) الطريق. مدى نعومة طرقك: جيدة، سيئة، ربما فظيعة، إلخ. انظر إلى [مفتاح الخريطة](../map-legend/index.md) لتحديد نعومة طريقك.  
    ![معامل الخريطة - نعومة الطريق](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  يعرض إمكانية الوصول إلى الطريق: خاص أو مسموح به، للطوارئ فقط، أو طريق برسوم. اعرض [مفتاح الخريطة](../map-legend/index.md) للعثور على الطرق المتاحة.  
    ![معامل الخريطة - وصول الطريق](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. تعرض ميزة [مناطق الانبعاثات المنخفضة (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) حدودًا خضراء وتسميات "LEZ" على الخرائط للمناطق في المدن حيث يتم تقييد الوصول لبعض المركبات الملوثة. تهدف مناطق الانبعاثات المنخفضة إلى تحسين جودة الهواء عن طريق الحد من دخول المركبات التي لا تفي بمعايير انبعاثات محددة. يساعد استخدام هذه الميزة المستخدمين على تجنب العقوبات عن طريق تحديد هذه المناطق الخضراء والتنقل حولها، مما يضمن الامتثال للوائح البيئية المحلية أثناء السفر عبر مراكز المدن.  

    ![معامل الخريطة - مناطق الانبعاثات المنخفضة](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. يتم ترميز فئات المباني المختلفة، مثل السكنية والصناعية والتجارية، بالألوان. ارجع إلى [مفتاح الخريطة](../map-legend/index.md) للحصول على التفاصيل.  
    ![معامل الخريطة - المباني الملونة](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. يعرض الشوارع المضاءة وغير المضاءة، بالإضافة إلى الطرق تحت الأرض والمضاءة مؤقتًا. تحقق من [مفتاح الخريطة](../map-legend/index.md) للحصول على تفاصيل محددة.  
    ![معامل الخريطة - إضاءة الشوارع](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. مصممة لرسامي الخرائط، تعرض هذه الميزة المراجع والملاحظات والتعليقات من المستخدمين الآخرين على الخريطة.  
    ![معامل الخريطة - مساعد الخريطة](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. يعرض خطوط عمق البحر. تحتاج إلى تثبيت [ملحق الملاحة البحرية](../plugins/nautical-charts) وتنزيل الخرائط البحرية.  
    ![معامل الخريطة - خطوط العمق](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. عرض حدود خضراء وتسميات "NR" لـ [أراضي المحميات الطبيعية](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). يبرز المناطق المحمية بحدود خضراء وتسمية "NR" لمناطق الحفاظ على الحياة البرية.  

    &nbsp;&nbsp;&nbsp;![معامل الخريطة - محمية الطبيعة](@site/static/img/map/nature-reserve.png)

### إخفاء {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

لتحسين رؤية الخريطة، قد تحتاج إلى إخفاء كائنات معينة. على سبيل المثال، يمكنك إخفاء المياه عند استخدام [خرائط الأقمار الصناعية عبر الإنترنت مع طبقة سفلية](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. إخفاء الحدود الإقليمية داخل البلدان، لكن حدود الولايات تظل مرئية.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. إخفاء جميع مضلعات الكائنات الطبيعية، وظيفة خاصة لـ [طبقة سفلية/علوية](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. إخفاء جميع مضلعات المباني.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. إخفاء جميع مضلعات المياه (البحار، البحيرات، الخزانات، إلخ).
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. إخفاء أرقام المنازل على الخريطة.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. إخفاء الكائنات المقترحة - تلك الكائنات المخطط لبنائها ولكنها لا تزال مجرد مشروع (طرق مقترحة، تقاطعات، مبانٍ، وغيرها).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. إخفاء أيقونات نقاط الاهتمام من الخريطة. ومع ذلك، ستظل تسميات نقاط الاهتمام هذه تظهر على الخريطة.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. إخفاء تسميات نقاط الاهتمام من الخريطة. ومع ذلك، ستظل أيقونات نقاط الاهتمام تظهر على الخريطة.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. إخفاء جميع الكائنات تحت الأرض، مثل الأنفاق والممرات والطوابق، إلخ. خاص لتنظيف خرائط المدن من الكائنات غير المفيدة.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. إخفاء جميع الكائنات فوق الأرض. خاص لرؤية الكائنات تحت الأرض فقط مثل الأنفاق والممرات، إلخ.

### النقل {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

عند التنقل عبر المدن، تحتاج إلى عرض أكثر تباينًا لوسائل النقل العام ومحطاتها. يمكنك النقر على محطة نقل عام واختيار أحد المسارات أو المحطات من القائمة. يتم عرض مسارات القطارات أيضًا في هذا الإعداد.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. يعرض محطات النقل العام.  
    ![محطات نقل الخريطة](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. يعرض مسارات الحافلات والترولي باص والحافلات المكوكية.  
    ![حافلة نقل الخريطة](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. يعرض مسارات الترام والقطارات.  
    ![ترام نقل الخريطة](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. يعرض مسارات تحت الأرض.  
    ![مترو نقل الخريطة](@site/static/img/map/map-transport-subway.png)


## عرض النصوص {#text-rendering}

### مكبر الخريطة {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

يمكنك اختيار هذا الإعداد بالضغط المطول على زر "+" أو "-" على الشاشة أو:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

يمكنك اختيار هذا الإعداد بالضغط المطول على زر "+" أو "-" على الشاشة أو:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

يساعد هذا الإعداد على تغيير تكبير الخريطة. ينطبق على الخرائط النقطية والمتجهة. بالنسبة للخرائط النقطية، يطبق تأثير تكبير، لذا تبدو تسميات النص أكبر أو أصغر. بالنسبة للخرائط المتجهة، يجعل الخريطة تبدو أكثر أو أقل تفصيلاً، إذا قمت بتعيينها على قيمة منخفضة، ستبدو الخريطة مشوشة/بطيئة.  

- **75%**  
    ![مكبر الخريطة 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![مكبر الخريطة 200%](@site/static/img/map/map-magnifier-200.png)

### حجم النص {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![حجم نص الخريطة 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![حجم نص الخريطة 200%](@site/static/img/map/map-text-size-200.png)

### لغة الخريطة {#map-language}

يقوم خيار **لغة الخريطة** بتكوين تهجئة الأسماء على خريطة OsmAnd لمستويات التكبير من 7 إلى 20، شاملة. بالنسبة لمستويات التكبير من 2 إلى 6، يتم عرض الأسماء باللغة المحددة لـ OsmAnd في قائمة إعدادات النظام (انظر قسم *[كيفية تغيير لغة التطبيق](../start-with/first-steps.md#how-to-change-app-language)*).  

إذا لم تكن الأسماء على الخريطة مترجمة إلى اللغة المطلوبة من قبل مجتمع OSM، يمكنك استخدام [الأسماء المترجمة حرفيًا](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) أو *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **الأسماء المحلية**   
    ![لغة الخريطة الأسماء المحلية](@site/static/img/map/map-language-local-names_2.png)

- **اللغة المفضلة** (ukrainian)   
    ![لغة الخريطة الأوكرانية](@site/static/img/map/map-language-urkanian_2.png)

- **استخدام الاسم اللاتيني إذا كان مفقودًا**   
    ![لغة الخريطة الترجمة الحرفية](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **الأسماء المحلية**    
    ![لغة الخريطة الأسماء المحلية](@site/static/img/map/map-language-local-names_2.png)

- **اللغة المفضلة** (ukrainian)  
    ![لغة الخريطة الأوكرانية](@site/static/img/map/map-language-urkanian_2.png)

- **إظهار الأسماء المحلية**  (يضيف تسمية ثانية إذا كان الاسم المحلي مختلفًا)  
    ![لغة الخريطة المحلية](@site/static/img/map/map-language-show-local_2.png)

- **ترجمة الأسماء حرفيًا**    
    ![لغة الخريطة الترجمة الحرفية](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### خطوط الخريطة (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![خطوط الخريطة إصدار Android](@site/static/img/map/map_fonts.png) ![إصدار خطوط الخريطة](@site/static/img/map/map_fonts_1.png)

بالنسبة للخرائط باللغة الصينية المبسطة/التقليدية واليابانية والكورية، قد تظهر أحرف أو رموز غير صحيحة (مثل المربعات) إذا كان جهازك يفتقر إلى الخطوط اللازمة. تحدث هذه المشكلة عند عرض الأسماء المحلية ويمكن حلها عن طريق تنزيل الخطوط المطلوبة عبر OsmAnd.  

تم توثيق بعض مشكلات الخطوط ذات الصلة على GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911)، [8187](https://github.com/osmandapp/OsmAnd/issues/8187)، [9400](https://github.com/osmandapp/OsmAnd/issues/9400)، [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## عرض الطبوغرافيا {#topography-rendering}

### * خطوط الكفاف {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![نمط خريطة خطوط الكفاف](@site/static/img/map/contour_lines.png)

تُعرض خطوط الكفاف في OsmAnd كخطوط ارتفاع على الخرائط المتجهة. لاستخدامها، يجب عليك أولاً تمكين [ملحق الطبوغرافيا](../plugins/topography.md)، وتنزيل البيانات الإقليمية اللازمة، وتكوين العرض. هذه الميزة غير مفعلة افتراضيًا وتتطلب [شراء](../purchases/index.md).  

تتوافق خطوط الكفاف مع جميع أنماط الخرائط ويمكن تخصيصها من خلال [قائمة خطوط الكفاف](../plugins/topography.md#contour-lines). لمزيد من التفاصيل، قم بزيارة مقالة [ملحق الطبوغرافيا](../plugins/topography.md).

### التضاريس {#terrain}

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

يسمح خيار التضاريس بتخصيص ثلاث ميزات مثل التلال المظللة، والميل، والارتفاع. لمزيد من التفاصيل، راجع مقالة [الطبوغرافيا](../plugins/topography.md#terrain).

### المباني ثلاثية الأبعاد {#3d-buildings}

<InfoAndroidOnly/> 

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D buildings*  

![المباني ثلاثية الأبعاد](@site/static/img/map/3d_buildings_1_new.png) ![المباني ثلاثية الأبعاد](@site/static/img/map/3d_buildings_2.png) 

تعرض ميزة **المباني ثلاثية الأبعاد** المباني كنماذج ثلاثية الأبعاد حجمية بدلاً من الأشكال المسطحة. يتم توليد المباني من [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings).

هذا الخيار متاح فقط عند تمكين ملحق الطبوغرافيا. انظر مقالة [ملحق الطبوغرافيا](../plugins/topography.md#3d-buildings) للتفاصيل.

### الارتفاع ثلاثي الأبعاد {#3d-relief}

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

تنتج ميزة الارتفاع ثلاثي الأبعاد ارتفاعًا مرتفعًا وتوفر تمثيلًا ثلاثي الأبعاد للمشهد الطبيعي. يعمل الارتفاع ثلاثي الأبعاد دون اتصال ويمكن استخدامه مع [خرائط OsmAnd المتجهة](../map/vector-maps.md) أو أي [خرائط نقطية](../map/raster-maps.md#layers) كـ [مصدر الخريطة](../map/raster-maps.md#main) أو كـ [طبقة سفلية/علوية](../map/raster-maps.md#overlay). معلومات أكثر تفصيلاً متاحة [هنا](../plugins/topography.md#3d-relief).

### * العمق البحري {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

تمثل خطوط الكفاف للعمق البحري مناطق ذات عمق متساوٍ، مما يساعد على تصور التغيرات في التضاريس تحت الماء. تتوفر هذه الميزة في جميع أنماط وأوضاع الخرائط ويمكن تعديلها مع أو بدون تمكين ملحق عرض الخريطة البحرية.

لمزيد من التفاصيل حول عرض الخريطة البحرية، قم بزيارة [صفحة ملحق الخريطة البحرية](../plugins/nautical-charts).

### عرض الكرة الأرضية {#globe-view}

<InfoAndroidOnly/> 

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Global View*

![عرض الكرة الأرضية](@site/static/img/map/globe_view_1.png) ![عرض الكرة الأرضية](@site/static/img/map/globe_view_2.png)

يسمح **عرض الكرة الأرضية** بعرض الخريطة ككرة أرضية كروية بدلاً من الإسقاط المسطح. يغير هذا الوضع هندسة سطح الخريطة ويعدل التفاعل مع الخريطة للتنقل الكروي. لمزيد من المعلومات، انظر قسم [عرض الكرة الأرضية](../map/interact-with-map.md#globe-view) في مقالة التفاعل مع الخريطة.


## إعدادات إضافية {#additional-settings}

### إظهار الحدود {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![إظهار الحدود أندرويد](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![إظهار الحدود iOS](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

تتيح لك هذه الميزة تبديل رؤية حدود الخرائط التي تم تنزيلها مسبقًا من قائمة الخرائط المتاحة. الغرض الرئيسي منها هو المساعدة في تنظيم الخريطة الرئيسية عن طريق إخفاء مخططات الخرائط التي تم تنزيلها، وهو أمر مفيد بشكل خاص إذا كان لديك العديد من الخرائط المثبتة.  

افتراضيًا، ستظهر حدود الخرائط عند التكبير إلى المستوى 7 وستختفي عند مستوى التكبير 3 وما دونه.

:::tip Color Show borders of downloaded maps
عند تمكين ميزة *إظهار حدود الخرائط التي تم تنزيلها*، يتم تلوين الخرائط التي تم تنزيلها باللون **الأخضر** في كل من إصداري Android و iOS من OsmAnd.  

في Android، تظهر الخرائط المؤرشفة باللون **البرتقالي**. في iOS، يتم أيضًا تمييز الخرائط التي يمكن تحديثها باللون **البرتقالي**.
:::

### شبكة الإحداثيات {#coordinates-grid}

:::tip Purchase
تخصيص ألوان شبكة الإحداثيات هو [ميزة مدفوعة](../purchases/index.md).  
:::

اذهب إلى: *القائمة → تكوين الخريطة → إظهار → شبكة الإحداثيات*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![قائمة شبكة الإحداثيات](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إظهار الحدود iOS](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>

تضيف ميزة **شبكة الإحداثيات** شبكة مرجعية فوق الخريطة، مما يتيح لك تصور خطوط الطول والعرض بناءً على أنظمة إحداثيات مختلفة. هذه الميزة مفيدة للمرجعية الدقيقة للمواقع والملاحة الجغرافية المكانية. 

يمكنك تكوين الخيارات التالية:
- **مستويات التكبير:** قم بتعيين الحد الأدنى والأقصى لمستويات التكبير (2 - 22) التي تكون الشبكة مرئية عندها.
- **موضع التسميات:** اختر بين *الحواف* (افتراضي) أو *الوسط* لتسميات الشبكة.
- **لون الشبكة:** متاح بشكل منفصل للوضع النهاري/الليلي. 
- **تنسيق الإحداثيات:** اختر من بين عدة تنسيقات متاحة (انظر القائمة أدناه).

***تنسيقات الإحداثيات المتاحة:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (درجات، دقائق، ثوانٍ)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (درجات عشرية - التنسيق الافتراضي لـ WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (درجات، دقائق عشرية)
- **UTM** (EPSG:6387، نظام مركاتور المستعرض العالمي - نظام شبكي قائم على المناطق). الحد الأدنى لمستوى التكبير هو 9، ويتم عرض منطقة UTM واحدة فقط في كل مرة، حيث يتم فصل المناطق بخطوط طول كل 6 درجات.
- **MGRS** (نظام الإسناد الشبكي العسكري)

افتراضيًا، يستخدم التطبيق تنسيق الإحداثيات المحدد في [الإعدادات العامة](../personal/profiles.md#units--formats)، ولكن يمكنك تغييره مباشرة في هذه القائمة.

[الإجراء السريع](../widgets/quick-action.md#overview): يمكنك أيضًا إضافة مفتاح تبديل سريع *إظهار/إخفاء شبكة الإحداثيات* إلى مجموعة [تكوين الخريطة](../widgets/quick-action.md#configure-map) للوصول السريع.


## المسارات {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![مسارات الخريطة - مسارات الدراجات](@site/static/img/map/map-routes-cycle-routes.png)  ![مسارات الخريطة - شبكة المشي](@site/static/img/map/map-routes-hiking-network.png)

المسار هو طريق محدد مسبقًا يجب اتباعه للوصول إلى وجهة معينة. يمكن تحسين المسار لأنواع مختلفة من السفر، مثل ركوب الدراجات، والمشي لمسافات طويلة، والجري، والنقل العام، وغيرها. يمكنك قراءة المزيد عن المسارات وأنواعها في [مقالة المسارات](../map/routes.md).


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../map/interact-with-map.md)
- [تكوين الخريطة](../map/configure-map-menu.md)
- [أنماط الخرائط](../map/map-styles.md)
- [المسارات](../map/routes.md)
- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)