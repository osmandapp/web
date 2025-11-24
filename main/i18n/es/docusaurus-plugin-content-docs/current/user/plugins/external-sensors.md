---
source-hash: 98ef3def7d982e4b280e3c2f1201d4c80b83ec88f33f9ec1799e20750ea2d497
sidebar_position: 5
title:  Sensores Externos
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
El plugin Sensores Externos es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.  
:::

El **plugin Sensores Externos** le permite leer y registrar datos de [sensores externos inalámbricos](https://en.wikipedia.org/wiki/Wireless_sensor_network) que funcionan con las tecnologías [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) y [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) y mostrar estos datos utilizando [widgets](#widgets) en la aplicación OsmAnd. Esta red gestionada es capaz de recopilar, transmitir y almacenar datos de los sensores.

> *NOTA: Los iPhones y iPads no son compatibles con ANT+ debido a limitaciones de hardware.*

El **plugin Sensores Externos** accede a sensores externos y puede leer datos como:

- *Frecuencia cardíaca*
- *Potencia de la bicicleta*
- *Cadencia de la bicicleta*
- *Velocidad de la bicicleta*
- *Distancia de la bicicleta*
- *Temperatura*

Para utilizar el plugin, asegúrese de que su dispositivo es [compatible](#pair-new-sensor), el plugin está [activado](../plugins/#enable--disable), y sus sensores externos están conectados a través de Bluetooth (BLE).


## Parámetros de configuración requeridos {#required-setup-parameters}

Para empezar a utilizar los datos de los sensores externos, siga estos pasos:

1. [Compre](../purchases/) una **suscripción a OsmAnd Pro** para desbloquear el plugin Sensores Externos.
2. [Active](../plugins/#enable--disable) el plugin en *Menú → Plugins*.
3. **Active el Bluetooth** en su dispositivo para permitir la conexión con **sensores BLE**.
4. [Empareje y configure](#pair-new-sensor) los sensores externos a través del menú del plugin.
5. (Opcional) [Añada](#widgets) **widgets de Sensores Externos** a la pantalla del mapa para mostrar datos en tiempo real como la frecuencia cardíaca, la cadencia o el nivel de batería.
6. (Opcional) Utilice el [plugin de Grabación de viaje](../plugins/trip-recording.md) para registrar los datos de los sensores en las rutas GPX.
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
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Para emparejar un nuevo sensor, siga estos pasos:

1. Asegúrese de que el **Bluetooth está activado** en su dispositivo.  
2. Vaya a *Menú → Plugins → Sensores Externos → Ajustes*.  
3. Pulse **Emparejar nuevo sensor**.
4. OsmAnd buscará los sensores **Bluetooth LE** o **ANT+** disponibles (dependiendo de su plataforma).
5. Pulse el botón **+** junto al sensor que desea emparejar.
6. Una vez conectado, el sensor aparecerá en la lista de **Dispositivos conectados**.

***Notas:***

- En **iOS**, solo se admiten sensores **Bluetooth Low Energy (BLE)** debido a limitaciones de hardware. Los sensores ANT+ no están disponibles.
- En **Android**, tanto los sensores BLE como los ANT+ pueden ser compatibles dependiendo de su dispositivo. Consulte la [guía de compatibilidad ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) para más detalles.
- Aparecerá una **notificación emergente** cada vez que un sensor se conecte o desconecte.
- Los **sensores de potencia de la bicicleta** solo están disponibles en Android a través de ANT+.


## Ajustes del sensor {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Utilice una de las siguientes rutas para abrir los ajustes del sensor:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Dispositivo disponible → Ajustes*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Dispositivo disponible → Ajustes*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Utilice una de las siguientes rutas para abrir los ajustes del sensor:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Cada sensor externo emparejado que aparece en OsmAnd tiene su propia pantalla de configuración con las siguientes opciones:

- **Conectar / Desconectar** – cambia el estado de la conexión.
- **Renombrar** – asigna un nombre personalizado al sensor.
- **Olvidar sensor** – elimina el sensor de la lista (se puede volver a emparejar más tarde).
- **Ajustes** – abre la pantalla de detalles del sensor (tipo de sensor, valores, nivel de batería, ajuste de la circunferencia de la rueda).

***Notas:***

- En **iOS**, puede mostrar el **nivel de batería** de los sensores BLE conectados directamente en un [widget](#widgets) del mapa. Para activarlo, vaya a: *Menú → Configurar pantalla → Elegir panel → Añadir widget → Sensor externo → Ajustes → Mostrar → Nivel de batería*
- Aparece una notificación emergente cuando el **nivel de batería de un sensor emparejado cae por debajo del 15%**.


## Grabación de viaje {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Para registrar los datos del sensor utilizando el [plugin de Grabación de viaje](../plugins/trip-recording.md#recording-settings) durante su viaje:

1. Asegúrese de que el **plugin Sensores Externos** está activado.
2. Vaya a *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Seleccione los tipos de sensores que desea registrar (por ejemplo, cadencia, frecuencia cardíaca, velocidad).
4. Comience a grabar su viaje. OsmAnd guardará los datos del sensor seleccionado en la ruta GPX.

***Notas:***

- La lista de tipos de sensores disponibles se muestra aunque no haya ningún sensor conectado.
- Si aún no hay sensores emparejados, utilice el botón [Emparejar nuevo sensor](#pair-new-sensor) en los ajustes de los plugins.
- Los datos del nivel de batería **no** se graban en los archivos GPX y no están disponibles para su análisis en el mapa.

:::note Compatibilidad de formatos
OsmAnd utiliza la [grabación de rutas](../plugins/trip-recording.md#recorded-gpx-file) para incrustar datos de sensores en archivos GPX. Este formato es compatible con muchas aplicaciones de deportes y entrenamiento (por ejemplo, Strava, Runkeeper).
:::


### Analizar datos {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Después de grabar su viaje utilizando el [plugin de Grabación de viaje](../plugins/trip-recording.md#recording-settings), puede revisar los datos del sensor en la interfaz de análisis de la ruta.

Para analizar los datos:

1. Finalice la grabación de su viaje.
2. Abra la ruta grabada desde *Mis lugares → Rutas* o pulse la ruta en el mapa.
3. Seleccione *Opciones → Analizar en el mapa* en el menú contextual de la ruta.

Esto mostrará gráficos para sus datos grabados: *Frecuencia cardíaca*, *Velocidad*, *Cadencia*, *Potencia de la bicicleta* y *Temperatura*

> *El nivel de batería y la distancia no están disponibles en la función [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map).*


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

El [widget Sensores Externos](../widgets/info-widgets.md#external-sensors-widgets) le permite mostrar datos en vivo de sus sensores conectados directamente en la pantalla del mapa.

Antes de empezar su viaje:

- Asegúrese de que el plugin Sensores Externos está activado.
- Abra *Configurar pantalla* y añada los widgets necesarios al panel apropiado.

Tipos de widgets compatibles:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – muestra la frecuencia cardíaca en tiempo real de un monitor emparejado.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Solo Android*) – muestra la potencia de pedaleo actual en vatios.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – muestra el número de revoluciones del pedal por minuto.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – velocidad actual de ciclismo.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – distancia total medida por el sensor.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – temperatura ambiente actual.
7. **Nivel de batería** – porcentaje de batería restante en un sensor BLE conectado, actívelo en **Ajustes del sensor**.

**Nota:** Si un sensor se desconecta temporalmente, pulse su widget en el mapa para intentar reconectarlo inmediatamente; no es necesario abrir el menú de Sensores Externos.


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

Por defecto, el widget muestra el primer sensor de este tipo conectado actualmente. Si desea utilizar un sensor específico, pulse **Fuente de datos** y elija de la lista de sensores conectados.

En **iOS**, puede elegir qué valor mostrar en el widget:  

- **Datos del sensor** (p. ej., cadencia, velocidad).
- **Nivel de batería** – porcentaje de batería en tiempo real del sensor seleccionado.

> *Esto es útil cuando se quiere controlar la carga de la batería durante viajes largos para evitar desconexiones.*


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)