---
source-hash: 68655a6c7fe1b929b9783bb5b12d4b9eed49a59c076b848011eac29f4e3130f9
sidebar_position: 1
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

Ten artykuł opisuje, jak skonfigurować wygląd mapy podczas nawigacji. Obejmuje to takie funkcje, jak wyświetlanie [POI wzdłuż trasy](#show-points-along-the-route), używanie [alertów ekranowych](#screen-alerts), [wygląd linii trasy](#route-line-appearance) w tym kolor, szerokość i strzałki skrętu. Funkcje te są ściśle związane z [ustawieniami nawigacji po trasie](../setup/route-navigation.md#settings).


## Mapa podczas nawigacji {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Ekran mapy podczas nawigacji](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Ekran mapy podczas nawigacji](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Podczas nawigacji mapa jest narzędziem wizualnym do lokalizowania pozycji, identyfikowania miejsca docelowego, planowania trasy i przeglądania wskazówek nawigacyjnych. Możesz użyć powiększania, aby to zrobić, i przeciągać i obracać mapę w razie potrzeby. Mapa może również wyświetlać informacje o drogach, nazwy ulic, budynki i inne obiekty, aby pomóc w łatwym określeniu trasy.

Podczas nawigacji wygląd mapy dostosowuje się do wybranego profilu nawigacyjnego. Przed rozpoczęciem nawigacji upewnij się, że wygląd mapy jest zgodny z Twoimi preferencjami dotyczącymi jej funkcjonowania podczas jazdy.

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Czas, przez jaki widok mapy jest synchronizowany z bieżącą pozycją po ruchu. | *Wartość:* <br /> Nigdy, 5 sek., 10 sek., 15 sek., 20 sek., 25 sek., 30 sek., 45 sek., 60 sek., 50 sek. |
| *<Translate android="true" ids="auto_zoom_map"/>* | Automatycznie skaluje mapę zgodnie z Twoją prędkością, o ile mapa jest zsynchronizowana z Twoją bieżącą pozycją. | *Wartość:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - ręczne powiększanie. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - powiększenie 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - powiększenie 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - powiększenie 5 m. |
| *<Translate android="true" ids="snap_to_road"/>* | Ikona bieżącej pozycji zostanie powiązana z bieżącą trasą nawigacyjną. | Możesz wyłączyć tę opcję, ale wszystkie opcje związane z drogą, takie jak wyświetlanie pasów ruchu, również nie będą widoczne podczas nawigacji. |
| *<Translate android="true" ids="approximate_bearing"/>* | Określa kierunek na podstawie trasy nawigacyjnej, którą podążasz. | Ustawienie jest widoczne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md). <br /> Te ustawienia powinny być włączone, jeśli orientacja mapy kierunkowej jest odwrócona lub drga podczas korzystania z [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Pokaż punkty wzdłuż trasy {#show-points-along-the-route}

Ustawienie *Pokaż wzdłuż trasy* pozwala skonfigurować dodatkowe parametry trasy i jest wymagane do działania widżetów, takich jak [Nazwa ulicy](../../widgets/nav-widgets#street-name) i [Widżet alertów](../../widgets/nav-widgets.md#alert-widget). Opcje obejmują wyświetlanie [**POI**](#points-of-interest-pois) i [**Moich ulubionych**](#my-favorites) wzdłuż trasy lub używanie ich jako uzupełnienie tych już skonfigurowanych dla profilu, a także wyświetlanie pełnej listy [**Ostrzeżeń o ruchu drogowym**](#traffic-warnings) wzdłuż trasy.

- Możliwość ustawienia różnych odległości (do 5 km, lub 3,11 mil, w zależności od ustawionej [jednostki długości](../../personal/profiles.md#units--formats)) od trasy do pobliskich punktów jest przydatna podczas korzystania z typów routingu, takich jak [Routing po linii prostej](../routing/straight-line-routing.md) lub [Routing punkt-punkt](../routing/direct-to-point-routing.md).
- Dla ustawienia *Pokaż wzdłuż trasy* zaleca się używanie [komunikatów głosowych](../guidance/voice-navigation.md) do nawigacji.
- *POI, Ulubione i Ostrzeżenia o ruchu drogowym* nie są wyświetlane na liście dla trasy, którą już przejechałeś.


### Wyświetlanie i wybieranie punktów {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![punkty wzdłuż trasy](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Pokaż wzdłuż trasy*

![punkty wzdłuż trasy](@site/static/img/navigation/show-points-along-4-ios.png)

</TabItem>

</Tabs>

Podczas tworzenia trasy możesz ustawić typy punktów do wyświetlenia wzdłuż trasy w sekcji *Nawigacja*.


### Punkty zainteresowania (POI) {#points-of-interest-pois}

![Nakładka POI Android](@site/static/img/map/poi_overlay_android.png) ![Nakładka POI iOS](@site/static/img/map/poi_overlay_ios.png)

Ustawienia POI w [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) są powiązane z ustawieniem **Pokaż wzdłuż trasy**. Jest to w zasadzie dodatkowe ustawienie do wyświetlania POI na mapie, bezpośrednio związane z utworzoną trasą.

Gdy określisz wyświetlanie niektórych POI na *Konfiguruj mapę*, wszystkie one są wyświetlane na pobranych mapach, niezależnie od tego, czy wybrałeś kategorie, czy też, jeśli nie zależy Ci na kategorii, wybrałeś pobliskie POI.

- Liczba i identyfikacja POI są *zależne od skali*.

- Ustawienie *Pokaż wzdłuż trasy* wyświetla tę samą kategorię co w *nakładce POI*, ale widzisz *całą listę* wybranych POI naraz, zaczynając od punktu bieżącej lokalizacji w ustawionej odległości w ramach Twojej trasy.

- Możesz usunąć niepotrzebne POI z listy lub edytować je w [menu kontekstowym](../../map/map-context-menu.md), dotykając jednego z nich.

- Lista zawiera wybrane [typy POI](../../map/point-layers-on-map.md#poi-types) i krótkie informacje o każdym z nich, takie jak *ikona typu, nazwa, odległość od bieżącego punktu lokalizacji do POI wzdłuż trasy* oraz *wskazówki, po której stronie trasy w linii prostej i jak daleko znajduje się POI*.


### Moje ulubione {#my-favorites}

Lista zawiera wszystkie wcześniej dodane [Ulubione](../../personal/favorites.md#favorite-point) punkty w pobliżu utworzonej trasy. Podobnie jak w przypadku POI, możesz wybrać odległość, w jakiej znajdują się te punkty.

- Jeśli [wyłączysz wyświetlanie Ulubionych na mapie](../../map/configure-map-menu.md), nie znikną one z listy i nadal będą wyświetlane w [widżecie](../../widgets/nav-widgets.md#street-name) i ogłaszane, gdy się do nich zbliżysz.

- Możesz dodawać swoje *Ulubione punkty* do mapy nie tylko z wyprzedzeniem, ale także podczas nawigacji po trasie.

- *Aby zaktualizować listę*, wyłącz, a następnie ponownie włącz opcję Moje ulubione.

- Każdy punkt zawiera nazwę lub współrzędne, grupę, odległość od bieżącego punktu lokalizacji do *Ulubionego* bezpośrednio na linii trasy, informację o tym, jak daleko na prawo lub lewo punkt znajduje się od linii, oraz kierunek trasy.


### Ostrzeżenia o ruchu drogowym {#traffic-warnings}

*Ostrzeżenia o ruchu drogowym* nie są wyświetlane bezpośrednio na mapie, jak *POI* czy *Moje ulubione*.

- **Aby włączyć** tę opcję i zobaczyć ostrzeżenia, musisz najpierw włączyć i skonfigurować [widżet alertów](../../widgets/nav-widgets.md#alert-widget).

- Wybór wyświetlania *Ostrzeżeń o ruchu drogowym* wzdłuż trasy pozwala zobaczyć całą listę tuż przed rozpoczęciem trasy, co jest przydatne podczas planowania podróży.

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
| **<Translate android="true" ids="screen_alerts"/>** | Powiadomienia, takie jak ostrzeżenia o ruchu drogowym lub ograniczenia prędkości, będą wyświetlane na ekranie jako widżet. Pojawiają się w lewym dolnym rogu podczas nawigacji. | [Typy widżetów alertów](../../widgets/nav-widgets.md#alert-widget) |


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

Możesz wybrać wygląd linii trasy według stylu lub ręcznie wybrać kolor, szerokość i przezroczystość linii. Ponadto możesz wybrać, czy mają być wyświetlane strzałki skrętu i strzałki kierunku na linii.

**Zaawansowane**: ustawienie Dostosuj linię trasy pozwala dostosować wygląd linii trasy, aby wyświetlać zmiany wysokości, znaczne podjazdy lub zjazdy, lód na drodze, drogi nieutwardzone, autostrady i inne możliwe przeszkody. Możesz również wybrać lub utworzyć niestandardowe [schematy kolorów](../../personal/color-palette-schemes.md#routes) do zastosowania na linii trasy.


:::note
 <ProFeature/> Niektóre parametry możesz używać tylko z <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">subskrypcją OsmAnd Pro</a>.
:::


### Kolor {#color}

Ustawienie **Kolor** zmienia odcienie kolorów linii trasy. Ich ogólny kolor zmienia się w zależności od wybranego typu z kolekcji OsmAnd i zgodnie z **Legendą mapy**. Alternatywnie, ich kolor staje się dowolnym kolorem i przezroczystością, które ustawisz ręcznie.

- ***<Translate android="true" id="map_widget_renderer"/>***. Używane z domyślnymi kolorami. Pełny opis kolorów znajduje się w [Domyślne style map](../../map/vector-maps.md#default-map-styles).
    ![styl mapy](@site/static/img/navigation/route/map_st_2.png)

- ***Niestandardowy***. Pozwala wybrać linię w dowolnym preferowanym kolorze i przezroczystości. Możesz wybrać różne ustawienia dla mapy dziennej i osobno dla mapy nocnej.
    ![niestandardowy](@site/static/img/navigation/route/custom.png) ![niestandardowy](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Pokazuje wysokość punktu trasy jako gradient **zielono-żółto-czerwony**. **Zielony** oznacza najniższy punkt trasy, **żółty** oznacza średnią wysokość punktu, a **czerwony** to najwyższy. Jeśli różnica wysokości trasy wynosi < 100 metrów, gradient jest częściowo stosowany lub nie jest stosowany, na przykład dla prostego wzniesienia od 100 metrów do 150 metrów - gradient będzie **zielono-żółty**. Należy pamiętać, że kolor nie reprezentuje bezwzględnej wartości wysokości.
    ![Wysokość](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Linia trasy jest kolorowana w różnych kolorach w zależności od profilu wysokościowego trasy. Szczegółowy opis znajduje się w artykule *Wtyczka Topografia*, sekcja [Nachylenie](../../plugins/topography.md#hillshade-slope-and-altitude-layers).
    ![Wysokość](@site/static/img/navigation/route/Slope.png) ![Wysokość](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Koloruje linię trasy lub ścieżki zgodnie z *klasyfikacją drogi*. Szczegółowy opis znajduje się w artykule *Mapy wektorowe - [Styl drogi](../../map/vector-maps.md#road-style)*.
    ![Wysokość](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Dostarcza informacji o fizycznej nawierzchni drogi lub szlaku. Szczegółowy opis można znaleźć w artykule *Styl mapy OsmAnd - [Nawierzchnia](../../map-legend/osmand.md#surface-smoothness)* w sekcji *Legenda mapy*.
    ![Wysokość](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Klasyfikacja manewrowości drogi lub szlaku dla pojazdów kołowych, szczególnie w odniesieniu do regularności i gładkości nawierzchni. Szczegółowy opis można znaleźć w artykule *Styl mapy OsmAnd - [Gładkość](../../map-legend/osmand.md#surface-smoothness)* w sekcji *Legenda mapy*.
    ![Wysokość](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Koloruje linię trasy lub ścieżki zgodnie z *klasyfikacją dróg zimowych*. Szczegółowy opis można znaleźć w artykule *Mapy wektorowe*, sekcja [Drogi zimowe i lodowe](../../map/vector-maps.md#winter-and-ski).
    ![Wysokość](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Kolorowanie linii trasy lub szlaku według składu nawierzchni. Zazwyczaj używane, gdy sieć dróg jest w dużej mierze nieutwardzona. Szczegółowy opis można znaleźć w artykule *Styl mapy OsmAnd - [Twardość nawierzchni](../../map-legend/osmand.md#surface-smoothness)* w sekcji *Legenda mapy*.
    ![Wysokość](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Trudność szlaków konnych***. Renderuje ścieżki zgodnie z trudnością szlaków konnych.
    ![Wysokość](@site/static/img/navigation/route/firmness.png)


### Szerokość {#width}

Możesz dostosować szerokość linii trasy, aby dopasować ją do drogi lub ścieżki wyświetlanej na mapie. Dla wyraźniejszej identyfikacji wizualnej możesz ręcznie zwiększyć lub zmniejszyć szerokość linii w zależności od potrzeb. Więcej szczegółów znajdziesz w artykule *Ślady i trasy — [Wygląd](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Używane z domyślną szerokością ustawioną przez OsmAnd. Pełny opis można znaleźć w artykule *Mapy wektorowe*, sekcja [Styl mapy](../../map/vector-maps.md#default-map-styles).
    ![styl mapy](@site/static/img/navigation/route/map_st_2.png)

- ***Cienka, Średnia i Pogrubiona szerokość***. Możesz wybrać szerokość linii, aby dopasować ją do szerokości drogi lub mocniej podkreślić linię trasy na mapie.
    ![szerokość](@site/static/img/navigation/route/width_med.png)

- ***Niestandardowy***. Pozwala wyświetlić linię o wymaganej szerokości. Użyj suwaka, aby wybrać szerokość.
    ![niestandardowy](@site/static/img/navigation/route/custom_2.png)


### Strzałki skrętu {#turn-arrows}

Ustawienie Strzałki skrętu pozwala wybrać, czy strzałki skrętu są wyświetlane na linii trasy.

- ***Na mapie***
    ![Wysokość](@site/static/img/navigation/route/turn_arr_on_map_and.png) ![strzałki skrętu iOS na mapie](@site/static/img/navigation/route/turn_arr_ios_on_map.png)

- ***W aplikacji***
    ![Wysokość](@site/static/img/navigation/route/turn_arr.png) ![strzałki skrętu iOS](@site/static/img/navigation/route/turn_arr_ios.png)


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](../setup/route-navigation.md)
- [Nawigacja po śladzie](../setup/gpx-navigation.md)
- [Nawigacja po znacznikach](../setup/markers-navigation.md)
- [Szczegóły trasy](../setup/route-details.md)
- [Ustawienia nawigacji](./navigation-settings.md)
- [Komunikaty głosowe / Powiadomienia](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ostatnia aktualizacja: grudzień 2024*