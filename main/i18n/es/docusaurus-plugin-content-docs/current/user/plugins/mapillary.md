---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
sidebar_position: 6
title:  Mapillary
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

Para desplazarse más rápido, en OsmAnd puede utilizar las vistas a nivel de calle de sus rutas o puntos de interés proporcionadas por [Mapillary](https://www.mapillary.com/) (se requiere conexión a Internet).

[La capa de Mapillary](https://www.mapillary.com/) trae imágenes a nivel de calle directamente a la aplicación OsmAnd, para que pueda ver fácilmente los alrededores de cualquier punto de interés o a lo largo de la ruta que ha planeado. Si faltan imágenes, puede añadirlas usted mismo y otros podrán utilizarlas. Esta función ha surgido de nuestra colaboración con [el equipo de Mapillary](https://www.mapillary.com/about), uniendo las ventajas de ambas aplicaciones.


## Parámetros de configuración requeridos {#required-setup-parameters}

Para mostrar imágenes a nivel de calle en el mapa de OsmAnd, debe realizar los siguientes ajustes:

1. Active el [complemento Mapillary](../plugins/#enable--disable) en la sección *Complementos* del *Menú principal*.
2. Muestre las [Imágenes a nivel de calle](#enable-layer) en el mapa para el perfil requerido en el menú Configurar mapa.


## Capa del mapa {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Puntos del complemento Mapillary en el mapa Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Puntos del complemento Mapillary en el mapa iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

La capa del mapa con imágenes de calles se muestra en el mapa de OsmAnd como filas de puntos verdes conectados.

- Las fotos de los usuarios de Mapillary se adjuntan a estos puntos verdes.
- Toque un punto verde en el mapa para abrir una foto de vista de calle. Las fotos también se pueden seleccionar de una lista en el [menú contextual del mapa](#map-context-menu), si está disponible.
- Tras la selección, la pantalla de la aplicación se divide entre el mapa de OsmAnd y las imágenes de la calle a nivel de calle de Mapillary.
- Puede aplicar [filtros](#data-filtering) para seleccionar las fotos que desea mostrar en el mapa.


### Activar capa {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Complemento Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Imágenes del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Complemento Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Imágenes del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Para mostrar las imágenes a nivel de calle de Mapillary en el mapa, debe activar esta capa en el menú [Configurar mapa](../map/configure-map-menu.md) en la sección *Mostrar*.

*Para acceder: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Visor de fotos de Mapillary

- Toque el botón del *menú de tres puntos* (&#8285;) para abrir la imagen seleccionada en la aplicación [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Toque la flecha para pasar de una imagen a otra.
:::


### Filtrado de datos {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Filtro del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtro del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Puede crear un filtro y seleccionar qué fotos mostrar en el mapa. Por ejemplo, elija ver solo imágenes recientes o solo imágenes de 360 grados.

*Para acceder: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Caché de teselas
Si las imágenes seleccionadas no se muestran, utilice **Recargar** para la **Caché de teselas**.
:::


## Menú contextual del mapa {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual del mapa del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual del mapa del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Si el complemento Mapillary está activado, puede ver fotos de las calles disponibles en un radio de 40 metros desde el punto seleccionado en el mapa. Las fotos se abren en el [menú contextual del mapa](../map/map-context-menu.md#online-photos).


## Añadir fotos {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual del mapa del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual del mapa del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Para añadir fotos, debe registrarse en la [aplicación Mapillary](https://www.mapillary.com/mobile-apps). También puede añadir fotos al menú contextual del mapa tocando el botón *Añadir fotos* en la sección [Fotos en línea](../map/map-context-menu.md#online-photos) del menú contextual del mapa. A continuación, se abrirá la aplicación Mapillary.


## Widget de Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elija un panel → <Translate android="true" ids="mapillary"/>*

![Complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Menú contextual del mapa del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elija un panel → <Translate ios="true" ids="mapillary"/>*

![Menú contextual del mapa del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

El [widget de Mapillary](../widgets/info-widgets.md#mapillary-widget) se utiliza para acceder rápidamente a la aplicación Mapillary. El widget se añade a la pantalla principal automáticamente cuando se activa el complemento Mapillary. Puede activar o desactivar el widget de Mapillary y otros widgets en el menú [Configurar pantalla](../widgets/configure-screen.md).


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)