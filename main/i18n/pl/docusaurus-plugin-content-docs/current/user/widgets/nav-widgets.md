---
source-hash: 128d77aba82249d6c7c6f4680929168a77c9a1b7b68d147ef9ee216321970557
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

Widżety nawigacyjne w OsmAnd zostały zaprojektowane w celu ulepszenia zarówno trybu nawigacji **aktywnej**, jak i **pasywnej**. Widżety te dostarczają cennych informacji, takich jak wskazówki dotyczące trasy, szczegóły dotyczące drogi i ograniczenia prędkości, w zależności od wybranego **profilu nawigacyjnego**.

#### Nawigacja aktywna {#active-navigation}

- **Wymagania:**
  - Ustaw **cel podróży**.
  - Oblicz **trasę** za pomocą funkcji *Wskazówki*.
  - **Rozpocznij** nawigację (wskazówki głosowe są opcjonalne).
  - Dostępne tylko podczas poruszania się po trasie.

- **Obsługiwane widżety:**
  - Dostępne są wszystkie **widżety nawigacyjne**.

- **Kluczowe korzyści:**
  - Zapewnia **wskazówki zakręt po zakręcie**, **wskazówki dotyczące pasów ruchu** i **ETA**.
  - Zapewnia dokładne i dynamiczne aktualizacje podczas podróży.

#### Nawigacja pasywna {#passive-navigation}

- **Jak to działa:**
  - Nie jest potrzebny cel podróży.
  - Działa automatycznie po wybraniu **profilu nawigacyjnego** (np. *Jazda samochodem*, *Jazda na rowerze*).

- **Funkcjonalność:**
  - Próbuje określić drogę, którą podążasz, korzystając z danych GPS.
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

