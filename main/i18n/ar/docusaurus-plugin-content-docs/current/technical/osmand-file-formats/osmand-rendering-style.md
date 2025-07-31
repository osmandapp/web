---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# نمط عرض الخريطة - ‎.render.xml {#map-rendering-style---renderxml}

إذا كنت ترغب في تعديل نمط العرض الافتراضي، فستحتاج إلى مراجعة [التعريف على GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). ستجد جميع أنواع الأنماط على هذا [الرابط](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles)، لذا إذا كنت ستقوم بإنشاء نمط خاص بك، فيمكنك العثور على أسهل مثال.

في حال قررت إنشاء نمط عرض مخصص خاص بك، قد تحتاج إلى إنشاء [خرائطك الخاصة](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) لإضافة عرض ميزات مخصصة.

## أقسام نمط الخريطة {#map-style-sections}

يتكون ملف نمط الخريطة من عدة أقسام.

| القسم | الوصف |
|---------|-------------|
| **الرأس** | يتكون من `name` (اسم النمط)، `defaultColor` (لون الخريطة الافتراضي يمكن تجاوزه بواسطة السمة defaultColor) و `depends` (يرث جميع الخصائص من النمط الأصلي). |
| **المعلمات** | تُعرّف كـ `<renderingProperty>` ولها `attr` الذي سيُستخدم في النمط كاسم معلمة، و `name` و `description` سيُعرضان للمستخدم. |
| **السمات** و **الثوابت** | تُعرّف كـ `<renderingAttribute>` و `<renderingConstant>` تسمح بإعادة استخدام نفس كتل أنماط العرض لكائنات الخريطة المختلفة |
| قسم **الترتيب** | يُعرّف ككتلة [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). يُبحث عن كل كائن خريطة في قسم الترتيب لتحديد ما إذا كان سيُعرض كنقطة أو خط أو مضلع (`objectType`) وبأي `order` يجب عرضه. **معلمات البحث** (الإدخال): `tag`، `value`، `zoom`، `point` (صحيح أو خطأ)، `area` (نوع OSM)، `cycle` (نقطة البداية والنهاية متطابقتان). **نتيجة البحث** (الإخراج): `objectType` (نقطة = 1، خط = 2، مضلع = 3)، `order` (0-255). يُعرّف ترتيب العرض كالتالي: المضلعات، ظلال الخطوط، الخطوط، النقاط. إذا كان `order` متطابقًا للمضلعات، فسيتم عرض المضلعات من الأكبر إلى الأصغر. ملاحظة: يجب ألا تتداخل المضلعات جزئيًا وإلا فإن السلوك غير محدد. |
| قسم **النص** | يُعرّف ككتلة [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). يُبحث عن كل كائن خريطة معروض لتحديد ما إذا كان يجب عرض النص وكيف يجب عرضه. **معلمات البحث** (الإدخال): `tag`، `value`، `zoom`، `nameTag` (يتم فحص كل علامة نصية). **نتيجة البحث** (الإخراج): `textOnPath`، `textMinDistance` (الهامش بين النصوص المتشابهة مثل أسماء الطرق، المراجع)، `textSize`، `textColor`، `textHaloRadius`، `textOrder`، `textDy`، `textBold`، `nameTag2` (اسم إضافي بين قوسين إذا كان موجودًا)، `textShield` (خلفية حول النص)، `icon` (أيقونة بدلاً من النص)، `textItalic`، `textWrapWidth`، `intersectionMargin` (هامش إضافي لتجنب تداخل النص). |
| قسم **النقطة** | يُعرّف ككتلة [`<point>`](https://github.osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). يُبحث عن كل كائن خريطة نقطي معروض (مُعرّف في قسم `order`) في هذا القسم لتحديد كيفية عرضه. **معلمات البحث** (الإدخال): `tag`، `value`، `zoom`، `e`. **نتيجة البحث** (الإخراج): `shield` (درع الأيقونة)، `icon`، `iconVisibleSize` (مساحة إضافية لتجنب ازدحام الأيقونات)، `iconOrder`، `intersectionSizeFactor`. |
| قسم **المضلع** | يُعرّف ككتلة [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). يُبحث عن كل كائن خريطة مضلع معروض (مُعرّف في قسم `order`) في هذا القسم لتحديد كيفية عرضه. **معلمات البحث** (الإدخال): `tag`، `value`، `zoom`. **نتيجة البحث** (الإخراج): `color` (لون لملء المضلع)، `shader` (ملء المضلع بنفس الأيقونة)، `color_2, color_N` (لون الحد حول المضلع)، `strokeWidth_2` (عرض الحد)، `pathEffect_2`، `cap_2`. |
| قسم **الخط** | يُعرّف ككتلة [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). يُبحث عن كل كائن خريطة خطي معروض (مُعرّف في قسم `order`) في هذا القسم لتحديد كيفية عرضه. يمكن عرض كائن خط واحد كخطوط متعددة مدمجة تصل إلى -2 طبقة أسفل و 7 طبقات أعلى. **معلمات البحث** (الإدخال): `tag`، `value`، `zoom`، `nameTag` (يتم فحص كل علامة نصية). **نتيجة البحث** (الإخراج): `color, color_*` (لون الحد حول المضلع)، `strokeWidth, strokeWidth_*` (عرض الحد)، `pathEffect, pathEffect_*` (تأثير المسار)، `cap, cap_*` (BUTT، ROUND، SQUARE)، `pathIcon`، `pathIconStep`، `shadowRadius` (ظل حول الخط). |

## محددات ميزات الخريطة {#map-feature-selectors}
لتحديد السمات التي يجب استردادها من نمط العرض، يتم إكمال إجراء البحث التالي:
- ابحث عن `<case>` الداخلي الذي يتوافق مع معلمات إدخال البحث `tag/value/zoom`، على سبيل المثال لـ `highway=primary` - سيتم العثور على `<case tag="highway" value="primary">`.
- يتم تطبيق جميع الأجزاء الداخلية لـ `<case>` بالتسلسل العميق ويتم جمع معلمات الإخراج
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - سيكون الإخراج 2 في حالة `zoom=15` وسيكون الإخراج 1 بخلاف ذلك.
- يتم التحقق مما إذا كان `<case>` جزءًا من أي `<switch>`، وإذا كان كذلك، فسيتم تقييم جميع `apply` و `apply_if` لهذا التبديل أيضًا

قواعد التقييم:
- في كل 'case' و 'apply_if' و 'switch' و 'apply'، يتم التحقق من سمات الإدخال لمطابقتها (تقييمها إلى صحيح)، وإلا يتم تخطي القسم ولا يتم جمع سمات الإخراج.
- يتم تقييم جميع القواعد بالتسلسل ويمكن تجاوز معلمات الإخراج بواسطة القواعد التالية
- `additional=?` هي سمة إدخال خاصة تتحقق من علامات إضافية للكائن
- معلمات نمط الخريطة هي معلمات بحث إدخال بالإضافة إلى `tag/value/zoom`
    - مثال: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. معلمات الإدخال: nightMode، streetLightingNight؛ معلمات الإخراج - shield.

## السمات (الخاصة) والثوابت {#attributes-special--constants}
يمكن تبادل ثوابت العرض وسمات العرض ويمكن استخدامها لتبسيط نمط العرض وتجنب النسخ/اللصق للقيم أو كتل التعليمات البرمجية. في حالة كون السمة مثل `color` قيمة واحدة، فمن **المفضل** استخدام **ثابت العرض** لأنه يسرع بشكل كبير من أداء نمط العرض.

يمكن استخدام ثوابت العرض بقيمة واحدة فقط: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` ولاحقًا في محددات الميزات كـ `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

يمكن أن تحتوي سمات العرض على بنية مضمنة مع محددات إضافية وإخراج إحدى السمات التالية (`attrColorValue`، `attrBoolValue`، `attrFloatValue`، `attrIntValue`، `attrStringValue`). مثال:
```xml
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```

### السمات الخاصة {#special-attributes}

السمات الخاصة هي `<renderingAttribute >` التي لا تستخدمها المحددات ولكن يستخدمها الكود مباشرة للاستعلام عن ميزة معينة يتم رسمها في التطبيق مثل مسار التنقل، المسطرة، مسار GPX، إلخ.

| السمة الخاصة | الوصف |
|-------------------|-------------|
| `measureDistanceLine` | عرض الخط لميزة تخطيط المسار |
| `markerGuideline`, `markerPlanRouteline` | عرض الخطوط إلى العلامات |
| `route` | عرض مسار تنقل |
| `gpx` | عرض مسار GPX |
| `publicTransportLine` | عرض مسار تنقل النقل العام |
| `walkingRouteLine` | عرض تنقل النقل العام: مسار المشاة بين المحطات |
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | كيفية عرض أداة قياس نصف القطر وقياس المسافة بالنقر |
|||
| `defaultColor` | اللون الافتراضي لملء الخريطة (يغير وضع الليل / النهار) |
| `shadowRendering` | داخليًا كيفية عرض الظل باستخدام Skia |
|||
| `routeInfo_*` | مثال: `routeInfo_surface`، `routeInfo_roadClass` تنتج فئات الطرق التي سيتم عرضها في أسطورة المسار. |
|||
| `polygonMinSizeToDisplay` | داخليًا كيفية عرض الخطوط الصغيرة والمضلعات الصغيرة |
| `roadDensityZoomTile` | داخليًا كيفية عرض الخطوط الصغيرة والمضلعات الصغيرة |
| `roadsDensityLimitPerTile` | داخليًا كيفية عرض الخطوط الصغيرة والمضلعات الصغيرة |
| `defaultSymbolPathSpacing` | داخليًا كيفية عرض الخطوط الصغيرة والمضلعات الصغيرة |
| `defaultBlockPathSpacing` | داخليًا كيفية عرض الخطوط الصغيرة والمضلعات الصغيرة |
| `globalPathPadding` | داخليًا كيفية عرض الخطوط الصغيرة والمضلعات الصغيرة |
|||
| `debugTextDisplayBBox` | سمات لتصحيح أخطاء عرض النص وتحديد المواقع |
| `debugTextDisplayShieldBBox` | سمات لتصحيح أخطاء عرض النص وتحديد المواقع |
| `debugTextDoNotFindIntersections` | سمات لتصحيح أخطاء عرض النص وتحديد المواقع |
| `debugTextDoNotFindIntersectionsSameName` | سمات لتصحيح أخطاء عرض النص وتحديد المواقع |
| `debugTextDisplayShortRoadNames` | سمات لتصحيح أخطاء عرض النص وتحديد المواقع |

## معلمات نمط الخريطة {#map-style-parameters}

تسمح معلمات نمط الخريطة بدمج أنماط عرض متعددة ضمن تعريف ملف واحد، أي لا توجد حاجة لامتلاك ملف "my_custom_style_night_mode.render.xml" منفصل، فمن الممكن تعريف معلمة مثل `night_mode` (ممكنة افتراضيًا) وتخصيص قواعد معينة (مثل الألوان) باستخدام هذه المعلمة. لاحقًا في واجهة المستخدم، من الممكن تبديل هذه المعلمة بسهولة والحصول على نمط خريطة مختلف في OsmAnd.

هنا تعريف لمعلمة `baseAppMode`. `possibleValues` هي القيم التي ستعرض في واجهة مستخدم OsmAnd، وتساعد `category` في تحديد فئة واجهة المستخدم التي تنتمي إليها هذه الخاصية.
```xml
<renderingProperty attr="baseAppMode" name="Default Rendering mode" description="Map optimization for respective User Profile based on base (parent) profile"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

لاحقًا في نمط التحديد، يمكنك تحديد متى يمكن تطبيق هذا المحدد، أي لوضع التطبيق الذي يحدده المستخدم
```xml
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Number of roads to display per tile -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

لذا، إذا اختار المستخدم `moreDetailed=true`، فستكون قيمة الإخراج للكثافة `55`، وإذا كان `baseAppMode=pedestrian` (معلمة أخرى)، فستكون `40`، وإلا فستكون `60`.