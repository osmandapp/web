---
source-hash: 67b62b612a4376b25626dd16941f9e9cff28a766c7bdc73cda828e3abcfe9ca4
sidebar_position: 4
title:  Cross-Platform Purchases
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



## عمليات الشراء المدعومة عبر الأنظمة الأساسية {#supported-cross-platform-purchases}

تدعم منتجات OsmAnd التالية حاليًا الاستخدام عبر منصات متعددة (Android و iOS والويب):

- اشتراك **OsmAnd Pro**
- اشتراك **Maps+**
- عملية شراء داخل التطبيق لمرة واحدة لـ **Maps+**

بدءًا من **الإصدار 5.1 من OsmAnd**، الذي تم إصداره احتفالًا بـ **الذكرى السنوية الخامسة عشرة**، تم توسيع الوصول عبر الأنظمة الأساسية ليشمل **Maps+** (المعروف سابقًا باسم *Unlimited*). في السابق، كان اشتراك [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) فقط هو الذي يدعم العمل عبر الأنظمة الأساسية.

لتفعيل الوصول عبر الأنظمة الأساسية، يجب ربط عمليات الشراء بحساب [OsmAnd Cloud](../personal/osmand-cloud.md#login) الخاص بك.
يمكنك مقارنة جميع منتجات OsmAnd هنا: [الفرق بين عمليات الشراء](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| نوع المنتج | عبر الأنظمة الأساسية | ملاحظات |
|-----------------------------|----------------|-------|
| OsmAnd Pro (اشتراك) | ✔ | يعمل عبر Android و iOS والويب عبر السحابة |
| Maps+ (اشتراك) | ✔ | يتطلب الإصدار 5.0+ وحساب سحابي |
| Maps+ (شراء لمرة واحدة) | ✔ | يجب تفعيله من خلال OsmAnd Cloud على جهاز الشراء |
| OsmAnd+ (تطبيق مستقل) | ✔ | يجب تفعيله من خلال OsmAnd Cloud على جهاز الشراء |


## كيف يعمل {#how-it-works}

لاستخدام عملية شراء **OsmAnd Pro** أو **OsmAnd+** أو **Maps+** عبر منصات مختلفة (Android أو iOS أو الويب)، تحتاج إلى **ربطها بحساب OsmAnd Cloud الخاص بك**.

### ربط عملية الشراء الخاصة بك {#link-your-purchase}

![Cloud link](@site/static/img/purchases/cloud_activation.png)

قم بهذه الخطوة على **الجهاز الذي أجريت فيه عملية الشراء** (Android أو iOS، الإصدار 5.0 أو أحدث):

1. انتقل إلى حساب [OsmAnd Cloud](../personal/osmand-cloud.md#login) الخاص بك:
   _القائمة ← الإعدادات ← OsmAnd Cloud ← إنشاء حساب جديد / لدي حساب بالفعل_

2. بمجرد تسجيل الدخول، سيتم ربط عملية شراء **Pro** أو **Maps+** الخاصة بك تلقائيًا بحساب **Cloud** الخاص بك ووضع علامة عليها على أنها **عبر الأنظمة الأساسية**، *إذا لم تكن مرتبطة بحساب آخر مسبقًا.*



### التفعيل على جهاز أو منصة أخرى {#activate-on-another-device-or-platform}

![Maps+ cross](@site/static/img/purchases/cross_purchase.png)
![Maps+ cross](@site/static/img/purchases/cross_purchase_1.png)

1. انتقل إلى حساب [OsmAnd Cloud](../personal/osmand-cloud.md#login) الخاص بك:
   *القائمة ← الإعدادات ← OsmAnd Cloud ←* ***تسجيل الدخول بنفس الحساب***

2. ثم انتقل إلى:
   *القائمة ← الإعدادات ← المشتريات*
   يجب أن تكون عملية شراء **Pro أو Maps+** المرتبطة بك متاحة الآن.


### استكشاف الأخطاء وإصلاحها {#troubleshooting}

إذا لم تظهر عملية الشراء الخاصة بك في القائمة:

1. اضغط على *القائمة ← الإعدادات ← المشتريات ← استعادة المشتريات*
2. تأكد من تسجيل الدخول إلى **نفس حساب OsmAnd Cloud** المستخدم على الجهاز الأصلي.

إذا استمرت المشكلة، اتصل بـ **support@osmand.net** وقم بتضمين:

- بريد OsmAnd Cloud الإلكتروني الخاص بك.
- المنصات ومتاجر التطبيقات المستخدمة.
- نوع الشراء (Pro / Maps+ لمرة واحدة / اشتراك Maps+).


## مثال {#example}

لقد اشتريت **Maps+** كعملية شراء داخل التطبيق لمرة واحدة في الإصدار المجاني من OsmAnd من [متجر تطبيقات Amazon](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).
لاحقًا، قررت التبديل إلى iPhone وتريد استخدام **Maps+** مع [إصدار OsmAnd iOS](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

لتفعيل عملية شراء Maps+ الخاصة بك على iOS:

1. افتح **إصدار Amazon** من تطبيق OsmAnd على جهازك الأصلي.
2. سجل الدخول إلى حساب [OsmAnd Cloud](../personal/osmand-cloud.md#login) الخاص بك:
   *القائمة ← الإعدادات ← OsmAnd Cloud ← إنشاء حساب جديد / لدي حساب بالفعل*
3. قم بتثبيت OsmAnd على جهاز iPhone الخاص بك من [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. سجل الدخول إلى **نفس حساب OsmAnd Cloud** على جهاز iPhone الخاص بك.
5. انتقل إلى *القائمة ← الإعدادات ← المشتريات* وتأكد من أن **Maps+** مدرج كنشط.

يكمل هذا تفعيل عملية الشراء عبر الأنظمة الأساسية. يمكنك الآن متابعة استخدام **Maps+** على جهازك الجديد.

استمتع باستخدام Maps+/Pro عبر الأنظمة الأساسية!


## مقالات ذات صلة {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [استكشاف أخطاء المشتريات وإصلاحها](../troubleshooting/purchases_payments.md)
- [الفرق بين مشتريات Android](./android.md#difference-between-purchases-android)
- [الفرق بين مشتريات iOS](./ios.md#difference-between-purchases-ios)

> *آخر تحديث: مايو 2025*