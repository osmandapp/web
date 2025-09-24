---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title: Roteamento de bicicleta (MTB)
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



## Visão geral {#overview}

O roteamento de bicicleta considera fatores como a disponibilidade de ciclovias, trilhas e estradas que são seguras e legais para ciclistas. O OsmAnd sempre usa dados de elevação ao calcular o tempo estimado de chegada (tempo para cobrir a distância) de acordo com a [regra de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Por padrão, a rota mais rápida é fornecida.
O roteamento de bicicleta também pode ser útil para [mountain biking](#mtb-routing-particularities).

Você pode configurar o *Roteamento de bicicleta* na seção [Parâmetros de rota](../guidance/navigation-settings#route-parameters) das configurações de Navegação.


## Parâmetros de rota - Bicicleta {#route-parameters---bicycle}

Os recursos de roteamento de bicicleta do OsmAnd permitem que os ciclistas insiram um ponto de partida e um ponto final e, em seguida, gerem uma rota que leve em consideração suas preferências e a geografia local.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de roteamento de bicicleta](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de bicicleta iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | O mecanismo de roteamento escolherá estradas mais diretas e, consequentemente, mais rápidas. | Apesar do aumento na velocidade de movimento, a distância percorrida também aumenta ao mesmo tempo. Isso leva a um aumento no esforço muscular. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Estilo&nbsp;de&nbsp;condução* (iOS) | <details><summary> Você pode escolher seu estilo de condução para um melhor roteamento. </summary> ![Estilo de condução ciclismo Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (serão preferidas estradas menos movimentadas com as tags [secundária](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) e [residencial](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferir [estradas não pavimentadas](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (esta opção é algo entre *preferir estradas secundárias* e *rota mais curta*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (para roteamento serão preferidas estradas mais largas e geralmente mais movimentadas, proporcionando rotas mais rápidas) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecione as estradas que você deseja evitar durante a navegação. </summary>![Evitar estradas Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher o(s) tipo(s) de estrada da lista: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar uma fronteira para outro país)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Evitar paralelepípedos](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de uma rodovia onde um curso d'água passa por ela) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Sem calçamento](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Restrições de acesso privado serão ignoradas ao calcular a rota. | A tag *[privado](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terreno&nbsp;preferido* (iOS) | <details><summary> Dados de elevação serão usados no cálculo da rota: [penalidades para estradas](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) com outro perfil de elevação serão definidas. </summary> ![Usar dados de elevação Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Esta preferência pode ajudar a evitar colinas íngremes ou, inversamente, preferi-las. Se você escolher a rota *montanhosa*, será dada preferência a colinas e montanhas. Se *plana* - a planícies, as colinas serão evitadas. A preferência menos montanhosa é algo entre essas duas opções. Sem dados de elevação, a rota mais rápida como em terreno plano será calculada. |


## Particularidades do roteamento MTB {#mtb-routing-particularities}

O mecanismo de roteamento MTB (mountain biking) é o mesmo do roteamento de bicicleta. Observe que existem algumas penalidades para o uso de [rotas MTB](../../map/vector-maps.md#routes) e, portanto, é menos provável que sejam oferecidas para ciclismo para casa ou para o trabalho.