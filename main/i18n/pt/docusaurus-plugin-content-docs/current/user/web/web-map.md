---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
sidebar_position: 3
sidebar_label: Map
title: Global Map on the Website
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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Visão Geral {#overview}

O mapa web do OsmAnd é um mapa global baseado em dados do [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Ele permite que os usuários visualizem seus próprios dados, como trilhas e favoritos, criem rotas de navegação para qualquer perfil e acessem recursos adicionais como clima, trilhas GPX públicas, POIs e imagens da Wikimedia. Explore e personalize sua experiência de dados diretamente no seu navegador.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menu de Contexto do Mapa {#map-context-menu}

Para abri-lo, clique com o botão direito em qualquer lugar do mapa. Este menu inclui as seguintes ações:

- **Onde estou** – Encontre rapidamente sua localização atual no mapa. Este recurso exibe os endereços mais próximos ao ponto selecionado no mapa.
- **Abrir clima** – Acesse o [menu Clima](#weather-on-the-web) para ver os detalhes do clima.
- **Criar nova rota** – Abre a ferramenta [*Planejar uma rota*](../web/planner.md#navigation-route) com o local selecionado como ponto de partida ou destino.
- **Adicionar Favorito** – Permite criar e salvar um [favorito](../web/web-favorites.md#add--edit-favorite) em qualquer ponto do mapa para fácil acesso.
- **Rotas de** – Define o ponto selecionado como o [local de partida](../web/planner.md#navigation-route) para navegação.
- **Rotas para** – Define o ponto selecionado como o [destino para navegação](../web/planner.md#navigation-route).
- **Mostrar regiões** – Exibe as regiões associadas ao local selecionado.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Map Context menu](@site/static/img/web/map_context_menu_new.png)


## Menu Configurar Mapa {#configure-map-menu}

O menu Configurar Mapa permite gerenciar as configurações de exibição para dados do mapa, como camadas de POI, Favoritos, trilhas e terreno. Este menu está disponível após você fazer login na sua conta OsmAnd. Para abri-lo, clique no botão no **canto superior esquerdo** ou acesse-o através do **Menu**.

- [Sobreposição de POI...](#poi-overlay). Permite escolher e mostrar as categorias de POI necessárias no mapa.
- [Favoritos](#favorites). Alterna a exibição de favoritos no mapa.
- [Trilhas](#tracks). Contém trilhas GPX visíveis no mapa.  
- [Terreno](#terrain). Ativa ou desativa o esquema de cores do terreno no mapa.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Sobreposição de POI {#poi-overlay}

O recurso de sobreposição de POI permite exibir Pontos de Interesse (POIs) no mapa por categorias selecionadas. Isso é útil quando você deseja navegar por lugares diretamente no mapa.

Para abrir a sobreposição: *Menu Configurar mapa → Sobreposição de POI*...A lista de sobreposição contém 18 categorias. Você pode ativar uma categoria ou ativar várias categorias em qualquer combinação. Quando pelo menos uma categoria estiver ativada, a sobreposição fornece uma ação **Desselecionar tudo** para limpar a seleção de uma vez.

**Nota:** Se você estiver procurando por um lugar específico, também pode usar a [**seção de Pesquisa**](web-search.md) no mapa.

Uma vez que os POIs sejam exibidos, selecionar um marcador de POI no mapa abre seu painel de detalhes que mostra as informações disponíveis para esse objeto. Dependendo do POI, pode incluir: nome do lugar e tipo, endereço, campos de contato, identificadores relacionados ao OSM e coordenadas, links de referência (Wikipedia, Wikidata), quando presentes. 

Para POIs que têm fotos online, o painel de detalhes mostra um bloco Fotos Online com miniaturas. Mostrar tudo abre uma visualização de galeria com a lista completa de fotos. No visualizador de fotos, o OsmAnd Web exibe metadados de fotos quando disponíveis, incluindo: data, autor, licença e descrição.

No painel de detalhes do POI, ações rápidas estão disponíveis a partir dos botões de ação:
- *Adicionar aos Favoritos* — salva o POI nos seus Favoritos.
- *Compartilhar* — gera um link compartilhável que abre o POI diretamente no OsmAnd Web. O link inclui o nome do POI, tipo e coordenadas (pino).
- *Rotas de* — define o POI selecionado como o ponto de partida e abre o painel de Rota para que você possa escolher um destino e perfil.
- *Navegação* — define o POI selecionado como o ponto de destino para navegação.

![POIs menu](@site/static/img/web/poi_categories.png) ![POIs menu](@site/static/img/web/poi_photo_new.png)


### Favoritos {#favorites}

Com um clique, você pode ativar ou desativar os favoritos no mapa. No entanto, apenas os favoritos com [**Mostrar no mapa ativado**](../web/web-favorites.md#manage-favorites) serão exibidos.


### Trilhas {#tracks}

Esta seção contém uma lista das suas [**trilhas GPX visíveis no mapa**](../web/web-tracks.md#visible-on-the-map) e trilhas **Recentemente Visíveis**.

- Você pode ativar ou desativar as trilhas diretamente.  
- Ativar ou desativar trilhas da lista **Recentemente Visíveis**.  

Cada trilha possui um **Menu de Contexto** (acessível através do botão ⋮) com os seguintes comandos:

- **Ocultar trilha**: Oculta a trilha atualmente visível do mapa.  
- **Tornar trilha visível**: Exibe uma trilha da lista Recentemente Visíveis no mapa.  
- **Renomear**: Permite renomear a trilha para facilitar a identificação.  
- **Duplicar**: Cria uma cópia da trilha.  
- **Baixar**: Salva a trilha no seu dispositivo local.  
- **Excluir**: Remove a trilha permanentemente da lista.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Terreno {#terrain}

A seção **Terreno** é um recurso pago <ProFeature/>. Para usar este recurso, você deve primeiro fazer login na sua conta OsmAnd Pro.

Nesta seção, você pode:

- Escolher um **esquema de cores** para o terreno:
  - **Relevo**
  - **Inclinação**
  - **Altura**
- Ajustar a visibilidade da camada de terreno selecionada de **0% a 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


## Configurações {#settings}

No Planejador Web, as *configurações gerais* (Idioma de exibição, Unidades de comprimento, Unidade de velocidade) estão disponíveis para todos os usuários, independentemente de você estar logado ou não. Uma vez que você faça login com sua conta OsmAnd, uma seção adicional do OsmAnd Cloud aparece no painel de Configurações. Você pode ler sobre o OsmAnd Cloud [aqui](./web-cloud.md).

### Idioma {#language}

Para alternar o idioma da interface:

*Vá para: Menu → ⚙ Configurações → Idioma de exibição*

![Web Language](@site/static/img/web/web_language.png)

### Unidades {#units}

*Vá para: Menu → ⚙ Configurações → Unidades de comprimento*  
*Vá para: Menu → ⚙ Configurações → Unidade de velocidade*

Você pode escolher quais unidades são usadas para exibir distância, elevação e velocidade no mapa, nos detalhes da rota e nas ferramentas de medição. Isso ajuda a manter o OsmAnd consistente com seus hábitos habituais ou padrões regionais.

A opção **Unidades de comprimento** define como a distância horizontal e a elevação são mostradas:
- Quilômetros/metros.
- Milhas/pés.
- Milhas/metros.
- Milhas/jardas.
- Milhas náuticas/metros.
- Milhas náuticas/pés. 

Por exemplo, uma distância de 10 km será mostrada como cerca de 6,21 mi se você escolher uma das opções Milhas/..., ou como cerca de 5,40 nmi quando Milhas náuticas/... for selecionado.

A opção **Unidade de velocidade** controla como a velocidade atual e os limites de velocidade são exibidos:
- Quilômetros por hora.
- Milhas por hora.
- Metros por segundo.
- Minutos por milha.
- Minutos por quilômetro.
- Milhas náuticas por hora (nós). 

Por exemplo, uma velocidade de 90 km/h corresponde a 25 m/s ou cerca de 55,92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## Esquemas de URL {#url-schemes}

Para facilitar o uso do serviço web (e aplicativo) OsmAnd, você pode aproveitar os links diretos. São URLs especiais que permitem transferir dados de localização e incluir detalhes sobre pinos, trilhas, clima e muito mais.

Esses URLs podem ser copiados e compartilhados usando qualquer meio suportado pelo seu dispositivo e são compatíveis com as versões Android e iOS do OsmAnd.

1. **URL com um pino no mapa:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL sem um pino no mapa:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL com navegação:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Dependendo dos parâmetros especificados, as strings de URL podem conter:

- **latitude**: valor da latitude como um número.  
- **longitude**: valor da longitude como um número.  
- **start-finish**: coordenadas para navegação.  
- **profile**: perfil de navegação (por exemplo, carro, bicicleta).  
- **zoom**: nível de zoom.

4. **Clima**&nbsp; – &nbsp;`osmand.net/map/weather`

***Por exemplo***, você pode acessar diretamente a página do clima com coordenadas especificadas:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Conta**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configurar Mapa**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Trilhas**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoritos**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Configurações**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planejar uma Rota**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Link direto para a página [**Explorar**](https://osmand.net/docs/user/web/web-search#explore) atual&nbsp; - &nbsp;`osmand.net/map/search`


## Artigos Relacionados {#related-articles}

- [Menu de Contexto do Mapa](../map/map-context-menu.md)
- [Conta OsmAnd](./web-cloud.md)
- [Trilhas](./web-tracks.md)
- [Favoritos](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)