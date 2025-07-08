---
source-hash: 14db1ff378f43e871dddc04366518dc17627a2aeb32b40272132b8334b11f558
sidebar_position: 5
title: Linijka promienia i linijka
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

**Narzędzia linijki** w OsmAnd zostały zaprojektowane, aby pomóc Ci precyzyjnie mierzyć odległości i zrozumieć [skalę mapy](https://en.wikipedia.org/wiki/Scale_(map)).

- Narzędzie **Linijka** wyświetla dynamiczną skalę mapy w jednostkach takich jak metry lub stopy, pomagając wizualnie ocenić odległości między obiektami na ekranie.
- **Linijka promienia** pozwala ustawić promień z dowolnego punktu na mapie, pokazując koncentryczne okręgi, które reprezentują interwały odległości.
- Narzędzie **Odległość przez dotyk** pozwala mierzyć odległości, dotykając mapy — albo z bieżącej lokalizacji, albo między dowolnymi dwoma lokalizacjami.

Narzędzia te są przydatne do planowania tras, szacowania bliskości punktów orientacyjnych i analizowania obszarów — zarówno do aktywności na świeżym powietrzu, jak i do precyzyjnej nawigacji.

![Ekran linijki promienia](@site/static/img/widgets/radius_ruler_screen.png)


## Linijka {#ruler}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Narzędzie linijki](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Narzędzie linijki](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

**Linijka** wyświetla bieżącą skalę mapy jako segment linii oznaczony jej rzeczywistą długością (np. 100 m lub 500 stóp) na dole ekranu. Charakterystyka:

- Skala dynamicznie dostosowuje się podczas powiększania lub pomniejszania.
- Zapewnia wizualne odniesienie do szacowania rzeczywistych odległości między obiektami na mapie.
- Długość segmentu jest zaokrąglana do wygodnych jednostek (np. 100 m), z grubsza odpowiadających szerokości kciuka, co zapewnia intuicyjne użytkowanie.

To narzędzie jest pomocne, gdy potrzebujesz szybkiego zrozumienia rozmiarów obiektów lub odległości bez umieszczania znaczników lub tras.

| | |
|------------|------------|
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widżet linijki promienia {#radius-ruler-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>*

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>*

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

[Widżet linijki promienia](../widgets/info-widgets.md#radius-ruler) pokazuje odległość między Twoją bieżącą lokalizacją (*Moja lokalizacja*) a środkiem mapy. Możesz również przesunąć mapę, aby ustawić dowolny niestandardowy punkt centralny. Charakterystyka:

- Wyświetlaj koncentryczne okręgi wyśrodkowane na wybranym punkcie.
- Pierwszy okrąg odzwierciedla bieżącą [skalę mapy](#ruler) dla szybkiego odniesienia wizualnego.
- Automatycznie dostosowuje się podczas powiększania, aby zachować dokładne wartości promienia.

Użyj tego widżetu, aby oszacować bliskość punktów zainteresowania lub zaplanować wokół określonego obszaru.

<Tabs groupId="operating-systems">

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


## Kompas dla linijki promienia {#compass-for-radius-ruler}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Kompas linijki](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kompas linijki](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Gdy **Linijka promienia** jest aktywna, mapa wyświetla nakładkę kompasu, która pomaga zorientować się w przestrzeni. Nakładka pokazuje, jak mapa jest wyrównana względem prawdziwej Północy, i może zawierać niebieski trójkąt wskazujący bieżący kierunek urządzenia.

- Pierścień kompasu pokazuje orientację mapy — czy Północ jest na górze, czy obrócona.
- **Niebieski trójkąt** wskazuje kierunek, w którym skierowane jest Twoje urządzenie.
- Aby użyć tej funkcji, urządzenie musi obsługiwać i mieć włączony **czujnik kompasu** (kompas GPS, magnetometr).
- Trzymanie urządzenia poziomo poprawia dokładność i wizualizację.
- Jeśli **niebieski trójkąt** i **czerwona strzałka** (Północ) wskazują w górę, urządzenie jest wyrównane z prawdziwą Północą.

Ta nakładka jest pomocna w nawigacji na zewnątrz, umożliwiając dopasowanie [orientacji mapy](../map/interact-with-map.md#map-orientation--compass) do rzeczywistego środowiska.

| | |
|------------|------------|
| Włącz | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="radius_ruler_item"/>* |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Pozycja środkowa / dolna {#center--bottom-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Linijka promienia w dół](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Inne → Pozycja lokalizacji na ekranie*

![Pozycja wyświetlania Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Linijka promienia w dół](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Aby zwiększyć widoczny promień wokół Twojej lokalizacji, możesz zmienić położenie linijki promienia, wybierając opcję *Środek* lub *Dół*.

Więcej informacji na temat *pozycji na ekranie* znajdziesz w artykule [Konfiguracja ekranu](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Widok 3D {#3d-view}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Format 3D linijki promienia](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Format 3D linijki promienia](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Możesz przełączyć się na **widok 3D**, aby lepiej wizualizować odległości i otaczający teren podczas korzystania z linijki promienia. Ten widok przechyla mapę i zapewnia efekt perspektywy, który rozszerza widoczny promień.

- Dotknij [przycisku lokalizacji](../map/interact-with-map.md#my-location-and-zoom), aby skupić się na swojej pozycji.
- Użyj gestu [przeciągnięcia dwoma palcami w górę](../map/interact-with-map.md#gestures), aby przechylić mapę w tryb 3D.

Okręgi promienia pojawią się z głębią, co jest szczególnie przydatne do planowania tras w pagórkowatych obszarach lub środowiskach miejskich, gdzie ważny jest kontekst pionowy.


## Odległość przez dotyk {#distance-by-tap}

![Odległość między dwoma losowymi punktami na mapie](@site/static/img/widgets/distance_between_two_random_points.png)

Narzędzie **Odległość przez dotyk** pozwala mierzyć odległości między punktami na mapie bez użycia linijki promienia lub tworzenia trasy.

Istnieją dwa przypadki użycia:

- **Odległość od Twojej lokalizacji do punktu**
  Dotknij dowolnego miejsca na mapie, a pojawi się prosta linia od Twojej bieżącej lokalizacji do dotkniętego punktu, wraz z etykietą odległości. Linia pozostaje na ekranie, nawet jeśli dotkniesz gdzie indziej.

- **Odległość między dowolnymi dwoma punktami**
  Dotknij jednocześnie dwóch punktów na mapie (multi-touch). Linia łączy dwa punkty, a zmierzona odległość jest wyświetlana.

| | |
|------------|------------|
| Włącz | **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Rozmiar tekstu (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Format jednostek | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Przewodniki wideo {#video-guides}

Obejrzyj te krótkie samouczki, aby dowiedzieć się, jak korzystać z linijki promienia i powiązanych narzędzi w OsmAnd:

<Tabs groupId="operating-systems">

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

> *Ostatnia aktualizacja: maj 2025*