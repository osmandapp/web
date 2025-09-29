---
source-hash: c35887f39fe22b467071b197cd38e3d121d7a79da3a78f76da7f0093e1edc604
sidebar_position: 1
title:  Planowanie trasy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

Narzędzie **Planowanie trasy** (*Menu → Planowanie trasy*) to zaawansowana funkcja aplikacji OsmAnd, która pozwala na [tworzenie nowych tras](#create-new-route) jako śladów GPX, [edycję i dodawanie nowych segmentów](#segments) do już zapisanych śladów, [mierzenie odległości](#distance-measurement) na mapie oraz [dołączanie segmentów trasy](#attach-track-to-roads) do najbliższej dostępnej drogi przy użyciu różnych profili nawigacyjnych. Funkcja ta została zaprojektowana do pracy w *trybie offline*.

Trasa składa się z zestawu segmentów pomiędzy określonymi punktami. Segmenty mogą być liniami prostymi lub trasami dostosowanymi do wybranego profilu. Trasę można zapisać jako plik GPX w celu późniejszego importu, edycji i [nawigacji](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Główne zastosowania {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Planowanie trasy Android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Planowanie trasy iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Tworzenie nowej trasy {#create-new-route}

Aby utworzyć nowy ślad w formacie GPX, użyj głównej funkcji narzędzia *Planowanie trasy*. Wstępne tworzenie trasy ma wiele zalet w porównaniu z nagrywaniem bieżącego śladu za pomocą *[wtyczki Nagrywanie trasy](../plugins/trip-recording.md)*. Możesz [dodać](#adding-points) dowolną liczbę punktów do trasy, [usuwać je i przesuwać](#point-context-menu), zmieniać typy tras według [segmentów](#route-between-points) oraz uzyskiwać [szczegółowe informacje o trasie](#graph).  

Domyślnie typ wyznaczania trasy będzie odpowiadał wcześniej wybranemu profilowi. Dotknij ikony wyznaczania trasy, aby wybrać, w jaki sposób aplikacja ma obliczać segment łączący punkty. Dostępny profil należy skonfigurować [osobno](../navigation/routing/osmand-routing.md#routing-types).  

Możesz **przybliżać i oddalać** mapę, aby ułatwić umieszczanie punktów podczas tworzenia lub edycji śladu. Gdy **oddalisz** mapę, punkty na śladzie stają się niewidoczne, co zapewnia lepszy widok całej długości śladu i mapy jako całości. Widoczny pozostaje tylko ostatnio dodany punkt i wskaźnik do dodania następnego punktu.


### Modyfikowanie istniejącego śladu GPX {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

Narzędzie *Planowanie trasy* pozwala na modyfikację istniejącego śladu GPX, a także [zaimportowanego śladu](../personal/tracks/manage-tracks.md#import). Jeśli jednak musisz wykluczyć dużą liczbę punktów na podstawie ogólnych kryteriów, bardziej odpowiednim narzędziem może być [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter).


### Pomiar odległości {#distance-measurement}

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Planowanie trasy* to szybki i łatwy sposób na zmierzenie odległości między punktami.

- Wybierz metodę planowania trasy *Linia prosta*. Między punktami zostanie narysowana linia przerywana.
- [Dodaj](#adding-points) pierwszy punkt na mapie, od którego będzie rysowana linia.
- Przesuń mapę, aby określić odległość i azymut. Informacje te zostaną wyświetlone w polu z listą punktów pod mapą.

:::note
Opcja *Linia prosta* jest potrzebna i będzie używana na obszarach nieobjętych danymi do wyznaczania tras, takich jak tereny off-road i poza szlakami.
:::


### Uzyskiwanie danych o wysokości {#get-elevation-data}

<InfoAndroidOnly />

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Jeśli w istniejącym śladzie brakuje [danych o wysokości](../map/tracks/track-context-menu.md#calculate-missing-elevation), można je dodać za pomocą następujących narzędzi:

- [Użyj pobliskich dróg](#attach-track-to-roads). Ten tryb wykorzystuje mapy offline do znalezienia najbliższych dróg w celu zbudowania śladu, dzięki czemu dane o wysokości zostaną pobrane z dołączonych dróg. Geometria śladu może być dostosowana.  
- [Użyj map terenu](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Tryb ten oblicza wysokość na podstawie danych z mapy terenu (3D). Różnica między wysokościami zarejestrowanymi przez urządzenie może być wykorzystana do korekty wysokości. Geometria śladu pozostaje niezmieniona.


### Dołącz ślad do dróg {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy przyciąganie do drogi iOS](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy przyciąganie do drogi iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

Ustawienie **Dołącz do dróg** pozwala na dołączenie zarejestrowanego lub zaimportowanego śladu do dróg z map offline OsmAnd w celu uzyskania dodatkowych informacji:

- Poprawne informacje o zakrętach dla opcji [Nawiguj po śladzie](../navigation/setup/gpx-navigation.md#follow-track-options) (szczególnie na rondach).
- Nazwy ulic i informacje o pasach ruchu.
- Dane o wysokości.
- [Atrybuty drogi](../navigation/setup/route-details.md#road-attributes).

Można wybrać [wartość progową](../navigation/setup/gpx-navigation.md#attach-to-the-roads) dla odległości, w jakiej uproszczone punkty śladu mogą znajdować się od oryginalnych punktów śladu.

:::note Ikona nieokreślonego profilu
Jeśli wybierzesz ślad i obok ikony *Ustawienia* wyświetli się ikona ***nieokreślonego*** profilu ("?"), dotknij jej, aby wybrać, czy dołączyć ślad do dróg, czy po prostu połączyć punkty linią prostą i potraktować go jako zarejestrowany ślad.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Punkty i segmenty {#points--segments}

### Dodawanie punktów {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Aby zmierzyć odległość lub zaplanować podróż, dodawaj punkty w lokalizacji *Wskaźnika* jeden po drugim i dotykaj przycisku *Dodaj punkt*. Uzyskując dostęp do **listy punktów** poniżej, możesz zmieniać kolejność punktów, usuwać je lub uzyskać dostęp do [menu kontekstowego](#point-context-menu) danego punktu.

:::note
Możesz także **Cofnąć**/**Ponowić** każdą czynność wykonaną w planowaniu trasy.
:::
  
### Trasa między punktami {#route-between-points}

Dodane w edytorze punkty mogą być połączone linią prostą lub jako trasa między punktami wybranego profilu. Dostęp do opcji *Trasa między punktami* można uzyskać na kilka sposobów:

1. Z menu *Opcje* *→* *Trasa między punktami*.
2. Dotknij *ikony profilu* w lewym dolnym rogu ekranu mapy. Nie górnej ikony, która otworzy menu Konfiguruj mapę.
3. W *[Menu kontekstowym punktu](#point-context-menu) → Zmień typ trasy przed/po*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Planowanie trasy Android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Planowanie trasy iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Możesz zmienić trasę między 2 konkretnymi punktami lub między wieloma punktami:

- *Cały ślad*. Cały ślad zostanie przeliczony przy użyciu wybranego profilu.
- *Następny segment*. Tylko następny segment zostanie przeliczony przy użyciu wybranego profilu.  
- *Zmień typ trasy przed/po punkcie*. W *menu kontekstowym punktu* można zmienić sposób obliczania trasy dla odcinka od tego punktu do najbliższego lub do punktu krańcowego. Ustawienie to dostarcza informacji o odległości od tego punktu do początku lub końca trasy, lub do następnego/poprzedniego punktu.
- *Przelicz trasy*. Możesz użyć przeliczania trasy bez zmiany typu profilu. Ikona profilu pokazana na planowanej trasie w narzędziu nie zmieni się, ale typ trasy będzie odpowiadał wybranemu. Może to być potrzebne do znalezienia alternatywnych tras.  

### Segmenty {#segments}

Segment śladu to zbiór punktów połączonych bez **przerw**. W narzędziu do planowania trasy możliwe jest:

- Łączenie segmentów: opcja [Połącz segmenty](#point-context-menu) usuwa przerwę do wcześniej oddzielonych segmentów.
- Dzielenie lub tworzenie nowych, niepołączonych odcinków śladu. Aby to zrobić, użyj opcji [Rozpocznij nowy segment](#point-context-menu) lub wybierz funkcję [Podziel](#point-context-menu) z menu kontekstowego punktu.

### Menu kontekstowe punktu {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Każdy punkt na trasie ma swoje menu kontekstowe. Pokazuje ono *numer porządkowy* punktu, *odległość od początku trasy*, funkcję przesuwania go na mapie i usuwania oraz zestaw działań z odcinkami trasy przed i po tym punkcie. Aby edytować, dotknij wymaganego punktu na [liście punktów](#adding-points) lub bezpośrednio na mapie.

- ***Informacje o punkcie***. Numer punktu na liście. Odległość do pierwszego punktu jest oparta na ustawionym typie wyznaczania trasy; odległość może się zmienić po przeliczeniu na nowy typ, jeśli parametr *Trasa między punktami* zostanie zmieniony.  

- ***<Translate ios="true" ids="move_point"/>***. Pozwala na zmianę pozycji punktu na mapie. Przesuwaj mapę za pomocą gestów, aby zmienić lokalizację punktu. Wskaźnik punktu będzie znajdował się w centrum widocznej części mapy.  

- ***<Translate ios="true" ids="add_point_after"/>***. Przesuń mapę, aby dodać punkt po wybranym punkcie. Możesz dodać tyle punktów, ile potrzebujesz, dopóki nie dotkniesz przycisku Anuluj lub Zastosuj.  

- ***<Translate ios="true" ids="add_point_before"/>***. Przesuń mapę, aby dodać tyle punktów, ile potrzeba, po wybranym punkcie na segmencie między tym punktem a następnym.  

- ***<Translate ios="true" ids="trim_before"/>***. Możesz przyciąć cały odcinek trasy, punkty i segmenty, od jej początku do wybranego punktu. Odległość do przycięcia jest wskazana pod nazwą opcji.  

- ***<Translate ios="true" ids="trim_after"/>***. Możesz przyciąć trasę, punkty i segmenty, od ostatnio dodanego punktu do wybranego punktu. Odległość do przycięcia jest wskazana pod nazwą opcji.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Pozwala na podzielenie trasy przed wybranym punktem na oddzielne, niepołączone segmenty.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Pozwala na podzielenie trasy po wybranym punkcie na oddzielne, niepołączone segmenty.  

- ***<Translate ios="true" ids="join_segments"/>***. Ostatni punkt na jednym z podzielonych segmentów i następny na liście punktów na drugim segmencie mają to ustawienie połączenia.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Możesz zmienić typ wyznaczania trasy skonfigurowany dla dostępnego profilu, między punktami na poprzednim segmencie lub dla wszystkich segmentów od początku trasy do wybranego punktu.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Możesz zmienić typ wyznaczania trasy między punktami na następnym segmencie lub dla wszystkich segmentów od wybranego punktu do ostatnio dodanego punktu.  

- ***<Translate ios="true" ids="delete_point"/>***. Usuń wybrany punkt z trasy. Podobnie jak usuwanie punktu na liście.

### Trasy multimodalne {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy linia trasy Android](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy ekran iOS](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Korzystając z narzędzia *Planowanie trasy* i opcji [Trasa między punktami](#route-between-points), można tworzyć trasy multimodalne, w których na przykład pierwsza część może być trasą *rowerową*, druga część trasą w *linii prostej*, a następnie trasą *pieszą*. Należy pamiętać, że nawigacja po trasach multimodalnych nie jest dostępna, więc należy wybrać jeden z najbardziej odpowiednich profili, aby móc podążać za wskazówkami zakręt po zakręcie.


## Edytor {#editor}

### Zapisywanie trasy {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Po [dodaniu](#adding-points) co najmniej jednego punktu na mapie, można użyć opcji zapisu. Wszystkie trasy zapisane w *Planowaniu trasy* można znaleźć w głównym menu *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Istnieją cztery sposoby zapisu:

- ***Szybki zapis***. Przycisk ***Gotowe*** / ***Zapisz*** (dla istniejących śladów) w prawym górnym rogu pozwala na szybkie zapisanie zmian i wyjście z narzędzia *Planowanie trasy*. Nazwa jest generowana na podstawie bieżącej daty.
- ***Zapisz zmiany*** w [menu Opcje](#options) pozwala zapisać zmiany w pliku i kontynuować planowanie trasy.
- ***Zapisz jako nowy ślad*** w [menu Opcje](#options) otwiera okno dialogowe, w którym należy podać nazwę śladu i folder, w którym trasa zostanie zapisana.
- ***Dodaj zmiany do śladu***. Dołącza utworzony ślad jako [oddzielny segment](#segments) do innego istniejącego śladu. Zmian w wybranym śladzie *nie można cofnąć*.

:::note Opcja Uproszczony ślad
Podczas zapisywania nowego śladu można wybrać opcję ***Uproszczony*** ślad, aby ślad był kompatybilny z innymi aplikacjami firm trzecich. Technicznie rzecz biorąc, ślad zostanie zapisany bez instrukcji nawigacyjnych jako czysto geometryczny ślad.
:::

### Opcje {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy opcje Android](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy opcje iOS](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Pokazuje wybrany profil aplikacji (domyślnie jest to linia prosta). Dotknięcie tej akcji jest równoznaczne z dotknięciem przycisku *Profil*, co otwiera menu [profili aplikacji](../personal/profiles.md).
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) lub **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Rysuje nowe segmenty trasy, które nie łączą się z poprzednim segmentem.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Jeśli jest to nowy ślad bez powiązania z istniejącym, otwiera się menu *Zapisz jako nowy ślad*. Po dodaniu nowych segmentów do otwartego lub zaimportowanego śladu pojawia się powiadomienie o zapisaniu pliku GPS w pamięci, po czym można kontynuować tworzenie następnego segmentu.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Zapisuje trasę jako ślad GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Dodaj swoją trasę do śladu z folderu śladów i zapisz nowy ślad.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Rozpoczyna nawigację z Twojej pozycji do punktu końcowego, korzystając z narysowanej trasy.
- **<Translate android="true" ids="reverse_route"/>**. Zamienia punkt *Startowy* trasy z ostatnio dodanym punktem. Ustawienia segmentów trasy nie zmieniają się po zastosowaniu funkcji Odwróć.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Tworzy przybliżoną trasę. Każdy punkt na śladzie jest dopasowywany do najbliższej dozwolonej drogi na mapie zgodnie z wybranym profilem i odległością progową.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (tylko Android). Możesz odfiltrować punkty trasy, które nie pasują do wybranego typu wyznaczania trasy, usunąć niepotrzebne dane lub poprawić niedokładne dane. Filtr GPS będzie działał tylko wtedy, gdy typ wyznaczania trasy jest określony jako *Linia prosta*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*tylko Android*). Ta opcja jest wyświetlana w menu tylko wtedy, gdy dane o wysokości nie są dostępne. Za pomocą tej [opcji](#get-elevation-data) można obliczyć wysokość, korzystając z *danych mapy terenu* lub użyć danych z pobranych map, aby znaleźć *pobliskie drogi*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Całkowicie archiwizuje wszystkie działania. Na mapie pozostaje "artefakt" - przerywane linie właśnie wyczyszczonej trasy. Znika on przy następnym dodaniu nowych punktów. Funkcję Wyczyść wszystko można anulować za pomocą przycisku Cofnij. Funkcja ta nie wpływa na niezmienione części tras otwartych w narzędziu.

### Wykres {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planowanie trasy Android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planowanie trasy przyciąganie do drogi iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Podczas planowania trasy [wykres](../navigation/setup/route-details.md#elevation-graph) wyświetla informacje o wysokości trasy i procentowym nachyleniu, a ponadto można dotknąć dowolnego miejsca na wykresie, aby wyświetlić wskaźnik z określonymi danymi.  

- W systemie **Android** wykres jest wyświetlany w zakładce *Wykres* podczas tworzenia lub otwierania śladu oraz podczas [nawigacji](../navigation/setup/gpx-navigation.md) z użyciem *Planowania trasy*.
- W systemie **iOS** wykres jest dostępny tylko poprzez menu *[Opcje](#options) → Nawigacja*.

Podczas obliczania trasy do nawigacji w *Planowaniu trasy* można znaleźć dodatkowe informacje o śladzie, takie jak [informacje o wysokości](../navigation/setup/route-details.md#elevation-info) i [atrybuty drogi](../navigation/setup/route-details.md#road-attributes), a także skorzystać z narzędzia [Analizuj na mapie](../navigation/setup/route-details.md#analyze-on-map). Dotknij przycisku *Szczegóły* pod wykresem.  


## Powiązane artykuły {#related-articles}

- [Wyświetlanie śladu na mapie](../map/tracks/index.md)
- [Analiza na mapie](../map/tracks/index.md#analyze-track-on-map)
- [Menu kontekstowe śladu](../map/tracks/track-context-menu.md)
- [Nawigacja po śladzie](../navigation/setup/gpx-navigation.md)
- [Nagrywanie podróży](../plugins/trip-recording.md)