---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  Wyznaczanie trasy dla roweru (MTB)
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

Wyznaczanie trasy dla roweru uwzględnia takie czynniki, jak dostępność ścieżek rowerowych, szlaków i dróg, które są bezpieczne i legalne dla rowerzystów. OsmAnd zawsze wykorzystuje dane o wysokości podczas obliczania szacowanego czasu przybycia (czasu potrzebnego na pokonanie dystansu) zgodnie z [regułą Naismitha](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Domyślnie podawana jest najszybsza trasa.  
Wyznaczanie trasy dla roweru może być również przydatne w przypadku [kolarstwa górskiego](#mtb-routing-particularities).  

Możesz skonfigurować *Wyznaczanie trasy dla roweru* w sekcji [Parametry trasy](../guidance/navigation-settings#route-parameters) w ustawieniach Nawigacji.


## Parametry trasy - Rower {#route-parameters---bicycle}

Funkcje wyznaczania tras rowerowych w OsmAnd pozwalają rowerzystom wprowadzić punkt początkowy i końcowy, a następnie wygenerować trasę uwzględniającą ich preferencje i lokalną geografię.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ustawienia wyznaczania trasy dla roweru](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania trasy dla roweru iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  Mechanizm wyznaczania trasy wybierze bardziej bezpośrednie i w związku z tym szybsze drogi.  | Pomimo wzrostu prędkości poruszania się, jednocześnie wzrasta również przebyty dystans. Prowadzi to do zwiększenia wysiłku mięśniowego. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Styl&nbsp;jazdy* (iOS) | <details><summary> Możesz wybrać swój styl jazdy, aby uzyskać lepszą trasę. </summary> ![Styl jazdy rowerem Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (preferowane będą mniej ruchliwe drogi z tagami [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) i [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferuj [drogi nieutwardzone](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (ta opcja jest czymś pośrednim między *preferuj drogi boczne* a *najkrótsza trasa*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (do wyznaczania trasy preferowane będą szersze i zazwyczaj bardziej ruchliwe drogi, zapewniające szybsze trasy) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wybierz drogi, których chcesz unikać podczas nawigacji.  </summary>![Unikaj dróg Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | Możesz [wybrać drogę na mapie](../../map/map-context-menu/#avoid-road) lub wybrać typ(y) dróg z listy:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Unikaj przekraczania granicy do innego kraju)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (rodzaj transportu wodnego, który przewozi pojazdy przez zbiorniki wodne)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Unikaj bruku](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (części drogi, przez które przepływa ciek wodny) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Bez kostki kamiennej](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Ograniczenia dostępu prywatnego będą ignorowane podczas obliczania trasy.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* jest używany w OSM do opisywania ograniczeń w korzystaniu z dróg i innych szlaków transportowych, a także budynków, wejść, udogodnień i obiektów rekreacyjnych.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Preferowany&nbsp;teren* (iOS) | <details><summary> Dane o wysokości będą używane przy obliczaniu trasy: zostaną ustawione [kary dla dróg](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) o innym profilu wysokościowym. </summary> ![Użyj danych o wysokości Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Ta preferencja może pomóc unikać stromych wzniesień lub odwrotnie, preferować je. Jeśli wybierzesz trasę *pagórkowatą*, pierwszeństwo będą miały wzgórza i góry. Jeśli *płaską* - tereny płaskie, a wzgórza będą omijane. Mniej pagórkowata preferencja jest czymś pośrednim między tymi dwiema opcjami. Bez danych o wysokości zostanie obliczona najszybsza trasa jak na płaskim terenie. |


## Specyfika wyznaczania tras MTB {#mtb-routing-particularities}

Mechanizm wyznaczania tras MTB (kolarstwo górskie) jest taki sam jak w przypadku wyznaczania tras rowerowych. Należy pamiętać, że istnieją pewne kary za korzystanie z [tras MTB](../../map/vector-maps.md#routes), w związku z czym jest mniej prawdopodobne, że będą one proponowane do jazdy rowerem do domu lub do pracy.