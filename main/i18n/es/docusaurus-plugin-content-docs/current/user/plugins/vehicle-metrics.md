---
source-hash: 3285f0c719a8255c35a044a6bccdc05206d01216a9c0d4f8c30f58b3a9122f36
sidebar_position: 16
title: Métricas del Vehículo
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


<InfoIncompleteArticle/>

<InfoAndroidOnly/>

## Generalidades {#overview}

:::info Función de pago
El complemento Métricas del Vehículo es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

El **complemento Métricas del Vehículo** permite la monitorización de datos del vehículo en tiempo real a través del protocolo OBD-II. Los usuarios pueden rastrear métricas esenciales como el rendimiento del motor, la eficiencia del combustible y la velocidad, lo que permite un mantenimiento proactivo del vehículo y la resolución de problemas.

Los escáneres OBD-II son parte integral de los diagnósticos automotrices modernos. Con la transmisión de datos en tiempo real, los usuarios obtienen información instantánea sobre los sistemas del vehículo, lo que facilita el mantenimiento preventivo y reduce los costos de reparación. Estas herramientas son vitales tanto para uso personal como para servicios automotrices profesionales.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configuración OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## Parámetros de Configuración Requeridos {#required-setup-parameters}

Para usar datos de un escáner OBD-II:

1. [Compre](../purchases/) una **suscripción a OsmAnd Pro**. (*Velocidad del vehículo* y *Velocidad del motor* son gratuitas).
2. [Habilite](../plugins/index.md#enable--disable) el complemento Métricas del Vehículo en la sección Complementos del *Menú Principal*.
3. **Active** Bluetooth en su dispositivo.
4. [Conecte](#pair-odb-ii-scanner) el escáner OBD-II al puerto de su vehículo.
5. [Configure](#scanner-settings) la **configuración del escáner**.
6. [Agregue](#widgets) **widgets de Métricas del Vehículo** para datos en pantalla (opcional).
7. [Use](#trip-recording) el **complemento Grabación de Viajes** para registrar datos del vehículo.


### Emparejar Escáner ODB-II {#pair-odb-ii-scanner}

| | |
|--|--|
|![Conexión OBD](@site/static/img/plugins/obd/obd_connect.png)|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

Conecte el escáner al puerto de su vehículo y emparéjelo a través de la aplicación:

- Navegue a *Menú → Complementos → Métricas del Vehículo → Configuración → Conectar* o **+**.
- Si Métricas del Vehículo está en el *Menú Principal*: *Menú → Métricas del Vehículo → Configuración → Conectar* o **+**.

Elija su dispositivo OBD-II de la lista y establezca la conexión.


## Configuración del Escáner {#scanner-settings}

**Android.** Vaya a: *Menú → Complementos → Métricas del Vehículo → OBD → menú de tres puntos*

| | |
|--|--|
|![Configuración OBD](@site/static/img/plugins/obd/obd_settings.png)|![Configuración OBD](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Conectar / Desconectar**. Establece o termina la conexión con el sensor OBD-II.
- **Configuración**. Abre la pantalla de configuración OBD-II, permitiendo la gestión de la conexión y el acceso a los parámetros disponibles del vehículo.
- **Renombrar**. Le permite asignar un nombre personalizado al sensor para una identificación más fácil.
- **Olvidar**. Elimina el sensor OBD-II previamente emparejado de la lista, requiriendo un nuevo emparejamiento si es necesario más tarde.


## Lista de Métricas {#metrics-list}

Las métricas se clasifican para mayor claridad. Las herramientas de diagnóstico avanzadas permiten el mantenimiento preventivo al interpretar estos parámetros:

*Temperatura:*

- **Temperatura de Admisión**. Muestra la temperatura del aire que entra al colector de admisión.
- **Temperatura Ambiente**. Monitorea las condiciones externas.
- **Temperatura del Refrigerante**. Rastrea la eficiencia de enfriamiento del motor.
- **Temperatura del Aceite del Motor**. Muestra el estado del aceite durante el funcionamiento.

*Motor:*

- **Velocidad del Motor**. Monitorea las revoluciones por minuto (RPM) del motor.
- **Tiempo de Funcionamiento del Motor**. Rastrea el tiempo de funcionamiento del motor.
- **Carga Calculada del Motor**. Indica el porcentaje de carga de trabajo del motor.

*Combustible:*

- **Presión del Combustible**. Indica la presión del sistema de combustible.
- **Consumo de Combustible**. Calcula el consumo de combustible del vehículo.
- **Combustible Restante**. Indica el nivel de combustible en el vehículo.

*Otros:*

- **Nivel de Batería**. Indica el nivel de voltaje de la batería del vehículo.
- **Velocidad del Vehículo**. Muestra los datos del Sensor de Velocidad del Vehículo (VSS).
- **Posición del Acelerador**. Determina la entrada de aire del motor a través del ángulo de la placa del acelerador.
  **VIN**. Muestra el número de identificación de 17 caracteres del vehículo.


## Grabación de Viajes {#trip-recording}

**Android**. Vaya a: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Grabación OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Grabación OBD](@site/static/img/plugins/obd/obd_recording_1.png)|

Para incluir datos OBD-II en un archivo GPX, debe seleccionar los parámetros deseados para la grabación utilizando el [complemento Grabación de Viajes](../plugins/trip-recording.md#recording-settings). Esto le permite analizar las métricas del vehículo junto con los datos de su viaje.

#### Etiquetas {#tags}

OsmAnd aplica nombres de etiquetas personalizados para las métricas del vehículo en el [archivo GPX](../plugins/trip-recording.md#recorded-gpx-file). Por ejemplo:

- `vm_eotemp`: Temperatura del Aceite del Motor.
- `vm_fpress`: Presión del Combustible.
- `vm_espeed`: Velocidad del Motor.

Estas etiquetas facilitan la identificación y utilización de datos específicos del vehículo al revisar el archivo GPX grabado.


## Widgets {#widgets}

**Android.** Vaya a: *Menú → Configurar pantalla → Widgets → Elegir un panel → Métricas del Vehículo*

| | |
|--|--|
|![Configuración OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Configuración OBD](@site/static/img/plugins/obd/obd_widget.png)|

Los [widgets de Métricas del Vehículo](../widgets/info-widgets.md#vehicle-metrics-widgets) se incluyen automáticamente al habilitar el complemento. Si no son visibles, puede agregarlos manualmente a través del menú [Configurar Pantalla](../widgets/configure-screen.md).

### Configuración de Widgets {#widget-settings}

Los widgets muestran datos clave de su dispositivo OBD-II conectado en tiempo real, como velocidad, métricas del motor y consumo de combustible. Asegúrese de que sean visibles antes de comenzar su viaje para rastrear las métricas sin problemas.

Algunos widgets ofrecen opciones de modo de visualización:

- **Instantáneo**. Muestra datos en tiempo real para la métrica seleccionada.
- **Promedio**. Muestra valores promediados durante un intervalo de tiempo configurable (de 15 segundos a 60 minutos).


## Artículos Relacionados {#related-articles}

- [Interactuar con el Mapa](../../user/map/interact-with-map.md)
- [Configuración Global](../../user/personal/global-settings.md)
- [Mapas Vectoriales (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última actualización: Diciembre de 2024*