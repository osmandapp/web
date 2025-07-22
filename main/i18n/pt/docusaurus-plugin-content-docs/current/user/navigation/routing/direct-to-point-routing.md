---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title:  Navegação direta para um ponto (Barco)
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

A navegação direta para um ponto no OsmAnd é um recurso útil que permite navegar diretamente para um ponto específico no mapa sem ter que seguir uma rota predefinida ou uma rede de estradas. Esse recurso pode ser usado por capitães de barco, entusiastas de atividades ao ar livre ou por serviços de emergência durante operações de resgate. No geral, a navegação direta para um ponto é um recurso flexível e versátil que pode ser usado em diversas situações em que os métodos de navegação tradicionais podem não ser apropriados ou eficazes.

![Tipo de navegação direta para um ponto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Um ponto em uma linha é um ponto virtual cuja distância até o destino é a mesma que a distância da sua localização atual, mas não é uma projeção da sua localização atual em uma linha. Isso facilita a medição do progresso, e você pode usar a ferramenta de medição para obter a distância correta.


## Parâmetros de rota - Direto para um ponto {#route-parameters---direct-to-point}

O tipo de navegação *Direta para um ponto* não está vinculado a nenhum perfil e pode ser usado com diferentes perfis.
Esse tipo de navegação não considera quaisquer obstáculos ou barreiras que possam estar presentes no terreno, como montanhas, rios ou florestas densas. Também não fornece nenhuma informação sobre a qualidade do terreno, o nível de dificuldade da rota ou quaisquer outros fatores relevantes que possam afetar a segurança ou a viabilidade da rota (a seção [Detalhes da rota](../setup/route-details.md) está vazia).

:::note
Ao usar os tipos de navegação Direta para um ponto e Barco, você precisará de [dados de contornos de profundidade](../../plugins/nautical-charts.md#nautical-map-style), que podem ser ativados e configurados em *Configurar mapa*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualquer perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Configurações de navegação direta para um ponto](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualquer perfil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Configurações de navegação direta para um ponto iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Outras configurações de navegação {#other-routing-settings}

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode ativar e ajustar as opções de recálculo de rota. O valor padrão é 0 metros de desvio, o que significa que a rota não é recalculada.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de navegação que estão atualmente em fase de teste. Observe que essas configurações só estão disponíveis quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

- A configuração *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* na versão *iOS* do OsmAnd está localizada em *Configurações de navegação → Parâmetros de rota* (para *Android*, em *Parâmetros do veículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Essas configurações também podem ser definidas para a navegação *Direta para um ponto*. Ela é usada para calcular o Tempo Estimado de Chegada.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. A configuração adequada das configurações o ajudará a evitar problemas ao criar uma rota. Você pode selecionar a rota mais apropriada dependendo do tipo de veículo e das restrições da estrada, bem como calcular o tempo de viagem.

> *Última atualização: junho de 2024*