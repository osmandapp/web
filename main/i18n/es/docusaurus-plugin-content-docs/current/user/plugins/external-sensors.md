---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
sidebar_position: 5
title: Sensores externos
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

## Descripción general {#overview}

:::info Función de pago
El complemento Sensores externos es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

El **complemento Sensores externos** le permite leer y registrar datos de [sensores externos inalámbricos](https://en.wikipedia.org/wiki/Wireless_sensor_network) que funcionan con las tecnologías [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) y [BLE (Bluetooth de baja energía)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) y mostrar estos datos utilizando [widgets](#widgets) en la aplicación OsmAnd. Esta red gestionada es capaz de recopilar, transmitir y almacenar datos de sensores.

> *NOTA: Los iPhones y iPads no son compatibles con ANT+ debido a limitaciones de hardware.*

El **complemento Sensores externos** accede a los sensores externos y puede leer datos como:

- *Frecuencia cardíaca*
- *Potencia de la bicicleta*
- *Cadencia de la bicicleta*
- *Velocidad de la bicicleta*
- *Distancia de la bicicleta*
- *Temperatura*

Para usar el complemento, asegúrese de que su dispositivo sea [compatible](#pair-new-sensor), de que el complemento esté [habilitado](../plugins/#enable--disable) y de que sus sensores externos estén conectados a través de Bluetooth (BLE).

## Parámetros de configuración necesarios {#required-setup-parameters}

Para empezar a usar los datos de los sensores externos, siga estos pasos:

1. [Compre](../purchases/) una **suscripción a OsmAnd Pro** para desbloquear el complemento Sensores externos.
2. [Habilite](../plugins/#enable--disable) el complemento en *Menú → Complementos*.
3. **Active Bluetooth** en su dispositivo para permitir la conexión con **sensores BLE**.
4. [Empareje y configure](#pair-new-sensor) los sensores externos a través del menú del complemento.
5. (Opcional) [Agregue](#widgets) **widgets de Sensores externos** a la pantalla de su mapa para mostrar datos en tiempo real como la frecuencia cardíaca, la cadencia o el nivel de la batería.
6. (Opcional) Use el [complemento Grabación de viajes](../plugins/trip-recording.md) para registrar datos de sensores en pistas GPX.
7. (Opcional, solo Android) Siga [estos consejos](https://www.thisisant.com/consumer/ant-101/ant-in-phones) para conectar sensores ANT+ si su dispositivo los admite.

### Emparejar nuevo sensor {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

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

Para emparejar un nuevo sensor, siga estos pasos:

1. Asegúrese de que **Bluetooth esté habilitado** en su dispositivo.
2. Vaya a *Menú → Complementos → Sensores externos → Ajustes*.
3. Toque **Emparejar nuevo sensor**.
4. OsmAnd buscará los sensores **Bluetooth LE** o **ANT+** disponibles (según su plataforma).
5. Toque el botón **+** junto al sensor que desea emparejar.
6. Una vez conectado, el sensor aparecerá en la lista de **Dispositivos conectados**.

***Notas:***

- En **iOS**, solo se admiten sensores **Bluetooth de baja energía (BLE)** debido a limitaciones de hardware. Los sensores ANT+ no están disponibles.
- En **Android**, tanto los sensores BLE como los ANT+ pueden ser compatibles según su dispositivo. Consulte la [guía de compatibilidad con ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) para obtener más detalles.
- Aparecerá una **notificación emergente** cada vez que un sensor se conecte o desconecte.
- Los **sensores de potencia de bicicleta** solo están disponibles en Android a través de ANT+.

## Ajustes del sensor {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Use una de las siguientes rutas para abrir la configuración del sensor:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Dispositivo disponible → Ajustes*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Dispositivo disponible → Ajustes*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Use una de las siguientes rutas para abrir la configuración del sensor:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Cada sensor externo emparejado que aparece en OsmAnd tiene su propia pantalla de configuración con las siguientes opciones:

- **Conectar / Desconectar** – alternar el estado de la conexión.
- **Renombrar** – asignar un nombre personalizado al sensor.
- **Olvidar sensor** – eliminar el sensor de la lista (se puede volver a emparejar más tarde).
- **Ajustes** – abrir la pantalla de detalles del sensor (tipo de sensor, valores, nivel de batería, ajuste de la circunferencia de la rueda).

***Notas:***

- En **iOS**, puede mostrar el **nivel de batería** de los sensores BLE conectados directamente en un [widget](#widgets) del mapa. Para habilitar esto, vaya a: *Menú → Configurar pantalla → Elegir panel → Añadir widget → Sensor externo → Ajustes → Mostrar → Nivel de batería*
- Aparece una notificación emergente cuando el nivel de batería de un sensor emparejado **cae por debajo del 15%**.

## Grabación de viajes {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png) ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Para registrar datos de sensores usando el [complemento Grabación de viajes](../plugins/trip-recording.md#recording-settings) durante su viaje:

1. Asegúrese de que el **complemento Sensores externos** esté habilitado.
2. Vaya a *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Seleccione los tipos de sensor que desea registrar (por ejemplo, cadencia, frecuencia cardíaca, velocidad).
4. Comience a grabar su viaje. OsmAnd guardará los datos de los sensores seleccionados en la pista GPX.

***Notas:***

- La lista de tipos de sensores disponibles se muestra incluso si no hay sensores conectados.
- Si aún no hay sensores emparejados, use el botón [Emparejar nuevo sensor](#pair-new-sensor) en la configuración de los complementos.
- Los datos del nivel de batería **no** se registran en los archivos GPX y no están disponibles para su análisis en el mapa.

:::note Compatibilidad de formato
OsmAnd utiliza la [grabación de pistas](../plugins/trip-recording.md#recorded-gpx-file) para incrustar datos de sensores en archivos GPX. Este formato es compatible con muchas aplicaciones deportivas y de entrenamiento (por ejemplo, Strava, Runkeeper).
:::

### Análisis de datos {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Después de grabar su viaje usando el [complemento Grabación de viajes](../plugins/trip-recording.md#recording-settings), puede revisar los datos del sensor en la interfaz de análisis de pistas.

Para analizar datos:

1. Finalice la grabación de su viaje.
2. Abra la pista grabada desde *Mis lugares → Pistas* o toque la pista en el mapa.
3. Seleccione *Opciones → Analizar en el mapa* en el menú contextual de la pista.

Esto mostrará gráficos para sus datos registrados: *Frecuencia cardíaca*, *Velocidad*, *Cadencia*, *Potencia de la bicicleta* y *Temperatura*.

> *El nivel de batería y la distancia no están disponibles en la función [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map).*

## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png) ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png) ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

El [widget Sensores externos](../widgets/info-widgets.md#external-sensors-widgets) le permite mostrar datos en vivo de sus sensores conectados directamente en la pantalla del mapa.

Antes de comenzar su viaje:

- Asegúrese de que el complemento Sensores externos esté habilitado.
- Abra *Configurar pantalla* y agregue los widgets necesarios al panel apropiado.

Tipos de widgets compatibles:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – muestra la frecuencia cardíaca en tiempo real de un monitor emparejado.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Solo Android*) – muestra la potencia de pedaleo actual en vatios.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – muestra el número de revoluciones del pedal por minuto.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – velocidad actual de la bicicleta.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – distancia total medida por el sensor.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – temperatura ambiente actual.
7. **Nivel de batería** (*Solo iOS*) – porcentaje de batería restante en un sensor BLE conectado.

### Ajustes del widget {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="external_sensor_widgets"/> → Elegir un widget → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → Añadir widget → Sensor externo → Elegir un widget → Ajustes*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Por defecto, el widget muestra el primer sensor conectado de este tipo. Si desea utilizar un sensor específico, toque **Fuente de datos** y elija de la lista de sensores conectados.

En **iOS**, puede elegir qué valor mostrar en el widget:

- **Datos del sensor** (por ejemplo, cadencia, velocidad).
- **Nivel de batería** – porcentaje de batería en tiempo real del sensor seleccionado.

> *Esto es útil cuando desea controlar la carga de la batería durante viajes largos para evitar desconexiones.*

## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2025*