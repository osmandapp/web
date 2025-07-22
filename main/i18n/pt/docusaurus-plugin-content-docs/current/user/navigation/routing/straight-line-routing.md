---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title: Roteamento em linha reta (Aeronave)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Visão geral {#overview}

Ao contrário dos algoritmos de roteamento tradicionais que usam estradas, trilhas ou rotas predefinidas, o roteamento em linha reta calcula a distância mais curta entre dois pontos no mapa como uma linha reta. Esse recurso pode ser útil para caminhantes ativos que desejam se afastar de trilhas ou explorar áreas remotas onde as rotas tradicionais podem não estar disponíveis. Para pilotos de aeronaves leves e capitães de navios, usar o *tipo de roteamento em linha reta* pode ser muito útil na navegação.

<!-- ![Exemplo de navegação em linha reta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Exemplo de navegação em linha reta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- O roteamento *em linha reta* não considera quaisquer obstáculos ou barreiras que possam estar presentes no terreno, como montanhas, rios ou florestas densas.
- Não fornece nenhuma informação sobre a qualidade do terreno, o nível de dificuldade da rota ou quaisquer outros fatores relevantes que possam afetar a segurança ou a viabilidade da rota (a seção [Detalhes da rota](../setup/route-details.md) está vazia).

![Tipo de navegação em linha reta Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parâmetros da rota - Linha reta {#route-parameters---straight-line}

:::note
O roteamento em linha reta está vinculado ao *perfil da aeronave*. Por padrão, este perfil está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O roteamento *em linha reta* pode ser configurado de acordo com suas necessidades na seção [Parâmetros da rota](../guidance/navigation-settings.md#route-parameters) das configurações de navegação.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurações de roteamento em linha reta Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento em linha reta iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Recálculo em linha reta Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Quando o ângulo entre a rota calculada e a geolocalização real for maior do que o definido por você, o caminho mais curto de sua posição atual para a rota calculada será construído. Em outras palavras, o OsmAnd calculará um segmento de rota adicional para a rota calculada anteriormente. |


## Outras configurações de roteamento {#other-routing-settings}

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros da rota*, a distância na qual a rota será recalculada para o *roteamento em linha reta* é definida como 500 metros por padrão.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros da rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros da rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essas configurações também podem ser definidas para o roteamento *Direto ao ponto*. É usada para calcular o Tempo Estimado de Chegada.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das definições ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*