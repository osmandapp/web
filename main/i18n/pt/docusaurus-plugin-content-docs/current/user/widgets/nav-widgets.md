---
source-hash: cd4c07ca17073a532727f9088e038002b88141f8fe22166e5d1677766c6e8e03
sidebar_position: 4
title: Widgets de Navegação
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Visão geral {#overview}

Os widgets de navegação são ativados durante a navegação para exibir informações como distância, hora de chegada ou de partida, próximas curvas, rumo, nome da rua atual, informações de faixa, velocidade máxima, alertas de aproximação, POIs e pontos de passagem.

![Todos os widgets de navegação](@site/static/img/widgets/navigational_widgets_all.png)


## Navegação Ativa e Passiva {#active-and-passive-navigation}

Os widgets de navegação no OsmAnd são projetados para aprimorar os modos de navegação **ativa** e **passiva**. Esses widgets fornecem informações valiosas, como direções de rota, detalhes da estrada e limites de velocidade, dependendo do **perfil de navegação** selecionado.  

#### Navegação Ativa {#active-navigation}

- **Requisitos:**  
  - Definir um **destino**.  
  - Calcular a **rota** usando o recurso *Direções*.  
  - **Iniciar** a navegação (orientação por voz é opcional).
  - Disponível apenas ao longo da rota.

- **Widgets suportados:**  
  - Todos os **widgets de navegação** estão disponíveis.  

- **Principais benefícios:**  
  - Fornece **instruções curva a curva**, **orientação de faixa** e **ETA**.  
  - Garante atualizações precisas e dinâmicas durante a viagem.  

#### Navegação Passiva {#passive-navigation}

- **Como funciona:**  
  - Nenhum destino é necessário.  
  - Funciona automaticamente quando você seleciona um **perfil de navegação** (por exemplo, *Dirigir*, *Ciclismo*).  

- **Funcionalidade:**  
  - Tenta determinar a estrada que você está seguindo usando dados de GPS.  
  - Exibe **informações básicas da estrada**, como [nome da rua](#street-name), [informações de faixa](#lanes), [velocidade máxima](#speed-limit).

- **Limitações:**  
  - Alguns recursos avançados podem não funcionar corretamente sem um destino definido.  
  - As informações fornecidas podem nem sempre ser **precisas**, especialmente em redes rodoviárias complexas.

> **NOTA.** *Lembre-se de que o perfil **Navegar no Mapa** não suporta widgets de navegação em nenhum dos modos. Mude para um **perfil de navegação** relevante para habilitar esses recursos.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widget de Elevação {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/> Este widget você só pode usar com o recurso Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">assinantes do OsmAnd Pro</a>.

:::

O widget de Elevação mostra um gráfico com a elevação e a inclinação da sua rota de navegação e sua localização atual neste gráfico com altitude e inclinação atuais. O gráfico é plotado em dois eixos. O eixo X é a distância da sua rota. O eixo Y é a altitude, o valor depende do relevo, e a inclinação é exibida como uma porcentagem.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widget de Elevação](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interações com o Gráfico {#interactions-with-the-graph}

- *Aumentar/diminuir zoom*. Por padrão, o gráfico mostra a rota da localização atual até 10 km à frente. Você pode usar o [movimento de dois dedos](../map/interact-with-map.md#gestures) para aumentar e diminuir o zoom para uma visualização mais detalhada das mudanças de altitude em sua rota. Você também pode mover o gráfico para a direita, para frente na rota e para trás para a localização atual.  
- *Colocar um ponto no gráfico*. Se você quiser ver a altitude e o valor do grau em um ponto específico à frente em sua rota, você pode tocar em qualquer lugar do gráfico e um ponteiro com os valores aparecerá.  


#### O que há dentro {#whats-in}

Ao selecionar uma rota e pressionar o botão **Iniciar**, o mapa é aberto com sua localização atual, a rota e o widget na parte inferior da tela. O widget possui o gráfico e informações sobre *Subida*, *Descida*, *Inclinação*, distância, altitude e ângulo de inclinação. Você pode selecionar a *escala ideal* e ver todos os possíveis obstáculos em sua rota.  

- Todos os valores são indicados para toda a rota ou apenas para o intervalo selecionado, escalando o gráfico.
- Leia sobre a [licença para os dados DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) usados pelo OsmAnd para detecção de terreno.

|  |
|:------------|
| ***Pino de Localização*** |
| Sua ***Localização Atual*** no gráfico inclui um ícone de localização, elevação e valor percentual de inclinação. O lado direito do widget contém a elevação e o gradiente mais altos, o valor médio para eles e o valor mais baixo na seção selecionada da rota visível no gráfico. |
| ![ponto](@site/static/img/widgets/sch_1-1.png)|
| ***Informações adicionais*** |
| O lado direito do widget contém dados sobre a altitude e inclinação mais altas, o valor médio para ambos e a altitude e inclinação mais baixas na seção de rota selecionada visível no gráfico. |
|  ![dados](@site/static/img/widgets/sch_1-2.png)|
|Os valores de ***Subida*** e ***Descida*** são as somas das distâncias do seu ponto de localização até o final do gráfico visível. Se não houver um ponto de localização no gráfico, então é a soma de todo o gráfico visível na tela (isso pode acontecer quando você muda a escala e a localização sai do gráfico).|
| **Subida** – mostra a soma de todas as distâncias com altitude crescente do seu ponto de localização até o final do gráfico visível ou para a seção selecionada da rota sem o ponto de localização visível na tela. |
| ![esquema de subida](@site/static/img/widgets/sch_uphill_1.png) ![esquema de subida](@site/static/img/widgets/sch_uphill_2.png)|  
| **Descida** – mostra a soma de todas as distâncias com altitude decrescente do seu ponto de localização até o final do gráfico visível ou para a seção selecionada da rota sem o ponto de localização visível na tela.|
| ![esquema de descida](@site/static/img/widgets/sch_downhill_1.png) ![esquema de descida](@site/static/img/widgets/sch_downhill_2.png)|  
|***Inclinação*** é a razão do caminho para o horizontal, onde zero indica horizontalidade e o número de graus indica um grau de inclinação maior ou mais íngreme.|
| **Inclinação** – mostra a inclinação máxima da estrada em porcentagem do seu ponto de localização até o final do gráfico visível ou para a seção selecionada da rota sem o ponto de localização visível na tela. |
|![esquema de inclinação](@site/static/img/widgets/sch_grade_1.png) ![esquema de inclinação](@site/static/img/widgets/sch_grade_2.png)|


## Widget de Rumo   {#bearing-widget}
  
Rumo é a direção para um alvo fora do seu veículo, como um destino ou ponto de origem. Um rumo pode ser *Relativo* (de acordo com o seu curso) ou *Magnético* (de acordo com a bússola). Por exemplo, um rumo magnético de 180° é a direção para o sul, e um rumo relativo de 180° está diretamente atrás de você. Os pontos cardeais são as quatro direções principais da bússola. Eles são Norte (*N* - 0° ou 360°), Leste (*E* - 90°), Sul (*S* - 180°) e oeste (*W* - 270°).  

![Widget de gravação de viagem](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de gravação de viagem](@site/static/img/widgets/bearing_widget.png) ![Widget de gravação de viagem](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget de gravação de viagem](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Escolha um painel → Adicionar widget →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | **Android:** Você pode alterar o formato de exibição de dados para unidades angulares: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** Você pode alterar o formato de exibição de dados para unidades angulares: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Como funciona {#how-it-works}

Para exibir o rumo, um **ponto alvo** deve ser selecionado. Se um ponto de **destino** (ou o **primeiro ponto intermediário**, se houver) for selecionado para navegação, ele será usado como o ponto alvo. Caso contrário, o **marcador selecionado mais acima** será usado.  

- [Rumo relativo](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) é o ângulo entre a sua direção de movimento para frente e o ponto alvo. A **direção de movimento para frente** é a **direção do seu movimento** obtida dos sensores GPS ou, se você estiver parado, **para onde você apontou seu dispositivo** (ou seja, a orientação do seu dispositivo de acordo com sua bússola magnética). Exemplo: Um objeto com um rumo relativo de 0° está diretamente à sua frente e um objeto com um rumo relativo de 180° está diretamente atrás de você. O **rumo relativo** é o ângulo entre a sua direção para frente e o ponto alvo.

- [Rumo magnético](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) é o ângulo horário (horizontal) entre o norte magnético e o ponto alvo observado a partir da sua localização. Você precisa seguir este valor da bússola magnética para alcançar seu alvo. Exemplo: Se o **rumo magnético** for mostrado como 0° M, você precisa se mover estritamente em direção ao norte magnético para alcançar o ponto alvo.

- [Rumo verdadeiro](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) é expresso como o ângulo horizontal entre o meridiano geográfico e uma linha na Terra. Especificamente, o **rumo verdadeiro do ponto** é o ângulo medido em graus no sentido horário a partir da linha do Norte Verdadeiro. O software OsmAnd mostrará o rumo e a direção verdadeiros em nossa interface amigável, facilitando a tomada da decisão certa desde o início.

### Navegação ao longo da Linha de Rumo {#navigation-along-the-rhumb-line}

- **Rumo relativo**. Se você mantiver um rumo relativo de 0 graus e avançar, chegará ao ponto de destino, mas não pela rota mais curta ( [Linha de rumo](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Rumo magnético**. Se você alinhar a bússola em seu barco/veículo com o valor do widget e seguir em frente, chegará ao seu destino, mas não pela rota mais curta ( [Linha de rumo](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Pontos de Navegação {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

O grupo de widgets *Ponto de navegação* mostra a distância restante até o seu destino, o ponto intermediário, o tempo de chegada ao ponto intermediário ou o tempo de viagem para a rota calculada e o tempo estimado de chegada.

### Informações da Rota {#route-information}


![Widget de Destino](@site/static/img/widgets/route_information_widget.png)  

O widget *Informações da Rota* fornece dados em tempo real sobre a rota de navegação em andamento e uma maneira rápida [de gerenciar uma rota ativa](../navigation/setup/route-navigation.md#start--stop-navigation). Ele ajuda a acompanhar os principais detalhes da rota e permite que você pare ou retome a sessão de navegação atual com interação mínima.

**Informações exibidas:**

- **Tempo estimado de chegada (ETA)**. Mostra o tempo de chegada esperado ao destino final.
- **Tempo de viagem restante**. Exibe o tempo estimado restante para chegar ao destino.
- **Distância até o destino**. Indica a distância total restante até o destino final e as distâncias até os pontos intermediários.

**Menu de configurações**:

- Selecione uma **Visualização Padrão** para priorizar um dos seguintes valores: *Tempo estimado de chegada*, *Tempo para ir*, *Distância*.
- Em **Prioridade de Exibição**, selecione entre *Destino primeiro (padrão)* ou *Intermediário primeiro* para priorizar as informações de rota mais relevantes.

> NOTA: O widget é visível apenas durante a navegação.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Adicionar widget →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Adicionar widget  →Informações da rota* |
| Ao tocar | Toque no botão com a seta para abrir o [painel Iniciar/Parar Navegação](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distância até o Destino {#distance-to-destination}

![Widget de Destino](@site/static/img/widgets/destination_widget.png)  

O widget exibe a distância restante até o último ponto de destino ao seguir uma rota calculada.  

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Ao tocar | Move o mapa para o ponto de destino. |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Distância até o Intermediário {#distance-to-intermediate}

![Widget de destino intermediário](@site/static/img/widgets/intermediate_destination_widget.png)

O widget mostra a distância até o primeiro ponto intermediário ao longo da rota calculada. Após passar pelos pontos intermediários, o espaço será atualizado para o próximo ponto intermediário. Se não houver pontos intermediários, o widget não será exibido.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Ao tocar | **Um ponto intermediário** - move o mapa para o ponto intermediário. <br /> **Dois ou mais pontos intermediários** - abre o menu da lista de destinos. |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Tempo até o Intermediário {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget de tempo de chegada Tempo para ir](@site/static/img/widgets/arrival_time_widget_android.png)  ![Widget de tempo de chegada Tempo para ir](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget de tempo de chegada Tempo para ir](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Widget de tempo de chegada Tempo para ir](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

O widget mostra o *Tempo de chegada* ou *Tempo para ir* até o primeiro ponto intermediário. Durante a navegação, o tempo é constantemente atualizado, e assim que um ponto intermediário é passado, o tempo será atualizado para o próximo ponto de passagem. Por exemplo, se você parar a navegação, o *Tempo para ir* permanecerá inalterado e o *Tempo de chegada* será igual ao *Tempo para ir* mais o *Tempo atual*.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Ao tocar | Alterna entre *Tempo de chegada* e *Tempo para ir* e vice-versa. |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |


### Tempo até o Destino {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget de tempo de chegada intermediário](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget de tempo de chegada intermediário](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

O widget exibe o *Tempo de chegada* ou *Tempo para ir* até o último ponto de destino. O tempo é constantemente atualizado durante a navegação e é igual ao tempo da rota a partir da sua localização atual.  

| | |
|:------------|:------------|
| Habilitar |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Ao tocar | Alterna entre *Tempo de chegada* e *Tempo para ir* e vice-versa. |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |  


## Limite de Velocidade {#speed-limit}

![Widget de limite de velocidade](@site/static/img/widgets/speed_limit_widget_2.png)

O widget *Limite de Velocidade* exibe o limite de velocidade atual com base nos dados do mapa para sua rota.

- Os dados são obtidos do [projeto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- O widget funciona nos modos de navegação passiva e ativa.
- Se os dados de limite de velocidade não estiverem disponíveis para uma estrada ou área específica, *o widget não aparecerá*.

> NOTA: Certifique-se de que seus [mapas estejam atualizados](../personal/maps-resources.md#updates-menu) e que você tenha baixado todos os dados regionais necessários para acessar as informações mais recentes de limite de velocidade.

| |  |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |


## Orientação de Rota {#route-guidance}


![Widget de próximas curvas](@site/static/img/widgets/next_turns_widget.png)

Fornece orientação de rota em tempo real, incluindo distância até a próxima curva, nome da estrada, nome da rua atual e informações de faixa. Os widgets estão ativos durante a navegação.

Os widgets de *Orientação de Rota* contêm informações sobre:

- [Faixas](#lanes) - mostra a localização atual das faixas da estrada e destaca as que você deve dirigir. (apenas para _Painéis Superior / Inferior_)
- [Próxima curva](#next-turn) - a próxima curva com uma grande seta representando a manobra e com dados sobre a distância até ela.
- [Próxima curva (pequena)](#next-turn) - a próxima curva com uma pequena seta representando a manobra e com dados de distância ao lado da seta. (apenas para _Painéis Esquerdo / Direito_)
- [Segunda próxima curva](#next-turn) é a próxima curva após a primeira curva, que é ativada se estiver dentro da distância de aproximação.

| | |
|:------------|:------------|
| Habilitar      | **Android:** *Menu → Configurar tela →  Painel Esquerdo / Direito / Superior / Inferior → Orientação de Rota → Adicionar widget → Faixa, Próxima curva, Segunda próxima curva*  |
|      | **iOS:** *Menu → Configurar tela →  Painel Esquerdo / Direito / Superior / Inferior → Orientação de Rota → Adicionar widget → Faixa, Próxima curva, Segunda próxima curva*   |
| Ao tocar  | **Próxima curva**: Se os [avisos de voz](../navigation/guidance/voice-navigation.md) estiverem ativados, a próxima manobra e a distância até ela são pronunciadas. <br/> **Faixa**: Nenhuma alteração. |
| Toque longo    | **Próxima curva**: Abre o [menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Faixas**: Nenhuma alteração. |


### Próxima Curva {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![widget de orientação de rota](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![POIs/Favoritos de aproximação ios](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

Os widgets de navegação **Próxima curva**, **Próxima curva (pequena)**, **Segunda próxima curva** podem ser colocados em qualquer painel para conveniência do usuário. No entanto, as informações exibidas diferem dependendo do tipo de widget e de sua colocação. A tabela abaixo resume o comportamento:

|   Widget/Painel   | Painel esquerdo    | Painel direito   | Painel superior              | Painel inferior           |
| :--------------- | :------------ | :------------ | :--------------------- | :--------------------- |
| **Próxima curva**        | Apenas distância | Apenas distância | Nome da rua + distância | Nome da rua + distância |
| **Próxima curva (pequena)**| Apenas distância | Apenas distância | Não disponível          | Não disponível          |
| **Segunda próxima curva** | Apenas distância | Apenas distância | Nome da rua + distância | Nome da rua + distância |


### Avisos de Cores para a Próxima Curva {#color-prompts-for-next-turn}

Esta tabela mostra o tempo aproximado até que os avisos sejam ativados e a indicação de cor correspondente das setas para realizar a manobra. Para mais informações, consulte a [documentação técnica](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) ou o artigo [Avisos de voz](../navigation/guidance/voice-navigation.md).

| Cor     | ~ Tempo de ativação | Distância   | Tipo de aviso     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Verde  | 5 segundos      | Perto | Virar agora        |
| 🟡 Amarelo | 20 segundos     | Aproximando| Virar em `x` m   |
| ⚪ Cinza   | > 100 segundos  | Distante    | Preparar para virar |


### Faixas {#lanes}

![Widgets de faixas](@site/static/img/widgets/lanes_widget.png)

O widget **Faixas** destaca a faixa atual quando a navegação está ativa e exibe o layout da faixa para a estrada real quando a navegação é passiva. Um indicador de distância também é mostrado abaixo do diagrama da faixa, representando o quanto resta até a manobra onde a orientação da faixa se aplica. Este widget está disponível apenas para os painéis Superior e Inferior. Os dados são obtidos do [projeto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

### Avisos de Cores para Faixas {#color-prompts-for-lanes}

Exibe um widget pelas configurações de tempo de aproximação. A cor da faixa está associada aos [avisos de voz](../navigation/guidance/voice-navigation.md) e ao tempo restante para realizar a manobra.

| Cor     | ~ Tempo de ativação | Distância    | Tipo de aviso |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Verde  | 5 segundos      | Perto    | [Virar agora](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Amarelo | 20 segundos     | Aproximando | [Virar em X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |



## Widget de Alerta {#alert-widget}

![Widgets de informações de alerta](@site/static/img/widgets/alert_information_widget.png)

O **widget de Alerta** combina vários tipos de alertas que são exibidos no canto inferior esquerdo enquanto você está navegando.  

- Você tem a capacidade de ativar e desativar alertas como *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* e *<Translate android="true" ids="show_tunnels"/>*. Outros alertas estão ativos por padrão se o widget estiver habilitado.  

- Para o tipo de alerta *Limite de Velocidade*, você pode ajustar o valor de <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) nas configurações de aviso de voz para melhor corresponder à velocidade do veículo e à velocidade do GPS.  

- A maioria dos alertas é exibida na tela e anunciada por aviso de voz por 15 segundos, assim como o tempo de ativação para passar por um Ponto de Passagem, Ponto Favorito ou POI. Leia mais [aqui](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Habilitar | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Tipos de Alerta {#alert-types}

Os tipos de alerta têm um design visual diferente, que depende da **<Translate android="true" ids="driving_region"/>**  e pode ser configurado através de *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. O OsmAnd não visa representar 100% de sinais de trânsito idênticos, mas aponta algumas semelhanças.

| | | |
|:------------|:------------|:------------|
| Nome | Descrição | Ícone |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Acalmia de tráfego](https://en.wikipedia.org/wiki/Traffic_calming) usa design físico e outras medidas para melhorar a segurança de motoristas, pedestres e ciclistas. | ![Widgets de alertas de acalmia de tráfego](@site/static/img/widgets/warnings_traffic_calming.png)  ![Widgets de alertas de acalmia de tráfego us](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Uma passagem de pedestres](https://en.wikipedia.org/wiki/Pedestrian_crossing) (principalmente inglês britânico) ou faixa de pedestres é um local designado para pedestres atravessarem uma estrada, rua ou avenida. O OsmAnd mostra o alerta de passagem de pedestres não controlada.  | ![Widgets de alertas de acalmia de tráfego](@site/static/img/widgets/warnings_pedestrian.png)  ![Widgets de alertas de acalmia de tráfego us](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | Na maioria dos países, os [limites de velocidade rodoviários](https://en.wikipedia.org/wiki/Speed_limit) definem a velocidade máxima, média ou mínima legal em que os veículos rodoviários podem viajar em um determinado trecho da estrada. No OsmAnd, o alerta é mostrado quando você excede a velocidade. Você pode definir parâmetros de excesso de velocidade (0, 5, 10.. km/h). ![Widgets de alerta ex_speed](@site/static/img/widgets/ex_warning_speed.png)  | ![Widgets de alerta speed_limit](@site/static/img/widgets/warnings_limit.png) ![Widgets de alerta speed_limit_ca](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widgets de alerta speed_limit_us](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *