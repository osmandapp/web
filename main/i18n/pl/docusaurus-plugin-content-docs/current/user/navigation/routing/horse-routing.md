---
source-hash: 7008e200a45abc6dac5f84f04d67cfa4d6839d97740df298ea502bad90aec24d
sidebar_position: 6
title: Wyznaczanie trasy dla koni
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

*Wyznaczanie trasy dla koni* może być przydatne dla jeźdźców, którzy chcą zaplanować swoje przejażdżki po ścieżkach i szlakach bezpiecznych i odpowiednich dla koni. Dzięki temu rodzajowi wyznaczania tras możesz również odkryć nowe trasy, które wcześniej nie były znane.

*Wyznaczanie trasy dla koni* można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../guidance/navigation-settings.md#route-parameters) w Ustawieniach nawigacji.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Parametry trasy - Koń {#route-parameters---horse}

:::note
Domyślnie *Profil jazdy konnej* jest dezaktywowany. Aby użyć tego profilu do wyznaczania trasy, należy go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Wyznaczanie trasy dla koni ma na celu dostarczenie jeźdźcom informacji o ścieżkach przyjaznych koniom, ścieżkach konnych i szlakach jeździeckich.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typy dróg z listy. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez akweny)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Możesz wybrać, czy preferować trasy dla koni, czy nie. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Droga przeznaczona (głównie) dla jeźdźców konnych i pieszych (w zależności od przepisów krajowych). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | [Brama](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) to rodzaj [bariery](https://wiki.openstreetmap.org/wiki/Key:barrier), która blokuje ruch. Zazwyczaj jest to sekcja w murze lub ogrodzeniu, którą można otworzyć lub zamknąć, aby umożliwić lub ograniczyć dostęp. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | W niektórych krajach [powozy konne](https://wiki.openstreetmap.org/wiki/Key:carriage) nie są dozwolone na autostradach, są dozwolone tylko na bardzo niewielu innych drogach. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Ograniczenia dostępu prywatnego zostaną zignorowane podczas obliczania trasy. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z autostrad i innych dróg transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Do wyznaczania trasy będą używane tylko ulice specjalnie przeznaczone dla koni. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Do wyznaczania trasy będą używane tylko drogi specjalnie przeznaczone dla koni. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Przewidywany czas podróży będzie odzwierciedlał wpływ wysokości. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Ta preferencja może pomóc uniknąć stromych podjazdów. Bez danych wysokościowych zostanie obliczona najszybsza trasa, jak na płaskim terenie. |


## Inne ustawienia wyznaczania trasy {#other-routing-settings}

- Algorytm wyznaczania trasy może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations). Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [Przelicz trasę](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [Rozwój](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje wyznaczania trasy, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) w wersji OsmAnd dla *iOS* znajduje się w *Ustawienia nawigacji → Parametry trasy* (dla *Androida*, w *Parametry pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami pojazdu.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). Prawidłowe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*