---
source-hash: e574b157e1460483991973a8f0aa82032a697bf0c8250d5dbada1a787ff155e0
sidebar_position: 4
title:  Widżety nawigacyjne
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


## Aktywna i pasywna nawigacja {#active-and-passive-navigation}

Widżety nawigacyjne w OsmAnd są zaprojektowane w celu ulepszenia zarówno **aktywnego**, jak i **pasywnego** trybu nawigacji. Widżety te dostarczają cennych informacji, takich jak wskazówki dotyczące trasy, szczegóły drogi i ograniczenia prędkości, w zależności od wybranego **profilu nawigacji**.

#### Nawigacja aktywna {#active-navigation}

- **Wymagania:**
  - Ustaw **cel**.
  - Oblicz **trasę** za pomocą funkcji *Wskazówki* (Directions).
  - **Rozpocznij** nawigację (wskazówki głosowe są opcjonalne).
  - Dostępne tylko podczas poruszania się po trasie.

- **Obsługiwane widżety:**
  - Dostępne są wszystkie **widżety nawigacyjne**.

- **Kluczowe korzyści:**
  - Zapewnia **szczegółowe wskazówki**, **asystenta pasa ruchu** i **szacowany czas przybycia (ETA)**.
  - Zapewnia dokładne i dynamiczne aktualizacje podczas podróży.

#### Nawigacja pasywna {#passive-navigation}

- **Jak to działa:**
  - Cel nie jest potrzebny.
  - Działa automatycznie po wybraniu **profilu nawigacyjnego** (np. *Samochód*, *Rower*).

