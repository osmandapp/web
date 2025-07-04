---
source-hash: 51fb6bc36d13cc99592c04e19240af7da20351f8723f080ddd445d3732ef8b91
sidebar_position: 4
title: Rotas para pedestres
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Visão geral {#overview}

O roteamento de pedestres refere-se ao processo de encontrar a melhor rota para um pedestre viajar de um local para outro, levando em consideração fatores como áreas exclusivas para pedestres, calçadas, faixas de pedestres e cruzamentos amigáveis para pedestres. Também pode considerar outros fatores, como *escadas*, que podem ser úteis para acessibilidade de cadeiras de rodas. O OsmAnd sempre usa dados de elevação ao calcular o tempo estimado de chegada (tempo para percorrer a distância) de acordo com a [regra de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Para configurar o *roteamento de pedestres*, vá para a seção [Parâmetros de rota](../guidance/navigation-settings#route-parameters) das configurações de Navegação.

### Parâmetros de rota - Caminhada {#route-parameters---walking}

O roteamento de pedestres pode ser útil não apenas em áreas urbanas, onde os pedestres podem encontrar vários obstáculos ao tentar ir de um lugar para outro. Você também pode usar este tipo de roteamento ao correr, fazer trilhas e caminhada nórdica fora da cidade ou nas montanhas. Basta ajustar os parâmetros de roteamento de acordo com suas necessidades.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pedestrian routing settings Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pedestrian routing settings iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecione as estradas que você deseja evitar durante a navegação. Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher tipos de estrada da lista. </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Você pode escolher qual tipo de superfície preferir ao construir uma rota. </summary> ![Elevation pedestrian Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | Você pode escolher entre duas opções:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Essas rotas são tipicamente encontradas em ambientes naturais, como florestas, montanhas e parques. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Este sistema de indicadores de superfície texturizada pode ser instalado em calçadas, escadas e plataformas de transporte público para auxiliar pedestres cegos ou com deficiência visual a se locomoverem. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Restrições de acesso privado serão ignoradas ao calcular a rota. | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Os dados de elevação serão usados no cálculo da rota: [penalidades](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) serão definidas para estradas que diferem do tipo selecionado. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Esta preferência pode ajudar a evitar colinas íngremes ou, inversamente, preferi-las. Usar esta opção pode ser muito útil no roteamento de pedestres. Sem dados de elevação, a rota mais rápida será calculada como em terreno plano. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| As rotas de *Via ferrata* serão usadas para roteamento quando esta opção, juntamente com *Usar dados de elevação*, estiver ativada. | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) é uma rota de montanha equipada com cabos fixos, degraus, escadas e pontes. |


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode habilitar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está habilitado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso geralmente ocorre ao navegar por uma trilha ou rota online. Deve ser definida de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*