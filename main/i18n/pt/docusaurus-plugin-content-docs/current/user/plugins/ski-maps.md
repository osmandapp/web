---
source-hash: f47abfa20a1e2094476033fa2ea73c6c94bc39f2fc7f0a5024cacdd02d47d391
sidebar_position: 13
title: Vista de Mapa de Esqui
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

O plugin de visualização de Mapa de Esqui do OsmAnd mostra pistas famosas e populares, áreas de esqui oficialmente aprovadas e mapas de trilhas da maioria das estações de esqui. Os mapas de pistas do [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) são a fonte de dados para os mapas de esqui do OsmAnd. Combinando mapas vetoriais com mapas raster, o mapa de esqui do OsmAnd é muito preciso e será útil para instrutores, alpinistas e entusiastas de esportes de inverno.

O mapa de esqui do OsmAnd faz parte dos mapas vetoriais e não requer downloads adicionais. Ele está desativado por padrão. O Mapa de Esqui do OsmAnd é um dos [Estilos de Mapa](../map/vector-maps.md) que oferece recursos adicionais ao destacar alguns objetos e tornar outros menos visíveis.  

Dois perfis são mostrados abaixo: o da esquerda é para esqui e o da direita é para dirigir. O perfil de Esqui destaca trilhas, vias aéreas, cores de inverno e todos os objetos do mapa úteis para navegar na área de esqui.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas de esqui no Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Sem mapas de esqui no Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas de esqui no iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Sem mapas de esqui no iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Parâmetros de Configuração Necessários {#required-setup-parameters}

A seguinte configuração faz com que o Mapa de Esqui do OsmAnd apareça na tela:

1. Ative o [plugin de visualização de Mapa de Esqui](../plugins/index.md#enable--disable).  
2. Defina o estilo de mapa [Inverno e Esqui](#set-winter-and-ski-map-style) para o [perfil](../personal/profiles.md) necessário.  
3. Se necessário, [combine mapas](#combine-maps).  
  

### Definir Estilo de Mapa de Inverno e Esqui {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Ativar estilo de inverno no Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Estilo de mapa do plugin de mapas de esqui Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Ativar estilo de inverno no iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Estilo de mapa do plugin de mapas de esqui iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

O estilo de mapa Inverno e Esqui destaca trilhas, rotas de esqui-caminhada, trilhas de trenó e informações relacionadas ao inverno e ao esqui. Para exibir o estilo no mapa, você precisa fazer as seguintes configurações:

1. Selecione o [perfil](../personal/profiles.md) necessário.  
2. Abra [Configurar mapa](../map/configure-map-menu.md).  
3. Role para baixo até Estilo de mapa/Tipo de mapa, abra-o e marque **Inverno e Esqui**.

:::tip configurações
O perfil de Esqui é projetado para uso em combinação com os estilos de Inverno e Esqui. No entanto, o tipo de navegação para cada perfil específico pode ser alterado e definido individualmente, de modo que a configuração final do perfil, estilo de mapa e navegação depende completamente de suas configurações.
:::


### Combinar Mapas {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sem combinação de mapas no Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Com combinação de mapas no Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sem combinação de mapas no iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Com combinação de mapas no iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

O [Mapa vetorial](../map/vector-maps.md) com o [estilo de mapa Inverno e Esqui](../map/vector-maps.md#winter-and-ski) incluído pode ser complementado com [Linhas de contorno](../plugins/topography.md#contour-lines) e [Relevo sombreado](../plugins/topography.md#hillshade-slope-and-altitude-layers). Abaixo estão dois exemplos. As trilhas no mapa vetorial padrão são mostradas à esquerda, e as trilhas no mapa vetorial combinado com o mapa raster *Linhas de Contorno* e *Relevo Sombreado* são mostradas à direita. No segundo caso, o mapa mostra mais dados de elevação para ajudar a estimar a dificuldade, o risco e a distância.  


### Desativar Estilo de Mapa de Esqui {#disable-ski-map-style}

Se preferir remover trilhas e cores de inverno do mapa, ou se a temporada de esqui acabou, faça uma das seguintes opções:

- Desmarque o estilo de mapa [Inverno e Esqui](#set-winter-and-ski-map-style) para o perfil necessário.  
- Mude o [perfil de Esqui](../personal/profiles.md) para qualquer outro perfil.
- Desative o [plugin de visualização de Mapa de Esqui](../plugins/index.md#enable--disable).


:::info desinstalar plugin
O plugin Visualizador de Mapa de Esqui é um aplicativo separado, e desativar sua exibição não o remove. Se você precisar desinstalá-lo, vá para as configurações do Android usando *Abrir Configurações* no menu do plugin.  
:::


## Perfil de Esqui {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Contornos de profundidade náutica no Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Contornos de profundidade no iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Os estilos de mapa de Inverno e Esqui podem ser ativados em qualquer perfil. Mas é mais valioso no [perfil de Esqui](../personal/profiles.md), onde é definido por padrão. O perfil de Esqui é muito confortável para a [navegação de Esqui](../navigation/routing/ski-routing.md).


## Estilo de Mapa de Esqui {#ski-map-style}

Use a [legenda do mapa de esqui](../../user/map-legend/ski-map.md) para qualquer referência. Ela ajuda a identificar os tipos de pistas no mapa, bem como os tipos de vias aéreas e outras características que podem ser lidas no mapa.

Ao ler o mapa, você pode descobrir os detalhes importantes para você, como a dificuldade de uma trilha específica, o tipo de trilha, se a preparação é feita e se a trilha é iluminada à noite.

As opções descritas aqui estão disponíveis na [navegação de Esqui](../navigation/setup/route-navigation.md). A **navegação de Esqui** define as opções de rota individuais, que se aplicam apenas ao esqui.


:::info estilo de renderização
O Mapa de Esqui do OsmAnd é construído como um dos estilos de renderização, que determina quais objetos mostrar no mapa e a aparência dos objetos. Todos os estilos de renderização são descritos no arquivo [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Para as regras que definem a estrutura interna do arquivo XML, consulte a [documentação de Renderização](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistas por Dificuldade {#pistes-by-difficulty}

| Cor | Descrição |
| --- | --- |
| ![Pista para iniciantes](@site/static/img/plugins/ski-maps/1c_green_1.png) | Verde - Pista para iniciantes |
| ![ Colinas fáceis](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Azul - Colinas fáceis |
| ![Pistas intermediárias](@site/static/img/plugins/ski-maps/3c_red_1.png) | Vermelho - Pistas intermediárias |
| ![Dificuldade avançada](@site/static/img/plugins/ski-maps/4c_black_1.png) | Cinza - Pistas de dificuldade avançada |
| ![Dificuldade de especialista](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Amarelo - Pistas de dificuldade de especialista |

A dificuldade das pistas é geralmente indicada por cores específicas. As cores podem ser diferentes em diferentes países e resorts. Abaixo estão algumas diretrizes práticas.

:::tip orientação
Para orientações mais específicas para cada tipo de dificuldade de trilha, consulte a [referência de dificuldade de pista do OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) ou qualquer outra fonte que também considere inclinações, obstáculos e perigos. No estilo de mapa Inverno e Esqui, certos perigos mapeados (por exemplo, áreas propensas a avalanches marcadas como hazard=avalanche) podem ser exibidos como POI de perigo no mapa e devem ser levados em consideração junto com a dificuldade da pista. 
:::


### Pista por Tipos {#piste-by-types}

As pistas diferem por tipo. Um tipo representa diferentes características para uma pista atender aos requisitos de diferentes atividades relacionadas ao inverno: esqui alpino, patinação clássica, snowboard, trenó, esqui de fundo, esqui-caminhada, esqui mogul, esqui noturno, etc. Compreender o [tipo da pista](https://wiki.openstreetmap.org/wiki/Key:piste:type) no mapa ajuda a construir uma rota de navegação ideal.

- **Pista de esqui alpino/descida.**  
Usada para navegação de Esqui. Este [tipo de pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) tem direção e dificuldade, e na maioria das vezes é cercada pelos limites da estação de esqui. Quando uma pista de descida é selecionada para navegação de Esqui, a direção da pista é levada em consideração. Se os pontos de Partida e Destino forem estabelecidos opostos à direção da pista, a navegação segue pela via aérea mais próxima.

- **Pista de esqui nórdico/de fundo.**  
Também usada para navegação de Esqui. Este [tipo de pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) não tem dificuldade, pode ou não ter direção, e na maioria das vezes vai além dos limites da estação de esqui. Ao navegar por este tipo de pistas, os pontos de Partida e Destino geralmente podem ser trocados.

- **Pista de esqui-caminhada.**  
Frequentemente usada por esquiadores para uma subida nórdica e uma descida. A dificuldade de uma pista de esqui-caminhada é frequentemente marcada com a cor respectiva. A navegação de Esqui pode construir uma rota ao longo deste tipo de pista, o que permite combinar os tipos de pista.

- **Outra pista de esqui.**  
Tipos de pista como *Trilhas de Caminhada* ou *Trilhas de Trenó* podem ser usados para perfis de esqui ou caminhada.


### Trilhas Preparadas {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Ativar preparação no Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Preparação exibida no Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Ativar preparação no iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Preparação exibida no iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Para verificar no mapa se uma pista específica é preparada, você precisa ativar a opção **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** na lista **<Translate android="true" ids="rendering_category_details"/>** aberta no menu [Configurar mapa](../map/configure-map-menu.md).  
Máquinas especiais preparam as trilhas para a atividade apropriada, como patinação clássica, patinação no gelo e outras. A mesma pista pode ser preparada de forma diferente em diferentes áreas.

### Rotas de Pistas de Esqui {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Pistas de esqui e rotas*

![Rotas desativadas no Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Rotas ativadas no Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Pistas de esqui e rotas*

![Rotas desativadas no iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Rotas ativadas no iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Para descobrir quais pistas fora da estação de esqui você pode navegar, você precisa ativar a opção **Pistas de esqui e rotas** na lista [**<Translate android="true" ids="rendering_category_routes"/>**](../map/routes.md), aberta no menu [Configurar mapa](../map/configure-map-menu.md).  

Com o perfil de Esqui, a navegação de esqui e o [estilo de mapa Inverno e Esqui](../map/vector-maps.md#winter-and-ski) ativados, as [Pistas de esqui e rotas](../map/vector-maps.md#ski-slopes-and-routes) mostram todos os tipos de pistas que a navegação de Esqui pode usar para construir rotas de navegação. Essas rotas de pistas de esqui, se ativadas, são delineadas com a cor violeta, principalmente fora dos limites da estação de esqui.  
Ao ativar a opção [Pistas de esqui e rotas](../map/vector-maps.md#ski-slopes-and-routes) para um estilo de mapa diferente de Inverno e Esqui, apenas as pistas são exibidas. Outros recursos relacionados ao esqui podem não ser mostrados nesta camada de estilo.  
_Pistas de esqui e rotas_ [são clicáveis](../map/routes.md#actions-with-routes).


### Noite e Iluminação {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ativar modo noturno e iluminação no Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Noite e iluminação no Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ativando modo noturno e iluminação no iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Noite e iluminação no iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

O estilo **Inverno e esqui** pode ser usado com o [modo Noturno ou Nascer/Pôr do Sol](../map/vector-maps.md#map-mode). Uma escolha confortável para quem prefere cores escuras, ou escurecer a tela à noite, bem como para quem pratica esqui noturno. Juntamente com o modo Noturno, os Mapas de Esqui do OsmAnd também podem mostrar quais pistas têm iluminação com a opção [Iluminação Pública](../map/vector-maps.md#details).  

Ambas as opções estão no menu [Configurar mapa](../map/configure-map-menu.md).  

- Para ativar a opção ***Modo Noturno***, role a lista para baixo:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- Para ativar a opção ***Iluminação Pública***, abra a lista **<Translate android="true" ids="rendering_category_details"/>** e ative a opção:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)