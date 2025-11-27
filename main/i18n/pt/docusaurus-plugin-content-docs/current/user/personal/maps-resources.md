---
source-hash: 18fb3a3ada428d5cb9890f755d85611b5560c8e172ba9d7c50665504b2f3c137
sidebar_position: 2
title: Mapas e Recursos
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

Na seção **Mapas e Recursos**, você pode gerenciar mapas *Online* e *Offline*, e outros recursos usados no OsmAnd. Por exemplo, você pode baixar, excluir, renomear, limpar cache, atualizar e verificar o tamanho, e realizar diferentes ações.

O OsmAnd opera com dois tipos de mapas: [Mapas vetoriais](../map/vector-maps.md) e [Mapas raster](../map/raster-maps.md). A aba [Local](#local-menu) armazena todos os mapas e recursos. Os tipos de mapa disponíveis podem ser baixados na aba [Downloads](#downloads-menu). Na aba [Atualizações](#updates-menu), você pode baixar mapas que estão disponíveis para atualizações e usar [Atualizações ao vivo](#live-updates). Você também pode acessar o recurso [Mapa extra](#extra-maps) para criar seus tipos de mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menu de mapas Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de mapas iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Tipos de mapa {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de download de mapa Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Mapas regionais Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de download de mapa iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Mapas regionais iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Baixar mapas para o aplicativo OsmAnd é um passo importante que determina a funcionalidade e eficiência da navegação.

### Conteúdo de mapa gratuito {#free-map-content}

- **Mapa padrão**. Fornece uma visão geral da área com base na fonte [OpenStreetMap](https://www.openstreetmap.org/) e contém um mapa, rotas, endereços, POIs e informações de transporte público. Tocar abre uma tela com uma lista de regiões do país selecionado e informações sobre quanto espaço esses mapas ocuparão no seu dispositivo.  
- **Somente estradas** (*somente Android*). O mapa contém apenas informações da grade rodoviária para focar em rotas e infraestrutura rodoviária. Ao remover detalhes como edifícios e pontos de interesse, ele é menor que um mapa padrão. Tocar abre uma tela com uma lista de regiões no país selecionado e informações sobre quanto espaço esses mapas ocuparão no seu dispositivo.
- **Mapa de visão geral do mundo**. As versões do OsmAnd até 3.8 oferecem o download de um mapa mundial para que você possa visualizá-lo em escala planetária. Em versões mais recentes do OsmAnd, um *Mini Mapa Mundial* leve é incluído no aplicativo. O aplicativo permite que você baixe um mapa mundial de visão geral maior com informações mais detalhadas. 

:::info monthly map updates
Observe que as atualizações mensais de mapas são consideradas outro download de mapa e são subtraídas do número disponível de downloads de mapas gratuitos.
:::

### Conteúdo de mapa pago {#paid-map-content}

- [Linhas de contorno](../plugins/topography.md#contour-lines). Um mapa contendo linhas de elevação de contorno para visualizar o terreno.
- [Mapa de terreno (Hillshade e Inclinação)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mapas com sombras ou inclinações fornecem informações adicionais sobre o terreno.
- [Mapa de terreno (3D)](../plugins/topography.md#3d-relief). Representação tridimensional do terreno para uma melhor compreensão do seu entorno. O [Mecanismo de renderização de mapa Versão 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) deve estar ativado.
- [Profundidades e contornos náuticos](../plugins/nautical-charts.md). Cartas marítimas mostrando linhas costeiras, profundidades, auxílios à navegação, portos e perigos para navegação e velejo seguros.
- [Wikipedia](../plugins/wikipedia.md). Mapa vetorial com artigos da [Wikipedia](https://wikipedia.org/) geoposicionados sobre pontos de referência ou informações adicionais sobre locais.
- [Wikivoyage](../plan-route/travel-guides.md). Fornece mapas vetoriais com guias de viagem virtuais, oferecendo aos usuários informações valiosas, recomendações e dicas.
- [Previsão do tempo](../plugins/weather.md). Informações meteorológicas em um mapa para facilitar o planejamento de rotas.


## Menu de Downloads {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu de download de mapa geral Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de download de mapa geral iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

A aba **Download** permite baixar vários tipos de mapas dos servidores OsmAnd, exigindo uma conexão ativa com a Internet.

***Para baixar um mapa:***

- **Abra a aba Download**, localize a seção necessária e toque na pasta relevante para ver os mapas disponíveis.

- **Mapas disponíveis** exibem ícones de download, para um único mapa ou para [vários mapas](#multiple-map-loading).

- **Mapas baixados** mostram um ícone verde com um botão de menu:  
    - *Android*: Menu de três pontos.  
    - *iOS*: Ícone de informação (i).

- **Mapas em processo de carregamento** têm um ícone que visualiza isso. Para cancelar o download, toque no ícone. Para ver a lista de mapas na fila de download e cancelar os downloads, toque na barra de Download na área de informações de memória do dispositivo das abas Downloads e Atualizações.

- **Na versão Gratuita**, mapas indisponíveis para download mostram um ícone [OBTER](../purchases/index.md), que leva à página de compra.

***A aba de downloads consiste em grupos de mapas:***

- **Informações de memória do dispositivo**. Visualize a quantidade de espaço ocupado e livre no seu dispositivo.
- **Contador de mapas** (***Versão gratuita***). Exibe quantos mapas você ainda pode baixar.
- [Mapas extras](#extra-maps). Exibe os dados do mapa para o [pacote personalizado](../plugins/custom.md).
- **Regiões**. Lista por continente e região do mundo: *África, Antártica, Ásia, Austrália e Oceania, América Central, Europa, América do Norte, Rússia e América do Sul.*
- [Mapas mundiais](#world-maps). Uma lista de mapas do mundo inteiro: *Correção de altitude mundial (somente Android)*, *Mapa de visão geral mundial*, *Todo o mundo (Previsão do tempo)*
- [Mapas náuticos](../plugins/nautical-charts.md) ([*recurso pago*](../purchases/index.md)). Mapas vetoriais com elevações como pontos ou linhas.
- [Guias de viagem (Wikivoyage)](../plan-route/travel-guides.md) ([*recurso pago*](../purchases/index.md)). Mapas vetoriais com uma coleção de artigos em formato HTML e, adicionalmente, arquivos GPX.
- **Outros mapas**. Mapas que não podem ser atribuídos à hierarquia de mapa atual porque não são suportados ou estarão disponíveis em versões futuras.
- [Comandos de voz](../navigation/guidance/voice-navigation.md) (*somente Android*). Pacotes de voz para comandos de navegação.
- [Fontes de mapa](../map/vector-maps.md#map-fonts-android) (*somente Android*). Arquivos de fonte adicionais exibem texto no mapa.
- **Pesquisar cidade ou região** (*somente Android*). Uma ferramenta de busca rápida na parte superior da aba de downloads (ícone de lupa) para encontrar a cidade ou região necessária.

### Mapas Mundiais {#world-maps}

No menu Baixar Mapas, há uma seção **Mapas Mundiais** que fornece acesso para baixar vários mapas do mundo, complementando a funcionalidade do aplicativo.  

- **Correção de Altitude Mundial** (*somente Android*). Este arquivo contém correções de altitude para compensar a curvatura planetária.
- **Mapa de visão geral mundial**. Fornece uma visão geral extensa da superfície da Terra, útil para planejamento de rotas de longo prazo e exploração casual.
- **Todo o mundo (Previsão do tempo)**. Permite baixar um mapa com informações meteorológicas.


### Mapas Extras {#extra-maps}

O OsmAnd suporta a transferência de configurações e dados específicos do perfil, incluindo arquivos de renderização, fontes, rotas, mapas e plugins personalizados. Crie uma pasta de mapa personalizada usando um arquivo de plugin `.osf` (um formato `.zip` compactado).

Para importar um arquivo:

1. Localize o arquivo `.osf` no armazenamento do seu dispositivo, mensageiro ou e-mail.
2. Toque para abri-lo com o OsmAnd.
3. O plugin aparecerá na seção **Lista de Plugins**, onde poderá ser ativado.
4. Uma pasta correspondente aparecerá então na seção **Mapas Extras** da aba [Downloads](#downloads-menu).

Leia mais no artigo [**Pacote personalizado**](../plugins/custom).


### Carregamento de Múltiplos Mapas {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de download de mapa geral Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Menu de deseleção Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de download de mapa geral iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Menu de deseleção iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Para países que consistem em **múltiplos mapas de região**, você pode usar o carregamento em massa de múltiplos mapas. Mapas disponíveis para este tipo de download são exibidos com ícones de seta de download duplo e um rótulo com o número de regiões dentro (por exemplo, Linhas de Contorno / Todas as Regiões: 10). Você pode escolher quantos mapas baixar. O carregamento em massa suporta vários tipos de mapa, incluindo Padrão, Linhas de contorno, Wikipedia e Terreno.

Quando um item de país agrupado é aberto, uma folha inferior é exibida com a lista completa de mapas para esse país, permitindo que mapas individuais sejam selecionados ou todos eles sejam baixados de uma vez.


## Menu Local {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Aba Local Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Aba Local Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

A aba Local fornece uma visão geral do uso de armazenamento para todos os dados do OsmAnd no seu dispositivo. Os dados são divididos em três seções codificadas por cores para maior clareza, com os itens classificados por tamanho do maior para o menor. Cada seção exibe apenas itens com dados baixados:

- ***Recursos*** (*azul*).  
    Inclui mapas ([Padrão](../map/vector-maps.md), &nbsp;[Náutico](../plugins/nautical-charts.md), &nbsp;[Topografia](../plugins/topography.md), &nbsp;[Clima](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) e [Guias de viagem](../plan-route/travel-guides.md), &nbsp;[Atualizações ao vivo](../personal/maps-resources.md#live-updates), &nbsp;**Somente estrada**,  &nbsp;[Fontes de mapa](../map/raster-maps.md), &nbsp;[Estilos de renderização](../map/vector-maps.md#default-map-styles), &nbsp;**Fontes de mapa, &nbsp;Comandos de voz (gravados e TTS), &nbsp;Cache**.  

- ***Meus Lugares*** (*amarelo*).  
    Inclui [Favoritos](../personal/favorites.md), &nbsp;[Trilhas](../personal/tracks/manage-tracks.md), &nbsp;[Notas OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Edições OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Histórico](../personal/global-settings.md#history), &nbsp;*Itinerário*.  

- ***Configurações*** (*verde*).  
    Inclui [Perfis](../personal/profiles.md), &nbsp;[Cores](../personal/color-palette-schemes.md) e **Outras** configurações do aplicativo.

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu da aba Local iOS](@site/static/img/personal/maps/local_tab_ios.png)

A aba Local fornece uma visão geral do uso de armazenamento para mapas e recursos no seu dispositivo. A barra de memória na parte superior exibe três categorias:

- ***Verde***. Armazenamento total usado do dispositivo.
- ***Laranja***. Parte do armazenamento usado ocupado pelos downloads do OsmAnd.
- ***Cinza***. Armazenamento livre disponível no dispositivo.

Abaixo da barra de memória, é exibida uma lista de todos os mapas e recursos do OsmAnd baixados, incluindo seu tipo e tamanho do arquivo. Mapas online não são contados na barra de memória, pois são transmitidos e apenas armazenados em cache temporariamente.

</TabItem>

</Tabs>


### Visualizando Dados {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Visão geral da categoria Local Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opções da categoria Local Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Toque em qualquer item na aba **Local** para abrir sua lista detalhada. Na parte superior desta lista, um painel visual exibe quanto espaço o tipo de dados selecionado ocupa em relação ao armazenamento total do OsmAnd.

***Ações disponíveis:***

- **Pesquisar**. Encontre dados específicos por nome dentro da pasta selecionada.
- **Menu de três pontos**:  
    ***Selecionar***. Escolha vários itens para ações como *Excluir*, *Desativar* ou *Ativar*.  
    ***Importar***. Acesse o armazenamento do dispositivo para importar arquivos.
- **Opção de classificação**. Classifique os itens por nome, país, data ou tamanho (a disponibilidade depende do tipo de dados).

Cada item na lista oferece um *menu de três pontos* com opções:

- **Informações**. Veja informações detalhadas sobre as *[ações](#actions)*.
- **Exportar**. Salve dados em um arquivo via *Configurações → Exportar para Arquivo*.

***Opções adicionais para mapas:***

- **Desativar**. Desative mapas vetoriais sem excluí-los. Eles permanecem armazenados, mas não são usados para navegação, pesquisa ou roteamento. Reduz a carga no dispositivo e acelera o OsmAnd.
- **Atualizar**. Baixe a versão mais recente do mapa.
- **Renomear**. Personalize o nome do mapa para melhor identificação.
- **Remover**. Exclua o mapa do seu dispositivo.
- **Editar** (para Mapas Online). Modifique a configuração do mapa online.

</TabItem>

<TabItem value="ios" label="iOS">  

![Visualizando dados](@site/static/img/personal/maps/viewing_data_ios.png)

Toque em qualquer item offline na aba **Local** para abrir seus dados detalhados, da seguinte forma:

- **Tipo**. O tipo do item de dados como **Mapa padrão**, **Wikipedia**, **Linhas de contorno**, e assim por diante.
- **Tamanho**. O tamanho do item em MB.
- **Criado em**. A data em que o item foi adicionado.

Para mapas online, apenas o tipo e o tamanho dos dados em cache são exibidos.

</TabItem>

</Tabs>


### Ações {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu de itens da fonte do mapa](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Cada item na lista [Fonte do mapa](../map/raster-maps.md) fornece configurações para gerenciar o mapa raster online armazenado no seu dispositivo. Abra o *menu de três pontos* para acessar as ações disponíveis:

- **Informações**. Exibe detalhes gerais sobre a fonte do mapa selecionada, incluindo formato e data da última atualização.  
- **Calcular Tamanho**. Estima o armazenamento ocupado pelos blocos em cache desta fonte de mapa. Se o cache exceder *50MB*, o tamanho pode ser exibido como *≥50MB* em vez de um número exato.
- **Limpar Todos os Blocos**. Exclui todos os blocos em cache para a fonte do mapa selecionada, liberando armazenamento enquanto mantém a fonte do mapa disponível para uso futuro.  
- **Exportar**. Salva a configuração da fonte do mapa selecionada para backup ou compartilhamento.  
- **Remover**. Exclui a fonte do mapa selecionada. Esta ação não afeta os mapas offline baixados, mas limpa o cache associado.

Ao visualizar um item de dados local, você vê:

- **Tipo**. O tipo de dados da lista **Local**.
- **Criado**. A data em que o item foi adicionado.
- **Tamanho**. O tamanho do item em MB.

As **Ações** disponíveis dependem do tipo de dados e podem incluir **Desativar**, **Atualizar**, **Renomear**, **Exportar** e **Excluir**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Ações iOS](@site/static/img/personal/maps/local_actions_ios.png)

As **Ações** disponíveis dependem do tipo de dados:

- Para **itens offline**, apenas a opção **Excluir** está disponível.
- Para **mapas online**, as ações podem incluir **Limpar cache**, **Editar** e **Excluir**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Menu de Atualizações {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu de mapas Atualizar mapas Android](@site/static/img/personal/maps/maps_update_andr.png) ![Menu de mapas Aba Atualizar Android](@site/static/img/personal/maps/maps_update_tab_andr.png)

A aba **Atualizações** permite atualizar mapas e recursos do OsmAnd. Mapas padrão e somente estradas são lançados uma vez por mês, geralmente entre o dia 2 e o dia 5, e incluem dados do OpenStreetMap até o último dia do mês anterior (por exemplo, o lançamento de outubro contém dados até 30 de setembro). Outros dados, como Wikipedia, terreno ou mapas náuticos, podem seguir cronogramas de atualização diferentes e não regulares. A previsão do tempo tem seu próprio ciclo de atualização regular. Para detalhes, consulte a [Previsão de Download](../plugins/weather.md#download-forecast). 

Se vários mapas do mesmo país precisarem de atualização, o OsmAnd os agrupa em um único item na lista de Atualizações. O item agrupado mostra o nome do país e o número de mapas incluídos. Ao tocá-lo, uma folha inferior *Atualizar mapas* é aberta, mostrando todos os mapas que precisam ser atualizados. 

Use o botão *Atualizar tudo* para atualizar todos os mapas simultaneamente, ou atualize mapas individuais conforme necessário. Para atualizações por hora, verifique o status da sua assinatura de [Atualizações ao vivo](#live-updates). Se ativado, a seção **Atualizações ao vivo** aparecerá na parte superior da aba, abaixo do indicador de Memória do Dispositivo.

Você também pode gerenciar mapas diretamente da aba Atualizações usando um gesto de pressão longa em qualquer mapa listado. Isso abre um menu de contexto que fornece várias opções:
- **Informações** — visualize detalhes sobre o mapa selecionado
- **Atualizar** — baixe a versão mais recente disponível
- **Desativar** — desative temporariamente um mapa sem remover seus dados
- **Remover** — exclua completamente os dados do mapa do dispositivo

Quando um mapa é desativado, ele pode desaparecer temporariamente da aba Local. Se uma atualização se tornar disponível para um mapa desativado, ele ainda aparecerá na lista de Atualizações e será mostrado com um ícone cinza. Atualizar tal mapa o ativará automaticamente novamente.

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu de mapas Atualizar mapas iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Previsão do tempo Atualizar mapas iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

A aba **Atualizações** permite atualizar mapas e recursos do OsmAnd. Mapas padrão e somente estradas são lançados uma vez por mês, geralmente entre o dia 2 e o dia 5, e incluem dados do OpenStreetMap até o último dia do mês anterior (por exemplo, o lançamento de outubro contém dados até 30 de setembro). Outros dados, como Wikipedia, terreno ou mapas náuticos, podem seguir cronogramas de atualização diferentes e não regulares. 

Use o botão *Atualizar tudo* para atualizar todos os mapas simultaneamente, ou atualize mapas individuais conforme necessário. Para atualizações por hora, verifique o status da sua assinatura de [Atualizações ao vivo](#live-updates). Se ativado, a seção **Atualizações ao vivo** aparecerá na parte superior da aba, abaixo do indicador de Memória do Dispositivo.

A aba **Atualizações** também inclui uma seção de Previsão do tempo. Ela foi projetada para gerenciar suas previsões offline para países selecionados:

- Se nenhuma previsão foi baixada ainda, você verá um prompt para selecionar países. Os dados de previsão estão disponíveis por até 7 dias.
- Uma vez que uma previsão é baixada, a tela ***Previsão offline*** exibe a lista de países com informações de status, incluindo a hora da última atualização, período de validade e tamanho total dos dados.
- Tocar em um país abre informações detalhadas, como hora da última atualização, próxima atualização, tamanho dos dados e precisão. As opções incluem ***Atualizar agora***, ativar ou desativar ***Atualização automática*** (a previsão do tempo tem seu próprio ciclo de atualização regular. Para detalhes, consulte a [Previsão de Download](../plugins/weather.md#download-forecast).), e ***Remover previsão***.


</TabItem>

</Tabs>

## Atualizações ao vivo {#live-updates}

:::tip Compra
Atualizações ao vivo é um recurso pago.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Menu de mapas OsmAnd ao vivo Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menu de mapas OsmAnd ao vivo editar Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menu de mapas OsmAnd ao vivo iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menu de mapas OsmAnd ao vivo editar iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Atualizações ao vivo** fornece atualizações de mapa incrementais e frequentes através de [assinatura](../purchases/index.md) ou é gratuito para [colaboradores OSM](#free-for-osm-mappers). As atualizações ocorrem a cada 15 minutos nos servidores OsmAnd e são baixáveis a cada hora, diariamente ou semanalmente. Essas atualizações consomem armazenamento mínimo — cerca de 2-4% do tamanho total do mapa por mês.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Principais recursos:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Atualizações ao vivo**. Gerencie através de um botão nas configurações.
- Botão **&#8230; &#124;** (*Android*) / Botão **&#62;** (*iOS*). Abra as configurações de *Atualizações ao vivo*.
- **Alternador**(*Android*) / Botão **&#43;** (*iOS*). Adicione mapas para *atualizações ao vivo*.
- **<Translate android="true" ids="update_frequency"/>**. Selecione a frequência de atualização do mapa (horária, diária ou semanal).
- **<Translate android="true" ids="update_now"/>**. Inicie as *atualizações ao vivo* para o mapa.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Tamanho das *atualizações ao vivo*.
- **Botão Lixeira**(*Android*). Exclua todas as *atualizações ao vivo* recebidas para o mapa atual.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gerencie o download de *atualizações ao vivo* por uma conexão Wi-Fi.


### Carimbos de data/hora de atualização {#update-timestamps}

- **Última atualização OSM.**  
    Indica as últimas alterações processadas do OpenStreetMap.
- **Região Atualizada.**  
    Mostra quando as atualizações da região específica foram processadas pela última vez.
- **Próxima atualização.**  
    Exibe o horário programado para a próxima verificação de atualização.


### Limitações das Atualizações ao vivo {#limitations-of-live-updates}

As alterações de endereço são suportadas apenas por meio de atualizações mensais.
As estradas atualizadas não possuem detalhes de elevação, afetando os gráficos de gradiente.
Referências de rota excluídas ou alteradas ainda podem aparecer incorretamente.


### Gratuito para Mapeadores OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd ao vivo para mapeadores](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd ao vivo para mapeadores](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Colaboradores do [OpenStreetMap](https://openstreetmap.org/) são elegíveis para downloads ilimitados de mapas gratuitos e atualizações ao vivo. Para se qualificar:
Ative o [plugin de Edição OpenStreetMap](../plugins/osm-editing.md).
[Faça login](../plugins/osm-editing.md#settings) com seu nome de usuário OSM.
Mantenha pelo menos [**30 edições**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) nos últimos dois meses.

## Artigos Relacionados {#related-articles}

- [Perfis (Configurações)](./profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

- Navegação por voz. [(verificar)](../troubleshooting/navigation.md#voice-navigation)
- Como excluir o histórico de pesquisa. [(verificar)](../troubleshooting/general.md#how-to-delete-search-history)
- Para solução de problemas adicionais, visite: [Mapas e Dados](../troubleshooting/maps-data.md)