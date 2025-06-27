---
source-hash: 14db1ff378f43e871dddc04366518dc17627a2aeb32b40272132b8334b11f558
sidebar_position: 5
title: Regla de radio y Regla
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

Las **herramientas de regla** en OsmAnd están diseñadas para ayudarte a medir distancias y comprender la [escala del mapa](https://en.wikipedia.org/wiki/Scale_(map)) con precisión.

- La herramienta **Regla** muestra una escala de mapa dinámica en unidades como metros o pies, lo que te ayuda a evaluar visualmente las distancias entre objetos en la pantalla.
- La **Regla de radio** te permite establecer un radio desde cualquier punto del mapa, mostrando círculos concéntricos que representan intervalos de distancia.
- La herramienta **Distancia por toque** te permite medir distancias tocando el mapa, ya sea desde tu ubicación actual o entre dos ubicaciones cualesquiera.

Estas herramientas son útiles para planificar rutas, estimar la proximidad a puntos de referencia y analizar áreas, ya sea para actividades al aire libre o navegación precisa.

![Pantalla de regla de radio](@site/static/img/widgets/radius_ruler_screen.png)


## Regla {#ruler}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Herramienta de regla](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Herramienta de regla](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

La **Regla** muestra la escala actual del mapa como un segmento de línea etiquetado con su longitud en el mundo real (por ejemplo, 100 m o 500 pies), en la parte inferior de la pantalla. Características:

- La escala se adapta dinámicamente a medida que acercas o alejas el zoom.
- Proporciona una referencia visual para estimar distancias reales entre objetos en el mapa.
- La longitud del segmento se redondea a unidades convenientes (por ejemplo, 100 m), coincidiendo aproximadamente con el ancho de un pulgar para un uso intuitivo.

Esta herramienta es útil cuando necesitas una comprensión rápida de los tamaños de los objetos o las distancias sin colocar marcadores o rutas.

| | |
|------------|------------|
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widget de regla de radio {#radius-ruler-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="radius_ruler_item"/>*

![Posición de visualización Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="radius_ruler_item"/>*

![Posición de visualización Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

El [Widget de regla de radio](../widgets/info-widgets.md#radius-ruler) muestra la distancia entre tu ubicación actual (*Mi ubicación*) y el centro del mapa. También puedes mover el mapa para establecer cualquier punto central personalizado. Características:

- Muestra círculos concéntricos centrados en el punto seleccionado.
- El primer círculo refleja la [escala del mapa](#ruler) actual para una referencia visual rápida.
- Se ajusta automáticamente al hacer zoom para mantener valores de radio precisos.

Usa este widget para estimar la proximidad a puntos de interés o planificar alrededor de un área definida.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pantalla de regla de radio](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Regla de radio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Regla de radio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Regla de radio"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Brújula para regla de radio {#compass-for-radius-ruler}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Regla de brújula](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Regla de brújula](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Cuando la **Regla de radio** está activa, el mapa muestra una superposición de brújula para ayudarte a orientarte en el espacio. La superposición muestra cómo está alineado el mapa con respecto al Norte verdadero, y puede incluir un triángulo azul que indica la dirección actual del dispositivo.

- El anillo de la brújula muestra la orientación del mapa, ya sea con el Norte hacia arriba o girado.
- Un **triángulo azul** indica la dirección en la que está orientado tu dispositivo.
- Para usar esta función, el dispositivo debe admitir y habilitar un **sensor de brújula** (brújula GPS, magnetómetro).
- Sostener el dispositivo horizontalmente mejora la precisión y la visualización.
- Si el **triángulo azul** y la **flecha roja** (Norte) apuntan hacia arriba, el dispositivo está alineado con el Norte verdadero.

Esta superposición es útil para la navegación al aire libre, permitiéndote hacer coincidir la [orientación del mapa](../map/interact-with-map.md#map-orientation--compass) con el entorno real.

| | |
|------------|------------|
| Habilitar | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → Añadir widget → <Translate android="true" ids="radius_ruler_item"/>* |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Posición central / inferior {#center--bottom-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Posición de visualización Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Regla de radio hacia abajo](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Otros → Posición de ubicación en pantalla*

![Posición de visualización Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Regla de radio hacia abajo](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Para aumentar el radio visible alrededor de tu ubicación, puedes cambiar la posición de la Regla de radio seleccionando la opción *Centro* o *Abajo*.

Para obtener más información sobre *la posición en la pantalla*, consulta el artículo [Configurar pantalla](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Vista 3D {#3d-view}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Formato 3D de la regla de radio](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Formato 3D de la regla de radio](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Puedes cambiar a la **vista 3D** para visualizar mejor las distancias y el terreno circundante al usar la Regla de radio. Esta vista inclina el mapa y proporciona un efecto de perspectiva que expande el radio visible.

- Toca [el botón de ubicación](../map/interact-with-map.md#my-location-and-zoom) para centrarte en tu posición.
- Usa un gesto de [deslizar dos dedos hacia arriba](../map/interact-with-map.md#gestures) para inclinar el mapa al modo 3D.

Los círculos de radio aparecerán con profundidad, lo cual es particularmente útil para la planificación de rutas en áreas montañosas o entornos urbanos donde el contexto vertical es importante.


## Distancia por toque {#distance-by-tap}

![Distancia entre dos puntos aleatorios en el mapa](@site/static/img/widgets/distance_between_two_random_points.png)

La herramienta **Distancia por toque** te permite medir distancias entre puntos en el mapa sin usar la Regla de radio ni crear una ruta.

Hay dos casos de uso:

- **Distancia desde tu ubicación a un punto**
  Toca en cualquier lugar del mapa y aparecerá una línea recta desde tu ubicación actual hasta el punto tocado, junto con una etiqueta de distancia. La línea permanece en pantalla incluso si tocas en otro lugar.

- **Distancia entre dos puntos cualesquiera**
  Toca dos puntos en el mapa simultáneamente (multitáctil). Una línea conecta los dos puntos y se muestra la distancia medida.

| | |
|------------|------------|
| Habilitar |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Tamaño del texto (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Formato de unidades | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Guías en video {#video-guides}

Mira estos breves tutoriales para aprender a usar la Regla de radio y las herramientas relacionadas en OsmAnd:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Acción rápida](./quick-action.md)
- [Widgets de marcadores](./markers.md)

> *Última actualización: Mayo de 2025*