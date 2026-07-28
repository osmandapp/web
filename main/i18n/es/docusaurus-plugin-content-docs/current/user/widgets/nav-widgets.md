---
source-hash: 605c701cbbb77f516e6469701cf6ff81022dfa1f29fc77a6ec022960658661d0
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


## Resumen {#overview}

Los widgets de navegación se activan durante la navegación para mostrar información como la distancia, la hora de llegada o el tiempo restante, los próximos giros, el rumbo, el nombre de la calle actual, la información de carriles, la velocidad máxima, las alertas de proximidad, los PDI y los puntos de ruta.

![Todos los widgets de navegación](@site/static/img/widgets/navigational_widgets_all.png)


## Navegación activa y pasiva {#active-and-passive-navigation}

Los widgets de navegación en OsmAnd están diseñados para mejorar tanto los modos de navegación **activa** como **pasiva**. Estos widgets proporcionan información valiosa como indicaciones de ruta, detalles de la carretera y límites de velocidad, dependiendo del **perfil de navegación** seleccionado.  

#### Navegación activa {#active-navigation}

- **Requisitos:**  
  - Establecer un **destino**.  
  - Calcular la **ruta** utilizando la función *Indicaciones*.  
  - **Iniciar** la navegación (la guía por voz es opcional).
  - Disponible solo al moverse a lo largo de la ruta.

- **Widgets compatibles:**  
  - Todos los **widgets de navegación** están disponibles.  

- **Beneficios clave:**  
  - Proporciona **instrucciones giro a giro**, **guía de carril** y **ETA**.  
  - Asegura actualizaciones precisas y dinámicas durante el viaje.  

#### Navegación pasiva {#passive-navigation}

- **Cómo funciona:**  
  - No se necesita un destino.  
  - Funciona automáticamente cuando selecciona un **perfil de navegación** (p. ej., *Conducción*, *Ciclismo*).  

