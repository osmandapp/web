---
source-hash: 6ed7b2af27dd55b412539bc8c15f73cc2d55449aac9a5bc6af5328ccd31ec35b
sidebar_position: 7
title: Ação Rápida (Botões personalizados)
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




## Visão geral {#overview}

O widget de Ação Rápida é um elemento interativo da interface do usuário que fornece acesso rápido a funções ou ações-chave sem abrir configurações adicionais. Este widget é colocado na tela principal do mapa e permite simplificar e acelerar a interação com o aplicativo, tornando-o mais conveniente e eficiente.

![Widget de ação rápida](@site/static/img/widgets/quick_action_widget.png)


## Widget de Ação Rápida {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget de ação rápida_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget de ação rápida_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Para usar o botão de Ação Rápida, você deve primeiro habilitar este widget.

<!--
- Para abrir o menu de Ação Rápida, basta tocar no botão.
- Por padrão, o botão de Ação Rápida aparecerá no canto direito (acima dos botões de zoom), mas pode ser movido para qualquer parte da tela pressionando-o por um tempo. -->


### Adicionar e Excluir Ações {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Toque em Excluir (ícone de lixeira no canto superior direito) → Selecione as ações*

![Widget de ação rápida_android_add](@site/static/img/widgets/quick_action_widget_andr.png) ![Botão personalizado Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Toque em Editar (ícone de lápis no canto superior direito) → Selecione as ações*

![Widget de ação rápida_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Botão personalizado Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Todas as ações são organizadas no menu **Adicionar Ação** e agrupadas por tipo. Uma lista completa de ações e suas descrições pode ser encontrada na seção [Tipos de ação](#action-types).

Você pode atribuir uma ou mais [ações](#action-types) ao botão de ação rápida. Existem duas maneiras de adicionar ações.

- **Na tela Configurar**. Selecione um botão da lista e toque no botão "**＋**". Você precisa selecionar o [tipo de ação](#action-types) primeiro e depois alterar seu nome e [parâmetros](#actions-in-loop).
- **No painel do botão de ação rápida**. Toque no *botão de Ação Rápida* na tela do mapa. No final da lista, na última tela do painel, está a caixa "**＋**" *Adicionar Ação*. Toque nela e selecione uma ação na [lista de tipos](#action-types).


:::note

- Cada ação deve ter um nome único.
- As telas, numeradas como Tela 1, Tela 2, etc., são criadas automaticamente quando o número de ações na lista aumenta para 6 itens.

:::


### Parâmetros de Ação {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de ação rápida_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de ação rápida_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

As ações atribuídas a um botão de ação rápida são agrupadas em telas. Esses grupos de ações são abertos quando você toca nesse botão no mapa. Novas telas são criadas automaticamente quando a lista de ações excede *6 itens*. Você pode reorganizar as ações para atender às suas preferências seguindo estas etapas:

**Para Android**.

1. Via tela de configuração:

    - Vá para *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Use *Pressionar e Arrastar* no ícone de duas linhas verticais para reorganizar as ações.

2. Via menu de ação rápida:

    - Abra o menu de ação rápida e, em seguida, pressione e segure *Adicionar Ação*.
    - Use *Pressionar e Arrastar* no ícone de duas linhas verticais para reorganizar as ações.

**Para iOS**.

- Navegue até *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Toque em *Editar* (ícone de lápis) e, em seguida, *Pressione e Arraste* no ícone de três linhas verticais para reorganizar as ações.

#### Ações em Loop {#actions-in-loop}

![Botão personalizado Android](@site/static/img/widgets/actions_in_loop_andr.png)

Para algumas ações, você pode atribuir uma lista de camadas que mudarão em círculo a cada toque: *Fonte do mapa*, *Estilo do mapa*, *Sobreposição*, *Subcamada*, *Esquema de cores do terreno*, *Adicionar perfil*.

O botão permite atribuir uma única camada ou uma lista de camadas que mudam circularmente quando tocadas ou com um diálogo intermediário.

- **Mostrar um diálogo intermediário**. Exibe um diálogo com uma lista de mapas.
- **Não mostrar um diálogo intermediário**. As fontes do mapa mudam em uma ordem definida.


### Alterar Posição no Mapa {#change-position-on-the-map}

O widget *Ação Rápida* aparece no canto inferior da tela do mapa quando você o habilita pela primeira vez. Você pode mover o widget para qualquer parte da tela segurando e arrastando. Para um posicionamento preciso e exato dos botões na tela do mapa, eles são automaticamente alinhados à posição da grade invisível mais próxima quando arrastados.

- **Aparência inicial**. Por padrão, o widget de ação rápida é colocado no canto inferior direito da interface do mapa.

    ![Visualização do widget de ação rápida](@site/static/img/widgets/quick_action_widget_view.png)

- **Mover o widget**. Pressionando e arrastando o widget, você pode reposicioná-lo na tela, com alinhamento automático de coluna e linha.

    ![Toque no widget de ação rápida](@site/static/img/widgets/quick_action_widget_tap.png)

- **Novo posicionamento**. Uma vez movido, o widget permanecerá em sua nova posição na tela do mapa até ser ajustado manualmente novamente.

    ![Mover widget de ação rápida](@site/static/img/widgets/quick_action_widget_move.png)

- **Vários [Botões personalizados](#custom-buttons)**. Você pode adicionar vários botões de ação rápida à tela do mapa. Esses botões também podem ser personalizados e reposicionados individualmente usando o mesmo método de arrastar e soltar.

    ![Mover widget de ação rápida](@site/static/img/widgets/quick_action_widget_multi.png)


### Botões personalizados {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Botão personalizado Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Botão personalizado Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Botões personalizados** são botões adicionais no mapa que funcionam da mesma forma que o botão *Ação Rápida*. Você pode criar um botão com uma ou mais ações e exibi-lo na tela do mapa. Os botões personalizados estão localizados na lista *Configurar tela → Botões → Botões personalizados*. Cada botão tem uma lista de ações independente do perfil e deve ter um ***Nome*** único, no entanto, um botão pode ser ativado/desativado individualmente para cada **perfil**.

Todas as [ações](#action-types) disponíveis são idênticas às que podem ser aplicadas à ação rápida padrão. Os botões personalizados podem ser configurados como botões de ***Ação única***, que aplicam a ação selecionada imediatamente ao serem tocados, sem a necessidade de navegar por um menu extra.


### Aparência do Botão de Ação Rápida {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Aparência do botão de ação rápida](@site/static/img/widgets/qa_button_appearance_andr.png)

Você pode modificar a aparência dos botões de Ação Rápida através de: *Menu → Configurar tela → Botões personalizados → Ação rápida → menu de três pontos → Aparência*. Esta configuração oferece opções para personalizar o tamanho, forma, ícone e opacidade do plano de fundo do botão, oferecendo maior controle sobre como os botões aparecem na sua tela.

Para configurações detalhadas de personalização, consulte o artigo [Configurar Tela](../widgets/configure-screen.md#button-appearance), onde você pode aprender como ajustar a aparência de cada botão para corresponder às suas preferências.


## Tipos de Ação {#action-types}

### Configurar Mapa {#configure-map}

| Ação | Descrição |
|:-------------|:-------------|
| Mostrar / Ocultar <br/> [**Rotas**](../map/vector-maps.md#routes) | Você pode selecionar tipos de rota para habilitar ou desabilitar sua exibição. <br/> Algumas rotas têm configurações adicionais. Por padrão, se você não selecionou nada no menu [Configurar Mapa](../map/configure-map-menu.md), o primeiro tipo de rota da lista será atribuído, caso contrário, um tipo de sua escolha será atribuído. Você pode ler mais no artigo [Rotas](../map/routes.md). <br/> - ***Rotas de bicicleta*** &nbsp;(*Rota*, *Redes de nós*) <br/> - ***Rotas de mountain bike*** &nbsp;(*Escala MTB*, *IMBA*) <br/> - ***Rotas de caminhada*** &nbsp;(*OSMC*, *Afiliação de rede*, *Redes de nós*) <br/> - ***Grau de dificuldade de trilhas de caminhada*** &nbsp;(*Escala SAC*, *Escala CAI*) <br/> - ***Pistas de esqui*** <br/> - ***Rotas de cavalo*** <br/> - ***Esportes aquáticos*** <br/> - ***Rotas de corrida*** <br/> - ***Trilhas de fitness*** <br/> - ***Rotas de viagem*** &nbsp;(*Trilhas*, *Livros de viagem*, *Pontos*) <br/> |
| Mostrar / Ocultar <br/> [**Camadas de topografia**](../plugins/topography.md#overview) | Todos os dados de topografia são apresentados como camadas de mapa separadas. Você pode alternar rapidamente a visibilidade dessas camadas com Ação Rápida. <br/> - ***Linhas de contorno*** <br/> - ***Terreno*** &nbsp;(*Dependendo da camada selecionada no menu [Configurar Mapa](../map/configure-map-menu.md)*, *Relevo sombreado*, *Inclinação*, ou *Altitude* *será exibido.*) |
| Alterar <br/> [**Esquema de cores do terreno**](../plugins/topography.md#modify-color-scheme) | Permite selecionar uma ou mais paletas de uma lista de existentes, que mudarão ao tocar no botão. |
| Mostrar / Ocultar <br/> [**Camadas de clima**](../plugins/weather.md#weather-layers) | Todos os dados meteorológicos são apresentados como camadas de mapa separadas. Com Ação Rápida, você pode ter acesso rápido para alternar a visibilidade dessas camadas no mapa. <br/> - ***Camada de precipitação*** <br/> - ***Camada de nuvens*** <br/> - ***Camada de pressão*** <br/> - ***Camada de vento*** <br/> - ***Camada de temperatura*** |
| Abrir <br/> [**Tela de clima**](../plugins/weather.md) <br /> *Somente Android* | Abre a [*tela de previsão do tempo*](../plugins/weather.md#weather-forecast-screen) com as informações detalhadas. |
| Mostrar / Ocultar <br/> [**Favoritos**](../map/point-layers-on-map.md#favorites) | Mostrar ou ocultar os pontos favoritos no mapa. |
| Mostrar / Ocultar <br/> [**Trilhas**](../personal/tracks/manage-tracks.md#track-menu) | Mostrar ou ocultar as últimas trilhas visíveis no mapa. |
| Mostrar / Ocultar <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Habilita ou desabilita a exibição de camadas de POI com categorias selecionadas no mapa.<br/>Você pode selecionar várias categorias de POI. A ação substitui as categorias de POI da Configuração do Mapa selecionadas sem usar Ações Rápidas. |
| Alterar <br/> [**Modo de mapa**](../map/vector-maps.md#map-mode) | Acesso rápido para alternar entre os modos diurno e noturno. |
| Alterar <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | O botão permite atribuir uma única fonte de mapa ou uma lista de fontes que mudam circularmente quando tocadas ou com um diálogo intermediário. <br/> - *Mostrar um diálogo intermediário*. Exibe um diálogo com uma lista de mapas. <br/> - *Não mostrar um diálogo intermediário*. As fontes do mapa mudam em uma ordem definida. <br/> - *Nome exibido* - *Fonte do mapa* >. ">" após o nome do mapa indica qual fonte de mapa está atualmente selecionada. <br/> - *Nome exibido* - > *Próxima fonte do mapa*. ">" antes do nome do mapa indica qual será a próxima fonte de mapa selecionada se a ação for executada. <br/> - *Nota*. Para alterar as fontes do mapa no OsmAnd, você pode configurar uma única ação rápida que permite alternar entre várias fontes de mapa, ou criar várias ações rápidas separadas, cada uma para uma fonte de mapa específica. |
| Mostrar / Ocultar <br /> [**Transporte público**](../map/vector-maps.md#transport) | Habilita ou desabilita a camada do mapa de transporte público <br /> - *Tipo de transporte*. No primeiro toque, você pode selecionar um ou vários tipos de transporte, incluindo *Paradas de transporte*, *Rotas de ônibus, trólebus e vans*, *Rotas de bonde e trem*, *Rotas de metrô*. |
| Alterar <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Crie uma lista de fontes de mapa como uma sobreposição de mapa e percorra-as. <br /> - *Nota*. Para alterar as sobreposições de mapa no OsmAnd, você pode configurar uma única ação rápida que permite alternar entre várias sobreposições de mapa, ou criar várias ações rápidas separadas, cada uma para uma sobreposição de mapa específica. |
| Alterar <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Crie uma lista de fontes de mapa como uma subcamada de mapa e percorra-as. <br /> - *Nota*. Para alterar as sobreposições de mapa no OsmAnd, você pode configurar uma única ação rápida que permite alternar entre várias subcamadas de mapa, ou criar várias ações rápidas separadas, cada uma para uma subcamada de mapa específica. |
| Alterar <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Crie uma lista de estilos de mapa para mapas vetoriais e percorra-os. <br /> - *Nota*. Para alterar os estilos de mapa no OsmAnd, você pode configurar uma única ação rápida que permite alternar entre várias sobreposições de mapa, ou criar várias ações rápidas separadas, cada uma para um estilo de mapa específico. |
| Mostrar / Ocultar <br/> [**Camada Mapillary**](../plugins/mapillary.md) | Permite visualizar camadas de mapa com imagens de nível de rua fornecidas pelo Mapillary. |
| Mostrar / Ocultar <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Você pode selecionar para exibir ou ocultar todas as notas OSM no mapa com um único toque do botão. |


### Interface {#interface}

| Ação | Descrição |
|:-------------|:-------------|
| Navegar <br/> **Tela anterior** | Um botão para navegar para a tela anterior. |
| Mostrar / Ocultar <br/> [**Visualização de navegação**](../navigation/setup/route-navigation.md) | Alterna a visibilidade da visualização da tela de navegação. |
| Mostrar / Ocultar <br/> [**Visualização de pesquisa**](../search/search-all.md) | Abre ou fecha a visualização de pesquisa. |
| Mostrar / Ocultar <br/> [**Menu lateral**](../start-with/main-menu.md) | Alterna a visibilidade do menu lateral principal para acessar as principais funcionalidades. |
| Ativar / Desativar <br/> [**Bloqueio da tela de toque**](../map/interact-with-map.md#touch-screen-lock) | Ativa ou desativa o bloqueio da tela de toque para evitar interações não intencionais na tela. |


### Interações com o Mapa {#map-interactions}

| Ação | Descrição |
|:-------------|:-------------|
| Mapa <br/> [**Aumentar zoom**](../map/interact-with-map.md) | Aumentar o zoom no mapa, aumentando simultaneamente a quantidade de dados exibidos. |
| Mapa <br/> [**Diminuir zoom**](../map/interact-with-map.md) | Diminuir a escala do mapa. É conveniente usar com [Widget de desenvolvedor - Nível de zoom](../widgets/info-widgets.md#developer-widgets). |
| Mover <br/> [**Mapa para baixo**](../map/interact-with-map.md) | Você pode usar o botão de ação rápida para mover o mapa para baixo. |
| Mover <br/> [**Mapa para cima**](../map/interact-with-map.md) | Ao tocar, a tela do mapa se move para cima. |
| Mover <br/> [**Mapa para a esquerda**](../map/interact-with-map.md) | Ao tocar no botão, a tela do mapa se move para a esquerda. |
| Mover <br/> [**Mapa para a direita**](../map/interact-with-map.md) | Com um botão de ação rápida, você pode mover o mapa para a direita. |
| Mover <br/> [**Para Minha localização**](../map/interact-with-map.md#my-location-and-zoom) | Move o mapa para a posição *Minha localização*. |


### Meus Lugares {#my-places}

| Ação | Descrição |
|:-------------|:-------------|
| Iniciar / Pausar <br/> [**Gravação de viagem**](../plugins/trip-recording.md#new-track-recording) | Iniciar uma sessão de gravação da trilha atual ou pausar para parar temporariamente sem completar a viagem. |
| Iniciar <br/> [**Novo segmento de viagem**](../plugins/trip-recording.md#overview-screen) | Iniciar um novo segmento da viagem sem interromper a gravação geral. |
| Salvar <br/> [**Viagem gravada e continuar**](../plugins/trip-recording.md#current-track-recording) | Salvar a gravação da viagem atual e continuar gravando sem interrupção. |
| Finalizar <br/> [**Gravação de viagem**](../plugins/trip-recording.md#current-track-recording) | Encerrar a sessão de gravação da viagem atual. |
| Adicionar <br/> [**Favorito**](../map/configure-map-menu.md#map-layers) | Adiciona um favorito ao local selecionado (central) do mapa. <br /> - *Mostrar um diálogo intermediário*. Exibe um diálogo de confirmação. <br /> - *Grupo*. Adiciona um favorito ao grupo selecionado. <br /> - *Cor*. Adiciona um favorito com uma cor pré-selecionada <br /> - *Nome*. Adiciona um favorito com o prefixo de nome especificado. |
| Adicionar <br/> [**Ponto de passagem da trilha**](../map/point-layers-on-map.md#track-waypoints) | Adiciona um novo ponto de passagem da trilha à [trilha atualmente gravando](../plugins/trip-recording.md) ou a [qualquer trilha em Meus Lugares](../personal/tracks/manage-tracks.md). <br /> - *Mostrar um diálogo intermediário*. Exibe um diálogo de confirmação. <br /> - *Grupo*. Adiciona um favorito ao grupo selecionado. <br /> - *Cor*. Adiciona um favorito com uma cor pré-selecionada <br /> - *Nome*. Adiciona um favorito com o prefixo de nome especificado. |
| Adicionar <br/> [**Marcador de mapa**](../map/configure-map-menu.md#map-layers) | Adiciona um marcador a um local selecionado (centro) do mapa. |
| Adicionar <br/> [**Local de estacionamento**](../plugins/parking.md) | Adiciona estacionamento a um local selecionado (centro) do mapa. A posição antiga do estacionamento é excluída. |
| Adicionar <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Adiciona POI a um local selecionado (centro) do mapa (o mesmo que a ação do menu de contexto). <br /> - *Mostrar um diálogo intermediário*. Exibe um diálogo de confirmação. <br /> - *Tipo de POI* (opcional). Pré-seleciona o tipo de POI OSM. <br /> - *Tag/Valor* (múltiplos). Adiciona [tags / valores do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| Adicionar <br/> [**Nota OSM**](../plugins/osm-editing.md#create--modify-osm-note) | Adiciona uma [nota OSM](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *Mostrar um diálogo intermediário*. Exibe um diálogo de confirmação. <br /> - *Mensagem*. Adiciona uma mensagem padrão à nota. |
| Adicionar <br/> [**Notas de mídia**](../plugins/audio-video-notes.md) | Inicia a gravação de notas de áudio / foto / vídeo para um local selecionado (centro) do mapa. |
| Criar <br/> [**Nova rota**](../plan-route/create-route.md) <br /> *Somente Android* | Abre a ferramenta [Planejar uma rota](../plan-route/create-route.md) e cria uma rota para o local selecionado (central) no mapa. |


### Navegação {#navigation}

| Ação | Descrição |
|:-------------|:-------------|
| Adicionar <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Você pode selecionar o centro da tela do mapa como o primeiro ponto intermediário. O destino anterior permanece o mesmo. |
| Ativar / Desativar <br/> [**Comandos de voz**](../navigation/guidance/voice-navigation.md) | Silenciar ou ativar a orientação por voz durante a navegação. |
| Definir <br/> [**Ponto de partida**](../navigation/setup/route-navigation.md#set-destinations) | Marcar um local selecionado (centro) do mapa como ponto de partida. |
| Definir <br/> [**Destino**](../navigation/setup/route-navigation.md#set-destinations) | Adicionar o local selecionado (central) no mapa como destino. O destino anterior torna-se o último ponto intermediário. |
| Substituir <br/> [**Destino**](../navigation/setup/route-navigation.md#intermediate-destinations) | Definir / Substituir um local selecionado (centro) do mapa como destino. O destino anterior é excluído. |
| Ativar / Desativar <br/> [**Zoom automático do mapa**](../map/interact-with-map.md) | Habilitar ou desabilitar o zoom automático do mapa durante a navegação. |
| Iniciar/parar <br/> [**Navegação**](../navigation/setup/route-navigation.md#start--stop-navigation) | Iniciar navegação (se houver um ponto de destino presente) ou parar navegação. |
| Pausar / Retomar <br/> [**Navegação**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pausar / Retomar navegação. |
| Remover <br/> [**Próximo ponto de destino**](../navigation/setup/route-navigation.md#intermediate-destinations) | Remove o próximo ponto intermediário, se presente, caso contrário, remove o destino e exibe o diálogo de finalização da navegação. A ação fica inativa se você não tiver nenhum destino. |
| Simular <br/> [**Localização por GPX**](../plugins/development.md#gpx-track-simulation) | Simula a localização e o movimento do seu dispositivo usando uma trilha GPX. |


### Configurações {#settings}

| Ação | Descrição |
|:-------------|:-------------|
| Alterar <br/> [**Perfil do aplicativo**](../personal/profiles.md) | Crie uma lista de perfis de aplicativo e percorra-os. <br /> - *Mostrar um diálogo intermediário*. Exibe um diálogo com uma lista de perfis. <br /> - *Não mostrar um diálogo intermediário*. Os perfis mudam em uma ordem definida. <br /> - *Nota*. Você pode personalizar uma única ação que permite alternar entre vários perfis, ou criar várias ações separadas, cada uma para um perfil específico. |
| Alterar <br/> [**Próximo perfil do aplicativo**](../personal/profiles.md) | Alterna para o próximo perfil na lista. |
| Alterar <br/> [**Perfil anterior do aplicativo**](../personal/profiles.md) | Alterna para o perfil anterior na lista. |
| Alterar <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> (iOS **Posição da localização na tela**) | Permite definir o posicionamento do cursor *Minha Localização* no mapa. Habilita ou desabilita o cursor para estar sempre no centro da tela. |


## Usar Teclado para Ações {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivos externos](@site/static/img/map/external_custom_2_andr.png)

Usando a funcionalidade da ferramenta Ação Rápida, você pode atribuir as ações necessárias às teclas do seu dispositivo de entrada externo. Uma descrição pode ser encontrada no artigo [Interagir com o Mapa](../map/interact-with-map.md#custom-input-device-type).


## Artigos Relacionados {#related-articles}

- [Configurar Tela](./configure-screen.md)
- [Botões do mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegação](./nav-widgets.md)
- [Régua de raio e Régua](./radius-ruler.md)
- [Widgets de marcador](./markers.md)