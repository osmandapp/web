---
source-hash: 7cce24b2cd87bfae38687f74d452a20648b7bb08c58e4e9a6b8489cb8398e2a2
sidebar_position: 16
title: Métricas del vehículo
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


## Descripción general {#overview}

:::info Función de pago
El complemento Métricas del vehículo es una [función de pago](../purchases/index.md) de la aplicación OsmAnd. La información de la velocidad del vehículo y la velocidad del motor está disponible de forma gratuita en OsmAnd.
:::

El **complemento Métricas del vehículo** permite la monitorización de datos del vehículo en tiempo real a través del [protocolo OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Los usuarios pueden rastrear métricas esenciales como el rendimiento del motor, la eficiencia del combustible y la velocidad, lo que permite un mantenimiento proactivo del vehículo y la resolución de problemas.

Los [escáneres OBD-II](https://en.wikipedia.org/wiki/ELM327) son parte integral del diagnóstico automotriz moderno. Con la transmisión de datos en tiempo real, los usuarios obtienen información instantánea sobre los sistemas del vehículo, lo que facilita el mantenimiento preventivo y reduce los costos de reparación. Estas herramientas son vitales tanto para uso personal como para servicios automotrices profesionales.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para usar datos de un escáner OBD-II:

1. [Compre](../purchases/) una **suscripción a OsmAnd Pro**. (*La velocidad del vehículo* y la *velocidad del motor* son gratuitas).
2. [Habilite](../plugins/index.md#enable--disable) el complemento Métricas del vehículo en la sección Complementos del *Menú principal*.
3. **Active** el Bluetooth en su dispositivo.
4. [Conecte](#pair-odb-ii-scanner) el escáner OBD-II al puerto de su vehículo.
5. [Configure](#scanner-settings) la **configuración del escáner**.
6. [Agregue](#widgets) **widgets de Métricas del vehículo** para datos en pantalla (opcional).
7. [Use](#trip-recording) el **complemento Grabación de viajes** para registrar datos del vehículo.


### Emparejar escáner ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
|--|--|
|![Conexión OBD](@site/static/img/plugins/obd/obd_connect.png)|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

| | |
|--|--|
|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Conecte el escáner al puerto de su vehículo y emparéjelo a través de la aplicación:

- Vaya a *Menú → Complementos → Métricas del vehículo → Configuración → Conectar* o **+**.
- Si Métricas del vehículo está en el *Menú principal*: *Menú → Métricas del vehículo → Configuración → Conectar* o **+**.

Elija su dispositivo OBD-II de la lista y establezca la conexión.


## Configuración del escáner {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vaya a: *Menú → Complementos → Métricas del vehículo → OBD → menú de tres puntos*

| | |
|--|--|
|![Configuración OBD](@site/static/img/plugins/obd/obd_settings.png)|![Configuración OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vaya a: *Menú → Complementos → Métricas del vehículo → OBD → menú de tres puntos*

| | |
|--|--|
|![Configuración OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![Configuración OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Conectar / Desconectar**. Establece o termina la conexión con el sensor OBD-II.
- **Configuración**. Abre la pantalla de configuración de OBD-II, lo que permite la gestión de la conexión y el acceso a los parámetros disponibles del vehículo.
- **Renombrar**. Le permite asignar un nombre personalizado al sensor para una identificación más fácil.
- **Olvidar**. Elimina el sensor OBD-II previamente emparejado de la lista, lo que requiere volver a emparejarlo si es necesario más tarde.


## Lista de métricas {#metrics-list}

Las métricas se clasifican para mayor claridad. Las herramientas de diagnóstico avanzadas permiten el mantenimiento preventivo al interpretar estos parámetros:

*Temperatura:*

- **Temperatura de admisión**. Muestra la temperatura del aire que entra en el colector de admisión.
- **Temperatura ambiente**. Monitorea las condiciones externas.
- **Temperatura del refrigerante**. Rastrea la eficiencia de enfriamiento del motor.
- **Temperatura del aceite del motor**. Muestra el estado del aceite durante el funcionamiento.

*Motor:*

- **Velocidad del motor**. Monitorea las revoluciones por minuto (RPM) del motor.
- **Tiempo de funcionamiento del motor**. Rastrea el tiempo de funcionamiento del motor.
- **Carga calculada del motor**. Indica el porcentaje de carga de trabajo del motor.

*Combustible:*

- **Presión de combustible**. Indica la presión del sistema de combustible.
- **Consumo de combustible**. Calcula el consumo de combustible del vehículo.
- **Combustible restante**. Indica el nivel de combustible en el vehículo.

*Otros:*

- **Nivel de batería**. Indica el nivel de voltaje de la batería del vehículo.
- **Velocidad del vehículo**. Muestra los datos del sensor de velocidad del vehículo (VSS).
- **Posición del acelerador**. Determina la entrada de aire del motor a través del ángulo de la placa del acelerador.
  **VIN**. Muestra el número de identificación de 17 caracteres del vehículo.


## Grabación de viajes {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Vaya a: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Grabación OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Grabación OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Vaya a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![Grabación OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![Grabación OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Para incluir datos OBD-II en un archivo GPX, debe seleccionar los parámetros deseados para la grabación utilizando el [complemento Grabación de viajes](../plugins/trip-recording.md#recording-settings). Esto le permite analizar las métricas del vehículo junto con los datos de su viaje.

#### Etiquetas {#tags}

OsmAnd aplica nombres de etiquetas personalizados para las métricas del vehículo en el [archivo GPX](../plugins/trip-recording.md#recorded-gpx-file). Por ejemplo:

- `vm_eotemp`: Temperatura del aceite del motor.
- `vm_fpress`: Presión de combustible.
- `vm_espeed`: Velocidad del motor.

Estas etiquetas facilitan la identificación y utilización de datos específicos del vehículo al revisar el archivo GPX grabado.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vaya a: *Menú → Configurar pantalla → Widgets → Elegir un panel → Métricas del vehículo*

| | |
|--|--|
|![Configuración OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Configuración OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vaya a: *Menú → Configurar pantalla → Widgets → Elegir un panel → Métricas del vehículo*

| | |
|--|--|
|![Configuración OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![Configuración OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



Los [widgets de Métricas del vehículo](../widgets/info-widgets.md#vehicle-metrics-widgets) se incluyen automáticamente cuando habilita el complemento. Si no están visibles, puede agregarlos manualmente a través del menú [Configurar pantalla](../widgets/configure-screen.md).

### Configuración de widgets {#widget-settings}

Los widgets muestran datos clave de su dispositivo OBD-II conectado en tiempo real, como la velocidad, las métricas del motor y el consumo de combustible. Asegúrese de que estén visibles antes de comenzar su viaje para rastrear las métricas sin problemas.

Algunos widgets ofrecen opciones de modo de visualización:

- **Instantáneo**. Muestra datos en tiempo real para la métrica seleccionada.
- **Promedio**. Muestra valores promediados durante un intervalo de tiempo configurable (de 15 segundos a 60 minutos).


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: agosto de 2025*