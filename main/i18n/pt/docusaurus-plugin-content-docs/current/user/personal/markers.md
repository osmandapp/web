---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
sidebar_position: 8
title: Marcadores
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

Marcadores são pontos especiais marcados no mapa como bandeiras que podem ser rapidamente criados com um único toque sem especificar nome e outras informações, em contraste com [Pontos Favoritos](./favorites.md). Além disso, os marcadores fornecem funcionalidade adicional com [widgets](../widgets/markers.md), **setas** (<Translate android="true" ids="show_arrows_on_the_map"/>) e **indicação de distância** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marcadores de mapa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcadores de mapa iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Marcadores {#markers}

### Adicionar / Editar Marcadores {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Toque curto ou longo no mapa e selecione a ação necessária no [menu de contexto do mapa](../map/map-context-menu.md#add--edit-marker).

![Ação de adicionar/editar marcador Android](@site/static/img/map/add_marker_android.png) ![Ação de passar marcador Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Toque curto ou longo no mapa e escolha a ação necessária no [menu de contexto do mapa](../map/map-context-menu.md#add--edit-marker).

![Ação de adicionar/editar marcador iOS](@site/static/img/map/add_marker_ios.png) ![Ação de restaurar marcador Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

É possível marcar um ponto ou um objeto para facilitar o planejamento da navegação. Basta tocar no ícone *bandeira* (*Android*) ou *seta* (*iOS*) no menu para exibir a direção e a distância até o ponto selecionado a partir da sua localização atual (ou o ponto central do mapa / o ponto inicial de toque no mapa quando a Localização está desativada).

***Ações***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Coloca um novo marcador no ponto selecionado.
- **Marcar como passado** (*Android*) / Dispensar (iOS). Desativa o marcador e o coloca no Histórico.
- **Tornar ativo** (*Android*). Move o marcador para a posição superior (no painel superior).
- **Restaurar marcador** (*Android*). Move o marcador do Histórico para a lista ativa.

:::note
Você não pode excluir um marcador imediatamente, primeiro você precisa desativá-lo (marcar como passado), para que ele seja movido para o [Histórico](#history) e então você pode excluí-lo permanentemente do histórico. Uma vez desativado, o marcador será removido do mapa e da lista de itinerários.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Lista de Itinerários {#itinerary-list}

A lista de itinerários representa uma lista ordenada de marcadores onde o primeiro marcador superior é usado em widgets para navegação. Leia mais sobre isso no artigo [Navegar por marcadores](../navigation/setup/markers-navigation.md#itinerary-list).

### Grupos de Marcadores {#marker-groups}

<InfoAndroidOnly />

![Grupos de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Os marcadores podem ser adicionados e excluídos como um grupo inteiro de um grupo de Favoritos ou de um arquivo GPX com pontos de passagem. Isso os torna muito convenientes para serem usados em um modo de navegação especial - [Navegar por marcadores](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Histórico {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Histórico de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Histórico de marcadores de mapa iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

O histórico é uma lista de todos os marcadores desativados (passados). A partir desta lista, é possível excluir permanentemente um marcador ou restaurá-lo.


## Aparência no Mapa {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![aparência_no_mapa](@site/static/img/widgets/appearence_on_the_map-01.png) ![aparência_no_mapa](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Aparência de marcadores de mapa iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Aparência de marcadores de mapa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

O menu *Aparência no Mapa* é uma configuração geral para exibir marcadores e ponteiros adicionais para eles.
Na versão iOS do OsmAnd, *Aparência no Mapa* também é uma configuração para exibir widgets. Existem também configurações adicionais para [configurar os widgets com marcadores](../widgets/markers.md#configure-marker-widgets).

- **Marcadores ativos**. Mostra informações sobre o primeiro ou dois marcadores na lista de marcadores do mapa.
- **Indicação de distância** *(para iOS)*. Permite escolher se deseja exibir widgets e como eles aparecerão: acima do mapa (Barra superior) ou no lado direito da tela (Widgets).
- **Setas no mapa**. Indica a direção para o marcador rastreado (um ou dois) como uma seta no mapa. Se o marcador estiver na parte visível do mapa, nenhuma seta é exibida.
- **Linha de direção**. Mostra a direção, como uma linha tracejada, de um ponto específico no mapa para o marcador rastreado em linha reta.
- ***Um toque*** ativo (*para Android*). Com um toque no marcador desejado no mapa, este marcador se move para o topo da lista de marcadores ativos do mapa sem abrir o menu de Contexto.
- **Manter marcadores passados no mapa** *(para Android)*. Marcadores adicionados como um grupo de Favoritos ou pontos de passagem GPX marcados como Passados permanecerão no mapa. Se o grupo não estiver ativo, os marcadores desaparecerão do mapa.


## Planejar Rota para Marcadores {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Pontos de planejamento de rota de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Opções de planejamento de rota de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Usando a funcionalidade da ferramenta Planejar uma rota na lista de Marcadores, você pode classificar os *Marcadores* *Porta a porta*, colocá-los em ordem inversa ou criar uma *Viagem de ida e volta*. Se você tocar na opção *Navegação*, os *Marcadores* serão usados como [destinos intermediários](../navigation/setup/route-navigation.md#intermediate-destinations).


## Ações {#actions}

<InfoAndroidOnly />

![Mais marcadores de mapa Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Os marcadores podem ser classificados na lista por nome, proximidade, tempo de adição.
- **<Translate android="true" ids="appearance_on_the_map"/>** ou **<Translate ios="true" ids="shared_string_appearance"/>**. [Configurações para marcadores de mapa](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Adiciona marcadores por [entrada de coordenadas](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Constrói rota [para navegação](../navigation/setup/markers-navigation.md) usando marcadores escolhidos.
- **<Translate android="true" ids="marker_save_as_track"/>**. Salva marcadores ativos em um arquivo GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Desativa todos os marcadores e os move para o [Histórico](#history).


## Artigos Relacionados {#related-articles}

- [Navegação por marcadores](../navigation/setup/markers-navigation.md)
- [Widgets de marcador](../widgets/markers.md)

> *Última atualização: Agosto de 2024*