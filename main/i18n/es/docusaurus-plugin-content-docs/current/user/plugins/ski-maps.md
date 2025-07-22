---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title: Vista de mapa de esquí
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

El complemento de vista de mapa de esquí de OsmAnd muestra pistas famosas y populares, áreas de esquí aprobadas oficialmente y mapas de senderos de la mayoría de las estaciones de esquí. Los mapas de pistas de [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) son la fuente de datos para los mapas de esquí de OsmAnd. Combinando mapas vectoriales con mapas ráster, el mapa de esquí de OsmAnd es muy preciso y será útil para instructores, escaladores y entusiastas de los deportes de invierno.

El mapa de esquí de OsmAnd es parte de los mapas vectoriales y no requiere descargas adicionales. Está deshabilitado por defecto. El mapa de esquí de OsmAnd es uno de los [Estilos de mapa](../map/vector-maps.md) que proporciona características adicionales al resaltar algunos objetos y hacer que otros sean menos visibles.

A continuación se muestran dos perfiles: el de la izquierda es para esquí y el de la derecha es para conducir. El perfil de esquí resalta senderos, vías aéreas, colores de invierno y todos los objetos del mapa útiles para navegar por la zona de esquí.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas de esquí en Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Sin mapas de esquí en Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas de esquí en iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Sin mapas de esquí en iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

La siguiente configuración hace que el mapa de esquí de OsmAnd aparezca en la pantalla:

