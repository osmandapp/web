---
source-hash: 0d7665854851018fefbbb639e2a5b87de47b125ce7259ddf6e6564c1d959eecf
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

تسمح لك أدوات **الاستيراد** و**التصدير** في OsmAnd بإدارة بياناتك. يمكنك نقل ملفاتك الشخصية، ومفضلاتك، ومساراتك، وإعداداتك الأخرى باستخدام تنسيق خاص عبر التطبيقات على جهازك. تبسط هذه العملية حفظ ونقل البيانات بين الأجهزة وتسمح لك بمشاركتها مع مستخدمي OsmAnd الآخرين.

:::note حجم كبير
*إذا كان حجم البيانات التي اخترتها كبيرًا، فسيستغرق التطبيق بعض الوقت لإعداد ملف `.osf`.*
:::


## تصدير / استيراد البيانات {#export--import-data}

يسمح لك *الاستيراد* و*التصدير* بحفظ البيانات من **ملفات** `.osf` التي تم إنشاؤها أو استخدام [مصادر عبر الإنترنت](../map/raster-maps.md)، مما يجعل من الممكن استعادة المعلومات بعد إعادة التثبيت.

**أنواع البيانات** المتاحة للاستيراد/التصدير:

- **الإعدادات:**  
        [الملفات الشخصية](../personal/profiles.md#actions)، &nbsp;[إعدادات OsmAnd/الإعدادات العامة](../personal/global-settings.md)، &nbsp;[الألوان](../personal/color-palette-schemes.md)، &nbsp;[الإجراء السريع](../widgets/quick-action.md)، &nbsp;[نوع نقاط الاهتمام](../map/point-layers-on-map.md#poi-types)، &nbsp;[تجنب الطريق](../map/map-context-menu.md#avoid-road).
- **أماكني:**  
        [المفضلات](../personal/favorites.md#export--import)، &nbsp;[المسارات](../personal/tracks/manage-tracks.md#import--export-track)، &nbsp;*ملاحظات OSM*، *تعديلات OSM*](../plugins/osm-editing.md#create--modify-poi)، &nbsp;[ملاحظات صوتية/مرئية](../plugins/audio-video-notes.md)، &nbsp;[علامات الخريطة](../personal/markers.md)، &nbsp;[سجل العلامات*، *سجل البحث*، *سجل الملاحة](../personal/global-settings.md#history)، &nbsp;*مسار الرحلة*.
- **الموارد:**  
        [نمط العرض](../map/vector-maps.md#custom-map-style)، &nbsp;[التوجيه](../navigation/routing/osmand-routing.md)، &nbsp;[محركات التوجيه عبر الإنترنت](../navigation/routing/online-routing.md)، &nbsp;*مصادر الخرائط*، *الخرائط القياسية/غير المتصلة بالإنترنت](../map/raster-maps.md)، &nbsp;[خرائط ويكيبيديا والسفر](../plan-route/travel-guides.md)، &nbsp;[الخرائط البحرية](../plugins/nautical-charts.md)، &nbsp;[خرائط الطرق](../map/vector-maps.md#road-style)، &nbsp;[الخرائط الطبوغرافية](../plugins/topography.md)، &nbsp;[التوجيهات الصوتية (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech)، [التوجيهات الصوتية (مسجلة)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts)، &nbsp;[النسخ الاحتياطي للمفضلات](../personal/favorites.md#automatic-favorites-backup).


### تصدير {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![إجراءات الملفات الشخصية تصدير أندرويد](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![نسخ احتياطي محلي أندرويد](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![إجراءات الملفات الشخصية تصدير iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![إجراءات الملفات الشخصية تصدير iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

يمكن تصدير جميع البيانات التي قمت بتكوينها وإنشائها باستخدام ***قائمة التصدير***. تتكون القائمة من ثلاث مجموعات: **الإعدادات**، و**أماكني**، و**الموارد**، والتي تحتوي على جميع مجلدات الملفات المتاحة. يمكنك تحديد الملفات التي تريد تصديرها في كل مجلد، واحدًا تلو الآخر أو كلها مرة واحدة. **يتم حفظ جميع الملفات المصدرة بتنسيق `.osf`**.  


### استيراد {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![إجراءات الملفات الشخصية استيراد أندرويد](@site/static/img/personal/profiles/profile_actions_import_android.png) ![إجراءات الملفات الشخصية استيراد 1 أندرويد](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![إجراءات الملفات الشخصية استيراد iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![إجراءات الملفات الشخصية استيراد 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

يفتح ويستعيد ملفات `.osf`. انقر على الملف في مدير ملفات الجهاز أو استخدم زر الإجراء.

- *بعض العناصر موجودة بالفعل*. يمكنك استخدام هذه الميزة لحفظ كلا الملفين أو استبدالها جميعًا.
- *إعادة التشغيل*. بعد استيراد الملفات، يجب إعادة تشغيل التطبيق.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) هو المورد البديل الذي تحتاجه لحفظ إعداداتك الشخصية وبيانات التطبيق. يمكنك استخدام هذه البيانات على أي جهاز متاح لتثبيت تطبيق OsmAnd أو عند استخدام تطبيق سطح المكتب. يمكن مزامنة أي تغييرات تجريها.


## منع فقدان البيانات {#preventing-data-loss}

في إصداري *أندرويد* و*iOS* من OsmAnd، إذا قمت **بإلغاء تثبيت** التطبيق بالكامل أو اخترت **مسح البيانات** على جهازك في قائمة الإعدادات معلومات التطبيق، فسيتم أيضًا حذف مجلد البيانات من مدير ملفات الجهاز. إذا لم تتخذ الاحتياطات اللازمة، فسيؤدي ذلك إلى **فقدان جميع الخرائط التي تم تنزيلها لبيانات OsmAnd، وجميع المفضلات المحفوظة، ومسارات GPX، والتوجيهات الصوتية (TTS)، و[بيانات أخرى](#export--import-data).**

هناك طريقتان لحفظ بياناتك قبل إعادة تثبيت تطبيق OsmAnd:

- استخدم [OsmAnd Cloud](#osmand-cloud). يمكنك عمل نسخة احتياطية من بياناتك باستخدام ميزات OsmAnd مثل [OsmAnd Start](../personal/osmand-cloud.md#osmand-start)، كإصدار مجاني، أو [OsmAnd Pro](../purchases/index.md)، وهو اشتراك مدفوع بميزات أكثر.
- [تصدير ملف OSF](#export) مع بياناتك. انسخ ملف `.osf` إلى مجلد على جهازك أو OsmAnd Cloud. بعد إعادة تثبيت OsmAnd، [استورد ملف `.osf` هذا](#import) إلى تطبيق OsmAnd.


## مقالات ذات صلة {#related-articles}

- [الملفات الشخصية (الإعدادات)](./profiles.md)
- [إدارة المسارات](../personal/tracks/manage-tracks.md#import--export-track)
- [سجل البحث](../search/search-history.md#export-and-share)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

### مشاكل وحلول شائعة {#common-issues-and-solutions}

١. كيفية نقل المفضلات والمسارات إلى جهاز جديد. [(تحقق)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
٢. لدي ملف GPX، كيف يمكنني استيراده إلى OsmAnd؟ [(تحقق)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
٣. حذف بيانات الخريطة بعد تحديث التطبيق (إذا تم تحديد "Multiuser Storage 1"). [(تحقق)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)