---
source-hash: 552b7ab98cb47cfebc8836a696e65629cc7df57f4c5ef8f5c2339517189845a0
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


## Visão geral {#overview}

O **menu Pesquisar** pode ser acessado no painel lateral ou no **canto esquerdo 🔍** do mapa. Ele contém:

- [Barra de pesquisa](#search-bar). Insira palavras-chave para pesquisar locais específicos ou pontos de interesse.
- [Seção de categorias](#categories). Navegue pelas opções categorizadas para facilitar as pesquisas de POI.
- [Seção Explorar](#explore). Descubra lugares próximos e áreas de interesse com fotos.

![Menu de pesquisa](@site/static/img/web/search.png)


## Barra de pesquisa {#search-bar}

Clique no **botão 🔍** para iniciar a pesquisa. Insira uma consulta na **Linha de pesquisa** e clique no POI para abrir o [**Menu de contexto do POI**](#explore-poi-data), onde você pode visualizar as informações das tags.

Se você pesquisar por **nome da categoria**, o primeiro resultado exibirá a categoria desse POI. Se você clicar em uma categoria de POI, a janela [**Pesquisa de categorias**](#categories) será aberta.

![Menu de contexto do POI](@site/static/img/web/context_menu_poi.png)


Clicar no POI escolhido no mapa ou na lista de resultados abre o **Menu de contexto do POI**. Este menu fornece os seguintes dados e links:

- **Nome e ícone**. Exibe o nome e o ícone do POI.
- **Botão ★ (*Adicionar aos favoritos*)**. Permite salvar o POI escolhido como um [favorito](../web/web-userdata.mdx#add--edit-favorite).
- **Botão 🔍**. Move o mapa para a localização do POI.
- **Distância e direção**. Mostra a distância e a direção da sua localização até o POI escolhido.
- **Localização**. Exibe as coordenadas do POI.
- **Fotos online**. Fornece dados do Wikimedia relacionados ao POI, se disponíveis. Clique em *Mostrar tudo* para abrir a [Galeria de fotos](#photo-gallery).
- **Dados do objeto**. Inclui detalhes como contatos, links de redes sociais, links da Wikipedia, descrições, inscrições, etc.
- **ID OSM**. O ID do OpenStreetMap do POI.
- **Coordenadas**. Clicar nas coordenadas permite copiá-las.

![Menu de contexto do POI](@site/static/img/web/context_menu_poi_1.png)

## Categorias {#categories}

Você pode escolher e exibir uma categoria de POI no mapa no **Menu de categorias**:

- Selecione entre as **6 categorias mais populares**.
- Ou clique em **Mostrar tudo** para abrir a lista completa de categorias de POI.

![Categorias de POI](@site/static/img/web/categories_poi.png)

Clique no POI selecionado no mapa ou na lista de resultados para abrir o **Menu de contexto do POI**. Este menu fornece os seguintes dados e links:

- **Nome e ícone**. Exibe o nome e o ícone do POI.
- **Botão ★ (*Adicionar aos favoritos*)**. Permite salvar o POI escolhido como um [favorito](../web/web-userdata.mdx#add--edit-favorite).
- **Botão 🔍**. Move o mapa para a localização do POI.
- **Distância e direção**. Mostra a distância e a direção da sua localização até o POI escolhido.
- **Localização**. Exibe as coordenadas do POI.
- **Fotos online**. Fornece dados do Wikimedia relacionados ao POI, se disponíveis. Clique em *Mostrar tudo* para abrir a [Galeria de fotos](#photo-gallery).
- **Dados do objeto**. Inclui detalhes como contatos, links de redes sociais, links da Wikipedia, descrições, inscrições, etc.
- **ID OSM**. O ID do OpenStreetMap do POI.
- **Coordenadas**. Clicar nas coordenadas permite copiá-las.

![Menu de contexto do POI](@site/static/img/web/categories_poi_1.png)


## Explorar {#explore}

A seção **Explorar** no menu Pesquisar facilita a localização de lugares e a visualização de pontos de interesse (POIs) com suas fotos ([fonte Wikidata](https://www.wikidata.org/)) diretamente no mapa.


Para começar:

1. Clique no **ícone 🔍** para abrir a guia de pesquisa, que exibe categorias de POI populares e o menu **Explorar** abaixo.
2. Os dados de **Explorar** serão exibidos automaticamente no mapa.
3. Selecione **"Mostrar tudo"** na seção Explorar para abrir a lista completa de categorias com o botão ***Filtrar*** na parte superior.

   ![Menu Explorar](@site/static/img/web/explore.png)

4. Pressionar o ***botão Filtrar*** abre o menu Categorias para "Explorar". Para refinar sua pesquisa, abra o menu Categorias e selecione os itens de seu interesse.

   ![Menu Explorar](@site/static/img/web/explore_cat.png)

### Explorar dados de POI {#explore-poi-data}

Clicar em uma imagem de POI abre um novo menu de contexto que inclui:

- **Nome e Tag do POI**. Exibe o nome e a tag geral do POI.
- **Botão 🔍**. Move o mapa para a localização do POI.
- **Distância e direção**. Mostra a distância e a direção da sua localização até o POI escolhido.
- **Localização**. Exibe as coordenadas do POI.
- **Descrição**. Fornece informações adicionais sobre o POI.
- **Fotos online**. Exibe dados do Wikimedia relacionados ao POI, se disponíveis. Clique em *Mostrar tudo* para abrir a [Galeria de fotos](#photo-gallery).
- **Dados do objeto**. Inclui detalhes como contatos, links de redes sociais, links da Wikipedia, etc.
- **ID OSM**. Exibe o ID do OpenStreetMap do POI.
- **Coordenadas**. Ao clicar nas coordenadas, você pode copiá-las.

![Menu Explorar](@site/static/img/web/poi_context.png)

### Galeria de fotos {#photo-gallery}

Se você clicar em ***Mostrar tudo*** na seção **Fotos online** do menu de contexto, a *Galeria de fotos* do POI selecionado será aberta.
Na *Galeria de fotos*, você pode rolar por todas as fotos do POI.

Cada foto contém:

- **Data**. A data em que a foto foi tirada ou carregada.
- **Autor**. O nome do autor da foto.
- **Informações de licença**. Detalhes sobre os direitos de uso da foto.
- **Descrição**. Informações adicionais sobre a foto.

![Galeria de fotos](@site/static/img/web/poi_photo.png)