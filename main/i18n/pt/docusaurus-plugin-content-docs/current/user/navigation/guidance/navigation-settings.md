---
source-hash: 9dfdc23272c2395a2fe157264de05cb42ea6de2b1b0d9d756c1c1bf66f78f6d3
sidebar_position: 7
title: Configurações de Navegação
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Visão Geral {#overview}

Para uma navegação bem-sucedida, é importante configurar corretamente as definições apropriadas de acordo com as suas necessidades e a forma como viaja - de carro, a pé, a cavalo ou de esqui. Este artigo descreve os parâmetros básicos de rota, [Instruções de voz](#voice-prompts), [Alertas de ecrã](#screen-alerts), [Comportamento do mapa durante a navegação](#map-during-navigation) e a [Aparência das linhas de rota](#customize-route-line). Também detalha as configurações do veículo, como [Velocidade padrão](#default-speed) e [Velocidade máxima/mínima](#road-speeds), [Tipo de motor](#fuel-used-by-motor) para cálculo de CO2, [Capacidade do tanque de combustível](#fuel-tank-capacity) e [Tamanho/peso](#size-parameters), que podem afetar a rota. Ajustar estas configurações irá ajudá-lo a tirar o máximo partido da utilização do OsmAnd e a atingir o seu objetivo sem atrasos desnecessários.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Como Abrir {#how-to-open}

Esta seção apresenta as configurações de navegação necessárias para calcular e traçar uma rota, que pode definir para o perfil selecionado. Este menu inclui configurações para [Preparação de rota](../setup/route-navigation.md), o [Ecrã do mapa durante a navegação](../guidance/map-during-navigation.md), e o que define nas *Configurações de navegação* afeta diretamente a exibição dos dados nos [Detalhes da rota](../setup/route-details.md).

Existem três formas de aceder ao menu de configurações de navegação.

- Vá ao *Menu principal → Configurações*, selecione o *Perfil* necessário e toque em *Configurações de navegação*.

- Toque no ícone *Navegação* no ecrã do mapa, depois selecione o *ícone de Configurações → Configurações de navegação*.

- Vá ao *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>* principal.

:::info
O perfil padrão *Navegar mapa* não tem configurações de navegação.
:::


## Tipo de Navegação {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

A navegação é uma parte importante de uma viagem, e escolher *o tipo certo* de navegação pode tornar a sua jornada muito mais fácil. O tipo de navegação que escolher pode depender de como viaja e se tem uma ligação à Internet.

- **Navegação online**
Utiliza principalmente um sistema de roteamento especial ou website que permite à aplicação OsmAnd traçar uma rota com base em informações atuais e outros fatores. Pode ler sobre como escolher a melhor rota online no artigo [Roteamento online](../routing/online-routing.md). Este tipo de navegação está disponível apenas para a *versão Android* da aplicação.

- **Navegação offline**
Não requer acesso à internet e oferece uma seleção mais ampla de [tipos de navegação](../routing/osmand-routing.md#routing-types) que podem ser usados para calcular uma rota. Entre eles estão *bicicleta, barco, carro, a pé, esqui* e *linha reta*. Atualmente, existem 13 tipos básicos de roteamento, bem como um tipo de roteamento externo [BRouter](../routing/brouter.md) que oferece oportunidades adicionais de roteamento.

O tipo de navegação determina quais regras são usadas para calcular rotas. Se precisar de um tipo específico de navegação, pode **importar o seu próprio ficheiro de roteamento *XML* modificado**. Leia mais sobre as regras de roteamento na nossa [página do GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). E existe um artigo separado sobre o formato XML e como usá-lo, [Estilo de Renderização de Mapa](../../../technical/osmand-file-formats/osmand-rendering-style.md), que pode ajudá-lo a criar um ficheiro de rota.


## Parâmetros de Rota {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

Os **<Translate android="true" ids="route_parameters"/>** são configurações que determinam como a aplicação irá calcular uma rota para chegar a um destino, considerando fatores como tipo de transporte, prioridades de roteamento, condições da rota, complexidade da rota e preferências do utilizador.

Para cada [perfil](../../personal/global-settings.md#default-profile), exceto para *Navegar Mapa*, o OsmAnd seleciona por padrão o [Tipo de navegação](#navigation-type) ideal e os [parâmetros de rota](../routing/osmand-routing.md#routing-types) relevantes. No entanto, pode escolher qualquer tipo que deseje e alterar os parâmetros dependendo das suas preferências e das condições externas da próxima viagem.

Todos os parâmetros de rota são descritos em detalhe nas seções correspondentes da documentação:
*[Roteamento de carro (Camião, Motocicleta)](../routing/car-based-routing.md), [Roteamento de bicicleta (MTB)](../routing/bicycle-based-routing.md), [Roteamento de ciclomotor](../routing/moped-routing.md), [Roteamento de pedestres](../routing/pedestrian-routing.md), [Roteamento de transporte público](../routing/public-transport-navigation.md), [Roteamento a cavalo](../routing/horse-routing.md), [Roteamento de esqui](../routing/ski-routing.md), [Roteamento de comboio](../routing/train-routing.md), [Roteamento de barco](../routing/boat-navigation.md), [Roteamento direto ao ponto](../routing/direct-to-point-routing.md), [Roteamento em linha reta](../routing/straight-line-routing.md), [Roteamento online](../routing/online-routing.md), [Roteamento BRouter](../routing/brouter.md)*.


### Recalcular Rota {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

O parâmetro **Cálculo de Rota** altera automaticamente a rota calculada quando se desvia dela ou conduz na direção oposta. Em ambos os casos, esta configuração ajuda-o a manter a sua direção de viagem e a chegar ao seu destino sem perder tempo a procurar manualmente uma nova rota.

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> em caso de desvio* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Se as [instruções de voz](../guidance/voice-navigation.md#voice-settings) estiverem ativadas, o OsmAnd anuncia que a rota está a ser recalculada. |
| *Recalcular rota em caso de direção inversa* | A sua rota será recalculada se se mover para o ponto de partida. | Com esta configuração desativada, o movimento para o ponto de partida não é considerado um desvio do caminho (desde que siga a rota calculada). |


### Configurações de Desenvolvimento {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Menu → Configurações → perfil da aplicação → Configurações de navegação → Parâmetros de rota → Desenvolvimento*

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Menu → Configurações → perfil da aplicação → Configurações de navegação → Parâmetros de rota → Desenvolvimento*

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

Os parâmetros na seção **Desenvolvimento** são principalmente para utilizadores avançados e estão disponíveis apenas quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.

| Parâmetro | Descrição |
|:------------|:---------------|
| *Tipo de roteamento* (*Android*) / *Algoritmo de roteamento* (*iOS*) | <ul><li>**A*** 2 fases (*Android*) / **A*** (*iOS*) adiciona uma fase extra ao algoritmo padrão para melhorar a qualidade da rota calculada. Esta opção pode ser útil para encontrar rotas em redes rodoviárias grandes e complexas, mas o cálculo da rota pode demorar mais tempo.</li><li>**A* clássico** (*Android*) / **Hierarquias de autoestradas** (*iOS*) otimiza o planeamento de rotas, favorecendo as estradas principais e autoestradas, minimizando o número de curvas e cruzamentos na rota. Particularmente eficaz em longas distâncias.</li><li>**HH (Hierarquias de autoestradas) x Java** (*apenas Android*) baseia-se na implementação de estruturas de dados hierárquicas para otimizar a procura de caminhos num mapa, tendo em conta as restrições de tempo de execução e o consumo de recursos do dispositivo, e é realizada na plataforma Java.</li><li>**HH (Hierarquias de autoestradas) x C++** (*apenas Android*) é um algoritmo que utiliza a linguagem de programação C++ para processar eficientemente dados de rede rodoviária e construir rotas ótimas utilizando estruturas de dados hierárquicas. É otimizado para o processamento rápido de grandes quantidades de dados e é particularmente eficaz para navegar em mapas com muitas redes rodoviárias.</li></ul> |
| *Aproximação GPX* (*apenas Android*) | <ul><li>A aproximação GPX **baseada em roteamento** em **C++ e Java** utiliza dados de rota para aproximar trilhas GPS com rotas rodoviárias existentes, o que melhora a precisão da trilha e reduz o tamanho da trilha.</li><li>As aproximações GPX **baseadas em geometria** em **C++ e Java** funcionam com base em princípios geométricos para aproximar rápida e precisamente trilhas GPS, permitindo o processamento eficiente de grandes quantidades de dados.</li></ul> |
| *Zoom automático* | <ul><li>**Discreto** permite ampliar o mapa para um nível de detalhe específico medido em alguns passos discretos.</li><li>**Suave** fornece uma mudança gradual na escala do mapa com efeitos de animação suaves, sem solavancos ou saltos.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*apenas Android*) | Utilizar [atualizações do OsmAnd Live](../../personal/maps-resources.md#osmand-live) durante o roteamento. Note que recomendamos usar esta opção apenas para fins de teste. |

<!--
| Parâmetro | Descrição | Nota |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Permite usar [atualizações do OsmAnd Live](../../personal/maps-resources.md#osmand-live) durante o roteamento. Nota, que recomendamos usar esta opção apenas para fins de teste. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Adiciona uma fase extra ao algoritmo padrão (A*) para melhorar a qualidade da rota calculada. Esta opção pode ser útil para encontrar rotas em redes rodoviárias grandes e complexas, embora possa demorar mais tempo para o cálculo da rota. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->


## Instruções de Voz {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Configurações de Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *Botão <Translate ios="true" ids="routing_settings"/>* *(ou <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Escolher perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Configurações de Navegação por Voz iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

A primeira parte do artigo *[Instruções de Voz / Notificações](./voice-navigation.md)* descreve como configurar as instruções de voz em detalhe.

As instruções de áudio durante a navegação ajudam-no, como condutor ou peão, a chegar ao seu destino enquanto [navega numa rota selecionada](../setup/route-navigation.md). Contêm informações sobre curvas, direções de condução, sinais de trânsito, distâncias até ao seu destino e outros fatores que podem afetar a sua navegação.

Se selecionar uma trilha como ponto de destino, precisa de usar a opção [Anexar às estradas](../setup/gpx-navigation.md#attach-to-the-roads) para que as instruções de voz funcionem corretamente.

As *instruções de voz* permitem-lhe concentrar-se na estrada e não se distrair com o mapa ou o dispositivo de navegação. Também melhoram a segurança na condução, reduzem o tempo necessário para navegar em terrenos desconhecidos e podem ser úteis para diferentes [tipos de rotas](../routing/osmand-routing.md#routing-types).


## Alertas de Ecrã {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

A configuração de navegação **Alerta de Ecrã** ativa o [**Widget de Alertas**](../../widgets/nav-widgets.md#alert-widget). *Detalhes:*

- Ao aproximar-se de um dos obstáculos suportados na estrada, as notificações aparecem no canto inferior esquerdo do mapa.
- Se configurar os [*avisos de voz e texto*](../../navigation/guidance/voice-navigation.md) disponíveis na aplicação OsmAnd, terá uma viagem mais confortável e segura.
- A aparência e o momento dos avisos dependem das suas configurações de velocidade. Pode encontrá-los [no artigo](../../../technical/algorithms/voice-prompt-triggering.md).
- O comportamento dos *Alertas de Ecrã* também é afetado pela configuração [Mostrar pontos ao longo da rota](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Pode ***selecionar quais alertas*** deseja ver no ecrã da aplicação durante a navegação:

- **Limite de velocidade** ([informação na Wiki OSM](https://wiki.openstreetmap.org/wiki/Speed_limits)). Na configuração de alertas de ecrã, o *Limite de velocidade* é exibido apenas no ecrã com *Avisos de trânsito* ativados. Se quiser ver os limites de velocidade durante a navegação sem outros avisos, utilize o [widget](../../widgets/nav-widgets.md#speed-limit).
- **Avisos de trânsito** ([informação na Wiki OSM](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Informações adicionais podem ser encontradas no artigo [Ecrã do mapa durante a navegação](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Passadeiras** ([informação na Wiki OSM](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Radares de velocidade** ([informação na Wiki OSM](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Para mais informações sobre a configuração de radares de velocidade no OsmAnd, leia [Tipos de Alerta](../../widgets/nav-widgets.md#alert-types) e o artigo *Configurações globais*, seção [Legal](../../personal/global-settings.md#legal).
- **Túneis** ([informação na Wiki OSM](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Os tipos de avisos têm uma aparência visual diferente, que depende da região de viagem. O OsmAnd não visa apresentar sinais de trânsito 100% idênticos, mas aponta algumas semelhanças.
:::


## Mapa Durante a Navegação {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

O **mapa é usado durante a navegação** para determinar a sua localização, planear a sua rota e orientação do terreno. Durante a navegação, pode visualizar o mapa com *centralização automática*, movê-lo e *aumentar e diminuir o zoom* para ver a área necessária. O mapa também pode exibir marcadores indicando pontos de interesse, rotas, condições meteorológicas, sinais de trânsito e outros objetos para o ajudar a navegar. O mapa pode ser atualizado em *tempo real* e exibe *informações atualizadas* que podem afetar o planeamento da rota.

Pode aprender como o comportamento do mapa muda durante a navegação no artigo [Ecrã do mapa durante a navegação](../guidance/map-during-navigation.md).

## Personalizar Linha de Rota {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

Com a configuração **Personalizar Linha de Rota**, pode escolher a aparência da linha de rota que será visível no mapa durante a navegação. Pode selecionar a *cor*, a *largura da linha* e a exibição das *setas de curva* nela. Para cada perfil, pode escolher uma visualização de linha diferente. Todos estes parâmetros são descritos em detalhe no artigo *Ecrã do mapa durante a navegação* na seção [Aparência da linha de rota](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parâmetros do Veículo {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

Para um cálculo de rota ideal no OsmAnd, deve considerar os seguintes parâmetros do veículo:

1. Defina a [*Velocidade Padrão* ou *Velocidades da Estrada*](#default-speed--road-speeds), como a [velocidade mínima e máxima](#road-speeds) do veículo. Isso ajudará a aplicação a determinar o tempo necessário para completar a rota e permitirá que ela escolha a melhor rota, considerando os limites de velocidade em diferentes segmentos da estrada.
2. Especifique o [*tipo*](#fuel-used-by-motor) de combustível usado pelo motor. Isso permitirá que a aplicação estime as emissões de CO2.
3. Insira a [*capacidade do seu tanque*](#fuel-tank-capacity) para rastrear com precisão o seu nível de combustível e consumo.
4. Defina os [*parâmetros de tamanho e peso*](#size-parameters) do seu veículo, o que pode ajudar a aplicação a calcular a rota ideal e evitar obstáculos na estrada devido a restrições.

Definir corretamente os parâmetros na aplicação OsmAnd irá ajudá-lo a evitar problemas ao navegar numa rota, escolher a mais adequada de acordo com o tipo de veículo e restrições da estrada, e calcular o tempo da sua viagem.


### Parâmetros de Tamanho {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Os parâmetros do veículo afetam a navegação e a construção da rota porque determinam a disponibilidade de estradas, pontes, ferries, barragens e outras infraestruturas. Se a altura, largura, comprimento ou peso de um veículo exceder os valores permitidos para certas seções da estrada, o sistema de navegação OsmAnd encontrará uma rota alternativa para evitar obstáculos ao longo do caminho.

- As unidades de medida corresponderão às configurações selecionadas em *Configurações gerais → [Unidades e formatos](../../personal/profiles.md#units--formats)*.
- Os parâmetros do veículo podem ser definidos manualmente.
- Se selecionar manualmente o parâmetro de medição do veículo, a aplicação oferecer-lhe-á o valor mais próximo da lista pronta. Isso é necessário para evitar erros e construir a rota de forma mais correta.
- Pode escolher os parâmetros do veículo a partir de uma lista pronta de tamanhos.
- Não defina o tamanho, *Nenhum*, o que significa que não serão aplicadas restrições ao parâmetro selecionado.

#### Limites {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> O parâmetro Peso está disponível apenas em tipos de navegação como [*Carro, Camião* e *Motocicleta*](../../navigation/routing/car-based-routing.md).

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> O parâmetro Altura está disponível apenas em tipos de navegação como *[Carro, Camião, Motocicleta](../../navigation/routing/car-based-routing.md)* e *[Barco](../../navigation/routing/boat-navigation.md)*.

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> O parâmetro Comprimento está disponível apenas em tipos de navegação como [*Carro, Camião* e *Motocicleta*](../../navigation/routing/car-based-routing.md).

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> O parâmetro Largura está disponível apenas em tipos de navegação como *[Carro, Camião, Motocicleta](../../navigation/routing/car-based-routing.md)* e *[Barco](../../navigation/routing/boat-navigation.md)*.

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Os limites nos parâmetros do veículo podem ser importantes para a navegação e segurança rodoviária. Algumas destas restrições podem incluir:

1. Restrições a veículos que se deslocam em certas áreas urbanas.
2. Restrições ao movimento de veículos em seções específicas da estrada, como onde há pontes, túneis com espaço limitado, viadutos de baixa elevação, curvas complexas ou outras estruturas.
3. Limites de peso por eixo do veículo podem ser especialmente importantes para camiões.
4. Restrições para veículos que se deslocam em certas condições, como altas temperaturas, estradas molhadas ou com neve, à noite ou em condições climáticas com visibilidade limitada.

Estas restrições podem ser importantes para a navegação e devem ser consideradas ao planear uma rota. Se um veículo exceder os limites, isso pode resultar em segurança rodoviária, danos à infraestrutura, multas por acidentes e outras consequências legais. Portanto, os condutores devem examinar cuidadosamente a rota e certificar-se de que a altura do seu veículo cumpre os limites.


### Parâmetros de Combustível {#fuel-parameters}

#### Combustível Usado pelo Motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota de Navegação Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de Navegação iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Se selecionar o tipo de motor nos parâmetros do veículo, os [***dados de pegada de CO2***](../../navigation/setup/route-details.md#elevation-info) serão exibidos acima do gráfico em [Detalhes da Rota](../setup/route-details.md).
Estão disponíveis seis tipos de combustível: ***Gasolina, Diesel, GPL, GNC, Elétrico*** e ***Híbrido***.

**Aplicabilidade:**

A configuração **Combustível usado pelo motor** está disponível apenas em navegações baseadas em veículos, como *[Carro, Motocicleta e Camião](../../navigation/routing/car-based-routing.md)*.


#### Capacidade do tanque de combustível {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

O parâmetro **Capacidade do tanque de combustível** permite-lhe monitorizar o nível de combustível e o consumo do seu veículo com maior precisão, fornecendo o volume total do seu tanque. A unidade de medida para a capacidade de combustível é determinada pelas configurações definidas em *Menu → Configurar perfil → Configurações gerais → Unidades e Formatos → Unidade de volume*. Para obter orientações detalhadas sobre a configuração de Unidades e Formatos, consulte o artigo [Perfil (Configurações)](https://osmand.net/docs/user/personal/profiles#units--formats).

O OsmAnd suporta as seguintes unidades de capacidade:

- Galões - **gal**. Esta abreviatura é usada para representar tanto **galões imperiais** quanto **galões americanos**, dependendo das suas preferências de unidade selecionadas.
- Litros - **l**. A unidade métrica para capacidade.

**Aplicabilidade:**

A configuração **Capacidade do tanque de combustível** está disponível apenas em navegação baseada em veículos. Para tipos de navegação como *Bicicleta*, *Passeio a cavalo*, *A pé* e *Esqui*, este parâmetro não é exibido nos Parâmetros do Veículo.

Ao inserir a capacidade exata do seu tanque de combustível, a aplicação pode fornecer uma experiência mais personalizada, incluindo:

- Rastreamento preciso do combustível restante com base no seu consumo.
- Planeamento de rotas aprimorado com paragens para abastecimento otimizadas de acordo com o tamanho do seu tanque.

Para garantir cálculos e sugestões de navegação precisos, verifique se a sua unidade selecionada corresponde ao padrão de medição do seu tanque.


### Velocidade Padrão / Velocidades da Estrada {#default-speed--road-speeds}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

Para todos os tipos de navegação, a velocidade mínima e máxima permitida, tanto por padrão quanto por estrada, pode ser diferente, de acordo com certos valores ([Limites de velocidade padrão](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) e restrições para veículos. A velocidade também é definida em certos incrementos para tornar as configurações da aplicação o mais utilizáveis possível. Para os perfis *Caminhada*, *Passeio a cavalo* e *Ciclismo*, em pequenos incrementos equivalentes a 0,1 km/h ([Unidades e formatos](https://osmand.net/docs/user/personal/profiles#units--formats)), e para os outros perfis, em incrementos equivalentes a 1 km/h.
As configurações de velocidade determinam quando os [anúncios de voz](../guidance/voice-navigation.md) são ativados.

Estes parâmetros são usados como velocidade para estimar o [tempo de chegada](../../widgets/nav-widgets.md#time-to-intermediate) quando a velocidade não pode ser determinada a partir dos dados do mapa:

- para o perfil selecionado;
- se as estradas utilizadas não tiverem limites de velocidade, o que também pode afetar o roteamento;
- se forem selecionadas trilhas geradas pelo utilizador ou importadas.


#### Velocidade Padrão {#default-speed}

A **velocidade padrão** é a velocidade de movimento predefinida. É usada para calcular o tempo de chegada e determinar a rota ideal com base na velocidade de movimento que a aplicação considera típica para este modo de transporte. Por exemplo, carro, transporte público, pedestre, ou a velocidade que define manualmente.


#### Velocidades da Estrada {#road-speeds}

<InfoAndroidOnly />

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
Estas configurações no iOS estão disponíveis em *Menu → Configurações → perfil da aplicação → Configurações de navegação → Parâmetros de rota → Velocidades da estrada*.
:::

-->

- **Velocidade mínima**
A configuração define a velocidade mínima de condução para todos os tipos de estrada na rota. Aumenta a prioridade para estradas com uma velocidade recomendada inferior à velocidade mínima.
- **Velocidade máxima**
A configuração define a velocidade máxima de condução e diminui a prioridade para estradas com uma velocidade possível superior à máxima.


## Orientação Detalhada da Trilha {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Anexar às estradas 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Configurações de Navegação Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Orientação detalhada da trilha*

![Configurações de Navegação](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Configurações de Navegação](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

A funcionalidade **Orientação detalhada da trilha** melhora a precisão da navegação de rota ao utilizar **rotas baseadas em trilhas**. Quando seleciona uma trilha como destino, pode ativar a configuração [Anexar às estradas](../setup/gpx-navigation.md#attach-to-the-roads) no menu [Seguir trilha](../setup/gpx-navigation.md#follow-track-options). Isso garante que a trilha esteja alinhada com as estradas existentes para uma navegação mais suave e precisa.

Existem duas opções para usar a *Orientação detalhada da trilha*:

- **<Translate android="true" ids="ask_every_time"/>** (*configurações padrão*) – A opção *Anexar às estradas* aparecerá na seção [Detalhes da Rota](../setup/route-details.md) cada vez que uma rota baseada em trilha for calculada. Isso permite que decida se deseja aplicar o anexo à estrada para cada sessão de navegação.

- **<Translate android="true" ids="shared_string_always"/>** – O processo de anexo à estrada será aplicado automaticamente para cada rota de *navegação por trilha* sem exigir confirmação manual.

Para mais informações sobre como usar a navegação baseada em trilhas, visite [Navegação por Trilha](../setup/gpx-navigation.md).


## Artigos Relacionados {#related-articles}

- [Parâmetros de rota](../routing/osmand-routing.md#routing-types)
- [Preparação de rota](../setup/route-navigation.md)
- [Navegação por trilha](../setup/gpx-navigation.md)
- [Navegação por marcadores](../setup/markers-navigation.md)
- [Detalhes da rota](../setup/route-details.md)
- [Ecrã do mapa durante a navegação](./map-during-navigation.md)
- [Instruções de voz / Notificações](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última atualização: abril de 2025*