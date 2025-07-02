---
source-hash: e46e862bf3423da156a08ba066e94f7d2262dcd693d6bfcdfd87d3e6f3328253
sidebar_position: 6
title: Mapillary
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

Para se deslocar mais rapidamente, no OsmAnd pode utilizar vistas ao nível da rua dos seus percursos ou locais de interesse fornecidas pelo [Mapillary](https://www.mapillary.com/) (é necessária uma ligação à internet).

[A camada Mapillary](https://www.mapillary.com/) traz imagens ao nível da rua diretamente para a aplicação OsmAnd, para que possa facilmente ter uma visão geral dos arredores de qualquer local de interesse ou ao longo do percurso que planeou. Se faltarem imagens, pode adicioná-las você mesmo, e outros podem utilizá-las. Esta funcionalidade surgiu da nossa colaboração com [a equipa Mapillary](https://www.mapillary.com/about), unindo os benefícios de ambas as aplicações.


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para exibir imagens ao nível da rua no mapa OsmAnd, precisa de fazer as seguintes configurações:

1. Ativar o [plugin Mapillary](../plugins/#enable--disable) na secção *Plugins* do *Menu Principal*.
2. Exibir as [imagens ao nível da rua](#enable-layer) no mapa para o perfil necessário no menu Configurar mapa.


## Camada de Mapa {#map-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pontos do plugin Mapillary no mapa Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pontos do plugin Mapillary no mapa iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

A camada do mapa com imagens de rua é exibida no mapa OsmAnd como linhas de pontos verdes conectados.

- As fotos dos utilizadores do Mapillary estão anexadas a estes pontos verdes.
- Toque num ponto verde no mapa para abrir uma foto de vista de rua. As fotos também podem ser selecionadas de uma lista no [menu de contexto do mapa](#map-context-menu), se disponível.
- Após a seleção, o ecrã da aplicação é dividido entre o mapa OsmAnd e as imagens de rua ao nível da rua do Mapillary.
- Pode aplicar [filtros](#data-filtering) para selecionar as fotos que deseja exibir no mapa.


### Ativar Camada {#enable-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Imagens do plugin Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Imagens do plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Para exibir imagens ao nível da rua do Mapillary no mapa, precisa de ativar esta camada no menu [Configurar Mapa](../map/configure-map-menu.md) na secção *Mostrar*.

*Para aceder: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Visualizador de Fotos Mapillary

- Toque no botão *menu de três pontos* (&#8285;) para abrir a imagem selecionada na aplicação [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Toque na seta para mover de imagem para imagem.
:::


### Filtragem de Dados {#data-filtering}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Filtro do plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtro do plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Pode criar um filtro e selecionar quais fotos exibir no mapa. Por exemplo, escolha ver apenas imagens recentes ou apenas imagens de 360 graus.

*Para aceder: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Cache de Blocos
Se as imagens selecionadas não forem exibidas, utilize **Recarregar** para a **cache de Blocos**.
:::


## Menu de Contexto do Mapa {#map-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu de Contexto do Mapa do plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de Contexto do Mapa do plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Se o plugin Mapillary estiver ativado, pode ver fotos de ruas disponíveis num raio de 40 metros do ponto selecionado no mapa. As fotos são abertas no [menu de contexto do mapa](../map/map-context-menu.md#online-photos).


## Adicionar Fotos {#add-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu de Contexto do Mapa do plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de Contexto do Mapa do plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Para adicionar fotos, precisa de se registar na [aplicação Mapillary](https://www.mapillary.com/mobile-apps). Também pode adicionar fotos ao menu de contexto do mapa tocando no botão *Adicionar fotos* na secção [Fotos online](../map/map-context-menu.md#online-photos) do menu de contexto do mapa. Em seguida, a aplicação Mapillary será aberta.


## Widget Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="mapillary"/>*

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Menu de Contexto do Mapa do plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → <Translate ios="true" ids="mapillary"/>*

![Menu de Contexto do Mapa do plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

O [widget Mapillary](../widgets/info-widgets.md#mapillary-widget) é utilizado para obter acesso rápido à aplicação Mapillary. O widget é adicionado ao ecrã principal automaticamente quando o plugin Mapillary é ativado. Pode ativar ou desativar o widget Mapillary e outros widgets no menu [Configurar ecrã](../widgets/configure-screen.md).


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última atualização: Outubro de 2024*