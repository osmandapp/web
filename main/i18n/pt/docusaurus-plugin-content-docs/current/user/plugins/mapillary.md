---
source-hash: aedd55d826014d3cfaaa5918963baf22bd911b20a8772409d2eb09fa220d9c67
sidebar_position: 6
title:  Mapillary
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Visão Geral {#overview}

Para se locomover mais rapidamente, no OsmAnd você pode usar visualizações de rua de suas rotas ou pontos de interesse fornecidas pelo [Mapillary](https://www.mapillary.com/) (é necessária uma conexão com a internet).

A [camada Mapillary](https://www.mapillary.com/) traz imagens de nível de rua diretamente para o aplicativo OsmAnd, para que você possa visualizar facilmente os arredores de qualquer ponto de interesse ou ao longo da rota que você planejou. Se as imagens estiverem faltando, você pode adicioná-las, e outras pessoas podem usá-las. Este recurso surgiu de nossa colaboração com [a equipe Mapillary](https://www.mapillary.com/about), unindo os benefícios de ambos os aplicativos.


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para exibir imagens de nível de rua no mapa OsmAnd, você precisa fazer as seguintes configurações:

1. Habilite o [plugin Mapillary](../plugins/#enable--disable) na seção *Plugins* do *Menu Principal*.
2. Exiba as [imagens de nível de rua](#enable-layer) no mapa para o perfil necessário no menu Configurar mapa.


## Camada do Mapa {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

A camada do mapa com imagens de rua é exibida no mapa OsmAnd como linhas de pontos verdes conectados.

- As fotos dos usuários do Mapillary são anexadas a esses pontos verdes.
- Toque em um ponto verde no mapa para abrir uma foto da vista da rua. As fotos também podem ser selecionadas de uma lista no [menu de contexto do mapa](#map-context-menu), se disponível.
- Após a seleção, a tela do aplicativo é dividida em mapa OsmAnd e imagens de rua do Mapillary.
- Você pode aplicar [filtros](#data-filtering) para selecionar as fotos que deseja exibir no mapa.


### Habilitar Camada {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Para exibir imagens de nível de rua do Mapillary no mapa, você precisa habilitar esta camada no menu [Configurar Mapa](../map/configure-map-menu.md) na seção *Mostrar*.

*Para acessar: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Visualizador de Fotos do Mapillary

- Toque no botão *menu de três pontos* (&#8285;) para abrir a imagem selecionada no aplicativo [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Toque na seta para mover de imagem para imagem.
:::


### Filtragem de Dados {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Você pode criar um filtro e selecionar quais fotos exibir no mapa. Por exemplo, escolha visualizar apenas imagens recentes ou apenas imagens de 360 graus.

*Para acessar: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Cache de Tiles
Se as imagens selecionadas não forem exibidas, use **Recarregar** para o **Cache de Tiles**.
:::


## Menu de Contexto do Mapa {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Se o plugin Mapillary estiver habilitado, você poderá visualizar fotos de ruas disponíveis em um raio de 40 metros do ponto selecionado no mapa. As fotos são abertas no [menu de contexto do mapa](../map/map-context-menu.md#online-photos).


## Adicionar Fotos {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Para adicionar fotos, você precisa se registrar no [aplicativo Mapillary](https://www.mapillary.com/mobile-apps). Você também pode adicionar fotos ao menu de contexto do mapa tocando no botão *Adicionar fotos* na seção [Fotos online](../map/map-context-menu.md#online-photos) do menu de contexto do mapa. Em seguida, o aplicativo Mapillary será aberto.


## Widget Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="mapillary"/>*

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → <Translate ios="true" ids="mapillary"/>*

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

O [widget Mapillary](../widgets/info-widgets.md#mapillary-widget) é usado para obter acesso rápido ao aplicativo Mapillary. O widget é adicionado à tela principal automaticamente quando o plugin Mapillary é habilitado. Você pode habilitar ou desabilitar o widget Mapillary e outros widgets no menu [Configurar tela](../widgets/configure-screen.md).


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última atualização: Outubro de 2024*