---
source-hash: 1cb08bcd8ee7ef526cb41a67a59668e7c8cf614ee888f222e7e39337a0e136c1
sidebar_position: 8
title:  Rotas de barco
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

O roteamento de barco pode ser uma ferramenta valiosa para quem gosta de passear de barco ou navegar por canais, rios ou vias navegáveis. Devido à falta da maioria das vias navegáveis nos dados do OpenStreetMap, o roteamento de barco *não é recomendado* para **navegação em águas abertas**, sendo sugerido o uso de **[Direto ao ponto](#direct-to-point-routing-for-boat)**. Com as linhas de contorno de profundidade ativadas, ele pode ajudar você a se manter seguro na água, evitando perigos como águas rasas, rochas ou outros obstáculos.
O motor de roteamento de barco do OsmAnd também leva em consideração as características das vias navegáveis e dos próprios barcos.

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
Por padrão, o *perfil de barco* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O roteamento de barco pode ser configurado de acordo com suas necessidades na [seção Parâmetros de rota](../../navigation/guidance/navigation-settings.md#route-parameters) das configurações de Navegação.

Normalmente, o *roteamento de barco* é usado com o perfil de barco (o último ativado junto com o [plugin Náutico](../../plugins/nautical-charts.md)). No entanto, é possível usar o roteamento de barco com outros perfis também, e diferentes [tipos de roteamento](#other-routing-types-for-boat) também podem ser empregados no perfil de barco.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de roteamento de barco Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de barco iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Observação |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Permite usar riachos e drenos para navegação de barco. Ativar esta opção pode ser útil para pequenos barcos, como canoas, caiaques, jangadas, barcos a remo. | [Riachos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) são cursos d'água de formação natural que são muito estreitos para serem chamados de rio. [Drenos](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) são cursos d'água artificiais, tipicamente revestidos com concreto ou similar, usados para transportar água supérflua, como água da chuva ou descarga de águas cinzas. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Ativar esta opção permite usar cursos d'água intermitentes para navegar de barco. | A tag [Intermitente](https://wiki.openstreetmap.org/wiki/Key:intermittent) é usada para indicar que um curso d'água não contém água permanentemente. |

:::note Navegação Aquática e Limitação

1. O perfil de barco é projetado para roteamento ao longo de rios, lagos e outras vias navegáveis. Ele suporta tags OSM como:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. O perfil de barco **não suporta rotas de balsa (`route=ferry`)**. Isso significa que as rotas de balsa, mesmo que presentes no mapa, **não serão usadas** ao calcular rotas de barco.

3. Para seguir uma linha de balsa manualmente:

    - Use a ferramenta [Planejar uma Rota](../../plan-route/create-route.md) e coloque os pontos de passagem manualmente.
    - Use o perfil de Carro, que suporta rotas de balsa

:::

## Outros tipos de roteamento para barco {#other-routing-types-for-boat}

O tipo de [roteamento de barco](#route-parameters---boat) é um algoritmo de roteamento padrão para o perfil de barco. Embora você possa escolher outro tipo de roteamento, que também é adequado para navegação de barco:

 - [Roteamento direto ao ponto para barco](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Roteamento em linha reta para barco](./boat-navigation.md#straight-line-routing-for-boat)

É importante notar que os tipos de roteamento *Direto ao ponto* e *Linha reta* só devem ser usados em águas abertas onde não há obstáculos ou perigos para a navegação. Se você estiver navegando em uma via navegável com um canal ou rota específica, você deve usar o tipo de roteamento de barco no OsmAnd, que o guiará pelos canais de navegação corretos e evitará áreas rasas ou outros perigos.

Esses tipos de roteamento para o perfil de barco podem ser ativados usando o seguinte caminho: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> ou outro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### Roteamento direto ao ponto para barco {#direct-to-point-routing-for-boat}

:::note
Ao usar os tipos de navegação Direto ao ponto e Barco, você precisará de [dados de contornos de profundidade](../../plugins/nautical-charts.md#nautical-map-style), que podem ser ativados e configurados em *Configurar mapa*.
:::

O [tipo de roteamento direto ao ponto](./direct-to-point-routing.md) pode ser usado com o perfil de barco quando você deseja navegar seu barco em águas abertas sem seguir nenhuma rota ou via navegável específica. Este tipo de roteamento permite que você defina um ponto de destino e o OsmAnd calculará um caminho direto para esse ponto a partir de sua localização atual. Este tipo de roteamento não considera as características do seu barco, como velocidades mínima e máxima, altura e largura. Sua rota não será recalculada em caso de desvio.

![Tipo de navegação direto ao ponto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Roteamento em linha reta para barco {#straight-line-routing-for-boat}

O [tipo de roteamento em linha reta](./straight-line-routing) pode ser usado com o perfil de barco quando você deseja navegar seu barco em águas abertas, mas prefere seguir uma linha reta em vez de uma rota curva para o seu ponto de destino. Isso pode ser útil ao navegar para um ponto distante, que é visível no horizonte, por exemplo.

![Tipo de navegação em linha reta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)