---
source-hash: 338468efc137a0618ed472d99c99d808cd6f3df5d30650e5054eabd75c599d06
sidebar_position: 5
title: المسطرة الشعاعية والمسطرة
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

## نظرة عامة {#overview}

صُممت **أدوات المسطرة** في OsmAnd لمساعدتك على قياس المسافات وفهم [مقياس الخريطة](https://en.wikipedia.org/wiki/Scale_(map)) بدقة.

- تعرض أداة **المسطرة** مقياس خريطة ديناميكيًا بوحدات مثل الأمتار أو الأقدام، مما يساعدك على تقييم المسافات بين الكائنات على الشاشة بصريًا.
- تسمح لك **المسطرة الشعاعية** بتعيين نصف قطر من أي نقطة على الخريطة، مع إظهار دوائر متحدة المركز تمثل فترات المسافة.
- تتيح لك أداة **المسافة بالنقر** قياس المسافات بالنقر على الخريطة — إما من موقعك الحالي أو بين أي موقعين.

تعد هذه الأدوات مفيدة لتخطيط المسارات، وتقدير القرب من المعالم، وتحليل المناطق — سواء للأنشطة الخارجية أو الملاحة الدقيقة.

![شاشة المسطرة الشعاعية](@site/static/img/widgets/radius_ruler_screen.png)

## المسطرة {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة المسطرة](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة المسطرة](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

تعرض **المسطرة** مقياس الخريطة الحالي كقطعة خطية مُسمّاة بطولها الحقيقي (مثل 100 متر أو 500 قدم)، في أسفل الشاشة. الخصائص:

- يتكيف المقياس ديناميكيًا أثناء التكبير أو التصغير.
- يوفر مرجعًا بصريًا لتقدير المسافات الحقيقية بين الكائنات على الخريطة.
- يتم تقريب طول الجزء إلى وحدات مناسبة (مثل 100 متر)، تتطابق تقريبًا مع عرض الإبهام للاستخدام البديهي.

تعد هذه الأداة مفيدة عندما تحتاج إلى فهم سريع لأحجام الكائنات أو المسافات دون وضع علامات أو مسارات.

| | |
|------------|------------|
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

## أداة المسطرة الشعاعية {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="radius_ruler_item"/>*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="radius_ruler_item"/>*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

تعرض [أداة المسطرة الشعاعية](../widgets/info-widgets.md#radius-ruler) المسافة بين موقعك الحالي (*موقعي*) ومركز الخريطة. يمكنك أيضًا تحريك الخريطة لتعيين أي نقطة مركز مخصصة. الخصائص:

- عرض دوائر متحدة المركز تتمركز حول النقطة المحددة.
- تعكس الدائرة الأولى [مقياس الخريطة](#ruler) الحالي للرجوع البصري السريع.
- تتكيف تلقائيًا عند التكبير للحفاظ على قيم نصف القطر الدقيقة.

استخدم هذه الأداة لتقدير القرب من نقاط الاهتمام أو التخطيط حول منطقة محددة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![شاشة المسطرة الشعاعية](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="المسطرة الشعاعية"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="المسطرة الشعاعية"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="المسطرة الشعاعية"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

## البوصلة للمسطرة الشعاعية {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسطرة البوصلة](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسطرة البوصلة](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

عندما تكون **المسطرة الشعاعية** نشطة، تعرض الخريطة تراكب بوصلة للمساعدة في توجيه نفسك في الفضاء. يُظهر التراكب كيفية محاذاة الخريطة بالنسبة للشمال الحقيقي، وقد يتضمن مثلثًا أزرق يشير إلى الاتجاه الحالي للجهاز.

- تُظهر حلقة البوصلة اتجاه الخريطة — سواء كان الشمال لأعلى أو مُدارًا.
- يشير **مثلث أزرق** إلى الاتجاه الذي يواجهه جهازك.
- لاستخدام هذه الميزة، يجب أن يدعم الجهاز ويُمكّن **مستشعر البوصلة** (بوصلة GPS، مقياس المغناطيسية).
- يؤدي حمل الجهاز أفقيًا إلى تحسين الدقة والتصور.
- إذا كان **المثلث الأزرق** و**السهم الأحمر** (الشمال) يشيران كلاهما إلى الأعلى، فإن الجهاز محاذٍ للشمال الحقيقي.

يعد هذا التراكب مفيدًا للملاحة الخارجية، مما يسمح لك بمطابقة [اتجاه الخريطة](../map/interact-with-map.md#map-orientation--compass) مع البيئة الحقيقية.

| | |
|------------|------------|
| تمكين | **أندرويد**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="radius_ruler_item"/>* |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (أندرويد)* ← *<Translate ios="true" ids="angular_units"/> (iOS)* |

## الموضع المركزي / السفلي {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![المسطرة الشعاعية للأسفل](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *← أخرى ← موضع الموقع على الشاشة*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![المسطرة الشعاعية للأسفل](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

لزيادة نصف القطر المرئي حول موقعك، يمكنك تغيير موضع المسطرة الشعاعية عن طريق تحديد خيار *المركز* أو *الأسفل*.

لمزيد من المعلومات حول *الموضع على الشاشة*، راجع المقالة [تكوين الشاشة](../widgets/configure-screen.md#display-position-location-position-on-screen).

## عرض ثلاثي الأبعاد {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تنسيق المسطرة الشعاعية ثلاثي الأبعاد](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تنسيق المسطرة الشعاعية ثلاثي الأبعاد](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

يمكنك التبديل إلى **العرض ثلاثي الأبعاد** لتصور المسافات والتضاريس المحيطة بشكل أفضل عند استخدام المسطرة الشعاعية. يقوم هذا العرض بإمالة الخريطة ويوفر تأثيرًا منظوريًا يوسع نصف القطر المرئي.

- انقر على [زر الموقع](../map/interact-with-map.md#my-location-and-zoom) للتركيز على موقعك.
- استخدم إيماءة [السحب بإصبعين لأعلى](../map/interact-with-map.md#gestures) لإمالة الخريطة إلى وضع ثلاثي الأبعاد.

ستظهر دوائر نصف القطر بعمق، وهو أمر مفيد بشكل خاص لتخطيط المسارات في المناطق الجبلية أو البيئات الحضرية حيث يكون السياق الرأسي مهمًا.

## المسافة بالنقر {#distance-by-tap}

![المسافة بين نقطتين عشوائيتين على الخريطة](@site/static/img/widgets/distance_between_two_random_points.png)

تتيح لك أداة **المسافة بالنقر** قياس المسافات بين النقاط على الخريطة دون استخدام المسطرة الشعاعية أو إنشاء مسار.

هناك حالتان للاستخدام:

- **المسافة من موقعك إلى نقطة**
  انقر في أي مكان على الخريطة وسيظهر خط مستقيم من موقعك الحالي إلى النقطة التي تم النقر عليها، بالإضافة إلى تسمية المسافة. يبقى الخط على الشاشة حتى إذا نقرت في مكان آخر.

- **المسافة بين أي نقطتين**
  انقر على نقطتين على الخريطة في نفس الوقت (لمس متعدد). يربط خط النقطتين، ويتم عرض المسافة المقاسة.

| | |
|------------|------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| حجم النص (أندرويد) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| تنسيق الوحدات | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

## أدلة الفيديو {#video-guides}

شاهد هذه البرامج التعليمية القصيرة لتتعلم كيفية استخدام المسطرة الشعاعية والأدوات ذات الصلة في OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

<iframe width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="مشغل فيديو يوتيوب" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="مشغل فيديو يوتيوب" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>

## مقالات ذات صلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات الملاحة](./nav-widgets.md)
- [الإجراء السريع](./quick-action.md)
- [أدوات العلامات](./markers.md)

> *آخر تحديث: مايو 2025*