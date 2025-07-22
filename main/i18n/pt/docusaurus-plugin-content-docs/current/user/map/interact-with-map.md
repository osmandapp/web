---
source-hash: ca480d4fada9f677b9e8a4b60267b6ef26adb8611c8539c54da069d6ba39c8d5
sidebar_position: 2
title: Interagir com o Mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Visão Geral {#overview}

Este artigo explica como personalizar e interagir com o mapa usando vários botões e gestos. Abrange como girar, ampliar, ajustar o ângulo de visão e alterar o ângulo de visão do mapa, girá-lo manual ou automaticamente usando a bússola, ou de acordo com a direção.


## Gestos {#gestures}

Os gestos são essenciais para navegar no mapa de forma fácil e intuitiva.

| Ação do Mapa | Gesto |
|:------------|:-------------|
| **Mover** | Toque e segure o mapa com **um** dedo e arraste para mover-se. |
| **Deslizar** | Deslize o mapa com **um** dedo. |
| **Aumentar Zoom** | Toque duas vezes no mapa com **um** dedo. <br/> Toque duas vezes com **um** dedo e deslize para baixo. <br/> Pinçe com **dois** dedos para aumentar o zoom. |
| **Diminuir Zoom**| Toque duas vezes com **dois** dedos. <br/> Toque duas vezes com **um** dedo e deslize para cima. <br/> Pinçe com **dois** dedos para diminuir o zoom. |
| **Girar** | Toque no mapa com **dois** dedos e gire-os em movimento circular. |
| **Inclinar (3D)** | Toque com **dois** dedos e mova-os para cima ou para baixo. <br/> Disponível apenas com o [Mecanismo de Renderização de Mapa](../personal/global-settings.md#map-rendering-engine) versão 2 (OpenGL). |

As animações de deslizamento podem ser desativadas nas configurações com uma [opção especial](#no-animations).


## Minha Localização e Zoom {#my-location-and-zoom}

![Menu da tela de configuração](@site/static/img/widgets/location_zoom_buttons.png)

**Minha localização**.
O botão *Minha Localização* é um ícone circular que indica se o centro do mapa está sincronizado com a geolocalização atual do seu dispositivo. Frequentemente referido como o botão "Onde estou?", ele ajuda você a encontrar rapidamente sua localização no mapa. Durante a navegação, o mapa geralmente permanece sincronizado com a localização do dispositivo, então o botão permanece oculto. No entanto, ele se torna visível se o mapa e sua localização ficarem dessincronizados devido à interação do usuário. Tocar no botão recentralizará o mapa em sua localização atual, e um toque duplo mudará a visualização para o modo 3D.

- O botão *Minha Localização* tem os seguintes estados:
  - *Ícone azul completo*. A localização foi encontrada, mas não está sincronizada com o mapa.
  - *Ícone branco*. A localização foi encontrada e está sincronizada com o mapa.
  - *Ícone cinza*. A localização ainda não foi encontrada.
  - *Ícone de seta*. O modo 3D está ativado.

- **Toque longo** (*Android*) no botão *Minha Localização* abre o [menu de contexto do mapa](../map/map-context-menu.md), permitindo que você compartilhe sua localização.

<br/>

**Botões de zoom**.
Os *botões de zoom* estão sempre visíveis ao lado de *Minha Localização* e permitem controlar o nível de zoom do mapa.

- Alterar o nível de zoom não afeta a sincronização do mapa com sua localização.
- **Toque longo** nos *botões de zoom* abre a caixa de diálogo *Lupa do Mapa*, permitindo ajustar os níveis de detalhe do mapa.
- Lembre-se de que, durante a navegação, o zoom pode ser controlado automaticamente pela configuração **Zoom automático**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Aparência da Minha Localização {#my-location-appearance}

Você pode personalizar os ícones do botão **Minha Localização** usando as configurações de aparência do Perfil. Leia mais sobre como fazer isso [aqui](../personal/profiles.md#profile-appearance).


## Lupa do Mapa {#map-magnifier}

A *Lupa do Mapa* é uma ferramenta que aprimora a visibilidade do mapa, semelhante a uma lupa usada com mapas de papel. Ela permite que você amplie o mapa para visualizar texto e detalhes com mais clareza ou para ajustar o nível de detalhe mantendo a mesma escala. Para mais informações, vá para o artigo [Mapas Vetoriais](../map/vector-maps.md#map-magnifier).


## Modos de Orientação do Mapa {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget da bússola](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget da bússola](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

Os *modos de orientação do mapa* permitem escolher como o mapa é exibido na tela do dispositivo. O OsmAnd oferece modos como **Giro Manual**, **Direção do Movimento**, **Direção da Bússola** e **Norte para Cima**. Habilitar cada modo altera a forma como o mapa é orientado de acordo com a opção selecionada. Para detalhes completos, consulte o artigo [Botões do Mapa](../widgets/map-buttons.md#compass).


## Bússola {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget da bússola](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget da bússola](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

O botão da bússola mostra como o [mapa está orientado](#map-orientation-modes). A *seta vermelha* nos ícones, ou a direção da seta no modo *Direção do movimento*, indica o Norte. [O ícone no botão da bússola](../widgets/map-buttons.md#compass) indica o modo de orientação atual do mapa. O widget do botão da bússola oferece três [opções de interação](../widgets/map-buttons.md#compass-tapping-behavior): *Toque único* gira o mapa para o Norte, *Toque duplo* alterna entre todos os modos de orientação do mapa e *Toque longo* abre a lista de modos.


## Girar Mapa por Direção {#rotate-map-by-bearing}

No modo **girar mapa por direção** ([Direção do movimento](../widgets/map-buttons.md#compass)), o mapa se alinha automaticamente com sua direção de movimento, de modo que a área à sua frente é exibida na parte superior da tela. Este modo aprimora a navegação, deslocando o centro do mapa ligeiramente para baixo, mostrando mais da rota à frente. Se você estiver parado, o mapa permanece fixo.

Você pode ativar este recurso via *Menu → Configurações → Perfis → Configurações gerais → Aparência → Orientação do mapa* ou tocando duas vezes no [botão da Bússola](../widgets/map-buttons.md#compass-tapping-behavior). Para mais detalhes sobre direção, consulte [aqui](../widgets/nav-widgets.md#bearing-widget).


## Inclinação do Mapa e Horizonte {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inclinação android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Inclinação android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Inclinação ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Inclinação ios 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

Com o novo [mecanismo de renderização](../personal/global-settings.md#map-rendering-engine) do mapa, você pode alterar a [inclinação da câmera](../plugins/development.md#camera-tilt) de 90 (sem inclinação) para 10 graus. Aproximadamente com uma inclinação do mapa inferior a 20-22 graus (este parâmetro depende do nível de zoom), a linha do horizonte imaginária torna-se visível. Ao contrário da real, o horizonte do programa é sempre reto.

Abaixo do horizonte, você pode ver a chamada *névoa* ou *neblina*. Esta área do mapa é preenchida com cor cinza, apenas alguns detalhes do mapa podem ser observados.
O uso de neblina é necessário, pois a exibição de objetos remotos no mapa requer recursos computacionais significativos e nem sempre se justifica devido às [distorções](../plugins/development.md#comparison-with-a-satellite-imagery) do mapa em pequenos ângulos de visão. Assim, a distância visível no mapa do OsmAnd está atualmente limitada a 35 blocos.

:::info
A inclinação do mapa pode ser alterada com um toque longo na tela com dois dedos e movendo-os para cima/para baixo. Você também pode alterar a inclinação tocando no ícone [Minha localização](#my-location-and-zoom) no canto inferior direito da tela (apenas as posições de 45 e 90 graus estão disponíveis).
Você não pode alterar a inclinação da câmera quando o antigo [mecanismo de renderização do mapa](../personal/global-settings.md#map-rendering-engine) (versão 1) está ativado.
:::


## Bloqueio da Tela Sensível ao Toque {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Botão de ação rápida Bloqueio da Tela Sensível ao Toque Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Botão de ação rápida Bloqueio da Tela Sensível ao Toque iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Use o recurso **Bloqueio da Tela Sensível ao Toque** para evitar toques acidentais durante a navegação. Isso é especialmente útil para atividades como ciclismo ou caminhada, onde toques não intencionais podem interromper sua rota.

**Desbloqueando**.
Toque no botão na tela ou, se o bloqueio estiver ativado, via um botão externo (por exemplo, Volume Down), pressione o botão externo e toque no botão na tela.

**Configuração**.

- Navegue até *Menu → Configurar tela → Botões personalizados*.
- Selecione *+ → Adicionar ação → Interface → Bloqueio da Tela Sensível ao Toque*.

Mensagens claras na tela o guiarão ao bloquear ou desbloquear a tela.


## Configurações {#settings}

### Configurações Extras da Bússola {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Suaviza a rotação do mapa com uma animação de rotação mais lenta, embora isso introduza um pequeno atraso, não mais de 1 segundo.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Suaviza a rotação do mapa com uma animação de rotação mais lenta, embora isso introduza um pequeno atraso, não mais de 1 segundo.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Sem Animações {#no-animations}

<InfoAndroidOnly/>

Você pode desabilitar todas as animações do mapa durante as interações com o mapa, incluindo gestos e botões.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Animar Posição Própria {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Cria um efeito suave de panorâmica do mapa em relação ao ícone *[Minha Posição](../personal/profiles/#profile-appearance)* quando em movimento. O efeito introduz um pequeno atraso em relação à realidade de cerca de 1 segundo. Habilitar isso tem sido relatado como causando alguns problemas de atraso pronunciados em algumas circunstâncias; desative-o se tais problemas surgirem.


## Dispositivos de Entrada Externos {#external-input-devices}

Os botões de dispositivos de entrada externos fornecem uma maneira conveniente e eficiente de interagir com o mapa e a interface do aplicativo OsmAnd. Eles estão localizados em dispositivos externos, como **Bluetooth ou outros tipos de teclados**, **botões especializados em dispositivos de navegação veicular**, ou controladores [WunderLINQ](https://blackboxembedded.com/) e [Parrot](https://www.parrot.com/en).

Uma das principais funções dos botões em dispositivos de entrada externos é aumentar e diminuir o zoom do mapa. Eles também permitem navegar no mapa e alterar sua orientação sem precisar tocar e gesticular na tela. Os botões em dispositivos de entrada externos suportam muitas outras funções, como abrir o *Menu Principal*.

:::note
O teclado permanece funcional mesmo quando a opção *Dispositivos de entrada externos* está desativada e *Nenhum* está selecionado.
:::

### Dispositivo de Entrada Pré-configurado {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Dispositivos externos](@site/static/img/map/external_menu_android.png) ![Dispositivos externos](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Dispositivos externos](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Para acessar as configurações de um dispositivo de entrada externo, você precisa habilitar este recurso.

- Vá para o *Menu* principal *→ Configurações →* selecione o *Perfil → Configurações gerais → Outros → Dispositivos de entrada externos*, e mude para *Ativado*.

- Selecione um dispositivo entre os suportados pelo OsmAnd tocando no item *Tipo* na lista:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*somente Android*), ou crie [**seu próprio tipo**](#custom-input-device-type) (*somente Android*).

- Há um **pacote de ação-chave definido** diferente para cada tipo de dispositivo de entrada externo. Toque em *<Translate android="true" ids="key_assignments"/>* para ver uma lista de ações e chaves. A tabela de chaves é mostrada abaixo.

- Você pode ler mais sobre as ações de dispositivos de entrada externos no GitHub no pacote [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Chave | Dispositivo | Ação |
|:---------|:---------------|:---------------|
|**C**| *Teclado* | Mover - [Para Minha localização](#my-location-and-zoom) |
|**D**| *Teclado* | Alterar - [Orientação do mapa](#map-orientation-modes) |
|**N**| *Teclado* | Mostrar / Ocultar - Visualização de navegação |
|**S**| *Teclado* | Mostrar / Ocultar - [Visualização de pesquisa](../search/index.md) |
|**P**| *Teclado* | Alterar - Próximo perfil do aplicativo |
|**O**| *Teclado* | Alterar - Perfil anterior do aplicativo |
|**&#8593;**| *Teclado* | Mover - Mapa para cima |
|**&#8595;**| *Teclado* | Mover - Mapa para baixo |
|**&#8592;**| *Teclado* | Mover - Mapa para a esquerda |
|**&#8594;**| *Teclado* | Mover - Mapa para a direita |
|**&#43;** **=**| *Teclado* | Mapa - [Aumentar zoom](#my-location-and-zoom) |
|**&#8722;**| *Teclado* | Mapa - [Diminuir zoom](#my-location-and-zoom) |
|**Pressionar voltar**| *Teclado* | Navegar – Tela anterior |
|**&#8595;**| *Wunderlinq* | Mapa - [Diminuir zoom](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Mapa - [Aumentar zoom](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | Abrir WunderLINQ Datagrid |
| **M** <br/> (*Android legado*) | *Teclado* | Mostrar / Ocultar - [Menu lateral](../start-with/main-menu.md#main-menu-side-menu) |
| **Pressionar joystick** <br/> (*Android legado*) | *Teclado* | Mover - [Para Minha localização](#my-location-and-zoom) |
| **Botão de mídia** <br/> (*Somente Android*)| *Teclado* | Mostrar / Ocultar - [Notas AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*Somente Android*)| *Parrot* | Mapa - [Diminuir zoom](#my-location-and-zoom) |
| **&#8594;** <br/> (*Somente Android*) | *Parrot* | Mapa - [Aumentar zoom](#my-location-and-zoom) |


### Tipo de Dispositivo de Entrada Personalizado {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivos externos](@site/static/img/map/external_mypilot_android.png) ![Dispositivos externos](@site/static/img/map/external_mypilot2_android.png)

Se você deseja atribuir teclas para um dispositivo de entrada externo (como um teclado, joystick ou controlador), você precisa criar um tipo de dispositivo: vá para a configuração [Dispositivos de Entrada Externos](#external-input-devices), selecione **Tipo** na lista, toque no&nbsp;  "**＋**"  &nbsp; e digite um nome. Cada tipo tem um menu com as seguintes opções: ***Renomear, Duplicar*** e ***Remover***.

### Adicionar Ação e Atribuições de Teclas {#add-action--key-asssigments}

![Dispositivos externos](@site/static/img/map/external_custom_4_andr.png) ![Dispositivos externos](@site/static/img/map/external_custom_3_andr.png)

Depois de criar um tipo de entrada personalizado, você pode atribuir as ações necessárias às teclas. Uma ampla gama de [tipos de ação](../widgets/quick-action.md#action-types) do widget Ação Rápida está disponível.

- Selecione um tipo de dispositivo e, em seguida, toque no item **Atribuições de teclas**.
- Toque no botão ***Adicionar*** (&nbsp;"**＋**"&nbsp;) no canto inferior direito da tela.
- Selecione a ação desejada e, em seguida, toque no campo ***Adicionar tecla*** e toque no botão do seu dispositivo para atribuí-lo à ação.

:::note

- Se o botão que você atribuiu já estiver sendo usado para outra ação, você receberá uma notificação com a opção de reatribuir o botão ou cancelar a atribuição.
- Mais tarde, você pode alterar ações e atribuições de teclas ou adicionar outras para ações já criadas, basta selecionar um item na lista de Atribuições de teclas.

:::

### Excluir atribuição de chave {#delete-key-assignment}

![Dispositivos externos](@site/static/img/map/external_custom_1_andr.png)

Você pode excluir várias ações desnecessárias usando o **botão Editar** (*em forma de lápis*) no canto superior direito da tela de uma só vez:

- ***Remover uma ação*** por ação, com o botão&nbsp;  "**−**"  &nbsp;no campo do item.
- ***Remover todas as atribuições de teclas*** para o tipo selecionado tocando no botão no canto superior direito da tela ao lado de *Editar nome*.


## Artigos Relacionados {#related-articles}

- [Menu de Contexto do Mapa](./map-context-menu.md)
- [Configurar Mapa](./configure-map-menu.md)
- [Mapas Vetoriais (Estilos de Mapa)](./vector-maps.md)
- [Mapas Raster (Online / Offline)](./raster-maps.md)
- [Pontos no mapa](./point-layers-on-map.md)
- [Trilhas e Rotas](./tracks/index.md)
- [Menu de Contexto de Trilhas](./tracks/track-context-menu.md)
- [Transporte Público](./public-transport.md)


> *Última atualização: Dezembro de 2024*