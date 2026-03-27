---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

## نظرة عامة {#overview}

*البحث عن عنوان في OsmAnd* يعتمد على بيانات OpenStreetMap ويسمح لك بالعثور على موقع واتجاهات إلى عنوان محدد من قائمة مرتبة جاهزة، بالإضافة إلى البحث عن طريق الرمز البريدي أو الإحداثيات. تتيح لك هذه الأداة العثور على العناوين المطلوبة ببضع نقرات، مما يقلل من وقت البحث ويساعد في حال لم تتذكر العنوان الدقيق.

يعمل البحث عن العنوان دون اتصال باستخدام الخرائط المحملة. تأكد من تثبيت الخريطة للمنطقة التي تبحث فيها. تعتمد النتائج على بيانات العنوان المتاحة في OpenStreetMap.

يوفر OsmAnd عدة طرق للوصول إلى *أداة البحث* حيث يوجد قسم **البحث عن عنوان**.

- [زر البحث](../widgets/map-buttons.md#search) يظهر دائمًا على الخريطة، والنقر عليه سينقلك إلى [الشاشة العامة](#full-text-search) للأداة، حيث يمكنك العثور على علامة التبويب *العنوان*.
- اذهب إلى *القائمة* الرئيسية في أندرويد ← *بحث* ← علامة تبويب *العنوان*.
- عند التحضير لبدء مسار، انقر على *ملاحة* ← *تعيين الوجهة* ← *حقل البحث*.


## بحث نصي كامل {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث أندرويد](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

يدعم OsmAnd البحث النصي الكامل عن العنوان. هذا يعني أنه يمكنك كتابة عنوان مباشرة في حقل البحث بدلاً من اختيار المدينة → الشارع → رقم المنزل خطوة بخطوة. يحاول محرك البحث التعرف على مكونات العنوان مثل:
- المدينة؛
- الشارع؛
- رقم المنزل؛
- الرمز البريدي؛
- اسم المكان.

لا تحتاج إلى إدخالها بترتيب صارم. **أمثلة على الاستعلامات**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

إذا لم يتم العثور على العنوان الكامل، يحاول OsmAnd تلقائيًا استعلامات مبسطة (على سبيل المثال بإزالة الكلمات الإضافية) لتحسين فرص العثور على الموقع.

**ملاحظة:** يعمل البحث عن العنوان فقط ضمن الخرائط المحملة. تعتمد نتائج البحث على:
- الخرائط المثبتة على جهازك؛
- منطقة الخريطة المرئية؛
- موقعك الحالي. 

إذا لم يتم العثور على شيء، قد يقترح OsmAnd زيادة نصف قطر البحث.

### البحث عن عنوان في الولايات المتحدة وبيانات TIGER {#us-address-search-and-tiger-data}

يدعم OsmAnd البحث عن العناوين باستخدام بيانات OpenStreetMap، ولكن في الولايات المتحدة، قد تكون نتائج البحث عن العناوين غير مكتملة بسبب استخدام [بيانات TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **توفر بيانات TIGER نطاقات عناوين، وليس مواقع دقيقة**، وهذا يعني أنه قد لا يتم التعرف على بعض أرقام المنازل.
- **إذا لم يتم العثور على عنوان**، حاول البحث *باسم الشارع* بدلاً من رقم منزل محدد.
- استخدم *معرفات مواقع بديلة*، مثل المعالم القريبة أو الرموز البريدية، لتحسين نتائج البحث.  

### التنسيقات المدعومة {#supported-formats}

يدعم OsmAnd عدة تنسيقات شائعة للعناوين. يمكنك إدخال العناوين بترتيبات مختلفة حسب معرفتك بالعنوان.

| تنسيق العنوان | أمثلة على الاستعلامات |
|---|---|
| رقم المنزل + الشارع | 221B Baker Street<br />10 Downing Street |
| الشارع + رقم المنزل | Baker Street 221B<br />Main Street 101 |
| المدينة + الشارع + رقم المنزل | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| تقاطعات الشوارع | Broadway & Wall Street<br />Main Street and High Street |
| اسم المدينة | Berlin<br />Vienna<br />San Francisco |
| الرمز البريدي + العنوان | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### نصائح البحث {#search-tips}

البحث عن العنوان في OsmAnd متسامح مع تنسيقات الإدخال المختلفة. يمكنك المحاولة:
- تغيير ترتيب الكلمات؛
- إزالة المعلومات الإضافية؛
- البحث فقط باسم الشارع.

كما أن محرك البحث متسامح مع الاختلافات الشائعة في تنسيق العنوان مثل ترتيب الكلمات المختلف، أو الاختلافات في الإملاء، أو الاختصارات، أو تنسيقات أرقام المنازل. يظهر الجدول أدناه الاختلافات النموذجية في البحث التي قد تعيد نفس العنوان.

| اختلاف البحث | أمثلة على الاستعلامات | المناقشة ذات الصلة |
|---|---|---|
| اختلافات أسماء الشوارع | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/23709) |
| تجاهل المسافات في الأسماء | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/13783) |
| أرقام المنازل مع لاحقيات حرفية | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/23320) |
| اختصارات الشوارع | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/4923) |
| العنوان الكامل مقابل العنوان المبسط | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/19004) |
| تنسيق العنوان الأمريكي | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/6824) |
| اختصارات الولايات الأمريكية | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [مناقشة](https://github.com/osmandapp/OsmAnd/issues/6824) |


## حدد المدينة {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث عن شارع أندرويد](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث عن شارع iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**أقرب المدن**  
    **يعرض هذا قائمة صغيرة بالمدن حول موقعك** أو الموقع الذي حددته لـ *حدد الشارع* أو *حدد المدينة*. يحتوي كل حقل على أيقونة تتوافق مع حجم المدينة، واسم المدينة، والمسافة منك إلى مركزها، وبالنسبة لأندرويد اتجاه البوصلة.

تسهل طريقة البحث هذه العثور على مواقع محددة داخل منطقة مختارة، مما يوفر طريقة ملائمة للعثور على العناوين بدقة وسرعة. يمكنك بدء البحث عن العنوان المطلوب بتحديد الموقع.

- للقيام بذلك، انقر على **حدد المدينة/البلدة/الموقع أولاً** (أندرويد) أو **حدد المدينة** (iOS).
- في القائمة التي تفتح، حدد الموقع المطلوب. [هنا](#full-text-search) يصف الترتيب الذي يتم به عرض استعلامات البحث والمعلومات المتاحة حول كل عنصر.
- على الشاشة التالية، يمكنك إما الاستمرار في تحسين العنوان أو تحديد زر *عرض على الخريطة* أسفل حقل إدخال البحث.
- لتحديد بحثك، يمكنك إدخال كل أو جزء فقط من اسم المدينة أو البلدة أو القرية حيث يقع العنوان الذي تبحث عنه. يتيح لك ذلك تضييق نطاق البحث والحصول على قائمة أكثر دقة.
- يؤدي النقر على العنصر الأخير في العنوان، أو رقم المنزل، أو اسم التقاطع، إلى فتح [قائمة سياق الخريطة](../map/map-context-menu.md#select-an-object-single-tap) للكائن.

:::note مفتاح وقيمة
*بحث عن مدينة / بلدة / قرية* بواسطة [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*النتيجة*: عرض جميع الكائنات بهذا الاسم.
:::


## حدد الشارع {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث عن شارع أندرويد](@site/static/img/search/street_search.png) ![بحث عن شارع أندرويد](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث عن شارع iOS](@site/static/img/search/address_street_search_3_ios.png) ![بحث عن شارع iOS](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

يتم إجراء البحث عن الشارع في الموقع الذي تتواجد فيه، أو حيث بحثت من قبل، أو الذي يقع في وسط الخريطة المرئية على شاشة التطبيق.

- لاستخدام هذا النوع من البحث، انقر على **بحث عن شارع** (*أندرويد*) أو **حدد الشارع** (*iOS*).
- في حقل البحث بجوار اسم المدينة، يمكنك البدء في كتابة اسم الشارع وستقوم القائمة بالتحسين، مما يمنحك النتائج الأكثر ملاءمة.
- في العناصر الأخرى، يكون البحث عن الشارع هو نفسه كما في [حدد المدينة](#select-city).

:::note مفتاح وقيمة
*بحث عن الشوارع* بواسطة [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*النتيجة*: يتم عرض جميع الشوارع بهذا الاسم.
:::


## البحث بالرمز البريدي {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث بالرمز البريدي أندرويد](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث بالرمز البريدي iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**لاستخدام *البحث بالرمز البريدي*، ما عليك سوى إدخال الرقم**، الذي يمكن أن يتكون حتى من رقم واحد، ويقدم التطبيق قائمة بالرموز البريدية المتاحة ذات الصلة.

- حدد الرمز المطلوب وانقر عليه.
- يمكنك استخدام ميزة *عرض *رقم الرمز البريدي* على الخريطة*. يؤدي هذا إلى فتح [قائمة سياق الخريطة](../map/map-context-menu.md#select-an-object-single-tap) مع الرمز البريدي المحدد دون أي معلومات إضافية حول الموقع.
- يمكنك تحسين بحثك بهذا الرمز عن طريق تحديد الشارع المطلوب أولاً من القائمة ثم الرقم.

**يمكن أن يكون البحث بالرمز البريدي مفيدًا في الحالات التالية:**

- اسم الشارع موجود في عدة مدن.
- تعرف الرمز البريدي لكن ليس العنوان الدقيق.

:::note
لمزيد من المعلومات، اقرأ **[بيانات الرموز البريدية في المملكة المتحدة](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## البحث بالإحداثيات {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث بالإحداثيات أندرويد](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث بالإحداثيات iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**البحث بالإحداثيات**](../search/search-coordinates.md) يسمح لك بتحديد الإحداثيات الجغرافية، مثل خطوط الطول والعرض، للعثور على موقع محدد. يوفر مواقع دقيقة على الخريطة بتنسيقات [إحداثيات مختلفة](../search/search-coordinates.md#coordinate-format) ويسمح لك بالحصول على معلومات ذات صلة. يمكن أن تكون هذه الميزة مفيدة عندما لا يكون لديك عنوان أو اسم دقيق لموقع ما، ويمكن أن تسهل تخطيط السفر والملاحة في أماكن غير معروفة.


## مقالات ذات صلة {#related-articles}

- [البحث في الكل](./search-all.md)
- [سجل البحث](./search-history.md)
- [البحث عن نقاط الاهتمام](./search-poi.md)
- [البحث بالإحداثيات](./search-coordinates.md)