---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Стиль відображення карти - .render.xml {#map-rendering-style---renderxml}

Якщо ви хочете змінити стиль відображення за замовчуванням, вам потрібно переглянути [визначення на GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). Ви знайдете всілякі стилі за цим [посиланням](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), тож якщо ви збираєтеся створити свій власний стиль, ви можете знайти найпростіший приклад.

Якщо ви вирішите створити свій власний стиль відображення, вам може знадобитися створити [власні карти](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags), щоб додати відображення власних об'єктів.

## Розділи стилю карти {#map-style-sections}

Файл стилю карти складається з кількох розділів.

| Розділ | Опис |
|---------|-------------|
| **Заголовок** | Складається з `name` (назва стилю), `defaultColor` (колір карти за замовчуванням, який може бути перевизначений атрибутом defaultColor) та `depends` (успадковує всі властивості від батьківського стилю). |
| **Параметри** | Визначаються як `<renderingProperty>` мають `attr`, який буде використовуватися в стилі як ім'я параметра, а `name`, `description` будуть відображатися користувачеві. |
| **Атрибути** та **константи** | Визначаються як `<renderingAttribute>` та як `<renderingConstant>` дозволяють повторно використовувати одні й ті ж блоки стилів відображення для різних об'єктів карти |
| Розділ **Order** | Визначається як блок [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Кожен об'єкт карти шукається в розділі order, щоб визначити, чи буде він відображатися як точка, лінія чи полігон (`objectType`) і в якому `order` він має відображатися. **Параметри пошуку** (вхід): `tag`, `value`, `zoom`, `point` (true або false), `area` (тип osm), `cycle` (початкова та кінцева точки однакові). **Результат пошуку** (вихід): `objectType` (точка = 1, лінія = 2, полігон = 3), `order` (0-255). Порядок відображення визначається як: полігони, тіні ліній, лінії, точки. Якщо `order` однаковий для полігонів, то полігони відображаються від найбільшого до найменшого. Примітка: полігони не повинні частково перекриватися, інакше поведінка не визначена. |
| Розділ **Text** | Визначається як блок [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Кожен відображений об'єкт карти шукається, щоб визначити, чи має він відображати текст і як він має відображатися. **Параметри пошуку** (вхід): `tag`, `value`, `zoom`, `nameTag` (перевіряється кожен текстовий тег). **Результат пошуку** (вихід): `textOnPath`, `textMinDistance` (відступ між однаковими текстами, наприклад, назвами доріг, посиланнями), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (додаткова назва в дужках, якщо є), `textShield` (фон навколо тексту), `icon` (іконка замість тексту), `textItalic`, `textWrapWidth`, `intersectionMargin` (додатковий відступ, щоб текст не перекривався). |
| Розділ **Point** | Визначається як блок [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Кожен відображений точковий об'єкт карти (визначений у розділі `order`) шукається в цьому розділі, щоб визначити, як він має відображатися. **Параметри пошуку** (вхід): `tag`, `value`, `zoom`, `e`. **Результат пошуку** (вихід): `shield` (щит іконки), `icon`, `iconVisibleSize` (додатковий простір, щоб не захаращувати іконки), `iconOrder`, `intersectionSizeFactor`. |
| Розділ **Polygon** | Визначається як блок [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Кожен відображений полігональний об'єкт карти (визначений у розділі `order`) шукається в цьому розділі, щоб визначити, як він має відображатися. **Параметри пошуку** (вхід): `tag`, `value`, `zoom`. **Результат пошуку** (вихід): `color` (колір для заповнення полігону), `shader` (заповнення полігону тією ж іконкою), `color_2, color_N` (колір обведення навколо полігону), `strokeWidth_2` (ширина обведення), `pathEffect_2`, `cap_2`. |
| Розділ **Line** | Визначається як блок [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Кожен відображений лінійний об'єкт карти (визначений у розділі `order`) шукається в цьому розділі, щоб визначити, як він має відображатися. 1 лінійний об'єкт може бути відображений як кілька комбінованих ліній до -2 шарів нижче та до 7 шарів зверху. **Параметри пошуку** (вхід): `tag`, `value`, `zoom`, `nameTag` (перевіряється кожен текстовий тег). **Результат пошуку** (вихід): `color, color_*` (колір обведення навколо полігону), `strokeWidth, strokeWidth_*` (ширина обведення), `pathEffect, pathEffect_*` (ефект шляху), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (тінь навколо лінії). |

## Селектори об'єктів карти {#map-feature-selectors}
Щоб визначити, які атрибути мають бути отримані зі стилю відображення, виконується наступна процедура пошуку:
- Знайти найбільш внутрішній `<case>`, який відповідає вхідним параметрам пошуку `tag/value/zoom`, наприклад, для `highway=primary` буде знайдено `<case tag="highway" value="primary">`.
- Усі внутрішні елементи `<case>` застосовуються послідовно вглиб, і збираються вихідні параметри
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - вихід буде 2 у випадку `zoom=15` і вихід буде 1 в іншому випадку.
- Перевіряється, чи є `<case>` частиною будь-якого `<switch>`, і якщо так, то всі `apply` та `apply_if` цього switch також будуть оцінені.

Правила оцінки:
- У кожному 'case', `apply_if`, `switch`, `apply` вхідні атрибути перевіряються на відповідність (оцінюються як true), інакше розділ пропускається, і вихідні атрибути не збираються.
- Усі правила оцінюються послідовно, і вихідні параметри можуть бути перевизначені наступними правилами.
- `additional=?` - це спеціальний вхідний атрибут, який перевіряє додаткові теги об'єкта.
- Параметри стилю карти є також вхідними параметрами пошуку, поряд з `tag/value/zoom`.
    - Приклад: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Вхідні параметри: nightMode, streetLightingNight; вихідні параметри - shield.

## Атрибути (спеціальні) та константи {#attributes-special--constants}
Константи відображення та атрибути відображення є взаємозамінними і можуть використовуватися для спрощення стилю відображення та уникнення копіювання/вставлення значень або блоків коду. У випадку, якщо атрибут, такий як `color`, є одним значенням, **переважно** використовувати **константу відображення**, оскільки це значно прискорює продуктивність стилю відображення.

Константи відображення можуть використовуватися лише з одним заданим значенням: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` і пізніше в селекторах об'єктів як `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

Атрибути відображення можуть мати вбудовану структуру з додатковими селекторами та виводити один з наступних атрибутів (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Приклад:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```

### Спеціальні атрибути {#special-attributes}

Спеціальні атрибути - це `<renderingAttribute >`, які не використовуються селекторами, а використовуються безпосередньо кодом для запиту конкретного об'єкта, який відображається в додатку, наприклад, навігаційний маршрут, лінійка, трек gpx тощо.

| Спеціальний атрибут | Опис |
|-------------------|-------------|
| `measureDistanceLine` | Відображення лінії для функції Планування маршруту |
| `markerGuideline`, `markerPlanRouteline` | Відображення ліній до маркерів |
| `route` | Відображення навігаційного маршруту |
| `gpx` | Відображення треку GPX |
| `publicTransportLine` | Відображення навігаційного маршруту громадського транспорту |
| `walkingRouteLine` | Відображення навігації громадського транспорту: пішохідний маршрут між зупинками |
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Як відображати віджет Радіус-лінійка та вимірювати відстань дотиком |
|||
| `defaultColor` | Колір за замовчуванням для заповнення карти (перемикає нічний/денний режим) |
| `shadowRendering` | Внутрішній спосіб відображення тіні за допомогою Skia |
|||
| `routeInfo_*` | Приклад: `routeInfo_surface`, `routeInfo_roadClass` створюють класи доріг, які відображатимуться в легенді маршруту. |
|||
| `polygonMinSizeToDisplay` | Внутрішні елементи, як відображати маленькі лінії та маленькі полігони |
| `roadDensityZoomTile` | Внутрішні елементи, як відображати маленькі лінії та маленькі полігони |
| `roadsDensityLimitPerTile` | Внутрішні елементи, як відображати маленькі лінії та маленькі полігони |
| `defaultSymbolPathSpacing` | Внутрішні елементи, як відображати маленькі лінії та маленькі полігони |
| `defaultBlockPathSpacing` | Внутрішні елементи, як відображати маленькі лінії та маленькі полігони |
| `globalPathPadding` | Внутрішні елементи, як відображати маленькі лінії та маленькі полігони |
|||
| `debugTextDisplayBBox` | Атрибути для налагодження відображення та позиціонування тексту |
| `debugTextDisplayShieldBBox` | Атрибути для налагодження відображення та позиціонування тексту |
| `debugTextDoNotFindIntersections` | Атрибути для налагодження відображення та позиціонування тексту |
| `debugTextDoNotFindIntersectionsSameName` | Атрибути для налагодження відображення та позиціонування тексту |
| `debugTextDisplayShortRoadNames` | Атрибути для налагодження відображення та позиціонування тексту |

## Параметри стилю карти {#map-style-parameters}

Параметри стилю карти дозволяють об'єднати кілька стилів відображення в одному файлі визначення, тобто немає необхідності мати окремий файл "my_custom_style_night_mode.render.xml", можна визначити параметр, такий як `night_mode` (увімкнено за замовчуванням) та налаштувати певні правила (наприклад, кольори) за допомогою цього параметра. Пізніше в інтерфейсі користувача можна легко перемикати цей параметр і мати інший стиль карти в OsmAnd.

Ось визначення параметра `baseAppMode`. `possibleValues` - це значення, які відображатимуться в інтерфейсі користувача OsmAnd, `category` допомагає визначити, до якої категорії інтерфейсу користувача належить ця властивість.
```
<renderingProperty attr="baseAppMode" name="Default Rendering mode" description="Map optimization for respective User Profile based on base (parent) profile"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Пізніше в стилі вибору можна вказати, коли цей селектор може бути застосований, тобто для якого режиму програми, вказаного користувачем.
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Number of roads to display per tile -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Отже, якщо користувач вибирає `moreDetailed=true`, то вихідне значення щільності буде `55`, а якщо `baseAppMode=pedestrian` (інший параметр), то буде `40`, інакше 60.