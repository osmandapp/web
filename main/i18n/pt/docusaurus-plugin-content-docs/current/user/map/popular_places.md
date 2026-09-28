---
source-hash: d79ba640b8c7960fdd61ed60a28ffe7043b5c8681f355388f3776b707af3a2af
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

## Visão Geral {#overview}

:::tip Purchase
Locais Populares é um [recurso pago](../purchases/index.md).  
:::

O recurso **Locais Populares** no OsmAnd destaca pontos de referência e atrações notáveis usando dados abertos estruturados do [Wikidata](https://www.wikidata.org) e da [Wikipedia](https://www.wikipedia.org/). Ele ajuda os usuários a explorar destinos conhecidos com descrições e fotos multilíngues.

Cada local incluído neste recurso está vinculado a um **ID do Wikidata**, o que permite ao OsmAnd exibir nomes verificados, visualizar imagens e links para artigos da Wikipedia. Esta ferramenta **não** mostra todos os pontos do OpenStreetMap (OSM). Ela se limita a POIs com referências do Wikidata.

Atualmente, o banco de dados curado inclui aproximadamente **50.000 a 150.000 locais de alta classificação** globalmente, selecionados de mais de **1 milhão** de objetos Wikidata + OSM.

:::note
*Esta é a primeira versão do recurso Locais Populares. O feedback é bem-vindo no [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Popular places](@site/static/img/map/popular_places/popular_places.png) ![Popular places](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


## Fontes de Dados {#data-sources}

**Locais Populares** são baseados em conteúdo estruturado do [Wikidata](https://www.wikidata.org) e da [Wikipedia](https://www.wikipedia.org/).

Apenas POIs com um **ID do Wikidata** vinculado são exibidos. Esses IDs conectam objetos do mapa a nomes, descrições e imagens verificados.

Você pode visualizar o link do Wikidata diretamente no [Menu de Contexto do Mapa](../map/map-context-menu.md). Tocar na tag do Wikidata abre a página completa do objeto no site do Wikidata.

Imagens e outro conteúdo baseado no Wikidata nos Locais Populares são atualizados em um cronograma e podem não aparecer imediatamente após alterações no Wikidata ou no Wikimedia Commons. Frequência de atualização atual: duas vezes por mês — nos dias **10** e **20**.

Saiba como encontrar um ID do Wikidata: [Wikipedia: Encontrando um ID do Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Como Usar {#how-to-use}

O recurso **Locais Populares** inclui uma lista selecionada de pontos de referência próximos e uma camada de POIs baseados na Wikipedia no mapa.

Existem duas maneiras principais de acessar este recurso:

- **Versão gratuita**  
  Acesse via [Pesquisa](#explore-in-search) para explorar locais próximos em visualização de lista.  
  *<Translate android="true" ids="android_button_seq"/> only*. Vá para: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*
  
  Esta lista Explorar mostra locais da Wikipedia/Wikidata classificados por popularidade perto de você e funciona online. Ela exibe até 50 locais. Como os resultados do Explorar/Wikipedia são classificados por avaliação, a ordenação nesses resultados pode diferir da pesquisa regular de POI.

- **Versões pagas** *(Maps+ e OsmAnd Pro)*  
  Ative a sobreposição visual em [Configurar Mapa](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/> & iOS*. Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  Neste modo, POIs populares aparecem diretamente no mapa com miniaturas de visualização e conteúdo da Wikipedia.

  Você pode alternar entre fontes da Wikipedia **online** e **offline** nas configurações de sobreposição. Saiba mais em [Ativar Camada](#enable-layer).


## Explorar na Pesquisa {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Explore Mode](@site/static/img/map/popular_places/popular_places_search.webp) ![Explore Mode](@site/static/img/map/popular_places/popular_places_search_2.webp)

</TabItem>

</Tabs>

A seção **<Translate android="true" ids="popular_places_nearby"/>** exibe uma lista rolável de pontos de referência de alta classificação perto de sua localização atual. Cada item inclui:

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map"/> → Locais Populares (Wikipedia)*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu_ios.png)

</TabItem>

</Tabs>

O recurso **Locais Populares (Wikipedia)** está disponível no [menu Configurar Mapa](./configure-map-menu.md). Para exibir locais populares diretamente no mapa, ative a camada de POI com dados da Wikipedia usando imagens do Wikidata.

Antes de usar este recurso:

- Certifique-se de que o [Plugin da Wikipedia](../plugins/wikipedia.md) esteja ativado.
- Baixe os dados da Wikipedia para sua região se quiser usá-los offline.

### Opções de Camada {#layer-options}

Uma vez ativadas, as seguintes opções ficam disponíveis:

- **<Translate android="true" ids="poi_osmwiki"/>** – Alternar POIs da Wikipedia no mapa.

- **Fonte do POI** – Alternar entre:
  - *Modo Apenas Offline* — usa dados do mapa da Wikipedia baixados para sua região. 
  - *Modo Apenas Online* — carrega locais e visualizações de imagens online. Os resultados online podem depender das configurações de idioma selecionadas.

- **<Translate android="true" ids="shared_string_language"/>** – Selecione o idioma para as descrições da Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Mostrar miniaturas de imagens do Wikidata ao lado dos POIs. Se as visualizações de imagens estiverem desativadas, os Locais Populares são exibidos com ícones em vez de miniaturas no mapa. As visualizações de imagens usam imagens vinculadas ao Wikidata/Wikipedia: no *Modo Apenas Offline*, as visualizações dependem dos dados da Wikipedia baixados, enquanto no *Modo Apenas Online*, as visualizações são obtidas online.

Tocar em um POI no mapa abre o [menu de contexto do POI](./map-context-menu.md), onde você pode visualizar [fotos online](#online-photos) e acessar [artigos da Wikipedia](../plugins/wikipedia.md) vinculados.


## Fotos Online {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Esta é uma seção dentro do [menu de contexto do POI](./map-context-menu.md) que exibe uma prévia da foto do Local Popular (Wikipedia) selecionado. Você pode rolar horizontalmente para navegar pelas fotos disponíveis ou tocar em qualquer imagem para abri-la no [modo de tela cheia](#gallery).

As imagens visualizadas online são armazenadas em cache automaticamente para acesso offline. As fotos em cache exibem um pequeno selo offline no canto. A grade de visualização se adapta ao tamanho da tela no iPadOS e macOS, garantindo um layout confortável de imagens em telas maiores. O OsmAnd também evita acionar solicitações de rede repetidas quando a seção Fotos Online é fechada e cancela solicitações anteriores ao alternar rapidamente entre diferentes POIs.

### Galeria {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Gallery Menu – Android](@site/static/img/map/gallery_menu_android.png)
![Gallery Menu – Android](@site/static/img/map/gallery_menu_android_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios.png)
![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>

O **Menu da Galeria** pode exibir até **100 imagens** relacionadas ao ponto de interesse selecionado. Para visualizar essas imagens, toque em **Mostrar Tudo** (Android) / **Ver Tudo** (iOS). Você pode deslizar por todas as fotos disponíveis. Tocar brevemente em uma foto abre uma visualização detalhada mostrando: *Descrição (até duas linhas, apenas Android)*, *Nome*, *Data de adição*, *Autor*, *Licença*. 

No iOS, iPadOS e macOS, você pode navegar pelas fotos usando teclas do teclado (←/→ para mover entre imagens, Enter/Espaço para abrir).

Você também pode realizar as seguintes ações em cada foto:

- **Compartilhar**  
  Compartilhe a imagem selecionada usando qualquer aplicativo compatível instalado em seu dispositivo (por exemplo, mensagens, e-mail ou mídia social). O conteúdo compartilhado inclui a imagem e seu link de origem (se disponível).

- **Detalhes**  
  Abra uma visualização detalhada mostrando metadados sobre a imagem, incluindo: *Descrição (texto completo, apenas Android)*, *Nome*, *Data de adição*, *Autor*, *Licença*, *Fonte* e *Link direto*

  **Nota:** O idioma da descrição depende do idioma de exibição do aplicativo. Se a descrição no idioma selecionado não estiver disponível, o OsmAnd exibe a versão em inglês ou a primeira tradução disponível.

- **Abrir no navegador**  
  Inicie a página de origem da imagem (geralmente no [Wikimedia Commons](https://commons.wikimedia.org/)) em seu navegador padrão. Isso permite que você visualize a imagem completa, informações de licenciamento e conteúdo relacionado.

- **Baixar**  
  Salve a imagem no armazenamento do seu dispositivo. A imagem baixada pode ser encontrada na pasta de Downloads padrão do seu dispositivo e acessada offline.

**Nota:** O download salva a imagem no armazenamento do dispositivo para uso offline permanente, enquanto as fotos em cache são armazenadas automaticamente e disponíveis offline apenas dentro do aplicativo.


## Artigos Relacionados {#related-articles}

- [Menu de contexto do mapa](./map-context-menu.md)
- [Configurar Mapa](./configure-map-menu.md)
- [Pesquisar POI](../search/search-poi.md)
- [Plugin da Wikipedia](../plugins/wikipedia.md)