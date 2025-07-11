---
source-hash: 9157ad0f0a716d1c05272f2fefedef4131754bbfda33b5fd36124e58bb0e2ce1
sidebar_position: 3
title:  القائمة الرئيسية
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## نظرة عامة {#overview}

**القائمة الرئيسية** هي قائمة أساسية بالخيارات المتاحة للاستخدام في التطبيق. توفر وصولاً سريعًا إلى تهيئة الملف الشخصي، والإعدادات العامة، والبحث، والبيانات الشخصية، والملاحة، وميزات أخرى.

توجد أيقونة [القائمة الرئيسية](../widgets/map-buttons.md#main-menu) '&#8801;' في الزاوية السفلية اليسرى من شاشة الخريطة. في وضع الملاحة، لا يكون هذا الزر مرئيًا افتراضيًا. يظهر بعد نقرة قصيرة على الخريطة.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![القائمة الرئيسية أندرويد](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![القائمة الرئيسية iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## القائمة الرئيسية (القائمة الجانبية) {#main-menu-side-menu}

### الميزات {#features}

- [علامات الخريطة](../personal/markers.md) هي أداة تسمح بوضع علامة على مكان على الخريطة.
- [أماكني](../personal/myplaces.md) هي قائمة تتضمن افتراضيًا المفضلة والمسارات، وبالإضافة إلى ذلك يمكن أن تتضمن [ملاحظات صوتية/فيديو](../plugins/audio-video-notes.md) و [تعديلات OSM](../plugins/osm-editing.md) (إذا كانت هذه المكونات الإضافية مفعلة).
- [بحث](../search/index.md) (أندرويد) هي أداة تسمح لك بالعثور على المكان أو الكائن الموجود على الخريطة.
- زر [الاتجاهات](../widgets/map-buttons.md#directions) يسمح بإنشاء مسار وبدء الملاحة.
- [تهيئة الخريطة](../map/configure-map-menu.md) هي قائمة تسمح بتهيئة عرض الخريطة.
- [تنزيل الخرائط](../start-with/download-maps.md) هي قائمة تحتوي على جميع الملفات التي يمكن تنزيلها.
- [أدلة السفر (تجريبي)](../plan-route/travel-guides.md) (*أندرويد*) هي أداة تسمح باستخدام دليل ويكيفويج لرحلتك.
- [تخطيط المسار](../plan-route/create-route.md) هي أداة تسمح لك بقياس المسافات على الخريطة، وإنشاء مسارات GPX أو إضافة أجزاء جديدة إلى المسارات الموجودة.
- [* تسجيل الرحلة](../plugins/trip-recording.md) (*أندرويد*) هي أداة تسمح بتسجيل جميع الحركات في مسار باستخدام نظام تحديد المواقع العالمي (GPS) للهاتف.

### الإعدادات {#settings}

- [تهيئة الشاشة](../widgets/configure-screen.md) هي قائمة تسمح بتهيئة عرض الأدوات على الخريطة.
- [المكونات الإضافية](../plugins/index.md#configure-plugin) هي قائمة بالوظائف الإضافية والإعدادات المتقدمة.
- [الإعدادات](../personal/global-settings.md) هي قائمة تسمح بتهيئة معلمات التطبيق الرئيسية.
- [المساعدة](./first-steps.md#offline-help) توفر وصولاً سريعًا إلى دليلك، ومعلومات حول إصدار التطبيق، وتسمح بالاتصال السريع بفريق التطوير.

### الملف الشخصي النشط (أندرويد) {#active-profile-android}

توفر *القائمة الرئيسية* وصولاً سريعًا لتبديل و [تخصيص الملف الشخصي](../personal/profiles.md). الغرض الرئيسي من الملفات الشخصية هو الحصول على مظهر وتعبئة مختلفة للتطبيق للملاحة. على الرغم من أنه يمكنك استخدامها لتخصيص الشاشة والأدوات وتبديل الملفات الشخصية لأغراض عرض مختلفة. يتم تهيئة جميع [الإعدادات](../personal/profiles.md) بشكل منفصل لكل ملف شخصي.

![profile_menu](@site/static/img/menu/profile_menu.png)

في هذه القائمة يمكنك **تبديل** الملف الشخصي النشط، **تهيئة** (تغيير الإعدادات) للملف الشخصي النشط أو **إدارة** جميع ملفات تعريف التطبيق.


### تخصيص (استخدام متقدم لأندرويد) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> ← &#65049; ← تمكين*.  

![عناصر قائمة الدرج ](@site/static/img/settings/drawer_menu_correct.png)  

- تتيح لك هذه القائمة تغيير ترتيب العناصر أو إخفائها أو إظهارها من [الدرج](../personal/profiles.md#drawer)، ونسخ قائمة العناصر من ملف تعريف آخر، وإعادة تعيين الإعدادات الافتراضية.  

- يقوم زر *الناقص* بحذف عنصر من *القائمة الرئيسية* في الدرج وينقله إلى قسم *المخفي*. يقوم زر *النقل* بتغيير موضع العنصر المحدد في القائمة.  

- لا يتم عرض العناصر المنقولة إلى قسم *المخفي* في قائمة الدرج، ولكن جميع الخيارات أو الإعدادات أو المكونات الإضافية من هذه القائمة تستمر في العمل. يمكنك استعادة العناصر بالنقر على الزر الأخضر على يسار أسمائها.  
    ![عناصر قائمة الدرج المخفية ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *آخر تحديث: يوليو 2022*