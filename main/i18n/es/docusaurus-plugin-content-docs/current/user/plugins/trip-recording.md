---
source-hash: 65d58e4d60970c5f1ac65b7011c0c7fe2efa530f4578330a7ac4de7a0624b753
sidebar_position: 15
title: Grabación de viajes
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



## Descripción general {#overview}

El **complemento de grabación de viajes** es una herramienta esencial para capturar sus rutas, movimientos y entrenamientos. Esta función no solo le permite grabar sus viajes, sino que también permite una fácil reutilización, modificación, actualización y uso compartido de sus rutas con otros.

Con el *complemento de grabación de viajes*, puede crear nuevas rutas, mostrar las grabadas directamente en el mapa y administrar los registros existentes. Ofrece información valiosa sobre sus viajes, como la velocidad, los cambios de elevación, los detalles del terreno y los datos de sensores externos. El complemento registra su ruta, lo que permite un análisis detallado y el uso compartido después de su viaje.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Viaje grabado en Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Viaje grabado en iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para empezar a grabar rutas, debe realizar los siguientes ajustes:

1. [Habilitar](../plugins/index.md#enable--disable) el **complemento de grabación de viajes**.
2. [Configurar](#recording-settings) los **ajustes de grabación** para el [perfil](../personal/profiles.md) requerido.
3. [Añadir](#widgets) **widgets de grabación de viajes** a la pantalla (opcional).
4. [Administrar](../map/tracks/appearance.md) rutas en el mapa (opcional).


## Grabación de nueva ruta {#new-track-recording}

![Widget de distancia/inicio-parada en iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget de distancia/inicio-parada en Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Con el complemento de grabación de viajes en OsmAnd, puede iniciar fácilmente la grabación de su ruta utilizando una variedad de opciones convenientes. Así es como puede comenzar su viaje:

- [Widget de distancia/inicio-parada](#distance-start-stop) — Utilícelo para activar la grabación.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Pulse el botón en la *pestaña principal <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Botones de [acción rápida](../widgets/quick-action.md#add-and-delete-actions) — Para iniciar la grabación de un viaje, vaya a *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → Mis lugares* y elija [Iniciar / Pausar: Grabación de viaje](../widgets/quick-action.md#my-places).

- *Solo Android*:
    - Vaya a *Menú principal <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Notificación del sistema](#notifications) — Utilícela en el área de notificación de su dispositivo.

    - [Lanzador de aplicaciones](#launcher-android) — Utilícelo para iniciar la grabación.

**Recomendaciones:**

- [Ubicación precisa](../start-with/first-steps.md#permission-to-access-the-location) — Para una grabación precisa de la ruta, asegúrese de que OsmAnd tenga este permiso.

- [Solución de problemas](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — Los **dispositivos iOS** a veces pueden **suspender o detener temporalmente las aplicaciones** que se ejecutan en segundo plano, lo que podría interrumpir la grabación de la ruta.

- **Fuente de ubicación** (*solo Android*) — Ajuste la configuración en OsmAnd para elegir el proveedor de GPS más adecuado para grabaciones precisas. [Obtenga más información aquí](../personal/global-settings.md#location-source).


### Iniciar un diálogo {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

El diálogo de inicio se abre si la opción **<Translate android="true" ids="show_start_dialog"/>** está habilitada en la sección de configuración del cuadro de diálogo de inicio.

![Iniciar grabación en Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

El diálogo de inicio se abre si la opción **<Translate ios="true" ids="track_interval_remember"/>** no está activada.

![Iniciar grabación en iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervalo de registro** (*Android/iOS*). Esta configuración controla la frecuencia con la que la aplicación solicita datos del sensor GPS para marcar nuevos puntos en su ruta. Ajustar el intervalo le permite equilibrar entre el detalle de la ruta y el uso de la batería. Un intervalo más corto dará como resultado rutas más detalladas pero un mayor consumo de batería, mientras que un intervalo más largo conserva la batería pero reduce la precisión de la ruta.

- **Icono de línea** (*Android*). Pulse este icono para acceder a las [opciones de apariencia de la ruta](../map/tracks/appearance.md). Aquí, puede personalizar cómo aparece su ruta en el mapa, incluyendo el color de la línea, el grosor y el estilo. Una vez que guarde una ruta con una apariencia personalizada, esta configuración se mantendrá para futuras grabaciones, asegurando la coherencia cada vez que vea o vuelva a habilitar la ruta.

- **Menú de configuración** (*Android*). Acceda a este menú para ajustar sus preferencias de grabación. Para una descripción detallada, consulte la sección [Configuración de grabación de viajes](#recording-settings).

- **Recordar mi elección** (*iOS*). Cuando está habilitado, la grabación de la ruta comienza automáticamente, sin solicitar configuraciones o confirmaciones adicionales. Si desea cambiar la configuración de grabación antes de iniciar una nueva ruta, reinicie el complemento de grabación de viajes para que el menú de configuración vuelva a aparecer.


### Lanzador (Android) {#launcher-android}

![Menú contextual del icono](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icono de inicio de grabación](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Puede iniciar rápidamente una nueva grabación de ruta directamente desde la pantalla de su dispositivo Android utilizando el menú contextual del icono de la aplicación OsmAnd.

- **Mantenga pulsado** el icono de la aplicación OsmAnd para abrir el menú contextual, donde puede encontrar la opción **Iniciar grabación**.

- Pulse la opción **Iniciar grabación** para iniciar la aplicación OsmAnd con la [configuración de grabación de ruta](#overview-screen) mostrada en la pantalla.

- **Mantenga pulsado** la opción **Iniciar grabación** en el menú contextual del icono de la aplicación para añadir un acceso directo para un acceso más rápido.

Mientras la grabación de la ruta está activa, aparecerá una insignia de notificación en la esquina del icono de la aplicación OsmAnd, indicando que la grabación está en curso. Para obtener más detalles sobre la gestión de esta notificación, consulte la sección [Notificación](#notifications).


## Grabación de ruta actual {#current-track-recording}

Para *Detener / Guardar / Pausar*:

- Para **Detener** la grabación, pulse el botón correspondiente en el cuadro de diálogo del [widget de distancia/inicio-parada](#distance-start-stop).

- (*Solo Android*) Para **Detener** la grabación, pulse el elemento del menú principal *Grabación de viaje*.

- Para **Detener** o **Guardar** una ruta de grabación, vaya a *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*pestaña <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) y pulse el botón apropiado en el campo *Ruta grabando actualmente*.

- Para **Guardar, Pausar, Iniciar** un nuevo segmento o **Finalizar** la grabación, utilice los botones de [acción rápida](../widgets/quick-action.md#add-and-delete-actions). Vaya a *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → [Mis lugares](../widgets/quick-action.md#my-places)* y añada uno o más botones de acción rápida.

- (*Solo Android*) Para **Pausar** o **Guardar** una ruta de grabación, utilice la [notificación](#notifications) del sistema en el área de notificación de su dispositivo.<br/><br/> ![detener-guardar-pausar](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Pantalla de resumen {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![resumen](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![resumen](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finalizar grabación en iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Finalizar grabación en iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

En OsmAnd, las versiones de **Android** e **iOS** manejan la interfaz de grabación de rutas de manera ligeramente diferente. En Android, encontrará un menú dedicado para el contexto de *grabación de rutas*, mientras que en iOS, esto se simplifica en el menú contextual de *ruta grabando actualmente*.

A medida que graba una ruta, se generan gráficos dinámicos que proporcionan datos visuales en tiempo real sobre su viaje. Estos gráficos pueden reflejar información para toda la ruta o solo para un segmento seleccionado, según su nivel de zoom.
Esto es lo que puede encontrar en ellos:

- **Valores de datos**. En el lado derecho del gráfico se encuentran los valores ***más altos***, ***más bajos*** y ***promedio*** de la sección visible de la ruta.

- **Gráfico para información clave**:
    - ***Android***. Para el ***eje Y*** del gráfico, puede seleccionar *hasta dos parámetros* de todos los datos disponibles, como *Altitud*, *Pendiente*, *Velocidad* e [información de sensores externos](../plugins/external-sensors.md#trip-recording). Para el ***eje X***, seleccione para mostrar *Distancia*, *Tiempo* o *Hora del día*.
    - ***iOS***. Los parámetros se organizan en pestañas *Resumen*, *Altitud* y *Velocidad* con los valores apropiados para el eje Y y *Distancia* para el eje X.

- **Estadísticas**. Para Android, muestra un conjunto constante de datos estadísticos independientes de la configuración del gráfico: *Distancia*, *Período de tiempo*, *Cuesta arriba*, *Cuesta abajo*, *Velocidad media*. Para iOS, cada pestaña, Resumen, Actitud y Velocidad, tiene un conjunto de datos diferente.

Para una vista más detallada, puede **escalar el gráfico**:

- Utilice el [gesto de dos dedos](../map/interact-with-map.md#gestures) para acercar o alejar y centrarse en intervalos específicos.
- Pulse en cualquier punto del gráfico para mostrar un marcador que muestre los valores exactos para esa ubicación.

| |
| ------------- |
|Pestaña **Resumen** iOS (para Android, los parámetros del eje Y son *Altitud*, *Velocidad* y el parámetro del eje X es *Distancia*). Esta pestaña muestra un gráfico que muestra los cambios de velocidad y altitud a lo largo de la ruta, y los detalles clave de la ruta. Datos de la ruta para iOS: *Distancia*, *Período de tiempo*, *Hora de inicio* y *Hora de finalización*. Puede ver cómo se muestra esto en las versiones de Android e iOS a continuación. |
| ![datos](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![datos](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| Pestaña **Altitud** iOS (para Android, los parámetros del eje Y son *Altitud*, *Pendiente* y el parámetro del eje X es *Distancia*). Esta pestaña se centra en el perfil de elevación de su ruta grabada, proporcionando información sobre los cambios de altitud y las pendientes del terreno. Las métricas clave para iOS incluyen: *Altitud media*, *Rango de altitud*, *Cuesta arriba* y *Cuesta abajo*. Los gráficos a continuación ilustran las diferencias entre las interfaces de Android e iOS. |
| ![datos](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![datos](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| Pestaña **Velocidad** iOS (para Android, el parámetro del eje Y es *Velocidad* y el parámetro del eje X es *Distancia*). La pestaña Velocidad resalta los datos relacionados con la velocidad a lo largo de la ruta. Para iOS, incluye información como *Velocidad media*, *Velocidad máxima*, *Tiempo en movimiento* y *Distancia corregida*. Las capturas de pantalla a continuación muestran cómo se muestran estos datos en ambas plataformas. |
| ![datos](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![datos](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Para **Android**, puede crear más combinaciones de datos del eje Y disponibles y valores del eje X. |
| ![datos](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Para obtener más detalles, puede explorar el [**Menú contextual de rutas**](../map/tracks/track-context-menu.md#options), donde puede administrar varias opciones relacionadas con las rutas, como cambiar el nombre, eliminar o añadir puntos de referencia. Para ajustar cómo aparecen las rutas en el mapa, visite la sección [**Apariencia**](../map/tracks/appearance.md). Si desea añadir puntos de referencia específicos a su ruta actual, consulte la guía [**Puntos de ruta**](../map/tracks/track-context-menu.md#points--waypoints). Para cualquier modificación, como cambiar el nombre de una ruta, utilice la pestaña [**Opciones**](https://osmand.net/docs/user/map/track-context-menu#options) dentro del Menú contextual de rutas.
:::


### Mostrar en el mapa {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![mostrar_tr_enmapa_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configurar rutas del mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![mostrar_tr_enmapa_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configurar rutas del mapa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Administre qué rutas son visibles en su mapa utilizando una de dos opciones. Diríjase a *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*pestaña <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) y habilite la opción *Mostrar en el mapa* para cualquier ruta que desee mostrar u ocultar. Alternativamente, puede ir a *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) para ajustar rápidamente la visibilidad de todas sus rutas en un solo lugar.


### Archivo GPX grabado {#recorded-gpx-file}

OsmAnd captura su viaje en un [archivo GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) estructurado, utilizando una jerarquía de *archivo > ruta > segmentos > puntos*. Así es como funciona:

- Los **puntos** representan momentos individuales de su ruta grabada, cada uno marcado con atributos como coordenadas, velocidad, altitud y rumbo.
- Estos puntos se agrupan para formar **rutas**, que representan toda su ruta.
- Si hay una interrupción en la grabación (por ejemplo, si se pausó el seguimiento), el siguiente punto después de la interrupción inicia un nuevo **segmento**, marcando la separación en su viaje.
- Tanto los **segmentos** como las **rutas** se representan visualmente con iconos de *Inicio* y *Fin* en el mapa.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Archivo GPX de una ruta grabada](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Archivo GPX de una ruta grabada](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parámetro | Descripción |
|---|---|
| `trkpt` | **Punto de ruta** representa una ubicación geográfica específica detectada durante su actividad. Cada punto de ruta incluye coordenadas de latitud y longitud, formando la base de su ruta grabada. |
| `trkseg` | **Segmento de ruta** agrupa puntos de ruta consecutivos, separados por interrupciones en la actividad, como pausas o paradas. Esto ayuda a distinguir el movimiento continuo de los períodos de inactividad dentro de una sola grabación. |
| `lat` | **Latitud** indica la posición norte-sur de un punto en la superficie de la Tierra. Es la mitad del par de coordenadas utilizado para determinar su ubicación exacta. |
| `lon` | **Longitud** especifica la posición este-oeste, complementando la latitud, para localizar con precisión un punto en el globo. Juntas, la latitud y la longitud definen su posición geográfica precisa. |
| `ele` | **Elevación** mide la altura de un punto de ruta sobre el nivel del mar, registrada en metros. Esto puede ser útil para rastrear los cambios de altitud durante sus actividades, como caminatas o paseos en bicicleta. |
| `time` | **Marca de tiempo** registra la fecha y hora exactas en que se registra un punto de ruta. Esto le permite rastrear la duración y el tiempo de su actividad con precisión. |
| `hdop` | **Dilución horizontal de la precisión (HDOP)** es una medida de la precisión del GPS, que refleja el error potencial en la ubicación debido a las posiciones de los satélites. A diferencia del HDOP estándar, las rutas GPX de OsmAnd utilizan este valor para representar la precisión horizontal en metros. Tenga en cuenta que esta implementación difiere de los estándares típicos de HDOP. [Obtenga más información](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Velocidad** registra su velocidad de movimiento en metros por segundo. Proporciona información sobre su ritmo durante varios segmentos de su actividad. |
| `heading` | **Rumbo** indica la dirección en la que apunta su vehículo o dispositivo, medido en grados. Es distinto del curso, que es la trayectoria real del movimiento. Pueden producirse diferencias debido a factores externos como el viento, las corrientes o las condiciones de la carretera. [Más sobre el rumbo](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | La **velocidad** de [sensores externos](../plugins/external-sensors.md) captura datos de sensores conectados, proporcionando información de velocidad más precisa, especialmente útil al andar en bicicleta. Para obtener más detalles, consulte la [documentación del formato de archivo GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | La **cadencia** mide el número de revoluciones del pedal por minuto, registrada mediante [sensores externos](../plugins/external-sensors.md). Esto es particularmente útil para los ciclistas que desean monitorear y optimizar su eficiencia de pedaleo. [Lea más](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | La **potencia de la bicicleta** cuantifica la potencia generada al pedalear, capturada de [sensores externos](../plugins/external-sensors.md). Es una métrica esencial para los ciclistas serios que desean medir su rendimiento. [Obtenga más información](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | La **temperatura del aire** registra la temperatura ambiente durante su actividad, medida con [sensores externos](../plugins/external-sensors.md). Tenga en cuenta que la temperatura del agua no es compatible. [Detalles aquí](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | La **frecuencia cardíaca** monitoriza los latidos por minuto, utilizando datos de [sensores](../plugins/external-sensors.md) conectados. Esta información puede ser vital para controlar el rendimiento cardiovascular durante los entrenamientos. [Más información](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Ajustes de grabación {#recording-settings}

Antes de empezar a registrar sus viajes, debe configurar correctamente el **complemento de grabación de viajes** para un rendimiento óptimo.

- **Ajustes específicos del perfil**. Cada perfil de la aplicación puede tener sus propios ajustes de grabación de viajes. Esto le permite personalizar con precisión el comportamiento de la grabación en función de su actividad, como conducir, andar en bicicleta o incluso caminar nórdico, que pueden requerir diferentes configuraciones.

- **Personalizar los parámetros de grabación**. Los ajustes de grabación pueden variar según cómo se mueva. Por ejemplo, conducir largas distancias podría requerir una frecuencia de grabación más baja, mientras que el senderismo o la caminata podrían beneficiarse de actualizaciones más frecuentes.

- **Datos de ubicación precisos**. Para asegurarse de que sus grabaciones sean fluidas y utilizables para uso futuro, puede personalizar la forma en que captura los puntos de ubicación. Esto podría incluir ajustar la frecuencia de grabación, el formato de sus datos (como el número de puntos por unidad de distancia) o el espaciado entre los puntos grabados.

- **Ajustes globales**. Los ajustes de grabación de viajes se configuran por perfil, que puede administrar en los [ajustes](../personal/global-settings.md) globales de la aplicación. Antes de personalizar el complemento de grabación de viajes, seleccione el perfil que desea configurar en la sección [perfiles](../personal/profiles.md). Desde allí, navegue a los ajustes del perfil para acceder a las opciones de grabación de viajes.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración de la grabación de viajes en Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Configuración de la grabación de viajes en Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de la grabación de viajes en iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Configuración de la grabación de viajes en iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción |
|---|---|
| **Diálogo de optimización de batería** (*Android*) | Abre los [ajustes de optimización de batería de Android](#battery-optimization). Pulse *No volver a preguntar* si no desea que se le vuelva a preguntar. |
| **Mostrar diálogo de inicio** (*Android*) | Habilita un diálogo donde puede configurar los ajustes antes de iniciar la grabación. Si está deshabilitado, la grabación comienza automáticamente. |
| **Grabar ruta automáticamente durante la navegación** | Graba automáticamente la ruta durante la navegación y la guarda en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Nota*: La grabación de la ruta consume batería y sigue ejecutándose en segundo plano, incluso si la pantalla está apagada. |
| **Intervalo de registro general** | Define la frecuencia con la que se registran los puntos de ubicación. El valor predeterminado es de 5 segundos. Se habilita con el *widget de grabación de viajes*. |
| **Desplazamiento mínimo** | Un filtro para evitar grabar puntos cuando hay poco o ningún movimiento. Ayuda a reducir el ruido de los datos.<ul><li>*Efectos secundarios*: Los períodos de descanso pueden no registrarse y los pequeños movimientos pueden ignorarse. Esto puede reducir los datos de posprocesamiento, pero también puede evitar que se registren errores de GPS.</li><li>*Recomendación*: Establezca el desplazamiento en 5 metros si desea menos detalles menores en sus grabaciones.</li></ul> |
| **Precisión mínima** | Filtra los puntos de ubicación por debajo de un umbral de indicación de precisión mínima, según lo informado por el dispositivo.<ul><li>*Efectos secundarios*: Los puntos en áreas con poca señal (debajo de puentes, árboles, entre edificios o en algunas condiciones climáticas) pueden faltar.</li><li>*Recomendación*: Si no está seguro, puede ser mejor deshabilitar este filtro para evitar la pérdida de datos.</li></ul><details><summary>*Observación*</summary>Supongamos que el GPS se apagó justo antes de la grabación. En ese caso, el primer punto medido puede tener una precisión reducida, por lo que es mejor esperar un poco antes de grabar el punto o grabar el mejor de 3 puntos consecutivos.</details> |
| **Velocidad mínima** | Establece un umbral para ignorar los puntos registrados por debajo de una cierta velocidad.<ul><li>*Efectos secundarios*: Las secciones donde la velocidad cae por debajo de un umbral especificado no se registrarán.</li><li>*Recomendación*: Utilice el filtro *Desplazamiento mínimo* en su lugar, ya que puede dar mejores resultados sin perder datos importantes.</li></ul><details><summary>*Observación*</summary>Intente usar primero la detección de movimiento a través del filtro de desplazamiento mínimo de registro (B), puede producir mejores resultados y perderá menos datos. Si sus rutas siguen siendo ruidosas a bajas velocidades, pruebe valores distintos de cero aquí. Tenga en cuenta que algunas mediciones pueden no informar ningún valor de velocidad (algunos métodos basados en la red), en cuyo caso no registraría nada.<br/><br/>Comprobación de velocidad > 0: La mayoría de los chipsets GPS informan un valor de velocidad solo si el algoritmo determina que está en movimiento, y ninguno si no lo está. Por lo tanto, usar la configuración > 0 en este filtro, en cierto sentido, utiliza la detección de movimiento del chipset GPS. Pero incluso si no se filtra aquí en el momento de la grabación, seguimos usando esta característica en nuestro análisis GPX para determinar la Distancia corregida, es decir, el valor que se muestra en ese campo es la distancia registrada mientras está en movimiento.</details> |
| **Dividir grabaciones automáticamente después de un hueco** | Divide automáticamente las rutas en función de las brechas de tiempo entre los puntos registrados. <ul><li>Un nuevo segmento comienza después de una brecha de 6 minutos.</li><li>Una nueva ruta comienza después de una brecha de 2 horas.</li><li>Un nuevo archivo comienza cuando cambia la fecha.</li><li>Las brechas pueden ser el resultado de la pérdida de señal GPS, baja velocidad o ajustes de configuración.</li></ul><details><summary>*Observación*</summary>Se identifica una brecha cuando no se registran puntos. Esto puede ocurrir porque la ubicación no se detecta o porque se detecta pero no se registra. Varios factores pueden causar esto, incluyendo señales GPS débiles debido a malas condiciones climáticas, o que la velocidad de movimiento caiga por debajo del umbral configurado. En tales casos, aunque el dispositivo pueda detectar la ubicación, no la registra.<br/><br/>Estas brechas en los datos registrados pueden desencadenar la creación de un nuevo segmento dentro de la misma ruta, una nueva ruta en el mismo archivo o un nuevo archivo GPX dentro de una grabación. Esto se gestiona dentro de una única sesión de inicio/parada de grabación.</details> |
| **Evitar el registro autónomo** (*Android*) | Pausa la grabación de la ruta cuando la aplicación OsmAnd se cierra (a través de *aplicaciones recientes*). La indicación de fondo no se muestra en el panel de notificaciones de Android. |
| **Incluir rumbo** | Registra el rumbo (dirección del movimiento) para cada punto en el archivo GPX. El rumbo es la dirección en la que mira el dispositivo, que puede diferir de la dirección del movimiento debido a factores externos como el viento o el derrape. |
| **Actividad** | La opción le permite preseleccionar un [tipo de actividad](../map/tracks/track-context-menu.md#track-information-activity) para un perfil, que luego se aplica automáticamente a todas las rutas grabadas. |
| **Sensores externos** <br/> *Necesita el complemento habilitado* | Los datos de [sensores externos](../plugins/external-sensors.md#trip-recording) como *<Translate android="true" ids="map_widget_ant_heart_rate"/>* o *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* se registran en el archivo GPX. Los datos de *distancia* no se registran en Android ni en iOS. Se muestran solo cuando el [complemento de sensores externos](../plugins/external-sensors.md) está habilitado. |
| **Métricas del vehículo** <br/> *Necesita el complemento habilitado* | Los datos del [escáner OBD-II](../plugins/vehicle-metrics.md#trip-recording) se registran en el archivo GPX. Se muestran solo cuando el [complemento de métricas del vehículo](../plugins/vehicle-metrics.md) está habilitado.<br />*Nota*: Puede añadir qué métricas registrar en el archivo GPX de la lista: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Carpeta de almacenamiento de rutas** (*Android*) | Define dónde se almacenan las rutas grabadas en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. Las opciones incluyen almacenar todas las rutas en la carpeta Rec o organizarlas por mes, como Rec/aaaa-mm. |
| **Notificación** | Controla la visualización de una [notificación del sistema de grabación de viajes](#notifications) en el área de notificación del dispositivo que le permite iniciar la grabación de viajes. |
| **Seguimiento en línea** (*Android*) | Permite el seguimiento en tiempo real de su ubicación enviando puntos registrados a una URL especificada. El intervalo de seguimiento determina la frecuencia con la que se envían los puntos, y el búfer de tiempo almacena los puntos cuando no hay conexión a Internet.<details><summary>*Observación*</summary>Si esta opción está habilitada y la grabación de la ruta está en curso, el widget de Distancia/Inicio-Parada (REC) se vuelve **verde** en lugar de **rojo**, lo que indica que cada punto grabado se está transmitiendo a una URL especificada. El campo **Dirección web** le permite introducir la URL utilizando el siguiente formato de parámetro:<ul><li>`lat={0}`: Latitud</li><li>`lon={1}`: Longitud</li><li>`timestamp={2}`: Marca de tiempo (tiempo Unix)</li><li>`hdop={3}`: Dilución horizontal de la precisión</li><li>`altitude={4}`: Altitud</li><li>`speed={5}`: Velocidad</li><li>`bearing={6}`: Rumbo (dirección del movimiento)</li><li>`eta={7}`: Hora estimada de llegada (tiempo Unix)</li><li>`etfa={8}`: Tiempo estimado hasta el primer punto intermedio o punto final (tiempo Unix)</li><li>`eda={9}`: Distancia estimada hasta la llegada o un marcador (en metros)</li><li>`edfa={10}`: Distancia estimada hasta el primer punto intermedio o punto final (en metros)</li></ul>Puede establecer el **Intervalo de seguimiento** para especificar la frecuencia con la que se envían los puntos de ubicación, con opciones que van desde 0 segundos hasta 5 minutos. Además, el parámetro **Búfer de tiempo** determina cuánto tiempo se almacenan los puntos de ubicación si no hay conexión a Internet, lo que garantiza que los datos se guarden y transmitan cuando se restablezca la conexión.</details> |
| **Rutas** | Una referencia rápida a la carpeta donde se guardan las rutas en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Restablecer la configuración del complemento a los valores predeterminados** | Restablece todos los ajustes de grabación de viajes para el perfil actual a sus valores predeterminados. |
| **Copiar de otro perfil** (*Android*) | Copia los ajustes de grabación de viajes de un perfil a otro. |


### Optimización de la batería {#battery-optimization}

<InfoAndroidOnly />

![Ruta en el mapa iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Ruta en el mapa iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Esta función le permite administrar la configuración de optimización de la batería para OsmAnd para garantizar un acceso ininterrumpido a su ubicación, incluso cuando la aplicación se ejecuta en segundo plano durante la navegación o la grabación de rutas.

- **Ajustes de optimización de la batería**. Abre los ajustes de Android, donde puede modificar las preferencias de ahorro de batería para OsmAnd. [Más detalles aquí](../troubleshooting/general.md#optimizing-battery-consumption).
- **No volver a preguntar**. Descarta el cuadro de diálogo de forma permanente, por lo que no volverá a aparecer.
- **Cerrar**. Cierra temporalmente el cuadro de diálogo, que volverá a aparecer la próxima vez que la optimización de la batería necesite atención.


### Notificaciones {#notifications}

![Notificación de grabación de viaje](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Si la [Notificación](#recording-settings) está habilitada en la configuración del complemento, las notificaciones de grabación de viaje siempre se mostrarán en el área de notificación del sistema cuando la grabación esté activa. Esta notificación garantiza que el proceso de grabación no sea interrumpido por el sistema, y no se puede deshabilitar durante una grabación activa.

- El área de notificación se abre cuando se desliza hacia abajo desde la parte superior de la pantalla y se cierra cuando se desliza hacia arriba. Estos mensajes le notifican acciones como iniciar/detener la grabación de viajes, especialmente cuando la grabación automática está habilitada durante la navegación.
- Las notificaciones permanecen visibles independientemente de si la aplicación se está ejecutando en primer plano, en segundo plano o está cerrada. Puede borrar manualmente la notificación antigua si ya no es necesaria, pero esto no detendrá la grabación en curso.

**Nota importante**.

Este comportamiento es requerido por Android para que cualquier servicio en primer plano, como la grabación de viajes, permanezca visible para usted.

- Si se elimina la notificación, Android detendrá automáticamente la grabación. Puede utilizar la configuración [Evitar el registro autónomo](#recording-settings).
- La configuración de **Notificación** en OsmAnd afecta si la barra de notificaciones muestra un acceso directo para iniciar una grabación cuando no hay ninguna grabación activa. **No** controla la visibilidad de la notificación durante una grabación activa.

**Opciones adicionales de Android**.

![Notificación de grabación de viaje](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- En ***Ajustes de Android → Notificaciones y barra de estado → Notificaciones de pantalla de bloqueo***, puede eliminar OsmAnd de la lista de aplicaciones para evitar que las notificaciones aparezcan en la pantalla de bloqueo, evitando la activación accidental de la pantalla. Esto no afectará la grabación de la ruta. Las notificaciones seguirán apareciendo en el área de notificación normal.
- **OsmAnd** también puede aparecer en ***Privacidad → Permisos especiales → Encender pantalla***. Si desea evitar que la pantalla se encienda cuando aparece una notificación, intente eliminar OsmAnd de esta lista.

<!--
- OsmAnd no está listado en **Privacidad** *→* **Permisos especiales** → **Alarmas y recordatorios**.
-->

**Notificación de insignia**.

![Notificación de grabación de viaje](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

La insignia del icono de la aplicación aparece junto al icono de OsmAnd cuando la grabación de la ruta está activa.

- Este icono desaparece cuando la grabación de la ruta está completa. Para comprobar si una grabación está activa, puede ir a *Menú → Mis lugares → Pestaña Rutas* o pulsar el widget para gestionar la grabación.
- Si no hay ninguna grabación en curso y la insignia sigue mostrándose, puede significar que se ha dejado un mensaje de OsmAnd en el panel de notificaciones del dispositivo.
- Para deshabilitar las insignias en la configuración de Android, vaya a *Configuración del dispositivo → Aplicaciones → OsmAnd → Notificaciones* y desactive la opción de visualización de insignias para esta aplicación.


## Widgets {#widgets}

Los widgets le permiten mostrar información clave sobre la grabación de rutas directamente en la pantalla, como *Distancia*, *Duración*, *Cuesta arriba* y *Cuesta abajo*.

Para empezar a utilizar los *widgets de grabación de viajes*, debe realizar todos los siguientes ajustes:

1. [Habilitar el complemento](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurar los ajustes de grabación de viajes para el [perfil](../personal/profiles.md) requerido.
3. Añadir los **widgets de grabación de viajes** necesarios a la pantalla. Tenga en cuenta que esta configuración es **específica de cada perfil**.


### Añadir widget de grabación {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Añadiendo widget de distancia/inicio-parada en Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Añadiendo widget de distancia/inicio-parada en iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

El [widget de grabación de viajes](../widgets/info-widgets.md#trip-recording-widgets) proporciona una forma sencilla de supervisar el estado de la grabación y acceder rápidamente a la configuración y los detalles de la grabación. Este widget se añade automáticamente a la pantalla cuando se habilita el complemento de grabación de viajes.

Para personalizar su interfaz, puede añadir o eliminar el widget de grabación de viajes y [otros widgets](../plugins/trip-recording#duration-uphill-downhill) a través del menú Configurar pantalla.


### Distancia (Inicio-Parada) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de grabación de viaje](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Finalizar grabación en Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de grabación de viaje](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget de grabación de viaje](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Cuando los widgets se muestran en el mapa, al pulsar cualquiera de ellos se revelan detalles adicionales de la ruta y se permite la interacción con la grabación.
El widget *Distancia* muestra la distancia total de su viaje grabado actual y actúa como la interfaz principal para administrar sus grabaciones. Al pulsarlo, se abre el [diálogo de grabación de viajes](#start-a-dialog), donde puede iniciar, detener y ver información detallada sobre su ruta.

- El widget se añade automáticamente cuando se habilita el *complemento de grabación de viajes*, pero se puede ocultar a través del [menú Configurar pantalla](../widgets/configure-screen.md#configure-screen-menu).
- Si la opción *Mostrar diálogo de inicio* está deshabilitada en la configuración del complemento de grabación de viajes, al pulsar el widget activo se seguirá abriendo el cuadro de diálogo *Grabación de viajes*, lo que le permitirá acceder a más opciones e información.

Además del widget *Distancia/Inicio-Parada*, el **complemento de grabación de viajes** incluye otros tres widgets: *Duración*, *Cuesta arriba* y *Cuesta abajo*. Estos proporcionan información adicional sobre su viaje, ayudándole a seguir el progreso en tiempo real.

| |
|-----------|
| **Distancia/Inicio-Parada**. Este widget muestra la distancia de su grabación de viaje en curso. Se añade automáticamente cuando se habilita el complemento de grabación de viajes, pero puede ocultarlo a través del menú Configurar pantalla. El widget presenta tres estados distintos: *Grabando*, *Pausado* e *Inactivo*, cada uno indicando el estado actual de su grabación de viaje. |
| ![Widget de grabación de viaje (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Para abrir el [diálogo de grabación de viajes](#start-a-dialog) al pulsar un widget inactivo, habilite la opción *Mostrar diálogo de inicio* en la configuración del complemento de grabación de viajes. Si la opción está deshabilitada, la grabación comenzará inmediatamente después de pulsar el widget sin abrir el diálogo.|


### Duración, Cuesta arriba, Cuesta abajo {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Duración**. Muestra el tiempo total de la grabación del viaje actual en horas y minutos. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Cuesta arriba**. Muestra la ganancia de elevación acumulada para la grabación del viaje actual. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Cuesta abajo**. Indica el descenso total acumulado durante la grabación del viaje actual. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Si tiene varios widgets seleccionados — *Duración*, *Cuesta arriba* o *Cuesta abajo* — puede acceder al mismo cuadro de diálogo para cada uno sin necesidad de cambiar o cerrarlo. Esta interfaz unificada facilita la visualización y gestión de toda la información relacionada de forma fluida.


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](../map/map-context-menu.md)
- [Mostrar ruta en el mapa](../map/tracks/index.md)
- [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de la ruta](../map/tracks/track-context-menu.md)
- [Navegación por ruta](../navigation/setup/gpx-navigation.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

- La grabación de viajes no se inicia.
    - Asegúrese de que el **complemento de grabación de viajes** esté habilitado: *Menú → Complementos → Grabación de viajes → Habilitar*.
    - Compruebe que la configuración sea correcta: *Menú → Configurar perfil → Configuración del complemento → Grabación de viajes*.
    - Si la grabación aún no se inicia, reinicie la aplicación e inténtelo de nuevo.

- La grabación de viajes se detiene inesperadamente.
    - Compruebe si la *configuración de optimización de la batería de su dispositivo* está deteniendo la grabación. Algunos dispositivos pueden pausar la actividad en segundo plano para ahorrar energía. Vaya a *Configuración del dispositivo → Batería*.

- La distancia grabada no coincide con la distancia real.
    - Verifique que el GPS esté habilitado y tenga una señal activa.
    - Reduzca el umbral de precisión del GPS: *Menú → Configurar perfil → Grabación de viajes → Precisión mínima*.

- Las rutas grabadas son ruidosas. [(comprobar)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Las rutas grabadas tienen huecos. [(comprobar)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Cómo rastrear la distancia recorrida. [(comprobar)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Para obtener más información sobre la solución de problemas, visite: [Solución de problemas de grabación de rutas](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Última actualización: enero de 2025*