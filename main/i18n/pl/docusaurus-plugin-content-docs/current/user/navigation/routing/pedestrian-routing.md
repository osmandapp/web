---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title:  Wyznaczanie trasy dla pieszych
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

Wyznaczanie trasy dla pieszych odnosi się do procesu znajdowania najlepszej trasy dla pieszego z jednego miejsca do drugiego, biorąc pod uwagę takie czynniki, jak strefy tylko dla pieszych, chodniki, przejścia dla pieszych i skrzyżowania przyjazne dla pieszych. Może również uwzględniać inne czynniki, takie jak *schody*, co może być przydatne dla osób na wózkach inwalidzkich. OsmAnd zawsze wykorzystuje dane o wysokości podczas obliczania szacowanego czasu przybycia (czasu na pokonanie dystansu) zgodnie z [regułą Naismitha](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Aby skonfigurować *Wyznaczanie trasy dla pieszych*, przejdź do sekcji [Parametry trasy](../guidance/navigation-settings#route-parameters) w ustawieniach Nawigacji.
  
### Parametry trasy - Pieszo {#route-parameters---walking}

Wyznaczanie trasy dla pieszych może być przydatne nie tylko w obszarach miejskich, gdzie piesi mogą napotkać różne przeszkody, próbując dostać się z jednego miejsca do drugiego. Możesz również używać tego typu wyznaczania trasy podczas joggingu, wędrówek i nordic walking poza miastem lub w górach. Wystarczy dostosować parametry trasy do swoich potrzeb.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ustawienia wyznaczania trasy dla pieszych Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania trasy dla pieszych iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typy dróg z listy.  </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez zbiorniki wodne)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Możesz wybrać, jaki typ nawierzchni preferować podczas budowania trasy. </summary> ![Preferencje dla pieszych Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Możesz wybrać jedną z dwóch opcji:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Trasy te zazwyczaj znajdują się w środowisku naturalnym, takim jak lasy, góry i parki. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Ten system wskaźników o teksturowanej powierzchni podłoża może być instalowany na ścieżkach, schodach i peronach transportu publicznego, aby pomóc pieszym niewidomym lub niedowidzącym w poruszaniu się. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Ograniczenia dostępu prywatnego będą ignorowane podczas obliczania trasy.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z dróg i innych szlaków komunikacyjnych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Dane o wysokości będą używane przy obliczaniu trasy: [kary](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) zostaną nałożone na drogi, które różnią się od wybranego typu. </summary> ![Użyj danych o wysokości Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Ta preferencja może pomóc unikać stromych wzniesień lub odwrotnie, preferować je. Korzystanie z tej opcji może być bardzo pomocne w wyznaczaniu tras dla pieszych. Bez danych o wysokości zostanie obliczona najszybsza trasa, jak na płaskim terenie. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Trasy *Via ferrata* będą używane do wyznaczania tras, gdy ta opcja jest włączona razem z opcją *Użyj danych o wysokości*.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) to szlak górski wyposażony w stałe liny, stopnie, drabiny i mosty. |