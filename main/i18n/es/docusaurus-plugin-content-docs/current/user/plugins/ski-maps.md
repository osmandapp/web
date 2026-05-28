---
source-hash: 4e356d29cbf17a924d5de32bc4785b1214d4598771bd8a9b0b5f89a3b34f283a
sidebar_position: 14
title:  Vista de mapa de esquí
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

El complemento de vista de mapa de esquí de OsmAnd muestra pistas famosas y populares, áreas de esquí oficialmente aprobadas y mapas de senderos de la mayoría de las estaciones de esquí. Los mapas de pistas de [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) son la fuente de datos para los mapas de esquí de OsmAnd. Combinando mapas vectoriales con mapas ráster, el mapa de esquí de OsmAnd es muy preciso y será útil para instructores, escaladores y entusiastas de los deportes de invierno.

El mapa de esquí de OsmAnd es parte de los mapas vectoriales y no requiere descargas adicionales. Está deshabilitado por defecto. El mapa de esquí de OsmAnd es uno de los [Estilos de mapa](../map/vector-maps.md) que proporciona características adicionales al resaltar algunos objetos y hacer otros menos visibles.  

A continuación se muestran dos perfiles: el de la izquierda es para esquiar y el de la derecha para conducir. El perfil de Esquí resalta senderos, vías aéreas, colores de invierno y todos los objetos del mapa útiles para navegar en el área de esquí.

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
2. Establezca el estilo de mapa [Invierno y Esquí](#set-winter-and-ski-map-style) para el [perfil](../personal/profiles.md) requerido.  
3. Si es necesario, [combine mapas](#combine-maps).  
  

### Establecer estilo de mapa de invierno y esquí {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Habilitar estilo de invierno en Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Estilo de mapa del complemento de mapas de esquí en Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Habilitar estilo de invierno en iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Estilo de mapa del complemento de mapas de esquí en iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

El estilo de mapa de invierno y esquí resalta senderos, rutas de esquí de travesía, pistas de trineo e información relacionada con el invierno y el esquí. Para mostrar el estilo en el mapa, debe realizar las siguientes configuraciones:

1. Seleccione el [perfil](../personal/profiles.md) requerido.  
2. Abra [Configurar mapa](../map/configure-map-menu.md).  
3. Desplácese hacia abajo hasta Estilo de mapa/Tipo de mapa, ábralo y marque **Invierno y Esquí**.

:::tip configuraciones
El perfil de Esquí está diseñado para usarse en combinación con los estilos de Invierno y Esquí. However, the navigation type for each specific profile can be changed and set individually, so the final configuration of the profile, map style, and navigation completely depends on your settings.
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

El [mapa vectorial](../map/vector-maps.md) con el [estilo de mapa de Invierno y Esquí](../map/map-styles.md#winter-and-ski) incluido se puede completar con [Líneas de contorno](../plugins/topography.md#contour-lines) y [Sombreado de relieve](../plugins/topography.md#hillshade-slope-and-altitude-layers). A continuación se muestran dos ejemplos. Las pistas en el mapa vectorial predeterminado se muestran a la izquierda, y las pistas en el mapa vectorial combinado con el mapa ráster de *Líneas de contorno* y *Sombreado de relieve* se muestran a la derecha. In the second case, the map shows more elevation data to help estimate difficulty, risk, and distance.  


### Desactivar el estilo de mapa de esquí {#disable-ski-map-style}

Si prefiere eliminar los senderos y los colores de invierno del mapa, o si la temporada de esquí ha terminado, realice una de las siguientes acciones:

- Desmarque el estilo de mapa [Invierno y Esquí](#set-winter-and-ski-map-style) para el perfil requerido.  
- Cambie el [perfil de Esquí](../personal/profiles.md) a cualquier otro perfil.
- Deshabilite el [complemento de vista de mapa de esquí](../plugins/index.md#enable--disable).


:::info desinstalar complemento
El complemento Visor de mapas de esquí es una aplicación independiente, and disabling its display does not remove it. If you need to uninstall it, go to the Android settings using *Open Settings* in the plugin menu.  
:::


## Perfil de esquí {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Perfil de esquí en Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Perfil de esquí en iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Los estilos de mapa de invierno y esquí se pueden habilitar en cualquier perfil. But it is most valuable in the [Skiing profile](../personal/profiles.md), where it is set by default. The Skiing profile is very comfortable for the [Skiing navigation](../navigation/routing/ski-routing.md).


## Estilo de mapa de esquí {#ski-map-style}

Utilice la [leyenda del mapa de esquí](../../user/map-legend/ski-map.md) para cualquier referencia. Ayuda a identificar los tipos de pistas en el mapa, así como los tipos de vías aéreas y otras características que se pueden leer en el mapa.

Al leer el mapa, puede averiguar los detalles que son importantes para usted, como la dificultad de una pista en particular, el tipo de pista, si se realiza la preparación y si la pista está iluminada por la noche.

Las opciones descritas aquí están disponibles en la [navegación de esquí](../navigation/setup/route-navigation.md). The **Skiing navigation** sets the individual route options, which apply only to skiing.


:::info estilo de renderizado
El mapa de esquí de OsmAnd está construido como uno de los estilos de renderizado, that determines which objects to show on the map and the appearance of objects. All rendering styles are described in the [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) file. For the rules that define the internal structure of the XML file, see the [Rendering documentation](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistas por dificultad {#pistes-by-difficulty}

| Color | Descripción |
| --- | --- |
| ![Pista para principiantes](@site/static/img/plugins/ski-maps/1c_green_1.png) | Verde - Pista para principiantes |
| ![Colinas fáciles](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Azul - Colinas fáciles |
| ![Pistas intermedias](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rojo - Pistas intermedias |
| ![Dificultad avanzada](@site/static/img/plugins/ski-maps/4c_black_1.png) | Gris - Pistas de dificultad avanzada |
| ![Dificultad experta](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Amarillo - Pistas de dificultad experta |

La dificultad de las pistas generalmente se indica con colores específicos. The colors may be different in different countries and resorts. Below are some practical guidelines.

:::tip orientación
For more specific guidance for each trail difficulty type, see the [OSM piste difficulty reference](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) or any other source that also considers slopes, obstacles, and hazards. In Winter and Ski map style, certain mapped hazards (for example avalanche-prone areas tagged as hazard=avalanche) may be shown as hazard POI on the map and should be taken into account together with piste difficulty. 
:::


### Pistas por tipo {#piste-by-types}

Las pistas difieren por tipo. A type represents different characteristics for a piste to meet the requirements of different winter-related activities: alpine skiing, classic skating, snowboarding, sled riding, backcountry skiing, ski touring, mogul skiing, night skiing, etc. Understanding the [type of the piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) on the map helps to build an optimal navigation route.

- **Pista de esquí alpino/descenso.**  
Utilizado para la navegación de esquí. This [piste type](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) has direction and difficulty, and most often it is surrounded by the boundaries of the ski resort. When a downhill piste is selected for Ski navigation, the direction of the piste is taken into consideration. If the Departure and the Destination points are established opposite to the direction of the piste, the navigation goes along the nearest aerial way.

- **Pista de esquí nórdico/de fondo.**  
También se utiliza para la navegación de esquí. This [piste type](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) has no difficulty, may or may not have a direction, and most often goes beyond the boundaries of the ski resort. When navigating along this type of pistes, the Departure and Destination points often can be switched.

- **Pista de esquí de travesía.**  
A menudo utilizada por los esquiadores para un ascenso nórdico y un descenso. The difficulty of a ski touring piste is often marked with the respective color. The Ski navigation can build a route along this type of piste, which allows you to combine the piste types.

- **Otras pistas de esquí.**  
Tipos de pistas como *Senderos de senderismo* o *Pistas de trineo* se pueden utilizar para perfiles de esquí o senderismo.


### Preparación de pistas {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Habilitar preparación en Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Preparación mostrada en Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Habilitar preparación en iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Preparación mostrada en iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Para comprobar en el mapa si una pista en particular está preparada, debe habilitar la opción **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** en la lista **<Translate android="true" ids="rendering_category_details"/>** abierta desde el menú [Configurar mapa](../map/configure-map-menu.md).  
Special machines groom the tracks to prepare them for the appropriate activity, such as classic skating, ice skating, and others. The same piste can be groomed differently in different areas.

### Rutas de pistas de esquí {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Pistas y rutas de esquí*

![Rutas deshabilitadas en Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Rutas habilitadas en Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Pistas y rutas de esquí*

![Rutas deshabilitadas en iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Rutas habilitadas en iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Para saber por qué pistas fuera de la estación de esquí puede navegar, debe habilitar la opción **Pistas y rutas de esquí** en la lista [**<Translate android="true" ids="rendering_category_routes"/>**](../map/routes.md), abierta desde el menú [Configurar mapa](../map/configure-map-menu.md).  

With the Skiing profile, the ski navigation and the [Winter and Ski map style](../map/map-styles.md#winter-and-ski) enabled, the [Ski slopes and routes](../map/routes.md#ski-slopes-and-routes) show all types of pistes that the Ski navigation can use to build navigation routes along. Such ski slope routes, if enabled, are outlined with the violet color mostly outside ski resort boundaries.  
When enabling the option [Ski slopes and routes](../map/routes.md#ski-slopes-and-routes) for a map style other than Winter and Ski, only the slopes are displayed. Other ski-related features might not be shown in this styling layer.  
Las _Pistas y rutas de esquí_ [son clicables](../map/routes.md#actions-with-routes).


### Noche e iluminación {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Habilitar modo Noche e Iluminación en Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Noche e iluminación en Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Habilitar modo Noche e Iluminación en iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Noche e Iluminación en iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

El estilo **Invierno y esquí** se puede usar con el [modo Noche o Amanecer/atardecer](../map/vector-maps.md#map-mode). A comfortable choice for those who prefer dark colors, or darkening the screen at night, as well as for those who practice night skiing. Together with the Night mode, OsmAnd Ski Maps also can show which pistes have lighting with the [Street Lighting](../map/vector-maps.md#details) option.  

Both options are in the [Configure map](../map/configure-map-menu.md) menu.  

- To enable the ***Night mode*** option, scroll down the list:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- To enable the ***Street Lighting*** option, open the list **<Translate android="true" ids="rendering_category_details"/>** and activate the option:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)