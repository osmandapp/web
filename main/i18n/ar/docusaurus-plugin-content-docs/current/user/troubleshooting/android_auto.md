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

قد يكتشف أندرويد أوتو و OsmAnd موقع المركبة في نفس الوقت، مما قد يتسبب في تأخير يتراوح بين 3-5 ثوانٍ في عرض المعلومات في الأدوات ذات الصلة أو تجميدها. لتجنب ذلك، من الضروري:

1. فتح إعدادات أندرويد أوتو.
2. ضمن الإعدادات، ابحث عن أذونات الموقع.
3. يعرض هذا القسم قائمة بالتطبيقات المسموح لها باستخدام الموقع في أندرويد أوتو. ابحث عن تطبيق OsmAnd واسمح باستخدام الموقع.
4. سيتم الآن اكتشاف الموقع فقط بواسطة تطبيق OsmAnd في أندرويد أوتو، مما يتجنب التأخير في عرض معلومات الموقع.


## مشكلة اتجاه الخريطة {#map-orientation-issue}

اتجاه الخريطة في اتجاه الحركة [مقلوب ويتذبذب](https://github.com/osmandapp/OsmAnd/issues/16041). تم حل المشكلة عن طريق تشغيل خيار ["تقريب الاتجاه"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- مرئي فقط إذا تم تمكين [تطوير OsmAnd](../plugins/development.md).
- موجود في *القائمة ← الإعدادات ← الملف الشخصي ← إعدادات التنقل ← [الخريطة أثناء التنقل](../navigation/guidance/map-during-navigation.md) ← تقريب الاتجاه*.


## مشكلة التحكم في مستوى الصوت {#volume-control-issue}

في معظم الحالات، تظل جميع أنواع **الإشارات** عند مستوى صوت كامل ثابت، لا يتأثر بإعدادات تشغيل الصوت المتزامنة. لتغيير مستوى صوت إرشادات التنقل في OsmAnd عند استخدام أندرويد أوتو، انتقل إلى *الإعداد ← الصوت ← مستوى صوت الصوت* على شاشة نظام الوسائط المتعددة في السيارة.

إذا لم تنجح هذه الطريقة، فهناك خيار آخر. لضبط مستوى صوت الإشعارات، تحتاج إلى تشغيل مساعد جوجل أثناء المكالمة. اضغط مع الاستمرار على الزر الموجود على عجلة القيادة الذي يشغل مساعد جوجل، وأثناء المكالمة، اضبط مستوى الصوت باستخدام لوحة القيادة أو عجلة القيادة.