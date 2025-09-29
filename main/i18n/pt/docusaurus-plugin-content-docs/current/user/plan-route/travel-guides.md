---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title: Guias de Viagem
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

:::info Recurso pago
Os Guias de Viagem são um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

Os guias de viagem virtuais no OsmAnd oferecem aos usuários informações valiosas, recomendações e dicas. Eles também permitem que os viajantes acessem informações de navegação abrangentes sobre atrações no aplicativo.

Os guias de viagem do OsmAnd são baseados em dados do [Wikivoyage](https://www.wikivoyage.org/), um projeto comunitário semelhante à Wikipédia, onde autores voluntários criam artigos atualizados.
As informações do Wikivoyage incluem os principais fatos sobre um local, transporte, atrações, compras e muito mais.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visualização de guias de viagem Geral](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Como usar {#how-to-use}

- [Baixe](#download-articles) os *Guias de Viagem*.
- Navegue por [artigos](#browse-articles) sobre um país, região, cidade, atração.
    - Alternativamente, [exiba artigos e/ou pontos de guias de viagem no mapa](#travel-routes) usando o menu Configurar mapa.
    - Navegue pelas atrações no mapa, adicione-as aos *[Marcadores de mapa](../personal/markers.md#add--edit-markers)* ou *[Favoritos](../personal/favorites.md#favorite-group-actions)*.
    - Usando o botão *[Ler completo](#manage-as-gpx-track)*, vá para o *[artigo](#travel-article) dentro dos *Guias de Viagem*.
- [Marque](#explore-and-bookmark) artigos para lê-los mais tarde.
- Escolha [pontos](#points) dos artigos para visitar e adicione-os ao mapa do OsmAnd.
- Obtenha mais informações sobre locais para visitar a partir de [artigos da Wikipédia](#combine-with-wikipedia) offline.
- [Crie uma rota](../navigation/setup/route-navigation.md#set-destinations) para atrações turísticas escolhidas ou uma caminhada livre entre pontos.

:::note
Os artigos dos *Guias de Viagem* são armazenados no OsmAnd como trilhas GPX com Waypoints. Depois de adicionar essas trilhas ao mapa (consulte as seções *[Pontos](#points)* ou *[Rotas de viagem](#travel-routes)* deste artigo), você pode gerenciá-las através do menu *[Meus Lugares](../personal/myplaces.md)*.
:::

### Baixar artigos {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menu de download de guias de viagem](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menu de mapas iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Antes de começar a usar os guias de viagem, você precisa baixá-los através do [menu Baixar mapa](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Os artigos são agrupados por regiões: *África, Ásia, Austrália e Oceania, América Central, Europa, América do Norte, Rússia e América do Sul*, para que você não precise baixar livros de viagem para uma cidade ou país separado.
Ao salvar as regiões necessárias em seu dispositivo, você pode navegar pelos artigos com o OsmAnd mesmo quando estiver no exterior ou fora do alcance de sua rede móvel.

:::note
Além de guias para países, regiões ou cidades, você pode encontrar guias para lugares de filmes, livros, jogos de computador, lugares de memória de grandes pessoas e assim por diante.
Existem também guias especializados, como a lista da Rede Global de Geoparques da UNESCO ou os maiores e mais complexos aeroportos internacionais do mundo.
:::

## Navegar por Artigos {#browse-articles}

A tela *Guias de Viagem* consiste em duas partes gerais: um [*campo de pesquisa*](#search) e uma lista de *guias de viagem* com duas abas: *[<Translate android="true" ids="shared_string_explore"/> e <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Você pode alternar entre elas com um único toque na aba.
Ao abrir *Guias de Viagem* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), o OsmAnd mostrará artigos sobre lugares interessantes localizados perto das coordenadas geográficas do centro atual do mapa. Ao tocar no item da lista, o [artigo do Guia de Viagem](#travel-article) é aberto. Na parte inferior da tela, há um botão para a *aba Marcadores*.

### Explorar e Marcar {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tela principal de guias de viagem](@site/static/img/guides/travel_guides_main_screen_1.png) ![Tela principal de guias de viagem 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tela principal de guias de viagem](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Tela principal de guias de viagem 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Na aba **Explorar** ou **<Translate android="true" ids="popular_destinations"/>**, os 30 principais artigos sobre destinos são listados adjacentes ao centro da tela (fora do local). Ao tocar em um item da lista com um título e uma breve descrição do artigo, você pode visualizar o texto completo desse artigo.
Se você tocar no *botão Marcar*, o artigo será salvo para leitura posterior e estará disponível na aba Marcadores. Na aba *Artigos Marcados*, os artigos são organizados à medida que são salvos, com os artigos mais recentes no topo.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Abre [Artigo de viagem](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Move o artigo selecionado para <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Remove o artigo selecionado de <Translate android="true" ids="saved_articles"/>.

### Pesquisar {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

O campo de pesquisa está localizado na parte superior da tela <Translate android="true" ids="shared_string_travel_guides"/>. Se você começar a digitar as primeiras letras de um país, cidade ou lugar famoso, uma lista de artigos aparecerá abaixo do campo de pesquisa. Ao tocar no que você precisa, você pode começar a ler.
Ao lado de cada resultado de pesquisa, são listados os 3 idiomas mais comumente usados nos quais o artigo selecionado pode ser lido. No entanto, artigos populares estão disponíveis em mais idiomas do que os 3 listados.

**Recursos adicionais:**

- Você pode pesquisar atrações culturais especiais, como *turismo de Harry Potter*, *Cidades fantasmas*, *Monarquias* e outras.
- Para excluir o histórico de pesquisa, você precisa usar o [<Translate android="true" ids="shared_string_options"/> botão](#options).

<!--
- A pesquisa é completa apenas quando você clica em &#128269; ou espaço no final da palavra. - não funciona como deveria
-->

### Opções {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de opções de guias de viagem](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

Neste menu, você pode personalizar a aparência dos artigos ao trabalhar offline. OBSERVE que os guias de viagem *[baixados](#download-articles)* não contêm imagens. Elas só aparecem quando você visualiza artigos com uma conexão de Internet ativa.
No menu Opções, você pode escolher se deseja salvar imagens nos artigos visualizados para usá-las quando estiver offline. Você também pode limpar o cache de imagens existente ou excluir o histórico de pesquisa (funciona apenas ao pesquisar em *Guias de Viagem*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. As imagens nos artigos podem ser baixadas para uso offline.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Limpa o cache de imagens para liberar memória.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Limpa o [histórico de pesquisa](#search).

## Artigo de Viagem {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Artigo de guias de viagem](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Você pode abrir um artigo a partir das opções sugeridas na *[aba Explorar](#explore-and-bookmark)* ou usando a opção *[Pesquisar](#search)*. Ao adicionar atrações turísticas chamadas *[Pontos](#points)* de um *artigo do Guia de Viagem* ao mapa do OsmAnd, você também pode abrir o artigo usando o botão *Ler completo* na [seção de descrição](../map/tracks/track-context-menu.md#description-and-info) do waypoint.

Os seguintes controles estão localizados na parte superior da tela:

- Botão para mudar o idioma do artigo. O idioma pode ser selecionado entre as opções disponíveis. O idioma do sistema é usado por padrão.
- Usando o botão &#8942;, você pode compartilhar o artigo com seus amigos. O link abre no aplicativo OsmAnd, o arquivo de guias de viagem apropriado deve ser baixado no dispositivo do destinatário ou no site do [Wikivoyage](https://www.wikivoyage.org/), se o destinatário não tiver o aplicativo OsmAnd ou para dispositivos iOS.
- Tocar na barra de navegação abre o *[Menu de Navegação de Guias de Viagem](#navigation-menu)*.

Na parte inferior da tela estão botões como:

- [Conteúdo](#table-of-contents). Abre o índice do artigo.
- [Pontos](#points). Mostra atrações turísticas relacionadas ao artigo em um mapa.
- [Marcador](#explore-and-bookmark). Permite adicionar um artigo aos marcadores para leitura posterior.


### Menu de navegação {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de conteúdo de guias de viagem](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Para mover de um artigo para outro nos *artigos do Guia de Viagem*, use o **Menu de Navegação**. Você pode acessá-lo tocando no campo de endereço acima da imagem. OBSERVE que os artigos nos Guias de Viagem são agrupados da seguinte forma: *Continente → Região → País → Província (região) → Cidade*.
Se você tocar na seta no canto superior esquerdo da tela, você irá diretamente para a aba *Explorar* ou *Artigos Marcados* (dependendo de qual aba você abriu anteriormente).


### Sumário {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de conteúdo de guias de viagem](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

A maioria dos *artigos de guias de viagem* tem a mesma estrutura de conteúdo: *introdução* (imagens e descrição do local turístico) e *capítulos subsequentes*.

- &nbsp;*Entender*. Detalhes sobre a cultura e os hábitos locais.
- &nbsp;*Chegar*. Detalhes sobre como chegar a alguns lugares e quanto essa rota custará.
- &nbsp;*Ver*. Uma lista de atrações (museus, locais históricos e assim por diante) com descrições completas: preços de ingressos, horários de funcionamento, links úteis e números de telefone.
- &nbsp;*Fazer*. Lugares para passar o tempo.
- &nbsp;*Comprar*. Locais para fazer compras.
- &nbsp;*Comer*. Estabelecimentos de restauração (divididos por orçamento: econômico, médio, luxuoso).
- &nbsp;*Beber*. Bares e cafés.
- &nbsp;*Dormir*. Acomodações divididas por orçamento (econômico, médio, luxuoso).
- &nbsp;*Ir para o próximo*. Lugares mais próximos do Wikivoyage.

### Pontos {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu de pontos de guias de viagem](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menu de pontos de guias de viagem](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

Os *artigos de guias de viagem* geralmente contêm atrações turísticas agrupadas por tópico. Ao tocar uma vez no botão *Pontos* na parte inferior do *[Artigo](#travel-article)*, todas as atrações relacionadas ao tópico (locais para comer, opções de acomodação, aeroportos, lojas, monumentos históricos e assim por diante) serão adicionadas ao mapa e poderão ser *[gerenciadas como uma Trilha](#manage-as-gpx-track)*.

Por padrão, os grupos de atrações são marcados com certos ícones: categorias *Comer e Beber* com uma faca e garfo em um círculo vermelho, *Fazer e Ver* com uma câmera em um círculo verde e outros. Você pode gerenciar grupos de pontos com &#8942; como uma *[pasta de Waypoints](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
Os pontos nos *artigos de viagem* referem-se a waypoints em uma trilha GPX.
Você também pode *[adicionar pontos ao mapa](#travel-routes)* no menu *Configurar mapa*. Você pode exibi-los todos ou selecionar uma categoria específica.
:::


## Rotas de viagem {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Uma forma alternativa de navegar pelos *Guias de Viagem* é exibi-los no mapa usando o menu *Configurar mapa*. Este recurso não se aplica à capacidade fornecida pelo OsmAnd de usar o Wikivoyage, ele se aplica apenas a trilhas. Você pode ler mais em nosso [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Menu de pontos de guias de viagem](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menu de pontos de guias de viagem](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Rotas de viagem e artigos no mapa {#travel-routes-and-articles-on-the-map}

![Menu de pontos de guias de viagem](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menu de pontos de guias de viagem](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Depois de ativar a exibição de *Rotas de viagem* no menu *Configurar mapa*, círculos de cores diferentes aparecerão no mapa. Os laranjas representam trilhas de rota, artigos de rota e alguns waypoints. Toque em uma rota, artigo ou ponto específico e, em seguida, toque no botão *Baixar* (&#9047;), e você poderá [gerenciá-los como uma trilha](#manage-as-gpx-track).

### Guias de Viagem Personalizados {#custom-travel-guides}

Recomendamos que você adicione novos artigos ou edições ao [Wikivoyage](https://en.wikivoyage.org/). Atualizamos os Guias de Viagem a cada 6 meses, e você pode baixar novos artigos. Você também pode criar seu próprio *Livro de Viagem*. Como fazê-lo está descrito na documentação técnica (consulte o artigo *[Criar guia de viagem personalizado](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Coleções de trilhas {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Gerenciar como Trilha GPX {#manage-as-gpx-track}

![Menu de pontos de guias de viagem 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menu de pontos de guias de viagem 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Depois de adicionar *Guias de Viagem* ao mapa, os *Artigos de Viagem* podem ser salvos como uma trilha GPX e gerenciados através do menu *[Meus lugares](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Eles podem ser exibidos no mapa, compartilhados, renomeados, colocados em outra pasta, exportados ou excluídos.

- &nbsp;Em *[Visão Geral](../map/tracks/track-context-menu.md#overview)*, você pode ler uma breve descrição ou abrir o [artigo do Guia de Viagem](#travel-article) tocando no botão *Ler completo*. *Editar* permite corrigir o artigo.
- &nbsp;Não há informações na seção *[Trilha](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, os arquivos GPX dos *Guias de Viagem* contêm apenas waypoints.
- &nbsp;Em *[Pontos](../map/tracks/track-context-menu.md#points--waypoints)* você vê pastas com pontos agrupados por nome (Comprar, Fazer, Beber e assim por diante).
- &nbsp;O botão *[Opção](../map/tracks/track-context-menu.md#options)* executa as mesmas funções que na trilha regular.

:::info
Os *Pontos* são armazenados em um [arquivo GPX](../../technical/osmand-file-formats/osmand-gpx.md) (um formato comumente usado para trilhas) como [Waypoints](../map/point-layers-on-map.md#track-waypoints). O número de pontos (waypoints) contidos na trilha é marcado ao lado do ícone &#128681; no campo da trilha.
No *[menu de contexto da trilha](../map/tracks/track-context-menu.md)* do arquivo GPX, você pode encontrar informações gerais sobre o artigo ao qual esta trilha pertence.
:::

## Combinar com a Wikipédia {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Guias de viagem combinam com a Wikipédia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Guias de viagem combinam com a Wikipédia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Menu de pesquisa de guias de viagem](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

Nos *artigos do Guia de Viagem*, você pode encontrar informações úteis sobre atrações turísticas (informações de contato, links da web, preços e assim por diante). Muitos artigos têm um botão *Wikipédia* que permite abrir um *[artigo da Wikipédia](../plugins/wikipedia.md)* (online ou offline) sobre o local de interesse.

Em alguns casos, a *[aba Marcadores](#explore-and-bookmark)* do OsmAnd solicitará que você baixe a [camada de mapa da Wikipédia](../plugins/wikipedia.md#download-wikipedia-packages) para navegar por artigos relacionados offline.

![Guias de viagem baixam a Wikipédia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTA
O [plugin da Wikipédia](../plugins/wikipedia.md) é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)