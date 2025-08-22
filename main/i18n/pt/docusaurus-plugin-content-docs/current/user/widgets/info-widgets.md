---
source-hash: 27b32890625cf93a03c736a3e9e5b69340ef24cbdda764258f58f7265e15c755
sidebar_position: 3
title: Widgets Informativos
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

Os widgets informativos fornecem acesso rápido a dados importantes. Isso pode ser dados sobre velocidade, clima, posição de estacionamento, dados de sensores externos e muito mais. Os widgets podem ser configurados de acordo com suas necessidades específicas, permitindo sua visibilidade na tela do aplicativo ou desativando-os, se necessário.

![Widgets informativos](@site/static/img/widgets/informational_widgets_all.png)

## Widgets de Altitude {#altitude-widgets}

Os widgets de altitude exibem a altura acima do nível do mar da geolocalização atual e a elevação do centro do mapa.

### Altitude: Localização Atual {#altitude-current-location}

:::note Baixar correção de altitude mundial
Em alguns dispositivos Android, a altitude pode ser exibida de forma imprecisa. Para resolver esse problema, baixe um mapa com correção de altitude.

- Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Para mais detalhes, visite [Mapas e Recursos](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de altitude Android](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de altitude iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Configurações → Perfis de aplicativo → Configurações gerais → Unidades e formatos → Unidades de comprimento* |

### Elevação: Centro do Mapa {#elevation-map-center}

:::info Recurso pago
&nbsp;<ProFeature/> Para ter acesso ao widget *Elevação: centro do mapa*, assine o OsmAnd Pro para [Android](../purchases/android.md#pro-features) ou [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de elevação Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de elevação iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Você pode usar o widget para descobrir a elevação do centro do mapa atual acima do nível do mar. Um [Mapa de terreno (Relevo e Inclinação)](../plugins/topography.md#download-maps) da área necessária é necessário para exibir informações no **Widget de elevação: centro do mapa**.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Configurações → Perfis de aplicativo → Configurações gerais → Unidades e formatos → Unidades de comprimento* |

## Hora Atual {#current-time}

![Widget de hora atual](@site/static/img/widgets/current_time_widget.png)

Este widget exibe a hora atual obtida do seu dispositivo.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | As configurações do dispositivo configuram Hora e Formato. |

## Velocidade Atual {#current-speed}

![Widget de velocidade](@site/static/img/widgets/current_speed_widget.png)

O widget mostra a velocidade atual detectada pelo sensor GPS.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |

## Velocidade Média {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de velocidade média Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de velocidade média iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

O widget **Velocidade Média** calcula e exibe sua velocidade média em um intervalo de tempo selecionado sem a necessidade de navegação ou gravação de trilha. É útil para monitorar a conformidade da velocidade em rodovias ou rastrear a velocidade média nos últimos minutos de ciclismo.

1. ***Configurando o widget.***
   Para ajustar as configurações, toque no botão **Configurações** (*Android*) ou no **campo do widget** (*iOS*). As opções disponíveis incluem:

2. ***Intervalo de tempo.***

   - A velocidade média é calculada com base no intervalo de tempo selecionado, que pode variar de **15 segundos a 60 minutos**.

   - O cálculo é baseado em dados de GPS usando a fórmula:
   `Velocidade Média = MÉDIA(GPS_LOCATION.velocidade)`.

3. ***Considerar paradas.***

   **Ativado** — Se a velocidade registrada for inferior a 1 unidade por hora, ela é ignorada, evitando quedas desnecessárias na velocidade média ao parar em semáforos ou fazer pequenas pausas.

   **Desativado** — As paradas são incluídas no cálculo, o que significa que longas pausas reduzirão a velocidade média geral.

4. ***Redefinir velocidade média.***
   Você pode redefinir o cálculo da velocidade média de duas maneiras:

   - Toque longo no widget para abrir o [Menu de contexto](../widgets/configure-screen.md#widget-context-menu) e selecione *Redefinir velocidade média*.
   - Abra as *configurações do widget* através do [Menu Configurar Tela](../widgets/configure-screen.md#settings) e selecione a opção de redefinição.

Após a redefinição, a velocidade média é recalculada a partir dos novos dados de GPS. Este recurso é útil para monitoramento de velocidade em tempo real, como rastrear a velocidade em áreas com **câmeras de fiscalização de velocidade média**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocidade média](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de velocidade média](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Widgets de velocidade média](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu). <br/> Pode ser usado para redefinir a velocidade média. |

## Razão de Planeio {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets na tela|
|:--------|:---------|
|![Razão de planeio](@site/static/img/widgets/glide_ratio_3.png)|![Razão de planeio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets na tela|
|:--------|:---------|
|![Razão de planeio](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Razão de planeio](@site/static/img/widgets/glide_ratio_widget_ios.png)|

</TabItem>

</Tabs>

O widget [simples](../widgets/configure-screen.md#widgets-for-all-panels) *Razão de Planeio* fornece informações valiosas sobre a razão de planeio para ajudar a tomar decisões informadas ao planejar rotas aéreas. O widget *Razão de Planeio* no OsmAnd ajuda você a avaliar a eficiência de sua descida ou subida ao navegar para um local específico (posição do [marcador](../personal/markers.md) no mapa). Ele calcula a razão de planeio como a razão entre a distância e a diferença de altitude entre sua posição atual e seu destino pretendido. Você pode ler mais sobre isso [aqui](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).

**Uso dos widgets:**

- *Planejamento de voos de planador.* Para pilotos de planador, o widget *Razão de planeio para o alvo* torna-se uma ferramenta indispensável ao planejar e executar voos de planador. Os pilotos podem estimar a distância que podem voar até o alvo dadas as condições atuais e a razão de planeio necessária.
- *Otimizar subidas e descidas.* A razão de planeio média permite que os pilotos otimizem subidas e descidas com base nas condições atuais. Os pilotos podem escolher o momento ideal para subidas para maximizar o tempo de voo, ou para descidas para atingir um ponto alvo.
- *Reagindo a condições variáveis.* O widget fornece atualizações contínuas da razão de planeio, permitindo que os pilotos reajam instantaneamente a mudanças nas condições atmosféricas ou rotas. Eles podem ajustar seu plano de voo para garantir segurança e eficiência.
- *Uso máximo da distância horizontal.* Conhecer a razão de planeio permite que os pilotos maximizem o uso da distância horizontal para se moverem até o alvo, o que é especialmente importante ao planejar voos longos.
- *Redução de risco*. O widget *Razão de planeio para o alvo* ajuda os pilotos a evitar situações em que atingir o alvo se torna impossível devido à razão de planeio insuficiente. Isso ajuda a reduzir riscos e melhorar a segurança do voo.

**Valores Positivos e Negativos:**

- **Valores positivos** indicam que seu destino está em uma altitude mais baixa do que sua posição atual, exigindo descida.
- **Valores negativos** indicam que seu destino está em uma altitude mais alta, necessitando de subida. Por exemplo, "-90:1" significa que, após percorrer uma distância de 90 quilômetros, você precisa subir 1 quilômetro para chegar ao seu destino.

**Arredondamento/Formatação:**

- Valor **≤ 0.1**:
  - "0.05" é exibido como "0".
- Valor **> 0.1 e < 100**:
  - por exemplo, "50.7643" é exibido como "50.8:1".
- Valor **> 100:**
  - "102.35" é exibido como "102:1."

### Razão de Planeio para o Alvo {#glide-ratio-to-target}

- **Razão de planeio para o alvo** mostra a razão de planeio exata necessária para atingir o ponto alvo.
- **Elevação do alvo** mostra a elevação do ponto alvo. O [marcador de mapa](../personal/markers.md) deve ser usado como ponto alvo.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → Razão de planeio* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → Razão de planeio* |
| Ao tocar | Altera *Razão de planeio para o alvo* ou *Elevação do alvo* |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Razão de Planeio Média {#average-glide-ratio}

- **Razão de planeio média** mostra a razão de planeio média para um intervalo de tempo especificado.
- **Velocidade vertical média** indica a taxa na qual um objeto sobe ou desce ao longo do tempo. Apenas os pontos inicial e final do intervalo de tempo são considerados para avaliação. Você pode definir o intervalo de tempo para este widget de 15 segundos a 60 minutos. Você deve usar o [marcador de mapa](../personal/markers.md) como ponto alvo.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → Razão de planeio* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → Razão de planeio* |
| Ao tocar | Altera *Razão de planeio média* ou *Velocidade vertical média* |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

## Nível da Bateria {#battery-level}

![Widget de nível da bateria](@site/static/img/widgets/battery_level_widget.png)

O widget **Nível da Bateria** exibe a porcentagem da bateria do seu dispositivo diretamente na tela do mapa e atualiza automaticamente pelo menos uma vez por minuto.

- **iOS 17 e posterior** — Devido a **restrições de privacidade**, os dados de nível da bateria estão disponíveis apenas em incrementos de 5% (por exemplo, 35%, 60% ou 85%). Esta é uma limitação do sistema imposta pela Apple.

- Dispositivos **Android** — O widget exibe a porcentagem exata da bateria conforme relatado pelo sistema, sem arredondamento.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_battery"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

## Widget de Coordenadas {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de coordenadas Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

O OsmAnd oferece dois tipos de widgets de coordenadas:

- **Coordenadas: centro do mapa** - mostra as coordenadas geográficas do centro do mapa atual.
- **Coordenadas: localização atual** - mostra as coordenadas geográficas da geolocalização atual.

Os widgets de coordenadas são exibidos na parte superior da tela. Ícones com fundo verde mostram a latitude e longitude do ponto no centro da parte visível do mapa, e aqueles com fundo azul mostram as coordenadas da sua localização atual. Informações sobre os *formatos de coordenadas* suportados podem ser encontradas no artigo *[Pesquisar coordenadas](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Ao tocar | Copia as coordenadas para a área de transferência. |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) ou <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |

## Informações do GPS {#gps-info}

<InfoAndroidOnly />

![Widget de informações do GPS Android](@site/static/img/widgets/gps_info_widget.png)

O widget de informações do GPS (Sistema de Posicionamento Global) mostra o número de satélites que o dispositivo está detectando e usando atualmente. Você pode usá-lo para verificar o status do GPS em caso de sinal fraco.

Você pode redefinir o cache de GPS atual através de:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_gps_info"/>* |
| Ao tocar | Abre o menu de status do GPS com ferramentas de terceiros para configurar o dispositivo GPS integrado. |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

## Posição do Sol {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de pôr do sol e nascer do sol](@site/static/img/widgets/sun_position.png) ![Widgets de pôr do sol e nascer do sol](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de pôr do sol e nascer do sol](@site/static/img/widgets/sun_position_4_ios.png) ![Widgets de pôr do sol e nascer do sol](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

Os widgets de posição do sol mostram os próximos horários de nascer e pôr do sol para o centro do mapa. Ao serem tocados, eles exibem o tempo restante até o pôr do sol ou nascer do sol esperado. Em ambos os casos, o tempo é baseado na hora configurada do seu dispositivo.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Ao tocar | Alterna entre o tempo restante e a hora do próximo nascer/pôr do sol. |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

## Régua de Raio {#radius-ruler}

:::note
Você pode ler uma descrição mais detalhada aqui: **[Régua de raio e Régua](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tela da régua de raio](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Régua de raio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Régua de raio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Régua de raio"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

O widget Régua de Raio mostra a distância entre sua localização e o ponto central da Régua de Raio. O raio do primeiro círculo é igual à [escala do mapa](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Ao tocar | Altera o estado do widget entre os modos de escala preta, tons de cinza e invisível. |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

## Velocímetro {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocímetro](@site/static/img/widgets/speedometer_1_andr.png) ![Velocímetro](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Velocímetro](@site/static/img/widgets/speedometer_1_ios.png) ![Velocímetro](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

O **widget Velocímetro** é uma exibição gráfica da velocidade atual do veículo com base em *dados recebidos do GPS*. Ele permite que você monitore em tempo real a conformidade entre sua velocidade e o limite de velocidade permitido. O limite de velocidade permitido é fornecido pelos [dados do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) para um determinado trecho da estrada e pela configuração de [Tolerância de Limite de Velocidade](../navigation/guidance/voice-navigation.md#speed-limit) do OsmAnd.

- Nas *configurações do velocímetro*, você pode selecionar o tamanho (**Altura**) do widget na tela do aplicativo como *Pequeno*, *Médio* ou *Grande*.
- Você pode especificar quando receber um **Aviso de limite de velocidade**, selecionando *Sempre* ou *Quando excedido*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Velocímetro"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Velocímetro"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Velocímetro* |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |

## Widgets de Plugin {#plugin-widgets}

Esses widgets são ativados e funcionam em combinação com seus respectivos plugins.

### Widgets de Gravação de Viagem {#trip-recording-widgets}

:::note
Você pode ler uma descrição mais detalhada aqui: **[Plugin <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![widget_de_gravação_de_viagem](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widget_de_gravação_de_viagem](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Os widgets de gravação de viagem se referem ao [plugin <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Você pode usar os widgets para visualizar informações breves sobre a gravação da trilha na tela. Como *Distância*, *Duração*, *Subida* e *Descida*.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| Ao tocar | Inicia/Para a gravação da trilha ou Visualiza o gráfico. |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Widgets de Sensores Externos {#external-sensors-widgets}

:::note
Para adicionar widgets de Sensores Externos à tela do mapa, ative o plugin [Sensores Externos](../plugins/external-sensors.md) do OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de sensor externo Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![widget_de_gravação_de_viagem](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Os widgets se referem ao [plugin de Sensores Externos](../plugins/external-sensors.md#widgets). Você pode usá-los para visualizar informações breves de seus sensores externos, como: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*somente Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** e **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *No iOS*, você também pode selecionar o **nível da bateria** dos sensores BLE conectados para ser exibido diretamente no widget.

- Para adicionar o widget — [ative](../plugins/index.md#enable--disable) o plugin Sensores Externos do OsmAnd.

- Para adicionar sensores, selecione uma das opções:
  - Vá para *Menu → Plugins → Sensores Externos → Configurações → Emparelhar novo sensor*.
  - Vá para *Menu → Configurar tela → Escolha um painel → Adicionar widget → Sensores Externos → Escolha o sensor → Configurações → Emparelhar novo sensor*.

- Adicione widgets mesmo que nenhum sensor externo esteja conectado.

- **Todos os widgets adicionados são visíveis** mesmo que nenhum sensor externo esteja conectado.

- Use o [plugin de Gravação de Viagem](../plugins/trip-recording.md#recording-settings) para gravar dados do sensor.

- Leia sobre como escolher qual sensor (do mesmo tipo) exibir no widget [aqui](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Ao tocar | Nenhuma alteração (*Android*) / Alterna o modo entre dados do sensor e nível da bateria (*iOS*). |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Widgets de Métricas do Veículo {#vehicle-metrics-widgets}

:::note
Para adicionar Widgets de Métricas do Veículo à tela do mapa, ative o plugin [Métricas do Veículo](../plugins/vehicle-metrics.md) do OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de métricas do veículo Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de métricas do veículo Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>

Os widgets pertencem ao [plugin Métricas do Veículo](../plugins/vehicle-metrics.md#widgets). Você pode usá-los para visualizar informações de um scanner OBD-II conectado, como (*13 métricas*): **Temperatura de Admissão**, &nbsp;**Temperatura Ambiente**, &nbsp;**Temperatura do Líquido de Arrefecimento**, &nbsp;**Temperatura do Óleo do Motor**, &nbsp;**Rotação do Motor** (*gratuito*), &nbsp;**Tempo de Funcionamento do Motor**, &nbsp;**Carga Calculada do Motor**, &nbsp;**Pressão do Combustível**, &nbsp;**Consumo de Combustível**, &nbsp;**Combustível Restante**, &nbsp;**Nível da Bateria**, &nbsp;**Velocidade do Veículo** (*gratuito*), e **Posição do Acelerador**.

- Para adicionar widgets de métricas do veículo à tela do mapa, [ative](../plugins/index.md#enable--disable) o **plugin Métricas do Veículo**.
- Você pode adicionar widgets mesmo que nenhum scanner OBD-II esteja conectado.
- Todos os widgets adicionados são visíveis, independentemente de um scanner OBD-II estar conectado ou não.
- Para editar um widget, toque no widget adicionado ao painel e, em seguida, toque em *Configurações*, ou toque diretamente no *ícone de Configurações* no campo do widget.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="obd_widget_group"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="obd_plugin_name"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Widgets de Clima {#weather-widgets}

:::note
Para adicionar widgets de Clima à tela do mapa, ative o plugin [Clima](../plugins/weather.md) do OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de clima Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de clima iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

Os widgets de clima exibem informações meteorológicas atuais para um ponto central no mapa. Eles são ativados automaticamente na tela quando visualizados com o plugin (*Menu → Clima*), e você pode escolher quais colocar na tela inicial para uso diário (*Menu → Personalizar Tela*). Você pode ler mais sobre isso no artigo [Plugin de Clima](../plugins/weather.md).

- **Temperatura**. <Translate android="true" ids="temperature_widget_desc"/>
- **Pressão do Ar**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Vento**. <Translate android="true" ids="wind_widget_desc"/>
- **Nuvens**. <Translate android="true" ids="clouds_widget_desc"/>
- **Precipitação**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="shared_string_weather"/>* |
| Ao tocar | Mostra em uma caixa de diálogo pop-up a data e a hora em que as informações meteorológicas são relevantes. |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Plugins → Clima → Configurações* ou *Menu → Configurações → Perfil do Aplicativo → Clima* |

### Widget de Estacionamento {#parking-widget}

:::note
Para adicionar widgets de Estacionamento à tela do mapa, ative o plugin [Posição de estacionamento](../plugins/parking.md) do OsmAnd.
:::

![Widget de estacionamento](@site/static/img/plugins/parking/parking_widget.png)

O widget do plugin de Estacionamento mostra a distância do centro da tela até o local de estacionamento. Para definir um local de estacionamento no mapa, amplie para o nível necessário e, em seguida, toque e segure no local do mapa para abrir o menu de contexto. Siga [estas configurações](../plugins/parking.md#set-a-spot).

**Nota:** O Widget de Estacionamento só aparecerá se uma posição de estacionamento tiver sido adicionada ao mapa. Sem uma posição de estacionamento salva, o widget não será visível.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="parking_place"/>* |
| Ao tocar | Move a visualização do mapa para a posição de estacionamento. |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

### Widget Mapillary {#mapillary-widget}

:::note
Para adicionar o widget Mapillary à tela do mapa, ative o plugin [Mapillary](../plugins/mapillary.md) do OsmAnd.
:::

![Widget Mapillary](@site/static/img/widgets/mapillary_widget.png)

Este é um widget do plugin Mapillary que fornece acesso rápido ao aplicativo Mapillary, que permite adicionar [*imagens em nível de rua*](../plugins/mapillary.md#enable-layer). O widget é adicionado ao mapa automaticamente quando o plugin é ativado.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="mapillary"/>* |
| Ao tocar | Abre o aplicativo [Mapillary](https://www.mapillary.com/). |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Widget de Notas de Áudio/Vídeo {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Para adicionar widgets de Notas de Áudio/Vídeo à tela do mapa, ative o plugin [Notas de Áudio/Vídeo](../plugins/audio-video-notes.md) do OsmAnd.
:::

![Widget de notas de áudio-vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Estes são widgets do plugin de notas de áudio/vídeo que fornecem acesso rápido para iniciar/parar a gravação de notas de áudio, vídeo ou fotos.

Você pode configurar qual ação é selecionada por padrão:

- *Sob demanda*. Estado padrão. A caixa de diálogo de seleção de ação é exibida sempre.
- *Gravar áudio* - grava uma nota de áudio.
- *Gravar vídeo* - permite gravar um vídeo.
- *Tirar uma foto* - permite tirar uma foto.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_av_notes"/>* |
| Ao tocar | Inicia / para a gravação de uma nota |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

### Widget Rastreador {#tracker-widget}

<InfoAndroidOnly />

:::note
Para adicionar o widget Rastreador à tela do mapa, ative o plugin [Rastreador](../plugins/osmand-tracker.md) do OsmAnd.
:::

Para que o plugin e o widget funcionem, você precisa instalar o [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) do Google Play ou outras fontes.

Este widget do plugin OsmAnd Tracker é usado para acessar rapidamente o aplicativo OsmAnd Tracker e compartilhar suas informações de localização com outros usuários. O aplicativo envia mensagens de *Localização ao Vivo* para bate-papos selecionados dentro de um determinado tempo, exibe uma lista de contatos e grupos e verifica os bate-papos em busca de mensagens com sua localização, que são então exibidas em um mapa no OsmAnd.

![Widget Rastreador](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="tracker_item"/>* |
| Ao tocar | Abre o aplicativo OsmAnd Online GPS Tracker. |

### Widgets de Desenvolvedor {#developer-widgets}

:::note
Para adicionar widgets de Desenvolvedor à tela do mapa, ative o plugin [Desenvolvimento do OsmAnd](../plugins/development.md).
:::

Os **widgets de desenvolvedor** fornecem informações sobre a [velocidade de renderização do mapa](../plugins/development.md#map-rendering-fps-widget) e os parâmetros de posição da câmera virtual, incluindo [nível de zoom](../plugins/development.md#zoom-level), [distância](../plugins/development.md#distance-to-target) ao centro do mapa, [elevação da câmera](../plugins/development.md#camera-elevation) e [ângulo de inclinação da câmera](../plugins/development.md#camera-tilt).

#### FPS de Renderização do Mapa {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget FPS Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

O [widget FPS de renderização do mapa](../plugins/development.md#map-rendering-fps-widget) exibe a velocidade de renderização do mapa e seus elementos, medida em quadros por segundo (FPS). Um valor de FPS mais alto indica uma renderização mais rápida e um desempenho visual mais suave.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

#### Widgets da Câmera {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de posição da câmera](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de posição da câmera 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

Os **widgets da câmera** permitem monitorar o alinhamento entre o mapa do OsmAnd e a superfície da Terra.

- [Inclinação da câmera](../plugins/development.md#camera-tilt). Exibe o ângulo de inclinação da câmera no modo de perspectiva. O valor padrão é 90° (sem inclinação).
- [Elevação da câmera](../plugins/development.md#camera-elevation). Indica a elevação da câmera acima do nível da superfície.
- [Nível de zoom](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distância da câmera ao alvo](../plugins/development.abolism#distance-to-target). Mede a distância entre a câmera e o local alvo no mapa.

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="developer_widgets"/>* |
| Ao tocar | Alterna entre os modos (*Nível de Zoom*) / Nenhuma alteração (*Outros*) |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

#### RAM Disponível {#available-ram}

<InfoAndroidOnly />

![Widgets de velocidade média](@site/static/img/widgets/available_RAM_2_andr.png)

O widget **RAM Disponível** é uma ferramenta para monitorar o uso da memória do seu dispositivo em relação ao OsmAnd. Ele fornece dados detalhados para ajudar a otimizar o desempenho do aplicativo.

- **RAM do Aplicativo Disponível.** Exibe a quantidade de RAM disponível para o OsmAnd usar sem causar problemas de desempenho.

- **Uso da RAM do Aplicativo** — Mostra o consumo atual de RAM pelo OsmAnd.

- **RAM Total do Aplicativo** — Indica a memória total alocada ao OsmAnd, incluindo a memória usada e disponível.

> **NOTA**. *A *RAM total disponível* pode variar dependendo dos processos em segundo plano e de outros aplicativos em execução no seu dispositivo. Esses valores são dinâmicos e oferecem uma maneira de rastrear e gerenciar o uso da memória para um desempenho consistente e eficiente do OsmAnd.*

| | |
|:------------|:------------|
| Ativar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="developer_widgets"/> → *RAM Disponível* |
| Ao tocar | Nenhuma alteração |
| Toque longo | Abre o [Menu de contexto do widget](../widgets/configure-screen.md#widget-context-menu) |

## Artigos Relacionados {#related-articles}

- [Configurar Tela](./configure-screen.md)
- [Botões do Mapa](./map-buttons.md)
- [Widgets de Navegação](./nav-widgets.md)
- [Régua de Raio e Régua](./radius-ruler.md)
- [Widgets de Marcadores](./markers.md)
- [Ação Rápida](./quick-action.md)

> *Última atualização: Abril de 2025*