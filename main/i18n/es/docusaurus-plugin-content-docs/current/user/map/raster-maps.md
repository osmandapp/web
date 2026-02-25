---
source-hash: 83d4ecf6d84f9f5018413830b5bf57a59206a20ae29a9582bf53a3d68c72d1e2
sidebar_position: 7
title:  Mapas ráster (en línea / sin conexión)
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

<!--
<InfoIncompleteArticle/>
-->

## Visión general {#overview}

Los mapas ráster son adiciones significativas y útiles a los mapas vectoriales de OsmAnd. Permiten combinar varias fuentes de mapas con mapas vectoriales. Por ejemplo, la información sobre colinas y pendientes se muestra como una capa ráster. Puede mostrar una superposición de rutas de senderismo, mapas de lluvia, datos de tráfico en tiempo real y una superposición de imágenes de satélite sobre un mapa vectorial base translúcido. También puede cambiar los mapas predeterminados a teselas ráster en la web.

Los mapas ráster en OsmAnd se entregan típicamente como un conjunto de pequeñas imágenes (teselas) dispuestas en una cuadrícula. A diferencia de los mapas vectoriales, que almacenan objetos como carreteras, puntos y polígonos como datos, las teselas ráster son imágenes pre-renderizadas y pueden aparecer pixeladas en niveles de zoom altos porque cada píxel tiene un valor fijo.

**Ventajas:**
- Dado que los mapas ráster están prerenderizados, se cargan más rápido, eliminando la necesidad de que el dispositivo procese y renderice datos en tiempo real.
- Los mapas ráster se pueden cargar dinámicamente mientras se navega.
- Puede crear una caché sin conexión y descargar solo las teselas que falten según sea necesario.
- Puede utilizar un número ilimitado de fuentes web externas para mapas ráster, lo que lo hace flexible para diferentes tipos de mapas, como vistas de satélite o mapas especializados.
- Los datos ráster, como la información de tráfico, se pueden actualizar regularmente después de su vencimiento (por ejemplo, cada 20-30 minutos, según la configuración).

**Desventajas:**
- Los mapas ráster ocupan significativamente más espacio que los mapas vectoriales. Por ejemplo, un mapa de una ciudad puede tener 15 MB como mapa vectorial, pero aumentar a 50 MB en el nivel de zoom 15, 200 MB en el nivel de zoom 16 y hasta 800 MB en el nivel de zoom 17.
- No se pueden tocar lugares u objetos específicos en los mapas ráster para obtener más información.
- Los mapas ráster no se pueden estilizar ni modificar para excluir objetos específicos.
- Acercar demasiado puede hacer que la imagen parezca pixelada, especialmente si no hay teselas de alta resolución disponibles.
- No es posible rotar el mapa sin rotar el texto, lo que puede dificultar la lectura de las etiquetas.


## Casos de uso {#use-cases}

Los mapas ráster tienen una amplia gama de usos. Aquí están algunos de los más populares:

- Imágenes de satélite como subcapa.
- Información de tráfico en tiempo real.
- Pronóstico de lluvia como superposición.
- Mapas topográficos con el sombreado de colinas y pendientes.
- Rutas activas de ciclismo y carrera como superposición.
- Información de embarcaciones en tiempo real.
- Teselas de OpenStreetMap en línea para la edición de OSM.

