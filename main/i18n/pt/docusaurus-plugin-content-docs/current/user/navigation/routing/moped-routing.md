---
source-hash: 3633198fddb7fe35a05678692319490fc58e0d27eeeb3150a2ae252eba8bd136
sidebar_position: 4
title: Roteamento para ciclomotores
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

O *roteamento para ciclomotores* permite que os condutores construam uma rota ótima (a mais rápida), levando em consideração as especificidades da condução de um veículo como um ciclomotor ou scooter. O processo de roteamento considera vários fatores para um movimento seguro, confortável e legal em estradas ou ciclovias.

:::note
Por padrão, o *Perfil de Ciclomotor* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parâmetros de rota - Ciclomotor {#route-parameters---moped}

O *roteamento para ciclomotores* pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../guidance/navigation-settings.md#route-parameters) das configurações de Navegação.

As configurações de roteamento para ciclomotores são muito simples e consistem em apenas algumas opções.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de roteamento para ciclomotores Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento para ciclomotores iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecione as estradas que você deseja evitar durante a navegação. </summary>![Evitar estradas Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher o(s) tipo(s) de estrada na lista: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático que transporta veículos através de corpos d'água)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Restrições de acesso privado serão ignoradas ao calcular a rota. | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer. |


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode habilitar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está habilitado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso geralmente acontece ao navegar por uma trilha ou rota online. Deve ser configurada de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das definições ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*