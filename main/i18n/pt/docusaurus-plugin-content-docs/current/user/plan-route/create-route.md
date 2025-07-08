---
source-hash: fb9912804ef2b1009e063e1cb1e5c8220b279d2fee5b64bf122b770e595651c9
sidebar_position: 1
title: Planejar uma Rota
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Visão Geral {#overview}

A ferramenta **Planejar uma rota** (*Menu → Planejar uma rota*) é um recurso poderoso do aplicativo OsmAnd que permite [criar novas rotas](#create-new-route) como trilhas GPX, [editar e adicionar novos segmentos](#segments) a trilhas já salvas, [medir distâncias](#distance-measurement) no mapa e [anexar segmentos de trilha](#attach-track-to-roads) à estrada mais próxima disponível usando diferentes perfis de navegação. O recurso foi projetado para funcionar no *modo offline*.

Uma rota consiste em um conjunto de segmentos entre pontos especificados. Os segmentos podem ser linhas retas ou rotas adaptadas ao perfil selecionado. A rota pode ser salva como GPX para posterior importação, edição e [navegação](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Principais Casos de Uso {#main-use-cases}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Planejar uma rota android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Planejar uma rota ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Criar Nova Rota {#create-new-route}

Para criar uma nova trilha em formato GPX, use a função principal da ferramenta *Planejar uma rota*. A pré-criação de uma rota tem muitas vantagens, ao contrário da gravação da trilha atual com o *[plugin de Gravação de Viagem](../plugins/trip-recording.md)*. Você pode [adicionar](#adding-points) quantos pontos quiser à rota, [excluir e movê-los](#point-context-menu), alterar os tipos de rota por [segmentos](#route-between-points) e obter [informações detalhadas sobre a rota](#graph).

Por padrão, o tipo de roteamento corresponderá ao perfil selecionado anteriormente, toque no ícone de roteamento para selecionar como o aplicativo deve calcular o segmento para conectar os pontos. O perfil disponível deve ser configurado [separadamente](../navigation/routing/osmand-routing.md#routing-types).

Você pode **aumentar e diminuir o zoom** para facilitar a colocação de pontos ao criar ou editar uma trilha. Ao **diminuir o zoom**, os pontos na trilha ficam invisíveis para uma melhor visualização de todo o comprimento da trilha e do mapa como um todo. Apenas o último ponto adicionado e o ponteiro para adicionar o próximo ponto permanecem visíveis.


### Modificar Trilhas GPX Existentes {#modify-existing-gpx-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>

A ferramenta *Planejar uma rota* permite modificar trilhas GPX existentes, bem como uma [trilha importada](../personal/tracks/manage-tracks.md#import). No entanto, caso você precise excluir uma grande quantidade de pontos com base em critérios genéricos, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) pode ser uma ferramenta mais adequada.


### Medição de Distância {#distance-measurement}

![Planejar uma rota android](@site/static/img/plan-route/plan_route_lines_andr.png)

*Planejar uma rota* é uma maneira rápida e fácil de medir a distância entre pontos.

- Selecione o método *Linha reta* de planejamento de rota. Uma linha tracejada será desenhada entre os pontos.
- [Adicione](#adding-points) o primeiro ponto no mapa a partir do qual a linha será desenhada.
- Mova o mapa para determinar a distância e o azimute. As informações serão exibidas em um campo com uma lista de pontos abaixo do mapa.

:::note
A *Linha Reta* é necessária e será usada para áreas não cobertas por dados de roteamento, como áreas fora da estrada e fora da trilha.
:::


### Obter Dados de Elevação {#get-elevation-data}

<InfoAndroidOnly />

![Planejar uma rota android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

Se os [dados de Elevação](../map/tracks/track-context-menu.md#calculating-missing-elevation) estiverem faltando em uma trilha existente, é possível adicioná-los usando as seguintes ferramentas:

- [Usar estradas próximas](#attach-track-to-roads). Este modo usa mapas offline para encontrar as estradas mais próximas para construir uma trilha, de modo que os dados de elevação serão recuperados das estradas anexadas. A geometria da trilha pode ser ajustada.
- [Usar mapas de Terreno](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) O modo calcula a altitude com base nos dados do mapa de Terreno (3D). A diferença entre as altitudes registradas pelo seu dispositivo pode ser usada para correção de elevação. A geometria da trilha permanece inalterada.


### Anexar Trilhas a Estradas {#attach-track-to-roads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

A configuração **Anexar às estradas** permite anexar uma trilha gravada ou importada às estradas dos mapas offline do OsmAnd para obter informações adicionais:

- Informações de curva corretas para [Navegar por trilha](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (especialmente em rotatórias).
- Nomes de ruas e informações de faixas.
- Dados de elevação.
- [Atributos de estrada](../navigation/setup/route-details.md#road-attributes).

Você pode selecionar um [valor de limite](../navigation/setup/gpx-navigation.md#attach-to-the-roads) para a distância que os pontos da trilha simplificados podem estar dos pontos da trilha original.

:::note Ícone de perfil não especificado
Se você selecionar uma trilha e o ícone de perfil ***não especificado*** ("?") for exibido ao lado do ícone *Configurações*, toque nele para escolher se deseja anexar a trilha às estradas ou apenas conectar os pontos com uma linha reta e tratá-la como uma trilha gravada.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Pontos e Segmentos {#points--segments}

### Adicionando Pontos {#adding-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>

Para medir uma distância ou planejar uma viagem, adicione pontos na localização do *Ponteiro* um por um e toque no botão *Adicionar Ponto*. Ao acessar a **lista de pontos** abaixo, você pode reordenar pontos, excluir ou acessar um [menu de contexto de ponto](#point-context-menu) específico.

:::note
Você também pode **Desfazer**/**Refazer** todas as ações que você fez no planejamento da rota.
:::

### Rota Entre Pontos {#route-between-points}

Os pontos adicionados no editor podem ser conectados como uma linha reta ou como uma rota entre pontos de um perfil selecionado. *Rota entre pontos* pode ser acessada de várias maneiras:

1. No menu *Opções* *→* *Rota entre pontos*.
2. Toque no *ícone de perfil* no canto inferior esquerdo da tela do mapa. Não no ícone superior, ele abrirá o menu Configurar Mapa.
3. No *[menu de contexto do ponto](#point-context-menu) → Alterar tipo de rota antes/depois*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Planejar uma rota android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Planejar uma rota ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Você pode alterar a rota entre 2 pontos específicos ou entre vários pontos:

- *Trilha inteira*. A trilha inteira será recalculada usando o perfil selecionado.
- *Próximo segmento*. Apenas o próximo segmento será recalculado usando o perfil selecionado.
- *Alterar o Tipo de Rota Antes/Depois do Ponto*. No *menu de contexto do ponto*, você pode alterar a forma como a rota é calculada para a seção deste ponto até o mais próximo ou até o ponto final. A configuração fornece informações sobre a distância deste ponto até o início ou o fim da rota, ou até o próximo/anterior ponto.
- *Recalcular rotas*. Você pode usar o recálculo de rota sem alterar o tipo de perfil. O ícone de perfil mostrado na rota planejada na ferramenta não mudará, mas o tipo de rota corresponderá ao selecionado. Você pode precisar disso para encontrar rotas alternativas.

### Segmentos {#segments}

Um segmento de trilha é uma coleção de pontos conectados sem **lacunas**. Em uma ferramenta de planejamento de rota, é possível:

- Mesclar segmentos: a opção [Unir segmentos](#point-context-menu) remove a lacuna para segmentos previamente separados.
- Dividir ou criar novas seções desconectadas de uma trilha. Para criar uma, use a opção [Iniciar novo segmento](#point-context-menu) ou selecione o recurso [Dividir](#point-context-menu) no menu de contexto do Ponto.

### Menu de Contexto do Ponto {#point-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Cada ponto em sua rota tem seu menu de contexto. Ele mostra o *número de sequência* do ponto, a *distância do início da rota*, a função para movê-lo no mapa e removê-lo, e um conjunto de ações com seções da rota antes e depois deste ponto. Para editar, toque no ponto desejado na [lista de pontos](#adding-points) ou diretamente no mapa.

- ***Informações sobre o ponto***. O número de pontos na lista. A distância até o primeiro ponto é baseada no tipo de roteamento definido, a distância pode mudar quando recalculada para o novo tipo se o parâmetro *Rota entre pontos* for alterado.

- ***<Translate ios="true" ids="move_point"/>***. Permite alterar a posição de um ponto no mapa. Mova o mapa usando gestos para alterar a localização do ponto. O indicador de ponto estará no centro da parte visível do mapa.

- ***<Translate ios="true" ids="add_point_after"/>***. Mova o mapa para adicionar um ponto após o ponto selecionado. Você pode adicionar quantos pontos precisar até tocar em cancelar ou aplicar.

- ***<Translate ios="true" ids="add_point_before"/>***. Mova o mapa para adicionar quantos pontos forem necessários após o ponto selecionado no segmento entre este ponto e o próximo.

- ***<Translate ios="true" ids="trim_before"/>***. Você pode cortar toda a seção da rota, pontos e segmentos, do seu início até o ponto selecionado. A distância a ser cortada é indicada sob o nome da opção.

- ***<Translate ios="true" ids="trim_after"/>***. Você pode cortar uma rota, pontos e segmentos, do último ponto adicionado ao ponto selecionado. A distância a ser cortada é indicada sob o nome da opção.

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Permite dividir a rota antes do ponto selecionado em segmentos separados e desconectados.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Permite dividir a rota após o ponto selecionado em segmentos separados e desconectados.

- ***<Translate ios="true" ids="join_segments"/>***. O último ponto em um dos segmentos divididos e o próximo na lista de pontos no outro segmento têm essa configuração de conexão.

- ***<Translate ios="true" ids="change_route_type_before"/>***. Você pode alterar o tipo de roteamento configurado para um perfil disponível, entre pontos no segmento anterior, ou para todos os segmentos do início da rota até o ponto selecionado.

- ***<Translate ios="true" ids="change_route_type_after"/>***. Você pode alterar o tipo de roteamento entre pontos no próximo segmento, ou para todos os segmentos do ponto selecionado até o último ponto adicionado.

- ***<Translate ios="true" ids="delete_point"/>***. Remove o ponto selecionado da rota. Semelhante a excluir um ponto em uma lista.

### Rotas Multimodais {#multimodal-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Usando a ferramenta *Planejar uma Rota* e a opção [Rota entre pontos](#route-between-points), você pode criar rotas multimodais onde, por exemplo, a primeira parte pode ser uma rota de *ciclismo*, a segunda parte uma rota de *linha reta* e depois uma rota *pedestre*. Observe que a navegação em rotas multimodais não está disponível, então você precisa selecionar um dos perfis mais adequados para poder seguir as instruções passo a passo.


## Editor {#editor}

### Salvar Rota {#save-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>

Depois de [adicionar](#adding-points) pelo menos um ponto ao mapa, você pode usar a opção de salvar. Todas as trilhas salvas em *Planejar uma rota* podem ser encontradas no menu principal *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.

Existem quatro maneiras de salvar:

- ***Salvamento rápido***. O botão superior direito ***Concluído*** / ***Salvar*** (para trilhas existentes) permite o salvamento rápido das alterações e a saída da ferramenta *Planejar uma Rota*. O nome é gerado com base na data atual.
- ***Salvar alterações*** no [menu Opções](#options) permite salvar as alterações em um arquivo e continuar planejando a rota.
- ***Salvar como nova trilha*** no [menu Opções](#options) abre uma caixa de diálogo onde você especifica o nome da trilha e a pasta onde a rota será salva.
- ***Adicionar alterações a uma trilha***. Anexa uma trilha criada como um [segmento separado](#segments) a outra trilha existente. As alterações em uma trilha selecionada *não podem ser desfeitas*.

:::note Opção de trilha simplificada
Ao salvar uma nova trilha, você pode selecionar a opção de trilha ***Simplificada*** para tornar a trilha compatível com outros aplicativos de terceiros. Tecnicamente, a trilha será salva sem instruções de rota como uma trilha puramente geométrica.
:::

### Opções {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Mostra o perfil de aplicativo selecionado (o padrão é uma linha reta). Tocar nesta ação é o mesmo que tocar no botão *Perfil*, que abre o [menu de perfil](../personal/profiles.md) do aplicativo.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) ou **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Desenha novos segmentos de rota que não se conectam ao segmento anterior.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Se for uma nova trilha sem link para uma existente, o menu *Salvar como nova trilha* é aberto. Ao adicionar novos segmentos a uma trilha aberta ou importada, a notificação sobre o salvamento do arquivo GPS no armazenamento aparece, após o qual você pode continuar a criar o próximo segmento.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Salva sua rota como uma trilha GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Adiciona sua rota a uma trilha de sua pasta de trilhas e salva a nova trilha.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Inicia a navegação de sua posição até o ponto final usando uma rota desenhada.
- **<Translate android="true" ids="reverse_route"/>**. Você troca o ponto *Inicial* da rota e o último ponto adicionado. As configurações do segmento de rota não mudam quando o Inverter é aplicado.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Cria uma rota aproximada. Cada ponto na trilha é correspondido à estrada permitida mais próxima no mapa de acordo com o perfil selecionado e a distância limite.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (somente Android). Você pode filtrar pontos de rota que não correspondem ao tipo de roteamento selecionado, excluir dados desnecessários ou corrigir dados imprecisos. O filtro GPS só funcionará se o tipo de roteamento for especificado como *Linha Reta*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*somente Android*). Esta opção é exibida no menu apenas se não houver dados de elevação disponíveis. Com esta [opção](#get-elevation-data), você pode calcular a altitude usando *dados de mapa de Terreno* ou usar dados de mapas baixados para encontrar as *estradas próximas*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Arquiva completamente todas as suas ações. Um "artefato" permanece no mapa - as linhas pontilhadas da rota recém-limpa. Ele desaparece na próxima adição de novos pontos. Você pode cancelar a função Limpar Tudo com o botão Ação de Retorno. O recurso não afeta as partes inalteradas das rotas abertas na ferramenta.

### Gráfico {#graph}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Planejar uma rota android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Durante o planejamento da rota, o [gráfico](../navigation/setup/route-details.md#elevation-graph) exibe informações de altitude e porcentagem de inclinação da rota, além de você poder tocar em qualquer lugar do gráfico para exibir um ponteiro com dados específicos.

- Para **Android**, o gráfico é exibido na aba *Gráfico* ao criar ou abrir uma trilha, e ao [Navegar](../navigation/setup/gpx-navigation.md) usando *Planejar uma rota*.
- Para **iOS**, o gráfico está disponível apenas através do menu *[Opções](#options) → Navegação*.

Ao calcular uma rota para navegação em *Planejar uma rota*, você pode descobrir informações adicionais da trilha, como [informações de Elevação](../navigation/setup/route-details.md#elevation-info) e [atributos de Estrada](../navigation/setup/route-details.md#road-attributes), e usar a ferramenta [Analisar no mapa](../navigation/setup/route-details.md#analyse-on-map). Toque no botão *Detalhes* abaixo do gráfico.


## Artigos Relacionados {#related-articles}

- [Mostrar trilha no Mapa](../map/tracks/index.md)
- [Analisar no Mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menu de Contexto da Trilha](../map/tracks/track-context-menu.md)
- [Navegação por trilha](../navigation/setup/gpx-navigation.md)
- [Gravação de viagem](../plugins/trip-recording.md)

> *Última atualização: maio de 2025*