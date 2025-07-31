---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title: التوجيه عبر الإنترنت
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

## نظرة عامة {#overview}

<InfoAndroidOnly />

يُعد التوجيه عبر الإنترنت أداة قوية يمكن أن تساعد المستخدمين على توفير الوقت والتنقل بكفاءة أكبر. ومع ذلك، من المهم ملاحظة أن التوجيه عبر الإنترنت يعتمد على الاتصال بالإنترنت، وقد لا يكون متاحًا في المناطق ذات التغطية الشبكية الضعيفة. بالإضافة إلى ذلك، يجب على المستخدمين دائمًا توخي الحذر واستخدام حكمهم عند اتباع أي مسار يقترحه خدمة التوجيه عبر الإنترنت.

![التوجيه عبر الإنترنت أندرويد](@site/static/img/navigation/routing/online_routing_andr.png)

## معلمات المسار - التوجيه عبر الإنترنت {#route-parameters---online-routing}

يمكن تمكين *التوجيه عبر الإنترنت* في قسم [نوع التنقل](../guidance/navigation-settings.md#overview) من إعدادات التنقل للملف الشخصي المحدد. في OsmAnd، هناك محركان مسبقا التحديد للتوجيه عبر الإنترنت ([ZLZK](https://zlzk.biz/) و [OSM DE](https://routing.openstreetmap.de))، واللذان يوفران ثلاثة أنواع من *التوجيه عبر الإنترنت*: *الدراجة، السيارة، والمشي*.

:::note
تم تصميم أنواع التوجيه عبر الإنترنت لملفات تعريف *القيادة، ركوب الدراجات، والمشي*، على الرغم من أنه يمكن استخدامها أيضًا مع ملفات تعريف OsmAnd الأخرى (الشاحنة، الدراجة النارية، التزلج، ركوب الخيل). يتم توفيرها "كما هي"، لذلك لا يمكنك تخصيصها وفقًا لاحتياجاتك باستخدام خيارات التنقل المختلفة.
:::

### التوجيه المخصص عبر الإنترنت {#custom-online-routing}

بالإضافة إلى أنواع التوجيه المسبقة عبر الإنترنت، يمكنك تكوين آليات توجيه أخرى عبر الإنترنت.
انقر على زر **+ إضافة محرك توجيه عبر الإنترنت** واختر أحد أنواع التوجيه المقترحة عبر الإنترنت ([Graphhopper](https://graphhopper.com/)، [OSRM](http://project-osrm.org/)، [Openrouteservice](https://openrouteservice.org)). حدد المركبة المناسبة وانقر على *اختبار التوجيه* قبل حفظ التغييرات.

![التوجيه المخصص عبر الإنترنت أندرويد](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![التوجيه المخصص عبر الإنترنت أندرويد](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
يمكنك قراءة المزيد عن الاختلافات بين محركات التوجيه عبر الإنترنت في [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### التوجيه المخصص عبر الإنترنت بصيغة GPX {#custom-online-gpx-routing}

يقوم الخادم عبر الإنترنت بإنشاء مسار باستخدام نقطة البداية والوجهة الخاصة بك. بعد تلقي المسار من الخادم، يقوم OsmAnd بإنشاء مسار باستخدام ميزة *[الربط بالطرق](../setup/gpx-navigation.md#attach-to-the-roads)*. لذا سيتم أخذ جميع معلومات التوجيه المطلوبة من خرائطنا غير المتصلة بالإنترنت، وسيتم توفير إرشادات أكثر دقة على طول المسار.

![التوجيه المخصص بصيغة GPX أندرويد 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![التوجيع المخصص بصيغة GPX أندرويد 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)

## إعداد التوجيه عبر الإنترنت {#online-routing-setting}

عند تحديد التوجيه عبر الإنترنت للملاحة، يظهر خيار إضافي في الإعدادات.

![إعدادات التوجيه عبر الإنترنت أندرويد](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - يسمح باستخدام توجيه OsmAnd دون اتصال بالإنترنت، عندما يتم تحديد التوجيه عبر الإنترنت في إعدادات الملاحة. قد يساعد هذا الخيار إذا تم بناء مسار بالفعل عبر الإنترنت، ولكن حدث انحراف عن المسار وفي نفس الوقت فقد الاتصال بالإنترنت. في هذه الحالة، سيتم استخدام التوجيه دون اتصال بالإنترنت للعودة إلى المسار، الذي تم حسابه مسبقًا عبر الإنترنت.

> *آخر تحديث: يونيو 2024*