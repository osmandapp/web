---
source-hash: 1bd20746ffeab531cb3d1ba5be872da020fbb3e3e511c4199d1144aff385a1dc
sidebar_position: 11
title:  متتبع OsmAnd
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


<InfoAndroidOnly />

## نظرة عامة {#overview}

متتبع OsmAnd هو عميل تيليجرام معدل تم إنشاؤه للمراقبة المرنة وإرسال الرسائل مع مواقع GPS في الوقت الفعلي.

يساعدك [متتبع OsmAnd](https://play.google.com/store/apps/details?id=net.osmand.telegram) على رؤية جهات الاتصال الخاصة بك على الخريطة في OsmAnd. له جانب اجتماعي، مما يعني أنه لاستخدامه، تحتاج إلى توفير الوصول إلى جهات الاتصال الخاصة بك للمنصة التي يختارها OsmAnd.

لقد اخترنا [Telegram](https://telegram.org/) كأكثر منصة اجتماعية مفتوحة لأنها تحتوي على [واجهة برمجة تطبيقات مفتوحة (Open API)](https://core.telegram.org/api)، و[حزمة تطوير برمجيات مفتوحة (Open SDK)](https://core.telegram.org/api)، وعلاوة على ذلك، ستحتوي في النهاية على تطبيق خادم مفتوح (Blockchain).

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/My_Location.png)  ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/Map.png)


### كيف يعمل {#how-it-works}

الأهم من ذلك، هناك مستوى عالٍ من التوافق بين التطبيقات. يمكنك بسهولة مشاركة موقعك مع جهات الاتصال الخاصة بك دون الحاجة إلى تطبيق Telegram للجوال (OsmAnd Online GPS Tracker هو عميل Telegram مستقل)، وعلى العكس من ذلك، لا تحتاج جهات الاتصال الخاصة بك إلى [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) لرؤية موقعك.

لقد صممنا [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) بحيث يمكنك الاستمرار في استخدام تطبيق Telegram وتطبيق OsmAnd بالطريقة التي اعتدت عليها، دون قيود إضافية.

يرسل التطبيق رسائل الموقع المباشر إلى الدردشات المحددة للوقت الذي تحدده، ويعرض قائمة بجهات الاتصال والمجموعات الخاصة بك، ويتحقق من الدردشات بحثًا عن رسائل تحتوي على موقعك، والتي يتم عرضها بعد ذلك على الخريطة في OsmAnd.
لا يرسل التطبيق أو يعرض رسائلك النصية.

سجل الدخول باستخدام رقم هاتفك المسجل في Telegram لتمكين ما يلي:

- إدارة قائمة جهات الاتصال والمجموعات التي ترسل لك موقعها.
- عرض موقع جهات الاتصال والمجموعات في الوقت الفعلي على خريطة في OsmAnd.
- ضبط وقت مشاركة الموقع بشكل منفصل لكل دردشة.
- ضبط وتيرة تحديث موقعك.
- مراقبة التسلسل الزمني لتحركاتك وتحركات جهات الاتصال الخاصة بك.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/My-location_1.png)     ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/Live.png)


## معلمات الإعداد المطلوبة {#required-setup-parameters}

تثبيت ملف APK لـ OsmAnd Online GPS Tracker:

- [متجر Google Play](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [خادم OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## إعدادات الإضافة {#plugin-settings}

هناك العديد من الإعدادات لإدارة وتيرة مشاركة المواقع والتحكم في عرض المواقع المرسلة إليك.

لفتح قائمة *الإعدادات*:

*شاشة [موقعي](#my-location-screen) ← اسحب الشاشة لأسفل (قائمة جهات الاتصال) ← ⋮ ← الإعدادات*
أو
*شاشة [مباشر الآن](#live-now-screen) ← ⋮ ← الإعدادات*

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/tracker_settings.png) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### الموقع {#position}

**إرسال موقعي** — يسمح لك بتعيين الفاصل الزمني لإرسال موقعك من مرة واحدة في الثانية (لزيادة الدقة) إلى مرة واحدة كل ٥ دقائق (لتقليل استهلاك الطاقة).

**عدم التحرك** — يسمح لك بتعيين الوقت (من دقيقة واحدة إلى ساعة واحدة) الذي يعتبر بعده موقع جهة الاتصال قديمًا. إذا أصبح الموقع قديمًا، فإنه يتحول إلى اللون الرمادي.

**سجل المواقع** — يسمح لك بتعيين الوقت (من ٥ دقائق إلى ٢٤ ساعة) الذي سيتم بعده إخفاء جهة الاتصال ذات الموقع المحذوف من القائمة وخريطة OsmAnd.

**إرسال الموقع كـ** - يسمح لك باختيار فئة لإرسال رسائل حول موقعك في Telegram (٣ أنواع من الإرسال): نص، خريطة، نص وخريطة.

**وقت انتهاء صلاحية المخزن المؤقت** - يسمح لك باختيار وقت حفظ النقاط في المخزن المؤقت.

**العمل في الخلفية** - يسمح لك بتغيير إعدادات تحسين البطارية لتثبيت مشاركة الموقع.

**مصدر الموقع** - يسمح لك باختيار *خدمات Google Play* (افتراضيًا) أو *Android API* لتحديد الموقع.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/settingstracker.png) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/20.jpg)


### الوحدات والتنسيقات {#units--formats}

يسمح لك بإضافة إعدادات للوحدات والتنسيقات. يمكنك الآن اختيار قيمك المريحة لرسائل Telegram عند مشاركة بيانات الموقع.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/22.jpg)  ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/20.jpg)


