---
source-hash: 7f81c110562bd27c6dfc6fe07b890ebf5cb1758a6fee93796173d681f752db77
sidebar_position: 6
title: Roteamento de esqui
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

:::note
O roteamento de esqui e o perfil de esqui só estão disponíveis quando o [plugin de visualização de mapa de esqui](../../plugins/ski-maps.md) estiver ativado.
:::

O *roteamento de esqui* pode ser particularmente útil para esquiadores de fundo, montanhistas de esqui e outros entusiastas de esportes de inverno que desejam explorar novas áreas e planejar suas viagens com antecedência. Com o *roteamento de esqui*, os usuários do OsmAnd podem planejar rotas e navegar com segurança enquanto desfrutam da beleza das paisagens de inverno.

O *roteamento de esqui* pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../guidance/navigation-settings.md#route-parameters) das configurações de Navegação.

![Rotas de mapa - pistas de esqui](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parâmetros de rota - Esqui {#route-parameters---ski}

:::note
Por padrão, o *perfil de esqui* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

As configurações de *roteamento de esqui* permitem que os usuários planejem suas rotas selecionando o nível de dificuldade desejado e o tipo de terreno que desejam explorar. Existem várias opções para um movimento seguro, confortável e agradável em pistas ou durante um freeride.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configurações de roteamento de esqui Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Configurações de roteamento de esqui Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de esqui iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parâmetro | Permite usar para roteamento | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Uma [via de esqui-tour](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) ou área recomendada que é geralmente usada por muitos esquiadores durante uma temporada para o propósito de uma subida nórdica e uma descida em backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Rotas mais [difíceis](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) serão permitidas para roteamento. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Escolha uma das opções para esqui freeride. </summary>![Fora de pista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | O uso de [teleféricos](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) será ativado |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Trenós](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) são veículos menores que são puxados por um humano ou impulsionados apenas pela gravidade. Quando ativado, [pistas de trenó](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) serão usadas para roteamento de esqui |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Fora de pista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Outras configurações de roteamento {#other-routing-settings}

- O algoritmo de roteamento também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode habilitar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de testes. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso geralmente ocorre ao navegar por uma trilha ou rota online. Deve ser configurada de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*