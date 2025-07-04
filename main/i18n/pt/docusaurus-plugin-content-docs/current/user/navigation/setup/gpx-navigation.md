---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title:  Navegar por Trajeto
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

A opção *Navegação por trajeto* (GPX) permite que você siga uma rota ou trajeto predefinido em um mapa. Pode ser particularmente útil para atividades ao ar livre, como caminhadas, ciclismo ou condução off-road, onde ter uma rota planejada melhora a segurança e a eficiência. Se você estiver viajando em um grupo organizado, este recurso ajuda você e cada membro do grupo a ter as mesmas informações de rota que os outros.

A opção *Navegação por trajeto* também pode ser usada no dia a dia. Você pode usar um [trajeto gravado](../../plugins/trip-recording.md) anteriormente ou [criar um trajeto](../../personal/tracks/manage-tracks.md#create-a-track) e compartilhá-lo com sua família ou amigos em vez de explicar a rota para eles. Você também pode usar as [rotas no mapa do OsmAnd](../../../../blog/routes/) para navegação. Como destacá-las no mapa e o que suas cores significam é descrito na [seção Rotas](../../map/vector-maps.md#routes) do artigo *Mapas vetoriais*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Selecionar o Trajeto {#select-the-track}

Antes de usar a opção *Navegação por trajeto*, você precisa [exibir o trajeto no mapa](../../map/tracks/index.md#display-tracks-on-the-map). O OsmAnd suporta trajeto como uma linha (**Geometria**) e trajeto como uma rota (**Rota**) ou uma combinação delas (**OsmAnd** por [Planejar rota](../../plan-route/create-route.md)). Se você tiver um trajeto como uma coleção de **Pontos de passagem**, você pode usar a [Navegação por marcadores](./markers-navigation.md).


- O trajeto **Geometria** terá uma navegação muito básica por padrão e não fornecerá curvas precisas, nomes de ruas e faixas de viragem. Para obter informações ausentes, você precisa usar a ferramenta [Anexar às estradas](#attach-to-the-roads).

- O trajeto **Rota** calculará a rota entre os pontos de rota pelo perfil selecionado. Basicamente, todos os pontos de rota serão considerados como pontos intermediários. Se sua rota consistir em > 50 pontos, é muito provável que seja um trajeto **Geometria** mal configurado.

- O trajeto **OsmAnd** consiste em partes de geometria e rota, e é adequado para fornecer exatamente a mesma orientação que a navegação por padrão. Esses trajetos são produzidos por [Planejar rota](../../plan-route/create-route.md) ou [Versão web](../../web/index.md). É possível salvar este trajeto novamente para o trajeto somente **Geometria** como [**Simplificado**](../../plan-route/create-route.md#save-route) para ser usado em programas de terceiros.


### Iniciar Navegação GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

A navegação em um trajeto pode ser iniciada usando o botão de ação rápida no [menu de contexto do trajeto](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (aberto selecionando um dos [trajetos destacados](./route-navigation.md#history-of-previous-routes) no mapa, ou tocando em um arquivo de trajeto na seção [Meus Locais](../../personal/myplaces.md) do *Menu Principal*) ou no menu de navegação, que é aberto tocando em:

- [*Botão de navegação*](../../widgets/map-buttons.md#directions) na tela do mapa.
- *Seção de navegação* no *Menu Principal* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- No [*menu de navegação*](./route-navigation.md#navigation-menu) vá para *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Escolher Segmentos {#choose-segments}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Para navegação, se o trajeto selecionado consistir em múltiplos segmentos ou trajetos, você pode selecionar um segmento específico ou o arquivo de trajeto GPX inteiro. Ao **[importar](../../personal/tracks/manage-tracks.md#import)**, você pode escolher se deseja salvá-lo em um único arquivo ou em múltiplos arquivos.


### Opções de Seguir Trajeto {#follow-track-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Editar** (*ícone de lápis* ao lado do nome do trajeto) — Abre o trajeto na ferramenta [*Planejar uma rota*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Seleciona um arquivo GPX diferente para navegação.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Se esta configuração estiver ativada, a direção do movimento ao longo dojeto é invertida.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura o [anexo de um trajeto às estradas](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Você pode selecionar como navegar da minha localização para o trajeto:
para o *<Translate android="true" ids="start_of_the_track"/>* ou para o *<Translate android="true" ids="nearest_point"/>* no trajeto.
- Escolha o **Tipo de navegação** para o primeiro e último segmento: construir uma [*linha reta*](../routing/straight-line-routing.md) ou usar o [*tipo de roteamento*](../routing/osmand-routing.md#routing-types) do perfil atual.


### Anexar às Estradas {#attach-to-the-roads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

O recurso **Anexar às estradas** alinha seu trajeto com a estrada mais próxima para uma experiência de navegação mais precisa. Disponível no menu [Seguir trajeto](#follow-track-options), este recurso garante que sua rota siga a rede rodoviária apropriada com base no *perfil de navegação* selecionado e na **distância limite**. Isso aprimora tanto os [detalhes da rota](../setup/route-details.md) quanto as [instruções de voz](#guidance) durante a navegação.

***Como funciona:***

- O OsmAnd associa cada ponto do trajeto à **estrada mais próxima** dentro da **distância limite** definida (padrão: **50 metros**).
- A **distância limite** define a distância máxima permitida entre um ponto de trajeto GPS e uma estrada para anexo.
- **Reanexo automático** — Ao alternar **perfis de navegação**, o OsmAnd reanexa automaticamente o trajeto às estradas que são adequadas para o novo perfil.
- Para trajetos grandes com muitos pontos, o processo de anexo pode demorar um pouco mais. Você verá um **indicador de progresso** (*linha de status laranja*) mostrando o status do anexo.
- Após a conclusão do anexo, toque em **Aplicar** para usar o trajeto modificado para navegação.

#### Anexo Automático às Estradas {#automatic-attachment-to-the-roads}

O OsmAnd automaticamente ajusta as rotas às estradas ao usar a ferramenta **Planejar uma Rota**:

- Os **Pontos de passagem** se alinham automaticamente com a estrada disponível mais próxima (*exceto para [Roteamento em Linha Reta](../../navigation/routing/straight-line-routing.md) e [Roteamento Direto ao Ponto](../../navigation/routing/direct-to-point-routing.md)*).
- Se nenhuma estrada for detectada (por exemplo, em ambientes off-road), a rota seguirá **segmentos em linha reta**.
- Você pode **ajustar manualmente** a rota arrastando os pontos de passagem para diferentes locais.

Por padrão, o recurso **Anexar às estradas** é executado **automaticamente** quando um trajeto é selecionado para navegação. Você pode alterar essa configuração conforme necessário. Para mais detalhes, consulte [Orientação Detalhada do Trajeto](../guidance/navigation-settings.md#detailed-track-guidance) no artigo *Configurações de Navegação*.


## Pontos {#points}

### Ponto de Início / Fim {#start--finish-point}

Você pode especificar o ponto de início e fim para uma rota diferente do início/fim especificado no arquivo GPX. Basta alterá-lo da mesma forma que você faz para [Navegação](../setup/route-navigation.md#select-starting-point).

No menu [Seguir trajeto](#follow-track-options), você pode escolher se deseja navegar da sua localização atual para o ponto de início do trajeto ou para o ponto mais próximo no trajeto GPX. Além disso, você pode escolher o [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) que será usado para o segmento de início e fim da sua rota.

### Pontos de Passagem {#waypoints}

Se o trajeto tiver pontos de passagem, você pode usar [Mostrar ao longo da rota](../guidance/map-during-navigation.md#show-points-along-the-route) e [Orientação por voz](../guidance/voice-navigation.md#voice-settings) para ser notificado sobre Pontos de Interesse. Você pode adicionar **Pontos de passagem** a um trajeto existente através do [Menu de contexto](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), o trajeto precisa estar visível no mapa.

### Pontos Intermediários {#intermediate-points}

Ao preparar ou navegar por um trajeto GPX, você não pode adicionar locais intermediários pelos quais planeja passar dentro desse trajeto. Você só pode atribuir pontos de início e fim, além do trajeto ou segmento que planeja seguir.

## Orientação {#guidance}

A *Navegação por trajeto GPX* contém as mesmas [instruções de voz](../guidance/voice-navigation.md) que a navegação por rota. No entanto, algumas curvas ou rotatórias podem não ser interpretadas corretamente porque não há informações sobre cruzamentos de estradas no GPX, exceto para arquivos GPX criados pelo OsmAnd. Para eliminar esses problemas, você deve usar o recurso [Anexar às estradas](#attach-to-the-roads).

Durante a navegação, você pode usar várias opções, como aumentar ou diminuir o zoom, mover o mapa ou mudar para um estilo de mapa diferente. Se você se desviar do trajeto, o OsmAnd recalculará automaticamente a rota para colocá-lo de volta no caminho. Você também pode ajustar a velocidade do trajeto e definir alertas sonoros para pontos de aproximação ou desvios da rota.


## Artigos Relacionados {#related-articles}

- [Parâmetros de rota](../routing/osmand-routing.md#routing-types)
- [Preparação da rota](./route-navigation.md)
- [Detalhes da rota](./route-details.md)
- [Navegação por marcadores](./markers-navigation.md)
- [Configurações de navegação](../guidance/navigation-settings.md)
- [Tela do mapa durante a navegação](../guidance/map-during-navigation.md)
- [Instruções de voz / Notificações](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última atualização: abril de 2025*