### المظهر {#appearance}

يسمح لك بإظهار عدد نقاط GPS المستلمة من جهات اتصال أخرى، وكذلك تلك التي أرسلتها أنت.


### الخصوصية {#privacy}

استخدام الوكيل (proxy) داخل متتبع OsmAnd. اذهب إلى الإعدادات واكتب بيانات الوكيل الخاص بك: *الإعدادات ← الخصوصية ← إعدادات الوكيل*

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/3-1.jpg)  ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/4-1.jpg)


### إعدادات GPS {#gps-settings}

إعدادات نقطة الموقع. على سبيل المثال، إذا بقيت في مكان واحد لبعض الوقت دون حركة، فلن يتم إرسال بيانات نقطة موقعك وسيعرض مسار GPX الخاص بك بيانات أكثر دقة وصحة.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/5-1.jpg)


### مشاركة الموقع كـ {#share-location-as}

إذا كنت ترغب في توصيل عدة أجهزة بحساب Telegram واحد، فأنت بحاجة إلى النقر فوق "إضافة جهاز" وتسمية الجهاز.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### اتصال OsmAnd {#osmand-connect}

يسمح لك هذا الإعداد بتحديد إصدار OsmAnd الذي ستظهر فيه جهات الاتصال الخاصة بك مع مواقعها على الخريطة.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/Settings-2.png)


### الحساب {#account}

استخدم هذا الإعداد للتحقق من حساب Telegram الذي تستخدمه حاليًا. يمكنك أيضًا في هذه القائمة الخروج من تطبيق OsmAnd Telegram ببساطة عن طريق النقر على زر *تسجيل الخروج*.


### مخزن Logcat المؤقت {#logcat-buffer}

هنا يمكنك التحقق من سجلات التطبيق التفصيلية ومشاركتها.


## شاشة موقعي {#my-location-screen}

في هذه الشاشة، يمكنك رؤية جهات اتصال Telegram الخاصة بك. يمكنك اختيار واحدة أو أكثر منها، وتعيين خيارات المشاركة، والبدء في مشاركة موقعك.

بعد التشغيل الأول، سترى قائمة بجهات الاتصال المقترحة. هذه هي أحدث خمس جهات اتصال شاركت موقعك معها. يمكنك النقر مرة واحدة فقط لمواصلة مشاركة موقعك مع جهات الاتصال هذه.

وقت المشاركة هو آخر وقت مشاركة اخترته لجهة الاتصال.

عندما تبدأ المشاركة، سترى قائمة بجهات الاتصال المقترحة وزر *العودة إلى OsmAnd* على شاشة *موقعي*.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/8.jpg)     ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/9.jpg)


## شاشة مباشر الآن {#live-now-screen}

في هذه القائمة، يمكنك رؤية جميع جهات الاتصال التي تشارك موقعها معك. انقر على جهة الاتصال وانظر إليها على **خريطة OsmAnd**.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/Live.png)


### العلامة النشطة على خريطة OsmAnd {#active-marker-on-the-osmand-map}

يسمح لك بتتبع المسافة والسرعة وزاوية حركة جهات الاتصال الخاصة بك على خريطة OsmAnd وفي نص Telegram. يمكنك فهم أين وكيف تتحرك جهة الاتصال الخاصة بك.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/6-1.jpg) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/7-1.jpg)


## شاشة الخط الزمني {#timeline-screen}

هذه هي علامة التبويب الثالثة في التطبيق. هنا يمكنك تحديد يوم لعرض سجل المواقع التي تمت مشاركتها معك. يؤدي تحديد يوم إلى عرض جهات الاتصال التي أظهرت موقعها في ذلك اليوم.

تسمح لك المراقبة بجمع المعلومات في الخلفية عندما تشاركها جهات الاتصال الخاصة بك. للقيام بذلك، يجب عليك تمكينها.

لعرض جميع المعلومات حول موقع جهة اتصال، انقر على أيقونتها أو افتح مسار GPX في OsmAnd واستكشف المسار بمزيد من التفصيل ([اقرأ المزيد هنا](./trip-recording.md)). يمكنك أيضًا مشاركة مسار GPX لفترة محددة: عن طريق إرساله إلى بريد إلكتروني أو أي برنامج مراسلة فورية.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/Timeline_2.png)

