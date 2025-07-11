---
source-hash: 1a33a1b4a2dedfaff07a0bf3e3e748f9060a255db1a4b2b9c0fb3d363a38cdf0
sidebar_position: 5
title:  سجلات الأعطال
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## نظرة عامة {#overview}

تُعد سجلات الأعطال أدوات تشخيصية قيّمة تساعد المطورين على تحديد وإصلاح المشكلات والأخطاء التي تتسبب في تعطل التطبيق أو سلوكه غير المتوقع. يمكن مشاركة السجلات من جهاز الأندرويد الخاص بك مع فريق تطوير OsmAnd. حاليًا، يمتلك مستخدمو iOS خيارًا واحدًا فقط لسجل الأعطال لإرساله.


## سجلات الأعطال وسجلات Logcat {#crash-and-logcat-logs}

يسمح لك OsmAnd بإرسال نوعين من البيانات إلى المطورين:

- **سجلات الأعطال**. يتم إنشاؤها عندما يواجه تطبيق OsmAnd خطأً حرجًا أو استثناءً يتسبب في تعطله. توفر هذه السجلات معلومات مفصلة حول حالة التطبيق أثناء الفشل، بما في ذلك بيانات البناء، وتتبع المكدس، ورسائل الخطأ، وتفاصيل أخرى ذات صلة.
- **سجلات Logcat**. سجل لتدفق سجل OsmAnd الذي يلتقط أحداثًا ورسائل مختلفة. تساعد هذه السجلات المطورين على مراقبة سلوك التطبيق، وتتبع تدفق التنفيذ، وتتبع إجراءات محددة، والتحقيق في المشكلات غير المتعلقة بالأعطال. تحتوي سجلات Logcat عادةً على سجلات النشاط منذ آخر مرة تم فيها تشغيل التطبيق.

:::caution معلوماتك الخاصة
كن حذرًا عند إرسال سجلات logcat، حيث قد تحتوي على معلومات خاصة مثل موقع الجهاز، واستعلامات البحث، ونتائج بناء المسار، وبيانات الملاحة.
:::


### إرسال السجلات من تطبيق OsmAnd (أندرويد) {#send-logs-from-osmand-app-android}

