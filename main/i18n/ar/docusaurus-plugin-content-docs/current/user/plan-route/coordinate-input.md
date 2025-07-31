---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title:  إدخال الإحداثيات
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoAndroidOnly />

## نظرة عامة {#overview}

يُعد *إدخال الإحداثيات* أداة بسيطة وسهلة الاستخدام لإنشاء نقاط طريق عن طريق تحديد موقعها الجغرافي. يمكن أن تكون هذه الميزة مفيدة للتنقل إلى أماكن معينة تعرفها فقط من خلال إحداثياتها: يمكن [حفظ](#save-as-track) النقاط المضافة كمسار GPX واستخدامها لاحقًا [للتنقل باستخدام GPX](../navigation/setup/gpx-navigation.md) أو [التنقل باستخدام العلامات](../navigation/setup/markers-navigation.md#add-gpx).

![نظرة عامة على إدخال الإحداثيات](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## كيفية الاستخدام {#how-to-use}

يمكنك إنشاء نقاط طريق من قائمة *[علامات الخريطة](../personal/markers.md#actions)* أو من [أماكني](../personal/myplaces.md) (انظر لقطات الشاشة). يرجى اتباع هذه المسارات للوصول إلى خيار إدخال الإحداثيات:
- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> ← زر الأرض في أسفل الشاشة*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![كيفية العثور على إدخال الإحداثيات](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![كيفية العثور على إدخال الإحداثيات](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

بعد فتح شاشة إدخال الإحداثيات:

- &nbsp;تأكد من استخدام [وحدات القياس](#coordinates-format) الصحيحة. إذا لم يكن الأمر كذلك، فغيّر تنسيق الإحداثيات في قائمة [الخيارات](#options).
- &nbsp;أدخل إحداثيات النقطة باستخدام [القالب](#add-a-point). بعد الضغط على زر *[إضافة](#add-a-point)*، ستتم إضافة نقطتك إلى *[قائمة النقاط](#points-list)*. إذا لزم الأمر، يمكنك إدخال نقاط إضافية.
- &nbsp;احفظ نقطتك (نقاطك) كـ *[مسار](../personal/tracks/manage-tracks.md)* باستخدام *[قائمة الخيارات](#options)* أو زر &#8592; *(العودة)*.

:::note
يمكن العثور على نتائج إنشاء النقاط بالإحداثيات - *[مسار GPX](../personal/tracks/manage-tracks.md)* مع نقاط الطريق - في قائمة [أماكني](../personal/myplaces.md) (*مجلد <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## الخيارات {#options}

باستخدام قائمة الخيارات، يمكنك [حفظ](#save-as-track) النقاط المضافة كمسار، أو تفعيل خيارات الإدخال المتقدمة (لوحة مفاتيح النظام وخط طول من رقمين)، أو تغيير تنسيق الإحداثيات.

![قائمة خيارات إدخال الإحداثيات Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - يفتح مربع حوار يسمح لك بحفظ النقطة (أو النقاط) التي تم إنشاؤها كمسار GPX. يمكنك تغيير اسم المسار أو تركه كافتراضي.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - يسمح لك باستخدام لوحة مفاتيح نظام Android لإدخال الإحداثيات.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - يتيح إدخال بيانات خط الطول برقمين فقط. يمكن أن يكون هذا مفيدًا لخطوط الطول من 0 درجة إلى 99 درجة (على سبيل المثال، في أوروبا).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - يسمح بتغيير تنسيق الإحداثيات للإدخال.

### تنسيق الإحداثيات {#coordinates-format}

عند إدخال الإحداثيات، من المهم التأكد من استخدام وحدات القياس المناسبة. نحن ندعم الدرجات العشرية (DD)، أو الدرجات والدقائق، أو الدرجات والدقائق والثواني (DMS).

|تنسيق الإحداثيات| مثال |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## إضافة نقطة {#add-a-point}

بعد تحديد الوحدات الصحيحة، أنت جاهز لإدخال إحداثيات نقاط الطريق المستقبلية.
تتكون شاشة إدخال الإحداثيات من العناصر التالية:

![قائمة إدخال الإحداثيات Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. يفتح قائمة *[الخيارات](#options)* (الموصوفة أعلاه).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. يستخدم لإدخال البيانات بالتنسيق المحدد (D - درجات، M - دقائق، S - ثواني). يمكنك تغيير تنسيق الإحداثيات في قائمة *[<Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;أزرار نصف الكرة *<Translate android="true" ids="navigate_point_latitude"/> و <Translate android="true" ids="navigate_point_longitude"/>*. تسمح لك بتغيير جوانب الأفق: *جنوب - شمال* و *غرب - شرق*.
- &nbsp;حقل *اسم النقطة*. يمكنك ترك الاسم الافتراضي أو إنشاء اسم خاص بك.
- &nbsp;زر *X*. يمسح حقل الإدخال للسطر المقابل.

### لوحة المفاتيح المختصرة {#short-keyboard}

لإدخال البيانات، يمكنك استخدام لوحة المفاتيح المختصرة (افتراضي) أو لوحة مفاتيح النظام (Android). لتغيير طريقة الإدخال، انتقل إلى قائمة *[الخيارات](#options)*. بعد إدخال خط العرض وخط الطول، يمكنك إضافة النقطة إلى *[القائمة](#points-list)* باستخدام زر *+إضافة*.

![إدخال الإحداثيات إضافة نقطة Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- زر *<Translate android="true" ids="shared_string_add"/>* يسمح بحفظ نقطة داخل *[قائمة النقاط](#points-list)*.
- زر *<Translate android="true" ids="shared_string_clear"/>* يعيد تعيين جميع البيانات المدخلة.
- &#9032; يسمح لك بالقفز إلى القيمة التالية.
- *أزرار لوحة المفاتيح* تسمح بإدخال البيانات، وحذفها، والقفز إلى قيمة الإحداثيات التالية، وإخفاء لوحة المفاتيح.

### قائمة النقاط {#points-list}

تظهر النقاط التي تم إنشاؤها بالفعل: الاسم، المسافة والاتجاه إلى هذه النقطة.

![إدخال الإحداثيات حفظ نقطة Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![إدخال الإحداثيات حفظ نقطة Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

يفتح الزر **⁝** قائمة إجراءات لتحرير أو حذف النقطة المحددة.
عند النقر على نقطة، يصبح من الممكن تغيير إحداثياتها. انقر على زر *تطبيق* لحفظ التغييرات.

## حفظ كمسار {#save-as-track}

لحفظ نقاطك كمسار، انقر على زر *العودة* ( &#8592; ) أو استخدم قائمة *[الخيارات](#options)*.

![إدخال الإحداثيات حفظ نقطة Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![إدخال الإحداثيات حفظ نقطة Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

في القائمة المنبثقة، يمكنك إدخال اسم مسار خاص بك أو حفظه افتراضيًا. انقر على <Translate android="true" ids="shared_string_save"/> لحفظ النقاط المضافة كمسار جديد.
ستجد مسارك في [قائمة أماكني](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).