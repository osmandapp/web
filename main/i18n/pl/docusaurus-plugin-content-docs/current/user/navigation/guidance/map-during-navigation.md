---
source-hash: 5ea4f39511656fdb1c0f82a7a7dd625d84541afc04cd5b239076bb4ba1bdd62c
sidebar_position: 2
title: Ekran mapy podczas nawigacji
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

W tym artykule opisano, jak skonfigurować wygląd mapy podczas nawigacji. Obejmuje to takie funkcje, jak wyświetlanie [POI na trasie](#show-points-along-the-route), używanie [alertów ekranowych](#screen-alerts), [wygląd linii trasy](#route-line-appearance), w tym kolor, szerokość i strzałki skrętów. Funkcje te są ściśle powiązane z [ustawieniami nawigacji po trasie](../setup/route-navigation.md#settings).


## Mapa podczas nawigacji {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Ekran mapy podczas nawigacji](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Ekran mapy podczas nawigacji](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Podczas nawigacji mapa jest narzędziem wizualnym do lokalizowania pozycji, identyfikowania celu podróży, planowania trasy i wyświetlania wskazówek nawigacyjnych. Można w tym celu używać powiększania, a także przeciągać i obracać mapę w razie potrzeby. Mapa może również wyświetlać informacje o drogach, nazwy ulic, budynki i inne obiekty, aby ułatwić określenie trasy.  

Podczas nawigacji wygląd mapy dostosowuje się do wybranego profilu nawigacji. Przed rozpoczęciem nawigacji upewnij się, że wygląd mapy jest zgodny z Twoimi preferencjami dotyczącymi jej działania podczas jazdy.

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Czas, przez który widok mapy jest zsynchronizowany z bieżącą pozycją po przesunięciu. | *Wartość:* <br /> Nigdy, 5 s, 10 s, 15 s, 20 s, 25 s, 30 s, 45 s, 60 s, 50 s. |
| *<Translate android="true" ids="auto_zoom_map"/>*  | Automatycznie skaluj mapę w zależności od prędkości, o ile mapa jest zsynchronizowana z bieżącą pozycją. | *Wartość:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - powiększenie ręczne. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - powiększenie wynosi 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - powiększenie wynosi 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - powiększenie wynosi 5 m. |
| *<Translate android="true" ids="snap_to_road"/>*  | Ikona bieżącej pozycji będzie powiązana z bieżącą trasą nawigacji. | Można wyłączyć tę opcję, ale wszystkie opcje związane z drogą, takie jak wyświetlanie pasów ruchu, również nie będą widoczne podczas nawigacji. |
| *<Translate android="true" ids="approximate_bearing"/>* | Określa namiar na podstawie trasy nawigacyjnej, którą podążasz. | Ustawienie jest widoczne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md). <br /> Ustawienia te powinny być włączone, jeśli orientacja mapy kierunkowej jest odwrócona lub drga podczas korzystania z [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Pokaż punkty na trasie {#show-points-along-the-route}

Ustawienie *Pokaż na trasie* pozwala skonfigurować dodatkowe parametry trasy i jest wymagane do działania widżetów, takich jak [Nazwa ulicy](../../widgets/nav-widgets#street-name) i [Widżet alertów](../../widgets/nav-widgets.md#alert-widget). Opcje obejmują wyświetlanie [**POI**](#points-of-interest-pois) i [**Moich ulubionych**](#my-favorites) na trasie lub używanie ich jako dodatku do już skonfigurowanych dla profilu, a także wyświetlanie pełnej listy [**Ostrzeżeń drogowych**](#traffic-warnings) na trasie.  

- Możliwość ustawienia różnych odległości (do 5 km lub 3,11 mili, w zależności od ustawionej [jednostki długości](../../personal/profiles.md#units--formats)) od trasy do pobliskich punktów jest przydatna podczas korzystania z typów wyznaczania tras, takich jak [Linia prosta](../routing/straight-line-routing.md) lub [Bezpośrednio do punktu](../routing/direct-to-point-routing.md).
- W przypadku ustawienia *Pokaż na trasie* zaleca się używanie [komunikatów głosowych](../guidance/voice-navigation.md) do nawigacji.
- *POI, Ulubione i Ostrzeżenia drogowe* nie są wyświetlane na liście dla już przebytej trasy.


### Wyświetlanie i wybieranie punktów {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![punkty na trasie](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Pokaż na trasie*

![punkty na trasie](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Podczas tworzenia trasy można ustawić typy punktów, które mają być wyświetlane na trasie w sekcji *Nawigacja*.


### Użyteczne miejsca (POI) {#points-of-interest-pois}

![Nakładka POI Android](@site/static/img/map/poi_overlay_android.png) ![Nakładka POI iOS](@site/static/img/map/poi_overlay_ios.png)

Ustawienia POI w [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) są powiązane z ustawieniem **Pokaż na trasie**. Jest to zasadniczo dodatkowe ustawienie wyświetlania POI na mapie, bezpośrednio związane z utworzoną trasą.  

Gdy określisz wyświetlanie określonych POI w menu *Konfiguruj mapę*, wszystkie z nich są wyświetlane na pobranych mapach, niezależnie od tego, czy wybrano kategorie, czy też, jeśli nie ma znaczenia, która kategoria, wybrano pobliskie POI.  

- Liczba i identyfikacja POI jest *zależna od skali*.

- Ustawienie *Pokaż na trasie* wyświetla tę samą kategorię, co w *nakładce POI*, ale widzisz *całą listę* wybranych POI naraz, zaczynając od punktu bieżącej lokalizacji w ustawionej odległości na trasie.  

- Możesz usunąć niepotrzebne POI z listy lub edytować je w [menu kontekstowym](../../map/map-context-menu.md), dotykając jednego z nich.

- Lista zawiera wybrane [typy POI](../../map/point-layers-on-map.md#poi-types) i krótkie informacje o każdym z nich, takie jak *ikona typu, nazwa, odległość od bieżącej lokalizacji do POI na trasie* oraz *wskazania, po której stronie trasy w linii prostej i jak daleko znajduje się POI*.  


### Moje ulubione {#my-favorites}

Lista zawiera wszystkie wcześniej dodane punkty [Ulubione](../../personal/favorites.md#favorite-point) w pobliżu utworzonej trasy. Podobnie jak w przypadku POI, można wybrać odległość, w jakiej znajdują się te punkty.  

- Jeśli [wyłączysz wyświetlanie Ulubionych na mapie](../../map/configure-map-menu.md), nie znikną one z listy i będą nadal wyświetlane w [widżecie](../../widgets/nav-widgets.md#street-name) oraz ogłaszane po zbliżeniu się do nich.

- Możesz dodawać swoje *Ulubione punkty* do mapy nie tylko z wyprzedzeniem, ale także podczas nawigacji po trasie.

- *Aby zaktualizować listę*, wyłącz i ponownie włącz opcję Moje ulubione.

- Każdy punkt zawiera nazwę lub współrzędne, grupę, odległość od bieżącej lokalizacji do *Ulubionego* bezpośrednio na linii trasy, informację o tym, jak daleko na prawo lub lewo od linii znajduje się punkt oraz kierunek trasy.


### Ostrzeżenia drogowe {#traffic-warnings}

*Ostrzeżenia drogowe* nie są wyświetlane bezpośrednio na mapie, jak *POI* lub *Moje ulubione*.

- **Aby włączyć** tę opcję i zobaczyć ostrzeżenia, należy najpierw włączyć i skonfigurować [widżet Alerty](../../widgets/nav-widgets.md#alert-widget).

- Wybór wyświetlania *Ostrzeżeń drogowych* na trasie pozwala zobaczyć całą listę tuż przed rozpoczęciem trasy, co jest przydatne podczas planowania podróży.

- Możesz usunąć niepotrzebne alerty z listy lub dotknąć nazwy alertu, aby [edytować lokalizację](../../map/map-context-menu.md#avoid-road).


## Alerty ekranowe {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Powiadomienia, takie jak ostrzeżenia drogowe lub ograniczenia prędkości, pojawią się na ekranie jako widżet. Pojawiają się w lewym dolnym rogu podczas nawigacji. | [Typy widżetów alertów](../../widgets/nav-widgets.md#alert-widget) |


## Wygląd linii trasy {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Trasa nawigacji Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Trasa nawigacji Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Możesz wybrać wygląd linii trasy według stylu lub ręcznie wybrać kolor, szerokość i przezroczystość linii. Ponadto można wybrać, czy na linii mają być wyświetlane strzałki skrętów i strzałki kierunku.

**Zaawansowane**: ustawienie Dostosuj linię trasy pozwala dostosować wygląd linii trasy, aby wyświetlać zmiany wysokości, znaczne podjazdy lub zjazdy, lód na drodze, drogi nieutwardzone, autostrady i inne możliwe przeszkody. Możesz także wybrać lub utworzyć niestandardowe [schematy kolorów](../../personal/color-palette-schemes.md#routes), które zostaną zastosowane do linii trasy.


:::note
 <ProFeature/> Niektóre parametry można używać tylko z subskrypcją <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro</a>.
:::


### Kolor {#color}

Ustawienie **Kolor** zmienia odcienie kolorów linii trasy. Ich ogólny kolor zmienia się w zależności od wybranego typu z kolekcji OsmAnd i zgodnie z **Legendą mapy**. Alternatywnie, ich kolor staje się dowolnym kolorem i przezroczystością ustawioną ręcznie.

- ***<Translate android="true" id="map_widget_renderer"/>***. Używane z domyślnymi kolorami. Pełny opis kolorów znajduje się w [Domyślne style mapy](../../map/vector-maps.md#default-map-styles).  
    ![styl mapy](@site/static/img/navigation/route/map_st_2.png)

- ***Niestandardowy***. Pozwala wybrać linię w dowolnym preferowanym kolorze i przezroczystości. Możesz wybrać różne ustawienia dla mapy dziennej i osobno dla mapy nocnej.  
    ![niestandardowy](@site/static/img/navigation/route/custom.png)   ![niestandardowy](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Pokazuje wysokość punktu trasy jako gradient **zielono-żółto-czerwony**. **Zielony** oznacza najniższy punkt trasy, **żółty** oznacza średnią wysokość punktu, a **czerwony** najwyższą. Jeśli różnica wysokości trasy jest mniejsza niż 100 metrów, gradient jest stosowany częściowo lub nie jest stosowany, na przykład dla prostego wzniesienia od 100 metrów do 150 metrów - gradient będzie **zielono-żółty**. Należy pamiętać, że kolor nie reprezentuje bezwzględnej wartości wysokości.  
    ![Wysokość](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Linia trasy jest pokolorowana różnymi kolorami w zależności od profilu wysokościowego trasy. Szczegółowy opis znajduje się w artykule *Wtyczka Rzeźba terenu*, sekcja [Nachylenie](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Wysokość](@site/static/img/navigation/route/Slope.png)   ![Wysokość](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Koloruje linię trasy lub śladu zgodnie z *klasyfikacją dróg*. Szczegółowy opis znajduje się w sekcji *Mapy wektorowe - [Styl drogi](../../map/vector-maps.md#road-style)*.  
    ![Wysokość](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Dostarcza informacji o fizycznej nawierzchni drogi lub szlaku. Szczegółowy opis można znaleźć w artykule *Styl mapy OsmAnd - [Nawierzchnia](../../map-legend/osmand.md#surface-smoothness)* w sekcji *Legenda mapy*.  
    ![Wysokość](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Klasyfikacja manewrowości drogi lub szlaku dla pojazdów kołowych, zwłaszcza w odniesieniu do regularności i gładkości nawierzchni. Szczegółowy opis można znaleźć w artykule *Styl mapy OsmAnd - [Gładkość](../../map-legend/osmand.md#surface-smoothness)* w sekcji *Legenda mapy*.  
    ![Wysokość](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Koloruje linię trasy lub śladu zgodnie z *klasyfikacją dróg zimowych*. Szczegółowy opis można znaleźć w artykule *Mapy wektorowe*, sekcja [Drogi zimowe i lodowe](../../map/vector-maps.md#winter-and-ski).  
    ![Wysokość](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Kolorowanie linii trasy lub szlaku według składu nawierzchni. Zazwyczaj używane, gdy sieć drogowa jest w dużej mierze nieutwardzona. Szczegółowy opis można znaleźć w artykule *Styl mapy OsmAnd - [Twardość nawierzchni](../../map-legend/osmand.md#surface-smoothness)* w sekcji *Legenda mapy*.  
    ![Wysokość](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Trudność szlaków konnych***. Renderuj ścieżki zgodnie z trudnością szlaków konnych.  
    ![Wysokość](@site/static/img/navigation/route/firmness.png)


### Szerokość {#width}

Możesz dostosować szerokość linii trasy, aby dopasować ją do drogi lub ścieżki wyświetlanej na mapie. W celu wyraźniejszej identyfikacji wizualnej można w razie potrzeby ręcznie zwiększyć lub zmniejszyć szerokość linii. Więcej szczegółów można znaleźć w artykule *Ślady i trasy — [Wygląd](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Jest używany z domyślną szerokością ustawioną przez OsmAnd. Pełny opis można znaleźć w artykule *Mapy wektorowe*, sekcja [Styl mapy](../../map/vector-maps.md#default-map-styles).  
    ![styl mapy](@site/static/img/navigation/route/map_st_2.png)

- ***Szerokości Cienka, Średnia i Gruba***. Możesz wybrać szerokość linii, aby dopasować ją do szerokości drogi lub mocniej podkreślić linię trasy na mapie.  
    ![szerokość](@site/static/img/navigation/route/width_med.png)

- ***Niestandardowa***. Pozwala wyświetlić linię o wymaganej szerokości. Użyj suwaka, aby wybrać szerokość.  
    ![niestandardowa](@site/static/img/navigation/route/custom_2.png)  


### Strzałki skrętów {#turn-arrows}

Ustawienie Strzałki skrętów pozwala wybrać, czy strzałki skrętów mają być wyświetlane na linii trasy.  

- ***Na mapie***  
    ![Wysokość](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![strzałki_skrętu_ios_mapa](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***W aplikacji***  
    ![Wysokość](@site/static/img/navigation/route/turn_arr.png)   ![strzałki_skrętu_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](../setup/route-navigation.md)
- [Nawigacja po śladzie GPX](../setup/gpx-navigation.md)
- [Nawigacja według znaczników](../setup/markers-navigation.md)
- [Szczegóły trasy](../setup/route-details.md)
- [Ustawienia nawigacji](./navigation-settings.md)
- [Komunikaty głosowe / Powiadomienia](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)