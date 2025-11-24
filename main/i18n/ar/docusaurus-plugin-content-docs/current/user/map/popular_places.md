---
source-hash: 729e2be1334766fc7bf3aecc088333d8c9184af20c6e90fa4a5b8a7ab28df7b2
sidebar_position: 8
title: الأماكن المشهورة
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## نظرة عامة {#overview}

تسلط ميزة **الأماكن المشهورة** في OsmAnd الضوء على المعالم البارزة ومناطق الجذب السياحي باستخدام بيانات منظمة مفتوحة من [ويكيداتا](https://www.wikidata.org) و[ويكيبيديا](https://www.wikipedia.org/). وهي تساعد المستخدمين على استكشاف الوجهات المعروفة مع أوصاف وصور متعددة اللغات.

كل مكان مدرج في هذه الميزة مرتبط بـ **معرّف ويكيداتا (Wikidata ID)**، مما يمكّن OsmAnd من عرض أسماء موثقة وصور معاينة وروابط لمقالات ويكيبيديا. هذه الأداة **لا** تعرض جميع نقاط خريطة الشارع المفتوحة (OSM). فهي تقتصر على نقاط الاهتمام التي لها مراجع في ويكيداتا.

حاليًا، تتضمن قاعدة البيانات المنسقة ما يقرب من **٥٠٬٠٠٠ إلى ١٥٠٬٠٠٠ من الأماكن الأعلى تقييمًا** على مستوى العالم، تم اختيارها من بين أكثر من **مليون** كائن من ويكيداتا + خريطة الشارع المفتوحة.

:::note
*هذه هي النسخة الأولى من ميزة الأماكن المشهورة. نرحب بآرائكم وملاحظاتكم على [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![الأماكن المشهورة](@site/static/img/map/popular_places/popular_places.png) ![الأماكن المشهورة](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### مصادر البيانات

تعتمد **الأماكن المشهورة** على محتوى منظم من [ويكيداتا](https://www.wikidata.org) و[ويكيبيديا](https://www.wikipedia.org/).

يتم عرض نقاط الاهتمام التي لها **معرّف ويكيداتا (Wikidata ID)** مرتبط فقط. تربط هذه المعرّفات كائنات الخريطة بأسماء وأوصاف وصور موثقة.

يمكنك عرض رابط ويكيداتا مباشرة في [قائمة سياق الخريطة](../map/map-context-menu.md). يؤدي النقر على وسم ويكيداتا إلى فتح صفحة الكائن الكاملة على موقع ويكيداتا.

تعلم كيفية العثور على معرّف ويكيداتا: [ويكيبيديا: العثور على معرّف ويكيداتا](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## كيفية الاستخدام {#how-to-use}

<InfoAndroidOnly/>

تتضمن ميزة **الأماكن المشهورة** قائمة منسقة بالمعالم القريبة وطبقة من نقاط الاهتمام المستندة إلى ويكيبيديا على الخريطة.

هناك طريقتان رئيسيتان للوصول إلى هذه الميزة:

- **النسخة المجانية**  
  يمكنك الوصول إليها عبر [البحث](#explore-in-search) لاستكشاف الأماكن القريبة في عرض القائمة.  
  *<Translate android="true" ids="android_button_seq"/>*. اذهب إلى: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **النسخ المدفوعة** *(Maps+ و OsmAnd Pro)*  
  قم بتمكين الطبقة المرئية في [تخصيص الخريطة](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  في هذا الوضع، تظهر نقاط الاهتمام المشهورة مباشرة على الخريطة مع معاينات مصغرة ومحتوى من ويكيبيديا.

  يمكنك التبديل بين مصادر ويكيبيديا **عبر الإنترنت** و**دون اتصال** في إعدادات الطبقة. تعلم المزيد في [تفعيل الطبقة](#enable-layer).


## الاستكشاف في البحث {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![وضع الاستكشاف](@site/static/img/map/popular_places/popular_places_search.png)  
![وضع الاستكشاف](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

يعرض قسم **<Translate android="true" ids="popular_places_nearby"/>** قائمة قابلة للتمرير لأبرز المعالم الأعلى تقييمًا بالقرب من موقعك الحالي. يتضمن كل عنصر:

- اسم المكان.
- وصف قصير.
- وسم فئة نقطة الاهتمام.
- المسافة والاتجاه.
- صورة مصغرة (إن وجدت).

انقر على **عرض الكل** لعرض القائمة الكاملة، أو **عرض على الخريطة** لعرض جميع نقاط الاهتمام المدرجة على الخريطة.

يؤدي النقر على أي مكان إلى فتح [قائمة سياق نقطة الاهتمام](./map-context-menu.md)، حيث يمكنك معاينة الصور والوصول إلى [محتوى ويكيبيديا](../plugins/wikipedia.md) ذي الصلة.

:::tip
يعمل وضع الاستكشاف القائم على البحث **عبر الإنترنت فقط** في النسخة المجانية.  
لاستخدامه **دون اتصال**، تحتاج إلى اشتراك [Maps+ أو OsmAnd Pro](../purchases/android.md) وتنزيل [خرائط ويكيبيديا](../plugins/wikipedia.md).
:::


## تفعيل الطبقة {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![قائمة الأماكن المشهورة](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

ميزة **الأماكن المشهورة (ويكيبيديا)** متاحة في [قائمة تخصيص الخريطة](./configure-map-menu.md). لعرض الأماكن المشهورة مباشرة على الخريطة، قم بتمكين طبقة نقاط الاهتمام مع بيانات من ويكيبيديا باستخدام صور ويكيداتا.

قبل استخدام هذه الميزة:

- تأكد من تمكين [إضافة ويكيبيديا](../plugins/wikipedia.md).
- قم بتنزيل بيانات ويكيبيديا لمنطقتك إذا كنت ترغب في استخدامها دون اتصال بالإنترنت.

### خيارات الطبقة

بمجرد التمكين، تصبح الخيارات التالية متاحة:

- **<Translate android="true" ids="poi_osmwiki"/>** – تبديل عرض نقاط اهتمام ويكيبيديا على الخريطة.

- **مصدر نقاط الاهتمام** – التبديل بين:
  - *وضع عدم الاتصال* (يجب تنزيل مقالات ويكيبيديا).
  - *وضع الاتصال بالإنترنت فقط* (يستخدم البيانات والصور الحية).

- **<Translate android="true" ids="shared_string_language"/>** – حدد لغة أوصاف ويكيبيديا.

- **<Translate android="true" ids="show_image_previews"/>** – إظهار الصور المصغرة من ويكيداتا بجانب نقاط الاهتمام.

يؤدي النقر على نقطة اهتمام على الخريطة إلى فتح [قائمة سياق نقطة الاهتمام](./map-context-menu.md)، حيث يمكنك عرض [الصور عبر الإنترنت](#online-photos) والوصول إلى [مقالات ويكيبيديا](../plugins/wikipedia.md) المرتبطة.


## الصور عبر الإنترنت {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![قائمة سياق الصور عبر الإنترنت للأندرويد](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة سياق الصور عبر الإنترنت للـ iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

هذا قسم داخل [قائمة سياق نقطة الاهتمام](./map-context-menu.md) يعرض معاينة للصور للمكان المشهور المحدد (ويكيبيديا). يمكنك التمرير أفقيًا لتصفح الصور المتاحة، أو النقر على أي صورة لفتحها في [وضع ملء الشاشة](#gallery).

يتم تخزين الصور المعروضة عبر الإنترنت تلقائيًا في التخزين المؤقت للوصول إليها دون اتصال. تعرض الصور المخزنة في التخزين المؤقت شارة صغيرة تشير إلى عدم الاتصال في الزاوية. يتكيف شبكة المعاينة مع حجم الشاشة على iPadOS وmacOS، مما يضمن تخطيطًا مريحًا للصور على الشاشات الأكبر. كما يتجنب OsmAnd إطلاق طلبات شبكة متكررة عند إغلاق قسم الصور عبر الإنترنت، ويلغي الطلبات السابقة عند التبديل بسرعة بين نقاط الاهتمام المختلفة.

تعرف على المزيد حول الخيارات الإضافية في قسمي [الإجراءات](#actions) و[المعرض](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### الإجراءات {#actions}

في قائمة سياق الخريطة، كيفية الوصول:

- انقر على زر **عرض الكل** (Android) / **View All** (iOS) لفتح [المعرض](#gallery) في وضع ملء الشاشة، حيث يمكنك التمرير عبر جميع الصور المتاحة للموقع المحدد.

- انقر على أي صورة لعرضها في [ملء الشاشة](#gallery) والوصول إلى الإجراءات المتاحة:  
  **مشاركة**، **تفاصيل**، **فتح في المتصفح**، و**تنزيل**.

**ملاحظة:** يحفظ التنزيل الصورة في تخزين الجهاز للاستخدام دون اتصال بشكل دائم، بينما يتم تخزين الصور المؤقتة تلقائيًا وتكون متاحة دون اتصال فقط داخل التطبيق.


### المعرض {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![قائمة المعرض – أندرويد](@site/static/img/map/gallery_menu_android.png)
![قائمة المعرض – أندرويد](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة المعرض – iOS](@site/static/img/map/gallery_menu_ios.png)
![قائمة المعرض – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


يمكن لـ **قائمة المعرض** عرض ما يصل إلى **١٠٠ صورة** تتعلق بنقطة الاهتمام المحددة. يمكنك التمرير عبر جميع الصور المتاحة. يؤدي النقر لفترة وجيزة على صورة ما إلى فتح عرض تفصيلي يوضح: *الاسم*، *تاريخ الإضافة*، *المؤلف*، *الترخيص*.

على iOS وiPadOS وmacOS، يمكنك التنقل بين الصور باستخدام مفاتيح لوحة المفاتيح (←/→ للانتقال بين الصور، Enter/Space للفتح).

يمكنك أيضًا تنفيذ الإجراءات التالية على كل صورة:

- **مشاركة**  
  شارك الصورة المحددة باستخدام أي تطبيق متوافق مثبت على جهازك (مثل تطبيقات المراسلة أو البريد الإلكتروني أو وسائل التواصل الاجتماعي). يتضمن المحتوى المشترك الصورة ورابط مصدرها (إن وجد).

- **تفاصيل**  
  افتح عرضًا تفصيليًا يعرض البيانات الوصفية حول الصورة، بما في ذلك: *الاسم*، *تاريخ الإضافة*، *المؤلف*، *الترخيص*، *المصدر*، و*الرابط المباشر*

- **فتح في المتصفح**  
  شغّل صفحة مصدر الصورة (عادةً على [ويكيميديا كومنز](https://commons.wikimedia.org/)) في متصفحك الافتراضي. يتيح لك هذا عرض الصورة الكاملة ومعلومات الترخيص والمحتوى ذي الصلة.

- **تنزيل**  
  احفظ الصورة في مساحة تخزين جهازك. يمكن العثور على الصورة التي تم تنزيلها في مجلد التنزيلات الافتراضي بجهازك والوصول إليها دون اتصال بالإنترنت.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

لا يتضمن إصدار أندرويد قائمة إضافية لإجراءات الصور.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - خيارات قائمة السياق](@site/static/img/map/gallery_menu_ios_3.png)

في **iOS**، يؤدي الضغط المطول على الصورة إلى فتح قائمة سياق تحتوي على إجراءات إضافية:

- **تفاصيل**  
- **فتح في المتصفح**  
- **تنزيل**

**الأزرار**:

- يتيح لك زر **المشاركة** مشاركة الصورة المحددة بسرعة.  
- توفر **قائمة النقاط الثلاث** الوصول إلى إجراءات إضافية، بما في ذلك عرض التفاصيل أو فتح المصدر في متصفح أو تنزيل الصورة.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![أندرويد – عرض التفاصيل](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – عرض التفاصيل](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

توفر شاشة **التفاصيل** بيانات وصفية كاملة للصورة المحددة، بما في ذلك: *الاسم*، *تاريخ الإضافة*، *المؤلف*، *الترخيص*، *المصدر*، و*الرابط المباشر*


## مقالات ذات صلة

- [قائمة سياق الخريطة](./map-context-menu.md)
- [تخصيص الخريطة](./configure-map-menu.md)
- [البحث عن نقاط الاهتمام](../search/search-poi.md)
- [إضافة ويكيبيديا](../plugins/wikipedia.md)





<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->