---
source-hash: 76bfae8b6346115687fd1268df49ae83691792da2e5ef2e1b6a05d4692239228
sidebar_position: 16
title:  Métricas del vehículo
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


## Resumen {#overview}

:::info Función de pago
El plugin Métricas del vehículo es una [función de pago](../purchases/index.md) de la aplicación OsmAnd. La información sobre la velocidad del vehículo y la velocidad del motor está disponible de forma gratuita en OsmAnd.
:::

El **plugin Métricas del vehículo** permite la monitorización de datos del vehículo en tiempo real a través del [protocolo OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Los usuarios pueden rastrear métricas esenciales como el rendimiento del motor, la eficiencia del combustible y la velocidad, lo que permite un mantenimiento proactivo del vehículo y la resolución de problemas.  

Los [escáneres OBD-II](https://en.wikipedia.org/wiki/ELM327) son parte integral del diagnóstico automotriz moderno. Con la transmisión de datos en tiempo real, los usuarios obtienen información instantánea sobre los sistemas del vehículo, lo que facilita el mantenimiento preventivo y reduce los costos de reparación. Estas herramientas son vitales tanto para uso personal como para servicios automotrices profesionales.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para usar los datos de un escáner OBD-II:

1. [Compre](../purchases/) una **suscripción a OsmAnd Pro**. (*Velocidad del vehículo* y *Velocidad del motor* son gratuitos.)  
2. [Active](../plugins/index.md#enable--disable) el plugin Métricas del vehículo en la sección Plugins del *Menú principal*.
3. **Active** el Bluetooth en su dispositivo.
4. [Conecte](#pair-odb-ii-scanner) el escáner OBD-II al puerto de su vehículo.
5. [Configure](#scanner-settings) los **ajustes del escáner**.
6. [Añada](#widgets) **widgets de Métricas del vehículo** para datos en pantalla (opcional).
7. [Use](#trip-recording) el **plugin de Grabación de viaje** para registrar los datos del vehículo.


### Emparejar escáner ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![Conexión OBD](@site/static/img/plugins/obd/obd_connect.png)|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![Conexión OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Conecte el escáner al puerto de su vehículo y emparéjelo a través de la aplicación:

- Navegue a *Menú → Plugins → Métricas del vehículo → Ajustes → Conectar* o **+**.
- Si Métricas del vehículo está en el *Menú principal*:  *Menú → Métricas del vehículo → Ajustes → Conectar* o **+**.

Elija su dispositivo OBD-II de la lista y establezca la conexión.


## Ajustes del escáner {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Vaya a: *Menú → Plugins → Métricas del vehículo → OBD → menú de tres puntos*

|  |  |
|--|--|
|![Ajustes OBD](@site/static/img/plugins/obd/obd_settings.png)|![Ajustes OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vaya a: *Menú → Plugins → Métricas del vehículo → OBD → menú de tres puntos*

|  |  |
|--|--|
|![Ajustes OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![Ajustes OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Conectar / Desconectar**. Establece o termina la conexión con el sensor OBD-II.
- **Ajustes**. Abre la pantalla de ajustes de OBD-II, permitiendo la gestión de la conexión y el acceso a los parámetros disponibles del vehículo.
- **Renombrar**. Le permite asignar un nombre personalizado al sensor para una identificación más fácil.
- **Olvidar**. Elimina el sensor OBD-II previamente emparejado de la lista, requiriendo un nuevo emparejamiento si se necesita más tarde.

**Comportamiento de reconexión** *(solo Android)***:** OsmAnd intenta automáticamente reconectarse al adaptador OBD-II cuando se inicia la aplicación, cuando se inicia la navegación o cuando se lanza Android Auto. Si no hay conexión disponible, los widgets de Métricas del vehículo muestran “–”. Un solo toque en cualquier widget de Métricas del vehículo intentará reconectarse al sensor. Si el sensor ya está conectado, el toque cambia los modos de visualización del widget como de costumbre.


## Lista de métricas {#metrics-list}

Las métricas están categorizadas para mayor claridad. Las herramientas de diagnóstico avanzadas permiten el mantenimiento preventivo al interpretar estos parámetros:

*Temperatura:*

- **Temperatura de admisión**. Muestra la temperatura del aire que entra en el colector de admisión.
- **Temperatura ambiente**. Monitorea las condiciones externas.
- **Temperatura del refrigerante**. Rastrea la eficiencia de enfriamiento del motor.
- **Temperatura del aceite del motor**. Muestra la condición del aceite durante la operación.

*Motor:*

- **Velocidad del motor**. Monitorea las revoluciones por minuto (RPM) del motor.
- **Tiempo de funcionamiento del motor**. Rastrea el tiempo de operación del motor.
- **Carga calculada del motor**. Indica el porcentaje de carga de trabajo del motor.

*Combustible:*

- **Presión de combustible**. Indica la presión del sistema de combustible.
- **Consumo de combustible**. Calcula el consumo de combustible del vehículo.
- **Combustible restante**. Indica el nivel de combustible en el vehículo.

*Otros:*

- **Nivel de batería**. Indica el nivel de voltaje de la batería del vehículo.
- **Voltaje del adaptador**. Muestra el voltaje suministrado al adaptador OBD-II (comando AT RV).
- **Velocidad del vehículo**. Muestra los datos del Sensor de Velocidad del Vehículo (VSS).
- **Posición del acelerador**. Determina la entrada de aire del motor a través del ángulo de la placa del acelerador.  
  **VIN**. Muestra el número de identificación de 17 caracteres del vehículo.


## Grabación de viaje {#trip-recording}


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



Para incluir datos OBD-II en un archivo GPX, necesita seleccionar los parámetros deseados para la grabación usando el [plugin de Grabación de viaje](../plugins/trip-recording.md#recording-settings). Esto le permite analizar las métricas del vehículo junto con los datos de su viaje.

### Etiquetas {#tags}

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
|![Ajustes OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Ajustes OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Vaya a: *Menú → Configurar pantalla → Widgets → Elegir un panel → Métricas del vehículo*

| | |
|--|--|
|![Ajustes OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![Ajustes OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



Los [widgets de Métricas del vehículo](../widgets/info-widgets.md#vehicle-metrics-widgets) se incluyen automáticamente cuando activa el plugin. Si no están visibles, puede añadirlos manualmente a través del menú [Configurar pantalla](../widgets/configure-screen.md).

### Ajustes de widget {#widget-settings}

Los widgets muestran datos clave de su dispositivo OBD-II conectado en tiempo real, como la velocidad, las métricas del motor y el consumo de combustible. Asegúrese de que estén visibles antes de comenzar su viaje para rastrear las métricas sin problemas.

Algunos widgets ofrecen opciones de modo de visualización:

- **Instantáneo**. Muestra datos en tiempo real para la métrica seleccionada.
- **Promedio**. Muestra valores promediados durante un intervalo de tiempo configurable (de 15 segundos a 60 minutos).

Varios widgets, incluido *Consumo de combustible*, adaptan sus unidades mostradas y formatos de métricas regionales en función de los [Ajustes del perfil](https://osmand.net/docs/user/personal/profiles#units--formats). Cuando se usan unidades de volumen distintas a los litros, el Consumo de combustible admite mostrar valores como Millas por galón (MPG). El tipo exacto de MPG depende de la unidad de volumen seleccionada:

- Galones estadounidenses → MPG (EE. UU.)
- Galones imperiales → MPG (Reino Unido)

El widget selecciona automáticamente el formato adecuado según las unidades de <Translate android="true" ids="routing_attr_length_name"/> y <Translate android="true" ids="shared_string_volume"/> en el perfil activo, y su modo de visualización elegido se conserva al exportar e importar perfiles.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)