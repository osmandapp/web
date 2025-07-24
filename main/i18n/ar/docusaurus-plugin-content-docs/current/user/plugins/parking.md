---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
sidebar_position: 12
title:  موقع الركن
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## نظرة عامة {#overview}

يساعدك المكون الإضافي **موقع الركن** على حفظ وإدارة الموقع الذي ركنت فيه سيارتك. يتيح لك وضع علامة على الخريطة، وتتبع مدة الركن، واختياريًا تعيين تذكير في التقويم عند انتهاء وقت الركن.

هذا المكون الإضافي مجاني ويعمل دون اتصال بالإنترنت مع خرائط OsmAnd التي تم تنزيلها. يمكنك تحديد موقع سيارتك المركونة بسرعة، وتقدير مسافة المشي إليها، ومشاركة موقع الركن إذا لزم الأمر.

- يمكنك إضافة مكان ركن يدويًا عبر قائمة السياق.
- إذا كان محددًا بوقت، يسجل المكون الإضافي وقت البدء والانتهاء.
- يمكن أن يؤدي وقت الانتهاء إلى تشغيل تذكير في تقويم جهازك.
- يمكن عرض تفاصيل الركن لاحقًا أو استخدامها للملاحة.

العلامة مؤقتة وسهلة الإزالة بمجرد عدم الحاجة إليها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام مكان ركن على الخريطة، تحتاج إلى إجراء الإعدادات التالية:

1. تمكين [المكون الإضافي لموقع الركن](../plugins/index.md#enable--disable) من *القائمة الرئيسية ← المكونات الإضافية*.
2. تعيين [مكان ركن](#set-a-spot) على الخريطة عبر قائمة السياق.
3. (اختياري) إضافة [عنصر واجهة مستخدم الركن](#parking-widget) إلى الشاشة للوصول السريع.


## مكان الركن على الخريطة {#parking-spot-on-the-map}

عندما تحدد مكان ركن، يحفظ OsmAnd إحداثياته الجغرافية مع طابع زمني. إذا لزم الأمر، يمكن أيضًا إضافة حد زمني وتذكير في التقويم.


### تعيين مكان {#set-a-spot}

لتعيين مكان ركن على الخريطة، قم بالتكبير إلى المستوى المطلوب، ثم اضغط مطولاً على المكان على الخريطة وفي [قائمة السياق](../map/map-context-menu.md) التي تفتح، قم بإجراء الإعدادات.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

لوضع علامة ركن، قم بالتكبير على الخريطة، واضغط مطولاً على الموقع المطلوب، وافتح [قائمة السياق](../map/map-context-menu.md). ثم:

1. اضغط على [الإجراءات](../map/map-context-menu#actions).
2. حدد **وضع علامة كموقع ركن** (*أندرويد*) أو **إضافة موقع ركن** (*iOS*).
3. اختر أحد الخيارات المتاحة:
   - **غير محدود الوقت** – يضيف علامة أساسية بدون عد تنازلي.
   - **ركن محدود الوقت** – يتيح لك تعيين وقت انتهاء وإنشاء تذكير اختياري في تقويم جهازك.
4. تأكيد لوضع العلامة. يتم حفظ وقت البدء تلقائيًا.

:::info وقت البدء
يتم تعيين وقت البدء دائمًا تلقائيًا. إذا كنت بحاجة إلى تغيير وقت الانتهاء، يجب عليك حذف مكان الركن وإعادة إنشائه. تتم إضافة التذكيرات إلى تقويمك فقط إذا اخترت هذا الخيار أثناء الإعداد.
:::


### ابق على اطلاع {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

بمجرد حفظ مكان الركن، يساعدك OsmAnd على مراقبة موقعه وتوقيته من خلال قائمة السياق أو [عنصر واجهة مستخدم الركن](#parking-widget) الاختياري.

يمكنك عرض علامة الركن عن طريق التصغير على الخريطة أو عن طريق النقر على **عنصر واجهة مستخدم الركن**، الذي يركز الخريطة على مكانك المحفوظ. يعرض عنصر واجهة المستخدم أيضًا المسافة من موقعك الحالي (أو مركز الخريطة) إلى موقع الركن.

يتم عرض تفاصيل إضافية عند النقر على علامة الركن:

- **وقت البدء** – اللحظة التي تم فيها وضع العلامة.
- **الوقت المتبقي** أو **الوقت المتأخر** – إذا تم تعيين حد زمني، يعرض هذا مقدار الوقت المتبقي أو الذي مر منذ انتهاء الصلاحية.
- إذا قمت بتمكين تذكير التقويم، فسيظهر في تطبيق التقويم الخاص بجهازك.


### التنقل إلى نقطة طريق {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

يمكنك استخدام مكان الركن كهدف للملاحة للعودة بسهولة إلى سيارتك. يقدم OsmAnd طريقتين رئيسيتين لبدء الملاحة إلى موقع الركن المحفوظ:

**عبر قائمة الملاحة**:

  1. اضغط على زر **الملاحة**.
  2. اختر ملف تعريف.
  3. اضغط على **تعيين الوجهة** وحدد **الركن** من قائمة النقاط المحفوظة.

**عبر عنصر واجهة مستخدم الركن**:

  1. اضغط على **عنصر واجهة مستخدم الركن**.
  2. اضغط على علامة مكان الركن.
  3. حدد **الملاحة** واختر الملف الشخصي الذي تريد استخدامه.


### إزالة مكان {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

لحذف علامة ركن:

1. حدد مكان الركن على الخريطة أو اضغط على **عنصر واجهة مستخدم الركن**.
2. اضغط على العلامة لفتح قائمة السياق.
3. حدد **حذف** أو **تجاهل**.

إذا تم تعيين تذكير في التقويم، فسيتم إزالته تلقائيًا أيضًا.


## عنصر واجهة مستخدم الركن {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_parking"/>*

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="parking_place"/>*

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

يعرض [عنصر واجهة مستخدم الركن](../widgets/info-widgets.md#parking-widget) المسافة من مركز الشاشة إلى موقع الركن المحفوظ ويتيح لك تركيز الخريطة بسرعة على ذلك المكان.

- يكون عنصر واجهة المستخدم مرئيًا فقط بعد تعيين موقع ركن.
- إذا لم يكن موجودًا بالفعل على الشاشة، يمكنك إضافته عبر قائمة [تكوين الشاشة](../widgets/configure-screen.md).

لمعرفة المزيد، راجع: [عناصر واجهة المستخدم المعلوماتية – عنصر واجهة مستخدم الركن](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: مايو 2025*