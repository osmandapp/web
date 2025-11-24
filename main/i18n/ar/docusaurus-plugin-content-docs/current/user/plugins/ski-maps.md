---
source-hash: f47abfa20a1e2094476033fa2ea73c6c94bc39f2fc7f0a5024cacdd02d47d391
sidebar_position: 13
title: عرض خريطة التزلج
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

يعرض ملحق عرض خريطة التزلج في OsmAnd المنحدرات الشهيرة والشائعة، ومناطق التزلج المعتمدة رسميًا، وخرائط المسارات لمعظم منتجعات التزلج. خرائط المسارات من [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) هي مصدر البيانات لخرائط التزلج في OsmAnd. من خلال دمج الخرائط المتجهية مع الخرائط النقطية، تكون خريطة التزلج في OsmAnd دقيقة جدًا وستكون مفيدة للمدربين، والمتسلقين، وعشاق الرياضات الشتوية.

خريطة التزلج في OsmAnd هي جزء من الخرائط المتجهية ولا تتطلب تنزيلات إضافية. وهي معطلة بشكل افتراضي. خريطة التزلج في OsmAnd هي واحدة من [أنماط الخرائط](../map/vector-maps.md) التي توفر ميزات إضافية من خلال إبراز بعض الكائنات وجعل البعض الآخر أقل وضوحًا.  

