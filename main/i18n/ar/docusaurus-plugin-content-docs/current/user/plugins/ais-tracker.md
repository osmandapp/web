---
source-hash: e993c17565a6856353f05b6dabe09c469fb505cb96a56e920bca6326fc3eb2e1
sidebar_position: 2
title:  متتبع سفن AIS
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

يعرض ملحق **متتبع سفن AIS** مواقع [نظام التعرف الآلي (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) ومعلومات مفصلة عن السفن القريبة. يتم استقبال بيانات AIS عبر اتصال شبكي من جهاز استقبال AIS خارجي.

:::caution إخلاء مسؤولية
**هذا الملحق هو مشروع هواية وغير مصمم للموثوقية أو الدقة. لا تعتمد على هذا البرنامج للملاحة أو لسلامة الحياة.**
:::


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم تفعيل القدرة على استخدام الخرائط عبر الإنترنت تلقائيًا في إصدار iOS من OsmAnd. لعرض الخرائط عبر الإنترنت في أندرويد، تحتاج إلى إجراء الإعدادات التالية:

1. [تفعيل](../plugins/index.md#enable--disable) ملحق **متتبع سفن AIS** في *القائمة الرئيسية ← الملحقات ← متتبع سفن AIS*.
2. تكوين [إعدادات AIS](../map/raster-maps.md#select-raster-maps)
3. تكوين **اتصال خادم AIS** أو توصيل **جهاز استقبال AIS خارجي**.
4. التحقق من عرض السفن على خريطة OsmAnd.

## السفن على الخريطة {#vessels-on-the-map}

يعمل نظام AIS على *ترددات VHF* (161.975 ميجاهرتز و 162.025 ميجاهرتز) وله نطاق إشارة محدود بسبب انتشار خط البصر.

***نطاق استقبال AIS النموذجي:***

- 15–20 ميلًا بحريًا (28–37 كم)
- يعتمد على ارتفاع الهوائي والظروف البيئية والعوائق

***عرض AIS على الخريطة:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![متتبع سفن AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

عند الإعداد بشكل صحيح، ستظهر مواقع السفن على الخريطة. الميزات الرئيسية:

- تتحرك السفن بناءً على السرعة والمسار في الوقت الفعلي.
- تدخل السفن الجديدة وتخرج من المنطقة المرئية ديناميكيًا.
- يؤدي النقر على سفينة إلى فتح معلومات مفصلة.


### معلومات سفينة AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![متتبع سفن AIS](@site/static/img/plugins/ais/ais_menu.png)  
![متتبع سفن AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

تنقل سفن AIS ثلاثة أنواع من البيانات:

1. المعلومات الثابتة (بيانات لا تتغير).  
    *تُرسل كل **6 دقائق** أو عند الطلب.*

    - **اسم السفينة** (*إذا تم تعيينه*)  
    - **MMSI (هوية الخدمة المتنقلة البحرية)** (*معرف فريد للسفينة مكون من 9 أرقام*)
    - **رقم IMO** (*إذا كان متاحًا*)  
    - **علامة النداء**  
    - **نوع السفينة** (*على سبيل المثال، سفينة شحن، ركاب، سفينة صيد*)  
    - **أبعاد السفينة** (*الطول والعرض*)  
    - **موضع هوائي AIS** (*بالنسبة لهيكل السفينة*)  

2. المعلومات الديناميكية (بيانات في الوقت الفعلي).  
    *تُرسل على فترات مختلفة حسب السرعة والمناورة.*

    - **إحداثيات السفينة (خط العرض وخط الطول)**  
    - **المسار فوق الأرض (COG)**  
    - **السرعة فوق الأرض (SOG)**  
    - **الاتجاه** (*الاتجاه الذي يشير إليه مقدمة السفينة*)
    - **حالة السفينة** (*قيد الإبحار، راسية، مناورة، إلخ.*)  
    - **معدل الدوران (ROT)** (*سرعة تغيير المسار*)  
    - **وقت آخر تحديث**  

3. معلومات الرحلة (يتم تعيينها يدويًا بواسطة الطاقم).  
    *تُرسل كل **6 دقائق**، ويتم تعيينها يدويًا بواسطة الطاقم*

    - **ميناء الوجهة**
    - **الوقت المقدر للوصول (ETA)**  
    - **الغاطس** (*عمق السفينة تحت سطح الماء*)  
    - **نوع الحمولة** (*إذا تم إرسالها*)
    - **عدد الأشخاص على متنها** (*اختياري*)  

### رموز ومفاتيح AIS {#ais-symbols-and-legends}

[إرشادات لعرض رموز AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| الرموز             | الوصف   |
|---------------------|---------------|
| | |
| **رموز أنواع السفن** |    |
| *مثلث أخضر*    | سفينة شحن    |
| *مثلث أزرق*     | سفينة ركاب |
| *مثلث أسود*    | سفينة صيد |
| *مثلث أصفر*   | قاطرة       |
| *مثلث أحمر*      | ناقلة        |
| *مثلث أبيض*    | سفينة عسكرية |
| *مثلث برتقالي*   | مركبة خاصة (مثل، مرشد، كاسحة جليد) |
| *مثلث أحمر وامض* | سفينة في محنة |
| | |
| **رموز المساعدات الملاحية** |    |
| *عوامة خضراء*              | علامة الجانب الأيمن (الجانب الأيمن من القناة) |
| *عوامة حمراء*                | علامة الجانب الأيسر (الجانب الأيسر من القناة) |
| *رمز المرساة*           | منطقة رسو |
| *رمز السفينة (SS)*        | محطة عبارات أو ركاب |
| *رمز رافعة الميناء*       | ميناء شحن |
| *دائرة سوداء*            | منصة بحرية |
| | |
| **مؤشرات الحالة** |    |
| *مثلث مصمت*  | سفينة متحركة |
| *مثلث مجوف* | راسية أو مربوطة |
| *سهم دوار*  | تجري مناورة |
| *أيقونة حمراء وامضة* | تنبيه طوارئ |
| *علامة تعجب برتقالية* | رسالة سلامة AIS |
| | |
| **مؤشرات المسار والسرعة** |    |
| *خط أزرق رفيع*  | المسار المخطط له |
| *خط منقط*     | المسار السابق |
| *أيقونة الساعة*      | الوقت المقدر للوصول (ETA) |
| *أيقونة الموجة*       | السرعة فوق الماء |

## إعدادات الملحق {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![إعدادات AIS](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

يقدم ملحق *متتبع سفن AIS* إعدادات متنوعة لتخصيص الملاحة والتفاعل للمستخدمين ذوي الإعاقة. يتم تطبيق هذه الإعدادات على جميع [الملفات الشخصية](../personal/profiles.md) في OsmAnd.

| الإعداد |  الوصف  | مثال  |
|---------|---------------|----------|
| | | |
| **إعدادات عنوان IP** | | |
| البروتوكول   | اختر البروتوكول لاستقبال بيانات AIS | `UDP/TCP` |
| عنوان IP | حدد عنوان IP لمصدر بيانات AIS (إذا تم استخدام TCP) | `192.168.200.16` |
| منفذ TCP   | حدد رقم منفذ TCP لبيانات AIS | `4001` |
| منفذ UDP   | حدد منفذ UDP لاستقبال AIS في OsmAnd  | `10110` |
| | | |
| **مهلة استقبال إشارة AIS** | |  |
| مهلة فقدان كائنات AIS     | تختفي السفن إذا لم يتم استقبال أي إشارة لفترة محددة | `3 - 20 min` |
| مهلة رؤية السفينة      | ستغير أيقونات السفن حالتها عند عدم استقبال أي إشارة | `2 - 15 min / Disabled` |
| | | |
| **تنبيهات أقرب نقطة اقتراب (CPA)** | | |
| وقت تحذير CPA | يتم تمييز السفينة باللون الأحمر إذا كان الوقت المتبقي لـ CPA أقل من هذا الحد | `1 - 60 min / Disabled` |
| مسافة تحذير CPA | يتم تمييز السفينة باللون الأحمر إذا كانت المسافة إلى CPA أقل من هذا الحد | `0.02 - 2 nautical miles` |


### وضع محاكاة AIS {#ais-simulation-mode}

> *يمكنك محاكاة مواقع سفن AIS باستخدام [ملحق تطوير OsmAnd](../plugins/development.md).*

1. **تنزيل ملفات نصوص بيانات AIS**:

    - [اختبار AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [اختبار AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [فردي 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **تحميل بيانات AIS إلى OsmAnd**  
افتح *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* وحدد أحد الملفات التي تم تنزيلها.

3. **عرض سفن AIS على الخريطة**  
ستظهر أيقونات السفن بناءً على البيانات المحاكاة. انقر على أيقونة السفينة لعرض معلومات مفصلة.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)
- [ملحق الخرائط البحرية](../../user/plugins/nautical-charts.md)