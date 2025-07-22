---
source-hash: 6d1b3b96d03eeb0a709cb35252dd6e33692ccafc93d1375f5cfba33926b39f5a
sidebar_position: 3
title:  الإعدادات العامة
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




## نظرة عامة {#overview}

**الإعدادات العامة** هي [إعدادات](../personal/profiles.md) عامة لجميع الملفات الشخصية في تطبيق OsmAnd. هذه هي الإعدادات الأساسية لنظام OsmAnd، وأي تغييرات يتم إجراؤها ستؤثر على التطبيق بأكمله.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## عام {#general}

يحتوي هذا القسم على إعدادات OsmAnd الأساسية، مثل تحديد [ملف تعريف](#default-profile) عند تحميل التطبيق، وتحديد [محرك العرض](#map-rendering-engine) و[المجلد](#data-storage-folder) الذي سيتم حفظ البيانات فيه.  


### الملف الشخصي الافتراضي {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

يستخدم OsmAnd الملف الشخصي الافتراضي، *تصفح الخريطة*، كأول ملف شخصي للمستخدمين الجدد، وإذا تم تحديد هذا الملف الشخصي من قبلك، فسيتم استخدامه في كل مرة يتم فيها إعادة تشغيل التطبيق. يمكنك تحديد أي ملف شخصي من القائمة الافتراضية، بما في ذلك *آخر استخدام* و*تصفح الخريطة*.

- **<Translate android="true" ids="shared_string_last_used"/>**. يسمح لك بتحديد الملف الشخصي الذي تم استخدامه آخر مرة.
- **<Translate android="true" ids="settings_preset"/>**. يمكنك تحديد الملف الشخصي الذي سيتم استخدامه عند بدء تشغيل OsmAnd. يمكن تغييره في [إعدادات](../personal/profiles.md) التطبيق.  


### ملف تعريف CarPlay {#carplay-profile}

:::caution iOS فقط
هذه الميزة متاحة لإصدار iOS من تطبيق OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

يُستخدم [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) عند الاتصال ببرنامج [CarPlay](https://support.apple.com/en-gb/HT205634) الخاص بمركبتك ويساعدك على الاستفادة القصوى من الإصدار المحسّن من تطبيق OsmAnd باستخدام أنظمة الصوت والفيديو لعرض البيانات على هاتفك.


### مجلد تخزين البيانات {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiles Storage Settings Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **ذاكرة الجهاز** تُظهر مقدار المساحة الحرة المتبقية على جهازك. انقر على حقل للوصول إلى قائمة [*الخرائط والموارد*](../personal/maps-resources.md#maps--resources)، حيث يمكنك عرض وإدارة معلومات مفصلة حول بيانات OsmAnd الخاصة بك.

2. في **<Translate android="true" ids="change_data_storage_folder"/>**، يمكنك تحديد مجلد لحفظ بيانات OsmAnd على جهازك.  

    - *ذاكرة التطبيق الداخلية*. فقط تطبيق OsmAnd لديه حق الوصول إلى بياناته ولا يوجد أي من التطبيقات الخارجية.
    - *الذاكرة المشتركة*. لم تعد متاحة.
    - *التخزين الخارجي 1*. فقط تطبيق OsmAnd واحد لديه حق الوصول وتطبيقات المسؤول و USB.
    - *تخزين متعدد المستخدمين*. فقط تطبيق OsmAnd واحد لديه حق الوصول، ولكنه مشترك بين عدة مستخدمين لنظام Android.
    - *محدد يدويًا*. يعتمد على المسار.

:::note أندرويد 12+ (تغيير مجلد التخزين)
تم تطبيق إرشادات جديدة للوصول إلى التخزين في إصدارات أندرويد 11-12. راجع قسم [**استكشاف الأخطاء وإصلاحها**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) للحصول على التفاصيل.
:::

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *جهاز iOS ← الإعدادات ← عام ← تخزين iPhone ← خرائط OsmAnd*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

ملفات OsmAnd مرئية في تطبيق [*الملفات*](https://apps.apple.com/us/app/files/id1232058109). يمكنك الوصول إلى جميع ملفات OsmAnd: [المسارات](../personal/tracks/manage-tracks.md)، [المفضلة](../personal/favorites.md)، [الخرائط](../personal/maps-resources.md)، [rendering.xml](../../technical/build-osmand/rendering.md)، [routing.xmlustom](../../technical/build-osmand/routing.md). للقيام بذلك، اتبع المسار التالي:  

انتقل إلى: *الملفات ← على هاتفي ← خرائط OsmAnd*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### محرك عرض الخرائط {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (أندرويد فقط)*

![General Settings engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- في إصدار **أندرويد** من التطبيق، يمكنك التبديل بين عرض الخرائط بالإصدار 1، الذي تم تنفيذه في الأصل في تطبيق OsmAnd، والإصدار 2، الذي يستخدم واجهة برمجة تطبيقات OpenGL (مكتبة الرسومات المفتوحة) لعرض الكائنات الرسومية ثنائية وثلاثية الأبعاد.

- يستخدم إصدار **iOS** OpenGL فقط لعرض الخرائط.


| الميزات | الإصدار 1 | الإصدار 2 (OpenGL) |
|:---|:--- |:--- |
| متعدد المنصات | لا يُستخدم في إصدار iOS. | يناسب كلا الإصدارين. |
| يعتمد على وحدة معالجة الرسومات / وحدة المعالجة المركزية | موصى به للأجهزة ذات الأداء المنخفض أو القديمة. | محرك عرض قوي. <br /> متاح فقط لـ [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) والإصدارات الأحدث، وفي وضع الاختبار لـ [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| وضع ثلاثي الأبعاد | من الممكن عرض الخريطة في وضع ثنائي الأبعاد، ويمكنك تغيير زاوية العرض للحصول على [عرض ثلاثي الأبعاد](../widgets/map-buttons.md#3d-mode). | يمكنك عرض الخريطة في وضع ثنائي الأبعاد و[ثلاثي الأبعاد](../widgets/map-buttons.md#3d-mode). |
| عرض الخريطة | يتم عرض الخريطة بأكملها كمجموعة من المربعات، والعلامات والخطوط والنصوص موجودة بالفعل داخل هذه المربعات. | أولاً، يتم عرض حزمة المربعات بأكملها، ثم يتم تطبيق الرموز المتاحة على الخريطة، [طبقة تلو الأخرى](../../technical/algorithms/map-rendering-layers.md). |
| تراكب / تراكب الرموز الشفافة | يدعم جميع الإعدادات. | لا يدعم طبقة نقطية فوق نص متجه. |
| [تضاريس ثلاثية الأبعاد](../map/raster-maps.md#3d-relief) | غير مدعوم. | هذه الميزة تصور التضاريس على الخريطة عن طريق إضافة معلومات الارتفاع إلى خريطة ثنائية الأبعاد عادية، مما يخلق تأثيرًا ثلاثي الأبعاد وعمقًا. |
| [مسارات ثلاثية الأبعاد](../map/tracks/appearance.md) | غير مدعوم. | تتيح لك هذه الميزة عرض المسارات حسب الارتفاع فوق مستوى سطح البحر. |
| [خريطة عبر الإنترنت](../plugins/online-map.md) | لا يدعم عرض خطوط الكنتور إذا كان مصدر الخريطة أي خريطة مربعات عبر الإنترنت. | عندما يكون مصدر الخريطة خريطة عبر الإنترنت، تُستخدم أيضًا الخرائط ثلاثية الأبعاد، ويدعم عرض خطوط الكنتور على الخريطة. |
| [مكون الطقس الإضافي](../plugins/weather.md) | لا يمكنك استخدام هذا المكون الإضافي. | مناسب للاستخدام مع المكون الإضافي. |  

يتم تحميل صورة العرض ثلاثي الأبعاد للخريطة بلاطة تلو الأخرى، ثم جميع الرموز. تعتمد سرعة عرض الخريطة على عدد الكائنات الرسومية ثنائية وثلاثية الأبعاد عليها، وبشكل مباشر على أداء جهازك. لذلك، لا يمكن استخدام الإصدار 2 (OpenGL) على الأجهزة ذات الأداء المنخفض.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## الخصوصية والأمان {#privacy-and-security}

يسمح لك OsmAnd باختيار ما إذا كنت تريد *[مشاركة نشاطك داخل التطبيق](#analytics)* و[المعرفات](#identifiers) (*أندرويد فقط*) في التطبيق، والقدرة على تعديل *[سجلك](#history)* واستخدام *[وكيل](#proxy)* (*أندرويد فقط*) من اختيارك.  

:::note
يمكن العثور على مزيد من المعلومات في [*سياسة خصوصية وأمان OsmAnd*](../../legal/privacy-policy.md)
:::

### التحليلات {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Analytics Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![General Settings Send anonymous data iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

يسمح لك إعداد **<Translate android="true" ids="analytics_pref_title"/>** (*أندرويد*) أو **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) باختيار ما إذا كنت تريد تقديم بيانات مجهولة حول *الخرائط التي تم تنزيلها* و*الشاشات التي تمت زيارتها* (*أندرويد*).  

:::note
لا يتم جمع بيانات حول موقعك أو الأماكن التي تشاهدها على الخريطة.
:::  

### المعرفات {#identifiers}

<InfoAndroidOnly />

*القائمة ← الإعدادات ← إعدادات OsmAnd ← الخصوصية والأمان ← المعرفات*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

يتم إنشاء **UUID** (*معرف مستخدم فريد*) لكل تثبيت لتطبيق OsmAnd وإرساله إلى الخوادم أثناء تحميل الخريطة.

- يتم استخدام UUID عشوائي لتنزيل الخرائط غير المتصلة بالإنترنت من خوادم OsmAnd للتحكم في الاستخدام الرشيد لموارد الخادم، والتنبؤ باستخدام حركة المرور، وتقديم تقارير شهرية عامة حول تنزيلات الخرائط.
- يتغير UUID كل 3 أشهر.  
- بدءًا من الإصدار 4.3 من OsmAnd، يمكنك تعطيل جمع بيانات المستخدم عند استخدام تطبيق OsmAnd. عندها لن يتم إرسال UUID مع أي طلب تنزيل.  
- يمكنك قراءة المزيد من المعلومات في [شروط الاستخدام (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### السجل {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

يسجل التطبيق سجل البيانات المدخلة سابقًا (السجل) في الفئات التالية: [البحث](../search/search-history.md)، [التنقل](../navigation/setup/route-navigation.md#history-of-previous-routes)، [علامات الخريطة](../personal/markers.md#history). باستخدام المفتاح الموجود في علامة التبويب المناسبة، يمكنك *تمكين / تعطيل* التسجيل لفئات معينة من الإدخالات. يمكنك أيضًا [إدارة](#history) (عرض، حذف، ومشاركة) البيانات المسجلة سابقًا.  

- يُستخدم ***النسخ الاحتياطي كملف*** (*أندرويد*) أو ***التصدير*** (*iOS*) لإنشاء [ملف نسخ احتياطي](../personal/import-export.md#export) لسجلك.
- يُستخدم ***مسح كل السجل*** (*أندرويد*) أو ***حذف كل السجل*** (*iOS*) لحذف جميع إدخالات السجل المسجلة حتى وقت الحذف.

<br/>

**مشاركة وحذف السجل.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- يمكنك حذف عنصر واحد أو أكثر من قائمة السجل أو مشاركتها كملف (للوصول إلى هذه الوظائف *في iOS*، انقر على زر ***تحرير***).  
- لحذف أو تصدير سجلات متعددة في وقت واحد، حدد مربعات الاختيار بجانب السجلات المطلوبة وانقر على زري **تصدير** أو **حذف**.  


### الوكيل {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

يسمح لك إعداد **<Translate android="true" ids="proxy_pref_title"/>** بتكوين [وكيل HTTP](https://en.wikipedia.org/wiki/Proxy_server) لجميع طلبات الشبكة. يمكنك تعيين *مضيف الوكيل* و*منفذ الوكيل*.  


## أخرى {#other}

في هذا القسم من إعدادات OsmAnd، يمكنك تكوين الإشعارات التي تتلقاها، وخدمة الموقع، وكيفية حفظ إعدادات تطبيقك.

### الحوارات والإشعارات {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

يسمح لك إعداد **<Translate android="true" ids="dialogs_and_notifications_title"/>** بتمكين/تعطيل النوافذ المنبثقة والحوارات والإشعارات.  

- *رسالة بدء التشغيل* تتضمن العروض الترويجية، والاختبارات، والأحداث، والمزيد.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) يمنع عرض خصومات التطبيق ورسائل الأحداث المحلية الخاصة.
- [*حوار تنزيل الخريطة*](../start-with/download-maps.md#download) يخبرك بأنه يمكن تنزيل خرائط معينة.


### مصدر الموقع {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*أندرويد فقط*)

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)

يوفر لك OsmAnd خيارًا من الخدمات لتحديد موقعك. يوصى بقراءة المزيد من المعلومات حول [إذن الموقع](../start-with/first-steps.md#permission-to-access-the-location) و[استكشاف الأخطاء وإصلاحها](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) لهذا القسم.

***أندرويد***:

- يمكنك اختيار خدمات *Google Play* أو *Android API* التي سيستخدمها OsmAnd لتحديد موقعك. يمكن أن يكون هذا مفيدًا للأجهزة التي لا تحتوي على *خدمات Google Play* أو في حالة عدم دقة الموقع أو بيانات الارتفاع عند تسجيل المسارات.
- يتلقى OsmAnd البيانات من موارد *Google Fused Location Providers* و*Android GPS and Network Providers*. يمكنك تبديل **<Translate android="true" id="location_source" />** في: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- يستخدم نظام iOS *iOS API* لتحديد الموقع.  
- يمكن العثور على جميع إعدادات موقع OsmAnd في إعدادات جهاز iOS: *الإعدادات ← خرائط OsmAnd ← الموقع*  
- خصوصية خدمات الموقع: *الإعدادات ← الخصوصية ← خدمات الموقع*


### النسخ الاحتياطي التلقائي {#auto-backup}

<InfoAndroidOnly />

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- يمكن لنظام Android أو OsmAnd Cloud حفظ بياناتك وإعدادات التطبيق.

- بشكل افتراضي، يتم نسخ *إعدادات OsmAnd* و*علامات خرائط [المفضلة](../personal/favorites.md#automatic-favorites-backup)* احتياطيًا تلقائيًا بواسطة نظام Android. يتيح لك ذلك استعادتها على الأجهزة الجديدة أو بعد إعادة تثبيت التطبيق.

- يرجى ملاحظة أن حجم النسخ الاحتياطي مقيد بـ *25 ميجابايت*.

- للعثور على ملفات النسخ الاحتياطي، استخدم تطبيق مدير ملفات تابع لجهة خارجية.  
    *ملاحظة: يمكنك العثور على ملفات النسخ الاحتياطي باستخدام مدير ملفات Android: Android ← data ← net.osmand ← files ← backup، ولكن كن على دراية بأن الوصول إلى أدلة النظام محدود في الإصدارات الحديثة من Android.*  

**إذا كنت تستخدم [*OsmAnd Cloud*](../personal/osmand-cloud.md)، يوصى بإلغاء تنشيط خيار النسخ الاحتياطي الافتراضي هذا لمنع أي ارتباك أثناء إعادة التثبيت.**


## قانوني {#legal}

يمكن لـ OsmAnd [تحذيرك بشأن كاميرات السرعة](../navigation/guidance/navigation-settings.md#screen-alerts)، ولكن فقط إذا سمحت قوانين بلدك بذلك.


### إلغاء تثبيت كاميرات السرعة {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

يسمح لك هذا الإعداد بتفعيل أو تعطيل نقاط الاهتمام (POI) الخاصة بكاميرات السرعة، تحتاج إلى إعادة تشغيل تطبيق OsmAnd لإجراء التغييرات.
  
في بعض البلدان أو المناطق، يعتبر استخدام تطبيقات تحذير كاميرات السرعة غير قانوني. يجب عليك اتخاذ قرار بناءً على قوانين بلدك. اختر **إبقاء نشطًا**، وستتلقى تنبيهات وإشعارات كاميرات السرعة. اختر **إلغاء التثبيت** وسيتم حذف جميع البيانات المتعلقة بكاميرات السرعة، مثل التحذيرات والإشعارات ونقاط الاهتمام، حتى تقوم بإعادة تثبيت OsmAnd بالكامل.  

اقرأ عن تنبيهات كاميرات السرعة على مسارك في مقالة أدوات التنقل في قسم *[أداة التنبيه](../widgets/nav-widgets.md#alert-widget)*.


## مقالات ذات صلة {#related-articles}

- [الملفات الشخصية (الإعدادات)](./profiles.md)
- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

### استكشاف الأخطاء وإصلاحها {#troubleshooting}

- **أندرويد 12+ (تغيير مجلد التخزين)**. تم تطبيق إرشادات جديدة للوصول إلى التخزين في إصدارات أندرويد 11-12. تؤثر هذه التغييرات بشكل خاص على تخزين الخرائط على بطاقات SD، مما يؤدي إلى أداء أبطأ بكثير في الوصول إلى الملفات وقيود وصول أكثر صرامة إلى مجلدات بطاقة SD على أندرويد 11 و 12. لمعرفة كيفية حل هذه المشكلة، راجع قسم [**استكشاف الأخطاء وإصلاحها**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **مصدر الموقع لمشاكل الارتفاع**. غيرت Google Play سياستها، وللامتثال، يجب على OsmAnd، بدءًا من الإصدار 3.9، استخدام خدمات Google Play للحصول على إصلاحات الموقع أثناء التشغيل في الخلفية. اقرأ المزيد من المعلومات في قسم [استكشاف الأخطاء وإصلاحها](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *آخر تحديث: نوفمبر 2024*