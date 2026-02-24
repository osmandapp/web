---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
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

تحدد أنماط الخريطة كيفية عرض بيانات الخريطة المتجهة في OsmAnd. يتحكم النمط في المظهر البصري لكائنات الخريطة مثل الطرق، والمباني، واستخدام الأراضي، والمياه، ونقاط الاهتمام، بما في ذلك الألوان، وأنماط الخطوط، والتسميات.

يوفر OsmAnd عدة أنماط مدمجة محسنة لأنشطة مختلفة. يمكنك تبديل الأنماط في [قائمة تكوين الخريطة](./configure-map-menu.md) وتعديل معلمات النمط. تدعم أنماط الخريطة المتجهة التبديل بين وضعي النهار والليل.

بالإضافة إلى الأنماط المدمجة، يدعم OsmAnd أنماط خرائط مخصصة. تعتمد الأنماط المخصصة على قواعد العرض ويمكن استيرادها، ومشاركتها، وتعديلها لإبراز المعلومات التي تحتاجها.


## أنماط الخريطة الافتراضية {#default-map-styles}

يوفر OsmAnd لك العديد من أنماط الخريطة وطبقات البيانات التي تناسب الافتراضي. يصف هذا القسم الرئيسي منها لوضعي النهار والليل.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![نمط خريطة OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

نمط عرض الخريطة القياسي في OsmAnd يوازن بين التفاصيل والبساطة، مما يجعله مثاليًا للاستكشاف الحضري والخارجي. يفصل ميزات المدينة مثل الشوارع، والمباني، ومحطات النقل بينما يبسط الفوضى البصرية بجعل الخرائط أوضح.  

تشمل الفوائد الرئيسية رسم الطرق، وجودة السطح، وقيود الوصول، وعلامات الطرق، وعروض مسارات مقياس SAC، والمرافق الرياضية، والتفاصيل الطبوغرافية مثل خطوط الارتفاع.

### عرض الجولة {#touring-view}

![نمط خريطة عرض الجولة](@site/static/img/map/map-style-touring.png)

نمط الجولة ذو التباين العالي والتفاصيل القصوى. يشمل جميع خيارات نمط OsmAnd الافتراضي مع عرض أكبر قدر ممكن من التفاصيل، خاصة الطرق، والمسارات، وطرق السفر الأخرى. تمييز واضح لأنواع الطرق في *أطلس الجولة*. مناسب للنهار، والليل، والاستخدام الخارجي.

### UniRS وLightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

أنماط UniRS وLightRS هي أنماط مؤلفة تعرض معلومات الخريطة الأساسية ولكن في مخططات ألوان مختلفة.  

- **نمط UniRS**. هذا النمط هو نسخة معدلة من الافتراضي لتعزيز التباين لمسارات المشاة والدراجات. يحتفظ بمخطط الألوان الكلاسيكي Mapnik.  

    ![نمط خريطة LightRS](@site/static/img/map/map-style-lightrs.png)

- **نمط LightRS**. هذا نمط قيادة بسيط يتميز بوضع ليل لطيف. يبرز الطرق بلون برتقالي متباين، ويخفت كائنات الخريطة الثانوية، ويعرض الميزات الطبوغرافية مثل خطوط الارتفاع.

    ![نمط خريطة UniRS](@site/static/img/map/map-style-unirs.png)

### بحري {#nautical}

![نمط خريطة بحري](@site/static/img/map/map-style-nautical.png)

هذا نمط للملاحة البحرية يتميز بالعوامات، والمنارات، ومسارات الأنهار، وممرات البحر، والعلامات، والموانئ، وعلامات الملاحة البحرية. اقرأ المزيد في القسم [نمط الخريطة البحري](../plugins/nautical-charts.md#nautical-map-style).

### بحري متقدم {#marine}

![نمط خريطة بحري](@site/static/img/map/map-style-marine.png)

هذا نمط خريطة بحري متقدم مع قطاعات الضوء، وخصائص المنارة الكاملة، وميزات بحرية مفصلة أخرى للملاحة البحرية الواقعية والدقيقة. للمزيد من التفاصيل اقرأ القسم [نمط الخريطة البحري المتقدم](../plugins/nautical-charts.md#marine-map-style).

### شتاء وتزلج {#winter-and-ski}

![نمط خريطة الشتاء والتزلج](@site/static/img/map/map-style-winter-ski.png)

هذا نمط لرياضات التزلج يصف المسارات، والمصاعد، ومسارات الجري عبر البلاد، بالإضافة إلى إخفاء كائنات الخريطة الثانوية. **نمط الشتاء والتزلج** مصمم لمساعدتك في الملاحة في رياضات الشتاء.  

يمكنك رؤية منحدرات التزلج وتفاصيل أخرى مثل صعوبة المنحدرات وعلامات المصاعد. تشمل الفوائد الرئيسية عرضًا مريحًا للمنحدرات، والمصاعد، وميزات التزلج الأخرى. أقل من الكائنات الثانوية المشتتة للخريطة. اقرأ المزيد في المقالة [خرائط التزلج](../plugins/ski-maps.md).

### طوبوغرافي {#topo}

![نمط خريطة طوبوغرافي](@site/static/img/map/map-style-topo.png)

هذا النمط مصمم للمشي، والتخييم، وركوب الدراجات في الطبيعة. يتميز بطرق متباينة وميزات طبيعية، أنواع مختلفة من المسارات، خيارات خطوط الارتفاع الموسعة، وتفاصيل إضافية. قابل للقراءة في الهواء الطلق. يسمح إعداد *نزاهة السطح* لك بتمييز جودة الطريق.

### OSM-carto {#osm-carto}

![نمط خريطة OSM-carto](@site/static/img/map/map-style-osm-carto.png)

هذا النمط يقلد النمط الافتراضي لـ[موقع OpenStreetMap على الويب](https://www.openstreetmap.org/). كود المصدر للنسخة الويبية متاح على [Github](https://github.com/gravitystorm/openstreetmap-carto)، وكود OsmAnd متاح على [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### صحراوي {#desert}

![نمط خريطة صحراوي](@site/static/img/map/map-style-desert.png)

مصمم للصحاري والمناطق ذات الكثافة السكانية المنخفضة الأخرى، يقدم معلومات خريطة أكثر تفصيلاً.

### خارج الطرق {#offroad}

![نمط خريطة خارج الطرق](@site/static/img/map/map-style-offroad.png)

مصمم للملاحة خارج الطرق، يعتمد هذا النمط على تخطيط الخريطة [الطوبوغرافي](#topo) ويعمل جيدًا مع صور الأقمار الصناعية كطبقة سفلية. يتميز بطرق رئيسية أرفع لإبراز المسارات، والتراكات، ومسارات الدراجات، ومسارات خارج الطرق الأخرى، مما يجعله مثاليًا لاستكشاف الطرق غير الممهدة في المناطق الريفية أو النائية.

### تلفريك الثلج {#snowmobile}

![نمط خريطة تلفريك الثلج](@site/static/img/map/map-style-snowmobile.png)

مخصص لملاحة تلفريك الثلج، يبرز هذا النمط المسارات، والطرق، والتراكات المناسبة لتلفريك الثلج. يبرز المسارات المتخصصة في المناطق الثلجية، مما يقدم ملاحة واضحة عبر التضاريس المغطاة بالثلج حيث قد لا تكون الطرق القياسية متاحة. 


## نمط الخريطة المخصص {#custom-map-style}

إذا كان لديك نمط خريطة مخصص شخصي أو من طرف ثالث تم إنشاؤه وفقًا لـ[المواصفات](../../technical/osmand-file-formats/osmand-rendering-style.md)، يمكنك تثبيته على جهازك بهذه الطرق:

- انسخ ملف `.render.xml` إلى جهازك وافتحه باستخدام OsmAnd.
- استخدم [حوارات الاستيراد/التصدير القياسية](../personal/import-export.md) لتصدير أو استيراد أنماط العرض. إذا أنشأت حزمة `.osf`، فإنها تعمل كإضافة يمكنك مشاركتها مع الآخرين.
- بعد التثبيت، يمكنك اختيار نمط الخريطة من القائمة.

يمكنك أيضًا تصفح أمثلة على أنماط الخرائط المخصصة التي أنشأها مستخدمون آخرون. يتم توفير قائمة بأنماط المجتمع المتاحة علنًا [هنا](../troubleshooting/resources.md#map-styles).


## المقالات ذات الصلة {#related-articles}

- [تكوين الخريطة](../map/configure-map-menu.md)
- [الخرائط المتجهة](../map/vector-maps.md)
- [الموارد والتخصيصات](../troubleshooting/resources.md)