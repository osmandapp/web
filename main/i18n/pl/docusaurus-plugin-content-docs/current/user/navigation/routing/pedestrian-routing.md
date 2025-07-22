---
source-hash: 51fb6bc36d13cc99592c04e19240af7da20351f8723f080ddd445d3732ef8b91
sidebar_position: 4
title: Wyznaczanie trasy dla pieszych
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

Wyznaczanie trasy dla pieszych to proces znajdowania najlepszej trasy dla pieszego, aby przemieścił się z jednego miejsca do drugiego, biorąc pod uwagę takie czynniki, jak obszary tylko dla pieszych, chodniki, przejścia dla pieszych i skrzyżowania przyjazne dla pieszych. Może również uwzględniać inne czynniki, takie jak *schody*, które mogą być przydatne dla dostępności dla wózków inwalidzkich. OsmAnd zawsze wykorzystuje dane wysokościowe do obliczania szacowanego czasu przybycia (czasu potrzebnego na pokonanie odległości) zgodnie z [zasadą Naismitha](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Aby skonfigurować *wyznaczanie trasy dla pieszych*, przejdź do sekcji [Parametry trasy](../guidance/navigation-settings#route-parameters) w Ustawieniach nawigacji.

### Parametry trasy - Pieszo {#route-parameters---walking}

Wyznaczanie trasy dla pieszych może być przydatne nie tylko na obszarach miejskich, gdzie piesi mogą napotkać różne przeszkody, próbując dostać się z jednego miejsca do drugiego. Możesz również użyć tego typu wyznaczania trasy podczas joggingu, wędrówek i nordic walking poza miastem lub w górach. Po prostu dostosuj parametry wyznaczania trasy do swoich potrzeb.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pedestrian routing settings Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pedestrian routing settings iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typy dróg z listy. </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez akweny)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Możesz wybrać, jaki rodzaj nawierzchni preferować podczas budowania trasy. </summary> ![Elevation pedestrian Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | Możesz wybrać jedną z dwóch opcji:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Te trasy znajdują się zazwyczaj w środowiskach naturalnych, takich jak lasy, góry i parki. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Ten system wskaźników teksturowanej nawierzchni może być instalowany na ścieżkach, schodach i platformach transportu publicznego, aby pomóc osobom niewidomym lub niedowidzącym w poruszaniu się. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Ograniczenia dostępu prywatnego będą ignorowane podczas obliczania trasy. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z autostrad i innych tras transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Dane wysokościowe zostaną wykorzystane w obliczeniach trasy: [kary](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) zostaną nałożone na drogi, które różnią się od wybranego typu. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Ta preferencja może pomóc uniknąć stromych wzgórz lub, wręcz przeciwnie, preferować je. Użycie tej opcji może być bardzo pomocne w wyznaczaniu trasy dla pieszych. Bez danych wysokościowych zostanie obliczona najszybsza trasa, jak na płaskim terenie. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Trasy *Via ferrata* będą używane do wyznaczania trasy, gdy ta opcja wraz z *Użyj danych wysokościowych* jest włączona. | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) to górska trasa wyposażona w stałe liny, stopnie, drabiny i mosty. |


## Inne ustawienia wyznaczania trasy {#other-routing-settings}

- Algorytm wyznaczania trasy może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* możesz włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* możesz wypróbować nowe funkcje wyznaczania trasy, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami Twojego pojazdu.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Prawidłowe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*