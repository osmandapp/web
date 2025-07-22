---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
sidebar_position: 6
title: Mapas ráster (en línea/fuera de línea)
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


<InfoIncompleteArticle/>

## Descripción general {#overview}

Los mapas ráster son adiciones significativas y útiles a los mapas vectoriales de OsmAnd. Permiten combinar varias fuentes de mapas con mapas vectoriales. Por ejemplo, la información sobre colinas y pendientes se muestra como una capa ráster. Se puede mostrar una superposición de rutas de senderismo, mapas de lluvia, datos de tráfico en tiempo real y una superposición de imágenes satelitales sobre un mapa vectorial base translúcido. También se pueden cambiar los mapas predeterminados a teselas ráster en la web.


## Casos de uso {#use-cases}

Los mapas ráster tienen una amplia gama de usos. Estos son algunos de los más populares:

- Imágenes satelitales como base.
- Información de tráfico en tiempo real.
- Pronóstico de lluvia como superposición.
- Mapas topográficos con sombreado de colinas y pendientes.
- Rutas activas de ciclismo y carrera como superposición.
- Información de embarcaciones en tiempo real.
- Teselas de OpenStreetMap en línea para la edición de OSM.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
También se puede cambiar la fuente principal de mapas de mapas vectoriales a teselas en línea.
:::


## Mapas ráster {#raster-maps}

Los mapas en línea en OsmAnd se componen de datos ráster, que consisten en píxeles (también conocidos como celdas de cuadrícula), esencialmente un conjunto de pequeñas imágenes conocidas como teselas. A diferencia de los mapas vectoriales, que representan datos como carreteras, puntos y polígonos utilizando información binaria, las teselas de mapas ráster se organizan en una cuadrícula y pueden aparecer pixeladas en niveles de zoom altos porque cada píxel tiene un valor o clase fijos.

#### Comparación con los mapas vectoriales predeterminados {#comparison-to-default-vector-maps}

**Ventajas:**

- Dado que los mapas ráster están prerrenderizados, se cargan más rápido, eliminando la necesidad de que el dispositivo procese y renderice datos en tiempo real.
- Los mapas ráster se pueden cargar dinámicamente mientras se navega.
- Se puede crear una caché fuera de línea y descargar solo las teselas que faltan según sea necesario.
- Se puede usar un número ilimitado de fuentes web externas para mapas ráster, lo que lo hace flexible para diferentes tipos de mapas, como vistas satelitales o mapas especializados.
- Los datos ráster, como la información de tráfico, se pueden actualizar regularmente después de la caducidad (por ejemplo, cada 20-30 minutos, según la configuración).

**Desventajas:**

- Los mapas ráster ocupan significativamente más espacio que los mapas vectoriales. Por ejemplo, un mapa de ciudad podría ser de 15 MB como mapa vectorial, pero aumentar a 50 MB en el nivel de zoom 15, 200 MB en el nivel de zoom 16 y hasta 800 MB en el nivel de zoom 17.
- No se pueden tocar lugares u objetos específicos en mapas ráster para obtener más información.
- Los mapas ráster no se pueden estilizar ni modificar para excluir objetos específicos.
- Un zoom excesivo puede hacer que la imagen aparezca pixelada, especialmente si no hay teselas de alta resolución disponibles.
- No es posible rotar el mapa sin rotar el texto, lo que puede dificultar la lectura de las etiquetas.


## Cómo usar mapas ráster {#how-to-use-raster-maps}

**Habilitar complemento**.

- **iOS**. Para *iOS*, esta función funciona por defecto.
- **Android**. Para *Android*, para usar mapas ráster en OsmAnd, es necesario habilitar el [complemento de mapas en línea](../plugins/online-map.md). Siga estos pasos: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Cambiar parámetros de capa**. Para mejorar la visibilidad y la mezcla de las capas de mapas ráster, se puede ajustar la transparencia de la capa usando el deslizador de la pantalla. Además, se puede modificar el estilo del mapa vectorial ocultando polígonos, haciendo que las capas subyacentes sean más visibles. Esto es especialmente útil al ver imágenes satelitales.


