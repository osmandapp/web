---
source-hash: 5518fc70081b20221258351fc52ceac84a6e4c65f687401c6f1e219d9057dfed
sidebar_position: 3
title:  Rotas de bicicleta (MTB)
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

O roteamento de bicicleta considera fatores como a disponibilidade de ciclovias, trilhas e estradas seguras e legais para ciclistas. O OsmAnd sempre usa dados de elevação ao calcular o tempo estimado de chegada (tempo para cobrir a distância) de acordo com a [regra de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Por padrão, a rota mais rápida é fornecida.
O roteamento de bicicleta também pode ser útil para [mountain bike](#mtb-routing-particularities).

Você pode configurar o *Roteamento de bicicleta* na seção [Parâmetros de rota](../guidance/navigation-settings#route-parameters) das configurações de Navegação.


## Parâmetros de rota - Bicicleta {#route-parameters---bicycle}

Os recursos de roteamento de bicicleta do OsmAnd permitem que os ciclistas insiram um ponto de partida e um ponto final e, em seguida, gerem uma rota que leva em consideração suas preferências e a geografia local.

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
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Estilo&nbsp;de&nbsp;condução* (iOS) | <details><summary> Você pode escolher seu estilo de condução para um melhor roteamento. </summary> ![Estilo de condução de bicicleta Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (serão preferidas estradas menos movimentadas com as tags [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) e [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferir [estradas não pavimentadas](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (esta opção é algo entre *preferir estradas secundárias* e *rota mais curta*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (para roteamento serão preferidas estradas mais largas e geralmente mais movimentadas, proporcionando rotas mais rápidas) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecione as estradas que você deseja evitar durante a navegação. </summary>![Evitar estradas Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher o(s) tipo(s) de estrada na lista: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar uma fronteira para outro país)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Evitar paralelepípedos](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de uma rodovia onde um curso d'água passa por ela) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Sem pavimentação](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Restrições de acesso privado serão ignoradas ao calcular a rota. | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terreno&nbsp;preferido* (iOS) | <details><summary> Os dados de elevação serão usados no cálculo da rota: [penalidades para estradas](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) com outro perfil de elevação serão definidas. </summary> ![Usar dados de elevação Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Esta preferência pode ajudar a evitar colinas íngremes ou vice-versa, preferi-las. Se você escolher a rota *montanhosa*, a preferência será dada a colinas e montanhas. Se *plana* - a planícies, as colinas serão evitadas. A preferência menos montanhosa é algo entre essas duas opções. Sem dados de elevação, a rota mais rápida como em terreno plano será calculada. |


## Particularidades do roteamento MTB {#mtb-routing-particularities}

O mecanismo de roteamento MTB (mountain bike) é o mesmo do roteamento de bicicleta. Observe que existem algumas penalidades para o uso de [rotas MTB](../../map/vector-maps.md#routes), e, portanto, elas são menos propensas a serem oferecidas para ciclismo para casa ou para o trabalho.


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode habilitar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está habilitado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso geralmente acontece ao navegar por uma trilha ou rota online. Deve ser definida de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das definições ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*