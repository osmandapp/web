---
source-hash: cd5ee4063d6f696a2707a1c3427de7ad82005454c2015da463bd27c2e760db67
sidebar_position: 10
sidebar_label:  Search
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

## Visão geral {#overview}

O **menu Pesquisar** pode ser acessado no painel lateral ou no ícone de Pesquisa 🔍 no mapa. Ele contém:

- [Barra de pesquisa](#search-bar). Insira palavras-chave para pesquisar locais específicos, pontos de interesse, favoritos ou trilhas.  
- [Seção de categorias](#categories). Navegue pelas opções categorizadas para facilitar as pesquisas de POI.  
- [Seção Explorar](#explore). Visualize POIs populares para o centro atual do mapa e explore lugares com fotos no mapa.

![Menu de pesquisa](@site/static/img/web/search.png)

## Opções de pesquisa {#search-options}

### Barra de pesquisa {#search-bar}

Use a **Barra de pesquisa** para encontrar lugares específicos, pontos de interesse, [favoritos](../web/web-favorites.md) e [trilhas](../web/web-tracks.md) pelo nome. Clique no ícone de Pesquisa, insira sua consulta e selecione um resultado da lista. Selecionar um POI abre o [Menu de contexto do POI](#poi-context-menu), enquanto selecionar um favorito ou trilha abre seus detalhes, onde você pode visualizar informações e usar ações rápidas.

Se você pesquisar por um nome de categoria, o primeiro resultado pode mostrar a categoria de POI correspondente. Clique na categoria para abrir a visualização de [Pesquisa de categorias](#categories).

![Opções de pesquisa](@site/static/img/web/search_bar.png)

### Categorias {#categories}

Use **Categorias** para navegar por POIs por tipo e exibi-los no mapa. O menu mostra seis categorias populares para acesso rápido. Se você precisar de mais opções, clique em Mostrar tudo para abrir a lista completa de 18 categorias disponíveis. Selecionar uma categoria exibe POIs correspondentes no mapa; selecionar um POI abre o [Menu de contexto do POI](#poi-context-menu).

![Opções de pesquisa](@site/static/img/web/search_categories.png)

### Explorar {#explore}

A seção **Explorar** mostra [lugares populares](https://osmand.net/docs/user/map/popular_places) com fotos diretamente no mapa. Ela constrói uma lista de POIs para o centro atual do mapa (ordenados por popularidade) e exibe os mesmos lugares como marcadores de fotos no mapa. Imagens de visualização e informações de POI são baseadas em Wikidata/Wikimedia e fontes relacionadas quando disponíveis.

Abra a aba Pesquisar para acessar Explorar — os resultados de Explorar são exibidos no mapa automaticamente. Use Mostrar tudo para abrir a lista completa de categorias de Explorar. Você pode refinar o que aparece na lista e no mapa usando Filtro, que abre o menu de categorias de Explorar. Selecionar um POI da lista ou no mapa abre o [Menu de contexto do POI](#poi-context-menu).

![Opções de pesquisa](@site/static/img/web/search_explore.png) ![Opções de pesquisa](@site/static/img/web/explore_filters.png)

## Menu de contexto do POI {#poi-context-menu}

Independentemente da opção de pesquisa que você usar (Barra de pesquisa, Categorias ou Explorar), selecionar um POI no mapa ou na lista de resultados abre o Menu de contexto do POI. O menu de contexto é o principal lugar para visualizar informações do POI e realizar ações comuns. Ele combina detalhes do POI (como localização e dados relacionados) com ações rápidas (por exemplo, salvar, compartilhar ou iniciar planejamento de rota e navegação).

### Detalhes do POI {#poi-details}

O **Menu de contexto do POI** exibe informações principais sobre o lugar selecionado e fornece links com base nos dados disponíveis do OSM e Wikimedia/Wikidata:
- **Nome e ícone** — mostra o nome do POI e seu ícone.
- **Distância e direção** — mostra a distância e a direção até o POI.
- **Localização** — exibe as coordenadas do POI.
- **Horário de funcionamento** — mostra os horários de funcionamento analisados a partir dos [dados OSM](https://wiki.openstreetmap.org/wiki/Key:opening_hours). O status atual é exibido dinamicamente dependendo do horário atual (por exemplo, *Aberto agora*, *Fechado* ou *Abre às 10:00*), e o cronograma completo é mostrado abaixo.
- **Descrição** — fornece informações adicionais sobre o POI quando disponível (por exemplo, da Wikipedia).
- **Fotos online** — mostra fotos do Wikimedia relacionadas ao POI quando disponível. Selecione Mostrar tudo para abrir a Galeria de fotos. Selecione uma foto para abri-la na galeria (modo Abrir foto).
- **Dados do objeto** — informações adicionais do POI, incluindo tags OSM e outros detalhes como contatos, links sociais, links da Wikipedia e Wikivoyage, descrições e inscrições (quando disponíveis).
- **ID OSM** — o identificador OpenStreetMap do POI.
- **Coordenadas** — selecione as coordenadas para copiá-las.

![Menu de contexto do POI](@site/static/img/web/poi_context_menu_new.png)

### Ações do POI {#poi-actions}

O **Menu de contexto do POI** inclui botões de ação para tarefas comuns. Use essas ações rápidas para salvar um lugar, compartilhá-lo ou iniciar o planejamento de rota e navegação:
- **Adicionar aos favoritos** — salva o POI em seus [Favoritos](../web/web-favorites.md#favorites-actions).
- **Compartilhar** — gera um link compartilhável que abre o POI diretamente no OsmAnd Web. O link inclui o nome do POI, tipo e coordenadas (pino).
- **Direções a partir de** — define o POI selecionado como o ponto de partida e abre o painel de rota para que você possa escolher um destino e perfil.
- **Navegação** — define o POI selecionado como o ponto de destino para [navegação](../web/web-navigation.md#start-a-route).

### Galeria de fotos {#photo-gallery}

Clique em ***Mostrar tudo*** na seção **Fotos online** do Menu de contexto do POI para abrir a *Galeria de fotos* para o POI selecionado. A galeria permite que você navegue por todas as fotos disponíveis. Clique em uma foto para abri-la em uma visualização maior (modo Abrir foto). Use Voltar para retornar ao Menu de contexto do POI.

Os detalhes da foto incluem:
- **Data**. A data em que a foto foi tirada ou carregada.  
- **Autor**. O nome do autor da foto.  
- **Informações de licença**. Detalhes sobre os direitos de uso da foto.  
- **Descrição**. Informações adicionais sobre a foto.

![Galeria de fotos](@site/static/img/web/poi_photo.png)


## Artigos relacionados {#related-articles}

- [Pesquisar tudo](../search/search-all.md)
- [Pesquisar POI](../search/search-poi.md)
- [Mapa](../web/web-map.md)