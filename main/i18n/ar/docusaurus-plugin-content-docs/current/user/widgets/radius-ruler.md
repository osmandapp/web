---
source-hash: 87d73ff443e95ab1dcaaecf7746b579887fa93a633560d2d381fc2a5a0c16094
sidebar_position: 5
title:  مسطرة نصف القطر والمسطرة
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

- تعرض أداة **المسطرة** مقياس خريطة ديناميكيًا بوحدات مثل المتر أو القدم، مما يساعدك على تقييم المسافات بصريًا بين الكائنات على الشاشة.
- تتيح لك **مسطرة نصف القطر** تعيين نصف قطر من أي نقطة على الخريطة، مع عرض دوائر متحدة المركز تمثل فترات المسافة.
- تتيح لك أداة **المسافة بالنقر** قياس المسافات عن طريق النقر على الخريطة — إما من موقعك الحالي أو بين أي موقعين.

هذه الأدوات مفيدة لتخطيط المسارات، وتقدير القرب من المعالم، وتحليل المناطق — سواء للأنشطة الخارجية أو الملاحة الدقيقة.

![شاشة مسطرة نصف القطر](@site/static/img/widgets/radius_ruler_screen.png)


## المسطرة {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة المسطرة](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة المسطرة](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

تعرض **المسطرة** مقياس الخريطة الحالي كقطعة مستقيمة تحمل طولها في العالم الحقيقي (على سبيل المثال، ١٠٠ متر أو ٥٠٠ قدم)، في أسفل الشاشة. الخصائص:

- يتكيف المقياس ديناميكيًا عند التكبير أو التصغير.
- يوفر مرجعًا بصريًا لتقدير المسافات في العالم الحقيقي بين الكائنات على الخريطة.
- يتم تقريب طول القطعة إلى وحدات ملائمة (على سبيل المثال، ١٠٠ متر)، بما يتناسب تقريبًا مع عرض الإبهام للاستخدام البديهي.

هذه الأداة مفيدة عندما تحتاج إلى فهم سريع لأحجام الكائنات أو المسافات دون وضع علامات أو مسارات.

| | |
|------------|------------|
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## ودجة مسطرة نصف القطر {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← أضف ودجة ← <Translate android="true" ids="radius_ruler_item"/>*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← أضف ودجة ← <Translate android="true" ids="radius_ruler_item"/>*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

