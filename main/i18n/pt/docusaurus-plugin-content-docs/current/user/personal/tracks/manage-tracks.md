---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
sidebar_position: 2
title: Gerenciar Trilhas
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

Todas as trilhas no OsmAnd são armazenadas em uma aba em *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. O OsmAnd processa o arquivo de trilha no [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), mas [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) e [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) podem ser importados e convertidos para GPX. Leia mais sobre os diferentes tipos de trilhas no artigo [Trilhas no mapa](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visão geral da trilha gerenciada Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Visão geral da trilha gerenciada iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Criar uma Trilha {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planejar uma rota modificar-trilha-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar uma rota modificar-trilha-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Você pode adicionar trilhas no OsmAnd das seguintes maneiras:

1. **[Importar](./manage-tracks.md#import--export-track)** uma trilha de uma fonte externa.
2. Criar uma nova trilha no aplicativo usando a ferramenta **[Planejar uma rota](../../plan-route/create-route.md)**.
3. Gravar trilha no aplicativo usando o plugin **[Gravação de viagem](../../plugins/trip-recording.md)**.
4. Inserir vários pontos por coordenadas e salvá-los como uma trilha usando a ferramenta **[Entrada de coordenadas](../../plan-route/coordinate-input.md)**.
5. Você também pode adicionar **Pontos de passagem** a uma nova trilha através do **[Menu de contexto](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Gerenciar Trilhas {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> aba*

![Meus Lugares com trilhas no Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> aba*

![Meus Lugares com trilhas no iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Todas as trilhas já gravadas, criadas ou importadas são exibidas automaticamente na pasta [Meus Lugares](../../personal/myplaces.md) na aba *Trilhas*. Elas são organizadas por pasta ou exibidas em uma lista abaixo delas.


### Menu de Trilhas {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> aba*

![Meus Lugares com trilhas no Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> aba*

![Menu de contexto de uma trilha no iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Cada trilha, assim como as pastas, possui um menu, permitindo gerenciar as trilhas de forma eficiente. Veja como acessá-lo:

- *Android* - toque no *menu de três pontos* no campo da trilha.
- *iOS* - toque e segure a trilha desejada na lista.

O menu oferece as seguintes ações:

- **Mostrar/Ocultar no mapa** — Exibe ou oculta as trilhas selecionadas no mapa, representando visualmente sua localização.

- [Abrir](../../map/tracks/index.md#configure-map) (*iOS*) — Esta configuração está disponível no menu Configurar Mapa. Localizado em *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, permite acessar o [menu de contexto da trilha selecionada](../../map/tracks/track-context-menu.md) ao ser tocado.

- **Aparência** (*iOS*) — Personalize a [aparência das trilhas](../../map/tracks/appearance.md) para se adequar às suas preferências.

- **Navegação** (*iOS*) — Inicia a [navegação](../../navigation/setup/gpx-navigation.md) ao longo da trilha selecionada.

- **Analisar no mapa** (*Android*) / **Analisar** (*iOS*) — Abre a ferramenta [Analisar no mapa](../../navigation/setup/route-details.md#analyze-on-map) dentro dos Detalhes da Rota para análise posterior.

- **Compartilhar** — Permite compartilhar a trilha selecionada com outras pessoas.

- **Carregar modificações para OSM** (*iOS*) — [Carregue as alterações](../../plugins/osm-editing.md#gps-track) que você fez na trilha diretamente para o *OpenStreetMap*.

- **Editar** (*iOS*) — Use a ferramenta [Planejar uma rota](../../plan-route/create-route.md#modify-existing-gpx-track) para modificar trilhas.

- **Duplicar** (*iOS*) — Cria uma cópia da trilha selecionada.

- **Renomear** — Altera o nome da trilha selecionada para melhor organização.

- **Mover** — Permite realocar a trilha selecionada para uma pasta diferente.

- **Exportar** (*Android*) — Navegue até *Menu → Configurações → Aba Ações* para exportar todas as trilhas de uma pasta.

- **Excluir** — Remove permanentemente a trilha selecionada que não é mais necessária.


### Pesquisar {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Função de pesquisa de trilhas em Meus Lugares Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Função de pesquisa de trilhas em Meus Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Toque no botão &#x1F50D; na parte superior da tela do dispositivo para abrir o menu de classificação da lista de trilhas.  

Disponível:

- Pesquisar por nome da trilha.
- [Classificar por](#sort-by) para uma pesquisa melhor, caso você não se lembre do título.
- [Filtrar](./smart-folder.md#search-filter) (*somente Android*) se você precisar das características específicas da trilha.


### Modo de Seleção {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Função de classificação de trilhas em Meus Lugares Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trilhas em Meus Lugares iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

O item de menu **Selecionar** oferece opções para gerenciar pastas e trilhas. Este recurso permite selecionar várias trilhas ou pastas de trilhas. Você também pode selecionar todas as trilhas e pastas tocando no botão especial **Selecionar Tudo**.

Depois de fazer sua escolha, as seguintes etapas são fornecidas:  

- **Mostrar no mapa** — Com este recurso, você pode exibir as trilhas selecionadas no mapa para entender melhor sua localização e relacionamento entre si.

- **Compartilhar** (*Android*) / **Exportar** (*iOS*) — Se você deseja compartilhar dados selecionados com outros usuários ou salvá-los em um serviço de nuvem, o recurso *Compartilhar/Exportar* permite enviar trilhas e pastas usando diferentes métodos de compartilhamento.

- **Carregar para OpenStreetMap** — Você pode enviar trilhas selecionadas para o OpenStreetMap, contribuindo para o desenvolvimento e melhoria dos dados.

- **Mover** — Você pode organizar seus dados movendo trilhas e pastas selecionadas para outras pastas.

- [Alterar atividade](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Esta ação permite alterar o tipo de atividade, por exemplo, para *Carro*, *Esporte a Motor de Aventura*, *Mochilão* ou outros, para a trilha selecionada.

- [Alterar aparência](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Esta opção permite personalizar a aparência das trilhas selecionadas, tornando-as mais visíveis e reconhecíveis no mapa.

- **Excluir** — Se as trilhas ou pastas selecionadas não forem mais necessárias, a função Excluir permite excluí-las, com o aplicativo fornecendo opções de confirmação para evitar exclusão acidental.


### Classificar Trilhas {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Função de classificação de trilhas em Meus Lugares Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Função de classificação de trilhas em Meus Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

O OsmAnd oferece uma maneira fácil de classificar suas trilhas, ajudando você a gerenciar uma grande coleção ou encontrar rapidamente recursos específicos. Para acessar o menu de classificação, toque em **Classificar por** na parte superior da lista de trilhas.

***Opções de classificação:***

- **Mais próximo** — Mostra as trilhas mais próximas da sua localização atual.
- **Última modificação** — Exibe as trilhas classificadas pela data de modificação mais recente.
- **Nome: A - Z** — Organiza as trilhas em ordem alfabética de A a Z.
- **Nome: Z - A** — Organiza as trilhas em ordem alfabética de Z a A.
- **Data mais recente primeiro** — Lista as trilhas por data de criação, com a mais recente no topo.
- **Data mais antiga primeiro** — Lista as trilhas por data de criação, com a mais antiga no topo.
- **Maior distância primeiro** — Exibe as trilhas classificadas por comprimento, com a mais longa no topo.
- **Menor distância primeiro** — Exibe as trilhas classificadas por comprimento, com a mais curta no topo.
- **Maior duração primeiro** — Classifica as trilhas por duração, colocando a mais longa no topo.
- **Menor duração primeiro** — Classifica as trilhas por duração, colocando a mais curta no topo.

### Classificando Subpastas {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Função de classificação de trilhas em Meus Lugares Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Função de classificação de trilhas em Meus Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Se você deseja classificar [subpastas](#folder-actions), vá para o menu de três pontos dentro da pasta selecionada e selecione as [opções](#sort-by) necessárias.  

A opção de classificação selecionada é aplicada não apenas à subpasta atual, mas também a todas as pastas aninhadas e trilhas em todos os níveis. Isso garante uma estrutura consistente em seus dados salvos.


## Pasta de Trilhas {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Toque no *menu de três pontos* no campo da pasta para **abrir** o menu da pasta.

![importar multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Toque e segure no campo da pasta para **abrir** o menu da pasta.

![Menu de contexto de uma trilha no iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

O menu da pasta de trilhas permite visualizar, renomear, exportar e gerenciar pastas.


***Ações com uma pasta:***

- **Nome** — Exibe o nome da pasta, a data de criação e o número de trilhas que ela contém.
- **Mostrar todas as trilhas no mapa** (*somente Android*) — Exibe todas as trilhas da pasta no mapa. Se houver muitas trilhas, isso pode fazer com que o dispositivo congele.
- **Editar nome** (*Android*) / **Renomear** (*iOS*) — Permite renomear a pasta.
- [Alterar aparência padrão](../../map/tracks/appearance.md) (*Android*) / **Aparência** (*iOS*) — Altera a aparência de exibição de todas as trilhas na pasta.
- [Exportar](../../personal/import-export.md) — Abre a *aba Menu → Configurações → Ações* para exportar todas as trilhas da pasta como um arquivo [`.osf`](../../personal/import-export.md#export).
- [Mover](#track-folder) — Permite mover a pasta para outra pasta existente ou criar uma nova.
- [Excluir pasta](#delete-folder) — Exclui a pasta após a confirmação. ***Esta ação é irreversível.***


### Estatísticas da Pasta {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> aba*

![Meus Lugares com trilhas no Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> aba*

![Meus Lugares com trilhas no iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Na parte inferior da lista na aba *Trilhas*, e abaixo da lista de trilhas **em cada uma de suas pastas**, há uma seção de informações que permite visualizar as estatísticas gerais de resumo das trilhas na pasta selecionada. Todos os valores são exibidos nas [unidades](../../personal/profiles.md#units--formats) que você selecionou.

- *Número de **Trilhas** na pasta* — Exibe o número de trilhas contidas na pasta selecionada.
- *Soma total de* **Distâncias** — O comprimento total de todas as trilhas na pasta selecionada, medido nas unidades que você selecionou, é exibido.
- *Soma de* **Subidas** — Os dados indicam a elevação vertical total em todas as trilhas na pasta selecionada.
- *Soma de* **Descidas** — Este parâmetro é a soma das descidas verticais em todas as trilhas na pasta selecionada.
- *Soma do tempo de* **Duração** — Isso exibe o tempo total levado para completar todas as trilhas na pasta selecionada.
- *Tamanho total dos arquivos baixados em MB* — O tamanho total dos arquivos baixados em megabytes mostra quanto espaço todas as trilhas na pasta selecionada ocupam em seu dispositivo.


### Ações da Pasta {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Função de classificação de trilhas em Meus Lugares Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Trilhas em Meus Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

As ações na pasta ajudam você a organizar, classificar e importar trilhas, para estruturar seus dados de navegação.  

Como abrir as ações da pasta:

- Abra a aba Trilhas em Meus Lugares.
- Navegue até a pasta que deseja gerenciar.
- Toque no *menu de três pontos* no canto superior direito para abrir o menu de ações da pasta.

***Ações no menu da pasta:***

- [Selecionar](#selection-mode) — Toque nas pastas e trilhas necessárias para aplicar ações do menu no *modo de seleção*.
- [Classificar subpastas](#sort-by) — Aplique uma ordem de classificação (por exemplo, por nome, data) a todas as subpastas e trilhas em todos os níveis.
- [Adicionar pasta inteligente](../tracks/smart-folder.md#how-to-create-smart-folder) — Classifique automaticamente rotas e trilhas com base nos critérios que você definir.
- [Importar](#import) — Carregue arquivos GPX ou outros arquivos de trilha do seu dispositivo para o OsmAnd para uso offline.
- **Adicionar nova pasta** — Para organizar suas rotas e trilhas em categorias lógicas, coloque-as em pastas diferentes. Isso ajuda a estruturar suas informações de navegação.


### Excluir Pasta {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> aba*

![Meus Lugares com trilhas no Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> aba*

![Menu de contexto de uma trilha no iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Você pode excluir uma pasta com todas as trilhas que ela contém. Para fazer isso:

- Toque no *menu de três pontos* no campo da pasta a ser excluída.
- Na parte inferior do menu, encontre a opção **Excluir Pasta**.
- ***NOTA: Esta ação é irreversível.***


## Importar / Exportar Trilha {#import--export-track}

### Importar {#import}

A ferramenta de importação permite adicionar trilhas de arquivos externos para navegação e análise offline. Métodos para importar trilhas:

1. **Importação direta de arquivo:**

    - Toque em um arquivo GPX, KML ou KMZ de aplicativos de mensagens, e-mail, Google Drive ou gerenciadores de arquivos.
    - Selecione Abrir no OsmAnd quando solicitado.
    - A trilha importada é salva na pasta **Importar** em *Meus Lugares*.
    - Passos: Toque no arquivo GPX → Abrir no OsmAnd.

2. **Importar usando o menu *Meus Lugares*:**

    - Abra o *menu Meus Lugares → Trilhas*.
    - Selecione o arquivo GPX para importar.

    *Opções adicionais:*

    - **Arquivos GPX de trilha única** - importe a trilha inteira diretamente.
    - **Arquivos GPX de várias trilhas** - escolha importar o arquivo GPX único ou selecione trilhas específicas.

***NOTA:*** *As trilhas adicionadas manualmente à pasta OsmAnd em seu dispositivo são importadas automaticamente sem reiniciar o aplicativo.*  


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importar multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![importar multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exportar | Importar |
|:------------|:---------------|
| ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exportar </summary> ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exportar </summary> ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Existem várias maneiras de exportar um ou mais arquivos de trilha para qualquer mensageiro, e-mail, gerenciador de arquivos ou aplicativo.  

1. Pelo [*Menu de contexto da trilha → Compartilhar*](../../map/tracks/track-context-menu.md#options).

2. Pelo *Menu Meus Lugares → Trilhas → Menu Pasta / Trilha*:

    - Para [**exportar uma única trilha**](#track-menu), selecione o menu da trilha.
    - Para [**exportar várias trilhas**](#track-folder), selecione o menu da pasta desejada.

3. Pelo [Arquivo de backup local](../../personal/import-export.md#export). Exportando trilhas GPX como arquivos `.osf`.


## Artigos Relacionados {#related-articles}

- [Mostrar trilha no Mapa](../../map/tracks/index.md)
- [Analisar no Mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu de Contexto da Trilha](../../map/tracks/track-context-menu.md)
- [Navegação por trilha](../../navigation/setup/gpx-navigation.md)
- [Gravação de viagem](../../plugins/trip-recording.md)