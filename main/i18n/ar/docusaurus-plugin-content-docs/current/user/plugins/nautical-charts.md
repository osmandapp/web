---
source-hash: 9ea8dcdea560c84f7300f1fcf64736d6b3483b4296ea97397a60522ba65d2423
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
ملحق عرض الخريطة البحرية هو [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

عرض الخريطة البحرية هو تمثيل رسومي مفصل للمحيطات والبحار والمناطق الساحلية والأنهار يساعدك على الإبحار في المياه ومعرفة المسارات الشائعة والعقبات في مجراك المائي وأقرب الموانئ والمراسي والمعالم الهامة الأخرى.

الخريطة البحرية هي خريطة طبوغرافية مفصلة للغاية لمساعدة الربابنة على قيادة سفينة في مسار محدد على الماء. وهي تشبه خريطة الطريق لأولئك الذين يسافرون بالسيارة. غالبًا ما يطلق عليها "مخطط" لأسباب تاريخية، وهي تمثيل رسومي مفصل للمحيطات والبحار والمناطق الساحلية والأنهار.

الخرائط البحرية مهمة للبحارة المحترفين والهواة الذين يستأجرون قاربًا للتجول في قنوات المدينة. توفر لهم الخرائط معلومات متنوعة مثل طرق الإبحار، وأضواء الملاحة، ومناطق الخطر، والمناطق التي يُسمح أو يُحظر فيها الإبحار أو الرسو، إلخ.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خرائط بحرية](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خرائط بحرية](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### أهمية السمة البحرية {#why-the-nautical-theme-matters}

يُطلب من جميع البحارة المحترفين أن يكون لديهم خرائط بحرية رسمية على سفنهم. يتم نشر هذه الخرائط من قبل وكالات معتمدة وهي باهظة الثمن. تستثمر الوكالات بكثافة في الحفاظ على تحديث الخرائط. يصدرون تحديثات منتظمة للخرائط، ولكن نظرًا لأن التحقق من المعلومات ومعالجة التحديثات يستغرق وقتًا، فإن الخرائط البحرية لا تكون محدثة بالكامل أبدًا.

استنادًا إلى بيانات [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap)، يتم إنشاء خرائط OsmAnd البحرية بواسطة الأشخاص الذين يستخدمونها. يمكن لكل مستخدم للخريطة المساهمة في الخريطة عن طريق إضافة المعلومات التي يجدونها مهمة ومفيدة لأنفسهم، مما يجعل الخريطة أكثر تفصيلاً ودقة، ومثالية للتوجيه أو تخطيط المسار.


## معلمات الإعداد المطلوبة {#required-setup-parameters}

الإعداد التالي يجعل الخريطة البحرية تظهر على الشاشة:

١. [شراء](../plugins/index.md#purchase) و[تفعيل](../plugins/index.md#enable--disable) ملحق عرض الخريطة البحرية.
٢. [تنزيل](#download-nautical-maps) الخرائط البحرية.
٣. ضبط نمط الخريطة [البحري](#set-nautical-map-style) [للملف الشخصي](../personal/profiles.md) المطلوب.


### ضبط نمط الخريطة البحرية {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![نوع الخريطة البحرية في أندرويد](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![نوع الخريطة البحرية في iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

استخدم [مفتاح الخريطة](../../user/map-legend/nautical-map.md) لأي مرجع لما هو معروض على الخريطة البحرية. فهو يشرح العناصر الرمزية على الخريطة البحرية ويعمل كمرجع لمساعدتك على الإبحار عند الشك. من خلال ضبط نمط الخريطة البحرية، يمكنك الحصول على أفضل عرض للبيانات البحرية التي تم تنزيلها وعرضها.

لتغيير نمط الخريطة الحالي إلى النمط البحري، تحتاج إلى إجراء الإعدادات التالية:

١. حدد [الملف الشخصي](../personal/profiles.md) المطلوب.
٢. افتح [إعدادات الخريطة](../map/configure-map-menu.md).
٣. مرر لأسفل إلى نمط الخريطة، وافتحه، وحدد **بحري**.


### تنزيل الخرائط البحرية {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![عرض خرائط ملحق الخرائط البحرية في أندرويد](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![عرض خرائط ملحق الخرائط البحرية في iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

للحصول على عرض مثالي، يمكن تكييف الخرائط مع الاحتياجات الحالية: يمكن إضافة العلامات والرموز مع نقاط العمق، وحسب الحاجة، خطوط الكفاف. من ناحية أخرى، يمكن أن تكون الخرائط القياسية التي تحتوي على معلومات حول المياه الداخلية والبرية والقريبة من الشاطئ لمنطقة معينة مكملاً جيدًا للمعلومات حول الممرات المائية على الخريطة البحرية.

عند [تنزيل](../start-with/download-maps.md) خريطة بحرية، تظهر تفاصيل إضافية تتعلق بملاحة *القوارب* على الخريطة. تحتوي بعض أنواع [الخرائط البحرية](../plugins/nautical-charts/#nautical-map-style) على تفاصيل مثل:

- **العلامات والرموز البحرية.**
    تحتوي العلامات والرموز على جميع علامات الملاحة البحرية لكل من الملاحة الداخلية والساحلية. ستساعدك معرفة هذه العلامات على التنبؤ بموقع الصخور والعوائق والمراسي والعوامات والتيارات والمياه العميقة والضحلة وجوانب القناة، بغض النظر عن الاتجاه، إلخ. يتم تنزيل العلامات والرموز مرة واحدة للعالم بأسره.

- **نقاط العمق.**
    يتم تمثيل البيانات البحرية من حزم نقاط العمق بأرقام معروضة على الماء تشير إلى أقل عمق في موقع معين. تتوفر نقاط العمق لكل نصف كرة وبعض المناطق.

- **خطوط الكفاف للعمق.**
    تسمح لك حزم خطوط الكفاف للعمق بتحديد مناطق ذات عمق متساوٍ. وهي مخصصة لتصور التغيرات في التضاريس تحت سطح الماء. يمكن تنزيل خطوط الكفاف للعمق لمناطق معينة ثم إيقاف تشغيلها إذا لم تكن بحاجة إليها.

:::info أرقام العمق
جميع أرقام العمق على الخرائط البحرية موضحة بالأمتار.
:::


### تعطيل نمط الخريطة البحرية {#disable-nautical-map-style}

لإزالة النمط البحري وعرض إحدى خرائط OsmAnd التقليدية، قم بأي مما يلي:

- تعطيل ملحق الخرائط البحرية.
- تغيير نمط الخريطة إلى أي شيء آخر غير *بحري*.

:::info ملاحظة
لا يؤدي تعطيل ملحق الخرائط البحرية إلى إزالة البيانات البحرية المحملة، لذلك حتى إذا قمت بتغيير طريقة العرض من بحري إلى أي طريقة أخرى عند تنزيل البيانات البحرية، فإنها تظل مرئية على الخريطة.
:::


## الملف الشخصي البحري {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![خطوط الكفاف للعمق البحرية في أندرويد](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![خطوط الكفاف للعمق في iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

يمكن تضمين الخريطة البحرية في أي ملف شخصي. ومع ذلك، فهي الأكثر قيمة في [ملف القارب الشخصي](../personal/profiles.md) وخاصة في [ملاحة القوارب](../navigation/routing/boat-navigation.md).


## نمط الخريطة البحرية {#nautical-map-style}

يوسع ملحق الخرائط البحرية في OsmAnd أنماط خرائط الطبقات المتجهة بنمط الخريطة البحرية. يسمح لك بعرض بيانات الخريطة وفقًا لقواعد الخرائط البحرية، على سبيل المثال: مناطق صفراء للأرض والمياه الضحلة، ومناطق زرقاء فاتحة للمياه الضحلة، إلخ. لمزيد من المعلومات، راجع [مفتاح الخريطة](../../user/map-legend/nautical-map.md).


### نقاط العمق {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خرائط بحرية](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خرائط بحرية](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

تتوفر [حزم](../start-with/download-maps.md#overview) نقاط العمق لأوروبا ونصف الكرة الشمالي ونصف الكرة الجنوبي وهي معلوماتية. تشير نقاط العمق إلى التغيرات في التضاريس تحت سطح الماء، مما يشير إلى أقل عمق. هذا ضروري لملاحة *القوارب*. بعد التنزيل، تحتاج إلى تشغيل [خطوط الكفاف للعمق](#depth-contours) لعرضها على الخريطة.


### خطوط الكفاف للعمق {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![خطوط الكفاف للعمق البحرية في أندرويد](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![خطوط الكفاف للعمق في iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

عندما يتم عرض خريطة بحرية على الشاشة، يمكنك ضبط ما تراه:

- إظهار أو إخفاء *خطوط الكفاف للعمق*.
- ضبط مستوى تفاصيل معلومات قاع البحر: [*عرض الخط* و*نظام ألوان الخط*](../map/vector-maps.md#-nautical-depth).

:::info ملاحظة
يمكنك مساعدة تطبيق OsmAnd على زيادة قاعدة بيانات خطوط الكفاف للعمق عن طريق إضافة معلوماتك باستخدام [OpenSeaMap](https://map.openseamap.org/)
:::


### تفاصيل قاع البحر {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![تفاصيل قاع البحر](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![تفاصيل قاع البحر](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

تحتوي بيانات قاع البحر على معلومات حول الغطاء النباتي والمواد السطحية العامة مثل الصخور الصخرية، والأصداف، والحصى، والشعاب المرجانية، والطمي، إلخ. نظرًا للتصنيف الدولي لبيانات قاع البحر، هناك خيارات لعرض هذه التفاصيل على الخريطة: *بسيط (simple)*، *فئة (category)*، *الكل (all)* أو *حذف (omit)*. استخدم [مفتاح خريطة منطقة قاع البحر](../map-legend/nautical-map.md#seabed-area) لمزيد من المعلومات.

- **بسيط (Simple)** (*لإصدار أندرويد*) - يعرض رموز العلامات البحرية وفقًا لـ INT-1 Ref، مما يشير إلى طبيعة سطح قاع البحر.
- **فئة (Category)** - بالإضافة إلى رمز العلامة البحرية، يعرض أيضًا علامة العلامة البحرية ذات الصلة، مما يشير إلى المادة الطبيعية، أو فئة الأعشاب البحرية.
- **الكل (All)** - بالإضافة إلى رمز العلامة البحرية أو العلامة أو الفئة، يعرض أيضًا مؤهلات مثل ناعم، لزج، خشن، إلخ. بالنسبة للأعشاب البحرية، يعرض البيانات المميزة بعلامات *taxon* و *genus*.
- **حذف (Omit)** - لا يعرض تفاصيل قاع البحر.

:::info ملاحظة
لمزيد من التفاصيل حول تصنيف تفاصيل السطح وخيارات العرض، راجع [ويكي العلامات البحرية لـ OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [أنظمة لوحة الألوان](../personal/color-palette-schemes.md)