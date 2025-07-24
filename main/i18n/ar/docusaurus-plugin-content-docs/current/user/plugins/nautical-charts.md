---
source-hash: b955b527f4a6288fa803d731df2f410db4fb91c6a6b0ec46ae14193d525bf995
sidebar_position: 7
title:  عرض الخريطة البحرية
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## نظرة عامة {#overview}

:::info ميزة مدفوعة
تُعد إضافة عرض الخريطة البحرية (Nautical Map View) [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

عرض الخريطة البحرية هو تمثيل رسومي مفصل للمحيطات والبحار والمناطق الساحلية والأنهار يساعدك على التنقل في المياه ومعرفة الطرق الشائعة والعوائق في المجرى المائي الخاص بك وأقرب الموانئ ومناطق الرسو والمعالم الهامة الأخرى.

الخريطة البحرية هي خريطة طوبوغرافية مفصلة للغاية لمساعدة قباطنة السفن على التنقل في مسار محدد على الماء. وهي تشبه خريطة الطريق للمسافرين بالسيارة. وغالبًا ما تُسمى "مخططًا" لأسباب تاريخية، وهي تمثيل رسومي مفصل للمحيطات والبحار والمناطق الساحلية والأنهار.

تُعد الخرائط البحرية مهمة للبحارة المحترفين والهواة الذين يستأجرون قاربًا للتجول في قنوات المدينة. توفر لهم الخرائط معلومات متنوعة مثل طرق الإبحار، وأضواء الملاحة، ومناطق الخطر، والمناطق المسموح أو المحظور فيها الإبحار أو الرسو، وما إلى ذلك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الخرائط البحرية](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الخرائط البحرية](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### لماذا يُعد المظهر البحري مهمًا {#why-the-nautical-theme-matters}

يُطلب من جميع البحارة المحترفين أن يكون لديهم خرائط بحرية رسمية على سفنهم. تُنشر هذه الخرائط من قبل وكالات معتمدة وهي باهظة الثمن. تستثمر الوكالات بكثافة في تحديث الخرائط. تُصدر تحديثات منتظمة للخرائط، ولكن نظرًا لأن التحقق من المعلومات ومعالجة التحديثات يستغرق وقتًا، فإن الخرائط البحرية لا تكون محدثة تمامًا أبدًا.

استنادًا إلى بيانات [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap)، تُنشأ خرائط OsmAnd البحرية بواسطة الأشخاص الذين يستخدمونها. يمكن لكل مستخدم خريطة المساهمة في الخريطة عن طريق إضافة معلومات يجدونها مهمة ومفيدة لأنفسهم، وبالتالي جعل الخريطة أكثر تفصيلاً ودقة، مما يجعلها مثالية للتوجيه أو تخطيط المسار.


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يؤدي الإعداد التالي إلى ظهور الخريطة البحرية على الشاشة:

1. [شراء](../plugins/index.md#purchase) و[تفعيل](../plugins/index.md#enable--disable) إضافة عرض الخريطة البحرية.
2. [تنزيل](#download-nautical-maps) الخرائط البحرية.
3. تعيين [نمط الخريطة البحرية](#set-nautical-map-style) للملف الشخصي المطلوب [profile](../personal/profiles.md).


### تعيين نمط الخريطة البحرية {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![نوع الخريطة البحرية في أندرويد](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![نوع الخريطة البحرية في iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

استخدم [دليل الخريطة](../../user/map-legend/nautical-map.md) لأي مرجع لما هو معروض على الخريطة البحرية. يشرح العناصر الرمزية على الخريطة البحرية ويعمل كمرجع لمساعدتك على التنقل عند الشك. من خلال تعيين نمط الخريطة البحرية، يمكنك الحصول على أفضل عرض للبيانات البحرية التي تم تنزيلها وعرضها.

لتغيير نمط الخريطة الحالي إلى بحري، تحتاج إلى إجراء الإعدادات التالية:

1. حدد [الملف الشخصي](../personal/profiles.md) المطلوب.
2. افتح [تكوين الخريطة](../map/configure-map-menu.md).
3. مرر لأسفل إلى نمط الخريطة، وافتحه، وحدد **بحري**.


### تنزيل الخرائط البحرية {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![عرض خرائط إضافة بحرية أندرويد](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![عرض خرائط إضافة بحرية iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

للحصول على أفضل عرض، يمكن تكييف الخرائط مع الاحتياجات الحالية: يمكن إضافة علامات ورموز بنقاط عمق، وحسب الحاجة، خطوط كفاف. من ناحية أخرى، يمكن أن تكون الخرائط القياسية التي تحتوي على معلومات حول المياه الداخلية والساحلية والقريبة من الشاطئ لمنطقة معينة مكملاً جيدًا للمعلومات حول الممرات المائية على الخريطة البحرية.

عند [تنزيل](../start-with/download-maps.md) خريطة بحرية، تظهر تفاصيل إضافية متعلقة بالملاحة *بالقوارب* على الخريطة. تحتوي بعض أنواع [الخرائط البحرية](../start-with/download-maps.md#type-of-maps) على تفاصيل مثل:

- **علامات ورموز بحرية.**
    تحتوي العلامات والرموز على جميع علامات الملاحة البحرية للملاحة الداخلية والساحلية. ستساعدك معرفة هذه العلامات على التنبؤ بموقع الصخور والعوائق ومناطق الرسو والعوامات والتيارات والمياه العميقة والضحلة وجوانب القناة، بغض النظر عن الاتجاه، وما إلى ذلك. تُنزّل العلامات والرموز مرة واحدة للعالم كله.

- **نقاط العمق.**
    تُمثل البيانات البحرية من حزم نقاط العمق بأرقام معروضة على الماء تشير إلى أضحل عمق في موقع معين. تتوفر نقاط العمق لكل نصف كرة وبعض المناطق.

- **خطوط كفاف العمق.**
    تسمح لك حزم خطوط كفاف العمق بتحديد مناطق ذات عمق متساوٍ. وهي تهدف إلى تصور التغيرات في التضاريس تحت سطح الماء. يمكن تنزيل خطوط كفاف العمق لمناطق معينة ثم إيقاف تشغيلها إذا لم تكن بحاجة إليها.

:::info أرقام العمق
جميع أرقام العمق على الخرائط البحرية تُشار إليها بالمتر.
:::


### تعطيل نمط الخريطة البحرية {#disable-nautical-map-style}

لإزالة الخريطة البحرية وعرض إحدى خرائط OsmAnd التقليدية، قم بأي مما يلي:

- تعطيل إضافة الخريطة البحرية.
- تغيير نمط الخريطة إلى أي شيء آخر غير *بحري*.

:::info ملاحظة
تعطيل إضافة الخريطة البحرية لا يزيل البيانات البحرية المحملة، لذا حتى إذا قمت بتغيير طريقة العرض من بحري إلى أي طريقة أخرى عندما يتم تنزيل البيانات البحرية، فإنها تظل مرئية على الخريطة.
:::


## الملف الشخصي البحري {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![خطوط كفاف العمق البحرية في أندرويد](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![خطوط كفاف العمق في iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

يمكن تضمين الخريطة البحرية في أي ملف شخصي. ومع ذلك، فهي الأكثر قيمة في [ملف تعريف القارب](../personal/profiles.md) وخاصة في [ملاحة القوارب](../navigation/routing/boat-navigation.md).


## نمط الخريطة البحرية {#nautical-map-style}

تُوسع إضافة Nautical في OsmAnd أنماط خرائط الطبقة المتجهة بنمط الخريطة Nautical. يسمح لك هذا بعرض بيانات الخريطة وفقًا لقواعد الخريطة Nautical، على سبيل المثال: مناطق صفراء للأرض والضحال، مناطق زرقاء فاتحة للمياه الضحلة، إلخ. لمزيد من المعلومات، راجع [دليل الخريطة](../../user/map-legend/nautical-map.md).


### نقاط العمق {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الخرائط البحرية](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الخرائط البحرية](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

تتوفر [حزم](../start-with/download-maps.md#type-of-maps) نقاط العمق لأوروبا، النصف الشمالي، والنصف الجنوبي وهي معلوماتية. تشير نقاط العمق إلى التغيرات في التضاريس تحت سطح الماء، مما يشير إلى أضحل عمق. هذا ضروري لملاحة *القوارب*. بعد التنزيل، تحتاج إلى تشغيل [خطوط كفاف العمق](#depth-contours) لعرضها على الخريطة.


### خطوط كفاف العمق {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![خطوط كفاف العمق البحرية في أندرويد](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![خطوط كفاف العمق في iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

عند عرض خريطة بحرية على الشاشة، يمكنك ضبط ما تراه:

- إظهار أو إخفاء *خطوط كفاف العمق*.
- ضبط مستوى تفاصيل معلومات قاع البحر: [*عرض الخط* و *مخطط ألوان الخط*](../map/vector-maps.md#-nautical-depth).

:::info ملاحظة
يمكنك مساعدة تطبيق OsmAnd على زيادة قاعدة بيانات خطوط كفاف العمق عن طريق إضافة معلوماتك باستخدام [OpenSeaMap](https://map.openseamap.org/)
:::


### تفاصيل قاع البحر {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![تفاصيل قاع البحر](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![تفاصيل قاع البحر](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

تحتوي بيانات قاع البحر على معلومات حول الغطاء النباتي والمواد السطحية العامة مثل الصخور الصخرية، والأصداف، والحصى، والشعاب المرجانية، والطمي، وما إلى ذلك. نظرًا للتصنيف الدولي لبيانات قاع البحر، هناك خيارات لعرض هذه التفاصيل على الخريطة: *بسيط*، *فئة*، *الكل* أو *إهمال*. استخدم [دليل خريطة منطقة قاع البحر](../map-legend/nautical-map.md#seabed-area) لمزيد من المعلومات.

- **بسيط** (*لإصدار أندرويد*) - يُظهر رموز العلامات البحرية وفقًا لمرجع INT-1، مما يشير إلى طبيعة سطح قاع البحر.
- **فئة** - بالإضافة إلى رمز العلامة البحرية، يُظهر أيضًا علامة العلامة البحرية ذات الصلة، مما يشير إلى المادة الطبيعية، أو فئة الأعشاب البحرية.
- **الكل** - بالإضافة إلى رمز العلامة البحرية، أو العلامة، أو الفئة، يُظهر أيضًا مؤهلات مثل ناعم، لزج، خشن، إلخ. بالنسبة للأعشاب البحرية، يُظهر البيانات الموسومة بعلامات *التصنيف* و *الجنس*.
- **إهمال** - لا يُظهر تفاصيل قاع البحر.

:::info ملاحظة
لمزيد من التفاصيل حول تصنيف تفاصيل السطح وخيارات العرض، راجع [ويكي العلامات البحرية في OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: يونيو 2023*