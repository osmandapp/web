---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Rotas a cavalo
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

O *roteamento a cavalo* pode ser útil para cavaleiros que desejam planejar seus passeios em caminhos e trilhas que sejam seguros e adequados para cavalos. Com a ajuda desse tipo de roteamento, você também pode descobrir novas rotas que não eram conhecidas de outra forma.

O *roteamento a cavalo* pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../guidance/navigation-settings.md#route-parameters) das configurações de Navegação.

![Cavalgada](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Parâmetros de rota - Cavalo {#route-parameters---horse}

:::note
Por padrão, o *perfil de equitação* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O roteamento a cavalo foi projetado para fornecer aos cavaleiros informações sobre caminhos, trilhas e rotas de equitação adequados para cavalos.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de roteamento de cavalo Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de cavalo iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecione as estradas que você deseja evitar durante a navegação. Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher tipos de estrada da lista.  </summary>  ![Evitar estradas Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Você pode escolher se prefere rotas para cavalos ou não. </summary> ![Preferir rotas de cavalos Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Um caminho destinado ao uso por cavaleiros (principalmente) e pedestres (dependendo das regulamentações específicas do país). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Um [portão](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) é um tipo de [barreira](https://wiki.openstreetmap.org/wiki/Key:barrier), que bloqueia o movimento. Geralmente é uma seção em uma parede ou cerca que pode ser aberta ou fechada para permitir ou restringir o acesso. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | Em alguns países, [carruagens puxadas por cavalos](https://wiki.openstreetmap.org/wiki/Key:carriage) não são permitidas em autoestradas, elas são permitidas apenas em um número muito pequeno de outras estradas.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Restrições de acesso privado serão ignoradas ao calcular a rota.  | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Apenas ruas especialmente designadas para cavalos serão usadas para roteamento.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Apenas caminhos especialmente designados para cavalos serão usados para roteamento.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> O tempo de viagem projetado refletirá o impacto da elevação. </summary> ![Usar dados de elevação Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Esta preferência pode ajudar a evitar subidas íngremes. Sem dados de elevação, a rota mais rápida será calculada como em terreno plano. |