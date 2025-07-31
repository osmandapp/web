---
source-hash: c79e974f36d7aa431b244d904400ae8e4b3fa0f00f5d843333d559e34b86a4b7
sidebar_position: 4
title: Detalles de la ruta
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

OsmAnd te permite encontrar la mejor ruta y explorar sus detalles. La aplicación proporciona información detallada sobre la ruta, como la distancia, el [tiempo de viaje](#distance--time--co2), el [tipo de superficie](#road-attributes), las [diferencias de elevación](#elevation-info), los [datos de huella de CO2](#distance--time--co2) y la [información de giro](#turn-by-turn-information). También puedes [analizar](#analyze-on-map) la ruta en el mapa, obtener información sobre los segmentos de la pista, [imprimir](#print) el plan de ruta, [guardar](#share--export-actions) la ruta y compartirla con otros. Con esta funcionalidad, siempre conocerás los detalles de la ruta y podrás planificar tu viaje de manera más eficiente.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalles de la ruta Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Detalles de la ruta iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>

### Cómo acceder {#how-to-access}

Después de calcular una ruta en el [menú de Navegación](./route-navigation.md#start--stop-navigation), tienes acceso a los "Detalles" de esa ruta. Esta información es útil para usarla antes de comenzar un viaje para mejorar la planificación de la ruta o para verificar información sobre el camino por delante mientras conduces.
Hay tres formas de acceder al *menú Detalles de la ruta*.

1. Ve al *Menú principal → Navegación*, establece la ruta y toca el botón *Detalles*.
2. Toca el icono de *Navegación* en la pantalla del mapa, establece la ruta y toca el botón *Detalles*.
3. Ve al menú *Mis lugares*, toca cualquier pista disponible en la lista *Menú → Mis lugares → Pistas*, selecciona el icono de *Navegación* en el menú contextual de la pista en la *Descripción general* y toca *Detalles*.

Dependiendo de la [configuración del perfil](../../personal/profiles.md) seleccionada y del [tipo de enrutamiento](../../navigation/routing/osmand-routing.md#routing-types) seleccionado, es posible que no se muestren algunos detalles de la ruta. Además, los detalles de la ruta dependen en gran medida de la *cobertura de datos de OpenStreetMap*.

## Distancia / Tiempo / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalles de la ruta](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***La distancia total*** se calcula entre todos los segmentos de la ruta, incluidos los puntos intermedios en las [unidades](../../personal/profiles.md#units--formats) seleccionadas.

- ***El tiempo estimado de viaje*** se calcula como la suma de los tiempos en cada segmento y las penalizaciones de tiempo en puntos específicos. Cada perfil de navegación tiene diferentes reglas para calcular la velocidad en un segmento y qué penalizaciones deben incluirse (configuradas en [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Por ejemplo, los perfiles de coche y bicicleta toman la velocidad promedio por segmento de los datos de OpenStreetMap, pero los perfiles de peatones, barcos y aviones usan la velocidad *predeterminada* de la [Configuración de navegación](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***La hora estimada de llegada*** se calcula como una hora a partir de ahora en la hora local del origen utilizando el *tiempo estimado de viaje*.

- ***Los datos de huella de CO2*** estiman aproximadamente cuánto CO2 se producirá al seguir la ruta. Debes configurar el [tipo de motor de combustible](../guidance/navigation-settings.md#fuel-used-by-motor) en los parámetros del vehículo para obtener una aproximación más precisa.

## Información de elevación {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalles de la ruta](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

La **información de elevación** se proporciona en todos los perfiles de ruta sin conexión de OsmAnd, excepto en los perfiles que utilizan la [navegación en línea recta](../routing/straight-line-routing.md). Los datos de elevación forman parte de los mapas sin conexión de OsmAnd y se calculan en función de las [fuentes SRTM públicas](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Rango de altitud*. Muestra la elevación mínima/máxima en la ruta.
- *Altitud promedio*. Muestra la elevación promedio ponderada en la ruta.
- *Cuesta arriba / cuesta abajo*. Muestra la relación del camino con la horizontal, donde cero indica horizontalidad y el número de grados indica un grado de pendiente mayor o más pronunciado. La pendiente muestra la pendiente máxima de la carretera en porcentaje desde tu punto de ubicación hasta el final del gráfico visible, o para la sección seleccionada de la ruta sin el punto de ubicación visible en la pantalla.

***Una licencia para los datos DEM utilizados por OsmAnd para la detección del terreno***
Los datos de altitud en el mapa (entre 70 grados de latitud norte y 70 grados de latitud sur) se obtuvieron de mediciones realizadas como parte de la *Misión de Topografía por Radar del Transbordador (SRTM)*. Utilizó el *Radiómetro Avanzado de Emisión y Reflexión Térmica Espacial (ASTER)*, la herramienta de imágenes principal en el *Sistema de Observación de la Tierra de la NASA*. Para obtener información completa, consulta la [Licencia](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).

<details>
<summary>Datos DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Los datos originales utilizados para este producto fueron suministrados por AW3D de JAXA.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Modelos digitales de terreno (DTM) LiDAR de Sonny de Europa</a>.

</details>

### Gráfico de elevación {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalles de la ruta](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

Los [gráficos](../../map/tracks/track-context-menu.md#altitude--speed-graphs) muestran visualmente información sobre la altitud y la pendiente de tu ruta de navegación y tu posición actual en este gráfico con la altitud y la pendiente actuales. El gráfico se traza en dos ejes. El eje X es la distancia en tu ruta. El primer eje Y es la altitud sobre el nivel del mar, cuyo valor depende del terreno, y el segundo eje Y es la [pendiente](https://en.wikipedia.org/wiki/Grade_(slope)) aproximada. Puedes ver el gráfico de elevación para toda la ruta o solo para un intervalo seleccionado escalando el gráfico.

- ***Acercar/Alejar***. Por defecto, el gráfico muestra la ruta desde la ubicación actual hasta el punto de destino. Puedes usar [movimientos de dos dedos](../../map/interact-with-map.md#gestures) para acercar y alejar para una vista más detallada. También puedes mover el gráfico hacia la derecha, hacia adelante en la ruta y hacia atrás a la ubicación actual. *Tales manipulaciones también se refieren al bloque visual de información en el bloque [Atributos de la carretera](#road-attributes).*

- ***Pin de ubicación***. Si deseas ver la información en un punto particular más adelante en tu ruta, puedes tocar en cualquier parte del gráfico y aparecerá un puntero con la altitud y el porcentaje de pendiente.

## Analizar en el mapa {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalles de la ruta Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Detalles de la ruta iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

La herramienta **Analizar en el mapa** es similar a la herramienta para ver los [detalles de la pista](../../map/tracks/index.md#analyze-track-on-map) en el mapa. Te permite ver e interactuar visualmente con varios gráficos y ver el punto seleccionado en el mapa.

Si hay datos presentes, puedes seleccionar uno de los siguientes tipos:

- *Eje Y*:
   - [*Altitud*](../../map/tracks/track-context-menu.md#altitude). Este es el [proceso](https://wiki.openstreetmap.org/wiki/Altitude) de obtener la altura sobre un nivel fijo.
   - [*Pendiente*](https://wiki.openstreetmap.org/wiki/Key:incline). La [pendiente de la forma del terreno](https://en.wikipedia.org/wiki/Grade_(slope)) significa la tangente del ángulo de inclinación de la superficie con respecto a la horizontal.
   - [*Velocidad*](../../map/tracks/track-context-menu.md#speed). Valores de velocidad al conducir en una pista.
   - Gráficos con dos tipos de datos: &nbsp;*Altitud/Pendiente*, &nbsp;*Altitud/Velocidad*, &nbsp;*Pendiente/Velocidad*, &nbsp;*Zoom animado/Velocidad*.
- *Eje X*:
   - *Distancia*. Puedes ver datos de ruta que se relacionan con la longitud de la ruta.
   - *Tiempo*. Puedes ver datos de ruta que se relacionan con el tiempo calculado para esa ruta
   - *Hora del día*. Puedes ver datos de ruta en ciertos momentos del día.

### Tipo de interacciones {#type-of-interactions}

- *Tocar y deslizar*. Toca el gráfico para mostrar información sobre el punto de la pista y el movimiento a lo largo de ella. El gráfico resalta la ubicación del punto en el mapa y muestra información sobre él en la regla.
- *Escala*. Escala el gráfico con el [gesto de dos dedos](../../map/interact-with-map.md#gestures).
- *Seguir mi ubicación* (*Solo Android*). Puedes tocar [Mi ubicación](../../map/interact-with-map.md#my-location-and-zoom) para sincronizar la vista del mapa y el gráfico con tu ubicación. A medida que te muevas, el gráfico se desplazará de izquierda a derecha, mostrando información por delante de tu camino.

## Atributos de la carretera {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Ruta de navegación Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> pestaña*

![Ruta de navegación iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Los atributos de la carretera son accesibles en los [Detalles de la ruta](#how-to-access) y muestran información relacionada con el segmento de OpenStreetMap y los datos de elevación. La indicación de color está relacionada con la forma en que se representan los atributos específicos en el mapa (consulta la [leyenda del mapa](../../map-legend/osmand.md#surface-smoothness)). Los gráficos de barras también son interactivos, y es posible ver información en una ubicación específica tocando el gráfico.

- [**Tipo de carretera**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). El tipo de carretera se determina en función de su propósito funcional y características, como el número de carriles, los límites de velocidad, la capacidad de carga, la presencia de caminos peatonales y para bicicletas, arcenes y otros parámetros. Los diferentes tipos de carreteras pueden tener diferentes restricciones y reglas de tráfico.

   Por ejemplo, las [autopistas](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) principales suelen tener un límite de velocidad alto y pueden dividirse en carriles, y las [carreteras locales](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) pueden tener un límite de velocidad bajo y un carril en cada dirección.

- [**Superficie**](https://wiki.openstreetmap.org/wiki/Key:surface). Las superficies de las carreteras son la capa superior del pavimento que entra en contacto con las ruedas de los vehículos. Pueden ser de diferentes tipos según sus propiedades y propósito funcional.

   Por ejemplo, el pavimento de [asfalto](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) proporciona buena tracción y aislamiento acústico, y el pavimento de [hormigón](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) es más duradero y tiene una mayor capacidad de carga. También se pueden utilizar otros materiales como grava, piedra triturada, tablas de madera y otros para crear una superficie de carretera.

- [**Pendiente**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Esta es una medida del ángulo de la pendiente de la carretera, expresada como un porcentaje. Indica cuán inclinada está la carretera hacia arriba o hacia abajo con respecto al horizonte, y se calcula midiendo el cambio vertical en la elevación de la carretera por la distancia horizontal y multiplicando el valor resultante por 100%.

   Por ejemplo, si la pendiente de la carretera es del 10%, eso significa que por cada 100 metros de distancia horizontal a lo largo de la carretera, subes o bajas 10 metros. La pendiente de la carretera puede afectar la velocidad de tu vehículo, el frenado, el consumo de combustible y la seguridad al conducir, especialmente en carreteras resbaladizas en invierno.

- [**Firmeza de la superficie**](https://wiki.openstreetmap.org/wiki/Key:tracktype). La superficie de la carretera puede recuperarse de la deformación o la carga. Cuanto mayor sea la firmeza de la superficie, menor será la posibilidad de daños en el vehículo y más cómoda será la carretera. La firmeza de la superficie también puede afectar la velocidad del vehículo y el consumo de combustible.

- [**Inclinación**](https://wiki.openstreetmap.org/wiki/Key:incline). Indica qué porcentaje de pendientes hay en tu ruta.

- [**Suavidad**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Aplicable a todo tipo de caminos y áreas, como autopistas, estacionamientos, playas y senderos, e indica la usabilidad de la ruta. Te brinda información de que puedes conducir sin un riesgo significativo de daños, como los bajos del vehículo, o lesiones, como una caída.

- [**Carreteras de invierno y hielo**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Muestra el esquema de color de la ruta según la clasificación de las [carreteras de invierno](../../map/vector-maps.md#winter-and-ski).

- [**Dificultad de los senderos para caballos**](https://wiki.openstreetmap.org/wiki/Riding). Este atributo de la carretera indica la dificultad de la ruta al montar a caballo. Adecuado para el [enrutamiento a caballo](../../navigation/routing/horse-routing.md).

## Información de giro a giro {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

La información de giro a giro proporciona [instrucciones](#instructions) detalladas sobre cómo navegar por una ruta. Además del menú *Detalles*, también se muestra en los widgets [*Maniobras de ruta*](../../widgets/nav-widgets.md#route-maneuvers) y [*Carriles*](../../widgets/nav-widgets.md#lanes). Esta información te ayuda a navegar mejor por tu ruta y te permite planificar con anticipación.

Toca una sección específica de la ruta en la lista para ver información detallada o realizar cambios según sea necesario. El mapa se amplía y se abre un [menú contextual](../../map/map-context-menu.md).

### Instrucciones {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Las instrucciones incluyen información sobre cómo moverse a lo largo de la ruta, como:

- La [*flecha del siguiente giro*](../../widgets/nav-widgets.md#next-turn) y *su dirección*.
- *Distancia a la maniobra*.
- Una descripción de *qué hacer*, que incluye el *nombre de la calle o sendero*.
- *Distancia total* y *tiempo de la ruta*.
- *Diseño de [carriles](../../widgets/nav-widgets.md#lanes)* para la carretera actual.
- [*Indicador de arcén*](#roadside-indicator) (*Solo iOS*).

### Indicador de arcén {#roadside-indicator}

:::caution Solo iOS
Este tipo de instrucción actualmente *no está disponible para la versión de Android* de la aplicación OsmAnd.
:::

![Indicación lateral](@site/static/img/navigation/route/side_indication.png)

En la lista de instrucciones, el **indicador de arcén** muestra qué dirección desde tu ubicación actual y dirección de movimiento hacia tu punto final es tu destino, esto puede ser izquierda, derecha y recto.

Se mide el ángulo entre tu destino (*[Orientación](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) desde el último punto*) y el último segmento (*Orientación a los 2 últimos puntos de la ruta*), se divide en 3 sectores de 120 grados, y el resultado es que puedes ver en qué dirección está tu destino.

- `-60 °` &nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`60 °` &nbsp; &nbsp; &nbsp; - marcado como **recto**.
- `-180 °` &nbsp; &nbsp; a &nbsp; &nbsp;`-60 °` &nbsp; &nbsp; - marcado como lado **izquierdo**.
- `60 °` &nbsp; &nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`180 °` &nbsp; &nbsp; - marcado como lado **derecho**.

### Imprimir {#print}

<InfoAndroidOnly/>

![detalles de la ruta](@site/static/img/navigation/route/route_details_print-2.png)

La función **Imprimir** de una descripción de ruta giro a giro puede ser útil si prefieres tener una copia física de la descripción de tu ruta en lugar de usar dispositivos electrónicos, o si no tienes acceso a aplicaciones de navegación o navegadores GPS, no tienes acceso a Internet, o si necesitas información para otras personas que viajan contigo.

Una descripción de ruta impresa proporciona [instrucciones giro a giro](#instructions) detalladas sobre cómo navegar por tu ruta, incluida la distancia hasta el siguiente giro, la dirección de conducción y los nombres de las calles o senderos, así como información sobre la distancia y el tiempo de viaje.

Esta información puede ser útil cuando estás planificando un viaje y quieres estimar el tiempo y la distancia entre diferentes puntos de la ruta y determinar la hora estimada de llegada.

La capacidad de **imprimir** o **guardar** la información giro a giro **en formato PDF** es especialmente útil cuando se viaja largas distancias o en lugares desconocidos cuando se necesita tener una idea más detallada de la ruta y el tiempo que se tarda en llegar.

## Compartir / Exportar (Acciones) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

La sección de navegación Detalles de la ruta tiene opciones que te permiten realizar ciertas acciones con la información de la ruta.

- [**Imprimir**](#print). Te permite imprimir o guardar información de ruta giro a giro.
- **Exportar/Guardar**. Te permite guardar la información de la ruta **como una nueva pista** para su uso posterior sin conexión. La pista exportada contiene toda la información sobre los atributos de la carretera y las instrucciones de giro. Por lo tanto, la [navegación por esta pista](./gpx-navigation.md) debe proporcionar todas las funciones como la navegación por la ruta.
- **Compartir**. Comparte una pista exportada o un enlace a la ruta que se puede abrir en otro dispositivo con OsmAnd.

## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](./route-navigation.md)
- [Navegación por pista](./gpx-navigation.md)
- [Navegación por marcadores](./markers-navigation.md)
- [Configuración de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Mensajes de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: noviembre de 2024*