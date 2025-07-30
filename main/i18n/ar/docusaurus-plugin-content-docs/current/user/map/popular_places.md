---
source-hash: 0c3b5e8e7cf6ef6e151b2af4c26f3e274170841399bcaf73871ab607bf13fd43
sidebar_position: 8
title: أماكن شهيرة
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

تُبرز ميزة **الأماكن الشهيرة** في OsmAnd المعالم ومناطق الجذب البارزة باستخدام بيانات مفتوحة ومنظمة من [Wikidata](https://www.wikidata.org) و[Wikipedia](https://www.wikipedia.org/). وتساعد المستخدمين على استكشاف الوجهات المعروفة بوصف متعدد اللغات وصور.

يرتبط كل مكان مشمول في هذه الميزة بـ **معرف Wikidata**، مما يمكّن OsmAnd من عرض أسماء وصور معاينة وروابط إلى مقالات ويكيبيديا تم التحقق منها. لا تعرض هذه الأداة جميع نقاط OpenStreetMap (OSM). وهي تقتصر على نقاط الاهتمام (POIs) التي تحتوي على مراجع Wikidata.

حاليًا، تتضمن قاعدة البيانات المنسقة ما يقرب من **50,000 إلى 150,000 مكان من الأماكن الأعلى تقييمًا** عالميًا، تم اختيارها من أكثر من **مليون** كائن Wikidata + OSM.

:::note
*هذه هي النسخة الأولى من ميزة الأماكن الشهيرة. نرحب بالملاحظات على [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أماكن شهيرة](@site/static/img/map/popular_places/popular_places.png) ![أماكن شهيرة](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### مصادر البيانات

تعتمد **الأماكن الشهيرة** على محتوى منظم من [Wikidata](https://www.wikidata.org) و[Wikipedia](https://www.wikipedia.org/).

يتم عرض نقاط الاهتمام (POIs) التي تحتوي على **معرف Wikidata** فقط. تربط هذه المعرفات كائنات الخريطة بالأسماء والأوصاف والصور التي تم التحقق منها.

يمكنك عرض رابط Wikidata مباشرة في [قائمة سياق الخريطة](../map/map-context-menu.md). يؤدي النقر على علامة Wikidata إلى فتح صفحة الكائن الكاملة على موقع Wikidata.

تعرف على كيفية العثور على معرف Wikidata: [ويكيبيديا: العثور على معرف Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## كيفية الاستخدام {#how-to-use}

<InfoAndroidOnly/>

تتضمن ميزة **الأماكن الشهيرة** كلاً من قائمة منسقة بالمعالم القريبة وطبقة من نقاط الاهتمام المستندة إلى ويكيبيديا على الخريطة.

هناك طريقتان رئيسيتان للوصول إلى هذه الميزة:

- **النسخة المجانية**
  الوصول عبر [البحث](#explore-in-search) لاستكشاف الأماكن القريبة في عرض القائمة.
  *<Translate android="true" ids="android_button_seq"/>*. اذهب إلى: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **النسخ المدفوعة** *(Maps+ وOsmAnd Pro)*
  تمكين التراكب المرئي في [تكوين الخريطة](#enable-layer).
  *<Translate android="true" ids="android_button_seq"/>*. اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

  في هذا الوضع، تظهر نقاط الاهتمام الشهيرة مباشرة على الخريطة مع معاينات مصغرة ومحتوى ويكيبيديا.

  يمكنك التبديل بين مصادر ويكيبيديا **المتصلة بالإنترنت** و**غير المتصلة بالإنترنت** في إعدادات التراكب. تعرف على المزيد في [تمكين الطبقة](#enable-layer).


## استكشاف في البحث {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![وضع الاستكشاف](@site/static/img/map/popular_places/popular_places_search.png)
![وضع الاستكشاف](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

يعرض قسم **<Translate android="true" ids="popular_places_nearby"/>** قائمة قابلة للتمرير لأهم المعالم القريبة من موقعك الحالي. يتضمن كل عنصر:

- اسم المكان.
- وصف قصير.
- علامة فئة نقطة الاهتمام.
- المسافة والاتجاه.
- صورة مصغرة (إذا كانت متوفرة).

انقر على **إظهار الكل** لعرض القائمة الكاملة، أو **إظهار على الخريطة** لعرض جميع نقاط الاهتمام المدرجة على الخريطة.

يؤدي النقر على أي مكان إلى فتح [قائمة سياق نقطة الاهتمام](./map-context-menu.md)، حيث يمكنك معاينة الصور والوصول إلى [محتوى ويكيبيديا](../plugins/wikipedia.md) ذي الصلة.

:::tip
يعمل وضع الاستكشاف القائم على البحث **عبر الإنترنت فقط** في النسخة المجانية.
لاستخدامه **دون اتصال بالإنترنت**، تحتاج إلى اشتراك [Maps+ أو OsmAnd Pro](../purchases/android.md) وخرائط [ويكيبيديا](../plugins/wikipedia.md) التي تم تنزيلها.
:::


## تمكين الطبقة {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

**<Translate android="true" ids="android_button_seq"/>**. اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![قائمة الأماكن الشهيرة](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

تتوفر ميزة **الأماكن الشهيرة (ويكيبيديا)** في [قائمة تكوين الخريطة](./configure-map-menu.md). لعرض الأماكن الشهيرة مباشرة على الخريطة، قم بتمكين طبقة نقاط الاهتمام (POI) مع بيانات من ويكيبيديا باستخدام صور Wikidata.

قبل استخدام هذه الميزة:

- تأكد من تمكين [مكون ويكيبيديا الإضافي](../plugins/wikipedia.md).
- قم بتنزيل بيانات ويكيبيديا لمنطقتك إذا كنت ترغب في استخدامها دون اتصال بالإنترنت.

### خيارات الطبقة

بمجرد التمكين، تصبح الخيارات التالية متاحة:

- **<Translate android="true" ids="poi_osmwiki"/>** – تبديل نقاط اهتمام ويكيبيديا على الخريطة.

- **مصدر نقطة الاهتمام** – التبديل بين:
  - *وضع عدم الاتصال* (يجب تنزيل مقالات ويكيبيديا).
  - *وضع الاتصال فقط* (يستخدم البيانات والصور المباشرة).

- **<Translate android="true" ids="shared_string_language"/>** – تحديد اللغة لأوصاف ويكيبيديا.

- **<Translate android="true" ids="show_image_previews"/>** – إظهار الصور المصغرة من Wikidata بجوار نقاط الاهتمام.

يؤدي النقر على نقطة اهتمام على الخريطة إلى فتح [قائمة سياق نقطة الاهتمام](./map-context-menu.md)، حيث يمكنك عرض [الصور عبر الإنترنت](#online-photos) والوصول إلى [مقالات ويكيبيديا](../plugins/wikipedia.md) المرتبطة.


## الصور عبر الإنترنت {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق الصور عبر الإنترنت أندرويد](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق الصور عبر الإنترنت iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

هذا قسم ضمن [قائمة سياق نقطة الاهتمام](./map-context-menu.md) يعرض معاينة صور للمكان الشهير (ويكيبيديا) المحدد. يمكنك التمرير أفقيًا لتصفح الصور المتاحة، أو النقر على أي صورة لفتحها في [وضع ملء الشاشة](#gallery).

تعرف على المزيد حول الخيارات الإضافية في قسم [الإجراءات](#actions) و[المعرض](#gallery).


<!--

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### الإجراءات {#actions}

في قائمة سياق الخريطة كيفية الوصول:

- انقر على زر **إظهار الكل** (أندرويد) / **عرض الكل** (iOS) لفتح [المعرض](#gallery) في وضع ملء الشاشة، حيث يمكنك التمرير عبر جميع الصور المتاحة للموقع المحدد.

- انقر على أي صورة لعرضها في [وضع ملء الشاشة](#gallery) والوصول إلى الإجراءات المتاحة:
  **مشاركة**، **تفاصيل**، **فتح في المتصفح**، و**تنزيل**.


### المعرض {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة المعرض - أندرويد](@site/static/img/map/gallery_menu_android.png)
![قائمة المعرض - أندرويد](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المعرض - iOS](@site/static/img/map/gallery_menu_ios.png)
![قائمة المعرض - iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


يمكن لـ **قائمة المعرض** عرض ما يصل إلى **100 صورة** متعلقة بنقطة الاهتمام المحددة. يمكنك التمرير عبر جميع الصور المتاحة. يؤدي النقر على صورة إلى فتح عرض تفصيلي يظهر: *الاسم*، *تاريخ الإضافة*، *المؤلف*، *الترخيص*.

يمكنك أيضًا تنفيذ الإجراءات التالية على كل صورة:

- **مشاركة**
  شارك الصورة المحددة باستخدام أي تطبيق متوافق مثبت على جهازك (مثل المراسلة، البريد الإلكتروني، أو وسائل التواصل الاجتماعي). يتضمن المحتوى المشترك الصورة ورابط مصدرها (إذا كان متاحًا).

- **تفاصيل**
  افتح عرضًا تفصيليًا يظهر بيانات تعريف حول الصورة، بما في ذلك: *الاسم*، *تاريخ الإضافة*، *المؤلف*، *الترخيص*، *المصدر*، و*الرابط المباشر*.

- **فتح في المتصفح**
  قم بتشغيل صفحة مصدر الصورة (عادةً على [Wikimedia Commons](https://commons.wikimedia.org/)) في متصفحك الافتراضي. يتيح لك ذلك عرض الصورة بالكامل، ومعلومات الترخيص، والمحتوى ذي الصلة.

- **تنزيل**
  احفظ الصورة في مساحة تخزين جهازك. يمكن العثور على الصورة التي تم تنزيلها في مجلد التنزيلات الافتراضي لجهازك والوصول إليها دون اتصال بالإنترنت.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

لا يتضمن إصدار أندرويد قائمة إضافية لإجراءات الصور.

</TabItem>

<TabItem value="ios" label="iOS">

![iOS - خيارات قائمة السياق](@site/static/img/map/gallery_menu_ios_3.png)

على **iOS**، يؤدي الضغط المطول على الصورة إلى فتح قائمة سياق مع إجراءات إضافية:

- **تفاصيل**
- **فتح في المتصفح**
- **تنزيل**

**الأزرار**:

- يتيح لك زر **المشاركة** مشاركة الصورة المحددة بسرعة.
- يوفر زر **النقاط الثلاث** الوصول إلى إجراءات إضافية، بما في ذلك عرض التفاصيل، وفتح المصدر في المتصفح، أو تنزيل الصورة.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أندرويد - عرض التفاصيل](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS - عرض التفاصيل](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

توفر شاشة **التفاصيل** بيانات تعريف كاملة للصورة المحددة، بما في ذلك: *الاسم*، *تاريخ الإضافة*، *المؤلف*، *الترخيص*، *المصدر*، و*الرابط المباشر*.


## مقالات ذات صلة

- [قائمة سياق الخريطة](./map-context-menu.md)
- [تكوين الخريطة](./configure-map-menu.md)
- [البحث عن نقطة اهتمام](../search/search-poi.md)
- [مكون ويكيبيديا الإضافي](../plugins/wikipedia.md)


> *آخر تحديث: يوليو 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png) ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

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

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png) ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

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