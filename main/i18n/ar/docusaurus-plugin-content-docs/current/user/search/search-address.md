---
source-hash: 7aa187a96947b5ca65aab12d710ed0867ffb5db9a42f53d9dfb15a99a9107f74
sidebar_position: 2
title:  البحث عن عنوان
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>

## نظرة عامة {#overview}

يعتمد *بحث OsmAnd حسب العنوان* على بيانات OpenStreetMap ويسمح لك بالعثور على الموقع والاتجاهات إلى عنوان محدد من قائمة مرتبة جاهزة، بالإضافة إلى البحث عن طريق الرمز البريدي أو الإحداثيات. تتيح لك هذه الأداة العثور على العناوين المطلوبة في بضع نقرات، مما يقلل من وقت البحث ويساعد في حال عدم تذكرك للعنوان الدقيق.

يوفر OsmAnd عدة طرق للوصول إلى *أداة البحث* حيث يقع قسم **البحث عن عنوان**.

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة، وسيؤدي النقر عليه إلى نقلك إلى [الشاشة العامة](#full-text-search) للأداة، حيث يمكنك العثور على علامة التبويب *العنوان*.
- انتقل إلى قائمة Android الرئيسية *القائمة ← بحث ← علامة تبويب العنوان*.
- عند التحضير لبدء مسار، انقر على *الملاحة ← تعيين الوجهة ← حقل البحث*.

## البحث بالنص الكامل {#full-text-search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

يبسط البحث عن طريق العنوان عملية البحث والتنقل، ويضمن الدقة وسهولة الاستخدام، ويقلل الوقت المستغرق للعثور على العنوان الصحيح.

- **لاستخدام وظيفة البحث عن عنوان،** يجب عليك [تنزيل خريطة](../start-with/download-maps.md) للمنطقة المطلوبة أولاً.
- **يعتمد البحث على البيانات الموجودة في المنطقة المرئية من الخريطة** على شاشة الجهاز. إذا لم تجد شيئًا، يقترح OsmAnd زيادة نطاق البحث.
- تحتوي معلومات العنوان في OsmAnd على جميع [مفاتيح علامات OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

قائمة استعلامات البحث:

**1.** **ترتيب** العناصر في القائمة:

- **مرتبة حسب الاسم**. سيؤدي تحديد *تحديد المدينة/البلدة/المحلية أولاً* (Android) أو *تحديد المدينة* (iOS) إلى عرض قائمة تبدأ بالعناصر غير المسماة، إن وجدت، ثم الأسماء الرقمية متبوعة بالأسماء حسب الحروف.
- **ترتيب رقمي تصاعدي**. في قائمة البحث التالية، يتم عرض أرقام المنازل بترتيب تصاعدي، بعد إدخال المدينة والشارع.

**2.** يحتوي كل حقل في قائمة البحث عن عنوان على **معلومات** مثل:

- أيقونة تحدد نوع المحلية.
- جزء من عنوان، رقم بريدي، أو منطقة إحداثيات.
- المسافة من موقعك الحالي أو من مركز المدينة.
- معلومات إضافية، مثل منطقة المدينة.

#### البحث عن عنوان في الولايات المتحدة وبيانات TIGER {#us-address-search-and-tiger-data}

يدعم OsmAnd البحث عن العناوين باستخدام بيانات OpenStreetMap، ولكن في الولايات المتحدة، قد تكون نتائج البحث عن العناوين غير مكتملة بسبب استخدام [بيانات TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **توفر بيانات TIGER نطاقات عناوين، وليست مواقع دقيقة**، وهذا يعني أن بعض أرقام المنازل قد لا يتم التعرف عليها.
- **إذا لم يتم العثور على عنوان**، حاول البحث *باسم الشارع* بدلاً من رقم منزل محدد.
- استخدم *معرفات مواقع بديلة*، مثل المعالم القريبة أو الرموز البريدية، لتحسين نتائج البحث.

### التنسيقات المدعومة {#supported-formats}

راجع مقال [البحث عن الكل](./search-all.md#basic-queries) للحصول على قائمة بالاستعلامات المتاحة وتنسيقات البحث المدعومة.

## تحديد المدينة {#select-city}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**أقرب المدن**
    يعرض هذا **قائمة صغيرة بالمدن حول موقعك** أو المحلية التي حددتها لـ *تحديد الشارع* أو *تحديد المدينة*. يحتوي كل حقل على أيقونة تتوافق مع حجم المدينة، واسم المدينة، والمسافة منك إلى مركزها، وبالنسبة لنظام Android اتجاه البوصلة.

تسهل طريقة البحث هذه العثور على مواقع محددة داخل منطقة محلية مختارة، مما يوفر طريقة ملائمة للعثور على العناوين بدقة وسرعة. يمكنك بدء البحث عن العنوان المطلوب عن طريق تحديد المنطقة المحلية.

- للقيام بذلك، انقر على **تحديد المدينة/البلدة/المحلية أولاً** (Android) أو **تحديد المدينة** (iOS).
- في القائمة التي تفتح، حدد المنطقة المحلية المطلوبة. [هنا](#full-text-search) يصف الترتيب الذي يتم به عرض استعلامات البحث وما هي المعلومات المتاحة حول كل عنصر.
- في الشاشة التالية، يمكنك إما الاستمرار في تحسين العنوان أو تحديد زر *إظهار على الخريطة* أسفل حقل إدخال البحث.
- لتحديد بحثك، يمكنك إدخال كل أو جزء فقط من اسم المدينة أو البلدة أو القرية التي يقع فيها العنوان الذي تبحث عنه. يتيح لك ذلك تضييق نطاق بحثك والحصول على قائمة أكثر دقة.
- يؤدي النقر على العنصر الأخير في العنوان، أو رقم المنزل، أو اسم التقاطع، إلى فتح [قائمة سياق الخريطة](../map/map-context-menu.md#select-an-object-single-tap) للكائن.

**يوفر البحث حسب المدينة الفوائد التالية:**

- *الراحة*. يسمح لك بتحديد المدينة المطلوبة بسرعة من القائمة، وتحديد شارع معين، أو منزل، أو تقاطع في المدينة المختارة دون الحاجة إلى إدخال العنوان الكامل. هذا يوفر الوقت ويبسط عملية العثور على المكان الصحيح.
- *الدقة.* يمكنك تحديد مدينة وشارع من الخيارات المتاحة، وتجنب الأخطاء عند إدخال العنوان يدويًا.
- *التصفية.* القدرة على تحديد منزل معين من القائمة تسهل التنقل بدقة إلى الموقع المطلوب، خاصة عندما يكون العنوان الدقيق غير معروف.

:::note مفتاح وقيمة
*البحث عن مدينة / بلدة / قرية* بواسطة [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*النتيجة*: عرض جميع الكائنات بهذا الاسم.
:::

## تحديد الشارع {#select-street}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_3_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

يتم البحث عن الشارع في المنطقة المحلية التي تتواجد فيها، أو التي بحثت فيها من قبل، أو التي تقع في مركز الخريطة المرئية على شاشة التطبيق.

- لاستخدام هذا النوع من البحث، انقر على **البحث عن شارع** (*Android*) أو **تحديد شارع** (*iOS*).
- في حقل البحث بجانب اسم المدينة، يمكنك البدء في كتابة اسم الشارع وستتحسن القائمة، مما يمنحك النتائج الأكثر ملاءمة.
- في العناصر الأخرى، يكون البحث عن الشارع هو نفسه في [تحديد المدينة](#select-city).

:::note مفتاح وقيمة
*البحث عن شوارع* بواسطة [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*النتيجة*: يتم عرض جميع الشوارع بهذا الاسم.
:::

## البحث بالرمز البريدي {#postcode-search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**لاستخدام *البحث بالرمز البريدي*، ما عليك سوى إدخال الرقم**، والذي يمكن أن يتكون حتى من رقم واحد، ويقدم التطبيق قائمة بالرموز البريدية ذات الصلة المتاحة.

- حدد الرمز المطلوب وانقر عليه.
- يمكنك استخدام ميزة *إظهار رقم الرمز البريدي على الخريطة*. يفتح هذا [قائمة سياق الخريطة](../map/map-context-menu.md#select-an-object-single-tap) مع الرمز البريدي المحدد دون أي معلومات إضافية حول الموقع.
- يمكنك تحسين بحثك بهذا الرمز عن طريق تحديد الشارع المطلوب من القائمة أولاً ثم الرقم.

**يمكن أن يكون البحث بالرمز البريدي مفيدًا في الحالات التالية:**

- *البحث عن العناوين*. عند إدخال رمز بريدي، يحدد OsmAnd المنطقة المقابلة ويقترح عناوين في تلك المنطقة. هذا مفيد بشكل خاص إذا كنت تعرف الرمز البريدي ولكنك لا تعرف العنوان الدقيق.
- *دقة الملاحة*. في الحالات التي يكون فيها العنوان غير مؤكد، أو حيث قد يتكرر اسم الشارع في مناطق مختلفة، يمكن أن يوفر استخدام الرمز البريدي أفضل مسار إلى عنوان معين.
- *الراحة والسرعة*. يتيح لك البحث بالرمز البريدي العثور على المعلومات بسرعة، خاصة إذا كنت تعرف الرمز البريدي ولكنك غير متأكد من العنوان. بدلاً من إدخال العنوان الكامل، يمكنك إدخال الرمز فقط والحصول على نتائج ذات صلة.

:::note
لمزيد من المعلومات، اقرأ **[بيانات الرمز البريدي للمملكة المتحدة](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::

## البحث بالإحداثيات {#coordinates-search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

يسمح لك [**البحث بالإحداثيات**](../search/search-coordinates.md) بتحديد إحداثيات جغرافية، مثل خطوط الطول والعرض، للعثور على موقع محدد. يوفر مواقع دقيقة على الخريطة بتنسيقات [إحداثيات مختلفة](../search/search-coordinates.md#coordinates-search) ويسمح لك بالحصول على معلومات ذات صلة. يمكن أن تكون هذه الميزة مفيدة عندما لا يكون لديك عنوان أو اسم دقيق لموقع ما، ويمكن أن تسهل تخطيط السفر والتنقل في أماكن غير معروفة.

## مقالات ذات صلة {#related-articles}

- [البحث عن الكل](./search-all.md)
- [سجل البحث](./search-history.md)
- [البحث عن نقاط الاهتمام (POI)](./search-poi.md)
- [البحث بالإحداثيات](./search-coordinates.md)

> *آخر تحديث: يوليو 2024*