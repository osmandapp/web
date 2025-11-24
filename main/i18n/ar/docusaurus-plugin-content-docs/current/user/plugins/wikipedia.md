---
source-hash: 7d67934d45ebb7643ba52ee95d1baff1f7670e11a70a93f7bacdd0b795953fd8
sidebar_position: 18
title:  ويكيبيديا
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



## نظرة عامة {#overview}

:::info ميزة مدفوعة
إضافة ويكيبيديا هي [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.  
:::

وجود ويكيبيديا في رحلتك يساعدك على معرفة المزيد عن الأماكن التي تزورها. وهي متاحة دون اتصال بالإنترنت وتعرض الأماكن المشهورة (Android) / مقالات ويكيبيديا (iOS) المتعلقة بنقاط الاهتمام مباشرة على الخريطة.  

إضافة ويكيبيديا هي ميزة منفصلة يمكن تمكينها/تعطيلها حسب الحاجة. بمجرد تمكينها، تسمح لك بتحميل بيانات ويكيبيديا [التي تم تنزيلها](../personal/maps-resources#downloads-menu) لكل منطقة جغرافية. تحتوي الخريطة على نوعين من المعرفة المحملة من ويكيبيديا: معلومات موجزة ومقالة كاملة.  


يتم توفير معلومات موجزة بواسطة نقاط اهتمام ويكيبيديا (اختصار لـ "[نقطة اهتمام](../map/point-layers-on-map.md)"). إذا تم تفعيل خيار ويكيبيديا في القائمة، تظهر نقطة اهتمام ويكيبيديا على الخريطة. عند النقر على نقطة اهتمام، تتوسع لتقديم معلومات موجزة من ويكيبيديا، بالإضافة إلى إمكانية فتح مقالة كاملة. تتوفر نقطة اهتمام ويكيبيديا، بالإضافة إلى المقالات ذات الصلة، دون اتصال بالإنترنت. يمكنك قراءتها حسب الحاجة، وتبديل اللغات، والبحث عن معلومات أخرى على ويكيبيديا.  


[ويكيبيديا](https://en.wikipedia.org/wiki/Wikipedia) هي موسوعة حرة متعددة اللغات تعاونية مفتوحة على الإنترنت، تم إنشاؤها وصيانتها بواسطة مجتمع من المحررين المتطوعين باستخدام نظام تحرير قائم على الويكي.  

&nbsp;  
![ويكيبيديا](@site/static/img/map/map-wikipedia.png)


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لعرض بيانات ويكيبيديا على الخريطة، تحتاج إلى إجراء الإعدادات التالية:

1. [شراء](../plugins/index.md#purchase) و[تمكين](../plugins/index.md#enable--disable) إضافة ويكيبيديا في قسم الإضافات من *القائمة الرئيسية*.
2. تنزيل [حزم ويكيبيديا](#download-wikipedia-packages) للمناطق المطلوبة.  
3. عرض [نقاط اهتمام ويكيبيديا](#display-wikipedia-on-the-map) على الخريطة للملف الشخصي المطلوب.  
4. تكوين اللغات [المفضلة](#set-preferred-language) لقراءة المقالات.


## تنزيل حزم ويكيبيديا {#download-wikipedia-packages}

تتوفر بيانات ويكيبيديا لكل منطقة جغرافية. إذا تم تحميلها لمنطقة ما ولم يتم تحميلها لمنطقة أخرى، في الحالة الأولى يمكنك العمل بمعلومات ويكيبيديا عند عرض المنطقة على الخريطة، وفي الحالة الأخرى، لن تحتوي المنطقة على أي معلومات من ويكيبيديا. بمجرد تحميلها، تصبح بيانات ويكيبيديا متاحة بشكل عام، وكذلك دون اتصال بالإنترنت.

لتنزيل بيانات ويكيبيديا لمنطقة ما، انتقل إلى [الحزم المتاحة للتنزيل في *القائمة الرئيسية*](../start-with/download-maps.md#downloading-maps)، وابحث عن المنطقة المطلوبة، وافتحها. ستكون بيانات ويكيبيديا من بين الحزم الأخرى.

يمكنك فتح بيانات ويكيبيديا لتنزيلها حسب المنطقة كما يلي:

1. **Android**. اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. حدد المنطقة المطلوبة. بمجرد فتح المنطقة، ستكون بيانات ويكيبيديا من بين الحزم الأخرى.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

لمعرفة البيانات التي تم تحميلها بالفعل، انتقل إلى *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![تنزيل ويكيبيديا في أندرويد](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

لمعرفة البيانات التي تم تحميلها بالفعل، انتقل إلى *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![تنزيل ويكيبيديا في iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## عرض ويكيبيديا على الخريطة {#display-wikipedia-on-the-map}

عن طريق تحميل بيانات ويكيبيديا للمناطق المطلوبة، يمكنك التحكم في رؤية تلك البيانات على الخريطة. يتم التحكم في الرؤية بواسطة [الأماكن المشهورة (ويكيبيديا)](../map/point-layers-on-map.md#-wikipedia) **لنظام Android** / [نقاط اهتمام ويكيبيديا](../map/point-layers-on-map.md#-wikipedia) **لنظام iOS**، والتي يمكن إظهارها أو إخفاؤها لجميع المناطق المحملة بواسطة [ملف شخصي](../personal/profiles.md) معين، على سبيل المثال، ملف شخصي للقيادة، وملف شخصي لركوب الدراجات، وملف شخصي آخر لإظهار وسائل النقل العام، وغيرها.  

لإظهار أو إخفاء نقاط اهتمام ويكيبيديا، حدد أولاً ملفًا شخصيًا ثم قم بتشغيل/إيقاف خيار **ويكيبيديا**.

لإظهار/إخفاء نقاط اهتمام ويكيبيديا، قم بما يلي:

1. اذهب إلى: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. حدد ملفًا شخصيًا، وابحث عن قسم الإعدادات *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* في القائمة.  
3. قم بتفعيل  *<Translate android="true" ids="poi_osmwiki"/>* **لنظام Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **لنظام iOS**.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![نقاط اهتمام ويكيبيديا على أندرويد](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نقطة اهتمام ويكيبيديا على iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## البحث في ويكيبيديا {#search-wikipedia}

مع بيانات ويكيبيديا المحملة، بغض النظر عن وضع رؤية [نقاط اهتمام ويكيبيديا](../map/point-layers-on-map.md#-wikipedia) على الخريطة، من الممكن [البحث](../search/search-poi.md) عن أي معلومات من ويكيبيديا.

عند النقر على زر البحث، تظهر لوحة إضافية تتيح لك [البحث](../search/index.md) في النص بأكمله و/أو فئة معينة. في الحالة الأولى، ستظهر نتائج البحث نقاط اهتمام ويكيبيديا مع مقالات ويكيبيديا المقابلة من بين أنواع أخرى من المعلومات. في حالة [البحث في فئة ويكيبيديا](../search/search-poi.md#poi-search-by-categories)، ستظهر نتائج البحث معلومات ويكيبيديا فقط، مرتبة حسب أقرب موقع إلى منطقة الخريطة المعروضة حاليًا على الشاشة.  

- في إصدار **Android**، يمكنك فتح [البحث](../search/index.md) عن طريق النقر على *أيقونة البحث* في الزاوية العلوية اليسرى من الشاشة و/أو النقر على *خيار البحث* في القائمة.
- في إصدار **iOS**، لفتح [البحث](../search/index.md)، توجد أيقونة البحث في الزاوية العلوية اليسرى من الشاشة.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- للبحث حسب [فئة](../search/search-poi.md#poi-search-by-categories) ويكيبيديا، حدد: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![فئة ويكيبيديا على أندرويد](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![فئة ويكيبيديا على iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- إذا لزم الأمر، انقر على خيار **إظهار ويكيبيديا على الخريطة** في الجزء العلوي من لوحة البحث وستظهر نتائج البحث من فئة ويكيبيديا على الخريطة.  


## مقالة ويكيبيديا {#wikipedia-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

لفتح مقالة ويكيبيديا:

1. قم بتمكين [طبقة نقاط اهتمام ويكيبيديا](../map/point-layers-on-map.md#-wikipedia) لملف شخصي محدد.
2. انقر على نقطة الاهتمام على الخريطة.
3. في [القائمة السياقية](../map/map-context-menu.md) لنقطة الاهتمام انقر على [التفاصيل](../map/map-context-menu.md#details) (أو ببساطة اسحب *القائمة السياقية* لأعلى) لعرض ملخص لـ [مقالة ويكيبيديا المختارة](../map/map-context-menu.md#article-description).
4. استخدم زر *قراءة المقالة كاملة* لفتح النسخة الكاملة من مقالة ويكيبيديا.
5. إذا لم يتم تنزيل بيانات ويكيبيديا، يظهر زر *قراءة على ويكيبيديا*.
6. النقر على هذا الزر يفتح حوارًا مع الخيارات التالية: 
- تنزيل ويكيبيديا وفتح في المتصفح (النسخة المدفوعة).
- قراءة ويكيبيديا دون اتصال وفتح في المتصفح (النسخة المجانية).

![نقطة اهتمام ويكيبيديا الفرنسية باللغة الإنجليزية](@site/static/img/plugins/wikipedia/wikipedia_article_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

لفتح مقالة ويكيبيديا:

1. قم بتمكين [طبقة نقاط اهتمام ويكيبيديا](../map/point-layers-on-map.md#-wikipedia) لملف شخصي محدد.
2. انقر على نقطة الاهتمام على الخريطة.
3. في [القائمة السياقية](../map/map-context-menu.md) لنقطة الاهتمام انقر على [التفاصيل](../map/map-context-menu.md#details) (أو ببساطة اسحب *القائمة السياقية* لأعلى) لعرض ملخص لـ [مقالة ويكيبيديا المختارة](../map/map-context-menu.md#article-description).
4. إذا نقرت على هذا النص، فسيتم إعادة توجيهك إلى مقالة ويكيبيديا غير المتصلة بالإنترنت.
5. استخدم زر *قراءة المقالة* لفتح النسخة الكاملة من مقالة ويكيبيديا.

![نقطة اهتمام ويكيبيديا الفرنسية باللغة الإنجليزية في iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## إعدادات ويكيبيديا {#wikipedia-settings}

يمكنك [تعيين اللغة (اللغات)](#set-preferred-language) التي تفضل قراءة [المقالات](#wikipedia-article) بها وكذلك تكوين [خيارات تنزيل الصور](#download-images) لكل [ملف شخصي](../personal/profiles.md).

### تعيين اللغة المفضلة {#set-preferred-language}

في إصداري **Android** و **iOS** من تطبيق OsmAnd، يمكنك تعيين لغتك المفضلة (أو لغات) لعرض مقالات ويكيبيديا باستخدام قائمة *تكوين الخريطة*. إذا حددت أكثر من لغة واحدة، فسيتم عرض مقالات *ويكيبيديا* على الخريطة بأي منها. اذهب إلى:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. حدد الملف الشخصي المطلوب وفي قسم *<Translate android="true" ids="shared_string_show"/>* اختر *<Translate android="true" ids="poi_osmwiki"/>* لنظام Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* لنظام iOS.  
3. عطّل خيار *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. حدد لغة (لغات) معينة في القائمة المفتوحة.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تعيين لغة مفضلة على أندرويد](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تعيين لغة مفضلة على iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
في إصدار **iOS**، يمكنك أيضًا تعيين اللغة المفضلة لمقالات ويكيبيديا باستخدام:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### تبديل اللغات داخل المقالة {#switch-languages-inside-the-article}

في حال توفر *مقالة ويكيبيديا* بلغات مختلفة، يمكنك تبديل اللغة أثناء القراءة. بعد النقر على الأيقونة المقابلة في الزاوية العلوية اليمنى من الشاشة، سيتم عرض خيارات للاختيار من بينها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تبديل اللغات لمقالة معينة](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![تبديل اللغات لمقالة معينة](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### تنزيل الصور {#download-images}

يمكنك اختيار ما إذا كنت تريد تنزيل الصور من ويكيبيديا على جهازك أم لا داخل *مقالة ويكيبيديا*:

- **Android**. افتح *[مقالة ويكيبيديا](#display-wikipedia-on-the-map) → &#8942; → خيارات*
- **iOS**. افتح *[مقالة ويكيبيديا](#display-wikipedia-on-the-map) → أيقونة الصورة*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تبديل الصور](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![تبديل الصور](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

في إصدار **iOS** من التطبيق، يمكنك أيضًا الوصول إلى خيارات تنزيل الصور باستخدام *إعدادات إضافة ويكيبيديا*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![تبديل الصور](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)