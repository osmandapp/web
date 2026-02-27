---
source-hash: 26ecc10e593a10b425e7d1bc880124a223b29d77fca08040a2c47952e03d4203
sidebar_position: 5
title:  Mapas Vetoriais
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

Os mapas vetoriais representam dados espaciais, como estradas, edifícios, pontos e polígonos, utilizando geometria matemática armazenada em formato binário. Cada elemento (nó, linha ou polígono) é definido por coordenadas e renderizado dinamicamente de acordo com o nível de zoom e o estilo de mapa.

Como os dados vetoriais não são armazenados como imagens fixas, a sua aparência, incluindo cor, largura da linha, transparência ou padrão, pode ser facilmente modificada. Esta abordagem permite uma renderização eficiente, baixo consumo de memória e escalabilidade suave em qualquer nível de zoom sem perda de qualidade.

:::info note
Polígonos muito pequenos podem ser simplificados ou distorcidos durante a geração de dados de mapa. Objetos com uma área inferior a aproximadamente um metro quadrado podem não ser exibidos. Para uma visualização correta, características pequenas devem ser mapeadas como nós únicos em vez de polígonos.
:::


## Casos de Uso {#use-cases}

Os estilos de mapa personalizáveis são uma das principais vantagens do OsmAnd. Pode personalizar a exibição do mapa para se adequar a si e aos seus hobbies, ajustar a exibição ou ocultação de certos objetos do mapa, os tamanhos e cores desses objetos e alterar a escala de exibição de certos objetos.


## Renderização de Mapa {#map-rendering}

### Estilos de Mapa {#map-styles}

O OsmAnd fornece vários estilos de mapa vetorial incorporados otimizados para diferentes atividades. Além dos estilos predefinidos, pode criar e instalar o seu próprio estilo de mapa personalizado com base em regras de renderização.

Para uma descrição detalhada dos estilos disponíveis e instruções sobre a criação de estilos personalizados, consulte o artigo [Estilos de Mapa](../map/map-styles.md).

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

O mapa pode ser exibido num tema claro ou escuro com base no modo selecionado de uma lista de opções. Por predefinição e para todos os novos utilizadores, o [estilo de mapa](#map-styles) alinha-se com o tema escolhido nas definições do sistema do seu dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Sempre exibe o mapa num tema claro para ótima visibilidade diurna.

- **<Translate android="true" ids="daynight_mode_night"/>**. Sempre mostra o mapa num tema escuro, ideal para condições noturnas ou de pouca luz.

- **Nascer do Sol / Pôr do Sol**. Transita automaticamente entre temas diurnos e noturnos de acordo com os horários locais de nascer e pôr do sol, que são detalhados nesta aba na aplicação.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Apenas Android*). Utiliza o sensor de luz do dispositivo para alternar automaticamente entre temas claros e escuros de acordo com os níveis de luz ambiente.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. A exibição do mapa adapta-se ao tema geral da aplicação, mostrando o modo diurno no tema claro e o modo noturno no tema escuro. 

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

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Mostra a acessibilidade da estrada: privada ou permitida, apenas para emergências ou estrada com portagem. Consulte a [Legenda do Mapa](../map-legend/index.md) para encontrar estradas disponíveis.  
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

### Ocultar {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Para melhorar a visibilidade do mapa, pode ser necessário ocultar certos objetos. Por exemplo, pode ocultar a água ao usar os [mapas online de satélite com a camada de subjacência](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Ocultar limites regionais dentro dos países, mas os limites estaduais são visíveis.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Ocultar todos os polígonos de objetos naturais, função especial para [camada de Subjacência/Sobreposição](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Ocultar todos os polígonos de edifícios.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Ocultar todos os polígonos de água (mares, lagos, reservatórios, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Ocultar números de casas no mapa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Ocultar objetos propostos - aqueles objetos que estão planeados para construção, mas que apenas têm um projeto (estradas projetadas, cruzamentos, edifícios e outros).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Ocultar os ícones de POI do mapa. No entanto, as etiquetas desses POIs ainda aparecerão no mapa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Ocultar as etiquetas de POI do mapa. No entanto, os ícones de POI ainda aparecerão no mapa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Ocultar todos os objetos subterrâneos, como túneis, passagens, andares, etc. Especial para limpar mapas em cidades de objetos não úteis.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Ocultar todos os objetos acima do solo. Especial para ver apenas objetos subterrâneos como túneis, passagens, etc.

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


