---
source-hash: 2a2825755522d1d674eca0e28ae419a075ecef2a2e6c4f86faef75b3b7e8dd3f
sidebar_position: 4
title:  Widgets de navegación
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Descripción general {#overview}

Los widgets de navegación se activan durante la navegación para mostrar información como la distancia, la hora de llegada o la hora restante, los próximos giros, la orientación, el nombre de la calle actual, la información de carriles, la velocidad máxima, las alertas de aproximación, los PDI y los puntos de ruta.

![Widgets de navegación todos](@site/static/img/widgets/navigational_widgets_all.png)


## Navegación activa y pasiva {#active-and-passive-navigation}

Los widgets de navegación en OsmAnd están diseñados para mejorar los modos de navegación **activa** y **pasiva**. Estos widgets proporcionan información valiosa como direcciones de ruta, detalles de la carretera y límites de velocidad, dependiendo del **perfil de navegación** seleccionado.

#### Navegación activa {#active-navigation}

- **Requisitos:**
  - Establecer un **destino**.
  - Calcular la **ruta** utilizando la función *Direcciones*.
  - **Iniciar** la navegación (la guía por voz es opcional).
  - Disponible solo cuando se mueve a lo largo de la ruta.

- **Widgets compatibles:**
  - Todos los **widgets de navegación** están disponibles.

- **Beneficios clave:**
  - Proporciona **instrucciones giro a giro**, **guía de carriles** y **ETA**.
  - Garantiza actualizaciones precisas y dinámicas durante el viaje.

#### Navegación pasiva {#passive-navigation}

- **Cómo funciona:**
  - No se necesita un destino.
  - Funciona automáticamente cuando se selecciona un **perfil de navegación** (por ejemplo, *Conducción*, *Ciclismo*).

- **Funcionalidad:**
  - Intenta determinar la carretera que está siguiendo utilizando datos GPS.
  - Muestra **información básica de la carretera**, como el [nombre de la calle](#street-name), la [información de carriles](#lanes), la [velocidad máxima](#speed-limit).

- **Limitaciones:**
  - Algunas funciones avanzadas pueden no funcionar correctamente sin un destino establecido.
  - La información proporcionada puede no ser siempre **precisa**, especialmente en redes de carreteras complejas.

> **NOTA.** *Tenga en cuenta que el perfil **Explorar mapa** no admite widgets de navegación en ninguno de los modos. Cambie a un **perfil de navegación** relevante para habilitar estas funciones.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widget de elevación {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Este widget solo se puede usar con la función Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">suscriptores de OsmAnd Pro</a>.

:::

El widget de elevación muestra un gráfico con la elevación y la pendiente de su ruta de navegación y su ubicación actual en este gráfico con la altitud y la pendiente actuales. El gráfico se traza en dos ejes. El eje X es la distancia de su ruta. El eje Y es la altitud, el valor depende del relieve, y la pendiente se muestra como un porcentaje.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widget de elevación](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interacciones con el gráfico {#interactions-with-the-graph}

- *Acercar/alejar*. Por defecto, el gráfico muestra la ruta desde la ubicación actual hasta 10 km más adelante. Puede usar el [movimiento de dos dedos](../map/interact-with-map#gestures) para acercar y alejar para una vista más detallada de los cambios de altitud en su ruta. También puede mover el gráfico a la derecha, hacia adelante en la ruta y hacia atrás a la ubicación actual.
- *Colocar un punto en el gráfico*. Si desea ver el valor de altitud y grado en un punto particular más adelante en su ruta, puede tocar en cualquier lugar del gráfico y aparecerá un puntero con los valores.


#### Contenido {#whats-in}

Cuando selecciona una ruta y presiona el botón **Iniciar**, el mapa se abre con su ubicación actual, la ruta y el widget en la parte inferior de la pantalla. El widget tiene el gráfico e información sobre *Subida*, *Bajada*, *Grado*, distancia, altitud y ángulo de pendiente. Puede seleccionar la *escala óptima* y ver todos los posibles obstáculos en su ruta.

- Todos los valores se indican para toda la ruta o solo para el intervalo seleccionado escalando el gráfico.
- Lea sobre la [licencia de los datos DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) utilizados por OsmAnd para determinar la elevación.

| |
|:------------|
| ***Pin de ubicación*** |
| Su ***Ubicación actual*** en el gráfico incluye un icono de ubicación, elevación y valor de porcentaje de pendiente. El lado derecho del widget contiene la elevación y el gradiente más altos, el valor promedio para ellos y el valor más bajo en la sección seleccionada de la ruta visible en el gráfico. |
| ![punto](@site/static/img/widgets/sch_1-1.png)|
| ***Información adicional*** |
| El lado derecho del widget contiene datos sobre la altitud y la pendiente más altas, el valor promedio para ambas, y la altitud y la pendiente más bajas en la sección de ruta seleccionada visible en el gráfico. |
| ![datos](@site/static/img/widgets/sch_1-2.png)|
|Los valores de ***Subida*** y ***Bajada*** son las sumas de las distancias desde su punto de ubicación hasta el final del gráfico visible. Si no hay un punto de ubicación en el gráfico, entonces es la suma de todo el gráfico visible en la pantalla (esto puede suceder cuando cambia la escala y la ubicación sale del gráfico).|
| **Subida** – muestra la suma de todas las distancias con altitud creciente desde su punto de ubicación hasta el final del gráfico visible o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla. |
| ![esquema de subida](@site/static/img/widgets/sch_uphill_1.png) ![esquema de subida](@site/static/img/widgets/sch_uphill_2.png)|
| **Bajada** – muestra la suma de todas las distancias con altitud decreciente desde su punto de ubicación hasta el final del gráfico visible o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla.|
| ![esquema de bajada](@site/static/img/widgets/sch_downhill_1.png) ![esquema de bajada](@site/static/img/widgets/sch_downhill_2.png)|
|***Grado*** es la relación del camino con la horizontal, donde cero indica horizontalidad y el número de grados indica un grado de pendiente mayor o más pronunciado.|
| **Grado** – muestra la pendiente máxima de la carretera en porcentaje desde su punto de ubicación hasta el final del gráfico visible o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla. |
|![esquema de grado](@site/static/img/widgets/sch_grade_1.png) ![esquema de grado](@site/static/img/widgets/sch_grade_2.png)|


## Widget de rumbo {#bearing-widget}

El rumbo es la dirección a un objetivo fuera de su vehículo, como un destino o punto de origen. Un rumbo puede ser *Relativo* (según su curso) o *Magnético* (según la brújula). Por ejemplo, un rumbo magnético de 180° es la dirección al sur, y un rumbo relativo de 180° está directamente detrás de usted. Los puntos cardinales son las cuatro direcciones principales de la brújula. Son Norte (*N* - 0° o 360°), Este (*E* - 90°), Sur (*S* - 180°) y Oeste (*W* - 270°).

![Widget de grabación de viaje](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget de grabación de viaje](@site/static/img/widgets/bearing_widget.png) ![Widget de grabación de viaje](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de grabación de viaje](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="shared_string_bearing"/>* |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | **Android:** Puede cambiar el formato de visualización de datos para unidades angulares: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** Puede cambiar el formato de visualización de datos para unidades angulares: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Cómo funciona {#how-it-works}

Para mostrar el rumbo, se debe seleccionar un **punto objetivo**. Si se selecciona un punto de **destino** (o el **primer punto intermedio**, si lo hay) para la navegación, se utilizará como punto objetivo. De lo contrario, se utilizará el **marcador seleccionado más alto**.

- El [rumbo relativo](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) es el ángulo entre la dirección de su movimiento hacia adelante y el punto objetivo. La **dirección de movimiento hacia adelante** es la **dirección de su movimiento** obtenida de los sensores GPS o, si está parado, **hacia dónde ha apuntado su dispositivo** (es decir, la orientación de su dispositivo según su brújula magnética). Ejemplo: Un objeto con un rumbo relativo de 0° está directamente delante de usted y un objeto con un rumbo relativo de 180° está directamente detrás de usted. El **rumbo relativo** es el ángulo entre su dirección hacia adelante y el punto objetivo.

- El [rumbo magnético](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) es el ángulo horario (horizontal) entre el norte magnético y el punto objetivo observado desde su ubicación. Debe seguir este valor de brújula magnética para llegar a su objetivo. Ejemplo: Si el **rumbo magnético** se muestra como 0° M, debe moverse estrictamente hacia el norte magnético para llegar al punto objetivo.

- El [rumbo verdadero](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) se expresa como el ángulo horizontal entre el meridiano geográfico y una línea en la Tierra. Específicamente, el **rumbo verdadero de un punto** es el ángulo medido en grados en el sentido de las agujas del reloj desde la línea del Norte Verdadero. El software OsmAnd le mostrará el rumbo y la dirección verdaderos en nuestra interfaz fácil de usar, lo que le facilitará tomar la decisión correcta desde el principio.

### Navegación a lo largo de la línea de rumbo {#navigation-along-the-rhumb-line}

- **Rumbo relativo**. Si se mantiene en un rumbo relativo de 0 grados y avanza, llegará al punto de destino, pero no por la ruta más corta ([línea de rumbo](https://en.wikipedia.org/wiki/Rhumb_line)).
- **Rumbo magnético**. Si alinea la brújula de su barco/vehículo con el valor del widget y avanza, llegará a su destino, pero no por la ruta más corta ([línea de rumbo](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between Relative bearing or Magnetic bearing (with "M") -->


## Puntos de navegación {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

El grupo de widgets *Punto de navegación* muestra la distancia restante a su destino, el punto intermedio, la hora de llegada al punto intermedio o el tiempo de viaje para la ruta calculada, y la hora estimada de llegada.

### Información de la ruta {#route-information}

<InfoAndroidOnly />

![Widget de destino](@site/static/img/widgets/route_information_widget.png)

El widget *Información de la ruta* proporciona datos en tiempo real sobre la ruta de navegación en curso y una forma rápida [de gestionar una ruta activa](../navigation/setup/route-navigation.md#start--stop-navigation). Ayuda a realizar un seguimiento de los detalles clave de la ruta y le permite detener o reanudar la sesión de navegación actual con una interacción mínima.

**Información mostrada:**

- **Hora estimada de llegada (ETA)**. Muestra la hora de llegada prevista al destino final.
- **Tiempo de viaje restante**. Muestra el tiempo estimado restante para llegar al destino.
- **Distancia al destino**. Indica la distancia total restante al destino final y las distancias a los puntos intermedios.

**Menú de configuración**:

- Seleccione una **Vista predeterminada** para priorizar uno de los siguientes valores: *Hora estimada de llegada*, *Tiempo restante*, *Distancia*.
- En **Prioridad de visualización**, seleccione entre *Destino primero (predeterminado)* o *Intermedio primero* para priorizar la información de ruta más relevante.

> NOTA: El widget solo es visible durante la navegación.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget →<Translate android="true" ids="map_widget_distance_to_destination"/>* |
| Al tocar | Toca el botón con la flecha para abrir el [panel de Inicio/Parada de navegación](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distancia al destino {#distance-to-destination}

![Widget de destino](@site/static/img/widgets/destination_widget.png)

El widget muestra la distancia restante al último punto de destino al seguir una ruta calculada.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Al tocar | Mueve el mapa al punto de destino. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Distancia al intermedio {#distance-to-intermediate}

![Widget de destino intermedio](@site/static/img/widgets/intermediate_destination_widget.png)

El widget muestra la distancia al primer punto intermedio a lo largo de la ruta calculada. Después de pasar los puntos intermedios, el espacio se actualizará al siguiente punto intermedio. Si no hay puntos intermedios, el widget no se muestra.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Al tocar | **Un punto intermedio** - mueve el mapa al punto intermedio. <br /> **Dos o más puntos intermedios** - abre el menú de la lista de destinos. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Tiempo al intermedio {#time-to-intermediate}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/arrival_time_widget_android.png) ![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/arrival_time_widget_ios.png) ![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

El widget muestra la *Hora de llegada* o el *Tiempo restante* al primer punto intermedio. Durante la navegación, la hora se actualiza constantemente, y tan pronto como se pasa un punto intermedio, la hora se actualizará al siguiente punto de ruta. Por ejemplo, si detiene la navegación, el *Tiempo restante* permanecerá sin cambios y la *Hora de llegada* será igual al *Tiempo restante* más la *Hora actual*.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Al tocar | Cambia entre *Hora de llegada* y *Tiempo restante* y viceversa. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Tiempo al destino {#time-to-destination}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget de hora de llegada y tiempo intermedio](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de hora de llegada y tiempo intermedio](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

El widget muestra la *Hora de llegada* o el *Tiempo restante* al último punto de destino. La hora se actualiza constantemente durante la navegación y es igual al tiempo de ruta desde su ubicación actual.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Al tocar | Cambia entre *Hora de llegada* y *Tiempo restante* y viceversa. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Límite de velocidad {#speed-limit}

![Widget de límite de velocidad](@site/static/img/widgets/speed_limit_widget_2.png)

El widget *Límite de velocidad* muestra el límite de velocidad actual según los datos del mapa para su ruta.

- Los datos se toman del [proyecto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- El widget funciona en modos de navegación pasiva y activa.
- Si los datos de límite de velocidad no están disponibles para una carretera o área específica, *el widget no aparecerá*.

> NOTA: Asegúrese de que sus [mapas estén actualizados](../personal/maps-resources.md#updates) y de que haya descargado todos los datos regionales necesarios para acceder a la información más reciente sobre los límites de velocidad.

| |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elegir un panel → Añadir widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Maniobras de ruta {#route-maneuvers}

![Widget de próximos giros](@site/static/img/widgets/next_turns_widget.png)

Este conjunto de widgets de navegación se activa durante la navegación y muestra información sobre la distancia a la próxima maniobra.

| | |
|:------------|:------------|
| Habilitar | **Android:** *Menú → Configurar pantalla → Panel izquierdo / derecho → Añadir widget → Maniobras de ruta → Próximo giro, Próximo giro (pequeño), Segundo próximo giro* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel izquierdo / derecho → Añadir widget → Maniobras de ruta → Próximo giro, Próximo giro (pequeño), Segundo próximo giro* |
| Al tocar | Si las [indicaciones de voz](../navigation/guidance/voice-navigation.md) están habilitadas, se pronuncian la próxima maniobra y la distancia a la misma. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Próximo giro {#next-turn}

![Widget de próximos giros](@site/static/img/widgets/next_turns_widgets_andr.png)

Los widgets de *Maniobras de ruta* contienen información sobre:

- **Próximo giro** - el próximo giro con una flecha grande que representa la maniobra y con datos sobre la distancia a la misma.
- **Próximo giro (pequeño)** - el próximo giro con una flecha pequeña que representa la maniobra y con datos de distancia junto a la flecha.
- **Segundo próximo giro** - el próximo giro después del primer giro, que se activa si está dentro de la distancia de aproximación.

| | |
|:------------|:------------|
| Habilitar | **Android:** *Menú → Configurar pantalla → Panel izquierdo / derecho → Añadir widget → Próximo giro, Próximo giro (pequeño), Segundo próximo giro* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel izquierdo / derecho → Añadir widget → Próximo giro, Próximo giro (pequeño), Segundo próximo giro* |
| Al tocar | Si las [indicaciones de voz](../navigation/guidance/voice-navigation.md) están habilitadas, se pronuncian la próxima maniobra y la distancia a la misma. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Indicaciones de color para el próximo giro {#color-prompts-for-next-turn}

Esta tabla muestra el tiempo aproximado hasta que se activan las indicaciones y la indicación de color correspondiente de las flechas para realizar la maniobra. Para obtener más información, consulte la [documentación técnica](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) o el artículo [Indicaciones de voz](../navigation/guidance/voice-navigation.md).

| Color | ~ Tiempo de activación | Distancia | Tipo de indicación |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Verde | 5 segundos | Cerca | Gire ahora |
| 🟡 Amarillo | 20 segundos | Acercándose | Gire en `x` m |
| ⚪ Gris | > 100 segundos | Distante | Prepárese para girar |


## Carriles {#lanes}

![Widgets de carriles](@site/static/img/widgets/lanes_widget.png)

El widget **Carriles** resalta el carril actual cuando la navegación está activa y muestra el diseño de los carriles para la carretera actual cuando la navegación es pasiva. Los datos se toman del [proyecto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Añadir widget → <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget → <Translate android="true" ids="show_lanes"/>* |
| Al tocar | Sin cambios |

### Indicaciones de color para carriles {#color-prompts-for-lanes}

Muestra un widget según la configuración de tiempo de aproximación. El color del carril se asocia con las [indicaciones de voz](../navigation/guidance/voice-navigation.md) y el tiempo restante para realizar la maniobra.

| Color | ~ Tiempo de activación | Distancia | Tipo de indicación |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Verde | 5 segundos | Cerca | [Gire ahora](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Amarillo | 20 segundos | Acercándose | [Gire en X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Guía de ruta {#route-guidance}

<InfoAndroidOnly />

![widget de guía de ruta](@site/static/img/widgets/route_guidence_widgets_andr.png)

Proporciona guía de ruta en tiempo real, incluyendo la distancia al próximo giro, el nombre de la carretera, el nombre de la calle actual e información de carriles. Los widgets están activos durante la navegación.

Los widgets de *Guía de ruta* contienen información sobre:

- [Carriles](#lanes) - muestra la ubicación actual de los carriles de la carretera y resalta los que debe tomar.
- **Próximo giro** - el próximo giro con una flecha grande que representa la maniobra y con datos sobre la distancia a la misma.
- **Segundo próximo giro** es el próximo giro después del primer giro, que se activa si está dentro de la distancia de aproximación.

| | |
|:------------|:------------|
| Habilitar | **Android:** *Menú → Configurar pantalla → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget → Carril, Próximo giro, Segundo próximo giro* |
| Al tocar | **Próximo giro**: Si las [indicaciones de voz](../navigation/guidance/voice-navigation.md) están habilitadas, se pronuncian la próxima maniobra y la distancia a la misma. <br/> **Carril**: Sin cambios. |
| Pulsación larga | **Próximo giro**: Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Carril**: Sin cambios. |


## Widget de alerta {#alert-widget}

![Widgets de información de alerta](@site/static/img/widgets/alert_information_widget.png)

El **widget de alerta** combina varios tipos de alertas que se muestran en la esquina inferior izquierda mientras navega.

- Tiene la capacidad de activar y desactivar alertas como *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* y *<Translate android="true" ids="show_tunnels"/>*. Otras alertas están activas por defecto si el widget está habilitado.

- Para el tipo de alerta *Límite de velocidad*, puede ajustar el valor de <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) en la configuración de indicaciones de voz para que coincida mejor con la velocidad del vehículo y la velocidad del GPS.

- La mayoría de las alertas se muestran en la pantalla y se anuncian por voz durante 15 segundos, así como el tiempo de activación para pasar un punto de ruta, un punto favorito o un PDI. Lea más [aquí](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Habilitar | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Tipos de alerta {#alert-types}

Los tipos de alerta tienen un diseño visual diferente, que depende de la **<Translate android="true" ids="driving_region"/>** y se pueden configurar a través de *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd no pretende representar señales de tráfico 100% idénticas, pero señala algunas similitudes.

| | | |
|:------------|:------------|:------------|
| Nombre | Descripción | Icono |
| *<Translate android="true" ids="show_traffic_warnings"/>* | El [calmado del tráfico](https://en.wikipedia.org/wiki/Traffic_calming) utiliza el diseño físico y otras medidas para mejorar la seguridad de los automovilistas, peatones y ciclistas. | ![Widgets de calmado de tráfico de alerta](@site/static/img/widgets/warnings_traffic_calming.png) ![Widgets de calmado de tráfico de alerta de EE. UU.](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Un [paso de peatones](https://en.wikipedia.org/wiki/Pedestrian_crossing) (principalmente inglés británico) o cruce de peatones es un lugar designado para que los peatones crucen una carretera, calle o avenida. OsmAnd muestra la alerta del paso de peatones sin control. | ![Widgets de calmado de tráfico de alerta](@site/static/img/widgets/warnings_pedestrian.png) ![Widgets de calmado de tráfico de alerta de EE. UU.](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | En la mayoría de los países, los [límites de velocidad de las carreteras](https://en.wikipedia.org/wiki/Speed_limit) establecen la velocidad máxima, media o mínima legal a la que los vehículos de carretera pueden circular en un determinado tramo de carretera. En OsmAnd, la alerta se muestra cuando se excede la velocidad. Puede establecer los parámetros de exceso de velocidad (0, 5, 10... km/h). ![Widgets de alerta de exceso de velocidad](@site/static/img/widgets/ex_warning_speed.png) | ![Widgets de límite de velocidad de alerta](@site/static/img/widgets/warnings_limit.png) ![Widgets de límite de velocidad de alerta de CA](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widgets de límite de velocidad de alerta de EE. UU.](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Un túnel es un pasaje subterráneo, que pasa por debajo de una montaña, un río o un área urbana congestionada. En OsmAnd, la alerta *Túneles* tiene información sobre la longitud del túnel. Si está en un túnel, muestra la distancia hasta el final del túnel. ![Widgets de alerta de túnel](@site/static/img/widgets/ex_warning_tunnel.png) | ![Widgets de advertencias de túnel](@site/static/img/widgets/warnings_tunnel.png) ![Widgets de advertencias de túnel de EE. UU.](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | Las [cámaras de control de tráfico](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) y las [cámaras de velocidad](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) registran infracciones de tráfico, incluyendo exceso de velocidad, saltarse semáforos en rojo y otros tipos de comportamiento ilegal. <br />**NOTA:** Las alertas de cámaras de velocidad están prohibidas o son ilegales en algunos países. Para [eliminar completamente las cámaras de velocidad](../personal/global-settings.md#legal) de OsmAnd, vaya al menú principal *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Widgets de calmado de tráfico de alerta](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Una [señal de stop](https://en.wikipedia.org/wiki/Stop_sign) es una señal de tráfico diseñada para notificar a los conductores que deben detenerse por completo y asegurarse de que la intersección esté libre de vehículos y peatones antes de continuar. | ![Widgets de alerta de stop](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* | Esta advertencia significa que hay un [cruce de ferrocarril](https://en.wikipedia.org/wiki/Crossbuck) más adelante. | ![Widgets de advertencias de ferrocarriles](@site/static/img/widgets/warnings_railways.png) ![Widgets de advertencias de ferrocarriles de CA](@site/static/img/widgets/warnings_railways_ca.png) ![Widgets de advertencias de ferrocarriles de EE. UU.](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | Esta advertencia indica que hay un control fronterizo más adelante. | ![Widgets de control fronterizo de alerta](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | Los [símbolos de peligro o símbolos de advertencia](https://en.wikipedia.org/wiki/Hazard_symbol) son símbolos reconocibles diseñados para advertir sobre materiales, ubicaciones u objetos peligrosos, incluyendo corrientes eléctricas, venenos y radioactividad. | ![Widgets de advertencias de peligro](@site/static/img/widgets/warnings_hazard.png) ![Widgets de advertencias de peligro de EE. UU.](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Esta advertencia indica que hay un peaje para una carretera de peaje más adelante. ![Widgets de peaje de alerta](@site/static/img/widgets/ex_toll_booth.png) | ![Widgets de límite de velocidad](@site/static/img/widgets/warnings_limit.png) |


## Nombre de la calle {#street-name}

El widget Nombre de la calle muestra **el nombre de la calle actual** con una flecha recta, o **el nombre de la próxima calle** con la maniobra a realizar. El nombre de la calle suele consistir en un escudo de carretera, un [nombre](https://wiki.openstreetmap.org/wiki/Key:name), una [referencia](https://wiki.openstreetmap.org/wiki/Key:ref), una [referencia internacional](https://wiki.openstreetmap.org/wiki/Key:int_ref) y un [destino](https://wiki.openstreetmap.org/wiki/Key:destination). El cambio entre el nombre de la calle actual y el nombre de la próxima calle ocurre cuando se acerca al lugar donde desea realizar la maniobra (~20 segundos), similar a la indicación de voz [Gire en X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Al conducir por una calle o carretera, el widget muestra el nombre o la designación de la calle (carretera) actual con una flecha azul.

  ![Widget de PDI de nombre de calle_2](@site/static/img/widgets/street_name_widget_2.png)

- Cuando cambia de dirección, el widget muestra el esquema de la maniobra y el nombre (designación) de la calle (carretera) a la que debe girar.

  ![Widget de PDI de nombre de calle](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget → <Translate android="true" ids="map_widget_top_text"/>* |
| Al tocar | Sin cambios |


## PDI/Favoritos de aproximación {#approach-pois--favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![PDI/Favoritos de aproximación Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![PDI/Favoritos de aproximación iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

El widget **PDI/Favoritos/Puntos de ruta de aproximación** se combina con [Nombre de la calle](#street-name) y muestra los puntos de interés, los puntos de ruta de la ruta seguida y los favoritos a lo largo de la ruta que se aproximan y se pasan.

Muestra el **nombre**, el **icono del punto** y 2 **distancias**:

- La **distancia de la ruta** (arriba) muestra la distancia que debe recorrerse siguiendo la ruta.
- La **distancia de desviación** es una distancia recta desde el punto de ruta más cercano hasta el punto en sí.

**iOS** - Además de la distancia al punto de ruta más cercano, también se muestra el lado (izquierdo o derecho) de la ruta en el que se encuentra el punto de ruta.

| | |
|:------------|:------------|
| Habilitar | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Iniciar navegación → botón de lápiz* |
| Al tocar | Sin cambios |


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y regla](./radius-ruler.md)
- [Widgets de marcadores](./markers.md)
- [Acción rápida](./quick-action.md)

> *Última actualización: abril de 2025*