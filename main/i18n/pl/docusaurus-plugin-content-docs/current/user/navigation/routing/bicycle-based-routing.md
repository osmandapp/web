---
source-hash: 5518fc70081b20221258351fc52ceac84a6e4c65f687401c6f1e219d9057dfed
sidebar_position: 3
title: Rower (MTB)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Przegląd {#overview}

Wyznaczanie tras rowerowych uwzględnia takie czynniki, jak dostępność ścieżek rowerowych, szlaków i dróg, które są bezpieczne i legalne dla rowerzystów. OsmAnd zawsze wykorzystuje dane o wysokościach podczas obliczania szacowanego czasu przybycia (czasu potrzebnego na pokonanie dystansu) zgodnie z [zasadą Naismitha](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Domyślnie podawana jest najszybsza trasa.
Wyznaczanie tras rowerowych może być również przydatne w przypadku [kolarstwa górskiego](#mtb-routing-particularities).

Możesz skonfigurować *Wyznaczanie tras rowerowych* w sekcji [Parametry trasy](../guidance/navigation-settings#route-parameters) w ustawieniach nawigacji.

## Parametry trasy - Rower {#route-parameters---bicycle}

Funkcje wyznaczania tras rowerowych w OsmAnd pozwalają rowerzystom wprowadzić punkt początkowy i końcowy, a następnie wygenerować trasę, która uwzględnia ich preferencje i lokalną geografię.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia tras rowerowych](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia tras rowerowych iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Mechanizm wyznaczania tras wybierze bardziej bezpośrednie i odpowiednio szybsze drogi. | Pomimo wzrostu prędkości ruchu, jednocześnie wzrasta również pokonany dystans. Prowadzi to do zwiększonego wysiłku mięśni. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Styl&nbsp;jazdy* (iOS) | <details><summary> Możesz wybrać swój styl jazdy, aby lepiej wyznaczyć trasę. </summary> ![Styl jazdy na rowerze Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (preferowane będą mniej ruchliwe drogi z tagami [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) i [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferuj [drogi nieutwardzone](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (ta opcja jest czymś pomiędzy *preferowaniem dróg bocznych* a *najkrótszą trasą*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (do wyznaczania tras preferowane będą szersze i zazwyczaj bardziej ruchliwe drogi, zapewniające szybsze trasy) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji. </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typ(y) drogi z listy: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Unikaj przekraczania granicy do innego kraju)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez akweny)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Unikaj bruku](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (części drogi, przez które przepływa ciek wodny) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Bez kostki](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Ograniczenia dostępu prywatnego zostaną zignorowane podczas obliczania trasy. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z autostrad i innych dróg transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Preferowany&nbsp;teren* (iOS) | <details><summary> Dane o wysokościach zostaną użyte w obliczeniach trasy: [kary za drogi](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) z innym profilem wysokości zostaną ustawione. </summary> ![Użyj danych o wysokościach Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Ta preferencja może pomóc uniknąć stromych wzniesień lub odwrotnie, preferować je. Jeśli wybierzesz trasę *pagórkowatą*, preferowane będą wzgórza i góry. Jeśli *płaską* - równiny, wzgórza będą omijane. Mniej pagórkowata preferencja jest czymś pomiędzy tymi dwoma opcjami. Bez danych o wysokościach zostanie obliczona najszybsza trasa jak na płaskim terenie. |

## Specyfika wyznaczania tras MTB {#mtb-routing-particularities}

Mechanizm wyznaczania tras MTB (kolarstwo górskie) jest taki sam jak wyznaczanie tras rowerowych. Należy zauważyć, że istnieją pewne kary za korzystanie z [tras MTB](../../map/vector-maps.md#routes), dlatego rzadziej są one oferowane do jazdy na rowerze do domu lub do pracy.

## Inne ustawienia tras {#other-routing-settings}

- Algorytm wyznaczania tras może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje wyznaczania tras, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji OsmAnd na *iOS* znajduje się w *Ustawieniach nawigacji → Parametry trasy* (dla *Androida*, w *Parametrach pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami Twojego pojazdu.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Prawidłowe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: czerwiec 2024*