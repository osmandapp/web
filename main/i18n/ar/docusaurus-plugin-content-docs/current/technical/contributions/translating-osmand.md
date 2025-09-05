---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# كيفية ترجمة OsmAnd - نحتاج إلى مساعدتكم! {#how-to-translate-osmand---we-need-your-assistance}


نحن نقدر حقًا مساعدتكم في ترجمة OsmAnd! توفير ترجمات نص العرض ليس معقدًا للغاية، والطريقة المفضلة لتوفير ترجمات السلاسل موضحة هنا: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* إذا لم تكن اللغة التي ترغب في المساعدة في الترجمة إليها مدرجة بعد، فيرجى فتح مشكلة [هنا](https://github.com/osmandapp/Osmand/issues) (يتطلب حساب GitHub).
* يمكن أيضًا تعديل ملفات اللغات الموجودة عن طريق تحرير ملف _strings.xml_ المعني مباشرة في التعليمات البرمجية الخاصة بنا عبر آليات GitHub، ولكن هذه ليست الطريقة المفضلة.
* للمرجعية فقط: يتم الاحتفاظ بالسلاسل الرئيسية في [ملف strings.xml باللغة الإنجليزية الأمريكية](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). توجد بيانات السلسلة لمستخرج بيانات الخرائط في ملفات `swing_messages_{language}.properties` في مشروع [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(ملاحظة هاردي: الرابط معطل!)**.

شكراً لمساعدتكم!

## بعض الأسئلة والأجوبة المتكررة: {#some-frequent-questions-and-answers}

#### س1: ما هي السلاسل التي يجب أن أترجمها؟ {#q1-which-strings-should-i-translate}
أداة Weblate سهلة الاستخدام. فقط إذا حاولت تحرير الملفات مباشرة:
* في `strings.xml`، تبدو السلاسل كـ `<string name="shared_string_save_as_gpx">Save as GPX track</string>`. ترجم فقط الجزء `Save route as GPX track`.
* في `swing_messages.properties`، تبدو السلاسل كـ `IndexCreator.INDEX_CITIES=Indexing cities...`. ترجم فقط الجزء الأيمن `Indexing cities...`.

#### س2: لا أرغب في الإنشاء في Weblate أو GitHub، هل يمكنني ببساطة إرسال الملف إليكم؟ {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
نعم، يمكنك إرسال الملف عبر البريد الإلكتروني، ولكن يرجى تجربة الطرق المفضلة، فهي سهلة.

#### س3: كيف يمكنني التحقق مما تغير في ملف __strings.xml الإنجليزي__؟ {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
يرجى استخدام Weblate كما هو موضح أعلاه، وسيعرض لك جميع التغييرات. إذا كنت ترغب في التحقق من المصدر يدويًا مقابل ملفك: عادةً ما تتم إضافة السلاسل الجديدة في الجزء العلوي من ملف موارد اللغة الرئيسية. يمكنك تنزيله واستخدام بعض الأدوات المساعدة مثل pspad أو vim لمقارنتها. يمكنك أيضًا استخدام *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* أو سجل الملف على GitHub لعرض آخر التعديلات.

## ما هي اللغات التي سيتم تضمينها في OsmAnd؟ {#what-languages-will-be-included-in-osmand}

> أيها المترجمون الأعزاء،
>
> شكرًا جزيلاً لكم جميعًا على جهودكم لإكمال ترجمات لغة العرض لدينا، وأيضًا لترجمة OsmAnd إلى المزيد والمزيد من اللغات على [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> يرجى ملاحظة ما يلي: يسعدني تضمين أي لغة جديدة بمعدل ترجمة >10% في قائمة اختيار لغة العرض في OsmAnd، (سأضع علامة "غير مكتملة" عليها حتى تصل إلى ~80%). يرجى نشر مشكلة مع OsmAnd إذا كنت بحاجة إلى القيام بذلك، فأنا أراقب هذه الأرقام على Weblate بشكل متقطع فقط.
>
> لسوء الحظ، يبدو أن اللغات التي تحتوي على رموز ISO 639-2 المكونة من 3 أحرف تواجه حاليًا مشكلات في Android، انظر على سبيل المثال: * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> هذا يعني، للأسف، أن أي لغة من هذا القبيل قد لا تظهر في قوائم OsmAnd على جهازك. (تؤثر هذه المشكلة فقط على اللغة المستخدمة في قوائم التطبيق، وليس في الخريطة، بالطبع.)
>
> شكرًا،
> الدكتور هاردي مولر