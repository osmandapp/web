---
source-hash: 1505593576ed8b4e4ca8274ad047f82a70181f3fcafd8e9ca6d60e795b2f0724
sidebar_position: 3
title:  Entrada de coordenadas
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

*Entrada de coordenadas* es una herramienta sencilla y fácil de usar para crear puntos de ruta especificando su ubicación geográfica. Esta función puede ser útil para navegar a ciertos lugares de los que solo conoce sus coordenadas: los puntos añadidos se pueden [guardar](#save-as-track) como una ruta GPX y utilizarse más tarde para la [navegación GPX](../navigation/setup/gpx-navigation.md) o la [navegación por marcadores](../navigation/setup/markers-navigation.md#overview).

![Resumen de la entrada de coordenadas](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Cómo utilizar {#how-to-use}

Puede crear puntos de ruta desde el menú *[Marcadores del mapa](../personal/markers.md#actions)* o desde [Mis lugares](../personal/myplaces.md) (ver capturas de pantalla). Por favor, siga estas rutas para acceder a la opción de entrada de coordenadas:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Botón de la Tierra en la parte inferior de la pantalla*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Cómo encontrar la entrada de coordenadas](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Cómo encontrar la entrada de coordenadas](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Después de haber abierto la pantalla de entrada de coordenadas:

- &nbsp;Asegúrese de que se utilizan las [unidades de medida](#coordinates-format) correctas. Si no, cambie el formato de las coordenadas en el menú [Opciones](#options).
- &nbsp;Introduzca las coordenadas del punto utilizando la [plantilla](#add-a-point). Después de pulsar el botón *[Añadir](#add-a-point)*, su punto se añadirá a la *[lista de puntos](#points-list)*. Si es necesario, puede introducir puntos adicionales.
- &nbsp;Guarde su(s) punto(s) como una *[Ruta](../personal/tracks/manage-tracks.md)* utilizando el *[menú Opciones](#options)* o el botón &#8592; *(Atrás)*.

:::note
Los resultados de la creación de puntos por coordenadas - una *[ruta GPX](../personal/tracks/manage-tracks.md)* con puntos de ruta - se pueden encontrar en el [menú Mis lugares](../personal/myplaces.md) (carpeta *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opciones {#options}

Usando el menú de opciones puede [guardar](#save-as-track) el/los punto(s) añadido(s) como una ruta, activar opciones de entrada avanzadas (teclado del sistema y longitud de dos dígitos), o cambiar el formato de las coordenadas.

![Menú de opciones de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - abre un cuadro de diálogo que le permite guardar el punto (o puntos) creado como una ruta GPX. Puede cambiar el nombre de&nbsp;la ruta o dejarlo por defecto.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - le permite utilizar el teclado del sistema Android para introducir las coordenadas.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - permite introducir datos de longitud con sólo dos dígitos. Esto puede ser útil para longitudes de 0° a 99° (por ejemplo, en Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - permite cambiar el formato de las coordenadas para la entrada.

### Formato de coordenadas {#coordinates-format}

Al introducir las coordenadas, es importante asegurarse de que se utilizan las unidades de medida adecuadas. Soportamos grados decimales&nbsp;(DD), grados y minutos, o grados, minutos y segundos&nbsp;(DMS).

|Formato de coordenadas| Ejemplo |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Añadir un punto {#add-a-point}

Después de seleccionar las unidades correctas, está listo para introducir las coordenadas de los futuros puntos de ruta.
La pantalla de entrada de coordenadas consta de los siguientes elementos:

![Menú de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Abre el menú *[Opciones](#options)* (descrito anteriormente).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Se utiliza para introducir datos en el formato seleccionado (D - grados, M - minutos, S - segundos). Puede cambiar el formato de las coordenadas en el *[menú <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Botones de semiglobo *<Translate android="true" ids="navigate_point_latitude"/> y <Translate android="true" ids="navigate_point_longitude"/>*. Permiten cambiar los lados del horizonte: *Sur - Norte* y *Oeste - Este*.
- &nbsp;Campo *Nombre del punto*. Puede dejar el nombre por defecto o inventar uno propio.
- &nbsp;Botón *X*. Borra el campo de entrada de la línea correspondiente.

### Teclado corto {#short-keyboard}

Para introducir datos, puede utilizar el teclado corto (por defecto) o el teclado del sistema (Android). Para cambiar el método de entrada vaya al menú *[Opciones](#options)*. Después de introducir la latitud y la longitud, puede añadir el punto a la *[lista](#points-list)* utilizando el botón *+Añadir*.

![Añadir punto de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- El botón *<Translate android="true" ids="shared_string_add"/>* permite guardar un punto dentro de la *[Lista de puntos](#points-list)*.
- El botón *<Translate android="true" ids="shared_string_clear"/>* restablece todos los datos introducidos.
- &#9032; le permite saltar al siguiente valor.
- Los *botones del teclado* permiten introducir datos, borrarlos, saltar al siguiente valor de coordenada, ocultar el teclado.

### Lista de puntos {#points-list}

Muestra los puntos ya creados: nombre, distancia y dirección a este punto.

![Guardar punto de entrada de coordenadas Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Guardar punto de entrada de coordenadas Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

El botón **⁝** abre un menú de acciones para editar o eliminar el punto seleccionado.
Al tocar un punto, es posible cambiar sus coordenadas. Toque el botón *Aplicar* para guardar los cambios.


## Guardar como ruta {#save-as-track}

Para guardar sus puntos como una ruta, toque el botón *Atrás* ( &#8592; ) o utilice el menú *[Opciones](#options)*.

![Guardar punto de entrada de coordenadas Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Lista de Mis lugares de entrada de coordenadas Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

En el menú emergente, puede introducir su propio nombre de ruta o guardarla por defecto. Toque <Translate android="true" ids="shared_string_save"/> para guardar los puntos añadidos como una nueva ruta.
Encontrará su ruta en el [menú Mis lugares](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).