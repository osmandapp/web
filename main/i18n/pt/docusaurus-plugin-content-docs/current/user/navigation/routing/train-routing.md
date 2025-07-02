---
source-hash: f5ae16407762521ec4aa196b206ad374ecb06bfd7b394248db04784c9100bc68
sidebar_position: 7
title:  Rotas de trem
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

:::note
Por padrão, o *perfil de trem* é desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O *roteamento de trem* no OsmAnd oferece aos usuários a possibilidade de usar linhas ferroviárias para navegação como se estivessem dirigindo um trem como um carro. Esta opção pode ser útil, por exemplo, para caminhadas quando não há outras estradas disponíveis. Em outros casos, é melhor usar o *[roteamento de transporte público](./public-transport-navigation.md)*.

![Mapa de transporte de bonde](@site/static/img/navigation/routing/train_routing_overview.png)


## Parâmetros de rota - Trem {#route-parameters---train}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configurações de roteamento de trem Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de trem iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

O *roteamento de trem* pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../guidance/navigation-settings.md#route-parameters) das configurações de Navegação.


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode ativar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essas configurações também podem ser definidas para o roteamento *Direto ao ponto*. É usado para calcular o Tempo Estimado de Chegada.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*