## Seleccionar mapas ráster {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

En OsmAnd, los mapas ráster pueden servir como una fuente de mapa adicional junto con los mapas vectoriales predeterminados, que están optimizados para uso sin conexión.

Tiene la flexibilidad de agregar una o dos capas de teselas en línea para complementar su mapa base. Esto le permite ver hasta tres capas de mapa simultáneamente en su pantalla. Por ejemplo, puede tener el mapa vectorial sin conexión de OsmAnd como base, superponerlo con una vista satelital y colocar un mapa de rutas de bicicleta como capa inferior para obtener detalles adicionales.

También puede ajustar la transparencia del mapa base para combinarlo con sus capas. Si es necesario, puede habilitar un control deslizante de transparencia en la pantalla principal para ajustes rápidos.


### Principal {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Puede elegir un estilo de mapa de la lista o [agregar](#add-new-online-raster-map-source) el suyo propio.


### Capa de superposición {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Activar/desactivar* el mapa de capa inferior.
2. *Transparencia de superposición* (*Android*)/ *Transparencia* del mapa de superposición (*iOS*).
3. *Mostrar deslizador de transparencia* (*Android*) / *Mostrar deslizador en el mapa* (*iOS*). Acceso rápido a la configuración de transparencia.
4. *Fuente del mapa de superposición* (*Android*) / *Capas disponibles* (*iOS*). Puede elegir un mapa de teselas para instalar o actualizar.
5. *Mostrar símbolos del mapa* - como texto, señales de tráfico y otros.
6. *Agregar fuente en línea* (*iOS*).
7. *Importar desde documentos* (*iOS*).


### Capa inferior {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Activar/desactivar* el mapa de capa inferior.
2. *Transparencia del mapa base*.
3. *Mostrar deslizador de transparencia* (*Android*) / *Mostrar deslizador en el mapa* (*iOS*). Acceso rápido a la configuración de transparencia.
4. *Fuente del mapa de capa inferior* (*Android*) / *Capas disponibles* (*iOS*). Puede elegir un mapa de teselas para instalar o actualizar.
5. *Mostrar/Ocultar polígonos*.
6. *Agregar fuente en línea* (*iOS*).
7. *Importar desde documentos* (*iOS*).


## Sombreado de colinas / Pendiente {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Sombreado de colinas** y **Pendiente** son mapas ráster sin conexión que muestran el relieve del terreno. Se muestran como una capa de mapa especial, una segunda superposición en el mapa base. Los mapas contienen información adicional de elevación para ayudar a comprender con mayor precisión la pendiente y las sombras del paisaje. La información de *Sombreado de colinas* y *Pendiente* se basa en datos de una única fuente, el *archivo global del planeta*, y se divide en regiones.