![Visión general de los mapas en línea](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
También puede cambiar [la fuente principal](#main) de mapas de mapas vectoriales a teselas en línea.
:::


## Primeros pasos {#getting-started}

**Activar el plugin**.

- **iOS**. Para *iOS*, esta función funciona por defecto.
- **Android**. Para *Android*, para usar mapas ráster en OsmAnd necesita activar el [plugin de Mapas en línea](../plugins/online-map.md). Siga estos pasos: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**[Cambiar parámetros de la capa](#layers)**. Para mejorar la visibilidad y la mezcla de las capas de mapas ráster, puede ajustar la transparencia de la capa utilizando el control deslizante en pantalla. Además, puede modificar el estilo del mapa vectorial ocultando polígonos, haciendo que las capas de subcapa sean más visibles. Esto es especialmente útil al ver imágenes de satélite.


## Capas {#layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Mostrar mapas](@site/static/img/plugins/online-maps/show-maps-andr_new.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Mostrar mapas](@site/static/img/plugins/online-maps/show-maps-ios_new.png)  

</TabItem>

</Tabs>

En OsmAnd, los mapas ráster pueden servir como una fuente de mapa adicional junto con los mapas vectoriales predeterminados, que están optimizados para su uso sin conexión.  

Tiene la flexibilidad de agregar una o dos capas de teselas en línea para complementar su mapa base. Esto le permite ver hasta tres capas de mapa simultáneamente en su pantalla (más Terreno). Piense en ellas como un pastel: [**Subcapa**](#underlay) (base ráster debajo), [**Principal**](#main) (núcleo vectorial* o ráster), [**Superposición**](#overlay) (ráster encima), con sombreado de [**Terreno**](#terrain) sobre todo. Por ejemplo, puede tener el mapa vectorial sin conexión de OsmAnd como base Principal, superponerlo con una vista de satélite y colocar un mapa de carriles bici como Subcapa para mayor detalle.

>[Los mapas vectoriales](./vector-maps.md) están disponibles **solo** en la capa [Principal](#main) (y son los predeterminados allí). Los mapas ráster se pueden usar en las tres capas: Principal, Subcapa y Superposición.



Si desea cambiar estas capas más rápido ([Fuente de mapa principal](#main), [Superposición](#overlay), [Subcapa](#underlay) y [Terreno](#terrain)), puede agregar una [Acción rápida (Botón personalizado)](../widgets/quick-action.md) a la pantalla del mapa y asignar las acciones de mapa correspondientes a ella.

También puede ajustar la transparencia del mapa base para mezclarlo con sus capas. Si es necesario, puede habilitar un control deslizante de transparencia en la pantalla principal para ajustes rápidos.

### Principal {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,gpx_add_track"/>*  

![Mostrar mapas](@site/static/img/plugins/online-maps/map_source_1.png) ![Mostrar mapas](@site/static/img/plugins/online-maps/map_source_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps,map_settings_install_more"/>*  

![Mostrar mapas](@site/static/img/plugins/online-maps/map_type_new.png)

</TabItem>

</Tabs>

Por defecto, el mapa principal está configurado en [Mapas vectoriales sin conexión](./vector-maps.md) (mapas de OsmAnd), optimizados para uso sin conexión. Puede elegir una fuente de mapa diferente de la lista (_Agregar más_(Android) o _Instalar más_ (iOS)) o [agregar](#add-new-online-source) la suya propia.

### Superposición {#overlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configurar subcapa / superposición Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configurar subcapa / superposición iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Activar/desactivar* la capa de mapa de Superposición.
2. *Transparencia de superposición* (*Android*)/ *Transparencia* de la superposición (*iOS*).
3. *Mostrar control deslizante de transparencia* (*Android*) / *Mostrar control deslizante en el mapa* (*iOS*). Acceso rápido a la configuración de transparencia.
4. *Fuente del mapa de superposición* (*Android*) / *Capas disponibles* (*iOS*). Seleccione un mapa de teselas en línea de la lista para agregarlo directamente como su capa de Superposición.
5. *Mostrar símbolos del mapa* - como texto, señales de tráfico y otros.  
6. *Agregar fuente en línea* (*iOS*). [Agregar nueva fuente en línea](#add-new-online-source).
7. *Importar desde documentos* (*iOS*).

### Subcapa {#underlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configurar subcapa / superposición Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configurar subcapa / superposición iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Activar/desactivar* la Subcapa.
2. *Transparencia del mapa base*.
3. *Mostrar control deslizante de transparencia* (*Android*) / *Mostrar control deslizante en el mapa* (*iOS*). Acceso rápido a la configuración de transparencia.
4. *Fuente del mapa de subcapa* (*Android*) / *Capas disponibles* (*iOS*). Seleccione un mapa de teselas en línea de la lista para agregarlo directamente como su capa de Subcapa.
5. *Mostrar/Ocultar polígonos*.
6. *Agregar fuente en línea* (*iOS*). [Agregar nueva fuente en línea](#add-new-online-source).
7. *Importar desde documentos* (*iOS*).

### Terreno {#terrain}

![Capas de terreno](@site/static/img/plugins/online-maps/terrain_two_layers.png)

En el contexto de los mapas ráster, [Terreno](../plugins/topography.md#terrain) se refiere a una capa de sombreado de relieve que ayuda a visualizar la forma del paisaje en un mapa plano. Esta capa se basa en datos de terreno ráster y se muestra encima del mapa base para mejorar la percepción de las pendientes y las formas del terreno.

El sombreado de terreno es una de las capas ráster disponibles en OsmAnd y representa una visualización de relieve coloreada derivada de datos de elevación. 

Para usar la capa de Terreno necesita:
1. Comprar el plugin de Topografía:
    - [Compras en Android](../purchases/android.md)
    - [Compras en iOS](../purchases/ios.md)
2. Activar el [plugin de Topografía](../plugins/topography.md):  
    *Menú → Plugins → ︙ → Activar*
3. Seleccione su región requerida y descargue Sombreados o Pendientes (para Maps+) o Mapa de terreno 3D (para Pro).
4. El proceso de descarga puede llevar algún tiempo, dependiendo del tamaño de la región seleccionada y la velocidad de su conexión a Internet.

La visualización de terreno se puede combinar con otras capas ráster y con el mapa vectorial predeterminado.

Funciones de terreno más avanzadas, incluyendo relieve 3D (solo Pro) y opciones adicionales relacionadas con el terreno, se describen en el artículo de [Topografía](../plugins/topography.md).

<!--
## Sombreado de relieve / Pendiente {#hillshade--slope}

![Capas de terreno](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Sombreado de relieve** y **Pendiente** son mapas ráster sin conexión que muestran el relieve del terreno. Se muestran como una capa de mapa especial, una segunda superposición en el mapa base. Los mapas contienen información de elevación adicional para ayudarle a comprender con mayor precisión la pendiente y las sombras del paisaje. La información de *Sombreado de relieve* y *Pendiente* se basa en datos de una única fuente, el *archivo Global planet*, y se divide en regiones.  

No necesita cambiar entre las capas de Sombreado de relieve y Pendiente, ya que se fusionan automáticamente. Puede seleccionar solo una de estas capas para mostrar en el mapa, pero también tiene la opción de combinarlas ambas [como subcapa o superposición](#layers) en otras capas para una representación más visual del terreno.

Para comenzar con Sombreado de relieve y Pendiente necesita:

1. Comprar el plugin de Topografía:
    - [Compras en Android](../purchases/android.md)
    - [Compras en iOS](../purchases/ios.md)
2. Activar el [plugin de Topografía](../plugins/topography.md):  
    *Menú → Plugins → ︙ → Activar*
3. Seleccione su región requerida y descargue **Mapa de terreno (3D)**.
4. El proceso de descarga puede llevar algún tiempo, dependiendo del tamaño de la región seleccionada y la velocidad de su conexión a Internet.


### Sombreado de relieve y Relieve 3D {#hillshade-and-3d-relief}

| Sombreado de relieve | Relieve 3D |
|--------|---------|
| ![Capas de terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Capas de terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

La diferencia de visualización del relieve en el mapa al aplicar estas configuraciones se describe en el artículo de **Topografía** en la sección correspondiente [Sombreado de relieve y Relieve 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Configurar opciones de visualización {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Capas de terreno](@site/static/img/plugins/online-maps/terrain_layers.png)

Puede personalizar el nivel de zoom para mostrar y la transparencia para Sombreado de relieve y Pendiente. Puede leer más en el [artículo de Topografía](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Relieve 3D {#3d-relief}

:::note
[Relieve 3D](../plugins/topography.md#3d-relief) es una función de pago de [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Capas de terreno](@site/static/img/plugins/online-maps/raster_maps_3d.png)

La [**función de Relieve 3D**](../plugins/topography.md#3d-relief) es una tecnología de mapeo que permite la visualización del terreno en un mapa utilizando modelos tridimensionales. Esta función agrega información de elevación a un mapa bidimensional normal, lo que crea un efecto 3D y de profundidad y le permite visualizar mejor el terreno.  

*Para comenzar a usar el Relieve 3D*:  
Necesita comprar el [plan de compra de OsmAnd Pro](../plugins/index.md#purchase), activar el [plugin de Topografía](../plugins/topography.md) y activar el elemento [Relieve 3D](../plugins/topography.md#3d-relief) en *Menú → Configurar mapa*.


*Cómo funciona la función de Relieve 3D*:  
*1.* Para crear un relieve 3D, OsmAnd recibe información sobre la elevación del terreno.  
*2.* Basado en los datos de elevación, se crea un modelo 3D para mostrar montañas, colinas, valles y otros elementos del terreno en el mapa.  
*3.* OsmAnd luego muestra estos modelos tridimensionales en un mapa plano. El mapa se puede acercar, alejar y rotar para ver el terreno desde diferentes ángulos y perspectivas.  
*4.* La visualización de las curvas de nivel en el mapa no depende de si la fuente del mapa es en línea o sin conexión.
-->


## Preparar/Copiar mapas {#preparecopy-maps}

Hay múltiples formas de agregar un nuevo mapa ráster, copiarlo desde otro dispositivo, prepararlo en un PC y pre-descargar teselas para usarlas sin conexión. Por ejemplo, puede crear su propio paquete de mapas en un PC utilizando software especial como [MOBAC, OsmAndMapCreator, etc](../../technical/map-creation/index.md). Típicamente, los mapas ráster se distribuyen como archivos con la extensión `.sqlitedb`.

Aquí están los métodos principales para agregar una nueva fuente de mapa ráster que aún no está definida en OsmAnd:

- Abrir un archivo `.sqlitedb` listo para usar con OsmAnd.
- Importar un paquete con mapas en línea preparados desde otra aplicación de OsmAnd como un **paquete** especial `.osf` a través de la [funcionalidad de Importar / exportar](../personal/import-export.md).
- Crear una nueva fuente de mapa en línea en el propio dispositivo móvil.
- Preparar una URL mágica con los parámetros de la fuente del mapa en línea y abrirla con OsmAnd.


### Agregar nueva fuente en línea {#add-new-online-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add_manually"/>*

![Agregar fuente en línea](@site/static/img/plugins/online-maps/add-online-source-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

![Agregar fuente en línea](@site/static/img/plugins/online-maps/add-online-source-2_ios.png)

</TabItem>

</Tabs>

Para crear una fuente de mapa ráster, necesita conocer la **URL de una tesela**, que es una URL específica que distribuye teselas de mapa en la Proyección de Mercator. Por ejemplo, una URL de tesela podría verse así: `https://tile.osmand.net/hd/6/55/25.png`, donde `tile.osmand.net/hd/` es la URL base.

Aquí están los parámetros clave para configurar al establecer una nueva fuente de mapa en línea:

| Parámetro | Descripción |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Proporcione un nombre para la nueva fuente de mapa en línea. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Ingrese o pegue la URL de la fuente de teselas en línea. Asegúrese de que siga el formato de URL de tesela. La URL puede contener ciertos marcadores de posición, que OsmAnd reemplazará automáticamente según la tesela específica necesaria. Los marcadores de posición más comúnmente utilizados se basan en la [convención de nombres de teselas de mapa deslizante de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames): <ul><li>`{z}` o `{0}`: Nivel de zoom</li><li>`{x}` o `{1}`: Índice X de tesela</li><li>`{y}` o `{2}`: Índice Y de tesela</li></ul> Para ejemplos de marcadores de posición menos comúnmente utilizados, consulte las [fuentes de mapas ráster en línea predefinidas](https://github.com/osmandapp/web/blob/main/main/static/tile_sources.xml). |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Este parámetro afecta cómo se muestra el mapa. <br/><ul><li>Como *tipo de mapa*, el mapa se limitará a los niveles de zoom seleccionados.</li><li>Como *superposición/subcapa*, el mapa aparecerá en los niveles de zoom seleccionados, con escalado hacia arriba o hacia abajo aplicado fuera de esos niveles.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Establezca la duración (en minutos) después de la cual las teselas en caché se actualizarán. Puede dejar este campo en blanco si no desea que las teselas se recarguen automáticamente. <br/><ul><li>1 día = 1440 minutos</li><li>1 semana = 10,080 minutos</li><li>30 días = 43,200 minutos</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Elija entre *Proyección Pseudo-Mercator* y *Proyección Elíptica de Mercator*, dependiendo de la fuente. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Seleccione cómo se deben almacenar las teselas: ya sea en un *archivo SQLiteDB* o como *un archivo de imagen por tesela*. |


### URL mágica para instalar la fuente del mapa {#magic-url-to-install-map-source}

Los mapas en línea se pueden agregar con un enlace especial a la lista de mapas ráster de OsmAnd. Haga clic en este enlace y elija OsmAnd para abrirlo:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parámetro del enlace|Ejemplo|
|:--------|:---------------|
| [Parte constante]| `http://osmand.net/add-tile-source` |
|[Separadores]| ?   & |
|[Nombre]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Niveles de zoom]|min_zoom=9 / max_zoom=15|

Encontrará un mapa en línea agregado en la lista del menú [Capa principal / Subcapa / Superposición](#layers).


## Gestionar datos de mapas {#manage-map-data}

Los mapas ráster pueden ocupar una cantidad significativa de espacio en disco, por lo que es posible que deba revisarlo regularmente. Para grandes conjuntos de datos, se recomienda utilizar una *fuente ráster SQLite* porque almacenará todas las teselas en 1 archivo grande (base de datos SQLite).

- [**Formato SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Formato Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Para cambiar el formato de las teselas, puede elegir <Translate android="true" ids="storage_format"/> en el menú de edición de los mapas en línea:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → elija mapas en línea →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Limpiar caché de teselas {#clear-tile-cache}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → elija mapas en línea →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*

![Lista de fuentes en línea](@site/static/img/plugins/online-maps/clear_cache_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*

![Lista de fuentes en línea](@site/static/img/plugins/online-maps/clear_cache_ios.png)
</TabItem>

</Tabs>

Las teselas se almacenan en la caché cuando se utilizan mapas ráster en línea como capa Principal / Superposición / Subcapa. Puede ver el tamaño de su archivo SQ Lite debajo del nombre de su mapa en línea en la lista. A veces se requiere una limpieza regular para acelerar la visualización de las teselas o para actualizar los datos.  

### Descargar / Actualizar teselas {#download--update-tiles}

Si desea acceder a los mapas ráster sin conexión, es posible que necesite precargar las teselas. Esto se puede hacer en su dispositivo móvil, pero tenga en cuenta que algunos servicios pueden bloquear descargas de paquetes grandes. También puede usar la misma función para actualizar las teselas ya descargadas para áreas seleccionadas; de lo contrario, OsmAnd continuará mostrando las teselas que ya están almacenadas en la caché.  

Para que los mapas actualicen automáticamente las teselas después de un tiempo, puede establecer un [Tiempo de expiración](#add-new-online-source), luego OsmAnd recargará las teselas tan pronto como se muestren.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="mapas-ráster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="mapas-ráster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="mapas-ráster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="mapas-ráster"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Descargar teselas iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Para descargar o actualizar teselas ráster, debe seleccionar la fuente del mapa en línea como la [Fuente de mapa principal](#layers) (**Android / iOS**). También puede seleccionar teselas en línea por separado para el mapa de [Superposición](#overlay) o para la [Subcapa](#underlay) (Solo para **Android**).

- Para la versión de **Android** de la aplicación OsmAnd, debe seleccionar un área según el tamaño de la pantalla de su dispositivo y hacer una pulsación larga en el mapa. Luego seleccione [*Acciones*](../map/map-context-menu.md#update--download-online-maps) en el menú contextual del mapa y la opción *Descargar mapa* o *Actualizar mapa*. En la pantalla de Descarga de mapa, realice cambios en la configuración necesaria y toque Descargar.  

- En la versión de **iOS** de la aplicación OsmAnd, debe hacer una pulsación larga en el mapa, luego seleccionar [*Acciones*](../map/map-context-menu.md#update--download-online-maps) y la opción *Descargar mapa* o *Actualizar mapa* del menú contextual del mapa. En la pantalla de Descarga de mapa, puede seleccionar el área requerida y modificar la configuración necesaria. Después de establecer todos los parámetros, puede ver el número de teselas y el tamaño de la descarga.


### Cambiar parámetros {#change-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → elija mapas en línea →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Los mapas ráster se pueden usar tal como existen si las teselas ya están mapeadas. Si los mapas ráster se proporcionan en línea, siempre hay una URL base que debe configurarse. Hay algunos parámetros básicos más que se pueden cambiar para los mapas ráster, puede leer sobre eso en [esta sección](#add-new-online-source) del artículo. Los parámetros más complejos están codificados en los componentes internos del [formato SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Artículos relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)
- [Acción rápida (Botón personalizado)](../widgets/quick-action.md)
- [Mapas en línea](../plugins/online-map.md)
- [Topografía](../plugins/topography.md)
- [Crear mapas ráster y vectoriales sin conexión](technical/map-creation/create-offline-maps-yourself.md)