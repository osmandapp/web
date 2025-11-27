---
source-hash: e19a1247251c1151c1b92569c2eff3cbb1c0c47315a2754b8b205cb0177ef347
sidebar_position: 5
title:  Linijka promienia i Linijka
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

Narzędzia **Linijek** w OsmAnd zostały zaprojektowane, aby pomóc w precyzyjnym mierzeniu odległości i zrozumieniu [skali mapy](https://en.wikipedia.org/wiki/Scale_(map)).

- Narzędzie **Linijka** wyświetla dynamiczną skalę mapy w jednostkach takich jak metry lub stopy, pomagając wizualnie ocenić odległości między obiektami na ekranie.
- **Linijka promienia** pozwala ustawić promień z dowolnego punktu na mapie, pokazując koncentryczne okręgi reprezentujące interwały odległości.
- Narzędzie **Odległość przez dotknięcie** pozwala mierzyć odległości poprzez dotykanie mapy — albo od bieżącej lokalizacji, albo między dwoma dowolnymi lokalizacjami.

Narzędzia te są przydatne do planowania tras, szacowania bliskości punktów orientacyjnych i analizowania obszarów — zarówno podczas aktywności na świeżym powietrzu, jak i do precyzyjnej nawigacji.

![Ekran linijki promienia](@site/static/img/widgets/radius_ruler_screen.png)


## Linijka {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Narzędzie Linijka](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Narzędzie Linijka](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

**Linijka** wyświetla bieżącą skalę mapy jako odcinek linii oznaczony jego rzeczywistą długością (np. 100 m lub 500 stóp) na dole ekranu. Charakterystyka:

- Skala dostosowuje się dynamicznie podczas powiększania lub pomniejszania.
- Daje wizualne odniesienie do szacowania rzeczywistych odległości między obiektami na mapie.
- Długość segmentu jest zaokrąglana do wygodnych jednostek (np. 100 m), w przybliżeniu odpowiadając szerokości kciuka dla intuicyjnego użytkowania.

To narzędzie jest pomocne, gdy potrzebujesz szybko zrozumieć rozmiary obiektów lub odległości bez umieszczania znaczników lub tras.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widżet Linijka promienia {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>*

Dostępny na wszystkich panelach: <Translate android="true" ids="top"/>, <Translate android="true" ids="position_on_map_bottom"/>, <Translate android="true" ids="shared_string_left"/>, i <Translate android="true" ids="shared_string_right"/>.

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_height_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>*

Dostępny na wszystkich panelach: <Translate ios="true" ids="shared_string_top"/>, <Translate ios="true" ids="position_on_map_bottom"/>, Lewy i Prawy.

![Pozycja wyświetlania iOS](@site/static/img/widgets/radius_ruler_height_ios.png)

</TabItem>

</Tabs>

[Widżet Linijka promienia](../widgets/info-widgets.md#radius-ruler) pokazuje odległość między Twoją bieżącą lokalizacją (*Moja lokalizacja*) a środkiem mapy. Możesz również przesunąć mapę, aby ustawić dowolny niestandardowy punkt centralny. Charakterystyka:

- Wyświetla koncentryczne okręgi wyśrodkowane na wybranym punkcie.
- Pierwszy okrąg odzwierciedla bieżącą [skalę mapy](#ruler) w celu szybkiego odniesienia wizualnego.
- Automatycznie dostosowuje się podczas powiększania, aby zachować dokładne wartości promienia.
- Dotknij widżetu, aby przełączyć się między trzema trybami wyświetlania: <Translate android="true" ids="shared_string_hide"/>, <Translate android="true" ids="light_theme"/>, i <Translate android="true" ids="dark_theme"/>.
- Długie dotknięcie otwiera menu kontekstowe widżetu z dodatkowymi opcjami.
- Ustawienia widżetu obejmują dwa regulowane parametry: *<Translate android="true" ids="shared_string_height"/>* — kontroluje wizualną wysokość widżetu na ekranie; *<Translate android="true" ids="shared_string_show_icon"/>* — przełącza widoczność ikony widżetu.

Użyj tego widżetu, aby oszacować bliskość interesujących miejsc lub planować wokół zdefiniowanego obszaru.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekran linijki promienia](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Linijka promienia"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Linijka promienia"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Linijka promienia"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Kompas dla Linijki promienia {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Linijka kompasu](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Linijka kompasu](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Gdy **Linijka promienia** jest aktywna, mapa wyświetla nakładkę kompasu, która pomaga zorientować się w przestrzeni. Nakładka pokazuje, jak mapa jest wyrównana względem prawdziwej północy i może zawierać niebieski trójkąt wskazujący bieżący kierunek urządzenia.

- Pierścień kompasu pokazuje orientację mapy — czy północ jest na górze, czy jest obrócona.
- **Niebieski trójkąt** wskazuje kierunek, w którym skierowane jest urządzenie.
- Aby korzystać z tej funkcji, urządzenie musi obsługiwać i mieć włączony **czujnik kompasu** (kompas GPS, magnetometr).
- Trzymanie urządzenia poziomo poprawia dokładność i wizualizację.
- Jeśli **niebieski trójkąt** i **czerwona strzałka** (północ) wskazują w górę, urządzenie jest wyrównane z prawdziwą północą.

Ta nakładka jest pomocna w nawigacji na zewnątrz, umożliwiając dopasowanie [orientacji mapy](../map/interact-with-map.md#map-orientation-modes) do rzeczywistego otoczenia.  

| | |
|------------|------------|
| Włącz | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## Pozycja na środku / na dole {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Linijka promienia w dół](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Inne → Pozycja lokalizacji na ekranie*

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Linijka promienia w dół](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Aby zwiększyć widoczny promień wokół swojej lokalizacji, możesz zmienić pozycję Linijki promienia, wybierając opcję *Środek* lub *Dół*.  

Więcej informacji na temat *pozycji na ekranie* można znaleźć w artykule [Konfiguracja ekranu](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Widok 3D {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Format 3D linijki promienia](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Format 3D linijki promienia](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Możesz przełączyć się na **widok 3D**, aby lepiej wizualizować odległości i otaczający teren podczas korzystania z Linijki promienia. Ten widok przechyla mapę i zapewnia efekt perspektywy, który rozszerza widoczny promień.

- Dotknij [przycisku lokalizacji](../map/interact-with-map.md#my-location-and-zoom), aby skupić się na swojej pozycji.
- Użyj gestu [przesunięcia dwoma palcami w górę](../map/interact-with-map.md#gestures), aby przechylić mapę do trybu 3D.

Okręgi promienia pojawią się z głębią, co jest szczególnie przydatne do planowania tras w pagórkowatych obszarach lub środowiskach miejskich, gdzie ważny jest kontekst pionowy.


## Odległość przez dotknięcie {#distance-by-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Odległość przez dotknięcie Android](@site/static/img/widgets/distance_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Odległość przez dotknięcie iOS](@site/static/img/widgets/distance_tap_ios.png)

</TabItem>

</Tabs>

Narzędzie **Odległość przez dotknięcie** pozwala mierzyć odległości między punktami na mapie bez użycia Linijki promienia lub tworzenia trasy.

Istnieją dwa przypadki użycia:

- **Odległość od Twojej lokalizacji do punktu**  
  Dotknij dowolnego miejsca na mapie, a pojawi się linia prosta od Twojej bieżącej lokalizacji do dotkniętego punktu wraz z etykietą odległości. Linia pozostaje na ekranie, nawet jeśli dotkniesz gdzie indziej.

- **Odległość między dwoma dowolnymi punktami**  
  Dotknij dwóch punktów na mapie jednocześnie (multi-touch). Linia łączy dwa punkty i wyświetlana jest zmierzona odległość.

Możesz również dostosować rozmiar tekstu etykiety odległości. Wybierz między *<Translate android="true" ids="shared_string_normal"/>* (domyślny) a *<Translate android="true" ids="shared_string_large"/>* (1,5× większy). Gdy wybrana jest opcja Duży, automatycznie dodawane jest dodatkowe odstęp między linią a etykietą dla lepszej czytelności. Zmiany stosowane są natychmiast bez restartowania aplikacji.

| | |
|------------|------------|
| Włącz |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Rozmiar tekstu | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Format jednostek | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Poradniki wideo {#video-guides}

Obejrzyj te krótkie samouczki, aby dowiedzieć się, jak korzystać z Linijki promienia i powiązanych narzędzi w OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Powiązane artykuły {#related-articles}

- [Konfiguracja ekranu](./configure-screen.md)
- [Przyciski mapy](./map-buttons.md)
- [Widżety informacyjne](./info-widgets.md)
- [Widżety nawigacyjne](./nav-widgets.md)
- [Szybka akcja](./quick-action.md)
- [Widżety znaczników](./markers.md)