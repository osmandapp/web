---
source-hash: 4cb7c9084c7789ea96d9afde0dedc4fd456fd2ec20405b46d983a36f733ea01e
sidebar_position: 8
title:  الخرائط عبر الإنترنت
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

تُعد خرائط OsmAnd عبر الإنترنت إضافة واسعة لقاعدة بيانات OpenStreetMap الموجودة بالفعل في التطبيق. باستخدام هذه الإضافة، يمكنك إضافة طبقات إلى خريطتك بمعلومات من مصدر مختلف، بدءًا من عرض الأقمار الصناعية أو مسارات المشي لمسافات طويلة وانتهاءً ببيانات محددة جدًا، مثل موقع صنابير إطفاء الحرائق. يمكنك أيضًا تغيير المصدر الرئيسي للخريطة من الخرائط المتجهة إلى المربعات عبر الإنترنت.


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم تفعيل إمكانية استخدام الخرائط عبر الإنترنت تلقائيًا في إصدار iOS من OsmAnd. لعرض الخرائط عبر الإنترنت في أندرويد، تحتاج إلى إجراء الإعدادات التالية:

1. [تفعيل](../plugins/index.md#enable--disable) إضافة **الخرائط عبر الإنترنت** في *القائمة الرئيسية ← الإضافات ← الخرائط عبر الإنترنت*.
2. قم بالإعدادات اللازمة في قسم [مصدر الخريطة](../map/raster-maps.md#select-raster-maps) من قائمة تكوين الخريطة.
3. اضبط خريطة *مصدر الخريطة* و*الطبقة العلوية* و*الطبقة السفلية*. اختر مزود خرائط الأقمار الصناعية المفضل لديك.
4. قم بتنزيل [الخريطة عبر الإنترنت](#how-to-prepare-raster-maps) المحددة إذا لزم الأمر.


## استخدام الخرائط النقطية على الجهاز {#use-raster-maps-on-device}

يمكنك العثور على معلومات مفصلة حول تصور وتخصيص الخرائط النقطية في مقال [الخرائط النقطية](../map/raster-maps.md). كيفية الاستخدام:

1. [اختر](../map/raster-maps.md#select-raster-maps) الخريطة النقطية كطبقة *رئيسية* أو *سفلية* أو *علوية*.
    - [تغيير](../map/raster-maps.md#how-to-use-raster-maps) معلمات الطبقة (الشفافية).

2. [تحضير / نسخ](../map/raster-maps.md#preparecopy-raster-maps-to-device) الخرائط النقطية إلى الجهاز.
    - [إضافة مصدر خريطة نقطية جديد عبر الإنترنت](../map/raster-maps.md#add-new-online-raster-map-source)
    - [إضافة رابط سحري](../map/raster-maps.md#magic-url-to-install-map-source) لتثبيت مصدر الخريطة.

3. [إدارة](../map/raster-maps.md#manage-raster-maps) الخرائط النقطية.
    - [تنزيل / تحديث المربعات](../map/raster-maps.md#download--update-tiles).
    - [تغيير](../map/raster-maps.md#change-raster-map-parameters) معلمات الخريطة النقطية.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![تكوين الطبقة السفلية / العلوية في أندرويد](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![تكوين الطبقة السفلية / العلوية في iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## كيفية تحضير الخرائط النقطية {#how-to-prepare-raster-maps}

:::info
المقال الرئيسي لتحضير الخرائط [اقرأ هنا](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

على الرغم من أن الإضافة تسمى *الخرائط عبر الإنترنت*، يمكنك استخدام الخرائط بدون اتصال بالإنترنت أيضًا. كل ما تحتاجه هو حفظ أجزاء من الخرائط (تسمى غالبًا المربعات) لاستخدامها لاحقًا. للقيام بذلك، قم بتنزيل [أداة Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) خاصة طورها فريق OsmAnd.

حدد المنطقة التي تحتاج إلى تنزيلها، انقر على "Preload area"، ثم اضبط أصغر وأكبر مستويات التكبير التي تريد عرضها وقم بتنزيل المربعات.
بالنسبة **لإصدار أندرويد**، يمكنك نسخها إلى مجلد `osmand/tiles/*tile type*` على هاتفك. ستحتاج أيضًا إلى فتح *تكوين الخريطة - الطبقة العلوية* واختيار مربعات OsmAnd عبر الإنترنت.

بالنسبة **لإصدار iOS**، يمكنك اختيار ملف SQ Lite على هاتفك (من أي برنامج مراسلة أو Dropbox)، وسيقترح OsmAnd إضافته. ستحتاج أيضًا إلى فتح *الخريطة ← الطبقة العلوية / السفلية أو نوع الخريطة* واختيار مصدر الخريطة الجديد.

يمكنك قراءة كيفية إضافة ملف SQ Lite في إصداري أندرويد و iOS من OsmAnd في <a href="https://anygis.ru/Web/Html/Osmand_en"><b>مشروع Anygis</b></a>.


يمكن أن تكون المربعات عبر الإنترنت مفيدة عندما تحتاج فقط إلى قسم صغير من الخريطة أو نوع معين منها لاستخدامه في منطقة محدودة، ولكنك لا ترغب في تنزيل المنطقة بأكملها. يمكن أن تكون مفيدة في مواقف لا حصر لها.

![الخرائط عبر الإنترنت](@site/static/img/plugins/online-maps/map_creator.jpg)

![الخرائط عبر الإنترنت](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)

### المشاكل الشائعة والحلول {#common-issues-and-solutions}

1. لا تظهر الخرائط عبر الإنترنت في قائمة مصدر الخريطة:  
  
    - تحقق من تفعيل إضافة الخرائط عبر الإنترنت: *القائمة ← الإضافات ← الخرائط عبر الإنترنت*.  
    - تأكد من وجود اتصال نشط بالإنترنت للوصول إلى صور الأقمار الصناعية.  
    - تحقق مما إذا كانت الخريطة عبر الإنترنت المحددة قد تم تنزيلها أو تتطلب [إعدادات إضافية](../map/raster-maps.md#select-raster-maps).