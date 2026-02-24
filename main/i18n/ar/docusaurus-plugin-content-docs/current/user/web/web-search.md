---
source-hash: 2e0a5fa2c857bd1f645b87829366ac406aa9c831ab1d5bfdb411493a1aafe1a3
sidebar_position: 10
sidebar_label:  البحث
title: البحث على الموقع الإلكتروني
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

<!--
<InfoIncompleteArticle/>
-->


## نظرة عامة {#overview}

يمكن الوصول إلى **قائمة البحث** من اللوحة الجانبية أو من أيقونة البحث 🔍 على الخريطة. تحتوي على:

- [شريط البحث](#search-bar). أدخل الكلمات الرئيسية للبحث عن مواقع محددة أو نقاط اهتمام.  
- [قسم الفئات](#categories). تصفح الخيارات المصنفة لتسهيل عمليات البحث عن نقاط الاهتمام.  
- [قسم الاستكشاف](#explore). عرض نقاط الاهتمام الشائعة لمركز الخريطة الحالي واكتشاف الأماكن مع الصور على الخريطة.

![قائمة البحث](@site/static/img/web/search.png)

## خيارات البحث {#search-options}

### شريط البحث {#search-bar}

استخدم **شريط البحث** للعثور على أماكن محددة أو نقاط اهتمام بالاسم. انقر على أيقونة البحث، أدخل استعلامك، وحدد نتيجة من القائمة. يؤدي تحديد نقطة اهتمام إلى فتح [قائمة سياق نقطة الاهتمام](#poi-context-menu)، حيث يمكنك عرض التفاصيل واستخدام الإجراءات السريعة.

إذا بحثت باسم فئة، قد تعرض النتيجة الأولى فئة نقطة الاهتمام المقابلة. انقر على الفئة لفتح عرض [بحث الفئات](#categories).

![خيارات البحث](@site/static/img/web/search_bar.png)

### الفئات {#categories}

استخدم **الفئات** لتصفح نقاط الاهتمام حسب النوع وعرضها على الخريطة. تعرض القائمة ٦ فئات شائعة للوصول السريع. إذا كنت بحاجة إلى خيارات إضافية، انقر على عرض الكل لفتح القائمة الكاملة من ١٨ فئة متاحة. يؤدي تحديد فئة إلى عرض نقاط الاهتمام المطابقة على الخريطة؛ يؤدي تحديد نقطة اهتمام إلى فتح [قائمة سياق نقطة الاهتمام](#poi-context-menu).

![خيارات البحث](@site/static/img/web/search_categories.png)

### الاستكشاف {#explore}

يعرض قسم **الاستكشاف** [الأماكن الشائعة](https://osmand.net/docs/user/map/popular_places) مع الصور مباشرة على الخريطة. يبني قائمة بنقاط الاهتمام لمركز الخريطة الحالي (مرتبة حسب الشعبية) ويعرض نفس الأماكن كعلامات صور على الخريطة. تعتمد صور المعاينة ومعلومات نقطة الاهتمام على Wikidata/Wikimedia والمصادر ذات الصلة عند التوفر.

افتح علامة تبويب البحث للوصول إلى الاستكشاف — يتم عرض نتائج الاستكشاف على الخريطة تلقائيًا. استخدم عرض الكل لفتح قائمة فئات الاستكشاف الكاملة. يمكنك تحسين ما يظهر في القائمة وعلى الخريطة باستخدام التصفية، والتي تفتح قائمة فئات الاستكشاف. يؤدي تحديد نقطة اهتمام من القائمة أو على الخريطة إلى فتح [قائمة سياق نقطة الاهتمام](#poi-context-menu).

![خيارات البحث](@site/static/img/web/search_explore.png) ![خيارات البحث](@site/static/img/web/explore_filters.png)

## قائمة سياق نقطة الاهتمام {#poi-context-menu}

بغض النظر عن خيار البحث الذي تستخدمه (شريط البحث، أو الفئات، أو الاستكشاف)، يؤدي تحديد نقطة اهتمام على الخريطة أو في قائمة النتائج إلى فتح قائمة سياق نقطة الاهتمام. تعد قائمة السياق المكان الرئيسي لعرض معلومات نقطة الاهتمام وتنفيذ الإجراءات الشائعة. تجمع بين تفاصيل نقطة الاهتمام (مثل الموقع والبيانات ذات الصلة) مع الإجراءات السريعة (على سبيل المثال، الحفظ، أو المشاركة، أو بدء التنقل).

### تفاصيل نقطة الاهتمام {#poi-details}

تعرض **قائمة سياق نقطة الاهتمام** معلومات رئيسية حول المكان المحدد وتوفر روابط بناءً على بيانات OSM وWikimedia/Wikidata المتاحة:
- **الاسم والأيقونة** — يعرض اسم نقطة الاهتمام وأيقونتها.
- **المسافة والاتجاه** — يعرض المسافة والاتجاه إلى نقطة الاهتمام.
- **الموقع** — يعرض إحداثيات نقطة الاهتمام.
- **ساعات العمل** — يعرض ساعات العمل المحللة من [بيانات OSM](https://wiki.openstreetmap.org/wiki/Key:opening_hours). يتم عرض الحالة الحالية ديناميكيًا بناءً على الوقت الحالي (على سبيل المثال، *مفتوح الآن*، *مغلق*، أو *يفتح في 10:00*)، ويتم عرض الجدول الزمني الكامل أدناه.
- **الوصف** — يوفر معلومات إضافية حول نقطة الاهتمام عند التوفر (على سبيل المثال، من ويكيبيديا).
- **الصور عبر الإنترنت** — يعرض صور ويكيميديا المتعلقة بنقطة الاهتمام عند التوفر. حدد عرض الكل لفتح معرض الصور. حدد صورة لفتحها في المعرض (وضع فتح الصورة).
- **بيانات الكائن** — معلومات إضافية عن نقطة الاهتمام، بما في ذلك علامات OSM وتفاصيل أخرى مثل جهات الاتصال، والروابط الاجتماعية، وروابط ويكيبيديا وويكي فوياج، والأوصاف، والنقوش (عند التوفر).
- **معرف OSM** — معرف OpenStreetMap لنقطة الاهتمام.
- **الإحداثيات** — حدد الإحداثيات لنسخها.

![قائمة سياق نقطة الاهتمام](@site/static/img/web/poi_context_menu_new.png)

### إجراءات نقطة الاهتمام {#poi-actions}

تتضمن **قائمة سياق نقطة الاهتمام** أزرار إجراء للمهام الشائعة. استخدم هذه الإجراءات السريعة لحفظ مكان، أو مشاركته، أو بدء تخطيط الطريق والتنقل:
- **إضافة إلى المفضلة** — يحفظ نقطة الاهتمام في [المفضلة](../web/web-favorites.md#add--edit-favorite).
- **المشاركة** — يولد رابطًا قابلًا للمشاركة يفتح نقطة الاهتمام مباشرة في OsmAnd Web. يتضمن الرابط اسم نقطة الاهتمام، والنوع، والإحداثيات (دبوس).
- **الاتجاهات من** — يحدد نقطة الاهتمام المحددة كنقطة البداية ويفتح لوحة الطريق حتى تتمكن من اختيار الوجهة والملف الشخصي.
- **التنقل** — يحدد نقطة الاهتمام المحددة كنقطة الوجهة لـ [التنقل](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### معرض الصور {#photo-gallery}

انقر على ***عرض الكل*** في قسم **الصور عبر الإنترنت** من قائمة سياق نقطة الاهتمام لفتح *معرض الصور* لنقطة الاهتمام المحددة. يسمح المعرض لك بالتصفح عبر جميع الصور المتاحة. انقر على صورة لفتحها في عرض أكبر (وضع فتح الصورة). استخدم الرجوع للعودة إلى قائمة سياق نقطة الاهتمام.

تشمل تفاصيل الصورة:
- **التاريخ**. تاريخ التقاط الصورة أو تحميلها.  
- **المؤلف**. اسم مؤلف الصورة.  
- **معلومات الترخيص**. تفاصيل حول حقوق استخدام الصورة.  
- **الوصف**. معلومات إضافية حول الصورة.

![معرض الصور](@site/static/img/web/poi_photo.png)


## المقالات ذات الصلة {#related-articles}

- [البحث عن الكل](../search/search-all.md)
- [البحث عن نقاط الاهتمام](../search/search-poi.md)
- [الخريطة](../web/web-map.md)