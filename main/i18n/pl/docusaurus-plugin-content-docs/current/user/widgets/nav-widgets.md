---
source-hash: cf00228b0959bc2aae53ebe181345d3b69c04b3d0d42a49a8ed5ebc376ca2673
sidebar_position: 4
title: Widżety nawigacyjne
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

Widżety nawigacyjne są włączane podczas nawigacji w celu wyświetlania informacji, takich jak odległość, czas przybycia lub pozostały czas, następne zakręty, namiar, nazwa bieżącej ulicy, informacje o pasach ruchu, maksymalna prędkość, alerty o zbliżaniu się, POI i punkty trasy.

![Wszystkie widżety nawigacyjne](@site/static/img/widgets/navigational_widgets_all.png)


## Nawigacja aktywna i pasywna {#active-and-passive-navigation}

Widżety nawigacyjne w OsmAnd są zaprojektowane tak, aby ulepszyć zarówno **aktywny**, jak i **pasywny** tryb nawigacji. Widżety te dostarczają cennych informacji, takich jak wskazówki dotyczące trasy, szczegóły drogi i ograniczenia prędkości, w zależności od wybranego **profilu nawigacyjnego**.

#### Nawigacja aktywna {#active-navigation}

- **Wymagania:**
  - Ustaw **cel podróży**.
  - Oblicz **trasę** za pomocą funkcji *Wskazówki*.
  - **Rozpocznij** nawigację (wskazówki głosowe są opcjonalne).
  - Dostępne tylko podczas poruszania się po trasie.

- **Obsługiwane widżety:**
  - Dostępne są wszystkie **widżety nawigacyjne**.

- **Kluczowe korzyści:**
  - Zapewnia **wskazówki krok po kroku**, **wskazówki dotyczące pasów ruchu** i **ETA**.
  - Zapewnia dokładne i dynamiczne aktualizacje podczas podróży.

#### Nawigacja pasywna {#passive-navigation}

- **Jak to działa:**
  - Nie jest potrzebny cel podróży.
  - Działa automatycznie po wybraniu **profilu nawigacyjnego** (np. *Jazda samochodem*, *Jazda na rowerze*).

