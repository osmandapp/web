---
source-hash: ae22b6cd7849daf3b25f0a644bcdf63cfd6f3e48185e0d277a59873ba978a352
sidebar_position: 1
title: Preparação de Rotas
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

O recurso **Preparação de Rotas** no OsmAnd oferece orientação de navegação passo a passo para vários [tipos de roteamento](./../routing/osmand-routing.md#routing-types), incluindo [direção](./../routing/car-based-routing.md), [caminhada](./../routing/pedestrian-routing.md), ciclismo, [equitação](./../routing/horse-routing.md) e [esqui](./../routing/ski-routing.md). Os usuários podem personalizar as configurações de navegação, adicionar destinos e otimizar rotas para maior eficiência.

:::tip

- A **navegação offline** está ativada por padrão. No entanto, você também pode usar [mecanismos de roteamento online](./../routing/online-routing.md).

- O **OsmAnd requer permissão** para acessar a [localização precisa](../../start-with/first-steps.md#permission-to-access-the-location) para uma navegação precisa. Ative isso nas configurações do dispositivo, se necessário.

:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Tela de navegação Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Tela de navegação Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tela de navegação iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Tela de navegação iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Definir Destinos {#set-destinations}

**Passo 1: Baixar mapas.**

Antes de usar a navegação offline, certifique-se de que os [mapas necessários estejam baixados](../../start-with/download-maps.md). Vá para *Menu → Mapas e Recursos → Baixar Mapas* para instalar mapas para sua região.

**Passo 2: Configurar perfis de navegação.**

[Configure os perfis](../../personal/profiles.md) que você pretende usar:

- Defina [parâmetros do veículo](../guidance/navigation-settings.md#size-parameters) (*importante para caminhoneiros*), selecione o [tipo de motor](../guidance/navigation-settings.md#fuel-used-by-motor) (*opcional*).

- Configure a [aparência da linha da rota](../guidance/map-during-navigation#route-line-appearance) (*opcional*, disponível para usuários Pro ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Configure [comandos de voz](../guidance/voice-navigation.md).

**Passo 3: Definir destinos.**

1. Abra o [*Menu de Navegação*](#navigation-menu):

    - Especifique o [ponto de destino](#set-target-point).
    - Espere até que a rota seja calculada. Depois disso, você poderá obter informações adicionais sobre sua rota na *[seção Detalhes](./route-details.md#overview)*.
    - Você pode alternar entre diferentes [tipos de roteamento](./../routing/osmand-routing.md#routing-types) (perfis) para obter o melhor resultado.
    - Adicione [destinos intermediários](#intermediate-destinations) (opcional).
    - Você também pode alterar o ponto de partida da [localização atual](../../map/interact-with-map#my-location-and-zoom) para a necessária.

2. [Configurações de Navegação](#settings) adicionais podem ser usadas dependendo de seus propósitos (você pode configurar quais estradas evitar ou preferir, economizar combustível ou escolher a rota mais rápida, etc.).

3. [Inicie](#start--stop-navigation) a navegação ou primeiro [simule a navegação](#simulated-navigation) (com esta função você pode testar sua rota antes de realmente percorrê-la).

4. Enquanto estiver na rota, você pode [*Pausar/Retomar*](#pause--resume-navigation) a navegação e [*Pará-la*](#start--stop-navigation).


:::note

**A rota não pode ser construída quando o *[Mapa online](../../map/raster-maps.md#select-raster-maps)* é selecionado como fonte do mapa.**

:::


### Menu de Navegação {#navigation-menu}

Existem 3 maneiras de acessar o menu de navegação:

- O [*botão de Navegação*](../../widgets/map-buttons.md#directions) na tela do mapa.
- *Direção para/de* em um [*menu de contexto do mapa*](../../map/map-context-menu.md#directions-to--from).
- Seção de Navegação no [*Menu Principal*](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Menu de navegação Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de navegação iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Define o local de partida (padrão: [*Minha Localização Atual*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Use para [definir seu ponto de destino](#set-target-point).
- **Adicionar** &nbsp;&#43; - Insere [pontos intermediários](../../widgets/nav-widgets.md#distance-to-intermediate) ao longo da rota.
- **Trocar** &nbsp;&#8595;&#8593; - Inverte os pontos de *Início* e *Fim*.
- **Botão de Som** - Silencia os [comandos de voz](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Ajusta](#settings) as preferências de rota e restrições de estrada.

Defina seu destino no *Menu de Navegação* usando:

- Pontos favoritos especiais [Casa / Trabalho](#use-home-or-work-points).
- Rota anterior ou [Histórico](../../personal/global-settings.md#history).
- O botão **Cancelar** retorna à tela principal.
- O [botão Iniciar](#start--stop-navigation) inicia a navegação após o cálculo da rota ter terminado.

### Selecionar Ponto de Partida {#select-starting-point}

Quanto ao ponto de partida, você pode escolher sua localização atual, a localização de um [ponto Favorito](../../map/point-layers-on-map.md#favorites), selecionar um ponto no mapa ou usar a [Pesquisa](../../search/index.md). Você também pode definir um ponto de partida no [menu de contexto do mapa](../../map/map-context-menu.md) selecionando a função [Direções de](../../map/map-context-menu.md#directions-to--from).

### Definir Ponto de Destino {#set-target-point}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Menu de navegação Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu de navegação iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

O mais importante para iniciar a navegação é determinar seu destino. O ponto de destino pode ser encontrado usando a função [*Pesquisar*](../../search/index.md#overview), ou simplesmente em um mapa. Você também pode definir o ponto de destino no [*Menu de Navegação*](#navigation-menu):

- **<Translate android="true" ids="search_button"/>** - Abre [o menu de pesquisa](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Abre [o menu de pesquisa de endereço](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Abre o mapa para escolher um ponto de destino tocando no mapa.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permite usar [Favorito](../../personal/favorites.md) como destino.
- **<Translate android="true" ids="shared_string_markers"/>** - Permite escolher um dos [Marcadores de Mapa](../../personal/markers.md) como ponto de destino.
- **Trocar Ponto de Partida e Destino** &nbsp;&#8595;&#8593; - Permite trocar os pontos de *Início* e *Fim*.

### Destinos Intermediários {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navegação intermediária Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navegação intermediária Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegação intermediária iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navegação intermediária iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - permite abrir a lista de pontos de destino para fazer alterações.
- **&nbsp;&#8592;** - retorna à tela do menu de Navegação.
- **&nbsp;&#10005;** - permite excluir o ponto de destino da lista de pontos.
- **&nbsp;&#61;** - permite alterar a ordem dos pontos na lista de pontos.
- *&nbsp;&#43; Adicionar* - abre o menu de contexto *Adicionar intermediário*.
- *&nbsp;&#9776; Limpar tudo* - permite limpar todos os pontos intermediários.

Se você escolher **Ordenar** (*Android*) ou **Opções** (*iOS*) na lista de destinos, você terá acesso a opções especiais para ajustar a ordem de navegação para pontos intermediários.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navegação intermediária Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegação intermediária iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

Neste menu, você pode encontrar opções adicionais para gerenciar os pontos de destino:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - O OsmAnd oferecerá a rota mais curta entre todos os seus destinos, no entanto, a ordem da visita pode ser editada. O ponto de partida e o destino final não serão alterados.

- **<Translate android="true" ids="switch_start_finish"/>** - O ponto de partida e o destino final serão trocados.

- **<Translate android="true" ids="reverse_all_points"/>** (*Somente Android*) - Todos os pontos serão colocados na direção inversa.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Você pode adicionar destinos intermediários a partir deste menu.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Todos os destinos intermediários serão removidos do mapa.

### Usar Pontos de Casa ou Trabalho {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Favoritos especiais Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritos especiais iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

As abas **Casa** e **Trabalho** (ou [Pontos Especiais](../../personal/favorites.md#special-favorites-personal) para Favoritos) podem ser usadas para definir rapidamente pontos de destino no menu de navegação. Se você não inseriu os endereços dos Favoritos Especiais, essas células permanecerão vazias. Se você tocar neste campo, será solicitado a criar esses POIs.

### Histórico de Rotas Anteriores {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota anterior Android](@site/static/img/navigation/route/previous_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota anterior iOS](@site/static/img/navigation/route/previous_ios.png)

</TabItem>

</Tabs>

Se a gravação do [Histórico de Navegação](../../personal/global-settings.md#history) estiver ativada, você pode usar as rotas ou destinos anteriores da lista de histórico para navegação. Esta opção pode ser útil para acesso rápido a rotas frequentemente usadas. Os itens na lista de histórico são classificados pelo uso mais recente, começando pelo mais novo.

:::note

- Quando o [registro de dados do Histórico](../../personal/global-settings.md#history-options) estiver desativado, você não será solicitado a usar rotas anteriores para navegação.
- Você pode excluir alguns ou todos os registros de histórico sobre suas rotas anteriores. Isso pode ser feito na aba *[Histórico de navegação](../../personal/global-settings.md#history-options)* da opção Histórico (*Menu → Configurações → Configurações do OsmAnd → Histórico*).

:::


## Iniciar / Parar Navegação {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Início da tela de navegação Android](@site/static/img/navigation/route/navigation_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tela de navegação iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Uma vez selecionados os pontos de início e fim, o aplicativo criará uma rota entre eles usando um perfil ativo. O [perfil do aplicativo](../../personal/profiles.md) e o conjunto de [widgets](../../widgets/index.md) só serão alterados quando você tocar no botão *Iniciar* da navegação.

- **Toque em Iniciar** para começar a navegação.
- [Pause](#pause--resume-navigation) a navegação ao fazer uma pausa. (*Somente Android*)
- **Pare** a navegação selecionando **Parar** (*Android*) ou **Cancelar** (*iOS*).

:::note Detalhes da Rota
Informações adicionais sobre a rota criada, como altitude, instruções passo a passo, ferramenta de análise e outras, podem ser encontradas na seção [**Detalhes**](../setup/route-details.md).
:::

### Recálculo de Rota {#route-recalculation}

A rota pode ser recalculada automaticamente em caso de desvio. Você pode alterar os parâmetros do recálculo nas [Configurações de Navegação](../guidance/navigation-settings.md#recalculate-route). Você também pode desativar a notificação sobre o recálculo da rota nas configurações de [Comandos de Voz](../guidance/voice-navigation.md#voice-settings).

### Pausar / Retomar Navegação {#pause--resume-navigation}

<InfoAndroidOnly/>

Se você quiser parar para uma pausa e desviar da rota por um curto período, você pode usar a função *Pausar/Retomar* navegação para pausar os comandos de voz e parar de recalcular a rota.
Esta opção está disponível na versão Android do aplicativo na *[lista de Notificações](../guidance/voice-navigation.md#text-notifications)* ou no *[menu de Ações Rápidas](../../widgets/quick-action.md)*.

![Tela de notificação Android](@site/static/img/navigation/route/navigation_pause_android.png)

Para retomar a navegação:

- Use a mensagem do OsmAnd na barra de notificação.
- Use o *menu de Ações Rápidas* ou a caixa de diálogo que aparece ao tocar no *[botão de Navegação](../../widgets/map-buttons.md#directions)* (veja a captura de tela).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Retomar navegação Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Retomar navegação iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Quando você **toca no botão Navegação** enquanto está na sua rota, a navegação **não para, e os comandos de voz continuam sendo emitidos**, embora as opções propostas Retomar ou Iniciar possam ser confusas.
:::


### Dicas de Economia de Energia {#power-saving-tips}

A navegação usa GPS e processamento em segundo plano, o que pode esgotar a bateria. Para otimizar o uso de energia:

- **Desligue a tela** enquanto confia nos comandos de voz.
- Ative o [Controle de tela](../guidance/voice-navigation.md#screen-control) (*Somente Android*) em *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Configurações {#settings}

![Preparação de rota Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Configurações de Navegação {#navigation-settings}

Para acessar as configurações de navegação, siga um dos passos abaixo:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *Botão de Navegação → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Não há configurações de navegação no perfil *Navegar no mapa*.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação de Perfis iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determina como as rotas são calculadas. Por exemplo, seu perfil de bicicleta tem um tipo de navegação Ciclismo, que define as regras de roteamento. Você pode importar essas regras (como arquivo routing.xml) no OsmAnd. Mais sobre roteamento você pode ler em nossa página do [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controla quais parâmetros serão usados durante o roteamento (este é o processo de seleção de uma rota para navegação).

Por favor, leia sobre os parâmetros de rota para o tipo de navegação correspondente.

Como configurar o [tipo de roteamento](../routing/osmand-routing.md#routing-types) e os [parâmetros de rota](../guidance/navigation-settings.md#route-parameters) você pode ler no [artigo de configurações de navegação](../guidance/navigation-settings.md) ou em artigos sobre tipos específicos de roteamento na [seção Parâmetros de Rota](../routing/osmand-routing.md#routing-types).

### Navegação Simulada {#simulated-navigation}

A ferramenta **Navegação Simulada** permite pré-visualizar uma rota antes de viajar. Isso ajuda no planejamento, familiarização e teste do sistema de navegação do OsmAnd.

#### Iniciar / Parar Simulação {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Simular navegação Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simular navegação iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Quando uma rota de navegação é construída, você pode começar a simular a navegação usando a opção **<Translate android="true" ids="simulate_navigation"/>**.

- No [Menu de Navegação](#navigation-menu), vá para *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Ative o interruptor para habilitar a opção.
- Toque no botão [Iniciar](#start--stop-navigation) navegação para iniciar a simulação.
- Para [Parar](#start--stop-navigation) a simulação de navegação, toque em **Parar** (*Android*) ou **Cancelar** (*iOS*).

#### Modo de Velocidade {#speed-mode}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/> →* &#x2699

![Simular navegação Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/> →* &#x2699

![Simular navegação iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Acelera a simulação em caminhos retos, diminuindo a velocidade em cruzamentos.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Funciona a uma velocidade fixa.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Em trechos retos** da estrada, a velocidade será próxima da velocidade máxima permitida.
    - **Em cruzamentos**, o simulador reduzirá a velocidade.
    - **Penalidades adicionais** serão aplicadas em semáforos, sinais de parada e outros obstáculos semelhantes.


## Mapas Ausentes ou Não Sincronizados {#maps-missing-or-not-synchronized}

Para construir uma rota, todos os **mapas necessários** precisam ser baixados e ter a mesma data de lançamento. Observe que, em algumas situações, a mensagem de mapas ausentes pode estar oculta no menu de preparação da rota. Se você puxar o menu de navegação para cima, verá os possíveis motivos pelos quais sua rota não pôde ser calculada.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Mensagem sem mapas ao construir navegação Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mensagem sem mapas ao construir navegação iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Mapas Necessários {#required-maps}

Na caixa de diálogo de mapas necessários, você verá sugestões de mapas a serem baixados ou atualizados. A lista de mapas usados pode não ser precisa, pois calcula uma rota muito básica; para obter a lista precisa de mapas, você pode clicar em **Calcular online**. Se você selecionar **Usar mapas baixados**, o cálculo da rota tentará usar os mapas já baixados e ignorará a mensagem de aviso.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Mensagem sem mapas ao construir navegação Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mensagem sem mapas ao construir navegação iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Problemas Comuns e Soluções {#common-issues-and-solutions}

1. [As possíveis causas do cálculo lento da rota.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [O que fazer se o comprimento da rota exceder 250 quilômetros.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [O que fazer se a rota sugerida parecer incorreta.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Como resolver a situação em que a navegação não é possível devido à falta de mapas necessários.](#maps-missing-or-not-synchronized)

Para mais etapas de solução de problemas, consulte [problemas de navegação](../../troubleshooting/navigation.md).


## Artigos Relacionados {#related-articles}

- [Parâmetros de rota](../routing/osmand-routing.md#routing-types)
- [Detalhes da rota](./route-details.md)
- [Navegação por trilha](./gpx-navigation.md)
- [Navegação por marcadores](./markers-navigation.md)
- [Configurações de navegação](../guidance/navigation-settings.md)
- [Tela do mapa durante a navegação](../guidance/map-during-navigation.md)
- [Comandos de voz / Notificações](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última atualização: fevereiro de 2025*