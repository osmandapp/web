---
source-hash: 4e8a3309a2bf429582c639f9c175de6db52d66c53f5483573c9c43e9ddf5a4ad
sidebar_position: 4
title:  معلمات المركبة
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## نظرة عامة

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

للحصول على حساب أمثل للمسار في OsmAnd، يجب أن تأخذ في الاعتبار معلمات المركبة التالية:

١. اضبط [*السرعة الافتراضية* أو *سرعات الطريق*](#road-speeds)، باعتبارها [السرعة الدنيا والقصوى](#road-speeds) للمركبة. سيساعد هذا التطبيق على تحديد الوقت اللازم لإكمال المسار ويسمح له باختيار أفضل مسار، مع مراعاة حدود السرعة على قطاعات الطرق المختلفة.
٢. حدد [*نوع*](#fuel-used-by-motor) الوقود الذي يستخدمه المحرك. سيسمح هذا للتطبيق بتقدير انبعاثات ثاني أكسيد الكربون.
٣. أدخل [*سعة خزان الوقود*](#fuel-tank-capacity) لتتبع مستوى الوقود واستهلاكه بدقة.
٤. حدد [*معلمات الحجم والوزن*](#size-parameters) لمركبتك، مما يمكن أن يساعد التطبيق في حساب المسار الأمثل وتجنب العقبات على الطريق بسبب القيود.

سيساعدك ضبط المعلمات بشكل صحيح في تطبيق OsmAnd على تجنب المشاكل عند الملاحة في مسار ما، واختيار المسار الأنسب وفقًا لنوع المركبة وقيود الطريق، وحساب وقت رحلتك.


## معلمات الحجم {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

تؤثر معلمات المركبة على الملاحة وإنشاء المسار لأنها تحدد مدى توفر الطرق والجسور والعبّارات والسدود والبنى التحتية الأخرى. إذا تجاوز ارتفاع أو عرض أو طول أو وزن المركبة القيم المسموح بها لقطاعات معينة من الطريق، فسيجد نظام الملاحة في OsmAnd مسارًا بديلاً لتجنب العقبات على طول الطريق.  

- ستتوافق وحدات القياس مع الإعدادات المحددة في *الإعدادات العامة ← [الوحدات والتنسيقات](../../personal/profiles.md#units--formats)*.
- يمكن ضبط معلمات المركبة يدويًا.
- إذا قمت بتحديد معلمة قياس المركبة يدويًا، فسيقدم لك التطبيق أقرب قيمة من القائمة الجاهزة. هذا ضروري لتجنب الأخطاء وبناء المسار بشكل أكثر صحة.
- يمكنك اختيار معلمات المركبة من قائمة أحجام جاهزة.
- لا تقم بتعيين الحجم على *لا شيء*، مما يعني أنه لن يتم تطبيق أي قيود على المعلمة المحددة.  

### القيود {#limits}

**١.** [**<Translate android="true" ids="routing_attr_weight_name"/> حد**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> معلمة الوزن متاحة فقط في أنواع الملاحة مثل [*السيارة، الشاحنة*، و*الدراجة النارية*](../../navigation/routing/car-based-routing.md).  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_weight_andr.png)

**٢.**  [**<Translate android="true" ids="routing_attr_height_name"/> حد**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> معلمة الارتفاع متاحة فقط في أنواع الملاحة مثل *[السيارة، الشاحنة، الدراجة النارية](../../navigation/routing/car-based-routing.md)*، و*[القارب](../../navigation/routing/boat-navigation.md)*.  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_height_andr.png)
![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**٣.** [**<Translate android="true" ids="routing_attr_length_name"/> حد**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> معلمة الطول متاحة فقط في أنواع الملاحة مثل [*السيارة، الشاحنة*، و*الدراجة النارية*](../../navigation/routing/car-based-routing.md).  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_length_andr.png)

**٤.** [**<Translate android="true" ids="routing_attr_width_name"/> حد**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> معلمة العرض متاحة فقط في أنواع الملاحة مثل *[السيارة، الشاحنة، الدراجة النارية](../../navigation/routing/car-based-routing.md)*، و*[القارب](../../navigation/routing/boat-navigation.md)*.  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_width_andr.png)
![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

**٥.** [**حد الحمولة القصوى للمحور**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - قدم الحمولة القصوى للمحور لمركبتك لتجنب الطرق والجسور التي تحتوي على قيود وزن المحور. هذه المعلمة متاحة فقط في أنواع الملاحة مثل [*الشاحنة*](../../navigation/routing/car-based-routing.md).  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/max_axle_load.png)

**٦.** [**الوزن الأقصى عند الحمولة الكاملة**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - قدم الوزن الإجمالي الأقصى لمركبتك عند الحمولة الكاملة لتجنب الطرق والجسور التي تحتوي على قيود وزن إجمالية. هذه المعلمة متاحة فقط في أنواع الملاحة مثل [*الشاحنة*](../../navigation/routing/car-based-routing.md).  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/max_weight_at_full_load.png)

يمكن أن تكون القيود على معلمات المركبة مهمة للملاحة وسلامة الطرق. قد تشمل بعض هذه القيود ما يلي:  

١. قيود على المركبات التي تتحرك في مناطق حضرية معينة.  
٢. قيود على حركة المركبات في أجزاء معينة من الطريق، مثل حيث توجد جسور أو أنفاق ذات مساحة محدودة أو جسور علوية منخفضة الارتفاع أو منعطفات معقدة أو هياكل أخرى.  
٣. يمكن أن تكون حدود الوزن لكل محور مركبة مهمة بشكل خاص للشاحنات.
٤. قيود على المركبات التي تتحرك في ظروف معينة، مثل درجات الحرارة المرتفعة، أو الطرق المبتلة أو الثلجية، أو في الليل، أو في ظروف جوية ذات رؤية محدودة.


## معلمات الوقود {#fuel-parameters}

### الوقود المستخدم من قبل المحرك {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

إذا قمت بتحديد نوع المحرك في معلمات المركبة، فسيتم عرض [***بيانات البصمة الكربونية لثاني أكسيد الكربون***](../../navigation/setup/route-details.md#elevation-info) فوق الرسم البياني في [تفاصيل المسار](../setup/route-details.md).
تتوفر ستة أنواع من الوقود: ***بنزين، ديزل، غاز البترول المسال، غاز طبيعي مضغوط، كهربائي،*** و***هجين***.  

**قابلية التطبيق:**

إعداد **الوقود المستخدم من قبل المحرك** متاح فقط في الملاحة القائمة على المركبات مثل *[السيارة، الدراجة النارية، والشاحنة](../../navigation/routing/car-based-routing.md)*.


### سعة خزان الوقود {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


تسمح لك معلمة **سعة خزان الوقود** بتتبع [مستوى الوقود](../../widgets/info-widgets.md#vehicle-metrics-widgets) و[استهلاكه](../../widgets/info-widgets.md#vehicle-metrics-widgets) في مركبتك بشكل أكثر دقة من خلال توفير الحجم الإجمالي لخزانك. القيمة الافتراضية هي ~٥٠ ***لترًا***. يتم تحديد وحدة قياس سعة الوقود بواسطة [الملف الشخصي (الإعدادات)](../..//personal/profiles.md#units--formats) الذي تم تكوينه في *القائمة ← تكوين الملف الشخصي ← الإعدادات العامة ← الوحدات والتنسيقات ← وحدة الحجم*.

**قابلية التطبيق:**

إعداد **سعة خزان الوقود** متاح فقط في الملاحة القائمة على المركبات. بالنسبة لأنواع الملاحة مثل *الدراجة الهوائية*، *ركوب الخيل*، *سيرًا على الأقدام*، و*التزلج*، لا يتم عرض هذه المعلمة في معلمات المركبة.

## معلمات السرعة

### السرعة الافتراضية {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

**السرعة الافتراضية** هي سرعة الحركة الافتراضية لوضع النقل هذا ([حدود السرعة الافتراضية](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). بالنسبة لملفات تعريف *المشي* و*ركوب الخيل* و*ركوب الدراجات*، تكون بزيادات صغيرة تعادل ٠.١ كم/ساعة (ميل في الساعة) ([الوحدات والتنسيقات](https://osmand.net/docs/user/personal/profiles#units--formats))، وبالنسبة للملفات الشخصية الأخرى، تكون بزيادات تعادل ١ كم/ساعة (١ ميل في الساعة). يتم استخدامها:
- لتقدير [وقت المسار](../../widgets/nav-widgets.md#time-to-intermediate) عندما لا يمكن تحديد السرعة من الطرق مثل [الملاحة عبر GPX](../setup/gpx-navigation.md)، [مسارات التزلج](../routing/ski-routing.md)، [مسارات القوارب](../routing/boat-navigation.md)، [المشاة](../routing/pedestrian-routing.md) وغيرها من الملفات الشخصية المماثلة.
- لتحديد متى يتم تفعيل [الإعلانات الصوتية](../guidance/voice-navigation.md).
- لتحديد وقت الوصول المتوقع لعلامات الخريطة عن طريق الملاحة بخط مستقيم إذا لم يتم حساب متوسط السرعة بعد.



 يتم استخدامها لحساب وقت الوصول وتحديد المسار الأمثل بناءً على سرعة الحركة التي يعتبرها التطبيق نموذجية. على سبيل المثال، السيارة، النقل العام، المشاة، أو السرعة التي تحددها يدويًا.


### سرعات الطريق {#road-speeds}


![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

بالنسبة لبعض أنواع الملاحة، يمكن ضبط السرعة الدنيا والقصوى المسموح بها. إذا تم ضبطها، يفترض محرك التوجيه أن المركبة أو وسيلة النقل لن تتحرك أسرع من الحد الأقصى ولن تتحرك أبطأ من السرعة الدنيا.
على سبيل المثال، يسمح ذلك بإنشاء مسار **فعال من حيث استهلاك الوقود** حيث يكون استهلاك الوقود مثاليًا عند **السرعة القصوى** المحددة وسيجد المحرك مسارًا أقصر يتجنب الطرق الأطول ولكن الأسرع.

- **السرعة الدنيا**  
    يحدد الإعداد الحد الأدنى لسرعة القيادة لجميع أنواع الطرق على المسار. يزيد من أولوية الطرق التي تكون سرعتها الموصى بها أقل من السرعة الدنيا.  
- **السرعة القصوى**  
    يحدد الإعداد الحد الأقصى لسرعة القيادة ويقلل من أولوية الطرق التي تكون سرعتها المحتملة أعلى من الحد الأقصى.




## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعدادات الملاحة](./navigation-settings.md)
- [التوجيهات الصوتية / الإشعارات](./voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)