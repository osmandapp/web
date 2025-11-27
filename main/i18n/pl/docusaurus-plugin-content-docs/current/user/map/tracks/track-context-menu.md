---
source-hash: c3e5ac67f7089096f5b71e7e0201440bab4f393bc16c357be3085327287a1bd3
sidebar_position: 4
title:  Menu Kontekstowe Śladu
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

*Menu kontekstowe śladu* dostarcza informacji o *[śladzie](../../personal/tracks/index.md)* zarówno w formie tekstowej, jak i [graficznej](#altitude--speed-graphs). Pozwala dodawać informacje, wprowadzać zmiany, edytować i wykonywać różne inne działania na śladzie. Dostęp do *menu kontekstowego śladu* można uzyskać, dotykając potrzebnego śladu na mapie lub korzystając z menu *[Moje miejsca](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Może być konieczne otwarcie folderu ze śladami i wybranie pożądanego śladu przez dotknięcie go.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przegląd menu kontekstowego śladu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przegląd menu kontekstowego śladu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Przegląd śladu {#track-overview}

Po dotknięciu śladu otwiera się pierwszy ekran *menu kontekstowego śladu* - zakładka *Przegląd*. Na tej karcie można znaleźć podsumowanie wybranego śladu (*[Panel informacyjny](#info-panel)*) i wykonać najczęstsze czynności ze śladem za pomocą *[menu akcji śladu](#track-actions)*. Możesz zobaczyć [opis i informacje serwisowe](#description-and-info) o swoim śladzie, jeśli pociągniesz zakładkę Przegląd w górę.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Panel informacyjny {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przegląd panelu informacyjnego Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przegląd panelu informacyjnego iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

W górnej części panelu informacyjnego widać nazwę śladu i symbol użyty do jego oznaczenia (*tylko Android*). Nazwę śladu można zmienić za pomocą funkcji zmiany nazwy w [menu Opcje](#options). Niektóre ślady (głównie *[Przewodniki turystyczne](../../plan-route/travel-guides.md#manage-as-gpx-track)*) mogą mieć krótki *[opis](#description-and-info)* i/lub zdjęcie pod *nazwą śladu*. Strzałka pokazuje *kierunek do najbliższego punktu śladu* z [Mojej lokalizacji](../../map/interact-with-map.md#my-location-and-zoom).  

Panel informacyjny zawiera również informacje o:

- *<Translate android="true" ids="distance"/>*. Pokazuje długość śladu.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Wyświetla całkowitą sumę wzniesień i spadków podczas podróży.
- *<Translate android="true" ids="altitude_range"/>*. Wskazuje minimalną i maksymalną wysokość na śladzie.  

W przypadku, gdy ślad został utworzony w OsmAnd lub innej aplikacji do śledzenia (więc jego punkty mają tagi [`time` i `speed`](../../plugins/trip-recording#recorded-gpx-file)), panel informacyjny będzie również zawierał informacje o *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="map_widget_trip_recording_duration"/>* (czas trwania między punktem początkowym a końcowym śladu) i *<Translate android="true" ids="shared_string_time_moving"/>* (suma czasu podczas jazdy).

**Uwaga:** Dla zarejestrowanych śladów Czas trwania pokazuje rzeczywisty czas podróży na podstawie znaczników czasu. Dla zaplanowanych śladów Czas trwania pokazuje szacowany czas obliczony na podstawie długości trasy i średniej prędkości wybranego profilu nawigacji, jeśli cała trasa korzysta z jednego profilu i nie zawiera segmentów w linii prostej.


### Akcje śladu {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przegląd menu kontekstowego śladu Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przegląd menu kontekstowego śladu iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Przyciski **Pokaż / ukryj**. Zmieniają widoczność śladu na mapie.
- [Wygląd](./appearance.md). Dostosuj wygląd swojego śladu.
- **Edytuj ślad** (*Android*). Otwiera ślad w narzędziu [Planowanie trasy](../../plan-route/create-route.md).
- **Eksportuj** (*iOS*). Pozwala [wyeksportować ślad](../../personal/tracks/manage-tracks.md#export).
- **Wskazówki**. Otwiera ślad w trybie *[Nawigacji](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opcje {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opcje menu śladu Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Opcje menu śladu iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

Menu **Opcje** pozwala zarządzać i modyfikować wybrany ślad za pomocą różnych narzędzi i ustawień.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Kontroluje widoczność śladu na mapie.
- **<Translate android="true" ids="shared_string_appearance"/>** – Otwiera [menu Wygląd](../tracks/appearance.md), aby dostosować kolor, szerokość i przezroczystość śladu.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Rozpoczyna [nawigację po śladzie](../../navigation/setup/gpx-navigation.md), dopasowując trasę do wybranego śladu.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*tylko Android*) – Łączy segmenty śladu, aby wypełnić luki.
- **<Translate android="true" ids="analyze_on_map"/>**. Otwiera narzędzie [Analizuj na mapie](../tracks/index.md#analyze-track-on-map) do sprawdzania wysokości, prędkości i odległości śladu.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*tylko Android*) - Analizuje ślad według [interwałów](./track-context-menu.md#analyze-by-intervals).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Eksportuje wybrany ślad w formacie GPX za pomocą menu Udostępnianie systemu.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Przesyła](../../plugins/osm-editing.md#upload-gps-track) wybrany ślad do OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Otwiera narzędzie [Planowanie trasy](../../plan-route/create-route.md) do modyfikacji śladu.
- **Duplikuj ślad** (*tylko iOS*) – Tworzy i zapisuje kopię śladu.
- **<Translate android="true" ids="rename_track"/>** – Pozwala zmienić nazwę śladu.
- **<Translate android="true" ids="change_folder"/>** – Przenosi ślad do innego folderu lub tworzy nowy.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*tylko Android*) - Pozwala na [filtrowanie punktów śladu](#gps-filter) w celu poprawy dokładności.
- **<Translate android="true" ids="altitude_correction"/>** (*tylko Android*) - Aby [uzyskać dane o wysokości](#calculate-missing-elevation), [dopasuj ślad do dróg](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) lub oblicz je offline (wymagane [Mapy terenu](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*tylko Android*) - [Symuluje Twoją pozycję](../../plugins/development.md#gpx-track-simulation) za pomocą śladu GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Usuwa ślad.


### Opis i informacje {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opis i informacje Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Opis i informacje Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Opis śladu iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Ta sekcja zakładki *Przegląd* wyświetla ***dane tagów*** i ***wszystkie ogólne informacje***.

- **Opis**. Przycisk *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) służy do edycji opisu śladu. Tag `desc`.

- **Ogólne**. Zawiera informacje o *rozmiarze pliku GPX*, *folderze pliku* i *dacie utworzenia* z tagiem `time`.

- **Informacje**. Tagi: *Słowa kluczowe* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Aktywność* - `activities`.

- **Autor**. Tagi: *Autor* - `author`, &nbsp;*Nazwa* - `name`, &nbsp;*Adres e-mail* - `email`, &nbsp;*Link* - `link`.

- **Prawa autorskie**. Tagi: *Prawa autorskie* - `copyright`, &nbsp;*Autor* - `author`, &nbsp;*Rok* - `year`, &nbsp;*Licencja* - `license`.

- **Dodatkowe**. Wszystkie tagi z sekcji ***rozszerzenia***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

<details>

<summary>Przykładowy kod XML pliku GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Typ aktywności śladu {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Typ aktywności śladu](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Typ aktywności śladu](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


Funkcja *Aktywność* w OsmAnd pozwala na oznaczanie zarejestrowanych śladów GPX określonymi aktywnościami w celu dalszej analizy i organizacji w folderach.

- [Tagi aktywności dla śladów GPX](../../plugins/trip-recording.md#recording-settings). Zarejestrowane ślady automatycznie otrzymują typ aktywności na podstawie wybranego profilu, co pomaga w ich późniejszej kategoryzacji i filtrowaniu. Można zmienić aktywność ręcznie, jeśli jest to potrzebne.
- [Filtr aktywności](../../personal/tracks/smart-folder.md#search-filter). Możesz filtrować zarejestrowane ślady GPX według aktywności, co pozwala skupić się na wyszukiwaniu określonych typów nagrań, takich jak wszystkie ślady rowerowe lub piesze.
- [Zarządzaj typami aktywności](../../personal/tracks/manage-tracks.md#selection-mode). Możesz zmienić typ aktywności dla wybranych folderów lub śladów za pomocą trybu wyboru w zakładce Ślady w menu Moje miejsca.
- **Lista aktywności**. Kategorie i grupy aktywności są zdefiniowane w zasobach OsmAnd. Dla deweloperów i współtwórców lista aktywności jest utrzymywana w ustrukturyzowanym formacie w pliku [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), który szczegółowo opisuje dostępne grupy i typy aktywności.


## Wykresy wysokości / prędkości {#altitude--speed-graphs}

Na karcie *<Translate android="true" ids="shared_string_gpx_track"/>* można znaleźć informacje o śladzie w formie graficznej. Za pomocą przełącznika można wybrać, które dane mają być wyświetlane na wykresie: osobne dane o *[<Translate android="true" ids="altitude"/>](#altitude)*, o *[prędkości](#speed)* (ta opcja jest dostępna tylko dla zarejestrowanych śladów) lub wyświetlać je razem (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interakcja z wykresem:

- ***Umieść punkt na wykresie***. Jeśli chcesz zobaczyć informacje w określonym punkcie śladu, możesz dotknąć dowolnego miejsca na wykresie, a pojawi się wskaźnik z wartościami. W tym samym czasie na mapie pojawi się niebieski znacznik, wskazujący to miejsce na śladzie.
- ***Powiększanie/pomniejszanie***. Możesz użyć [ruchów dwoma palcami](../../map/interact-with-map.md#gestures), aby powiększyć i pomniejszyć w celu uzyskania bardziej szczegółowego widoku. Po powiększeniu można przesuwać wykres w prawo i w lewo, co odpowiada poruszaniu się do przodu i do tyłu wzdłuż trasy.
- ***Dodatkowe informacje***. Prawa strona wykresu zawiera dane o najniższej, najwyższej i średniej wysokości, nachyleniu i prędkości. Na dole wykresu widać znaczniki odległości.


### Informacje ogólne {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wykresy menu kontekstowego śladu Android](@site/static/img/personal/tracks/track_menu_graph_1_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wykresy menu kontekstowego śladu iOS](@site/static/img/personal/tracks/track_menu_graph_2_new_ios.png)

</TabItem>

</Tabs>

Na karcie **Przegląd** można zobaczyć takie parametry jak:

- *<Translate android="true" ids="distance"/>*. Suma całkowitej odległości przebytej na śladzie lub długość samego śladu.
- *<Translate android="true" ids="map_widget_trip_recording_duration"/>*. Przedział czasowy między punktem początkowym a końcowym śladu.
- *<Translate android="true" ids="shared_string_start_time"/>* Dokładny czas rozpoczęcia nagrywania śladu.
- *<Translate android="true" ids="shared_string_end_time"/>*. Czas zakończenia nagrywania śladu.

Aktywne **przyciski** dają dostęp do takich działań jak:

- Przycisk **<Translate android="true" ids="analyze_on_map"/>** otwiera [menu Analizuj na mapie](../tracks/index.md#analyze-track-on-map) dla śladu.
- Przycisk **<Translate android="true" ids="shared_string_options"/>** otwiera menu z:

  - *Edytuj* otwiera ślad w narzędziu [Planowanie trasy](../../plan-route/index.md).
  - *Usuń* pozwala usunąć wybrany element śladu.
  - *Podziel interwał* otwiera [funkcję Podziel interwał](#analyze-by-intervals) dla śladu.


### Prędkość {#speed}

:::note Tylko zarejestrowane ślady
Ta karta jest widoczna tylko na zarejestrowanych śladach. Punkty na tego typu śladach mają tagi **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wykres prędkości śladu Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wykres prędkości śladu iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Wykres **Prędkość** wyświetla takie metryki jak:

- *<Translate android="true" ids="average_speed"/>*. Wskazuje średnią prędkość podczas podróży.
- *<Translate android="true" ids="max_speed"/>*. Pokazuje maksymalną prędkość podczas podróży.
- *<Translate android="true" ids="moving_time"/>*. Pokazuje całkowity czas podróży tylko w ruchu.
- *<Translate android="true" ids="distance_moving"/>*. Wskazuje skorygowaną odległość podróży.


### Wysokość {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wykres wysokości śladu Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wykres wysokości śladu iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Wykres **Wysokość** wyświetla takie metryki jak:

- *<Translate android="true" ids="average_altitude"/>*. Wskazuje średnią wysokość nad poziomem morza na trasie.
- *<Translate android="true" ids="altitude_range"/>*. Najwyższa i najniższa wysokość zarejestrowana na trasie.
- *<Translate android="true" ids="altitude_ascent"/>*. Skumulowany przyrost wysokości nad poziomem morza wzdłuż trasy.
- *<Translate android="true" ids="altitude_descent"/>*. Skumulowana utrata wysokości wzdłuż trasy.

**Uzyskaj dane o wysokości.**  
Jeśli na trasie *nie ma informacji o wysokości*, można je dodać w następujący sposób:

- *Przycisk Oblicz wysokość → [Użyj pobliskich dróg](../../plan-route/create-route.md#get-elevation-data)*. Wykorzystuje mapę offline do znalezienia pobliskich dróg i danych o wysokości. Pozwala to na dostosowanie geometrii śladu.
- [Użyj map terenu](#calculate-missing-elevation). Wykorzystuje mapy terenu do uzyskania danych o wysokości. Geometria śladu pozostaje niezmieniona.


### Oblicz brakującą wysokość {#calculate-missing-elevation}

:::note Subskrypcja OsmAnd Pro
Funkcja obliczania wysokości offline jest dostępna tylko dla [**subskrybentów OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Ta funkcja pozwala na obliczenie profilu wysokościowego dla śladu GPX w trybie offline dla dowolnego terenu między 70 stopniem szerokości geograficznej północnej a 70 stopniem szerokości geograficznej południowej, na podstawie [danych mapy terenu](../../plugins/topography.md#download-maps). *Mapy terenu (3D) powinny być wcześniej pobrane*.

1. Pobierz [Mapy terenu (3D)](../../plugins/topography.md#download-maps) dla wymaganego regionu.
2. Jeśli ślad nie zawiera żadnych danych o wysokości, przejdź do menu kontekstowego śladu (*Menu kontekstowe śladu → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), wybierz *Użyj map terenu*, a po obliczeniu otrzymasz wykres śladu oparty na danych terenu.  

    ![Wykres wysokości śladu Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Wykres wysokości śladu Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Wykres wysokości śladu Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Wykres wysokości śladu Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. Jeśli tworzysz trasę za pomocą narzędzia [Planowanie trasy](../../plan-route/create-route.md#graph) metodą *Linia prosta* i na wykresie nie ma danych o wysokości, musisz:
    - Dotknąć *Uzyskaj dane o wysokości*, a następnie wybrać *Użyj map terenu*.
    - Po obliczeniu otrzymasz kompletny wykres wysokości/nachylenia trasy oparty na danych terenu.  

  ![Wykres wysokości śladu Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Wykres wysokości śladu Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Punkty / Waypointy {#points--waypoints}

Waypointy to jeden z typów punktów dostępnych na mapie. Ogólnie rzecz biorąc, mogą to być punkty śladu, które są częścią plików GPX. Szczegółowy opis jest dostępny w artykule [punkty na mapie](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punkty menu kontekstowego śladu Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punkty menu kontekstowego śladu iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

W tej zakładce *Punkty*:

- [Wyświetlaj dane punktów śladu](#display-custom-gpx-tags) i modyfikuj swoje punkty śladu (waypointy i punkty trasy), [usuwaj je i dodawaj](#points--waypoints) waypointy do śladu.
- Twórz i modyfikuj [Grupę (folder) punktów](#waypoint-groups).


### Dodaj waypoint do śladu {#add-waypoint-to-a-track}

Waypointy można dodawać do aktualnie nagrywanego śladu lub do dowolnego śladu z listy [*Moje miejsca → Ślady*](../../personal/tracks/manage-tracks.md):

- Użyj [menu kontekstowego mapy](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Waypointy są automatycznie wyświetlane, jeśli wybrany ślad jest włączony na mapie.
  - [Długie dotknięcie](../../map/map-context-menu.md#select-any-point-long-tap) mapy w dowolnym wybranym miejscu, aby utworzyć waypoint.
  - Możesz ustawić informacje o waypoincie w otwartym [menu kontekstowym mapy](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Użyj przycisku [Dodaj waypoint](#points--waypoints) w menu kontekstowym śladu.

- Dodaj waypoint jako przycisk [Szybkiej akcji](../../widgets/quick-action.md#my-places).

### Utwórz waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dodaj waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Dodaj waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dodaj waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Dodaj waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Dotknij przycisku *Dodaj waypoint*, aby otworzyć ekran tworzenia waypointu (ten ekran jest podobny do [menu kontekstowego ulubionych](../../personal/favorites.md#create)).

1. **Dodaj** *Nazwę* waypointu, *Adres* wybranej lokalizacji i *Opis* dla niej (opcjonalnie).
2. **Wybierz** Grupę.

    - Wybierz wcześniej utworzone kategorie grup lub utwórz nową.
    - Utwórz nazwę i wygląd dla nowej grupy waypointów. W aplikacji jest to również nazywane *nową kategorią*.
    - **Ikona**, **kolor ikony** i **kształt** będą używane dla wszystkich nowych waypointów dodanych do grupy.

3. Ustawienie **Wygląd**:

    - Wybierz [**ikonę**](../../personal/favorites.md#favorite-icons) z listy wszystkich ikon kategorii POI.
    - Wybierz **Kolor** ikony.
    - Następnie wybierz **Kształt** ikony: *Okrąg, Ośmiokąt, Kwadrat*.

4. **Zastąp** inny punkt tym, jeśli jest to potrzebne.  


### Akcje z grupami {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu grupy menu śladu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu grupy menu śladu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

*Menu z trzema kropkami* ( &#8285; ) otwiera *Menu grupy* waypointów.

**Akcje:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Pozwala wyświetlać lub nie wyświetlać waypointów grupy na mapie. Można też użyć [przycisku na ekranie](#points--waypoints), aby wyświetlić lub pominąć waypointy grupy na mapie.
- **<Translate android="true" ids="shared_string_rename"/>** - Zmień nazwę grupy.
- **<Translate android="true" ids="change_default_appearance"/>** - Zmień opcje wyświetlania dla grupy waypointów.
- **<Translate android="true" ids="add_group_to_markers"/>** lub **Usuń** (*tylko Android*) - Przenieś waypointy grupy do listy [Znaczników mapy](../../personal/markers.md).
- **<Translate android="true" ids="add_to_favorites"/>** (*tylko Android*) - Pozwala skopiować wybraną grupę Waypointów do [Ulubionych](../../personal/favorites.md). Można wybrać jedną z dwóch opcji: ***<Translate android="true" ids="copy_as_new_folder"/>*** lub ***<Translate android="true" ids="add_to_a_folder"/>***.
- **<Translate android="true" ids="add_to_navigation"/>**  (*tylko Android*) - Tworzy trasę między waypointami. Pierwszy i ostatni punkt stają się początkiem i końcem trasy, a reszta jest konwertowana na punkty pośrednie.
- **<Translate android="true" ids="shared_string_delete"/>** - Usuń grupę waypointów.


### Grupy waypointów {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapa grupy menu śladu Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Mapa grupy menu śladu Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapa grupy menu śladu iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Mapa grupy menu śladu iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Zarządzaj widocznością grup na mapie: jeśli ukryjesz jeden ślad, cała grupa również zostanie ukryta.  

Możesz włączać lub wyłączać waypointy grupy na mapie za pomocą przycisku w prawym górnym rogu menu kontekstowego śladu na mapie. Dotknij go i wybierz wymaganą akcję.

### Wyświetlanie niestandardowych tagów GPX {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punkty](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punkty](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Przykładowy kod XML tagów waypointu</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Przykładowy kod XML tagów punktu trasy</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Tagi:**  

| Parametr | Opis |
| --- | --- |
| `lat` | **Szerokość geograficzna** to jedna ze współrzędnych geograficznych, za pomocą której można określić lokalizację. |
| `lon` | **Długość geograficzna** to kolejna ze współrzędnych geograficznych, za pomocą której można określić lokalizację. |
| `time` | **Znacznik czasu** to data i godzina zarejestrowania punktu. |
| `name` | **Nazwa** to nazwa punktu. Dozwolone są dowolne znaki.  |
| `desc` | **Opis** zawiera dodatkowe informacje o punkcie. |
| `type` | **Wybierz grupę** to nazwa folderu OsmAnd, w którym zapisany jest ten waypoint. |
| `cmt` | **Komentarz** to krótki komentarz do punktu. |
| `link` | **Link** to link do dowolnych źródeł. |
| `ele` | **Wysokość** to wysokość punktu. |


**Rozszerzenia:**  

| Rozszerzenie | Opis |
| --- | --- |
| `osmand:icon` | **Ikona** to nazwa wybranej ikony. |
| `osmand:color` | **Kolor** to kolor w formacie HEX.  |
| `osmand:background` | **Tło** to kształt ikony, taki jak okrąg, ośmiokąt lub kwadrat. |
| `osmand:country` | **Kraj** to nazwa kraju.  |
| `osmand:address` | **Adres** to adres.  |
| `osmand:postcode` | **Kod pocztowy** to kod pocztowy.  |
| `osmand:telephone` | **Telefon** to numer telefonu.  |
| `osmand:state` | **Stan** to nazwa stanu.  |
| `osmand:start_date` | **Data rozpoczęcia** to dane harmonogramu punktu.  |

Waypointy są zapisywane wraz ze śladem w [pliku GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Każdy z tych waypointów ma własny zestaw tagów do opisu. Wszystkie tagi bezpośrednio związane z opisem waypointów, które można edytować bezpośrednio w aplikacji OsmAnd, są wymienione w tej sekcji.  
Aby zmienić opis waypointu, można postąpić na jeden z następujących sposobów:
  
1. Znajdź wymagany ślad na liście w zakładce *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Dotknij śladu na mapie, jeśli jest on na [liście widocznych](../tracks/index.md#display-tracks-on-the-map).
3. Dotknij wymaganego waypointu, jeśli jest on [widoczny](../../personal/tracks/manage-tracks.md#track-menu) na mapie.  

    Następnie w [menu kontekstowym śladów](./track-context-menu.md) dotknij *punkty*, pola wymaganego folderu z dostępnymi waypointami i szukanego waypointu. Wybierz menu *Akcje →* **Edytuj waypoint GPX** i wprowadź zmiany. W aplikacji nie można zmienić daty utworzenia punktu, *znacznika czasu*.  

**Tagi udogodnień**, które opisują dodatkowe informacje, takie jak godziny otwarcia lub numer telefonu, specyficzne dla POI, pobierają te informacje z danych OpenStreetMap lub danych wprowadzonych podczas tworzenia POI. Możesz edytować takie tagi i [tagi niestandardowe](#display-custom-gpx-tags) tylko w kodzie pliku GPX, który można otworzyć dowolnym edytorem tekstu na urządzeniu.


## Analizuj według interwałów {#analyze-by-intervals}

<InfoAndroidOnly />

![Podział śladu według Androida](@site/static/img/personal/tracks/split_by_1.png) 

Opcja **Analizuj według interwałów** pozwala podzielić ślad na sekcje i wyświetlić szczegółowe statystyki dla każdej części trasy. Ślady można podzielić według parametrów ***odległości***, ***czasu*** lub ***wzniesień/spadków***. 

Aby otworzyć tę opcję:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → wybierz żądany tryb podziału 


### Podziel według odległości {#split-by-distance}

![Zakładka podziału śladu według odległości](@site/static/img/personal/tracks/split_by_2_new_tab.png) ![Mapa podziału śladu według odległości](@site/static/img/personal/tracks/split_by_2_map.png)  

Ta opcja pozwala podzielić ślad na interwały o stałej odległości i analizować szczegółowe statystyki dla każdego segmentu. Dostępne interwały odległości to ***20 m***, ***50 m***, ***100 m***, ***200 m***, ***500 m***, ***1 km***, ***2 km***, ***5 km*** i ***10 km***. Po wybraniu interwału odległości ślad jest wyświetlany jako lista segmentów. 

Dla każdego segmentu możesz wyświetlić:
- przebytą odległość.
- czas trwania.
- średnią, minimalną i maksymalną wysokość.
- wzniesienie i spadek.
- czas w ruchu.
- średnią i maksymalną prędkość.

Po dotknięciu dowolnego segmentu na liście widok mapy pokazuje cały ślad z jego interwałami i otwiera menu kontekstowe śladu na dole ekranu.


### Podziel według czasu {#split-by-time}

![Zakładka podziału śladu według czasu](@site/static/img/personal/tracks/split_by_3_new_tab.png) ![Mapa podziału śladu według czasu](@site/static/img/personal/tracks/split_by_3_map.png) 

Opcja **Podziel według czasu** dzieli ślad na interwały o równej długości. Możesz wybrać między ***1 min***, ***2 min***, ***2,5 min***, ***5 min***, ***10 min***, ***15 min***, ***30 min*** i ***60 min***. Sposób wyświetlania interwałów, statystyki podane dla każdego segmentu oraz sposób ich wyświetlania na mapie są takie same jak w sekcji [Podziel według odległości](#split-by-distance).


### Podziel według wzniesień/spadków {#split-by-uphill-downhill}

![Zakładka podziału śladu według wzniesień/spadków](@site/static/img/personal/tracks/split_by_4_new_tab.png) ![Mapa podziału śladu według wzniesień/spadków](@site/static/img/personal/tracks/split_by_4_map.png) 

Ta opcja dzieli ślad na segmenty na podstawie zmian wysokości. Każdy interwał jest klasyfikowany jako ***wzniesienie***, ***spadek*** lub ***płasko***. Sposób wyświetlania interwałów, statystyki podane dla każdego segmentu oraz sposób ich wyświetlania na mapie są również takie same jak w sekcji [Podziel według odległości](#split-by-distance).


### Metryki tętna {#heart-rate-metrics}

![Metryki tętna](@site/static/img/personal/tracks/heart_rate.png)

Ta opcja pozwala wyświetlić średnie, minimalne i maksymalne wartości tętna (uderzenia na minutę, bpm) dla każdego interwału śladu. Dane o tętnie są pobierane z pliku GPX śladu lub rejestrowane bezpośrednio z podłączonego [zewnętrznego czujnika tętna](https://osmand.net/docs/user/plugins/external-sensors) (BLE). Jeśli dane o tętnie nie są dostępne, ten wiersz jest ukryty w tabeli interwałów.

**Uwaga:** Możesz podłączyć monitor tętna BLE za pomocą *<Translate android="true" ids="shared_string_plugin,external_sensors_plugin_name"/>* , aby rejestrować dane HR bezpośrednio w OsmAnd.


## Filtr GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Ekran filtra GPS Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Ten filtr pozwala poprawić statystyki śladu, wykluczając niepotrzebne lub nieprawidłowe dane. Możesz odfiltrować punkty śladu, które nie pasują do parametrów śladu, a w rezultacie uzyskać dokładniejszy wykres i wizualną linię trasy bez zniekształceń i szumów nagrania. Możesz wprowadzać zmiany za pomocą filtrów takich jak *Wygładzanie*, *Prędkość*, *Wysokość* i *Precyzja GPS*, które ukrywają odfiltrowane punkty z bieżącego śladu. Poza tym w menu *Statystyki* możesz sprawdzić, jak Twoje zmiany są wyświetlane na wykresie, zanim je zapiszesz. Możesz również *Przywrócić oryginał* i *Zapisać jako kopię* swojego śladu w tym filtrze bez zapisywania oryginału.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Strona aplikacji Filtr GPS na Androida zawiera:

- Mapę z zapisanym śladem i dodatkowym przyciskiem *Lokalizacja mojego śladu* (wyrównuje ślad do środka mapy).
- Przyciski *Odśwież* i *Menu* na górze (*Menu* otwiera pole *Akcja* na dole strony).
- Bloki *Filtr*, *Statystyki*, *Akcja*.  


### Menu filtra {#filter-menu}

W tym menu można zmienić niektóre parametry śladu, takie jak *Wygładzanie*, *Prędkość*, *Wysokość* lub *Precyzja GPS* za pomocą filtrów. Menu jest podzielone na *część Punktów* i *część Akcji*.

| ***Punkty*** |
|:------------|
|Ta część pokazuje liczbę punktów po filtrowaniu i całkowitą liczbę punktów na wybranym śladzie przed użyciem filtrów.|
|![Liczby punktów ekranu filtra GPS Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Akcje*** |
|*Wygładzanie*. Ustawia próg odległości między punktami. Punkty śladu, które są co najmniej w tej odległości od ostatniego widocznego punktu, są ukrywane. Wszystkie punkty na śladzie, które są w odległości od siebie mniejszej niż odległość wybrana przez filtr, zostaną ukryte. Punkty śladu są liczone od ostatniego widocznego punktu. Należy pamiętać, że wysokie progi mogą nadmiernie uprościć geometrię śladu.|
|![Liczby wygładzania filtra GPS Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Prędkość*. Na wykresie i mapie wyświetlane są tylko punkty śladu odpowiadające wybranemu przedziałowi prędkości, pozostałe są ukryte.|
|![Liczby prędkości filtra GPS Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Wysokość*. Na wykresie i mapie wyświetlane są tylko punkty śladu odpowiadające wybranemu przedziałowi wysokości, pozostałe są ukryte.|
|![Liczby wysokości filtra GPS Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precyzja GPS*. Ustawia maksymalną dopuszczalną wartość dla HDOP. Punkty o wyższej wartości są ukrywane.|
|![Liczby precyzji filtra GPS Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Statystyki {#statistics}

![Wykres filtra GPS Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_new_andr.png)

Zakładka Statystyki wyświetla informacje o **zmodyfikowanym** śladzie, czyli śladzie bez odfiltrowanych wartości. Jest to wyświetlane w blokach statystyk i danych wykresu.
  
- Część *Dane* pokazuje statystyki podobne do [menu Filtra](#filter-menu).  
- Część *Wykres* wyświetla trzy typy wykresów według parametrów: Przegląd, Wysokość i Prędkość. Ta funkcjonalność jest kopią [wykresu śladu](#altitude--speed-graphs).

### Akcje {#actions}

![Akcja filtra GPS Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Lista akcji jest dostępna na dole zakładki **Filtr** lub **Statystyki**. OsmAnd stosuje wszystkie zmiany wprowadzone w śladzie bez aktualizacji pliku, ale można zapisać zmiany ręcznie.

- *<Translate android="true" ids="reset_to_original"/>*. Pozwala przywrócić parametry do ich pierwotnego stanu.  
- *<Translate android="true" ids="save_as_copy"/>*. Pozwala zapisać ślad jako nowy.
- *<Translate android="true" ids="save_changes_into_file"/>*. Pozwala nadpisać ślad nowymi parametrami.  


## Powiązane artykuły {#related-articles}

- [Ślady GPX](../../personal/tracks/manage-tracks.md)
- [Ślady na mapie](./track-context-menu.md)
- [Nawigacja po śladzie](../../navigation/setup/gpx-navigation.md)
- [Planowanie trasy](../../plan-route/index.md)
- [Wtyczka Nagrywanie podróży](../../plugins/trip-recording.md)
- [Analizuj na mapie](../tracks/index.md#analyze-track-on-map)