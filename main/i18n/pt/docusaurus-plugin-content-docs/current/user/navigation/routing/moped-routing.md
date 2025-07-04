---
source-hash: f3ae7502efc866393db44fa06909a99ed7ca0f9aec1864d654e84235132cb2f5
sidebar_position: 4
title: Roteamento de ciclomotores
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

O *roteamento de ciclomotores* permite que os motoristas construam uma rota ideal (a mais rápida), levando em consideração as especificidades da condução de um veículo como um ciclomotor ou scooter. O processo de roteamento considera vários fatores para um movimento seguro, confortável e legal em estradas ou ciclovias.

:::note
Por padrão, o *perfil de ciclomotor* é desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parâmetros de rota - Ciclomotor {#route-parameters---moped}

O *roteamento de ciclomotores* pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../guidance/navigation-settings.md#route-parameters) das configurações de Navegação.

As configurações de roteamento do ciclomotor são muito simples e consistem em apenas algumas opções.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configurações de roteamento de ciclomotor Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de ciclomotor iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecione as estradas que você deseja evitar durante a navegação. </summary>![Evitar estradas Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher o(s) tipo(s) de estrada na lista: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | As restrições de acesso privado serão ignoradas ao calcular a rota. | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer. |


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode habilitar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso geralmente ocorre ao navegar em uma trilha ou rota online. Deve ser configurado de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*