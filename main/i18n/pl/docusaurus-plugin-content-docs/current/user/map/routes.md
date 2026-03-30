---
source-hash: 60a235c8ccc59d6c76a3294bc5e7f383d03bb68fb86ac418c8ba35347a55ac84
sidebar_position: 11
title:  Routes
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


## Overview {#overview}

OsmAnd posiada wiele zaawansowanych funkcji do wyświetlania różnych [tras](#type-of-routes) na mapie. Domyślnie trasy te są częścią [map wektorowych](./vector-maps.md#routes) (dane OpenStreetMap), jednak podobną funkcjonalność zapewniają [ślady](./tracks/index.md), które można utworzyć za pomocą [Plan a Route](../plan-route/create-route.md), zaimportować jako [GPX tracks](#save-as-a-track) lub zarejestrować za pomocą [wtyczki Trip Recording](../plugins/trip-recording.md). Routes Map Ledend znajduje się [tutaj](../map-legend/osmand.md#routes).


## Type of Routes {#type-of-routes}

Trasy reprezentują różne aktywności na świeżym powietrzu, wykorzystując dane z [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Dotknięcie **ikony tarczy z numerem trasy lub flagą trasy** na mapie otworzy menu kontekstowe, które dostarcza dodatkowych informacji o trasie i pozwala na jej wykorzystanie w nawigacji.

Możesz skonfigurować filtrowanie niektórych typów tras w menu [Configure Map](../map/configure-map-menu.md).

### Cycle routes {#cycle-routes}

[Cycle routes](https://wiki.openstreetmap.org/wiki/Cycle_routes) występują w trzech typach: *local* (`lcn`), *regional* (`rcn`), *national* (`ncn`), *international* (`icn`). Trasy rowerowe mogą być również częścią [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Możesz wybrać sposób przypisywania kolorów do segmentów trasy:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Więcej informacji można znaleźć w artykule [Map Legend](../map-legend/index.md).


### Mountain bike routes {#mountain-bike-routes}

Trasy MTB mają specyficzne mapowanie w [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) i mogą być wybierane oddzielnie od tras rowerowych.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  Pokazuje szlaki zgodnie ze skalą MTB. Więcej informacji znajduje się w artykule [Map Legend](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Pokazuje szlaki MTB zgodnie z International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Więcej informacji znajduje się w artykule [Map legend](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Hiking / Walking routes {#hiking--walking-routes}

[Hiking routes](https://wiki.openstreetmap.org/wiki/Walking_Routes) występują w trzech typach: *local* (`lwn`), *regional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Szlaki piesze mogą być również częścią [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd nie rozdziela tras spacerowych i pieszych, łącząc je w jedną grupę. Możesz wybrać sposób przypisywania kolorów do segmentów trasy:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Koloruje trasy zgodnie z ich indywidualnym [local color](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (jeśli jest dostępny w OpenStreetMap) i symbolem tarczy turystycznej.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Koloruje według [network affiliation](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Koloruje trasy zgodnie z typem [node network](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional or local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Dirt Bike Trails {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Funkcja **Dirt Bike Trails** pozwala na wyświetlanie na mapie tras specyficznych dla motocykli terenowych w oparciu o tag `dirtbike:scale`. Skala ta wyróżnia szlaki odpowiednie do jazdy na motocyklach terenowych, z kolorową nakładką pokazującą poziomy trudności ([Map Legend](../map-legend/osmand.md#routes)).  

Możesz aktywować tę funkcję w *Menu → Configure map → Routes → Dirt bike routes*. System działa podobnie do skali MTB, oferując wizualną reprezentację tras dostosowanych do jazdy na motocyklach terenowych — więcej o [tagu `dirtbike` można znaleźć tutaj](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Climbing Routes {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd obsługuje *obszary wspinaczkowe* (`climbing=area`) i *skały wspinaczkowe* (`climbing=crag`), co pozwala na znajdowanie miejsc do [rock climbing](https://wiki.openstreetmap.org/wiki/Climbing) bezpośrednio na mapie.

- **Climbing areas** reprezentują **większe strefy**, w których istnieje wiele dróg wspinaczkowych.

- **Climbing crags** odnoszą się do **konkretnych formacji skalnych** lub ścian nadających się do wspinaczki.

- Lokalizacje te zawierają **szczegółowe atrybuty**, takie jak:

    - *Climbing grade* (np. UIAA, French, YDS).
    - *Rock type* (np. limestone, granite).
    - *Route length* (w metrach).
    - *Climbing quality* (solid, loose, mixed).
    - *Summit log availability*.

Aby włączyć lokalizacje wspinaczkowe na mapie, przejdź do: *Menu → Configure Map → Routes → Climbing Routes*.


### Hiking Trails Difficulty Grade {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Niektóre odcinki dróg mogą być częścią wielu tras, ale mogą być indywidualnie pokolorowane, aby przedstawić trudność odcinka w obszarach górskich. Obecnie OsmAnd obsługuje klasyfikacje włoską i szwajcarską, a każda z nich ma określoną listę wymagań sprzętowych, aby uzyskać dostęp do tego odcinka.  

1. [SAC scale](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI scale](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Ski slopes and routes {#ski-slopes-and-routes}

- _Ski slopes and routes_ w stylu mapy _Winter and Ski_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Ski slopes and routes_ w domyślnym stylu mapy _OsmAnd default_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Stoki i trasy narciarskie to specyficzna grupa [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) w OpenStreetMap. Zazwyczaj trasy te mogą być używane ze stylem mapy [Winter and Ski](../map/map-styles.md#winter-and-ski) ze wszystkimi widocznymi [Pistes](https://wiki.openstreetmap.org/wiki/Pistes). Jeśli aktywny jest inny styl mapy, wyświetlany jest baner sugerujący przełączenie na [Winter and Ski](../map/map-styles.md#winter-and-ski) (*tylko Android*) i wyświetlane są tylko stoki. Dotknij ***Switch***, aby zmienić styl mapy bez opuszczania bieżącego ekranu, lub ***Later***, aby ukryć baner.


### Snowmobile trails {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Szlaki skuterów śnieżnych są mapowane w [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) jako `route=snowmobile`. Są używane do zimowej rekreacji i do łączenia odległych obszarów w sezonie śnieżnym. W OsmAnd szlaki skuterów śnieżnych są klikalne, patrz sekcja [Actions with Routes](#actions-with-routes).


### Horse routes {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Horse routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) są wyświetlane jako trasy oznaczone kolorami z symbolami do jazdy konnej.  


### Whitewater sports {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Whitewater routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) są pokazywane wraz z ikonami dostępu, strefami zagrożenia i pobliskimi progami dla [whitewater tourism](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Zobacz [Whitewater features](../map-legend/osmand.md#whitewater-features) w Legendzie mapy dla stopni progów, stopni odcinków rzeki i powiązanych symboli.  


### Running routes {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Running routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) w OpenStreetMap są używane dla nazwanych, numerowanych lub w inny sposób oznaczonych tras biegowych, głównie dla athletics.


### Fitness trails {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

A [fitness trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) to szlak lub ścieżka wyposażona w przeszkody lub stacje na całej swojej długości, służące do ćwiczeń ciała ludzkiego w celu poprawy zdrowia.  


### Travel routes {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Trasy podróży są częścią niestandardowych plików [Travel book](../plan-route/travel-guides.md) (`travel.obf`), które mogą być generowane z [user's routes](https://osmand.net/blog/routes#generated-travel-routes) lub być częścią dodatkowych [plugins](../plugins/index.md).  

Możesz dostosować wyświetlanie niektórych ***Travelbooks*** i typów ***tracks***, wyświetlać ślady jako punkty lub ***Point groups*** (na przykład dla Wikivoyage travel books). Dowiedz się więcej o [Travel guides tutaj](../plan-route/travel-guides.md).


## Display Routes on the Map {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Aby wyświetlić wymagane trasy na mapie, włącz je na *liście tras* w menu [Configure Map](../map/configure-map-menu.md).
- OsmAnd może podświetlać [trasy obecne w OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Można je wybrać, dotykając [symbolu na trasie](#save-as-a-track), a jeśli widoczny zestaw tras jest poprawnie skonfigurowany, można podążać za kolorem i ikonami.
- Główne typy tras można również filtrować według klas i podklas, co pozwala na wyświetlanie tylko określonych grup w ramach każdego typu. Na przykład, możesz wyświetlać szlaki piesze według **OSMC symbols** jako klasy, a według *international, national, regional*, lub *local networks* jako podklasy, które są obecnie dostępne po włączeniu wtyczki [OsmAnd Development](../plugins/development.md).
- Możesz utworzyć ślad na podstawie tras za pomocą narzędzia [Plan a Route](../plan-route/create-route.md). 
- Gdy kilka tras przebiega wzdłuż tej samej drogi, każda trasa jest wyświetlana jako oddzielna półprzezroczysta linia umieszczona nad innymi. 
- Po dotknięciu lokalizacji, w której nakładają się wiele tras, wyświetlane jest menu kontekstowe ze wszystkimi trasami przechodzącymi przez ten punkt. 
- Aby wyświetlić wszystkie elementy nowego schematu renderowania tras, wymagane są zaktualizowane mapy wektorowe. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Aby wyświetlić wymagane trasy na mapie, włącz je na *liście tras* w menu [Configure Map](../map/configure-map-menu.md).
- OsmAnd może podświetlać [trasy obecne w OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Można je wybrać, dotykając [symbolu na trasie](#save-as-a-track), a jeśli widoczny zestaw tras jest poprawnie skonfigurowany, można podążać za kolorem i ikonami.
- Możesz utworzyć ślad na podstawie tras za pomocą narzędzia [Plan a Route](../plan-route/create-route.md). 
- Gdy kilka tras przebiega wzdłuż tej samej drogi, każda trasa jest wyświetlana jako oddzielna półprzezroczysta linia umieszczona nad innymi.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Climbing Area and Crag Details {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Po wybraniu [obszaru wspinaczkowego lub skały](../map/routes.md#climbing-routes), OsmAnd zapewnia szczegółowe podsumowanie lokalizacji wspinaczkowej, w tym: nazwę i lokalizację, ocenę trudności wspinaczki (UIAA, French, YDS itp.), rodzaj skały, wysokość i długość trasy, jakość wspinaczki i warunki na powierzchni.


## Actions with Routes {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Na mapie można wybrać trasy dla [hiking, cycle, ski, MTB, dirt bike, travel i więcej](#type-of-routes). Tam, gdzie dostępne, szlaki piesze wyświetlają swoje znaki za pomocą [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); inne typy tras używają własnych oznaczeń.

Po dotknięciu **symbolu trasy** na mapie:

- Wyświetlana jest **lista pobliskich tras** w tej lokalizacji.
- Po wybraniu trasy z listy otwiera się [menu kontekstowe](../map/tracks/track-context-menu.md) dla tej trasy, wyświetlające szczegółowe informacje i dostępne działania.

W **menu kontekstowym** możesz:

- Wyświetlić [dodatkowe informacje](#route-info-and-elevation) o wybranej trasie.
- [Zapisać trasę](#save-as-a-track) jako **GPX track**.
- [Rozpocząć nawigację](#start-navigation) wzdłuż trasy.


### Route Info and Elevation {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

W menu kontekstowym będą widoczne następujące informacje:

- **Route info**: Nazwa trasy, link OSM (wymagana wtyczka OSM Editing), Typ, Opis, Dystans, Kierunek, Podjazd/Zjazd, Zakres wysokości, Sieć, Operator, Stan, Kolor, Roundtrip, Punkty początkowe/końcowe i więcej.
- **General**: Rozmiar, Lokalizacja, Utworzono.
- **Additional Info**. Wyświetla typ aktywności.
- przyciski akcji: [Save as](#save-as-a-track) i [Start Navigation](#start-navigation).
- [Elevation info](../navigation/setup/route-details.md#elevation-info). Wyświetla informacje o danych wysokościowych na trasie.
- [Analyze Track on Map](../map/tracks/index.md#analyze-track-on-map). Wyświetla szczegółową analizę danych śladu za pomocą wykresów i map.

Aby wyświetlić wykres wysokości, nachylenia lub szczegółów wysokości dla wybranej trasy, wystarczy dotknąć dowolnej z następujących wartości w menu kontekstowym: **Distance**, **Uphill**, **Downhill** lub **Altitude**.

Możesz również otworzyć zakładkę *Track* i przełączyć na widok *Altitude*, aby zobaczyć pełny wykres wysokości trasy.

**Uwaga:** Dane wysokości są generowane automatycznie i mogą nieznacznie różnić się w zależności od dostępnych danych.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs> 
--> 

### Save as a Track {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Aby zapisać trasę jako *plik GPX*, dotknij przycisku **Save (Download)** pod [panelem informacyjnym](../map/tracks/track-context-menu.md#info-panel). Spowoduje to otwarcie panelu przycisków [Quick actions](../map/tracks/track-context-menu.md#track-actions), gdzie będziesz mieć dostęp do działań na śladzie, takich jak zmiana [Appearance](./tracks/appearance.md), [Navigation](../navigation/setup/route-navigation.md) lub edycja w [Plan a route](../plan-route/create-route.md).


### Start Navigation {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Aby rozpocząć nawigację wzdłuż wybranej trasy OSM, dotknij przycisku **Start Navigation** w [**panelu informacyjnym**](../map/tracks/track-context-menu.md#info-panel).

Spowoduje to uruchomienie trybu [**Navigation by track**](../navigation/setup/gpx-navigation.md), co pozwoli na podążanie trasą z komunikatami głosowymi i funkcjami nawigacyjnymi.



### Quick Actions {#quick-actions}

Możesz dostosować, czy trasy są włączone czy wyłączone, za pomocą widżetu [Quick Action](../widgets/quick-action.md#configure-map).


## Routes Search {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

Znajdź trasy za pomocą funkcji [Search](../search/index.md) według nazwy lub wybierając "Routes" w sekcji [Categories](../search/search-poi.md#).

Aby wyszukać, przejdź do menu *<Translate android="true" ids="search_button"/>* lub *<Translate android="true" ids="search_button,search_categories"/>* i wprowadź swoją aktywność.

Przejdź do *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* , aby znaleźć żądane trasy. Wyniki wyszukiwania tras wyświetlają nazwę trasy, typ aktywności, długość, lokalizację, podjazd/zjazd (na Androidzie) i odległość do najbliższego punktu. 

### Routes Filters {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

W wynikach wyszukiwania tras dotknij przycisku **Filters** w prawym górnym rogu, aby zawęzić listę. Ekran filtrów zawiera pole **Filter by name**; blok **Type** z *Bureau*, *Post annex* i *Post partner*; oraz **extra criteria**, które zależą od wybranej kategorii trasy lub aktywności, ponieważ każda kategoria może ujawniać własne cechy i wartości filtrów.

Możesz włączać lub wyłączać filtry za pomocą przełączników, a niektóre sekcje zawierają *Show all*, aby wyświetlić dodatkowe wartości.


## Related Articles {#related-articles}

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Tracks](./tracks/index.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)
- [Navigation route line appearance](../navigation/guidance/map-during-navigation.md#route-line-appearance)