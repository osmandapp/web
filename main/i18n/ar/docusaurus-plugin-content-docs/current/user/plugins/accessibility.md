---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
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

تعمل إمكانية الوصول على تحسين قابلية الاستخدام للمكفوفين وضعاف البصر من خلال التكامل مع أدوات [إمكانية الوصول في أندرويد](https://www.android.com/accessibility/). توفر الإضافة **تحويل النص إلى كلام، والتحكم بالإيماءات، والإعلانات التلقائية** و**ردود الفعل اللمسية** لجعل التنقل أكثر سهولة. في نظام iOS، يستخدم OsmAnd ميزات إمكانية الوصول المدمجة في Apple مثل VoiceOver.


### كيفية الاستخدام (أندرويد) {#how-to-use-android}

![إمكانية الوصول](@site/static/img/plugins/Accessibility/access_turned_off.png)

***تفعيل إضافة إمكانية الوصول:***

1. **تفعيل الإضافة**: *القائمة ← الإضافات ← إمكانية الوصول ← تفعيل*.

2. **تشغيل وضع إمكانية الوصول**:
   - انتقل إلى *إعدادات النظام ← إمكانية الوصول* على جهاز أندرويد الخاص بك.
   - قم بتمكين TalkBack أو أي قارئ شاشة آخر.

3. **تعديل إعدادات الإضافة**:
   - افتح [إعدادات إمكانية الوصول](#plugin-settings) داخل تطبيق OsmAnd.
   - قم بتكوين ميزات مثل سرعة الكلام، والإعلان التلقائي، وردود الفعل اللمسية.

<br/>

***الميزات والوظائف:***

- **التحكم بالإيماءات**:
   - يدعم جميع [إيماءات OsmAnd القياسية](../map/interact-with-map#gestures).
   - يعدل الإيماءات لتتوافق مع تعليمات **TalkBack** في أندرويد.

- **تكامل TalkBack**:
   - يوفر قارئ الشاشة TalkBack إرشادات صوتية للتنقل والتفاعلات مع القوائم.
   - تعرف على المزيد حول إيماءات TalkBack [هنا](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **العمليات في الخلفية**. تستمر ردود الفعل الصوتية واللمسية حتى عندما تكون الشاشة مطفأة أو مقفلة.

- **إجراءات زر البوصلة**:

| الإيماءة | الإجراء | مكافئ TalkBack |
|-----|-----|-----|
| **نقرة واحدة** | تدوير الخريطة إلى **الشمال** | **نقرة مزدوجة** |
| **نقرة طويلة** | يفتح قائمة [اتجاهات الخريطة](../map/interact-with-map.md#map-orientation-modes) | **نقرة مزدوجة مع الاستمرار** |
| **نقرة مزدوجة** | *غير متوفر في وضع إمكانية الوصول* | *غير مدعوم* |


### كيفية الاستخدام (iOS) {#how-to-use-ios}

يستخدم إصدار iOS من OsmAnd **أدوات إمكانية الوصول المدمجة** في النظام.

1. **تفعيل VoiceOver**:
   - اذهب إلى *الإعدادات ← إمكانية الوصول ← VoiceOver*.
   - قم بتكوين **إيماءات VoiceOver** للاستخدام مع OsmAnd.

2. **الميزات المدعومة**:
   - **دعم قارئ الشاشة** لتفاعلات الخريطة.
   - **إيماءات قابلة للتخصيص** من خلال إعدادات iOS.
   - جميع [إيماءات OsmAnd القياسية](../map/interact-with-map#gestures) متوفرة.

3. **تعرف على المزيد**:
   - اقرأ عن ميزات إمكانية الوصول البصرية في iOS [هنا](https://www.apple.com/accessibility/vision/).
   - استكشف إيماءات VoiceOver للآيفون [هنا](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لتفعيل ميزات إمكانية الوصول بالجهاز في OsmAnd، تحتاج إلى إجراء الإعدادات التالية:

1. **تفعيل** [إضافة إمكانية الوصول](../plugins/index.md#enable--disable): *القائمة ← الإضافات ← إمكانية الوصول ← تفعيل*.
2. **تفعيل وضع إمكانية الوصول** على جهازك.
3. تكوين [إعدادات](#plugin-settings) إضافة إمكانية الوصول.


## إعدادات الإضافة {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![إمكانية الوصول](@site/static/img/plugins/Accessibility/access_.png)

توفر إضافة إمكانية الوصول إعدادات متنوعة لتخصيص التنقل والتفاعل للمستخدمين ذوي الإعاقة. يتم تطبيق هذه الإعدادات لكل [ملف شخصي](../personal/profiles.md) في OsmAnd.

| الإعداد | الوصف |
|---------------------------|-------------|
| **وضع إمكانية الوصول** | يُمكّن *ميزات OsmAnd المدمجة* أو يستخدم **إعدادات النظام**. |
| **سرعة الكلام** | يتحكم في *سرعة تحويل النص إلى كلام*، تتراوح من **50% إلى 200%**. |
| [الإعلان التلقائي الذكي](#smart-autoannounce-and-clockwise-directions) | يوفر *إرشادات صوتية* عند الانحراف عن المسار. |
| **فترة الإعلان التلقائي** | يحدد الحد الأدنى للوقت بين الإعلانات، من **5 ثوانٍ إلى 5 دقائق**. |
| **نمط الاتجاه** | اختر بين *جانبي (8 اتجاهات)* أو [مع عقارب الساعة](#smart-autoannounce-and-clockwise-directions) (12 اتجاهًا)*. |
| **الاتجاهات الصوتية** | يشغل *إرشادات صوتية* تشير إلى الاتجاه. |
| **الاتجاهات اللمسية** | يوفر *ردود فعل اهتزازية* للانعطافات والانحرافات. |

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

- **قارئ الشاشة** - استخدم TalkBack (*أندرويد*) أو VoiceOver (*iOS*) لتحسين التفاعل مع الخريطة.
- **التنقل الصوتي** - قم بتمكين الإعلان التلقائي لتلقي الاتجاهات الصوتية أثناء إيقاف تشغيل الشاشة.
- **ردود الفعل اللمسية** - مثالية للبيئات ذات الرؤية المنخفضة أو عندما تكون الإرشادات الصوتية غير عملية.


#### الإعلان التلقائي الذكي والاتجاهات مع عقارب الساعة {#smart-autoannounce-and-clockwise-directions}

توفر ميزة **الإعلان التلقائي الذكي** *إشعارات صوتية* عند الانحراف عن المسار المخطط له، بينما يوفر **نمط الاتجاه مع عقارب الساعة** *إرشادات تنقل تستند إلى وجه الساعة*. تم تصميم هذه الميزات لدعم المستخدمين ضعاف البصر الذين يعتمدون على *التوجيه الصوتي*.

- إذا لم يتم **تمكين TalkBack**، فإن كلاً من *الإعلان التلقائي الذكي* و*الاتجاهات مع عقارب الساعة* سيعرضان فقط *إشعارات نصية* على الشاشة.

- يتم تفعيل **الإشعارات الصوتية** فقط عندما يتم تمكين *TalkBack* في **إعدادات نظام الجهاز**.

- اضبط **فترة الإعلان التلقائي** (على سبيل المثال، *10 ثوانٍ*) للتحكم في تكرار الإعلانات.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: فبراير 2025*