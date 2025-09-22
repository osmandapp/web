---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Widgets de Marcador
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Resumen {#overview}

Los marcadores son puntos temporales indicados en el mapa en forma de banderas. Los widgets muestran la *Dirección*, la *Distancia*, la *Dirección postal* y la *Hora estimada de llegada* al marcador. Permiten encontrar rápidamente los marcadores en el mapa, así como cambiar su posición. Puede leer más sobre los marcadores en este [artículo](../personal/markers).  


## Widget de la Barra Superior {#top-bar-widget}

El widget **Barra de marcadores de mapa** (Android) / **Indicación de distancia - Barra superior** (iOS) muestra:

- Distancia desde su ubicación actual (o el punto central del mapa / el punto inicial de contacto del mapa cuando la Ubicación está desactivada) hasta el punto seleccionado indicado por el Marcador en el mapa (las [Unidades de longitud](../personal/profiles/#general-settings) se pueden elegir en la configuración del Perfil).
- Una flecha del mismo color que el marcador indica la dirección desde la ubicación actual (o el punto central del mapa / el punto inicial de contacto del mapa cuando la Ubicación está desactivada) y la orientación en el espacio de su dispositivo (rumbo) hacia el marcador.
- Dirección de la ubicación.
- Icono de menú que lleva a la [Lista de marcadores de mapa](../navigation/setup/markers-navigation.md#itinerary-list).

También puede seleccionar mostrar uno o dos marcadores. Lea más sobre la configuración de los widgets en este [artículo](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*La distancia al marcador* es la longitud de la línea recta entre su posición (o el punto central del mapa / el punto inicial de contacto del mapa cuando la Ubicación está desactivada) y el marcador.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marcadores de mapa en el widget de la barra superior](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Habilitar | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elija un panel → <Translate android="true" ids="map_markers_bar"/>* |
| Al tocar | La parte visible del mapa se desplaza a la ubicación del marcador. |
| Pulsación larga + mover | Para medir la distancia y ver la dirección desde un punto particular en el mapa hasta el marcador seguido, debe hacer una pulsación larga e inmediatamente mover ligeramente la posición del mapa (el menú contextual no debe aparecer). |
| Aproximarse al marcador | En caso de que su ubicación esté dentro de un radio pequeño del marcador de mapa (**< 50 m**), en el campo del widget puede ver un botón de marca de verificación para eliminar rápidamente el marcador de mapa (marcar como pasado). El marcador verificado es reemplazado por el siguiente marcador en la lista de marcadores.  |
| Formato de distancia | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Marcadores de mapa en el widget de la barra superior](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Habilitar | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elija un panel → <Translate android="true" ids="map_markers_bar"/>*|
| Al tocar | La parte visible del mapa se desplaza a la ubicación del marcador. |
| Al tocar | Cambiar entre "Distancia" / "Hora estimada de llegada" (Modo de cambio). |
| Aproximarse al marcador | En caso de que su ubicación esté dentro de un radio pequeño del marcador de mapa (**< 50 m**), en el campo del widget puede ver un botón de marca de verificación para eliminar rápidamente el marcador de mapa (marcar como pasado). El marcador verificado es reemplazado por el siguiente marcador en la lista de marcadores.  |
| Formato de distancia  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs>


## Widgets de Panel {#panel-widgets}

El widget **Marcadores de mapa** *(para Android)* y **Indicación de distancia - Widgets** *(para iOS)* muestra:

- *Distancia desde su ubicación actual* hasta el punto seleccionado indicado por el Marcador en el mapa (las [Unidades de longitud](../personal/profiles/#general-settings) se pueden elegir en la configuración del Perfil).
- *Hora estimada de llegada o ETA*.  
Esta es la hora (hh:mm) en que el vehículo o la persona debe llegar al destino. Se calcula como la distancia al marcador dividida por la velocidad promedio.
La velocidad promedio se calcula como la media de todos los valores de velocidad recibidos de los puntos de ubicación para el intervalo de tiempo que seleccionó de 15 segundos a 60 minutos.

También puede seleccionar mostrar uno o dos marcadores. Lea más sobre la configuración de los widgets en este [artículo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distancia al marcador* es la longitud de la línea recta entre su posición (o un punto particular en el mapa) y el marcador.
:::  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgets de panel](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Habilitar | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| Al tocar 1 | Cambiar entre "Distancia" / "Hora estimada de llegada" (Modo de cambio). |
| Al tocar 2 | La parte visible del mapa se desplaza a la ubicación del marcador (Modo Ir a la ubicación del marcador) |
| Pulsación larga + mover | Para medir la distancia y ver la dirección desde un punto particular en el mapa hasta el marcador seguido, debe hacer una pulsación larga e inmediatamente mover ligeramente la posición del mapa (el menú contextual no debe aparecer). |
| Formato de distancia | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Widgets de panel](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Habilitar | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elija un panel → <Translate android="true" ids="map_markers_bar"/>*  |
| Al tocar | La parte visible del mapa se desplaza a la ubicación del marcador. |
| Al tocar | Cambiar entre "Distancia" / "Hora estimada de llegada" (Modo de cambio). |
| Formato de distancia  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs>


## Configurar Widgets de Marcador {#configure-marker-widgets}

Puede leer información general sobre la configuración del widget Marcadores de mapa en esta [página](../personal/markers#appearance-on-the-map).  

### Barra de marcadores de mapa {#map-markers-bar}
El widget de la barra superior muestra la distancia y la dirección al siguiente marcador de mapa desde su ubicación actual. En la configuración, puede elegir si se mostrarán uno o dos marcadores en la parte superior de la pantalla.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)  

### Marcadores de mapa {#map-markers} 
El widget muestra la distancia o la hora estimada de llegada (ETA) para el primer o segundo marcador en la lista de marcadores de mapa. Puede elegir: un marcador, el primero o el segundo, para que se muestre en la pantalla o ambos.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png)  ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- |
| Muestra | Este modo le permite elegir qué información mostrará el widget: *Distancia* u *Hora estimada de llegada*. |
| Intervalo | Si se selecciona *Hora estimada de llegada* en 'Muestra', esta opción aparece con una selección de tiempos (de 15 segundos a 60 minutos) para el cálculo de la ETA. |
| Clic en el widget |  Esta configuración le permite elegir qué acción se realizará cuando haga clic en el widget: *Cambiar modo* o *Ir a la ubicación del marcador*. |


## Apariencia en el Mapa {#appearance-on-the-map}

La configuración de la apariencia de los marcadores de mapa está disponible tanto en la versión de Android como en la de iOS de OsmAnd. El menú "Apariencia en el Mapa" es una configuración general para los marcadores de mapa y se aplica independientemente de si los widgets están habilitados o no. Puede leer la información detallada en esta [página](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Muestra información sobre el primer o los dos primeros marcadores en la lista de marcadores de mapa. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Indica la dirección al marcador seguido (uno o dos) como una flecha en el mapa. Si el marcador está en la parte visible del mapa, no se muestra ninguna flecha. |
| <Translate android="true" ids="show_guide_line"/> | Muestra la dirección, como una línea discontinua, desde un punto particular en el mapa hasta el marcador seguido en línea recta.  |
| <Translate android="true" ids="one_tap_active"/> |  Con un solo toque en el marcador requerido en el mapa, este marcador se mueve a la parte superior de la lista de marcadores de mapa activos sin abrir el menú contextual. |  
| <Translate android="true" ids="keep_passed_markers"/> | Los marcadores añadidos como un grupo de Favoritos o puntos de ruta GPX marcados como Pasados permanecerán en el mapa. Si el grupo no está activo, los marcadores desaparecerán del mapa. |

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Apariencia de los marcadores de mapa en iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Muestra información sobre el primer o los dos primeros marcadores en la lista de marcadores de mapa. |
|  <Translate android="true" ids="show_direction"/> | Le permite elegir si mostrar o no los widgets y cómo aparecerán: sobre el mapa (<Translate android="true" ids="shared_string_topbar"/>) o en el lado derecho de la pantalla (<Translate android="true" ids="shared_string_widgets"/>). |
|  Flechas en el mapa |  Indica la dirección al marcador seguido (uno o dos) como una flecha en el mapa. Si el marcador está en la parte visible del mapa, no se muestra ninguna flecha. |
| Línea de dirección | Muestra la dirección, como una línea discontinua, desde un punto particular en el mapa hasta el marcador seguido en línea recta.  |

</TabItem>

</Tabs>


## Artículos Relacionados {#related-articles}

- [Configurar Pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets de información](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla y Regla de radio](./radius-ruler.md)
- [Acción Rápida](./quick-action.md)