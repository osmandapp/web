---
source-hash: 27c365e2cc23607b9c9893a7baf13d93386a9e23a925c712b829dec94e7a4355
sidebar_position: 2
title:  أزرار الخريطة
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

تُعد أزرار الخريطة، بما في ذلك *التكبير/التصغير*، و*البحث*، و*الاتجاهات*، و*البوصلة*، و*موقعي*، و*الوضع ثلاثي الأبعاد*، و*القائمة*، عناصر التحكم الأساسية للتفاعل مع الخريطة. يقدم كل زر وظائف محددة لتحسين تجربة التنقل واستخدام الخريطة.


## موقعي والتكبير/التصغير {#my-location-and-zoom}

![قائمة شاشة التهيئة](@site/static/img/widgets/location_zoom_buttons.png)

استخدم هذه الأزرار للتحكم في كيفية عرض الخريطة على شاشة جهازك:

- **موقعي**. يوضح ما إذا كان مركز الخريطة متزامنًا مع الموقع الجغرافي الحالي لجهازك.
- **التكبير/التصغير**. يسمح لك بضبط مستوى تكبير الخريطة لتوفير المزيد أو القليل من التفاصيل.
إذا كنت تريد المزيد من المعلومات حول استخدام هذه الأزرار، يمكنك الاطلاع على المقالة [التفاعل مع الخريطة](../map/interact-with-map.md#my-location-and-zoom).


## الاتجاهات {#directions}

![زر الاتجاهات يسمح](@site/static/img/widgets/directions_button_allows.png)

يُعد زر **الاتجاهات** ضروريًا لتخطيط المسار والتنقل:

- [بناء مسار](../navigation/index.md). استخدم هذا الزر لإنشاء مسار.
- [بدء التنقل](../navigation/index.md). ابدأ التنقل خطوة بخطوة.
- في وضع التنقل، لا يكون زر *الاتجاهات* مرئيًا بشكل افتراضي ولكنه يظهر بعد نقرة قصيرة على الخريطة.

الحالات الدالة لزر *الاتجاهات*:

- تشير *الأيقونة الرمادية الافتراضية* إلى أن المسار لم يتم إنشاؤه بعد. يؤدي النقر على هذه الأيقونة إلى فتح وظيفة [إعداد المسار](../navigation/setup/route-navigation.md).
- تشير *الأيقونة الزرقاء الافتراضية* إلى أن المسار قد تم بناؤه، ولكن التنقل لم يبدأ بعد. يؤدي النقر على هذه الأيقونة إلى فتح وظيفة [إعداد المسار](../navigation/setup/route-navigation.md#start--stop-navigation).
- تشير *أيقونة السهم الأزرق* إلى أن التنقل نشط. يؤدي النقر على هذه الأيقونة إلى فتح [تفاصيل المسار الحالي](../navigation/setup/route-details.md).


## تهيئة الخريطة {#configure-map}

![تهيئة الخريطة](@site/static/img/widgets/configure_map.png)

يوفر زر **تهيئة الخريطة** الوصول إلى [قائمة تهيئة الخريطة](../map/configure-map-menu.md). تعكس الأيقونة أيضًا [ملف تعريف التطبيق الحالي](../personal/profiles.md)، مما يسمح لك بتحديد والتبديل بين ملفات التعريف المختلفة.


## القائمة الرئيسية {#main-menu}

![زر القائمة الرئيسية](@site/static/img/widgets/main_menu_button.png)

يفتح زر [**القائمة الرئيسية**](../start-with/main-menu.md) القائمة العامة، مما يمنح الوصول إلى [جميع ميزات التطبيق](../start-with/main-menu.md). في وضع التنقل، يكون هذا الزر مخفيًا بشكل افتراضي ويصبح مرئيًا بعد نقرة قصيرة على الخريطة.


## البحث {#search}

![زر البحث](@site/static/img/widgets/search_button.png)

يوفر زر البحث وصولاً سريعًا إلى [إمكانيات البحث](../search/index.md)، مما يسمح لك بالعثور على المواقع ونقاط الاهتمام والمعلومات الأخرى مباشرة من الخريطة.


## البوصلة {#compass}

يشير زر البوصلة إلى اتجاه الخريطة على شاشة جهازك. لمزيد من المعلومات، ارجع إلى مقالة [التفاعل مع الخريطة](../map/interact-with-map.md#map-orientation--compass).


### أوضاع اتجاه الخريطة {#map-orientation-modes}

- ![البوصلة](@site/static/img/widgets/map_butt_manually_ios.png)  
**دوران يدوي**. في هذا الوضع، يمكنك تدوير الخريطة يدويًا باستخدام [إيماءة مؤشرين (لمس بإصبعين وتدوير)](../map/interact-with-map.md#gestures) وفقًا لتفضيلاتك. لا يعتمد اتجاه الخريطة على اتجاه السفر أو بوصلة الجهاز، بل يتم تحديده بواسطتك. يتم تعيين وضع الدوران اليدوي افتراضيًا.

- ![البوصلة](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**اتجاه الحركة**. في هذا الوضع، يتم توجيه الخريطة وفقًا لاتجاه حركتك المعروف من بيانات GPS. على سبيل المثال، إذا انعطفت يمينًا، تدور الخريطة أيضًا بحيث يتوافق الجانب الأيمن من الشاشة مع اتجاه الحركة. للحصول على التفاصيل، انتقل إلى [تدوير الخريطة حسب الاتجاه](../map/interact-with-map#rotate-map-by-bearing).

- ![البوصلة](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**اتجاه البوصلة**. تشير الأيقونة الموجودة على الزر إلى الشمال الفعلي، وتتحرك الخريطة وفقًا لاتجاه بوصلة جهازك. بهذه الطريقة، يتوافق شمال الخريطة مع الشمال الحقيقي، ويمكنك رؤية اتجاه الخريطة بالنسبة للتضاريس المحيطة. يجب أن يكون جهازك في وضع أفقي قدر الإمكان. إذا لم يكن جهازك يحتوي على مستشعر بوصلة، يظل اتجاه الخريطة دون تغيير.

- ![البوصلة](@site/static/img/widgets/map_butt_north_up_ios.png)  
**الشمال للأعلى**. في هذا الوضع، يتم تثبيت الخريطة (بقفل ثابت) في اتجاه الشمال، وهو الحافة العلوية لجهازك. بغض النظر عن اتجاه حركة الجهاز، تظل الخريطة ثابتة، ويمكنك رؤية موقعك بالنسبة لمحيطك. لا تحتوي الخريطة على دوران تلقائي أو يدوي.

### سلوك النقر على البوصلة {#compass-tapping-behavior}

يوفر زر البوصلة إجراءات متعددة للتحكم في اتجاه الخريطة:

- **نقرة واحدة**. تؤدي *نقرة واحدة* على [زر البوصلة](../widgets/map-buttons.md#compass) (الموجود في الزاوية العلوية اليسرى من الشاشة عندما يكون [مرئيًا](../widgets/map-buttons.md#display-options)) إلى إعادة توجيه اتجاه الخريطة *إلى الشمال* على الفور في جميع أوضاع اتجاه الخريطة. حتى إذا كانت الخريطة في وضع *اتجاه البوصلة*، فإنها لا تزال تدور للحظة ثم تعود إلى الاتجاه الديناميكي لهذا الوضع.

- **نقرة مزدوجة**. للتبديل بسرعة بين أوضاع اتجاه الخريطة، مثل اتباع اتجاه GPS أو الدوران مع الجهاز، *انقر نقرًا مزدوجًا* على [زر البوصلة](../widgets/map-buttons.md#compass) (عندما يكون [مرئيًا](../widgets/map-buttons.md#display-options)).

- **نقرة طويلة**. بـ *نقرة طويلة* على [زر البوصلة](../widgets/map-buttons.md#compass) (عندما يكون [مرئيًا](../widgets/map-buttons.md#display-options)) يمكنك فتح قائمة بجميع أوضاع اتجاه الخريطة وتحديد الوضع المطلوب. يمكن أيضًا فتح هذه القائمة في [إعدادات الملف الشخصي](../personal/profiles.md#appearance).


### خيارات العرض {#display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![أداة البوصلة](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![أداة البوصلة](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

تشير أيقونة البوصلة الموجودة على الزر دائمًا إلى الشمال. يمكنك تحديد كيفية عرض زر البوصلة على الشاشة.

- **مرئي دائمًا**. لا يختفي الزر من الشاشة.
- **مخفي دائمًا**. في هذه الحالة، لا يمكنك تغيير اتجاه الخريطة بسرعة، لكن الزر لن يشغل مساحة على الشاشة.
- **مرئي إذا كانت الخريطة مدورة**. لا يكون الزر مرئيًا بينما تشير البوصلة إلى الشمال عند الحافة العلوية لجهازك.  


## الوضع ثلاثي الأبعاد {#3d-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![الوضع ثلاثي الأبعاد](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![الوضع ثلاثي الأبعاد](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. إذا تم تحديد هذا الوضع لزر، فأنت بحاجة إلى استخدام إيماءة لتغيير عرض الخريطة. انقر على الخريطة بإصبعين وحركهما لأعلى ولأسفل لضبط إمالة الخريطة.  
- *<Translate android="true" ids="shared_string_visible"/>*. يتم عرض الزر دائمًا على شاشة الخريطة.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. يتم عرض الزر على شاشة الخريطة عند تغيير عرض الخريطة بإيماءة [*إصبعين وتحريك*](../map/interact-with-map.md#gestures).  

### إعدادات إضافية {#additional-settings}

1. **عرض الزر**. (*لأندرويد*) يظهر إعداد زر *الوضع ثلاثي الأبعاد* في قائمة شاشة التهيئة فقط إذا تم تحديد محرك عرض الخريطة [الإصدار 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

2. **يحفظ الزاوية**. بعد التبديل إلى الوضع ثلاثي الأبعاد وتغيير الزاوية يدويًا بإيماءة، يتم حفظ الزاوية واستخدامها في المرة التالية التي يتم فيها تنشيط الوضع ثلاثي الأبعاد. يتم حفظ هذا الخيار فقط للملف الشخصي المحدد في ذلك الوقت.

3. **التحريك**. يمكنك وضع الزر في أي مكان على شاشة جهازك. للقيام بذلك، اضغط مع الاستمرار على الزر وبدون رفع إصبعك، اسحبه إلى المكان المطلوب.

4. **موضع الزر**. يتم حفظ موضع الزر على الخريطة على شاشة التطبيق بشكل منفصل لكل ملف تعريف.

5. **توصية**. يوصى بتنزيل وتمكين [خريطة تظليل التلال](../plugins/topography.md#hillshade-slope-and-altitude-layers) للمنطقة المحددة.


## الأزرار المخصصة {#custom-buttons}

[أداة الإجراء السريع](./quick-action.md) هي زر قابل للتهيئة بأنواع إجراءات مختلفة يمكن تعيينها. من الممكن أيضًا أن يكون لديك عدة [أزرار مخصصة](./quick-action.md#custom-buttons).


## مظهر زر الخريطة {#map-button-appearance}

<InfoAndroidOnly/>

| الأزرار الافتراضية | الأزرار المخصصة |
| :--- | :--- |
| ![مظهر زر الخريطة](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![مظهر زر الخريطة](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

تتوفر إعدادات مظهر زر الخريطة عبر القوائم التالية:

- *القائمة ← تهيئة الشاشة ← الأزرار ← الأزرار الافتراضية*
- *القائمة ← تهيئة الشاشة ← الأزرار المخصصة ← الإجراء السريع ← قائمة النقاط الثلاث ← المظهر*

يسمح لك تخصيص مظهر الأزرار بضبط الحجم والشكل والأيقونة وشفافية الخلفية لكل من [الإجراء السريع (الأزرار المخصصة)](../widgets/quick-action.md#button-appearance) و[الأزرار الافتراضية](../widgets/configure-screen.md#button-appearance). تتيح لك هذه المرونة تخصيص الواجهة لتناسب تفضيلاتك وتحسين سهولة الاستخدام.


## مقالات ذات صلة {#related-articles}

- [تهيئة الشاشة](./configure-screen.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات التنقل](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)

> *آخر تحديث: فبراير 2025*