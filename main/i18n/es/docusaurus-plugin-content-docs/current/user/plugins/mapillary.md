---
source-hash: e46e862bf3423da156a08ba066e94f7d2262dcd693d6bfcdfd87d3e6f3328253
sidebar_position: 6
title: Mapillary
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

Para moverse más rápido, en OsmAnd puede usar vistas a nivel de calle de sus rutas o puntos de interés proporcionadas por [Mapillary](https://www.mapillary.com/) (se requiere conexión a Internet).

La [capa de Mapillary](https://www.mapillary.com/) trae imágenes a nivel de calle directamente a la aplicación OsmAnd, para que pueda ver fácilmente los alrededores de cualquier lugar de interés o a lo largo de la ruta que ha planeado. Si faltan imágenes, puede agregarlas usted mismo y otros pueden usarlas. Esta característica ha surgido de nuestra colaboración con [el equipo de Mapillary](https://www.mapillary.com/about), uniendo los beneficios de ambas aplicaciones.

## Parámetros de configuración requeridos {#required-setup-parameters}

Para mostrar imágenes a nivel de calle en el mapa de OsmAnd, debe realizar las siguientes configuraciones:

1. Habilite el [complemento Mapillary](../plugins/#enable--disable) en la sección *Complementos* del *Menú principal*.
2. Muestre las [imágenes a nivel de calle](#enable-layer) en el mapa para el perfil requerido en el menú Configurar mapa.

## Capa de mapa {#map-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Puntos del complemento Mapillary en el mapa de Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Puntos del complemento Mapillary en el mapa de iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

La capa de mapa con imágenes de calles se muestra en el mapa de OsmAnd como filas de puntos verdes conectados.

- Las fotos de los usuarios de Mapillary se adjuntan a estos puntos verdes.
- Toque un punto verde en el mapa para abrir una foto de vista de calle. Las fotos también se pueden seleccionar de una lista en el [menú contextual del mapa](#map-context-menu), si están disponibles.
- Después de la selección, la pantalla de la aplicación se divide en el mapa de OsmAnd y las imágenes de calle a nivel de calle de Mapillary.
- Puede aplicar [filtros](#data-filtering) para seleccionar las fotos que desea mostrar en el mapa.

### Habilitar capa {#enable-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Complemento Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Imágenes del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Complemento Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Imágenes del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Para mostrar las imágenes a nivel de calle de Mapillary en el mapa, debe habilitar esta capa en el menú [Configurar mapa](../map/configure-map-menu.md) en la sección *Mostrar*.

*Para acceder: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Visor de fotos de Mapillary

- Toque el botón de *menú de tres puntos* (&#8285;) para abrir la imagen seleccionada en la aplicación [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Toque la flecha para moverse de imagen a imagen.
:::

### Filtrado de datos {#data-filtering}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Filtro del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtro del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Puede crear un filtro y seleccionar qué fotos mostrar en el mapa. Por ejemplo, elija ver solo imágenes recientes o solo imágenes de 360 grados.

*Para acceder: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Caché de mosaicos
Si las imágenes seleccionadas no se muestran, use **Recargar** para la **Caché de mosaicos**.
:::

## Menú contextual del mapa {#map-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual del mapa del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual del mapa del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Si el complemento Mapillary está habilitado, puede ver fotos de calles disponibles dentro de un radio de 40 metros del punto seleccionado en el mapa. Las fotos se abren en el [menú contextual del mapa](../map/map-context-menu.md#online-photos).

## Añadir fotos {#add-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual del mapa del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual del mapa del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Para añadir fotos, debe registrarse en la [aplicación Mapillary](https://www.mapillary.com/mobile-apps). También puede añadir fotos al menú contextual del mapa tocando el botón *Añadir fotos* en la sección [Fotos en línea](../map/map-context-menu.md#online-photos) del menú contextual del mapa. Luego se abrirá la aplicación Mapillary.

## Widget de Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Elegir un panel → <Translate android="true" ids="mapillary"/>*

![Complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Menú contextual del mapa del complemento Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Elegir un panel → <Translate ios="true" ids="mapillary"/>*

![Menú contextual del mapa del complemento Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

El [widget de Mapillary](../widgets/info-widgets.md#mapillary-widget) se utiliza para obtener acceso rápido a la aplicación Mapillary. El widget se añade a la pantalla principal automáticamente cuando se habilita el complemento Mapillary. Puede habilitar o deshabilitar el widget de Mapillary y otros widgets en el menú [Configurar pantalla](../widgets/configure-screen.md).

## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: octubre de 2024*