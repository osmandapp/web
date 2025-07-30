---
source-hash: eafb2c57934c3fbb3a094db82d063658f9ebd6dc575f16b51dfce4826f7df701
sidebar_position: 2
title:  متعقب سفن AIS
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


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## نظرة عامة {#overview}

يعرض المكون الإضافي **متعقب سفن AIS** مواقع [نظام التعرف التلقائي (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) ومعلومات مفصلة حول السفن القريبة. يتم استلام بيانات AIS عبر اتصال شبكة من جهاز استقبال AIS خارجي.

:::caution إخلاء مسؤولية
**هذا المكون الإضافي هو مشروع هواية وغير مصمم للموثوقية أو الدقة. لا تعتمد على هذا البرنامج للملاحة أو سلامة الأرواح.**
:::


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم تمكين القدرة على استخدام الخرائط عبر الإنترنت تلقائيًا في إصدار iOS من OsmAnd. لعرض الخرائط عبر الإنترنت في Android، تحتاج إلى إجراء الإعدادات التالية:

1. [تمكين](../plugins/index.md#enable--disable) المكون الإضافي **متعقب سفن AIS** في *القائمة الرئيسية ← المكونات الإضافية ← متعقب سفن AIS*.
2. تكوين [إعدادات AIS](../map/raster-maps.md#select-raster-maps)
3. تكوين **اتصال خادم AIS** أو توصيل **جهاز استقبال AIS خارجي**.
4. تحقق من عرض السفن على خريطة OsmAnd.

## السفن على الخريطة {#vessels-on-the-map}

يعمل AIS على *ترددات VHF* (161.975 ميجاهرتز و 162.025 ميجاهرتز) ولديه نطاق إشارة محدود بسبب انتشار خط البصر.

***نطاق استقبال AIS النموذجي:***

- 15-20 ميل بحري (28-37 كم)
- يعتمد على ارتفاع الهوائي، والظروف البيئية، والعوائق

***عرض AIS على الخريطة:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![متعقب سفن AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

عند الإعداد الصحيح، ستظهر مواقع السفن على الخريطة. الميزات الرئيسية:

- تتحرك السفن بناءً على السرعة والمسار في الوقت الفعلي.
- تدخل السفن الجديدة وتخرج من المنطقة المرئية ديناميكيًا.
- يؤدي النقر على سفينة إلى فتح معلومات مفصلة.


### معلومات سفينة AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![متعقب سفن AIS](@site/static/img/plugins/ais/ais_menu.png)
![متعقب سفن AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

تنقل سفن AIS ثلاثة أنواع من البيانات:

1. معلومات ثابتة (بيانات غير متغيرة).
    *تُرسل كل **6 دقائق** أو عند الطلب.*

    - **اسم السفينة** (*إذا تم تعيينه*)
    - **MMSI (هوية خدمة الهاتف المحمول البحري)** (*معرف سفينة فريد مكون من 9 أرقام*)
    - **رقم IMO** (*إذا كان متاحًا*)
    - **إشارة النداء**
    - **نوع السفينة** (*على سبيل المثال، سفينة شحن، سفينة ركاب، سفينة صيد*)
    - **أبعاد السفينة** (*الطول والعرض*)
    - **موقع هوائي AIS** (*بالنسبة لهيكل السفينة*)

2. معلومات ديناميكية (بيانات في الوقت الفعلي).
    *تُرسل على فترات مختلفة حسب السرعة والمناورة.*

    - **إحداثيات السفينة (خط العرض وخط الطول)**
    - **المسار فوق الأرض (COG)**
    - **السرعة فوق الأرض (SOG)**
    - **الاتجاه** (*الاتجاه الذي يشير إليه مقدمة السفينة*)
    - **حالة السفينة** (*في طريقها، راسية، تناور، إلخ.*)
    - **معدل الدوران (ROT)** (*سرعة تغيير المسار*)
    - **وقت آخر تحديث**

3. معلومات الرحلة (يتم تعيينها يدويًا بواسطة الطاقم).
    *تُرسل كل **6 دقائق**، ويتم تعيينها يدويًا بواسطة الطاقم*

    - **ميناء الوجهة**
    - **الوقت المقدر للوصول (ETA)**
    - **الغاطس** (*عمق مياه السفينة تحت السطح*)
    - **نوع الحمولة** (*إذا تم نقلها*)
    - **عدد الأشخاص على متن السفينة** (*اختياري*)

### رموز ومفتاح AIS {#ais-symbols-and-legends}

[إرشادات عرض رموز AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| الرموز | الوصف |
|---|---|
| | |
| **رموز أنواع السفن** | |
| *مثلث أخضر* | سفينة شحن |
| *مثلث أزرق* | سفينة ركاب |
| *مثلث أسود* | سفينة صيد |
| *مثلث أصفر* | قاطرة |
| *مثلث أحمر* | ناقلة |
| *مثلث أبيض* | سفينة عسكرية |
| *مثلث برتقالي* | حرفة خاصة (مثل، قارب إرشاد، كاسحة جليد) |
| *مثلث أحمر وامض* | سفينة في محنة |
| | |
| **رموز المساعدات الملاحية** | |
| *عوامة خضراء* | علامة الميمنة (الجانب الأيمن من القناة) |
| *عوامة حمراء* | علامة الميسرة (الجانب الأيسر من القناة) |
| *رمز المرساة* | منطقة رسو |
| *رمز السفينة (SS)* | عبّارة أو محطة ركاب |
| *رمز رافعة الميناء* | ميناء شحن |
| *دائرة سوداء* | منصة بحرية |
| | |
| **مؤشرات الحالة** | |
| *مثلث مصمت* | سفينة متحركة |
| *مثلث مجوف* | راسية أو مربوطة |
| *سهم دوار* | تخضع لمناورة |
| *أيقونة حمراء وامضة* | تنبيه طوارئ |
| *علامة تعجب برتقالية* | رسالة أمان AIS |
| | |
| **مؤشرات المسار والسرعة** | |
| *خط أزرق رفيع* | مسار مخطط |
| *خط منقط* | مسار سابق |
| *أيقونة الساعة* | الوقت المقدر للوصول (ETA) |
| *أيقونة الموجة* | السرعة فوق الماء |

## إعدادات المكون الإضافي {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![إعدادات AIS](@site/static/img/plugins/ais/ais_settings_2.png)

</TabItem>

</Tabs>

يقدم المكون الإضافي *متعقب سفن AIS* إعدادات متنوعة لتخصيص الملاحة والتفاعل للمستخدمين ذوي الإعاقة. يتم تطبيق هذه الإعدادات على جميع [الملفات الشخصية](../personal/profiles.md) في OsmAnd.

| الإعداد | الوصف | مثال |
|---|---|---|
| | | |
| **إعدادات عنوان IP** | | |
| البروتوكول | اختر البروتوكول لاستقبال بيانات AIS | `UDP/TCP` |
| عنوان IP | حدد IP لمصدر بيانات AIS (إذا تم استخدام TCP) | `192.168.200.16` |
| منفذ TCP | حدد رقم منفذ TCP لبيانات AIS | `4001` |
| منفذ UDP | حدد منفذ UDP لاستقبال OsmAnd AIS | `10110` |
| | | |
| **مهلة استقبال إشارة AIS** | | |
| مهلة الأجسام AIS المفقودة | تختفي السفن إذا لم يتم استقبال إشارة لفترة زمنية محددة | `3 - 20 دقيقة` |
| مهلة رؤية السفينة | ستتغير أيقونات السفن حالتها عندما لا يتم استقبال إشارة | `2 - 15 دقيقة / معطل` |
| | | |
| **تنبيهات أقرب نقطة اقتراب (CPA)** | | |
| وقت تحذير CPA | يتم تمييز السفينة باللون الأحمر إذا كان الوقت حتى CPA أقل من هذا الحد | `1 - 60 دقيقة / معطل` |
| مسافة تحذير CPA | يتم تمييز السفينة باللون الأحمر إذا كانت المسافة حتى CPA أقل من هذا الحد | `0.02 - 2 ميل بحري` |


### وضع محاكاة AIS {#ais-simulation-mode}

> *يمكنك محاكاة مواقع سفن AIS باستخدام [المكون الإضافي لتطوير OsmAnd](../plugins/development.md).*

1. **تنزيل ملفات نص بيانات AIS**:

    - [اختبار AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [اختبار AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [مفرد 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **تحميل بيانات AIS إلى OsmAnd**
افتح *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* وحدد أحد الملفات التي تم تنزيلها.

3. **عرض سفن AIS على الخريطة**
ستظهر أيقونات السفن بناءً على البيانات المحاكاة. انقر على أيقونة السفينة لعرض معلومات مفصلة.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)
- [المكون الإضافي البحري](../../user/plugins/nautical-charts.md)

> *آخر تحديث: مارس 2025*