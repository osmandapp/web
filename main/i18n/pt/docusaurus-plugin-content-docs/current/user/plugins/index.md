---
source-hash: 82f8eb0792e7d1e839f270fe978f42afb1342112ba3154466d07b464ea6b59b9
sidebar_position: 18
title: Plugins
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




## Visão geral {#overview}

Os plugins estendem significativamente a funcionalidade do OsmAnd. Cada um foi projetado para abordar uma tarefa ou caso de uso específico, como gravar uma viagem, acessar artigos da Wikipedia offline, visualizar dados de terreno ou fornecer uma visualização em nível de rua.

Os plugins podem ser internos, ativados no aplicativo OsmAnd, ou externos, programas instalados separadamente. Plugins de terceiros funcionam através da API do OsmAnd e podem acessar dados do OsmAnd.


## Configurar Plugin {#configure-plugin}

Para acessar a funcionalidade de um plugin, ele deve primeiro ser [ativado](#enable--disable), e alguns plugins exigem uma [compra](#purchase) antes do uso. Então, em alguns casos, uma camada de mapa específica deve ser ativada, ou um perfil de usuário deve ser [configurado](#plugin-settings).


### Ativar / Desativar {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Ativar*

![Ativar plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Exemplo de plugin Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Ativar plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Exemplo de plugin iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Compra {#purchase}

A maioria dos plugins está disponível gratuitamente, apenas os plugins da lista abaixo exigem a compra de uma licença [OsmAnd+ ou OsmAnd Pro](../purchases/index.md) para usar:

- [Topografia](../plugins/topography.md)
- [Relevo 3D](../plugins/topography.md#3d-relief) (recurso do plugin Topografia)
- [Wikipedia](../plugins/wikipedia.md)
- [Visualização de mapa náutico](../plugins/nautical-charts.md)
- [Clima](../plugins/weather.md)

Informações detalhadas sobre a compra do aplicativo podem ser encontradas na seção [Compra](../purchases/).

### Recursos do Plugin {#plugin-features}

Os Plugins do OsmAnd podem aumentar esses grupos de Recursos: **Camadas**, **Widgets**, **Ações do Menu de Contexto**, **Ações da Gaveta**, **Estilo do Mapa**, **Fonte do Mapa**, **Perfil**.

🤖 - *apenas para a versão Android do OsmAnd.*

| Nome do Plugin | Recursos |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Camada de mapa](../plugins/wikipedia.md#download-wikipedia-packages), [Menu de contexto](../plugins/wikipedia.md#wikipedia-languages) |
| [Mapas online](#online-maps) |[Camada de mapa](../plugins/online-map.md#configure-map-source) |
| [Gravação de viagem](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Perfil](../plugins/trip-recording.md#profile-settings) |
| [Topografia](#topography) | [Camada de mapa](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Relevo 3D](#topography) 🤖 | [Camada de mapa](../plugins/topography.md#3d-relief) |
| [Clima](../plugins/weather.md) | [Camada de mapa](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Tela](../plugins/weather.md#configure-screen) |
| [Visualização de mapa náutico](#nautical-map-view) | [Estilo de mapa](../plugins/nautical-charts.md#nautical-map-style), [Perfil](../plugins/nautical-charts.md#nautical-options) |
| [Visualização de mapa de esqui](#ski-map-view) | [Estilo de mapa](../plugins/ski-maps.md#set-winter-style), [Perfil](../plugins/ski-maps.md#skiing-profile) |
|[Notas de áudio/vídeo](#audiovideo-notes) 🤖 | [Camada de mapa](../plugins/audio-video-notes.md#show-all-on-the-map), [Menu de contexto](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Edição OpenStreetMap](#openstreetmap-editing)| [Camada de mapa](../plugins/osm-editing.md#how-to-use) |
|[Posição de estacionamento](#parking-position) | [Menu de contexto](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Camada de mapa](../plugins/mapillary.md#map-layer), [Menu de contexto](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Sensores externos](#external-sensors) 🤖 | [Widget](../plugins/external-sensors.md#widgets) |
|[Acessibilidade](#accessibility) 🤖 | [Configurações personalizadas](../plugins/accessibility.md#plugin-settings) |
| [Desenvolvimento OsmAnd](#osmand-development) | [Configurações personalizadas](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | [Camada de mapa](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Menu de contexto](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Rastreador de embarcações AIS](#ais-vessel-tracker) 🤖 | [Configurações personalizadas](../plugins/ais-tracker.md#plugin-settings) |


### Configurações do Plugin {#plugin-settings}

:::caution NOTA
Apenas o plugin de desenvolvimento do OsmAnd e o plugin de edição OSM alteram as configurações para todos os perfis. Os plugins restantes são configurados para cada perfil separadamente.
:::

A maioria dos plugins fornece configurações de perfil ou globais específicas, que podem ser acessadas via:

- *Menu Principal → Plugins → Nome do Plugin → Configurações (&#x2699 para iOS)* ou
- *Menu Principal → Configurações → Perfil → [Configurações do Plugin](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações do plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Configurações do plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações do plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Configurações do plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Os seguintes plugins fornecem suas próprias configurações:

🤖 - *apenas para a versão Android do OsmAnd.*

| Nome do Plugin | Configurações |
|:------------|:-------|
| [Gravação de viagem](#trip-recording) | Configurar os [modos de operação](../plugins/trip-recording.md#recording-parameters) da gravação de viagem |
| [Clima](#weather) | Configurar unidades de medida para exibição de eventos climáticos |
|[Notas de áudio/vídeo](#audiovideo-notes) 🤖 | Selecionar [formato de vídeo, tempo de armazenamento, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[Edição OpenStreetMap](#openstreetmap-editing)| Especificar [login](../plugins/osm-editing.md#plugin-settings) do usuário |
| [Sensores externos](#external-sensors) 🤖 | Conectar a dispositivo externo [Configurações](../plugins/external-sensors.md#settings) |
| [Acessibilidade](#accessibility) 🤖 | [Configurações](../plugins/accessibility.md#plugin-settings) permitem usar os [recursos de acessibilidade](https://www.android.com/accessibility/) do Android dentro do OsmAnd. |
| [Desenvolvimento OsmAnd](#osmand-development) | [Configurações do plugin](../plugins/development.md#plugin-settings) permitem ativar recursos especiais para desenvolvedores ou usuários experientes |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | Todas as configurações são configuráveis em um aplicativo separado |
| [Rastreador de embarcações AIS](#ais-vessel-tracker) | [Configurações do plugin](../plugins/ais-tracker.md#plugin-settings) permitem ativar configurações especiais |

### Ações do Plugin {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *usando esta opção, as configurações do plugin podem ser redefinidas para os valores padrão*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *as configurações do plugin podem ser copiadas de outro perfil*.


## Lista de Plugins {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Ter a Wikipedia em sua viagem ajuda você a aprender mais sobre os lugares que visita. Está disponível offline e mostra artigos da Wikipedia relacionados aos pontos de interesse diretamente no mapa.

### [Mapas Online](./online-map.md) {#online-maps}

Os Mapas Online do OsmAnd são uma adição extensa ao banco de dados do OpenStreetMap já presente no aplicativo. Com este plugin, você pode adicionar camadas ao seu mapa com informações de várias fontes.

### [Gravação de Viagem](./trip-recording.md) {#trip-recording}

Para contar uma história de onde você esteve, os dados de GPS, como latitude e longitude de sua localização, podem ser gravados e armazenados em um arquivo, e então reutilizados, aprimorados, enriquecidos com pontos de passagem, fornecidos para navegação, compartilhados com amigos, etc.

### [Topografia](./topography.md) {#topography}

Informações topográficas, como Curvas de Nível, Relevo Sombreado, Inclinação, Relevo 3D, ajudam a fazer uma avaliação visual do terreno, vendo elevação, relevo, extremos, inclinação, pontos de igual altura, etc.

### [Visualização de Mapa Náutico](./nautical-charts.md) {#nautical-map-view}

A visualização de mapa náutico fornece representação gráfica detalhada de oceanos, mares, áreas costeiras e rios para ajudá-lo a navegar na água, ver rotas de tráfego populares, obstáculos na via navegável, portos, ancoradouros e outras referências essenciais.

### [Visualização de Mapa de Esqui](./ski-maps.md) {#ski-map-view}

A Visualização de Mapa de Esqui mostra cores de inverno e pistas de descida ou cross-country, bem como teleféricos, cadeirinhas, instalações e serviços próximos, o que é útil para navegar em destinos como áreas de recreação, estações de esqui e parques de terreno.

### [Notas de Áudio/Vídeo](./audio-video-notes.md) {#audiovideo-notes}

Crie notas de áudio/vídeo para referência futura, por exemplo, para lembrar um evento, cena ou interação. As notas de áudio/vídeo criadas estão disponíveis em *Meus lugares*, bem como no mapa como uma camada individual de histórias e pensamentos feitos pelo usuário, vinculados a uma geolocalização. Apenas para Android.

### [Posição de Estacionamento](./parking.md) {#parking-position}

Defina um ponto no mapa onde seu carro foi deixado na rua e notifique seu calendário quando o tempo de estacionamento terminar. Isso facilitará o acompanhamento do tempo e da localização do seu carro.

### [Edição OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

O plugin de edição do OpenStreetMap permite que você contribua para o OpenStreetMap, uma comunidade global que cria um mapa abrangente do mundo e fornece dados de código aberto atualizados e publicamente disponíveis.

### [Mapillary](./mapillary.md) {#mapillary}

Veja visualizações em nível de rua de suas rotas ou pontos de interesse, fornecidas por [Mapillary](https://www.mapillary.com/) (é necessária uma conexão com a internet).

### [Acessibilidade](./accessibility.md) {#accessibility}

O plugin de Acessibilidade torna os recursos de acessibilidade do dispositivo diretamente disponíveis no OsmAnd. Apenas para Android.

### [Sensores Externos](./external-sensors.md) {#external-sensors}

Conecte sensores externos para exibir seus dados no OsmAnd e armazenar as informações em gravações de trilha.

### [Métricas do Veículo](./vehicle-metrics.md) {#vehicle-metrics}

Conecte o scanner OBD-II para exibir dados do veículo no OsmAnd e armazenar as informações em gravações de trilha.

### [Clima](./weather.md) {#weather}

Mostra a previsão horária para o dia atual e para os próximos 7 dias.

### [Desenvolvimento OsmAnd](./development.md) {#osmand-development}

O plugin de desenvolvimento do OsmAnd é destinado a desenvolvedores e usuários experientes. Ele permite simular rotas de navegação, verificar o desempenho da renderização da tela, etc.

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

O OsmAnd Tracker ajuda você a ver onde seus contatos estão no mapa do OsmAnd. Apenas para Android.

### [Rastreador de Embarcações AIS](./ais-tracker.md) {#ais-vessel-tracker}

Exibe posições AIS e informações sobre embarcações circundantes. Os dados AIS são recebidos via rede de um receptor AIS externo.

## [Criar um Plugin Personalizado](./custom.md) {#create-a-custom-plugin}

Você pode criar seu próprio plugin seguindo o artigo *Pacote Personalizado*.


_______

> *Última atualização: Março de 2025*