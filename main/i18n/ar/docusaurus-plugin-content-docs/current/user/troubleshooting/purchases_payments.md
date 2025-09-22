---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  المشتريات والمدفوعات
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## المشتريات عبر المنصات {#cross-platform-purchases}

**OsmAnd Pro** و **Maps+** (*جميع خرائط العالم* لنظام iOS) هي **اشتراكات متعددة المنصات** متاحة لنظامي Android و iOS بدءًا من إصدار OsmAnd 5.0. تعني ميزة "متعدد المنصات" أنه إذا اشتريت اشتراكًا، على سبيل المثال، في أحد متاجر Android (Google Play، Huawei AppGallery)، يمكنك أيضًا استخدامه على نظام iOS وفي إصدار الويب.

- يمكن استخدام الاشتراك متعدد المنصات على أجهزة ومنصات متعددة **إذا كان مرتبطًا بنفس حساب OsmAnd Cloud**.

- المشتريات لمرة واحدة مثل **OsmAnd+** (Android) والمشتريات الخاصة بالمتجر غير قابلة للتحويل بين المنصات.

- يمكنك استخدام OsmAnd Pro على ما يصل إلى ٦ أجهزة، حتى لو كانت تعمل بأنظمة تشغيل مختلفة.

- تأكد دائمًا من استخدام نفس حساب OsmAnd Cloud عبر جميع الأجهزة للوصول إلى مشترياتك.

- لمزيد من التفاصيل، راجع: [مشتريات أندرويد](../purchases/android.md)، [مشتريات iOS](../purchases/ios.md)، [المشتريات عبر المنصات](../purchases/cross.md) و [بوابة خرائط OsmAnd](../purchases/web.md).


### كيفية ربط مشترياتك بحساب OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

١. إذا **لم يكن لديك** حساب OsmAnd Cloud:

    - افتح تطبيق OsmAnd على الجهاز الذي أجريت فيه عملية الشراء.
    - اذهب إلى *القائمة ← الإعدادات ← OsmAnd Cloud*.
    - انقر على **إنشاء حساب جديد**.
    - بعد إنشاء الحساب، اذهب إلى *قائمة OsmAnd ← الإعدادات ← المشتريات*.
    - انقر على **استعادة المشتريات** لربط مشترياتك بحساب جديد.

٢. إذا **كان لديك بالفعل** حساب OsmAnd Cloud:

    - تأكد من أنك مسجل الدخول إلى حساب OsmAnd Cloud على الجهاز الذي أجريت فيه عملية الشراء.  
    - انتقل إلى *قائمة OsmAnd ← الإعدادات ← OsmAnd Cloud ← لدي حساب بالفعل*
    - بعد تسجيل الدخول إلى حسابك، اذهب إلى *قائمة OsmAnd ← الإعدادات ← المشتريات*.
    - انقر على **استعادة المشتريات** لمزامنة عملية الشراء مع حسابك.


> لمزيد من المعلومات، اقرأ مقالات [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform) و [المشتريات عبر المنصات](../purchases/cross.md).


### ربط الشراء بحسابات OsmAnd Cloud متعددة {#purchase-association-with-multiple-osmand-cloud-accounts}


يتم ربط الشراء متعدد المنصات، مثل _Maps+_ و _Pro_، بحساب OsmAnd Cloud الذي تم تنشيطه آخر مرة على الجهاز الذي يحمل إيصال الشراء الأصلي (من App Store أو Google Play). إذا قام مستخدم على هذا الجهاز بتسجيل الخروج من حسابه الأساسي (`OsmAnd Cloud account A`) وسجل الدخول إلى حساب جديد (`OsmAnd Cloud account B`)، يقوم نظام OsmAnd تلقائيًا بنقل الترخيص إلى الحساب الجديد `OsmAnd Cloud account B`. نتيجة لذلك، يفقد حساب OsmAnd Cloud الأصلي حالة مشترياته على المنصات الأخرى، حيث لا يمكن أن يكون الترخيص نشطًا إلا على حساب OsmAnd Cloud واحد في كل مرة.

من الناحية الفنية، يعمل هذا على النحو التالي: الشراء نفسه ينتمي إلى حساب Apple ID أو Google الخاص بك، وليس إلى حساب OsmAnd. يقوم تطبيق OsmAnd على الجهاز الذي تم الشراء عليه بإبلاغ خادمنا ببساطة عن حساب OsmAnd Cloud النشط حاليًا. يقوم الخادم بدوره بمنح الوصول متعدد المنصات إلى ذلك الحساب. لذلك، يصبح آخر حساب يسجل الدخول على الجهاز "الرئيسي" دائمًا هو صاحب الترخيص.

