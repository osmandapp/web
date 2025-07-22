---
source-hash: 872ff87a35bc61fbd415cf02fa9593a1f01ab711832783bd8413d76746b5e729
sidebar_position: 5
title:  خرائط المتجهات (أنماط الخرائط)
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

تهدف خرائط المتجهات إلى استخدامها كمصدر بيانات الخرائط الافتراضي لتطبيق OsmAnd، لذا **تحتاج إلى تنزيلها على جهازك**. تدعم خرائط المتجهات عددًا هائلاً من أنماط الخرائط لأنشطة مختلفة مثل ركوب الدراجات، والمشي لمسافات طويلة، والقيادة بالسيارة أو عربة الثلوج، وغيرها.

يمكن تخصيص كل نمط خريطة لإبراز أو إخفاء عناصر محددة، والتبديل بين وضعي النهار والليل. يمكن تعزيز بيانات خرائط المتجهات ببيانات المتجهات وعرضها في نمط الخريطة الافتراضي، مثل معلومات *خطوط الكنتور*. يمكنك *إنشاء نمط خريطة OsmAnd الخاص بك* لعرض المعلومات المطلوبة.


## حالات الاستخدام {#use-cases}

تعد أنماط الخرائط القابلة للتخصيص إحدى المزايا الرئيسية لتطبيق OsmAnd. يمكنك تخصيص عرض الخريطة ليناسبك وهواياتك، وتعديل عرض أو إخفاء كائنات معينة على الخريطة، وأحجام وألوان هذه الكائنات، وتغيير مقياس عرض كائنات معينة.


## أنماط الخرائط الافتراضية {#default-map-styles}

يقدم لك OsmAnd العديد من أنماط الخرائط وطبقات البيانات التي تتناسب افتراضيًا. يصف هذا القسم الأنماط الرئيسية لأوضاع النهار والليل.

