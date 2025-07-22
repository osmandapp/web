---
source-hash: 5920278abcfe315d7fbfdbeb177097e48bdb3e0b7a6127b1def7c80cbfc2a59a
sidebar_position: 8
title: Locais Populares
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


## Visão Geral {#overview}

O recurso **Locais Populares** no OsmAnd destaca pontos de referência e atrações notáveis usando dados abertos estruturados do [Wikidata](https://www.wikidata.org) e da [Wikipedia](https://www.wikipedia.org/). Ele ajuda os usuários a explorar destinos conhecidos com descrições multilíngues e fotos.

Cada local incluído neste recurso está vinculado a um **ID do Wikidata**, o que permite ao OsmAnd exibir nomes verificados, visualizar imagens e links para artigos da Wikipedia. Esta ferramenta **não** mostra todos os pontos do OpenStreetMap (OSM). Ela se limita a POIs com referências do Wikidata.

Atualmente, o banco de dados selecionado inclui aproximadamente **50.000 a 150.000 locais de alta classificação** globalmente, selecionados entre mais de **1 milhão** de objetos Wikidata + OSM.

:::note
*Esta é a primeira versão do recurso Locais Populares. Feedback é bem-vindo no [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Locais populares](@site/static/img/map/popular_places/popular_places.png) ![Locais populares](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Fontes de Dados

Os **Locais Populares** são baseados em conteúdo estruturado do [Wikidata](https://www.wikidata.org) e da [Wikipedia](https://www.wikipedia.org/).

Apenas POIs com um **ID do Wikidata** vinculado são exibidos. Esses IDs conectam objetos do mapa a nomes, descrições e imagens verificados.

Você pode visualizar o link do Wikidata diretamente no [Menu de Contexto do Mapa](../map/map-context-menu.md). Tocar na tag do Wikidata abre a página completa do objeto no site do Wikidata.

Saiba como encontrar um ID do Wikidata: [Wikipedia: Encontrando um ID do Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Como Usar {#how-to-use}

<InfoAndroidOnly/>

O recurso **Locais Populares** inclui uma lista selecionada de pontos de referência próximos e uma camada de POIs baseados na Wikipedia no mapa.

Existem duas maneiras principais de acessar este recurso:

- **Versão gratuita**  
  Acesse via [Pesquisa](#explore-in-search) para explorar locais próximos na visualização de lista.  
  *<Translate android="true" ids="android_button_seq"/>*. Vá para: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Versões pagas** *(Maps+ e OsmAnd Pro)*  
  Ative a sobreposição visual em [Configurar Mapa](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  Neste modo, POIs populares aparecem diretamente no mapa com miniaturas de visualização e conteúdo da Wikipedia.

  Você pode alternar entre fontes da Wikipedia **online** e **offline** nas configurações de sobreposição. Saiba mais em [Ativar Camada](#enable-layer).


## Explorar na Pesquisa {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Modo Explorar](@site/static/img/map/popular_places/popular_places_search.png)  
![Modo Explorar](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

A seção **<Translate android="true" ids="popular_places_nearby"/>** exibe uma lista rolável de pontos de referência de alta classificação perto da sua localização atual. Cada item inclui:

- Nome do local.
- Breve descrição.
- Tag de categoria de POI.
- Distância e direção.
- Imagem em miniatura (se disponível).

Toque em **Mostrar Tudo** para ver a lista completa, ou em **Mostrar no Mapa** para exibir todos os POIs listados no mapa.

Tocar em qualquer local abre o [menu de contexto do POI](./map-context-menu.md), onde você pode visualizar fotos e acessar [conteúdo da Wikipedia](../plugins/wikipedia.md) relacionado.

:::tip
O Modo Explorar baseado em pesquisa funciona **apenas online** na versão gratuita.  
Para usá-lo **offline**, você precisa de uma assinatura [Maps+ ou OsmAnd Pro](../purchases/android.md) e mapas da [Wikipedia](../plugins/wikipedia.md) baixados.
:::


## Ativar Camada {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menu de locais populares](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

O recurso **Locais Populares (Wikipedia)** está disponível no [menu Configurar Mapa](./configure-map-menu.md). Para exibir locais populares diretamente no mapa, ative a camada de POI com dados da Wikipedia usando imagens do Wikidata.

Antes de usar este recurso:

- Certifique-se de que o [Plugin da Wikipedia](../plugins/wikipedia.md) esteja ativado.
- Baixe os dados da Wikipedia para sua região se quiser usá-los offline.

### Opções de Camada

Uma vez ativadas, as seguintes opções ficam disponíveis:

- **<Translate android="true" ids="poi_osmwiki"/>** – Ativar/desativar POIs da Wikipedia no mapa.

- **Fonte do POI** – Alternar entre:
  - *Modo offline* (artigos da Wikipedia devem ser baixados).
  - *Modo apenas online* (usa dados e imagens ao vivo).

- **<Translate android="true" ids="shared_string_language"/>** – Selecione o idioma para as descrições da Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Mostrar miniaturas de imagens do Wikidata ao lado dos POIs.

Tocar em um POI no mapa abre o [menu de contexto do POI](./map-context-menu.md), onde você pode visualizar [fotos online](#online-photos) e acessar [artigos da Wikipedia](../plugins/wikipedia.md) vinculados.


## Fotos Online {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Menu de contexto de fotos online Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu de contexto de fotos online iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Esta é uma seção dentro do [menu de contexto do POI](./map-context-menu.md) que exibe uma pré-visualização de fotos do Local Popular (Wikipedia) selecionado. Você pode rolar horizontalmente para navegar pelas fotos disponíveis, ou tocar em qualquer imagem para abri-la no [modo de tela cheia](#gallery).

Saiba mais sobre opções adicionais na seção [Ações](#actions) e [Galeria](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Ações {#actions}

No menu de Contexto do Mapa Como acessar:

- Toque no botão **Mostrar Tudo** (Android) / **Ver Tudo** (iOS) para abrir a [galeria](#gallery) no modo de tela cheia, onde você pode deslizar por todas as fotos disponíveis para o local selecionado.

- Toque em qualquer foto para visualizá-la em [tela cheia](#gallery) e acessar as ações disponíveis:  
  **Compartilhar**, **Detalhes**, **Abrir no navegador** e **Baixar**.


### Galeria {#gallery}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Menu da Galeria – Android](@site/static/img/map/gallery_menu_android.png)
![Menu da Galeria – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu da Galeria – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menu da Galeria – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


O **Menu da Galeria** pode exibir até **100 imagens** relacionadas ao ponto de interesse selecionado. Você pode deslizar por todas as fotos disponíveis. Tocar brevemente em uma foto abre uma visualização detalhada mostrando: *Nome*, *Data de adição*, *Autor*, *Licença*  

Você também pode realizar as seguintes ações em cada foto:

- **Compartilhar**  
  Compartilhe a imagem selecionada usando qualquer aplicativo compatível instalado em seu dispositivo (por exemplo, mensagens, e-mail ou mídia social). O conteúdo compartilhado inclui a imagem e seu link de origem (se disponível).

- **Detalhes**  
  Abra uma visualização detalhada mostrando metadados sobre a imagem, incluindo: *Nome*, *Data de adição*, *Autor*, *Licença*, *Fonte* e *Link direto*

- **Abrir no navegador**  
  Inicie a página de origem da imagem (geralmente no [Wikimedia Commons](https://commons.wikimedia.org/)) em seu navegador padrão. Isso permite que você visualize a imagem completa, informações de licenciamento e conteúdo relacionado.

- **Baixar**  
  Salve a imagem no armazenamento do seu dispositivo. A imagem baixada pode ser encontrada na pasta padrão de Downloads do seu dispositivo e acessada offline.


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

A versão Android não inclui um menu adicional para ações de fotos.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Opções do Menu de Contexto](@site/static/img/map/gallery_menu_ios_3.png)

No **iOS**, pressionar e segurar uma foto abre um menu de contexto com ações adicionais:

- **Detalhes**  
- **Abrir no navegador**  
- **Baixar**

**Botões**:

- O botão **Compartilhar** permite que você compartilhe rapidamente a imagem selecionada.  
- O **menu de três pontos** fornece acesso a ações extras, incluindo visualização de detalhes, abertura da fonte em um navegador ou download da imagem.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Android – Visualização de Detalhes](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Visualização de Detalhes](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

A tela **Detalhes** fornece metadados completos para a foto selecionada, incluindo: *Nome*, *Data de adição*, *Autor*, *Licença*, *Fonte* e *Link direto*


## Artigos Relacionados

- [Menu de Contexto do Mapa](./map-context-menu.md)
- [Configurar Mapa](./configure-map-menu.md)
- [Pesquisar POI](../search/search-poi.md)
- [Plugin da Wikipedia](../plugins/wikipedia.md)


> *Última atualização: Julho de 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->