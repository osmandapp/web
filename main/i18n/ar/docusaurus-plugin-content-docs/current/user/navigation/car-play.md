---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title:  CarPlay
android: false
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



## نظرة عامة {#overview}

عادةً ما يُحظر قيادة السيارة واستخدام الهاتف أو الجهاز اللوحي في نفس الوقت بموجب القانون لأسباب تتعلق بالسلامة. [***CarPlay***](https://www.apple.com/ios/carplay/) هو برنامج يوفر إصدارًا مُكيّفًا ومُحسّنًا من تطبيق OsmAnd للاستخدام الآمن أثناء القيادة، مما يسهل ويؤمن الوصول إلى وظائف الملاحة في التطبيق.

لاستخدام *CarPlay* على شاشة سيارتك، اتبع هذه الخطوات:

1. *CarPlay* غير متاح في جميع البلدان. تأكد من أنه مدعوم في [بلدك أو منطقتك](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) وأن *CarPlay* مدعوم في [طراز سيارتك](https://www.apple.com/ios/carplay/available-models/).
2. [قم بتوصيل جهازك](https://support.apple.com/en-gb/HT203412) بنظام الوسائط المتعددة في سيارتك باستخدام منفذ USB أو لاسلكيًا عبر Wi-Fi أو Bluetooth. عند الاتصال لأول مرة، قد تحتاج إلى إذن لاستخدام *CarPlay* على جهازك.
3. بمجرد الاتصال، ستظهر *واجهة CarPlay* تلقائيًا على شاشة سيارتك مع جميع التطبيقات المتاحة. إذا لم تظهر *الشاشة الرئيسية لـ CarPlay*، فحدد *شعار CarPlay* على شاشة السيارة.

#### واجهة CarPlay {#carplay-interface}

*CarPlay* **ليس نسخة طبق الأصل** من تطبيق OsmAnd للجوال. إنه يتميز بواجهة مبسطة، تركز على وظائف الملاحة الأساسية لضمان القيادة الآمنة. بعض الميزات المتقدمة غير مدعومة بسبب قيود المنصة.

### شاشة الاتصال {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

أثناء توصيل جهازك بـ *CarPlay*، يتم قفل الخريطة على شاشة التطبيق. هذه ميزة أمان مقصودة لضمان التحكم في الملاحة حصريًا من شاشة السيارة، مما يقلل من تشتت الانتباه أثناء القيادة. تحقق من [الأسئلة الشائعة](#common-issues-and-solutions) حول شاشة الاتصال.

### موضع الموقع في CarPlay {#location-position-in-carplay}

يتيح لك تطبيق OsmAnd لـ *CarPlay* ضبط موضع مؤشر الموقع الحالي على الشاشة لتجنب تداخل المسار وتفاصيل الخريطة المهمة الأخرى.

**كيفية تغيير موضع المؤشر:**

- انتقل إلى *القائمة ← تكوين الشاشة ← أخرى ← [موضع الموقع على الشاشة](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- حدد الموضع المفضل لديك:
    - **تلقائي (افتراضي)**. يقوم التطبيق تلقائيًا بتحويل موضع المؤشر لوضع الملاحة أو الحركة الحرة.
    - **المركز**. يتم وضع المؤشر في منتصف الشاشة، وهو مناسب للملاحة القياسية.
    - **الأسفل**. يتم وضع المؤشر أقرب إلى أسفل الشاشة، مما يسهل مراقبة الكائنات المحيطة والتقاطعات المعقدة.

### التفاعل مع الخريطة {#interaction-with-the-map}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

يعرض *CarPlay* واجهة OsmAnd المُكيّفة مع شاشة نظام الوسائط المتعددة في السيارة. يقتصر التفاعل مع الخريطة على:

- [موقعي](../widgets/map-buttons.md#my-location-and-zoom). يحرك الجزء المرئي من الخريطة بحيث يكون موقعك الحالي في منتصف الشاشة.
- [التكبير/التصغير](../widgets/map-buttons.md#my-location-and-zoom). يتيح لك تكبير وتصغير الجزء المرئي من الخريطة.

## معلمات الإعداد المطلوبة {#required-setup-parameters}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- أولاً، تحتاج إلى تحديد وتكوين الملف الشخصي الذي سيتم استخدامه عند الاتصال بـ *CarPlay*. يمكنك قراءة كيفية تكوين ملف شخصي في مقال [الملفات الشخصية (الإعدادات)](../personal/profiles).
    - ملف شخصي مناسب لاستخدام *CarPlay* يمكن أن يكون *القيادة*، ونوع التوجيه يمكن أن يكون [توجيه السيارة](../navigation/routing/car-based-routing.md).
    - يحتوي OsmAnd على عنصر منفصل [ملف CarPlay الشخصي](#carplay-profile) للوصول السريع إلى قائمة الملفات الشخصية المتاحة للاتصال بـ *CarPlay*.
- لكي يعمل OsmAnd، [قم بتوصيل جهاز iOS الخاص بك](#overview) بنظام الوسائط المتعددة في السيارة. لمعرفة المزيد حول كيفية توصيل جهازك وإعداده، يمكنك زيارة موقع [**CarPlay**](https://support.apple.com/en-us/HT205634).
- تحتاج إلى الحصول على أحد [الاشتراكات المدفوعة أو المشتراة من OsmAnd](../purchases/ios#free-and-paid-features). تحقق من ذلك هنا *القائمة ← الإعدادات ← المشتريات*.
- بمجرد الاتصال، يمكنك تعيين وجهة وبدء ملاحة OsmAnd في *CarPlay*.

:::note
قد تحتاج إلى اتصال بالإنترنت لاستخدام OsmAnd في *CarPlay*. إذا كان جهازك لديه وصول محدود إلى الإنترنت، يمكنك [*تحميل أو إنشاء مسارات مسبقًا*](../personal/tracks/manage-tracks.md) واستخدامها بدون الإنترنت.
:::

### بدء الملاحة {#start-navigation}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-start(1).png)

لاستخدام إصدار iOS من تطبيق OsmAnd في *CarPlay*، يجب عليك شراء [إصدار مدفوع من التطبيق أو الاشتراك](../purchases/ios#free-and-paid-features).

1. لإنشاء مسار، تحتاج إلى اختيار [نقطة نهاية المسار](#select-a-route-endpoint) على *شاشة CarPlay* أو في [تطبيق OsmAnd](../navigation/setup/route-navigation.md).
2. يمكنك استخدام [التوجيهات الصوتية](#voice-prompts) للاستماع إلى الاتجاهات أو الرسائل حول المشكلات على الطريق.
3. بعد تحديد موقع، اضغط على **بدء** لمتابعة المسار.
4. أثناء القيادة، ستعرض شاشة السيارة معلومات OsmAnd حول موقعك الحالي على الخريطة، واتجاهات القيادة، والمسافة إلى المنعطف التالي، والخطوط، ووقت الوصول والمسافة إلى وجهتك.
    ![شاشة CarPlay](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. إذا كنت ترغب في تغيير مسارك أو تحديد موقع مختلف، يمكنك الضغط على الزر المناسب على الشاشة.
6. بمجرد الانتهاء من مسارك، يمكنك إلغاء تنشيط *CarPlay* عن طريق فصل الجهاز عن نظام الوسائط المتعددة في سيارتك.

:::note
جميع الفئات لاختيار **نقطة نهاية المسار**، *[السجل](#history)، [نقاط الاهتمام](#poi-categories)، [العلامات](#map-markers)، [البحث](#search)، [المفضلة](#favorites)، و [المسارات](#tracks)* قد لا تحتوي على عدد من العناصر في القائمة أكثر مما يوفره نظام الوسائط المتعددة في سيارتك. عادةً، في معظم المركبات، تقتصر القوائم ديناميكيًا على 12 أو 24 عنصرًا. هذا يعني أن القائمة في *CarPlay* قد لا تكون كاملة. يتم الإشارة إلى العدد الإجمالي للعناصر والعدد الفعلي للعناصر المعروضة تحت اسم المجلد.
:::

### ملف CarPlay الشخصي {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![ملف الإعدادات العامة الافتراضي Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**ملف CarPlay الشخصي** هو ملف شخصي محدد في تطبيق OsmAnd للاستخدام المريح لنظام الصوت والفيديو في سيارتك لعرض هذه البيانات على هاتفك لاحقًا.

يتم استخدام هذا الملف الشخصي طالما أن جهازك متصل بـ *CarPlay*. انقر على حقل *ملف CarPlay الشخصي* في قائمة *إعدادات OsmAnd* ومن قائمة [الملفات الشخصية الممكنة للاستخدام](../personal/profiles.md) حدد الملف الشخصي الذي سيتم تنشيط *CarPlay* به.

لا يمكنك تحديد ملف شخصي مباشرة في *CarPlay* من شاشة السيارة. أولاً، حدد الملف الشخصي المطلوب على جهازك وقم بإرفاق *ملف CarPlay الشخصي* به. يجب عليك تحديد ملف شخصي يتوافق مع نوع السيارة، مثل *القيادة*، *الشاحنة*، *السيارة*، *الدراجة النارية*، أو *الدراجة البخارية*. **سيقوم التطبيق بتنشيط** *ملف CarPlay الشخصي* تلقائيًا عند الاتصال بمركبة.

**لماذا من المهم تحديد الملف الشخصي المناسب لنوع سيارتك.**

- **سلامة القيادة.** تتطلب أنواع النقل المختلفة معلومات وإعدادات مختلفة عند القيادة. على سبيل المثال، قد يكون سائقو الشاحنات مقيدين بارتفاع ووزن وعرض مركباتهم، لذا يوفر لهم ملف *الشاحنة* قيودًا وإرشادات مناسبة. بينما يحتاج راكبو الدراجات والدراجات النارية إلى معلومات حول مسارات الدراجات والطرق، بدون بيانات للشاحنات.
- **المنفعة والكفاءة.** يجب تخصيص الملاحة لتلبية احتياجات وضع نقل معين. يتيح ذلك للمستخدمين تقليل الوقت الذي يستغرقه العثور على المسارات المثلى وتجنب قيود المرور غير الضرورية.

## تحديد نقطة نهاية المسار {#select-a-route-endpoint}

يمكنك تحديد [نقاط الاهتمام](../map/point-layers-on-map.md#points-of-interest-pois) أو [المفضلة](../personal/favorites.md) أو [العلامات](../personal/markers.md) التي تم تعيينها وإضافتها مسبقًا كنقطة وجهة. من الممكن أيضًا تحديد [مسار](../personal/tracks/index.md) مسجل أو تم تنزيله للمسار، أو استخدام [البحث](../search/index.md)، أو تحديد وجهة من [سجل](../search/search-history.md) المسار.

1. إذا كنت تريد موقعًا معينًا على الخريطة كنقطة نهاية، فحدد الفئة المناسبة من النقاط من القائمة، [نقاط الاهتمام](#poi-categories)، [المفضلة](#favorites)، أو [علامات الخريطة](#map-markers).

    - يمكن أن تحتوي جميع الفئات على عدد من العناصر في القائمة لا يتجاوز ما يوفره نظام الوسائط المتعددة في سيارتك. هذا يعني أن القائمة في *CarPlay* قد تكون غير مكتملة، وجميع المجلدات الأخرى متاحة فقط في تطبيق OsmAnd على جهازك.
    - يحتوي مجلد [آخر تعديل](#folder-last-modified) على قائمة بالوجهات الأخيرة، مرتبة حسب تاريخ الإضافة أو التغيير.
    - يتم ترتيب قائمة جميع المجلدات الأخرى حسب آخر تحديث، المجلدات الجديدة في أعلى القائمة. لا يمكن تغيير ترتيبها يدويًا.
    - يتم ترتيب قائمة النقاط داخل المجلدات حسب المسافة إليها، بدءًا من الأقرب. تحتوي كل نقطة على اسم أو إحداثيات، وأيقونة على شكل (اللون والأيقونة مضبوطة افتراضيًا أو تم اختيارها بواسطتك في تطبيق OsmAnd)، والمسافة من نقطة الموقع الحالي إليها.
2. حدد فئة [السجل](#history) للعثور على إحدى الوجهات الأخيرة المخزنة في ذاكرة الجهاز.
3. حدد [البحث](#search) لإدخال وجهة من فئات البحث المتاحة.

:::note
أثناء القيادة، يمكن [الإعلان](#voice-prompts) عن النقاط المحددة عند الاقتراب منها أو تجاوزها. راجع إعدادات [التوجيهات الصوتية](../navigation/guidance/voice-navigation.md) في المقال المناسب لتعيين إشعارات صوتية.
:::

### السجل {#history}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car_play_history.png)

في **فئة السجل**، يمكنك تحديد وجهة من قائمة نقاط النهاية.

- يتم ترتيبها حسب أحدث استخدام، بدءًا من الأحدث.
- يمكن أن يكون هذا مناسبًا للوصول السريع إلى المسارات المستخدمة بشكل متكرر.
- لمعرفة كيفية استخدام أو حذف وجهة، اقرأ مقال [سجل البحث](../search/search-history.md).

### فئات نقاط الاهتمام {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*نقاط الاهتمام (POIs)* هي نوع من النقاط التي تحدد الأماكن أو الكائنات على الخريطة التي تهم المستخدمين أو تثير اهتمامهم. يتم تمييزها بأيقونات خاصة متوفرة في [إعدادات OsmAnd](../map/point-layers-on-map.md#poi-types) ويتم فرزها في مجموعات.

لبناء مسار إلى *نقطة اهتمام* في *CarPlay*، اتبع هذه الخطوات:

1. حدد *نقطة الاهتمام* المطلوبة من قائمة الفئات المتاحة، أو أدخل اسم نقطة الاهتمام باستخدام [البحث](#search).
2. يحسب OsmAnd المسار ويعرضه على *شاشة CarPlay*. انقر على زر **بدء** لبدء التنقل إلى ذلك الموقع.
3. اعتمادًا على إعدادات تطبيق OsmAnd الخاص بك وسيارتك، قد تتلقى [توجيهات صوتية](#voice-prompts) لإرشادك إلى وجهتك.
4. عند وصولك إلى الموقع، سيقوم التطبيق بإعلامك بأنك وصلت إلى *نقطة الاهتمام*.

### المفضلة {#favorites}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**المفضلة** هي إحدى ميزات OsmAnd التي تتيح لك إنشاء نوع من الملاحظات على الخريطة.

- أثناء استخدام **CarPlay**، لا يمكنك إضافة أو تعديل *المفضلة*، بل يمكنك فقط استخدام الموجودة.
- يمكن العثور على قائمة [المفضلة](../personal/favorites.md#manage-favorites) في تطبيق OsmAnd *القائمة ← أماكني ← المفضلة*.
- إذا كنت ترغب في استخدامها للملاحة، فقم بتكوين كل ما تحتاجه قبل توصيل الجهاز بنظام الوسائط المتعددة في سيارتك.

### علامات الخريطة {#map-markers}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- لتحديد وجهتك النهائية كـ *علامة خريطة*، تحتاج أولاً إلى إنشاء العدد المطلوب من العلامات في تطبيق OsmAnd على جهازك قبل توصيله بنظام الوسائط المتعددة في السيارة.
- يجب أن تكون *العلامات* متاحة في قائمة *القائمة ← علامة الخريطة*.
- يتم وصف هذا بمزيد من التفصيل في مقال [العلامات](../personal/markers.md).

### المسارات {#tracks}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

لبناء مسار إلى وجهة، يمكنك تحديد مسار موجود متاح في تطبيق OsmAnd. يمكن [تنزيل](../personal/tracks/manage-tracks.md#import) المسار مسبقًا، أو استخدامه [كمسجل](../plugins/trip-recording.md) أو إنشاؤه في [تخطيط مسار](../plan-route/create-route.md).

من قائمة المسارات في *القائمة ← أماكني ← [المسارات](../personal/tracks/manage-tracks.md)*، حدد المسار المطلوب قبل الاتصال بنظام الوسائط المتعددة في السيارة، وسيقوم المسار إما بالبناء حتى بداية المسار أو عرض الاتجاه الحالي على طول المسار.

يمكن أيضًا تحديد المسارات مباشرة على شاشة السيارة في *CarPlay*. يتم تنظيمها في مجلدات قمت بإنشائها، وللوصول السهل والسريع إلى المسارات التي تم فتحها مؤخرًا، يوجد مجلد خاص [آخر تعديل](#folder-last-modified).

### البحث {#search}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-search(1).png)

يمنحك الانتقال إلى **البحث** وصولاً سريعًا إلى قائمة [سجل الوجهات](#history) الأخير. وبالمثل مع [قائمة الملاحة](../navigation/setup/route-navigation.md#navigation-menu)، حيث يتم جمع جميع طرق وجهات OsmAnd مثل العنوان، أو نقاط الاهتمام، أو الإحداثيات.

يمكنك استخدام *أداة البحث* للعثور على المكان المطلوب على الخريطة لتخطيط المسار من أي فئة بحث متاحة.

- [العنوان](../search/search-address.md). ابدأ بكتابة العنوان في حقل البحث.
- [نقطة اهتمام](../search/search-poi.md) و [نقطة اهتمام مخصصة](../search/search-poi.md). ستعرض قائمة الأسماء المتشابهة القريبة أيضًا نقاط الاهتمام أو فئاتها.
- [بحث الإحداثيات](../search/search-address#coordinates-search). أدخل الإحداثيات للعثور على النقطة على الخريطة.

#### أولويات بحث العنوان {#address-search-priorities}

تمنح ميزة البحث في CarPlay الأولوية للشوارع وأرقام المباني عند **البحث عن العناوين**.

- يتم عرض الشوارع وأرقام المباني أولاً عند البحث عن عنوان. يضمن ذلك عرض معلومات العنوان ذات الصلة قبل المواقع الأخرى مثل الطرق أو المحطات.
- عند البحث عن مدينة، يتم عرض الشوارع داخل المدينة أولاً، تليها أرقام المباني في تلك الشوارع.

### مجلد آخر تعديل {#folder-last-modified}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car_play_last_modified.png)

تحتوي فئتا *المفضلة* و *المسارات* على مجلد خاص **آخر تعديل**. نظرًا لأن القائمة في هذه الفئات يمكن أن تكون كبيرة جدًا لأنها تحتوي على جميع مفضلاتك أو مساراتك الموجودة، فإن هذا المجلد ضروري للوصول السهل والسريع إلى وجهاتك الأخيرة.

## ميزات إضافية {#additional-features}

بالإضافة إلى الميزات الأساسية لتطبيق OsmAnd في *CarPlay* التي توفر ملاحة مريحة في سيارتك، هناك عدد من الميزات الإضافية التي تعزز تجربتك وتجعل الملاحة أكثر تخصيصًا وراحة وكفاءة.

### التوجيهات الصوتية {#voice-prompts}

تعد التوجيهات الصوتية لـ *CarPlay* إحدى أكثر ميزات الملاحة فائدة في OsmAnd، حيث توفر توجيهات في الوقت الفعلي وتسمح للسائق بالتركيز على الطريق. تشير التوجيهات الصوتية بوضوح إلى المنعطفات والاتجاهات وتعليمات الملاحة الأخرى، مما يضمن استخدامًا أكثر أمانًا وراحة لنظام الملاحة.

لتكوين التوجيهات الصوتية وفقًا للملف الشخصي المحدد، يجب عليك القيام بذلك قبل بدء المسار في تطبيق OsmAnd على جهازك. للاطلاع على الإعدادات الموصى بها لـ *CarPlay*، انتقل إلى مقال [التوجيهات الصوتية / الإشعارات](../navigation/guidance/voice-navigation.md).

### الإعلان عن الرسائل النصية الواردة {#announce-incoming-text-messages}

يمكنك تغيير إعدادات الإشعارات لتطبيق OsmAnd في إعدادات نظام جهازك. انقر على *CarPlay*، ثم حدد أحد العناصر التالية:

- *الإعلان عن الرسائل الجديدة*
- *إسكات الرسائل الجديدة*
- *تذكر الإعداد السابق*

يمكنك أيضًا تمكين أو تعطيل الإعلان عن الرسائل مباشرة في *CarPlay*. اقرأ عن كيفية تنفيذ إدارة الإشعارات على [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) و [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### أداة تنبيه الشاشة {#screen-alert-widget}

![شاشة CarPlay](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

تجمع هذه الأداة المعلوماتية بين أنواع التنبيهات مثل **معابر المشاة** و **حد السرعة**.

- تختلف أنواع التنبيهات في المظهر، والذي يعتمد على **<Translate android="true" ids="driving_region"/>** ويمكن تكوينه في *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- في *CarPlay*، لا يمكن تعيين عرض التنبيهات، تحتاج إلى تكوين الأداة في التطبيق قبل بدء الملاحة وتوصيل جهازك بالمركبة.
- للحصول على وصف تفصيلي لأنواع التنبيهات، راجع [هذا المقال](../widgets/nav-widgets.md#alert-types).
- لإعداد تنبيهات الشاشة للملفات الشخصية المتاحة، راجع مقال [إعدادات الملاحة](../navigation/guidance/navigation-settings.md#screen-alerts).

### عداد السرعة {#speedometer}

![شاشة CarPlay](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

**أداة عداد السرعة** هي عنصر واجهة مدمج يعرض *السرعة الحالية* باستخدام بيانات GPS و *حد السرعة* من [قاعدة بيانات OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) و [إعدادات OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) على شاشة نظام الوسائط المتعددة في السيارة.

- **أداة عداد السرعة** [*تعتمد على الملف الشخصي*](../personal/profiles.md)، لذلك إذا قمت بتغيير الإعدادات لملف شخصي واحد، فلن يتم تطبيقها على ملف شخصي آخر.
- لا يوجد خيار لتعيين عرض *عداد السرعة* مباشرة في *CarPlay*. تحتاج إلى تكوينه لـ [ملف الملاحة الشخصي](#carplay-profile) المحدد في تطبيق OsmAnd قبل بدء الملاحة وتوصيل جهازك بالمركبة.
- لمزيد من المعلومات حول كيفية إضافة وتكوين أداة *عداد السرعة* للعرض، يرجى قراءة مقال [أدوات المعلومات](../widgets/info-widgets.md#speedometer).

### مظهر الخريطة (ثلاثي الأبعاد) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

يتيح لك تطبيق OsmAnd استخدام عرض الخريطة ثلاثي الأبعاد على *شاشة CarPlay* لعرض مسارك والملاحة.

- يتم عرض **زر 3D / 2D** على *شاشة CarPlay*.
- يمكنك التبديل بين أوضاع الخريطة ثلاثية الأبعاد / ثنائية الأبعاد بالنقر على هذا الزر.

### لوحة القيادة متعددة الوظائف {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

يمكن فتح تطبيق OsmAnd واستخدامه للتنقل في *CarPlay* على شاشة نظام الوسائط المتعددة في السيارة في وقت واحد مع تطبيقات الموسيقى أو الرسائل أو الإشعارات الأخرى.

- إعداد لوحة القيادة متعددة الوظائف على هاتف متصل بـ *CarPlay* أو على الشاشة في نظام سيارتك.
- ابحث عن زر النوافذ المتعددة وقم بتبديله.

## مشكلة التحكم في مستوى الصوت {#volume-control-issue}

أحيانًا لا يتصل *CarPlay*، أو لا يمكنك سماع أي شيء على الرغم من اتصاله. في أحيان أخرى، لا يفتح تطبيق OsmAnd بشكل صحيح في *CarPlay*. الحلول الممكنة:

1. في معظم الحالات، تظل جميع **الإشارات** عند مستوى صوت كامل ثابت، منفصلة عن إعدادات تشغيل الصوت في نفس الوقت. لتغيير مستوى صوت توجيهات OsmAnd للملاحة عند استخدام *CarPlay*، انتقل إلى *الإعداد ← الصوت ← مستوى الصوت* على شاشة نظام الوسائط المتعددة في السيارة.
2. أعد تشغيل الجهاز.
3. تأكد من تمكين *CarPlay* على جهاز iPhone الخاص بك. للقيام بذلك:
   - انتقل إلى إعدادات هاتفك ثم إلى *عام*.
   - انتقل إلى *CarPlay* في الإعدادات العامة وحدد *سياراتي*. هنا يمكنك تخصيص سيارتك عن طريق نسيانها أو إعادة الاتصال بها.
4. تأكد من توصيل Bluetooth الخاص بك.
5. تحقق من كابل USB.
6. قم بتحديث نظام التشغيل الخاص بك بانتظام.
7. تحقق من دعم *CarPlay* في [منطقتك](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. إذا كنت تستخدم VPN على جهاز iPhone الخاص بك، فقد يمنع ذلك *CarPlay* من العمل. حاول تعطيل VPN ومعرفة ما إذا كان هذا سيساعد *CarPlay* على العمل.

## مقالات ذات صلة {#related-articles}

- [الملفات الشخصية (الإعدادات)](../personal/profiles.md)
- [الاستيراد / التصدير](../personal/import-export.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

1. أسئلة شائعة حول شاشة الاتصال:
    - *لماذا لا يمكنني التحكم في التطبيق من هاتفي عند الاتصال بـ CarPlay؟*
        لأسباب تتعلق بالسلامة، يتم قفل شاشة تطبيق OsmAnd على هاتفك أثناء الاتصال بـ CarPlay. يمكنك التفاعل مع التطبيق فقط من خلال شاشة السيارة.
    - *هل يمكنني تعطيل الشاشة المقفلة واستخدام التطبيق على هاتفي؟*
        لا، يفرض CarPlay هذا القيد لمنع تشتت الانتباه أثناء القيادة.
    - *ماذا يجب أن أفعل إذا بدا هاتفي وشاشة السيارة غير متصلين؟*
        تأكد من توصيل جهازك بشكل صحيح عبر USB أو Bluetooth.
        أعد تشغيل نظام المعلومات والترفيه في سيارتك وتطبيق OsmAnd إذا كان الاتصال غير مستقر.

> *آخر تحديث: يناير 2025*