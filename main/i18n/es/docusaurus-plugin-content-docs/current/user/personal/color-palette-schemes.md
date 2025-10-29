---
source-hash: 3e1eba0c128d1ad05a1bdb817c7e495e0e8772c3818a05fe0583ef8e6277b1c5
sidebar_position: 5
title:  Esquemas de color
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

:::info Función de pago

Los esquemas de color se utilizan como parte de las funciones de pago [Maps+](../purchases/index.md) y Pro <ProFeature />.  

:::

Los esquemas de color se utilizan en la [coloración de rutas](#routes), el [terreno del mapa](#terrain) y el [mapa meteorológico](#weather), y se representan como una parte separada de la información que se puede exportar, importar y editar para cambiar el esquema de color del mapa y la visualización de datos.

Los datos de la paleta de colores están disponibles en el menú [*Mapas y recursos*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Menú → Mapas y recursos → Local → Colores*

![Paletas](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Menú → Mapas y recursos → Local → Colores*

![Paleta de colores](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Tipos de esquemas {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletas](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta de colores](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

Los archivos de terreno (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definen 3 [visualizaciones de terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Sombreado, Pendiente* y *Altitud*. Para cada tipo puede tener múltiples paletas, por ejemplo, la *pendiente de avalancha* se proporciona por defecto.

### Rutas {#routes}

Las visualizaciones de gradiente de línea utilizan archivos de paleta (`route_<type_name>_<palette_name>.txt`) para colorear las pistas GPX y las Rutas:

- Para [Rutas](../navigation/guidance/map-during-navigation.md#color): *Velocidad, Pendiente,* y *Elevación (Altitud)*.
- Para [Pistas GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Velocidad, Pendiente,* y *Elevación (Altitud), o información de sensores externos*.

### Meteorología {#weather}

Los archivos de paleta meteorológica (`weather_<type_name>.txt`) definen la visualización para las [capas meteorológicas](../plugins/weather.md#weather-layers).

### Colores {#colors}

La paleta de colores (`user_palette_default.txt`) se utiliza simplemente para colores predefinidos para asignar a [Favoritos](./favorites.md), [Pistas](./tracks/).


## Leyenda de la paleta {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="color"/></td>
    </tr>
</table>


La leyenda proporciona una forma fácil de ver y entender las diferentes marcas en el mapa. Se han añadido nuevas paletas de colores para mostrar la [**velocidad** para las pistas](../map/tracks/appearance#track-colors-in-gpx-files), el [**tipo de línea** para las rutas](../navigation/guidance/map-during-navigation.md#color), la [**altitud y pendiente** para el terreno](../plugins/topography.md#default-color-scheme), y todas las paletas de colores de las [**capas meteorológicas**](../plugins/weather.md#weather-layers).


## Editar archivo de paleta {#edit-palette-file}

Puede editar las paletas para personalizar el aspecto de los mapas y las rutas. Se pueden añadir archivos de paleta de colores propios a OsmAnd utilizando la herramienta de [importación/exportación](./import-export.md).

- *Rutas*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terreno*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Meteorología*: `weather_<type_name>.txt`.
- *Color*: `user_palette_default.txt`.

Cada línea representa un valor numérico (para la paleta de colores, es un índice) y un color RGB. Por ejemplo:

```xml
# Archivo TXT llamado *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 grados RGBA {#0---90-degree-rgba}
0,46,185,0,191
# amarillo  {#yellow-}
100,255,222,2,227
# rojo {#red}
200,255,1,1,255
# violeta {#violet}
220,130,1,255,255

```

Después de mover este archivo TXT a *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, aparecerá una nueva paleta en el menú Esquema de color.


## Leer más {#read-more}

### Acciones rápidas {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Añadir acción → Topografía → Cambiar esquema de color del terreno*

![Esquema de color](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Añadir acción → Topografía → Cambiar esquema de color del terreno*

![Paleta de colores](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Acción rápida** para cambiar la paleta para el Terreno. Se ha añadido la posibilidad de cambiar entre esquemas de color del terreno, de forma similar a como se cambia entre capas. Esto se puede hacer utilizando la herramienta [Acciones rápidas](../widgets/quick-action.md#configure-map).  


### Importar / Exportar Colores {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Acciones de perfiles Exportar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Copia de seguridad local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Acciones de perfiles Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Acciones de perfiles Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Puede importar y exportar todas las paletas de colores personalizadas y por defecto disponibles utilizando la herramienta de restauración y copia de seguridad de archivos de OsmAnd.

- Abra el *Menú* principal, *Ajustes*, desplácese hasta la sección **Importar/exportar** (*Android*) o **Copia de seguridad local** (*iOS*), y seleccione la acción requerida.
- Seleccione uno o más elementos de la lista *Color* o la opción *Seleccionar todo*.
- Todos los archivos exportados se guardan en formato `.osf`.
- Si el tamaño de los datos seleccionados es significativo, la aplicación tardará algún tiempo en preparar el archivo `.osf`.
- Consulte el artículo [*Importar / Exportar*](../personal/import-export.md) para obtener información más detallada.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)