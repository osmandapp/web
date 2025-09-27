---
source-hash: 92f8f29e51b5bed4213af308f878a61ece505f97e7c5f8d454af33c97210b34c
sidebar_position: 5
title: Mapas Vetoriais (Estilos de Mapa)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Visão Geral {#overview}

Os mapas vetoriais destinam-se a ser utilizados como a fonte de dados de mapa predefinida para o OsmAnd, pelo que **precisa de os transferir para o seu dispositivo**. Os mapas vetoriais suportam um grande número de estilos de mapa para diferentes atividades, como ciclismo, caminhadas, condução de carro ou mota de neve, entre outros.

Cada estilo de mapa pode ser personalizado para realçar ou ocultar objetos específicos e para alternar entre os modos diurno e noturno. Os dados do mapa vetorial podem ser aumentados por dados vetoriais e apresentados no estilo de mapa predefinido, como informações de *linhas de contorno*. Pode *criar o seu próprio estilo de mapa OsmAnd* para demonstrar as informações necessárias.


## Casos de Uso {#use-cases}

Os estilos de mapa personalizáveis são uma das principais vantagens do OsmAnd. Pode personalizar a exibição do mapa para se adequar a si e aos seus hobbies, ajustar a exibição ou ocultação de certos objetos do mapa, os tamanhos e cores desses objetos e alterar a escala de exibição de certos objetos.


## Estilos de Mapa Predefinidos {#default-map-styles}

O OsmAnd oferece muitos estilos de mapa e camadas de dados que se encaixam por predefinição. Esta seção descreve os principais para os modos diurno e noturno.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Estilo de mapa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

O estilo de renderização de mapa padrão do OsmAnd equilibra detalhes e simplicidade, tornando-o ideal para exploração urbana e ao ar livre. Detalha características da cidade, como ruas, edifícios e paragens de transporte, ao mesmo tempo que simplifica a desordem visual, tornando os mapas mais claros.

Os principais benefícios incluem mapeamento de rotas, qualidade da superfície, restrições de acesso, sinalização rodoviária, renderizações de caminhos de escala SAC, instalações desportivas e detalhes topográficos, como linhas de contorno.


### Vista de Passeio {#touring-view}

![Estilo de mapa de vista de passeio](@site/static/img/map/map-style-touring.png)

Estilo de passeio com alto contraste e máximo detalhe. Inclui todas as opções do estilo OsmAnd predefinido, exibindo o máximo de detalhes possível, em particular estradas, caminhos e outras formas de viajar. Distinção clara dos tipos de estrada num *atlas de passeio*. Adequado para uso diurno, noturno e ao ar livre.

### UniRS e LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Os estilos UniRS e LightRS são estilos de autor que renderizam as informações básicas do mapa, mas em diferentes esquemas de cores.

- **Estilo UniRS**. Este estilo é uma versão modificada do padrão para aumentar o contraste para caminhos pedonais e ciclovias. Mantém o esquema de cores clássico do Mapnik.

    ![Estilo de mapa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Estilo LightRS**. Este é um estilo de condução simples que apresenta um modo noturno suave. Realça as estradas numa cor laranja contrastante, escurece objetos de mapa secundários e exibe características topográficas como linhas de contorno.

    ![Estilo de mapa UniRS](@site/static/img/map/map-style-unirs.png)

### Náutico {#nautical}

![Estilo de mapa Náutico](@site/static/img/map/map-style-nautical.png)

Este é um estilo de navegação náutica que apresenta boias, faróis, rotas fluviais, vias marítimas, marcas, portos, marcas náuticas e contornos de profundidade. Leia mais no artigo [Vista de Mapa Náutico](../plugins/nautical-charts.md).

### Inverno e Esqui {#winter-and-ski}

![Estilo de mapa Inverno e Esqui](@site/static/img/map/map-style-winter-ski.png)

Este é um estilo para desportos de esqui que descreve as pistas, elevadores e trilhos de esqui de fundo, bem como obscurece objetos de mapa secundários. O **estilo Inverno e Esqui** foi concebido para o ajudar na navegação em desportos de inverno.

Pode ver as pistas de esqui e outros detalhes, como a dificuldade das pistas e os marcadores dos elevadores. Os principais benefícios incluem a exibição conveniente de pistas, elevadores e outras características de esqui. Menos objetos secundários distrativos do mapa. Leia mais no artigo [Mapas de Esqui](../plugins/ski-maps.md).

### Topo {#topo}

![Estilo de mapa Topo](@site/static/img/map/map-style-topo.png)

Este estilo foi concebido para caminhadas, campismo e ciclismo na natureza. Apresenta estradas e características naturais contrastantes, diferentes tipos de trilhos, opções de linhas de contorno estendidas e detalhes adicionais. É legível ao ar livre. A definição *Integridade da Superfície* permite distinguir a qualidade da estrada.

### OSM-carto {#osm-carto}

![Estilo de mapa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Este estilo imita o [estilo web predefinido do OpenStreetMap](https://www.openstreetmap.org/). O código-fonte da versão web está disponível no [Github](https://github.com/gravitystorm/openstreetmap-carto), o código OsmAnd está disponível no [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Deserto {#desert}

![Estilo de mapa Deserto](@site/static/img/map/map-style-desert.png)

Concebido para desertos e outras regiões pouco povoadas, oferecendo informações de mapa mais detalhadas.

### Offroad {#offroad}

![Estilo de mapa Offroad](@site/static/img/map/map-style-offroad.png)

Concebido para navegação off-road, este estilo baseia-se no layout do mapa [Topo](#topo) e funciona bem com imagens de satélite como camada de base. Apresenta estradas principais mais finas para realçar caminhos, trilhos, ciclovias e outros trilhos off-road, tornando-o ideal para explorar rotas não pavimentadas em áreas rurais ou remotas.

### Mota de Neve {#snowmobile}

![Estilo de mapa Mota de Neve](@site/static/img/map/map-style-snowmobile.png)

Adaptado para navegação em mota de neve, este estilo realça caminhos, estradas e trilhos adequados para motas de neve. Realça caminhos especializados em regiões nevadas, oferecendo navegação clara em terrenos cobertos de neve onde as estradas padrão podem não estar disponíveis.


## Legenda do Mapa {#map-legend}

A legenda do mapa serve como uma chave para entender os símbolos usados nos mapas OsmAnd. Explica o significado por trás de vários símbolos do mapa, incluindo pontos, linhas e áreas. Por exemplo, símbolos como linhas sinuosas azuis indicam rios, enquanto diferentes cores e formas podem representar edifícios, caminhos e rotas.

A legenda ajuda os utilizadores a interpretar o que veem no mapa. Pode aceder à legenda completa do mapa OsmAnd [aqui](../map-legend/index.md).


## Fontes do Mapa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Fontes do mapa versão Android](@site/static/img/map/map_fonts.png) ![Fontes do mapa versão](@site/static/img/map/map_fonts_1.png)

Para mapas em chinês simplificado/tradicional, japonês e coreano, podem aparecer caracteres ou símbolos incorretos (como quadrados) se o seu dispositivo não tiver as fontes necessárias. Este problema ocorre ao renderizar nomes locais e pode ser resolvido transferindo as fontes necessárias através do OsmAnd.

Alguns problemas de fontes relacionados foram documentados no GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Linhas de Contorno {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Estilo de mapa de linhas de contorno](@site/static/img/map/contour_lines.png)

As linhas de contorno no OsmAnd são exibidas como linhas de elevação em mapas vetoriais. Para as usar, deve primeiro ativar o [plugin de Topografia](../plugins/topography.md), transferir os dados regionais necessários e configurar a exibição. Esta funcionalidade não está ativada por predefinição e requer uma [compra](../purchases/index.md).

As linhas de contorno são compatíveis com todos os estilos de mapa e podem ser personalizadas através do [menu Linhas de contorno](../plugins/topography.md#contour-lines). Para mais detalhes, visite o artigo [plugin de Topografia](../plugins/topography.md).


## * Profundidade Náutica {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

As linhas de contorno de profundidade náutica representam áreas de igual profundidade, ajudando a visualizar as mudanças na topografia subaquática. Esta funcionalidade está disponível em todos os estilos e modos de mapa e pode ser ajustada com ou sem o plugin de visualização de mapa Náutico ativado.

Para mais detalhes sobre a visualização de mapa Náutico, visite a [página do plugin de Mapa Náutico](../plugins/nautical-charts).


## Mostrar Limites {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Esta funcionalidade permite alternar a visibilidade dos limites para mapas previamente transferidos da lista de mapas disponíveis. O seu principal objetivo é ajudar a desorganizar o mapa principal, ocultando os contornos dos mapas transferidos, o que é especialmente útil se tiver muitos mapas instalados.

Por predefinição, os limites do mapa aparecerão quando ampliar para o nível 7 e desaparecerão no nível de zoom 3 e abaixo.

:::tip Cor Mostrar limites dos mapas transferidos
Quando a funcionalidade *Mostrar limites dos mapas transferidos* está ativada, os mapas transferidos são coloridos a **Verde** nas versões Android e iOS do OsmAnd.

No Android, os mapas arquivados são mostrados a **Laranja**. No iOS, os mapas que podem ser atualizados também são marcados a **Laranja**.
:::


## Grelha de Coordenadas {#coordinates-grid}


Ir para: *Menu → Configurar Mapa → Mostrar → Grelha de Coordenadas*


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu da grelha de coordenadas](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


A **Grelha de Coordenadas** sobrepõe uma grelha de referência no mapa, permitindo visualizar linhas de latitude e longitude com base em diferentes sistemas de coordenadas. Esta funcionalidade é útil para referência de localização precisa e navegação geoespacial.

Pode configurar as seguintes opções:
- **Níveis de zoom:** defina os níveis de zoom mínimo e máximo (2 - 22) nos quais a grelha é visível.
- **Posição das etiquetas:** escolha entre *Arestas* (predefinição) ou *Centro* para as etiquetas da grelha.
- **Cor da grelha:** disponível separadamente para o modo Dia/Noite. A personalização da cor da grelha é uma funcionalidade paga.
- **Formato de coordenadas:** selecione entre vários formatos disponíveis (ver lista abaixo).


***Formatos de coordenadas disponíveis:***

- **WGS84** (EPSG:4326) - **DD°MM′SS″** (Graus, Minutos, Segundos)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Graus Decimais - formato predefinido WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Graus, Minutos Decimais)
- **UTM** (EPSG:6387, Universal Transverse Mercator - sistema de grelha baseado em zonas). O nível de zoom mínimo é 9, apenas uma zona UTM é exibida de cada vez, pois as zonas são separadas por meridianos a cada 6°
- **MGRS** (Military Grid Reference System)

Por predefinição, a aplicação utiliza o formato de coordenadas selecionado em [Definições gerais](../personal/profiles.md#units--formats), mas pode alterá-lo diretamente neste menu.

[Ação rápida](../widgets/quick-action.md#overview): Também pode adicionar um atalho rápido *Mostrar/Ocultar Grelha de Coordenadas* ao grupo [Configurar Mapa](../widgets/quick-action.md#configure-map) para acesso rápido.

## Configurar Estilo de Mapa {#configure-map-style}

### Modo de Mapa {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Modo de Mapa](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Modo de Mapa](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

O mapa pode ser exibido num tema claro ou escuro com base no modo selecionado de uma lista de opções. Por predefinição e para todos os novos utilizadores, o [estilo do mapa](#default-map-styles) alinha-se com o tema escolhido nas definições do sistema do seu dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Sempre exibe o mapa num tema claro para ótima visibilidade diurna.

- **<Translate android="true" ids="daynight_mode_night"/>**. Sempre mostra o mapa num tema escuro, ideal para condições noturnas ou de pouca luz.

- **Nascer do Sol / Pôr do Sol**. Transita automaticamente entre temas diurnos e noturnos de acordo com os horários locais de nascer e pôr do sol, que são detalhados nesta aba na aplicação.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Apenas Android*). Utiliza o sensor de luz do dispositivo para alternar automaticamente entre temas claros e escuros de acordo com os níveis de luz ambiente.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. A exibição do mapa adapta-se ao tema geral da aplicação, mostrando o modo diurno no tema claro e o modo noturno no tema escuro.


### Detalhes {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Mostra polígonos, trilhos, pontos e sinais no mapa com zoom baixo. Isso significa que pode ver mais detalhes no mapa com baixa ampliação. Note que a renderização no seu dispositivo pode não ser rápida.
    ![Parâmetro do mapa - Mais detalhado](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Mostra o tipo de superfície da estrada. A cor da estrada ajuda a entender qual é a superfície da estrada, como asfalto, relva ou areia. Consulte a [Legenda do mapa](../map-legend/index.md).
    ![Parâmetro do mapa - Superfície da estrada](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indica a qualidade da estrada. Indica a suavidade (inclinação) da estrada. Quão suaves são as suas estradas: boas, más, possivelmente terríveis, etc. Consulte a [Legenda do Mapa](../map-legend/index.md) para determinar a suavidade da sua estrada.
    ![Parâmetro do mapa - Suavidade da estrada](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Mostra a acessibilidade da estrada: privada ou permitida, apenas para emergências ou estrada com portagem. Consulte a [Legenda do Mapa](../map-legend/index.md) para encontrar estradas disponíveis.
    ![Parâmetro do mapa - Acesso à estrada](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. A funcionalidade [Zonas de Baixas Emissões (ZBE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) exibe bordas verdes e etiquetas "ZBE" nos mapas para áreas em cidades onde o acesso é restrito para certos veículos poluentes. As ZBEs visam melhorar a qualidade do ar, limitando a entrada de veículos que cumprem padrões de emissões específicos. Usar esta funcionalidade ajuda os utilizadores a evitar penalidades, identificando e navegando em torno destas zonas verdes, garantindo a conformidade com as regulamentações ambientais locais ao viajar pelos centros das cidades.

    ![Parâmetro do mapa - Zonas de baixas emissões](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Diferentes categorias de edifícios, como residenciais, industriais e comerciais, são codificadas por cores. Consulte a [Legenda do mapa](../map-legend/index.md) para obter detalhes.
    ![Parâmetro do mapa - Edifícios coloridos](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Exibe ruas iluminadas e não iluminadas, bem como vias subterrâneas e temporariamente iluminadas. Verifique a [Legenda do mapa](../map-legend/index.md) para obter detalhes.
    ![Parâmetro do mapa - Iluminação pública](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Concebido para mapeadores, esta funcionalidade mostra referências, observações e comentários de outros utilizadores no mapa.
    ![Parâmetro do mapa - Assistente de mapa](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Mostra contornos de profundidade do mar. Precisa de instalar o [plugin Náutico](../plugins/nautical-charts) e transferir mapas Náuticos.
    ![Parâmetro do mapa - Contornos de profundidade](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Mostra quadro verde e etiquetas "NR" para [território de reserva natural](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Realça áreas protegidas com uma borda verde e etiqueta "NR" para zonas de conservação da vida selvagem.

    &nbsp;&nbsp;&nbsp;![Parâmetro do mapa - Reserva natural](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Mostra polígonos, trilhos, pontos e sinais no mapa com zoom baixo. Isso significa que pode ver mais detalhes no mapa com baixa ampliação. Note que a renderização no seu dispositivo pode não ser rápida.| ![Parâmetro do mapa - Mais detalhado](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Mostra o tipo de superfície da estrada. A cor da estrada ajuda a entender qual é a superfície da estrada, como asfalto, relva ou areia. Consulte a [Legenda do mapa](../map-legend/index.md).| ![Parâmetro do mapa - Superfície da estrada](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indica a qualidade da estrada. Indica a suavidade (inclinação) da estrada. Quão suaves são as suas estradas: boas, más, possivelmente terríveis, etc. Consulte a [Legenda do Mapa](../map-legend/index.md) para determinar a suavidade da sua estrada.| ![Parâmetro do mapa - Suavidade da estrada](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Mostra a acessibilidade da estrada: privada ou permitida, apenas para emergências ou estrada com portagem. Consulte a [Legenda do Mapa](../map-legend/index.md) para encontrar estradas disponíveis. | ![Parâmetro do mapa - Acesso à estrada](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | A funcionalidade [Zonas de Baixas Emissões (ZBE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) exibe bordas verdes e etiquetas "ZBE" nos mapas para áreas em cidades onde o acesso é restrito para certos veículos poluentes. As ZBEs visam melhorar a qualidade do ar, limitando a entrada de veículos que cumprem padrões de emissões específicos. Usar esta funcionalidade ajuda os utilizadores a evitar penalidades, identificando e navegando em torno destas zonas verdes, garantindo a conformidade com as regulamentações ambientais locais ao viajar pelos centros das cidades.| ![Parâmetro do mapa - Zonas de baixas emissões](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Diferentes categorias de edifícios, como residenciais, industriais e comerciais, são codificadas por cores. Consulte a [Legenda do mapa](../map-legend/index.md) para obter detalhes. | ![Parâmetro do mapa - Edifícios coloridos](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Exibe ruas iluminadas e não iluminadas, bem como vias subterrâneas e temporariamente iluminadas. Verifique a [Legenda do mapa](../map-legend/index.md) para obter detalhes. | ![Parâmetro do mapa - Iluminação pública](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Concebido para mapeadores, esta funcionalidade mostra referências, observações e comentários de outros utilizadores no mapa. | ![Parâmetro do mapa - Assistente de mapa](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Mostra contornos de profundidade do mar. Precisa de instalar o [plugin Náutico](../plugins/nautical-charts) e transferir mapas Náuticos.| ![Parâmetro do mapa - Contornos de profundidade](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Mostra quadro verde e etiquetas "NR" para [território de reserva natural](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Realça áreas protegidas com uma borda verde e etiqueta "NR" para zonas de conservação da vida selvagem.| ![Parâmetro do mapa - Reserva natural](@site/static/img/map/nature-reserve.png)|
-->

### Rotas {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Rotas do mapa - ciclovias](@site/static/img/map/map-routes-cycle-routes.png) ![Rotas do mapa - rede de caminhadas](@site/static/img/map/map-routes-hiking-network.png)

Uma rota é um caminho predeterminado que precisa ser seguido para chegar a um destino específico. Uma rota pode ser otimizada para diferentes tipos de viagem, como ciclismo, caminhadas, corrida, transporte público e outros. Pode ler mais sobre rotas e seus tipos no artigo [Rotas](../map/routes.md).


### Transporte {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Ao navegar pelas cidades, precisa de uma vista mais contrastante dos transportes públicos e das paragens. Pode tocar numa paragem de transporte público e selecionar uma das rotas ou paragens da lista. As rotas de comboio também são exibidas nesta configuração.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Mostra paragens de transporte público.
    ![Paragens de transporte do mapa](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Mostra rotas de autocarro, trólei e vaivém.
    ![Autocarro de transporte do mapa](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Mostra rotas de elétrico e comboio.
    ![Elétrico de transporte do mapa](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Mostra rotas subterrâneas.
    ![Metro de transporte do mapa](@site/static/img/map/map-transport-subway.png)

### Ocultar {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Para melhorar a visibilidade do mapa, pode ser necessário ocultar certos objetos. Por exemplo, pode ocultar a água ao usar os [mapas online de satélite com a camada de subjacência](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Ocultar limites regionais dentro dos países, mas os limites estaduais são visíveis.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Ocultar todos os polígonos de objetos naturais, função especial para [camada de Subjacência/Sobreposição](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Ocultar todos os polígonos de edifícios.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Ocultar todos os polígonos de água (mares, lagos, reservatórios, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Ocultar números de casas no mapa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Ocultar objetos propostos - aqueles objetos que estão planeados para construção, mas que apenas têm um projeto (estradas projetadas, cruzamentos, edifícios e outros).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Ocultar os ícones de POI do mapa. No entanto, as etiquetas desses POIs ainda aparecerão no mapa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Ocultar as etiquetas de POI do mapa. No entanto, os ícones de POI ainda aparecerão no mapa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Ocultar todos os objetos subterrâneos, como túneis, passagens, andares, etc. Especial para limpar mapas em cidades de objetos não úteis.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Ocultar todos os objetos acima do solo. Especial para ver apenas objetos subterrâneos como túneis, passagens, etc.

### Estilo de Estrada {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Definições especiais para estradas, onde pode alterar as cores para corresponder ao atlas rodoviário ou adicionar estradas de alto contraste ou contornos em negrito para estradas.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Estilo predefinido para autoestradas. Consulte a [Legenda do mapa](../map-legend/index.md).
![Estilo de estrada do mapa predefinido](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Estilo do atlas rodoviário alemão.
![Estilo de estrada do mapa alemão](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Estilo do atlas rodoviário americano.
![Estilo de estrada do mapa americano](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. O alto contraste das estradas.
![Estilo de estrada do mapa de alto contraste](@site/static/img/map/map-road-style-high-contrast.png)
- **Pálido**. Cores menos contrastantes das estradas.
![Estilo de estrada do mapa com contorno em negrito](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contorno em negrito para estradas.
![Estilo de estrada do mapa com contorno em negrito](@site/static/img/map/map-road-style-bold-outline.png)


### Tamanho do Texto {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Tamanho do texto do mapa 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Tamanho do texto do mapa 200%](@site/static/img/map/map-text-size-200.png)


### Lupa do Mapa {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Pode escolher esta definição tocando longamente no botão "+" ou "-" no ecrã ou:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Pode escolher esta definição tocando longamente no botão "+" ou "-" no ecrã ou:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Esta definição ajuda a alterar a ampliação do mapa. É aplicável a mapas raster e vetoriais. Para mapas raster, aplica um efeito de ampliação, para que as etiquetas de texto pareçam maiores ou menores. Para mapas vetoriais, faz com que o mapa pareça mais ou menos detalhado; se o definir para um valor baixo, o mapa parecerá ruidoso/lento.

- **75%**
    ![Lupa do mapa 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Lupa do mapa 200%](@site/static/img/map/map-magnifier-200.png)


### Idioma do Mapa {#map-language}

A opção **Idioma do mapa** configura a ortografia dos nomes no mapa OsmAnd para os níveis de zoom 7-20, inclusive. Para os níveis de zoom 2-6, os nomes são exibidos no idioma definido para o OsmAnd no menu de configurações do sistema (consulte a seção *[Como alterar o idioma da aplicação](../start-with/first-steps.md#how-to-change-app-language)*).

Se os nomes no mapa não forem traduzidos para o idioma pretendido pela comunidade OSM, pode usar [nomes transliterados](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) ou *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Nomes locais**
    ![Idioma do mapa nomes locais](@site/static/img/map/map-language-local-names_2.png)

- **Idioma preferido** (ucraniano)
    ![Idioma do mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Usar nome latino se em falta**
    ![Idioma do mapa transliterar](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Nomes locais**
    ![Idioma do mapa nomes locais](@site/static/img/map/map-language-local-names_2.png)

- **Idioma preferido** (ucraniano)
    ![Idioma do mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Mostrar nomes locais** (adiciona 2ª etiqueta se o nome local for diferente)
    ![Idioma do mapa local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterar nomes**
    ![Idioma do mapa transliterar](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

</Tabs>


## Estilo de Mapa Personalizado {#custom-map-style}

Se tiver um estilo de mapa personalizado pessoal ou de terceiros criado de acordo com a [Especificação](../../technical/osmand-file-formats/osmand-rendering-style.md), pode instalá-lo no seu dispositivo das seguintes formas:

- Copie o ficheiro `.render.xml` para o seu dispositivo e abra-o com o OsmAnd.
- Use as [caixas de diálogo padrão de importação/exportação](../personal/import-export.md) para exportar ou importar estilos de renderização. Se criar um pacote `.osf`, ele funciona como um plugin que pode partilhar com outros.
- Após a instalação, pode selecionar o estilo do mapa no menu.


## Artigos Relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)