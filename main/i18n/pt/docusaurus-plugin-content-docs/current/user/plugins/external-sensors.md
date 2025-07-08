---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
sidebar_position: 5
title: Sensores Externos
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

:::info Recurso pago
O plugin Sensores Externos é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

O **plugin Sensores Externos** permite ler e gravar dados de [sensores externos sem fio](https://en.wikipedia.org/wiki/Wireless_sensor_network) que operam com tecnologias [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) e [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) e exibir esses dados usando [widgets](#widgets) no aplicativo OsmAnd. Essa rede gerenciada é capaz de coletar, transmitir e armazenar dados de sensores.

> *NOTA: iPhones e iPads não suportam ANT+ devido a limitações de hardware.*

O **plugin Sensores Externos** acessa sensores externos e pode ler dados como:

- *Frequência Cardíaca*
- *Potência da Bicicleta*
- *Cadência da Bicicleta*
- *Velocidade da Bicicleta*
- *Distância da Bicicleta*
- *Temperatura*

Para usar o plugin, certifique-se de que seu dispositivo seja [compatível](#pair-new-sensor), o plugin esteja [habilitado](../plugins/#enable--disable) e seus sensores externos estejam conectados via Bluetooth (BLE).


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para começar a usar dados de sensores externos, siga estas etapas:

1. [Compre](../purchases/) uma **assinatura OsmAnd Pro** para desbloquear o plugin Sensores Externos.
2. [Habilite](../plugins/#enable--disable) o plugin em *Menu → Plugins*.
3. **Ligue o Bluetooth** em seu dispositivo para permitir a conexão com **sensores BLE**.
4. [Emparelhe e configure](#pair-new-sensor) sensores externos através do menu do plugin.
5. (Opcional) [Adicione](#widgets) **widgets de Sensores Externos** à tela do seu mapa para exibir dados em tempo real, como frequência cardíaca, cadência ou nível da bateria.
6. (Opcional) Use o [plugin Gravação de Viagem](../plugins/trip-recording.md) para gravar dados do sensor em trilhas GPX.
7. (Opcional, apenas Android) Siga [estas dicas](https://www.thisisant.com/consumer/ant-101/ant-in-phones) para conectar sensores ANT+ se o seu dispositivo os suportar.


### Emparelhar Novo Sensor {#pair-new-sensor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Para emparelhar um novo sensor, siga estas etapas:

1. Certifique-se de que o **Bluetooth esteja habilitado** em seu dispositivo.
2. Vá para *Menu → Plugins → Sensores Externos → Configurações*.
3. Toque em **Emparelhar novo sensor**.
4. O OsmAnd irá procurar por sensores **Bluetooth LE** ou **ANT+** disponíveis (dependendo da sua plataforma).
5. Toque no botão **+** ao lado do sensor que deseja emparelhar.
6. Uma vez conectado, o sensor aparecerá na lista de **Dispositivos conectados**.

***Notas:***

- No **iOS**, apenas sensores **Bluetooth Low Energy (BLE)** são suportados devido a limitações de hardware. Sensores ANT+ não estão disponíveis.
- No **Android**, tanto sensores BLE quanto ANT+ podem ser suportados dependendo do seu dispositivo. Consulte o [guia de compatibilidade ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) para mais detalhes.
- Uma **notificação pop-up** aparecerá toda vez que um sensor conectar ou desconectar.
- **Sensores de potência de bicicleta** estão disponíveis apenas no Android via ANT+.


## Configurações do Sensor {#sensor-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Use um dos seguintes caminhos para abrir as configurações do sensor:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Dispositivo disponível → Configurações*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Dispositivo disponível → Configurações*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Use um dos seguintes caminhos para abrir as configurações do sensor:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Cada sensor externo emparelhado listado no OsmAnd tem sua própria tela de configuração com as seguintes opções:

- **Conectar / Desconectar** – alternar o estado da conexão.
- **Renomear** – atribuir um nome personalizado ao sensor.
- **Esquecer sensor** – remover o sensor da lista (pode ser reemparelhado posteriormente).
- **Configurações** – abrir a tela de detalhes do sensor (tipo de sensor, valores, nível da bateria, configuração da circunferência da roda).

***Notas:***

- No **iOS**, você pode exibir o **nível da bateria** de sensores BLE conectados diretamente em um [widget](#widgets) do mapa. Para habilitar isso, vá para: *Menu → Configurar tela → Escolher painel → Adicionar widget → Sensor externo → Configurações → Mostrar → Nível da bateria*
- Uma notificação pop-up aparece quando o nível da bateria de um sensor emparelhado **cai abaixo de 15%**.


## Gravação de Viagem {#trip-recording}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png) ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Para gravar dados do sensor usando o [plugin Gravação de Viagem](../plugins/trip-recording.md#recording-settings) durante sua viagem:

1. Certifique-se de que o **plugin Sensores Externos** esteja habilitado.
2. Vá para *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Selecione os tipos de sensor que deseja gravar (por exemplo, cadência, frequência cardíaca, velocidade).
4. Comece a gravar sua viagem. O OsmAnd salvará os dados do sensor selecionados na trilha GPX.

***Notas:***

- A lista de tipos de sensor disponíveis é mostrada mesmo que nenhum sensor esteja conectado.
- Se nenhum sensor estiver emparelhado ainda, use o botão [Emparelhar novo sensor](#pair-new-sensor) nas configurações dos plugins.
- Os dados de nível da bateria **não** são gravados em arquivos GPX e não estão disponíveis para análise no mapa.

:::note Compatibilidade de formato
O OsmAnd usa [gravação de trilha](../plugins/trip-recording.md#recorded-gpx-file) para incorporar dados de sensores em arquivos GPX. Este formato é compatível com muitos aplicativos de esportes e treinamento (por exemplo, Strava, Runkeeper).
:::


### Análise de Dados {#data-analyze}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Após gravar sua viagem usando o [plugin Gravação de Viagem](../plugins/trip-recording.md#recording-settings), você pode revisar os dados do sensor na interface de análise de trilhas.

Para analisar dados:

1. Conclua a gravação da sua viagem.
2. Abra a trilha gravada em *Meus Lugares → Trilhas* ou toque na trilha no mapa.
3. Selecione *Opções → Analisar no mapa* no menu de contexto da trilha.

Isso exibirá gráficos para seus dados gravados: *Frequência cardíaca*, *Velocidade*, *Cadência*, *Potência da bicicleta* e *Temperatura*.

> *Nível da bateria e Distância não estão disponíveis no recurso [Analisar no mapa](../map/tracks/index.md#analyze-track-on-map).*


## Widgets {#widgets}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png) ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png) ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

O [widget Sensores Externos](../widgets/info-widgets.md#external-sensors-widgets) permite exibir dados ao vivo de seus sensores conectados diretamente na tela do mapa.

Antes de iniciar sua viagem:

- Certifique-se de que o plugin Sensores Externos esteja habilitado.
- Abra *Configurar tela* e adicione os widgets necessários ao painel apropriado.

Tipos de widget suportados:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – exibe a frequência cardíaca em tempo real de um monitor emparelhado.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*apenas Android*) – mostra a potência de pedalada atual em watts.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – mostra o número de revoluções do pedal por minuto.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – velocidade atual da bicicleta.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – distância total medida pelo sensor.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – temperatura ambiente atual.
7. **Nível da bateria** (*apenas iOS*) – porcentagem de bateria restante em um sensor BLE conectado.


### Configurações do Widget {#widget-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → Adicionar widget → <Translate android="true" ids="external_sensor_widgets"/> → Escolha um widget → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → Adicionar widget → Sensor externo → Escolha um widget → Configurações*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Por padrão, o widget mostra o primeiro sensor conectado atualmente desse tipo. Se você quiser usar um sensor específico, toque em **Fonte de dados** e escolha na lista de sensores conectados.

No **iOS**, você pode escolher qual valor exibir no widget:

- **Dados do sensor** (por exemplo, cadência, velocidade).
- **Nível da bateria** – porcentagem da bateria em tempo real do sensor selecionado.

> *Isso é útil quando você deseja monitorar a carga da bateria durante viagens longas para evitar desconexões.*


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última atualização: maio de 2025*