---
source-hash: cc4a39deaa5305aa029009f3f9baff5a545f3a163336fd6ca3c80b085166c351
sidebar_position: 4
title: Configurar Mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Visão geral {#overview}

O menu **Configurar mapa** é um item importante no *Menu Principal* do OsmAnd, onde você pode personalizar a exibição do mapa para atender às suas necessidades. Você pode destacar pontos favoritos, marcadores de navegação ou pontos de interesse especiais no mapa, exibir rotas específicas ou arquivos GPX de terceiros, sobrepor informações de terreno, imagens de satélite ou quaisquer outras imagens raster disponíveis, exibir informações de transporte público e alterar o estilo do mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Seção **Mostrar**:

![Configurar mapa android](@site/static/img/map/configure_map_show1_andr.png) ![Configurar mapa android](@site/static/img/map/configure_map_show2_andr.png)

Seção **Topografia**:

![Configurar mapa android](@site/static/img/map/configure_map_topography_andr.png)

Seção **OpenStreetMap**:

![Configurar mapa android](@site/static/img/map/configure_map_osm_andr.png)

Seções **Rotas e Renderização do mapa**:

![Configurar mapa android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar mapa ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


O menu **<Translate android="true" ids="configure_map"/>** é dividido em duas categorias:

- [Parâmetros de estilo do mapa](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (ou **<Translate ios="true" ids="map_widget_renderer"/>**) é um grupo de configurações que permite alterar a forma como o mapa principal é exibido.
- [Camadas do mapa](#map-layers). Essas camadas permitem que você coloque informações sobre (ou sob) a camada principal do mapa, mas não alteram a exibição do próprio mapa.

**Notas:**

- Para alterar as informações na tela (widgets, ícones), você pode fazer configurações em [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- As configurações de Configurar mapa dependem do seu [perfil](../personal/profiles.md).
- Preste atenção - o menu Configurar mapa **fecha** quando você toca no campo do mapa.

## Camadas do mapa {#map-layers}

- [Camada de mapa vetorial](../map/vector-maps.md) - exibe todas as informações do mapa vetorial, incluindo OpenStreetMap, linhas de contorno e dados náuticos.
- [Fontes Raster do mapa](../map/raster-maps.md#select-raster-maps) - permite selecionar mapa de sobreposição / fonte principal / sobreposição com níveis de transparência.
- [Terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers) - exibe informações de inclinação / relevo, relevo 3D.
- [Bordas de mapas baixados](../map/vector-maps.md#show-borders) - exibe todas as bordas de mapas baixados na camada principal do mapa.
- [Grade de coordenadas](../map/vector-maps.md#coordinates-grid) - controla a visibilidade da grade de coordenadas no mapa.

## Camadas de dados do mapa {#map-data-layers}

- [Favoritos](../map/point-layers-on-map.md) - exibe pontos favoritos.
- [POI](../map/point-layers-on-map.md) - exibe pontos de interesse das categorias selecionadas.
- [Marcadores de mapa](../map/point-layers-on-map.md) - exibe marcadores de mapa.
- [Rótulos de sobreposição](../map/point-layers-on-map.md) - mostra nomes de pontos e favoritos no mapa.
- [Transporte](../map/vector-maps.md#transport) - mostra paradas de transporte público.
- [Rotas](../map/tracks/index.md) - exibe rotas importadas, planejadas ou gravadas sobre o mapa.
- [Imagens de nível de rua](../plugins/mapillary.md#map-layer) - exibe pontos com imagens de nível de rua disponíveis.
- [Guias de viagem](../plan-route/travel-guides.md) - exibe guias de viagem no mapa.
- [Wikipedia](../plugins/wikipedia.md) - destaca artigos da Wikipedia vinculados ao mapa.
- [Outras camadas de plug-in](../plugins/index.md#configure-plugin) - muitos plug-ins adicionam suas camadas com informações extras.

## Parâmetros de estilo do mapa {#map-style-parameters}

As configurações de estilo do mapa dependem do estilo principal do mapa exibido. Você pode ler mais sobre isso no artigo [Estilos de mapa](../map/vector-maps).

- [Estilo do mapa](../map/vector-maps.md#default-map-styles) - inclui OsmAnd (Cidade), Topo, Náutico e outros.
- [Modo do mapa](../map/vector-maps.md#map-mode) - permite selecionar a visualização do mapa e a navegação dependendo da hora do dia.
- [Lupa do mapa](../map/vector-maps.md#map-magnifier) - permite alterar a ampliação do mapa.
- [Tamanho do texto](../map/vector-maps.md#text-size) - permite aumentar ou diminuir o tamanho do texto no mapa.
- [Idioma do mapa](../map/vector-maps.md#map-language) - permite selecionar o idioma preferido exibido no mapa.
- [Detalhes](../map/vector-maps.md#details) - mostra objetos específicos.
- [Ocultar](../map/vector-maps.md#hide) - oculta objetos específicos.
- [Rotas](../map/vector-maps.md#routes) - permite destacar rotas e seus símbolos.

## Personalização da interface do usuário (Android) {#ui-customization-android}

Para cada perfil selecionado no sistema Android, você pode alterar a ordem dos itens do menu <Translate android="true" ids="configure_map"/>, ocultar os itens, redefinir as configurações padrão ou copiá-los de outro perfil. Isso ajudará a melhorar sua interação com o aplicativo OsmAnd.

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Itens de configuração do mapa](@site/static/img/settings/configure-screen-ui-customization.png)