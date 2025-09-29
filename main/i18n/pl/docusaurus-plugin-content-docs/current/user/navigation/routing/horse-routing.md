---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Nawigacja konna
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

*Nawigacja konna* może być przydatna dla jeźdźców, którzy chcą planować swoje przejażdżki po ścieżkach i szlakach, które są bezpieczne i odpowiednie dla koni. Za pomocą tego typu nawigacji można również odkrywać nowe trasy, które w przeciwnym razie nie byłyby znane.

*Nawigację konną* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w Ustawieniach nawigacji.

![Jazda konna](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Parametry trasy - Koń {#route-parameters---horse}

:::note
Domyślnie *profil jazdy konnej* jest wyłączony. Aby używać tego profilu do wyznaczania tras, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Nawigacja konna ma na celu dostarczenie jeźdźcom informacji o przyjaznych dla koni ścieżkach, drogach dla jeźdźców i szlakach jeździeckich.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia nawigacji konnej Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia nawigacji konnej iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typy dróg z listy.  </summary>  ![Unikaj dróg Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez zbiorniki wodne)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Możesz wybrać, czy preferować trasy dla koni, czy nie. </summary> ![Preferuj trasy dla koni Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Droga przeznaczona do użytku (głównie) przez jeźdźców konnych i pieszych (w zależności od przepisów krajowych). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | [Brama](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) jest rodzajem [bariery](https://wiki.openstreetmap.org/wiki/Key:barrier), która blokuje ruch. Zazwyczaj jest to fragment ściany lub ogrodzenia, który można otworzyć lub zamknąć, aby umożliwić lub ograniczyć dostęp. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | W niektórych krajach [pojazdy zaprzęgowe](https://wiki.openstreetmap.org/wiki/Key:carriage) nie są dozwolone na autostradach, a jedynie na bardzo niewielkiej liczbie innych dróg.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Ograniczenia dostępu prywatnego będą ignorowane podczas obliczania trasy.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z dróg i innych szlaków transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Do wyznaczania tras będą używane tylko ulice specjalnie przeznaczone dla koni.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Do wyznaczania tras będą używane tylko drogi specjalnie przeznaczone dla koni.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Przewidywany czas podróży będzie uwzględniał wpływ wysokości. </summary> ![Użyj danych o wysokości Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Ta preferencja może pomóc uniknąć stromych podjazdów. Bez danych o wysokości zostanie obliczona najszybsza trasa jak na płaskim terenie. |