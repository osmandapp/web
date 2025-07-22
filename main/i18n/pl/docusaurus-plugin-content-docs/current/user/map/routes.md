---
source-hash: 0e2f6c946c393607b5033a3e8d96b50750de7efd28c223841bc9d886f3ec9f2d
sidebar_position: 10
title: Trasy
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

OsmAnd posiada wiele potężnych funkcji do wyświetlania różnych [tras](#type-of-routes) na mapie. Domyślnie trasy te są częścią [map wektorowych](./vector-maps.md#routes) (dane OpenStreetMap), jednak podobną funkcjonalność zapewniają [ślady](./tracks/index.md), które można tworzyć za pomocą funkcji [Planuj trasę](../plan-route/create-route.md), importować jako [ślady GPX](#save-as-a-track) lub nagrywać za pomocą [wtyczki Nagrywanie podróży](../plugins/trip-recording.md).


## Rodzaje tras {#type-of-routes}

Trasy reprezentują różne aktywności na świeżym powietrzu, wykorzystując dane z [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Dotknięcie **ikony tarczy z numerem trasy lub flagą trasy** na mapie otworzy menu kontekstowe, które dostarczy dodatkowych informacji o trasie i umożliwi jej wykorzystanie jako części nawigacji.

Możesz skonfigurować filtrowanie niektórych typów tras w menu [Konfiguruj mapę](../map/configure-map-menu.md).

### Trasy rowerowe {#cycle-routes}

[Trasy rowerowe](https://wiki.openstreetmap.org/wiki/Cycle_routes) występują w trzech typach: *lokalne* (`lcn`), *regionalne* (`rcn`), *krajowe* (`ncn`), *międzynarodowe* (`icn`). Ponadto, trasy rowerowe mogą być częścią [sieci węzłów](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Możesz wybrać sposób przypisywania kolorów do segmentów trasy:

- ***<Translate android="true" ids="layer_route"/>***.
![Trasy mapy - trasy rowerowe](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![Trasy mapy - sieci węzłów rowerowych](@site/static/img/map/map-routes-cycle-node-networks.png)

Więcej informacji znajdziesz w artykule [Legenda mapy](../map-legend/index.md).


### Trasy rowerów górskich {#mountain-bike-routes}

Trasy MTB mają specyficzne odwzorowanie w [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) i mogą być wybierane oddzielnie od tras rowerowych.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Pokazuje szlaki zgodnie ze skalą MTB. Więcej informacji znajduje się w artykule [Legenda mapy](../map-legend/index.md).
![Trasy mapy - szlaki MTB](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***. Pokazuje szlaki MTB zgodnie z International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Więcej informacji znajduje się w artykule [Legenda mapy](../map-legend/index.md).
![Trasy mapy - szlaki MTB](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Trasy piesze / spacerowe {#hiking--walking-routes}

[Trasy piesze](https://wiki.openstreetmap.org/wiki/Walking_Routes) występują w trzech typach: *lokalne* (`lwn`), *regionalne* (`rwn`), *krajowe* (`nwn`), *międzynarodowe* (`iwn`). Ponadto, trasy piesze mogą być częścią [sieci węzłów](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd nie rozdziela tras spacerowych i pieszych, łącząc je w jedną grupę. Możesz wybrać sposób przypisywania kolorów do segmentów trasy:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Koloruje trasy zgodnie z ich indywidualnym [lokalnym kolorem](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (jeśli dostępne w OpenStreetMap) i symbolem tarczy turystycznej.
![Trasy mapy - piesze osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Koloruje według [przynależności do sieci](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).
![Trasy mapy - sieć piesza](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Koloruje trasy zgodnie z typem [sieci węzłów](https://wiki.openstreetmap.org/wiki/Node_Networks) (międzynarodowa, regionalna lub lokalna).
![Trasy mapy - sieci węzłów pieszych](@site/static/img/map/map-routes-hiking-node-networks.png)


### Szlaki dla motocykli terenowych {#dirt-bike-trails}

![Trasy mapy - szlaki dla motocykli terenowych](@site/static/img/map/map-routes-dirt-bike-trails.png)

Funkcja **Szlaki dla motocykli terenowych** umożliwia wyświetlanie na mapie tras specyficznych dla motocykli terenowych, opartych na tagu `dirtbike:scale`. Ta skala podkreśla szlaki odpowiednie do jazdy motocyklem terenowym, z kolorową nakładką pokazującą poziomy trudności.

Możesz aktywować tę funkcję w *Menu → Konfiguruj mapę → Trasy → Szlaki dla motocykli terenowych*. System działa podobnie do skali MTB, oferując wizualną reprezentację tras dostosowanych do jazdy motocyklem terenowym — więcej o tagu [`dirtbike` można znaleźć tutaj](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Trasy wspinaczkowe {#climbing-routes}

![Trasy mapy - Trasy wspinaczkowe](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd obsługuje *obszary wspinaczkowe* (`climbing=area`) i *formacje wspinaczkowe* (`climbing=crag`), umożliwiając znajdowanie miejsc do [wspinaczki skałkowej](https://wiki.openstreetmap.org/wiki/Climbing) bezpośrednio na mapie.

- **Obszary wspinaczkowe** reprezentują **większe strefy**, gdzie istnieje wiele tras wspinaczkowych.

- **Formacje wspinaczkowe** odnoszą się do **konkretnych formacji skalnych** lub ścian odpowiednich do wspinaczki.

- Te lokalizacje zawierają **szczegółowe atrybuty**, takie jak:

    - *Stopień trudności wspinaczki* (np. UIAA, francuski, YDS).
    - *Rodzaj skały* (np. wapień, granit).
    - *Długość trasy* (w metrach).
    - *Jakość wspinaczki* (solidna, luźna, mieszana).
    - *Dostępność dziennika szczytowego*.

Aby włączyć lokalizacje wspinaczkowe na mapie, przejdź do: *Menu → Konfiguruj mapę → Trasy → Trasy wspinaczkowe*.


### Stopień trudności szlaków turystycznych {#hiking-trails-difficulty-grade}

![Trasy mapy - wędrówki alpejskie](@site/static/img/map/map-routes-alpine-hiking.png)

Niektóre segmenty dróg mogą być częścią wielu tras, ale mogą być indywidualnie kolorowane, aby przedstawić trudność segmentu w obszarach górskich. Obecnie OsmAnd obsługuje klasyfikacje włoską i szwajcarską, a każda z nich ma specyficzną listę wymagań sprzętowych, aby uzyskać dostęp do tego segmentu.

1. [Skala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Skala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)


### Trasy narciarskie {#ski-routes}

![Trasy mapy - stoki narciarskie](@site/static/img/map/map-routes-ski-slopes.png)

Trasy narciarskie to specyficzna grupa [tras](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) w OpenStreetMap. Zazwyczaj te trasy mogą być używane ze stylem mapy [Zima i narty](../map/vector-maps.md#winter-and-ski) ze wszystkimi widocznymi [trasami narciarskimi](https://wiki.openstreetmap.org/wiki/Pistes).


### Trasy konne {#horse-routes}

![Trasy mapy - trasy konne](@site/static/img/map/map-routes-horse.png)

[Trasy konne](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) są wyświetlane jako trasy oznaczone kolorami z symbolami do jazdy konnej.


### Sporty wodne {#whitewater-sports}

![Trasy mapy - sporty wodne](@site/static/img/map/map-routes-whitewater-sport.png)

[Trasy wodne](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) są wyświetlane wraz z ikonami dostępu i strefami zagrożenia dla [turystyki wodnej](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).


### Trasy biegowe {#running-routes}

![Trasy fitness](@site/static/img/map/fitness_1.png)

[Trasy biegowe](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) w OpenStreetMap są używane do oznaczania nazwanych, numerowanych lub w inny sposób oznaczonych tras biegowych, głównie dla lekkoatletyki.


### Ścieżki fitness {#fitness-trails}

![Trasy fitness](@site/static/img/map/fitness_route.png)

[Ścieżka fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) to szlak lub ścieżka wyposażona w przeszkody lub stacje na całej swojej długości, służące do ćwiczeń ciała w celu poprawy zdrowia.


### Trasy podróży {#travel-routes}

<InfoAndroidOnly />

![Trasy podróży](@site/static/img/map/travel_route_2.png) ![Trasy podróży](@site/static/img/map/travel_routes.png)

Trasy podróży są częścią niestandardowych plików [Przewodnika podróży](../plan-route/travel-guides.md) (`travel.obf`), które mogą być generowane z [tras użytkownika](https://osmand.net/blog/routes#generated-travel-routes) lub być częścią dodatkowych [wtyczek](../plugins/index.md).

Możesz dostosować wyświetlanie niektórych ***Przewodników*** i typów ***śladów***, wyświetlać ślady jako punkty lub ***Grupy punktów*** (na przykład dla przewodników Wikivoyage). Dowiedz się więcej o [Przewodnikach podróży tutaj](../plan-route/travel-guides.md).


## Wyświetlanie tras na mapie {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Konfiguruj sekcję tras mapy](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu śladu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Aby wyświetlić wymagane trasy na mapie, włącz je na *Liście tras* w menu [Konfiguruj mapę](../map/configure-map-menu.md).
- OsmAnd może podświetlać [trasy obecne w OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Można je wybrać, dotykając [symbolu na trasie](#save-as-a-track), a jeśli widoczny zestaw tras jest poprawnie skonfigurowany, można podążać za kolorem i ikonami.
- Możesz utworzyć ślad na trasach za pomocą narzędzia [Planuj trasę](../plan-route/create-route.md).

![Trasy mapy - piesze osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Trasy mapy - sieci węzłów rowerowych](@site/static/img/map/map-routes-cycle-node-networks.png)



## Działania z trasami {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informacje o trasie](@site/static/img/map/routes_osm.png) ![Informacje o trasie](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informacje o trasie](@site/static/img/map/routes_osm_ios.png) ![Informacje o trasie](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Na mapie możesz wybrać trasy do [wędrówek, jazdy na rowerze, podróży i innych](#type-of-routes), które są oznaczone [symbolami OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), jeśli ma to zastosowanie.

Po dotknięciu **symbolu trasy** na mapie:

- Wyświetlona zostanie **lista pobliskich tras** w tej lokalizacji.
- Po wybraniu trasy z listy otworzy się [menu kontekstowe](../map/tracks/track-context-menu.md) dla tej trasy, wyświetlając szczegółowe informacje i dostępne działania.

W **menu kontekstowym** możesz:

- Wyświetlić [dodatkowe informacje](#route-info-and-elevation) o wybranej trasie.
- [Zapisać trasę](#save-as-a-track) jako **ślad GPX**.
- [Rozpocząć nawigację](#start-navigation) wzdłuż trasy.


### Informacje o trasie i wysokość {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informacje o trasie](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informacje o trasie](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

W menu kontekstowym będą widoczne następujące informacje:

- **Informacje o trasie**: Nazwa trasy, link OSM (wymagana wtyczka OSM Editing), Typ, Opis, Dystans, Kierunek, Wzniesienie/Spadek, Zakres wysokości, Sieć, Operator, Stan, Kolor, Podróż w obie strony, Punkty początkowe/końcowe i inne.
- **Ogólne**: Rozmiar, Lokalizacja, Utworzono.
- **Dodatkowe informacje**. Wyświetla typ aktywności.
- Przyciski akcji: [Zapisz jako](#save-as-a-track) i [Rozpocznij nawigację](#start-navigation).
- [Informacje o wysokości](../navigation/setup/route-details.md#elevation-info). Wyświetla informacje o danych wysokościowych na trasie.
- [Analizuj ślad na mapie](../map/tracks/index.md#analyze-track-on-map). Wyświetla szczegółową analizę danych śladu za pomocą wykresów i map.

Aby wyświetlić wykres wysokości, nachylenia lub szczegółów wysokości dla wybranej trasy, wystarczy dotknąć dowolnej z następujących wartości w menu kontekstowym: **Dystans**, **Podjazd**, **Zjazd** lub **Wysokość**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy na ziemi](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy na ziemi](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### Zapisz jako ślad {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy na ziemi](@site/static/img/map/routes-4.png) ![Trasy na ziemi](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy na ziemi](@site/static/img/map/hiking.png) ![Trasy na ziemi](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Aby zapisać trasę jako *plik GPX*, dotknij przycisku **Zapisz (Pobierz)** pod [panelem informacyjnym](../map/tracks/track-context-menu.md#info-panel). Spowoduje to otwarcie panelu przycisków [Szybkie akcje](../map/tracks/track-context-menu.md#track-actions), gdzie będziesz mieć dostęp do akcji śladu, takich jak zmiana [Wyglądu](./tracks/appearance.md), [Nawigacji](../navigation/setup/route-navigation.md) lub edycja [Planuj trasę](../plan-route/create-route.md).


### Rozpocznij nawigację {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy na ziemi](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy na ziemi](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Aby rozpocząć nawigację wzdłuż wybranej trasy OSM, dotknij przycisku **Rozpocznij nawigację** w [**panelu informacyjnym**](../map/tracks/track-context-menu.md#info-panel).

Spowoduje to uruchomienie trybu [**Nawigacja po śladzie**](../navigation/setup/gpx-navigation.md), umożliwiając podążanie trasą z wskazówkami głosowymi i funkcjami nawigacji.


### Szybkie akcje {#quick-actions}

Możesz dostosować, czy trasy są włączone, czy wyłączone, za pomocą widżetu [Szybkie akcje](../widgets/quick-action.md#configure-map).


## Wyszukiwanie tras {#routes-search}

Znajdź trasy za pomocą funkcji [Wyszukiwanie](../search/index.md) według nazwy lub wybierając „Trasy” w sekcji [Kategorie](../search/search-poi.md#).

Aby wyszukać, przejdź do menu *<Translate android="true" ids="search_button"/>* lub *<Translate android="true" ids="search_button,search_categories"/>* i wprowadź swoją aktywność.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy na ziemi](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy na ziemi](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

Przejdź do *<Translate android="true" ids="search_button,search_categories,poi_routes"/>*, aby znaleźć żądane trasy. Trasy zawierają nazwę, typ aktywności, długość, lokalizację i odległość do najbliższego punktu.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy na ziemi](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy na ziemi](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Użyj przycisku filtrów (prawy górny róg), aby wyświetlić tylko żądane trasy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy na ziemi](@site/static/img/map/route_search_2.png) ![Trasy na ziemi](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trasy na ziemi](@site/static/img/map/route_search_2_ios.png) ![Trasy na ziemi](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](./map-context-menu.md)
- [Konfiguruj mapę](./configure-map-menu.md)
- [Ślady](./tracks/index.md)
- [Menu kontekstowe śladów](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)
- [Wygląd linii trasy nawigacji](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Ostatnia aktualizacja: maj 2025*