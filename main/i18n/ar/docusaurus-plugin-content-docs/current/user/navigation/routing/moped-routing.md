---
source-hash: 46a1886051c86f82be8c7760e97112a93aa73290d7f57d40189238af7d9e4f39
sidebar_position: 4
title:  توجيه الدراجة البخارية
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

يسمح *توجيه الدراجة البخارية* للسائقين بإنشاء المسار الأمثل (الأسرع)، مع مراعاة خصوصيات قيادة مركبة مثل الدراجة البخارية أو السكوتر. تأخذ عملية التوجيه في الاعتبار عوامل مختلفة للحركة الآمنة والمريحة والقانونية على الطرق أو مسارات الدراجات.

:::note
بشكل افتراضي، يكون *ملف تعريف الدراجة البخارية* غير نشط. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## معلمات المسار - الدراجة البخارية {#route-parameters---moped}

يمكن تكوين *توجيه الدراجة البخارية* وفقًا لاحتياجاتك في قسم [معلمات المسار](../guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة.

إعدادات توجيه الدراجة البخارية بسيطة جدًا وتتكون من بضعة خيارات فقط.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![إعدادات توجيه الدراجة البخارية على أندرويد](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه الدراجة البخارية على iOS](@site/static/img/navigation/routing/moped_routing_ios.png)  

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة.  </summary>![تجنب الطرق على أندرويد](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار نوع (أنواع) الطريق من القائمة:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، يحمل المركبات عبر المسطحات المائية)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  سيتم تجاهل قيود الوصول الخاص عند حساب المسار.  | يُستخدم الوسم *[private](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود المفروضة على استخدام الطرق السريعة وغيرها من طرق النقل، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية.   |