---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title:  Navegação de barco
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

A navegação de barco pode ser uma ferramenta valiosa para quem gosta de passear de barco ou velejar por canais, rios ou vias navegáveis. Devido à falta da maioria das vias navegáveis nos dados do OpenStreetMap, a navegação de barco *não é recomendada* para **navegação em águas abertas**, sugere-se usar **[Direto ao ponto](#direct-to-point-routing-for-boat)** em vez disso. Com as linhas de contorno de profundidade ativadas, pode ajudar a manter-se seguro na água, evitando perigos como águas rasas, rochas ou outros obstáculos.
O motor de navegação de barco do OsmAnd também leva em consideração as características das vias navegáveis e dos próprios barcos.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tela de navegação de barco Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tela de navegação de barco iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Parâmetros de rota - Barco {#route-parameters---boat}

:::note
Por padrão, o *perfil de barco* está desativado. Para usar este perfil para navegação, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

A navegação de barco pode ser configurada de acordo com suas necessidades na seção [Parâmetros de rota](../../navigation/guidance/navigation-settings.md#route-parameters) das configurações de Navegação.

Normalmente, a *navegação de barco* é usada com o perfil de barco (o último ativado junto com o [plugin Náutico](../../plugins/nautical-charts.md)). No entanto, é possível usar a navegação de barco com outros perfis também, e diferentes [tipos de navegação](#other-routing-types-for-boat) também podem ser empregados no perfil de barco.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Configurações de navegação de barco Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de navegação de barco iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Permite usar riachos e drenos para navegação de barco. Ativar esta opção pode ser útil para pequenos barcos, como canoas, caiaques, jangadas, barcos a remo. | [Riachos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) são cursos d'água naturais que são muito estreitos para serem chamados de rio. [Drenos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) são cursos d'água artificiais, tipicamente revestidos com concreto ou similar, usados para transportar água supérflua, como água da chuva ou descarga de esgoto.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Ativar esta opção permite usar cursos d'água intermitentes para navegar de barco. | A tag [Intermitente](https://wiki.openstreetmap.org/wiki/Key:intermittent) é usada para indicar que um curso d'água não contém água permanentemente. |


:::note Navegação e Limitação da Água

1. O perfil de barco foi projetado para navegação ao longo de rios, lagos e outras vias navegáveis. Ele suporta tags OSM como:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. O perfil de barco **não suporta rotas de ferry (`route=ferry`)**. Isso significa que as rotas de ferry, mesmo que presentes no mapa, **não serão usadas** ao calcular rotas de barco.

3. Para seguir uma linha de ferry manualmente:

    - Use a ferramenta [Planejar uma rota](../../plan-route/create-route.md) e coloque os pontos de passagem manualmente.
    - Use o perfil de carro, que suporta rotas de ferry

:::

## Outros tipos de navegação para barco {#other-routing-types-for-boat}

O tipo de [navegação de barco](#route-parameters---boat) é um algoritmo de navegação padrão para o perfil de barco. Embora você possa escolher outro tipo de navegação, que também seja adequado para navegação de barco:

 - [Navegação direta ao ponto para barco](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Navegação em linha reta para barco](./boat-navigation.md#straight-line-routing-for-boat)

É importante notar que os tipos de navegação *Direta ao ponto* e *Em linha reta* só devem ser usados em águas abertas onde não há obstáculos ou perigos para a navegação. Se você estiver navegando em uma via navegável com um canal ou rota específica, você deve usar o tipo de navegação de barco no OsmAnd, que o guiará pelos canais de navegação corretos e evitará áreas rasas ou outros perigos.

Esses tipos de navegação para o perfil de barco podem ser ativados usando o seguinte caminho: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> ou outro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Navegação direta ao ponto para barco {#direct-to-point-routing-for-boat}

:::note
Ao usar os tipos de navegação Direta ao ponto e Barco, você precisará de [dados de contornos de profundidade](../../plugins/nautical-charts.md#nautical-map-style), que podem ser ativados e configurados em *Configurar mapa*.
:::

O [tipo de navegação Direta ao ponto](./direct-to-point-routing.md) pode ser usado com o perfil de barco quando você deseja navegar seu barco em águas abertas sem seguir nenhuma rota ou via navegável específica. Este tipo de navegação permite que você defina um ponto de destino e o OsmAnd calculará um caminho direto para esse ponto a partir de sua localização atual. Este tipo de navegação não considera as características do seu barco, como velocidades mínima e máxima, altura e largura. Sua rota não será recalculada em caso de desvio.

![Tipo de navegação direta ao ponto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Navegação em linha reta para barco {#straight-line-routing-for-boat}

O [tipo de navegação em linha reta](./straight-line-routing) pode ser usado com o perfil de barco quando você deseja navegar seu barco em águas abertas, mas prefere seguir uma linha reta em vez de uma rota curva para o seu ponto de destino. Isso pode ser útil ao navegar para um ponto distante, que é visível no horizonte, por exemplo.

![Tipo de navegação em linha reta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Outras configurações de navegação {#other-routing-settings}

- O algoritmo de navegação também pode considerar limitações temporárias especificadas no OpenStreetMap. Isso pode ser feito usando a opção *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode ativar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de navegação que estão atualmente em fase de testes. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essa configuração é usada em estradas desconhecidas sem limites de velocidade. Isso geralmente ocorre ao navegar por uma trilha ou rota online. Deve ser definida de acordo com os parâmetros do seu veículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: maio de 2025*