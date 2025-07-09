---
source-hash: cbb0cf4d59d01946eeabdc12f73feec5aec68b5a7434c67e7ceb082189d83310
sidebar_position: 15
title:  Grabación de Viajes
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

El **plugin de Grabación de Viajes** es una herramienta esencial para capturar tus rutas, movimientos y entrenamientos. Esta función no solo te permite grabar tus viajes, sino que también facilita la reutilización, modificación, actualización y el intercambio de tus rutas con otros.

Con el *plugin de Grabación de Viajes*, puedes crear nuevas rutas, mostrar las grabadas directamente en el mapa y gestionar los registros existentes. Ofrece información valiosa sobre tus viajes, como la velocidad, los cambios de elevación, los detalles del terreno y los datos de sensores externos. El plugin graba tu ruta, lo que permite un análisis detallado y compartirla después de tu viaje.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Viaje grabado en Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Viaje grabado en iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para empezar a grabar rutas, debes realizar los siguientes ajustes:

1. [Habilitar](../plugins/index.md#enable--disable) el **plugin de Grabación de Viajes**.
2. [Configurar](#recording-settings) los **ajustes de grabación** para el [perfil](../personal/profiles.md) requerido.
3. [Añadir](#widgets) **widgets de Grabación de Viajes** a la pantalla (opcional).
4. [Gestionar](../map/tracks/appearance.md) rutas en el mapa (opcional).


## Grabación de nueva ruta {#new-track-recording}

![Widget de Distancia/Inicio-Parada en iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget de Distancia/Inicio-Parada en Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Con el plugin de Grabación de Viajes en OsmAnd, puedes iniciar fácilmente la grabación de tu ruta utilizando una variedad de opciones convenientes. Así es como puedes comenzar tu viaje:

- [Widget de Distancia/Inicio-Parada](#distance-start-stop) — Se utiliza para activar la grabación.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Pulsa el botón en la *pestaña Principal <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Botones de [Acción Rápida](../widgets/quick-action.md#add-and-delete-actions) — Para iniciar la grabación de un viaje, ve a *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → Mis Lugares* y elige [Iniciar/Pausar: Grabación de viaje](../widgets/quick-action.md#my-places).

- *Solo Android*:
    - Ve a *Principal <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Notificación del sistema](#notifications) — Utiliza en el área de notificación de tu dispositivo.

    - [Lanzador de aplicaciones](#launcher-android) — Utiliza para iniciar la grabación.

**Recomendaciones:**

- [Ubicación precisa](../start-with/first-steps.md#permission-to-access-the-location) — Para una grabación precisa de la ruta, asegúrate de que OsmAnd tenga este permiso.

- [Solución de problemas](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — Los **dispositivos iOS** a veces pueden **suspender o detener temporalmente las aplicaciones** que se ejecutan en segundo plano, lo que podría interrumpir la grabación de la ruta.

- **Fuente de ubicación** (*solo Android*) — Ajusta la configuración en OsmAnd para elegir el proveedor de GPS más adecuado para grabaciones precisas. [Más información aquí](../personal/global-settings.md#location-source).


### Iniciar un diálogo {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

El diálogo de inicio se abre si la opción **<Translate android="true" ids="show_start_dialog"/>** está habilitada en la sección de configuración del cuadro de diálogo de inicio.

![Iniciar grabación en Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

El diálogo de inicio se abre si la opción **<Translate ios="true" ids="track_interval_remember"/>** no está activada.

![Iniciar grabación en iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervalo de registro** (*Android/iOS*). Esta configuración controla la frecuencia con la que la aplicación solicita datos del sensor GPS para marcar nuevos puntos en tu ruta. Ajustar el intervalo te permite equilibrar el detalle de la ruta y el uso de la batería. Un intervalo más corto resultará en rutas más detalladas pero un mayor consumo de batería, mientras que un intervalo más largo conserva la batería pero reduce la precisión de la ruta.

- **Icono de línea** (*Android*). Pulsa este icono para acceder a las [opciones de Apariencia de la ruta](../map/tracks/appearance.md). Aquí, puedes personalizar cómo aparece tu ruta en el mapa, incluyendo el color de la línea, el grosor y el estilo. Una vez que guardes una ruta con una apariencia personalizada, estos ajustes se conservarán para futuras grabaciones, asegurando la coherencia cada vez que veas o vuelvas a habilitar la ruta.

- **Menú de configuración** (*Android*). Accede a este menú para ajustar tus preferencias de grabación. Para una descripción detallada, consulta la sección [Configuración de Grabación de Viajes](#recording-settings).

- **Recordar mi elección** (*iOS*). Cuando está habilitado, la grabación de la ruta comienza automáticamente, sin solicitar configuraciones o confirmaciones adicionales. Si deseas cambiar la configuración de grabación antes de iniciar una nueva ruta, reinicia el plugin de Grabación de Viajes para que el menú de configuración vuelva a aparecer.


### Lanzador (Android) {#launcher-android}

![Menú contextual del icono](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icono de Iniciar Grabación](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Puedes iniciar rápidamente una nueva grabación de ruta directamente desde la pantalla de tu dispositivo Android utilizando el menú contextual del icono de la aplicación OsmAnd.

- **Mantén pulsado** el icono de la aplicación OsmAnd para abrir el menú contextual, donde puedes encontrar la opción **Iniciar Grabación**.

- Pulsa la opción **Iniciar Grabación** para iniciar la aplicación OsmAnd con la [configuración de grabación de ruta](#overview-screen) mostrada en la pantalla.

- **Mantén pulsado** la opción **Iniciar Grabación** en el menú contextual del icono de la aplicación, para añadir un acceso directo para un acceso más rápido.

Mientras la grabación de la ruta está activa, aparecerá una insignia de notificación en la esquina del icono de la aplicación OsmAnd, indicando que la grabación está en curso. Para obtener más detalles sobre cómo gestionar esta notificación, consulta la sección [Notificación](#notifications).


## Grabación de ruta actual {#current-track-recording}

Para *Detener / Guardar / Pausar*:

- Para **Detener** la grabación, pulsa el botón correspondiente en el cuadro de diálogo del [widget de Distancia/Inicio-Parada](#distance-start-stop).

- (*Solo Android*) Para **Detener** la grabación, pulsa el elemento del Menú Principal *Grabación de viaje*.

- Para **Detener** o **Guardar** una ruta de grabación, ve a *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> pestaña*](../personal/myplaces.md#tracks) y pulsa el botón apropiado en el campo *Ruta actualmente en grabación*.

- Para **Guardar, Pausar, Iniciar** un nuevo segmento o **Finalizar** la grabación, utiliza los botones de [Acción Rápida](../widgets/quick-action.md#add-and-delete-actions). Ve a *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → [Mis Lugares](../widgets/quick-action.md#my-places)* y añade uno o más botones de acción rápida.

- (*Solo Android*) Para **Pausar** o **Guardar** una ruta de grabación, utiliza la [notificación](#notifications) del sistema en el área de notificación de tu dispositivo.<br/><br/> ![detener-guardar-pausar](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Pantalla de resumen {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![resumen](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![resumen](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finalizar grabación en iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Finalizar grabación en iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

En OsmAnd, las versiones de **Android** e **iOS** manejan la interfaz de grabación de rutas de forma ligeramente diferente. En Android, encontrarás un menú dedicado para el contexto de *Grabación de rutas*, mientras que en iOS, esto se simplifica en el menú contextual de *Ruta actualmente en grabación*.

A medida que grabas una ruta, se generan gráficos dinámicos que proporcionan datos visuales en tiempo real sobre tu viaje. Estos gráficos pueden reflejar información para toda la ruta o solo para un segmento seleccionado, dependiendo de tu nivel de zoom.
Esto es lo que puedes encontrar en ellos:

- **Valores de datos**. En el lado derecho del gráfico se encuentran los valores ***más altos***, ***más bajos*** y ***promedio*** para la sección visible de la ruta.

- **Gráfico para información clave**:
    - ***Android***. Para el ***eje Y*** en el gráfico, puedes seleccionar *hasta dos parámetros* de todos los datos disponibles, como *Altitud*, *Pendiente*, *Velocidad* e [información de sensores externos](../plugins/external-sensors.md#trip-recording). Para el ***eje X***, selecciona para mostrar *Distancia*, *Tiempo* o *Hora del día*.
    - ***iOS***. Los parámetros se organizan en pestañas *Resumen*, *Altitud* y *Velocidad* con los valores apropiados para el eje Y y *Distancia* para el eje X.

- **Estadísticas**. Para Android, muestra un conjunto constante de datos estadísticos independientes de la configuración del gráfico: *Distancia*, *Período de tiempo*, *Ascenso*, *Descenso*, *Velocidad promedio*. Para iOS, cada pestaña, Resumen, Actitud y Velocidad, tiene un conjunto de datos diferente.

Para una vista más detallada, puedes **escalar el gráfico**:

- Utiliza el [gesto de dos dedos](../map/interact-with-map.md#gestures) para acercar o alejar y centrarte en intervalos específicos.
- Pulsa en cualquier punto del gráfico para mostrar un marcador que muestre los valores exactos para esa ubicación.

| |
| ------------- |
| Pestaña **Resumen** iOS (para Android, los parámetros del eje Y son *Altitud*, *Velocidad*, y el parámetro del eje X es *Distancia*). Esta pestaña muestra un gráfico que presenta los cambios en la velocidad y la altitud a lo largo de la ruta, y los detalles clave de la ruta. Datos de la ruta para iOS: *Distancia*, *Período de tiempo*, *Hora de inicio* y *Hora de finalización*. Puedes ver cómo se muestra esto en las versiones de Android e iOS a continuación. |
| ![datos](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![datos](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| Pestaña **Altitud** iOS (para Android, los parámetros del eje Y son *Altitud*, *Pendiente*, y el parámetro del eje X es *Distancia*). Esta pestaña se centra en el perfil de elevación de tu ruta grabada, proporcionando información sobre los cambios de altitud y las pendientes del terreno. Las métricas clave para iOS incluyen: *Altitud promedio*, *Rango de altitud*, *Ascenso* y *Descenso*. Los gráficos a continuación ilustran las diferencias entre las interfaces de Android e iOS. |
| ![datos](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![datos](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| Pestaña **Velocidad** iOS (para Android, el parámetro del eje Y es *Velocidad* y el parámetro del eje X es *Distancia*). La pestaña Velocidad destaca los datos relacionados con la velocidad a lo largo de la ruta. Para iOS, incluye información como *Velocidad promedio*, *Velocidad máxima*, *Tiempo en movimiento* y *Distancia corregida*. Las capturas de pantalla a continuación muestran cómo se muestran estos datos en ambas plataformas. |
| ![datos](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![datos](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Para **Android**, puedes crear más combinaciones de datos del eje Y y valores del eje X disponibles. |
| ![datos](@site/static/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Para obtener más detalles, puedes explorar el [**Menú contextual de rutas**](../map/tracks/track-context-menu.md#options), donde puedes gestionar varias opciones relacionadas con las rutas, como renombrar, eliminar o añadir puntos de referencia. Para ajustar cómo aparecen las rutas en el mapa, visita la sección [**Apariencia**](../map/tracks/appearance.md). Si deseas añadir puntos de referencia específicos a tu ruta actual, consulta la guía [**Puntos de ruta**](../map/tracks/track-context-menu.md#points--waypoints). Para cualquier modificación, como renombrar una ruta, utiliza la pestaña [**Opciones**](https://osmand.net/docs/user/map/track-context-menu#options) dentro del Menú contextual de rutas.
:::


### Mostrar en el mapa {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![mostrar_tr_enmapa_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configurar rutas del mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![mostrar_tr_enmapa_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configurar rutas del mapa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gestiona qué rutas son visibles en tu mapa utilizando una de las dos opciones. Ve a *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> pestaña*](../map/tracks/index.md#my-places) y habilita la opción *Mostrar en el mapa* para cualquier ruta que desees mostrar u ocultar. Alternativamente, puedes ir a *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) para ajustar rápidamente la visibilidad de todas tus rutas en un solo lugar.


### Archivo GPX grabado {#recorded-gpx-file}

OsmAnd captura tu viaje en un [archivo GPX](https://es.wikipedia.org/wiki/GPX) estructurado, utilizando una jerarquía de *archivo > ruta > segmentos > puntos*. Así es como funciona:

- Los **Puntos** representan momentos individuales de tu ruta grabada, cada uno marcado con atributos como coordenadas, velocidad, altitud y rumbo.
- Estos puntos se agrupan para formar **rutas**, que representan tu ruta completa.
- Si hay una interrupción en la grabación (por ejemplo, si el seguimiento se pausó), el siguiente punto después de la interrupción inicia un nuevo **segmento**, marcando la separación en tu viaje.
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

![Archivo GPX de una ruta grabada](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png) -->


| Parámetro | Descripción |
|---|---|
| `trkpt` | **Punto de ruta** representa una ubicación geográfica específica detectada durante tu actividad. Cada punto de ruta incluye coordenadas de latitud y longitud, formando la base de tu ruta grabada. |
| `trkseg` | **Segmento de ruta** agrupa puntos de ruta consecutivos, separados por interrupciones en la actividad, como pausas o paradas. Esto ayuda a distinguir el movimiento continuo de los períodos de inactividad dentro de una sola grabación. |
| `lat` | La **Latitud** indica la posición norte-sur de un punto en la superficie de la Tierra. Es la mitad del par de coordenadas utilizado para determinar tu ubicación exacta. |
| `lon` | La **Longitud** especifica la posición este-oeste, complementando la latitud, para localizar con precisión un punto en el globo. Juntas, la latitud y la longitud definen tu posición geográfica precisa. |
| `ele` | La **Elevación** mide la altura de un punto de ruta sobre el nivel del mar, registrada en metros. Esto puede ser útil para rastrear los cambios de altitud durante tus actividades, como caminatas o paseos en bicicleta. |
| `time` | La **Marca de tiempo** registra la fecha y hora exactas en que se registra un punto de ruta. Esto te permite rastrear la duración y el tiempo de tu actividad con precisión. |
| `hdop` | La **Dilución Horizontal de la Precisión (HDOP)** es una medida de la precisión del GPS, que refleja el error potencial en la ubicación debido a las posiciones de los satélites. A diferencia del HDOP estándar, las rutas GPX de OsmAnd utilizan este valor para representar la precisión horizontal en metros. Ten en cuenta que esta implementación difiere de los estándares típicos de HDOP. [Más información](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | La **Velocidad** registra tu tasa de movimiento en metros por segundo. Proporciona información sobre tu ritmo durante varios segmentos de tu actividad. |
| `heading` | El **Rumbo** indica la dirección en la que apunta tu vehículo o dispositivo, medido en grados. Es distinto del curso, que es la trayectoria real del movimiento. Pueden ocurrir diferencias debido a factores externos como el viento, las corrientes o las condiciones de la carretera. [Más sobre el rumbo](https://es.wikipedia.org/wiki/Rumbo_(navegaci%C3%B3n)). |
| `speed_sensor` | La **Velocidad** de [sensores externos](../plugins/external-sensors.md) captura datos de sensores conectados, proporcionando información de velocidad más precisa, especialmente útil al andar en bicicleta. Para obtener más detalles, consulta la [documentación del formato de archivo GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | La **Cadencia** mide el número de revoluciones del pedal por minuto, registrada utilizando [sensores externos](../plugins/external-sensors.md). Esto es particularmente útil para los ciclistas que desean monitorear y optimizar su eficiencia de pedaleo. [Más información](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | La **Potencia de la bicicleta** cuantifica la potencia generada al pedalear, capturada de [sensores externos](../plugins/external-sensors.md). Es una métrica esencial para los ciclistas serios que desean medir su rendimiento. [Más información](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | La **Temperatura del aire** registra la temperatura ambiente durante tu actividad, medida utilizando [sensores externos](../plugins/external-sensors.md). Ten en cuenta que la temperatura del agua no es compatible. [Detalles aquí](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | La **Frecuencia cardíaca** monitorea tus latidos por minuto, utilizando datos de [sensores](../plugins/external-sensors.md) conectados. Esta información puede ser vital para rastrear tu rendimiento cardiovascular durante los entrenamientos. [Más información](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Ajustes de grabación {#recording-settings}

Antes de empezar a rastrear tus viajes, debes configurar correctamente el **plugin de Grabación de Viajes** para un rendimiento óptimo.

- **Configuración específica del perfil**. Cada perfil en la aplicación puede tener su propia configuración única de Grabación de Viajes. Esto te permite personalizar con precisión el comportamiento de grabación según tu actividad, como conducir, andar en bicicleta o incluso caminar nórdico, lo que podría requerir diferentes configuraciones.

- **Personalizar parámetros de grabación**. La configuración de grabación puede variar según cómo te muevas. Por ejemplo, conducir largas distancias podría requerir una frecuencia de grabación más baja, mientras que caminar o hacer senderismo podría beneficiarse de actualizaciones más frecuentes.

- **Datos de ubicación precisos**. Para garantizar que tus grabaciones sean fluidas y utilizables para uso futuro, puedes personalizar la forma en que capturas los puntos de ubicación. Esto podría incluir ajustar la frecuencia de grabación, el formato de tus datos (como el número de puntos por unidad de distancia) o el espaciado entre los puntos grabados.

- **Configuración global**. La configuración de Grabación de Viajes se configura por perfil, que puedes gestionar en la [configuración global](../personal/global-settings.md) de la aplicación. Antes de personalizar el plugin de Grabación de Viajes, selecciona el perfil que deseas configurar en la sección de [perfiles](../personal/profiles.md). Desde allí, navega a la configuración del perfil para acceder a las opciones de Grabación de Viajes.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configurando la grabación de viajes en Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Configurando la grabación de viajes en Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurando la grabación de viajes en iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Configurando la grabación de viajes en iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción |
|---|---|
| **Diálogo de optimización de batería** (*Android*) | Abre la [configuración de optimización de batería de Android](#battery-optimization). Pulsa *No volver a preguntar* si no quieres que se te pregunte de nuevo. |
| **Mostrar diálogo de inicio** (*Android*) | Habilita un diálogo donde puedes configurar los ajustes antes de iniciar la grabación. Si está deshabilitado, la grabación se inicia automáticamente. |
| **Grabar ruta automáticamente durante la navegación** | Graba automáticamente la ruta durante la navegación y la guarda en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Nota*: La grabación de rutas consume batería y continúa ejecutándose en segundo plano, incluso si la pantalla está apagada. |
| **Intervalo de registro general** | Define la frecuencia con la que se registran los puntos de ubicación. El valor predeterminado es de 5 segundos. Se habilita con el *widget de Grabación de Viajes*. |
| **Desplazamiento mínimo** | Un filtro para evitar grabar puntos cuando hay poco o ningún movimiento. Ayuda a reducir el ruido de los datos. <ul><li>*Efectos secundarios*: Los períodos de descanso pueden no ser grabados, y los pequeños movimientos pueden ser ignorados. Esto puede reducir los datos de post-procesamiento, pero también puede evitar que se registren errores de GPS.</li><li>*Recomendación*: Establece el desplazamiento en 5 metros si quieres menos detalles menores en tus grabaciones.</li></ul> |
| **Precisión mínima** | Filtra los puntos de ubicación por debajo de un umbral de indicación de precisión mínima, según lo informado por el dispositivo. <ul><li>*Efectos secundarios*: Los puntos en áreas con poca señal (debajo de puentes, árboles, entre edificios o en algunas condiciones climáticas) pueden faltar.</li><li>*Recomendación*: Si no estás seguro, puede ser mejor deshabilitar este filtro para evitar la pérdida de datos.</li></ul><details><summary>*Observación*</summary>Supongamos que el GPS se apagó justo antes de la grabación. En ese caso, el primer punto medido puede tener una precisión reducida, por lo que es mejor esperar un poco antes de grabar el punto o grabar el mejor de 3 puntos consecutivos.</details> |
| **Velocidad mínima** | Establece un umbral para ignorar los puntos registrados por debajo de una cierta velocidad. <ul><li>*Efectos secundarios*: Las secciones donde la velocidad cae por debajo de un umbral especificado no se registrarán.</li><li>*Recomendación*: Utiliza el filtro de *Desplazamiento mínimo* en su lugar, ya que puede dar mejores resultados sin perder datos importantes.</li></ul><details><summary>*Observación*</summary>Intenta usar primero la detección de movimiento a través del filtro de desplazamiento mínimo de registro (B), puede producir mejores resultados y perderás menos datos. Si tus rutas siguen siendo ruidosas a bajas velocidades, prueba valores distintos de cero aquí. Ten en cuenta que algunas mediciones pueden no reportar ningún valor de velocidad (algunos métodos basados en red), en cuyo caso no grabarías nada.<br/><br/>Verificación de Velocidad > 0: La mayoría de los chipsets GPS reportan un valor de velocidad solo si el algoritmo determina que estás en movimiento, y ninguno si no lo estás. Por lo tanto, usar la configuración > 0 en este filtro, en cierto sentido, utiliza la detección de movimiento del chipset GPS. Pero incluso si no se filtra aquí en el momento de la grabación, seguimos utilizando esta función en nuestro análisis GPX para determinar la Distancia corregida, es decir, el valor que se muestra en ese campo es la distancia registrada mientras se está en movimiento.</details> |
| **Dividir grabaciones automáticamente después de una interrupción** | Divide automáticamente las rutas en función de las brechas de tiempo entre los puntos registrados. <ul><li>Un nuevo segmento comienza después de una brecha de 6 minutos.</li><li>Una nueva ruta comienza después de una brecha de 2 horas.</li><li>Un nuevo archivo comienza cuando cambia la fecha.</li><li>Las brechas pueden ser el resultado de la pérdida de señal GPS, baja velocidad o configuraciones de configuración.</li></ul><details><summary>*Observación*</summary>Se identifica una interrupción cuando no se registran puntos. Esto puede ocurrir porque la ubicación no se detecta o porque se detecta pero no se registra. Varios factores pueden causar esto, incluyendo señales GPS débiles debido a malas condiciones climáticas, o que la velocidad de movimiento caiga por debajo del umbral configurado. En tales casos, aunque el dispositivo pueda detectar la ubicación, no la registra.<br/><br/>Estas interrupciones en los datos registrados pueden desencadenar la creación de un nuevo segmento dentro de la misma ruta, una nueva ruta en el mismo archivo o un nuevo archivo GPX dentro de una misma grabación. Esto se gestiona dentro de una única sesión de inicio/parada de grabación.</details> |
| **Evitar registro independiente** (*Android*) | Pausa la grabación de la ruta cuando la aplicación OsmAnd se cierra (a través de *aplicaciones recientes*). La indicación de fondo no se muestra en el panel de notificaciones de Android. |
| **Incluir rumbo** | Registra el rumbo (dirección del movimiento) para cada punto en el archivo GPX. El rumbo es la dirección a la que apunta el dispositivo, que puede diferir de la dirección del movimiento debido a factores externos como el viento o el derrape. |
| **Actividad** | La opción te permite preseleccionar un [tipo de actividad](../map/tracks/track-context-menu.md#track-information-activity) para un perfil, que luego se aplica automáticamente a todas las rutas grabadas. |
| **Sensores externos** <br/> *Necesita el plugin habilitado* | Los datos de [sensores externos](../plugins/external-sensors.md#trip-recording) como *<Translate android="true" ids="map_widget_ant_heart_rate"/>* o *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* se registran en el archivo GPX. Los datos de *Distancia* no se registran en Android ni en iOS. Se muestran solo cuando el [plugin de Sensores externos](../plugins/external-sensors.md) está habilitado. |
| **Métricas del vehículo** (*Android*) <br/> *Necesita el plugin habilitado* | Los datos del [escáner OBD-II](../plugins/vehicle-metrics.md#trip-recording) se registran en el archivo GPX. Se muestran solo cuando el [plugin de Métricas del vehículo](../plugins/vehicle-metrics.md) está habilitado.<br />*Nota*: Puedes añadir qué métricas registrar en el archivo GPX de la lista: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Carpeta de almacenamiento de rutas** (*Android*) | Define dónde se almacenan las rutas grabadas en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. Las opciones incluyen almacenar todas las rutas en la carpeta Rec o organizarlas por mes, como Rec/aaaa-mm. |
| **Notificación** | Controla la visualización de una [notificación del sistema de grabación de viajes](#notifications) en el área de notificación del dispositivo que te permite iniciar la grabación de viajes. |
| **Seguimiento en línea** (*Android*) | Permite el seguimiento en tiempo real de tu ubicación enviando los puntos registrados a una URL específica. El intervalo de seguimiento determina la frecuencia con la que se envían los puntos, y el búfer de tiempo almacena los puntos cuando no hay conexión a Internet.<details><summary>*Observación*</summary>Si esta opción está habilitada y la grabación de la ruta está en curso, el widget de Distancia/Inicio-Parada (REC) se vuelve **verde** en lugar de **rojo**, lo que indica que cada punto grabado se está transmitiendo a una URL específica. El campo **Dirección web** te permite introducir la URL utilizando el siguiente formato de parámetro:<ul><li>`lat={0}`: Latitud</li><li>`lon={1}`: Longitud</li><li>`timestamp={2}`: Marca de tiempo (tiempo Unix)</li><li>`hdop={3}`: Dilución horizontal de la precisión</li><li>`altitude={4}`: Altitud</li><li>`speed={5}`: Velocidad</li><li>`bearing={6}`: Rumbo (dirección del movimiento)</li><li>`eta={7}`: Hora estimada de llegada (tiempo Unix)</li><li>`etfa={8}`: Tiempo estimado hasta el primer punto intermedio o punto final (tiempo Unix)</li><li>`eda={9}`: Distancia estimada hasta la llegada o un marcador (en metros)</li><li>`edfa={10}`: Distancia estimada hasta el primer punto intermedio o punto final (en metros)</li></ul>Puedes establecer el **Intervalo de seguimiento** para especificar la frecuencia con la que se envían los puntos de ubicación, con opciones que van desde 0 segundos hasta 5 minutos. Además, el parámetro **Búfer de tiempo** determina cuánto tiempo se almacenan los puntos de ubicación si no hay conexión a Internet, lo que garantiza que los datos se guarden y transmitan cuando se restablezca la conexión.</details> |
| **Rutas** | Una referencia rápida a la carpeta donde se guardan las rutas en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Restablecer la configuración del plugin a los valores predeterminados** | Restablece todas las configuraciones de grabación de viajes para el perfil actual a sus valores predeterminados. |
| **Copiar de otro perfil** (*Android*) | Copia la configuración de grabación de viajes de un perfil a otro. |


### Optimización de batería {#battery-optimization}

<InfoAndroidOnly />

![Ruta en el mapa iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Ruta en el mapa iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Esta función te permite gestionar la configuración de optimización de batería para OsmAnd para garantizar un acceso ininterrumpido a tu ubicación, incluso cuando la aplicación se ejecuta en segundo plano durante la navegación o la grabación de rutas.

- **Configuración de optimización de batería**. Abre la configuración de Android, donde puedes modificar las preferencias de ahorro de batería para OsmAnd. [Más detalles aquí](../troubleshooting/general.md#optimizing-battery-consumption).
- **No volver a preguntar**. Descarta el cuadro de diálogo permanentemente, por lo que no volverá a aparecer.
- **Cerrar**. Cierra temporalmente el cuadro de diálogo, que volverá a aparecer la próxima vez que la optimización de batería necesite atención.


### Notificaciones {#notifications}

![Notificación de Grabación de Viajes](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Si la [Notificación](#recording-settings) está habilitada en la configuración del plugin, las notificaciones de grabación de viajes siempre se mostrarán en el área de notificación del sistema cuando la grabación esté activa. Esta notificación asegura que el proceso de grabación no sea interrumpido por el sistema, y no se puede deshabilitar durante una grabación activa.

- El área de notificación se abre cuando deslizas hacia abajo desde la parte superior de la pantalla y se cierra cuando deslizas hacia arriba. Estos mensajes te notifican sobre acciones como iniciar/detener la grabación de viajes, especialmente cuando la grabación automática está habilitada durante la navegación.
- Las notificaciones permanecen visibles independientemente de si la aplicación se está ejecutando en primer plano, segundo plano o está cerrada. Puedes borrar manualmente la notificación antigua si ya no es necesaria, pero esto no detendrá la grabación en curso.

**Nota importante**.

Este comportamiento es requerido por Android para cualquier servicio en primer plano, como la grabación de viajes, para que permanezca visible para ti.

- Si se elimina la notificación, Android detendrá automáticamente la grabación. Puedes usar la configuración [Evitar registro independiente](#recording-settings).
- La configuración de **Notificación** en OsmAnd afecta si la barra de notificaciones muestra un acceso directo para iniciar una grabación cuando no hay ninguna grabación activa. **No** controla la visibilidad de la notificación durante una grabación activa.

**Opciones adicionales de Android**.

![Notificación de Grabación de Viajes](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- En ***Ajustes de Android → Notificaciones y barra de estado → Notificaciones de pantalla de bloqueo***, puedes eliminar OsmAnd de la lista de aplicaciones para evitar que las notificaciones aparezcan en la pantalla de bloqueo, evitando la activación accidental de la pantalla. Esto no afectará la grabación de rutas. Las notificaciones seguirán apareciendo en el área de notificación normal.
- **OsmAnd** también puede aparecer en ***Privacidad → Permisos especiales → Encender pantalla***. Si deseas evitar que la pantalla se encienda cuando aparece una notificación, intenta eliminar OsmAnd de esta lista.

<!--
- OsmAnd no aparece en **Privacidad** *→* **Permisos especiales** → **Alarmas y recordatorios**.
-->

**Notificación de insignia**.

![Notificación de Grabación de Viajes](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

La insignia del icono de la aplicación aparece junto al icono de OsmAnd cuando la grabación de la ruta está activa.

- Este icono desaparece cuando la grabación de la ruta se completa. Para comprobar si una grabación está activa, puedes ir a *Menú → Mis lugares → Pestaña Rutas* o pulsar el widget para gestionar la grabación.
- Si no hay ninguna grabación en curso y la insignia sigue mostrándose, puede significar que se ha dejado un mensaje de OsmAnd en el panel de notificaciones del dispositivo.
- Para deshabilitar las insignias en la configuración de Android, ve a *Ajustes del dispositivo → Aplicaciones → OsmAnd → Notificaciones* y deshabilita la opción de visualización de insignias para esta aplicación.


## Widgets {#widgets}

Los widgets te permiten mostrar información clave sobre la grabación de rutas directamente en la pantalla, como *Distancia*, *Duración*, *Ascenso* y *Descenso*.

Para empezar a utilizar los *widgets de Grabación de Viajes*, debes realizar todas las siguientes configuraciones:

1. [Habilitar el plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurar los ajustes de grabación de viajes para el [perfil](../personal/profiles.md) requerido.
3. Añadir los **widgets de Grabación de Viajes** necesarios a la pantalla. Ten en cuenta que esta configuración es **específica para cada perfil**.


### Añadir widget de grabación {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elige un panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Añadiendo el widget de Distancia/Inicio-Parada en Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elige un panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Añadiendo el widget de Distancia/Inicio-Parada en iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

El [widget de Grabación de Viajes](../widgets/info-widgets.md#trip-recording-widgets) proporciona una forma sencilla de monitorear el estado de tu grabación y acceder rápidamente a la configuración y los detalles de la grabación. Este widget se añade automáticamente a tu pantalla cuando se habilita el plugin de Grabación de Viajes.

Para personalizar tu interfaz, puedes añadir o eliminar el widget de Grabación de Viajes y [otros widgets](../plugins/trip-recording#duration-uphill-downhill) a través del menú Configurar Pantalla.


### Distancia (Inicio-Parada) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget de grabación de viajes](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Finalizar grabación en Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de grabación de viajes](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget de grabación de viajes](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Cuando los widgets se muestran en el mapa, al pulsar cualquiera de ellos se revelan detalles adicionales de la ruta y se permite la interacción con la grabación.
El widget *Distancia* muestra la distancia total de tu viaje grabado actual y actúa como la interfaz principal para gestionar tus grabaciones. Al pulsarlo, se abre el [diálogo de Grabación de Viajes](#start-a-dialog), donde puedes iniciar, detener y ver información detallada sobre tu ruta.

- El widget se añade automáticamente cuando se habilita el *plugin de Grabación de Viajes*, pero se puede ocultar a través del [menú Configurar pantalla](../widgets/configure-screen.md#configure-screen-menu).
- Si la opción *Mostrar diálogo de inicio* está deshabilitada en la configuración del plugin de Grabación de Viajes, al pulsar el widget activo se seguirá abriendo el cuadro de diálogo *Grabación de Viajes*, lo que te permitirá acceder a más opciones e información.

Además del widget *Distancia/Inicio-Parada*, el **plugin de Grabación de Viajes** incluye otros tres widgets: *Duración*, *Ascenso* y *Descenso*. Estos proporcionan información adicional sobre tu viaje, ayudándote a rastrear el progreso en tiempo real.

| |
|-----------|
| **Distancia/Inicio-Parada**. Este widget muestra la distancia de tu grabación de viaje en curso. Se añade automáticamente cuando se habilita el plugin de Grabación de Viajes, pero puedes ocultarlo a través del menú Configurar Pantalla. El widget presenta tres estados distintos: *Grabando*, *Pausado* e *Inactivo*, cada uno indicando el estado actual de tu grabación de viaje. |
| ![Widget de grabación de viajes (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Para abrir el [diálogo de Grabación de Viajes](#start-a-dialog) al pulsar un widget inactivo, habilita la opción *Mostrar diálogo de inicio* en la configuración del plugin de Grabación de Viajes. Si la opción está deshabilitada, la grabación comenzará inmediatamente después de pulsar el widget sin abrir el diálogo. |


### Duración, Ascenso, Descenso {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Duración**. Muestra el tiempo total de la grabación de viaje actual en horas y minutos. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Ascenso**. Muestra la ganancia de elevación acumulada para la grabación de viaje actual. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Descenso**. Indica el descenso total acumulado durante la grabación de viaje actual. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Si tienes varios widgets seleccionados — *Duración*, *Ascenso* o *Descenso* — puedes acceder al mismo cuadro de diálogo para cada uno sin necesidad de cambiar o cerrarlo. Esta interfaz unificada facilita la visualización y gestión de toda la información relacionada sin problemas.


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](../map/map-context-menu.md)
- [Mostrar ruta en el mapa](../map/tracks/index.md)
- [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de rutas](../map/tracks/track-context-menu.md)
- [Navegación por ruta](../navigation/setup/gpx-navigation.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

- La grabación de viajes no se inicia.
    - Asegúrate de que el **plugin de Grabación de Viajes** esté habilitado: *Menú → Plugins → Grabación de Viajes → Habilitar*.
    - Comprueba que la configuración sea correcta: *Menú → Configurar Perfil → Configuración del Plugin → Grabación de Viajes*.
    - Si la grabación aún no se inicia, reinicia la aplicación y vuelve a intentarlo.

- La grabación de viajes se detiene inesperadamente.
    - Comprueba si la *configuración de optimización de batería* de tu dispositivo está deteniendo la grabación. Algunos dispositivos pueden pausar la actividad en segundo plano para ahorrar energía. Ve a *Ajustes del dispositivo → Batería*.

- La distancia grabada no coincide con la distancia real.
    - Verifica que el GPS esté habilitado y tenga una señal activa.
    - Reduce el umbral de precisión del GPS: *Menú → Configurar Perfil → Grabación de Viajes → Precisión Mínima*.

- Las rutas grabadas son ruidosas. [(comprobar)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Las rutas grabadas tienen interrupciones. [(comprobar)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Cómo rastrear la distancia recorrida. [(comprobar)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Para obtener solución de problemas adicional, visita: [Solución de problemas de grabación de rutas](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Última actualización: enero de 2025*