1. Habilite el [complemento de vista de mapa de esquí](../plugins/index.md#enable--disable).
2. Establezca el estilo de mapa [Invierno y esquí](#set-winter-and-ski-map-style) para el [perfil](../personal/profiles.md) requerido.
3. Si es necesario, [combine mapas](#combine-maps).


### Establecer estilo de mapa de invierno y esquí {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Habilitar estilo de invierno en Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Estilo de mapa del complemento de mapas de esquí Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Habilitar estilo de invierno en iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Estilo de mapa del complemento de mapas de esquí iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

El estilo de mapa de invierno y esquí resalta senderos, rutas de esquí de travesía, pistas de trineo e información relacionada con el invierno y el esquí. Para mostrar el estilo en el mapa, debe realizar las siguientes configuraciones:

1. Seleccione el [perfil](../personal/profiles.md) requerido.
2. Abra [Configurar mapa](../map/configure-map-menu.md).
3. Desplácese hasta Estilo de mapa/Tipo de mapa, ábralo y marque **Invierno y esquí**.

:::tip configuraciones
El perfil de esquí está diseñado para usarse en combinación con los estilos de invierno y esquí. Sin embargo, el tipo de navegación para cada perfil específico se puede cambiar y configurar individualmente, por lo que la configuración final del perfil, el estilo del mapa y la navegación depende completamente de su configuración.
:::


### Combinar mapas {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sin combinación de mapas en Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Con combinación de mapas en Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sin combinación de mapas en iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Con combinación de mapas en iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

El [mapa vectorial](../map/vector-maps.md) con el [estilo de mapa de invierno y esquí](../map/vector-maps.md#winter-and-ski) incluido se puede completar con [líneas de contorno](../plugins/topography.md#show-contour-linesterrain) y [sombreado de relieve](../plugins/topography.md#hillshade-map). A continuación se muestran dos ejemplos. Las pistas en el mapa vectorial predeterminado se muestran a la izquierda, y las pistas en el mapa vectorial combinado con el mapa ráster de *Líneas de contorno* y *Sombreado de relieve* se muestran a la derecha. En el segundo caso, el mapa muestra más datos de elevación para ayudar a estimar la dificultad, el riesgo y la distancia.


### Deshabilitar estilo de mapa de esquí {#disable-ski-map-style}

Si se prefiere eliminar senderos y colores de invierno del mapa, o la temporada de esquí ha terminado, realice una de las siguientes acciones:

- Desmarque el estilo de mapa [Invierno y esquí](#set-winter-and-ski-map-style) para el perfil requerido.
- Cambie el [perfil de esquí](../personal/profiles.md) a cualquier otro perfil.
- Deshabilite el [complemento de vista de mapa de esquí](../plugins/index.md#enable--disable).


:::info desinstalar complemento
El complemento Visor de mapas de esquí es una aplicación separada, y deshabilitar su visualización no lo elimina. Si necesita desinstalarlo, vaya a la configuración de Android usando *Abrir configuración* en el menú del complemento.
:::


## Perfil de esquí {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Contornos de profundidad náutica en Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Contornos de profundidad en iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Los estilos de mapa de invierno y esquí se pueden habilitar en cualquier perfil. Pero es más valioso en el [perfil de esquí](../personal/profiles.md), donde está configurado por defecto. El perfil de esquí es muy cómodo para la [navegación de esquí](../navigation/routing/ski-routing.md).


## Estilo de mapa de esquí {#ski-map-style}

Utilice la [leyenda del mapa de esquí](../../user/map-legend/ski-map.md) para cualquier referencia. Ayuda a identificar los tipos de pistas en el mapa, así como los tipos de vías aéreas y otras características que se pueden leer del mapa.

Al leer el mapa, puede averiguar los detalles que son importantes para usted, como la dificultad de una pista en particular, el tipo de pista, si se realiza el mantenimiento y si la pista está iluminada por la noche.

Las opciones descritas aquí están disponibles en la [navegación de esquí](../navigation/setup/route-navigation.md). La **navegación de esquí** establece las opciones de ruta individuales, que se aplican solo al esquí.


:::info estilo de renderizado
El mapa de esquí de OsmAnd se construye como uno de los estilos de renderizado, que determina qué objetos mostrar en el mapa y la apariencia de los objetos. Todos los estilos de renderizado se describen en el archivo [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Para las reglas que definen la estructura interna del archivo XML, consulte la [documentación de renderizado](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistas por dificultad {#pistes-by-difficulty}

| Color | Descripción |
| --- | --- |
| ![Pista para principiantes](@site/static/img/plugins/ski-maps/1c_green_1.png) | Verde - Pista para principiantes |
| ![ Colinas fáciles](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Azul - Colinas fáciles |
| ![Pistas intermedias](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rojo - Pistas intermedias |
| ![Dificultad avanzada](@site/static/img/plugins/ski-maps/4c_black_1.png) | Gris - Pistas de dificultad avanzada |
| ![Dificultad experta](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Amarillo - Pistas de dificultad experta |

La dificultad de los trazados suele indicarse con colores específicos. Los colores pueden variar en diferentes países y estaciones. A continuación se presentan algunas pautas prácticas.

:::tip orientación
Para obtener una guía más específica para cada tipo de dificultad de sendero, consulte la [referencia de dificultad de pista de OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) o cualquier otra fuente que también considere pendientes, obstáculos y peligros.
:::


### Pista por tipos {#piste-by-types}

Las pistas difieren por tipo. Un tipo representa diferentes características para que una pista cumpla con los requisitos de diferentes actividades relacionadas con el invierno: esquí alpino, patinaje clásico, snowboard, trineo, esquí de travesía, esquí de montaña, esquí de baches, esquí nocturno, etc. Comprender el [tipo de pista](https://wiki.openstreetmap.org/wiki/Key:piste:type) en el mapa ayuda a construir una ruta de navegación óptima.

- **Pista de descenso/esquí alpino.**
Se utiliza para la navegación de esquí. Este [tipo de pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) tiene dirección y dificultad, y la mayoría de las veces está rodeada por los límites de la estación de esquí. Cuando se selecciona una pista de descenso para la navegación de esquí, se tiene en cuenta la dirección de la pista. Si los puntos de salida y destino se establecen opuestos a la dirección de la pista, la navegación se realiza a lo largo de la vía aérea más cercana.

- **Pista de esquí nórdico/de travesía.**
También se utiliza para la navegación de esquí. Este [tipo de pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) no tiene dificultad, puede o no tener dirección, y la mayoría de las veces va más allá de los límites de la estación de esquí. Al navegar a lo largo de este tipo de pistas, los puntos de salida y destino a menudo se pueden intercambiar.

- **Pista de esquí de travesía.**
A menudo utilizada por esquiadores para un ascenso nórdico y un descenso. La dificultad de una pista de esquí de travesía a menudo se marca con el color respectivo. La navegación de esquí puede construir una ruta a lo largo de este tipo de pista, lo que permite combinar los tipos de pista.

- **Otra pista de esquí.**
Los tipos de pistas como *Senderos para caminatas* o *Senderos para trineos* se pueden utilizar para perfiles de esquí o caminatas.


### Pistas de mantenimiento {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Habilitar el mantenimiento en Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Mantenimiento mostrado en Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Habilitar el mantenimiento en iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Mantenimiento habilitado en iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Para comprobar en el mapa si una pista en particular está preparada, debe habilitar la opción **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** en la lista **<Translate android="true" ids="rendering_category_details"/>** que se abre desde el menú [Configurar mapa](../map/configure-map-menu.md).
Máquinas especiales preparan las pistas para la actividad adecuada, como patinaje clásico, patinaje sobre hielo y otras. La misma pista puede prepararse de manera diferente en distintas áreas.

### Rutas de pistas de esquí {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Rutas deshabilitadas en Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Rutas habilitadas en Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Rutas deshabilitadas en iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Rutas habilitadas en iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Para saber qué pistas fuera de la estación de esquí puede navegar, debe habilitar la opción **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** en la lista **<Translate android="true" ids="rendering_category_routes"/>**, que se abre desde el menú [Configurar mapa](../map/configure-map-menu.md).

Con el perfil de esquí, la navegación de esquí y el [estilo de mapa de invierno y esquí](../map/vector-maps.md#winter-and-ski) habilitados, las rutas de [pistas de esquí](../map/vector-maps.md#routes) muestran todos los tipos de pistas que la navegación de esquí puede usar para construir rutas de navegación. Dichas rutas de pistas de esquí, si están habilitadas, se delinean con el color violeta, principalmente fuera de los límites de la estación de esquí.


### Noche e iluminación {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Habilitar modo nocturno e iluminación en Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Noche e iluminación en Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Habilitar modo nocturno e iluminación en iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Noche e iluminación en iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

El estilo **Invierno y esquí** se puede usar con el [modo Noche o Amanecer/Atardecer](../map/vector-maps.md#map-mode). Una opción cómoda para quienes prefieren colores oscuros, o oscurecer la pantalla por la noche, así como para quienes practican esquí nocturno. Junto con el modo Noche, los mapas de esquí de OsmAnd también pueden mostrar qué pistas tienen iluminación con la opción [Iluminación de calles](../map/vector-maps.md#details).

Ambas opciones se encuentran en el menú [Configurar mapa](../map/configure-map-menu.md).

- Para habilitar la opción ***Modo nocturno***, desplácese por la lista:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Para habilitar la opción ***Iluminación de calles***, abra la lista **<Translate android="true" ids="rendering_category_details"/>** y active la opción:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: diciembre de 2024*