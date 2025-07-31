---
source-hash: 68655a6c7fe1b929b9783bb5b12d4b9eed49a59c076b848011eac29f4e3130f9
sidebar_position: 1
title: Pantalla del mapa durante la navegación
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



## Descripción general {#overview}

Este artículo describe cómo configurar la apariencia del mapa durante la navegación. Esto incluye características como la visualización de [PDI a lo largo de la ruta](#show-points-along-the-route), el uso de [alertas en pantalla](#screen-alerts), la [apariencia de la línea de ruta](#route-line-appearance) incluyendo color, ancho y flechas de giro. Estas características están estrechamente relacionadas con la [configuración de navegación de ruta](../setup/route-navigation.md#settings).


## Mapa durante la navegación {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

![Pantalla del mapa durante la navegación](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

![Pantalla del mapa durante la navegación](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Al navegar, el mapa es una herramienta visual para localizar su posición, identificar su destino, planificar su ruta y ver la guía de navegación. Puede usar el zoom para esto y arrastrar y rotar el mapa según sea necesario. El mapa también puede mostrar información de carreteras, nombres de calles, edificios y otros objetos para ayudarle a determinar fácilmente su ruta.

Durante la navegación, la apariencia del mapa se ajusta según el perfil de navegación seleccionado. Antes de iniciar la navegación, asegúrese de que la apariencia del mapa se alinee con sus preferencias sobre cómo debe funcionar mientras conduce.

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | El tiempo durante el cual la vista del mapa se sincroniza con la posición actual después de moverse. | *Valor:* <br /> Nunca, 5 seg, 10 seg, 15 seg, 20 seg, 25 seg, 30 seg, 45 seg, 60 seg, 50 seg. |
| *<Translate android="true" ids="auto_zoom_map"/>* | Escala automáticamente el mapa según su velocidad, siempre que el mapa esté sincronizado con su posición actual. | *Valor:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - zoom manual. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - el zoom es de 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - el zoom es de 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - el zoom es de 5 m. |
| *<Translate android="true" ids="snap_to_road"/>* | El icono de la posición actual se asociará con la ruta de navegación actual. | Puede desactivar esta opción, pero todas las opciones relacionadas con la carretera, como la visualización de carriles, tampoco serán visibles durante la navegación. |
| *<Translate android="true" ids="approximate_bearing"/>* | Determina el rumbo en función de la ruta de navegación que está siguiendo. | La configuración solo es visible cuando el [plugin de desarrollo de OsmAnd](../../plugins/development.md) está habilitado. <br /> Estas configuraciones deben habilitarse si la orientación del mapa direccional se invierte o se tambalea al usar [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Mostrar puntos a lo largo de la ruta {#show-points-along-the-route}

La configuración *Mostrar a lo largo de la ruta* le permite configurar parámetros de ruta adicionales y es necesaria para el funcionamiento de widgets como el [Nombre de la calle](../../widgets/nav-widgets#street-name) y el [Widget de alerta](../../widgets/nav-widgets.md#alert-widget). Las opciones incluyen la visualización de [**PDI**](#points-of-interest-pois) y [**Mis favoritos**](#my-favorites) a lo largo de la ruta o su uso como una adición a los ya configurados para el perfil, así como la visualización de una lista completa de [**Advertencias de tráfico**](#traffic-warnings) a lo largo de la ruta.

- La capacidad de establecer diferentes distancias (hasta 5 km, o 3,11 millas, dependiendo de la [unidad de longitud](../../personal/profiles.md#units--formats) que establezca) desde la ruta hasta los puntos cercanos es útil cuando se utilizan tipos de enrutamiento como [Línea recta](../routing/straight-line-routing.md) o [Directo al punto](../routing/direct-to-point-routing.md).
- Para la configuración *Mostrar a lo largo de la ruta*, se recomienda utilizar [Indicaciones de voz](../guidance/voice-navigation.md) para la navegación.
- Los *PDI, Favoritos y Advertencias de tráfico* no se muestran en la lista para una ruta que ya ha recorrido.


### Ver y seleccionar puntos {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![puntos a lo largo de la ruta](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Mostrar a lo largo de la ruta*

![puntos a lo largo de la ruta](@site/static/img/navigation/show-points-along-4-ios.png)

</TabItem>

</Tabs>

Cuando crea una ruta, puede establecer los tipos de puntos que se mostrarán a lo largo de la ruta en la sección *Navegación*.


### Puntos de interés (PDI) {#points-of-interest-pois}

![Superposición de PDI Android](@site/static/img/map/poi_overlay_android.png) ![Superposición de PDI iOS](@site/static/img/map/poi_overlay_ios.png)

La configuración de PDI en [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) está asociada con la configuración **Mostrar a lo largo de la ruta**. Esta es esencialmente una configuración adicional para mostrar PDI en el mapa, directamente relacionada con la ruta creada.

Cuando especifica la visualización de ciertos PDI en el *Configurar mapa*, todos se muestran en los mapas que ha descargado, ya sea que haya seleccionado categorías o, si no le importa qué categoría, haya seleccionado PDI cercanos.

- El número y la identificación de los PDI *dependen de la escala*.

- La configuración *Mostrar a lo largo de la ruta* muestra la misma categoría que en la *superposición de PDI*, pero verá la *lista completa* de PDI seleccionados a la vez, comenzando desde el punto de la ubicación actual a la distancia establecida dentro de su ruta.

- Puede eliminar PDI innecesarios de la lista o editarlos en el [Menú contextual](../../map/map-context-menu.md) tocando uno de ellos.

- La lista contiene los [tipos de PDI](../../map/point-layers-on-map.md#poi-types) seleccionados e información breve sobre cada uno de ellos, como el *icono del tipo, el nombre, la distancia desde el punto de ubicación actual hasta el PDI a lo largo de la ruta*, e *indicaciones de qué lado de la ruta en línea recta y a qué distancia se encuentra el PDI*.


### Mis favoritos {#my-favorites}

La lista contiene todos los puntos [Favoritos](../../personal/favorites.md#favorite-point) previamente agregados cerca de la ruta que ha creado. Al igual que con los PDI, puede seleccionar la distancia a la que se encuentran estos puntos.

- Si [desactiva la visualización de Favoritos en el mapa](../../map/configure-map-menu.md), no desaparecen de la lista y continúan mostrándose en el [widget](../../widgets/nav-widgets.md#street-name) y se anuncian cuando se acerca a ellos.

- Puede agregar sus *puntos favoritos* al mapa no solo con anticipación, sino también mientras navega por una ruta.

- *Para actualizar la lista*, desactive Mis favoritos y luego vuelva a activarlos.

- Cada punto contiene un nombre o coordenadas, un grupo, la distancia desde el punto de ubicación actual hasta el *Favorito* directamente en la línea de ruta, información sobre qué tan lejos a la derecha o a la izquierda está el punto de la línea, y la dirección de la ruta.


### Advertencias de tráfico {#traffic-warnings}

Las *advertencias de tráfico* no se muestran directamente en el mapa como los *PDI* o *Mis favoritos*.

- **Para habilitar** esta opción y ver las advertencias, primero debe habilitar y configurar el [widget de alertas](../../widgets/nav-widgets.md#alert-widget).

- La opción de mostrar *advertencias de tráfico* a lo largo de su ruta le permite ver la lista completa justo antes de comenzar su ruta, lo cual es útil al planificar su viaje.

- Puede eliminar alertas innecesarias de la lista, o tocar el nombre de la alerta para [editar la ubicación](../../map/map-context-menu.md#avoid-road).


## Alertas en pantalla {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Las notificaciones, como las advertencias de tráfico o los límites de velocidad, aparecerán en la pantalla como un widget. Aparecen en la esquina inferior izquierda mientras navega. | [Tipos de widgets de alerta](../../widgets/nav-widgets.md#alert-widget) |


## Apariencia de la línea de ruta {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Ruta de navegación Android](@site/static/img/navigation/route/route_line_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Ruta de navegación Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>

Puede seleccionar la apariencia de la línea de ruta por estilo o seleccionar manualmente el color, el ancho y la transparencia de la línea. Además, puede elegir si desea mostrar flechas de giro y flechas de dirección en la línea.

**Avanzado**: la configuración Personalizar línea de ruta le permite ajustar la apariencia de la línea de ruta para mostrar cambios de elevación, subidas o bajadas significativas, hielo en la carretera, caminos sin pavimentar, autopistas y otros posibles obstáculos. También puede seleccionar o crear [esquemas de color](../../personal/color-palette-schemes.md#routes) personalizados para aplicar a la línea de ruta.


:::note
 <ProFeature/> Algunos parámetros solo se pueden usar con una <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">suscripción a OsmAnd Pro</a>.
:::


### Color {#color}

La configuración **Color** cambia los tonos de color de las líneas de ruta. Su color general cambia según el tipo seleccionado de la colección de OsmAnd, y de acuerdo con la **Leyenda del mapa**. Alternativamente, su color se convierte en el color y la transparencia que establezca manualmente.

- ***<Translate android="true" id="map_widget_renderer"/>***. Se usa con los colores predeterminados. Para una descripción completa de los colores, vaya a [Estilos de mapa predeterminados](../../map/vector-maps.md#default-map-styles).
    ![estilo de mapa](@site/static/img/navigation/route/map_st_2.png)

- ***Personalizado***. Le permite seleccionar una línea en cualquier color y transparencia preferidos. Puede seleccionar diferentes configuraciones para el mapa diurno y por separado para el mapa nocturno.
    ![personalizado](@site/static/img/navigation/route/custom.png) ![personalizado](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Muestra la altura del punto de la ruta como un degradado **verde-amarillo-rojo**. El **verde** indica el punto más bajo de la ruta, el **amarillo** indica la altura promedio del punto y el **rojo** es el más alto. Si la diferencia de altitud de la ruta es < 100 metros, el degradado se aplica parcialmente o no se aplica, por ejemplo, para un simple ascenso de 100 metros a 150 metros, el degradado será **verde-amarillo**. Tenga en cuenta que el color no representa el valor absoluto de la altitud.
    ![Altitud](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. La línea de ruta se colorea en diferentes colores según el perfil de elevación de la ruta. Una descripción detallada se encuentra en el artículo del *plugin de Topografía*, sección [Pendiente](../../plugins/topography.md#hillshade-slope-and-altitude-layers).
    ![Altitud](@site/static/img/navigation/route/Slope.png) ![Altitud](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colorea una ruta o línea de pista según la *clasificación de la carretera*. Una descripción detallada se encuentra en el artículo *Mapas vectoriales - [Estilo de carretera](../../map/vector-maps.md#road-style)*.
    ![Altitud](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Proporciona información sobre la superficie física de la carretera o sendero. Una descripción detallada se puede encontrar en el artículo *Estilo de mapa de OsmAnd - [Superficie](../../map-legend/osmand.md#surface-smoothness)* en la sección *Leyenda del mapa*.
    ![Altitud](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Clasificación de la maniobrabilidad de la carretera o sendero para vehículos con ruedas, especialmente en lo que respecta a la regularidad y suavidad de la superficie. Una descripción detallada se puede encontrar en el artículo *Estilo de mapa de OsmAnd - [Suavidad](../../map-legend/osmand.md#surface-smoothness)* en la sección *Leyenda del mapa*.
    ![Altitud](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colorea una ruta o línea de pista según la *clasificación de la carretera de invierno*. Una descripción detallada se puede encontrar en el artículo *Mapas vectoriales*, sección [Carreteras de invierno y hielo](../../map/vector-maps.md#winter-and-ski).
    ![Altitud](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Coloreado de una línea de ruta o sendero por composición del pavimento. Típicamente, se usa cuando la red de carreteras está en gran parte sin pavimentar. Una descripción detallada se puede encontrar en el artículo *Estilo de mapa de OsmAnd - [Firmeza de la superficie](../../map-legend/osmand.md#surface-smoothness)* en la sección *Leyenda del mapa*.
    ![Altitud](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Dificultad de los senderos para caballos***. Renderiza los senderos según la dificultad de los senderos para caballos.
    ![Altitud](@site/static/img/navigation/route/firmness.png)


### Ancho {#width}

Puede ajustar el ancho de la línea de ruta para que se alinee con la carretera o el camino que se muestra en el mapa. Para una identificación visual más clara, puede aumentar o disminuir manualmente el ancho de la línea según sea necesario. Para obtener más detalles, consulte el artículo *Pistas y rutas — [Apariencia](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Se usa con el ancho predeterminado establecido por OsmAnd. Una descripción completa se puede encontrar en el artículo *Mapas vectoriales*, sección [Estilo de mapa](../../map/vector-maps.md#default-map-styles).
    ![estilo de mapa](@site/static/img/navigation/route/map_st_2.png)

- ***Anchos Delgado, Medio y Negrita***. Puede seleccionar el ancho de la línea para que coincida con el ancho de la carretera, o enfatizar la línea de ruta con más fuerza en el mapa.
    ![ancho](@site/static/img/navigation/route/width_med.png)

- ***Personalizado***. Le permite mostrar una línea del ancho que necesite. Use la barra deslizante para seleccionar el ancho.
    ![personalizado](@site/static/img/navigation/route/custom_2.png)


### Flechas de giro {#turn-arrows}

La configuración Flechas de giro le permite seleccionar si se muestran flechas de giro en la línea de ruta.

- ***En el mapa***
    ![Altitud](@site/static/img/navigation/route/turn_arr_on_map_and.png) ![flecha_giro_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png)

- ***En la aplicación***
    ![Altitud](@site/static/img/navigation/route/turn_arr.png) ![flecha_giro_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](../setup/route-navigation.md)
- [Navegación por pista](../setup/gpx-navigation.md)
- [Navegación por marcadores](../setup/markers-navigation.md)
- [Detalles de la ruta](../setup/route-details.md)
- [Configuración de navegación](./navigation-settings.md)
- [Indicaciones de voz / Notificaciones](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: Diciembre de 2024*