- **Funkcjonalność:**
  - Próbuje określić drogę, którą podążasz, na podstawie danych GPS.
  - Wyświetla **podstawowe informacje o drodze**, takie jak [nazwa ulicy](#street-name), [informacje o pasach ruchu](#lanes), [maksymalna prędkość](#speed-limit).

- **Ograniczenia:**
  - Niektóre zaawansowane funkcje mogą nie działać poprawnie bez ustawionego celu.
  - Podawane informacje mogą nie zawsze być **precyzyjne**, zwłaszcza w złożonych sieciach drogowych.

> **UWAGA.** *Pamiętaj, że profil **Przeglądaj mapę** nie obsługuje widżetów nawigacyjnych w żadnym trybie. Przełącz się na odpowiedni **profil nawigacyjny**, aby włączyć te funkcje.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widżet profilu wysokości {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/> Z tego widżetu można korzystać tylko z funkcją Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">subskrybenci OsmAnd Pro</a>.

:::

Widżet profilu wysokości pokazuje wykres z wysokością i nachyleniem trasy nawigacyjnej oraz bieżącą lokalizację na tym wykresie z aktualną wysokością i nachyleniem. Wykres jest wykreślany na dwóch osiach. Oś X to odległość trasy. Oś Y to wysokość, której wartość zależy od rzeźby terenu, a nachylenie jest wyświetlane w procentach.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widżet profilu wysokości](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interakcje z wykresem {#interactions-with-the-graph}

- *Powiększanie/pomniejszanie*. Domyślnie wykres pokazuje trasę od bieżącej lokalizacji do 10 km do przodu. Możesz użyć [ruchu dwoma palcami](../map/interact-with-map.md#gestures), aby powiększać i pomniejszać w celu uzyskania bardziej szczegółowego widoku zmian wysokości na trasie. Możesz także przesuwać wykres w prawo, do przodu na trasie i do tyłu do bieżącej lokalizacji.
- *Umieść punkt na wykresie*. Jeśli chcesz zobaczyć wysokość i wartość stopnia w określonym punkcie na trasie, możesz dotknąć dowolnego miejsca na wykresie, a pojawi się wskaźnik z wartościami.


#### Co zawiera {#whats-in}

Po wybraniu trasy i naciśnięciu przycisku **Start** otworzy się mapa z bieżącą lokalizacją, trasą i widżetem u dołu ekranu. Widżet zawiera wykres i informacje o *wzniesieniach*, *zjazdach*, *nachyleniu*, odległości, wysokości i kącie nachylenia. Możesz wybrać *optymalną skalę* i zobaczyć wszystkie możliwe przeszkody na swojej trasie.

- Wszystkie wartości są podawane dla całej trasy lub tylko dla wybranego interwału poprzez skalowanie wykresu.
- Przeczytaj o [licencji na dane DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) używanej przez OsmAnd do określania wysokości.

|  |
|:------------|
| ***Przypięta lokalizacja*** |
| Twoja ***Bieżąca lokalizacja*** na wykresie zawiera ikonę lokalizacji, wysokość i wartość procentową nachylenia. Prawa strona widżetu zawiera najwyższą wysokość i nachylenie, ich średnią wartość oraz najniższą wartość na wybranym odcinku trasy widocznym na wykresie. |
| ![punkt](@site/static/img/widgets/sch_1-1.png)|
| ***Dodatkowe informacje*** |
| Prawa strona widżetu zawiera dane o najwyższej wysokości i nachyleniu, średniej wartości dla obu oraz najniższej wysokości i nachyleniu na wybranym odcinku trasy widocznym na wykresie. |
|  ![dane](@site/static/img/widgets/sch_1-2.png)|
|Wartości ***Wzniesienia*** i ***Zjazdy*** to sumy odległości od punktu lokalizacji do końca widocznego wykresu. Jeśli na wykresie nie ma punktu lokalizacji, jest to suma całego widocznego wykresu na ekranie (może się to zdarzyć, gdy zmienisz skalę, a lokalizacja wyjdzie poza wykres).|
| **Wzniesienia** – pokazuje sumę wszystkich odległości o rosnącej wysokości od punktu lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez widocznego na ekranie punktu lokalizacji. |
| ![schemat wzniesienia](@site/static/img/widgets/sch_uphill_1.png) ![schemat wzniesienia](@site/static/img/widgets/sch_uphill_2.png)|  
| **Zjazdy** – pokazuje sumę wszystkich odległości o malejącej wysokości od punktu lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez widocznego na ekranie punktu lokalizacji.|
| ![schemat zjazdu](@site/static/img/widgets/sch_downhill_1.png) ![schemat zjazdu](@site/static/img/widgets/sch_downhill_2.png)|  
|***Nachylenie*** to stosunek ścieżki do poziomu, gdzie zero oznacza poziomość, a liczba stopni wskazuje na wyższy lub bardziej stromy stopień nachylenia.|
| **Nachylenie** – pokazuje maksymalne nachylenie drogi w procentach od punktu lokalizacji do końca widocznego wykresu lub dla wybranego odcinka trasy bez widocznego na ekranie punktu lokalizacji. |
|![schemat nachylenia](@site/static/img/widgets/sch_grade_1.png) ![schemat nachylenia](@site/static/img/widgets/sch_grade_2.png)|


## Widżet namiaru {#bearing-widget}
  
Namiar to kierunek do celu znajdującego się poza pojazdem, takiego jak cel podróży lub punkt początkowy. Namiar może być *względny* (w odniesieniu do twojego kursu) lub *magnetyczny* (w odniesieniu do kompasu). Na przykład namiar magnetyczny 180° to kierunek na południe, a namiar względny 180° to kierunek dokładnie za tobą. Główne kierunki geograficzne to cztery główne kierunki kompasu. Są to: północ (*N* - 0° lub 360°), wschód (*E* - 90°), południe (*S* - 180°) i zachód (*W* - 270°).

![Widżet namiaru](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet namiaru](@site/static/img/widgets/bearing_widget.png) ![Widżet namiaru](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widżet namiaru](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="shared_string_bearing"/>* |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android:** Możesz zmienić format wyświetlania danych dla jednostek kątowych: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** Możesz zmienić format wyświetlania danych dla jednostek kątowych: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Jak to działa {#how-it-works}

Aby wyświetlić namiar, należy wybrać **punkt docelowy**. Jeśli do nawigacji zostanie wybrany punkt **docelowy** (lub **pierwszy punkt pośredni**, jeśli istnieje), zostanie on użyty jako punkt docelowy. W przeciwnym razie zostanie użyty **najwyżej położony wybrany znacznik**.

- [Namiar względny](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) to kąt między kierunkiem twojego ruchu do przodu a punktem docelowym. **Kierunek ruchu do przodu** to albo **kierunek twojego ruchu** uzyskany z czujników GPS, albo, jeśli stoisz w miejscu, **kierunek, w którym skierowałeś swoje urządzenie** (tj. orientacja urządzenia zgodnie z jego kompasem magnetycznym). Przykład: obiekt o namiarze względnym 0° znajduje się bezpośrednio przed tobą, a obiekt o namiarze względnym 180° znajduje się bezpośrednio za tobą. **Namiar względny** to kąt między kierunkiem twojego ruchu do przodu a punktem docelowym.

- [Namiar magnetyczny](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) to kąt (poziomy) mierzony zgodnie z ruchem wskazówek zegara między północą magnetyczną a punktem docelowym obserwowanym z twojej lokalizacji. Musisz podążać za tą wartością kompasu magnetycznego, aby dotrzeć do celu. Przykład: jeśli **namiar magnetyczny** jest wyświetlany jako 0° M, musisz poruszać się ściśle w kierunku północy magnetycznej, aby dotrzeć do punktu docelowego.

- [Namiar rzeczywisty](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) jest wyrażony jako kąt poziomy między południkiem geograficznym a linią na Ziemi. W szczególności **namiar rzeczywisty na punkt** to kąt mierzony w stopniach zgodnie z ruchem wskazówek zegara od linii północy rzeczywistej. Oprogramowanie OsmAnd pokaże ci namiar rzeczywisty i kurs w naszym przyjaznym dla użytkownika interfejsie, ułatwiając podjęcie właściwej decyzji na wczesnym etapie.

### Nawigacja po loksodromie {#navigation-along-the-rhumb-line}

- **Namiar względny**. Jeśli będziesz trzymać się namiaru względnego 0 stopni i poruszać się do przodu, dotrzesz do punktu docelowego, ale nie najkrótszą trasą ([loksodroma](https://en.wikipedia.org/wiki/Rhumb_line)).
- **Namiar magnetyczny**. Jeśli zrównasz kompas na swojej łodzi/pojeździe z wartością widżetu i ruszysz do przodu, dotrzesz do celu, ale nie najkrótszą trasą ([loksodroma](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Punkty nawigacyjne {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Grupa widżetów *Punkt nawigacyjny* pokazuje pozostałą odległość do celu, punktu pośredniego, czas przybycia do punktu pośredniego lub czas podróży dla obliczonej trasy oraz szacowany czas przybycia.

### Informacje o trasie {#route-information}


![Widżet informacji o trasie](@site/static/img/widgets/route_information_widget.png)

Widżet *Informacje o trasie* dostarcza dane w czasie rzeczywistym o bieżącej trasie nawigacyjnej i szybki sposób [zarządzania aktywną trasą](../navigation/setup/route-navigation.md#start--stop-navigation). Pomaga śledzić kluczowe szczegóły trasy i pozwala zatrzymać lub wznowić bieżącą sesję nawigacyjną przy minimalnej interakcji.

**Wyświetlane informacje:**

- **Szacowany czas przybycia (ETA)**. Pokazuje oczekiwany czas przybycia do ostatecznego celu.
- **Pozostały czas podróży**. Wyświetla szacowany czas pozostały do dotarcia do celu.
- **Odległość do celu**. Wskazuje całkowitą pozostałą odległość do ostatecznego celu oraz odległości do punktów pośrednich.

**Menu ustawień**:

- Wybierz **Widok domyślny**, aby priorytetyzować jedną z następujących wartości: *Szacowany czas przybycia*, *Pozostały czas*, *Odległość*.
- W **Priorytecie wyświetlania** wybierz między *Najpierw cel (domyślnie)* a *Najpierw punkt pośredni*, aby priorytetyzować najbardziej istotne informacje o trasie.

> UWAGA: Widżet jest widoczny tylko podczas nawigacji.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Dodaj widżet →Informacje o trasie* |
| Po dotknięciu | Dotknij przycisku ze strzałką, aby otworzyć [panel Start/Stop nawigacji](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Odległość do celu {#distance-to-destination}

![Widżet celu](@site/static/img/widgets/destination_widget.png)

Widżet wyświetla pozostałą odległość do ostatniego punktu docelowego podczas podążania obliczoną trasą.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Po dotknięciu | Przesuwa mapę do punktu docelowego. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Odległość do punktu pośredniego {#distance-to-intermediate}

![Widżet celu pośredniego](@site/static/img/widgets/intermediate_destination_widget.png)

Widżet pokazuje odległość do pierwszego punktu pośredniego na obliczonej trasie. Po minięciu punktów pośrednich, miejsce zostanie zaktualizowane do następnego punktu pośredniego. Jeśli nie ma punktów pośrednich, widżet nie jest wyświetlany.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Po dotknięciu | **Jeden punkt pośredni** - przesuwa mapę do punktu pośredniego. <br /> **Dwa lub więcej punktów pośrednich** - otwiera menu listy celów. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |

### Czas do punktu pośredniego {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widżet czasu przybycia i pozostałego czasu](@site/static/img/widgets/arrival_time_widget_android.png)  ![Widżet czasu przybycia i pozostałego czasu](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widżet czasu przybycia i pozostałego czasu](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Widżet czasu przybycia i pozostałego czasu](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>  

Widżet pokazuje *Czas przybycia* lub *Pozostały czas* do pierwszego punktu pośredniego. Podczas nawigacji czas jest stale aktualizowany, a po minięciu punktu pośredniego czas zostanie zaktualizowany do następnego punktu trasy. Na przykład, jeśli zatrzymasz nawigację, *Pozostały czas* pozostanie niezmieniony, a *Czas przybycia* będzie równy *Pozostałemu czasowi* plus *Bieżący czas*.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Po dotknięciu | Przełącza między *Czasem przybycia* a *Pozostałym czasem* i odwrotnie. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


### Czas do celu {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widżet czasu przybycia i pozostałego czasu do celu](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widżet czasu przybycia i pozostałego czasu do celu](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Widżet wyświetla *Czas przybycia* lub *Pozostały czas* do ostatniego punktu docelowego. Czas jest stale aktualizowany podczas nawigacji i jest równy czasowi trasy z bieżącej lokalizacji.

| | |
|:------------|:------------|
| Włącz |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Po dotknięciu | Przełącza między *Czasem przybycia* a *Pozostałym czasem* i odwrotnie. |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |  


## Ograniczenie prędkości {#speed-limit}

![Widżet ograniczenia prędkości](@site/static/img/widgets/speed_limit_widget_2.png)

Widżet *Ograniczenie prędkości* wyświetla aktualne ograniczenie prędkości na podstawie danych mapy dla Twojej trasy.

- Dane pochodzą z projektu [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Widżet działa w trybie nawigacji pasywnej i aktywnej.
- Jeśli dane o ograniczeniu prędkości są niedostępne dla danej drogi lub obszaru, *widżet nie pojawi się*.

> UWAGA: Upewnij się, że Twoje [mapy są aktualne](../personal/maps-resources.md#updates) i że pobrałeś wszystkie niezbędne dane regionalne, aby mieć dostęp do najnowszych informacji o ograniczeniach prędkości.

| |  |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Po dotknięciu | Brak zmian |
| Długie naciśnięcie | Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) |


## Wskazówki dotyczące trasy {#route-guidance}


![Widżet następnych zakrętów](@site/static/img/widgets/next_turns_widget.png)

Dostarcza wskazówki dotyczące trasy w czasie rzeczywistym, w tym odległość do następnego zakrętu, nazwę drogi, nazwę bieżącej ulicy i informacje o pasach ruchu. Widżety są aktywne podczas nawigacji.

Widżety *Wskazówki dotyczące trasy* zawierają informacje o:

- [Pasy ruchu](#lanes) - pokazuje aktualne położenie pasów drogowych i podświetla te, po których należy jechać. (tylko dla *paneli górnych/dolnych*)
- [Następny zakręt](#next-turn) - następny zakręt z dużą strzałką reprezentującą manewr i danymi o odległości do niego.
- [Następny zakręt (mały)](#next-turn) - następny zakręt z małą strzałką reprezentującą manewr i danymi o odległości obok strzałki. (tylko dla *paneli lewych/prawych*)
- [Drugi następny zakręt](#next-turn) - następny zakręt po pierwszym, który jest aktywowany, jeśli znajduje się w odległości zbliżania.

| | |
|:------------|:------------|
| Włącz      | **Android:** *Menu → Konfiguruj ekran → Panel lewy / prawy / górny / dolny → Wskazówki dotyczące trasy → Dodaj widżet → Pasy, Następny zakręt, Drugi następny zakręt*  |
|      | **iOS:** *Menu → Konfiguruj ekran → Panel lewy / prawy / górny / dolny → Wskazówki dotyczące trasy → Dodaj widżet → Pasy, Następny zakręt, Drugi następny zakręt*   |
| Po dotknięciu  | **Następny zakręt**: Jeśli [komunikaty głosowe](../navigation/guidance/voice-navigation.md) są włączone, wymawiany jest następny manewr i odległość do niego. <br/> **Pasy**: Brak zmian. |
| Długie naciśnięcie    | **Następny zakręt**: Otwiera [menu kontekstowe widżetu](../widgets/configure-screen.md#widget-context-menu) <br/> **Pasy**: Brak zmian. |


### Następny zakręt {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widżet wskazówek dotyczących trasy](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widżet wskazówek dotyczących trasy](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

- **Następny zakręt** - następny zakręt z dużą strzałką reprezentującą manewr i danymi o odległości do niego.
- **Następny zakręt (mały)** - następny zakręt z małą strzałką reprezentującą manewr i danymi o odległości obok strzałki. (tylko dla *paneli lewych/prawych*)
- **Drugi następny zakręt** - następny zakręt po pierwszym, który jest aktywowany, jeśli znajduje się w odległości zbliżania.

### Kolorowe podpowiedzi dla następnego zakrętu {#color-prompts-for-next-turn}

Ta tabela pokazuje przybliżony czas do aktywacji podpowiedzi i odpowiadające im kolorowe oznaczenie strzałek do wykonania manewru. Więcej informacji można znaleźć w [dokumentacji technicznej](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) lub w artykule [Komunikaty głosowe](../navigation/guidance/voice-navigation.md).

| Kolor     | ~ Czas wyzwalania | Odległość   | Typ podpowiedzi     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Zielony  | 5 sekund      | Blisko   | Skręć teraz        |
| 🟡 Żółty | 20 sekund     | Zbliżanie się| Skręć za `x` m   |
| ⚪ Szary   | > 100 sekund  | Daleko    | Przygotuj się do skrętu |


### Pasy ruchu {#lanes}

![Widżet pasów ruchu](@site/static/img/widgets/lanes_widget.png)

Widżet **Pasy ruchu** podświetla bieżący pas, gdy nawigacja jest aktywna, i wyświetla układ pasów dla rzeczywistej drogi, gdy nawigacja jest pasywna. Ten widżet jest dostępny tylko dla paneli górnych i dolnych. Dane pochodzą z projektu [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

### Kolorowe podpowiedzi dla pasów ruchu {#color-prompts-for-lanes}

Wyświetla widżet zgodnie z ustawieniami czasu zbliżania. Kolor pasa jest powiązany z [komunikatami głosowymi](../navigation/guidance/voice-navigation.md) i czasem pozostałym do wykonania manewru.

| Kolor     | ~ Czas wyzwalania | Odległość    | Typ podpowiedzi |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Zielony  | 5 sekund      | Blisko    | [Skręć teraz](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Żółty | 20 sekund     | Zbliżanie się | [Skręć za X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |



## Widżet alertów {#alert-widget}

![Widżet informacji o alertach](@site/static/img/widgets/alert_information_widget.png)

**Widżet alertów** łączy kilka typów alertów, które są wyświetlane w lewym dolnym rogu podczas nawigacji.

- Masz możliwość włączania i wyłączania alertów, takich jak *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* i *<Translate android="true" ids="show_tunnels"/>*. Inne alerty są domyślnie aktywne, jeśli widżet jest włączony.

- Dla typu alertu *Ograniczenie prędkości* możesz dostosować wartość <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) w ustawieniach komunikatów głosowych, aby lepiej dopasować prędkość pojazdu i prędkość GPS.

- Większość alertów jest wyświetlana na ekranie i ogłaszana komunikatem głosowym przez 15 sekund, a także czas wyzwalania przy mijaniu punktu trasy, ulubionego punktu lub POI. Przeczytaj więcej [tutaj](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Włącz | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Typy alertów {#alert-types}

Typy alertów mają różny wygląd, który zależy od **<Translate android="true" ids="driving_region"/>** i można go skonfigurować poprzez *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd nie ma na celu przedstawiania w 100% identycznych znaków drogowych, ale wskazuje na pewne podobieństwa.

| | | |
|:------------|:------------|:------------|
| Nazwa | Opis | Ikona |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Uspokojenie ruchu](https://en.wikipedia.org/wiki/Traffic_calming) wykorzystuje projektowanie fizyczne i inne środki w celu poprawy bezpieczeństwa kierowców, pieszych i rowerzystów. | ![Widżet alertu o uspokojeniu ruchu](@site/static/img/widgets/warnings_traffic_calming.png)  ![Widżet alertu o uspokojeniu ruchu (USA)](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Przejście dla pieszych](https://en.wikipedia.org/wiki/Pedestrian_crossing) to miejsce przeznaczone dla pieszych do przechodzenia przez drogę, ulicę lub aleję. OsmAnd pokazuje alert o niekontrolowanym przejściu dla pieszych.  | ![Widżet alertu o przejściu dla pieszych](@site/static/img/widgets/warnings_pedestrian.png)  ![Widżet alertu o przejściu dla pieszych (USA)](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | W większości krajów [ograniczenia prędkości na drogach](https://en.wikipedia.org/wiki/Speed_limit) określają prawnie maksymalną, średnią lub minimalną prędkość, z jaką pojazdy drogowe mogą poruszać się na danym odcinku drogi. W OsmAnd alert jest wyświetlany, gdy przekroczysz prędkość. Możesz ustawić parametry przekroczenia prędkości (0, 5, 10.. km/h). ![Widżet alertu o przekroczeniu prędkości](@site/static/img/widgets/ex_warning_speed.png)  | ![Widżet alertu o ograniczeniu prędkości](@site/static/img/widgets/warnings_limit.png) ![Widżet alertu o ograniczeniu prędkości (CA)](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widżet alertu o ograniczeniu prędkości (USA)](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Tunel to podziemne przejście, przechodzące pod górą, rzeką lub zatłoczonym obszarem miejskim. W OsmAnd alert *Tunele* zawiera informacje o długości tunelu. Jeśli jesteś w tunelu, pokazuje odległość do końca tunelu.   ![Widżet alertu o tunelu](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Widżet alertu o tunelu](@site/static/img/widgets/warnings_tunnel.png)  ![Widżet alertu o tunelu (USA)](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Kamery egzekwowania przepisów ruchu drogowego](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) i [fotoradary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) rejestrują wykroczenia drogowe, w tym przekroczenie prędkości, przejeżdżanie na czerwonym świetle i inne rodzaje nielegalnych zachowań. <br />**UWAGA:** Alerty o fotoradarach są zabronione lub nielegalne w niektórych krajach. Aby całkowicie [usunąć fotoradary](../personal/global-settings.md#legal) z OsmAnd, przejdź do głównego *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Widżet alertu o fotoradarze](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Znak stopu](https://en.wikipedia.org/wiki/Stop_sign) to znak drogowy przeznaczony do powiadamiania kierowców, że muszą całkowicie się zatrzymać i upewnić się, że skrzyżowanie jest bezpiecznie wolne od pojazdów i pieszych przed kontynuowaniem jazdy za znakiem.  | ![Widżet alertu o znaku stop](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |To ostrzeżenie oznacza, że przed tobą znajduje się [przejazd kolejowy](https://en.wikipedia.org/wiki/Crossbuck). | ![Widżet alertu o przejeździe kolejowym](@site/static/img/widgets/warnings_railways.png) ![Widżet alertu o przejeździe kolejowym (CA)](@site/static/img/widgets/warnings_railways_ca.png)  ![Widżet alertu o przejeździe kolejowym (USA)](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |To ostrzeżenie wskazuje, że przed tobą znajduje się kontrola graniczna.| ![Widżet alertu o kontroli granicznej](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Symbole zagrożenia lub symbole ostrzegawcze](https://en.wikipedia.org/wiki/Hazard_symbol) to rozpoznawalne symbole przeznaczone do ostrzegania o niebezpiecznych materiałach, miejscach lub obiektach, w tym prądach elektrycznych, truciznach i radioaktywności. | ![Widżet alertu o zagrożeniu](@site/static/img/widgets/warnings_hazard.png)  ![Widżet alertu o zagrożeniu (USA)](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | To ostrzeżenie wskazuje, że przed tobą znajduje się punkt poboru opłat za płatną drogę.   ![Widżet alertu o punkcie poboru opłat](@site/static/img/widgets/ex_toll_booth.png) | ![Widżet alertu o ograniczeniu prędkości](@site/static/img/widgets/warnings_limit.png) |


## Nazwa ulicy {#street-name}

Widżet Nazwa ulicy pokazuje **nazwę bieżącej ulicy** z prostą strzałką lub **nazwę następnej ulicy** z manewrem do wykonania. Nazwa ulicy zwykle składa się z tarczy drogowej, [nazwy](https://wiki.openstreetmap.org/wiki/Key:name), [numeru referencyjnego](https://wiki.openstreetmap.org/wiki/Key:ref), [międzynarodowego numeru referencyjnego](https://wiki.openstreetmap.org/wiki/Key:int_ref) i [kierunku](https://wiki.openstreetmap.org/wiki/Key:destination).

W **Ustawieniach** widżetu możesz wybrać, aby zawsze wyświetlać **nazwę bieżącej ulicy** i używać jej z widżetem [**Następny zakręt**](#next-turn). Jeśli włączysz **Informacje o następnym zakręcie**, przełączanie między nazwą bieżącej ulicy a nazwą następnej ulicy nastąpi, gdy zbliżysz się do miejsca, w którym chcesz wykonać manewr (~20 sekund), podobnie jak w przypadku komunikatu głosowego [Skręć za X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Podczas jazdy ulicą lub autostradą widżet pokazuje nazwę lub oznaczenie bieżącej ulicy (drogi) z niebieską strzałką.

  ![Widżet nazwy ulicy](@site/static/img/widgets/street_name_widget_2.png)

- Gdy zmieniasz kierunek, widżet pokazuje schemat manewru i nazwę (oznaczenie) ulicy (drogi), na którą musisz skręcić.

  ![Widżet nazwy ulicy](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Dodaj widżet → <Translate android="true" ids="map_widget_top_text"/>* |
| Po dotknięciu | Brak zmian |


## Zbliżanie się do POI / Ulubionych {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Zbliżanie się do POI/Ulubionych (Android)](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Zbliżanie się do POI/Ulubionych (iOS)](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Widżet **Zbliżanie się do POI/Ulubionych/Punktów trasy** jest połączony z [Nazwą ulicy](#street-name) i wyświetla zbliżające się i mijane Punkty Użyteczności Publicznej (POI), punkty trasy śledzonego śladu oraz Ulubione wzdłuż trasy.

Wyświetla **nazwę**, **ikonę punktu** i 2 **odległości**:

- **Odległość po trasie** (na górze) pokazuje, jaka odległość musi zostać pokonana po trasie.
- **Odległość odchylenia** to prosta odległość od najbliższego punktu trasy do samego punktu.

**iOS** - Oprócz odległości do najbliższego punktu trasy, wyświetlana jest również strona (lewa lub prawa) trasy, po której znajduje się punkt trasy.

| | |
|:------------|:------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Rozpocznij nawigację → przycisk ołówka* |
| Po dotknięciu | Brak zmian |


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski na mapie](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Linijka i linijka z promieniem](./radius-ruler.md)
- [Widżety znaczników](./markers.md)
- [Szybka akcja](./quick-action.md)