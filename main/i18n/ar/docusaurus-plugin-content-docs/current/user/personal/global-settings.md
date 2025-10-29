---
source-hash: 03882f509a8ca4795f4ea6dfab66cd17c33b043531b8429ccab85994d6199aa2
sidebar_position: 3
title:  Global Settings
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

**الإعدادات العامة** هي إعدادات [عامة](../personal/profiles.md) لجميع الملفات الشخصية في تطبيق OsmAnd. هذه هي الإعدادات الأساسية لنظام OsmAnd، وأي تغييرات تُجرى ستؤثر على التطبيق بأكمله.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![إعدادات الملفات الشخصية العامة أندرويد](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![إعدادات الملفات الشخصية العامة أندرويد](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![إعدادات الملفات الشخصية العامة iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## عام {#general}

يحتوي هذا القسم على الإعدادات الأساسية لـ OsmAnd، مثل اختيار [الملف الشخصي الافتراضي](#default-profile) عند تحميل التطبيق، واختيار [محرك العرض](#map-rendering-engine) و[مجلد التخزين](#data-storage-folder) حيث سيتم حفظ البيانات.  


### الملف الشخصي الافتراضي {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إعدادات عامة ملف شخصي افتراضي أندرويد](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات عامة ملف شخصي افتراضي أندرويد](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

يستخدم OsmAnd الملف الشخصي الافتراضي، *استعراض الخريطة*، كأول ملف شخصي للمستخدمين الجدد، وإذا تم اختيار هذا الملف الشخصي من قبلك، فسيتم استخدامه في كل مرة يتم فيها إعادة تشغيل التطبيق. يمكنك اختيار أي ملف شخصي من القائمة الافتراضية، بما في ذلك *آخر مستخدم* و*استعراض الخريطة*.

- **<Translate android="true" ids="shared_string_last_used"/>**. يسمح لك باختيار الملف الشخصي الذي تم استخدامه آخر مرة.
- **<Translate android="true" ids="settings_preset"/>**. تقوم باختيار الملف الشخصي الذي سيتم استخدامه عند بدء تشغيل OsmAnd. يمكن تغييره في إعدادات [التطبيق](../personal/profiles.md).  


### ملف CarPlay الشخصي {#carplay-profile}

:::caution iOS ONLY
هذه الميزة متاحة لإصدار iOS من تطبيق OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![إعدادات عامة ملف شخصي افتراضي أندرويد](@site/static/img/personal/profiles/CarPlay_ios.png)  

يُستخدم [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) عند الاتصال ببرنامج [CarPlay](https://support.apple.com/en-gb/HT205634) في سيارتك، ويساعدك على الاستفادة القصوى من الإصدار المحسّن من تطبيق OsmAnd باستخدام أنظمة الصوت والفيديو لعرض البيانات على هاتفك.


### مجلد تخزين البيانات {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![إعدادات تخزين الملفات الشخصية أندرويد](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **ذاكرة الجهاز** تظهر كمية المساحة الحرة المتبقية على جهازك. اضغط على الحقل للوصول إلى قائمة [*الخرائط والموارد*](../personal/maps-resources.md#local-menu)، حيث يمكنك عرض وإدارة معلومات مفصلة عن بيانات OsmAnd الخاصة بك.

2. في **<Translate android="true" ids="change_data_storage_folder"/>**، يمكنك اختيار مجلد لحفظ بيانات OsmAnd على جهازك.  

    - *ذاكرة التطبيق الداخلية*. فقط تطبيق OsmAnd لديه الوصول إلى بياناته ولا تطبيقات خارجية.
    - *الذاكرة المشتركة*. غير متاحة بعد الآن.
    - *التخزين الخارجي 1*. فقط تطبيق OsmAnd واحد لديه الوصول وتطبيقات الإدارة وUSB.
    - *التخزين متعدد المستخدمين*. فقط تطبيق OsmAnd واحد لديه الوصول، لكنه مشترك بين عدة مستخدمين أندرويد.
    - *محدد يدويًا*. يعتمد على المسار.

:::note Android 12+ (change storage folder)
تم تنفيذ إرشادات وصول جديدة للتخزين في إصدارات أندرويد 11-12. راجع قسم [**استكشاف الأخطاء وإصلاحها**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) للحصول على التفاصيل.
:::

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *جهاز iOS → الإعدادات → العام → تخزين iPhone → خرائط OsmAnd*  

![إعدادات عامة تخزين iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

ملفات OsmAnd مرئية في تطبيق [*الملفات*](https://apps.apple.com/us/app/files/id1232058109). يمكنك الوصول إلى جميع ملفات OsmAnd: [المسارات](../personal/tracks/manage-tracks.md)، [المفضلات](../personal/favorites.md)، [الخرائط](../personal/maps-resources.md)، [rendering.xml](../../technical/build-osmand/rendering.md)، [routing.xmlustom](../../technical/build-osmand/routing.md). للقيام بذلك، اتبع المسار التالي:  

اذهب إلى: *الملفات → على هاتفي → خرائط OsmAnd*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![إعدادات عامة تخزين iOS](@site/static/img/personal/profiles/files-1.png) ![إعدادات عامة تخزين iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### محرك عرض الخريطة {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (أندرويد فقط)*

![إعدادات عامة محرك العرض أندرويد](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- في إصدار **أندرويد** من التطبيق، يمكنك التبديل بين عرض الخريطة الإصدار 1، الذي تم تنفيذه أصلاً في تطبيق OsmAnd، والإصدار 2، الذي يستخدم واجهة البرمجة OpenGL (مكتبة الرسومات المفتوحة) لعرض الكائنات الرسومية ثنائية وثلاثية الأبعاد.

- يستخدم إصدار **iOS** OpenGL فقط لعرض الخريطة.


| الميزات | الإصدار 1 | الإصدار 2 (OpenGL) |
|:---|:--- |:--- |
| متعدد المنصات | غير مستخدم في إصدار iOS. | يناسب كلا الإصدارين. |
| يعتمد على GPU / CPU | موصى به للأجهزة ذات الأداء المنخفض أو القديمة. | محرك عرض قوي. <br /> متاح فقط لـ [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) وإصدارات لاحقة، وفي وضع الاختبار لـ [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| وضع 3D | من الممكن عرض الخريطة في 2D، ويمكنك تغيير زاوية العرض للحصول على [عرض ثلاثي الأبعاد](../widgets/map-buttons.md#3d-mode). | يمكنك عرض الخريطة في 2D و[3D](../widgets/map-buttons.md#3d-mode). |
| عرض الخريطة | يتم عرض الخريطة بأكملها كمجموعة من البلاطات، والعلامات والخطوط والنصوص موجودة بالفعل داخل هذه البلاطات. | أولاً، يتم عرض حزمة البلاط بأكملها، ثم يتم تطبيق الرموز المتاحة على الخريطة، [طبقة بطبقة](../../technical/algorithms/map-rendering-layers.md). |
| تراكب / تحت الرموز الشفافة | يدعم جميع الإعدادات. | لا يدعم طبقة رستر على النص المتجهي. |
| [التضاريس ثلاثية الأبعاد](../map/raster-maps.md#3d-relief) | غير مدعوم. | تُصور هذه الميزة التضاريس على الخريطة بإضافة معلومات الارتفاع إلى خريطة 2D عادية، مما يخلق تأثيرًا ثلاثي الأبعاد وعمق. |
| [المسارات ثلاثية الأبعاد](../map/tracks/appearance.md) | غير مدعوم. | تسمح هذه الميزة بعرض المسارات حسب الارتفاع فوق مستوى سطح البحر. |
| [خريطة عبر الإنترنت](../plugins/online-map.md) | لا يدعم عرض خطوط الارتفاع إذا كان مصدر الخريطة أي خريطة بلاطات عبر الإنترنت. | عندما يكون مصدر الخريطة خريطة عبر الإنترنت، يتم استخدام الخرائط ثلاثية الأبعاد أيضًا، ويتم دعم عرض خطوط الارتفاع على الخريطة. |
| [إضافة الطقس](../plugins/weather.md) | لا يمكنك استخدام هذه الإضافة. | مريح للاستخدام مع الإضافة. |  

يتم تحميل صورة عرض الخريطة ثلاثي الأبعاد بلاطة بلاطة، ثم جميع الرموز. تعتمد سرعة عرض الخريطة على عدد الكائنات الرسومية ثنائية وثلاثية الأبعاد عليها، وعلى أداء الأجهزة الخاصة بك مباشرة. لذلك، لا يمكن استخدام الإصدار 2 (OpenGL) على الأجهزة ذات الأداء المنخفض.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## الخصوصية والأمان {#privacy-and-security}

يسمح OsmAnd لك باختيار ما إذا كنت تريد *[مشاركة نشاطك داخل التطبيق](#analytics)* و[معرفات](#identifiers) (*أندرويد فقط*) في التطبيق، والقدرة على تحرير *[سجلك](#history)* واستخدام *[وكيل](#proxy)* (*أندرويد فقط*) من اختيارك.  

:::note
يمكن العثور على مزيد من المعلومات في [*سياسة خصوصية وأمان OsmAnd*](../../legal/privacy-policy.md)
:::

### التحليلات {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![إعدادات عامة التحليلات أندرويد](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![إعدادات عامة إرسال بيانات مجهولة iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

إعداد **<Translate android="true" ids="analytics_pref_title"/>** (*أندرويد*) أو **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) يسمح لك باختيار ما إذا كنت تريد تقديم بيانات مجهولة حول *الخرائط المحملة* و*الشاشات المزارة* (*أندرويد*).  

:::note
لا يتم جمع بيانات حول موقعك أو الأماكن التي تتصفحها على الخريطة.
:::  

### المعرفات {#identifiers}

<InfoAndroidOnly />

*القائمة → الإعدادات → إعدادات OsmAnd → الخصوصية والأمان → المعرفات*  

![UUID أندرويد](@site/static/img/personal/profiles/uuid_android.png)  

يتم إنشاء **UUID** (*معرف مستخدم فريد*) لكل تثبيت لتطبيق OsmAnd وإرساله إلى الخوادم أثناء تحميل الخريطة.

- يُستخدم UUID عشوائي لتحميل الخرائط دون اتصال من خوادم OsmAnd للتحكم في الاستخدام الرشيد لموارد الخادم، وتوقع استخدام الحركة المرورية، وتقديم تقارير شهرية عامة حول تحميل الخرائط.
- يتغير UUID كل 3 أشهر.  
- بدءًا من إصدار OsmAnd 4.3، يمكنك تعطيل جمع بيانات المستخدم عند استخدام تطبيق OsmAnd. ثم لن يتم إرسال UUID مع أي طلب تحميل.  
- يمكنك قراءة مزيد من المعلومات في [شروط الاستخدام (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### السجل {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![إعدادات عامة السجل أندرويد](@site/static/img/personal/profiles/general_settings_history_android.png) ![إعدادات عامة السجل أندرويد](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![إعدادات عامة السجل iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![إعدادات عامة السجل iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

يسجل التطبيق تاريخ البيانات المدخلة سابقًا (السجل) في الفئات التالية: [البحث](../search/search-history.md)، [الملاحة](../navigation/setup/route-navigation.md#history-of-previous-routes)، [علامات الخريطة](../personal/markers.md#history). باستخدام المفتاح في علامة التبويب المناسبة، يمكنك *تفعيل / تعطيل* التسجيل لبعض فئات الإدخالات. كما يمكنك [إدارة](#history) (عرض، حذف، ومشاركة) البيانات المسجلة سابقًا.  

- ***النسخ الاحتياطي كملف*** (*أندرويد*) أو ***التصدير*** (*iOS*) يُستخدم لإنشاء [ملف نسخ احتياطي](../personal/import-export.md#export) لسجلك.
- ***مسح جميع السجل*** (*أندرويد*) أو ***حذف جميع السجل*** (*iOS*) يُستخدم لحذف جميع إدخالات السجل المسجلة حتى وقت الحذف.

<br/>

**مشاركة وحذف السجل.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إعدادات عامة السجل أندرويد](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إعدادات عامة السجل iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![إعدادات عامة السجل iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- يمكنك حذف عنصر واحد أو أكثر من قائمة السجل أو مشاركتها كملف (للوصول إلى هذه الوظائف *في iOS*، اضغط على زر ***التعديل***).  
- لحذف أو تصدير سجلات متعددة في وقت واحد، حدد خانات الاختيار بجانب السجلات المطلوبة واضغط على أزرار **التصدير** أو **الحذف**.  


### الوكيل {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![إعدادات عامة الوكيل أندرويد](@site/static/img/personal/profiles/general_settings_proxy_android.png)

إعداد **<Translate android="true" ids="proxy_pref_title"/>** يسمح لك بتكوين [وكيل HTTP](https://en.wikipedia.org/wiki/Proxy_server) لجميع طلبات الشبكة. يمكنك تعيين *مضيف الوكيل* و*منفذ الوكيل*.  


## أخرى {#other}

في هذا القسم من إعدادات OsmAnd، يمكنك تكوين الإشعارات التي تتلقاها، وخدمة الموقع، وكيفية حفظ إعدادات التطبيق الخاصة بك.

### الحوارات والإشعارات {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إعدادات عامة الإشعارات أندرويد](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات عامة الحوارات iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

إعداد **<Translate android="true" ids="dialogs_and_notifications_title"/>** يسمح لك بتفعيل/تعطيل النوافذ المنبثقة، والحوارات، والإشعارات.  

- *رسالة البدء* تشمل العروض الترويجية، والأسئلة، والأحداث، وغيرها.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) يمنع عرض خصومات التطبيق ورسائل الأحداث المحلية الخاصة.
- [*حوار تحميل الخريطة*](../start-with/download-maps.md#downloading-maps) يُبلغك بأن خرائط محددة يمكن تحميلها.


### مصدر الموقع {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*أندرويد فقط*)

![النسخ الاحتياطي التلقائي](@site/static/img/personal/profiles/location_source_andr.png)

يوفر OsmAnd لك خيارًا من الخدمات لتحديد موقعك. يُوصى بقراءة مزيد من المعلومات حول [إذن الموقع](../start-with/first-steps.md#permission-to-access-the-location) و[استكشاف الأخطاء وإصلاحها](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) لهذا القسم.

***أندرويد***:

- يمكنك اختيار الخدمات *Google Play* أو *Android API* التي سيستخدمها OsmAnd لتحديد موقعك. هذا يمكن أن يكون مفيدًا للأجهزة بدون *خدمات Google Play* أو في حالة عدم دقة الموقع أو بيانات الارتفاع عند تسجيل المسارات.
- يتلقى OsmAnd البيانات من الموارد *Google Fused Location Providers* و*Android GPS and Network Providers*. يمكنك تبديل **<Translate android="true" id="location_source" />** في: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- يستخدم نظام iOS واجهة *iOS API* لتحديد الموقع.  
- يمكن العثور على جميع إعدادات موقع OsmAnd في إعدادات جهاز iOS: *الإعدادات → خرائط OsmAnd → الموقع*  
- خصوصية خدمات الموقع: *الإعدادات → الخصوصية → خدمات الموقع*


### النسخ الاحتياطي التلقائي {#auto-backup}

<InfoAndroidOnly />

![إعدادات عامة الإشعارات أندرويد](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- يمكن لأندرويد أو سحابة OsmAnd حفظ بياناتك وإعدادات التطبيق.

- افتراضيًا، يتم نسخ *إعدادات OsmAnd* و[*المفضلات*](../personal/favorites.md#automatic-favorites-backup) علامات الخريطة تلقائيًا بواسطة نظام أندرويد. هذا يسمح لك باستعادتهما على أجهزة جديدة أو بعد إعادة تثبيت التطبيق.

- يرجى ملاحظة أن حجم النسخ الاحتياطي مقيد بـ *25 ميغابايت*.

- للعثور على ملفات النسخ الاحتياطي، استخدم تطبيق مدير ملفات خارجي.  
    *ملاحظة: يمكنك العثور على ملفات النسخ الاحتياطي باستخدام مدير الملفات في أندرويد: أندرويد → data → net.osmand → files → backup، لكن كن على دراية بأن في الإصدارات الحديثة من أندرويد، الوصول إلى المجلدات النظامية محدود.*  

**إذا كنت تستخدم [*سحابة OsmAnd*](../personal/osmand-cloud.md)، فمن الموصى بتعطيل خيار النسخ الاحتياطي الافتراضي هذا لتجنب أي ارتباك أثناء إعادة التثبيت.**


## قانوني {#legal}

يمكن لـ OsmAnd [تحذيرك من كاميرات السرعة](../navigation/guidance/navigation-settings.md#screen-alerts)، لكن فقط إذا سمحت القوانين في بلدك بذلك.


### إلغاء تثبيت كاميرات السرعة {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![إعدادات عامة الكاميرات أندرويد](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![إعدادات عامة الكاميرات أندرويد](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![إعدادات عامة الكاميرات أندرويد](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![إعدادات عامة الكاميرات أندرويد](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

يسمح هذا الإعداد بتفعيل أو تعطيل POI مع كاميرات السرعة، وتحتاج إلى إعادة تشغيل تطبيق OsmAnd لتطبيق التغييرات.
  
في بعض الدول أو المناطق، استخدام تطبيقات تحذير كاميرات السرعة غير قانوني. يجب عليك اتخاذ خيار بناءً على القوانين في بلدك. حدد **الحفاظ على النشاط**، وستتلقى تنبيهات وإشعارات كاميرات السرعة. حدد **إلغاء التثبيت** وسيتم حذف جميع البيانات المتعلقة بكاميرات السرعة، مثل التحذيرات والإشعارات وPOI، حتى تقوم بإعادة تثبيت OsmAnd بالكامل.  

اقرأ عن التنبيهات لكاميرات السرعة على مسارك في مقالة أدوات الملاحة في قسم *[أداة التنبيه](../widgets/nav-widgets.md#alert-widget)*.


## مقالات ذات صلة {#related-articles}

- [الملفات الشخصية (الإعدادات)](./profiles.md)
- [الاستيراد / التصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

### استكشاف الأخطاء وإصلاحها {#troubleshooting}

- **أندرويد 12+ (تغيير مجلد التخزين)**. تم تنفيذ إرشادات وصول جديدة للتخزين في إصدارات أندرويد 11-12. تؤثر هذه التغييرات بشكل خاص على تخزين الخرائط على بطاقات SD، مما يؤدي إلى أداء وصول أبطأ بشكل كبير للملفات وقيود أكثر صرامة على الوصول إلى مجلدات بطاقة SD في أندرويد 11 و12. لمعرفة كيفية حل هذه المشكلة، راجع قسم [**استكشاف الأخطاء وإصلاحها**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **مصدر الموقع لمشكلات الارتفاع**. غيّر Google Play سياسته، وللامتثال، يجب على OsmAnd، بدءًا من الإصدار 3.9، استخدام خدمات Google Play للحصول على تحديدات الموقع أثناء التشغيل في الخلفية. اقرأ مزيدًا من المعلومات في قسم [استكشاف الأخطاء وإصلاحها](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).