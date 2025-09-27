---
source-hash: b19d759436fe929e58af9dc49b00bc63ab8876769325d48b55875835a8238e15
sidebar_position: 10
title: Desenvolvimento do OsmAnd
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

As funções de teste do aplicativo são coletadas no plugin de desenvolvimento do OsmAnd. Use-as por sua conta e risco.

O plugin de desenvolvimento do OsmAnd permite que você experimente novos recursos do aplicativo ou configure o OsmAnd para testes: simular rotas de navegação, verificar o desempenho de renderização da tela, etc. O plugin foi projetado para *desenvolvedores e usuários experientes* e não é necessário para o uso diário do aplicativo.


## Parâmetros de configuração necessários {#required-setup-parameters}

Para ativar recursos especiais para desenvolvedores e testadores:

1. [Ative](../plugins/index.md#enable--disable) o plugin de desenvolvimento do OsmAnd na seção Plugins do *Menu Principal*.
2. Faça as configurações necessárias no [menu de configurações](#plugin-settings) do plugin.
3. Ative os **widgets de desenvolvedor**, se necessário.


## Configurações do plugin {#plugin-settings}

:::info info
As configurações do plugin de desenvolvimento do OsmAnd são globais e se aplicam a todos os perfis.
:::

Use um dos seguintes caminhos para abrir as configurações do plugin:

- *Menu Principal → Plugins → Desenvolvimento do OsmAnd → Configurações*.
- *Menu Principal → [Configurações Globais](../personal/global-settings.md) → Perfil → Configurações do plugin de desenvolvimento do OsmAnd*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Desenvolvimento Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Configurações de Desenvolvimento 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Desenvolvimento iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

- **Usar formato raster [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) para relevo sombreado e inclinação** (*Android*). Carrega mapas raster de formato antigo.


### Solução de problemas {#troubleshotting}

- **Simular sua posição** (*Android* / *iOS*). [Simule](#gpx-track-simulation) a localização e o movimento usando uma trilha GPX.
- **Modo de economia de bateria** (*Android* / *iOS*). Esta configuração reduz [a taxa de atualização da tela](#map-rendering-fps-widget) em 20 quadros por segundo para ajudar a economizar bateria ao usar aplicativos.
- **Usar ícones de posição de localização 3D** (*iOS*). Permite selecionar um ícone 3D para o [ícone Minha Localização](../personal/profiles.md#my-location-appearance).
- **Simular dados OBD** (*Android*). Permite a simulação do uso do [scanner OBD](./vehicle-metrics.md).
- **Informações de depuração de desempenho** (*Android*). Exibe o desempenho de renderização e navegação.
- **Desativar camadas do mapa** (*Android*). Desativa todas as camadas do mapa sobre o mapa vetorial (requer reinício).
- **Buffer Logcat** (*Android*). Verifica e compartilha logs detalhados do aplicativo.
- **Mostrar notificação sobre tecla pressionada** (*Android*). Exibe uma mensagem sobre a tecla.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. O rumo é a direção da bússola da sua posição atual para o seu destino pretendido. Afeta a *[gravação de trilhas](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. A direção é a direção da bússola da sua posição atual em relação ao norte verdadeiro. Esta opção está ativada por padrão. Afeta a *[gravação de trilhas](../plugins/trip-recording.md)*.


### Teste de aplicativo {#application-testing}

:::caution Somente Android
:::

- **Simular primeira inicialização do aplicativo**. Define o sinalizador indicando a primeira inicialização do aplicativo, mantém todas as outras configurações inalteradas.
- **Testar avisos de voz**. Selecione uma voz e teste reproduzindo anúncios.
- **Barra de status transparente**. O mapa fica visível sob a barra de status.
- **Mostrar banner da versão gratuita**. Exibe o banner da versão gratuita mesmo na versão paga.
- **Mostrar informações de depuração**. Exibe informações gráficas sobre o posicionamento de cada texto no mapa.
- **Permitir exibição no topo**. Permite que os textos do mapa sejam exibidos uns sobre os outros.


### Algoritmos Internos {#internal-algorithms}

:::caution Somente Android
:::

- **Modo de segurança**. Executa o aplicativo em modo de segurança (mais lento).


### Configurações de memória {#memory-settings}

:::caution Somente Android
:::

- A opção **Memória alocada para roteamento** permite determinar a quantidade de memória alocada para o cálculo de rotas longas. Você pode usar esta opção se o [roteamento padrão A*](../navigation/guidance/navigation-settings.md#development-settings) estiver selecionado nas *Configurações de navegação*.

***Cálculo de rotas extralongas:***

- Maior alocação de memória pode afetar o desempenho de outros aplicativos.
- [Cálculo de rotas de 50 km para pedestres](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Informações e Estatísticas {#info-and-statistics}

:::caution Somente Android
:::

- **Memória alocada**. Exibe a memória do sistema alocada para o aplicativo OsmAnd.
- **Memória nativa total**. Exibe a quantidade total de memória nativa alocada para o aplicativo, incluindo memória proporcional.
- **Informações A-GPS**. Indica quando os dados A-GPS foram baixados pela última vez.
- **Informações dia/noite**. Indica os horários do nascer e pôr do sol de hoje.
- **Estatísticas de energia (média de 1 / 5 / 15 minutos)**. Exibe o nível da bateria por minuto (%) e o consumo médio de energia (mAh) em intervalos de 1, 5 e 15 minutos.
- **Estatísticas de renderização (média de 1 / 5 / 15 minutos)**. Mostra estatísticas de renderização, incluindo FPS nos últimos 1k quadros, CPU (blocos), CPU (tempo ocioso) e CPU (espera) médias em intervalos de 1, 5 e 15 minutos.

**Botão:**

- **Redefinir configurações do plugin para o padrão**. Redefine todas as configurações do plugin para seus valores padrão.

![Configurações de Desenvolvimento Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget FPS de Renderização do Mapa {#map-rendering-fps-widget}

:::info Importante
Os Widgets de desenvolvedor do OsmAnd podem ser adicionados à tela somente quando o plugin de desenvolvimento do OsmAnd estiver ativado.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget de desenvolvimento fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Widget de desenvolvimento fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget de desenvolvimento iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

O [Widget FPS](../widgets/info-widgets.md#map-rendering-fps) mostra a velocidade com que o mapa e os elementos do mapa são exibidos e atualizados. O valor numérico é indicado em quadros por segundo (FPS).


## Widgets de Posição da Câmera {#camera-position-widgets}

:::info Importante
Os Widgets de desenvolvedor do OsmAnd podem ser adicionados à tela somente quando o plugin de desenvolvimento do OsmAnd estiver ativado.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Widgets de posição da câmera 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Widgets de posição da câmera 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Widgets de posição da câmera 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Widgets de posição da câmera 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Você pode usar os [widgets de posição da câmera](../widgets/info-widgets.md#camera-widgets) para dar ao mapa do OsmAnd uma aparência realista e combinar fotos da Terra tiradas de cima e do espaço.


### Inclinação da câmera {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de inclinação da câmera Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Widget de inclinação da câmera Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de inclinação da câmera iOS 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Widget de inclinação da câmera iOS 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

O widget de inclinação da câmera exibe a inclinação entre o vetor de visão central da câmera (visualizador) e um terreno plano imaginário da Terra. O valor padrão é 90 graus (sem inclinação).

:::note
A inclinação da câmera é alterada movendo a câmera (visualizador) enquanto o ponto central no mapa (que estamos olhando) permanece o mesmo. A distância até ele (na verdade, o zoom) não muda.
Ao mesmo tempo, devido ao movimento imaginário do visualizador, a distância da câmera até a superfície muda.
:::


### Elevação da Câmera {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de elevação da câmera Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Widget de elevação da câmera Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de elevação da câmera iOS 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Widget de elevação da câmera iOS 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

O widget de Elevação da Câmera mostra a elevação da câmera acima do nível da superfície. A elevação da câmera é indicada em metros / quilômetros.


### Nível de Zoom {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de nível de zoom Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Widget de nível de zoom Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de nível de zoom iOS 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Widget de nível de zoom iOS 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

O widget possui duas visualizações que são alternadas ao tocar nele:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Mostra o nível de zoom atual do mapa.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Mostra a proporção atual entre uma distância no mapa e a distância correspondente na Terra. Exemplos: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- O nível de zoom inicial (0) é o nível em que toda a superfície da Terra (o mapa completo) é exibida na tela, e seu tamanho é de 256 por 256 pixels.
- Cada próximo nível de zoom reduz a distância imaginária ao solo em cerca de 2 vezes.

:::

### Distância até o Alvo {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de distância até o alvo 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Widget de distância até o alvo 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de distância até o alvo 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Widget de distância até o alvo 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

O widget Distância da câmera ao alvo mostra a distância entre a câmera (visualizador) e o centro do mapa. Essa distância é exibida em metros / quilômetros.


### Comparação com Imagens de Satélite {#comparison-with-a-satellite-imagery}

![Comparação](@site/static/img/plugins/development/comparison.png)

Uma comparação do mapa do OsmAnd e da superfície da Terra revela os seguintes padrões:

- A distorção máxima é observada em grandes zooms (zoom 6-7 para inclinação da câmera de 90 graus).
- À medida que a inclinação da câmera diminui (de 90 para 10 graus), a distorção do mapa aumenta.
- As distorções começam a ser observadas mais cedo em altas latitudes.

A tabela abaixo contém informações sobre a inclinação da câmera e a distância até o alvo e o nível de zoom em que as distorções do mapa do OsmAnd se tornam visíveis. Se a câmera continuar a se afastar do alvo, a distorção observada do mapa do OsmAnd aumentará.

|Inclinação (90) |Latitude |Zoom Máx |Altura, km |Distorção|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Inclinação (60)** |**Latitude** |**Zoom Máx** |**Altura, km** |**Distorção**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Inclinação (45)** |**Latitude** |**Zoom Máx** |**Altura, km** |**Distorção**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Inclinação (20)** |**Latitude** |**Zoom Máx** |**Altura, km** |**Distorção**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Widget de RAM Disponível {#available-ram-widget}

Este widget foi projetado especificamente para você ao usar o OsmAnd para fornecer uma interação mais conveniente e informativa com a RAM disponível em seu dispositivo. Ele permite que você monitore de forma fácil e rápida a RAM disponível, o que é especialmente útil ao usar o OsmAnd para navegação. Leia mais sobre o widget no artigo [Widgets de informação](../widgets/info-widgets.md#available-ram).


## Simulação de Trilha GPX {#gpx-track-simulation}

O OsmAnd oferece a oportunidade de simular a localização e o movimento do seu dispositivo usando uma trilha GPX. Para esses fins, use a opção *<Translate android="true" ids="simulate_location_by_gpx"/>* nas [configurações](#plugin-settings) do plugin de desenvolvimento do OsmAnd:

- Toque em *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Selecione uma trilha para simular a localização e o movimento do dispositivo.
- Selecione a velocidade de simulação de movimento.
- Toque no botão Iniciar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Desenvolvimento Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Configurações de Desenvolvimento Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Desenvolvimento iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Configurações de Desenvolvimento iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Após executar a simulação, você verá na tela principal do aplicativo que a marca de navegação está se movendo de acordo com a trilha GPX. Toque no [botão minha localização](../map/interact-with-map.md#my-location-and-zoom) para sincronizar *Minha Localização* (geolocalização simulada do dispositivo) com o centro do mapa.
Para interromper a simulação do movimento do seu dispositivo, volte para as [configurações](#plugin-settings) de desenvolvimento do OsmAnd e toque em **parar** na opção **simular sua posição**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* também pode ser acessado através do **[Menu de ações rápidas](../widgets/quick-action.md#navigation)**.
- A velocidade de movimento da localização durante a simulação pode ser definida igual à velocidade registrada (1), ou mais rápida (x2, x3, x4).
- Você também pode simular o movimento ao longo de uma trilha GPX a partir do [menu de navegação](../navigation/setup/route-navigation.md#simulated-navigation) sem ativar o plugin de desenvolvimento do OsmAnd. Nesse caso, sua localização não será sincronizada com a trilha.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)