تعرض [ودجة مسطرة نصف القطر](../widgets/info-widgets.md#radius-ruler) المسافة بين موقعك الحالي (*موقعي*) ومركز الخريطة. يمكنك أيضًا تحريك الخريطة لتعيين أي نقطة مركزية مخصصة. الخصائص:

- عرض دوائر متحدة المركز تتمحور حول النقطة المحددة.
- تعكس الدائرة الأولى [مقياس الخريطة](#ruler) الحالي كمرجع بصري سريع.
- يتم الضبط تلقائيًا عند التكبير للحفاظ على قيم نصف قطر دقيقة.

استخدم هذه الودجة لتقدير القرب من نقاط الاهتمام أو التخطيط حول منطقة محددة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![شاشة مسطرة نصف القطر](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="مسطرة نصف القطر"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="مسطرة نصف القطر"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="مسطرة نصف القطر"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## بوصلة لمسطرة نصف القطر {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسطرة البوصلة](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسطرة البوصلة](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

عندما تكون **مسطرة نصف القطر** نشطة، تعرض الخريطة تراكب بوصلة للمساعدة في توجيه نفسك في الفضاء. يوضح التراكب كيفية محاذاة الخريطة بالنسبة للشمال الحقيقي، وقد يتضمن مثلثًا أزرق يشير إلى الاتجاه الحالي للجهاز.

- تُظهر حلقة البوصلة اتجاه الخريطة — سواء كان الشمال لأعلى أو مُدارًا.
- يشير **المثلث الأزرق** إلى الاتجاه الذي يواجهه جهازك.
- لاستخدام هذه الميزة، يجب أن يدعم الجهاز ويفعّل **مستشعر البوصلة** (بوصلة GPS، مقياس المغناطيسية).
- يؤدي حمل الجهاز أفقيًا إلى تحسين الدقة والتصور.
- إذا كان **المثلث الأزرق** و**السهم الأحمر** (الشمال) يشيران كلاهما إلى الأعلى، فإن الجهاز يكون محاذيًا للشمال الحقيقي.

هذا التراكب مفيد للملاحة في الهواء الطلق، مما يتيح لك مطابقة [اتجاه الخريطة](../map/interact-with-map.md#map-orientation-modes) مع البيئة الحقيقية.

| | |
|------------|------------|
| تفعيل | **أندرويد**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← أضف ودجة ← <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← أضف ودجة ← <Translate android="true" ids="radius_ruler_item"/>* |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (أندرويد)* ← *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## موضع الوسط / الأسفل {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![مسطرة نصف القطر للأسفل](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *← أخرى ← موضع الموقع على الشاشة*

![موضع العرض أندرويد](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![مسطرة نصف القطر للأسفل](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

لزيادة نصف القطر المرئي حول موقعك، يمكنك تغيير موضع مسطرة نصف القطر عن طريق تحديد خيار *الوسط* أو *الأسفل*.

لمزيد من المعلومات حول *الموضع على الشاشة*، راجع مقالة [تكوين الشاشة](../widgets/configure-screen.md#display-position-location-position-on-screen).


## العرض ثلاثي الأبعاد {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تنسيق ثلاثي الأبعاد لمسطرة نصف القطر](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تنسيق ثلاثي الأبعاد لمسطرة نصف القطر](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

يمكنك التبديل إلى **العرض ثلاثي الأبعاد** لتصور المسافات والتضاريس المحيطة بشكل أفضل عند استخدام مسطرة نصف القطر. يميل هذا العرض الخريطة ويوفر تأثير منظور يوسع نصف القطر المرئي.

- انقر على [زر الموقع](../map/interact-with-map.md#my-location-and-zoom) للتركيز على موقعك.
- استخدم إيماءة [السحب بإصبعين لأعلى](../map/interact-with-map.md#gestures) لإمالة الخريطة إلى الوضع ثلاثي الأبعاد.

ستظهر دوائر نصف القطر بعمق، وهو أمر مفيد بشكل خاص لتخطيط المسارات في المناطق الجبلية أو البيئات الحضرية حيث يكون السياق الرأسي مهمًا.


## المسافة بالنقر {#distance-by-tap}

![المسافة بين نقطتين عشوائيتين على الخريطة](@site/static/img/widgets/distance_between_two_random_points.png)

تتيح لك أداة **المسافة بالنقر** قياس المسافات بين النقاط على الخريطة دون استخدام مسطرة نصف القطر أو إنشاء مسار.

هناك حالتان للاستخدام:

- **المسافة من موقعك إلى نقطة**  
  انقر في أي مكان على الخريطة وسيظهر خط مستقيم من موقعك الحالي إلى النقطة التي تم النقر عليها، مع تسمية للمسافة. يبقى الخط على الشاشة حتى إذا نقرت في مكان آخر.

- **المسافة بين أي نقطتين**  
  انقر على نقطتين على الخريطة في وقت واحد (لمس متعدد). يربط خط بين النقطتين، ويتم عرض المسافة المقاسة.

| | |
|------------|------------|
| تفعيل |  **أندرويد:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| حجم النص (أندرويد) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| تنسيق الوحدات | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## أدلة الفيديو {#video-guides}

شاهد هذه الدروس القصيرة لتعلم كيفية استخدام مسطرة نصف القطر والأدوات ذات الصلة في OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## مقالات ذات صلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [الودجات المعلوماتية](./info-widgets.md)
- [ودجات الملاحة](./nav-widgets.md)
- [الإجراء السريع](./quick-action.md)
- [ودجات العلامات](./markers.md)