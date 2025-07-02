---
source-hash: 872ff87a35bc61fbd415cf02fa9593a1f01ab711832783bd8413d76746b5e729
sidebar_position: 5
title:  Mapas Vetoriais (Estilos de Mapa)
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

Os mapas vetoriais são destinados a serem usados como a fonte de dados de mapa padrão para o OsmAnd, então **você precisa baixá-los para o seu dispositivo**. Os mapas vetoriais suportam um grande número de estilos de mapa para diferentes atividades, como ciclismo, caminhada, condução de carro ou snowmobile, e outros.

Cada estilo de mapa pode ser personalizado para destacar ou ocultar objetos específicos e para alternar entre os modos diurno e noturno. Os dados do mapa vetorial podem ser aumentados por dados vetoriais e exibidos no estilo de mapa padrão, como informações de *Linha de contorno*. Você pode *criar seu próprio estilo de mapa OsmAnd* para demonstrar as informações necessárias.


## Casos de Uso {#use-cases}

Estilos de mapa personalizáveis são uma das principais vantagens do OsmAnd. Você pode personalizar a exibição do mapa para se adequar a você e seus hobbies, ajustar a exibição ou ocultação de certos objetos do mapa, os tamanhos e cores desses objetos e alterar a escala de exibição de certos objetos.


## Estilos de Mapa Padrão {#default-map-styles}

O OsmAnd oferece muitos estilos de mapa e camadas de dados que se encaixam por padrão. Esta seção descreve os principais para os modos diurno e noturno.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Estilo de mapa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

O estilo de renderização de mapa padrão do OsmAnd equilibra detalhes e simplicidade, tornando-o ideal para exploração urbana e ao ar livre. Ele detalha características da cidade, como ruas, edifícios e paradas de transporte, enquanto simplifica a desordem visual, tornando os mapas mais claros.

Os principais benefícios incluem mapeamento de rotas, qualidade da superfície, restrições de acesso, sinalização de estradas, renderizações de trilhas em escala SAC, instalações esportivas e detalhes topográficos, como linhas de contorno.


### Visualização de Turismo {#touring-view}

![Estilo de mapa de visualização de turismo](@site/static/img/map/map-style-touring.png)

Estilo de turismo com alto contraste e máximo detalhe. Inclui todas as opções do estilo OsmAnd padrão, exibindo o máximo de detalhes possível, em particular estradas, caminhos e outras formas de viajar. Distinção clara dos tipos de estradas em um *atlas de turismo*. Adequado para uso diurno, noturno e ao ar livre.

### UniRS e LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Os estilos UniRS e LightRS são estilos de autor que renderizam as informações básicas do mapa, mas em diferentes esquemas de cores.

