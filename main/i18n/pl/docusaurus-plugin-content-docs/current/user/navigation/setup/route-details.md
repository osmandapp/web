---
source-hash: 4d94702418502470aad2ca1fbd09659956c170a23f9c5c7ba0cf595f9829be63
sidebar_position: 4
title: Szczegóły trasy
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



## Przegląd {#overview}

OsmAnd pozwala znaleźć najlepszą trasę i zbadać jej szczegóły. Aplikacja dostarcza szczegółowych informacji o trasie, takich jak odległość, [czas podróży](#distance--time--co2), [typ nawierzchni](#road-attributes), [różnice wysokości](#elevation-info), [dane dotyczące śladu CO2](#distance--time--co2) i [informacje o zakrętach](#turn-by-turn-information). Możesz także [analizować](#analyze-on-map) trasę na mapie, znajdować informacje o segmentach ścieżki, [drukować](#print) plan trasy, [zapisywać](#share--export-actions) trasę i udostępniać ją innym. Dzięki tej funkcjonalności zawsze będziesz znać szczegóły trasy i będziesz mógł efektywniej planować swoją podróż.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szczegóły trasy Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szczegóły trasy iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Jak uzyskać dostęp {#how-to-access}

Po obliczeniu trasy w [menu Nawigacja](./route-navigation.md#start--stop-navigation) masz dostęp do „Szczegółów” tej trasy. Informacje te są przydatne przed rozpoczęciem podróży w celu poprawy planowania trasy lub sprawdzenia informacji o drodze przed sobą podczas jazdy.
Istnieją trzy sposoby dostępu do *menu Szczegóły trasy*.

1. Przejdź do głównego *Menu → Nawigacja*, ustaw trasę i dotknij przycisku *Szczegóły*.
2. Dotknij ikony *Nawigacja* na ekranie mapy, ustaw trasę i dotknij przycisku *Szczegóły*.
3. Przejdź do menu *Moje miejsca*, dotknij dowolnej dostępnej ścieżki na liście *Menu → Moje miejsca → Ścieżki*, wybierz ikonę *Nawigacja* w menu kontekstowym ścieżki w *Przeglądzie* i dotknij *Szczegóły*.

W zależności od wybranych [ustawień profilu](../../personal/profiles.md) i wybranego [typu routingu](../../navigation/routing/osmand-routing.md#routing-types), niektóre szczegóły trasy mogą nie być wyświetlane. Ponadto szczegóły trasy są w dużym stopniu zależne od *pokrycia danymi OpenStreetMap*.


## Odległość / Czas / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szczegóły trasy](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Całkowita odległość*** jest obliczana między wszystkimi segmentami trasy, w tym punktami pośrednimi w wybranych [jednostkach](../../personal/profiles.md#units--formats).

- ***Szacowany czas podróży*** jest obliczany jako suma czasów na każdym segmencie i kar czasowych w określonych punktach. Każdy profil nawigacji ma różne zasady obliczania prędkości na segmencie i jakie kary powinny być uwzględnione (skonfigurowane w [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Na przykład, profile samochodowe i rowerowe pobierają średnią prędkość na segmencie z danych OpenStreetMap, ale profile piesze, łodzi i samolotów używają *domyślnej* prędkości z [Ustawień nawigacji](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Szacowany czas przybycia*** jest obliczany jako czas od teraz w czasie lokalnym miejsca pochodzenia, używając *Szacowanego czasu podróży*.

- ***Dane dotyczące śladu CO2*** szacują w przybliżeniu, ile CO2 zostanie wyprodukowane podczas podążania trasą. Aby uzyskać dokładniejsze przybliżenie, należy skonfigurować [typ silnika paliwowego](../guidance/navigation-settings.md#fuel-used-by-motor) w parametrach pojazdu.


## Informacje o wysokości {#elevation-info}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szczegóły trasy](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Informacje o wysokości** są dostępne we wszystkich profilach tras offline OsmAnd, z wyjątkiem profili, które używają [nawigacji po linii prostej](../routing/straight-line-routing.md). Dane wysokościowe są częścią map offline OsmAnd i są obliczane na podstawie [publicznych źródeł SRTM](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Zakres wysokości*. Wyświetla minimalną / maksymalną wysokość na trasie.
- *Średnia wysokość*. Wyświetla ważoną średnią wysokość na trasie.
- *Pod górę / z górki*. Wyświetla stosunek ścieżki do poziomu, gdzie zero oznacza poziom, a liczba stopni wskazuje na większy lub bardziej stromy stopień nachylenia. Nachylenie pokazuje maksymalne nachylenie drogi w procentach od Twojej lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez widocznego punktu lokalizacji na ekranie.


***Licencja na dane DEM używane przez OsmAnd do wykrywania terenu***
Dane wysokościowe na mapie (między 70 stopniem szerokości geograficznej północnej a 70 stopniem szerokości geograficznej południowej) zostały uzyskane z pomiarów wykonanych w ramach *Shuttle Radar Topography Mission (SRTM)*. Wykorzystano w niej *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, główne narzędzie obrazowania w *NASA's Earth Observation System*. Pełne informacje można znaleźć w [Licencji](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dane DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Oryginalne dane użyte do tego produktu zostały dostarczone przez JAXA AW3D.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


### Wykres wysokości {#elevation-graph}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szczegóły trasy](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

[Wykresy](../../map/tracks/track-context-menu.md#altitude--speed-graphs) wizualnie wyświetlają informacje o wysokości i nachyleniu trasy nawigacyjnej oraz Twojej aktualnej pozycji na tym wykresie z aktualną wysokością i nachyleniem. Wykres jest wykreślony na dwóch osiach. Oś X to odległość na Twojej trasie. Pierwsza oś Y to wysokość nad poziomem morza, której wartość zależy od terenu, a druga oś Y to przybliżone [nachylenie](https://en.wikipedia.org/wiki/Grade_(slope)). Możesz wyświetlić wykres wysokości dla całej trasy lub tylko dla wybranego interwału, skalując wykres.

- ***Powiększ/pomniejsz***. Domyślnie wykres pokazuje trasę od bieżącej lokalizacji do punktu docelowego. Możesz użyć [ruchów dwoma palcami](../../map/interact-with-map.md#gestures), aby powiększyć i pomniejszyć w celu uzyskania bardziej szczegółowego widoku. Możesz także przesunąć wykres w prawo, do przodu na trasie i do tyłu do bieżącej lokalizacji. *Takie manipulacje odnoszą się również do wizualnego bloku informacji w bloku [Atrybuty drogi](#road-attributes).*

- ***Wskaźnik lokalizacji***. Jeśli chcesz zobaczyć informacje w określonym punkcie na Twojej trasie, możesz dotknąć dowolnego miejsca na wykresie, a pojawi się wskaźnik z wysokością i procentem nachylenia.


## Analiza na mapie {#analyze-on-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szczegóły trasy Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Szczegóły trasy iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

Narzędzie **Analiza na mapie** jest podobne do narzędzia do przeglądania [szczegółów ścieżki](../../map/tracks/index.md#analyze-track-on-map) na mapie. Pozwala ono przeglądać i wizualnie wchodzić w interakcje z różnymi wykresami oraz widzieć wybrany punkt na mapie.

Jeśli dane są dostępne, możesz wybrać jeden z następujących typów:

- *Oś Y*:
   - [*Wysokość*](../../map/tracks/track-context-menu.md#altitude). Jest to [proces](https://wiki.openstreetmap.org/wiki/Altitude) uzyskiwania wysokości nad ustalonym poziomem.
   - [*Nachylenie*](https://wiki.openstreetmap.org/wiki/Key:incline). [Nachylenie ukształtowania terenu](https://en.wikipedia.org/wiki/Grade_(slope)) oznacza tangens kąta nachylenia powierzchni do poziomu.
   - [*Prędkość*](../../map/tracks/track-context-menu.md#speed). Wartości prędkości podczas jazdy po torze.
   - Wykresy z dwoma typami danych: &nbsp;*Wysokość/Nachylenie*, &nbsp;*Wysokość/Prędkość*, &nbsp;*Nachylenie/Prędkość*, &nbsp;*Animowane powiększenie/Prędkość*.
- *Oś X*:
   - *Odległość*. Możesz przeglądać dane trasy, które odnoszą się do długości trasy.
   - *Czas*. Możesz przeglądać dane trasy, które odnoszą się do czasu obliczonego dla tej trasy
   - *Pora dnia*. Możesz przeglądać dane trasy w określonych porach dnia.


### Typ interakcji {#type-of-interactions}

- *Dotknij i przesuń*. Dotknij wykresu, aby wyświetlić informacje o punkcie ścieżki i ruchu wzdłuż niej. Wykres podświetla położenie punktu na mapie i wyświetla informacje o nim na linijce.
- *Skala*. Skaluj wykres za pomocą [gestu dwoma palcami](../../map/interact-with-map.md#gestures).
- *Śledź moją lokalizację* (*tylko Android*). Możesz dotknąć [Moja lokalizacja](../../map/interact-with-map.md#my-location-and-zoom), aby zsynchronizować widok mapy i wykresu z Twoją lokalizacją. Podczas ruchu wykres będzie przesuwał się od lewej do prawej, wyświetlając informacje przed Twoją ścieżką.


## Atrybuty drogi {#road-attributes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Trasa nawigacji Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Trasa nawigacji iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Atrybuty drogi są dostępne w [Szczegółach trasy](#how-to-access) i wyświetlają informacje dotyczące segmentów z OpenStreetMap oraz dane wysokościowe. Wskazanie koloru odnosi się do sposobu renderowania poszczególnych atrybutów na mapie (patrz [Legenda mapy](../../map-legend/osmand.md#surface-smoothness)). Wykresy słupkowe są również interaktywne i możliwe jest wyświetlenie informacji w określonym miejscu poprzez dotknięcie wykresu.

- [**Typ drogi**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Typ drogi jest określany na podstawie jej przeznaczenia funkcjonalnego i charakterystyki, takiej jak liczba pasów, ograniczenia prędkości, nośność, obecność ścieżek dla pieszych i rowerzystów, poboczy i innych parametrów. Różne typy dróg mogą mieć różne ograniczenia i zasady ruchu.

   Na przykład, główne [autostrady](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) zazwyczaj mają wysokie ograniczenie prędkości i mogą być podzielone na pasy, a [drogi lokalne](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) mogą mieć niskie ograniczenie prędkości i jeden pas w każdym kierunku.

- [**Nawierzchnia**](https://wiki.openstreetmap.org/wiki/Key:surface). Nawierzchnie drogowe to wierzchnia warstwa nawierzchni, która styka się z kołami pojazdów. Mogą być różnego typu w zależności od ich właściwości i przeznaczenia funkcjonalnego.

   Na przykład, nawierzchnia [asfaltowa](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) zapewnia dobrą przyczepność i izolację akustyczną, a nawierzchnia [betonowa](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) jest bardziej trwała i ma większą nośność. Inne materiały, takie jak żwir, tłuczeń, deski drewniane i inne, mogą być również wykorzystywane do tworzenia nawierzchni drogowej.

- [**Stromość**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Jest to pomiar kąta nachylenia drogi, wyrażony w procentach. Wskazuje, jak stromo droga jest nachylona w górę lub w dół względem horyzontu, i jest obliczana poprzez pomiar pionowej zmiany wysokości drogi przez odległość poziomą i pomnożenie wynikowej wartości przez 100%.

   Na przykład, jeśli stromość drogi wynosi 10%, oznacza to, że na każde 100 metrów odległości poziomej wzdłuż drogi, poruszasz się w górę lub w dół o 10 metrów. Stromość drogi może wpływać na prędkość pojazdu, hamowanie, zużycie paliwa i bezpieczeństwo jazdy, zwłaszcza na śliskich drogach zimą.

- [**Twardość nawierzchni**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Nawierzchnia drogi może odzyskać kształt po deformacji lub obciążeniu. Im większa twardość nawierzchni, tym mniejsze ryzyko uszkodzenia pojazdu i tym bardziej komfortowa będzie droga. Twardość nawierzchni może również wpływać na prędkość pojazdu i zużycie paliwa.

- [**Nachylenie**](https://wiki.openstreetmap.org/wiki/Key:incline). Wskazuje, jaki procent nachyleń występuje na Twojej trasie.

- [**Gładkość**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Ma zastosowanie do wszystkich rodzajów ścieżek i obszarów, takich jak autostrady, parkingi, plaże i szlaki, i wskazuje użyteczność trasy. Daje informacje, że można jechać bez znacznego ryzyka uszkodzenia, np. podwozia pojazdu, lub obrażeń, np. upadku.

- [**Drogi zimowe i lodowe**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Pokazuje schemat kolorów trasy zgodnie z klasyfikacją [dróg zimowych](../../map/vector-maps.md#winter-and-ski).

- [**Trudność szlaków konnych**](https://wiki.openstreetmap.org/wiki/Riding). Ten atrybut drogi wskazuje trudność trasy podczas jazdy konnej. Odpowiedni dla [routingu konnego](../../navigation/routing/horse-routing.md).


## Informacje o zakrętach {#turn-by-turn-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trasa nawigacji Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Informacje o zakrętach dostarczają szczegółowych [instrukcji](#instructions) dotyczących nawigacji po trasie. Oprócz menu *Szczegóły*, są one również wyświetlane w widżetach [*Manewry trasy*](../../widgets/nav-widgets.md#route-maneuvers) i [*Pasy*](../../widgets/nav-widgets.md#lanes). Te informacje pomagają lepiej nawigować po trasie i pozwalają planować z wyprzedzeniem.

Dotknij określonego odcinka trasy na liście, aby wyświetlić szczegółowe informacje lub wprowadzić wymagane zmiany. Mapa powiększa się i otwiera się [menu kontekstowe](../../map/map-context-menu.md).


### Instrukcje {#instructions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trasa nawigacji Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Instrukcje zawierają informacje o poruszaniu się po trasie, takie jak:

- [*Strzałka następnego zakrętu*](../../widgets/nav-widgets.md#next-turn) i *jej kierunek*.
- *Odległość do manewru*.
- Opis *co robić*, który zawiera *nazwę ulicy lub szlaku*.
- *Całkowita odległość* i *czas trasy*.
- [*Układ pasów*](../../widgets/nav-widgets.md#lanes) dla bieżącej drogi.
- [*Wskaźnik pobocza*](#roadside-indicator) (*tylko iOS*).


### Wskaźnik pobocza {#roadside-indicator}

:::caution Tylko iOS
Ten typ instrukcji jest obecnie *niedostępny dla wersji Android* aplikacji OsmAnd.
:::

![Wskazanie strony](@site/static/img/navigation/route/side_indication.png)

Na liście instrukcji **wskaźnik pobocza** pokazuje, w którym kierunku od Twojej aktualnej lokalizacji i kierunku ruchu do punktu docelowego znajduje się Twój cel, może to być lewo, prawo i prosto.

Mierzony jest kąt między Twoim celem (*[Kierunek](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) od ostatniego punktu*) a ostatnim segmentem (*Kierunek do ostatnich 2 punktów trasy*), podzielony na 3 sektory po 120 stopni, a wynikiem jest to, że możesz zobaczyć, w którym kierunku znajduje się Twój cel.

- `-60 °`&nbsp; &nbsp; &nbsp; do &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - oznaczone jako **prosto**.
- `-180 °`&nbsp; &nbsp; do &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - oznaczone jako **lewa** strona.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; do &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - oznaczone jako **prawa** strona.


### Drukuj {#print}

<InfoAndroidOnly/>

![szczegóły trasy](@site/static/img/navigation/route/route_details_print-2.png)

Funkcja **Drukuj** opisu trasy krok po kroku może być przydatna, jeśli wolisz mieć fizyczną kopię opisu trasy zamiast korzystania z urządzeń elektronicznych, lub jeśli nie masz dostępu do aplikacji nawigacyjnych lub nawigacji GPS, nie masz dostępu do Internetu, lub jeśli potrzebujesz informacji dla innych osób podróżujących z Tobą.

Wydrukowany opis trasy zawiera szczegółowe instrukcje krok po kroku, jak nawigować po trasie, w tym odległość do następnego zakrętu, kierunek jazdy oraz nazwy ulic lub szlaków, a także informacje o odległości i czasie podróży.

Informacje te mogą być przydatne podczas planowania podróży, gdy chcesz oszacować czas i odległość między różnymi punktami na trasie oraz określić przewidywany czas przybycia.

Możliwość **drukowania** lub **zapisywania** informacji o trasie krok po kroku **w formacie PDF** jest szczególnie przydatna podczas podróży na długie dystanse lub w nieznane miejsca, gdy potrzebujesz bardziej szczegółowego wyobrażenia o trasie i czasie potrzebnym na jej pokonanie.


## Udostępnij / Eksportuj (Akcje) {#share--export-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trasa nawigacji Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasa nawigacji iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

Sekcja nawigacji Szczegóły trasy zawiera opcje, które pozwalają wykonywać określone działania z informacjami o trasie.

- [**Drukuj**](#print). Umożliwia drukowanie lub zapisywanie informacji o trasie krok po kroku.
- **Eksportuj/Zapisz**. Umożliwia zapisanie informacji o trasie **jako nowej ścieżki** do późniejszego użytku offline. Wyeksportowana ścieżka zawiera wszystkie informacje o atrybutach drogi i instrukcjach skrętu. Tak więc, [nawigacja po tej ścieżce](./gpx-navigation.md) powinna zapewniać wszystkie funkcje, jak nawigacja po trasie.
- **Udostępnij**. Udostępnia wyeksportowaną ścieżkę lub link do trasy, który można otworzyć na innym urządzeniu z OsmAnd.


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](./route-navigation.md)
- [Nawigacja po ścieżce](./gpx-navigation.md)
- [Nawigacja po znacznikach](./markers-navigation.md)
- [Ustawienia nawigacji](../guidance/navigation-settings.md)
- [Ekran mapy podczas nawigacji](../guidance/map-during-navigation.md)
- [Komunikaty głosowe / Powiadomienia](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ostatnia aktualizacja: listopad 2024*