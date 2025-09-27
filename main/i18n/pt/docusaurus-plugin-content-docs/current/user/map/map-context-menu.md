---
source-hash: 3e1b165cea4cde57aec3170e4074d5cdef9d0ee2790e533d93987ac6b523addc
sidebar_position: 3
title: Menu de Contexto do Mapa
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

O menu de contexto do mapa fornece informações sobre o objeto selecionado no mapa. Você também pode usá-lo para criar uma rota para o local selecionado. Para abrir o menu de contexto, primeiro, encontre o local desejado no mapa e, em seguida, selecione o objeto com um toque curto ou toque longo ao selecionar qualquer ponto preciso no mapa.


### Selecionar um Objeto (Toque Único) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu de contexto Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu de contexto iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

O **menu de contexto** aparece quando você **toca uma vez** em um objeto marcado no mapa. Este menu de contexto exibe informações essenciais sobre o objeto selecionado, incluindo seu *nome*, *ícone* (conforme representado no mapa), *endereço, distância*, *limites* e *direção* de sua posição atual.  

Você pode selecionar vários tipos de objetos do mapa, como *POIs*, *favoritos*, *paradas de transporte*, *marcadores*, *picos de montanhas* ou outros *objetos do mapa*.

:::note
- Os objetos do mapa selecionados e seus limites correspondem a [**nós**](https://wiki.openstreetmap.org/wiki/Node) ou [**caminhos**](https://wiki.openstreetmap.org/wiki/Way) do OpenStreetMap.
- *A altura dos picos das montanhas é exibida em metros ou pés, dependendo das [unidades de comprimento](../personal/profiles.md#units--formats) selecionadas nas configurações do perfil.*
:::



### Selecionar Qualquer Ponto (Toque Longo) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de contexto toque longo Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu de contexto toque longo iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Quando você **toca longamente** em qualquer lugar do mapa, um **menu de contexto** aparece, fornecendo informações sobre o local selecionado. Isso inclui o endereço, a distância e a direção de sua posição atual.


### Selecionar Rota GPX {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu de contexto da trilha Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Tela de estatísticas da trilha iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Tocar em uma [trilha GPX](../map/tracks/index.md) no mapa abre o [menu de contexto da trilha](../map/tracks/track-context-menu.md), onde você pode acessar opções adicionais relacionadas à trilha.



### Rotas, Pistas de Esqui e Trilhas {#routes-and-trails}

![Pistas de Esqui e Trilhas de MTB](@site/static/img/map/ski_mtb.png)  ![Pistas de Esqui e Trilhas de MTB](@site/static/img/map/ski_mtb_2.png)

Você pode tocar em elementos do mapa, como **pistas de esqui**, **rotas de mountain bike (MTB)** e **trilhas de moto suja**, para abrir seu menu de contexto com informações detalhadas. Consulte o [artigo Rotas](../map/routes.md#actions-with-routes) para obter mais informações.



### Ocultar Menu de Contexto {#hide-context-menu}

Para fechar o **menu de contexto**:

- Toque em qualquer *área vazia* no mapa para evitar reabrir o menu.
- Arraste o menu *para baixo* a partir do topo.


## Detalhes {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu de contexto Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu de contexto iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Para obter informações mais detalhadas sobre um objeto, toque no botão **Detalhes** no menu de contexto ou deslize o painel para cima para expandi-lo.


### Informações do Objeto {#object-info}

O painel **Informações do Objeto** fornece detalhes adicionais sobre o objeto selecionado. Você pode tocar em qualquer entrada para copiar as informações para a área de transferência.  

Os detalhes disponíveis incluem:

- [Nomes alternativos](#alternative-names)
- [Coordenadas](#coordinates)
- [Dentro de áreas](#polygon-information)
- [POIs próximos / Wikipedia](#nearby-pois--wikipedia)
- [Rotas de Transporte Público para paradas](#public-transport-routes)
- [Favoritos / Pontos de trilha do mesmo grupo](#favorites--track-points-from-the-group)
- [Link do OpenStreetMap](#openstreetmap-link)
- [Fotos online](#online-photos)

Além disso, o painel pode incluir [Detalhes do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), como:

- [Site](https://wiki.openstreetmap.org/wiki/Key:website)
- [Número de telefone](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Horário de funcionamento](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Taxa](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Acessibilidade](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Largura](https://wiki.openstreetmap.org/wiki/Key:width) / [Altura](https://wiki.openstreetmap.org/wiki/Key:height)


### Nomes Alternativos {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nomes alternativos Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Nomes alternativos Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nomes alternativos Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Nomes alternativos Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

O OsmAnd exibe **nomes de POI adicionais** no *menu de contexto do mapa*, priorizando o nome no *idioma de exibição* ou na lista de idiomas preferidos do sistema. Se várias traduções estiverem disponíveis, elas são agrupadas em tags categorizadas, como *nome, marca, operador* ou *POIs próximos*.  

Recursos de exibição de nomes alternativos:

- Traduções adicionais podem ser acessadas por meio de uma *lista suspensa*.

- Os nomes são categorizados em diferentes grupos, como a *lista de nomes em outros idiomas*, *Regional*, *Local*, *Nacional*, *Internacional*, *Curto*, *Antigo*, *Oficial* e *Nomes alternativos*.

- Outras categorias incluem *tradução específica da região* ou *configurações padrão*.

- Se uma tradução específica *não estiver disponível*, o OsmAnd usa o nome **local** por padrão para garantir precisão e consistência em regiões multilíngues.


### Dentro da área {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Informações do polígono Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informações do polígono Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

O recurso **Dentro da Área** lista as **áreas** em que um objeto está localizado. Isso inclui características geográficas, limites administrativos, áreas de uso da terra, características naturais e outras áreas categorizadas. Uma *lista de polígonos circundantes*, classificados *do menor para o maior* com base no tamanho da área.

### Coordenadas {#coordinates}

|Formato das coordenadas| |
|:------|:------|
| <ul><li>DDD.DDDDD (Graus Decimais Simples)</li><li>DDD.DDDDD (N/S, E/W vírgula)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Padrão](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Código de Localização Aberta](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 e CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Link da Web do OsmAnd](https://osmand.net/map)</li><li>[Link da Web do OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordenadas](@site/static/img/map/map_context_menu_Coordinates.png) |

No menu de contexto, você pode encontrar [coordenadas geográficas](../search/search-coordinates.md#coordinate-format) de um ponto em vários formatos e também links compartilháveis do OsmAnd e [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (a última opção está disponível apenas quando o [plugin de edição do OpenStreetMap](../plugins/osm-editing.md) está ativado). Se você expandir a seção de coordenadas e tocar longamente em qualquer linha da lista, seus valores serão copiados automaticamente para a área de transferência (**Android**) ou a opção *Copiar* ficará disponível na mensagem pop-up (**iOS**).  

O link da Web do OsmAnd pode ser reconhecido automaticamente pelo OsmAnd (exemplo: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Tanto o OsmAnd quanto os [links do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) são abertos nos sites correspondentes com um marcador de pino para o local de interesse.  


### POIs Próximos / Wikipedia {#nearby-pois--wikipedia}

![Artigos da Wikipedia próximos](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Artigos da Wikipedia próximos](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Essas seções exibem [artigos da Wikipedia](../plugins/wikipedia.md) ou [Pontos de Interesse](../map/point-layers-on-map.md#points-of-interest-pois) próximos com *<Translate android="true" ids="shared_string_show_on_map"/>* e *<Translate android="true" ids="search_more"/>* para exibir e [pesquisar](../search/search-poi.md) todos os outros POIs e artigos da Wikipedia.

Tocar em *POIs próximos / artigos da Wikipedia* abre uma lista de pontos (POIs ou Wikipedia). Um toque em um desses pontos de uma lista de pontos move o mapa para este ponto (POIs ou Wikipedia) com a abertura do menu de contexto do mapa do ponto.

> **NOTA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) aparecerá apenas se você tiver baixado anteriormente mapas especiais com [artigos da Wikipedia para esta área](../plugins/wikipedia.md#download-wikipedia-packages)*.


### Rotas de Transporte Público {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Rotas de transporte público Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas de transporte público iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Informações exibidas sobre rotas de transporte público para a parada de transporte escolhida. Informações sobre o menu de contexto do transporte público e ações com ele, leia no [artigo](../map/public-transport.md#transport-routes-context-menu).


### Favoritos / Pontos de Trilha do Grupo {#favorites--track-points-from-the-group}

![Lista de favoritos](@site/static/img/map/favorite_list_android.png) ![Lista de favoritos completa](@site/static/img/map/favorite_list_full_android.png)

Esta é uma lista de todos os pontos em um grupo para um Favorito ou Ponto de Referência. Ao tocar, toda a lista de pontos de um grupo se expande, ao tocar em um ponto da lista, o mapa se move para o ponto selecionado.




### Descrição do Artigo {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista de descrição](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista de descrição](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Esta parte contém uma parte da descrição do [artigo da Wikipedia](../plugins/wikipedia.md), [Favorito](../personal/favorites.md) ou descrição do Ponto de Referência, ao tocar você pode abrir a descrição completa.


### Link do OpenStreetMap {#openstreetmap-link}

![Link OSM](@site/static/img/map/context_menu_osm_link.png) ![Link OSM](@site/static/img/map/context_menu_osm_link_1.png)

O link do OpenStreetMap fornece um link direto para o objeto do OpenStreetMap, onde você pode encontrar informações completas sobre ele:  
[nó](https://wiki.openstreetmap.org/wiki/Node) ou [caminho](https://wiki.openstreetmap.org/wiki/Way).


### Fotos Online {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu de contexto de fotos online Android](@site/static/img/map/images_nearby_1_andr.png)
![Menu da galeria Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu de contexto de fotos online iOS](@site/static/img/map/online_photo_ios.png)
![Menu da galeria iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Ao tocar em um Local Popular no mapa, a seção **Fotos Online** no *menu de contexto de POIs* exibe pré-visualizações de imagens provenientes da [Wikipedia](https://www.wikipedia.org/) e do [Wikimedia Commons](https://www.wikimedia.org/).

Tocar em uma foto abre a visualização da **Galeria**, onde você pode:

- Navegar por até 100 imagens por local
- Visualizar metadados da imagem (*autor*, *licença*, *fonte*)
- Realizar ações: **Compartilhar**, **Abrir no navegador**, **Baixar**

> *No iOS, tocar longamente em uma imagem abre um menu de contexto com ações rápidas.*

Para mais informações, consulte: [Fotos Online](https://osmand.net/docs/user/map/popular_places#online-photos) e [Visualização da Galeria](https://osmand.net/docs/user/map/popular_places#gallery)


### Imagens de Nível de Rua {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Imagens de nível de rua Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Imagens de nível de rua iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

O OsmAnd suporta a integração com o [Mapillary](https://www.mapillary.com/), uma plataforma global para imagens de nível de rua colaborativas. Este recurso permite visualizar e explorar sequências de fotos do mundo real diretamente no mapa.

As imagens do Mapillary aparecem como ícones de fotos direcionais, alinhados com a estrada ou caminho onde foram capturadas. Isso pode ajudá-lo a entender melhor seus arredores, especialmente em áreas desconhecidas.

Você pode:

- Usar o botão **Explorar** para abrir o visualizador do Mapillary e navegar pelas imagens de nível de rua próximas.
- Tocar no botão **Adicionar Fotos** para contribuir com suas próprias fotos para a plataforma Mapillary.

> *Saiba mais sobre como ativar e usar este recurso no [guia do plugin Mapillary](../plugins/mapillary.md).*


### * Nota de Áudio/Vídeo {#-audiovideo-note}

<InfoAndroidOnly />

![Lista de imagens](@site/static/img/map/image_list_android.png) ![Lista de vídeos](@site/static/img/map/video_list_android.png)

Informações de [Notas de Áudio/Vídeo](../plugins/audio-video-notes.md), como data, coordenadas, pré-visualização e outras, estão disponíveis no menu **Detalhes**. Você pode abrir as notas em software secundário tocando no botão **Reproduzir / Mostrar** no menu de contexto da nota.


## Ações {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu de ações Android](@site/static/img/map/actions_menu_android.png) ![Menu de ações adicionais Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu de ações iOS](@site/static/img/map/actions_menu_ios.png)  ![Menu de ações adicionais iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

É um conjunto de manipulações específicas que podem ser realizadas em um ponto ou objeto. Este menu é dividido em duas partes: a seção visível consiste em no máximo 3 ações e outras ações são acessíveis pelo botão *Ações*. Você pode personalizar (*Android*) a ordem das ações em [Configurações gerais](#customize).


### Adicionar / Editar Favorito {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Adicionar Editar favorito Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Adicionar Editar favorito iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

No menu de contexto, há opções para **adicionar** ou **editar** o ponto / objeto selecionado à [lista de favoritos](../personal/myplaces.md).

- Para **Adicionar**, você precisa selecionar um ponto / objeto, tocar no ícone *Estrela* (com a assinatura Adicionar) e inserir todas as informações necessárias.  

- Para **Editar** informações sobre o ponto favorito, você precisa ativar *Mostrar no mapa* (*Menu → Meus lugares → Favoritos*), em seguida, pressionar nele e no menu de contexto, em vez do ícone *Estrela*, aparecerá o ícone *Lápis* (com a assinatura Editar).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - adiciona um ponto selecionado à lista de favoritos.


### Adicionar / Editar Marcador {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Adicionar Editar marcador Android](@site/static/img/map/add_marker_android.png) ![Ação Passar marcador Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Adicionar Editar marcador iOS](@site/static/img/map/add_marker_ios.png)  ![Ação Restaurar marcador Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

É possível marcar um ponto ou um objeto para facilitar o planejamento da navegação. Basta tocar no ícone da **bandeira** no menu (*Android*), **seta** (*iOS*) - exibe a direção e a distância até o ponto selecionado a partir da sua localização atual.

Ações:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Coloca um novo marcador no ponto selecionado.
- **Marcar como passado** (*Android*) / *Descartar* (*iOS*). Desativa o marcador e o coloca no Histórico.
- **Tornar ativo** (*Android*). Move o marcador para a posição superior (no painel superior).
- **Restaurar marcador** (*Android*). Move o marcador do Histórico para a lista ativa.

Leia mais sobre [marcadores aqui](../personal/markers.md).


### Compartilhar {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versões até Android 14 | 14+ Android |
|:------------|:---------------|
| ![Ação Compartilhar Android](@site/static/img/map/action_share_1_andr.png) | ![Ação Compartilhar Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Compartilhar iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

O aplicativo OsmAnd permite que você **<Translate android="true" ids="shared_string_share"/>** *Minha Localização* ou qualquer local selecionado no mapa com mensageiros, e-mails ou mídias sociais.  

Opções disponíveis para compartilhar a localização:

- ***Enviar***. Envia texto através de aplicativos disponíveis em seu dispositivo. Inclui todas as informações sobre a localização: nome da Minha localização ou o nome do POI selecionado, endereço, coordenadas e geolocalização como um link.
- ***Copiar***. Copia todas as informações de localização (nome da Minha localização ou nome do POI selecionado, endereço, coordenadas e geolocalização como um link) para a área de transferência.  
- ***Copiar endereço***. Copia apenas as informações de endereço para a área de transferência.
- ***Copiar nome do POI***. Copia apenas o nome do POI ou o endereço se não houver nome para a área de transferência.
- ***Copiar coordenadas***. Copia apenas as informações de coordenadas para a área de transferência.
- ***geo***. Abre uma lista de aplicativos disponíveis que suportam geolocalizações. <!-- (informações sobre [URLs geo Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-code*** (*Android*). Gera um link para o local selecionado em um código QR.

<!--
- ***Salvar Imagem*** (*iOS*) - salva uma captura de tela com mapa e ponto selecionado na galeria de imagens.
- ***Atribuir a Contato*** (*iOS*) - cria um ícone para o contato escolhido a partir da captura de tela do mapa.
- ***Imprimir*** (*iOS*) - abre as Opções de Impressora para imprimir a captura de tela do mapa.
- ***Salvar em arquivos*** (*iOS*) - salva a captura de tela do mapa no iCloud Drive ou no armazenamento do seu dispositivo. -->


### Direções Para / De {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Direções Android](@site/static/img/map/action_directions_android.png)

![Múltiplas Direções Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Direções iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Para iniciar a navegação ou o planejamento de rotas, você precisa selecionar o destino primeiro com [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Caso você já tenha um ponto de destino, o menu sugerirá que você substitua o ponto de destino ou o insira como outro ponto intermediário ou inicial.

Também é possível selecionar *De* Destino primeiro através do menu de contexto do mapa (<Translate android="true" ids="context_menu_item_directions_from"/>).

Leia mais sobre [navegação aqui](../navigation/setup/route-navigation.md).

:::note Toque em Iniciar navegação
Se você tocar em **Iniciar navegação** - o ponto *De* será descartado, pois o aplicativo entra no modo de navegação. Para preservar uma rota, não toque em *Iniciar navegação* e [**deslize para baixo**](#hide-context-menu) o menu *Preparação da rota*.
:::


### Pesquisar Próximo {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Pesquisar Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Pesquisar iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Com esta ação do menu de contexto, é possível pesquisar em torno de um local específico no mapa.  

Leia mais sobre a funcionalidade de [pesquisa](../search/index.md).


### Evitar Estrada {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Evitar estrada no mapa Android](@site/static/img/map/action_avoid_android.png) ![Descartar estrada evitada Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evitar estrada no mapa iOS](@site/static/img/map/avoid_route_ios_1.png) ![Descartar estrada evitada iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Usando o menu de contexto do mapa, você pode adicionar uma estrada específica à lista de estradas não utilizadas para roteamento. Isso afetará a [preparação da rota](../navigation/setup/route-navigation.md).  
Para excluir estradas previamente selecionadas da *[lista de estradas a evitar](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, toque em um sinal, escolha *Remover* (**Android**) ou *Descartar* (**iOS**).

:::note
A função de evitar estradas é global e afeta todos os *[tipos de roteamento](../navigation/routing/osmand-routing.md#routing-types)* (exceto *[roteamento online](../navigation/routing/online-routing.md)*).  
:::


### Alterar Posição do Objeto {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Alterar posição Android](@site/static/img/map/action_change_position_android.png)

![Ação Alterar posição UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Alterar posição iOS](@site/static/img/map/action_change_position_ios.png)

![Ação Alterar posição UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Quase todo objeto criado pelo usuário é móvel, ou seja, Marcador, Favorito, POI Criado, Nota de Áudio/Vídeo ou Ponto de Referência de Trilha. Primeiro, selecione um objeto no mapa e, em seguida, use o menu *<Translate android="true" ids="change_markers_position"/>* para movê-lo para um novo local.


### Planejar uma Rota {#plan-a-route}

![Ação Planejar uma rota Android](@site/static/img/map/action_plan_route_android.png)

Você pode iniciar o planejamento de uma rota a partir de um ponto selecionado através do menu de contexto do objeto.

Leia mais sobre a ferramenta [Planejar uma rota](../plan-route/create-route.md).


### Atualizar / Baixar Mapas Online {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Baixar mapa online Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Baixar mapa online iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Para atualizar ou baixar mapas online (tiles) em um local específico, você pode usar o menu de contexto do objeto:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* e para *Atualizar*, vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* e *<Translate ios="true" ids="update_tile"/>*.  

Por favor, leia a [instrução completa](../map/raster-maps.md#download--update-tiles).  


### Atualizar / Baixar Mapas Vetoriais {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Baixar mapa vetorial Android](@site/static/img/map/action_download_vector_map_android.png)

![Selecionar mapa vetorial mundial no Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Baixar mapa vetorial iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Selecionar mapa vetorial no iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Caso não haja mapa offline presente no local selecionado, por exemplo, o menu de objeto do mapa foi aberto via Pesquisa ou via Favorito específico, então o menor mapa offline possível será sugerido para [download](../start-with/download-maps.md#select-on-the-map).  

**iOS**. Se você já [baixou](../map/map-context-menu.md) mapas OsmAnd (vetoriais ou de terreno), é possível atualizá-los via menu de contexto. Você precisará selecionar a região no mapa primeiro - toque em qualquer local no zoom mundial 3-7.  

> **NOTA**. *Se você abriu o menu de contexto para a região do mapa (a região está destacada), você poderá ver ***<Translate android="true" ids="rendering_category_details"/>*** sobre ela: tipo e tamanho de um mapa disponível, link para uma página da Wikipedia, idioma, população e outros.*


### * Adicionar / Excluir Ponto de Estacionamento {#-add--delete-parking-point}

:::note
Para adicionar/excluir pontos de estacionamento, ative o [**plugin de posição de estacionamento**](../plugins/parking.md) do OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Estacionamento Android](@site/static/img/map/action_parking_android.png)

![Ação Excluir Estacionamento Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Estacionamento iOS](@site/static/img/map/action_parking_ios.png)

![Ação Excluir Estacionamento iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Qualquer local selecionado no mapa pode ser marcado como [uma posição de estacionamento](../plugins/parking.md). Para excluir a posição de estacionamento, você pode abrir o menu de contexto associado ao local de estacionamento.


### * Adicionar / Editar Ponto de Referência da Trilha {#-add--edit-track-waypoint}

:::note
Para adicionar/editar pontos de trilha, ative o [**plugin de gravação de viagem**](../plugins/trip-recording.md) do OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Ponto de Referência Android](@site/static/img/map/action_waypoint_android.png)

![Selecionar Trilha para adicionar Ponto de Referência Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Ponto de Referência iOS](@site/static/img/map/action_waypoint_ios.png)

![Selecionar Trilha para adicionar Ponto de Referência iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Você pode adicionar pontos de referência a uma trilha gravada ou à gravação de trilha atual usando o menu de contexto do mapa.  

- Selecione um local no mapa com um [toque longo](../map/map-context-menu.md#select-any-point-long-tap).
- No *menu de contexto do mapa* que se abre, escolha *Ações → Adicionar ponto de referência da trilha*.
- A lista exibe as [trilhas](../map/tracks/index.md#display-tracks-on-the-map) gravadas e mostradas no mapa, bem como a [gravação de trilha atual](../plugins/trip-recording.md), à qual você pode adicionar o ponto de referência selecionado.
- Você pode adicionar pontos de referência a uma trilha que ainda não está ativa para gravação, caso em que a trilha inativa muda do *estado Inicial* para o *estado Retomar*.
- [Preencha](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) os dados necessários e salve o ponto de referência.
- Você pode configurar as [Ações Rápidas](../widgets/quick-action.md) adicionando um ponto de referência ao *Adicionar ponto de referência da trilha*.


### * Criar / Modificar POI {#-create--modify-poi}

:::note
Para adicionar criar/modificar POIs, ative o [**plugin de Edição OSM**](../plugins/osm-editing.md) do OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Com o plugin de Edição OSM, você pode criar e modificar a maioria dos POIs presentes no [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [cria um novo POI](../plugins/osm-editing.md#create--modify-poi) no local selecionado.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifica o POI selecionado](../plugins/osm-editing.md#create--modify-poi).


### * Abrir Nota OSM {#-open-osm-note}

:::note
Para abrir a nota OSM, ative o [**plugin de Edição OSM**](../plugins/osm-editing.md) do OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ação Nota Android](@site/static/img/map/action_note_android.png)

![Ação Adicionar Nota Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ação Nota iOS](@site/static/img/map/action_note_ios.png)

![Ação Adicionar Nota iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Você pode **relatar** erros de dados do mapa em um local específico para a [comunidade OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Por favor, siga as [diretrizes](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) e adicione comentários apropriados a um problema.


### * Comentar / Fechar Nota OSM {#-comment--close-osm-note}

:::note
Para comentar/fechar a nota OSM, ative o [**plugin de Edição OSM**](../plugins/osm-editing.md) do OsmAnd.
:::

![Comentar Nota OSM Android](@site/static/img/map/action_comment_note_android.png) ![Reabrir Nota OSM Android](@site/static/img/map/action_reopen_note_android.png)

Você pode [comentar](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [resolver](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) e reabrir
Notas do OpenStreetMap através do menu de contexto do objeto.


### * Carregar POI / Nota OSM {#-upload-poi--osm-note}

:::note
Para carregar POI / nota OSM, ative o [**plugin de Edição OSM**](../plugins/osm-editing.md) do OsmAnd.
:::

![Carregar POI Android](@site/static/img/map/action_poi_upload_android.png) ![Carregar Nota OSM Android](@site/static/img/map/action_note_upload_android.png)

Caso você use o *modo offline* para adicionar/editar POI ou Nota OSM, você precisará carregar as alterações para o OpenStreetMap. Por padrão, o *modo offline* está ativado para evitar alterações acidentais no banco de dados público. Você pode carregar ou excluir alterações através do menu de contexto do objeto criado.


### * Gravar Nota AV {#-record-av-note}

<InfoAndroidOnly />

:::note
Para gravar notas de áudio/vídeo, ative o [**plugin de Notas de Áudio/Vídeo**](../plugins/audio-video-notes.md) do OsmAnd.
:::

![Ação Áudio-Vídeo Android](@site/static/img/map/action_av_note_android.png)

Grava ou tira uma nota de mídia em um ponto selecionado no mapa.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - faz uma [nota de áudio](../map/point-layers-on-map.md#-audio--video-points-android) no ponto selecionado (cria um novo ponto na sobreposição com ícone de áudio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - faz uma [nota de vídeo](../map/point-layers-on-map.md#-audio--video-points-android) no ponto selecionado (cria um novo ponto na sobreposição com ícone de vídeo).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - faz um [ponto de foto](../map/point-layers-on-map.md#-audio--video-points-android) no mapa.


## Personalizar {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Menu de contexto do mapa Personalizar](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Menu de contexto do mapa Personalizar](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Menu de contexto do mapa Personalizar](@site/static/img/map/map_context_menu_customize_3.png)

Você pode alterar a ordem ou ocultar itens do menu *Ações* no *menu de contexto do mapa*. Um total de 16 ações são sugeridas.  

- Você pode mover as três ações mais úteis para o topo da lista de *Ações principais*.
- O restante do menu pode ser personalizado para cada perfil separadamente nas seções *Ações adicionais* e *Ocultas*.  

Tipos de ações disponíveis:

- **<Translate android="true" ids="main_actions"/>**. A seção tem apenas 4 botões, três dos quais podem ser personalizados, e Ações, que permanece inalterada.  
- **<Translate android="true" ids="additional_actions"/>**. Você pode acessar essas ações tocando no botão *Ações*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Mover ações para esta seção não as impede de funcionar. Elas simplesmente não aparecem no menu Ações.  


## Artigos Relacionados {#related-articles}

- [Mapas Vetoriais (Estilos de Mapa)](./vector-maps.md)
- [Mapas Raster (Online / Offline)](./raster-maps.md)
- [Pontos no mapa](./point-layers-on-map.md)
- [Menu de contexto de trilhas](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)