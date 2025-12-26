---
source-hash: 18bffcca1c85af3b09a5ad3aa863211cc3d83cece85301333f5d7e81b878d98a
sidebar_position: 15
title:  Grabación de viaje
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

El **complemento Grabación de viaje** es una herramienta esencial para capturar sus rutas, movimientos y entrenamientos. Esta función no solo le permite grabar sus viajes, sino que también facilita la reutilización, modificación, actualización y el uso compartido de sus pistas con otros.  

Con el *complemento Grabación de viaje*, puede crear nuevas pistas, mostrar las grabadas directamente en el mapa y gestionar los registros existentes. Ofrece información valiosa sobre sus viajes, como la velocidad, los cambios de elevación, los detalles del terreno y los datos de sensores externos. El complemento graba su ruta, lo que permite un análisis detallado y compartirla después de su viaje.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Viaje grabado en Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Viaje grabado en iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para comenzar a grabar pistas, debe realizar los siguientes ajustes:

1. [Activar](../plugins/index.md#enable--disable) el **complemento Grabación de viaje**.  
2. [Configurar](#recording-settings) los **ajustes de grabación** para el [perfil](../personal/profiles.md) requerido.  
3. [Añadir](#widgets) **widgets de Grabación de viaje** a la pantalla (opcional).
4. [Gestionar](../map/tracks/appearance.md) pistas en el mapa (opcional).


## Grabación de nueva pista {#new-track-recording}

![Widget Distancia/Iniciar-Detener en iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget Distancia/Iniciar-Detener en Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Con el complemento Grabación de viaje en OsmAnd, puede comenzar a grabar su pista fácilmente utilizando una variedad de opciones convenientes. A continuación, se explica cómo puede comenzar su viaje:

- [Widget Distancia/Iniciar-Detener](#distance-start-stop) — Úselo para activar la grabación.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Toque el botón en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> principal*.

- Botones de [Acción rápida](../widgets/quick-action.md#add-and-delete-actions) — Para comenzar a grabar un viaje, vaya a *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → Mis lugares* y elija [Iniciar / Pausar: Grabación de viaje](../widgets/quick-action.md#my-places).

- *Solo Android*:
    - Vaya a *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/> principal*.

    - [Notificación del sistema](#notifications) — Úsela en el área de notificaciones de su dispositivo .

    - [Lanzador de aplicaciones](#launcher-android) — Úselo para iniciar la grabación .  

**Recomendaciones:**

- [Ubicación precisa](../start-with/first-steps.md#permission-to-access-the-location) — Para una grabación de pista precisa, asegúrese de que OsmAnd tenga este permiso.

- [Solución de problemas](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — Los **dispositivos iOS** a veces pueden **suspender o detener temporalmente las aplicaciones** que se ejecutan en segundo plano, lo que podría interrumpir la grabación de la pista.

- **Fuente de ubicación** (*Solo Android*) — Ajuste la configuración en OsmAnd para elegir el proveedor de GPS más adecuado para grabaciones precisas. [Aprenda más aquí](../personal/global-settings.md#location-source).


### Diálogo de inicio {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

El diálogo de inicio se abre si la opción **<Translate android="true" ids="show_start_dialog"/>** está activada en la sección de ajustes del cuadro de diálogo de inicio.

![Iniciar grabación en Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

El diálogo de inicio se abre si la opción **<Translate ios="true" ids="track_interval_remember"/>** no está activada.

![Iniciar grabación en iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervalo de registro** (*Android/iOS*). Este ajuste controla la frecuencia con la que la aplicación solicita datos del sensor GPS para marcar nuevos puntos en su pista. Ajustar el intervalo le permite equilibrar el detalle de la pista y el uso de la batería. Un intervalo más corto resultará en pistas más detalladas pero un mayor consumo de batería, mientras que un intervalo más largo conserva la batería pero reduce la precisión de la pista.

- **Icono de línea** (*Android*). Toque este icono para acceder a las [opciones de Apariencia de la pista](../map/tracks/appearance.md). Aquí puede personalizar cómo aparece su pista en el mapa, incluyendo el color, grosor y estilo de la línea. Una vez que guarde una pista con una apariencia personalizada, estos ajustes se conservarán para futuras grabaciones, asegurando la consistencia cada vez que vea o vuelva a activar la pista.

- **Menú de ajustes** (*Android*). Acceda a este menú para ajustar sus preferencias de grabación. Para una descripción detallada, consulte la sección [Ajustes de grabación de viaje](#recording-settings).

- **Recordar mi elección** (*iOS*). Cuando está activado, la grabación de la pista comienza automáticamente, sin solicitar ajustes adicionales o confirmación. Si desea cambiar los ajustes de grabación antes de iniciar una nueva pista, reinicie el complemento Grabación de viaje para que el menú de ajustes vuelva a aparecer.


### Lanzador (Android) {#launcher-android}

![Menú contextual del icono](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icono de Iniciar Grabación](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Puede iniciar rápidamente una nueva grabación de pista directamente desde la pantalla de su dispositivo Android utilizando el menú contextual del icono de la aplicación OsmAnd.

- **Toque prolongado** en el icono de la aplicación OsmAnd para abrir el menú contextual, donde puede encontrar la opción **Iniciar Grabación**.

- Toque la opción **Iniciar Grabación** para iniciar la aplicación OsmAnd con los [ajustes de grabación de pista](#overview-screen) mostrados en la pantalla.

- **Toque prolongado** en la opción **Iniciar Grabación** en el menú contextual del icono de la aplicación, para añadir un acceso directo para un acceso más rápido.

Mientras la grabación de la pista está activa, aparecerá una insignia de notificación en la esquina del icono de la aplicación OsmAnd, indicando que la grabación está en curso. Para más detalles sobre cómo gestionar esta notificación, consulte la sección [Notificación](#notifications).


## Grabación de pista actual {#current-track-recording}

Para *Detener / Guardar / Pausar*:

- Para **Detener** la grabación, toque el botón correspondiente en el cuadro de diálogo del [widget Distancia/Iniciar-Detener](#distance-start-stop).

- (*Solo Android*) Para **Detener** la grabación, toque el elemento del Menú Principal *Grabación de viaje*.

- Para **Detener** o **Guardar** una pista en grabación, vaya a *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*pestaña <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) y toque el botón apropiado en el campo *Pista actualmente en grabación*.

- Para **Guardar, Pausar, Iniciar** un nuevo segmento, o **Finalizar** la grabación, use los botones de [Acción rápida](../widgets/quick-action.md#add-and-delete-actions). Vaya a *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → [Mis lugares](../widgets/quick-action.md#my-places)* y añada uno o más botones de acción rápida.

- (*Solo Android*) Para **Pausar** o **Guardar** una pista en grabación, use la [notificación](#notifications) del sistema en el área de notificaciones de su dispositivo.<br/><br/> ![detener-guardar-pausar](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Pantalla de resumen {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![resumen](@site/static/img/plugins/trip-recording/overview_screen_graphs_new_andr.png)  ![resumen](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finalizar grabación en iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Finalizar grabación en iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_new_ios.png)

</TabItem>

</Tabs>

En OsmAnd, las versiones de **Android** e **iOS** manejan la interfaz de grabación de pistas de manera ligeramente diferente. En Android, encontrará un menú dedicado para el contexto de *Grabación de pista*, mientras que en iOS, esto se simplifica en el menú contextual de *Pista actualmente en grabación*.

A medida que graba una pista, se generan gráficos dinámicos que proporcionan datos visuales en tiempo real sobre su viaje. Estos gráficos pueden reflejar información para toda la ruta o solo para un segmento seleccionado, dependiendo de su nivel de zoom.  
Esto es lo que puede encontrar en ellos:

- **Valores de datos**. En el lado derecho del gráfico se encuentran los valores ***más altos***, ***más bajos*** y ***promedio*** para la sección visible de la pista.

- **Gráfico para información clave**:
    - ***Android***. Para el ***eje Y*** en el gráfico, puede seleccionar *hasta dos parámetros* de todos los datos disponibles como *Altitud*, *Pendiente*, *Velocidad* e [información de sensores externos](../plugins/external-sensors.md#trip-recording). Para el ***eje X***, seleccione mostrar *Distancia*, *Tiempo* o *Hora del día*.
    - ***iOS***. Los parámetros se organizan en pestañas *Resumen*, *Altitud* y *Velocidad* con los valores apropiados para el eje Y y *Distancia* para el eje X.

- **Estadística**. Para Android, muestra un conjunto constante de datos estadísticos independientes de la configuración del gráfico: *Distancia*, *Duración*, *Ascenso*, *Descenso*, *Velocidad promedio*. Para iOS, cada pestaña, Resumen, Altitud y Velocidad, tiene un conjunto de datos diferente.

Para una vista más detallada, puede **escalar el gráfico**:

- Use el [gesto de dos dedos](../map/interact-with-map.md#gestures) para acercar o alejar y enfocarse en intervalos específicos.
- Toque en cualquier punto del gráfico para mostrar un marcador que muestra los valores exactos para esa ubicación.

| |  
| ------------- |
|**Pestaña Resumen** iOS (para Android, los parámetros del eje Y son *Altitud*, *Velocidad*, y el parámetro del eje X es *Distancia*). Esta pestaña muestra un gráfico que presenta los cambios de velocidad y altitud a lo largo de la pista, y detalles clave de la misma. Datos de la pista para iOS: *Distancia*, *Duración*, *Hora de inicio* y *Hora de finalización*. Puede ver cómo se muestra esto en las versiones de Android e iOS a continuación. |
| ![datos](@site/static/img/plugins/trip-recording/graph_overview_new_andr.png)  ![datos](@site/static/img/plugins/trip-recording/graph_overview_new_ios.png) |
| **Pestaña Altitud** iOS (para Android, los parámetros del eje Y son *Altitud*, *Pendiente*, y el parámetro del eje X es *Distancia*). Esta pestaña se centra en el perfil de elevación de su pista grabada, proporcionando información sobre los cambios de altitud y las pendientes del terreno. Las métricas clave para iOS incluyen: *Altitud promedio*, *Rango de altitud*, *Ascenso* y *Descenso*. Los gráficos a continuación ilustran las diferencias entre las interfaces de Android e iOS. |
| ![datos](@site/static/img/plugins/trip-recording/graph_altitude_new_andr.png)  ![datos](@site/static/img/plugins/trip-recording/graph_altitude_new_ios.png) |
| **Pestaña Velocidad** iOS (para Android, el parámetro del eje Y es *Velocidad* y el parámetro del eje X es *Distancia*). La pestaña Velocidad destaca los datos relacionados con la velocidad a lo largo de la pista. Para iOS, incluye información como *Velocidad promedio*, *Velocidad máxima*, *Tiempo en movimiento* y *Distancia corregida*. Las capturas de pantalla a continuación muestran cómo se muestran estos datos en ambas plataformas. |
| ![datos](@site/static/img/plugins/trip-recording/graph_speed_new_andr.png)  ![datos](@site/static/img/plugins/trip-recording/graph_speed_new_ios.png) |
| Para **Android**, puede crear más combinaciones de datos disponibles del eje Y y valores del eje X. |
| ![datos](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Para más detalles, puede explorar el [**Menú contextual de pistas**](../map/tracks/track-context-menu.md#options), donde puede gestionar varias opciones relacionadas con las pistas como renombrar, eliminar o añadir puntos de ruta. Para ajustar cómo aparecen las pistas en el mapa, visite la sección [**Apariencia**](../map/tracks/appearance.md). Si desea añadir puntos de ruta específicos a su pista actual, consulte la guía de [**Puntos de pista**](../map/tracks/track-context-menu.md#points--waypoints). Para cualquier modificación, como renombrar una pista, use la pestaña [**Opciones**](https://osmand.net/docs/user/map/track-context-menu#options) dentro del Menú contextual de pistas.
:::


### Mostrar en el mapa {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configurar pistas del mapa en Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configurar pistas del mapa en iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gestione qué pistas son visibles en su mapa usando una de dos opciones. Vaya a *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*pestaña <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) y active la opción *Mostrar en el mapa* para cualquier pista que desee mostrar u ocultar. Alternativamente, puede ir a *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) para ajustar rápidamente la visibilidad de todas sus pistas en un solo lugar.


### Archivo GPX grabado {#recorded-gpx-file}

OsmAnd captura su viaje en un [archivo GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) estructurado, utilizando una jerarquía de *archivo > pista > segmentos > puntos*. Así es como funciona:

- Los **Puntos** representan momentos individuales de su ruta grabada, cada uno marcado con atributos como coordenadas, velocidad, altitud y rumbo.
- Estos puntos se agrupan para formar **pistas**, que representan su recorrido completo.
- Si hay una interrupción en la grabación (por ejemplo, si el seguimiento se pausó), el siguiente punto después de la interrupción inicia un nuevo **segmento**, marcando la separación en su viaje.
- Tanto los **segmentos** como las **pistas** se representan visualmente con iconos de *Inicio* y *Fin* en el mapa.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parámetro  | Descripción |
|-----------------|----------------|
| `trkpt` | **Punto de pista** representa una ubicación geográfica específica detectada durante su actividad. Cada punto de pista incluye coordenadas de latitud y longitud, formando la base de su ruta grabada. |
| `trkseg`  | **Segmento de pista** agrupa puntos de pista consecutivos, separados por interrupciones en la actividad, como pausas o paradas. Esto ayuda a distinguir el movimiento continuo de los períodos de inactividad dentro de una sola grabación.  |
| `lat` | **Latitud** indica la posición norte-sur de un punto en la superficie de la Tierra. Es la mitad del par de coordenadas utilizado para señalar su ubicación exacta.   |
| `lon` | **Longitud** especifica la posición este-oeste, complementando la latitud, para localizar con precisión un punto en el globo. Juntas, la latitud y la longitud definen su posición geográfica precisa.    |
| `ele` | **Elevación** mide la altura de un punto de pista sobre el nivel del mar, registrada en metros. Esto puede ser útil para seguir los cambios de altitud durante sus actividades, como caminatas o paseos en bicicleta.    |
| `time` | **Marca de tiempo** registra la fecha y hora exactas en que se registra un punto de pista. Esto le permite seguir la duración y el momento de su actividad con precisión.    |
| `hdop` | **Dilución de precisión horizontal (HDOP)** es una medida de la precisión del GPS, que refleja el error potencial en la ubicación debido a las posiciones de los satélites. A diferencia del HDOP estándar, las pistas GPX de OsmAnd utilizan este valor para representar la precisión horizontal en metros. Tenga en cuenta que esta implementación difiere de los estándares típicos de HDOP. [Aprenda más](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Velocidad** registra su tasa de movimiento en metros por segundo. Proporciona información sobre su ritmo durante varios segmentos de su actividad.  |
| `heading`  | **Rumbo** indica la dirección en la que apunta la parte delantera de su vehículo o dispositivo, medida en grados. Es distinto del curso, que es la trayectoria real del movimiento. Las diferencias pueden ocurrir debido a factores externos como el viento, las corrientes o las condiciones de la carretera. [Más sobre el rumbo](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| `speed_sensor` | **Velocidad** de [sensores externos](../plugins/external-sensors.md) captura datos de sensores conectados, proporcionando información de velocidad más precisa, especialmente útil al andar en bicicleta. Para más detalles, consulte la [documentación del formato de archivo GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `cadence` | **Cadencia** mide el número de revoluciones de pedal por minuto, registrado mediante [sensores externos](../plugins/external-sensors.md). Esto es particularmente útil para los ciclistas que buscan monitorear y optimizar su eficiencia de pedaleo. [Leer más](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Potencia de la bicicleta** cuantifica la potencia generada al pedalear, capturada desde [sensores externos](../plugins/external-sensors.md). Es una métrica esencial para los ciclistas serios que desean medir su rendimiento. [Aprenda más](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Temperatura del aire** registra la temperatura ambiente del aire durante su actividad, medida mediante [sensores externos](../plugins/external-sensors.md). Tenga en cuenta que la temperatura del agua no es compatible. [Detalles aquí](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Frecuencia cardíaca** monitorea sus latidos por minuto, utilizando datos de [sensores](../plugins/external-sensors.md) conectados. Esta información puede ser vital para seguir su rendimiento cardiovascular durante los entrenamientos. [Descubra más](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Ajustes de grabación {#recording-settings}

Antes de comenzar a registrar sus viajes, debe configurar correctamente el **complemento Grabación de viaje** para un rendimiento óptimo.

- **Ajustes específicos del perfil**. Cada perfil en la aplicación puede tener sus propios ajustes únicos de Grabación de viaje. Esto le permite personalizar con precisión el comportamiento de la grabación según su actividad, como conducir, andar en bicicleta o incluso caminar nórdico, que pueden requerir diferentes configuraciones.

- **Personalizar parámetros de grabación**. Los ajustes de grabación pueden variar según cómo se mueva. Por ejemplo, conducir largas distancias puede requerir una frecuencia de grabación más baja, mientras que caminar o hacer senderismo podría beneficiarse de actualizaciones más frecuentes.

- **Datos de ubicación precisos**. Para asegurarse de que sus grabaciones sean fluidas y utilizables para uso futuro, puede personalizar la forma en que captura los puntos de ubicación. Esto podría incluir ajustar la frecuencia de grabación, el formato de sus datos (como el número de puntos por unidad de distancia) o el espaciado entre los puntos grabados.

- **Ajustes globales**. Los ajustes de Grabación de viaje se configuran por perfil, que puede gestionar en los [ajustes](../personal/global-settings.md) globales de la aplicación. Antes de personalizar el complemento Grabación de viaje, seleccione el perfil que desea configurar en la sección de [perfiles](../personal/profiles.md). Desde allí, navegue a los ajustes del perfil para acceder a las opciones de Grabación de viaje.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configurando Grabación de viaje en Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Configurando Grabación de viaje en Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurando Grabación de viaje en iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Configurando Grabación de viaje en iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción |
|---|---|
| **Diálogo de optimización de batería** (*Android*) | Abre los [ajustes de optimización de batería de Android](#battery-optimization). Toque *No volver a preguntar* si no desea que se le vuelva a solicitar. |
| **Mostrar diálogo de inicio** (*Android*) | Habilita un diálogo donde puede configurar los ajustes antes de comenzar a grabar. Si está deshabilitado, la grabación comienza automáticamente. |
| **Grabar automáticamente la pista durante la navegación** | Graba automáticamente la pista durante la navegación y la guarda en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Nota*: La grabación de la pista consume batería y continúa ejecutándose en segundo plano, incluso si la pantalla está apagada. |
| **Intervalo de registro general** | Define la frecuencia con la que se registran los puntos de ubicación. El valor predeterminado es de 5 segundos. Se activa con el *widget de Grabación de viaje*. |
| **Desplazamiento mínimo** | Un filtro para evitar registrar puntos cuando hay poco o ningún movimiento. Ayuda a reducir el ruido de los datos.<ul><li>*Efectos secundarios*: Los períodos de descanso pueden no registrarse y los pequeños movimientos pueden ser ignorados. Esto puede reducir los datos de post-procesamiento, pero también puede evitar que se registren errores de GPS.</li><li>*Recomendación*: Establezca el desplazamiento en 5 metros si desea menos detalles menores en sus grabaciones.</li></ul> |
| **Precisión mínima** | Filtra los puntos de ubicación por debajo de un umbral mínimo de indicación de precisión, según lo informado por el dispositivo.<ul><li>*Efectos secundarios*: Pueden faltar puntos en áreas con mala señal (debajo de puentes, árboles, entre edificios o en algunas condiciones climáticas).</li><li>*Recomendación*: Si no está seguro, puede ser mejor deshabilitar este filtro para evitar la pérdida de datos.</li></ul><details><summary>*Observación*</summary>Suponga que el GPS se apagó justo antes de grabar. En ese caso, el primer punto medido puede tener una precisión reducida, por lo que es mejor esperar un poco antes de registrar el punto o registrar el mejor de 3 puntos consecutivos.</details> |
| **Velocidad mínima** | Establece un umbral para ignorar los puntos registrados por debajo de una cierta velocidad.<ul><li>*Efectos secundarios*: Las secciones donde la velocidad cae por debajo de un umbral especificado no se registrarán.</li><li>*Recomendación*: Use el filtro de *Desplazamiento mínimo* en su lugar, ya que puede dar mejores resultados sin perder datos importantes.</li></ul><details><summary>*Observación*</summary>Pruebe primero a usar la detección de movimiento a través del filtro de desplazamiento mínimo de registro (B), puede producir mejores resultados y perderá menos datos. Si sus pistas siguen siendo ruidosas a bajas velocidades, pruebe valores distintos de cero aquí. Tenga en cuenta que algunas mediciones pueden no informar ningún valor de velocidad (algunos métodos basados en la red), en cuyo caso no registraría nada.<br/><br/>Comprobación de Velocidad > 0: La mayoría de los chipsets GPS informan un valor de velocidad solo si el algoritmo determina que está en movimiento, y ninguno si no lo está. Por lo tanto, usar el ajuste > 0 en este filtro en cierto sentido utiliza la detección de movimiento del chipset GPS. Pero incluso si no se filtra aquí en el momento de la grabación, todavía usamos esta característica en nuestro análisis GPX para determinar la Distancia corregida, es decir, el valor que se muestra en ese campo es la distancia registrada mientras se está en movimiento.</details> |
| **Dividir grabaciones automáticamente después de un intervalo** | Divide automáticamente las pistas en función de los intervalos de tiempo entre los puntos registrados. <ul><li>Un nuevo segmento comienza después de un intervalo de 6 minutos.</li><li>Una nueva pista comienza después de un intervalo de 2 horas.</li><li>Un nuevo archivo comienza cuando cambia la fecha.</li><li>Los intervalos pueden ser el resultado de la pérdida de la señal GPS, baja velocidad o ajustes de configuración.</li></ul><details><summary>*Observación*</summary>Se identifica un intervalo cuando no se registran puntos. Esto puede ocurrir porque la ubicación no se detecta o porque se detecta pero no se registra. Varios factores pueden causar esto, incluyendo señales GPS débiles debido a malas condiciones climáticas, o que la velocidad de movimiento caiga por debajo del umbral configurado. En tales casos, aunque el dispositivo pueda detectar la ubicación, no la registra.<br/><br/>Estos intervalos en los datos registrados pueden desencadenar la creación de un nuevo segmento dentro de la misma pista, una nueva pista en el mismo archivo o un nuevo archivo GPX dentro de una grabación. Esto se gestiona dentro de una única sesión de inicio/parada de grabación.</details> |
| **Evitar registro autónomo** (*Android*) | Pausa la grabación de la pista cuando la aplicación OsmAnd se cierra (a través de *aplicaciones recientes*). La indicación de fondo no se muestra en el panel de notificaciones de Android. |
| **Incluir rumbo** | Registra el rumbo (dirección del movimiento) para cada punto en el archivo GPX. El rumbo es la dirección hacia la que mira el dispositivo, que puede diferir de la dirección del movimiento debido a factores externos como el viento o el derrape. |
| **Actividad**  | La opción le permite preseleccionar un [tipo de actividad](../map/tracks/track-context-menu.md#ttrack-activity-type) para un perfil, que luego se aplica automáticamente a todas las pistas grabadas. |
| **Sensores externos** <br/> *Necesita complemento activado* | Los datos de [sensores externos](../plugins/external-sensors.md#trip-recording) como *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, o *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* se registran en el archivo GPX. Los datos de *Distancia* no se registran en Android o iOS. Se muestra solo cuando el [complemento Sensores externos](../plugins/external-sensors.md) está activado. |
| **Métricas del vehículo** <br/> *Necesita complemento activado* | Los datos del [escáner OBD-II](../plugins/vehicle-metrics.md#trip-recording) se registran en el archivo GPX. Se muestra solo cuando el [complemento Métricas del vehículo](../plugins/vehicle-metrics.md) está activado.<br />*Nota*: Puede añadir qué métricas registrar en el archivo GPX desde la lista: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Carpeta de almacenamiento de pistas** (*Android*) | Define dónde se almacenan las pistas grabadas en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. Las opciones incluyen almacenar todas las pistas en la carpeta Rec u organizarlas por mes, como Rec/aaaa-mm. |
| **Notificación** | Controla la visualización de una notificación del sistema de [grabación de viaje](#notifications) en el área de notificaciones del dispositivo que le permite comenzar a grabar viajes. |
| **Seguimiento en línea** (*Android*) | Permite el seguimiento en tiempo real de su ubicación enviando los puntos grabados a una URL especificada. El intervalo de seguimiento determina la frecuencia con la que se envían los puntos, y el búfer de tiempo almacena los puntos cuando no hay conexión a Internet.<details><summary>*Observación*</summary>Si esta opción está activada y la grabación de la pista está en curso, el widget Distancia/Iniciar-Detener (REC) se vuelve **verde** en lugar de **rojo**, lo que indica que cada punto grabado se está transmitiendo a una URL especificada. El campo **Dirección web** le permite introducir la URL utilizando el siguiente formato de parámetro:<ul><li>`lat={0}`: Latitud</li><li>`lon={1}`: Longitud</li><li>`timestamp={2}`: Marca de tiempo (hora Unix)</li><li>`hdop={3}`: Dilución de precisión horizontal</li><li>`altitude={4}`: Altitud</li><li>`speed={5}`: Velocidad</li><li>`bearing={6}`: Rumbo (dirección del movimiento)</li><li>`eta={7}`: Hora estimada de llegada (hora Unix)</li><li>`etfa={8}`: Tiempo estimado hasta el primer punto intermedio o punto final (hora Unix)</li><li>`eda={9}`: Distancia estimada hasta la llegada o un marcador (en metros)</li><li>`edfa={10}`: Distancia estimada hasta el primer punto intermedio o punto final (en metros)</li></ul>Puede establecer el **Intervalo de seguimiento** para especificar la frecuencia con la que se envían los puntos de ubicación, con opciones que van desde 0 segundos hasta 5 minutos. Además, el parámetro **Búfer de tiempo** determina cuánto tiempo se almacenan los puntos de ubicación si no hay conexión a Internet, asegurando que los datos se guarden y transmitan cuando se restablezca la conexión.</details><br />OsmAnd almacena los puntos de ubicación no enviados solo en la memoria temporal de la aplicación mientras la aplicación está en ejecución. Esto significa que el búfer no se escribe en el almacenamiento permanente. Si la aplicación se cierra, se detiene a la fuerza o el dispositivo se reinicia, todos los puntos en búfer se pierden.<br />La configuración de Búfer de tiempo no define cuánto tiempo se mantienen los puntos en memoria — solo funciona como un filtro en el momento de la carga. Cuando OsmAnd intenta enviar puntos en búfer, cada punto se verifica contra el límite de Búfer de tiempo. Los puntos más antiguos que el límite seleccionado (por ejemplo, 24 horas) se eliminan en lugar de ser cargados. Como resultado, el búfer puede contener temporalmente puntos más antiguos que el valor de Búfer de tiempo elegido, pero estos puntos se descartarán durante el proceso de carga. |
| **Pistas** | Una referencia rápida a la carpeta donde se guardan las pistas en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Restablecer la configuración del complemento a los valores predeterminados** | Restablece todos los ajustes de grabación de viaje para el perfil actual a sus valores predeterminados. |
| **Copiar desde otro perfil** (*Android*) | Copia los ajustes de grabación de viaje de un perfil a otro. |


### Optimización de la batería {#battery-optimization}

<InfoAndroidOnly />

![Pista en el mapa iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Pista en el mapa iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

Esta función le permite gestionar los ajustes de optimización de la batería para OsmAnd para garantizar un acceso ininterrumpido a su ubicación, incluso cuando la aplicación se ejecuta en segundo plano durante la navegación o la grabación de pistas.

- **Ajustes de optimización de la batería**. Abre los ajustes de Android, donde puede modificar las preferencias de ahorro de batería para OsmAnd. [Más detalles aquí](../troubleshooting/general.md#optimizing-battery-consumption).
- **No volver a preguntar**. Descarta el cuadro de diálogo permanentemente, para que no vuelva a aparecer.
- **Cerrar**. Cierra temporalmente el cuadro de diálogo, que volverá a aparecer la próxima vez que la optimización de la batería necesite atención.


### Notificaciones {#notifications}

![Notificación de Grabación de Viaje](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

Si la [Notificación](#recording-settings) está activada en los ajustes del complemento, las notificaciones de grabación de viaje siempre se mostrarán en el área de notificaciones del sistema cuando la grabación esté activa. Esta notificación garantiza que el proceso de grabación no sea interrumpido por el sistema y no se puede desactivar durante una grabación activa.

- El área de notificaciones se abre al deslizar hacia abajo desde la parte superior de la pantalla y se cierra al deslizar hacia arriba. Estos mensajes le notifican acciones como iniciar/detener la grabación de viaje, especialmente cuando la grabación automática está activada durante la navegación.
- Las notificaciones permanecen visibles independientemente de si la aplicación se está ejecutando en primer plano, en segundo plano o está cerrada. Puede borrar manualmente la notificación antigua si ya no es necesaria, pero esto no detendrá la grabación en curso.

**Nota importante**.

Este comportamiento es requerido por Android para que cualquier servicio en primer plano, como la grabación de viaje, permanezca visible para usted.

- Si se elimina la notificación, Android detendrá automáticamente la grabación. Puede usar el ajuste [Evitar registro autónomo](#recording-settings).
- El ajuste **Notificación** en OsmAnd afecta si la barra de notificaciones muestra un acceso directo para iniciar una grabación cuando no hay ninguna grabación activa. **No** controla la visibilidad de la notificación durante una grabación activa.

**Opciones adicionales de Android**.

![Notificación de Grabación de Viaje](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- En ***Ajustes de Android → Notificaciones y barra de estado → Notificaciones de pantalla de bloqueo***, puede eliminar OsmAnd de la lista de aplicaciones para evitar que las notificaciones aparezcan en la pantalla de bloqueo, evitando la activación accidental de la pantalla. Esto no afectará la grabación de la pista. Las notificaciones seguirán apareciendo en el área de notificaciones regular.
- **OsmAnd** también puede aparecer en ***Privacidad → Permisos especiales → Encender pantalla***. Si desea evitar que la pantalla se encienda cuando aparece una notificación, intente eliminar OsmAnd de esta lista.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Notificación de insignia**.

![Notificación de insignia de Grabación de Viaje](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

La insignia del icono de la aplicación aparece junto al icono de OsmAnd cuando la grabación de la pista está activa.

- Este icono desaparece cuando se completa la grabación de la pista. Para verificar si una grabación está activa, puede ir a *Menú → Mis lugares → Pestaña Pistas* o tocar el widget para gestionar la grabación.  
- Si no hay ninguna grabación en curso y la insignia todavía se muestra, puede significar que se ha dejado un mensaje de OsmAnd en el panel de notificaciones del dispositivo.  
- Para desactivar las insignias en los ajustes de Android, vaya a *Ajustes del dispositivo → Aplicaciones → OsmAnd → Notificaciones* y desactive la opción de visualización de insignias para esta aplicación.


## Widgets {#widgets}

Los widgets le permiten mostrar información clave sobre la grabación de la pista directamente en la pantalla, como *Distancia*, *Duración*, *Ascenso* y *Descenso*. También puede añadir widgets de *Velocidad máxima* y *Pendiente promedio*.

Para comenzar a usar los *widgets de Grabación de viaje*, debe realizar todos los siguientes ajustes:

1. [Activar el complemento](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurar los ajustes de grabación de viaje para el [perfil](../personal/profiles.md) requerido.
3. Añadir los **widgets de Grabación de viaje** necesarios a la pantalla. Tenga en cuenta que esta configuración es **específica para cada perfil**.


### Añadir widget de grabación {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elija un panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Añadiendo widget Distancia/Iniciar-Detener en Android](@site/static/img/plugins/trip-recording/add_widg_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elija un panel → <Translate android="true" ids="map_widget_monitoring"/>*  

![Añadiendo widget Distancia/Iniciar-Detener en iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios_2_new.png)

</TabItem>

</Tabs>

El [widget de Grabación de viaje](../widgets/info-widgets.md#trip-recording-widgets) proporciona una manera fácil de monitorear el estado de su grabación y acceder rápidamente a los ajustes y detalles de la grabación. Este widget se añade automáticamente a su pantalla cuando se activa el complemento Grabación de viaje.

Para personalizar su interfaz, puede añadir o eliminar el widget de Grabación de viaje y [otros widgets](../plugins/trip-recording#duration-uphill-downhill) a través del menú Configurar pantalla.


### Distancia (Iniciar-Detener) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Finalizar grabación en Android](@site/static/img/plugins/trip-recording/distance_start_rec_new_andr.png)
![Widget de grabación de viaje](@site/static/img/plugins/trip-recording/trip_rec_widgets_mode.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de grabación de viaje](@site/static/img/widgets/tr_rec_wid_conf_scr_new.png) ![Widget de grabación de viaje](@site/static/img/widgets/tr_rec_wid_conf_scr_2_new.png)

</TabItem>

</Tabs>  

Cuando los widgets se muestran en el mapa, tocar cualquiera de ellos revela detalles adicionales de la pista y permite interactuar con la grabación.
El widget *Distancia* muestra la distancia total de su viaje grabado actual y actúa como la interfaz principal para gestionar sus grabaciones. Al tocarlo, se revela el [diálogo de Grabación de viaje](#start-a-dialog), donde puede iniciar, detener y ver información detallada sobre su pista.

- El widget se añade automáticamente cuando se activa el *complemento Grabación de viaje*, pero se puede ocultar a través del [menú Configurar pantalla](../widgets/configure-screen.md#overview).
- Si la opción *Mostrar diálogo de inicio* está desactivada en los ajustes del complemento Grabación de viaje, al tocar el widget activo se abrirá igualmente el cuadro de diálogo *Grabación de viaje*, lo que le permitirá acceder a más opciones e información.  

Además del widget *Distancia/Iniciar-Detener*, el **complemento Grabación de viaje** incluye otros cinco widgets: *Duración*, *Ascenso*, *Descenso*, *Velocidad máxima* y *Pendiente promedio*. Estos proporcionan información adicional sobre su viaje, ayudándole a seguir el progreso en tiempo real.

| |
|-----------|
| **Distancia/Iniciar-Detener**. Este widget muestra la distancia de su grabación de viaje en curso. Se añade automáticamente cuando se activa el complemento Grabación de viaje, pero puede ocultarlo a través del menú Configurar pantalla. El widget presenta tres estados distintos: *Grabando*, *Pausado* e *Inactivo*, cada uno indicando el estado actual de su grabación de viaje. |
| ![Widget de grabación de viaje (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Para abrir el [diálogo de Grabación de viaje](#start-a-dialog) al tocar un widget inactivo, active la opción *Mostrar diálogo de inicio* en los ajustes del complemento Grabación de viaje. Si la opción está desactivada, la grabación comenzará inmediatamente después de tocar el widget sin abrir el diálogo.| 

El widget Distancia admite varios modos de visualización:
- **Distancia total** – distancia total de la grabación actual (predeterminado).
- **Último ascenso** – distancia de la sección de ascenso más reciente.
- **Último descenso** – distancia de la sección de descenso más reciente.


### Duración, Ascenso, Descenso {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| |
|------------|
|**Duración**. Muestra el tiempo total de la grabación del viaje actual en horas y minutos. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Ascenso**. Muestra el ascenso total o la última sección de ascenso, dependiendo del modo seleccionado. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Descenso**. Indica el descenso total o la última sección de descenso, dependiendo del modo seleccionado. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

| |
|------------|
|**Duración**. Muestra el tiempo total de la grabación del viaje actual en horas y minutos. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Ascenso**. Muestra el ascenso total o la última sección de ascenso, dependiendo del modo seleccionado. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Descenso**. Indica el descenso total o la última sección de descenso, dependiendo del modo seleccionado. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

</Tabs>

Si tiene varios widgets seleccionados — *Duración*, *Ascenso* o *Descenso* — puede acceder al mismo cuadro de diálogo para cada uno sin necesidad de cambiarlo o cerrarlo. Esta interfaz unificada facilita la visualización y gestión de toda la información relacionada sin problemas.

### Velocidad máxima y Pendiente promedio {#max-speed--average-slope}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Velocidad máxima en Android](@site/static/img/widgets/max_speed_android.png) ![Pendiente promedio en Android](@site/static/img/widgets/average_slope_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Velocidad máxima en iOS](@site/static/img/widgets/max_speed_ios.png) ![Pendiente promedio en iOS](@site/static/img/widgets/average_slope_ios.png) 

</TabItem>

</Tabs> 

El widget **Velocidad máxima** muestra la velocidad máxima para el viaje grabado actualmente. Toque el widget para alternar entre la velocidad máxima general y la velocidad máxima de la última sección de ascenso o descenso.

El widget **Pendiente promedio** muestra la pendiente promedio para la última sección de ascenso o descenso del viaje actual. Ayuda a estimar qué tan empinada fue la subida o bajada anterior, basada en la ganancia de elevación y la distancia.


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](../map/map-context-menu.md)
- [Mostrar pista en el mapa](../map/tracks/index.md)
- [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de la pista](../map/tracks/track-context-menu.md)
- [Navegación por pista](../navigation/setup/gpx-navigation.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

- La grabación de viaje no se inicia.
    - Asegúrese de que el **complemento Grabación de viaje** esté activado: *Menú → Complementos → Grabación de viaje → Activar*.
    - Verifique que los ajustes sean correctos: *Menú → Configurar perfil → Ajustes de complementos → Grabación de viaje*.
    - Si la grabación aún no se inicia, reinicie la aplicación e intente de nuevo.

- La grabación de viaje se detiene inesperadamente.
    - Verifique si los *ajustes de optimización de la batería de su dispositivo* están deteniendo la grabación. Algunos dispositivos pueden pausar la actividad en segundo plano para ahorrar energía. Vaya a *Ajustes del dispositivo → Batería*.

- La distancia grabada no coincide con la distancia real.
    - Verifique que el GPS esté activado y tenga una señal activa.  
    - Reduzca el umbral de precisión del GPS: *Menú → Configurar perfil → Grabación de viaje → Precisión mínima*.

- Las pistas grabadas son ruidosas. [(verificar)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Las pistas grabadas tienen huecos. [(verificar)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Cómo registrar la distancia recorrida. [(verificar)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Para solucionar problemas adicionales, visite: [Solución de problemas de grabación de pistas](https://osmand.net/docs/user/troubleshooting/track-recording-issues).