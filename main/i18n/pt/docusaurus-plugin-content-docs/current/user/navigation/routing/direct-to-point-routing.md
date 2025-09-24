---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title: Roteamento direto ao ponto (Barco)
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

O roteamento direto ao ponto no OsmAnd é um recurso útil que permite navegar diretamente para um ponto específico no mapa sem ter que seguir uma rota predefinida ou rede de estradas. Este recurso pode ser usado por capitães de barco, entusiastas de atividades ao ar livre ou por serviços de emergência durante operações de resgate. No geral, o roteamento direto ao ponto é um recurso flexível e versátil que pode ser usado em uma variedade de situações em que os métodos de roteamento tradicionais podem não ser apropriados ou eficazes.

![Tipo de navegação direta ao ponto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Um ponto em uma linha é um ponto virtual cuja distância até o destino é a mesma que a distância da sua localização atual, mas não é uma projeção da sua localização atual em uma linha. Isso facilita a medição do progresso, e você pode usar a ferramenta de medição para obter a distância correta.


## Parâmetros de rota - Direto ao ponto {#route-parameters---direct-to-point}

O tipo de roteamento *Direto ao ponto* não está vinculado a nenhum perfil e pode ser usado com diferentes perfis.
Este tipo de roteamento não considera quaisquer obstáculos ou barreiras que possam estar presentes no terreno, como montanhas, rios ou florestas densas. Também não fornece nenhuma informação sobre a qualidade do terreno, o nível de dificuldade da rota ou quaisquer outros fatores relevantes que possam afetar a segurança ou a viabilidade da rota (a seção [Detalhes da rota](../setup/route-details.md) está vazia).

:::note
Ao usar os tipos de navegação Direto ao ponto e Barco, você precisará de [dados de contornos de profundidade](../../plugins/nautical-charts.md#nautical-map-style), que podem ser ativados e configurados em *Configurar mapa*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualquer perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Configurações de roteamento direto ao ponto](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualquer perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Configurações de roteamento direto ao ponto iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>