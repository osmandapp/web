---
source-hash: f4b2b293ad51358460be21f120eea4ead0ba855b2536fc69c26f9eb724fe95d1
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Wprowadzenie {#introduction}

GPX (GPS Exchange Format) to szeroko stosowany standard oparty na XML do przechowywania danych GPS, w tym śladów, tras i punktów trasy. OsmAnd obsługuje format GPX do importowania, eksportowania i dostosowywania danych GPS do nawigacji, umożliwiając zarówno początkującym, jak i zaawansowanym użytkownikom optymalizację ich doświadczeń.

#### Co wyróżnia OsmAnd GPX? {#what-makes-osmand-gpx-unique}

OsmAnd rozszerza standardowy format GPX 1.1, wprowadzając własną niestandardową przestrzeń nazw XML `osmand:`. Ta przestrzeń nazw umożliwia przechowywanie dodatkowych danych, takich jak:

- Ustawienia wizualne śladu (kolor, szerokość, strzałki).
- Grupowanie i ikony punktów trasy.
- Szczegółowe atrybuty trasy, w tym trasy obliczone i typy aktywności.

#### Czego dowiesz się z tego przewodnika? {#what-will-you-learn-in-this-guide}

Ten artykuł zawiera kompleksowy przegląd struktury i funkcji plików GPX w OsmAnd. Dowiesz się:

1. Jak dostosować ślady i punkty trasy za pomocą tagów GPX.
2. Zaawansowane funkcje, takie jak opisy HTML, dane z czujników i typy aktywności.
3. Jak eksportować obliczone trasy i zachować ich pełną funkcjonalność.
4. Konwertowanie plików GPX na format OBF w celu zoptymalizowanego przechowywania i zaawansowanych możliwości wyszukiwania.

#### Przegląd struktury GPX {#gpx-structure-overview}

Pliki GPX w OsmAnd organizują dane hierarchicznie w następujące elementy:

- `<gpx>` - element główny pliku.
- `<trk>` - reprezentuje ślady, które zawierają:
  - `<trkseg>` - segmenty śladu, które są dalej podzielone na `<trkpt>` (punkty śladu).
- `<rte>` - reprezentuje trasy, w tym punkty trasy i punkty kluczowe.
- `<wpt>` - reprezentuje pojedyncze punkty trasy.


## Dostosowywanie śladu {#track-customization}

### Parametry wyglądu śladu {#track-appearance-parameters}

Ta sekcja opisuje, jak OsmAnd wyświetla ślady na mapie i dostępne opcje dostosowywania ich wyglądu. Opisane poniżej parametry są stosowane w tagu `<gpx>` i wpływają na wszystkie ślady zawarte w pliku GPX.

| Nazwa tagu | Opis / Wartości |
|:----------------------------------------|:---------|
| `<color>` | - Definiuje kolor linii śladu na mapie. <br/> - *String:* Kod koloru HEX `#RRGGBB` lub `#AARRGGBB` |
| `<width>` | - Określa szerokość linii śladu. <br/> - *String:* `„thin”`, `„medium"`, `„bold”` (zdefiniowane przez atrybut `„currentTrackWidth”`), lub liczba całkowita (1-24) |
| `<show_arrows>` | - Włącza lub wyłącza strzałki kierunkowe wzdłuż śladu. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>` | - Pokazuje lub ukrywa znaczniki początku i końca śladu. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>` | - Określa typ segmentacji śladu. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>` | - Ustawia interwał segmentacji śladu na podstawie wybranego typu. <br/> - *Double:* Liczba całkowita (metry dla `"distance"`, sekundy dla `"time"`) |
| `<line_3d_visualization_by_type>` | - Określa typ wizualizacji 3D dla śladu. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Definiuje typ koloru ściany dla wizualizacji 3D. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>` | - Ustawia pozycję wizualizacji 3D względem śladu. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - Mnożnik do skalowania wartości atrybutu `line_3d_visualization_by_type`. <br/> - *Float:* Domyślnie: 1.0 |
| `<elevation_meters>` | - Określa stałą wysokość w metrach dla `"fixed_height"` w `<line_3d_visualization_by_type>`. <br/> - *Float:* Domyślnie: `1000` |
| `<coloring_type>` | - Określa metodę kolorowania śladu. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>` | - Określa schemat kolorów dla śladu. <br/> - *String:* `"default"` / [schematy zdefiniowane przez użytkownika](/docs/user/personal/color-palette-schemes) |

***Przykład:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Tag „coloring_type” {#tag-coloringtype}

Tag `<coloring_type>` w OsmAnd umożliwia użytkownikom dostosowanie kolorowania śladu na podstawie określonych atrybutów danych, zapewniając wizualny sposób interpretacji kluczowych informacji wzdłuż śladu.

| Typ | Opis | Przypadek użycia |
|:-----------------------|:--------|:--------|
| `<solid>` | Cały ślad jest wyświetlany w jednym, jednolitym kolorze określonym przez tag `color`. | Użyj, gdy potrzebny jest jednolity kolor dla wyraźnej widoczności. |
| `<speed>` | Ślad jest kolorowany gradientem na podstawie wartości prędkości w każdym punkcie śladu (`<trkpt>`). Wyższe prędkości są reprezentowane przez odrębne kolory. | Idealny do aktywności takich jak jazda na rowerze lub samochodem, aby wizualizować zmiany prędkości. |
| `<altitude>` | Ślad jest kolorowany zgodnie z danymi wysokościowymi w każdym `<trkpt>`. Stosowany jest gradient, wskazujący różne zakresy wysokości. | Przydatne dla tras pieszych lub górskich do podkreślenia zmian wysokości. |
| `<slope>` | Ślad jest kolorowany na podstawie nachylenia/spadku między kolejnymi punktami śladu. Dodatnie gradienty wskazują stoki pod górę, a ujemne stoki w dół. | Odpowiednie dla rowerzystów lub turystów analizujących trudność śladu. |
| `<routeInfo_roadClass>` | Koloruje segmenty śladu na podstawie klasyfikacji dróg OpenStreetMap (OSM) (np. autostrada, ulica mieszkalna). | Pomaga rozróżnić różne typy dróg podczas podążania trasą. |
| `<routeInfo_surface>` | Koloruje segmenty śladu na podstawie typu nawierzchni OSM (np. utwardzona, żwirowa, gruntowa). | Przydatne do określania warunków śladu podczas aktywności takich jak jazda terenowa. |
| `<routeInfo_smoothness>` | Koloruje ślad zgodnie z ocenami gładkości OSM, wskazując szorstkość lub gładkość ścieżki (np. doskonała, zła). | Pomocne w ocenie przejezdności śladu dla określonych pojazdów. |

### Tagi GPX w interfejsie użytkownika {#gpx-tags-in-ui}

Tagi rozszerzeń GPX wyświetlane na dole menu kontekstowego śladu.
Wyświetlane są zarówno `<metadata>`, jak i `<gpx>` `<extensions>`.
Tagi wyglądu są wykluczone z listy.
Obsługiwane od OsmAnd Android 5.0.

## Dostosowywanie punktów trasy {#waypoints-customization}

Ta sekcja wyjaśnia, jak OsmAnd umożliwia dostosowywanie punktów trasy w plikach GPX za pomocą ikon, kolorów i grupowania.

### Ikony punktów trasy {#waypoint-icons}

Następujące tagi kontrolują wygląd ikon punktów trasy w OsmAnd:

| Tag GPX | Domyślnie | Cel |
|:-------------|:----------|:-----------|
| `<icon>` | *(brak)* | Określa ikonę dla punktu trasy (np. `historic_castle`). |
| `<color>` | `"red"` | Ustawia kolor ikony za pomocą kodu HEX (np. `#FF0000`) lub nazwy koloru (np. `"blue"`). |
| `<background>` | `"circle"` | Definiuje kształt tła ikony. Możliwe wartości: `"circle"`, `"square"`, `"octagon"`. |

***Przykład:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brama Brandenburska</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Grupy punktów trasy {#waypoint-groups}

Punkty trasy w OsmAnd mogą być sortowane w grupy na podstawie ich typu. To grupowanie pozwala użytkownikowi organizować wiele punktów trasy w określone kategorie, poprawiając przejrzystość i czytelność mapy.

- **Definicja grupy punktów.** Tag `<type>` w elemencie `<wpt>` określa grupę punktu (np. `"castle"`, `"aqueduct"`).
- **Konfiguracja grupy.** Rozszerzenie `<osmand:points_groups>` w elemencie `<gpx>` definiuje ustawienia dla każdej grupy, w tym `name`, `color`, `icon` i `background` dla wszystkich punktów trasy w tej grupie.

***Przykład:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Spójrz w górę, aby zobaczyć wodę</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Uważaj na duchy</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>Dom Beetlejuice'a</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Zaawansowane funkcje GPX {#advanced-gpx-features}

### Typ aktywności {#activity-type}

Począwszy od OsmAnd [wersji 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities), możesz klasyfikować swoje ślady według typu aktywności w celu dalszej analizy i organizacji w folderach.

Lista obsługiwanych typów aktywności jest dostępna w pliku [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Każda aktywność jest identyfikowana przez unikalny `ID` i przechowywana w rozszerzeniach `<metadata>` pliku GPX.


***Przykład:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML w opisach {#html-in-descriptions}

Tagi HTML mogą być używane w tagach `<desc>` w elementach `<metadata>` lub `<wpt>` w celu zapewnienia sformatowanych opisów śladów lub punktów trasy.

Aby uniknąć konfliktów ze składnią XML, zastąp znaki specjalne w następujący sposób:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Przykład:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        Pierwszy akapit zostanie wyświetlony jako &lt;b&gt;krótki&lt;/b&gt; opis.
        Tagi HTML są usuwane w krótkich opisach.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Drugi akapit&lt;/h3&gt;
        &lt;b&gt;Witaj, świecie!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Ważne uwagi:***

- OsmAnd usuwa wszystkie tagi HTML podczas generowania krótkich opisów, pozostawiając zwykły tekst.
- Możesz używać tagów takich jak `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` i innych do dostosowywania.


### Tag linku {#link-tag}

Użyj tagu `<link>`, aby powiązać adresy URL z metadanymi, informacjami o autorze lub punktami trasy w plikach OsmAnd GPX. Ten tag może również wyświetlać obraz, gdy adres URL wskazuje na plik obrazu.

***Przykłady (link metadanych z obrazem):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>Logo OsmAnd</text>
  </link>
</metadata>
```

***Przykłady (link punktu trasy z obrazem):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Tagi danych z czujników {#sensor-data-tags}

Możesz wzbogacić swoje ślady o dane z czujników fitness, takich jak pulsometry czy czujniki temperatury. OsmAnd wykorzystuje schemat [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) firmy Garmin do przechowywania tych danych, co czyni je kompatybilnymi z platformami takimi jak **Strava** i **Garmin Basecamp**.

*Obsługiwane tagi danych z czujników:*

- **hr** - tętno (w uderzeniach na minutę).
- **cad** - kadencja rowerowa (w obrotach na minutę).
- **atemp** - temperatura otoczenia (w stopniach Celsjusza).
- **power** - moc wyjściowa roweru (w watach).

***Przykład:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Szczegóły punktu śladu {#track-point-details}

Każdy `<trkpt>` (punkt śladu) w pliku GPX może zawierać dodatkowe atrybuty do przechwytywania danych, takich jak prędkość, kierunek i wysokość.

*Obsługiwane atrybuty:*

- **speed** - prędkość w punkcie śladu (w metrach na sekundę).
- **heading** - kierunek ruchu (0-359 stopni).
- **ele** - wysokość nad poziomem morza (w metrach).
- **time** - znacznik czasu dla punktu śladu.

***Przykład:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## Obliczone trasy {#calculated-routes}

W **OsmAnd** możesz obliczyć trasę i zapisać wszystkie dane w GPX, dzięki czemu później wszystkie funkcje nawigacji będą dostępne jako nawigacja GPX, więc GPX **OsmAnd** będzie zawierać segmenty trasy, zakręty, nazwy dróg, typy dróg, ograniczenia itp. Trasa może być całkowicie przywrócona tak, jakby została właśnie zbudowana, nawet w przypadku braku odpowiednich map offline.

Plik gpx może zawierać kilka tras. Każda z nich znajduje się w określonym segmencie pod **trkseg** / **extensions**. Plik gpx jest zapisywany w tej formie podczas eksportowania skonstruowanej trasy lub podczas zapisywania śladu, który składa się z kilku oddzielnych segmentów, za pomocą funkcji [**Planuj trasę**](../../user/plan-route/create-route.md).

[**Planuj trasę**](../../user/plan-route/create-route.md) dodaje również jeden (lub kilka, zgodnie z liczbą zawartych oddzielnych segmentów / śladów) bloków **rte** do pliku gpx, zawierających kluczowe punkty trasy (**rtept**).

#### Struktura Gpx: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Lista punktów segmentu. Kolejność punktów odpowiada kolejności i długości segmentów trasy (<route><segment length="x" ... />).
    // Wartość atrybutu "length" odpowiada liczbie punktów w tym segmencie trasy.
    <trkpt ... ></trkpt>
    <extensions>
      // Lista segmentów trasy
      <route>
        <segment ... />
      </route>
      // Właściwości segmentów zawartych w trasie.
      // Dane te są pobierane z map offline podczas początkowej konstrukcji trasy.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Lista pośrednich punktów trasy. Jeśli istnieje wiele tras, kolejność listy rte odpowiada kolejności segmentów trasy.
<rte>
  <rtept ... />
    // Dla tras zbudowanych za pomocą "Planuj trasę" zapisywane są parametry kluczowych punktów.
    // Jeśli rtept nie jest pierwszym i ostatnim, przed nim (z tym samym idx) trkpt będzie z tymi samymi danymi.
    <extensions>
      // Typ profilu trasy dla następnego segmentu (samochód, rower, pieszy itp.).
      <profile>...</profile>
      // Indeks punktu w segmencie gpx, który odpowiada pierwszemu punktowi obliczonej trasy dla tego segmentu.
      // Jeśli rtept nie jest pierwszym i ostatnim, przed nim (z tym samym idx) trkpt będzie z tymi samymi danymi.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Ważne właściwości: {#important-properties}

* **trkpt_idx** pierwszego **rtept** w **trkseg** wynosi 0. Tak więc, jeśli są dwa **trkseg**i, będą dwa **rtept**y z **trkpt_idx** = 0
* **trkpt_idx** ostatniego **rtept** w **trkseg** jest równy liczbie **trkpt**ów w **trkseg** minus 1. Na przykład, jeśli **trkseg** ma 12 **trkpt**ów, **trkpt_idx** ostatniego **rtept** powinien wynosić 11
* Sąsiadujące **segmenty** trasy nakładają się: koniec poprzedniego **segmentu** i początek następnego **segmentu** to ten sam **trkpt**.
* Istnieje wyjątek, gdy sąsiadujące **segmenty** trasy nie nakładają się (nie dzielą tego samego **trkpt**). Dzieje się tak, gdy istnieje **rtept** "między" **segmentami** trasy. Koniec poprzedniego **segmentu** trasy to jeden **trkpt**, a początek następnego **segmentu** trasy to inny **rtept**. Ale te dwa **trkpt**y są całkowicie równe pod względem szerokości, długości i innych parametrów.
* Nakładanie się **segmentów** trasy można wykryć za pomocą **length** i **startTrkptIdx** (ten ostatni jest używany tylko dla wygody czytania przez człowieka):
  - Jeśli suma **startTrkptIdx** i **length** poprzedniego **segmentu** trasy jest równa **startTrkptIdx** następnego **segmentu** trasy, **segmenty** trasy nie nakładają się
  - Jeśli suma jest mniejsza o jeden, to **segmenty** trasy nakładają się
* Mogą istnieć proste **segmenty** trasy. Są one oznaczone **id="-1"**. Mogą pojawić się w dwóch przypadkach:
  - Jest to trasa wieloprofilowa, a użytkownik wybrał linię prostą
  - Użytkownik umieścił **rtept** zbyt daleko od najbliższej drogi, więc osmand utworzył linię prostą między **rtept** a drogą
* trkpts = length - (segments - 1) + (rtepts - 2), gdzie:
  - trkpts - liczba **trkpt**ów w **trkseg**
  - length - suma wszystkich **length**ów **segmentów** trasy w **trkseg**
  - segments - liczba **segmentów** trasy w **trkseg**
  - rtepts - liczba **rtept**ów należących do **trkseg**

#### Przykład: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Pt 06 Lis 2020</name>
  </metadata>
  <trk>
    <name>Pt 06 Lis 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## Kolekcje GPX w OBF {#gpx-collections-in-obf}

OsmAnd umożliwia konwersję wielu plików GPX na pojedynczy plik OBF. Umożliwia to przechowywanie tysięcy śladów GPX w kompaktowym, zoptymalizowanym formacie, zachowując jednocześnie funkcje, takie jak specjalne ikony mapy, dostosowywanie wyglądu śladu i funkcje wyszukiwania. Pozwala to uniknąć ograniczenia lokalnych dużych plików GPX, które zazwyczaj nie mogą obsłużyć > 500 tys. punktów łącznie, jednak niektóre funkcje śladów GPX mogą być niedostępne w porównaniu z wyświetlaniem pliku OBF.

Kroki konwersji GPX na OBF:

- Zaloguj się do [Mapy internetowej OsmAnd](https://osmand.net/map) *→ Ślady → Wybierz folder → *Menu* (⋮) *→ Pobierz jako kolekcję OBF*

- Wynikowy plik `<.obf>` można zaimportować do OsmAnd (wymaga OsmAnd Android 5.0+).


### Styl linii śladu {#track-line-style}

Dostosuj linie śladu za pomocą następujących tagów:

| Tag GPX | Domyślnie | Cel |
|:--------------------------|:--------|:---------|
| `<name>` | *(brak)* | Nazwa wyświetlana nad linią śladu. |
| `color` | `red` | Kolor podstawowy (HEX lub tekst). |
| `colour`, `displaycolor` | *(brak)* | Alternatywne sposoby nadpisywania `color`. |
| `shield_waycolor` | *(brak)* | Nadpisanie koloru linii śladu tarczy. |
| `translucent_line_colors` | `no` | Ustaw na `yes` dla półprzezroczystych kolorów. |
| `width` | `thin` | Szerokość linii: `"thin"`, `"medium"`, `"bold"`, `"1-24"` lub `"roadstyle"` |

**Obsługiwane kolory:** czarny, niebieski, brązowy, ciemnożółty, szary, zielony, jasnoniebieski, jasnozielony, pomarańczowy, fioletowy, czerwony, biały, żółty.

***Przykład:***

```xml
<gpx>
  <metadata>
    <name>
      Nazwa śladu znajduje się w Metadanych
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Tarcze linii śladu {#track-line-shields}

Tarcze to ikony lub symbole wyświetlane wzdłuż linii śladu. OsmAnd obsługuje tarcze w stylu [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), które mogą obejmować:

- Ikonę tła - główny kształt (np. koło lub kwadrat).
- Ikony pierwszego planu - do dwóch mniejszych symboli nałożonych na tło.
- Tekst - krótkie opisy lub identyfikatory, pochodzące z tagów `shield_text` lub `ref`.

Jeśli nie zdefiniowano żadnych właściwości tarczy, OsmAnd używa automatycznie skalowanej żółtej tarczy dla śladu.

***Tagi dla tarcz:***

| Tag GPX | Cel |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | Definiuje ikonę tła dla tarczy. |
| `shield_fg` | Określa pierwszą ikonę pierwszego planu (np. strzałkę lub kropkę). |
| `shield_fg_2` | Określa drugą ikonę pierwszego planu (opcjonalnie). |
| `shield_text` | Ustawia krótki tekst do wyświetlenia nad tarczą (np. odniesienie do trasy). |
| `shield_textcolor` | Określa kolor tekstu tarczy (opcjonalnie). |
| `shield_waycolor` | Nadpisuje standardowy kolor śladu dla linii tarczy (opcjonalnie). |
| `ref` | Używany jako tekst zastępczy, jeśli `shield_text` nie jest podany. |

***Przykład:***

```xml
<gpx>
  <trk>
    <name>Przykładowa trasa</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Wyświetlanie punktów trasy {#waypoints-display}

Ikony punktów trasy można dostosować za pomocą następujących tagów:

| Tag GPX | Domyślnie | Cel |
|:-------------|:---------|:---------------------------------------------------|
| `icon` | *(brak)* | Określa ikonę dla punktu trasy (używa standardowych ikon edytora punktów trasy OsmAnd). |
| `color` | `red` | Ustawia kolor ikony za pomocą kodu HEX (np. `#ffaa00`) lub obsługiwanej nazwy koloru (ograniczone opcje). |
| `background` | `circle` | Definiuje kształt ikony. Obsługiwane wartości: `circle`, `square`, `octagon`. |

***Zachowanie kształtów `background`:***

- `circle` - wyświetla ikonę z okrągłym tłem.
- `square` - wyświetla ikonę z kwadratowym tłem, domyślnie czerwonym, jeśli nie określono koloru.
- `octagon` - traktowany jako okrągłe tło w OsmAnd.

**Obsługiwane kolory dla** `background=circle`: niebieski, szary, zielony, jasnoniebieski, jasnozielony, pomarańczowy, fioletowy, żółty.

***Ulepszenia z dodatkowymi elementami:***

- Możesz dodawać sformatowane opisy do punktów trasy za pomocą [kodu HTML](#html-in-descriptions). Pozwala to na włączenie sformatowanego tekstu, linków, a nawet obrazów.
- Punkty trasy mogą wyświetlać połączone obrazy za pomocą [Link-as-Image](#link-tag).

***Przykład:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### Wyszukiwanie według nazwy i odniesień {#search-by-name-and-refs}

Ślady i punkty trasy można lokalizować za pomocą różnych tagów GPX.

| Tag GPX | Lokalizacja | Cel |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | Główna nazwa śladu GPX. |
| `ref` | GPX `<extensions>` | Krótki identyfikator, często pochodzący z tagu OSM `ref`. |
| `shield_text` | GPX `<extensions>` | Tekst wyświetlany na tarczach (może być również używany z `ref`). |
| `name_-_lang` | GPX/WPT `<extensions>` | Zlokalizowana `name:lang` (np. `name_-_en` dla angielskiego, zastąp `:` -> `_-_`) |
| `<name>` | `<wpt>` | Nazwa punktu trasy. |

***Przykład:***

```xml
<gpx>
  <metadata>
    <name>Szlak Dziedzictwa Xemxija</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>Rzymska Pasieka</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Wyszukiwanie według typu aktywności {#search-by-activity-type}

OsmAnd organizuje ślady w plikach OBF w **Grupy Aktywności** i **Typy Aktywności**. Te klasyfikacje pomagają filtrować ślady jako POI lub tworzyć filtry wyszukiwania oparte na aktywności.

Jak działają typy aktywności:

- Typy i grupy aktywności są określane za pomocą `"id"` i `"tags"` z pliku [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd używa tagów `osmand:activity` lub `osmand:route` do klasyfikowania aktywności w plikach GPX.


| Tag GPX | Lokalizacja | Cel |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Główny tag OsmAnd do przechowywania typu aktywności (ID). |
| `osmand:route` | GPX `<extensions>` | Alternatywny sposób OSM do definiowania typu aktywności. |


***Przykłady organizowania śladów według typu aktywności:***

1. Spowoduje to sklasyfikowanie śladu w grupie **Motocyklizm** z typem **Motocyklizm terenowy (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Spowoduje to zorganizowanie śladu w grupie **Kolarstwo** z typem **Kolarstwo górskie**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Tagi informacji o wyszukiwaniu {#search-information-tags}

Pliki OBF automatycznie generują i przechowują krytyczne statystyki i analizy śladów.

| Tag OBF | Cel |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | Całkowita odległość pokonana przez wszystkie segmenty śladu. |
| `start_ele`, `ele_graph` | Dane wysokościowe z GPX, zawarte w kompaktowej tablicy binarnej. |
| `min_ele`, `avg_ele`, `max_ele` | Minimalna, średnia i maksymalna wysokość. |
| `diff_ele_up`, `diff_ele_down` | Całkowity wzrost i spadek wysokości na śladzie. |
| `max_speed`, `avg_speed`, `min_speed` | Analiza prędkości śladu, w tym prędkość maksymalna, średnia i minimalna. |
| `time_span`, `time_span_no_gaps` | Całkowity czas śladu, z uwzględnieniem i bez uwzględnienia przerw. |
| `time_moving`, `time_moving_no_gaps` | Całkowity czas ruchu, z uwzględnieniem i bez uwzględnienia przerw. |

### Tagi wewnętrzne {#internal-tags}

Niektóre tagi GPX są używane lub przechowywane pośrednio w plikach OBF. Szczegóły implementacji można znaleźć w [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java).

| Tag OBF | Cel |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | Unikalny identyfikator pliku GPX, łączący dane mapy i POI (format: `/[A-Z]+[0-9]+/` np. `OSM12345`). |
| `route_type` | Identyfikator grupy aktywności (`id`) pochodzący z `poi/activities.json` |
| `route_activity_type` | Identyfikator typu aktywności (w grupie) (`id`) pochodzący z `poi/activities.json` |
| `name`, `ref`, `description` | Atrybuty lokalizowalne i przeszukiwalne (`lang="true"` w typach POI) |
| `filename` | Nazwa oryginalnego pliku GPX użytego do wygenerowania tego śladu. |
| `track_color` | Kolor śladu sekcji mapy pochodzący z `shield_waycolor`, `color`, `colour` lub `displaycolor` |
| `extensions_extra_tags` | Dowolne dodatkowe tagi dla `<gpx><extensions>` w formacie JSON. |
| `metadata_extra_tags` | Dowolne dodatkowe tagi dla `<metadata><extensions>` w formacie JSON. |
| `wpt_extra_tags` | Dowolne dodatkowe tagi dla punktów trasy `<wpt><extensions>` w formacie JSON. |
| `route_track_point` | Punkty trasy z pliku GPX używają tego typu w danych POI. |
| `route_bbox_radius` | Określa domyślny promień wyszukiwania części śladu w sekcji POI |
| `route_shortlink_tiles` | Określa listę kafelków OSM Shortlink oddzielonych przecinkami, aby przyspieszyć odczyt danych geometrii (opcjonalnie) |
| `route_segment_index` | Określa numer porządkowy segmentu geometrii, który jest połączony z tym punktem (opcjonalnie) |
| `route_name` | Nazwa trasy, używana przez wewnętrzną `searchPoiByName` (przestarzałe) |

> *Ostatnia aktualizacja: marzec 2025*