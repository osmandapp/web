---
source-hash: b19d759436fe929e58af9dc49b00bc63ab8876769325d48b55875835a8238e15
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




## Vista general {#overview}

Las funciones de prueba de la aplicación se recopilan en el plugin de desarrollo de OsmAnd. Úselas bajo su propio riesgo.

El plugin de desarrollo de OsmAnd le permite probar nuevas funciones de la aplicación o configurar OsmAnd para pruebas: simular rutas de navegación, comprobar el rendimiento de renderizado de la pantalla, etc. El plugin está diseñado para *desarrolladores y usuarios experimentados* y no es necesario para el uso diario de la aplicación.


## Parámetros de configuración requeridos {#required-setup-parameters}

Para activar funciones especiales para desarrolladores y probadores:

1. [Activar](../plugins/index.md#enable--disable) el plugin de desarrollo de OsmAnd en la sección Plugins del *Menú principal*.
2. Realice los ajustes necesarios en el [menú de Ajustes](#plugin-settings) del plugin.
3. Habilite los **widgets de desarrollador** si es necesario.


## Ajustes del plugin {#plugin-settings}

:::info info
Los ajustes del plugin de desarrollo de OsmAnd son globales y se aplican a todos los perfiles.
:::

Utilice una de las siguientes rutas para abrir los ajustes del plugin:

- *Menú principal → Plugins → Desarrollo de OsmAnd → Ajustes*.
- *Menú principal → [Ajustes globales](../personal/global-settings.md) → Perfil → Ajustes del plugin de desarrollo de OsmAnd*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de desarrollo Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Ajustes de desarrollo 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de desarrollo iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

- **Usar [formato SQLIte](../../technical/osmand-file-formats/osmand-sqlite) ráster para sombreado de relieve y pendiente** (*Android*). Cargar mapas ráster de formato antiguo.


### Solución de problemas {#troubleshotting}

- **Simular tu posición** (*Android* / *iOS*). [Simular](#gpx-track-simulation) la ubicación y el movimiento usando una ruta GPX.
- **Modo de ahorro de batería** (*Android* / *iOS*). Este ajuste reduce [la tasa de refresco de la pantalla](#map-rendering-fps-widget) en 20 fotogramas por segundo para ayudar a ahorrar energía de la batería mientras se usan las aplicaciones.
- **Usar iconos de posición de ubicación 3D** (*iOS*). Permite seleccionar un icono 3D para el [icono Mi Ubicación](../personal/profiles.md#my-location-appearance).
- **Simular datos OBD** (*Android*). Permite la simulación del uso del [escáner OBD](./vehicle-metrics.md).
- **Información de depuración de rendimiento** (*Android*). Muestra el rendimiento de renderizado y navegación.
- **Desactivar capas de mapa** (*Android*). Desactiva todas las capas de mapa sobre el mapa vectorial (se requiere reiniciar).
- **Búfer de Logcat** (*Android*). Comprobar y compartir registros detallados de la aplicación.
- **Mostrar mensaje emergente sobre la tecla presionada** (*Android*). Muestra un mensaje sobre la tecla.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. El rumbo es la dirección de la brújula desde su posición actual hasta su destino previsto. Afecta a la *[grabación de rutas](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. La dirección es la dirección de la brújula desde su posición actual hacia el norte verdadero. Esta opción está habilitada por defecto. Afecta a la *[grabación de rutas](../plugins/trip-recording.md)*.


### Pruebas de aplicación {#application-testing}

:::caution Solo Android
:::

- **Simular el primer inicio de la aplicación**. Establece el indicador que señala el primer inicio de la aplicación, manteniendo todos los demás ajustes sin cambios.
- **Probar indicaciones de voz**. Seleccione una voz y pruébela reproduciendo anuncios.
- **Barra de estado transparente**. El mapa se vuelve visible debajo de la barra de estado.
- **Mostrar banner de la versión gratuita**. Muestra el banner de la versión gratuita incluso en la versión de pago.
- **Mostrar información de depuración**. Muestra información gráfica sobre la ubicación de cada texto en el mapa.
- **Permitir visualización superpuesta**. Permite que los textos del mapa se muestren uno encima del otro.


### Algoritmos internos {#internal-algorithms}

:::caution Solo Android
:::

- **Modo seguro**. Ejecutar la aplicación en modo seguro (más lento).


### Ajustes de memoria {#memory-settings}

:::caution Solo Android
:::

- La opción **Memoria asignada para el enrutamiento** le permite determinar la cantidad de memoria asignada para calcular rutas largas. Puede usar esta opción si se selecciona el [Enrutamiento estándar A*](../navigation/guidance/navigation-settings.md#development-settings) en los *Ajustes de navegación*.

***Cálculo de rutas extralargas:***

- Una mayor asignación de memoria puede afectar el rendimiento de otras aplicaciones.
- [Cálculo de rutas de 50 km para peatones](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Información y estadísticas {#info-and-statistics}

:::caution Solo Android
:::

- **Memoria asignada**. Muestra la memoria del sistema asignada para la aplicación OsmAnd.
- **Memoria nativa total**. Muestra la cantidad total de memoria nativa asignada a la aplicación, incluida la memoria proporcional.
- **Información A-GPS**. Indica cuándo se descargaron por última vez los datos A-GPS.
- **Información día/noche**. Indica las horas de salida y puesta del sol de hoy.
- **Estadísticas de energía (promedio 1 / 5 / 15 minutos)**. Muestra el nivel de batería por minuto (%) y el consumo medio de energía (mAh) en intervalos de 1, 5 y 15 minutos.
- **Estadísticas de renderizado (promedio 1 / 5 / 15 minutos)**. Muestra estadísticas de renderizado, incluyendo FPS en los últimos 1k fotogramas, CPU (teselas), CPU (tiempo de inactividad) y promedios de CPU (en espera) en intervalos de 1, 5 y 15 minutos.

**Botón:**

- **Restablecer los ajustes del plugin a los valores predeterminados**. Restablece todos los ajustes del plugin a sus valores predeterminados.

    ![Ajustes de desarrollo Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget de FPS de renderizado de mapa {#map-rendering-fps-widget}

:::info Importante
Los widgets de desarrollador de OsmAnd solo se pueden agregar a la pantalla cuando el plugin de desarrollo de OsmAnd está habilitado.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget de desarrollo fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Widget de desarrollo fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget de desarrollo iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

El [Widget de FPS](../widgets/info-widgets.md#map-rendering-fps) muestra qué tan rápido se muestran y actualizan el mapa y los elementos del mapa. El valor numérico se indica en fotogramas por segundo (FPS).


## Widgets de posición de la cámara {#camera-position-widgets}

:::info Importante
Los widgets de desarrollador de OsmAnd solo se pueden agregar a la pantalla cuando el plugin de desarrollo de OsmAnd está habilitado.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Widgets de posición de la cámara 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Widgets de posición de la cámara 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Widgets de posición de la cámara 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Widgets de posición de la cámara 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Puede usar los [widgets de posición de la cámara](../widgets/info-widgets.md#camera-widgets) para darle al mapa de OsmAnd una apariencia realista y que coincida con las fotos de la Tierra tomadas tanto desde arriba como desde el espacio.


### Inclinación de la cámara {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de inclinación de la cámara Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Widget de inclinación de la cámara Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de inclinación de la cámara iOS 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Widget de inclinación de la cámara iOS 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

El widget de inclinación de la cámara muestra la inclinación entre el vector de visión central de la cámara (espectador) y un suelo plano imaginario de la tierra. El valor predeterminado es de 90 grados (sin inclinación).

:::note
La inclinación de la cámara se cambia moviendo la cámara (espectador) mientras que el punto central en el mapa (que estamos mirando) permanece igual. La distancia a él (de hecho, el zoom) no cambia.
Al mismo tiempo, debido al movimiento imaginario del espectador, la distancia desde la cámara a la superficie cambia.
:::


### Elevación de la cámara {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de elevación de la cámara Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Widget de elevación de la cámara Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de elevación de la cámara iOS 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Widget de elevación de la cámara iOS 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

El widget de Elevación de la cámara muestra la elevación de la cámara sobre el nivel de la superficie. La elevación de la cámara se indica en metros / kilómetros.


### Nivel de zoom {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de nivel de zoom Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Widget de nivel de zoom Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de nivel de zoom iOS 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Widget de nivel de zoom iOS 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

El widget tiene dos vistas que se cambian al tocarlo:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Muestra el nivel de zoom actual del mapa.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Muestra la relación actual entre una distancia en un mapa y la distancia correspondiente en la tierra. Ejemplos: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- El nivel de zoom inicial (0) es el nivel en el que toda la superficie de la tierra (el mapa completo) se muestra en la pantalla, y su tamaño es de 256 por 256 píxeles.
- Cada siguiente nivel de zoom reduce la distancia imaginaria al suelo aproximadamente 2 veces.

:::

### Distancia al objetivo {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de distancia al objetivo 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Widget de distancia al objetivo 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de distancia al objetivo 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Widget de distancia al objetivo 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

El widget de Distancia de la cámara al objetivo muestra la distancia entre la cámara (espectador) y el centro del mapa. Esta distancia se muestra en metros / kilómetros.


### Comparación con una imagen de satélite {#comparison-with-a-satellite-imagery}

![Comparación](@site/static/img/plugins/development/comparison.png)

Una comparación del mapa de OsmAnd y la superficie de la tierra revela los siguientes patrones:

- La distorsión máxima se observa con grandes zooms (zoom 6-7 para una inclinación de la cámara de 90 grados).
- A medida que disminuye la inclinación de la cámara (de 90 a 10 grados), aumenta la distorsión del mapa.
- Las distorsiones comienzan a observarse antes en latitudes altas.

La siguiente tabla contiene información sobre la inclinación de la cámara y la distancia al objetivo y el nivel de zoom en el que las distorsiones del mapa de OsmAnd se vuelven visibles. Si la cámara continúa alejándose del objetivo, la distorsión observada del mapa de OsmAnd aumentará.

|Inclinación (90) |Latitud |Zoom máx. |Altura, km |Distorsión|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Inclinación (60)** |**Latitud** |**Zoom máx.** |**Altura, km** |**Distorsión**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Inclinación (45)** |**Latitud** |**Zoom máx.** |**Altura, km** |**Distorsión**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Inclinación (20)** |**Latitud** |**Zoom máx.** |**Altura, km** |**Distorsión**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Widget de RAM disponible {#available-ram-widget}

Este widget está diseñado específicamente para usted cuando usa OsmAnd para proporcionar una interacción más conveniente e informativa con la RAM disponible en su dispositivo. Le permite monitorear fácil y rápidamente la RAM disponible, lo cual es especialmente útil cuando se usa OsmAnd para la navegación. Lea más sobre el widget en el artículo [Widgets de información](../widgets/info-widgets.md#available-ram).


## Simulación de ruta GPX {#gpx-track-simulation}

OsmAnd ofrece la oportunidad de simular la ubicación y el movimiento de su dispositivo utilizando una ruta GPX. Para estos fines, use la opción *<Translate android="true" ids="simulate_location_by_gpx"/>* en los [ajustes](#plugin-settings) del plugin de desarrollo de OsmAnd:

- Toque *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Seleccione una ruta para simular la ubicación y el movimiento del dispositivo.
- Seleccione la velocidad de simulación del movimiento.
- Toque el botón Iniciar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de desarrollo Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Ajustes de desarrollo Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de desarrollo iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Ajustes de desarrollo iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Después de ejecutar la simulación, verá en la pantalla principal de la aplicación que la marca de navegación se mueve según la ruta GPX. Toque el [botón mi ubicación](../map/interact-with-map.md#my-location-and-zoom) para sincronizar *Mi ubicación* (geolocalización simulada del dispositivo) con el centro del mapa.
Para detener la simulación del movimiento de su dispositivo, vuelva a los [ajustes](#plugin-settings) de desarrollo de OsmAnd y toque **detener** en la opción **simular su posición**.

- También se puede acceder a *<Translate android="true" ids="simulate_location_by_gpx"/>* a través del **[menú de acción rápida](../widgets/quick-action.md#navigation)**.
- La velocidad de movimiento de la ubicación durante la simulación se puede establecer igual a la velocidad registrada (1), o más rápido (x2, x3, x4).
- También puede simular el movimiento a lo largo de una ruta GPX desde el [menú de navegación](../navigation/setup/route-navigation.md#simulated-navigation) sin habilitar el plugin de desarrollo de OsmAnd. En ese caso, su ubicación no se sincronizará con la ruta.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)