No es necesario cambiar entre las capas de Sombreado de colinas y Pendiente, ya que se fusionan automáticamente. Puede seleccionar solo una de estas capas para mostrar en el mapa, pero también tiene la opción de combinarlas [como capa inferior o superposición](#select-raster-maps) en otras capas para una representación más visual del terreno.

Para empezar a usar Sombreado de colinas y Pendiente, debe:

1. Adquirir el complemento de Topografía:
    - [Compras de Android](../purchases/android.md)
    - [Compras de iOS](../purchases/ios.md)
2. Habilitar el [complemento de Topografía](../plugins/topography.md):
    *Menú → Complementos → ︙ → Habilitar*
3. Seleccione la región deseada y descargue el **mapa de terreno (3D)**.
4. El proceso de descarga puede tardar algún tiempo, dependiendo del tamaño de la región seleccionada y la velocidad de su conexión a Internet.


### Sombreado de colinas y relieve 3D {#hillshade-and-3d-relief}

| Sombreado de colinas | Relieve 3D |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

La diferencia de visualización del relieve en el mapa al aplicar estas configuraciones se describe en el artículo de **Topografía** en la sección correspondiente [Sombreado de colinas y relieve 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Configurar opciones de visualización {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

Puede personalizar el nivel de zoom para mostrar y la transparencia para Sombreado de colinas y Pendiente. Puede leer más en el artículo [Topografía](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Relieve 3D {#3d-relief}

:::note
[Relieve 3D](../plugins/topography.md#3d-relief) es una función de pago de [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

La función [**Relieve 3D**](../plugins/topography.md#3d-relief) es una tecnología de mapeo que permite la visualización del terreno en un mapa utilizando modelos tridimensionales. Esta función agrega información de elevación a un mapa bidimensional normal, lo que crea un efecto 3D y de profundidad y permite visualizar mejor el terreno.

*Para empezar a usar el Relieve 3D*:
Debe adquirir el [plan de compra de OsmAnd Pro](../plugins/index.md#purchase), habilitar el [complemento de Topografía](../plugins/topography.md) y activar el elemento [Relieve 3D](../plugins/topography.md#3d-relief) en *Menú → Configurar mapa*.


*Cómo funciona la función de Relieve 3D*:
*1.* Para crear un relieve 3D, OsmAnd recibe información sobre la elevación del terreno.
*2.* Basándose en los datos de elevación, se crea un modelo 3D para mostrar montañas, colinas, valles y otros elementos del terreno en el mapa.
*3.* OsmAnd luego muestra estos modelos tridimensionales en un mapa plano. El mapa se puede acercar, alejar y rotar para ver el terreno desde diferentes ángulos y perspectivas.
*4.* La visualización de las curvas de nivel en el mapa no depende de si la fuente del mapa es en línea o fuera de línea.


## Preparar/Copiar mapas ráster al dispositivo {#preparecopy-raster-maps-to-device}

Hay varias formas de agregar un nuevo mapa ráster, copiarlo de otro dispositivo, prepararlo en una PC y descargar previamente teselas para usarlas sin conexión. Por ejemplo, puede crear su paquete de mapas en una PC usando software especial como [MOBAC, OsmAndMapCreator, etc](../../technical/map-creation/index.md). Normalmente, los mapas ráster se distribuyen como archivos con extensión `.sqlitedb`.

Aquí están los principales métodos para agregar una nueva fuente de mapa ráster que aún no está definida en OsmAnd:

- Abrir un archivo `.sqlitedb` listo para usar con OsmAnd.
- Importar un paquete con mapas en línea preparados de otra aplicación OsmAnd como un **paquete** `.osf` especial a través de la [funcionalidad de Importar/exportar](../personal/import-export.md).
- Crear una nueva fuente de mapa en línea en el propio dispositivo móvil.
- Preparar una URL mágica con parámetros de fuente de mapa en línea y abrirla con OsmAnd.


### Agregar nueva fuente de mapa ráster en línea {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

Para crear una fuente de mapa ráster, necesita conocer la **URL de una tesela**, que es una URL específica que distribuye teselas de mapa en la Proyección de Mercator. Por ejemplo, una URL de tesela podría verse así: `https://tile.osmand.net/hd/6/55/25.png`, donde `tile.osmand.net/hd/` es la URL base.

Aquí están los parámetros clave para configurar al configurar una nueva fuente de mapa en línea:

| Parámetro | Descripción |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Proporcione un nombre para la nueva fuente de mapa en línea. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Ingrese o pegue la URL de la fuente de teselas en línea. Asegúrese de que siga el formato de URL de teselas. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Este parámetro afecta la forma en que se muestra el mapa. <br/><ul><li>Como *tipo de mapa*, el mapa estará limitado a los niveles de zoom seleccionados.</li><li>Como *superposición/subyacente*, el mapa aparecerá en los niveles de zoom seleccionados, con escalado ascendente o descendente aplicado fuera de esos niveles.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Establezca la duración (en minutos) después de la cual las teselas en caché se actualizarán. Puede dejar este campo en blanco si no desea que las teselas se recarguen automáticamente. <br/><ul><li>1 día = 1440 minutos</li><li>1 semana = 10,080 minutos</li><li>30 días = 43,200 minutos</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Elija entre *Proyección Pseudo-Mercator* y *Proyección Mercator Elíptica*, según la fuente. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Seleccione cómo se deben almacenar las teselas: ya sea en un *archivo SQLiteDB* o como *un archivo de imagen por tesela*. |


### URL mágica para instalar la fuente del mapa {#magic-url-to-install-map-source}

Los mapas en línea se pueden agregar con un enlace especial a la lista de mapas ráster de OsmAnd. Haga clic en este enlace y elija OsmAnd para abrir:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parámetro del enlace|Ejemplo|
|:--------|:---------------|
| [Parte constante]| `http://osmand.net/add-tile-source` |
|[Separadores]| ?   & |
|[Nombre]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Niveles de zoom]|min_zoom=9 / max_zoom=15|

Encontrará un mapa en línea añadido en la lista del menú [Capa principal / inferior / superpuesta](#select-raster-maps).


## Gestionar mapas ráster {#manage-raster-maps}

Los mapas ráster pueden ocupar una cantidad significativa de espacio en disco, por lo que es posible que deba revisarlos regularmente. Para grandes conjuntos de datos, se recomienda usar la *fuente ráster SQLite* porque almacenará todas las teselas en un archivo grande (base de datos SQLite).

- [**Formato SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Formato Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Para cambiar el formato de las teselas, puede elegir <Translate android="true" ids="storage_format"/> en el menú de edición de mapas en línea:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → elegir mapas en línea →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Borrar caché de mapas ráster {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Las teselas se almacenan en la caché al usar mapas ráster en línea como capa principal / superpuesta / inferior. Puede ver el tamaño de su archivo SQ Lite debajo del nombre de su mapa en línea en la lista. A veces se requiere una limpieza regular para acelerar la visualización de las teselas o para actualizar los datos.

Para borrar la caché de teselas del mapa, debe hacer lo siguiente:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → elegir mapas en línea →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Descargar / Actualizar teselas {#download--update-tiles}

Si desea acceder a mapas ráster sin conexión, es posible que deba precargar teselas. Esto se puede hacer en su dispositivo móvil, pero tenga en cuenta que algunos servicios pueden bloquear descargas de paquetes grandes. También puede usar la misma función para actualizar teselas ya descargadas para áreas seleccionadas; de lo contrario, OsmAnd continuará mostrando las teselas que ya están almacenadas en la caché.

Para que los mapas actualicen automáticamente las teselas después de un tiempo, puede establecer un [tiempo de caducidad](#add-new-online-raster-map-source), entonces OsmAnd recargará las teselas tan pronto como se muestren.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Para descargar o actualizar teselas ráster, debe seleccionar la fuente del mapa en línea como la [fuente del mapa principal](#select-raster-maps). También puede seleccionar teselas en línea por separado para el mapa de [superposición](#overlay-layer) o para el mapa de [capa inferior](#underlay-layer).

- Para la versión **Android** de la aplicación OsmAnd, debe seleccionar un área de acuerdo con el tamaño de pantalla de su dispositivo y hacer un toque largo en el mapa. Luego seleccione [Acciones](../map/map-context-menu.md#customize) en el menú contextual del mapa y la opción *Descargar mapa* o *Actualizar mapa*. En la pantalla Descargar mapa, realice los cambios en la configuración necesaria y toque Descargar.

- En la versión de iOS de la aplicación OsmAnd, debe tocar prolongadamente el mapa, luego seleccionar *Acciones* y la opción *Descargar mapa* o *Actualizar mapa* del menú contextual del mapa. En la pantalla Descargar mapa, puede seleccionar el área requerida y modificar la configuración necesaria. Después de configurar todos los parámetros, puede ver el número de teselas y el tamaño de la descarga.


### Cambiar parámetros del mapa ráster {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → elegir mapas en línea → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Los mapas ráster se pueden usar tal como existen si las teselas ya están mapeadas. Si los mapas ráster se proporcionan en línea, siempre hay una URL base que debe configurarse. Hay algunos parámetros básicos más que se pueden cambiar para los mapas ráster, puede leer sobre eso en [esta sección](#add-new-online-raster-map-source) del artículo. Los parámetros más complejos están codificados en los componentes internos del [formato SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Artículos relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

> *Última actualización: Octubre de 2024*