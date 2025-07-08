---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Styl renderowania mapy - .render.xml {#map-rendering-style---renderxml}


Jeśli chcesz zmodyfikować domyślny styl renderowania, musisz sprawdzić [definicję na GitHubie](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). Wszystkie rodzaje stylów znajdziesz pod tym [linkiem](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), więc jeśli zamierzasz stworzyć własny styl, możesz znaleźć najprostszy przykład.

Jeśli zdecydujesz się stworzyć własny styl renderowania, być może będziesz musiał stworzyć [własne mapy](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags), aby dodać niestandardowe wyświetlanie funkcji.

## Sekcje stylu mapy {#map-style-sections}

Plik stylu mapy składa się z kilku sekcji.

| Sekcja | Opis |
|---------|-------------|
| **Nagłówek** | Składa się z `name` (nazwa stylu), `defaultColor` (domyślny kolor mapy, który może być nadpisany przez atrybut defaultColor) i `depends` (dziedziczy wszystkie właściwości ze stylu nadrzędnego). |
| **Parametry** | Zdefiniowane jako `<renderingProperty>` ma `attr`, który będzie używany w stylu jako nazwa parametru, a `name`, `description` będą wyświetlane użytkownikowi. |
| **Atrybuty** i **stałe** | Zdefiniowane jako `<renderingAttribute>` i jako `<renderingConstant>` pozwalają na ponowne użycie tych samych bloków stylów renderowania dla różnych obiektów mapy | 
| Sekcja **Kolejność** | Zdefiniowana jako blok [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Każdy obiekt mapy jest wyszukiwany w sekcji kolejności, aby określić, czy zostanie wyrenderowany jako punkt, linia czy poligon (`objectType`) i w jakiej `order` powinien być wyświetlony.  **Parametry wyszukiwania** (wejście): `tag`, `value`, `zoom`, `point` (prawda lub fałsz), `area` (typ osm), `cycle` (punkt początkowy i końcowy są takie same).  **Wynik wyszukiwania** (wyjście): `objectType` (punkt = 1, linia = 2, poligon = 3), `order` (0-255). Kolejność renderowania jest zdefiniowana jako: poligony, cienie linii, linie, punkty. Jeśli `order` jest taki sam dla poligonów, to poligony są wyświetlane od największego do najmniejszego. Uwaga: poligony nie powinny częściowo nakładać się na siebie, w przeciwnym razie zachowanie jest niezdefiniowane. |
| Sekcja **Tekst** | Zdefiniowana jako blok [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Każdy wyświetlany obiekt mapy jest przeszukiwany pod kątem tego, czy powinien wyświetlać tekst i jak powinien być wyświetlany.  **Parametry wyszukiwania** (wejście): `tag`, `value`, `zoom`, `nameTag` (każdy tag tekstowy jest sprawdzany).  **Wynik wyszukiwania** (wyjście): `textOnPath`, `textMinDistance` (margines między tymi samymi tekstami, np. nazwy dróg, odniesienia), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (dodatkowa nazwa w nawiasach, jeśli występuje), `textShield` (tło wokół tekstu), `icon` (ikona zamiast tekstu), `textItalic`, `textWrapWidth`, `intersectionMargin` (dodatkowy margines, aby tekst się nie nakładał). |
| Sekcja **Punkt** | Zdefiniowana jako blok [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Każdy wyświetlany obiekt mapy punktowej (zdefiniowany w sekcji `order`) jest przeszukiwany w tej sekcji, aby określić, jak powinien być wyświetlany.  **Parametry wyszukiwania** (wejście): `tag`, `value`, `zoom`, `e`.  **Wynik wyszukiwania** (wyjście): `shield` (tarcza ikony), `icon`, `iconVisibleSize` (dodatkowa przestrzeń, aby nie zaśmiecać ikon), `iconOrder`, `intersectionSizeFactor`. |
| Sekcja **Poligon** | Zdefiniowana jako blok [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Każdy wyświetlany obiekt mapy poligonowej (zdefiniowany w sekcji `order`) jest przeszukiwany w tej sekcji, aby określić, jak powinien być wyświetlany.  **Parametry wyszukiwania** (wejście): `tag`, `value`, `zoom`.  **Wynik wyszukiwania** (wyjście): `color` (kolor wypełnienia poligonu), `shader` (wypełnienie poligonu tą samą ikoną), `color_2, color_N` (kolor obrysu wokół poligonu), `strokeWidth_2` (szerokość obrysu), `pathEffect_2`, `cap_2`. |
| Sekcja **Linia** | Zdefiniowana jako blok [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Każdy wyświetlany obiekt mapy liniowej (zdefiniowany w sekcji `order`) jest przeszukiwany w tej sekcji, aby określić, jak powinien być wyświetlany. 1 obiekt liniowy może być renderowany jako wiele połączonych linii, do -2 warstw poniżej i do 7 warstw powyżej.  **Parametry wyszukiwania** (wejście): `tag`, `value`, `zoom`, `nameTag` (każdy tag tekstowy jest sprawdzany).  **Wynik wyszukiwania** (wyjście): `color, color_*` (kolor obrysu wokół poligonu), `strokeWidth, strokeWidth_*` (szerokość obrysu), `pathEffect, pathEffect_*` (efekt ścieżki), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (cień wokół linii). |


## Selektory funkcji mapy {#map-feature-selectors}
Aby określić, które atrybuty powinny zostać pobrane ze stylu renderowania, wykonywana jest następująca procedura wyszukiwania:
- Znajdź najbardziej wewnętrzny `<case>`, który odpowiada parametrom wejściowym wyszukiwania `tag/value/zoom`, np. dla `highway=primary` zostanie znaleziony `<case tag="highway" value="primary">`.
- Wszystkie wewnętrzne elementy `<case>` są stosowane sekwencyjnie w głąb, a parametry wyjściowe są zbierane
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - wyjście będzie 2 w przypadku `zoom=15`, a w przeciwnym razie wyjście będzie 1.    
- Sprawdzono, czy `<case>` jest częścią jakiegoś `<switch>`, a jeśli tak, to wszystkie `apply` i `apply_if` tego przełącznika również zostaną ocenione

Zasady oceny:
- W każdym 'case', `apply_if`, `switch`, `apply` atrybuty wejściowe są sprawdzane pod kątem zgodności (oceniane na true), w przeciwnym razie sekcja jest pomijana, a atrybuty wyjściowe nie są zbierane.
- Wszystkie reguły oceniane sekwencyjnie, a parametry wyjściowe mogą być nadpisane przez następujące reguły
- `additional=?` to specjalny atrybut wejściowy, który sprawdza dodatkowe tagi obiektu
- Parametry stylu mapy są również parametrami wyszukiwania wejściowego obok `tag/value/zoom`
    - Przykład: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Parametry wejściowe: nightMode, streetLightingNight; parametry wyjściowe - shield.


## Atrybuty (specjalne) i stałe {#attributes-special--constants}
Stałe renderowania i atrybuty renderowania są wymienne i mogą być używane do uproszczenia stylu renderowania i uniknięcia kopiowania/wklejania wartości lub bloków kodu. W przypadku, gdy atrybut taki jak `color` jest pojedynczą wartością, **preferowane** jest użycie **stałej renderowania**, ponieważ znacznie przyspiesza to wydajność stylu renderowania. 

Stałe renderowania mogą być używane tylko z jedną podaną wartością: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` a później w selektorach funkcji jako `<apply_if shadowRadius="$motorwayShadowRadius"/>`. 

Atrybuty renderowania mogą mieć osadzoną strukturę z dodatkowymi selektorami i wyprowadzać jeden z następujących atrybutów (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Przykład:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Atrybuty specjalne {#special-attributes}

Atrybuty specjalne to `<renderingAttribute>`, które nie są używane przez selektory, ale bezpośrednio przez kod do zapytania o konkretną funkcję, która jest rysowana w aplikacji, taką jak trasa nawigacyjna, linijka, ślad gpx itp.


| Atrybut specjalny | Opis |
|-------------------|-------------|
| `measureDistanceLine` | Renderowanie linii dla funkcji Planuj trasę | 
| `markerGuideline`, `markerPlanRouteline` | Renderowanie linii do znaczników |
| `route` | Renderowanie trasy nawigacyjnej | 
| `gpx` | Renderowanie śladu GPX |
| `publicTransportLine` | Renderowanie trasy nawigacyjnej transportu publicznego | 
| `walkingRouteLine` | Renderowanie nawigacji transportu publicznego: trasa piesza między przystankami | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Jak renderować widżet Promień-Linijka i mierzyć odległość dotknięciem | 
|||
| `defaultColor` | Domyślny kolor wypełnienia mapy (przełącza tryb nocny / dzienny) |
| `shadowRendering` | Wewnętrzne renderowanie cienia za pomocą Skia |
||| 
| `routeInfo_*` | Przykład: `routeInfo_surface`, `routeInfo_roadClass` tworzą klasy dróg do wyświetlenia w legendzie trasy. | 
|||
| `polygonMinSizeToDisplay` | Wewnętrzne renderowanie małych linii i małych poligonów | 
| `roadDensityZoomTile` | Wewnętrzne renderowanie małych linii i małych poligonów |
| `roadsDensityLimitPerTile` | Wewnętrzne renderowanie małych linii i małych poligonów |
| `defaultSymbolPathSpacing` | Wewnętrzne renderowanie małych linii i małych poligonów |
| `defaultBlockPathSpacing` | Wewnętrzne renderowanie małych linii i małych poligonów |
| `globalPathPadding` | Wewnętrzne renderowanie małych linii i małych poligonów |
|||
| `debugTextDisplayBBox` | Atrybuty do debugowania renderowania i pozycjonowania tekstu | 
| `debugTextDisplayShieldBBox` | Atrybuty do debugowania renderowania i pozycjonowania tekstu |
| `debugTextDoNotFindIntersections` | Atrybuty do debugowania renderowania i pozycjonowania tekstu |
| `debugTextDoNotFindIntersectionsSameName` | Atrybuty do debugowania renderowania i pozycjonowania tekstu |
| `debugTextDisplayShortRoadNames` | Atrybuty do debugowania renderowania i pozycjonowania tekstu |

## Parametry stylu mapy {#map-style-parameters}

Parametry stylu mapy pozwalają łączyć wiele stylów renderowania w jednej definicji pliku, tzn. nie ma potrzeby posiadania oddzielnego pliku „my_custom_style_night_mode.render.xml”, możliwe jest zdefiniowanie parametru takiego jak `night_mode` (domyślnie włączony) i dostosowanie niektórych reguł (takich jak kolory) za pomocą tego parametru. Później w interfejsie użytkownika można łatwo przełączyć ten parametr i mieć inny styl mapy w OsmAnd.

Oto definicja parametru `baseAppMode`. `possibleValues` to wartości, które będą wyświetlane w interfejsie użytkownika OsmAnd, `category` pomaga określić, do której kategorii interfejsu użytkownika należy ta właściwość.
```
<renderingProperty attr="baseAppMode" name="Domyślny tryb renderowania" description="Optymalizacja mapy dla odpowiedniego profilu użytkownika na podstawie profilu bazowego (nadrzędnego)"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Później w stylu wyboru możesz określić, kiedy ten selektor może być zastosowany, tzn. dla którego trybu aplikacji określonego przez użytkownika
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Liczba dróg do wyświetlenia na kafelku -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Więc jeśli użytkownik wybierze `moreDetailed=true`, to wartość wyjściowa dla gęstości będzie `55`, a jeśli `baseAppMode=pedestrian` (inny parametr), to będzie `40`, w przeciwnym razie 60.