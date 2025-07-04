---
source-hash: 580c8fbd0c79564b0976cee07d1bc9d431e8f4533df5daa052bc1202ccd84564
sidebar_position: 10
title:  Desarrollo de OsmAnd
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




## Resumen {#overview}

Las funciones de prueba de la aplicación se recopilan en el complemento de desarrollo de OsmAnd. Úsalas bajo tu propio riesgo.

El complemento de desarrollo de OsmAnd te permite probar nuevas funciones de la aplicación o configurar OsmAnd para pruebas: simular rutas de navegación, verificar el rendimiento de la representación de la pantalla, etc. El complemento está diseñado para *desarrolladores y usuarios experimentados* y no es necesario para el uso diario de la aplicación.


## Parámetros de configuración requeridos {#required-setup-parameters}

Para activar funciones especiales para desarrolladores y probadores:

1. [Habilita](../plugins/index.md#enable--disable) el complemento de desarrollo de OsmAnd en la sección de Complementos del *Menú principal*.
2. Realiza las configuraciones necesarias en el [menú de Configuración](#plugin-settings) del complemento.
3. Habilita los **widgets de desarrollador** si es necesario.


## Configuración del complemento {#plugin-settings}

:::info info
La configuración del complemento de desarrollo de OsmAnd es global y se aplica a todos los perfiles.
:::

Utiliza una de las siguientes rutas para abrir la configuración del complemento:

- *Menú principal → Complementos → Desarrollo de OsmAnd → Configuración*.
- *Menú principal → [Configuración global](../personal/global-settings.md) → Perfil → Configuración del complemento de desarrollo de OsmAnd*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

- **Usar formato ráster [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) para sombreado y pendiente** (*Android*). Carga mapas ráster de formato antiguo.


### Solución de problemas {#troubleshotting}

- **Simular tu posición** (*Android* / *iOS*). [Simula](#gpx-track-simulation) la ubicación y el movimiento usando una pista GPX.
- **Modo de ahorro de batería** (*Android* / *iOS*). Esta configuración reduce [la frecuencia de actualización de la pantalla](#map-rendering-fps-widget) en 20 fotogramas por segundo para ayudar a ahorrar energía de la batería mientras se usan las aplicaciones.
- **Usar iconos de posición de ubicación 3D** (*iOS*). Te permite seleccionar un icono 3D para el [icono Mi ubicación](../personal/profiles.md#my-location-appearance).
- **Simular datos obd** (*Android*). Permite la simulación del uso del [escáner OBD](./vehicle-metrics.md).
- **Información de depuración de rendimiento** (*Android*). Muestra el rendimiento de renderizado y navegación.
- **Deshabilitar capas de mapa** (*Android*). Deshabilita todas las capas de mapa sobre el mapa vectorial (requiere reinicio).
- **Búfer de Logcat** (*Android*). Comprueba y comparte registros detallados de la aplicación.
- **Mostrar notificación sobre la tecla presionada** (*Android*). Muestra un mensaje sobre la tecla.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. El rumbo es la dirección de la brújula desde tu posición actual hasta tu destino previsto. Afecta la *[grabación de pistas](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. La dirección es la dirección de la brújula desde tu posición actual hacia el norte verdadero. Esta opción está habilitada por defecto. Afecta la *[grabación de pistas](../plugins/trip-recording.md)*.


### Pruebas de aplicación {#application-testing}

:::caution Solo Android
:::

- **Simular el primer inicio de la aplicación**. Establece la bandera que indica el primer inicio de la aplicación, mantiene todas las demás configuraciones sin cambios.
- **Probar indicaciones de voz**. Selecciona una voz y prueba reproduciendo anuncios.
- **Barra de estado transparente**. El mapa se vuelve visible debajo de la barra de estado.
- **Mostrar banner de versión gratuita**. Muestra el banner de versión gratuita incluso en la versión de pago.
- **Mostrar información de depuración**. Muestra información gráfica sobre la ubicación de cada texto en el mapa.
- **Permitir mostrar en la parte superior**. Permite que los textos del mapa se muestren uno encima del otro.


### Algoritmos internos {#internal-algorithms}

:::caution Solo Android
:::

- **Modo seguro**. Ejecuta la aplicación en modo seguro (más lento).


### Configuración de memoria {#memory-settings}

:::caution Solo Android
:::

- La opción **Memoria asignada para el enrutamiento** te permite determinar la cantidad de memoria asignada para calcular rutas largas. Puedes usar esta opción si el [enrutamiento estándar A*](../navigation/guidance/navigation-settings.md#development-settings) está seleccionado en la *Configuración de navegación*.

***Cálculo de rutas extralargas:***

- Una mayor asignación de memoria puede afectar el rendimiento de otras aplicaciones.
- [Cálculo de rutas de 50 km para peatones](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Información y estadísticas {#info-and-statistics}

:::caution Solo Android
:::

- **Memoria asignada**. Muestra la memoria del sistema asignada a la aplicación OsmAnd.
- **Memoria nativa total**. Muestra la cantidad total de memoria nativa asignada a la aplicación, incluida la memoria proporcional.
- **Información A-GPS**. Indica cuándo se descargaron por última vez los datos A-GPS.
- **Información día/noche**. Indica las horas de amanecer y atardecer de hoy.
- **Estadísticas de energía (promedio 1 / 5 / 15 minutos)**. Muestra el nivel de batería por minuto (%) y el consumo promedio de energía (mAh) en intervalos de 1, 5 y 15 minutos.
- **Estadísticas de renderizado (promedio 1 / 5 / 15 minutos)**. Muestra estadísticas de renderizado, incluyendo FPS en los últimos 1k fotogramas, CPU (mosaicos), CPU (tiempo de inactividad) y CPU (en espera) promedios en intervalos de 1, 5 y 15 minutos.

**Botón:**

- **Restablecer la configuración del complemento a los valores predeterminados**. Restablece todas las configuraciones del complemento a sus valores predeterminados.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget de FPS de renderizado de mapa {#map-rendering-fps-widget}

:::info Importante
Los widgets de desarrollador de OsmAnd solo se pueden agregar a la pantalla cuando el complemento de desarrollo de OsmAnd está habilitado.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

El [Widget FPS](../widgets/info-widgets.md#map-rendering-fps) muestra la velocidad a la que se muestran y actualizan el mapa y los elementos del mapa. El valor numérico se indica en fotogramas por segundo (FPS).


## Widgets de posición de cámara {#camera-position-widgets}

:::info Importante
Los widgets de desarrollador de OsmAnd solo se pueden agregar a la pantalla cuando el complemento de desarrollo de OsmAnd está habilitado.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Puedes usar los [widgets de posición de cámara](../widgets/info-widgets.md#camera-widgets) para darle al mapa de OsmAnd un aspecto realista y que coincida con las fotos de la Tierra tomadas tanto desde arriba como desde el espacio.


### Inclinación de la cámara {#camera-tilt}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

El widget de inclinación de la cámara muestra la inclinación entre el vector de vista central de la cámara (visor) y un suelo plano imaginario de la tierra. El valor predeterminado es 90 grados (sin inclinación).

:::note
La inclinación de la cámara se cambia moviendo la cámara (visor) mientras el punto central en el mapa (que estamos mirando) permanece igual. La distancia a este (de hecho, el zoom) no cambia.
Al mismo tiempo, debido al movimiento imaginario del visor, la distancia de la cámara a la superficie cambia.
:::


### Elevación de la cámara {#camera-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

El widget de Elevación de la cámara muestra la elevación de la cámara sobre el nivel de la superficie. La elevación de la cámara se indica en metros / kilómetros.


### Nivel de zoom {#zoom-level}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

El widget tiene dos vistas que se cambian al tocarlo:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Muestra el nivel de zoom actual del mapa.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Muestra la relación actual entre una distancia en un mapa y la distancia correspondiente en la tierra. Ejemplos: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- El nivel de zoom inicial (0) es el nivel en el que se muestra toda la superficie de la tierra (el mapa completo) en la pantalla, y su tamaño es de 256 por 256 píxeles.
- Cada nivel de zoom siguiente reduce la distancia imaginaria al suelo en aproximadamente 2 veces.

:::

### Distancia al objetivo {#distance-to-target}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

El widget de Distancia de la cámara al objetivo muestra la distancia entre la cámara (visor) y el centro del mapa. Esta distancia se muestra en metros / kilómetros.


### Comparación con una imagen satelital {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

Una comparación del mapa de OsmAnd y la superficie de la tierra revela los siguientes patrones:

- Se observa la máxima distorsión en zooms grandes (zoom 6-7 para una inclinación de cámara de 90 grados).
- A medida que disminuye la inclinación de la cámara (de 90 a 10 grados), aumenta la distorsión del mapa.
- Las distorsiones comienzan a observarse antes en latitudes altas.

La siguiente tabla contiene información sobre la inclinación de la cámara y la distancia al objetivo y el nivel de zoom en el que las distorsiones del mapa de OsmAnd se vuelven visibles. Si la cámara continúa alejándose del objetivo, la distorsión observada del mapa de OsmAnd aumentará.

|Inclinación (90) |Latitud |Zoom máximo |Altura, km |Distorsión|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Inclinación (60)** |**Latitud** |**Zoom máximo** |**Altura, km** |**Distorsión**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Inclinación (45)** |**Latitud** |**Zoom máximo** |**Altura, km** |**Distorsión**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Inclinación (20)** |**Latitud** |**Zoom máximo** |**Altura, km** |**Distorsión**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Widget de RAM disponible {#available-ram-widget}

Este widget está diseñado específicamente para ti al usar OsmAnd para proporcionar una interacción más conveniente e informativa con la RAM disponible en tu dispositivo. Te permite monitorear fácil y rápidamente la RAM disponible, lo cual es especialmente útil al usar OsmAnd para la navegación. Lee más sobre el widget en el artículo [Widgets de información](../widgets/info-widgets.md#available-ram).


## Simulación de pista GPX {#gpx-track-simulation}

OsmAnd ofrece la oportunidad de simular la ubicación y el movimiento de tu dispositivo utilizando una pista GPX. Para estos propósitos, utiliza la opción *<Translate android="true" ids="simulate_location_by_gpx"/>* en la [configuración](#plugin-settings) del complemento de desarrollo de OsmAnd:

- Toca *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Selecciona una pista para simular la ubicación y el movimiento del dispositivo.
- Selecciona la velocidad de simulación de movimiento.
- Toca el botón de inicio.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Después de ejecutar la simulación, verás en la pantalla principal de la aplicación que la marca de navegación se mueve de acuerdo con la pista GPX. Toca el [botón de mi ubicación](../map/interact-with-map#my-location-and-zoom) para sincronizar *Mi ubicación* (geolocalización simulada del dispositivo) con el centro del mapa.
Para detener la simulación del movimiento de tu dispositivo, regresa a la [configuración](#plugin-settings) de desarrollo de OsmAnd y toca **detener** en la opción **simular tu posición**.

- Se puede acceder a *<Translate android="true" ids="simulate_location_by_gpx"/>* también a través del **[menú de acción rápida](../widgets/quick-action.md#navigation)**.
- La velocidad de movimiento de la ubicación durante la simulación se puede establecer igual a la velocidad registrada (1), o más rápida (x2, x3, x4).
- También puedes simular el movimiento a lo largo de una pista GPX desde el [menú de navegación](../navigation/setup/route-navigation.md#simulated-navigation) sin habilitar el complemento de desarrollo de OsmAnd. En ese caso, tu ubicación no se sincronizará con la pista.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2023*