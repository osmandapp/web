---
source-hash: c31f972d3a691c26a3a583de116eb13a83d2589b7e5d44d3162198717f9b326f
sidebar_position: 12
title:  موضع ركن السيارة
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## نظرة عامة {#overview}

تساعدك إضافة **موضع ركن السيارة** على حفظ وإدارة الموقع الذي أوقفت فيه سيارتك. تتيح لك وضع علامة على الخريطة، وتتبع مدة ركن السيارة، وتعيين تذكير في التقويم اختياريًا عند انتهاء وقت ركن السيارة.

هذه الإضافة مجانية وتعمل دون اتصال بالإنترنت مع خرائط OsmAnd التي تم تنزيلها. يمكنك تحديد موقع سيارتك المتوقفة بسرعة، وتقدير مسافة المشي للعودة إليها، ومشاركة موقع ركن السيارة إذا لزم الأمر.

- يمكنك إضافة موضع ركن السيارة يدويًا عبر قائمة السياق.
- إذا كانت محدودة بوقت، تسجل الإضافة وقت البدء ووقت الانتهاء.
- يمكن أن يؤدي وقت الانتهاء إلى تشغيل تذكير في تقويم جهازك.
- يمكن عرض تفاصيل موقف السيارة لاحقًا أو استخدامها للملاحة.

