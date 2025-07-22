---
source-hash: 840895be86a2bc170c5cc62b0abac17afda6a3dcd33c15c2d2b335a1a52fa27e
sidebar_position: 3
title:  Navegar por Marcadores
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

[Marcadores de mapa](../../personal/markers.md) são pontos no mapa marcados por bandeiras. Eles podem ser usados para uma variedade de propósitos, como indicar um local que você deseja visitar, um ponto de interesse que você deseja lembrar ou para criar uma rota personalizada.

Eles podem ser particularmente úteis para caminhantes, ciclistas ou qualquer pessoa explorando uma nova área que queira marcar locais interessantes ou pontos de referência no mapa. A principal diferença dos [Pontos Favoritos](../../personal/favorites.md) é que os Marcadores são mais rápidos de criar, pois não exigem um nome.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marcador de navegação Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcador de navegação iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Usar Marcadores na Navegação {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

 ![Navegação por marcador de diferença Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Navegação por marcador de diferença Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegação por marcador de diferença iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Navegação por marcador de diferença iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Marcadores de mapa* podem servir como [destinos](./route-navigation#set-destinations) ao construir uma rota. Eles são especialmente convenientes quando você precisa definir uma rota com pontos intermediários.

No entanto, os *Marcadores de mapa* também fornecem várias funcionalidades, como [widgets](../../widgets/markers.md), direção de movimentos, linhas no mapa, para que você possa usar essas ferramentas para navegação sem construir uma linha de rota e iniciar a navegação por voz completa.

Caso você precise de uma navegação simples ponto a ponto exibida como linhas retas, você pode construir e classificar uma ***Lista de itinerários*** composta por marcadores como pontos intermediários e usar widgets para navegação simples.


#### Recomendações {#recommendations}

Aqui estão algumas etapas de recomendação simples para *Navegar por marcadores*:

1. Crie marcadores. Encontre o(s) objeto(s) desejado(s) no mapa, toque nele e escolha o *[botão Marcador](../../personal/markers.md#add--edit-markers)* no *[menu de contexto do mapa](../../map/map-context-menu.md#add--edit-marker)*. Você também pode criar marcadores a partir de [favoritos](#add-group-of-favorite) ou [rotas GPX](#add-group-of-track-waypoints).
2. [*Classifique os marcadores*](#sort-markers) da maneira preferida que você deseja percorrê-los.
3. Personalize a *visualização dos Marcadores de Mapa* se você quiser usar Marcadores sem iniciar a Navegação. Habilite as opções **Setas no mapa** e **Linha de direção** na seção *[Aparência](../../personal/markers.md#appearance-on-the-map)* do *[menu Marcadores de Mapa](../../personal/markers.md#actions)*.
4. Adicione *[Widgets de Marcadores](../../personal/markers.md#markers)* no *[menu Configurar tela](../../widgets/configure-screen.md)* (opcional).
5. [*Marque como passados*](#pass-markers) os marcadores já visitados ou restaure-os do histórico se quiser percorrê-los novamente.

:::note
Quando as opções **Setas no mapa** e **Linha de direção** estão ativadas na seção *Aparência* do [menu Marcadores de Mapa](../../personal/markers.md#appearance-on-the-map), você verá uma seta ou linha tracejada no mapa. A seta mostra a direção para o marcador ativo quando ele está fora da tela atual do mapa. A linha de direção é desenhada quando sua geolocalização e o marcador estão na mesma tela.
:::


## Lista de Itinerários {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de marcadores Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de marcadores iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


A lista de itinerários representa uma lista ordenada de marcadores *passíveis* que estão visíveis no mapa. Você pode adicionar e excluir pontos um por um ou fazer isso em lote usando um [arquivo GPX](#add-group-of-track-waypoints) preparado com antecedência ou um [grupo de Favoritos](#add-group-of-favorite). Para competições locais ou aventuras, pode ser útil criar uma lista de pontos a partir de coordenadas usando a [ferramenta de entrada de coordenadas](../../plan-route/coordinate-input.md).


### Adicionar Marcadores Individuais {#add-single-markers}

*Marcadores* podem ser adicionados ou excluídos do mapa com um único toque na tela no local desejado. Em seguida, você precisa seguir as instruções do artigo *[menu de contexto do mapa](../../map/map-context-menu.md#add--edit-marker)*.


### Adicionar Grupo de Favoritos {#add-group-of-favorite}

<InfoAndroidOnly />

![Favoritos para marcadores 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favoritos para marcadores 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Você pode criar *Marcadores de Mapa* a partir de *[Favoritos](../../personal/favorites.md)* usando:

- *[Menu de grupos de favoritos](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meus Favoritos)*.
- Ícone &#128681; no menu de página de Favoritos *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meus Favoritos→&#128681;)*.
- Opção **'+'** (adicionar) na *[aba Grupos](../../personal/markers.md#marker-groups)* no menu Marcadores de Mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Adicionar Grupo de Pontos de Rota {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX para marcadores 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Rotas GPX com pontos de rota podem ser usadas como *Marcadores de Mapa* e rapidamente desativadas:

- Use a opção **'+'** (adicionar) na *[aba Grupos](../../personal/markers.md#marker-groups)* no menu Marcadores de Mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Ative o interruptor próximo à rota na *[aba Grupos](../../personal/markers.md#marker-groups)* no menu Marcadores de Mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Apenas rotas com pontos de rota podem ser adicionadas à *lista de Marcadores de Mapa*. A rota que você pretende adicionar também deve estar visível (ativa) no mapa.
:::

![GPX para marcadores 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX para marcadores 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Você também pode criar *Marcadores* a partir de uma rota com pontos de rota usando o *[menu de contexto da rota](../../map/tracks/track-context-menu.md#points--waypoints)*: *Toque em uma rota visível no mapa → no menu de contexto da rota escolha Pontos → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Classificar Marcadores {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Classificar Marcadores em uma lista Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Classificar Marcadores em uma lista iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Pressionando no canto esquerdo (*Android*) ou canto direito (*iOS*) de uma aba de *Marcador de Mapa* na *[lista de Marcadores de Mapa](../../personal/markers.md#itinerary-list)* e movendo-a para cima ou para baixo, você pode alterar sua ordem na *lista de Navegação* (ao mover um cartão de marcador, você verá uma linha indicando onde o marcador será colocado).

Na versão Android do aplicativo OsmAnd, existem outras opções de classificação para *Marcadores de Mapa* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Classificar por* ou *Planejar uma rota*).


### Classificar por Atributos {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Classificação alternativa de marcadores Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Classificação alternativa de marcadores Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Você pode classificar *Marcadores* por:

- **Nome** (*alfabeticamente*) — Se os marcadores tiverem nomes descritivos, esta pode ser uma maneira útil de encontrar rapidamente o marcador que você está procurando.
- **Distância** (*mais próximo ou mais distante primeiro*) - Esta opção classificará os marcadores pela distância de sua localização atual.
- **Data** (*recentemente ou há muito tempo*) - Isso classificará os marcadores pela data em que foram adicionados. Se você adicionou muitos marcadores ao longo do tempo, esta pode ser uma maneira útil de ver quais são os mais recentes.


### Reordenar com uma Ferramenta de Planejamento de Rota {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Classificação alternativa de marcadores Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Classificação alternativa de marcadores Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Usando a funcionalidade de planejar uma rota na ferramenta de lista de Marcadores, você pode classificar *Marcadores* *Porta a porta*, colocá-los em ordem inversa ou criar uma *Viagem de ida e volta*. Se você tocar na opção *Navegação*, os *Marcadores* serão usados como [destinos intermediários](../setup/route-navigation.md#intermediate-destinations).


## Passar Marcadores {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Passar Marcador Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Passar Marcador Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Passar Marcador iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Passar Marcador iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Um *Marcador* pode ser marcado como passado (*Android*) ou descartado (*iOS*).

- Através do *[menu de contexto do mapa](../../map/map-context-menu.md#add--edit-marker)*.
- Ao se aproximar de um *Marcador* a uma distância inferior a 40 metros (*Android*) ou 50 metros (*iOS*), um interruptor na barra de *[widgets de Marcadores](../../widgets/markers.md#top-bar-widget)* se torna ativo.

Após passar um *Marcador*, ele é movido para a pasta [Histórico](../../personal/markers.md#history), de onde pode ser restaurado se necessário. O próximo marcador na [lista](#itinerary-list) se torna ativo. Dependendo de suas [configurações](#use-markers-in-navigation), você pode ser guiado a ele com uma seta ou linha tracejada.


## Artigos Relacionados {#related-articles}

- [Sobre Marcadores de Mapa](../../personal/markers.md).
- [Widget de Marcador](../../widgets/markers.md).
__
- [Parâmetros de rota](../routing/osmand-routing.md#routing-types)
- [Preparação da rota](./route-navigation.md)
- [Detalhes da rota](./route-details.md)
- [Navegação por rota](./gpx-navigation.md)
- [Configurações de navegação](../guidance/navigation-settings.md)
- [Tela do mapa durante a navegação](../guidance/map-during-navigation.md)
- [Comandos de voz / Notificações](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última atualização: Junho de 2025*