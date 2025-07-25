---
source-hash: 312a9f0bef4e4c80ffe9040157d89d4986b31e2d975b67baab520769f30facdb
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

بدءًا من **الإصدار 5.1 من OsmAnd**، الذي تم إصداره احتفالاً بـ **الذكرى السنوية الخامسة عشرة** لتأسيسنا، تم توسيع الوصول عبر الأنظمة الأساسية ليشمل **Maps+** (المعروف سابقًا باسم *Unlimited*). في السابق، كان اشتراك [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) هو الوحيد الذي يدعم العمل عبر الأنظمة الأساسية.

لتفعيل الوصول عبر الأنظمة الأساسية، يجب ربط عمليات الشراء بحسابك في [OsmAnd Cloud](../personal/osmand-cloud.md#login).
يمكنك مقارنة جميع منتجات OsmAnd هنا: [الفرق بين عمليات الشراء](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **نوع المنتج** | **عبر الأنظمة الأساسية** | **ملاحظات** |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (اشتراك) | ✔ | يعمل بشكل كامل عبر الأنظمة الأساسية. يعمل على Android و iOS والويب عند ربطه بالسحابة. |
| **Maps+** (اشتراك) | ✔ | قابل للاستخدام على جميع المنصات، ولكن يجب تفعيله عبر OsmAnd Cloud **على جهاز الشراء**. |
| **Maps+** (شراء لمرة واحدة) | ✔ | قابل للاستخدام على جميع المنصات، ولكن يجب تفعيله عبر OsmAnd Cloud **على جهاز الشراء**. |
| **OsmAnd+** (تطبيق مستقل) | ✘ | غير قابل للنقل بين المنصات. للمساعدة، اتصل بـ support@osmand.net. |


## كيف يعمل {#how-it-works}

لاستخدام مشترياتك من **OsmAnd Pro** و **Maps+** عبر منصات مختلفة (Android أو iOS أو الويب)، تحتاج إلى **ربطها بحسابك في OsmAnd Cloud**.

### ربط عملية الشراء الخاصة بك {#link-your-purchase}

![Cloud link](@site/static/img/purchases/cloud_activation.png)

قم بهذه الخطوة على **الجهاز الذي أجريت فيه عملية الشراء** (Android أو iOS، الإصدار 5.0 أو أحدث):

1. اذهب إلى حسابك في [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   _القائمة ← الإعدادات ← OsmAnd Cloud ← إنشاء حساب جديد / لدي حساب بالفعل_

2. بمجرد تسجيل الدخول، سيتم ربط عملية الشراء الخاصة بك من **Pro** أو **Maps+** تلقائيًا بحسابك في **Cloud** وسيتم وضع علامة عليها كـ **عبر الأنظمة الأساسية**، *إذا لم تكن مرتبطة بحساب آخر مسبقًا.*



### التفعيل على جهاز أو منصة أخرى {#activate-on-another-device-or-platform}

![Maps+ cross](@site/static/img/purchases/cross_purchase.png)
![Maps+ cross](@site/static/img/purchases/cross_purchase_1.png)

1. اذهب إلى حسابك في [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *القائمة ← الإعدادات ← OsmAnd Cloud ←* ***تسجيل الدخول بنفس الحساب***

2. ثم اذهب إلى:
   *القائمة ← الإعدادات ← المشتريات*
   يجب أن تكون عملية الشراء المرتبطة من **Pro أو Maps+** متاحة الآن.


### استكشاف الأخطاء وإصلاحها {#troubleshooting}

إذا لم تظهر عملية الشراء الخاصة بك في القائمة:

1. اضغط على *القائمة ← الإعدادات ← المشتريات ← استعادة المشتريات*
2. تأكد من تسجيل الدخول إلى **نفس حساب OsmAnd Cloud** المستخدم على الجهاز الأصلي.

إذا استمرت المشكلة، اتصل بـ **support@osmand.net** وقم بتضمين:

- بريدك الإلكتروني في OsmAnd Cloud.
- المنصات ومتاجر التطبيقات المستخدمة.
- نوع عملية الشراء (Pro / Maps+ لمرة واحدة / اشتراك Maps+).


## مثال {#example}

لقد اشتريت **Maps+** كعملية شراء داخل التطبيق لمرة واحدة في الإصدار المجاني من OsmAnd من [متجر تطبيقات Amazon](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).
لاحقًا، قررت التبديل إلى iPhone وتريد استخدام **Maps+** مع [إصدار OsmAnd iOS](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

لتفعيل عملية شراء Maps+ على iOS:

1. افتح **إصدار Amazon** من تطبيق OsmAnd على جهازك الأصلي.
2. سجل الدخول إلى حسابك في [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *القائمة ← الإعدادات ← OsmAnd Cloud ← إنشاء حساب جديد / لدي حساب بالفعل*
3. قم بتثبيت OsmAnd على جهاز iPhone الخاص بك من [متجر التطبيقات](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. سجل الدخول إلى **نفس حساب OsmAnd Cloud** على جهاز iPhone الخاص بك.
5. اذهب إلى *القائمة ← الإعدادات ← المشتريات* وتأكد من أن **Maps+** مدرج كنشط.

هذا يكمل تفعيل عملية الشراء عبر الأنظمة الأساسية. يمكنك الآن الاستمرار في استخدام **Maps+** على جهازك الجديد.

استمتع باستخدام Maps+/Pro عبر المنصات!


## مقالات ذات صلة {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [استكشاف أخطاء المشتريات وإصلاحها](../troubleshooting/purchases_payments.md)
- [الفرق بين مشتريات Android](./android.md#difference-between-purchases-android)
- [الفرق بين مشتريات iOS](./ios.md#difference-between-purchases-ios)

> *آخر تحديث: مايو 2025*