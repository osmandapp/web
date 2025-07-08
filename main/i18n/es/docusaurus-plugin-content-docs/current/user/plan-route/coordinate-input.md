---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title: Entrada de Coordenadas
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



<InfoAndroidOnly />

## Resumen {#overview}

*Entrada de Coordenadas* es una herramienta sencilla y fácil de usar para crear waypoints especificando su ubicación geográfica. Esta función puede ser útil para navegar a ciertos lugares que solo conoces por sus coordenadas: los puntos añadidos se pueden [guardar](#save-as-track) como una pista GPX y usarse más tarde para [navegación GPX](../navigation/setup/gpx-navigation.md) o [navegación por marcadores](../navigation/setup/markers-navigation.md#add-gpx).

![Resumen de entrada de coordenadas](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Cómo usar {#how-to-use}

Puedes crear waypoints desde el menú *[Marcadores de mapa](../personal/markers.md#actions)* o desde [Mis lugares](../personal/myplaces.md) (ver capturas de pantalla). Sigue estas rutas para acceder a la opción de entrada de coordenadas:
- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Botón Tierra en la parte inferior de la pantalla*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Entrada de coordenadas cómo encontrar](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Entrada de coordenadas cómo encontrar](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Después de abrir la pantalla de entrada de coordenadas:

- &nbsp;Asegúrate de que se utilicen las [unidades de medida](#coordinates-format) correctas. Si no, cambia el formato de coordenadas en el menú [Opciones](#options).
- &nbsp;Introduce las coordenadas del punto usando la [plantilla](#add-a-point). Después de pulsar el botón *[Añadir](#add-a-point)*, tu punto se añadirá a la *[lista de puntos](#points-list)*. Si es necesario, puedes introducir puntos adicionales.
- &nbsp;Guarda tu(s) punto(s) como una *[Pista](../personal/tracks/manage-tracks.md)* usando el *[Menú de opciones](#options)* o el botón &#8592; *(Atrás)*.

:::note
Los resultados de la creación de puntos por coordenadas - una *[pista GPX](../personal/tracks/manage-tracks.md)* con waypoints - se pueden encontrar en el [menú Mis lugares](../personal/myplaces.md) (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/> carpeta*).
:::

## Opciones {#options}

Usando el menú de opciones puedes [guardar](#save-as-track) el(los) punto(s) añadido(s) como una pista, activar opciones de entrada avanzadas (teclado del sistema y longitud de dos dígitos), o cambiar el formato de coordenadas.

![Menú de opciones de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - abre un cuadro de diálogo que te permite guardar el punto (o puntos) creado como una pista GPX. Puedes cambiar el nombre de la pista o dejarlo por defecto.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - te permite usar el teclado del sistema Android para introducir coordenadas.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - permite introducir datos de longitud con solo dos dígitos. Esto puede ser útil para longitudes de 0° a 99° (por ejemplo, en Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - permite cambiar el formato de coordenadas para la entrada.

### Formato de coordenadas {#coordinates-format}

Al introducir coordenadas, es importante asegurarse de que se utilicen las unidades de medida adecuadas. Admitimos grados decimales (DD), grados y minutos, o grados, minutos y segundos (DMS).

|Formato de coordenadas| Ejemplo |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Añadir un punto {#add-a-point}

Después de seleccionar las unidades correctas, estás listo para introducir las coordenadas de los futuros waypoints.
La pantalla de entrada de coordenadas consta de los siguientes elementos:

![Menú de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Abre el menú *[Opciones](#options)* (descrito anteriormente).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Se utiliza para introducir datos en el formato seleccionado (D - grados, M - minutos, S - segundos). Puedes cambiar el formato de coordenadas en el *[menú <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Botones de semiglobo *<Translate android="true" ids="navigate_point_latitude"/> y <Translate android="true" ids="navigate_point_longitude"/>*. Te permiten cambiar los lados del horizonte: *Sur - Norte* y *Oeste - Este*.
- &nbsp;Campo *Nombre del punto*. Puedes dejar el nombre por defecto o inventar el tuyo propio.
- &nbsp;Botón *X*. Borra el campo de entrada de la línea correspondiente.

### Teclado corto {#short-keyboard}

Para introducir datos, puedes usar el teclado corto (por defecto) o el teclado del sistema (Android). Para cambiar el método de entrada, ve al menú *[Opciones](#options)*. Después de introducir la latitud y la longitud, puedes añadir el punto a la *[lista](#points-list)* usando el botón *+Añadir*.

![Entrada de coordenadas Añadir punto Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- El botón *<Translate android="true" ids="shared_string_add"/>* permite guardar un punto dentro de la *[Lista de puntos](#points-list)*.
- El botón *<Translate android="true" ids="shared_string_clear"/>* restablece todos los datos introducidos.
- &#9032; te permite saltar al siguiente valor.
- Los *botones del teclado* permiten introducir datos, borrarlos, saltar al siguiente valor de coordenada, ocultar el teclado.

### Lista de puntos {#points-list}

Muestra los puntos ya creados: nombre, distancia y dirección a este punto.

![Entrada de coordenadas guardar punto Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Entrada de coordenadas guardar punto Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

El botón **⁝** abre un menú de acciones para editar o eliminar el punto seleccionado.
Cuando tocas un punto, es posible cambiar sus coordenadas. Toca el botón *Aplicar* para guardar los cambios.

## Guardar como pista {#save-as-track}

Para guardar tus puntos como una pista, toca el botón *Atrás* ( &#8592; ) o usa el menú *[Opciones](#options)*.

![Entrada de coordenadas guardar punto Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Entrada de coordenadas guardar punto Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

En el menú emergente, puedes introducir tu propio nombre de pista o guardarlo por defecto. Toca <Translate android="true" ids="shared_string_save"/> para guardar los puntos añadidos como una nueva pista.
Encontrarás tu pista en el [menú Mis lugares](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).