العلامة مؤقتة وسهلة الإزالة بمجرد عدم الحاجة إليها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ودجة موقف السيارة أندرويد](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة موقف السيارة iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لاستخدام موضع ركن السيارة على الخريطة، تحتاج إلى إجراء الإعدادات التالية:

1. قم بتمكين [إضافة موضع ركن السيارة](../plugins/index.md#enable--disable) من *القائمة الرئيسية ← الإضافات*.  
2. قم بتعيين [موضع ركن السيارة](#set-a-spot) على الخريطة عبر قائمة السياق.
3. (اختياري) أضف [ودجة موقف السيارة](#parking-widget) إلى الشاشة للوصول السريع.  


## موضع ركن السيارة على الخريطة {#parking-spot-on-the-map}

عندما تحدد موضع ركن السيارة، يحفظ OsmAnd إحداثياته الجغرافية مع طابع زمني. إذا لزم الأمر، يمكن أيضًا إضافة حد زمني وتذكير في التقويم. يتم حفظ مواضع ركن السيارة كـ**نقاط مفضلة**. للتأكد من أن علامة ركن السيارة مرئية على الخريطة، يجب تمكين [المفضلات](../personal/favorites.md).


### تعيين موضع {#set-a-spot}

لتعيين موضع ركن السيارة على الخريطة، قم بالتكبير إلى المستوى المطلوب، ثم انقر نقرًا طويلاً على المكان على الخريطة وفي [قائمة السياق](../map/map-context-menu.md) التي تفتح، قم بالإعدادات.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تعيين موضع ركن السيارة في أندرويد](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![تعيين الحدود الزمنية في أندرويد](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحديد موقف السيارة في الإجراءات في iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![تعيين نقطة ركن السيارة في iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

لوضع علامة ركن السيارة، قم بتكبير الخريطة، وانقر نقرًا طويلاً على الموقع المطلوب، وافتح [قائمة السياق](../map/map-context-menu.md). ثم:

1. انقر على [الإجراءات](../map/map-context-menu#actions).
2. حدد **تحديد كموقع لركن السيارة** (*أندرويد*) أو **إضافة موقع لركن السيارة** (*iOS*).
3. اختر أحد الخيارات المتاحة:
   - **غير محدود بوقت** – يضيف علامة أساسية بدون عد تنازلي.
   - **ركن محدود بوقت** – يسمح لك بتعيين وقت انتهاء وإنشاء تذكير اختياري في تقويم جهازك.
4. أكد لوضع العلامة. يتم حفظ وقت البدء تلقائيًا.

:::info وقت البدء
يتم دائمًا تعيين وقت البدء تلقائيًا. إذا كنت بحاجة إلى تغيير وقت الانتهاء، فيجب عليك حذف موضع ركن السيارة وإعادة إنشائه. تتم إضافة التذكيرات إلى التقويم الخاص بك فقط إذا حددت هذا الخيار أثناء الإعداد.
:::


### ابق على اطلاع {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ودجة موقف السيارة أندرويد](@site/static/img/plugins/parking/parking_widget_android.png)

![الوقت المتبقي في أندرويد](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة موقف السيارة iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![معلومات موقف السيارة في iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

بمجرد حفظ موضع ركن السيارة، يساعدك OsmAnd على مراقبة موقعه وتوقيته من خلال قائمة السياق أو [ودجة موقف السيارة](#parking-widget) الاختيارية.

يمكنك عرض علامة ركن السيارة عن طريق تصغير الخريطة أو بالنقر على **ودجة موقف السيارة**، والتي تتوسط الخريطة على الموضع المحفوظ. تعرض الودجة أيضًا المسافة من موقعك الحالي (أو مركز الخريطة) إلى موقع ركن السيارة.

يتم عرض تفاصيل إضافية عند النقر على علامة ركن السيارة:

- **وقت البدء** – اللحظة التي تم فيها وضع العلامة.
- **الوقت المتبقي** أو **الوقت المتجاوز** – إذا تم تعيين حد زمني، فهذا يوضح مقدار الوقت المتبقي أو الذي انقضى منذ انتهاء الصلاحية.
- إذا قمت بتمكين التذكير في التقويم، فسوف يظهر في تطبيق التقويم على جهازك.


### التنقل إلى نقطة الطريق {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![التوجه إلى نقطة ركن السيارة في أندرويد](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![التوجه إلى نقطة ركن السيارة في iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

يمكنك استخدام موضع ركن السيارة كنقطة هدف للتنقل للعودة بسهولة إلى سيارتك. يقدم OsmAnd طريقتين رئيسيتين لبدء التنقل إلى موقع ركن السيارة المحفوظ:

**عبر قائمة التنقل**:

  1. انقر على زر **التنقل**.  
  2. اختر ملف تعريف.  
  3. انقر على **تعيين الوجهة** وحدد **موقف السيارة** من قائمة النقاط المحفوظة.

**عبر ودجة موقف السيارة**:

  1. انقر على **ودجة موقف السيارة**.  
  2. انقر على علامة موضع ركن السيارة.  
  3. حدد **التنقل** واختر الملف التعريفي الذي تريد استخدامه.


### إزالة موضع {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراء حذف موقف السيارة في أندرويد](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![إجراء حذف موقف السيارة في iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

لحذف علامة ركن السيارة:

1. حدد موضع ركن السيارة على الخريطة أو انقر على **ودجة موقف السيارة**.
2. انقر على العلامة لفتح قائمة السياق.
3. حدد **حذف** أو **إلغاء**.

إذا تم تعيين تذكير في التقويم، فسوف يتم إزالته تلقائيًا أيضًا.


## ودجة موقف السيارة {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → إضافة ودجة → <Translate android="true" ids="map_widget_parking"/>*  

![إضافة ودجة موقف السيارة في أندرويد](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → إضافة ودجة → <Translate ios="true" ids="parking_place"/>*  

![إضافة ودجة موقف السيارة في iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

تعرض [ودجة موقف السيارة](../widgets/info-widgets.md#parking-widget) المسافة من مركز الشاشة إلى موقع ركن السيارة المحفوظ وتسمح لك بتوسيط الخريطة بسرعة على ذلك الموقع.

- تكون الودجة مرئية فقط بعد تعيين موضع ركن السيارة.
- إذا لم تكن موجودة بالفعل على الشاشة، يمكنك إضافتها عبر قائمة [تكوين الشاشة](../widgets/configure-screen.md).

للمزيد من المعلومات، انظر: [الودجات المعلوماتية – ودجة موقف السيارة](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## المقالات ذات الصلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخريطة)](../../user/map/vector-maps.md)