يظهر أدناه ملفان شخصيان: الأول على اليسار مخصص للتزلج والآخر على اليمين مخصص للقيادة. يبرز ملف التزلج الشخصي المسارات والممرات الهوائية وألوان الشتاء وجميع كائنات الخريطة المفيدة للتنقل في منطقة التزلج.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![خرائط التزلج في أندرويد](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![لا توجد خرائط تزلج في أندرويد](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خرائط التزلج في iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![لا توجد خرائط تزلج في iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

الإعداد التالي يجعل خريطة التزلج في OsmAnd تظهر على الشاشة:

١. تمكين [ملحق عرض خريطة التزلج](../plugins/index.md#enable--disable).  
٢. تعيين نمط خريطة [الشتاء والتزلج](#set-winter-and-ski-map-style) [للملف الشخصي](../personal/profiles.md) المطلوب.  
٣. إذا لزم الأمر، [دمج الخرائط](#combine-maps).  
  

### تعيين نمط خريطة الشتاء والتزلج {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![تمكين نمط الشتاء في أندرويد](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![نمط خريطة ملحق خرائط التزلج في أندرويد](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![تمكين نمط الشتاء في iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![نمط خريطة ملحق خرائط التزلج في iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

يبرز نمط خريطة الشتاء والتزلج المسارات، ومسارات جولات التزلج، ومسارات التزلج بالزلاجات، والمعلومات المتعلقة بالشتاء والتزلج. لعرض النمط على الخريطة، تحتاج إلى إجراء الإعدادات التالية:

١. حدد [الملف الشخصي](../personal/profiles.md) المطلوب.  
٢. افتح [تكوين الخريطة](../map/configure-map-menu.md).  
٣. مرر لأسفل إلى نمط الخريطة/نوع الخريطة، افتحه، وحدد **الشتاء والتزلج**.

:::tip تكوينات
تم تصميم ملف التزلج الشخصي للاستخدام مع أنماط الشتاء والتزلج. ومع ذلك، يمكن تغيير نوع الملاحة لكل ملف شخصي محدد وتعيينه بشكل فردي، لذا فإن التكوين النهائي للملف الشخصي ونمط الخريطة والملاحة يعتمد كليًا على إعداداتك.
:::


### دمج الخرائط {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![لا يوجد دمج للخرائط في أندرويد](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![مع دمج الخرائط في أندرويد](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![لا يوجد دمج للخرائط في iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![مع دمج الخرائط في iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

يمكن استكمال [الخريطة المتجهية](../map/vector-maps.md) التي تتضمن [نمط خريطة الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) بـ [خطوط الكنتور](../plugins/topography.md#contour-lines) و [تظليل التضاريس](../plugins/topography.md#hillshade-slope-and-altitude-layers). فيما يلي مثالان. تظهر المسارات على الخريطة المتجهية الافتراضية على اليسار، وتظهر المسارات على الخريطة المتجهية المدمجة مع الخريطة النقطية لـ *خطوط الكنتور* و *تظليل التضاريس* على اليمين. في الحالة الثانية، تعرض الخريطة المزيد من بيانات الارتفاع للمساعدة في تقدير الصعوبة والمخاطر والمسافة.  


### تعطيل نمط خريطة التزلج {#disable-ski-map-style}

إذا كنت تفضل إزالة المسارات وألوان الشتاء من الخريطة، أو إذا انتهى موسم التزلج، فقم بأحد الإجراءات التالية:

- قم بإلغاء تحديد نمط خريطة [الشتاء والتزلج](#set-winter-and-ski-map-style) للملف الشخصي المطلوب.  
- قم بتغيير [ملف التزلج الشخصي](../personal/profiles.md) إلى أي ملف شخصي آخر.
- قم بتعطيل [ملحق عرض خريطة التزلج](../plugins/index.md#enable--disable).


:::info إلغاء تثبيت الملحق
ملحق عارض خريطة التزلج هو تطبيق منفصل، وتعطيل عرضه لا يزيله. إذا كنت بحاجة إلى إلغاء تثبيته، فانتقل إلى إعدادات أندرويد باستخدام *فتح الإعدادات* في قائمة الملحق.  
:::


## ملف التزلج الشخصي {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![ملف التزلج الشخصي في أندرويد](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![ملف التزلج الشخصي في iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

يمكن تمكين أنماط خريطة الشتاء والتزلج في أي ملف شخصي. ولكنها تكون أكثر قيمة في [ملف التزلج الشخصي](../personal/profiles.md)، حيث يتم تعيينها بشكل افتراضي. ملف التزلج الشخصي مريح جدًا لـ [ملاحة التزلج](../navigation/routing/ski-routing.md).


## نمط خريطة التزلج {#ski-map-style}

استخدم [مفتاح خريطة التزلج](../../user/map-legend/ski-map.md) لأي مرجع. فهو يساعد على تحديد أنواع مسارات التزلج على الخريطة، بالإضافة إلى أنواع الممرات الهوائية والخصائص الأخرى التي يمكن قراءتها من الخريطة.

من خلال قراءة الخريطة، يمكنك معرفة التفاصيل المهمة بالنسبة لك، مثل صعوبة مسار معين، ونوع المسار، وما إذا كان يتم تمهيده، وما إذا كان المسار مضاءً في الليل.

الخيارات الموضحة هنا متاحة في [ملاحة التزلج](../navigation/setup/route-navigation.md). تحدد **ملاحة التزلج** خيارات المسار الفردية، والتي تنطبق فقط على التزلج.


:::info نمط العرض
تم بناء خريطة التزلج في OsmAnd كأحد أنماط العرض، التي تحدد الكائنات التي سيتم عرضها على الخريطة ومظهر الكائنات. يتم وصف جميع أنماط العرض في ملف [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). بالنسبة للقواعد التي تحدد البنية الداخلية لملف XML، راجع [وثائق العرض](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### مسارات التزلج حسب الصعوبة {#pistes-by-difficulty}

| اللون | الوصف |
| --- | --- |
| ![مسار للمبتدئين](@site/static/img/plugins/ski-maps/1c_green_1.png) | أخضر - مسار للمبتدئين |
| ![تلال سهلة](@site/static/img/plugins/ski-maps/2c_blue_1.png) | أزرق - تلال سهلة |
| ![منحدرات متوسطة](@site/static/img/plugins/ski-maps/3c_red_1.png) | أحمر - منحدرات متوسطة |
| ![صعوبة متقدمة](@site/static/img/plugins/ski-maps/4c_black_1.png) | رمادي - منحدرات ذات صعوبة متقدمة |
| ![صعوبة للخبراء](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | أصفر - منحدرات ذات صعوبة للخبراء |

عادة ما يتم الإشارة إلى صعوبة المسارات بألوان محددة. قد تختلف الألوان في مختلف البلدان والمنتجعات. فيما يلي بعض الإرشادات العملية.

:::tip إرشادات
لمزيد من الإرشادات المحددة لكل نوع من أنواع صعوبة المسارات، راجع [مرجع صعوبة مسارات التزلج في OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) أو أي مصدر آخر يأخذ في الاعتبار أيضًا المنحدرات والعقبات والمخاطر. في نمط خريطة الشتاء والتزلج، قد تُظهر مخاطر معينة ممسوحة (مثل المناطق المعرضة للانهيارات الجليدية الموسومة بـ hazard=avalanche) كنقاط إنذار على الخريطة ويجب أخذها في الاعتبار مع صعوبة المسار. 
:::


### مسارات التزلج حسب النوع {#piste-by-types}

تختلف مسارات التزلج حسب النوع. يمثل النوع خصائص مختلفة للمسار لتلبية متطلبات الأنشطة المختلفة المتعلقة بالشتاء: التزلج على المنحدرات، والتزلج الكلاسيكي، والتزلج على الجليد، وركوب الزلاجات، والتزلج في المناطق النائية، وجولات التزلج، وتزلج الموغول، والتزلج الليلي، وما إلى ذلك. يساعد فهم [نوع مسار التزلج](https://wiki.openstreetmap.org/wiki/Key:piste:type) على الخريطة في بناء مسار ملاحة مثالي.

- **مسار التزلج على المنحدرات/الألبي.**  
يستخدم لملاحة التزلج. يحتوي [نوع المسار هذا](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) على اتجاه وصعوبة، وغالبًا ما يكون محاطًا بحدود منتجع التزلج. عند تحديد مسار منحدر لملاحة التزلج، يتم أخذ اتجاه المسار في الاعتبار. إذا تم تحديد نقطتي المغادرة والوجهة عكس اتجاه المسار، فإن الملاحة تسير على طول أقرب ممر هوائي.

- **مسار التزلج الشمالي/في المناطق النائية.**  
يستخدم أيضًا لملاحة التزلج. [نوع المسار هذا](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) ليس له صعوبة، وقد يكون له اتجاه أو لا، وغالبًا ما يتجاوز حدود منتجع التزلج. عند الملاحة على طول هذا النوع من المسارات، غالبًا ما يمكن تبديل نقطتي المغادرة والوجهة.

- **مسار جولات التزلج.**  
غالبًا ما يستخدمه المتزلجون للصعود الشمالي والنزول على المنحدرات. غالبًا ما يتم تمييز صعوبة مسار جولة التزلج باللون المناسب. يمكن لملاحة التزلج بناء مسار على طول هذا النوع من المسارات، مما يسمح لك بالجمع بين أنواع المسارات.

- **مسارات تزلج أخرى.**  
يمكن استخدام أنواع المسارات مثل *مسارات المشي لمسافات طويلة* أو *مسارات التزلج بالزلاجات* لملفات التزلج أو المشي لمسافات طويلة الشخصية.


### تمهيد المسارات {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![تمكين التمهيد في أندرويد](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![عرض التمهيد في أندرويد](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![تمكين التمهيد في iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![عرض التمهيد في iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

للتحقق على الخريطة مما إذا كان مسار معين قد تم تمهيده، تحتاج إلى تمكين خيار **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** في قائمة **<Translate android="true" ids="rendering_category_details"/>** التي يتم فتحها من قائمة [تكوين الخريطة](../map/configure-map-menu.md).  
تقوم آلات خاصة بتمهيد المسارات لإعدادها للنشاط المناسب، مثل التزلج الكلاسيكي، والتزلج على الجليد، وغيرها. يمكن تمهيد نفس المسار بشكل مختلف في مناطق مختلفة.

### مسارات منحدرات التزلج {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → منحدرات التزلج ومساراتها*

![المسارات معطلة في أندرويد](@site/static/img/plugins/ski-maps/and_no_routes.png) ![المسارات ممكّنة في أندرويد](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → منحدرات التزلج ومساراتها*

![المسارات معطلة في iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![المسارات ممكّنة في iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

لمعرفة أي مسارات خارج منتجع التزلج يمكنك التنقل فيها، تحتاج إلى تمكين خيار **منحدرات التزلج ومساراتها** في قائمة [**<Translate android="true" ids="rendering_category_routes"/>**](../map/routes.md)، التي يتم فتحها من قائمة [تكوين الخريطة](../map/configure-map-menu.md).  

مع تمكين ملف التزلج الشخصي، وملاحة التزلج، و[نمط خريطة الشتاء والتزلج](../map/vector-maps.md#winter-and-ski)، تعرض [منحدرات التزلج ومساراتها](../map/vector-maps.md#ski-slopes-and-routes) جميع أنواع المسارات التي يمكن لملاحة التزلج استخدامها لبناء مسارات الملاحة على طولها. يتم تحديد مسارات منحدرات التزلج هذه، إذا تم تمكينها، باللون البنفسجي في الغالب خارج حدود منتجع التزلج.  
عند تمكين الخيار [منحدرات التزلج ومساراتها](../map/vector-maps.md#ski-slopes-and-routes) لنمط خريطة غير الشتاء والتزلج، يتم عرض المنحدرات فقط. قد لا تظهر الميزات الأخرى المتعلقة بالتزلج في طبقة التصميم هذه.  
[منحدرات التزلج ومساراتها](_Ski slopes and routes_) [قابلة للنقر](../map/routes.md#actions-with-routes).


### الوضع الليلي والإضاءة {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تمكين الوضع الليلي والإضاءة في أندرويد](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![الوضع الليلي والإضاءة في أندرويد](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تمكين الوضع الليلي والإضاءة في iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![الوضع الليلي والإضاءة في iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

يمكن استخدام نمط **الشتاء والتزلج** مع [الوضع الليلي أو وضع شروق/غروب الشمس](../map/vector-maps.md#map-mode). وهو خيار مريح لأولئك الذين يفضلون الألوان الداكنة، أو تعتيم الشاشة في الليل، وكذلك لأولئك الذين يمارسون التزلج الليلي. إلى جانب الوضع الليلي، يمكن لخرائط التزلج في OsmAnd أيضًا إظهار المسارات التي بها إضاءة باستخدام خيار [إضاءة الشوارع](../map/vector-maps.md#details).  

كلا الخيارين موجودان في قائمة [تكوين الخريطة](../map/configure-map-menu.md).  

- لتمكين خيار ***الوضع الليلي***، مرر لأسفل القائمة:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- لتمكين خيار ***إضاءة الشوارع***، افتح قائمة **<Translate android="true" ids="rendering_category_details"/>** وقم بتشغيل الخيار:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)