---
source-hash: 8b4b667b38727ca309c90df02690584a8e0ee6676ef632e8d21492801ca58e69
sidebar_position: 10
title:  Trasy
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

OsmAnd posiada wiele zaawansowanych funkcji do wyświetlania różnych [tras](#type-of-routes) na mapie. Domyślnie trasy te są częścią [map wektorowych](./vector-maps.md#routes) (dane OpenStreetMap), jednak podobną funkcjonalność zapewniają [ślady](./tracks/index.md), które można utworzyć za pomocą funkcji [Planowanie trasy](../plan-route/create-route.md), zaimportować jako [ślady GPX](#save-as-a-track) lub zarejestrować za pomocą [wtyczki Nagrywanie podróży](../plugins/trip-recording.md). Legenda mapy tras znajduje się [tutaj](../map-legend/osmand.md#routes).


## Typy tras {#type-of-routes}

Trasy reprezentują różne aktywności na świeżym powietrzu, wykorzystując dane z [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Dotknięcie **ikony tarczy z numerem trasy lub flagą trasy** na mapie otworzy menu kontekstowe, które dostarcza dodatkowych informacji o trasie i pozwala na jej wykorzystanie w nawigacji.

Możesz skonfigurować filtrowanie niektórych typów tras w menu [Konfiguracja mapy](../map/configure-map-menu.md).

### Trasy rowerowe {#cycle-routes}

[Trasy rowerowe](https://wiki.openstreetmap.org/wiki/Cycle_routes) występują w trzech typach: *lokalne* (`lcn`), *regionalne* (`rcn`), *krajowe* (`ncn`), *międzynarodowe* (`icn`). Trasy rowerowe mogą być również częścią [sieci węzłów](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Możesz wybrać sposób przypisywania kolorów do segmentów trasy:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Więcej informacji można znaleźć w artykule [Legenda mapy](../map-legend/index.md).


### Trasy dla rowerów górskich {#mountain-bike-routes}

Trasy MTB mają specyficzne mapowanie w [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) i mogą być wybierane oddzielnie od tras rowerowych.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Pokazuje szlaki zgodnie ze skalą MTB. Więcej informacji znajduje się w artykule [Legenda mapy](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Pokazuje szlaki MTB zgodnie z Międzynarodowym Stowarzyszeniem Kolarstwa Górskiego, [MTB IMBA](https://www.imba.com/). Więcej informacji znajduje się w artykule [Legenda mapy](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Pokazuje szlaki zgodnie ze skalą MTB. Więcej informacji znajduje się w artykule [Legenda mapy](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. Pokazuje szlaki MTB zgodnie z Międzynarodowym Stowarzyszeniem Kolarstwa Górskiego, [MTB IMBA](https://www.imba.com/). Więcej informacji znajduje się w artykule [Legenda mapy](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Szlaki piesze / spacerowe {#hiking--walking-routes}

[Szlaki piesze](https://wiki.openstreetmap.org/wiki/Walking_Routes) występują w trzech typach: *lokalne* (`lwn`), *regionalne* (`rwn`), *krajowe* (`nwn`), *międzynarodowe* (`iwn`). Szlaki piesze mogą być również częścią [sieci węzłów](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd nie rozdziela tras spacerowych i pieszych, łącząc je w jedną grupę. Możesz wybrać sposób przypisywania kolorów do segmentów trasy:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Koloruje trasy zgodnie z ich indywidualnym [kolorem lokalnym](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (jeśli jest dostępny w OpenStreetMap) i symbolem tarczy turystycznej.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Koloruje według [przynależności do sieci](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Koloruje trasy zgodnie z typem [sieci węzłów](https://wiki.openstreetmap.org/wiki/Node_Networks) (międzynarodowa, regionalna lub lokalna).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Szlaki dla motocykli terenowych {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Funkcja **Szlaki dla motocykli terenowych** pozwala na wyświetlanie na mapie tras przeznaczonych dla motocykli terenowych w oparciu o tag `dirtbike:scale`. Skala ta wyróżnia szlaki odpowiednie do jazdy na motocyklach terenowych, z kolorową nakładką pokazującą poziomy trudności ([Legenda mapy](../map-legend/osmand.md#routes)).  

Możesz aktywować tę funkcję w *Menu → Konfiguracja mapy → Trasy → Trasy dla motocykli terenowych*. System działa podobnie do skali MTB, oferując wizualną reprezentację tras dostosowanych do jazdy na motocyklach terenowych — więcej o [tagu `dirtbike` można znaleźć tutaj](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Trasy wspinaczkowe {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd obsługuje *obszary wspinaczkowe* (`climbing=area`) i *skały wspinaczkowe* (`climbing=crag`), co pozwala na znajdowanie miejsc do [wspinaczki skalnej](https://wiki.openstreetmap.org/wiki/Climbing) bezpośrednio na mapie.

- **Obszary wspinaczkowe** reprezentują **większe strefy**, w których istnieje wiele dróg wspinaczkowych.

- **Skały wspinaczkowe** odnoszą się do **konkretnych formacji skalnych** lub ścian nadających się do wspinaczki.

- Lokalizacje te zawierają **szczegółowe atrybuty**, takie jak:

    - *Stopień trudności wspinaczki* (np. UIAA, francuska, YDS).
    - *Rodzaj skały* (np. wapień, granit).
    - *Długość drogi* (w metrach).
    - *Jakość wspinaczki* (lita, krucha, mieszana).
    - *Dostępność książki wejść*.

Aby włączyć lokalizacje wspinaczkowe na mapie, przejdź do: *Menu → Konfiguracja mapy → Trasy → Trasy wspinaczkowe*.


### Stopień trudności szlaków pieszych {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Niektóre odcinki dróg mogą być częścią wielu tras, ale mogą być indywidualnie pokolorowane, aby przedstawić trudność odcinka w obszarach górskich. Obecnie OsmAnd obsługuje klasyfikacje włoską i szwajcarską, a każda z nich ma określoną listę wymagań sprzętowych, aby uzyskać dostęp do tego odcinka.  

1. [Skala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Skala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Trasy narciarskie {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

Trasy narciarskie to specyficzna grupa [tras](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) w OpenStreetMap. Zazwyczaj trasy te mogą być używane ze stylem mapy [Zima i narty](../map/vector-maps.md#winter-and-ski) ze wszystkimi widocznymi [trasami zjazdowymi](https://wiki.openstreetmap.org/wiki/Pistes).  


### Szlaki konne {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Szlaki konne](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) są wyświetlane jako trasy oznaczone kolorami z symbolami do jazdy konnej.  


### Sporty wodne {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Trasy kajakowe](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) są pokazywane wraz z ikonami dostępu, strefami zagrożenia dla [turystyki kajakowej](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Trasy biegowe {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Trasy biegowe](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) w OpenStreetMap są używane dla nazwanych, numerowanych lub w inny sposób oznaczonych tras biegowych, głównie dla lekkoatletyki.


### Ścieżki zdrowia {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[Ścieżka zdrowia](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) to szlak lub ścieżka wyposażona w przeszkody lub stacje na całej swojej długości, służące do ćwiczeń fizycznych w celu poprawy zdrowia.  


### Trasy podróży {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Trasy podróży są częścią niestandardowych plików [Przewodnika](../plan-route/travel-guides.md) (`travel.obf`), które mogą być generowane z [tras użytkownika](https://osmand.net/blog/routes#generated-travel-routes) lub być częścią dodatkowych [wtyczek](../plugins/index.md).  

Możesz dostosować wyświetlanie niektórych ***Przewodników*** i typów ***śladów***, wyświetlać ślady jako punkty lub ***Grupy punktów*** (na przykład dla przewodników Wikivoyage). Dowiedz się więcej o [Przewodnikach tutaj](../plan-route/travel-guides.md).


## Wyświetlanie tras na mapie {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Aby wyświetlić wymagane trasy na mapie, włącz je na *liście tras* w menu [Konfiguracja mapy](../map/configure-map-menu.md).
- OsmAnd może podświetlać [trasy obecne w OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Można je wybrać, dotykając [symbolu na trasie](#save-as-a-track), a jeśli widoczny zestaw tras jest poprawnie skonfigurowany, można podążać za kolorem i ikonami.
- Możesz utworzyć ślad na podstawie tras za pomocą narzędzia [Planowanie trasy](../plan-route/create-route.md).  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

## Szczegóły obszaru i skały wspinaczkowej {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Po wybraniu [obszaru lub skały wspinaczkowej](../map/routes.md#climbing-routes), OsmAnd wyświetla szczegółowe podsumowanie lokalizacji wspinaczkowej, w tym: nazwę i lokalizację, ocenę trudności wspinaczki (UIAA, francuska, YDS itp.), rodzaj skały, wysokość i długość trasy, jakość wspinaczki i warunki na powierzchni.



## Działania na trasach {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Na mapie można wybrać trasy [piesze, rowerowe, podróżnicze i inne](#type-of-routes), które są oznaczone symbolami [OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), jeśli ma to zastosowanie.

Po dotknięciu **symbolu trasy** na mapie:

- Wyświetlana jest **lista pobliskich tras** w tej lokalizacji.
- Po wybraniu trasy z listy otwiera się [menu kontekstowe](../map/tracks/track-context-menu.md) dla tej trasy, wyświetlające szczegółowe informacje i dostępne działania.

W **menu kontekstowym** możesz:

- Wyświetlić [dodatkowe informacje](#route-info-and-elevation) o wybranej trasie.
- [Zapisać trasę](#save-as-a-track) jako **ślad GPX**.
- [Rozpocząć nawigację](#start-navigation) wzdłuż trasy.


### Informacje o trasie i wysokości {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

W menu kontekstowym będą widoczne następujące informacje:

- **Informacje o trasie**: Nazwa trasy, link OSM (wymagana wtyczka Edycja OSM), Typ, Opis, Dystans, Kierunek, Wzniesienie/Zejście, Zakres wysokości, Sieć, Operator, Stan, Kolor, Trasa okrężna, Punkty początkowy/końcowy i inne.
- **Ogólne**: Rozmiar, Lokalizacja, Utworzono.
- **Dodatkowe informacje**. Wyświetla rodzaj aktywności.
- przyciski akcji: [Zapisz jako](#save-as-a-track) i [Rozpocznij nawigację](#start-navigation).
- [Informacje o wysokości](../navigation/setup/route-details.md#elevation-info). Wyświetla informacje o danych wysokościowych na trasie.
- [Analizuj ślad na mapie](../map/tracks/index.md#analyze-track-on-map). Wyświetla szczegółową analizę danych śladu za pomocą wykresów i map.

Aby wyświetlić wykres wysokości, nachylenia lub szczegółów wysokości dla wybranej trasy, wystarczy dotknąć dowolnej z następujących wartości w menu kontekstowym: **Dystans**, **Podjazd**, **Zjazd** lub **Wysokość**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Zapisz jako ślad {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Aby zapisać trasę jako *plik GPX*, dotknij przycisku **Zapisz (Pobierz)** pod [panelem informacyjnym](../map/tracks/track-context-menu.md#info-panel). Otworzy to panel przycisków [szybkich akcji](../map/tracks/track-context-menu.md#track-actions), gdzie będziesz mieć dostęp do działań na śladzie, takich jak zmiana [wyglądu](./tracks/appearance.md), [nawigacja](../navigation/setup/route-navigation.md) lub edycja w [Planowaniu trasy](../plan-route/create-route.md).


### Rozpocznij nawigację {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Aby rozpocząć nawigację wzdłuż wybranej trasy OSM, dotknij przycisku **Rozpocznij nawigację** w [**panelu informacyjnym**](../map/tracks/track-context-menu.md#info-panel).

Spowoduje to uruchomienie trybu [**Nawigacji po śladzie**](../navigation/setup/gpx-navigation.md), co pozwoli na podążanie trasą z komunikatami głosowymi i funkcjami nawigacyjnymi.



### Szybkie akcje {#quick-actions}

Możesz dostosować, czy trasy są włączone, czy wyłączone, za pomocą widżetu [Szybka akcja](../widgets/quick-action.md#configure-map).


## Wyszukiwanie tras {#routes-search}

Znajdź trasy za pomocą funkcji [Wyszukaj](../search/index.md) według nazwy lub wybierając "Trasy" w sekcji [Kategorie](../search/search-poi.md#).

Aby wyszukać, przejdź do menu *<Translate android="true" ids="search_button"/>* lub *<Translate android="true" ids="search_button,search_categories"/>* i wprowadź swoją aktywność.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Przejdź do *<Translate android="true" ids="search_button,search_categories,poi_routes"/>*, aby znaleźć żądane trasy. Trasy zawierają nazwę, rodzaj aktywności, długość, lokalizację i odległość do najbliższego punktu.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Użyj przycisku filtrów (w prawym górnym rogu), aby wyświetlić tylko żądane trasy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](./map-context-menu.md)
- [Konfiguracja mapy](./configure-map-menu.md)
- [Ślady](./tracks/index.md)
- [Menu kontekstowe śladów](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)
- [Wygląd linii trasy nawigacyjnej](../navigation/guidance/map-during-navigation.md#route-line-appearance)