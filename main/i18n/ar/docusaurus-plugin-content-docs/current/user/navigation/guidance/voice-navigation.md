---
source-hash: 23fa8491d55d8126a921b95c8d650a5b5c13376f6c4a630b3c3446e35d19d2c0
sidebar_position: 6
title:  المطالبات/الإشعارات الصوتية
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

توفر ميزة الملاحة الصوتية في OsmAnd تعليمات وتنبيهات منطوقة في الوقت الفعلي تساعدك على البقاء على اطلاع وآمن أثناء التنقل. يمكنك تخصيص الإرشادات لتناسب تفضيلاتك واحتياجاتك. للقيام بذلك، حدد ملف تعريف صوتي مناسب، إما [محرك تحويل النص إلى كلام (TTS)](#tts-text-to-speech) الذي يمكنه الإعلان ديناميكيًا عن أسماء الشوارع والمسافات وحدود السرعة، أو [صوت مسجل مسبقًا](#recorded-voice-prompts) يقدم تعليمات موجزة.

بالإضافة إلى توجيهات الانعطاف، يمكن للملاحة الصوتية في OsmAnd إخطارك بنقاط الاهتمام القادمة، والتغيرات في ظروف حركة المرور، وعندما تتجاوز حد سرعة محدد مسبقًا. لمعرفة المزيد حول تخصيص هذه التنبيهات، راجع [إعدادات وقت الإعلان](#announcement-time) و [تحذيرات حد السرعة](#speed-limit).

مع المجموعة الصحيحة من خيارات الصوت، وإعدادات التنبيه، وتعديلات صوت الجهاز، ستتلقى معلومات ملاحة واضحة وفي الوقت المناسب طوال مسارك.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- تعكس الإشعارات النصية تمامًا وقت التشغيل ورسائل المطالبات الصوتية.

:::

## إعداد المطالبات الصوتية {#setting-up-voice-prompts}

يوفر OsmAnd خيارات متنوعة للتحكم في المطالبات الصوتية حتى تتمكن من متابعة مسارك بسهولة. لتكوين هذه الإعدادات، ابدأ في أقسام التطبيق المناسبة.

- قم بتنشيط المطالبات الصوتية من قسم [الملاحة](../guidance/navigation-settings.md) بالنقر على **الإعدادات**. يمكنك أيضًا تمكين وتكوين المطالبات الصوتية من خلال *تكوين الملف الشخصي*، و *إعدادات الملاحة*.
- قم بتشغيل أو إيقاف تشغيل المطالبات الصوتية باستخدام *القائمة ← الملاحة ←* انقر على *زر الصوت*،
أو *القائمة ← الملاحة ←* زر الإعدادات *← الصوت ←* تبديل تشغيل/إيقاف.

لمزيد من المعلومات حول كيفية ومتى يتم تشغيل المطالبات الصوتية، راجع وثائق [تشغيل المطالبات الصوتية للملاحة](../../../technical/algorithms/voice-prompt-triggering.md).

### إعدادات الصوت {#voice-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![إعدادات الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> زر* *(أو <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) ← اختيار ملف شخصي ← <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![إعدادات الملاحة الصوتية iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[اللغة](#voice-prompt-language)**. اختر لغتك ونوعك المفضلين.

**الإعلان**. يسمح لك بتكوين الأنواع التالية من المطالبات:

- *أسماء الشوارع (TTS)، أرقام المخارج، تحذيرات المرور، معابر المشاة* و *الأنفاق.*
- *[كاميرات السرعة](#speed-cameras)*.
- قم أيضًا بتكوين [**عنصر واجهة المستخدم للتنبيه**](../../widgets/nav-widgets.md#alert-widget) لاستخدامه مع الإعلانات.

**نقاط المستخدم**:

- تمكين المطالبات الصوتية لـ [نقاط الطريق](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) المحددة مسبقًا والمضافة، [المفضلة](../../personal/favorites.md) أو [نقاط الاهتمام (POIs)](../../map/point-layers-on-map.md#points-of-interest-pois). أثناء القيادة، سيتم الإعلان عن النقاط المحددة عند الاقتراب منها أو المرور بها.

| نوع المطالبة | وقت البدء [ثانية]:<br/>المسافة المقابلة<br/>@ السرعة الافتراضية [متر] | الحد الأقصى |
| :- | :- | :- |
| الاقتراب | **60 ثانية:**<br/>القيادة: 750 متر<br/>ركوب الدراجات: 167 متر<br/>المشي: 67 متر | لا يزيد عن نقطة واحدة في كل مرة |
| المرور | **15 ثانية:**<br/>القيادة: 188 متر<br/>ركوب الدراجات: 42 متر<br/>المشي: 17 متر | لا يزيد عن 3 نقاط في كل مرة |

[**حد السرعة**](#speed-limit):

- *الإعلان عند التجاوز*.
- *تسامح حد السرعة*.

**أخرى**:

- *الإعلان عن فقدان إشارة GPS واستعادتها*. يعلن OsmAnd إذا فقدت إشارة GPS على الجهاز.
- *الإعلان عن إعادة حساب المسار*. يبلغ OsmAnd عن إعادة حساب المسار في حالة [الانحراف أو الحركة في الاتجاه المعاكس](./navigation-settings.md#recalculate-route).
- *الإعلان عن الانحراف عن المسار*. تتلقى معلومات حول الانحرافات عن المسار وفقًا [للمعلمات المحددة](./navigation-settings.md#recalculate-route).

**الخيارات**:

- *تكرار تعليمات الملاحة*. يسمح لك بتكرار تعليمات الملاحة على فترات منتظمة من دقيقة واحدة إلى 30 دقيقة. أو يدويًا - إذا فاتتك مطالبة صوتية، يمكنك الاستماع إليها مرة أخرى بمجرد النقر على [سهم الانعطاف الحالي](../../widgets/nav-widgets.md#next-turn) على شاشة التطبيق.
- *[وقت الإعلان](#announcement-time)*.

**الإخراج** (*أندرويد فقط*):

- *[إخراج التوجيه الصوتي](#voice-guidance-output)*.
- *إيقاف الموسيقى مؤقتًا*. توقف المطالبات الصوتية تشغيل الموسيقى مؤقتًا.

### كاميرات السرعة {#speed-cameras}

![توقيت إعلان الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

تسمح لك [تنبيهات كاميرات السرعة](../../personal/global-settings.md#uninstall-speed-cameras) بتنشيط أو إلغاء تنشيط نقاط الاهتمام (POIs) التي تحتوي على كاميرات سرعة. ستحتاج إلى إعادة تشغيل تطبيق OsmAnd لتطبيق التغييرات.

في بعض البلدان أو المناطق، يعتبر استخدام تطبيقات تحذير كاميرات السرعة غير قانوني. يجب عليك اتخاذ قرار بناءً على القوانين في بلدك. حدد **إبقاء نشطًا**، وستتلقى تنبيهات وإشعارات كاميرات السرعة. حدد **إلغاء التثبيت** وسيتم حذف جميع البيانات المتعلقة بكاميرات السرعة، مثل التحذيرات والإشعارات ونقاط الاهتمام، حتى تقوم بإعادة تثبيت OsmAnd بالكامل.

### حد السرعة {#speed-limit}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![الملاحة الصوتية](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الملاحة الصوتية](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

يسمح خيار **حد السرعة** لـ OsmAnd بإبلاغك عندما تتجاوز سرعتك الحالية عتبة محددة. يتم الحصول على بيانات حدود السرعة القانونية القصوى من OpenStreetMap.

**الإعلان عند التجاوز**
يتيح لك *تسامح حد السرعة* تحديد انحراف مسموح به (على سبيل المثال، -10 كم/ساعة إلى +20 كم/ساعة) عن [حد السرعة القانوني الأقصى](https://wiki.openstreetmap.org/wiki/Key:maxspeed) على الطريق الحالي. عندما تتجاوز سرعتك هذا التسامح، يصدر OsmAnd مطالبة صوتية.

*قواعد تفعيل المطالبات الصوتية* عند تجاوز حد السرعة:

- *تحذير أولي*. عند اكتشاف تجاوزك لحد السرعة، ينتظر OsmAnd 5 ثوانٍ قبل إصدار التحذير الصوتي الأول.
- *تأخير تكرار الإعلان*. إذا واصلت السرعة، يتأخر التحذير التالي لمدة 120 ثانية لمنع الإشعارات المتكررة بشكل مفرط.
- *إعادة ضبط المؤقت*. يعاد ضبط المؤقت إذا بقيت ضمن الحد القانوني لمدة 30 ثانية. أي سرعة إضافية ستنتظر 5 ثوانٍ مرة أخرى قبل صدور التحذير التالي.

يؤثر إعداد **تسامح حد السرعة** هذا على السرعة المعروضة في جزء *التحذير* من [عنصر واجهة المستخدم لعداد السرعة](../../widgets/info-widgets.md#speedometer) في تطبيق OsmAnd، و [Android Auto](../../navigation/auto-car.md#speedometer)، و [CarPlay](../../navigation/car-play.md#speedometer).

### وقت الإعلان {#announcement-time}

![توقيت إعلان الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/voice_promt-announ-time.png)

يعتمد وقت الإعلان للمطالبات الصوتية المختلفة على الملف الشخصي المحدد، ونوع المطالبة، وسرعة الملاحة الحالية، وسرعة الملاحة الافتراضية. باستخدام هذا الإعداد، يمكنك تغيير المسافة قبل تنشيط المطالبات الصوتية عن طريق تطبيق مضاعف للمسافة: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0، *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5، *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5، *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

في القائمة المنسدلة *فترات الوقت والمسافة*، يمكنك عرض معلومات مفصلة حول تنشيط المطالبات لمضاعفات المسافة المختلفة. لمزيد من المعلومات، راجع [تشغيل المطالبات الصوتية للملاحة](../../../technical/algorithms/voice-prompt-triggering.md).

### إخراج التوجيه الصوتي {#voice-guidance-output}

<InfoAndroidOnly/>

![الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/voice_promt-1.png)

لتجنب تشغيل الصوت في نفس تيار الإخراج في نفس الوقت، يتم تنفيذ تركيز الصوت في Android. سيستخدم OsmAnd مكبر الصوت المحدد من القائمة في هذا الإعداد لإخراج الصوت. ستوقف التطبيقات الأخرى التشغيل مؤقتًا أو تخفض مستوى الصوت لتسهيل سماع مطالبات OsmAnd الصوتية.

- صوت الوسائط/الملاحة.
- صوت الإشعارات.
- صوت مكالمة هاتفية (لإيقاف [أنظمة صوت السيارة] عبر البلوتوث مؤقتًا](../auto-car.md)).

### اختبار المطالبات الصوتية {#testing-of-voice-prompts}

يمكنك اختبار المطالبات الصوتية باستخدام:

- [محاكاة الملاحة](../../navigation//setup/route-navigation.md#simulated-navigation). قم بتعيين مسار وابدأ المحاكاة: *قائمة الملاحة ← الإعدادات ← محاكاة الملاحة*.

- [اختبار المطالبات الصوتية](../../plugins/development.md#application-testing) (*أندرويد فقط*). استخدم *المكون الإضافي للتطوير* لاختبار المطالبات الصوتية:
    - انتقل إلى *القائمة ← المكونات الإضافية ← تمكين تطوير OsmAnd*.
    - انتقل إلى *الإعدادات ← اختبار المطالبات الصوتية*.
    - حدد لغة وتحقق مما إذا كان النظام يقوم بتشغيل المطالبات بشكل صحيح.

### حل مشاكل الصوت {#solving-audio-issues}

إذا لم تسمع **المطالبات الصوتية** أو [تحذيرات حد السرعة](#speed-limit):

- تأكد من أن صوت جهازك قيد التشغيل ومرفوع.
- تأكد من تمكين الصوت أثناء التنقل: *القائمة ← الملاحة ← زر تشغيل/إيقاف الصوت* أو *القائمة ← الملاحة ← زر الإعدادات ← الصوت* لتكوين الصوت المفصل.
- حدد [مكبرات الصوت](#voice-guidance-output) التي تريد استخدامها.
- تحقق من [التوجيه الصوتي](#voice-prompt-language) المحدد، وتأكد من أن لديك TTS أو صوت مسجل قادر على الإعلان عن تحذيرات حد السرعة.
- تحقق من أن الصوت لا يتم توجيهه إلى جهاز إخراج غير مقصود (على سبيل المثال، سماعة بلوتوث غير متصلة).

لخطوات استكشاف الأخطاء وإصلاحها الإضافية، راجع [دليل استكشاف أخطاء الملاحة وإصلاحها](../../troubleshooting/navigation.md#voice-navigation).

## TTS (تحويل النص إلى كلام) {#tts-text-to-speech}

يدعم OsmAnd أصوات **تحويل النص إلى كلام (TTS)**، والتي توفر توجيهًا صوتيًا ديناميكيًا ومفصلاً، بما في ذلك تعليمات الانعطاف، وأسماء الشوارع، وإعلانات نقاط الاهتمام (POI). يتم تضمين أصوات TTS في التطبيق ولكنها تتطلب [محرك تحويل النص إلى كلام](https://en.wikipedia.org/wiki/Speech_synthesis) مثبتًا على الجهاز.

تتضمن معظم أجهزة Android و iOS الحديثة محرك TTS افتراضيًا، ولكن يمكن تثبيت محركات ولغات إضافية بشكل منفصل.

للحصول على قائمة بـ **محركات TTS المتاحة واللغات المدعومة** على Android، راجع:
[قائمة اللغات مع محركات TTS المتاحة على Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***تكوين TTS على جهازك:***

**أندرويد:**

1. افتح الإعدادات.
2. انتقل إلى *إمكانية الوصول ← إخراج تحويل النص إلى كلام*.
3. حدد **محرك TTS** (Google TTS أو محرك آخر مثبت).
4. اختر **لغة مفضلة** (قد تتطلب بعضها تنزيلات إضافية).
5. اضبط معدل الكلام، ودرجة الصوت، وسرعة التشغيل حسب الحاجة.
6. انقر على **استمع إلى مثال** لاختبار إخراج الصوت.

لمزيد من التفاصيل، راجع:
[دعم Google – إعدادات تحويل النص إلى كلام في Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. افتح الإعدادات.
2. انتقل إلى *إمكانية الوصول ← المحتوى المنطوق*.
3. انقر على **الأصوات** لتحديد صوت مفضل.
4. اضبط **معدل التحدث**، و **النطق**، والإعدادات الأخرى.
5. اختبر الصوت باستخدام **تحديد التحدث** أو **تحدث الشاشة**.

لمزيد من التفاصيل، راجع:
[دعم Apple – إعدادات الكلام في iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***اختبار المطالبات الصوتية:***

للتحقق مما إذا كان TTS يعمل بشكل صحيح داخل OsmAnd:

- قم بتمكين **المكون الإضافي للتطوير**: *القائمة ← الإعدادات ← المكونات الإضافية ← تطوير OsmAnd*.
- افتح [اختبار المطالبات الصوتية](../../plugins/development.md#application-testing): *القائمة ← الإعدادات ← المكونات الإضافية ← تطوير OsmAnd ← اختبار المطالبات الصوتية*.

لاستكشاف الأخطاء وإصلاحها، راجع:
[استكشاف أخطاء الملاحة الصوتية وإصلاحها](../../troubleshooting/navigation.md#voice-navigation).

### لغة المطالبة الصوتية {#voice-prompt-language}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/voice_promt-tts.png) ![الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![إعدادات الملاحة الصوتية iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

يوفر OsmAnd نوعين من المطالبات الصوتية:

- **<Translate android="true" ids="tts_title"/>**
    - يستخدم محرك TTS الخاص بالجهاز لإنشاء مطالبات صوتية ديناميكيًا.
    - يقرأ أسماء الشوارع، تعليمات الانعطاف، أسماء نقاط الاهتمام (POI)، وتفاصيل أخرى.
    - يدعم لغات متعددة وإعدادات النطق.
    - يمكن تخصيصه بمعدل الكلام، ودرجة الصوت، وإعدادات النطق.

- **<Translate android="true" ids="shared_string_recorded"/>** (*أندرويد فقط*)
    - يستخدم مطالبات صوتية مسجلة مسبقًا للملاحة.
    - يبدو أكثر طبيعية من TTS ولكنه يحتوي على قيود.
    - لا يقرأ أسماء الشوارع أو أسماء نقاط الاهتمام (POI).
    - يوفر فقط تعليمات الانعطاف الأساسية.

> *يوصى باستخدام TTS للحصول على توجيه ملاحة مفصل.*

#### إعدادات المطالبات الصوتية على مستوى النظام {#system-level-voice-prompt-settings}

يمكن تعديل سلوك المطالبة الصوتية، بما في ذلك *سرعة التشغيل، ودرجة الصوت، والتوقفات المؤقتة*، فقط في إعدادات نظام الجهاز.

**أندرويد:**

1. افتح *إعدادات الجهاز ← إمكانية الوصول ← إخراج تحويل النص إلى كلام*.
2. اختر محرك TTS واللغة المفضلة لديك.
3. اضبط معدل الكلام، ودرجة الصوت، وسرعة التشغيل.

**iOS:**

1. افتح *إعدادات الجهاز ← إمكانية الوصول ← المحتوى المنطوق*.
2. اضبط: اللغة، الأصوات، معدل التحدث، النطق.

> *للحصول على أصوات إضافية، قم بتنزيل حزم اللغات من إعدادات النظام.*

#### لغات TTS المتاحة {#available-tts-languages}

يوجد حاليًا ما مجموعه 45 لغة. قد لا تكون جميع اللغات المذكورة أدناه مدعومة من قبل كل محرك TTS. انظر [هنا](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **أ** | العربية |
| **ب** | البيلاروسية، البلغارية |
| **ت** | التشيكية |
| **د** | الدنماركية، الهولندية |
| **ر** | الروسية، الرومانية |
| **س** | السلوفاكية، السلوفينية، السواحلية، السويدية، الصربية (السيريلية)، الصينية، الصينية (هونغ كونغ)، الصينية (التقليدية) |
| **ع** | العبرية |
| **ف** | الفارسية، الفرنسية، الفنلندية |
| **ك** | الكورية، الكرواتية، الكاتالونية |
| **ل** | اللاتفية |
| **م** | المجرية، المجرية (الرسمية) |
| **ن** | النرويجية بوكمال |
| **هـ** | الهندية |
| **و** | الفيتنامية |
| **ي** | اليابانية، اليونانية |
| **إ** | الإنجليزية، الإنجليزية (المملكة المتحدة)، الإستونية، الإسبانية، الإسبانية (الأرجنتين)، الإيطالية، الإندونيسية |
| **ب** | البولندية، البرتغالية، البرتغالية (البرازيل) |
| **غ** | الغوارانية، الألمانية، الألمانية (غير الرسمية) |
| **أ** | الأوكرانية |
| **ت** | التركية |
| **س** | السردينية |

## المطالبات الصوتية المسجلة {#recorded-voice-prompts}

### تنزيل حزم الصوت {#download-voice-packages}

<InfoAndroidOnly />

يجب أن يكون استخدام الأصوات المسجلة في OsmAnd هو الخيار الاحتياطي فقط. فهي محدودة نوعًا ما، ولا يمكنها نطق أسماء الشوارع، وأسماء الأماكن، وما إلى ذلك. يمكنك تنزيل المطالبات الصوتية من مجموعتين مختلفتين من القائمة.

- النوع الأول، وهي الموصى بها:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![إعدادات الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/TTS-preferred-1.png) ![إعدادات الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/TTS-preferred-2.png)

- النوع الثاني هو المطالبات الصوتية المسجلة، مع مجموعة غير مكتملة من الميزات:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![إعدادات الملاحة الصوتية أندرويد](@site/static/img/navigation/voice/TTS-recorded.png)

### أوضاع التنبيه الصوتي (Beep Modes) {#beep-modes}

<InfoAndroidOnly />

يمكنك تهيئة ملف تعريف OsmAnd لإصدار صوت تنبيه بدلاً من التحدث، بطريقة مشابهة لجهاز كمبيوتر الدراجة. توجد ثلاثة أنماط أساسية: *الحد الأدنى*، و *البسيط*، و *المعقد*. تحتوي الأنماط البسيطة والمعقدة على متغيرات *عالية الصوت*، والتي ستكون أسهل بكثير في السمع في بيئة صاخبة ولكن قد تبدو قاسية بشكل غير سار.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **الحد الأدنى**. مناسب لمتابعة مسار معروف سيرًا على الأقدام بأقل قدر من التشتيت، سينبهك هذا النمط عند المرور بالوجهات الوسيطة، والمفضلة ونقاط الاهتمام، وعندما تنحرف عن المسار أو تعود إليه. لن يوفر أي تحذيرات صوتية للانعطافات.
- **بسيط**. بالإضافة إلى التنبيهات للوجهات، والمفضلة، ونقاط الاهتمام، وغيرها، ينبهك النمط البسيط بصوت تنبيه أطول عندما تحتاج إلى الانعطاف.
- **معقد**. مناسب لركوب الدراجات على الطرق، يستخدم النمط المعقد أصوات تنبيه بأطوال ودرجات مختلفة لإبلاغك بالانعطافات القادمة.
    - يعني صوت تنبيه منخفض انعطافًا يسارًا، بينما يعني صوت تنبيه عالٍ انعطافًا يمينًا. تمثل سلسلة من أصوات التنبيه متوسطة النبرة المخرج الذي يجب اتخاذه في الدوار (دائرة المرور). تمثل جميع النبرات الثلاث بالتسلسل انعطافًا على شكل حرف U. في جميع هذه الحالات، تعني أصوات التنبيه القصيرة الاستعداد للقيام بشيء ما، بينما تعني أصوات التنبيه الطويلة القيام بشيء ما الآن.

## الإشعارات النصية {#text-notifications}

بمجرد بدء المسار، يمكنك عرض المعلومات في قائمة النظام المنسدلة في قائمة الإشعارات. تحتوي إشعارات OsmAnd الصامتة على معلومات مثل تعليمات الانعطاف، وأسهم اتجاهات الانعطاف، ووقت الوصول والوقت المتبقي، والسرعة الحالية والمسافة إلى الوجهة.

![إشعار مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_notifications_android.png)

الأزرار النشطة في قائمة النظام المنسدلة للملاحة الخاصة بك:

- *<Translate android="true" ids="stop_navigation_service"/>*. يسمح بإيقاف الملاحة الخاصة بك.
- *<Translate android="true" ids="shared_string_pause"/>*. يسمح بإيقاف الملاحة الخاصة بك مؤقتًا.
- *<Translate android="true" ids="shared_string_resume"/>*. يسمح باستئناف الملاحة الخاصة بك.

### تكوين الإشعارات {#configure-notifications}

يمكنك تغيير إعدادات الإشعارات لتطبيق OsmAnd في إعدادات نظام جهازك. يمكن عرض الإشعارات على شاشة القفل، الشاشة الرئيسية، في القائمة المنسدلة، أو في الجزء العلوي من التطبيق.

اقرأ عن كيفية تنفيذ التحكم في الإشعارات على Android في هذه [المقالة](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). لنظام iOS - [هنا](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).

## التحكم في الشاشة {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![قائمة التحكم في الشاشة أندرويد](@site/static/img/navigation/route/screen_control_android.png)

يمكنك التحكم في شاشة جهازك لتوفير الطاقة. يحتوي هذا الوضع على إعدادين عامين: *<Translate android="true" ids="screen_timeout"/>* و *<Translate android="true" ids="turn_screen_on"/>*.

### مهلة الشاشة {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. تنطفئ الشاشة حسب إعدادات نظام جهازك. يوفر زر *تغيير الإعدادات* وصولاً سريعًا إلى قائمة النظام مثل *الشاشة والسطوع* حيث يمكنك ضبط مهلة الشاشة.

    ![التحكم في شاشة مهلة النظام أندرويد](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. إذا كان *إبقاء الشاشة قيد التشغيل* ممكّنًا، فإن شاشة الجهاز لا تطبق مهلة بعد الاستيقاظ. إذا تم تعطيله، يمكنك تعيين الوقت الذي ستنطفئ فيه شاشة الجهاز إذا لم تتفاعل معها، من 5 إلى 60 ثانية.

    ![مهلة بعد الاستيقاظ أندرويد](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![مهلة بعد الاستيقاظ أندرويد](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### تشغيل الشاشة {#turn-screen-on}

![تشغيل الشاشة أندرويد](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

حدد خيارات إيقاظ الشاشة وتأكد من بقاء OsmAnd في المقدمة عند قفل الجهاز.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>

## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](../setup/route-navigation.md)
- [الملاحة بالمسار](../setup/gpx-navigation.md)
- [الملاحة بالعلامات](../setup/markers-navigation.md)
- [تفاصيل المسار](../setup/route-details.md)
- [إعدادات الملاحة](./navigation-settings.md)
- [شاشة الخريطة أثناء الملاحة](./map-during-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

### المشاكل والحلول الشائعة {#common-issues-and-solutions}

1. [مشاكل الصوت.](#solving-audio-issues)
2. [اختبار المطالبات الصوتية.](#testing-of-voice-prompts)
3. [لماذا يجب أن أستخدم صوت TTS بدلاً من الصوت المسجل؟](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [TTS لا يعمل بشكل صحيح؟ اتبع هذه الخطوات لإصلاحه.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *آخر تحديث: مارس 2025*