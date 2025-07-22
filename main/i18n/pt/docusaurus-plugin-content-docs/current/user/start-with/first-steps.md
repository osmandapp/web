---
source-hash: 283b1a10b933b84495c848bb63483ec3d45f08c0f3f61e1a3329b1deae7cd6c3
sidebar_position: 1
title: Primeiros Passos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Visão geral {#overview}

Bem-vindo ao OsmAnd (OpenStreetMap Automated Navigation Directions)!

Explore como baixar mapas, como configurar o aplicativo, como usar o mapa e construir uma rota, como iniciar a navegação e como pesquisar pontos de interesse. Familiarize-se com os pontos-chave da Política de Privacidade do OsmAnd e as Permissões necessárias.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navegação offline Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegação offline iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Instalar OsmAnd {#install-osmand}

OsmAnd é um aplicativo móvel para Mapas e Navegação disponível para **Android** e **iOS**. Você pode baixá-lo nos mercados mais populares.

**Mercados Android**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) e [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Leia mais](../purchases/index.md) sobre as versões e compras do OsmAnd.


## Bem-vindo ao OsmAnd {#welcome-to-osmand}

Nosso objetivo é criar um aplicativo totalmente funcional e orientado a mapas que possa ser usado para diversos fins, offline e online. O aplicativo possui muitos recursos, para que você não precise alternar entre diferentes aplicativos, e tudo estará ao seu alcance.

- Visualize um Mapa Mundial com muitos detalhes exibidos em [diferentes estilos de mapa](../map/vector-maps.md).
- Exiba, [pesquise](../search/search-poi.md) e salve vários [Pontos de interesse](../map/point-layers-on-map.md).
- [Planeje uma rota](../plan-route/create-route.md) de carro, bicicleta, a pé e combine em rotas multimodais.
- Inicie a [navegação guiada por voz](../navigation/guidance/voice-navigation.md) ao ligar e desligar a tela.
- Enriqueça sua viagem turística com [Wikipedia](../plugins/wikipedia.md) e [Wikivoyage](../plan-route/travel-guides.md) offline.
- Personalize totalmente como [o mapa é exibido](../map/configure-map-menu.md) e quais [widgets](../widgets/index.md) são exibidos nele.
- Navegue [por rota](../navigation/setup/route-navigation.md), [por uma trilha específica](../navigation/setup/gpx-navigation.md), [por transporte público](../navigation/routing/public-transport-navigation.md) e [fora da estrada](../navigation/setup/markers-navigation.md).
- Tudo funciona **Offline**.
- E não se esqueça de contribuir para o [OpenStreetMap](https://www.openstreetmap.org/) com o [Plugin de Edição OSM](../plugins/osm-editing.md).


## Guia de Ações {#actions-guide}

### Permissão para Acessar a Localização {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Localização precisa Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Localização precisa iOS](@site/static/img/steps/first_start_ios.png) ![Localização precisa iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Recomendamos que você conceda ao OsmAnd permissão para receber informações sobre a localização precisa do seu dispositivo. Não coletamos, usamos ou compartilhamos suas informações privadas, portanto, o acesso à geolocalização precisa é necessário para o correto funcionamento offline da pesquisa, navegação e outras funções do OsmAnd.


### Como baixar mapas {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Mostrar no mapa](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mostrar no mapa](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

O aplicativo OsmAnd funciona com diferentes tipos de mapas, mas só pode funcionar totalmente com mapas offline baixados, então após a tela *<Translate android="true" ids="get_started"/>* você é solicitado a [*baixar mapa*](../start-with/download-maps.md#initial-setup-screen) da sua região. Você pode escolher uma região diferente, restaurar do [OsmAnd Cloud](../personal/osmand-cloud.md), ou pular esta etapa e baixar mapas mais tarde.
Para outras opções de download de mapas disponíveis, consulte o [artigo Baixar mapas](../start-with/download-maps.md).

:::note Comece a trabalhar com mapas offline
O OsmAnd não pode funcionar corretamente sem mapas offline baixados. Embora o aplicativo suporte mapas [Vetoriais](../map/vector-maps.md) e [Raster](../map/raster-maps.md), é fortemente recomendado começar a trabalhar com mapas vetoriais offline para que todas as funções como [Pesquisa](../search/index.md), [Navegação](../navigation/index.md) e [Menu de Contexto](../map/map-context-menu.md) funcionem corretamente.
:::


### Como baixar mapas para o mundo todo {#how-download-maps-for-the-whole-world}

Embora o OsmAnd permita baixar mapas para todas as regiões disponíveis, não há um único pacote para baixar o mundo inteiro de uma vez. Em vez disso, você pode baixar mapas de países ou regiões individuais com base nas suas necessidades.

***Pontos-chave:***

- O **OsmAnd Pro** e o **Maps+** fornecem **downloads ilimitados de mapas**, mas você ainda precisa baixar os mapas uma região por vez.
- **Limitações de armazenamento.** Certifique-se de que seu dispositivo tenha espaço suficiente antes de baixar várias regiões.
- **Atualizações automáticas.** Uma vez baixados, os mapas podem ser atualizados via *Menu → Mapas e Recursos → Atualizações.*


### Como mudar o idioma do aplicativo {#how-to-change-app-language}

A opção *Idioma de exibição* é usada para alterar o idioma de todo o aplicativo, incluindo avisos pop-up, texto interno, mensagens e muito mais. Até o Android 12, o OsmAnd permite personalizar o idioma de exibição de acordo com suas preferências diretamente no aplicativo. A partir do Android 13 e em dispositivos iOS, o idioma de exibição só pode ser alterado nas configurações do sistema (veja como alterar as preferências de idioma por aplicativo no [Android](https://developer.android.com/guide/topics/resources/app-languages) e [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *Configurações → Aplicativos → OsmAnd → Idioma*

![Idioma das Configurações Gerais Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Configurações → OsmAnd Maps → Idioma*

![Idioma das Configurações Gerais iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Nenhuma opção para definir idiomas do aplicativo
Em alguns dispositivos Android (Xiaomi com Muiu 14), não há opção para definir idiomas de aplicativos individualmente nas configurações do sistema, então o idioma do OsmAnd só pode ser alterado com o idioma de todo o sistema. Você pode verificar a discussão no [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) para informações adicionais.
:::


### Como gerenciar suas configurações {#how-to-manage-your-settings}

Você pode gerenciar as configurações do aplicativo como [Configurações Globais](../personal/global-settings.md) ou como [Configuração de Perfil](../personal/profiles.md) via [Menu Principal](../start-with/main-menu.md). O aplicativo vem com uma lista predefinida de perfis que podem ser modificados posteriormente. Cada perfil pode ser considerado um aplicativo de mapa personalizado para fins específicos. Por padrão, os perfis são servidos apenas como diferentes modos de navegação.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Gerenciar perfil Android](@site/static/img/settings/manage_profile_android.png) ![Configurar perfil Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gerenciar perfil iOS](@site/static/img/settings/manage_profile_ios.png) ![Configurar perfil iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Leia mais](../personal/global-settings.md) sobre Configurações Globais.
[Leia mais](../personal/profiles.md) sobre Configurações de Perfil.


### Como configurar plugins {#how-to-configure-plugins}

[Plugins](../plugins/index.md#configure-plugin) estendem grandemente a funcionalidade do aplicativo. Quase todos os plugins têm suas próprias [Ações de Mapa](../map/map-context-menu.md), [Camadas de Mapa](../map/configure-map-menu.md), [Downloads de Mapa](../start-with/download-maps.md) e [Configurações](../plugins/#plugin-settings).

Você pode ativar/desativar plugins via [Menu Principal](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Ativar plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Exemplo de plugin Android](@site/static/img/settings/plugin_example_android.png)

Para ativar/desativar plugins, vá para:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Ativar

</TabItem>

<TabItem value="ios" label="iOS">

![Ativar plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Exemplo de plugin iOS](@site/static/img/settings/plugin_example_ios.png)

Para ativar/desativar plugins, vá para:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Leia mais](../plugins/index.md#configure-plugin) sobre os plugins do OsmAnd.


### Como usar um mapa {#how-to-use-a-map}

O mapa é um elemento central do OsmAnd, e é importante saber [como usá-lo](../map/interact-with-map.md) (gestos, botões, etc.). Você pode [configurar o mapa](../map/configure-map-menu.md) de acordo com suas necessidades: [mudar o estilo do mapa](../map/configure-map-menu.md#map-style-parameters), configurar diferentes [camadas de mapa](../map/configure-map-menu.md#map-layers) como favoritos, POI, transporte público, trilhas, curvas de nível, relevo e outros.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurar mapa Android](@site/static/img/settings/configure_map_menu_android.png) ![Configurar exemplo de mapa Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar mapa iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Configurar exemplo de mapa iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Leia mais](../map/configure-map-menu.md) sobre a configuração do mapa.


### Como configurar a tela {#how-to-configure-screen}

[Configurar tela](../widgets/configure-screen.md) permite ativar widgets [Informativos](../widgets/info-widgets.md) (altitude, velocidade, hora atual, etc.) e [de Navegação](../widgets/nav-widgets.md) (destino, rumo, tempo de chegada, etc.), [Ação rápida](../widgets/quick-action.md) e outros elementos que serão exibidos sobre o Mapa.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configurar tela Android](@site/static/img/widgets/configure_screen_android.png) ![Configurar exemplo de tela Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar tela iOS](@site/static/img/settings/configure_screen_ios.png) ![Configurar exemplo de tela iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Leia mais](../widgets/configure-screen.md) sobre a configuração da tela.


### Como adicionar dados pessoais aos mapas {#how-to-add-personal-data-to-maps}

O OsmAnd permite que você faça várias marcações no Mapa para suas necessidades pessoais. Por exemplo, [Pontos Favoritos](../personal/favorites.md) - pontos pessoais com nome, ícone e categoria, [Marcadores](../personal/markers.md) - pontos rapidamente adicionados como um alvo, [Notas de Áudio/Vídeo](../plugins/audio-video-notes.md) - notas de mídia gravadas em um ponto específico, [Trilhas](../personal/tracks/manage-tracks.md) - trilhas e passeios gravados e importados.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Adicionar dados pessoais Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adicionar dados pessoais iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Leia mais](../map/point-layers-on-map.md) sobre pontos no mapa.


### Como navegar e encontrar pontos de interesse {#how-to-browse--find-point-of-interest}

[Pontos de Interesse (POIs)](../map/point-layers-on-map.md#points-of-interest-pois) são comodidades que podem ser pesquisadas ou destacadas no mapa. Eles representam lugares interessantes ou úteis e são distribuídos como parte dos [Mapas Vetoriais](../map/vector-maps.md). Você pode usá-los para [exibir no mapa](../map/point-layers-on-map.md#points-of-interest-pois), [navegar](../navigation/index.md) e [pesquisar](../search/search-poi.md) os pontos de interesse no Mapa.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seleção de múltiplos POIs](@site/static/img/map/multiple_selection_android.png) ![Pesquisar e exibir POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleção de múltiplos POIs](@site/static/img/settings/multiple_selection_iOS.png) ![Pesquisar e exibir POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Leia mais](../search/search-poi.md) sobre a pesquisa de POIs.


### Como planejar uma rota {#how-to-plan-a-route}

[Planejar rota](../plan-route/create-route.md) é uma ferramenta poderosa que permite criar uma viagem, editar uma trilha existente e medir distâncias no local. Você pode rapidamente inserir pontos intermediários e conectá-los por várias linhas de navegação (bicicleta, pedestre, linha reta, etc.). Os resultados podem ser salvos em um arquivo GPX, para que possam ser [compartilhados](../personal/tracks/index.md) ou [usados pela navegação](../navigation/setup/gpx-navigation.md) posteriormente.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Planejar rota Android](@site/static/img/settings/plan_route_android.png) ![Gráfico de rota Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planejar rota iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Leia mais](../plan-route/create-route.md) sobre o recurso de planejamento de rota.


### Como pesquisar por endereço {#how-to-search-by-address}

O OsmAnd oferece muitos recursos de pesquisa, incluindo pesquisa de endereço. Por padrão, ele usa [dados do OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) e deve ser capaz de encontrar todos os endereços usando a entrada de Pesquisa Rápida. Além disso, você pode [pesquisar](../search/search-address.md) por cidade, rua, código postal e coordenadas.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pesquisa de endereço Android](@site/static/img/settings/address_search_android.png) ![Resultado da pesquisa Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de endereço iOS](@site/static/img/settings/address_search_ios.png) ![Resultado da pesquisa iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Você precisa baixar o mapa antes de pesquisar um endereço nele. Além disso, se sua localização atual estiver muito longe do endereço que você está procurando, talvez seja necessário aumentar o raio de pesquisa.
:::

[Leia mais](../search/search-address.md) sobre a pesquisa de endereço.


### Como iniciar a navegação {#how-to-start-navigation}

[Navegação](../navigation/index.md) fornece orientação passo a passo para o seu destino, exibindo a rota, oferecendo instruções curva a curva, informações adicionais sobre a superfície da estrada, suavidade, etc., e orientação por voz opcional.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Iniciar navegação Android](@site/static/img/settings/start_navigation_android.png) ![Gráfico de rota Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Iniciar navegação iOS](@site/static/img/settings/start_navigation_ios.png) ![Gráfico de rota iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Leia mais](../navigation/index.md) sobre navegação.


### Como gravar sua viagem {#how-to-record-your-trip}

[Gravação de viagem](../plugins/trip-recording.md) é uma ferramenta especial empacotada como um plugin do OsmAnd que permite gravar todos os movimentos na trilha usando o GPS do dispositivo.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Gravação de viagem Android](@site/static/img/settings/trip_recording_android.png) ![Visão geral da gravação de viagem Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Iniciar gravação de viagem iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu de gravação de viagem iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Leia mais](../plugins/trip-recording.md) sobre gravação de viagem.


### Como editar mapas {#how-to-edit-maps}

O OsmAnd é alimentado por dados do [OpenStreetMap](https://www.openstreetmap.org/). Os mapas são criados por colaboradores voluntários, então podem ter mais ou menos detalhes dependendo do trabalho realizado em uma determinada parte do mapa. Qualquer pessoa pode se registrar como colaborador e adicionar ou editar mapas OSM. O OsmAnd oferece um plugin de edição que ajuda a melhorar o OpenStreetMap.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Nota OSM Android](@site/static/img/settings/osm_note_android.png) ![Criar POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nota OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Criar POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Leia mais](../plugins/osm-editing.md) sobre edição OSM.


### Como fechar o aplicativo {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Existem duas variantes disponíveis de como fechar o OsmAnd.

1. Feche um aplicativo deslizando para cima e para fora da tela. Para uma lista vertical de aplicativos, deslize para a esquerda ou para a direita.

2. Pode ser necessário executar as seguintes etapas antes de fazer isso, caso contrário, o OsmAnd será executado em segundo plano:
    - [Descartar navegação](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Parar download e atualização de mapas](../start-with/download-maps.md)
    - [Parar gravação de viagem](../plugins/trip-recording.md#create-new-track)
    - [Parar gravação de notas de áudio/vídeo](../plugins/audio-video-notes.md)

3. Função *Forçar parada*:
    - Toque e segure o *ícone do OsmAnd → botão **i** → Forçar parada*.
    - Abra as configurações e toque em *Aplicativos e notificações → OsmAnd → Forçar parada*.

</TabItem>

<TabItem value="ios" label="iOS">

Feche um aplicativo deslizando para cima e para fora da tela. Para uma lista vertical de aplicativos, deslize para a esquerda ou para a direita.

Pode ser necessário executar as seguintes etapas antes de fazer isso, caso contrário, o OsmAnd será executado em segundo plano:

- [Cancelar navegação](../navigation/setup/route-navigation.md)
- [Parar download e atualização de mapas](../start-with/download-maps.md)
- [Parar gravação de viagem](../plugins/trip-recording.md#create-new-track)
- [Parar gravação de notas de áudio/vídeo](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Atalhos do Aplicativo {#app-shortcuts}

<InfoAndroidOnly/>

[Atalhos de aplicativo](https://support.google.com/android/answer/9450271) estão disponíveis para o ícone do OsmAnd. Basta tocar e segurar o ícone do OsmAnd na tela do seu dispositivo para abrir o menu de atalhos do aplicativo. Aqui, você pode pressionar rapidamente para selecionar as seguintes ações: *Navegar para Casa*, *Navegar para o Trabalho*, *Iniciar Gravação*, *Pesquisar*, *Meus lugares*, *Navegar para*. Tocar e segurar uma ação permite adicionar um novo ícone de ação à tela do seu dispositivo.

Toque em um ícone de ação para iniciar imediatamente o aplicativo com a ação selecionada.

![Atalhos](@site/static/img/steps/shortcuts_3_andr.png) ![Atalhos](@site/static/img/steps/shortcuts_4_andr.png)


## Ajuda Offline {#offline-help}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

No *Menu de Ajuda*, você pode encontrar artigos do nosso site [www.osmand.net/docs](https://osmand.net/docs/intro/). Após o download inicial (conexão com a Internet necessária), os artigos de ajuda estão disponíveis offline.
A primeira subseção, *Ajuda Offline*, contém os artigos **Mais vistos** (ou populares) entre nossos usuários. As seções **Guia do Usuário** e **Solução de Problemas** têm a mesma estrutura do site.
No *Menu de Ajuda*, você também pode encontrar links úteis para as redes sociais do OsmAnd, informações de versão sobre seu aplicativo, notas de lançamento e contatos de suporte. Através da Ajuda, você também pode enviar [logcat e logs de falhas](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Enviar log de falhas** (*para Android*). Permite que os usuários enviem relatórios de falhas do aplicativo aos desenvolvedores, auxiliando na identificação e resolução de problemas.
- **Enviar logcat log** (*para Android*). Fornece aos usuários a capacidade de enviar logs detalhados de falhas do aplicativo aos desenvolvedores, facilitando uma análise e solução de problemas mais aprofundadas.
- **Enviar log** (*para iOS*). Executa uma função semelhante ao recurso *Enviar log de falhas* para Android, permitindo que usuários em dispositivos iOS relatem falhas de aplicativos aos desenvolvedores para fins de depuração.
- **Copiar versão da compilação**. Permite que os usuários comuniquem de forma rápida e precisa a versão atual do aplicativo aos desenvolvedores ao relatar problemas, simplificando o processo de diagnóstico e resolução.


### Mais Vistos {#most-viewed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Os artigos mais vistos entre nossos usuários referem-se aos artigos no aplicativo ou no site que obtiveram o maior número de visualizações ou interações do usuário. Essa métrica ajuda a identificar o conteúdo que é particularmente interessante ou útil para seus usuários. Ela pode fornecer informações valiosas sobre as preferências e interesses do usuário, permitindo que desenvolvedores e criadores de conteúdo adaptem o conteúdo futuro para melhor atender às necessidades do público. Além disso, destacar artigos populares pode ajudar novos usuários a encontrar recursos valiosos dentro do aplicativo.


### Guia do Usuário {#user-guide}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

A seção **Guia do Usuário** do menu Ajuda é um manual completo que segue a estrutura do site do OsmAnd, garantindo consistência de informações e facilidade de navegação entre as plataformas. Usando a Ajuda, você pode navegar facilmente do aplicativo para o site, encontrando o mesmo conteúdo organizado de forma familiar. Essa consistência melhora a usabilidade, fornecendo um único recurso de suporte para encontrar respostas a perguntas e solucionar problemas rapidamente.


### Solução de Problemas {#troubleshooting}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Soluções e dicas para resolver problemas comuns. Se você tiver uma pergunta específica, verifique [Solução de Problemas](../troubleshooting/index.md) para obter a resposta.

- [Configuração](../troubleshooting/setup.md). Ao configurar um aplicativo, esses são os problemas que mais frequentemente surgem.
- [Mapas e dados](../troubleshooting/maps-data.md). Problemas relacionados a mapas, pesquisa e o restante dos dados.
- [Navegação](../troubleshooting/navigation.md). Os problemas mais comuns que ocorrem no modo de navegação.
- [Gravação de trilhas](../troubleshooting/track-recording-issues.md). Problemas comuns relacionados à gravação de trilhas, como ruídos, lacunas e imprecisões.
- [Geral](../troubleshooting/general.md). Problemas comuns associados a vários recursos do OsmAnd.
- [Logs de falhas](../troubleshooting/crash-logs.md). Como enviar logs de falhas para a equipe do OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*apenas para Android*). Problemas de navegação automática.

### Contate-nos {#contact-us}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Permite que você faça perguntas ou sugestões.

### Relatar Problemas {#report-issues}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Abrir problema no GitHub**. [Versão Android GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [Versão iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): faça perguntas, escreva sobre bugs e proponha recursos.
- **Enviar log de falhas** (*para Android*). Contém apenas informações sobre falhas.
- [Enviar logcat log](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Enviar log](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Arquivo de log detalhado.

### Sobre o OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Captura de tela da ajuda offline Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de mapas iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Você pode aprender sobre nossa equipe, ver a versão atual do aplicativo e o que há de novo, e baixar a versão beta do aplicativo.


## Privacidade {#privacy}

É um aplicativo [de código aberto](https://github.com/osmandapp/osmand), sem anúncios/rastreadores e focado na privacidade. Para preservar a máxima privacidade, o OsmAnd oferece mapas offline como primeira opção, para que nenhuma interação ou informação geográfica seja vazada do seu dispositivo. Somos muito atentos aos dados coletados e transferidos pela rede, você pode ler mais em nossa [Política de Privacidade](https://osmand.net/help-online/privacy-policy).


## Permissões {#permissions}

O OsmAnd não exige nenhuma permissão na versão iOS/Android.

**Essencial**:

- **Internet**. Download inicial/atualização de mapas offline. Além disso, pode ser necessário para acessar recursos online como [Imagens de Nível de Rua](../map/point-layers-on-map.md#-street-level-imagery), [Fotos Online](../map/map-context-menu.md#online-photos) ou [Mapas Online](../map/raster-maps.md).
- **GPS** / **Rede GSM**. Determinar sua localização, segui-lo em um modo de navegação e registrar sua viagem (opcional). Esta permissão é solicitada quando você clica no [botão minha localização](../widgets/map-buttons.md#my-location-and-zoom) ou quando você [inicia a navegação](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opcional**:

- **Gravação de câmera/voz** (*Android*). Usado apenas pelas [notas de Áudio/Vídeo](../plugins/audio-video-notes.md). Este recurso é empacotado como um plugin e, por padrão, desabilitado. Ele permite que você crie rapidamente notas de áudio/vídeo relacionadas à localização durante uma viagem.


> *Última atualização: janeiro de 2025*