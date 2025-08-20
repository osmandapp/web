---
source-hash: e0f816c2ee06112779d7dbcf8e23176de7256a523ebca82309dd4e8a0dd894d4
sidebar_position: 8
title: الخرائط عبر الإنترنت
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

تُعد خرائط OsmAnd عبر الإنترنت إضافة موسعة لقاعدة بيانات OpenStreetMap الموجودة بالفعل في التطبيق. باستخدام هذه الإضافة، يمكنك إضافة طبقات إلى خريطتك بمعلومات من مصدر مختلف، بدءًا من عرض القمر الصناعي أو مسارات المشي لمسافات طويلة وانتهاءً ببيانات محددة جدًا، مثل موقع صنابير إطفاء الحرائق. يمكنك أيضًا تغيير المصدر الرئيسي للخريطة من خرائط المتجهات إلى مربعات الإنترنت.

## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم تمكين القدرة على استخدام الخرائط عبر الإنترنت تلقائيًا في إصدار iOS من OsmAnd. لعرض الخرائط عبر الإنترنت في Android، تحتاج إلى إجراء الإعدادات التالية:

1. [تمكين](../plugins/index.md#enable--disable) إضافة **الخرائط عبر الإنترنت** في *القائمة الرئيسية ← الإضافات ← الخرائط عبر الإنترنت*.
2. قم بإجراء الإعدادات اللازمة في قسم [مصدر الخريطة](../map/raster-maps.md#select-raster-maps) من قائمة تهيئة الخريطة.
3. قم بتعيين *مصدر الخريطة* و*التراكب* و*الطبقة السفلية*. اختر مزود خريطة القمر الصناعي المفضل لديك.
4. قم بتنزيل [الخريطة عبر الإنترنت](#how-to-prepare-raster-maps) المحددة إذا لزم الأمر.

## استخدام خرائط الرسوم على الجهاز {#use-raster-maps-on-device}

يمكنك العثور على معلومات مفصلة حول تصور وتخصيص خرائط الرسوم في مقال [خرائط الرسوم](../map/raster-maps.md). كيفية الاستخدام:

1. [حدد](../map/raster-maps.md#select-raster-maps) خريطة الرسوم كطبقة *رئيسية* أو *سفلية* أو *تراكبية*.
    - [تغيير](../map/raster-maps.md#how-to-use-raster-maps) معلمات الطبقة (الشفافية).

2. [إعداد / نسخ](../map/raster-maps.md#prepare--copy-raster-maps-to-device) خرائط الرسوم إلى الجهاز.
    - [إضافة مصدر خريطة رسوم جديد عبر الإنترنت](../map/raster-maps.md#add-new-online-raster-map-source)
    - [إضافة عنوان URL سحري](../map/raster-maps.md#magic-url-to-install-map-source) لتثبيت مصدر الخريطة.

3. [إدارة](../map/raster-maps.md#manage-raster-maps) خرائط الرسوم.
    - [تنزيل / تحديث المربعات](../map/raster-maps.md#download--update-tiles).
    - [تغيير](../map/raster-maps.md#change-raster-map-parameters) معلمات خريطة الرسوم.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![تهيئة الطبقة السفلية / التراكبية أندرويد](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![تهيئة الطبقة السفلية / التراكبية iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>

## كيفية إعداد خرائط الرسوم {#how-to-prepare-raster-maps}

:::info
المقال الرئيسي لإعداد الخرائط [اقرأ هنا](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

على الرغم من أن الإضافة تسمى *الخرائط عبر الإنترنت*، يمكنك استخدام الخرائط بدون اتصال بالإنترنت أيضًا. ما عليك سوى حفظ أجزاء الخرائط (غالبًا ما تسمى المربعات) لاستخدامها لاحقًا. للقيام بذلك، قم بتنزيل [أداة إنشاء الخرائط](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) المحددة التي طورها فريق OsmAnd.

حدد المنطقة التي تحتاج إلى تنزيلها، انقر فوق منطقة التحميل المسبق، ثم اضبط أصغر وأكبر مستويات التكبير التي تريد عرضها وقم بتنزيل المربعات.
بالنسبة **لإصدار Android**، يمكنك نسخها إلى مجلد *osmand/tiles/*نوع المربع** بهاتفك. ستحتاج أيضًا إلى فتح *تهيئة الخريطة - خريطة التراكب* واختيار مربعات OsmAnd عبر الإنترنت.

بالنسبة **لإصدار iOS**، يمكنك اختيار ملف SQ Lite في هاتفك (أي برنامج مراسلة أو دروبوكس)، وسيقترح OsmAnd إضافته. ستحتاج أيضًا إلى فتح *الخريطة ← تراكب / طبقة سفلية أو نوع الخريطة* واختيار مصدر خريطة جديد.

كيفية إضافة ملف SQ Lite في إصدار Android و iOS من OsmAnd يمكنك قراءتها في <a href="https://anygis.ru/Web/Html/Osmand_en">**مشروع Anygis**</a>.

يمكن أن تكون المربعات عبر الإنترنت مفيدة عندما تحتاج فقط إلى جزء صغير من الخريطة أو نوع معين منها لاستخدامه في منطقة محدودة، ولكن لا ترغب في تنزيل المنطقة بأكملها. يمكن أن تكون مفيدة في مواقف لا حصر لها.

![الخرائط عبر الإنترنت](@site/static/img/plugins/online-maps/map_creator.jpg)

![الخرائط عبر الإنترنت](@site/static/img/plugins/online-maps/map_creator_menu.jpg)

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

1. لا تظهر الخرائط عبر الإنترنت في قائمة مصدر الخريطة:

    - تحقق من تمكين إضافة الخرائط عبر الإنترنت: *القائمة ← الإضافات ← الخرائط عبر الإنترنت*.
    - تأكد من أن لديك اتصال إنترنت نشط للوصول إلى صور الأقمار الصناعية.
    - تحقق مما إذا كانت الخريطة عبر الإنترنت المحددة قد تم تنزيلها أو تتطلب [إعدادات إضافية](../map/raster-maps.md#select-raster-maps).

> *آخر تحديث: يناير 2025*