## Renderização de Texto {#text-rendering}

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

### Idioma do Mapa {#map-language}

A opção **Idioma do mapa** configura a ortografia dos nomes no mapa OsmAnd para os níveis de zoom 7-20, inclusive. Para os níveis de zoom 2-6, os nomes são exibidos no idioma definido para o OsmAnd no menu de configurações do sistema (consulte a seção *[Como alterar o idioma da aplicação](../start-with/first-steps.md#how-to-change-app-language)*).  

Se os nomes no mapa não forem traduzidos para o idioma pretendido pela comunidade OSM, pode usar [nomes transliterados](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) ou *<Translate ios="true" ids="translit_names"/>* (iOS) alternador.  

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

- **Mostrar nomes locais**  (adiciona 2ª etiqueta se o nome local for diferente)  
    ![Idioma do mapa local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterar nomes**    
    ![Idioma do mapa transliterar](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### Fontes do Mapa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Fontes do mapa versão Android](@site/static/img/map/map_fonts.png) ![Versão de fontes do mapa](@site/static/img/map/map_fonts_1.png)

Para mapas em chinês simplificado/tradicional, japonês e coreano, podem aparecer caracteres ou símbolos incorretos (como quadrados) se o seu dispositivo não tiver as fontes necessárias. Este problema ocorre ao renderizar nomes locais e pode ser resolvido transferindo as fontes necessárias através do OsmAnd.  

Alguns problemas de fontes relacionados foram documentados no GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Renderização de Topografia {#topography-rendering}

### * Linhas de Contorno {#-contour-lines}

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

### * Profundidade Náutica {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

As linhas de contorno de profundidade náutica representam áreas de igual profundidade, ajudando a visualizar as mudanças na topografia subaquática. Esta funcionalidade está disponível em todos os estilos e modos de mapa e pode ser ajustada com ou sem o plugin de visualização de mapa Náutico ativado.  

Para mais detalhes sobre a visualização de mapa Náutico, visite a [página do plugin de Mapa Náutico](../plugins/nautical-charts).

### Edifícios 3D {#3d-buildings}

<InfoAndroidOnly/> 

![Edifícios 3D](@site/static/img/map/3d_buildings_1_new.png) ![Edifícios 3D](@site/static/img/map/3d_buildings_2.png) 

A funcionalidade **Edifícios 3D** exibe edifícios como modelos volumétricos 3D em vez de formas planas. Os edifícios são gerados a partir de [dados do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings), utilizando informações de altura de etiquetas como `height` e `building:levels` quando disponíveis. Os edifícios 3D são mostrados apenas em níveis de zoom mais elevados (vista da cidade/rua), onde edifícios individuais podem ser exibidos.  
Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D buildings*  
Utilize o interruptor principal para ativar ou desativar a renderização 3D de edifícios. Para ver edifícios em 3D, incline o mapa colocando dois dedos no ecrã e deslizando para cima.

Atualmente, esta opção está disponível apenas quando o [plugin de desenvolvimento do OsmAnd](../plugins/development.md) está ativado.  
Ir para: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

As definições de edifícios 3D estão divididas em dois grupos: **Aparência** e **Desempenho**.

**Aparência: Cor**. Controla a cor dos edifícios 3D. Quando toca em Cor, o OsmAnd abre um ecrã de pré-visualização separado onde pode ver o mapa enquanto ajusta a definição.
- **Estilo de mapa** — utiliza a cor predefinida de edifícios do estilo de mapa atualmente selecionado.
- **Personalizado** — permite definir uma cor personalizada para edifícios separadamente para o modo Dia / Noite.

:::tip Purchase
A Personalização de Cor de Edifícios 3D é uma [funcionalidade paga](../purchases/index.md).  
:::

Se as cores personalizadas não forem compradas, verá um estado vazio com uma descrição curta e um botão Obter. Se o Personalizado estiver disponível, pode alternar entre Dia e Noite, escolher uma cor da paleta (ou abrir Todas as cores) e, em seguida, tocar em Aplicar.

**Aparência: Visibilidade**. Controla a opacidade (transparência) dos edifícios 3D. Utilize o slider para definir a visibilidade como uma percentagem. Valores mais baixos tornam os edifícios mais transparentes e ajudam as estradas/etiquetas a permanecerem legíveis. Valores mais altos tornam os edifícios mais sólidos e visualmente dominantes. Tocar em Visibilidade também abre um ecrã de pré-visualização separado com o slider.

Nos ecrãs de pré-visualização (Cor / Visibilidade), pode utilizar Repor para o predefinido na barra da aplicação para restaurar o valor predefinido.

**Desempenho: Nível de detalhe**. Controla o quão detalhada é a geometria do edifício 3D:
- Baixo (predefinido) — geometria mais simples.
- Alto — geometria mais detalhada.

**Desempenho: Distância de visualização**. Controla quão longe da câmara os edifícios 3D são renderizados:
- Perto (predefinido) — renderiza edifícios mais próximos de si.
- Longe — renderiza edifícios a uma distância maior.

Ambas as opções de desempenho utilizam um interruptor de duas posições diretamente no ecrã de definições de edifícios 3D.

<!--
## Map Legend {#map-legend}

The map legend serves as a key to understanding the symbols used in OsmAnd maps. It explains the meaning behind various map symbols, including points, lines, and areas. For example, symbols like blue sinuous lines indicate rivers, while different colors and shapes may represent buildings, paths, and routes.  

The legend helps users interpret what they see on the map. You can access the full OsmAnd map legend [here](../map-legend/index.md).
-->


## Definições Adicionais {#additional-settings}

### Mostrar Limites {#show-borders}

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

### Grelha de Coordenadas {#coordinates-grid}

:::tip Purchase
A Personalização de Cor da Grelha de Coordenadas é uma [funcionalidade paga](../purchases/index.md).  
:::

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
- **Cor da grelha:** disponível separadamente para o modo Dia/Noite. 
- **Formato de coordenadas:** selecione entre vários formatos disponíveis (ver lista abaixo).

***Formatos de coordenadas disponíveis:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Graus, Minutos, Segundos)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Graus Decimais - formato predefinido WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Graus, Minutos Decimais)
- **UTM** (EPSG:6387, Universal Transverse Mercator - sistema de grelha baseado em zonas). O nível de zoom mínimo é 9, apenas uma zona UTM é exibida de cada vez, pois as zonas são separadas por meridianos a cada 6°
- **MGRS** (Military Grid Reference System)

Por predefinição, a aplicação utiliza o formato de coordenadas selecionado em [Definições gerais](../personal/profiles.md#units--formats), mas pode alterá-lo diretamente neste menu.

[Ação rápida](../widgets/quick-action.md#overview): Também pode adicionar um atalho rápido *Mostrar/Ocultar Grelha de Coordenadas* ao grupo [Configurar Mapa](../widgets/quick-action.md#configure-map) para acesso rápido.

<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  
-->

## Rotas {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir para: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir para: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Rotas do mapa - ciclovias](@site/static/img/map/map-routes-cycle-routes.png)  ![Rotas do mapa - rede de caminhadas](@site/static/img/map/map-routes-hiking-network.png)

Uma rota é um caminho predeterminado que precisa ser seguido para chegar a um destino específico. Uma rota pode ser otimizada para diferentes tipos de viagem, como ciclismo, caminhadas, corrida, transporte público e outros. Pode ler mais sobre rotas e seus tipos no artigo [Rotas](../map/routes.md).


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../map/interact-with-map.md)
- [Configurar Mapa](../map/configure-map-menu.md)
- [Estilos de Mapa](../map/map-styles.md)
- [Rotas](../map/routes.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)