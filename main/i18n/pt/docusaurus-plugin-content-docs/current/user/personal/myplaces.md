---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: Meus Locais
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


<InfoIncompleteArticle/>

## Visão geral {#overview}

**Meus Locais** é o centro no aplicativo OsmAnd para gerenciar e personalizar todos os dados pessoais. Você pode usar esta seção para organizar [Pontos favoritos](#favorites) marcados como importantes ou frequentemente visitados. A guia [Rotas](#tracks) permite visualizar, importar, gravar e criar arquivos GPX para ajudar a manter um histórico detalhado de suas rotas e viagens. Você também pode gerenciar suas [Edições do OpenStreetMap](#openstreetmap-edits), facilitando a contribuição para melhorias e atualizações do mapa. O plugin e os widgets [Notas de Áudio/Vídeo](#audiovideo-notes) permitem que usuários Android criem e salvem notas multimídia relacionadas a locais específicos, adicionando contexto às suas viagens.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu"/> → Meus Locais*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu"/> → Meus Locais*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Importar e exportar dados***](../personal/import-export.md):

    Todos os dados armazenados no menu *Meus Locais* podem ser movidos usando um formato `.osf` especial através de aplicativos em seu dispositivo. Este processo simplifica o salvamento e a transferência de dados entre dispositivos e permite que você os compartilhe com outros usuários do OsmAnd.

    **Vá para** a seção *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* e selecione se deseja exportar ou importar dados. Se você selecionar *exportar*, precisará expandir o *grupo Meus Locais* e verificar os dados necessários.

- [***Mapas e Recursos***](../personal/maps-resources.md):

    O item *Mapas e Recursos* do *Menu Principal* do aplicativo OsmAnd fornece acesso ao gerenciamento de dados da seção *Meus Locais*. A guia [*Local*](../personal/maps-resources.md#local) mostra quanto espaço é ocupado por todos os dados existentes do OsmAnd em seu dispositivo, e a seção *Meus Locais* em particular. Você pode usá-la para obter informações detalhadas sobre seus dados e acesso para gerenciá-los. A seção só pode conter itens para os quais os dados foram baixados.

    **Vá para** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Verifique e gerencie seus dados.


## Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoritos** permitem que você marque locais importantes ou frequentemente visitados. Esses pontos favoritos são organizados em pastas e podem ser personalizados com diferentes cores, formas e ícones. Você pode navegar rapidamente para qualquer local favorito através do menu **Meus Locais** sem precisar pesquisá-lo repetidamente.


1. ***Botões de ação***. Os *botões de ação* na parte inferior da tela Meus Locais permitem que você gerencie a lista de pastas com seus favoritos:

    - **Importar** (botão *Adicionar*) — Permite importar arquivos *favorite.gpx* do armazenamento do seu dispositivo.

    - **Exportar** — Salve seus pontos favoritos como um arquivo *favorites.gpx* para uso externo ou backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Somente Android*) — Você pode adicionar qualquer ponto favorito ou a lista inteira de pontos favoritos em uma pasta à [lista de marcadores do mapa](../personal/markers.md).

    - **Excluir** (*no iOS, esta opção está localizada no menu Editar*) — Exclui pontos favoritos um por um ou pastas favoritas selecionadas e todos os pontos contidos nelas.

2. ***Menu de três pontos*** (*Android*) e ***toque longo*** (*iOS*). Use o *menu de três pontos* ao lado de cada pasta ou *toque longo* na pasta para gerenciar grupos de favoritos:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Use esta opção para alterar o nome da pasta selecionada.

    - **<Translate android="true" ids="change_default_appearance"/>** — Personalize como os pontos favoritos na pasta aparecem no mapa, alterando seus ícones, cores ou rótulos.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** ou **Ocultar no mapa** — Alterne esta opção para exibir ou ocultar os pontos favoritos da pasta no mapa.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** ou **Remover dos marcadores do mapa** (*Somente Android*) — Adicione todos os pontos favoritos da pasta à *lista de marcadores do mapa* ou remova-os conforme necessário para facilitar a referência.

    - **<Translate android="true" ids="shared_string_share"/>** — Compartilhe os pontos favoritos na pasta exportando-os como um arquivo *Favorites.gpx*, facilitando a transferência ou o backup de seus dados.

    - **<Translate android="true" ids="shared_string_delete"/>** — Exclua permanentemente a pasta de favoritos selecionada e todos os pontos dentro dela.

Para instruções mais detalhadas, consulte o artigo [Favoritos](../personal/favorites.md).


## Rotas {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> guia*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> guia*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Rotas** oferecem ferramentas poderosas para gravar, criar e gerenciar rotas dentro do OsmAnd. Elas podem ser usadas para [navegação](../navigation/setup/gpx-navigation.md), [gravação de viagem](../plugins/trip-recording.md) ou [integração](../personal/tracks/manage-tracks.md#import) de arquivos GPX externos.

- **Guia Rotas** — Todas as rotas já gravadas, criadas ou importadas são exibidas automaticamente na pasta *Meus Locais* na guia *Rotas*. Elas são organizadas por pasta ou exibidas em uma lista abaixo delas.

- **Criar uma rota** — Comece a gravar usando a **Guia Rotas** ou o [plugin de gravação de viagem](../plugins/trip-recording.md).

- **Visualizar e Editar** — Acesse a lista de rotas através de *Meus Locais* e gerencie-as usando o *menu de três pontos* para [pastas](../personal/tracks/manage-tracks.md#track-folder) ou o menu de [rota única](../personal/tracks/manage-tracks.md#single-track-menu).

- **Gerenciar** — Use as ferramentas [Filtrar](../personal/tracks/smart-folder.md#filter) e [Pasta inteligente](../personal/tracks/smart-folder.md#smart-folder) para organizar as rotas com base em parâmetros específicos.

- **Aparência e Análise** — [Personalize](../map/tracks/appearance.md) o estilo visual das rotas e [analise-as](../map/tracks/index.md#analyze-track-on-map) usando a ferramenta [Planejar uma Rota](../plan-route/create-route.md) do OsmAnd.

Para orientação abrangente, consulte o artigo [Gerenciar Rotas](../personal/tracks/manage-tracks.md).


## Edições do OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

O recurso **Edições do OpenStreetMap** do OsmAnd permite que você contribua para a comunidade global de mapeamento adicionando, modificando ou comentando dados do mapa.

1. ***Botões de ação***. Você pode usar os *botões de ação* na tela Meus Locais para gerenciar sua lista de notas:

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Carregar arquivos para o OSM** — Envie suas notas e dados para o OpenStreetMap para contribuir com a comunidade.

    - **Exportar** (*Somente Android*) — Salve suas notas e POIs como arquivos para uso externo ou backup, com opções para exportar como notas OSM, POIs ou todos os dados combinados.

    - **Excluir** — Remova itens selecionados da sua lista permanentemente.


2. ***Menu de três pontos***. Você pode gerenciar POIs ou notas específicas usando o *menu de três pontos* ao lado de cada nota:

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Carregar edição para o OSM** — Envie suas alterações ou edições para o OpenStreetMap para que outros as vejam.

    - **Mostrar no mapa** — Exiba o local específico do POI ou da nota no mapa.

    - **Modificar alteração/nota do OSM** — Faça mais edições no POI ou na nota que já foram adicionadas ao OpenStreetMap.

    - **Excluir** — Remova o POI ou a nota selecionada da sua lista.

Consulte o [plugin de Edição OSM](../plugins/osm-editing.md) para obter instruções passo a passo.


## Notas de Áudio/Vídeo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

O **plugin Notas de Áudio/Vídeo** permite criar notas multimídia vinculadas a locais específicos do mapa. Essas notas são armazenadas em **Meus Locais** na **Guia Notas A/V**.

1. ***Botões de ação***. Você pode usar os *botões de ação* na parte inferior da tela Meus Locais para gerenciar sua lista de notas:

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Abre uma seleção de métodos de classificação, *Por tipo* ou *Por data*, e, quando selecionado, classifica a lista de acordo.

    - **<Translate android="true" ids="shared_string_share"/>** — Exibe uma lista de verificação de todas as notas, incluindo aquelas adicionadas a arquivos GPX como pontos de passagem. Primeiro, as notas necessárias são verificadas, então o ícone *Compartilhar* no canto superior direito da tela sugere as opções de compartilhamento disponíveis e, finalmente, essas notas ficam disponíveis de acordo com a opção selecionada.

    - **Compartilhar com pontos de passagem GPX** — Você pode compartilhar as notas selecionadas como pontos de passagem no menu *Meus Locais* adicionando [dados GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) a elas usando o botão **Compartilhar** na parte inferior da tela da guia *Notas A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Exibe uma lista de verificação de notas de áudio, foto e vídeo apenas. Primeiro, verifique as notas desnecessárias, depois toque no ícone *Excluir* no canto superior direito da tela, após a confirmação, as notas selecionadas serão excluídas permanentemente.


2. ***Menu de três pontos***. Você pode gerenciar notas de áudio, vídeo ou foto específicas usando o *menu de três pontos* ao lado de cada nota:

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Visualiza ou ouve a nota de áudio, vídeo ou foto selecionada diretamente.

    - **<Translate android="true" ids="shared_string_share"/>** — Compartilha a nota com outras pessoas através de vários aplicativos ou plataformas.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Exibe o local relacionado e o [Menu de contexto](../plugins/audio-video-notes#actions-in-map-context-menu) da nota no mapa.

    - **<Translate android="true" ids="shared_string_rename"/>** — Altera o nome da nota para algo mais descritivo ou relevante.

    - **<Translate android="true" ids="shared_string_delete"/>** — As notas selecionadas são excluídas permanentemente da sua coleção.

Para mais informações, visite a página do [plugin Notas de Áudio/Vídeo](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Artigos Relacionados {#related-articles}

- [Gerenciar Rotas](../personal/tracks/manage-tracks.md#import--export-track)
- [Histórico de Pesquisa](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)

> *Última atualização: Março de 2025*