يمكنك رؤية الحركة المباشرة لجهات الاتصال الخاصة بك على خريطة OsmAnd باستخدام مسار GPS عبر الإنترنت. للقيام بذلك، تحتاج إلى تمكين *مباشر* عند جهة الاتصال في *الخط الزمني*. إذا كان هناك العديد من جهات الاتصال المشتركة في الوقت الحالي، فإن تطبيق OsmAnd يختار لون المسارات بشكل عشوائي.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/1.jpg) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/2.jpg)

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/3.jpg) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/4.jpg)

عند النقر على "عرض في OsmAnd" أو على الخريطة المصغرة، يمكنك تحديد إعدادات خاصة لتتبع GPX لجهة الاتصال الخاصة بك في تطبيق OsmAnd ورؤية حركتهم في الوقت الفعلي على خريطة OsmAnd.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/5.jpg) ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/6.jpg)

إذا لم تكن هناك بيانات مجمعة في التاريخ المحدد، فسيظهر إشعار خاص على الشاشة. يمكنك الانتقال إلى أقرب تاريخ عن طريق النقر على السهم للأمام أو للخلف.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/7.jpg)


## ويدجت المتتبع {#tracker-widget}

لعرض [الويدجت](../widgets/info-widgets.md#trip-recording-widgets)، تحتاج أولاً إلى تمكين إضافة متتبع OsmAnd. بعد ذلك، ستظهر ويدجت بكلمة *Start* في الزاوية اليمنى العليا من شاشة OsmAnd.

لتعطيلها، يمكنك الذهاب إلى *القائمة الرئيسية ← تهيئة الشاشة*.

![متتبع OsmAnd](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

الويدجت لها عدة طرق عرض.

١. الأولى هي *Start*.
   عند النقر على *Start*، تنتقل إلى [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram)، حيث يمكنك تحديد أي جهات اتصال أو النقر على جهات الاتصال المقترحة.
٢. ثانيًا، عندما تبدأ في مشاركة موقعك، تغير الويدجت مظهرها.

   - أيقونة الرمز التعبيري *OK* الخضراء تعني أن موقعك يتم مشاركته الآن. كل شيء طبيعي، والمشاركة تعمل بدون أخطاء.
   - أيقونة الرمز التعبيري *OK* البرتقالية تعني أنه لا يمكن إرسال موقعك. هناك مشكلة في الاتصال بالإنترنت أو GPS.

   ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/11.jpg)     ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/13.jpg)

   - إذا لم يكن لديك اتصال بالإنترنت لفترة طويلة، يتم حفظ نقاط موقعك في المخزن المؤقت لمتتبع OsmAnd. تتغير الويدجت في OsmAnd إلى أيقونة رمز تعبيري رمادية. تعرض وقت ملء المخزن المؤقت، والمدة التي يحفظ فيها المخزن المؤقت نقاط موقعك بالفعل.

   ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/15.jpg)     ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/16.jpg)

٣. بمجرد استعادة الاتصال بالإنترنت، سيبدأ في تحميل نقاط الموقع من المخزن المؤقت. ستغير ويدجت OsmAnd مظهرها وسيبدأ عدد الدقائق فيها في التناقص. عندما يتم تحميل جميع نقاط الموقع من المخزن المؤقت إلى Telegram، ستظهر أيقونة الرمز التعبيري *OK* على الويدجت.

   ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/18.jpg)     ![متتبع OsmAnd](@site/static/img/plugins/online-tracker/23.jpg)

٤. إذا رأيت الويدجت كأيقونة رمز تعبيري *OK*، فهذا يعني أن كل شيء على ما يرام. عملية التبادل تسير دون أي مشاكل.


## مساعد OsmAnd {#osmand-assistant}

يحتوي تطبيق OsmAnd على بوت Telegram خاص به يسمى "مساعد OsmAnd"، والذي يساعدك على دمج OsmAnd Telegram مع متتبعات أو واجهات برمجة تطبيقات تابعة لجهات خارجية. ستتمكن من مشاركة ليس فقط موقعك ولكن أيضًا موقع دراجتك أو مجموعة من الأشخاص يتسابقون متاحين من خلال واجهة برمجة التطبيقات. سيمنحك OsmAnd Telegram عرضًا تقديميًا رائعًا لمواقعك على الخريطة في OsmAnd نفسه.

يرجى مشاركتنا رأيك حول هذا التطبيق الجديد على [Twitter](https://twitter.com/osmandapp) والقنوات الاجتماعية الأخرى.

لعرض مواقع GPS لجهات الاتصال على الخريطة، تحتاج إلى أحدث إصدار من [OsmAnd أو OsmAnd+](./../purchases/android.md). الحد الأدنى للإصدار المدعوم من OsmAnd أو OsmAnd+ هو 3.0.4.