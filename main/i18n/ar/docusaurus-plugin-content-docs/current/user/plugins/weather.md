---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
sidebar_position: 17
title:  الطقس
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

:::info ميزة مدفوعة
 <ProFeature/> إضافة الطقس هي [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

تسمح لك طبقات خريطة الطقس التفاعلية في تطبيق OsmAnd بمراقبة درجة الحرارة والضغط الجوي وتغطية السحب وسرعة الرياح وهطول الأمطار في مدينتك أو أي مكان آخر على خريطة عالمية تفاعلية. توفر إضافة الطقس توقعات الطقس كل ساعة لمدة 7 أيام قادمة مباشرة على خريطة OsmAnd. يمكن أيضًا تنزيل معلومات الطقس للاستخدام دون اتصال بالإنترنت.

مصدر البيانات لإضافة الطقس هو [نظام التنبؤ العالمي](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) الذي تديره خدمة الطقس الوطنية الأمريكية (NWS) والمركز الأوروبي للتنبؤات الجوية متوسطة المدى ([ECMWF](https://www.ecmwf.int/)).


## معلمات الإعداد المطلوبة {#required-setup-parameters}

الإعدادات التالية *مطلوبة* لعرض الطقس على خريطة OsmAnd:

**1.** [شراء **اشتراك OsmAnd Pro**](../purchases/).

**2.** [تمكين](../plugins/#enable--disable) إضافة الطقس في قسم *الإضافات* من *القائمة الرئيسية*.

**3.** [تحديد **وحدات القياس**](#weather-settings) لظواهر الطقس.

**4.** [عرض **طبقات الطقس**](#customize-weather-layers) على الخريطة باستخدام عنصر قائمة الطقس في قائمة "تكوين الخريطة" (تذكر أن تقوم بالتصغير).

**5.** [عرض **توقعات الطقس**](#weather-forecast-screen) للمنطقة المحددة (تسمح هذه القائمة بعدم ازدحام الشاشة الرئيسية لخريطة OsmAnd بطبقات الطقس).

**6.** [تنزيل](#offline-forecast) توقعات الطقس إذا كنت تخطط لاستخدامها دون اتصال بالإنترنت.

**7.** [تمكين **أدوات الطقس**](#weather-widgets) إذا كنت ترغب في رؤية معلومات الطقس المحدثة بشكل يومي.

:::caution العرض المطلوب
إضافة الطقس متاحة فقط مع محرك عرض الخرائط [الإصدار 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## عرض الطقس على الخريطة {#display-weather-on-the-map}

### شاشة توقعات الطقس {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="أندرويد">

اذهب إلى: *الإضافة الممكّنة ← <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![لوحة معلومات الطقس أندرويد 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

اذهب إلى: *الإضافة الممكّنة ← <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![لوحة معلومات الطقس في iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

تحتوي القائمة الجانبية الرئيسية على عنصر قائمة **الطقس** المخصص الذي يوفر وصولاً سريعًا إلى جميع أدوات الطقس. تعرض *شاشة توقعات الطقس* معلومات حول *درجة الحرارة*، و*الضغط الجوي*، و*سرعة الرياح*، و*تغطية السحب*، و*هطول الأمطار*.

في أسفل الشاشة يوجد *شريط أدوات الطقس*. يمكنك استخدام أزرار الأيام وشريط تمرير الوقت لضبط الوقت المحدد الذي سيتم فيه عرض توقعات الطقس.

### مصدر البيانات {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="أندرويد">

![مصدر البيانات أندرويد](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![مصدر البيانات iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

يمكنك اختيار مصدر توقعات الطقس الذي يستخدمه OsmAnd لعرض البيانات على شاشة الطقس:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *اختيار مصدر البيانات*

يتم دعم مصدري توقعات الطقس اثنين:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(نظام التنبؤ العالمي)** – المصدر الافتراضي الذي تديره NOAA/NWS. يوفر بيانات الطقس الكاملة، بما في ذلك درجة الحرارة، والضغط، والرطوبة، وطبقات الرياح والسحب.

[**ECMWF**](https://www.ecmwf.int/) **(المركز الأوروبي للتنبؤات الجوية متوسطة المدى)** – مصدر توقعات بديل. يقدم بيانات عالية الجودة لدرجة الحرارة، وهطول الأمطار، والضغط، لكنه لا يوفر معلومات الرياح أو السحب. عند استخدام ECMWF، يتم عرض المعاملات غير المتاحة كـ “–”، وتظهر الطبقات الجوية المقابلة معطلة.

كيفية تأثير مصدر البيانات على عرض الطقس:
- يتم تحديث الخريطة، والرسوم البيانية، وخط الزمن، وقيم الطقس على الشاشة فورًا بعد تبديل المصدر.
- يتم عرض المعاملات المتاحة فقط للمزود المحدد.
- تقوم أدوات الطقس بالتحديث تلقائيًا لاستخدام المصدر المختار.
- إذا قمت بتنزيل توقعات الطقس مسبقًا، يستخدم OsmAnd البيانات المقابلة للمزود المحدد.
- يستخدم GFS وECMWF ذاكرات تخزين مؤقت منفصلة. يقوم تبديل المصدر بتحميل أو تحديث بلاطات الطقس ذات الصلة.


### تخصيص طبقات الطقس {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="أندرويد">

اذهب إلى: *الإضافة الممكّنة ← <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![لوحة معلومات الطقس أندرويد 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

اذهب إلى: *الإضافة الممكّنة ← <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![لوحة معلومات الطقس في iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

لعرض طبقات الطقس على شاشة خريطة OsmAnd، تحتاج إلى استخدام قائمة *تكوين الخريطة*. اذهب إلى القائمة، وابحث عن عنصر *الطقس* في القائمة (متاح فقط عند تمكين الإضافة)، وانقر عليه.

في هذه القائمة، يمكنك تغيير **الرؤية** و[الإعدادات](#weather-settings) لكل طبقة، وتحديد نوع خطوط الكفاف، وتنزيل [توقعات الطقس لمدة 7 أيام دون اتصال بالإنترنت](#offline-forecast) (*متاح فقط لنظام أندرويد هنا*).


### إعدادات الطقس {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

- *القائمة الرئيسية ← الإضافات ← الطقس ← الإعدادات*
- *القائمة الرئيسية ← الإعدادات ← الملف الشخصي ← إعدادات الإضافات ← الطقس*

![إعدادات الطقس أندرويد](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![إعدادات الطقس 2 أندرويد](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *القائمة الرئيسية ← الإعدادات ← الملف الشخصي ← الإضافات ← الطقس*

![إعدادات الطقس iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![إعدادات الطقس iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

من المهم تحديد وحدات القياس التي تناسبك لرؤية [بيانات الطقس](#weather-layers) على الخريطة وفي قسم [أدوات الطقس](#weather-widgets) على الشاشة. يمكنك اختيار وحدات القياس المناسبة لكل معلمة أو استخدام القيم الافتراضية (*iOS فقط*). في إصدار iOS من تطبيق OsmAnd، يمكنك أيضًا تمكين خيار التوقعات دون اتصال بالإنترنت لتجنب استخدام بيانات الجوال أثناء السفر.

:::note
في إصدار iOS من OsmAnd، يمكنك تغيير وحدات القياس ومستوى الشفافية في القائمة التي تفتح بعد النقر المطول على أيقونة طبقة الخريطة المطلوبة.
:::

### طبقات الطقس {#weather-layers}

يتم تقديم جميع بيانات الطقس كطبقات خريطة منفصلة. لرؤية طبقات الطقس على الخريطة، تحتاج إلى التصغير، فهي متاحة فقط على مقاييس التكبير/التصغير من 2 إلى 12. تستخدم طبقات الطقس [لوحات ألوان الطقس](../personal/color-palette-schemes.md#weather) لتلوين الخريطة، ويمكن [تغيير](../personal/color-palette-schemes.md#edit-palette-file) هذه اللوحات إذا لزم الأمر.

| |  
|------------|  
| **طبقة هطول الأمطار** تعرض معلومات حول أحداث الطقس عندما يسقط الماء في حالات تجميعية مختلفة من السماء إلى الأرض. الهطول هو المطر أو الثلج أو الصقيع أو البرد. يتم تدريج مقياس الهطول بالمليمترات (أو البوصات) من الماء الذي يسقط على متر مربع واحد في 24 ساعة. 1 ملم من المطر يعادل 1 لتر من الماء لكل متر مربع. |  
|![مخطط هطول الأمطار](@site/static/img/plugins/weather/precipitation.png)|  
| **درجة الحرارة** تعبر عن الإدراك الكمي للحرارة والبرودة. تقاس بالدرجات. في OsmAnd، يمكنك الاختيار بين مقياس سلسيوس وفهرنهايت. |  
|![مخطط درجة الحرارة](@site/static/img/plugins/weather/temperature.png)|  
| **الرياح** هي حركة الهواء الناتجة عن التسخين غير المتساوي للأرض بواسطة الشمس ودورانها. يمكن أن تتراوح الرياح من نسيم خفيف إلى كوارث طبيعية مثل الأعاصير والزوابع. في OsmAnd، يمكن عرض سرعة الرياح بالمتر في الثانية (m/s)، أو الكيلومتر في الساعة (km/h)، أو الميل في الساعة (mph)، أو العقدة (kt). |  
|![مخطط الرياح](@site/static/img/plugins/weather/wind.png)|  
| **تغطية السحب** هي متوسط جزء السماء المغطى بالغيوم عند ملاحظته من موقع معين. تقاس بـ %. |  
|![مخطط السحب](@site/static/img/plugins/weather/clouds.png)|  
| **الضغط الجوي** ناتج عن وزن الهواء فوق نقطة القياس. ينخفض مع زيادة الارتفاع. يمكن عرض الضغط الجوي بالهكتوباسكال (hPa)، أو ملليمتر زئبق (mmHg)، أو بوصة زئبق (inHg). |  
| ![مخطط الضغط](@site/static/img/plugins/weather/pressure.png) |  
| **رسوم الرياح المتحركة** تتضمن تمثيلات ديناميكية تظهر اتجاه الرياح وسرعتها عبر المنطقة. |  
| ![رسوم الرياح المتحركة](@site/static/img/plugins/weather/wind_annimation.gif) |  


### دمج الخرائط {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![دمج طبقات الطقس على أندرويد](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![دمج طبقات الطقس على أندرويد](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![دمج طبقات الطقس على iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![دمج طبقات الطقس على iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

للحصول على معلومات شاملة عن الطقس، يمكنك استخدام طبقات الخريطة بشكل منفصل أو دمجها بسهولة. يمكن أيضًا إضافة خطوط تساوي القيم من نوع معين إلى طبقة الطقس. ما عليك سوى النقر على زر *الطبقات* أو *خطوط تساوي القيم* على الشاشة.


### الإجراءات السريعة للطبقات {#quick-actions-for-layers}

![إجراءات سريعة لطبقات الطقس](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

لتبديل رؤية طبقات الطقس، يمكنك استخدام أزرار *الإجراء السريع* على شاشة الخريطة. يمكن العثور على الإعدادات العامة لإظهار أو إخفاء الطبقات في قسم [الطقس](#weather-forecast-screen) المنفصل في *القائمة الرئيسية*. في مقالة [الإجراء السريع](../widgets/quick-action.md#configure-map)، ستجد قائمة بالطبقات المتاحة للعرض. إذا كنت بحاجة إلى وصول سريع إلى تكوين الخريطة هذا، فاستخدم أداة *الزر المخصص*.

- اذهب إلى [إضافة إجراء](../widgets/quick-action.md#custom-buttons): *القائمة ← تكوين الشاشة ← الأزرار المخصصة ← الإجراء السريع ← إضافة إجراء ← تكوين الخريطة*.
- أضف زرًا واحدًا أو أكثر من أزرار الإجراءات السريعة لتغيير رؤية طبقة طقس معينة.


## التوقعات دون اتصال بالإنترنت {#offline-forecast}

### ذاكرة التخزين المؤقت (الكاش) {#cache}

عندما تكون علامة تبويب الطقس مفتوحة، ما لم يُحدد خلاف ذلك، يتم تنزيل معلومات الطقس المطلوبة من الشبكة. يمكنك استخدام [توقعات الطقس](#download-forecast) المحملة مسبقًا على أجهزتك. يتم تخزين معلومات الطقس مؤقتًا تلقائيًا بعد التنزيل ويمكن استخدامها دون اتصال بالإنترنت حتى انتهاء صلاحية التوقعات.

:::tip
على أجهزة أندرويد، يمكنك التحقق من وقت تنزيل بيانات الطقس عن طريق النقر على *أداة الطقس*. يجب تمكين إضافة OsmAnd Development.
![تاريخ تخزين الطقس المؤقت أندرويد](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### تنزيل التوقعات {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إضافة الطقس في أندرويد](@site/static/img/plugins/weather/download_weather_android.png) ![إضافة الطقس في أندرويد](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![إضافة الطقس في iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![إضافة الطقس في iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

لكل بلد، يمكنك تنزيل **التوقعات دون اتصال بالإنترنت** (لمدة تصل إلى 7 أيام). كلما كان التاريخ أقرب إلى التاريخ الحالي، كانت التوقعات أكثر دقة. إذا كنت ترغب في استخدام توقعات الطقس دون اتصال بالإنترنت، فيجب عليك تنزيل بيانات الطقس مسبقًا.

في قائمة تنزيل التوقعات، يمكنك الحصول على معلومات وتعيين معلمات للحفاظ على تحديث بيانات الطقس.

- **تم الإنشاء** (*أندرويد*) / **تم التحديث** (*iOS*). يوضح متى تم إجراء آخر تحديث.
- **التحديث التالي** (*iOS*). متى سيكون التحديث التالي متاحًا.
- **الحجم** (*أندرويد*) / **حجم التحديثات** (*iOS*). يوضح حجم جميع التحديثات.
- زر **تحديث** (*أندرويد*) / **تحديث الآن** (*iOS*). عند التنشيط، يسمح لك بتحديث بيانات الطقس يدويًا دون انتظار التحديث التلقائي.
- **تكرار التحديث** (*iOS*). يمكن ضبطه على 12 ساعة، أو 24 ساعة، أو أسبوعيًا.
- *التحديث عبر Wi-Fi فقط* (*iOS*). قم بتمكين هذا الخيار إذا كنت لا ترغب في استخدام بيانات الجوال للتنزيلات.
- زر **إزالة** *سلة المهملات* (*أندرويد*) / **إزالة التوقعات** (*iOS*). يسمح لك بحذف جميع بيانات التوقعات لهذه المنطقة.
- زر **تعديل** *القلم الرصاص* (*أندرويد*). يسمح لك بإعادة تسمية ملف الطقس.

**ملاحظة:** بعض البلدان، مثل الولايات المتحدة وكندا، تستخدم ملف توقعات دون اتصال واحد للبلد بأكمله. هذا يقلل من عدد التنزيلات ويبسط إدارة بيانات الطقس.

:::info  
يتم تحديث بيانات الطقس كل 6 ساعات (جميع التحديثات الأربعة من [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) و 3 من [ECMWF](https://www.ecmwf.int/)) وتصبح متاحة في OsmAnd مع تأخير قصير، حيث تستغرق عملية الحساب عدة ساعات قبل الإصدار (عادة حوالي 07:00 بالتوقيت العالمي المنسق).
:::


## أدوات الطقس {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="shared_string_weather"/>*

![أدوات الطقس على أندرويد](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![أدوات الطقس على أندرويد](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate ios="true" ids="shared_string_weather"/>*

![أدوات الطقس على iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[أدوات الطقس](../widgets/info-widgets.md#weather-widgets) مثل درجة الحرارة، والضغط الجوي، والرياح، والسحب، وهطول الأمطار تعرض بيانات الطقس الحالية **للنقطة المركزية على الخريطة**.

- يتم عرض أدوات الطقس فقط عند تشغيل [شاشة الطقس](#weather-forecast-screen).
- لتنشيط أدوات الطقس، حدد عنصر القائمة الرئيسية *تكوين الشاشة*، واللوحة التي سيتم وضعها عليها، والأدوات المطلوبة من القائمة.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)