- **Funkcjonalność:**
  - Próbuje określić drogę, którą podążasz, używając danych GPS.
  - Wyświetla **podstawowe informacje o drodze**, takie jak [nazwa ulicy](#street-name), [informacje o pasach ruchu](#lanes), [maksymalna prędkość](#speed-limit).

- **Ograniczenia:**
  - Niektóre zaawansowane funkcje mogą nie działać poprawnie bez ustawionego celu podróży.
  - Podane informacje mogą nie zawsze być **precyzyjne**, zwłaszcza w złożonych sieciach drogowych.

> **UWAGA.** *Pamiętaj, że profil **Przeglądaj mapę** nie obsługuje widżetów nawigacyjnych w żadnym trybie. Przełącz się na odpowiedni **profil nawigacyjny**, aby włączyć te funkcje.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widżet wysokości {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Ten widżet możesz używać tylko z funkcją Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">subskrybenci OsmAnd Pro</a>.

:::

Widżet wysokości pokazuje wykres z wysokością i nachyleniem trasy nawigacyjnej oraz Twoją aktualną lokalizację na tym wykresie z aktualną wysokością i nachyleniem. Wykres jest wykreślony na dwóch osiach. Oś X to odległość Twojej trasy. Oś Y to wysokość, wartość zależy od ukształtowania terenu, a nachylenie jest wyświetlane w procentach.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widżet wysokości](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interakcje z wykresem {#interactions-with-the-graph}

- *Powiększ/pomniejsz*. Domyślnie wykres pokazuje trasę od bieżącej lokalizacji do 10 km do przodu. Możesz użyć [ruchu dwoma palcami](../map/interact-with-map#gestures), aby powiększyć i pomniejszyć, aby uzyskać bardziej szczegółowy widok zmian wysokości na trasie. Możesz również przesunąć wykres w prawo, do przodu na trasie i do tyłu do bieżącej lokalizacji.
- *Umieść punkt na wykresie*. Jeśli chcesz zobaczyć wartość wysokości i stopnia w określonym punkcie na trasie, możesz dotknąć dowolnego miejsca na wykresie, a pojawi się wskaźnik z wartościami.


#### Co zawiera {#whats-in}

Po wybraniu trasy i naciśnięciu przycisku **Start** otwiera się mapa z Twoją aktualną lokalizacją, trasą i widżetem na dole ekranu. Widżet zawiera wykres i informacje o *podjazdach*, *zjazdach*, *nachyleniu*, odległości, wysokości i kącie nachylenia. Możesz wybrać *optymalną skalę* i zobaczyć wszystkie możliwe przeszkody na trasie.

- Wszystkie wartości są wskazywane albo dla całej trasy, albo tylko dla wybranego interwału poprzez skalowanie wykresu.
- Przeczytaj o [licencji na dane DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) używane przez OsmAnd do wykrywania terenu.

| |
|:------------|
| ***Wskaźnik lokalizacji*** |
| Twoja ***bieżąca lokalizacja*** na wykresie zawiera ikonę lokalizacji, wysokość i wartość procentową nachylenia. Prawa strona widżetu zawiera najwyższą wysokość i gradient, ich średnią wartość oraz najniższą wartość na wybranym odcinku trasy widocznym na wykresie. |
| ![punkt](@site/static/img/widgets/sch_1-1.png)|
| ***Dodatkowe informacje*** |
| Prawa strona widżetu zawiera dane o najwyższej wysokości i nachyleniu, ich średnią wartość oraz najniższą wysokość i nachylenie na wybranym odcinku trasy widocznym na wykresie. |
| ![dane](@site/static/img/widgets/sch_1-2.png)|
|Wartości ***podjazdu*** i ***zjazdu*** to sumy odległości od Twojego punktu lokalizacji do końca widocznego wykresu. Jeśli na wykresie nie ma punktu lokalizacji, to jest to suma całego widocznego wykresu na ekranie (może się to zdarzyć, gdy zmienisz skalę, a lokalizacja wyjdzie poza wykres).|
| **Podjazd** – pokazuje sumę wszystkich odległości ze zwiększającą się wysokością od Twojego punktu lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez punktu lokalizacji widocznego na ekranie. |
| ![schemat podjazdu](@site/static/img/widgets/sch_uphill_1.png) ![schemat podjazdu](@site/static/img/widgets/sch_uphill_2.png)|
| **Zjazd** – pokazuje sumę wszystkich odległości ze zmniejszającą się wysokością od Twojego punktu lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez punktu lokalizacji widocznego na ekranie.|
| ![schemat zjazdu](@site/static/img/widgets/sch_downhill_1.png) ![schemat zjazdu](@site/static/img/widgets/sch_downhill_2.png)|
|***Nachylenie*** to stosunek ścieżki do poziomu, gdzie zero oznacza poziom, a liczba stopni wskazuje na większe lub bardziej strome nachylenie.|
| **Nachylenie** – pokazuje maksymalne nachylenie drogi w procentach od Twojego punktu lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez punktu lokalizacji widocznego na ekranie. |
|![schemat nachylenia](@site/static/img/widgets/sch_grade_1.png) ![schemat nachylenia](@site/static/img/widgets/sch_grade_2.png)|


## Widżet namiaru {#bearing-widget}

Namiar to kierunek do celu poza pojazdem, takiego jak cel podróży lub punkt początkowy. Namiar może być *względny* (zgodnie z Twoim kursem) lub *magnetyczny* (zgodnie z kompasem). Na przykład, namiar magnetyczny 180° to kierunek na południe, a namiar względny 180° to bezpośrednio za Tobą. Punkty kardynalne to cztery główne kierunki kompasu. Są to Północ (*N* - 0° lub 360°), Wschód (*E* - 90°), Południe (*S* - 180°) i Zachód (*W* - 270°).

![Widżet nagrywania podróży](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet nagrywania podróży](@site/static/img/widgets/bearing_widget.png) ![Widżet nagrywania podróży](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet nagrywania podróży](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="shared_string_bearing"/>* |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android:** Możesz zmienić format wyświetlania danych dla jednostek kątowych: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** Możesz zmienić format wyświetlania danych dla jednostek kątowych: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Jak to działa {#how-it-works}

Aby wyświetlić namiar, należy wybrać **punkt docelowy**. Jeśli dla nawigacji wybrano **punkt docelowy** (lub **pierwszy punkt pośredni**, jeśli taki istnieje), zostanie on użyty jako punkt docelowy. W przeciwnym razie zostanie użyty **najwyżej wybrany znacznik**.

- [Namiar względny](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) to kąt między kierunkiem Twojego ruchu do przodu a punktem docelowym. **Kierunek ruchu do przodu** to albo **kierunek Twojego ruchu** uzyskany z czujników GPS, albo jeśli stoisz **tam, gdzie skierowałeś swoje urządzenie** (tj. orientacja Twojego urządzenia zgodnie z jego kompasem magnetycznym). Przykład: Obiekt o namiarze względnym 0° znajduje się bezpośrednio przed Tobą, a obiekt o namiarze względnym 180° znajduje się bezpośrednio za Tobą. **Namiar względny** to kąt między Twoim kierunkiem do przodu a punktem docelowym.

- [Namiar magnetyczny](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) to kąt zgodny z ruchem wskazówek zegara (poziomy) między północą magnetyczną a punktem docelowym obserwowanym z Twojej lokalizacji. Musisz podążać za tą wartością kompasu magnetycznego, aby dotrzeć do celu. Przykład: Jeśli **namiar magnetyczny** jest pokazany jako 0° M, musisz poruszać się ściśle w kierunku północy magnetycznej, aby dotrzeć do punktu docelowego.

- [Namiar rzeczywisty](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) jest wyrażony jako kąt poziomy między południkiem geograficznym a linią na Ziemi. W szczególności, **rzeczywisty namiar punktowy** to kąt mierzony w stopniach zgodnie z ruchem wskazówek zegara od linii Północy Rzeczywistej. Oprogramowanie OsmAnd pokaże Ci rzeczywisty namiar i kurs w naszym przyjaznym dla użytkownika interfejsie, ułatwiając Ci podjęcie właściwej decyzji na wczesnym etapie.

### Nawigacja wzdłuż linii loksodromy {#navigation-along-the-rhumb-line}

- **Namiar względny**. Jeśli będziesz trzymać się namiaru względnego 0 stopni i poruszać się do przodu, dotrzesz do punktu docelowego, ale nie najkrótszą drogą ([loksodroma](https://en.wikipedia.org/wiki/Rhumb_line)).
- **Namiar magnetyczny**. Jeśli ustawisz kompas na swojej łodzi/pojeździe zgodnie z wartością widżetu i będziesz poruszać się do przodu, dotrzesz do celu, ale nie najkrótszą drogą ([loksodroma](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Punkty nawigacyjne {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Grupa widżetów *Punkt nawigacyjny* pokazuje pozostałą odległość do celu, punktu pośredniego, czas przybycia do punktu pośredniego lub czas podróży dla obliczonej trasy oraz szacowany czas przybycia.

### Informacje o trasie {#route-information}


![Widżet celu podróży](@site/static/img/widgets/route_information_widget.png)

Widżet *Informacje o trasie* dostarcza danych w czasie rzeczywistym o bieżącej trasie nawigacyjnej oraz szybki sposób [zarządzania aktywną trasą](../navigation/setup/route-navigation.md#start--stop-navigation). Pomaga śledzić kluczowe szczegóły trasy i pozwala zatrzymać lub wznowić bieżącą sesję nawigacyjną z minimalną interakcją.

**Wyświetlane informacje:**

- **Szacowany czas przybycia (ETA)**. Pokazuje przewidywany czas przybycia do celu końcowego.
- **Pozostały czas podróży**. Wyświetla szacowany czas pozostały do osiągnięcia celu.
- **Odległość do celu**. Wskazuje całkowitą pozostałą odległość do celu końcowego oraz odległości do punktów pośrednich.

**Menu ustawień**:

- Wybierz **Widok domyślny**, aby nadać priorytet jednej z następujących wartości: *Szacowany czas przybycia*, *Czas do celu*, *Odległość*.
- W **Priorytecie wyświetlania** wybierz między *Najpierw cel (domyślnie)* lub *Najpierw pośredni*, aby nadać priorytet najbardziej istotnym informacjom o trasie.

> UWAGA: Widżet jest widoczny tylko podczas nawigacji.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Dodaj widżet →Informacje o trasie* |
| Po dotknięciu | Dotknij przycisku ze strzałką, aby otworzyć [panel Start/Stop nawigacji](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Odległość do celu {#distance-to-destination}

![Widżet celu podróży](@site/static/img/widgets/destination_widget.png)

Widżet wyświetla pozostałą odległość do ostatniego punktu docelowego podczas podążania obliczoną trasą.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Po dotknięciu | Przesuwa mapę do punktu docelowego. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Odległość do punktu pośredniego {#distance-to-intermediate}

![Widżet celu pośredniego](@site/static/img/widgets/intermediate_destination_widget.png)

Widżet pokazuje odległość do pierwszego punktu pośredniego wzdłuż obliczonej trasy. Po minięciu punktów pośrednich, przestrzeń zostanie zaktualizowana do następnego punktu pośredniego. Jeśli nie ma punktów pośrednich, widżet nie jest wyświetlany.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Po dotknięciu | **Jeden punkt pośredni** - przesuń mapę do punktu pośredniego. <br /> **Dwa lub więcej punktów pośrednich** - otwiera menu listy celów. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Czas do punktu pośredniego {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet czasu przybycia Czas do celu](@site/static/img/widgets/arrival_time_widget_android.png) ![Widżet czasu przybycia Czas do celu](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet czasu przybycia Czas do celu](@site/static/img/widgets/arrival_time_widget_ios.png) ![Widżet czasu przybycia Czas do celu](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Widżet pokazuje *czas przybycia* lub *czas do celu* do pierwszego punktu pośredniego. Podczas nawigacji czas jest stale aktualizowany, a gdy tylko punkt pośredni zostanie minięty, czas zostanie zaktualizowany do następnego punktu trasy. Na przykład, jeśli zatrzymasz nawigację, *czas do celu* pozostanie niezmieniony, a *czas przybycia* będzie równy *czasowi do celu* plus *aktualny czas*.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Po dotknięciu | Zmienia się między *czasem przybycia* a *czasem do celu* i odwrotnie. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Czas do celu {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet czasu przybycia pośredniego](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet czasu przybycia pośredniego](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Widżet wyświetla *czas przybycia* lub *czas do celu* do ostatniego punktu docelowego. Czas jest stale aktualizowany podczas nawigacji i jest równy czasowi trasy od Twojej bieżącej lokalizacji.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Po dotknięciu | Zmienia się między *czasem przybycia* a *czasem do celu* i odwrotnie. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


## Ograniczenie prędkości {#speed-limit}

![Widżet ograniczenia prędkości](@site/static/img/widgets/speed_limit_widget_2.png)

Widżet *Ograniczenie prędkości* wyświetla aktualne ograniczenie prędkości na podstawie danych mapy dla Twojej trasy.

- Dane pochodzą z projektu [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Widżet działa w trybach nawigacji pasywnej i aktywnej.
- Jeśli dane o ograniczeniu prędkości są niedostępne dla określonej drogi lub obszaru, *widżet nie pojawi się*.

> UWAGA: Upewnij się, że Twoje [mapy są aktualne](../personal/maps-resources.md#updates) i że pobrałeś wszystkie niezbędne dane regionalne, aby uzyskać dostęp do najnowszych informacji o ograniczeniach prędkości.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Po dotknięciu | Brak zmian |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


## Manewry na trasie {#route-maneuvers}

![Widżet następnych zakrętów](@site/static/img/widgets/next_turns_widget.png)

Ten zestaw widżetów nawigacyjnych jest aktywowany podczas nawigacji i wyświetla informacje o odległości do następnego manewru.

| | |
|:------------|:------------|
| Włącz | **Android:** *Menu → Konfiguruj ekran → Lewy / Prawy panel → Dodaj widżet → Manewry na trasie → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Lewy / Prawy panel → Dodaj widżet → Manewry na trasie → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| Po dotknięciu | Jeśli włączone są [komunikaty głosowe](../navigation/guidance/voice-navigation.md), następny manewr i odległość do niego są wypowiadane. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Następny zakręt {#next-turn}

![Widżet następnych zakrętów](@site/static/img/widgets/next_turns_widgets_andr.png)

Widżety *Manewry na trasie* zawierają informacje o:

- **Następny zakręt** - następny zakręt z dużą strzałką przedstawiającą manewr i danymi o odległości do niego.
- **Następny zakręt (mały)** - następny zakręt z małą strzałką przedstawiającą manewr i danymi o odległości obok strzałki.
- **Drugi następny zakręt** - następny zakręt po pierwszym zakręcie, który jest aktywowany, jeśli znajduje się w zasięgu podejścia.

| | |
|:------------|:------------|
| Włącz | **Android:** *Menu → Konfiguruj ekran → Lewy / Prawy panel → Dodaj widżet → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Lewy / Prawy panel → Dodaj widżet → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| Po dotknięciu | Jeśli włączone są [komunikaty głosowe](../navigation/guidance/voice-navigation.md), następny manewr i odległość do niego są wypowiadane. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Kolorowe podpowiedzi dla następnego zakrętu {#color-prompts-for-next-turn}

Ta tabela przedstawia przybliżony czas do aktywacji podpowiedzi i odpowiadające im kolorowe wskazania strzałek do wykonania manewru. Więcej informacji można znaleźć w [dokumentacji technicznej](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) lub w artykule [Komunikaty głosowe](../navigation/guidance/voice-navigation.md).

| Kolor | ~ Czas wyzwolenia | Odległość | Typ podpowiedzi |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Zielony | 5 sekund | Blisko | Skręć teraz |
| 🟡 Żółty | 20 sekund | Zbliżanie się | Skręć za `x` m |
| ⚪ Szary | > 100 sekund | Daleko | Przygotuj się do skrętu |


## Pasy ruchu {#lanes}

![Widżety pasów ruchu](@site/static/img/widgets/lanes_widget.png)

Widżet **Pasy ruchu** podświetla bieżący pas ruchu, gdy nawigacja jest aktywna i wyświetla układ pasów ruchu dla rzeczywistej drogi, gdy nawigacja jest pasywna. Dane pochodzą z projektu [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Dodaj widżet → <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="show_lanes"/>* |
| Po dotknięciu | Brak zmian |

### Kolorowe podpowiedzi dla pasów ruchu {#color-prompts-for-lanes}

Wyświetla widżet według ustawień czasu podejścia. Kolor pasa jest powiązany z [komunikatami głosowymi](../navigation/guidance/voice-navigation.md) i czasem pozostałym do wykonania manewru.

| Kolor | ~ Czas wyzwolenia | Odległość | Typ podpowiedzi |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Zielony | 5 sekund | Blisko | [Skręć teraz](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Żółty | 20 sekund | Zbliżanie się | [Skręć za X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Wskazówki dotyczące trasy {#route-guidance}

<InfoAndroidOnly />

![widżet wskazówek dotyczących trasy](@site/static/img/widgets/route_guidence_widgets_andr.png)

Zapewnia wskazówki dotyczące trasy w czasie rzeczywistym, w tym odległość do następnego zakrętu, nazwę drogi, nazwę bieżącej ulicy i informacje o pasach ruchu. Widżety są aktywne podczas nawigacji.

Widżety *Wskazówki dotyczące trasy* zawierają informacje o:

- [Pasy ruchu](#lanes) - pokazuje aktualne położenie pasów ruchu i podświetla te, po których należy jechać.
- **Następny zakręt** - następny zakręt z dużą strzałką przedstawiającą manewr i danymi o odległości do niego.
- **Drugi następny zakręt** to następny zakręt po pierwszym zakręcie, który jest aktywowany, jeśli znajduje się w zasięgu podejścia.

| | |
|:------------|:------------|
| Włącz | **Android:** *Menu → Konfiguruj ekran → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → Pas ruchu, Następny zakręt, Drugi następny zakręt* |
| Po dotknięciu | **Następny zakręt**: Jeśli włączone są [komunikaty głosowe](../navigation/guidance/voice-navigation.md), następny manewr i odległość do niego są wypowiadane. <br/> **Pas ruchu**: Brak zmian. |
| Długie naciśnięcie | **Następny zakręt**: Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) <br/> **Pas ruchu**: Brak zmian. |


## Widżet alertów {#alert-widget}

![Widżety informacji o alertach](@site/static/img/widgets/alert_information_widget.png)

**Widżet alertów** łączy kilka typów alertów, które są wyświetlane w lewym dolnym rogu podczas nawigacji.

- Masz możliwość włączania i wyłączania alertów, takich jak *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* i *<Translate android="true" ids="show_tunnels"/>*. Inne alerty są aktywne domyślnie, jeśli widżet jest włączony.

- Dla typu alertu *Ograniczenie prędkości* możesz dostosować wartość <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) w ustawieniach komunikatów głosowych, aby lepiej dopasować prędkość pojazdu i prędkość GPS.

- Większość alertów jest wyświetlana na ekranie i ogłaszana komunikatem głosowym przez 15 sekund, a także czas wyzwolenia dla przejazdu przez punkt trasy, ulubiony punkt lub POI. Przeczytaj więcej [tutaj](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Włącz | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Typy alertów {#alert-types}

Typy alertów mają inny wygląd wizualny, który zależy od **<Translate android="true" ids="driving_region"/>** i można go skonfigurować za pomocą *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd nie ma na celu przedstawiania w 100% identycznych znaków drogowych, ale wskazuje na pewne podobieństwa.

| | | |
|:------------|:------------|:------------|
| Nazwa | Opis | Ikona |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Uspokojenie ruchu](https://en.wikipedia.org/wiki/Traffic_calming) wykorzystuje fizyczne rozwiązania i inne środki w celu poprawy bezpieczeństwa kierowców, pieszych i rowerzystów. | ![Widżety uspokajania ruchu](@site/static/img/widgets/warnings_traffic_calming.png) ![Widżety uspokajania ruchu w USA](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Przejście dla pieszych](https://en.wikipedia.org/wiki/Pedestrian_crossing) (głównie brytyjski angielski) lub przejście to miejsce wyznaczone dla pieszych do przekraczania drogi, ulicy lub alei. OsmAnd pokazuje alert o niekontrolowanym przejściu dla pieszych. | ![Widżety uspokajania ruchu](@site/static/img/widgets/warnings_pedestrian.png) ![Widżety uspokajania ruchu w USA](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | W większości krajów [ograniczenia prędkości](https://en.wikipedia.org/wiki/Speed_limit) określają prawnie maksymalną, średnią lub minimalną prędkość, z jaką pojazdy drogowe mogą poruszać się na danym odcinku drogi. W OsmAnd alert jest wyświetlany, gdy przekroczysz prędkość. Możesz ustawić parametry przekroczenia prędkości (0, 5, 10.. km/h). ![Widżety alertów przekroczenia prędkości](@site/static/img/widgets/ex_warning_speed.png) | ![Widżety ograniczenia prędkości](@site/static/img/widgets/warnings_limit.png) ![Widżety ograniczenia prędkości w CA](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widżety ograniczenia prędkości w USA](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Tunel to podziemne przejście, prowadzące pod górą, rzeką lub zatłoczonym obszarem miejskim. W OsmAnd alert *Tunele* zawiera informacje o długości tunelu. Jeśli jesteś w tunelu, pokazuje odległość do końca tunelu. ![Widżety alertów tunelu](@site/static/img/widgets/ex_warning_tunnel.png) | ![Widżety ostrzeżeń tunelu](@site/static/img/widgets/warnings_tunnel.png) ![Widżety ostrzeżeń tunelu w USA](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Kamery do egzekwowania przepisów ruchu drogowego](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) i [fotoradary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) rejestrują wykroczenia drogowe, w tym przekraczanie prędkości, przejeżdżanie na czerwonym świetle i inne rodzaje nielegalnych zachowań. <br />**UWAGA:** Alerty o fotoradarach są zabronione lub nielegalne w niektórych krajach. Aby całkowicie [usunąć fotoradary](../personal/global-settings.md#legal) z OsmAnd, przejdź do głównego *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Widżety uspokajania ruchu](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Znak stopu](https://en.wikipedia.org/wiki/Stop_sign) to znak drogowy zaprojektowany w celu powiadamiania kierowców, że muszą się całkowicie zatrzymać i upewnić się, że skrzyżowanie jest bezpiecznie wolne od pojazdów i pieszych, zanim przejadą obok znaku. | ![Widżety stopu](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |To ostrzeżenie oznacza, że przed nami znajduje się [przejazd kolejowy](https://en.wikipedia.org/wiki/Crossbuck). | ![Widżety ostrzeżeń kolejowych](@site/static/img/widgets/warnings_railways.png) ![Widżety ostrzeżeń kolejowych w CA](@site/static/img/widgets/warnings_railways_ca.png) ![Widżety ostrzeżeń kolejowych w USA](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |To ostrzeżenie wskazuje, że przed nami znajduje się kontrola graniczna.| ![Widżety kontroli granicznej](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Symbole zagrożenia lub symbole ostrzegawcze](https://en.wikipedia.org/wiki/Hazard_symbol) to rozpoznawalne symbole zaprojektowane w celu ostrzegania o niebezpiecznych materiałach, miejscach lub obiektach, w tym prądach elektrycznych, truciznach i radioaktywności. | ![Widżety ostrzeżeń o zagrożeniach](@site/static/img/widgets/warnings_hazard.png) ![Widżety ostrzeżeń o zagrożeniach w USA](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | To ostrzeżenie wskazuje, że przed nami znajduje się punkt poboru opłat za drogę płatną. ![Widżety punktu poboru opłat](@site/static/img/widgets/ex_toll_booth.png) | ![Widżety ograniczenia prędkości](@site/static/img/widgets/warnings_limit.png) |


## Nazwa ulicy {#street-name}

Widżet nazwy ulicy pokazuje **nazwę bieżącej ulicy** z prostą strzałką lub **nazwę następnej ulicy** z manewrem do wykonania. Nazwa ulicy zazwyczaj składa się z tarczy autostradowej, [nazwy](https://wiki.openstreetmap.org/wiki/Key:name), [referencji](https://wiki.openstreetmap.org/wiki/Key:ref), [referencji międzynarodowej](https://wiki.openstreetmap.org/wiki/Key:int_ref) i [celu](https://wiki.openstreetmap.org/wiki/Key:destination). Przełączanie między nazwą bieżącej ulicy a nazwą następnej ulicy następuje, gdy zbliżasz się do miejsca, w którym chcesz wykonać manewr (~20 sekund), podobnie jak komunikat głosowy [Skręć za X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Podczas jazdy ulicą lub autostradą widżet pokazuje nazwę lub oznaczenie bieżącej ulicy (drogi) z niebieską strzałką.

  ![Widżet POI nazwy ulicy_2](@site/static/img/widgets/street_name_widget_2.png)

- Po zmianie kierunku widżet pokazuje schemat manewru i nazwę (oznaczenie) ulicy (drogi), w którą należy skręcić.

  ![Widżet POI nazwy ulicy](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="map_widget_top_text"/>* |
| Po dotknięciu | Brak zmian |


## Zbliżanie się do POI / Ulubionych {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zbliżanie się do POI/Ulubionych Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zbliżanie się do POI/Ulubionych iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Widżet **Zbliżanie się do POI/Ulubionych/Punktów trasy** jest połączony z [Nazwą ulicy](#street-name) i wyświetla zbliżające się i mijane punkty zainteresowania, punkty trasy śledzonej trasy oraz ulubione wzdłuż trasy.

Wyświetla **nazwę**, **ikonę punktu** i 2 **odległości**:

- **Odległość na trasie** (góra) pokazuje, jaką odległość należy pokonać, podążając trasą.
- **Odległość odchylenia** to prosta odległość od najbliższego punktu trasy do samego punktu.

**iOS** - Oprócz odległości do najbliższego punktu trasy, wyświetlana jest również strona (lewa lub prawa) trasy, na której znajduje się punkt trasy.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Rozpocznij nawigację → przycisk ołówka* |
| Po dotknięciu | Brak zmian |


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promienia i linijka](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)

> *Ostatnia aktualizacja: kwiecień 2025*