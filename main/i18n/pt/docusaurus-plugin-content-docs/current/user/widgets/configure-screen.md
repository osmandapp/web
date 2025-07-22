---
source-hash: c8ab58e76333d6bb43b100fbf37d1adb3abf342632d71272ce2ebe8566c5ffc3
sidebar_position: 1
title: Configurar Tela
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

O menu **Configurar tela** no OsmAnd permite personalizar a interface do mapa adicionando e organizando widgets, botões e ações rápidas em vários painéis.

Você pode:

- Adicionar widgets [informativos](../widgets/info-widgets.md), de [navegação](../widgets/nav-widgets.md) e [relacionados a marcadores](../widgets/markers.md).
- Adicionar [Ações Rápidas](../widgets/quick-action.md) e [botões de mapa](../widgets/map-buttons.md).
- Organizar widgets em painéis (superior, inferior, esquerdo, direito, central).
- Criar várias **páginas** dentro dos painéis laterais.
- Escolher a altura da linha e alternar os ícones dos widgets.

Todos os widgets são [dependentes do perfil](../personal/profiles.md) — cada perfil tem seu próprio layout, ordem, visibilidade e configurações.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Configurar tela](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Menu Configurar tela](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>


## Painéis de Widgets {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configurar tela](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configurar tela](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

O OsmAnd permite organizar a interface do mapa usando painéis de widgets personalizáveis.  
Você pode adicionar, reordenar, agrupar e remover widgets nos seguintes painéis:

- **Painel superior**
- **Painel inferior**
- **Painel esquerdo**
- **Painel direito**

Cada painel suporta diferentes comportamentos de layout:

- Os **painéis superior e inferior** exibem widgets em linhas. Você pode colocar um ou dois widgets por linha e adicionar várias linhas, se necessário.
- Os **painéis esquerdo e direito** suportam várias páginas. Você pode agrupar widgets em páginas separadas e alternar entre elas.


### Catálogo de Widgets {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widgets de navegação:***  

- [Orientação](../widgets/nav-widgets.md#bearing).  
    Este conjunto mostra a orientação absoluta ou relativa para um alvo em unidades angulares.  
    3 widgets estão incluídos: *Orientação relativa*, *Orientação magnética*, *Orientação verdadeira*.

- [Perfil de elevação](../widgets/nav-widgets#elevation-widget) (*Somente superior/inferior*, *Somente Android*).  
    Exibe a elevação e inclinação da rota.

- [Faixas](../widgets/nav-widgets#lanes) (*Somente superior/inferior*).  
    Orientação visual de faixas.

- [Barra de marcadores de mapa](../widgets/markers.md#configure-marker-widgets-android) (*Somente superior/inferior*).  
    Mostra distância/direção para marcadores salvos.  
    Configurável para 1 ou 2 marcadores.

- [Ponto de navegação](../widgets/nav-widgets.md#navigation-points).  
    O conjunto mostra a distância restante até um destino, ponto intermediário, tempo de chegada a um ponto intermediário ou tempo de viagem para uma rota calculada.  
    4 widgets estão incluídos: [Distância até o destino](../widgets/nav-widgets.md#distance-to-destination), [Distância até o intermediário](../widgets/nav-widgets.md#distance-to-intermediate), [Tempo até o intermediário](../widgets/nav-widgets.md#time-to-intermediate), [Tempo até o destino](../widgets/nav-widgets.md#time-to-destination).

- [Manobras de rota](../widgets/nav-widgets.md#next-turn) (*Somente painel esquerdo/direito*).  
    Este conjunto é ativado durante a navegação e mostra a distância e a seta para a próxima manobra.  
    3 widgets estão incluídos: *Próxima curva*, *Próxima curva (pequena)*, *Segunda próxima curva*.

- [Limite de velocidade](../widgets/nav-widgets.md#speed-limit).  
    Exibe o limite de velocidade atual para a estrada.

- [Velocímetro](../widgets/info-widgets.md#speedometer).  
    Mostra a velocidade atual com base nos dados do GPS e a velocidade limitada com base nos [dados do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nome da rua](../widgets/nav-widgets#street-name) (*Somente superior/inferior*).  
    Exibe a rua atual ou a próxima.

<br/>

***Widgets informativos:***

- [Altitude](../widgets/info-widgets.md#altitude-widgets).  
    O conjunto exibe a altitude acima do nível do mar para a localização atual ou para o centro do mapa atual.  
    2 widgets estão incluídos: *Altitude: localização atual*, *Elevação: centro do mapa*.

- [Velocidade média](../widgets/info-widgets.md#average-speed-widget).  
    Mostra a velocidade média da viagem atual.

- [Nível da bateria](../widgets/info-widgets.md#battery-level).  
    Exibe o nível da bateria do dispositivo.

- [Widgets de coordenadas](../widgets/info-widgets#coordinates-widget) (*Somente superior/inferior*).  
    Este conjunto exibe as coordenadas geográficas da geolocalização atual.  
    2 widgets estão incluídos: *Coordenadas: centro do mapa*, *Coordenadas: localização atual*.

- [Velocidade atual](../widgets/info-widgets.md#speed).  
    Exibe a velocidade do sensor GPS.

- [Hora atual](../widgets/info-widgets.md#current-time).  
    Exibe a hora atual do sistema.

- [Razão de planeio](../widgets/info-widgets.md#glide-ratio).  
    Os widgets mostram a razão de planeio para o alvo e a razão de planeio média para o voo atual.  
    2 widgets estão incluídos: *Razão de planeio para o alvo*, *Razão de planeio média*.

- [Informações do GPS](../widgets/info-widgets.md#gps-info) (*Somente Android*).  
    Mostra o número de satélites detectados.

- [Marcadores de mapa](../widgets/markers.md).  
    O conjunto mostra a distância ou o tempo estimado de chegada (ETA) para os dois primeiros marcadores na [lista de itinerários](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    2 widgets estão incluídos: *Primeiro marcador*, *Segundo marcador*.

- [Régua de raio](../widgets/info-widgets.md#radius-ruler).  
    Mostra a distância entre sua localização e um ponto no mapa, circulado pela [ferramenta Régua de raio](../widgets/radius-ruler.md).

- [Nascer do sol, pôr do sol](../widgets/info-widgets.md#sunset-and-sunrise).  
    Mostra a hora do próximo nascer ou pôr do sol para o centro do mapa.  
    2 widgets estão incluídos: *Nascer do sol*, *Pôr do sol*.

<br/>

***Widgets baseados em plug-ins:***  

- [Notas de áudio/vídeo](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Acesso rápido para capturar mídia.  
    4 widgets estão incluídos: *Sob demanda*, *Gravar áudio*, *Gravar vídeo*, *Tirar uma foto*.

- [Widgets do desenvolvedor](../widgets/info-widgets.md#developer-widgets).  
    Exibe informações opcionais.  
    5 widgets estão incluídos: *FPS de renderização do mapa*, *Inclinação da câmera*, *Elevação da câmera*, *Nível de zoom*, *Distância da câmera ao alvo*, *RAM disponível*.  

- [Widgets de Sensores Externos](../widgets/info-widgets.md#external-sensors-widgets).  
    O conjunto ajuda a rastrear dados de sensores BLE/ANT+ em tempo real.  
    6 widgets estão incluídos: *Frequência cardíaca*, *Potência da bicicleta* (*Somente Android*), *Cadência da bicicleta*, *Velocidade da bicicleta*, *Distância da bicicleta*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Abre o aplicativo Mapillary para imagens de nível de rua.

- [Status do OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Acesso rápido ao [aplicativo OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widget de estacionamento](../widgets/info-widgets.md#parking-widget).  
    Distância do centro da tela até o local de estacionamento salvo.

- [Gravação de viagem](../widgets/info-widgets.md#trip-recording-widgets).  
    Inicia e para a gravação de trilhas e exibe os dados de gravação de trilhas.  
    4 widgets estão incluídos: *Distância*, *Duração*, *Subida*, *Descida*.

- [Tempo](../widgets/info-widgets.md#weather-widgets).  
    Exibe informações meteorológicas detalhadas.  
    5 widgets estão incluídos: *Temperatura*, *Pressão do ar*, *Vento*, *Nuvens*, *Precipitação*.

:::note Widgets dependentes do painel

- Disponíveis apenas nos **painéis Superior e Inferior** e devem ser colocados em linhas separadas: *Widgets de Coordenadas, Widget de Perfil de Elevação, Widget de Faixas, Barra de Marcadores de Mapa, Widget de Nome da Rua*.
- Disponíveis apenas nos **painéis Esquerdo e Direito**: *Manobras de Rota*.

:::


### Linhas {#rows}

![Menu Configurar tela](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menu Configurar tela](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

O recurso **Modo de linha** permite adicionar quantas linhas forem necessárias aos painéis superior e inferior. Você pode exibir vários widgets por linha, aumentando a quantidade de informações visíveis.

***Como configurar linhas:***

- **Adicionar widgets**. Selecione na lista de *Widgets disponíveis*.
- **Alterar ordem.** Toque no botão *Alterar ordem* para organizar os widgets.
- **Adicionar linhas.** Use o botão *Adicionar linha* para criar novas linhas para widgets.
- **Mover widgets**. Mova widgets entre as linhas.
- **Aplicar alterações.** Toque no botão *Aplicar* para salvar a configuração.

#### Tipos e Restrições de Widgets {#widget-types-and-restrictions}

O modo permite adicionar **mais de um widget em uma única linha** nos painéis superior e inferior para exibir o máximo de informações necessárias.  

- **Widgets complexos**. Apenas um widget complexo pode ser adicionado por linha. Estes incluem:
    - [Barra de marcadores de mapa (*Somente Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Nome da rua](../widgets/nav-widgets#street-name)
    - [Widgets de coordenadas](../widgets/info-widgets#coordinates-widget)
    - [Faixas](../widgets/nav-widgets#lanes)
    - [Perfil de elevação (*Somente Android*)](../widgets/nav-widgets#elevation-widget)
    - [Manobras de rota](../widgets/nav-widgets.md#next-turn)

- **Widgets simples**. Vários widgets simples podem ser adicionados a uma única linha. Esses widgets podem exibir *Nome*, *Unidades de medida*, *Valor* e *Ícone*.


### Páginas {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Editar → Adicionar página*  

![Página de widget](@site/static/img/widgets/widget_page_1_andr.png) ![Página de widget](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Editar → Adicionar página*

![Página de widget](@site/static/img/widgets/widget_page_1_ios.png) ![Página de widget](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Os widgets nos painéis direito e esquerdo podem ser agrupados em **Páginas**. O recurso **Modo de Páginas** permite adicionar 5 páginas aos painéis esquerdo e direito.

***Como configurar linhas:***

- **Adicionar uma Página**. Navegue até as configurações do Painel Esquerdo/Direito e toque em *Editar → Adicionar Página*.
- **Organizar widgets por Página**. Este recurso é útil quando diferentes conjuntos de widgets são necessários para diferentes tarefas, como navegar versus explorar o mapa.
- As páginas permitem criar **conjuntos de widgets** para cenários específicos, melhorando o fluxo de trabalho e reduzindo a desordem.


## Configurações de Widget {#widget-settings}

![Menu Configurar tela](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu Configurar tela](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opções de tamanho do widget** (*para todos os painéis*):  
    Você pode personalizar o tamanho dos **widgets Simples** nos **painéis Superior, Inferior, Esquerdo e Direito**:

    - **Pequeno**. Ideal para telas compactas, economizando mais espaço na tela para mapas.
    - **Médio** (*tamanho padrão do widget*). Equilibra visibilidade e uso do espaço.
    - **Grande**. Fornece informações de widget maiores e mais visíveis.  

2. **Ocultar ícones de widget** (*para painéis superior e inferior*):

    - Melhora a clareza e maximiza o espaço para dados importantes.
    - Especialmente útil ao exibir muitos widgets na mesma **linha**.

3. **Tamanho individual para diferentes linhas** (*para todos os painéis*):

    - Os widgets podem ser dimensionados individualmente ajustando o tamanho da linha e da coluna.
    - **NOTA:** Alterar o tamanho de um widget em uma linha/coluna redimensionará todos os widgets nessa linha/coluna.

4. **Para alterar o tamanho do widget e a visibilidade do ícone:**

    - Selecione um widget que você já adicionou ao painel.  
    - Toque no ícone *Configurações* no lado direito do campo do widget.
    - Toque na configuração *Tamanho* e selecione um dos tamanhos disponíveis.
    - Mude para a posição Desligado, no campo *Mostrar ícone*.


## Personalização de Painéis {#panels-customization}

### Menu de Contexto do Widget {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Duplicar widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Duplicar widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

O **menu de contexto do widget** oferece uma maneira rápida de gerenciar e configurar widgets diretamente da tela do mapa. Você pode acessá-lo **tocando e segurando** qualquer widget para personalizar o layout dos widgets sem sair do mapa.

**Para painéis Superior e Inferior**  

- *Adicionar widget à Direita/Esquerda:*

    - Selecione uma posição para o novo widget em relação ao atual.
    - Escolha o widget na lista de [Widgets disponíveis](#widgets-for-all-panels).

**Para painéis Esquerdo e Direito**  

- *Adicionar widget Acima/Abaixo:*

    - Selecione se deseja posicionar o novo widget acima ou abaixo do widget atual.
    - Toque no widget desejado na lista para adicioná-lo à posição especificada.

**Ações gerais para todos os painéis**  

- *Configurações*.
    - Acesse as configurações do widget (se disponível) para personalizar sua aparência ou comportamento.

- *Redefinir velocidade média*.
    - Disponível para o widget [Velocidade Média](../widgets/info-widgets.md#average-speed).
    - Toque e segure para redefinir instantaneamente o valor da velocidade durante uma viagem.

- *Excluir*.
    - Remova o widget do painel.
    - Um prompt de confirmação garante que a ação seja intencional.

### Cópias de Widgets {#copies-of-widgets}

*Menu OsmAnd → Configurar tela → Widgets → Painel*  

![Duplicar widget](@site/static/img/widgets/widget_dublicate.png)  

O OsmAnd permite adicionar várias instâncias do mesmo widget a diferentes painéis ou páginas. Esse recurso é particularmente útil quando você precisa de informações consistentes em diferentes visualizações ou perfis.  

***Como duplicar widgets:***

- **Adicionar o widget**. Navegue até: *Menu OsmAnd → Configurar tela → Widgets → Painel →* **Adicionar** *widget*.
- **Duplicar usando o menu de contexto**. Toque no widget e selecione **Duplicar** na lista de ações.
- **Método alternativo**. Selecione o mesmo widget na lista de *Widgets disponíveis* e toque em *Adicionar*.


### Mover ou Excluir {#move-or-delete}

*Menu OsmAnd → Configurar tela → Widgets → Painel*  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_remove_andr.png)

Você pode reorganizar ou remover widgets da tela do aplicativo usando o modo **Editar**.  

***Como mover um widget:***

- Vá para: *Menu OsmAnd → Configurar Tela → Widgets → Painel → Botão Editar*.
- Toque e segure o **ícone à direita** do widget.
- Arraste-o para a posição desejada na lista de widgets.

***Como excluir um widget:***  

- Siga os mesmos passos acima.
- Toque no **ícone de menos** à esquerda do nome do widget.
- Confirme a exclusão quando solicitado.


## Botões {#buttons}

### Botões Personalizados {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Ação Rápida (Botões personalizados)** permite adicionar uma lista de ações únicas de todas as [Ações rápidas](../widgets/quick-action.md#custom-buttons) disponíveis. Essas ações podem ser atribuídas a um ou mais botões de widget na tela do mapa. Os botões personalizados fornecem acesso rápido a ações frequentemente usadas.

### Botões Padrão {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. Os **botões padrão** permitem personalizar quais botões de mapa predefinidos são visíveis na tela do mapa. Você pode optar por ocultar ou mostrar os seguintes botões:

    - [Modo 3D](../widgets/map-buttons.md#3d-mode). Para iOS, o botão está sempre disponível. Para Android, ele aparece na lista e está disponível para configuração se o mecanismo de renderização de mapa [Versão 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) for selecionado.

    - [Bússola](../widgets/map-buttons.md#display-options). Indica como o mapa está orientado no dispositivo.  
    3 visualizações: *Sempre visível*, *Sempre oculto*, *Visível se o mapa estiver girado*.

    - [Configurar mapa](../map/configure-map-menu.md). Acesse opções para modificar o estilo, camadas e configurações adicionais do mapa.

    - [Menu](../widgets/map-buttons.md#main-menu). Abre o menu principal do aplicativo para acessar todos os recursos.

    - [Minha localização](../widgets/map-buttons.md#my-location-and-zoom). Centraliza o mapa em sua posição atual.

    - [Navegação](../widgets/map-buttons.md#directions). Essencial para planejar rotas e iniciar a navegação.

    - [Pesquisar](../widgets/map-buttons.md#search). Abre a ferramenta de pesquisa para encontrar locais.

    - [Zoom in / out](../widgets/map-buttons.md#my-location-and-zoom). Ajusta o nível de zoom do mapa para mostrar mais ou menos detalhes.

2. O **menu de três pontos** na tela de Botões Padrão contém ações como:

    - *Redefinir para o padrão*. Permite retornar as configurações do botão à sua aparência original.
    - *Copiar de outro perfil*. Selecione de qual perfil da lista oferecida você deseja copiar as configurações do botão.

3. A **aparência do botão padrão** (*Somente Android*) oferece uma variedade de opções de personalização para esse tipo de botão. Para modificar a aparência de um botão, toque no botão desejado na lista e selecione a opção [Aparência](#button-appearance).


### Aparência do Botão {#button-appearance}

<InfoAndroidOnly/>

![Aparência do Botão](@site/static/img/widgets/button_appearance_settings_andr.png)

O recurso *Aparência do botão* permite personalizar totalmente a aparência dos botões em sua interface de mapa. Essas opções de personalização estão disponíveis para *Ação Rápida (Botões personalizados)* e *Botões padrão*, fornecendo controle abrangente sobre a aparência da interface do mapa e permitindo ajustes precisos no design do botão.

***Opções de personalização***:

- **Ícone**. Selecione em uma lista de ícones que representam ações que você já adicionou, facilitando a identificação de funções rapidamente.
- **Raio do canto**. Ajuste esta configuração para alterar a forma do botão, variando de cantos afiados e quadrados a bordas suaves e arredondadas.
- **Tamanho**. Escolha o tamanho do botão que melhor se adapta à sua tela e se destaca conforme necessário. Para *Botões padrão*, os tamanhos são predefinidos e não podem ser ajustados.
- **Opacidade do plano de fundo**. Controle a visibilidade do plano de fundo do botão. Você pode configurá-lo para ser totalmente visível ou parcialmente transparente, ou exibir apenas a sombra da moldura e o ícone.


## Outros {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Página de widget](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Outros*

![Página de widget](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distância por toque](../widgets/radius-ruler.md#distance-by-tap). Oferece a capacidade de medir a distância de sua posição até o ponto selecionado.
- [Velocímetro](../widgets/info-widgets.md#speedometer). Mostra a velocidade atual com base nos dados do GPS e a velocidade limitada com base nos [dados do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Os dados exibidos também dependem da configuração de [Tolerância de Limite de Velocidade](../navigation/guidance/voice-navigation.md#speed-limit) do OsmAnd.


### Posição de Exibição (Posição da localização na tela) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Página de widget](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Página de widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Posição da localização na tela* é o nome desta configuração na versão iOS do OsmAnd.  

Permite definir o posicionamento do cursor para *[Minha localização](../map/interact-with-map.md#my-location-and-zoom)* no mapa do OsmAnd. Existem três opções disponíveis:  

- **<Translate android="true" ids="position_on_map_center"/>**. O cursor está sempre posicionado no centro da tela.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Minha localização* é colocada ligeiramente abaixo do centro da tela. Este modo permite que você veja mais informações do mapa à frente de seu movimento, o que é útil durante a navegação.
- **<Translate android="true" ids="shared_string_automatic"/>**. Coloca *Minha localização* dependendo da *[Orientação do mapa](../map/interact-with-map.md#map-orientation-modes)* (*Inferior* - para direção do movimento, *Centro* - para todos os outros).


## Ações {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Página de widget](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Qualquer painel*

![Página de widget](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Acesso a ações adicionais na tela Configurar:

- *Android*. Localizado na tela Configurar na parte inferior da tela na seção *Ações*: *Menu → Configurar tela → Ações*.
- *Android / iOS*. Localizado nas telas de cada Painel no *menu de três pontos* no canto superior direito da tela.

Ações disponíveis:

- **Redefinir para o padrão**. Este recurso permite redefinir todas as configurações para os valores padrão se você quiser começar do zero, ou usar apenas os predefinidos ao iniciar o OsmAnd.
- **Copiar de outro perfil**. Este recurso permite importar rapidamente configurações de outro perfil, selecionar as necessárias na lista e copiar.


## Trocar Perfil {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configurar tela](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Para dispositivos **Android**, você pode trocar de perfil na parte superior da tela inicial de Configuração usando os ícones de perfil disponíveis.  
- Se você estiver usando um dispositivo **iOS**, toque no ícone de perfil no canto superior da tela inicial de Configuração e selecione o perfil desejado na lista para ativá-lo.  

**Observação**. A opção *Trocar perfil* não exibe todos os perfis existentes, mas apenas aqueles que foram *ativados* no menu Configurações.


## Artigos Relacionados {#related-articles}

- [Botões do mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegação](./nav-widgets.md)
- [Régua de raio e Régua](./radius-ruler.md)
- [Widgets de marcador](./markers.md)
- [Ação Rápida](./quick-action.md)

> *Última atualização: maio de 2025*