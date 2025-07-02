---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Search
title: Pesquisar no Website
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


<InfoIncompleteArticle/>


## Visão Geral {#overview}

O **menu Pesquisar** pode ser acessado no painel lateral ou no **canto esquerdo 🔍** do mapa. Ele contém:

- [Barra de Pesquisa](#search-bar). Insira palavras-chave para pesquisar locais específicos ou pontos de interesse.
- [Seção de Categorias](#categories). Navegue por opções categorizadas para facilitar as pesquisas de POIs.
- [Seção Explorar](#explore). Descubra lugares próximos e áreas de interesse com fotos.

![Search menu](@site/static/img/web/search.png)


## Barra de Pesquisa {#search-bar}

Clique no **botão 🔍** para iniciar a pesquisa. Insira uma consulta na **Linha de Pesquisa** e clique em POI para abrir o [**Menu de Contexto do POI**](#explore-poi-data), onde você pode visualizar as informações das tags.

Se você pesquisar por **nome da Categoria**, o primeiro resultado exibirá a categoria desse POI. Se você clicar em uma categoria de POI, a janela [**Pesquisa de Categorias**](#categories) será aberta.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Clicar no POI escolhido no mapa ou na lista de resultados abre o **Menu de Contexto do POI**. Este menu fornece os seguintes dados e links:

- **Nome e Ícone**. Exibe o nome e o ícone do POI.
- **Botão ★ (*Adicionar aos Favoritos*)**. Permite salvar o POI escolhido como um [favorito](../web/web-userdata.mdx#add--edit-favorite).
- **Botão 🔍**. Move o mapa para a localização do POI.
- **Distância e Direção**. Mostra a distância e a direção da sua localização para o POI escolhido.
- **Localização**. Exibe as coordenadas do POI.
- **Fotos Online**. Fornece dados do Wikimedia relacionados ao POI, se disponíveis. Clique em *Mostrar Tudo* para abrir a [Galeria de Fotos](#photo-gallery).
- **Dados do Objeto**. Inclui detalhes como contatos, links de redes sociais, links da Wikipédia, descrições, inscrições, etc.
- **ID OSM**. O ID OpenStreetMap do POI.
- **Coordenadas**. Clicar nas coordenadas permite copiá-las.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categorias {#categories}

Você pode escolher e exibir uma categoria de POI no mapa no **Menu de Categorias**:

- Selecione entre as **6 categorias mais populares**.
- Ou clique em **Mostrar Tudo** para abrir a lista completa de categorias de POI.

![Categories POI](@site/static/img/web/categories_poi.png)

Clique no POI selecionado no mapa ou na lista de resultados para abrir o **Menu de Contexto do POI**. Este menu fornece os seguintes dados e links:

- **Nome e Ícone**. Exibe o nome e o ícone do POI.
- **Botão ★ (*Adicionar aos Favoritos*)**. Permite salvar o POI escolhido como um [favorito](../web/web-userdata.mdx#add--edit-favorite).
- **Botão 🔍**. Move o mapa para a localização do POI.
- **Distância e Direção**. Mostra a distância e a direção da sua localização para o POI escolhido.
- **Localização**. Exibe as coordenadas do POI.
- **Fotos Online**. Fornece dados do Wikimedia relacionados ao POI, se disponíveis. Clique em *Mostrar Tudo* para abrir a [Galeria de Fotos](#photo-gallery).
- **Dados do Objeto**. Inclui detalhes como contatos, links de redes sociais, links da Wikipédia, descrições, inscrições, etc.
- **ID OSM**. O ID OpenStreetMap do POI.
- **Coordenadas**. Clicar nas coordenadas permite copiá-las.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explorar {#explore}

A seção **Explorar** no menu Pesquisar facilita a localização de lugares e a visualização de pontos de interesse (POIs) com suas fotos ([fonte Wikidata](https://www.wikidata.org/)) diretamente no mapa.


Para começar:

1. Clique no **ícone 🔍** para abrir a aba de pesquisa, que exibe categorias de POIs populares e o menu **Explorar** abaixo.
2. Os dados do **Explorar** serão exibidos automaticamente no mapa.
3. Selecione **"Mostrar Tudo"** na seção Explorar para abrir a lista completa de categorias com o botão ***Filtrar*** no topo.

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressionar o ***botão Filtrar*** abre o menu Categorias para "Explorar". Para refinar sua pesquisa, abra o menu Categorias e selecione os itens de seu interesse.

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explorar dados de POI {#explore-poi-data}

Clicar em um POI de imagem abre um novo menu de contexto que inclui:

- **Nome e Tag do POI**. Exibe o nome e a tag geral do POI.
- **Botão 🔍**. Move o mapa para a localização do POI.
- **Distância e Direção**. Mostra a distância e a direção da sua localização para o POI escolhido.
- **Localização**. Exibe as coordenadas do POI.
- **Descrição**. Fornece informações adicionais sobre o POI.
- **Fotos Online**. Exibe dados do Wikimedia relacionados ao POI, se disponíveis. Clique em *Mostrar Tudo* para abrir a [Galeria de Fotos](#photo-gallery).
- **Dados do Objeto**. Inclui detalhes como contatos, links de redes sociais, links da Wikipédia, etc.
- **ID OSM**. Exibe o ID OpenStreetMap do POI.
- **Coordenadas**. Ao clicar nas coordenadas, você pode copiá-las.

![Explore menu](@site/static/img/web/poi_context.png)

### Galeria de Fotos {#photo-gallery}

Se você clicar em ***Mostrar Tudo*** na seção **Fotos Online** do menu de contexto, a *Galeria de Fotos* do POI selecionado será aberta.
Na *Galeria de Fotos*, você pode rolar por todas as fotos do POI.

Cada foto contém:

- **Data**. A data em que a foto foi tirada ou carregada.
- **Autor**. O nome do autor da foto.
- **Informações de Licença**. Detalhes sobre os direitos de uso da foto.
- **Descrição**. Informações adicionais sobre a foto.

![Photo Gallery](@site/static/img/web/poi_photo.png)


> *Última atualização: Janeiro de 2025*