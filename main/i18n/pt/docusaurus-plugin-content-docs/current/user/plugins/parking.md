---
source-hash: c5522cf3c673aa4af3738c22a0afc948910a5af511d7468ae41a34b1784474ea
sidebar_position: 12
title: Posição de Estacionamento
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Visão geral {#overview}

O plugin **Posição de Estacionamento** ajuda você a salvar e gerenciar o local onde estacionou seu carro. Ele permite que você coloque um marcador no mapa, acompanhe a duração do estacionamento e, opcionalmente, defina um lembrete no calendário para quando o tempo de estacionamento terminar.

Este plugin é gratuito e funciona offline com mapas OsmAnd baixados. Você pode localizar rapidamente seu veículo estacionado, estimar a distância a pé de volta a ele e compartilhar o local de estacionamento, se necessário.

- Você pode adicionar um local de estacionamento manualmente através do menu de contexto.
- Se for por tempo limitado, o plugin registra o horário de início e de término.
- O horário de término pode acionar um lembrete no calendário do seu dispositivo.
- Os detalhes do estacionamento podem ser visualizados posteriormente ou usados para navegação.

O marcador é temporário e fácil de remover quando não for mais necessário.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de estacionamento Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de estacionamento iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>

## Parâmetros de configuração necessários {#required-setup-parameters}

Para usar um local de estacionamento no mapa, você precisa fazer as seguintes configurações:

1. Ative o [plugin Posição de estacionamento](../plugins/index.md#enable--disable) no *Menu Principal → Plugins*.
2. Defina um [local de estacionamento](#set-a-spot) no mapa através do menu de contexto.
3. (Opcional) Adicione o [widget de Estacionamento](#parking-widget) à tela para acesso mais rápido.

## Local de estacionamento no mapa {#parking-spot-on-the-map}

Quando você marca um local de estacionamento, o OsmAnd salva suas coordenadas geográficas junto com um carimbo de data/hora. Se necessário, um limite de tempo e um lembrete no calendário também podem ser adicionados.

### Definir um local {#set-a-spot}

Para definir um local de estacionamento no mapa, amplie para o nível desejado, toque e segure o local no mapa e, no [menu de contexto](../map/map-context-menu.md) que se abre, faça as configurações.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Definir local de estacionamento no Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Definir limites de tempo no Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selecionar Estacionamento em Ações no iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Definir ponto de estacionamento no iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Para colocar um marcador de estacionamento, amplie o mapa, toque e segure o local desejado e abra o [menu de contexto](../map/map-context-menu.md). Em seguida:

1. Toque em [Ações](../map/map-context-menu#actions).
2. Selecione **Marcar como local de estacionamento** (*Android*) ou **Adicionar local de estacionamento** (*iOS*).
3. Escolha uma das opções disponíveis:
   - **Tempo ilimitado** – adiciona um marcador básico sem contagem regressiva.
   - **Estacionamento com tempo limitado** – permite definir um horário de término e, opcionalmente, criar um lembrete no calendário do seu dispositivo.
4. Confirme para colocar o marcador. O horário de início é salvo automaticamente.

:::info Horário de início
O horário de início é sempre definido automaticamente. Se você precisar alterar o horário de término, deverá excluir e recriar o local de estacionamento. Os lembretes são adicionados ao seu calendário apenas se você selecionou esta opção durante a configuração.
:::

### Mantenha-se informado {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de estacionamento Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Tempo restante no Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de estacionamento iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Informações de estacionamento no iOS](@site/static/img/plugins/parking/ios_parking_info.png)

</TabItem>

</Tabs>

Depois que um local de estacionamento é salvo, o OsmAnd ajuda você a monitorar sua localização e tempo através do menu de contexto ou do [widget de Estacionamento](#parking-widget) opcional.

Você pode visualizar o marcador de estacionamento diminuindo o zoom no mapa ou tocando no **widget de Estacionamento**, que centraliza o mapa no seu local salvo. O widget também mostra a distância da sua posição atual (ou centro do mapa) até o local de estacionamento.

Detalhes adicionais são mostrados ao tocar no marcador de estacionamento:

- **Horário de início** – o momento em que o marcador foi colocado.
- **Tempo restante** ou **Tempo excedido** – se um limite de tempo foi definido, isso mostra quanto tempo resta ou passou desde a expiração.
- Se você ativou o lembrete do calendário, ele aparecerá no aplicativo de calendário do seu dispositivo.

### Navegando para um ponto de passagem {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Indo para o ponto de estacionamento no Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Indo para o ponto de estacionamento no iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Você pode usar o local de estacionamento como um destino de navegação para retornar facilmente ao seu veículo. O OsmAnd oferece duas maneiras principais de iniciar a navegação para o local de estacionamento salvo:

**Via menu de Navegação**:

1. Toque no botão **Navegação**.
2. Escolha um perfil.
3. Toque em **Definir destino** e selecione **Estacionamento** na lista de pontos salvos.

**Via widget de Estacionamento**:

1. Toque no **widget de Estacionamento**.
2. Toque no marcador do local de estacionamento.
3. Selecione **Navegação** e escolha o perfil que deseja usar.

### Remover um local {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ação Excluir Estacionamento no Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Ação Excluir Estacionamento no Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Ação Excluir Estacionamento no iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Para excluir um marcador de estacionamento:

1. Localize o local de estacionamento no mapa ou toque no **widget de Estacionamento**.
2. Toque no marcador para abrir o menu de contexto.
3. Selecione **Excluir** ou **Descartar**.

Se um lembrete do calendário foi definido, ele também será removido automaticamente.

## Widget de Estacionamento {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_parking"/>*

![Adicionando widget de Estacionamento no Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="parking_place"/>*

![Adicionando widget de Estacionamento no iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

O [widget de Estacionamento](../widgets/info-widgets.md#parking-widget) mostra a distância do centro da tela até o local de estacionamento salvo e permite que você centralize rapidamente o mapa nesse local.

- O widget é visível apenas depois que uma posição de estacionamento é definida.
- Se ainda não estiver na tela, você pode adicioná-lo através do menu [Configurar tela](../widgets/configure-screen.md).

Para saber mais, consulte: [Widgets informativos – Widget de estacionamento](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)

## Artigos relacionados {#related-articles}

- [Interagir com o mapa](../../user/map/interact-with-map.md)
- [Configurações globais](../../user/personal/global-settings.md)
- [Mapas vetoriais (Estilos de mapa)](../../user/map/vector-maps.md)