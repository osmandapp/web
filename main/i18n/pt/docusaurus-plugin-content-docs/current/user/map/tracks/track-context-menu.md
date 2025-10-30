---
source-hash: 32ef17e9ab14ee378a3b47d0088c5f7a17b9d5af0af457980c95c99a7fa61a14
sidebar_position: 4
title: Menu de Contexto da Trilha
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

O *menu de contexto da trilha* fornece informações sobre a *[Trilha](../../personal/tracks/index.md)* em formato de texto e [gráfico](#altitude--speed-graphs). Ele permite adicionar informações, fazer alterações, editar e realizar várias outras ações com a trilha. Você pode acessar o *menu de contexto da trilha* simplesmente tocando na trilha desejada no mapa ou usando o menu *[Meus locais](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Pode ser necessário abrir a pasta da trilha e selecionar a trilha desejada tocando nela.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visão geral do menu de contexto da trilha Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Visão geral do menu de contexto da trilha iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Visão Geral da Trilha {#track-overview}

Ao tocar em uma trilha, a primeira tela do *Menu de contexto da trilha* é aberta - a *aba Visão Geral*. Nesta aba, você pode encontrar um resumo sobre a trilha escolhida (*[Painel de informações](#info-panel)*) e realizar as ações mais comuns com a trilha usando o *[Menu de ações da trilha](#track-actions)*. Você pode ver [descrição e informações de serviço](#description-and-info) sobre sua trilha se você puxar a aba Visão Geral para cima.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Painel de Informações {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visão geral do painel de informações Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Visão geral do painel de informações iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Na parte superior do painel de informações, você pode ver o nome da trilha e o símbolo usado para marcá-la (*somente Android*). O nome da trilha pode ser alterado usando a função de renomear no [menu Opções](#options). Algumas trilhas (principalmente os *[Guias de viagem](../../plan-route/travel-guides.md#manage-as-gpx-track)*) podem ter uma breve *[descrição](#description-and-info)* e (ou) uma imagem abaixo do *Nome da trilha*. Uma seta mostra a *Direção para o ponto mais próximo da trilha* a partir de [Minha localização](../../map/interact-with-map.md#my-location-and-zoom).  

O painel de informações também fornece informações sobre o seguinte:

- *<Translate android="true" ids="distance"/>*. Mostra o comprimento da trilha.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Exibe a soma total de subidas e descidas durante a viagem.
- *<Translate android="true" ids="altitude_range"/>*. Indica a altitude mínima e máxima em uma trilha.  

:::note
Caso sua trilha tenha sido criada no OsmAnd ou em qualquer outro aplicativo de rastreamento (portanto, seus pontos possuem tags de [`tempo` e `velocidade`](../../plugins/trip-recording#recorded-gpx-file)), o painel informativo também conterá informações sobre *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) ou *<Translate ios="true" ids="total_time"/>* (*iOS*) (o tempo entre os pontos inicial e final da trilha), *<Translate android="true" ids="shared_string_time_moving"/>* (a soma do tempo em movimento).
:::  

### Ações da Trilha {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visão geral do menu de contexto da trilha Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Visão geral do menu de contexto da trilha iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Botões **Mostrar / ocultar**. Altera a visibilidade da trilha no mapa.
- [Aparência](./appearance.md). Personalize a aparência da sua trilha.
- **Editar trilha** (*Android*). Abre a trilha na ferramenta [Planejar uma rota](../../plan-route/create-route.md).
- **Exportar** (*iOS*). Permite [exportar uma trilha](../../personal/tracks/manage-tracks.md#export).
- **Direções**. Abre a trilha no modo *[Navegação](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opções {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opções do menu da trilha Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Opções do menu da trilha iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

O menu **Opções** permite gerenciar e modificar a trilha selecionada com várias ferramentas e configurações.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Controla a visibilidade da trilha no mapa.
- **<Translate android="true" ids="shared_string_appearance"/>** – Abre o [menu Aparência](../tracks/appearance.md) para personalizar a cor, largura e transparência da trilha.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Inicia a [navegação por trilha](../../navigation/setup/gpx-navigation.md), alinhando sua rota com a trilha selecionada.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Somente Android*) – Mescla segmentos de trilha para preencher lacunas.
- **<Translate android="true" ids="analyze_on_map"/>**. Abre a ferramenta [Analisar no mapa](../tracks/index.md#analyze-track-on-map) para inspecionar a elevação, velocidade e distância da trilha.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Somente Android*) - Analisa a trilha por [intervalos](./track-context-menu.md#analyze-by-intervals).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporta a trilha selecionada no formato GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Carrega](../../plugins/osm-editing.md#upload-gps-track) a trilha selecionada para o OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Abre a ferramenta [Planejar rota](../../plan-route/create-route.md) para modificar a trilha.
- **Duplicar trilha** (*Somente iOS*) – Cria e salva uma cópia da trilha.
- **<Translate android="true" ids="rename_track"/>** – Permite alterar o nome da trilha.
- **<Translate android="true" ids="change_folder"/>** – Move a trilha para outra pasta ou cria uma nova.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Somente Android*) - Permite [filtrar pontos da trilha](#gps-filter) para refinar a precisão.
- **<Translate android="true" ids="altitude_correction"/>** (*Somente Android*) - Para [receber dados de elevação](#calculate-missing-elevation), [anexe sua trilha às estradas](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) ou calcule-a offline (necessário [Mapas de terreno](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Somente Android*) - [Simula sua posição](../../plugins/development.md#gpx-track-simulation) usando uma trilha GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Exclui a trilha.


### Descrição e Informações {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descrição e Informações Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Descrição e Informações Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descrição de uma trilha iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Esta seção da aba *Visão Geral* exibe ***dados de tags*** e ***todas as informações gerais***.

- **Descrição**.  *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) botão é usado para editar a descrição da trilha. Tag `desc`.

- **Geral**. Contém informações sobre o *tamanho do arquivo GPX*, *pasta do arquivo* e *data de criação* com a tag `time`.

- **Informações**. Tags: *Palavras-chave* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Atividade* - `activities`.

- **Autor**. Tags: *Autor* - `author`, &nbsp;*Nome* - `name`, &nbsp;*Endereço de e-mail* - `email`, &nbsp;*Link* - `link`.

- **Direitos autorais**. Tags: *Direitos autorais* - `copyright`, &nbsp;*Autor* - `author`, &nbsp;*Ano* - `year`, &nbsp;*Licença* - `license`.

- **Adicional**. Todas as tags da seção ***extensões***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

<details>

<summary>Exemplo de código XML de arquivo GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Tipo de Atividade da Trilha {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tipo de Atividade da Trilha](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tipo de Atividade da Trilha](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


O recurso *Atividade* no OsmAnd permite que você marque trilhas GPX gravadas com atividades específicas para análise e organização futuras em pastas.

- [Tags de atividade para trilhas GPX](../../plugins/trip-recording.md#recording-settings). Ao gravar uma trilha GPX, você pode atribuir um tipo de atividade. Essa marcação de atividade ajuda a categorizar inicialmente as trilhas.
- [Filtro de atividade](../../personal/tracks/smart-folder.md#search-filter). Você pode filtrar as trilhas GPX gravadas por atividade, o que permite focar na localização de tipos específicos de gravações, como todas as trilhas de ciclismo ou caminhada.
- [Gerenciar tipos de atividade](../../personal/tracks/manage-tracks.md#selection-mode). Você pode alterar o tipo de atividade para pastas ou trilhas selecionadas usando o modo de seleção na aba Trilhas do menu Meus Locais.
- **Lista de atividades**. As categorias e grupos de atividades são definidos nos recursos do OsmAnd. Para desenvolvedores e colaboradores, a lista de atividades é mantida em um formato estruturado em [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), que detalha os grupos e tipos de atividades disponíveis.


## Gráficos de Altitude / Velocidade {#altitude--speed-graphs}

Na aba *<Translate android="true" ids="shared_string_gpx_track"/>* , você pode encontrar informações sobre a trilha em formato gráfico. Usando o seletor, você pode escolher quais dados exibir no gráfico: dados separados sobre *[<Translate android="true" ids="altitude"/>](#altitude)*, sobre a *[Velocidade](#speed)* (esta opção está disponível apenas para trilhas gravadas) ou exibir tudo junto (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interação com o gráfico:

- ***Colocar um ponto no gráfico***. Se você quiser ver as informações em um ponto específico de uma trilha, pode tocar em qualquer lugar do gráfico e um ponteiro com os valores aparecerá. Ao mesmo tempo, um marcador azul aparecerá no mapa, apontando para aquele local na trilha.
- ***Aumentar/diminuir o zoom***. Você pode usar [movimentos com dois dedos](../../map/interact-with-map.md#gestures) para aumentar e diminuir o zoom para uma visualização mais detalhada. Após aumentar o zoom, você pode mover o gráfico para a direita e para a esquerda, correspondendo a avançar e retroceder ao longo da rota.
- ***Informações adicionais***. O lado direito do gráfico contém dados sobre a altitude mais baixa, mais alta e média, inclinação e velocidade. Na parte inferior do gráfico, você pode ver as marcas de distância.


### Informações Gerais {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gráficos do menu de contexto da trilha Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gráficos do menu de contexto da trilha iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Na aba **Visão Geral**, você pode ver parâmetros como:

- *<Translate android="true" ids="distance"/>*. A soma da distância total percorrida na trilha, ou o comprimento da própria trilha.
- *<Translate android="true" ids="shared_string_time_span"/>*. O intervalo de tempo entre os pontos inicial e final da trilha.
- *<Translate android="true" ids="shared_string_start_time"/>* O horário exato em que a gravação da trilha começa.
- *<Translate android="true" ids="shared_string_end_time"/>*. O horário de término da gravação da trilha.

Os **botões** ativos dão acesso a ações como:

- O botão **<Translate android="true" ids="analyze_on_map"/>** abre o [menu Analisar trilha](../tracks/index.md#analyze-track-on-map) para a trilha.
- O botão **<Translate android="true" ids="shared_string_options"/>** abre um menu com:

  - *Editar* abre a trilha na ferramenta [Planejar rota](../../plan-route/index.md).
  - *Excluir* permite remover o elemento da trilha selecionado.
  - *Dividir intervalo* abre a [função Dividir intervalo](#analyze-by-intervals) para a trilha.


### Velocidade {#speed}

:::note Somente trilhas gravadas
Esta aba só pode ser visível em trilhas gravadas. Os pontos neste tipo de trilha possuem tags de **[`velocidade`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gráfico de velocidade da trilha Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gráfico de velocidade da trilha iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

O gráfico de **Velocidade** exibe métricas como:

- *<Translate android="true" ids="average_speed"/>*. Indica a velocidade média durante a viagem.
- *<Translate android="true" ids="max_speed"/>*. Mostra a velocidade máxima durante a viagem.
- *<Translate android="true" ids="moving_time"/>*. Mostra o tempo total durante a viagem apenas em movimento.
- *<Translate android="true" ids="distance_moving"/>*. Indica a distância ajustada da viagem.


### Altitude {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gráfico de altitude da trilha iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

O gráfico de **Altitude** exibe métricas como:

- *<Translate android="true" ids="average_altitude"/>*. Indica a altitude média acima do nível do mar na rota.
- *<Translate android="true" ids="altitude_range"/>*. A altitude mais alta e mais baixa registrada na rota.
- *<Translate android="true" ids="altitude_ascent"/>*. O ganho cumulativo de altitude acima do nível do mar ao longo da rota.
- *<Translate android="true" ids="altitude_descent"/>*. A perda cumulativa de altitude ao longo da rota.

**Obter dados de elevação.**  
Se não houver *informações de elevação* na rota, você pode adicioná-las das seguintes maneiras:

- *Botão Calcular elevação → [Usar estradas próximas](../../plan-route/create-route.md#get-elevation-data)*. Utiliza um mapa offline para encontrar estradas próximas e dados de elevação. Permite personalizar a geometria da trilha.
- [Usar mapas de terreno](#calculate-missing-elevation). Utiliza mapas de terreno para obter dados de elevação. A geometria da trilha permanece inalterada.


### Calcular Elevação Faltante {#calculate-missing-elevation}

:::note Assinatura OsmAnd Pro
O recurso de cálculo de elevação offline está disponível apenas para [**assinantes OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Este recurso permite calcular o perfil de elevação para trilhas GPX offline para qualquer terreno entre 70 graus de latitude norte e 70 graus de latitude sul, com base nos [dados do mapa de terreno](../../plugins/topography.md#download-maps). *Os mapas de terreno (3D) devem ter sido baixados previamente*.

1. Baixe [Mapas de terreno (3D)](../../plugins/topography.md#download-maps) para a região desejada.
2. Se a trilha não contiver dados de altitude, vá para o menu de contexto da trilha (*Menu de contexto da trilha → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), selecione *Usar mapas de terreno* e, após o cálculo, você obterá um gráfico da trilha com base nos dados de terreno.  

    ![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. Se você estiver criando uma rota com a ferramenta [Planejar uma rota](../../plan-route/create-route.md#graph) usando o método *Linha reta* e não houver dados de elevação no gráfico, você precisa:
    - Tocar em *Obter dados de elevação* e, em seguida, selecionar *Usar mapas de terreno*.
    - Após o cálculo, você obterá o gráfico completo de Altitude/Inclinação da sua rota com base nos dados de terreno.  

  ![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Gráfico de altitude da trilha Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Pontos / Waypoints {#points--waypoints}

Waypoints são um dos tipos de pontos disponíveis no mapa. Em geral, eles podem ser pontos de trilha que fazem parte de arquivos GPX. Uma descrição detalhada está disponível no artigo [pontos no mapa](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pontos do menu de contexto da trilha Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pontos do menu de contexto da trilha iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

Nesta aba *Pontos*:

- [Mostrar dados de pontos da trilha](#display-custom-gpx-tags) e modificar seus pontos da trilha (waypoints e pontos de rota), [excluí-los e adicionar](#points--waypoints) waypoints a uma trilha.
- Criar e modificar [Grupo (pasta) de pontos](#waypoint-groups).


### Adicionar Waypoint a uma Trilha {#add-waypoint-to-a-track}

Waypoints podem ser adicionados à trilha atualmente gravada ou a qualquer trilha da [*Lista de trilhas em Meus Locais*](../../personal/tracks/manage-tracks.md):

- Use o [menu de contexto do mapa](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Waypoints são exibidos automaticamente se a trilha selecionada estiver ativada no mapa.
  - [Toque longo](../../map/map-context-menu.md#select-any-point-long-tap) no mapa em qualquer local escolhido para criar um waypoint.
  - Você pode definir informações sobre o waypoint no [menu de contexto do mapa](../../map/map-context-menu.md#-add--edit-track-waypoint) aberto.

- Use o botão [Adicionar Waypoint](#points--waypoints) do menu de contexto da trilha.

- Adicione um waypoint como um botão de [Ação rápida](../../widgets/quick-action.md#my-places).


### Criar Waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adicionar waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Adicionar waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adicionar waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Adicionar waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Toque no botão *Adicionar Waypoint* para abrir a tela de criação de waypoint (esta tela é familiar ao [menu de contexto de Favoritos](../../personal/favorites.md#create)).

1. **Adicione** *Nome* do waypoint, *Endereço* do local selecionado e *Descrição* para ele (opcional).
2. **Selecione** Grupo.

    - Selecione categorias de grupo criadas anteriormente ou crie uma nova.
    - Crie um nome e aparência para o novo grupo de waypoints. Isso também é chamado de *nova categoria* no aplicativo.
    - O **ícone**, **cor do ícone** e **forma** serão usados para todos os novos waypoints adicionados ao grupo.

3. Configuração de **Aparência**:

    - Selecione um [**ícone**](../../personal/favorites.md#favorite-icons) da lista de todos os ícones de categorias de POI.
    - Selecione a **Cor** do ícone.
    - Em seguida, selecione a **Forma** do ícone: *Círculo, Octógono, Quadrado*.

4. **Substitua** outro ponto por este, se necessário.  


### Ações com Grupos {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de grupo da trilha Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de grupo da trilha iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

O *menu de três pontos* ( &#8285; ) abre o *menu de Grupo* de waypoints.

**Ações:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Permite exibir ou não waypoints de grupo no mapa. Ou você pode usar [o botão da tela](#points--waypoints) para exibir ou omitir waypoints de grupo no mapa.
- **<Translate android="true" ids="shared_string_rename"/>** - Altera o nome do grupo.
- **<Translate android="true" ids="change_default_appearance"/>** - Altera as opções de exibição para um grupo de waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** ou **Remover** (*Somente Android*) - Move waypoints de grupo para a lista de [Marcadores de mapa](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Somente Android*) - Move waypoints de grupo para [Favoritos](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>**  (*Somente Android*) - Cria uma rota entre waypoints. Os pontos inicial e final se tornam o início e o fim da rota, e o restante é convertido em pontos intermediários.
- **<Translate android="true" ids="shared_string_delete"/>** - Exclui um grupo de waypoints.


### Grupos de Waypoints {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grupo do menu da trilha no mapa Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Grupo do menu da trilha no mapa Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Grupo do menu da trilha no mapa iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Grupo do menu da trilha no mapa iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Gerencie a visibilidade dos grupos no mapa: se você ocultar uma trilha, o grupo inteiro também será ocultado.  

Você pode ativar ou desativar os waypoints do grupo no mapa usando o botão no canto superior direito do menu de contexto da trilha no mapa. Toque nele e selecione a ação desejada.

### Exibir Tags GPX Personalizadas {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pontos](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pontos](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Exemplo de código XML de tags de Waypoint</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Exemplo de código XML de tags de ponto de rota</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Tags:**  

| Parâmetro | Descrição |
| --- | --- |
| `lat` | **Latitude** é uma das coordenadas geográficas pelas quais você pode determinar uma localização. |
| `lon` | **Longitude** é outra das coordenadas geográficas pelas quais você pode determinar uma localização. |
| `time` | **Timestamp** é a data e hora em que o ponto foi registrado. |
| `name` | **Nome** é o nome do ponto. Quaisquer caracteres são permitidos.  |
| `desc` | **Descrição** contém informações adicionais sobre o ponto. |
| `type` | **Selecionar grupo** é o nome da pasta OsmAnd na qual este waypoint é salvo. |
| `cmt` | **Comentário** é um breve comentário sobre um ponto. |
| `link` | **Link** é um link para quaisquer fontes. |
| `ele` | **Elevação** é a elevação do ponto. |


**Extensões:**  

| Extensão | Descrição |
| --- | --- |
| `osmand:icon` | **Ícone** é o nome do ícone que você selecionou. |
| `osmand:color` | **Cor** é a cor no formato HEX.  |
| `osmand:background` | **Fundo** é a forma do ícone, como um círculo, octógono ou quadrado. |
| `osmand:country` | **País** é o nome do país.  |
| `osmand:address` | **Endereço** é o endereço.  |
| `osmand:postcode` | **CEP** é o código postal.  |
| `osmand:telephone` | **Telefone** é o número de telefone.  |
| `osmand:state` | **Estado** é o nome do estado.  |
| `osmand:start_date` | **Data de início** são os dados de agendamento de um ponto.  |

Waypoints são registrados com a trilha no [arquivo GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Cada um desses waypoints tem seu próprio conjunto de tags para descrição. Todas as tags diretamente relacionadas à descrição de waypoints que podem ser editadas diretamente no aplicativo OsmAnd estão listadas nesta seção.  
Para alterar a descrição do Waypoint, você pode seguir um dos seguintes caminhos:
  
1. Encontre a trilha desejada na lista da aba *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Toque na trilha no mapa, se ela estiver incluída na [lista de visíveis](../tracks/index.md#display-tracks-on-the-map).
3. Toque no waypoint desejado se ele estiver [visível](../../personal/tracks/manage-tracks.md#track-menu) no mapa.  

    Em seguida, no [menu de contexto de Trilhas](./track-context-menu.md), toque em *pontos*, no campo da pasta desejada com os waypoints disponíveis e no Waypoint que você está procurando. Selecione o menu *Ações →* **Editar waypoint GPX** e faça as alterações. Você não pode alterar a data de criação de um ponto, *timestamp*, no aplicativo.  

As **tags de amenidade** que descrevem informações adicionais, como horário de funcionamento ou número de telefone, específicas para o POI, obtêm essas informações dos dados do OpenStreetMap ou dos dados que você inseriu ao criar o POI. Você pode editar essas tags e [tags personalizadas](#display-custom-gpx-tags) apenas no código do arquivo GPX, que você pode abrir com qualquer editor de texto em seu dispositivo.


## Analisar por Intervalos {#analyze-by-intervals}

<InfoAndroidOnly />

![Dividir trilha por Android](@site/static/img/personal/tracks/split_by_1.png) 

A opção **Analisar por Intervalos** permite dividir uma trilha em seções e visualizar estatísticas detalhadas para cada parte da rota. As trilhas podem ser divididas por parâmetros de ***distância***, ***tempo*** ou ***subida/descida***. 

Para abrir esta opção:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → escolha o modo de divisão desejado 


### Dividir por Distância {#split-by-distance}

![Aba de divisão de trilha por distância](@site/static/img/personal/tracks/split_by_2_tab.png) ![Mapa de divisão de trilha por distância](@site/static/img/personal/tracks/split_by_2_map.png)  

Esta opção permite dividir uma trilha em intervalos de distância fixa e analisar estatísticas detalhadas para cada segmento. Os intervalos de distância disponíveis são ***20 m***, ***50 m***, ***100 m***, ***200 m***, ***500 m***, ***1 km***, ***2 km***, ***5 km*** e ***10 km***. Após escolher um intervalo de distância, a trilha é exibida como uma lista de segmentos. 

Para cada segmento, você pode visualizar:
- distância percorrida.
- intervalo de tempo.
- altitude média, mínima e máxima.
- subida e descida.
- tempo em movimento.
- velocidade média e máxima.

Ao tocar em qualquer segmento na lista, a visualização do mapa mostra a trilha completa com seus intervalos e abre o menu de contexto para a trilha na parte inferior da tela.


### Dividir por Tempo {#split-by-time}

![Aba de divisão de trilha por tempo](@site/static/img/personal/tracks/split_by_3_tab.png) ![Mapa de divisão de trilha por tempo](@site/static/img/personal/tracks/split_by_3_map.png) 

A opção **Dividir por Tempo** divide uma trilha em intervalos de duração igual. Você pode escolher entre ***1 min***, ***2 min***, ***2,5 min***, ***5 min***, ***10 min***, ***15 min***, ***30 min*** e ***60 min***. A forma como os intervalos são exibidos, as estatísticas fornecidas para cada segmento e como eles aparecem no mapa são as mesmas da seção [Dividir por Distância](#split-by-distance).


### Dividir por Subida/Descida {#split-by-uphill-downhill}

![Aba de divisão de trilha por subida/descida](@site/static/img/personal/tracks/split_by_4_tab.png) ![Mapa de divisão de trilha por subida/descida](@site/static/img/personal/tracks/split_by_4_map.png) 

Esta opção divide uma trilha em segmentos com base em mudanças de elevação. Cada intervalo é classificado como ***subida***, ***descida*** ou ***plano***. A forma como os intervalos são exibidos, as estatísticas fornecidas para cada segmento e como eles aparecem no mapa também são as mesmas da seção [Dividir por Distância](#split-by-distance).


### Métricas de Frequência Cardíaca {#heart-rate-metrics}

![Métricas de Frequência Cardíaca](@site/static/img/personal/tracks/heart_rate.png)

Esta opção permite visualizar os valores de frequência cardíaca média, mínima e máxima (batimentos por minuto, bpm) para cada intervalo da sua trilha. Os dados de frequência cardíaca são obtidos do arquivo GPX da trilha ou gravados diretamente de um [sensor de frequência cardíaca externo conectado](https://osmand.net/docs/user/plugins/external-sensors) (BLE). Se não houver dados de frequência cardíaca disponíveis, esta linha é ocultada na tabela de intervalos.

**Nota:** Você pode conectar um monitor de frequência cardíaca BLE via *<Translate android="true" ids="shared_string_plugin,external_sensors_plugin_name"/>* para gravar dados de FC diretamente no OsmAnd.


## Filtro GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Tela de filtro GPS Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Este filtro permite melhorar as estatísticas da sua trilha, excluindo dados desnecessários ou incorretos. Você pode filtrar pontos da trilha que não se encaixam nos parâmetros da sua trilha e, como resultado, obter um gráfico e uma linha de rota visual mais precisos, sem distorção ou ruído de gravação. Você pode fazer alterações com filtros como *Suavização*, *Velocidade*, *Altitude* e *Precisão GPS*, que ocultam os pontos filtrados da trilha atual. Além disso, no menu *Estatísticas*, você pode verificar como suas alterações são exibidas no gráfico antes de salvá-las. Você também pode *Redefinir para o original* e *Salvar como cópia* da sua trilha neste filtro sem salvar o original.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

A página do aplicativo Filtro GPS para Android inclui o seguinte:  

- Um mapa com uma trilha salva e um botão extra, *Minha localização da trilha* (ele alinha uma trilha ao centro de um mapa).
- Botões *Atualizar* e *Menu* na parte superior (*Menu* abre o campo *Ação* na parte inferior da página).
- Blocos *Filtro*, *Estatísticas*, *Ação*.  


### Menu de Filtro {#filter-menu}

Neste menu, você pode alterar alguns parâmetros da sua trilha, como *Suavização*, *Velocidade*, *Altitude* ou *Precisão GPS*, usando filtros. O menu é dividido em uma *parte de Pontos* e uma *parte de Ações*.

| ***Pontos*** |
|:------------|
|Esta parte mostra o número de pontos após a filtragem e o número total de pontos na trilha selecionada antes que os filtros fossem usados.|
|![Números de pontos da tela de filtro GPS Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Ações*** |
|*Suavização*. Define a distância limite entre os pontos. Os pontos da trilha que estão a pelo menos essa distância do último ponto visível são ocultados. Todos os pontos da trilha que estão a uma distância um do outro menor que a distância selecionada pelo filtro serão ocultados. Os pontos da trilha são contados a partir do último ponto visível. Observe que limiares altos podem simplificar demais a geometria da trilha.|
|![Números de suavização do filtro GPS Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Velocidade*. Apenas os pontos da trilha correspondentes ao intervalo de velocidade selecionado são exibidos no gráfico e no mapa, os outros são ocultados.|
|![Números de velocidade do filtro GPS Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitude*. Apenas os pontos da trilha correspondentes ao intervalo de altitude selecionado são exibidos no gráfico e no mapa, os outros são ocultados.|
|![Números de altitude do filtro GPS Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precisão GPS*. Define o valor máximo permitido para HDOP. Pontos com um valor mais alto são ocultados.|
|![Números de precisão do filtro GPS Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Estatísticas {#statistics}

![Gráfico de filtro GPS Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

A aba Estatísticas exibe informações sobre a trilha **modificada**, ou seja, a trilha sem valores filtrados. Ela é exibida nos blocos de estatísticas e nos dados do gráfico.
  
- A parte *Dados* mostra estatísticas semelhantes ao [menu Filtro](#filter-menu).  
- A parte *Gráfico* exibe três tipos de gráficos por parâmetros: Visão Geral, Altitude e Velocidade. Esta funcionalidade é uma cópia do [Gráfico da trilha](#altitude--speed-graphs).

### Ações {#actions}

![Ação do filtro GPS Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

A lista de ações está disponível na parte inferior da aba **Filtro** ou **Estatísticas**. O OsmAnd aplica todas as alterações feitas na trilha sem atualizar o arquivo, mas você pode salvar as alterações manualmente.

- *<Translate android="true" ids="reset_to_original"/>*. Permite retornar os parâmetros ao seu estado original.  
- *<Translate android="true" ids="save_as_copy"/>*. Permite salvar a trilha como uma nova.
- *<Translate android="true" ids="save_changes_into_file"/>*. Permite reescrever a trilha com os novos parâmetros.  


## Artigos Relacionados {#related-articles}

- [Trilhas GPX](../../personal/tracks/manage-tracks.md)
- [Trilhas no mapa](./track-context-menu.md)
- [Navegação por trilha](../../navigation/setup/gpx-navigation.md)
- [Planejar rota](../../plan-route/index.md)
- [Plugin de Gravação de Viagem](../../plugins/trip-recording.md)
- [Analisar no Mapa](../tracks/index.md#analyze-track-on-map)