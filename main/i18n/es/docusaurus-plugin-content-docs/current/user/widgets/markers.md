---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title: Widgets de marcadores
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Descripción general {#overview}

Los marcadores son puntos temporales indicados en el mapa en forma de banderas. Los widgets muestran la *dirección*, la *distancia*, la *dirección* y la *hora estimada de llegada* al marcador. Permiten encontrar rápidamente los marcadores en el mapa, así como cambiar su posición. Puede leer más sobre los marcadores en este [artículo](../personal/markers).


## Widget de la barra superior {#top-bar-widget}

El widget **Barra de marcadores de mapa** (Android) / **Indicación de distancia - Barra superior** (iOS) muestra:

- Distancia desde su ubicación actual (o el punto central del mapa / el punto de contacto inicial del mapa cuando la ubicación está desactivada) hasta el punto seleccionado indicado por el marcador en el mapa ([Unidades de longitud](../personal/profiles/#general-settings) se pueden elegir en la configuración del perfil).
- Una flecha del mismo color que el marcador indica la dirección desde la ubicación actual (o el punto central del mapa / el punto de contacto inicial del mapa cuando la ubicación está desactivada) y la orientación en el espacio de su dispositivo (rumbo) hacia el marcador.
- Dirección de la ubicación.
- Icono de menú que lleva a la [lista de marcadores del mapa](../personal/markers/#map-markers-menu).

También puede seleccionar mostrar uno o dos marcadores. Lea más sobre la configuración del widget en este [artículo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distancia al marcador* es la longitud de la línea recta entre su posición (o el punto central del mapa / el punto de contacto inicial del mapa cuando la ubicación está desactivada) y el marcador.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de marcadores de mapa en la barra superior](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Habilitar | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="map_markers_bar"/>* |
| Al tocar | La parte visible del mapa se desplaza a la ubicación del marcador. |
| Pulsación larga + mover | Para medir la distancia y ver la dirección desde un punto particular en el mapa hasta el marcador rastreado, debe hacer una pulsación larga e inmediatamente mover ligeramente la posición del mapa (el menú contextual no debe aparecer). |
| Marcador de aproximación | En caso de que su ubicación esté dentro de un radio pequeño del marcador del mapa (**< 50 m**), en el campo del widget puede ver un botón de marca de verificación para eliminar rápidamente el marcador del mapa (marcar como pasado). El marcador marcado se reemplaza por el siguiente marcador en la lista de marcadores. |
| Formato de distancia | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de marcadores de mapa en la barra superior](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Habilitar | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="map_markers_bar"/>*|
| Al tocar | La parte visible del mapa se desplaza a la ubicación del marcador. |
| Al tocar | Cambiar entre "Distancia" / "Hora estimada de llegada" (Modo de cambio). |
| Marcador de aproximación | En caso de que su ubicación esté dentro de un radio pequeño del marcador del mapa (**< 50 m**), en el campo del widget puede ver un botón de marca de verificación para eliminar rápidamente el marcador del mapa (marcar como pasado). El marcador marcado se reemplaza por el siguiente marcador en la lista de marcadores. |
| Formato de distancia | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Widgets de panel {#panel-widgets}

El widget **Marcadores de mapa** *(para Android)* y **Indicación de distancia - Widgets** *(para iOS)* muestra:

- *Distancia desde su ubicación actual* hasta el punto seleccionado indicado por el marcador en el mapa ([Unidades de longitud](../personal/profiles/#general-settings) se pueden elegir en la configuración del perfil).
- *Hora estimada de llegada o ETA*.
Este es el tiempo (hh:mm) en que el vehículo o la persona debe llegar al destino. Se calcula como la distancia al marcador dividida por la velocidad promedio.
La velocidad promedio se calcula como la media de todos los valores de velocidad recibidos de los puntos de ubicación para el intervalo de tiempo que seleccionó de 15 segundos a 60 minutos.

También puede seleccionar mostrar uno o dos marcadores. Lea más sobre la configuración del widget en este [artículo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distancia al marcador* es la longitud de la línea recta entre su posición (o un punto particular en el mapa) y el marcador.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widgets de panel](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Habilitar | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Al tocar 1 | Cambiar entre "Distancia" / "Hora estimada de llegada" (Modo de cambio). |
| Al tocar 2 | La parte visible del mapa se desplaza a la ubicación del marcador (Modo ir a la ubicación del marcador) |
| Pulsación larga + mover | Para medir la distancia y ver la dirección desde un punto particular en el mapa hasta el marcador rastreado, debe hacer una pulsación larga e inmediatamente mover ligeramente la posición del mapa (el menú contextual no debe aparecer). |
| Formato de distancia | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Widgets de panel](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Habilitar | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="map_markers_bar"/>* |
| Al tocar | La parte visible del mapa se desplaza a la ubicación del marcador. |
| Al tocar | Cambiar entre "Distancia" / "Hora estimada de llegada" (Modo de cambio). |
| Formato de distancia | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Configurar widgets de marcadores {#configure-marker-widgets}

Puede leer información general sobre la configuración del widget de marcadores de mapa en esta [página](../personal/markers#map-markers-widgets).

**Barra de marcadores de mapa**
El widget de la barra superior muestra la distancia y la dirección al siguiente marcador de mapa desde su ubicación actual. En la configuración, puede elegir si se mostrarán uno o dos marcadores en la parte superior de la pantalla.

![apariencia_en_el_mapa](@site/static/img/widgets/configure-marker-wid-02.png)

**Marcadores de mapa**
El widget muestra la distancia o la hora estimada de llegada (ETA) para el primer o segundo marcador en la lista de marcadores de mapa. Puede elegir: un marcador, el primero o el segundo, que se mostrará en la pantalla o ambos.

![apariencia_en_el_mapa](@site/static/img/widgets/configure-marker-wid-01.png) ![apariencia_en_el_mapa](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Muestra | Este modo le permite elegir qué información mostrará el widget: *Distancia* o *Hora estimada de llegada*. |
| Intervalo | Si se selecciona *Hora estimada de llegada* en 'Mostrar', esta opción aparece con una selección de tiempos (de 15 segundos a 60 minutos) para el cálculo de ETA. |
| Clic en el widget | Esta configuración le permite elegir qué acción se realizará al hacer clic en el widget: *Cambiar modo* o *Ir a la ubicación del marcador*. |


## Apariencia en el mapa {#appearance-on-the-map}

La configuración de la apariencia de los marcadores de mapa está disponible tanto en las versiones de Android como de iOS de OsmAnd. El menú "Apariencia en el mapa" es una configuración general para los marcadores de mapa y se aplica si los widgets están habilitados o no. Puede leer la información detallada en esta [página](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![apariencia_en_el_mapa](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Muestra información sobre el primer o los dos primeros marcadores en la lista de marcadores del mapa. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Indica la dirección al marcador rastreado (uno o dos) como una flecha en el mapa. Si el marcador está en la parte visible del mapa, no se muestra ninguna flecha. |
| <Translate android="true" ids="show_guide_line"/> | Muestra la dirección, como una línea discontinua, desde un punto particular en el mapa hasta el marcador rastreado en línea recta. |
| <Translate android="true" ids="one_tap_active"/> | Con un solo toque en el marcador requerido en el mapa, este marcador se mueve a la parte superior de la lista de marcadores de mapa activos sin abrir el menú contextual. |
| <Translate android="true" ids="keep_passed_markers"/> | Los marcadores añadidos como un grupo de favoritos o puntos de ruta GPX marcados como pasados permanecerán en el mapa. Si el grupo no está activo, los marcadores desaparecerán del mapa. |

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Apariencia de los marcadores de mapa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Muestra información sobre el primer o los dos primeros marcadores en la lista de marcadores del mapa. |
| <Translate android="true" ids="show_direction"/> | Le permite elegir si desea mostrar widgets y cómo aparecerán: encima del mapa (<Translate android="true" ids="shared_string_topbar"/>) o en el lado derecho de la pantalla (<Translate android="true" ids="shared_string_widgets"/>). |
| Flechas en el mapa | Indica la dirección al marcador rastreado (uno o dos) como una flecha en el mapa. Si el marcador está en la parte visible del mapa, no se muestra ninguna flecha. |
| Línea de dirección | Muestra la dirección, como una línea discontinua, desde un punto particular en el mapa hasta el marcador rastreado en línea recta. |

</TabItem>

</Tabs>


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y regla](./radius-ruler.md)
- [Acción rápida](./quick-action.md)


> *Última actualización: Octubre de 2023*