1. اذهب إلى *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. بناءً على حالتك، حدد نوع السجل المناسب. يمكنك الرجوع إلى قسم [سجلات الأعطال وسجلات Logcat](#crash-and-logcat-logs) للحصول على تفاصيل حول الاختلافات بين أنواع السجلات.
2. في القائمة المنبثقة، اختر Gmail أو تطبيق البريد الإلكتروني المفضل لديك. سيتم إنشاء البريد الإلكتروني تلقائيًا.
3. اضغط على زر *إرسال*.

![إرسال سجلات الأعطال من أندرويد 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![إرسال سجلات الأعطال من أندرويد 2](@site/static/img/troubleshooting/send_logs_andr_2.png)


### إرسال السجلات من أجهزة iOS {#send-logs-from-ios-devices}

1. يمكن إرسال السجلات من أجهزة iOS:

    - تلقائيًا.
        - انتقل إلى تطبيق OsmAnd *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - ثم، باستخدام تطبيق البريد الإلكتروني الخاص بك، نوصي بإرسال السجلات إلى `crash@osmand.net`.

    - يدويًا.
        - انتقل إلى تطبيق نظام iOS *الملفات ← على iPhone الخاص بي (أو على iPad الخاص بي) ← خرائط OsmAnd ← السجلات*.

    ![إرسال سجلات الأعطال iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![إرسال سجلات الأعطال iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. أرسل [تنسيق IPS](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) للسجلات وبيانات التفويض:
    - اذهب إلى إعدادات iOS *← التحليلات ← بيانات التحليلات ← ملف OsmAnd Maps بتنسيق ips* (حتى iOS 17).
    - إعدادات iOS *← الخصوصية والأمان ← التحليلات والتحسينات ← بيانات التحليلات ← ملف OsmAnd Maps بتنسيق ips* (بدءًا من iOS 18).
    - ثم، باستخدام تطبيق البريد الإلكتروني الخاص بك، نوصي بإرسال السجلات إلى `crash@osmand.net`.

    ![إرسال سجلات الأعطال iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![إرسال سجلات الأعطال iOS 2](@site/static/img/troubleshooting/log_1_ios.png)


## إرسال ملفات Tombstone (أندرويد) {#send-tombstone-files-android}

:::caution هام
للمستخدمين المتقدمين فقط!
:::

في بعض الحالات المعقدة أو غير العادية، قد تكون *[ملفات Tombstone](https://source.android.com/docs/core/tests/debug)* مطلوبة. توفر هذه الملفات تتبعات مكدس مفصلة لجميع الخيوط في عملية متعطلة (وليس فقط الخيط الذي تسبب في الخطأ)، وخريطة ذاكرة كاملة، وقائمة بجميع واصفات الملفات المفتوحة. تعد ملفات Tombstone حيوية لتصحيح الأخطاء وتشخيص المشكلات المتعلقة بالتعليمات البرمجية الأصلية على نظام Android.


### استخدام جهازك {#using-your-device}

لتصدير ملفات tombstone، تحتاج إلى إنشاء تقرير خطأ باستخدام إعدادات نظام Android:

1. تمكين *خيارات المطور* (هذه الشاشة مخفية افتراضيًا).
    - اذهب إلى *الإعدادات ← حول الهاتف ← معلومات البرنامج* (هذا المسار صالح لأجهزة Samsung).
    - اضغط على *رقم البناء* سبع مرات حتى يؤكد إشعار منبثق أن وضع المطور نشط.

2. اذهب إلى *خيارات المطور*، والتي توجد عادة في أسفل قائمة الإعدادات. يمكنك أيضًا استخدام وظيفة البحث.
    - اضغط على خيار *أخذ تقرير خطأ*.
    - حدد نوع تقرير الخطأ واضغط على *تقرير*.
  
بعد أن يصبح تقرير الخطأ جاهزًا، ستتلقى إشعارًا. اضغط على مربع الإشعار لتنزيل التقرير على جهازك. قم بفك ضغط الملف وأرسل ملفات tombstone إلى فريق مطوري OsmAnd (البريد الإلكتروني: `crash@osmand.net`).

![إرسال سجلات الأعطال من أندرويد 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![إرسال سجلات الأعطال من أندرويد 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
يرجى ملاحظة أن تقارير الأخطاء قد تحتوي على بيانات خاصة، بما في ذلك استخدام التطبيق أو الموقع.
:::

### استخدام ADB {#using-adb}

جسر تصحيح أخطاء Android (ADB) هو أداة سطر أوامر تسمح للمطورين بتصحيح أخطاء تطبيقاتهم. لاستخدام ADB لتصدير ملفات tombstone، ستحتاج إلى تنزيله وتثبيته أولاً. اتبع التعليمات المقدمة على [الموقع الرسمي لمطوري Android](https://developer.android.com/tools/releases/platform-tools).

#### إعداد جهازك {#prepare-your-device}

تأكد من تمكين *خيارات المطور* (هذه الشاشة مخفية افتراضيًا) وتشغيل *تصحيح أخطاء USB*:

- انتقل إلى *الإعدادات ← حول الهاتف ← معلومات البرنامج*.
- اضغط على *رقم البناء* سبع مرات حتى يؤكد إشعار منبثق أن وضع المطور نشط.
- في *خيارات المطور*، قم بتمكين *تصحيح أخطاء USB*.

ثم، قم بتوصيل جهازك بمحطة العمل الخاصة بك عبر USB. إذا كانت هذه هي المرة الأولى للاتصال، فستظهر نافذة منبثقة تطلب الإذن بالسماح بالتصحيح.

#### إنشاء تقرير خطأ {#generate-bug-report}

1. افتح نافذة طرفية لسطر الأوامر. على Mac أو Linux، استخدم تطبيق *Terminal*، وعلى Windows، استخدم *Command Line*.
2. انتقل إلى مجلد platform-tools حيث يوجد ADB باستخدام الأمر *cd* (على سبيل المثال، 'cd /Users/Username/Downloads/Tools').
3. أنشئ تقرير الخطأ:
   - على Mac: ```adb bugreport```
   - على Windows: ```adb.exe bugreport```
4. انتظر بضع دقائق حتى يتم إنشاء التقرير. سيتم حفظ الملف الناتج في مجلد أدوات النظام الأساسي.
5. قم بفك ضغط الملف.
6. ابحث عن مجلد *tombstones* بملفات مثل *tombstone_00*، *tombstone_01*، وما شابه ذلك.
7. أرسل ملفات tombstone إلى `crash@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### استخدام الأجهزة ذات صلاحيات الروت أو محاكي Android Studio {#using-rooted-devices-or-android-studio-emulator}

- مع صلاحيات الروت لجهازك، يمكنك فتح مجلد */data/tombstones* مباشرة.  

- في Android Studio، استخدم المحاكي للانتقال إلى *مستكشف ملفات الجهاز* وابحث عن مجلد /data/tombstones. ستجد بالداخل ملفات بأسماء مثل *tombstone_00*، *tombstone_01*، وغيرها. قم بتنزيل هذه الملفات وأرسلها إلى `crash@osmand.net`.

لمزيد من التفاصيل حول تقارير الأخطاء، ارجع إلى [وثائق Android](https://developer.android.com/studio/debug/bug-report).