1. **أندرويد**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![نمط خريطة OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

نمط عرض الخريطة القياسي في OsmAnd يوازن بين التفاصيل والبساطة، مما يجعله مثاليًا للاستكشاف الحضري والخارجي. يوضح تفاصيل المدينة مثل الشوارع والمباني ومحطات النقل مع تبسيط الفوضى البصرية عن طريق جعل الخرائط أكثر وضوحًا.

تشمل الفوائد الرئيسية رسم الخرائط للطرق، وجودة السطح، وقيود الوصول، وعلامات الطرق، وعروض مسارات SAC-scale، والمرافق الرياضية، والتفاصيل الطبوغرافية مثل خطوط الكنتور.


### عرض التجول {#touring-view}

![نمط خريطة عرض التجول](@site/static/img/map/map-style-touring.png)

نمط التجول بتباين عالٍ وأقصى تفاصيل. يتضمن جميع خيارات نمط OsmAnd الافتراضي مع عرض أكبر قدر ممكن من التفاصيل، خاصة الطرق والمسارات وطرق السفر الأخرى. تمييز واضح لأنواع الطرق في *أطلس التجول*. مناسب للاستخدام في النهار والليل وفي الهواء الطلق.

### UniRS و LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

أنماط UniRS و LightRS هي أنماط مؤلفة تعرض معلومات الخريطة الأساسية ولكن بأنظمة ألوان مختلفة.

- **نمط UniRS**. هذا النمط هو نسخة معدلة من النمط الافتراضي لتعزيز التباين لمسارات المشاة والدراجات. يحتفظ بنظام ألوان Mapnik الكلاسيكي.

    ![نمط خريطة LightRS](@site/static/img/map/map-style-lightrs.png)

- **نمط LightRS**. هذا نمط قيادة بسيط يتميز بوضع ليلي لطيف. يبرز الطرق بلون برتقالي متباين، ويخفت كائنات الخريطة الثانوية، ويعرض ميزات طبوغرافية مثل خطوط الكنتور.

    ![نمط خريطة UniRS](@site/static/img/map/map-style-unirs.png)

### بحري {#nautical}

![نمط خريطة بحري](@site/static/img/map/map-style-nautical.png)

هذا نمط للملاحة البحرية يتميز بالعوامات، والمنارات، ومسارات الأنهار، وممرات البحر، والعلامات، والموانئ، والعلامات البحرية، وخطوط الكنتور للعمق. اقرأ المزيد في مقال [عرض الخريطة البحرية](../plugins/nautical-charts.md).

### الشتاء والتزلج {#winter-and-ski}

![نمط خريطة الشتاء والتزلج](@site/static/img/map/map-style-winter-ski.png)

هذا نمط للرياضات الشتوية يصف مسارات التزلج، والمصاعد، ومسارات التزلج الريفي، بالإضافة إلى إخفاء كائنات الخريطة الثانوية. تم تصميم **نمط الشتاء والتزلج** لمساعدتك في التنقل في الرياضات الشتوية.

يمكنك رؤية منحدرات التزلج وتفاصيل أخرى مثل صعوبة المنحدرات وعلامات المصاعد. تشمل الفوائد الرئيسية العرض المريح للمنحدرات، والمصاعد، وميزات التزلج الأخرى. تقليل كائنات الخريطة الثانوية المشتتة للانتباه. اقرأ المزيد في مقال [خرائط التزلج](../plugins/ski-maps.md).

### توبو {#topo}

![نمط خريطة توبو](@site/static/img/map/map-style-topo.png)

تم تصميم هذا النمط للمشي لمسافات طويلة، والتخييم، وركوب الدراجات في الطبيعة. يتميز بطرق وميزات طبيعية متباينة، وأنواع مختلفة من المسارات، وخيارات خطوط الكنتور الموسعة، وتفاصيل إضافية. يمكن قراءته في الهواء الطلق. يتيح لك إعداد *سلامة السطح* تمييز جودة الطريق.

### OSM-carto {#osm-carto}

![نمط خريطة OSM-carto](@site/static/img/map/map-style-osm-carto.png)

يحاكي هذا النمط [نمط الويب الافتراضي لـ OpenStreetMap](https://www.openstreetmap.org/). الكود المصدري لنسخة الويب متاح على [Github](https://github.com/gravitystorm/openstreetmap-carto)، وكود OsmAnd متاح على [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### الصحراء {#desert}

![نمط خريطة الصحراء](@site/static/img/map/map-style-desert.png)

مصمم للصحاري والمناطق الأخرى ذات الكثافة السكانية المنخفضة، ويوفر معلومات خريطة أكثر تفصيلاً.

### الطرق الوعرة {#offroad}

![نمط خريطة الطرق الوعرة](@site/static/img/map/map-style-offroad.png)

مصمم للملاحة على الطرق الوعرة، يعتمد هذا النمط على تخطيط خريطة [توبو](#topo) ويعمل بشكل جيد مع صور الأقمار الصناعية كطبقة سفلية. يتميز بطرق رئيسية أرق لإبراز المسارات، والممرات، ومسارات الدراجات، وغيرها من مسارات الطرق الوعرة، مما يجعله مثاليًا لاستكشاف الطرق غير المعبدة في المناطق الريفية أو النائية.

### عربة الثلوج {#snowmobile}

![نمط خريطة عربة الثلوج](@site/static/img/map/map-style-snowmobile.png)

مصمم خصيصًا للملاحة بعربات الثلوج، يبرز هذا النمط المسارات والطرق والممرات المناسبة لعربات الثلوج. يبرز المسارات المتخصصة في المناطق الثلجية، ويوفر ملاحة واضحة عبر التضاريس المغطاة بالثلوج حيث قد لا تكون الطرق القياسية متاحة.


## مفتاح الخريطة {#map-legend}

يعمل مفتاح الخريطة كمفتاح لفهم الرموز المستخدمة في خرائط OsmAnd. يشرح معنى الرموز المختلفة على الخريطة، بما في ذلك النقاط والخطوط والمناطق. على سبيل المثال، تشير الرموز مثل الخطوط الزرقاء المتعرجة إلى الأنهار، بينما قد تمثل الألوان والأشكال المختلفة المباني والمسارات والطرق.

يساعد المفتاح المستخدمين على تفسير ما يرونه على الخريطة. يمكنك الوصول إلى مفتاح خريطة OsmAnd الكامل [هنا](../map-legend/index.md).


## خطوط الخرائط (أندرويد) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![خطوط الخرائط نسخة أندرويد](@site/static/img/map/map_fonts.png) ![خطوط الخرائط نسخة](@site/static/img/map/map_fonts_1.png)

بالنسبة للخرائط باللغات الصينية المبسطة/التقليدية، واليابانية، والكورية، قد تظهر أحرف أو رموز غير صحيحة (مثل المربعات) إذا كان جهازك يفتقر إلى الخطوط اللازمة. تحدث هذه المشكلة عند عرض الأسماء المحلية ويمكن حلها عن طريق تنزيل الخطوط المطلوبة عبر OsmAnd.

تم توثيق بعض المشكلات المتعلقة بالخطوط على GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911)، [8187](https://github.com/osmandapp/OsmAnd/issues/8187)، [9400](https://github.com/osmandapp/OsmAnd/issues/9400)، [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * خطوط الكنتور {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![نمط خريطة خطوط الكنتور](@site/static/img/map/contour_lines.png)

تُعرض خطوط الكنتور في OsmAnd كخطوط ارتفاع على خرائط المتجهات. لاستخدامها، يجب عليك أولاً تمكين [مكون الطبوغرافيا الإضافي](../plugins/topography.md)، وتنزيل البيانات الإقليمية اللازمة، وتكوين العرض. لا يتم تمكين هذه الميزة افتراضيًا وتتطلب [شراء](../purchases/index.md).

تتوافق خطوط الكنتور مع جميع أنماط الخرائط ويمكن تخصيصها من خلال [قائمة خطوط الكنتور](../plugins/topography.md#contour-lines). لمزيد من التفاصيل، قم بزيارة مقال [مكون الطبوغرافيا الإضافي](../plugins/topography.md).


## * العمق البحري {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![عرض_العمق_البحري_أندرويد](@site/static/img/map/nautical_depth_width_and.png) ![لون_العمق_البحري_أندرويد](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![عرض_العمق_البحري_iOS](@site/static/img/map/nautical_depth_width_ios.png) ![لون_العمق_البحري_iOS](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

تمثل خطوط كنتور العمق البحري مناطق ذات عمق متساوٍ، مما يساعد على تصور التغيرات في التضاريس تحت الماء. تتوفر هذه الميزة عبر جميع أنماط الخرائط والأوضاع ويمكن تعديلها مع أو بدون تمكين مكون عرض الخريطة البحرية الإضافي.

لمزيد من التفاصيل حول عرض الخريطة البحرية، قم بزيارة صفحة [مكون الخريطة البحرية الإضافي](../plugins/nautical-charts).


## إظهار الحدود {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![إظهار-الحدود-أندرويد](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![إظهار-الحدود-iOS](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

تتيح لك هذه الميزة تبديل رؤية الحدود للخرائط التي تم تنزيلها مسبقًا من قائمة الخرائط المتاحة. الغرض الرئيسي منها هو المساعدة في إزالة الفوضى من الخريطة الرئيسية عن طريق إخفاء حدود الخرائط التي تم تنزيلها، وهو أمر مفيد بشكل خاص إذا كان لديك العديد من الخرائط المثبتة.

افتراضيًا، ستظهر حدود الخريطة عند التكبير إلى المستوى 7 وستختفي عند مستوى التكبير 3 وما دونه.

:::tip لون إظهار حدود الخرائط التي تم تنزيلها
عند تمكين ميزة *إظهار حدود الخرائط التي تم تنزيلها*، يتم تلوين الخرائط التي تم تنزيلها باللون **الأخضر** في كل من إصداري OsmAnd لأندرويد وiOS.

على أندرويد، تظهر الخرائط المؤرشفة باللون **البرتقالي**. في iOS، يتم أيضًا تمييز الخرائط التي يمكن تحديثها باللون **البرتقالي**.
:::


## شبكة الإحداثيات {#coordinates-grid}


انتقل إلى: *القائمة ← تكوين الخريطة ← إظهار ← شبكة الإحداثيات*


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة شبكة الإحداثيات](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إظهار-الحدود-iOS](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


تُظهر ميزة **شبكة الإحداثيات** شبكة مرجعية على الخريطة، مما يتيح لك تصور خطوط العرض والطول بناءً على أنظمة إحداثيات مختلفة. هذه الميزة مفيدة لتحديد المواقع بدقة والملاحة الجغرافية المكانية.

***1. تنسيقات الإحداثيات المتاحة:***

- **DD°MM′SS″** (درجات، دقائق، ثوانٍ)
- **DD.DDDDD°** (درجات عشرية - تنسيق WGS84 الافتراضي)
- **DD°MM.MMM′** (درجات، دقائق عشرية)
- **MGRS** (نظام مرجع الشبكة العسكرية)
- **UTM** (ميركاتور المستعرض العالمي - نظام شبكة قائم على المناطق)

:::note

1. *قيود شبكة UTM:*
    - الحد الأدنى لمستوى التكبير لعرض شبكة UTM هو 9.
    - يتم عرض منطقة UTM واحدة فقط في كل مرة، حيث يتم فصل المناطق بخطوط طول كل 6 درجات.

2. *تدعم شبكة WGS84 ثلاثة أوضاع مختلفة:* درجات عشرية، درجات + دقائق، ودرجات + دقائق + ثوانٍ.

:::

***أنظمة الإحداثيات المدعومة:***

يدعم OsmAnd العديد من **الإسقاطات الأساسية** لعرض خطوط الشبكة الجغرافية:

| **الإسقاط** | **رمز EPSG** | **الوصف** |
|---|---|---|
| **WGS84** | EPSG:4326 | نظام مرجعي افتراضي لخطوط العرض/الطول، يستخدم عالميًا. |
| **ميركاتور** | EPSG:3857 | يستخدم لرسم الخرائط على الويب (خرائط جوجل، OpenStreetMap، إلخ). |
| **UTM** | EPSG:6387 | يقسم العالم إلى **60 منطقة** لتحديد المواقع المحلية بدقة. |
| **MGRS** | - | نظام مرجع الشبكة العسكرية (امتداد لنظام UTM). |



***2. إعدادات مستوى التكبير:***

- تظهر خطوط الشبكة بناءً على مستوى التكبير، بين **2 – 22**.
- تقوم الخطوط بضبط تقسيمات الإحداثيات ديناميكيًا بناءً على مستوى التكبير.

**افتراضيًا، يستخدم التطبيق تنسيق الإحداثيات المحدد في** [الإعدادات العامة](../personal/profiles.md#units--formats).


***3. موضع التسميات:***
- الحواف
- المركز

***4. لون الشبكة:***
- اختر لون الشبكة لوضع النهار/الليل.

## تكوين نمط الخريطة {#configure-map-style}

### وضع الخريطة {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![وضع الخريطة](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![وضع الخريطة](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

يمكن عرض الخريطة بمظهر فاتح أو داكن بناءً على الوضع المختار من قائمة الخيارات. افتراضيًا ولجميع المستخدمين الجدد، يتوافق [نمط الخريطة](#default-map-styles) مع المظهر المختار في إعدادات نظام جهازك.

- **<Translate android="true" ids="daynight_mode_day"/>**. يعرض الخريطة دائمًا بمظهر فاتح لتحقيق أقصى قدر من الرؤية أثناء النهار.

- **<Translate android="true" ids="daynight_mode_night"/>**. يعرض الخريطة دائمًا بمظهر داكن، وهو مثالي لظروف الليل أو الإضاءة المنخفضة.

- **شروق الشمس / غروب الشمس**. ينتقل تلقائيًا بين مظهري النهار والليل وفقًا لأوقات شروق الشمس وغروبها المحلية، والتي يتم تفصيلها في هذا التبويب في التطبيق.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*أندرويد فقط*). يستخدم مستشعر الضوء في الجهاز للتبديل تلقائيًا بين المظهر الفاتح والداكن وفقًا لمستويات الإضاءة المحيطة.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. يتكيف عرض الخريطة مع المظهر العام للتطبيق، حيث يعرض وضع النهار في المظهر الفاتح ووضع الليل في المظهر الداكن.


### التفاصيل {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. يعرض المضلعات، والمسارات، والنقاط، والعلامات على الخريطة عند التكبير المنخفض. هذا يعني أنه يمكنك رؤية المزيد من التفاصيل على الخريطة عند التكبير المنخفض. لاحظ أن العرض على جهازك قد لا يكون سريعًا.
    ![معلمة الخريطة - أكثر تفصيلاً](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. يعرض نوع سطح الطريق. يساعدك لون الطريق على فهم ما هو سطح الطريق، مثل الأسفلت، أو العشب، أو الرمل. انظر [مفتاح الخريطة](../map-legend/index.md).
    ![معلمة الخريطة - سطح الطريق](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. يشير إلى جودة الطريق. يشير إلى نعومة (ميل) الطريق. مدى نعومة طرقك: جيدة، سيئة، ربما فظيعة، إلخ. انظر إلى [مفتاح الخريطة](../map-legend/index.md) لتحديد نعومة طريقك.
    ![معلمة الخريطة - نعومة الطريق](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. يعرض إمكانية الوصول إلى الطريق: خاص أو مسموح به، للطوارئ فقط، أو طريق برسوم. اطلع على [مفتاح الخريطة](../map-legend/index.md) للعثور على الطرق المتاحة.
    ![معلمة الخريطة - الوصول إلى الطريق](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. تعرض ميزة [مناطق الانبعاثات المنخفضة (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) حدودًا خضراء وعلامات "LEZ" على الخرائط للمناطق في المدن التي يُقيّد فيها الوصول لمركبات معينة ملوثة. تهدف مناطق الانبعاثات المنخفضة إلى تحسين جودة الهواء عن طريق الحد من دخول المركبات التي تستوفي معايير انبعاثات محددة. يساعد استخدام هذه الميزة المستخدمين على تجنب العقوبات من خلال تحديد هذه المناطق الخضراء والتنقل حولها، مما يضمن الامتثال للوائح البيئية المحلية أثناء السفر عبر مراكز المدن.

    ![معلمة الخريطة - مناطق الانبعاثات المنخفضة](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. يتم ترميز فئات المباني المختلفة، مثل السكنية والصناعية والتجارية، بالألوان. راجع [مفتاح الخريطة](../map-legend/index.md) للحصول على التفاصيل.
    ![معلمة الخريطة - المباني الملونة](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. يعرض الشوارع المضاءة وغير المضاءة، بالإضافة إلى الطرق تحت الأرض والمضاءة مؤقتًا. تحقق من [مفتاح الخريطة](../map-legend/index.md) للحصول على التفاصيل.
    ![معلمة الخريطة - إضاءة الشوارع](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. مصممة لرسامي الخرائط، تعرض هذه الميزة المراجع والملاحظات والتعليقات من المستخدمين الآخرين على الخريطة.
    ![معلمة الخريطة - مساعد الخرائط](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. يعرض خطوط كنتور عمق البحر. تحتاج إلى تثبيت [مكون الملاحة البحرية الإضافي](../plugins/nautical-charts) وتنزيل خرائط الملاحة البحرية.
    ![معلمة الخريطة - خطوط كنتور العمق](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. إظهار اللوحة الخضراء والعلامات "NR" لـ [منطقة المحمية الطبيعية](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). تبرز المناطق المحمية بحدود خضراء وعلامة "NR" لمناطق الحفاظ على الحياة البرية.

    &nbsp;&nbsp;&nbsp;![معلمة الخريطة - محمية طبيعية](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### المسارات {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![مسارات الخريطة - مسارات الدراجات](@site/static/img/map/map-routes-cycle-routes.png) ![مسارات الخريطة - شبكة المشي لمسافات طويلة](@site/static/img/map/map-routes-hiking-network.png)

المسار هو طريق محدد مسبقًا ويجب اتباعه للوصول إلى وجهة معينة. يمكن تحسين المسار لأنواع مختلفة من السفر، مثل ركوب الدراجات، والمشي لمسافات طويلة، والجري، والنقل العام، وغيرها. يمكنك قراءة المزيد عن المسارات وأنواعها في مقال [المسارات](../map/routes.md).


### النقل {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

عند التنقل في المدن، تحتاج إلى عرض أكثر تباينًا لوسائل النقل العام والمحطات. يمكنك النقر على محطة نقل عام وتحديد أحد المسارات أو المحطات من القائمة. يتم أيضًا عرض مسارات القطارات في هذا الإعداد.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. يعرض محطات النقل العام.
    ![محطات النقل على الخريطة](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. يعرض مسارات الحافلات، والترولي باص، وخطوط النقل المكوكية.
    ![حافلة النقل على الخريطة](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. يعرض مسارات الترام والقطارات.
    ![ترام النقل على الخريطة](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. يعرض مسارات المترو.
    ![مترو النقل على الخريطة](@site/static/img/map/map-transport-subway.png)

### إخفاء {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

لتحسين رؤية الخريطة، قد تحتاج إلى إخفاء بعض الكائنات. على سبيل المثال، يمكنك إخفاء الماء عند استخدام [خرائط الأقمار الصناعية عبر الإنترنت مع طبقة التراكب](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. إخفاء الحدود الإدارية داخل البلدان، ولكن حدود الولايات تظل مرئية.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. إخفاء جميع مضلعات الكائنات الطبيعية، وظيفة خاصة لـ [طبقة التراكب/الأساس](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. إخفاء جميع مضلعات المباني.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. إخفاء جميع مضلعات المياه (البحار، البحيرات، الخزانات، إلخ).
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. إخفاء أرقام المنازل على الخريطة.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. إخفاء الكائنات المقترحة - تلك الكائنات المخطط لبنائها ولكن لديها مشروع فقط (طرق، تقاطعات، مبانٍ، وغيرها).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. إخفاء أيقونات نقاط الاهتمام (POI) من الخريطة. ومع ذلك، ستظل تسميات هذه النقاط تظهر على الخريطة.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. إخفاء تسميات نقاط الاهتمام (POI) من الخريطة. ومع ذلك، ستظل أيقونات هذه النقاط تظهر على الخريطة.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. إخفاء جميع الكائنات تحت الأرض، مثل الأنفاق، الممرات، الطوابق، إلخ. خاص لتنظيف الخرائط في المدن من الكائنات غير المفيدة.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. إخفاء جميع الكائنات فوق الأرض. خاص لرؤية الكائنات تحت الأرض فقط مثل الأنفاق، الممرات، إلخ.

### نمط الطريق {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

إعدادات خاصة للطرق، حيث يمكنك تغيير الألوان لتتناسب مع أطلس الطرق أو إضافة طرق عالية التباين أو خطوط عريضة للطرق.

- **<Translate android="true" ids="rendering_value_default_name"/>**. النمط الافتراضي للطرق السريعة. انظر [مفتاح الخريطة](../map-legend/index.md).
![نمط طريق الخريطة الافتراضي](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. نمط أطلس الطرق الألماني.
![نمط طريق الخريطة الألماني](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. نمط أطلس الطرق الأمريكي.
![نمط طريق الخريطة الأمريكي](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. تباين عالٍ للطرق.
![نمط طريق الخريطة عالي التباين](@site/static/img/map/map-road-style-high-contrast.png)
- **شاحب**. ألوان أقل تباينًا للطرق.
![نمط طريق الخريطة الشاحب](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. خط عريض للطرق.
![نمط طريق الخريطة بخط عريض](@site/static/img/map/map-road-style-bold-outline.png)


### حجم النص {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![حجم نص الخريطة 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![حجم نص الخريطة 200%](@site/static/img/map/map-text-size-200.png)


### مكبر الخريطة {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

يمكنك اختيار هذا الإعداد بالضغط طويلاً على زر "+" أو "-" على الشاشة أو:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

يمكنك اختيار هذا الإعداد بالضغط طويلاً على زر "+" أو "-" على الشاشة أو:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

يساعد هذا الإعداد على تغيير تكبير الخريطة. وهو قابل للتطبيق على الخرائط النقطية والمتجهة. بالنسبة للخرائط النقطية، فإنه يطبق تأثير تكبير، بحيث تبدو تسميات النص أكبر أو أصغر. بالنسبة للخرائط المتجهة، فإنه يجعل الخريطة تبدو أكثر أو أقل تفصيلاً، إذا قمت بتعيينها على قيمة منخفضة، فستبدو الخريطة مشوشة/بطيئة.

- **75%**
    ![مكبر الخريطة 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![مكبر الخريطة 200%](@site/static/img/map/map-magnifier-200.png)


### لغة الخريطة {#map-language}

يقوم خيار **لغة الخريطة** بتكوين تهجئة الأسماء على خريطة OsmAnd لمستويات التكبير من 7 إلى 20، شاملة. لمستويات التكبير من 2 إلى 6، يتم عرض الأسماء باللغة المحددة لـ OsmAnd في قائمة إعدادات النظام (انظر القسم *[كيفية تغيير لغة التطبيق](../start-with/first-steps.md#how-to-change-app-language)*).

إذا لم يتم ترجمة الأسماء على الخريطة إلى اللغة المطلوبة من قبل مجتمع OSM، يمكنك استخدام [الأسماء المنقولة](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (أندرويد) أو *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **الأسماء المحلية**
    ![لغة الخريطة الأسماء المحلية](@site/static/img/map/map-language-local-names_2.png)

- **الأسماء الأوكرانية**
    ![لغة الخريطة الأوكرانية](@site/static/img/map/map-language-urkanian_2.png)

- **إظهار الأسماء المحلية**
    ![لغة الخريطة إظهار المحلية](@site/static/img/map/map-language-show-local_2.png)

- **نقل الأسماء**
    ![لغة الخريطة نقل](@site/static/img/map/map-language-transliterate_2.png)


## نمط الخريطة المخصص {#custom-map-style}

إذا كان لديك نمط خريطة مخصص شخصي أو من طرف ثالث تم إنشاؤه وفقًا [للمواصفات](../../technical/osmand-file-formats/osmand-rendering-style.md)، يمكنك تثبيته على جهازك بهذه الطرق:

- انسخ ملف `.render.xml` إلى جهازك وافتحه باستخدام OsmAnd.
- استخدم [مربعات حوار الاستيراد/التصدير القياسية](../personal/import-export.md) لتصدير أو استيراد أنماط العرض. إذا قمت بإنشاء حزمة `.osf`، فإنها تعمل كمكون إضافي يمكنك مشاركته مع الآخرين.
- بعد التثبيت، يمكنك تحديد نمط الخريطة من القائمة.


## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: مارس 2025*