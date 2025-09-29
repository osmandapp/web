---
source-hash: 4db0114e42759ddaed0f65e43eed0a9d1c7cdaa964a48ca19d502843f4cd2bf1
sidebar_position: 1
title:  إمكانية الوصول
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


:::caution ملاحظة
تتوفر إضافة إمكانية الوصول فقط على **إصدار أندرويد** من OsmAnd. يعتمد [إصدار iOS](#how-to-use-ios) على إعدادات إمكانية الوصول الافتراضية للنظام.
:::

## نظرة عامة {#overview}

تعمل إمكانية الوصول على تحسين قابلية الاستخدام للمستخدمين المكفوفين وضعاف البصر من خلال التكامل مع أدوات [إمكانية الوصول في أندرويد](https://www.android.com/accessibility/). توفر الإضافة **تحويل النص إلى كلام، والتحكم بالإيماءات، والإعلانات التلقائية** و**الاستجابة اللمسية** لجعل التنقل أكثر سهولة. في نظام iOS، يستخدم OsmAnd ميزات إمكانية الوصول المدمجة من Apple مثل VoiceOver.


### كيفية الاستخدام (Android) {#how-to-use-android}

![إمكانية الوصول](@site/static/img/plugins/Accessibility/access_turned_off.png)

***تفعيل إضافة إمكانية الوصول:***  

١. **تنشيط الإضافة**: *القائمة ← الإضافات ← إمكانية الوصول ← تفعيل*.

٢. **تشغيل وضع إمكانية الوصول**:  
   - انتقل إلى *إعدادات النظام ← إمكانية الوصول* على جهاز Android الخاص بك.
   - قم بتمكين TalkBack أو قارئ شاشة آخر.

٣. **ضبط إعدادات الإضافة**:  
   - افتح [إعدادات إمكانية الوصول](#plugin-settings) داخل تطبيق OsmAnd.
   - قم بتهيئة ميزات مثل معدل الكلام، والإعلان التلقائي، والاستجابة اللمسية.

<br/>

***الميزات والوظائف:***

- **التحكم بالإيماءات**:
   - يدعم جميع [إيماءات OsmAnd](../map/interact-with-map.md#gestures) القياسية.
   - يضبط الإيماءات لتتوافق مع تعليمات **TalkBack** في أندرويد.

- **تكامل TalkBack**:
   - يوفر قارئ الشاشة TalkBack إرشادات صوتية للتنقل والتفاعل مع القوائم.
   - تعرف على المزيد حول إيماءات TalkBack [هنا](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **العمليات في الخلفية**. يستمر الصوت والاستجابة اللمسية حتى عند إيقاف تشغيل الشاشة أو قفلها.

- **إجراءات زر البوصلة**:

| الإيماءة | الإجراء | ما يعادلها في TalkBack |
|-----|-----|-----|
| **نقرة واحدة** | تدوير الخريطة إلى **الشمال** | **نقر مزدوج** |
| **نقرة طويلة** | يفتح قائمة [اتجاهات الخريطة](../map/interact-with-map.md#map-orientation-modes) | **نقر مزدوج مع الاستمرار** |
| **نقر مزدوج** | *غير متوفر في وضع إمكانية الوصول* | *غير مدعوم* |


### كيفية الاستخدام (iOS) {#how-to-use-ios}

يستخدم إصدار iOS من OsmAnd **أدوات إمكانية الوصول المدمجة** في النظام.

١. **تفعيل VoiceOver**:
   - اذهب إلى *الإعدادات ← تسهيلات الاستخدام ← VoiceOver*.
   - قم بتهيئة **إيماءات VoiceOver** للاستخدام مع OsmAnd.

٢. **الميزات المدعومة**:
   - **دعم قارئ الشاشة** للتفاعل مع الخريطة.
   - **إيماءات قابلة للتخصيص** من خلال إعدادات iOS.
   - جميع [إيماءات OsmAnd](../map/interact-with-map.md#gestures) القياسية متاحة.

٣. **تعرف على المزيد**:
   - اقرأ عن ميزات إمكانية الوصول للرؤية في iOS [هنا](https://www.apple.com/accessibility/vision/).
   - استكشف إيماءات VoiceOver للآيفون [هنا](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لتنشيط ميزات إمكانية الوصول بالجهاز في OsmAnd، تحتاج إلى إجراء الإعدادات التالية:

١. **تفعيل** [إضافة إمكانية الوصول](../plugins/index.md#enable--disable): *القائمة ← الإضافات ← إمكانية الوصول ← تفعيل*.  
٢. **تفعيل وضع إمكانية الوصول** على جهازك.
٣. تهيئة [إعدادات](#plugin-settings) إضافة إمكانية الوصول.


## إعدادات الإضافة {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![إمكانية الوصول](@site/static/img/plugins/Accessibility/access_.png)  

توفر إضافة إمكانية الوصول إعدادات متنوعة لتخصيص التنقل والتفاعل للمستخدمين ذوي الإعاقة. يتم تطبيق هذه الإعدادات لكل [ملف شخصي](../personal/profiles.md) في OsmAnd.

| الإعداد | الوصف |  
|---------------------------|-------------|  
| **وضع إمكانية الوصول** | يُمكّن *ميزات OsmAnd المدمجة* أو يستخدم **إعدادات النظام**. |  
| **معدل الكلام** | يتحكم في *سرعة تحويل النص إلى كلام*، ويتراوح من **٥٠٪ إلى ٢٠٠٪**. |  
| [الإعلان التلقائي الذكي](#smart-autoannounce-and-clockwise-directions) | يوفر *إرشادات صوتية* عند الانحراف عن المسار. |  
| **فترة الإعلان التلقائي** | يحدد الحد الأدنى للوقت بين الإعلانات، من **٥ ثوانٍ إلى ٥ دقائق**. |  
| **نمط الاتجاه** | اختر بين *جانبي (٨ اتجاهات)* أو [اتجاه عقارب الساعة](#smart-autoannounce-and-clockwise-directions) (١٢ اتجاهًا)*. |  
| **الاتجاهات الصوتية** | تشغل *إرشادات صوتية* تشير إلى الاتجاه. |  
| **الاتجاهات اللمسية** | توفر *استجابة اهتزازية* للمنعطفات والانحرافات. |  

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***نصائح لتحسين إمكانية الوصول:***

- **قارئ الشاشة** - استخدم TalkBack (*Android*) أو VoiceOver (*iOS*) لتحسين التفاعل مع الخريطة.
- **التنقل الصوتي** - قم بتمكين الإعلان التلقائي لتلقي التوجيهات الصوتية أثناء إيقاف تشغيل الشاشة.
- **الاستجابة اللمسية** - مثالية للبيئات منخفضة الرؤية أو عندما تكون الإرشادات الصوتية غير عملية.


### الإعلان التلقائي الذكي واتجاهات عقارب الساعة {#smart-autoannounce-and-clockwise-directions}

توفر ميزة **الإعلان التلقائي الذكي** *إشعارات صوتية* عند الانحراف عن المسار المخطط له، بينما يقدم **نمط اتجاه عقارب الساعة** *إرشادات تنقل تستند إلى واجهة الساعة*. تم تصميم هذه الميزات لدعم المستخدمين ضعاف البصر الذين يعتمدون على *الإرشاد الصوتي*.  

- إذا **لم يتم تمكين TalkBack**، فسيعرض كل من *الإعلان التلقائي الذكي* و*اتجاهات عقارب الساعة* *إشعارات نصية* فقط على الشاشة.  

- يتم تنشيط **الإشعارات الصوتية** فقط عند تمكين *TalkBack* في **إعدادات نظام الجهاز**.  

- اضبط **فترة الإعلان التلقائي** (على سبيل المثال، *١٠ ثوانٍ*) للتحكم في تكرار الإعلانات.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)