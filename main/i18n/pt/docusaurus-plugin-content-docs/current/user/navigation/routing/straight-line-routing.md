---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Rotas em linha reta (Aeronave)
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

Ao contrário dos algoritmos de roteamento tradicionais que usam estradas, trilhas ou rotas predefinidas, o roteamento em linha reta calcula a menor distância entre dois pontos no mapa como uma linha reta. Esse recurso pode ser útil para caminhantes ativos que desejam se afastar de trilhas ou explorar áreas remotas onde as rotas tradicionais podem não estar disponíveis. Para pilotos de aeronaves leves e capitães de navios, usar o *tipo de roteamento em linha reta* pode ser muito útil na navegação.

<!-- ![Exemplo de navegação em linha reta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Exemplo de navegação em linha reta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- O roteamento *em linha reta* não considera quaisquer obstáculos ou barreiras que possam estar presentes no terreno, como montanhas, rios ou florestas densas.
- Não fornece nenhuma informação sobre a qualidade do terreno, o nível de dificuldade da rota ou quaisquer outros fatores relevantes que possam afetar a segurança ou a viabilidade da rota (a seção [Detalhes da rota](../setup/route-details.md) está vazia).

![Tipo de navegação em linha reta Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parâmetros de rota - Linha reta {#route-parameters---straight-line}

:::note
O roteamento em linha reta está vinculado ao *perfil da aeronave*. Por padrão, este perfil está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

O roteamento *em linha reta* pode ser configurado de acordo com suas necessidades na seção [Parâmetros de rota](../guidance/navigation-settings.md#route-parameters) das configurações de navegação.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de roteamento em linha reta Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento em linha reta iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Recálculo em linha reta Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Quando o ângulo entre a rota calculada e a geolocalização real for maior do que o definido por você, o caminho mais curto da sua posição atual para a rota calculada será construído. Em outras palavras, o OsmAnd calculará um segmento de rota adicional para a rota calculada anteriormente. |