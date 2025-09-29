---
source-hash: 57927b3c43a20f50548e4b8bec88d2002f6b820f5bd6989ee75f742bb91ceb08
sidebar_position: 16
title: Métricas do Veículo
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
O plugin Métricas do Veículo é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd. As informações de velocidade do veículo e rotações do motor estão disponíveis gratuitamente no OsmAnd.
:::

O **plugin Métricas do Veículo** permite o monitoramento de dados do veículo em tempo real via [protocolo OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Os usuários podem rastrear métricas essenciais, como desempenho do motor, eficiência de combustível e velocidade, permitindo a manutenção proativa do veículo e a solução de problemas.

Os [scanners OBD-II](https://en.wikipedia.org/wiki/ELM327) são parte integrante do diagnóstico automotivo moderno. Com a transmissão de dados em tempo real, os usuários obtêm informações instantâneas sobre os sistemas do veículo, facilitando a manutenção preventiva e reduzindo os custos de reparo. Essas ferramentas são vitais tanto para uso pessoal quanto para serviços automotivos profissionais.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para usar dados de um scanner OBD-II:

1. [Adquira](../purchases/) uma **assinatura OsmAnd Pro**. (*Velocidade do veículo* e *Rotações do motor* são gratuitos.)
2. [Ative](../plugins/index.md#enable--disable) o plugin Métricas do Veículo na seção Plugins do *Menu Principal*.
3. **Ligue** o Bluetooth no seu dispositivo.
4. [Conecte](#pair-odb-ii-scanner) o scanner OBD-II à porta do seu veículo.
5. [Configure](#scanner-settings) as **configurações do scanner**.
6. [Adicione](#widgets) **widgets de Métricas do Veículo** para dados na tela (opcional).
7. [Use](#trip-recording) o **plugin Gravação de Viagem** para registrar dados do veículo.


### Emparelhar Scanner ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
|--|--|
|![Conexão OBD](@site/static/img/plugins/obd/obd_connect.png)|![Conexão OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

| | |
|--|--|
|![Conexão OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![Conexão OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Conecte o scanner à porta do seu veículo e emparelhe-o através do aplicativo:

- Navegue até *Menu → Plugins → Métricas do Veículo → Configurações → Conectar* ou **+**.
- Se Métricas do Veículo estiver no *Menu Principal*: *Menu → Métricas do Veículo → Configurações → Conectar* ou **+**.

Escolha seu dispositivo OBD-II na lista e estabeleça a conexão.


## Configurações do Scanner {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vá para: *Menu → Plugins → Métricas do Veículo → OBD → menu de três pontos*

| | |
|--|--|
|![Configurações OBD](@site/static/img/plugins/obd/obd_settings.png)|![Configurações OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vá para: *Menu → Plugins → Métricas do Veículo → OBD → menu de três pontos*

| | |
|--|--|
|![Configurações OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![Configurações OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Conectar / Desconectar**. Estabelece ou encerra a conexão com o sensor OBD-II.
- **Configurações**. Abre a tela de configurações do OBD-II, permitindo o gerenciamento da conexão e o acesso aos parâmetros disponíveis do veículo.
- **Renomear**. Permite atribuir um nome personalizado ao sensor para facilitar a identificação.
- **Esquecer**. Remove o sensor OBD-II emparelhado anteriormente da lista, exigindo um novo emparelhamento, se necessário posteriormente.


## Lista de Métricas {#metrics-list}

As métricas são categorizadas para maior clareza. Ferramentas de diagnóstico avançadas permitem a manutenção preventiva, interpretando esses parâmetros:

*Temperatura:*

- **Temperatura de Admissão**. Exibe a temperatura do ar que entra no coletor de admissão.
- **Temperatura Ambiente**. Monitora as condições externas.
- **Temperatura do Líquido de Arrefecimento**. Rastreia a eficiência do resfriamento do motor.
- **Temperatura do Óleo do Motor**. Exibe a condição do óleo durante a operação.

*Motor:*

- **Rotações do Motor**. Monitora as rotações por minuto (RPM) do motor.
- **Tempo de Funcionamento do Motor**. Rastreia o tempo de operação do motor.
- **Carga Calculada do Motor**. Indica a porcentagem de carga de trabalho do motor.

*Combustível:*

- **Pressão do Combustível**. Indica a pressão do sistema de combustível.
- **Consumo de Combustível**. Calcula o consumo de combustível do veículo.
- **Combustível Restante**. Indica o nível de combustível no veículo.

*Outros:*

- **Nível da Bateria**. Indica o nível de voltagem da bateria do veículo.
- **Velocidade do Veículo**. Exibe dados do Sensor de Velocidade do Veículo (VSS).
- **Posição do Acelerador**. Determina a entrada de ar do motor através do ângulo da borboleta.
- **VIN**. Exibe o número de identificação de 17 caracteres do veículo.


## Gravação de Viagem {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Vá para: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Gravação OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Gravação OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Vá para: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![Gravação OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![Gravação OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Para incluir dados OBD-II em um arquivo GPX, você precisa selecionar os parâmetros desejados para gravação usando o [plugin Gravação de Viagem](../plugins/trip-recording.md#recording-settings). Isso permite analisar as métricas do veículo junto com os dados da sua viagem.

### Tags {#tags}

O OsmAnd aplica nomes de tags personalizados para métricas do veículo no [arquivo GPX](../plugins/trip-recording.md#recorded-gpx-file). Por exemplo:

- `vm_eotemp`: Temperatura do Óleo do Motor.
- `vm_fpress`: Pressão do Combustível.
- `vm_espeed`: Rotações do Motor.

Essas tags facilitam a identificação e utilização de dados específicos do veículo ao revisar o arquivo GPX gravado.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vá para: *Menu → Configurar tela → Widgets → Escolher um painel → Métricas do Veículo*

| | |
|--|--|
|![Configurações OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Configurações OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vá para: *Menu → Configurar tela → Widgets → Escolher um painel → Métricas do Veículo*

| | |
|--|--|
|![Configurações OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![Configurações OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



Os [widgets de Métricas do Veículo](../widgets/info-widgets.md#vehicle-metrics-widgets) são incluídos automaticamente quando você ativa o plugin. Se eles não estiverem visíveis, você pode adicioná-los manualmente através do menu [Configurar Tela](../widgets/configure-screen.md).

### Configurações do Widget {#widget-settings}

Os widgets exibem dados chave do seu dispositivo OBD-II conectado em tempo real, como velocidade, métricas do motor e consumo de combustível. Certifique-se de que estejam visíveis antes de iniciar sua viagem para rastrear as métricas sem problemas.

Alguns widgets oferecem opções de modo de exibição:

- **Instantâneo**. Exibe dados em tempo real para a métrica selecionada.
- **Média**. Exibe valores médios em um intervalo de tempo configurável (15 segundos a 60 minutos).


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)