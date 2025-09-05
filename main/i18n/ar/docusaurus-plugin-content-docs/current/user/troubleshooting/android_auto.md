---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title:  أندرويد أوتو
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## تأخيرات الموقع (أعطال ANR) {#location-delays-anr-crashes}

![أندرويد أوتو](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

قد يكتشف أندرويد أوتو وأوزماند موقع المركبة في نفس الوقت، مما قد يتسبب في تأخير عرض المعلومات في الأدوات ذات الصلة لمدة 3-5 ثوانٍ أو تجميدها. لتجنب ذلك، من الضروري:

1. فتح إعدادات أندرويد أوتو.
2. ضمن الإعدادات، ابحث عن أذونات الموقع.
3. يعرض هذا القسم قائمة بالتطبيقات المسموح لها باستخدام الموقع في أندرويد أوتو. ابحث عن تطبيق أوزماند واسمح باستخدام الموقع.
4. سيتم الآن اكتشاف الموقع فقط بواسطة تطبيق أوزماند في أندرويد أوتو، مما يتجنب التأخير في عرض معلومات الموقع.


## مشكلة اتجاه الخريطة {#map-orientation-issue}

اتجاه الخريطة لحركة الاتجاه [مقلوب ومتذبذب](https://github.com/osmandapp/OsmAnd/issues/16041). تم حل المشكلة عن طريق تشغيل خيار ["الاتجاه التقريبي"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- يظهر فقط إذا تم تمكين [تطوير أوزماند](../plugins/development.md).
- يوجد في *القائمة ← الإعدادات ← الملف الشخصي ← إعدادات الملاحة ← [الخريطة أثناء الملاحة](../navigation/guidance/map-during-navigation.md) ← الاتجاه التقريبي*.


## مشكلة التحكم في مستوى الصوت {#volume-control-issue}

في معظم الحالات، تظل جميع أنواع **الإشارات** عند مستوى صوت كامل ثابت، لا يتأثر بإعدادات تشغيل الصوت المتزامنة. لتغيير مستوى صوت توجيهات الملاحة في أوزماند عند استخدام أندرويد أوتو، انتقل إلى *الإعداد ← الصوت ← مستوى صوت الصوت* على شاشة نظام الوسائط المتعددة في السيارة.

إذا لم تنجح هذه الطريقة، فهناك خيار آخر. لضبط مستوى صوت الإشعارات، تحتاج إلى تشغيل مساعد جوجل أثناء المكالمة. اضغط مع الاستمرار على الزر الموجود على عجلة القيادة الذي يقوم بتشغيل مساعد جوجل، وأثناء المكالمة، اضبط مستوى الصوت باستخدام لوحة القيادة أو عجلة القيادة.