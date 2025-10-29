---
source-hash: bb8bbb3b99f1b4954f0981ba2c0484f3b8c2e9b6f79760da1ce5c5003cadc3e7
sidebar_position: 14
title: Topografía
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


## Vista general {#overview}

:::info Función de pago
El complemento Topografía es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

La topografía es una característica importante de la cartografía que proporciona información para evaluar visualmente el relieve del terreno.
La información topográfica como [Curvas de nivel](#contour-lines), [Terreno](#terrain) (*Sombreado de relieve* y *Pendiente*), y [Relieve 3D](#3d-relief) ayuda a realizar una evaluación visual de la disposición del terreno al ver la elevación, el relieve, los extremos, la inclinación o los puntos de igual altura.

Cada función proporcionada por este complemento es una capa de mapa independiente que, cuando está habilitada, se puede mostrar por encima o por debajo de la fuente del mapa principal dependiendo de la [configuración](../map/raster-maps.md#overlay-layer).  

El complemento Topografía proporciona acceso a los siguientes tipos de mapas:  

- [Curvas de nivel](#contour-lines). Este es un [mapa vectorial](../map/vector-maps.md) representado en [**metros** o **pies**](#contour-lines-meters-or-feet). Las curvas de nivel muestran los niveles de elevación y ayudan a visualizar el terreno.
- [Sombreado de relieve](#hillshade-slope-and-altitude-layers). Tipos de mapas con sombreado de colinas y pendientes que hacen el relieve más visible y ayudan a interpretar visualmente el terreno.
- [Pendiente](#hillshade-slope-and-altitude-layers). Capa [raster](../map/raster-maps.md) que proporciona información sobre la inclinación de las pendientes, lo cual puede ser importante para la planificación de rutas y la seguridad.
- [Relieve 3D](#3d-relief). Es un [mapa vectorial](../map/vector-maps.md) que proporciona una representación tridimensional del terreno, disponible solo con la [suscripción a OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Curvas de nivel | Sombreado de relieve | Pendiente |
|:---|:---|:---|
| ![Curvas_de_nivel_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Sombreado_de_relieve_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Pendientes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Curvas de nivel | Sombreado de relieve | Pendiente |
|:---|:---|:---|
| ![Curvas_de_nivel_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Sombreados_de_relieve_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Pendientes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

### Licencia para los datos DEM utilizados por OsmAnd para la detección del terreno {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Los datos de altitud en el mapa (entre 70 grados de latitud norte y 70 grados de latitud sur) se obtuvieron de mediciones realizadas como parte de la *Shuttle Radar Topography Mission (SRTM)*. Utilizó el *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, la principal herramienta de imágenes del *Sistema de Observación de la Tierra de la NASA*.  
Para obtener información completa, consulte la [Licencia](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Datos DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Los datos originales utilizados para este producto fueron suministrados por AW3D de JAXA.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Modelos Digitales de Terreno (DTM) LiDAR de Europa de Sonny</a>.

</details>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para mostrar datos de **Curvas de nivel** y **Terreno (Sombreado de relieve, Pendiente)** en el mapa:

1. **Compra**: [Plan de compra OsmAnd+, OsmAnd Maps+ o OsmAnd Pro](../plugins/index.md#purchase)
2. [Habilitar](../plugins/index.md#enable--disable) el complemento Topografía en la sección Complementos del *Menú principal*.
3. [Descargar mapas](#download-maps): Mapas de Curvas de nivel, Sombreado de relieve, Pendiente o Terreno (3D).
4. **Habilitar y ajustar**: Curvas de nivel, Sombreado de relieve o Pendiente para la vista del mapa.
5. También puedes ver el [tutorial de YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).  

Para mostrar [**Relieve 3D**](#3d-relief) necesitas comprar el plan *OsmAnd Pro*, que incluye acceso al complemento Topografía.


## Descargar mapas {#download-maps}

Para comenzar a trabajar con la funcionalidad del complemento, necesitas descargar los mapas que te interesan. Algunos mapas, como las Curvas de nivel para regiones montañosas, pueden ser bastante grandes, superando los 2 GB, y pueden no ser compatibles con dispositivos obsoletos.

Para un trabajo estable y para ahorrar recursos, puedes descargar un mapa no de todo el país, sino de sus regiones específicas, si dichas regiones se ofrecen en la aplicación. La información sobre el tamaño de cada tipo de mapa se encuentra debajo de su nombre.


### Mapas de Relieve 3D {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Descarga de curvas de nivel Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Descarga de curvas de nivel Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Descarga de curvas de nivel iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Descarga de curvas de nivel iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Necesitas descargar mapas de **Terreno (3D)** para mostrar Sombreado de relieve, Pendiente y Relieve 3D. Después de descargar los mapas, puedes mostrar **Curvas de nivel** y **Terreno** usando la sección [Configurar mapa](../map/configure-map-menu.md) del *Menú principal*.

Si el mapa que se muestra en la pantalla no está descargado, entonces en *Menú → Configurar mapa → sección Topografía → Terreno* en la parte inferior de la lista de funciones se mostrará la sección *Descargar mapas* con mapas adicionales sugeridos.


### Curvas de nivel (metros o pies) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Diálogo de descarga de curvas de nivel Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Diálogo de descarga de curvas de nivel iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>  

Para las [**Curvas de nivel**](#contour-lines), necesitas determinar en qué [unidades](../personal/profiles.md#units--formats) (metros o pies) se mostrarán en el mapa y descargar la versión apropiada del mapa en tu dispositivo.

**Las opciones de unidades no son intercambiables**, por lo que si necesitas cambiar de metros a pies o viceversa, debes desinstalar la versión anterior del mapa de Curvas de nivel para descargar la nueva versión.


## Curvas de nivel {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Menú de curvas de nivel Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Curvas de nivel*

![Menú de curvas de nivel iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>  

Las [Curvas de nivel](../map/vector-maps.md#-contour-lines) son una representación gráfica de las elevaciones en un mapa y están disponibles como mapas vectoriales. Forman líneas que corresponden a puntos con la misma altitud, que forman contornos que permiten determinar en qué dirección y cuánto se inclina la superficie.

Al usar el [Motor de renderizado de mapas](../personal/global-settings.md#map-rendering-engine):

- **Versión 2 (OpenGL)**. Las curvas de nivel son compatibles tanto en la vista 3D como en el modo de relieve 3D.
- **Versión 1**. Las curvas de nivel no son compatibles cuando se utilizan mapas de teselas procedentes de Internet.

**Configuración de apariencia**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Activa o desactiva las curvas de nivel.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Define los [niveles de zoom](../map/interact-with-map.md#my-location-and-zoom) en los que las curvas de nivel son visibles.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Elige el color para mostrar las curvas de nivel.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Ajusta el ancho de las curvas de nivel.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Selecciona la densidad de las curvas de nivel (Baja, Media, Alta). Las densidades más altas pueden afectar la velocidad de carga.
- *<Translate android="true" ids="maps_and_resources"/>*. Ver y descargar mapas de curvas de nivel para la región actual y áreas cercanas.


## Terreno {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menú de terreno Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Menú de terreno Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menú de terreno iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Menú de terreno iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>  

La opción **Terreno** habilita y permite personalizar tres características como *Sombreado de relieve*, *Pendiente* y *Altitud*.  
Características específicas:  

- Solo se puede habilitar una opción a la vez, ya sea Sombreado de relieve, Pendiente o Altitud.
- Si no ves ningún cambio después de descargar y habilitar el mapa correspondiente, se recomienda reiniciar la aplicación.

El menú **Terreno** incluye la selección del [esquema de color](#default-color-scheme) con la opción de [modificarlo](#modify-color-scheme) (para [suscriptores Pro](../../user/purchases/index.md)), la capacidad de cambiar la transparencia de la capa en el mapa ([visibilidad](#visibility)), y seleccionar el [nivel de zoom](#zoom-levels) para su visualización, información sobre el tamaño de los [datos en caché](#cache-size), y una lista de [mapas](../../user/personal/maps-resources.md) necesarios para mostrar la capa.


## Capas de Sombreado, Pendiente y Altitud {#hillshade-slope-and-altitude-layers}

| Sombreado de relieve | Pendiente | Altitud |
| ------ | ------- | ------- |
| ![Sombreado de relieve](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Pendiente](../../../blog/2023-08-28-terrain/img/slope.png) | ![Altitud](../../../blog/2023-08-28-terrain/img/slope.png) |

**Sombreado de relieve** se basa en la simulación de la iluminación de la superficie utilizando datos del terreno. Este método implica la creación de sombras y luces basadas en el ángulo de la superficie con respecto a la fuente de luz. Como resultado, ves colinas, valles y otros detalles del terreno de forma natural en el mapa.  

**Pendiente** determina el ángulo de inclinación de la superficie basándose en los datos de elevación de los puntos del mapa. Los cálculos del ángulo de pendiente se realizan considerando los cambios de elevación y las distancias entre los puntos, y representando este cambio como un ángulo de pendiente.  

**Altitud** representa la elevación de los puntos en el mapa con respecto al nivel del mar. Ayuda a comprender cómo cambia el terreno en altura. Esta característica es particularmente útil para actividades como el senderismo o el ciclismo de montaña, donde conocer la altitud puede ayudar a planificar rutas y gestionar el esfuerzo físico. Los datos de altitud se derivan de modelos de elevación y proporcionan una vista clara de los puntos altos y bajos, lo que facilita la evaluación de la dificultad de una ruta o la identificación de picos y valles a lo largo de su viaje.

Los mapas raster de **Sombreado de relieve**, **Pendiente** y **Altitud** se crean a partir de datos de terreno raster como los Modelos Digitales de Elevación (DEM).

**Uso:**

- *Navegación.* Ayuda a identificar pendientes pronunciadas, tanto de bajada como de subida, lo que puede ser crucial para una navegación segura.
- *Planificar rutas.* Ayuda a elegir las rutas más adecuadas, considerando el terreno.
- *Estimación del terreno.* Es conveniente para visualizar el paisaje, especialmente si estás caminando o en bicicleta.


### Esquema de color por defecto {#default-color-scheme}

| Sombreado de relieve | Pendiente | Altitud |
| ------ | ------- | ------- |
|![Sombreado de relieve](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Pendiente](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menú](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Sombreado de relieve* utiliza tonos oscuros para mostrar pendientes, picos y tierras bajas. El Sol virtual tiene un azimut (dirección) fijo de 315 grados.

- *Pendiente* utiliza el color para visualizar la inclinación del terreno. Puedes leer más sobre ello [aquí](https://en.wikipedia.org/wiki/Grade_(slope)). Cada color corresponde a un ángulo de desviación de la horizontal. Un esquema de color adicional para *Pendiente*, ***Avalancha***, está disponible en el menú **Modificar**.

- *Altitud*. El mapa de altitud colorea cada píxel según la altura calculada del mapa utilizando el gradiente de un esquema de color definido. Por lo general, los esquemas de altitud dependen mucho de la ubicación. En áreas montañosas, preferirás distribuir los colores en un rango de altitud más amplio y en áreas planas, seleccionarás un esquema de color con un rango pequeño entre la altitud mínima y máxima.

> *Por favor, lee el artículo [Esquema de color](../personal/color-palette-schemes.md) para más información.*


### Modificar esquema de color {#modify-color-scheme}

:::info Función de pago
*Modificar esquema de color* es una función de pago de **OsmAnd Pro** para [iOS](../purchases/ios.md#pro-features) y [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modificar esquema de color](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Modificar esquema de color](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Modificar esquema de color](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Modificar esquema de color](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

La función *Modificar esquema de color* te permite seleccionar un esquema de color:

- De una [lista predefinida](#default-color-scheme).
- De archivos de paleta de colores que hayas creado en tu ordenador. Los archivos personalizados se pueden agregar a OsmAnd utilizando la [herramienta de importación/exportación](../personal/import-export.md).

Puedes [editar estas paletas](../personal/color-palette-schemes.md#edit-palette-file) para personalizar la apariencia de los mapas y las rutas.


### Visibilidad {#visibility}

| Visibilidad 31% | Visibilidad 74% |
| ------ | ------- |
| ![Visibilidad ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibilidad ](../../../blog/2023-08-28-terrain/img/74.png) |

La función *Visibilidad* se utiliza para ajustar la transparencia de las sombras para el Sombreado de relieve y los colores utilizados para representar el ángulo en el parámetro de Pendiente.

### Niveles de zoom {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)  

La función *Niveles de escala* te permite establecer los valores mínimos y máximos de los niveles de zoom del mapa, que van de 4 a 19, en los que se mostrarán las capas de mapa de Sombreado de relieve o Pendiente.

### Tamaño de la caché {#cache-size}

**Tamaño de la caché** es una sección informativa que muestra la cantidad de memoria en tu dispositivo actualmente utilizada para los datos de *Terreno*. Cada vez que ves información de *Sombreado de relieve* o *Pendiente* en un mapa, todos estos datos se almacenan temporalmente en la caché para un acceso rápido y uso posterior, evitando una carga adicional en el procesador de tu dispositivo.  

**Limpiar la caché** a veces es necesario para liberar espacio en tu dispositivo o para resolver posibles problemas de rendimiento. Para limpiar la caché, necesitas ir a los *Ajustes del sistema* del dispositivo, luego la ruta puede ser la siguiente: *Aplicaciones → OsmAnd → Almacenamiento → Limpiar caché*.


### Motor de renderizado (Android) {#rendering-engine-android}

**Sombreado de relieve** y **Pendiente** se muestran y ajustan en cualquier [Motor de renderizado de mapas](../personal/global-settings.md#map-rendering-engine) seleccionado.

1. Si utilizas el **Motor de renderizado de mapas Versión 1**, necesitas usar la [descarga](../start-with/download-maps.md) normal de mapas raster de Sombreado de relieve y Pendiente.

2. Si utilizas el **Motor de renderizado de mapas Versión 2 (OpenGL)**:
    - Puedes continuar usando el tipo de descarga normal de mapas raster de Sombreado de relieve y Pendiente. Sin embargo, para hacerlo, necesitarás activar el [complemento de desarrollo de OsmAnd](../plugins/development.md) y habilitar la configuración [Usar formato SQLite raster para sombreado de relieve y pendiente](../plugins/development.md#terrain).

    - Alternativamente, puedes usar la descarga de [Mapa de terreno (3D)](../personal/maps-resources.md#paid-map-content). Esto ahorra espacio de memoria en tu dispositivo, y los efectos de Sombreado de relieve, Pendiente y Relieve 3D se generarán a partir de ellos utilizando tu dispositivo.


### Acciones rápidas {#quick-actions}

![Acción rápida para Terreno](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Puedes usar los botones de *Acción rápida* en la pantalla del mapa para cambiar la visibilidad de las capas de [Curvas de nivel](#contour-lines), [Terreno](#terrain) y el [esquema de color del Terreno](#default-color-scheme). Dependiendo de la capa seleccionada en el menú Configurar mapa, asignar una acción de *Terreno* al botón mostrará *Sombreado de relieve*, *Pendiente* o *Altitud*.  

La configuración principal para *Mostrar u ocultar tipos de mapa* se encuentra en la sección Topografía del menú Configurar mapa. En el artículo [Acción rápida](../widgets/quick-action.md#configure-map), puedes encontrar una lista de capas disponibles para mostrar. Si necesitas acceso rápido a esta configuración de mapa, utiliza la herramienta *Botón personalizado*.

- Ir a [Añadir acción](../widgets/quick-action.md#custom-buttons): *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → Configurar mapa*.
- Añade uno o más botones de Acción rápida para cambiar la visibilidad de una capa de topografía en particular.


## Relieve 3D {#3d-relief}

:::info Función Pro
El Relieve 3D es una función de pago de [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![Relieve 3D](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![Relieve 3D](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>  

La función de Relieve 3D produce un relieve elevado y proporciona una representación tridimensional del paisaje. El Relieve 3D funciona sin conexión y se puede usar con [mapas vectoriales de OsmAnd](../map/vector-maps.md) o cualquier [mapa raster](../map/raster-maps.md#select-raster-maps) como [Fuente de mapa](../map/raster-maps.md#main) o como [Subcapa/Superposición](../map/raster-maps.md#overlay-layer).

***Cómo mostrar el Relieve 3D en el mapa.***

- Compra la suscripción a **OsmAnd Pro** para [iOS](../purchases/ios.md#pro-features) o [Android](../purchases/android.md#pro-features).

- Ir a [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: desplázate a la sección *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: desplázate a la sección *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Descarga el [Mapa de terreno (3D)](#3d-relief-maps) de las regiones, si es necesario.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Capa de mapa vectorial | Capa de mapa raster |
| ------ | ------- |
| ![Relieve 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![Relieve 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>  

<TabItem value="ios" label="iOS">

| Capa de mapa vectorial | Capa de mapa raster |
| ------ | ------- |
| ![Relieve 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![Relieve 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Exageración vertical {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Exageración vertical*

![Exageración vertical Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Exageración vertical*

![Exageración vertical iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

La *Exageración vertical* es un coeficiente especial para el *Relieve 3D*. Puedes cambiar la escala (*Exageración vertical*) de x1 a x3. Esta función te permite ver contornos de terreno más suaves con mayor detalle.


### Sombreado de relieve y Relieve 3D {#hillshade-and-3d-relief}

| Sombreado de relieve | Relieve 3D |
|--------|---------|
| ![Capas de terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Capas de terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Sombreado de relieve** es un tipo de mapa que muestra el terreno usando sombras, creando una representación visual de la pendiente y la forma de la superficie terrestre.  
**Relieve 3D** es una función que añade efectos tridimensionales al mapa.  

Si **desactivas** *Sombreado de relieve* y **activas** *Relieve 3D*, las sombras del relieve seguirán siendo visibles porque *Sombreado de relieve* y *Relieve 3D* son dos formas diferentes de visualizar un mapa. *Sombreado de relieve* crea sombras basadas en el terreno y las añade al mapa, mientras que *Relieve 3D* modela elementos 3D para mostrar la profundidad y la forma del terreno, y las sombras son parte de la visualización. Estas funciones pueden funcionar en paralelo, y desactivar *Sombreado de relieve* no afecta a cómo se muestran los efectos 3D.  

Cuando **Sombreado de relieve** está **activado**, una imagen con sombras de relieve parece más detallada, más oscura y más escalonada que una imagen de *Relieve 3D*. La explicación es que *Sombreado de relieve* enfatiza los gradientes y contrastes del terreno, creando una imagen más nítida y detallada. La función *Relieve 3D* le da al mapa una apariencia más fluida y suavizada, suavizando el terreno y reduciendo potencialmente la visibilidad de algunos detalles más finos.


## Combinar tipos de capa {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Curvas de nivel combinadas con Sombreado de relieve](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Curvas de nivel combinadas con Pendiente](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Curvas de nivel combinadas con Sombreado de relieve en iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Curvas de nivel combinadas con Pendiente en iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd te permite combinar múltiples tipos de capas de mapa para una visualización más visual.

- La combinación de **Curvas de nivel** y **Sombreado de relieve** es óptima para estimar visual y numéricamente la inclinación de las pendientes montañosas.
- La combinación de las capas de **Curvas de nivel** y **Pendiente** es la mejor para estimar la inclinación de la pendiente y encontrar puntos con la misma altura.
- La combinación de las capas de **Relieve 3D** y **Sombreado de relieve** te permite obtener una representación más realista y visual del terreno, el relieve y los detalles del paisaje. Esta combinación es especialmente adecuada para terrenos montañosos y accidentados.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Cómo restaurar la compra del complemento Topografía (anteriormente Curvas de nivel). [(verificar)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Las Curvas de nivel, los datos de Elevación o el Relieve 3D no se muestran. [(verificar)](../troubleshooting/maps-data#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. El mapa cambia automáticamente al modo 3D durante la navegación:  
    - Asegúrate de que el botón **Modo 3D** esté desactivado en **Menú → Configurar pantalla → Botones → Botones predeterminados**.  
    - Comprueba si alguna función de Terreno está habilitada en **Menú → Configurar mapa → Topografía** que pueda activar un efecto 3D.