- **Funcionalidad:**  
  - Intenta determinar la carretera que está siguiendo utilizando datos del GPS.  
  - Muestra **información básica de la carretera**, como [nombre de la calle](#street-name), [información de carriles](#lanes), [velocidad máxima](#speed-limit).

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

:::info Característica Pro
El Widget de Elevación es una característica de pago de [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

El widget de Elevación muestra un gráfico con la elevación y la pendiente de su ruta de navegación y su ubicación actual en este gráfico con la altitud y pendiente actuales. El gráfico se traza en dos ejes. El eje X es la distancia de su ruta. El eje Y es la altitud, el valor depende del relieve, y la pendiente se muestra como un porcentaje.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widget de elevación](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interacciones con el gráfico {#interactions-with-the-graph}

- *Acercar/alejar*. Por defecto, el gráfico muestra la ruta desde la ubicación actual hasta 10 km más adelante. Puede usar el [movimiento con dos dedos](../map/interact-with-map.md#gestures) para acercar y alejar para una vista más detallada de los cambios de altitud en su ruta. También puede mover el gráfico hacia la derecha, hacia adelante en la ruta, y hacia atrás a la ubicación actual.  
- *Colocar un punto en el gráfico*. Si desea ver el valor de la altitud y el grado en un punto particular más adelante en su ruta, puede tocar en cualquier lugar del gráfico y aparecerá un puntero con los valores.  


#### Contenido {#whats-in}

Cuando selecciona una ruta y presiona el botón **Iniciar**, el mapa se abre con su ubicación actual, la ruta y el widget en la parte inferior de la pantalla. El widget tiene el gráfico e información sobre *Ascenso*, *Descenso*, *Pendiente*, distancia, altitud y ángulo de inclinación. Puede seleccionar la *escala óptima* y ver todos los posibles obstáculos en su ruta.  

- Todos los valores se indican ya sea para toda la ruta o solo para el intervalo seleccionado al escalar el gráfico.
- Lea sobre la [licencia para los datos DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) utilizados por OsmAnd para determinar la elevación.

|  |
|:------------|
| ***Pin de ubicación*** |
| Su ***Ubicación actual*** en el gráfico incluye un icono de ubicación, la elevación y el valor del porcentaje de pendiente. El lado derecho del widget contiene la elevación y el gradiente más altos, el valor promedio para ellos y el valor más bajo en la sección seleccionada de la ruta visible en el gráfico. |
| ![punto](@site/static/img/widgets/sch_1-1.png)|
| ***Información adicional*** |
| El lado derecho del widget contiene datos sobre la altitud y pendiente más altas, el valor promedio para ambos, y la altitud y pendiente más bajas en la sección de la ruta seleccionada visible en el gráfico. |
|  ![datos](@site/static/img/widgets/sch_1-2.png)|
|Los valores de ***Ascenso*** y ***Descenso*** son las sumas de las distancias desde su punto de ubicación hasta el final del gráfico visible. Si no hay un punto de ubicación en el gráfico, entonces es la suma de todo el gráfico visible en la pantalla (esto puede suceder cuando cambia la escala y la ubicación queda fuera del gráfico).|
| **Ascenso** – muestra la suma de todas las distancias con altitud creciente desde su punto de ubicación hasta el final del gráfico visible o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla. |
| ![esquema de ascenso](@site/static/img/widgets/sch_uphill_1.png) ![esquema de ascenso](@site/static/img/widgets/sch_uphill_2.png)|  
| **Descenso** – muestra la suma de todas las distancias con altitud decreciente desde su punto de ubicación hasta el final del gráfico visible o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla.|
| ![esquema de descenso](@site/static/img/widgets/sch_downhill_1.png) ![esquema de descenso](@site/static/img/widgets/sch_downhill_2.png)|  
|***Pendiente*** es la relación del camino con la horizontal, donde cero indica horizontalidad y el número de grados indica un grado de inclinación mayor o más pronunciado.|
| **Pendiente** – muestra la pendiente máxima de la carretera en porcentaje desde su punto de ubicación hasta el final del gráfico visible o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla. |
|![esquema de pendiente](@site/static/img/widgets/sch_grade_1.png) ![esquema de pendiente](@site/static/img/widgets/sch_grade_2.png)|


## Widget de rumbo   {#bearing-widget}
  
El rumbo es la dirección hacia un objetivo fuera de su vehículo, como un destino o un punto de origen. Un rumbo puede ser *Relativo* (según su trayectoria) o *Magnético* (según la brújula). Por ejemplo, un rumbo magnético de 180° es la dirección hacia el sur, y un rumbo relativo de 180° es directamente detrás de usted. Los puntos cardinales son las cuatro direcciones principales de la brújula. Son Norte (*N* - 0° o 360°), Este (*E* - 90°), Sur (*S* - 180°) y Oeste (*O* - 270°).  

![Widget de rumbo](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de rumbo](@site/static/img/widgets/bearing_widget.png) ![Widget de rumbo](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget de rumbo](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Elija un panel → Añadir widget →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | **Android:** Puede cambiar el formato de visualización de datos para las unidades angulares: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** Puede cambiar el formato de visualización de datos para las unidades angulares: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Cómo funciona {#how-it-works}

Para mostrar el rumbo, se debe seleccionar un **punto de destino**. Si se selecciona un punto de **destino** (o el **primer punto intermedio**, si lo hay) para la navegación, se utilizará como punto de destino. De lo contrario, se utilizará el **marcador seleccionado más arriba**.  

- El [rumbo relativo](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) es el ángulo entre la dirección de su movimiento hacia adelante y el punto de destino. La **dirección de movimiento hacia adelante** es la **dirección de su movimiento** obtenida de los sensores GPS o, si está parado, **hacia donde ha apuntado su dispositivo** (es decir, la orientación de su dispositivo según su brújula magnética). Ejemplo: Un objeto con un rumbo relativo de 0° está directamente frente a usted y un objeto con un rumbo relativo de 180° está directamente detrás de usted. El **rumbo relativo** es el ángulo entre su dirección hacia adelante y el punto de destino.

- El [rumbo magnético](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) es el ángulo en el sentido de las agujas del reloj (horizontal) entre el norte magnético y el punto de destino observado desde su ubicación. Necesita seguir este valor de la brújula magnética para llegar a su destino. Ejemplo: Si el **rumbo magnético** se muestra como 0° M, necesita moverse estrictamente hacia el norte magnético para llegar al punto de destino.

- El [rumbo verdadero](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) se expresa como el ángulo horizontal entre el meridiano geográfico y una línea en la Tierra. Específicamente, el **rumbo verdadero del punto** es el ángulo medido en grados en el sentido de las agujas del reloj desde la línea del Norte Verdadero. El software de OsmAnd le mostrará el rumbo verdadero y la dirección en nuestra interfaz fácil de usar, facilitando la toma de la decisión correcta con antelación.

### Navegación a lo largo de la línea de rumbo {#navigation-along-the-rhumb-line}

- **Rumbo relativo**. Si se mantiene en un rumbo relativo de 0 grados y avanza, llegará al punto de destino, pero no por la ruta más corta ( [Línea de rumbo](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Rumbo magnético**. Si alinea la brújula de su barco/vehículo con el valor del widget y se dirige hacia adelante, llegará a su destino, pero no por la ruta más corta ( [Línea de rumbo](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Puntos de navegación {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

El grupo de widgets *Punto de navegación* muestra la distancia restante a su destino, el punto intermedio, la hora de llegada al punto intermedio o el tiempo de viaje para la ruta calculada, y la hora estimada de llegada.

### Información de la ruta {#route-information}


![Widget de destino](@site/static/img/widgets/route_information_widget.png)  

El widget *Información de la ruta* proporciona datos en tiempo real sobre la ruta de navegación en curso y una forma rápida de [gestionar una ruta activa](../navigation/setup/route-navigation.md#start--stop-navigation). Ayuda a realizar un seguimiento de los detalles clave de la ruta y le permite detener o reanudar la sesión de navegación actual con una interacción mínima.

**Información mostrada:**

- **Hora estimada de llegada (ETA)**. Muestra la hora de llegada prevista al destino final.
- **Tiempo de viaje restante**. Muestra el tiempo estimado que queda para llegar al destino.
- **Distancia al destino**. Indica la distancia total restante hasta el destino final y las distancias a los puntos intermedios.

**Menú de ajustes**:

- Seleccione una **Vista predeterminada** para priorizar uno de los siguientes valores: *Hora estimada de llegada*, *Tiempo restante*, *Distancia*.
- En **Prioridad de visualización**, seleccione entre *Destino primero (predeterminado)* o *Intermedio primero* para priorizar la información de ruta más relevante.
- Active o desactive la opción **Mostrar botón de expansión** para mostrar u ocultar el botón de expansión de la interfaz de navegación. Esta opción está activada por defecto.

> NOTA: El widget solo es visible durante la navegación.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Añadir widget  →Información de la ruta* |
| Al tocar | Toque el botón con la flecha para abrir el [panel Iniciar/Detener navegación](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distancia al destino {#distance-to-destination}

![Widget de destino](@site/static/img/widgets/destination_widget.png)  

El widget muestra la distancia restante hasta el último punto de destino al seguir una ruta calculada.  

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Al tocar | Mueve el mapa al punto de destino. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Distancia al punto intermedio {#distance-to-intermediate}

![Widget de destino intermedio](@site/static/img/widgets/intermediate_destination_widget.png)

El widget muestra la distancia hasta el primer punto intermedio a lo largo de la ruta calculada. Después de pasar los puntos intermedios, el espacio se actualizará al siguiente punto intermedio. Si no hay puntos intermedios, el widget no se muestra.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Al tocar | **Un punto intermedio** - mueve el mapa al punto intermedio. <br /> **Dos o más puntos intermedios** - abre el menú de la lista de Destinos. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |

### Tiempo hasta el punto intermedio {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/arrival_time_widget_android.png)  ![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Widget de hora de llegada y tiempo restante](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

El widget muestra la *Hora de llegada* o el *Tiempo restante* hasta el primer punto intermedio. Durante la navegación, el tiempo se actualiza constantemente, y tan pronto como se pasa un punto intermedio, el tiempo se actualizará al siguiente punto de ruta. Por ejemplo, si detiene la navegación, el *Tiempo restante* permanecerá sin cambios y la *Hora de llegada* será igual al *Tiempo restante* más la *Hora actual*.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget →  <Translate ios="true" ids="map_widget_time_to_intermediate"/>* |
| Al tocar | Cambia entre *Hora de llegada* y *Tiempo restante* y viceversa. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


### Tiempo hasta el destino {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget de hora de llegada y tiempo intermedio](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget de hora de llegada y tiempo intermedio](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

El widget muestra la *Hora de llegada* o el *Tiempo restante* hasta el último punto de destino. El tiempo se actualiza constantemente durante la navegación y es igual al tiempo de la ruta desde su ubicación actual.  

| | |
|:------------|:------------|
| Activar |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_time_to_destination"/>* |
| Al tocar | Cambia entre *Hora de llegada* y *Tiempo restante* y viceversa. |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |  


## Límite de velocidad {#speed-limit}

![Widget de límite de velocidad](@site/static/img/widgets/speed_limit_widget_2.png)

El widget *Límite de velocidad* muestra el límite de velocidad actual basado en los datos del mapa para su ruta.

- Los datos se toman del [proyecto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- El widget funciona en los modos de navegación pasiva y activa.
- Si los datos de límite de velocidad no están disponibles para una carretera o área específica, *el widget no aparecerá*.

> NOTA: Asegúrese de que sus [mapas estén actualizados](../personal/maps-resources.md#updates-menu) y de que haya descargado todos los datos regionales necesarios para acceder a la información más reciente sobre límites de velocidad.

| |  |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Al tocar | Sin cambios |
| Pulsación larga | Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) |


## Guía de ruta {#route-guidance}


![Widget de próximos giros](@site/static/img/widgets/next_turns_widget.png)

Proporciona guía de ruta en tiempo real, incluyendo la distancia hasta el próximo giro, el nombre de la carretera, el nombre de la calle actual y la información de carriles. Los widgets están activos durante la navegación.

Los widgets de *Guía de ruta* contienen información sobre:

- [Carriles](#lanes) - muestra la ubicación actual de los carriles de la carretera y resalta aquellos por los que debe conducir. (solo para los _paneles Superior / Inferior_)
- [Próximo giro](#next-turn) - el próximo giro con una flecha grande que representa la maniobra y con datos sobre la distancia hasta él.
- [Próximo giro (pequeño)](#next-turn) - el próximo giro con una flecha pequeña que representa la maniobra y con datos de distancia junto a la flecha. (solo para los _paneles Izquierdo / Derecho_)
- [Segundo próximo giro](#next-turn) es el giro siguiente al primer giro, que se activa si está dentro de la distancia de aproximación.

| | |
|:------------|:------------|
| Activar      | **Android:** *Menú → Configurar pantalla →  Panel Izquierdo / Derecho / Superior / Inferior → Guía de ruta → Añadir widget → Carril, Próximo giro, Segundo próximo giro*  |
|      | **iOS:** *Menú → Configurar pantalla →  Panel Izquierdo / Derecho / Superior / Inferior → Guía de ruta → Añadir widget → Carril, Próximo giro, Segundo próximo giro*   |
| Al tocar  | **Próximo giro**: Si las [indicaciones de voz](../navigation/guidance/voice-navigation.md) están activadas, se pronuncia la siguiente maniobra y la distancia hasta ella. <br/> **Carril**: Sin cambios. |
| Pulsación larga    | **Próximo giro**: Abre el [menú contextual del widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Carriles**: Sin cambios. |


### Carriles {#lanes}

![Widgets de carriles](@site/static/img/widgets/lanes_widget.png)

El widget **Carriles** resalta el carril actual cuando la navegación está activa y muestra la disposición de los carriles de la carretera real cuando la navegación es pasiva. También se muestra un indicador de distancia debajo del diagrama de carriles, que representa qué tan lejos queda hasta la maniobra donde se aplica la guía de carril. Este widget solo está disponible para los paneles Superior e Inferior. Los datos se toman del [proyecto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).


### Próximo giro {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![widget de guía de ruta](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![PDI/Favoritos cercanos en iOS](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

Los widgets de navegación **Próximo giro**, **Próximo giro (pequeño)**, **Segundo próximo giro** se pueden colocar en cualquier panel para mayor comodidad del usuario. Sin embargo, la información mostrada difiere dependiendo del tipo de widget y su colocación. 

En los paneles Superior / Inferior, los widgets Próximo giro y Segundo próximo giro se pueden mostrar como Ancho completo (un widget por fila) o Mitad de ancho (dos widgets por fila). El contenido depende del diseño y del tamaño del widget seleccionado (S / M / L).

Ancho completo muestra:
- Primera línea — Distancia hasta el giro + Salida N (si está disponible)
- Segunda línea — Número de carretera con un escudo + nombre de carretera/calle

Mitad de ancho muestra:
- Primera línea — Distancia hasta el giro
- Segunda línea — Salida N (si está disponible) + número de carretera con un escudo + nombre de carretera/calle

**Próximo giro** utiliza una flecha grande y admite diseños de Ancho completo / Mitad de ancho en los paneles Superior / Inferior. **Próximo giro (pequeño)** utiliza una flecha pequeña con la distancia colocada junto a la flecha y está destinado a los paneles Izquierdo / Derecho. **Segundo próximo giro** muestra la maniobra después del próximo giro y se activa cuando la segunda maniobra está dentro de la distancia de aproximación.

### Indicaciones de color {#color-prompts}

Esta tabla muestra el tiempo aproximado hasta que se activan las indicaciones y la indicación de color correspondiente de las flechas para realizar la maniobra. Para más información, consulte la [documentación técnica](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) o el artículo [Indicaciones de voz](../navigation/guidance/voice-navigation.md).

| Color     | ~ Tiempo de activación | Distancia   | Tipo de indicación     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Verde  | 5 segundos      | Cerca   | Gire ahora        |
| 🟡 Amarillo | 20 segundos     | Aproximándose| Gire en `x` m   |
| ⚪ Gris   | > 100 segundos  | Distante    | Prepárese para girar |

El mismo significado de color se aplica al widget de Carriles. El widget de Carriles se muestra según la configuración del tiempo de aproximación, y los colores de los carriles siguen la etapa de la indicación de voz.

<!--
### Color Prompts for Lanes {#color-prompts-for-lanes}

Displays a widget by approach time settings. Lane's color is associated with [voice prompts](../navigation/guidance/voice-navigation.md) and time remaining to perform the maneuver.

| Color     | ~ Trigger Time | Distance    | Prompt type |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Green  | 5 seconds      | Close by    | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Yellow | 20 seconds     | Approaching | [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
-->


## Widget de alertas {#alert-widget}

![Widgets de información de alerta](@site/static/img/widgets/alert_information_widget.png)

El **Widget de alertas** combina varios tipos de alertas que se muestran en la esquina inferior izquierda mientras navega.  

- Tiene la capacidad de activar y desactivar alertas como *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* y *<Translate android="true" ids="show_tunnels"/>*. Otras alertas están activas por defecto si el widget está habilitado.  

- Para el tipo de alerta *Límite de velocidad*, puede ajustar el valor de <Translate android="true" ids="speed_limit_exceed"/> en la configuración de indicaciones de voz para que coincida mejor con la velocidad del vehículo y la velocidad del GPS.  

- La mayoría de las alertas se muestran en la pantalla y se anuncian mediante una indicación de voz durante 15 segundos, así como el tiempo de activación al pasar un punto de ruta, un punto favorito o un PDI. Lea más [aquí](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Activar | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Tipos de alerta {#alert-types}

Los tipos de alerta tienen un diseño visual diferente, que depende de la **<Translate android="true" ids="driving_region"/>**  y se puede configurar a través de  *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd no pretende representar señales de tráfico 100% idénticas, pero señala algunas similitudes.

| | | |
|:------------|:------------|:------------|
| Nombre | Descripción | Icono |
| *<Translate android="true" ids="show_traffic_warnings"/>* | La [moderación del tráfico](https://en.wikipedia.org/wiki/Traffic_calming) utiliza el diseño físico y otras medidas para mejorar la seguridad de los automovilistas, peatones y ciclistas. | ![Widgets de alerta de moderación de tráfico](@site/static/img/widgets/warnings_traffic_calming.png)  ![Widgets de alerta de moderación de tráfico en EE.UU.](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Un [paso de peatones](https://en.wikipedia.org/wiki/Pedestrian_crossing) (principalmente en inglés británico) o cruce peatonal es un lugar designado para que los peatones crucen una carretera, calle o avenida. OsmAnd muestra la alerta del paso de peatones no controlado.  | ![Widgets de alerta de moderación de tráfico](@site/static/img/widgets/warnings_pedestrian.png)  ![Widgets de alerta de moderación de tráfico en EE.UU.](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | En la mayoría de los países, los [límites de velocidad en carretera](https://en.wikipedia.org/wiki/Speed_limit) establecen la velocidad máxima, media o mínima legal a la que los vehículos pueden circular en un tramo determinado de la carretera. En OsmAnd, la alerta se muestra cuando excede la velocidad. Puede establecer parámetros de exceso de velocidad (0, 5, 10... km/h). ![Widgets de alerta de exceso de velocidad](@site/static/img/widgets/ex_warning_speed.png)  | ![Widgets de alerta de límite de velocidad](@site/static/img/widgets/warnings_limit.png) ![Widgets de alerta de límite de velocidad en CA](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widgets de alerta de límite de velocidad en EE.UU.](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Un túnel es un pasaje subterráneo que pasa por debajo de una montaña, un río o una zona urbana congestionada. En OsmAnd, la alerta *Túneles* tiene información sobre la longitud del túnel. Si está en un túnel, muestra la distancia hasta el final del túnel.   ![Widgets de alerta de ejemplo de túnel](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Widgets de alerta de túnel](@site/static/img/widgets/warnings_tunnel.png)  ![Widgets de alerta de túnel en EE.UU.](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | Las [cámaras de control de tráfico](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) y las [cámaras de velocidad](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) registran infracciones de tráfico, incluyendo exceso de velocidad, pasar semáforos en rojo y otros tipos de comportamiento ilegal. <br />**NOTA:** Las alertas de cámaras de velocidad están prohibidas o son ilegales en algunos países. Para [eliminar completamente las cámaras de velocidad](../personal/global-settings.md#legal) de OsmAnd, vaya al *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* principal | ![Widgets de alerta de moderación de tráfico](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Una [señal de stop](https://en.wikipedia.org/wiki/Stop_sign) es una señal de tráfico diseñada para notificar a los conductores que deben detenerse por completo y asegurarse de que la intersección esté libre de vehículos y peatones antes de continuar más allá de la señal.  | ![Widgets de alerta de stop](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Esta advertencia significa que hay un [cruce ferroviario](https://en.wikipedia.org/wiki/Crossbuck) más adelante. | ![Widgets de alerta de ferrocarril](@site/static/img/widgets/warnings_railways.png) ![Widgets de alerta de ferrocarril en CA](@site/static/img/widgets/warnings_railways_ca.png)  ![Widgets de alerta de ferrocarril en EE.UU.](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Esta advertencia indica que hay un control fronterzo más adelante.| ![Widgets de alerta de control fronterizo](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | Los [símbolos de peligro o símbolos de advertencia](https://en.wikipedia.org/wiki/Hazard_symbol) son símbolos reconocibles diseñados para advertir sobre materiales, lugares u objetos peligrosos, incluyendo corrientes eléctricas, venenos y radiactividad. | ![Widgets de alerta de peligro](@site/static/img/widgets/warnings_hazard.png)  ![Widgets de alerta de peligro en EE.UU.](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Esta advertencia indica que hay una cabina de peaje para una carretera de peaje más adelante.   ![Widgets de alerta de cabina de peaje](@site/static/img/widgets/ex_toll_booth.png) | ![Widgets de alerta de límite de velocidad](@site/static/img/widgets/warnings_limit.png) |


## Nombre de la calle {#street-name}

El widget de nombre de la calle muestra **el nombre de la calle actual** con una flecha recta, o **el nombre de la siguiente calle** con la maniobra a realizar. El nombre de la calle generalmente consiste en un escudo de carretera, un [nombre](https://wiki.openstreetmap.org/wiki/Key:name), una [ref](https://wiki.openstreetmap.org/wiki/Key:ref), una [ref internacional](https://wiki.openstreetmap.org/wiki/Key:int_ref) y un [destino](https://wiki.openstreetmap.org/wiki/Key:destination). 

En los **Ajustes** del widget puede seleccionar mostrar siempre **el nombre de la calle actual** y usarlo con el widget [**Próximo giro**](#next-turn). La **Información del próximo giro** está DESACTIVADA por defecto. Si la habilita, el cambio entre el nombre de la calle actual y el nombre de la siguiente calle ocurre cuando se acerca al lugar donde desea realizar la maniobra (~20 segundos), igual que la indicación de voz [Gire en X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Nombre de calle sin próximo giro](@site/static/img/widgets/without_next_turn_and.png) ![Nombre de calle con próximo giro](@site/static/img/widgets/with_next_turn_and.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

 ![Nombre de calle sin próximo giro en iOS](@site/static/img/widgets/without_next_turn_ios.png) ![Nombre de calle con próximo giro en iOS](@site/static/img/widgets/with_next_turn_ios.png) 

</TabItem>

</Tabs>


| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Añadir widget → <Translate android="true" ids="map_widget_top_text"/>* |
| Ajustes | Seleccione para mostrar siempre **el nombre de la calle actual** o mostrar **el nombre de la siguiente calle** al aproximarse a la maniobra |
| Al tocar | Abre un menú contextual con Ajustes (cambiar Información del próximo giro ACTIVADA/DESACTIVADA) y Eliminar |


## PDI / Favoritos cercanos {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![PDI/Favoritos cercanos en Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![PDI/Favoritos cercanos en iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

El widget **PDI/Favoritos/Puntos de ruta cercanos** se combina con [Nombre de la calle](#street-name) y muestra los Puntos de interés, Puntos de ruta de la ruta seguida y Favoritos que se aproximan y se pasan a lo largo de la ruta.  

Muestra el **nombre**, el **icono del punto** y 2 **distancias**:

- **Distancia de la ruta** (arriba) muestra cuánta distancia se necesita cubrir siguiendo la ruta.
- **Distancia de desviación** es una distancia en línea recta desde el punto más cercano de la ruta hasta el punto mismo.

**iOS** - Además de la distancia al punto de ruta más cercano, también se muestra el lado (izquierdo o derecho) de la ruta en el que se encuentra el punto de ruta.

| | |
|:------------|:------------|
| Activar | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Iniciar navegación → botón del lápiz* |
| Al tocar | Sin cambios |


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets de información](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y Regla](./radius-ruler.md)
- [Widgets de marcadores](./markers.md)
- [Acción rápida](./quick-action.md)