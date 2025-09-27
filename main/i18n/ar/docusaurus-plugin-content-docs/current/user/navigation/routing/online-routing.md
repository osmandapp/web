---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  التوجيه عبر الإنترنت
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

يعد التوجيه عبر الإنترنت أداة قوية يمكن أن تساعد المستخدمين على توفير الوقت والتنقل بكفاءة أكبر. ومع ذلك، من المهم ملاحظة أن التوجيه عبر الإنترنت يعتمد على الاتصال بالإنترنت، وقد لا يكون متاحًا في المناطق ذات تغطية الشبكة الضعيفة. بالإضافة إلى ذلك، يجب على المستخدمين دائمًا توخي الحذر واستخدام حكمهم عند اتباع أي مسار تقترحه خدمة التوجيه عبر الإنترنت.

![التوجيه عبر الإنترنت على أندرويد](@site/static/img/navigation/routing/online_routing_andr.png)


## معلمات المسار - التوجيه عبر الإنترنت {#route-parameters---online-routing}

يمكن تفعيل *التوجيه عبر الإنترنت* في قسم [نوع الملاحة](../guidance/navigation-settings.md#overview) من إعدادات الملاحة لـ*الملف الشخصي* المحدد. في OsmAnd، يوجد *محركا توجيه عبر الإنترنت* معرفان مسبقًا ([ZLZK](https://zlzk.biz/) و [OSM DE](https://routing.openstreetmap.de))، واللذان يوفران ثلاثة أنواع من *التوجيه عبر الإنترنت*: *دراجة، وسيارة، وسيرًا على الأقدام*.

:::note
أنواع التوجيه عبر الإنترنت مصممة لملفات تعريف *القيادة، وركوب الدراجات، والمشي*، على الرغم من أنه يمكن استخدامها أيضًا مع ملفات تعريف OsmAnd الأخرى (شاحنة، دراجة نارية، تزلج، ركوب الخيل). يتم توفيرها "كما هي"، لذا لا يمكنك تخصيصها وفقًا لاحتياجاتك باستخدام خيارات ملاحة مختلفة.
:::

### التوجيه المخصص عبر الإنترنت {#custom-online-routing}

بالإضافة إلى أنواع التوجيه عبر الإنترنت المحددة مسبقًا، يمكنك تكوين آليات توجيه أخرى عبر الإنترنت.
انقر على زر **+ إضافة محرك توجيه عبر الإنترنت** واختر أحد أنواع التوجيه عبر الإنترنت المقترحة ([Graphhopper](https://graphhopper.com/)، [OSRM](http://project-osrm.org/)، [Openrouteservice](https://openrouteservice.org)). حدد المركبة المناسبة وانقر على *اختبار التوجيه* قبل حفظ تغييراتك.

![التوجيه المخصص عبر الإنترنت على أندرويد](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![التوجيه المخصص عبر الإنترنت على أندرويد](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
يمكنك القراءة عن الاختلافات بين محركات التوجيه عبر الإنترنت في [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### التوجيه المخصص عبر الإنترنت بملف GPX {#custom-online-gpx-routing}

يقوم الخادم عبر الإنترنت ببناء مسار باستخدام نقطة البداية والوجهة. بعد استلام المسار من الخادم، يقوم OsmAnd بإنشاء مسار باستخدام ميزة *[الربط بالطرق](../setup/gpx-navigation.md#attach-to-the-roads)*. وبالتالي، سيتم أخذ جميع معلومات التوجيه اللازمة من خرائطنا غير المتصلة بالإنترنت، وسيتم توفير توجيه أكثر دقة على طول المسار.

![التوجيه المخصص بملف GPX على أندرويد 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![التوجيه المخصص بملف GPX على أندرويد 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## إعدادات التوجيه عبر الإنترنت {#online-routing-setting}

عند تحديد التوجيه عبر الإنترنت للملاحة، يظهر خيار إضافي في الإعدادات.

![إعدادات التوجيه عبر الإنترنت على أندرويد](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - يسمح باستخدام التوجيه غير المتصل بالإنترنت من OsmAnd، عند تحديد التوجيه عبر الإنترنت في إعدادات الملاحة. قد يساعد هذا الخيار إذا تم بناء مسار بالفعل عبر الإنترنت، ولكن حدث انحراف عن المسار وفي نفس الوقت فُقد الاتصال بالإنترنت. في هذه الحالة، سيتم استخدام التوجيه غير المتصل بالإنترنت للعودة إلى المسار الذي تم حسابه مسبقًا عبر الإنترنت.