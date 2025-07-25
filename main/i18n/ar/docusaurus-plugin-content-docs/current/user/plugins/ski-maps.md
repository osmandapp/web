---
source-hash: 75b343dc56914a3acab72cd3b0a8c476b5b8c888a2b3d0ebf1e06e1edbfdfd2f
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

يعرض مكون عرض خريطة التزلج في OsmAnd المنحدرات الشهيرة والشعبية، ومناطق التزلج المعتمدة رسميًا، وخرائط المسارات لمعظم منتجعات التزلج. خرائط مسارات [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) هي مصدر البيانات لخرائط التزلج في OsmAnd. بفضل الجمع بين الخرائط المتجهة والخرائط النقطية، فإن خريطة التزلج في OsmAnd دقيقة للغاية وستكون مفيدة للمدربين والمتسلقين وعشاق الرياضات الشتوية.

خريطة التزلج في OsmAnd هي جزء من الخرائط المتجهة ولا تتطلب تنزيلات إضافية. يتم تعطيلها افتراضيًا. خريطة التزلج في OsmAnd هي واحدة من [أنماط الخرائط](../map/vector-maps.md) التي توفر ميزات إضافية عن طريق إبراز بعض الكائنات وجعل البعض الآخر أقل وضوحًا.

يتم عرض ملفين شخصيين أدناه: أحدهما على اليسار للتزلج والآخر على اليمين للقيادة. يبرز ملف التزلج الشخصي المسارات والممرات الهوائية وألوان الشتاء وجميع كائنات الخريطة المفيدة للتنقل في منطقة التزلج.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خرائط التزلج في أندرويد](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![لا توجد خرائط تزلج في أندرويد](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خرائط التزلج في iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![لا توجد خرائط تزلج في iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

الإعداد التالي يجعل خريطة التزلج في OsmAnd تظهر على الشاشة:

1. تفعيل [مكون عرض خريطة التزلج](../plugins/index.md#enable--disable).
2. تعيين [نمط خريطة الشتاء والتزلج](#set-winter-and-ski-map-style) للملف الشخصي المطلوب [profile](../personal/profiles.md).
3. إذا لزم الأمر، [اجمع الخرائط](#combine-maps).


### تعيين نمط خريطة الشتاء والتزلج {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![تفعيل نمط الشتاء في أندرويد](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![نمط خريطة مكون خرائط التزلج أندرويد](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![تفعيل نمط الشتاء في iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![نمط خريطة مكون خرائط التزلج iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

نمط خريطة الشتاء والتزلج يبرز المسارات، ومسارات التزلج السياحية، ومسارات التزلج على الجليد، والمعلومات المتعلقة بالشتاء والتزلج. لعرض النمط على الخريطة، تحتاج إلى إجراء الإعدادات التالية:

1. حدد [الملف الشخصي](../personal/profiles.md) المطلوب.
2. افتح [تكوين الخريطة](../map/configure-map-menu.md).
3. مرر لأسفل إلى نمط الخريطة/نوع الخريطة، وافتحه، وتحقق من **الشتاء والتزلج**.

:::tip التكوينات
تم تصميم ملف التزلج الشخصي للاستخدام بالاشتراك مع أنماط الشتاء والتزلج. ومع ذلك، يمكن تغيير نوع التنقل لكل ملف شخصي محدد وتعيينه بشكل فردي، لذا فإن التكوين النهائي للملف الشخصي ونمط الخريطة والتنقل يعتمد تمامًا على إعداداتك.
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

يمكن استكمال [الخريطة المتجهة](../map/vector-maps.md) مع [نمط خريطة الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) المتضمنة بـ [خطوط الكنتور](../plugins/topography.md#show-contour-linesterrain) و [تظليل التلال](../plugins/topography.md#hillshade-map). فيما يلي مثالان. تظهر المسارات على الخريطة المتجهة الافتراضية على اليسار، وتظهر المسارات على الخريطة المتجهة المدمجة مع خريطة *خطوط الكنتور* و *تظليل التلال* النقطية على اليمين. في الحالة الثانية، تعرض الخريطة المزيد من بيانات الارتفاع للمساعدة في تقدير الصعوبة والمخاطر والمسافة.


### تعطيل نمط خريطة التزلج {#disable-ski-map-style}

إذا كان تفضيل إزالة المسارات وألوان الشتاء من الخريطة، أو انتهى موسم التزلج، فقم بأحد الإجراءات التالية:

- إلغاء تحديد نمط خريطة [الشتاء والتزلج](#set-winter-and-ski-map-style) للملف الشخصي المطلوب.
- تغيير [ملف التزلج الشخصي](../personal/profiles.md) إلى أي ملف شخصي آخر.
- تعطيل [مكون عرض خريطة التزلج](../plugins/index.md#enable--disable).


:::info إلغاء تثبيت المكون الإضافي
مكون عرض خريطة التزلج هو تطبيق منفصل، وتعطيل عرضه لا يزيله. إذا كنت بحاجة إلى إلغاء تثبيته، فانتقل إلى إعدادات أندرويد باستخدام *فتح الإعدادات* في قائمة المكون الإضافي.
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

استخدم [دليل خريطة التزلج](../../user/map-legend/ski-map.md) لأي مرجع. يساعد ذلك في تحديد أنواع المسارات على الخريطة، بالإضافة إلى أنواع الممرات الهوائية والخصائص الأخرى التي يمكن قراءتها من الخريطة.

من خلال قراءة الخريطة، يمكنك معرفة التفاصيل المهمة لك، مثل صعوبة مسار معين، ونوع المسار، وما إذا كان يتم تمهيد المسار، وما إذا كان المسار مضاءً ليلاً.

الخيارات الموضحة هنا متاحة في [التنقل بالتزلج](../navigation/setup/route-navigation.md). تحدد **التنقل بالتزلج** خيارات المسار الفردية، والتي تنطبق فقط على التزلج.


:::info نمط العرض
تم بناء خريطة التزلج في OsmAnd كأحد أنماط العرض، التي تحدد الكائنات التي يجب عرضها على الخريطة ومظهر الكائنات. يتم وصف جميع أنماط العرض في ملف [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). للحصول على القواعد التي تحدد الهيكل الداخلي لملف XML، راجع [وثائق العرض](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### المسارات حسب الصعوبة {#pistes-by-difficulty}

| اللون | الوصف |
| --- | --- |
| ![مسار للمبتدئين](@site/static/img/plugins/ski-maps/1c_green_1.png) | أخضر - مسار للمبتدئين |
| ![تلال سهلة](@site/static/img/plugins/ski-maps/2c_blue_1.png) | أزرق - تلال سهلة |
| ![منحدرات متوسطة](@site/static/img/plugins/ski-maps/3c_red_1.png) | أحمر - منحدرات متوسطة |
| ![صعوبة متقدمة](@site/static/img/plugins/ski-maps/4c_black_1.png) | رمادي - منحدرات ذات صعوبة متقدمة |
| ![صعوبة الخبراء](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | أصفر - منحدرات ذات صعوبة الخبراء |

عادة ما يتم الإشارة إلى صعوبة المسارات بألوان محددة. قد تختلف الألوان في البلدان والمنتجعات المختلفة. فيما يلي بعض الإرشادات العملية.

:::tip إرشادات
للحصول على إرشادات أكثر تحديدًا لكل نوع من أنواع صعوبة المسار، راجع [مرجع صعوبة مسار OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) أو أي مصدر آخر يأخذ في الاعتبار المنحدرات والعوائق والمخاطر.
:::


### المسار حسب الأنواع {#piste-by-types}

تختلف المسارات حسب النوع. يمثل النوع خصائص مختلفة للمسار لتلبية متطلبات الأنشطة المختلفة المتعلقة بالشتاء: التزلج على المنحدرات، التزلج الكلاسيكي، التزلج على الجليد، ركوب الزلاجات، التزلج في المناطق النائية، التزلج السياحي، التزلج على المطبات، التزلج الليلي، إلخ. يساعد فهم [نوع المسار](https://wiki.openstreetmap.org/wiki/Key:piste:type) على الخريطة في بناء مسار تنقل أمثل.

- **مسار التزلج على المنحدرات/التزلج الألبي.**
يستخدم للتنقل بالتزلج. هذا [النوع من المسار](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) له اتجاه وصعوبة، وغالبًا ما يكون محاطًا بحدود منتجع التزلج. عند اختيار مسار تزلج على المنحدرات للتنقل بالتزلج، يتم أخذ اتجاه المسار في الاعتبار. إذا تم تحديد نقطتي المغادرة والوجهة عكس اتجاه المسار، فإن التنقل يسير على طول أقرب ممر هوائي.

- **مسار التزلج الشمالي/التزلج في المناطق النائية.**
يستخدم أيضًا للتنقل بالتزلج. هذا [النوع من المسار](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) ليس له صعوبة، وقد يكون له اتجاه أو لا، وغالبًا ما يتجاوز حدود منتجع التزلج. عند التنقل على طول هذا النوع من المسارات، يمكن غالبًا تبديل نقطتي المغادرة والوجهة.

- **مسار التزلج السياحي.**
غالبًا ما يستخدمه المتزلجون للصعود الشمالي والنزول على المنحدرات. غالبًا ما يتم تمييز صعوبة مسار التزلج السياحي باللون المناسب. يمكن للتنقل بالتزلج بناء مسار على طول هذا النوع من المسارات، مما يسمح لك بدمج أنواع المسارات.

- **مسار تزلج آخر.**
يمكن استخدام أنواع المسارات مثل *مسارات المشي لمسافات طويلة* أو *مسارات التزلج على الجليد* لملفات التزلج أو المشي لمسافات طويلة.


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

للتحقق على الخريطة مما إذا كان مسار معين ممهدًا، تحتاج إلى تفعيل خيار **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** في قائمة **<Translate android="true" ids="rendering_category_details"/>** التي تفتح من قائمة [تكوين الخريطة](../map/configure-map-menu.md). تقوم آلات خاصة بتمهيد المسارات لإعدادها للنشاط المناسب، مثل التزلج الكلاسيكي، والتزلج على الجليد، وغيرها. يمكن تمهيد نفس المسار بشكل مختلف في مناطق مختلفة.

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

لمعرفة المسارات خارج منتجع التزلج التي يمكنك التنقل فيها، تحتاج إلى تفعيل خيار **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** في قائمة **<Translate android="true" ids="rendering_category_routes"/>**، التي تفتح من قائمة [تكوين الخريطة](../map/configure-map-menu.md).

مع ملف التزلج الشخصي، والتنقل بالتزلج، و[نمط خريطة الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) المفعلين، تظهر مسارات [منحدرات التزلج](../map/vector-maps.md#routes) جميع أنواع المسارات التي يمكن للتنقل بالتزلج استخدامها لبناء مسارات التنقل. يتم تحديد مسارات منحدرات التزلج هذه، إذا تم تفعيلها، باللون البنفسجي غالبًا خارج حدود منتجع التزلج.


### الليل والإضاءة {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفعيل الوضع الليلي والإضاءة في أندرويد](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![الليل والإضاءة في أندرويد](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تفعيل الوضع الليلي والإضاءة في iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![الليل والإضاءة في iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

يمكن استخدام نمط **الشتاء والتزلج** مع [وضع الليل أو الشروق/الغروب](../map/vector-maps.md#map-mode). خيار مريح لأولئك الذين يفضلون الألوان الداكنة، أو تعتيم الشاشة ليلاً، وكذلك لأولئك الذين يمارسون التزلج الليلي. بالإضافة إلى الوضع الليلي، يمكن لخرائط التزلج في OsmAnd أيضًا إظهار المسارات التي تحتوي على إضاءة مع خيار [إضاءة الشوارع](../map/vector-maps.md#details).

كلا الخيارين موجودان في قائمة [تكوين الخريطة](../map/configure-map-menu.md).

- لتفعيل خيار ***الوضع الليلي***، مرر لأسفل القائمة:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- لتفعيل خيار ***إضاءة الشوارع***، افتح قائمة **<Translate android="true" ids="rendering_category_details"/>** وقم بتشغيل الخيار:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: ديسمبر 2024*