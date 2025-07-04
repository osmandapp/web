---
source-hash: 647711494d62816fdbd45cf8b18ef90488d2e460f73ad6eb67974d9a0645067f
sidebar_position: 1
title: Tela do mapa durante a navegação
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



## Visão geral {#overview}

Este artigo descreve como configurar a aparência do mapa durante a navegação. Isso inclui recursos como exibição de [POIs ao longo da rota](#show-points-along-the-route), uso de [alertas na tela](#screen-alerts), [aparência da linha da rota](#route-line-appearance), incluindo cor, largura e setas de curva. Esses recursos estão intimamente relacionados às [configurações de navegação da rota](../setup/route-navigation.md#settings).


## Mapa durante a navegação {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Tela do mapa durante a navegação](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Tela do mapa durante a navegação](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Ao navegar, o mapa é uma ferramenta visual para localizar sua posição, identificar seu destino, planejar sua rota e visualizar a orientação da navegação. Você pode usar o zoom para fazer isso e arrastar e girar o mapa conforme necessário. O mapa também pode exibir informações da estrada, nomes de ruas, edifícios e outros objetos para ajudá-lo a determinar facilmente sua rota.  

Durante a navegação, a aparência do mapa se ajusta com base no perfil de navegação selecionado. Antes de iniciar a navegação, certifique-se de que a aparência do mapa esteja alinhada com suas preferências de como ele deve funcionar durante a condução.

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | O tempo durante o qual a visualização do mapa é sincronizada com a posição atual após o movimento. | *Valor:* <br /> Nunca, 5 seg, 10 seg, 15 seg, 20 seg, 25 seg, 30 seg, 45 seg, 60 seg, 50 seg.|
| *<Translate android="true" ids="auto_zoom_map"/>* | Dimensiona automaticamente o mapa de acordo com sua velocidade, desde que o mapa esteja sincronizado com sua posição atual. | *Valor:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - zoom manual. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom é 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom é 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom é 5 m. |
| *<Translate android="true" ids="snap_to_road"/>* | O ícone da posição atual será associado à rota de navegação atual. | Você pode desativar esta opção, mas todas as opções relacionadas à estrada, como exibição de faixa, também não serão visíveis durante a navegação. |
| *<Translate android="true" ids="approximate_bearing"/>* | Determina a direção com base na rota de navegação que você está seguindo. | A configuração só é visível quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado. <br /> Essas configurações devem ser ativadas se a orientação do mapa direcional estiver invertida ou tremendo ao usar o [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Mostrar pontos ao longo da rota {#show-points-along-the-route}

A configuração *Mostrar ao longo da rota* permite configurar parâmetros adicionais da rota e é necessária para o funcionamento de widgets como o [Nome da rua](../../widgets/nav-widgets#street-name) e o [Widget de alerta](../../widgets/nav-widgets.md#alert-widget). As opções incluem exibir [**POIs**](#points-of-interest-pois) e [**Meus Favoritos**](#my-favorites) ao longo da rota ou usá-los como um complemento aos já configurados para o perfil, bem como exibir uma lista completa de [**Avisos de trânsito**](#traffic-warnings) ao longo da rota.  

- A capacidade de definir diferentes distâncias (até 5 km, ou 3,11 milhas, dependendo da [unidade de comprimento](../../personal/profiles.md#units--formats) que você definir) da rota para pontos próximos é útil ao usar tipos de roteamento como [Linha reta](../routing/straight-line-routing.md) ou [Direto ao ponto](../routing/direct-to-point-routing.md).
- Para a configuração *Mostrar ao longo da rota*, recomenda-se usar [Comandos de voz](../guidance/voice-navigation.md) para navegação.
- *POIs, Favoritos e Avisos de trânsito* não são exibidos na lista para uma rota que você já percorreu.


### Visualizar e selecionar pontos {#view-and-select-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![pontos ao longo da rota](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Mostrar ao longo da rota*

![pontos ao longo da rota](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Ao criar uma rota, você pode definir os tipos de pontos a serem exibidos ao longo da rota na seção *Navegação*.


### Pontos de Interesse (POIs) {#points-of-interest-pois}

![Sobreposição de POI Android](@site/static/img/map/poi_overlay_android.png) ![Sobreposição de POI iOS](@site/static/img/map/poi_overlay_ios.png)

As configurações de POIs em [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) estão associadas à configuração **Mostrar ao longo da rota**. Esta é essencialmente uma configuração adicional para exibir POIs no mapa, diretamente relacionada à rota criada.  

Quando você especifica a exibição de certos POIs no *Configurar mapa*, todos eles são exibidos nos mapas que você baixou, quer você tenha selecionado categorias ou, se não se importar com a categoria, selecionado POIs próximos.  

- O número e a identificação dos POIs são *dependentes da escala*.

- A configuração *Mostrar ao longo da rota* exibe a mesma categoria que na *sobreposição de POIs*, mas você vê a *lista inteira* de POIs selecionados de uma vez, começando do ponto da localização atual na distância definida dentro de sua rota.  

- Você pode remover POIs desnecessários da lista ou editá-los no [Menu de contexto](../../map/map-context-menu.md) tocando em um deles.

- A lista contém os [tipos de POI](../../map/point-layers-on-map.md#poi-types) selecionados e informações breves sobre cada um deles, como o *ícone do tipo, nome, distância do ponto de localização atual ao POI ao longo da rota*, e *indicações de qual lado da rota em linha reta e a que distância o POI está*.  


### Meus Favoritos {#my-favorites}

A lista contém todos os pontos [Favoritos](../../personal/favorites.md#favorite-point) adicionados anteriormente perto da rota que você criou. Assim como os POIs, você pode selecionar a distância em que esses pontos estão localizados.  

- Se você [desativar a exibição de Favoritos no mapa](../../map/configure-map-menu.md), eles não desaparecem da lista e continuam a ser exibidos no [widget](../../widgets/nav-widgets.md#street-name) e anunciados quando você se aproxima deles.

- Você pode adicionar seus *pontos Favoritos* ao mapa não apenas com antecedência, mas também enquanto navega em uma rota.

- *Para atualizar a lista*, desative e reative Meus Favoritos.

- Cada ponto contém um nome ou coordenadas, um grupo, a distância do ponto de localização atual ao *Favorito* diretamente na linha da rota, informações sobre a que distância à direita ou à esquerda o ponto está da linha e a direção da rota.


### Avisos de trânsito {#traffic-warnings}

Os *avisos de trânsito* não são exibidos diretamente no mapa como *POIs* ou *Meus Favoritos*.

- **Para ativar** esta opção e ver os avisos, você deve primeiro ativar e configurar o [widget de alertas](../../widgets/nav-widgets.md#alert-widget).

- A opção de exibir *avisos de trânsito* ao longo de sua rota permite que você veja a lista completa pouco antes de iniciar sua rota, o que é útil ao planejar sua viagem.

- Você pode remover alertas desnecessários da lista ou tocar no nome do alerta para [editar o local](../../map/map-context-menu.md#avoid-road).


## Alertas de tela {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Notificações, como avisos de trânsito ou limites de velocidade, aparecerão na tela como um widget. Elas aparecem no canto inferior esquerdo enquanto você está navegando. | [Tipos de widgets de alerta](../../widgets/nav-widgets.md#alert-widget) |


## Aparência da linha da rota {#route-line-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Rota de navegação Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Rota de navegação Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Você pode selecionar a aparência da linha da rota por estilo ou selecionar manualmente a cor, largura e transparência da linha. Além disso, você pode escolher se deseja mostrar setas de curva e setas de direção na linha.

**Avançado**: a configuração Personalizar linha da rota permite ajustar a aparência da linha da rota para exibir mudanças de elevação, subidas ou descidas significativas, gelo na estrada, estradas não pavimentadas, rodovias e outros possíveis obstáculos. Você também pode selecionar ou criar [esquemas de cores](../../personal/color-palette-schemes.md#routes) personalizados para aplicar à linha da rota.


:::note
 <ProFeature/> Alguns parâmetros você só pode usar com a <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">assinatura OsmAnd Pro</a>.
:::


### Cor {#color}

A configuração **Cor** altera os tons de cor das linhas da rota. Sua cor geral muda dependendo do tipo selecionado da coleção OsmAnd e de acordo com a **Legenda do Mapa**. Alternativamente, sua cor se torna a cor e transparência que você definiu manualmente.

- ***<Translate android="true" id="map_widget_renderer"/>***. Usado com as cores padrão. Para uma descrição completa das cores, vá para [Estilos de mapa padrão](../../map/vector-maps.md#default-map-styles).  
    ![estilo de mapa](@site/static/img/navigation/route/map_st_2.png)

- ***Personalizado***. Permite selecionar uma linha em qualquer cor e transparência preferidas. Você pode selecionar diferentes configurações para o mapa diurno e separadamente para o mapa noturno.  
    ![personalizado](@site/static/img/navigation/route/custom.png)   ![personalizado](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Mostra a altura do ponto da rota como um gradiente **verde-amarelo-vermelho**. **Verde** indica o ponto mais baixo da rota, **amarelo** indica a altura média do ponto e **vermelho** é o mais alto. Se a diferença de altitude da rota for < 100 metros, o gradiente é parcialmente aplicado ou não aplicado, por exemplo, para uma subida simples de 100 metros para 150 metros - o gradiente será **verde-amarelo**. Observe que a cor não representa o valor absoluto da altitude.  
    ![Altitude](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. A linha da rota é colorida em diferentes cores dependendo do perfil de elevação da rota. Uma descrição detalhada está no artigo *Plugin de topografia*, seção [Inclinação](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Altitude](@site/static/img/navigation/route/Slope.png)   ![Altitude](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colore uma rota ou linha de trilha de acordo com a *classificação da estrada*. Uma descrição detalhada está na seção *Mapas Vetoriais - [Estilo da Estrada](../../map/vector-maps.md#road-style)*.  
    ![Altitude](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Fornece informações sobre a superfície física da estrada ou trilha. Uma descrição detalhada pode ser encontrada no artigo *Estilo de Mapa OsmAnd - [Superfície](../../map-legend/osmand.md#surface-smoothness)* na seção *Legenda do Mapa*.  
    ![Altitude](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classificação de manobrabilidade de estradas ou trilhas para veículos com rodas, especialmente no que diz respeito à regularidade e suavidade da superfície. Uma descrição detalhada pode ser encontrada no artigo *Estilo de Mapa OsmAnd - [Suavidade](../../map-legend/osmand.md#surface-smoothness)* na seção *Legenda do Mapa*.  
    ![Altitude](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colore uma rota ou linha de trilha de acordo com a *classificação de estradas de inverno*. Uma descrição detalhada pode ser encontrada no artigo *Mapas Vetoriais*, seção [Estradas de inverno e gelo](../../map/vector-maps.md#winter-and-ski).  
    ![Altitude](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Coloração de uma rota ou linha de trilha por composição do pavimento. Tipicamente, usado quando a rede rodoviária é em grande parte não pavimentada. Uma descrição detalhada pode ser encontrada no artigo *Estilo de Mapa OsmAnd - [Firmeza da superfície](../../map-legend/osmand.md#surface-smoothness)* na seção *Legenda do Mapa*.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Dificuldade de trilhas para cavalos***. Renderiza caminhos de acordo com a dificuldade das trilhas para cavalos.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)


### Largura {#width}

Você pode ajustar a largura da linha da rota para alinhá-la com a estrada ou caminho exibido no mapa. Para uma identificação visual mais clara, você pode aumentar ou diminuir manualmente a largura da linha conforme necessário. Para mais detalhes, consulte o artigo *Trilhas e Rotas — [Aparência](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. É usado com a largura padrão definida pelo OsmAnd. Uma descrição completa pode ser encontrada no artigo *Mapas Vetoriais*, seção [Estilo do mapa](../../map/vector-maps.md#default-map-styles).  
    ![estilo de mapa](@site/static/img/navigation/route/map_st_2.png)

- ***Larguras Fina, Média e Negrito***. Você pode selecionar a largura da linha para corresponder à largura da estrada ou enfatizar a linha da rota mais fortemente no mapa.  
    ![largura](@site/static/img/navigation/route/width_med.png)

- ***Personalizado***. Permite exibir uma linha da largura que você precisa. Use a barra deslizante para selecionar a largura.  
    ![personalizado](@site/static/img/navigation/route/custom_2.png)  


### Setas de curva {#turn-arrows}

A configuração Setas de Curva permite selecionar se as setas de curva são exibidas na linha da rota.  

- ***No mapa***  
    ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![setas de curva ios mapa](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***No aplicativo***  
    ![Altitude](@site/static/img/navigation/route/turn_arr.png)   ![setas de curva ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Artigos relacionados {#related-articles}

- [Parâmetros da rota](../routing/osmand-routing.md#routing-types)
- [Preparação da rota](../setup/route-navigation.md)
- [Navegação por trilha](../setup/gpx-navigation.md)
- [Navegação por marcadores](../setup/markers-navigation.md)
- [Detalhes da rota](../setup/route-details.md)
- [Configurações de navegação](./navigation-settings.md)
- [Comandos de voz / Notificações](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última atualização: Dezembro de 2024*