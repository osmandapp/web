---
source-hash: 844b3f804475dddf7574a87aa0ef1e75695668c1b6828dd4e5171fe9e8a7c53d
sidebar_position: 3
title:  التوجيهات الصوتية / الإشعارات
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

توفر ميزة الملاحة الصوتية في OsmAnd إرشادات وتنبيهات منطوقة في الوقت الفعلي تساعدك على البقاء على اطلاع وآمن أثناء التنقل. يمكنك تخصيص الإرشادات لتناسب تفضيلاتك واحتياجاتك. للقيام بذلك، حدد ملفًا صوتيًا مناسبًا، إما محرك [تحويل النص إلى كلام (TTS)](#tts-text-to-speech) الذي يمكنه الإعلان ديناميكيًا عن أسماء الشوارع والمسافات وحدود السرعة، أو [صوت مسجل مسبقًا](#recorded-voice-prompts) يقدم إرشادات موجزة.

بالإضافة إلى التوجيهات خطوة بخطوة، يمكن للملاحة الصوتية في OsmAnd إعلامك بنقاط الاهتمام القادمة، والتغيرات في ظروف حركة المرور، وعندما تتجاوز حد السرعة المحدد مسبقًا. لمعرفة المزيد حول تخصيص هذه التنبيهات، راجع [إعدادات وقت الإعلان](#announcement-time) و[تحذيرات حدود السرعة](#speed-limit).

مع المزيج الصحيح من خيارات الصوت وإعدادات التنبيه وتعديلات صوت الجهاز، ستتلقى معلومات ملاحة واضحة وفي الوقت المناسب طوال مسارك.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- تعكس الإشعارات النصية بالكامل وقت التشغيل ورسائل التوجيهات الصوتية.

:::  


## إعداد التوجيهات الصوتية {#setting-up-voice-prompts}

يوفر OsmAnd خيارات متنوعة للتحكم في التوجيهات الصوتية حتى تتمكن من متابعة مسارك بسهولة. لتكوين هذه الإعدادات، ابدأ في أقسام التطبيق المناسبة.

- قم بتنشيط التوجيهات الصوتية من قسم [الملاحة](../guidance/navigation-settings.md) عن طريق النقر على **الإعدادات**. يمكنك أيضًا تمكين وتكوين التوجيهات الصوتية من خلال *تكوين الملف الشخصي* و*إعدادات الملاحة*.
- قم بتشغيل أو إيقاف التوجيهات الصوتية باستخدام *القائمة ← الملاحة ←* انقر على *زر الصوت*،
    أو *القائمة ← الملاحة ←* زر الإعدادات *← الصوت ←* تبديل تشغيل/إيقاف.

لمزيد من المعلومات حول كيفية ووقت تشغيل التوجيهات الصوتية، راجع وثائق [تشغيل التوجيهات الصوتية للملاحة](../../../technical/algorithms/voice-prompt-triggering.md).


### إعدادات الصوت {#voice-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![إعدادات الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *زر <Translate ios="true" ids="routing_settings"/>* *(أو <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) ← اختر الملف الشخصي ← <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![إعدادات الملاحة الصوتية في iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>  

**[اللغة](#voice-prompt-language)**. حدد لغتك ونوعك المفضل.

**الإعلان**. يسمح لك بتكوين الأنواع التالية من التوجيهات:

- *أسماء الشوارع (TTS)، أرقام المخارج، تحذيرات المرور، ممرات المشاة* و*الأنفاق*.
- *[كاميرات السرعة](#speed-cameras)*.
- قم أيضًا بتكوين **[ودجة التنبيه](../../widgets/nav-widgets.md#alert-widget)** لاستخدامها مع الإعلانات.

**نقاط المستخدم**:

- تمكين التوجيهات الصوتية لـ [نقاط الطريق](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) المحددة مسبقًا والمضافة، [المفضلة](../../personal/favorites.md) أو [نقاط الاهتمام](../../map/point-layers-on-map.md#points-of-interest-pois). أثناء القيادة، سيتم الإعلان عن النقاط المحددة عند الاقتراب منها أو المرور بها.

| نوع التوجيه | الوقت المسبق [ثانية]:<br/>المسافة المسبقة<br/>المقابلة عند السرعة الافتراضية [متر] | الحد |
| :- | :- | :- |
| الاقتراب | **٦٠ ثانية:**<br/>القيادة: ٧٥٠ متر<br/>ركوب الدراجات: ١٦٧ متر<br/>المشي: ٦٧ متر | لا يزيد عن نقطة واحدة في كل مرة |
| المرور | **١٥ ثانية:**<br/>القيادة: ١٨٨ متر<br/>ركوب الدراجات: ٤٢ متر<br/>المشي: ١٧ متر | لا يزيد عن ٣ نقاط في كل مرة |

[**حد السرعة**](#speed-limit):

- *الإعلان عند التجاوز*.
- *هامش تحمل حد السرعة*.

**أخرى**:

- *الإعلان عن فقدان إشارة GPS واستعادتها*. يعلن OsmAnd إذا فقدت إشارة GPS على الجهاز.
- *الإعلان عن إعادة حساب المسار*. يبلغ OsmAnd عن إعادة حساب المسار في حالة [الانحراف أو الحركة في الاتجاه المعاكس](./navigation-settings.md#recalculate-route).
- *الإعلان عن الانحراف عن المسار*. تتلقى معلومات حول الانحرافات عن المسار وفقًا لـ [المعلمات المحددة](./navigation-settings.md#recalculate-route).

**خيارات**:

- *تكرار تعليمات الملاحة*. يسمح لك بتكرار تعليمات الملاحة على فترات منتظمة من دقيقة واحدة إلى ٣٠ دقيقة. أو يدويًا - إذا فاتتك توجيه صوتي، يمكنك الاستماع إليه مرة أخرى بمجرد النقر على [سهم المنعطف الحالي](../../widgets/nav-widgets.md#next-turn) على شاشة التطبيق.
- *[وقت الإعلان](#announcement-time)*.

**الإخراج** (*أندرويد فقط*):

- *[إخراج التوجيه الصوتي](#voice-guidance-output)*.
- *إيقاف الموسيقى مؤقتًا*. توقف التوجيهات الصوتية تشغيل الموسيقى لفترة من الوقت.


### كاميرات السرعة {#speed-cameras}

![توقيت إعلان الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

تسمح لك [تنبيهات كاميرات السرعة](../../personal/global-settings.md#uninstall-speed-cameras) بتنشيط أو إلغاء تنشيط نقاط الاهتمام بكاميرات السرعة. ستحتاج إلى إعادة تشغيل تطبيق OsmAnd لتطبيق التغييرات.

في بعض البلدان أو المناطق، يعد استخدام تطبيقات التحذير من كاميرات السرعة أمرًا غير قانوني. يجب عليك اتخاذ قرار بناءً على القوانين في بلدك. حدد **إبقاء نشطًا**، وستتلقى تنبيهات وإشعارات كاميرات السرعة. حدد **إلغاء التثبيت** وسيتم حذف جميع البيانات المتعلقة بكاميرات السرعة، مثل التحذيرات والإشعارات ونقاط الاهتمام، حتى تعيد تثبيت OsmAnd بالكامل.


### حد السرعة {#speed-limit}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الملاحة الصوتية](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الملاحة الصوتية](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>  

يسمح خيار **حد السرعة** لـ OsmAnd بإعلامك عندما تتجاوز سرعتك الحالية عتبة محددة. يتم الحصول على بيانات حدود السرعة القصوى القانونية من OpenStreetMap.

**الإعلان عند التجاوز**
يتيح لك *هامش تحمل حد السرعة* تحديد انحراف مسموح به (على سبيل المثال، من -10 كم/ساعة إلى +20 كم/ساعة) عن [حد السرعة الأقصى القانوني](https://wiki.openstreetmap.org/wiki/Key:maxspeed) على الطريق الحالي. عندما تتجاوز سرعتك هذا الهامش، يصدر OsmAnd توجيهًا صوتيًا.

*قواعد تفعيل التوجيهات الصوتية* عند تجاوز حد السرعة:

- *التحذير الأولي*. عند اكتشاف أنك تتجاوز حد السرعة، ينتظر OsmAnd ٥ ثوانٍ قبل إصدار التحذير الصوتي الأول.
- *تأخير تكرار الإعلان*. إذا واصلت تجاوز السرعة، يتم تأخير التحذير التالي لمدة ١٢٠ ثانية لمنع الإشعارات المتكررة بشكل مفرط.
- *إعادة ضبط المؤقت*. يتم إعادة ضبط المؤقت إذا بقيت ضمن الحد القانوني لمدة ٣٠ ثانية. أي تجاوز آخر للسرعة سينتظر مرة أخرى ٥ ثوانٍ قبل أن يصدر التحذير التالي.

يؤثر إعداد **هامش تحمل حد السرعة** هذا على السرعة المعروضة في جزء *التحذير* من [ودجة عداد السرعة](../../widgets/info-widgets.md#speedometer) في تطبيق OsmAnd، و[Android Auto](../../navigation/auto-car.md#speedometer)، و[CarPlay](../../navigation/car-play.md#speedometer).


### وقت الإعلان {#announcement-time}

![توقيت إعلان الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/voice_promt-announ-time.png)  

يعتمد وقت إعلان التوجيهات الصوتية المختلفة على الملف الشخصي المحدد، ونوع التوجيه، وسرعة الملاحة الحالية، وسرعة الملاحة الافتراضية. باستخدام هذا الإعداد، يمكنك تغيير المسافة قبل تفعيل التوجيهات الصوتية عن طريق تطبيق مضاعف المسافة: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0، *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5، *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5، *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

في القائمة المنسدلة *الفواصل الزمنية والمسافات*، يمكنك عرض معلومات مفصلة حول تفعيل التوجيهات لمضاعفات المسافة المختلفة. لمزيد من المعلومات، راجع [تشغيل التوجيهات الصوتية للملاحة](../../../technical/algorithms/voice-prompt-triggering.md).


### إخراج التوجيه الصوتي {#voice-guidance-output}

<InfoAndroidOnly/>

![الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/voice_promt-1.png)

لتجنب تشغيل الصوت في نفس دفق الإخراج في نفس الوقت، يتم تنفيذ تركيز الصوت في أندرويد. سيستخدم OsmAnd مكبر الصوت المحدد من القائمة في هذا الإعداد لإخراج الصوت. ستقوم التطبيقات الأخرى بإيقاف التشغيل مؤقتًا أو خفض مستوى الصوت لتسهيل سماع توجيهات OsmAnd الصوتية.

- صوت الوسائط/الملاحة.
- صوت الإشعارات.
- صوت المكالمات الهاتفية (لمقاطعة [أنظمة صوت السيارة](../auto-car.md) عبر البلوتوث).


### اختبار التوجيهات الصوتية {#testing-of-voice-prompts}

يمكنك اختبار التوجيهات الصوتية باستخدام:

- [محاكاة الملاحة](../../navigation//setup/route-navigation.md#simulated-navigation). قم بتعيين مسار وابدأ المحاكاة: *قائمة الملاحة ← الإعدادات ← محاكاة الملاحة*.

- [اختبار التوجيهات الصوتية](../../plugins/development.md#application-testing) (*أندرويد فقط*). استخدم *ملحق التطوير* لاختبار التوجيهات الصوتية:
    - اذهب إلى *القائمة ← الملحقات ← تمكين تطوير OsmAnd*.
    - اذهب إلى *الإعدادات ← اختبار التوجيهات الصوتية*.
    - حدد لغة وتحقق مما إذا كان النظام يقوم بتشغيل التوجيهات بشكل صحيح.


### حل مشاكل الصوت {#solving-audio-issues}

إذا كنت لا تسمع **التوجيهات الصوتية** أو [تحذيرات حدود السرعة](#speed-limit):

- تأكد من أن مستوى صوت جهازك مرتفع ومفعّل.
- تأكد من تمكين الصوت أثناء الملاحة: *القائمة ← الملاحة ← زر تشغيل/إيقاف الصوت* أو *القائمة ← الملاحة ← زر الإعدادات ← الصوت* لتكوين الصوت التفصيلي.
- حدد [مكبرات الصوت](#voice-guidance-output) التي سيتم استخدامها.
- تحقق من [التوجيه الصوتي](#voice-prompt-language) المحدد، وتأكد من أن لديك محرك TTS أو صوت مسجل قادر على الإعلان عن تحذيرات حدود السرعة.
- تحقق من أن الصوت لا يتم توجيهه إلى جهاز إخراج غير مقصود (على سبيل المثال، سماعة بلوتوث غير متصلة).

للحصول على خطوات إضافية لاستكشاف الأخطاء وإصلاحها، راجع [دليل استكشاف أخطاء الملاحة وإصلاحها](../../troubleshooting/navigation.md#voice-navigation).


## تحويل النص إلى كلام (TTS) {#tts-text-to-speech}

يدعم OsmAnd أصوات **تحويل النص إلى كلام (TTS)**، والتي توفر توجيهًا صوتيًا ديناميكيًا ومفصلاً، بما في ذلك تعليمات المنعطفات وأسماء الشوارع وإعلانات نقاط الاهتمام. يتم تضمين أصوات TTS في التطبيق ولكنها تتطلب [محرك تحويل النص إلى كلام](https://en.wikipedia.org/wiki/Speech_synthesis) مثبتًا على الجهاز.

تتضمن معظم أجهزة أندرويد و iOS الحديثة محرك TTS افتراضيًا، ولكن يمكن تثبيت محركات ولغات إضافية بشكل منفصل.

للحصول على قائمة **بمحركات TTS المتاحة واللغات المدعومة** على أندرويد، راجع:
[قائمة اللغات مع محركات TTS المتاحة على أندرويد](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***تكوين TTS على جهازك:***

**أندرويد:**

1. افتح الإعدادات.
2. انتقل إلى *إمكانية الوصول ← إخراج تحويل النص إلى كلام*.
3. حدد **محرك TTS** (محرك Google TTS أو محرك آخر مثبت).
4. اختر **لغة مفضلة** (قد يتطلب بعضها تنزيلات إضافية).
5. اضبط معدل الكلام ودرجة الصوت وسرعة التشغيل حسب الحاجة.
6. انقر على **الاستماع إلى مثال** لاختبار إخراج الصوت.

لمزيد من التفاصيل، راجع:
[دعم Google – إعدادات تحويل النص إلى كلام في أندرويد](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. افتح الإعدادات.
2. اذهب إلى *إمكانية الوصول ← المحتوى المنطوق*.
3. انقر على **الأصوات** لتحديد صوت مفضل.
4. اضبط **معدل الكلام**، **النطق**، وإعدادات أخرى.
5. اختبر الصوت باستخدام **نطق التحديد** أو **نطق الشاشة**.

لمزيد من التفاصيل، راجع:
[دعم Apple – إعدادات الكلام في iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***اختبار التوجيهات الصوتية:***

للتحقق مما إذا كان TTS يعمل بشكل صحيح داخل OsmAnd:

- قم بتمكين **ملحق التطوير**: *القائمة ← الإعدادات ← الملحقات ← تطوير OsmAnd*.
- افتح [اختبار التوجيهات الصوتية](../../plugins/development.md#application-testing): *القائمة ← الإعدادات ← الملحقات ← تطوير OsmAnd ← اختبار التوجيهات الصوتية*.

لاستكشاف الأخطاء وإصلاحها، راجع:
[استكشاف أخطاء الملاحة الصوتية وإصلاحها](../../troubleshooting/navigation.md#voice-navigation).


### لغة التوجيه الصوتي {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/voice_promt-tts.png)  ![الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/voice_promt-recorded.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![إعدادات الملاحة الصوتية في iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

يوفر OsmAnd نوعين من التوجيهات الصوتية:

- **<Translate android="true" ids="tts_title"/>**
    - يستخدم محرك TTS الخاص بالجهاز لإنشاء توجيهات صوتية ديناميكيًا.
    - يقرأ أسماء الشوارع، تعليمات المنعطفات، أسماء نقاط الاهتمام، وتفاصيل أخرى.
    - يدعم لغات متعددة وإعدادات نطق.
    - يمكن تخصيصه بمعدل الكلام ودرجة الصوت وإعدادات النطق.

- **<Translate android="true" ids="shared_string_recorded"/>** (*أندرويد فقط*)
    - يستخدم توجيهات صوتية مسجلة مسبقًا للملاحة.
    - يبدو أكثر طبيعية من TTS ولكنه محدود.
    - لا يقرأ أسماء الشوارع أو أسماء نقاط الاهتمام.
    - يوفر فقط تعليمات المنعطفات الأساسية.

> *يوصى باستخدام TTS للحصول على إرشادات ملاحة مفصلة.*

### إعدادات التوجيه الصوتي على مستوى النظام {#system-level-voice-prompt-settings}

يمكن تعديل سلوك التوجيه الصوتي، بما في ذلك *سرعة التشغيل، ودرجة الصوت، والإيقافات المؤقتة*، فقط في إعدادات نظام الجهاز.

**أندرويد:**

1. افتح *إعدادات* الجهاز ← *إمكانية الوصول* ← *إخراج تحويل النص إلى كلام*.
2. اختر محرك TTS واللغة المفضلة لديك.
3. اضبط معدل الكلام ودرجة الصوت وسرعة التشغيل.

**iOS:**

1. افتح *إعدادات* الجهاز ← *إمكانية الوصول* ← *المحتوى المنطوق*.
2. اضبط: اللغة، الأصوات، معدل الكلام، النطق.

> *للحصول على أصوات إضافية، قم بتنزيل حزم اللغات من إعدادات النظام.*


### لغات TTS المتاحة {#available-tts-languages}

يوجد حاليًا ما مجموعه ٤٥ لغة. قد لا تكون جميع اللغات المدرجة أدناه مدعومة من قبل كل محرك TTS. انظر [هنا](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **А** | العربية |
| **B** | البيلاروسية، البلغارية |
| **C** | الكاتالونية، الصينية، الصينية (هونغ كونغ)، الصينية (التقليدية)، الكرواتية، التشيكية |  
| **D** | الدنماركية، الهولندية |
| **E** | الإنجليزية، الإنجليزية (المملكة المتحدة)، الإستونية |
| **F** | الفنلندية، الفرنسية |
| **G** | الألمانية، الألمانية (غير رسمية)، اليونانية، الغوارانية |
| **H** | الهندية، المجرية، المجرية (رسمية)، العبرية |
| **I** | الإندونيسية، الإيطالية |
| **J** | اليابانية |
| **K** | الكورية |
| **L** | اللاتفية |
| **N** | النرويجية بوكمال |
| **P** | الفارسية، البولندية، البرتغالية، البرتغالية (البرازيل) |  
| **R** | الرومانية، الروسية |
| **S** | السردينية، الصربية (السيريلية)، السلوفاكية، السلوفينية، الإسبانية، الإسبانية (الأرجنتين)، السواحيلية، السويدية |
| **T** | التركية |
| **U** | الأوكرانية |
| **V** | الفيتنامية |


## التوجيهات الصوتية المسجلة {#recorded-voice-prompts}

### تنزيل حزم الصوت {#download-voice-packages}

<InfoAndroidOnly />

يجب أن يكون استخدام الأصوات المسجلة في OsmAnd خيارًا احتياطيًا فقط. فهي محدودة إلى حد ما، ولا يمكنها نطق أسماء الشوارع وأسماء الأماكن وما إلى ذلك. يمكنك تنزيل التوجيهات الصوتية من مجموعتين مختلفتين من القائمة.

- النوع الأول، هذه هي الموصى بها:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![إعدادات الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![إعدادات الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- النوع الثاني هو التوجيهات الصوتية المسجلة، مع مجموعة غير كاملة من الميزات:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

    ![إعدادات الملاحة الصوتية في أندرويد](@site/static/img/navigation/voice/TTS-recorded.png)  

### أوضاع التنبيه الصوتي (Beep) {#beep-modes}

<InfoAndroidOnly />

يمكنك تكوين ملف تعريف OsmAnd ليصدر صوت تنبيه بدلاً من التحدث، بطريقة مشابهة لكمبيوتر الدراجة. هناك ثلاثة أنماط أساسية: *الحد الأدنى*، *البسيط*، و*المعقد*. يحتوي النمطان البسيط والمعقد على متغيرات *صاخبة*، والتي ستكون أسهل بكثير في السمع في بيئة صاخبة ولكن قد تبدو قاسية بشكل غير سار.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

- **الحد الأدنى**. مناسب لمتابعة مسار معروف سيرًا على الأقدام مع الحد الأدنى من التشتيت، سينبهك هذا النمط عند المرور بالوجهات الوسيطة والمفضلة ونقاط الاهتمام، وعندما تنحرف عن المسار أو تعود إليه. لن يوفر أي تحذيرات صوتية للمنعطفات.
- **البسيط**. بالإضافة إلى التنبيهات للوجهات والمفضلة ونقاط الاهتمام وغيرها، ينبهك النمط البسيط بصوت تنبيه أطول عندما تحتاج إلى الانعطاف.
- **المعقد**. مناسب لركوب الدراجات على الطرق، يستخدم النمط المعقد أصوات تنبيه بأطوال ودرجات صوت مختلفة لإعلامك بالمنعطفات القادمة.
    - صوت تنبيه منخفض يعني انعطافًا إلى اليسار، بينما يعني صوت تنبيه مرتفع انعطافًا إلى اليمين. تمثل سلسلة من أصوات التنبيه متوسطة الدرجة المخرج الذي يجب اتخاذه في الدوار (دائرة المرور). تمثل جميع الدرجات الثلاث بالتسلسل انعطافًا حادًا (U-turn). في كل هذه الحالات، تعني أصوات التنبيه القصيرة الاستعداد للقيام بشيء ما، بينما تعني أصوات التنبيه الطويلة القيام بشيء ما الآن.


## الإشعارات النصية {#text-notifications}

بمجرد بدء المسار، يمكنك عرض المعلومات في قائمة النظام المنسدلة في قائمة الإشعارات. تحتوي إشعارات OsmAnd الصامتة على معلومات مثل التعليمات خطوة بخطوة، وأسهم اتجاهات المنعطفات، ووقت الوصول والوقت المتبقي، والسرعة الحالية والمسافة إلى الوجهة.

![إشعار مسار الملاحة في أندرويد](@site/static/img/navigation/route/navigation_notifications_android.png)

الأزرار النشطة في قائمة النظام المنسدلة للملاحة الخاصة بك:

- *<Translate android="true" ids="stop_navigation_service"/>*. يسمح بإيقاف الملاحة.
- *<Translate android="true" ids="shared_string_pause"/>*. يسمح بإيقاف الملاحة مؤقتًا.
- *<Translate android="true" ids="shared_string_resume"/>*. يسمح باستئناف الملاحة.

### تكوين الإشعارات {#configure-notifications}

يمكنك تغيير إعدادات الإشعارات لتطبيق OsmAnd في إعدادات نظام جهازك. يمكن عرض الإشعارات على شاشة القفل، أو الشاشة الرئيسية، أو في القائمة المنسدلة، أو في الجزء العلوي من التطبيق.

اقرأ عن كيفية تنفيذ التحكم في الإشعارات على أندرويد في هذه [المقالة](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). بالنسبة لنظام iOS - [هنا](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## التحكم في الشاشة {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![قائمة التحكم في الشاشة في أندرويد](@site/static/img/navigation/route/screen_control_android.png)

يمكنك التحكم في شاشة جهازك لتوفير الطاقة. يحتوي هذا الوضع على إعدادين عامين: *<Translate android="true" ids="screen_timeout"/>* و *<Translate android="true" ids="turn_screen_on"/>*.

### مهلة الشاشة {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. يتم إيقاف تشغيل الشاشة اعتمادًا على إعدادات نظام جهازك. يوفر زر *تغيير الإعدادات* وصولاً سريعًا إلى قائمة النظام مثل *العرض والسطوع* حيث يمكنك ضبط مهلة الشاشة.

    ![التحكم في مهلة شاشة النظام في أندرويد](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. إذا تم تشغيل *إبقاء الشاشة قيد التشغيل*، فلن تطبق شاشة الجهاز مهلة بعد الاستيقاظ. إذا تم تعطيله، يمكنك ضبط الوقت الذي سيتم بعده إيقاف تشغيل شاشة الجهاز إذا لم تتفاعل معها، من ٥ إلى ٦٠ ثانية.

    ![مهلة بعد الاستيقاظ في أندرويد](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![مهلة بعد الاستيقاظ في أندرويد](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### تشغيل الشاشة {#turn-screen-on}

![تشغيل الشاشة في أندرويد](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

حدد خيارات تنشيط الشاشة وتأكد من بقاء OsmAnd في المقدمة عند قفل الجهاز.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](../setup/route-navigation.md)
- [الملاحة بواسطة مسار](../setup/gpx-navigation.md)
- [الملاحة بواسطة العلامات](../setup/markers-navigation.md)
- [تفاصيل المسار](../setup/route-details.md)
- [إعدادات الملاحة](./navigation-settings.md)
- [شاشة الخريطة أثناء الملاحة](./map-during-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

### المشاكل الشائعة والحلول {#common-issues-and-solutions}

1. [مشاكل الصوت.](#solving-audio-issues)
2. [اختبار التوجيهات الصوتية.](#testing-of-voice-prompts)
3. [لماذا يجب أن أستخدم صوت TTS بدلاً من صوت مسجل؟](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [لا يعمل TTS بشكل صحيح؟ اتبع هذه الخطوات لإصلاحه.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)