Widżet wysokości pokazuje wykres z wysokością i nachyleniem trasy nawigacyjnej oraz Twoją aktualną lokalizacją na tym wykresie z aktualną wysokością i nachyleniem. Wykres jest wykreślony na dwóch osiach. Oś X to odległość Twojej trasy. Oś Y to wysokość, wartość zależy od ukształtowania terenu, a nachylenie jest wyświetlane w procentach.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widżet wysokości](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interakcje z wykresem {#interactions-with-the-graph}

- *Powiększanie/pomniejszanie*. Domyślnie wykres pokazuje trasę od bieżącej lokalizacji do 10 km do przodu. Możesz użyć [ruchu dwoma palcami](../map/interact-with-map#gestures), aby powiększyć i pomniejszyć, aby uzyskać bardziej szczegółowy widok zmian wysokości na trasie. Możesz również przesunąć wykres w prawo, do przodu na trasie i do tyłu do bieżącej lokalizacji.
- *Umieść punkt na wykresie*. Jeśli chcesz zobaczyć wartość wysokości i stopnia w określonym punkcie na trasie, możesz dotknąć dowolnego miejsca na wykresie, a pojawi się wskaźnik z wartościami.


#### Co zawiera {#whats-in}

Po wybraniu trasy i naciśnięciu przycisku **Start** otworzy się mapa z Twoją aktualną lokalizacją, trasą i widżetem na dole ekranu. Widżet zawiera wykres i informacje o *podjazdach*, *zjazdach*, *nachyleniu*, odległości, wysokości i kącie nachylenia. Możesz wybrać *optymalną skalę* i zobaczyć wszystkie możliwe przeszkody na trasie.

- Wszystkie wartości są podane albo dla całej trasy, albo tylko dla wybranego interwału poprzez skalowanie wykresu.
- Przeczytaj o [licencji na dane DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) używane przez OsmAnd do wykrywania terenu.

| |
|:------------|
| ***Wskaźnik lokalizacji*** |
| Twoja ***bieżąca lokalizacja*** na wykresie obejmuje ikonę lokalizacji, wysokość i wartość procentową nachylenia. Prawa strona widżetu zawiera najwyższą wysokość i gradient, ich średnią wartość oraz najniższą wartość na wybranym odcinku trasy widocznym na wykresie. |
| ![punkt](@site/static/img/widgets/sch_1-1.png)|
| ***Dodatkowe informacje*** |
| Prawa strona widżetu zawiera dane o najwyższej wysokości i nachyleniu, ich średniej wartości oraz najniższej wysokości i nachyleniu na wybranym odcinku trasy widocznym na wykresie. |
| ![dane](@site/static/img/widgets/sch_1-2.png)|
|Wartości ***podjazdów*** i ***zjazdów*** to sumy odległości od Twojej lokalizacji do końca widocznego wykresu. Jeśli na wykresie nie ma punktu lokalizacji, jest to suma całego widocznego wykresu na ekranie (może się to zdarzyć, gdy zmienisz skalę, a lokalizacja wyjdzie poza wykres).|
| **Podjazd** – pokazuje sumę wszystkich odległości ze wzrostem wysokości od Twojej lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez punktu lokalizacji widocznego na ekranie. |
| ![schemat podjazdu](@site/static/img/widgets/sch_uphill_1.png) ![schemat podjazdu](@site/static/img/widgets/sch_uphill_2.png)|
| **Zjazd** – pokazuje sumę wszystkich odległości ze spadkiem wysokości od Twojej lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez punktu lokalizacji widocznego na ekranie.|
| ![schemat zjazdu](@site/static/img/widgets/sch_downhill_1.png) ![schemat zjazdu](@site/static/img/widgets/sch_downhill_2.png)|
|***Nachylenie*** to stosunek ścieżki do poziomu, gdzie zero oznacza poziom, a liczba stopni wskazuje na wyższy lub bardziej stromy stopień nachylenia.|
| **Nachylenie** – pokazuje maksymalne nachylenie drogi w procentach od Twojej lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez punktu lokalizacji widocznego na ekranie. |
|![schemat nachylenia](@site/static/img/widgets/sch_grade_1.png) ![schemat nachylenia](@site/static/img/widgets/sch_grade_2.png)|


## Widżet namiaru {#bearing-widget}

Namiar to kierunek do celu poza pojazdem, takiego jak cel podróży lub punkt początkowy. Namiar może być *względny* (zgodnie z Twoim kursem) lub *magnetyczny* (zgodnie z kompasem). Na przykład, namiar magnetyczny 180° to kierunek na południe, a namiar względny 180° to bezpośrednio za Tobą. Punkty kardynalne to cztery główne kierunki kompasu. Są to Północ (*N* - 0° lub 360°), Wschód (*E* - 90°), Południe (*S* - 180°) i Zachód (*W* - 270°).

![Widżet nagrywania podróży](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems">

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

Aby wyświetlić namiar, należy wybrać **punkt docelowy**. Jeśli dla nawigacji wybrano punkt **docelowy** (lub **pierwszy punkt pośredni**, jeśli taki istnieje), zostanie on użyty jako punkt docelowy. W przeciwnym razie zostanie użyty **najwyżej wybrany znacznik**.

- [Namiar względny](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) to kąt między kierunkiem Twojego ruchu do przodu a punktem docelowym. **Kierunek ruchu do przodu** to albo **kierunek Twojego ruchu** uzyskany z czujników GPS, albo jeśli stoisz **tam, gdzie skierowałeś swoje urządzenie** (tj. orientacja Twojego urządzenia zgodnie z jego kompasem magnetycznym). Przykład: Obiekt z namiarem względnym 0° znajduje się bezpośrednio przed Tobą, a obiekt z namiarem względnym 180° znajduje się bezpośrednio za Tobą. **Namiar względny** to kąt między Twoim kierunkiem do przodu a punktem docelowym.

- [Namiar magnetyczny](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) to kąt zgodny z ruchem wskazówek zegara (poziomy) między północą magnetyczną a punktem docelowym obserwowanym z Twojej lokalizacji. Musisz podążać za tą wartością kompasu magnetycznego, aby dotrzeć do celu. Przykład: Jeśli **namiar magnetyczny** jest pokazany jako 0° M, musisz poruszać się ściśle w kierunku północy magnetycznej, aby dotrzeć do punktu docelowego.

- [Namiar rzeczywisty](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) jest wyrażony jako kąt poziomy między południkiem geograficznym a linią na Ziemi. W szczególności, **rzeczywisty namiar punktowy** to kąt mierzony w stopniach zgodnie z ruchem wskazówek zegara od linii Prawdziwej Północy. Oprogramowanie OsmAnd pokaże Ci rzeczywisty namiar i kurs w naszym przyjaznym dla użytkownika interfejsie, ułatwiając podjęcie właściwej decyzji na wczesnym etapie.

### Nawigacja wzdłuż linii loksodromy {#navigation-along-the-rhumb-line}

- **Namiar względny**. Jeśli będziesz trzymać się namiaru względnego 0 stopni i poruszać się do przodu, dotrzesz do punktu docelowego, ale nie najkrótszą drogą ([loksodroma](https://en.wikipedia.org/wiki/Rhumb_line)).
- **Namiar magnetyczny**. Jeśli wyrównasz kompas na swojej łodzi/pojeździe z wartością widżetu i będziesz kierować się do przodu, dotrzesz do celu, ale nie najkrótszą drogą ([loksodroma](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Punkty nawigacyjne {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Grupa widżetów *Punkt nawigacyjny* pokazuje pozostałą odległość do celu, punktu pośredniego, czas przybycia do punktu pośredniego lub czas podróży dla obliczonej trasy oraz szacowany czas przybycia.

### Informacje o trasie {#route-information}


![Widżet celu podróży](@site/static/img/widgets/route_information_widget.png)

Widżet *Informacje o trasie* dostarcza danych w czasie rzeczywistym o bieżącej trasie nawigacyjnej i szybki sposób [zarządzania aktywną trasą](../navigation/setup/route-navigation.md#start--stop-navigation). Pomaga śledzić kluczowe szczegóły trasy i pozwala zatrzymać lub wznowić bieżącą sesję nawigacyjną z minimalną interakcją.

**Wyświetlane informacje:**

- **Szacowany czas przybycia (ETA)**. Pokazuje przewidywany czas przybycia do celu końcowego.
- **Pozostały czas podróży**. Wyświetla szacowany czas pozostały do osiągnięcia celu.
- **Odległość do celu**. Wskazuje całkowitą pozostałą odległość do celu końcowego i odległości do punktów pośrednich.

**Menu ustawień**:

- Wybierz **Widok domyślny**, aby nadać priorytet jednej z następujących wartości: *Szacowany czas przybycia*, *Czas dojazdu*, *Odległość*.
- W **Priorytecie wyświetlania** wybierz między *Najpierw cel podróży (domyślnie)* lub *Najpierw punkt pośredni*, aby nadać priorytet najbardziej istotnym informacjom o trasie.

> UWAGA: Widżet jest widoczny tylko podczas nawigacji.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Dodaj widżet →Informacje o trasie* |
| Dotknięcie | Dotknij przycisku ze strzałką, aby otworzyć [panel Start/Stop nawigacji](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Odległość do celu {#distance-to-destination}

![Widżet celu podróży](@site/static/img/widgets/destination_widget.png)

Widżet wyświetla pozostałą odległość do ostatniego punktu docelowego podczas podążania obliczoną trasą.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Dotknięcie | Przenosi mapę do punktu docelowego. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Odległość do punktu pośredniego {#distance-to-intermediate}

![Widżet celu pośredniego](@site/static/img/widgets/intermediate_destination_widget.png)

Widżet pokazuje odległość do pierwszego punktu pośredniego wzdłuż obliczonej trasy. Po przejściu punktów pośrednich, przestrzeń zostanie zaktualizowana do następnego punktu pośredniego. Jeśli nie ma punktów pośrednich, widżet nie jest wyświetlany.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Dotknięcie | **Jeden punkt pośredni** - przenosi mapę do punktu pośredniego. <br /> **Dwa lub więcej punktów pośrednich** - otwiera menu listy celów podróży. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Czas do punktu pośredniego {#time-to-intermediate}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widżet czasu przybycia Czas dojazdu](@site/static/img/widgets/arrival_time_widget_android.png) ![Widżet czasu przybycia Czas dojazdu](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet czasu przybycia Czas dojazdu](@site/static/img/widgets/arrival_time_widget_ios.png) ![Widżet czasu przybycia Czas dojazdu](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Widżet pokazuje *czas przybycia* lub *czas dojazdu* do pierwszego punktu pośredniego. Podczas nawigacji czas jest stale aktualizowany, a gdy tylko punkt pośredni zostanie minięty, czas zostanie zaktualizowany do następnego punktu trasy. Na przykład, jeśli zatrzymasz nawigację, *czas dojazdu* pozostanie niezmieniony, a *czas przybycia* będzie równy *czasowi dojazdu* plus *bieżący czas*.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Dotknięcie | Zmienia się między *czasem przybycia* a *czasem dojazdu* i odwrotnie. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Czas do celu {#time-to-destination}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widżet czasu przybycia pośredniego](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet czasu przybycia pośredniego](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Widżet wyświetla *czas przybycia* lub *czas dojazdu* do ostatniego punktu docelowego. Czas jest stale aktualizowany podczas nawigacji i jest równy czasowi trasy od Twojej bieżącej lokalizacji.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Dotknięcie | Zmienia się między *czasem przybycia* a *czasem dojazdu* i odwrotnie. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


## Ograniczenie prędkości {#speed-limit}

![Widżet ograniczenia prędkości](@site/static/img/widgets/speed_limit_widget_2.png)

Widżet *Ograniczenie prędkości* wyświetla aktualne ograniczenie prędkości na podstawie danych mapy dla Twojej trasy.

- Dane pochodzą z [projektu OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Widżet działa w trybach nawigacji pasywnej i aktywnej.
- Jeśli dane o ograniczeniu prędkości są niedostępne dla konkretnej drogi lub obszaru, *widżet nie pojawi się*.

> UWAGA: Upewnij się, że Twoje [mapy są aktualne](../personal/maps-resources.md#updates) i że pobrałeś wszystkie niezbędne dane regionalne, aby uzyskać dostęp do najnowszych informacji o ograniczeniach prędkości.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Dotknięcie | Brak zmian |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


## Manewry na trasie {#route-maneuvers}

![Widżet następnych zakrętów](@site/static/img/widgets/next_turns_widget.png)

Ten zestaw widżetów nawigacyjnych jest aktywowany podczas nawigacji i wyświetla informacje o odległości do następnego manewru.

| | |
|:------------|:------------|
| Włącz | **Android:** *Menu → Konfiguruj ekran → Lewy / Prawy panel → Dodaj widżet → Manewry na trasie → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Lewy / Prawy panel → Dodaj widżet → Manewry na trasie → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| Dotknięcie | Jeśli włączone są [komunikaty głosowe](../navigation/guidance/voice-navigation.md), odtwarzany jest następny manewr i odległość do niego. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Następny zakręt {#next-turn}

![Widżet następnych zakrętów](@site/static/img/widgets/next_turns_widgets_andr.png)

Widżety *Manewry na trasie* zawierają informacje o:

- **Następny zakręt** - następny zakręt z dużą strzałką przedstawiającą manewr i z danymi o odległości do niego.
- **Następny zakręt (mały)** - następny zakręt z małą strzałką przedstawiającą manewr i z danymi o odległości obok strzałki.
- **Drugi następny zakręt** - następny zakręt po pierwszym zakręcie, który jest aktywowany, jeśli znajduje się w odległości podejścia.

| | |
|:------------|:------------|
| Włącz | **Android:** *Menu → Konfiguruj ekran → Lewy / Prawy panel → Dodaj widżet → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Lewy / Prawy panel → Dodaj widżet → Następny zakręt, Następny zakręt (mały), Drugi następny zakręt* |
| Dotknięcie | Jeśli włączone są [komunikaty głosowe](../navigation/guidance/voice-navigation.md), odtwarzany jest następny manewr i odległość do niego. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Kolorowe komunikaty dla następnego zakrętu {#color-prompts-for-next-turn}

Ta tabela przedstawia przybliżony czas do aktywacji komunikatów i odpowiadające im kolorowe wskazania strzałek do wykonania manewru. Więcej informacji można znaleźć w [dokumentacji technicznej](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) lub w artykule [Komunikaty głosowe](../navigation/guidance/voice-navigation.md).

| Kolor | ~ Czas wyzwolenia | Odległość | Typ komunikatu |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Zielony | 5 sekund | Blisko | Skręć teraz |
| 🟡 Żółty | 20 sekund | Zbliżanie się | Skręć za `x` m |
| ⚪ Szary | > 100 sekund | Daleko | Przygotuj się do skrętu |


## Pasy ruchu {#lanes}

![Widżety pasów ruchu](@site/static/img/widgets/lanes_widget.png)

Widżet **Pasy ruchu** podświetla aktualny pas ruchu, gdy nawigacja jest aktywna, i wyświetla układ pasów ruchu dla rzeczywistej drogi, gdy nawigacja jest pasywna. Dane pochodzą z [projektu OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Dodaj widżet → <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="show_lanes"/>* |
| Dotknięcie | Brak zmian |

### Kolorowe komunikaty dla pasów ruchu {#color-prompts-for-lanes}

Wyświetla widżet według ustawień czasu podejścia. Kolor pasa jest powiązany z [komunikatami głosowymi](../navigation/guidance/voice-navigation.md) i czasem pozostałym do wykonania manewru.

| Kolor | ~ Czas wyzwolenia | Odległość | Typ komunikatu |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Zielony | 5 sekund | Blisko | [Skręć teraz](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Żółty | 20 sekund | Zbliżanie się | [Skręć za X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Wskazówki dotyczące trasy {#route-guidance}

<InfoAndroidOnly />

![widżet wskazówek dotyczących trasy](@site/static/img/widgets/route_guidence_widgets_andr.png)

Zapewnia wskazówki dotyczące trasy w czasie rzeczywistym, w tym odległość do następnego zakrętu, nazwę drogi, nazwę bieżącej ulicy i informacje o pasach ruchu. Widżety są aktywne podczas nawigacji.

Widżety *Wskazówki dotyczące trasy* zawierają informacje o:

- [Pasy ruchu](#lanes) - pokazuje aktualne położenie pasów ruchu i podświetla te, po których należy jechać.
- **Następny zakręt** - następny zakręt z dużą strzałką przedstawiającą manewr i z danymi o odległości do niego.
- **Drugi następny zakręt** to następny zakręt po pierwszym zakręcie, który jest aktywowany, jeśli znajduje się w odległości podejścia.

| | |
|:------------|:------------|
| Włącz | **Android:** *Menu → Konfiguruj ekran → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → Pas ruchu, Następny zakręt, Drugi następny zakręt* |
| Dotknięcie | **Następny zakręt**: Jeśli włączone są [komunikaty głosowe](../navigation/guidance/voice-navigation.md), odtwarzany jest następny manewr i odległość do niego. <br/> **Pas ruchu**: Brak zmian. |
| Długie naciśnięcie | **Następny zakręt**: Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) <br/> **Pas ruchu**: Brak zmian. |


## Widżet alertów {#alert-widget}

![Widżety informacji o alertach](@site/static/img/widgets/alert_information_widget.png)

**Widżet alertów** łączy kilka typów alertów, które są wyświetlane w lewym dolnym rogu podczas nawigacji.

- Masz możliwość włączania i wyłączania alertów, takich jak *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>* i *<Translate android="true" ids="show_tunnels"/>*. Inne alerty są aktywne domyślnie, jeśli widżet jest włączony.

- Dla typu alertu *Ograniczenie prędkości* możesz dostosować wartość <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) w ustawieniach komunikatów głosowych, aby lepiej dopasować ją do prędkości pojazdu i prędkości GPS.

- Większość alertów jest wyświetlana na ekranie i ogłaszana komunikatem głosowym przez 15 sekund, a także czas wyzwolenia dla przejścia punktu trasy, ulubionego punktu lub POI. Przeczytaj więcej [tutaj](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Włącz | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Typy alertów {#alert-types}

Typy alertów mają inny wygląd wizualny, który zależy od **<Translate android="true" ids="driving_region"/>** i można go skonfigurować za pomocą *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd nie ma na celu reprezentowania w 100% identycznych znaków drogowych, ale wskazuje na pewne podobieństwa.

| | | |
|:------------|:------------|:------------|
| Nazwa | Opis | Ikona |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Uspokojenie ruchu](https://en.wikipedia.org/wiki/Traffic_calming) wykorzystuje fizyczne rozwiązania i inne środki w celu poprawy bezpieczeństwa kierowców, pieszych i rowerzystów. | ![Alert uspokojenie ruchu](@site/static/img/widgets/warnings_traffic_calming.png) ![Alert uspokojenie ruchu w USA](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Przejście dla pieszych](https://en.wikipedia.org/wiki/Pedestrian_crossing) (głównie w języku angielskim brytyjskim) lub pasy dla pieszych to miejsce przeznaczone dla pieszych do przekraczania drogi, ulicy lub alei. OsmAnd wyświetla alert o niekontrolowanym przejściu dla pieszych. | ![Alert uspokojenie ruchu](@site/static/img/widgets/warnings_pedestrian.png) ![Alert uspokojenie ruchu w USA](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | W większości krajów [ograniczenia prędkości na drogach](https://en.wikipedia.org/wiki/Speed_limit) ustalają prawną maksymalną, średnią lub minimalną prędkość, z jaką pojazdy drogowe mogą poruszać się na danym odcinku drogi. W OsmAnd alert jest wyświetlany, gdy przekroczysz prędkość. Możesz ustawić parametry przekroczenia prędkości (0, 5, 10.. km/h). ![Alert przekroczenie prędkości](@site/static/img/widgets/ex_warning_speed.png) | ![Alert ograniczenie prędkości](@site/static/img/widgets/warnings_limit.png) ![Alert ograniczenie prędkości w Kanadzie](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert ograniczenie prędkości w USA](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Tunel to podziemne przejście, biegnące pod górą, rzeką lub zatłoczonym obszarem miejskim. W OsmAnd alert *Tunele* zawiera informacje o długości tunelu. Jeśli jesteś w tunelu, pokazuje odległość do końca tunelu. ![Alert tunel](@site/static/img/widgets/ex_warning_tunnel.png) | ![Alert tunele](@site/static/img/widgets/warnings_tunnel.png) ![Alert tunele w USA](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Kamery do egzekwowania przepisów ruchu drogowego](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) i [radary prędkości](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) rejestrują wykroczenia drogowe, w tym przekraczanie prędkości, przejeżdżanie na czerwonym świetle i inne rodzaje nielegalnych zachowań. <br />**UWAGA:** Alerty o radarach prędkości są zabronione lub nielegalne w niektórych krajach. Aby całkowicie [usunąć radary prędkości](../personal/global-settings.md#legal) z OsmAnd, przejdź do głównego *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Alert uspokojenie ruchu](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Znak stopu](https://en.wikipedia.org/wiki/Stop_sign) to znak drogowy, który informuje kierowców, że muszą się całkowicie zatrzymać i upewnić się, że skrzyżowanie jest bezpiecznie wolne od pojazdów i pieszych, zanim przejadą obok znaku. | ![Alert stop](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |To ostrzeżenie oznacza, że przed nami znajduje się [przejazd kolejowy](https://en.wikipedia.org/wiki/Crossbuck). | ![Alert ostrzeżenia kolejowe](@site/static/img/widgets/warnings_railways.png) ![Alert ostrzeżenia kolejowe w Kanadzie](@site/static/img/widgets/warnings_railways_ca.png) ![Alert ostrzeżenia kolejowe w USA](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |To ostrzeżenie wskazuje, że przed nami znajduje się kontrola graniczna.| ![Alert kontrola graniczna](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Symbole zagrożenia lub symbole ostrzegawcze](https://en.wikipedia.org/wiki/Hazard_symbol) to rozpoznawalne symbole zaprojektowane w celu ostrzegania o niebezpiecznych materiałach, miejscach lub obiektach, w tym prądach elektrycznych, truciznach i radioaktywności. | ![Alert ostrzeżenia o zagrożeniu](@site/static/img/widgets/warnings_hazard.png) ![Alert ostrzeżenia o zagrożeniu w USA](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | To ostrzeżenie wskazuje, że przed nami znajduje się punkt poboru opłat za drogę płatną. ![Alert punkt poboru opłat](@site/static/img/widgets/ex_toll_booth.png) | ![Alert ograniczenie prędkości](@site/static/img/widgets/warnings_limit.png) |


## Nazwa ulicy {#street-name}

Widżet nazwy ulicy pokazuje **nazwę bieżącej ulicy** ze strzałką prostą lub **nazwę następnej ulicy** z manewrem do wykonania. Nazwa ulicy zazwyczaj składa się z tarczy autostrady, [nazwy](https://wiki.openstreetmap.org/wiki/Key:name), [ref](https://wiki.openstreetmap.org/wiki/Key:ref), [ref. międzynarodowego](https://wiki.openstreetmap.org/wiki/Key:int_ref) i [celu](https://wiki.openstreetmap.org/wiki/Key:destination). Przełączanie między nazwą bieżącej ulicy a nazwą następnej ulicy następuje, gdy zbliżasz się do miejsca, w którym chcesz wykonać manewr (~20 sekund), podobnie jak komunikat głosowy [Skręć za X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Podczas jazdy ulicą lub autostradą widżet pokazuje nazwę lub oznaczenie bieżącej ulicy (drogi) z niebieską strzałką.

  ![Widżet POI nazwy ulicy_2](@site/static/img/widgets/street_name_widget_2.png)

- Gdy zmienisz kierunek, widżet pokazuje schemat manewru i nazwę (oznaczenie) ulicy (drogi), w którą musisz skręcić.

  ![Widżet POI nazwy ulicy](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="map_widget_top_text"/>* |
| Dotknięcie | Brak zmian |


## Zbliżanie się do POI / Ulubionych {#approach-pois--favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Zbliżanie się do POI/Ulubionych Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zbliżanie się do POI/Ulubionych iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Widżet **Zbliżanie się do POI/Ulubionych/Punktów trasy** jest połączony z [Nazwą ulicy](#street-name) i wyświetla zbliżające się i mijane punkty zainteresowania, punkty trasy śledzonej trasy oraz ulubione punkty wzdłuż trasy.

Wyświetla **nazwę**, **ikonę punktu** i 2 **odległości**:

- **Odległość na trasie** (góra) wyświetla, ile odległości należy pokonać, podążając trasą.
- **Odległość odchylenia** to prosta odległość od najbliższego punktu trasy do samego punktu.

**iOS** - Oprócz odległości do najbliższego punktu trasy, wyświetlana jest również strona (lewa lub prawa) trasy, na której znajduje się punkt trasy.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Rozpocznij nawigację → przycisk ołówka* |
| Dotknięcie | Brak zmian |


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka promieniowa i linijka](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)

> *Ostatnia aktualizacja: kwiecień 2025*