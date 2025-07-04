---
source-hash: f789f8966a523942fabf582dd575007a0776da10c974c2aa53db7149d09a0cac
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



## Generalidades {#overview}

:::info Función de pago
El complemento de vista de mapa náutico es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

La vista de mapa náutico es una representación gráfica detallada de océanos, mares, áreas costeras y ríos que te ayuda a navegar por el agua y a conocer rutas populares, obstáculos en tu vía fluvial, puertos más cercanos, fondeaderos y otros puntos de referencia importantes.

Un mapa náutico es un mapa topográfico muy detallado para ayudar a los patrones a navegar una embarcación en un rumbo seleccionado en el agua. Es similar a un mapa de carreteras para quienes viajan en coche. A menudo llamado "Carta" por razones históricas, es una representación gráfica detallada de los océanos, mares, áreas costeras y ríos.

Los mapas náuticos son importantes para los marineros profesionales y los aficionados que alquilan un barco para navegar por los canales de la ciudad. Los mapas les proporcionan diversa información, como rutas de navegación, luces de navegación, zonas de peligro, zonas donde está permitido o prohibido navegar o atracar, etc.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Por qué es importante el tema náutico {#why-the-nautical-theme-matters}

Todos los marineros profesionales deben tener mapas náuticos oficiales en sus barcos. Estos mapas son publicados por agencias autorizadas y son bastante caros. Las agencias invierten mucho en mantener los mapas actualizados. Emiten actualizaciones periódicas de los mapas, pero debido a que lleva tiempo verificar la información y procesar las actualizaciones, los mapas náuticos nunca están completamente actualizados.

Basados en datos de [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), los mapas náuticos de OsmAnd son creados por personas que los utilizan. Cada usuario de mapas puede contribuir al mapa añadiendo información que considere importante y útil para sí mismo, haciendo así el mapa más detallado y preciso, ideal para la orientación o la planificación de rutas.

## Parámetros de configuración requeridos {#required-setup-parameters}

La siguiente configuración hace que el mapa náutico aparezca en la pantalla:

1. [Compra](../plugins/index.md#purchase) y [Habilita](../plugins/index.md#enable--disable) el complemento de vista de mapa náutico.
2. [Descarga](#download-nautical-maps) los mapas náuticos.
3. Establece el estilo de mapa [Náutico](#set-nautical-map-style) para el [perfil](../personal/profiles.md) requerido.

### Establecer estilo de mapa náutico {#set-nautical-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Tipo de mapa náutico en Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Tipo de mapa náutico en iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Utiliza la [Leyenda del mapa](../../user/map-legend/nautical-map.md) para cualquier referencia a lo que se muestra en el mapa náutico. Explica los elementos simbólicos de un mapa náutico y sirve como referencia para ayudarte a navegar en caso de duda. Al establecer el estilo de mapa náutico, puedes obtener la mejor vista de los datos náuticos descargados y mostrados.

Para cambiar el estilo de mapa actual a Náutico, debes realizar las siguientes configuraciones:

1. Selecciona el [perfil](../personal/profiles.md) requerido.
2. Abre [Configurar mapa](../map/configure-map-menu.md).
3. Desplázate hasta Estilo de mapa, ábrelo y marca **Náutico**.

### Descargar mapas náuticos {#download-nautical-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Vista de mapas del complemento náutico Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Vista de mapas del complemento náutico iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Para una presentación óptima, los mapas se pueden adaptar a las necesidades actuales: se pueden añadir marcas y símbolos con puntos de profundidad y, según sea necesario, contornos. Por otro lado, los mapas estándar con información sobre aguas interiores, costeras y cercanas a la costa para una región en particular pueden ser un buen complemento a la información sobre vías navegables en un mapa náutico.

Cuando [descargas](../start-with/download-maps.md) un mapa náutico, aparecen más detalles relacionados con la navegación de *Barcos* en el mapa. Algunos tipos de [mapas náuticos](../start-with/download-maps.md#type-of-maps) contienen detalles como:

- **Marcas y símbolos náuticos.**
Las marcas y símbolos contienen todas las marcas de navegación náuticas tanto para la navegación interior como costera. Conocer estas marcas te ayudará a predecir la ubicación de rocas, obstrucciones, fondeaderos, boyas, corrientes, aguas profundas y poco profundas, y los lados del canal, independientemente de la dirección, etc. Las marcas y símbolos se descargan una vez para todo el mundo.

- **Puntos de profundidad.**
Los datos náuticos de los paquetes de puntos de profundidad se representan mediante números que se muestran en el agua e indican la profundidad más baja en un lugar determinado. Los puntos de profundidad están disponibles para cada hemisferio y algunas regiones.

- **Curvas de nivel de profundidad.**
Los paquetes de curvas de nivel de profundidad te permiten definir áreas de igual profundidad. Están destinados a visualizar cambios en el relieve debajo de la superficie del agua. Las curvas de nivel de profundidad se pueden descargar para ciertas áreas y luego desactivarse si no las necesitas.

:::info Números de profundidad
Todos los números de profundidad en los mapas náuticos se indican en metros.
:::

### Deshabilitar el estilo de mapa náutico {#disable-nautical-map-style}

Para eliminar Náutico y mostrar uno de los mapas convencionales de OsmAnd, haz cualquiera de las siguientes acciones:

- Deshabilita el complemento Náutico.
- Cambia el estilo de mapa a cualquier otro que no sea *Náutico*.

:::info NOTA
Deshabilitar el complemento Náutico no elimina los datos náuticos cargados, por lo que incluso si cambias el método de renderizado de náutico a cualquier otro método cuando se descargan datos náuticos, estos permanecen visibles en el mapa.
:::

## Perfil náutico {#nautical-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Curvas de nivel de profundidad náuticas en Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Curvas de nivel de profundidad en iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

El mapa náutico se puede incluir en cualquier perfil. Sin embargo, es más valioso en el [perfil de Barco](../personal/profiles.md) y especialmente en la [navegación de Barco](../navigation/routing/boat-navigation.md).

## Estilo de mapa náutico {#nautical-map-style}

El complemento Náutico en OsmAnd extiende los estilos de mapa de capa vectorial con el estilo de mapa Náutico. Permite mostrar datos del mapa según las reglas del mapa Náutico, por ejemplo: áreas amarillas para tierra y bajíos, áreas azul claro para aguas poco profundas, etc. Para obtener más información, consulta la [Leyenda del mapa](../../user/map-legend/nautical-map.md).

### Puntos de profundidad {#depth-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Los [paquetes](../start-with/download-maps.md#type-of-maps) de puntos de profundidad están disponibles para Europa, el Hemisferio Norte y el Hemisferio Sur y son informativos. Los puntos de profundidad indican cambios en la topografía debajo de la superficie del agua, indicando la profundidad más baja. Esto es necesario para la navegación de *Barcos*. Después de la descarga, debes activar las [Curvas de nivel de profundidad](#depth-contours) para mostrarlas en el mapa.

### Curvas de nivel de profundidad {#depth-contours}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Curvas de nivel de profundidad náuticas en Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Curvas de nivel de profundidad en iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Cuando se muestra un mapa náutico en la pantalla, puedes ajustar lo que ves:

- Mostrar u ocultar las *Curvas de nivel de profundidad*.
- Establecer el nivel de detalle de la información del fondo marino: [*Ancho de línea* y *Esquema de color de línea*](../map/vector-maps.md#-nautical-depth).

:::info NOTA
Puedes ayudar a la aplicación OsmAnd a aumentar la base de datos de curvas de nivel de profundidad añadiendo tu información usando [OpenSeaMap](https://map.openseamap.org/)
:::

### Detalles del fondo marino {#seabed-details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Detalles del fondo marino](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Detalles del fondo marino](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Los datos del fondo marino contienen información sobre la vegetación y el material general de la superficie, como rocas, conchas, grava, coral, limo, etc. Debido a la clasificación internacional de los datos del fondo marino, existen opciones para mostrar dichos detalles en un mapa: *simple*, *categoría*, *todo* u *omitir*. Consulta la [leyenda del mapa de áreas del fondo marino](../map-legend/nautical-map.md#seabed-area) para obtener más información.

- **Simple** (*para la versión de Android*): muestra los símbolos de marcas marinas de acuerdo con INT-1 Ref, indicando la naturaleza de la superficie del fondo marino.
- **Categoría**: además del símbolo de marca marina, también muestra la etiqueta de marca marina relevante, indicando el material natural, o la categoría de algas marinas y pastos marinos.
- **Todo**: además del símbolo, etiqueta o categoría de marca marina, también muestra calificaciones como fino, pegajoso, grueso, etc. Para algas marinas y pastos marinos, muestra datos marcados con las etiquetas *taxon* y *genus*.
- **Omitir**: no muestra detalles del fondo marino.

:::info NOTA
Para obtener más detalles sobre la clasificación de los detalles de la superficie y las opciones de renderizado, consulta la [wiki de marcas marinas de OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

## Artículos relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

> *Última actualización: junio de 2023*