لاستعادة الشراء إلى الحساب الصحيح (`OsmAnd Cloud account A`)، يجب عليك تنفيذ الإجراء العكسي. على نفس الجهاز الذي تم فيه الشراء، تحتاج إلى تسجيل الخروج من الحساب غير الصحيح `OsmAnd Cloud account B` وتسجيل الدخول مرة أخرى إلى `OsmAnd Cloud account A`. ستجبر هذه العملية النظام على إعادة التحقق من إيصال الشراء وإعادة ربط الترخيص بالحساب الصحيح `OsmAnd Cloud account A`، واستعادة حالته متعددة المنصات.

> لمزيد من المعلومات، اقرأ مقالات [المشتريات عبر المنصات](../purchases/cross.md).

## كيفية شراء واستعادة OsmAnd في متجر تطبيقات هواوي (AppGallery) بدون خدمات هواوي للجوال {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

١. **شراء OsmAnd**:
   - أولاً، قم بتمكين *التثبيت من مصادر غير معروفة* في إعدادات جهازك. يمكنك عادةً العثور على هذا الخيار في **الإعدادات ← الأمان**.
   - قم بتثبيت [خدمات هواوي للجوال (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/)، وهو أمر ضروري لتوافق التطبيقات.
   - بعد ذلك، افتح *Huawei AppGallery* على صفحة [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) وقم بتنزيل التطبيق.
   - تتوفر النسخة المجانية فقط للتنزيل في البداية. لإجراء عملية شراء، اذهب إلى *القائمة ← الإعدادات ← المشتريات* في OsmAnd وحدد النوع المطلوب.
   - لمزيد من التفاصيل، قم بزيارة [هذه الصفحة](https://osmand.net/docs/user/purchases/android#install-application).

٢. **استعادة الشراء**:
   - لاستعادة مشترياتك، قم بتسجيل الدخول إلى *Huawei AppGallery* باستخدام نفس الحساب المرتبط بشراء OsmAnd.
   - تحقق من سجل معاملاتك في [سجل طلبات Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - قد تحتاج إلى تحديث *Huawei AppGallery* ومسح ذاكرة التخزين المؤقت لتجنب المشاكل.
   - لاستعادة مشترياتك، اتبع المسار *القائمة ← الإعدادات ← المشتريات ← استعادة المشتريات* في OsmAnd.
   - لمزيد من المعلومات، راجع مقال [مشتريات أندرويد](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## متجر أمازون سيُغلق - ماذا تفعل؟ {#amazon-store-is-closing---what-to-do}

في **٢٠ أغسطس ٢٠٢٥**، ستغلق أمازون متجر تطبيقات أمازون (Amazon Appstore) لأجهزة أندرويد. يمكنك قراءة الإعلان الرسمي [هنا](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

إذا كنت قد أجريت عمليات شراء عبر أمازون، فستحتاج إلى **نقل اشتراكاتك (Pro، Maps+) أو مشترياتك داخل التطبيق (Maps+)** إلى منصة أخرى.

➡️ حاليًا، [النقل عبر المنصات ممكن للاشتراكات والمشتريات داخل التطبيق](../purchases/cross.md).  
❗ لا يمكن نقل **OsmAnd+** (تطبيق مستقل) بين المنصات عبر حساب OsmAnd Cloud. للحصول على المساعدة، يرجى الاتصال بـ **support@osmand.net**.

## كيفية استعادة شراء إضافة التضاريس (Contour lines سابقًا) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

لاستعادة [إضافة التضاريس](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

١. قم بتسجيل الدخول إلى نفس حساب Google Play المستخدم لشراء إضافة التضاريس، وقم بتثبيت [التطبيق](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
٢. إذا كان زر *التثبيت* غير نشط، فتأكد من تحديث تطبيقي Google Play و OsmAnd. امسح ذاكرة التخزين المؤقت الخاصة بهما، وأعد تشغيل جهازك، وحاول تثبيت الإضافة مرة أخرى.
٣. بعد التثبيت، قم بتمكين إضافة التضاريس في *[قائمة OsmAnd ← الإضافات](../plugins/topography.md)*، وقم بتنزيل الملفات المطلوبة في *[الخرائط والموارد](../start-with/download-maps.md#maps-and-resources)*، وقم بتنشيطها من خلال *[قائمة تكوين الخريطة](../map/configure-map-menu.md)*.


## كيف تعرف ما إذا كان OsmAnd Unlimited نشطًا {#how-to-identify-if-osmand-unlimited-is-active}

انتقل إلى *القائمة ← تنزيل الخرائط* وانقر على عداد الخرائط (الحقل المسمى *نسخة مجانية. X تنزيلات متبقية*). إذا كان OsmAnd Unlimited نشطًا، فستعرض الشاشة مساحة التخزين المتبقية على الجهاز بدلاً من عدد التنزيلات المجانية.


## هل يمكنني الحصول على النسخة الكاملة من OsmAnd كتطبيق منفصل لنظام iOS؟ {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

بالنسبة لنظام iOS، تتوفر نسخة واحدة فقط من OsmAnd. للوصول إلى النسخة الكاملة، تحتاج إلى فتح وظائف إضافية من خلال عمليات الشراء داخل التطبيق.


## ماذا تعني ٥ أو ٧ تنزيلات مجانية؟ {#what-do-5-or-7-free-downloads-mean}

يُسمح لك بـ ٥ تنزيلات مجانية على نظام iOS أو ٧ على نظام Android. كل تنزيل، سواء كان خريطة أو تحديثًا (تُحتسب تحديثات الخرائط كتنزيلات) أو حزم صوتية أو عناصر أخرى، يقلل من العدد المتاح. يرجى ملاحظة أن إزالة العناصر من تنزيلاتك لا تستعيد عدد التنزيلات المجانية.


## كيف يمكنني الحصول على تنزيلات خرائط إضافية في OsmAnd Free؟ {#how-can-i-get-additional-map-downloads-in-osmand-free}

إذا كنت قد استخدمت جميع التنزيلات المجانية البالغ عددها ٥ (iOS) أو ٧ (Android)، فيمكنك الحصول على ٣ تنزيلات إضافية عن طريق *الاشتراك في القائمة البريدية*. سيظهر شعار به خيار الاشتراك بمجرد استخدام جميع التنزيلات المجانية.


## لم يتم استلام رمز التحقق لـ OsmAnd Cloud {#verification-code-for-osmand-cloud-not-received}

إذا لم تستلم **رمز التحقق** عند إنشاء حساب **OsmAnd Cloud**، فاتبع هذه الخطوات لحل المشكلة:  

١. تحقق من عنوان بريدك الإلكتروني.  
    تأكد من أنك أدخلت **عنوان البريد الإلكتروني الصحيح**. يجب أن يتطابق البريد الإلكتروني مع ذلك المستخدم لشراء **OsmAnd Pro** أو تسجيل حساب **OsmAnd Cloud** الخاص بك.  

٢. تحقق من مجلدات البريد العشوائي (Spam).  
    في بعض الأحيان، قد يتم تصفية بريد التحقق الإلكتروني كبريد عشوائي. ابحث عن بريد إلكتروني من **OsmAnd** في مجلدات **البريد العشوائي (Spam)** أو **البريد غير الهام (Junk)** أو **العروض الترويجية (Promotions)**.  

٣. انتظر وصول الرمز.  
    في بعض الحالات، قد يتأخر وصول البريد الإلكتروني الذي يحتوي على رمز التفعيل. تجنب **محاولات التفعيل المتعددة** خلال فترة قصيرة، حيث يمكن أن يسبب ذلك تأخيرات إضافية.  

٤. حاول إعادة إرسال الرمز.  
    ارجع إلى **شاشة تسجيل الدخول إلى OsmAnd Cloud** وحدد **إعادة إرسال الرمز** إذا كان متاحًا. انتظر بضع دقائق قبل طلب رمز آخر.  

٥. تحقق من قيود خادم البريد الإلكتروني.  
    إذا كنت تستخدم **نطاق بريد إلكتروني خاص بشركة أو مخصص**، فتحقق مع **مزود خدمة البريد الإلكتروني** الخاص بك للتأكد من عدم حظر البريد الإلكتروني. فكر في استخدام خدمة بريد إلكتروني مختلفة (مثل Gmail أو Outlook) إذا استمرت المشاكل.

<!--
## Purchases & Payments {#purchases--payments}

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ {#faq}

- Can I transfer a purchase between Android and iOS?
- Can I use a purchase on multiple devices?
- Why does the purchase not appear?
- Where can I find payment details?
- Can I transfer OsmAnd+ between Android and iOS?
- How can I restore purchases after reinstalling the app?
- What is OsmAnd Pro and what are its advantages?
- Can I activate my subscription without Google Play?
- Can I share my purchase with my family?
- How do I transfer OsmAnd+ to another phone?
- Why doesn't my purchase appear after reinstalling?
- Why can't I resume my purchase?
- How do I know if my subscription is active?
- Can I use one purchase on multiple devices?
- Can I buy OsmAnd without Google Play?
- Where can I find my payment details?
-->