- **Estilo UniRS**. Este estilo é uma versão modificada do padrão para aumentar o contraste para caminhos de pedestres e bicicletas. Ele mantém o esquema de cores clássico do Mapnik.

    ![Estilo de mapa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Estilo LightRS**. Este é um estilo de condução simples que apresenta um modo noturno suave. Ele destaca as estradas em uma cor laranja contrastante, escurece objetos secundários do mapa e exibe características topográficas como linhas de contorno.

    ![Estilo de mapa UniRS](@site/static/img/map/map-style-unirs.png)

### Náutico {#nautical}

![Estilo de mapa Náutico](@site/static/img/map/map-style-nautical.png)

Este é um estilo de navegação náutica que apresenta boias, faróis, rotas fluviais, vias marítimas, marcas, portos, marcas náuticas e contornos de profundidade. Leia mais no artigo [Visualização de Mapa Náutico](../plugins/nautical-charts.md).

### Inverno e Esqui {#winter-and-ski}

![Estilo de mapa Inverno e Esqui](@site/static/img/map/map-style-winter-ski.png)

Este é um estilo para esportes de esqui que descreve as pistas, elevadores e trilhas de esqui cross-country, além de obscurecer objetos secundários do mapa. O **estilo Inverno e Esqui** foi projetado para ajudá-lo na navegação em esportes de inverno.

Você pode ver as pistas de esqui e outros detalhes, como a dificuldade das pistas e os marcadores de elevador. Os principais benefícios incluem a exibição conveniente de pistas, elevadores e outras características de esqui. Menos objetos secundários distrativos do mapa. Leia mais no artigo [Mapas de Esqui](../plugins/ski-maps.md).

### Topo {#topo}

![Estilo de mapa Topo](@site/static/img/map/map-style-topo.png)

Este estilo foi projetado para caminhadas, acampamentos e ciclismo na natureza. Ele apresenta estradas e características naturais contrastantes, diferentes tipos de trilhas, opções estendidas de linhas de contorno e detalhes adicionais. É legível ao ar livre. A configuração *Integridade da Superfície* permite distinguir a qualidade da estrada.

### OSM-carto {#osm-carto}

![Estilo de mapa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Este estilo imita o [estilo web padrão do OpenStreetMap](https://www.openstreetmap.org/). O código-fonte da versão web está disponível no [Github](https://github.com/gravitystorm/openstreetmap-carto), o código OsmAnd está disponível no [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Deserto {#desert}

![Estilo de mapa Deserto](@site/static/img/map/map-style-desert.png)

Projetado para desertos e outras regiões pouco povoadas, oferecendo informações de mapa mais detalhadas.

### Offroad {#offroad}

![Estilo de mapa Offroad](@site/static/img/map/map-style-offroad.png)

Projetado para navegação off-road, este estilo é baseado no layout do mapa [Topo](#topo) e funciona bem com imagens de satélite como camada de fundo. Ele apresenta estradas principais mais finas para destacar caminhos, trilhas, rotas de bicicleta e outras trilhas off-road, tornando-o ideal para explorar rotas não pavimentadas em áreas rurais ou remotas.

### Snowmobile {#snowmobile}

![Estilo de mapa Snowmobile](@site/static/img/map/map-style-snowmobile.png)

Adaptado para navegação em snowmobile, este estilo destaca caminhos, estradas e trilhas adequados para snowmobile. Ele destaca caminhos especializados em regiões nevadas, oferecendo navegação clara em terrenos cobertos de neve onde as estradas padrão podem não estar disponíveis.


## Legenda do Mapa {#map-legend}

A legenda do mapa serve como uma chave para entender os símbolos usados nos mapas do OsmAnd. Ela explica o significado por trás de vários símbolos do mapa, incluindo pontos, linhas e áreas. Por exemplo, símbolos como linhas sinuosas azuis indicam rios, enquanto diferentes cores e formas podem representar edifícios, caminhos e rotas.

A legenda ajuda os usuários a interpretar o que veem no mapa. Você pode acessar a legenda completa do mapa do OsmAnd [aqui](../map-legend/index.md).


## Fontes do Mapa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Fontes do mapa versão Android](@site/static/img/map/map_fonts.png) ![Fontes do mapa versão](@site/static/img/map/map_fonts_1.png)

Para mapas em chinês simplificado/tradicional, japonês e coreano, caracteres ou símbolos incorretos (como quadrados) podem aparecer se o seu dispositivo não tiver as fontes necessárias. Esse problema ocorre ao renderizar nomes locais e pode ser resolvido baixando as fontes necessárias via OsmAnd.

Alguns problemas de fonte relacionados foram documentados no GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Linhas de Contorno {#-contour-lines}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Estilo de mapa de linhas de contorno](@site/static/img/map/contour_lines.png)

As linhas de contorno no OsmAnd são exibidas como linhas de elevação em mapas vetoriais. Para usá-las, você deve primeiro habilitar o [plugin de Topografia](../plugins/topography.md), baixar os dados regionais necessários e configurar a exibição. Este recurso não está habilitado por padrão e requer uma [compra](../purchases/index.md).

As linhas de contorno são compatíveis com todos os estilos de mapa e podem ser personalizadas através do [menu Linhas de contorno](../plugins/topography.md#contour-lines). Para mais detalhes, visite o artigo [plugin de Topografia](../plugins/topography.md).


## * Profundidade Náutica {#-nautical-depth}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

As linhas de contorno de profundidade náutica representam áreas de igual profundidade, ajudando a visualizar as mudanças na topografia subaquática. Este recurso está disponível em todos os estilos e modos de mapa e pode ser ajustado com ou sem o plugin de visualização de mapa Náutico habilitado.

Para mais detalhes sobre a visualização de mapa Náutico, visite a [página do plugin Náutico](../plugins/nautical-charts).


## Mostrar Bordas {#show-borders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Este recurso permite alternar a visibilidade das bordas para mapas previamente baixados da lista de mapas disponíveis. Seu principal objetivo é ajudar a desorganizar o mapa principal, ocultando os contornos dos mapas baixados, o que é especialmente útil se você tiver muitos mapas instalados.

Por padrão, as bordas do mapa aparecerão quando você ampliar para o nível 7 e desaparecerão no nível de zoom 3 e abaixo.

:::tip Cor Mostrar bordas dos mapas baixados
Quando o recurso *Mostrar bordas dos mapas baixados* está habilitado, os mapas baixados são coloridos em **Verde** nas versões Android e iOS do OsmAnd.

No Android, os mapas arquivados são mostrados em **Laranja**. No iOS, os mapas que podem ser atualizados também são marcados em **Laranja**.
:::


## Grade de Coordenadas {#coordinates-grid}


Vá para: *Menu → Configurar Mapa → Mostrar → Grade de Coordenadas*


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu da grade de coordenadas](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


O recurso **Grade de Coordenadas** sobrepõe uma grade de referência no mapa, permitindo visualizar linhas de latitude e longitude com base em diferentes sistemas de coordenadas. Este recurso é útil para referência de localização precisa e navegação geoespacial.

***1. Formatos de coordenadas disponíveis:***

- **DD°MM′SS″** (Graus, Minutos, Segundos)
- **DD.DDDDD°** (Graus Decimais - formato padrão WGS84)
- **DD°MM.MMM′** (Graus, Minutos Decimais)
- **MGRS** (Sistema de Referência de Grade Militar)
- **UTM** (Universal Transverse Mercator - sistema de grade baseado em zonas)

:::note

1. *Limitações da grade UTM:*
    - O nível de zoom mínimo para exibir a grade UTM é 9.
    - Apenas uma zona UTM é exibida por vez, pois as zonas são separadas por meridianos a cada 6°.

2. *A grade WGS84 suporta três modos diferentes:* graus decimais, graus+minutos e graus+minutos+segundos.

:::

***Sistemas de coordenadas suportados:***

O OsmAnd suporta múltiplas **projeções base** para exibir linhas de grade geográficas:

| **Projeção** | **Código EPSG** | **Descrição** |
|---|---|---|
| **WGS84** | EPSG:4326 | Sistema de referência de latitude/longitude padrão, usado globalmente. |
| **Mercator** | EPSG:3857 | Usado para mapeamento baseado na web (Google Maps, OpenStreetMap, etc.). |
| **UTM** | EPSG:6387 | Divide o mundo em **60 zonas** para posicionamento local preciso. |
| **MGRS** | - | Sistema de Referência de Grade Militar (extensão do UTM). |



***2. Configurações de nível de zoom:***

- As linhas da grade aparecem com base no nível de zoom, entre **2 – 22**.
- As linhas ajustam dinamicamente as divisões de coordenadas com base no nível de zoom.

**Por padrão, o aplicativo usa o formato de coordenadas selecionado em** [Configurações gerais](../personal/profiles.md#units--formats).


***3. Posição dos rótulos:***
- Bordas
- Centro

***4. Cor da grade:***
- Escolha a cor da sua grade para o modo Dia/Noite.

## Configurar Estilo do Mapa {#configure-map-style}

### Modo do Mapa {#map-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Modo do Mapa](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Modo do Mapa](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

O mapa pode ser exibido em um tema claro ou escuro com base no modo selecionado em uma lista de opções. Por padrão e para todos os novos usuários, o [estilo do mapa](#default-map-styles) se alinha com o tema escolhido nas configurações do sistema do seu dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Sempre exibe o mapa em um tema claro para visibilidade ideal durante o dia.

- **<Translate android="true" ids="daynight_mode_night"/>**. Sempre mostra o mapa em um tema escuro, ideal para condições noturnas ou de pouca luz.

- **Nascer do Sol / Pôr do Sol**. Transita automaticamente entre temas diurnos e noturnos de acordo com os horários locais de nascer e pôr do sol, que são detalhados nesta aba no aplicativo.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Somente Android*). Utiliza o sensor de luz do dispositivo para alternar automaticamente entre temas claros e escuros de acordo com os níveis de luz ambiente.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. A exibição do mapa se adapta ao tema geral do aplicativo, mostrando o modo diurno no tema claro e o modo noturno no tema escuro.


### Detalhes {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Mostra polígonos, trilhas, pontos e sinais no mapa com zoom baixo. Isso significa que você pode ver mais detalhes no mapa com baixa ampliação. Observe que a renderização em seu dispositivo pode não ser rápida.
    ![Parâmetro do mapa - Mais detalhado](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Mostra o tipo de superfície da estrada. A cor da estrada ajuda você a entender qual é a superfície da estrada, como asfalto, grama ou areia. Veja a [legenda do mapa](../map-legend/index.md).
    ![Parâmetro do mapa - Superfície da estrada](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indica a qualidade da estrada. Indica a suavidade (inclinação) da estrada. Quão suaves são suas estradas: boas, ruins, possivelmente terríveis, etc. Consulte a [Legenda do Mapa](../map-legend/index.md) para determinar a suavidade de sua estrada.
    ![Parâmetro do mapa - Suavidade da estrada](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Mostra a acessibilidade da estrada: privada ou permitida, somente emergência ou estrada com pedágio. Veja a [Legenda do Mapa](../map-legend/index.md) para encontrar estradas disponíveis.
    ![Parâmetro do mapa - Acesso à estrada](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. O recurso [Zonas de Baixa Emissão (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) exibe bordas verdes e rótulos "LEZ" nos mapas para áreas em cidades onde o acesso é restrito para certos veículos poluentes. As LEZs visam melhorar a qualidade do ar, limitando a entrada de veículos que atendem a padrões de emissão específicos. Usar este recurso ajuda os usuários a evitar penalidades, identificando e navegando ao redor dessas zonas verdes, garantindo a conformidade com as regulamentações ambientais locais ao viajar pelos centros das cidades.

    ![Parâmetro do mapa - Zonas de baixa emissão](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Diferentes categorias de edifícios, como residenciais, industriais e comerciais, são codificadas por cores. Consulte a [legenda do mapa](../map-legend/index.md) para obter detalhes.
    ![Parâmetro do mapa - Edifícios coloridos](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Exibe ruas iluminadas e não iluminadas, bem como vias subterrâneas e temporariamente iluminadas. Verifique a [legenda do mapa](../map-legend/index.md) para detalhes.
    ![Parâmetro do mapa - Iluminação pública](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Projetado para mapeadores, este recurso mostra referências, observações e comentários de outros usuários no mapa.
    ![Parâmetro do mapa - Assistente de mapa](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Mostra contornos de profundidade do mar. Você precisa instalar o [plugin Náutico](../plugins/nautical-charts) e baixar mapas Náuticos.
    ![Parâmetro do mapa - Contornos de profundidade](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Mostrando borda verde e rótulos "NR" para [território de reserva natural](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Destaca áreas protegidas com uma borda verde e rótulo "NR" para zonas de conservação da vida selvagem.

    &nbsp;&nbsp;&nbsp;![Parâmetro do mapa - Reserva natural](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Mostra polígonos, trilhas, pontos e sinais no mapa com zoom baixo. Isso significa que você pode ver mais detalhes no mapa com baixa ampliação. Observe que a renderização em seu dispositivo pode não ser rápida.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Mostra o tipo de superfície da estrada. A cor da estrada ajuda você a entender qual é a superfície da estrada, como asfalto, grama ou areia. Veja a [legenda do mapa](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indica a qualidade da estrada. Indica a suavidade (inclinação) da estrada. Quão suaves são suas estradas: boas, ruins, possivelmente terríveis, etc. Consulte a [Legenda do Mapa](../map-legend/index.md) para determinar a suavidade de sua estrada.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Mostra a acessibilidade da estrada: privada ou permitida, somente emergência ou estrada com pedágio. Veja a [Legenda do Mapa](../map-legend/index.md) para encontrar estradas disponíveis. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | O recurso [Zonas de Baixa Emissão (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) exibe bordas verdes e rótulos "LEZ" nos mapas para áreas em cidades onde o acesso é restrito para certos veículos poluentes. As LEZs visam melhorar a qualidade do ar, limitando a entrada de veículos que atendem a padrões de emissão específicos. Usar este recurso ajuda os usuários a evitar penalidades, identificando e navegando ao redor dessas zonas verdes, garantindo a conformidade com as regulamentações ambientais locais ao viajar pelos centros das cidades.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Diferentes categorias de edifícios, como residenciais, industriais e comerciais, são codificadas por cores. Consulte a [legenda do mapa](../map-legend/index.md) para obter detalhes. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Exibe ruas iluminadas e não iluminadas, bem como vias subterrâneas e temporariamente iluminadas. Verifique a [legenda do mapa](../map-legend/index.md) para detalhes. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Projetado para mapeadores, este recurso mostra referências, observações e comentários de outros usuários no mapa. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Mostra contornos de profundidade do mar. Você precisa instalar o [plugin Náutico](../plugins/nautical-charts) e baixar mapas Náuticos.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Mostrando borda verde e rótulos "NR" para [território de reserva natural](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Destaca áreas protegidas com uma borda verde e rótulo "NR" para zonas de conservação da vida selvagem.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Rotas {#routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Rotas do mapa - rotas de bicicleta](@site/static/img/map/map-routes-cycle-routes.png) ![Rotas do mapa - rede de caminhada](@site/static/img/map/map-routes-hiking-network.png)

Uma rota é um caminho predeterminado que precisa ser seguido para chegar a um destino específico. Uma rota pode ser otimizada para diferentes tipos de viagem, como ciclismo, caminhada, corrida, transporte público e outros. Você pode ler mais sobre rotas e seus tipos no artigo [Rotas](../map/routes.md).


### Transporte {#transport}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Ao navegar pelas cidades, você precisa de uma visão mais contrastante do transporte público e das paradas. Você pode tocar em uma parada de transporte público e selecionar uma das rotas ou paradas da lista. As rotas de trem também são exibidas nesta configuração.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Mostra as paradas de transporte público.
    ![Paradas de transporte do mapa](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Mostra rotas de ônibus, trólebus e vans.
    ![Ônibus de transporte do mapa](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Mostra rotas de bonde e trem.
    ![Bonde de transporte do mapa](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Mostra rotas subterrâneas.
    ![Metrô de transporte do mapa](@site/static/img/map/map-transport-subway.png)

### Ocultar {#hide}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Para melhorar a visibilidade do mapa, pode ser necessário ocultar certos objetos. Por exemplo, você pode ocultar a água ao usar os [mapas online de satélite com a camada de subjacência](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Oculta os limites regionais dentro dos países, mas os limites estaduais são visíveis.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Oculta todos os polígonos de objetos naturais, função especial para [camada de subjacência/sobreposição](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Oculta todos os polígonos de edifícios.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Oculta todos os polígonos de água (mares, lagos, reservatórios, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Oculta os números das casas no mapa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Oculta objetos propostos - aqueles objetos que estão planejados para construção, mas que possuem apenas um projeto (estradas projetadas, interseções, edifícios e outros).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Oculta os ícones de POI do mapa. No entanto, os rótulos desses POIs ainda aparecerão no mapa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Oculta os rótulos de POI do mapa. No entanto, os ícones de POI ainda aparecerão no mapa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Oculta todos os objetos subterrâneos, como túneis, passagens, andares, etc. Especial para limpar mapas de cidades de objetos não úteis.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Oculta todos os objetos acima do solo. Especial para ver apenas objetos subterrâneos como túneis, passagens, etc.

### Estilo da Estrada {#road-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Configurações especiais para estradas, onde você pode alterar as cores para corresponder ao atlas rodoviário ou adicionar estradas de alto contraste ou contornos em negrito para estradas.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Estilo padrão para rodovias. Consulte a [legenda do mapa](../map-legend/index.md).
![Estilo de estrada do mapa padrão](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Estilo do atlas rodoviário alemão.
![Estilo de estrada do mapa alemão](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Estilo do atlas rodoviário americano.
![Estilo de estrada do mapa americano](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. O alto contraste das estradas.
![Estilo de estrada do mapa alto contraste](@site/static/img/map/map-road-style-high-contrast.png)
- **Pálido**. Cores menos contrastantes das estradas.
![Estilo de estrada do mapa contorno em negrito](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contorno em negrito para estradas.
![Estilo de estrada do mapa contorno em negrito](@site/static/img/map/map-road-style-bold-outline.png)


### Tamanho do Texto {#text-size}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Tamanho do texto do mapa 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Tamanho do texto do mapa 200%](@site/static/img/map/map-text-size-200.png)


### Ampliador de Mapa {#map-magnifier}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Você pode escolher esta configuração tocando longamente no botão "+" ou "-" na tela ou:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Você pode escolher esta configuração tocando longamente no botão "+" ou "-" na tela ou:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Esta configuração ajuda a alterar a ampliação do mapa. É aplicável para mapas raster e vetoriais. Para mapas raster, aplica um efeito de ampliação, então os rótulos de texto parecem maiores ou menores. Para mapas vetoriais, faz com que o mapa pareça mais ou menos detalhado; se você definir um valor baixo, o mapa parecerá ruidoso/lento.

- **75%**
    ![Ampliador de mapa 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Ampliador de mapa 200%](@site/static/img/map/map-magnifier-200.png)


### Idioma do Mapa {#map-language}

A opção **Idioma do mapa** configura a grafia dos nomes no mapa do OsmAnd para os níveis de zoom 7-20, inclusive. Para os níveis de zoom 2-6, os nomes são exibidos no idioma definido para o OsmAnd no menu de configurações do sistema (consulte a seção *[Como alterar o idioma do aplicativo](../start-with/first-steps.md#how-to-change-app-language)*).

Se os nomes no mapa não forem traduzidos para o idioma desejado pela comunidade OSM, você pode usar [nomes transliterados](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) ou *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Nomes locais**
    ![Nomes locais do idioma do mapa](@site/static/img/map/map-language-local-names_2.png)

- **Nomes ucranianos**
    ![Idioma do mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Mostrar nomes locais**
    ![Idioma do mapa local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterar nomes**
    ![Idioma do mapa transliterar](@site/static/img/map/map-language-transliterate_2.png)


## Estilo de Mapa Personalizado {#custom-map-style}

Se você tem um estilo de mapa personalizado, pessoal ou de terceiros, criado de acordo com a [Especificação](../../technical/osmand-file-formats/osmand-rendering-style.md), você pode instalá-lo em seu dispositivo das seguintes maneiras:

- Copie o arquivo `.render.xml` para o seu dispositivo e abra-o com o OsmAnd.
- Use as [caixas de diálogo padrão de importação/exportação](../personal/import-export.md) para exportar ou importar estilos de renderização. Se você criar um pacote `.osf`, ele funciona como um plugin que você pode compartilhar com outras pessoas.
- Após a instalação, você pode selecionar o estilo do mapa no menu.


## Artigos Relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)

> *Última atualização: Março de 2025*