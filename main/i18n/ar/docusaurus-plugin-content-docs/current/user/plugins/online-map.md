---
source-hash: 1b9d749ebb8730c64d4b1fceddc86003dfc6c14c7f5e556129e21a75f245cdc3
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

تُعد خرائط OsmAnd عبر الإنترنت إضافة شاملة لقاعدة بيانات OpenStreetMap الموجودة بالفعل في التطبيق. باستخدام هذه الإضافة، يمكنك إضافة طبقات إلى خريطتك بمعلومات من مصدر مختلف، بدءًا من عرض القمر الصناعي أو مسارات المشي لمسافات طويلة وانتهاءً ببيانات محددة جدًا، مثل موقع صنابير إطفاء الحرائق. يمكنك أيضًا تغيير المصدر الرئيسي للخريطة من خرائط المتجهات إلى مربعات الإنترنت.


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم تمكين القدرة على استخدام خرائط الإنترنت تلقائيًا في إصدار iOS من OsmAnd. لعرض خرائط الإنترنت في Android، تحتاج إلى إجراء الإعدادات التالية:

1. [تمكين](../plugins/index.md#enable--disable) إضافة **الخرائط عبر الإنترنت** في *القائمة الرئيسية ← الإضافات ← الخرائط عبر الإنترنت*.
2. قم بإجراء الإعدادات اللازمة في قسم [مصدر الخريطة](../map/raster-maps.md#select-raster-maps) من قائمة تهيئة الخريطة.
3. قم بتعيين *مصدر الخريطة* و*الطبقة العلوية* و*الطبقة السفلية*. حدد مزود خريطة القمر الصناعي المفضل لديك.
4. قم بتنزيل [خريطة الإنترنت](#how-to-prepare-raster-maps) المحددة إذا لزم الأمر.


## استخدام خرائط Raster على الجهاز {#use-raster-maps-on-device}

يمكنك العثور على معلومات مفصلة حول تصور خرائط Raster وتخصيصها في مقالة [خرائط Raster](../map/raster-maps.md). كيفية الاستخدام:

1. [حدد](../map/raster-maps.md#select-raster-maps) خريطة Raster كطبقة *رئيسية* أو *سفلية* أو *علوية*.
    - [تغيير](../map/raster-maps.md#how-to-use-raster-maps) معلمات الطبقة (الشفافية).

2. [إعداد / نسخ](../map/raster-maps.md#prepare--copy-raster-maps-to-device) خرائط Raster إلى الجهاز.
    - [إضافة مصدر خريطة Raster جديد عبر الإنترنت](../map/raster-maps.md#add-new-online-raster-map-source)
    - [إضافة Magic URL](../map/raster-maps.md#magic-url-to-install-map-source) لتثبيت مصدر الخريطة.

3. [إدارة](../map/raster-maps.md#manage-raster-maps) خرائط Raster.
    - [تنزيل / تحديث المربعات](../map/raster-maps.md#download--update-tiles).
    - [تغيير](../map/raster-maps.md#change-raster-map-parameters) معلمات خريطة Raster.


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![تهيئة الطبقة السفلية / العلوية أندرويد](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![تهيئة الطبقة السفلية / العلوية iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## كيفية إعداد خرائط Raster {#how-to-prepare-raster-maps}

:::info
المقالة الرئيسية لإعداد الخرائط [اقرأ هنا](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

على الرغم من أن الإضافة تسمى *خرائط الإنترنت*، يمكنك استخدام الخرائط بدون اتصال بالإنترنت أيضًا. ما عليك سوى حفظ أجزاء من الخرائط (غالبًا ما تسمى المربعات) لاستخدامها لاحقًا. للقيام بذلك، قم بتنزيل [أداة Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) محددة تم تطويرها بواسطة فريق OsmAnd.

حدد المنطقة التي تحتاج إلى تنزيلها، وانقر على "تحميل المنطقة مسبقًا"، ثم قم بتعيين أصغر وأكبر مستويات التكبير التي تريد عرضها وتنزيل المربعات.
بالنسبة **لإصدار Android**، يمكنك نسخها إلى مجلد *osmand/tiles/*نوع المربع* في هاتفك. ستحتاج أيضًا إلى فتح *تهيئة الخريطة - خريطة التراكب* واختيار مربعات OsmAnd عبر الإنترنت.

بالنسبة **لإصدار iOS**، يمكنك اختيار ملف SQ Lite في هاتفك (أي تطبيق مراسلة أو Dropbox)، وسيقترح OsmAnd إضافته. ستحتاج أيضًا إلى فتح *الخريطة ← التراكب / الطبقة السفلية أو نوع الخريطة* واختيار مصدر خريطة جديد.

يمكنك قراءة كيفية إضافة ملف SQ Lite في إصدار Android و iOS من OsmAnd في [مشروع Anygis](https://anygis.ru/Web/Html/Osmand_en).


يمكن أن تكون مربعات الإنترنت مفيدة عندما تحتاج فقط إلى جزء صغير من الخريطة أو نوع معين منها لاستخدامه في منطقة محدودة، ولكن لا ترغب في تنزيل المنطقة بأكملها. يمكن أن تكون مفيدة في مواقف لا حصر لها.

![خرائط الإنترنت](@site/static/img/plugins/online-maps/map_creator.jpg)

![خرائط الإنترنت](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

### المشكلات والحلول الشائعة {#common-issues-and-solutions}

1. لا تظهر خرائط الإنترنت في قائمة مصدر الخريطة:  
  
    - تحقق من تمكين إضافة خرائط الإنترنت: *القائمة ← الإضافات ← خرائط الإنترنت*.  
    - تأكد من وجود اتصال إنترنت نشط للوصول إلى صور الأقمار الصناعية.  
    - تحقق مما إذا كانت خريطة الإنترنت المحددة قد تم تنزيلها أو تتطلب [إعدادات إضافية](../map/raster-maps.md#select-raster-maps).

> *آخر تحديث: يناير 2025*