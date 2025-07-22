---
source-hash: d3abf03ba6407956088e1ed644ced36e7ab7236b5ccbcd41e305f4fac26a3b36
sidebar_position: 6
title: Widgets de Marcadores
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

Marcadores são pontos temporários indicados no mapa na forma de bandeiras. Os widgets mostram a *Direção*, *Distância*, *Endereço* e *Tempo estimado de chegada* ao marcador. Eles permitem que você encontre rapidamente marcadores no mapa, bem como altere sua posição. Você pode ler mais sobre marcadores neste [artigo](../personal/markers).


## Widget da Barra Superior {#top-bar-widget}

O widget **Barra de marcadores de mapa** (Android) / **Indicação de distância - Barra superior** (iOS) exibe:

- Distância da sua localização atual (ou do ponto central do mapa / o ponto inicial de toque do mapa quando a Localização está desativada) até o ponto selecionado indicado pelo Marcador no mapa ([Unidades de comprimento](../personal/profiles/#general-settings) podem ser escolhidas nas configurações do Perfil).
- Uma seta da mesma cor do marcador indica a direção da localização atual (ou do ponto central do mapa / o ponto inicial de toque do mapa quando a Localização está desativada) e a orientação no espaço do seu dispositivo (direção) em relação ao marcador.
- Endereço da Localização.
- Ícone de menu que leva à [Lista de marcadores de mapa](../personal/markers/#map-markers-menu).

Você também pode optar por exibir um ou dois marcadores. Leia mais sobre as configurações do widget neste [artigo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*A distância até o marcador* é o comprimento da linha reta entre sua posição (ou o ponto central do mapa / o ponto inicial de toque do mapa quando a Localização está desativada) e o marcador.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Ativar | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="map_markers_bar"/>* |
| Ao tocar | A parte visível do mapa se desloca para a localização do marcador. |
| Toque longo + mover | Para medir a distância e ver a direção de um ponto específico no mapa até o marcador rastreado, você precisa fazer um toque longo e imediatamente mover ligeiramente a posição do mapa (o menu de contexto não deve aparecer). |
| Aproximar marcador | Caso sua localização esteja dentro de um pequeno raio do marcador do mapa (**< 50 m**), no campo do widget você pode ver um botão de marca de seleção para excluir rapidamente o marcador do mapa (marcar como passado). O marcador marcado é substituído pelo próximo marcador na lista de marcadores. |
| Formato de distância | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Ativar | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="map_markers_bar"/>*|
| Ao tocar | A parte visível do mapa se desloca para a localização do marcador. |
| Ao tocar | Alternar entre "Distância" / "Tempo estimado de chegada" (Modo de alternância). |
| Aproximar marcador | Caso sua localização esteja dentro de um pequeno raio do marcador do mapa (**< 50 m**), no campo do widget você pode ver um botão de marca de seleção para excluir rapidamente o marcador do mapa (marcar como passado). O marcador marcado é substituído pelo próximo marcador na lista de marcadores. |
| Formato de distância | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Widgets de Painel {#panel-widgets}

Os widgets **Marcadores de mapa** *(para Android)* e **Indicação de distância - Widgets** *(para iOS)* exibem:

- *Distância da sua localização atual* até o ponto selecionado indicado pelo Marcador no mapa ([Unidades de comprimento](../personal/profiles/#general-settings) podem ser escolhidas nas configurações do Perfil).
- *Tempo estimado de chegada ou ETA*.
Este é o tempo (hh:mm) em que o veículo ou pessoa deve chegar ao destino. É calculado como a distância até o marcador dividida pela velocidade média.
A velocidade média é calculada como a média de todos os valores de velocidade recebidos dos pontos de localização para o intervalo de tempo que você selecionou de 15 segundos a 60 minutos.

Você também pode optar por exibir um ou dois marcadores. Leia mais sobre as configurações do widget neste [artigo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*A distância até o marcador* é o comprimento da linha reta entre sua posição (ou um ponto específico no mapa) e o marcador.
:::


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Panel widgets](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Ativar | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Ao tocar 1 | Alternar entre "Distância" / "Tempo estimado de chegada" (Modo de alternância). |
| Ao tocar 2 | A parte visível do mapa se desloca para a localização do marcador (Modo Ir para localização do marcador) |
| Toque longo + mover | Para medir a distância e ver a direção de um ponto específico no mapa até o marcador rastreado, você precisa fazer um toque longo e imediatamente mover ligeiramente a posição do mapa (o menu de contexto não deve aparecer). |
| Formato de distância | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Panel widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Ativar | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="map_markers_bar"/>* |
| Ao tocar | A parte visível do mapa se desloca para a localização do marcador. |
| Ao tocar | Alternar entre "Distância" / "Tempo estimado de chegada" (Modo de alternância). |
| Formato de distância | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Configurar Widgets de Marcador {#configure-marker-widgets}

Você pode ler informações gerais sobre as configurações do widget de marcadores de mapa nesta [página](../personal/markers#map-markers-widgets).

**Barra de marcadores de mapa**
O widget da barra superior exibe a distância e a direção para o próximo marcador de mapa a partir da sua localização atual. Nas configurações, você pode escolher se um ou dois marcadores serão exibidos na parte superior da tela.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)

**Marcadores de mapa**
O widget mostra a distância ou o tempo estimado de chegada (ETA) para o primeiro ou segundo marcador na lista de marcadores de mapa. Você pode escolher: um marcador, o primeiro ou o segundo, para ser exibido na tela ou ambos.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png) ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Mostra | Este modo permite escolher qual informação o widget exibirá: *Distância* ou *Tempo estimado de chegada*. |
| Intervalo | Se *Tempo estimado de chegada* for selecionado em 'Mostrar', esta opção aparece com uma escolha de tempos (de 15 segundos a 60 minutos) para o cálculo do ETA. |
| Clique no widget | Esta configuração permite escolher qual ação será realizada ao clicar no widget: *Alternar modo* ou *Ir para a localização do marcador*. |


## Aparência no Mapa {#appearance-on-the-map}

A configuração da aparência dos marcadores de mapa está disponível nas versões Android e iOS do OsmAnd. O menu "Aparência no Mapa" é uma configuração geral para os marcadores de mapa e se aplica independentemente de os widgets estarem ativados ou não. Você pode ler as informações detalhadas nesta [página](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Mostra informações sobre o primeiro ou os dois primeiros marcadores na lista de marcadores do mapa. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Indica a direção para o marcador rastreado (um ou dois) como uma seta no mapa. Se o marcador estiver na parte visível do mapa, nenhuma seta é exibida. |
| <Translate android="true" ids="show_guide_line"/> | Mostra a direção, como uma linha tracejada, de um ponto específico no mapa até o marcador rastreado em linha reta. |
| <Translate android="true" ids="one_tap_active"/> | Com um toque no marcador desejado no mapa, este marcador se move para o topo da lista de marcadores de mapa ativos sem abrir o menu de contexto. |
| <Translate android="true" ids="keep_passed_markers"/> | Marcadores adicionados como um grupo de Favoritos ou pontos de passagem GPX marcados como Passados permanecerão no mapa. Se o grupo não estiver ativo, os marcadores desaparecerão do mapa. |

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Mostra informações sobre o primeiro ou os dois primeiros marcadores na lista de marcadores do mapa. |
| <Translate android="true" ids="show_direction"/> | Permite escolher se os widgets serão exibidos e como aparecerão: acima do mapa (<Translate android="true" ids="shared_string_topbar"/>) ou no lado direito da tela (<Translate android="true" ids="shared_string_widgets"/>). |
| Setas no mapa | Indica a direção para o marcador rastreado (um ou dois) como uma seta no mapa. Se o marcador estiver na parte visível do mapa, nenhuma seta é exibida. |
| Linha de direção | Mostra a direção, como uma linha tracejada, de um ponto específico no mapa até o marcador rastreado em linha reta. |

</TabItem>

</Tabs>


## Artigos Relacionados {#related-articles}

- [Configurar Tela](./configure-screen.md)
- [Botões do Mapa](./map-buttons.md)
- [Widgets Informativos](./info-widgets.md)
- [Widgets de Navegação](./nav-widgets.md)
- [Régua de Raio e Régua](./radius-ruler.md)
- [Ação Rápida](./quick-action.md)


> *Última atualização: Outubro de 2023*