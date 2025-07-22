---
source-hash: 27722eb18550cf9d93cb885bccf878c6d53e33daba1748a270790fa1cca1066e
sidebar_position: 3
title: Notas de Áudio / Vídeo
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


<InfoAndroidOnly />

## Visão Geral {#overview}

Suas gravações de áudio e vídeo podem ser úteis no futuro, como lembranças de onde você esteve. Elas estão disponíveis no menu [Meus Locais](../personal/myplaces.md) e são visíveis quando o plugin Notas de Áudio/Vídeo está ativado.

O plugin Notas de Áudio/Vídeo estende a funcionalidade do OsmAnd, permitindo que você crie suas próprias notas em vários formatos, como fotos, vídeo ou áudio, e as associe à sua localização geográfica ou localização atual. Você pode fazer gravações apenas quando o plugin estiver ativado, usando o [widget Notas de Áudio/Vídeo](../widgets/info-widgets.md#-audio-video-notes-widget) e/ou o [menu de contexto do mapa](../map/map-context-menu.md#-audiovideo-note). Os dados recebidos são salvos automaticamente em [Meus Locais](../personal/myplaces.md), de onde podem ser convenientemente gerenciados e compartilhados.

Todas as notas de áudio e vídeo criadas compõem a camada de Gravação. Quando ativada no mapa, ela altera a visualização dos dados gravados e há mais configurações para gerenciar as gravações. Na camada de Gravação, as notas de áudio e vídeo são colocadas como POIs no mapa, criando assim uma narrativa do usuário visível apenas para o proprietário do dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Parâmetros de Configuração Necessários {#required-setup-parameters}

As notas de áudio/vídeo são fornecidas com o plugin Notas de áudio/vídeo e exigem a seguinte configuração:

1. Ative o [plugin Notas de áudio/vídeo](../plugins/index.md#enable--disable) na seção Plugins do *Menu Principal*.
2. Adicione um [widget](../widgets/info-widgets.md#-audio-video-notes-widget) à tela do mapa para o uso mais conveniente.
3. Personalize as [configurações de gravação](#plugin-settings) para cada perfil, se necessário.


## Configurações do Plugin {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Para cada perfil, você pode configurar as *opções de gravação de áudio e vídeo*.

| Parâmetro | Descrição |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Você pode escolher se deseja usar o aplicativo do sistema ou a câmera do OsmAnd para tirar <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Define o tamanho das fotos a serem tiradas. As capacidades da câmera do dispositivo determinam o número de opções disponíveis. Se nenhuma opção for selecionada, o aplicativo usa o tamanho das configurações do sistema da câmera do dispositivo. |
| **<Translate android="true" ids="av_camera_focus"/>** | Estabelece o método de como o foco da câmera é definido. O número de opções disponíveis é determinado pelas capacidades da câmera do dispositivo. Basicamente, existem as três opções a seguir: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; e *<Translate android="true" ids="av_camera_focus_infinity"/>*. O **Autofoco** é o mais popular e estabelece o modo automático para a câmera; o **contínuo** faz com que a câmera detecte movimentos e refoque de acordo; e a opção **infinito** faz com que a lente foque em uma distância e, assim, mantenha os objetos em foco, não importa a distância. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Se ativado, um som é produzido quando a câmera tira uma foto. Observe que, conforme exigido pela lei de privacidade, **em alguns países os dispositivos não terão um botão de mudo do obturador da câmera**. Se você usar o aplicativo do sistema, o som deve ser desativado no aplicativo da câmera. |
| **<Translate android="true" ids="av_audio_format"/>** | Fornece uma escolha de formatos para um arquivo de áudio. O número de opções disponíveis e qual delas é usada por padrão é determinado pelos parâmetros de um dispositivo específico. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Esta opção fornece uma escolha de opções de taxa de bits para um arquivo de áudio a ser criado. As opções de taxa de bits disponíveis variam de 16kbps a 128 kbps, ou a opção Padrão. O parâmetro Padrão é determinado pelas configurações de microfone "padrão" do seu dispositivo. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Se ativado, o OsmAnd usa o aplicativo do sistema para gravar vídeo em <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Isso fornece uma escolha de opções que determinam o formato da imagem de saída. O intervalo de opções disponíveis é determinado pelos parâmetros de um dispositivo específico. A opção padrão é a opção de *Maior qualidade*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Se ativado, as gravações de vídeo antigas serão automaticamente reescritas e substituídas por novas gravações de vídeo se o tamanho do armazenamento atingir o limite de tamanho. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Isso determina o limite de tempo superior para clipes de vídeo gravados. Existem opções com um intervalo de 1 minuto a 30 minutos. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Isso estabelece o tamanho do armazenamento destinado a vídeos gravados. Existem opções com o intervalo de 1024 MB a 62 GB. Um intervalo específico de opções e a opção padrão são determinados pelos parâmetros de um dispositivo específico. Uma mensagem do sistema lembrará você de que o tamanho do armazenamento está atingindo o limite estabelecido. |
| **<Translate android="true" ids="notes"/>** | Esta opção redireciona você para as [Notas de áudio/vídeo em Meus Locais](../personal/myplaces.md) - armazenamento central de todas as notas de áudio/vídeo já feitas no aplicativo. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Você pode estabelecer os valores padrão para todas as configurações de notas A/V. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Abre uma caixa de diálogo para selecionar um perfil para copiar a configuração de gravação de notas de áudio/vídeo e estabelecê-la para o perfil atual. |


## Gerenciar uma Única Nota {#manage-a-single-note}

Você pode gerenciar suas informações, pensamentos, ideias, etc. vinculados a um local geográfico, da seguinte forma:

- Criar uma nota.
- Visualizar todas as notas como uma lista em [Meus Locais](../personal/myplaces.md).
- Mostrar a nota específica no mapa.
- Renomear uma nota em Meus Locais.
- Mostrar todas as notas [no mapa](../map/configure-map-menu.md#map-data-layers).
- Reproduzir a nota.
- Criar pontos de passagem em uma [trilha](../plugins/trip-recording.md#gpx-file-details).
- Exportar para [JOSM](https://josm.openstreetmap.de/).


### Criar {#create}

Você pode criar uma nota de foto, vídeo e áudio de qualquer uma das seguintes maneiras:

- Com o [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android). Se a nota deve ser vinculada à sua posição geográfica atual.
- Com o [menu de contexto](../map/map-context-menu.md#-record-av-note-android) de um ponto no mapa. Se a nota deve ser vinculada ao ponto selecionado no mapa.


#### 1. Criar e Vincular à sua Posição Atual {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

O widget <Translate android="true" ids="map_widget_av_notes"/> é usado para criar uma nota vinculada à sua posição atual e, assim, evitar qualquer busca por um ponto adequado para uma nota no mapa. Basta tocar no widget e fazer a nota.

As funções fornecidas pelo widget <Translate android="true" ids="map_widget_av_notes"/> dependem de como ele está configurado no menu [Configurar tela](../widgets/info-widgets.md#-audio-video-notes-widget-android). O widget abre imediatamente a câmera para fazer uma nota, de acordo com as configurações estabelecidas, ou pergunta primeiro em que formato criar uma nota e, em seguida, abre a caixa de diálogo do gravador respectivo.


#### 2. Criar e Vincular à Geolocation Selecionada {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Para criar uma nota vinculada a um ponto selecionado no mapa, use o [Menu de Contexto](../map/map-context-menu.md#-record-av-note-android) do ponto:

1. Toque e segure um ponto no mapa, e o [Menu de Contexto](../map/map-context-menu.md) será aberto.
2. Toque em **Ações** e selecione uma das opções disponíveis na lista:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - para fazer uma nota de áudio e vinculá-la ao ponto selecionado no mapa;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - para fazer uma nota de vídeo e vinculá-la ao ponto selecionado no mapa;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - para fazer uma nota de foto e vinculá-la ao ponto selecionado no mapa.

3. Dependendo do formato selecionado da nota, a caixa de diálogo do gravador respectivo será aberta.


#### Diálogo do Gravador {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Para *notas de áudio e vídeo*, o gravador de áudio ou vídeo é exibido, respectivamente. Você pode:

- Parar a gravação com o ícone *Parar*.
- Visualizar a duração da gravação.
- Mostrar ou ocultar a tela de vídeo.

É possível parar a gravação com um toque no widget <Translate android="true" ids="map_widget_av_notes"/>, independentemente de o Menu de Contexto ou o widget terem iniciado a gravação. Para *uma nota de foto*, a funcionalidade da câmera aparece, e você pode tirar uma foto, visualizar o resultado, aceitar e salvá-la, ou tirar uma nova foto.

:::info note
Automaticamente, todos os registros de foto, áudio e vídeo são salvos em: guia <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::


### Visualizar em Meus Locais {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Meus Locais](../personal/myplaces.md) é um repositório central para todas as suas notas. Ele permite que você visualize todas as suas notas em uma lista ordenada, exiba uma nota específica em um mapa e gerencie sua lista completa de notas.


### Mostrar no Mapa {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Para mostrar uma nota específica no mapa, use a lista de notas em Meus Locais, encontre a necessária e toque nela. Como resultado, o mapa aparece, destaca a localização da nota e abre o [Menu de Contexto](../plugins/audio-video-notes.md#actions-in-map-context-menu). É possível trabalhar com a nota selecionando as opções no menu de contexto.


### Reproduzir {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Para reproduzir uma nota, use a opção respectiva no [Menu de Contexto](../map/map-context-menu#-audiovideo-note-android) aberto para a nota:

- no mapa;
- em Meus Locais.

A seção [Detalhes](../map/map-context-menu#-audiovideo-note-android) fornece mais dados sobre as notas, como latitude e longitude, data e hora da nota e fotos.


### Renomear, Excluir, Compartilhar {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Para gerenciar uma nota em Meus Locais, toque nos três pontos verticais da nota na lista, e as opções disponíveis aparecerão, da seguinte forma:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Abrir e visualizar o vídeo selecionado ou reproduzir a nota de áudio.
- **<Translate android="true" ids="shared_string_share"/>**. Compartilhe facilmente a nota selecionada com outras pessoas através de várias plataformas.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Mostra a localização exata e o [Menu de Contexto](../plugins/audio-video-notes#actions-in-map-context-menu) da nota no mapa.
- **<Translate android="true" ids="shared_string_rename"/>**. Altere o nome da nota para facilitar a identificação.
- **<Translate android="true" ids="shared_string_delete"/>**. Remove notas permanentemente do aplicativo.


## Widget de Gravação {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

O [widget Notas de Áudio/Vídeo](../widgets/info-widgets.md#audiovideo-notes-widget) cria notas, fotos, arquivos de áudio e vídeo e os vincula à sua posição atual. O widget possui várias opções que podem ser definidas como a ação padrão executada pelo widget quando a tela é tocada.

Adicionar um widget à tela é necessário se você preferir evitar a busca por geolocalização no mapa e vincular notas à sua localização padrão atual. Para adicionar ou personalizar um widget, siga os passos abaixo:

1. Vá para:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Selecione **<Translate android="true" ids="map_widget_left"/>** ou **<Translate android="true" ids="map_widget_right"/>**.

3. Toque em **<Translate android="true" ids="map_widget_av_notes"/>**, e o menu de contexto do widget será aberto.

4. Selecione a opção que você prefere usar por padrão tocando no widget:

    - **<Translate android="true" ids="av_def_action_choose"/>** - abrir uma seleção de opções.

    - **<Translate android="true" ids="av_def_action_audio"/>** - iniciar a gravação de uma mensagem de áudio.

    - **<Translate android="true" ids="av_def_action_video"/>** - iniciar a gravação de vídeo.

    - **<Translate android="true" ids="av_def_action_picture"/>** - começar a tirar fotos.

    ![The widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Gerenciar Múltiplas Notas {#manage-multiple-notes}

### Gerenciar em Meus Locais {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

As opções na barra inferior podem ser usadas para gerenciar a lista de notas no menu [Meus Locais](../personal/myplaces.md#audiovideo-notes).


### Compartilhar com Pontos de Passagem GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Você pode compartilhar todas as Notas, incluindo [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) que possui notas selecionadas como pontos de passagem na tela [Meus Locais](../personal/myplaces.md#audiovideo-notes), clicando no botão de menu inferior "compartilhar". Uma caixa de seleção aparecerá ao lado de cada nota para selecionar notas específicas. Existem duas caixas de seleção acima das notas: *Notas A/V por data* para selecionar todas as notas e a caixa de seleção *Locais*. A caixa de seleção *Locais* permite adicionar um arquivo GPX separado com coordenadas e dados.

Cada nota contém a hora em que foi criada, a quantidade de dados e, se for um registro, a hora da gravação e os dados de localização, você pode adicionar dados GPX.
Formatos de arquivo suportados: áudio - **3gp**, vídeo - **mp4**, foto -**jpg**.


### Mostrar Tudo no Mapa {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

As notas exibidas no mapa podem contar sua história, onde você avistou sinais, qual porta precisava abrir, onde fica a saída, o caminho ideal e muito mais. Você pode mostrar as notas [uma de cada vez](#show-on-the-map) ou todas de uma vez.

Use a camada de mapa [Gravação](../map/point-layers-on-map#-audio--video-points-android) para mostrar ou ocultar todas as notas. Se você ativá-la no menu [Configurar mapa](../map/configure-map-menu), a camada Gravação mostrará todas as notas no mapa.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Pontos de Passagem Criados a Partir de Notas {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Um ponto de passagem é criado quando uma nota de áudio, vídeo ou foto é adicionada a uma trilha. Os pontos de passagem existem dentro de uma trilha. Se uma trilha estiver visível, seus pontos de passagem também estarão visíveis. Assim, essas notas podem ser visíveis no mapa todas de uma vez ou apenas em uma trilha visível específica. Neste último caso, as notas são exibidas como pontos de passagem da trilha.

:::note
Se uma trilha for exportada, os pontos de passagem não podem ser visualizados ou reproduzidos, pois as notas de áudio/vídeo/foto são armazenadas apenas no dispositivo e disponíveis apenas para você nesse dispositivo.
:::


### Criar Pontos de Passagem {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Existem duas maneiras de criar um ponto de passagem: automaticamente e manualmente.

1. **Automaticamente**, um ponto de passagem é criado, caso você faça uma nota de áudio/vídeo/foto quando a [gravação de viagem](../plugins/trip-recording) estiver em andamento, independentemente da geolocalização se estiver vinculada à posição atual ou a qualquer lugar, e assim, independentemente dos meios utilizados para isso: se for o [Widget](../widgets/info-widgets#-audio-video-notes-widget-android), ou o [Menu de Contexto](../map/map-context-menu#-audiovideo-note-android).

    Todos os pontos de passagem adicionados automaticamente recebem um nome atribuído automaticamente. O nome é criado, de acordo com o formato especificado abaixo para um arquivo de áudio/vídeo/foto, e possui um [shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). O exemplo dos pontos de passagem na figura acima mostra pontos de passagem criados automaticamente e manualmente, onde os quatro primeiros foram criados automaticamente e o último - manualmente.

2. **Manualmente**, um ponto de passagem é criado via [Menu de Contexto](../map/map-context-menu#-audiovideo-note-android), da seguinte forma:

    - Selecione a nota de áudio/vídeo/foto desejada no mapa.
    - Toque em **Ações** e, em seguida, toque em **Adicionar trilha**.
    - Selecione a trilha à qual você pretende adicionar um ponto de passagem.
    - A caixa de diálogo *<Translate android="true" ids="quick_action_add_gpx"/>* é aberta e permite definir algumas propriedades, como o nome do ponto de passagem, um ícone, cor e outros. Uma vez feito, toque em **Salvar**.

:::info note
Você pode especificar nomes para cada ponto de passagem criado manualmente.
:::


### Visualizar Pontos de Passagem {#view-waypoints}

- Um ponto de passagem está disponível para visualização como um ponto de passagem no mapa e na lista de [pontos de passagem de uma trilha específica](../map/tracks/track-context-menu.md#points--waypoints). A exclusão do ponto de passagem não exclui a nota de áudio/vídeo/foto respectiva.

- Uma nota de áudio, vídeo ou foto está disponível para visualização no mapa e na lista de notas A/V em [Meus Locais](../plugins/audio-video-notes#view-in-my-places). A exclusão da nota de áudio, vídeo ou foto não exclui o ponto de passagem respectivo.

- No mapa, um ponto de passagem e uma nota de áudio, vídeo ou foto podem ou não estar visíveis no mapa. Isso é determinado por qual camada está atualmente ativada para o perfil.

- Quando nem a camada de Trilhas nem a de Gravação estão ativadas, ambos os pontos de passagem e as notas podem ser mostrados tocando neles em Meus Locais. Neste caso, o mapa mostra as localizações da nota tocada, ou, respectivamente, as localizações de todos os pontos de passagem da trilha tocada.

| Visível | Camada ativada |
| --- | --- |
| Apenas pontos de passagem | Camada de Trilhas |
| Pontos de passagem e notas | Camada de Trilhas e Gravação |
| Apenas notas | Camada de Gravação |
| Nenhum | Nem a camada de Trilhas, nem a de Gravação. |


### Arquivo GPX com Pontos de Passagem {#gpx-file-with-waypoints}

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Se você visualizar o arquivo GPX da trilha adicionada com um ponto de passagem de uma nota de áudio/vídeo/foto, o ponto de passagem será como no exemplo abaixo, contendo as coordenadas, o carimbo de data/hora, o nome da nota respectiva e o shortlink.


## Diversos {#miscellaneous}

### Detalhes do Nome do Arquivo {#file-name-details}

O plugin <Translate android="true" ids="audionotes_plugin_name"/> gera arquivos de áudio/vídeo/foto no seguinte formato:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

onde `SHORTLINK_LOCATION` especifica a latitude e longitude do local ao qual o arquivo está vinculado. O `SHORTLINK_LOCATION` é codificado, de acordo com a especificação do [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Exportar para JOSM {#export-to-josm}

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Para visualizar tudo mais tarde, você pode exportar a trilha junto com todos os arquivos de mídia e visualizá-los no [editor JOSM](https://josm.openstreetmap.de/). Observe que os arquivos de mídia devem ser colocados na pasta apropriada. Você pode descobrir qual é clicando no vídeo. Uma notificação aparecerá mostrando que não há arquivo disponível, coloque o arquivo correto na pasta especificada.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última atualização: maio de 2023*