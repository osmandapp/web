---
source-hash: 7e2ccc0ea2e0d19c95b956a22f974da03bc1dcae580234c1cfcce8ededbdeb06
sidebar_position: 4
title:  Menu kontekstowe śladu
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

*Menu kontekstowe śladu* dostarcza informacji o *[Śladzie](../../personal/tracks/index.md)* zarówno w formie tekstowej, jak i [graficznej](#altitude--speed-graphs). Umożliwia dodawanie informacji, wprowadzanie zmian, edytowanie i wykonywanie różnych innych działań ze śladem. Dostęp do *menu kontekstowego śladu* można uzyskać, po prostu dotykając wybranego śladu na mapie lub korzystając z menu *[Moje miejsca](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Może być konieczne otwarcie folderu śladów i wybranie żądanego śladu, dotykając go.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Przegląd śladu {#track-overview}

Po dotknięciu śladu otwiera się pierwszy ekran *Menu kontekstowego śladu* - zakładka *Przegląd*. Na tej zakładce można znaleźć podsumowanie wybranego śladu (*[Panel informacyjny](#info-panel)*) i wykonać najczęstsze działania ze śladem za pomocą *[Menu działań śladu](#track-actions)*. Możesz zobaczyć [opis i informacje serwisowe](#description-and-info) o swoim śladzie, jeśli wysuniesz zakładkę Przegląd w górę.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### Panel informacyjny {#info-panel}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

W górnej części panelu informacyjnego widać nazwę śladu i symbol użyty do jego oznaczenia (*tylko Android*). Nazwę śladu można zmienić za pomocą funkcji zmiany nazwy w [menu Opcje](#options). Niektóre ślady (głównie *[Przewodniki turystyczne](../../plan-route/travel-guides.md#manage-as-gpx-track)*) mogą mieć krótki *[opis](#description-and-info)* i (lub) obrazek pod *Nazwą śladu*. Strzałka pokazuje *Kierunek do najbliższego punktu śladu* z [Mojej lokalizacji](../../map/interact-with-map#my-location-and-zoom).

Panel informacyjny zawiera również informacje o następujących elementach:

- *<Translate android="true" ids="distance"/>*. Pokazuje długość śladu.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Wyświetla całkowitą sumę wzniesień i spadków podczas podróży.
- *<Translate android="true" ids="altitude_range"/>*. Wskazuje minimalną i maksymalną wysokość na śladzie.

:::note
W przypadku, gdy Twój ślad został utworzony w OsmAnd lub innej aplikacji do śledzenia (więc jego punkty mają tagi [`time` i `speed`](../../plugins/trip-recording#recorded-gpx-file)), panel informacyjny będzie również zawierał informacje o *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) lub *<Translate ios="true" ids="total_time"/>* (*iOS*) (czas trwania między punktem początkowym a końcowym śladu), *<Translate android="true" ids="shared_string_time_moving"/>* (suma czasu jazdy).
:::

### Działania na śladzie {#track-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Przyciski **Pokaż / ukryj**. Zmienia widoczność śladu na mapie.
- [Wygląd](./appearance.md). Dostosuj wygląd swojego śladu.
- **Edytuj ślad** (*Android*). Otwiera ślad w [Narzędziu planowania trasy](../../plan-route/create-route.md).
- **Eksportuj** (*iOS*). Umożliwia [eksportowanie śladu](../../personal/tracks/manage-tracks.md#export).
- **Wskazówki**. Otwiera ślad w trybie *[Nawigacji](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opcje {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

Menu **Opcje** umożliwia zarządzanie i modyfikowanie wybranego śladu za pomocą różnych narzędzi i ustawień.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Kontroluje widoczność śladu na mapie.
- **<Translate android="true" ids="shared_string_appearance"/>** – Otwiera [menu Wygląd](../tracks/appearance.md) w celu dostosowania koloru, szerokości i przezroczystości śladu.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Rozpoczyna [nawigację po śladzie](../../navigation/setup/gpx-navigation.md), dopasowując trasę do wybranego śladu.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*tylko Android*) – Łączy segmenty śladu w celu wypełnienia luk.
- **<Translate android="true" ids="analyze_on_map"/>**. Otwiera narzędzie [Analizuj na mapie](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) w celu sprawdzenia wysokości, prędkości i odległości śladu.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*tylko Android*) - Analizuje ślad według [interwałów](./track-context-menu.md#split-interval) czasowych lub odległościowych.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Eksportuje wybrany ślad w formacie GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Przesyła](../../plugins/osm-editing.md#upload-gps-track) wybrany ślad do OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Otwiera narzędzie [Planuj trasę](../../plan-route/create-route.md) do modyfikacji śladu.
- **Duplikuj ślad** (*tylko iOS*) – Tworzy i zapisuje kopię śladu.
- **<Translate android="true" ids="rename_track"/>** – Umożliwia zmianę nazwy śladu.
- **<Translate android="true" ids="change_folder"/>** – Przenosi ślad do innego folderu lub tworzy nowy.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*tylko Android*) - Umożliwia [filtrowanie punktów śladu](#gps-filter) w celu poprawy dokładności.
- **<Translate android="true" ids="altitude_correction"/>** (*tylko Android*) - Aby [uzyskać dane wysokościowe](#calculate-missing-elevation), [dołącz swój ślad do dróg](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) lub oblicz je offline (wymagane [Mapy terenu](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*tylko Android*) - [Symuluje Twoją pozycję](../../plugins/development.md#gpx-track-simulation) za pomocą śladu GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Usuwa ślad.


### Opis i informacje {#description-and-info}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png) ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

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

<summary>Przykład kodu XML pliku GPX</summary>

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


### Aktywność informacji o śladzie {#track-information-activity}

<InfoAndroidOnly />

![Track Information Activity](@site/static/img/personal/tracks/track_info_activity_andr.png)

Funkcja *Aktywność* w OsmAnd umożliwia tagowanie nagranych śladów GPX określonymi aktywnościami w celu dalszej analizy i organizacji w folderach.

- [Tagi aktywności dla śladów GPX](../../plugins/trip-recording.md#recording-settings). Podczas nagrywania śladu GPX można przypisać typ aktywności. To tagowanie aktywności pomaga wstępnie kategoryzować ślady.
- [Filtr aktywności](../../personal/tracks/smart-folder.md#search-filter). Możesz filtrować nagrane ślady GPX według aktywności, co pozwala skupić się na znajdowaniu określonych typów nagrań, takich jak wszystkie ślady rowerowe lub piesze.
- [Zarządzaj typami aktywności](../../personal/tracks/manage-tracks.md#selection-mode). Możesz zmienić typ aktywności dla wybranych folderów lub śladów, używając trybu wyboru w zakładce Ślady w menu Moje miejsca.
- **Lista aktywności**. Kategorie i grupy aktywności są zdefiniowane w zasobach OsmAnd. Dla programistów i współtwórców lista aktywności jest utrzymywana w ustrukturyzowanym formacie w [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), która szczegółowo opisuje dostępne grupy i typy aktywności.


## Wykresy wysokości / prędkości {#altitude--speed-graphs}

Na zakładce *<Translate android="true" ids="shared_string_gpx_track"/>* można znaleźć informacje o śladzie w formie graficznej. Za pomocą przełącznika można wybrać, które dane mają być wyświetlane na wykresie: oddzielne dane o *[<Translate android="true" ids="altitude"/>](#altitude)*, o *[Prędkości](#speed)* (ta opcja jest dostępna tylko dla nagranych śladów) lub wyświetlać wszystko razem (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interakcja z wykresem:

- ***Umieść punkt na wykresie***. Jeśli chcesz zobaczyć informacje w określonym punkcie śladu, możesz dotknąć dowolnego miejsca na wykresie, a pojawi się wskaźnik z wartościami. Jednocześnie na mapie pojawi się niebieski znacznik, wskazujący to miejsce na śladzie.
- ***Powiększanie/pomniejszanie***. Możesz użyć [ruchów dwoma palcami](../../map/interact-with-map.md#gestures), aby powiększyć i pomniejszyć w celu uzyskania bardziej szczegółowego widoku. Po powiększeniu możesz przesuwać wykres w prawo i w lewo, co odpowiada poruszaniu się do przodu i do tyłu wzdłuż trasy.
- ***Dodatkowe informacje***. Prawa strona wykresu zawiera dane o najniższej, najwyższej i średniej wysokości, nachyleniu i prędkości. Na dole wykresu widać znaczniki odległości.


### Informacje ogólne {#overview-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Na zakładce **Przegląd** można zobaczyć takie parametry jak:

- *<Translate android="true" ids="distance"/>*. Suma całkowitej przebytej odległości na śladzie lub długość samego śladu.
- *<Translate android="true" ids="shared_string_time_span"/>*. Przedział czasu między punktem początkowym a końcowym śladu.
- *<Translate android="true" ids="shared_string_start_time"/>* Dokładny czas rozpoczęcia nagrywania śladu.
- *<Translate android="true" ids="shared_string_end_time"/>*. Czas zakończenia nagrywania śladu.

Aktywne **przyciski** dają dostęp do działań takich jak:

- Przycisk **<Translate android="true" ids="analyze_on_map"/>** otwiera [menu Analizuj ślad](../tracks/index.md#analyze-track-on-map) dla śladu.
- Przycisk **<Translate android="true" ids="shared_string_options"/>** otwiera menu z:

  - *Edytuj* otwiera ślad w [narzędziu Planuj trasę](../../plan-route/index.md).
  - *Usuń* umożliwia usunięcie wybranego elementu śladu.
  - *Podziel interwał* otwiera [funkcję Podziel interwał](#split-interval) dla śladu.


### Prędkość {#speed}

:::note Tylko nagrane ślady
Ta zakładka jest widoczna tylko na nagranych śladach. Punkty na tego typu śladach mają tagi **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Wykres **Prędkość** wyświetla metryki takie jak:

- *<Translate android="true" ids="average_speed"/>*. Wskazuje średnią prędkość podczas podróży.
- *<Translate android="true" ids="max_speed"/>*. Pokazuje maksymalną prędkość podczas podróży.
- *<Translate android="true" ids="moving_time"/>*. Pokazuje całkowity czas ruchu podczas podróży.
- *<Translate android="true" ids="distance_moving"/>*. Wskazuje skorygowaną odległość podróży.


### Wysokość {#altitude}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Wykres **Wysokość** wyświetla metryki takie jak:

- *<Translate android="true" ids="average_altitude"/>*. Wskazuje średnią wysokość nad poziomem morza na trasie.
- *<Translate android="true" ids="altitude_range"/>*. Najwyższa i najniższa wysokość zarejestrowana na trasie.
- *<Translate android="true" ids="altitude_ascent"/>*. Skumulowany wzrost wysokości nad poziomem morza wzdłuż trasy.
- *<Translate android="true" ids="altitude_descent"/>*. Skumulowana utrata wysokości wzdłuż trasy.

**Uzyskaj dane wysokościowe.**
Jeśli na trasie *brak informacji o wysokości*, możesz je dodać w następujący sposób:

- *Przycisk Oblicz wysokość → [Użyj pobliskich dróg](../../plan-route/create-route.md#get-elevation-data)*. Wykorzystuje mapę offline do znalezienia pobliskich dróg i danych wysokościowych. Pozwala dostosować geometrię śladu.
- [Użyj map terenu](#calculate-missing-elevation). Wykorzystuje mapy terenu do uzyskania danych wysokościowych. Geometria śladu pozostaje niezmieniona.


### Oblicz brakującą wysokość {#calculate-missing-elevation}

:::note Subskrypcja OsmAnd Pro
Funkcja obliczania wysokości offline jest dostępna tylko dla [**subskrybentów OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Ta funkcja umożliwia obliczenie profilu wysokości dla śladu GPX offline dla dowolnego terenu między 70 stopniami szerokości geograficznej północnej a 70 stopniami szerokości geograficznej południowej, na podstawie [danych map terenu](../../plugins/topography.md#download-maps). *Mapy terenu (3D) powinny być wcześniej pobrane*.

1. Pobierz [mapy terenu (3D)](../../plugins/topography.md#download-maps) dla wymaganego regionu.
2. Jeśli ślad nie zawiera żadnych danych wysokościowych, przejdź do menu kontekstowego śladu (*Menu kontekstowe śladu → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), wybierz *Użyj map terenu*, a po obliczeniu otrzymasz wykres śladu na podstawie danych terenu.

    ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png) ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png) <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png) ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Jeśli tworzysz trasę za pomocą narzędzia [Planuj trasę](../../plan-route/create-route.md#graph) metodą *Linii prostej* i na wykresie nie ma danych wysokościowych, musisz:
    - Dotknij *Uzyskaj dane wysokościowe*, a następnie wybierz *Użyj map terenu*.
    - Po obliczeniu otrzymasz kompletny wykres wysokości/nachylenia trasy na podstawie danych terenu.

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png) ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Punkty / Punkty trasy {#points--waypoints}

Punkty trasy to jeden z typów punktów dostępnych na mapie. Ogólnie rzecz biorąc, mogą to być punkty śladu, które są częścią plików GPX. Szczegółowy opis znajduje się w artykule [punkty na mapie](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

W tej zakładce *Punkty*:

- [Pokaż dane punktów śladu](#display-custom-gpx-tags) i modyfikuj punkty śladu (punkty trasy i punkty trasy), [usuń je i dodaj](#points--waypoints) punkty trasy do śladu.
- Twórz i modyfikuj [Grupę (folder) punktów](#waypoint-groups).


### Dodaj punkt trasy do śladu {#add-waypoint-to-a-track}

Punkty trasy można dodawać do aktualnie nagrywanego śladu lub do dowolnego śladu z listy [*Moje miejsca → Lista śladów*](../../personal/tracks/manage-tracks.md):

- Użyj [menu kontekstowego mapy](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint).
  - Punkty trasy są automatycznie wyświetlane, jeśli wybrany ślad jest włączony na mapie.
  - [Długie dotknięcie](../../map/map-context-menu.md#select-any-point-long-tap) mapy w dowolnym wybranym miejscu, aby utworzyć punkt trasy.
  - Możesz ustawić informacje o punkcie trasy w otwartym [menu kontekstowym mapy](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Użyj przycisku [Dodaj punkt trasy](#points--waypoints) w menu kontekstowym śladu.

- Dodaj punkt trasy jako przycisk [Szybka akcja](../../widgets/quick-action.md#my-places).

#### Utwórz punkt trasy {#create-waypoint}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png) ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png) ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Dotknij przycisku *Dodaj punkt trasy*, aby otworzyć ekran tworzenia punktu trasy (ten ekran jest podobny do [menu kontekstowego Ulubionych](../../personal/favorites.md#create)).

1. **Dodaj** *Nazwę* punktu trasy, *Adres* wybranej lokalizacji i *Opis* (opcjonalnie).
2. **Wybierz** Grupę.

    - Wybierz wcześniej utworzone kategorie grup lub utwórz nową.
    - Utwórz nazwę i wygląd dla nowej grupy punktów trasy. Jest to również nazywane *nową kategorią* w aplikacji.
    - **Ikona**, **kolor ikony** i **kształt** zostaną użyte dla wszystkich nowych punktów trasy dodanych do grupy.

3. Ustawienie **Wygląd**:

    - Wybierz [**ikonę**](../../personal/favorites.md#favorite-icons) z listy wszystkich ikon kategorii POI.
    - Wybierz **Kolor** ikony.
    - Następnie wybierz **Kształt** ikony: *Koło, Ośmiokąt, Kwadrat*.

4. **Zastąp** inny punkt tym, jeśli potrzebujesz.


### Działania z grupami {#actions-with-groups}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

*Menu z trzema kropkami* ( &#8285; ) otwiera *Menu grupy* punktów trasy.

**Działania:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Umożliwia wyświetlanie lub nie wyświetlanie punktów trasy grupy na mapie. Możesz też użyć [przycisku ekranowego](#points--waypoints), aby wyświetlić lub pominąć punkty trasy grupy na mapie.
- **<Translate android="true" ids="shared_string_rename"/>** - Zmień nazwę grupy.
- **<Translate android="true" ids="change_default_appearance"/>** - Zmień opcje wyświetlania dla grupy punktów trasy.
- **<Translate android="true" ids="add_group_to_markers"/>** lub **Usuń** (*tylko Android*) - Przenieś punkty trasy grupy do listy [Znaczniki mapy](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*tylko Android*) - Przenieś punkty trasy grupy do [Ulubionych](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*tylko Android*) - Tworzy trasę między punktami trasy. Pierwszy i ostatni punkt stają się początkiem i końcem trasy, a reszta jest konwertowana na punkty pośrednie.
- **<Translate android="true" ids="shared_string_delete"/>** - Usuń grupę punktów trasy.


### Grupy punktów trasy {#waypoint-groups}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Zarządzaj widocznością grup na mapie: jeśli ukryjesz jeden ślad, cała grupa również zostanie ukryta.

Możesz włączać lub wyłączać grupy punktów trasy na mapie za pomocą przycisku w prawym górnym rogu menu kontekstowego śladu na mapie. Dotknij go i wybierz wymaganą akcję.

### Wyświetl niestandardowe tagi GPX {#display-custom-gpx-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Przykład kodu XML tagów punktów trasy</summary>

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

<summary>Przykład kodu XML tagów punktów trasy</summary>

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
| `lat` | **Szerokość geograficzna** to jedna ze współrzędnych geograficznych, za pomocą których można określić lokalizację. |
| `lon` | **Długość geograficzna** to kolejna ze współrzędnych geograficznych, za pomocą których można określić lokalizację. |
| `time` | **Znacznik czasu** to data i godzina, o której punkt został zarejestrowany. |
| `name` | **Nazwa** to nazwa punktu. Dozwolone są dowolne znaki. |
| `desc` | **Opis** zawiera dodatkowe informacje o punkcie. |
| `type` | **Wybierz grupę** to nazwa folderu OsmAnd, w którym zapisano ten punkt trasy. |
| `cmt` | **Komentarz** to krótki komentarz do punktu. |
| `link` | **Link** to link do dowolnych źródeł. |
| `ele` | **Wysokość** to wysokość punktu. |


**Rozszerzenia:**

| Rozszerzenie | Opis |
| --- | --- |
| `osmand:icon` | **Ikona** to nazwa wybranej ikony. |
| `osmand:color` | **Kolor** to kolor w formacie HEX. |
| `osmand:background` | **Tło** to kształt ikony, taki jak koło, ośmiokąt lub kwadrat. |
| `osmand:country` | **Kraj** to nazwa kraju. |
| `osmand:address` | **Adres** to adres. |
| `osmand:postcode` | **Kod pocztowy** to kod pocztowy. |
| `osmand:telephone` | **Telefon** to numer telefonu. |
| `osmand:state` | **Stan** to nazwa stanu. |
| `osmand:start_date` | **Data rozpoczęcia** to dane harmonogramu punktu. |

Punkty trasy są rejestrowane wraz ze śladem w [pliku GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Każdy z tych punktów trasy ma swój własny zestaw tagów do opisu. Wszystkie tagi bezpośrednio związane z opisem punktów trasy, które można edytować bezpośrednio w aplikacji OsmAnd, są wymienione w tej sekcji.
Aby zmienić opis punktu trasy, możesz postąpić w jeden z następujących sposobów:

1. Znajdź wymagany ślad na liście *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Dotknij śladu na mapie, jeśli jest on uwzględniony w [liście widocznych](../tracks/index.md#display-tracks-on-the-map).
3. Dotknij wymaganego punktu trasy, jeśli jest on [widoczny](../../personal/tracks/manage-tracks.md#track-menu) na mapie.

    Następnie w [menu kontekstowym śladów](./track-context-menu.md) dotknij *punkty*, pola wymaganego folderu z dostępnymi punktami trasy i punktu trasy, którego szukasz. Wybierz menu *Akcje →* **Edytuj punkt trasy GPX** i wprowadź zmiany. Nie możesz zmienić daty utworzenia punktu, *znacznika czasu*, w aplikacji.

**Tagi udogodnień**, które opisują dodatkowe informacje, takie jak godziny otwarcia lub numer telefonu, specyficzne dla POI, pobierają te informacje z danych OpenStreetMap lub danych wprowadzonych podczas tworzenia POI. Możesz edytować takie tagi i [niestandardowe tagi](#display-custom-gpx-tags) tylko w kodzie pliku GPX, który możesz otworzyć dowolnym edytorem tekstu na swoim urządzeniu.


## Podziel interwał {#split-interval}

<InfoAndroidOnly />

Możesz podzielić ślad na interwały, takie jak odległość i czas, i analizować go.

Podziel ślad według odległości lub interwału czasowego.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## Filtr GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Ten filtr pozwala poprawić statystyki śladu poprzez wykluczenie niepotrzebnych lub nieprawidłowych danych. Możesz odfiltrować punkty śladu, które nie pasują do parametrów śladu, a w rezultacie uzyskać dokładniejszy wykres i wizualną linię trasy bez zniekształceń i szumów nagrywania. Możesz wprowadzać zmiany za pomocą filtrów takich jak *Wygładzanie*, *Prędkość*, *Wysokość* i *Precyzja GPS*, które ukrywają odfiltrowane punkty z bieżącego śladu. Ponadto w menu *Statystyki* możesz sprawdzić, jak Twoje zmiany są wyświetlane na wykresie, zanim je zapiszesz. Możesz również *Przywrócić do oryginału* i *Zapisać jako kopię* swojego śladu w tym filtrze bez zapisywania oryginalnego.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Strona aplikacji Android GPS Filter zawiera następujące elementy:

- Mapa z zapisanym śladem i dodatkowym przyciskiem *Moja lokalizacja śladu* (dopasowuje ślad do środka mapy).
- Przyciski *Odśwież* i *Menu* u góry (*Menu* otwiera pole *Akcja* na dole strony).
- Bloki *Filtr*, *Statystyki*, *Akcja*.


### Menu filtra {#filter-menu}

W tym menu możesz zmienić niektóre parametry swojego śladu, takie jak *Wygładzanie*, *Prędkość*, *Wysokość* lub *Precyzja GPS*, używając filtrów. Menu jest podzielone na część *Punkty* i część *Akcje*.

| ***Punkty*** |
|:------------|
|Ta część pokazuje liczbę punktów po filtrowaniu i całkowitą liczbę punktów na wybranym śladzie przed zastosowaniem filtrów.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Akcje*** |
|*Wygładzanie*. Ustawia próg odległości między punktami. Punkty śladu, które są oddalone o co najmniej tę odległość od ostatniego widocznego punktu, są ukryte. Wszystkie punkty na śladzie, które są oddalone od siebie o mniej niż odległość wybrana przez filtr, zostaną ukryte. Punkty śladu są liczone od ostatniego widocznego punktu. Należy pamiętać, że wysokie progi mogą nadmiernie uprościć geometrię śladu.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Prędkość*. Tylko punkty śladu odpowiadające wybranemu interwałowi prędkości są wyświetlane na wykresie i mapie, pozostałe są ukryte.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Wysokość*. Tylko punkty śladu odpowiadające wybranemu interwałowi wysokości są wyświetlane na wykresie i mapie, pozostałe są ukryte.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precyzja GPS*. Ustawia maksymalną dopuszczalną wartość dla HDOP. Punkty o wyższej wartości są ukryte.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Statystyki {#statistics}

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

Zakładka Statystyki wyświetla informacje o **zmodyfikowanym** śladzie, co oznacza ślad bez odfiltrowanych wartości. Jest to wyświetlane w blokach statystyk i danych wykresu.

- Część *Dane* pokazuje statystyki podobne do [menu Filtr](#filter-menu).
- Część *Wykres* wyświetla trzy typy wykresów według parametrów: Przegląd, Wysokość i Prędkość. Ta funkcja jest kopią [wykresu śladu](#altitude--speed-graphs).

### Akcje {#actions}

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Lista działań jest dostępna na dole zakładki **Filtr** lub **Statystyki**. OsmAnd stosuje wszystkie zmiany wprowadzone w śladzie bez aktualizowania pliku, ale możesz zapisać zmiany ręcznie.

- *<Translate android="true" ids="reset_to_original"/>*. Umożliwia przywrócenie parametrów do stanu początkowego.
- *<Translate android="true" ids="save_as_copy"/>*. Umożliwia zapisanie śladu jako nowego.
- *<Translate android="true" ids="save_changes_into_file"/>*. Umożliwia przepisanie śladu z nowymi parametrami.


## Powiązane artykuły {#related-articles}

- [Ślady GPX](../../personal/tracks/manage-tracks.md)
- [Ślady na mapie](./track-context-menu.md)
- [Nawigacja po śladzie](../../navigation/setup/gpx-navigation.md)
- [Planuj trasę](../../plan-route/index.md)
- [Wtyczka nagrywania podróży](../../plugins/trip-recording.md)
- [Analizuj na mapie](../index.md#analyze-track-on-map)

> *Ostatnia aktualizacja: listopad 2024*