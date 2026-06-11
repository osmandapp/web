---
source-hash: 97cbadd50fbc4e3456c25be84373804b63617bf768394b167c130bfa44b414f0
sidebar_position: 12
title: Typy tras
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

Trasy reprezentują różne aktywności outdoorowe z wykorzystaniem danych z [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Dotknięcie **tarczy z numerem lub flagą trasy** na mapie otworzy menu kontekstowe, które zawiera dodatkowe informacje o trasie i umożliwia jej wykorzystanie w nawigacji.

Możesz skonfigurować filtrowanie niektórych typów tras w menu [Konfiguruj mapę](../../map/configure-map-menu.md).

## Rower {#cycle}

[Trasy rowerowe](https://wiki.openstreetmap.org/wiki/Cycle_routes) występują w trzech typach: *lokalne* (`lcn`), *regionalne* (`rcn`), *krajowe* (`ncn`), *międzynarodowe* (`icn`). Trasy rowerowe mogą też być częścią [sieci węzłowych](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Możesz wybrać sposób przypisywania koloru do odcinków trasy:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Więcej informacji znajdziesz w artykule [Legenda mapy](../../map-legend/index.md).


## Rower górski {#mountain-bike}

Trasy MTB mają specjalne oznaczenie w [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) i można je wybrać oddzielnie od tras rowerowych.

- ***<Translate android="true" ids="mtb_scale"/>***.  Wyświetla szlaki według skali MTB. Więcej informacji znajdziesz w artykule [Legenda mapy](../../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Wyświetla szlaki MTB według International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Więcej informacji znajdziesz w artykule [Legenda mapy](../../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Turystyka piesza / Spacer {#hiking--walking}

[Trasy piesze](https://wiki.openstreetmap.org/wiki/Walking_Routes) występują w trzech typach: *lokalne* (`lwn`), *regionalne* (`rwn`), *krajowe* (`nwn`), *międzynarodowe* (`iwn`). Trasy piesze mogą też być częścią [sieci węzłowych](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd nie rozróżnia tras spacerowych i turystycznych, łącząc je w jedną grupę. Możesz wybrać sposób przypisywania koloru do odcinków trasy:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Koloruje trasy według ich indywidualnego [koloru lokalnego](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (jeśli jest dostępny w OpenStreetMap) oraz symbolu tarczy turystycznej.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Koloruje według [przynależności do sieci](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Koloruje trasy według typu [sieci węzłowej](https://wiki.openstreetmap.org/wiki/Node_Networks) (międzynarodowa, regionalna lub lokalna).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Trasy dirt bike {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Funkcja **Trasy dirt bike** umożliwia wyświetlanie tras dedykowanych dla dirt bike’ów na mapie na podstawie tagu `dirtbike:scale`. Skala ta wyróżnia szlaki odpowiednie do jazdy na dirt bike’u, z kolorową nakładką pokazującą poziomy trudności ([Legenda mapy](../../map-legend/osmand.md#routes)).  

Możesz aktywować tę funkcję w *Menu → Konfiguruj mapę → Trasy → Trasy dirt bike*. System działa podobnie do skali MTB, oferując wizualną reprezentację tras dostosowanych do dirt bike’ów — więcej o tagu [`dirtbike` znajdziesz tutaj](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Trasy wspinaczkowe {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd obsługuje *obszary wspinaczkowe* (`climbing=area`) i *skałki wspinaczkowe* (`climbing=crag`), umożliwiając znajdowanie miejsc do [wspinaczki](https://wiki.openstreetmap.org/wiki/Climbing) bezpośrednio na mapie.

- **Obszary wspinaczkowe** reprezentują **większe strefy**, w których istnieje wiele dróg wspinaczkowych.

- **Skałki wspinaczkowe** odnoszą się do **konkretnych formacji skalnych** lub ścian nadających się do wspinaczki.

- Miejsca te zawierają **szczegółowe atrybuty**, takie jak:

    - *Stopień trudności* (np. UIAA, francuski, YDS).
    - *Rodzaj skały* (np. wapień, granit).
    - *Długość drogi* (w metrach).
    - *Jakość wspinaczki* (solidna, luźna, mieszana).
    - *Dostępność książki szczytowej*.

Aby włączyć lokalizacje wspinaczkowe na mapie, przejdź do: *Menu → Konfiguruj mapę → Trasy → Trasy wspinaczkowe*.


## Stopień trudności szlaków pieszych {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Niektóre odcinki dróg mogą być częścią wielu tras, ale mogą być indywidualnie kolorowane, aby odzwierciedlić trudność odcinka na terenach górskich. Obecnie OsmAnd obsługuje klasyfikacje włoską i szwajcarską, z których każda ma określoną listę wymagań sprzętowych do przejścia tego odcinka.  

1. [Skala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Skala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Stoki i trasy narciarskie {#ski-slopes-and-routes}

- _Stoki i trasy narciarskie_ w stylu mapy _Zima i narty_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Stoki i trasy narciarskie_ w domyślnym stylu mapy _OsmAnd_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Stoki i trasy narciarskie to specjalna grupa [tras](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) w OpenStreetMap. Zazwyczaj trasy te są używane ze stylem mapy [Zima i narty](../../map/map-styles.md#winter-and-ski) ze wszystkimi widocznymi [trasami narciarskimi](https://wiki.openstreetmap.org/wiki/Pistes). Jeśli aktywny jest inny styl mapy, wyświetlany jest baner sugerujący przełączenie na [Zimę i narty](../../map/map-styles.md#winter-and-ski) (*tylko Android*) i widoczne są tylko stoki. Dotknij ***Przełącz***, aby zmienić styl mapy bez opuszczania bieżącego ekranu, lub ***Później***, aby ukryć baner.


## Trasy skuterów śnieżnych {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Trasy skuterów śnieżnych są mapowane w [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) jako `route=snowmobile`. Służą do rekreacji zimowej i łączenia odległych obszarów w sezonie śnieżnym. W OsmAnd trasy skuterów śnieżnych są klikalne, zobacz sekcję [Działania z trasami](./index.md#actions-with-routes).


## Trasy konne {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Trasy konne](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) są wyświetlane jako kolorowe trasy z symbolami do jazdy konnej.  


## Sporty na rzece {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Trasy na rzece](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) są wyświetlane razem z ikonami dostępu, obszarami zagrożenia i pobliskimi bystrzami dla [turystyki na rzece](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Zobacz [Elementy whitewater](../../map-legend/osmand.md#whitewater-features) w Legendzie mapy, aby poznać stopnie bystrzy, stopnie odcinków rzeki i powiązane symbole.


## Bieganie {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Trasy biegowe](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) w OpenStreetMap służą do oznaczania nazwanych, numerowanych lub w inny sposób oznaczonych tras biegowych, głównie dla lekkoatletyki.


## Ścieżki fitness {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[Ścieżka fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) to szlak lub ścieżka wyposażona w przeszkody lub stacje wzdłuż swojej długości, służące do ćwiczenia ciała i poprawy zdrowia.  


## Podróże {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Trasy podróży są częścią niestandardowych plików [Przewodnika podróży](../../plan-route/travel-guides.md) (`travel.obf`), które mogą być generowane z [tras użytkownika](https://osmand.net/blog/routes#generated-travel-routes) lub stanowić część dodatkowych [wtyczek](../../plugins/index.md).  

Możesz dostosować wyświetlanie niektórych ***Przewodników podróży*** i typów ***śladów***, wyświetlać ślady jako punkty lub ***Grupy punktów*** (na przykład dla przewodników Wikivoyage). Dowiedz się więcej o [Przewodnikach podróży tutaj](../../plan-route/travel-guides.md).


## Powiązane artykuły {#related-articles}

- [Konfiguruj mapę](../../map/configure-map-menu.md)
- [Legenda mapy](../../map-legend/osmand.md)
- [Trasy](./index.md)