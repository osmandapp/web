---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title:  عرض خريطة التزلج
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

تُظهر إضافة عرض خريطة التزلج في OsmAnd المنحدرات الشهيرة والشعبية، ومناطق التزلج المعتمدة رسميًا، وخرائط مسارات معظم منتجعات التزلج. تُعد خرائط مسارات [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) مصدر البيانات لخرائط التزلج في OsmAnd. بفضل دمج الخرائط المتجهة مع الخرائط النقطية، تُعد خريطة التزلج في OsmAnd دقيقة جدًا وستكون مفيدة للمدربين والمتسلقين وعشاق الرياضات الشتوية.

تُعد خريطة التزلج في OsmAnd جزءًا من الخرائط المتجهة ولا تتطلب تنزيلات إضافية. وهي معطلة افتراضيًا. تُعد خريطة التزلج في OsmAnd أحد [أنماط الخرائط](../map/vector-maps.md) التي توفر ميزات إضافية عن طريق إبراز بعض الكائنات وجعل البعض الآخر أقل وضوحًا.

يُعرض أدناه ملفان شخصيان: أحدهما على اليسار للتزلج والآخر على اليمين للقيادة. يُبرز ملف التزلج الشخصي المسارات والممرات الهوائية وألوان الشتاء وجميع كائنات الخريطة المفيدة للتنقل في منطقة التزلج.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خرائط التزلج في أندرويد](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![لا توجد خرائط تزلج في أندرويد](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خرائط التزلج في iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![لا توجد خرائط تزلج في iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يُظهر الإعداد التالي خريطة التزلج في OsmAnd على الشاشة:

1. تفعيل [إضافة عرض خريطة التزلج](../plugins/index.md#enable--disable).
2. تعيين نمط خريطة [الشتاء والتزلج](#set-winter-and-ski-map-style) للملف الشخصي [المطلوب](../personal/profiles.md).
3. إذا لزم الأمر، [دمج الخرائط](#combine-maps).


### تعيين نمط خريطة الشتاء والتزلج {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![تفعيل نمط الشتاء في أندرويد](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![نمط خريطة إضافة خرائط التزلج أندرويد](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![تفعيل نمط الشتاء في iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![نمط خريطة إضافة خرائط التزلج iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

يُبرز نمط خريطة الشتاء والتزلج المسارات، ومسارات التزلج السياحية، ومسارات التزلج بالزلاجات، والمعلومات المتعلقة بالشتاء والتزلج. لعرض النمط على الخريطة، تحتاج إلى إجراء الإعدادات التالية:

1. حدد [الملف الشخصي](../personal/profiles.md) المطلوب.
2. افتح [تكوين الخريطة](../map/configure-map-menu.md).
3. مرر لأسفل إلى نمط الخريطة/نوع الخريطة، وافتحه، وتحقق من **الشتاء والتزلج**.

:::tip configurations
تم تصميم ملف التزلج الشخصي للاستخدام بالاشتراك مع أنماط الشتاء والتزلج. ومع ذلك، يمكن تغيير نوع التنقل لكل ملف شخصي محدد وتعيينه بشكل فردي، لذا فإن التكوين النهائي للملف الشخصي ونمط الخريطة والتنقل يعتمد كليًا على إعداداتك.
:::


### دمج الخرائط {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لا يوجد دمج خرائط في أندرويد](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![مع دمج الخرائط في أندرويد](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![لا يوجد دمج خرائط في iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![مع دمج الخرائط في iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

يمكن استكمال [الخريطة المتجهة](../map/vector-maps.md) مع [نمط خريطة الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) المضمنة بـ [خطوط الكنتور](../plugins/topography.md#show-contour-linesterrain) و [تظليل التلال](../plugins/topography.md#hillshade-map). فيما يلي مثالان. تُعرض المسارات على الخريطة المتجهة الافتراضية على اليسار، وتُعرض المسارات على الخريطة المتجهة المدمجة مع خريطة *خطوط الكنتور* و *تظليل التلال* النقطية على اليمين. في الحالة الثانية، تُظهر الخريطة المزيد من بيانات الارتفاع للمساعدة في تقدير الصعوبة والمخاطر والمسافة.


### تعطيل نمط خريطة التزلج {#disable-ski-map-style}

إذا كنت تفضل إزالة المسارات وألوان الشتاء من الخريطة، أو انتهى موسم التزلج، فقم بأحد الإجراءات التالية:

- قم بإلغاء تحديد نمط خريطة [الشتاء والتزلج](#set-winter-and-ski-map-style) للملف الشخصي المطلوب.
- غيّر [ملف التزلج الشخصي](../personal/profiles.md) إلى أي ملف شخصي آخر.
- عطّل [إضافة عرض خريطة التزلج](../plugins/index.md#enable--disable).


:::info uninstall plugin
إضافة عارض خريطة التزلج هي تطبيق منفصل، وتعطيل عرضه لا يزيله. إذا كنت بحاجة إلى إلغاء تثبيته، فانتقل إلى إعدادات أندرويد باستخدام *فتح الإعدادات* في قائمة الإضافة.
:::


## ملف التزلج الشخصي {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![خطوط كنتور العمق البحري في أندرويد](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![خطوط كنتور العمق في iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

يمكن تفعيل أنماط خريطة الشتاء والتزلج في أي ملف شخصي. ولكنها الأكثر قيمة في [ملف التزلج الشخصي](../personal/profiles.md)، حيث يتم تعيينها افتراضيًا. ملف التزلج الشخصي مريح جدًا لـ [التنقل بالتزلج](../navigation/routing/ski-routing.md).


## نمط خريطة التزلج {#ski-map-style}

استخدم [مفتاح خريطة التزلج](../../user/map-legend/ski-map.md) لأي مرجع. يساعد على تحديد أنواع مسارات التزلج على الخريطة، بالإضافة إلى أنواع الممرات الهوائية والخصائص الأخرى التي يمكن قراءتها من الخريطة.

من خلال قراءة الخريطة، يمكنك معرفة التفاصيل المهمة لك، مثل صعوبة مسار معين، ونوع المسار، وما إذا كان يتم تمهيده، وما إذا كان المسار مضاءً في الليل.

الخيارات الموضحة هنا متاحة في [التنقل بالتزلج](../navigation/setup/route-navigation.md). يُحدد **التنقل بالتزلج** خيارات المسار الفردية، والتي تنطبق فقط على التزلج.


:::info rendering style
تم بناء خريطة التزلج في OsmAnd كأحد أنماط العرض، والتي تحدد الكائنات التي ستُعرض على الخريطة ومظهر الكائنات. تُوصف جميع أنماط العرض في ملف [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). لقواعد تعريف البنية الداخلية لملف XML، راجع [وثائق العرض](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### مسارات التزلج حسب الصعوبة {#pistes-by-difficulty}

| اللون | الوصف |
| --- | --- |
| ![مسار تزلج للمبتدئين](@site/static/img/plugins/ski-maps/1c_green_1.png) | أخضر - مسار تزلج للمبتدئين |
| ![ تلال سهلة](@site/static/img/plugins/ski-maps/2c_blue_1.png) | أزرق - تلال سهلة |
| ![منحدرات متوسطة](@site/static/img/plugins/ski-maps/3c_red_1.png) | أحمر - منحدرات متوسطة |
| ![صعوبة متقدمة](@site/static/img/plugins/ski-maps/4c_black_1.png) | رمادي - منحدرات ذات صعوبة متقدمة |
| ![صعوبة الخبراء](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | أصفر - منحدرات ذات صعوبة الخبراء |

تُشير صعوبة المسارات عادةً بألوان محددة. قد تختلف الألوان في البلدان والمنتجعات المختلفة. فيما يلي بعض الإرشادات العملية.

:::tip guidance
للحصول على إرشادات أكثر تحديدًا لكل نوع من أنواع صعوبة المسار، راجع [مرجع صعوبة مسار OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) أو أي مصدر آخر يأخذ في الاعتبار المنحدرات والعوائق والمخاطر.
:::


### مسار التزلج حسب الأنواع {#piste-by-types}

تختلف مسارات التزلج حسب النوع. يمثل النوع خصائص مختلفة لمسار التزلج لتلبية متطلبات الأنشطة المختلفة المتعلقة بالشتاء: التزلج الألبي، التزلج الكلاسيكي، التزلج على الجليد، التزلج بالزلاجات، التزلج في المناطق النائية، التزلج السياحي، التزلج على التلال، التزلج الليلي، إلخ. يساعد فهم [نوع مسار التزلج](https://wiki.openstreetmap.org/wiki/Key:piste:type) على الخريطة في بناء مسار تنقل مثالي.

- **مسار تزلج منحدر/ألبي.**
يُستخدم للتنقل بالتزلج. يتميز [هذا النوع من المسارات](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) باتجاه وصعوبة، وغالبًا ما يكون محاطًا بحدود منتجع التزلج. عند اختيار مسار تزلج منحدر للتنقل بالتزلج، يؤخذ اتجاه المسار في الاعتبار. إذا تم تحديد نقطتي المغادرة والوجهة عكس اتجاه المسار، فإن التنقل يتم على طول أقرب ممر هوائي.

- **مسار تزلج نورديك/في المناطق النائية.**
يُستخدم أيضًا للتنقل بالتزلج. [هذا النوع من المسارات](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) لا يحتوي على صعوبة، وقد يكون له اتجاه أو لا، وغالبًا ما يتجاوز حدود منتجع التزلج. عند التنقل على طول هذا النوع من المسارات، غالبًا ما يمكن تبديل نقطتي المغادرة والوجهة.

- **مسار تزلج سياحي.**
يُستخدم غالبًا من قبل المتزلجين للصعود النورديكي والنزول المنحدر. غالبًا ما تُشير صعوبة مسار التزلج السياحي باللون المناسب. يمكن للتنقل بالتزلج بناء مسار على طول هذا النوع من المسارات، مما يسمح لك بدمج أنواع المسارات.

- **مسار تزلج آخر.**
يمكن استخدام أنواع المسارات مثل *مسارات المشي لمسافات طويلة* أو *مسارات التزلج بالزلاجات* لملفات التزلج أو المشي لمسافات طويلة.


### مسارات التمهيد {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![تفعيل التمهيد في أندرويد](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![التمهيد معروض في أندرويد](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![تفعيل التمهيد في iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![التمهيد معروض في iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

للتحقق على الخريطة مما إذا كان مسار تزلج معين ممهدًا، تحتاج إلى تفعيل خيار **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** في قائمة **<Translate android="true" ids="rendering_category_details"/>** التي تُفتح من قائمة [تكوين الخريطة](../map/configure-map-menu.md).
تقوم آلات خاصة بتمهيد المسارات لإعدادها للنشاط المناسب، مثل التزلج الكلاسيكي، والتزلج على الجليد، وغيرها. يمكن تمهيد نفس المسار بشكل مختلف في مناطق مختلفة.

### مسارات منحدرات التزلج {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![المسارات معطلة في أندرويد](@site/static/img/plugins/ski-maps/and_no_routes.png) ![المسارات مفعلة في أندرويد](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![المسارات معطلة في iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![المسارات مفعلة في iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

لمعرفة مسارات التزلج خارج منتجع التزلج التي يمكنك التنقل فيها، تحتاج إلى تفعيل خيار **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** في قائمة **<Translate android="true" ids="rendering_category_routes"/>**، التي تُفتح من قائمة [تكوين الخريطة](../map/configure-map-menu.md).

مع تفعيل ملف التزلج الشخصي، والتنقل بالتزلج، و [نمط خريطة الشتاء والتزلج](../map/vector-maps.md#winter-and-ski)، تُظهر مسارات [منحدرات التزلج](../map/vector-maps.md#routes) جميع أنواع مسارات التزلج التي يمكن للتنقل بالتزلج استخدامها لبناء مسارات التنقل على طولها. تُحدد مسارات منحدرات التزلج هذه، إذا كانت مفعلة، باللون البنفسجي غالبًا خارج حدود منتجع التزلج.


### الليل والإضاءة {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفعيل الوضع الليلي والإضاءة في أندرويد](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![الليل والإضاءة في أندرويد](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تفعيل الوضع الليلي والإضاءة في iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![الليل والإضاءة في iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

يمكن استخدام نمط **الشتاء والتزلج** مع [وضع الليل أو الشروق/الغروب](../map/vector-maps.md#map-mode). خيار مريح لأولئك الذين يفضلون الألوان الداكنة، أو تعتيم الشاشة ليلاً، وكذلك لأولئك الذين يمارسون التزلج الليلي. جنبًا إلى جنب مع الوضع الليلي، يمكن لخرائط التزلج في OsmAnd أيضًا إظهار مسارات التزلج التي تحتوي على إضاءة باستخدام خيار [إضاءة الشوارع](../map/vector-maps.md#details).

يوجد كلا الخيارين في قائمة [تكوين الخريطة](../map/configure-map-menu.md).

- لتفعيل خيار ***الوضع الليلي***، مرر لأسفل القائمة:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- لتفعيل خيار ***إضاءة الشوارع***، افتح قائمة **<Translate android="true" ids="rendering_category_details"/>** وقم بتشغيل الخيار:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: ديسمبر 2024*