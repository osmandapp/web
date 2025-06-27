---
source-hash: cc730e8a24496682e893555771005dbb35c6dfe9f5ce92b2e7fd526bcba461b1
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



## Generalidades {#overview}

:::info Función de pago
El complemento Topografía es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

La topografía es una característica importante de la cartografía que proporciona información para evaluar visualmente el relieve del terreno.
La información topográfica como las [Curvas de nivel](#contour-lines), el [Terreno](#terrain) (*Sombreado* y *Pendiente*), y el [Relieve 3D](#3d-relief) ayuda a realizar una evaluación visual de la disposición del terreno al observar la elevación, el relieve, los extremos, la inclinación o los puntos de igual altura.

Cada característica proporcionada por este complemento es una capa de mapa independiente que, cuando está habilitada, puede mostrarse por encima o por debajo de la fuente del mapa principal, dependiendo de la [configuración](../map/raster-maps.md#overlay-layer).

El complemento Topografía proporciona acceso a los siguientes tipos de mapas:

- [Curvas de nivel](#contour-lines). Este es un [mapa vectorial](../map/vector-maps.md) representado en [**metros** o **pies**](#contour-lines-meters-or-feet). Las curvas de nivel muestran los niveles de elevación y ayudan a visualizar el terreno.
- [Sombreado](#hillshade-slope-and-altitude-layers). Los tipos de mapas con sombreado de colinas y pendientes hacen que el relieve sea más visible y ayudan a interpretar visualmente el terreno.
- [Pendiente](#hillshade-slope-and-altitude-layers). Capa [ráster](../map/raster-maps.md) que proporciona información sobre la inclinación de las pendientes, lo que puede ser importante para la planificación de rutas y la seguridad.
- [Relieve 3D](#3d-relief). Es un [mapa vectorial](../map/vector-maps.md) que proporciona una representación tridimensional del terreno, disponible solo con la [suscripción OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Curvas de nivel | Sombreado | Pendiente |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Curvas de nivel | Sombreado | Pendiente |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Licencia de los datos DEM utilizados por OsmAnd para la detección del terreno {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Los datos de altitud en el mapa (entre 70 grados de latitud norte y 70 grados de latitud sur) se obtuvieron de mediciones realizadas como parte de la *Shuttle Radar Topography Mission (SRTM)*. Se utilizó el *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, la principal herramienta de imágenes del *Sistema de Observación de la Tierra de la NASA*.
Para obtener información completa, consulte la [Licencia](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Datos DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Los datos originales utilizados para este producto fueron suministrados por AW3D de JAXA.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para mostrar los datos de **Curvas de nivel** y **Terreno (Sombreado, Pendiente)** en el mapa:

1. **Compra**: [Plan de compra OsmAnd+, OsmAnd Maps+ o OsmAnd Pro](../plugins/index.md#purchase)
2. [Habilitar](../plugins/index.md#enable--disable) el complemento Topografía en la sección Complementos del *Menú principal*.
3. [Descargar](#download-maps): mapas de curvas de nivel, sombreado, pendiente o terreno (3D).
4. **Habilitar y ajustar**: Curvas de nivel, Sombreado o Pendiente para la vista del mapa.
5. También puedes ver el [tutorial de YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Para mostrar el [**Relieve 3D**](#3d-relief) necesitas adquirir el plan *OsmAnd Pro*, que incluye acceso al complemento Topografía.


## Descargar mapas {#download-maps}

Para empezar a trabajar con la funcionalidad del complemento, es necesario descargar los mapas que te interesan. Algunos mapas, como las Curvas de Nivel para regiones montañosas, pueden ser bastante grandes, superando los 2 GB, y es posible que no sean compatibles con dispositivos obsoletos.

Para un trabajo estable y para ahorrar recursos, puedes descargar un mapa no de todo el país, sino de sus regiones específicas, si dichas regiones se ofrecen en la aplicación. La información sobre el tamaño de cada tipo de mapa se encuentra debajo de su nombre.


### Mapas de relieve 3D {#3d-relief-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Necesitas descargar mapas de **Terreno (3D)** para mostrar Sombreado, Pendiente y Relieve 3D. Después de descargar los mapas, puedes mostrar **Curvas de nivel** y **Terreno** usando la sección [Configurar mapa](../map/configure-map-menu.md) del *Menú principal*.

Si el mapa que se muestra en la pantalla no está descargado, entonces en *Menú → Configurar mapa → Sección Topografía → Terreno* en la parte inferior de la lista de características se mostrará la sección *Descargar mapas* con mapas adicionales sugeridos.


### Curvas de nivel (metros o pies) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Para las [**Curvas de nivel**](#contour-lines), debes determinar en qué [unidades](../personal/profiles.md#units--formats) (metros o pies) se mostrarán en el mapa y descargar la versión apropiada del mapa a tu dispositivo.

**Las opciones de unidad no son intercambiables**, por lo que si necesitas cambiar de metros a pies o viceversa, se requiere desinstalar la versión anterior del mapa de Curvas de nivel para descargar la nueva versión.


## Curvas de nivel {#contour-lines}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Curvas de nivel*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

Las [curvas de nivel](../map/vector-maps.md#-contour-lines) son una representación gráfica de las elevaciones en un mapa y están disponibles como mapas vectoriales. Forman líneas que corresponden a puntos con la misma altitud, que forman contornos que permiten determinar en qué dirección y cuánto se inclina la superficie.

Al utilizar el [motor de renderizado de mapas](../personal/global-settings.md#map-rendering-engine):

- **Versión 2 (OpenGL)**. Las curvas de nivel son compatibles tanto en la vista 3D como en el modo de relieve 3D.
- **Versión 1**. Las curvas de nivel no son compatibles cuando se utilizan mapas de mosaico obtenidos de Internet.

**Configuración de apariencia**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Activa o desactiva las curvas de nivel.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Define los [niveles de zoom](../map/interact-with-map.md#my-location-and-zoom) en los que las curvas de nivel son visibles.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Elige el color para mostrar las curvas de nivel.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Ajusta el ancho de las curvas de nivel.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Selecciona la densidad de las curvas de nivel (Baja, Media, Alta). Las densidades más altas pueden afectar la velocidad de carga.
- *<Translate android="true" ids="maps_and_resources"/>*. Consulta y descarga mapas de curvas de nivel para la región actual y las áreas cercanas.


## Terreno {#terrain}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

La opción **Terreno** habilita y permite personalizar tres características: *Sombreado*, *Pendiente* y *Altitud*.
Características específicas:

- Solo se puede habilitar una opción a la vez: Sombreado, Pendiente o Altitud.
- Si no ves ningún cambio después de descargar y habilitar el mapa correspondiente, se recomienda reiniciar la aplicación.

El menú **Terreno** incluye la selección de [esquema de color](#default-color-scheme) con la opción de [modificarlo](#modify-color-scheme) (para [suscriptores Pro](../../user/purchases/index.md)), la capacidad de cambiar la transparencia de la capa en el mapa ([visibilidad](#visibility)), y seleccionar el [nivel de zoom](#zoom-levels) para su visualización, información sobre el tamaño de los [datos en caché](#cache-size), y una lista de [mapas](../../user/personal/maps-resources.md) necesarios para mostrar la capa.


## Capas de sombreado, pendiente y altitud {#hillshade-slope-and-altitude-layers}

| Sombreado | Pendiente | Altitud |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

El **Sombreado** se basa en la simulación de la iluminación de la superficie utilizando datos del terreno. Este método implica la creación de sombras y resaltes en función del ángulo de la superficie con respecto a la fuente de luz. Como resultado, se ven colinas, valles y otros detalles del terreno naturales en el mapa.

La **Pendiente** determina el ángulo de inclinación de la superficie basándose en los datos de elevación de los puntos del mapa. Los cálculos del ángulo de inclinación se realizan considerando los cambios de elevación y las distancias entre los puntos, y representando este cambio como un ángulo de inclinación.

La **Altitud** representa la elevación de los puntos en el mapa con respecto al nivel del mar. Te ayuda a comprender cómo cambia el terreno en altura. Esta característica es particularmente útil para actividades como el senderismo o el ciclismo de montaña, donde conocer la altitud puede ayudar a planificar rutas y gestionar el esfuerzo físico. Los datos de altitud se derivan de modelos de elevación y proporcionan una vista clara de los puntos altos y bajos, lo que facilita la evaluación de la dificultad de una ruta o la identificación de picos y valles a lo largo de tu viaje.

Los mapas ráster de **Sombreado**, **Pendiente** y **Altitud** se crean a partir de datos de terreno ráster, como los Modelos Digitales de Elevación (DEM).

**Uso:**

- *Navegación.* Ayuda a identificar pendientes pronunciadas, tanto cuesta abajo como cuesta arriba, lo que puede ser crucial para una navegación segura.
- *Planificar rutas.* Ayuda a elegir las rutas más adecuadas, considerando el terreno.
- *Estimación del terreno.* Es conveniente para visualizar el paisaje, especialmente si estás caminando o en bicicleta.


### Esquema de color predeterminado {#default-color-scheme}

| Sombreado | Pendiente | Altitud |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Sombreado* utiliza tonos oscuros para mostrar pendientes, picos y tierras bajas. El Sol virtual tiene un azimut (dirección) fijo de 315 grados.

- *Pendiente* utiliza el color para visualizar la inclinación del terreno. Puedes leer más al respecto [aquí](https://en.wikipedia.org/wiki/Grade_(slope)). Cada color corresponde a un ángulo de desviación de la horizontal. Un esquema de color *Pendiente* adicional, ***Avalancha***, está disponible en el menú **Modificar**.

- *Altitud*. El mapa de altitud colorea cada píxel según la altura del mapa calculada utilizando el gradiente de un esquema de color definido. Por lo general, los esquemas de altitud dependen mucho de la ubicación. En áreas montañosas, preferirías distribuir los colores en un rango de altitud más amplio y en áreas planas, seleccionarías un esquema de color con un rango pequeño entre la altitud mínima/máxima.

> *Por favor, lee el artículo [Esquema de colores](../personal/color-palette-schemes.md) para más información.*


### Modificar esquema de color {#modify-color-scheme}

:::info Función de pago
*Modificar esquema de color* es una función de pago de **OsmAnd Pro** para [iOS](../purchases/ios.md#pro-features) y [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

La función *Modificar esquema de color* te permite seleccionar un esquema de color:

- De una [lista predefinida](#default-color-scheme).
- De archivos de paleta de colores que hayas creado en tu ordenador. Los archivos personalizados se pueden añadir a OsmAnd utilizando la [herramienta de importación/exportación](../personal/import-export.md).

Puedes [editar estas paletas](../personal/color-palette-schemes.md#edit-palette-file) para personalizar la apariencia de mapas y rutas.


### Visibilidad {#visibility}

| Visibilidad 31% | Visibilidad 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

La función *Visibilidad* se utiliza para ajustar la transparencia de las sombras para el sombreado y los colores utilizados para representar el ángulo en el parámetro de pendiente.

### Niveles de zoom {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

La función *Niveles de escala* te permite establecer los valores mínimo y máximo de los niveles de zoom del mapa, que van del 4 al 19, en los que se mostrarán las capas de mapa de sombreado o pendiente.

### Tamaño de la caché {#cache-size}

El **tamaño de la caché** es una sección informativa que muestra la cantidad de memoria de tu dispositivo que se utiliza actualmente para los datos de *Terreno*. Cada vez que visualizas información de *Sombreado* o *Pendiente* en un mapa, todos estos datos se almacenan temporalmente en la caché para un acceso rápido y un uso posterior, evitando una carga adicional en el procesador de tu dispositivo.

**Vaciar la caché** es a veces necesario para liberar espacio en tu dispositivo o para resolver posibles problemas de rendimiento. Para vaciar la caché, debes ir a la *Configuración del sistema* del dispositivo, luego la ruta puede ser la siguiente: *Aplicaciones → OsmAnd → Almacenamiento → Vaciar caché*.


### Motor de renderizado (Android) {#rendering-engine-android}

El **Sombreado** y la **Pendiente** se muestran y ajustan en cualquier [motor de renderizado de mapas](../personal/global-settings.md#map-rendering-engine) seleccionado.

1. Si utilizas el **Motor de renderizado de mapas Versión 1**, necesitas usar la [descarga](../start-with/download-maps.md) normal de mapas ráster de Sombreado y Pendiente.

2. Si utilizas el **Motor de renderizado de mapas Versión 2 (OpenGL)**:
    - Puedes seguir utilizando el tipo de descarga normal de mapas ráster de Sombreado y Pendiente. Sin embargo, para hacerlo, deberás activar el [complemento de desarrollo de OsmAnd](../plugins/development.md) y habilitar la configuración [Usar formato SQLite ráster para sombreado y pendiente](../plugins/development.md#terrain).

    - Alternativamente, puedes usar la descarga de [Mapa de terreno (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Esto ahorra espacio de memoria en tu dispositivo, y los efectos de Sombreado, Pendiente y Relieve 3D se generarán a partir de ellos usando tu dispositivo.


### Acciones rápidas {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Puedes usar los botones de *Acción rápida* en la pantalla del mapa para alternar la visibilidad de las capas de [Curvas de nivel](#contour-lines), [Terreno](#terrain) y el [esquema de color del terreno](#default-color-scheme). Dependiendo de la capa seleccionada en el menú Configurar mapa, asignar una acción de *Terreno* al botón mostrará *Sombreado*, *Pendiente* o *Altitud*.

La configuración principal para *Mostrar u ocultar tipos de mapa* se encuentra en la sección Topografía del menú Configurar mapa. En el artículo [Acción rápida](../widgets/quick-action.md#configure-map), puedes encontrar una lista de capas disponibles para mostrar. Si necesitas acceso rápido a esta configuración de mapa, utiliza la herramienta *Botón personalizado*.

- Ve a [Añadir acción](../widgets/quick-action.md#custom-buttons): *Menú → Configurar pantalla → Botones personalizados → Acción rápida → Añadir acción → Configurar mapa*.
- Añade uno o más botones de QA para cambiar la visibilidad de una capa topográfica en particular.


## Relieve 3D {#3d-relief}

:::info Función Pro
El Relieve 3D es una función de pago de [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

La función de Relieve 3D produce un relieve elevado y proporciona una representación tridimensional del paisaje. El Relieve 3D funciona sin conexión y se puede utilizar con [mapas vectoriales de OsmAnd](../map/vector-maps.md) o cualquier [mapa ráster](../map/raster-maps.md#select-raster-maps) como [Fuente de mapa](../map/raster-maps.md#main) o como [Capa de fondo/superposición](../map/raster-maps.md#overlay-layer).

***Cómo mostrar el Relieve 3D en el mapa.***

- Adquiere una suscripción a **OsmAnd Pro** para [iOS](../purchases/ios.md#pro-features) o [Android](../purchases/android.md#pro-features).

- Ve a [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: desplázate hasta la sección *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: desplázate hasta la sección *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Descarga el [mapa de Terreno (3D)](#3d-relief-maps) de las regiones, si es necesario.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Capa de mapa vectorial | Capa de mapa ráster |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Capa de mapa vectorial | Capa de mapa ráster |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Exageración vertical {#vertical-exaggeration}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Exageración vertical*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Exageración vertical*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

La *exageración vertical* es un coeficiente especial para el *relieve 3D*. Puedes cambiar la escala (*exageración vertical*) de x1 a x3. Esta función te permite ver contornos de terreno más suaves con mayor detalle.


### Sombreado y Relieve 3D {#hillshade-and-3d-relief}

| Sombreado | Relieve 3D |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

El **Sombreado** es un tipo de mapa que muestra el terreno utilizando sombras, creando una representación visual de la pendiente y la forma de la superficie terrestre.
El **Relieve 3D** es una característica que añade efectos tridimensionales al mapa.

Si **desactivas** *Sombreado* y **activas** *Relieve 3D*, las sombras del relieve seguirán siendo visibles porque *Sombreado* y *Relieve 3D* son dos formas diferentes de visualizar un mapa. *Sombreado* crea sombras basadas en el terreno y las añade al mapa, mientras que *Relieve 3D* modela elementos 3D para mostrar la profundidad y la forma del terreno, y las sombras son parte de la visualización. Estas características pueden funcionar en paralelo, y desactivar *Sombreado* no afecta la forma en que se muestran los efectos 3D.

Cuando el **Sombreado** está **activado**, una imagen con sombras de relieve aparece más detallada, oscura y escalonada que una imagen de *Relieve 3D*. La explicación es que el *Sombreado* enfatiza los gradientes y contrastes del terreno, creando una imagen más nítida y detallada. La función *Relieve 3D* le da al mapa una apariencia más fluida y suavizada, suavizando el terreno y potencialmente reduciendo la visibilidad de algunos detalles más finos.


## Combinar tipos de capas {#combine-layer-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd te permite combinar varios tipos de capas de mapa para una visualización más visual.

- La combinación de **Curvas de nivel** y **Sombreado** es óptima para estimar visual y numéricamente la inclinación de las laderas de las montañas.
- La combinación de las capas de **Curvas de nivel** y **Pendiente** es la mejor para estimar la inclinación de la pendiente y encontrar puntos con la misma altura.
- La combinación de las capas de **Relieve 3D** y **Sombreado** te permite obtener una representación más realista y visual del terreno, el relieve y los detalles del paisaje. Esta combinación es especialmente adecuada para terrenos montañosos y con colinas.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Cómo restaurar la compra del complemento Topografía (anteriormente Curvas de nivel). [(verificación)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Las curvas de nivel, los datos de elevación o el relieve 3D no se muestran. [(verificación)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. El mapa cambia automáticamente al modo 3D durante la navegación:
    - Asegúrate de que el botón **Modo 3D** esté deshabilitado en **Menú → Configurar pantalla → Botones → Botones predeterminados**.
    - Comprueba si alguna función de Terreno está habilitada en **Menú → Configurar mapa → Topografía** que pueda activar un efecto 3D.

> *Última actualización: enero de 2025*