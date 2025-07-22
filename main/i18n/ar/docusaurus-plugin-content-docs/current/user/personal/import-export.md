---
source-hash: 449ba8486f8036d2bbad4837dd278ab4b240f56f3282ba8c8550a0e6a1d7cc6b
sidebar_position: 10
title:  استيراد / تصدير
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

تسمح لك أدوات **الاستيراد** و**التصدير** في OsmAnd بإدارة بياناتك. يمكنك نقل ملفات التعريف والمفضلة والمسارات والإعدادات الأخرى باستخدام تنسيق خاص عبر التطبيقات على جهازك. تبسط هذه العملية حفظ ونقل البيانات بين الأجهزة وتسمح لك بمشاركتها مع مستخدمي OsmAnd الآخرين.

:::note حجم كبير
*إذا كان حجم البيانات المحددة كبيرًا، فسيستغرق التطبيق وقتًا لإعداد ملف `.osf`.*
:::


## تصدير / استيراد البيانات {#export--import-data}

يسمح لك *الاستيراد* و*التصدير* بحفظ البيانات من **ملفات** `.osf` التي تم إنشاؤها أو استخدام [مصادر عبر الإنترنت](../map/raster-maps.md)، مما يجعل من الممكن استعادة المعلومات بعد إعادة التثبيت.

**أنواع البيانات** المتاحة للاستيراد/التصدير:

- **الإعدادات:**
        [ملفات التعريف](../personal/profiles.md#actions)، &nbsp;[إعدادات OsmAnd/عامة](../personal/global-settings.md)، &nbsp;[الألوان](../personal/color-palette-schemes.md)، &nbsp;[إجراء سريع](../widgets/quick-action.md)، &nbsp;[نوع POI](../map/point-layers-on-map.md#poi-types)، &nbsp;[تجنب الطريق](../map/map-context-menu.md#avoid-road).
- **أماكني:**
        [المفضلة](../personal/favorites.md#export--import)، &nbsp;[المسارات](../personal/tracks/manage-tracks.md#import--export-track)، &nbsp;[ملاحظات OSM*، *تعديلات OSM](../plugins/osm-editing.md#create--modify-poi)، &nbsp;[ملاحظات صوتية/مرئية](../plugins/audio-video-notes.md)، &nbsp;[علامات الخريطة](../personal/markers.md)، &nbsp;[سجل العلامات*، *سجل البحث*، *سجل التنقل](../personal/global-settings.md#history)، &nbsp;*مسار الرحلة*.
- **الموارد:**
        [نمط العرض](../map/vector-maps.md#custom-map-style)، &nbsp;[التوجيه](../navigation/routing/osmand-routing.md)، &nbsp;[محركات التوجيه عبر الإنترنت](../navigation/routing/online-routing.md)، &nbsp;[مصادر الخرائط*، *خرائط قياسية/غير متصلة بالإنترنت](../map/raster-maps.md)، &nbsp;[خرائط ويكيبيديا والسفر](../plan-route/travel-guides.md)، &nbsp;[خرائط بحرية](../plugins/nautical-charts.md)، &nbsp;[خرائط الطرق](../map/vector-maps.md#road-style)، &nbsp;[خرائط التضاريس](../plugins/topography.md)، &nbsp;[مطالبات صوتية (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech)، [مطالبات صوتية (مسجلة)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts)، &nbsp;[نسخ احتياطي للمفضلة](../personal/favorites.md#automatic-favorites-backup).


### تصدير {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

يمكن تصدير جميع البيانات التي قمت بتكوينها وإنشائها باستخدام ***قائمة التصدير***. تتكون القائمة من ثلاث مجموعات: **الإعدادات**، **أماكني**، و**الموارد**، والتي تحتوي على جميع مجلدات الملفات المتاحة. يمكنك تحديد الملفات التي تريد تصديرها في كل مجلد، واحدًا تلو الآخر أو كلها مرة واحدة. **يتم حفظ جميع الملفات المصدرة بتنسيق `.osf`**.


### استيراد {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

يفتح ويستعيد ملفات `.osf`. انقر فوق الملف في مدير ملفات الجهاز أو استخدم زر الإجراء.

- *بعض العناصر موجودة بالفعل*. يمكنك استخدام هذه الميزة لحفظ كلا الملفين أو استبدالها جميعًا.
- *إعادة التشغيل*. بعد استيراد الملفات، يجب إعادة تشغيل التطبيق.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) هو المورد البديل الذي تحتاجه لحفظ إعداداتك الشخصية وبيانات التطبيق. يمكنك استخدام هذه البيانات على أي جهاز متاح لتثبيت تطبيق OsmAnd أو عند استخدام تطبيق سطح المكتب. يمكن مزامنة أي تغييرات تجريها.


## منع فقدان البيانات {#preventing-data-loss}

في إصدارات *Android* و*iOS* من OsmAnd، إذا قمت **بإلغاء تثبيت** التطبيق بالكامل أو حددت **مسح البيانات** على جهازك في قائمة إعدادات معلومات التطبيق، فسيتم أيضًا حذف مجلد البيانات من مدير ملفات الجهاز. إذا لم تتخذ احتياطات، فسيؤدي ذلك إلى **فقدان جميع الخرائط التي تم تنزيلها لبيانات OsmAnd، وجميع المفضلة المحفوظة، ومسارات GPX، والمطالبات الصوتية (TTS)، و[البيانات الأخرى](#export--import-data).**

هناك طريقتان لحفظ بياناتك قبل إعادة تثبيت تطبيق OsmAnd:

- استخدم [OsmAnd Cloud](#osmand-cloud). يمكنك عمل نسخة احتياطية من بياناتك باستخدام ميزات OsmAnd مثل [OsmAnd Start](../personal/osmand-cloud.md#osmand-start)، كإصدار مجاني، أو [OsmAnd Pro](../purchases/index.md)، وهو اشتراك مدفوع بميزات أكثر.
- [تصدير ملف OSF](#export) ببياناتك. انسخ ملف `.osf` إلى مجلد على جهازك أو OsmAnd Cloud. بعد إعادة تثبيت OsmAnd، [استورد ملف `.osf` هذا](#import) إلى تطبيق OsmAnd.


## مقالات ذات صلة {#related-articles}

- [ملفات التعريف (الإعدادات)](./profiles.md)
- [إدارة المسارات](../personal/tracks/manage-tracks.md#import--export-track)
- [سجل البحث](../search/search-history.md#export-and-share)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

1. كيفية نقل المفضلة والمسارات إلى جهاز جديد. [(تحقق)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. لدي ملف GPX، كيف أقوم باستيراده إلى OsmAnd؟ [(تحقق)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. حذف بيانات الخريطة بعد تحديث التطبيق (إذا تم تحديد "تخزين متعدد المستخدمين 1"). [(تحقق)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *آخر تحديث: يناير 2025*