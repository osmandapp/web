---
source-hash: 918e5cde7ffddb7a99046ea161570b0112d11c17a7525a60f27a26db3726b779
sidebar_position: 2
title:  Rotas de carro (Caminhão, Moto)
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

O roteamento baseado em carro foi projetado para ajudar os motoristas a navegar pelas estradas de forma eficiente, segura e confortável, fornecendo direções personalizadas e adaptadas às necessidades e preferências exclusivas de cada motorista. As configurações de roteamento adequadas podem ajudar os motoristas a economizar tempo e combustível e evitar perigos na estrada. O roteamento mais rápido é oferecido por padrão.

:::info
O mecanismo de roteamento para veículos terrestres motorizados difere apenas em algumas configurações. Os parâmetros comuns são descritos na seção [Carro](#route-parameters---car) deste artigo. [Caminhão](#route-parameters---truck) e [Moto](#route-parameters---motorcycle) têm suas próprias particularidades.
:::

O roteamento pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../../navigation/guidance/navigation-settings.md#route-parameters) das configurações de navegação do perfil correspondente (*Dirigir, Caminhão, Moto*).


## Parâmetros de rota - Carro {#route-parameters---car}

O roteamento de carro foi projetado para ajudar os motoristas a encontrar as rotas mais eficientes e diretas para seus destinos. Ele leva em consideração restrições comuns de direção, como ruas de mão única, proibição de conversões, zonas de pedestres, e também ajuda a evitar estradas que não são adequadas para carros, como estradas estreitas ou estradas com limitações de peso.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configurações de roteamento de carro Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configurações de roteamento de carro iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecione as estradas que você deseja evitar durante a navegação. Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher tipos de estrada na lista.  </summary>![Evitar estradas Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar uma fronteira para outro país).</li><li>Evitar [estradas de gelo](https://wiki.openstreetmap.org/wiki/Key:ice_road) (estradas sazonais em regiões frias que são construídas sobre água congelada) e [vau](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de uma rodovia onde um curso d'água passa por ela). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (trens que transportam carros, que conectam dois lugares não facilmente acessíveis um ao outro por estrada).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (apenas adequado para veículos 4x4).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Para o roteamento de carro, assume-se que a superfície das estradas é [pavimentada](https://wiki.openstreetmap.org/wiki/Key:surface), a menos que especificado de outra forma. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Restrições de acesso privado serão ignoradas ao calcular a rota.  | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (apenas&nbsp;carro) |  <details><summary> Estradas fechadas para entrega de mercadorias serão evitadas. </summary>![Entrega de mercadorias Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Esta opção se aplica apenas a veículos que transportam mercadorias com peso não superior a 3,5 toneladas. Se o peso do seu veículo for superior a 3,5 toneladas, você deve usar o [perfil de Caminhão](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Para calcular a rota com eficiência de combustível, o motor limita internamente a velocidade a 60 km/h, embora não altere o Tempo Estimado de Chegada. Assim, no caso de 2 rotas de início-fim iguais, uma rodovia (120 km/h) e uma secundária (60 km/h) - a rota mais curta será selecionada. Para as estradas de serviço que têm limite de velocidade <60 km/h, a rota mais rápida será selecionada. |


## Parâmetros de rota - Caminhão {#route-parameters---truck}

:::note
Por padrão, o *perfil de Caminhão* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O roteamento de caminhões é semelhante ao roteamento de carros, mas foi projetado especificamente para motoristas de veículos comerciais grandes. Ele considera fatores adicionais, como [restrições de altura, peso e largura do veículo](../guidance/navigation-settings.md#size-parameters) e a possibilidade de transportar materiais perigosos (ver tabela abaixo). Todas as outras configurações de roteamento são idênticas ao [roteamento de carros](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configurações de roteamento de caminhão Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configurações de roteamento de caminhão iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (para **região da UE**) | <details><summary> As autoridades locais podem proibir o transporte de materiais perigosos em algumas estradas ou túneis. </summary> ![Transporte de materiais perigosos Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Quando ativado, o mecanismo de roteamento de caminhões leva em consideração a tag OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Você pode escolher uma das cinco categorias (*A, B, C, D, E*) de materiais perigosos de acordo com as **restrições da UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (apenas se a **região dos EUA** estiver selecionada) | <details><summary> As regras de transporte de materiais perigosos nos EUA diferem das da UE. Exibido apenas se a Região de Condução estiver definida como EUA. Você pode selecionar várias classes. </summary> ![Transporte de materiais perigosos Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Selecione um dos tipos (de 1 a 9) de materiais perigosos de acordo com as [**restrições dos EUA**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). O transporte de materiais perigosos é proibido em algumas estradas e túneis. <ul><li>1. *Explosivos* </li><li> 2. *Gases* </li><li> 3. *Líquidos Inflamáveis* </li><li> 4. *Sólidos Inflamáveis* </li><li> 5. *Agentes Oxidantes e Peróxidos Orgânicos* </li><li> 6. *Substâncias Tóxicas e Infecciosas* </li><li> 7. *Substâncias Radioativas* </li><li> 8. *Substâncias Corrosivas* </li><li> 9. *Diversos* </li></ul> |


## Parâmetros de rota - Moto {#route-parameters---motorcycle}

:::note
Por padrão, o *perfil de Moto* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O roteamento de motocicleta é o processo de criação de uma rota especificamente otimizada para viagens de motocicleta. Este tipo de roteamento leva em consideração as necessidades e preferências exclusivas dos motociclistas, proporcionando as melhores condições de pilotagem possíveis. As rotas são traçadas levando em consideração uma série de parâmetros, como a escolha do tipo de superfície da estrada (por exemplo, condições de estrada ruins podem ser preferidas ou evitadas), a evitação de engarrafamentos, a acessibilidade da infraestrutura ou a segurança.


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode habilitar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de testes. Observe que essas configurações estão disponíveis apenas quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está habilitado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso ocorre com mais frequência ao navegar por uma trilha ou rota online. Deve ser definida de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: Julho de 2024*