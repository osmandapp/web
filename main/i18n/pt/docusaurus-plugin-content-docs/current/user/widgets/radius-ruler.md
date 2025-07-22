---
source-hash: 14db1ff378f43e871dddc04366518dc17627a2aeb32b40272132b8334b11f558
sidebar_position: 5
title: Régua de Raio e Régua
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

As **ferramentas de Régua** no OsmAnd foram projetadas para ajudar você a medir distâncias e entender a [escala do mapa](https://en.wikipedia.org/wiki/Scale_(map)) com precisão.

- A ferramenta **Régua** exibe uma escala de mapa dinâmica em unidades como metros ou pés, ajudando você a avaliar visualmente as distâncias entre objetos na tela.
- A **Régua de Raio** permite que você defina um raio a partir de qualquer ponto no mapa, mostrando círculos concêntricos que representam intervalos de distância.
- A ferramenta **Distância por Toque** permite que você meça distâncias tocando no mapa — seja a partir de sua localização atual ou entre quaisquer duas localizações.

Essas ferramentas são úteis para planejar rotas, estimar a proximidade de pontos de referência e analisar áreas — seja para atividades ao ar livre ou navegação precisa.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Régua {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

A **Régua** exibe a escala atual do mapa como um segmento de linha rotulado com seu comprimento real (por exemplo, 100 m ou 500 pés), na parte inferior da tela. Características:

- A escala se adapta dinamicamente à medida que você aumenta ou diminui o zoom.
- Ela fornece uma referência visual para estimar distâncias reais entre objetos no mapa.
- O comprimento do segmento é arredondado para unidades convenientes (por exemplo, 100 m), correspondendo aproximadamente à largura de um polegar para uso intuitivo.

Essa ferramenta é útil quando você precisa de uma compreensão rápida dos tamanhos ou distâncias dos objetos sem colocar marcadores ou rotas.

| | |
|------------|------------|
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widget de Régua de Raio {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

O [Widget de Régua de Raio](../widgets/info-widgets.md#radius-ruler) mostra a distância entre sua localização atual (*Minha Localização*) e o centro do mapa. Você também pode mover o mapa para definir qualquer ponto central personalizado. Características:

- Exibir círculos concêntricos centrados no ponto selecionado.
- O primeiro círculo reflete a [escala atual do mapa](#ruler) para referência visual rápida.
- Ajusta-se automaticamente ao aumentar o zoom para manter valores de raio precisos.

Use este widget para estimar a proximidade de pontos de interesse ou planejar em torno de uma área definida.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Bússola para Régua de Raio {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Quando a **Régua de Raio** está ativa, o mapa exibe uma sobreposição de bússola para ajudar a orientar-se no espaço. A sobreposição mostra como o mapa está alinhado em relação ao Norte verdadeiro e pode incluir um triângulo azul indicando a direção atual do dispositivo.

- O anel da bússola mostra a orientação do mapa — se o Norte está para cima ou girado.
- Um **triângulo azul** indica a direção para a qual seu dispositivo está apontando.
- Para usar este recurso, o dispositivo deve suportar e habilitar um **sensor de bússola** (bússola GPS, magnetômetro).
- Segurar o dispositivo horizontalmente melhora a precisão e a visualização.
- Se o **triângulo azul** e a **seta vermelha** (Norte) apontarem para cima, o dispositivo está alinhado com o Norte verdadeiro.

Esta sobreposição é útil para navegação ao ar livre, permitindo que você combine a [orientação do mapa](../map/interact-with-map.md#map-orientation--compass) com o ambiente real.

| | |
|------------|------------|
| Habilitar | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="radius_ruler_item"/>* |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Posição Central / Inferior {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Outros → Posição da localização na tela*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Para aumentar o raio visível ao redor de sua localização, você pode alterar a posição da Régua de Raio selecionando a opção *Centro* ou *Inferior*.

Para mais informações sobre *a posição na tela*, consulte o artigo [Configurar Tela](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Visualização 3D {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Você pode mudar para a **visualização 3D** para visualizar melhor as distâncias e o terreno circundante ao usar a Régua de Raio. Essa visualização inclina o mapa e fornece um efeito de perspectiva que expande o raio visível.

- Toque [no botão de localização](../map/interact-with-map.md#my-location-and-zoom) para focar em sua posição.
- Use um gesto de [deslizar com dois dedos para cima](../map/interact-with-map.md#gestures) para inclinar o mapa para o modo 3D.

Os círculos de raio aparecerão com profundidade, o que é particularmente útil para planejar rotas em áreas montanhosas ou ambientes urbanos onde o contexto vertical é importante.


## Distância por Toque {#distance-by-tap}

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

A ferramenta **Distância por Toque** permite medir distâncias entre pontos no mapa sem usar a Régua de Raio ou criar uma rota.

Existem dois casos de uso:

- **Distância da sua localização até um ponto**
  Toque em qualquer lugar do mapa e uma linha reta aparecerá da sua localização atual até o ponto tocado, junto com um rótulo de distância. A linha permanece na tela mesmo se você tocar em outro lugar.

- **Distância entre dois pontos quaisquer**
  Toque em dois pontos no mapa simultaneamente (multitoque). Uma linha conecta os dois pontos, e a distância medida é exibida.

| | |
|------------|------------|
| Habilitar |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Tamanho do texto (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Formato das unidades | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Guias em Vídeo {#video-guides}

Assista a estes tutoriais curtos para aprender como usar a Régua de Raio e ferramentas relacionadas no OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Artigos Relacionados {#related-articles}

- [Configurar Tela](./configure-screen.md)
- [Botões do Mapa](./map-buttons.md)
- [Widgets Informacionais](./info-widgets.md)
- [Widgets de Navegação](./nav-widgets.md)
- [Ação Rápida](./quick-action.md)
- [Widgets de Marcadores](./markers.md)

> *Última atualização: Maio de 2025*