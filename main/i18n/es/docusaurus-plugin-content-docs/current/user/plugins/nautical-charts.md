---
source-hash: 9ea8dcdea560c84f7300f1fcf64736d6b3483b4296ea97397a60522ba65d2423
sidebar_position: 7
title:  Vista de mapa náutico
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Resumen {#overview}

:::info Función de pago
El plugin Vista de mapa náutico es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

La Vista de mapa náutico es una representación gráfica detallada de océanos, mares, zonas costeras y ríos que le ayuda a navegar por el agua y a conocer las rutas populares, los obstáculos en su vía navegable, los puertos más cercanos, los fondeaderos y otros puntos de referencia importantes.

Un mapa náutico es un mapa topográfico muy detallado que ayuda a los patrones a navegar con una embarcación por un rumbo seleccionado en el agua. Es similar a un mapa de carreteras para quienes viajan en coche. A menudo llamado *'Carta'* por razones históricas, es una representación gráfica detallada de los océanos, mares, zonas costeras y ríos.

Los mapas náuticos son importantes para los navegantes profesionales y los aficionados que alquilan un barco para navegar por los canales de la ciudad. Los mapas les proporcionan diversa información, como rutas de navegación, luces de navegación, zonas de peligro, zonas en las que está permitido o prohibido navegar o atracar, etc.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>

### Por qué es importante el tema náutico {#why-the-nautical-theme-matters}

Todos los navegantes profesionales están obligados a llevar mapas náuticos oficiales en sus barcos. Estos mapas son publicados por agencias autorizadas y son bastante caros. Las agencias invierten mucho en mantener los mapas actualizados. Publican actualizaciones periódicas de los mapas, pero como se necesita tiempo para verificar la información y procesar las actualizaciones, los mapas náuticos nunca están completamente al día.

Basados en los datos de [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), los mapas náuticos de OsmAnd son creados por las personas que los utilizan. Cada usuario del mapa puede contribuir al mismo añadiendo la información que considere importante y útil para sí mismo, haciendo así el mapa más detallado y preciso, ideal para la orientación o la planificación de rutas.

## Parámetros de configuración requeridos {#required-setup-parameters}

La siguiente configuración hace que el mapa náutico aparezca en la pantalla:

1. [Comprar](../plugins/index.md#purchase) y [Activar](../plugins/index.md#enable--disable) el plugin Vista de mapa náutico.
2. [Descargar](#download-nautical-maps) los mapas náuticos.
3. Establecer el estilo de mapa [Náutico](#set-nautical-map-style) para el [perfil](../personal/profiles.md) requerido.

### Establecer estilo de mapa náutico {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Tipo de mapa náutico en Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Tipo de mapa náutico en iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Utilice la [Leyenda del mapa](../../user/map-legend/nautical-map.md) como referencia de lo que se muestra en el mapa náutico. Explica los elementos simbólicos de un mapa náutico y sirve de referencia para ayudarle a navegar en caso de duda. Al establecer el estilo de mapa Náutico, puede obtener la mejor vista de los datos náuticos descargados y mostrados.

Para cambiar el estilo de mapa actual a Náutico, debe realizar los siguientes ajustes:

1. Seleccione el [perfil](../personal/profiles.md) requerido.
2. Abra [Configurar mapa](../map/configure-map-menu.md).
3. Desplácese hasta Estilo de mapa, ábralo y marque **Náutico**.

### Descargar mapas náuticos {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Vista de mapas del plugin náutico en Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Vista de mapas del plugin náutico en iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Para una presentación óptima, los mapas pueden adaptarse a las necesidades actuales: se pueden añadir marcas y símbolos con puntos de profundidad y, si es necesario, contornos. Por otro lado, los mapas estándar con información sobre aguas interiores, costeras y cercanas a la costa de una región concreta pueden ser un buen complemento a la información sobre vías navegables de un mapa náutico.

Cuando [descarga](../start-with/download-maps.md) un mapa náutico, aparecen en el mapa más detalles relacionados con la navegación en *Barco*. Algunos tipos de [mapas náuticos](../plugins/nautical-charts/#nautical-map-style) contienen detalles como:

- **Marcas y símbolos náuticos.**
    Las marcas y símbolos contienen todas las marcas de navegación náutica tanto para la navegación interior como para la costera. Conocer estas marcas le ayudará a predecir la ubicación de rocas, obstrucciones, fondeaderos, boyas, corrientes, aguas profundas y someras, y los lados del canal, independientemente de la dirección, etc. Las marcas y símbolos se descargan una vez para todo el mundo.

- **Puntos de profundidad.**
    Los datos náuticos de los paquetes de puntos de profundidad se representan mediante números que aparecen en el agua e indican la profundidad más somera en un lugar determinado. Los puntos de profundidad están disponibles para cada hemisferio y algunas regiones.

- **Contornos de profundidad.**
    Los paquetes de contornos de profundidad le permiten definir zonas de igual profundidad. Están pensados para visualizar los cambios de relieve bajo la superficie del agua. Los contornos de profundidad pueden descargarse para determinadas zonas y desactivarse si no se necesitan.

:::info Números de profundidad
Todos los números de profundidad en los Mapas Náuticos se indican en metros.
:::

### Desactivar el estilo de mapa náutico {#disable-nautical-map-style}

Para eliminar Náutico y mostrar uno de los mapas convencionales de OsmAnd, realice una de las siguientes acciones:

- Desactive el plugin Náutico.
- Cambie el estilo del mapa a cualquier otro que no sea *Náutico*.

:::info NOTA
La desactivación del plugin Náutico no elimina los datos náuticos cargados, por lo que aunque cambie el método de renderizado de náutico a cualquier otro método cuando se descargan los datos náuticos, éstos permanecen visibles en el mapa.
:::

## Perfil náutico {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Contornos de profundidad náuticos en Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Contornos de profundidad en iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

El mapa náutico puede incluirse en cualquier perfil. Sin embargo, es más valioso en el [perfil Barco](../personal/profiles.md) y especialmente en la [navegación en Barco](../navigation/routing/boat-navigation.md).

## Estilo de mapa náutico {#nautical-map-style}

El plugin Náutico de OsmAnd amplía los estilos de mapa de la capa vectorial con el estilo de mapa Náutico. Permite mostrar los datos del mapa según las reglas de los mapas náuticos, por ejemplo: zonas amarillas para tierra y bancos de arena, zonas azul claro para aguas poco profundas, etc. Para más información, consulte [Leyenda del mapa](../../user/map-legend/nautical-map.md).

### Puntos de profundidad {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Los [paquetes](../start-with/download-maps.md#overview) de puntos de profundidad están disponibles para Europa, el hemisferio norte y el hemisferio sur y son informativos. Los puntos de profundidad indican cambios en la topografía bajo la superficie del agua, indicando la profundidad más somera. Esto es necesario para la navegación en *Barco*. Después de la descarga, es necesario activar los [Contornos de profundidad](#depth-contours) para mostrarlo en el mapa.

### Contornos de profundidad {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Contornos de profundidad náuticos en Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Contornos de profundidad en iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Cuando se muestra un mapa náutico en la pantalla, puede ajustar lo que ve:

- Mostrar u ocultar los *Contornos de profundidad*.
- Establecer el nivel de detalle de la información del fondo marino: [*Ancho de línea* y *Esquema de color de línea*](../map/vector-maps.md#-nautical-depth).

:::info NOTA
Puede ayudar a la aplicación OsmAnd a aumentar la base de datos de contornos de profundidad añadiendo su información a través de [OpenSeaMap](https://map.openseamap.org/)
:::

### Detalles del fondo marino {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Detalles del fondo marino](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Detalles del fondo marino](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Los datos del fondo marino contienen información sobre la vegetación y el material general de la superficie, como rocas, conchas, grava, coral, limo, etc. Debido a la clasificación internacional de los datos del fondo marino, existen opciones para mostrar dichos detalles en un mapa: *simple*, *categoría*, *todo* u *omitir*. Utilice la [leyenda del mapa de la zona del fondo marino](../map-legend/nautical-map.md#seabed-area) para obtener más información.

- **Simple** (*para la versión de Android*) - muestra los símbolos de las marcas marinas de acuerdo con la Ref. INT-1, indicando la naturaleza de la superficie del fondo marino.
- **Categoría** - además del símbolo de la marca marina, también muestra la etiqueta de la marca marina correspondiente, indicando el material natural, o la categoría de algas y pastos marinos.
- **Todo** - además del símbolo, la etiqueta o la categoría de la marca marina, también muestra calificativos como fino, pegajoso, grueso, etc. Para los pastos y las algas marinas, muestra los datos marcados con las etiquetas *taxon* y *genus*.
- **Omitir** - no muestra detalles del fondo marino.

:::info NOTA
Para más detalles sobre la clasificación de los detalles de la superficie y las opciones de renderizado, consulte la [wiki de marcas marinas de OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

## Artículos relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)