---
source-hash: e5fd3ea3059108d94fc75d50becf312a8c006b80209c72a142b97f415bb426ca
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
 <ProFeature/> يعتبر مكون الطقس الإضافي ميزة [مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

تتيح لك طبقات خرائط الطقس التفاعلية في تطبيق OsmAnd مراقبة درجة الحرارة، والضغط الجوي، وتغطية السحب، وسرعة الرياح، وهطول الأمطار في مدينتك أو أي موقع آخر على خريطة عالمية تفاعلية. يوفر مكون الطقس الإضافي توقعات جوية كل ساعة لمدة 7 أيام قادمة مباشرة على خريطة OsmAnd. يمكن أيضًا تنزيل معلومات الطقس للاستخدام دون اتصال بالإنترنت.

مصدر البيانات لمكون الطقس الإضافي هو [نظام التنبؤ العالمي](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) الذي تديره خدمة الطقس الوطنية بالولايات المتحدة (NWS) والمركز الأوروبي للتنبؤات الجوية متوسطة المدى ([ECMWF](https://www.ecmwf.int/)).

## معلمات الإعداد المطلوبة {#required-setup-parameters}

الإعدادات التالية *مطلوبة* لعرض الطقس على خريطة OsmAnd:

**1.** [شراء **اشتراك OsmAnd Pro**](../purchases/).

**2.** [تمكين](../plugins/#enable--disable) مكون الطقس الإضافي في قسم *المكونات الإضافية* من *القائمة الرئيسية*.

**3.** [تحديد **وحدات القياس**](#weather-settings) لظواهر الطقس.

**4.** [عرض **طبقات الطقس**](#customize-weather-layers) على الخريطة باستخدام عنصر قائمة الطقس في قائمة تكوين الخريطة (تذكر أن تقوم بالتصغير).

**5.** [عرض **توقعات الطقس**](#weather-forecast-screen) للمنطقة المحددة (تسمح هذه القائمة بأن تكون الشاشة الرئيسية لخريطة OsmAnd غير مزدحمة بطبقات الطقس).

**6.** [تنزيل](#offline-forecast) توقعات الطقس إذا كنت تخطط لاستخدامها دون اتصال بالإنترنت.

**7.** [تمكين **أدوات الطقس**](#weather-widgets) إذا كنت ترغب في رؤية معلومات الطقس المحدثة يوميًا.

:::caution العرض المطلوب
يتوفر مكون الطقس الإضافي فقط مع محرك عرض الخرائط [الإصدار 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::

## عرض الطقس على الخريطة {#display-weather-on-the-map}

### شاشة توقعات الطقس {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *المكون الإضافي المُمكّن ← <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *المكون الإضافي المُمكّن ← <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

تحتوي القائمة الجانبية الرئيسية على عنصر قائمة مخصص **للطقس** يوفر وصولاً سريعًا إلى جميع أدوات الطقس. تعرض *شاشة توقعات الطقس* معلومات حول *درجة الحرارة*، و*الضغط الجوي*، و*سرعة الرياح*، و*تغطية السحب*، و*هطول الأمطار*.

يوجد في أسفل الشاشة *شريط أدوات الطقس*. يمكنك استخدام أزرار الأيام وشريط تمرير الوقت لتعيين الوقت المحدد الذي سيتم فيه عرض توقعات الطقس.

### تخصيص طبقات الطقس {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *المكون الإضافي المُمكّن ← <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *المكون الإضافي المُمكّن ← <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

لعرض طبقات الطقس على شاشة خريطة OsmAnd، تحتاج إلى استخدام *قائمة تكوين الخريطة*. انتقل إلى القائمة، وابحث عن عنصر *الطقس* في القائمة (متاح فقط عند تمكين المكون الإضافي)، وانقر عليه.

في هذه القائمة، يمكنك تغيير **الرؤية** و[الإعدادات](#weather-settings) لكل طبقة، وتحديد نوع خطوط الكنتور، وتنزيل [توقعات الطقس لمدة 7 أيام دون اتصال بالإنترنت](#offline-forecast) (*متاح فقط لأندرويد هنا*).

### إعدادات الطقس {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

- *القائمة الرئيسية ← المكونات الإضافية ← الطقس ← الإعدادات*
- *القائمة الرئيسية ← الإعدادات ← الملف الشخصي ← إعدادات المكونات الإضافية ← الطقس*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *القائمة الرئيسية ← الإعدادات ← الملف الشخصي ← المكونات الإضافية ← الطقس*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

من المهم أن تقرر الوحدات التي تناسبك لعرض [بيانات الطقس](#weather-layers) على الخريطة وفي قسم [أدوات الطقس](#weather-widgets) من الشاشة. يمكنك اختيار وحدات القياس المناسبة لكل معلمة أو استخدام القيم الافتراضية (*iOS فقط*). في إصدار iOS من تطبيق OsmAnd، يمكنك أيضًا تمكين خيار التوقعات دون اتصال بالإنترنت لتجنب استخدام بيانات الهاتف المحمول أثناء السفر.

:::note
في إصدار iOS من OsmAnd، يمكنك تغيير وحدات القياس ومستوى الشفافية في القائمة التي تفتح بعد الضغط المطول على أيقونة طبقة الخريطة المطلوبة.
:::

### طبقات الطقس {#weather-layers}

تُعرض جميع بيانات الطقس كطبقات خرائط منفصلة. لرؤية طبقات الطقس على الخريطة، تحتاج إلى التصغير، فهي متاحة فقط في مقاييس التكبير من 2 إلى 12. تستخدم طبقات الطقس [لوحات ألوان الطقس](../personal/color-palette-schemes.md#weather) لتلوين الخريطة، ويمكن [تغيير هذه اللوحات](../personal/color-palette-schemes.md#edit-palette-file) إذا لزم الأمر.

| |
|------------|
| **طبقة الهطول** تعرض معلومات حول الظواهر الجوية عندما تسقط المياه في حالات تجميع مختلفة من السماء إلى الأرض. الهطول هو المطر، الثلج، المطر المتجمد، أو البرد. يتم تدرج مقياس الهطول بالمليمترات (أو البوصات) من الماء الذي يسقط على 1 متر مربع في 24 ساعة. 1 ملم من المطر يعادل 1 لتر من الماء لكل 1 متر مربع. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| **درجة الحرارة** تعبر عن الإدراك الكمي للحرارة والبرودة. تقاس بالدرجات. في OsmAnd، يمكنك الاختيار بين مقياس مئوي وفهرنهايت. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| **الرياح** هي حركة الهواء الناتجة عن تسخين الأرض غير المتساوي بواسطة الشمس ودورانها الخاص. يمكن أن تتراوح الرياح من نسائم خفيفة إلى كوارث طبيعية مثل الأعاصير والزوابع. في OsmAnd، يمكن عرض سرعة الرياح بالمتر في الثانية (م/ث)، الكيلومتر في الساعة (كم/س)، الميل في الساعة (ميل/س)، والعقدة (عقدة). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| **تغطية السحب** هي متوسط جزء السماء المغطى بالسحب عند المراقبة من موقع معين. تقاس بالنسبة المئوية. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| **الضغط الجوي** ناتج عن وزن الهواء فوق نقطة القياس. ينخفض مع زيادة الارتفاع. يمكن عرض الضغط الجوي بالهكتوباسكال (hPa)، مليمترات الزئبق (mmHg)، وبوصات الزئبق (inHg). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| **رسوم متحركة للرياح** تتضمن تمثيلات ديناميكية تظهر اتجاه الرياح وسرعتها عبر المنطقة. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |

### دمج الخرائط {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

للحصول على معلومات شاملة عن الطقس، يمكنك استخدام طبقات الخرائط بشكل منفصل أو دمجها بسهولة. يمكن أيضًا إضافة خطوط الكنتور من نوع معين إلى طبقة الطقس. ما عليك سوى النقر على زر *الطبقات* أو *خطوط الكنتور* على الشاشة.

### إجراءات سريعة للطبقات {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

لتبديل رؤية طبقات الطقس، يمكنك استخدام أزرار *الإجراء السريع* على شاشة الخريطة. يمكن العثور على الإعدادات العامة لإظهار أو إخفاء الطبقات في [قسم الطقس](#weather-forecast-screen) المنفصل من *القائمة الرئيسية*. في مقال [الإجراء السريع](../widgets/quick-action.md#configure-map)، ستجد قائمة بالطبقات المتاحة للعرض. إذا كنت بحاجة إلى وصول سريع إلى هذا التكوين للخريطة، فاستخدم أداة *الزر المخصص*.

- انتقل إلى [إضافة إجراء](../widgets/quick-action.md#custom-buttons): *القائمة ← تكوين الشاشة ← أزرار مخصصة ← إجراء سريع ← إضافة إجراء ← تكوين الخريطة*.
- أضف زرًا واحدًا أو أكثر من أزرار QA لتغيير رؤية طبقة طقس معينة.

## التوقعات دون اتصال بالإنترنت {#offline-forecast}

### ذاكرة التخزين المؤقت {#cache}

عند فتح علامة تبويب الطقس، ما لم يُحدد خلاف ذلك، يتم تنزيل معلومات الطقس المطلوبة من الشبكة. يمكنك استخدام [توقعات الطقس](#download-forecast) المحملة مسبقًا على أجهزتك. يتم تخزين معلومات الطقس مؤقتًا تلقائيًا بعد التنزيل ويمكن استخدامها دون اتصال بالإنترنت حتى انتهاء صلاحية التوقعات.

:::tip
على أجهزة أندرويد، يمكنك التحقق من وقت تنزيل بيانات الطقس بالنقر على *أداة الطقس*. يجب تمكين مكون OsmAnd Development الإضافي.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### تنزيل التوقعات {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

لكل بلد، يمكنك تنزيل **توقعات دون اتصال بالإنترنت** (حتى 7 أيام). كلما اقتربت من التاريخ الحالي، كانت أكثر دقة. إذا كنت ترغب في استخدام توقعات الطقس دون اتصال بالإنترنت، يجب عليك تنزيل بيانات الطقس مسبقًا.

في قائمة تنزيل التوقعات، يمكنك الحصول على معلومات وتعيين معلمات للحفاظ على بيانات الطقس محدثة.

- **تم الإنشاء** (*أندرويد*) / **تم التحديث** (*iOS*). يظهر متى تم آخر تحديث.
- **التحديث التالي** (*iOS*). متى سيكون التحديث التالي متاحًا.
- **الحجم** (*أندرويد*) / **حجم التحديثات** (*iOS*). يظهر حجم جميع التحديثات.
- زر **تحديث** (*أندرويد*) / **تحديث الآن** (*iOS*). عند التفعيل، يسمح لك بتحديث بيانات الطقس يدويًا دون انتظار التحديث التلقائي.
- **تكرار التحديث** (*iOS*). يمكن تعيينه إلى 12 ساعة، 24 ساعة، أو أسبوعيًا.
- *التحديث عبر Wi-Fi فقط* (*iOS*). قم بتمكين هذا الخيار إذا كنت لا ترغب في استخدام بيانات الهاتف المحمول للتنزيلات.
- زر **إزالة** *سلة المهملات* (*أندرويد*) / **إزالة التوقعات** (*iOS*). يسمح لك بحذف جميع بيانات التوقعات لهذه المنطقة.
- زر **تعديل** *قلم رصاص* (*أندرويد*). يسمح لك بإعادة تسمية ملف الطقس.

:::info
يُنشئ OsmAnd توقعات جديدة كل 6 ساعات.
:::

## أدوات الطقس {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

تعرض [أدوات الطقس](../widgets/info-widgets.md#weather-widgets) مثل درجة الحرارة، والضغط الجوي، والرياح، والسحب، والهطول بيانات الطقس الحالية للنقطة **المركزية على الخريطة**.

- لا تُعرض أدوات الطقس إلا عند تشغيل [شاشة الطقس](#weather-forecast-screen).
- لتفعيل أدوات الطقس، حدد عنصر القائمة الرئيسية *تكوين الشاشة*، واللوحة التي ستوضع عليها، والأدوات المطلوبة من القائمة.

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: نوفمبر 2024*