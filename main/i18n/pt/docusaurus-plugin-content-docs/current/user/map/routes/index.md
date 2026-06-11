---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: Rotas
sidebar_position: 11
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

O OsmAnd possui muitos recursos avançados para exibir diferentes [rotas](./types-of-routes.md) no mapa. Por padrão, essas rotas fazem parte dos [mapas vetoriais](../../map/vector-maps.md#routes) (dados do OpenStreetMap), no entanto, funcionalidade semelhante é fornecida por [trilhas](../../map/tracks/index.md) que podem ser criadas com [Planejar uma Rota](../../plan-route/create-route.md), importadas como [trilhas GPX](#save-as-a-track), gravadas com o [plug-in Gravação de Viagem](../../plugins/trip-recording.md). A Legenda do Mapa de Rotas está [aqui](../../map-legend/osmand.md#routes).


## Exibir Rotas no Mapa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Acesse: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Seção Rotas do Configurar Mapa](@site/static/img/map/configure_map_routes_android.png) ![Classes de Rotas](@site/static/img/map/routes_classes_android.png)

- Para exibir as rotas desejadas no mapa, ative-as na *lista de Rotas* do menu [Configurar Mapa](../../map/configure-map-menu.md).
- O OsmAnd pode destacar [rotas presentes no OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Elas podem ser selecionadas tocando [no símbolo da rota](#save-as-a-track) e, se o conjunto visível de rotas estiver configurado corretamente, você poderá seguir a cor e os ícones.
- Os principais tipos de rota também podem ser filtrados por classes e subclasses, permitindo exibir apenas grupos específicos dentro de cada tipo. Por exemplo, você pode mostrar rotas de caminhada por **símbolos OSMC** como classes e por redes *internacionais, nacionais, regionais* ou *locais* como subclasses, que estão atualmente disponíveis quando o plug-in [Desenvolvimento OsmAnd](../../plugins/development.md) está ativado.
- Você pode criar uma trilha sobre as rotas usando a ferramenta [Planejar uma Rota](../../plan-route/create-route.md).
- Quando várias rotas seguem a mesma estrada, cada rota é exibida como uma linha semitransparente separada, colocada acima das outras.
- Ao tocar em um local onde várias rotas se sobrepõem, é exibido um menu de contexto com todas as rotas que passam por esse ponto.
- São necessários mapas vetoriais atualizados para exibir todos os elementos do novo esquema de renderização de rotas.

![Rotas no mapa - caminhada osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Rotas no mapa - redes de nós de ciclismo](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Acesse: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu de trilha iOS](@site/static/img/map/configure_map_routes_ios.png)

- Para exibir as rotas desejadas no mapa, ative-as na *lista de Rotas* do menu [Configurar Mapa](../../map/configure-map-menu.md).
- O OsmAnd pode destacar [rotas presentes no OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Elas podem ser selecionadas tocando [no símbolo da rota](#save-as-a-track) e, se o conjunto visível de rotas estiver configurado corretamente, você poderá seguir a cor e os ícones.
- Você pode criar uma trilha sobre as rotas usando a ferramenta [Planejar uma Rota](../../plan-route/create-route.md).
- Quando várias rotas seguem a mesma estrada, cada rota é exibida como uma linha semitransparente separada, colocada acima das outras.

![Rotas no mapa - caminhada osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Rotas no mapa - redes de nós de ciclismo](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Ações com Rotas {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informações da rota](@site/static/img/map/routes_osm.png) ![Informações da rota](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informações da rota](@site/static/img/map/routes_osm_ios_new.png) ![Informações da rota](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

No mapa, você pode selecionar rotas para [caminhada, ciclismo, esqui, MTB, moto de terra, viagem e mais](./types-of-routes.md). Quando disponíveis, as rotas de caminhada exibem suas marcações usando [símbolos OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); outros tipos de rota usam suas próprias marcações.

Ao tocar em um **símbolo de rota** no mapa:

- É exibida uma **lista das rotas próximas** naquele local.
- Após selecionar uma rota da lista, é aberto um [menu de contexto](../../map/tracks/track-context-menu.md) para essa rota, exibindo informações detalhadas e ações disponíveis.
- A rota selecionada é aberta em uma visualização de trilha, permitindo interagir com ela da mesma forma que com uma trilha GPX.

No **menu de contexto**, você pode:

- Visualizar [informações adicionais](#route-info-and-elevation) sobre a rota selecionada.
- [Salvar a rota](#save-as-a-track) como uma **trilha GPX**.
- [Iniciar navegação](#start-navigation) ao longo da rota.

### Detalhes de Área de Escalada e Paredão {#climbing-area-and-crag-details}

![Detalhes de escalada](@site/static/img/map/climbing_andr.png)

Ao selecionar uma [área de escalada ou paredão](./types-of-routes.md#climbing-routes), o OsmAnd fornece um resumo detalhado do local de escalada, incluindo: nome e localização, classificação de dificuldade de escalada (UIAA, Francês, YDS, etc.), tipo de rocha, altura e comprimento da rota, qualidade da escalada e condições da superfície.

### Informações da Rota e Elevação {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informações da rota](@site/static/img/map/route_info_1_andr_new.png) ![Informações da rota](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informações da rota](@site/static/img/map/route_info_1_ios_new.png) ![Informações da rota](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

As seguintes informações estarão visíveis no menu de contexto:

- **Informações da rota**: Nome da rota, link OSM (plug-in OSM Editing necessário), Tipo, Descrição, Distância, Direção, Subida/Descida, Faixa de altitude, Rede, Operador, Estado, Cor, Ida e volta, Pontos de início/fim e mais.
- **Geral**: Tamanho, Localização, Criado em.
- **Informações adicionais**. Exibe o tipo de atividade.
- botões de ação: [Salvar como](#save-as-a-track) e [Iniciar Navegação](#start-navigation).
- [Informações de elevação](../../navigation/setup/route-details.md#elevation-info). Exibe informações sobre os dados de elevação na rota.
- [Analisar Trilha no Mapa](../../map/tracks/index.md#analyze-track-on-map). Exibe análise detalhada dos dados da trilha usando gráficos e mapas.

Para visualizar o gráfico de elevação, inclinação ou detalhes de altitude de uma rota selecionada, basta tocar em qualquer um dos seguintes valores no menu de contexto: **Distância**, **Subida**, **Descida** ou **Altitude**.

Você também pode abrir a *aba Trilha* e alternar para a *visualização de Altitude* para ver o gráfico completo de elevação da rota.

**Nota:** Os dados de elevação são gerados automaticamente e podem diferir ligeiramente dependendo dos dados disponíveis.

### Salvar como Trilha {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no terreno](@site/static/img/map/routes-4.png)   ![Rotas no terreno](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no terreno](@site/static/img/map/hiking.png)   ![Rotas no terreno](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>


Para salvar a rota como um *arquivo GPX*, toque no botão **Salvar (Baixar)** no [painel de Informações](../../map/tracks/track-context-menu.md#info-panel). Isso abrirá o painel de botões de [Ações rápidas](../../map/tracks/track-context-menu.md#track-actions), onde você terá acesso a ações de trilha como alterar a [Aparência](../../map/tracks/appearance.md), [Navegação](../../navigation/setup/route-navigation.md) ou editar [Planejar uma rota](../../plan-route/create-route.md). As rotas salvas se comportam da mesma forma que outras trilhas e estão disponíveis na sua coleção de trilhas.

### Iniciar Navegação {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no terreno](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no terreno](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Para iniciar a navegação ao longo da rota OSM selecionada, toque no botão **Iniciar Navegação** no [**Painel de Informações**](../../map/tracks/track-context-menu.md#info-panel).

Isso iniciará o modo [**Navegação por trilha**](../../navigation/setup/gpx-navigation.md), permitindo que você siga a rota com orientação por voz e recursos de navegação.

### Ações Rápidas {#quick-actions}

Você pode personalizar se as rotas estão ativadas ou desativadas usando o widget de [Ação Rápida](../../widgets/quick-action.md#configure-map).


## Pesquisa de Rotas {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no terreno](@site/static/img/map/route_search.png) ![Rotas no terreno](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no terreno](@site/static/img/map/route_search_ios.png) ![Rotas no terreno](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Encontre rotas usando a [função de Pesquisa](../../search/index.md) por nome ou selecionando "Rotas" na [seção Categorias](../../search/search-poi.md#).

Para pesquisar, acesse o menu *<Translate android="true" ids="search_button"/>* ou *<Translate android="true" ids="search_button,search_categories"/>* e insira sua atividade.

Navegue até *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* para encontrar as rotas desejadas. Os resultados da pesquisa de rotas exibem o nome da rota, tipo de atividade, comprimento, localização, subida/descida (no Android) e distância até o ponto mais próximo.

### Filtros de Rotas {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no terreno](@site/static/img/map/route_search_2_new.png) ![Rotas no terreno](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no terreno](@site/static/img/map/route_search_2_ios.png) ![Rotas no terreno](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

Nos resultados da pesquisa de rotas, toque no botão **Filtros** no canto superior direito para restringir a lista. A tela de Filtros inclui um campo **Filtrar por nome**; um bloco **Tipo** com *Bureau*, *Anexo postal* e *Parceiro postal*; e **critérios extras** que dependem da categoria de rota ou atividade selecionada, pois cada categoria pode expor suas próprias características e valores de filtro.

Você pode ativar ou desativar filtros usando os interruptores e algumas seções incluem *Mostrar tudo* para exibir valores adicionais.


## Artigos Relacionados {#related-articles}

- [Menu de contexto do mapa](../../map/map-context-menu.md)
- [Configurar Mapa](../../map/configure-map-menu.md)
- [Trilhas](../../map/tracks/index.md)
- [Menu de contexto de trilhas](../../map/tracks/track-context-menu.md)
- [Transporte público](../public-transport.md)
- [Aparência da linha de rota de navegação](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Pesquisar POI](../../search/search-poi.md#)
- [Tipos de Rotas](./types-of-routes.md)