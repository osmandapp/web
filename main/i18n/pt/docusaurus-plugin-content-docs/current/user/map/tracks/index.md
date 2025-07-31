---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Trilhas
sidebar_position: 2
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

O OsmAnd possui muitos recursos poderosos para exibir várias rotas no mapa. As rotas podem ser construídas como parte da Navegação, criadas via Planejar Rota, importadas como trilhas GPX, gravadas via plugin de Gravação de Viagem, ou navegadas e selecionadas a partir de dados do OpenStreetMap.


## Tipos de Trilhas {#types-of-tracks}

[Trilhas (GPX)](#display-tracks-on-the-map) - viagem gravada ou planejada salva em [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Este tipo de rota pode ser importado de uma fonte externa, criado no aplicativo ou gravado por você. O GPX pode conter um dos 3 tipos diferentes de dados, ou todos eles:

- Trilha como uma linha (***Geometria***). O arquivo possui um array de pontos ```<trkpt>```, cada ponto tem a localização e tempo opcional, velocidade, altitude e outros atributos. Essas trilhas são exibidas no mapa como linhas sólidas.
- Trilha como uma rota (***Rota***). O arquivo possui um array de pontos ```<rtept>```, cada ponto descrito como um ponto intermediário da rota. Depende de como os pontos dentro de uma rota devem ser conectados, seja como pequenos segmentos de rota ou via uma linha reta. Essas trilhas são exibidas no mapa como linhas tracejadas.
- Pontos de passagem (***Pontos***). O arquivo possui pontos ```<wpt>``` com atributos. Os pontos de passagem são exibidos como pontos circulares no mapa. Você pode tocá-los para obter informações adicionais.

O OsmAnd pode criar trilhas com 1 a 3 combinações. [Planejar Rota](../../plan-route/create-route.md) cria uma trilha com ***Geometria*** e ***Rota***, se você salvá-la como ***Trilha Simplificada***, apenas a ***Geometria*** será mantida. [Gravar trilha](../../plugins/trip-recording.md#new-track-recording) cria apenas ***Geometria***, mas você também pode adicionar ***Pontos*** a ela através do menu de contexto.


## Exibir Trilhas no Mapa {#display-tracks-on-the-map}

Você pode gerenciar a visibilidade da trilha escolhendo quais exibir ou ocultar em vários menus: o [menu Meus Lugares](#my-places), o [menu Configurar Mapa](#configure-map) e o [menu de Contexto da Trilha](#track-context-menu). Essa flexibilidade permite alternar rapidamente entre diferentes trilhas, garantindo que apenas as trilhas relevantes estejam visíveis em seu mapa a qualquer momento.

### Configurar Mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configurar trilhas do mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configurar trilhas do mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configurar trilhas do mapa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configurar trilhas do mapa iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

A opção *Configurar Mapa* permite gerenciar rapidamente a exibição de todas as trilhas exibidas recentemente, permitindo alternar a visibilidade para um grupo de trilhas. A classificação da trilha segue a ordem configurada na aba *Meus Lugares → Trilhas*. Você pode acessar o [Menu da Trilha](../../personal/tracks/manage-tracks.md#track-menu) tocando longamente em um item da trilha. Além disso, neste menu, você pode modificar a aparência de várias trilhas selecionadas simultaneamente.

### Meus Lugares {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Meus Lugares com trilhas no Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → toque longo na trilha GPX escolhida → Mostrar no mapa*

![Menu de contexto de uma trilha no iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Em [Meus Lugares *→* aba Trilhas](../../personal/tracks/manage-tracks.md#manage-tracks) para exibir a trilha no mapa, você precisa:

- *Android* - tocar no *menu de três pontos* no campo com a trilha desejada.
- *iOS* - tocar longamente na trilha desejada na lista.


### Menu de Contexto da Trilha {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visão geral do menu de contexto da trilha Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Visão geral do menu de contexto da trilha iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Ao selecionar uma trilha no mapa ou abrir o [menu de contexto da trilha](./track-context-menu.md) após gravar ou importar uma trilha, você pode controlar sua visibilidade no mapa. Basta usar os botões *Mostrar* ou *Ocultar* para exibir ou remover a trilha da visualização do mapa.


## Analisar Trilha no Mapa {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Toque na trilha → Aba Trilha → <Translate android="true" ids="analyze_on_map"/>*  

![Menu da trilha analisar no mapa Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Menu da trilha analisar no mapa distância Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Toque na trilha → Aba Trilha → <Translate ios="true" ids="analyze_on_map"/>*  

![Menu da trilha analisar no mapa](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Menu da trilha analisar no mapa ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Esta ferramenta fornece uma análise detalhada dos dados da [trilha](../../map/tracks/track-context-menu.md#options) usando gráficos e mapas.

- Os **dados do gráfico (eixo Y)** exibem: *Altitude*, *Inclinação*, *Velocidade*, [*Dados do sensor externo*](../../plugins/external-sensors.md) e combinações de até duas opções, se contidas nos dados da trilha.
- A **dimensão do gráfico (eixo X)** representa: *Distância*, *Tempo* e *Hora do dia*.
- **Interação de toque/deslize**. Toque em um gráfico para exibir informações sobre um ponto específico na trilha. Deslizar no gráfico destaca a localização apropriada no mapa e mostra detalhes na barra de informações.
- **Escala**. Use um [gesto de dois dedos](../../map/interact-with-map.md#gestures) para dimensionar o gráfico para uma visualização mais detalhada.


### Seguir Minha Localização {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu da trilha analisar no mapa 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menu da trilha analisar no mapa 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu da trilha analisar no mapa](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Menu da trilha analisar no mapa ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Toque no botão [Minha Localização](../../map/interact-with-map.md#my-location-and-zoom) para sincronizar a visualização do mapa e o gráfico com sua localização.

- A **escala do gráfico** permanece a mesma, e as **informações da barra** são fixadas em 1/4 para o lado esquerdo.
- Conforme você se move, o **gráfico deslizará** da esquerda para a direita, exibindo informações à frente de sua trilha.
- Nenhum outro widget é exibido nesta tela.
- Este recurso é útil para caminhadas e ciclismo enquanto você navega pela trilha.  


## Artigos Relacionados {#related-articles}

- [Aparência da trilha](./appearance.md)
- [Menu de Contexto da Trilha](./track-context-menu.md)
- [Navegar por trilha](../../navigation/setup/gpx-navigation.md)
- Artigo do blog [Rotas no mapa](https://docs.osmand.net/blog/routes)
- [Configurar mapa](../../map/configure-map-menu.md)  
- [Trilhas GPX](../../personal/tracks/index.md)  
- [Planejar rota](../../plan-route/index.md)  
- [Gravação de Viagem](../../plugins/trip-recording.md)

> *Última atualização: Novembro de 2024*