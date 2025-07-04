---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
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

Na seção **Mapas e Recursos**, você pode gerenciar mapas *online* e *offline*, e outros recursos usados no OsmAnd. Por exemplo, você pode baixar, excluir, renomear, limpar o cache, atualizar e verificar o tamanho, e realizar diferentes ações.

O OsmAnd opera com dois tipos de mapas: [Mapas vetoriais](../map/vector-maps.md) e [Mapas raster](../map/raster-maps.md). A aba [Local](#local) armazena todos os mapas e recursos. Os tipos de mapas disponíveis podem ser baixados na aba [Downloads](#downloads). Na aba [Atualizações](#updates), você pode baixar mapas que estão disponíveis para atualização e usar [Atualizações ao vivo](#osmand-live). Você também pode acessar o recurso [Mapa extra](#extra-maps) para criar seus tipos de mapa.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Tipos de mapa {#map-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Baixar mapas para o aplicativo OsmAnd é um passo importante que determina a funcionalidade e eficiência da navegação.

#### Recursos gratuitos para o local selecionado {#free-features-for-the-selected-location}

- **Mapa padrão**. Fornece uma visão geral da área com base na fonte [OpenStreetMap](https://www.openstreetmap.org/) e contém um mapa, rotas, endereços, POI e informações de transporte público. Tocar abre uma tela com uma lista de regiões do país selecionado e informações sobre quanto espaço esses mapas ocuparão no seu dispositivo.  
- **Somente estradas** (*somente Android*). O mapa contém apenas informações da grade de estradas para focar em rotas e infraestrutura rodoviária. Ao remover detalhes como edifícios e pontos de interesse, ele é menor que um mapa padrão. Tocar abre uma tela com uma lista de regiões do país selecionado e informações sobre quanto espaço esses mapas ocuparão no seu dispositivo.

#### Recursos pagos para o local selecionado {#paid-features-for-the-selected-location}

- [Linhas de contorno](../plugins/topography.md#contour-lines). Um mapa contendo linhas de elevação de contorno para visualizar o terreno.
- [Mapa de terreno (Relevo sombreado e Inclinação)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mapas com sombras ou inclinações fornecem informações adicionais sobre o terreno.
- [Mapa de terreno (3D)](../plugins/topography.md#3d-relief). Representação tridimensional do terreno para uma melhor compreensão do seu entorno. O [Motor de renderização de mapa Versão 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) deve estar ativado.
- [Wikipedia](../plugins/wikipedia.md). Mapa vetorial com artigos da [Wikipedia](https://wikipedia.org/) geolocalizados sobre pontos de referência ou informações adicionais sobre lugares.
- [Previsão do tempo](../plugins/weather.md). Informações meteorológicas em um mapa para facilitar o planejamento de rotas.
- [Mapas raster online](../map/raster-maps.md). Os mapas estão disponíveis para download online e podem ser instalados como mapas de terceiros ou OsmAnd Tiles.

#### Mapa de visão geral do mundo {#world-overview-map}

As versões do OsmAnd até 3.8 oferecem o download de um mapa mundial para que você possa visualizá-lo em escala planetária. Em versões mais recentes do OsmAnd, um *Mini Mapa Mundial* leve é ​​incluído no aplicativo. O aplicativo permite que você baixe um mapa mundial de visão geral maior com informações mais detalhadas.


## Mapas e Recursos {#maps--resources}

A seção **Mapas e Recursos** do *Menu Principal* do aplicativo OsmAnd fornece acesso para gerenciar mapas e outros dados importantes.

- A aba [Baixar](#downloads) mapas permite que você baixe mapas para uso offline, garantindo sua disponibilidade sem internet.  
- Na aba [Local](#local) mapas, você pode encontrar e gerenciar informações detalhadas sobre mapas e lugares, incluindo favoritos, trilhas, notas OSM e outros itens que você tem em seu dispositivo.  
- A aba [Atualizações](#updates) permite que os usuários obtenham informações sobre atualizações disponíveis para mapas e outros recursos, garantindo que os dados estejam atualizados e precisos.

***Ações gerais que você pode fazer em Mapas e Recursos***:

- **Atualizar**. Recarrega a lista de mapas disponíveis do servidor OsmAnd.  
- **Pesquisar**. Pesquise mapas por **país**, **província** ou **cidade** principal.  
- **Memória do dispositivo**. Mostra no indicador quanta memória está disponível para download e quantos mapas podem ser baixados gratuitamente. Dependendo da aba, às vezes são exibidos dados ligeiramente diferentes.  
- **Contador de mapas** (*Versão gratuita* só é visível se você não tiver uma [assinatura](../purchases/index.md)). O indicador com divisores mostra quantos mapas você ainda tem para baixar dos *7 disponíveis*.

:::info atualizações mensais de mapas
Observe que as atualizações mensais de mapas são consideradas outro download de mapa e são subtraídas do número disponível de downloads de mapas gratuitos.
:::


### Downloads {#downloads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

A aba **Download** permite que você baixe vários tipos de mapas dos servidores OsmAnd, exigindo uma conexão ativa com a Internet.

***Para baixar um mapa:***

- **Abra a aba Download**, localize a seção necessária e toque na pasta relevante para ver os mapas disponíveis.

- **Mapas disponíveis** exibem ícones de download, para um único mapa ou para [vários mapas](#multiple-map-loading).

- **Mapas baixados** mostram um ícone verde com um botão de menu:  
    - *Android*: Menu de três pontos.  
    - *iOS*: Ícone de informações (I).

- **Mapas em processo de carregamento** têm um ícone que visualiza isso. Para cancelar o download, toque no ícone. Para ver a lista de mapas na fila de download e cancelar os downloads, toque na barra de Download na área de informações de Memória do dispositivo das abas Downloads e Atualizações.

- **Na versão gratuita**, mapas indisponíveis para download mostram um ícone [OBTER](../purchases/index.md), que leva à página de compra.

***A aba de downloads consiste em grupos de mapas:***

- **Informações de memória do dispositivo**. Visualize a quantidade de espaço ocupado e livre em seu dispositivo.
- **Contador de mapas** (***Versão gratuita***). Exibe quantos mapas você ainda tem para download.
- [Mapas extras](#extra-maps). Exibe os dados do mapa para o [Pacote personalizado](../plugins/custom.md).
- **Regiões**. Lista por continente e região do mundo: *África, Antártica, Ásia, Austrália e Oceania, América Central, Europa, América do Norte, Rússia e América do Sul.*
- [Mapas mundiais](#world-maps). Uma lista de mapas do mundo inteiro: *Correção de altitude mundial (somente Android)*, *Mapa de visão geral mundial*, *Todo o mundo (Previsão do tempo)*
- [Mapas náuticos](../plugins/nautical-charts.md) ([*recurso pago*](../purchases/index.md)). Mapas vetoriais com elevações como pontos ou linhas.
- [Guias de viagem (Wikivoyage)](../plan-route/travel-guides.md) ([*recurso pago*](../purchases/index.md)). Mapas vetoriais com uma coleção de artigos em formato HTML e, adicionalmente, arquivos GPX.
- **Outros mapas**. Mapas que não podem ser atribuídos à hierarquia de mapas atual porque não são suportados ou estarão disponíveis em versões futuras.
- [Comandos de voz](../navigation/guidance/voice-navigation.md) (*somente Android*). Pacotes de voz para comandos de navegação.
- [Fontes de mapa](../map/vector-maps.md#map-fonts-android) (*somente Android*). Arquivos de fonte adicionais exibem texto no mapa.

#### Mapas mundiais {#world-maps}

No menu Baixar Mapas, há uma seção **Mapas Mundiais** que fornece acesso para baixar vários mapas do mundo, complementando a funcionalidade do aplicativo.  

- **Correção de Altitude Mundial** (*somente Android*). Melhora a precisão da navegação, especialmente em terrenos montanhosos.
- **Mapa de visão geral mundial**. Fornece uma visão geral extensa da superfície da terra, útil para planejamento de rotas de longo prazo e exploração casual.
- **Todo o mundo (Previsão do tempo)**. Permite que você baixe um mapa com informações meteorológicas.

Informações sobre *menu de mapas* e *ações* podem ser encontradas no artigo [Baixar mapas](../start-with/download-maps.md).


#### Carregamento de vários mapas {#multiple-map-loading}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu general Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu general iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Para países que consistem em **vários mapas de região**, você pode usar o carregamento em massa de vários mapas. Os mapas disponíveis para este tipo de download são exibidos com ícones de seta de download duplo e um rótulo com o número de regiões dentro (por exemplo, Linhas de contorno / Todas as regiões: 10). Você pode escolher quantos mapas baixar.


### Local {#local}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

A aba Local fornece uma visão geral do uso de armazenamento para todos os dados do OsmAnd em seu dispositivo. Os dados são divididos em três seções codificadas por cores para maior clareza, com os itens classificados por tamanho, do maior para o menor. Cada seção exibe apenas itens com dados baixados:

- ***Recursos*** (*azul*).  
    Inclui mapas ([Padrão](../map/vector-maps.md), &nbsp;[Náutico](../plugins/nautical-charts.md), &nbsp;[Topografia](../plugins/topography.md), &nbsp;[Tempo](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) e [Guias de viagem](../plan-route/travel-guides.md), &nbsp;[Atualizações ao vivo](../personal/maps-resources.md#osmand-live), &nbsp;**Somente estrada**,  &nbsp;[Fontes de mapa](../map/raster-maps.md), &nbsp;[Estilos de renderização](../map/vector-maps.md#default-map-styles), &nbsp;**Fontes de mapa, &nbsp;Comandos de voz (gravados e TTS), &nbsp;Cache**.  

- ***Meus lugares*** (*amarelo*).  
    Inclui [Favoritos](../personal/favorites.md), &nbsp;[Trilhas](../personal/tracks/manage-tracks.md), &nbsp;[Notas OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Edições OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Histórico](../personal/global-settings.md#history), &nbsp;*Itinerário*.  

- ***Configurações*** (*verde*).  
    Inclui [Perfis](../personal/profiles.md), &nbsp;[Cores](../personal/color-palette-schemes.md) e **Outras** configurações do aplicativo.


#### Visualizando dados {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Toque em qualquer item na aba **Local** para abrir sua lista detalhada. Na parte superior desta lista, um painel visual exibe quanto espaço o tipo de dados selecionado ocupa em relação ao armazenamento total do OsmAnd.

***Ações disponíveis:***

- **Pesquisar**. Encontre dados específicos por nome dentro da pasta selecionada.
- **Menu de três pontos**:  
    ***Selecionar***. Escolha vários itens para ações como *Excluir*, *Desativar* ou *Ativar*.  
    ***Importar***. Acesse o armazenamento do dispositivo para importar arquivos.
- [Opção de classificação](#sorting-options). Classifique os itens por nome, país, data ou tamanho (a disponibilidade depende do tipo de dados).


#### Menu para itens da lista {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Cada item da lista oferece um *menu de três pontos* com opções:

- **Informações**. Visualize informações detalhadas sobre o *[item de dados](#local-data-item-overview)*.
- **Exportar**. Salve dados em um arquivo via *Configurações → Exportar para arquivo*.

***Opções adicionais para mapas:***

- **Desativar**. Desative mapas vetoriais sem excluí-los. Eles permanecem armazenados, mas não são usados para navegação, pesquisa ou roteamento. Reduz a carga no dispositivo e acelera o OsmAnd.
- **Atualizar**. Baixe a versão mais recente do mapa.
- **Renomear**. Personalize o nome do mapa para melhor identificação.
- **Remover**. Exclua o mapa do seu dispositivo.
- **Editar** (para mapas online). Modifique a configuração do mapa online.

#### Menu de itens de fonte de mapa {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Cada item na lista de [Fonte de mapa](../map/raster-maps.md) fornece configurações para gerenciar o mapa raster online armazenado em seu dispositivo. Abra o *menu de três pontos* para acessar as ações disponíveis:

- [Informações](#local-data-item-overview). Exibe detalhes gerais sobre a fonte de mapa selecionada, incluindo formato e data da última atualização.  
- **Calcular tamanho**. Estima o armazenamento ocupado pelos blocos em cache desta fonte de mapa. Se o cache exceder *50MB*, o tamanho pode ser exibido como *≥50MB* em vez de um número exato.
- **Limpar todos os blocos**. Exclui todos os blocos em cache para a fonte de mapa selecionada, liberando armazenamento enquanto mantém a fonte de mapa disponível para uso futuro.  
- **Exportar**. Salva a configuração da fonte de mapa selecionada para backup ou compartilhamento.  
- **Remover**. Exclui a fonte de mapa selecionada. Esta ação não afeta os mapas offline baixados, mas limpa o cache associado.


#### Visão geral do item de dados local {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

Ao visualizar um item de dados local, você vê:

- **Tipo**. O tipo de dados da lista **Local**.
- **Criado**. A data em que o item foi adicionado.
- **Tamanho**. O tamanho do item em MB.

As **Ações** disponíveis dependem do tipo de dados e podem incluir **Desativar**, **Atualizar**, **Renomear**, **Exportar** e **Excluir**.

#### Opções de classificação {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use as opções de classificação para organizar os dados do mapa:

- **Nome (A - Z / Z - A)**. Localize itens em ordem alfabética.
- **Nome do país (A - Z / Z - A)**. Organize mapas geograficamente.
- **Data mais recente primeiro** / **Data mais antiga primeiro**. Veja atualizações ou versões mais antigas.
- **Tamanho maior primeiro** / **Tamanho menor primeiro**. Identifique mapas grandes para liberar espaço de armazenamento.


### Atualizações {#updates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

A aba **Atualizações** permite que você atualize os mapas do OsmAnd mensalmente. Use o botão *Atualizar tudo* para atualizar todos os mapas simultaneamente, ou atualize mapas individuais conforme necessário. Mapas padrão e somente estradas são geralmente lançados duas semanas após o início de cada mês. Para atualizações por hora, verifique o status da sua assinatura [OsmAnd Live](#osmand-live). Se ativado, a seção **Atualizações ao vivo** aparecerá na parte superior da aba, abaixo do indicador de Memória do dispositivo.


### Mapas extras {#extra-maps}

O OsmAnd suporta a transferência de configurações e dados específicos do perfil, incluindo arquivos de renderização, fontes, rotas, mapas e plugins personalizados. Crie uma pasta de mapa personalizada usando um arquivo de plugin `.osf` (um formato `.zip` compactado).

Para importar um arquivo:

1. Localize o arquivo `.osf` no armazenamento do seu dispositivo, mensageiro ou e-mail.
2. Toque para abri-lo com o OsmAnd.
3. O plugin aparecerá na seção **Lista de plugins**, onde poderá ser ativado.
4. Uma pasta correspondente aparecerá na seção **Mapas extras** da aba [Downloads](#downloads).

Leia mais no artigo [**Pacote personalizado**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Compra
OsmAnd Live é um recurso pago.  
:::
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live** fornece atualizações de mapa incrementais e frequentes por meio de [assinatura](../purchases/index.md) ou é gratuito para [colaboradores OSM](#free-for-osm-mappers). As atualizações ocorrem a cada 15 minutos nos servidores OsmAnd e são baixáveis a cada hora, diariamente ou semanalmente. Essas atualizações consomem armazenamento mínimo — cerca de 2-4% do tamanho total do mapa por mês.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Principais recursos:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Atualizações ao vivo**. Gerencie por meio de um botão nas configurações.
- Botão **&#8230; &#124;** (*Android*) / Botão **&#62;** (*iOS*). Abra as configurações do *OsmAnd Live*.
- **Alternador**(*Android*) / Botão **&#43;** (*iOS*). Adicione mapas para *atualizações ao vivo*.
- **<Translate android="true" ids="update_frequency"/>**. Selecione a frequência de atualização do mapa (horária, diária ou semanal).
- **<Translate android="true" ids="update_now"/>**. Inicie a atualização do mapa *OsmAnd Live*.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Tamanho das *atualizações ao vivo*.
- **Botão Lixeira**(*Android*). Exclua todas as *atualizações ao vivo* recebidas para o mapa atual.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gerencie o download de *atualizações ao vivo* por uma conexão Wi-Fi.


### Carimbos de data/hora de atualização {#update-timestamps}

- **Última atualização OSM.**  
    Indica as últimas alterações processadas do OpenStreetMap.
- **Região atualizada.**  
    Mostra quando as atualizações da região específica foram processadas pela última vez.
- **Próxima atualização.**  
    Exibe o horário agendado para a próxima verificação de atualização.


### Limitações do OsmAnd Live {#limitations-of-osmand-live}

Alterações de endereço são suportadas apenas por meio de atualizações mensais.
As estradas atualizadas não possuem detalhes de elevação, afetando os gráficos de gradiente.
Referências de rota excluídas ou alteradas ainda podem aparecer incorretamente.


### Gratuito para Mapeadores OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Os colaboradores do [OpenStreetMap](https://openstreetmap.org/) são elegíveis para downloads ilimitados de mapas e atualizações ao vivo gratuitas. Para se qualificar:
Ative o [plugin de Edição do OpenStreetMap](../plugins/osm-editing.md).
[Faça login](../plugins/osm-editing.md#settings) com seu nome de usuário OSM.
Mantenha pelo menos [**30 edições**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) nos últimos dois meses.

## Artigos relacionados {#related-articles}

- [Perfis (Configurações)](./profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas comuns e soluções {#common-issues-and-solutions}

- Navegação por voz. [(verificar)](../troubleshooting/navigation.md#voice-navigation)
- Como excluir o histórico de pesquisa. [(verificar)](../troubleshooting/general.md#how-to-delete-search-history)
- Para solução de problemas adicionais, visite: [Mapas e Dados](../troubleshooting/maps-data.md)

> *Última atualização: fevereiro de 2025*