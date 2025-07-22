---
source-hash: 27c365e2cc23607b9c9893a7baf13d93386a9e23a925c712b829dec94e7a4355
sidebar_position: 2
title: Botões do Mapa
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

Os botões do mapa, incluindo *Zoom*, *Pesquisar*, *Direções*, *Bússola*, *Minha Localização*, *Modo 3D* e *Menu*, são os principais controles para interagir com o mapa. Cada botão oferece funcionalidades específicas para aprimorar sua experiência de navegação e uso do mapa.


## Minha Localização e Zoom {#my-location-and-zoom}

![Menu da tela de configuração](@site/static/img/widgets/location_zoom_buttons.png)

Use estes botões para controlar como o mapa é exibido na tela do seu dispositivo:

- **Minha Localização**. Mostra se o centro do mapa está sincronizado com a geolocalização atual do seu dispositivo.
- **Zoom**. Permite ajustar o nível de zoom do mapa para fornecer mais ou menos detalhes.
Se você quiser mais informações sobre como usar esses botões, consulte o artigo [Interagir com o mapa](../map/interact-with-map.md#my-location-and-zoom).


## Direções {#directions}

![Botão de direções permite](@site/static/img/widgets/directions_button_allows.png)

O botão **Direções** é essencial para o planejamento de rotas e navegação:

- [Construir uma rota](../navigation/index.md). Use este botão para criar uma rota.
- [Iniciar navegação](../navigation/index.md). Inicie a navegação curva a curva.
- No modo de navegação, o botão *Direções* não fica visível por padrão, mas aparece após um breve toque no mapa.

Estados indicativos do botão *Direções*:

- O *ícone cinza padrão* indica que a rota ainda não foi criada. Tocar neste ícone abre a funcionalidade de [configuração de rota](../navigation/setup/route-navigation.md).
- O *ícone azul padrão* indica que a rota foi construída, mas a navegação ainda não começou. Tocar neste ícone abre a funcionalidade de [configuração de rota](../navigation/setup/route-navigation.md#start--stop-navigation).
- O *ícone de seta azul* indica que a navegação está ativa. Tocar neste ícone abre os [detalhes da rota atual](../navigation/setup/route-details.md).


## Configurar Mapa {#configure-map}

![Configurar Mapa](@site/static/img/widgets/configure_map.png)

O botão **Configurar mapa** fornece acesso ao [menu Configurar Mapa](../map/configure-map-menu.md). O ícone também reflete o [Perfil de aplicativo atual](../personal/profiles.md), permitindo que você identifique e alterne entre diferentes perfis.


## Menu Principal {#main-menu}

![Botão do menu principal](@site/static/img/widgets/main_menu_button.png)

O botão [**Menu Principal**](../start-with/main-menu.md) abre o menu geral, concedendo acesso a [todos os recursos do aplicativo](../start-with/main-menu.md). No modo de navegação, este botão fica oculto por padrão e se torna visível após um breve toque no mapa.


## Pesquisar {#search}

![Botão de pesquisa](@site/static/img/widgets/search_button.png)

O botão Pesquisar oferece acesso rápido aos [recursos de pesquisa](../search/index.md), permitindo que você encontre locais, pontos de interesse e outras informações diretamente do mapa.


## Bússola {#compass}

O botão Bússola indica a orientação do mapa na tela do seu dispositivo. Para informações adicionais, consulte o artigo [Interagir com o mapa](../map/interact-with-map.md#map-orientation--compass).


### Modos de Orientação do Mapa {#map-orientation-modes}

- ![Bússola](@site/static/img/widgets/map_butt_manually_ios.png)  
**Rotacionado manualmente**. Neste modo, você pode girar manualmente o mapa com um [gesto de dois ponteiros (toque e rotação com dois dedos)](../map/interact-with-map.md#gestures) de acordo com sua preferência. A orientação do mapa não depende da direção da viagem ou da bússola do dispositivo, mas é determinada por você. O modo de rotação manual é definido por padrão.

- ![Bússola](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Direção do movimento**. Neste modo, o mapa é orientado de acordo com a direção do seu movimento conhecida a partir dos dados GPS. Por exemplo, se você virar à direita, o mapa também gira para que o lado direito da tela corresponda à direção do movimento. Para detalhes, vá para [Girar mapa por rumo](../map/interact-with-map#rotate-map-by-bearing).

- ![Bússola](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Direção da bússola**. O ícone no botão aponta para o Norte real, e o mapa se move de acordo com a orientação da bússola do seu dispositivo. Dessa forma, o norte do mapa corresponde ao norte real, e você pode ver a orientação do mapa em relação ao terreno circundante. Seu dispositivo deve estar na posição mais horizontal possível. Se o seu dispositivo não tiver um sensor de bússola, a orientação do mapa permanece inalterada.

- ![Bússola](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Norte para cima**. Neste modo, o mapa é fixado (com um bloqueio rígido) na direção Norte, que é a borda superior do seu dispositivo. Independentemente da direção em que o dispositivo está se movendo, o mapa permanece estático, e você pode ver sua posição em relação ao seu entorno. O mapa não possui rotação automática ou manual.

### Comportamento de Toque da Bússola {#compass-tapping-behavior}

O botão da bússola oferece várias ações para controlar a orientação do mapa:

- **Toque único**. Um *toque único* no [botão Bússola](../widgets/map-buttons.md#compass) (localizado no canto superior esquerdo da tela quando [visível](../widgets/map-buttons.md#display-options)) reorienta instantaneamente a orientação do mapa *para o Norte* em todos os modos de orientação do mapa. Mesmo que o mapa esteja no modo *Direção da bússola*, ele ainda gira por um momento e depois retorna à orientação dinâmica desse modo.

- **Toque duplo**. Para alternar rapidamente entre os modos de orientação do mapa, como seguir a direção do GPS ou girar com o dispositivo, *toque duas vezes* no [botão Bússola](../widgets/map-buttons.md#compass) (quando [visível](../widgets/map-buttons.md#display-options)).

- **Toque longo**. Com um *toque longo* no [botão Bússola](../widgets/map-buttons.md#compass) (quando [visível](../widgets/map-buttons.md#display-options)), você pode abrir uma lista de todos os modos de orientação do mapa e selecionar o desejado. Esta lista também pode ser aberta nas [Configurações de perfil](../personal/profiles.md#appearance).


### Opções de Exibição {#display-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget da bússola](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget da bússola](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

O ícone da bússola no botão sempre aponta para o Norte. Você pode selecionar como o botão da bússola é exibido na tela.

- **Sempre visível**. O botão não desaparece da tela.
- **Sempre oculto**. Neste caso, você não pode alterar rapidamente a orientação do mapa, mas o botão não ocupará espaço na tela.
- **Visível se o mapa for girado**. O botão não fica visível enquanto a bússola aponta para o Norte na borda superior do seu dispositivo.  


## Modo 3D {#3d-mode}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![Modo 3D](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![Modo 3D](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Se este modo for selecionado para um botão, você precisará usar um gesto para alterar a visualização do mapa. Toque no mapa com dois dedos e mova-os para cima e para baixo para ajustar a inclinação do mapa.  
- *<Translate android="true" ids="shared_string_visible"/>*. O botão é sempre exibido na tela do mapa.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. O botão é exibido na tela do mapa quando você altera a visualização do mapa com um gesto de [*dois dedos e mover*](../map/interact-with-map.md#gestures).  

### Configurações Adicionais {#additional-settings}

1. **Exibir o botão**. (*Para Android*) A configuração para o botão *Modo 3D* aparece na lista da tela de Configuração somente se o motor de renderização do mapa [Versão 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) estiver selecionado.

2. **Salva o ângulo**. Após mudar para o modo 3D e alterar o ângulo manualmente com um gesto, o ângulo é salvo e usado na próxima vez que o modo 3D for ativado. Esta opção é salva apenas para o perfil selecionado no momento.

3. **Movendo**. Você pode colocar o botão em qualquer lugar na tela do seu dispositivo. Para fazer isso, segure o botão e, sem tirar o dedo, arraste-o para o local desejado.

4. **Posição do botão**. A posição do botão no mapa na tela do aplicativo é salva separadamente para cada perfil.

5. **Recomendação**. Recomenda-se baixar e ativar o [mapa de Relevo](../plugins/topography.md#hillshade-slope-and-altitude-layers) para a região selecionada.


## Botões Personalizados {#custom-buttons}

[Widget de ação rápida](./quick-action.md) é um botão configurável com vários tipos de ação que podem ser atribuídos. Também é possível ter vários [botões personalizados](./quick-action.md#custom-buttons).


## Aparência do Botão do Mapa {#map-button-appearance}

<InfoAndroidOnly/>

| Botões padrão | Botões personalizados |
| :--- | :--- |
| ![Aparência do Botão do Mapa](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Aparência do Botão do Mapa](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

As configurações para a aparência do botão do mapa estão disponíveis através dos seguintes menus:

- *Menu → Configurar tela → Botões → Botões padrão*
- *Menu → Configurar tela → Botões personalizados → Ação rápida → menu de três pontos → Aparência*

A personalização da aparência dos botões permite ajustar o tamanho, a forma, o ícone e a opacidade do plano de fundo para [Ação Rápida (Botões personalizados)](../widgets/quick-action.md#button-appearance) e [Botões padrão](../widgets/configure-screen.md#button-appearance). Essa flexibilidade permite personalizar a interface para atender às suas preferências e melhorar a usabilidade.


## Artigos Relacionados {#related-articles}

- [Configurar Tela](./configure-screen.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegação](./nav-widgets.md)
- [Régua de raio e Régua](./radius-ruler.md)
- [Widgets de marcador](./markers.md)
- [Ação Rápida](./quick-action.md)

> *Última atualização: Fevereiro de 2025*